(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{720:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{newVideoForm:!1,videoTitleField:"",videoUrlField:"",videoDescriptionField:"",videoAttachemntsField:[],rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}],breadcrumbs:[{text:"الكورسات",disabled:!1,href:"/courses",color:"primary--text",bgColor:"text pa-3 shadow-1 radius-1"},{text:this.$route.params.id,disabled:!1,href:"/courses/".concat(this.$route.params.id),color:"text--text",bgColor:"transparent"},{text:"اضافة فيديو",disabled:!0,href:"",color:"text--text",bgColor:"transparent"}]}}},l=r(42),d=r(66),n=r.n(d),c=r(509),v=r(478),m=r(439),x=r(479),f=r(451),_=r(484),w=r(192),F=r(453),V=r(449),h=r(458),y=r(491),C=r(441),k=r(489),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addNewVideoPage"},[r("v-breadcrumbs",{staticClass:"text--text",attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-arrow-left")])]},proxy:!0},{key:"item",fn:function(t){var o=t.item;return[r("v-breadcrumbs-item",{class:o.bgColor,attrs:{href:o.href,disabled:o.disabled}},[r("span",{class:o.color},[e._v("\n          "+e._s(o.text)+"\n        ")])])]}}])}),e._v(" "),r("v-card",{staticClass:"shadow-1 radius-1 pa-5 secondary"},[r("v-toolbar",{staticClass:"shadow-1 radius-1 mb-5",attrs:{flat:"",color:"primary"}},[r("h4",[e._v("اضافة فيديو جديد")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:"",color:"text"},on:{click:function(t){return e.$router.push("/courses/"+e.$route.params.id)}}},"v-btn",l,!1),o),[r("v-icon",[e._v("mdi-arrow-left")])],1)]}}])},[e._v(" "),r("span",{staticClass:"primary--text"},[e._v("الرجوع الى صفحة الكورس")])])],1),e._v(" "),r("v-form",{ref:"AddNewVideoToCourse",attrs:{"lazy-validation":""},model:{value:e.newVideoForm,callback:function(t){e.newVideoForm=t},expression:"newVideoForm"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"عنوان الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"title"},model:{value:e.videoTitleField,callback:function(t){e.videoTitleField=t},expression:"videoTitleField"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"رابط الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"mdi-youtube"},model:{value:e.videoUrlField,callback:function(t){e.videoUrlField=t},expression:"videoUrlField"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[r("v-textarea",{attrs:{label:"رابط الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"text_fields"},model:{value:e.videoDescriptionField,callback:function(t){e.videoDescriptionField=t},expression:"videoDescriptionField"}})],1)],1),e._v(" "),r("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success",type:"submit",disabled:!e.newVideoForm}},[e._v("\n        حفظ الفيديو\n      ")])],1)],1)],1)}),[],!1,null,"30b0aca0",null);t.default=component.exports;n()(component,{VBreadcrumbs:c.a,VBreadcrumbsItem:v.a,VBtn:m.a,VCard:x.a,VCol:f.a,VForm:_.a,VIcon:w.a,VRow:F.a,VSpacer:V.a,VTextField:h.a,VTextarea:y.a,VToolbar:C.a,VTooltip:k.a})}}]);