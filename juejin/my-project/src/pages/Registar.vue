<template>
  <div class="da" v-if="this.$store.state.offset2">
    <span class="tixing" v-if="tishi">{{tishi}}</span>
    <div class="lconter">
      <h1>
        注册
        <i class="guan" @click="setName">X</i>
      </h1>
      <div class="biao">
        <input v-model="nicheng" type="text" class="username" placeholder="请输入用户名" />
        <input v-model="username" @blur="yanzheng" type="text" class="phone" placeholder="请输入手机号" />
        <input v-model="psw" type="password" placeholder="请输入密码(长度不少于6位)" class="input" />
        <button class="btn" @click="zhuce">注册</button>
      </div>
      <p class="prompt-box" @click="setName(2)">已有账号登录</p>
      <div class="oauth_box">
        <p class="hint">第三方账号登录:</p>
        <div class="oauth">
          <div class="disanfang">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" alt />
          </div>
          <div class="disanfang">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" alt />
          </div>
          <div class="disanfang">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" alt />
          </div>
        </div>
      </div>
      <p class="xieyi">
        注册登录即表示同意
        <span class="yhys">用户协议</span>、
        <span class="yhys">隐私政策</span>
      </p>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import storeNav from "../store/nav";

export default {
  data() {
    return {
      nicheng: "",
      username: "",
      psw: "",
      tishi: "",
      state: storeNav.state,
      isok: false
    };
  },
  methods: {
    setName() {
      this.$store.state.offset2 = false;
    },
    yanzheng() {
      if (this.username.trim()) {
        var patt = /^1[3456789]\d{9}$/;
        var result = patt.test(this.username.trim());
        if (result) {
          let params = {
            username: this.username
          };
          params = qs.stringify(params);
          window.console.log(1111);
          this.$axios
            .post("http://localhost:3000/yan", params)
            .then(({ data }) => {
              // this.restaurants = this.restaurants.concat(data);
              // this.restaurants = [...this.restaurants, ...data];
              window.console.log(data);
              if (data[0]) {
                this.tishi = "该手机号已被注册";
              } else {
                this.isok = true;
              }
              setTimeout(() => {
                this.tishi = "";
              }, 1000);
            });
        }
      }
    },
    zhuce() {
      if (this.username.trim() && this.isok) {
        if (this.psw.trim()) {
          var patt = /^1[3456789]\d{9}$/;
          // var patt2 = /^[*]{6,}$/;
          var result = patt.test(this.username.trim());
          // var result2 = patt2.test(this.psw.trim());

          if (result) {
            let params = {
              nicheng: this.nicheng,
              username: this.username,
              psw: this.psw
            };
            window.console.log(params);
            params = qs.stringify(params);

            this.$axios
              .post("http://localhost:3000/reg", params)
              .then(({ data }) => {
                // this.restaurants = this.restaurants.concat(data);
                // this.restaurants = [...this.restaurants, ...data];
                window.console.log(data);
                if (data.code == 1) {
                  // storeNav.setoff(2);
                  this.nicheng = "";
                  this.username = "";
                  this.psw = "";
                  this.$store.state.offset1 = true;
                  this.$store.state.offset2 = false;
                  this.$store.state.offset3 = false;
                }
              });
          } else {
            this.tishi = "请输入正确的手机号";
          }
        } else {
          this.tishi = "请输入密码";
        }
      } else {
        this.tishi = "请输入手机号码";
      }
      setTimeout(() => {
        this.tishi = "";
      }, 1000);
    }
  }
};
</script>
<style>
.da {
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fcf;
}

.guan {
  float: right;
  font-size: 1rem;
  color: #ccc;
}
.lconter {
  position: relative;
  top: 22%;
  padding: 2rem;
  width: 20.5rem;
  margin: auto;
  max-width: 100%;
  font-size: 1.167rem;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
}
h1 {
  font-size: 1.5rem;
  margin: 0 0 1rem;
}
.username {
  padding: 10px;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  height: 2.5rem;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}
.phone,
.input {
  font-size: 1rem;
  height: 2.5rem;
  padding: 10px;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 0.8rem;
}
.btn {
  width: 100%;
  height: 2.6rem;
  color: #fff;
  background-color: #007fff;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1.3rem;
  margin-bottom: 0.7rem;
}
.prompt-box {
  text-align: center;
  color: #007fff;
  font-size: 0.9rem;
  cursor: pointer;
}
.oauth_box {
  padding-top: 0.5rem;
  margin-bottom: 0.3rem;
}
.hint {
  line-height: 1.9rem;
  color: #767676;
  font-size: 0.9rem;
}
.oauth {
  display: flex;
  justify-content: space-around;
}
.disanfang {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xieyi {
  margin-top: 1.3rem;
  color: #767676;
  font-size: 0.8rem;
}
.yhys {
  color: #007fff;
}
.tixing {
  display: inline-block;
  color: #007fff;
  background: #00b8ff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1rem;
  position: absolute;
  top: 2rem;
  right: 1.5rem;
}
</style>