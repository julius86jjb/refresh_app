(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(n,t,e){"use strict";e.r(t),e.d(t,"HomePageModule",(function(){return u}));var o=e("ofXK"),i=e("TEn/"),s=e("3Pt+"),c=e("tyNb"),a=e("mrSG"),r=e("fXoL"),l=e("lOSq"),g=e("m/P+");const p=[{path:"",component:(()=>{class n{constructor(n,t,e){this.platform=n,this.fcm=t,this.iab=e,this.setupFCM()}setupFCM(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.platform.ready(),console.log("FCM setup started"),this.platform.is("cordova")&&(console.log("In cordova platform"),console.log("Subscribing to token updates"),this.fcm.onTokenRefresh().subscribe(n=>{this.token=n,console.log("onTokenRefresh received event with: ",n)}),console.log("Subscribing to new notifications"),this.fcm.onNotification().subscribe(n=>{this.pushPayload=n,console.log("onNotification received event with: ",n)}),this.hasPermission=yield this.fcm.requestPushPermission(),console.log("requestPushPermission result: ",this.hasPermission),this.token=yield this.fcm.getToken(),console.log(this.token),this.pushPayload=yield this.fcm.getInitialPushPayload(),console.log("getInitialPushPayload result: ",this.pushPayload))}))}get pushPayloadString(){return JSON.stringify(this.pushPayload,null,4)}abrirEnlace(){this.iab.create("https://escuela.powerexplosive.com/membership-area1593582164571","_self",{location:"no"})}}return n.\u0275fac=function(t){return new(t||n)(r.Hb(i.l),r.Hb(l.a),r.Hb(g.a))},n.\u0275cmp=r.Bb({type:n,selectors:[["app-home"]],decls:13,vars:1,consts:[["padding","",1,"fondonegro",3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[1,"centrado"],[1,"logo"],["src","../../assets/logo_gio.png",1,"logosize"],[1,"link"],["size","large","fill","solid","expand","block",2,"--background","#ee9408","--background-hover","#fca110",3,"click"],["slot","start","name","enter-outline"]],template:function(n,t){1&n&&(r.Kb(0,"ion-content",0),r.Kb(1,"ion-header",1),r.Kb(2,"ion-toolbar"),r.Kb(3,"ion-title",2),r.Zb(4,"Blank"),r.Jb(),r.Jb(),r.Jb(),r.Kb(5,"div",3),r.Kb(6,"div",4),r.Kb(7,"div",5),r.Ib(8,"ion-img",6),r.Kb(9,"div",7),r.Kb(10,"ion-button",8),r.Rb("click",(function(){return t.abrirEnlace()})),r.Ib(11,"ion-icon",9),r.Zb(12," INICIAR SESION "),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&n&&r.Vb("fullscreen",!0)},directives:[i.c,i.d,i.i,i.h,i.f,i.b,i.e],styles:["@media (orientation:portrait){#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:150px}}@media (orientation:landscape){#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0}}ion-content[_ngcontent-%COMP%]{--ion-background-color:#000;opacity:1%}ion-content[_ngcontent-%COMP%]   .centrado[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;justify-content:center;align-items:center}@media (orientation:portrait){ion-content[_ngcontent-%COMP%]   .centrado[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:70%;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:150px;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}}@media (orientation:landscape){ion-content[_ngcontent-%COMP%]   .centrado[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:30%;justify-content:center;align-items:center;margin-top:40px}ion-content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:100px;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let b=(()=>{class n{}return n.\u0275mod=r.Fb({type:n}),n.\u0275inj=r.Eb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(p)],c.i]}),n})(),u=(()=>{class n{}return n.\u0275mod=r.Fb({type:n}),n.\u0275inj=r.Eb({factory:function(t){return new(t||n)},imports:[[o.b,s.a,i.j,b]]}),n})()}}]);