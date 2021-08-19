<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	/* // @ts-ignore
	const modulesFiles = require.context("./routes", true, /\.svelte$/);
	const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	  // 忽略第1个js
	  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
	  // 执行modulesFiles函数，返回一个对象{default: {// 文件内容}, _esModule: true}
	  const value = modulesFiles(modulePath);
	  modules[moduleName] = value.default;
	  return modules;
	}, {});
	console.log(modules) */

	import Home from "./routes/Home.svelte";
	import Styles from "./routes/Css.svelte";
	import Mixin from "./routes/Mixin.svelte";
	import Data from "./routes/Data.svelte";
	import Htmls from "./routes/Htmls.svelte";
	import Props from "./routes/Props.svelte";
	import Binds from "./routes/Binds.svelte";
	import Watcher from "./routes/Watcher.svelte";
	import Stores from "./routes/Stores.svelte";
	import Condition from "./routes/Condition.svelte";
	import Eachs from "./routes/Eachs.svelte";
	import Transition from "./routes/Transition.svelte";
	import Client from "./routes/Client.svelte";
	import WebComponents from "./routes/WebComponents.svelte";

	export let url: string = "";

	const handleMessage = (e) => {
		const message = e.detail;
		console.log(e, message);
		if (message) alert(message);
	};

	interface ISDetailData {
		age: number;
		email: string;
	}
	const detail: ISDetailData = {
		age: 12,
		email: "www.ss.dd@jj.com",
	};
</script>

<!-- this is a comment! -->
<Router {url}>
	<!-- svelte-ignore a11y-autofocus -->
	<nav>
		<Link to="/">回到首页</Link>
	</nav>
	<div>
		<Route path="/"><Home /></Route>
		<Route path="/styles"><Styles /></Route>
		<Route path="/data"><Data /></Route>
		<Route path="/mixin"><Mixin /></Route>
		<Route path="/htmls"><Htmls /></Route>
		<Route path="/props"
			><Props
				name="yyds!"
				on:click={() => alert("click")}
				{...detail}
				{handleMessage}
				on:message={handleMessage}
			/></Route
		>
		<Route path="/binds"><Binds /></Route>
		<Route path="/watcher"><Watcher /></Route>
		<Route path="/stores"><Stores /></Route>
		<Route path="/condition"><Condition /></Route>
		<Route path="/eachs"><Eachs /></Route>
		<Route path="/transition"><Transition /></Route>
		<Route path="/client"><Client /></Route>
		<Route path="/webcomponents"><WebComponents /></Route>
	</div>
</Router>
