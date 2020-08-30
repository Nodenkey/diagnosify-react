(this["webpackJsonpdiagnosify-react"]=this["webpackJsonpdiagnosify-react"]||[]).push([[7],{122:function(e,t,n){e.exports=n.p+"static/media/confident_man.78e3682e.jpg"},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(78),c=n(81),l=n(17),o=n(18);function s(){var e=Object(l.a)(["\n  font-size: 1.6rem;\n  color: black;\n  line-height: 160%;\n  @media only screen and (min-width: 600px){\n  font-size: 4rem;\n  width: 70%;\n  }\n"]);return s=function(){return e},e}function m(){var e=Object(l.a)(["\n  height: 60vh;\n  width: 100vw;\n  padding: 96px 5vw 30px;\n  display: flex;\n  align-items: center;\n  background-color: var(--blue);\n  @media only screen and (min-width: 600px){\n  height: 100vh;\n  }\n"]);return m=function(){return e},e}var u=o.a.section(m()),d=o.a.h1(s()),g=function(){return r.a.createElement(u,null,r.a.createElement(d,null,"Diagnosify leverages Artificial Intelligence technology to provide seamless skin care solutions."))};function f(){var e=Object(l.a)(["\n  color: grey;\n  align-self: baseline;\n  margin-bottom: 0;\n  max-width: 300px;\n  @media only screen and (min-width: 600px){\n    grid-area: sub;\n    margin-top: auto;\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(l.a)(["\n  line-height: 150%;\n  @media only screen and (min-width: 600px){\n    grid-area: text;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(l.a)(["\n  width: 100%;\n  min-height: 300px;\n  object-fit: cover;\n  @media only screen and (min-width: 600px){\n    grid-area: image;\n    height: 100%;\n  }\n"]);return v=function(){return e},e}function p(){var e=Object(l.a)(["\n  padding: 100px 5vw 0;\n  min-height: 60vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 100px 10vw;\n  \n  @media only screen and (min-width: 600px){\n    grid-template-columns: 1.2fr 1fr;\n    grid-template-areas: \n  'text image'\n  'sub image'\n  ;\n  }\n"]);return p=function(){return e},e}var E=o.a.section(p()),h=o.a.img(v()),y=o.a.h1(b()),N=o.a.p(f()),w=n(122),x=n.n(w),k=function(){return r.a.createElement(E,null,r.a.createElement(y,null,"Ensuring confidence in your skin is literally our business"),r.a.createElement(N,null,'"Beautiful skin requires commitment, not a miracle" - Erno Laszlo'),r.a.createElement(h,{src:x.a,alt:"confident man"}))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(g,null),r.a.createElement(k,null),r.a.createElement(c.a,null))}},73:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(76),n(15)),c=n(77),l=n.n(c);t.a=function(e){var t=e.text,n=e.button_type,a=e.icon,c=e.link,o=e.toggle,s=e.clickFunction;return"type1"===n?r.a.createElement(i.b,{to:c},r.a.createElement("button",{className:"diagnosify-button",onClick:o},r.a.createElement("i",{className:a}),t)):"type2"===n?r.a.createElement(i.b,{to:c},r.a.createElement("button",{className:"diagnosify-button button2"},r.a.createElement("i",{className:a}),t)):"type3"===n?r.a.createElement(i.b,{to:c},r.a.createElement("button",{className:"diagnosify-button button3"},r.a.createElement("i",{className:a}),t)):"submit"===n?r.a.createElement("button",{className:"diagnosify-button button"},t):"google"===n?r.a.createElement("button",{className:"diagnosify-button button4",onClick:s},r.a.createElement("img",{src:l.a,alt:"google icon",className:"google"}),t):void 0}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(75);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},75:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}n.d(t,"a",(function(){return r}))},76:function(e,t,n){},77:function(e,t,n){e.exports=n.p+"static/media/google.1b943d72.png"},78:function(e,t,n){"use strict";var a=n(74),r=n(0),i=n.n(r),c=(n(79),n(80)),l=n.n(c),o=n(73),s=n(15),m=n(19),u=n(28);t.a=Object(m.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{logoutUser:function(){return e(Object(u.b)())}}}))((function(e){var t=e.logoutUser,n=e.isAuthenticated,c=Object(r.useState)(!1),m=Object(a.a)(c,2),u=m[0],d=m[1],g=function(){d(!u)};Object(r.useEffect)((function(){var e=document.querySelector("#menu"),t=document.querySelector("#icon");u?(e.classList.add("show"),t.classList.remove("collapsed")):(e.classList.remove("show"),t.classList.add("collapsed"))}),[u]);return i.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light fixed-top"},i.a.createElement(s.c,{to:"/",exact:!0},i.a.createElement("img",{className:"navbar-brand",src:l.a,alt:"diagnosify_logo"})),i.a.createElement("span",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu",id:"icon",onClick:g},i.a.createElement("span",{className:"line line1"}),i.a.createElement("span",{className:"line",id:"line-two"}),i.a.createElement("span",{className:"line",id:"line-three"})),i.a.createElement("div",{id:"menu",className:"menu collapse navbar-collapse"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.c,{activeClassName:"active-nav",to:"/",exact:!0,className:"nav-link",onClick:g},"Home")),i.a.createElement("li",{className:"dropdown nav-item"},i.a.createElement("span",{className:"drop-button nav-link","data-toggle":"dropdown","data-target":"service_target"},"Services"),i.a.createElement("div",{className:"dropdown-content dropdown-menu","aria-labelledby":"service_target"},i.a.createElement(s.b,{to:"/dashboard",onClick:g},"Scan image"),i.a.createElement(s.b,{to:"/mobile",onClick:g},"Get mobile app"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.c,{activeClassName:"active-nav",to:"/about",className:"nav-link",onClick:g},"About Us")),n?i.a.createElement("div",{className:"logged"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.c,{activeClassName:"active-nav",to:"/dashboard",className:"nav-link"},"Dashboard")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("span",{className:"nav-link",onClick:function(){t()}},"Logout"))):i.a.createElement("li",{className:"nav-item"},i.a.createElement("span",{className:"nav-link"},i.a.createElement(o.a,{text:"Get Started",button_type:"type1",link:"/welcome",toggle:g}))))))}))},79:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/logo.731400f6.png"},81:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(82),n(15));t.a=function(){return r.a.createElement("section",{className:"footer"},r.a.createElement("div",{className:"footer-terms"},r.a.createElement("p",null,"Copyright \xa9 2020. All rights reserved | Diagnosify Limited"),r.a.createElement(i.b,{to:"/"},r.a.createElement("p",{className:"terms"},"Terms and conditions"))))}},82:function(e,t,n){}}]);
//# sourceMappingURL=7.cf548a00.chunk.js.map