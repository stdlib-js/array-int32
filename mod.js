// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,y,f,l;if(null==t)return r.call(t);a=t[e],l=e,o=null!=(f=t)&&n.call(f,l);try{t[e]=void 0}catch(n){return r.call(t)}return y=r.call(t),o?t[e]=a:delete t[e],y}:function(t){return r.call(t)},y="function"==typeof Int32Array;var f="function"==typeof Int32Array?Int32Array:null;var l="function"==typeof Int32Array?Int32Array:void 0;var c=function(){var t,r,n;if("function"!=typeof f)return!1;try{r=new f([1,3.14,-3.14,2147483648]),n=r,t=(y&&n instanceof Int32Array||"[object Int32Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t}()?l:function(){throw new Error(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("00z00"))};export{c as default};
//# sourceMappingURL=mod.js.map
