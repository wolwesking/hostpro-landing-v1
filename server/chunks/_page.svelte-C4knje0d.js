import { c as create_ssr_component, v as validate_component, b as add_attribute } from './ssr-BeioO6Pe.js';
import { I as Icon } from './Icon-mKVLVxbQ.js';

const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Dollar_sign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "22"
      }
    ],
    [
      "path",
      {
        "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "dollar-sign" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Server = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "14",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "6.01",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "6.01",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "server" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Zap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zap" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css$3 = {
  code: ".container.svelte-1aljtgs{max-width:1200px}section.svelte-1aljtgs{background-color:#f1f5f9}",
  map: `{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script>\\n\\tconst discordInviteLink = 'https://discord.gg/BMPbaMeCa5'; // Replace with your actual Discord invite link\\n<\/script>\\n\\n<section id=\\"contact\\" class=\\"w-full py-12 md:py-24 lg:py-32 bg-gray-200\\">\\n\\t<div class=\\"container mx-auto px-4 md:px-6\\">\\n\\t\\t<div class=\\"flex flex-col items-center justify-center text-center space-y-6\\">\\n\\t\\t\\t<h2 class=\\"text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4\\">\\n\\t\\t\\t\\tJoin Us on Discord\\n\\t\\t\\t</h2>\\n\\t\\t\\t<p class=\\"text-gray-700 md:text-lg lg:text-base xl:text-lg mb-8\\">\\n\\t\\t\\t\\tConnect with our community and get the latest updates!\\n\\t\\t\\t</p>\\n\\t\\t\\t<a\\n\\t\\t\\t\\thref={discordInviteLink}\\n\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\trel=\\"noopener noreferrer\\"\\n\\t\\t\\t\\tclass=\\"inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\tJoin Discord\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.container {\\n\\t\\tmax-width: 1200px;\\n\\t}\\n\\tsection {\\n\\t\\tbackground-color: #f1f5f9; /* A lighter gray for subtle contrast */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0BC,yBAAW,CACV,SAAS,CAAE,MACZ,CACA,sBAAQ,CACP,gBAAgB,CAAE,OACnB"}`
};
const discordInviteLink = "https://discord.gg/BMPbaMeCa5";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="contact" class="w-full py-12 md:py-24 lg:py-32 bg-gray-200 svelte-1aljtgs"><div class="container mx-auto px-4 md:px-6 svelte-1aljtgs"><div class="flex flex-col items-center justify-center text-center space-y-6"><h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4" data-svelte-h="svelte-bcfyyo">Join Us on Discord</h2> <p class="text-gray-700 md:text-lg lg:text-base xl:text-lg mb-8" data-svelte-h="svelte-1024oqf">Connect with our community and get the latest updates!</p> <a${add_attribute("href", discordInviteLink, 0)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Join Discord</a></div></div> </section>`;
});
const css$2 = {
  code: ".container.svelte-1exdscb.svelte-1exdscb{max-width:1200px}.grid.svelte-1exdscb>div.svelte-1exdscb{transform:translateZ(0);transition:transform 0.2s ease-in-out,\n			box-shadow 0.2s ease-in-out}.grid.svelte-1exdscb>div.svelte-1exdscb:hover{transform:scale(1.05)}",
  map: `{"version":3,"file":"Features.svelte","sources":["Features.svelte"],"sourcesContent":["<script>\\n\\timport { ServerIcon, ShieldCheckIcon, ZapIcon, DollarSignIcon } from 'lucide-svelte';\\n<\/script>\\n\\n<section\\n\\tid=\\"features\\"\\n\\tclass=\\"w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-gray-100 to-gray-200\\"\\n>\\n\\t<div class=\\"container mx-auto px-6 lg:px-8\\">\\n\\t\\t<h2 class=\\"text-4xl font-extrabold tracking-tight sm:text-5xl text-center mb-10 text-gray-900\\">\\n\\t\\t\\tWhy Choose Hostpro?\\n\\t\\t</h2>\\n\\t\\t<p class=\\"text-lg text-gray-700 text-center mb-12\\">\\n\\t\\t\\tDiscover the unmatched advantages of our hosting services, designed to elevate your gaming\\n\\t\\t\\texperience.\\n\\t\\t</p>\\n\\t\\t<div class=\\"grid gap-8 md:grid-cols-1 lg:grid-cols-2 items-stretch justify-center\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full\\"\\n\\t\\t\\t\\taria-labelledby=\\"feature-1\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<ServerIcon class=\\"h-16 w-16 mb-4 text-green-500\\" />\\n\\t\\t\\t\\t<h3 id=\\"feature-1\\" class=\\"text-2xl font-semibold text-gray-800 text-center\\">\\n\\t\\t\\t\\t\\tHigh-Performance\\n\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t<p class=\\"text-gray-600 text-center\\">\\n\\t\\t\\t\\t\\tBlazing fast servers optimized for gaming, ensuring minimal downtime and maximum\\n\\t\\t\\t\\t\\tenjoyment.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full\\"\\n\\t\\t\\t\\taria-labelledby=\\"feature-2\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<ShieldCheckIcon class=\\"h-16 w-16 mb-4 text-green-500\\" />\\n\\t\\t\\t\\t<h3 id=\\"feature-2\\" class=\\"text-2xl font-semibold text-gray-800 text-center\\">\\n\\t\\t\\t\\t\\tDDoS Protection\\n\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t<p class=\\"text-gray-600 text-center\\">\\n\\t\\t\\t\\t\\tRobust security measures to keep your games running smoothly and securely, free from\\n\\t\\t\\t\\t\\tdisruptions.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full\\"\\n\\t\\t\\t\\taria-labelledby=\\"feature-3\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<ZapIcon class=\\"h-16 w-16 mb-4 text-green-500\\" />\\n\\t\\t\\t\\t<h3 id=\\"feature-3\\" class=\\"text-2xl font-semibold text-gray-800 text-center\\">Low Latency</h3>\\n\\t\\t\\t\\t<p class=\\"text-gray-600 text-center\\">\\n\\t\\t\\t\\t\\tGlobal network infrastructure that guarantees low latency, ensuring a seamless gaming\\n\\t\\t\\t\\t\\texperience.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full\\"\\n\\t\\t\\t\\taria-labelledby=\\"feature-4\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<DollarSignIcon class=\\"h-16 w-16 mb-4 text-green-500\\" />\\n\\t\\t\\t\\t<h3 id=\\"feature-4\\" class=\\"text-2xl font-semibold text-gray-800 text-center\\">\\n\\t\\t\\t\\t\\tCompetitive Pricing\\n\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t<p class=\\"text-gray-600 text-center\\">\\n\\t\\t\\t\\t\\tAffordable and transparent pricing plans tailored for every budget, ensuring value without\\n\\t\\t\\t\\t\\tcompromise.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.container {\\n\\t\\tmax-width: 1200px; /* Maintain a max width for better readability */\\n\\t}\\n\\n\\t/* Ensuring equal heights for the feature cards */\\n\\t.grid > div {\\n\\t\\ttransform: translateZ(0);\\n\\t\\ttransition:\\n\\t\\t\\ttransform 0.2s ease-in-out,\\n\\t\\t\\tbox-shadow 0.2s ease-in-out;\\n\\t}\\n\\n\\t.grid > div:hover {\\n\\t\\ttransform: scale(1.05);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwEC,wCAAW,CACV,SAAS,CAAE,MACZ,CAGA,oBAAK,CAAG,kBAAI,CACX,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,UAAU,CACT,SAAS,CAAC,IAAI,CAAC,WAAW,CAAC;AAC9B,GAAG,UAAU,CAAC,IAAI,CAAC,WAClB,CAEA,oBAAK,CAAG,kBAAG,MAAO,CACjB,SAAS,CAAE,MAAM,IAAI,CACtB"}`
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="features" class="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-gray-100 to-gray-200"><div class="container mx-auto px-6 lg:px-8 svelte-1exdscb"><h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl text-center mb-10 text-gray-900" data-svelte-h="svelte-vqdqv4">Why Choose Hostpro?</h2> <p class="text-lg text-gray-700 text-center mb-12" data-svelte-h="svelte-ylor2j">Discover the unmatched advantages of our hosting services, designed to elevate your gaming
			experience.</p> <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-2 items-stretch justify-center svelte-1exdscb"><div class="flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full svelte-1exdscb" aria-labelledby="feature-1">${validate_component(Server, "ServerIcon").$$render($$result, { class: "h-16 w-16 mb-4 text-green-500" }, {}, {})} <h3 id="feature-1" class="text-2xl font-semibold text-gray-800 text-center" data-svelte-h="svelte-txxuqp">High-Performance</h3> <p class="text-gray-600 text-center" data-svelte-h="svelte-1s8rck3">Blazing fast servers optimized for gaming, ensuring minimal downtime and maximum
					enjoyment.</p></div> <div class="flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full svelte-1exdscb" aria-labelledby="feature-2">${validate_component(Shield_check, "ShieldCheckIcon").$$render($$result, { class: "h-16 w-16 mb-4 text-green-500" }, {}, {})} <h3 id="feature-2" class="text-2xl font-semibold text-gray-800 text-center" data-svelte-h="svelte-1xebys8">DDoS Protection</h3> <p class="text-gray-600 text-center" data-svelte-h="svelte-mkwawb">Robust security measures to keep your games running smoothly and securely, free from
					disruptions.</p></div> <div class="flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full svelte-1exdscb" aria-labelledby="feature-3">${validate_component(Zap, "ZapIcon").$$render($$result, { class: "h-16 w-16 mb-4 text-green-500" }, {}, {})} <h3 id="feature-3" class="text-2xl font-semibold text-gray-800 text-center" data-svelte-h="svelte-1fby6xn">Low Latency</h3> <p class="text-gray-600 text-center" data-svelte-h="svelte-1bh2uwa">Global network infrastructure that guarantees low latency, ensuring a seamless gaming
					experience.</p></div> <div class="flex flex-col items-center justify-between space-y-4 border border-gray-300 p-8 rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-xl h-full svelte-1exdscb" aria-labelledby="feature-4">${validate_component(Dollar_sign, "DollarSignIcon").$$render($$result, { class: "h-16 w-16 mb-4 text-green-500" }, {}, {})} <h3 id="feature-4" class="text-2xl font-semibold text-gray-800 text-center" data-svelte-h="svelte-13ogo92">Competitive Pricing</h3> <p class="text-gray-600 text-center" data-svelte-h="svelte-vfq758">Affordable and transparent pricing plans tailored for every budget, ensuring value without
					compromise.</p></div></div></div> </section>`;
});
const css$1 = {
  code: "section.svelte-1h4kcao{background:linear-gradient(to right, #1a1a1a, #0d0d0d)}h1.svelte-1h4kcao{background:linear-gradient(to right, #3b82f6, #14b8a6);-webkit-background-clip:text;color:transparent}a.svelte-1h4kcao{transition:all 0.3s ease}a.svelte-1h4kcao:hover{box-shadow:0px 8px 20px rgba(0, 0, 0, 0.5)}.flex-col.svelte-1h4kcao{gap:1.5rem}",
  map: '{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<section\\n\\tclass=\\"w-full pt-36 md:pt-28 xl:pt-48 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white\\"\\n>\\n\\t<div class=\\"px-6 md:px-8 max-w-6xl mx-auto\\">\\n\\t\\t<div\\n\\t\\t\\tclass=\\"md:flex md:flex-row-reverse md:justify-between items-center text-center md:text-left space-y-10 md:space-y-0\\"\\n\\t\\t>\\n\\t\\t\\t<!-- Text Section -->\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"flex flex-col items-center md:items-start space-y-6 md:space-y-8 order-1 md:order-2 max-w-2xl\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<h1\\n\\t\\t\\t\\t\\tclass=\\"text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-300\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tHostpro\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t<p class=\\"mt-4 text-lg md:text-xl text-gray-300 leading-relaxed\\">\\n\\t\\t\\t\\t\\tThe ultimate secure and affordable dedicated and bare metal hosting solution. We ensure\\n\\t\\t\\t\\t\\tpeak performance and security at low prices.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<p class=\\"mt-2 text-md md:text-xl text-gray-400\\">\\n\\t\\t\\t\\t\\tHave the power <span class=\\"text-red-500 font-bold\\">you deserve!</span>\\n\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t<!-- Call to Action Buttons -->\\n\\t\\t\\t\\t<div class=\\"flex space-x-4 mt-6\\">\\n\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\thref=\\"#services\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-black shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tGet Started\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\thref=\\"#features\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"inline-flex items-center justify-center rounded-full border border-gray-700 px-6 py-3 text-base font-semibold text-white transition-transform transform hover:scale-105 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tLearn More\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<!-- Image Section -->\\n\\t\\t\\t<div class=\\"order-2 md:order-1 max-w-lg mx-auto md:mx-0\\">\\n\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\tsrc=\\"/heroImage.webp\\"\\n\\t\\t\\t\\t\\talt=\\"Hostpro - Secure Game Hosting\\"\\n\\t\\t\\t\\t\\tclass=\\"w-full rounded-lg shadow-lg transition-transform transform hover:scale-105\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Trustpilot Section -->\\n\\t\\t<div class=\\"flex flex-col items-center py-16 space-y-4\\">\\n\\t\\t\\t<div class=\\"flex items-end space-x-2\\">\\n\\t\\t\\t\\t<img src=\\"/trustpilotIcon.svg\\" alt=\\"Trustpilot Logo\\" class=\\"h-8 w-auto\\" />\\n\\t\\t\\t\\t<p class=\\"text-xl font-semibold text-white\\">Trustpilot</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<p class=\\"text-gray-300 text-center max-w-2xl leading-relaxed\\">\\n\\t\\t\\t\\tWe love that our customers loves us! Join the satisfied users who trust Hostpro for secure\\n\\t\\t\\t\\tand reliable hosting.\\n\\t\\t\\t</p>\\n\\t\\t\\t<a\\n\\t\\t\\t\\thref=\\"https://www.trustpilot.com/review/hostpro.hu\\"\\n\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\tclass=\\"text-base font-semibold text-green-400 hover:text-green-300 transition\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\tRead Reviews\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t/* General section styling */\\n\\tsection {\\n\\t\\tbackground: linear-gradient(to right, #1a1a1a, #0d0d0d);\\n\\t}\\n\\n\\t/* Gradient and font for the main heading */\\n\\th1 {\\n\\t\\tbackground: linear-gradient(to right, #3b82f6, #14b8a6);\\n\\t\\t-webkit-background-clip: text;\\n\\t\\tcolor: transparent;\\n\\t}\\n\\n\\t/* Button hover and focus effects */\\n\\ta {\\n\\t\\ttransition: all 0.3s ease;\\n\\t}\\n\\n\\ta:hover {\\n\\t\\tbox-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);\\n\\t}\\n\\n\\t/* Trustpilot section adjustments */\\n\\t.flex-col {\\n\\t\\tgap: 1.5rem;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0EC,sBAAQ,CACP,UAAU,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CACvD,CAGA,iBAAG,CACF,UAAU,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CACvD,uBAAuB,CAAE,IAAI,CAC7B,KAAK,CAAE,WACR,CAGA,gBAAE,CACD,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACtB,CAEA,gBAAC,MAAO,CACP,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC3C,CAGA,wBAAU,CACT,GAAG,CAAE,MACN"}'
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="w-full pt-36 md:pt-28 xl:pt-48 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white svelte-1h4kcao" data-svelte-h="svelte-o2hxgw"><div class="px-6 md:px-8 max-w-6xl mx-auto"><div class="md:flex md:flex-row-reverse md:justify-between items-center text-center md:text-left space-y-10 md:space-y-0"> <div class="flex flex-col items-center md:items-start space-y-6 md:space-y-8 order-1 md:order-2 max-w-2xl svelte-1h4kcao"><h1 class="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-300 svelte-1h4kcao">Hostpro</h1> <p class="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">The ultimate secure and affordable dedicated and bare metal hosting solution. We ensure
					peak performance and security at low prices.</p> <p class="mt-2 text-md md:text-xl text-gray-400">Have the power <span class="text-red-500 font-bold">you deserve!</span></p>  <div class="flex space-x-4 mt-6"><a href="#services" class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-black shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white svelte-1h4kcao">Get Started</a> <a href="#features" class="inline-flex items-center justify-center rounded-full border border-gray-700 px-6 py-3 text-base font-semibold text-white transition-transform transform hover:scale-105 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white svelte-1h4kcao">Learn More</a></div></div>  <div class="order-2 md:order-1 max-w-lg mx-auto md:mx-0"><img src="/heroImage.webp" alt="Hostpro - Secure Game Hosting" class="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"></div></div>  <div class="flex flex-col items-center py-16 space-y-4 svelte-1h4kcao"><div class="flex items-end space-x-2"><img src="/trustpilotIcon.svg" alt="Trustpilot Logo" class="h-8 w-auto"> <p class="text-xl font-semibold text-white">Trustpilot</p></div> <p class="text-gray-300 text-center max-w-2xl leading-relaxed">We love that our customers loves us! Join the satisfied users who trust Hostpro for secure
				and reliable hosting.</p> <a href="https://www.trustpilot.com/review/hostpro.hu" target="_blank" class="text-base font-semibold text-green-400 hover:text-green-300 transition svelte-1h4kcao">Read Reviews</a></div></div> </section>`;
});
const css = {
  code: ".container.svelte-75nswa.svelte-75nswa{max-width:1200px}.service-card.svelte-75nswa.svelte-75nswa{background:linear-gradient(135deg, rgba(45, 45, 45, 0.9), rgba(30, 30, 30, 0.9));border-radius:15px}.service-card.svelte-75nswa.svelte-75nswa:hover{box-shadow:0px 8px 20px rgba(0, 0, 0, 0.6);transform:translateY(-4px)}.service-card.svelte-75nswa a.svelte-75nswa{padding:0.75rem 1.5rem}h2.svelte-75nswa span.svelte-75nswa{background:linear-gradient(90deg, #3b82f6, #34d399);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media(min-width: 768px){.service-card.svelte-75nswa.svelte-75nswa{min-height:340px}}",
  map: `{"version":3,"file":"Services.svelte","sources":["Services.svelte"],"sourcesContent":["<script>\\n\\timport { ArrowRight } from 'lucide-svelte';\\n<\/script>\\n\\n<section\\n\\tid=\\"services\\"\\n\\tclass=\\"w-full py-12 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200\\"\\n>\\n\\t<div class=\\"container mx-auto px-6 lg:px-8 max-w-5xl\\">\\n\\t\\t<h2 class=\\"text-4xl font-extrabold tracking-tight sm:text-5xl text-center py-10 text-white\\">\\n\\t\\t\\t<span class=\\"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400\\">\\n\\t\\t\\t\\tOur Services\\n\\t\\t\\t</span>\\n\\t\\t</h2>\\n\\t\\t<div class=\\"flex flex-col md:flex-row items-center justify-center gap-10\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"service-card flex flex-col h-full p-8 w-full md:w-80 bg-gray-800 shadow-xl rounded-lg justify-between border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<h3 class=\\"text-2xl font-bold text-center text-white mb-4\\">Dedicated VPS Hosting</h3>\\n\\t\\t\\t\\t\\t<p class=\\"text-center text-gray-400\\">Your resources, your control.</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-center font-semibold text-lg\\">\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\tFrom <span class=\\"text-blue-500\\">16€</span>\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\thref=\\"/services/dedicated\\"\\n\\t\\t\\t\\t\\tclass=\\"mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tPlans\\n\\t\\t\\t\\t\\t<ArrowRight class=\\"ml-2 h-5 w-5\\" />\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"service-card flex flex-col h-full p-8 w-full md:w-80 bg-gray-800 shadow-xl rounded-lg justify-between border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<h3 class=\\"text-2xl font-bold text-center text-white mb-4\\">Managed Bare Metal Hosting</h3>\\n\\t\\t\\t\\t\\t<p class=\\"text-center text-gray-400\\">Fully managed power for your needs.</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-center font-semibold text-lg\\">\\n\\t\\t\\t\\t\\tFrom <span class=\\"text-blue-500\\">55€</span>\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\thref=\\"/services/bare-metal\\"\\n\\t\\t\\t\\t\\tclass=\\"mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tPlans\\n\\t\\t\\t\\t\\t<ArrowRight class=\\"ml-2 h-5 w-5\\" />\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.container {\\n\\t\\tmax-width: 1200px;\\n\\t}\\n\\n\\t.service-card {\\n\\t\\tbackground: linear-gradient(135deg, rgba(45, 45, 45, 0.9), rgba(30, 30, 30, 0.9));\\n\\t\\tborder-radius: 15px;\\n\\t}\\n\\n\\t/* Hover effect on cards */\\n\\t.service-card:hover {\\n\\t\\tbox-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);\\n\\t\\ttransform: translateY(-4px);\\n\\t}\\n\\n\\t/* Larger buttons with slightly more padding */\\n\\t.service-card a {\\n\\t\\tpadding: 0.75rem 1.5rem;\\n\\t}\\n\\n\\t/* Heading style */\\n\\th2 span {\\n\\t\\tbackground: linear-gradient(90deg, #3b82f6, #34d399);\\n\\t\\tbackground-clip: text;\\n\\t\\t-webkit-background-clip: text;\\n\\t\\t-webkit-text-fill-color: transparent;\\n\\t}\\n\\n\\t/* Make sure the cards have a consistent height */\\n\\t@media (min-width: 768px) {\\n\\t\\t.service-card {\\n\\t\\t\\tmin-height: 340px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0DC,sCAAW,CACV,SAAS,CAAE,MACZ,CAEA,yCAAc,CACb,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CACjF,aAAa,CAAE,IAChB,CAGA,yCAAa,MAAO,CACnB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,SAAS,CAAE,WAAW,IAAI,CAC3B,CAGA,2BAAa,CAAC,eAAE,CACf,OAAO,CAAE,OAAO,CAAC,MAClB,CAGA,gBAAE,CAAC,kBAAK,CACP,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CACpD,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAC1B,CAGA,MAAO,YAAY,KAAK,CAAE,CACzB,yCAAc,CACb,UAAU,CAAE,KACb,CACD"}`
};
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="services" class="w-full py-12 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200"><div class="container mx-auto px-6 lg:px-8 max-w-5xl svelte-75nswa"><h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl text-center py-10 text-white svelte-75nswa" data-svelte-h="svelte-1ryh5s2"><span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 svelte-75nswa">Our Services</span></h2> <div class="flex flex-col md:flex-row items-center justify-center gap-10"><div class="service-card flex flex-col h-full p-8 w-full md:w-80 bg-gray-800 shadow-xl rounded-lg justify-between border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl svelte-75nswa"><div data-svelte-h="svelte-x57kxk"><h3 class="text-2xl font-bold text-center text-white mb-4">Dedicated VPS Hosting</h3> <p class="text-center text-gray-400">Your resources, your control.</p></div> <p class="text-center font-semibold text-lg" data-svelte-h="svelte-veuqpo"><br>
					From <span class="text-blue-500">16€</span></p> <a href="/services/dedicated" class="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center svelte-75nswa">Plans
					${validate_component(Arrow_right, "ArrowRight").$$render($$result, { class: "ml-2 h-5 w-5" }, {}, {})}</a></div> <div class="service-card flex flex-col h-full p-8 w-full md:w-80 bg-gray-800 shadow-xl rounded-lg justify-between border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl svelte-75nswa"><div data-svelte-h="svelte-h0n9kn"><h3 class="text-2xl font-bold text-center text-white mb-4">Managed Bare Metal Hosting</h3> <p class="text-center text-gray-400">Fully managed power for your needs.</p></div> <p class="text-center font-semibold text-lg" data-svelte-h="svelte-1ppnhgp">From <span class="text-blue-500">55€</span></p> <a href="/services/bare-metal" class="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center svelte-75nswa">Plans
					${validate_component(Arrow_right, "ArrowRight").$$render($$result, { class: "ml-2 h-5 w-5" }, {}, {})}</a></div></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C4knje0d.js.map
