"use strict";(self.webpackChunkqaq_public_github_io=self.webpackChunkqaq_public_github_io||[]).push([[5408],{70224:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(22374);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),m=c,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:c,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21952:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(22374),c=r(48290),i=r(22772),o=r(18954),a=r(30688),l=r(47715);const s={cardContainer:"cardContainer_VgRl",cardTitle:"cardTitle_G30Q",cardDescription:"cardDescription_O3Dr"};function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},7275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(66004),c=(r(22374),r(70224)),i=r(21952);const o={},a=void 0,l={unversionedId:"help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a/index",id:"help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a/index",title:"index",description:"",source:"@site/docs/help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a/index.md",sourceDirName:"help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a",slug:"/help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a/",permalink:"/docs/help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"help",previous:{title:"\u4e1c\u5357\u4e9a\u91cd\u88c5\u6218\u59ec\u673a\u578b\u5206\u6790",permalink:"/docs/help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u4e1c\u5357\u4e9a\u5730\u533a/\u4e1c\u5357\u4e9aIOS/\u4e1c\u5357\u4e9a\u91cd\u88c5\u6218\u59ec\u673a\u578b\u5206\u6790"},next:{title:"index",permalink:"/docs/help/services/client/perfdragon/\u5730\u533a\u8bbe\u5907\u6570\u636e\u5206\u6790/\u5317\u7f8e\u5730\u533a/\u5317\u7f8eAndroid/"}},s={},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,c.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);