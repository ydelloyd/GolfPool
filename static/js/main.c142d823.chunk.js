(this.webpackJsonpmasters=this.webpackJsonpmasters||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),n=t(80),l=t.n(n),o=(t(90),t(19)),s=t(177),b=(t(91),t(186)),i=t(6),d=t(184),j=t(180),h=t(185),p=t(183),O=t(179),u=t(181),x=t(182),y=t(2),f=Object(s.a)({table:{minWidth:650}});var m=function(e){var a=f(),t=Object(r.useState)([]),c=Object(o.a)(t,2),n=c[0],l=c[1],s=function(e){return isNaN(e)?999:e};return console.log(e),Object(r.useEffect)((function(){if(console.log(e.leaderboard),Object.keys(e.leaderboard).length>0){var a=e.teams.map((function(a){var t=[e.leaderboard[a.player1]?e.leaderboard[a.player1].toPar:"-",e.leaderboard[a.player2]?e.leaderboard[a.player2].toPar:"-",e.leaderboard[a.player3]?e.leaderboard[a.player3].toPar:"-",e.leaderboard[a.player4]?e.leaderboard[a.player4].toPar:"-",e.leaderboard[a.player5]?e.leaderboard[a.player5].toPar:"-"];return t=t.sort((function(e,a){return isNaN(parseInt(e))?1:isNaN(parseInt(a))?-1:parseInt(e)-parseInt(a)})),Object(i.a)(Object(i.a)({},a),{},{total:[t[0],t[1],t[2]].reduce((function(e,a){return s(parseInt(e))+s(parseInt(a))}))})}));a.sort((function(e,a){return isNaN(parseInt(e.total))?1:isNaN(parseInt(a.total))?-1:parseInt(e.total)===parseInt(a.total)?Math.abs(e.total-e.tiebreaker)-Math.abs(a.total-a.tiebreaker):parseInt(e.total)-parseInt(a.total)})),a.forEach((function(e,t){0===t?a[t+1].total===e.total&&Math.abs(a[t+1].total-a[t+1].tiebreaker)===Math.abs(e.total-e.tiebreaker)?a[t]=Object(i.a)(Object(i.a)({},e),{},{pos:"T"+(t+1)}):a[t]=Object(i.a)(Object(i.a)({},e),{},{pos:t+1}):t!==a.length-1&&a[t+1].total===e.total&&Math.abs(a[t+1].total-a[t+1].tiebreaker)===Math.abs(e.total-e.tiebreaker)?a[t]=Object(i.a)(Object(i.a)({},e),{},{pos:"T"+(t+1)}):a[t-1].total===e.total&&Math.abs(a[t-1].total-a[t-1].tiebreaker)===Math.abs(e.total-e.tiebreaker)?a[t]=Object(i.a)(Object(i.a)({},e),{},{pos:a[t-1].pos}):a[t]=Object(i.a)(Object(i.a)({},e),{},{pos:t+1})})),l(a)}}),[e.leaderboard]),Object(y.jsx)(O.a,{children:Object(y.jsxs)(j.a,{className:a.table,"aria-label":"simple table",children:[Object(y.jsx)(u.a,{children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Place"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Team Name"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Player 1"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Player 2"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Player 3"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Player 4"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Player 5"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"Tie Breaker"})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(d.a,{variant:"h6",children:"To Par"})})]})}),Object(y.jsx)(h.a,{children:n.map((function(a){return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{children:a.pos}),Object(y.jsx)(p.a,{children:a.team}),Object(y.jsx)(p.a,{children:a.player1+" (".concat(e.leaderboard[a.player1]?e.leaderboard[a.player1].toPar:"-",")")}),Object(y.jsx)(p.a,{children:a.player2+" (".concat(e.leaderboard[a.player2]?e.leaderboard[a.player2].toPar:"-",")")}),Object(y.jsx)(p.a,{children:a.player3+" (".concat(e.leaderboard[a.player3]?e.leaderboard[a.player3].toPar:"-",")")}),Object(y.jsx)(p.a,{children:a.player4+" (".concat(e.leaderboard[a.player4]?e.leaderboard[a.player4].toPar:"-",")")}),Object(y.jsx)(p.a,{children:a.player5+" (".concat(e.leaderboard[a.player5]?e.leaderboard[a.player5].toPar:"-",")")}),Object(y.jsx)(p.a,{children:a.tiebreaker}),Object(y.jsx)(p.a,{children:a.total>100?"-":a.total})]},a.team)}))})]})})},P=t(82),v=t.n(P),g=t(187),k=Object(s.a)({table:{minWidth:650},paperPadding:{margin:"6.9vh"}});var w=function(){var e=k(),a=Object(r.useState)({}),t=Object(o.a)(a,2),c=t[0],n=t[1],l=Object(r.useState)([]),s=Object(o.a)(l,2),i=s[0],d=s[1],j=Object(r.useState)(!1),h=Object(o.a)(j,2),p=h[0],O=h[1],u=Object(r.useState)(!1),x=Object(o.a)(u,2),f=x[0],P=x[1],w=(window.location.href.includes("localhost"),"https://enigmatic-hollows-91895.herokuapp.com/https://www.espn.com/golf/leaderboard"),I=(window.location.href.includes("localhost"),"https://enigmatic-hollows-91895.herokuapp.com/https://raw.githubusercontent.com/ydelloyd/Datasets/master/teams.json");return Object(r.useEffect)((function(){O(!0),P(!0),fetch(w).then((function(e){return e.text()})).then((function(e){if(O(!1),e){var a=v.a.load(e),t=a(".competitors tbody tr"),r={};t.toArray().forEach((function(e){var t=a(e).find("td").toArray(),c=a(t[0]).text(),n=a(t[1]).text(),l=a(t[2]).text();r[n.replace(" (a)","")]={pos:c,toPar:"E"===l?"0":l}})),n(r)}else console.log("There was an error")})),fetch(I).then((function(e){return e.json()})).then((function(e){P(!1),e?d(e):console.log("There was an error")}))}),[]),Object(y.jsx)(b.a,{className:e.paperPadding,elevation:3,children:p||f?Object(y.jsx)(g.a,{}):Object(y.jsx)(m,{leaderboard:c,teams:i})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,189)).then((function(a){var t=a.getCLS,r=a.getFID,c=a.getFCP,n=a.getLCP,l=a.getTTFB;t(e),r(e),c(e),n(e),l(e)}))};l.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),I()},90:function(e,a,t){},91:function(e,a,t){}},[[157,1,2]]]);
//# sourceMappingURL=main.c142d823.chunk.js.map