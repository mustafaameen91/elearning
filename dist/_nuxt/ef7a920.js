(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{497:function(t,e,r){var n=r(4),l=r(43),o=r(108);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return l(t,(function(t,r){o(e,t,r)}),{AS_ENTRIES:!0}),e}})},741:function(t,e,r){"use strict";r.r(e);var n=r(28),l=(r(105),r(85),r(497),r(18),r(65),r(69),r(7),{data:function(){return{dates:[],menu:!1,filterFormModel:!1,search:"",headers:[{text:"المعرف",value:"idCourse",sortable:!0,align:"start",width:200},{text:"الصورة",value:"coursePath",sortable:!0,align:"start",width:200},{text:"عنوان الكورس",value:"courseTitle",sortable:!0,align:"start",width:200},{text:"وصف الكورس",value:"courseDescription",sortable:!0,align:"start",width:200},{text:"سعر الكورس",value:"coursePrice",sortable:!0,align:"start",width:200},{text:"المادة",value:"subject.subjectName",sortable:!0,align:"start",width:200},{text:"الصف",value:"class.className",sortable:!0,align:"start",width:200},{text:"التقيم",value:"courseRate",sortable:!0,align:"start",width:200},{text:"سعر المنصة",value:"platformPrice",sortable:!0,align:"start",width:200},{text:"السعر الكلي",value:"totalPrice",sortable:!0,align:"start",width:200},{text:"السعر المتبقي",value:"remainingPrice",sortable:!0,align:"start",width:200},{text:"المسجلين",value:"EnrolledStudents",sortable:!0,align:"start",width:200},{text:"قيد الانتضار",value:"PendingStudents",sortable:!0,align:"start",width:200},{text:"المقبولين",value:"ActiveStudents",sortable:!0,align:"start",width:200},{text:"رقم هاتف الاستاذ",value:"user.phone",sortable:!0,align:"start",width:200}],financialDetails:[],subjects:[],teachers:[]}},head:function(){return{title:"التقارير المالية"}},computed:{dateRangeText:{get:function(){return this.dates.join("/")},set:function(){this.dates.join("/")}}},mounted:function(){this.getFinancialDetails(),this.getTeachers(),this.getSubjects()},methods:{getFinancialDetails:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("financialDetails");case 3:r=e.sent,t.financialDetails=r.data,console.log(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},filterFinancialDetails:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data,n,l,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return data=Object.fromEntries(new FormData(t.target)),n={},data.dates&&(n.dates=data.dates.toString()),data.subjectId&&(n.subjectId=data.subjectId),data.createdBy&&(n.createdBy=data.createdBy),l=Object.keys(n).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(n[t])})).join("&"),r.prev=6,r.next=9,e.$axios.get("financialDetails?".concat(l));case 9:o=r.sent,e.financialDetails=o.data,r.next=16;break;case 13:r.prev=13,r.t0=r.catch(6),console.error(r.t0.response);case 16:case"end":return r.stop()}}),r,null,[[6,13]])})))()},getTeachers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("userRoles/3");case 3:r=e.sent,t.teachers=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getSubjects:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("subjects");case 3:r=e.sent,t.subjects=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},openDetailsPage:function(t,e){var r=e.item.idCourse;this.$router.push({path:"reports/".concat(r),query:{p:e.item.platformPriceTotal,r:e.item.remainingPrice,t:e.item.totalPrice}})}}}),o=r(41),c=r(57),d=r.n(c),v=r(445),m=r(447),f=r(456),x=r(729),h=r(728),w=r(471),j=r(197),k=r(293),y=r(448),_=r(458),R=r(656),D=r(454),C=r(463),T=r(446),S=r(439),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reports-page"},[r("v-card",{staticClass:"shadow-1 radius-1 pa-5 mb-10",attrs:{color:"secondary"}},[r("v-form",{ref:"filterFormRef",on:{submit:function(e){return e.preventDefault(),t.filterFinancialDetails.apply(null,arguments)}}},[r("v-row",{staticClass:"align-center justify-space-between"},[r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.dateRangeText,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.dateRangeText=e},"update:return-value":function(e){t.dateRangeText=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"التاريخ (من و الى)","prepend-inner-icon":"mdi-calendar",readonly:"",color:"text",outlined:"",name:"dates","hide-details":"",clearable:""},model:{value:t.dateRangeText,callback:function(e){t.dateRangeText=e},expression:"dateRangeText"}},"v-text-field",l,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{range:"","no-title":"",scrollable:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"text"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"text"},on:{click:function(e){return t.$refs.menu.save(t.dates)}}},[t._v("\n                OK\n              ")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("v-select",{attrs:{items:t.teachers,"item-color":"text",color:"text",label:"الاساتذة","item-value":"idUser","item-text":"userName",name:"createdBy",outlined:"",clearable:"","hide-details":""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("v-select",{attrs:{items:t.subjects,"item-color":"text",color:"text",label:"المادة",outlined:"","item-value":"idSubject","item-text":"subjectName",name:"subjectId",clearable:"","hide-details":""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("v-btn",{staticClass:"secondary--text shadow-1",attrs:{color:"info",type:"submit"}},[r("v-icon",{staticClass:"ml-2"},[t._v("search")]),t._v(" "),r("span",[t._v("بحث")])],1),t._v(" "),r("v-btn",{staticClass:"secondary--text shadow-1",attrs:{color:"info"},on:{click:t.getFinancialDetails}},[r("v-icon",{staticClass:"ml-2"},[t._v("refresh")]),t._v(" "),r("span",[t._v("اعادة تعين")])],1)],1)],1)],1)],1),t._v(" "),r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.financialDetails,"items-per-page":15,"loading-text":"جاري التحميل",search:t.search},on:{"dblclick:row":t.openDetailsPage},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v("التقارير المالية")]),t._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في التقارير...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]},proxy:!0},{key:"item.coursePath",fn:function(e){var n=e.item;return[r("v-img",{attrs:{src:t.$axios.defaults.baseURL+n.coursePath,"max-width":"40px","max-height":"40px"}})]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCol:f.a,VDataTable:x.a,VDatePicker:h.a,VForm:w.a,VIcon:j.a,VImg:k.a,VMenu:y.a,VRow:_.a,VSelect:R.a,VSpacer:D.a,VTextField:C.a,VToolbar:T.a,VToolbarTitle:S.a})}}]);