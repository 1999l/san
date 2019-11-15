export default {
    data: {
        //搜索框是否聚焦
        isFocusStatus: false,
        //搜索框的值
        searchText: ''
    },
    methods: {
        focus() {
            this.searchModel.isFocusStatus = true
        },
        cancel() {
            this.searchModel.isFocusStatus = false
        },
        clear() {
            this.searchModel.searchText = ''
        }
    }
}