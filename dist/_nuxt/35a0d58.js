(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{716:function(e,t,r){"use strict";r.r(t);var n=r(33),o=(r(105),{data:function(){return{search:"",headers:[{text:"اسم المستخدم",value:"userName",sortable:!1},{text:"رقم الهاتف",value:"phone",sortable:!1},{text:"المحافظة",value:"province.provinceName",sortable:!1},{text:"نوع الحساب",value:"role.roleName",sortable:!1},{text:"الاجرائات",value:"actions",sortable:!1}],users:[]}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$nuxt.$loading.start(),t.prev=1,t.next=4,e.$axios.get("users");case 4:r=t.sent,e.users=r.data,e.$nuxt.$loading.finish(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.response),e.$nuxt.$loading.finish();case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},deleteUser:function(e){console.log(e)}}}),l=o,c=r(42),d=r(66),v=r.n(d),f=r(439),h=r(515),x=r(707),m=r(192),y=r(458),w=r(441),k=r(435),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"LibraryPage"}},[r("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:e.headers,items:e.users,"items-per-page":15,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[r("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[r("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[e._v("المستخدمين")]),e._v(" "),r("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في المستخدمين...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:"error",icon:""},on:{click:function(t){return e.deleteUser(n)}}},[r("v-icon",[e._v("delete")])],1)]}},{key:"item.role.roleName",fn:function(t){var n=t.item;return[r("v-chip",{staticClass:"text--text",attrs:{color:"primary",label:""}},[e._v("\n        "+e._s(n.role.roleName.toLowerCase())+"\n      ")])]}}],null,!0)})],1)}),[],!1,null,"56a2a6ac",null);t.default=component.exports;v()(component,{VBtn:f.a,VChip:h.a,VDataTable:x.a,VIcon:m.a,VTextField:y.a,VToolbar:w.a,VToolbarTitle:k.a})}}]);