import{j as s,u as c}from"./index-C3_nH0oS.js";import{H as o}from"./Header-zABLtTNc.js";import{a as r}from"./createLucideIcon-UTzAI0De.js";import{a as l}from"./hooks-Bkuf_CW6.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],i=r("key",n);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],x=r("plus",p);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],h=r("search",m),u=()=>s.jsx("div",{className:"",children:s.jsxs("div",{className:"flex items-center rounded-lg bg-[#1E293B] px-3 py-2 text-gray-400",children:[s.jsx(h,{className:"mr-2 h-4 w-4"}),s.jsx("input",{type:"text",placeholder:"Search Passwords",className:"w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none"})]})}),j=({title:t,updated:a})=>{const e=c();return s.jsxs("div",{onClick:()=>e("/password-details"),className:"flex cursor-pointer items-center rounded-lg bg-[#1E293B] p-3",children:[s.jsx("div",{className:"mr-3 rounded-xl bg-[#0F172A] p-3",children:s.jsx(i,{className:"h-5 w-5 text-blue-400"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-medium text-white",children:t}),s.jsxs("p",{className:"text-sm text-gray-400",children:["Last updated ",a]})]})]})},f=()=>{const t=c(),{passwords:a}=l(e=>e.passwords);return s.jsxs("div",{className:"p-4",children:[s.jsx(o,{onclick:()=>t("/add-password"),className:"justify-end space-x-40",title:"Passwords",icon:s.jsx(x,{className:"h-5 w-5 text-white"})}),s.jsx(u,{}),s.jsx("div",{className:"mt-4 space-y-2",children:a.length===0?s.jsx("p",{className:"mt-20 text-center text-gray-400",children:"No passwords found. Click the + icon to add a new password."}):a?.map((e,d)=>s.jsx(j,{title:e.title,updated:e.updated},d))})]})};export{f as default};
