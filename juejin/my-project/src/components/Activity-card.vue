<template>
  <van-list
    :offset="10"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    style="background: #eee;"
  >
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel" id="demo-one"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel" id="demo-two"></div>
      </CarouselItem>
    </Carousel>
    <div class="activity-box">
      <div
        class="events-inner"
        style="margin-bottom: 2.2rem; border-bottom:1px solid #ccc"
        v-for="(item,index) in activity"
        :key="index"
      >
        <img :src="item.banner" alt />
        <div class="message">
          <div class="title">{{item.bookname}}</div>
          <div class="date">
            <span class="icon-dataya icon"></span>
            <span class="data-week">{{item.time}}</span>
          </div>
          <div class="bottom">
            <div class="address">
              <span class="icon-location icon"></span>
              <span class="location-where">{{item.address}}</span>
            </div>
            <div class="btn-join">报名参加</div>
          </div>
        </div>
      </div>
    </div>
  </van-list>
</template>
<script>
import Vue from "vue";
import { List } from "vant";
Vue.use(List);

export default {
  data() {
    return {
      list: [],
      value2: 0,
      loading: false,
      finished: false,
      activity: []
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/activity").then(({ data }) => {
        this.activity = this.activity.concat(data);
        window.console.log(data);

        this.loading = false;

        if (this.activity.length >= 50) {
          this.finished = true;
        }
      });
      window.console.log("到底了");
    }
  }
};
</script>
<style >
.ivu-carousel {
  margin-bottom: 2rem;
}
.ivu-carousel-arrow {
  border-radius: 0;
  height: 100%;
  width: 3rem;
  font-size: 1.8rem;
  background: none;
}
.ivu-carousel:hover .ivu-carousel-arrow-hover {
  opacity: 0.6;
}
.ivu-carousel-arrow.left {
  left: 0;
}
.ivu-carousel-arrow.right {
  right: 0;
}
.ivu-carousel-dots li button {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 1px solid #007fff;
  background-color: #007fff;
}
.ivu-carousel-dots li.ivu-carousel-active > button {
  width: 0.5rem;
  height: 0.5rem;
}
.events-inner {
  width: 100%;
  background: #fff;
}
.events-inner img {
  width: 100%;
  height: 15.2rem;
}
.message {
  padding: 1.2rem 0.8rem 1rem;
}
.message .icon {
  display: block;
  width: 1rem;
  height: 1rem;
  background-size: 1rem 1rem;
}
.message .date .icon-dataya {
  background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png);
  float: left;
}
.title {
  height: 2.5rem;
  font-size: 0.9rem;
  font-weight: 700;
}
.data-week,
.location-where {
  font-size: 0.16rem;
}
.icon-location {
  background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png);
  float: left;
}
.bottom {
  display: flex;
  margin-top: 0.5rem;
  position: relative;
}
.btn-join {
  width: 6.2rem;
  height: 1.6rem;
  border-radius: 1.9rem;
  background-color: #4d91fd;
  line-height: 1.6rem;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  left: 14.5rem;
}
#demo-one {
  height: 17.5rem;
  background-image: url(
    http://img4.imgtn.bdimg.com/it/u=2958967064,2714608608&fm=26&gp=0.jpg
  );
  background-size: 100% 17.5rem;
}
#demo-two {
  height: 17.5rem;
  background-image: url(https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e9449e382d9759ee4a5067cd8ac0242b/94cad1c8a786c9179e80a80cc23d70cf3bc75700.jpg);
  background-size: 100% 17.5rem;
}
</style>