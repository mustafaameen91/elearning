(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{742:function(t,e,n){"use strict";n.r(e);var o=n(28),r=(n(105),{data:function(){return{setting:null,show:!1,settingsForm:!1,rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]}},mounted:function(){this.initialData()},methods:{initialData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("settings");case 3:n=e.sent,console.log(n.data[0]),t.setting=n.data[0],t.show=!0,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},saveData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.put("setting/".concat(t.setting.idSetting),t.setting);case 3:n=e.sent,t.$toast.success("تم حفظ البيانات",{duration:3e3,position:"top-center"}),console.log(n.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$toast.error("لم يتم حفظ البيانات",{duration:3e3,position:"top-center"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),l=r,c=n(41),v=n(57),d=n.n(v),m=n(445),f=n(447),x=n(456),w=n(484),h=n(471),k=n(458),V=n(757),_=n(463),y=n(446),F=n(439),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",[n("v-card",{staticClass:"shadow-1 radius-1 pa-5 secondary"},[n("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{flat:"",color:"primary"}},[n("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v("الاعدادات")])],1),t._v(" "),n("v-form",{ref:"settingsForm",on:{submit:function(e){return e.preventDefault(),t.saveData.apply(null,arguments)}},model:{value:t.settingsForm,callback:function(e){t.settingsForm=e},expression:"settingsForm"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-text-field",{attrs:{"background-color":"secondary",color:"text",outlined:"",label:"اسم المنصة",rules:t.rules},model:{value:t.setting.appName,callback:function(e){t.$set(t.setting,"appName",e)},expression:"setting.appName"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-text-field",{attrs:{"background-color":"secondary",color:"text",outlined:"",label:"رقم الاصدار",rules:t.rules},model:{value:t.setting.version,callback:function(e){t.$set(t.setting,"version",e)},expression:"setting.version"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-file-input",{attrs:{"background-color":"secondary",color:"text",outlined:"",label:"شعار المنصة",rules:t.rules},model:{value:t.setting.logo,callback:function(e){t.$set(t.setting,"logo",e)},expression:"setting.logo"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-switch",{attrs:{label:"قيد المعاينة",color:"info",inset:"","hide-details":""},model:{value:t.setting.inReview,callback:function(e){t.$set(t.setting,"inReview",e)},expression:"setting.inReview"}})],1)],1),t._v(" "),n("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success",type:"submit",disabled:!t.settingsForm}},[t._v("\n        حفظ المعلومات\n      ")])],1)],1)],1):t._e()}),[],!1,null,"7599cc0a",null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCol:x.a,VFileInput:w.a,VForm:h.a,VRow:k.a,VSwitch:V.a,VTextField:_.a,VToolbar:y.a,VToolbarTitle:F.a})}}]);