!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(e,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",(function(){return P}));var c,a,s,r=i("ofXK"),l=i("TEn/"),u=i("3Pt+"),g=i("tyNb"),f=i("mrSG"),p=i("fXoL"),b=i("lOSq"),h=i("m/P+"),d=[{path:"",component:(c=function(){function e(t,o,i){n(this,e),this.platform=t,this.fcm=o,this.iab=i,this.setupFCM()}var o,i,c;return o=e,(i=[{key:"setupFCM",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.platform.ready();case 2:if(console.log("FCM setup started"),n.t0=this.platform.is("cordova"),!n.t0){n.next=22;break}return console.log("In cordova platform"),console.log("Subscribing to token updates"),this.fcm.onTokenRefresh().subscribe((function(n){t.token=n,console.log("onTokenRefresh received event with: ",n)})),console.log("Subscribing to new notifications"),this.fcm.onNotification().subscribe((function(n){t.pushPayload=n,console.log("onNotification received event with: ",n)})),n.next=12,this.fcm.requestPushPermission();case 12:return this.hasPermission=n.sent,console.log("requestPushPermission result: ",this.hasPermission),n.next=16,this.fcm.getToken();case 16:return this.token=n.sent,console.log(this.token),n.next=20,this.fcm.getInitialPushPayload();case 20:this.pushPayload=n.sent,console.log("getInitialPushPayload result: ",this.pushPayload);case 22:case"end":return n.stop()}}),n,this)})))}},{key:"abrirEnlace",value:function(){this.iab.create("https://escuela.powerexplosive.com/membership-area1593582164571","_self",{location:"no"})}},{key:"pushPayloadString",get:function(){return JSON.stringify(this.pushPayload,null,4)}}])&&t(o.prototype,i),c&&t(o,c),e}(),c.\u0275fac=function(n){return new(n||c)(p.Hb(l.l),p.Hb(b.a),p.Hb(h.a))},c.\u0275cmp=p.Bb({type:c,selectors:[["app-home"]],decls:13,vars:1,consts:[["padding","",1,"fondonegro",3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[1,"centrado"],[1,"logo"],["src","../../assets/logo_gio.png",1,"logosize"],[1,"link"],["size","large","fill","solid","expand","block",2,"--background","#ee9408","--background-hover","#fca110",3,"click"],["slot","start","name","enter-outline"]],template:function(n,t){1&n&&(p.Kb(0,"ion-content",0),p.Kb(1,"ion-header",1),p.Kb(2,"ion-toolbar"),p.Kb(3,"ion-title",2),p.Zb(4,"Blank"),p.Jb(),p.Jb(),p.Jb(),p.Kb(5,"div",3),p.Kb(6,"div",4),p.Kb(7,"div",5),p.Ib(8,"ion-img",6),p.Kb(9,"div",7),p.Kb(10,"ion-button",8),p.Rb("click",(function(){return t.abrirEnlace()})),p.Ib(11,"ion-icon",9),p.Zb(12," INICIAR SESION "),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb()),2&n&&p.Vb("fullscreen",!0)},directives:[l.c,l.d,l.i,l.h,l.f,l.b,l.e],styles:["@media (orientation:portrait){#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:150px}}@media (orientation:landscape){#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0}}ion-content[_ngcontent-%COMP%]{--ion-background-color:#000;opacity:1%}ion-content[_ngcontent-%COMP%]   .centrado[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;justify-content:center;align-items:center}@media (orientation:portrait){ion-content[_ngcontent-%COMP%]   .centrado[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:70%;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:150px;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}}@media (orientation:landscape){ion-content[_ngcontent-%COMP%]   .centrado[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:30%;justify-content:center;align-items:center;margin-top:40px}ion-content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:100px;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),c)}],m=((s=function t(){n(this,t)}).\u0275mod=p.Fb({type:s}),s.\u0275inj=p.Eb({factory:function(n){return new(n||s)},imports:[[g.i.forChild(d)],g.i]}),s),P=((a=function t(){n(this,t)}).\u0275mod=p.Fb({type:a}),a.\u0275inj=p.Eb({factory:function(n){return new(n||a)},imports:[[r.b,u.a,l.j,m]]}),a)}}])}();