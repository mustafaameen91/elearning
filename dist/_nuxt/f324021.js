(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{519:function(e,t,o){var content=o(721);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("1abe0553",content,!0,{sourceMap:!1})},720:function(e,t,o){"use strict";o(519)},721:function(e,t,o){var r=o(15)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap);"]),r.push([e.i,'.theme--dark.v-application{font-family:"Cairo",sans-serif}.theme--dark.v-application,.theme--dark.v-picker__body{background:#2c313a!important;color:#e4e0e7!important}.theme--dark.v-list{background:#2c313a}.theme--light.v-application{background:#c9ccd5;color:#2c313a;font-family:"Cairo",sans-serif}.shadow-1{box-shadow:0 10px 10px 0 rgba(0,0,0,.1)!important}.radius-1{border-radius:1em!important}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background-color:#2c313a!important;color:#fff}input[type=datetime-local]::-webkit-calendar-picker-indicator{display:none}.custom__list:not(:last-child){border-bottom:1px solid hsla(0,0%,100%,.12)}',""]),e.exports=r},750:function(e,t,o){"use strict";o.r(t);o(7),o(8),o(13),o(6),o(14);var r=o(2),n=o(29);o(499),o(9),o(108);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{search:"",uploadDialog:!1,uploadForm:!1,uploadVideoLink:"",courseVideoId:"",updateVideoDialog:!1,createVideoDialog:!1,updateForm:!1,createForm:!1,addQuizDialog:!1,addQuizForm:!1,quizQuestion:null,quizAnswerCurrect:null,quizAnswerWrong:null,quizAnswerWrong2:null,videoPhotoTmp:null,rules:[function(e){return!!e||"لا يمكن ترك الحقل فارغ"}],headers:[{text:"#",sortable:!1,align:"start",value:"idCourseVideo"},{text:"عنوان الفيديو",sortable:!1,align:"start",value:"videoTitle"},{text:"رابط الفيديو",sortable:!1,align:"start",value:"videoLink"},{text:"رابط الفيديو الثاني",sortable:!1,align:"start",value:"secondVideoLink"},{text:"الوصف",sortable:!1,align:"start",value:"videoDescription"},{text:"الاجرائات",sortable:!1,align:"start",value:"actions"}],videos:[],updatedVideo:{},choices:[],videoId:null,isUpdateQuiz:!1,idQuiz:null,idChoiceCorrect:null,idChoiceWrong:null,idChoiceWrong2:null,courseName:null,dialog:!1,comments:[],commentsHeaders:[{text:"#",value:"idVideoComment"},{text:"الاسم",value:"user.userName"},{text:"التعليق",value:"userComment"},{text:"التاريخ",value:"createdAt"},{text:"الاجرائات",value:"actions"}]}},head:function(){return{title:"الكورسات"}},mounted:function(){this.getVideos()},methods:{getVideos:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$route.params.id;case 3:return o=t.sent,t.next=6,e.$axios.get("course/".concat(o));case 6:r=t.sent,e.videos=r.data.CourseVideo,e.courseName=r.data.courseTitle,console.log(r.data),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0.response);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},initVideoComments:function(e){var t=arguments,o=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:null,c=null!=n?n:e.idCourseVideo,r.prev=2,r.next=5,o.$axios.get("commentVideoId/".concat(c));case 5:l=r.sent,o.comments=l.data,o.dialog=!0,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),console.log(r.t0.response);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},deleteComment:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!confirm("هل تريد حذف التعليق ؟")){o.next=13;break}return console.log(e),o.prev=2,o.next=5,t.$axios.delete("videoComment/".concat(e.idVideoComment));case 5:o.sent,t.$toast.success("تم حذف التعليق",{duration:3e3,position:"top-center"}),t.initVideoComments(e,e.videoId),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),console.log(o.t0.response);case 13:case"end":return o.stop()}}),o,null,[[2,10]])})))()},initUpdateVideo:function(e){this.updateVideoDialog=!0,this.updatedVideo=e},updateVideo:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.updateVideoRef.validate()){t.next=13;break}return o=e.updatedVideo.idCourseVideo,t.prev=2,t.next=5,e.$axios.put("courseVideo/".concat(o),e.updatedVideo);case 5:t.sent,e.updateVideoDialog=!1,e.getVideos(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},deleteVideo:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!confirm("هل تريد حذف الفيديو ؟")){o.next=12;break}return r=e.idCourseVideo,o.prev=2,o.next=5,t.$axios.delete("courseVideo/".concat(r));case 5:o.sent,t.getVideos(),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(2),console.log(o.t0.response);case 12:case"end":return o.stop()}}),o,null,[[2,9]])})))()},createVideo:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var data,form,r,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.$nuxt.$loading.start(),o.prev=1,data=Object.fromEntries(new FormData(e.target)),(form=new FormData).append("attachment",t.videoPhotoTmp),o.next=7,t.$axios.post("upload",form);case 7:if(r=o.sent,n=l(l({},data),{},{courseId:1*t.$route.params.id,createdBy:1*t.$auth.user.idUser,unlockAt:new Date(data.unlockAt),secondVideoLink:"link",videoPhoto:r.data.imagePath}),!t.$refs.createVideoRef.validate()){o.next=16;break}return o.next=12,t.$axios.post("addCourseVideo",n);case 12:o.sent,t.getVideos(),t.createVideoDialog=!1,t.$nuxt.$loading.finish();case 16:o.next=22;break;case 18:o.prev=18,o.t0=o.catch(1),t.$nuxt.$loading.finish(),console.log(o.t0.response);case 22:case"end":return o.stop()}}),o,null,[[1,18]])})))()},openQuizDialog:function(e){if(this.videoId=e.idCourseVideo,this.addQuizDialog=!0,console.log(e),void 0!==e.quiz){var t=e.quiz,o=t.Choice;this.quizAnswerCurrect=o.filter((function(e){return e.correctAnswer}))[0].questionChoice,this.quizAnswerWrong=o.filter((function(e){return!e.correctAnswer}))[0].questionChoice,this.quizAnswerWrong2=o.filter((function(e){return!e.correctAnswer}))[1].questionChoice,this.idQuiz=t.idQuiz,this.idChoiceCorrect=o.filter((function(e){return e.correctAnswer}))[0].idChoice,this.idChoiceWrong=o.filter((function(e){return!e.correctAnswer}))[0].idChoice,this.idChoiceWrong2=o.filter((function(e){return!e.correctAnswer}))[1].idChoice,this.quizQuestion=t.quizQuestion,this.isUpdateQuiz=!0}else this.isUpdateQuiz=!1,this.idQuiz=null,this.idChoiceCorrect=null,this.idChoiceWrong=null,this.idChoiceWrong2=null,this.quizAnswerCurrect=null,this.quizAnswerWrong=null,this.quizAnswerWrong2=null,this.quizQuestion=null},closeQuizDialog:function(){this.videoId=null,this.addQuizDialog=!1,this.quizAnswerCurrect=null,this.quizAnswerWrong=null,this.quizAnswerWrong2=null,this.quizQuestion=null,this.isUpdateQuiz=!1,this.$refs.addQuizRef.reset()},addQuiz:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$refs.addQuizRef.validate()){t.next=33;break}if(e.isUpdateQuiz){t.next=19;break}return t.next=5,e.$axios.post("addQuiz",{quizQuestion:e.quizQuestion,videoId:e.videoId,createdBy:1*e.$auth.user.idUser});case 5:return o=t.sent,t.next=8,e.$axios.post("addChoice",{questionChoice:e.quizAnswerCurrect,correctAnswer:!0,quizId:o.data.idQuiz});case 8:return t.sent,t.next=11,e.$axios.post("addChoice",{questionChoice:e.quizAnswerWrong,correctAnswer:!1,quizId:o.data.idQuiz});case 11:return t.sent,t.next=14,e.$axios.post("addChoice",{questionChoice:e.quizAnswerWrong2,correctAnswer:!1,quizId:o.data.idQuiz});case 14:t.sent,e.addQuizDialog=!1,e.getVideos(),t.next=33;break;case 19:return t.next=21,e.$axios.put("quiz/".concat(e.idQuiz),{quizQuestion:e.quizQuestion,videoId:e.videoId,createdBy:1*e.$auth.user.idUser});case 21:return r=t.sent,t.next=24,e.$axios.put("choice/".concat(e.idChoiceCorrect),{questionChoice:e.quizAnswerCurrect,correctAnswer:!0,quizId:r.data.idQuiz});case 24:return t.sent,t.next=27,e.$axios.put("choice/".concat(e.idChoiceWrong),{questionChoice:e.quizAnswerWrong,correctAnswer:!1,quizId:r.data.idQuiz});case 27:return t.sent,t.next=30,e.$axios.put("choice/".concat(e.idChoiceWrong2),{questionChoice:e.quizAnswerWrong2,correctAnswer:!1,quizId:r.data.idQuiz});case 30:t.sent,e.addQuizDialog=!1,e.getVideos();case 33:t.next=38;break;case 35:t.prev=35,t.t0=t.catch(0),console.log(t.t0.response);case 38:case"end":return t.stop()}}),t,null,[[0,35]])})))()},openUploadDialog:function(e){this.courseVideoId=e.idCourseVideo,this.uploadDialog=!0},uploadVideo:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$nuxt.$loading.start(),t.prev=1,!e.$refs.uploadVideoRef.validate()){t.next=10;break}return t.next=5,e.$axios.post("uploadFromUrl",{videoUrl:e.uploadVideoLink,courseVideoId:e.courseVideoId});case 5:o=t.sent,console.log(o.data),e.uploadDialog=!1,e.getVideos(),e.$nuxt.$loading.finish();case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0.response),e.$nuxt.$loading.finish();case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()},closeCoursePage:function(){window.close()}}},v=d,m=(o(720),o(43)),f=o(60),x=o.n(f),h=o(447),_=o(449),k=o(458),w=o(731),z=o(485),V=o(484),C=o(473),y=o(200),D=o(460),Q=o(456),$=o(465),A=o(490),O=o(448),F=o(441),R=o(483),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"course-page"},[o("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:e.updateVideoDialog,callback:function(t){e.updateVideoDialog=t},expression:"updateVideoDialog"}},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[o("h4",[e._v("تحديث الفيديو")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"accent"},on:{click:function(t){e.updateVideoDialog=!1}}},[o("v-icon",[e._v("close")])],1)],1),e._v(" "),o("v-form",{ref:"updateVideoRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.updateVideo.apply(null,arguments)}},model:{value:e.updateForm,callback:function(t){e.updateForm=t},expression:"updateForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{name:"videoTitle",rules:e.rules,label:"عنوان الفيديو",outlined:"",color:"text",clearable:"","prepend-inner-icon":"title"},model:{value:e.updatedVideo.videoTitle,callback:function(t){e.$set(e.updatedVideo,"videoTitle",t)},expression:"updatedVideo.videoTitle"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{name:"videoLink",rules:e.rules,label:"رابط الفيديو",outlined:"",color:"text",clearable:"","prepend-inner-icon":"mdi-youtube"},model:{value:e.updatedVideo.videoLink,callback:function(t){e.$set(e.updatedVideo,"videoLink",t)},expression:"updatedVideo.videoLink"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{name:"videoDescription",rules:e.rules,label:"وصف الفيديو",outlined:"",color:"text",clearable:"","prepend-inner-icon":"text_fields"},model:{value:e.updatedVideo.videoDescription,callback:function(t){e.$set(e.updatedVideo,"videoDescription",t)},expression:"updatedVideo.videoDescription"}})],1)],1),e._v(" "),o("v-btn",{attrs:{block:"",large:"",color:"success",depressed:"",type:"submit",disabled:!e.updateForm}},[e._v("حفظ الفيديو")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:e.uploadDialog,callback:function(t){e.uploadDialog=t},expression:"uploadDialog"}},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[o("h4",[e._v("اضافة فيديو جديد")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"accent"},on:{click:function(t){e.uploadDialog=!1}}},[o("v-icon",[e._v("close")])],1)],1),e._v(" "),o("v-form",{ref:"uploadVideoRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.uploadVideo.apply(null,arguments)}},model:{value:e.uploadForm,callback:function(t){e.uploadForm=t},expression:"uploadForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:e.rules,label:"رابط الفيديو",outlined:"",color:"text",clearable:"","prepend-inner-icon":"mdi-youtube"},model:{value:e.uploadVideoLink,callback:function(t){e.uploadVideoLink=t},expression:"uploadVideoLink"}})],1)],1),e._v(" "),o("v-btn",{attrs:{block:"",large:"",color:"success",depressed:"",type:"submit",disabled:!e.uploadForm}},[e._v("حفظ الفيديو")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{"max-width":"750px",transition:"slide-y-transition"},model:{value:e.createVideoDialog,callback:function(t){e.createVideoDialog=t},expression:"createVideoDialog"}},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[o("h4",[e._v("اضافة فيديو جديد")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"accent"},on:{click:function(t){e.createVideoDialog=!1}}},[o("v-icon",[e._v("close")])],1)],1),e._v(" "),o("v-form",{ref:"createVideoRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.createVideo(t)}},model:{value:e.createForm,callback:function(t){e.createForm=t},expression:"createForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{name:"videoTitle",label:"عنوان الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"title"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{name:"videoLink",label:"رابط الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"mdi-youtube"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-text-field",{attrs:{name:"unlockAt",label:"تاريخ الفتح",rules:e.rules,outlined:"",color:"text",type:"datetime-local","prepend-inner-icon":"mdi-youtube"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[o("v-file-input",{attrs:{label:"صورة الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"mdi-image"},model:{value:e.videoPhotoTmp,callback:function(t){e.videoPhotoTmp=t},expression:"videoPhotoTmp"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[o("v-textarea",{attrs:{name:"videoDescription",label:"وصف الفيديو",rules:e.rules,outlined:"",color:"text","prepend-inner-icon":"text_fields"}})],1)],1),e._v(" "),o("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success",type:"submit",disabled:!e.createForm}},[e._v("\n          حفظ الفيديو\n        ")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"750px",transition:"slide-y-transition"},model:{value:e.addQuizDialog,callback:function(t){e.addQuizDialog=t},expression:"addQuizDialog"}},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[e.isUpdateQuiz?o("h4",[e._v("تحديث السؤال")]):o("h4",[e._v("اضافة سؤال")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"accent"},on:{click:e.closeQuizDialog}},[o("v-icon",[e._v("close")])],1)],1),e._v(" "),o("v-form",{ref:"addQuizRef",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.addQuiz.apply(null,arguments)}},model:{value:e.addQuizForm,callback:function(t){e.addQuizForm=t},expression:"addQuizForm"}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[o("v-text-field",{attrs:{label:"السؤال",color:"text",outlined:"",rules:e.rules},model:{value:e.quizQuestion,callback:function(t){e.quizQuestion=t},expression:"quizQuestion"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[o("v-text-field",{attrs:{label:"الجواب الصحيح",color:"text",outlined:"",rules:e.rules},model:{value:e.quizAnswerCurrect,callback:function(t){e.quizAnswerCurrect=t},expression:"quizAnswerCurrect"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[o("v-text-field",{attrs:{label:"جواب غير صحيح",color:"text",outlined:"",rules:e.rules},model:{value:e.quizAnswerWrong,callback:function(t){e.quizAnswerWrong=t},expression:"quizAnswerWrong"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[o("v-text-field",{attrs:{label:"جواب غير صحيح",color:"text",outlined:"",rules:e.rules},model:{value:e.quizAnswerWrong2,callback:function(t){e.quizAnswerWrong2=t},expression:"quizAnswerWrong2"}})],1)],1),e._v(" "),o("v-btn",{staticClass:"primary--text",attrs:{block:"",color:"success",type:"submit",disabled:!e.addQuizForm}},[e._v("\n          حفظ السؤال\n        ")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"750px",transition:"slide-y-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",{staticClass:"shadow-1 radius-1 pa-10",attrs:{color:"secondary"}},[o("v-toolbar",{staticClass:"shadow-1 radius-1 mb-10",attrs:{color:"primary"}},[o("h4",[e._v("التعليقات")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"accent"},on:{click:function(t){e.dialog=!1}}},[o("v-icon",[e._v("close")])],1)],1),e._v(" "),o("v-data-table",{staticClass:"secondary",attrs:{headers:e.commentsHeaders,items:e.comments},scopedSlots:e._u([{key:"item.actions",fn:function(t){var r=t.item;return[o("v-btn",{attrs:{icon:"",color:"warning"},on:{click:function(t){return e.deleteComment(r)}}},[o("v-icon",[e._v("delete")])],1)]}}],null,!0)})],1)],1),e._v(" "),o("v-card",{staticClass:"shadow-1 radius-1",attrs:{color:"secondary"}},[o("v-data-table",{staticClass:"shadow-1 radius-1 pa-5 secondary courses__table",attrs:{headers:e.headers,items:e.videos,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-toolbar",{staticClass:"shadow-1 radius-1",attrs:{flat:"",color:"primary"}},[o("div",{staticClass:"d-flex align-center justify-evenly",staticStyle:{width:"100%"}},[o("v-toolbar-title",{staticStyle:{flex:"1 1 auto"}},[e._v(e._s(e.courseName))]),e._v(" "),o("v-text-field",{staticStyle:{flex:"1 1 auto"},attrs:{color:"text",placeholder:"الفيديوات...",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),o("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{icon:"",color:"text"},on:{click:function(t){e.createVideoDialog=!0}}},"v-btn",n,!1),r),[o("v-icon",[e._v("mdi-plus")])],1)]}}])},[e._v(" "),o("span",{staticClass:"primary--text"},[e._v("اضافة فيديو")])]),e._v(" "),o("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{icon:"",color:"text"},on:{click:function(t){return e.$router.push("library")}}},"v-btn",n,!1),r),[o("v-icon",[e._v("library_books")])],1)]}}])},[e._v(" "),o("span",{staticClass:"primary--text"},[e._v("المكتبة")])]),e._v(" "),o("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{icon:"",color:"text"},on:{click:function(t){return e.$router.push("homework")}}},"v-btn",n,!1),r),[o("v-icon",[e._v("auto_stories")])],1)]}}])},[e._v(" "),o("span",{staticClass:"primary--text"},[e._v("الواجبات")])]),e._v(" "),o("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",color:"text"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{icon:"",color:"text"},on:{click:e.closeCoursePage}},"v-btn",n,!1),r),[o("v-icon",[e._v("mdi-arrow-left")])],1)]}}])},[e._v(" "),o("span",{staticClass:"primary--text"},[e._v("الرجوع الى صفحة الكورسات")])])],1)])]},proxy:!0},{key:"item.videoLink",fn:function(t){var r=t.item;return[o("v-btn",{attrs:{color:"transparent",depressed:"",href:r.videoLink,target:"_blank"}},[o("v-icon",{staticClass:"ml-2",attrs:{color:"error"}},[e._v("mdi-youtube")]),e._v(" "),o("span",[e._v("عرض الفيديو")])],1)]}},{key:"item.actions",fn:function(t){var r=t.item;return[o("v-btn",{attrs:{icon:"",color:"warning"},on:{click:function(t){return e.initUpdateVideo(r)}}},[o("v-icon",[e._v("edit")])],1),e._v(" "),o("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(t){return e.deleteVideo(r)}}},[o("v-icon",[e._v("delete")])],1),e._v(" "),o("v-btn",{attrs:{icon:"",color:"info"},on:{click:function(t){return e.openQuizDialog(r)}}},[o("v-icon",[e._v("quiz")])],1),e._v(" "),o("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(t){return e.initVideoComments(r)}}},[o("v-icon",[e._v("feedback")])],1),e._v(" "),o("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(t){return e.openUploadDialog(r)}}},[o("v-icon",[e._v("mdi-youtube")])],1)]}}],null,!0)})],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VBtn:h.a,VCard:_.a,VCol:k.a,VDataTable:w.a,VDialog:z.a,VFileInput:V.a,VForm:C.a,VIcon:y.a,VRow:D.a,VSpacer:Q.a,VTextField:$.a,VTextarea:A.a,VToolbar:O.a,VToolbarTitle:F.a,VTooltip:R.a})}}]);