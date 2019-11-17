
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: 'hao',

        //搜索框
        search: {
            value: ''
        },
        //nav
        navChange: {
            xff: '0',
        },
        //用户
        userName: {
            offset1: 0,
            name:''
        }
    },
    getters: {
        getAuthor(state) {
            return state.search
        },
        getnavChange(state) {
            return state.navChange
        },
        getuserName(state) {
            return state.userName
        }
    },
    mutations: {
        setAuthor(state, data) {
            state.search = data
        },
        setnavChange(state, data) {
            state.navChange = data
        },
        setuserName(state, data) {
            state.userName = data
        },
    },
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        },
        setnavChange(context, data) {
            context.commit('setnavChange', data)
        },
        setuserName(context, data) {
            context.commit('setuserName', data)
        },
    }

})