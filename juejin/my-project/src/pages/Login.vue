<template>
  <div class="da" v-if="this.$store.state.offset1">
    <span class="tixing" v-if="tishi">{{tishi}}</span>
    <img class="panda" src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" alt />
    <div class="lconter">
      <h1>
        登录
        <i class="guan" @click="setName">X</i>
      </h1>
      <div class="biao">
        <input v-model="username" type="text" class="username" placeholder="请输入手机号或邮箱" />
        <input v-model="psw" type="password" placeholder="请输入密码" class="input" />
        <button class="btn" @click="yanming">登录</button>
      </div>
      <p class="prompt-box">
        <span>没有账号?</span>
        <span class="clickable">注册</span>
        <span class="right-clickable">忘记密码</span>
      </p>
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
import Cookies from "js-cookie";

export default {
  data() {
    return {
      username: "",
      psw: "",
      tishi: ""
    };
  },
  methods: {
    yanming() {
      if (this.username.trim()) {
        if (this.psw.trim()) {
          let param = {
            username: this.username,
            psw: this.psw
          };
          window.console.log(param);
          param = qs.stringify(param);
          this.$axios
            .post("http://localhost:3000/user", param)
            .then(({ data }) => {
              if (data.code == 1) {
                let str = data.data.nicheng;
                let name = "";
                for (var i = 0; i < str.length; i++) {
                  name += str[i].charCodeAt() + "%";
                }
                this.$store.state.start = true;
                this.$store.state.offset1 = false;
                this.$store.state.offset3 = false;
                window.console.log(data);
                Cookies.set("username", data.data.username);
                Cookies.set("nicheng", name); //设置name
                this.username = "";
                this.psw = "";
                let min = Cookies.get("nicheng");
                let ming = min.split("%");
                let ming1 = "";
                for (var a = 0; a < ming.length; a++) {
                  ming1 += String.fromCharCode(ming[a]);
                }
                this.$store.state.nicheng = ming1;
              }
            });
        } else {
          this.tishi = "请输入密码";
        }
      } else {
        this.tishi = "请输入手机号码";
      }
    },
    setName() {
      this.$store.state.offset1 = false;
    }
  }
};
</script>
<style >
.da {
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fcf;
}
.panda {
  width: 7.5rem;
  height: 6rem;
  position: absolute;
  top: 22%;
  left: 50%;
  z-index: 41;
  transform: translate(-50%, -83%);
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
  padding: 0.625rem;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  height: 2.5rem;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}
.input {
  font-size: 1rem;
  height: 2.5rem;
  padding: 0.625rem;
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
}
.prompt-box {
  margin: 1rem 0 0;
  color: #767676;
  font-size: 0.9rem;
}
.clickable {
  color: #007fff;
  cursor: pointer;
}
.right-clickable {
  float: right;
  color: #007fff;
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
  width: 2.81rem;
  height: 2.81rem;
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