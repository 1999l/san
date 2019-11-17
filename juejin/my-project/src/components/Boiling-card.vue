<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <List item-layout="vertical" style="width:90%;margin:auto;">
      <ListItem v-for="(item,index) in boiling" :key="index">
        <ListItemMeta :avatar="item.touxiang" :title="item.mingzi" :description="item.jianjie" />
        <button class="subscribe-btn follow-button">关注</button>
        <div class="item-content">{{ item.neirong }}</div>
        <img
          src="http://img4.imgtn.bdimg.com/it/u=2958967064,2714608608&fm=26&gp=0.jpg"
          style="width: 280px"
        />
        <template slot="action">
          <li>
            <Icon type="ios-thumbs-up-outline" />
            {{item.zan}}
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
import { List } from "vant";
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(List);

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      boiling: []
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/boiling").then(({ data }) => {
        this.boiling = this.boiling.concat(data);
        window.console.log(data);

        this.loading = false;

        if (this.boiling.length >= 50) {
          this.finished = true;
        }
      });
      window.console.log("到底了");
    }
  }
};
</script>
<style>
.ivu-list-item-meta {
  float: left;
}
.follow-button {
  float: right;
  border: none;
  outline: none;
  background: #fff;
  width: 3.4rem;
  height: 1.6rem;
  font-size: .8rem;
  border: 1px solid #6cbd45;
  color: #6cbd45;
}
.item-content {
  margin-top: 5.6rem;
}
.ivu-list-item-action {
  text-align: center;
  height: 1.9rem;
  border: 1px solid #ccc;
}
.ivu-list-item-action li {
  text-align: center;
  width: 50%;
  line-height: 1.9rem;
}
.van-list__finished-text {
  text-align: center;
}
.van-loading {
  text-align: center;
}
</style>