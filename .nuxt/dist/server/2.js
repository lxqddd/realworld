exports.ids = [2];
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("d18363dc", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a6ad211_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a6ad211_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a6ad211_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a6ad211_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a6ad211_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pager>a[data-v-7a6ad211],.pager>div[data-v-7a6ad211],.pager>select[data-v-7a6ad211],.pager>span[data-v-7a6ad211]{float:left;margin-left:10px}.pager[data-v-7a6ad211]{width:600px;height:48px;line-height:48px;margin:10px auto 40px}.pager input[data-v-7a6ad211],.pager select[data-v-7a6ad211]{height:38px;line-height:38px;outline:none;border:1px solid #888;padding:0 10px;box-sizing:border-box;border-radius:5px}.pager input[data-v-7a6ad211]{width:50px}.pager .goto[data-v-7a6ad211]{margin-left:16px}.pager a[data-v-7a6ad211]{color:#000;font-weight:700;text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination/index.vue?vue&type=template&id=7a6ad211&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pager"},[_vm._ssrNode("<button class=\"btn btn-primary\""+(_vm._ssrStyle(null,null, { display: (_vm.showFirstPage) ? '' : 'none' }))+" data-v-7a6ad211>\n    首页\n  </button> <button class=\"btn btn-primary\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevPage) ? '' : 'none' }))+" data-v-7a6ad211>\n    上一页\n  </button> <button class=\"btn btn-primary\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextPage) ? '' : 'none' }))+" data-v-7a6ad211>\n    下一页\n  </button> <button class=\"btn btn-primary\""+(_vm._ssrStyle(null,null, { display: (_vm.showLastPage) ? '' : 'none' }))+" data-v-7a6ad211>\n    尾页\n  </button> "),_vm._ssrNode("<div data-v-7a6ad211>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.offset),expression:"offset"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.offset=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"selected":"selected","value":"10"}},[_vm._v("10")]),_vm._v(" "),_c('option',{attrs:{"value":"20"}},[_vm._v("20")]),_vm._v(" "),_c('option',{attrs:{"value":"50"}},[_vm._v("50")]),_vm._v(" "),_c('option',{attrs:{"value":"100"}},[_vm._v("100")])])]),_vm._ssrNode(" <span data-v-7a6ad211>"+_vm._ssrEscape(_vm._s(_vm.total && _vm.curPage)+"/"+_vm._s(_vm.total))+"</span> <div class=\"goto\" data-v-7a6ad211><input type=\"text\""+(_vm._ssrAttr("value",(_vm.gotoPage)))+" data-v-7a6ad211> <button class=\"btn btn-primary\" style=\"margin-right: 4px;\" data-v-7a6ad211>\n      跳转\n    </button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination/index.vue?vue&type=template&id=7a6ad211&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  props: ['pageSize', 'curPage', 'total'],

  data() {
    return {
      gotoPage: '',
      offset: this.pageSize
    };
  },

  computed: {
    showFirstPage() {
      return this.curPage > 1;
    },

    showPrevPage() {
      return this.curPage > 1;
    },

    showLastPage() {
      return this.curPage < this.total;
    },

    showNextPage() {
      return this.curPage < this.total;
    }

  },
  watch: {
    offset: 'offsetChanged' //监控offset

  },

  mounted() {
    this.$nextTick(() => {
      this.initPager();
    });
  },

  methods: {
    initPager() {
      this.gotoPage = '';
    },

    nextPage() {
      //下一页
      this.$emit('setPage', this.curPage + 1); //调用父组件方法
    },

    prevPage() {
      //上一页
      this.$emit('setPage', this.curPage - 1); //调用父组件方法
    },

    gotoNextPage() {
      //跳转页面
      if (this.gotoPage && /[1-9][0-9]*/.test(this.gotoPage)) {
        var pg = parseInt(this.gotoPage);

        if (pg > 0 && pg <= this.pageSize) {
          this.$emit('setPage', pg); //调用父组件方法
        } else {
          this.gotoPage = '';
        }
      } else {
        this.gotoPage = '';
      }
    },

    firstPage() {
      this.$emit('setPage', 1); //调用父组件方法
    },

    lastPage() {
      this.$emit('setPage', this.total); //调用父组件方法
    },

    offsetChanged() {
      this.$emit('setOffset', this.offset);
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pagination/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a6ad211",
  "446dc106"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleItem/index.vue?vue&type=template&id=0855fcf6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-meta\"><div style=\"display: inline-block;\"><span><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></span> <div class=\"info\"><span class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</span> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD,YYYY')))+"</span></div></div> <button"+(_vm._ssrAttr("disabled",_vm.article.disabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary pull-xs-right",_vm.article.favorited ? 'active' : ''))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.article.favoritesCount)+"\n    ")+"</button></div> <div class=\"preview-link\"><h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.article.description))+"</p> <span>Read more...</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleItem/index.vue?vue&type=template&id=0855fcf6&

