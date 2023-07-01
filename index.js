// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(t,e)||a.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=f):t[e]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,l.get),p&&i&&i.call(t,e,l.set),t};function f(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[v],i=v,e=null!=(o=t)&&s.call(o,i);try{t[v]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[v]=r:delete t[v],n}:function(t){return b.call(t)},d=Number,_=d.prototype.toString,g=p();function h(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function j(t){return c(t)||h(t)}f(j,"isPrimitive",c),f(j,"isObject",h);var w=Number.POSITIVE_INFINITY,N=d.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<w&&t>N&&O(e=t)===e;var e}function T(t){return c(t)&&S(t)}function A(t){return h(t)&&S(t.valueOf())}function F(t){return T(t)||A(t)}function I(t){return T(t)&&t>0}function E(t){return A(t)&&t.valueOf()>0}function P(t){return I(t)||E(t)}function V(t){return Math.abs(t)}function k(t){return t!=t}f(F,"isPrimitive",T),f(F,"isObject",A),f(P,"isPrimitive",I),f(P,"isObject",E);var x="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0,C=function(){var t,e,r;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,NaN]),r=e,t=(x&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?M:function(){throw new Error("not implemented")};return function(t){var e;if(!I(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0eU8T",t));return e=function(t){var e,r,n,o;if(!I(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return e=new C(t),r=0,o=-1,n=0,function(i){var u;if(0===arguments.length)return 0===n?null:r;if(o=(o+1)%t,k(i))n=t,r=NaN;else if(n<t)n+=1,r+=i;else if(k(e[o])){for(n=1,r=i,u=0;u<t;u++)if(u!==o){if(k(e[u])){n=t,r=NaN;break}n+=1,r+=e[u]}}else!1===k(r)&&(r+=i-e[o]);return e[o]=i,r}}(t),function(t){return 0===arguments.length?e():e(V(t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmsumabs=e();
//# sourceMappingURL=index.js.map