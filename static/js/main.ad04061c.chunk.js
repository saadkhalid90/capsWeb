(this.webpackJsonpcaps=this.webpackJsonpcaps||[]).push([[0],{110:function(t,e,n){},111:function(t,e,n){},114:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),a=n(38),s=n.n(a),r=(n(110),n.p,n(111),n(5)),i=n(1),u=n(39);var d=n.p+"static/media/networkLocs.66da00cd.csv",h=i.c().center([90,37]).scale(525),l=i.d(h);var f=n(0),j=i.f().curve(i.b);function p(t){var e=t.svgWidth,n=t.svgHeight,o=t.mapStyles,a=t.landkey,s=t.geoPath,l=function(){var t=Object(c.useState)(null),e=Object(r.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){Object(i.e)("https://gist.githubusercontent.com/saadkhalid90/c4dfdd91da09351bbfe6822d94952f8d/raw/68c0e21dd9dc399b4161b9e16839efb4a890d6de/CapsAsiaDis.json").then((function(t){return o(function(t,e,n){return e(t,t.objects[n])}(t,u.a,"CapsAsiaDis"))}))}),[]),n}(),p=function(){var t=Object(c.useState)(null),e=Object(r.a)(t,2),n=e[0],o=e[1];function a(t){var e=h([+t.Lon,+t.Lat]),n=h([+t.cLon,+t.cLat]),c=h([+t.sLon,+t.sLat]);return t.x=e[0],t.y=e[1],t.cx=n[0],t.cy=n[1],t.sx=c[0],t.sy=c[1],t}return Object(c.useEffect)((function(){i.a(d,a).then(o)}),[]),n}(),b=Object(c.useState)(!1),g=Object(r.a)(b,2),x=g[0],y=g[1];return Object(c.useEffect)((function(){p&&(i.h("path.connLines").data(p).each((function(t,e){var n=i.g(this).node().getTotalLength();t.totLen=n})),i.h("text").data(p),i.h("path.connLines").attr("stroke-dasharray",(function(t){return t.totLen+" "+t.totLen})).attr("stroke-dashoffset",(function(t){return t.totLen})))}),[p]),Object(c.useEffect)((function(){x?(i.h("path.connLines").transition().duration(2500).attr("stroke-dashoffset",0),i.h("text").transition().duration(2500).attr("fill-opacity",1)):(i.h("path.connLines").interrupt().attr("stroke-dasharray",(function(t){return t.totLen+" "+t.totLen})).attr("stroke-dashoffset",(function(t){return t.totLen})),i.h("text").interrupt().attr("fill-opacity",(function(t){return"Hong Kong"==t.Economy?1:0})))}),[x]),!l|!p?Object(f.jsx)("div",{className:"vizContain",children:Object(f.jsx)("pre",{children:"Loading . . ."})}):Object(f.jsxs)("div",{className:"vizContain",children:[Object(f.jsx)("div",{className:"buttonDiv",children:Object(f.jsx)("button",{type:"button",onClick:function(t){return y(!x)},children:x?"Stop Trigger":"Start Trigger"})}),Object(f.jsxs)("svg",{width:e,height:n,children:[Object(f.jsx)("g",{className:"mapGrp",children:l.features.map((function(t){return Object(f.jsx)("path",{style:o,d:s(t)},a)}))}),Object(f.jsx)("g",{className:"networkGrp",children:p.map((function(t){return Object(f.jsxs)("g",{className:"locGrp",children:[Object(f.jsx)("circle",{cx:t.x,cy:t.y,r:"Hong Kong"==t.Economy?25:10,fill:"#172F58"}),Object(f.jsx)("text",{x:t.x,y:t.y,dy:"Hong Kong"==t.Economy?37:20,fill:"#172F58",fillOpacity:"Hong Kong"==t.Economy?1:0,textAnchor:"middle",fontSize:"Hong Kong"==t.Economy?"14px":"11px",children:t.Economy}),Object(f.jsx)("path",{className:"connLines",d:j([[t.sx,t.sy],[t.cx,t.cy],[t.x,t.y]]),strokeWidth:"3px",stroke:"#172F58",fill:"none",strokeOpacity:.05,strokeLinecap:"round"})]},t.Economy)}))})]})]})}var b={fill:"lightgrey",fillOpacity:"1",stroke:"darkgrey",strokeWidth:"1px",strokeOpacity:"0.0"};var g=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(p,{svgWidth:1200,svgHeight:800,mapStyles:b,landkey:"capsAsiaMap",geoPath:l})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))};s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),x()}},[[114,1,2]]]);
//# sourceMappingURL=main.ad04061c.chunk.js.map