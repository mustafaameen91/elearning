(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{737:function(t,e,o){"use strict";o.r(e);o(7),o(8),o(9),o(13),o(6),o(14);var r=o(28),l=o(2);o(105),o(69),o(32),o(78),o(27);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{search:"",uploadFileDialog:!1,uploadFileForm:!1,title:"",subTitle:"",document:"",tempImage:null,tempImageExt:"",headers:[{text:"المعرف",align:"start",value:"idLibrary",sortable:!1},{text:"العنوان",value:"title",sortable:!1},{text:"العنوان الثانوي",value:"subTitle",sortable:!1},{text:"الملف",value:"documentPath",sortable:!1},{text:"بواسطة",value:"user.userName",sortable:!1},{text:"النوع",value:"documentExt",sortable:!1},{text:"الاجرائات",value:"actions",sortable:!1}],files:[],rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]}},head:function(){return{title:"المكتبة"}},mounted:function(){this.getFiles()},methods:{getFiles:function(){var t=this;this.$nuxt.$loading.start(),this.$axios.get("globalLibraries").then((function(e){console.log(e),t.files=e.data.map((function(e){return c(c({},e),{},{idLibrary:e.idLibrary,title:e.title,subTitle:e.subTitle,documentPath:e.documentPath,documentExt:t.getExt(e)})})),t.$nuxt.$loading.finish()})).catch((function(e){console.log(e.response),t.$nuxt.$loading.finish()}))},getExt:function(t){var e=t.documentPath.split("."),o=e[e.length-1];return"png"===o||"jpeg"===o||"jpg"===o||"doc"===o||"docx"===o?"".concat(o):"pdf"},saveImage:function(t){this.tempImage=t;var e=t.name.split(".");this.tempImageExt=e[e.length-1],console.log(t)},deleteFile:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,!confirm("هل تريد حذف الملف ؟")){o.next=6;break}return o.next=4,e.$axios.delete("globalLibrary/".concat(t.idLibrary));case 4:r=o.sent,console.log(r.data);case 6:e.getFiles(),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.log(o.t0.response);case 12:case"end":return o.stop()}}),o,null,[[0,9]])})))()},uploadFile:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.uploadFileRef.validate()){e.next=17;break}return e.prev=1,(form=new FormData).append("attachment",t.tempImage),e.next=6,t.$axios.post("upload",form);case 6:return o=e.sent,e.next=9,t.$axios.post("addGlobalLibrary",{title:t.title,subTitle:t.subTitle,documentPath:o.data.imagePath,downloaded:0,createdBy:1*t.$auth.user.idUser});case 9:e.sent,t.getFiles(),t.uploadFileDialog=!1,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()}}},v=o(41),m=o(57),f=o.n(m),x=o(445),h=o(447),y=o(456),F=o(729),w=o(481),_=o(484),k=o(471),j=o(197),O=o(293),P=o(458),D=o(454),T=o(463),V=o(446),$=o(439),E=o(480),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"LibraryPage"}},[o("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:t.uploadFileDialog,callback:function(e){t.uploadFileDialog=e},expression:"uploadFileDialog"}},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[o("h4",[t._v("رفع ملف")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"error",icon:""},on:{click:function(e){t.uploadFileDialog=!1}}},[o("v-icon",[t._v("close")])],1)],1),t._v(" "),o("v-form",{ref:"uploadFileRef",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.uploadFile.apply(null,arguments)}},model:{value:t.uploadFileForm,callback:function(e){t.uploadFileForm=e},expression:"uploadFileForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{label:"العنوان",outlined:"",rules:t.rules,color:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{label:"العنوان الثانوي",outlined:"",rules:t.rules,color:"text"},model:{value:t.subTitle,callback:function(e){t.subTitle=e},expression:"subTitle"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-file-input",{attrs:{label:"الملفات",outlined:"",rules:t.rules,color:"text",accept:".png, .jpg, .jpeg, .pdf, .doc,.docx"},on:{change:t.saveImage},model:{value:t.document,callback:function(e){t.document=e},expression:"document"}})],1)],1),t._v(" "),o("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success",disabled:!t.uploadFileForm,type:"submit"}},[t._v("\n          رفع الملف\n        ")])],1)],1)],1),t._v(" "),o("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.files,"items-per-page":15,search:t.search},on:{"update:items":function(e){t.files=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[o("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[o("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v("المكتبة")]),t._v(" "),o("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في المكتبة...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),o("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"mr-10",attrs:{icon:"",color:"text"},on:{click:function(e){t.uploadFileDialog=!0}}},"v-btn",l,!1),r),[o("v-icon",[t._v("mdi-upload")])],1)]}}])},[t._v(" "),o("span",{staticClass:"primary--text"},[t._v("رفع ملف")])])],1)])]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[o("v-btn",{attrs:{color:"error",icon:"",depressed:""},on:{click:function(e){return t.deleteFile(r)}}},[o("v-icon",[t._v("delete")])],1)]}},{key:"item.documentPath",fn:function(e){var r=e.item;return["png"===r.documentExt||"jpg"===r.documentExt||"jpeg"===r.documentExt?o("v-img",{attrs:{src:t.$axios.defaults.baseURL+r.documentPath,"max-width":"100px","max-height":"100px"}}):o("v-btn",{attrs:{icon:"",color:"success",href:t.$axios.defaults.baseURL+r.documentPath}},[o("v-icon",[t._v("download")])],1)]}}],null,!0)})],1)}),[],!1,null,"1d6ecafc",null);e.default=component.exports;f()(component,{VBtn:x.a,VCard:h.a,VCol:y.a,VDataTable:F.a,VDialog:w.a,VFileInput:_.a,VForm:k.a,VIcon:j.a,VImg:O.a,VRow:P.a,VSpacer:D.a,VTextField:T.a,VToolbar:V.a,VToolbarTitle:$.a,VTooltip:E.a})}}]);