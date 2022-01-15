(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{516:function(e,t,o){e.exports=o.p+"img/noImage.277a256.png"},733:function(e,t,o){"use strict";o.r(t);var r=o(29),l=(o(108),{data:function(){return{courseId:null,search:"",courseName:null,courseLibraries:[],uploadFileDialog:!1,uploadNewFileForm:!1,fileTitle:null,fileSubTitle:null,fileUploaded:null,fileTemp:null,uploadType:1,libraryType:[{text:"رابط",value:1},{text:"ملف",value:0}]}},created:function(){this.courseId=this.$route.params.id,this.courseDetails()},methods:{getFile:function(e){this.fileTemp=e},removeFile:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!confirm("هل تريد حذف الملف")){o.next=12;break}return o.prev=1,o.next=4,t.$axios.delete("library/".concat(e.idHomework));case 4:o.sent,t.$toast.success("تم حذف الملف",{duration:3e3,position:"top-center"}),t.courseDetails(),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),console.error(o.t0.response);case 12:case"end":return o.stop()}}),o,null,[[1,9]])})))()},uploadFile:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var form,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.uploadNewFileRef.validate()){t.next=21;break}if(t.prev=1,2!==e.uploadType){t.next=9;break}return(form=new FormData).append("attachment",e.fileTemp),t.next=7,e.$axios.post("upload",form);case 7:o=t.sent,e.fileUploaded=o.data.imagePath;case 9:return t.next=11,e.$axios.post("addHomework",{homeworkTitle:e.fileTitle,homeworkSubTitle:e.fileSubTitle,homeworkPath:e.fileUploaded,courseId:1*e.$route.params.id,createdBy:1*e.$auth.user.idUser,homeworkType:1*e.uploadType});case 11:t.sent,e.$toast.success("تم رفع الملف",{duration:3e3,position:"top-center"}),e.courseDetails(),e.uploadFileDialog=!1,e.$refs.uploadNewFileRef.reset(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),console.error(t.t0.response);case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))()},courseDetails:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("course/".concat(e.courseId));case 3:o=t.sent,e.courseName=o.data.courseTitle,e.courseLibraries=o.data.Homework,console.log(o),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),n=o(43),c=o(67),d=o.n(c),v=o(740),f=o(448),m=o(447),x=o(445),_=o(461),h=o(738),w=o(522),y=o(483),k=o(472),T=o(198),F=o(463),V=o(661),C=o(459),D=o(468),S=o(449),$=o(444),R=o(502),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"course-library"},[r("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:e.uploadFileDialog,callback:function(t){e.uploadFileDialog=t},expression:"uploadFileDialog"}},[r("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[r("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{flat:"",color:"primary"}},[r("h4",[e._v("رفع ملف جديد")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",color:"text"},on:{click:function(t){e.uploadFileDialog=!1}}},[r("v-icon",[e._v("close")])],1)],1),e._v(" "),r("v-form",{ref:"uploadNewFileRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.uploadFile.apply(null,arguments)}},model:{value:e.uploadNewFileForm,callback:function(t){e.uploadNewFileForm=t},expression:"uploadNewFileForm"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"العنوان",outlined:"",color:"text"},model:{value:e.fileTitle,callback:function(t){e.fileTitle=t},expression:"fileTitle"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"العنوان الثانوي",outlined:"",color:"text"},model:{value:e.fileSubTitle,callback:function(t){e.fileSubTitle=t},expression:"fileSubTitle"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-select",{attrs:{items:e.libraryType,"item-color":"text",label:"النوع",outlined:"",color:"text"},model:{value:e.uploadType,callback:function(t){e.uploadType=t},expression:"uploadType"}})],1),e._v(" "),1===e.uploadType?r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"الرابط",outlined:"",color:"text"},model:{value:e.fileUploaded,callback:function(t){e.fileUploaded=t},expression:"fileUploaded"}})],1):e._e(),e._v(" "),0===e.uploadType?r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-file-input",{attrs:{label:"الملف",outlined:"",color:"text"},on:{change:e.getFile},model:{value:e.fileUploaded,callback:function(t){e.fileUploaded=t},expression:"fileUploaded"}})],1):e._e()],1),e._v(" "),r("v-btn",{attrs:{block:"",large:"",color:"success",type:"submit"}},[e._v(" رفع الملف ")])],1)],1)],1),e._v(" "),r("v-card",{staticClass:"shadow-1 radius-1 pa-5",attrs:{color:"secondary"}},[r("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[e._v("\n          "+e._s(e.courseName)+" "),r("v-icon",[e._v("arrow_left")]),e._v(" الواجبات\n        ")],1),e._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"الواجبات...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{icon:"",color:"text"},on:{click:function(t){e.uploadFileDialog=!0}}},"v-btn",l,!1),o),[r("v-icon",[e._v("upload")])],1)]}}])},[e._v(" "),r("span",{staticClass:"primary--text"},[e._v("رفع الملفات")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{icon:"",color:"text"},on:{click:function(t){return e.$router.go(-1)}}},"v-btn",l,!1),o),[r("v-icon",[e._v("mdi-arrow-left")])],1)]}}])},[e._v(" "),r("span",{staticClass:"primary--text"},[e._v("الرجوع الى الكورس")])])],1)]),e._v(" "),e.courseLibraries.length>0?r("v-row",e._l(e.courseLibraries,(function(t){return r("v-col",{key:t.idLibrary,attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-card",{staticClass:"shadow-1 radius-1 pa-5",attrs:{color:"primary"}},[r("img",{staticClass:"shadow-1",staticStyle:{width:"100%",display:"block","border-radius":"75px"},attrs:{src:o(516)}}),e._v(" "),r("v-card-title",[e._v(e._s(t.homeworkTitle))]),e._v(" "),r("v-card-text",[e._v(e._s(t.homeworkSubTitle))]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"success",text:"",href:e.$axios.defaults.baseURL+t.homeworkPath}},[e._v("\n              تحميل\n            ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"error",text:""},on:{click:function(o){return e.removeFile(t)}}},[e._v(" حذف ")])],1)],1)],1)})),1):r("v-alert",{staticClass:"shadow-1 radius-1",attrs:{"colored-border":"",type:"warning",color:"warning"}},[r("h1",[e._v("لا يوجد واجبات")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAlert:v.a,VBtn:f.a,VCard:m.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VCol:_.a,VDialog:h.a,VDivider:w.a,VFileInput:y.a,VForm:k.a,VIcon:T.a,VRow:F.a,VSelect:V.a,VSpacer:C.a,VTextField:D.a,VToolbar:S.a,VToolbarTitle:$.a,VTooltip:R.a})}}]);