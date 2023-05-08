import { UIState } from './'

type UIActionType = 
| { type: 'openSidebar' }
| { type: 'closeSidebar' }

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  switch (action.type) {
    case 'openSidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }
    case 'closeSidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }
    default:
      return state
  }
}