<template>
  <van-list
    :offset="1000"
    v-model="loading"
    :finished="state.finished"
    @load="onLoad"
    style="background:#ddd"
  >
    <div
      class="book-card"
      v-for="(item,index) in shopcar"
      :key="index"
      style="margin-bottom:20px;padding-bottom:10px"
    >
      <div class="book-info">
        <div class="poster">
          <img :src="item.shutu" />
        </div>
        <div class="info">
          <div class="title-line">
            <a href="/book/5c70dbbe51882562046911bc/section" class="title">
              <span>{{item.bookname}}</span>
            </a>
          </div>
          <div class="media">
            <div class="desc">{{item.desc}}</div>
            <div class="author">
              <div class="author-info">
                <a
                  href="/user/57a14cc3c4c971005af0d8df"
                  target="_blank"
                  rel
                  st:name="author"
                  st:state="57a14cc3c4c971005af0d8df"
                  class="user"
                >
                  <div class="lazy avatar hero loaded">
                    <img :src="item.touxiang" alt />
                  </div>
                  <a href="/user/57a14cc3c4c971005af0d8df" target="_blank" rel class="username">
                    {{item.username}}
                    <a
                      href="/book/5c90640c5188252d7941f5bb/section/5c9065385188252da6320022"
                      target="_blank"
                      rel
                      class="rank"
                    >
                      <img :src="item.dengji" alt="lv-2" />
                    </a>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="book-bought">
        <div class="label">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/buy-icon.1323aad.svg" />
          <span>1828 人已购买</span>
        </div>
        <div class="users">
          <div v-for="(item,index) in userlist" :key="index" class="lazy avatar user loaded">
            <img :src="item" alt />
          </div>
        </div>
      </div>
      <div class="book-mobile-other">
        <button class="button--write" @click="navToDetal(item.id)">试读</button>
        <div class="buy-box">
          <button class="button--buy">购买 {{item.price}}</button>
        </div>
      </div>
    </div>
    <van-sticky>
      <ul class="book-menu-wrap">
        <li class="book-menu-item">目录</li>
        <li class="book-menu-item">介绍</li>
        <li class="book-menu-item">
          评论
          <span>200</span>
        </li>
      </ul>
    </van-sticky>
    <div style="height:1100px;background:#fff" />
  </van-list>
</template>

<script>
import Vue from "vue";
import qs from "qs";
import shop from "../store/shop";
import { Sticky } from "vant";

Vue.use(Sticky);
export default {
  data() {
    return {
      shopcar: [],
      loading: false,
      state: shop.state,
      offset: "目录",
      userlist: [
        "http://img4.imgtn.bdimg.com/it/u=581729823,2528294851&fm=26&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=413138224,3559416019&fm=26&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=4205112585,147058980&fm=11&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=3573364278,3219558724&fm=26&gp=0.jpg",
        "http://img3.imgtn.bdimg.com/it/u=297596879,2949266326&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=1771045768,776992798&fm=26&gp=0.jpg"
      ]
    };
  },
  // mounted() {
  //   this.container = this.$refs.container;
  // },
  methods: {
    onLoad() {
      if (this.state.finished == false) {
        let _id = this.$route.path;
        let id = _id.split("=")[1];
        let params = { id };
        window.console.log(id);
        params = qs.stringify(params);

        this.$axios
          .post("http://localhost:3000/shopcar", params)
          .then(({ data }) => {
            this.shopcar = data;
            window.console.log(data);
            this.loading = false;
            this.state.finished = true;
          });
      }
    },

    //跳转详情页
    navToDetal(dataid) {
      let _id = "id=" + dataid;
      this.$router.push({
        name: "details",
        params: { id: _id }
      });
    }
  }
};
</script>
<style scoped>
.book-menu-wrap {
  display: flex;
  width: 100%;
  height: 3.19rem;
  background: #fff;
  border-bottom: 2px solid #eee;
}
.book-menu-item {
  height: 100%;
  width: 130px;
  line-height: 3.19rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font: size 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.active {
  color: #007fff;
  border-bottom: 2px solid #007fff;
}
.book-info {
  padding: 0.9rem;
}
.book-card {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.75rem;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
}
.book-info {
  display: flex;
}
.poster {
  margin-right: 1rem;
}
.poster img {
  width: 5.3rem;
  height: 7.43rem;
}
.book-info .info .title-line .title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
}
.book-info .info .media .author {
  position: relative;
  align-items: center;
  margin-top: 0.75rem;
}
.hero img {
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  float: left;
}
.book-bought {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.375rem 0.5rem 0.93rem;
  border-top: 1px solid #ecf0f3;
  cursor: pointer;
}
.book-bought .label {
  display: inline-flex;
  align-items: center;
  color: #666;
  font-size: 1rem;
  font-weight: 400;
  flex-shrink: 0;
}
.book-bought .users {
  flex-grow: 1;
  margin-left: 1.5rem;
  display: inline-flex;
  flex-wrap: wrap;
  height: 1.5rem;
  overflow: hidden;
}
.book-bought .users img {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.6rem;
  border-radius: 50%;
  background-size: cover;
}
.book-mobile-other button {
  padding-left: 0.94rem;
  padding-right: 0.94rem;
  border-radius: 0.31rem;
}
.button--write {
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  color: #71777c;
  text-align: center;
  background-color: #fff;
  border: 1px solid #aeb6c0;
  margin-left: 0.31rem;
}
.book-mobile-other {
  display: flex;
}
.book-mobile-other .buy-box {
  flex-basis: 0;
  flex-grow: 1;
  margin-left: 0.8rem;
}
.book-mobile-other .button--buy {
  width: 17.8rem;
  display: block;
}
.button--buy {
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  background-color: #007fff;
  color: #fff;
  text-align: center;
}
</style>