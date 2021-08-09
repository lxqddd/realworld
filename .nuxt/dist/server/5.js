exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return settingsUser; });
/* harmony import */ var _plugins_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * 用户登录
 * @typedef { User } user
 * @property { String } email 邮箱
 * @property { String } password 密码
 * @returns
 */

const login = user => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].post('/api/users/login', {
    user
  });
};
/**
 * 用户注册
 * @typedef { User } user
 * @property { String } username 用户名
 * @property { String } email 邮箱
 * @property { String } password 密码
 * @returns
 */

const register = user => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].post('/api/users', {
    user
  });
};
/**
 * 设置用户信息
 * @typedef { User } user
 * @property { String } username 用户名
 * @property { String } bio 个人签名
 * @property { String } image 头像Url
 * @property { String } email 邮箱
 * @property { String } password 密码
 * @returns
 */

const settingsUser = user => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"].put('/api/user', {
    user
  });
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=4754da7b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode(((!_vm.isLogin)?("<h1 class=\"text-xs-center\">Sign up</h1>"):("<h1 class=\"text-xs-center\">Sign in</h1>"))+" "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("已有账号，去登录")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("没有账号，去注册")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(error){return ("<li>"+_vm._ssrEscape(_vm._s(error))+"</li>")}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userForm.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userForm.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userForm.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sing in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=4754da7b&

// EXTERNAL MODULE: ./apis/user.js
var apis_user = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'LoginIndex',
  middleware: 'notAuthenticated',

  data() {
    return {
      userForm: {
        username: '',
        email: '',
        password: ''
      },
      errors: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async handLoginOrRegister() {
      const params = {
        username: this.userForm.username,
        email: this.userForm.email,
        password: this.userForm.password
      };

      if (this.userForm.username) {
        await this.handleRegister(params);
      } else {
        await this.handleLogin(params);
      }
    },

    async handleLogin(params) {
      delete params.username;

      try {
        const {
          user
        } = await Object(apis_user["a" /* login */])(params);
        this.$store.commit('setUser', user);
        Cookie.set('auth', user);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
        this.errors = [];
        const errors = error['errors'];
        this.handleErrors(errors);
      }
    },

    async handleRegister(params) {
      try {
        const {
          user
        } = await Object(apis_user["b" /* register */])(params);
        Cookie.set('auth', user);
        this.$store.commit('setUser', user);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
        this.errors = [];
        const errors = error['errors'];
        this.handleErrors(errors);
      }
    },

    handleErrors(errors) {
      for (const key in errors) {
        errors[key].forEach(item => {
          this.errors.push(key + ' ' + item);
        });
      }
    },

    ...Object(external_vuex_["mapMutations"])(['setAuth'])
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4c5b36d7"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map