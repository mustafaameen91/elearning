(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{467:function(t,e,n){"use strict";var l=n(468);e.a=l.a},469:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("83ff91dc",content,!0,{sourceMap:!1})},470:function(t,e,n){var l=n(15)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),l.push([t.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}',""]),t.exports=l},484:function(t,e,n){"use strict";n(6),n(8),n(9),n(13),n(14);var l=n(73),r=n(2),o=n(21),c=(n(23),n(40),n(72),n(28),n(24),n(166),n(7),n(52),n(469),n(467)),d=n(502),f=n(0),h=n(10),v=n(61);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(f.H)(t).every((function(t){return null!=t&&"object"===Object(o.a)(t)}))}}},computed:{classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(f.w)(e,1024===this.base))},internalArrayValue:function(){return Object(f.H)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,l=void 0===n?"":n,r=e.size,o=void 0===r?0:r,c=t.truncateText(l);return t.showSize?"".concat(c," (").concat(Object(f.w)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(h.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(f.j)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(v.d)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,l){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[l],file:n,index:l}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=x(x({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(l.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},731:function(t,e,n){"use strict";n.r(e);n(6),n(8),n(9),n(13),n(7),n(14);var l=n(29),r=n(2);n(107),n(72),n(32),n(81),n(28);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{search:"",uploadFileDialog:!1,uploadFileForm:!1,title:"",subTitle:"",document:"",tempImage:null,tempImageExt:"",headers:[{text:"المعرف",align:"start",value:"idLibrary",sortable:!1},{text:"العنوان",value:"title",sortable:!1},{text:"العنوان الثانوي",value:"subTitle",sortable:!1},{text:"الملف",value:"documentPath",sortable:!1},{text:"بواسطة",value:"user.userName",sortable:!1},{text:"النوع",value:"documentExt",sortable:!1},{text:"الاجرائات",value:"actions",sortable:!1}],files:[],rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]}},mounted:function(){this.getFiles()},methods:{getFiles:function(){var t=this;this.$nuxt.$loading.start(),this.$axios.get("globalLibraries").then((function(e){console.log(e),t.files=e.data.map((function(e){return c(c({},e),{},{idLibrary:e.idLibrary,title:e.title,subTitle:e.subTitle,documentPath:e.documentPath,documentExt:t.getExt(e)})})),t.$nuxt.$loading.finish()})).catch((function(e){console.log(e.response),t.$nuxt.$loading.finish()}))},getExt:function(t){var e=t.documentPath.split("."),n=e[e.length-1];return"png"===n||"jpeg"===n||"jpg"===n||"doc"===n||"docx"===n?"".concat(n):"pdf"},saveImage:function(t){this.tempImage=t;var e=t.name.split(".");this.tempImageExt=e[e.length-1],console.log(t)},deleteFile:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!confirm("هل تريد حذف الملف ؟")){n.next=6;break}return n.next=4,e.$axios.delete("globalLibrary/".concat(t.idLibrary));case 4:l=n.sent,console.log(l.data);case 6:e.getFiles(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.response);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},uploadFile:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var form,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.uploadFileRef.validate()){e.next=17;break}return e.prev=1,(form=new FormData).append("attachment",t.tempImage),e.next=6,t.$axios.post("upload",form);case 6:return n=e.sent,e.next=9,t.$axios.post("addGlobalLibrary",{title:t.title,subTitle:t.subTitle,documentPath:n.data.imagePath,downloaded:0,createdBy:1*t.$auth.user.idUser});case 9:e.sent,t.getFiles(),t.uploadFileDialog=!1,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()}}},f=n(43),h=n(67),v=n.n(h),m=n(448),x=n(447),y=n(461),_=n(724),w=n(748),O=n(484),j=n(491),k=n(198),S=n(296),V=n(463),F=n(459),$=n(468),P=n(449),C=n(444),D=n(498),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"LibraryPage"}},[n("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:t.uploadFileDialog,callback:function(e){t.uploadFileDialog=e},expression:"uploadFileDialog"}},[n("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[n("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[n("h4",[t._v("رفع ملف")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"error",icon:""},on:{click:function(e){t.uploadFileDialog=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-form",{ref:"uploadFileRef",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.uploadFile.apply(null,arguments)}},model:{value:t.uploadFileForm,callback:function(e){t.uploadFileForm=e},expression:"uploadFileForm"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-text-field",{attrs:{label:"العنوان",outlined:"",rules:t.rules,color:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-text-field",{attrs:{label:"العنوان الثانوي",outlined:"",rules:t.rules,color:"text"},model:{value:t.subTitle,callback:function(e){t.subTitle=e},expression:"subTitle"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{label:"الملفات",outlined:"",rules:t.rules,color:"text",accept:".png, .jpg, .jpeg, .pdf, .doc,.docx"},on:{change:t.saveImage},model:{value:t.document,callback:function(e){t.document=e},expression:"document"}})],1)],1),t._v(" "),n("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success",disabled:!t.uploadFileForm,type:"submit"}},[t._v("\n          رفع الملف\n        ")])],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary",attrs:{headers:t.headers,items:t.files,"items-per-page":15,search:t.search},on:{"update:items":function(e){t.files=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[n("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[n("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[t._v("المكتبة")]),t._v(" "),n("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"ابحث في المكتبة...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-10",attrs:{icon:"",color:"text"},on:{click:function(e){t.uploadFileDialog=!0}}},"v-btn",r,!1),l),[n("v-icon",[t._v("mdi-upload")])],1)]}}])},[t._v(" "),n("span",{staticClass:"primary--text"},[t._v("رفع ملف")])])],1)])]},proxy:!0},{key:"item.actions",fn:function(e){var l=e.item;return[n("v-btn",{attrs:{color:"error",icon:"",depressed:""},on:{click:function(e){return t.deleteFile(l)}}},[n("v-icon",[t._v("delete")])],1)]}},{key:"item.documentPath",fn:function(e){var l=e.item;return["png"===l.documentExt||"jpg"===l.documentExt||"jpeg"===l.documentExt?n("v-img",{attrs:{src:t.$axios.defaults.baseURL+l.documentPath,"max-width":"100px","max-height":"100px"}}):n("v-btn",{attrs:{icon:"",color:"success",href:t.$axios.defaults.baseURL+l.documentPath}},[n("v-icon",[t._v("download")])],1)]}}],null,!0)})],1)}),[],!1,null,"4ac4440e",null);e.default=component.exports;v()(component,{VBtn:m.a,VCard:x.a,VCol:y.a,VDataTable:_.a,VDialog:w.a,VFileInput:O.a,VForm:j.a,VIcon:k.a,VImg:S.a,VRow:V.a,VSpacer:F.a,VTextField:$.a,VToolbar:P.a,VToolbarTitle:C.a,VTooltip:D.a})}}]);