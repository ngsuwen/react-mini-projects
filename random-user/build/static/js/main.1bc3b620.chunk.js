(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(1),l=a.n(s),o=a(3),u=a(2);a(12);function m(e){return r.a.createElement("div",{className:"attribute"},r.a.createElement("span",{id:e.id,role:e.role,"aria-labelledby":e.label,onClick:function(t){e.click(t.target.id)}},e.icon))}function p(){var e=Object(n.useState)({image:"",name:"",email:"",birthdate:"",city:"",phone:""}),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("name"),s=Object(u.a)(c,2),p=s[0],d=s[1],b=Object(n.useState)(""),f=Object(u.a)(b,2),h=f[0],g=f[1];function E(){return(E=Object(o.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/",e.next=3,fetch("https://randomuser.me/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i({image:a.results[0].picture.large,name:a.results[0].name.first,email:a.results[0].email,birthdate:a.results[0].dob.date,city:a.results[0].location.street.number+" "+a.results[0].location.street.name,phone:a.results[0].phone}),g(a.results[0].name.first),d("name");case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){function e(){return(e=Object(o.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/",e.next=3,fetch("https://randomuser.me/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i({image:a.results[0].picture.large,name:a.results[0].name.first,email:a.results[0].email,birthdate:a.results[0].dob.date,city:a.results[0].location.street.number+" "+a.results[0].location.street.name,phone:a.results[0].phone}),g(a.results[0].name.first);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var k=function(e){d(e),g(a[e])},y={backgroundImage:"url(".concat(a.image,")")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return E.apply(this,arguments)}},"Random User "),r.a.createElement("div",{id:"container"},r.a.createElement("div",{style:y,id:"photo"}),r.a.createElement("div",{id:"content"},r.a.createElement("span",{id:"smalltext"},"My ",p," is"),r.a.createElement("span",{id:"bigtext"},h)),r.a.createElement(m,{id:"name",role:"img",label:"face",icon:"\ud83d\ude00",click:k}),r.a.createElement(m,{id:"email",role:"img",label:"email",icon:"\ud83d\udce7",click:k}),r.a.createElement(m,{id:"birthdate",role:"img",label:"confetti",icon:"\ud83c\udf89",click:k}),r.a.createElement(m,{id:"city",role:"img",label:"city",icon:"\ud83c\udf06",click:k}),r.a.createElement(m,{id:"phone",role:"img",label:"tele",icon:"\ud83d\udcde",click:k})))}var d=document.getElementById("root");c.a.render(r.a.createElement(p,null),d)},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.1bc3b620.chunk.js.map