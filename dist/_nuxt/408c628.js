(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{472:function(e,t,r){"use strict";var o=r(2),n=(r(40),r(58),r(209),r(9),r(7),r(57),r(107),r(6),r(8),r(13),r(14),r(5)),l=r(92),c=r(132);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},728:function(e,t,r){"use strict";r.r(t);var o=r(29),n=(r(108),r(9),r(40),r(58),{data:function(){return{search:"",createUserForm:!1,updateUserForm:!1,createUserDialog:!1,updateUserDialog:!1,username:null,password:null,phone:null,provinceId:null,roleId:null,headers:[{text:"#",value:"idUser",sortable:!1},{text:"اسم المستخدم",value:"userName",sortable:!1},{text:"رقم الهاتف",value:"phone",sortable:!1},{text:"المحافظة",value:"province.provinceName",sortable:!1},{text:"نوع الحساب",value:"role.roleName",sortable:!1},{text:"الاجرائات",value:"actions",sortable:!1}],users:[],provinces:[],roles:[],idUser:null}},mounted:function(){this.getUsers(),this.getProvinces(),this.getRoles()},methods:{getUsers:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,filter;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$nuxt.$loading.start(),t.prev=1,t.next=4,e.$axios.get("users");case 4:r=t.sent,o=[1,5,6],filter=r.data.filter((function(e){return o.includes(e.roleId)})),e.users=filter,e.$nuxt.$loading.finish(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0.response),e.$nuxt.$loading.finish();case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getProvinces:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("provinces");case 3:r=t.sent,e.provinces=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.response);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getRoles:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,filter;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("roles");case 3:r=t.sent,o=[1,5,6],filter=r.data.filter((function(e){return o.includes(e.idRole)})),e.roles=filter,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},openUpdateDialog:function(e){this.updateUserDialog=!0,this.username=e.userName,this.phone=e.phone,this.provinceId=e.provinceId,this.roleId=e.roleId,this.idUser=e.idUser,console.log(e.roleId)},closeUpdateDialog:function(e){this.updateUserDialog=!1,this.username=null,this.phone=e.phone,this.provinceId=null,this.roleId=null,this.idUser=null},deleteUser:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm("هل تريد حذف المستخدم ؟")){r.next=12;break}return r.prev=1,r.next=4,t.$axios.delete("user/".concat(e.idUser));case 4:r.sent,t.$toast.success("تم حذف الحساب",{duration:3e3,position:"top-center"}),t.getUsers(),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},createUsers:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.createUserRef.validate()){t.next=14;break}return t.prev=1,data={userName:e.username,password:e.password,phone:e.phone,provinceId:1*e.provinceId,roleId:1*e.roleId,canLogin:!0},t.next=5,e.$axios.post("addUser",data);case 5:t.sent,e.$toast.success("تم حفظ المعلومات",{duration:3e3,position:"top-center"}),e.getUsers(),e.createUserDialog=!1,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},updateUsers:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.updateUserRef.validate()){t.next=14;break}return t.prev=1,data={userName:e.username,password:e.password,phone:e.phone,provinceId:1*e.provinceId,roleId:1*e.roleId,canLogin:!0},t.next=5,e.$axios.put("user/".concat(e.idUser),data);case 5:t.sent,e.$toast.success("تم حفظ المعلومات",{duration:3e3,position:"top-center"}),e.getUsers(),e.closeUpdateDialog(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}}),l=n,c=r(43),d=r(67),v=r.n(d),f=r(448),m=r(447),h=r(499),x=r(461),w=r(714),_=r(738),U=r(472),y=r(198),k=r(463),I=r(661),O=r(459),D=r(468),$=r(449),V=r(444),j=r(502),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"LibraryPage"}},[r("v-dialog",{attrs:{persistent:"","max-width":"750px",transition:"slide-y-transition"},model:{value:e.createUserDialog,callback:function(t){e.createUserDialog=t},expression:"createUserDialog"}},[r("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[r("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[r("h4",[e._v("اضافة مستخدم جديد")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(t){e.createUserDialog=!1}}},[r("v-icon",[e._v("close")])],1)],1),e._v(" "),r("v-form",{ref:"createUserRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.createUsers.apply(null,arguments)}},model:{value:e.createUserForm,callback:function(t){e.createUserForm=t},expression:"createUserForm"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"اسم المستخدم",outlined:"",color:"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"password",label:"كلمة المرور",outlined:"",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}],color:"white"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-text-field",{attrs:{label:"رقم الهاتف",outlined:"",color:"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-select",{attrs:{label:"المحافظة",outlined:"",color:"white",items:e.provinces,"item-value":"idProvince","item-text":"provinceName","item-color":"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.provinceId,callback:function(t){e.provinceId=t},expression:"provinceId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-select",{attrs:{label:"نوع الحساب",outlined:"",color:"white",items:e.roles,"item-value":"idRole","item-text":"roleName","item-color":"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}})],1)],1),e._v(" "),r("v-btn",{attrs:{block:"",large:"",color:"success",depressed:"",type:"submit",disabled:!e.createUserForm}},[e._v("\n          حفط المعلومات\n        ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"750px",transition:"slide-y-transition"},model:{value:e.updateUserDialog,callback:function(t){e.updateUserDialog=t},expression:"updateUserDialog"}},[r("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[r("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[r("h4",[e._v("تحديث المستخدم")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.closeUpdateDialog}},[r("v-icon",[e._v("close")])],1)],1),e._v(" "),r("v-form",{ref:"updateUserRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.updateUsers.apply(null,arguments)}},model:{value:e.updateUserForm,callback:function(t){e.updateUserForm=t},expression:"updateUserForm"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{label:"اسم المستخدم",outlined:"",color:"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"password",label:"كلمة المرور",outlined:"",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}],color:"white"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-text-field",{attrs:{label:"رقم الهاتف",outlined:"",color:"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-select",{attrs:{label:"المحافظة",outlined:"",color:"white",items:e.provinces,"item-value":"idProvince","item-text":"provinceName","item-color":"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.provinceId,callback:function(t){e.provinceId=t},expression:"provinceId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r("v-select",{attrs:{label:"نوع الحساب",outlined:"",color:"white",items:e.roles,"item-value":"idRole","item-text":"roleName","item-color":"white",rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}]},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}})],1)],1),e._v(" "),r("v-btn",{attrs:{block:"",large:"",color:"success",depressed:"",type:"submit",disabled:!e.updateUserForm}},[e._v("\n          حفط المعلومات\n        ")])],1)],1)],1),e._v(" "),r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:e.headers,items:e.users,"items-per-page":15,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[e._v("المستخدمين")]),e._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في المستخدمين...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"mr-10",attrs:{icon:"",color:"text"},on:{click:function(t){e.createUserDialog=!0}}},"v-btn",n,!1),o),[r("v-icon",[e._v("mdi-plus")])],1)]}}])},[e._v(" "),r("span",{staticClass:"primary--text"},[e._v("انشاء حساب جديد")])])],1)])]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[r("v-btn",{attrs:{color:"warning",icon:""},on:{click:function(t){return e.openUpdateDialog(o)}}},[r("v-icon",[e._v("edit")])],1),e._v(" "),r("v-btn",{attrs:{color:"error",icon:""},on:{click:function(t){return e.deleteUser(o)}}},[r("v-icon",[e._v("delete")])],1)]}},{key:"item.role.roleName",fn:function(t){var o=t.item;return[r("v-chip",{staticClass:"text--text",attrs:{color:"primary",label:""}},[e._v("\n        "+e._s(o.role.roleName.toLowerCase())+"\n      ")])]}}],null,!0)})],1)}),[],!1,null,"2e6dedec",null);t.default=component.exports;v()(component,{VBtn:f.a,VCard:m.a,VChip:h.a,VCol:x.a,VDataTable:w.a,VDialog:_.a,VForm:U.a,VIcon:y.a,VRow:k.a,VSelect:I.a,VSpacer:O.a,VTextField:D.a,VToolbar:$.a,VToolbarTitle:V.a,VTooltip:j.a})}}]);