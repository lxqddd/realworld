exports.ids = [4];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return newArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGlobalFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getYourFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTagArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return favoriteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelFavoriteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCommentList; });
/* unused harmony export postComment */
/* harmony import */ var _plugins_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * 获取所有文章标签
 * @returns
 */

const getTags = () => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get('/api/tags');
};
/**
 * 发布一篇新的文章
 * @typedef { Article } article
 * @property { String } body 内容
 * @property { String } title 标题
 * @property { String } description 描述内容
 * @property { Array } tagList 标签列表
 * @returns
 */

const newArticle = article => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].post('api/articles', {
    article
  });
};
/**
 * 获取所有的文章列表
 * @typedef { ArticleList } params
 * @property { Number } limit 步长
 * @property { Number } offset 每页多少条
 * @returns
 */

const getGlobalFeedArticle = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`api/articles?limit=${params.limit}&offset=${params.offset}`);
};
/**
 * 获取你发表的文章列表
 * @typedef { ArticleList } params
 * @property { Number } limit 步长
 * @property { Number } offset 每页多少条
 * @returns
 */

const getYourFeedArticle = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`/api/articles/feed?limit=${params.limit}&offset=${params.offset}`);
};
/**
 * 获取标签文章列表
 * @typedef { ArticleList } params
 * @property { Number } limit 步长
 * @property { Number } offset 每页多少条
 * @property { String } tag 当前选中的标签
 * @returns
 */

const getTagArticle = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`api/articles?limit=${params.limit}&offset=${params.offset}&tag=${params.tag}`);
};
/**
 * 点赞当前文章
 * @param { String } articleSlug 文章的slug
 * @returns
 */

const favoriteArticle = articleSlug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].post(`/api/articles/${articleSlug}/favorite`);
};
/**
 * 取消点赞当前文章
 * @param { String } articleSlug 文章的slug
 * @returns
 */

const cancelFavoriteArticle = articleSlug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].delete(`/api/articles/${articleSlug}/favorite`);
};
/**
 * 获取文章详情
 * @param { String } articleSlug 文章的slug
 * @returns
 */

const getArticleDetail = articleSlug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`/api/articles/${articleSlug}`);
};
/**
 * 获取文章的评论列表
 * @param { String } articleSlug 文章的slug
 * @returns
 */

const getCommentList = articleSlug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`/api/articles/${articleSlug}/comments`);
};
const postComment = articleSlug => {};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=template&id=fd3a701a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.article.tag)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=template&id=fd3a701a&

// EXTERNAL MODULE: ./apis/article.js
var article = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'edit',

  data() {
    return {
      article: {
        body: '',
        description: '',
        tagList: [],
        title: '',
        tag: ''
      }
    };
  },

  methods: {
    async createNewArticle() {
      const params = Object.assign(this.article);
      delete params.tag;

      try {
        await Object(article["i" /* newArticle */])(params);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },

    AddTagToTagList() {
      this.article.tagList.push(this.article.tag);
      this.article.tag = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/edit/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9e30bc10"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map