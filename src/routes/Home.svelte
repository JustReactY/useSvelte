<script lang="ts">
  import { Link } from "svelte-routing";
  // import logo from "../assets/svelte.png";

  interface ISPathsData {
    title: string;
    path: string;
  }

  const paths: Array<ISPathsData> = [
    {
      title: "丝滑的变量定义",
      path: "/data",
    },
    {
      title: "优秀的样式隔离",
      path: "/styles",
    },
    {
      title: "优雅的嵌套组件",
      path: "/mixin",
    },
    {
      title: "渲染富文本代码块",
      path: "/htmls",
    },
    {
      title: "傻瓜式的组件通信",
      path: "/props",
    },
    {
      title: "响应式双向绑定",
      path: "/binds",
    },
    {
      title: "轻松实现计算属性与watcher",
      path: "/watcher",
    },
    {
      title: "靠谱的store",
      path: "/stores",
    },
    {
      title: "条件式代码呈现",
      path: "/condition",
    },
    {
      title: "随心所欲的循环体验",
      path: "/eachs",
    },
    {
      title: "对单块内容重新渲染",
      path: "/transition",
    },
    {
      title: "轻松获取块级元素属性、实例",
      path: "/client",
    },
    {
      title: "webcomponents",
      path: "/webcomponents",
    },
  ];
</script>

<main>
  <!-- <img src={logo} alt="Svelte Logo" /> -->
  <ul>
    {#each paths as path}
      <li>
        <Link to={path.path}>{path.title}</Link>
      </li>
    {/each}
  </ul>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }

  @media (min-width: 480px) {
  }
</style>
