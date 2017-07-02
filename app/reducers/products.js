import { combineReducers } from 'redux'

const initialState = {
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}


const todoApps = combineReducers({
  todoApp
})

export default todoApps
