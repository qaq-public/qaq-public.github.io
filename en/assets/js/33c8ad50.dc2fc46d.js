"use strict";(self.webpackChunkqaq_public_github_io=self.webpackChunkqaq_public_github_io||[]).push([[15],{70224:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(22374);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21952:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(22374),i=n(48290),o=n(22772),c=n(18954),a=n(30688),l=n(47715);const s={cardContainer:"cardContainer_VgRl",cardTitle:"cardTitle_G30Q",cardDescription:"cardDescription_O3Dr"};function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},n)}function u(e){let{href:t,icon:n,title:o,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:c},c))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const c=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},19025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(66004),i=(n(22374),n(70224)),o=n(21952);const c={},a=void 0,l={unversionedId:"knowledge/\u81ea\u7814\u6807\u51c6/edition/index",id:"knowledge/\u81ea\u7814\u6807\u51c6/edition/index",title:"index",description:"",source:"@site/docs/knowledge/\u81ea\u7814\u6807\u51c6/edition/index.md",sourceDirName:"knowledge/\u81ea\u7814\u6807\u51c6/edition",slug:"/knowledge/\u81ea\u7814\u6807\u51c6/edition/",permalink:"/en/docs/knowledge/\u81ea\u7814\u6807\u51c6/edition/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"knowledge",previous:{title:"index",permalink:"/en/docs/knowledge/\u81ea\u7814\u6807\u51c6/"},next:{title:"\u5ba2\u6237\u7aef\u529f\u80fd\u6807\u51c6",permalink:"/en/docs/knowledge/\u81ea\u7814\u6807\u51c6/edition/\u5ba2\u6237\u7aef\u529f\u80fd\u6807\u51c6"}},s={},d=[],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);