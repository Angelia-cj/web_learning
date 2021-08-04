/*
包含n个用于直接更新状态的方法的对象模块
包含多个由action触发去直接更新状态的方法的对象
 */
import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS } from './mutation-types'

export default {
  [ADD_TODO] (state, { todo }) { // 方法名不是ADD_TODO, 而是add_todo
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, { index }) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODOS] (state, { isCheck }) {
    // eslint-disable-next-line no-return-assign
    state.todos.forEach(todo => todo.complete = isCheck)
  },

  [DELETE_COMPLETE_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }

  /* [RECEIVE_TODOS] (state, todos) {
    state.todos = todos
  } */
}
