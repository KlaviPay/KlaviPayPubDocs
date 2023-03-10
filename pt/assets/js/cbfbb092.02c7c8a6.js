"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Get user information by PIX key",sidebar_label:"Get user information by PIX key",sidebar_position:1},o=void 0,p={unversionedId:"api-reference/product/pix/pix-key",id:"api-reference/product/pix/pix-key",title:"Get user information by PIX key",description:"Get user information by PIX key",source:"@site/docs/api-reference/product/pix/pix-key.md",sourceDirName:"api-reference/product/pix",slug:"/api-reference/product/pix/pix-key",permalink:"/pt/docs/api-reference/product/pix/pix-key",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get user information by PIX key",sidebar_label:"Get user information by PIX key",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Cancel the payment initiation",permalink:"/pt/docs/api-reference/product/payments/cancel-payment"},next:{title:"Coming soon",permalink:"/pt/docs/api-reference/management/comingsoon"}},l={},s=[{value:"Request",id:"request",level:2},{value:"Request method",id:"request-method",level:3},{value:"Request Header",id:"request-header",level:3},{value:"Request Path Parameters",id:"request-path-parameters",level:3},{value:"Request Body parameters",id:"request-body-parameters",level:3},{value:"Response",id:"response",level:2},{value:"Code: 200",id:"code-200",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get user information by PIX key"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"cURL command example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -X GET 'https://api.sandbox.klavipay.ai/product/v1/pix-key/fcb72e3a-b346-4f71-b044-971dc23232c9' \\\n-H 'Accept: application/json' \\\n-H 'Authorization: Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsbLWdhdGV3YXkifQ.2dvWMBcU87IeX4J7S1_bx1uKHsXAvSDaK0RdV9xq3-OSrLA' \n")),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("h3",{id:"request-method"},"Request method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST https://api.sandbox.klavipay.ai/product/v1/pix-key/{key}\n")),(0,a.kt)("h3",{id:"request-header"},"Request Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Condition"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Authorization"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"JWT bearer token obtained through ",(0,a.kt)("inlineCode",{parentName:"td"},"/auth"),' endpoint, When passing, add "Bearer " before the token')))),(0,a.kt)("h3",{id:"request-path-parameters"},"Request Path Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Condition"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"key"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"request-body-parameters"},"Request Body parameters"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"code-200"},"Code: 200"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "message": "OK",\n    "data": {\n        "taxId": "175.***.***-39",\n        "name": "ADRIANA DIAS BRANCO BRADESCO"\n    }\n}\n')))}c.isMDXComponent=!0}}]);