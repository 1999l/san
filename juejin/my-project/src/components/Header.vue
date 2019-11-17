<template>
  <div>
    <div style="height:60px; border-bottom: 1px solid #ddd;" class="big-box">
      <Dropdown trigger="click" style="margin-left: 20px">
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg"
          alt
          style="margin-top:.5rem"
        />
        <a @click="hideLight" style="color:#007fff">
          {{textContent}}
          <Icon type="ios-arrow-down" style="font-size:.8rem"></Icon>
        </a>
        <ul style="z-index:999;" class="list-item-box" v-show="light">
          <van-tabbar>
            <van-tabbar-item
              v-on:click="show('首页')"
              to="/main/home"
              style="margin-top: .625rem;"
              @click="hideLight"
            >首页</van-tabbar-item>
            <van-tabbar-item v-on:click="show('沸点')" to="/main/boiling" @click="hideLight">沸点</van-tabbar-item>
            <van-tabbar-item v-on:click="show('话题')" to="/main/talk" @click="hideLight">话题</van-tabbar-item>
            <van-tabbar-item v-on:click="show('首页')" to="/brochure" @click="hideLight">小册</van-tabbar-item>
            <van-tabbar-item v-on:click="show('活动')" to="/main/activity" @click="hideLight">活动</van-tabbar-item>
          </van-tabbar>
        </ul>
      </Dropdown>
      <div class="left-ipu-name">
        <input type="text" v-model="value14" placeholder="搜索掘金" maxlength="32" id="text-inpu" />
        <p class="dlzc" v-if="this.$store.state.offset3">
          <span @click="setName" class="denglu">登录</span>
          <span>·</span>
          <span @click="setName1" to="/main/talk">注册</span>
        </p>
        <div class="dlzc" v-if="!this.$store.state.offset3" style="margin-top:0px;">
          <div class="touxiang">
            <img
              class="tou"
              src="http://www.agri35.com/UploadFiles/img_0_1211788611_3043746361_200.jpg"
              alt
            />
          </div>
          <span @click="tui">退出</span>
        </div>
      </div>
    </div>
    <nav role="navigation" class="view-nav" v-if="date[state.xff]">
      <ul class="nav-list left">
        <li class="nav-item" v-for="(item,index) in date[state.xff]" :key="index">
          <div st:block="categoryPopover" class="category-popover-box">
            <a @click="toggle(index)" v-text="item" :class="{'light':offset===index}"></a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import searchStore from "../store/search";
import Cookies from "js-cookie";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
Vue.use(VueRouter);
Vue.use(ViewUI);

import storeNav from "../store/nav";

export default {
  data() {
    return {
      light: false,
      textContent: "首页",
      date: [
        [
          "推荐",
          "后端",
          "Android",
          "iOS",
          "人工智能",
          "开发工具",
          "代码人生",
          "阅读"
        ],
        [
          "推荐",
          "热门",
          "关注",
          "开源推荐",
          "内推招聘",
          "掘金相亲",
          "上班摸鱼",
          "应用安利",
          "开发工具",
          "New资讯"
        ],
        ["热门活动", "北京", "上海", "广州", "深圳", "杭州"],
        0
      ],
      offset1: this.$store.state.offset1,
      state: storeNav.state,
      value14: "",
      offset: 0,
      deng: 1,
      nicheng: ""
    };
  },
  methods: {
    hideLight() {
      this.light = !this.light;
    },
    show(content) {
      this.textContent = content;
      if (content === "首页") {
        storeNav.setxff(0);
      } else if (content === "沸点") {
        storeNav.setxff(1);
      } else if (content === "活动") {
        storeNav.setxff(2);
      } else {
        storeNav.setxff(3);
      }
    },
    toggle(index) {
      this.offset = index;
    },
    //注册登录
    setName() {
      // window.console.log(this.$store.state.offset1);
      this.$store.state.offset1 = true;
      // window.console.log(this.$store.state.offset3);
    },
    setName1() {
      this.$store.state.offset2 = true;
    },
    tui() {
      Cookies.remove("nicheng");
      Cookies.remove("username");
      this.$store.state.offset1 = false;
      this.$store.state.offset2 = false;
      this.$store.state.offset3 = true;
      this.$store.state.start = false;
    }
  },

  created() {
    window.console.log(searchStore.state.value14);
    let min = Cookies.get("nicheng"); //获取name
    if (min) {
      let ming = min.split("%");

      for (var a = 0; a < ming.length - 1; a++) {
        this.$store.state.nicheng += String.fromCharCode(ming[a]);
      }
      this.$store.state.start = true;
      this.$store.state.offset1 = false;
      this.$store.state.offset2 = false;
      this.$store.state.offset3 = false;
    } else {
      this.$store.state.start = false;
      this.$store.state.offset3 = true;
    }
    window.console.log(this.$store.state.start);
    window.console.log(this.$store.state.nicheng);
  },
  watch: {
    value14() {
      searchStore.state.value14 = this.value14;
    }
  }
};
</script>

<style scoped>
* {
  font-size: 1.73rem;
}
.touxiang {
  width: 3rem;
  height: 3rem;
  text-align: center;
  padding-top: 0.5rem;
  display: inline-block;
  margin-left: 1rem;
}
.tou {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.list-item-box {
  position: absolute;
  left: 2.19rem;
  border-radius: 0.25rem;
  width: 4.375rem;
  height: 15.1rem;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(177, 180, 185, 0.45);
}
.van-tabbar-item {
  font-size: 0.875rem;
  height: 3rem;
  text-align: center;
}
.ivu-dropdown {
  float: left;
}
.left-ipu-name {
  display: flex;
}
.dlzc {
  margin-top: 0.94rem;
  display: inline-block;
  color: #007fff;
  font-size: 1.25rem;
  margin-left: 0.625rerm;
}
#text-inpu {
  font-size: 1rem;
  background-color: #f8ffff;
  box-shadow: none;
  outline: none;
  width: 7rem;
  height: 2rem;
  border: 1px solid #dfe3e6;
  margin-left: 1rem;
  margin-top: 0.94rem;
}
a,
span {
  font-size: 0.9rem;
  color: #007fff;
}
.denglu {
  margin-left: 1.7rem;
}
a,
img {
  vertical-align: bottom;
}
span {
  margin-left: 0.44rem;
}
li {
  text-align: center;
}
.light {
  color: #2d8cf0;
  font-size: 0.9rem;
}

.view-nav {
  width: 100%;
  height: 2.53rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  transform: translateZ(0);
  background: #fff;
}
.nav-list {
  white-space: nowrap;
  overflow-x: scroll;
  height: 98%;
  display: flex;
  border: none;
}
a {
  color: #aaa;
}
.light {
  color: #2d8cf0;
}

.nav-item {
  padding: 0 0.9rem;
  height: 98%;
}
</style>
