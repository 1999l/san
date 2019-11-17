<template>
  <div>
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
        <button class="button--write">试读</button>
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
  </div>
</template>

<script>
import Vue from "vue";
import qs from "qs";
import { Sticky } from "vant";
import storeNav from "../store/nav";
import Cookies from "js-cookie";

Vue.use(Sticky);
export default {
  data() {
    return {
      shopcar: [],
      state1: storeNav.state,
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
  created() {
    let _id = this.$route.path;
    let id = _id.split("=")[1];
    let params = { id };
    params = qs.stringify(params);
    this.$axios
      .post("http://localhost:3000/shopcar", params)
      .then(({ data }) => {
        this.shopcar = data;
        window.console.log(data);
      });
  },
  methods: {
    //跳转到购物车
    Shopping(dataid, shutu, price) {
      let min = Cookies.get("nicheng"); //获取name
      if (min) {
        let params = {
          username: min,
          goodid: dataid,
          goodUrl: shutu,
          goodPrice: price,
          num: 1
        };
        params = qs.stringify(params);
        this.$axios
          .post("http://localhost:3000/goodlist", params)
          .then(({ data }) => {
            if (data.code == 1) {
              storeNav.setoff(2);
            }
            window.console.log(data);
          });
        setTimeout(() => {
          this.$router.push({
            name: "shopping"
          });
        }, 1500);
      } else {
        this.$Message.info("请先登录");
      }
    }
  }
};
</script>
<style >
.book-menu-wrap {
  display: flex;
  width: 100%;
  height: 51px;
  background: #fff;
  border-bottom: 2px solid #eee;
}
.book-menu-item {
  height: 100%;
  width: 130px;
  line-height: 51px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
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
  padding: 15px;
}
.book-card {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
}
.book-info {
  display: flex;
}
.poster {
  margin-right: 16px;
}
.poster img {
  width: 85px;
  height: 119px;
}
.book-info .info .title-line .title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.book-info .info .media .author {
  position: relative;
  align-items: center;
  margin-top: 12px;
}
.hero img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 8px;
  float: left;
}
.book-bought {
  display: flex;
  align-items: center;
  padding: 8px 22px 8px 15px;
  border-top: 1px solid #ecf0f3;
  cursor: pointer;
}
.book-bought .label {
  display: inline-flex;
  align-items: center;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  flex-shrink: 0;
}
.book-bought .users {
  flex-grow: 1;
  margin-left: 24px;
  display: inline-flex;
  flex-wrap: wrap;
  height: 24px;
  overflow: hidden;
}
.book-bought .users img {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  border-radius: 50%;
  background-size: cover;
}
.book-mobile-other button {
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
}
.button--write {
  height: 40px;
  font-size: 16px;
  padding-left: 30px;
  padding-right: 30px;
  color: #71777c;
  text-align: center;
  background-color: #fff;
  border: 1px solid #aeb6c0;
  margin-left: 5px;
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
  width: 285px;
  display: block;
}
.button--buy {
  height: 40px;
  font-size: 16px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #007fff;
  color: #fff;
  text-align: center;
}
</style>