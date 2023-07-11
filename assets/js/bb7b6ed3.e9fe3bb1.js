"use strict";(self.webpackChunkqaq_public_github_io=self.webpackChunkqaq_public_github_io||[]).push([[5372],{70224:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(22374);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21952:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(22374),i=r(48290),c=r(22772),a=r(18954),o=r(30688),s=r(47715);const l={cardContainer:"cardContainer_VgRl",cardTitle:"cardTitle_G30Q",cardDescription:"cardDescription_O3Dr"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},25281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(66004),i=(r(22374),r(70224)),c=r(21952);const a={},o=void 0,s={unversionedId:"help/services/basic/quality-dashboard/index",id:"help/services/basic/quality-dashboard/index",title:"index",description:"",source:"@site/docs/help/services/basic/quality-dashboard/index.md",sourceDirName:"help/services/basic/quality-dashboard",slug:"/help/services/basic/quality-dashboard/",permalink:"/docs/help/services/basic/quality-dashboard/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"help",previous:{title:"\u5e73\u53f0\u7b80\u4ecb",permalink:"/docs/help/services/basic/static/\u5e73\u53f0\u7b80\u4ecb"},next:{title:"\u5e2e\u52a9\u4e2d\u5fc3",permalink:"/docs/help/services/basic/quality-dashboard/\u5e2e\u52a9\u4e2d\u5fc3"}},l={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);