(this.webpackJsonpsimplified_cra_starter_code=this.webpackJsonpsimplified_cra_starter_code||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(5),o=c.n(r),a=c(3),u=c(2),s=Object(n.createContext)(),i=c(0);var j=function(){var e=Object(n.useContext)(s),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(i.jsxs)("section",{children:[Object(i.jsxs)("h2",{children:["Count:",c.counterA]}),Object(i.jsx)("button",{onClick:function(){return r({type:"CHANGEA",payload:1})},children:"+"}),Object(i.jsx)("button",{onClick:function(){return r({type:"CHANGEA",payload:-1})},children:"-"}),Object(i.jsx)("button",{onClick:function(){return r({type:"SETA",payload:0})},children:"Reset"})]})};var b=function(){var e=Object(n.useContext)(s),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(i.jsxs)("section",{children:[Object(i.jsxs)("h2",{children:["Count:",c.counterB]}),Object(i.jsx)("button",{onClick:function(){return r({type:"CHANGEB",payload:1})},children:"+"}),Object(i.jsx)("button",{onClick:function(){return r({type:"CHANGEB",payload:-1})},children:"-"}),Object(i.jsx)("button",{onClick:function(){return r({type:"SETB",payload:0})},children:"Reset"})]})},l=function(e,t){switch(t.type){case"CHANGEA":return Object(u.a)(Object(u.a)({},e),{},{counterA:e.counterA+t.payload});case"SETA":return Object(u.a)(Object(u.a)({},e),{},{counterA:t.payload});case"CHANGEB":return Object(u.a)(Object(u.a)({},e),{},{counterB:e.counterB+t.payload});case"SETB":return Object(u.a)(Object(u.a)({},e),{},{counterB:t.payload});default:return e}};var d=function(){var e=Object(n.useReducer)(l,{counterA:0,counterB:0}),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(i.jsxs)("div",{className:"nes-text is-primary",children:[Object(i.jsxs)(s.Provider,{value:[c,r],children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{})]}),Object(i.jsxs)("h1",{children:["Total sum: ",c.counterA+c.counterB]})]})},O=(c(11),document.getElementById("root"));o.a.render(Object(i.jsx)(d,{}),O)}},[[12,1,2]]]);
//# sourceMappingURL=main.57344d3b.chunk.js.map