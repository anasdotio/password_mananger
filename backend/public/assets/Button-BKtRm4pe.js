import{R as l,j as e}from"./index-BSYGu6-p.js";import{a as i,c as x}from"./createLucideIcon-Buootqrp.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],f=i("eye-off",y);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],j=i("eye",b),w=({label:o,name:t,type:s="text",placeHolder:r,className:c="",error:a,...p},u)=>{const[d,h]=l.useState(!1),n=s==="password";return e.jsxs("div",{className:"flex flex-col gap-1",children:[o&&e.jsx("label",{className:"text-[#808793]",htmlFor:t,children:o}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:n&&d?"text":s,name:t,id:t,ref:u,placeholder:r,className:x("w-full rounded-md border border-[#323C4C] px-4 py-2 placeholder:text-[#9CA3AF]",c,a&&"border-red-500"),...p}),n&&e.jsx("button",{className:"absolute inset-y-0 right-2 flex items-center text-gray-500",type:"button",onClick:()=>h(m=>!m),children:d?e.jsx(f,{}):e.jsx(j,{})}),a&&e.jsx("p",{className:"text-sm text-red-500",children:a})]})]})},v=l.forwardRef(w),C=({text:o,className:t,type:s="button",icon:r,isLoading:c,onclick:a})=>e.jsxs("button",{onClick:a,disabled:s==="submit"&&c,type:s,className:x("flex cursor-pointer items-center justify-center rounded-md border border-neutral-500 py-2 text-white hover:opacity-80 disabled:cursor-none disabled:opacity-50",t),children:[r&&e.jsx("span",{className:"mr-2",children:r}),o]});export{C as B,v as I};
