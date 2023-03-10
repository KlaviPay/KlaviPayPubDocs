"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,p(p({ref:t},l),{},{components:r})):a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"List participants",sidebar_label:"List participants",sidebar_position:1},p=void 0,o={unversionedId:"api-reference/product/participants/participant",id:"api-reference/product/participants/participant",title:"List participants",description:"Use this endpoint to get participants for your end-user.",source:"@site/docs/api-reference/product/participants/participant.md",sourceDirName:"api-reference/product/participants",slug:"/api-reference/product/participants/participant",permalink:"/pt/docs/api-reference/product/participants/participant",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"List participants",sidebar_label:"List participants",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Authenticate initiation",permalink:"/pt/docs/api-reference/product/auth/authentication"},next:{title:"List payments initiations",permalink:"/pt/docs/api-reference/product/payments/list-payments"}},s={},c=[{value:"Request",id:"request",level:2},{value:"Request method",id:"request-method",level:3},{value:"Request Header",id:"request-header",level:3},{value:"Request Path Parameters",id:"request-path-parameters",level:3},{value:"Request Body parameters",id:"request-body-parameters",level:3},{value:"Response",id:"response",level:2},{value:"Code: 200",id:"code-200",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this endpoint to get participants for your end-user."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"cURL command example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.sandbox.klavipay.ai/product/v1/participants' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsbLWdhdGV3YXkifQ.2dvWMBcU87IeX4J7S1_bx1uKHsXAvSDaK0RdV9xq3-OSrLA'\n")),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("h3",{id:"request-method"},"Request method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET https://api.sandbox.klavipay.ai/product/v1/participants\n")),(0,n.kt)("h3",{id:"request-header"},"Request Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Condition"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Authorization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"JWT bearer token obtained through ",(0,n.kt)("inlineCode",{parentName:"td"},"/auth"),' endpoint, When passing, add "Bearer " before the token')))),(0,n.kt)("h3",{id:"request-path-parameters"},"Request Path Parameters"),(0,n.kt)("p",null,"None."),(0,n.kt)("h3",{id:"request-body-parameters"},"Request Body parameters"),(0,n.kt)("p",null,"None."),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("h3",{id:"code-200"},"Code: 200"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "message": "OK",\n    "data":\n    [\n        {\n            "id": "c8f0bf49-4744-4933-8960-7add6e590841",\n            "name": "Mock Bank",\n            "slug": "mock-bank",\n            "avatar": "https://cdn.raidiam.io/directory-ui/brand/obbrazil/0.2.0.112/favicon.svg"\n        },\n        {\n            "id": "b566e001-f5a3-4e84-9b46-ea3bcaf440b4",\n            "name": "U4C Tests",\n            "slug": "u4c-tests",\n            "avatar": "http://static.u4c-iniciador.com.br/logo.svg"\n        },\n        {\n            "id": "853f1031-5ddc-4a70-abae-026acbde37f5",\n            "name": "Iniciador - Mock DEV",\n            "slug": "iniciador-mock-dev",\n            "avatar": "https://iniciador.com.br/static/images/logo.svg"\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);