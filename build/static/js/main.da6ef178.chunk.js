(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[1],{105:function(e,t,n){},106:function(e,t,n){var r={"./pwa-action-sheet.entry.js":[158,62],"./pwa-camera-modal-instance.entry.js":[159,63],"./pwa-camera-modal.entry.js":[160,64],"./pwa-camera.entry.js":[161,65],"./pwa-toast.entry.js":[162,66]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=106,e.exports=c},107:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(39),s=n.n(a),o=n(27),i=n(3),j=n(68),u=n(17),b=n(4),l=n.n(b),h=n(9),d=n(21),f=n(71),p=n(2),O=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({showError:!1}),s=Object(d.a)(a,2),o=s[0],j=s[1],u=Object(r.useState)(),b=Object(d.a)(u,2),O=b[0],x=b[1],y=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,f.a.getCurrentPosition();case 4:t=e.sent,x(t),c(!1),j({showError:!1}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),j({showError:!0,message:e.t0.message}),c(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(i.l,{isOpen:n,onDidDismiss:function(){return c(!1)},message:"Getting Location..."}),Object(p.jsx)(i.u,{isOpen:o.showError,onDidDismiss:function(){return j({message:"",showError:!1})},message:o.message,duration:3e3}),Object(p.jsx)(i.b,{color:"primary",onClick:y,children:O?"Position: ".concat(O.coords.latitude," | ").concat(O.coords.longitude):"Get Location"}),O&&function(e,t){var n="https://www.google.com/maps/embed/v1/view?key=AIzaSyCAI-kfzVhSmr1aUJ4N-gLyjozI6OR8uZA&center=".concat(e,",").concat(t,"&zoom=18&maptype=satellite");return Object(p.jsx)("iframe",{width:"400",height:"250",src:n})}(O.coords.latitude,O.coords.longitude)]})},x=(n(91),function(){return Object(p.jsxs)(i.m,{children:[Object(p.jsx)(i.h,{children:Object(p.jsx)(i.v,{children:Object(p.jsx)(i.t,{children:"Show my location!"})})}),Object(p.jsxs)(i.d,{fullscreen:!0,children:[Object(p.jsx)(i.h,{collapse:"condense",children:Object(p.jsx)(i.v,{children:Object(p.jsx)(i.t,{size:"large",children:"Show my location!"})})}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(O,{})})]})]})}),y=n(25),v=n(63),m=n(35),w=n(49),g=n(50),k=n(33),_="photos";function P(e){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return r=e.sent,e.abrupt("return",new Promise((function(e,t){var n=new FileReader;n.onerror=t,n.onload=function(){"string"===typeof n.result?e(n.result):t("method did not return a string")},n.readAsDataURL(r)})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(92);var D=function(){var e=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){!function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,r,a,s,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get({key:_});case 2:if(t=e.sent,n=t.value,r=n?JSON.parse(n):[],Object(i.E)("hybrid")){e.next=25;break}a=Object(v.a)(r),e.prev=7,a.s();case 9:if((s=a.n()).done){e.next=17;break}return o=s.value,e.next=13,m.b.readFile({path:o.filepath,directory:m.a.Data});case 13:j=e.sent,o.webviewPath="data:image/jpeg;base64,".concat(j.data);case 15:e.next=9;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:c(r);case 26:case"end":return e.stop()}}),e,null,[[7,19,22,25]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var a=function(){var e=Object(h.a)(l.a.mark((function e(){var t,r,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.getPhoto({resultType:w.b.Uri,source:w.c.Camera,quality:95});case 2:return t=e.sent,r=(new Date).getTime()+".jpeg",e.next=6,s(t,r);case 6:a=e.sent,o=[a].concat(Object(y.a)(n)),c(o),g.a.set({key:_,value:JSON.stringify(o)});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(i.E)("hybrid")){e.next=7;break}return e.next=3,m.b.readFile({path:t.path});case 3:c=e.sent,r=c.data,e.next=10;break;case 7:return e.next=9,P(t.webPath);case 9:r=e.sent;case 10:return e.next=12,m.b.writeFile({path:n,data:r,directory:m.a.Data});case 12:if(a=e.sent,!Object(i.E)("hybrid")){e.next=17;break}return e.abrupt("return",{filepath:a.uri,webviewPath:k.a.convertFileSrc(a.uri)});case 17:return e.abrupt("return",{filepath:n,webviewPath:t.webPath});case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{deletePhoto:function(){var e=Object(h.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.filter((function(e){return e.filepath!==t.filepath})),g.a.set({key:_,value:JSON.stringify(r)}),a=t.filepath.substr(t.filepath.lastIndexOf("/")+1),e.next=5,m.b.deleteFile({path:a,directory:m.a.Data});case 5:c(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),photos:n,takePhoto:a}}(),t=e.photos,n=e.takePhoto;return Object(p.jsxs)(i.m,{children:[Object(p.jsx)(i.h,{children:Object(p.jsx)(i.v,{children:Object(p.jsx)(i.t,{children:"Take a Photo"})})}),Object(p.jsxs)(i.d,{fullscreen:!0,children:[Object(p.jsx)(i.g,{children:Object(p.jsx)(i.p,{children:t.map((function(e,t){return Object(p.jsx)(i.c,{size:"6",children:Object(p.jsx)(i.j,{src:e.webviewPath})},t)}))})}),Object(p.jsx)(i.e,{vertical:"bottom",horizontal:"center",slot:"fixed",children:Object(p.jsx)(i.f,{onClick:function(){return n()},children:Object(p.jsx)(i.i,{icon:u.b})})})]})]})},F=(n(93),function(e){var t=e.name;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("strong",{children:t}),Object(p.jsxs)("p",{children:["Explore ",Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ionicframework.com/docs/components",children:"UI Components!"})]}),Object(p.jsx)("img",{src:"/assets/images/relightMyFire.jpg",alt:"relight",width:"400px"})]})}),S=(n(94),function(){return Object(p.jsxs)(i.m,{children:[Object(p.jsx)(i.h,{children:Object(p.jsx)(i.v,{children:Object(p.jsx)(i.t,{children:"Tab 3"})})}),Object(p.jsxs)(i.d,{fullscreen:!0,children:[Object(p.jsx)(i.h,{collapse:"condense",children:Object(p.jsx)(i.v,{children:Object(p.jsx)(i.t,{size:"large",children:"Tab 3"})})}),Object(p.jsx)(F,{name:"Tab 3 page"})]})]})}),T=(n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),function(){return Object(p.jsx)(i.a,{children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(i.s,{children:[Object(p.jsxs)(i.o,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/tab1",children:Object(p.jsx)(x,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/tab2",children:Object(p.jsx)(D,{})}),Object(p.jsx)(o.b,{path:"/tab3",children:Object(p.jsx)(S,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/",children:Object(p.jsx)(o.a,{to:"/tab1"})})]}),Object(p.jsxs)(i.q,{slot:"bottom",children:[Object(p.jsxs)(i.r,{tab:"tab1",href:"/tab1",children:[Object(p.jsx)(i.i,{icon:u.q}),Object(p.jsx)(i.k,{children:"Tab 1"})]}),Object(p.jsxs)(i.r,{tab:"tab2",href:"/tab2",children:[Object(p.jsx)(i.i,{icon:u.i}),Object(p.jsx)(i.k,{children:"Photos"})]}),Object(p.jsxs)(i.r,{tab:"tab3",href:"/tab3",children:[Object(p.jsx)(i.i,{icon:u.p}),Object(p.jsx)(i.k,{children:"Tab 3"})]})]})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=function(e){e&&e instanceof Function&&n.e(71).then(n.bind(null,181)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},N=n(73);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(N.a)(window),C()},80:function(e,t,n){var r={"./ion-action-sheet.entry.js":[110,7],"./ion-alert.entry.js":[111,8],"./ion-app_8.entry.js":[112,9],"./ion-avatar_3.entry.js":[113,19],"./ion-back-button.entry.js":[114,20],"./ion-backdrop.entry.js":[115,48],"./ion-button_2.entry.js":[116,21],"./ion-card_5.entry.js":[117,22],"./ion-checkbox.entry.js":[118,23],"./ion-chip.entry.js":[119,24],"./ion-col_3.entry.js":[120,49],"./ion-datetime_3.entry.js":[121,12],"./ion-fab_3.entry.js":[122,25],"./ion-img.entry.js":[123,50],"./ion-infinite-scroll_2.entry.js":[124,51],"./ion-input.entry.js":[125,26],"./ion-item-option_3.entry.js":[126,27],"./ion-item_8.entry.js":[127,28],"./ion-loading.entry.js":[128,29],"./ion-menu_3.entry.js":[129,30],"./ion-modal.entry.js":[130,10],"./ion-nav_2.entry.js":[131,16],"./ion-popover.entry.js":[132,11],"./ion-progress-bar.entry.js":[133,31],"./ion-radio_2.entry.js":[134,32],"./ion-range.entry.js":[135,33],"./ion-refresher_2.entry.js":[136,13],"./ion-reorder_2.entry.js":[137,18],"./ion-ripple-effect.entry.js":[138,52],"./ion-route_4.entry.js":[139,34],"./ion-searchbar.entry.js":[140,35],"./ion-segment_2.entry.js":[141,36],"./ion-select_3.entry.js":[142,37],"./ion-slide_2.entry.js":[143,53],"./ion-spinner.entry.js":[144,15],"./ion-split-pane.entry.js":[145,54],"./ion-tab-bar_2.entry.js":[146,38],"./ion-tab_2.entry.js":[147,17],"./ion-text.entry.js":[148,39],"./ion-textarea.entry.js":[149,40],"./ion-toast.entry.js":[150,41],"./ion-toggle.entry.js":[151,14],"./ion-virtual-scroll.entry.js":[152,55]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=80,e.exports=c},82:function(e,t,n){var r={"./ion-icon.entry.js":[153,70]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=82,e.exports=c},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[107,3,6]]]);
//# sourceMappingURL=main.da6ef178.chunk.js.map