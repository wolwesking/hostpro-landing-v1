import{s as B,n as S}from"../chunks/scheduler.BJDr1mdf.js";import{S as N,i as R,e as m,s as D,c as p,a as y,k as j,f as E,d as o,l as _,g as F,h as n,m as U,t as L,n as M,b as P}from"../chunks/index.D9ztpNKM.js";import{e as q}from"../chunks/each.D6YF6ztN.js";function z(c,e,l){const r=c.slice();return r[1]=e[l],r[3]=l,r}function W(c){let e;return{c(){e=m("div"),this.h()},l(l){e=p(l,"DIV",{class:!0}),y(e).forEach(o),this.h()},h(){_(e,"class","absolute left-5 w-2 bg-blue-500 h-full transform -translate-y-full hidden sm:block")},m(l,r){F(l,e,r)},d(l){l&&o(e)}}}function A(c){let e,l,r=c[3]+1+"",I,w,a,h,x=c[1].title+"",k,g,s,i=c[1].description+"",u,t,f,d=c[3]<c[0].length-1&&W();return{c(){e=m("div"),l=m("div"),I=L(r),w=D(),a=m("div"),h=m("h2"),k=L(x),g=D(),s=m("p"),u=L(i),t=D(),d&&d.c(),f=M(),this.h()},l(v){e=p(v,"DIV",{class:!0});var b=y(e);l=p(b,"DIV",{class:!0});var H=y(l);I=P(H,r),H.forEach(o),w=E(b),a=p(b,"DIV",{class:!0});var V=y(a);h=p(V,"H2",{class:!0});var C=y(h);k=P(C,x),C.forEach(o),g=E(V),s=p(V,"P",{class:!0});var T=y(s);u=P(T,i),T.forEach(o),V.forEach(o),b.forEach(o),t=E(v),d&&d.l(v),f=M(),this.h()},h(){_(l,"class","flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"),_(h,"class","text-xl font-semibold text-blue-400 mb-2"),_(s,"class","text-gray-300"),_(a,"class","ml-6 bg-gray-800 p-6 rounded-lg shadow-md w-full svelte-f7ttso"),_(e,"class","flex items-start svelte-f7ttso")},m(v,b){F(v,e,b),n(e,l),n(l,I),n(e,w),n(e,a),n(a,h),n(h,k),n(a,g),n(a,s),n(s,u),F(v,t,b),d&&d.m(v,b),F(v,f,b)},p:S,d(v){v&&(o(e),o(t),o(f)),d&&d.d(v)}}}function $(c){let e,l,r,I="HostPro's Security Layers",w,a,h,x,k='<div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">✓</div>',g=q(c[0]),s=[];for(let i=0;i<g.length;i+=1)s[i]=A(z(c,g,i));return{c(){e=m("div"),l=m("div"),r=m("h1"),r.textContent=I,w=D(),a=m("div");for(let i=0;i<s.length;i+=1)s[i].c();h=D(),x=m("div"),x.innerHTML=k,this.h()},l(i){e=p(i,"DIV",{class:!0});var u=y(e);l=p(u,"DIV",{class:!0});var t=y(l);r=p(t,"H1",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-1qx04c0"&&(r.textContent=I),w=E(t),a=p(t,"DIV",{class:!0});var f=y(a);for(let d=0;d<s.length;d+=1)s[d].l(f);h=E(f),x=p(f,"DIV",{class:!0,"data-svelte-h":!0}),j(x)!=="svelte-1xmfgzr"&&(x.innerHTML=k),f.forEach(o),t.forEach(o),u.forEach(o),this.h()},h(){_(r,"class","text-3xl font-bold text-blue-400 mb-8 text-center"),_(x,"class","flex justify-center"),_(a,"class","space-y-6 relative"),_(l,"class","max-w-3xl mx-auto"),_(e,"class","min-h-screen bg-gray-900 text-gray-100 py-24 px-4 sm:px-6 lg:px-8")},m(i,u){F(i,e,u),n(e,l),n(l,r),n(l,w),n(l,a);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(a,null);n(a,h),n(a,x)},p(i,[u]){if(u&1){g=q(i[0]);let t;for(t=0;t<g.length;t+=1){const f=z(i,g,t);s[t]?s[t].p(f,u):(s[t]=A(f),s[t].c(),s[t].m(a,h))}for(;t<s.length;t+=1)s[t].d(1);s.length=g.length}},i:S,o:S,d(i){i&&o(e),U(s,i)}}}function G(c){return[[{title:"1. Traffic Ingress",description:"Incoming traffic enters from the internet to your network."},{title:"2. Firewall",description:"External Firewall which filters malicious traffic. DDoS filters drop known attack signatures. Suspicious IPs are blocked."},{title:"3. High-Performance Router",description:"Handles high traffic volumes, supports dynamic traffic shaping and load balancing to prevent overload."},{title:"4. Proxmox's Firewalls & UFW",description:"Proxmox Firewall and UFW on each VM container. Strict access rules and DDoS prevention on each virtual machine."},{title:"5. VLAN Isolation",description:"Each server resides in its own VLAN for enhanced isolation and better attack traffic containment."},{title:"6. IP Tables & Fail2Ban on Software Level",description:"Iptables blocks malicious IPs. Fail2Ban automatically bans IPs involved in suspicious activities."},{title:"7. Traffic Filtering & Rate Limiting (Final Layer)",description:"Final traffic filtering and rate-limiting before reaching the servers."}]]}class Q extends N{constructor(e){super(),R(this,e,G,$,B,{})}}export{Q as component};
