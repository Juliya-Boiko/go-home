(function(){"use strict";var e={8290:function(e,t,n){n.d(t,{AU:function(){return m},I4:function(){return u},MC:function(){return i},TX:function(){return f},a$:function(){return d},fS:function(){return p},pH:function(){return l},wc:function(){return c}});var o=n(5939),r=n(3703);const a="https://apartments-api.onrender.com";o.Z.defaults.baseURL=a;const s={set(e){o.Z.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){o.Z.defaults.headers.common.Authorization=""}},i=async()=>{const e=await o.Z.get("/cities").then((e=>e.data));return e},c=async()=>{const e=await o.Z.get("/apartments").then((e=>e.data));return e},u=async e=>{const t=await o.Z.get(`/apartments/${e}`).then((e=>e.data));return t},d=async e=>{const{data:t}=await o.Z.post("/auth/register",e);return s.set(t.token),t},l=async e=>{const{data:t}=await o.Z.post("/auth/login",e);return s.set(t.token),t},f=async()=>{const e=(0,r.cF)("user").token;s.set(e),await o.Z.post("/auth/logout"),s.unset()},m=async()=>{const e=(0,r.cF)("user").token;s.set(e);const t=await o.Z.get("/orders").then((e=>e.data));return t?t.items:[]},p=async e=>{const t=(0,r.cF)("user").token;return s.set(t),await o.Z.post("/orders",{apartmentId:e}).then((e=>e.data)),!0}},3703:function(e,t,n){n.d(t,{B$:function(){return a},Ot:function(){return o},cF:function(){return r}});const o=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},r=e=>{const t=JSON.parse(localStorage.getItem(e));return t||{user:{name:"",token:"",userId:""}}},a=e=>{localStorage.setItem(e,JSON.stringify({name:"",token:"",userId:""}))}},9425:function(e,t,n){var o=n(9242),r=n(3396);const a={class:"content"};function s(e,t,n,o,s,i){const c=(0,r.up)("NotificationSet"),u=(0,r.up)("HeaderContainer"),d=(0,r.up)("router-view"),l=(0,r.up)("FooterContainer");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(c),(0,r.Wm)(u),(0,r.Wm)(d),(0,r.Wm)(l)])}const i={class:"header"},c={class:"header__content"};function u(e,t,n,o,a,s){const u=(0,r.up)("LogoIcon"),d=(0,r.up)("router-link"),l=(0,r.up)("UserActions"),f=(0,r.up)("AuthActions"),m=(0,r.up)("MainContainer");return(0,r.wg)(),(0,r.iD)("header",i,[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r.Wm)(d,{to:{name:"homepage"}},{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1}),e.isLoggedIn?((0,r.wg)(),(0,r.j4)(l,{key:0})):((0,r.wg)(),(0,r.j4)(f,{key:1}))])])),_:1})])}var d=n(5529),l=n.p+"img/logo.58687a0a.svg";const f={src:l,alt:"Logo"};function m(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("img",f)}var p={name:"LogoIcon"},g=n(89);const h=(0,g.Z)(p,[["render",m]]);var v=h;const b={class:"auth-actions"};function _(e,t,n,o,a,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r.Wm)(i,{to:{name:"login"},class:"auth-actions__link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1}),(0,r.Uk)(" / "),(0,r.Wm)(i,{to:{name:"register"},class:"auth-actions__link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Register")])),_:1})])}var y={name:"AuthActions"};const k=(0,g.Z)(y,[["render",_],["__scopeId","data-v-0d8965e2"]]);var w=k,A=n.p+"img/user.de1daf6a.svg";const I=e=>((0,r.dD)("data-v-64661332"),e=e(),(0,r.Cn)(),e),O=I((()=>(0,r._)("img",{src:A,alt:"",class:"user-actions__icon"},null,-1))),C=I((()=>(0,r._)("span",{class:""},"Profile",-1))),Z=[O,C],S={class:"user-actions__list"},L={class:"user-actions__item"},N={class:"user-actions__item"};function F(e,t,n,a,s,i){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",{class:"user-actions",onMouseover:t[2]||(t[2]=(...e)=>i.openActions&&i.openActions(...e)),onMouseleave:t[3]||(t[3]=(...e)=>i.closeActions&&i.closeActions(...e))},[(0,r._)("button",{type:"button",class:"user-actions__btn",onClick:t[0]||(t[0]=(...e)=>i.toggleActions&&i.toggleActions(...e))},Z),(0,r.wy)((0,r._)("ul",S,[(0,r._)("li",L,[(0,r.Wm)(c,{class:"user-actions__link",to:{name:"orders"}},{default:(0,r.w5)((()=>[(0,r.Uk)("My Orders")])),_:1})]),(0,r._)("li",N,[(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>i.handleLogout&&i.handleLogout(...e)),class:"user-actions__logout"}," Logout ")])],512),[[o.F8,s.isActionsOpen]])],32)}var U=n(65),j={name:"UserActions",data(){return{isActionsOpen:!1}},methods:{...(0,U.nv)("auth",["logout"]),openActions(){this.isActionsOpen=!0},closeActions(){this.isActionsOpen=!1},toggleActions(){this.isActionsOpen=!this.isActionsOpen},handleLogout(){try{this.logout(),this.$notify({type:"success",title:"Logout successful"})}catch(e){console.log("error---\x3e",e),this.$notify({type:"error",title:"Error",text:e.message})}}}};const T=(0,g.Z)(j,[["render",F],["__scopeId","data-v-64661332"]]);var E=T,M={name:"HeaderContainer",components:{MainContainer:d.Z,LogoIcon:v,AuthActions:w,UserActions:E},computed:{...(0,U.Se)("auth",["isLoggedIn"])}};const P=(0,g.Z)(M,[["render",u],["__scopeId","data-v-10a8d414"]]);var W=P;const D={class:"footer"};function B(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("footer",D," Boiko ° 2023 ")}var $={name:"FooterContainer"};const x=(0,g.Z)($,[["render",B],["__scopeId","data-v-0803bbcc"]]);var H=x;function q(e,t,n,o,a,s){const i=(0,r.up)("notifications");return(0,r.wg)(),(0,r.j4)(i)}var J={name:"NotificationsSet"};const z=(0,g.Z)(J,[["render",q],["__scopeId","data-v-79bb3a87"]]);var R=z,X={name:"App",components:{HeaderContainer:W,FooterContainer:H,NotificationSet:R}};const K=(0,g.Z)(X,[["render",s],["__scopeId","data-v-12387423"]]);var G=K,Q=n(2483),V=n(8290),Y=n(3703);const ee={userName:(0,Y.cF)("user").name||"",token:(0,Y.cF)("user").token||"",userId:(0,Y.cF)("user").userId||""};var te={namespaced:!0,state:{...ee},getters:{isLoggedIn(e){return Boolean(e.token)}},mutations:{setUserName(e,t){e.userName=t},setToken(e,t){e.token=t},setUserId(e,t){e.userId=t},clearUser(e){e.userName="",e.token="",e.userId=""}},actions:{async login({commit:e},t){const{name:n,token:o,userId:r}=await(0,V.pH)(t);e("setUserName",n),e("setToken",o),e("setUserId",r),(0,Y.Ot)("user",{name:n,token:o,userId:r})},async register({commit:e},t){const{name:n,token:o,userId:r}=await(0,V.a$)(t);e("setUserName",n),e("setToken",o),e("setUserId",r),(0,Y.Ot)("user",{name:n,token:o,userId:r})},async logout({commit:e}){await(0,V.TX)(),(0,Y.B$)("user"),e("clearUser")}}};const ne=new U.ZP.Store({modules:{auth:te}});var oe=ne;const re=()=>n.e(394).then(n.bind(n,3394)),ae=()=>n.e(344).then(n.bind(n,2163)),se=()=>n.e(210).then(n.bind(n,6210)),ie=()=>n.e(477).then(n.bind(n,3477)),ce=()=>n.e(929).then(n.bind(n,7929)),ue=()=>n.e(105).then(n.bind(n,5105)),de=[{path:"/",name:"homepage",component:re},{path:"/login",name:"login",component:se,meta:{hideForAuth:!0}},{path:"/register",name:"register",component:ie,meta:{hideForAuth:!0}},{path:"/apartments/:id",name:"apartments",component:ae},{path:"/orders",name:"orders",component:ce,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"error-page",component:ue}],le=(0,Q.p7)({history:(0,Q.PO)("/go-home/"),routes:de});le.beforeEach(((e,t,n)=>{const o=oe.getters["auth/isLoggedIn"];e.matched.some((e=>e.meta.requiresAuth))&&(o||n({name:"login"})),e.matched.some((e=>e.meta.hideForAuth))&&o&&n({name:"homepage"}),n()}));var fe=le,me=n(1037);const pe=(0,o.ri)(G);pe.use(oe).use(fe).use(me.ZP).mount("#app")},5529:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396);const r={class:"main-container"};function a(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var s={name:"MainContainer"},i=n(89);const c=(0,i.Z)(s,[["render",a],["__scopeId","data-v-8bf67b18"]]);var u=c}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{105:"e91d5a29",210:"b9313b08",344:"8fc51278",394:"300cb5b2",477:"262bb41e",929:"30ecafaa"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{105:"ecf29bd7",210:"e5378ff1",344:"1ac73f3a",394:"5ffa1bd4",477:"1e2f1485",929:"5027dc08"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="go-home:";n.l=function(o,r,a,s){if(e[o])e[o].push(r);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[r];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/go-home/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var s=n.miniCssF(o),i=n.p+s;if(t(s,i))return r();e(o,i,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={105:1,210:1,344:1,394:1,477:1,929:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var d=c(n)}for(t&&t(o);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkgo_home"]=self["webpackChunkgo_home"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9425)}));o=n.O(o)})();
//# sourceMappingURL=app.d11587c9.js.map