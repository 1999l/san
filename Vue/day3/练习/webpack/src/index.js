import Vue from 'vue/dist/vue'
import 'weui'
import './assets/styles.scss'

//View
import headerView from './view/header.html'
import searchView from './view/search.html'
import mainView from './view/main.html'
import footerView from './view/footer.html'

//Model
import iconTabbar from './assets/icon_tabbar.png'
import headerModel from './model/header'
import mainModel from './model/main'
import searchModel from './model/search'
import footerModel from './model/footer'


var vm = new Vue({
    el: '#app',
    data: {
        iconTabbar,
        headerModel: headerModel.data,
        mainModel: mainModel.data,
        searchModel: searchModel.data,
        footerModel: footerModel.data
    },
    methods: {
        ...searchModel.methods,
        ...footerModel.methods
    },
    computed: {
        newsComputed() {
            let _this = this;
            if (this.searchModel.searchText) {
                return this.mainModel.news.filter(function (item) {
                    if (item.title.indexOf(_this.searchModel.searchText) >= 0) {
                        return item
                    }
                })
            } else {
                return _this.mainModel.news
            }
        }
    },
    template: `
    <div>
    ${headerView}
    ${searchView}
    ${mainView}
    ${footerView}
    </div>
    `
})