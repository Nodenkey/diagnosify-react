(this["webpackJsonpdiagnosify-react"]=this["webpackJsonpdiagnosify-react"]||[]).push([[0],{28:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h})),t.d(n,"j",(function(){return O})),t.d(n,"i",(function(){return E})),t.d(n,"h",(function(){return m})),t.d(n,"g",(function(){return j})),t.d(n,"d",(function(){return y})),t.d(n,"f",(function(){return v})),t.d(n,"c",(function(){return S})),t.d(n,"e",(function(){return U}));var r=t(24),i=t.n(r),a=(t(62),t(64),i.a.initializeApp({apiKey:"AIzaSyCs5b_8kkR5A99v-SFBcvTyPBy9XJn7ApU",authDomain:"diagnosify-web.firebaseapp.com",databaseURL:"https://diagnosify-web.firebaseio.com",projectId:"diagnosify-web",storageBucket:"diagnosify-web.appspot.com",messagingSenderId:"826476830900",appId:"1:826476830900:web:d95a95a1366125f7d2b7e1",measurementId:"G-6KX7SFRFFZ"})),c=(a.firestore(),new i.a.auth.GoogleAuthProvider);c.setCustomParameters({prompt:"select_account"});var u=t(3),o=function(){return{type:u.e}},s=function(e){return{type:u.f,user:e}},f=function(e){return{type:u.d,error:e}},g=function(){return{type:u.i}},l=function(){return{type:u.l}},d=function(e){return{type:u.m,user:e}},p=function(e){return{type:u.k,error:e}},b=function(e,n){return function(t){t(o()),a.auth().signInWithEmailAndPassword(e,n).then((function(e){t(s(e))})).catch((function(e){console.log(e),t(f(e))}))}},h=function(){return function(e){e({type:u.h}),a.auth().signOut().then((function(){e(g())})).catch((function(n){e(function(e){return{type:u.g,error:e}}(n))}))}},O=function(){return function(e){e({type:u.o}),a.auth().onAuthStateChanged((function(n){null!==n&&e(s(n)),e({type:u.p})}))}},E=function(e,n){return function(t){t(l()),a.auth().createUserWithEmailAndPassword(e,n).then((function(e){t(d(e)),t(s(e))})).catch((function(e){t(p(e))}))}},m=function(e){return function(n){"signup"===e?(n(l()),a.auth().signInWithPopup(c).then((function(e){n(d(e))})).catch((function(e){n(p(e))}))):(n(o()),a.auth().signInWithPopup(c).then((function(e){n(g())})).catch((function(e){n(f(e))})))}},j=function(e){e({type:u.n})},y=function(e){e({type:u.b})},v=function(e){e({type:u.j})},S=function(e){e({type:u.a})},U=function(e){e({type:u.c})}},3:function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"f",(function(){return i})),t.d(n,"d",(function(){return a})),t.d(n,"h",(function(){return c})),t.d(n,"i",(function(){return u})),t.d(n,"g",(function(){return o})),t.d(n,"o",(function(){return s})),t.d(n,"p",(function(){return f})),t.d(n,"l",(function(){return g})),t.d(n,"m",(function(){return l})),t.d(n,"k",(function(){return d})),t.d(n,"n",(function(){return p})),t.d(n,"b",(function(){return b})),t.d(n,"j",(function(){return h})),t.d(n,"a",(function(){return O})),t.d(n,"c",(function(){return E}));var r="LOGIN_REQUEST",i="LOGIN_SUCCESS",a="LOGIN_FAILURE",c="LOGOUT_REQUEST",u="LOGOUT_SUCCESS",o="LOGOUT_FAILURE",s="VERIFY_REQUEST",f="VERIFY_SUCCESS",g="SIGN_UP_REQUEST",l="SIGN_UP_SUCCESS",d="SIGN_UP_FAILURE",p="TAKE_SCAN",b="DOCTOR",h="SCAN_HISTORY",O="DISEASE_BOOK",E="FEEDBACK"},49:function(e,n,t){e.exports=t(71)},54:function(e,n,t){},68:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(20),c=t.n(a),u=(t(54),t(17)),o=t(13),s=t(34),f=t(28),g=t(4),l=t(3),d={isLoggingIn:!1,isLoggingOut:!1,isVerifying:!1,loginError:!1,logoutError:!1,isAuthenticated:!1,user:{},loginErrorMessage:"",isSigningUp:!1,signUpError:!1,signedUp:!1,signUpErrorMessage:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l.e:return Object(g.a)(Object(g.a)({},e),{},{isLoggingIn:!0,loginError:!1});case l.f:return Object(g.a)(Object(g.a)({},e),{},{isLoggingIn:!1,isAuthenticated:!0,user:n.user});case l.d:return Object(g.a)(Object(g.a)({},e),{},{isLoggingIn:!1,isAuthenticated:!1,loginError:!0,loginErrorMessage:n.error.message});case l.h:return Object(g.a)(Object(g.a)({},e),{},{isLoggingOut:!0,logoutError:!1,signUpErrorMessage:"",loginErrorMessage:""});case l.i:return Object(g.a)(Object(g.a)({},e),{},{isLoggingOut:!1,isAuthenticated:!1,user:{},signUpErrorMessage:"",loginErrorMessage:""});case l.g:return Object(g.a)(Object(g.a)({},e),{},{isLoggingOut:!1,logoutError:!0});case l.o:return Object(g.a)(Object(g.a)({},e),{},{isVerifying:!0,verifyingError:!1});case l.p:return Object(g.a)(Object(g.a)({},e),{},{isVerifying:!1});case l.l:return Object(g.a)(Object(g.a)({},e),{},{isSigningUp:!0,signedUp:!1});case l.m:return Object(g.a)(Object(g.a)({},e),{},{isSigningUp:!1,signUpError:!1,signedUp:!0});case l.k:return Object(g.a)(Object(g.a)({},e),{},{isSigningUp:!1,signedUp:!1,signUpError:!0,signUpErrorMessage:n.error.message});default:return e}},b={screen:"take-scan"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(g.a)({},b),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l.n:return Object(g.a)(Object(g.a)({},e),{},{screen:"take-scan"});case l.b:return Object(g.a)(Object(g.a)({},e),{},{screen:"my-doctor"});case l.j:return Object(g.a)(Object(g.a)({},e),{},{screen:"scan-history"});case l.a:return Object(g.a)(Object(g.a)({},e),{},{screen:"disease-book"});case l.c:return Object(g.a)(Object(g.a)({},e),{},{screen:"feedback"});default:return e}},O=Object(o.c)({auth:p,dashboard:h});t(68);var E=t(38),m=t(6),j=function(e){var n=e.component,t=e.isAuthenticated,r=e.isVerifying,a=Object(E.a)(e,["component","isAuthenticated","isVerifying"]);return i.a.createElement(m.b,Object.assign({},a,{render:function(e){return r?i.a.createElement("div",null):t?i.a.createElement(n,e):i.a.createElement(m.a,{to:{pathname:"/welcome",state:{from:e.location}}})}}))};function y(){var e=Object(m.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var v=t(18),S=t(19);function U(){var e=Object(v.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 15px;\n  background-color: var(--dark-blue);\n"]);return U=function(){return e},e}function A(){var e=Object(v.a)(["\n  display: flex;\n"]);return A=function(){return e},e}function I(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return I=function(){return e},e}var w=S.a.main(I()),_=S.a.div(A()),L=S.a.div(U()),k=t(39),C=t(1),R=function(){return Object(r.useEffect)((function(){var e=document.querySelector("#loader");k.a.from(e.children,{duration:.5,yoyo:!0,repeat:-1,repeatDelay:1,opacity:0,y:-20,ease:C.b.easeOut,stagger:.15})})),i.a.createElement(w,null,i.a.createElement(_,{id:"loader"},i.a.createElement(L,null),i.a.createElement(L,null),i.a.createElement(L,null),i.a.createElement(L,null),i.a.createElement(L,null),i.a.createElement(L,{style:{marginRight:0}})))},T=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,93))})),F=Object(r.lazy)((function(){return t.e(5).then(t.bind(null,92))})),G=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,91))}));var V=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isVerifying:e.auth.isVerifying}}))((function(e){var n=e.isAuthenticated,t=e.isVerifying;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Suspense,{fallback:i.a.createElement(R,null)},i.a.createElement(y,null),i.a.createElement(m.d,null,i.a.createElement(m.b,{path:"/",exact:!0,component:T}),i.a.createElement(m.b,{path:"/welcome",component:F}),i.a.createElement(j,{path:"/dashboard",component:G,isAuthenticated:n,isVerifying:t}))))})),P=t(15);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){var n=Object(o.d)(O,e,Object(o.a)(s.a));return n.dispatch(Object(f.j)()),n}();c.a.render(i.a.createElement(u.a,{store:M},i.a.createElement(P.a,null,i.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.d9e7ba50.chunk.js.map