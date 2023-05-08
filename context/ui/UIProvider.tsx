import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sidemenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

  const [{ sidemenuOpen }, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE )

  const openSideMenu = () => {
    dispatch({ type: 'openSidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'closeSidebar' })
  }

  return (
    <UIContext.Provider value={{
      sidemenuOpen,
      openSideMenu,
      closeSideMenu
    }}>
      { children }
    </UIContext.Provider>
  )
}
