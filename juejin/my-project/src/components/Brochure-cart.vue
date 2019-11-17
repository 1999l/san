<template>
  <div>
    <ul class="nav-list left" style="position: fixed;
  top: 0;">
      <li class="nav-item light">
        <a href="/books">全部</a>
      </li>
      <li class="nav-item">
        <a href="/books/frontend">前端</a>
      </li>
      <li class="nav-item">
        <a href="/books/backend">后端</a>
      </li>
      <li class="nav-item">
        <a href="/books/mobile">移动开发</a>
      </li>
      <li class="nav-item">
        <a href="/books/blockchain">区块链</a>
      </li>
      <li class="nav-item">
        <a href="/books/general">通用</a>
      </li>
    </ul>

    <van-list
      :offset="10"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div style="margin-top:45px"></div>
      <van-card
        v-for="(item,index) in brochure"
        :key="index"
        :desc="item.username"
        :title="item.bookname"
        :thumb="item.shutu"
        :data-id="item.id"
        @click="shopCard(item.id)"
        style="padding: 16px 14px; border-bottom:1px solid #eee"
      >
        <div slot="tags" class="price-tab-box">
          <van-tag plain type="danger" class="text-item">{{item.zhangjie}} · {{item.goumai}} 人购买</van-tag>
          <van-tag plain type="danger" class="price-tab">{{item.price}}</van-tag>
        </div>
      </van-card>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
import store from "../store/nav";
import shop from "../store/shop";

// import qs from "qs";
Vue.use(Card)
  .use(Tag)
  .use(Button)
  .use(List);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      brochure: [],
      state: store.state,
      stata: shop.state
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/brochure").then(({ data }) => {
        this.brochure = this.brochure.concat(data);
        window.console.log(data);

        this.loading = false;

        if (this.brochure.length >= 30) {
          this.finished = true;
        }
      });
      window.console.log("到底了");
    },
    toggle(index) {
      this.offset = index;
    },

    shopCard(dataid) {
      this.stata.finished = false;
      let _id = "id=" + dataid;
      this.$router.push({
        name: "shopcar",
        params: { id: _id }
      });
      store.setxff(3);
    }
  }
};
</script>

<style >
li {
  list-style: none;
}
.van-image img {
  width: 4.4rem;
  height: 6.2rem;
}
.van-card__header {
  display: flex;
}
.nav-list {
  display: flex;
  height: 2.8rem;
  width: 100%;
  border-bottom: 1px solid #ddd;

  background: #fff;
  z-index: 90;
}
.van-card__desc::after {
  content: url(https://b-gold-cdn.xitu.io/v3/static/img/lv-2.f597b88.svg);
}
.price-tab-box {
  position: relative;
}
.full-link {
  color: #2e3135;
}
.price-tab {
  position: absolute;
  top: -1.6rem;
  left: 12.5rem;
  height: 1.9rem;
  line-height: 1.9rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  border-radius: 0.9rem;
  background-color: #f0f7ff;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color: #07f;
}
.text-item {
  font-size: 0.75rem;
  color: #909090;
}
.nav-item {
  line-height: 2.5rem;
  padding: 0 0.8rem;
}
a {
  color: #909090;
}
.light a {
  color: #2d8cf0;
}
</style>