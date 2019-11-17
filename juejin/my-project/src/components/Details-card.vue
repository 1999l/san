<template>
  <van-list 
    :offset="100000"
    :finished="finished"
    @load="onLoad"
  >
    <article  v-for="(item,index) in details" :key="index" itemscope="itemscope" class="article" style="width:90%;margin:auto;">
      <div class="author-info-block">
        <div class="author-info-box">
          <a v-once>
            {{item.user_name}}
            <a>
              <img src="https://b-gold-cdn.xitu.io/v3/static/img/lv-5.f8d5198.svg" alt="lv-5" />
            </a>
          </a>
          <div class="meta-box">
            <time
              datetime="2019-11-05T00:52:14.915Z"
              title="Tue Nov 05 2019 08:52:14 GMT+0800 (中国标准时间)"
              class="time"
            >2019年11月05日</time>
            <span class="views-count">阅读 7911</span>
          </div>
        </div>
        <button class="follow-button follow">关注</button>
      </div>
      <h1 class="article-title" >{{item.wenzi}}</h1>
      <div itemprop="articleBody" class="article-content">
        <p>
          原文链接：
          <a>dev.to/simonholdor…</a>
        </p>
        <p>DEV的年度热文，读完觉得不错，所以翻译出来供大家参考，个人水平有限，文中可能会有一些翻译错误，可以在评论区指正。</p>
        <p>本篇文章一共涉及了9个流行的框架/库，没有具体的介绍使用方法，而是给了一些非常棒的实战教程。</p>
        <p>初学者(也许一些有经验的开发者也是一样)在读完官方文档，想写一个项目练手的时候不知道做什么项目好，或是有想法，但是无从下手。那么这篇文章将会给你带来很大的帮助。</p>
        <p>
          <strong>更多文章可戳:</strong>
          <a>github.com/YvetteLau/B…</a>
        </p>
        <h3 class="heading" data-id="heading-0">导读</h3>
        <p>无论你是编程新手还是经验丰富的开发人员。在这个行业中，我们不得不一直学习新概念和新语言或是框架，才能跟上快速变化。以React为例 —— FaceBook 四年前开源，现在它已经成为了全球JS开发者的首选。但是与此同时，Vue 和 Angular 也有自己的追求者。然后是 Svelte，Next 和 Nuxt.js，Gatsby，Gridsome,quasar 等等，如果你想成为专业的 JavaScript 开发人员，你在使用自己熟悉的框架进行开发的同时，还需要对不同的框架和库有一些了解。</p>
        <p>为了帮助你在2020年成为一个前端大神，我收集了9个使用了不同JS框架/库的项目，你可以去构建或者将他们加入到自己未来的开发计划中。记住，没什么比实际开发一个项目更有帮助。所以，不要犹豫，试着去开发一下。</p>
        <h3 class="heading" data-id="heading-1">1. 使用React(with hooks)构建一个电影搜索应用</h3>
        <p>首先，你可以使用React构建一个电影搜索应用。展示如下：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-2">你将学到什么？</h4>
        <p>构建这个项目，你可以使用较新的 Hook API 来提升你的 React 技能。示例项目使用了React组件，很多 hooks 以及一些外部的 API，当然还有一些CSS样式。</p>
        <h4 class="heading" data-id="heading-3">技术栈/点</h4>
        <ol>
          <li>React(Hooks)</li>
          <li>create-react-app</li>
          <li>JSX</li>
          <li>CSS</li>
        </ol>
        <p>
          你可以在这里看到这个示例项目：
          <a>www.freecodecamp.org/news/how-to…</a>
        </p>
        <h3 class="heading" data-id="heading-4">2.使用Vue构建一个聊天应用</h3>
        <p>另外一个要介绍给你的很棒的项目是使用Vue构建的聊天应用程序。展示如下：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-5">你将学到什么？</h4>
        <p>您将学习到如何从头开始设置Vue应用，创建组件，处理状态，创建路由，连接到第三方服务，甚至是处理身份验证。</p>
        <h4 class="heading" data-id="heading-6">技术栈/点</h4>
        <ol>
          <li>Vue</li>
          <li>Vuex</li>
          <li>Vue Router</li>
          <li>Vue CLI</li>
          <li>Pusher</li>
          <li>CSS</li>
        </ol>
        <p>
          这真的是一个非常棒的项目，不管是用来学习Vue或者是提升现有的技能，以应对2020年的发展。你可以查看这个教程：
          <a>www.sitepoint.com/pusher-vue-…</a>
        </p>
        <h3 class="heading" data-id="heading-7">3. 使用Augular8构建一款漂亮的天气应用</h3>
        <p>此示例将帮助你使用 Google 的 Angular 8 来构建一块漂亮的天气应用程序：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-8">你将学到什么？</h4>
        <p>该项目将教你一些宝贵的技能，例如从头开始创建应用，从设计到开发，一直到生产就绪部署。</p>
        <h4 class="heading" data-id="heading-9">技术栈/点</h4>
        <ol>
          <li>Angular 8</li>
          <li>Firebase</li>
          <li>SSR</li>
          <li>网络布局和Flexbox</li>
          <li>移动端友好 &amp;&amp; 响应式布局</li>
          <li>深色模式</li>
          <li>漂亮的用户界面</li>
        </ol>
        <p>对于这个综合项目，我真正喜欢的是，不是孤立地学习东西，而是从设计到最终部署的整个开发过程。</p>
        <p>
          <a>medium.com/@hamedbaato…</a>
        </p>
        <h3 class="heading" data-id="heading-10">4. 使用 Svelte 构建一个 To-Do 应用</h3>
        <p>与React，Vue和Angular相比，Svelte 还很新，但仍是热门之一。好的，To-Do应用不一定是那里最热门的项目，但这确实可以帮助你提高Svelte技能，如下：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-11">你将学到什么？</h4>
        <p>本教程将向你展示如何从头到尾使用Svelte3制作应用。 它利用了组件，样式和事件处理程序。</p>
        <h4 class="heading" data-id="heading-12">技术栈/点</h4>
        <ol>
          <li>Svelte 3</li>
          <li>Components</li>
          <li>CSS</li>
          <li>ES6语法</li>
        </ol>
        <p>
          Svelte 没有太多优秀的入门项目，这个是我觉得不错的一个上手项目：
          <a>medium.com/codingthesm…</a>
        </p>
        <h3 class="heading" data-id="heading-13">5. 使用 Next.js 构建购物车</h3>
        <p>Next.js 是一个轻量级的 React 服务端渲染应用框架，该项目将向你展示如何构建一个如下所示的购物车：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-14">你将学到什么？</h4>
        <p>在这个项目中，你将学习如何设置 Next.js 的开发环境，创建新页面和组件，获取数据，设置样式并部署一个 next 应用。</p>
        <h4 class="heading" data-id="heading-15">技术栈/点</h4>
        <ol>
          <li>Next.js</li>
          <li>组件和页面</li>
          <li>数据获取</li>
          <li>样式</li>
          <li>部署</li>
          <li>SSR和SPA</li>
        </ol>
        <p>
          你可以在此处找到该教程：
          <a>snipcart.com/blog/next-j…</a>
        </p>
        <h3 class="heading" data-id="heading-16">6. 使用 Nuxt.js 构建一个多语言博客网站</h3>
        <p>Nuxt.js 是 Vue 服务端渲染应用框架。你可以创建一个如下所示的应用程序：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-17">你将学到什么？</h4>
        <p>这个示例项目从初始设置到最终部署一步一步教你如何使用 Nuxt.js 构建一个完整的网站。它使用了 Nuxt 提供的许多出色功能，如页面和组件以及SCSS样式。</p>
        <h4 class="heading" data-id="heading-18">技术栈/点</h4>
        <ul>
          <li>Nuxt.js</li>
          <li>组件和页面</li>
          <li>Storyblok模块</li>
          <li>Mixins</li>
          <li>Vuex</li>
          <li>SCSS</li>
          <li>Nuxt中间件</li>
        </ul>
        <p>
          这个项目包含了涵盖了 Nuxt.js 的许多出色功能。我个人很喜欢使用 Nuxt 进行开发，你应该尝试使用它，这将使你成为更好的 Vue 开发人员！
          <a>www.storyblok.com/tp/nuxt-js-…</a>
        </p>
        <p>
          除此之外，我还找到了一个B站的视频：
          <a>www.bilibili.com/video/av211…</a>
        </p>
        <h3 class="heading" data-id="heading-19">7. 使用 Gatsby 构建一个博客</h3>
        <p>Gatsby是一个出色的静态站点生成器，它允许使用React作为渲染引擎引擎来搭建一个静态站点，它真正具有现代web应用程序所期望的所有优点。该项目如下：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-20">你将学到什么？</h4>
        <p>在本教程中，你将学习如何利用 Gatsby 构建出色的博客。</p>
        <h4 class="heading" data-id="heading-21">技术栈/点</h4>
        <ol>
          <li>Gatsby</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Plugins &amp; Themes</li>
          <li>MDX / Markdown</li>
          <li>Bootstrap CSS</li>
          <li>Templates</li>
        </ol>
        <p>如果你想创建博客，这个示例教你如何利用 React 和 GraphQL 来搭建。并不是说 Wordpress 是一个不好的选择，但是有了 Gatsby ，你可以在使用 React 的同时创建高性能站点！</p>
        <p>
          <a>blog.bitsrc.io/how-to-buil…</a>
        </p>
        <h3 class="heading" data-id="heading-22">8. 使用 Gridsome 构建一个博客</h3>
        <p>Gridsome 和 Vue的关系与 Gatsby 和 React 的关系一样。Gridsome 和 Gatsby 都使用 GraphQL 作为数据层，但是 Gridsome 使用的是 VueJS。这也是一个很棒的静态站点生成器，它将帮助您创建出色的博客：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-23">你将学到什么？</h4>
        <p>该项目将教你如何使用 Gridsome，GraphQL 和 Markdown 构建一个简单的博客，它还介绍了如何通过Netlify 部署应用程序。</p>
        <h4 class="heading" data-id="heading-24">技术栈/点</h4>
        <ol>
          <li>Gridsome</li>
          <li>Vue</li>
          <li>GraphQL</li>
          <li>Markdown</li>
          <li>Netlify</li>
        </ol>
        <p>当然，这不是最全面的教程，但涵盖了 Gridsome 和 Markdown 的基本概念，可能是一个很好的起点。</p>
        <p>
          <a>www.telerik.com/blogs/build…</a>
        </p>
        <h3 class="heading" data-id="heading-25">9.使用 Quasar 构建一个类似 SoundCloud 的音频播放器</h3>
        <p>Quasar 是另一个 Vue 框架，也可以用于构建移动应用程序。 在这个项目中，你将创建一个音频播放器应用程序，如下所示：</p>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
        <h4 class="heading" data-id="heading-26">你将学到什么？</h4>
        <p>不少项目主要关注Web应用程序，但这个项目展示了如何通过 Quasar 框架创建移动应用程序。你应该已经配置了可工作的 Cordova 设置，并配置了 android studio / xcode。 如果没有，在教程中有一个指向quasar 网站的链接，在那里你可以学习如何进行设置。</p>
        <h4 class="heading" data-id="heading-27">技术栈/点</h4>
        <ul>
          <li>Quasar</li>
          <li>Vue</li>
          <li>Cordova</li>
          <li>Wavesurfer</li>
          <li>UI Components</li>
        </ul>
        <p>
          一个展示了Quasar在构建移动应用程序方面的强大功能的小项目：
          <a>www.learningsomethingnew.com/how-to-buil…</a>
        </p>
        <h3 class="heading" data-id="heading-28">总结</h3>
        <p>本文展示了你可以构建的9个项目，每个项目专注于一个JavaScript框架或库。现在，你可以自行决定：使用以前未使用的框架来尝试一些新的东西或是通过做一个项目来提升已有的技能，或者在2020年完成所有项目？</p>
        <hr />
        <h3 class="heading" data-id="heading-29">关注公众号，加入技术交流群</h3>
        <p></p>
        <figure>
          <figcaption></figcaption>
        </figure>
        <p></p>
      </div>
    </article>
  </van-list>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      details: [],
      loading: false,
      finished: false
    };
  },
  created() {},
  methods: {
    onLoad() {
      let _id = this.$route.path;
      let id = _id.split("=")[1];
      let params = { id };
      params = qs.stringify(params);

      this.$axios
        .post("http://localhost:3000/details", params)
        .then(({ data }) => {
          this.details = data;
          window.console.log(data);

          this.loading = false;
            this.finished = true;
        });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>