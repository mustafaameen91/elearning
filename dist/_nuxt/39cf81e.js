(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{723:function(t,e,r){var map={"./af":521,"./af.js":521,"./ar":522,"./ar-dz":523,"./ar-dz.js":523,"./ar-kw":524,"./ar-kw.js":524,"./ar-ly":525,"./ar-ly.js":525,"./ar-ma":526,"./ar-ma.js":526,"./ar-sa":527,"./ar-sa.js":527,"./ar-tn":528,"./ar-tn.js":528,"./ar.js":522,"./az":529,"./az.js":529,"./be":530,"./be.js":530,"./bg":531,"./bg.js":531,"./bm":532,"./bm.js":532,"./bn":533,"./bn-bd":534,"./bn-bd.js":534,"./bn.js":533,"./bo":535,"./bo.js":535,"./br":536,"./br.js":536,"./bs":537,"./bs.js":537,"./ca":538,"./ca.js":538,"./cs":539,"./cs.js":539,"./cv":540,"./cv.js":540,"./cy":541,"./cy.js":541,"./da":542,"./da.js":542,"./de":543,"./de-at":544,"./de-at.js":544,"./de-ch":545,"./de-ch.js":545,"./de.js":543,"./dv":546,"./dv.js":546,"./el":547,"./el.js":547,"./en-au":548,"./en-au.js":548,"./en-ca":549,"./en-ca.js":549,"./en-gb":550,"./en-gb.js":550,"./en-ie":551,"./en-ie.js":551,"./en-il":552,"./en-il.js":552,"./en-in":553,"./en-in.js":553,"./en-nz":554,"./en-nz.js":554,"./en-sg":555,"./en-sg.js":555,"./eo":556,"./eo.js":556,"./es":557,"./es-do":558,"./es-do.js":558,"./es-mx":559,"./es-mx.js":559,"./es-us":560,"./es-us.js":560,"./es.js":557,"./et":561,"./et.js":561,"./eu":562,"./eu.js":562,"./fa":563,"./fa.js":563,"./fi":564,"./fi.js":564,"./fil":565,"./fil.js":565,"./fo":566,"./fo.js":566,"./fr":567,"./fr-ca":568,"./fr-ca.js":568,"./fr-ch":569,"./fr-ch.js":569,"./fr.js":567,"./fy":570,"./fy.js":570,"./ga":571,"./ga.js":571,"./gd":572,"./gd.js":572,"./gl":573,"./gl.js":573,"./gom-deva":574,"./gom-deva.js":574,"./gom-latn":575,"./gom-latn.js":575,"./gu":576,"./gu.js":576,"./he":577,"./he.js":577,"./hi":578,"./hi.js":578,"./hr":579,"./hr.js":579,"./hu":580,"./hu.js":580,"./hy-am":581,"./hy-am.js":581,"./id":582,"./id.js":582,"./is":583,"./is.js":583,"./it":584,"./it-ch":585,"./it-ch.js":585,"./it.js":584,"./ja":586,"./ja.js":586,"./jv":587,"./jv.js":587,"./ka":588,"./ka.js":588,"./kk":589,"./kk.js":589,"./km":590,"./km.js":590,"./kn":591,"./kn.js":591,"./ko":592,"./ko.js":592,"./ku":593,"./ku.js":593,"./ky":594,"./ky.js":594,"./lb":595,"./lb.js":595,"./lo":596,"./lo.js":596,"./lt":597,"./lt.js":597,"./lv":598,"./lv.js":598,"./me":599,"./me.js":599,"./mi":600,"./mi.js":600,"./mk":601,"./mk.js":601,"./ml":602,"./ml.js":602,"./mn":603,"./mn.js":603,"./mr":604,"./mr.js":604,"./ms":605,"./ms-my":606,"./ms-my.js":606,"./ms.js":605,"./mt":607,"./mt.js":607,"./my":608,"./my.js":608,"./nb":609,"./nb.js":609,"./ne":610,"./ne.js":610,"./nl":611,"./nl-be":612,"./nl-be.js":612,"./nl.js":611,"./nn":613,"./nn.js":613,"./oc-lnc":614,"./oc-lnc.js":614,"./pa-in":615,"./pa-in.js":615,"./pl":616,"./pl.js":616,"./pt":617,"./pt-br":618,"./pt-br.js":618,"./pt.js":617,"./ro":619,"./ro.js":619,"./ru":620,"./ru.js":620,"./sd":621,"./sd.js":621,"./se":622,"./se.js":622,"./si":623,"./si.js":623,"./sk":624,"./sk.js":624,"./sl":625,"./sl.js":625,"./sq":626,"./sq.js":626,"./sr":627,"./sr-cyrl":628,"./sr-cyrl.js":628,"./sr.js":627,"./ss":629,"./ss.js":629,"./sv":630,"./sv.js":630,"./sw":631,"./sw.js":631,"./ta":632,"./ta.js":632,"./te":633,"./te.js":633,"./tet":634,"./tet.js":634,"./tg":635,"./tg.js":635,"./th":636,"./th.js":636,"./tk":637,"./tk.js":637,"./tl-ph":638,"./tl-ph.js":638,"./tlh":639,"./tlh.js":639,"./tr":640,"./tr.js":640,"./tzl":641,"./tzl.js":641,"./tzm":642,"./tzm-latn":643,"./tzm-latn.js":643,"./tzm.js":642,"./ug-cn":644,"./ug-cn.js":644,"./uk":645,"./uk.js":645,"./ur":646,"./ur.js":646,"./uz":647,"./uz-latn":648,"./uz-latn.js":648,"./uz.js":647,"./vi":649,"./vi.js":649,"./x-pseudo":650,"./x-pseudo.js":650,"./yo":651,"./yo.js":651,"./zh-cn":652,"./zh-cn.js":652,"./zh-hk":653,"./zh-hk.js":653,"./zh-mo":654,"./zh-mo.js":654,"./zh-tw":655,"./zh-tw.js":655};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=723},753:function(t,e,r){"use strict";r.r(e);var n=r(28),o=(r(105),r(465)),c=r.n(o),l={data:function(){return{search:"",headers:[{text:"المعرف",value:"id",sortable:!1,align:"start"},{text:"اسم الطالب",value:"name",sortable:!1,align:"start"},{text:"الحالة",value:"status",sortable:!1,align:"start"},{text:"الموزع",value:"distributor",sortable:!1,align:"start"},{text:"الخصم",value:"discount",sortable:!1,align:"start"},{text:"تاريخ الكورس",value:"createdAt",sortable:!1,align:"start"},{text:"تغير الحالة",value:"actions",sortable:!1,align:"start"}],details:[],courseName:"",coursePrice:"",platformPriceTotal:"",remainingPrice:"",discounts:"",isEmpty:!1}},head:function(){return{title:"التقارير المالية"}},mounted:function(){this.getDetails()},methods:{MomentDate:function(t){return c()(t).format("YYYY-MM-DD")},getDetails:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,details,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),r=t.$route.params.id,e.prev=2,e.next=5,t.$axios.get("courseDetails/".concat(r));case 5:for(details=e.sent,t.details=details.data,t.courseName=details.data[0].course.courseTitle,t.coursePrice=details.data[0].course.coursePrice,t.platformPriceTotal=t.$route.query.p,t.remainingPrice=t.$route.query.r,n=[],i=0;i<details.data.length;i++)n.push(details.data[i].discount);t.discounts=n.reduce((function(a,b){return a+b}),0),t.$nuxt.$loading.finish(),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0.response),t.$router.go(-1),t.$toast.error("لا يمكن عرض الصفحة",{duration:3e3,position:"top-center"}),t.$nuxt.$loading.finish();case 23:case"end":return e.stop()}}),e,null,[[2,17]])})))()},changeStatus:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.idStudentCourse,n.prev=1,n.next=4,r.$axios.put("studentCourse/".concat(o),{statusId:e});case 4:c=n.sent,console.log(c.data),r.getDetails(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},j=r(41),d=r(57),m=r.n(d),v=r(449),h=r(450),f=r(505),y=r(460),k=r(733),x=r(516),_=r(197),w=r(196),z=r(120),C=r(452),S=r(462),V=r(469),$=r(451),D=r(443),component=Object(j.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details-page"},[r("v-card",{staticClass:"shadow-1 radius-1 pa-5 mb-10",attrs:{color:"secondary"}},[r("v-row",{staticClass:"align-center justify-center"},[r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("سعر الكورس: "+t._s(t.coursePrice))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("السعر الكلي للمنصة: "+t._s(t.platformPriceTotal))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("مبالغ غير مدفوعة: "+t._s(t.platformPriceTotal))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("span",{staticClass:"d-block shadow-1 primary pa-5 radius-1",staticStyle:{width:"100%","text-align":"center"}},[t._v("مجموع الخصم: "+t._s(t.discounts))])])],1)],1),t._v(" "),r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.details,"items-per-page":15,"loading-text":"جاري التحميل",search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v(t._s(t.courseName))]),t._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في التقارير...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]},proxy:!0},{key:"item.id",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.student.user.idUser)+"\n    ")]}},{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.student.user.userName)+"\n    ")]}},{key:"item.status",fn:function(e){var n=e.item;return[1===n.status.idStatus?r("v-chip",{staticClass:"primary--text",attrs:{color:"warning"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")]):2===n.status.idStatus?r("v-chip",{staticClass:"primary--text",attrs:{color:"error"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")]):r("v-chip",{staticClass:"primary--text",attrs:{color:"success"}},[t._v("\n        "+t._s(n.status.statusName)+"\n      ")])]}},{key:"item.distributor",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.distributor.userName)+"\n    ")]}},{key:"item.createdAt",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.MomentDate(r.createdAt))+"\n    ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"warning",icon:"",small:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("menu")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{nav:"",dense:"",color:"primary"}},[r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,1)}}},[t._v("Pending")]),t._v(" "),r("v-divider",{staticClass:"secondary mb-2 mt-2"}),t._v(" "),r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,2)}}},[t._v("Enrolled")]),t._v(" "),r("v-divider",{staticClass:"secondary mb-2 mt-2"}),t._v(" "),r("v-list-item",{staticClass:"text--text",on:{click:function(e){return t.changeStatus(n,3)}}},[t._v("Active+")])],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VChip:f.a,VCol:y.a,VDataTable:k.a,VDivider:x.a,VIcon:_.a,VList:w.a,VListItem:z.a,VMenu:C.a,VRow:S.a,VTextField:V.a,VToolbar:$.a,VToolbarTitle:D.a})}}]);