import{s as H,f as $,i as G,n as I,o as J}from"../chunks/scheduler.56f0b95c.js";import{S as M,i as T,g as S,m as g,h as x,j as B,n as b,f as p,k as O,a as d,x as y,o as L,s as V,e as w,y as K,c as q,l as j,d as _,b as z,t as v,z as F,p as R,r as Q,u as U,v as W,w as X}from"../chunks/index.ac73e6f9.js";import{b as Y}from"../chunks/paths.564abdeb.js";import{_ as Z}from"../chunks/preload-helper.a4192956.js";function E(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}var k=Object.defineProperty,tt=(l,t,n)=>t in l?k(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,m=(l,t,n)=>(tt(l,typeof t!="symbol"?t+"":t,n),n);let et=class{constructor(t,n={}){m(this,"src"),m(this,"options"),m(this,"howl"),this.src=t,this.options=n,this.create()}async create(){const{Howl:t}=await Z(()=>import("../chunks/howler.core-e669a980.4e0b937d.js"),[],import.meta.url).then(u=>u.h),{loop:n,volume:o}=this.options,r=new t({src:this.src,loop:n||!1,volume:o||1,...this.options});this.howl=r}update(t=this.options){this.unload(),this.options=t,this.create()}destroy(){this.stop(),this.unload()}play(){this.howl.play()}stop(){this.howl.stop()}unload(){this.howl.unload()}};class st extends et{constructor(t,{src:n,events:o,...r}){super(n,r),m(this,"node"),m(this,"events"),this.node=t,this.events=o,this.attachControls()}attachControls(){const[t,n]=this.events;this.node.play=this.play.bind(this),this.node.stop=this.stop.bind(this),this.node.addEventListener(t,this.play.bind(this)),this.node.addEventListener(n,this.stop.bind(this))}removeEventListeners(){const[t,n]=this.events;this.node.removeEventListener(t,this.play.bind(this)),this.node.removeEventListener(n,this.stop.bind(this))}update(t){this.removeEventListeners(),super.update(t),this.attachControls()}destroy(){this.removeEventListeners(),super.destroy()}}function nt(l,t){return new st(l,t)}function ot(l){let t,n=l[1]+1+"",o,r,u=l[0].replace(/-/g," ")+"",f,i,c,a;return{c(){t=S("span"),o=g(n),r=g(". "),f=g(u),this.h()},l(e){t=x(e,"SPAN",{class:!0});var s=B(t);o=b(s,n),r=b(s,". "),f=b(s,u),s.forEach(p),this.h()},h(){O(t,"class","svelte-ecjbal")},m(e,s){d(e,t,s),y(t,o),y(t,r),y(t,f),c||(a=$(i=nt.call(null,t,{src:l[2],events:["click"]})),c=!0)},p(e,[s]){s&2&&n!==(n=e[1]+1+"")&&L(o,n),s&1&&u!==(u=e[0].replace(/-/g," ")+"")&&L(f,u),i&&G(i.update)&&s&4&&i.update.call(null,{src:e[2],events:["click"]})},i:I,o:I,d(e){e&&p(t),c=!1,a()}}}function lt(l,t,n){let{title:o}=t,{soundIndex:r}=t,{src:u}=t;return l.$$set=f=>{"title"in f&&n(0,o=f.title),"soundIndex"in f&&n(1,r=f.soundIndex),"src"in f&&n(2,u=f.src)},[o,r,u]}class it extends M{constructor(t){super(),T(this,t,lt,ot,H,{title:0,soundIndex:1,src:2})}}function C(l,t,n){const o=l.slice();return o[1]=t[n].category,o[2]=t[n].files,o}function N(l,t,n){const o=l.slice();return o[5]=t[n].title,o[6]=t[n].src,o[8]=n,o}function A(l){let t,n;return t=new it({props:{title:l[5],src:l[6],soundIndex:l[8]}}),{c(){Q(t.$$.fragment)},l(o){U(t.$$.fragment,o)},m(o,r){W(t,o,r),n=!0},p(o,r){const u={};r&1&&(u.title=o[5]),r&1&&(u.src=o[6]),t.$set(u)},i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){v(t.$$.fragment,o),n=!1},d(o){X(t,o)}}}function D(l){let t,n=l[1]+"",o,r,u,f,i=E(l[2]),c=[];for(let e=0;e<i.length;e+=1)c[e]=A(N(l,i,e));const a=e=>v(c[e],1,1,()=>{c[e]=null});return{c(){t=S("span"),o=g(n),r=V();for(let e=0;e<c.length;e+=1)c[e].c();u=w(),this.h()},l(e){t=x(e,"SPAN",{class:!0});var s=B(t);o=b(s,n),s.forEach(p),r=q(e);for(let h=0;h<c.length;h+=1)c[h].l(e);u=w(),this.h()},h(){O(t,"class","svelte-90wpxp")},m(e,s){d(e,t,s),y(t,o),d(e,r,s);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,s);d(e,u,s),f=!0},p(e,s){if((!f||s&1)&&n!==(n=e[1]+"")&&L(o,n),s&1){i=E(e[2]);let h;for(h=0;h<i.length;h+=1){const P=N(e,i,h);c[h]?(c[h].p(P,s),_(c[h],1)):(c[h]=A(P),c[h].c(),_(c[h],1),c[h].m(u.parentNode,u))}for(R(),h=i.length;h<c.length;h+=1)a(h);z()}},i(e){if(!f){for(let s=0;s<i.length;s+=1)_(c[s]);f=!0}},o(e){c=c.filter(Boolean);for(let s=0;s<c.length;s+=1)v(c[s]);f=!1},d(e){e&&(p(t),p(r),p(u)),F(c,e)}}}function at(l){let t,n='<img src="pops.png" style="width: 100%; height: auto; object-fit: contain;" alt="pops face"/>',o,r,u,f=E(l[0]),i=[];for(let a=0;a<f.length;a+=1)i[a]=D(C(l,f,a));const c=a=>v(i[a],1,1,()=>{i[a]=null});return{c(){t=S("div"),t.innerHTML=n,o=V();for(let a=0;a<i.length;a+=1)i[a].c();r=w(),this.h()},l(a){t=x(a,"DIV",{style:!0,"data-svelte-h":!0}),K(t)!=="svelte-m1e10n"&&(t.innerHTML=n),o=q(a);for(let e=0;e<i.length;e+=1)i[e].l(a);r=w(),this.h()},h(){j(t,"display","flex"),j(t,"justify-content","center")},m(a,e){d(a,t,e),d(a,o,e);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(a,e);d(a,r,e),u=!0},p(a,[e]){if(e&1){f=E(a[0]);let s;for(s=0;s<f.length;s+=1){const h=C(a,f,s);i[s]?(i[s].p(h,e),_(i[s],1)):(i[s]=D(h),i[s].c(),_(i[s],1),i[s].m(r.parentNode,r))}for(R(),s=f.length;s<i.length;s+=1)c(s);z()}},i(a){if(!u){for(let e=0;e<f.length;e+=1)_(i[e]);u=!0}},o(a){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)v(i[e]);u=!1},d(a){a&&(p(t),p(o),p(r)),F(i,a)}}}function ct(l,t,n){let o=[];return J(async()=>{const r=await fetch(`${Y}/sounds.json`);n(0,o=await r.json())}),[o]}class dt extends M{constructor(t){super(),T(this,t,ct,at,H,{})}}export{dt as component};
