(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{704:function(t,e,r){var map={"./af":523,"./af.js":523,"./ar":524,"./ar-dz":525,"./ar-dz.js":525,"./ar-kw":526,"./ar-kw.js":526,"./ar-ly":527,"./ar-ly.js":527,"./ar-ma":528,"./ar-ma.js":528,"./ar-sa":529,"./ar-sa.js":529,"./ar-tn":530,"./ar-tn.js":530,"./ar.js":524,"./az":531,"./az.js":531,"./be":532,"./be.js":532,"./bg":533,"./bg.js":533,"./bm":534,"./bm.js":534,"./bn":535,"./bn-bd":536,"./bn-bd.js":536,"./bn.js":535,"./bo":537,"./bo.js":537,"./br":538,"./br.js":538,"./bs":539,"./bs.js":539,"./ca":540,"./ca.js":540,"./cs":541,"./cs.js":541,"./cv":542,"./cv.js":542,"./cy":543,"./cy.js":543,"./da":544,"./da.js":544,"./de":545,"./de-at":546,"./de-at.js":546,"./de-ch":547,"./de-ch.js":547,"./de.js":545,"./dv":548,"./dv.js":548,"./el":549,"./el.js":549,"./en-au":550,"./en-au.js":550,"./en-ca":551,"./en-ca.js":551,"./en-gb":552,"./en-gb.js":552,"./en-ie":553,"./en-ie.js":553,"./en-il":554,"./en-il.js":554,"./en-in":555,"./en-in.js":555,"./en-nz":556,"./en-nz.js":556,"./en-sg":557,"./en-sg.js":557,"./eo":558,"./eo.js":558,"./es":559,"./es-do":560,"./es-do.js":560,"./es-mx":561,"./es-mx.js":561,"./es-us":562,"./es-us.js":562,"./es.js":559,"./et":563,"./et.js":563,"./eu":564,"./eu.js":564,"./fa":565,"./fa.js":565,"./fi":566,"./fi.js":566,"./fil":567,"./fil.js":567,"./fo":568,"./fo.js":568,"./fr":569,"./fr-ca":570,"./fr-ca.js":570,"./fr-ch":571,"./fr-ch.js":571,"./fr.js":569,"./fy":572,"./fy.js":572,"./ga":573,"./ga.js":573,"./gd":574,"./gd.js":574,"./gl":575,"./gl.js":575,"./gom-deva":576,"./gom-deva.js":576,"./gom-latn":577,"./gom-latn.js":577,"./gu":578,"./gu.js":578,"./he":579,"./he.js":579,"./hi":580,"./hi.js":580,"./hr":581,"./hr.js":581,"./hu":582,"./hu.js":582,"./hy-am":583,"./hy-am.js":583,"./id":584,"./id.js":584,"./is":585,"./is.js":585,"./it":586,"./it-ch":587,"./it-ch.js":587,"./it.js":586,"./ja":588,"./ja.js":588,"./jv":589,"./jv.js":589,"./ka":590,"./ka.js":590,"./kk":591,"./kk.js":591,"./km":592,"./km.js":592,"./kn":593,"./kn.js":593,"./ko":594,"./ko.js":594,"./ku":595,"./ku.js":595,"./ky":596,"./ky.js":596,"./lb":597,"./lb.js":597,"./lo":598,"./lo.js":598,"./lt":599,"./lt.js":599,"./lv":600,"./lv.js":600,"./me":601,"./me.js":601,"./mi":602,"./mi.js":602,"./mk":603,"./mk.js":603,"./ml":604,"./ml.js":604,"./mn":605,"./mn.js":605,"./mr":606,"./mr.js":606,"./ms":607,"./ms-my":608,"./ms-my.js":608,"./ms.js":607,"./mt":609,"./mt.js":609,"./my":610,"./my.js":610,"./nb":611,"./nb.js":611,"./ne":612,"./ne.js":612,"./nl":613,"./nl-be":614,"./nl-be.js":614,"./nl.js":613,"./nn":615,"./nn.js":615,"./oc-lnc":616,"./oc-lnc.js":616,"./pa-in":617,"./pa-in.js":617,"./pl":618,"./pl.js":618,"./pt":619,"./pt-br":620,"./pt-br.js":620,"./pt.js":619,"./ro":621,"./ro.js":621,"./ru":622,"./ru.js":622,"./sd":623,"./sd.js":623,"./se":624,"./se.js":624,"./si":625,"./si.js":625,"./sk":626,"./sk.js":626,"./sl":627,"./sl.js":627,"./sq":628,"./sq.js":628,"./sr":629,"./sr-cyrl":630,"./sr-cyrl.js":630,"./sr.js":629,"./ss":631,"./ss.js":631,"./sv":632,"./sv.js":632,"./sw":633,"./sw.js":633,"./ta":634,"./ta.js":634,"./te":635,"./te.js":635,"./tet":636,"./tet.js":636,"./tg":637,"./tg.js":637,"./th":638,"./th.js":638,"./tk":639,"./tk.js":639,"./tl-ph":640,"./tl-ph.js":640,"./tlh":641,"./tlh.js":641,"./tr":642,"./tr.js":642,"./tzl":643,"./tzl.js":643,"./tzm":644,"./tzm-latn":645,"./tzm-latn.js":645,"./tzm.js":644,"./ug-cn":646,"./ug-cn.js":646,"./uk":647,"./uk.js":647,"./ur":648,"./ur.js":648,"./uz":649,"./uz-latn":650,"./uz-latn.js":650,"./uz.js":649,"./vi":651,"./vi.js":651,"./x-pseudo":652,"./x-pseudo.js":652,"./yo":653,"./yo.js":653,"./zh-cn":654,"./zh-cn.js":654,"./zh-hk":655,"./zh-hk.js":655,"./zh-mo":656,"./zh-mo.js":656,"./zh-tw":657,"./zh-tw.js":657};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=704},728:function(t,e,r){"use strict";r.r(e);var n=r(33),o=(r(108),r(463)),c=r.n(o),l={data:function(){return{search:"",headers:[{text:"المعرف",value:"id",sortable:!1,align:"start"},{text:"اسم الطالب",value:"name",sortable:!1,align:"start"},{text:"الحالة",value:"status",sortable:!1,align:"start"},{text:"الموزع",value:"distributor",sortable:!1,align:"start"},{text:"الخصم",value:"discount",sortable:!1,align:"start"},{text:"تاريخ الكورس",value:"createdAt",sortable:!1,align:"start"},{text:"تغير الحالة",value:"actions",sortable:!1,align:"start"}],details:[],courseName:"",coursePrice:"",platformPriceTotal:"",remainingPrice:"",discounts:"",isEmpty:!1}},head:function(){return{title:"التقارير المالية"}},mounted:function(){this.getDetails()},methods:{MomentDate:function(t){return c()(t).format("YYYY-MM-DD")},getDetails:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,details,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),r=t.$route.params.id,e.prev=2,e.next=5,t.$axios.get("courseDetails/".concat(r));case 5:for(details=e.sent,t.details=details.data,t.courseName=details.data[0].course.courseTitle,t.coursePrice=details.data[0].course.coursePrice,t.platformPriceTotal=t.$route.query.p,t.remainingPrice=t.$route.query.r,n=[],i=0;i<details.data.length;i++)n.push(details.data[i].discount);t.discounts=n.reduce((function(a,b){return a+b}),0),t.$nuxt.$loading.finish(),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0.response),t.$router.go(-1),t.$toast.error("لا يمكن عرض الصفحة",{duration:3e3,position:"top-center"}),t.$nuxt.$loading.finish();case 23:case"end":return e.stop()}}),e,null,[[2,17]])})))()},changeStatus:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.idStudentCourse,n.prev=1,n.next=4,r.$axios.put("studentCourse/".concat(o),{statusId:e});case 4:c=n.sent,console.log(c.data),r.getDetails(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},j=r(42),d=r(66),m=r.n(d),v=r(445),h=r(444),f=r(496),y=r(458),k=r(711),x=r(519),_=r(198),w=r(199),z=r(122),C=r(448),S=r(460),V=r(465),$=r(446),D=r(441),component=Object(j.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details-page"},[r("v-card",{staticClass:"shadow-1 radius-1 pa-5 mb-10",attrs:{color:"secondary"}},[r("v-row",{staticClass:"align-center justify-center"},[r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("سعر الكورس: "+t._s(t.coursePrice))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("السعر الكلي للمنصة: "+t._s(t.platformPriceTotal))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("مبالغ غير مدفوعة: "+t._s(t.platformPriceTotal))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("مجموع الخصم: "+t._s(t.discounts))])])],1)],1),t._v(" "),r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.details,"items-per-page":15,"loading-text":"جاري التحميل",search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v(t._s(t.courseName))]),t._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في التقارير...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]},proxy:!0},{key:"item.id",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.student.user.idUser)+"\n    ")]}},{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.student.user.userName)+"\n    ")]}},{key:"item.status",fn:function(e){var n=e.item;return[1===n.status.idStatus?r("v-chip",{staticClass:"primary--text",attrs:{color:"warning"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")]):2===n.status.idStatus?r("v-chip",{staticClass:"primary--text",attrs:{color:"error"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")]):r("v-chip",{staticClass:"primary--text",attrs:{color:"success"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")])]}},{key:"item.distributor",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.distributor.userName)+"\n    ")]}},{key:"item.createdAt",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.MomentDate(r.createdAt))+"\n    ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"warning",icon:"",small:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("menu")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{nav:"",dense:"",color:"primary"}},[r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,1)}}},[t._v("Pending")]),t._v(" "),r("v-divider",{staticClass:"secondary mb-2 mt-2"}),t._v(" "),r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,2)}}},[t._v("Enrolled")]),t._v(" "),r("v-divider",{staticClass:"secondary mb-2 mt-2"}),t._v(" "),r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,3)}}},[t._v("Active+")])],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VChip:f.a,VCol:y.a,VDataTable:k.a,VDivider:x.a,VIcon:_.a,VList:w.a,VListItem:z.a,VMenu:C.a,VRow:S.a,VTextField:V.a,VToolbar:$.a,VToolbarTitle:D.a})}}]);