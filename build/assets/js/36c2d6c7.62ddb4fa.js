"use strict";(self.webpackChunkqaq_public_github_io=self.webpackChunkqaq_public_github_io||[]).push([[7273],{70224:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(22374);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=c,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:c,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21952:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(22374),c=r(48290),a=r(22772),i=r(18954),o=r(30688),s=r(47715);const l={cardContainer:"cardContainer_VgRl",cardTitle:"cardTitle_G30Q",cardDescription:"cardDescription_O3Dr"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},15013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(66004),c=(r(22374),r(70224)),a=r(21952);const i={},o=void 0,s={unversionedId:"help/services/basic/packageManage/instruction/index",id:"help/services/basic/packageManage/instruction/index",title:"index",description:"",source:"@site/docs/help/services/basic/packageManage/instruction/index.md",sourceDirName:"help/services/basic/packageManage/instruction",slug:"/help/services/basic/packageManage/instruction/",permalink:"/docs/help/services/basic/packageManage/instruction/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"help",previous:{title:"\u5e73\u53f0\u7b80\u4ecb",permalink:"/docs/help/services/basic/packageManage/\u5e73\u53f0\u7b80\u4ecb"},next:{title:"\u5305\u4f53\u7ba1\u7406",permalink:"/docs/help/services/basic/packageManage/instruction/\u5305\u4f53\u7ba1\u7406"}},l={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);