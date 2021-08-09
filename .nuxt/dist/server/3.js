exports.ids = [3];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProfileUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return followProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelFollowProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMyArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMyFavoArticles; });
/* harmony import */ var _plugins_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * 获取用户信息
 * @param { String } username 用户名称
 */

const getProfileUserInfo = username => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`/api/profiles/${username}`);
};
/**
 * 关注该用户
 * @param { String } username 用户名称
 */

const followProfile = username => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].post(`api/profiles/${username}/follow`);
};
/**
 * 取消关注该用户
 * @param { String } username 用户名称
 */

const cancelFollowProfile = username => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].delete(`api/profiles/${username}/follow`);
};
/**
 * 获取我的文章列表
 * @typedef { ParamsType } params
 * @property { String } authorName 作者名称
 * @property { Number } pageSize 步长
 * @property { Number } offset 偏移量
 * @returns
 */

const getMyArticles = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`api/articles?author=${params.authorName}&limit=${params.pageSize}&offset=${params.offset}`);
};
/**
 * 获取我喜欢的文章列表
 * @typedef { ParamsType } params
 * @property { String } username 作者名称
 * @property { Number } pageSize 步长
 * @property { Number } offset 偏移量
 * @returns
 */

const getMyFavoArticles = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].get(`api/articles?favorited=${params.username}&limit=${params.pageSize}&offset=${params.offset}`);
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=3616548f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.articleDetail.title))+"</h1> <div class=\"article-meta\">"+((_vm.articleDetail.author)?("<div style=\"display: inline-block;\"><span><img"+(_vm._ssrAttr("src",_vm.articleDetail.author.image))+"></span> <div class=\"info\"><span class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.articleDetail.author.username))+"</span> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.articleDetail.updateAt,'MMM DD,YYYY')))+"</span></div></div>"):"<!---->")+" <button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n           \n          "+_vm._s(_vm.articleDetail.author && _vm.articleDetail.author.following ? 'UnFollow' : 'Follow')+"\n          "+_vm._s(_vm.articleDetail.author ? _vm.articleDetail.author.username : '')+"\n        ")+"</button>\n          \n        <button class=\"btn btn-sm btn-outline-primary\"><i class=\"ion-heart\"></i>\n            Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.articleDetail.favoritesCount)+")")+"</span></button></div></div></div> <div class=\"container page\"><div class=\"row article-content\"><div class=\"col-md-12\"><p>"+_vm._ssrEscape("\n          "+_vm._s(_vm.articleDetail.body)+"\n        ")+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.articleDetail.description))+"</p></div></div> <ul class=\"tag-list\">"+(_vm._ssrList((_vm.articleDetail.tagList),function(tag,index){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n        "+_vm._s(tag)+"\n      ")+"</li>")}))+"</ul> <hr> <div class=\"article-actions\"><div class=\"article-meta\">"+((_vm.articleDetail.author)?("<div style=\"display: inline-block;\"><span><img"+(_vm._ssrAttr("src",_vm.articleDetail.author.image))+"></span> <div class=\"info\"><span class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.articleDetail.author.username))+"</span> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.articleDetail.updateAt,'MMM DD, YYYY')))+"</span></div></div>"):"<!---->")+" <button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n           \n          "+_vm._s(_vm.articleDetail.author && _vm.articleDetail.author.following ? 'UnFollow' : 'Follow')+"\n          "+_vm._s(_vm.articleDetail.author ? _vm.articleDetail.author.username : '')+"\n        ")+"</button>\n         \n        <button class=\"btn btn-sm btn-outline-primary\"><i class=\"ion-heart\"></i>\n            Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.articleDetail.favoritesCount)+")")+"</span></button></div></div> <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n              Post Comment\n            </button></div></form> "+(_vm._ssrList((_vm.commentList),function(comment){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n              "+_vm._s(comment.body)+"\n            ")+"</p></div> <div class=\"card-footer\">"+((comment.author)?("<a href class=\"comment-author\"><img"+(_vm._ssrAttr("src",comment.author.image))+" class=\"comment-author-img\"></a>"):"<!---->")+"\n             \n            "+((comment.author)?("<a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(comment.author.username))+"</a>"):"<!---->")+" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.updateAt,'MMM DD, YYYY')))+"</span></div></div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=3616548f&

// EXTERNAL MODULE: ./apis/article.js
var article = __webpack_require__(26);

// EXTERNAL MODULE: ./apis/profile.js
var profile = __webpack_require__(31);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'Article',

  data() {
    return {
      slug: '',
      articleDetail: {},
      commentList: {}
    };
  },

  async created() {
    this.slug = this.$route.query.slug;
    await this.getArticleDetail();
    await this.getArticleCommentList();
    this.$set(this.articleDetail, 'disabledFollow', false);
    this.$set(this.articleDetail, 'disabledFavo', false);
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async getArticleDetail() {
      try {
        const res = await Object(article["c" /* getArticleDetail */])(this.slug);
        this.articleDetail = res.article;
        console.log(this.articleDetail);
      } catch (error) {
        console.error(error);
      }
    },

    async getArticleCommentList() {
      try {
        const res = await Object(article["d" /* getCommentList */])(this.slug);
        this.commentList = res.comments;
        console.log(this.commentList);
      } catch (error) {
        console.error(error);
      }
    },

    jumpToProfile() {
      this.$router.push({
        path: '/profile',
        query: {
          username: this.articleDetail.author.username
        }
      });
    },

    async followOrCancelFollowCurAuthor() {
      if (this.articleDetail.disabledFollow) {
        return;
      }

      this.articleDetail.disabledFollow = true;

      try {
        if (this.articleDetail.author.following) {
          await Object(profile["a" /* cancelFollowProfile */])(this.articleDetail.author.username);
          this.articleDetail.author.following = false;
        } else {
          await Object(profile["b" /* followProfile */])(this.articleDetail.author.username);
          this.articleDetail.author.following = true;
        }
      } catch (error) {
        console.error(error);
      }

      this.articleDetail.disabledFollow = false;
    },

    async favoOrCancelFavoCurArticle() {
      if (this.articleDetail.disabledFavo) {
        return;
      }

      this.articleDetail.disabledFavo = true;

      try {
        if (this.articleDetail.favorited) {
          await Object(article["a" /* cancelFavoriteArticle */])(this.articleDetail.slug);
          this.articleDetail.favorited = false;
          this.articleDetail.favoritesCount -= 1;
        } else {
          await Object(article["b" /* favoriteArticle */])(this.articleDetail.slug);
          this.articleDetail.favorited = true;
          this.articleDetail.favoritesCount += 1;
        }
      } catch (error) {
        console.error(error);
      }

      this.articleDetail.disabledFavo = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3a64ffb8"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map