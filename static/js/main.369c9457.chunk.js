(this.webpackJsonpmasters=this.webpackJsonpmasters||[]).push([[0],{29:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(20),o=t.n(l),c=(t(29),t(17)),s=t(55),i=(t(30),t(62)),b=t(4),d=t(58),p=t(61),j=t(63),h=t(57),y=t(59),u=t(60),O=[{team:"York",player1:"Dustin Johnson",player2:"Bryson DeChambeau",player3:"Justin Thomas",player4:"Dylan Frittelli",player5:"Phil Mickelson",tiebreaker:-21},{team:"Eric",player1:"Tiger Woods",player2:"Bryson DeChambeau",player3:"Justin Thomas",player4:"Dylan Frittelli",player5:"Brendon Todd",tiebreaker:-69},{team:"Eric2",player1:"Tiger Woods",player2:"Bryson DeChambeau",player3:"Justin Thomas",player4:"Dylan Frittelli",player5:"Brendon Todd",tiebreaker:-69},{team:"Alex",player1:"Tiger Woods",player2:"Bryson DeChambeau",player3:"Justin Thomas",player4:"Dylan Frittelli",player5:"Brendon Todd",tiebreaker:-68},{team:"Big Loser",player1:"Tiger Woods",player2:"Bryson DeChambeau",player3:"Brendon Todd",player4:"Brendon Todd",player5:"Brendon Todd",tiebreaker:-68}],m=t(2),f=Object(s.a)({table:{minWidth:650}});var x=function(e){var a=f(),t=Object(r.useState)([]),n=Object(c.a)(t,2),l=n[0],o=n[1],s=function(e){return isNaN(e)?999:e};return Object(r.useEffect)((function(){if(Object.keys(e.leaderboard).length>0){var a=O.map((function(a){var t=[e.leaderboard[a.player1].toPar,e.leaderboard[a.player2].toPar,e.leaderboard[a.player3].toPar,e.leaderboard[a.player4].toPar,e.leaderboard[a.player5].toPar];return t=t.sort((function(e,a){return isNaN(parseInt(e))?1:isNaN(parseInt(a))?-1:parseInt(e)-parseInt(a)})),Object(b.a)(Object(b.a)({},a),{},{total:[t[0],t[1],t[2]].reduce((function(e,a){return s(parseInt(e))+s(parseInt(a))}))})}));a.sort((function(e,a){return isNaN(parseInt(e.total))?1:isNaN(parseInt(a.total))?-1:parseInt(e.total)===parseInt(a.total)?Math.abs(e.total-e.tiebreaker)-Math.abs(a.total-a.tiebreaker):parseInt(e.total)-parseInt(a.total)})),a.forEach((function(e,t){0===t?a[t+1].total===e.total&&Math.abs(a[t+1].total-a[t+1].tiebreaker)-Math.abs(e.total-e.tiebreaker)?a[t]=Object(b.a)(Object(b.a)({},e),{},{pos:"T"+(t+1)}):a[t]=Object(b.a)(Object(b.a)({},e),{},{pos:t+1}):t!==a.length-1&&a[t+1].total===e.total&&Math.abs(a[t+1].total-a[t+1].tiebreaker)===Math.abs(e.total-e.tiebreaker)?a[t]=Object(b.a)(Object(b.a)({},e),{},{pos:"T"+(t+1)}):a[t-1].total===e.total&&Math.abs(a[t-1].total-a[t-1].tiebreaker)===Math.abs(e.total-e.tiebreaker)?a[t]=Object(b.a)(Object(b.a)({},e),{},{pos:a[t-1].pos}):a[t]=Object(b.a)(Object(b.a)({},e),{},{pos:t+1})})),o(a)}}),[e.leaderboard]),Object(m.jsx)(h.a,{children:Object(m.jsxs)(d.a,{className:a.table,"aria-label":"simple table",children:[Object(m.jsx)(y.a,{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(j.a,{children:"Place"}),Object(m.jsx)(j.a,{children:"Team Name"}),Object(m.jsx)(j.a,{children:"Player 1"}),Object(m.jsx)(j.a,{children:"Player 2"}),Object(m.jsx)(j.a,{children:"Player 3"}),Object(m.jsx)(j.a,{children:"Player 4"}),Object(m.jsx)(j.a,{children:"Player 5"}),Object(m.jsx)(j.a,{children:"Tie Breaker"}),Object(m.jsx)(j.a,{children:"To Par"})]})}),Object(m.jsx)(p.a,{children:l.map((function(a){return Object(m.jsxs)(u.a,{children:[Object(m.jsx)(j.a,{children:a.pos}),Object(m.jsx)(j.a,{children:a.team}),Object(m.jsx)(j.a,{children:a.player1+" (".concat(e.leaderboard[a.player1].toPar,")")}),Object(m.jsx)(j.a,{children:a.player2+" (".concat(e.leaderboard[a.player2].toPar,")")}),Object(m.jsx)(j.a,{children:a.player3+" (".concat(e.leaderboard[a.player3].toPar,")")}),Object(m.jsx)(j.a,{children:a.player4+" (".concat(e.leaderboard[a.player4].toPar,")")}),Object(m.jsx)(j.a,{children:a.player5+" (".concat(e.leaderboard[a.player5].toPar,")")}),Object(m.jsx)(j.a,{children:a.tiebreaker}),Object(m.jsx)(j.a,{children:a.total>100?"-":a.total})]},a.team)}))})]})})},P=Object(s.a)({table:{minWidth:650},paperPadding:{margin:"16px"}});var k=function(){var e=P(),a=Object(r.useState)({}),t=Object(c.a)(a,2),n=t[0],l=t[1],o=window.location.href.includes("localhost")?"https://cors-anywhere.herokuapp.com/http://samsandberg.com/themasters/":"http://samsandberg.com/themasters/";return Object(r.useEffect)((function(){fetch(o).then((function(e){return e.json()})).then((function(e){if(e){var a={};e.players.forEach((function(e){e.player&&(a[e.player.replace(" (a)","")]={pos:e.pos,toPar:e.to_par})})),l(a)}}))}),[]),Object(m.jsx)(i.a,{className:e.paperPadding,elevation:3,children:Object(m.jsx)(x,{leaderboard:n})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),r(e),n(e),l(e),o(e)}))};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.369c9457.chunk.js.map