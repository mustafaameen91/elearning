(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{486:function(t,e,n){n(4)({target:"Object",stat:!0},{is:n(296)})},493:function(t,e,n){"use strict";n(6);var o=n(0);function r(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,r=t.touchendY;t.offsetX=n-e,t.offsetY=r-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&r<o-16&&t.up(t),t.down&&r>o+16&&t.down(t))}(e)}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var l={inserted:function(t,e,n){var r=e.value,l=r.parent?t.parentElement:t,h=r.options||{passive:!0};if(l){var v=c(e.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=v,Object(o.z)(v).forEach((function(t){l.addEventListener(t,v[t],h)}))}},unbind:function(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var c=r._touchHandlers[n.context._uid];Object(o.z)(c).forEach((function(t){r.removeEventListener(t,c[t])})),delete r._touchHandlers[n.context._uid]}}};e.a=l},503:function(t,e,n){"use strict";var o=n(1),r=n(0);e.a=o.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.j}}})},508:function(t,e,n){"use strict";var o=n(90),r=n(1);e.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},714:function(t,e,n){var content=n(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2e2bc7da",content,!0,{sourceMap:!1})},715:function(t,e,n){var o=n(15)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),o.push([t.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},716:function(t,e,n){var content=n(717);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("beda1088",content,!0,{sourceMap:!1})},717:function(t,e,n){var o=n(15)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),o.push([t.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}.theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}',""]),t.exports=o},734:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{setting:null,show:!1,rules:[function(t){return!!t||"لا يمكن ترك الحقل فارغ"}]}},mounted:function(){this.initialData()},methods:{initialData:function(){var t=this;this.$axios.get("settings").then((function(e){console.log(e.data[0]),t.setting=e.data[0],t.show=!0})).catch((function(t){console.log(t)}))},saveData:function(){var t=this;this.$axios.put("setting/".concat(this.setting.idSetting),this.setting).then((function(e){console.log(e.data),t.$toast.success("تم حفظ البيانات",{duration:3e3,position:"top-center"})})).catch((function(e){console.log(e),t.$toast.error("لم يتم حفظ البيانات",{duration:3e3,position:"top-center"})}))}}},r=n(41),c=n(57),l=n.n(c),h=n(449),v=n(460),d=n(462),f=(n(7),n(8),n(9),n(13),n(6),n(14),n(119)),m=n(2),_=(n(166),n(714),n(716),n(18),n(65),n(501)),w=n(508),x=n(503),y=n(5);function k(t){t.preventDefault()}var C=Object(y.a)(_.a,w.a,x.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=_.a.options.methods.genLabel.call(this);return label?(label.data.on={click:k},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:k},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),O=n(493),V=n(109),j=n(190),S=n(0),D=["title"];function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=C.extend({name:"v-switch",directives:{Touch:O.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return $($({},_.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(f.a)(t,D));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",$($({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",$({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",$({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(V.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(j.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===S.y.left&&this.isActive||t.keyCode===S.y.right&&!this.isActive)&&this.onChange()}}}),X=n(469),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-text-field",{attrs:{"background-color":"secondary",color:"text",outlined:"",label:"رقم الاصدار",rules:t.rules},model:{value:t.setting.version,callback:function(e){t.$set(t.setting,"version",e)},expression:"setting.version"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-switch",{attrs:{label:"قيد المعاينة",color:"info",inset:"","hide-details":""},model:{value:t.setting.inReview,callback:function(e){t.$set(t.setting,"inReview",e)},expression:"setting.inReview"}})],1)],1),t._v(" "),n("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success"},on:{click:t.saveData}},[t._v("\n    حفظ المعلومات\n  ")])],1):t._e()}),[],!1,null,"5c09ac4a",null);e.default=component.exports;l()(component,{VBtn:h.a,VCol:v.a,VRow:d.a,VSwitch:A,VTextField:X.a})}}]);