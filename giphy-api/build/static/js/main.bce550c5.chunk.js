(this.webpackJsonpsimplified_cra_starter_code=this.webpackJsonpsimplified_cra_starter_code||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},42:function(t,e){},52:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(17),c=n.n(a),i=(n(23),n(2)),s=n.n(i),u=n(3),o=n(8),p=(n(25),n(0));var j=function(t){var e=Object(r.useRef)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.handleSubmit(e.current.value)},children:[Object(p.jsx)("input",{type:"text",placeholder:"search a tag (eg. cat)",ref:e}),Object(p.jsx)("input",{type:"submit"})]})})};var f=function(t){return Object(p.jsx)("div",{className:"Giphy-data",children:Object(p.jsx)("img",{src:t.giphy,alt:""})})},l=new(n(18).GiphyFetch)("hNzaE7yr0PysdaZGg2y4ckpOWj5MIsrR");var d=function(){var t=Object(r.useState)({}),e=Object(o.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)({}),i=Object(o.a)(c,2),d=i[0],h=i[1];function b(){return(b=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.random();case 2:e=t.sent,a(e.data.image_url);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(d);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.random();case 2:e=t.sent,a(e.data.image_url);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Giphy"}),Object(p.jsx)(j,{handleSubmit:function(t){function e(){return(e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.random({tag:t});case 2:n=e.sent,a(n.data.image_url);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}}),Object(p.jsx)("div",{className:"display",children:Object(p.jsx)(f,{giphy:n})}),Object(p.jsx)("button",{onClick:function(){return b.apply(this,arguments)},children:"Random GIF"}),Object(p.jsx)("button",{onClick:function(){h(n),alert("Saved!")},children:"Favourite This"}),Object(p.jsx)("button",{onClick:function(){return O.apply(this,arguments)},children:"View Favourite"})]})};c.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.bce550c5.chunk.js.map