import{s as H,f as R,i as $,n as I,o as G}from"../chunks/scheduler.56f0b95c.js";import{S as M,i as T,g as S,m as g,h as P,j as B,n as b,f as d,k as J,a as p,x as y,o as L,s as O,e as w,y as K,c as V,l as j,d as _,b as q,t as v,z,p as F,r as Q,u as U,v as W,w as X}from"../chunks/index.ac73e6f9.js";import{b as Y}from"../chunks/paths.0f038b3c.js";import{_ as Z}from"../chunks/preload-helper.a4192956.js";function E(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}var k=Object.defineProperty,tt=(l,t,n)=>t in l?k(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,m=(l,t,n)=>(tt(l,typeof t!="symbol"?t+"":t,n),n);let et=class{constructor(t,n={}){m(this,"src"),m(this,"options"),m(this,"howl"),this.src=t,this.options=n,this.create()}async create(){const{Howl:t}=await Z(()=>import("../chunks/howler.core-e669a980.4e0b937d.js"),[],import.meta.url).then(u=>u.h),{loop:n,volume:o}=this.options,c=new t({src:this.src,loop:n||!1,volume:o||1,...this.options});this.howl=c}update(t=this.options){this.unload(),this.options=t,this.create()}destroy(){this.stop(),this.unload()}play(){this.howl.play()}stop(){this.howl.stop()}unload(){this.howl.unload()}};class st extends et{constructor(t,{src:n,events:o,...c}){super(n,c),m(this,"node"),m(this,"events"),this.node=t,this.events=o,this.attachControls()}attachControls(){const[t,n]=this.events;this.node.play=this.play.bind(this),this.node.stop=this.stop.bind(this),this.node.addEventListener(t,this.play.bind(this)),this.node.addEventListener(n,this.stop.bind(this))}removeEventListeners(){const[t,n]=this.events;this.node.removeEventListener(t,this.play.bind(this)),this.node.removeEventListener(n,this.stop.bind(this))}update(t){this.removeEventListeners(),super.update(t),this.attachControls()}destroy(){this.removeEventListeners(),super.destroy()}}function nt(l,t){return new st(l,t)}function ot(l){let t,n=l[1]+1+"",o,c,u=l[0].replace(/-/g," ")+"",f,i,r,a;return{c(){t=S("span"),o=g(n),c=g(". "),f=g(u),this.h()},l(e){t=P(e,"SPAN",{class:!0});var s=B(t);o=b(s,n),c=b(s,". "),f=b(s,u),s.forEach(d),this.h()},h(){J(t,"class","svelte-1cj4blh")},m(e,s){p(e,t,s),y(t,o),y(t,c),y(t,f),r||(a=R(i=nt.call(null,t,{src:l[2],events:["click"]})),r=!0)},p(e,[s]){s&2&&n!==(n=e[1]+1+"")&&L(o,n),s&1&&u!==(u=e[0].replace(/-/g," ")+"")&&L(f,u),i&&$(i.update)&&s&4&&i.update.call(null,{src:e[2],events:["click"]})},i:I,o:I,d(e){e&&d(t),r=!1,a()}}}function lt(l,t,n){let{title:o}=t,{soundIndex:c}=t,{src:u}=t;return l.$$set=f=>{"title"in f&&n(0,o=f.title),"soundIndex"in f&&n(1,c=f.soundIndex),"src"in f&&n(2,u=f.src)},[o,c,u]}class it extends M{constructor(t){super(),T(this,t,lt,ot,H,{title:0,soundIndex:1,src:2})}}function C(l,t,n){const o=l.slice();return o[1]=t[n].category,o[2]=t[n].files,o}function N(l,t,n){const o=l.slice();return o[5]=t[n].title,o[6]=t[n].src,o[8]=n,o}function A(l){let t,n;return t=new it({props:{title:l[5],src:l[6],soundIndex:l[8]}}),{c(){Q(t.$$.fragment)},l(o){U(t.$$.fragment,o)},m(o,c){W(t,o,c),n=!0},p(o,c){const u={};c&1&&(u.title=o[5]),c&1&&(u.src=o[6]),t.$set(u)},i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){X(t,o)}}}function D(l){let t,n=l[1]+"",o,c,u,f,i=E(l[2]),r=[];for(let e=0;e<i.length;e+=1)r[e]=A(N(l,i,e));const a=e=>v(r[e],1,1,()=>{r[e]=null});return{c(){t=S("span"),o=g(n),c=O();for(let e=0;e<r.length;e+=1)r[e].c();u=w()},l(e){t=P(e,"SPAN",{});var s=B(t);o=b(s,n),s.forEach(d),c=V(e);for(let h=0;h<r.length;h+=1)r[h].l(e);u=w()},m(e,s){p(e,t,s),y(t,o),p(e,c,s);for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(e,s);p(e,u,s),f=!0},p(e,s){if((!f||s&1)&&n!==(n=e[1]+"")&&L(o,n),s&1){i=E(e[2]);let h;for(h=0;h<i.length;h+=1){const x=N(e,i,h);r[h]?(r[h].p(x,s),_(r[h],1)):(r[h]=A(x),r[h].c(),_(r[h],1),r[h].m(u.parentNode,u))}for(F(),h=i.length;h<r.length;h+=1)a(h);q()}},i(e){if(!f){for(let s=0;s<i.length;s+=1)_(r[s]);f=!0}},o(e){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)v(r[s]);f=!1},d(e){e&&(d(t),d(c),d(u)),z(r,e)}}}function at(l){let t,n='<img src="pops.png" style="width: 100%; height: auto; object-fit: contain;" alt="pops face"/>',o,c,u,f=E(l[0]),i=[];for(let a=0;a<f.length;a+=1)i[a]=D(C(l,f,a));const r=a=>v(i[a],1,1,()=>{i[a]=null});return{c(){t=S("div"),t.innerHTML=n,o=O();for(let a=0;a<i.length;a+=1)i[a].c();c=w(),this.h()},l(a){t=P(a,"DIV",{style:!0,"data-svelte-h":!0}),K(t)!=="svelte-m1e10n"&&(t.innerHTML=n),o=V(a);for(let e=0;e<i.length;e+=1)i[e].l(a);c=w(),this.h()},h(){j(t,"display","flex"),j(t,"justify-content","center")},m(a,e){p(a,t,e),p(a,o,e);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(a,e);p(a,c,e),u=!0},p(a,[e]){if(e&1){f=E(a[0]);let s;for(s=0;s<f.length;s+=1){const h=C(a,f,s);i[s]?(i[s].p(h,e),_(i[s],1)):(i[s]=D(h),i[s].c(),_(i[s],1),i[s].m(c.parentNode,c))}for(F(),s=f.length;s<i.length;s+=1)r(s);q()}},i(a){if(!u){for(let e=0;e<f.length;e+=1)_(i[e]);u=!0}},o(a){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)v(i[e]);u=!1},d(a){a&&(d(t),d(o),d(c)),z(i,a)}}}function rt(l,t,n){let o=[];return G(async()=>{const c=await fetch(`${Y}/sounds.json`);n(0,o=await c.json())}),[o]}class pt extends M{constructor(t){super(),T(this,t,rt,at,H,{})}}export{pt as component};
