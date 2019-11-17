<template>
  <van-list
    :offset="10"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <List item-layout="vertical" style="width:90%;margin:auto;">
      <ListItem v-for="(item,index) in newsComputed" :key="index">
        <p style="font-size: .75rem">
          <span style="color:#b71ed7">{{item.meta_list}} ·</span>
          <span>{{item.user_name}} · {{item.meta_time}} · {{item.fenlei}}</span>
        </p>
        <van-tabbar>
          <van-tabbar-item
            @click="navToDetal(item.id)"
            style="margin-top:.625rem;font-size:1rem;color:#000;"
          >{{item.wenzi}}</van-tabbar-item>
        </van-tabbar>
        <template slot="action">
          <li>
            <Icon type="ios-thumbs-up-outline" />
            {{item.ding}}
          </li>
          <li>
            <Icon type="ios-chatbubbles-outline" />
            {{item.pinglun}}
          </li>
        </template>
      </ListItem>
    </List>
  </van-list>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import { List, Tabbar, TabbarItem } from "vant";
Vue.use(VueRouter);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(ViewUI);
Vue.use(List);
import store from "../store/nav";
import searchStore from "../store/search";

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      nuggets: [],
      state: store.state,
      state1: searchStore.state
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/juejin").then(({ data }) => {
        this.nuggets = this.nuggets.concat(data);
        window.console.log(data);

        this.loading = false;

        if (this.nuggets.length >= 30) {
          this.finished = true;
        }
      });
      window.console.log("到底了");
    },
    //跳转详情页
    navToDetal(dataid) {
      let _id = "id=" + dataid;
      this.$router.push({
        name: "details",
        params: { id: _id }
      });
      store.setxff(3);
    }
  },
  computed: {
    // 被筛选过
    newsComputed() {
      // 如果有搜索的值就计算结果
      // 否则使用原来数据
      let _ = this;
      if (searchStore.state.value14) {
        // 搜索的值
        // this.searchText
        // 新闻原数据
        // this.news
        return this.nuggets.filter(function(item) {
          // console.log(this);
          if (item.wenzi.indexOf(searchStore.state.value14) >= 0) {
            return item;
          }
        });
      } else {
        return _.nuggets;
      }
    }
  },
  watch: {
    state1: {
      value14(newValue) {
        window.console.log(newValue);
      }
    }
  }
};
</script>
<style >
.van-list__finished-text {
  text-align: center;
}
.van-loading {
  text-align: center;
}
</style>