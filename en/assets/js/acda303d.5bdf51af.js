"use strict";(self.webpackChunkqaq_public_github_io=self.webpackChunkqaq_public_github_io||[]).push([[3092],{70224:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(22374);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||c;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21952:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(22374),i=r(48290),c=r(22772),o=r(18954),a=r(30688),s=r(47715);const l={cardContainer:"cardContainer_VgRl",cardTitle:"cardTitle_G30Q",cardDescription:"cardDescription_O3Dr"};function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:c},r," ",c),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},23742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(66004),i=(r(22374),r(70224)),c=r(21952);const o={sidebar_position:3},a="\u5e38\u89c1\u95ee\u9898",s={unversionedId:"help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898/index",id:"help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898/index",title:"\u5e38\u89c1\u95ee\u9898",description:"",source:"@site/docs/help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898/index.md",sourceDirName:"help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898",slug:"/help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898/",permalink:"/en/docs/help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"help",previous:{title:"\u529f\u80fd\u6548\u679c\u5c55\u793a",permalink:"/en/docs/help/services/basic/gitwebhooks/\u529f\u80fd\u6548\u679c\u5c55\u793a"},next:{title:"TAPD API\u6743\u9650\u7533\u8bf7",permalink:"/en/docs/help/services/basic/gitwebhooks/\u5e38\u89c1\u95ee\u9898/TAPD API\u6743\u9650\u7533\u8bf7"}},l={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);