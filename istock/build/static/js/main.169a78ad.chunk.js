(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=a(5);var s=function(){return c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"nav-item"},c.a.createElement("span",{className:"nav-logo"},c.a.createElement(o.b,{to:"/"},"iStocks"))),c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.b,{to:"/stocks"},"Stocks")),c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.b,{to:"/about"},"About")))},m=a(12),u=a.n(m),i=a(19),E=a(20),p=a(21),f=a(6);var b=function(){return c.a.createElement("h1",null,"Home Page")};var v=function(e){var t={color:e.stock.changesPercentage>0?"green":"red"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(o.b,{to:"/stocks/".concat(e.stock.symbol)},"".concat(e.stock.name," (").concat(e.stock.symbol,")"))),c.a.createElement("td",null,e.stock.price),c.a.createElement("td",{style:t},"".concat(Number(e.stock.change).toFixed(2)," (").concat(Number(e.stock.changesPercentage).toFixed(2),"%)"))))};var d=function(){return c.a.createElement("h1",null,"About Page")},h=function(e){var t=Object(f.e)(),a=e.list.findIndex(function(e){return e.symbol===t.stock});return c.a.createElement("div",null,-1!==a?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Name: ",e.list[a].symbol),c.a.createElement("h3",{className:"price"},"Price: ",e.list[a].price)):"")},k=["AAPL","MSFT","GOOGL","FB","ORCL","INTL"];var g=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){function e(){return(e=Object(E.a)(u.a.mark(function e(){var t,a,n,c,l,o,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=Object(i.a)(k),e.prev=2,a.s();case 4:if((n=a.n()).done){e.next=16;break}return c=n.value,l="https://financialmodelingprep.com/api/v3/quote/".concat(c,"?apikey=bfee204fee91f7409e1d3bf35ddbc93f"),e.next=9,fetch(l);case 9:return o=e.sent,e.next=12,o.json();case 12:s=e.sent,t.push(s[0]);case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),a.e(e.t0);case 21:return e.prev=21,a.f(),e.finish(21);case 24:r(t);case 25:case"end":return e.stop()}},e,null,[[2,18,21,24]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var l=a.map(function(e,t){return c.a.createElement(v,{key:t,stock:e})});return c.a.createElement("main",null,c.a.createElement(f.a,{exact:!0,path:"/",component:b}),c.a.createElement(f.a,{exact:!0,path:"/stocks"},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Company Name"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Change")),l))),c.a.createElement(f.a,{exact:!0,path:"/stocks/:stock"},c.a.createElement(h,{list:a})),c.a.createElement(f.a,{exact:!0,path:"/about",component:d}))};var x=function(){return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(g,null))},y=(a(32),document.getElementById("root"));l.a.render(c.a.createElement(o.a,null,c.a.createElement(x,null)),y)}},[[22,1,2]]]);
//# sourceMappingURL=main.169a78ad.chunk.js.map