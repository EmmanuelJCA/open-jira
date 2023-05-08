import { EntriesState } from './'

type EntriesActionType = 
| { type: 'action' }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {
  switch (action.type) {
    // case 'action':
    //   return {
    //     ...state,
    //   }
    default:
      return state
  }
}