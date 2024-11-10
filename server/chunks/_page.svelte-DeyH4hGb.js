import { c as create_ssr_component, v as validate_component, e as escape, f as each, b as add_attribute } from './ssr-BeioO6Pe.js';
import { I as Icon } from './Icon-mKVLVxbQ.js';

const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: ".container.svelte-8beb9c{max-width:1200px}table.svelte-8beb9c{border-spacing:0}td.svelte-8beb9c,th.svelte-8beb9c{border:1px solid #374151}",
  map: `{"version":3,"file":"Pricing.svelte","sources":["Pricing.svelte"],"sourcesContent":["<script>\\n\\timport { CheckIcon } from 'lucide-svelte';\\n\\texport let plans;\\n\\texport let title;\\n\\texport let note;\\n<\/script>\\n\\n<section id=\\"pricing\\" class=\\"w-full py-20 md:py-32 lg:py-40 bg-gray-900 text-gray-200\\">\\n\\t<div class=\\"container mx-auto px-4 sm:px-6 lg:px-8\\">\\n\\t\\t<h2 class=\\"text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-12 text-white\\">\\n\\t\\t\\t{title}\\n\\t\\t</h2>\\n\\n\\t\\t<!-- Mobile view with card-like sections for each plan -->\\n\\t\\t<div class=\\"md:hidden space-y-8\\">\\n\\t\\t\\t{#each plans as plan}\\n\\t\\t\\t\\t<div class=\\"border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg\\">\\n\\t\\t\\t\\t\\t<h3 class=\\"text-2xl font-bold text-white text-center mb-4\\">{plan.name}</h3>\\n\\t\\t\\t\\t\\t<div class=\\"text-center mb-6\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\"text-3xl font-extrabold text-blue-400\\">{plan.price}</span>\\n\\t\\t\\t\\t\\t\\t<span class=\\"text-sm font-medium text-gray-400\\">/ month</span>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<!-- Collapsible Features Section -->\\n\\t\\t\\t\\t\\t<div class=\\"space-y-2\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"font-bold text-lg text-white mb-2\\">Features:</p>\\n\\t\\t\\t\\t\\t\\t<ul class=\\"space-y-2\\">\\n\\t\\t\\t\\t\\t\\t\\t{#each plan.features as feature}\\n\\t\\t\\t\\t\\t\\t\\t\\t<li class=\\"flex items-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<CheckIcon class=\\"text-green-500 mr-2 h-5 w-5\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<span>{feature}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<!-- Purchase Button -->\\n\\t\\t\\t\\t\\t<div class=\\"mt-6 text-center\\">\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\thref={plan.link}\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition-colors\\"\\n\\t\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t\\t\\t\\trel=\\"noopener noreferrer\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tPurchase\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\n\\t\\t<!-- Desktop table layout -->\\n\\t\\t<div class=\\"hidden md:block overflow-hidden rounded-lg shadow-lg\\">\\n\\t\\t\\t<table class=\\"w-full border-collapse bg-gray-800 text-gray-300\\">\\n\\t\\t\\t\\t<thead>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<th class=\\"p-4 text-lg font-bold bg-gray-900 text-white text-center\\">Plan</th>\\n\\t\\t\\t\\t\\t\\t{#each plans as plan}\\n\\t\\t\\t\\t\\t\\t\\t<th class=\\"p-4 text-lg font-bold bg-gray-900 text-white text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{plan.name}\\n\\t\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</thead>\\n\\t\\t\\t\\t<tbody>\\n\\t\\t\\t\\t\\t<!-- Price Row -->\\n\\t\\t\\t\\t\\t<tr class=\\"bg-gray-800\\">\\n\\t\\t\\t\\t\\t\\t<td class=\\"p-4 text-center font-bold text-white\\">Price</td>\\n\\t\\t\\t\\t\\t\\t{#each plans as plan}\\n\\t\\t\\t\\t\\t\\t\\t<td class=\\"p-4 text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-2xl font-extrabold text-blue-400\\">{plan.price}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-sm font-medium text-gray-400\\">/ month</span>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t\\t<!-- Features Row -->\\n\\t\\t\\t\\t\\t<tr class=\\"bg-gray-700\\">\\n\\t\\t\\t\\t\\t\\t<td class=\\"p-4 text-center font-bold text-white\\">Features</td>\\n\\t\\t\\t\\t\\t\\t{#each plans as plan}\\n\\t\\t\\t\\t\\t\\t\\t<td class=\\"p-4\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<ul class=\\"space-y-2\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each plan.features as feature}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<li class=\\"flex items-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<CheckIcon class=\\"text-green-500 mr-2 h-5 w-5\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span>{feature}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t\\t<!-- Action Row -->\\n\\t\\t\\t\\t\\t<tr class=\\"bg-gray-800\\">\\n\\t\\t\\t\\t\\t\\t<td class=\\"p-4 text-center font-bold text-white\\">Action</td>\\n\\t\\t\\t\\t\\t\\t{#each plans as plan}\\n\\t\\t\\t\\t\\t\\t\\t<td class=\\"p-4 text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\t\\thref={plan.link}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\trel=\\"noopener noreferrer\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tPurchase\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</tbody>\\n\\t\\t\\t</table>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- Note Section Below the Table -->\\n\\t{#if note}\\n\\t\\t<p\\n\\t\\t\\tclass=\\"py-10 md:py-20 text-center mx-auto text-sm md:text-base text-gray-400 max-w-[1200px] px-4\\"\\n\\t\\t>\\n\\t\\t\\t{note}\\n\\t\\t</p>\\n\\t{/if}\\n</section>\\n\\n<style>\\n\\t.container {\\n\\t\\tmax-width: 1200px;\\n\\t}\\n\\ttable {\\n\\t\\tborder-spacing: 0;\\n\\t}\\n\\ttd,\\n\\tth {\\n\\t\\tborder: 1px solid #374151;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6HC,wBAAW,CACV,SAAS,CAAE,MACZ,CACA,mBAAM,CACL,cAAc,CAAE,CACjB,CACA,gBAAE,CACF,gBAAG,CACF,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACnB"}`
};
const Pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { plans } = $$props;
  let { title } = $$props;
  let { note } = $$props;
  if ($$props.plans === void 0 && $$bindings.plans && plans !== void 0) $$bindings.plans(plans);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.note === void 0 && $$bindings.note && note !== void 0) $$bindings.note(note);
  $$result.css.add(css);
  return `<section id="pricing" class="w-full py-20 md:py-32 lg:py-40 bg-gray-900 text-gray-200"><div class="container mx-auto px-4 sm:px-6 lg:px-8 svelte-8beb9c"><h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-12 text-white">${escape(title)}</h2>  <div class="md:hidden space-y-8">${each(plans, (plan) => {
    return `<div class="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg"><h3 class="text-2xl font-bold text-white text-center mb-4">${escape(plan.name)}</h3> <div class="text-center mb-6"><span class="text-3xl font-extrabold text-blue-400">${escape(plan.price)}</span> <span class="text-sm font-medium text-gray-400" data-svelte-h="svelte-1owc3x">/ month</span></div>  <div class="space-y-2"><p class="font-bold text-lg text-white mb-2" data-svelte-h="svelte-1ov0qu5">Features:</p> <ul class="space-y-2">${each(plan.features, (feature) => {
      return `<li class="flex items-center">${validate_component(Check, "CheckIcon").$$render($$result, { class: "text-green-500 mr-2 h-5 w-5" }, {}, {})} <span>${escape(feature)}</span> </li>`;
    })} </ul></div>  <div class="mt-6 text-center"><a${add_attribute("href", plan.link, 0)} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition-colors" target="_blank" rel="noopener noreferrer">Purchase
						</a></div> </div>`;
  })}</div>  <div class="hidden md:block overflow-hidden rounded-lg shadow-lg"><table class="w-full border-collapse bg-gray-800 text-gray-300 svelte-8beb9c"><thead><tr><th class="p-4 text-lg font-bold bg-gray-900 text-white text-center svelte-8beb9c" data-svelte-h="svelte-144ag6y">Plan</th> ${each(plans, (plan) => {
    return `<th class="p-4 text-lg font-bold bg-gray-900 text-white text-center svelte-8beb9c">${escape(plan.name)} </th>`;
  })}</tr></thead> <tbody> <tr class="bg-gray-800"><td class="p-4 text-center font-bold text-white svelte-8beb9c" data-svelte-h="svelte-1jrrc54">Price</td> ${each(plans, (plan) => {
    return `<td class="p-4 text-center svelte-8beb9c"><span class="text-2xl font-extrabold text-blue-400">${escape(plan.price)}</span> <span class="text-sm font-medium text-gray-400" data-svelte-h="svelte-1owc3x">/ month</span> </td>`;
  })}</tr>  <tr class="bg-gray-700"><td class="p-4 text-center font-bold text-white svelte-8beb9c" data-svelte-h="svelte-16z4s3w">Features</td> ${each(plans, (plan) => {
    return `<td class="p-4 svelte-8beb9c"><ul class="space-y-2">${each(plan.features, (feature) => {
      return `<li class="flex items-center">${validate_component(Check, "CheckIcon").$$render($$result, { class: "text-green-500 mr-2 h-5 w-5" }, {}, {})} <span>${escape(feature)}</span> </li>`;
    })}</ul> </td>`;
  })}</tr>  <tr class="bg-gray-800"><td class="p-4 text-center font-bold text-white svelte-8beb9c" data-svelte-h="svelte-z89ixf">Action</td> ${each(plans, (plan) => {
    return `<td class="p-4 text-center svelte-8beb9c"><a${add_attribute("href", plan.link, 0)} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors" target="_blank" rel="noopener noreferrer">Purchase</a> </td>`;
  })}</tr></tbody></table></div></div>  ${note ? `<p class="py-10 md:py-20 text-center mx-auto text-sm md:text-base text-gray-400 max-w-[1200px] px-4">${escape(note)}</p>` : ``} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const plans = [
    {
      name: "Starter",
      price: "16.50€",
      features: ["3 vcores", "8gb ram", "120gb SSD", "Shared ipv4 address", "No setup fee"],
      link: "https://billing.hostpro.hu/order?product=3"
    },
    {
      name: "Basic",
      price: "30.00€",
      features: ["6 vcores", "16gb ram", "240gb SSD", "Shared ipv4 address", "No setup fee"],
      link: "https://billing.hostpro.hu/order?product=4"
    },
    {
      name: "Pro",
      price: "55.00€",
      features: [
        "12 vcores",
        "32gb ram",
        "480gb SSD",
        "Dedicated ipv4 address",
        "No setup fee"
      ],
      link: "https://billing.hostpro.hu/order?product=5"
    }
  ];
  return `<section id="chunk"><div>${validate_component(Pricing, "Pricing").$$render(
    $$result,
    {
      plans,
      title: "Dedicated VPS Server Hosting",
      note: "Standard server setup may take up to 24 hours. For a priority setup and a faster start, join our Discord community—we’ll get you up and running in no time!"
    },
    {},
    {}
  )}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DeyH4hGb.js.map
