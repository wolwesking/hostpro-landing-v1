const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","heroImage.webp","site.webmanifest","task-serv2-clusterjoin-2024-10-29T18_22_51Z.log","trustpilotIcon.svg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".webmanifest":"application/manifest+json",".log":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BkRaOwwf.js","app":"_app/immutable/entry/app.C3reRh9n.js","imports":["_app/immutable/entry/start.BkRaOwwf.js","_app/immutable/chunks/entry.BKSuBUAX.js","_app/immutable/chunks/scheduler.BJDr1mdf.js","_app/immutable/entry/app.C3reRh9n.js","_app/immutable/chunks/scheduler.BJDr1mdf.js","_app/immutable/chunks/index.D9ztpNKM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BbvW59vZ.js')),
			__memo(() => import('./chunks/1-Bgu08GU8.js')),
			__memo(() => import('./chunks/2-wLkaVO7-.js')),
			__memo(() => import('./chunks/3-BA05ufn6.js')),
			__memo(() => import('./chunks/4-Bi79Z8vk.js')),
			__memo(() => import('./chunks/5-DkUI9m96.js')),
			__memo(() => import('./chunks/6-l5Z2_taQ.js')),
			__memo(() => import('./chunks/7-gJ_CvK7N.js')),
			__memo(() => import('./chunks/8-H0dIRg6L.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/security",
				pattern: /^\/security\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services/bare-metal",
				pattern: /^\/services\/bare-metal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services/dedicated",
				pattern: /^\/services\/dedicated\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
