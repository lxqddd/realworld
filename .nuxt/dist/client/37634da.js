(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"h",(function(){return d})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return v})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return w}));var n=r(66),c=function(){return n.b.get("/api/tags")},o=function(article){return n.b.post("api/articles",{article:article})},l=function(t){return n.b.get("api/articles?limit=".concat(t.limit,"&offset=").concat(t.offset))},d=function(t){return n.b.get("/api/articles/feed?limit=".concat(t.limit,"&offset=").concat(t.offset))},f=function(t){return n.b.get("api/articles?limit=".concat(t.limit,"&offset=").concat(t.offset,"&tag=").concat(t.tag))},m=function(t){return n.b.post("/api/articles/".concat(t,"/favorite"))},v=function(t){return n.b.delete("/api/articles/".concat(t,"/favorite"))},h=function(t){return n.b.get("/api/articles/".concat(t))},w=function(t){return n.b.get("/api/articles/".concat(t,"/comments"))}},213:function(t,e,r){"use strict";r.r(e);var n=r(4),article=(r(36),r(199)),c={name:"edit",data:function(){return{article:{body:"",description:"",tagList:[],title:"",tag:""}}},methods:{createNewArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete(r=Object.assign(t.article)).tag,e.prev=2,e.next=5,Object(article.i)(r);case 5:t.$router.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()},AddTagToTagList:function(){this.article.tagList.push(this.article.tag),this.article.tag=""}}},o=r(30),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tag,expression:"article.tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.tag},on:{change:t.AddTagToTagList,input:function(e){e.target.composing||t.$set(t.article,"tag",e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,n){return r("span",{key:n,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(e){return t.removeTag(n)}}}),t._v("\n                  "+t._s(e)+"\n                ")])})),0)]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.createNewArticle}},[t._v("\n              Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);