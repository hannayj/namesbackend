(this.webpackJsonpnames=this.webpackJsonpnames||[]).push([[0],{23:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(2),r=n(16),o=n.n(r),u=(n(23),n(7)),i=n(5),s=function(t){var e=t.name;return Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{style:{width:"60px"},children:e.name}),Object(c.jsx)("td",{children:e.amount})]})})})},j=n(17),b=n.n(j),l=function(){return b.a.get("http://localhost:3001/api/names").then((function(t){return t.data}))},h=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)([]),j=Object(i.a)(o,2),b=j[0],h=j[1],d=Object(a.useState)(""),f=Object(i.a)(d,2),O=f[0],m=f[1];Object(a.useEffect)((function(){l().then((function(t){h(t),r(t)}))}),[]);function p(t,e){var n=t.name.toUpperCase(),c=e.name.toUpperCase(),a=0;return n>c?a=1:n<c&&(a=-1),a}var x=""===O?b:b.filter((function(t){return t.name.toLowerCase().includes(O.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Names"}),Object(c.jsx)("button",{onClick:function(){var t=Object(u.a)(b);t.sort((function(t,e){return e.amount-t.amount})),h(t)},children:"Sort by amount"}),Object(c.jsx)("button",{onClick:function(){var t=Object(u.a)(b);t.sort(p),h(t)},children:"Sort by name"}),Object(c.jsx)("button",{onClick:function(){h(n),m("")},children:"Clear all filters"}),Object(c.jsx)("p",{children:"See amount of specific name by typing it below:"}),Object(c.jsx)("input",{value:O,onChange:function(t){m(t.target.value)},placeholder:"Type here"}),x.map((function(t,e){return Object(c.jsx)(s,{name:t},e)})),Object(c.jsxs)("p",{children:["Total amount of all the names is ",b.reduce((function(t,e){return t+e.amount}),0)]})]})};o.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4f92c643.chunk.js.map