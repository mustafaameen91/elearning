(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{704:function(t,e,r){var map={"./af":519,"./af.js":519,"./ar":520,"./ar-dz":521,"./ar-dz.js":521,"./ar-kw":522,"./ar-kw.js":522,"./ar-ly":523,"./ar-ly.js":523,"./ar-ma":524,"./ar-ma.js":524,"./ar-sa":525,"./ar-sa.js":525,"./ar-tn":526,"./ar-tn.js":526,"./ar.js":520,"./az":527,"./az.js":527,"./be":528,"./be.js":528,"./bg":529,"./bg.js":529,"./bm":530,"./bm.js":530,"./bn":531,"./bn-bd":532,"./bn-bd.js":532,"./bn.js":531,"./bo":533,"./bo.js":533,"./br":534,"./br.js":534,"./bs":535,"./bs.js":535,"./ca":536,"./ca.js":536,"./cs":537,"./cs.js":537,"./cv":538,"./cv.js":538,"./cy":539,"./cy.js":539,"./da":540,"./da.js":540,"./de":541,"./de-at":542,"./de-at.js":542,"./de-ch":543,"./de-ch.js":543,"./de.js":541,"./dv":544,"./dv.js":544,"./el":545,"./el.js":545,"./en-au":546,"./en-au.js":546,"./en-ca":547,"./en-ca.js":547,"./en-gb":548,"./en-gb.js":548,"./en-ie":549,"./en-ie.js":549,"./en-il":550,"./en-il.js":550,"./en-in":551,"./en-in.js":551,"./en-nz":552,"./en-nz.js":552,"./en-sg":553,"./en-sg.js":553,"./eo":554,"./eo.js":554,"./es":555,"./es-do":556,"./es-do.js":556,"./es-mx":557,"./es-mx.js":557,"./es-us":558,"./es-us.js":558,"./es.js":555,"./et":559,"./et.js":559,"./eu":560,"./eu.js":560,"./fa":561,"./fa.js":561,"./fi":562,"./fi.js":562,"./fil":563,"./fil.js":563,"./fo":564,"./fo.js":564,"./fr":565,"./fr-ca":566,"./fr-ca.js":566,"./fr-ch":567,"./fr-ch.js":567,"./fr.js":565,"./fy":568,"./fy.js":568,"./ga":569,"./ga.js":569,"./gd":570,"./gd.js":570,"./gl":571,"./gl.js":571,"./gom-deva":572,"./gom-deva.js":572,"./gom-latn":573,"./gom-latn.js":573,"./gu":574,"./gu.js":574,"./he":575,"./he.js":575,"./hi":576,"./hi.js":576,"./hr":577,"./hr.js":577,"./hu":578,"./hu.js":578,"./hy-am":579,"./hy-am.js":579,"./id":580,"./id.js":580,"./is":581,"./is.js":581,"./it":582,"./it-ch":583,"./it-ch.js":583,"./it.js":582,"./ja":584,"./ja.js":584,"./jv":585,"./jv.js":585,"./ka":586,"./ka.js":586,"./kk":587,"./kk.js":587,"./km":588,"./km.js":588,"./kn":589,"./kn.js":589,"./ko":590,"./ko.js":590,"./ku":591,"./ku.js":591,"./ky":592,"./ky.js":592,"./lb":593,"./lb.js":593,"./lo":594,"./lo.js":594,"./lt":595,"./lt.js":595,"./lv":596,"./lv.js":596,"./me":597,"./me.js":597,"./mi":598,"./mi.js":598,"./mk":599,"./mk.js":599,"./ml":600,"./ml.js":600,"./mn":601,"./mn.js":601,"./mr":602,"./mr.js":602,"./ms":603,"./ms-my":604,"./ms-my.js":604,"./ms.js":603,"./mt":605,"./mt.js":605,"./my":606,"./my.js":606,"./nb":607,"./nb.js":607,"./ne":608,"./ne.js":608,"./nl":609,"./nl-be":610,"./nl-be.js":610,"./nl.js":609,"./nn":611,"./nn.js":611,"./oc-lnc":612,"./oc-lnc.js":612,"./pa-in":613,"./pa-in.js":613,"./pl":614,"./pl.js":614,"./pt":615,"./pt-br":616,"./pt-br.js":616,"./pt.js":615,"./ro":617,"./ro.js":617,"./ru":618,"./ru.js":618,"./sd":619,"./sd.js":619,"./se":620,"./se.js":620,"./si":621,"./si.js":621,"./sk":622,"./sk.js":622,"./sl":623,"./sl.js":623,"./sq":624,"./sq.js":624,"./sr":625,"./sr-cyrl":626,"./sr-cyrl.js":626,"./sr.js":625,"./ss":627,"./ss.js":627,"./sv":628,"./sv.js":628,"./sw":629,"./sw.js":629,"./ta":630,"./ta.js":630,"./te":631,"./te.js":631,"./tet":632,"./tet.js":632,"./tg":633,"./tg.js":633,"./th":634,"./th.js":634,"./tk":635,"./tk.js":635,"./tl-ph":636,"./tl-ph.js":636,"./tlh":637,"./tlh.js":637,"./tr":638,"./tr.js":638,"./tzl":639,"./tzl.js":639,"./tzm":640,"./tzm-latn":641,"./tzm-latn.js":641,"./tzm.js":640,"./ug-cn":642,"./ug-cn.js":642,"./uk":643,"./uk.js":643,"./ur":644,"./ur.js":644,"./uz":645,"./uz-latn":646,"./uz-latn.js":646,"./uz.js":645,"./vi":647,"./vi.js":647,"./x-pseudo":648,"./x-pseudo.js":648,"./yo":649,"./yo.js":649,"./zh-cn":650,"./zh-cn.js":650,"./zh-hk":651,"./zh-hk.js":651,"./zh-mo":652,"./zh-mo.js":652,"./zh-tw":653,"./zh-tw.js":653};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=704},723:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(102),r(454)),c=r.n(o),l={data:function(){return{search:"",headers:[{text:"المعرف",value:"id",sortable:!1,align:"start"},{text:"اسم الطالب",value:"name",sortable:!1,align:"start"},{text:"الحالة",value:"status",sortable:!1,align:"start"},{text:"الموزع",value:"distributor",sortable:!1,align:"start"},{text:"الخصم",value:"discount",sortable:!1,align:"start"},{text:"تاريخ الكورس",value:"createdAt",sortable:!1,align:"start"},{text:"تغير الحالة",value:"actions",sortable:!1,align:"start"}],details:[],courseName:"",coursePrice:"",platformPriceTotal:"",remainingPrice:"",discounts:"",isEmpty:!1}},mounted:function(){this.getDetails()},methods:{MomentDate:function(t){return c()(t).format("YYYY-MM-DD")},getDetails:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,details,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),r=t.$route.params.id,e.prev=2,e.next=5,t.$axios.get("courseDetails/".concat(r));case 5:for(details=e.sent,t.details=details.data,t.courseName=details.data[0].course.courseTitle,t.coursePrice=details.data[0].course.coursePrice,t.platformPriceTotal=t.$route.query.p,t.remainingPrice=t.$route.query.r,n=[],i=0;i<details.data.length;i++)n.push(details.data[i].discount);t.discounts=n.reduce((function(a,b){return a+b}),0),t.$nuxt.$loading.finish(),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0.response),t.$router.go(-1),t.$toast.error("لا يمكن عرض الصفحة",{duration:3e3,position:"top-center"}),t.$nuxt.$loading.finish();case 23:case"end":return e.stop()}}),e,null,[[2,17]])})))()},changeStatus:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.idStudentCourse,n.prev=1,n.next=4,r.$axios.put("studentCourse/".concat(o),{statusId:e});case 4:c=n.sent,console.log(c.data),r.getDetails(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},j=r(40),d=r(63),m=r.n(d),v=r(435),h=r(469),f=r(516),y=r(449),k=r(710),x=r(515),_=r(189),w=r(190),z=r(116),C=r(439),S=r(451),V=r(457),$=r(436),D=r(433),component=Object(j.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details-page"},[r("v-card",{staticClass:"shadow-1 radius-1 pa-5 mb-10",attrs:{color:"secondary"}},[r("v-row",{staticClass:"align-center justify-center"},[r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("سعر الكورس: "+t._s(t.coursePrice))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("السعر الكلي للمنصة: "+t._s(t.platformPriceTotal))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("مبالغ غير مدفوعة: "+t._s(t.platformPriceTotal))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("مجموع الخصم: "+t._s(t.discounts))])])],1)],1),t._v(" "),r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.details,"items-per-page":15,"loading-text":"جاري التحميل",search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v(t._s(t.courseName))]),t._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في التقارير...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]},proxy:!0},{key:"item.id",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.student.user.idUser)+"\n    ")]}},{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.student.user.userName)+"\n    ")]}},{key:"item.status",fn:function(e){var n=e.item;return[1===n.status.idStatus?r("v-chip",{staticClass:"primary--text",attrs:{color:"warning"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")]):2===n.status.idStatus?r("v-chip",{staticClass:"primary--text",attrs:{color:"error"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")]):r("v-chip",{staticClass:"primary--text",attrs:{color:"success"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")])]}},{key:"item.distributor",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.distributor.userName)+"\n    ")]}},{key:"item.createdAt",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.MomentDate(r.createdAt))+"\n    ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"warning",icon:"",small:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("more_vert")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{nav:"",dense:"",color:"primary"}},[r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,1)}}},[t._v("Pending")]),t._v(" "),r("v-divider",{staticClass:"secondary mb-2 mt-2"}),t._v(" "),r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,2)}}},[t._v("Enrolled")]),t._v(" "),r("v-divider",{staticClass:"secondary mb-2 mt-2"}),t._v(" "),r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,3)}}},[t._v("Active+")])],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VChip:f.a,VCol:y.a,VDataTable:k.a,VDivider:x.a,VIcon:_.a,VList:w.a,VListItem:z.a,VMenu:C.a,VRow:S.a,VTextField:V.a,VToolbar:$.a,VToolbarTitle:D.a})}}]);