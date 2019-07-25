export default {
  setPackages(state, payload){
    state.packages = payload.list;
  },
  // submitNewItem(state, payload) {
  //   state.todoList.push(payload)
  // },
  // checkTodoItem(state, payload) {
  //   state.todoList[state.todoList.findIndex(item => item.id === payload.id)].status = payload.status
  // },
  // setUsername(state, payload){
  //   state.username = payload.name;
  // }
}