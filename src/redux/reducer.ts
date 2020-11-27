const initialStore = {
  page: 0,
}

interface IAction {
  type: string;
  [propNumber: string]: any
}

function reducer(state = initialStore, action: IAction) {
  switch (action.type) {
    case 'ADD_PAGE':
      return {...state, page: action.page + state.page}
    default:
      return state;
  }
}

export default reducer;