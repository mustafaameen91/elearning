(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{654:function(t,e,o){"use strict";o.r(e);var n=o(28),r=(o(105),{name:"NotificationsCourses",data:function(){return{notificationsForm:!1,notificationsTitle:null,notificationsText:null,notificationsCourse:null,notificationsTeacher:null,isTeacherSelected:!1,courses:[],teachers:[]}},mounted:function(){this.GetTeachers()},methods:{GetTeachers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("userRoles/3");case 2:o=e.sent,t.teachers=o.data,console.log(o.data);case 5:case"end":return e.stop()}}),e)})))()},GetCourses:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.isTeacherSelected=!0,o.prev=1,o.next=4,e.$axios.get("courseMoney/".concat(t.idUser));case 4:n=o.sent,e.courses=n.data,console.log(n.data),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),console.error(o.t0);case 12:case"end":return o.stop()}}),o,null,[[1,9]])})))()},sendNotification:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.prev=1,e.next=4,t.$axios.post("studentCoursesNotification",{title:t.notificationsTitle,content:t.notificationsText,id:t.notificationsCourse});case 4:o=e.sent,t.$toast.success("تم ارسال الاشعار",{position:"top-center",duration:3e3}),console.log(o),t.$nuxt.$loading.finish(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),t.$nuxt.$loading.finish(),t.$toast.error("لم يتم ارسال الاشعار! لا يوجد طلاب في هذا الكورس",{position:"top-center",duration:3e3}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}}),c=o(41),l=o(64),f=o.n(l),d=o(449),v=o(450),m=o(460),x=o(475),h=o(462),T=o(653),C=o(469),k=o(492),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"NotificationsCourses"},[o("v-card",{staticClass:"pa-10",attrs:{color:"secondary",elevation:"0"}},[o("v-form",{ref:"notificationsRef",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendNotification.apply(null,arguments)}},model:{value:t.notificationsForm,callback:function(e){t.notificationsForm=e},expression:"notificationsForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-select",{attrs:{items:t.teachers,"item-color":"text",color:"text",label:"الاستاذ","item-value":"idUser","item-text":"userName",outlined:"","return-object":"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},on:{change:t.GetCourses},model:{value:t.notificationsTeacher,callback:function(e){t.notificationsTeacher=e},expression:"notificationsTeacher"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-select",{attrs:{items:t.courses,"item-color":"text",color:"text",label:"الكورس","item-value":"idCourse","item-text":"courseTitle",outlined:"",disabled:!t.isTeacherSelected,rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsCourse,callback:function(e){t.notificationsCourse=e},expression:"notificationsCourse"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"العنوان",color:"text",outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsTitle,callback:function(e){t.notificationsTitle=e},expression:"notificationsTitle"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"نص الاشعار",color:"text",outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsText,callback:function(e){t.notificationsText=e},expression:"notificationsText"}})],1)],1),t._v(" "),o("v-btn",{attrs:{color:"success",large:"",block:"",depressed:"",type:"submit",disabled:!t.notificationsForm}},[t._v("ارسال الاشعار")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VForm:x.a,VRow:h.a,VSelect:T.a,VTextField:C.a,VTextarea:k.a})},655:function(t,e,o){"use strict";o.r(e);var n=o(28),r=(o(105),{name:"NotificationsGroups",data:function(){return{notificationsForm:!1,notificationsTitle:null,notificationsText:null,notificationsCourse:null,notificationsTeacher:null,notificationsGroup:null,isTeacherSelected:!1,isCourseSelected:!1,groups:[],courses:[],teachers:[]}},mounted:function(){this.GetTeachers()},methods:{GetTeachers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("userRoles/3");case 2:o=e.sent,t.teachers=o.data,console.log(o.data);case 5:case"end":return e.stop()}}),e)})))()},GetCourses:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.isTeacherSelected=!0,o.prev=1,o.next=4,e.$axios.get("courseMoney/".concat(t.idUser));case 4:n=o.sent,e.courses=n.data,console.log(n.data),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),console.error(o.t0);case 12:case"end":return o.stop()}}),o,null,[[1,9]])})))()},GetGroups:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.isCourseSelected=!0,o.prev=1,o.next=4,e.$axios.get("courseGroups/".concat(t.idCourse));case 4:n=o.sent,e.groups=n.data,console.log(n.data),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),console.log(o.t0);case 12:case"end":return o.stop()}}),o,null,[[1,9]])})))()},sendNotification:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.prev=1,e.next=4,t.$axios.post("sendNotificationGroup",{title:t.notificationsTitle,content:t.notificationsText,id:t.notificationsGroup});case 4:o=e.sent,t.$toast.success("تم ارسال الاشعار",{position:"top-center",duration:3e3}),console.log(o),t.$nuxt.$loading.finish(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.$nuxt.$loading.finish(),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}}),c=o(41),l=o(64),f=o.n(l),d=o(449),v=o(450),m=o(460),x=o(475),h=o(462),T=o(653),C=o(469),k=o(492),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"NotificationsGroups"},[o("v-card",{staticClass:"pa-10",attrs:{color:"secondary",elevation:"0"}},[o("v-form",{ref:"notificationsRef",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendNotification.apply(null,arguments)}},model:{value:t.notificationsForm,callback:function(e){t.notificationsForm=e},expression:"notificationsForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[o("v-select",{attrs:{items:t.teachers,"item-color":"text",color:"text",label:"الاستاذ","item-value":"idUser","item-text":"userName",outlined:"","return-object":"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},on:{change:t.GetCourses},model:{value:t.notificationsTeacher,callback:function(e){t.notificationsTeacher=e},expression:"notificationsTeacher"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[o("v-select",{attrs:{items:t.courses,"item-color":"text",color:"text",label:"الكورس","item-value":"idCourse","item-text":"courseTitle",outlined:"","return-object":"",disabled:!t.isTeacherSelected,rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},on:{change:t.GetGroups},model:{value:t.notificationsCourse,callback:function(e){t.notificationsCourse=e},expression:"notificationsCourse"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[o("v-select",{attrs:{items:t.groups,"item-color":"text",color:"text",label:"المجموعة","item-value":"idGroup","item-text":"groupName",disabled:!t.isCourseSelected,outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsGroup,callback:function(e){t.notificationsGroup=e},expression:"notificationsGroup"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"العنوان",color:"text",outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsTitle,callback:function(e){t.notificationsTitle=e},expression:"notificationsTitle"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"نص الاشعار",color:"text",outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsText,callback:function(e){t.notificationsText=e},expression:"notificationsText"}})],1)],1),t._v(" "),o("v-btn",{attrs:{color:"success",large:"",block:"",depressed:"",type:"submit",disabled:!t.notificationsForm}},[t._v("ارسال الاشعار")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VForm:x.a,VRow:h.a,VSelect:T.a,VTextField:C.a,VTextarea:k.a})},735:function(t,e,o){"use strict";o.r(e);var n=o(28),r=(o(105),{data:function(){return{notificationsForm:!1,notificationsTitle:null,notificationsText:null}},head:function(){return{title:"الاشعارات"}},methods:{sendNotification:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.notificationsRef.validate()){e.next=12;break}return e.prev=1,e.next=4,t.$axios.post("sendNotification",{title:t.notificationsTitle,content:t.notificationsText});case 4:o=e.sent,console.log(o),t.$toast.success("تم ارسال الاشعار",{duration:3e3,position:"top-center"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),c=o(41),l=o(64),f=o.n(l),d=o(449),v=o(450),m=o(460),x=o(475),h=o(462),T=o(723),C=o(751),k=o(726),w=o(469),$=o(492),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notifications-page"},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-tabs",{attrs:{color:"transparent","background-color":"secondary",grow:"",centered:"","center-active":""}},[o("v-tab",[t._v(" اشعارات عامة ")]),t._v(" "),o("v-tab",[t._v(" اشعارات الكورسات ")]),t._v(" "),o("v-tab",[t._v(" اشعارات المجموعات ")]),t._v(" "),o("v-tab-item",[o("v-card",{staticClass:"pa-10",attrs:{color:"secondary",elevation:"0"}},[o("v-form",{ref:"notificationsRef",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendNotification.apply(null,arguments)}},model:{value:t.notificationsForm,callback:function(e){t.notificationsForm=e},expression:"notificationsForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"العنوان",color:"text",outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsTitle,callback:function(e){t.notificationsTitle=e},expression:"notificationsTitle"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"نص الاشعار",color:"text",outlined:"",rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]},model:{value:t.notificationsText,callback:function(e){t.notificationsText=e},expression:"notificationsText"}})],1)],1),t._v(" "),o("v-btn",{attrs:{color:"success",large:"",block:"",depressed:"",type:"submit"}},[t._v("ارسال الاشعار")])],1)],1)],1),t._v(" "),o("v-tab-item",[o("NotificationsCourses")],1),t._v(" "),o("v-tab-item",[o("NotificationsGroups")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{NotificationsCourses:o(654).default,NotificationsGroups:o(655).default}),f()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VForm:x.a,VRow:h.a,VTab:T.a,VTabItem:C.a,VTabs:k.a,VTextField:w.a,VTextarea:$.a})}}]);