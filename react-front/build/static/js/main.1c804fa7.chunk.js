(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{38:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);var c=e(13),o=e.n(c),r=e(14),a=e(2),u=e(4),i=e.n(u),s="/api/todos",d={getAll:function(){return i.a.get(s).then((function(t){return t.data}))},create:function(t,n){return i.a.put("".concat(s,"/").concat(t),n).then((function(t){return t.data}))}},j=e(1),l=function(t){var n=t.todo;return Object(j.jsx)("li",{className:"todo",children:n.content})},f=(e(38),function(){var t=Object(a.useState)([]),n=Object(r.a)(t,2),e=n[0],c=n[1];return Object(a.useEffect)((function(){d.getAll().then((function(t){c(t)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Todos"}),Object(j.jsx)("ul",{children:e.map((function(t){return console.log(t),Object(j.jsx)(l,{todo:t},t.id)}))})]})});o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1c804fa7.chunk.js.map