(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[65],{23:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return d}));var a=n(4),r=n(12),c=n(13),i=n(8),s=n(3),l=n(1),o=(n(9),function(e,t,n){return Object.keys(e).reduce((function(a,r){return Object(l.a)({},a,Object(s.a)({},r,e[r].children.reduce((function(a,c){return Object(l.a)({},a,Object(s.a)({},c,1+t(e,c)+n(e,r)))}),{})))}),{})}),u=function e(t,n,a){if(t===n)return{len:0,nodes:[t]};var r=[],c=[];Object.keys(a[t]).forEach((function(i){var s=e(i,n,a);s.len<0||(r.push(a[t][i]+s.len),s.nodes.unshift(t),c.push(s.nodes))}));var i=Math.max.apply(Math,r);return{len:i,nodes:c[r.indexOf(i)]}},m=function(e,t,n){var a=u("linestart","lineend",t);if(a.nodes.includes(e))return u(a.nodes[1],e,t).len;for(var r=n.filter((function(t){return t.includes(e)}))[0],c=e;!a.nodes.includes(c);)c=r[r.indexOf(c)-1];for(var i=e;!a.nodes.includes(i);)i=r[r.indexOf(i)+1];var s="linestart"===c,l=[];return s||"lineend"===i?s?(l[0]=0,l[1]=u(a.nodes[1],i,t).len,l[2]=u(r[1],e,t).len,l[3]=u(e,i,t).len):(l[0]=u(a.nodes[1],c,t).len,l[1]=u(c,a.nodes.slice(-2)[0],t).len,l[2]=u(c,e,t).len,l[3]=u(e,r.slice(-2)[0],t).len):(l[0]=u(a.nodes[1],c,t).len,l[1]=u(c,i,t).len,l[2]=u(c,e,t).len,l[3]=u(e,i,t).len),l[0]+l[2]*l[1]/(l[2]+l[3])},f=function(e,t,n){var a;return console.log("computing stations' states"),Object(i.a)(new Set((a=[]).concat.apply(a,Object(i.a)(t)))).reduce((function(a,r){return Object(l.a)({},a,Object(s.a)({},r,r===e?0:("r"===n?function(e,t,n){var a=!0,r=!1,c=void 0;try{for(var i,s=n[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var l=i.value,o=l.indexOf(e),u=l.indexOf(t);if(-1!==o&&o<u)return!0}}catch(m){r=!0,c=m}finally{try{a||null==s.return||s.return()}finally{if(r)throw c}}return!1}(e,r,t):function(e,t,n){var a=!0,r=!1,c=void 0;try{for(var i,s=n[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var l=i.value,o=l.indexOf(e),u=l.indexOf(t);if(-1!==u&&u<o)return!0}}catch(m){r=!0,c=m}finally{try{a||null==s.return||s.return()}finally{if(r)throw c}}return!1}(e,r,t))?1:-1))}),{})},h=function(){function e(t){var n=this;Object(r.a)(this,e),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(e){return 0},this.rightWideFactor=function(e){return 0},this.pathWeight=function(e,t){return n.stnList[e].children.includes(t)?1+n.rightWideFactor(e)+n.leftWideFactor(t):-1/0},this.pathTurnParams=function(e){var t=35-17.5*Math.sqrt(3),n=e-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(e){var t=n.pathTurnParams(e),a=t.tr,r=t.dx_a,c=t.dy_a,i=t.dx_l,s=t.dy_l;return"a ".concat(a,",").concat(a," 0 0,1 ").concat(r,",").concat(c," l ").concat(i,",").concat(s," a ").concat(a,",").concat(a," 0 0,0 ").concat(r,",").concat(c)},this.pathTurnNE=function(e){var t=n.pathTurnParams(e),a=t.tr,r=t.dx_a,c=t.dy_a,i=t.dx_l,s=t.dy_l;return"a ".concat(a,",").concat(a," 0 0,0 ").concat(r,",").concat(-c," l ").concat(i,",").concat(-s," a ").concat(a,",").concat(a," 0 0,1 ").concat(r,",").concat(-c)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return Object(c.a)(e,[{key:"getYShare",value:function(e,t){if(e in this.yShares)return this.yShares[e];if(["linestart","lineend"].includes(e)||this.stnList[e].parents.length>1||this.stnList[e].children.length>1)return this.yShares[e]=0,0;var n=this.stnList[e].parents[0];if(n){if(1===this.stnList[n].children.length){var a=this.getYShare(n);return this.yShares[e]=a,a}var r=0===this.stnList[n].children.indexOf(e)?1:-1;return this.yShares[e]=r,r}return this.yShares[e]=0,0}},{key:"_linePath",value:function(e,t,n,r,c,i,s){var l=this,o=Object(a.a)([],3),u=o[0],m=o[1],f=o[2],h=[],d=this.pathTurnParams(i),g=d.dx_a+d.dx_l/2,p=(t[1]-t[0])/s.len*.8,b=((t[1]-t[0])/s.len-2*g)/2;return b+p<0&&console.warn("SVG width too small! ".concat(b+p)),e.forEach((function(t){var a=r[t],s=c[t];if(!m&&0!==m)return u=t,f=a,m=s,void(1===e.length?h.push("M ".concat(a,",").concat(s)):n[0].includes(t)?n[0].includes(e[1])?h.push("M ".concat(a,",").concat(s)):(r[e[1]]>0&&h.push("M ".concat(a,",").concat(s+9.68)),c[e[1]]<0&&h.push("M ".concat(a,",").concat(s-9.68))):h.push("M ".concat(a,",").concat(s)));s>m?(h.push("h ".concat(0===s?a-f-p*l.leftWideFactor(t)-b-2*g:p*l.rightWideFactor(u)+b)),h.push(l.pathTurnSE(i))):s<m&&(h.push("h ".concat(0===s?a-f-p*l.leftWideFactor(t)-b-2*g:p*l.rightWideFactor(u)+b)),h.push(l.pathTurnNE(i))),h.push("H ".concat(a)),u=t,f=a,m=s})),h.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(e,t){console.log("computing y shares");var n=new this({stnList:e});return Object.keys(e).forEach((function(e){["linestart","lineend"].includes(e)||e in n.yShares||n.getYShare(e,t)})),n.yShares}},{key:"drawLine",value:function(e,t,n,a,r,c,i,s){var l=this,o={main:[],pass:[]};return e.forEach((function(u,m){var f=(u=u.filter((function(e){return!["linestart","lineend"].includes(e)}))).filter((function(e){return t[e]>=0})),h=u.filter((function(e){return t[e]<=0}));1===f.length&&(h=u),0===f.filter((function(e){return-1!==h.indexOf(e)})).length&&f.length&&(h[0]===u[0]?h.push(f[0]):f[0]===u[0]&&f[f.length-1]===u[u.length-1]&&h.length?(h=u,f=[]):h.unshift(f[f.length-1])),o.main.push(new l({stnList:n,criticalPath:s})._linePath(f,a,e,r,c,i,s)),o.pass.push(new l({stnList:n,criticalPath:s})._linePath(h,a,e,r,c,i,s))})),o}}]),e}(),d=function(e,t){var n={main:[],pass:[]};return e.forEach((function(e){var a=(e=e.filter((function(e){return!["linestart","lineend"].includes(e)}))).filter((function(e){return t[e]>=0})),r=e.filter((function(e){return t[e]<=0}));1===a.length&&(r=e),0===a.filter((function(e){return-1!==r.indexOf(e)})).length&&a.length&&(r[0]===e[0]?r.push(a[0]):a[0]===e[0]&&a[a.length-1]===e[e.length-1]&&r.length?(r=e,a=[]):r.unshift(a[a.length-1])),n.main.push(a),n.pass.push(r)})),n}},48:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=function(e){switch(e){case"gz28":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(e.variant),n=c.a.useMemo((function(){switch(e.variant){case"gz1":return c.a.createElement("circle",{cy:-58,r:16,fill:"red"});case"gz28":return c.a.createElement("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return c.a.createElement("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return c.a.createElement("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return c.a.createElement("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return c.a.createElement("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return c.a.createElement("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return c.a.createElement("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return c.a.createElement(c.a.Fragment,null)}}),[e.variant]);return c.a.createElement("g",{transform:"translate(0,".concat("gz4"===e.variant?-20:0,")")},c.a.createElement("rect",{id:"strip_gz",style:Object(a.a)({},"--height","".concat(t,"px"))}),c.a.createElement("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"}},e.isShowLight&&n),e.isShowPSD&&c.a.createElement(i,e))};var i=c.a.memo((function(e){var t,n=["gz28","gz6","gzgf"].includes(e.variant),r=function(e){switch(e){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(e.variant);return c.a.createElement("g",{textAnchor:"middle",fill:n?"#000":"var(--rmg-theme-fg)",style:(t={},Object(a.a)(t,"--psd-dy",r),Object(a.a)(t,"transform","translate(var(--translate-x), var(--translate-y))"),Object(a.a)(t,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(a.a)(t,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),t)},c.a.createElement("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),c.a.createElement("text",{className:"rmg-name__en",fontSize:20,dy:12},e.isShowPSD),c.a.createElement("text",{className:"rmg-name__zh",fontSize:12,dy:26},"\u5c4f\u853d\u95e8"),c.a.createElement("text",{className:"rmg-name__en",fontSize:6.5,dy:36},"Screen Door"))}),(function(e,t){return e.variant===t.variant&&e.isShowPSD===t.isShowPSD}))},49:function(e,t,n){"use strict";var a=n(4),r=n(23),c=n(0),i=n.n(c);t.a=function(e){var t=e.lineNum,n=e.stnNum,c=Object(r.a)(e,["lineNum","stnNum"]),s=i.a.useRef(null),l=i.a.useState({width:15.03125}),o=Object(a.a)(l,2),u=o[0],m=o[1];i.a.useEffect((function(){return m(s.current.getBBox())}),[t]);var f=u.width>15.03125?15.03125/u.width:1,h=2===t.length?f:1;return i.a.createElement("g",Object.assign({textAnchor:"middle",fontSize:13.5},c),i.a.useMemo((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("g",{transform:"translate(-9.25,0)scale(".concat(f,")")},i.a.createElement("text",{ref:s,className:"rmg-name__zh"},t)),i.a.createElement("g",{transform:"translate(9.25,0)scale(".concat(h,")")},i.a.createElement("text",{className:"rmg-name__zh"},n)))}),[u.width,t,n]))}},96:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(23),c=n(3),i=n(8),s=n(0),l=n.n(s),o=n(5),u=n(48),m=n(1),f=n(49),h=Object(s.memo)((function(e){return l.a.createElement("g",{textAnchor:"middle",fill:-1===e.stnState?"#fff":e.info[3]},l.a.createElement("use",{xlinkHref:"#intbox",fill:-1===e.stnState?"#aaa":e.info[2]}),e.info[4][0]===e.info[5][0]?l.a.createElement(g,{name:e.info.slice(-2)}):l.a.createElement(d,{name:e.info.slice(-2)}))}),(function(e,t){return e.info.toString()===t.info.toString()&&e.stnState===t.stnState})),d=Object(s.memo)((function(e){var t,n=[],r=0;null===(t=e.name[0].match(/\d+|\D+/g))||void 0===t||t.forEach((function(e,t){isNaN(Number(e))?(n.push(l.a.createElement("tspan",{key:t,dominantBaseline:"hanging",dy:1-r},e)),r+=1-r):(n.push(l.a.createElement("tspan",{key:t,dominantBaseline:"hanging",fontSize:16,dy:-r},e)),r=0)}));var c=Object(s.useRef)(null),i=Object(s.useState)({width:0}),o=Object(a.a)(i,2),u=o[0],m=o[1];Object(s.useEffect)((function(){return m(c.current.getBBox())}),[e.name[0]]);var f=u.width>43.5?43.5/u.width:1,h=Object(s.useRef)(null),d=Object(s.useState)({width:0}),g=Object(a.a)(d,2),p=g[0],b=g[1];Object(s.useEffect)((function(){return b(h.current.getBBox())}),[e.name[1]]);var E=p.width>43.5?43.5/p.width:1;return l.a.createElement(l.a.Fragment,null,l.a.createElement("text",{ref:c,y:2,className:"rmg-name__zh",fontSize:12,transform:"scale(".concat(f,",1)")},n),l.a.createElement("text",{ref:h,y:19.5,fontSize:e.name[1].replace("\\"," ").length>10?7:8,className:"rmg-name__en",transform:"scale(".concat(E,",1)")},e.name[1]))}),(function(e,t){return e.name.toString()===t.name.toString()})),g=Object(s.memo)((function(e){var t="";for(var n in Object(i.a)(e.name[0])){if(e.name[0][n]!==e.name[1][n])break;t+=e.name[0][n]}var r=Object(s.useRef)(null),c=Object(s.useState)({x:0,width:0}),o=Object(a.a)(c,2),u=o[0],m=o[1];Object(s.useEffect)((function(){return m(r.current.getBBox())}),[e.name.toString()]);var f=u.width>43.5?43.5/u.width:1;return l.a.createElement("g",{transform:"scale(".concat(f,",1)")},l.a.createElement("g",{transform:"translate(".concat(-u.x-u.width/2,",0)")},l.a.createElement("text",{ref:r,className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end"},t,l.a.createElement("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start"},e.name[0].slice(t.length)),l.a.createElement("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start"},e.name[1].slice(t.length).trim()))))}),(function(e,t){return e.name.toString()===t.name.toString()})),p=function(e){var t=Object(s.useContext)(o.b).param,n=t.stn_list[e.stnId],a=2===n.parents.length||2===n.children.length,r=e.stnY>0||1===n.parents.indexOf(n.branch.left[1]||"")||1===n.children.indexOf(n.branch.right[1]||"")?180:0,c=n.name[1].split("\\").length,i=a?180===r?16+12*(c-1)*Math.cos(-45):-9:180===r?-6:(25+15*(c-1))*Math.cos(-45);return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{intInfos:a?[[t.theme[0],t.theme[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)",t.line_name[0],t.line_name[1]]].concat(n.transfer.info[0]):n.transfer.info[0],stnState:e.stnState,tickRotation:r}),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#stn",stroke:-1===e.stnState?"#aaa":"var(--rmg-theme-colour)"}),l.a.createElement(f.a,{className:"Name ".concat(-1===e.stnState?"Pass":"Future"),lineNum:t.line_num,stnNum:n.num})),l.a.createElement("g",{transform:"translate(".concat(-i,",0)")},l.a.createElement(b,{name:n.name,stnState:e.stnState,tickRotation:r,isExpress:n.services.includes("express")})))},b=function(e){var t=180===e.tickRotation?17.5:-20-14*e.name[1].split("\\").length*Math.cos(-45),n=Object(s.useRef)(null),r=Object(s.useState)({width:0}),c=Object(a.a)(r,2),i=c[0],o=c[1];return Object(s.useEffect)((function(){return o(n.current.getBBox())}),[e.name.toString()]),l.a.createElement("g",{textAnchor:180===e.tickRotation?"end":"start",className:"Name ".concat(-1===e.stnState?"Pass":0===e.stnState?"CurrentGZ":"Future"),transform:"translate(0,".concat(t,")rotate(-45)")},l.a.createElement(E,{ref:n,name:e.name}),e.isExpress&&l.a.createElement(O,{fill:-1===e.stnState?"#aaa":"var(--rmg-theme-colour)",transform:"translate(".concat((i.width+35)*(180===e.tickRotation?-1:1),",").concat(2+5*(e.name[1].split("\\").length-1),")")}))},E=l.a.forwardRef((function(e,t){return Object(s.useMemo)((function(){return l.a.createElement("g",{ref:t},l.a.createElement("text",{className:"rmg-name__zh",fontSize:18},e.name[0]),l.a.createElement("g",{fontSize:10.5},e.name[1].split("\\").map((function(e,t){return l.a.createElement("text",{key:t,className:"rmg-name__en",dy:16+11*t},e)}))))}),[e.name[0],e.name[1]])})),O=l.a.memo((function(e){return l.a.createElement("g",Object.assign({textAnchor:"middle"},e),l.a.createElement("text",{className:"rmg-name__zh",fontSize:13},"\u5feb\u8f66\u505c\u9760\u7ad9"),l.a.createElement("text",{dy:10,className:"rmg-name__en",fontSize:6.5},"Express Station"))})),x=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,Object.assign({strokeWidth:4},e)),l.a.createElement(v,Object.assign({transform:"translate(0,".concat(180===e.tickRotation?-47:23,")")},e)))},y=function(e){var t=e.intInfos,n=e.stnState,a=e.tickRotation,c=Object(r.a)(e,["intInfos","stnState","tickRotation"]);return l.a.createElement("g",c,t.map((function(e,r){return l.a.createElement("use",{key:r,xlinkHref:"#inttick",stroke:-1===n?"#aaa":e[2],transform:"translate(".concat(-2*(t.length-1)+4*r,",0)rotate(").concat(180===a?180:0,")")})})))},v=function(e){var t=e.intInfos,n=e.tickRotation,a=e.stnState,c=Object(r.a)(e,["intInfos","tickRotation","stnState"]);return l.a.createElement("g",c,t.map((function(e,t){return l.a.createElement("g",{key:t,transform:"translate(0,".concat(28*t*(180===n?-1:1),")")},l.a.createElement(h,{info:e,stnState:a}))})))},j=n(24),S=function(e,t){return 2===e[t].parents.length||2===e[t].children.length?.25:0},_=function(){var e,t=l.a.useContext(o.b),n=t.param,a=t.branches,r=t.routes,i=t.deps,u=Object(j.b)(n.stn_list,S,S),f=Object(s.useMemo)((function(){return console.log("computing x shares"),Object.keys(n.stn_list).reduce((function(e,t){return Object(m.a)({},e,Object(c.a)({},t,function(e,t,n){var a=Object(j.c)("linestart","lineend",t);if(a.nodes.includes(e))return Object(j.c)(a.nodes[1],e,t).len;for(var r=n.filter((function(t){return t.includes(e)}))[0],c=e;!a.nodes.includes(c);)c=r[r.indexOf(c)-1];for(var i=e;!a.nodes.includes(i);)i=r[r.indexOf(i)+1];var s="linestart"===c,l="lineend"===i;if(r.toString()===n[0].toString()){var o=[];return s||l?s?(o[0]=0,o[1]=Object(j.c)(a.nodes[1],i,t).len,o[2]=Object(j.c)(r[1],e,t).len,o[3]=Object(j.c)(e,i,t).len):(o[0]=Object(j.c)(a.nodes[1],c,t).len,o[1]=Object(j.c)(c,a.nodes.slice(-2)[0],t).len,o[2]=Object(j.c)(c,e,t).len,o[3]=Object(j.c)(e,r.slice(-2)[0],t).len):(o[0]=Object(j.c)(a.nodes[1],c,t).len,o[1]=Object(j.c)(c,i,t).len,o[2]=Object(j.c)(c,e,t).len,o[3]=Object(j.c)(e,i,t).len),o[0]+o[2]*o[1]/(o[2]+o[3])}if(s||l)return s?Object(j.c)(a.nodes[1],i,t).len-Object(j.c)(e,i,t).len:Object(j.c)(a.nodes[1],c,t).len+Object(j.c)(c,e,t).len;var u=[];return u[0]=Object(j.c)(a.nodes[1],c,t).len,u[1]=Object(j.c)(c,i,t).len,u[2]=Object(j.c)(c,e,t).len,u[3]=Object(j.c)(e,i,t).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(t,u,a)))}),{})}),[a.toString(),JSON.stringify(u)]),d=Object(j.c)("linestart","lineend",u),g=Object(j.c)(d.nodes[1],d.nodes.slice(-2)[0],u),p="r"===n.direction?[n.svgWidth.railmap*n.padding/100+65,n.svgWidth.railmap*(1-n.padding/100)-20]:[n.svgWidth.railmap*n.padding/100,n.svgWidth.railmap*(1-n.padding/100)-65],b=Object.keys(f).reduce((function(e,t){return Object(m.a)({},e,Object(c.a)({},t,p[0]+f[t]/g.len*(p[1]-p[0])))}),{}),E=Object(s.useMemo)((function(){return console.log("computing y shares"),Object.keys(n.stn_list).reduce((function(e,t){if(a[0].includes(t))return Object(m.a)({},e,Object(c.a)({},t,0));var r=a.slice(1).filter((function(e){return e.includes(t)}))[0];return Object(m.a)({},e,Object(c.a)({},t,n.stn_list[r[0]].children.indexOf(r[1])?-2:2))}),{})}),[i]),O=Object.keys(E).reduce((function(e,t){return Object(m.a)({},e,Object(c.a)({},t,-E[t]*n.branch_spacing))}),{}),x=Object(s.useMemo)((function(){return Object(j.e)(n.current_stn_idx,r,n.direction)}),[n.current_stn_idx,n.direction,r.toString()]),y=Object(j.d)(a,x),v=Object.keys(y).reduce((function(e,t){return Object(m.a)({},e,Object(c.a)({},t,y[t].map((function(e){return k(e,b,O)}))))}),{});return l.a.createElement("g",{id:"main",style:(e={},Object(c.a)(e,"--y-percentage",n.y_pc),Object(c.a)(e,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),e)},l.a.createElement(z,{paths:v}),l.a.createElement(w,{xs:b,ys:O,stnStates:x}),l.a.createElement("g",{id:"line_name",style:Object(c.a)({},"--translate-x","r"===n.direction?"".concat(p[0]-65,"px"):"".concat(p[1]+65,"px"))},l.a.createElement(h,{info:Array(2).concat(["var(--rmg-theme-colour)","var(--rmg-theme-fg)"],n.line_name),stnState:1})))},z=l.a.memo((function(e){return l.a.createElement("g",{fill:"none",strokeWidth:4},l.a.createElement("g",{stroke:"#aaa",strokeDasharray:4},e.paths.pass.map((function(e,t){return l.a.createElement("path",{key:t,d:e})}))),l.a.createElement("g",{stroke:"var(--rmg-theme-colour)"},e.paths.main.map((function(e,t){return l.a.createElement("path",{key:t,d:e})}))))}),(function(e,t){return JSON.stringify(e.paths)===JSON.stringify(t.paths)})),k=function(e,t,n){var a,r=[];return e.forEach((function(e){var c=t[e],i=n[e];if(!a&&0!==a)return a=i,void r.push("M ".concat(c,",").concat(i));0===i?(i<a&&r.push("H ".concat(c-40),"a 40,40 0 0,0 40,-40","V ".concat(i)),i>a&&r.push("H ".concat(c-40),"a 40,40 0 0,1 40,40","V ".concat(i))):(i<a&&r.push("V ".concat(i+40),"a 40,40 0 0,1 40,-40","H ".concat(c)),i>a&&r.push("V ".concat(i-40),"a 40,40 0 0,0 40,40","H ".concat(c))),r.push("H ".concat(c)),a=i})),r.join(" ").replace(/( H ([\d.]+))+/g," H $2")},w=function(e){var t=l.a.useContext(o.b).param;return l.a.createElement("g",{id:"stn_icons"},Object.keys(t.stn_list).filter((function(e){return!["linestart","lineend"].includes(e)})).map((function(t){return l.a.createElement("g",{key:t,style:{transform:"translate(".concat(e.xs[t],"px,").concat(e.ys[t],"px)")}},l.a.createElement(p,{stnId:t,stnState:e.stnStates[t],stnY:e.ys[t]}))})))},N=(t.default=function(){var e=s.useContext(o.b).param;return s.createElement(s.Fragment,null,s.createElement(N,null),s.createElement(u.a,{variant:e.info_panel_type,isShowLight:!1,isShowPSD:!1}),"l"===e.direction&&e.stn_list[e.current_stn_idx].parents.includes("linestart")||"r"===e.direction&&e.stn_list[e.current_stn_idx].children.includes("lineend")?s.createElement(L,null):s.createElement(s.Fragment,null,s.createElement(_,null),s.createElement(M,null),e.notesGZMTR.map((function(e,t){return s.createElement(F,{key:t,note:e})}))))},s.memo((function(){return s.createElement("defs",null,s.createElement("path",{id:"stn",className:"rmg-stn",d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),s.createElement("path",{id:"stn_pass",stroke:"#aaa",fill:"#fff",strokeWidth:2,d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),s.createElement("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),s.createElement("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"}),s.createElement("rect",{id:"intbox",x:-22.5,height:24,width:45,rx:4.5}))}))),M=function(){var e,t=s.useContext(o.b),n=t.param,a=t.routes,r=s.useMemo((function(){return Object(i.a)(new Set(a.reduce((function(e,t){return t.includes(n.current_stn_idx)?e.concat(t.filter((function(e){return!["linestart","lineend"].includes(e)})).slice("l"===n.direction?0:-1)[0]):e}),[])))}),[n.current_stn_idx,n.direction,a.toString()]),l={textAnchor:"l"===n.direction?"start":"end",transform:"translate(".concat("l"===n.direction?65:-65,",-5)"),destIds:r};return s.createElement("g",{id:"direction_gz",style:(e={},Object(c.a)(e,"--x-percentage",n.direction_gz_x),Object(c.a)(e,"--y-percentage",n.direction_gz_y),e)},s.createElement("use",{xlinkHref:"#arrow_direction",style:Object(c.a)({},"--rotate","l"===n.direction?"0deg":"180deg")}),2!==r.length?s.createElement(P,l):s.createElement(H,l))},P=function(e){var t=e.destIds,n=Object(r.a)(e,["destIds"]),a=s.useContext(o.b).param;return s.createElement("g",n,s.createElement("text",{className:"rmg-name__zh",fontSize:28},t.map((function(e){return a.stn_list[e].name[0]})).join("/")+"\u65b9\u5411"),s.createElement("text",{className:"rmg-name__en",fontSize:14,dy:22},"Towards "+t.map((function(e){return a.stn_list[e].name[1].replace("\\"," ")})).join("/")))},H=function(e){var t=e.destIds,n=Object(r.a)(e,["destIds"]),a=s.useContext(o.b).param,c=t.map((function(e){return a.stn_list[e].name[0].length})),l=Math.min.apply(Math,Object(i.a)(c)),u=l>1&&c[0]!==c[1]?Math.abs(c[0]-c[1])/(l-1):0;return s.createElement("g",n,t.map((function(e,t){return s.createElement(s.Fragment,{key:e},s.createElement("text",{className:"rmg-name__zh",fontSize:25,x:"l"===a.direction?0:-75,y:42*t-21,letterSpacing:c[t]>c[1-t]?"0em":"".concat(u,"em")},a.stn_list[e].name[0]),s.createElement("text",{className:"rmg-name__en",fontSize:11.5,x:"l"===a.direction?0:-75,y:42*t-1},"Towards "+a.stn_list[e].name[1].replace("\\"," ")))})),s.createElement("text",{className:"rmg-name__zh",fontSize:28,x:"l"===a.direction?25*(Math.max.apply(Math,Object(i.a)(c))+1):0,y:5},"\u65b9\u5411"))},L=s.memo((function(){return s.createElement("g",{id:"terminus_gz",textAnchor:"middle"},s.createElement("text",{className:"rmg-name__zh",fontSize:90},"\u7ec8 \u70b9 \u7ad9"),s.createElement("text",{dy:70,className:"rmg-name__en",fontSize:36},"Terminal"),s.createElement("g",{strokeWidth:8,stroke:"#000"},s.createElement("path",{d:"M -160,68 h -160"}),s.createElement("path",{d:"M 160,68 h 160"})))})),F=s.memo((function(e){var t,n=s.useRef(null),r=s.useState({width:0,height:0,y:0}),i=Object(a.a)(r,2),l=i[0],o=i[1];return s.useEffect((function(){return o(n.current.getBBox())}),[e.note[0],e.note[1]]),s.createElement("g",{className:"note-box",style:(t={},Object(c.a)(t,"--x-percentage",e.note[2]),Object(c.a)(t,"--y-percentage",e.note[3]),t)},e.note[4]&&s.createElement("rect",{height:l.height+4,width:l.width+4,x:-2,y:l.y-2,fill:"none",stroke:"black",strokeWidth:.5}),s.createElement("g",{ref:n},s.createElement("g",{fontSize:16,letterSpacing:1.2},e.note[0].split("\n").map((function(e,t){return s.createElement("text",{key:t,className:"rmg-name__zh",y:18*t},e)}))),s.createElement("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*e.note[0].split("\n").length,")")},e.note[1].split("\n").map((function(t,n){var a;return s.createElement("text",{key:n,className:"rmg-name__en",y:11*n,textLength:n<((null===(a=e.note[1].match(/\n/g))||void 0===a?void 0:a.length)||0)?l.width:0,lengthAdjust:"spacing"},t)})))))}),(function(e,t){return e.note.toString()===t.note.toString()}))}}]);
//# sourceMappingURL=railmapGZMTR.6727baee.chunk.js.map