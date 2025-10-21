const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PasswordItem-COws_NAW.js","assets/index-BqcomT8l.js","assets/index-COpd0qPF.css","assets/createLucideIcon-DKkEAZFZ.js"])))=>i.map(i=>d[i]);
import{j as s,u as d,b as t,g as l,_ as n}from"./index-BqcomT8l.js";import{H as i}from"./Header-D4GvWpUr.js";import{a as c}from"./createLucideIcon-DKkEAZFZ.js";import{a as p,u as x,L as h}from"./hooks-BSjv5jQy.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],u=c("plus",m);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],w=c("search",j),y=()=>s.jsx("div",{className:"",children:s.jsxs("div",{className:"flex items-center rounded-lg bg-[#1E293B] px-3 py-2 text-gray-400",children:[s.jsx(w,{className:"mr-2 h-4 w-4"}),s.jsx("input",{type:"text",placeholder:"Search Passwords",className:"w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none"})]})}),N=t.lazy(()=>n(()=>import("./PasswordItem-COws_NAW.js"),__vite__mapDeps([0,1,2,3]))),P=()=>{const{passwords:a}=p(e=>e.passwords),o=d(),r=x();return t.useEffect(()=>{r(l())},[r]),console.log(a),s.jsxs("div",{className:"p-4",children:[s.jsx(i,{onclick:()=>o("/add-password"),className:"justify-end space-x-40",title:"Passwords",icon:s.jsx(u,{className:"h-5 w-5 text-white"})}),s.jsx(y,{}),s.jsx(t.Suspense,{fallback:s.jsx("div",{children:s.jsx(h,{className:"- absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin text-white"})}),children:s.jsx("div",{className:"mt-4 space-y-2",children:a.length===0?s.jsx("p",{className:"mt-20 text-center text-gray-400",children:"No passwords found. Click the + icon to add a new password."}):a?.map(e=>s.jsx(N,{id:e?._id,title:e?.username,updated:e.updatedAt?.split("T")[0]},e?._id))})})]})};export{P as default};
