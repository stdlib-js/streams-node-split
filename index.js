// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).splitStream=r(e.require$$0$3,e.require$$0$1,e.require$$0$2)}(this,(function(e,r,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(o):a(o)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function l(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function O(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,y,"$1."),t=d.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var S=String.fromCharCode,E=Array.isArray;function x(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function M(e){var r,t,n,o,i,a,c,f,s,p,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(i)?String(n.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+_(h):_(h)+p)),a+=n.arg||"",c+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,o;for(t=[],o=0,n=k.exec(e);n;)(r=e.slice(o,k.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),o=k.lastIndex,n=k.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return M.apply(null,r)}var R,A=Object.prototype,F=A.toString,$=A.__defineGetter__,C=A.__defineSetter__,N=A.__lookupGetter__,W=A.__lookupSetter__;R=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(N.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var B=R;function H(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var q=/./;function G(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&Y.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var K=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[D],r=J(e,D);try{e[D]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[D]=t:delete e[D],n}:function(e){return U.call(e)},Q=Boolean,ee=Boolean.prototype.toString;var re=Z();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ne(e){return G(e)||te(e)}H(ne,"isPrimitive",G),H(ne,"isObject",te);var oe="object"==typeof self?self:null,ie="object"==typeof window?window:null,ae="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!G(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ue)return ue;if(oe)return oe;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ce.document&&ce.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;H(se,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function de(e){return null!==e&&"object"==typeof e}function he(e){return de(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function be(e){var r,t,n;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return he(e)?"Buffer":t}H(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var ye="function"==typeof q||"object"==typeof le||"function"==typeof fe?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?be(e).toLowerCase():r};function ve(e){return"function"===ye(e)}var we=ve(Object.assign),me=Object.assign;function je(e){return Object.keys(Object(e))}var Oe,_e=void 0!==Object.keys;function Se(e){return"[object Arguments]"===K(e)}Oe=function(){return Se(arguments)}();var Ee=Oe;function xe(e){return"string"==typeof e}var Te=String.prototype.valueOf;var Me=Z();function ke(e){return"object"==typeof e&&(e instanceof String||(Me?function(e){try{return Te.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function Ie(e){return xe(e)||ke(e)}function Pe(e){return"number"==typeof e}H(Ie,"isPrimitive",xe),H(Ie,"isObject",ke);var Ve=Number,Re=Ve.prototype.toString;var Ae=Z();function Fe(e){return"object"==typeof e&&(e instanceof Ve||(Ae?function(e){try{return Re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function $e(e){return Pe(e)||Fe(e)}function Ce(e){return e!=e}function Ne(e){return Pe(e)&&Ce(e)}function We(e){return Fe(e)&&Ce(e.valueOf())}function Be(e){return Ne(e)||We(e)}H($e,"isPrimitive",Pe),H($e,"isObject",Fe),H(Be,"isPrimitive",Ne),H(Be,"isObject",We);var He=Number.POSITIVE_INFINITY,Le=Ve.NEGATIVE_INFINITY,qe=Math.floor;function Ge(e){return qe(e)===e}function Xe(e){return e<He&&e>Le&&Ge(e)}function Ze(e){return Pe(e)&&Xe(e)}function Ue(e){return Fe(e)&&Xe(e.valueOf())}function Ye(e){return Ze(e)||Ue(e)}H(Ye,"isPrimitive",Ze),H(Ye,"isObject",Ue);var Je=Object.prototype.propertyIsEnumerable;var ze=!Je.call("beep","0");function De(e,r){var t;return null!=e&&(!(t=Je.call(e,r))&&ze&&Ie(e)?!Ne(r=+r)&&Ze(r)&&r>=0&&r<e.length:t)}var Ke=Ee?Se:function(e){return null!==e&&"object"==typeof e&&!ge(e)&&"number"==typeof e.length&&Ge(e.length)&&e.length>=0&&e.length<=4294967295&&J(e,"callee")&&!De(e,"callee")},Qe=Array.prototype.slice;var er=De((function(){}),"prototype"),rr=!De({toString:null},"toString"),tr=9007199254740991;function nr(e,r,t){var n,o,i;if(!(i=e,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Ge(i.length)&&i.length>=0&&i.length<=tr||xe(e)))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ze(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Be(r)){for(;o<n;o++)if(Be(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function or(e){return e.constructor&&e.constructor.prototype===e}var ir=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ar="undefined"==typeof window?void 0:window;var ur=function(){var e;if("undefined"===ye(ar))return!1;for(e in ar)try{-1===nr(ir,e)&&J(ar,e)&&null!==ar[e]&&"object"===ye(ar[e])&&or(ar[e])}catch(e){return!0}return!1}(),cr="undefined"!=typeof window;var fr,lr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];fr=_e?function(){return 2!==(je(arguments)||"").length}(1,2)?function(e){return Ke(e)?je(Qe.call(e)):je(e)}:je:function(e){var r,t,n,o,i,a,u;if(o=[],Ke(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!J(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!de(e))return o;t=er&&n}for(i in e)t&&"prototype"===i||!J(e,i)||o.push(String(i));if(rr)for(r=function(e){if(!1===cr&&!ur)return or(e);try{return or(e)}catch(e){return!1}}(e),u=0;u<lr.length;u++)a=lr[u],r&&"constructor"===a||!J(e,a)||o.push(String(a));return o};var sr=fr,pr=void 0!==Object.getOwnPropertySymbols,gr=Object,dr=gr.getOwnPropertySymbols;var hr,br=pr?function(e){return dr(gr(e))}:function(){return[]};function yr(e){var r,t,n;for(r=sr(e),t=br(e),n=0;n<t.length;n++)De(e,t[n])&&r.push(t[n]);return r}hr=we?me:function(e){var r,t,n,o,i,a,u;if(null==e)throw new TypeError(V("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(i=gr(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(o=(t=yr(gr(r))).length,u=0;u<o;u++)i[n=t[u]]=r[n];return i};var vr=hr;function wr(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError(V("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",e)):null}var mr=Object.create;function jr(){}var Or="function"==typeof mr?mr:function(e){return jr.prototype=e,new jr};function _r(e,r,t){B(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Sr="function"==typeof Buffer?Buffer:null;var Er,xr=r.Buffer;Er=function(){var e,r;if("function"!=typeof Sr)return!1;try{e=he(r="function"==typeof Sr.from?Sr.from([1,2,3,4]):new Sr([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?xr:function(){throw new Error("not implemented")};var Tr=Er,Mr=t;var kr={objectMode:!1,encoding:null,allowHalfOpen:!1,writableObjectMode:!1,sep:null};var Ir,Pr=Object.getPrototypeOf;Ir=ve(Object.getPrototypeOf)?Pr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===K(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Vr=Ir;var Rr=Object.prototype;function Ar(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(r=function(e){return null==e?null:(e=gr(e),Vr(e))}(e),!r||!J(e,"constructor")&&J(r,"constructor")&&ve(r.constructor)&&"[object Function]"===K(r.constructor)&&J(r,"isPrototypeOf")&&ve(r.isPrototypeOf)&&(r===Rr||function(e){var r;for(r in e)if(!J(e,r))return!1;return!0}(e)))}function Fr(e){return Pe(e)&&e>=0}function $r(e){return Fe(e)&&e.valueOf()>=0}function Cr(e){return Fr(e)||$r(e)}H(Cr,"isPrimitive",Fr),H(Cr,"isObject",$r);var Nr=RegExp.prototype.exec;var Wr=Z();function Br(e){return"object"==typeof e&&(e instanceof RegExp||(Wr?function(e){try{return Nr.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===K(e)))}function Hr(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var Lr,qr=L(Object.freeze({__proto__:null,default:()=>()=>{}}))("split-stream");Lr=ve(Tr.from)?function(e,r){if(!xe(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!xe(r))throw new TypeError(V("invalid argument. Second argument must be a string. Value: `%s`.",r));return Tr.from(e,r)}return Tr.from(e,"utf8")}:function(e,r){if(!xe(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!xe(r))throw new TypeError(V("invalid argument. Second argument must be a string. Value: `%s`.",r));return new Tr(e,r)}return new Tr(e,"utf8")};var Gr=Lr;function Xr(e,r){return"utf8"===r||"buffer"===r?e:(e=Gr(e),r?e.toString(r):e.toString())}var Zr=e.Transform,Ur=/\r?\n/;function Yr(e){var r,t;if(!(this instanceof Yr))return arguments.length?new Yr(e):new Yr;if(r=vr({},kr),arguments.length&&(t=function(e,r){return Ar(r)?!J(r,"sep")||(e.sep=r.sep,xe(e.sep)||Br(e.sep))?J(r,"objectMode")&&(e.objectMode=r.objectMode,!G(e.objectMode))?new TypeError(Hr("1MR2o","objectMode",e.objectMode)):J(r,"writableObjectMode")&&(e.writableObjectMode=r.writableObjectMode,!G(e.writableObjectMode))?new TypeError(Hr("1MR2o","writableObjectMode",e.writableObjectMode)):J(r,"encoding")&&(e.encoding=r.encoding,!xe(e.encoding))?new TypeError(Hr("1MR2W","encoding",e.encoding)):J(r,"allowHalfOpen")&&(e.allowHalfOpen=r.allowHalfOpen,!G(e.allowHalfOpen))?new TypeError(Hr("1MR2o","allowHalfOpen",e.allowHalfOpen)):J(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!Fr(e.highWaterMark))?new TypeError(Hr("1MR4k","highWaterMark",e.highWaterMark)):null:new TypeError(Hr("1MRAB","sep",e.sep)):new TypeError(Hr("1MR2V",r))}(r,e),t))throw t;return r.readableObjectMode=!0,r.decodeStrings=!1,qr("Creating a transform stream configured with the following options: %s.",JSON.stringify(r)),Zr.call(this,r),H(this,"_sep",null===r.sep?Ur:r.sep),_r(this,"_destroyed",!1),H(this,"_encoding",r.encoding),_r(this,"_buffer",""),_r(this,"_idx",-1),this}return function(e,r){var t=wr(e);if(t)throw t;if(t=wr(r))throw t;if(void 0===r.prototype)throw new TypeError(V("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",r.prototype));e.prototype=Or(r.prototype),B(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(Yr,Zr),H(Yr.prototype,"_transform",(function(e,r,t){var n,o,i,a;if(this._idx+=1,qr("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",e.toString(),r,this._idx),"buffer"===r?e=e.toString():"utf8"!==r&&(e=(e=new Tr(e,r)).toString("utf8")),n=e.split(this._sep),qr("Splits: %s. Index: %d.",JSON.stringify(n),this._idx),i=n.length-1,qr("%s splits. Index: %d.",i,this._idx),0===i)qr("No splits. Index: %d.",this._idx),this._buffer+=n[i];else{for(qr("Processing splits. Index: %d.",this._index),o=Xr(o=this._buffer+n[0],r),qr("Split %d: %s. Index: %d.",0,o.toString(),this._idx),this.push(o,r),a=1;a<i;a++)o=Xr(n[a],r),qr("Split %d: %s. Index: %d.",a,o.toString(),this._idx),this.push(o,r);qr("Remaining split: %s.",n[i].toString()),this._buffer=n[i]}t()})),H(Yr.prototype,"_flush",(function(e){var r=this._buffer;r&&(qr("Processing final split..."),r=Xr(r,this._encoding),this.push(r,this._encoding)),qr("Flushing the stream..."),e()})),H(Yr.prototype,"destroy",(function(e){var r;return this._destroyed?(qr("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);Mr.nextTick((function(){e.apply(null,r)}))}((function(){e&&(qr("Stream was destroyed due to an error. Error: %s.",JSON.stringify(e)),r.emit("error",e));qr("Closing the stream..."),r.emit("close")})),this)})),H(Yr,"objectMode",(function(e){var r;if(arguments.length){if(!Ar(e))throw new TypeError(Hr("1MR2V",e));r=vr({},e)}else r={};return r.objectMode=!0,new Yr(r)})),H(Yr,"factory",(function(e){var r;if(arguments.length){if(!Ar(e))throw new TypeError(Hr("1MR2V",e));r=vr({},e)}else r={};return function(){return new Yr(r)}})),Yr}));
//# sourceMappingURL=index.js.map
