(this["webpackJsonpaviasales-test-assignment"]=this["webpackJsonpaviasales-test-assignment"]||[]).push([[0],{36:function(n,e,t){"use strict";t.r(e);var r,i,a,c,s,o,d,b,l,u,p,f,g,h,x,j,m,O,k,v,w,y,C,z,E,S,A=t(0),T=t(9),I=t.n(T),L=t(4),q=t(23),B=t(8),F=t(2),_=t(14),D=t.n(_),R=t(17),G="GET_TICKETS_REQUEST",K="GET_TICKETS_SUCCESS",M="GET_TICKETS_FAILURE",U=t(3),Z=U.b.div(r||(r=Object(F.a)(["\n  width: 100%;\n  border-radius: 6px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  margin-bottom: 20px;\n"]))),H=U.b.div(i||(i=Object(F.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n"]))),J=U.b.div(a||(a=Object(F.a)(["\n  padding: 0 20px 20px;\n"]))),Q=U.b.span(c||(c=Object(F.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: #2196f3;\n"]))),W=U.b.div(s||(s=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n"]))),N=U.b.div(o||(o=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),P=U.b.div(d||(d=Object(F.a)(["\n  color: #a0b0b9;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0.5px;\n"]))),V=U.b.div(b||(b=Object(F.a)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n"]))),X=U.b.span(l||(l=Object(F.a)(['\n  &:after {\n    content: ", ";\n  }\n  &:last-of-type:after {\n    content: "";\n  }\n']))),Y=t(1),$=function(n){var e=n.ticket;function t(n){var e=parseInt(n/60);return e+"\u0447 "+(n-60*e)+"\u043c"}function r(n,e){var t=Date.parse(n),r=new Date(t+6e4*e);return i(r.getHours())+":"+i(r.getMinutes())}function i(n){return String(n).length>1?n:"0".concat(n)}return Object(Y.jsxs)(Z,{children:[Object(Y.jsxs)(H,{children:[Object(Y.jsxs)(Q,{children:[function(n){var e=String(n);return e.length>3?"".concat(e.slice(0,e.length-3)," ").concat(e.slice(-3)):e}(e.price)," \u0420"]}),Object(Y.jsx)("img",{src:"https://pics.avs.io/99/36/".concat(e.carrier,".png"),alt:e.carrier})]}),Object(Y.jsx)(J,{children:e.segments.map((function(n){return Object(Y.jsxs)(W,{style:{marginBottom:10},children:[Object(Y.jsxs)(N,{children:[Object(Y.jsxs)(P,{children:[n.origin," - ",n.destination]}),Object(Y.jsxs)(V,{children:[i(new Date(n.date).getHours()),":",i(new Date(n.date).getMinutes()),"-",r(n.date,n.duration)]})]}),Object(Y.jsxs)(N,{children:[Object(Y.jsx)(P,{children:"\u0412 \u041f\u0423\u0422\u0418"}),Object(Y.jsx)(V,{children:t(n.duration)})]}),Object(Y.jsxs)(N,{children:[Object(Y.jsx)(P,{children:(e=n.stops,0===e.length?"\u0411\u0415\u0417 \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a":1===e.length?"1 \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0410":e.length<5?"".concat(e.length," \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0418"):e.length>=5?"".concat(e.length," \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a"):void 0)}),Object(Y.jsx)(V,{children:n.stops.map((function(n,e){return Object(Y.jsx)(X,{children:n},e)}))})]})]},n.origin);var e}))})]})},nn=U.b.div(u||(u=Object(F.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  flex-direction: column;\n"]))),en=U.b.button(p||(p=Object(F.a)(["\n  height: 50px;\n  background: #122d43;\n  border: 1px solid #dfe5ec;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-transform: uppercase;\n"]))),tn=function(n){var e=n.error,t=n.handleClick;return Object(Y.jsxs)(nn,{children:[Object(Y.jsxs)("h3",{children:["Error: ",e]}),Object(Y.jsx)(en,{onClick:t,danger:!0,children:"Retry"})]})},rn=Object(U.c)(f||(f=Object(F.a)(["\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n"]))),an=U.b.div(g||(g=Object(F.a)(["\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: #2196f3;\n  background: -moz-linear-gradient(\n    left,\n    #2196f3 10%,\n    rgba(33, 150, 243, 0) 42%\n  );\n  background: -webkit-linear-gradient(\n    left,\n    #2196f3 10%,\n    rgba(33, 150, 243, 0) 42%\n  );\n  background: -o-linear-gradient(left, #2196f3 10%, rgba(33, 150, 243, 0) 42%);\n  background: -ms-linear-gradient(left, #2196f3 10%, rgba(33, 150, 243, 0) 42%);\n  background: linear-gradient(to right, #2196f3 10%, rgba(33, 150, 243, 0) 42%);\n  position: relative;\n  -webkit-animation: "," 1.4s infinite linear;\n  animation: ",' 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  &:before {\n    width: 50%;\n    height: 50%;\n    background: #2196f3;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n  }\n  &:after {\n    background: #f3f7fa;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: "";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n'])),rn,rn),cn=U.b.button(h||(h=Object(F.a)(["\n  height: 50px;\n  background: #2196f3;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  &:hover {\n    background: #248fe3;\n  }\n"]))),sn=function(n){var e=n.filters,t=n.sorting,r=Object(L.b)(),i=Object(L.c)((function(n){return n.ticketsList})),a=Object(L.c)((function(n){return n.error})),c=Object(L.c)((function(n){return n.request})),s=Object(A.useState)(0),o=Object(B.a)(s,2),d=o[0],b=o[1],l=function(){r(function(){var n=Object(R.a)(D.a.mark((function n(e){var t,r,i,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:G}),n.next=3,fetch("https://front-test.beta.aviasales.ru/search");case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Request failed with status ".concat(t.status));case 6:return n.next=8,t.json();case 8:return r=n.sent,n.prev=9,n.next=12,fetch("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(r.searchId));case 12:if((i=n.sent).ok){n.next=15;break}throw new Error("Request failed with status ".concat(i.status));case 15:return n.next=17,i.json();case 17:a=n.sent,e((s=a.tickets,{type:K,payload:s})),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(9),e((c=n.t0.message,{type:M,payload:c}));case 24:case"end":return n.stop()}var c,s}),n,null,[[9,21]])})));return function(e){return n.apply(this,arguments)}}())},u=function(n,e){return n?"cheap"===n?e.sort((function(n,e){return n.price-e.price})):"fast"===n?e.sort((function(n,e){return n.segments[0].duration+n.segments[1].duration-(e.segments[0].duration+e.segments[1].duration)})):"optimal"===n?e.sort((function(n,e){return n.price>e.price&&n.segments[0].duration+n.segments[1].duration>e.segments[0].duration+e.segments[1].duration?1:-1})):void 0:e}(t,i.filter((function(n){for(var t=0;t<e.length;t++)if(n.segments[0].stops.length===e[t]&&n.segments[1].stops.length<=e[t]||n.segments[1].stops.length===e[t]&&n.segments[0].stops.length<=e[t])return!0}))).slice(0,5*(d+1));return Object(A.useEffect)((function(){l()}),[]),Object(Y.jsxs)(Y.Fragment,{children:[a?Object(Y.jsx)(tn,{error:a,handleClick:l}):null,1===c?Object(Y.jsx)(an,{children:"Loading..."}):null,u.map((function(n,e){return Object(Y.jsx)($,{ticket:n},e)})),a?null:Object(Y.jsx)(cn,{onClick:function(){b(d+1)},children:"\u041f\u041e\u041a\u0410\u0417\u0410\u0422\u042c \u0415\u0429\u0415 5 \u0411\u0418\u041b\u0415\u0422\u041e\u0412! "})]})},on=U.b.div(x||(x=Object(F.a)(["\n  display: grid;\n  margin-bottom: 20px;\n  &:first-child {\n    border-radius: 10px;\n  }\n  @media screen and (min-width: 400px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]))),dn=U.b.input(j||(j=Object(F.a)(["\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n"]))),bn=U.b.label(m||(m=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n  box-sizing: border-box;\n  border: 1px solid ",";\n  margin: -1px -1px 0 0;\n  background: ",";\n  color: ",";\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &:first-of-type {\n    border-radius: 10px 10px 0 0;\n  }\n  &:last-of-type {\n    border-radius: 0 0 10px 10px;\n  }\n  @media screen and (min-width: 400px) {\n    &:first-of-type {\n      border-radius: 10px 0 0 10px;\n    }\n    &:last-of-type {\n      border-radius: 0 10px 10px 0;\n    }\n  }\n"])),(function(n){return n.checked?"#2196f3":"#9ABBCE"}),(function(n){return n.checked?"#2196F3":"#fff"}),(function(n){return n.checked?"#fff":"#4A4A4A"}),(function(n){return n.checked?"#2196F3;":"#f1fcff"}),(function(n){return n.checked?"#fff":"#2196f3;"})),ln=function(n){var e=n.sorts,t=n.handleChange,r=n.sorting;return Object(Y.jsx)(on,{children:e.map((function(n){return Object(Y.jsxs)(bn,{checked:r===n.type,children:[Object(Y.jsx)(dn,{type:"radio",value:n.type,onChange:t,name:"sorting"},n.type),n.name]})}))})},un=t.p+"static/media/check.b3ce3c21.svg",pn=U.b.div(O||(O=Object(F.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 6px;\n  padding: 10px 0;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  background: #fff;\n"]))),fn=U.b.p(k||(k=Object(F.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin: 0;\n  padding: 10px 20px;\n"]))),gn=U.b.input(v||(v=Object(F.a)(["\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n"]))),hn=U.b.label(w||(w=Object(F.a)(['\n  display: inline-flex;\n  align-items: center;\n  user-select: none;\n  padding-top: 10px;\n  font-size: 13px;\n  cursor: pointer;\n  width: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  &:hover {\n    background: #f1fcff;\n  }\n  &:after,\n  &:before {\n    content: "";\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    border: 1px solid ',";\n    transition: all 2s ease;\n  }\n  &:after {\n    position: absolute;\n  }\n  &:before {\n    opacity: ",";\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 12px 8px;\n    transition: all 0.3s ease-in;\n  }\n"])),(function(n){return n.checked?"#2196f3":"#9ABBCE"}),(function(n){return n.checked?1:0}),(function(n){return n.checked?"url(".concat(un,")"):"none"})),xn=function(n){var e=n.filterList,t=n.filters,r=n.handleChange,i=n.handleAllChange;return Object(Y.jsxs)(pn,{children:[Object(Y.jsx)(fn,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(Y.jsxs)(hn,{checked:t.length===e.length,children:[Object(Y.jsx)(gn,{type:"checkbox",onChange:i,checked:t.length===e.length,name:"all"}),"\u0412\u0441\u0435"]}),Object(Y.jsx)("br",{}),e.map((function(n){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(hn,{checked:t.includes(n.number),children:[Object(Y.jsx)(gn,{type:"checkbox",onChange:r,checked:t.includes(n.number),name:n.number},n.number),n.name]}),Object(Y.jsx)("br",{})]})}))]})},jn=Object(U.a)(y||(y=Object(F.a)(['\n  body {\n    background-color: #f3f7fa;\n    font-family: "Open Sans", sans-serif;\n    color: #4A4A4A;\n  }\n']))),mn=U.b.div(C||(C=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),On=U.b.div(z||(z=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 754px;\n    flex-direction: row;\n  }\n"]))),kn=U.b.div(E||(E=Object(F.a)(["\n  width: 232px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n"]))),vn=U.b.div(S||(S=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 768px) {\n    width: 502px;\n  }\n"]))),wn=t.p+"static/media/Logo-aviasales.472c0451.svg";var yn=function(){var n=Object(A.useState)(""),e=Object(B.a)(n,2),t=e[0],r=e[1],i=Object(A.useState)([0,1,2,3]),a=Object(B.a)(i,2),c=a[0],s=a[1];return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(jn,{}),Object(Y.jsx)(mn,{children:Object(Y.jsx)("img",{src:wn,alt:"logo"})}),Object(Y.jsxs)(On,{children:[Object(Y.jsx)(kn,{children:Object(Y.jsx)(xn,{filters:c,filterList:[{name:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",number:0},{name:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",number:1},{name:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",number:2},{name:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",number:3}],handleChange:function(n){n.target.checked?s((function(e){return[].concat(Object(q.a)(e),[+n.target.name])})):s((function(e){return e.filter((function(e){return e!==+n.target.name}))}))},handleAllChange:function(n){n.target.checked?s([0,1,2,3]):s([])}})}),Object(Y.jsxs)(vn,{children:[Object(Y.jsx)(ln,{sorts:[{type:"cheap",name:"\u0421\u0410\u041c\u042b\u0419 \u0414\u0415\u0428\u0415\u0412\u042b\u0419"},{type:"fast",name:"\u0421\u0410\u041c\u042b\u0419 \u0411\u042b\u0421\u0422\u0420\u042b\u0419"},{type:"optimal",name:"\u041e\u041f\u0422\u0418\u041c\u0410\u041b\u042c\u041d\u042b\u0419"}],handleChange:function(n){r(n.target.value)},sorting:t}),Object(Y.jsx)(sn,{sorting:t,filters:c})]})]})]})},Cn=t(12),zn=t(21),En=t(22),Sn=t(5),An=1,Tn=2,In=3,Ln={ticketsList:[],request:0,error:null},qn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ln,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case G:return Object(Sn.a)(Object(Sn.a)({},n),{},{request:An});case K:return Object(Sn.a)(Object(Sn.a)({},n),{},{ticketsList:r,request:Tn,error:null});case M:return Object(Sn.a)(Object(Sn.a)({},n),{},{request:In,error:r});default:return n}},Bn=Object(Cn.createStore)(qn,Object(zn.composeWithDevTools)(Object(Cn.applyMiddleware)(En.a)));I.a.render(Object(Y.jsx)(L.a,{store:Bn,children:Object(Y.jsx)(yn,{})}),document.getElementById("app"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a8f3435d.chunk.js.map