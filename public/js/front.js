webpackJsonp([0],{"+2sK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comTop",computed:{loggedIn:function(){return!window.isGuest}}}},"+HN0":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{current:this.currentPage}},props:{total:{type:Number,default:0},display:{type:Number,default:10},currentPage:{type:Number,default:1},pagegroup:{type:Number,default:5,coerce:function(t){return(t=t>0?t:5)%2==2?t:t+1}}},computed:{page:function(){return Math.ceil(this.total/this.display)},grouplist:function(){var t=this.page,e=[];Math.floor(this.pagegroup/2),this.current;if(t<=this.pagegroup){for(;t--;)e.push({text:this.page-t,val:this.page-t});return e}if(t>this.pagegroup)if(this.current<this.pagegroup){for(var a=1;a<=this.pagegroup;a++)e.push({text:a,val:a});this.current<=t-2&&e.push({text:"...",val:null})}else if(this.current>=this.pagegroup){for(var s=1;s<=2;s++)e.push({text:s,val:s});if(e.push({text:"...",val:null}),this.current+1==t)for(var r=this.current-1;r<=t;r++)e.push({text:r,val:r});else if(this.current==t)for(var i=this.current-2;i<=t;i++)e.push({text:i,val:i});else{for(var n=this.current-1;n<=this.current+1;n++)e.push({text:n,val:n});e.push({text:"...",val:null})}}return e}},methods:{setCurrent:function(t){this.current!=t&&t>0&&t<this.page+1&&(this.current=t,this.$emit("pagechange",this.current))}}}},3:function(t,e,a){t.exports=a("VqNM")},"4xgm":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comFoot"}},"6x32":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("cj9k"),r=a.n(s),i=a("TGno"),n=a.n(i),o=a("fagx"),l=a.n(o),c=a("k06j"),u=a.n(c),p=a("NYxO");e.default={name:"home",computed:Object(p.mapGetters)(["showLoading"]),components:{sideMenu:r.a,comFoot:l.a,comTop:n.a,Loading:u.a},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}}},"7LhJ":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com-main"},[a("div",{staticClass:"main-con"},[a("div",{staticClass:"article-top"},[a("div",{staticClass:"break-nav"},[a("router-link",{attrs:{to:"/new",title:"最新"}},[t._v("最新")]),a("em",[t._v(">")]),a("span",[t._v(t._s(t.article.data.title))])],1)]),t._v(" "),a("div",{staticClass:"article-con"},[a("div",{staticClass:"article-tt"},[a("h3",[t._v(t._s(t.article.data.title))]),t._v(" "),a("p",{staticClass:"article-infor"},[t.article.team?a("a",{staticClass:"team",attrs:{href:t.article.team.website,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(t.article.team.title))]):t._e(),t._v("\n                    @"),a("a",{staticClass:"people",attrs:{href:t.article.data.author_url,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(t.article.data.author))]),a("span",{staticClass:"time"},[t._v(t._s(t.article.data.publish_time))]),t._v(" "),a("a",{staticClass:"origin-link",attrs:{href:t.article.data.source_url,target:"_blank",rel:"noopener external nofollow"}},[a("i",{staticClass:"spr"}),t._v("查看原文")])])]),t._v(" "),a("div",{staticClass:"article",domProps:{innerHTML:t._s(t.article.data.content)}})])])])},staticRenderFns:[]}},"9Ctr":function(t,e,a){var s=a("VU/8")(a("B6Rf"),a("O3yl"),!1,null,null,null);t.exports=s.exports},"9YnB":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!=t.total?a("div",{staticClass:"pages"},[a("ul",{staticClass:"pagination"},[a("li",{class:{disabled:1==t.current}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(1)}}},[t._v(" 首页 ")])]),t._v(" "),a("li",{class:{disabled:1==t.current}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(t.current-1)}}},[t._v("«")])]),t._v(" "),t._l(t.grouplist,function(e){return a("li",{class:{active:t.current==e.val}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.setCurrent(e.val)}}},[t._v(" "+t._s(e.text)+" ")])])}),t._v(" "),a("li",{class:{disabled:t.current==t.page}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(t.current+1)}}},[t._v("»")])]),t._v(" "),a("li",{class:{disabled:t.current==t.page}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(t.page)}}},[t._v(" 末页 ")])])],2)]):t._e()},staticRenderFns:[]}},B6Rf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("biE7"),r=a.n(s);e.default={name:"tdetail",data:function(){return{teamer:{title:""},articles:{},total:1,display:10,current:1,currentPage:1}},watch:{$route:function(){var t=this,e=this.$route;e.params.id?this.current=parseInt(e.params.id):this.current=1;var a="/api/v2/teams/list?page="+this.current+"&size=10";axios.get(a).then(function(e){var a=e.data;!(t.current>a.last_page)&&t.current>0?(t.$set(t,"articles",a.data),t.$set(t,"total",a.total),t.$set(t,"display",a.per_page),t.$refs.pagination.setCurrent(t.current)):t.$router.push({path:"/error404"})})}},methods:{pagechange:function(t){this.current=t,this.$router.push({path:"/teams/"+this.current+"&size=10",params:{id:this.current}})}},components:{pagination:r.a},created:function(){var t=this,e=this.$route;e.params.id&&(this.current=parseInt(e.params.id));var a;a="/api/v2/teams/list?page="+this.current+"&size=10",axios.get(a).then(function(e){var a=e.data;!(t.current>a.last_page)&&t.current>0?(t.$set(t,"articles",a.data),t.$set(t,"total",a.total),t.$set(t,"display",a.per_page)):t.$router.push({path:"/error404"})})}}},B9kp:function(t,e,a){var s=a("VU/8")(null,a("gVL2"),!1,null,null,null);t.exports=s.exports},Bknm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("biE7"),r=a.n(s);e.default={name:"tdetail",data:function(){return{teamer:{title:""},articles:{},total:0,display:10,tid:1,current:1,currentPage:1}},watch:{$route:function(){var t=this,e=this.$route;this.tid=e.params.tid,e.params.pid?this.current=parseInt(e.params.pid):this.current=1;var a="/api/v2/team/detail?id="+this.tid+"&page="+this.current;axios.get(a).then(function(e){var a=e.data;46001==a.code?t.$router.push({path:"/error404"}):!(t.current>a.data.last_page)&&t.current>0?(t.$set(t,"teamer",{logo:a.data.logo,title:a.data.title,website:a.data.website}),t.$set(t,"articles",a.data.articles),t.$set(t,"total",a.data.articles.total),t.$set(t,"display",a.data.articles.per_page),t.$refs.pagination.setCurrent(t.current)):t.$router.push({path:"/error404"})})}},methods:{pagechange:function(t){this.current=t,this.$router.push({path:"/team/"+this.tid+"/"+this.current+"/",params:{tid:this.tid,pid:this.current}})}},components:{pagination:r.a},created:function(){var t=this,e=this.$route;e.params.pid&&(this.current=parseInt(e.params.pid)),e.params.tid&&(this.tid=parseInt(e.params.tid));var a;a="/api/v2/team/detail?id="+this.tid+"&page="+this.current,axios.get(a).then(function(e){var a=e.data;46001==a.code?t.$router.push({path:"/error404"}):!(t.current>a.data.articles.last_page)&&t.current>0?(t.$set(t,"teamer",{logo:a.data.logo,title:a.data.title,website:a.data.website}),t.$set(t,"articles",a.data.articles),t.$set(t,"total",a.data.articles.total),t.$set(t,"display",a.data.articles.per_page)):t.$router.push({path:"/error404"})})}}},"M/ve":function(t,e,a){var s=a("VU/8")(a("Bknm"),a("NAj5"),!1,null,null,null);t.exports=s.exports},Mclz:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-menu"},[a("div",{},[t._m(0),t._v(" "),a("div",{staticClass:"side-menu-con"},[a("div",{staticClass:"main-tag"},[a("ul",[a("router-link",{attrs:{tag:"li",to:"/new"}},[a("a",[t._v("最新")])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/hot"}},[a("a",[t._v("最热")])])],1)]),t._v(" "),a("div",{staticClass:"filter"},[a("dl",[t._m(1),t._v(" "),t._l(t.teamData,function(e){return a("dd",[a("router-link",{attrs:{to:"/team/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1)}),t._v(" "),t._m(2)],2)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"toggle-btn",attrs:{href:"javascript:void(0);"}},[e("i",{staticClass:"hide-btn"},[this._v("收起")]),this._v(" "),e("i",{staticClass:"show-btn spr hide"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"team spr"}),this._v("团队")])},function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("a",{attrs:{href:"/teams",title:"更多"}},[this._v("更多>>")])])}]}},NAj5:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com-main"},[t._m(0),t._v(" "),a("div",{staticClass:"main-con"},[a("ul",{staticClass:"list clearfix"},[a("li",{staticClass:"team-intro"},[a("a",{staticClass:"list-pic team-logo",attrs:{href:t.teamer.website,target:"_blank",rel:"noopener external nofollow"}},[a("img",{attrs:{src:t.teamer.logo,alt:t.teamer.title}})]),t._v(" "),a("h3",[a("a",{attrs:{href:t.teamer.website,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(t.teamer.title))])]),t._v(" "),a("p",{staticClass:"list-intro"},[t._v(t._s(t.teamer.title))])]),t._v(" "),t._l(t.articles.data,function(e){return a("li",[a("router-link",{staticClass:"list-pic",attrs:{to:"/article/"+e.id}},[a("img",{attrs:{src:e.figure,alt:e.title}})]),t._v(" "),a("h3",[a("router-link",{staticClass:"title",attrs:{to:"/article/"+e.id}},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"read-all spr"},[t._v(t._s(e.click_count))])],1),t._v(" "),a("p",{staticClass:"list-intro"},[t._v(t._s(e.summary))]),t._v(" "),a("p",{staticClass:"list-infor"},[e.team?a("a",{staticClass:"team",attrs:{href:e.team.website,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(e.team.title))]):t._e(),t._v("@\n                    "),a("a",{staticClass:"people",attrs:{href:e.author_url,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(e.author))]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(e.publish_time)+" ")]),t._v(" "),a("a",{staticClass:"origin-link",attrs:{href:e.source_url,target:"_blank",rel:"noopener external nofollow"}},[a("i",{staticClass:"spr"})])])],1)})],2),t._v(" "),a("pagination",{ref:"pagination",attrs:{total:t.total,"current-page":t.current},on:{pagechange:t.pagechange}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-tt"},[e("h2",[this._v("团队")])])}]}},O3yl:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com-main"},[t._m(0),t._v(" "),a("div",{staticClass:"main-con"},[a("ul",{staticClass:"list clearfix teamlist"},t._l(t.articles,function(e){return a("li",[a("router-link",{staticClass:"list-pic team-logo",attrs:{to:"/team/"+e.id}},[a("img",{attrs:{src:e.logo,alt:e.title}})]),t._v(" "),a("h3",[a("router-link",{attrs:{to:"/team/"+e.id}},[t._v(t._s(e.title)+" ")]),a("span",{staticClass:"article-num"},[t._v(t._s(e.articles_count))])],1),t._v(" "),a("p",{staticClass:"list-intro"},[t._v(t._s(e.description))])],1)})),t._v(" "),a("pagination",{ref:"pagination",attrs:{total:t.total,"current-page":t.current},on:{pagechange:t.pagechange}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-tt"},[e("h2",[this._v("团队")])])}]}},Qmio:function(t,e){},TGno:function(t,e,a){var s=a("VU/8")(a("+2sK"),a("wHzs"),!1,null,null,null);t.exports=s.exports},"ThS+":function(t,e,a){var s=a("VU/8")(a("6x32"),a("xZ7f"),!1,null,null,null);t.exports=s.exports},UVbd:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"loading"}},[e("div",{staticClass:"spinner"},[e("div",{staticClass:"bounce1"}),this._v(" "),e("div",{staticClass:"bounce2"}),this._v(" "),e("div",{staticClass:"bounce3"})])])}]}},Uvwt:function(t,e,a){var s=a("VU/8")(a("vPM2"),a("7LhJ"),!1,null,null,null);t.exports=s.exports},"VU/8":function(t,e){t.exports=function(t,e,a,s,r,i){var n,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),r&&(u._scopeId=r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):s&&(c=s),c){var p=u.functional,h=p?u.render:u.beforeCreate;p?(u._injectStyles=c,u.render=function(t,e){return c.call(e),h(t,e)}):u.beforeCreate=h?[].concat(h,c):[c]}return{esModule:n,exports:o,options:u}}},VqNM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,r=a("I3G/"),i=a.n(r),n=a("/ocq"),o=a("NYxO"),l=a("B9kp"),c=a("ThS+"),u=a("cFjf"),p=a("Uvwt"),h=a("9Ctr"),d=a("M/ve"),v=[{path:"/",component:c,children:[{path:"",redirect:"/new"},{path:"hot",component:u},{path:"hot/:id",component:u},{path:"new",component:u},{path:"new/:id",component:u},{path:"article/:id",component:p},{path:"teams",component:h},{path:"teams/:id",component:h},{path:"team/:tid",component:d},{path:"team/:tid/:pid",component:d}]},{path:"/error404",component:l}],_={showloader:function(t){(0,t.commit)("SHOWLOADING")},hideloader:function(t){(0,t.commit)("HIDELOADING")}};function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={state:{showLoading:!1},mutations:(f(s={},"SHOWLOADING",function(t){t.showLoading=!0}),f(s,"HIDELOADING",function(t){t.showLoading=!1}),s),getters:{showLoading:function(t){return t.showLoading}}};i.a.use(o.default);var g=new o.default.Store({modules:{mutations:m},actions:_});i.a.use(n.default),void 0===window.axios&&(window.axios=a("mtWM")),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";axios.defaults.baseURL="/";var C=new n.default({base:"/",mode:"history",routes:v});axios.interceptors.request.use(function(t){return g.dispatch("showloader"),t},function(t){return Promise.reject(t)}),axios.interceptors.response.use(function(t){return g.dispatch("hideloader"),t},function(t){return Promise.reject(t)});new i.a({el:"#app",router:C,store:g});C.afterEach(function(t,e,a){window.scrollTo(0,0)})},ZG3q:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"com-footer"},[e("p",[this._v("Copyright © 2017 Tgideas")]),this._v(" "),e("p",[this._v("粤ICP备14011364号-4")])])}]}},biE7:function(t,e,a){var s=a("VU/8")(a("+HN0"),a("9YnB"),!1,null,null,null);t.exports=s.exports},c5NY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sideMenu",data:function(){return{teamData:{}}},computed:{username:function(){return this.$route.params.username}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}},created:function(){var t=this;axios.get("/api/v2/teams/list?page=1&size=10").then(function(e){var a=e.data;t.$set(t,"teamData",a.data)})}}},cFjf:function(t,e,a){var s=a("VU/8")(a("mC3X"),a("sRxD"),!1,null,null,null);t.exports=s.exports},cj9k:function(t,e,a){var s=a("VU/8")(a("c5NY"),a("Mclz"),!1,null,null,null);t.exports=s.exports},fagx:function(t,e,a){var s=a("VU/8")(a("4xgm"),a("ZG3q"),!1,null,null,null);t.exports=s.exports},gVL2:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("html",[e("head",[e("meta",{attrs:{charset:"utf-8"}}),this._v(" "),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"IE=edge"}}),this._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),this._v(" "),e("title",[this._v("Page Not Found")])]),this._v(" "),e("body",[e("h1",{staticClass:"title",staticStyle:{"font-size":"36px","margin-top":"400px"}},[this._v("\n            Sorry, the page you are looking for could not be found.                ")])])])}]}},k06j:function(t,e,a){var s=a("VU/8")(a("vA8b"),a("UVbd"),!1,function(t){a("Qmio")},null,null);t.exports=s.exports},mC3X:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("biE7"),r=a.n(s);e.default={name:"alist",data:function(){return{articles:{},total:0,display:10,current:1,currentPage:1,ctype:"hot"}},watch:{$route:function(){var t=this,e=this.$route;e.params.id?this.current=parseInt(e.params.id):this.current=1,/\/new/.test(e.path)&&"new"!=this.ctype?this.ctype="new":/\/hot/.test(e.path)&&"hot"!=this.ctype&&(this.ctype="hot");var a=void 0;a="hot"==this.ctype?"/api/v2/articles/list?page="+this.current+"&size=10&hot=1":"/api/v2/articles/list?page="+this.current+"&size=10",axios.get(a).then(function(e){var a=e.data;!(t.current>a.last_page)&&t.current>0?(t.$set(t,"articles",a),t.$refs.pagination.setCurrent(t.current)):t.$router.push({path:"/error404"})})}},methods:{pagechange:function(t){this.current=t,this.$router.push({path:"/"+this.ctype+"/"+this.current,params:{id:this.current}})}},components:{pagination:r.a},created:function(){var t=this,e=this.$route;e.params.id&&(this.current=parseInt(e.params.id)),/\/new/.test(e.path)&&"new"!=this.ctype?this.ctype="new":/\/hot/.test(e.path)&&"hot"!=this.ctype&&(this.ctype="hot");var a=void 0;a="hot"==this.ctype?"/api/v2/articles/list?page="+this.current+"&size=10&hot=1":"/api/v2/articles/list?page="+this.current+"&size=10",axios.get(a).then(function(e){var a=e.data;!(t.current>a.last_page)&&t.current>0?(t.$set(t,"articles",a),t.$set(t,"total",a.total),t.$set(t,"display",a.per_page)):t.$router.push({path:"/error404"})})}}},sRxD:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com-main"},[a("div",{staticClass:"main-tt"},["hot"===t.ctype?a("h2",[t._v("\n            最热\n        ")]):"new"===t.ctype?a("h2",[t._v("\n            最新\n        ")]):t._e(),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"main-con"},[a("ul",{staticClass:"list clearfix list"},t._l(t.articles.data,function(e){return a("li",[a("router-link",{staticClass:"list-pic",attrs:{to:"/article/"+e.id}},[a("img",{attrs:{src:e.figure,alt:e.title}})]),t._v(" "),a("h3",[a("router-link",{staticClass:"title",attrs:{to:"/article/"+e.id}},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"read-all spr"},[t._v(t._s(e.click_count))])],1),t._v(" "),a("p",{staticClass:"list-intro"},[t._v(t._s(e.summary))]),t._v(" "),a("p",{staticClass:"list-infor"},[e.team?a("a",{staticClass:"team",attrs:{to:e.team.website,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(e.team.title))]):t._e(),t._v("@\n                    "),a("a",{staticClass:"people",attrs:{href:e.author_url,target:"_blank",rel:"noopener external nofollow"}},[t._v(t._s(e.author))]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(e.publish_time)+" ")]),t._v(" "),a("a",{staticClass:"origin-link",attrs:{href:e.source_url,target:"_blank",rel:"noopener external nofollow"}},[a("i",{staticClass:"spr"})])])],1)})),t._v(" "),a("pagination",{ref:"pagination",attrs:{total:t.total,"current-page":t.current},on:{pagechange:t.pagechange}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"type-btns",staticStyle:{display:"block"}},[e("a",{staticClass:"list spr hide on",attrs:{href:"javascript:void(0);",title:"list"}},[this._v("list")]),this._v(" "),e("a",{staticClass:"item spr hide ",attrs:{href:"javascript:void(0);",title:"imte"}},[this._v("item")])])}]}},vA8b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},vPM2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("biE7");a.n(s);e.default={name:"adetail",data:function(){return{article:{data:{title:"",author_url:"",author:""}},aid:""}},created:function(){var t=this;this.$set(this,"aid",parseInt(this.$route.params.id)),axios.get("/api/v2/article/detail?id="+this.aid).then(function(e){var a=e.data;46001==a.code?t.$router.push({path:"/error404"}):t.$set(t,"article",a)})}}},wHzs:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"com-top"},[this._m(0),this._v(" "),e("h1",{staticClass:"logo"},[e("router-link",{staticClass:"hide",attrs:{to:"/",title:"DevFeed"}},[this._v("DevFeed")])],1),this._v(" "),e("div",{staticClass:"login"},[this.loggedIn?e("div",{staticClass:"logined",attrs:{id:"logined"}},[e("a",{staticClass:"spr",attrs:{href:"/auth/logout"}},[this._v("注销")])]):e("div",{staticClass:"unlogin",attrs:{id:"unlogin"}},[e("a",{staticClass:"spr",attrs:{href:"/login"}},[this._v("登录")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"uk-button",attrs:{"data-uk-offcanvas":"{target:'#sideMenu'}"}},[e("i",{staticClass:"show-btn spr hide"})])}]}},xZ7f:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Loading",{directives:[{name:"show",rawName:"v-show",value:this.showLoading,expression:"showLoading"}]}),this._v(" "),e("sideMenu"),this._v(" "),e("div",{staticClass:"container"},[e("comTop"),this._v(" "),e("router-view"),this._v(" "),e("comFoot")],1)],1)},staticRenderFns:[]}}},[3]);