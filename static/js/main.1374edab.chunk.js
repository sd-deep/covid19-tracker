(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{127:function(e,t,a){e.exports={container:"Charts_container__roks-"}},128:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3BKMg"}},129:function(e,t,a){e.exports=a.p+"static/media/covid19.d7265326.png"},134:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(118),o=a.n(c),u=a(25),s=a.n(u),l=a(39),i=a(119),d=a(120),m=a(131),p=a(130),f=a(87),v=a.n(f),h=a(273),E=a(278),b=a(274),y=a(275),g=a(76),x=a.n(g),C=a(48),_=a.n(C),O=a(77),w=a.n(O),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(h.a,{container:!0,justify:"center",spacing:3},r.a.createElement(h.a,{item:!0,component:E.a,xs:12,md:3,className:w()(_.a.card,_.a.infected)},r.a.createElement(b.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString()," "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19"))),r.a.createElement(h.a,{item:!0,component:E.a,xs:12,md:3,className:w()(_.a.card,_.a.recovered)},r.a.createElement(b.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString(),"  "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of recovered cases of COVID-19"))),r.a.createElement(h.a,{item:!0,component:E.a,xs:12,md:3,className:w()(_.a.card,_.a.deaths)},r.a.createElement(b.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Death"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString(),"  "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of deaths due to COVID-19"))))):""},S=a(75),k=a(78),N=a.n(k),D="https://covid19.mathdro.id/api",I=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(89),R=a(127),U=a.n(R),G=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),d=Object(S.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(A.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(0, 0, 255, 0.5)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;console.log(a,c,o);var v=a?r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:U.a.container},u?v:f)},J=a(279),K=a(277),M=a(128),P=a.n(M),z=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(S.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(J.a,{className:P.a.formControl},r.a.createElement(K.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},F=a(91),H=a.n(F),L=function(){return r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.content},r.a.createElement("p",null,"Stay Home. Stay Safe.")))},W=a(276),X=a(129),q=a.n(X),Q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{className:v.a.image,src:q.a,alt:"Covid19"}),r.a.createElement(j,{data:t}),r.a.createElement(z,{handleCountryChange:this.handleCountryChange}),t?r.a.createElement(G,{data:t,country:a}):r.a.createElement(W.a,null),r.a.createElement(L,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"Cards_container__3WjGI",card:"Cards_card__18fEy",infected:"Cards_infected__3dVXN",recovered:"Cards_recovered__1lI0g",deaths:"Cards_deaths__1Re3E"}},87:function(e,t,a){e.exports={container:"App_container__17ySC",image:"App_image__Laz03"}},91:function(e,t,a){e.exports={container:"Footer_container__KIbON"}}},[[134,1,2]]]);
//# sourceMappingURL=main.1374edab.chunk.js.map