import { c as create_ssr_component, f as each, e as escape } from './ssr-BeioO6Pe.js';

const css = {
  code: "@media(max-width: 640px){.flex.items-start.svelte-f7ttso{flex-direction:column;align-items:center}.ml-6.svelte-f7ttso{margin-left:0;margin-top:1rem}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\tconst securityLayers = [\\n\\t\\t{\\n\\t\\t\\ttitle: '1. Traffic Ingress',\\n\\t\\t\\tdescription: 'Incoming traffic enters from the internet to your network.'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitle: '2. Firewall',\\n\\t\\t\\tdescription:\\n\\t\\t\\t\\t'External Firewall which filters malicious traffic. DDoS filters drop known attack signatures. Suspicious IPs are blocked.'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitle: '3. High-Performance Router',\\n\\t\\t\\tdescription:\\n\\t\\t\\t\\t'Handles high traffic volumes, supports dynamic traffic shaping and load balancing to prevent overload.'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitle: \\"4. Proxmox's Firewalls & UFW\\",\\n\\t\\t\\tdescription:\\n\\t\\t\\t\\t'Proxmox Firewall and UFW on each VM container. Strict access rules and DDoS prevention on each virtual machine.'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitle: '5. VLAN Isolation',\\n\\t\\t\\tdescription:\\n\\t\\t\\t\\t'Each server resides in its own VLAN for enhanced isolation and better attack traffic containment.'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitle: '6. IP Tables & Fail2Ban on Software Level',\\n\\t\\t\\tdescription:\\n\\t\\t\\t\\t'Iptables blocks malicious IPs. Fail2Ban automatically bans IPs involved in suspicious activities.'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitle: '7. Traffic Filtering & Rate Limiting (Final Layer)',\\n\\t\\t\\tdescription: 'Final traffic filtering and rate-limiting before reaching the servers.'\\n\\t\\t}\\n\\t];\\n<\/script>\\n\\n<div class=\\"min-h-screen bg-gray-900 text-gray-100 py-24 px-4 sm:px-6 lg:px-8\\">\\n\\t<div class=\\"max-w-3xl mx-auto\\">\\n\\t\\t<h1 class=\\"text-3xl font-bold text-blue-400 mb-8 text-center\\">HostPro's Security Layers</h1>\\n\\t\\t<div class=\\"space-y-6 relative\\">\\n\\t\\t\\t{#each securityLayers as layer, index}\\n\\t\\t\\t\\t<div class=\\"flex items-start\\">\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{index + 1}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"ml-6 bg-gray-800 p-6 rounded-lg shadow-md w-full\\">\\n\\t\\t\\t\\t\\t\\t<h2 class=\\"text-xl font-semibold text-blue-400 mb-2\\">{layer.title}</h2>\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-gray-300\\">{layer.description}</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{#if index < securityLayers.length - 1}\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"absolute left-5 w-2 bg-blue-500 h-full transform -translate-y-full hidden sm:block\\"\\n\\t\\t\\t\\t\\t></div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t{/each}\\n\\t\\t\\t<div class=\\"flex justify-center\\">\\n\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\tclass=\\"w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t✓\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t@media (max-width: 640px) {\\n\\t\\t.flex.items-start {\\n\\t\\t\\tflex-direction: column;\\n\\t\\t\\talign-items: center;\\n\\t\\t}\\n\\t\\t.ml-6 {\\n\\t\\t\\tmargin-left: 0;\\n\\t\\t\\tmargin-top: 1rem;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwEC,MAAO,YAAY,KAAK,CAAE,CACzB,KAAK,0BAAa,CACjB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACd,CACA,mBAAM,CACL,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,IACb,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const securityLayers = [
    {
      title: "1. Traffic Ingress",
      description: "Incoming traffic enters from the internet to your network."
    },
    {
      title: "2. Firewall",
      description: "External Firewall which filters malicious traffic. DDoS filters drop known attack signatures. Suspicious IPs are blocked."
    },
    {
      title: "3. High-Performance Router",
      description: "Handles high traffic volumes, supports dynamic traffic shaping and load balancing to prevent overload."
    },
    {
      title: "4. Proxmox's Firewalls & UFW",
      description: "Proxmox Firewall and UFW on each VM container. Strict access rules and DDoS prevention on each virtual machine."
    },
    {
      title: "5. VLAN Isolation",
      description: "Each server resides in its own VLAN for enhanced isolation and better attack traffic containment."
    },
    {
      title: "6. IP Tables & Fail2Ban on Software Level",
      description: "Iptables blocks malicious IPs. Fail2Ban automatically bans IPs involved in suspicious activities."
    },
    {
      title: "7. Traffic Filtering & Rate Limiting (Final Layer)",
      description: "Final traffic filtering and rate-limiting before reaching the servers."
    }
  ];
  $$result.css.add(css);
  return `<div class="min-h-screen bg-gray-900 text-gray-100 py-24 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><h1 class="text-3xl font-bold text-blue-400 mb-8 text-center" data-svelte-h="svelte-1qx04c0">HostPro&#39;s Security Layers</h1> <div class="space-y-6 relative">${each(securityLayers, (layer, index) => {
    return `<div class="flex items-start svelte-f7ttso"><div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">${escape(index + 1)}</div> <div class="ml-6 bg-gray-800 p-6 rounded-lg shadow-md w-full svelte-f7ttso"><h2 class="text-xl font-semibold text-blue-400 mb-2">${escape(layer.title)}</h2> <p class="text-gray-300">${escape(layer.description)}</p> </div></div> ${index < securityLayers.length - 1 ? `<div class="absolute left-5 w-2 bg-blue-500 h-full transform -translate-y-full hidden sm:block"></div>` : ``}`;
  })} <div class="flex justify-center" data-svelte-h="svelte-1xmfgzr"><div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">✓</div></div></div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DQLlLMn1.js.map
