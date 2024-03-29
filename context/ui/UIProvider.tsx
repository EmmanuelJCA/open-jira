import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE )

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({type: 'UI - Set IsAddingEntry', payload: isAdding})
  }

  const startDragging = () => {
    dispatch({type: 'UI - Start Draggin'})
  }

  const endDragging = () => {
    dispatch({type: 'UI - End Draggin'})
  }

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      closeSideMenu,
      openSideMenu,

      setIsAddingEntry,

      endDragging,
      startDragging
    }}>
      { children }
    </UIContext.Provider>
  )
}
