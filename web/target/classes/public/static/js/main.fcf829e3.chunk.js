(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/logo.7b1abf14.png"},119:function(e,t,a){e.exports=a.p+"static/media/user_img.be0c4035.png"},129:function(e,t,a){e.exports=a(224)},134:function(e,t,a){},136:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(29),s=(a(134),a(16)),o=a.n(s),u=a(25),d=a(7),m=a(15),f=a(116),p=a.n(f),g=(a(33),a(136),a(23)),b=a(30),v=a(117),E=a.n(v),y=a(57),h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-header border-bottom-primary"},r.a.createElement("div",{className:"col"},r.a.createElement(E.a,{onClick:function(){e.setNavOpen(!e.navOpen)},style:{cursor:"pointer"}}),r.a.createElement(i.b,{to:"/system",className:"nav-link d-inline"},r.a.createElement("img",{src:p.a,height:"40px",alt:""}))),r.a.createElement(y.a,null,r.a.createElement(y.a.Toggle,{variant:"secondary",id:"dropdown-basic"},r.a.createElement(b.a,{icon:g.f,size:"2x"})),r.a.createElement(y.a.Menu,null,r.a.createElement(y.a.Item,{href:"#"},"Logout")))))},S=a(249),O=a(250),x=a(251),j=a(119),w=a.n(j),N=function(e){return r.a.createElement("div",{className:e.navOpen?"translate-enter":"translate-exit"},r.a.createElement(S.a,{vertical:!0,className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100"},r.a.createElement("div",{className:"sidebar-brand d-flex align-items-center justify-content-center flex-column h-auto"},r.a.createElement("div",null,r.a.createElement("img",{src:w.a,className:"img-profile rounded-circle",width:"50%",alt:"userImg"})),r.a.createElement("div",{style:{fontSize:"2.5vh"}},e.name),r.a.createElement("div",{style:{fontSize:"2vh"}},e.location)),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement(O.a,{className:"nav-item"},r.a.createElement(i.b,{to:"/system",className:"nav-link"},"System")),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement(O.a,{className:"nav-item"},r.a.createElement(i.b,{to:"/logical",className:"nav-link"},"Logical Layout")),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement(O.a,{className:"nav-item"},r.a.createElement(i.b,{to:"/graph",className:"nav-link"},"Graph")),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement(O.a,{className:"nav-item position-absolute",style:{bottom:"13%"}},r.a.createElement(x.a,{href:"#",className:"text-center"},r.a.createElement("span",{style:{fontSize:"1.3rem"}},"Logout")))))},k=(a(144),function(){return r.a.createElement("footer",{className:"sticky-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"copyright"},"Copyright \u24d2 Hanwha Qcells 2020"),r.a.createElement("div",{className:"tel"},r.a.createElement(b.a,{icon:g.b}),"010.1234.5678"),r.a.createElement("div",{className:"location"},r.a.createElement(b.a,{icon:g.a}),"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc911\uad6c \uc744\uc9c0\ub85c")))}),D=a(65),I=a(48),C=(a(145),a(120)),T=a.n(C),R=function(e){var t=e.card,a=t.id,n=t.name,c=t.value;return r.a.createElement("div",{className:"d-flex flex-column align-content-center cardDiv"},r.a.createElement("div",{className:"cardName font-weight-bold text-info text-uppercase mb-1"},n),r.a.createElement("div",{className:"card border-left-info shadow card-mod justify-content-center"},r.a.createElement("div",{className:"font-weight-bold text-gray-800"},r.a.createElement(T.a,{end:parseInt(c),duration:(a+1)/2}),"Current Power"===n?"W":"kWh")))},G=a(20),W=a.n(G),L=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],m=i[1],f=Object(n.useState)(null),p=Object(d.a)(f,2),g=p[0],b=p[1],v=Object(n.useState)(null),E=Object(d.a)(v,2),y=E[0],h=E[1];Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/sys/currentpower/1",e.next=4,W.a.get("/api/sys/currentpower/1");case 4:t=e.sent,c(t.data.power+"W"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/sys/energytoday/1/1588431600000",e.next=4,W.a.get("/api/sys/energytoday/1/1588431600000");case 4:t=e.sent,m(parseInt(t.data.totalwh/1e3)+"kWh"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/sys/energymonth/1/1588431600000",e.next=4,W.a.get("/api/sys/energymonth/1/1588431600000");case 4:t=e.sent,b(parseInt(t.data.totalwh/1e3)+"kWh"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/sys/energylifetime/1",e.next=4,W.a.get("/api/sys/energylifetime/1");case 4:t=e.sent,h(parseInt(t.data.totalwh/1e3)+"kWh"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),t(),a(),n()}),[]);var S=[{id:0,name:"Current Power",value:null!=a?a:"0W"},{id:1,name:"Energy Today",value:null!=s?s:"0Wh"},{id:2,name:"Energy Month",value:null!=g?g:"0Wh"},{id:3,name:"Lifetime Energy",value:null!=y?y:"0Wh"}];return r.a.createElement("div",{className:"d-flex justify-content-center m-5 flex-wrap"},S.map((function(e){return r.a.createElement(R,{card:e,key:e.id})})))},M=a(253),z=a(58),_=a(252),P=["places"],A={width:"350px",height:"250px"},U={lat:37.567415,lng:126.9864256},F={zoomControl:!0},J=function(e){var t=Object(z.d)({googleMapsApiKey:"AIzaSyD2azuh9RPIrUV2--NISbqbOB8LGM0d818",libraries:P}),a=t.isLoaded,c=t.loadError,l=Object(n.useState)([{lat:U.lat,lng:U.lng,time:new Date}]),i=Object(d.a)(l,2),s=i[0],o=i[1],u=Object(n.useState)(null),m=Object(d.a)(u,2),f=m[0],p=m[1],g=Object(n.useCallback)((function(e){o((function(t){return[].concat(Object(I.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),b=Object(n.useRef)(),v=Object(n.useCallback)((function(e){b.current=e}),[]);return c?"Error loading maps":a?r.a.createElement("div",null,r.a.createElement(z.a,{mapContainerStyle:A,zoom:18,center:U,mapTypeId:"satellite",options:F,onClick:g,onLoad:v},s.map((function(e){return r.a.createElement(z.c,{key:e.time.toISOString(),position:{lat:e.lat,lng:e.lng},onClick:function(){p(e)}})})),f?r.a.createElement(z.b,{position:{lat:f.lat,lng:f.lng},onCloseClick:function(){p(null)}},r.a.createElement("div",null,r.a.createElement("p",null,"position ",f.lat+", "+f.lng),r.a.createElement("p",null,"marked ",Object(_.a)(f.time,new Date)))):null)):"Loading Maps"},V=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card shadow m-4"},r.a.createElement("div",{className:"card-header py-2"},"System Overview"),r.a.createElement("div",{className:"card-body d-flex justify-content-around align-items-center p-2 flex-wrap"},r.a.createElement(J,null),r.a.createElement("div",null,r.a.createElement(b.a,{icon:g.d,size:"10x",style:{margin:"0.2em"}}),r.a.createElement("div",{style:{borderLeft:"1px solid rgb(0,0,0,0.1)",height:"100%"}})),r.a.createElement("div",{style:{color:"black"}},r.a.createElement(M.a,{className:"text-center"},Object.keys(e.sysData).map((function(t,a){return r.a.createElement("tr",{key:t},r.a.createElement("th",null,t),r.a.createElement("td",null,e.sysData[t]))})))))))},B=function(e){var t=e.sampleData.Gateway.devices[0],a=Object.keys(t).map((function(e){return"object"===typeof t[e]?[e+"-"+Object.keys(t[e])[0]]:[e]})),n=Object.values(t).map((function(e){return"object"===typeof e?[Object.values(e)[0]]:[e]})),c=a.filter((function(e){return!e[0].includes("Ts")})),l=Object.assign.apply(Object,[{}].concat(Object(I.a)(c.map((function(e,t){return Object(D.a)({},e,n[t])})))));return r.a.createElement("div",{style:{top:0,bottom:0,height:"10%",margin:"5% auto"}},r.a.createElement("div",{className:"w-100 row d-flex justify-content-center flex-column align-items-center"},r.a.createElement(V,{sysData:l}),r.a.createElement(L,null)))},q=a(261),H=a(121),K=a.n(H),Q=a(122),Y=a.n(Q),$=a(260),X=function(e){var t=e.sampleData.sampleData,a=t.Gateway.devices[0],c=t.Strings,l=Object.keys(t),i=c.devices.map((function(e){return{id:e.info.id,serialNo:e.info.serialNo}})),s=c.devices.map((function(e){return e.Modules.devices.map((function(e){return e.moduleSerial}))})),o=c.devices.map((function(e){return{id:e.info.id,modules:e.Modules.devices.map((function(e){return e.moduleSerial}))}})),u=Object(n.useState)(["Strings"]),m=Object(d.a)(u,2),f=m[0],p=m[1],g=Object(n.useState)(""),b=Object(d.a)(g,2),v=b[0],E=b[1];return Object(n.useEffect)((function(){if(null!=e.selectedGtid)E("Gateway"),p(["Strings"]);else if(null!=e.selectedStid)E("String"+e.selectedStid),p(["Strings"]);else if(null!=e.selectedSn){E("Module"+e.selectedSn);var t=null;null!=e.selectedSn&&(o.forEach((function(a){a.modules.forEach((function(n){e.selectedSn===n&&(t=["Strings","String"+a.id])}))})),p(t))}}),[e.selectedGtid,e.selectedStid,e.selectedSn]),r.a.createElement("div",{className:"card shadow mb-4",style:{marginRight:20}},r.a.createElement("div",{className:"card-header py-2"},"List"),r.a.createElement("div",{className:"card-body"},r.a.createElement(q.a,{defaultCollapseIcon:r.a.createElement(K.a,null),defaultExpandIcon:r.a.createElement(Y.a,null),defaultSelected:"Gateway",defaultExpanded:["Strings"],selected:v,expanded:f},r.a.createElement($.a,{key:l[0],nodeId:l[0],label:"Gateway",onClick:function(){e.setGtid(a.id),void 0!==e.setItemType&&e.setItemType("gateway")}}),r.a.createElement($.a,{key:l[1],nodeId:l[1],label:l[1]}),r.a.createElement($.a,{key:l[2],nodeId:l[2],label:l[2],onIconClick:function(){f.includes("Strings")?p([]):p(["Strings"])}},i.map((function(t,a){return r.a.createElement($.a,{key:t.serialNo,nodeId:"String"+t.id,label:"String"+t.id,onClick:function(){e.setStid(t.id),void 0!==e.setItemType&&e.setItemType("strings")},onIconClick:function(){f.includes("String"+t.id)?p(["Strings"]):p(["Strings","String"+t.id])},onLabelClick:function(){f.includes("String"+t.id)?p(["Strings"]):p(["Strings","String"+t.id])}},s[a].map((function(t,a){return r.a.createElement($.a,{key:t,nodeId:"Module"+t,label:"Module"+(a+1),onClick:function(){e.setSn(t),void 0!==e.setItemType&&e.setItemType("modules")}})})))}))))))},Z=(a(163),function(e){return r.a.createElement("div",{className:"card shadow mb-4",style:{marginRight:20}},r.a.createElement("div",{className:"card-header py-2"},"Detail Information"),r.a.createElement("div",{className:"card-body"},function(){var t=[];if(null!=e.gatewayData){var a=e.gatewayData,n=Object.keys(a).map((function(e){return"object"===typeof a[e]?[e+"-"+Object.keys(a[e])[0]]:[e]})),c=Object.values(a).map((function(e){return"object"===typeof e?[Object.values(e)[0]]:[e]})),l=Object.assign.apply(Object,[{}].concat(Object(I.a)(n.map((function(e,t){return Object(D.a)({},e,c[t])})))));t.push(r.a.createElement("div",{key:"gtw_key"},r.a.createElement("font",{className:"small-title"},"Gateway"))),t.push(Object.keys(l).map((function(e,t){if("startTs"!==e&&"endTs"!==e)return r.a.createElement("div",{key:e},e,": ",l[e])})))}return t}(),e.selectedStid?function(){var t=e.sampleData.sampleData.Strings.devices,a=[];return t.map((function(t){if(t.info.id===e.selectedStid){var n=t.info;a.push(r.a.createElement("div",{key:"String"},r.a.createElement("font",{className:"small-title"},"String"))),a.push(Object.keys(n).map((function(e,t){if(null!=n[e])return r.a.createElement("div",{key:e},e,": ",n[e])})))}})),a}():function(){var t=e.sampleData.sampleData.Strings.devices,a=[];return t.map((function(t){if(t.info.serialNo===e.selectedSn){var n=t.info;a.push(r.a.createElement("div",{key:"String"},r.a.createElement("font",{className:"small-title"},"String"))),a.push(Object.keys(n).map((function(e,t){if(null!=n[e])return r.a.createElement("div",{key:e},e,": ",n[e])})))}})),t.map((function(e){return Object.assign({},{stringInfo:e.info},{modules:e.Modules.devices})})).map((function(t){t.modules.map((function(n){if(n.moduleSerial===e.selectedSn){var c=t.stringInfo;a.push(r.a.createElement("div",{key:"String"},r.a.createElement("font",{className:"small-title"},"String"))),a.push(Object.keys(c).map((function(e){if(null!=c[e])return r.a.createElement("div",{key:e},e,": ",c[e])}))),a.push(r.a.createElement("div",{key:"Module"},r.a.createElement("font",{className:"small-title"},"Module"))),a.push(r.a.createElement("div",{key:n.moduleSerial},"moduleSerial",": ",n.moduleSerial))}}))})),a}()))}),ee=(a(164),a(83)),te=Object(n.forwardRef)((function(e,t){var a=e.stringIndex,n=e.index,c=e.setSn,l=e.mSerialNo,i=e.checked,s=e.data;return r.a.createElement("div",{className:"card shadow m-lg-2 text-center",style:{display:"block",backgroundColor:s?"var(--lev"+parseInt(s[0].modulewatt/20)+")":"white",backgroundImage:"linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.28) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.28) 2px, transparent 2px)",backgroundSize:"20px 20px, 20px 20px",backgroundPosition:"-2px -2px, -2px -2px",fontWeight:"500"},onClick:function(){return c(l)}},r.a.createElement("div",{className:"card-body "+(i&&" selected"),ref:t,tabIndex:[30*a+n+1],style:{minWidth:"81px"}},"M",n+1,r.a.createElement("br",null),s&&s[0].modulewatt,"W",r.a.createElement("br",null),s&&s[0].modulevoltage,"V",r.a.createElement("br",null),s&&s[0].moduletemperature,"\u2103"))}));function ae(e,t){var a=new Map;return e.forEach((function(e){var n=t(e),r=a.get(n);r?r.push(e):a.set(n,[e])})),a}var ne=Object(n.forwardRef)((function(e,t){var a=e.data,c=Object(n.useState)(null),l=Object(d.a)(c,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){a&&s(ae(a,(function(e){return e.md_sn})))}),[a]),null==i?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-left",style:{marginLeft:"10px",marginRight:"10px"}},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"card border-left-primary shadow m-lg-2 text-center "+(e.checked&&" selected"),onClick:function(){return e.setStid(e.stid)},style:{fontWeight:"500"}},r.a.createElement("div",{className:"card-body",tabIndex:[31*(e.i+1)],style:{minWidth:"81px"}},"S",e.i+1,r.a.createElement("br",null),a&&a[0].stringwatt,"W",r.a.createElement("br",null),a&&a[0].stringvoltage,"V",r.a.createElement("br",null),a&&a[0].stringtemperature,"\u2103")),e.module.map((function(a,n){return e.selectedSn===a?r.a.createElement(te,{stringIndex:e.i+1,index:n,key:n,setSn:e.setSn,mSerialNo:a,checked:!0,ref:t,data:i.get(Number(a))}):r.a.createElement(te,{stringIndex:e.i+1,index:n,key:n,setSn:e.setSn,mSerialNo:a,checked:!1,data:i.get(Number(a))})}))))))})),re=(a(165),Object(n.forwardRef)((function(e,t){var a=e.data,c=e.sampleData.sampleData,l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],o=i[1];Object(n.useEffect)((function(){a&&o(ae(a,(function(e){return e.st_id})))}),[a]);var u=c.Gateway.devices[0],m=c.Strings,f=m.devices.map((function(e){return e.info.id})),p=m.devices.map((function(e){return e.Modules.devices.map((function(e){return e.moduleSerial}))})),g=Object(n.useRef)(null);if(null!=s)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card custom-shadow mb-4",style:{height:"25%"}},r.a.createElement("div",{className:"card-header py-2"},"Logical Layout cards"),r.a.createElement("div",{className:"card-body d-flex",style:{padding:"0.5rem"}},r.a.createElement("div",{className:"card custom-shadow d-flex justify-content-center text-center "+(e.selectedGtid===u.id&&" selected"),style:{marginRight:10,padding:10,fontSize:12,width:"8%",fontWeight:"500"},onClick:function(){return e.setGtid(u.id)}},r.a.createElement("span",null,"Gateway"),s.get(f[0])[0].totalwatt,"W"),r.a.createElement("div",{style:{width:"92%"}},r.a.createElement(ee.MapInteractionCSS,{defaultValue:{scale:.4,translation:{x:1,y:1}},minScale:.4,showControls:!0,btnClass:"resize-btn"},r.a.createElement("div",{className:"col",style:{flexWrap:"nowrap"},ref:g},f.map((function(a,n){return e.selectedStid===a?r.a.createElement(ne,{i:n,key:n,module:p[n],setSn:e.setSn,setStid:e.setStid,stid:a,checked:!0,selectedSn:e.selectedSn,ref:t,data:s.get(a)}):r.a.createElement(ne,{i:n,key:n,module:p[n],setSn:e.setSn,setStid:e.setStid,stid:a,checked:!1,selectedSn:e.selectedSn,ref:t,data:s.get(a)})}))))))))}))),ce=a(79),le=a.n(ce),ie=(a(166),a(51)),se=a.n(ie),oe=a(69),ue=a.n(oe),de=a(70),me=a.n(de),fe=r.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),s=Object(d.a)(i,2),o=s[0],u=s[1],m=Object(n.useRef)(null),f=function(e){for(var t=[],a={},n=0,r=e.length;n<r;n++){var c=JSON.stringify(e[n]);a[c]||(t.push(e[n]),a[c]=!0)}return t}(e.graphData);Object(n.useEffect)((function(){m=m.current.chart})),Object(n.useEffect)((function(){m.xAxis[0].setExtremes(e.graphData[0]?e.graphData[0][0]:0,e.graphData[0]?e.graphData[e.graphData.length-1][0]:0)}),[e.graphData]);var p={chart:{type:"spline"},title:{text:e.curDate.toISOString().slice(0,10)+"'s "+("day"===e.timeRange?"totalwatt / 15min":"week"===e.timeRange?"totalwatt / hr":"totalwatt / day")+" chart"},rangeSelector:{enabled:!1},navigator:{enabled:!1},xAxis:{type:"datetime",plotLines:[{value:f[0],color:"red",width:2,id:0,zIndex:10,label:{text:f[0]?f[0][1]:null,align:"right",x:-10,y:16,rotation:0}}]},series:[{data:f,marker:{enabled:!1},type:"area"}],plotOptions:{series:{point:{events:{mouseOver:function(){var t={x:this.x,y:this.y};e.setPoint([t.x,t.y])}}}},area:{marker:{states:{hover:{enabled:!0}}}}}};return r.a.createElement("div",null,r.a.createElement(me.a,{highcharts:ue.a,constructorType:"stockChart",options:p,ref:m}),r.a.createElement("button",{onClick:function(){!function(t){l(!c);var a=0,n=f.length;if(c)clearInterval(o);else var r=setInterval((function(){u(r),a<n&&t.xAxis?(t.xAxis[0].addPlotLine({value:[f[a][0]],color:"red",width:2,id:a,zIndex:10,label:{text:f[a][1],align:"right",x:-10,y:16,rotation:0}}),t.xAxis[0].removePlotLine(a-1),e.setPoint([f[a][0],f[a][1]])):clearInterval(o),a++}),400)}(m)},style:{alignSelf:"flex-start"}},c?r.a.createElement(b.a,{icon:g.e,size:"2x"}):r.a.createElement(b.a,{icon:g.c,size:"2x"})))})),pe=a(254),ge=function(e){var t=Object(n.useState)([0,0]),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),o=s[0],u=s[1],m=Object(n.useState)([new Date]),f=Object(d.a)(m,2),p=f[0],g=f[1];Object(n.useEffect)((function(){for(var t=[],a=1;a<8;a++)t.push(new Date(e.curDate-864e5*a));g(t)}),[e.curDate]),Object(n.useEffect)((function(){0!==c[0]&&e.setCurTime(c[0].toString())}),[c]);var b=Object(n.useRef)(null),v=Object(n.useRef)(null);Object(n.useEffect)((function(){b.current=e.selectedStid,v.current=e.selectedSn}));var E=b.current,y=v.current;return Object(n.useEffect)((function(){if(!e.selectedGtid||e.selectedSn||e.selectedStid){if(E!==e.selectedStid&&null===y){for(var t=[],a=0;a<e.data.length;a++)e.data[a].st_id===Number(e.selectedStid)&&t.push([Number(e.data[a].endts),e.data[a].stringwatt]);u(t)}else if(y!==e.selectedSn&&null===E){for(var n=[],r=0;r<e.data.length;r++)e.data[r].md_sn===Number(e.selectedSn)&&n.push([Number(e.data[r].endts),e.data[r].modulewatt]);u(n)}else if(E===e.selectedStid&&null===e.selectedSn){for(var c=[],l=0;l<e.data.length;l++)e.data[l].st_id===Number(e.selectedStid)&&c.push([Number(e.data[l].endts),e.data[l].stringwatt]);u(c)}else if(y===e.selectedSn&&null===e.selectedStid){for(var i=[],s=0;s<e.data.length;s++)e.data[s].md_sn===Number(e.selectedSn)&&i.push([Number(e.data[s].endts),e.data[s].modulewatt]);u(i)}}else{for(var o=[],d=0;d<e.data.length;d++)o.push([Number(e.data[d].endts),e.data[d].totalwatt]);u(o)}}),[e.selectedStid,e.selectedSn,e.data]),r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex justify-content-around",style:{width:"100%"}},r.a.createElement(pe.a,{color:"primary",active:!0,onClick:function(){return e.setTimeRange("day")}},"Day"),r.a.createElement(pe.a,{color:"primary",active:!0,onClick:function(){return e.setTimeRange("week")}},"Week"),r.a.createElement(pe.a,{color:"primary",active:!0,onClick:function(){return e.setTimeRange("month")}},"Month")),r.a.createElement("div",{className:"d-flex justify-content-start m-3"},"week"===e.timeRange?r.a.createElement(le.a,{selected:e.curDate,onChange:function(t){return e.setcurDate(t)},highlightDates:p}):"month"===e.timeRange?r.a.createElement(le.a,{selected:e.curDate,onChange:function(t){return e.setcurDate(t)},dateFormat:"MM/yyyy",showMonthYearPicker:!0}):r.a.createElement(le.a,{selected:e.curDate,onChange:function(t){return e.setcurDate(t)}})),r.a.createElement(fe,{highcharts:se.a,setPoint:l,timeRange:e.timeRange,curDate:e.curDate,selectedSn:e.selectedSn,selectedStid:e.selectedStid,graphData:o})))},be=a(255),ve=function(e){var t=Object(n.useState)(e.gatewayId),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(null),s=Object(d.a)(i,2),m=s[0],f=s[1],p=Object(n.useState)(null),g=Object(d.a)(p,2),b=g[0],v=g[1],E=Object(n.useState)("day"),y=Object(d.a)(E,2),h=y[0],S=y[1],O=Object(n.useState)(null),x=Object(d.a)(O,2),j=x[0],w=x[1],N=Object(n.useRef)(null),k=Object(n.useState)(new Date(1585836e6)),D=Object(d.a)(k,2),I=D[0],C=D[1],T=Object(n.useState)(null),R=Object(d.a)(T,2),G=R[0],L=R[1],M=Object(n.useState)(e.sampleData.Gateway.devices[0]),z=Object(d.a)(M,2),_=z[0],P=z[1],A=Object(n.useState)(null),U=Object(d.a)(A,2),F=U[0],J=U[1];if(Object(n.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=String(I.getTime()),"month"===h&&(a=String(Number(a)+26298e5)),n="/api/"+e.gatewayId+"/"+a+"/"+h,t.next=6,W.a.get(n);case 6:r=t.sent,L(r.data),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[h,I]),Object(n.useEffect)((function(){c&&(f(null),v(null))}),[c]),Object(n.useEffect)((function(){m&&(l(null),v(null))}),[m]),Object(n.useEffect)((function(){b&&(l(null),f(null))}),[b]),Object(n.useEffect)((function(){G&&0==G.length?alert("\ud574\ub2f9 \uae30\uac04\uc758 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):G&&G.length>0&&(J(ae(G,(function(e){return e.endts}))),w(G[0].endts))}),[G]),Object(n.useEffect)((function(){j&&F.get(j)}),[j]),!G||!j||G===[])return r.a.createElement("div",{className:"container-fluid h-100 d-flex justify-content-center align-items-center flex-column"},r.a.createElement(be.a,{style:{width:"3rem",height:"3rem"}}),"Loading");for(var V=[],B=0;B<5;B++)V[B]=B;return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("div",{className:"card float-right",style:{width:"35%",marginRight:"15px"}},r.a.createElement("div",{style:{display:"flex"}},V.map((function(e,t){return r.a.createElement("div",{key:t,className:"card-body text-center",style:{backgroundColor:"var(--lev".concat(e,")"),fontSize:10,padding:"2px"}},"~",20*e+19,"W")}))))),r.a.createElement("div",{className:"container-fluid",style:{marginTop:"15px"}},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement(X,{sampleData:e,setGtid:l,setStid:f,setSn:v,selectedGtid:c,selectedStid:m,selectedSn:b,setGatewayData:P}),r.a.createElement(Z,{sampleData:e,selectedStid:m,selectedSn:b,gatewayData:_})),r.a.createElement("div",{style:{overflow:"auto",flex:1}},r.a.createElement(re,{sampleData:e,setGtid:l,setStid:f,setSn:v,selectedGtid:c,selectedStid:m,selectedSn:b,ref:N,data:F.get(j)}),r.a.createElement(ge,{setTimeRange:S,timeRange:h,selectedStid:m,selectedSn:b,selectedGtid:c,data:G,setCurTime:w,curDate:I,setcurDate:C})))))},Ee=(a(221),r.a.memo((function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),c=(a[0],a[1]),l=Object(n.useState)(""),i=Object(d.a)(l,2),s=(i[0],i[1]),o=Object(n.useRef)(null);Object(n.useEffect)((function(){o=o.current.chart})),Object(n.useEffect)((function(){c([e.data]),s(e.data.name),o.xAxis[0].setExtremes(e.data.data[0]?e.data.data[0][0]:0,e.data.data[0]?e.data.data[e.data.data.length-1][0]:0)}),[e.data]);var u={chart:{type:"column"},title:{text:e.data.name},series:[{name:e.data.name,data:e.data.data}],rangeSelector:{enabled:!0,buttons:[],verticalAlign:"top",buttonPosition:{align:"right"},inputPosition:{align:"left"}},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%y-%b-%e"}},colors:["#00A6D6","#002E54"],plotOptions:{series:{point:{events:{mouseOver:function(){var t={x:this.x,y:this.y};console.log(t),e.setPoint([new Date(t.x).toISOString().split("T")[0],t.y])}}}}}};return r.a.createElement("div",null,r.a.createElement(me.a,{highcharts:ue.a,constructorType:"stockChart",options:u,ref:o}))}))),ye=a(256),he=a(257),Se=a(258),Oe=a(259),xe=a(8),je=a.n(xe),we=function(e){var t=Object(n.useState)(["",0]),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(1),s=Object(d.a)(i,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-2"},"Graph"),r.a.createElement("div",{className:"card-body"},r.a.createElement(S.a,{tabs:!0},null!=e.data&&Array.from(e.data).map((function(e,t){return r.a.createElement(O.a,{key:t+1},r.a.createElement(x.a,{className:je()({active:o===t+1}),onClick:function(){var e;o!==(e=t+1)&&u(e)}},e.name))}))),r.a.createElement(ye.a,{activeTab:o},null!=e.data&&Array.from(e.data).map((function(t,a){return r.a.createElement(he.a,{tabId:a+1,key:a+1},r.a.createElement(Se.a,null,r.a.createElement(Oe.a,{sm:"12"},r.a.createElement("div",{className:"d-flex chartWrapper"},r.a.createElement(Ee,{highcharts:se.a,setPoint:l,data:t,selectedItemType:e.selectedItemType}),r.a.createElement("p",null,"Time is:"," ",""!==c[0]?c[0]:(new Date).toDateString()," ","and power is: ",c[1])))))})))))},Ne=function(e){var t=Object(n.useState)(e.gatewayId),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(null),s=Object(d.a)(i,2),m=s[0],f=s[1],p=Object(n.useState)(null),g=Object(d.a)(p,2),b=g[0],v=g[1],E=Object(n.useState)("day"),y=Object(d.a)(E,2),h=y[0],S=y[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),j=x[0],w=x[1],N=Object(n.useState)(null),k=Object(d.a)(N,2),D=k[0],I=k[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t="/api/graph/gateway/","gateway"!==j){e.next=12;break}return t+=c+"/"+h,e.next=6,W.a.get(t);case 6:a=e.sent,I([{name:"totalwh delta",data:a.data.map((function(e){return[Number(e.endts),e.totalwh_delta]})),xcategories:a.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"watt average",data:a.data.map((function(e){return[Number(e.endts),e.watt_avg]})),xcategories:a.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))}]),f(null),v(null),e.next=32;break;case 12:if("strings"!==j){e.next=23;break}return t="/api/graph/strings/",t+=m+"/"+h,e.next=17,W.a.get(t);case 17:n=e.sent,I([{name:"totalwh",data:n.data.map((function(e){return[Number(e.endts),e.totalwh]})),xcategories:n.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"totalwh delta",data:n.data.map((function(e){return[Number(e.endts),e.totalwh_delta]})),xcategories:n.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"watt average",data:n.data.map((function(e){return[Number(e.endts),e.stringwatt_avg]})),xcategories:n.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"voltage average",data:n.data.map((function(e){return[Number(e.endts),e.stringvoltage_avg]})),xcategories:n.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"temperature average",data:n.data.map((function(e){return[Number(e.endts),e.temperature_avg]})),xcategories:n.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))}]),l(null),v(null),e.next=32;break;case 23:if("modules"!==j){e.next=32;break}return t="/api/graph/modules/",t+=b+"/"+h,e.next=28,W.a.get(t);case 28:r=e.sent,I([{name:"watt average",data:r.data.map((function(e){return[e.modulewatt_avg]})),xcategories:r.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"voltage average",data:r.data.map((function(e){return[e.modulevoltage_avg]})),xcategories:r.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))},{name:"temperature average",data:r.data.map((function(e){return[e.moduletemperature_avg]})),xcategories:r.data.map((function(e){return[new Date(Number(e.endts)).toUTCString()]}))}]),l(null),f(null);case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(0),console.log(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,34]])})));return function(){return e.apply(this,arguments)}})()()}),[j,c,m,b,h]),Object(n.useEffect)((function(){w("gateway")}),[]),r.a.createElement("div",{className:"container-fluid",style:{marginTop:"15px",width:"100%"}},r.a.createElement("div",{className:"d-flex",style:{width:"100%"}},r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(X,{sampleData:e,setGtid:l,setStid:f,setSn:v,selectedStid:m,selectedSn:b,setData:I,setItemType:w})),r.a.createElement("div",{style:{flexGrow:2}},r.a.createElement(we,{data:D,selectedItemType:j,timeRange:h,setTimeRange:S}))))},ke=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(d.a)(l,2),s=i[0],f=i[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("/api/sys/1");case 3:t=e.sent,a=JSON.parse(JSON.parse(t.data.information)),c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/system",render:function(){return r.a.createElement(B,{sampleData:a})}}),r.a.createElement(m.b,{path:"/logical",render:function(){return r.a.createElement(ve,{sampleData:a,gatewayId:"1"})}}),r.a.createElement(m.b,{path:"/graph",render:function(){return r.a.createElement(Ne,{sampleData:a,gatewayId:"1"})}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{setNavOpen:f,navOpen:s}),r.a.createElement("div",{className:"d-flex"},r.a.createElement(N,{name:"John",location:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc911\uad6c",navOpen:s}),r.a.createElement("div",{style:{flex:1,overflow:"auto",backgroundColor:"#f8f9fc"}},a?p:r.a.createElement("p",null,"No Data Found"))),r.a.createElement(k,null))};a(222);var De=function(){return r.a.createElement("div",null,r.a.createElement(ke,null),r.a.createElement(m.a,{to:"/system"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(223);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.fcf829e3.chunk.js.map