(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{103:function(e,t,a){e.exports={container:"Footer_container__KIbON"}},104:function(e,t,a){e.exports={container:"Home_container__26db_",image:"Home_image__ppYeF"}},141:function(e,t,a){e.exports={container:"Charts_container__roks-"}},142:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3BKMg"}},143:function(e,t,a){e.exports=a.p+"static/media/covid19.d7265326.png"},144:function(e,t,a){e.exports=a.p+"static/media/undraw_wash_hands_nwl2.80d7cc00.svg"},145:function(e,t,a){e.exports=a.p+"static/media/undraw_social_distancing_2g0u.0ffc67ee.svg"},146:function(e,t,a){e.exports=a.p+"static/media/undraw_medical_research_qg4d.642ef1c7.svg"},149:function(e,t,a){e.exports=a(269)},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(135),o=a.n(c),l=a(77),s=a(78),i=a(86),u=a(84),d=a(99),m=a.n(d),p=a(90),f=a(21),h=a(287),v=a(292),E=a(288),y=a(289),b=a(87),_=a.n(b),g=a(55),w=a.n(g),C=a(88),x=a.n(C),S=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:w.a.container},r.a.createElement(h.a,{container:!0,justify:"center",spacing:3},r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:x()(w.a.card,w.a.infected)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(_.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString()," "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19"))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:x()(w.a.card,w.a.recovered)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(_.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString(),"  "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of recovered cases of COVID-19"))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:x()(w.a.card,w.a.deaths)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Death"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(_.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString(),"  "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of deaths due to COVID-19"))))):""},O=a(26),N=a.n(O),j=a(44),k=a(85),D=a(89),I=a.n(D),H="https://covid19.mathdro.id/api",T=function(){var e=Object(j.a)(N.a.mark((function e(t){var a,n,r,c,o,l,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=H,t&&(a="".concat(H,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(N.a.mark((function e(){var t,a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(H,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(j.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(H,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(101),W=a(141),q=a.n(W),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,l=e.country,s=Object(n.useState)([]),i=Object(k.a)(s,2),u=i[0],d=i[1];Object(n.useEffect)((function(){(function(){var e=Object(j.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=u.length?r.a.createElement(V.b,{data:{labels:u.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(83, 0, 191, 1)",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(191, 41, 0, 1)",fill:!0}]}}):null;console.log(a,c,o);var p=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(83, 0, 191, 1)","rgba(0, 191, 166, 1)","rgba(191, 41, 0, 1)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null;return r.a.createElement("div",{className:q.a.container},l?p:m)},R=a(293),z=a(291),F=a(142),J=a.n(F),U=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(R.a,{className:J.a.formControl},r.a.createElement(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Y=a(103),G=a.n(Y),K=function(){return r.a.createElement("div",{className:G.a.container},r.a.createElement("div",{className:G.a.content},r.a.createElement("p",null,"Stay Home. Stay Safe.")))},M=a(290),P=a(104),X=a.n(P),Q=a(143),Z=a.n(Q),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(j.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:X.a.container},r.a.createElement("img",{className:X.a.image,src:Z.a,alt:"Covid19"}),r.a.createElement(U,{handleCountryChange:this.handleCountryChange}),r.a.createElement(S,{data:t}),t?r.a.createElement(L,{data:t,country:a}):r.a.createElement(M.a,null),r.a.createElement(K,null))}}]),a}(n.Component),ee=a(46),te=a.n(ee),ae=a(144),ne=a.n(ae),re=a(145),ce=a.n(re),oe=a(146),le=a.n(oe);var se=function(){return r.a.createElement("div",{className:te.a.container},r.a.createElement("div",{className:te.a.contentContainerOdd},r.a.createElement("img",{src:ne.a,alt:"hand wash illustration",className:te.a.illustration}),r.a.createElement("section",{className:te.a.content},r.a.createElement("h3",null,"Wash your hands"),r.a.createElement("p",null,"Wash your hands with soap and running water when hands are visibly dirty"),r.a.createElement("p",null,"If your hands are not visible dirty, frequently clean them by using alcohol-based santizer or soap and water"))),r.a.createElement("div",{className:te.a.contentContainerEven},r.a.createElement("img",{src:ce.a,alt:"socialDistancing illustration",className:te.a.illustration}),r.a.createElement("section",{className:te.a.content},r.a.createElement("h3",null,"Social Distancing"),r.a.createElement("p",null,"Wash your hands with soap and running water when hands are visibly dirty"),r.a.createElement("p",null,"If your hands are not visible dirty, frequently clean them by using alcohol-based santizer or soap and water"))),r.a.createElement("div",{className:te.a.contentContainerOdd},r.a.createElement("img",{src:le.a,alt:"logo",className:te.a.illustration}),r.a.createElement("section",{className:te.a.content},r.a.createElement("h3",null,"medicalSupport"),r.a.createElement("p",null,"Wash your hands with soap and running water when hands are visibly dirty"),r.a.createElement("p",null,"If your hands are not visible dirty, frequently clean them by using alcohol-based santizer or soap and water"))))},ie=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:m.a.container},r.a.createElement("ul",{className:m.a.navigationLinks},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/staysafe"},"Stay Safe"))),r.a.createElement(f.a,{path:"/",exact:!0,component:$}),r.a.createElement(f.a,{path:"/staysafe",component:se})))}}]),a}(r.a.Component);o.a.render(r.a.createElement(ie,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"HowToStaySafe_container__1aTfA",contentContainerOdd:"HowToStaySafe_contentContainerOdd__1p_v0",contentContainerEven:"HowToStaySafe_contentContainerEven__1AjF2",content:"HowToStaySafe_content__3JtYv",illustration:"HowToStaySafe_illustration__259hT"}},55:function(e,t,a){e.exports={container:"Cards_container__3WjGI",card:"Cards_card__18fEy",infected:"Cards_infected__3dVXN",recovered:"Cards_recovered__1lI0g",deaths:"Cards_deaths__1Re3E"}},99:function(e,t,a){e.exports={container:"App_container__17ySC",navigationLinks:"App_navigationLinks__Rb2Yy"}}},[[149,1,2]]]);
//# sourceMappingURL=main.543682be.chunk.js.map