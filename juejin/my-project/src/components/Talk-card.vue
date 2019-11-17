<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    style="width:85%;margin:auto;"
  >
    <h2 style="color: #0e0e0e;margin: 2rem 0;font-size: 1.5rem;">全部话题</h2>
    <div v-for="(item,index) in talk" :key="index" class="list-box">
      <img :src="item.img_url" alt />
      <div class="van-card__content">
        <p class="van-card__title">{{item.title_a}}</p>
        <p class="van-ellipsis">{{item.guanzhu}}</p>
        <p class="van-card__num">+ 关注</p>
      </div>
    </div>
  </van-list>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import { List, Card } from "vant";
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(List).use(Card);

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      talk: []
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/talk").then(({ data }) => {
        this.talk = this.talk.concat(data);
        window.console.log(data);

        this.loading = false;

        if (this.talk.length >= 30) {
          this.finished = true;
        }
      });
      window.console.log("到底了");
    }
  }
};
</script>

<style >
.list-box {
  margin: 0.94rem 0;
  display: flex;
}
.list-box img {
  width: 5rem;
  height: 5rem;
  border-radius: 1.25rem 1.25rem;
}

.van-card__title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.56rem;
}
.van-card__desc {
  font-size: 0.81rem;
}
.van-card__content {
  margin-left: 1.25rem;
}
.van-card__num {
  color: #37c701;
  margin: 0.31rem 0;
}
.van-ellipsis {
  margin: 0.31rem 0;
}
</style>