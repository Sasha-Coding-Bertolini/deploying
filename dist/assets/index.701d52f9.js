function Hw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),Gw=Symbol.for("react.portal"),Kw=Symbol.for("react.fragment"),Yw=Symbol.for("react.strict_mode"),Zw=Symbol.for("react.profiler"),Xw=Symbol.for("react.provider"),Qw=Symbol.for("react.context"),Jw=Symbol.for("react.forward_ref"),e3=Symbol.for("react.suspense"),t3=Symbol.for("react.memo"),n3=Symbol.for("react.lazy"),pm=Symbol.iterator;function r3(e){return e===null||typeof e!="object"?null:(e=pm&&e[pm]||e["@@iterator"],typeof e=="function"?e:null)}var Vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lh=Object.assign,jh={};function qo(e,t,n){this.props=e,this.context=t,this.refs=jh,this.updater=n||Vh}qo.prototype.isReactComponent={};qo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nh(){}Nh.prototype=qo.prototype;function Xd(e,t,n){this.props=e,this.context=t,this.refs=jh,this.updater=n||Vh}var Qd=Xd.prototype=new Nh;Qd.constructor=Xd;Lh(Qd,qo.prototype);Qd.isPureReactComponent=!0;var mm=Array.isArray,Bh=Object.prototype.hasOwnProperty,Jd={current:null},Oh={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Bh.call(t,r)&&!Oh.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ci,type:e,key:a,ref:i,props:o,_owner:Jd.current}}function o3(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ef(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function a3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gm=/\/+/g;function Cu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?a3(""+e.key):t.toString(36)}function is(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ci:case Gw:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Cu(i,0):r,mm(o)?(n="",e!=null&&(n=e.replace(gm,"$&/")+"/"),is(o,t,n,"",function(u){return u})):o!=null&&(ef(o)&&(o=o3(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(gm,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",mm(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Cu(a,s);i+=is(a,t,n,l,o)}else if(l=r3(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Cu(a,s++),i+=is(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Pi(e,t,n){if(e==null)return e;var r=[],o=0;return is(e,r,"","",function(a){return t.call(n,a,o++)}),r}function i3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},ss={transition:null},s3={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ss,ReactCurrentOwner:Jd};W.Children={map:Pi,forEach:function(e,t,n){Pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pi(e,function(){t++}),t},toArray:function(e){return Pi(e,function(t){return t})||[]},only:function(e){if(!ef(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=qo;W.Fragment=Kw;W.Profiler=Zw;W.PureComponent=Xd;W.StrictMode=Yw;W.Suspense=e3;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s3;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lh({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Jd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Bh.call(t,l)&&!Oh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ci,type:e.type,key:o,ref:a,props:r,_owner:i}};W.createContext=function(e){return e={$$typeof:Qw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xw,_context:e},e.Consumer=e};W.createElement=Dh;W.createFactory=function(e){var t=Dh.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Jw,render:e}};W.isValidElement=ef;W.lazy=function(e){return{$$typeof:n3,_payload:{_status:-1,_result:e},_init:i3}};W.memo=function(e,t){return{$$typeof:t3,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Je.current.useCallback(e,t)};W.useContext=function(e){return Je.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};W.useEffect=function(e,t){return Je.current.useEffect(e,t)};W.useId=function(){return Je.current.useId()};W.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Je.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};W.useRef=function(e){return Je.current.useRef(e)};W.useState=function(e){return Je.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Je.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(k);const M=Uw(k.exports),hm=Hw({__proto__:null,default:M},[k.exports]);var Ra=Boolean(globalThis==null?void 0:globalThis.document)?k.exports.useLayoutEffect:k.exports.useEffect,yl={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l3=k.exports,u3=Symbol.for("react.element"),c3=Symbol.for("react.fragment"),d3=Object.prototype.hasOwnProperty,f3=l3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p3={key:!0,ref:!0,__self:!0,__source:!0};function $h(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)d3.call(t,r)&&!p3.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:u3,type:e,key:a,ref:i,props:o,_owner:f3.current}}bl.Fragment=c3;bl.jsx=$h;bl.jsxs=$h;(function(e){e.exports=bl})(yl);const pt=yl.exports.Fragment,T=yl.exports.jsx,X=yl.exports.jsxs;var tf=k.exports.createContext({});tf.displayName="ColorModeContext";function nf(){const e=k.exports.useContext(tf);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}var qi={light:"chakra-ui-light",dark:"chakra-ui-dark"};function m3(e={}){const{preventTransition:t=!0}=e,n={setDataset:r=>{const o=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,o==null||o()},setClassName(r){document.body.classList.add(r?qi.dark:qi.light),document.body.classList.remove(r?qi.light:qi.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var a;return((a=n.query().matches)!=null?a:r==="dark")?"dark":"light"},addListener(r){const o=n.query(),a=i=>{r(i.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(a):o.addEventListener("change",a),()=>{typeof o.removeListener=="function"?o.removeListener(a):o.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var g3="chakra-ui-color-mode";function h3(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var y3=h3(g3),ym=()=>{};function bm(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function Wh(e){const{value:t,children:n,options:{useSystemColorMode:r,initialColorMode:o,disableTransitionOnChange:a}={},colorModeManager:i=y3}=e,s=o==="dark"?"dark":"light",[l,u]=k.exports.useState(()=>bm(i,s)),[c,d]=k.exports.useState(()=>bm(i)),{getSystemTheme:f,setClassName:p,setDataset:b,addListener:v}=k.exports.useMemo(()=>m3({preventTransition:a}),[a]),C=o==="system"&&!l?c:l,h=k.exports.useCallback(x=>{const F=x==="system"?f():x;u(F),p(F==="dark"),b(F),i.set(F)},[i,f,p,b]);Ra(()=>{o==="system"&&d(f())},[]),k.exports.useEffect(()=>{const x=i.get();if(x){h(x);return}if(o==="system"){h("system");return}h(s)},[i,s,o,h]);const m=k.exports.useCallback(()=>{h(C==="dark"?"light":"dark")},[C,h]);k.exports.useEffect(()=>{if(!!r)return v(h)},[r,v,h]);const g=k.exports.useMemo(()=>({colorMode:t!=null?t:C,toggleColorMode:t?ym:m,setColorMode:t?ym:h,forced:t!==void 0}),[C,m,h,t]);return T(tf.Provider,{value:g,children:n})}Wh.displayName="ColorModeProvider";var kc={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Function]",b="[object GeneratorFunction]",v="[object Map]",C="[object Number]",h="[object Null]",m="[object Object]",g="[object Proxy]",x="[object RegExp]",F="[object Set]",E="[object String]",A="[object Undefined]",q="[object WeakMap]",B="[object ArrayBuffer]",V="[object DataView]",_e="[object Float32Array]",Le="[object Float64Array]",xt="[object Int8Array]",Ht="[object Int16Array]",Ut="[object Int32Array]",xe="[object Uint8Array]",It="[object Uint8ClampedArray]",I="[object Uint16Array]",D="[object Uint32Array]",$=/[\\^$.*+?()[\]{}|]/g,he=/^\[object .+?Constructor\]$/,Te=/^(?:0|[1-9]\d*)$/,J={};J[_e]=J[Le]=J[xt]=J[Ht]=J[Ut]=J[xe]=J[It]=J[I]=J[D]=!0,J[s]=J[l]=J[B]=J[c]=J[V]=J[d]=J[f]=J[p]=J[v]=J[C]=J[m]=J[x]=J[F]=J[E]=J[q]=!1;var Gt=typeof Ei=="object"&&Ei&&Ei.Object===Object&&Ei,Bo=typeof self=="object"&&self&&self.Object===Object&&self,ut=Gt||Bo||Function("return this")(),ar=t&&!t.nodeType&&t,Oo=ar&&!0&&e&&!e.nodeType&&e,Hp=Oo&&Oo.exports===ar,du=Hp&&Gt.process,Up=function(){try{var y=Oo&&Oo.require&&Oo.require("util").types;return y||du&&du.binding&&du.binding("util")}catch{}}(),Gp=Up&&Up.isTypedArray;function I2(y,w,_){switch(_.length){case 0:return y.call(w);case 1:return y.call(w,_[0]);case 2:return y.call(w,_[0],_[1]);case 3:return y.call(w,_[0],_[1],_[2])}return y.apply(w,_)}function R2(y,w){for(var _=-1,R=Array(y);++_<y;)R[_]=w(_);return R}function z2(y){return function(w){return y(w)}}function M2(y,w){return y==null?void 0:y[w]}function V2(y,w){return function(_){return y(w(_))}}var L2=Array.prototype,j2=Function.prototype,Si=Object.prototype,fu=ut["__core-js_shared__"],xi=j2.toString,fn=Si.hasOwnProperty,Kp=function(){var y=/[^.]+$/.exec(fu&&fu.keys&&fu.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""}(),Yp=Si.toString,N2=xi.call(Object),B2=RegExp("^"+xi.call(fn).replace($,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ci=Hp?ut.Buffer:void 0,Zp=ut.Symbol,Xp=ut.Uint8Array,Qp=Ci?Ci.allocUnsafe:void 0,Jp=V2(Object.getPrototypeOf,Object),em=Object.create,O2=Si.propertyIsEnumerable,D2=L2.splice,ir=Zp?Zp.toStringTag:void 0,ki=function(){try{var y=gu(Object,"defineProperty");return y({},"",{}),y}catch{}}(),$2=Ci?Ci.isBuffer:void 0,tm=Math.max,W2=Date.now,nm=gu(ut,"Map"),Do=gu(Object,"create"),H2=function(){function y(){}return function(w){if(!lr(w))return{};if(em)return em(w);y.prototype=w;var _=new y;return y.prototype=void 0,_}}();function sr(y){var w=-1,_=y==null?0:y.length;for(this.clear();++w<_;){var R=y[w];this.set(R[0],R[1])}}function U2(){this.__data__=Do?Do(null):{},this.size=0}function G2(y){var w=this.has(y)&&delete this.__data__[y];return this.size-=w?1:0,w}function K2(y){var w=this.__data__;if(Do){var _=w[y];return _===r?void 0:_}return fn.call(w,y)?w[y]:void 0}function Y2(y){var w=this.__data__;return Do?w[y]!==void 0:fn.call(w,y)}function Z2(y,w){var _=this.__data__;return this.size+=this.has(y)?0:1,_[y]=Do&&w===void 0?r:w,this}sr.prototype.clear=U2,sr.prototype.delete=G2,sr.prototype.get=K2,sr.prototype.has=Y2,sr.prototype.set=Z2;function pn(y){var w=-1,_=y==null?0:y.length;for(this.clear();++w<_;){var R=y[w];this.set(R[0],R[1])}}function X2(){this.__data__=[],this.size=0}function Q2(y){var w=this.__data__,_=_i(w,y);if(_<0)return!1;var R=w.length-1;return _==R?w.pop():D2.call(w,_,1),--this.size,!0}function J2(y){var w=this.__data__,_=_i(w,y);return _<0?void 0:w[_][1]}function ew(y){return _i(this.__data__,y)>-1}function tw(y,w){var _=this.__data__,R=_i(_,y);return R<0?(++this.size,_.push([y,w])):_[R][1]=w,this}pn.prototype.clear=X2,pn.prototype.delete=Q2,pn.prototype.get=J2,pn.prototype.has=ew,pn.prototype.set=tw;function jr(y){var w=-1,_=y==null?0:y.length;for(this.clear();++w<_;){var R=y[w];this.set(R[0],R[1])}}function nw(){this.size=0,this.__data__={hash:new sr,map:new(nm||pn),string:new sr}}function rw(y){var w=Fi(this,y).delete(y);return this.size-=w?1:0,w}function ow(y){return Fi(this,y).get(y)}function aw(y){return Fi(this,y).has(y)}function iw(y,w){var _=Fi(this,y),R=_.size;return _.set(y,w),this.size+=_.size==R?0:1,this}jr.prototype.clear=nw,jr.prototype.delete=rw,jr.prototype.get=ow,jr.prototype.has=aw,jr.prototype.set=iw;function Nr(y){var w=this.__data__=new pn(y);this.size=w.size}function sw(){this.__data__=new pn,this.size=0}function lw(y){var w=this.__data__,_=w.delete(y);return this.size=w.size,_}function uw(y){return this.__data__.get(y)}function cw(y){return this.__data__.has(y)}function dw(y,w){var _=this.__data__;if(_ instanceof pn){var R=_.__data__;if(!nm||R.length<n-1)return R.push([y,w]),this.size=++_.size,this;_=this.__data__=new jr(R)}return _.set(y,w),this.size=_.size,this}Nr.prototype.clear=sw,Nr.prototype.delete=lw,Nr.prototype.get=uw,Nr.prototype.has=cw,Nr.prototype.set=dw;function fw(y,w){var _=bu(y),R=!_&&yu(y),U=!_&&!R&&sm(y),ae=!_&&!R&&!U&&um(y),pe=_||R||U||ae,H=pe?R2(y.length,String):[],me=H.length;for(var Ct in y)(w||fn.call(y,Ct))&&!(pe&&(Ct=="length"||U&&(Ct=="offset"||Ct=="parent")||ae&&(Ct=="buffer"||Ct=="byteLength"||Ct=="byteOffset")||am(Ct,me)))&&H.push(Ct);return H}function pu(y,w,_){(_!==void 0&&!Ai(y[w],_)||_===void 0&&!(w in y))&&mu(y,w,_)}function pw(y,w,_){var R=y[w];(!(fn.call(y,w)&&Ai(R,_))||_===void 0&&!(w in y))&&mu(y,w,_)}function _i(y,w){for(var _=y.length;_--;)if(Ai(y[_][0],w))return _;return-1}function mu(y,w,_){w=="__proto__"&&ki?ki(y,w,{configurable:!0,enumerable:!0,value:_,writable:!0}):y[w]=_}var mw=Fw();function Ti(y){return y==null?y===void 0?A:h:ir&&ir in Object(y)?Aw(y):zw(y)}function rm(y){return $o(y)&&Ti(y)==s}function gw(y){if(!lr(y)||Iw(y))return!1;var w=wu(y)?B2:he;return w.test(jw(y))}function hw(y){return $o(y)&&lm(y.length)&&!!J[Ti(y)]}function yw(y){if(!lr(y))return Rw(y);var w=im(y),_=[];for(var R in y)R=="constructor"&&(w||!fn.call(y,R))||_.push(R);return _}function om(y,w,_,R,U){y!==w&&mw(w,function(ae,pe){if(U||(U=new Nr),lr(ae))bw(y,w,pe,_,om,R,U);else{var H=R?R(hu(y,pe),ae,pe+"",y,w,U):void 0;H===void 0&&(H=ae),pu(y,pe,H)}},cm)}function bw(y,w,_,R,U,ae,pe){var H=hu(y,_),me=hu(w,_),Ct=pe.get(me);if(Ct){pu(y,_,Ct);return}var ct=ae?ae(H,me,_+"",y,w,pe):void 0,Wo=ct===void 0;if(Wo){var Su=bu(me),xu=!Su&&sm(me),fm=!Su&&!xu&&um(me);ct=me,Su||xu||fm?bu(H)?ct=H:Nw(H)?ct=kw(H):xu?(Wo=!1,ct=Sw(me,!0)):fm?(Wo=!1,ct=Cw(me,!0)):ct=[]:Bw(me)||yu(me)?(ct=H,yu(H)?ct=Ow(H):(!lr(H)||wu(H))&&(ct=Ew(me))):Wo=!1}Wo&&(pe.set(me,ct),U(ct,me,R,ae,pe),pe.delete(me)),pu(y,_,ct)}function vw(y,w){return Vw(Mw(y,w,dm),y+"")}var ww=ki?function(y,w){return ki(y,"toString",{configurable:!0,enumerable:!1,value:$w(w),writable:!0})}:dm;function Sw(y,w){if(w)return y.slice();var _=y.length,R=Qp?Qp(_):new y.constructor(_);return y.copy(R),R}function xw(y){var w=new y.constructor(y.byteLength);return new Xp(w).set(new Xp(y)),w}function Cw(y,w){var _=w?xw(y.buffer):y.buffer;return new y.constructor(_,y.byteOffset,y.length)}function kw(y,w){var _=-1,R=y.length;for(w||(w=Array(R));++_<R;)w[_]=y[_];return w}function _w(y,w,_,R){var U=!_;_||(_={});for(var ae=-1,pe=w.length;++ae<pe;){var H=w[ae],me=R?R(_[H],y[H],H,_,y):void 0;me===void 0&&(me=y[H]),U?mu(_,H,me):pw(_,H,me)}return _}function Tw(y){return vw(function(w,_){var R=-1,U=_.length,ae=U>1?_[U-1]:void 0,pe=U>2?_[2]:void 0;for(ae=y.length>3&&typeof ae=="function"?(U--,ae):void 0,pe&&Pw(_[0],_[1],pe)&&(ae=U<3?void 0:ae,U=1),w=Object(w);++R<U;){var H=_[R];H&&y(w,H,R,ae)}return w})}function Fw(y){return function(w,_,R){for(var U=-1,ae=Object(w),pe=R(w),H=pe.length;H--;){var me=pe[y?H:++U];if(_(ae[me],me,ae)===!1)break}return w}}function Fi(y,w){var _=y.__data__;return qw(w)?_[typeof w=="string"?"string":"hash"]:_.map}function gu(y,w){var _=M2(y,w);return gw(_)?_:void 0}function Aw(y){var w=fn.call(y,ir),_=y[ir];try{y[ir]=void 0;var R=!0}catch{}var U=Yp.call(y);return R&&(w?y[ir]=_:delete y[ir]),U}function Ew(y){return typeof y.constructor=="function"&&!im(y)?H2(Jp(y)):{}}function am(y,w){var _=typeof y;return w=w==null?i:w,!!w&&(_=="number"||_!="symbol"&&Te.test(y))&&y>-1&&y%1==0&&y<w}function Pw(y,w,_){if(!lr(_))return!1;var R=typeof w;return(R=="number"?vu(_)&&am(w,_.length):R=="string"&&w in _)?Ai(_[w],y):!1}function qw(y){var w=typeof y;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?y!=="__proto__":y===null}function Iw(y){return!!Kp&&Kp in y}function im(y){var w=y&&y.constructor,_=typeof w=="function"&&w.prototype||Si;return y===_}function Rw(y){var w=[];if(y!=null)for(var _ in Object(y))w.push(_);return w}function zw(y){return Yp.call(y)}function Mw(y,w,_){return w=tm(w===void 0?y.length-1:w,0),function(){for(var R=arguments,U=-1,ae=tm(R.length-w,0),pe=Array(ae);++U<ae;)pe[U]=R[w+U];U=-1;for(var H=Array(w+1);++U<w;)H[U]=R[U];return H[w]=_(pe),I2(y,this,H)}}function hu(y,w){if(!(w==="constructor"&&typeof y[w]=="function")&&w!="__proto__")return y[w]}var Vw=Lw(ww);function Lw(y){var w=0,_=0;return function(){var R=W2(),U=a-(R-_);if(_=R,U>0){if(++w>=o)return arguments[0]}else w=0;return y.apply(void 0,arguments)}}function jw(y){if(y!=null){try{return xi.call(y)}catch{}try{return y+""}catch{}}return""}function Ai(y,w){return y===w||y!==y&&w!==w}var yu=rm(function(){return arguments}())?rm:function(y){return $o(y)&&fn.call(y,"callee")&&!O2.call(y,"callee")},bu=Array.isArray;function vu(y){return y!=null&&lm(y.length)&&!wu(y)}function Nw(y){return $o(y)&&vu(y)}var sm=$2||Ww;function wu(y){if(!lr(y))return!1;var w=Ti(y);return w==p||w==b||w==u||w==g}function lm(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=i}function lr(y){var w=typeof y;return y!=null&&(w=="object"||w=="function")}function $o(y){return y!=null&&typeof y=="object"}function Bw(y){if(!$o(y)||Ti(y)!=m)return!1;var w=Jp(y);if(w===null)return!0;var _=fn.call(w,"constructor")&&w.constructor;return typeof _=="function"&&_ instanceof _&&xi.call(_)==N2}var um=Gp?z2(Gp):hw;function Ow(y){return _w(y,cm(y))}function cm(y){return vu(y)?fw(y,!0):yw(y)}var Dw=Tw(function(y,w,_,R){om(y,w,_,R)});function $w(y){return function(){return y}}function dm(y){return y}function Ww(){return!1}e.exports=Dw})(kc,kc.exports);const nn=kc.exports;function Ot(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function hr(e,...t){return b3(e)?e(...t):e}var b3=e=>typeof e=="function",v3=e=>/!(important)?$/.test(e),vm=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,_c=(e,t)=>n=>{const r=String(t),o=v3(r),a=vm(r),i=e?`${e}.${a}`:a;let s=Ot(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=vm(s),o?`${s} !important`:s};function za(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=_c(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}var Ii=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Rt(e,t){return n=>{const r={property:n,scale:e};return r.transform=za({scale:e,transform:t}),r}}var w3=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function S3(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:w3(t),transform:n?za({scale:n,compose:r}):r}}var Hh=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function x3(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...Hh].join(" ")}function C3(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...Hh].join(" ")}var k3={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},_3={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function T3(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var F3={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},Uh="& > :not(style) ~ :not(style)",A3={[Uh]:{marginInlineStart:"calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",marginInlineEnd:"calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"}},E3={[Uh]:{marginTop:"calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",marginBottom:"calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"}},Tc={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},P3=new Set(Object.values(Tc)),Gh=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),q3=e=>e.trim();function I3(e,t){var d;var n;if(e==null||Gh.has(e))return e;const r=/(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,{type:o,values:a}=(d=(n=r.exec(e))==null?void 0:n.groups)!=null?d:{};if(!o||!a)return e;const i=o.includes("-gradient")?o:`${o}-gradient`,[s,...l]=a.split(",").map(q3).filter(Boolean);if((l==null?void 0:l.length)===0)return e;const u=s in Tc?Tc[s]:s;l.unshift(u);const c=l.map(f=>{if(P3.has(f))return f;const p=f.indexOf(" "),[b,v]=p!==-1?[f.substr(0,p),f.substr(p+1)]:[f],C=Kh(v)?v:v&&v.split(" "),h=`colors.${b}`,m=h in t.__cssMap?t.__cssMap[h].varRef:b;return C?[m,...Array.isArray(C)?C:[C]].join(" "):m});return`${i}(${c.join(", ")})`}var Kh=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),R3=(e,t)=>I3(e,t!=null?t:{});function z3(e){return/^var\(--.+\)$/.test(e)}var M3=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},Kt=e=>t=>`${e}(${t})`,G={filter(e){return e!=="auto"?e:k3},backdropFilter(e){return e!=="auto"?e:_3},ring(e){return T3(G.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?x3():e==="auto-gpu"?C3():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=M3(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(z3(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:R3,blur:Kt("blur"),opacity:Kt("opacity"),brightness:Kt("brightness"),contrast:Kt("contrast"),dropShadow:Kt("drop-shadow"),grayscale:Kt("grayscale"),hueRotate:Kt("hue-rotate"),invert:Kt("invert"),saturate:Kt("saturate"),sepia:Kt("sepia"),bgImage(e){return e==null||Kh(e)||Gh.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=F3[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},S={borderWidths:Rt("borderWidths"),borderStyles:Rt("borderStyles"),colors:Rt("colors"),borders:Rt("borders"),radii:Rt("radii",G.px),space:Rt("space",Ii(G.vh,G.px)),spaceT:Rt("space",Ii(G.vh,G.px)),degreeT(e){return{property:e,transform:G.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:za({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Rt("sizes",Ii(G.vh,G.px)),sizesT:Rt("sizes",Ii(G.vh,G.fraction)),shadows:Rt("shadows"),logical:S3,blur:Rt("blur",G.blur)},ls={background:S.colors("background"),backgroundColor:S.colors("backgroundColor"),backgroundImage:S.propT("backgroundImage",G.bgImage),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:G.bgClip},bgSize:S.prop("backgroundSize"),bgPosition:S.prop("backgroundPosition"),bg:S.colors("background"),bgColor:S.colors("backgroundColor"),bgPos:S.prop("backgroundPosition"),bgRepeat:S.prop("backgroundRepeat"),bgAttachment:S.prop("backgroundAttachment"),bgGradient:S.propT("backgroundImage",G.gradient),bgClip:{transform:G.bgClip}};Object.assign(ls,{bgImage:ls.backgroundImage,bgImg:ls.backgroundImage});var Y={border:S.borders("border"),borderWidth:S.borderWidths("borderWidth"),borderStyle:S.borderStyles("borderStyle"),borderColor:S.colors("borderColor"),borderRadius:S.radii("borderRadius"),borderTop:S.borders("borderTop"),borderBlockStart:S.borders("borderBlockStart"),borderTopLeftRadius:S.radii("borderTopLeftRadius"),borderStartStartRadius:S.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:S.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:S.radii("borderTopRightRadius"),borderStartEndRadius:S.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:S.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:S.borders("borderRight"),borderInlineEnd:S.borders("borderInlineEnd"),borderBottom:S.borders("borderBottom"),borderBlockEnd:S.borders("borderBlockEnd"),borderBottomLeftRadius:S.radii("borderBottomLeftRadius"),borderBottomRightRadius:S.radii("borderBottomRightRadius"),borderLeft:S.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:S.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:S.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:S.borders(["borderLeft","borderRight"]),borderInline:S.borders("borderInline"),borderY:S.borders(["borderTop","borderBottom"]),borderBlock:S.borders("borderBlock"),borderTopWidth:S.borderWidths("borderTopWidth"),borderBlockStartWidth:S.borderWidths("borderBlockStartWidth"),borderTopColor:S.colors("borderTopColor"),borderBlockStartColor:S.colors("borderBlockStartColor"),borderTopStyle:S.borderStyles("borderTopStyle"),borderBlockStartStyle:S.borderStyles("borderBlockStartStyle"),borderBottomWidth:S.borderWidths("borderBottomWidth"),borderBlockEndWidth:S.borderWidths("borderBlockEndWidth"),borderBottomColor:S.colors("borderBottomColor"),borderBlockEndColor:S.colors("borderBlockEndColor"),borderBottomStyle:S.borderStyles("borderBottomStyle"),borderBlockEndStyle:S.borderStyles("borderBlockEndStyle"),borderLeftWidth:S.borderWidths("borderLeftWidth"),borderInlineStartWidth:S.borderWidths("borderInlineStartWidth"),borderLeftColor:S.colors("borderLeftColor"),borderInlineStartColor:S.colors("borderInlineStartColor"),borderLeftStyle:S.borderStyles("borderLeftStyle"),borderInlineStartStyle:S.borderStyles("borderInlineStartStyle"),borderRightWidth:S.borderWidths("borderRightWidth"),borderInlineEndWidth:S.borderWidths("borderInlineEndWidth"),borderRightColor:S.colors("borderRightColor"),borderInlineEndColor:S.colors("borderInlineEndColor"),borderRightStyle:S.borderStyles("borderRightStyle"),borderInlineEndStyle:S.borderStyles("borderInlineEndStyle"),borderTopRadius:S.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:S.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:S.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:S.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(Y,{rounded:Y.borderRadius,roundedTop:Y.borderTopRadius,roundedTopLeft:Y.borderTopLeftRadius,roundedTopRight:Y.borderTopRightRadius,roundedTopStart:Y.borderStartStartRadius,roundedTopEnd:Y.borderStartEndRadius,roundedBottom:Y.borderBottomRadius,roundedBottomLeft:Y.borderBottomLeftRadius,roundedBottomRight:Y.borderBottomRightRadius,roundedBottomStart:Y.borderEndStartRadius,roundedBottomEnd:Y.borderEndEndRadius,roundedLeft:Y.borderLeftRadius,roundedRight:Y.borderRightRadius,roundedStart:Y.borderInlineStartRadius,roundedEnd:Y.borderInlineEndRadius,borderStart:Y.borderInlineStart,borderEnd:Y.borderInlineEnd,borderTopStartRadius:Y.borderStartStartRadius,borderTopEndRadius:Y.borderStartEndRadius,borderBottomStartRadius:Y.borderEndStartRadius,borderBottomEndRadius:Y.borderEndEndRadius,borderStartRadius:Y.borderInlineStartRadius,borderEndRadius:Y.borderInlineEndRadius,borderStartWidth:Y.borderInlineStartWidth,borderEndWidth:Y.borderInlineEndWidth,borderStartColor:Y.borderInlineStartColor,borderEndColor:Y.borderInlineEndColor,borderStartStyle:Y.borderInlineStartStyle,borderEndStyle:Y.borderInlineEndStyle});var V3={color:S.colors("color"),textColor:S.colors("color"),fill:S.colors("fill"),stroke:S.colors("stroke")},Fc={boxShadow:S.shadows("boxShadow"),mixBlendMode:!0,blendMode:S.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:S.prop("backgroundBlendMode"),opacity:!0};Object.assign(Fc,{shadow:Fc.boxShadow});var L3={filter:{transform:G.filter},blur:S.blur("--chakra-blur"),brightness:S.propT("--chakra-brightness",G.brightness),contrast:S.propT("--chakra-contrast",G.contrast),hueRotate:S.degreeT("--chakra-hue-rotate"),invert:S.propT("--chakra-invert",G.invert),saturate:S.propT("--chakra-saturate",G.saturate),dropShadow:S.propT("--chakra-drop-shadow",G.dropShadow),backdropFilter:{transform:G.backdropFilter},backdropBlur:S.blur("--chakra-backdrop-blur"),backdropBrightness:S.propT("--chakra-backdrop-brightness",G.brightness),backdropContrast:S.propT("--chakra-backdrop-contrast",G.contrast),backdropHueRotate:S.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:S.propT("--chakra-backdrop-invert",G.invert),backdropSaturate:S.propT("--chakra-backdrop-saturate",G.saturate)},Fs={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:G.flexDirection},experimental_spaceX:{static:A3,transform:za({scale:"space",transform:e=>e!==null?{"--chakra-space-x":e}:null})},experimental_spaceY:{static:E3,transform:za({scale:"space",transform:e=>e!=null?{"--chakra-space-y":e}:null})},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:S.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:S.space("gap"),rowGap:S.space("rowGap"),columnGap:S.space("columnGap")};Object.assign(Fs,{flexDir:Fs.flexDirection});var Yh={gridGap:S.space("gridGap"),gridColumnGap:S.space("gridColumnGap"),gridRowGap:S.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},j3={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:G.outline},outlineOffset:!0,outlineColor:S.colors("outlineColor")},kt={width:S.sizesT("width"),inlineSize:S.sizesT("inlineSize"),height:S.sizes("height"),blockSize:S.sizes("blockSize"),boxSize:S.sizes(["width","height"]),minWidth:S.sizes("minWidth"),minInlineSize:S.sizes("minInlineSize"),minHeight:S.sizes("minHeight"),minBlockSize:S.sizes("minBlockSize"),maxWidth:S.sizes("maxWidth"),maxInlineSize:S.sizes("maxInlineSize"),maxHeight:S.sizes("maxHeight"),maxBlockSize:S.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:S.propT("float",G.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(kt,{w:kt.width,h:kt.height,minW:kt.minWidth,maxW:kt.maxWidth,minH:kt.minHeight,maxH:kt.maxHeight,overscroll:kt.overscrollBehavior,overscrollX:kt.overscrollBehaviorX,overscrollY:kt.overscrollBehaviorY});var N3={listStyleType:!0,listStylePosition:!0,listStylePos:S.prop("listStylePosition"),listStyleImage:!0,listStyleImg:S.prop("listStyleImage")};function B3(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var O3=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},D3=O3(B3),$3={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},W3={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},ku=(e,t,n)=>{const r={},o=D3(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},H3={srOnly:{transform(e){return e===!0?$3:e==="focusable"?W3:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>ku(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>ku(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>ku(t,e,n)}},da={position:!0,pos:S.prop("position"),zIndex:S.prop("zIndex","zIndices"),inset:S.spaceT("inset"),insetX:S.spaceT(["left","right"]),insetInline:S.spaceT("insetInline"),insetY:S.spaceT(["top","bottom"]),insetBlock:S.spaceT("insetBlock"),top:S.spaceT("top"),insetBlockStart:S.spaceT("insetBlockStart"),bottom:S.spaceT("bottom"),insetBlockEnd:S.spaceT("insetBlockEnd"),left:S.spaceT("left"),insetInlineStart:S.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:S.spaceT("right"),insetInlineEnd:S.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(da,{insetStart:da.insetInlineStart,insetEnd:da.insetInlineEnd});var U3={ring:{transform:G.ring},ringColor:S.colors("--chakra-ring-color"),ringOffset:S.prop("--chakra-ring-offset-width"),ringOffsetColor:S.colors("--chakra-ring-offset-color"),ringInset:S.prop("--chakra-ring-inset")},ce={margin:S.spaceT("margin"),marginTop:S.spaceT("marginTop"),marginBlockStart:S.spaceT("marginBlockStart"),marginRight:S.spaceT("marginRight"),marginInlineEnd:S.spaceT("marginInlineEnd"),marginBottom:S.spaceT("marginBottom"),marginBlockEnd:S.spaceT("marginBlockEnd"),marginLeft:S.spaceT("marginLeft"),marginInlineStart:S.spaceT("marginInlineStart"),marginX:S.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:S.spaceT("marginInline"),marginY:S.spaceT(["marginTop","marginBottom"]),marginBlock:S.spaceT("marginBlock"),padding:S.space("padding"),paddingTop:S.space("paddingTop"),paddingBlockStart:S.space("paddingBlockStart"),paddingRight:S.space("paddingRight"),paddingBottom:S.space("paddingBottom"),paddingBlockEnd:S.space("paddingBlockEnd"),paddingLeft:S.space("paddingLeft"),paddingInlineStart:S.space("paddingInlineStart"),paddingInlineEnd:S.space("paddingInlineEnd"),paddingX:S.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:S.space("paddingInline"),paddingY:S.space(["paddingTop","paddingBottom"]),paddingBlock:S.space("paddingBlock")};Object.assign(ce,{m:ce.margin,mt:ce.marginTop,mr:ce.marginRight,me:ce.marginInlineEnd,marginEnd:ce.marginInlineEnd,mb:ce.marginBottom,ml:ce.marginLeft,ms:ce.marginInlineStart,marginStart:ce.marginInlineStart,mx:ce.marginX,my:ce.marginY,p:ce.padding,pt:ce.paddingTop,py:ce.paddingY,px:ce.paddingX,pb:ce.paddingBottom,pl:ce.paddingLeft,ps:ce.paddingInlineStart,paddingStart:ce.paddingInlineStart,pr:ce.paddingRight,pe:ce.paddingInlineEnd,paddingEnd:ce.paddingInlineEnd});var G3={textDecorationColor:S.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:S.shadows("textShadow")},K3={clipPath:!0,transform:S.propT("transform",G.transform),transformOrigin:!0,translateX:S.spaceT("--chakra-translate-x"),translateY:S.spaceT("--chakra-translate-y"),skewX:S.degreeT("--chakra-skew-x"),skewY:S.degreeT("--chakra-skew-y"),scaleX:S.prop("--chakra-scale-x"),scaleY:S.prop("--chakra-scale-y"),scale:S.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:S.degreeT("--chakra-rotate")},Y3={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:S.prop("transitionDuration","transition.duration"),transitionProperty:S.prop("transitionProperty","transition.property"),transitionTimingFunction:S.prop("transitionTimingFunction","transition.easing")},Z3={fontFamily:S.prop("fontFamily","fonts"),fontSize:S.prop("fontSize","fontSizes",G.px),fontWeight:S.prop("fontWeight","fontWeights"),lineHeight:S.prop("lineHeight","lineHeights"),letterSpacing:S.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},X3={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:S.spaceT("scrollMargin"),scrollMarginTop:S.spaceT("scrollMarginTop"),scrollMarginBottom:S.spaceT("scrollMarginBottom"),scrollMarginLeft:S.spaceT("scrollMarginLeft"),scrollMarginRight:S.spaceT("scrollMarginRight"),scrollMarginX:S.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:S.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:S.spaceT("scrollPadding"),scrollPaddingTop:S.spaceT("scrollPaddingTop"),scrollPaddingBottom:S.spaceT("scrollPaddingBottom"),scrollPaddingLeft:S.spaceT("scrollPaddingLeft"),scrollPaddingRight:S.spaceT("scrollPaddingRight"),scrollPaddingX:S.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:S.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function Zh(e){return Ot(e)&&e.reference?e.reference:String(e)}var vl=(e,...t)=>t.map(Zh).join(` ${e} `).replace(/calc/g,""),wm=(...e)=>`calc(${vl("+",...e)})`,Sm=(...e)=>`calc(${vl("-",...e)})`,Ac=(...e)=>`calc(${vl("*",...e)})`,xm=(...e)=>`calc(${vl("/",...e)})`,Cm=e=>{const t=Zh(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Ac(t,-1)},mr=Object.assign(e=>({add:(...t)=>mr(wm(e,...t)),subtract:(...t)=>mr(Sm(e,...t)),multiply:(...t)=>mr(Ac(e,...t)),divide:(...t)=>mr(xm(e,...t)),negate:()=>mr(Cm(e)),toString:()=>e.toString()}),{add:wm,subtract:Sm,multiply:Ac,divide:xm,negate:Cm});function Q3(e,t="-"){return e.replace(/\s+/g,t)}function J3(e){const t=Q3(e.toString());return t5(e5(t))}function e5(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function t5(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function n5(e,t=""){return[t,e].filter(Boolean).join("-")}function r5(e,t){return`var(${e}${t?`, ${t}`:""})`}function o5(e,t=""){return J3(`--${n5(e,t)}`)}function oe(e,t,n){const r=o5(e,n);return{variable:r,reference:r5(r,t)}}function a5(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function i5(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function Ec(e){if(e==null)return e;const{unitless:t}=i5(e);return t||typeof e=="number"?`${e}px`:e}var Xh=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,rf=e=>Object.fromEntries(Object.entries(e).sort(Xh));function km(e){const t=rf(e);return Object.assign(Object.values(t),t)}function s5(e){const t=Object.keys(rf(e));return new Set(t)}function _m(e){var n;if(!e)return e;e=(n=Ec(e))!=null?n:e;const t=e.endsWith("px")?-1:-.0625;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function oa(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${Ec(e)})`),t&&n.push("and",`(max-width: ${Ec(t)})`),n.join(" ")}function l5(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=km(e),n=Object.entries(e).sort(Xh).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?_m(c):void 0,{_minW:_m(s),breakpoint:i,minW:s,maxW:c,maxWQuery:oa(null,c),minWQuery:oa(s),minMaxQuery:oa(s,c)}}),r=s5(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:rf(e),asArray:km(e),details:n,media:[null,...t.map(i=>oa(i)).slice(1)],toArrayValue(i){if(!Ot(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;a5(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}var je={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},Pn=e=>Qh(t=>e(t,"&"),"[role=group]","[data-group]",".group"),mn=e=>Qh(t=>e(t,"~ &"),"[data-peer]",".peer"),Qh=(e,...t)=>t.map(e).join(", "),wl={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:Pn(je.hover),_peerHover:mn(je.hover),_groupFocus:Pn(je.focus),_peerFocus:mn(je.focus),_groupFocusVisible:Pn(je.focusVisible),_peerFocusVisible:mn(je.focusVisible),_groupActive:Pn(je.active),_peerActive:mn(je.active),_groupDisabled:Pn(je.disabled),_peerDisabled:mn(je.disabled),_groupInvalid:Pn(je.invalid),_peerInvalid:mn(je.invalid),_groupChecked:Pn(je.checked),_peerChecked:mn(je.checked),_groupFocusWithin:Pn(je.focusWithin),_peerFocusWithin:mn(je.focusWithin),_peerPlaceholderShown:mn(je.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"},u5=Object.keys(wl);function Tm(e,t){return oe(String(e).replace(/\./g,"-"),void 0,t)}function c5(e,t){let n={};const r={};for(const[o,a]of Object.entries(e)){const{isSemantic:i,value:s}=a,{variable:l,reference:u}=Tm(o,t==null?void 0:t.cssVarPrefix);if(!i){if(o.startsWith("space")){const f=o.split("."),[p,...b]=f,v=`${p}.-${b.join(".")}`,C=mr.negate(s),h=mr.negate(u);r[v]={value:C,var:l,varRef:h}}n[l]=s,r[o]={value:s,var:l,varRef:u};continue}const c=f=>{const b=[String(o).split(".")[0],f].join(".");if(!e[b])return f;const{reference:C}=Tm(b,t==null?void 0:t.cssVarPrefix);return C},d=Ot(s)?s:{default:s};n=nn(n,Object.entries(d).reduce((f,[p,b])=>{var m;var v;const C=c(b);if(p==="default")return f[l]=C,f;const h=(m=(v=wl)==null?void 0:v[p])!=null?m:p;return f[h]={[l]:C},f},{})),r[o]={value:u,var:l,varRef:u}}return{cssVars:n,cssMap:r}}function d5(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function f5(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var p5=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur"];function m5(e){return f5(e,p5)}function g5(e){return e.semanticTokens}function h5(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function y5({tokens:e,semanticTokens:t}){var o,a;const n=Object.entries((o=Pc(e))!=null?o:{}).map(([i,s])=>[i,{isSemantic:!1,value:s}]),r=Object.entries((a=Pc(t,1))!=null?a:{}).map(([i,s])=>[i,{isSemantic:!0,value:s}]);return Object.fromEntries([...n,...r])}function Pc(e,t=1/0){return!Ot(e)&&!Array.isArray(e)||!t?e:Object.entries(e).reduce((n,[r,o])=>(Ot(o)||Array.isArray(o)?Object.entries(Pc(o,t-1)).forEach(([a,i])=>{n[`${r}.${a}`]=i}):n[r]=o,n),{})}function b5(e){var t;const n=h5(e),r=m5(n),o=g5(n),a=y5({tokens:r,semanticTokens:o}),i=(t=n.config)==null?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=c5(a,{cssVarPrefix:i});return Object.assign(n,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:s,__breakpoints:l5(n.breakpoints)}),n}var of=nn({},ls,Y,V3,Fs,kt,L3,U3,j3,Yh,H3,da,Fc,ce,X3,Z3,G3,K3,N3,Y3);Object.assign({},ce,kt,Fs,Yh,da);var v5=[...Object.keys(of),...u5],w5={...of,...wl},S5=e=>e in w5,x5=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=hr(e[i],t);if(s==null)continue;if(s=Ot(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function C5(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function k5(e){return/^var\(--.+\)$/.test(e)}var _5=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!k5(t),T5=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=C5(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function F5(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var d,f;var s;const l=hr(a,r),u=x5(l)(r);let c={};for(let p in u){const b=u[p];let v=hr(b,r);p in n&&(p=n[p]),_5(p,v)&&(v=T5(r,v));let C=t[p];if(C===!0&&(C={property:p}),Ot(v)){c[p]=(d=c[p])!=null?d:{},c[p]=nn({},c[p],o(v,!0));continue}let h=(f=(s=C==null?void 0:C.transform)==null?void 0:s.call(C,v,r,l))!=null?f:v;h=C!=null&&C.processResult?o(h,!0):h;const m=hr(C==null?void 0:C.property,r);if(!i&&(C==null?void 0:C.static)){const g=hr(C.static,r);c=nn({},c,g)}if(m&&Array.isArray(m)){for(const g of m)c[g]=h;continue}if(m){m==="&"&&Ot(h)?c=nn({},c,h):c[m]=h;continue}if(Ot(h)){c=nn({},c,h);continue}c[p]=h}return c};return o}var Jh=e=>t=>F5({theme:t,pseudos:wl,configs:of})(e);function fe(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function A5(e,t){if(Array.isArray(e))return e;if(Ot(e))return t(e);if(e!=null)return[e]}function E5(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function P5(e){const t=e.__breakpoints;return function(r,o,a,i){var s,l;if(!t)return;const u={},c=A5(a,t.toArrayValue);if(!c)return u;const d=c.length,f=d===1,p=!!r.parts;for(let b=0;b<d;b++){const v=t.details[b],C=t.details[E5(c,b)],h=oa(v.minW,C==null?void 0:C._minW),m=hr((s=r[o])==null?void 0:s[c[b]],i);if(!!m){if(p){(l=r.parts)==null||l.forEach(g=>{nn(u,{[g]:f?m[g]:{[h]:m[g]}})});continue}if(!p){f?nn(u,m):u[h]=m;continue}u[h]=m}}return u}}function q5(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=P5(o);return nn({},hr((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function Ie(e){return d5(e,["styleConfig","size","variant","colorScheme"])}function I5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function R5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var z5=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(R5(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=I5(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),He="-ms-",As="-moz-",Z="-webkit-",ey="comm",af="rule",sf="decl",M5="@import",ty="@keyframes",V5=Math.abs,Sl=String.fromCharCode,L5=Object.assign;function j5(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function ny(e){return e.trim()}function N5(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function qc(e,t){return e.indexOf(t)}function Be(e,t){return e.charCodeAt(t)|0}function Ma(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function lf(e){return e.length}function Ri(e,t){return t.push(e),e}function B5(e,t){return e.map(t).join("")}var xl=1,So=1,ry=0,st=0,Fe=0,Io="";function Cl(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:xl,column:So,length:i,return:""}}function Ho(e,t){return L5(Cl("",null,null,"",null,null,0),e,{length:-e.length},t)}function O5(){return Fe}function D5(){return Fe=st>0?Be(Io,--st):0,So--,Fe===10&&(So=1,xl--),Fe}function mt(){return Fe=st<ry?Be(Io,st++):0,So++,Fe===10&&(So=1,xl++),Fe}function on(){return Be(Io,st)}function us(){return st}function di(e,t){return Ma(Io,e,t)}function Va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oy(e){return xl=So=1,ry=Jt(Io=e),st=0,[]}function ay(e){return Io="",e}function cs(e){return ny(di(st-1,Ic(e===91?e+2:e===40?e+1:e)))}function $5(e){for(;(Fe=on())&&Fe<33;)mt();return Va(e)>2||Va(Fe)>3?"":" "}function W5(e,t){for(;--t&&mt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return di(e,us()+(t<6&&on()==32&&mt()==32))}function Ic(e){for(;mt();)switch(Fe){case e:return st;case 34:case 39:e!==34&&e!==39&&Ic(Fe);break;case 40:e===41&&Ic(e);break;case 92:mt();break}return st}function H5(e,t){for(;mt()&&e+Fe!==47+10;)if(e+Fe===42+42&&on()===47)break;return"/*"+di(t,st-1)+"*"+Sl(e===47?e:mt())}function U5(e){for(;!Va(on());)mt();return di(e,st)}function G5(e){return ay(ds("",null,null,null,[""],e=oy(e),0,[0],e))}function ds(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,p=0,b=0,v=1,C=1,h=1,m=0,g="",x=o,F=a,E=r,A=g;C;)switch(b=m,m=mt()){case 40:if(b!=108&&Be(A,d-1)==58){qc(A+=ee(cs(m),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:A+=cs(m);break;case 9:case 10:case 13:case 32:A+=$5(b);break;case 92:A+=W5(us()-1,7);continue;case 47:switch(on()){case 42:case 47:Ri(K5(H5(mt(),us()),t,n),l);break;default:A+="/"}break;case 123*v:s[u++]=Jt(A)*h;case 125*v:case 59:case 0:switch(m){case 0:case 125:C=0;case 59+c:p>0&&Jt(A)-d&&Ri(p>32?Am(A+";",r,n,d-1):Am(ee(A," ","")+";",r,n,d-2),l);break;case 59:A+=";";default:if(Ri(E=Fm(A,t,n,u,c,o,s,g,x=[],F=[],d),a),m===123)if(c===0)ds(A,t,E,E,x,a,d,s,F);else switch(f===99&&Be(A,3)===110?100:f){case 100:case 109:case 115:ds(e,E,E,r&&Ri(Fm(e,E,E,0,0,o,s,g,o,x=[],d),F),o,F,d,s,r?x:F);break;default:ds(A,E,E,E,[""],F,0,s,F)}}u=c=p=0,v=h=1,g=A="",d=i;break;case 58:d=1+Jt(A),p=b;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&D5()==125)continue}switch(A+=Sl(m),m*v){case 38:h=c>0?1:(A+="\f",-1);break;case 44:s[u++]=(Jt(A)-1)*h,h=1;break;case 64:on()===45&&(A+=cs(mt())),f=on(),c=d=Jt(g=A+=U5(us())),m++;break;case 45:b===45&&Jt(A)==2&&(v=0)}}return a}function Fm(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],p=lf(f),b=0,v=0,C=0;b<r;++b)for(var h=0,m=Ma(e,d+1,d=V5(v=i[b])),g=e;h<p;++h)(g=ny(v>0?f[h]+" "+m:ee(m,/&\f/g,f[h])))&&(l[C++]=g);return Cl(e,t,n,o===0?af:s,l,u,c)}function K5(e,t,n){return Cl(e,t,n,ey,Sl(O5()),Ma(e,2,-2),0)}function Am(e,t,n,r){return Cl(e,t,n,sf,Ma(e,0,r),Ma(e,r+1,-1),r)}function ao(e,t){for(var n="",r=lf(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Y5(e,t,n,r){switch(e.type){case M5:case sf:return e.return=e.return||e.value;case ey:return"";case ty:return e.return=e.value+"{"+ao(e.children,r)+"}";case af:e.value=e.props.join(",")}return Jt(n=ao(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z5(e){var t=lf(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function X5(e){return function(t){t.root||(t=t.return)&&e(t)}}var Em=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function iy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Q5=function(t,n,r){for(var o=0,a=0;o=a,a=on(),o===38&&a===12&&(n[r]=1),!Va(a);)mt();return di(t,st)},J5=function(t,n){var r=-1,o=44;do switch(Va(o)){case 0:o===38&&on()===12&&(n[r]=1),t[r]+=Q5(st-1,n,r);break;case 2:t[r]+=cs(o);break;case 4:if(o===44){t[++r]=on()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Sl(o)}while(o=mt());return t},e9=function(t,n){return ay(J5(oy(t),n))},Pm=new WeakMap,t9=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Pm.get(r))&&!o){Pm.set(t,!0);for(var a=[],i=e9(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},n9=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function sy(e,t){switch(j5(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+As+e+He+e+e;case 6828:case 4268:return Z+e+He+e+e;case 6165:return Z+e+He+"flex-"+e+e;case 5187:return Z+e+ee(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+He+"flex-$1$2")+e;case 5443:return Z+e+He+"flex-item-"+ee(e,/flex-|-self/,"")+e;case 4675:return Z+e+He+"flex-line-pack"+ee(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+He+ee(e,"shrink","negative")+e;case 5292:return Z+e+He+ee(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+ee(e,"-grow","")+Z+e+He+ee(e,"grow","positive")+e;case 4554:return Z+ee(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+As+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qc(e,"stretch")?sy(ee(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Be(e,t+1)!==115)break;case 6444:switch(Be(e,Jt(e)-3-(~qc(e,"!important")&&10))){case 107:return ee(e,":",":"+Z)+e;case 101:return ee(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+(Be(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+He+"$2box$3")+e}break;case 5936:switch(Be(e,t+11)){case 114:return Z+e+He+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+He+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+He+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+He+e+e}return e}var r9=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case sf:t.return=sy(t.value,t.length);break;case ty:return ao([Ho(t,{value:ee(t.value,"@","@"+Z)})],o);case af:if(t.length)return B5(t.props,function(a){switch(N5(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ao([Ho(t,{props:[ee(a,/:(read-\w+)/,":"+As+"$1")]})],o);case"::placeholder":return ao([Ho(t,{props:[ee(a,/:(plac\w+)/,":"+Z+"input-$1")]}),Ho(t,{props:[ee(a,/:(plac\w+)/,":"+As+"$1")]}),Ho(t,{props:[ee(a,/:(plac\w+)/,He+"input-$1")]})],o)}return""})}},o9=[r9],a9=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||o9,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),h=1;h<C.length;h++)a[C[h]]=!0;s.push(v)});var l,u=[t9,n9];{var c,d=[Y5,X5(function(v){c.insert(v)})],f=Z5(u.concat(o,d)),p=function(C){return ao(G5(C),f)};l=function(C,h,m,g){c=m,p(C?C+"{"+h.styles+"}":h.styles),g&&(b.inserted[h.name]=!0)}}var b={key:n,sheet:new z5({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Es.apply(this,arguments)}var ly={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=typeof Symbol=="function"&&Symbol.for,uf=Ve?Symbol.for("react.element"):60103,cf=Ve?Symbol.for("react.portal"):60106,kl=Ve?Symbol.for("react.fragment"):60107,_l=Ve?Symbol.for("react.strict_mode"):60108,Tl=Ve?Symbol.for("react.profiler"):60114,Fl=Ve?Symbol.for("react.provider"):60109,Al=Ve?Symbol.for("react.context"):60110,df=Ve?Symbol.for("react.async_mode"):60111,El=Ve?Symbol.for("react.concurrent_mode"):60111,Pl=Ve?Symbol.for("react.forward_ref"):60112,ql=Ve?Symbol.for("react.suspense"):60113,i9=Ve?Symbol.for("react.suspense_list"):60120,Il=Ve?Symbol.for("react.memo"):60115,Rl=Ve?Symbol.for("react.lazy"):60116,s9=Ve?Symbol.for("react.block"):60121,l9=Ve?Symbol.for("react.fundamental"):60117,u9=Ve?Symbol.for("react.responder"):60118,c9=Ve?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uf:switch(e=e.type,e){case df:case El:case kl:case Tl:case _l:case ql:return e;default:switch(e=e&&e.$$typeof,e){case Al:case Pl:case Rl:case Il:case Fl:return e;default:return t}}case cf:return t}}}function uy(e){return vt(e)===El}re.AsyncMode=df;re.ConcurrentMode=El;re.ContextConsumer=Al;re.ContextProvider=Fl;re.Element=uf;re.ForwardRef=Pl;re.Fragment=kl;re.Lazy=Rl;re.Memo=Il;re.Portal=cf;re.Profiler=Tl;re.StrictMode=_l;re.Suspense=ql;re.isAsyncMode=function(e){return uy(e)||vt(e)===df};re.isConcurrentMode=uy;re.isContextConsumer=function(e){return vt(e)===Al};re.isContextProvider=function(e){return vt(e)===Fl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uf};re.isForwardRef=function(e){return vt(e)===Pl};re.isFragment=function(e){return vt(e)===kl};re.isLazy=function(e){return vt(e)===Rl};re.isMemo=function(e){return vt(e)===Il};re.isPortal=function(e){return vt(e)===cf};re.isProfiler=function(e){return vt(e)===Tl};re.isStrictMode=function(e){return vt(e)===_l};re.isSuspense=function(e){return vt(e)===ql};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kl||e===El||e===Tl||e===_l||e===ql||e===i9||typeof e=="object"&&e!==null&&(e.$$typeof===Rl||e.$$typeof===Il||e.$$typeof===Fl||e.$$typeof===Al||e.$$typeof===Pl||e.$$typeof===l9||e.$$typeof===u9||e.$$typeof===c9||e.$$typeof===s9)};re.typeOf=vt;(function(e){e.exports=re})(ly);var cy=ly.exports,d9={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f9={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dy={};dy[cy.ForwardRef]=d9;dy[cy.Memo]=f9;var p9=!0;function m9(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var fy=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||p9===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},py=function(t,n,r){fy(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function g9(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var h9={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},y9=/[A-Z]|^ms/g,b9=/_EMO_([^_]+?)_([^]*?)_EMO_/g,my=function(t){return t.charCodeAt(1)===45},qm=function(t){return t!=null&&typeof t!="boolean"},_u=iy(function(e){return my(e)?e:e.replace(y9,"-$&").toLowerCase()}),Im=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(b9,function(r,o,a){return en={name:o,styles:a,next:en},o})}return h9[t]!==1&&!my(t)&&typeof n=="number"&&n!==0?n+"px":n};function La(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return en={name:n.name,styles:n.styles,next:en},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)en={name:r.name,styles:r.styles,next:en},r=r.next;var o=n.styles+";";return o}return v9(e,t,n)}case"function":{if(e!==void 0){var a=en,i=n(e);return en=a,La(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function v9(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=La(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=a+"{"+t[i]+"}":qm(i)&&(r+=_u(a)+":"+Im(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)qm(i[s])&&(r+=_u(a)+":"+Im(a,i[s])+";");else{var l=La(e,t,i);switch(a){case"animation":case"animationName":{r+=_u(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var Rm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,en,ff=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";en=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,a+=La(r,n,i)):a+=i[0];for(var s=1;s<t.length;s++)a+=La(r,n,t[s]),o&&(a+=i[s]);Rm.lastIndex=0;for(var l="",u;(u=Rm.exec(a))!==null;)l+="-"+u[1];var c=g9(a)+l;return{name:c,styles:a,next:en}},w9=function(t){return t()},gy=hm["useInsertionEffect"]?hm["useInsertionEffect"]:!1,S9=gy||w9,zm=gy||k.exports.useLayoutEffect,hy=k.exports.createContext(typeof HTMLElement<"u"?a9({key:"css"}):null);hy.Provider;var yy=function(t){return k.exports.forwardRef(function(n,r){var o=k.exports.useContext(hy);return t(n,o,r)})},ja=k.exports.createContext({}),x9=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Es({},t,n)},C9=Em(function(e){return Em(function(t){return x9(e,t)})}),k9=function(t){var n=k.exports.useContext(ja);return t.theme!==n&&(n=C9(n)(t.theme)),k.exports.createElement(ja.Provider,{value:n},t.children)},zl=yy(function(e,t){var n=e.styles,r=ff([n],void 0,k.exports.useContext(ja)),o=k.exports.useRef();return zm(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),zm(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&py(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function _9(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ff(t)}var T9=function(){var t=_9.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function F9(e){return typeof e=="function"}function A9(e,t){const n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}function E9(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var P9=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},by=P9(E9);function vy(e,t){const n={};return Object.keys(e).forEach(r=>{const o=e[r];t(o,r,e)&&(n[r]=o)}),n}var wy=e=>vy(e,t=>t!=null);function Sy(e,...t){return F9(e)?e(...t):e}Object.freeze(["base","sm","md","lg","xl","2xl"]);function q9(e={}){const{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:r}=e,o=k.exports.createContext(void 0);o.displayName=r;function a(){var i;const s=k.exports.useContext(o);if(!s&&t){const l=new Error(n);throw l.name="ContextError",(i=Error.captureStackTrace)==null||i.call(Error,l,a),l}return s}return[o.Provider,a,o]}var I9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,R9=iy(function(e){return I9.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),z9=R9,M9=function(t){return t!=="theme"},Mm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?z9:M9},Vm=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},V9=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return fy(n,r,o),S9(function(){return py(n,r,o)}),null},L9=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=Vm(t,n,r),l=s||Mm(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,p=1;p<f;p++)d.push(c[p],c[0][p])}var b=yy(function(v,C,h){var m=u&&v.as||o,g="",x=[],F=v;if(v.theme==null){F={};for(var E in v)F[E]=v[E];F.theme=k.exports.useContext(ja)}typeof v.className=="string"?g=m9(C.registered,x,v.className):v.className!=null&&(g=v.className+" ");var A=ff(d.concat(x),C.registered,F);g+=C.key+"-"+A.name,i!==void 0&&(g+=" "+i);var q=u&&s===void 0?Mm(m):l,B={};for(var V in v)u&&V==="as"||q(V)&&(B[V]=v[V]);return B.className=g,B.ref=h,k.exports.createElement(k.exports.Fragment,null,k.exports.createElement(V9,{cache:C,serialized:A,isStringTag:typeof m=="string"}),k.exports.createElement(m,B))});return b.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=d,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+i}}),b.withComponent=function(v,C){return e(v,Es({},n,C,{shouldForwardProp:Vm(b,C,!0)})).apply(void 0,d)},b}},j9=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Rc=L9.bind();j9.forEach(function(e){Rc[e]=Rc(e)});function te(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return te(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return te(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const p=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}var N9=te("accordion").parts("root","container","button","panel").extend("icon"),B9=te("alert").parts("title","description","container").extend("icon","spinner"),O9=te("avatar").parts("label","badge","container").extend("excessLabel","group"),D9=te("breadcrumb").parts("link","item","container").extend("separator");te("button").parts();var $9=te("checkbox").parts("control","icon","container").extend("label");te("progress").parts("track","filledTrack").extend("label");var W9=te("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),H9=te("editable").parts("preview","input","textarea"),U9=te("form").parts("container","requiredIndicator","helperText"),G9=te("formError").parts("text","icon"),K9=te("input").parts("addon","field","element"),Y9=te("list").parts("container","item","icon"),Z9=te("menu").parts("button","list","item").extend("groupTitle","command","divider"),X9=te("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),Q9=te("numberinput").parts("root","field","stepperGroup","stepper");te("pininput").parts("field");var J9=te("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),e6=te("progress").parts("label","filledTrack","track"),t6=te("radio").parts("container","control","label"),n6=te("select").parts("field","icon"),r6=te("slider").parts("container","track","thumb","filledTrack","mark"),o6=te("stat").parts("container","label","helpText","number","icon"),a6=te("switch").parts("container","track","thumb"),i6=te("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),s6=te("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),l6=te("tag").parts("container","label","closeButton"),u6=te("card").parts("container","header","body","footer");function yr(e,t,n){return Math.min(Math.max(e,n),t)}class c6 extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var aa=c6;function pf(e){if(typeof e!="string")throw new aa(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=b6.test(e)?p6(e):e;const n=m6.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(Na(s,2),16)),parseInt(Na(i[3]||"f",2),16)/255]}const r=g6.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=h6.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=y6.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(yr(0,100,s)!==s)throw new aa(e);if(yr(0,100,l)!==l)throw new aa(e);return[...v6(i,s,l),u||1]}throw new aa(e)}function d6(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const Lm=e=>parseInt(e.replace(/_/g,""),36),f6="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=Lm(t.substring(0,3)),r=Lm(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function p6(e){const t=e.toLowerCase().trim(),n=f6[d6(t)];if(!n)throw new aa(e);return`#${n}`}const Na=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),m6=new RegExp(`^#${Na("([a-f0-9])",3)}([a-f0-9])?$`,"i"),g6=new RegExp(`^#${Na("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),h6=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Na(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),y6=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,b6=/^[a-z]+$/i,jm=e=>Math.round(e*255),v6=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(jm);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,p=u+c;return[d,f,p].map(jm)};function w6(e,t,n,r){return`rgba(${yr(0,255,e).toFixed()}, ${yr(0,255,t).toFixed()}, ${yr(0,255,n).toFixed()}, ${parseFloat(yr(0,1,r).toFixed(3))})`}function S6(e,t){const[n,r,o,a]=pf(e);return w6(n,r,o,a-t)}function x6(e){const[t,n,r,o]=pf(e);let a=i=>{const s=yr(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}function C6(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}var k6=e=>Object.keys(e).length===0,Ze=(e,t,n)=>{const r=C6(e,`colors.${t}`,t);try{return x6(r),r}catch{return n!=null?n:"#000000"}},_6=e=>{const[t,n,r]=pf(e);return(t*299+n*587+r*114)/1e3},T6=e=>t=>{const n=Ze(t,e);return _6(n)<128?"dark":"light"},F6=e=>t=>T6(e)(t)==="dark",xo=(e,t)=>n=>{const r=Ze(n,e);return S6(r,1-t)};function Nm(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var A6=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function E6(e){const t=A6();return!e||k6(e)?t:e.string&&e.colors?q6(e.string,e.colors):e.string&&!e.colors?P6(e.string):e.colors&&!e.string?I6(e.colors):t}function P6(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1)n+=`00${(t>>r*8&255).toString(16)}`.substr(-2);return n}function q6(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function I6(e){return e[Math.floor(Math.random()*e.length)]}function j(e,t){return n=>n.colorMode==="dark"?t:e}function mf(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function R6(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function xy(e){return R6(e)&&e.reference?e.reference:String(e)}var Ml=(e,...t)=>t.map(xy).join(` ${e} `).replace(/calc/g,""),Bm=(...e)=>`calc(${Ml("+",...e)})`,Om=(...e)=>`calc(${Ml("-",...e)})`,zc=(...e)=>`calc(${Ml("*",...e)})`,Dm=(...e)=>`calc(${Ml("/",...e)})`,$m=e=>{const t=xy(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:zc(t,-1)},bn=Object.assign(e=>({add:(...t)=>bn(Bm(e,...t)),subtract:(...t)=>bn(Om(e,...t)),multiply:(...t)=>bn(zc(e,...t)),divide:(...t)=>bn(Dm(e,...t)),negate:()=>bn($m(e)),toString:()=>e.toString()}),{add:Bm,subtract:Om,multiply:zc,divide:Dm,negate:$m});function z6(e){return!Number.isInteger(parseFloat(e.toString()))}function M6(e,t="-"){return e.replace(/\s+/g,t)}function Cy(e){const t=M6(e.toString());return t.includes("\\.")?e:z6(e)?t.replace(".","\\."):e}function V6(e,t=""){return[t,Cy(e)].filter(Boolean).join("-")}function L6(e,t){return`var(${Cy(e)}${t?`, ${t}`:""})`}function j6(e,t=""){return`--${V6(e,t)}`}function Re(e,t){const n=j6(e,t==null?void 0:t.prefix);return{variable:n,reference:L6(n,N6(t==null?void 0:t.fallback))}}function N6(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{definePartsStyle:B6,defineMultiStyleConfig:O6}=fe(N9.keys),D6={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},$6={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},W6={pt:"2",px:"4",pb:"5"},H6={fontSize:"1.25em"},U6=B6({container:D6,button:$6,panel:W6,icon:H6}),G6=O6({baseStyle:U6}),{definePartsStyle:fi,defineMultiStyleConfig:K6}=fe(B9.keys),gt=oe("alert-fg"),Cn=oe("alert-bg"),Y6=fi({container:{bg:Cn.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:gt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:gt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function gf(e){const{theme:t,colorScheme:n}=e,r=xo(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}var Z6=fi(e=>{const{colorScheme:t}=e,n=gf(e);return{container:{[gt.variable]:`colors.${t}.500`,[Cn.variable]:n.light,_dark:{[gt.variable]:`colors.${t}.200`,[Cn.variable]:n.dark}}}}),X6=fi(e=>{const{colorScheme:t}=e,n=gf(e);return{container:{[gt.variable]:`colors.${t}.500`,[Cn.variable]:n.light,_dark:{[gt.variable]:`colors.${t}.200`,[Cn.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:gt.reference}}}),Q6=fi(e=>{const{colorScheme:t}=e,n=gf(e);return{container:{[gt.variable]:`colors.${t}.500`,[Cn.variable]:n.light,_dark:{[gt.variable]:`colors.${t}.200`,[Cn.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:gt.reference}}}),J6=fi(e=>{const{colorScheme:t}=e;return{container:{[gt.variable]:"colors.white",[Cn.variable]:`colors.${t}.500`,_dark:{[gt.variable]:"colors.gray.900",[Cn.variable]:`colors.${t}.200`},color:gt.reference}}}),e4={subtle:Z6,"left-accent":X6,"top-accent":Q6,solid:J6},t4=K6({baseStyle:Y6,variants:e4,defaultProps:{variant:"subtle",colorScheme:"blue"}}),ky={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},n4={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},r4={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},o4={...ky,...n4,container:r4},_y=o4,a4=e=>typeof e=="function";function Xe(e,...t){return a4(e)?e(...t):e}var{definePartsStyle:Ty,defineMultiStyleConfig:i4}=fe(O9.keys),io=oe("avatar-border-color"),Tu=oe("avatar-bg"),s4={borderRadius:"full",border:"0.2em solid",[io.variable]:"white",_dark:{[io.variable]:"colors.gray.800"},borderColor:io.reference},l4={[Tu.variable]:"colors.gray.200",_dark:{[Tu.variable]:"colors.whiteAlpha.400"},bgColor:Tu.reference},Wm=oe("avatar-background"),u4=e=>{const{name:t,theme:n}=e,r=t?E6({string:t}):"colors.gray.400",o=F6(r)(n);let a="white";return o||(a="gray.800"),{bg:Wm.reference,"&:not([data-loaded])":{[Wm.variable]:r},color:a,[io.variable]:"colors.white",_dark:{[io.variable]:"colors.gray.800"},borderColor:io.reference,verticalAlign:"top"}},c4=Ty(e=>({badge:Xe(s4,e),excessLabel:Xe(l4,e),container:Xe(u4,e)}));function qn(e){const t=e!=="100%"?_y[e]:void 0;return Ty({container:{width:e,height:e,fontSize:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{width:e,height:e},label:{fontSize:`calc(${t!=null?t:e} / 2.5)`,lineHeight:e!=="100%"?t!=null?t:e:void 0}})}var d4={"2xs":qn(4),xs:qn(6),sm:qn(8),md:qn(12),lg:qn(16),xl:qn(24),"2xl":qn(32),full:qn("100%")},f4=i4({baseStyle:c4,sizes:d4,defaultProps:{size:"md"}}),p4={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold"},so=oe("badge-bg"),rn=oe("badge-color"),m4=e=>{const{colorScheme:t,theme:n}=e,r=xo(`${t}.500`,.6)(n);return{[so.variable]:`colors.${t}.500`,[rn.variable]:"colors.white",_dark:{[so.variable]:r,[rn.variable]:"colors.whiteAlpha.800"},bg:so.reference,color:rn.reference}},g4=e=>{const{colorScheme:t,theme:n}=e,r=xo(`${t}.200`,.16)(n);return{[so.variable]:`colors.${t}.100`,[rn.variable]:`colors.${t}.800`,_dark:{[so.variable]:r,[rn.variable]:`colors.${t}.200`},bg:so.reference,color:rn.reference}},h4=e=>{const{colorScheme:t,theme:n}=e,r=xo(`${t}.200`,.8)(n);return{[rn.variable]:`colors.${t}.500`,_dark:{[rn.variable]:r},color:rn.reference,boxShadow:`inset 0 0 0px 1px ${rn.reference}`}},y4={solid:m4,subtle:g4,outline:h4},fa={baseStyle:p4,variants:y4,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:b4,definePartsStyle:v4}=fe(D9.keys),w4={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},S4=v4({link:w4}),x4=b4({baseStyle:S4}),C4={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},Fy=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:j("inherit","whiteAlpha.900")(e),_hover:{bg:j("gray.100","whiteAlpha.200")(e)},_active:{bg:j("gray.200","whiteAlpha.300")(e)}};const r=xo(`${t}.200`,.12)(n),o=xo(`${t}.200`,.24)(n);return{color:j(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:j(`${t}.50`,r)(e)},_active:{bg:j(`${t}.100`,o)(e)}}},k4=e=>{const{colorScheme:t}=e,n=j("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Xe(Fy,e)}},_4={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},T4=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=j("gray.100","whiteAlpha.200")(e);return{bg:l,_hover:{bg:j("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:j("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=_4[t])!=null?s:{},i=j(n,`${t}.200`)(e);return{bg:i,color:j(r,"gray.800")(e),_hover:{bg:j(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:j(a,`${t}.400`)(e)}}},F4=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:j(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:j(`${t}.700`,`${t}.500`)(e)}}},A4={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},E4={ghost:Fy,outline:k4,solid:T4,link:F4,unstyled:A4},P4={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},q4={baseStyle:C4,variants:E4,sizes:P4,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:xr,defineMultiStyleConfig:I4}=fe(u6.keys),Ps=oe("card-bg"),lo=oe("card-padding"),R4=xr({container:{[Ps.variable]:"chakra-body-bg",backgroundColor:Ps.reference,color:"chakra-body-text"},body:{padding:lo.reference,flex:"1 1 0%"},header:{padding:lo.reference},footer:{padding:lo.reference}}),z4={sm:xr({container:{borderRadius:"base",[lo.variable]:"space.3"}}),md:xr({container:{borderRadius:"md",[lo.variable]:"space.5"}}),lg:xr({container:{borderRadius:"xl",[lo.variable]:"space.7"}})},M4={elevated:xr({container:{boxShadow:"base",_dark:{[Ps.variable]:"colors.gray.700"}}}),outline:xr({container:{borderWidth:"1px",borderColor:"chakra-border-color"}}),filled:xr({container:{[Ps.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{padding:0},header:{padding:0},footer:{padding:0}}},V4=I4({baseStyle:R4,variants:M4,sizes:z4,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:fs,defineMultiStyleConfig:L4}=fe($9.keys),pa=oe("checkbox-size"),j4=e=>{const{colorScheme:t}=e;return{w:pa.reference,h:pa.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:j(`${t}.500`,`${t}.200`)(e),borderColor:j(`${t}.500`,`${t}.200`)(e),color:j("white","gray.900")(e),_hover:{bg:j(`${t}.600`,`${t}.300`)(e),borderColor:j(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:j("gray.200","transparent")(e),bg:j("gray.200","whiteAlpha.300")(e),color:j("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:j(`${t}.500`,`${t}.200`)(e),borderColor:j(`${t}.500`,`${t}.200`)(e),color:j("white","gray.900")(e)},_disabled:{bg:j("gray.100","whiteAlpha.100")(e),borderColor:j("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:j("red.500","red.300")(e)}}},N4={_disabled:{cursor:"not-allowed"}},B4={userSelect:"none",_disabled:{opacity:.4}},O4={transitionProperty:"transform",transitionDuration:"normal"},D4=fs(e=>({icon:O4,container:N4,control:Xe(j4,e),label:B4})),$4={sm:fs({control:{[pa.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:fs({control:{[pa.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:fs({control:{[pa.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},qs=L4({baseStyle:D4,sizes:$4,defaultProps:{size:"md",colorScheme:"blue"}}),ma=Re("close-button-size"),Uo=Re("close-button-bg"),W4={w:[ma.reference],h:[ma.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[Uo.variable]:"colors.blackAlpha.100",_dark:{[Uo.variable]:"colors.whiteAlpha.100"}},_active:{[Uo.variable]:"colors.blackAlpha.200",_dark:{[Uo.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:Uo.reference},H4={lg:{[ma.variable]:"sizes.10",fontSize:"md"},md:{[ma.variable]:"sizes.8",fontSize:"xs"},sm:{[ma.variable]:"sizes.6",fontSize:"2xs"}},U4={baseStyle:W4,sizes:H4,defaultProps:{size:"md"}},{variants:G4,defaultProps:K4}=fa,Y4={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm"},Z4={baseStyle:Y4,variants:G4,defaultProps:K4},X4={w:"100%",mx:"auto",maxW:"prose",px:"4"},Q4={baseStyle:X4},J4={opacity:.6,borderColor:"inherit"},eS={borderStyle:"solid"},tS={borderStyle:"dashed"},nS={solid:eS,dashed:tS},rS={baseStyle:J4,variants:nS,defaultProps:{variant:"solid"}},{definePartsStyle:Mc,defineMultiStyleConfig:oS}=fe(W9.keys),Fu=oe("drawer-bg"),Au=oe("drawer-box-shadow");function Br(e){return Mc(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var aS={bg:"blackAlpha.600",zIndex:"overlay"},iS={display:"flex",zIndex:"modal",justifyContent:"center"},sS=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[Fu.variable]:"colors.white",[Au.variable]:"shadows.lg",_dark:{[Fu.variable]:"colors.gray.700",[Au.variable]:"shadows.dark-lg"},bg:Fu.reference,boxShadow:Au.reference}},lS={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},uS={position:"absolute",top:"2",insetEnd:"3"},cS={px:"6",py:"2",flex:"1",overflow:"auto"},dS={px:"6",py:"4"},fS=Mc(e=>({overlay:aS,dialogContainer:iS,dialog:Xe(sS,e),header:lS,closeButton:uS,body:cS,footer:dS})),pS={xs:Br("xs"),sm:Br("md"),md:Br("lg"),lg:Br("2xl"),xl:Br("4xl"),full:Br("full")},mS=oS({baseStyle:fS,sizes:pS,defaultProps:{size:"xs"}}),{definePartsStyle:gS,defineMultiStyleConfig:hS}=fe(H9.keys),yS={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},bS={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},vS={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},wS=gS({preview:yS,input:bS,textarea:vS}),SS=hS({baseStyle:wS}),{definePartsStyle:xS,defineMultiStyleConfig:CS}=fe(U9.keys),uo=oe("form-control-color"),kS={marginStart:"1",[uo.variable]:"colors.red.500",_dark:{[uo.variable]:"colors.red.300"},color:uo.reference},_S={mt:"2",[uo.variable]:"colors.gray.600",_dark:{[uo.variable]:"colors.whiteAlpha.600"},color:uo.reference,lineHeight:"normal",fontSize:"sm"},TS=xS({container:{width:"100%",position:"relative"},requiredIndicator:kS,helperText:_S}),FS=CS({baseStyle:TS}),{definePartsStyle:AS,defineMultiStyleConfig:ES}=fe(G9.keys),co=oe("form-error-color"),PS={[co.variable]:"colors.red.500",_dark:{[co.variable]:"colors.red.300"},color:co.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},qS={marginEnd:"0.5em",[co.variable]:"colors.red.500",_dark:{[co.variable]:"colors.red.300"},color:co.reference},IS=AS({text:PS,icon:qS}),RS=ES({baseStyle:IS}),zS={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},MS={baseStyle:zS},VS={fontFamily:"heading",fontWeight:"bold"},LS={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},jS={baseStyle:VS,sizes:LS,defaultProps:{size:"xl"}},{definePartsStyle:vn,defineMultiStyleConfig:NS}=fe(K9.keys),BS=vn({field:{width:"100%",minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),In={lg:{fontSize:"lg",px:"4",h:"12",borderRadius:"md"},md:{fontSize:"md",px:"4",h:"10",borderRadius:"md"},sm:{fontSize:"sm",px:"3",h:"8",borderRadius:"sm"},xs:{fontSize:"xs",px:"2",h:"6",borderRadius:"sm"}},OS={lg:vn({field:In.lg,addon:In.lg}),md:vn({field:In.md,addon:In.md}),sm:vn({field:In.sm,addon:In.sm}),xs:vn({field:In.xs,addon:In.xs})};function hf(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||j("blue.500","blue.300")(e),errorBorderColor:n||j("red.500","red.300")(e)}}var DS=vn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=hf(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:j("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ze(t,r),boxShadow:`0 0 0 1px ${Ze(t,r)}`},_focusVisible:{zIndex:1,borderColor:Ze(t,n),boxShadow:`0 0 0 1px ${Ze(t,n)}`}},addon:{border:"1px solid",borderColor:j("inherit","whiteAlpha.50")(e),bg:j("gray.100","whiteAlpha.300")(e)}}}),$S=vn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=hf(e);return{field:{border:"2px solid",borderColor:"transparent",bg:j("gray.100","whiteAlpha.50")(e),_hover:{bg:j("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ze(t,r)},_focusVisible:{bg:"transparent",borderColor:Ze(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:j("gray.100","whiteAlpha.50")(e)}}}),WS=vn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=hf(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ze(t,r),boxShadow:`0px 1px 0px 0px ${Ze(t,r)}`},_focusVisible:{borderColor:Ze(t,n),boxShadow:`0px 1px 0px 0px ${Ze(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),HS=vn({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),US={outline:DS,filled:$S,flushed:WS,unstyled:HS},Q=NS({baseStyle:BS,sizes:OS,variants:US,defaultProps:{size:"md",variant:"outline"}}),Eu=oe("kbd-bg"),GS={[Eu.variable]:"colors.gray.100",_dark:{[Eu.variable]:"colors.whiteAlpha.100"},bg:Eu.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},KS={baseStyle:GS},YS={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},ZS={baseStyle:YS},{defineMultiStyleConfig:XS,definePartsStyle:QS}=fe(Y9.keys),JS={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},ex=QS({icon:JS}),tx=XS({baseStyle:ex}),{defineMultiStyleConfig:nx,definePartsStyle:rx}=fe(Z9.keys),Qt=oe("menu-bg"),Pu=oe("menu-shadow"),ox={[Qt.variable]:"#fff",[Pu.variable]:"shadows.sm",_dark:{[Qt.variable]:"colors.gray.700",[Pu.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:Qt.reference,boxShadow:Pu.reference},ax={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[Qt.variable]:"colors.gray.100",_dark:{[Qt.variable]:"colors.whiteAlpha.100"}},_active:{[Qt.variable]:"colors.gray.200",_dark:{[Qt.variable]:"colors.whiteAlpha.200"}},_expanded:{[Qt.variable]:"colors.gray.100",_dark:{[Qt.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:Qt.reference},ix={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},sx={opacity:.6},lx={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},ux={transitionProperty:"common",transitionDuration:"normal"},cx=rx({button:ux,list:ox,item:ax,groupTitle:ix,command:sx,divider:lx}),dx=nx({baseStyle:cx}),{defineMultiStyleConfig:fx,definePartsStyle:Vc}=fe(X9.keys),px={bg:"blackAlpha.600",zIndex:"modal"},mx=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},gx=e=>{const{scrollBehavior:t}=e;return{borderRadius:"md",bg:j("white","gray.700")(e),color:"inherit",my:"16",zIndex:"modal",maxH:t==="inside"?"calc(100% - 7.5rem)":void 0,boxShadow:j("lg","dark-lg")(e)}},hx={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},yx={position:"absolute",top:"2",insetEnd:"3"},bx=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},vx={px:"6",py:"4"},wx=Vc(e=>({overlay:px,dialogContainer:Xe(mx,e),dialog:Xe(gx,e),header:hx,closeButton:yx,body:Xe(bx,e),footer:vx}));function zt(e){return Vc(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var Sx={xs:zt("xs"),sm:zt("sm"),md:zt("md"),lg:zt("lg"),xl:zt("xl"),"2xl":zt("2xl"),"3xl":zt("3xl"),"4xl":zt("4xl"),"5xl":zt("5xl"),"6xl":zt("6xl"),full:zt("full")},xx=fx({baseStyle:wx,sizes:Sx,defaultProps:{size:"md"}}),Cx={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},Ay=Cx,{defineMultiStyleConfig:kx,definePartsStyle:Ey}=fe(Q9.keys),yf=Re("number-input-stepper-width"),Py=Re("number-input-input-padding"),_x=bn(yf).add("0.5rem").toString(),qu=Re("number-input-bg"),Iu=Re("number-input-color"),Ru=Re("number-input-border-color"),Tx={[yf.variable]:"sizes.6",[Py.variable]:_x},Fx=e=>{var n;var t;return(n=(t=Xe(Q.baseStyle,e))==null?void 0:t.field)!=null?n:{}},Ax={width:yf.reference},Ex={borderStart:"1px solid",borderStartColor:Ru.reference,color:Iu.reference,bg:qu.reference,[Iu.variable]:"colors.chakra-body-text",[Ru.variable]:"colors.chakra-border-color",_dark:{[Iu.variable]:"colors.whiteAlpha.800",[Ru.variable]:"colors.whiteAlpha.300"},_active:{[qu.variable]:"colors.gray.200",_dark:{[qu.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},Px=Ey(e=>{var t;return{root:Tx,field:(t=Xe(Fx,e))!=null?t:{},stepperGroup:Ax,stepper:Ex}});function zi(e){var s;var t,n;const r=(t=Q.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},a=(s=(n=r.field)==null?void 0:n.fontSize)!=null?s:"md",i=Ay.fontSizes[a];return Ey({field:{...r.field,paddingInlineEnd:Py.reference,verticalAlign:"top"},stepper:{fontSize:bn(i).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var qx={xs:zi("xs"),sm:zi("sm"),md:zi("md"),lg:zi("lg")},Ix=kx({baseStyle:Px,sizes:qx,variants:Q.variants,defaultProps:Q.defaultProps}),Hm,Rx={...(Hm=Q.baseStyle)==null?void 0:Hm.field,textAlign:"center"},zx={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},Um,Ph,Mx={outline:e=>{var r;var t,n;return(r=(n=Xe((t=Q.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var r;var t,n;return(r=(n=Xe((t=Q.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var r;var t,n;return(r=(n=Xe((t=Q.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(Ph=(Um=Q.variants)==null?void 0:Um.unstyled.field)!=null?Ph:{}},Vx={baseStyle:Rx,sizes:zx,variants:Mx,defaultProps:Q.defaultProps},{defineMultiStyleConfig:Lx,definePartsStyle:jx}=fe(J9.keys),Mi=Re("popper-bg"),Nx=Re("popper-arrow-bg"),Gm=Re("popper-arrow-shadow-color"),Bx={zIndex:10},Ox={[Mi.variable]:"colors.white",bg:Mi.reference,[Nx.variable]:Mi.reference,[Gm.variable]:"colors.gray.200",_dark:{[Mi.variable]:"colors.gray.700",[Gm.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},Dx={px:3,py:2,borderBottomWidth:"1px"},$x={px:3,py:2},Wx={px:3,py:2,borderTopWidth:"1px"},Hx={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},Ux=jx({popper:Bx,content:Ox,header:Dx,body:$x,footer:Wx,closeButton:Hx}),Gx=Lx({baseStyle:Ux}),{defineMultiStyleConfig:Kx,definePartsStyle:ia}=fe(e6.keys),Yx=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=j(Nm(),Nm("1rem","rgba(0,0,0,0.1)"))(e),i=j(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${Ze(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},Zx={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},Xx=e=>({bg:j("gray.100","whiteAlpha.300")(e)}),Qx=e=>({transitionProperty:"common",transitionDuration:"slow",...Yx(e)}),Jx=ia(e=>({label:Zx,filledTrack:Qx(e),track:Xx(e)})),e8={xs:ia({track:{h:"1"}}),sm:ia({track:{h:"2"}}),md:ia({track:{h:"3"}}),lg:ia({track:{h:"4"}})},t8=Kx({sizes:e8,baseStyle:Jx,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:n8,definePartsStyle:ps}=fe(t6.keys),r8=e=>{var t;const n=(t=Xe(qs.baseStyle,e))==null?void 0:t.control;return{...n,borderRadius:"full",_checked:{...n==null?void 0:n._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},o8=ps(e=>{var t,n,r,o;return{label:(n=(t=qs).baseStyle)==null?void 0:n.call(t,e).label,container:(o=(r=qs).baseStyle)==null?void 0:o.call(r,e).container,control:r8(e)}}),a8={md:ps({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:ps({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:ps({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},i8=n8({baseStyle:o8,sizes:a8,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:s8,definePartsStyle:l8}=fe(n6.keys),Vi=oe("select-bg"),Km,u8={...(Km=Q.baseStyle)==null?void 0:Km.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:Vi.reference,[Vi.variable]:"colors.white",_dark:{[Vi.variable]:"colors.gray.700"},"> option, > optgroup":{bg:Vi.reference}},c8={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},d8=l8({field:u8,icon:c8}),Li={paddingInlineEnd:"8"},Ym,Zm,Xm,Qm,Jm,e0,t0,n0,f8={lg:{...(Ym=Q.sizes)==null?void 0:Ym.lg,field:{...(Zm=Q.sizes)==null?void 0:Zm.lg.field,...Li}},md:{...(Xm=Q.sizes)==null?void 0:Xm.md,field:{...(Qm=Q.sizes)==null?void 0:Qm.md.field,...Li}},sm:{...(Jm=Q.sizes)==null?void 0:Jm.sm,field:{...(e0=Q.sizes)==null?void 0:e0.sm.field,...Li}},xs:{...(t0=Q.sizes)==null?void 0:t0.xs,field:{...(n0=Q.sizes)==null?void 0:n0.xs.field,...Li},icon:{insetEnd:"1"}}},p8=s8({baseStyle:d8,sizes:f8,variants:Q.variants,defaultProps:Q.defaultProps}),zu=oe("skeleton-start-color"),Mu=oe("skeleton-end-color"),m8={[zu.variable]:"colors.gray.100",[Mu.variable]:"colors.gray.400",_dark:{[zu.variable]:"colors.gray.800",[Mu.variable]:"colors.gray.600"},background:zu.reference,borderColor:Mu.reference,opacity:.7,borderRadius:"sm"},g8={baseStyle:m8},Vu=oe("skip-link-bg"),h8={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[Vu.variable]:"colors.white",_dark:{[Vu.variable]:"colors.gray.700"},bg:Vu.reference}},y8={baseStyle:h8},{defineMultiStyleConfig:b8,definePartsStyle:Vl}=fe(r6.keys),Ba=oe("slider-thumb-size"),Oa=oe("slider-track-size"),jn=oe("slider-bg"),v8=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...mf({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},w8=e=>({...mf({orientation:e.orientation,horizontal:{h:Oa.reference},vertical:{w:Oa.reference}}),overflow:"hidden",borderRadius:"sm",[jn.variable]:"colors.gray.200",_dark:{[jn.variable]:"colors.whiteAlpha.200"},_disabled:{[jn.variable]:"colors.gray.300",_dark:{[jn.variable]:"colors.whiteAlpha.300"}},bg:jn.reference}),S8=e=>{const{orientation:t}=e;return{...mf({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:Ba.reference,h:Ba.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},x8=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[jn.variable]:`colors.${t}.500`,_dark:{[jn.variable]:`colors.${t}.200`},bg:jn.reference}},C8=Vl(e=>({container:v8(e),track:w8(e),thumb:S8(e),filledTrack:x8(e)})),k8=Vl({container:{[Ba.variable]:"sizes.4",[Oa.variable]:"sizes.1"}}),_8=Vl({container:{[Ba.variable]:"sizes.3.5",[Oa.variable]:"sizes.1"}}),T8=Vl({container:{[Ba.variable]:"sizes.2.5",[Oa.variable]:"sizes.0.5"}}),F8={lg:k8,md:_8,sm:T8},A8=b8({baseStyle:C8,sizes:F8,defaultProps:{size:"md",colorScheme:"blue"}}),gr=Re("spinner-size"),E8={width:[gr.reference],height:[gr.reference]},P8={xs:{[gr.variable]:"sizes.3"},sm:{[gr.variable]:"sizes.4"},md:{[gr.variable]:"sizes.6"},lg:{[gr.variable]:"sizes.8"},xl:{[gr.variable]:"sizes.12"}},q8={baseStyle:E8,sizes:P8,defaultProps:{size:"md"}},{defineMultiStyleConfig:I8,definePartsStyle:qy}=fe(o6.keys),R8={fontWeight:"medium"},z8={opacity:.8,marginBottom:"2"},M8={verticalAlign:"baseline",fontWeight:"semibold"},V8={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},L8=qy({container:{},label:R8,helpText:z8,number:M8,icon:V8}),j8={md:qy({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},N8=I8({baseStyle:L8,sizes:j8,defaultProps:{size:"md"}}),{defineMultiStyleConfig:B8,definePartsStyle:ms}=fe(a6.keys),ga=Re("switch-track-width"),Cr=Re("switch-track-height"),Lu=Re("switch-track-diff"),O8=bn.subtract(ga,Cr),Lc=Re("switch-thumb-x"),Go=Re("switch-bg"),D8=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[ga.reference],height:[Cr.reference],transitionProperty:"common",transitionDuration:"fast",[Go.variable]:"colors.gray.300",_dark:{[Go.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[Go.variable]:`colors.${t}.500`,_dark:{[Go.variable]:`colors.${t}.200`}},bg:Go.reference}},$8={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[Cr.reference],height:[Cr.reference],_checked:{transform:`translateX(${Lc.reference})`}},W8=ms(e=>({container:{[Lu.variable]:O8,[Lc.variable]:Lu.reference,_rtl:{[Lc.variable]:bn(Lu).negate().toString()}},track:D8(e),thumb:$8})),H8={sm:ms({container:{[ga.variable]:"1.375rem",[Cr.variable]:"sizes.3"}}),md:ms({container:{[ga.variable]:"1.875rem",[Cr.variable]:"sizes.4"}}),lg:ms({container:{[ga.variable]:"2.875rem",[Cr.variable]:"sizes.6"}})},U8=B8({baseStyle:W8,sizes:H8,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:G8,definePartsStyle:fo}=fe(i6.keys),K8=fo({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),Is={"&[data-is-numeric=true]":{textAlign:"end"}},Y8=fo(e=>{const{colorScheme:t}=e;return{th:{color:j("gray.600","gray.400")(e),borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Is},td:{borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Is},caption:{color:j("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),Z8=fo(e=>{const{colorScheme:t}=e;return{th:{color:j("gray.600","gray.400")(e),borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Is},td:{borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Is},caption:{color:j("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e)},td:{background:j(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),X8={simple:Y8,striped:Z8,unstyled:{}},Q8={sm:fo({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:fo({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:fo({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},J8=G8({baseStyle:K8,variants:X8,sizes:Q8,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),nt=oe("tabs-color"),Bt=oe("tabs-bg"),ji=oe("tabs-border-color"),{defineMultiStyleConfig:eC,definePartsStyle:an}=fe(s6.keys),tC=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},nC=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},rC=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},oC={p:4},aC=an(e=>({root:tC(e),tab:nC(e),tablist:rC(e),tabpanel:oC})),iC={sm:an({tab:{py:1,px:4,fontSize:"sm"}}),md:an({tab:{fontSize:"md",py:2,px:4}}),lg:an({tab:{fontSize:"lg",py:3,px:4}})},sC=an(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=n==="vertical"?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[nt.variable]:`colors.${t}.600`,_dark:{[nt.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Bt.variable]:"colors.gray.200",_dark:{[Bt.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:nt.reference,bg:Bt.reference}}}),lC=an(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[ji.variable]:"transparent",_selected:{[nt.variable]:`colors.${t}.600`,[ji.variable]:"colors.white",_dark:{[nt.variable]:`colors.${t}.300`,[ji.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:ji.reference},color:nt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),uC=an(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Bt.variable]:"colors.gray.50",_dark:{[Bt.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Bt.variable]:"colors.white",[nt.variable]:`colors.${t}.600`,_dark:{[Bt.variable]:"colors.gray.800",[nt.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:nt.reference,bg:Bt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),cC=an(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Ze(n,`${t}.700`),bg:Ze(n,`${t}.100`)}}}}),dC=an(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[nt.variable]:"colors.gray.600",_dark:{[nt.variable]:"inherit"},_selected:{[nt.variable]:"colors.white",[Bt.variable]:`colors.${t}.600`,_dark:{[nt.variable]:"colors.gray.800",[Bt.variable]:`colors.${t}.300`}},color:nt.reference,bg:Bt.reference}}}),fC=an({}),pC={line:sC,enclosed:lC,"enclosed-colored":uC,"soft-rounded":cC,"solid-rounded":dC,unstyled:fC},mC=eC({baseStyle:aC,sizes:iC,variants:pC,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:gC,definePartsStyle:kr}=fe(l6.keys),hC={fontWeight:"medium",lineHeight:1.2,outline:0,borderRadius:"md",_focusVisible:{boxShadow:"outline"}},yC={lineHeight:1.2,overflow:"visible"},bC={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},vC=kr({container:hC,label:yC,closeButton:bC}),wC={sm:kr({container:{minH:"5",minW:"5",fontSize:"xs",px:"2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:kr({container:{minH:"6",minW:"6",fontSize:"sm",px:"2"}}),lg:kr({container:{minH:"8",minW:"8",fontSize:"md",px:"3"}})},SC={subtle:kr(e=>{var t;return{container:(t=fa.variants)==null?void 0:t.subtle(e)}}),solid:kr(e=>{var t;return{container:(t=fa.variants)==null?void 0:t.solid(e)}}),outline:kr(e=>{var t;return{container:(t=fa.variants)==null?void 0:t.outline(e)}})},xC=gC({variants:SC,baseStyle:vC,sizes:wC,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),r0,CC={...(r0=Q.baseStyle)==null?void 0:r0.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},o0,qh,kC={outline:e=>{var n;var t;return(n=(t=Q.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var n;var t;return(n=(t=Q.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var n;var t;return(n=(t=Q.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(qh=(o0=Q.variants)==null?void 0:o0.unstyled.field)!=null?qh:{}},a0,i0,s0,l0,Ih,Rh,zh,Mh,_C={xs:(Ih=(a0=Q.sizes)==null?void 0:a0.xs.field)!=null?Ih:{},sm:(Rh=(i0=Q.sizes)==null?void 0:i0.sm.field)!=null?Rh:{},md:(zh=(s0=Q.sizes)==null?void 0:s0.md.field)!=null?zh:{},lg:(Mh=(l0=Q.sizes)==null?void 0:l0.lg.field)!=null?Mh:{}},TC={baseStyle:CC,sizes:_C,variants:kC,defaultProps:{size:"md",variant:"outline"}},Ni=Re("tooltip-bg"),ju=Re("tooltip-fg"),FC=Re("popper-arrow-bg"),AC={bg:Ni.reference,color:ju.reference,[Ni.variable]:"colors.gray.700",[ju.variable]:"colors.whiteAlpha.900",_dark:{[Ni.variable]:"colors.gray.300",[ju.variable]:"colors.gray.900"},[FC.variable]:Ni.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},EC={baseStyle:AC},PC={Accordion:G6,Alert:t4,Avatar:f4,Badge:fa,Breadcrumb:x4,Button:q4,Checkbox:qs,CloseButton:U4,Code:Z4,Container:Q4,Divider:rS,Drawer:mS,Editable:SS,Form:FS,FormError:RS,FormLabel:MS,Heading:jS,Input:Q,Kbd:KS,Link:ZS,List:tx,Menu:dx,Modal:xx,NumberInput:Ix,PinInput:Vx,Popover:Gx,Progress:t8,Radio:i8,Select:p8,Skeleton:g8,SkipLink:y8,Slider:A8,Spinner:q8,Stat:N8,Switch:U8,Table:J8,Tabs:mC,Tag:xC,Textarea:TC,Tooltip:EC,Card:V4},qC={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},IC=qC,RC={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},zC=RC,MC={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},VC=MC,LC={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},jC=LC,NC={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},BC=NC,OC={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},DC={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},$C={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},WC={property:OC,easing:DC,duration:$C},HC=WC,UC={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},GC=UC,KC={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},YC=KC,ZC={breakpoints:zC,zIndices:GC,radii:jC,blur:YC,colors:VC,...Ay,sizes:_y,shadows:BC,space:ky,borders:IC,transition:HC},XC={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},QC={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color",wordWrap:"break-word"}}},JC="ltr",e7={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},t7={semanticTokens:XC,direction:JC,...ZC,components:PC,styles:QC,config:e7},n7=typeof Element<"u",r7=typeof Map=="function",o7=typeof Set=="function",a7=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function gs(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!gs(e[r],t[r]))return!1;return!0}var a;if(r7&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!gs(r.value[1],t.get(r.value[0])))return!1;return!0}if(o7&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(a7&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(n7&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!gs(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var i7=function(t,n){try{return gs(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function Iy(){const e=k.exports.useContext(ja);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function s7(){const e=nf(),t=Iy();return{...e,theme:t}}function l7(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function u7(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function c7(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return l7(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return u7(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function d7(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=k.exports.useMemo(()=>b5(n),[n]);return X(k9,{theme:o,children:[T(f7,{root:t}),r]})}function f7({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return T(zl,{styles:n=>({[t]:n.__cssVars})})}q9({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function p7(){const{colorMode:e}=nf();return T(zl,{styles:t=>{const n=by(t,"styles.global"),r=Sy(n,{theme:t,colorMode:e});return r?Jh(r)(t):void 0}})}var m7=new Set([...v5,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),g7=new Set(["htmlWidth","htmlHeight","htmlSize"]);function h7(e){return g7.has(e)||!m7.has(e)}var y7=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,s=vy(i,(d,f)=>S5(f)),l=Sy(e,t),u=Object.assign({},o,l,wy(s),a),c=Jh(u)(t.theme);return r?[c,r]:c};function Nu(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=h7);const o=y7({baseStyle:n}),a=Rc(e,r)(o);return M.forwardRef(function(l,u){const{colorMode:c,forced:d}=nf();return M.createElement(a,{ref:u,"data-theme":d?c:void 0,...l})})}function L(e){return k.exports.forwardRef(e)}function Ry(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=s7(),i=e?by(o,`components.${e}`):void 0,s=n||i,l=nn({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},wy(A9(r,["children"]))),u=k.exports.useRef({});if(s){const f=q5(s)(l);i7(u.current,f)||(u.current=f)}return u.current}function lt(e,t={}){return Ry(e,t)}function Ro(e,t={}){return Ry(e,t)}function b7(){const e=new Map;return new Proxy(Nu,{apply(t,n,r){return Nu(...r)},get(t,n){return e.has(n)||e.set(n,Nu(n)),e.get(n)}})}var N=b7();function v7(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function dn(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a}=e,i=k.exports.createContext(void 0);i.displayName=t;function s(){var l;const u=k.exports.useContext(i);if(!u&&n){const c=new Error(a!=null?a:v7(r,o));throw c.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,c,s),c}return u}return[i.Provider,s,i]}function w7(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function jc(...e){return t=>{e.forEach(n=>{w7(n,t)})}}function S7(...e){return k.exports.useMemo(()=>jc(...e),e)}var ke=(...e)=>e.filter(Boolean).join(" "),u0={path:X("g",{stroke:"currentColor",strokeWidth:"1.5",children:[T("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),T("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),T("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Rr=L((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=ke("chakra-icon",s),d=lt("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},p={ref:t,focusable:a,className:c,__css:f},b=r!=null?r:u0.viewBox;if(n&&typeof n!="string")return M.createElement(N.svg,{as:n,...p,...u});const v=i!=null?i:u0.path;return M.createElement(N.svg,{verticalAlign:"middle",viewBox:b,...p,...u},v)});Rr.displayName="Icon";function x7(e,t=[]){const n=k.exports.useRef(e);return k.exports.useEffect(()=>{n.current=e}),k.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}const bf=k.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ll=k.exports.createContext({});function C7(){return k.exports.useContext(Ll).visualElement}const zo=k.exports.createContext(null),zr=typeof document<"u",Rs=zr?k.exports.useLayoutEffect:k.exports.useEffect,zy=k.exports.createContext({strict:!1});function k7(e,t,n,r){const o=C7(),a=k.exports.useContext(zy),i=k.exports.useContext(zo),s=k.exports.useContext(bf).reducedMotion,l=k.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return Rs(()=>{u&&u.render()}),k.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Rs(()=>()=>u&&u.notify("Unmount"),[]),u}function Wr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function _7(e,t,n){return k.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Wr(n)&&(n.current=r))},[t])}function Da(e){return typeof e=="string"||Array.isArray(e)}function jl(e){return typeof e=="object"&&typeof e.start=="function"}const T7=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function Nl(e){return jl(e.animate)||T7.some(t=>Da(e[t]))}function My(e){return Boolean(Nl(e)||e.variants)}function F7(e,t){if(Nl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Da(n)?n:void 0,animate:Da(r)?r:void 0}}return e.inherit!==!1?t:{}}function A7(e){const{initial:t,animate:n}=F7(e,k.exports.useContext(Ll));return k.exports.useMemo(()=>({initial:t,animate:n}),[c0(t),c0(n)])}function c0(e){return Array.isArray(e)?e.join(" "):e}const gn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),$a={measureLayout:gn(["layout","layoutId","drag"]),animation:gn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:gn(["exit"]),drag:gn(["drag","dragControls"]),focus:gn(["whileFocus"]),hover:gn(["whileHover","onHoverStart","onHoverEnd"]),tap:gn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:gn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:gn(["whileInView","onViewportEnter","onViewportLeave"])};function E7(e){for(const t in e)t==="projectionNodeConstructor"?$a.projectionNodeConstructor=e[t]:$a[t].Component=e[t]}function Bl(e){const t=k.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const ha={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let P7=1;function q7(){return Bl(()=>{if(ha.hasEverUpdated)return P7++})}const vf=k.exports.createContext({});class I7 extends M.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Vy=k.exports.createContext({}),R7=Symbol.for("motionComponentSymbol");function z7({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&E7(e);function i(l,u){const c={...k.exports.useContext(bf),...l,layoutId:M7(l)},{isStatic:d}=c;let f=null;const p=A7(l),b=d?void 0:q7(),v=o(l,d);if(!d&&zr){p.visualElement=k7(a,v,c,t);const C=k.exports.useContext(zy).strict,h=k.exports.useContext(Vy);p.visualElement&&(f=p.visualElement.loadFeatures(c,C,e,b,n||$a.projectionNodeConstructor,h))}return X(I7,{visualElement:p.visualElement,props:c,children:[f,T(Ll.Provider,{value:p,children:r(a,l,b,_7(v,p.visualElement,u),v,d,p.visualElement)})]})}const s=k.exports.forwardRef(i);return s[R7]=a,s}function M7({layoutId:e}){const t=k.exports.useContext(vf).id;return t&&e!==void 0?t+"-"+e:e}function V7(e){function t(r,o={}){return z7(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const L7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","text","tspan","use","view"];function wf(e){return typeof e!="string"||e.includes("-")?!1:!!(L7.indexOf(e)>-1||/[A-Z]/.test(e))}const zs={};function j7(e){Object.assign(zs,e)}const Ms=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mo=new Set(Ms);function Ly(e,{layout:t,layoutId:n}){return Mo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!zs[e]||e==="opacity")}const cn=e=>!!(e!=null&&e.getVelocity),N7={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},B7=(e,t)=>Ms.indexOf(e)-Ms.indexOf(t);function O7({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(B7);for(const s of t)i+=`${N7[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function jy(e){return e.startsWith("--")}const D7=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ny=(e,t)=>n=>Math.max(Math.min(n,t),e),ya=e=>e%1?Number(e.toFixed(5)):e,Wa=/(-)?([\d]*\.?[\d])+/g,Nc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function pi(e){return typeof e=="string"}const Mr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ba=Object.assign(Object.assign({},Mr),{transform:Ny(0,1)}),Bi=Object.assign(Object.assign({},Mr),{default:1}),mi=e=>({test:t=>pi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),zn=mi("deg"),sn=mi("%"),O=mi("px"),W7=mi("vh"),H7=mi("vw"),d0=Object.assign(Object.assign({},sn),{parse:e=>sn.parse(e)/100,transform:e=>sn.transform(e*100)}),Sf=(e,t)=>n=>Boolean(pi(n)&&$7.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),By=(e,t,n)=>r=>{if(!pi(r))return r;const[o,a,i,s]=r.match(Wa);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},Hr={test:Sf("hsl","hue"),parse:By("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+sn.transform(ya(t))+", "+sn.transform(ya(n))+", "+ya(ba.transform(r))+")"},U7=Ny(0,255),Bu=Object.assign(Object.assign({},Mr),{transform:e=>Math.round(U7(e))}),br={test:Sf("rgb","red"),parse:By("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Bu.transform(e)+", "+Bu.transform(t)+", "+Bu.transform(n)+", "+ya(ba.transform(r))+")"};function G7(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Bc={test:Sf("#"),parse:G7,transform:br.transform},Ke={test:e=>br.test(e)||Bc.test(e)||Hr.test(e),parse:e=>br.test(e)?br.parse(e):Hr.test(e)?Hr.parse(e):Bc.parse(e),transform:e=>pi(e)?e:e.hasOwnProperty("red")?br.transform(e):Hr.transform(e)},Oy="${c}",Dy="${n}";function K7(e){var t,n,r,o;return isNaN(e)&&pi(e)&&((n=(t=e.match(Wa))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(Nc))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function $y(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(Nc);r&&(n=r.length,e=e.replace(Nc,Oy),t.push(...r.map(Ke.parse)));const o=e.match(Wa);return o&&(e=e.replace(Wa,Dy),t.push(...o.map(Mr.parse))),{values:t,numColors:n,tokenised:e}}function Wy(e){return $y(e).values}function Hy(e){const{values:t,numColors:n,tokenised:r}=$y(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?Oy:Dy,s<n?Ke.transform(a[s]):ya(a[s]));return i}}const Y7=e=>typeof e=="number"?0:e;function Z7(e){const t=Wy(e);return Hy(e)(t.map(Y7))}const kn={test:K7,parse:Wy,createTransformer:Hy,getAnimatableNone:Z7},X7=new Set(["brightness","contrast","saturate","opacity"]);function Q7(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Wa)||[];if(!r)return e;const o=n.replace(r,"");let a=X7.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const J7=/([a-z-]*)\(.*?\)/g,Oc=Object.assign(Object.assign({},kn),{getAnimatableNone:e=>{const t=e.match(J7);return t?t.map(Q7).join(" "):e}}),f0={...Mr,transform:Math.round},Uy={borderWidth:O,borderTopWidth:O,borderRightWidth:O,borderBottomWidth:O,borderLeftWidth:O,borderRadius:O,radius:O,borderTopLeftRadius:O,borderTopRightRadius:O,borderBottomRightRadius:O,borderBottomLeftRadius:O,width:O,maxWidth:O,height:O,maxHeight:O,size:O,top:O,right:O,bottom:O,left:O,padding:O,paddingTop:O,paddingRight:O,paddingBottom:O,paddingLeft:O,margin:O,marginTop:O,marginRight:O,marginBottom:O,marginLeft:O,rotate:zn,rotateX:zn,rotateY:zn,rotateZ:zn,scale:Bi,scaleX:Bi,scaleY:Bi,scaleZ:Bi,skew:zn,skewX:zn,skewY:zn,distance:O,translateX:O,translateY:O,translateZ:O,x:O,y:O,z:O,perspective:O,transformPerspective:O,opacity:ba,originX:d0,originY:d0,originZ:O,zIndex:f0,fillOpacity:ba,strokeOpacity:ba,numOctaves:f0};function xf(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(jy(f)){a[f]=p;continue}const b=Uy[f],v=D7(p,b);if(Mo.has(f)){if(u=!0,i[f]=v,s.push(f),!d)continue;p!==(b.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=O7(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:b=0}=l;o.transformOrigin=`${f} ${p} ${b}`}}const Cf=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function Gy(e,t,n){for(const r in t)!cn(t[r])&&!Ly(r,n)&&(e[r]=t[r])}function ek({transformTemplate:e},t,n){return k.exports.useMemo(()=>{const r=Cf();return xf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function tk(e,t,n){const r=e.style||{},o={};return Gy(o,r,e),Object.assign(o,ek(e,t,n)),e.transformValues?e.transformValues(o):o}function nk(e,t,n){const r={},o=tk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const rk=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],ok=["whileTap","onTap","onTapStart","onTapCancel"],ak=["onPan","onPanStart","onPanSessionStart","onPanEnd"],ik=["whileInView","onViewportEnter","onViewportLeave","viewport"],sk=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...ik,...ok,...rk,...ak]);function Vs(e){return sk.has(e)}let Ky=e=>!Vs(e);function lk(e){!e||(Ky=t=>t.startsWith("on")?!Vs(t):e(t))}try{lk(require("@emotion/is-prop-valid").default)}catch{}function uk(e,t,n){const r={};for(const o in e)(Ky(o)||n===!0&&Vs(o)||!t&&!Vs(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function p0(e,t,n){return typeof e=="string"?e:O.transform(t+n*e)}function ck(e,t,n){const r=p0(t,e.x,e.width),o=p0(n,e.y,e.height);return`${r} ${o}`}const dk={offset:"stroke-dashoffset",array:"stroke-dasharray"},fk={offset:"strokeDashoffset",array:"strokeDasharray"};function pk(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?dk:fk;e[a.offset]=O.transform(-r);const i=O.transform(t),s=O.transform(n);e[a.array]=`${i} ${s}`}function kf(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c){xf(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:p}=e;d.transform&&(p&&(f.transform=d.transform),delete d.transform),p&&(r!==void 0||o!==void 0||f.transform)&&(f.transformOrigin=ck(p,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),a!==void 0&&pk(d,a,i,s,!1)}const Yy=()=>({...Cf(),attrs:{}});function mk(e,t){const n=k.exports.useMemo(()=>{const r=Yy();return kf(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};Gy(r,e.style,e),n.style={...r,...n.style}}return n}function gk(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(wf(n)?mk:nk)(r,i,s),d={...uk(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),k.exports.createElement(n,d)}}const Zy=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function Xy(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Qy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function Jy(e,t,n,r){Xy(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Qy.has(o)?o:Zy(o),t.attrs[o])}function _f(e){const{style:t}=e,n={};for(const r in t)(cn(t[r])||Ly(r,e))&&(n[r]=t[r]);return n}function e1(e){const t=_f(e);for(const n in e)if(cn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function Tf(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const Ha=e=>Array.isArray(e),hk=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),t1=e=>Ha(e)?e[e.length-1]||0:e;function hs(e){const t=cn(e)?e.get():e;return hk(t)?t.toValue():t}function yk({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:bk(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const n1=e=>(t,n)=>{const r=k.exports.useContext(Ll),o=k.exports.useContext(zo),a=()=>yk(e,t,r,o);return n?a():Bl(a)};function bk(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=hs(a[f]);let{initial:i,animate:s}=e;const l=Nl(e),u=My(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!jl(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const b=Tf(e,p);if(!b)return;const{transitionEnd:v,transition:C,...h}=b;for(const m in h){let g=h[m];if(Array.isArray(g)){const x=c?g.length-1:0;g=g[x]}g!==null&&(o[m]=g)}for(const m in v)o[m]=v[m]}),o}const vk={useVisualState:n1({scrapeMotionValuesFromProps:e1,createRenderState:Yy,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}kf(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),Jy(t,n)}})},wk={useVisualState:n1({scrapeMotionValuesFromProps:_f,createRenderState:Cf})};function Sk(e,{forwardMotionProps:t=!1},n,r,o){return{...wf(e)?vk:wk,preloadedFeatures:n,useRender:gk(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var se;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(se||(se={}));function Ol(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Dc(e,t,n,r){k.exports.useEffect(()=>{const o=e.current;if(n&&o)return Ol(o,t,n,r)},[e,t,n,r])}function xk({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(se.Focus,!0)},o=()=>{n&&n.setActive(se.Focus,!1)};Dc(t,"focus",e?r:void 0),Dc(t,"blur",e?o:void 0)}function r1(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function o1(e){return!!e.touches}function Ck(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const kk={pageX:0,pageY:0};function _k(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||kk;return{x:r[t+"X"],y:r[t+"Y"]}}function Tk(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function Ff(e,t="page"){return{point:o1(e)?_k(e,t):Tk(e,t)}}const a1=(e,t=!1)=>{const n=r=>e(r,Ff(r));return t?Ck(n):n},Fk=()=>zr&&window.onpointerdown===null,Ak=()=>zr&&window.ontouchstart===null,Ek=()=>zr&&window.onmousedown===null,Pk={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},qk={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function i1(e){return Fk()?e:Ak()?qk[e]:Ek()?Pk[e]:e}function po(e,t,n,r){return Ol(e,i1(t),a1(n,t==="pointerdown"),r)}function Ls(e,t,n,r){return Dc(e,i1(t),n&&a1(n,t==="pointerdown"),r)}function s1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const m0=s1("dragHorizontal"),g0=s1("dragVertical");function l1(e){let t=!1;if(e==="y")t=g0();else if(e==="x")t=m0();else{const n=m0(),r=g0();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function u1(){const e=l1(!0);return e?(e(),!1):!0}function h0(e,t,n){return(r,o)=>{!r1(r)||u1()||(e.animationState&&e.animationState.setActive(se.Hover,t),n&&n(r,o))}}function Ik({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Ls(r,"pointerenter",e||n?h0(r,!0,e):void 0,{passive:!e}),Ls(r,"pointerleave",t||n?h0(r,!1,t):void 0,{passive:!t})}const c1=(e,t)=>t?e===t?!0:c1(e,t.parentElement):!1;function Af(e){return k.exports.useEffect(()=>()=>e(),[])}const Rk=(e,t)=>n=>t(e(n)),Dl=(...e)=>e.reduce(Rk);function zk({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=k.exports.useRef(!1),s=k.exports.useRef(null),l={passive:!(t||e||n||p)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(se.Tap,!1),!u1()}function d(b,v){!c()||(c1(o.current,b.target)?e&&e(b,v):n&&n(b,v))}function f(b,v){!c()||n&&n(b,v)}function p(b,v){u(),!i.current&&(i.current=!0,s.current=Dl(po(window,"pointerup",d,l),po(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(se.Tap,!0),t&&t(b,v))}Ls(o,"pointerdown",a?p:void 0,l),Af(u)}const Mk="production",d1=typeof process>"u"||process.env===void 0?Mk:"production",y0=new Set;function f1(e,t,n){e||y0.has(t)||(console.warn(t),n&&console.warn(n),y0.add(t))}const $c=new WeakMap,Ou=new WeakMap,Vk=e=>{const t=$c.get(e.target);t&&t(e)},Lk=e=>{e.forEach(Vk)};function jk({root:e,...t}){const n=e||document;Ou.has(n)||Ou.set(n,{});const r=Ou.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(Lk,{root:e,...t})),r[o]}function Nk(e,t,n){const r=jk(t);return $c.set(e,n),r.observe(e),()=>{$c.delete(e),r.unobserve(e)}}function Bk({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=k.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?$k:Dk)(i,a.current,e,o)}const Ok={some:0,all:1};function Dk(e,t,n,{root:r,margin:o,amount:a="some",once:i}){k.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:Ok[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(se.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return Nk(n.current,s,l)},[e,r,o,a])}function $k(e,t,n,{fallback:r=!0}){k.exports.useEffect(()=>{!e||!r||(d1!=="production"&&f1(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(se.InView,!0)}))},[e])}const On=e=>t=>(e(t),null),Wk={inView:On(Bk),tap:On(zk),focus:On(xk),hover:On(Ik)};function p1(){const e=k.exports.useContext(zo);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=k.exports.useId();return k.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function Hk(){return Uk(k.exports.useContext(zo))}function Uk(e){return e===null?!0:e.isPresent}function m1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const js=e=>e*1e3;var Gk=function(){},Ns=function(){};const Ef=e=>e,g1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Kk=1e-7,Yk=12;function Zk(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=g1(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>Kk&&++s<Yk);return i}function Xk(e,t,n,r){if(e===t&&n===r)return Ef;const o=a=>Zk(a,0,1,e,n);return a=>a===0||a===1?a:g1(o(a),t,r)}const Pf=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,qf=e=>t=>1-e(1-t),If=e=>e*e,Qk=qf(If),h1=Pf(If),y1=e=>1-Math.sin(Math.acos(e)),Rf=qf(y1),Jk=Pf(Rf),b1=(e=1.525)=>t=>t*t*((e+1)*t-e),zf=b1(),e_=qf(zf),t_=Pf(zf),n_=e=>{const t=b1(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},r_=n_(),o_={linear:Ef,easeIn:If,easeInOut:h1,easeOut:Qk,circIn:y1,circInOut:Jk,circOut:Rf,backIn:zf,backInOut:t_,backOut:e_,anticipate:r_},b0=e=>{if(Array.isArray(e)){Ns(e.length===4);const[t,n,r,o]=e;return Xk(t,n,r,o)}else if(typeof e=="string")return o_[e];return e},a_=e=>Array.isArray(e)&&typeof e[0]!="number",v0=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&kn.test(t)&&!t.startsWith("url(")),ur=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Oi=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Du=()=>({type:"keyframes",ease:"linear",duration:.3}),i_=e=>({type:"keyframes",duration:.8,values:e}),w0={x:ur,y:ur,z:ur,rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scaleX:Oi,scaleY:Oi,scale:Oi,opacity:Du,backgroundColor:Du,color:Du,default:Oi},s_=(e,t)=>{let n;return Ha(t)?n=i_:n=w0[e]||w0.default,{to:t,...n(t)}},l_={...Uy,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:Oc,WebkitFilter:Oc},Mf=e=>l_[e];function Vf(e,t){var n;let r=Mf(e);return r!==Oc&&(r=kn),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const u_={current:!1},v1=1/60*1e3,c_=typeof performance<"u"?()=>performance.now():()=>Date.now(),w1=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(c_()),v1);function d_(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const f_=40;let Wc=!0,Ua=!1,Hc=!1;const mo={delta:0,timestamp:0},gi=["read","update","preRender","render","postRender"],$l=gi.reduce((e,t)=>(e[t]=d_(()=>Ua=!0),e),{}),At=gi.reduce((e,t)=>{const n=$l[t];return e[t]=(r,o=!1,a=!1)=>(Ua||m_(),n.schedule(r,o,a)),e},{}),Qn=gi.reduce((e,t)=>(e[t]=$l[t].cancel,e),{}),$u=gi.reduce((e,t)=>(e[t]=()=>$l[t].process(mo),e),{}),p_=e=>$l[e].process(mo),S1=e=>{Ua=!1,mo.delta=Wc?v1:Math.max(Math.min(e-mo.timestamp,f_),1),mo.timestamp=e,Hc=!0,gi.forEach(p_),Hc=!1,Ua&&(Wc=!1,w1(S1))},m_=()=>{Ua=!0,Wc=!0,Hc||w1(S1)},Bs=()=>mo;function x1(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(Qn.read(r),e(a-t))};return At.read(r,!0),()=>Qn.read(r)}const Os=(e,t,n)=>Math.min(Math.max(n,e),t),Se=(e,t,n)=>-n*e+n*t+e;function Wu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function g_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Wu(l,s,e+1/3),a=Wu(l,s,e),i=Wu(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const Hu=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},h_=[Bc,br,Hr],y_=e=>h_.find(t=>t.test(e));function S0(e){const t=y_(e);let n=t.parse(e);return t===Hr&&(n=g_(n)),n}const C1=(e,t)=>{const n=S0(e),r=S0(t),o={...n};return a=>(o.red=Hu(n.red,r.red,a),o.green=Hu(n.green,r.green,a),o.blue=Hu(n.blue,r.blue,a),o.alpha=Se(n.alpha,r.alpha,a),br.transform(o))};function k1(e,t){return typeof e=="number"?n=>Se(e,t,n):Ke.test(e)?C1(e,t):T1(e,t)}const _1=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>k1(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},b_=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=k1(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function x0(e){const t=kn.parse(e),n=t.length;let r=0,o=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:o++;return{parsed:t,numNumbers:r,numColors:o}}const T1=(e,t)=>{const n=kn.createTransformer(t),r=x0(e),o=x0(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Dl(_1(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},Ds=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},C0=(e,t)=>n=>Se(e,t,n);function v_(e){return typeof e=="number"?C0:typeof e=="string"?Ke.test(e)?C1:T1:Array.isArray(e)?_1:typeof e=="object"?b_:C0}function w_(e,t,n){const r=[],o=n||v_(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=Dl(l,s)}r.push(s)}return r}function F1(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Ns(a===t.length),Ns(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=w_(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Ds(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Os(e[0],e[a-1],u)):l}function S_(e,t){return e.map(()=>t||h1).splice(0,e.length-1)}function x_(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function C_(e,t){return e.map(n=>n*t)}function k_({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],s=C_(r&&r.length===i.length?r:x_(i),o);function l(){return F1(s,i,{ease:Array.isArray(n)?n:S_(i,n)})}let u=l();return{next:c=>(a.value=u(c),a.done=c>=o,a),flipTarget:()=>{i.reverse(),u=l()}}}const Uu=.001,__=.01,k0=10,T_=.05,F_=1;function A_({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;Gk(e<=k0*1e3);let i=1-t;i=Os(T_,F_,i),e=Os(__,k0,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,p=Uc(u,i),b=Math.exp(-d);return Uu-f/p*b},a=u=>{const d=u*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(u,2)*e,b=Math.exp(-d),v=Uc(Math.pow(u,2),i);return(-o(u)+Uu>0?-1:1)*((f-p)*b)/v}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Uu+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=P_(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const E_=12;function P_(e,t,n){let r=n;for(let o=1;o<E_;o++)r=r-e(r)/t(r);return r}function Uc(e,t){return e*Math.sqrt(1-t*t)}const q_=["duration","bounce"],I_=["stiffness","damping","mass"];function _0(e,t){return t.some(n=>e[n]!==void 0)}function R_(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!_0(e,I_)&&_0(e,q_)){const n=A_(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function A1({from:e=0,to:t=1,restSpeed:n=2,restDelta:r=.01,...o}){const a={done:!1,value:e};let{stiffness:i,damping:s,mass:l,velocity:u,duration:c,isResolvedFromDuration:d}=R_(o),f=T0,p=T0;function b(){const v=u?-(u/1e3):0,C=t-e,h=s/(2*Math.sqrt(i*l)),m=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),h<1){const g=Uc(m,h);f=x=>{const F=Math.exp(-h*m*x);return t-F*((v+h*m*C)/g*Math.sin(g*x)+C*Math.cos(g*x))},p=x=>{const F=Math.exp(-h*m*x);return h*m*F*(Math.sin(g*x)*(v+h*m*C)/g+C*Math.cos(g*x))-F*(Math.cos(g*x)*(v+h*m*C)-g*C*Math.sin(g*x))}}else if(h===1)f=g=>t-Math.exp(-m*g)*(C+(v+m*C)*g);else{const g=m*Math.sqrt(h*h-1);f=x=>{const F=Math.exp(-h*m*x),E=Math.min(g*x,300);return t-F*((v+h*m*C)*Math.sinh(E)+g*C*Math.cosh(E))/g}}}return b(),{next:v=>{const C=f(v);if(d)a.done=v>=c;else{const h=p(v)*1e3,m=Math.abs(h)<=n,g=Math.abs(t-C)<=r;a.done=m&&g}return a.value=a.done?t:C,a},flipTarget:()=>{u=-u,[e,t]=[t,e],b()}}}A1.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const T0=e=>0;function z_({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let s=n*e;const l=t+s,u=a===void 0?l:a(l);return u!==l&&(s=u-t),{next:c=>{const d=-s*Math.exp(-c/r);return i.done=!(d>o||d<-o),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const M_={decay:z_,keyframes:k_,spring:A1};function E1(e,t,n=0){return e-t-n}function V_(e,t=0,n=0,r=!0){return r?E1(t+-e,t,n):t-(e-t)+n}function L_(e,t,n,r){return r?e>=t+n:e<=-n}const j_=e=>{const t=({delta:n})=>e(n);return{start:()=>At.update(t,!0),stop:()=>Qn.update(t)}};function P1({from:e,autoplay:t=!0,driver:n=j_,elapsed:r=0,repeat:o=0,repeatType:a="loop",repeatDelay:i=0,onPlay:s,onStop:l,onComplete:u,onRepeat:c,onUpdate:d,type:f="keyframes",...p}){var b,v;let{to:C}=p,h,m=0,g=p.duration,x,F=!1,E=!0,A;const q=M_[Array.isArray(C)?"keyframes":f];!((v=(b=q).needsInterpolation)===null||v===void 0)&&v.call(b,e,C)&&(A=F1([0,100],[e,C],{clamp:!1}),e=0,C=100);const B=q({...p,from:e,to:C});function V(){m++,a==="reverse"?(E=m%2===0,r=V_(r,g,i,E)):(r=E1(r,g,i),a==="mirror"&&B.flipTarget()),F=!1,c&&c()}function _e(){h.stop(),u&&u()}function Le(Ht){if(E||(Ht=-Ht),r+=Ht,!F){const Ut=B.next(Math.max(0,r));x=Ut.value,A&&(x=A(x)),F=E?Ut.done:r<=0}d==null||d(x),F&&(m===0&&(g!=null||(g=r)),m<o?L_(r,g,i,E)&&V():_e())}function xt(){s==null||s(),h=n(Le),h.start()}return t&&xt(),{stop:()=>{l==null||l(),h.stop()}}}function q1(e,t){return t?e*(1e3/t):0}function N_({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:p}){let b;function v(g){return n!==void 0&&g<n||r!==void 0&&g>r}function C(g){return n===void 0?r:r===void 0||Math.abs(n-g)<Math.abs(r-g)?n:r}function h(g){b==null||b.stop(),b=P1({...g,driver:c,onUpdate:x=>{var F;d==null||d(x),(F=g.onUpdate)===null||F===void 0||F.call(g,x)},onComplete:f,onStop:p})}function m(g){h({type:"spring",stiffness:i,damping:s,restDelta:l,...g})}if(v(e))m({from:e,velocity:t,to:C(e)});else{let g=o*t+e;typeof u<"u"&&(g=u(g));const x=C(g),F=x===n?-1:1;let E,A;const q=B=>{E=A,A=B,t=q1(B-E,Bs().delta),(F===1&&B>x||F===-1&&B<x)&&m({from:B,to:x,velocity:t})};h({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:v(g)?q:void 0})}return{stop:()=>b==null?void 0:b.stop()}}function B_({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function O_({ease:e,times:t,yoyo:n,flip:r,loop:o,...a}){const i={...a};return t&&(i.offset=t),a.duration&&(i.duration=js(a.duration)),a.repeatDelay&&(i.repeatDelay=js(a.repeatDelay)),e&&(i.ease=a_(e)?e.map(b0):b0(e)),a.type==="tween"&&(i.type="keyframes"),(n||o||r)&&(n?i.repeatType="reverse":o?i.repeatType="loop":r&&(i.repeatType="mirror"),i.repeat=o||n||r||a.repeat),a.type!=="spring"&&(i.type="keyframes"),i}function D_(e,t){var n,r;return(r=(n=(Lf(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function $_(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function W_(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),$_(t),B_(e)||(e={...e,...s_(n,t.to)}),{...t,...O_(e)}}function H_(e,t,n,r,o){const a=Lf(r,e)||{};let i=a.from!==void 0?a.from:t.get();const s=v0(e,n);i==="none"&&s&&typeof n=="string"?i=Vf(e,n):F0(i)&&typeof n=="string"?i=A0(n):!Array.isArray(n)&&F0(n)&&typeof i=="string"&&(n=A0(i));const l=v0(e,i);function u(){const d={from:i,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?N_({...d,...a}):P1({...W_(a,d,e),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{d.onComplete(),a.onComplete&&a.onComplete()}})}function c(){const d=t1(n);return t.set(d),o(),a.onUpdate&&a.onUpdate(d),a.onComplete&&a.onComplete(),{stop:()=>{}}}return!l||!s||a.type===!1?c:u}function F0(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function A0(e){return typeof e=="number"?0:Vf("",e)}function Lf(e,t){return e[t]||e.default||e}function jf(e,t,n,r={}){return u_.current&&(r={type:!1}),t.start(o=>{let a;const i=H_(e,t,n,r,o),s=D_(r,e),l=()=>a=i();let u;return s?u=x1(l,js(s)):l(),()=>{u&&u(),a&&a.stop()}})}const U_=e=>/^\-?\d*\.?\d+$/.test(e),G_=e=>/^0[^.\s]+$/.test(e);function Nf(e,t){e.indexOf(t)===-1&&e.push(t)}function Bf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class va{constructor(){this.subscriptions=[]}add(t){return Nf(this.subscriptions,t),()=>Bf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const K_=e=>!isNaN(parseFloat(e));class Y_{constructor(t){this.version="7.6.18",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new va,this.velocityUpdateSubscribers=new va,this.renderSubscribers=new va,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:a}=Bs();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,At.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>At.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=K_(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?q1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function Co(e){return new Y_(e)}const I1=e=>t=>t.test(e),Z_={test:e=>e==="auto",parse:e=>e},R1=[Mr,O,sn,zn,H7,W7,Z_],Ko=e=>R1.find(I1(e)),X_=[...R1,Ke,kn],Q_=e=>X_.find(I1(e));function J_(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function eT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Wl(e,t,n){const r=e.getProps();return Tf(r,t,n!==void 0?n:r.custom,J_(e),eT(e))}function tT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Co(n))}function nT(e,t){const n=Wl(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=t1(a[i]);tT(e,i,s)}}function rT(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(U_(c)||G_(c))?c=parseFloat(c):!Q_(c)&&kn.test(u)&&(c=Vf(l,u)),e.addValue(l,Co(c)),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function oT(e,t){return t?(t[e]||t.default||t).from:void 0}function aT(e,t,n){var r;const o={};for(const a in e){const i=oT(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function $s(e){return Boolean(cn(e)&&e.add)}function iT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Gc(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Gc(e,t,n);else{const o=typeof t=="function"?Wl(e,t,n.custom):t;r=z1(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function Gc(e,t,n={}){var r;const o=Wl(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>z1(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return sT(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function z1(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const p=e.getValue(f),b=l[f];if(!p||b===void 0||d&&uT(d,f))continue;let v={delay:n,...i};e.shouldReduceMotion&&Mo.has(f)&&(v={...v,type:!1,delay:0});let C=jf(f,p,b,v);$s(u)&&(u.add(f),C=C.then(()=>u.remove(f))),c.push(C)}return Promise.all(c).then(()=>{s&&nT(e,s)})}function sT(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(lT).forEach((u,c)=>{i.push(Gc(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function lT(e,t){return e.sortNodePosition(t)}function uT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Of=[se.Animate,se.InView,se.Focus,se.Hover,se.Tap,se.Drag,se.Exit],cT=[...Of].reverse(),dT=Of.length;function fT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>iT(e,n,r)))}function pT(e){let t=fT(e);const n=gT();let r=!0;const o=(l,u)=>{const c=Wl(e,u);if(c){const{transition:d,transitionEnd:f,...p}=c;l={...l,...p,...f}}return l};function a(l){t=l(e)}function i(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],b=new Set;let v={},C=1/0;for(let m=0;m<dT;m++){const g=cT[m],x=n[g],F=(c=d[g])!==null&&c!==void 0?c:f[g],E=Da(F),A=g===u?x.isActive:null;A===!1&&(C=m);let q=F===f[g]&&F!==d[g]&&E;if(q&&r&&e.manuallyAnimateOnMount&&(q=!1),x.protectedKeys={...v},!x.isActive&&A===null||!F&&!x.prevProp||jl(F)||typeof F=="boolean")continue;const B=mT(x.prevProp,F);let V=B||g===u&&x.isActive&&!q&&E||m>C&&E;const _e=Array.isArray(F)?F:[F];let Le=_e.reduce(o,{});A===!1&&(Le={});const{prevResolvedValues:xt={}}=x,Ht={...xt,...Le},Ut=xe=>{V=!0,b.delete(xe),x.needsAnimating[xe]=!0};for(const xe in Ht){const It=Le[xe],I=xt[xe];v.hasOwnProperty(xe)||(It!==I?Ha(It)&&Ha(I)?!m1(It,I)||B?Ut(xe):x.protectedKeys[xe]=!0:It!==void 0?Ut(xe):b.add(xe):It!==void 0&&b.has(xe)?Ut(xe):x.protectedKeys[xe]=!0)}x.prevProp=F,x.prevResolvedValues=Le,x.isActive&&(v={...v,...Le}),r&&e.blockInitialAnimation&&(V=!1),V&&!q&&p.push(..._e.map(xe=>({animation:xe,options:{type:g,...l}})))}if(b.size){const m={};b.forEach(g=>{const x=e.getBaseTarget(g);x!==void 0&&(m[g]=x)}),p.push({animation:m})}let h=Boolean(p.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(h=!1),r=!1,h?t(p):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var b;return(b=p.animationState)===null||b===void 0?void 0:b.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function mT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!m1(t,e):!1}function cr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gT(){return{[se.Animate]:cr(!0),[se.InView]:cr(),[se.Hover]:cr(),[se.Tap]:cr(),[se.Drag]:cr(),[se.Focus]:cr(),[se.Exit]:cr()}}const hT={animation:On(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=pT(e)),jl(t)&&k.exports.useEffect(()=>t.subscribe(e),[t])}),exit:On(e=>{const{custom:t,visualElement:n}=e,[r,o]=p1(),a=k.exports.useContext(zo);k.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(se.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},E0=(e,t)=>Math.abs(e-t);function yT(e,t){const n=E0(e.x,t.x),r=E0(e.y,t.y);return Math.sqrt(n**2+r**2)}class M1{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Ku(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=yT(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:p}=Bs();this.history.push({...f,timestamp:p});const{onStart:b,onMove:v}=this.handlers;c||(b&&b(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Gu(c,this.transformPagePoint),r1(u)&&u.buttons===0){this.handlePointerUp(u,c);return}At.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,p=Ku(Gu(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,p),f&&f(u,p)},o1(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=Ff(t),a=Gu(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=Bs();this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Ku(a,this.history)),this.removeListeners=Dl(po(window,"pointermove",this.handlePointerMove),po(window,"pointerup",this.handlePointerUp),po(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qn.update(this.updatePoint)}}function Gu(e,t){return t?{point:t(e.point)}:e}function P0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ku({point:e},t){return{point:e,delta:P0(e,V1(t)),offset:P0(e,bT(t)),velocity:vT(t,.1)}}function bT(e){return e[0]}function V1(e){return e[e.length-1]}function vT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=V1(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>js(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function yt(e){return e.max-e.min}function Kc(e,t=0,n=.01){return Math.abs(e-t)<=n}function q0(e,t,n,r=.5){e.origin=r,e.originPoint=Se(t.min,t.max,e.origin),e.scale=yt(n)/yt(t),(Kc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Se(n.min,n.max,e.origin)-e.originPoint,(Kc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function wa(e,t,n,r){q0(e.x,t.x,n.x,r==null?void 0:r.originX),q0(e.y,t.y,n.y,r==null?void 0:r.originY)}function I0(e,t,n){e.min=n.min+t.min,e.max=e.min+yt(t)}function wT(e,t,n){I0(e.x,t.x,n.x),I0(e.y,t.y,n.y)}function R0(e,t,n){e.min=t.min-n.min,e.max=e.min+yt(t)}function Sa(e,t,n){R0(e.x,t.x,n.x),R0(e.y,t.y,n.y)}function ST(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Se(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Se(n,e,r.max):Math.min(e,n)),e}function z0(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function xT(e,{top:t,left:n,bottom:r,right:o}){return{x:z0(e.x,n,o),y:z0(e.y,t,r)}}function M0(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function CT(e,t){return{x:M0(e.x,t.x),y:M0(e.y,t.y)}}function kT(e,t){let n=.5;const r=yt(e),o=yt(t);return o>r?n=Ds(t.min,t.max-r,e.min):r>o&&(n=Ds(e.min,e.max-o,t.min)),Os(0,1,n)}function _T(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Yc=.35;function TT(e=Yc){return e===!1?e=0:e===!0&&(e=Yc),{x:V0(e,"left","right"),y:V0(e,"top","bottom")}}function V0(e,t,n){return{min:L0(e,t),max:L0(e,n)}}function L0(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const j0=()=>({translate:0,scale:1,origin:0,originPoint:0}),xa=()=>({x:j0(),y:j0()}),N0=()=>({min:0,max:0}),Ee=()=>({x:N0(),y:N0()});function Zt(e){return[e("x"),e("y")]}function L1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function FT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function AT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Yu(e){return e===void 0||e===1}function Zc({scale:e,scaleX:t,scaleY:n}){return!Yu(e)||!Yu(t)||!Yu(n)}function dr(e){return Zc(e)||j1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function j1(e){return B0(e.x)||B0(e.y)}function B0(e){return e&&e!=="0%"}function Ws(e,t,n){const r=e-n,o=t*r;return n+o}function O0(e,t,n,r,o){return o!==void 0&&(e=Ws(e,o,r)),Ws(e,n,r)+t}function Xc(e,t=0,n=1,r,o){e.min=O0(e.min,t,n,r,o),e.max=O0(e.max,t,n,r,o)}function N1(e,{x:t,y:n}){Xc(e.x,t.translate,t.scale,t.originPoint),Xc(e.y,n.translate,n.scale,n.originPoint)}function ET(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ur(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,N1(e,l)),r&&dr(s.latestValues)&&Ur(e,s.latestValues));t.x=D0(t.x),t.y=D0(t.y)}function D0(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Mn(e,t){e.min=e.min+t,e.max=e.max+t}function $0(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=Se(e.min,e.max,a);Xc(e,t[n],t[r],i,t.scale)}const PT=["x","scaleX","originX"],qT=["y","scaleY","originY"];function Ur(e,t){$0(e.x,t,PT),$0(e.y,t,qT)}function B1(e,t){return L1(AT(e.getBoundingClientRect(),t))}function IT(e,t,n){const r=B1(e,n),{scroll:o}=t;return o&&(Mn(r.x,o.offset.x),Mn(r.y,o.offset.y)),r}const RT=new WeakMap;class zT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(Ff(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=l1(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zt(p=>{var b,v;let C=this.getAxisMotionValue(p).get()||0;if(sn.test(C)){const h=(v=(b=this.visualElement.projection)===null||b===void 0?void 0:b.layout)===null||v===void 0?void 0:v.layoutBox[p];h&&(C=yt(h)*(parseFloat(C)/100))}this.originPoint[p]=C}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(se.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:p}=l;if(c&&this.currentDirection===null){this.currentDirection=MT(p),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,p),this.updateAxis("y",l.point,p),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new M1(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(se.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Di(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=ST(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&Wr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=xT(r.layoutBox,t):this.constraints=!1,this.elastic=TT(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Zt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=_T(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Wr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=IT(r,o.root,this.visualElement.getTransformPagePoint());let i=CT(o.layout.layoutBox,a);if(n){const s=n(FT(i));this.hasMutatedConstraints=!!s,s&&(i=L1(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Zt(c=>{var d;if(!Di(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};i&&(f={min:0,max:0});const p=o?200:1e6,b=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return jf(t,r,0,n)}stopAnimation(){Zt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){Zt(n=>{const{drag:r}=this.getProps();if(!Di(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-Se(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Wr(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Zt(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=kT({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),Zt(s=>{if(!Di(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(Se(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;RT.set(this.visualElement,this);const n=this.visualElement.current,r=po(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();Wr(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=Ol(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Zt(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=Yc,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function Di(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function MT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function VT(e){const{dragControls:t,visualElement:n}=e,r=Bl(()=>new zT(n));k.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),k.exports.useEffect(()=>r.addListeners(),[r])}function LT({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=k.exports.useRef(null),{transformPagePoint:s}=k.exports.useContext(bf),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};k.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new M1(c,l,{transformPagePoint:s})}Ls(o,"pointerdown",a&&u),Af(()=>i.current&&i.current.end())}const jT={pan:On(LT),drag:On(VT)};function Qc(e){return typeof e=="string"&&e.startsWith("var(--")}const O1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function NT(e){const t=O1.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Jc(e,t,n=1){const[r,o]=NT(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():Qc(o)?Jc(o,t,n+1):o}function BT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!Qc(a))return;const i=Jc(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!Qc(a))continue;const i=Jc(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const OT=new Set(["width","height","top","left","right","bottom","x","y"]),D1=e=>OT.has(e),DT=e=>Object.keys(e).some(D1),$1=(e,t)=>{e.set(t,!1),e.set(t)},W0=e=>e===Mr||e===O;var H0;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(H0||(H0={}));const U0=(e,t)=>parseFloat(e.split(", ")[t]),G0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return U0(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?U0(a[1],e):0}},$T=new Set(["x","y","z"]),WT=Ms.filter(e=>!$T.has(e));function HT(e){const t=[];return WT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const K0={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:G0(4,13),y:G0(5,14)},UT=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=K0[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);$1(c,s[u]),e[u]=K0[u](l,a)}),e},GT=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(D1);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Ko(c);const f=t[l];let p;if(Ha(f)){const b=f.length,v=f[0]===null?1:0;c=f[v],d=Ko(c);for(let C=v;C<b;C++)p?Ns(Ko(f[C])===p):p=Ko(f[C])}else p=Ko(f);if(d!==p)if(W0(d)&&W0(p)){const b=u.get();typeof b=="string"&&u.set(parseFloat(b)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&p===O&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(p==null?void 0:p.transform)&&(c===0||f===0)?c===0?u.set(p.transform(c)):t[l]=d.transform(f):(i||(a=HT(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],$1(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=UT(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),zr&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function KT(e,t,n,r){return DT(t)?GT(e,t,n,r):{target:t,transitionEnd:r}}const YT=(e,t,n,r)=>{const o=BT(e,t,r);return t=o.target,r=o.transitionEnd,KT(e,t,n,r)},ed={current:null},W1={current:!1};function ZT(){if(W1.current=!0,!!zr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ed.current=e.matches;e.addListener(t),t()}else ed.current=!1}function XT(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(cn(a))e.addValue(o,a),$s(r)&&r.add(o);else if(cn(i))e.addValue(o,Co(a)),$s(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,Co(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const H1=Object.keys($a),QT=H1.length,Y0=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class JT{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>At.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=Nl(n),this.isVariantNode=My(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&cn(d)&&(d.set(i[c],!1),$s(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),W1.current||ZT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ed.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),Qn.update(this.notifyUpdate),Qn.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=Mo.has(t),o=n.onChange(i=>{this.latestValues[t]=i,this.props.onUpdate&&At.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<QT;l++){const u=H1[l],{isEnabled:c,Component:d}=$a[u];c(t)&&d&&s.push(k.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&Wr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<Y0.length;n++){const r=Y0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=XT(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<eF;a++){const i=U1[a],s=this.props[i];(Da(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Co(n),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Tf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!cn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new va),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const U1=["initial",...Of],eF=U1.length;class G1 extends JT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=aT(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){rT(this,r,i);const s=YT(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function tF(e){return window.getComputedStyle(e)}class nF extends G1{readValueFromInstance(t,n){if(Mo.has(n)){const r=Mf(n);return r&&r.default||0}else{const r=tF(t),o=(jy(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return B1(t,n)}build(t,n,r,o){xf(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return _f(t)}renderInstance(t,n,r,o){Xy(t,n,r,o)}}class rF extends G1{getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return Mo.has(n)?((r=Mf(n))===null||r===void 0?void 0:r.default)||0:(n=Qy.has(n)?n:Zy(n),t.getAttribute(n))}measureInstanceViewportBox(){return Ee()}scrapeMotionValuesFromProps(t){return e1(t)}build(t,n,r,o){kf(t,n,r,o.transformTemplate)}renderInstance(t,n,r,o){Jy(t,n,r,o)}}const oF=(e,t)=>wf(e)?new rF(t,{enableHardwareAcceleration:!1}):new nF(t,{enableHardwareAcceleration:!0});function Z0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Yo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(O.test(e))e=parseFloat(e);else return e;const n=Z0(e,t.target.x),r=Z0(e,t.target.y);return`${n}% ${r}%`}},X0="_$css",aF={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(O1,p=>(a.push(p),X0)));const i=kn.parse(e);if(i.length>5)return r;const s=kn.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=Se(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let p=0;f=f.replace(X0,()=>{const b=a[p];return p++,b})}return f}};class iF extends M.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;j7(lF),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),ha.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||At.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function sF(e){const[t,n]=p1(),r=k.exports.useContext(vf);return T(iF,{...e,layoutGroup:r,switchLayoutGroup:k.exports.useContext(Vy),isPresent:t,safeToRemove:n})}const lF={borderRadius:{...Yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Yo,borderTopRightRadius:Yo,borderBottomLeftRadius:Yo,borderBottomRightRadius:Yo,boxShadow:aF},uF={measureLayout:sF};function cF(e,t,n={}){const r=cn(e)?e:Co(e);return jf("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const K1=["TopLeft","TopRight","BottomLeft","BottomRight"],dF=K1.length,Q0=e=>typeof e=="string"?parseFloat(e):e,J0=e=>typeof e=="number"||O.test(e);function fF(e,t,n,r,o,a){var i,s,l,u;o?(e.opacity=Se(0,(i=n.opacity)!==null&&i!==void 0?i:1,pF(r)),e.opacityExit=Se((s=t.opacity)!==null&&s!==void 0?s:1,0,mF(r))):a&&(e.opacity=Se((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<dF;c++){const d=`border${K1[c]}Radius`;let f=eg(t,d),p=eg(n,d);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||J0(f)===J0(p)?(e[d]=Math.max(Se(Q0(f),Q0(p),r),0),(sn.test(p)||sn.test(f))&&(e[d]+="%")):e[d]=p}(t.rotate||n.rotate)&&(e.rotate=Se(t.rotate||0,n.rotate||0,r))}function eg(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const pF=Y1(0,.5,Rf),mF=Y1(.5,.95,Ef);function Y1(e,t,n){return r=>r<e?0:r>t?1:n(Ds(e,t,r))}function tg(e,t){e.min=t.min,e.max=t.max}function Mt(e,t){tg(e.x,t.x),tg(e.y,t.y)}function ng(e,t,n,r,o){return e-=t,e=Ws(e,1/n,r),o!==void 0&&(e=Ws(e,1/o,r)),e}function gF(e,t=0,n=1,r=.5,o,a=e,i=e){if(sn.test(t)&&(t=parseFloat(t),t=Se(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=Se(a.min,a.max,r);e===a&&(s-=t),e.min=ng(e.min,t,n,s,o),e.max=ng(e.max,t,n,s,o)}function rg(e,t,[n,r,o],a,i){gF(e,t[n],t[r],t[o],t.scale,a,i)}const hF=["x","scaleX","originX"],yF=["y","scaleY","originY"];function og(e,t,n,r){rg(e.x,t,hF,n==null?void 0:n.x,r==null?void 0:r.x),rg(e.y,t,yF,n==null?void 0:n.y,r==null?void 0:r.y)}function ag(e){return e.translate===0&&e.scale===1}function Z1(e){return ag(e.x)&&ag(e.y)}function X1(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function ig(e){return yt(e.x)/yt(e.y)}class bF{constructor(){this.members=[]}add(t){Nf(this.members,t),t.scheduleRender()}remove(t){if(Bf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function sg(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const vF=(e,t)=>e.depth-t.depth;class wF{constructor(){this.children=[],this.isDirty=!1}add(t){Nf(this.children,t),this.isDirty=!0}remove(t){Bf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(vF),this.isDirty=!1,this.children.forEach(t)}}const lg=["","X","Y","Z"],ug=1e3;let SF=0;function Q1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=SF++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(kF),this.nodes.forEach(FF),this.nodes.forEach(AF)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new wF)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new va),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=x1(p,250),ha.hasAnimatedSinceResize&&(ha.hasAnimatedSinceResize=!1,this.nodes.forEach(dg))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:b,layout:v})=>{var C,h,m,g,x;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const F=(h=(C=this.options.transition)!==null&&C!==void 0?C:d.getDefaultTransition())!==null&&h!==void 0?h:RF,{onLayoutAnimationStart:E,onLayoutAnimationComplete:A}=d.getProps(),q=!this.targetLayout||!X1(this.targetLayout,v)||b,B=!p&&b;if(((m=this.resumeFrom)===null||m===void 0?void 0:m.instance)||B||p&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,B);const V={...Lf(F,"layout"),onPlay:E,onComplete:A};d.shouldReduceMotion&&(V.delay=0,V.type=!1),this.startAnimation(V)}else!p&&this.animationProgress===0&&dg(this),this.isLead()&&((x=(g=this.options).onExitComplete)===null||x===void 0||x.call(g));this.targetLayout=v})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,Qn.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(EF),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const b=this.path[p];b.shouldResetTransform=!0,b.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cg);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(zF),this.potentialNodes.clear()),this.nodes.forEach(TF),this.nodes.forEach(xF),this.nodes.forEach(CF),this.clearAllSnapshots(),$u.update(),$u.preRender(),$u.render())}clearAllSnapshots(){this.nodes.forEach(_F),this.sharedNodes.forEach(PF)}scheduleUpdateProjection(){At.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!Z1(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||dr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),MF(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return Ee();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(Mn(s.x,l.offset.x),Mn(s.y,l.offset.y)),s}removeElementScroll(i){const s=Ee();Mt(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Mt(s,i);const{scroll:f}=this.root;f&&(Mn(s.x,-f.offset.x),Mn(s.y,-f.offset.y))}Mn(s.x,c.offset.x),Mn(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=Ee();Mt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ur(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),dr(c.latestValues)&&Ur(l,c.latestValues)}return dr(this.latestValues)&&Ur(l,this.latestValues),l}removeTransform(i){var s;const l=Ee();Mt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!dr(c.latestValues))continue;Zc(c.latestValues)&&c.updateSnapshot();const d=Ee(),f=c.measurePageBox();Mt(d,f),og(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return dr(this.latestValues)&&og(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),Sa(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),Mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ee(),this.targetWithTransforms=Ee()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?wT(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Mt(this.target,this.layout.layoutBox),N1(this.target,this.targetDelta)):Mt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),Sa(this.relativeTargetOrigin,this.target,c.target),Mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Zc(this.parent.latestValues)||j1(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;Mt(this.layoutCorrected,this.layout.layoutBox),ET(this.layoutCorrected,this.treeScale,this.path,c);const{target:b}=u;if(!b)return;this.projectionDelta||(this.projectionDelta=xa(),this.projectionDeltaWithTransform=xa());const v=this.treeScale.x,C=this.treeScale.y,h=this.projectionTransform;wa(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=sg(this.projectionDelta,this.treeScale),(this.projectionTransform!==h||this.treeScale.x!==v||this.treeScale.y!==C)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},p=xa();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const b=Ee(),v=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),C=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,h=Boolean(v&&!C&&this.options.crossfade===!0&&!this.path.some(IF));this.animationProgress=0,this.mixTargetDelta=m=>{var g;const x=m/1e3;fg(p.x,i.x,x),fg(p.y,i.y,x),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((g=this.relativeParent)===null||g===void 0?void 0:g.layout)&&(Sa(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),qF(this.relativeTarget,this.relativeTargetOrigin,b,x)),v&&(this.animationValues=f,fF(f,d,this.latestValues,x,h,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(Qn.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{ha.hasAnimatedSinceResize=!0,this.currentAnimation=cF(0,ug,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,ug),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&J1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ee();const d=yt(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=yt(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}Mt(s,l),Ur(s,c),wa(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new bF),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<lg.length;c++){const d="rotate"+lg[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=hs(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=hs(i.pointerEvents)||""),this.hasProjected&&!dr(this.latestValues)&&(C.transform=d?d({},""):"none",this.hasProjected=!1),C}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=sg(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:b,y:v}=this.projectionDelta;c.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const C in zs){if(p[C]===void 0)continue;const{correct:h,applyTo:m}=zs[C],g=h(p[C],f);if(m){const x=m.length;for(let F=0;F<x;F++)c[m[F]]=g}else c[C]=g}return this.options.layoutId&&(c.pointerEvents=f===this?hs(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(cg),this.root.sharedNodes.clear()}}}function xF(e){e.updateLayout()}function CF(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?Zt(p=>{const b=l?o.measuredBox[p]:o.layoutBox[p],v=yt(b);b.min=a[p].min,b.max=b.min+v}):J1(s,o.layoutBox,a)&&Zt(p=>{const b=l?o.measuredBox[p]:o.layoutBox[p],v=yt(a[p]);b.max=b.min+v});const u=xa();wa(u,a,o.layoutBox);const c=xa();l?wa(c,e.applyTransform(i,!0),o.measuredBox):wa(c,a,o.layoutBox);const d=!Z1(u);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:b,layout:v}=p;if(b&&v){const C=Ee();Sa(C,o.layoutBox,b.layoutBox);const h=Ee();Sa(h,a,v.layoutBox),X1(C,h)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function kF(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function _F(e){e.clearSnapshot()}function cg(e){e.clearMeasurements()}function TF(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function FF(e){e.resolveTargetDelta()}function AF(e){e.calcProjection()}function EF(e){e.resetRotation()}function PF(e){e.removeLeadSnapshot()}function fg(e,t,n){e.translate=Se(t.translate,0,n),e.scale=Se(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function pg(e,t,n,r){e.min=Se(t.min,n.min,r),e.max=Se(t.max,n.max,r)}function qF(e,t,n,r){pg(e.x,t.x,n.x,r),pg(e.y,t.y,n.y,r)}function IF(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const RF={duration:.45,ease:[.4,0,.1,1]};function zF(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function mg(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function MF(e){mg(e.x),mg(e.y)}function J1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Kc(ig(t),ig(n),.2)}const VF=Q1({attachResizeListener:(e,t)=>Ol(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zu={current:void 0},LF=Q1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Zu.current){const e=new VF(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Zu.current=e}return Zu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),jF={...hT,...Wk,...jT,...uF},NF=V7((e,t)=>Sk(e,t,jF,oF,LF));function eb(){const e=k.exports.useRef(!1);return Rs(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function BF(){const e=eb(),[t,n]=k.exports.useState(0),r=k.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.exports.useCallback(()=>At.postRender(r),[r]),t]}class OF extends k.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function DF({children:e,isPresent:t}){const n=k.exports.useId(),r=k.exports.useRef(null),o=k.exports.useRef({width:0,height:0,top:0,left:0});return k.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),T(OF,{isPresent:t,childRef:r,sizeRef:o,children:k.exports.cloneElement(e,{ref:r})})}const Xu=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=Bl($F),l=k.exports.useId(),u=k.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return k.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),k.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=T(DF,{isPresent:n,children:e})),T(zo.Provider,{value:u,children:e})};function $F(){return new Map}const $r=e=>e.key||"";function WF(e,t){e.forEach(n=>{const r=$r(n);t.set(r,n)})}function HF(e){const t=[];return k.exports.Children.forEach(e,n=>{k.exports.isValidElement(n)&&t.push(n)}),t}const UF=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",f1(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=BF();const l=k.exports.useContext(vf).forceRender;l&&(s=l);const u=eb(),c=HF(e);let d=c;const f=new Set,p=k.exports.useRef(d),b=k.exports.useRef(new Map).current,v=k.exports.useRef(!0);if(Rs(()=>{v.current=!1,WF(c,b),p.current=d}),Af(()=>{v.current=!0,b.clear(),f.clear()}),v.current)return T(pt,{children:d.map(g=>T(Xu,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:g},$r(g)))});d=[...d];const C=p.current.map($r),h=c.map($r),m=C.length;for(let g=0;g<m;g++){const x=C[g];h.indexOf(x)===-1&&f.add(x)}return i==="wait"&&f.size&&(d=[]),f.forEach(g=>{if(h.indexOf(g)!==-1)return;const x=b.get(g);if(!x)return;const F=C.indexOf(g),E=()=>{b.delete(g),f.delete(g);const A=p.current.findIndex(q=>q.key===g);if(p.current.splice(A,1),!f.size){if(p.current=c,u.current===!1)return;s(),r&&r()}};d.splice(F,0,T(Xu,{isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:a,mode:i,children:x},$r(x)))}),d=d.map(g=>{const x=g.key;return f.has(x)?g:T(Xu,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:g},$r(g))}),d1!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),T(pt,{children:f.size?d:d.map(g=>k.exports.cloneElement(g))})};var GF=(...e)=>e.filter(Boolean).join(" "),KF=T9({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Df=L((e,t)=>{const n=lt("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=Ie(e),u=GF("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${KF} ${a} linear infinite`,...n};return M.createElement(N.div,{ref:t,__css:c,className:u,...l},r&&M.createElement(N.span,{srOnly:!0},r))});Df.displayName="Spinner";var Hl=(...e)=>e.filter(Boolean).join(" ");function YF(e){return T(Rr,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function ZF(e){return T(Rr,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function gg(e){return T(Rr,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[XF,QF]=dn({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[JF,$f]=dn({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),tb={info:{icon:ZF,colorScheme:"blue"},warning:{icon:gg,colorScheme:"orange"},success:{icon:YF,colorScheme:"green"},error:{icon:gg,colorScheme:"red"},loading:{icon:Df,colorScheme:"blue"}};function eA(e){return tb[e].colorScheme}function tA(e){return tb[e].icon}var nb=L(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=Ie(t),i=(u=t.colorScheme)!=null?u:eA(r),s=Ro("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return M.createElement(XF,{value:{status:r}},M.createElement(JF,{value:s},M.createElement(N.div,{role:o?"alert":void 0,ref:n,...a,className:Hl("chakra-alert",t.className),__css:l})))});nb.displayName="Alert";var rb=L(function(t,n){const r=$f(),o={display:"inline",...r.description};return M.createElement(N.div,{ref:n,...t,className:Hl("chakra-alert__desc",t.className),__css:o})});rb.displayName="AlertDescription";function ob(e){const{status:t}=QF(),n=tA(t),r=$f(),o=t==="loading"?r.spinner:r.icon;return M.createElement(N.span,{display:"inherit",...e,className:Hl("chakra-alert__icon",e.className),__css:o},e.children||T(n,{h:"100%",w:"100%"}))}ob.displayName="AlertIcon";var ab=L(function(t,n){const r=$f();return M.createElement(N.div,{ref:n,...t,className:Hl("chakra-alert__title",t.className),__css:r.title})});ab.displayName="AlertTitle";function nA(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function rA(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=k.exports.useState("pending");k.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=k.exports.useRef(),f=k.exports.useCallback(()=>{if(!n)return;p();const b=new Image;b.src=n,i&&(b.crossOrigin=i),r&&(b.srcset=r),s&&(b.sizes=s),t&&(b.loading=t),b.onload=v=>{p(),c("loaded"),o==null||o(v)},b.onerror=v=>{p(),c("failed"),a==null||a(v)},d.current=b},[n,i,r,s,o,a,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return Ra(()=>{if(!l)return u==="loading"&&f(),()=>{p()}},[u,f,l]),l?"loaded":u}var oA=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",Hs=L(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return T("img",{width:r,height:o,ref:n,alt:a,...i})});Hs.displayName="NativeImage";var Wf=L(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:p,...b}=t,v=r!==void 0||o!==void 0,C=u!=null||c||!v,h=rA({...t,ignoreFallback:C}),m=oA(h,f),g={ref:n,objectFit:l,objectPosition:s,...C?b:nA(b,["onError","onLoad"])};return m?o||M.createElement(N.img,{as:Hs,className:"chakra-image__placeholder",src:r,...g}):M.createElement(N.img,{as:Hs,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:p,className:"chakra-image",...g})});Wf.displayName="Image";L((e,t)=>M.createElement(N.img,{ref:t,as:Hs,className:"chakra-image",...e}));function Hf(e){return k.exports.Children.toArray(e).filter(t=>k.exports.isValidElement(t))}var Ul=(...e)=>e.filter(Boolean).join(" "),hg=e=>e?"":void 0,[aA,iA]=dn({strict:!1,name:"ButtonGroupContext"});function td(e){const{children:t,className:n,...r}=e,o=k.exports.isValidElement(t)?k.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=Ul("chakra-button__icon",n);return M.createElement(N.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a},o)}td.displayName="ButtonIcon";function nd(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=T(Df,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=Ul("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=k.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return M.createElement(N.div,{className:l,...s,__css:c},o)}nd.displayName="ButtonSpinner";function sA(e){const[t,n]=k.exports.useState(!e);return{ref:k.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}var Uf=L((e,t)=>{const n=iA(),r=lt("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:p,spinnerPlacement:b="start",className:v,as:C,...h}=Ie(e),m=k.exports.useMemo(()=>{const E={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:E}}},[r,n]),{ref:g,type:x}=sA(C),F={rightIcon:u,leftIcon:l,iconSpacing:d,children:s};return M.createElement(N.button,{disabled:o||a,ref:S7(t,g),as:C,type:f!=null?f:x,"data-active":hg(i),"data-loading":hg(a),__css:m,className:Ul("chakra-button",v),...h},a&&b==="start"&&T(nd,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:p}),a?c||M.createElement(N.span,{opacity:0},T(yg,{...F})):T(yg,{...F}),a&&b==="end"&&T(nd,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:p}))});Uf.displayName="Button";function yg(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return X(pt,{children:[t&&T(td,{marginEnd:o,children:t}),r,n&&T(td,{marginStart:o,children:n})]})}var lA={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},uA={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},cA=L(function(t,n){const{size:r,colorScheme:o,variant:a,className:i,spacing:s="0.5rem",isAttached:l,isDisabled:u,orientation:c="horizontal",...d}=t,f=Ul("chakra-button__group",i),p=k.exports.useMemo(()=>({size:r,colorScheme:o,variant:a,isDisabled:u}),[r,o,a,u]);let b={display:"inline-flex",...l?lA[c]:uA[c](s)};const v=c==="vertical";return M.createElement(aA,{value:p},M.createElement(N.div,{ref:n,role:"group",__css:b,className:f,"data-attached":l?"":void 0,"data-orientation":c,flexDir:v?"column":void 0,...d}))});cA.displayName="ButtonGroup";var dA=L((e,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...i}=e,s=n||r,l=k.exports.isValidElement(s)?k.exports.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return T(Uf,{padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...i,children:l})});dA.displayName="IconButton";var Vo=(...e)=>e.filter(Boolean).join(" "),$i=e=>e?"":void 0,Qu=e=>e?!0:void 0;function bg(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[fA,ib]=dn({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[pA,Lo]=dn({strict:!1,name:"FormControlContext"});function mA(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=k.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,p]=k.exports.useState(!1),[b,v]=k.exports.useState(!1),[C,h]=k.exports.useState(!1),m=k.exports.useCallback((A={},q=null)=>({id:d,...A,ref:jc(q,B=>{!B||v(!0)})}),[d]),g=k.exports.useCallback((A={},q=null)=>{var B,V;return{...A,ref:q,"data-focus":$i(C),"data-disabled":$i(o),"data-invalid":$i(r),"data-readonly":$i(a),id:(B=A.id)!=null?B:u,htmlFor:(V=A.htmlFor)!=null?V:l}},[l,o,C,r,a,u]),x=k.exports.useCallback((A={},q=null)=>({id:c,...A,ref:jc(q,B=>{!B||p(!0)}),"aria-live":"polite"}),[c]),F=k.exports.useCallback((A={},q=null)=>({...A,...i,ref:q,role:"group"}),[i]),E=k.exports.useCallback((A={},q=null)=>({...A,ref:q,role:"presentation","aria-hidden":!0,children:A.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!C,onFocus:()=>h(!0),onBlur:()=>h(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:b,setHasHelpText:v,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:m,getErrorMessageProps:x,getRootProps:F,getLabelProps:g,getRequiredIndicatorProps:E}}var gA=L(function(t,n){const r=Ro("Form",t),o=Ie(t),{getRootProps:a,htmlProps:i,...s}=mA(o),l=Vo("chakra-form-control",t.className);return M.createElement(pA,{value:s},M.createElement(fA,{value:r},M.createElement(N.div,{...a({},n),className:l,__css:r.container})))});gA.displayName="FormControl";var hA=L(function(t,n){const r=Lo(),o=ib(),a=Vo("chakra-form__helper-text",t.className);return M.createElement(N.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});hA.displayName="FormHelperText";function yA(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=bA(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":Qu(n),"aria-required":Qu(o),"aria-readonly":Qu(r)}}function bA(e){var b,v,C;const t=Lo(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&p.push(t.feedbackId),t!=null&&t.hasHelpText&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(b=r!=null?r:u)!=null?b:t==null?void 0:t.isDisabled,isReadOnly:(v=o!=null?o:l)!=null?v:t==null?void 0:t.isReadOnly,isRequired:(C=a!=null?a:i)!=null?C:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:bg(t==null?void 0:t.onFocus,c),onBlur:bg(t==null?void 0:t.onBlur,d)}}var[vA,wA]=dn({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),SA=L((e,t)=>{const n=Ro("FormError",e),r=Ie(e),o=Lo();return o!=null&&o.isInvalid?M.createElement(vA,{value:n},M.createElement(N.div,{...o==null?void 0:o.getErrorMessageProps(r,t),className:Vo("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null});SA.displayName="FormErrorMessage";var xA=L((e,t)=>{const n=wA(),r=Lo();if(!(r!=null&&r.isInvalid))return null;const o=Vo("chakra-form__error-icon",e.className);return T(Rr,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:o,children:T("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});xA.displayName="FormErrorIcon";var CA=L(function(t,n){var f;const r=lt("FormLabel",t),o=Ie(t),{className:a,children:i,requiredIndicator:s=T(sb,{}),optionalIndicator:l=null,...u}=o,c=Lo(),d=(f=c==null?void 0:c.getLabelProps(u,n))!=null?f:{ref:n,...u};return M.createElement(N.label,{...d,className:Vo("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...r}},i,c!=null&&c.isRequired?s:l)});CA.displayName="FormLabel";var sb=L(function(t,n){const r=Lo(),o=ib();if(!(r!=null&&r.isRequired))return null;const a=Vo("chakra-form__required-indicator",t.className);return M.createElement(N.span,{...r==null?void 0:r.getRequiredIndicatorProps(t,n),__css:o.requiredIndicator,className:a})});sb.displayName="RequiredIndicator";function vg(e,t){const n=k.exports.useRef(!1),r=k.exports.useRef(!1);k.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),k.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}function kA(e){return T(Rr,{focusable:"false","aria-hidden":!0,...e,children:T("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var lb=L(function(t,n){const r=lt("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=Ie(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return M.createElement(N.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s},o||T(kA,{width:"1em",height:"1em"}))});lb.displayName="CloseButton";var ub=`
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,_A=()=>T(zl,{styles:ub}),TA=()=>T(zl,{styles:`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${ub}
    `});function Gf(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}var Kf=L(function(t,n){const{htmlSize:r,...o}=t,a=Ro("Input",o),i=Ie(o),s=yA(i),l=ke("chakra-input",t.className);return M.createElement(N.input,{size:r,...s,__css:a.field,ref:n,className:l})});Kf.displayName="Input";Kf.id="Input";var[FA,cb]=dn({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),AA=L(function(t,n){const r=Ro("Input",t),{children:o,className:a,...i}=Ie(t),s=ke("chakra-input__group",a),l={},u=Hf(o),c=r.field;u.forEach(f=>{var p,b;!r||(c&&f.type.id==="InputLeftElement"&&(l.paddingStart=(p=c.height)!=null?p:c.h),c&&f.type.id==="InputRightElement"&&(l.paddingEnd=(b=c.height)!=null?b:c.h),f.type.id==="InputRightAddon"&&(l.borderEndRadius=0),f.type.id==="InputLeftAddon"&&(l.borderStartRadius=0))});const d=u.map(f=>{var p,b;const v=Gf({size:((p=f.props)==null?void 0:p.size)||t.size,variant:((b=f.props)==null?void 0:b.variant)||t.variant});return f.type.id!=="Input"?k.exports.cloneElement(f,v):k.exports.cloneElement(f,Object.assign(v,l,f.props))});return M.createElement(N.div,{className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative"},...i},T(FA,{value:r,children:d}))});AA.displayName="InputGroup";var EA={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},PA=N("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Yf=L(function(t,n){var s;const{placement:r="left",...o}=t,a=(s=EA[r])!=null?s:{},i=cb();return T(PA,{ref:n,...o,__css:{...i.addon,...a}})});Yf.displayName="InputAddon";var db=L(function(t,n){return T(Yf,{ref:n,placement:"left",...t,className:ke("chakra-input__left-addon",t.className)})});db.displayName="InputLeftAddon";db.id="InputLeftAddon";var fb=L(function(t,n){return T(Yf,{ref:n,placement:"right",...t,className:ke("chakra-input__right-addon",t.className)})});fb.displayName="InputRightAddon";fb.id="InputRightAddon";var qA=N("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Gl=L(function(t,n){var u,c;const{placement:r="left",...o}=t,a=cb(),i=a.field,l={[r==="left"?"insetStart":"insetEnd"]:"0",width:(u=i==null?void 0:i.height)!=null?u:i==null?void 0:i.h,height:(c=i==null?void 0:i.height)!=null?c:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...a.element};return T(qA,{ref:n,__css:l,...o})});Gl.id="InputElement";Gl.displayName="InputElement";var pb=L(function(t,n){const{className:r,...o}=t,a=ke("chakra-input__left-element",r);return T(Gl,{ref:n,placement:"left",className:a,...o})});pb.id="InputLeftElement";pb.displayName="InputLeftElement";var mb=L(function(t,n){const{className:r,...o}=t,a=ke("chakra-input__right-element",r);return T(Gl,{ref:n,placement:"right",className:a,...o})});mb.id="InputRightElement";mb.displayName="InputRightElement";function IA(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function Jn(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):IA(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var RA=L(function(e,t){const{ratio:n=4/3,children:r,className:o,...a}=e,i=k.exports.Children.only(r),s=ke("chakra-aspect-ratio",o);return M.createElement(N.div,{ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:Jn(n,l=>`${1/l*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...a},i)});RA.displayName="AspectRatio";var zA=L(function(t,n){const r=lt("Badge",t),{className:o,...a}=Ie(t);return M.createElement(N.span,{ref:n,className:ke("chakra-badge",t.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});zA.displayName="Badge";var Zf=N("div");Zf.displayName="Box";var gb=L(function(t,n){const{size:r,centerContent:o=!0,...a}=t;return T(Zf,{ref:n,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});gb.displayName="Square";var MA=L(function(t,n){const{size:r,...o}=t;return T(gb,{size:r,ref:n,borderRadius:"9999px",...o})});MA.displayName="Circle";var Kl=N("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Kl.displayName="Center";var VA={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};L(function(t,n){const{axis:r="both",...o}=t;return M.createElement(N.div,{ref:n,__css:VA[r],...o,position:"absolute"})});var LA=L(function(t,n){const r=lt("Code",t),{className:o,...a}=Ie(t);return M.createElement(N.code,{ref:n,className:ke("chakra-code",t.className),...a,__css:{display:"inline-block",...r}})});LA.displayName="Code";var Fr=L(function(t,n){const{className:r,centerContent:o,...a}=Ie(t),i=lt("Container",t);return M.createElement(N.div,{ref:n,className:ke("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Fr.displayName="Container";var jA=L(function(t,n){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:i,borderWidth:s,borderStyle:l,borderColor:u,...c}=lt("Divider",t),{className:d,orientation:f="horizontal",__css:p,...b}=Ie(t),v={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||s||"1px",width:"100%"}};return M.createElement(N.hr,{ref:n,"aria-orientation":f,...b,__css:{...c,border:"0",borderColor:u,borderStyle:l,...v[f],...p},className:ke("chakra-divider",d)})});jA.displayName="Divider";var Us=L(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return M.createElement(N.div,{ref:n,__css:d,...c})});Us.displayName="Flex";var hb=L(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:p,...b}=t,v={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return M.createElement(N.div,{ref:n,__css:v,...b})});hb.displayName="Grid";function wg(e){return Jn(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var NA=L(function(t,n){const{area:r,colSpan:o,colStart:a,colEnd:i,rowEnd:s,rowSpan:l,rowStart:u,...c}=t,d=Gf({gridArea:r,gridColumn:wg(o),gridRow:wg(l),gridColumnStart:a,gridColumnEnd:i,gridRowStart:u,gridRowEnd:s});return M.createElement(N.div,{ref:n,__css:d,...c})});NA.displayName="GridItem";var Xf=L(function(t,n){const r=lt("Heading",t),{className:o,...a}=Ie(t);return M.createElement(N.h2,{ref:n,className:ke("chakra-heading",t.className),...a,__css:r})});Xf.displayName="Heading";L(function(t,n){const r=lt("Mark",t),o=Ie(t);return T(Zf,{ref:n,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});var BA=L(function(t,n){const r=lt("Kbd",t),{className:o,...a}=Ie(t);return M.createElement(N.kbd,{ref:n,className:ke("chakra-kbd",o),...a,__css:{fontFamily:"mono",...r}})});BA.displayName="Kbd";var OA=L(function(t,n){const r=lt("Link",t),{className:o,isExternal:a,...i}=Ie(t);return M.createElement(N.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:ke("chakra-link",o),...i,__css:r})});OA.displayName="Link";L(function(t,n){const{isExternal:r,target:o,rel:a,className:i,...s}=t;return M.createElement(N.a,{...s,ref:n,className:ke("chakra-linkbox__overlay",i),rel:r?"noopener noreferrer":a,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});L(function(t,n){const{className:r,...o}=t;return M.createElement(N.div,{ref:n,position:"relative",...o,className:ke("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[DA,yb]=dn({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),Qf=L(function(t,n){const r=Ro("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=Ie(t),u=Hf(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return M.createElement(DA,{value:r},M.createElement(N.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l},u))});Qf.displayName="List";var $A=L((e,t)=>{const{as:n,...r}=e;return T(Qf,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});$A.displayName="OrderedList";var WA=L(function(t,n){const{as:r,...o}=t;return T(Qf,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});WA.displayName="UnorderedList";var HA=L(function(t,n){const r=yb();return M.createElement(N.li,{ref:n,...t,__css:r.item})});HA.displayName="ListItem";var UA=L(function(t,n){const r=yb();return T(Rr,{ref:n,role:"presentation",...t,__css:r.icon})});UA.displayName="ListIcon";var GA=L(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=Iy(),c=s?YA(s,u):ZA(r);return T(hb,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});GA.displayName="SimpleGrid";function KA(e){return typeof e=="number"?`${e}px`:e}function YA(e,t){return Jn(e,n=>{const r=c7("sizes",n,KA(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function ZA(e){return Jn(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var XA=N("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});XA.displayName="Spacer";var rd="& > *:not(style) ~ *:not(style)";function QA(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[rd]:Jn(n,o=>r[o])}}function JA(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Jn(n,o=>r[o])}}var bb=e=>M.createElement(N.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});bb.displayName="StackItem";var Jf=L((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,p=n?"row":r!=null?r:"column",b=k.exports.useMemo(()=>QA({direction:p,spacing:i}),[p,i]),v=k.exports.useMemo(()=>JA({spacing:i,direction:p}),[i,p]),C=!!u,h=!d&&!C,m=k.exports.useMemo(()=>{const x=Hf(l);return h?x:x.map((F,E)=>{const A=typeof F.key<"u"?F.key:E,q=E+1===x.length,V=d?T(bb,{children:F},A):F;if(!C)return V;const _e=k.exports.cloneElement(u,{__css:v}),Le=q?null:_e;return X(k.exports.Fragment,{children:[V,Le]},A)})},[u,v,C,h,d,l]),g=ke("chakra-stack",c);return M.createElement(N.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:b.flexDirection,flexWrap:s,className:g,__css:C?{}:{[rd]:b[rd]},...f},m)});Jf.displayName="Stack";var eE=L((e,t)=>T(Jf,{align:"center",...e,direction:"row",ref:t}));eE.displayName="HStack";var tE=L((e,t)=>T(Jf,{align:"center",...e,direction:"column",ref:t}));tE.displayName="VStack";var ie=L(function(t,n){const r=lt("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=Ie(t),u=Gf({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return M.createElement(N.p,{ref:n,className:ke("chakra-text",t.className),...u,...l,__css:r})});ie.displayName="Text";function Sg(e){return typeof e=="number"?`${e}px`:e}var nE=L(function(t,n){const{spacing:r="0.5rem",spacingX:o,spacingY:a,children:i,justify:s,direction:l,align:u,className:c,shouldWrapChildren:d,...f}=t,p=k.exports.useMemo(()=>{const{spacingX:v=r,spacingY:C=r}={spacingX:o,spacingY:a};return{"--chakra-wrap-x-spacing":h=>Jn(v,m=>Sg(_c("space",m)(h))),"--chakra-wrap-y-spacing":h=>Jn(C,m=>Sg(_c("space",m)(h))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,o,a,s,u,l]),b=k.exports.useMemo(()=>d?k.exports.Children.map(i,(v,C)=>T(vb,{children:v},C)):i,[i,d]);return M.createElement(N.div,{ref:n,className:ke("chakra-wrap",c),overflow:"hidden",...f},M.createElement(N.ul,{className:"chakra-wrap__list",__css:p},b))});nE.displayName="Wrap";var vb=L(function(t,n){const{className:r,...o}=t;return M.createElement(N.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:ke("chakra-wrap__listitem",r),...o})});vb.displayName="WrapItem";var rE={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}}},wb=rE,Or=()=>{},oE={document:wb,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:Or,removeEventListener:Or,getComputedStyle(){return{getPropertyValue(){return""}}},matchMedia(){return{matches:!1,addListener:Or,removeListener:Or}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)},setTimeout:()=>0,clearTimeout:Or,setInterval:()=>0,clearInterval:Or},aE=oE,iE={window:aE,document:wb},Sb=typeof window<"u"?{window,document}:iE,xb=k.exports.createContext(Sb);xb.displayName="EnvironmentContext";function Cb(e){const{children:t,environment:n}=e,[r,o]=k.exports.useState(null),[a,i]=k.exports.useState(!1);k.exports.useEffect(()=>i(!0),[]);const s=k.exports.useMemo(()=>{if(n)return n;const l=r==null?void 0:r.ownerDocument,u=r==null?void 0:r.ownerDocument.defaultView;return l?{document:l,window:u}:Sb},[r,n]);return X(xb.Provider,{value:s,children:[t,!n&&a&&T("span",{id:"__chakra_env",hidden:!0,ref:l=>{k.exports.startTransition(()=>{l&&o(l)})}})]})}Cb.displayName="EnvironmentProvider";var Yl={exports:{}},wt={},kb={exports:{}},_b={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,D){var $=I.length;I.push(D);e:for(;0<$;){var he=$-1>>>1,Te=I[he];if(0<o(Te,D))I[he]=D,I[$]=Te,$=he;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],$=I.pop();if($!==D){I[0]=$;e:for(var he=0,Te=I.length,J=Te>>>1;he<J;){var Gt=2*(he+1)-1,Bo=I[Gt],ut=Gt+1,ar=I[ut];if(0>o(Bo,$))ut<Te&&0>o(ar,Bo)?(I[he]=ar,I[ut]=$,he=ut):(I[he]=Bo,I[Gt]=$,he=Gt);else if(ut<Te&&0>o(ar,$))I[he]=ar,I[ut]=$,he=ut;else break e}}return D}function o(I,D){var $=I.sortIndex-D.sortIndex;return $!==0?$:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,b=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=I)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function x(I){if(v=!1,g(I),!b)if(n(l)!==null)b=!0,xe(F);else{var D=n(u);D!==null&&It(x,D.startTime-I)}}function F(I,D){b=!1,v&&(v=!1,h(q),q=-1),p=!0;var $=f;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||I&&!_e());){var he=d.callback;if(typeof he=="function"){d.callback=null,f=d.priorityLevel;var Te=he(d.expirationTime<=D);D=e.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var J=!0;else{var Gt=n(u);Gt!==null&&It(x,Gt.startTime-D),J=!1}return J}finally{d=null,f=$,p=!1}}var E=!1,A=null,q=-1,B=5,V=-1;function _e(){return!(e.unstable_now()-V<B)}function Le(){if(A!==null){var I=e.unstable_now();V=I;var D=!0;try{D=A(!0,I)}finally{D?xt():(E=!1,A=null)}}else E=!1}var xt;if(typeof m=="function")xt=function(){m(Le)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Ut=Ht.port2;Ht.port1.onmessage=Le,xt=function(){Ut.postMessage(null)}}else xt=function(){C(Le,0)};function xe(I){A=I,E||(E=!0,xt())}function It(I,D){q=C(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){b||p||(b=!0,xe(F))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var $=f;f=D;try{return I()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=f;f=I;try{return D()}finally{f=$}},e.unstable_scheduleCallback=function(I,D,$){var he=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?he+$:he):$=he,I){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=$+Te,I={id:c++,callback:D,priorityLevel:I,startTime:$,expirationTime:Te,sortIndex:-1},$>he?(I.sortIndex=$,t(u,I),n(l)===null&&I===n(u)&&(v?(h(q),q=-1):v=!0,It(x,$-he))):(I.sortIndex=Te,t(l,I),b||p||(b=!0,xe(F))),I},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(I){var D=f;return function(){var $=f;f=D;try{return I.apply(this,arguments)}finally{f=$}}}})(_b);(function(e){e.exports=_b})(kb);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb=k.exports,bt=kb.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fb=new Set,Ga={};function Vr(e,t){ko(e,t),ko(e+"Capture",t)}function ko(e,t){for(Ga[e]=t,e=0;e<t.length;e++)Fb.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),od=Object.prototype.hasOwnProperty,sE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Cg={};function lE(e){return od.call(Cg,e)?!0:od.call(xg,e)?!1:sE.test(e)?Cg[e]=!0:(xg[e]=!0,!1)}function uE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cE(e,t,n,r){if(t===null||typeof t>"u"||uE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ep,tp);De[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ep,tp);De[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ep,tp);De[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function np(e,t,n,r){var o=De.hasOwnProperty(t)?De[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cE(t,n,o,r)&&(n=null),r||o===null?lE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=Tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),Ab=Symbol.for("react.provider"),Eb=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Pb=Symbol.for("react.offscreen"),kg=Symbol.iterator;function Zo(e){return e===null||typeof e!="object"?null:(e=kg&&e[kg]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Ju;function sa(e){if(Ju===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ju=t&&t[1]||""}return`
`+Ju+e}var ec=!1;function tc(e,t){if(!e||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sa(e):""}function dE(e){switch(e.tag){case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return e=tc(e.type,!1),e;case 11:return e=tc(e.type.render,!1),e;case 1:return e=tc(e.type,!0),e;default:return""}}function ld(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Gr:return"Portal";case ad:return"Profiler";case rp:return"StrictMode";case id:return"Suspense";case sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eb:return(e.displayName||"Context")+".Consumer";case Ab:return(e._context.displayName||"Context")+".Provider";case op:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ap:return t=e.displayName||null,t!==null?t:ld(e.type)||"Memo";case Vn:t=e._payload,e=e._init;try{return ld(e(t))}catch{}}return null}function fE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(t);case 8:return t===rp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pE(e){var t=qb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=pE(e))}function Ib(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ud(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function _g(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=er(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rb(e,t){t=t.checked,t!=null&&np(e,"checked",t,!1)}function cd(e,t){Rb(e,t);var n=er(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dd(e,t.type,n):t.hasOwnProperty("defaultValue")&&dd(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dd(e,t,n){(t!=="number"||Gs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var la=Array.isArray;function go(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+er(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(la(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:er(n)}}function zb(e,t){var n=er(t.value),r=er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ag(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ui,Vb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(e){mE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ca[t]=Ca[e]})});function Lb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ca.hasOwnProperty(e)&&Ca[e]?(""+t).trim():t+"px"}function jb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Lb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gE=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(e,t){if(t){if(gE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function gd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function ip(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yd=null,ho=null,yo=null;function Eg(e){if(e=bi(e)){if(typeof yd!="function")throw Error(P(280));var t=e.stateNode;t&&(t=eu(t),yd(e.stateNode,e.type,t))}}function Nb(e){ho?yo?yo.push(e):yo=[e]:ho=e}function Bb(){if(ho){var e=ho,t=yo;if(yo=ho=null,Eg(e),t)for(e=0;e<t.length;e++)Eg(t[e])}}function Ob(e,t){return e(t)}function Db(){}var nc=!1;function $b(e,t,n){if(nc)return e(t,n);nc=!0;try{return Ob(e,t,n)}finally{nc=!1,(ho!==null||yo!==null)&&(Db(),Bb())}}function Ya(e,t){var n=e.stateNode;if(n===null)return null;var r=eu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var bd=!1;if(_n)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){bd=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{bd=!1}function hE(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ka=!1,Ks=null,Ys=!1,vd=null,yE={onError:function(e){ka=!0,Ks=e}};function bE(e,t,n,r,o,a,i,s,l){ka=!1,Ks=null,hE.apply(yE,arguments)}function vE(e,t,n,r,o,a,i,s,l){if(bE.apply(this,arguments),ka){if(ka){var u=Ks;ka=!1,Ks=null}else throw Error(P(198));Ys||(Ys=!0,vd=u)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pg(e){if(Lr(e)!==e)throw Error(P(188))}function wE(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Pg(o),e;if(a===r)return Pg(o),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Hb(e){return e=wE(e),e!==null?Ub(e):null}function Ub(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ub(e);if(t!==null)return t;e=e.sibling}return null}var Gb=bt.unstable_scheduleCallback,qg=bt.unstable_cancelCallback,SE=bt.unstable_shouldYield,xE=bt.unstable_requestPaint,Ce=bt.unstable_now,CE=bt.unstable_getCurrentPriorityLevel,sp=bt.unstable_ImmediatePriority,Kb=bt.unstable_UserBlockingPriority,Zs=bt.unstable_NormalPriority,kE=bt.unstable_LowPriority,Yb=bt.unstable_IdlePriority,Zl=null,ln=null;function _E(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Zl,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:AE,TE=Math.log,FE=Math.LN2;function AE(e){return e>>>=0,e===0?32:31-(TE(e)/FE|0)|0}var Gi=64,Ki=4194304;function ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=ua(s):(a&=i,a!==0&&(r=ua(a)))}else i=n&~o,i!==0?r=ua(i):a!==0&&(r=ua(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),o=1<<n,r|=e[n],t&=~o;return r}function EE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Dt(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=EE(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function wd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zb(){var e=Gi;return Gi<<=1,(Gi&4194240)===0&&(Gi=64),e}function rc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function qE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Dt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function lp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ne=0;function Xb(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qb,up,Jb,ev,tv,Sd=!1,Yi=[],Wn=null,Hn=null,Un=null,Za=new Map,Xa=new Map,Nn=[],IE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ig(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(t.pointerId)}}function Qo(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=bi(t),t!==null&&up(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function RE(e,t,n,r,o){switch(t){case"focusin":return Wn=Qo(Wn,e,t,n,r,o),!0;case"dragenter":return Hn=Qo(Hn,e,t,n,r,o),!0;case"mouseover":return Un=Qo(Un,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Za.set(a,Qo(Za.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Xa.set(a,Qo(Xa.get(a)||null,e,t,n,r,o)),!0}return!1}function nv(e){var t=vr(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=Wb(n),t!==null){e.blockedOn=t,tv(e.priority,function(){Jb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hd=r,n.target.dispatchEvent(r),hd=null}else return t=bi(n),t!==null&&up(t),e.blockedOn=n,!1;t.shift()}return!0}function Rg(e,t,n){ys(e)&&n.delete(t)}function zE(){Sd=!1,Wn!==null&&ys(Wn)&&(Wn=null),Hn!==null&&ys(Hn)&&(Hn=null),Un!==null&&ys(Un)&&(Un=null),Za.forEach(Rg),Xa.forEach(Rg)}function Jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Sd||(Sd=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,zE)))}function Qa(e){function t(o){return Jo(o,e)}if(0<Yi.length){Jo(Yi[0],e);for(var n=1;n<Yi.length;n++){var r=Yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&Jo(Wn,e),Hn!==null&&Jo(Hn,e),Un!==null&&Jo(Un,e),Za.forEach(t),Xa.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&Nn.shift()}var bo=En.ReactCurrentBatchConfig,Qs=!0;function ME(e,t,n,r){var o=ne,a=bo.transition;bo.transition=null;try{ne=1,cp(e,t,n,r)}finally{ne=o,bo.transition=a}}function VE(e,t,n,r){var o=ne,a=bo.transition;bo.transition=null;try{ne=4,cp(e,t,n,r)}finally{ne=o,bo.transition=a}}function cp(e,t,n,r){if(Qs){var o=xd(e,t,n,r);if(o===null)pc(e,t,r,Js,n),Ig(e,r);else if(RE(o,e,t,n,r))r.stopPropagation();else if(Ig(e,r),t&4&&-1<IE.indexOf(e)){for(;o!==null;){var a=bi(o);if(a!==null&&Qb(a),a=xd(e,t,n,r),a===null&&pc(e,t,r,Js,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else pc(e,t,r,null,n)}}var Js=null;function xd(e,t,n,r){if(Js=null,e=ip(r),e=vr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Js=e,null}function rv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CE()){case sp:return 1;case Kb:return 4;case Zs:case kE:return 16;case Yb:return 536870912;default:return 16}default:return 16}}var Dn=null,dp=null,bs=null;function ov(){if(bs)return bs;var e,t=dp,n=t.length,r,o="value"in Dn?Dn.value:Dn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return bs=o.slice(e,1<r?1-r:void 0)}function vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function zg(){return!1}function St(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zi:zg,this.isPropagationStopped=zg,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=St(jo),yi=ve({},jo,{view:0,detail:0}),LE=St(yi),oc,ac,ea,Xl=ve({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ea&&(ea&&e.type==="mousemove"?(oc=e.screenX-ea.screenX,ac=e.screenY-ea.screenY):ac=oc=0,ea=e),oc)},movementY:function(e){return"movementY"in e?e.movementY:ac}}),Mg=St(Xl),jE=ve({},Xl,{dataTransfer:0}),NE=St(jE),BE=ve({},yi,{relatedTarget:0}),ic=St(BE),OE=ve({},jo,{animationName:0,elapsedTime:0,pseudoElement:0}),DE=St(OE),$E=ve({},jo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WE=St($E),HE=ve({},jo,{data:0}),Vg=St(HE),UE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=KE[e])?!!t[e]:!1}function pp(){return YE}var ZE=ve({},yi,{key:function(e){if(e.key){var t=UE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),XE=St(ZE),QE=ve({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=St(QE),JE=ve({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),eP=St(JE),tP=ve({},jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),nP=St(tP),rP=ve({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oP=St(rP),aP=[9,13,27,32],mp=_n&&"CompositionEvent"in window,_a=null;_n&&"documentMode"in document&&(_a=document.documentMode);var iP=_n&&"TextEvent"in window&&!_a,av=_n&&(!mp||_a&&8<_a&&11>=_a),jg=String.fromCharCode(32),Ng=!1;function iv(e,t){switch(e){case"keyup":return aP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yr=!1;function sP(e,t){switch(e){case"compositionend":return sv(t);case"keypress":return t.which!==32?null:(Ng=!0,jg);case"textInput":return e=t.data,e===jg&&Ng?null:e;default:return null}}function lP(e,t){if(Yr)return e==="compositionend"||!mp&&iv(e,t)?(e=ov(),bs=dp=Dn=null,Yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return av&&t.locale!=="ko"?null:t.data;default:return null}}var uP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uP[e.type]:t==="textarea"}function lv(e,t,n,r){Nb(r),t=el(t,"onChange"),0<t.length&&(n=new fp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ta=null,Ja=null;function cP(e){vv(e,0)}function Ql(e){var t=Qr(e);if(Ib(t))return e}function dP(e,t){if(e==="change")return t}var uv=!1;if(_n){var sc;if(_n){var lc="oninput"in document;if(!lc){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),lc=typeof Og.oninput=="function"}sc=lc}else sc=!1;uv=sc&&(!document.documentMode||9<document.documentMode)}function Dg(){Ta&&(Ta.detachEvent("onpropertychange",cv),Ja=Ta=null)}function cv(e){if(e.propertyName==="value"&&Ql(Ja)){var t=[];lv(t,Ja,e,ip(e)),$b(cP,t)}}function fP(e,t,n){e==="focusin"?(Dg(),Ta=t,Ja=n,Ta.attachEvent("onpropertychange",cv)):e==="focusout"&&Dg()}function pP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Ja)}function mP(e,t){if(e==="click")return Ql(t)}function gP(e,t){if(e==="input"||e==="change")return Ql(t)}function hP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:hP;function ei(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!od.call(t,o)||!Wt(e[o],t[o]))return!1}return!0}function $g(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wg(e,t){var n=$g(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$g(n)}}function dv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fv(){for(var e=window,t=Gs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gs(e.document)}return t}function gp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yP(e){var t=fv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dv(n.ownerDocument.documentElement,n)){if(r!==null&&gp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Wg(n,a);var i=Wg(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bP=_n&&"documentMode"in document&&11>=document.documentMode,Zr=null,Cd=null,Fa=null,kd=!1;function Hg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||Zr==null||Zr!==Gs(r)||(r=Zr,"selectionStart"in r&&gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fa&&ei(Fa,r)||(Fa=r,r=el(Cd,"onSelect"),0<r.length&&(t=new fp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function Xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xr={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},uc={},pv={};_n&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Jl(e){if(uc[e])return uc[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pv)return uc[e]=t[n];return e}var mv=Jl("animationend"),gv=Jl("animationiteration"),hv=Jl("animationstart"),yv=Jl("transitionend"),bv=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(e,t){bv.set(e,t),Vr(t,[e])}for(var cc=0;cc<Ug.length;cc++){var dc=Ug[cc],vP=dc.toLowerCase(),wP=dc[0].toUpperCase()+dc.slice(1);nr(vP,"on"+wP)}nr(mv,"onAnimationEnd");nr(gv,"onAnimationIteration");nr(hv,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(yv,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Gg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vE(r,t,void 0,e),e.currentTarget=null}function vv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Gg(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Gg(o,s,u),a=l}}}if(Ys)throw e=vd,Ys=!1,vd=null,e}function ue(e,t){var n=t[Ed];n===void 0&&(n=t[Ed]=new Set);var r=e+"__bubble";n.has(r)||(wv(t,e,2,!1),n.add(r))}function fc(e,t,n){var r=0;t&&(r|=4),wv(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[Qi]){e[Qi]=!0,Fb.forEach(function(n){n!=="selectionchange"&&(SP.has(n)||fc(n,!1,e),fc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,fc("selectionchange",!1,t))}}function wv(e,t,n,r){switch(rv(t)){case 1:var o=ME;break;case 4:o=VE;break;default:o=cp}n=o.bind(null,t,n,e),o=void 0,!bd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pc(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=vr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}$b(function(){var u=a,c=ip(n),d=[];e:{var f=bv.get(e);if(f!==void 0){var p=fp,b=e;switch(e){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":p=XE;break;case"focusin":b="focus",p=ic;break;case"focusout":b="blur",p=ic;break;case"beforeblur":case"afterblur":p=ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eP;break;case mv:case gv:case hv:p=DE;break;case yv:p=nP;break;case"scroll":p=LE;break;case"wheel":p=oP;break;case"copy":case"cut":case"paste":p=WE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lg}var v=(t&4)!==0,C=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Ya(m,h),x!=null&&v.push(ni(m,x,g)))),C)break;m=m.return}0<v.length&&(f=new p(f,b,null,n,c),d.push({event:f,listeners:v}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==hd&&(b=n.relatedTarget||n.fromElement)&&(vr(b)||b[Tn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(b=n.relatedTarget||n.toElement,p=u,b=b?vr(b):null,b!==null&&(C=Lr(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(p=null,b=u),p!==b)){if(v=Mg,x="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Lg,x="onPointerLeave",h="onPointerEnter",m="pointer"),C=p==null?f:Qr(p),g=b==null?f:Qr(b),f=new v(x,m+"leave",p,n,c),f.target=C,f.relatedTarget=g,x=null,vr(c)===u&&(v=new v(h,m+"enter",b,n,c),v.target=g,v.relatedTarget=C,x=v),C=x,p&&b)t:{for(v=p,h=b,m=0,g=v;g;g=Dr(g))m++;for(g=0,x=h;x;x=Dr(x))g++;for(;0<m-g;)v=Dr(v),m--;for(;0<g-m;)h=Dr(h),g--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=Dr(v),h=Dr(h)}v=null}else v=null;p!==null&&Kg(d,f,p,v,!1),b!==null&&C!==null&&Kg(d,C,b,v,!0)}}e:{if(f=u?Qr(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var F=dP;else if(Bg(f))if(uv)F=gP;else{F=pP;var E=fP}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(F=mP);if(F&&(F=F(e,u))){lv(d,F,n,c);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&dd(f,"number",f.value)}switch(E=u?Qr(u):window,e){case"focusin":(Bg(E)||E.contentEditable==="true")&&(Zr=E,Cd=u,Fa=null);break;case"focusout":Fa=Cd=Zr=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,Hg(d,n,c);break;case"selectionchange":if(bP)break;case"keydown":case"keyup":Hg(d,n,c)}var A;if(mp)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Yr?iv(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(av&&n.locale!=="ko"&&(Yr||q!=="onCompositionStart"?q==="onCompositionEnd"&&Yr&&(A=ov()):(Dn=c,dp="value"in Dn?Dn.value:Dn.textContent,Yr=!0)),E=el(u,q),0<E.length&&(q=new Vg(q,e,null,n,c),d.push({event:q,listeners:E}),A?q.data=A:(A=sv(n),A!==null&&(q.data=A)))),(A=iP?sP(e,n):lP(e,n))&&(u=el(u,"onBeforeInput"),0<u.length&&(c=new Vg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}vv(d,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ya(e,n),a!=null&&r.unshift(ni(e,a,o)),a=Ya(e,t),a!=null&&r.push(ni(e,a,o))),e=e.return}return r}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kg(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Ya(n,a),l!=null&&i.unshift(ni(n,l,s))):o||(l=Ya(n,a),l!=null&&i.push(ni(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var xP=/\r\n?/g,CP=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(xP,`
`).replace(CP,"")}function Ji(e,t,n){if(t=Yg(t),Yg(e)!==t&&n)throw Error(P(425))}function tl(){}var _d=null,Td=null;function Fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,kP=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,_P=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(TP)}:Ad;function TP(e){setTimeout(function(){throw e})}function mc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qa(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var No=Math.random().toString(36).slice(2),tn="__reactFiber$"+No,ri="__reactProps$"+No,Tn="__reactContainer$"+No,Ed="__reactEvents$"+No,FP="__reactListeners$"+No,AP="__reactHandles$"+No;function vr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xg(e);e!==null;){if(n=e[tn])return n;e=Xg(e)}return t}e=n,n=e.parentNode}return null}function bi(e){return e=e[tn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function eu(e){return e[ri]||null}var Pd=[],Jr=-1;function rr(e){return{current:e}}function de(e){0>Jr||(e.current=Pd[Jr],Pd[Jr]=null,Jr--)}function le(e,t){Jr++,Pd[Jr]=e.current,e.current=t}var tr={},Ge=rr(tr),ot=rr(!1),Ar=tr;function _o(e,t){var n=e.type.contextTypes;if(!n)return tr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function nl(){de(ot),de(Ge)}function Qg(e,t,n){if(Ge.current!==tr)throw Error(P(168));le(Ge,t),le(ot,n)}function Sv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,fE(e)||"Unknown",o));return ve({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,Ar=Ge.current,le(Ge,e),le(ot,ot.current),!0}function Jg(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Sv(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,de(ot),de(Ge),le(Ge,e)):de(ot),le(ot,n)}var yn=null,tu=!1,gc=!1;function xv(e){yn===null?yn=[e]:yn.push(e)}function EP(e){tu=!0,xv(e)}function or(){if(!gc&&yn!==null){gc=!0;var e=0,t=ne;try{var n=yn;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yn=null,tu=!1}catch(o){throw yn!==null&&(yn=yn.slice(e+1)),Gb(sp,or),o}finally{ne=t,gc=!1}}return null}var eo=[],to=0,ol=null,al=0,_t=[],Tt=0,Er=null,wn=1,Sn="";function fr(e,t){eo[to++]=al,eo[to++]=ol,ol=e,al=t}function Cv(e,t,n){_t[Tt++]=wn,_t[Tt++]=Sn,_t[Tt++]=Er,Er=e;var r=wn;e=Sn;var o=32-Dt(r)-1;r&=~(1<<o),n+=1;var a=32-Dt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,wn=1<<32-Dt(t)+o|n<<o|r,Sn=a+e}else wn=1<<a|n<<o|r,Sn=e}function hp(e){e.return!==null&&(fr(e,1),Cv(e,1,0))}function yp(e){for(;e===ol;)ol=eo[--to],eo[to]=null,al=eo[--to],eo[to]=null;for(;e===Er;)Er=_t[--Tt],_t[Tt]=null,Sn=_t[--Tt],_t[Tt]=null,wn=_t[--Tt],_t[Tt]=null}var ht=null,ft=null,ge=!1,Nt=null;function kv(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Er!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function qd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Id(e){if(ge){var t=ft;if(t){var n=t;if(!eh(e,t)){if(qd(e))throw Error(P(418));t=Gn(n.nextSibling);var r=ht;t&&eh(e,t)?kv(r,n):(e.flags=e.flags&-4097|2,ge=!1,ht=e)}}else{if(qd(e))throw Error(P(418));e.flags=e.flags&-4097|2,ge=!1,ht=e}}}function th(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function es(e){if(e!==ht)return!1;if(!ge)return th(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fd(e.type,e.memoizedProps)),t&&(t=ft)){if(qd(e))throw _v(),Error(P(418));for(;t;)kv(e,t),t=Gn(t.nextSibling)}if(th(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?Gn(e.stateNode.nextSibling):null;return!0}function _v(){for(var e=ft;e;)e=Gn(e.nextSibling)}function To(){ft=ht=null,ge=!1}function bp(e){Nt===null?Nt=[e]:Nt.push(e)}var PP=En.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var il=rr(null),sl=null,no=null,vp=null;function wp(){vp=no=sl=null}function Sp(e){var t=il.current;de(il),e._currentValue=t}function Rd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vo(e,t){sl=e,vp=no=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(vp!==e)if(e={context:e,memoizedValue:t,next:null},no===null){if(sl===null)throw Error(P(308));no=e,sl.dependencies={lanes:0,firstContext:e}}else no=no.next=e;return t}var wr=null;function xp(e){wr===null?wr=[e]:wr.push(e)}function Tv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,xp(t)):(n.next=o.next,o.next=n),t.interleaved=n,Fn(e,r)}function Fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function Cp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Fn(e,n)}return o=r.interleaved,o===null?(t.next=t,xp(r)):(t.next=o.next,o.next=t),r.interleaved=t,Fn(e,n)}function ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lp(e,n)}}function nh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var o=e.updateQueue;Ln=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,v=s;switch(f=t,p=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(p,d,f);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,f=typeof b=="function"?b.call(p,d,f):b,f==null)break e;d=ve({},d,f);break e;case 2:Ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);qr|=i,e.lanes=i,e.memoizedState=d}}function rh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Av=new Tb.Component().refs;function zd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nu={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Zn(e),a=xn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Kn(e,a,o),t!==null&&($t(t,e,o,r),ws(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Zn(e),a=xn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Kn(e,a,o),t!==null&&($t(t,e,o,r),ws(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Zn(e),o=xn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Kn(e,o,r),t!==null&&($t(t,e,r,n),ws(t,e,r))}};function oh(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(o,a):!0}function Ev(e,t,n){var r=!1,o=tr,a=t.contextType;return typeof a=="object"&&a!==null?a=Pt(a):(o=at(t)?Ar:Ge.current,r=t.contextTypes,a=(r=r!=null)?_o(e,o):tr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ah(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nu.enqueueReplaceState(t,t.state,null)}function Md(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Av,Cp(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Pt(a):(a=at(t)?Ar:Ge.current,o.context=_o(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(zd(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&nu.enqueueReplaceState(o,o.state,null),ll(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ta(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===Av&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ih(e){var t=e._init;return t(e._payload)}function Pv(e){function t(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=Xn(h,m),h.index=0,h.sibling=null,h}function a(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,m,g,x){return m===null||m.tag!==6?(m=xc(g,h.mode,x),m.return=h,m):(m=o(m,g),m.return=h,m)}function l(h,m,g,x){var F=g.type;return F===Kr?c(h,m,g.props.children,x,g.key):m!==null&&(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Vn&&ih(F)===m.type)?(x=o(m,g.props),x.ref=ta(h,m,g),x.return=h,x):(x=Ts(g.type,g.key,g.props,null,h.mode,x),x.ref=ta(h,m,g),x.return=h,x)}function u(h,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Cc(g,h.mode,x),m.return=h,m):(m=o(m,g.children||[]),m.return=h,m)}function c(h,m,g,x,F){return m===null||m.tag!==7?(m=Tr(g,h.mode,x,F),m.return=h,m):(m=o(m,g),m.return=h,m)}function d(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xc(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wi:return g=Ts(m.type,m.key,m.props,null,h.mode,g),g.ref=ta(h,null,m),g.return=h,g;case Gr:return m=Cc(m,h.mode,g),m.return=h,m;case Vn:var x=m._init;return d(h,x(m._payload),g)}if(la(m)||Zo(m))return m=Tr(m,h.mode,g,null),m.return=h,m;ts(h,m)}return null}function f(h,m,g,x){var F=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return F!==null?null:s(h,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:return g.key===F?l(h,m,g,x):null;case Gr:return g.key===F?u(h,m,g,x):null;case Vn:return F=g._init,f(h,m,F(g._payload),x)}if(la(g)||Zo(g))return F!==null?null:c(h,m,g,x,null);ts(h,g)}return null}function p(h,m,g,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,s(m,h,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wi:return h=h.get(x.key===null?g:x.key)||null,l(m,h,x,F);case Gr:return h=h.get(x.key===null?g:x.key)||null,u(m,h,x,F);case Vn:var E=x._init;return p(h,m,g,E(x._payload),F)}if(la(x)||Zo(x))return h=h.get(g)||null,c(m,h,x,F,null);ts(m,x)}return null}function b(h,m,g,x){for(var F=null,E=null,A=m,q=m=0,B=null;A!==null&&q<g.length;q++){A.index>q?(B=A,A=null):B=A.sibling;var V=f(h,A,g[q],x);if(V===null){A===null&&(A=B);break}e&&A&&V.alternate===null&&t(h,A),m=a(V,m,q),E===null?F=V:E.sibling=V,E=V,A=B}if(q===g.length)return n(h,A),ge&&fr(h,q),F;if(A===null){for(;q<g.length;q++)A=d(h,g[q],x),A!==null&&(m=a(A,m,q),E===null?F=A:E.sibling=A,E=A);return ge&&fr(h,q),F}for(A=r(h,A);q<g.length;q++)B=p(A,h,q,g[q],x),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?q:B.key),m=a(B,m,q),E===null?F=B:E.sibling=B,E=B);return e&&A.forEach(function(_e){return t(h,_e)}),ge&&fr(h,q),F}function v(h,m,g,x){var F=Zo(g);if(typeof F!="function")throw Error(P(150));if(g=F.call(g),g==null)throw Error(P(151));for(var E=F=null,A=m,q=m=0,B=null,V=g.next();A!==null&&!V.done;q++,V=g.next()){A.index>q?(B=A,A=null):B=A.sibling;var _e=f(h,A,V.value,x);if(_e===null){A===null&&(A=B);break}e&&A&&_e.alternate===null&&t(h,A),m=a(_e,m,q),E===null?F=_e:E.sibling=_e,E=_e,A=B}if(V.done)return n(h,A),ge&&fr(h,q),F;if(A===null){for(;!V.done;q++,V=g.next())V=d(h,V.value,x),V!==null&&(m=a(V,m,q),E===null?F=V:E.sibling=V,E=V);return ge&&fr(h,q),F}for(A=r(h,A);!V.done;q++,V=g.next())V=p(A,h,q,V.value,x),V!==null&&(e&&V.alternate!==null&&A.delete(V.key===null?q:V.key),m=a(V,m,q),E===null?F=V:E.sibling=V,E=V);return e&&A.forEach(function(Le){return t(h,Le)}),ge&&fr(h,q),F}function C(h,m,g,x){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:e:{for(var F=g.key,E=m;E!==null;){if(E.key===F){if(F=g.type,F===Kr){if(E.tag===7){n(h,E.sibling),m=o(E,g.props.children),m.return=h,h=m;break e}}else if(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Vn&&ih(F)===E.type){n(h,E.sibling),m=o(E,g.props),m.ref=ta(h,E,g),m.return=h,h=m;break e}n(h,E);break}else t(h,E);E=E.sibling}g.type===Kr?(m=Tr(g.props.children,h.mode,x,g.key),m.return=h,h=m):(x=Ts(g.type,g.key,g.props,null,h.mode,x),x.ref=ta(h,m,g),x.return=h,h=x)}return i(h);case Gr:e:{for(E=g.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(h,m.sibling),m=o(m,g.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Cc(g,h.mode,x),m.return=h,h=m}return i(h);case Vn:return E=g._init,C(h,m,E(g._payload),x)}if(la(g))return b(h,m,g,x);if(Zo(g))return v(h,m,g,x);ts(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,g),m.return=h,h=m):(n(h,m),m=xc(g,h.mode,x),m.return=h,h=m),i(h)):n(h,m)}return C}var Fo=Pv(!0),qv=Pv(!1),vi={},un=rr(vi),oi=rr(vi),ai=rr(vi);function Sr(e){if(e===vi)throw Error(P(174));return e}function kp(e,t){switch(le(ai,t),le(oi,e),le(un,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pd(t,e)}de(un),le(un,t)}function Ao(){de(un),de(oi),de(ai)}function Iv(e){Sr(ai.current);var t=Sr(un.current),n=pd(t,e.type);t!==n&&(le(oi,e),le(un,n))}function _p(e){oi.current===e&&(de(un),de(oi))}var ye=rr(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hc=[];function Tp(){for(var e=0;e<hc.length;e++)hc[e]._workInProgressVersionPrimary=null;hc.length=0}var Ss=En.ReactCurrentDispatcher,yc=En.ReactCurrentBatchConfig,Pr=0,be=null,Pe=null,ze=null,cl=!1,Aa=!1,ii=0,qP=0;function $e(){throw Error(P(321))}function Fp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function Ap(e,t,n,r,o,a){if(Pr=a,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?MP:VP,e=n(r,o),Aa){a=0;do{if(Aa=!1,ii=0,25<=a)throw Error(P(301));a+=1,ze=Pe=null,t.updateQueue=null,Ss.current=LP,e=n(r,o)}while(Aa)}if(Ss.current=dl,t=Pe!==null&&Pe.next!==null,Pr=0,ze=Pe=be=null,cl=!1,t)throw Error(P(300));return e}function Ep(){var e=ii!==0;return ii=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?be.memoizedState=ze=e:ze=ze.next=e,ze}function qt(){if(Pe===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=ze===null?be.memoizedState:ze.next;if(t!==null)ze=t,Pe=e;else{if(e===null)throw Error(P(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ze===null?be.memoizedState=ze=e:ze=ze.next=e}return ze}function si(e,t){return typeof t=="function"?t(e):t}function bc(e){var t=qt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,be.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,Wt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,be.lanes|=a,qr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vc(e){var t=qt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Wt(a,t.memoizedState)||(rt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Rv(){}function zv(e,t){var n=be,r=qt(),o=t(),a=!Wt(r.memoizedState,o);if(a&&(r.memoizedState=o,rt=!0),r=r.queue,Pp(Lv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,li(9,Vv.bind(null,n,r,o,t),void 0,null),Me===null)throw Error(P(349));(Pr&30)!==0||Mv(n,t,o)}return o}function Mv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vv(e,t,n,r){t.value=n,t.getSnapshot=r,jv(t)&&Nv(e)}function Lv(e,t,n){return n(function(){jv(t)&&Nv(e)})}function jv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function Nv(e){var t=Fn(e,1);t!==null&&$t(t,e,1,-1)}function sh(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=zP.bind(null,be,e),[t.memoizedState,e]}function li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bv(){return qt().memoizedState}function xs(e,t,n,r){var o=Xt();be.flags|=e,o.memoizedState=li(1|t,n,void 0,r===void 0?null:r)}function ru(e,t,n,r){var o=qt();r=r===void 0?null:r;var a=void 0;if(Pe!==null){var i=Pe.memoizedState;if(a=i.destroy,r!==null&&Fp(r,i.deps)){o.memoizedState=li(t,n,a,r);return}}be.flags|=e,o.memoizedState=li(1|t,n,a,r)}function lh(e,t){return xs(8390656,8,e,t)}function Pp(e,t){return ru(2048,8,e,t)}function Ov(e,t){return ru(4,2,e,t)}function Dv(e,t){return ru(4,4,e,t)}function $v(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wv(e,t,n){return n=n!=null?n.concat([e]):null,ru(4,4,$v.bind(null,t,e),n)}function qp(){}function Hv(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uv(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gv(e,t,n){return(Pr&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(Wt(n,t)||(n=Zb(),be.lanes|=n,qr|=n,e.baseState=!0),t)}function IP(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=yc.transition;yc.transition={};try{e(!1),t()}finally{ne=n,yc.transition=r}}function Kv(){return qt().memoizedState}function RP(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(e))Zv(t,n);else if(n=Tv(e,t,n,r),n!==null){var o=Qe();$t(n,e,r,o),Xv(n,t,r)}}function zP(e,t,n){var r=Zn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(e))Zv(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,Wt(s,i)){var l=t.interleaved;l===null?(o.next=o,xp(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Tv(e,t,o,r),n!==null&&(o=Qe(),$t(n,e,r,o),Xv(n,t,r))}}function Yv(e){var t=e.alternate;return e===be||t!==null&&t===be}function Zv(e,t){Aa=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xv(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lp(e,n)}}var dl={readContext:Pt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},MP={readContext:Pt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:lh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xs(4194308,4,$v.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return xs(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=RP.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:sh,useDebugValue:qp,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=sh(!1),t=e[0];return e=IP.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,o=Xt();if(ge){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Me===null)throw Error(P(349));(Pr&30)!==0||Mv(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,lh(Lv.bind(null,r,a,e),[e]),r.flags|=2048,li(9,Vv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xt(),t=Me.identifierPrefix;if(ge){var n=Sn,r=wn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},VP={readContext:Pt,useCallback:Hv,useContext:Pt,useEffect:Pp,useImperativeHandle:Wv,useInsertionEffect:Ov,useLayoutEffect:Dv,useMemo:Uv,useReducer:bc,useRef:Bv,useState:function(){return bc(si)},useDebugValue:qp,useDeferredValue:function(e){var t=qt();return Gv(t,Pe.memoizedState,e)},useTransition:function(){var e=bc(si)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Rv,useSyncExternalStore:zv,useId:Kv,unstable_isNewReconciler:!1},LP={readContext:Pt,useCallback:Hv,useContext:Pt,useEffect:Pp,useImperativeHandle:Wv,useInsertionEffect:Ov,useLayoutEffect:Dv,useMemo:Uv,useReducer:vc,useRef:Bv,useState:function(){return vc(si)},useDebugValue:qp,useDeferredValue:function(e){var t=qt();return Pe===null?t.memoizedState=e:Gv(t,Pe.memoizedState,e)},useTransition:function(){var e=vc(si)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Rv,useSyncExternalStore:zv,useId:Kv,unstable_isNewReconciler:!1};function Eo(e,t){try{var n="",r=t;do n+=dE(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function wc(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Vd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jP=typeof WeakMap=="function"?WeakMap:Map;function Qv(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pl||(pl=!0,Ud=r),Vd(e,t)},n}function Jv(e,t,n){n=xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Vd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Vd(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jP;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=QP.bind(null,e,t,n),t.then(e,e))}function ch(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dh(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var NP=En.ReactCurrentOwner,rt=!1;function Ye(e,t,n,r){t.child=e===null?qv(t,null,n,r):Fo(t,e.child,n,r)}function fh(e,t,n,r,o){n=n.render;var a=t.ref;return vo(t,o),r=Ap(e,t,n,r,a,o),n=Ep(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,An(e,t,o)):(ge&&n&&hp(t),t.flags|=1,Ye(e,t,r,o),t.child)}function ph(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Np(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,e2(e,t,a,r,o)):(e=Ts(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(i,r)&&e.ref===t.ref)return An(e,t,o)}return t.flags|=1,e=Xn(a,r),e.ref=t.ref,e.return=t,t.child=e}function e2(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(ei(a,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,An(e,t,o)}return Ld(e,t,n,r,o)}function t2(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(oo,dt),dt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(oo,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,le(oo,dt),dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,le(oo,dt),dt|=r;return Ye(e,t,o,n),t.child}function n2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ld(e,t,n,r,o){var a=at(n)?Ar:Ge.current;return a=_o(t,a),vo(t,o),n=Ap(e,t,n,r,a,o),r=Ep(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,An(e,t,o)):(ge&&r&&hp(t),t.flags|=1,Ye(e,t,n,o),t.child)}function mh(e,t,n,r,o){if(at(n)){var a=!0;rl(t)}else a=!1;if(vo(t,o),t.stateNode===null)Cs(e,t),Ev(t,n,r),Md(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=at(n)?Ar:Ge.current,u=_o(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ah(t,i,r,u),Ln=!1;var f=t.memoizedState;i.state=f,ll(t,r,i,o),l=t.memoizedState,s!==r||f!==l||ot.current||Ln?(typeof c=="function"&&(zd(t,n,c,r),l=t.memoizedState),(s=Ln||oh(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Lt(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=at(n)?Ar:Ge.current,l=_o(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&ah(t,i,r,l),Ln=!1,f=t.memoizedState,i.state=f,ll(t,r,i,o);var b=t.memoizedState;s!==d||f!==b||ot.current||Ln?(typeof p=="function"&&(zd(t,n,p,r),b=t.memoizedState),(u=Ln||oh(t,n,u,r,f,b,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return jd(e,t,n,r,a,o)}function jd(e,t,n,r,o,a){n2(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Jg(t,n,!1),An(e,t,a);r=t.stateNode,NP.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Fo(t,e.child,null,a),t.child=Fo(t,null,s,a)):Ye(e,t,s,a),t.memoizedState=r.state,o&&Jg(t,n,!0),t.child}function r2(e){var t=e.stateNode;t.pendingContext?Qg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qg(e,t.context,!1),kp(e,t.containerInfo)}function gh(e,t,n,r,o){return To(),bp(o),t.flags|=256,Ye(e,t,n,r),t.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Bd(e){return{baseLanes:e,cachePool:null,transitions:null}}function o2(e,t,n){var r=t.pendingProps,o=ye.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(ye,o&1),e===null)return Id(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=iu(i,r,0,null),e=Tr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Bd(n),t.memoizedState=Nd,e):Ip(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return BP(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Xn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=Xn(s,a):(a=Tr(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Bd(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Nd,r}return a=e.child,e=a.sibling,r=Xn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ip(e,t){return t=iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ns(e,t,n,r){return r!==null&&bp(r),Fo(t,e.child,null,n),e=Ip(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function BP(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=wc(Error(P(422))),ns(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=iu({mode:"visible",children:r.children},o,0,null),a=Tr(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Fo(t,e.child,null,i),t.child.memoizedState=Bd(i),t.memoizedState=Nd,a);if((t.mode&1)===0)return ns(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(P(419)),r=wc(a,r,void 0),ns(e,t,i,r)}if(s=(i&e.childLanes)!==0,rt||s){if(r=Me,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Fn(e,o),$t(r,e,o,-1))}return jp(),r=wc(Error(P(421))),ns(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=JP.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,ft=Gn(o.nextSibling),ht=t,ge=!0,Nt=null,e!==null&&(_t[Tt++]=wn,_t[Tt++]=Sn,_t[Tt++]=Er,wn=e.id,Sn=e.overflow,Er=t),t=Ip(t,r.children),t.flags|=4096,t)}function hh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rd(e.return,t,n)}function Sc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function a2(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Ye(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hh(e,n,t);else if(e.tag===19)hh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Sc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ul(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Sc(t,!0,n,null,a);break;case"together":Sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function OP(e,t,n){switch(t.tag){case 3:r2(t),To();break;case 5:Iv(t);break;case 1:at(t.type)&&rl(t);break;case 4:kp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(il,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?o2(e,t,n):(le(ye,ye.current&1),e=An(e,t,n),e!==null?e.sibling:null);le(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return a2(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,t2(e,t,n)}return An(e,t,n)}var i2,Od,s2,l2;i2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};s2=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Sr(un.current);var a=null;switch(n){case"input":o=ud(e,o),r=ud(e,r),a=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":o=fd(e,o),r=fd(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}md(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ga.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};l2=function(e,t,n,r){n!==r&&(t.flags|=4)};function na(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function DP(e,t,n){var r=t.pendingProps;switch(yp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return at(t.type)&&nl(),We(t),null;case 3:return r=t.stateNode,Ao(),de(ot),de(Ge),Tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(Yd(Nt),Nt=null))),Od(e,t),We(t),null;case 5:_p(t);var o=Sr(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)s2(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return We(t),null}if(e=Sr(un.current),es(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[tn]=t,r[ri]=a,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<ca.length;o++)ue(ca[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":_g(r,a),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ue("invalid",r);break;case"textarea":Fg(r,a),ue("invalid",r)}md(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ji(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ji(r.textContent,s,e),o=["children",""+s]):Ga.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ue("scroll",r)}switch(n){case"input":Hi(r),Tg(r,a,!0);break;case"textarea":Hi(r),Ag(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=tl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tn]=t,e[ri]=r,i2(e,t,!1,!1),t.stateNode=e;e:{switch(i=gd(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<ca.length;o++)ue(ca[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":_g(e,r),o=ud(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Fg(e,r),o=fd(e,r),ue("invalid",e);break;default:o=r}md(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?jb(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vb(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ka(e,l):typeof l=="number"&&Ka(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ga.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ue("scroll",e):l!=null&&np(e,a,l,i))}switch(n){case"input":Hi(e),Tg(e,r,!1);break;case"textarea":Hi(e),Ag(e);break;case"option":r.value!=null&&e.setAttribute("value",""+er(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?go(e,!!r.multiple,a,!1):r.defaultValue!=null&&go(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)l2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Sr(ai.current),Sr(un.current),es(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(a=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return We(t),null;case 13:if(de(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_v(),To(),t.flags|=98560,a=!1;else if(a=es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[tn]=t}else To(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else Nt!==null&&(Yd(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?qe===0&&(qe=3):jp())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Ao(),Od(e,t),e===null&&ti(t.stateNode.containerInfo),We(t),null;case 10:return Sp(t.type._context),We(t),null;case 17:return at(t.type)&&nl(),We(t),null;case 19:if(de(ye),a=t.memoizedState,a===null)return We(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)na(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ul(e),i!==null){for(t.flags|=128,na(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(ye,ye.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ce()>Po&&(t.flags|=128,r=!0,na(a,!1),t.lanes=4194304)}else{if(!r)if(e=ul(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),na(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ge)return We(t),null}else 2*Ce()-a.renderingStartTime>Po&&n!==1073741824&&(t.flags|=128,r=!0,na(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ce(),t.sibling=null,n=ye.current,le(ye,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Lp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(dt&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function $P(e,t){switch(yp(t),t.tag){case 1:return at(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ao(),de(ot),de(Ge),Tp(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _p(t),null;case 13:if(de(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));To()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ye),null;case 4:return Ao(),null;case 10:return Sp(t.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var rs=!1,Ue=!1,WP=typeof WeakSet=="function"?WeakSet:Set,z=null;function ro(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Dd(e,t,n){try{n()}catch(r){we(e,t,r)}}var yh=!1;function HP(e,t){if(_d=Qs,e=fv(),gp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},Qs=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,C=b.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Lt(t.type,v),C);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){we(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return b=yh,yh=!1,b}function Ea(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Dd(t,n,a)}o=o.next}while(o!==r)}}function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $d(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function u2(e){var t=e.alternate;t!==null&&(e.alternate=null,u2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[ri],delete t[Ed],delete t[FP],delete t[AP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c2(e){return e.tag===5||e.tag===3||e.tag===4}function bh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(Wd(e,t,n),e=e.sibling;e!==null;)Wd(e,t,n),e=e.sibling}function Hd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hd(e,t,n),e=e.sibling;e!==null;)Hd(e,t,n),e=e.sibling}var Ne=null,jt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)d2(e,t,n),n=n.sibling}function d2(e,t,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:Ue||ro(n,t);case 6:var r=Ne,o=jt;Ne=null,Rn(e,t,n),Ne=r,jt=o,Ne!==null&&(jt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(jt?(e=Ne,n=n.stateNode,e.nodeType===8?mc(e.parentNode,n):e.nodeType===1&&mc(e,n),Qa(e)):mc(Ne,n.stateNode));break;case 4:r=Ne,o=jt,Ne=n.stateNode.containerInfo,jt=!0,Rn(e,t,n),Ne=r,jt=o;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Dd(n,t,i),o=o.next}while(o!==r)}Rn(e,t,n);break;case 1:if(!Ue&&(ro(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Rn(e,t,n),Ue=r):Rn(e,t,n);break;default:Rn(e,t,n)}}function vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new WP),t.forEach(function(r){var o=eq.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,jt=!1;break e;case 3:Ne=s.stateNode.containerInfo,jt=!0;break e;case 4:Ne=s.stateNode.containerInfo,jt=!0;break e}s=s.return}if(Ne===null)throw Error(P(160));d2(a,i,o),Ne=null,jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)f2(t,e),t=t.sibling}function f2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),Yt(e),r&4){try{Ea(3,e,e.return),ou(3,e)}catch(v){we(e,e.return,v)}try{Ea(5,e,e.return)}catch(v){we(e,e.return,v)}}break;case 1:Vt(t,e),Yt(e),r&512&&n!==null&&ro(n,n.return);break;case 5:if(Vt(t,e),Yt(e),r&512&&n!==null&&ro(n,n.return),e.flags&32){var o=e.stateNode;try{Ka(o,"")}catch(v){we(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Rb(o,a),gd(s,i);var u=gd(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?jb(o,d):c==="dangerouslySetInnerHTML"?Vb(o,d):c==="children"?Ka(o,d):np(o,c,d,u)}switch(s){case"input":cd(o,a);break;case"textarea":zb(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?go(o,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?go(o,!!a.multiple,a.defaultValue,!0):go(o,!!a.multiple,a.multiple?[]:"",!1))}o[ri]=a}catch(v){we(e,e.return,v)}}break;case 6:if(Vt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){we(e,e.return,v)}}break;case 3:if(Vt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(t.containerInfo)}catch(v){we(e,e.return,v)}break;case 4:Vt(t,e),Yt(e);break;case 13:Vt(t,e),Yt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Mp=Ce())),r&4&&vh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,Vt(t,e),Ue=u):Vt(t,e),Yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ea(4,f,f.return);break;case 1:ro(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:ro(f,f.return);break;case 22:if(f.memoizedState!==null){Sh(d);continue}}p!==null?(p.return=f,z=p):Sh(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Lb("display",i))}catch(v){we(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){we(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vt(t,e),Yt(e),r&4&&vh(e);break;case 21:break;default:Vt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(c2(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ka(o,""),r.flags&=-33);var a=bh(e);Hd(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=bh(e);Wd(e,s,i);break;default:throw Error(P(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function UP(e,t,n){z=e,p2(e)}function p2(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||rs;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=rs;var u=Ue;if(rs=i,(Ue=l)&&!u)for(z=o;z!==null;)i=z,l=i.child,i.tag===22&&i.memoizedState!==null?xh(o):l!==null?(l.return=i,z=l):xh(o);for(;a!==null;)z=a,p2(a),a=a.sibling;z=o,rs=s,Ue=u}wh(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,z=a):wh(e)}}function wh(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||ou(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&rh(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rh(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Qa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ue||t.flags&512&&$d(t)}catch(f){we(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Sh(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function xh(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ou(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){we(t,o,l)}}var a=t.return;try{$d(t)}catch(l){we(t,a,l)}break;case 5:var i=t.return;try{$d(t)}catch(l){we(t,i,l)}}}catch(l){we(t,t.return,l)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var GP=Math.ceil,fl=En.ReactCurrentDispatcher,Rp=En.ReactCurrentOwner,Et=En.ReactCurrentBatchConfig,K=0,Me=null,Ae=null,Oe=0,dt=0,oo=rr(0),qe=0,ui=null,qr=0,au=0,zp=0,Pa=null,tt=null,Mp=0,Po=1/0,hn=null,pl=!1,Ud=null,Yn=null,os=!1,$n=null,ml=0,qa=0,Gd=null,ks=-1,_s=0;function Qe(){return(K&6)!==0?Ce():ks!==-1?ks:ks=Ce()}function Zn(e){return(e.mode&1)===0?1:(K&2)!==0&&Oe!==0?Oe&-Oe:PP.transition!==null?(_s===0&&(_s=Zb()),_s):(e=ne,e!==0||(e=window.event,e=e===void 0?16:rv(e.type)),e)}function $t(e,t,n,r){if(50<qa)throw qa=0,Gd=null,Error(P(185));hi(e,n,r),((K&2)===0||e!==Me)&&(e===Me&&((K&2)===0&&(au|=n),qe===4&&Bn(e,Oe)),it(e,r),n===1&&K===0&&(t.mode&1)===0&&(Po=Ce()+500,tu&&or()))}function it(e,t){var n=e.callbackNode;PE(e,t);var r=Xs(e,e===Me?Oe:0);if(r===0)n!==null&&qg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qg(n),t===1)e.tag===0?EP(Ch.bind(null,e)):xv(Ch.bind(null,e)),_P(function(){(K&6)===0&&or()}),n=null;else{switch(Xb(r)){case 1:n=sp;break;case 4:n=Kb;break;case 16:n=Zs;break;case 536870912:n=Yb;break;default:n=Zs}n=S2(n,m2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function m2(e,t){if(ks=-1,_s=0,(K&6)!==0)throw Error(P(327));var n=e.callbackNode;if(wo()&&e.callbackNode!==n)return null;var r=Xs(e,e===Me?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=gl(e,r);else{t=r;var o=K;K|=2;var a=h2();(Me!==e||Oe!==t)&&(hn=null,Po=Ce()+500,_r(e,t));do try{ZP();break}catch(s){g2(e,s)}while(1);wp(),fl.current=a,K=o,Ae!==null?t=0:(Me=null,Oe=0,t=qe)}if(t!==0){if(t===2&&(o=wd(e),o!==0&&(r=o,t=Kd(e,o))),t===1)throw n=ui,_r(e,0),Bn(e,r),it(e,Ce()),n;if(t===6)Bn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!KP(o)&&(t=gl(e,r),t===2&&(a=wd(e),a!==0&&(r=a,t=Kd(e,a))),t===1))throw n=ui,_r(e,0),Bn(e,r),it(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:pr(e,tt,hn);break;case 3:if(Bn(e,r),(r&130023424)===r&&(t=Mp+500-Ce(),10<t)){if(Xs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ad(pr.bind(null,e,tt,hn),t);break}pr(e,tt,hn);break;case 4:if(Bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Dt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GP(r/1960))-r,10<r){e.timeoutHandle=Ad(pr.bind(null,e,tt,hn),r);break}pr(e,tt,hn);break;case 5:pr(e,tt,hn);break;default:throw Error(P(329))}}}return it(e,Ce()),e.callbackNode===n?m2.bind(null,e):null}function Kd(e,t){var n=Pa;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=gl(e,t),e!==2&&(t=tt,tt=n,t!==null&&Yd(t)),e}function Yd(e){tt===null?tt=e:tt.push.apply(tt,e)}function KP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Wt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bn(e,t){for(t&=~zp,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function Ch(e){if((K&6)!==0)throw Error(P(327));wo();var t=Xs(e,0);if((t&1)===0)return it(e,Ce()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=wd(e);r!==0&&(t=r,n=Kd(e,r))}if(n===1)throw n=ui,_r(e,0),Bn(e,t),it(e,Ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,tt,hn),it(e,Ce()),null}function Vp(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Po=Ce()+500,tu&&or())}}function Ir(e){$n!==null&&$n.tag===0&&(K&6)===0&&wo();var t=K;K|=1;var n=Et.transition,r=ne;try{if(Et.transition=null,ne=1,e)return e()}finally{ne=r,Et.transition=n,K=t,(K&6)===0&&or()}}function Lp(){dt=oo.current,de(oo)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kP(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(yp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:Ao(),de(ot),de(Ge),Tp();break;case 5:_p(r);break;case 4:Ao();break;case 13:de(ye);break;case 19:de(ye);break;case 10:Sp(r.type._context);break;case 22:case 23:Lp()}n=n.return}if(Me=e,Ae=e=Xn(e.current,null),Oe=dt=t,qe=0,ui=null,zp=au=qr=0,tt=Pa=null,wr!==null){for(t=0;t<wr.length;t++)if(n=wr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}wr=null}return e}function g2(e,t){do{var n=Ae;try{if(wp(),Ss.current=dl,cl){for(var r=be.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}cl=!1}if(Pr=0,ze=Pe=be=null,Aa=!1,ii=0,Rp.current=null,n===null||n.return===null){qe=1,ui=t,Ae=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=Oe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ch(i);if(p!==null){p.flags&=-257,dh(p,i,s,a,t),p.mode&1&&uh(a,u,t),t=p,l=u;var b=t.updateQueue;if(b===null){var v=new Set;v.add(l),t.updateQueue=v}else b.add(l);break e}else{if((t&1)===0){uh(a,u,t),jp();break e}l=Error(P(426))}}else if(ge&&s.mode&1){var C=ch(i);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),dh(C,i,s,a,t),bp(Eo(l,s));break e}}a=l=Eo(l,s),qe!==4&&(qe=2),Pa===null?Pa=[a]:Pa.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Qv(a,l,t);nh(a,h);break e;case 1:s=l;var m=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yn===null||!Yn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Jv(a,s,t);nh(a,x);break e}}a=a.return}while(a!==null)}b2(n)}catch(F){t=F,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function h2(){var e=fl.current;return fl.current=dl,e===null?dl:e}function jp(){(qe===0||qe===3||qe===2)&&(qe=4),Me===null||(qr&268435455)===0&&(au&268435455)===0||Bn(Me,Oe)}function gl(e,t){var n=K;K|=2;var r=h2();(Me!==e||Oe!==t)&&(hn=null,_r(e,t));do try{YP();break}catch(o){g2(e,o)}while(1);if(wp(),K=n,fl.current=r,Ae!==null)throw Error(P(261));return Me=null,Oe=0,qe}function YP(){for(;Ae!==null;)y2(Ae)}function ZP(){for(;Ae!==null&&!SE();)y2(Ae)}function y2(e){var t=w2(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?b2(e):Ae=t,Rp.current=null}function b2(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=DP(n,t,dt),n!==null){Ae=n;return}}else{if(n=$P(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);qe===0&&(qe=5)}function pr(e,t,n){var r=ne,o=Et.transition;try{Et.transition=null,ne=1,XP(e,t,n,r)}finally{Et.transition=o,ne=r}return null}function XP(e,t,n,r){do wo();while($n!==null);if((K&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(qE(e,a),e===Me&&(Ae=Me=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||os||(os=!0,S2(Zs,function(){return wo(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Et.transition,Et.transition=null;var i=ne;ne=1;var s=K;K|=4,Rp.current=null,HP(e,n),f2(n,e),yP(Td),Qs=!!_d,Td=_d=null,e.current=n,UP(n),xE(),K=s,ne=i,Et.transition=a}else e.current=n;if(os&&(os=!1,$n=e,ml=o),a=e.pendingLanes,a===0&&(Yn=null),_E(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(pl)throw pl=!1,e=Ud,Ud=null,e;return(ml&1)!==0&&e.tag!==0&&wo(),a=e.pendingLanes,(a&1)!==0?e===Gd?qa++:(qa=0,Gd=e):qa=0,or(),null}function wo(){if($n!==null){var e=Xb(ml),t=Et.transition,n=ne;try{if(Et.transition=null,ne=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,ml=0,(K&6)!==0)throw Error(P(331));var o=K;for(K|=4,z=e.current;z!==null;){var a=z,i=a.child;if((z.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Ea(8,c,a)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,p=c.return;if(u2(c),c===u){z=null;break}if(f!==null){f.return=p,z=f;break}z=p}}}var b=a.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}z=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,z=i;else e:for(;z!==null;){if(a=z,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Ea(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,z=h;break e}z=a.return}}var m=e.current;for(z=m;z!==null;){i=z;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,z=g;else e:for(i=m;z!==null;){if(s=z,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ou(9,s)}}catch(F){we(s,s.return,F)}if(s===i){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(K=o,or(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Zl,e)}catch{}r=!0}return r}finally{ne=n,Et.transition=t}}return!1}function kh(e,t,n){t=Eo(n,t),t=Qv(e,t,1),e=Kn(e,t,1),t=Qe(),e!==null&&(hi(e,1,t),it(e,t))}function we(e,t,n){if(e.tag===3)kh(e,e,n);else for(;t!==null;){if(t.tag===3){kh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Eo(n,e),e=Jv(t,e,1),t=Kn(t,e,1),e=Qe(),t!==null&&(hi(t,1,e),it(t,e));break}}t=t.return}}function QP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Oe&n)===n&&(qe===4||qe===3&&(Oe&130023424)===Oe&&500>Ce()-Mp?_r(e,0):zp|=n),it(e,t)}function v2(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var n=Qe();e=Fn(e,t),e!==null&&(hi(e,t,n),it(e,n))}function JP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),v2(e,n)}function eq(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),v2(e,n)}var w2;w2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,OP(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,ge&&(t.flags&1048576)!==0&&Cv(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cs(e,t),e=t.pendingProps;var o=_o(t,Ge.current);vo(t,n),o=Ap(null,t,r,e,o,n);var a=Ep();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(a=!0,rl(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cp(t),o.updater=nu,t.stateNode=o,o._reactInternals=t,Md(t,r,e,n),t=jd(null,t,r,!0,a,n)):(t.tag=0,ge&&a&&hp(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=nq(r),e=Lt(r,e),o){case 0:t=Ld(null,t,r,e,n);break e;case 1:t=mh(null,t,r,e,n);break e;case 11:t=fh(null,t,r,e,n);break e;case 14:t=ph(null,t,r,Lt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Ld(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),mh(e,t,r,o,n);case 3:e:{if(r2(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Fv(e,t),ll(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Eo(Error(P(423)),t),t=gh(e,t,r,n,o);break e}else if(r!==o){o=Eo(Error(P(424)),t),t=gh(e,t,r,n,o);break e}else for(ft=Gn(t.stateNode.containerInfo.firstChild),ht=t,ge=!0,Nt=null,n=qv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===o){t=An(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Iv(t),e===null&&Id(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Fd(r,o)?i=null:a!==null&&Fd(r,a)&&(t.flags|=32),n2(e,t),Ye(e,t,i,n),t.child;case 6:return e===null&&Id(t),null;case 13:return o2(e,t,n);case 4:return kp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fo(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),fh(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,le(il,r._currentValue),r._currentValue=i,a!==null)if(Wt(a.value,i)){if(a.children===o.children&&!ot.current){t=An(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=xn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Rd(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(P(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Rd(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,vo(t,n),o=Pt(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=Lt(r,t.pendingProps),o=Lt(r.type,o),ph(e,t,r,o,n);case 15:return e2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Cs(e,t),t.tag=1,at(r)?(e=!0,rl(t)):e=!1,vo(t,n),Ev(t,r,o),Md(t,r,o,n),jd(null,t,r,!0,e,n);case 19:return a2(e,t,n);case 22:return t2(e,t,n)}throw Error(P(156,t.tag))};function S2(e,t){return Gb(e,t)}function tq(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new tq(e,t,n,r)}function Np(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nq(e){if(typeof e=="function")return Np(e)?1:0;if(e!=null){if(e=e.$$typeof,e===op)return 11;if(e===ap)return 14}return 2}function Xn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Np(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kr:return Tr(n.children,o,a,t);case rp:i=8,o|=8;break;case ad:return e=Ft(12,n,t,o|2),e.elementType=ad,e.lanes=a,e;case id:return e=Ft(13,n,t,o),e.elementType=id,e.lanes=a,e;case sd:return e=Ft(19,n,t,o),e.elementType=sd,e.lanes=a,e;case Pb:return iu(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ab:i=10;break e;case Eb:i=9;break e;case op:i=11;break e;case ap:i=14;break e;case Vn:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ft(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Tr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function iu(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Pb,e.lanes=n,e.stateNode={isHidden:!1},e}function xc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Cc(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rq(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bp(e,t,n,r,o,a,i,s,l){return e=new rq(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cp(a),e}function oq(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function x2(e){if(!e)return tr;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(at(n))return Sv(e,n,t)}return t}function C2(e,t,n,r,o,a,i,s,l){return e=Bp(n,r,!0,e,o,a,i,s,l),e.context=x2(null),n=e.current,r=Qe(),o=Zn(n),a=xn(r,o),a.callback=t!=null?t:null,Kn(n,a,o),e.current.lanes=o,hi(e,o,r),it(e,r),e}function su(e,t,n,r){var o=t.current,a=Qe(),i=Zn(o);return n=x2(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kn(o,t,i),e!==null&&($t(e,o,i,a),ws(e,o,i)),i}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Op(e,t){_h(e,t),(e=e.alternate)&&_h(e,t)}function aq(){return null}var k2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dp(e){this._internalRoot=e}lu.prototype.render=Dp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));su(e,t,null,null)};lu.prototype.unmount=Dp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){su(null,e,null,null)}),t[Tn]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ev();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&nv(e)}};function $p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Th(){}function iq(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=hl(i);a.call(u)}}var i=C2(t,r,e,0,null,!1,!1,"",Th);return e._reactRootContainer=i,e[Tn]=i.current,ti(e.nodeType===8?e.parentNode:e),Ir(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=hl(l);s.call(u)}}var l=Bp(e,0,!1,null,null,!1,!1,"",Th);return e._reactRootContainer=l,e[Tn]=l.current,ti(e.nodeType===8?e.parentNode:e),Ir(function(){su(t,l,n,r)}),l}function cu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=hl(i);s.call(l)}}su(t,i,e,o)}else i=iq(n,t,e,o,r);return hl(i)}Qb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ua(t.pendingLanes);n!==0&&(lp(t,n|1),it(t,Ce()),(K&6)===0&&(Po=Ce()+500,or()))}break;case 13:Ir(function(){var r=Fn(e,1);if(r!==null){var o=Qe();$t(r,e,1,o)}}),Op(e,1)}};up=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var n=Qe();$t(t,e,134217728,n)}Op(e,134217728)}};Jb=function(e){if(e.tag===13){var t=Zn(e),n=Fn(e,t);if(n!==null){var r=Qe();$t(n,e,t,r)}Op(e,t)}};ev=function(){return ne};tv=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};yd=function(e,t,n){switch(t){case"input":if(cd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=eu(r);if(!o)throw Error(P(90));Ib(r),cd(r,o)}}}break;case"textarea":zb(e,n);break;case"select":t=n.value,t!=null&&go(e,!!n.multiple,t,!1)}};Ob=Vp;Db=Ir;var sq={usingClientEntryPoint:!1,Events:[bi,Qr,eu,Nb,Bb,Vp]},ra={findFiberByHostInstance:vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lq={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hb(e),e===null?null:e.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||aq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{Zl=as.inject(lq),ln=as}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sq;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$p(t))throw Error(P(200));return oq(e,t,null,n)};wt.createRoot=function(e,t){if(!$p(e))throw Error(P(299));var n=!1,r="",o=k2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bp(e,1,!1,null,null,n,!1,r,o),e[Tn]=t.current,ti(e.nodeType===8?e.parentNode:e),new Dp(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Hb(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Ir(e)};wt.hydrate=function(e,t,n){if(!uu(t))throw Error(P(200));return cu(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!$p(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=k2;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=C2(t,null,e,1,n!=null?n:null,o,!1,a,i),e[Tn]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new lu(t)};wt.render=function(e,t,n){if(!uu(t))throw Error(P(200));return cu(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!uu(e))throw Error(P(40));return e._reactRootContainer?(Ir(function(){cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1};wt.unstable_batchedUpdates=Vp;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uu(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return cu(e,t,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=wt})(Yl);var[uq,cq]=dn({strict:!1,name:"PortalManagerContext"});function _2(e){const{children:t,zIndex:n}=e;return T(uq,{value:{zIndex:n},children:t})}_2.displayName="PortalManager";var[T2,dq]=dn({strict:!1,name:"PortalContext"}),Wp="chakra-portal",fq=".chakra-portal",pq=e=>T("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),mq=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=k.exports.useState(null),a=k.exports.useRef(null),[,i]=k.exports.useState({});k.exports.useEffect(()=>i({}),[]);const s=dq(),l=cq();Ra(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Wp,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?T(pq,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?Yl.exports.createPortal(T(T2,{value:a.current,children:u}),a.current):T("span",{ref:c=>{c&&o(c)}})},gq=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=k.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Wp),l},[o]),[,s]=k.exports.useState({});return Ra(()=>s({}),[]),Ra(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?Yl.exports.createPortal(T(T2,{value:r?i:null,children:t}),i):null};function wi(e){const{containerRef:t,...n}=e;return t?T(gq,{containerRef:t,...n}):T(mq,{...n})}wi.defaultProps={appendToParentPortal:!0};wi.className=Wp;wi.selector=fq;wi.displayName="Portal";function hq(e,t){const n=x7(e);k.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function yq(e,...t){return bq(e)?e(...t):e}var bq=e=>typeof e=="function",vq=(e,t)=>e.find(n=>n.id===t);function Fh(e,t){const n=F2(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function F2(e,t){for(const[n,r]of Object.entries(e))if(vq(r,t))return n}function wq(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function Sq(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var xq={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},Ia=Cq(xq);function Cq(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=kq(o,a),{position:s,id:l}=i;return r(u=>{var f,p;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(p=u[s])!=null?p:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=Fh(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:Tq(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=F2(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(Fh(Ia.getState(),o).position)}}var Ah=0;function kq(e,t={}){var o,a;Ah+=1;const n=(o=t.id)!=null?o:Ah,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>Ia.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var _q=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,icon:l}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return M.createElement(nb,{addRole:!1,status:t,variant:n,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto"},T(ob,{children:l}),M.createElement(N.div,{flex:"1",maxWidth:"100%"},o&&T(ab,{id:u==null?void 0:u.title,children:o}),s&&T(rb,{id:u==null?void 0:u.description,display:"block",children:s})),a&&T(lb,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))};function Tq(e={}){const{render:t,toastComponent:n=_q}=e;return o=>typeof t=="function"?t({...o,...e}):T(n,{...o,...e})}var Fq={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},A2=k.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=Fq,toastSpacing:c="0.5rem"}=e,[d,f]=k.exports.useState(s),p=Hk();vg(()=>{p||r==null||r()},[p]),vg(()=>{f(s)},[s]);const b=()=>f(null),v=()=>f(s),C=()=>{p&&o()};k.exports.useEffect(()=>{p&&a&&o()},[p,a,o]),hq(C,d);const h=k.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),m=k.exports.useMemo(()=>wq(i),[i]);return M.createElement(NF.li,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:b,onHoverEnd:v,custom:{position:i},style:m},M.createElement(N.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:h},yq(n,{id:t,onClose:C})))});A2.displayName="ToastComponent";var Aq=e=>{const t=k.exports.useSyncExternalStore(Ia.subscribe,Ia.getState,Ia.getState),{children:n,motionVariants:r,component:o=A2,portalProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return T("ul",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:Sq(l),children:T(UF,{initial:!1,children:u.map(c=>T(o,{motionVariants:r,...c},c.id))})},l)});return X(pt,{children:[n,T(wi,{...a,children:s})]})},Eq=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetCSS:o=!0,theme:a={},environment:i,cssVarsRoot:s}=e,l=T(Cb,{environment:i,children:t});return T(d7,{theme:a,cssVarsRoot:s,children:X(Wh,{colorModeManager:n,options:a.config,children:[o?T(TA,{}):T(_A,{}),T(p7,{}),r?T(_2,{zIndex:r,children:l}):l]})})},Pq=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return X(Eq,{theme:r,...a,children:[n,T(Aq,{...o})]})},qq=Pq(t7),Zd={},Eh=Yl.exports;Zd.createRoot=Eh.createRoot,Zd.hydrateRoot=Eh.hydrateRoot;const Iq=({onChange:e})=>T(Kl,{children:T(Kf,{variant:"outline",onChange:e,w:200,m:5})}),Rq=e=>{const t=e.recipe.healthLabels.map(n=>T(ie,{as:"mark",bg:"orange.200",rounded:"5",textAlign:"center",m:"2",whiteSpace:"nowrap",children:n},e.recipe.healthLabels[n]));return T(Fr,{children:t})},E2=e=>{const t=e.recipe.cautions.map(n=>T(ie,{as:"mark",bg:"red.200",rounded:"5",textAlign:"center",m:"2",whiteSpace:"nowrap",children:n},e.recipe.cautions[n]));return T(Fr,{children:t})},P2=e=>{const t=e.recipe.dietLabels.map(n=>T(ie,{as:"mark",bg:"green.200",rounded:"5",textAlign:"center",m:"2",whiteSpace:"nowrap",children:n},e.recipe.dietLabels[n]));return T(Fr,{children:t})},zq=({item:e,onClick:t})=>{const n=["Vegan","Vegetarian"];return T(pt,{children:X(Fr,{borderRadius:"20",bg:"gray.100",mb:"5",display:"flex",flexDirection:"column",width:"200px",alignItems:"center",cursor:"pointer",onClick:()=>t(e),children:[T(Wf,{margin:"5",borderRadius:"20",boxSize:"100px",src:e.recipe.image}),T(ie,{as:"samp",color:"gray",textAlign:"center",fontSize:"lg",children:e.recipe.mealType}),T(ie,{as:"b",mb:"2",textAlign:"center",fontSize:"xl",children:e.recipe.label}),n.some(r=>String(e.recipe.healthLabels).includes(r))&&T(pt,{children:T(ie,{mb:"2",textAlign:"center",fontSize:"lg",children:String(e.recipe.healthLabels.filter(r=>n.includes(r))).replaceAll(",",", ")})}),P2(e),X(ie,{m:"2",textAlign:"center",fontSize:"lg",children:["Dish: ",T("b",{children:String(e.recipe.dishType)})]}),String(e.recipe.cautions).length!==0&&X(pt,{children:[T(ie,{mb:"2",textAlign:"center",fontSize:"lg",children:"Cautions:"}),E2(e)]})]})})},Mq=({items:e,onClick:t})=>T(pt,{children:T(Us,{flexDirection:{base:"column",md:"row"},justifyContent:"center",flexWrap:"wrap",children:e.map(n=>T(zq,{item:n,onClick:t},n.recipe.label))})}),Vq=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),q2=Vq.hits;console.log(q2);const Lq=({onClick:e})=>{const[t,n]=k.exports.useState(""),r=a=>n(a.target.value),o=q2.filter(a=>a.recipe.label.toLowerCase().includes(t.toLowerCase()));return X(pt,{children:[X(Kl,{children:[T(ie,{fontSize:"lg",children:"Search for a recipe"}),T(Iq,{onChange:r})]}),T(Mq,{items:o,onClick:e})]})},jq=({item:e,onClick:t})=>X(Kl,{flexDirection:"column",children:[T(Xf,{fontSize:"3xl",color:"blue.200",children:e.recipe.label}),T(Wf,{margin:"5",borderRadius:"20",boxSize:"300px",src:e.recipe.image}),X(Us,{flexDirection:{base:"column",md:"row"},children:[X(Fr,{maxWidth:{base:"80%",md:"50%"},children:[X(ie,{textAlign:"center",fontSize:"lg",children:["Dish: ",T("b",{children:String(e.recipe.dishType)})]}),T("br",{}),T(ie,{as:"samp",color:"gray",textAlign:"center",fontSize:"lg",children:e.recipe.mealType}),T("br",{}),X(ie,{as:"samp",color:"gray",textAlign:"center",fontSize:"lg",children:["Total cooking time: ",T("b",{children:e.recipe.totalTime+" Minutes"})]}),T("br",{}),X(ie,{as:"samp",color:"gray",textAlign:"center",fontSize:"lg",children:["Servings: ",T("b",{children:e.recipe.yield})]}),T("br",{}),T(ie,{as:"samp",color:"gray",textAlign:"center",fontSize:"lg",children:"Ingredients:"}),T("br",{}),T(ie,{listStylePosition:"inside",style:{whiteSpace:"pre-line"},children:T("ul",{children:e.recipe.ingredients.map(n=>T("li",{children:n.text+`
`},n.text))})})]}),X(Fr,{maxWidth:{base:"80%",md:"50%"},bg:"gray.100",rounded:"5",m:"auto",children:[T(ie,{color:"black",textAlign:"center",fontSize:"lg",children:"Health labels:"}),Rq(e),String(e.recipe.cautions).length!==0&&X(pt,{children:[T(ie,{color:"black",textAlign:"center",fontSize:"lg",mt:"4",children:"Cautions:"}),E2(e)]}),String(e.recipe.dietLabels).length!==0&&X(pt,{children:[T(ie,{color:"black",textAlign:"center",fontSize:"lg",mt:"4",children:"Diet:"}),P2(e)]}),T(ie,{color:"black",textAlign:"center",fontSize:"lg",mt:"4",children:"Total nutrients:"}),X(Us,{justifyContent:"space-evenly",flexWrap:"wrap",columnGap:"3",children:[X(ie,{children:[Math.round(e.recipe.totalNutrients.ENERC_KCAL.quantity)+" kcal"," ",T("br",{})," ","CALORIES"]}),X(ie,{children:[Math.round(e.recipe.totalNutrients.FAT.quantity)+" g"," ",T("br",{})," ","FAT"]}),X(ie,{children:[Math.round(e.recipe.totalNutrients.CHOCDF.quantity)+" g"," ",T("br",{})," ","CARBS"]}),X(ie,{children:[Math.round(e.recipe.totalNutrients.PROCNT.quantity)+" g"," ",T("br",{})," ","PROTEIN"]}),X(ie,{children:[Math.round(e.recipe.totalNutrients.CHOLE.quantity)+" mg"," ",T("br",{})," ","CHOLESTEROL"]}),X(ie,{children:[Math.round(e.recipe.totalNutrients.NA.quantity)+" mg"," ",T("br",{})," ","SODIUM"]})]})]})]}),T(Uf,{left:"1",top:"1",position:"fixed",onClick:()=>t(),variant:"solid",children:"\xAB"})]}),Nq=()=>{const[e,t]=k.exports.useState();return T("div",{className:"recipesPage",children:e?T(pt,{children:T(jq,{item:e,onClick:t})}):X(pt,{children:[T(Xf,{textAlign:"center",m:8,fontSize:"5xl",color:"blue.200",children:"Winc Recipe Checker"}),T(Lq,{onClick:t})]})})};Zd.createRoot(document.getElementById("root")).render(T(M.StrictMode,{children:T(qq,{children:T(Nq,{})})}));
