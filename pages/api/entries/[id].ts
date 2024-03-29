import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { db } from '@/database'
import { Entry, IEntry } from '@/models'

type Data = 
| { message: string }
| IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const { id } = req.query

  if(!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `ID: "${id}" is not valid id` })
  }

  switch (req.method) {
    case 'GET': 
      return getEntryById(req, res)
    case 'PUT':
      return updateEntry(req, res)
    case 'DELETE':
      return deleteEntry(req, res)
  
    default:
      return res.status(200).json({ message: 'Method not allowed' })
  }

}

const updateEntry = async(req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  await db.connect()
  const entryToUpdate = await Entry.findById(id)

  if(entryToUpdate === null) {
    await db.disconnect()
    return res.status(404).json({ message: `Entry with id "${id}" not found` })
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
    await db.disconnect()
    return res.status(200).json(updatedEntry)

  } catch (error: any) {
    await db.disconnect()
    return res.status(400).json({ message: error.errors.status.message })
  }

}

const getEntryById = async(req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  await db.connect()
  const entry = await Entry.findById(id)
  await db.disconnect()

  if(!entry) {
    return res.status(404).json({ message: `Entry with id "${id}" not found` })
  }

  return res.status(200).json(entry)
}

const deleteEntry = async(req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const entryToDelete = await Entry.findById(id)

  if(entryToDelete === null) {
    await db.disconnect()
    return res.status(404).json({ message: `Entry with id "${id}" not found` })
  }

  await db.connect()
  await Entry.findByIdAndDelete(id)
  await db.disconnect()

  return res.status(200).json({ message: `Entry with id "${id}" deleted successfully` })
}
