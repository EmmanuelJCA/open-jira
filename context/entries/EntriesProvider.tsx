import { FC, PropsWithChildren, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '@/interfaces'

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: Enim aute fugiat mollit quis cupidatat pariatur ad voluptate non non officia.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'En-Progreso: Veniam proident occaecat ad pariatur consequat commodo.',
      status: 'in-progress',
      createdAt: Date.now() - 100000000
    },
    {
      _id: uuidv4(),
      description: 'Terminada: Pendiente: Quis enim officia eu nulla.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE )

  const addNewEntry = (description: string) => {

    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,

      // Methods
      addNewEntry,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}