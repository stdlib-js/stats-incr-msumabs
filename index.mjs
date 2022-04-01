// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msum@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=t.isPrimitive,n=s,m=e,d=i;var o=function(t){var s;if(!r(t))throw new TypeError(d("invalid argument. Must provide a positive integer. Value: `%s`.",t));return s=m(t),function(t){if(0===arguments.length)return s();return s(n(t))}};export{o as default};
//# sourceMappingURL=index.mjs.map
