import { c as create_ssr_component, v as validate_component, e as escape, f as each, b as add_attribute } from './ssr-BeioO6Pe.js';

const css = {
  code: ".container.svelte-1rgtgfz.svelte-1rgtgfz{max-width:1200px}@media(max-width: 768px){#pricing.svelte-1rgtgfz h2.svelte-1rgtgfz{font-size:2.5rem}}",
  map: `{"version":3,"file":"Listing.svelte","sources":["Listing.svelte"],"sourcesContent":["<script>\\n\\texport let plans;\\n\\texport let title;\\n<\/script>\\n\\n<section\\n\\tid=\\"pricing\\"\\n\\tclass=\\"w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200\\"\\n>\\n\\t<div class=\\"container mx-auto px-4 sm:px-6 lg:px-8\\">\\n\\t\\t<h2 class=\\"text-4xl font-extrabold tracking-tight sm:text-6xl text-center mb-12 text-white\\">\\n\\t\\t\\t{title}\\n\\t\\t</h2>\\n\\t\\t<div class=\\"flex items-center justify-center\\">\\n\\t\\t\\t<a\\n\\t\\t\\t\\thref=\\"/security\\"\\n\\t\\t\\t\\tclass=\\"py-4 inline-block text-center text-lg font-semibold text-blue-400 hover:text-blue-500 underline transition-all transform hover:scale-105\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\tDiscover Our Security Measures\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex flex-col space-y-10\\">\\n\\t\\t\\t{#each plans as plan}\\n\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\tclass=\\"relative flex flex-col md:flex-row border border-gray-700 shadow-2xl rounded-lg p-6 md:p-8 bg-gray-800 transition-transform transform {plan.inStock\\n\\t\\t\\t\\t\\t\\t? ''\\n\\t\\t\\t\\t\\t\\t: 'opacity-50'}\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<!-- Overlay for Out of Stock -->\\n\\t\\t\\t\\t\\t{#if !plan.inStock}\\n\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-2xl md:text-3xl font-extrabold text-red-500\\">Out of Stock</span>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col flex-grow\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"flex justify-between items-center mb-4 md:mb-6\\">\\n\\t\\t\\t\\t\\t\\t\\t<h3 class=\\"text-xl md:text-2xl font-bold text-white\\">{plan.name}</h3>\\n\\t\\t\\t\\t\\t\\t\\t{#if plan.inStock}\\n\\t\\t\\t\\t\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"text-xs md:text-sm font-semibold text-green-400 bg-green-900 px-2 py-1 rounded-full\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>In Stock</span\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"text-xs md:text-sm font-semibold text-red-400 bg-red-900 px-2 py-1 rounded-full\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>Out of Stock</span\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"text-gray-300 space-y-2 text-sm md:text-lg leading-relaxed\\">\\n\\t\\t\\t\\t\\t\\t\\t<p><strong>CPU:</strong> {plan.cpu}</p>\\n\\t\\t\\t\\t\\t\\t\\t<p><strong>Cores:</strong> {plan.cores}</p>\\n\\t\\t\\t\\t\\t\\t\\t<p><strong>Generation:</strong> {plan.generation}</p>\\n\\t\\t\\t\\t\\t\\t\\t<p><strong>RAM:</strong> {plan.ram}</p>\\n\\t\\t\\t\\t\\t\\t\\t<p><strong>Drives:</strong> {plan.drives}</p>\\n\\t\\t\\t\\t\\t\\t\\t<p><strong>Location:</strong> {plan.location}</p>\\n\\t\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t\\t<strong>Information:</strong>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"bg-green-500 text-green-100 py-1 px-2 rounded text-xs md:text-sm\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{plan.info}</span\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"flex flex-col items-start md:items-end justify-between mt-4 md:mt-0 text-left md:text-right\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\"mb-4 md:mb-6\\">\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"text-2xl md:text-3xl font-extrabold text-white\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{plan.price}\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-sm md:text-lg font-medium text-gray-400\\">/ month</span>\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"text-xs md:text-md text-gray-500\\">{plan.hourly_price}/hr</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\thref={plan.link}\\n\\t\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t\\t\\t\\trel=\\"noopener noreferrer\\"\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-transform transform hover:scale-105 text-sm md:text-lg shadow-lg\\"\\n\\t\\t\\t\\t\\t\\t\\tclass:opacity-50={!plan.inStock}\\n\\t\\t\\t\\t\\t\\t\\tclass:cursor-not-allowed={!plan.inStock}\\n\\t\\t\\t\\t\\t\\t\\taria-disabled={!plan.inStock}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tOrder Now\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.container {\\n\\t\\tmax-width: 1200px;\\n\\t}\\n\\t/* Responsive styling for mobile */\\n\\t@media (max-width: 768px) {\\n\\t\\t#pricing h2 {\\n\\t\\t\\tfont-size: 2.5rem;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkGC,wCAAW,CACV,SAAS,CAAE,MACZ,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,uBAAQ,CAAC,iBAAG,CACX,SAAS,CAAE,MACZ,CACD"}`
};
const Listing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { plans } = $$props;
  let { title } = $$props;
  if ($$props.plans === void 0 && $$bindings.plans && plans !== void 0) $$bindings.plans(plans);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css);
  return `<section id="pricing" class="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 svelte-1rgtgfz"><div class="container mx-auto px-4 sm:px-6 lg:px-8 svelte-1rgtgfz"><h2 class="text-4xl font-extrabold tracking-tight sm:text-6xl text-center mb-12 text-white svelte-1rgtgfz">${escape(title)}</h2> <div class="flex items-center justify-center" data-svelte-h="svelte-112ns01"><a href="/security" class="py-4 inline-block text-center text-lg font-semibold text-blue-400 hover:text-blue-500 underline transition-all transform hover:scale-105">Discover Our Security Measures</a></div> <div class="flex flex-col space-y-10">${each(plans, (plan) => {
    return `<div class="${"relative flex flex-col md:flex-row border border-gray-700 shadow-2xl rounded-lg p-6 md:p-8 bg-gray-800 transition-transform transform " + escape(plan.inStock ? "" : "opacity-50", true)}"> ${!plan.inStock ? `<div class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg" data-svelte-h="svelte-1ud0bya"><span class="text-2xl md:text-3xl font-extrabold text-red-500">Out of Stock</span> </div>` : ``} <div class="flex flex-col flex-grow"><div class="flex justify-between items-center mb-4 md:mb-6"><h3 class="text-xl md:text-2xl font-bold text-white">${escape(plan.name)}</h3> ${plan.inStock ? `<span class="text-xs md:text-sm font-semibold text-green-400 bg-green-900 px-2 py-1 rounded-full" data-svelte-h="svelte-1lo982r">In Stock</span>` : `<span class="text-xs md:text-sm font-semibold text-red-400 bg-red-900 px-2 py-1 rounded-full" data-svelte-h="svelte-oj4xcd">Out of Stock</span>`}</div> <div class="text-gray-300 space-y-2 text-sm md:text-lg leading-relaxed"><p><strong data-svelte-h="svelte-254u84">CPU:</strong> ${escape(plan.cpu)}</p> <p><strong data-svelte-h="svelte-1l3tpou">Cores:</strong> ${escape(plan.cores)}</p> <p><strong data-svelte-h="svelte-2izcvu">Generation:</strong> ${escape(plan.generation)}</p> <p><strong data-svelte-h="svelte-1d6ip8e">RAM:</strong> ${escape(plan.ram)}</p> <p><strong data-svelte-h="svelte-io6nzl">Drives:</strong> ${escape(plan.drives)}</p> <p><strong data-svelte-h="svelte-10n3zgv">Location:</strong> ${escape(plan.location)}</p> <p><strong data-svelte-h="svelte-chpfuo">Information:</strong> <span class="bg-green-500 text-green-100 py-1 px-2 rounded text-xs md:text-sm">${escape(plan.info)}</span></p> </div></div> <div class="flex flex-col items-start md:items-end justify-between mt-4 md:mt-0 text-left md:text-right"><div class="mb-4 md:mb-6"><p class="text-2xl md:text-3xl font-extrabold text-white">${escape(plan.price)} <span class="text-sm md:text-lg font-medium text-gray-400" data-svelte-h="svelte-17cd7rp">/ month</span></p> <p class="text-xs md:text-md text-gray-500">${escape(plan.hourly_price)}/hr</p></div> <a${add_attribute("href", plan.link, 0)} target="_blank" rel="noopener noreferrer" class="${[
      "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-transform transform hover:scale-105 text-sm md:text-lg shadow-lg",
      (!plan.inStock ? "opacity-50" : "") + " " + (!plan.inStock ? "cursor-not-allowed" : "")
    ].join(" ").trim()}"${add_attribute("aria-disabled", !plan.inStock, 0)}>Order Now
						</a></div> </div>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const plans = [
    {
      name: "RSB-1",
      price: "55.00€",
      hourly_price: "0.075€",
      inStock: true,
      availability: "Available",
      cpu: "AMD Ryzen 5 4500",
      cores: "6 cores / 12 threads",
      generation: "Zen 2",
      ram: "32GB DDR4 3200mhz",
      drives: "2x480GB SSD",
      location: "Hungary",
      info: "Dedicated IPv4",
      link: "https://billing.hostpro.hu/order?product=6"
    },
    {
      name: "ISB-2",
      price: "30.00€",
      hourly_price: "0.042€",
      inStock: false,
      availability: "Out of Stock",
      cpu: "Xeon E3-1240",
      cores: "4 cores / 8 threads",
      generation: "Gen 2",
      ram: "16GB DDR3 2400mhz",
      drives: "2x512GB HDD",
      location: "Hungary",
      info: "Dedicated IPv4",
      link: "https://discord.gg/BMPbaMeCa5"
    }
  ];
  return `<section id="chunk"><div>${validate_component(Listing, "Listing").$$render($$result, { plans, title: "Bare Metal Hosting" }, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DBKGrzNe.js.map
