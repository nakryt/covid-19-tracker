(this["webpackJsonpcorvid-19-tracker"]=this["webpackJsonpcorvid-19-tracker"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c(0),s=c.n(r),a=c(7),o=c.n(a),i=(c(98),c(14)),l=c.n(i),u=c(26),d=c(11),j=(c(100),c(237)),f=c(238),b=(c(101),c(102),c(232)),h=c(243),p=c(244),v=function(e){var t=e.countries,c=e.setCountryIso2,r=e.countryIso2,s=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,c(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h2",{children:"COVID-19 TRACKER"}),Object(n.jsx)(b.a,{className:"app__dropdown",children:Object(n.jsxs)(h.a,{variant:"outlined",value:r,onChange:s,children:[Object(n.jsx)(p.a,{value:"worldwide",children:"Worldwide"}),t.map((function(e){var t=e.country,c=e.countryInfo.iso2;return Object(n.jsx)(p.a,{value:c,children:t},t)}))]})})]})},x=(c(106),c(236)),O=c(239),m={cases:{stroke:"#CC1034",fill:"rgba(264, 12, 47, 0.5)"},recovered:{stroke:"#7dd71d",fill:"rgba(125, 215, 29, 0.5)"},deaths:{stroke:"#500606",fill:"rgba(80, 6, 6, 0.4)"}},y=function(e){var t=e.title,c=e.cases,r=e.total,s=e.onClick,a=e.active,o=e.casesType;return Object(n.jsx)(x.a,{className:"infoBox ".concat(a?"infoBox--selected":""),onClick:s,style:{borderColor:m[o].stroke},children:Object(n.jsx)(j.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(O.a,{color:"textSecondary",className:"infoBox__title",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases",style:{color:"recovered"===t?m.recovered.stroke:"deaths"===t?m.deaths.stroke:m.cases.stroke},children:c}),Object(n.jsxs)(O.a,{color:"textSecondary",className:"infoBox__total",children:[r," Total"]})]})})})},k=(c(107),c(242)),g=c(240),C=c(245),w=function(e){var t=e.center,c=t.lat,r=t.lng,s=e.zoom;return Object(g.a)().setView([c,r],s),Object(n.jsx)(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})},N=c(16),I=c.n(N),_=c(246),S=c(241),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",c=[],n=0;for(var r in e[t]){if(n){var s={x:r,y:e[t][r]-n};c.push(s)}n=e[t][r]}return c},B={cases:{hex:"#CC1034",multiplier:250},recovered:{hex:"#7dd71d",multiplier:150},deaths:{hex:"#920303",multiplier:300}},z=function(e,t){return e.map((function(e){return Object(n.jsx)(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:B[t].hex,fillColor:B[t].hex},radius:Math.sqrt(e[t])*B[t].multiplier,children:Object(n.jsx)(S.a,{autoClose:!0,children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",I()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",I()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",I()(e.deaths).format("0,0")]})]})})},e.country)}))},D=function(e){return e?"+".concat(I()(e).format("0.0a")):"+0"},E=function(e){var t=e.countries,c=e.center,r=e.zoom,s=e.casesType;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(k.a,{attributionControl:!0,center:c,zoom:r,closePopupOnClick:!0,children:[Object(n.jsx)(w,{center:c,zoom:r}),z(t,s)]})})},F=(c(108),function(e){var t,c=e.countries,r=e.setCountryIso2,s=e.countryIso2;return Object(n.jsx)("div",{className:"table",children:Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:(t=c,t.slice().sort((function(e,t){return t.cases-e.cases}))).map((function(e,t){var c=e.country,a=e.cases,o=e.countryInfo.iso2;return Object(n.jsxs)("tr",{onClick:function(){return r(o)},style:{backgroundColor:s===o?m.recovered.fill:void 0},children:[Object(n.jsxs)("td",{children:[Object(n.jsx)("span",{children:t+1}),c]}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:I()(a).format("0,0")})})]},c)}))})})})}),L=(c(109),c(86)),M={legend:!1,elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return I()(e.value).format("+0.0")}}},scales:{xAxes:[{type:"time",time:{tooltipFormat:"ll",parser:"MM/DD/YY"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e){return I()(e).format("0a")}}}]}},R=function(e){var t=e.casesType,c=Object(r.useState)({}),s=Object(d.a)(c,2),a=s[0],o=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:n=e.sent,o(T(n,t));case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsxs)("div",{className:"lineGraph",children:[Object(n.jsxs)("h3",{className:"lineGraph__title",children:["Worldwide new ",t]}),Object.keys(a).length>0?Object(n.jsx)(L.Line,{data:{datasets:[{data:a,backgroundColor:m[t].fill,borderColor:m[t].stroke}]},options:M}):null]})},A={lat:49,lng:16};var P=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)({}),o=Object(d.a)(a,2),i=o[0],b=o[1],h=Object(r.useState)(A),p=Object(d.a)(h,2),x=p[0],O=p[1],m=Object(r.useState)(3),k=Object(d.a)(m,2),g=k[0],C=k[1],w=Object(r.useState)("worldwide"),N=Object(d.a)(w,2),I=N[0],_=N[1],S=Object(r.useState)("cases"),T=Object(d.a)(S,2),B=T[0],z=T[1];Object(r.useEffect)((function(){var e=!1;return e||function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all");case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:c=e.sent,b(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!0}}),[]),Object(r.useEffect)((function(){var e=!1;return e||function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://disease.sh/v3/covid-19/countries");case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:c=e.sent,s(c);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()(),function(){e=!0}}),[s]),Object(r.useEffect)((function(){if("worldwide"===I)O(A),C(3);else{var e=c.find((function(e){return e.countryInfo.iso2===I}));if(e){var t=e.countryInfo,n=t.lat,r=t.long;b(e),O({lat:n,lng:r}),C(4)}}}),[I,b,O,c]);var L=i.todayCases,M=i.todayRecovered,P=i.todayDeaths,G=i.cases,J=i.recovered,V=i.deaths;return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsx)(v,{countries:c,setCountryIso2:_,countryIso2:I}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(y,{onClick:function(){return z("cases")},title:"coronavirus cases",cases:D(L),total:D(G),active:"cases"===B,casesType:B}),Object(n.jsx)(y,{onClick:function(){return z("recovered")},title:"recovered",cases:D(M),total:D(J),active:"recovered"===B,casesType:B}),Object(n.jsx)(y,{onClick:function(){return z("deaths")},title:"deaths",cases:D(P),total:D(V),active:"deaths"===B,casesType:B})]}),Object(n.jsx)(E,{center:x,zoom:g,countries:c,casesType:B})]}),Object(n.jsx)(j.a,{className:"app__right",children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)("h3",{children:"Live Cases By Country"}),Object(n.jsx)(F,{countries:c,setCountryIso2:_,countryIso2:I}),Object(n.jsx)(R,{casesType:B})]})})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,248)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),G()},98:function(e,t,c){}},[[206,1,2]]]);
//# sourceMappingURL=main.8697bf59.chunk.js.map