// EXTERNAL MODULE: ./apis/article.js
var article = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleItem/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ArticleItemvue_type_script_lang_js_ = ({
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },

  created() {
    this.$set(this.article, 'disabled', false);
  },

  methods: {
    jumpToProfile(username) {
      this.$router.push({
        path: '/profile',
        query: {
          username
        }
      });
    },

    async handleOrCancelFavorite(article) {
      // 防止连续点击多次
      if (this.article.disabled) {
        return;
      }

      this.article.disabled = true;

      if (article.favorited) {
        this.cancelFavoriteArticle(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await this.favoriteArticle(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      this.article.disabled = false;
    },

    async favoriteArticle(articleSlug) {
      try {
        Object(article["b" /* favoriteArticle */])(articleSlug);
      } catch (error) {
        console.error(error);
      }
    },

    async cancelFavoriteArticle(articleSlug) {
      try {
        await Object(article["a" /* cancelFavoriteArticle */])(articleSlug);
      } catch (error) {
        console.error(error);
      }
    },

    handlePreviewArticle(article) {
      this.$router.push({
        path: '/article',
        query: {
          slug: article.slug
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ArticleItem/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleItemvue_type_script_lang_js_ = (ArticleItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ArticleItem/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e0ee24e"
  
)

/* harmony default export */ var ArticleItem = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pageS/home/index.vue?vue&type=template&id=4674fa5b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\"><ul class=\"nav nav-pills outline-active\">"+(_vm._ssrList((_vm.tabMap),function(item){return ("<li class=\"nav-item\">"+((item)?("<span"+(_vm._ssrClass("nav-link",_vm.curSelectTab === item && 'active'))+">"+_vm._ssrEscape(_vm._s(item))+"</span>"):"<!---->")+"</li>")}))+"</ul></div> "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_c('ArticleItem',{attrs:{"article":article}})],1)}),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Pagination',{attrs:{"pageSize":_vm.pageSize,"total":_vm.totalPages,"curPage":_vm.curPage},on:{"setPage":_vm.setPage,"setOffset":_vm.setOffset}})],1)],2),_vm._ssrNode(" <div class=\"col-md-3\"><div class=\"sidebar\"><p>Popular Tags</p> <div class=\"tag-list\">"+(_vm._ssrList((_vm.tags),function(tag,index){return ("<span class=\"tag-pill tag-default\">"+_vm._ssrEscape(_vm._s(tag))+"</span>")}))+"</div></div></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pageS/home/index.vue?vue&type=template&id=4674fa5b&

// EXTERNAL MODULE: ./apis/article.js
var article = __webpack_require__(26);

// EXTERNAL MODULE: ./components/Pagination/index.vue + 4 modules
var Pagination = __webpack_require__(32);

// EXTERNAL MODULE: ./components/ArticleItem/index.vue + 4 modules
var ArticleItem = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pageS/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',
  components: {
    Pagination: Pagination["a" /* default */],
    ArticleItem: ArticleItem["a" /* default */]
  },

  data() {
    return {
      tags: [],
      tabMap: {
        your: 'Your Feed',
        global: 'Global Feed',
        dynamic: ''
      },
      curSelectTab: 'Global Feed',
      curPage: 1,
      pageSize: 10,
      totalPages: 0,
      articlesCount: 0,
      articles: []
    };
  },

  created() {
    this.getTagList();
    this.getGlobalFeedArticleList();
  },

  computed: {
    isLogin() {
      return this.$store.state.user.token;
    }

  },
  methods: {
    async getTagList() {
      try {
        const {
          tags
        } = await Object(article["g" /* getTags */])();
        this.tags = [...tags];
      } catch (error) {
        console.error(error);
      }
    },

    async changeTab(tab) {
      if (!this.isLogin) {
        return this.$router.push('/login');
      }

      this.curSelectTab = tab;
      if (tab === 'Your Feed' || tab === 'Global Feed') this.tabMap.dynamic = '';
      await this.initArticlesOfTab(tab);
    },

    async handleSelectTag(tag) {
      if (!this.isLogin) {
        return this.$router.push('/login');
      }

      this.tabMap.dynamic = tag;
      this.curSelectTab = tag;
      await this.getTagArticle(1, this.pageSize, tag);
    },

    async setPage(page) {
      this.curPage = page;
      await this.initArticlesOfTab(this.curSelectTab, this.curPage - 1);
    },

    async setOffset(offset) {
      this.pageSize = offset;
      this.curPage = 1;
      await this.initArticlesOfTab(this.curSelectTab, this.curPage - 1, this.pageSize);
    },

    async getYourFeedArticle(curPage, pageSize) {
      try {
        const {
          articles,
          articlesCount
        } = await Object(article["h" /* getYourFeedArticle */])({
          limit: pageSize,
          offset: curPage
        });
        this.articles = articles;
        this.totalPages = Math.ceil(articlesCount / this.pageSize);
      } catch (error) {
        console.error(error);
      }
    },

    async getTagArticle(curPage, pageSize, tag) {
      try {
        const {
          articles,
          articlesCount
        } = await Object(article["f" /* getTagArticle */])({
          limit: pageSize,
          offset: curPage,
          tag: tag
        });
        this.articles = articles;
        this.totalPages = Math.ceil(articlesCount / this.pageSize);
      } catch (error) {
        console.error(error);
      }
    },

    async getGlobalFeedArticleList(offset = 0, limit = 10) {
      try {
        const {
          articles,
          articlesCount
        } = await Object(article["e" /* getGlobalFeedArticle */])({
          limit,
          offset
        });
        this.articles = articles;
        this.articlesCount = articlesCount;
        this.totalPages = Math.ceil(articlesCount / this.pageSize);
      } catch (error) {
        console.error(error);
      }
    },

    async initArticlesOfTab(tab, curPage = 0, pageSize = 10) {
      switch (tab) {
        case 'Global Feed':
          await this.getGlobalFeedArticleList(curPage, pageSize);
          break;

        case 'Your Feed':
          await this.getYourFeedArticle(curPage, pageSize);
          break;

        default:
          await this.getTagArticle(curPage, pageSize, tab);
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./pageS/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pageS_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pageS/home/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pageS_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d72b2a6"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map