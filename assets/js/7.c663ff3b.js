(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{10:function(t,n,r){var e=r(14),o=r(32),i=r(15),u=r(29),c=r(70),f=function(t,n,r){var a,s,p,l,v=t&f.F,h=t&f.G,d=t&f.S,y=t&f.P,x=t&f.B,_=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,m=h?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});for(a in h&&(r=n),r)p=((s=!v&&_&&void 0!==_[a])?_:r)[a],l=x&&s?c(p,e):y&&"function"==typeof p?c(Function.call,p):p,_&&u(_,a,p,t&f.U),m[a]!=p&&i(m,a,l),y&&b[a]!=p&&(b[a]=p)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},105:function(t,n,r){},107:function(t,n,r){t.exports=!r(22)&&!r(13)(function(){return 7!=Object.defineProperty(r(69)("div"),"a",{get:function(){return 7}}).a})},108:function(t,n,r){var e=r(21);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},109:function(t,n,r){var e=r(35);t.exports=Array.isArray||function(t){return"Array"==e(t)}},11:function(t,n,r){var e=r(46)("wks"),o=r(47),i=r(14).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},117:function(t,n,r){t.exports=r(46)("native-function-to-string",Function.toString)},118:function(t,n,r){var e=r(58),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},119:function(t,n,r){var e=r(120);t.exports=function(t,n){return new(e(t))(n)}},120:function(t,n,r){var e=r(21),o=r(109),i=r(11)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},13:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},14:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},15:function(t,n,r){var e=r(33),o=r(64);t.exports=r(22)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},17:function(t,n,r){"use strict";var e=r(13);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},18:function(t,n,r){var e=r(27);t.exports=function(t){return Object(e(t))}},186:function(t,n,r){"use strict";var e=r(105);r.n(e).a},198:function(t,n,r){"use strict";r.r(n);r(45),r(51),r(52);var e={methods:{isSelected:function(t){return this.$route.fullPath===t}},computed:{chapters:function(){var t=this.book,n=this.$site.pages.filter(function(n){return n.path.indexOf("/books/".concat(t,"/"))>=0});return n=n.sort(function(t,n){return t.frontmatter.chapter>n.frontmatter.chapter?1:t.frontmatter.chapter<n.frontmatter.chapter?-1:0}),console.log("sorting..."),n}},props:["book"]},o=(r(186),r(0)),i=Object(o.a)(e,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"book-detail"},t._l(t.chapters,function(n){return r("div",[r("div",{class:{depth1:1==n.frontmatter.depth,depth2:2==n.frontmatter.depth,selected:t.isSelected(n.path)}},[n.frontmatter.depth>1?r("a",{staticClass:"title",class:{selected:t.isSelected(n.path)},attrs:{href:n.path}},[t._v(t._s(n.title))]):t._e(),t._v(" "),1==n.frontmatter.depth?r("span",[t._v(t._s(n.title))]):t._e()]),t._v(" "),r("div",[t._v("\n      "+t._s(n.description)+"\n    ")])])}),0)},[],!1,null,"d992904e",null);n.default=i.exports},20:function(t,n,r){var e=r(21);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},21:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},22:function(t,n,r){t.exports=!r(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},23:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},27:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},29:function(t,n,r){var e=r(14),o=r(15),i=r(23),u=r(47)("src"),c=r(117),f=(""+c).split("toString");r(32).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},30:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},32:function(t,n){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},33:function(t,n,r){var e=r(20),o=r(107),i=r(108),u=Object.defineProperty;n.f=r(22)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},35:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},37:function(t,n,r){var e=r(58),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},40:function(t,n,r){var e=r(57),o=r(27);t.exports=function(t){return e(o(t))}},45:function(t,n,r){"use strict";var e=r(10),o=r(30),i=r(18),u=r(13),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(void 0)})||!u(function(){f.sort(null)})||!r(17)(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),o(t))}})},46:function(t,n,r){var e=r(32),o=r(14),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(68)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},47:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},48:function(t,n,r){var e=r(40),o=r(37),i=r(118);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},50:function(t,n,r){var e=r(70),o=r(57),i=r(18),u=r(37),c=r(119);t.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p,v=n||c;return function(n,c,h){for(var d,y,x=i(n),_=o(x),m=e(c,h,3),b=u(_.length),g=0,w=r?v(n,b):f?v(n,0):void 0;b>g;g++)if((l||g in _)&&(y=m(d=_[g],g,x),t))if(r)w[g]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return g;case 2:w.push(d)}else if(s)return!1;return p?-1:a||s?s:w}}},51:function(t,n,r){"use strict";var e=r(10),o=r(48)(!1),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(17)(i)),"Array",{indexOf:function(t){return u?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},52:function(t,n,r){"use strict";var e=r(10),o=r(50)(2);e(e.P+e.F*!r(17)([].filter,!0),"Array",{filter:function(t){return o(this,t,arguments[1])}})},57:function(t,n,r){var e=r(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},58:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},64:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},68:function(t,n){t.exports=!1},69:function(t,n,r){var e=r(21),o=r(14).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},70:function(t,n,r){var e=r(30);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}}}]);