import App from './App.svelte';
import { getConfigData } from './utils/utils';

let app = {}

const svelteMethods = Object.create(null)
svelteMethods.init = (config) => {
	const { target = document.body } = config || {}
	app = new App({
		target,
		hydratable: true
	});
}
window['svelteMethods'] = svelteMethods

svelteMethods.init()

export default app;