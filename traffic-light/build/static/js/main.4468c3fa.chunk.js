(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(2),l=o.n(c),r=o(3);function i(e){var t={backgroundColor:e.color};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:e.action,class:"bulb",style:t}))}var s={Stop:"black",Slow:"black",Go:"black"};function u(){var e=Object(n.useState)(s),t=Object(r.a)(e,2),o=t[0],c=t[1],l=function(e){c("stop"===e?{Stop:"red",Slow:"black",Go:"black"}:"slow"===e?{Stop:"black",Slow:"orange",Go:"black"}:{Stop:"black",Slow:"black",Go:"green"})};return a.a.createElement("div",{className:"App"},a.a.createElement("section",null,a.a.createElement("div",{id:"control-panel"},a.a.createElement("h2",{id:"stop",class:"button",onClick:function(){l("stop")}},"Stop"),a.a.createElement("h2",{id:"slow",class:"button",onClick:function(){l("slow")}},"Slow"),a.a.createElement("h2",{id:"go",class:"button",onClick:function(){l("go")}},"Go")),a.a.createElement("div",{id:"traffic-lights"},a.a.createElement(i,{color:o.Stop,action:"stop"}),a.a.createElement(i,{color:o.Slow,action:"slow"}),a.a.createElement(i,{color:o.Go,action:"go"}))))}o(9);var b=document.getElementById("root");l.a.render(a.a.createElement(u,null),b)},4:function(e,t,o){e.exports=o(10)},9:function(e,t,o){}},[[4,1,2]]]);
//# sourceMappingURL=main.4468c3fa.chunk.js.map