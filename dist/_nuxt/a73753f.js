(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{265:function(t,e,o){var content=o(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("28960584",content,!0,{sourceMap:!1})},271:function(t,e,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("2355f6bd",content,!0,{sourceMap:!1})},272:function(t,e,o){var content=o(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5520dede",content,!0,{sourceMap:!1})},273:function(t,e,o){var content=o(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("0dda8167",content,!0,{sourceMap:!1})},274:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("736d68e6",content,!0,{sourceMap:!1})},290:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{loading:!1,overlay:!1}},methods:{start:function(){this.loading=!0,this.overlay=!0},finish:function(){this.loading=!1,this.overlay=!1},fail:function(t){console.error(t)}}},r=o(41),l=o(57),c=o.n(l),v=o(442),d=o(190),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading?o("v-overlay",{staticStyle:{"z-index":"1000"},attrs:{value:t.overlay}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"primary"}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;c()(component,{VOverlay:v.a,VProgressCircular:d.a})},291:function(t,e,o){"use strict";o(356);var n={data:function(){return{version:"1.0.0"}},computed:{role:function(){var t;return null!==(t=this.$auth.user.roleId)&&void 0!==t?t:1}},mounted:function(){var t=this;this.$auth.$storage.syncUniversal("user",this.$auth.$storage.getUniversal("user")),this.$axios.get("settings").then((function(e){t.version=e.data[0].version}))}},r=(o(362),o(41)),l=o(57),c=o.n(l),v=o(455),d=o(456),f=o(459),m=o(460),_=o(457),h=o(458),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("NavBar",{attrs:{role:t.role}}),t._v(" "),o("v-main",{staticClass:"pt-10"},[o("v-container",[o("transition",{attrs:{name:"slide-y-reverse-transition"}},[o("Nuxt")],1)],1)],1),t._v(" "),o("v-footer",{attrs:{color:"secondary"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("span",[o("strong",[t._v("© "+t._s((new Date).getFullYear()))]),t._v(" منصة خطوة\n          ")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",{staticClass:"float-left"},[t._v("الاصدار : "+t._s(t.version))])])],1)],1)],1)],1)}),[],!1,null,"a1288ac8",null);e.a=component.exports;c()(component,{NavBar:o(435).default}),c()(component,{VApp:v.a,VCol:d.a,VContainer:f.a,VFooter:m.a,VMain:_.a,VRow:h.a})},292:function(t,e,o){"use strict";var n={},r=o(41),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login__layout"},[e("Nuxt")],1)}),[],!1,null,"ca86bc3e",null);e.a=component.exports},305:function(t,e,o){t.exports=o.p+"img/logo.986ece4.png"},307:function(t,e,o){o(308),t.exports=o(309)},328:function(t,e,o){"use strict";o.r(e),e.default=function(t){var e=t.$auth,o=t.router;t.next;o.beforeEach((function(t,o,n){"/login"===t.path||e.loggedIn?n():n("/login")}))}},332:function(t,e,o){"use strict";o(265)},333:function(t,e,o){var n=o(15)(!1);n.push([t.i,"h1[data-v-38d9452e]{font-size:20px}",""]),t.exports=n},350:function(t,e,o){var content=o(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("7892e6b2",content,!0,{sourceMap:!1})},351:function(t,e,o){var n=o(15),r=o(270),l=o(352),c=o(353),v=o(354),d=o(355),f=n(!1),m=r(l),_=r(l,{hash:"#iefix"}),h=r(c),y=r(v),x=r(d,{hash:"#icomoon"});f.push([t.i,'@font-face{font-family:"icomoon";src:url('+m+");src:url("+_+') format("embedded-opentype"),url('+h+') format("truetype"),url('+y+') format("woff"),url('+x+') format("svg");font-weight:400;font-style:normal;font-display:block}[class*=" icon-"],[class^=icon-]{font-family:"icomoon"!important;speak:never;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-add:before{content:"\\e900"}.icon-course:before{content:"\\e901"}.icon-delete:before{content:"\\e902"}.icon-distributor:before{content:"\\e903"}.icon-edit:before{content:"\\e904"}.icon-export:before{content:"\\e905"}.icon-home:before{content:"\\e906"}.icon-library:before{content:"\\e907"}.icon-profile:before{content:"\\e908"}.icon-settings:before{content:"\\e909"}.icon-students:before{content:"\\e90a"}.icon-teacher:before{content:"\\e90b"}.icon-users:before{content:"\\e90c"}',""]),t.exports=f},352:function(t,e,o){t.exports=o.p+"fonts/icomoon.27f86d8.eot"},353:function(t,e,o){t.exports=o.p+"fonts/icomoon.1584978.ttf"},354:function(t,e,o){t.exports=o.p+"fonts/icomoon.ecfbcb6.woff"},355:function(t,e,o){t.exports=o.p+"img/icomoon.2cfbe79.svg"},362:function(t,e,o){"use strict";o(271)},363:function(t,e,o){var n=o(15)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),n.push([t.i,'.theme--dark.v-application[data-v-a1288ac8]{font-family:"Cairo",sans-serif}.theme--dark.v-application[data-v-a1288ac8],.theme--dark.v-picker__body[data-v-a1288ac8]{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list[data-v-a1288ac8]{background:#2c313a}.theme--light.v-application[data-v-a1288ac8]{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1[data-v-a1288ac8]{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1[data-v-a1288ac8]{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr[data-v-a1288ac8]:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.page-enter-active[data-v-a1288ac8],.page-leave-active[data-v-a1288ac8]{transition:opacity .5s}.page-enter[data-v-a1288ac8],.page-leave-to[data-v-a1288ac8]{opacity:0}.layout-enter-active[data-v-a1288ac8],.layout-leave-active[data-v-a1288ac8]{transition:opacity .5s}.layout-enter[data-v-a1288ac8],.layout-leave-to[data-v-a1288ac8]{opacity:0}',""]),t.exports=n},364:function(t,e,o){"use strict";o(272)},365:function(t,e,o){var n=o(15)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),n.push([t.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.navbar{position:sticky;top:-70px;z-index:100;box-shadow:0 10px 10px 0 rgba(0,0,0,.1)}.navbar__inner .v-toolbar,.navbar__inner .v-toolbar__content{height:auto!important}.navbar__inner__top{height:70px!important}',""]),t.exports=n},366:function(t,e,o){"use strict";o(273)},367:function(t,e,o){var n=o(15)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),n.push([t.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.logo{display:flex;align-items:center;justify-content:flex-start;height:65px;width:200px;padding:.5em 0}.logo img{display:block;width:40px;height:56px;margin-left:.5em}',""]),t.exports=n},378:function(t,e,o){"use strict";o(274)},379:function(t,e,o){var n=o(15)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),n.push([t.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.navbar__list{display:flex;width:100%;align-items:center;justify-content:space-between;position:relative}.navbar__list__item{list-style-type:none}.navbar__list__item a{text-decoration:none;padding:1em .5em;display:flex;align-items:center;justify-content:center;position:relative}.navbar__list__item a:before{content:"";position:absolute;width:100%;height:5px;border-top-left-radius:50px;border-top-right-radius:50px;background-color:currentColor;bottom:0;right:0;visibility:hidden;opacity:0;transform:translateY(20%);transition:all .3s ease-in-out}.navbar__list__item a.nuxt-link-exact-active:before{visibility:visible;opacity:1;transform:translateY(0)}.navbar__list__item a i,.navbar__list__item a span{font-size:1.1em}.navbar__list__item a i{font-size:1.5em}',""]),t.exports=n},415:function(t,e){},435:function(t,e,o){"use strict";o.r(e);o(23);var n={name:"NavBar",props:{role:{type:Number,required:!0}}},r=(o(364),o(41)),l=o(57),c=o.n(l),v=o(445),d=o(459),f=o(197),m=o(196),_=o(120),h=o(101),y=o(42),x=o(448),k=o(454),w=o(446),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar"},[o("div",{staticClass:"navbar__inner"},[o("div",{staticClass:"navbar__inner__top primary"},[o("v-container",{staticClass:"pa-0"},[o("v-toolbar",{attrs:{flat:"",color:"transparent"}},[o("NavBarLogo"),t._v(" "),o("v-spacer"),t._v(" "),o("v-menu",{attrs:{bottom:"",origin:"top right",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"transparent",depressed:"",link:""}},"v-btn",r,!1),n),[o("v-icon",{staticClass:"ml-2"},[t._v("icon-profile")]),t._v(" "),t.$auth.loggedIn?o("span",[t._v(t._s(t.$auth.user.userName))]):t._e()],1)]}}])},[t._v(" "),o("v-list",{attrs:{dense:"",color:"primary"}},[o("v-list-item",{attrs:{to:"/settings"}},[o("v-list-item-icon",[o("v-icon",[t._v("settings")])],1),t._v(" "),o("v-list-item-title",[t._v("الاعدادات")])],1),t._v(" "),o("v-list-item",{on:{click:function(e){return t.$auth.logout()}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-logout")])],1),t._v(" "),o("v-list-item-title",[t._v("تسجيل الخروج")])],1)],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"navbar__inner__bottom secondary"},[o("v-container",{staticClass:"pa-0"},[o("v-toolbar",{attrs:{flat:"",color:"transparent",dense:""}},[o("NavBarList",{attrs:{"role-id":t.role}})],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{NavBarLogo:o(437).default,NavBarList:o(436).default}),c()(component,{VBtn:v.a,VContainer:d.a,VIcon:f.a,VList:m.a,VListItem:_.a,VListItemIcon:h.a,VListItemTitle:y.b,VMenu:x.a,VSpacer:k.a,VToolbar:w.a})},436:function(t,e,o){"use strict";o.r(e);o(23);var n={props:{roleId:{type:Number,required:!0}},data:function(){return{NavList:[{title:"الرئيسية",icon:"mdi-home-outline",to:"/",show:!0},{title:"الكورسات",icon:"mdi-laptop",to:"/courses/",show:!0},{title:"الموزعين",icon:"mdi-sitemap",to:"/distributors",show:!0},{title:"الاساتذة",icon:"mdi-account-outline",to:"/teachers",show:!0},{title:"الطلاب",icon:"mdi-card-account-details-outline",to:"/studnets",show:!0},{title:"الاشعارات",icon:"notifications",to:"/notifications",show:!0},{title:"التقارير المالية",icon:"table_chart",to:"/reports",show:1===this.roleId}],dropdown:[{title:"المكتبة",icon:"mdi-book-outline",to:"/library",show:!0},{title:"المراحل",icon:"list_alt",to:"/grades",show:!0},{title:"المواد",icon:"import_contacts",to:"/subjects",show:!0},{title:"الخصومات",icon:"mdi-sale",to:"/promo",show:!0},{title:"الافتارات",icon:"account_circle",to:"/avatars",show:!0},{title:"المستخدمين",icon:"mdi-account-group-outline",to:"/users",show:!0},{title:"المجموعات",icon:"people",to:"/groups",show:!0}]}},mounted:function(){console.log(this.$auth.user)}},r=(o(378),o(41)),l=o(57),c=o.n(l),v=o(447),d=o(197),f=o(196),m=o(120),_=o(201),h=o(42),y=o(448),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list",{staticClass:"d-flex align-center justify-space-around",attrs:{nav:"",dense:"",color:"transparent",flat:"",width:"100%"}},[t._l(t.NavList,(function(e){return e.show?o("v-list-item",{key:e.title,class:{"pa-0 ma-0 align-center justify-center":t.$vuetify.breakpoint.mobile,"align-center justify-center":!t.$vuetify.breakpoint.mobile},staticStyle:{margin:"0 10px"},attrs:{to:e.to,dense:"","exact-active-class":"primary text--text shadow-1"}},[o("v-list-item-avatar",{class:{"mr-0 ml-0":t.$vuetify.breakpoint.mobile}},[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():o("v-list-item-content",{class:{"align-center justify-center flex-grow-1":!t.$vuetify.breakpoint.mobile}},[o("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)],1):t._e()})),t._v(" "),o("v-menu",{attrs:{transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-list",{staticClass:"d-flex align-center justify-space-around",attrs:{nav:"",dense:"",color:"transparent",flat:"",width:"100%"}},[o("v-list-item",t._g(t._b({class:{"pa-0 ma-0 align-center justify-center":t.$vuetify.breakpoint.mobile,"align-center justify-center":!t.$vuetify.breakpoint.mobile},staticStyle:{margin:"0 10px"},attrs:{dense:""}},"v-list-item",r,!1),n),[o("v-list-item-avatar",{class:{"mr-0 ml-0":t.$vuetify.breakpoint.mobile}},[o("v-icon",[t._v("menu")])],1),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():o("v-list-item-content",{class:{"align-center justify-center flex-grow-1":!t.$vuetify.breakpoint.mobile}},[o("v-list-item-title",[t._v("المزيد")])],1)],1)],1)]}}])},[t._v(" "),o("v-card",[o("v-list",{attrs:{nav:"",dense:""}},t._l(t.dropdown,(function(e){return e.show?o("v-list-item",{key:e.title,class:{"pa-0 ma-0 align-center justify-center":t.$vuetify.breakpoint.mobile,"align-center justify-center":!t.$vuetify.breakpoint.mobile},staticStyle:{margin:"10px 0"},attrs:{to:e.to,dense:"","exact-active-class":"primary text--text shadow-1"}},[o("v-list-item-avatar",{class:{"mr-0 ml-0":t.$vuetify.breakpoint.mobile}},[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():o("v-list-item-content",{class:{"align-center justify-center flex-grow-1":!t.$vuetify.breakpoint.mobile}},[o("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)],1):t._e()})),1)],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:v.a,VIcon:d.a,VList:f.a,VListItem:m.a,VListItemAvatar:_.a,VListItemContent:h.a,VListItemTitle:h.b,VMenu:y.a})},437:function(t,e,o){"use strict";o.r(e);o(366);var n=o(41),r=o(57),l=o.n(r),c=o(196),v=o(120),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("v-list",{attrs:{dense:"",nav:"",flat:"",elevation:"0",color:"transparent"}},[n("v-list-item",{attrs:{to:"/"}},[n("img",{attrs:{src:o(305),alt:"Logo"}}),t._v(" "),n("span",[t._v("منصة خطوة")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VList:c.a,VListItem:v.a})},83:function(t,e,o){"use strict";var n={layout:"error",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(332),o(41)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{staticClass:"text--text",attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"38d9452e",null);e.a=component.exports}},[[307,38,7,39]]]);