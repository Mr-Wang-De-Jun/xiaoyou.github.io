(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a6b4caa"],{"4b23":function(t,e,o){"use strict";o.r(e);var n=o("7a23"),c={class:"father"},a={class:"bottom_nav"},r=["onClick"],s=["innerHTML"];function i(t,e,o,i,u,b){return Object(n["G"])(),Object(n["i"])("div",c,[Object(n["j"])("div",a,[(Object(n["G"])(!0),Object(n["i"])(n["a"],null,Object(n["N"])(u.bottom_list,(function(e,o){return Object(n["G"])(),Object(n["i"])("div",{key:o,class:Object(n["w"])(["nav_item",{style_color:o===t.$store.state.bottomIndex}]),onClick:function(t){b.getIndex(o),b.getPath(e)}},[Object(n["j"])("div",null,[Object(n["j"])("i",{class:Object(n["w"])(["iconfont",{style_color:o===t.$store.state.bottomIndex}]),innerHTML:e.icon},null,10,s)]),Object(n["j"])("div",null,Object(n["T"])(e.text),1)],10,r)})),128))])])}var u=o("1da1"),b=(o("96cf"),o("b7da")),l={name:"App",data:function(){return{bottom_list:[]}},mounted:function(){this.getBottomTab()},methods:{getBottomTab:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b["a"])("/bottom_tab");case 3:e=t.sent,200===e.code&&(this.bottom_list=e.bottom_list),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("请求失败");case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),getIndex:function(t){this.$store.commit("setBottomIndex",{index:t,commodityItem:"精选"})},getPath:function(t){switch(t.path){case"/":this.$router.push(t.path);break;case"/commodity/1":this.$router.push(t.path);break;case"/shopcart":localStorage.isLogin?this.$router.push(t.path):this.$router.push("/login");break;case"/personalcenter":localStorage.isLogin?this.$router.push(t.path):this.$router.push("/login");break;default:alert("无效操作")}}}},h=(o("4d2a"),o("6b0d")),d=o.n(h);const p=d()(l,[["render",i],["__scopeId","data-v-189ee445"]]);e["default"]=p},"4d2a":function(t,e,o){"use strict";o("f4ce")},f4ce:function(t,e,o){}}]);
//# sourceMappingURL=chunk-1a6b4caa.3151a074.js.map