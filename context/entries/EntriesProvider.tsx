import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '@/interfaces'
import { entriesApi } from '@/api'
import { useSnackbar } from 'notistack'

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE )
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const addNewEntry = async(description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] Add-Entry', payload: data })
  }

  const updateEntry = async({_id, description, status}: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status })
      dispatch({ type: '[Entry] Update-Entry', payload: data })

      if(showSnackbar) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const deleteEntry = async(entry: Entry) => {
    try {
      await entriesApi.delete(`/entries/${entry._id}`)
      dispatch({ type: '[Entry] Delete-Entry', payload: entry })
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] Refresh-Entries', payload: data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])
  

  return (
    <EntriesContext.Provider value={{
      ...state,

      // Methods
      addNewEntry,
      updateEntry,
      deleteEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}