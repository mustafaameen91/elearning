(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{712:function(t,e,r){"use strict";r.r(e);var n=r(33),o=(r(109),{data:function(){return{search:"",headers:[{text:"المعرف",align:"start",value:"idUser",sortable:!1},{text:"اسم المستخدم",value:"userName",sortable:!1},{text:"الهاتف",value:"phone",sortable:!1},{text:"المحافظة",value:"province.provinceName",sortable:!1},{text:"الاجرائات",value:"actions",sortable:!1,width:200}],assistants:[],teachers:[],teacherId:null,assistantId:null,createAssistDialog:!1,createModel:!1}},mounted:function(){this.GetAssistants(),this.GetTeachers()},head:function(){return{title:"المساعدين"}},methods:{GetAssistants:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("userRoles/6");case 3:r=e.sent,t.assistants=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},GetTeachers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("userRoles/3");case 3:r=e.sent,t.teachers=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},saveAssistant:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.createRef.validate()){e.next=12;break}return e.prev=1,e.next=4,t.$axios.post("addAssistanceTeacher",{teacherId:1*t.teacherId,assistanceId:1*t.assistantId});case 4:r=e.sent,console.log(r.data),t.GetAssistants(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),c=o,l=r(42),d=r(66),v=r.n(d),f=r(448),h=r(447),m=r(458),x=r(711),w=r(480),_=r(474),k=r(198),y=r(460),V=r(648),I=r(456),A=r(469),R=r(449),C=r(441),D=r(477),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"assistants-page"},[r("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:t.createAssistDialog,callback:function(e){t.createAssistDialog=e},expression:"createAssistDialog"}},[r("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[r("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[r("h4",[t._v("انشاء مساعد جديد")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"error",icon:""},on:{click:function(e){t.createAssistDialog=!1}}},[r("v-icon",[t._v("close")])],1)],1),t._v(" "),r("v-form",{ref:"createRef",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.saveAssistant.apply(null,arguments)}},model:{value:t.createModel,callback:function(e){t.createModel=e},expression:"createModel"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{color:"white",outlined:"",label:"الاساتذة",items:t.teachers,"item-value":"idUser","item-text":"userName","item-color":"white"},model:{value:t.teacherId,callback:function(e){t.teacherId=e},expression:"teacherId"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{color:"white",outlined:"",label:"المساعدين",items:t.assistants,"item-value":"idUser","item-text":"userName","item-color":"white"},model:{value:t.assistantId,callback:function(e){t.assistantId=e},expression:"assistantId"}})],1)],1),t._v(" "),r("v-btn",{attrs:{color:"success",block:"",large:"",depressed:"",type:"submit"}},[t._v("\n          حفظ المعلومات\n        ")])],1)],1)],1),t._v(" "),r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.assistants,"items-per-page":15,"item-key":"idUser",search:t.search,"loading-text":"جاري التحميل"},on:{"update:items":function(e){t.assistants=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v("المساعدين")]),t._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في المساعدين...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"mr-10",attrs:{icon:"",color:"text"},on:{click:function(e){t.createAssistDialog=!0}}},"v-btn",o,!1),n),[r("v-icon",[t._v("add")])],1)]}}])},[t._v(" "),r("span",{staticClass:"primary--text"},[t._v("اضافة مساعد جديد")])])],1)])]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-btn",{attrs:{color:"warning",icon:""},on:{click:function(e){return t.openUpdateDialog(n)}}},[r("v-icon",[t._v("edit")])],1),t._v(" "),r("v-btn",{attrs:{color:"error",icon:""},on:{click:function(e){return t.deleteStudents(n)}}},[r("v-icon",[t._v("delete")])],1),t._v(" "),r("v-btn",{attrs:{color:"white",icon:""},on:{click:function(e){return t.deleteStudents(n)}}},[r("v-icon",[t._v("info")])],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCol:m.a,VDataTable:x.a,VDialog:w.a,VForm:_.a,VIcon:k.a,VRow:y.a,VSelect:V.a,VSpacer:I.a,VTextField:A.a,VToolbar:R.a,VToolbarTitle:C.a,VTooltip:D.a})}}]);