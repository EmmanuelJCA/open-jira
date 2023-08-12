import { UIState } from './'

type UIActionType = 
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }
| { type: 'UI - Set IsAddingEntry', payload: boolean }
| { type: 'UI - Start Draggin' }
| { type: 'UI - End Draggin' }

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }

    case 'UI - Set IsAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }

      case 'UI - Start Draggin':
        return {
          ...state,
          isDragging: true
        }
      case 'UI - End Draggin':
        return {
          ...state,
          isDragging: false
        }
    default:
      return state
  }
}
