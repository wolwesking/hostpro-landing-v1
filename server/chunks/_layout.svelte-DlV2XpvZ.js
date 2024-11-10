import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from './ssr-BeioO6Pe.js';
import { I as Icon } from './Icon-mKVLVxbQ.js';

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"><p class="text-xs text-gray-500">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Hostpro. All rights reserved.</p> <nav class="sm:ml-auto flex gap-4 sm:gap-6" data-svelte-h="svelte-1dy08ny"><a class="text-xs hover:underline underline-offset-4" target="_blank" href="https://discord.gg/BMPbaMeCa5">Discord</a> <a class="text-xs hover:underline underline-offset-4" href="/terms">Terms of Service</a> <a class="text-xs hover:underline underline-offset-4" href="/privacy">Privacy</a></nav></footer>`;
});
const Gamepad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "6",
        "x2": "10",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "8",
        "y1": "10",
        "y2": "14"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "x2": "15.01",
        "y1": "13",
        "y2": "13"
      }
    ],
    [
      "line",
      {
        "x1": "18",
        "x2": "18.01",
        "y1": "11",
        "y2": "11"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "12",
        "x": "2",
        "y": "6",
        "rx": "2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "gamepad" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md fixed w-full z-20"><a class="flex items-center" href="/">${validate_component(Gamepad, "GamepadIcon").$$render($$result, { class: "h-7 w-7 mr-2 text-blue-500" }, {}, {})} <span class="font-bold text-2xl text-gray-900" data-svelte-h="svelte-1g3xgte">Hostpro</span></a> <nav class="ml-auto hidden lg:flex items-center space-x-6" data-svelte-h="svelte-178tb0r"><a class="text-lg font-semibold text-gray-700 hover:underline underline-offset-4" href="/services/dedicated">Dedicated</a> <a class="text-lg font-semibold text-gray-700 hover:underline underline-offset-4" href="/services/bare-metal">Bare Metal</a> <a class="text-lg font-semibold text-gray-700 hover:underline underline-offset-4" href="/#contact">Contact</a> <a href="https://discord.gg/BMPbaMeCa5" class="inline-flex items-center justify-center px-5 py-2 text-lg font-semibold text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Help</a></nav> <button title="Toggle Menu" class="lg:hidden ml-auto p-2">${`${validate_component(Menu, "MenuIcon").$$render($$result, { class: "h-7 w-7 text-gray-900" }, {}, {})}`}</button></header>  <div${add_attribute("class", `lg:hidden fixed inset-0 bg-white z-30 shadow-lg transition-transform ${"translate-x-full"}`, 0)}><div class="flex items-center justify-between px-4 py-4 border-b"><a class="flex items-center" href="/">${validate_component(Gamepad, "GamepadIcon").$$render($$result, { class: "h-7 w-7 text-blue-500" }, {}, {})} <span class="font-bold text-2xl text-gray-900" data-svelte-h="svelte-1g3xgte">Hostpro</span></a> <button title="Close Menu" class="p-2">${validate_component(X, "XIcon").$$render($$result, { class: "h-7 w-7 text-gray-900" }, {}, {})}</button></div> <nav class="flex flex-col items-center py-8 space-y-8"><button data-svelte-h="svelte-1qu5g8j"><a class="text-lg font-semibold text-gray-700 hover:underline underline-offset-4" href="/services/dedicated">Dedicated</a></button> <button title="Close Menu" class="p-2" data-svelte-h="svelte-epu3cs"><a class="text-lg font-semibold text-gray-700 hover:underline underline-offset-4" href="/services/bare-metal">Bare Metal</a></button> <button title="Close Menu" class="p-2" data-svelte-h="svelte-1xk2m2v"><a class="text-lg font-semibold text-gray-700 hover:underline underline-offset-4" href="/#contact">Contact</a></button> <button title="Close Menu" class="p-2" data-svelte-h="svelte-14g02wk"><a href="https://discord.gg/BMPbaMeCa5" class="inline-flex items-center justify-center px-5 py-2 text-lg font-semibold text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Help</a></button></nav></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DlV2XpvZ.js.map
