import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

const baseUrl = "http://localhost:8088/packages";

const action = {
  getPackages({ commit }) {
    Vue.axios
      .get(baseUrl)
      .then((response) => {
        commit('setPackages', { list: response.data })
      }).catch(error => console.log(error))
  },
  addPackage(context, data) {
    Vue.axios
      .post(baseUrl, data)
      .then((response)=>{
        if (response.status === 200) {
          context.dispatch('getPackages')
        }
      }).catch(error => console.log(error))
  },
  takePackage(context , data) {
    Vue.axios
      .put(`${baseUrl}/${data.id}`, data)
      .then((response)=>{
        if (response.status === 200) {
          context.dispatch('getPackages');
        }
      }).catch(error => console.log(error))
  },
  book(context , data) {
    Vue.axios
      .put(baseUrl, data)
      .then((response)=>{
        if (response.status === 200) {
          context.dispatch('getPackages');
        }
      }).catch(error => console.log(error))
  },
  getPackagesByStatus({ commit }, status) {
    Vue.axios
      .get(`${baseUrl}?status=${status}`)
      .then((response) => {
        commit('setPackages', { list: response.data })
      }).catch(error => console.log(error))
  },
}

export default action;