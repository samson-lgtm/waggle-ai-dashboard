var iH=Object.defineProperty;var uH=(e,n,t)=>n in e?iH(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var we=(e,n,t)=>uH(e,typeof n!="symbol"?n+"":n,t);function pH(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hf={exports:{}},$u={},vf={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function sH(){if(iI)return qe;iI=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),p=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=d&&T[d]||T["@@iterator"],typeof T=="function"?T:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function b(T,L,Z){this.props=T,this.context=L,this.refs=I,this.updater=Z||y}b.prototype.isReactComponent={},b.prototype.setState=function(T,L){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,L,"setState")},b.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function W(){}W.prototype=b.prototype;function S(T,L,Z){this.props=T,this.context=L,this.refs=I,this.updater=Z||y}var M=S.prototype=new W;M.constructor=S,B(M,b.prototype),M.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,A={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(T,L,Z){var se,he={},Ie=null,Be=null;if(L!=null)for(se in L.ref!==void 0&&(Be=L.ref),L.key!==void 0&&(Ie=""+L.key),L)w.call(L,se)&&!N.hasOwnProperty(se)&&(he[se]=L[se]);var me=arguments.length-2;if(me===1)he.children=Z;else if(1<me){for(var ae=Array(me),re=0;re<me;re++)ae[re]=arguments[re+2];he.children=ae}if(T&&T.defaultProps)for(se in me=T.defaultProps,me)he[se]===void 0&&(he[se]=me[se]);return{$$typeof:e,type:T,key:Ie,ref:Be,props:he,_owner:A.current}}function H(T,L){return{$$typeof:e,type:T.type,key:L,ref:T.ref,props:T.props,_owner:T._owner}}function k(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function j(T){var L={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return L[Z]})}var R=/\/+/g;function F(T,L){return typeof T=="object"&&T!==null&&T.key!=null?j(""+T.key):L.toString(36)}function V(T,L,Z,se,he){var Ie=typeof T;(Ie==="undefined"||Ie==="boolean")&&(T=null);var Be=!1;if(T===null)Be=!0;else switch(Ie){case"string":case"number":Be=!0;break;case"object":switch(T.$$typeof){case e:case n:Be=!0}}if(Be)return Be=T,he=he(Be),T=se===""?"."+F(Be,0):se,O(he)?(Z="",T!=null&&(Z=T.replace(R,"$&/")+"/"),V(he,L,Z,"",function(re){return re})):he!=null&&(k(he)&&(he=H(he,Z+(!he.key||Be&&Be.key===he.key?"":(""+he.key).replace(R,"$&/")+"/")+T)),L.push(he)),1;if(Be=0,se=se===""?".":se+":",O(T))for(var me=0;me<T.length;me++){Ie=T[me];var ae=se+F(Ie,me);Be+=V(Ie,L,Z,ae,he)}else if(ae=v(T),typeof ae=="function")for(T=ae.call(T),me=0;!(Ie=T.next()).done;)Ie=Ie.value,ae=se+F(Ie,me++),Be+=V(Ie,L,Z,ae,he);else if(Ie==="object")throw L=String(T),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Be}function G(T,L,Z){if(T==null)return T;var se=[],he=0;return V(T,se,"","",function(Ie){return L.call(Z,Ie,he++)}),se}function Y(T){if(T._status===-1){var L=T._result;L=L(),L.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=L)}if(T._status===1)return T._result.default;throw T._result}var Q={current:null},$={transition:null},K={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:$,ReactCurrentOwner:A};function ne(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:G,forEach:function(T,L,Z){G(T,function(){L.apply(this,arguments)},Z)},count:function(T){var L=0;return G(T,function(){L++}),L},toArray:function(T){return G(T,function(L){return L})||[]},only:function(T){if(!k(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},qe.Component=b,qe.Fragment=t,qe.Profiler=a,qe.PureComponent=S,qe.StrictMode=r,qe.Suspense=c,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,qe.act=ne,qe.cloneElement=function(T,L,Z){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var se=B({},T.props),he=T.key,Ie=T.ref,Be=T._owner;if(L!=null){if(L.ref!==void 0&&(Ie=L.ref,Be=A.current),L.key!==void 0&&(he=""+L.key),T.type&&T.type.defaultProps)var me=T.type.defaultProps;for(ae in L)w.call(L,ae)&&!N.hasOwnProperty(ae)&&(se[ae]=L[ae]===void 0&&me!==void 0?me[ae]:L[ae])}var ae=arguments.length-2;if(ae===1)se.children=Z;else if(1<ae){me=Array(ae);for(var re=0;re<ae;re++)me[re]=arguments[re+2];se.children=me}return{$$typeof:e,type:T.type,key:he,ref:Ie,props:se,_owner:Be}},qe.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:i,_context:T},T.Consumer=T},qe.createElement=P,qe.createFactory=function(T){var L=P.bind(null,T);return L.type=T,L},qe.createRef=function(){return{current:null}},qe.forwardRef=function(T){return{$$typeof:s,render:T}},qe.isValidElement=k,qe.lazy=function(T){return{$$typeof:m,_payload:{_status:-1,_result:T},_init:Y}},qe.memo=function(T,L){return{$$typeof:f,type:T,compare:L===void 0?null:L}},qe.startTransition=function(T){var L=$.transition;$.transition={};try{T()}finally{$.transition=L}},qe.unstable_act=ne,qe.useCallback=function(T,L){return Q.current.useCallback(T,L)},qe.useContext=function(T){return Q.current.useContext(T)},qe.useDebugValue=function(){},qe.useDeferredValue=function(T){return Q.current.useDeferredValue(T)},qe.useEffect=function(T,L){return Q.current.useEffect(T,L)},qe.useId=function(){return Q.current.useId()},qe.useImperativeHandle=function(T,L,Z){return Q.current.useImperativeHandle(T,L,Z)},qe.useInsertionEffect=function(T,L){return Q.current.useInsertionEffect(T,L)},qe.useLayoutEffect=function(T,L){return Q.current.useLayoutEffect(T,L)},qe.useMemo=function(T,L){return Q.current.useMemo(T,L)},qe.useReducer=function(T,L,Z){return Q.current.useReducer(T,L,Z)},qe.useRef=function(T){return Q.current.useRef(T)},qe.useState=function(T){return Q.current.useState(T)},qe.useSyncExternalStore=function(T,L,Z){return Q.current.useSyncExternalStore(T,L,Z)},qe.useTransition=function(){return Q.current.useTransition()},qe.version="18.3.1",qe}var uI;function sy(){return uI||(uI=1,vf.exports=sH()),vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pI;function lH(){if(pI)return $u;pI=1;var e=sy(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(s,c,f){var m,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(m in c)r.call(c,m)&&!i.hasOwnProperty(m)&&(d[m]=c[m]);if(s&&s.defaultProps)for(m in c=s.defaultProps,c)d[m]===void 0&&(d[m]=c[m]);return{$$typeof:n,type:s,key:v,ref:y,props:d,_owner:a.current}}return $u.Fragment=t,$u.jsx=p,$u.jsxs=p,$u}var sI;function cH(){return sI||(sI=1,hf.exports=lH()),hf.exports}var _=cH(),fl={},gf={exports:{}},gt={},yf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function fH(){return lI||(lI=1,(function(e){function n($,K){var ne=$.length;$.push(K);e:for(;0<ne;){var T=ne-1>>>1,L=$[T];if(0<a(L,K))$[T]=K,$[ne]=L,ne=T;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],ne=$.pop();if(ne!==K){$[0]=ne;e:for(var T=0,L=$.length,Z=L>>>1;T<Z;){var se=2*(T+1)-1,he=$[se],Ie=se+1,Be=$[Ie];if(0>a(he,ne))Ie<L&&0>a(Be,he)?($[T]=Be,$[Ie]=ne,T=Ie):($[T]=he,$[se]=ne,T=se);else if(Ie<L&&0>a(Be,ne))$[T]=Be,$[Ie]=ne,T=Ie;else break e}}return K}function a($,K){var ne=$.sortIndex-K.sortIndex;return ne!==0?ne:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var p=Date,s=p.now();e.unstable_now=function(){return p.now()-s}}var c=[],f=[],m=1,d=null,v=3,y=!1,B=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M($){for(var K=t(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=$)r(f),K.sortIndex=K.expirationTime,n(c,K);else break;K=t(f)}}function O($){if(I=!1,M($),!B)if(t(c)!==null)B=!0,Y(w);else{var K=t(f);K!==null&&Q(O,K.startTime-$)}}function w($,K){B=!1,I&&(I=!1,W(P),P=-1),y=!0;var ne=v;try{for(M(K),d=t(c);d!==null&&(!(d.expirationTime>K)||$&&!j());){var T=d.callback;if(typeof T=="function"){d.callback=null,v=d.priorityLevel;var L=T(d.expirationTime<=K);K=e.unstable_now(),typeof L=="function"?d.callback=L:d===t(c)&&r(c),M(K)}else r(c);d=t(c)}if(d!==null)var Z=!0;else{var se=t(f);se!==null&&Q(O,se.startTime-K),Z=!1}return Z}finally{d=null,v=ne,y=!1}}var A=!1,N=null,P=-1,H=5,k=-1;function j(){return!(e.unstable_now()-k<H)}function R(){if(N!==null){var $=e.unstable_now();k=$;var K=!0;try{K=N(!0,$)}finally{K?F():(A=!1,N=null)}}else A=!1}var F;if(typeof S=="function")F=function(){S(R)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,G=V.port2;V.port1.onmessage=R,F=function(){G.postMessage(null)}}else F=function(){b(R,0)};function Y($){N=$,A||(A=!0,F())}function Q($,K){P=b(function(){$(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){B||y||(B=!0,Y(w))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function($){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var ne=v;v=K;try{return $()}finally{v=ne}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=v;v=$;try{return K()}finally{v=ne}},e.unstable_scheduleCallback=function($,K,ne){var T=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?T+ne:T):ne=T,$){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ne+L,$={id:m++,callback:K,priorityLevel:$,startTime:ne,expirationTime:L,sortIndex:-1},ne>T?($.sortIndex=ne,n(f,$),t(c)===null&&$===t(f)&&(I?(W(P),P=-1):I=!0,Q(O,ne-T))):($.sortIndex=L,n(c,$),B||y||(B=!0,Y(w))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var K=v;return function(){var ne=v;v=K;try{return $.apply(this,arguments)}finally{v=ne}}}})(bf)),bf}var cI;function dH(){return cI||(cI=1,yf.exports=fH()),yf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fI;function mH(){if(fI)return gt;fI=1;var e=sy(),n=dH();function t(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,l=1;l<arguments.length;l++)u+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){p(o,u),p(o+"Capture",u)}function p(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return c.call(d,o)?!0:c.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function y(o,u,l,h){if(l!==null&&l.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function B(o,u,l,h){if(u===null||typeof u>"u"||y(o,u,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,l,h,g,x,C){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=o,this.type=u,this.sanitizeURL=x,this.removeEmptyString=C}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function S(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(W,S);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(W,S);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(W,S);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function M(o,u,l,h){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:h||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(B(u,l,g,h)&&(l=null),h||g===null?v(u)&&(l===null?o.removeAttribute(u):o.setAttribute(u,""+l)):g.mustUseProperty?o[g.propertyName]=l===null?g.type===3?!1:"":l:(u=g.attributeName,h=g.attributeNamespace,l===null?o.removeAttribute(u):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?o.setAttributeNS(h,u,l):o.setAttribute(u,l))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),j=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),$=Symbol.iterator;function K(o){return o===null||typeof o!="object"?null:(o=$&&o[$]||o["@@iterator"],typeof o=="function"?o:null)}var ne=Object.assign,T;function L(o){if(T===void 0)try{throw Error()}catch(l){var u=l.stack.trim().match(/\n( *(at )?)/);T=u&&u[1]||""}return`
`+T+o}var Z=!1;function se(o,u){if(!o||Z)return"";Z=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var h=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){h=te}o.call(u.prototype)}else{try{throw Error()}catch(te){h=te}o()}}catch(te){if(te&&h&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),x=h.stack.split(`
`),C=g.length-1,D=x.length-1;1<=C&&0<=D&&g[C]!==x[D];)D--;for(;1<=C&&0<=D;C--,D--)if(g[C]!==x[D]){if(C!==1||D!==1)do if(C--,D--,0>D||g[C]!==x[D]){var q=`
`+g[C].replace(" at new "," at ");return o.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",o.displayName)),q}while(1<=C&&0<=D);break}}}finally{Z=!1,Error.prepareStackTrace=l}return(o=o?o.displayName||o.name:"")?L(o):""}function he(o){switch(o.tag){case 5:return L(o.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return o=se(o.type,!1),o;case 11:return o=se(o.type.render,!1),o;case 1:return o=se(o.type,!0),o;default:return""}}function Ie(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case A:return"Portal";case H:return"Profiler";case P:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case j:return(o.displayName||"Context")+".Consumer";case k:return(o._context.displayName||"Context")+".Provider";case R:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case G:return u=o.displayName||null,u!==null?u:Ie(o.type)||"Memo";case Y:u=o._payload,o=o._init;try{return Ie(o(u))}catch{}}return null}function Be(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ie(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function me(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ae(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function re(o){var u=ae(o)?"checked":"value",l=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),h=""+o[u];if(!o.hasOwnProperty(u)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(C){h=""+C,x.call(this,C)}}),Object.defineProperty(o,u,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(C){h=""+C},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function ie(o){o._valueTracker||(o._valueTracker=re(o))}function J(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var l=u.getValue(),h="";return o&&(h=ae(o)?o.checked?"true":"false":o.value),o=h,o!==l?(u.setValue(o),!0):!1}function ve(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function fe(o,u){var l=u.checked;return ne({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??o._wrapperState.initialChecked})}function ye(o,u){var l=u.defaultValue==null?"":u.defaultValue,h=u.checked!=null?u.checked:u.defaultChecked;l=me(u.value!=null?u.value:l),o._wrapperState={initialChecked:h,initialValue:l,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function ge(o,u){u=u.checked,u!=null&&M(o,"checked",u,!1)}function xe(o,u){ge(o,u);var l=me(u.value),h=u.type;if(l!=null)h==="number"?(l===0&&o.value===""||o.value!=l)&&(o.value=""+l):o.value!==""+l&&(o.value=""+l);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?Fe(o,u.type,l):u.hasOwnProperty("defaultValue")&&Fe(o,u.type,me(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function je(o,u,l){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var h=u.type;if(!(h!=="submit"&&h!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,l||u===o.value||(o.value=u),o.defaultValue=u}l=o.name,l!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,l!==""&&(o.name=l)}function Fe(o,u,l){(u!=="number"||ve(o.ownerDocument)!==o)&&(l==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+l&&(o.defaultValue=""+l))}var Ke=Array.isArray;function xn(o,u,l,h){if(o=o.options,u){u={};for(var g=0;g<l.length;g++)u["$"+l[g]]=!0;for(l=0;l<o.length;l++)g=u.hasOwnProperty("$"+o[l].value),o[l].selected!==g&&(o[l].selected=g),g&&h&&(o[l].defaultSelected=!0)}else{for(l=""+me(l),u=null,g=0;g<o.length;g++){if(o[g].value===l){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function gn(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Ht(o,u){var l=u.value;if(l==null){if(l=u.children,u=u.defaultValue,l!=null){if(u!=null)throw Error(t(92));if(Ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}u=l}u==null&&(u=""),l=u}o._wrapperState={initialValue:me(l)}}function yn(o,u){var l=me(u.value),h=me(u.defaultValue);l!=null&&(l=""+l,l!==o.value&&(o.value=l),u.defaultValue==null&&o.defaultValue!==l&&(o.defaultValue=l)),h!=null&&(o.defaultValue=""+h)}function Qn(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function wn(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dn(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?wn(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var ct,Mo=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,l,h,g){MSApp.execUnsafeLocalFunction(function(){return o(u,l,h,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(ct=ct||document.createElement("div"),ct.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=ct.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function na(o,u){if(u){var l=o.firstChild;if(l&&l===o.lastChild&&l.nodeType===3){l.nodeValue=u;return}}o.textContent=u}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nt=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(o){Nt.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Ct[u]=Ct[o]})});function ta(o,u,l){return u==null||typeof u=="boolean"||u===""?"":l||typeof u!="number"||u===0||Ct.hasOwnProperty(o)&&Ct[o]?(""+u).trim():u+"px"}function ru(o,u){o=o.style;for(var l in u)if(u.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=ta(l,u[l],h);l==="float"&&(l="cssFloat"),h?o.setProperty(l,g):o[l]=g}}var c_=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(o,u){if(u){if(c_[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(t(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(t(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(t(61))}if(u.style!=null&&typeof u.style!="object")throw Error(t(62))}}function Mc(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function _c(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var Oc=null,Ao=null,_o=null;function wb(o){if(o=Wu(o)){if(typeof Oc!="function")throw Error(t(280));var u=o.stateNode;u&&(u=Ss(u),Oc(o.stateNode,o.type,u))}}function Pb(o){Ao?_o?_o.push(o):_o=[o]:Ao=o}function Wb(){if(Ao){var o=Ao,u=_o;if(_o=Ao=null,wb(o),u)for(o=0;o<u.length;o++)wb(u[o])}}function Sb(o,u){return o(u)}function Mb(){}var Hc=!1;function Ab(o,u,l){if(Hc)return o(u,l);Hc=!0;try{return Sb(o,u,l)}finally{Hc=!1,(Ao!==null||_o!==null)&&(Mb(),Wb())}}function au(o,u){var l=o.stateNode;if(l===null)return null;var h=Ss(l);if(h===null)return null;l=h[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(l&&typeof l!="function")throw Error(t(231,u,typeof l));return l}var Cc=!1;if(s)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{Cc=!1}function f_(o,u,l,h,g,x,C,D,q){var te=Array.prototype.slice.call(arguments,3);try{u.apply(l,te)}catch(pe){this.onError(pe)}}var iu=!1,as=null,os=!1,Nc=null,d_={onError:function(o){iu=!0,as=o}};function m_(o,u,l,h,g,x,C,D,q){iu=!1,as=null,f_.apply(d_,arguments)}function h_(o,u,l,h,g,x,C,D,q){if(m_.apply(this,arguments),iu){if(iu){var te=as;iu=!1,as=null}else throw Error(t(198));os||(os=!0,Nc=te)}}function qa(o){var u=o,l=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(l=u.return),o=u.return;while(o)}return u.tag===3?l:null}function _b(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function Ob(o){if(qa(o)!==o)throw Error(t(188))}function v_(o){var u=o.alternate;if(!u){if(u=qa(o),u===null)throw Error(t(188));return u!==o?null:o}for(var l=o,h=u;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return Ob(g),o;if(x===h)return Ob(g),u;x=x.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=x;else{for(var C=!1,D=g.child;D;){if(D===l){C=!0,l=g,h=x;break}if(D===h){C=!0,h=g,l=x;break}D=D.sibling}if(!C){for(D=x.child;D;){if(D===l){C=!0,l=x,h=g;break}if(D===h){C=!0,h=x,l=g;break}D=D.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?o:u}function Hb(o){return o=v_(o),o!==null?Cb(o):null}function Cb(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=Cb(o);if(u!==null)return u;o=o.sibling}return null}var Nb=n.unstable_scheduleCallback,Rb=n.unstable_cancelCallback,g_=n.unstable_shouldYield,y_=n.unstable_requestPaint,Pn=n.unstable_now,b_=n.unstable_getCurrentPriorityLevel,Rc=n.unstable_ImmediatePriority,kb=n.unstable_UserBlockingPriority,is=n.unstable_NormalPriority,I_=n.unstable_LowPriority,Eb=n.unstable_IdlePriority,us=null,fr=null;function B_(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(us,o,void 0,(o.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:P_,x_=Math.log,w_=Math.LN2;function P_(o){return o>>>=0,o===0?32:31-(x_(o)/w_|0)|0}var ps=64,ss=4194304;function uu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function ls(o,u){var l=o.pendingLanes;if(l===0)return 0;var h=0,g=o.suspendedLanes,x=o.pingedLanes,C=l&268435455;if(C!==0){var D=C&~g;D!==0?h=uu(D):(x&=C,x!==0&&(h=uu(x)))}else C=l&~g,C!==0?h=uu(C):x!==0&&(h=uu(x));if(h===0)return 0;if(u!==0&&u!==h&&(u&g)===0&&(g=h&-h,x=u&-u,g>=x||g===16&&(x&4194240)!==0))return u;if((h&4)!==0&&(h|=l&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=h;0<u;)l=31-Xt(u),g=1<<l,h|=o[l],u&=~g;return h}function W_(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(o,u){for(var l=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,x=o.pendingLanes;0<x;){var C=31-Xt(x),D=1<<C,q=g[C];q===-1?((D&l)===0||(D&h)!==0)&&(g[C]=W_(D,u)):q<=u&&(o.expiredLanes|=D),x&=~D}}function kc(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Tb(){var o=ps;return ps<<=1,(ps&4194240)===0&&(ps=64),o}function Ec(o){for(var u=[],l=0;31>l;l++)u.push(o);return u}function pu(o,u,l){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Xt(u),o[u]=l}function M_(o,u){var l=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<l;){var g=31-Xt(l),x=1<<g;u[g]=0,h[g]=-1,o[g]=-1,l&=~x}}function Tc(o,u){var l=o.entangledLanes|=u;for(o=o.entanglements;l;){var h=31-Xt(l),g=1<<h;g&u|o[h]&u&&(o[h]|=u),l&=~g}}var Ze=0;function jb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Db,jc,$b,Lb,Fb,Dc=!1,cs=[],ra=null,aa=null,oa=null,su=new Map,lu=new Map,ia=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qb(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":su.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(u.pointerId)}}function cu(o,u,l,h,g,x){return o===null||o.nativeEvent!==x?(o={blockedOn:u,domEventName:l,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},u!==null&&(u=Wu(u),u!==null&&jc(u)),o):(o.eventSystemFlags|=h,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function __(o,u,l,h,g){switch(u){case"focusin":return ra=cu(ra,o,u,l,h,g),!0;case"dragenter":return aa=cu(aa,o,u,l,h,g),!0;case"mouseover":return oa=cu(oa,o,u,l,h,g),!0;case"pointerover":var x=g.pointerId;return su.set(x,cu(su.get(x)||null,o,u,l,h,g)),!0;case"gotpointercapture":return x=g.pointerId,lu.set(x,cu(lu.get(x)||null,o,u,l,h,g)),!0}return!1}function zb(o){var u=za(o.target);if(u!==null){var l=qa(u);if(l!==null){if(u=l.tag,u===13){if(u=_b(l),u!==null){o.blockedOn=u,Fb(o.priority,function(){$b(l)});return}}else if(u===3&&l.stateNode.current.memoizedState.isDehydrated){o.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}o.blockedOn=null}function fs(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var l=Lc(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(l===null){l=o.nativeEvent;var h=new l.constructor(l.type,l);Ac=h,l.target.dispatchEvent(h),Ac=null}else return u=Wu(l),u!==null&&jc(u),o.blockedOn=l,!1;u.shift()}return!0}function Ub(o,u,l){fs(o)&&l.delete(u)}function O_(){Dc=!1,ra!==null&&fs(ra)&&(ra=null),aa!==null&&fs(aa)&&(aa=null),oa!==null&&fs(oa)&&(oa=null),su.forEach(Ub),lu.forEach(Ub)}function fu(o,u){o.blockedOn===u&&(o.blockedOn=null,Dc||(Dc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,O_)))}function du(o){function u(g){return fu(g,o)}if(0<cs.length){fu(cs[0],o);for(var l=1;l<cs.length;l++){var h=cs[l];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&fu(ra,o),aa!==null&&fu(aa,o),oa!==null&&fu(oa,o),su.forEach(u),lu.forEach(u),l=0;l<ia.length;l++)h=ia[l],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(l=ia[0],l.blockedOn===null);)zb(l),l.blockedOn===null&&ia.shift()}var Oo=O.ReactCurrentBatchConfig,ds=!0;function H_(o,u,l,h){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=1,$c(o,u,l,h)}finally{Ze=g,Oo.transition=x}}function C_(o,u,l,h){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=4,$c(o,u,l,h)}finally{Ze=g,Oo.transition=x}}function $c(o,u,l,h){if(ds){var g=Lc(o,u,l,h);if(g===null)a2(o,u,h,ms,l),qb(o,h);else if(__(g,o,u,l,h))h.stopPropagation();else if(qb(o,h),u&4&&-1<A_.indexOf(o)){for(;g!==null;){var x=Wu(g);if(x!==null&&Db(x),x=Lc(o,u,l,h),x===null&&a2(o,u,h,ms,l),x===g)break;g=x}g!==null&&h.stopPropagation()}else a2(o,u,h,null,l)}}var ms=null;function Lc(o,u,l,h){if(ms=null,o=_c(h),o=za(o),o!==null)if(u=qa(o),u===null)o=null;else if(l=u.tag,l===13){if(o=_b(u),o!==null)return o;o=null}else if(l===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return ms=o,null}function Vb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b_()){case Rc:return 1;case kb:return 4;case is:case I_:return 16;case Eb:return 536870912;default:return 16}default:return 16}}var ua=null,Fc=null,hs=null;function Gb(){if(hs)return hs;var o,u=Fc,l=u.length,h,g="value"in ua?ua.value:ua.textContent,x=g.length;for(o=0;o<l&&u[o]===g[o];o++);var C=l-o;for(h=1;h<=C&&u[l-h]===g[x-h];h++);return hs=g.slice(o,1<h?1-h:void 0)}function vs(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function gs(){return!0}function Kb(){return!1}function It(o){function u(l,h,g,x,C){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var D in o)o.hasOwnProperty(D)&&(l=o[D],this[D]=l?l(x):x[D]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?gs:Kb,this.isPropagationStopped=Kb,this}return ne(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),u}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=It(Ho),mu=ne({},Ho,{view:0,detail:0}),N_=It(mu),zc,Uc,hu,ys=ne({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==hu&&(hu&&o.type==="mousemove"?(zc=o.screenX-hu.screenX,Uc=o.screenY-hu.screenY):Uc=zc=0,hu=o),zc)},movementY:function(o){return"movementY"in o?o.movementY:Uc}}),Qb=It(ys),R_=ne({},ys,{dataTransfer:0}),k_=It(R_),E_=ne({},mu,{relatedTarget:0}),Vc=It(E_),T_=ne({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=It(T_),D_=ne({},Ho,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),$_=It(D_),L_=ne({},Ho,{data:0}),Yb=It(L_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=z_[o])?!!u[o]:!1}function Gc(){return U_}var V_=ne({},mu,{key:function(o){if(o.key){var u=F_[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=vs(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?q_[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(o){return o.type==="keypress"?vs(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?vs(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),G_=It(V_),K_=ne({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xb=It(K_),Q_=ne({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Y_=It(Q_),X_=ne({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z_=It(X_),J_=ne({},ys,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),eO=It(J_),nO=[9,13,27,32],Kc=s&&"CompositionEvent"in window,vu=null;s&&"documentMode"in document&&(vu=document.documentMode);var tO=s&&"TextEvent"in window&&!vu,Zb=s&&(!Kc||vu&&8<vu&&11>=vu),Jb=" ",e6=!1;function n6(o,u){switch(o){case"keyup":return nO.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t6(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function rO(o,u){switch(o){case"compositionend":return t6(u);case"keypress":return u.which!==32?null:(e6=!0,Jb);case"textInput":return o=u.data,o===Jb&&e6?null:o;default:return null}}function aO(o,u){if(Co)return o==="compositionend"||!Kc&&n6(o,u)?(o=Gb(),hs=Fc=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Zb&&u.locale!=="ko"?null:u.data;default:return null}}var oO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r6(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!oO[o.type]:u==="textarea"}function a6(o,u,l,h){Pb(h),u=ws(u,"onChange"),0<u.length&&(l=new qc("onChange","change",null,l,h),o.push({event:l,listeners:u}))}var gu=null,yu=null;function iO(o){x6(o,0)}function bs(o){var u=To(o);if(J(u))return o}function uO(o,u){if(o==="change")return u}var o6=!1;if(s){var Qc;if(s){var Yc="oninput"in document;if(!Yc){var i6=document.createElement("div");i6.setAttribute("oninput","return;"),Yc=typeof i6.oninput=="function"}Qc=Yc}else Qc=!1;o6=Qc&&(!document.documentMode||9<document.documentMode)}function u6(){gu&&(gu.detachEvent("onpropertychange",p6),yu=gu=null)}function p6(o){if(o.propertyName==="value"&&bs(yu)){var u=[];a6(u,yu,o,_c(o)),Ab(iO,u)}}function pO(o,u,l){o==="focusin"?(u6(),gu=u,yu=l,gu.attachEvent("onpropertychange",p6)):o==="focusout"&&u6()}function sO(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return bs(yu)}function lO(o,u){if(o==="click")return bs(u)}function cO(o,u){if(o==="input"||o==="change")return bs(u)}function fO(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Zt=typeof Object.is=="function"?Object.is:fO;function bu(o,u){if(Zt(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var l=Object.keys(o),h=Object.keys(u);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!c.call(u,g)||!Zt(o[g],u[g]))return!1}return!0}function s6(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function l6(o,u){var l=s6(o);o=0;for(var h;l;){if(l.nodeType===3){if(h=o+l.textContent.length,o<=u&&h>=u)return{node:l,offset:u-o};o=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=s6(l)}}function c6(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?c6(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function f6(){for(var o=window,u=ve();u instanceof o.HTMLIFrameElement;){try{var l=typeof u.contentWindow.location.href=="string"}catch{l=!1}if(l)o=u.contentWindow;else break;u=ve(o.document)}return u}function Xc(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function dO(o){var u=f6(),l=o.focusedElem,h=o.selectionRange;if(u!==l&&l&&l.ownerDocument&&c6(l.ownerDocument.documentElement,l)){if(h!==null&&Xc(l)){if(u=h.start,o=h.end,o===void 0&&(o=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(o,l.value.length);else if(o=(u=l.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=l.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!o.extend&&x>h&&(g=h,h=x,x=g),g=l6(l,x);var C=l6(l,h);g&&C&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==C.node||o.focusOffset!==C.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),x>h?(o.addRange(u),o.extend(C.node,C.offset)):(u.setEnd(C.node,C.offset),o.addRange(u)))}}for(u=[],o=l;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<u.length;l++)o=u[l],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var mO=s&&"documentMode"in document&&11>=document.documentMode,No=null,Zc=null,Iu=null,Jc=!1;function d6(o,u,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Jc||No==null||No!==ve(h)||(h=No,"selectionStart"in h&&Xc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Iu&&bu(Iu,h)||(Iu=h,h=ws(Zc,"onSelect"),0<h.length&&(u=new qc("onSelect","select",null,u,l),o.push({event:u,listeners:h}),u.target=No)))}function Is(o,u){var l={};return l[o.toLowerCase()]=u.toLowerCase(),l["Webkit"+o]="webkit"+u,l["Moz"+o]="moz"+u,l}var Ro={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},e2={},m6={};s&&(m6=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Bs(o){if(e2[o])return e2[o];if(!Ro[o])return o;var u=Ro[o],l;for(l in u)if(u.hasOwnProperty(l)&&l in m6)return e2[o]=u[l];return o}var h6=Bs("animationend"),v6=Bs("animationiteration"),g6=Bs("animationstart"),y6=Bs("transitionend"),b6=new Map,I6="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pa(o,u){b6.set(o,u),i(u,[o])}for(var n2=0;n2<I6.length;n2++){var t2=I6[n2],hO=t2.toLowerCase(),vO=t2[0].toUpperCase()+t2.slice(1);pa(hO,"on"+vO)}pa(h6,"onAnimationEnd"),pa(v6,"onAnimationIteration"),pa(g6,"onAnimationStart"),pa("dblclick","onDoubleClick"),pa("focusin","onFocus"),pa("focusout","onBlur"),pa(y6,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu));function B6(o,u,l){var h=o.type||"unknown-event";o.currentTarget=l,h_(h,u,void 0,o),o.currentTarget=null}function x6(o,u){u=(u&4)!==0;for(var l=0;l<o.length;l++){var h=o[l],g=h.event;h=h.listeners;e:{var x=void 0;if(u)for(var C=h.length-1;0<=C;C--){var D=h[C],q=D.instance,te=D.currentTarget;if(D=D.listener,q!==x&&g.isPropagationStopped())break e;B6(g,D,te),x=q}else for(C=0;C<h.length;C++){if(D=h[C],q=D.instance,te=D.currentTarget,D=D.listener,q!==x&&g.isPropagationStopped())break e;B6(g,D,te),x=q}}}if(os)throw o=Nc,os=!1,Nc=null,o}function un(o,u){var l=u[l2];l===void 0&&(l=u[l2]=new Set);var h=o+"__bubble";l.has(h)||(w6(u,o,2,!1),l.add(h))}function r2(o,u,l){var h=0;u&&(h|=4),w6(l,o,h,u)}var xs="_reactListening"+Math.random().toString(36).slice(2);function xu(o){if(!o[xs]){o[xs]=!0,r.forEach(function(l){l!=="selectionchange"&&(gO.has(l)||r2(l,!1,o),r2(l,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[xs]||(u[xs]=!0,r2("selectionchange",!1,u))}}function w6(o,u,l,h){switch(Vb(u)){case 1:var g=H_;break;case 4:g=C_;break;default:g=$c}l=g.bind(null,u,l,o),g=void 0,!Cc||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(u,l,{capture:!0,passive:g}):o.addEventListener(u,l,!0):g!==void 0?o.addEventListener(u,l,{passive:g}):o.addEventListener(u,l,!1)}function a2(o,u,l,h,g){var x=h;if((u&1)===0&&(u&2)===0&&h!==null)e:for(;;){if(h===null)return;var C=h.tag;if(C===3||C===4){var D=h.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(C===4)for(C=h.return;C!==null;){var q=C.tag;if((q===3||q===4)&&(q=C.stateNode.containerInfo,q===g||q.nodeType===8&&q.parentNode===g))return;C=C.return}for(;D!==null;){if(C=za(D),C===null)return;if(q=C.tag,q===5||q===6){h=x=C;continue e}D=D.parentNode}}h=h.return}Ab(function(){var te=x,pe=_c(l),le=[];e:{var ue=b6.get(o);if(ue!==void 0){var be=qc,Se=o;switch(o){case"keypress":if(vs(l)===0)break e;case"keydown":case"keyup":be=G_;break;case"focusin":Se="focus",be=Vc;break;case"focusout":Se="blur",be=Vc;break;case"beforeblur":case"afterblur":be=Vc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Qb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Y_;break;case h6:case v6:case g6:be=j_;break;case y6:be=Z_;break;case"scroll":be=N_;break;case"wheel":be=eO;break;case"copy":case"cut":case"paste":be=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Xb}var _e=(u&4)!==0,Wn=!_e&&o==="scroll",X=_e?ue!==null?ue+"Capture":null:ue;_e=[];for(var z=te,ee;z!==null;){ee=z;var de=ee.stateNode;if(ee.tag===5&&de!==null&&(ee=de,X!==null&&(de=au(z,X),de!=null&&_e.push(wu(z,de,ee)))),Wn)break;z=z.return}0<_e.length&&(ue=new be(ue,Se,null,l,pe),le.push({event:ue,listeners:_e}))}}if((u&7)===0){e:{if(ue=o==="mouseover"||o==="pointerover",be=o==="mouseout"||o==="pointerout",ue&&l!==Ac&&(Se=l.relatedTarget||l.fromElement)&&(za(Se)||Se[Ar]))break e;if((be||ue)&&(ue=pe.window===pe?pe:(ue=pe.ownerDocument)?ue.defaultView||ue.parentWindow:window,be?(Se=l.relatedTarget||l.toElement,be=te,Se=Se?za(Se):null,Se!==null&&(Wn=qa(Se),Se!==Wn||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(be=null,Se=te),be!==Se)){if(_e=Qb,de="onMouseLeave",X="onMouseEnter",z="mouse",(o==="pointerout"||o==="pointerover")&&(_e=Xb,de="onPointerLeave",X="onPointerEnter",z="pointer"),Wn=be==null?ue:To(be),ee=Se==null?ue:To(Se),ue=new _e(de,z+"leave",be,l,pe),ue.target=Wn,ue.relatedTarget=ee,de=null,za(pe)===te&&(_e=new _e(X,z+"enter",Se,l,pe),_e.target=ee,_e.relatedTarget=Wn,de=_e),Wn=de,be&&Se)n:{for(_e=be,X=Se,z=0,ee=_e;ee;ee=ko(ee))z++;for(ee=0,de=X;de;de=ko(de))ee++;for(;0<z-ee;)_e=ko(_e),z--;for(;0<ee-z;)X=ko(X),ee--;for(;z--;){if(_e===X||X!==null&&_e===X.alternate)break n;_e=ko(_e),X=ko(X)}_e=null}else _e=null;be!==null&&P6(le,ue,be,_e,!1),Se!==null&&Wn!==null&&P6(le,Wn,Se,_e,!0)}}e:{if(ue=te?To(te):window,be=ue.nodeName&&ue.nodeName.toLowerCase(),be==="select"||be==="input"&&ue.type==="file")var He=uO;else if(r6(ue))if(o6)He=cO;else{He=sO;var Ce=pO}else(be=ue.nodeName)&&be.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(He=lO);if(He&&(He=He(o,te))){a6(le,He,l,pe);break e}Ce&&Ce(o,ue,te),o==="focusout"&&(Ce=ue._wrapperState)&&Ce.controlled&&ue.type==="number"&&Fe(ue,"number",ue.value)}switch(Ce=te?To(te):window,o){case"focusin":(r6(Ce)||Ce.contentEditable==="true")&&(No=Ce,Zc=te,Iu=null);break;case"focusout":Iu=Zc=No=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,d6(le,l,pe);break;case"selectionchange":if(mO)break;case"keydown":case"keyup":d6(le,l,pe)}var Ne;if(Kc)e:{switch(o){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Co?n6(o,l)&&(Te="onCompositionEnd"):o==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(Zb&&l.locale!=="ko"&&(Co||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Co&&(Ne=Gb()):(ua=pe,Fc="value"in ua?ua.value:ua.textContent,Co=!0)),Ce=ws(te,Te),0<Ce.length&&(Te=new Yb(Te,o,null,l,pe),le.push({event:Te,listeners:Ce}),Ne?Te.data=Ne:(Ne=t6(l),Ne!==null&&(Te.data=Ne)))),(Ne=tO?rO(o,l):aO(o,l))&&(te=ws(te,"onBeforeInput"),0<te.length&&(pe=new Yb("onBeforeInput","beforeinput",null,l,pe),le.push({event:pe,listeners:te}),pe.data=Ne))}x6(le,u)})}function wu(o,u,l){return{instance:o,listener:u,currentTarget:l}}function ws(o,u){for(var l=u+"Capture",h=[];o!==null;){var g=o,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=au(o,l),x!=null&&h.unshift(wu(o,x,g)),x=au(o,u),x!=null&&h.push(wu(o,x,g))),o=o.return}return h}function ko(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function P6(o,u,l,h,g){for(var x=u._reactName,C=[];l!==null&&l!==h;){var D=l,q=D.alternate,te=D.stateNode;if(q!==null&&q===h)break;D.tag===5&&te!==null&&(D=te,g?(q=au(l,x),q!=null&&C.unshift(wu(l,q,D))):g||(q=au(l,x),q!=null&&C.push(wu(l,q,D)))),l=l.return}C.length!==0&&o.push({event:u,listeners:C})}var yO=/\r\n?/g,bO=/\u0000|\uFFFD/g;function W6(o){return(typeof o=="string"?o:""+o).replace(yO,`
`).replace(bO,"")}function Ps(o,u,l){if(u=W6(u),W6(o)!==u&&l)throw Error(t(425))}function Ws(){}var o2=null,i2=null;function u2(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var p2=typeof setTimeout=="function"?setTimeout:void 0,IO=typeof clearTimeout=="function"?clearTimeout:void 0,S6=typeof Promise=="function"?Promise:void 0,BO=typeof queueMicrotask=="function"?queueMicrotask:typeof S6<"u"?function(o){return S6.resolve(null).then(o).catch(xO)}:p2;function xO(o){setTimeout(function(){throw o})}function s2(o,u){var l=u,h=0;do{var g=l.nextSibling;if(o.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){o.removeChild(g),du(u);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);du(u)}function sa(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function M6(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var l=o.data;if(l==="$"||l==="$!"||l==="$?"){if(u===0)return o;u--}else l==="/$"&&u++}o=o.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),dr="__reactFiber$"+Eo,Pu="__reactProps$"+Eo,Ar="__reactContainer$"+Eo,l2="__reactEvents$"+Eo,wO="__reactListeners$"+Eo,PO="__reactHandles$"+Eo;function za(o){var u=o[dr];if(u)return u;for(var l=o.parentNode;l;){if(u=l[Ar]||l[dr]){if(l=u.alternate,u.child!==null||l!==null&&l.child!==null)for(o=M6(o);o!==null;){if(l=o[dr])return l;o=M6(o)}return u}o=l,l=o.parentNode}return null}function Wu(o){return o=o[dr]||o[Ar],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function To(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(t(33))}function Ss(o){return o[Pu]||null}var c2=[],jo=-1;function la(o){return{current:o}}function pn(o){0>jo||(o.current=c2[jo],c2[jo]=null,jo--)}function tn(o,u){jo++,c2[jo]=o.current,o.current=u}var ca={},Yn=la(ca),ft=la(!1),Ua=ca;function Do(o,u){var l=o.type.contextTypes;if(!l)return ca;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===u)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=u[x];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function dt(o){return o=o.childContextTypes,o!=null}function Ms(){pn(ft),pn(Yn)}function A6(o,u,l){if(Yn.current!==ca)throw Error(t(168));tn(Yn,u),tn(ft,l)}function _6(o,u,l){var h=o.stateNode;if(u=u.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in u))throw Error(t(108,Be(o)||"Unknown",g));return ne({},l,h)}function As(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,Ua=Yn.current,tn(Yn,o),tn(ft,ft.current),!0}function O6(o,u,l){var h=o.stateNode;if(!h)throw Error(t(169));l?(o=_6(o,u,Ua),h.__reactInternalMemoizedMergedChildContext=o,pn(ft),pn(Yn),tn(Yn,o)):pn(ft),tn(ft,l)}var _r=null,_s=!1,f2=!1;function H6(o){_r===null?_r=[o]:_r.push(o)}function WO(o){_s=!0,H6(o)}function fa(){if(!f2&&_r!==null){f2=!0;var o=0,u=Ze;try{var l=_r;for(Ze=1;o<l.length;o++){var h=l[o];do h=h(!0);while(h!==null)}_r=null,_s=!1}catch(g){throw _r!==null&&(_r=_r.slice(o+1)),Nb(Rc,fa),g}finally{Ze=u,f2=!1}}return null}var $o=[],Lo=0,Os=null,Hs=0,Rt=[],kt=0,Va=null,Or=1,Hr="";function Ga(o,u){$o[Lo++]=Hs,$o[Lo++]=Os,Os=o,Hs=u}function C6(o,u,l){Rt[kt++]=Or,Rt[kt++]=Hr,Rt[kt++]=Va,Va=o;var h=Or;o=Hr;var g=32-Xt(h)-1;h&=~(1<<g),l+=1;var x=32-Xt(u)+g;if(30<x){var C=g-g%5;x=(h&(1<<C)-1).toString(32),h>>=C,g-=C,Or=1<<32-Xt(u)+g|l<<g|h,Hr=x+o}else Or=1<<x|l<<g|h,Hr=o}function d2(o){o.return!==null&&(Ga(o,1),C6(o,1,0))}function m2(o){for(;o===Os;)Os=$o[--Lo],$o[Lo]=null,Hs=$o[--Lo],$o[Lo]=null;for(;o===Va;)Va=Rt[--kt],Rt[kt]=null,Hr=Rt[--kt],Rt[kt]=null,Or=Rt[--kt],Rt[kt]=null}var Bt=null,xt=null,cn=!1,Jt=null;function N6(o,u){var l=Dt(5,null,null,0);l.elementType="DELETED",l.stateNode=u,l.return=o,u=o.deletions,u===null?(o.deletions=[l],o.flags|=16):u.push(l)}function R6(o,u){switch(o.tag){case 5:var l=o.type;return u=u.nodeType!==1||l.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,Bt=o,xt=sa(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,Bt=o,xt=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(l=Va!==null?{id:Or,overflow:Hr}:null,o.memoizedState={dehydrated:u,treeContext:l,retryLane:1073741824},l=Dt(18,null,null,0),l.stateNode=u,l.return=o,o.child=l,Bt=o,xt=null,!0):!1;default:return!1}}function h2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function v2(o){if(cn){var u=xt;if(u){var l=u;if(!R6(o,u)){if(h2(o))throw Error(t(418));u=sa(l.nextSibling);var h=Bt;u&&R6(o,u)?N6(h,l):(o.flags=o.flags&-4097|2,cn=!1,Bt=o)}}else{if(h2(o))throw Error(t(418));o.flags=o.flags&-4097|2,cn=!1,Bt=o}}}function k6(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Bt=o}function Cs(o){if(o!==Bt)return!1;if(!cn)return k6(o),cn=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!u2(o.type,o.memoizedProps)),u&&(u=xt)){if(h2(o))throw E6(),Error(t(418));for(;u;)N6(o,u),u=sa(u.nextSibling)}if(k6(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(t(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var l=o.data;if(l==="/$"){if(u===0){xt=sa(o.nextSibling);break e}u--}else l!=="$"&&l!=="$!"&&l!=="$?"||u++}o=o.nextSibling}xt=null}}else xt=Bt?sa(o.stateNode.nextSibling):null;return!0}function E6(){for(var o=xt;o;)o=sa(o.nextSibling)}function Fo(){xt=Bt=null,cn=!1}function g2(o){Jt===null?Jt=[o]:Jt.push(o)}var SO=O.ReactCurrentBatchConfig;function Su(o,u,l){if(o=l.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,o));var g=h,x=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===x?u.ref:(u=function(C){var D=g.refs;C===null?delete D[x]:D[x]=C},u._stringRef=x,u)}if(typeof o!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,o))}return o}function Ns(o,u){throw o=Object.prototype.toString.call(u),Error(t(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function T6(o){var u=o._init;return u(o._payload)}function j6(o){function u(X,z){if(o){var ee=X.deletions;ee===null?(X.deletions=[z],X.flags|=16):ee.push(z)}}function l(X,z){if(!o)return null;for(;z!==null;)u(X,z),z=z.sibling;return null}function h(X,z){for(X=new Map;z!==null;)z.key!==null?X.set(z.key,z):X.set(z.index,z),z=z.sibling;return X}function g(X,z){return X=Ia(X,z),X.index=0,X.sibling=null,X}function x(X,z,ee){return X.index=ee,o?(ee=X.alternate,ee!==null?(ee=ee.index,ee<z?(X.flags|=2,z):ee):(X.flags|=2,z)):(X.flags|=1048576,z)}function C(X){return o&&X.alternate===null&&(X.flags|=2),X}function D(X,z,ee,de){return z===null||z.tag!==6?(z=sf(ee,X.mode,de),z.return=X,z):(z=g(z,ee),z.return=X,z)}function q(X,z,ee,de){var He=ee.type;return He===N?pe(X,z,ee.props.children,de,ee.key):z!==null&&(z.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Y&&T6(He)===z.type)?(de=g(z,ee.props),de.ref=Su(X,z,ee),de.return=X,de):(de=rl(ee.type,ee.key,ee.props,null,X.mode,de),de.ref=Su(X,z,ee),de.return=X,de)}function te(X,z,ee,de){return z===null||z.tag!==4||z.stateNode.containerInfo!==ee.containerInfo||z.stateNode.implementation!==ee.implementation?(z=lf(ee,X.mode,de),z.return=X,z):(z=g(z,ee.children||[]),z.return=X,z)}function pe(X,z,ee,de,He){return z===null||z.tag!==7?(z=no(ee,X.mode,de,He),z.return=X,z):(z=g(z,ee),z.return=X,z)}function le(X,z,ee){if(typeof z=="string"&&z!==""||typeof z=="number")return z=sf(""+z,X.mode,ee),z.return=X,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return ee=rl(z.type,z.key,z.props,null,X.mode,ee),ee.ref=Su(X,null,z),ee.return=X,ee;case A:return z=lf(z,X.mode,ee),z.return=X,z;case Y:var de=z._init;return le(X,de(z._payload),ee)}if(Ke(z)||K(z))return z=no(z,X.mode,ee,null),z.return=X,z;Ns(X,z)}return null}function ue(X,z,ee,de){var He=z!==null?z.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return He!==null?null:D(X,z,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===He?q(X,z,ee,de):null;case A:return ee.key===He?te(X,z,ee,de):null;case Y:return He=ee._init,ue(X,z,He(ee._payload),de)}if(Ke(ee)||K(ee))return He!==null?null:pe(X,z,ee,de,null);Ns(X,ee)}return null}function be(X,z,ee,de,He){if(typeof de=="string"&&de!==""||typeof de=="number")return X=X.get(ee)||null,D(z,X,""+de,He);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case w:return X=X.get(de.key===null?ee:de.key)||null,q(z,X,de,He);case A:return X=X.get(de.key===null?ee:de.key)||null,te(z,X,de,He);case Y:var Ce=de._init;return be(X,z,ee,Ce(de._payload),He)}if(Ke(de)||K(de))return X=X.get(ee)||null,pe(z,X,de,He,null);Ns(z,de)}return null}function Se(X,z,ee,de){for(var He=null,Ce=null,Ne=z,Te=z=0,Fn=null;Ne!==null&&Te<ee.length;Te++){Ne.index>Te?(Fn=Ne,Ne=null):Fn=Ne.sibling;var Ue=ue(X,Ne,ee[Te],de);if(Ue===null){Ne===null&&(Ne=Fn);break}o&&Ne&&Ue.alternate===null&&u(X,Ne),z=x(Ue,z,Te),Ce===null?He=Ue:Ce.sibling=Ue,Ce=Ue,Ne=Fn}if(Te===ee.length)return l(X,Ne),cn&&Ga(X,Te),He;if(Ne===null){for(;Te<ee.length;Te++)Ne=le(X,ee[Te],de),Ne!==null&&(z=x(Ne,z,Te),Ce===null?He=Ne:Ce.sibling=Ne,Ce=Ne);return cn&&Ga(X,Te),He}for(Ne=h(X,Ne);Te<ee.length;Te++)Fn=be(Ne,X,Te,ee[Te],de),Fn!==null&&(o&&Fn.alternate!==null&&Ne.delete(Fn.key===null?Te:Fn.key),z=x(Fn,z,Te),Ce===null?He=Fn:Ce.sibling=Fn,Ce=Fn);return o&&Ne.forEach(function(Ba){return u(X,Ba)}),cn&&Ga(X,Te),He}function _e(X,z,ee,de){var He=K(ee);if(typeof He!="function")throw Error(t(150));if(ee=He.call(ee),ee==null)throw Error(t(151));for(var Ce=He=null,Ne=z,Te=z=0,Fn=null,Ue=ee.next();Ne!==null&&!Ue.done;Te++,Ue=ee.next()){Ne.index>Te?(Fn=Ne,Ne=null):Fn=Ne.sibling;var Ba=ue(X,Ne,Ue.value,de);if(Ba===null){Ne===null&&(Ne=Fn);break}o&&Ne&&Ba.alternate===null&&u(X,Ne),z=x(Ba,z,Te),Ce===null?He=Ba:Ce.sibling=Ba,Ce=Ba,Ne=Fn}if(Ue.done)return l(X,Ne),cn&&Ga(X,Te),He;if(Ne===null){for(;!Ue.done;Te++,Ue=ee.next())Ue=le(X,Ue.value,de),Ue!==null&&(z=x(Ue,z,Te),Ce===null?He=Ue:Ce.sibling=Ue,Ce=Ue);return cn&&Ga(X,Te),He}for(Ne=h(X,Ne);!Ue.done;Te++,Ue=ee.next())Ue=be(Ne,X,Te,Ue.value,de),Ue!==null&&(o&&Ue.alternate!==null&&Ne.delete(Ue.key===null?Te:Ue.key),z=x(Ue,z,Te),Ce===null?He=Ue:Ce.sibling=Ue,Ce=Ue);return o&&Ne.forEach(function(oH){return u(X,oH)}),cn&&Ga(X,Te),He}function Wn(X,z,ee,de){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var He=ee.key,Ce=z;Ce!==null;){if(Ce.key===He){if(He=ee.type,He===N){if(Ce.tag===7){l(X,Ce.sibling),z=g(Ce,ee.props.children),z.return=X,X=z;break e}}else if(Ce.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Y&&T6(He)===Ce.type){l(X,Ce.sibling),z=g(Ce,ee.props),z.ref=Su(X,Ce,ee),z.return=X,X=z;break e}l(X,Ce);break}else u(X,Ce);Ce=Ce.sibling}ee.type===N?(z=no(ee.props.children,X.mode,de,ee.key),z.return=X,X=z):(de=rl(ee.type,ee.key,ee.props,null,X.mode,de),de.ref=Su(X,z,ee),de.return=X,X=de)}return C(X);case A:e:{for(Ce=ee.key;z!==null;){if(z.key===Ce)if(z.tag===4&&z.stateNode.containerInfo===ee.containerInfo&&z.stateNode.implementation===ee.implementation){l(X,z.sibling),z=g(z,ee.children||[]),z.return=X,X=z;break e}else{l(X,z);break}else u(X,z);z=z.sibling}z=lf(ee,X.mode,de),z.return=X,X=z}return C(X);case Y:return Ce=ee._init,Wn(X,z,Ce(ee._payload),de)}if(Ke(ee))return Se(X,z,ee,de);if(K(ee))return _e(X,z,ee,de);Ns(X,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,z!==null&&z.tag===6?(l(X,z.sibling),z=g(z,ee),z.return=X,X=z):(l(X,z),z=sf(ee,X.mode,de),z.return=X,X=z),C(X)):l(X,z)}return Wn}var qo=j6(!0),D6=j6(!1),Rs=la(null),ks=null,zo=null,y2=null;function b2(){y2=zo=ks=null}function I2(o){var u=Rs.current;pn(Rs),o._currentValue=u}function B2(o,u,l){for(;o!==null;){var h=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,h!==null&&(h.childLanes|=u)):h!==null&&(h.childLanes&u)!==u&&(h.childLanes|=u),o===l)break;o=o.return}}function Uo(o,u){ks=o,y2=zo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(mt=!0),o.firstContext=null)}function Et(o){var u=o._currentValue;if(y2!==o)if(o={context:o,memoizedValue:u,next:null},zo===null){if(ks===null)throw Error(t(308));zo=o,ks.dependencies={lanes:0,firstContext:o}}else zo=zo.next=o;return u}var Ka=null;function x2(o){Ka===null?Ka=[o]:Ka.push(o)}function $6(o,u,l,h){var g=u.interleaved;return g===null?(l.next=l,x2(u)):(l.next=g.next,g.next=l),u.interleaved=l,Cr(o,h)}function Cr(o,u){o.lanes|=u;var l=o.alternate;for(l!==null&&(l.lanes|=u),l=o,o=o.return;o!==null;)o.childLanes|=u,l=o.alternate,l!==null&&(l.childLanes|=u),l=o,o=o.return;return l.tag===3?l.stateNode:null}var da=!1;function w2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L6(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ma(o,u,l){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var g=h.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u,Cr(o,l)}return g=h.interleaved,g===null?(u.next=u,x2(h)):(u.next=g.next,g.next=u),h.interleaved=u,Cr(o,l)}function Es(o,u,l){if(u=u.updateQueue,u!==null&&(u=u.shared,(l&4194240)!==0)){var h=u.lanes;h&=o.pendingLanes,l|=h,u.lanes=l,Tc(o,l)}}function F6(o,u){var l=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?g=x=u:x=x.next=u}else g=x=u;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},o.updateQueue=l;return}o=l.lastBaseUpdate,o===null?l.firstBaseUpdate=u:o.next=u,l.lastBaseUpdate=u}function Ts(o,u,l,h){var g=o.updateQueue;da=!1;var x=g.firstBaseUpdate,C=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var q=D,te=q.next;q.next=null,C===null?x=te:C.next=te,C=q;var pe=o.alternate;pe!==null&&(pe=pe.updateQueue,D=pe.lastBaseUpdate,D!==C&&(D===null?pe.firstBaseUpdate=te:D.next=te,pe.lastBaseUpdate=q))}if(x!==null){var le=g.baseState;C=0,pe=te=q=null,D=x;do{var ue=D.lane,be=D.eventTime;if((h&ue)===ue){pe!==null&&(pe=pe.next={eventTime:be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Se=o,_e=D;switch(ue=u,be=l,_e.tag){case 1:if(Se=_e.payload,typeof Se=="function"){le=Se.call(be,le,ue);break e}le=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=_e.payload,ue=typeof Se=="function"?Se.call(be,le,ue):Se,ue==null)break e;le=ne({},le,ue);break e;case 2:da=!0}}D.callback!==null&&D.lane!==0&&(o.flags|=64,ue=g.effects,ue===null?g.effects=[D]:ue.push(D))}else be={eventTime:be,lane:ue,tag:D.tag,payload:D.payload,callback:D.callback,next:null},pe===null?(te=pe=be,q=le):pe=pe.next=be,C|=ue;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;ue=D,D=ue.next,ue.next=null,g.lastBaseUpdate=ue,g.shared.pending=null}}while(!0);if(pe===null&&(q=le),g.baseState=q,g.firstBaseUpdate=te,g.lastBaseUpdate=pe,u=g.shared.interleaved,u!==null){g=u;do C|=g.lane,g=g.next;while(g!==u)}else x===null&&(g.shared.lanes=0);Xa|=C,o.lanes=C,o.memoizedState=le}}function q6(o,u,l){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var h=o[u],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Mu={},mr=la(Mu),Au=la(Mu),_u=la(Mu);function Qa(o){if(o===Mu)throw Error(t(174));return o}function P2(o,u){switch(tn(_u,u),tn(Au,o),tn(mr,Mu),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:Dn(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=Dn(u,o)}pn(mr),tn(mr,u)}function Vo(){pn(mr),pn(Au),pn(_u)}function z6(o){Qa(_u.current);var u=Qa(mr.current),l=Dn(u,o.type);u!==l&&(tn(Au,o),tn(mr,l))}function W2(o){Au.current===o&&(pn(mr),pn(Au))}var dn=la(0);function js(o){for(var u=o;u!==null;){if(u.tag===13){var l=u.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var S2=[];function M2(){for(var o=0;o<S2.length;o++)S2[o]._workInProgressVersionPrimary=null;S2.length=0}var Ds=O.ReactCurrentDispatcher,A2=O.ReactCurrentBatchConfig,Ya=0,mn=null,Nn=null,$n=null,$s=!1,Ou=!1,Hu=0,MO=0;function Xn(){throw Error(t(321))}function _2(o,u){if(u===null)return!1;for(var l=0;l<u.length&&l<o.length;l++)if(!Zt(o[l],u[l]))return!1;return!0}function O2(o,u,l,h,g,x){if(Ya=x,mn=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Ds.current=o===null||o.memoizedState===null?HO:CO,o=l(h,g),Ou){x=0;do{if(Ou=!1,Hu=0,25<=x)throw Error(t(301));x+=1,$n=Nn=null,u.updateQueue=null,Ds.current=NO,o=l(h,g)}while(Ou)}if(Ds.current=qs,u=Nn!==null&&Nn.next!==null,Ya=0,$n=Nn=mn=null,$s=!1,u)throw Error(t(300));return o}function H2(){var o=Hu!==0;return Hu=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $n===null?mn.memoizedState=$n=o:$n=$n.next=o,$n}function Tt(){if(Nn===null){var o=mn.alternate;o=o!==null?o.memoizedState:null}else o=Nn.next;var u=$n===null?mn.memoizedState:$n.next;if(u!==null)$n=u,Nn=o;else{if(o===null)throw Error(t(310));Nn=o,o={memoizedState:Nn.memoizedState,baseState:Nn.baseState,baseQueue:Nn.baseQueue,queue:Nn.queue,next:null},$n===null?mn.memoizedState=$n=o:$n=$n.next=o}return $n}function Cu(o,u){return typeof u=="function"?u(o):u}function C2(o){var u=Tt(),l=u.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=Nn,g=h.baseQueue,x=l.pending;if(x!==null){if(g!==null){var C=g.next;g.next=x.next,x.next=C}h.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,h=h.baseState;var D=C=null,q=null,te=x;do{var pe=te.lane;if((Ya&pe)===pe)q!==null&&(q=q.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),h=te.hasEagerState?te.eagerState:o(h,te.action);else{var le={lane:pe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};q===null?(D=q=le,C=h):q=q.next=le,mn.lanes|=pe,Xa|=pe}te=te.next}while(te!==null&&te!==x);q===null?C=h:q.next=D,Zt(h,u.memoizedState)||(mt=!0),u.memoizedState=h,u.baseState=C,u.baseQueue=q,l.lastRenderedState=h}if(o=l.interleaved,o!==null){g=o;do x=g.lane,mn.lanes|=x,Xa|=x,g=g.next;while(g!==o)}else g===null&&(l.lanes=0);return[u.memoizedState,l.dispatch]}function N2(o){var u=Tt(),l=u.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=l.dispatch,g=l.pending,x=u.memoizedState;if(g!==null){l.pending=null;var C=g=g.next;do x=o(x,C.action),C=C.next;while(C!==g);Zt(x,u.memoizedState)||(mt=!0),u.memoizedState=x,u.baseQueue===null&&(u.baseState=x),l.lastRenderedState=x}return[x,h]}function U6(){}function V6(o,u){var l=mn,h=Tt(),g=u(),x=!Zt(h.memoizedState,g);if(x&&(h.memoizedState=g,mt=!0),h=h.queue,R2(Q6.bind(null,l,h,o),[o]),h.getSnapshot!==u||x||$n!==null&&$n.memoizedState.tag&1){if(l.flags|=2048,Nu(9,K6.bind(null,l,h,g,u),void 0,null),Ln===null)throw Error(t(349));(Ya&30)!==0||G6(l,u,g)}return g}function G6(o,u,l){o.flags|=16384,o={getSnapshot:u,value:l},u=mn.updateQueue,u===null?(u={lastEffect:null,stores:null},mn.updateQueue=u,u.stores=[o]):(l=u.stores,l===null?u.stores=[o]:l.push(o))}function K6(o,u,l,h){u.value=l,u.getSnapshot=h,Y6(u)&&X6(o)}function Q6(o,u,l){return l(function(){Y6(u)&&X6(o)})}function Y6(o){var u=o.getSnapshot;o=o.value;try{var l=u();return!Zt(o,l)}catch{return!0}}function X6(o){var u=Cr(o,1);u!==null&&rr(u,o,1,-1)}function Z6(o){var u=hr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:o},u.queue=o,o=o.dispatch=OO.bind(null,mn,o),[u.memoizedState,o]}function Nu(o,u,l,h){return o={tag:o,create:u,destroy:l,deps:h,next:null},u=mn.updateQueue,u===null?(u={lastEffect:null,stores:null},mn.updateQueue=u,u.lastEffect=o.next=o):(l=u.lastEffect,l===null?u.lastEffect=o.next=o:(h=l.next,l.next=o,o.next=h,u.lastEffect=o)),o}function J6(){return Tt().memoizedState}function Ls(o,u,l,h){var g=hr();mn.flags|=o,g.memoizedState=Nu(1|u,l,void 0,h===void 0?null:h)}function Fs(o,u,l,h){var g=Tt();h=h===void 0?null:h;var x=void 0;if(Nn!==null){var C=Nn.memoizedState;if(x=C.destroy,h!==null&&_2(h,C.deps)){g.memoizedState=Nu(u,l,x,h);return}}mn.flags|=o,g.memoizedState=Nu(1|u,l,x,h)}function e1(o,u){return Ls(8390656,8,o,u)}function R2(o,u){return Fs(2048,8,o,u)}function n1(o,u){return Fs(4,2,o,u)}function t1(o,u){return Fs(4,4,o,u)}function r1(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function a1(o,u,l){return l=l!=null?l.concat([o]):null,Fs(4,4,r1.bind(null,u,o),l)}function k2(){}function o1(o,u){var l=Tt();u=u===void 0?null:u;var h=l.memoizedState;return h!==null&&u!==null&&_2(u,h[1])?h[0]:(l.memoizedState=[o,u],o)}function i1(o,u){var l=Tt();u=u===void 0?null:u;var h=l.memoizedState;return h!==null&&u!==null&&_2(u,h[1])?h[0]:(o=o(),l.memoizedState=[o,u],o)}function u1(o,u,l){return(Ya&21)===0?(o.baseState&&(o.baseState=!1,mt=!0),o.memoizedState=l):(Zt(l,u)||(l=Tb(),mn.lanes|=l,Xa|=l,o.baseState=!0),u)}function AO(o,u){var l=Ze;Ze=l!==0&&4>l?l:4,o(!0);var h=A2.transition;A2.transition={};try{o(!1),u()}finally{Ze=l,A2.transition=h}}function p1(){return Tt().memoizedState}function _O(o,u,l){var h=ya(o);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},s1(o))l1(u,l);else if(l=$6(o,u,l,h),l!==null){var g=rt();rr(l,o,h,g),c1(l,u,h)}}function OO(o,u,l){var h=ya(o),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(s1(o))l1(u,g);else{var x=o.alternate;if(o.lanes===0&&(x===null||x.lanes===0)&&(x=u.lastRenderedReducer,x!==null))try{var C=u.lastRenderedState,D=x(C,l);if(g.hasEagerState=!0,g.eagerState=D,Zt(D,C)){var q=u.interleaved;q===null?(g.next=g,x2(u)):(g.next=q.next,q.next=g),u.interleaved=g;return}}catch{}finally{}l=$6(o,u,g,h),l!==null&&(g=rt(),rr(l,o,h,g),c1(l,u,h))}}function s1(o){var u=o.alternate;return o===mn||u!==null&&u===mn}function l1(o,u){Ou=$s=!0;var l=o.pending;l===null?u.next=u:(u.next=l.next,l.next=u),o.pending=u}function c1(o,u,l){if((l&4194240)!==0){var h=u.lanes;h&=o.pendingLanes,l|=h,u.lanes=l,Tc(o,l)}}var qs={readContext:Et,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},HO={readContext:Et,useCallback:function(o,u){return hr().memoizedState=[o,u===void 0?null:u],o},useContext:Et,useEffect:e1,useImperativeHandle:function(o,u,l){return l=l!=null?l.concat([o]):null,Ls(4194308,4,r1.bind(null,u,o),l)},useLayoutEffect:function(o,u){return Ls(4194308,4,o,u)},useInsertionEffect:function(o,u){return Ls(4,2,o,u)},useMemo:function(o,u){var l=hr();return u=u===void 0?null:u,o=o(),l.memoizedState=[o,u],o},useReducer:function(o,u,l){var h=hr();return u=l!==void 0?l(u):u,h.memoizedState=h.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},h.queue=o,o=o.dispatch=_O.bind(null,mn,o),[h.memoizedState,o]},useRef:function(o){var u=hr();return o={current:o},u.memoizedState=o},useState:Z6,useDebugValue:k2,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=Z6(!1),u=o[0];return o=AO.bind(null,o[1]),hr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,l){var h=mn,g=hr();if(cn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=u(),Ln===null)throw Error(t(349));(Ya&30)!==0||G6(h,u,l)}g.memoizedState=l;var x={value:l,getSnapshot:u};return g.queue=x,e1(Q6.bind(null,h,x,o),[o]),h.flags|=2048,Nu(9,K6.bind(null,h,x,l,u),void 0,null),l},useId:function(){var o=hr(),u=Ln.identifierPrefix;if(cn){var l=Hr,h=Or;l=(h&~(1<<32-Xt(h)-1)).toString(32)+l,u=":"+u+"R"+l,l=Hu++,0<l&&(u+="H"+l.toString(32)),u+=":"}else l=MO++,u=":"+u+"r"+l.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},CO={readContext:Et,useCallback:o1,useContext:Et,useEffect:R2,useImperativeHandle:a1,useInsertionEffect:n1,useLayoutEffect:t1,useMemo:i1,useReducer:C2,useRef:J6,useState:function(){return C2(Cu)},useDebugValue:k2,useDeferredValue:function(o){var u=Tt();return u1(u,Nn.memoizedState,o)},useTransition:function(){var o=C2(Cu)[0],u=Tt().memoizedState;return[o,u]},useMutableSource:U6,useSyncExternalStore:V6,useId:p1,unstable_isNewReconciler:!1},NO={readContext:Et,useCallback:o1,useContext:Et,useEffect:R2,useImperativeHandle:a1,useInsertionEffect:n1,useLayoutEffect:t1,useMemo:i1,useReducer:N2,useRef:J6,useState:function(){return N2(Cu)},useDebugValue:k2,useDeferredValue:function(o){var u=Tt();return Nn===null?u.memoizedState=o:u1(u,Nn.memoizedState,o)},useTransition:function(){var o=N2(Cu)[0],u=Tt().memoizedState;return[o,u]},useMutableSource:U6,useSyncExternalStore:V6,useId:p1,unstable_isNewReconciler:!1};function er(o,u){if(o&&o.defaultProps){u=ne({},u),o=o.defaultProps;for(var l in o)u[l]===void 0&&(u[l]=o[l]);return u}return u}function E2(o,u,l,h){u=o.memoizedState,l=l(h,u),l=l==null?u:ne({},u,l),o.memoizedState=l,o.lanes===0&&(o.updateQueue.baseState=l)}var zs={isMounted:function(o){return(o=o._reactInternals)?qa(o)===o:!1},enqueueSetState:function(o,u,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.payload=u,l!=null&&(x.callback=l),u=ma(o,x,g),u!==null&&(rr(u,o,g,h),Es(u,o,g))},enqueueReplaceState:function(o,u,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.tag=1,x.payload=u,l!=null&&(x.callback=l),u=ma(o,x,g),u!==null&&(rr(u,o,g,h),Es(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var l=rt(),h=ya(o),g=Nr(l,h);g.tag=2,u!=null&&(g.callback=u),u=ma(o,g,h),u!==null&&(rr(u,o,h,l),Es(u,o,h))}};function f1(o,u,l,h,g,x,C){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,x,C):u.prototype&&u.prototype.isPureReactComponent?!bu(l,h)||!bu(g,x):!0}function d1(o,u,l){var h=!1,g=ca,x=u.contextType;return typeof x=="object"&&x!==null?x=Et(x):(g=dt(u)?Ua:Yn.current,h=u.contextTypes,x=(h=h!=null)?Do(o,g):ca),u=new u(l,x),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=zs,o.stateNode=u,u._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=x),u}function m1(o,u,l,h){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(l,h),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(l,h),u.state!==o&&zs.enqueueReplaceState(u,u.state,null)}function T2(o,u,l,h){var g=o.stateNode;g.props=l,g.state=o.memoizedState,g.refs={},w2(o);var x=u.contextType;typeof x=="object"&&x!==null?g.context=Et(x):(x=dt(u)?Ua:Yn.current,g.context=Do(o,x)),g.state=o.memoizedState,x=u.getDerivedStateFromProps,typeof x=="function"&&(E2(o,u,x,l),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&zs.enqueueReplaceState(g,g.state,null),Ts(o,l,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Go(o,u){try{var l="",h=u;do l+=he(h),h=h.return;while(h);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:o,source:u,stack:g,digest:null}}function j2(o,u,l){return{value:o,source:null,stack:l??null,digest:u??null}}function D2(o,u){try{console.error(u.value)}catch(l){setTimeout(function(){throw l})}}var RO=typeof WeakMap=="function"?WeakMap:Map;function h1(o,u,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var h=u.value;return l.callback=function(){Xs||(Xs=!0,ef=h),D2(o,u)},l}function v1(o,u,l){l=Nr(-1,l),l.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;l.payload=function(){return h(g)},l.callback=function(){D2(o,u)}}var x=o.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){D2(o,u),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var C=u.stack;this.componentDidCatch(u.value,{componentStack:C!==null?C:""})}),l}function g1(o,u,l){var h=o.pingCache;if(h===null){h=o.pingCache=new RO;var g=new Set;h.set(u,g)}else g=h.get(u),g===void 0&&(g=new Set,h.set(u,g));g.has(l)||(g.add(l),o=KO.bind(null,o,u,l),u.then(o,o))}function y1(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function b1(o,u,l,h,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(u=Nr(-1,1),u.tag=2,ma(l,u,1))),l.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var kO=O.ReactCurrentOwner,mt=!1;function tt(o,u,l,h){u.child=o===null?D6(u,null,l,h):qo(u,o.child,l,h)}function I1(o,u,l,h,g){l=l.render;var x=u.ref;return Uo(u,g),h=O2(o,u,l,h,x,g),l=H2(),o!==null&&!mt?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Rr(o,u,g)):(cn&&l&&d2(u),u.flags|=1,tt(o,u,h,g),u.child)}function B1(o,u,l,h,g){if(o===null){var x=l.type;return typeof x=="function"&&!pf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(u.tag=15,u.type=x,x1(o,u,x,h,g)):(o=rl(l.type,null,h,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(x=o.child,(o.lanes&g)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:bu,l(C,h)&&o.ref===u.ref)return Rr(o,u,g)}return u.flags|=1,o=Ia(x,h),o.ref=u.ref,o.return=u,u.child=o}function x1(o,u,l,h,g){if(o!==null){var x=o.memoizedProps;if(bu(x,h)&&o.ref===u.ref)if(mt=!1,u.pendingProps=h=x,(o.lanes&g)!==0)(o.flags&131072)!==0&&(mt=!0);else return u.lanes=o.lanes,Rr(o,u,g)}return $2(o,u,l,h,g)}function w1(o,u,l){var h=u.pendingProps,g=h.children,x=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Qo,wt),wt|=l;else{if((l&1073741824)===0)return o=x!==null?x.baseLanes|l:l,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,tn(Qo,wt),wt|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:l,tn(Qo,wt),wt|=h}else x!==null?(h=x.baseLanes|l,u.memoizedState=null):h=l,tn(Qo,wt),wt|=h;return tt(o,u,g,l),u.child}function P1(o,u){var l=u.ref;(o===null&&l!==null||o!==null&&o.ref!==l)&&(u.flags|=512,u.flags|=2097152)}function $2(o,u,l,h,g){var x=dt(l)?Ua:Yn.current;return x=Do(u,x),Uo(u,g),l=O2(o,u,l,h,x,g),h=H2(),o!==null&&!mt?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Rr(o,u,g)):(cn&&h&&d2(u),u.flags|=1,tt(o,u,l,g),u.child)}function W1(o,u,l,h,g){if(dt(l)){var x=!0;As(u)}else x=!1;if(Uo(u,g),u.stateNode===null)Vs(o,u),d1(u,l,h),T2(u,l,h,g),h=!0;else if(o===null){var C=u.stateNode,D=u.memoizedProps;C.props=D;var q=C.context,te=l.contextType;typeof te=="object"&&te!==null?te=Et(te):(te=dt(l)?Ua:Yn.current,te=Do(u,te));var pe=l.getDerivedStateFromProps,le=typeof pe=="function"||typeof C.getSnapshotBeforeUpdate=="function";le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(D!==h||q!==te)&&m1(u,C,h,te),da=!1;var ue=u.memoizedState;C.state=ue,Ts(u,h,C,g),q=u.memoizedState,D!==h||ue!==q||ft.current||da?(typeof pe=="function"&&(E2(u,l,pe,h),q=u.memoizedState),(D=da||f1(u,l,D,h,ue,q,te))?(le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(u.flags|=4194308)):(typeof C.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=h,u.memoizedState=q),C.props=h,C.state=q,C.context=te,h=D):(typeof C.componentDidMount=="function"&&(u.flags|=4194308),h=!1)}else{C=u.stateNode,L6(o,u),D=u.memoizedProps,te=u.type===u.elementType?D:er(u.type,D),C.props=te,le=u.pendingProps,ue=C.context,q=l.contextType,typeof q=="object"&&q!==null?q=Et(q):(q=dt(l)?Ua:Yn.current,q=Do(u,q));var be=l.getDerivedStateFromProps;(pe=typeof be=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(D!==le||ue!==q)&&m1(u,C,h,q),da=!1,ue=u.memoizedState,C.state=ue,Ts(u,h,C,g);var Se=u.memoizedState;D!==le||ue!==Se||ft.current||da?(typeof be=="function"&&(E2(u,l,be,h),Se=u.memoizedState),(te=da||f1(u,l,te,h,ue,Se,q)||!1)?(pe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(h,Se,q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(h,Se,q)),typeof C.componentDidUpdate=="function"&&(u.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof C.componentDidUpdate!="function"||D===o.memoizedProps&&ue===o.memoizedState||(u.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&ue===o.memoizedState||(u.flags|=1024),u.memoizedProps=h,u.memoizedState=Se),C.props=h,C.state=Se,C.context=q,h=te):(typeof C.componentDidUpdate!="function"||D===o.memoizedProps&&ue===o.memoizedState||(u.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&ue===o.memoizedState||(u.flags|=1024),h=!1)}return L2(o,u,l,h,x,g)}function L2(o,u,l,h,g,x){P1(o,u);var C=(u.flags&128)!==0;if(!h&&!C)return g&&O6(u,l,!1),Rr(o,u,x);h=u.stateNode,kO.current=u;var D=C&&typeof l.getDerivedStateFromError!="function"?null:h.render();return u.flags|=1,o!==null&&C?(u.child=qo(u,o.child,null,x),u.child=qo(u,null,D,x)):tt(o,u,D,x),u.memoizedState=h.state,g&&O6(u,l,!0),u.child}function S1(o){var u=o.stateNode;u.pendingContext?A6(o,u.pendingContext,u.pendingContext!==u.context):u.context&&A6(o,u.context,!1),P2(o,u.containerInfo)}function M1(o,u,l,h,g){return Fo(),g2(g),u.flags|=256,tt(o,u,l,h),u.child}var F2={dehydrated:null,treeContext:null,retryLane:0};function q2(o){return{baseLanes:o,cachePool:null,transitions:null}}function A1(o,u,l){var h=u.pendingProps,g=dn.current,x=!1,C=(u.flags&128)!==0,D;if((D=C)||(D=o!==null&&o.memoizedState===null?!1:(g&2)!==0),D?(x=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),tn(dn,g&1),o===null)return v2(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(C=h.children,o=h.fallback,x?(h=u.mode,x=u.child,C={mode:"hidden",children:C},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=al(C,h,0,null),o=no(o,h,l,null),x.return=u,o.return=u,x.sibling=o,u.child=x,u.child.memoizedState=q2(l),u.memoizedState=F2,o):z2(u,C));if(g=o.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return EO(o,u,C,h,D,g,l);if(x){x=h.fallback,C=u.mode,g=o.child,D=g.sibling;var q={mode:"hidden",children:h.children};return(C&1)===0&&u.child!==g?(h=u.child,h.childLanes=0,h.pendingProps=q,u.deletions=null):(h=Ia(g,q),h.subtreeFlags=g.subtreeFlags&14680064),D!==null?x=Ia(D,x):(x=no(x,C,l,null),x.flags|=2),x.return=u,h.return=u,h.sibling=x,u.child=h,h=x,x=u.child,C=o.child.memoizedState,C=C===null?q2(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=o.childLanes&~l,u.memoizedState=F2,h}return x=o.child,o=x.sibling,h=Ia(x,{mode:"visible",children:h.children}),(u.mode&1)===0&&(h.lanes=l),h.return=u,h.sibling=null,o!==null&&(l=u.deletions,l===null?(u.deletions=[o],u.flags|=16):l.push(o)),u.child=h,u.memoizedState=null,h}function z2(o,u){return u=al({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function Us(o,u,l,h){return h!==null&&g2(h),qo(u,o.child,null,l),o=z2(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function EO(o,u,l,h,g,x,C){if(l)return u.flags&256?(u.flags&=-257,h=j2(Error(t(422))),Us(o,u,C,h)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(x=h.fallback,g=u.mode,h=al({mode:"visible",children:h.children},g,0,null),x=no(x,g,C,null),x.flags|=2,h.return=u,x.return=u,h.sibling=x,u.child=h,(u.mode&1)!==0&&qo(u,o.child,null,C),u.child.memoizedState=q2(C),u.memoizedState=F2,x);if((u.mode&1)===0)return Us(o,u,C,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var D=h.dgst;return h=D,x=Error(t(419)),h=j2(x,h,void 0),Us(o,u,C,h)}if(D=(C&o.childLanes)!==0,mt||D){if(h=Ln,h!==null){switch(C&-C){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|C))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,Cr(o,g),rr(h,o,g,-1))}return uf(),h=j2(Error(t(421))),Us(o,u,C,h)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=QO.bind(null,o),g._reactRetry=u,null):(o=x.treeContext,xt=sa(g.nextSibling),Bt=u,cn=!0,Jt=null,o!==null&&(Rt[kt++]=Or,Rt[kt++]=Hr,Rt[kt++]=Va,Or=o.id,Hr=o.overflow,Va=u),u=z2(u,h.children),u.flags|=4096,u)}function _1(o,u,l){o.lanes|=u;var h=o.alternate;h!==null&&(h.lanes|=u),B2(o.return,u,l)}function U2(o,u,l,h,g){var x=o.memoizedState;x===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(x.isBackwards=u,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=l,x.tailMode=g)}function O1(o,u,l){var h=u.pendingProps,g=h.revealOrder,x=h.tail;if(tt(o,u,h.children,l),h=dn.current,(h&2)!==0)h=h&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&_1(o,l,u);else if(o.tag===19)_1(o,l,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(tn(dn,h),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(l=u.child,g=null;l!==null;)o=l.alternate,o!==null&&js(o)===null&&(g=l),l=l.sibling;l=g,l===null?(g=u.child,u.child=null):(g=l.sibling,l.sibling=null),U2(u,!1,g,l,x);break;case"backwards":for(l=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&js(o)===null){u.child=g;break}o=g.sibling,g.sibling=l,l=g,g=o}U2(u,!0,l,null,x);break;case"together":U2(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Vs(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Rr(o,u,l){if(o!==null&&(u.dependencies=o.dependencies),Xa|=u.lanes,(l&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(t(153));if(u.child!==null){for(o=u.child,l=Ia(o,o.pendingProps),u.child=l,l.return=u;o.sibling!==null;)o=o.sibling,l=l.sibling=Ia(o,o.pendingProps),l.return=u;l.sibling=null}return u.child}function TO(o,u,l){switch(u.tag){case 3:S1(u),Fo();break;case 5:z6(u);break;case 1:dt(u.type)&&As(u);break;case 4:P2(u,u.stateNode.containerInfo);break;case 10:var h=u.type._context,g=u.memoizedProps.value;tn(Rs,h._currentValue),h._currentValue=g;break;case 13:if(h=u.memoizedState,h!==null)return h.dehydrated!==null?(tn(dn,dn.current&1),u.flags|=128,null):(l&u.child.childLanes)!==0?A1(o,u,l):(tn(dn,dn.current&1),o=Rr(o,u,l),o!==null?o.sibling:null);tn(dn,dn.current&1);break;case 19:if(h=(l&u.childLanes)!==0,(o.flags&128)!==0){if(h)return O1(o,u,l);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),tn(dn,dn.current),h)break;return null;case 22:case 23:return u.lanes=0,w1(o,u,l)}return Rr(o,u,l)}var H1,V2,C1,N1;H1=function(o,u){for(var l=u.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===u)break;for(;l.sibling===null;){if(l.return===null||l.return===u)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},V2=function(){},C1=function(o,u,l,h){var g=o.memoizedProps;if(g!==h){o=u.stateNode,Qa(mr.current);var x=null;switch(l){case"input":g=fe(o,g),h=fe(o,h),x=[];break;case"select":g=ne({},g,{value:void 0}),h=ne({},h,{value:void 0}),x=[];break;case"textarea":g=gn(o,g),h=gn(o,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=Ws)}Sc(l,h);var C;l=null;for(te in g)if(!h.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var D=g[te];for(C in D)D.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?x||(x=[]):(x=x||[]).push(te,null));for(te in h){var q=h[te];if(D=g!=null?g[te]:void 0,h.hasOwnProperty(te)&&q!==D&&(q!=null||D!=null))if(te==="style")if(D){for(C in D)!D.hasOwnProperty(C)||q&&q.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in q)q.hasOwnProperty(C)&&D[C]!==q[C]&&(l||(l={}),l[C]=q[C])}else l||(x||(x=[]),x.push(te,l)),l=q;else te==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,D=D?D.__html:void 0,q!=null&&D!==q&&(x=x||[]).push(te,q)):te==="children"?typeof q!="string"&&typeof q!="number"||(x=x||[]).push(te,""+q):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(q!=null&&te==="onScroll"&&un("scroll",o),x||D===q||(x=[])):(x=x||[]).push(te,q))}l&&(x=x||[]).push("style",l);var te=x;(u.updateQueue=te)&&(u.flags|=4)}},N1=function(o,u,l,h){l!==h&&(u.flags|=4)};function Ru(o,u){if(!cn)switch(o.tailMode){case"hidden":u=o.tail;for(var l=null;u!==null;)u.alternate!==null&&(l=u),u=u.sibling;l===null?o.tail=null:l.sibling=null;break;case"collapsed":l=o.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Zn(o){var u=o.alternate!==null&&o.alternate.child===o.child,l=0,h=0;if(u)for(var g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=l,u}function jO(o,u,l){var h=u.pendingProps;switch(m2(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(u),null;case 1:return dt(u.type)&&Ms(),Zn(u),null;case 3:return h=u.stateNode,Vo(),pn(ft),pn(Yn),M2(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(Cs(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Jt!==null&&(rf(Jt),Jt=null))),V2(o,u),Zn(u),null;case 5:W2(u);var g=Qa(_u.current);if(l=u.type,o!==null&&u.stateNode!=null)C1(o,u,l,h,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!h){if(u.stateNode===null)throw Error(t(166));return Zn(u),null}if(o=Qa(mr.current),Cs(u)){h=u.stateNode,l=u.type;var x=u.memoizedProps;switch(h[dr]=u,h[Pu]=x,o=(u.mode&1)!==0,l){case"dialog":un("cancel",h),un("close",h);break;case"iframe":case"object":case"embed":un("load",h);break;case"video":case"audio":for(g=0;g<Bu.length;g++)un(Bu[g],h);break;case"source":un("error",h);break;case"img":case"image":case"link":un("error",h),un("load",h);break;case"details":un("toggle",h);break;case"input":ye(h,x),un("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},un("invalid",h);break;case"textarea":Ht(h,x),un("invalid",h)}Sc(l,x),g=null;for(var C in x)if(x.hasOwnProperty(C)){var D=x[C];C==="children"?typeof D=="string"?h.textContent!==D&&(x.suppressHydrationWarning!==!0&&Ps(h.textContent,D,o),g=["children",D]):typeof D=="number"&&h.textContent!==""+D&&(x.suppressHydrationWarning!==!0&&Ps(h.textContent,D,o),g=["children",""+D]):a.hasOwnProperty(C)&&D!=null&&C==="onScroll"&&un("scroll",h)}switch(l){case"input":ie(h),je(h,x,!0);break;case"textarea":ie(h),Qn(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=Ws)}h=g,u.updateQueue=h,h!==null&&(u.flags|=4)}else{C=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=wn(l)),o==="http://www.w3.org/1999/xhtml"?l==="script"?(o=C.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=C.createElement(l,{is:h.is}):(o=C.createElement(l),l==="select"&&(C=o,h.multiple?C.multiple=!0:h.size&&(C.size=h.size))):o=C.createElementNS(o,l),o[dr]=u,o[Pu]=h,H1(o,u,!1,!1),u.stateNode=o;e:{switch(C=Mc(l,h),l){case"dialog":un("cancel",o),un("close",o),g=h;break;case"iframe":case"object":case"embed":un("load",o),g=h;break;case"video":case"audio":for(g=0;g<Bu.length;g++)un(Bu[g],o);g=h;break;case"source":un("error",o),g=h;break;case"img":case"image":case"link":un("error",o),un("load",o),g=h;break;case"details":un("toggle",o),g=h;break;case"input":ye(o,h),g=fe(o,h),un("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=ne({},h,{value:void 0}),un("invalid",o);break;case"textarea":Ht(o,h),g=gn(o,h),un("invalid",o);break;default:g=h}Sc(l,g),D=g;for(x in D)if(D.hasOwnProperty(x)){var q=D[x];x==="style"?ru(o,q):x==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Mo(o,q)):x==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&na(o,q):typeof q=="number"&&na(o,""+q):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?q!=null&&x==="onScroll"&&un("scroll",o):q!=null&&M(o,x,q,C))}switch(l){case"input":ie(o),je(o,h,!1);break;case"textarea":ie(o),Qn(o);break;case"option":h.value!=null&&o.setAttribute("value",""+me(h.value));break;case"select":o.multiple=!!h.multiple,x=h.value,x!=null?xn(o,!!h.multiple,x,!1):h.defaultValue!=null&&xn(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=Ws)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Zn(u),null;case 6:if(o&&u.stateNode!=null)N1(o,u,o.memoizedProps,h);else{if(typeof h!="string"&&u.stateNode===null)throw Error(t(166));if(l=Qa(_u.current),Qa(mr.current),Cs(u)){if(h=u.stateNode,l=u.memoizedProps,h[dr]=u,(x=h.nodeValue!==l)&&(o=Bt,o!==null))switch(o.tag){case 3:Ps(h.nodeValue,l,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&Ps(h.nodeValue,l,(o.mode&1)!==0)}x&&(u.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[dr]=u,u.stateNode=h}return Zn(u),null;case 13:if(pn(dn),h=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(cn&&xt!==null&&(u.mode&1)!==0&&(u.flags&128)===0)E6(),Fo(),u.flags|=98560,x=!1;else if(x=Cs(u),h!==null&&h.dehydrated!==null){if(o===null){if(!x)throw Error(t(318));if(x=u.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[dr]=u}else Fo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Zn(u),x=!1}else Jt!==null&&(rf(Jt),Jt=null),x=!0;if(!x)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=l,u):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(dn.current&1)!==0?Rn===0&&(Rn=3):uf())),u.updateQueue!==null&&(u.flags|=4),Zn(u),null);case 4:return Vo(),V2(o,u),o===null&&xu(u.stateNode.containerInfo),Zn(u),null;case 10:return I2(u.type._context),Zn(u),null;case 17:return dt(u.type)&&Ms(),Zn(u),null;case 19:if(pn(dn),x=u.memoizedState,x===null)return Zn(u),null;if(h=(u.flags&128)!==0,C=x.rendering,C===null)if(h)Ru(x,!1);else{if(Rn!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(C=js(o),C!==null){for(u.flags|=128,Ru(x,!1),h=C.updateQueue,h!==null&&(u.updateQueue=h,u.flags|=4),u.subtreeFlags=0,h=l,l=u.child;l!==null;)x=l,o=h,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=o,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,o=C.dependencies,x.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),l=l.sibling;return tn(dn,dn.current&1|2),u.child}o=o.sibling}x.tail!==null&&Pn()>Yo&&(u.flags|=128,h=!0,Ru(x,!1),u.lanes=4194304)}else{if(!h)if(o=js(C),o!==null){if(u.flags|=128,h=!0,l=o.updateQueue,l!==null&&(u.updateQueue=l,u.flags|=4),Ru(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!cn)return Zn(u),null}else 2*Pn()-x.renderingStartTime>Yo&&l!==1073741824&&(u.flags|=128,h=!0,Ru(x,!1),u.lanes=4194304);x.isBackwards?(C.sibling=u.child,u.child=C):(l=x.last,l!==null?l.sibling=C:u.child=C,x.last=C)}return x.tail!==null?(u=x.tail,x.rendering=u,x.tail=u.sibling,x.renderingStartTime=Pn(),u.sibling=null,l=dn.current,tn(dn,h?l&1|2:l&1),u):(Zn(u),null);case 22:case 23:return of(),h=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(u.flags|=8192),h&&(u.mode&1)!==0?(wt&1073741824)!==0&&(Zn(u),u.subtreeFlags&6&&(u.flags|=8192)):Zn(u),null;case 24:return null;case 25:return null}throw Error(t(156,u.tag))}function DO(o,u){switch(m2(u),u.tag){case 1:return dt(u.type)&&Ms(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Vo(),pn(ft),pn(Yn),M2(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return W2(u),null;case 13:if(pn(dn),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(t(340));Fo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return pn(dn),null;case 4:return Vo(),null;case 10:return I2(u.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var Gs=!1,Jn=!1,$O=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ko(o,u){var l=o.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){bn(o,u,h)}else l.current=null}function G2(o,u,l){try{l()}catch(h){bn(o,u,h)}}var R1=!1;function LO(o,u){if(o2=ds,o=f6(),Xc(o)){if("selectionStart"in o)var l={start:o.selectionStart,end:o.selectionEnd};else e:{l=(l=o.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,D=-1,q=-1,te=0,pe=0,le=o,ue=null;n:for(;;){for(var be;le!==l||g!==0&&le.nodeType!==3||(D=C+g),le!==x||h!==0&&le.nodeType!==3||(q=C+h),le.nodeType===3&&(C+=le.nodeValue.length),(be=le.firstChild)!==null;)ue=le,le=be;for(;;){if(le===o)break n;if(ue===l&&++te===g&&(D=C),ue===x&&++pe===h&&(q=C),(be=le.nextSibling)!==null)break;le=ue,ue=le.parentNode}le=be}l=D===-1||q===-1?null:{start:D,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(i2={focusedElem:o,selectionRange:l},ds=!1,Pe=u;Pe!==null;)if(u=Pe,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,Pe=o;else for(;Pe!==null;){u=Pe;try{var Se=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var _e=Se.memoizedProps,Wn=Se.memoizedState,X=u.stateNode,z=X.getSnapshotBeforeUpdate(u.elementType===u.type?_e:er(u.type,_e),Wn);X.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(de){bn(u,u.return,de)}if(o=u.sibling,o!==null){o.return=u.return,Pe=o;break}Pe=u.return}return Se=R1,R1=!1,Se}function ku(o,u,l){var h=u.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var x=g.destroy;g.destroy=void 0,x!==void 0&&G2(u,l,x)}g=g.next}while(g!==h)}}function Ks(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var l=u=u.next;do{if((l.tag&o)===o){var h=l.create;l.destroy=h()}l=l.next}while(l!==u)}}function K2(o){var u=o.ref;if(u!==null){var l=o.stateNode;switch(o.tag){case 5:o=l;break;default:o=l}typeof u=="function"?u(o):u.current=o}}function k1(o){var u=o.alternate;u!==null&&(o.alternate=null,k1(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[dr],delete u[Pu],delete u[l2],delete u[wO],delete u[PO])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function E1(o){return o.tag===5||o.tag===3||o.tag===4}function T1(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||E1(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Q2(o,u,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?l.nodeType===8?l.parentNode.insertBefore(o,u):l.insertBefore(o,u):(l.nodeType===8?(u=l.parentNode,u.insertBefore(o,l)):(u=l,u.appendChild(o)),l=l._reactRootContainer,l!=null||u.onclick!==null||(u.onclick=Ws));else if(h!==4&&(o=o.child,o!==null))for(Q2(o,u,l),o=o.sibling;o!==null;)Q2(o,u,l),o=o.sibling}function Y2(o,u,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?l.insertBefore(o,u):l.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Y2(o,u,l),o=o.sibling;o!==null;)Y2(o,u,l),o=o.sibling}var Vn=null,nr=!1;function ha(o,u,l){for(l=l.child;l!==null;)j1(o,u,l),l=l.sibling}function j1(o,u,l){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(us,l)}catch{}switch(l.tag){case 5:Jn||Ko(l,u);case 6:var h=Vn,g=nr;Vn=null,ha(o,u,l),Vn=h,nr=g,Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?s2(o.parentNode,l):o.nodeType===1&&s2(o,l),du(o)):s2(Vn,l.stateNode));break;case 4:h=Vn,g=nr,Vn=l.stateNode.containerInfo,nr=!0,ha(o,u,l),Vn=h,nr=g;break;case 0:case 11:case 14:case 15:if(!Jn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&G2(l,u,C),g=g.next}while(g!==h)}ha(o,u,l);break;case 1:if(!Jn&&(Ko(l,u),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(D){bn(l,u,D)}ha(o,u,l);break;case 21:ha(o,u,l);break;case 22:l.mode&1?(Jn=(h=Jn)||l.memoizedState!==null,ha(o,u,l),Jn=h):ha(o,u,l);break;default:ha(o,u,l)}}function D1(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var l=o.stateNode;l===null&&(l=o.stateNode=new $O),u.forEach(function(h){var g=YO.bind(null,o,h);l.has(h)||(l.add(h),h.then(g,g))})}}function tr(o,u){var l=u.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var x=o,C=u,D=C;e:for(;D!==null;){switch(D.tag){case 5:Vn=D.stateNode,nr=!1;break e;case 3:Vn=D.stateNode.containerInfo,nr=!0;break e;case 4:Vn=D.stateNode.containerInfo,nr=!0;break e}D=D.return}if(Vn===null)throw Error(t(160));j1(x,C,g),Vn=null,nr=!1;var q=g.alternate;q!==null&&(q.return=null),g.return=null}catch(te){bn(g,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)$1(u,o),u=u.sibling}function $1(o,u){var l=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),vr(o),h&4){try{ku(3,o,o.return),Ks(3,o)}catch(_e){bn(o,o.return,_e)}try{ku(5,o,o.return)}catch(_e){bn(o,o.return,_e)}}break;case 1:tr(u,o),vr(o),h&512&&l!==null&&Ko(l,l.return);break;case 5:if(tr(u,o),vr(o),h&512&&l!==null&&Ko(l,l.return),o.flags&32){var g=o.stateNode;try{na(g,"")}catch(_e){bn(o,o.return,_e)}}if(h&4&&(g=o.stateNode,g!=null)){var x=o.memoizedProps,C=l!==null?l.memoizedProps:x,D=o.type,q=o.updateQueue;if(o.updateQueue=null,q!==null)try{D==="input"&&x.type==="radio"&&x.name!=null&&ge(g,x),Mc(D,C);var te=Mc(D,x);for(C=0;C<q.length;C+=2){var pe=q[C],le=q[C+1];pe==="style"?ru(g,le):pe==="dangerouslySetInnerHTML"?Mo(g,le):pe==="children"?na(g,le):M(g,pe,le,te)}switch(D){case"input":xe(g,x);break;case"textarea":yn(g,x);break;case"select":var ue=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var be=x.value;be!=null?xn(g,!!x.multiple,be,!1):ue!==!!x.multiple&&(x.defaultValue!=null?xn(g,!!x.multiple,x.defaultValue,!0):xn(g,!!x.multiple,x.multiple?[]:"",!1))}g[Pu]=x}catch(_e){bn(o,o.return,_e)}}break;case 6:if(tr(u,o),vr(o),h&4){if(o.stateNode===null)throw Error(t(162));g=o.stateNode,x=o.memoizedProps;try{g.nodeValue=x}catch(_e){bn(o,o.return,_e)}}break;case 3:if(tr(u,o),vr(o),h&4&&l!==null&&l.memoizedState.isDehydrated)try{du(u.containerInfo)}catch(_e){bn(o,o.return,_e)}break;case 4:tr(u,o),vr(o);break;case 13:tr(u,o),vr(o),g=o.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(J2=Pn())),h&4&&D1(o);break;case 22:if(pe=l!==null&&l.memoizedState!==null,o.mode&1?(Jn=(te=Jn)||pe,tr(u,o),Jn=te):tr(u,o),vr(o),h&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!pe&&(o.mode&1)!==0)for(Pe=o,pe=o.child;pe!==null;){for(le=Pe=pe;Pe!==null;){switch(ue=Pe,be=ue.child,ue.tag){case 0:case 11:case 14:case 15:ku(4,ue,ue.return);break;case 1:Ko(ue,ue.return);var Se=ue.stateNode;if(typeof Se.componentWillUnmount=="function"){h=ue,l=ue.return;try{u=h,Se.props=u.memoizedProps,Se.state=u.memoizedState,Se.componentWillUnmount()}catch(_e){bn(h,l,_e)}}break;case 5:Ko(ue,ue.return);break;case 22:if(ue.memoizedState!==null){q1(le);continue}}be!==null?(be.return=ue,Pe=be):q1(le)}pe=pe.sibling}e:for(pe=null,le=o;;){if(le.tag===5){if(pe===null){pe=le;try{g=le.stateNode,te?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(D=le.stateNode,q=le.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null,D.style.display=ta("display",C))}catch(_e){bn(o,o.return,_e)}}}else if(le.tag===6){if(pe===null)try{le.stateNode.nodeValue=te?"":le.memoizedProps}catch(_e){bn(o,o.return,_e)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===o)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===o)break e;for(;le.sibling===null;){if(le.return===null||le.return===o)break e;pe===le&&(pe=null),le=le.return}pe===le&&(pe=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:tr(u,o),vr(o),h&4&&D1(o);break;case 21:break;default:tr(u,o),vr(o)}}function vr(o){var u=o.flags;if(u&2){try{e:{for(var l=o.return;l!==null;){if(E1(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(na(g,""),h.flags&=-33);var x=T1(o);Y2(o,x,g);break;case 3:case 4:var C=h.stateNode.containerInfo,D=T1(o);Q2(o,D,C);break;default:throw Error(t(161))}}catch(q){bn(o,o.return,q)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function FO(o,u,l){Pe=o,L1(o)}function L1(o,u,l){for(var h=(o.mode&1)!==0;Pe!==null;){var g=Pe,x=g.child;if(g.tag===22&&h){var C=g.memoizedState!==null||Gs;if(!C){var D=g.alternate,q=D!==null&&D.memoizedState!==null||Jn;D=Gs;var te=Jn;if(Gs=C,(Jn=q)&&!te)for(Pe=g;Pe!==null;)C=Pe,q=C.child,C.tag===22&&C.memoizedState!==null?z1(g):q!==null?(q.return=C,Pe=q):z1(g);for(;x!==null;)Pe=x,L1(x),x=x.sibling;Pe=g,Gs=D,Jn=te}F1(o)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,Pe=x):F1(o)}}function F1(o){for(;Pe!==null;){var u=Pe;if((u.flags&8772)!==0){var l=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Jn||Ks(5,u);break;case 1:var h=u.stateNode;if(u.flags&4&&!Jn)if(l===null)h.componentDidMount();else{var g=u.elementType===u.type?l.memoizedProps:er(u.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=u.updateQueue;x!==null&&q6(u,x,h);break;case 3:var C=u.updateQueue;if(C!==null){if(l=null,u.child!==null)switch(u.child.tag){case 5:l=u.child.stateNode;break;case 1:l=u.child.stateNode}q6(u,C,l)}break;case 5:var D=u.stateNode;if(l===null&&u.flags&4){l=D;var q=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var pe=te.memoizedState;if(pe!==null){var le=pe.dehydrated;le!==null&&du(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||u.flags&512&&K2(u)}catch(ue){bn(u,u.return,ue)}}if(u===o){Pe=null;break}if(l=u.sibling,l!==null){l.return=u.return,Pe=l;break}Pe=u.return}}function q1(o){for(;Pe!==null;){var u=Pe;if(u===o){Pe=null;break}var l=u.sibling;if(l!==null){l.return=u.return,Pe=l;break}Pe=u.return}}function z1(o){for(;Pe!==null;){var u=Pe;try{switch(u.tag){case 0:case 11:case 15:var l=u.return;try{Ks(4,u)}catch(q){bn(u,l,q)}break;case 1:var h=u.stateNode;if(typeof h.componentDidMount=="function"){var g=u.return;try{h.componentDidMount()}catch(q){bn(u,g,q)}}var x=u.return;try{K2(u)}catch(q){bn(u,x,q)}break;case 5:var C=u.return;try{K2(u)}catch(q){bn(u,C,q)}}}catch(q){bn(u,u.return,q)}if(u===o){Pe=null;break}var D=u.sibling;if(D!==null){D.return=u.return,Pe=D;break}Pe=u.return}}var qO=Math.ceil,Qs=O.ReactCurrentDispatcher,X2=O.ReactCurrentOwner,jt=O.ReactCurrentBatchConfig,ze=0,Ln=null,_n=null,Gn=0,wt=0,Qo=la(0),Rn=0,Eu=null,Xa=0,Ys=0,Z2=0,Tu=null,ht=null,J2=0,Yo=1/0,kr=null,Xs=!1,ef=null,va=null,Zs=!1,ga=null,Js=0,ju=0,nf=null,el=-1,nl=0;function rt(){return(ze&6)!==0?Pn():el!==-1?el:el=Pn()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Gn!==0?Gn&-Gn:SO.transition!==null?(nl===0&&(nl=Tb()),nl):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:Vb(o.type)),o)}function rr(o,u,l,h){if(50<ju)throw ju=0,nf=null,Error(t(185));pu(o,l,h),((ze&2)===0||o!==Ln)&&(o===Ln&&((ze&2)===0&&(Ys|=l),Rn===4&&ba(o,Gn)),vt(o,h),l===1&&ze===0&&(u.mode&1)===0&&(Yo=Pn()+500,_s&&fa()))}function vt(o,u){var l=o.callbackNode;S_(o,u);var h=ls(o,o===Ln?Gn:0);if(h===0)l!==null&&Rb(l),o.callbackNode=null,o.callbackPriority=0;else if(u=h&-h,o.callbackPriority!==u){if(l!=null&&Rb(l),u===1)o.tag===0?WO(V1.bind(null,o)):H6(V1.bind(null,o)),BO(function(){(ze&6)===0&&fa()}),l=null;else{switch(jb(h)){case 1:l=Rc;break;case 4:l=kb;break;case 16:l=is;break;case 536870912:l=Eb;break;default:l=is}l=eI(l,U1.bind(null,o))}o.callbackPriority=u,o.callbackNode=l}}function U1(o,u){if(el=-1,nl=0,(ze&6)!==0)throw Error(t(327));var l=o.callbackNode;if(Xo()&&o.callbackNode!==l)return null;var h=ls(o,o===Ln?Gn:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||u)u=tl(o,h);else{u=h;var g=ze;ze|=2;var x=K1();(Ln!==o||Gn!==u)&&(kr=null,Yo=Pn()+500,Ja(o,u));do try{VO();break}catch(D){G1(o,D)}while(!0);b2(),Qs.current=x,ze=g,_n!==null?u=0:(Ln=null,Gn=0,u=Rn)}if(u!==0){if(u===2&&(g=kc(o),g!==0&&(h=g,u=tf(o,g))),u===1)throw l=Eu,Ja(o,0),ba(o,h),vt(o,Pn()),l;if(u===6)ba(o,h);else{if(g=o.current.alternate,(h&30)===0&&!zO(g)&&(u=tl(o,h),u===2&&(x=kc(o),x!==0&&(h=x,u=tf(o,x))),u===1))throw l=Eu,Ja(o,0),ba(o,h),vt(o,Pn()),l;switch(o.finishedWork=g,o.finishedLanes=h,u){case 0:case 1:throw Error(t(345));case 2:eo(o,ht,kr);break;case 3:if(ba(o,h),(h&130023424)===h&&(u=J2+500-Pn(),10<u)){if(ls(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){rt(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=p2(eo.bind(null,o,ht,kr),u);break}eo(o,ht,kr);break;case 4:if(ba(o,h),(h&4194240)===h)break;for(u=o.eventTimes,g=-1;0<h;){var C=31-Xt(h);x=1<<C,C=u[C],C>g&&(g=C),h&=~x}if(h=g,h=Pn()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*qO(h/1960))-h,10<h){o.timeoutHandle=p2(eo.bind(null,o,ht,kr),h);break}eo(o,ht,kr);break;case 5:eo(o,ht,kr);break;default:throw Error(t(329))}}}return vt(o,Pn()),o.callbackNode===l?U1.bind(null,o):null}function tf(o,u){var l=Tu;return o.current.memoizedState.isDehydrated&&(Ja(o,u).flags|=256),o=tl(o,u),o!==2&&(u=ht,ht=l,u!==null&&rf(u)),o}function rf(o){ht===null?ht=o:ht.push.apply(ht,o)}function zO(o){for(var u=o;;){if(u.flags&16384){var l=u.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],x=g.getSnapshot;g=g.value;try{if(!Zt(x(),g))return!1}catch{return!1}}}if(l=u.child,u.subtreeFlags&16384&&l!==null)l.return=u,u=l;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~Z2,u&=~Ys,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var l=31-Xt(u),h=1<<l;o[l]=-1,u&=~h}}function V1(o){if((ze&6)!==0)throw Error(t(327));Xo();var u=ls(o,0);if((u&1)===0)return vt(o,Pn()),null;var l=tl(o,u);if(o.tag!==0&&l===2){var h=kc(o);h!==0&&(u=h,l=tf(o,h))}if(l===1)throw l=Eu,Ja(o,0),ba(o,u),vt(o,Pn()),l;if(l===6)throw Error(t(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,eo(o,ht,kr),vt(o,Pn()),null}function af(o,u){var l=ze;ze|=1;try{return o(u)}finally{ze=l,ze===0&&(Yo=Pn()+500,_s&&fa())}}function Za(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Xo();var u=ze;ze|=1;var l=jt.transition,h=Ze;try{if(jt.transition=null,Ze=1,o)return o()}finally{Ze=h,jt.transition=l,ze=u,(ze&6)===0&&fa()}}function of(){wt=Qo.current,pn(Qo)}function Ja(o,u){o.finishedWork=null,o.finishedLanes=0;var l=o.timeoutHandle;if(l!==-1&&(o.timeoutHandle=-1,IO(l)),_n!==null)for(l=_n.return;l!==null;){var h=l;switch(m2(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ms();break;case 3:Vo(),pn(ft),pn(Yn),M2();break;case 5:W2(h);break;case 4:Vo();break;case 13:pn(dn);break;case 19:pn(dn);break;case 10:I2(h.type._context);break;case 22:case 23:of()}l=l.return}if(Ln=o,_n=o=Ia(o.current,null),Gn=wt=u,Rn=0,Eu=null,Z2=Ys=Xa=0,ht=Tu=null,Ka!==null){for(u=0;u<Ka.length;u++)if(l=Ka[u],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,x=l.pending;if(x!==null){var C=x.next;x.next=g,h.next=C}l.pending=h}Ka=null}return o}function G1(o,u){do{var l=_n;try{if(b2(),Ds.current=qs,$s){for(var h=mn.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}$s=!1}if(Ya=0,$n=Nn=mn=null,Ou=!1,Hu=0,X2.current=null,l===null||l.return===null){Rn=1,Eu=u,_n=null;break}e:{var x=o,C=l.return,D=l,q=u;if(u=Gn,D.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var te=q,pe=D,le=pe.tag;if((pe.mode&1)===0&&(le===0||le===11||le===15)){var ue=pe.alternate;ue?(pe.updateQueue=ue.updateQueue,pe.memoizedState=ue.memoizedState,pe.lanes=ue.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var be=y1(C);if(be!==null){be.flags&=-257,b1(be,C,D,x,u),be.mode&1&&g1(x,te,u),u=be,q=te;var Se=u.updateQueue;if(Se===null){var _e=new Set;_e.add(q),u.updateQueue=_e}else Se.add(q);break e}else{if((u&1)===0){g1(x,te,u),uf();break e}q=Error(t(426))}}else if(cn&&D.mode&1){var Wn=y1(C);if(Wn!==null){(Wn.flags&65536)===0&&(Wn.flags|=256),b1(Wn,C,D,x,u),g2(Go(q,D));break e}}x=q=Go(q,D),Rn!==4&&(Rn=2),Tu===null?Tu=[x]:Tu.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,u&=-u,x.lanes|=u;var X=h1(x,q,u);F6(x,X);break e;case 1:D=q;var z=x.type,ee=x.stateNode;if((x.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){x.flags|=65536,u&=-u,x.lanes|=u;var de=v1(x,D,u);F6(x,de);break e}}x=x.return}while(x!==null)}Y1(l)}catch(He){u=He,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function K1(){var o=Qs.current;return Qs.current=qs,o===null?qs:o}function uf(){(Rn===0||Rn===3||Rn===2)&&(Rn=4),Ln===null||(Xa&268435455)===0&&(Ys&268435455)===0||ba(Ln,Gn)}function tl(o,u){var l=ze;ze|=2;var h=K1();(Ln!==o||Gn!==u)&&(kr=null,Ja(o,u));do try{UO();break}catch(g){G1(o,g)}while(!0);if(b2(),ze=l,Qs.current=h,_n!==null)throw Error(t(261));return Ln=null,Gn=0,Rn}function UO(){for(;_n!==null;)Q1(_n)}function VO(){for(;_n!==null&&!g_();)Q1(_n)}function Q1(o){var u=J1(o.alternate,o,wt);o.memoizedProps=o.pendingProps,u===null?Y1(o):_n=u,X2.current=null}function Y1(o){var u=o;do{var l=u.alternate;if(o=u.return,(u.flags&32768)===0){if(l=jO(l,u,wt),l!==null){_n=l;return}}else{if(l=DO(l,u),l!==null){l.flags&=32767,_n=l;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Rn=6,_n=null;return}}if(u=u.sibling,u!==null){_n=u;return}_n=u=o}while(u!==null);Rn===0&&(Rn=5)}function eo(o,u,l){var h=Ze,g=jt.transition;try{jt.transition=null,Ze=1,GO(o,u,l,h)}finally{jt.transition=g,Ze=h}return null}function GO(o,u,l,h){do Xo();while(ga!==null);if((ze&6)!==0)throw Error(t(327));l=o.finishedWork;var g=o.finishedLanes;if(l===null)return null;if(o.finishedWork=null,o.finishedLanes=0,l===o.current)throw Error(t(177));o.callbackNode=null,o.callbackPriority=0;var x=l.lanes|l.childLanes;if(M_(o,x),o===Ln&&(_n=Ln=null,Gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Zs||(Zs=!0,eI(is,function(){return Xo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=jt.transition,jt.transition=null;var C=Ze;Ze=1;var D=ze;ze|=4,X2.current=null,LO(o,l),$1(l,o),dO(i2),ds=!!o2,i2=o2=null,o.current=l,FO(l),y_(),ze=D,Ze=C,jt.transition=x}else o.current=l;if(Zs&&(Zs=!1,ga=o,Js=g),x=o.pendingLanes,x===0&&(va=null),B_(l.stateNode),vt(o,Pn()),u!==null)for(h=o.onRecoverableError,l=0;l<u.length;l++)g=u[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(Xs)throw Xs=!1,o=ef,ef=null,o;return(Js&1)!==0&&o.tag!==0&&Xo(),x=o.pendingLanes,(x&1)!==0?o===nf?ju++:(ju=0,nf=o):ju=0,fa(),null}function Xo(){if(ga!==null){var o=jb(Js),u=jt.transition,l=Ze;try{if(jt.transition=null,Ze=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Js=0,(ze&6)!==0)throw Error(t(331));var g=ze;for(ze|=4,Pe=o.current;Pe!==null;){var x=Pe,C=x.child;if((Pe.flags&16)!==0){var D=x.deletions;if(D!==null){for(var q=0;q<D.length;q++){var te=D[q];for(Pe=te;Pe!==null;){var pe=Pe;switch(pe.tag){case 0:case 11:case 15:ku(8,pe,x)}var le=pe.child;if(le!==null)le.return=pe,Pe=le;else for(;Pe!==null;){pe=Pe;var ue=pe.sibling,be=pe.return;if(k1(pe),pe===te){Pe=null;break}if(ue!==null){ue.return=be,Pe=ue;break}Pe=be}}}var Se=x.alternate;if(Se!==null){var _e=Se.child;if(_e!==null){Se.child=null;do{var Wn=_e.sibling;_e.sibling=null,_e=Wn}while(_e!==null)}}Pe=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,Pe=C;else e:for(;Pe!==null;){if(x=Pe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ku(9,x,x.return)}var X=x.sibling;if(X!==null){X.return=x.return,Pe=X;break e}Pe=x.return}}var z=o.current;for(Pe=z;Pe!==null;){C=Pe;var ee=C.child;if((C.subtreeFlags&2064)!==0&&ee!==null)ee.return=C,Pe=ee;else e:for(C=z;Pe!==null;){if(D=Pe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ks(9,D)}}catch(He){bn(D,D.return,He)}if(D===C){Pe=null;break e}var de=D.sibling;if(de!==null){de.return=D.return,Pe=de;break e}Pe=D.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(us,o)}catch{}h=!0}return h}finally{Ze=l,jt.transition=u}}return!1}function X1(o,u,l){u=Go(l,u),u=h1(o,u,1),o=ma(o,u,1),u=rt(),o!==null&&(pu(o,1,u),vt(o,u))}function bn(o,u,l){if(o.tag===3)X1(o,o,l);else for(;u!==null;){if(u.tag===3){X1(u,o,l);break}else if(u.tag===1){var h=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Go(l,o),o=v1(u,o,1),u=ma(u,o,1),o=rt(),u!==null&&(pu(u,1,o),vt(u,o));break}}u=u.return}}function KO(o,u,l){var h=o.pingCache;h!==null&&h.delete(u),u=rt(),o.pingedLanes|=o.suspendedLanes&l,Ln===o&&(Gn&l)===l&&(Rn===4||Rn===3&&(Gn&130023424)===Gn&&500>Pn()-J2?Ja(o,0):Z2|=l),vt(o,u)}function Z1(o,u){u===0&&((o.mode&1)===0?u=1:(u=ss,ss<<=1,(ss&130023424)===0&&(ss=4194304)));var l=rt();o=Cr(o,u),o!==null&&(pu(o,u,l),vt(o,l))}function QO(o){var u=o.memoizedState,l=0;u!==null&&(l=u.retryLane),Z1(o,l)}function YO(o,u){var l=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(u),Z1(o,l)}var J1;J1=function(o,u,l){if(o!==null)if(o.memoizedProps!==u.pendingProps||ft.current)mt=!0;else{if((o.lanes&l)===0&&(u.flags&128)===0)return mt=!1,TO(o,u,l);mt=(o.flags&131072)!==0}else mt=!1,cn&&(u.flags&1048576)!==0&&C6(u,Hs,u.index);switch(u.lanes=0,u.tag){case 2:var h=u.type;Vs(o,u),o=u.pendingProps;var g=Do(u,Yn.current);Uo(u,l),g=O2(null,u,h,o,g,l);var x=H2();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,dt(h)?(x=!0,As(u)):x=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,w2(u),g.updater=zs,u.stateNode=g,g._reactInternals=u,T2(u,h,o,l),u=L2(null,u,h,!0,x,l)):(u.tag=0,cn&&x&&d2(u),tt(null,u,g,l),u=u.child),u;case 16:h=u.elementType;e:{switch(Vs(o,u),o=u.pendingProps,g=h._init,h=g(h._payload),u.type=h,g=u.tag=ZO(h),o=er(h,o),g){case 0:u=$2(null,u,h,o,l);break e;case 1:u=W1(null,u,h,o,l);break e;case 11:u=I1(null,u,h,o,l);break e;case 14:u=B1(null,u,h,er(h.type,o),l);break e}throw Error(t(306,h,""))}return u;case 0:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),$2(o,u,h,g,l);case 1:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),W1(o,u,h,g,l);case 3:e:{if(S1(u),o===null)throw Error(t(387));h=u.pendingProps,x=u.memoizedState,g=x.element,L6(o,u),Ts(u,h,null,l);var C=u.memoizedState;if(h=C.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},u.updateQueue.baseState=x,u.memoizedState=x,u.flags&256){g=Go(Error(t(423)),u),u=M1(o,u,h,l,g);break e}else if(h!==g){g=Go(Error(t(424)),u),u=M1(o,u,h,l,g);break e}else for(xt=sa(u.stateNode.containerInfo.firstChild),Bt=u,cn=!0,Jt=null,l=D6(u,null,h,l),u.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fo(),h===g){u=Rr(o,u,l);break e}tt(o,u,h,l)}u=u.child}return u;case 5:return z6(u),o===null&&v2(u),h=u.type,g=u.pendingProps,x=o!==null?o.memoizedProps:null,C=g.children,u2(h,g)?C=null:x!==null&&u2(h,x)&&(u.flags|=32),P1(o,u),tt(o,u,C,l),u.child;case 6:return o===null&&v2(u),null;case 13:return A1(o,u,l);case 4:return P2(u,u.stateNode.containerInfo),h=u.pendingProps,o===null?u.child=qo(u,null,h,l):tt(o,u,h,l),u.child;case 11:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),I1(o,u,h,g,l);case 7:return tt(o,u,u.pendingProps,l),u.child;case 8:return tt(o,u,u.pendingProps.children,l),u.child;case 12:return tt(o,u,u.pendingProps.children,l),u.child;case 10:e:{if(h=u.type._context,g=u.pendingProps,x=u.memoizedProps,C=g.value,tn(Rs,h._currentValue),h._currentValue=C,x!==null)if(Zt(x.value,C)){if(x.children===g.children&&!ft.current){u=Rr(o,u,l);break e}}else for(x=u.child,x!==null&&(x.return=u);x!==null;){var D=x.dependencies;if(D!==null){C=x.child;for(var q=D.firstContext;q!==null;){if(q.context===h){if(x.tag===1){q=Nr(-1,l&-l),q.tag=2;var te=x.updateQueue;if(te!==null){te=te.shared;var pe=te.pending;pe===null?q.next=q:(q.next=pe.next,pe.next=q),te.pending=q}}x.lanes|=l,q=x.alternate,q!==null&&(q.lanes|=l),B2(x.return,l,u),D.lanes|=l;break}q=q.next}}else if(x.tag===10)C=x.type===u.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,D=C.alternate,D!==null&&(D.lanes|=l),B2(C,l,u),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===u){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}tt(o,u,g.children,l),u=u.child}return u;case 9:return g=u.type,h=u.pendingProps.children,Uo(u,l),g=Et(g),h=h(g),u.flags|=1,tt(o,u,h,l),u.child;case 14:return h=u.type,g=er(h,u.pendingProps),g=er(h.type,g),B1(o,u,h,g,l);case 15:return x1(o,u,u.type,u.pendingProps,l);case 17:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),Vs(o,u),u.tag=1,dt(h)?(o=!0,As(u)):o=!1,Uo(u,l),d1(u,h,g),T2(u,h,g,l),L2(null,u,h,!0,o,l);case 19:return O1(o,u,l);case 22:return w1(o,u,l)}throw Error(t(156,u.tag))};function eI(o,u){return Nb(o,u)}function XO(o,u,l,h){this.tag=o,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(o,u,l,h){return new XO(o,u,l,h)}function pf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function ZO(o){if(typeof o=="function")return pf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===R)return 11;if(o===G)return 14}return 2}function Ia(o,u){var l=o.alternate;return l===null?(l=Dt(o.tag,u,o.key,o.mode),l.elementType=o.elementType,l.type=o.type,l.stateNode=o.stateNode,l.alternate=o,o.alternate=l):(l.pendingProps=u,l.type=o.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=o.flags&14680064,l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,u=o.dependencies,l.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},l.sibling=o.sibling,l.index=o.index,l.ref=o.ref,l}function rl(o,u,l,h,g,x){var C=2;if(h=o,typeof o=="function")pf(o)&&(C=1);else if(typeof o=="string")C=5;else e:switch(o){case N:return no(l.children,g,x,u);case P:C=8,g|=8;break;case H:return o=Dt(12,l,u,g|2),o.elementType=H,o.lanes=x,o;case F:return o=Dt(13,l,u,g),o.elementType=F,o.lanes=x,o;case V:return o=Dt(19,l,u,g),o.elementType=V,o.lanes=x,o;case Q:return al(l,g,x,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case k:C=10;break e;case j:C=9;break e;case R:C=11;break e;case G:C=14;break e;case Y:C=16,h=null;break e}throw Error(t(130,o==null?o:typeof o,""))}return u=Dt(C,l,u,g),u.elementType=o,u.type=h,u.lanes=x,u}function no(o,u,l,h){return o=Dt(7,o,h,u),o.lanes=l,o}function al(o,u,l,h){return o=Dt(22,o,h,u),o.elementType=Q,o.lanes=l,o.stateNode={isHidden:!1},o}function sf(o,u,l){return o=Dt(6,o,null,u),o.lanes=l,o}function lf(o,u,l){return u=Dt(4,o.children!==null?o.children:[],o.key,u),u.lanes=l,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function JO(o,u,l,h,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function cf(o,u,l,h,g,x,C,D,q){return o=new JO(o,u,l,D,q),u===1?(u=1,x===!0&&(u|=8)):u=0,x=Dt(3,null,null,u),o.current=x,x.stateNode=o,x.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},w2(x),o}function eH(o,u,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:h==null?null:""+h,children:o,containerInfo:u,implementation:l}}function nI(o){if(!o)return ca;o=o._reactInternals;e:{if(qa(o)!==o||o.tag!==1)throw Error(t(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(dt(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(t(171))}if(o.tag===1){var l=o.type;if(dt(l))return _6(o,l,u)}return u}function tI(o,u,l,h,g,x,C,D,q){return o=cf(l,h,!0,o,g,x,C,D,q),o.context=nI(null),l=o.current,h=rt(),g=ya(l),x=Nr(h,g),x.callback=u??null,ma(l,x,g),o.current.lanes=g,pu(o,g,h),vt(o,h),o}function ol(o,u,l,h){var g=u.current,x=rt(),C=ya(g);return l=nI(l),u.context===null?u.context=l:u.pendingContext=l,u=Nr(x,C),u.payload={element:o},h=h===void 0?null:h,h!==null&&(u.callback=h),o=ma(g,u,C),o!==null&&(rr(o,g,C,x),Es(o,g,C)),C}function il(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function rI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var l=o.retryLane;o.retryLane=l!==0&&l<u?l:u}}function ff(o,u){rI(o,u),(o=o.alternate)&&rI(o,u)}function nH(){return null}var aI=typeof reportError=="function"?reportError:function(o){console.error(o)};function df(o){this._internalRoot=o}ul.prototype.render=df.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(t(409));ol(o,u,null,null)},ul.prototype.unmount=df.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Za(function(){ol(null,o,null,null)}),u[Ar]=null}};function ul(o){this._internalRoot=o}ul.prototype.unstable_scheduleHydration=function(o){if(o){var u=Lb();o={blockedOn:null,target:o,priority:u};for(var l=0;l<ia.length&&u!==0&&u<ia[l].priority;l++);ia.splice(l,0,o),l===0&&zb(o)}};function mf(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function pl(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function oI(){}function tH(o,u,l,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var te=il(C);x.call(te)}}var C=tI(u,h,o,0,null,!1,!1,"",oI);return o._reactRootContainer=C,o[Ar]=C.current,xu(o.nodeType===8?o.parentNode:o),Za(),C}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var D=h;h=function(){var te=il(q);D.call(te)}}var q=cf(o,0,!1,null,null,!1,!1,"",oI);return o._reactRootContainer=q,o[Ar]=q.current,xu(o.nodeType===8?o.parentNode:o),Za(function(){ol(u,q,l,h)}),q}function sl(o,u,l,h,g){var x=l._reactRootContainer;if(x){var C=x;if(typeof g=="function"){var D=g;g=function(){var q=il(C);D.call(q)}}ol(u,C,o,g)}else C=tH(l,u,o,g,h);return il(C)}Db=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var l=uu(u.pendingLanes);l!==0&&(Tc(u,l|1),vt(u,Pn()),(ze&6)===0&&(Yo=Pn()+500,fa()))}break;case 13:Za(function(){var h=Cr(o,1);if(h!==null){var g=rt();rr(h,o,1,g)}}),ff(o,1)}},jc=function(o){if(o.tag===13){var u=Cr(o,134217728);if(u!==null){var l=rt();rr(u,o,134217728,l)}ff(o,134217728)}},$b=function(o){if(o.tag===13){var u=ya(o),l=Cr(o,u);if(l!==null){var h=rt();rr(l,o,u,h)}ff(o,u)}},Lb=function(){return Ze},Fb=function(o,u){var l=Ze;try{return Ze=o,u()}finally{Ze=l}},Oc=function(o,u,l){switch(u){case"input":if(xe(o,l),u=l.name,l.type==="radio"&&u!=null){for(l=o;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<l.length;u++){var h=l[u];if(h!==o&&h.form===o.form){var g=Ss(h);if(!g)throw Error(t(90));J(h),xe(h,g)}}}break;case"textarea":yn(o,l);break;case"select":u=l.value,u!=null&&xn(o,!!l.multiple,u,!1)}},Sb=af,Mb=Za;var rH={usingClientEntryPoint:!1,Events:[Wu,To,Ss,Pb,Wb,af]},Du={findFiberByHostInstance:za,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aH={bundleType:Du.bundleType,version:Du.version,rendererPackageName:Du.rendererPackageName,rendererConfig:Du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Hb(o),o===null?null:o.stateNode},findFiberByHostInstance:Du.findFiberByHostInstance||nH,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{us=ll.inject(aH),fr=ll}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rH,gt.createPortal=function(o,u){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(u))throw Error(t(200));return eH(o,u,null,l)},gt.createRoot=function(o,u){if(!mf(o))throw Error(t(299));var l=!1,h="",g=aI;return u!=null&&(u.unstable_strictMode===!0&&(l=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=cf(o,1,!1,null,null,l,!1,h,g),o[Ar]=u.current,xu(o.nodeType===8?o.parentNode:o),new df(u)},gt.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(t(188)):(o=Object.keys(o).join(","),Error(t(268,o)));return o=Hb(u),o=o===null?null:o.stateNode,o},gt.flushSync=function(o){return Za(o)},gt.hydrate=function(o,u,l){if(!pl(u))throw Error(t(200));return sl(null,o,u,!0,l)},gt.hydrateRoot=function(o,u,l){if(!mf(o))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,x="",C=aI;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),u=tI(u,null,o,1,l??null,g,!1,x,C),o[Ar]=u.current,xu(o),h)for(o=0;o<h.length;o++)l=h[o],g=l._getVersion,g=g(l._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[l,g]:u.mutableSourceEagerHydrationData.push(l,g);return new ul(u)},gt.render=function(o,u,l){if(!pl(u))throw Error(t(200));return sl(null,o,u,!1,l)},gt.unmountComponentAtNode=function(o){if(!pl(o))throw Error(t(40));return o._reactRootContainer?(Za(function(){sl(null,null,o,!1,function(){o._reactRootContainer=null,o[Ar]=null})}),!0):!1},gt.unstable_batchedUpdates=af,gt.unstable_renderSubtreeIntoContainer=function(o,u,l,h){if(!pl(l))throw Error(t(200));if(o==null||o._reactInternals===void 0)throw Error(t(38));return sl(o,u,l,!1,h)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var dI;function EW(){if(dI)return gf.exports;dI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),gf.exports=mH(),gf.exports}var mI;function hH(){if(mI)return fl;mI=1;var e=EW();return fl.createRoot=e.createRoot,fl.hydrateRoot=e.hydrateRoot,fl}var vH=hH(),U=sy();const E=Xe(U),gH=pH({__proto__:null,default:E},[U]);var _l={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var yH=_l.exports,hI;function bH(){return hI||(hI=1,(function(e,n){((t,r)=>{e.exports=r()})(yH,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,p=r.IS_PAPA_WORKER||!1,s={},c=0,f={};function m(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(H){var k=w(H);k.chunkSize=parseInt(k.chunkSize),H.step||H.chunk||(k.chunkSize=null),this._handle=new I(k),(this._handle.streamer=this)._config=k}).call(this,P),this.parseChunk=function(H,k){var j=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<j){let F=this._config.newline;F||(R=this._config.quoteChar||'"',F=this._handle.guessLineEndings(H,R)),H=[...H.split(F).slice(j)].join(F)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(R=this._config.beforeFirstChunk(H))!==void 0&&(H=R),this.isFirstChunk=!1,this._halted=!1;var j=this._partialLine+H,R=(this._partialLine="",this._handle.parse(j,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(H=R.meta.cursor,j=(this._finished||(this._partialLine=j.substring(H-this._baseIndex),this._baseIndex=H),R&&R.data&&(this._rowCount+=R.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),p)r.postMessage({results:R,workerId:f.WORKER_ID,finished:j});else if(N(this._config.chunk)&&!k){if(this._config.chunk(R,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=R=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(R.data),this._completeResults.errors=this._completeResults.errors.concat(R.errors),this._completeResults.meta=R.meta),this._completed||!j||!N(this._config.complete)||R&&R.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),j||R&&R.meta.paused||this._nextChunk(),R}this._halted=!0},this._sendError=function(H){N(this._config.error)?this._config.error(H):p&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:H,finished:!1})}}function d(P){var H;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),m.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(H=new XMLHttpRequest,this._config.withCredentials&&(H.withCredentials=this._config.withCredentials),i||(H.onload=A(this._chunkLoaded,this),H.onerror=A(this._chunkError,this)),H.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,j=this._config.downloadRequestHeaders;for(k in j)H.setRequestHeader(k,j[k])}var R;this._config.chunkSize&&(R=this._start+this._config.chunkSize-1,H.setRequestHeader("Range","bytes="+this._start+"-"+R));try{H.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}i&&H.status===0&&this._chunkError()}},this._chunkLoaded=function(){H.readyState===4&&(H.status<200||400<=H.status?this._chunkError():(this._start+=this._config.chunkSize||H.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(H),this.parseChunk(H.responseText)))},this._chunkError=function(k){k=H.statusText||k,this._sendError(new Error(k))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),m.call(this,P);var H,k,j=typeof FileReader<"u";this.stream=function(R){this._input=R,k=R.slice||R.webkitSlice||R.mozSlice,j?((H=new FileReader).onload=A(this._chunkLoaded,this),H.onerror=A(this._chunkError,this)):H=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var R=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),R=k.call(R,this._start,F)),H.readAsText(R,this._config.encoding));j||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(R){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(R.target.result)},this._chunkError=function(){this._sendError(H.error)}}function y(P){var H;m.call(this,P=P||{}),this.stream=function(k){return H=k,this._nextChunk()},this._nextChunk=function(){var k,j;if(!this._finished)return k=this._config.chunkSize,H=k?(j=H.substring(0,k),H.substring(k)):(j=H,""),this._finished=!H,this.parseChunk(j)}}function B(P){m.call(this,P=P||{});var H=[],k=!0,j=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(R){this._input=R,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){j&&H.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),H.length?this.parseChunk(H.shift()):k=!0},this._streamData=A(function(R){try{H.push(typeof R=="string"?R:R.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(H.shift()))}catch(F){this._streamError(F)}},this),this._streamError=A(function(R){this._streamCleanUp(),this._sendError(R)},this),this._streamEnd=A(function(){this._streamCleanUp(),j=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var H,k,j,R,F=Math.pow(2,53),V=-F,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,$=0,K=0,ne=!1,T=!1,L=[],Z={data:[],errors:[],meta:{}};function se(me){return P.skipEmptyLines==="greedy"?me.join("").trim()==="":me.length===1&&me[0].length===0}function he(){if(Z&&j&&(Be("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),j=!1),P.skipEmptyLines&&(Z.data=Z.data.filter(function(J){return!se(J)})),Ie()){let J=function(ve,fe){N(P.transformHeader)&&(ve=P.transformHeader(ve,fe)),L.push(ve)};var ie=J;if(Z)if(Array.isArray(Z.data[0])){for(var me=0;Ie()&&me<Z.data.length;me++)Z.data[me].forEach(J);Z.data.splice(0,1)}else Z.data.forEach(J)}function ae(J,ve){for(var fe=P.header?{}:[],ye=0;ye<J.length;ye++){var ge=ye,xe=J[ye],xe=((je,Fe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(je)?Fe==="true"||Fe==="TRUE"||Fe!=="false"&&Fe!=="FALSE"&&((Ke=>{if(G.test(Ke)&&(Ke=parseFloat(Ke),V<Ke&&Ke<F))return 1})(Fe)?parseFloat(Fe):Y.test(Fe)?new Date(Fe):Fe===""?null:Fe):Fe)(ge=P.header?ye>=L.length?"__parsed_extra":L[ye]:ge,xe=P.transform?P.transform(xe,ge):xe);ge==="__parsed_extra"?(fe[ge]=fe[ge]||[],fe[ge].push(xe)):fe[ge]=xe}return P.header&&(ye>L.length?Be("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+ye,K+ve):ye<L.length&&Be("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+ye,K+ve)),fe}var re;Z&&(P.header||P.dynamicTyping||P.transform)&&(re=1,!Z.data.length||Array.isArray(Z.data[0])?(Z.data=Z.data.map(ae),re=Z.data.length):Z.data=ae(Z.data,0),P.header&&Z.meta&&(Z.meta.fields=L),K+=re)}function Ie(){return P.header&&L.length===0}function Be(me,ae,re,ie){me={type:me,code:ae,message:re},ie!==void 0&&(me.row=ie),Z.errors.push(me)}N(P.step)&&(R=P.step,P.step=function(me){Z=me,Ie()?he():(he(),Z.data.length!==0&&($+=me.data.length,P.preview&&$>P.preview?k.abort():(Z.data=Z.data[0],R(Z,Q))))}),this.parse=function(me,ae,re){var ie=P.quoteChar||'"',ie=(P.newline||(P.newline=this.guessLineEndings(me,ie)),j=!1,P.delimiter?N(P.delimiter)&&(P.delimiter=P.delimiter(me),Z.meta.delimiter=P.delimiter):((ie=((J,ve,fe,ye,ge)=>{var xe,je,Fe,Ke;ge=ge||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var xn=0;xn<ge.length;xn++){for(var gn,Ht=ge[xn],yn=0,Qn=0,wn=0,Dn=(Fe=void 0,new W({comments:ye,delimiter:Ht,newline:ve,preview:10}).parse(J)),ct=0;ct<Dn.data.length;ct++)fe&&se(Dn.data[ct])?wn++:(gn=Dn.data[ct].length,Qn+=gn,Fe===void 0?Fe=gn:0<gn&&(yn+=Math.abs(gn-Fe),Fe=gn));0<Dn.data.length&&(Qn/=Dn.data.length-wn),(je===void 0||yn<=je)&&(Ke===void 0||Ke<Qn)&&1.99<Qn&&(je=yn,xe=Ht,Ke=Qn)}return{successful:!!(P.delimiter=xe),bestDelimiter:xe}})(me,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=ie.bestDelimiter:(j=!0,P.delimiter=f.DefaultDelimiter),Z.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&ie.preview++,H=me,k=new W(ie),Z=k.parse(H,ae,re),he(),ne?{meta:{paused:!0}}:Z||{meta:{paused:!1}}},this.paused=function(){return ne},this.pause=function(){ne=!0,k.abort(),H=N(P.chunk)?"":H.substring(k.getCharIndex())},this.resume=function(){Q.streamer._halted?(ne=!1,Q.streamer.parseChunk(H,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,k.abort(),Z.meta.aborted=!0,N(P.complete)&&P.complete(Z),H=""},this.guessLineEndings=function(J,ie){J=J.substring(0,1048576);var ie=new RegExp(b(ie)+"([^]*?)"+b(ie),"gm"),re=(J=J.replace(ie,"")).split("\r"),ie=J.split(`
`),J=1<ie.length&&ie[0].length<re[0].length;if(re.length===1||J)return`
`;for(var ve=0,fe=0;fe<re.length;fe++)re[fe][0]===`
`&&ve++;return ve>=re.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function W(P){var H=(P=P||{}).delimiter,k=P.newline,j=P.comments,R=P.step,F=P.preview,V=P.fastMode,G=null,Y=!1,Q=P.quoteChar==null?'"':P.quoteChar,$=Q;if(P.escapeChar!==void 0&&($=P.escapeChar),(typeof H!="string"||-1<f.BAD_DELIMITERS.indexOf(H))&&(H=","),j===H)throw new Error("Comment character same as delimiter");j===!0?j="#":(typeof j!="string"||-1<f.BAD_DELIMITERS.indexOf(j))&&(j=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var K=0,ne=!1;this.parse=function(T,L,Z){if(typeof T!="string")throw new Error("Input must be a string");var se=T.length,he=H.length,Ie=k.length,Be=j.length,me=N(R),ae=[],re=[],ie=[],J=K=0;if(!T)return yn();if(V||V!==!1&&T.indexOf(Q)===-1){for(var ve=T.split(k),fe=0;fe<ve.length;fe++){if(ie=ve[fe],K+=ie.length,fe!==ve.length-1)K+=k.length;else if(Z)return yn();if(!j||ie.substring(0,Be)!==j){if(me){if(ae=[],Ke(ie.split(H)),Qn(),ne)return yn()}else Ke(ie.split(H));if(F&&F<=fe)return ae=ae.slice(0,F),yn(!0)}}return yn()}for(var ye=T.indexOf(H,K),ge=T.indexOf(k,K),xe=new RegExp(b($)+b(Q),"g"),je=T.indexOf(Q,K);;)if(T[K]===Q)for(je=K,K++;;){if((je=T.indexOf(Q,je+1))===-1)return Z||re.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ae.length,index:K}),gn();if(je===se-1)return gn(T.substring(K,je).replace(xe,Q));if(Q===$&&T[je+1]===$)je++;else if(Q===$||je===0||T[je-1]!==$){ye!==-1&&ye<je+1&&(ye=T.indexOf(H,je+1));var Fe=xn((ge=ge!==-1&&ge<je+1?T.indexOf(k,je+1):ge)===-1?ye:Math.min(ye,ge));if(T.substr(je+1+Fe,he)===H){ie.push(T.substring(K,je).replace(xe,Q)),T[K=je+1+Fe+he]!==Q&&(je=T.indexOf(Q,K)),ye=T.indexOf(H,K),ge=T.indexOf(k,K);break}if(Fe=xn(ge),T.substring(je+1+Fe,je+1+Fe+Ie)===k){if(ie.push(T.substring(K,je).replace(xe,Q)),Ht(je+1+Fe+Ie),ye=T.indexOf(H,K),je=T.indexOf(Q,K),me&&(Qn(),ne))return yn();if(F&&ae.length>=F)return yn(!0);break}re.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ae.length,index:K}),je++}}else if(j&&ie.length===0&&T.substring(K,K+Be)===j){if(ge===-1)return yn();K=ge+Ie,ge=T.indexOf(k,K),ye=T.indexOf(H,K)}else if(ye!==-1&&(ye<ge||ge===-1))ie.push(T.substring(K,ye)),K=ye+he,ye=T.indexOf(H,K);else{if(ge===-1)break;if(ie.push(T.substring(K,ge)),Ht(ge+Ie),me&&(Qn(),ne))return yn();if(F&&ae.length>=F)return yn(!0)}return gn();function Ke(wn){ae.push(wn),J=K}function xn(wn){var Dn=0;return Dn=wn!==-1&&(wn=T.substring(je+1,wn))&&wn.trim()===""?wn.length:Dn}function gn(wn){return Z||(wn===void 0&&(wn=T.substring(K)),ie.push(wn),K=se,Ke(ie),me&&Qn()),yn()}function Ht(wn){K=wn,Ke(ie),ie=[],ge=T.indexOf(k,K)}function yn(wn){if(P.header&&!L&&ae.length&&!Y){var Dn=ae[0],ct=Object.create(null),Mo=new Set(Dn);let na=!1;for(let Ct=0;Ct<Dn.length;Ct++){let Nt=Dn[Ct];if(ct[Nt=N(P.transformHeader)?P.transformHeader(Nt,Ct):Nt]){let ta,ru=ct[Nt];for(;ta=Nt+"_"+ru,ru++,Mo.has(ta););Mo.add(ta),Dn[Ct]=ta,ct[Nt]++,na=!0,(G=G===null?{}:G)[ta]=Nt}else ct[Nt]=1,Dn[Ct]=Nt;Mo.add(Nt)}na&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:ae,errors:re,meta:{delimiter:H,linebreak:k,aborted:ne,truncated:!!wn,cursor:J+(L||0),renamedHeaders:G}}}function Qn(){R(yn()),ae=[],re=[]}},this.abort=function(){ne=!0},this.getCharIndex=function(){return K}}function S(P){var H=P.data,k=s[H.workerId],j=!1;if(H.error)k.userError(H.error,H.file);else if(H.results&&H.results.data){var R={abort:function(){j=!0,M(H.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(k.userStep)){for(var F=0;F<H.results.data.length&&(k.userStep({data:H.results.data[F],errors:H.results.errors,meta:H.results.meta},R),!j);F++);delete H.results}else N(k.userChunk)&&(k.userChunk(H.results,R,H.file),delete H.results)}H.finished&&!j&&M(H.workerId,H.results)}function M(P,H){var k=s[P];N(k.userComplete)&&k.userComplete(H),k.terminate(),delete s[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var H,k=Array.isArray(P)?[]:{};for(H in P)k[H]=w(P[H]);return k}function A(P,H){return function(){P.apply(H,arguments)}}function N(P){return typeof P=="function"}return f.parse=function(P,H){var k=(H=H||{}).dynamicTyping||!1;if(N(k)&&(H.dynamicTypingFunction=k,k={}),H.dynamicTyping=k,H.transform=!!N(H.transform)&&H.transform,!H.worker||!f.WORKERS_SUPPORTED)return k=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(j=>j.charCodeAt(0)!==65279?j:j.slice(1))(P),k=new(H.download?d:y)(H)):P.readable===!0&&N(P.read)&&N(P.on)?k=new B(H):(r.File&&P instanceof File||P instanceof Object)&&(k=new v(H)),k.stream(P);(k=(()=>{var j;return!!f.WORKERS_SUPPORTED&&(j=(()=>{var R=r.URL||r.webkitURL||null,F=t.toString();return f.BLOB_URL||(f.BLOB_URL=R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(j=new r.Worker(j)).onmessage=S,j.id=c++,s[j.id]=j)})()).userStep=H.step,k.userChunk=H.chunk,k.userComplete=H.complete,k.userError=H.error,H.step=N(H.step),H.chunk=N(H.chunk),H.complete=N(H.complete),H.error=N(H.error),delete H.worker,k.postMessage({input:P,config:H,workerId:k.id})},f.unparse=function(P,H){var k=!1,j=!0,R=",",F=`\r
`,V='"',G=V+V,Y=!1,Q=null,$=!1,K=((()=>{if(typeof H=="object"){if(typeof H.delimiter!="string"||f.BAD_DELIMITERS.filter(function(L){return H.delimiter.indexOf(L)!==-1}).length||(R=H.delimiter),typeof H.quotes!="boolean"&&typeof H.quotes!="function"&&!Array.isArray(H.quotes)||(k=H.quotes),typeof H.skipEmptyLines!="boolean"&&typeof H.skipEmptyLines!="string"||(Y=H.skipEmptyLines),typeof H.newline=="string"&&(F=H.newline),typeof H.quoteChar=="string"&&(V=H.quoteChar),typeof H.header=="boolean"&&(j=H.header),Array.isArray(H.columns)){if(H.columns.length===0)throw new Error("Option columns is empty");Q=H.columns}H.escapeChar!==void 0&&(G=H.escapeChar+V),H.escapeFormulae instanceof RegExp?$=H.escapeFormulae:typeof H.escapeFormulae=="boolean"&&H.escapeFormulae&&($=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(V),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return ne(null,P,Y);if(typeof P[0]=="object")return ne(Q||Object.keys(P[0]),P,Y)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||Q),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),ne(P.fields||[],P.data||[],Y);throw new Error("Unable to serialize unrecognized input");function ne(L,Z,se){var he="",Ie=(typeof L=="string"&&(L=JSON.parse(L)),typeof Z=="string"&&(Z=JSON.parse(Z)),Array.isArray(L)&&0<L.length),Be=!Array.isArray(Z[0]);if(Ie&&j){for(var me=0;me<L.length;me++)0<me&&(he+=R),he+=T(L[me],me);0<Z.length&&(he+=F)}for(var ae=0;ae<Z.length;ae++){var re=(Ie?L:Z[ae]).length,ie=!1,J=Ie?Object.keys(Z[ae]).length===0:Z[ae].length===0;if(se&&!Ie&&(ie=se==="greedy"?Z[ae].join("").trim()==="":Z[ae].length===1&&Z[ae][0].length===0),se==="greedy"&&Ie){for(var ve=[],fe=0;fe<re;fe++){var ye=Be?L[fe]:fe;ve.push(Z[ae][ye])}ie=ve.join("").trim()===""}if(!ie){for(var ge=0;ge<re;ge++){0<ge&&!J&&(he+=R);var xe=Ie&&Be?L[ge]:ge;he+=T(Z[ae][xe],ge)}ae<Z.length-1&&(!se||0<re&&!J)&&(he+=F)}}return he}function T(L,Z){var se,he;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(he=!1,$&&typeof L=="string"&&$.test(L)&&(L="'"+L,he=!0),se=L.toString().replace(K,G),(he=he||k===!0||typeof k=="function"&&k(L,Z)||Array.isArray(k)&&k[Z]||((Ie,Be)=>{for(var me=0;me<Be.length;me++)if(-1<Ie.indexOf(Be[me]))return!0;return!1})(se,f.BAD_DELIMITERS)||-1<se.indexOf(R)||se.charAt(0)===" "||se.charAt(se.length-1)===" ")?V+se+V:se)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=W,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var H=P.config||{},k=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var V=0;V<this.files.length;V++)k.push({file:this.files[V],inputElem:this,instanceConfig:a.extend({},H)})}),j(),this;function j(){if(k.length===0)N(P.complete)&&P.complete();else{var F,V,G,Y,Q=k[0];if(N(P.before)){var $=P.before(Q.file,Q.inputElem);if(typeof $=="object"){if($.action==="abort")return F="AbortError",V=Q.file,G=Q.inputElem,Y=$.reason,void(N(P.error)&&P.error({name:F},V,G,Y));if($.action==="skip")return void R();typeof $.config=="object"&&(Q.instanceConfig=a.extend(Q.instanceConfig,$.config))}else if($==="skip")return void R()}var K=Q.instanceConfig.complete;Q.instanceConfig.complete=function(ne){N(K)&&K(ne,Q.file,Q.inputElem),R()},f.parse(Q.file,Q.instanceConfig)}}function R(){k.splice(0,1),j()}}),p&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(B.prototype=Object.create(m.prototype)).constructor=B,f})})(_l)),_l.exports}var IH=bH();const vI=Xe(IH);function gI(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function TW(...e){return n=>{let t=!1;const r=e.map(a=>{const i=gI(a,n);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():gI(e[a],null)}}}}function Hl(...e){return U.useCallback(TW(...e),e)}var dp=U.forwardRef((e,n)=>{const{children:t,...r}=e,a=U.Children.toArray(t),i=a.find(xH);if(i){const p=i.props.children,s=a.map(c=>c===i?U.Children.count(p)>1?U.Children.only(null):U.isValidElement(p)?p.props.children:null:c);return _.jsx(Sv,{...r,ref:n,children:U.isValidElement(p)?U.cloneElement(p,void 0,s):null})}return _.jsx(Sv,{...r,ref:n,children:t})});dp.displayName="Slot";var Sv=U.forwardRef((e,n)=>{const{children:t,...r}=e;if(U.isValidElement(t)){const a=PH(t),i=wH(r,t.props);return t.type!==U.Fragment&&(i.ref=n?TW(n,a):a),U.cloneElement(t,i)}return U.Children.count(t)>1?U.Children.only(null):null});Sv.displayName="SlotClone";var BH=({children:e})=>_.jsx(_.Fragment,{children:e});function xH(e){return U.isValidElement(e)&&e.type===BH}function wH(e,n){const t={...n};for(const r in n){const a=e[r],i=n[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...s)=>{i(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...i}:r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}function PH(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function jW(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=jW(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function De(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=jW(e))&&(r&&(r+=" "),r+=n);return r}const yI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,bI=De,WH=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return bI(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:i}=n,p=Object.keys(a).map(f=>{const m=t==null?void 0:t[f],d=i==null?void 0:i[f];if(m===null)return null;const v=yI(m)||yI(d);return a[f][v]}),s=t&&Object.entries(t).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),c=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...y}=m;return Object.entries(y).every(B=>{let[I,b]=B;return Array.isArray(b)?b.includes({...i,...s}[I]):{...i,...s}[I]===b})?[...f,d,v]:f},[]);return bI(e,p,c,t==null?void 0:t.class,t==null?void 0:t.className)},ly="-",SH=e=>{const n=AH(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:p=>{const s=p.split(ly);return s[0]===""&&s.length!==1&&s.shift(),DW(s,n)||MH(p)},getConflictingClassGroupIds:(p,s)=>{const c=t[p]||[];return s&&r[p]?[...c,...r[p]]:c}}},DW=(e,n)=>{var p;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),a=r?DW(e.slice(1),r):void 0;if(a)return a;if(n.validators.length===0)return;const i=e.join(ly);return(p=n.validators.find(({validator:s})=>s(i)))==null?void 0:p.classGroupId},II=/^\[(.+)\]$/,MH=e=>{if(II.test(e)){const n=II.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},AH=e=>{const{theme:n,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const a in t)Mv(t[a],r,a,n);return r},Mv=(e,n,t,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?n:BI(n,a);i.classGroupId=t;return}if(typeof a=="function"){if(_H(a)){Mv(a(r),n,t,r);return}n.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([i,p])=>{Mv(p,BI(n,i),t,r)})})},BI=(e,n)=>{let t=e;return n.split(ly).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},_H=e=>e.isThemeGetter,OH=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const a=(i,p)=>{t.set(i,p),n++,n>e&&(n=0,r=t,t=new Map)};return{get(i){let p=t.get(i);if(p!==void 0)return p;if((p=r.get(i))!==void 0)return a(i,p),p},set(i,p){t.has(i)?t.set(i,p):a(i,p)}}},Av="!",_v=":",HH=_v.length,CH=e=>{const{prefix:n,experimentalParseClassName:t}=e;let r=a=>{const i=[];let p=0,s=0,c=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(p===0&&s===0){if(I===_v){i.push(a.slice(c,B)),c=B+HH;continue}if(I==="/"){f=B;continue}}I==="["?p++:I==="]"?p--:I==="("?s++:I===")"&&s--}const m=i.length===0?a:a.substring(c),d=NH(m),v=d!==m,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(n){const a=n+_v,i=r;r=p=>p.startsWith(a)?i(p.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:p,maybePostfixModifierPosition:void 0}}if(t){const a=r;r=i=>t({className:i,parseClassName:a})}return r},NH=e=>e.endsWith(Av)?e.substring(0,e.length-1):e.startsWith(Av)?e.substring(1):e,RH=e=>{const n=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(p=>{p[0]==="["||n[p]?(a.push(...i.sort(),p),i=[]):i.push(p)}),a.push(...i.sort()),a}},kH=e=>({cache:OH(e.cacheSize),parseClassName:CH(e),sortModifiers:RH(e),...SH(e)}),EH=/\s+/,TH=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=n,p=[],s=e.trim().split(EH);let c="";for(let f=s.length-1;f>=0;f-=1){const m=s[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:B,maybePostfixModifierPosition:I}=t(m);if(d){c=m+(c.length>0?" "+c:c);continue}let b=!!I,W=r(b?B.substring(0,I):B);if(!W){if(!b){c=m+(c.length>0?" "+c:c);continue}if(W=r(B),!W){c=m+(c.length>0?" "+c:c);continue}b=!1}const S=i(v).join(":"),M=y?S+Av:S,O=M+W;if(p.includes(O))continue;p.push(O);const w=a(W,b);for(let A=0;A<w.length;++A){const N=w[A];p.push(M+N)}c=m+(c.length>0?" "+c:c)}return c};function jH(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=$W(n))&&(r&&(r+=" "),r+=t);return r}const $W=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=$W(e[r]))&&(t&&(t+=" "),t+=n);return t};function DH(e,...n){let t,r,a,i=p;function p(c){const f=n.reduce((m,d)=>d(m),e());return t=kH(f),r=t.cache.get,a=t.cache.set,i=s,s(c)}function s(c){const f=r(c);if(f)return f;const m=TH(c,t);return a(c,m),m}return function(){return i(jH.apply(null,arguments))}}const kn=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},LW=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,FW=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$H=/^\d+\/\d+$/,LH=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,FH=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qH=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,zH=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,UH=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zo=e=>$H.test(e),Le=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),If=e=>e.endsWith("%")&&Le(e.slice(0,-1)),Er=e=>LH.test(e),VH=()=>!0,GH=e=>FH.test(e)&&!qH.test(e),qW=()=>!1,KH=e=>zH.test(e),QH=e=>UH.test(e),YH=e=>!Me(e)&&!Ae(e),XH=e=>zi(e,VW,qW),Me=e=>LW.test(e),to=e=>zi(e,GW,GH),Bf=e=>zi(e,tC,Le),xI=e=>zi(e,zW,qW),ZH=e=>zi(e,UW,QH),dl=e=>zi(e,KW,KH),Ae=e=>FW.test(e),Lu=e=>Ui(e,GW),JH=e=>Ui(e,rC),wI=e=>Ui(e,zW),eC=e=>Ui(e,VW),nC=e=>Ui(e,UW),ml=e=>Ui(e,KW,!0),zi=(e,n,t)=>{const r=LW.exec(e);return r?r[1]?n(r[1]):t(r[2]):!1},Ui=(e,n,t=!1)=>{const r=FW.exec(e);return r?r[1]?n(r[1]):t:!1},zW=e=>e==="position"||e==="percentage",UW=e=>e==="image"||e==="url",VW=e=>e==="length"||e==="size"||e==="bg-size",GW=e=>e==="length",tC=e=>e==="number",rC=e=>e==="family-name",KW=e=>e==="shadow",aC=()=>{const e=kn("color"),n=kn("font"),t=kn("text"),r=kn("font-weight"),a=kn("tracking"),i=kn("leading"),p=kn("breakpoint"),s=kn("container"),c=kn("spacing"),f=kn("radius"),m=kn("shadow"),d=kn("inset-shadow"),v=kn("text-shadow"),y=kn("drop-shadow"),B=kn("blur"),I=kn("perspective"),b=kn("aspect"),W=kn("ease"),S=kn("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),Ae,Me],A=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],P=()=>[Ae,Me,c],H=()=>[Zo,"full","auto",...P()],k=()=>[xa,"none","subgrid",Ae,Me],j=()=>["auto",{span:["full",xa,Ae,Me]},xa,Ae,Me],R=()=>[xa,"auto",Ae,Me],F=()=>["auto","min","max","fr",Ae,Me],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...P()],Q=()=>[Zo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],$=()=>[e,Ae,Me],K=()=>[...O(),wI,xI,{position:[Ae,Me]}],ne=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",eC,XH,{size:[Ae,Me]}],L=()=>[If,Lu,to],Z=()=>["","none","full",f,Ae,Me],se=()=>["",Le,Lu,to],he=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Be=()=>[Le,If,wI,xI],me=()=>["","none",B,Ae,Me],ae=()=>["none",Le,Ae,Me],re=()=>["none",Le,Ae,Me],ie=()=>[Le,Ae,Me],J=()=>[Zo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Er],breakpoint:[Er],color:[VH],container:[Er],"drop-shadow":[Er],ease:["in","out","in-out"],font:[YH],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Er],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Er],shadow:[Er],spacing:["px",Le],text:[Er],"text-shadow":[Er],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Zo,Me,Ae,b]}],container:["container"],columns:[{columns:[Le,Me,Ae,s]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{start:H()}],end:[{end:H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",Ae,Me]}],basis:[{basis:[Zo,"full","auto",s,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Le,Zo,"auto","initial","none",Me]}],grow:[{grow:["",Le,Ae,Me]}],shrink:[{shrink:["",Le,Ae,Me]}],order:[{order:[xa,"first","last","none",Ae,Me]}],"grid-cols":[{"grid-cols":k()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":k()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":F()}],"auto-rows":[{"auto-rows":F()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[s,"screen",...Q()]}],"min-w":[{"min-w":[s,"screen","none",...Q()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[p]},...Q()]}],h:[{h:["screen",...Q()]}],"min-h":[{"min-h":["screen","none",...Q()]}],"max-h":[{"max-h":["screen",...Q()]}],"font-size":[{text:["base",t,Lu,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Ae,Bf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",If,Me]}],"font-family":[{font:[JH,Me,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,Ae,Me]}],"line-clamp":[{"line-clamp":[Le,"none",Ae,Bf]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",Ae,Me]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ae,Me]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[Le,"from-font","auto",Ae,to]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[Le,"auto",Ae,Me]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ae,Me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ae,Me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,Ae,Me],radial:["",Ae,Me],conic:[xa,Ae,Me]},nC,ZH]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:L()}],"gradient-via-pos":[{via:L()}],"gradient-to-pos":[{to:L()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:se()}],"border-w-x":[{"border-x":se()}],"border-w-y":[{"border-y":se()}],"border-w-s":[{"border-s":se()}],"border-w-e":[{"border-e":se()}],"border-w-t":[{"border-t":se()}],"border-w-r":[{"border-r":se()}],"border-w-b":[{"border-b":se()}],"border-w-l":[{"border-l":se()}],"divide-x":[{"divide-x":se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Le,Ae,Me]}],"outline-w":[{outline:["",Le,Lu,to]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",m,ml,dl]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",d,ml,dl]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[Le,to]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":se()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",v,ml,dl]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[Le,Ae,Me]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Le]}],"mask-image-linear-from-pos":[{"mask-linear-from":Be()}],"mask-image-linear-to-pos":[{"mask-linear-to":Be()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":Be()}],"mask-image-t-to-pos":[{"mask-t-to":Be()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":Be()}],"mask-image-r-to-pos":[{"mask-r-to":Be()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":Be()}],"mask-image-b-to-pos":[{"mask-b-to":Be()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":Be()}],"mask-image-l-to-pos":[{"mask-l-to":Be()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":Be()}],"mask-image-x-to-pos":[{"mask-x-to":Be()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":Be()}],"mask-image-y-to-pos":[{"mask-y-to":Be()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[Ae,Me]}],"mask-image-radial-from-pos":[{"mask-radial-from":Be()}],"mask-image-radial-to-pos":[{"mask-radial-to":Be()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[Le]}],"mask-image-conic-from-pos":[{"mask-conic-from":Be()}],"mask-image-conic-to-pos":[{"mask-conic-to":Be()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ae,Me]}],filter:[{filter:["","none",Ae,Me]}],blur:[{blur:me()}],brightness:[{brightness:[Le,Ae,Me]}],contrast:[{contrast:[Le,Ae,Me]}],"drop-shadow":[{"drop-shadow":["","none",y,ml,dl]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",Le,Ae,Me]}],"hue-rotate":[{"hue-rotate":[Le,Ae,Me]}],invert:[{invert:["",Le,Ae,Me]}],saturate:[{saturate:[Le,Ae,Me]}],sepia:[{sepia:["",Le,Ae,Me]}],"backdrop-filter":[{"backdrop-filter":["","none",Ae,Me]}],"backdrop-blur":[{"backdrop-blur":me()}],"backdrop-brightness":[{"backdrop-brightness":[Le,Ae,Me]}],"backdrop-contrast":[{"backdrop-contrast":[Le,Ae,Me]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Le,Ae,Me]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Le,Ae,Me]}],"backdrop-invert":[{"backdrop-invert":["",Le,Ae,Me]}],"backdrop-opacity":[{"backdrop-opacity":[Le,Ae,Me]}],"backdrop-saturate":[{"backdrop-saturate":[Le,Ae,Me]}],"backdrop-sepia":[{"backdrop-sepia":["",Le,Ae,Me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ae,Me]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Le,"initial",Ae,Me]}],ease:[{ease:["linear","initial",W,Ae,Me]}],delay:[{delay:[Le,Ae,Me]}],animate:[{animate:["none",S,Ae,Me]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,Ae,Me]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ae()}],"rotate-x":[{"rotate-x":ae()}],"rotate-y":[{"rotate-y":ae()}],"rotate-z":[{"rotate-z":ae()}],scale:[{scale:re()}],"scale-x":[{"scale-x":re()}],"scale-y":[{"scale-y":re()}],"scale-z":[{"scale-z":re()}],"scale-3d":["scale-3d"],skew:[{skew:ie()}],"skew-x":[{"skew-x":ie()}],"skew-y":[{"skew-y":ie()}],transform:[{transform:[Ae,Me,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:J()}],"translate-x":[{"translate-x":J()}],"translate-y":[{"translate-y":J()}],"translate-z":[{"translate-z":J()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ae,Me]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ae,Me]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[Le,Lu,to,Bf]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},oC=DH(aC);function st(...e){return oC(De(e))}const iC=WH("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Fu({className:e,variant:n,size:t,asChild:r=!1,...a}){const i=r?dp:"button";return _.jsx(i,{"data-slot":"button",className:st(iC({variant:n,size:t,className:e})),...a})}function Ut({className:e,...n}){return _.jsx("div",{"data-slot":"card",className:st("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...n})}function D0({className:e,...n}){return _.jsx("div",{"data-slot":"card-header",className:st("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...n})}function $0({className:e,...n}){return _.jsx("h4",{"data-slot":"card-title",className:st("leading-none",e),...n})}function Vt({className:e,...n}){return _.jsx("div",{"data-slot":"card-content",className:st("px-6 [&:last-child]:pb-6",e),...n})}function zr(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}function cy(e,n=[]){let t=[];function r(i,p){const s=U.createContext(p),c=t.length;t=[...t,p];const f=d=>{var W;const{scope:v,children:y,...B}=d,I=((W=v==null?void 0:v[e])==null?void 0:W[c])||s,b=U.useMemo(()=>B,Object.values(B));return _.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function m(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||s,B=U.useContext(y);if(B)return B;if(p!==void 0)return p;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=t.map(p=>U.createContext(p));return function(s){const c=(s==null?void 0:s[e])||i;return U.useMemo(()=>({[`__scope${e}`]:{...s,[e]:c}}),[s,c])}};return a.scopeName=e,[r,uC(a,...n)]}function uC(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const p=r.reduce((s,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...s,...d}},{});return U.useMemo(()=>({[`__scope${n.scopeName}`]:p}),[p])}};return t.scopeName=n.scopeName,t}function pC(e){const n=e+"CollectionProvider",[t,r]=cy(n),[a,i]=t(n,{collectionRef:{current:null},itemMap:new Map}),p=y=>{const{scope:B,children:I}=y,b=E.useRef(null),W=E.useRef(new Map).current;return _.jsx(a,{scope:B,itemMap:W,collectionRef:b,children:I})};p.displayName=n;const s=e+"CollectionSlot",c=E.forwardRef((y,B)=>{const{scope:I,children:b}=y,W=i(s,I),S=Hl(B,W.collectionRef);return _.jsx(dp,{ref:S,children:b})});c.displayName=s;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=E.forwardRef((y,B)=>{const{scope:I,children:b,...W}=y,S=E.useRef(null),M=Hl(B,S),O=i(f,I);return E.useEffect(()=>(O.itemMap.set(S,{ref:S,...W}),()=>void O.itemMap.delete(S))),_.jsx(dp,{[m]:"",ref:M,children:b})});d.displayName=f;function v(y){const B=i(e+"CollectionConsumer",y);return E.useCallback(()=>{const b=B.collectionRef.current;if(!b)return[];const W=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(B.itemMap.values()).sort((O,w)=>W.indexOf(O.ref.current)-W.indexOf(w.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:p,Slot:c,ItemSlot:d},v,r]}var Ov=globalThis!=null&&globalThis.document?U.useLayoutEffect:()=>{},sC=gH.useId||(()=>{}),lC=0;function QW(e){const[n,t]=U.useState(sC());return Ov(()=>{t(r=>r??String(lC++))},[e]),e||(n?`radix-${n}`:"")}EW();var cC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Vi=cC.reduce((e,n)=>{const t=U.forwardRef((r,a)=>{const{asChild:i,...p}=r,s=i?dp:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(s,{...p,ref:a})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function fy(e){const n=U.useRef(e);return U.useEffect(()=>{n.current=e}),U.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function YW({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,a]=fC({defaultProp:n,onChange:t}),i=e!==void 0,p=i?e:r,s=fy(t),c=U.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&s(d)}else a(f)},[i,e,a,s]);return[p,c]}function fC({defaultProp:e,onChange:n}){const t=U.useState(e),[r]=t,a=U.useRef(r),i=fy(n);return U.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),t}var dC=U.createContext(void 0);function XW(e){const n=U.useContext(dC);return e||n||"ltr"}var xf="rovingFocusGroup.onEntryFocus",mC={bubbles:!1,cancelable:!0},L0="RovingFocusGroup",[Hv,ZW,hC]=pC(L0),[vC,JW]=cy(L0,[hC]),[gC,yC]=vC(L0),e3=U.forwardRef((e,n)=>_.jsx(Hv.Provider,{scope:e.__scopeRovingFocusGroup,children:_.jsx(Hv.Slot,{scope:e.__scopeRovingFocusGroup,children:_.jsx(bC,{...e,ref:n})})}));e3.displayName=L0;var bC=U.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:a=!1,dir:i,currentTabStopId:p,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=U.useRef(null),y=Hl(n,v),B=XW(i),[I=null,b]=YW({prop:p,defaultProp:s,onChange:c}),[W,S]=U.useState(!1),M=fy(f),O=ZW(t),w=U.useRef(!1),[A,N]=U.useState(0);return U.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(xf,M),()=>P.removeEventListener(xf,M)},[M]),_.jsx(gC,{scope:t,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:U.useCallback(P=>b(P),[b]),onItemShiftTab:U.useCallback(()=>S(!0),[]),onFocusableItemAdd:U.useCallback(()=>N(P=>P+1),[]),onFocusableItemRemove:U.useCallback(()=>N(P=>P-1),[]),children:_.jsx(Vi.div,{tabIndex:W||A===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const H=!w.current;if(P.target===P.currentTarget&&H&&!W){const k=new CustomEvent(xf,mC);if(P.currentTarget.dispatchEvent(k),!k.defaultPrevented){const j=O().filter(Y=>Y.focusable),R=j.find(Y=>Y.active),F=j.find(Y=>Y.id===I),G=[R,F,...j].filter(Boolean).map(Y=>Y.ref.current);r3(G,m)}}w.current=!1}),onBlur:zr(e.onBlur,()=>S(!1))})})}),n3="RovingFocusGroupItem",t3=U.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:a=!1,tabStopId:i,...p}=e,s=QW(),c=i||s,f=yC(n3,t),m=f.currentTabStopId===c,d=ZW(t),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return U.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),_.jsx(Hv.ItemSlot,{scope:t,id:c,focusable:r,active:a,children:_.jsx(Vi.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...p,ref:n,onMouseDown:zr(e.onMouseDown,B=>{r?f.onItemFocus(c):B.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=xC(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let W=d().filter(S=>S.focusable).map(S=>S.ref.current);if(I==="last")W.reverse();else if(I==="prev"||I==="next"){I==="prev"&&W.reverse();const S=W.indexOf(B.currentTarget);W=f.loop?wC(W,S+1):W.slice(S+1)}setTimeout(()=>r3(W))}})})})});t3.displayName=n3;var IC={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function BC(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function xC(e,n,t){const r=BC(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return IC[r]}function r3(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function wC(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var PC=e3,WC=t3;function SC(e,n){return U.useReducer((t,r)=>n[t][r]??t,e)}var a3=e=>{const{present:n,children:t}=e,r=MC(n),a=typeof t=="function"?t({present:r.isPresent}):U.Children.only(t),i=Hl(r.ref,AC(a));return typeof t=="function"||r.isPresent?U.cloneElement(a,{ref:i}):null};a3.displayName="Presence";function MC(e){const[n,t]=U.useState(),r=U.useRef({}),a=U.useRef(e),i=U.useRef("none"),p=e?"mounted":"unmounted",[s,c]=SC(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return U.useEffect(()=>{const f=hl(r.current);i.current=s==="mounted"?f:"none"},[s]),Ov(()=>{const f=r.current,m=a.current;if(m!==e){const v=i.current,y=hl(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(m&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),Ov(()=>{if(n){let f;const m=n.ownerDocument.defaultView??window,d=y=>{const I=hl(r.current).includes(y.animationName);if(y.target===n&&I&&(c("ANIMATION_END"),!a.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",f=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},v=y=>{y.target===n&&(i.current=hl(r.current))};return n.addEventListener("animationstart",v),n.addEventListener("animationcancel",d),n.addEventListener("animationend",d),()=>{m.clearTimeout(f),n.removeEventListener("animationstart",v),n.removeEventListener("animationcancel",d),n.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:U.useCallback(f=>{f&&(r.current=getComputedStyle(f)),t(f)},[])}}function hl(e){return(e==null?void 0:e.animationName)||"none"}function AC(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var dy="Tabs",[_C]=cy(dy,[JW]),o3=JW(),[OC,my]=_C(dy),i3=U.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,onValueChange:a,defaultValue:i,orientation:p="horizontal",dir:s,activationMode:c="automatic",...f}=e,m=XW(s),[d,v]=YW({prop:r,onChange:a,defaultProp:i});return _.jsx(OC,{scope:t,baseId:QW(),value:d,onValueChange:v,orientation:p,dir:m,activationMode:c,children:_.jsx(Vi.div,{dir:m,"data-orientation":p,...f,ref:n})})});i3.displayName=dy;var u3="TabsList",p3=U.forwardRef((e,n)=>{const{__scopeTabs:t,loop:r=!0,...a}=e,i=my(u3,t),p=o3(t);return _.jsx(PC,{asChild:!0,...p,orientation:i.orientation,dir:i.dir,loop:r,children:_.jsx(Vi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:n})})});p3.displayName=u3;var s3="TabsTrigger",l3=U.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,disabled:a=!1,...i}=e,p=my(s3,t),s=o3(t),c=d3(p.baseId,r),f=m3(p.baseId,r),m=r===p.value;return _.jsx(WC,{asChild:!0,...s,focusable:!a,active:m,children:_.jsx(Vi.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:n,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?p.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&p.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=p.activationMode!=="manual";!m&&!a&&d&&p.onValueChange(r)})})})});l3.displayName=s3;var c3="TabsContent",f3=U.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,forceMount:a,children:i,...p}=e,s=my(c3,t),c=d3(s.baseId,r),f=m3(s.baseId,r),m=r===s.value,d=U.useRef(m);return U.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),_.jsx(a3,{present:a||m,children:({present:v})=>_.jsx(Vi.div,{"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...p,ref:n,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});f3.displayName=c3;function d3(e,n){return`${e}-trigger-${n}`}function m3(e,n){return`${e}-content-${n}`}var HC=i3,CC=p3,NC=l3,RC=f3;function kC({className:e,...n}){return _.jsx(HC,{"data-slot":"tabs",className:st("flex flex-col gap-2",e),...n})}function EC({className:e,...n}){return _.jsx(CC,{"data-slot":"tabs-list",className:st("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...n})}function PI({className:e,...n}){return _.jsx(NC,{"data-slot":"tabs-trigger",className:st("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n})}function WI({className:e,...n}){return _.jsx(RC,{"data-slot":"tabs-content",className:st("flex-1 outline-none",e),...n})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jC=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,r)=>r?r.toUpperCase():t.toLowerCase()),SI=e=>{const n=jC(e);return n.charAt(0).toUpperCase()+n.slice(1)},h3=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=U.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:p,...s},c)=>U.createElement("svg",{ref:c,...DC,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:h3("lucide",a),...s},[...p.map(([f,m])=>U.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(e,n)=>{const t=U.forwardRef(({className:r,...a},i)=>U.createElement($C,{ref:i,iconNode:n,className:h3(`lucide-${TC(SI(e))}`,`lucide-${e}`,r),...a}));return t.displayName=SI(e),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],FC=lt("arrow-up-down",LC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],zC=lt("bot",qC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],VC=lt("chevron-down",UC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],MI=lt("chevron-left",GC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Cv=lt("chevron-right",KC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],YC=lt("circle-plus",QC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ZC=lt("download",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],eN=lt("eye-off",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],tN=lt("eye",nN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],aN=lt("lock",rN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],iN=lt("trash-2",oN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],pN=lt("trending-up",uN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],lN=lt("triangle-alert",sN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],fN=lt("users",cN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],AI=lt("x",dN);function Cn(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function Sn(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}function Cl(e,n){const t=Cn(e);return isNaN(n)?Sn(e,NaN):(n&&t.setDate(t.getDate()+n),t)}const v3=6048e5,mN=864e5,hN=6e4,vN=36e5,gN=1e3;let yN={};function Gi(){return yN}function Na(e,n){var s,c,f,m;const t=Gi(),r=(n==null?void 0:n.weekStartsOn)??((c=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Cn(e),i=a.getDay(),p=(i<r?7:0)+i-r;return a.setDate(a.getDate()-p),a.setHours(0,0,0,0),a}function mi(e){return Na(e,{weekStartsOn:1})}function g3(e){const n=Cn(e),t=n.getFullYear(),r=Sn(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const a=mi(r),i=Sn(e,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const p=mi(i);return n.getTime()>=a.getTime()?t+1:n.getTime()>=p.getTime()?t:t-1}function _I(e){const n=Cn(e);return n.setHours(0,0,0,0),n}function Nl(e){const n=Cn(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function bN(e,n){const t=_I(e),r=_I(n),a=+t-Nl(t),i=+r-Nl(r);return Math.round((a-i)/mN)}function IN(e){const n=g3(e),t=Sn(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),mi(t)}function BN(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function xN(e){if(!BN(e)&&typeof e!="number")return!1;const n=Cn(e);return!isNaN(Number(n))}function wN(e){const n=Cn(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function PN(e){const n=Cn(e);return n.setDate(1),n.setHours(0,0,0,0),n}function WN(e){const n=Cn(e),t=Sn(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const SN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},MN=(e,n,t)=>{let r;const a=SN[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function wf(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const AN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_N={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ON={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},HN={date:wf({formats:AN,defaultWidth:"full"}),time:wf({formats:_N,defaultWidth:"full"}),dateTime:wf({formats:ON,defaultWidth:"full"})},CN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},NN=(e,n,t,r)=>CN[e];function qu(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const p=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):p;a=e.formattingValues[s]||e.formattingValues[p]}else{const p=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[p]}const i=e.argumentCallback?e.argumentCallback(n):n;return a[i]}}const RN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},kN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},EN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},TN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},jN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},DN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$N=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},LN={ordinalNumber:$N,era:qu({values:RN,defaultWidth:"wide"}),quarter:qu({values:kN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qu({values:EN,defaultWidth:"wide"}),day:qu({values:TN,defaultWidth:"wide"}),dayPeriod:qu({values:jN,defaultWidth:"wide",formattingValues:DN,defaultFormattingWidth:"wide"})};function zu(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=n.match(a);if(!i)return null;const p=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?qN(s,d=>d.test(p)):FN(s,d=>d.test(p));let f;f=e.valueCallback?e.valueCallback(c):c,f=t.valueCallback?t.valueCallback(f):f;const m=n.slice(p.length);return{value:f,rest:m}}}function FN(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function qN(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function zN(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],i=n.match(e.parsePattern);if(!i)return null;let p=e.valueCallback?e.valueCallback(i[0]):i[0];p=t.valueCallback?t.valueCallback(p):p;const s=n.slice(a.length);return{value:p,rest:s}}}const UN=/^(\d+)(th|st|nd|rd)?/i,VN=/\d+/i,GN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},KN={any:[/^b/i,/^(a|c)/i]},QN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},YN={any:[/1/i,/2/i,/3/i,/4/i]},XN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ZN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},JN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},eR={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nR={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},tR={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rR={ordinalNumber:zN({matchPattern:UN,parsePattern:VN,valueCallback:e=>parseInt(e,10)}),era:zu({matchPatterns:GN,defaultMatchWidth:"wide",parsePatterns:KN,defaultParseWidth:"any"}),quarter:zu({matchPatterns:QN,defaultMatchWidth:"wide",parsePatterns:YN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:zu({matchPatterns:XN,defaultMatchWidth:"wide",parsePatterns:ZN,defaultParseWidth:"any"}),day:zu({matchPatterns:JN,defaultMatchWidth:"wide",parsePatterns:eR,defaultParseWidth:"any"}),dayPeriod:zu({matchPatterns:nR,defaultMatchWidth:"any",parsePatterns:tR,defaultParseWidth:"any"})},y3={code:"en-US",formatDistance:MN,formatLong:HN,formatRelative:NN,localize:LN,match:rR,options:{weekStartsOn:0,firstWeekContainsDate:1}};function aR(e){const n=Cn(e);return bN(n,WN(n))+1}function b3(e){const n=Cn(e),t=+mi(n)-+IN(n);return Math.round(t/v3)+1}function hy(e,n){var m,d,v,y;const t=Cn(e),r=t.getFullYear(),a=Gi(),i=(n==null?void 0:n.firstWeekContainsDate)??((d=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,p=Sn(e,0);p.setFullYear(r+1,0,i),p.setHours(0,0,0,0);const s=Na(p,n),c=Sn(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,n);return t.getTime()>=s.getTime()?r+1:t.getTime()>=f.getTime()?r:r-1}function oR(e,n){var s,c,f,m;const t=Gi(),r=(n==null?void 0:n.firstWeekContainsDate)??((c=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=hy(e,n),i=Sn(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,n)}function I3(e,n){const t=Cn(e),r=+Na(t,n)-+oR(t,n);return Math.round(r/v3)+1}function Je(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const wa={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return Je(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):Je(t+1,2)},d(e,n){return Je(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return Je(e.getHours()%12||12,n.length)},H(e,n){return Je(e.getHours(),n.length)},m(e,n){return Je(e.getMinutes(),n.length)},s(e,n){return Je(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return Je(a,n.length)}},Jo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},OI={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return wa.y(e,n)},Y:function(e,n,t,r){const a=hy(e,r),i=a>0?a:1-a;if(n==="YY"){const p=i%100;return Je(p,2)}return n==="Yo"?t.ordinalNumber(i,{unit:"year"}):Je(i,n.length)},R:function(e,n){const t=g3(e);return Je(t,n.length)},u:function(e,n){const t=e.getFullYear();return Je(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Je(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return wa.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const a=I3(e,r);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):Je(a,n.length)},I:function(e,n,t){const r=b3(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):Je(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,n)},D:function(e,n,t){const r=aR(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return Je(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return Je(i,n.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return Je(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let a;switch(r===12?a=Jo.noon:r===0?a=Jo.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let a;switch(r>=17?a=Jo.evening:r>=12?a=Jo.afternoon:r>=4?a=Jo.morning:a=Jo.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return wa.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,n)},S:function(e,n){return wa.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return CI(r);case"XXXX":case"XX":return io(r);case"XXXXX":case"XXX":default:return io(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return CI(r);case"xxxx":case"xx":return io(r);case"xxxxx":case"xxx":default:return io(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+HI(r,":");case"OOOO":default:return"GMT"+io(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+HI(r,":");case"zzzz":default:return"GMT"+io(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return Je(r,n.length)},T:function(e,n,t){const r=e.getTime();return Je(r,n.length)}};function HI(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?t+String(a):t+String(a)+n+Je(i,2)}function CI(e,n){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):io(e,n)}function io(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return t+a+n+i}const NI=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},B3=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},iR=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return NI(e,n);let i;switch(r){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",NI(r,n)).replace("{{time}}",B3(a,n))},Nv={p:B3,P:iR},uR=/^D+$/,pR=/^Y+$/,sR=["D","DD","YY","YYYY"];function x3(e){return uR.test(e)}function w3(e){return pR.test(e)}function Rv(e,n,t){const r=lR(e,n,t);if(console.warn(r),sR.includes(e))throw new RangeError(r)}function lR(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dR=/^'([^]*?)'?$/,mR=/''/g,hR=/[a-zA-Z]/;function vR(e,n,t){var m,d,v,y;const r=Gi(),a=r.locale??y3,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,p=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,s=Cn(e);if(!xN(s))throw new RangeError("Invalid time value");let c=n.match(fR).map(B=>{const I=B[0];if(I==="p"||I==="P"){const b=Nv[I];return b(B,a.formatLong)}return B}).join("").match(cR).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:gR(B)};if(OI[I])return{isToken:!0,value:B};if(I.match(hR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const f={firstWeekContainsDate:i,weekStartsOn:p,locale:a};return c.map(B=>{if(!B.isToken)return B.value;const I=B.value;(w3(I)||x3(I))&&Rv(I,n,String(e));const b=OI[I[0]];return b(s,I,a.localize,f)}).join("")}function gR(e){const n=e.match(dR);return n?n[1].replace(mR,"'"):e}function yR(){return Object.assign({},Gi())}function bR(e){let t=Cn(e).getDay();return t===0&&(t=7),t}function IR(e,n){const t=n instanceof Date?Sn(n,0):new n(0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}const BR=10;class P3{constructor(){we(this,"subPriority",0)}validate(n,t){return!0}}class xR extends P3{constructor(n,t,r,a,i){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class wR extends P3{constructor(){super(...arguments);we(this,"priority",BR);we(this,"subPriority",-1)}set(t,r){return r.timestampIsSet?t:Sn(t,IR(t,Date))}}class Ge{run(n,t,r,a){const i=this.parse(n,t,r,a);return i?{setter:new xR(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(n,t,r){return!0}}class PR extends Ge{constructor(){super(...arguments);we(this,"priority",140);we(this,"incompatibleTokens",["R","u","t","T"])}parse(t,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"});case"GGGGG":return a.era(t,{width:"narrow"});case"GGGG":default:return a.era(t,{width:"wide"})||a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"})}}set(t,r,a){return r.era=a,t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}const Mn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function An(e,n){return e&&{value:n(e.value),rest:e.rest}}function vn(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function yr(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,p=t[5]?parseInt(t[5],10):0;return{value:r*(a*vN+i*hN+p*gN),rest:n.slice(t[0].length)}}function W3(e){return vn(Mn.anyDigitsSigned,e)}function Bn(e,n){switch(e){case 1:return vn(Mn.singleDigit,n);case 2:return vn(Mn.twoDigits,n);case 3:return vn(Mn.threeDigits,n);case 4:return vn(Mn.fourDigits,n);default:return vn(new RegExp("^\\d{1,"+e+"}"),n)}}function Rl(e,n){switch(e){case 1:return vn(Mn.singleDigitSigned,n);case 2:return vn(Mn.twoDigitsSigned,n);case 3:return vn(Mn.threeDigitsSigned,n);case 4:return vn(Mn.fourDigitsSigned,n);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),n)}}function vy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function S3(e,n){const t=n>0,r=t?n:1-n;let a;if(r<=50)a=e||100;else{const i=r+50,p=Math.trunc(i/100)*100,s=e>=i%100;a=e+p-(s?100:0)}return t?a:1-a}function M3(e){return e%400===0||e%4===0&&e%100!==0}class WR extends Ge{constructor(){super(...arguments);we(this,"priority",130);we(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,r,a){const i=p=>({year:p,isTwoDigitYear:r==="yy"});switch(r){case"y":return An(Bn(4,t),i);case"yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a){const i=t.getFullYear();if(a.isTwoDigitYear){const s=S3(a.year,i);return t.setFullYear(s,0,1),t.setHours(0,0,0,0),t}const p=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(p,0,1),t.setHours(0,0,0,0),t}}class SR extends Ge{constructor(){super(...arguments);we(this,"priority",130);we(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,r,a){const i=p=>({year:p,isTwoDigitYear:r==="YY"});switch(r){case"Y":return An(Bn(4,t),i);case"Yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a,i){const p=hy(t,i);if(a.isTwoDigitYear){const c=S3(a.year,p);return t.setFullYear(c,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}const s=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(s,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}}class MR extends Ge{constructor(){super(...arguments);we(this,"priority",130);we(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,r){return Rl(r==="R"?4:r.length,t)}set(t,r,a){const i=Sn(t,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),mi(i)}}class AR extends Ge{constructor(){super(...arguments);we(this,"priority",130);we(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,r){return Rl(r==="u"?4:r.length,t)}set(t,r,a){return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class _R extends Ge{constructor(){super(...arguments);we(this,"priority",120);we(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"Q":case"QQ":return Bn(r.length,t);case"Qo":return a.ordinalNumber(t,{unit:"quarter"});case"QQQ":return a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(t,{width:"wide",context:"formatting"})||a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class OR extends Ge{constructor(){super(...arguments);we(this,"priority",120);we(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"q":case"qq":return Bn(r.length,t);case"qo":return a.ordinalNumber(t,{unit:"quarter"});case"qqq":return a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(t,{width:"wide",context:"standalone"})||a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class HR extends Ge{constructor(){super(...arguments);we(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);we(this,"priority",110)}parse(t,r,a){const i=p=>p-1;switch(r){case"M":return An(vn(Mn.month,t),i);case"MM":return An(Bn(2,t),i);case"Mo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"MMM":return a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(t,{width:"wide",context:"formatting"})||a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}class CR extends Ge{constructor(){super(...arguments);we(this,"priority",110);we(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,r,a){const i=p=>p-1;switch(r){case"L":return An(vn(Mn.month,t),i);case"LL":return An(Bn(2,t),i);case"Lo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"LLL":return a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(t,{width:"wide",context:"standalone"})||a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}function NR(e,n,t){const r=Cn(e),a=I3(r,t)-n;return r.setDate(r.getDate()-a*7),r}class RR extends Ge{constructor(){super(...arguments);we(this,"priority",100);we(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,r,a){switch(r){case"w":return vn(Mn.week,t);case"wo":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a,i){return Na(NR(t,a,i),i)}}function kR(e,n){const t=Cn(e),r=b3(t)-n;return t.setDate(t.getDate()-r*7),t}class ER extends Ge{constructor(){super(...arguments);we(this,"priority",100);we(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,r,a){switch(r){case"I":return vn(Mn.week,t);case"Io":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a){return mi(kR(t,a))}}const TR=[31,28,31,30,31,30,31,31,30,31,30,31],jR=[31,29,31,30,31,30,31,31,30,31,30,31];class DR extends Ge{constructor(){super(...arguments);we(this,"priority",90);we(this,"subPriority",1);we(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"d":return vn(Mn.date,t);case"do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear(),i=M3(a),p=t.getMonth();return i?r>=1&&r<=jR[p]:r>=1&&r<=TR[p]}set(t,r,a){return t.setDate(a),t.setHours(0,0,0,0),t}}class $R extends Ge{constructor(){super(...arguments);we(this,"priority",90);we(this,"subpriority",1);we(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,r,a){switch(r){case"D":case"DD":return vn(Mn.dayOfYear,t);case"Do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear();return M3(a)?r>=1&&r<=366:r>=1&&r<=365}set(t,r,a){return t.setMonth(0,a),t.setHours(0,0,0,0),t}}function gy(e,n,t){var d,v,y,B;const r=Gi(),a=(t==null?void 0:t.weekStartsOn)??((v=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(y=r.locale)==null?void 0:y.options)==null?void 0:B.weekStartsOn)??0,i=Cn(e),p=i.getDay(),c=(n%7+7)%7,f=7-a,m=n<0||n>6?n-(p+f)%7:(c+f)%7-(p+f)%7;return Cl(i,m)}class LR extends Ge{constructor(){super(...arguments);we(this,"priority",90);we(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}class FR extends Ge{constructor(){super(...arguments);we(this,"priority",90);we(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,r,a,i){const p=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return An(Bn(r.length,t),p);case"eo":return An(a.ordinalNumber(t,{unit:"day"}),p);case"eee":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeeee":return a.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}class qR extends Ge{constructor(){super(...arguments);we(this,"priority",90);we(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,r,a,i){const p=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return An(Bn(r.length,t),p);case"co":return An(a.ordinalNumber(t,{unit:"day"}),p);case"ccc":return a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"ccccc":return a.day(t,{width:"narrow",context:"standalone"});case"cccccc":return a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(t,{width:"wide",context:"standalone"})||a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}function zR(e,n){const t=Cn(e),r=bR(t),a=n-r;return Cl(t,a)}class UR extends Ge{constructor(){super(...arguments);we(this,"priority",90);we(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,r,a){const i=p=>p===0?7:p;switch(r){case"i":case"ii":return Bn(r.length,t);case"io":return a.ordinalNumber(t,{unit:"day"});case"iii":return An(a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiii":return An(a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiiii":return An(a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiii":default:return An(a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i)}}validate(t,r){return r>=1&&r<=7}set(t,r,a){return t=zR(t,a),t.setHours(0,0,0,0),t}}class VR extends Ge{constructor(){super(...arguments);we(this,"priority",80);we(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class GR extends Ge{constructor(){super(...arguments);we(this,"priority",80);we(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class KR extends Ge{constructor(){super(...arguments);we(this,"priority",80);we(this,"incompatibleTokens",["a","b","t","T"])}parse(t,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class QR extends Ge{constructor(){super(...arguments);we(this,"priority",70);we(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,r,a){switch(r){case"h":return vn(Mn.hour12h,t);case"ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=12}set(t,r,a){const i=t.getHours()>=12;return i&&a<12?t.setHours(a+12,0,0,0):!i&&a===12?t.setHours(0,0,0,0):t.setHours(a,0,0,0),t}}class YR extends Ge{constructor(){super(...arguments);we(this,"priority",70);we(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,r,a){switch(r){case"H":return vn(Mn.hour23h,t);case"Ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=23}set(t,r,a){return t.setHours(a,0,0,0),t}}class XR extends Ge{constructor(){super(...arguments);we(this,"priority",70);we(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,r,a){switch(r){case"K":return vn(Mn.hour11h,t);case"Ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.getHours()>=12&&a<12?t.setHours(a+12,0,0,0):t.setHours(a,0,0,0),t}}class ZR extends Ge{constructor(){super(...arguments);we(this,"priority",70);we(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,r,a){switch(r){case"k":return vn(Mn.hour24h,t);case"ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=24}set(t,r,a){const i=a<=24?a%24:a;return t.setHours(i,0,0,0),t}}class JR extends Ge{constructor(){super(...arguments);we(this,"priority",60);we(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"m":return vn(Mn.minute,t);case"mo":return a.ordinalNumber(t,{unit:"minute"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setMinutes(a,0,0),t}}class ek extends Ge{constructor(){super(...arguments);we(this,"priority",50);we(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"s":return vn(Mn.second,t);case"so":return a.ordinalNumber(t,{unit:"second"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setSeconds(a,0),t}}class nk extends Ge{constructor(){super(...arguments);we(this,"priority",30);we(this,"incompatibleTokens",["t","T"])}parse(t,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return An(Bn(r.length,t),a)}set(t,r,a){return t.setMilliseconds(a),t}}class tk extends Ge{constructor(){super(...arguments);we(this,"priority",10);we(this,"incompatibleTokens",["t","T","x"])}parse(t,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,t);case"XX":return yr(gr.basic,t);case"XXXX":return yr(gr.basicOptionalSeconds,t);case"XXXXX":return yr(gr.extendedOptionalSeconds,t);case"XXX":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Sn(t,t.getTime()-Nl(t)-a)}}class rk extends Ge{constructor(){super(...arguments);we(this,"priority",10);we(this,"incompatibleTokens",["t","T","X"])}parse(t,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,t);case"xx":return yr(gr.basic,t);case"xxxx":return yr(gr.basicOptionalSeconds,t);case"xxxxx":return yr(gr.extendedOptionalSeconds,t);case"xxx":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Sn(t,t.getTime()-Nl(t)-a)}}class ak extends Ge{constructor(){super(...arguments);we(this,"priority",40);we(this,"incompatibleTokens","*")}parse(t){return W3(t)}set(t,r,a){return[Sn(t,a*1e3),{timestampIsSet:!0}]}}class ok extends Ge{constructor(){super(...arguments);we(this,"priority",20);we(this,"incompatibleTokens","*")}parse(t){return W3(t)}set(t,r,a){return[Sn(t,a),{timestampIsSet:!0}]}}const ik={G:new PR,y:new WR,Y:new SR,R:new MR,u:new AR,Q:new _R,q:new OR,M:new HR,L:new CR,w:new RR,I:new ER,d:new DR,D:new $R,E:new LR,e:new FR,c:new qR,i:new UR,a:new VR,b:new GR,B:new KR,h:new QR,H:new YR,K:new XR,k:new ZR,m:new JR,s:new ek,S:new nk,X:new tk,x:new rk,t:new ak,T:new ok},uk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sk=/^'([^]*?)'?$/,lk=/''/g,ck=/\S/,fk=/[a-zA-Z]/;function dk(e,n,t,r){var I,b,W,S;const a=yR(),i=a.locale??y3,p=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,s=a.weekStartsOn??((S=(W=a.locale)==null?void 0:W.options)==null?void 0:S.weekStartsOn)??0,c={firstWeekContainsDate:p,weekStartsOn:s,locale:i},f=[new wR],m=n.match(pk).map(M=>{const O=M[0];if(O in Nv){const w=Nv[O];return w(M,i.formatLong)}return M}).join("").match(uk),d=[];for(let M of m){w3(M)&&Rv(M,n,e),x3(M)&&Rv(M,n,e);const O=M[0],w=ik[O];if(w){const{incompatibleTokens:A}=w;if(Array.isArray(A)){const P=d.find(H=>A.includes(H.token)||H.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${M}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${M}\` and any other token at the same time`);d.push({token:O,fullToken:M});const N=w.run(e,M,i.match,c);if(!N)return Sn(t,NaN);f.push(N.setter),e=N.rest}else{if(O.match(fk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(M==="''"?M="'":O==="'"&&(M=mk(M)),e.indexOf(M)===0)e=e.slice(M.length);else return Sn(t,NaN)}}if(e.length>0&&ck.test(e))return Sn(t,NaN);const v=f.map(M=>M.priority).sort((M,O)=>O-M).filter((M,O,w)=>w.indexOf(M)===O).map(M=>f.filter(O=>O.priority===M).sort((O,w)=>w.subPriority-O.subPriority)).map(M=>M[0]);let y=Cn(t);if(isNaN(y.getTime()))return Sn(t,NaN);const B={};for(const M of v){if(!M.validate(y,c))return Sn(t,NaN);const O=M.set(y,B,c);Array.isArray(O)?(y=O[0],Object.assign(B,O[1])):y=O}return Sn(t,y)}function mk(e){return e.match(sk)[1].replace(lk,"'")}const ur=e=>{if(!e)return new Date(NaN);const n=e.trim(),t=n.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(t){const[,a,i,p]=t;return new Date(parseInt(a),parseInt(i)-1,parseInt(p),12,0,0)}const r=n.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,p]=r;return new Date(parseInt(p),parseInt(i)-1,parseInt(a),12,0,0)}return dk(e,"dd-MM-yyyy",new Date)},A3=["january","february","march","april","may","june","july","august","september","october","november","december"],_3=e=>{if(e==="all"||!e)return[];const[n,t]=e.split("-"),r=A3.indexOf(n.toLowerCase()),a=parseInt(t)||2026;if(r===-1)return[];const i=PN(new Date(a,r)),p=wN(new Date(a,r)),s=[];let c=i,f=1;for(;c<=p;){let m=Cl(c,6);m>p&&(m=p),s.push({value:`${n}-week${f}`,label:`${n.charAt(0).toUpperCase()+n.slice(1,3)} ${c.getDate()}-${m.getDate()}`,startDate:c,endDate:m}),c=Cl(m,1),f++}return s},O3=(e,n)=>{if(isNaN(e.getTime()))return!1;const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return t>=n.startDate&&t<=n.endDate},kv=(e,n)=>{if(n==="all")return!0;if(isNaN(e.getTime()))return!1;const[t,r]=n.split("-"),a=A3.indexOf(t.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},hk=e=>!e||isNaN(e.getTime())?"N/A":vR(e,"MMM dd, yyyy"),Ev=e=>{const n=e.length,t=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:n,botHandled:t,humanHandled:r,botPercentage:n>0?t/n*100:0,humanPercentage:n>0?r/n*100:0,escalationRate:n>0?r/n*100:0}},Tv=e=>{const n=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=n.get(a)||0;n.set(a,i+1)});const t=e.length;return Array.from(n.entries()).map(([r,a])=>({channel:r,count:a,percentage:t>0?a/t*100:0})).sort((r,a)=>a.count-r.count)},H3=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=t.get(r.product)||0;t.set(r.product,a+1)}}),Array.from(t.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},jv=(e,n=10)=>{const t=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=t.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,t.set(r.issue,a)}}),Array.from(t.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,n)},vk=(e,n="february-2026")=>{if(n==="all"){const t=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const p=ur(i.createdAt);if(!isNaN(p.getTime())){const s=t[p.getMonth()],c=`${s.charAt(0).toUpperCase()}${s.slice(1,3)} ${p.getFullYear()}`;r.add(`${c}|${s}-${p.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[p,s]=i.split("|"),c=e.filter(v=>kv(ur(v.createdAt),s)),f=c.length,m=c.filter(v=>v.handled==="Human").length,d=f>0?m/f*100:0;return{week:p,totalSessions:f,humanEscalations:m,escalationRate:d}}).sort((i,p)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${p.week}`).getTime()).filter(i=>i.totalSessions>0)}else return _3(n).map(r=>{const a=e.filter(c=>{const f=ur(c.createdAt);return O3(f,r)}),i=a.length,p=a.filter(c=>c.handled==="Human").length,s=a.length>0?p/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:p,escalationRate:s}})},gk=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.issue&&r.issue.trim()!==""){t.has(r.issue)||t.set(r.issue,new Map);const a=t.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const p=a.get(i),s=r.product&&r.product.trim()!==""?r.product:"Unknown";p.set(s,(p.get(s)||0)+1)}}),Array.from(t.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([s,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:s,count:m,products:f}}).sort((s,c)=>c.count-s.count),p=i.reduce((s,c)=>s+c.count,0);return{issue:r,count:p,subIssues:i}}).sort((r,a)=>a.count-r.count)},yk=(e,n="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(s=>[s.channel,s.createdAt,s.product||"",s.issue||"",s.subType||"",s.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),p=URL.createObjectURL(a);i.setAttribute("href",p),i.setAttribute("download",n),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function bk({metrics:e}){const n=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",t=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return _.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(pN,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(zC,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:_.jsx(fN,{className:"w-6 h-6 text-orange-600"})})]})})}),_.jsx(Ut,{className:t(e.escalationRate),children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),_.jsxs("p",{className:`text-3xl font-bold mt-2 ${n(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),_.jsx("div",{className:`p-3 rounded-full ${n(e.escalationRate).replace("text","bg").replace("600","100")}`,children:_.jsx(lN,{className:`w-6 h-6 ${n(e.escalationRate)}`})})]})})})]})}var Pf,RI;function bt(){if(RI)return Pf;RI=1;var e=Array.isArray;return Pf=e,Pf}var Wf,kI;function C3(){if(kI)return Wf;kI=1;var e=typeof cl=="object"&&cl&&cl.Object===Object&&cl;return Wf=e,Wf}var Sf,EI;function Sr(){if(EI)return Sf;EI=1;var e=C3(),n=typeof self=="object"&&self&&self.Object===Object&&self,t=e||n||Function("return this")();return Sf=t,Sf}var Mf,TI;function Qp(){if(TI)return Mf;TI=1;var e=Sr(),n=e.Symbol;return Mf=n,Mf}var Af,jI;function Ik(){if(jI)return Af;jI=1;var e=Qp(),n=Object.prototype,t=n.hasOwnProperty,r=n.toString,a=e?e.toStringTag:void 0;function i(p){var s=t.call(p,a),c=p[a];try{p[a]=void 0;var f=!0}catch{}var m=r.call(p);return f&&(s?p[a]=c:delete p[a]),m}return Af=i,Af}var _f,DI;function Bk(){if(DI)return _f;DI=1;var e=Object.prototype,n=e.toString;function t(r){return n.call(r)}return _f=t,_f}var Of,$I;function Yr(){if($I)return Of;$I=1;var e=Qp(),n=Ik(),t=Bk(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function p(s){return s==null?s===void 0?a:r:i&&i in Object(s)?n(s):t(s)}return Of=p,Of}var Hf,LI;function Xr(){if(LI)return Hf;LI=1;function e(n){return n!=null&&typeof n=="object"}return Hf=e,Hf}var Cf,FI;function Ki(){if(FI)return Cf;FI=1;var e=Yr(),n=Xr(),t="[object Symbol]";function r(a){return typeof a=="symbol"||n(a)&&e(a)==t}return Cf=r,Cf}var Nf,qI;function yy(){if(qI)return Nf;qI=1;var e=bt(),n=Ki(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,p){if(e(i))return!1;var s=typeof i;return s=="number"||s=="symbol"||s=="boolean"||i==null||n(i)?!0:r.test(i)||!t.test(i)||p!=null&&i in Object(p)}return Nf=a,Nf}var Rf,zI;function ja(){if(zI)return Rf;zI=1;function e(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}return Rf=e,Rf}var kf,UI;function by(){if(UI)return kf;UI=1;var e=Yr(),n=ja(),t="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function p(s){if(!n(s))return!1;var c=e(s);return c==r||c==a||c==t||c==i}return kf=p,kf}var Ef,VI;function xk(){if(VI)return Ef;VI=1;var e=Sr(),n=e["__core-js_shared__"];return Ef=n,Ef}var Tf,GI;function wk(){if(GI)return Tf;GI=1;var e=xk(),n=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function t(r){return!!n&&n in r}return Tf=t,Tf}var jf,KI;function N3(){if(KI)return jf;KI=1;var e=Function.prototype,n=e.toString;function t(r){if(r!=null){try{return n.call(r)}catch{}try{return r+""}catch{}}return""}return jf=t,jf}var Df,QI;function Pk(){if(QI)return Df;QI=1;var e=by(),n=wk(),t=ja(),r=N3(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,p=Function.prototype,s=Object.prototype,c=p.toString,f=s.hasOwnProperty,m=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!t(v)||n(v))return!1;var y=e(v)?m:i;return y.test(r(v))}return Df=d,Df}var $f,YI;function Wk(){if(YI)return $f;YI=1;function e(n,t){return n==null?void 0:n[t]}return $f=e,$f}var Lf,XI;function xo(){if(XI)return Lf;XI=1;var e=Pk(),n=Wk();function t(r,a){var i=n(r,a);return e(i)?i:void 0}return Lf=t,Lf}var Ff,ZI;function F0(){if(ZI)return Ff;ZI=1;var e=xo(),n=e(Object,"create");return Ff=n,Ff}var qf,JI;function Sk(){if(JI)return qf;JI=1;var e=F0();function n(){this.__data__=e?e(null):{},this.size=0}return qf=n,qf}var zf,eB;function Mk(){if(eB)return zf;eB=1;function e(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}return zf=e,zf}var Uf,nB;function Ak(){if(nB)return Uf;nB=1;var e=F0(),n="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function a(i){var p=this.__data__;if(e){var s=p[i];return s===n?void 0:s}return r.call(p,i)?p[i]:void 0}return Uf=a,Uf}var Vf,tB;function _k(){if(tB)return Vf;tB=1;var e=F0(),n=Object.prototype,t=n.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:t.call(i,a)}return Vf=r,Vf}var Gf,rB;function Ok(){if(rB)return Gf;rB=1;var e=F0(),n="__lodash_hash_undefined__";function t(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?n:a,this}return Gf=t,Gf}var Kf,aB;function Hk(){if(aB)return Kf;aB=1;var e=Sk(),n=Mk(),t=Ak(),r=_k(),a=Ok();function i(p){var s=-1,c=p==null?0:p.length;for(this.clear();++s<c;){var f=p[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,Kf=i,Kf}var Qf,oB;function Ck(){if(oB)return Qf;oB=1;function e(){this.__data__=[],this.size=0}return Qf=e,Qf}var Yf,iB;function Iy(){if(iB)return Yf;iB=1;function e(n,t){return n===t||n!==n&&t!==t}return Yf=e,Yf}var Xf,uB;function q0(){if(uB)return Xf;uB=1;var e=Iy();function n(t,r){for(var a=t.length;a--;)if(e(t[a][0],r))return a;return-1}return Xf=n,Xf}var Zf,pB;function Nk(){if(pB)return Zf;pB=1;var e=q0(),n=Array.prototype,t=n.splice;function r(a){var i=this.__data__,p=e(i,a);if(p<0)return!1;var s=i.length-1;return p==s?i.pop():t.call(i,p,1),--this.size,!0}return Zf=r,Zf}var Jf,sB;function Rk(){if(sB)return Jf;sB=1;var e=q0();function n(t){var r=this.__data__,a=e(r,t);return a<0?void 0:r[a][1]}return Jf=n,Jf}var ed,lB;function kk(){if(lB)return ed;lB=1;var e=q0();function n(t){return e(this.__data__,t)>-1}return ed=n,ed}var nd,cB;function Ek(){if(cB)return nd;cB=1;var e=q0();function n(t,r){var a=this.__data__,i=e(a,t);return i<0?(++this.size,a.push([t,r])):a[i][1]=r,this}return nd=n,nd}var td,fB;function z0(){if(fB)return td;fB=1;var e=Ck(),n=Nk(),t=Rk(),r=kk(),a=Ek();function i(p){var s=-1,c=p==null?0:p.length;for(this.clear();++s<c;){var f=p[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,td=i,td}var rd,dB;function By(){if(dB)return rd;dB=1;var e=xo(),n=Sr(),t=e(n,"Map");return rd=t,rd}var ad,mB;function Tk(){if(mB)return ad;mB=1;var e=Hk(),n=z0(),t=By();function r(){this.size=0,this.__data__={hash:new e,map:new(t||n),string:new e}}return ad=r,ad}var od,hB;function jk(){if(hB)return od;hB=1;function e(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}return od=e,od}var id,vB;function U0(){if(vB)return id;vB=1;var e=jk();function n(t,r){var a=t.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return id=n,id}var ud,gB;function Dk(){if(gB)return ud;gB=1;var e=U0();function n(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}return ud=n,ud}var pd,yB;function $k(){if(yB)return pd;yB=1;var e=U0();function n(t){return e(this,t).get(t)}return pd=n,pd}var sd,bB;function Lk(){if(bB)return sd;bB=1;var e=U0();function n(t){return e(this,t).has(t)}return sd=n,sd}var ld,IB;function Fk(){if(IB)return ld;IB=1;var e=U0();function n(t,r){var a=e(this,t),i=a.size;return a.set(t,r),this.size+=a.size==i?0:1,this}return ld=n,ld}var cd,BB;function xy(){if(BB)return cd;BB=1;var e=Tk(),n=Dk(),t=$k(),r=Lk(),a=Fk();function i(p){var s=-1,c=p==null?0:p.length;for(this.clear();++s<c;){var f=p[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,cd=i,cd}var fd,xB;function R3(){if(xB)return fd;xB=1;var e=xy(),n="Expected a function";function t(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(n);var i=function(){var p=arguments,s=a?a.apply(this,p):p[0],c=i.cache;if(c.has(s))return c.get(s);var f=r.apply(this,p);return i.cache=c.set(s,f)||c,f};return i.cache=new(t.Cache||e),i}return t.Cache=e,fd=t,fd}var dd,wB;function qk(){if(wB)return dd;wB=1;var e=R3(),n=500;function t(r){var a=e(r,function(p){return i.size===n&&i.clear(),p}),i=a.cache;return a}return dd=t,dd}var md,PB;function zk(){if(PB)return md;PB=1;var e=qk(),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(n,function(p,s,c,f){i.push(c?f.replace(t,"$1"):s||p)}),i});return md=r,md}var hd,WB;function wy(){if(WB)return hd;WB=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=Array(a);++r<a;)i[r]=t(n[r],r,n);return i}return hd=e,hd}var vd,SB;function Uk(){if(SB)return vd;SB=1;var e=Qp(),n=wy(),t=bt(),r=Ki(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function p(s){if(typeof s=="string")return s;if(t(s))return n(s,p)+"";if(r(s))return i?i.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}return vd=p,vd}var gd,MB;function k3(){if(MB)return gd;MB=1;var e=Uk();function n(t){return t==null?"":e(t)}return gd=n,gd}var yd,AB;function E3(){if(AB)return yd;AB=1;var e=bt(),n=yy(),t=zk(),r=k3();function a(i,p){return e(i)?i:n(i,p)?[i]:t(r(i))}return yd=a,yd}var bd,_B;function V0(){if(_B)return bd;_B=1;var e=Ki();function n(t){if(typeof t=="string"||e(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return bd=n,bd}var Id,OB;function Py(){if(OB)return Id;OB=1;var e=E3(),n=V0();function t(r,a){a=e(a,r);for(var i=0,p=a.length;r!=null&&i<p;)r=r[n(a[i++])];return i&&i==p?r:void 0}return Id=t,Id}var Bd,HB;function T3(){if(HB)return Bd;HB=1;var e=Py();function n(t,r,a){var i=t==null?void 0:e(t,r);return i===void 0?a:i}return Bd=n,Bd}var Vk=T3();const Ot=Xe(Vk);var xd,CB;function Gk(){if(CB)return xd;CB=1;function e(n){return n==null}return xd=e,xd}var Kk=Gk();const ke=Xe(Kk);var wd,NB;function Qk(){if(NB)return wd;NB=1;var e=Yr(),n=bt(),t=Xr(),r="[object String]";function a(i){return typeof i=="string"||!n(i)&&t(i)&&e(i)==r}return wd=a,wd}var Yk=Qk();const Yp=Xe(Yk);var Xk=by();const Re=Xe(Xk);var Zk=ja();const Qi=Xe(Zk);var Pd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RB;function Jk(){if(RB)return Qe;RB=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),p=Symbol.for("react.context"),s=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var W=b.$$typeof;switch(W){case e:switch(b=b.type,b){case t:case a:case r:case f:case m:return b;default:switch(b=b&&b.$$typeof,b){case s:case p:case c:case v:case d:case i:return b;default:return W}}case n:return W}}}return Qe.ContextConsumer=p,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=t,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=n,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=m,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===p},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===t},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===n},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===m},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===t||b===a||b===r||b===f||b===m||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===p||b.$$typeof===c||b.$$typeof===B||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var kB;function eE(){return kB||(kB=1,Pd.exports=Jk()),Pd.exports}var nE=eE(),Wd,EB;function j3(){if(EB)return Wd;EB=1;var e=Yr(),n=Xr(),t="[object Number]";function r(a){return typeof a=="number"||n(a)&&e(a)==t}return Wd=r,Wd}var Sd,TB;function tE(){if(TB)return Sd;TB=1;var e=j3();function n(t){return e(t)&&t!=+t}return Sd=n,Sd}var rE=tE();const Yi=Xe(rE);var aE=j3();const oE=Xe(aE);var ot=function(n){return n===0?0:n>0?1:-1},lo=function(n){return Yp(n)&&n.indexOf("%")===n.length-1},ce=function(n){return oE(n)&&!Yi(n)},Tn=function(n){return ce(n)||Yp(n)},iE=0,Da=function(n){var t=++iE;return"".concat(n||"").concat(t)},it=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!ce(n)&&!Yp(n))return r;var i;if(lo(n)){var p=n.indexOf("%");i=t*parseFloat(n.slice(0,p))/100}else i=+n;return Yi(i)&&(i=r),a&&i>t&&(i=t),i},Sa=function(n){if(!n)return null;var t=Object.keys(n);return t&&t.length?n[t[0]]:null},uE=function(n){if(!Array.isArray(n))return!1;for(var t=n.length,r={},a=0;a<t;a++)if(!r[n[a]])r[n[a]]=!0;else return!0;return!1},hn=function(n,t){return ce(n)&&ce(t)?function(r){return n+r*(t-n)}:function(){return t}};function kl(e,n,t){return!e||!e.length?null:e.find(function(r){return r&&(typeof n=="function"?n(r):Ot(r,n))===t})}var pE=function(n){if(!n||!n.length)return null;for(var t=n.length,r=0,a=0,i=0,p=0,s=1/0,c=-1/0,f=0,m=0,d=0;d<t;d++)f=n[d].cx||0,m=n[d].cy||0,r+=f,a+=m,i+=f*m,p+=f*f,s=Math.min(s,f),c=Math.max(c,f);var v=t*p!==r*r?(t*i-r*a)/(t*p-r*r):0;return{xmin:s,xmax:c,a:v,b:(a-v*r)/t}};function li(e,n){for(var t in e)if({}.hasOwnProperty.call(e,t)&&(!{}.hasOwnProperty.call(n,t)||e[t]!==n[t]))return!1;for(var r in n)if({}.hasOwnProperty.call(n,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Dv(e){"@babel/helpers - typeof";return Dv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Dv(e)}var sE=["viewBox","children"],lE=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],jB=["points","pathLength"],Md={svg:sE,polygon:jB,polyline:jB},Wy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],El=function(n,t){if(!n||typeof n=="function"||typeof n=="boolean")return null;var r=n;if(U.isValidElement(n)&&(r=n.props),!Qi(r))return null;var a={};return Object.keys(r).forEach(function(i){Wy.includes(i)&&(a[i]=t||function(p){return r[i](r,p)})}),a},cE=function(n,t,r){return function(a){return n(t,r,a),null}},Ra=function(n,t,r){if(!Qi(n)||Dv(n)!=="object")return null;var a=null;return Object.keys(n).forEach(function(i){var p=n[i];Wy.includes(i)&&typeof p=="function"&&(a||(a={}),a[i]=cE(p,t,r))}),a},fE=["children"],dE=["children"];function DB(e,n){if(e==null)return{};var t=mE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function $v(e){"@babel/helpers - typeof";return $v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$v(e)}var $B={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(n){return typeof n=="string"?n:n?n.displayName||n.name||"Component":""},LB=null,Ad=null,Sy=function e(n){if(n===LB&&Array.isArray(Ad))return Ad;var t=[];return U.Children.forEach(n,function(r){ke(r)||(nE.isFragment(r)?t=t.concat(e(r.props.children)):t.push(r))}),Ad=t,LB=n,t};function pt(e,n){var t=[],r=[];return Array.isArray(n)?r=n.map(function(a){return Ur(a)}):r=[Ur(n)],Sy(e).forEach(function(a){var i=Ot(a,"type.displayName")||Ot(a,"type.name");r.indexOf(i)!==-1&&t.push(a)}),t}function St(e,n){var t=pt(e,n);return t&&t[0]}var FB=function(n){if(!n||!n.props)return!1;var t=n.props,r=t.width,a=t.height;return!(!ce(r)||r<=0||!ce(a)||a<=0)},hE=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],vE=function(n){return n&&n.type&&Yp(n.type)&&hE.indexOf(n.type)>=0},D3=function(n){return n&&$v(n)==="object"&&"clipDot"in n},gE=function(n,t,r,a){var i,p=(i=Md==null?void 0:Md[a])!==null&&i!==void 0?i:[];return t.startsWith("data-")||!Re(n)&&(a&&p.includes(t)||lE.includes(t))||r&&Wy.includes(t)},Oe=function(n,t,r){if(!n||typeof n=="function"||typeof n=="boolean")return null;var a=n;if(U.isValidElement(n)&&(a=n.props),!Qi(a))return null;var i={};return Object.keys(a).forEach(function(p){var s;gE((s=a)===null||s===void 0?void 0:s[p],p,t,r)&&(i[p]=a[p])}),i},Lv=function e(n,t){if(n===t)return!0;var r=U.Children.count(n);if(r!==U.Children.count(t))return!1;if(r===0)return!0;if(r===1)return qB(Array.isArray(n)?n[0]:n,Array.isArray(t)?t[0]:t);for(var a=0;a<r;a++){var i=n[a],p=t[a];if(Array.isArray(i)||Array.isArray(p)){if(!e(i,p))return!1}else if(!qB(i,p))return!1}return!0},qB=function(n,t){if(ke(n)&&ke(t))return!0;if(!ke(n)&&!ke(t)){var r=n.props||{},a=r.children,i=DB(r,fE),p=t.props||{},s=p.children,c=DB(p,dE);return a&&s?li(i,c)&&Lv(a,s):!a&&!s?li(i,c):!1}return!1},zB=function(n,t){var r=[],a={};return Sy(n).forEach(function(i,p){if(vE(i))r.push(i);else if(i){var s=Ur(i.type),c=t[s]||{},f=c.handler,m=c.once;if(f&&(!m||!a[s])){var d=f(i,s,p);r.push(d),a[s]=!0}}}),r},yE=function(n){var t=n&&n.type;return t&&$B[t]?$B[t]:null},bE=function(n,t){return Sy(t).indexOf(n)},IE=["children","width","height","viewBox","className","style","title","desc"];function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fv.apply(this,arguments)}function BE(e,n){if(e==null)return{};var t=xE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function xE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function qv(e){var n=e.children,t=e.width,r=e.height,a=e.viewBox,i=e.className,p=e.style,s=e.title,c=e.desc,f=BE(e,IE),m=a||{width:t,height:r,x:0,y:0},d=De("recharts-surface",i);return E.createElement("svg",Fv({},Oe(f,!0,"svg"),{className:d,width:t,height:r,style:p,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),E.createElement("title",null,s),E.createElement("desc",null,c),n)}var wE=["children","className"];function zv(){return zv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zv.apply(this,arguments)}function PE(e,n){if(e==null)return{};var t=WE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function WE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var $e=E.forwardRef(function(e,n){var t=e.children,r=e.className,a=PE(e,wE),i=De("recharts-layer",r);return E.createElement("g",zv({className:i},Oe(a,!0),{ref:n}),t)}),sr=function(n,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},_d,UB;function SE(){if(UB)return _d;UB=1;function e(n,t,r){var a=-1,i=n.length;t<0&&(t=-t>i?0:i+t),r=r>i?i:r,r<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var p=Array(i);++a<i;)p[a]=n[a+t];return p}return _d=e,_d}var Od,VB;function ME(){if(VB)return Od;VB=1;var e=SE();function n(t,r,a){var i=t.length;return a=a===void 0?i:a,!r&&a>=i?t:e(t,r,a)}return Od=n,Od}var Hd,GB;function $3(){if(GB)return Hd;GB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",p="\\u200d",s=RegExp("["+p+e+a+i+"]");function c(f){return s.test(f)}return Hd=c,Hd}var Cd,KB;function AE(){if(KB)return Cd;KB=1;function e(n){return n.split("")}return Cd=e,Cd}var Nd,QB;function _E(){if(QB)return Nd;QB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",p="["+e+"]",s="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+c+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",B=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[m,d,v].join("|")+")"+I+B+")*",W=I+B+b,S="(?:"+[m+s+"?",s,d,v,p].join("|")+")",M=RegExp(c+"(?="+c+")|"+S+W,"g");function O(w){return w.match(M)||[]}return Nd=O,Nd}var Rd,YB;function OE(){if(YB)return Rd;YB=1;var e=AE(),n=$3(),t=_E();function r(a){return n(a)?t(a):e(a)}return Rd=r,Rd}var kd,XB;function HE(){if(XB)return kd;XB=1;var e=ME(),n=$3(),t=OE(),r=k3();function a(i){return function(p){p=r(p);var s=n(p)?t(p):void 0,c=s?s[0]:p.charAt(0),f=s?e(s,1).join(""):p.slice(1);return c[i]()+f}}return kd=a,kd}var Ed,ZB;function CE(){if(ZB)return Ed;ZB=1;var e=HE(),n=e("toUpperCase");return Ed=n,Ed}var NE=CE();const G0=Xe(NE);function an(e){return function(){return e}}const L3=Math.cos,Tl=Math.sin,cr=Math.sqrt,jl=Math.PI,K0=2*jl,Uv=Math.PI,Vv=2*Uv,uo=1e-6,RE=Vv-uo;function F3(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function kE(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return F3;const t=10**n;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*t)/t+r[a]}}class EE{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?F3:kE(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,r,a){this._append`Q${+n},${+t},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(n,t,r,a,i,p){this._append`C${+n},${+t},${+r},${+a},${this._x1=+i},${this._y1=+p}`}arcTo(n,t,r,a,i){if(n=+n,t=+t,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let p=this._x1,s=this._y1,c=r-n,f=a-t,m=p-n,d=s-t,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(v>uo)if(!(Math.abs(d*c-f*m)>uo)||!i)this._append`L${this._x1=n},${this._y1=t}`;else{let y=r-p,B=a-s,I=c*c+f*f,b=y*y+B*B,W=Math.sqrt(I),S=Math.sqrt(v),M=i*Math.tan((Uv-Math.acos((I+v-b)/(2*W*S)))/2),O=M/S,w=M/W;Math.abs(O-1)>uo&&this._append`L${n+O*m},${t+O*d}`,this._append`A${i},${i},0,0,${+(d*y>m*B)},${this._x1=n+w*c},${this._y1=t+w*f}`}}arc(n,t,r,a,i,p){if(n=+n,t=+t,r=+r,p=!!p,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(a),c=r*Math.sin(a),f=n+s,m=t+c,d=1^p,v=p?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>uo||Math.abs(this._y1-m)>uo)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%Vv+Vv),v>RE?this._append`A${r},${r},0,1,${d},${n-s},${t-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>uo&&this._append`A${r},${r},0,${+(v>=Uv)},${d},${this._x1=n+r*Math.cos(i)},${this._y1=t+r*Math.sin(i)}`)}rect(n,t,r,a){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function My(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);n=r}return e},()=>new EE(n)}function Ay(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function q3(e){this._context=e}q3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function Q0(e){return new q3(e)}function z3(e){return e[0]}function U3(e){return e[1]}function V3(e,n){var t=an(!0),r=null,a=Q0,i=null,p=My(s);e=typeof e=="function"?e:e===void 0?z3:an(e),n=typeof n=="function"?n:n===void 0?U3:an(n);function s(c){var f,m=(c=Ay(c)).length,d,v=!1,y;for(r==null&&(i=a(y=p())),f=0;f<=m;++f)!(f<m&&t(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+n(d,f,c));if(y)return i=null,y+""||null}return s.x=function(c){return arguments.length?(e=typeof c=="function"?c:an(+c),s):e},s.y=function(c){return arguments.length?(n=typeof c=="function"?c:an(+c),s):n},s.defined=function(c){return arguments.length?(t=typeof c=="function"?c:an(!!c),s):t},s.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),s):a},s.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),s):r},s}function vl(e,n,t){var r=null,a=an(!0),i=null,p=Q0,s=null,c=My(f);e=typeof e=="function"?e:e===void 0?z3:an(+e),n=typeof n=="function"?n:an(n===void 0?0:+n),t=typeof t=="function"?t:t===void 0?U3:an(+t);function f(d){var v,y,B,I=(d=Ay(d)).length,b,W=!1,S,M=new Array(I),O=new Array(I);for(i==null&&(s=p(S=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===W)if(W=!W)y=v,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),B=v-1;B>=y;--B)s.point(M[B],O[B]);s.lineEnd(),s.areaEnd()}W&&(M[v]=+e(b,v,d),O[v]=+n(b,v,d),s.point(r?+r(b,v,d):M[v],t?+t(b,v,d):O[v]))}if(S)return s=null,S+""||null}function m(){return V3().defined(a).curve(p).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:an(+d),f):r},f.y=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),t=null,f):n},f.y0=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),f):n},f.y1=function(d){return arguments.length?(t=d==null?null:typeof d=="function"?d:an(+d),f):t},f.lineX0=f.lineY0=function(){return m().x(e).y(n)},f.lineY1=function(){return m().x(e).y(t)},f.lineX1=function(){return m().x(r).y(n)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:an(!!d),f):a},f.curve=function(d){return arguments.length?(p=d,i!=null&&(s=p(i)),f):p},f.context=function(d){return arguments.length?(d==null?i=s=null:s=p(i=d),f):i},f}class G3{constructor(n,t){this._context=n,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,t){switch(n=+n,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,t,n,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,n,this._y0,n,t);break}}this._x0=n,this._y0=t}}function TE(e){return new G3(e,!0)}function jE(e){return new G3(e,!1)}const _y={draw(e,n){const t=cr(n/jl);e.moveTo(t,0),e.arc(0,0,t,0,K0)}},DE={draw(e,n){const t=cr(n/5)/2;e.moveTo(-3*t,-t),e.lineTo(-t,-t),e.lineTo(-t,-3*t),e.lineTo(t,-3*t),e.lineTo(t,-t),e.lineTo(3*t,-t),e.lineTo(3*t,t),e.lineTo(t,t),e.lineTo(t,3*t),e.lineTo(-t,3*t),e.lineTo(-t,t),e.lineTo(-3*t,t),e.closePath()}},K3=cr(1/3),$E=K3*2,LE={draw(e,n){const t=cr(n/$E),r=t*K3;e.moveTo(0,-t),e.lineTo(r,0),e.lineTo(0,t),e.lineTo(-r,0),e.closePath()}},FE={draw(e,n){const t=cr(n),r=-t/2;e.rect(r,r,t,t)}},qE=.8908130915292852,Q3=Tl(jl/10)/Tl(7*jl/10),zE=Tl(K0/10)*Q3,UE=-L3(K0/10)*Q3,VE={draw(e,n){const t=cr(n*qE),r=zE*t,a=UE*t;e.moveTo(0,-t),e.lineTo(r,a);for(let i=1;i<5;++i){const p=K0*i/5,s=L3(p),c=Tl(p);e.lineTo(c*t,-s*t),e.lineTo(s*r-c*a,c*r+s*a)}e.closePath()}},Td=cr(3),GE={draw(e,n){const t=-cr(n/(Td*3));e.moveTo(0,t*2),e.lineTo(-Td*t,-t),e.lineTo(Td*t,-t),e.closePath()}},$t=-.5,Lt=cr(3)/2,Gv=1/cr(12),KE=(Gv/2+1)*3,QE={draw(e,n){const t=cr(n/KE),r=t/2,a=t*Gv,i=r,p=t*Gv+t,s=-i,c=p;e.moveTo(r,a),e.lineTo(i,p),e.lineTo(s,c),e.lineTo($t*r-Lt*a,Lt*r+$t*a),e.lineTo($t*i-Lt*p,Lt*i+$t*p),e.lineTo($t*s-Lt*c,Lt*s+$t*c),e.lineTo($t*r+Lt*a,$t*a-Lt*r),e.lineTo($t*i+Lt*p,$t*p-Lt*i),e.lineTo($t*s+Lt*c,$t*c-Lt*s),e.closePath()}};function YE(e,n){let t=null,r=My(a);e=typeof e=="function"?e:an(e||_y),n=typeof n=="function"?n:an(n===void 0?64:+n);function a(){let i;if(t||(t=i=r()),e.apply(this,arguments).draw(t,+n.apply(this,arguments)),i)return t=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:an(i),a):e},a.size=function(i){return arguments.length?(n=typeof i=="function"?i:an(+i),a):n},a.context=function(i){return arguments.length?(t=i??null,a):t},a}function Dl(){}function $l(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function Y3(e){this._context=e}Y3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:$l(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:$l(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function XE(e){return new Y3(e)}function X3(e){this._context=e}X3.prototype={areaStart:Dl,areaEnd:Dl,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x2=e,this._y2=n;break;case 1:this._point=2,this._x3=e,this._y3=n;break;case 2:this._point=3,this._x4=e,this._y4=n,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+n)/6);break;default:$l(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function ZE(e){return new X3(e)}function Z3(e){this._context=e}Z3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:$l(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function JE(e){return new Z3(e)}function J3(e){this._context=e}J3.prototype={areaStart:Dl,areaEnd:Dl,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,n){e=+e,n=+n,this._point?this._context.lineTo(e,n):(this._point=1,this._context.moveTo(e,n))}};function eT(e){return new J3(e)}function JB(e){return e<0?-1:1}function ex(e,n,t){var r=e._x1-e._x0,a=n-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),p=(t-e._y1)/(a||r<0&&-0),s=(i*a+p*r)/(r+a);return(JB(i)+JB(p))*Math.min(Math.abs(i),Math.abs(p),.5*Math.abs(s))||0}function nx(e,n){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-n)/2:n}function jd(e,n,t){var r=e._x0,a=e._y0,i=e._x1,p=e._y1,s=(i-r)/3;e._context.bezierCurveTo(r+s,a+s*n,i-s,p-s*t,i,p)}function Ll(e){this._context=e}Ll.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:jd(this,this._t0,nx(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){var t=NaN;if(e=+e,n=+n,!(e===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,jd(this,nx(this,t=ex(this,e,n)),t);break;default:jd(this,this._t0,t=ex(this,e,n));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n,this._t0=t}}};function eS(e){this._context=new nS(e)}(eS.prototype=Object.create(Ll.prototype)).point=function(e,n){Ll.prototype.point.call(this,n,e)};function nS(e){this._context=e}nS.prototype={moveTo:function(e,n){this._context.moveTo(n,e)},closePath:function(){this._context.closePath()},lineTo:function(e,n){this._context.lineTo(n,e)},bezierCurveTo:function(e,n,t,r,a,i){this._context.bezierCurveTo(n,e,r,t,i,a)}};function nT(e){return new Ll(e)}function tT(e){return new eS(e)}function tS(e){this._context=e}tS.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,n=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],n[0]):this._context.moveTo(e[0],n[0]),t===2)this._context.lineTo(e[1],n[1]);else for(var r=tx(e),a=tx(n),i=0,p=1;p<t;++i,++p)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[p],n[p]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,n){this._x.push(+e),this._y.push(+n)}};function tx(e){var n,t=e.length-1,r,a=new Array(t),i=new Array(t),p=new Array(t);for(a[0]=0,i[0]=2,p[0]=e[0]+2*e[1],n=1;n<t-1;++n)a[n]=1,i[n]=4,p[n]=4*e[n]+2*e[n+1];for(a[t-1]=2,i[t-1]=7,p[t-1]=8*e[t-1]+e[t],n=1;n<t;++n)r=a[n]/i[n-1],i[n]-=r,p[n]-=r*p[n-1];for(a[t-1]=p[t-1]/i[t-1],n=t-2;n>=0;--n)a[n]=(p[n]-a[n+1])/i[n];for(i[t-1]=(e[t]+a[t-1])/2,n=0;n<t-1;++n)i[n]=2*e[n+1]-a[n+1];return[a,i]}function rT(e){return new tS(e)}function Y0(e,n){this._context=e,this._t=n}Y0.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(e,n);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,n)}break}}this._x=e,this._y=n}};function aT(e){return new Y0(e,.5)}function oT(e){return new Y0(e,0)}function iT(e){return new Y0(e,1)}function hi(e,n){if((p=e.length)>1)for(var t=1,r,a,i=e[n[0]],p,s=i.length;t<p;++t)for(a=i,i=e[n[t]],r=0;r<s;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Kv(e){for(var n=e.length,t=new Array(n);--n>=0;)t[n]=n;return t}function uT(e,n){return e[n]}function pT(e){const n=[];return n.key=e,n}function sT(){var e=an([]),n=Kv,t=hi,r=uT;function a(i){var p=Array.from(e.apply(this,arguments),pT),s,c=p.length,f=-1,m;for(const d of i)for(s=0,++f;s<c;++s)(p[s][f]=[0,+r(d,p[s].key,f,i)]).data=d;for(s=0,m=Ay(n(p));s<c;++s)p[m[s]].index=s;return t(p,m),p}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:an(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:an(+i),a):r},a.order=function(i){return arguments.length?(n=i==null?Kv:typeof i=="function"?i:an(Array.from(i)),a):n},a.offset=function(i){return arguments.length?(t=i??hi,a):t},a}function lT(e,n){if((r=e.length)>0){for(var t,r,a=0,i=e[0].length,p;a<i;++a){for(p=t=0;t<r;++t)p+=e[t][a][1]||0;if(p)for(t=0;t<r;++t)e[t][a][1]/=p}hi(e,n)}}function cT(e,n){if((a=e.length)>0){for(var t=0,r=e[n[0]],a,i=r.length;t<i;++t){for(var p=0,s=0;p<a;++p)s+=e[p][t][1]||0;r[t][1]+=r[t][0]=-s/2}hi(e,n)}}function fT(e,n){if(!(!((p=e.length)>0)||!((i=(a=e[n[0]]).length)>0))){for(var t=0,r=1,a,i,p;r<i;++r){for(var s=0,c=0,f=0;s<p;++s){for(var m=e[n[s]],d=m[r][1]||0,v=m[r-1][1]||0,y=(d-v)/2,B=0;B<s;++B){var I=e[n[B]],b=I[r][1]||0,W=I[r-1][1]||0;y+=b-W}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=t,c&&(t-=f/c)}a[r-1][1]+=a[r-1][0]=t,hi(e,n)}}function mp(e){"@babel/helpers - typeof";return mp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mp(e)}var dT=["type","size","sizeType"];function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qv.apply(this,arguments)}function rx(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ax(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rx(Object(t),!0).forEach(function(r){mT(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rx(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function mT(e,n,t){return n=hT(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function hT(e){var n=vT(e,"string");return mp(n)=="symbol"?n:n+""}function vT(e,n){if(mp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(mp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function gT(e,n){if(e==null)return{};var t=yT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function yT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var rS={symbolCircle:_y,symbolCross:DE,symbolDiamond:LE,symbolSquare:FE,symbolStar:VE,symbolTriangle:GE,symbolWye:QE},bT=Math.PI/180,IT=function(n){var t="symbol".concat(G0(n));return rS[t]||_y},BT=function(n,t,r){if(t==="area")return n;switch(r){case"cross":return 5*n*n/9;case"diamond":return .5*n*n/Math.sqrt(3);case"square":return n*n;case"star":{var a=18*bT;return 1.25*n*n*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*n*n/4;case"wye":return(21-10*Math.sqrt(3))*n*n/8;default:return Math.PI*n*n/4}},xT=function(n,t){rS["symbol".concat(G0(n))]=t},X0=function(n){var t=n.type,r=t===void 0?"circle":t,a=n.size,i=a===void 0?64:a,p=n.sizeType,s=p===void 0?"area":p,c=gT(n,dT),f=ax(ax({},c),{},{type:r,size:i,sizeType:s}),m=function(){var b=IT(r),W=YE().type(b).size(BT(i,s,r));return W()},d=f.className,v=f.cx,y=f.cy,B=Oe(f,!0);return v===+v&&y===+y&&i===+i?E.createElement("path",Qv({},B,{className:De("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:m()})):null};X0.registerSymbol=xT;function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vi(e)}function Yv(){return Yv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yv.apply(this,arguments)}function ox(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wT(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ox(Object(t),!0).forEach(function(r){hp(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ox(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function PT(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function WT(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oS(r.key),r)}}function ST(e,n,t){return n&&WT(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function MT(e,n,t){return n=Fl(n),AT(e,aS()?Reflect.construct(n,t||[],Fl(e).constructor):n.apply(e,t))}function AT(e,n){if(n&&(vi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _T(e)}function _T(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aS=function(){return!!e})()}function Fl(e){return Fl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fl(e)}function OT(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xv(e,n)}function Xv(e,n){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,n)}function hp(e,n,t){return n=oS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oS(e){var n=HT(e,"string");return vi(n)=="symbol"?n:n+""}function HT(e,n){if(vi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ft=32,Oy=(function(e){function n(){return PT(this,n),MT(this,n,arguments)}return OT(n,e),ST(n,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ft/2,p=Ft/6,s=Ft/3,c=r.inactive?a:r.color;if(r.type==="plainline")return E.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ft,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return E.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(s,`
            A`).concat(p,",").concat(p,",0,1,1,").concat(2*s,",").concat(i,`
            H`).concat(Ft,"M").concat(2*s,",").concat(i,`
            A`).concat(p,",").concat(p,",0,1,1,").concat(s,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return E.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Ft/8,"h").concat(Ft,"v").concat(Ft*3/4,"h").concat(-Ft,"z"),className:"recharts-legend-icon"});if(E.isValidElement(r.legendIcon)){var f=wT({},r);return delete f.legendIcon,E.cloneElement(r.legendIcon,f)}return E.createElement(X0,{fill:c,cx:i,cy:i,size:Ft,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,p=a.iconSize,s=a.layout,c=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:Ft,height:Ft},d={display:s==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,B){var I=y.formatter||c,b=De(hp(hp({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",y.inactive));if(y.type==="none")return null;var W=Re(y.value)?null:y.value;sr(!Re(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var S=y.inactive?f:y.color;return E.createElement("li",Yv({className:b,style:d,key:"legend-item-".concat(B)},Ra(r.props,y,B)),E.createElement(qv,{width:p,height:p,viewBox:m,style:v},r.renderIcon(y)),E.createElement("span",{className:"recharts-legend-item-text",style:{color:S}},I?I(W,y,B):W))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,p=r.align;if(!a||!a.length)return null;var s={padding:0,margin:0,textAlign:i==="horizontal"?p:"left"};return E.createElement("ul",{className:"recharts-default-legend",style:s},this.renderItems())}}])})(U.PureComponent);hp(Oy,"displayName","Legend");hp(Oy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Dd,ix;function CT(){if(ix)return Dd;ix=1;var e=z0();function n(){this.__data__=new e,this.size=0}return Dd=n,Dd}var $d,ux;function NT(){if(ux)return $d;ux=1;function e(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}return $d=e,$d}var Ld,px;function RT(){if(px)return Ld;px=1;function e(n){return this.__data__.get(n)}return Ld=e,Ld}var Fd,sx;function kT(){if(sx)return Fd;sx=1;function e(n){return this.__data__.has(n)}return Fd=e,Fd}var qd,lx;function ET(){if(lx)return qd;lx=1;var e=z0(),n=By(),t=xy(),r=200;function a(i,p){var s=this.__data__;if(s instanceof e){var c=s.__data__;if(!n||c.length<r-1)return c.push([i,p]),this.size=++s.size,this;s=this.__data__=new t(c)}return s.set(i,p),this.size=s.size,this}return qd=a,qd}var zd,cx;function iS(){if(cx)return zd;cx=1;var e=z0(),n=CT(),t=NT(),r=RT(),a=kT(),i=ET();function p(s){var c=this.__data__=new e(s);this.size=c.size}return p.prototype.clear=n,p.prototype.delete=t,p.prototype.get=r,p.prototype.has=a,p.prototype.set=i,zd=p,zd}var Ud,fx;function TT(){if(fx)return Ud;fx=1;var e="__lodash_hash_undefined__";function n(t){return this.__data__.set(t,e),this}return Ud=n,Ud}var Vd,dx;function jT(){if(dx)return Vd;dx=1;function e(n){return this.__data__.has(n)}return Vd=e,Vd}var Gd,mx;function uS(){if(mx)return Gd;mx=1;var e=xy(),n=TT(),t=jT();function r(a){var i=-1,p=a==null?0:a.length;for(this.__data__=new e;++i<p;)this.add(a[i])}return r.prototype.add=r.prototype.push=n,r.prototype.has=t,Gd=r,Gd}var Kd,hx;function pS(){if(hx)return Kd;hx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(t(n[r],r,n))return!0;return!1}return Kd=e,Kd}var Qd,vx;function sS(){if(vx)return Qd;vx=1;function e(n,t){return n.has(t)}return Qd=e,Qd}var Yd,gx;function lS(){if(gx)return Yd;gx=1;var e=uS(),n=pS(),t=sS(),r=1,a=2;function i(p,s,c,f,m,d){var v=c&r,y=p.length,B=s.length;if(y!=B&&!(v&&B>y))return!1;var I=d.get(p),b=d.get(s);if(I&&b)return I==s&&b==p;var W=-1,S=!0,M=c&a?new e:void 0;for(d.set(p,s),d.set(s,p);++W<y;){var O=p[W],w=s[W];if(f)var A=v?f(w,O,W,s,p,d):f(O,w,W,p,s,d);if(A!==void 0){if(A)continue;S=!1;break}if(M){if(!n(s,function(N,P){if(!t(M,P)&&(O===N||m(O,N,c,f,d)))return M.push(P)})){S=!1;break}}else if(!(O===w||m(O,w,c,f,d))){S=!1;break}}return d.delete(p),d.delete(s),S}return Yd=i,Yd}var Xd,yx;function DT(){if(yx)return Xd;yx=1;var e=Sr(),n=e.Uint8Array;return Xd=n,Xd}var Zd,bx;function $T(){if(bx)return Zd;bx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a,i){r[++t]=[i,a]}),r}return Zd=e,Zd}var Jd,Ix;function Hy(){if(Ix)return Jd;Ix=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a){r[++t]=a}),r}return Jd=e,Jd}var em,Bx;function LT(){if(Bx)return em;Bx=1;var e=Qp(),n=DT(),t=Iy(),r=lS(),a=$T(),i=Hy(),p=1,s=2,c="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",B="[object Set]",I="[object String]",b="[object Symbol]",W="[object ArrayBuffer]",S="[object DataView]",M=e?e.prototype:void 0,O=M?M.valueOf:void 0;function w(A,N,P,H,k,j,R){switch(P){case S:if(A.byteLength!=N.byteLength||A.byteOffset!=N.byteOffset)return!1;A=A.buffer,N=N.buffer;case W:return!(A.byteLength!=N.byteLength||!j(new n(A),new n(N)));case c:case f:case v:return t(+A,+N);case m:return A.name==N.name&&A.message==N.message;case y:case I:return A==N+"";case d:var F=a;case B:var V=H&p;if(F||(F=i),A.size!=N.size&&!V)return!1;var G=R.get(A);if(G)return G==N;H|=s,R.set(A,N);var Y=r(F(A),F(N),H,k,j,R);return R.delete(A),Y;case b:if(O)return O.call(A)==O.call(N)}return!1}return em=w,em}var nm,xx;function cS(){if(xx)return nm;xx=1;function e(n,t){for(var r=-1,a=t.length,i=n.length;++r<a;)n[i+r]=t[r];return n}return nm=e,nm}var tm,wx;function FT(){if(wx)return tm;wx=1;var e=cS(),n=bt();function t(r,a,i){var p=a(r);return n(r)?p:e(p,i(r))}return tm=t,tm}var rm,Px;function qT(){if(Px)return rm;Px=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=0,p=[];++r<a;){var s=n[r];t(s,r,n)&&(p[i++]=s)}return p}return rm=e,rm}var am,Wx;function zT(){if(Wx)return am;Wx=1;function e(){return[]}return am=e,am}var om,Sx;function UT(){if(Sx)return om;Sx=1;var e=qT(),n=zT(),t=Object.prototype,r=t.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(p){return p==null?[]:(p=Object(p),e(a(p),function(s){return r.call(p,s)}))}:n;return om=i,om}var im,Mx;function VT(){if(Mx)return im;Mx=1;function e(n,t){for(var r=-1,a=Array(n);++r<n;)a[r]=t(r);return a}return im=e,im}var um,Ax;function GT(){if(Ax)return um;Ax=1;var e=Yr(),n=Xr(),t="[object Arguments]";function r(a){return n(a)&&e(a)==t}return um=r,um}var pm,_x;function Cy(){if(_x)return pm;_x=1;var e=GT(),n=Xr(),t=Object.prototype,r=t.hasOwnProperty,a=t.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(p){return n(p)&&r.call(p,"callee")&&!a.call(p,"callee")};return pm=i,pm}var np={exports:{}},sm,Ox;function KT(){if(Ox)return sm;Ox=1;function e(){return!1}return sm=e,sm}np.exports;var Hx;function fS(){return Hx||(Hx=1,(function(e,n){var t=Sr(),r=KT(),a=n&&!n.nodeType&&n,i=a&&!0&&e&&!e.nodeType&&e,p=i&&i.exports===a,s=p?t.Buffer:void 0,c=s?s.isBuffer:void 0,f=c||r;e.exports=f})(np,np.exports)),np.exports}var lm,Cx;function Ny(){if(Cx)return lm;Cx=1;var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function t(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&n.test(r))&&r>-1&&r%1==0&&r<a}return lm=t,lm}var cm,Nx;function Ry(){if(Nx)return cm;Nx=1;var e=9007199254740991;function n(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=e}return cm=n,cm}var fm,Rx;function QT(){if(Rx)return fm;Rx=1;var e=Yr(),n=Ry(),t=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",p="[object Date]",s="[object Error]",c="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",B="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",W="[object DataView]",S="[object Float32Array]",M="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",A="[object Int32Array]",N="[object Uint8Array]",P="[object Uint8ClampedArray]",H="[object Uint16Array]",k="[object Uint32Array]",j={};j[S]=j[M]=j[O]=j[w]=j[A]=j[N]=j[P]=j[H]=j[k]=!0,j[r]=j[a]=j[b]=j[i]=j[W]=j[p]=j[s]=j[c]=j[f]=j[m]=j[d]=j[v]=j[y]=j[B]=j[I]=!1;function R(F){return t(F)&&n(F.length)&&!!j[e(F)]}return fm=R,fm}var dm,kx;function dS(){if(kx)return dm;kx=1;function e(n){return function(t){return n(t)}}return dm=e,dm}var tp={exports:{}};tp.exports;var Ex;function YT(){return Ex||(Ex=1,(function(e,n){var t=C3(),r=n&&!n.nodeType&&n,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,p=i&&t.process,s=(function(){try{var c=a&&a.require&&a.require("util").types;return c||p&&p.binding&&p.binding("util")}catch{}})();e.exports=s})(tp,tp.exports)),tp.exports}var mm,Tx;function mS(){if(Tx)return mm;Tx=1;var e=QT(),n=dS(),t=YT(),r=t&&t.isTypedArray,a=r?n(r):e;return mm=a,mm}var hm,jx;function XT(){if(jx)return hm;jx=1;var e=VT(),n=Cy(),t=bt(),r=fS(),a=Ny(),i=mS(),p=Object.prototype,s=p.hasOwnProperty;function c(f,m){var d=t(f),v=!d&&n(f),y=!d&&!v&&r(f),B=!d&&!v&&!y&&i(f),I=d||v||y||B,b=I?e(f.length,String):[],W=b.length;for(var S in f)(m||s.call(f,S))&&!(I&&(S=="length"||y&&(S=="offset"||S=="parent")||B&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||a(S,W)))&&b.push(S);return b}return hm=c,hm}var vm,Dx;function ZT(){if(Dx)return vm;Dx=1;var e=Object.prototype;function n(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||e;return t===a}return vm=n,vm}var gm,$x;function hS(){if($x)return gm;$x=1;function e(n,t){return function(r){return n(t(r))}}return gm=e,gm}var ym,Lx;function JT(){if(Lx)return ym;Lx=1;var e=hS(),n=e(Object.keys,Object);return ym=n,ym}var bm,Fx;function ej(){if(Fx)return bm;Fx=1;var e=ZT(),n=JT(),t=Object.prototype,r=t.hasOwnProperty;function a(i){if(!e(i))return n(i);var p=[];for(var s in Object(i))r.call(i,s)&&s!="constructor"&&p.push(s);return p}return bm=a,bm}var Im,qx;function Xp(){if(qx)return Im;qx=1;var e=by(),n=Ry();function t(r){return r!=null&&n(r.length)&&!e(r)}return Im=t,Im}var Bm,zx;function Z0(){if(zx)return Bm;zx=1;var e=XT(),n=ej(),t=Xp();function r(a){return t(a)?e(a):n(a)}return Bm=r,Bm}var xm,Ux;function nj(){if(Ux)return xm;Ux=1;var e=FT(),n=UT(),t=Z0();function r(a){return e(a,t,n)}return xm=r,xm}var wm,Vx;function tj(){if(Vx)return wm;Vx=1;var e=nj(),n=1,t=Object.prototype,r=t.hasOwnProperty;function a(i,p,s,c,f,m){var d=s&n,v=e(i),y=v.length,B=e(p),I=B.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var W=v[b];if(!(d?W in p:r.call(p,W)))return!1}var S=m.get(i),M=m.get(p);if(S&&M)return S==p&&M==i;var O=!0;m.set(i,p),m.set(p,i);for(var w=d;++b<y;){W=v[b];var A=i[W],N=p[W];if(c)var P=d?c(N,A,W,p,i,m):c(A,N,W,i,p,m);if(!(P===void 0?A===N||f(A,N,s,c,m):P)){O=!1;break}w||(w=W=="constructor")}if(O&&!w){var H=i.constructor,k=p.constructor;H!=k&&"constructor"in i&&"constructor"in p&&!(typeof H=="function"&&H instanceof H&&typeof k=="function"&&k instanceof k)&&(O=!1)}return m.delete(i),m.delete(p),O}return wm=a,wm}var Pm,Gx;function rj(){if(Gx)return Pm;Gx=1;var e=xo(),n=Sr(),t=e(n,"DataView");return Pm=t,Pm}var Wm,Kx;function aj(){if(Kx)return Wm;Kx=1;var e=xo(),n=Sr(),t=e(n,"Promise");return Wm=t,Wm}var Sm,Qx;function vS(){if(Qx)return Sm;Qx=1;var e=xo(),n=Sr(),t=e(n,"Set");return Sm=t,Sm}var Mm,Yx;function oj(){if(Yx)return Mm;Yx=1;var e=xo(),n=Sr(),t=e(n,"WeakMap");return Mm=t,Mm}var Am,Xx;function ij(){if(Xx)return Am;Xx=1;var e=rj(),n=By(),t=aj(),r=vS(),a=oj(),i=Yr(),p=N3(),s="[object Map]",c="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",y=p(e),B=p(n),I=p(t),b=p(r),W=p(a),S=i;return(e&&S(new e(new ArrayBuffer(1)))!=v||n&&S(new n)!=s||t&&S(t.resolve())!=f||r&&S(new r)!=m||a&&S(new a)!=d)&&(S=function(M){var O=i(M),w=O==c?M.constructor:void 0,A=w?p(w):"";if(A)switch(A){case y:return v;case B:return s;case I:return f;case b:return m;case W:return d}return O}),Am=S,Am}var _m,Zx;function uj(){if(Zx)return _m;Zx=1;var e=iS(),n=lS(),t=LT(),r=tj(),a=ij(),i=bt(),p=fS(),s=mS(),c=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function B(I,b,W,S,M,O){var w=i(I),A=i(b),N=w?m:a(I),P=A?m:a(b);N=N==f?d:N,P=P==f?d:P;var H=N==d,k=P==d,j=N==P;if(j&&p(I)){if(!p(b))return!1;w=!0,H=!1}if(j&&!H)return O||(O=new e),w||s(I)?n(I,b,W,S,M,O):t(I,b,N,W,S,M,O);if(!(W&c)){var R=H&&y.call(I,"__wrapped__"),F=k&&y.call(b,"__wrapped__");if(R||F){var V=R?I.value():I,G=F?b.value():b;return O||(O=new e),M(V,G,W,S,O)}}return j?(O||(O=new e),r(I,b,W,S,M,O)):!1}return _m=B,_m}var Om,Jx;function ky(){if(Jx)return Om;Jx=1;var e=uj(),n=Xr();function t(r,a,i,p,s){return r===a?!0:r==null||a==null||!n(r)&&!n(a)?r!==r&&a!==a:e(r,a,i,p,t,s)}return Om=t,Om}var Hm,ew;function pj(){if(ew)return Hm;ew=1;var e=iS(),n=ky(),t=1,r=2;function a(i,p,s,c){var f=s.length,m=f,d=!c;if(i==null)return!m;for(i=Object(i);f--;){var v=s[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=s[f];var y=v[0],B=i[y],I=v[1];if(d&&v[2]){if(B===void 0&&!(y in i))return!1}else{var b=new e;if(c)var W=c(B,I,y,i,p,b);if(!(W===void 0?n(I,B,t|r,c,b):W))return!1}}return!0}return Hm=a,Hm}var Cm,nw;function gS(){if(nw)return Cm;nw=1;var e=ja();function n(t){return t===t&&!e(t)}return Cm=n,Cm}var Nm,tw;function sj(){if(tw)return Nm;tw=1;var e=gS(),n=Z0();function t(r){for(var a=n(r),i=a.length;i--;){var p=a[i],s=r[p];a[i]=[p,s,e(s)]}return a}return Nm=t,Nm}var Rm,rw;function yS(){if(rw)return Rm;rw=1;function e(n,t){return function(r){return r==null?!1:r[n]===t&&(t!==void 0||n in Object(r))}}return Rm=e,Rm}var km,aw;function lj(){if(aw)return km;aw=1;var e=pj(),n=sj(),t=yS();function r(a){var i=n(a);return i.length==1&&i[0][2]?t(i[0][0],i[0][1]):function(p){return p===a||e(p,a,i)}}return km=r,km}var Em,ow;function cj(){if(ow)return Em;ow=1;function e(n,t){return n!=null&&t in Object(n)}return Em=e,Em}var Tm,iw;function fj(){if(iw)return Tm;iw=1;var e=E3(),n=Cy(),t=bt(),r=Ny(),a=Ry(),i=V0();function p(s,c,f){c=e(c,s);for(var m=-1,d=c.length,v=!1;++m<d;){var y=i(c[m]);if(!(v=s!=null&&f(s,y)))break;s=s[y]}return v||++m!=d?v:(d=s==null?0:s.length,!!d&&a(d)&&r(y,d)&&(t(s)||n(s)))}return Tm=p,Tm}var jm,uw;function dj(){if(uw)return jm;uw=1;var e=cj(),n=fj();function t(r,a){return r!=null&&n(r,a,e)}return jm=t,jm}var Dm,pw;function mj(){if(pw)return Dm;pw=1;var e=ky(),n=T3(),t=dj(),r=yy(),a=gS(),i=yS(),p=V0(),s=1,c=2;function f(m,d){return r(m)&&a(d)?i(p(m),d):function(v){var y=n(v,m);return y===void 0&&y===d?t(v,m):e(d,y,s|c)}}return Dm=f,Dm}var $m,sw;function Xi(){if(sw)return $m;sw=1;function e(n){return n}return $m=e,$m}var Lm,lw;function hj(){if(lw)return Lm;lw=1;function e(n){return function(t){return t==null?void 0:t[n]}}return Lm=e,Lm}var Fm,cw;function vj(){if(cw)return Fm;cw=1;var e=Py();function n(t){return function(r){return e(r,t)}}return Fm=n,Fm}var qm,fw;function gj(){if(fw)return qm;fw=1;var e=hj(),n=vj(),t=yy(),r=V0();function a(i){return t(i)?e(r(i)):n(i)}return qm=a,qm}var zm,dw;function Mr(){if(dw)return zm;dw=1;var e=lj(),n=mj(),t=Xi(),r=bt(),a=gj();function i(p){return typeof p=="function"?p:p==null?t:typeof p=="object"?r(p)?n(p[0],p[1]):e(p):a(p)}return zm=i,zm}var Um,mw;function bS(){if(mw)return Um;mw=1;function e(n,t,r,a){for(var i=n.length,p=r+(a?1:-1);a?p--:++p<i;)if(t(n[p],p,n))return p;return-1}return Um=e,Um}var Vm,hw;function yj(){if(hw)return Vm;hw=1;function e(n){return n!==n}return Vm=e,Vm}var Gm,vw;function bj(){if(vw)return Gm;vw=1;function e(n,t,r){for(var a=r-1,i=n.length;++a<i;)if(n[a]===t)return a;return-1}return Gm=e,Gm}var Km,gw;function Ij(){if(gw)return Km;gw=1;var e=bS(),n=yj(),t=bj();function r(a,i,p){return i===i?t(a,i,p):e(a,n,p)}return Km=r,Km}var Qm,yw;function Bj(){if(yw)return Qm;yw=1;var e=Ij();function n(t,r){var a=t==null?0:t.length;return!!a&&e(t,r,0)>-1}return Qm=n,Qm}var Ym,bw;function xj(){if(bw)return Ym;bw=1;function e(n,t,r){for(var a=-1,i=n==null?0:n.length;++a<i;)if(r(t,n[a]))return!0;return!1}return Ym=e,Ym}var Xm,Iw;function wj(){if(Iw)return Xm;Iw=1;function e(){}return Xm=e,Xm}var Zm,Bw;function Pj(){if(Bw)return Zm;Bw=1;var e=vS(),n=wj(),t=Hy(),r=1/0,a=e&&1/t(new e([,-0]))[1]==r?function(i){return new e(i)}:n;return Zm=a,Zm}var Jm,xw;function Wj(){if(xw)return Jm;xw=1;var e=uS(),n=Bj(),t=xj(),r=sS(),a=Pj(),i=Hy(),p=200;function s(c,f,m){var d=-1,v=n,y=c.length,B=!0,I=[],b=I;if(m)B=!1,v=t;else if(y>=p){var W=f?null:a(c);if(W)return i(W);B=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var S=c[d],M=f?f(S):S;if(S=m||S!==0?S:0,B&&M===M){for(var O=b.length;O--;)if(b[O]===M)continue e;f&&b.push(M),I.push(S)}else v(b,M,m)||(b!==I&&b.push(M),I.push(S))}return I}return Jm=s,Jm}var eh,ww;function Sj(){if(ww)return eh;ww=1;var e=Mr(),n=Wj();function t(r,a){return r&&r.length?n(r,e(a,2)):[]}return eh=t,eh}var Mj=Sj();const Pw=Xe(Mj);function IS(e,n,t){return n===!0?Pw(e,t):Re(n)?Pw(e,n):e}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gi(e)}var Aj=["ref"];function Ww(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Tr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ww(Object(t),!0).forEach(function(r){J0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ww(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Sw(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,xS(r.key),r)}}function Oj(e,n,t){return n&&Sw(e.prototype,n),t&&Sw(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hj(e,n,t){return n=ql(n),Cj(e,BS()?Reflect.construct(n,t||[],ql(e).constructor):n.apply(e,t))}function Cj(e,n){if(n&&(gi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Nj(e)}function Nj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function BS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(BS=function(){return!!e})()}function ql(e){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ql(e)}function Rj(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zv(e,n)}function Zv(e,n){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,n)}function J0(e,n,t){return n=xS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xS(e){var n=kj(e,"string");return gi(n)=="symbol"?n:n+""}function kj(e,n){if(gi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Ej(e,n){if(e==null)return{};var t=Tj(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Tj(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function jj(e){return e.value}function Dj(e,n){if(E.isValidElement(e))return E.cloneElement(e,n);if(typeof e=="function")return E.createElement(e,n);n.ref;var t=Ej(n,Aj);return E.createElement(Oy,t)}var Mw=1,Oa=(function(e){function n(){var t;_j(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=Hj(this,n,[].concat(a)),J0(t,"lastBoundingBox",{width:-1,height:-1}),t}return Rj(n,e),Oj(n,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Mw||Math.abs(a.height-this.lastBoundingBox.height)>Mw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Tr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,p=a.align,s=a.verticalAlign,c=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(p==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=p==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(s==="middle"){var B=this.getBBoxSnapshot();v={top:((m||0)-B.height)/2}}else v=s==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Tr(Tr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,p=a.width,s=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=Tr(Tr({position:"absolute",width:p||"auto",height:s||"auto"},this.getDefaultPosition(c)),c);return E.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},Dj(i,Tr(Tr({},this.props),{},{payload:IS(m,f,jj)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Tr(Tr({},this.defaultProps),r.props),p=i.layout;return p==="vertical"&&ce(r.props.height)?{height:r.props.height}:p==="horizontal"?{width:r.props.width||a}:null}}])})(U.PureComponent);J0(Oa,"displayName","Legend");J0(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var nh,Aw;function $j(){if(Aw)return nh;Aw=1;var e=Qp(),n=Cy(),t=bt(),r=e?e.isConcatSpreadable:void 0;function a(i){return t(i)||n(i)||!!(r&&i&&i[r])}return nh=a,nh}var th,_w;function wS(){if(_w)return th;_w=1;var e=cS(),n=$j();function t(r,a,i,p,s){var c=-1,f=r.length;for(i||(i=n),s||(s=[]);++c<f;){var m=r[c];a>0&&i(m)?a>1?t(m,a-1,i,p,s):e(s,m):p||(s[s.length]=m)}return s}return th=t,th}var rh,Ow;function Lj(){if(Ow)return rh;Ow=1;function e(n){return function(t,r,a){for(var i=-1,p=Object(t),s=a(t),c=s.length;c--;){var f=s[n?c:++i];if(r(p[f],f,p)===!1)break}return t}}return rh=e,rh}var ah,Hw;function Fj(){if(Hw)return ah;Hw=1;var e=Lj(),n=e();return ah=n,ah}var oh,Cw;function PS(){if(Cw)return oh;Cw=1;var e=Fj(),n=Z0();function t(r,a){return r&&e(r,a,n)}return oh=t,oh}var ih,Nw;function qj(){if(Nw)return ih;Nw=1;var e=Xp();function n(t,r){return function(a,i){if(a==null)return a;if(!e(a))return t(a,i);for(var p=a.length,s=r?p:-1,c=Object(a);(r?s--:++s<p)&&i(c[s],s,c)!==!1;);return a}}return ih=n,ih}var uh,Rw;function Ey(){if(Rw)return uh;Rw=1;var e=PS(),n=qj(),t=n(e);return uh=t,uh}var ph,kw;function WS(){if(kw)return ph;kw=1;var e=Ey(),n=Xp();function t(r,a){var i=-1,p=n(r)?Array(r.length):[];return e(r,function(s,c,f){p[++i]=a(s,c,f)}),p}return ph=t,ph}var sh,Ew;function zj(){if(Ew)return sh;Ew=1;function e(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}return sh=e,sh}var lh,Tw;function Uj(){if(Tw)return lh;Tw=1;var e=Ki();function n(t,r){if(t!==r){var a=t!==void 0,i=t===null,p=t===t,s=e(t),c=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!s&&t>r||s&&c&&m&&!f&&!d||i&&c&&m||!a&&m||!p)return 1;if(!i&&!s&&!d&&t<r||d&&a&&p&&!i&&!s||f&&a&&p||!c&&p||!m)return-1}return 0}return lh=n,lh}var ch,jw;function Vj(){if(jw)return ch;jw=1;var e=Uj();function n(t,r,a){for(var i=-1,p=t.criteria,s=r.criteria,c=p.length,f=a.length;++i<c;){var m=e(p[i],s[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return t.index-r.index}return ch=n,ch}var fh,Dw;function Gj(){if(Dw)return fh;Dw=1;var e=wy(),n=Py(),t=Mr(),r=WS(),a=zj(),i=dS(),p=Vj(),s=Xi(),c=bt();function f(m,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return n(b,I.length===1?I[0]:I)}:I}):d=[s];var y=-1;d=e(d,i(t));var B=r(m,function(I,b,W){var S=e(d,function(M){return M(I)});return{criteria:S,index:++y,value:I}});return a(B,function(I,b){return p(I,b,v)})}return fh=f,fh}var dh,$w;function Kj(){if($w)return dh;$w=1;function e(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}return dh=e,dh}var mh,Lw;function Qj(){if(Lw)return mh;Lw=1;var e=Kj(),n=Math.max;function t(r,a,i){return a=n(a===void 0?r.length-1:a,0),function(){for(var p=arguments,s=-1,c=n(p.length-a,0),f=Array(c);++s<c;)f[s]=p[a+s];s=-1;for(var m=Array(a+1);++s<a;)m[s]=p[s];return m[a]=i(f),e(r,this,m)}}return mh=t,mh}var hh,Fw;function Yj(){if(Fw)return hh;Fw=1;function e(n){return function(){return n}}return hh=e,hh}var vh,qw;function SS(){if(qw)return vh;qw=1;var e=xo(),n=(function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch{}})();return vh=n,vh}var gh,zw;function Xj(){if(zw)return gh;zw=1;var e=Yj(),n=SS(),t=Xi(),r=n?function(a,i){return n(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:t;return gh=r,gh}var yh,Uw;function Zj(){if(Uw)return yh;Uw=1;var e=800,n=16,t=Date.now;function r(a){var i=0,p=0;return function(){var s=t(),c=n-(s-p);if(p=s,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return yh=r,yh}var bh,Vw;function Jj(){if(Vw)return bh;Vw=1;var e=Xj(),n=Zj(),t=n(e);return bh=t,bh}var Ih,Gw;function eD(){if(Gw)return Ih;Gw=1;var e=Xi(),n=Qj(),t=Jj();function r(a,i){return t(n(a,i,e),a+"")}return Ih=r,Ih}var Bh,Kw;function ec(){if(Kw)return Bh;Kw=1;var e=Iy(),n=Xp(),t=Ny(),r=ja();function a(i,p,s){if(!r(s))return!1;var c=typeof p;return(c=="number"?n(s)&&t(p,s.length):c=="string"&&p in s)?e(s[p],i):!1}return Bh=a,Bh}var xh,Qw;function nD(){if(Qw)return xh;Qw=1;var e=wS(),n=Gj(),t=eD(),r=ec(),a=t(function(i,p){if(i==null)return[];var s=p.length;return s>1&&r(i,p[0],p[1])?p=[]:s>2&&r(p[0],p[1],p[2])&&(p=[p[0]]),n(i,e(p,1),[])});return xh=a,xh}var tD=nD();const Ty=Xe(tD);function vp(e){"@babel/helpers - typeof";return vp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vp(e)}function Jv(){return Jv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jv.apply(this,arguments)}function rD(e,n){return uD(e)||iD(e,n)||oD(e,n)||aD()}function aD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oD(e,n){if(e){if(typeof e=="string")return Yw(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yw(e,n)}}function Yw(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function iD(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function uD(e){if(Array.isArray(e))return e}function Xw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wh(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Xw(Object(t),!0).forEach(function(r){pD(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function pD(e,n,t){return n=sD(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sD(e){var n=lD(e,"string");return vp(n)=="symbol"?n:n+""}function lD(e,n){if(vp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function cD(e){return Array.isArray(e)&&Tn(e[0])&&Tn(e[1])?e.join(" ~ "):e}var fD=function(n){var t=n.separator,r=t===void 0?" : ":t,a=n.contentStyle,i=a===void 0?{}:a,p=n.itemStyle,s=p===void 0?{}:p,c=n.labelStyle,f=c===void 0?{}:c,m=n.payload,d=n.formatter,v=n.itemSorter,y=n.wrapperClassName,B=n.labelClassName,I=n.label,b=n.labelFormatter,W=n.accessibilityLayer,S=W===void 0?!1:W,M=function(){if(m&&m.length){var R={padding:0,margin:0},F=(v?Ty(m,v):m).map(function(V,G){if(V.type==="none")return null;var Y=wh({display:"block",paddingTop:4,paddingBottom:4,color:V.color||"#000"},s),Q=V.formatter||d||cD,$=V.value,K=V.name,ne=$,T=K;if(Q&&ne!=null&&T!=null){var L=Q($,K,V,G,m);if(Array.isArray(L)){var Z=rD(L,2);ne=Z[0],T=Z[1]}else ne=L}return E.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:Y},Tn(T)?E.createElement("span",{className:"recharts-tooltip-item-name"},T):null,Tn(T)?E.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,E.createElement("span",{className:"recharts-tooltip-item-value"},ne),E.createElement("span",{className:"recharts-tooltip-item-unit"},V.unit||""))});return E.createElement("ul",{className:"recharts-tooltip-item-list",style:R},F)}return null},O=wh({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=wh({margin:0},f),A=!ke(I),N=A?I:"",P=De("recharts-default-tooltip",y),H=De("recharts-tooltip-label",B);A&&b&&m!==void 0&&m!==null&&(N=b(I,m));var k=S?{role:"status","aria-live":"assertive"}:{};return E.createElement("div",Jv({className:P,style:O},k),E.createElement("p",{className:H,style:w},E.isValidElement(N)?N:"".concat(N)),M())};function gp(e){"@babel/helpers - typeof";return gp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gp(e)}function gl(e,n,t){return n=dD(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dD(e){var n=mD(e,"string");return gp(n)=="symbol"?n:n+""}function mD(e,n){if(gp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Uu="recharts-tooltip-wrapper",hD={visibility:"hidden"};function vD(e){var n=e.coordinate,t=e.translateX,r=e.translateY;return De(Uu,gl(gl(gl(gl({},"".concat(Uu,"-right"),ce(t)&&n&&ce(n.x)&&t>=n.x),"".concat(Uu,"-left"),ce(t)&&n&&ce(n.x)&&t<n.x),"".concat(Uu,"-bottom"),ce(r)&&n&&ce(n.y)&&r>=n.y),"".concat(Uu,"-top"),ce(r)&&n&&ce(n.y)&&r<n.y))}function Zw(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,p=e.reverseDirection,s=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&ce(i[r]))return i[r];var m=t[r]-s-a,d=t[r]+a;if(n[r])return p[r]?m:d;if(p[r]){var v=m,y=c[r];return v<y?Math.max(d,c[r]):Math.max(m,c[r])}var B=d+s,I=c[r]+f;return B>I?Math.max(m,c[r]):Math.max(d,c[r])}function gD(e){var n=e.translateX,t=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(n,"px, ").concat(t,"px, 0)"):"translate(".concat(n,"px, ").concat(t,"px)")}}function yD(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,p=e.tooltipBox,s=e.useTranslate3d,c=e.viewBox,f,m,d;return p.height>0&&p.width>0&&t?(m=Zw({allowEscapeViewBox:n,coordinate:t,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:p.width,viewBox:c,viewBoxDimension:c.width}),d=Zw({allowEscapeViewBox:n,coordinate:t,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:p.height,viewBox:c,viewBoxDimension:c.height}),f=gD({translateX:m,translateY:d,useTranslate3d:s})):f=hD,{cssProperties:f,cssClasses:vD({translateX:m,translateY:d,coordinate:t})}}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yi(e)}function Jw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function eP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Jw(Object(t),!0).forEach(function(r){ng(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Jw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function bD(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ID(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AS(r.key),r)}}function BD(e,n,t){return n&&ID(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xD(e,n,t){return n=zl(n),wD(e,MS()?Reflect.construct(n,t||[],zl(e).constructor):n.apply(e,t))}function wD(e,n){if(n&&(yi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PD(e)}function PD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function MS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(MS=function(){return!!e})()}function zl(e){return zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zl(e)}function WD(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&eg(e,n)}function eg(e,n){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(e,n)}function ng(e,n,t){return n=AS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function AS(e){var n=SD(e,"string");return yi(n)=="symbol"?n:n+""}function SD(e,n){if(yi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nP=1,MD=(function(e){function n(){var t;bD(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=xD(this,n,[].concat(a)),ng(t,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),ng(t,"handleKeyDown",function(p){if(p.key==="Escape"){var s,c,f,m;t.setState({dismissed:!0,dismissedAtCoordinate:{x:(s=(c=t.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&s!==void 0?s:0,y:(f=(m=t.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),t}return WD(n,e),BD(n,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>nP||Math.abs(r.height-this.state.lastBoundingBox.height)>nP)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,p=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,B=a.position,I=a.reverseDirection,b=a.useTranslate3d,W=a.viewBox,S=a.wrapperStyle,M=yD({allowEscapeViewBox:p,coordinate:m,offsetTopLeft:y,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:W}),O=M.cssClasses,w=M.cssProperties,A=eP(eP({transition:v&&i?"transform ".concat(s,"ms ").concat(c):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},S);return E.createElement("div",{tabIndex:-1,className:O,style:A,ref:function(P){r.wrapperNode=P}},f)}}])})(U.PureComponent),AD=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:AD()};function bi(e){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bi(e)}function tP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tP(Object(t),!0).forEach(function(r){jy(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _D(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function OD(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OS(r.key),r)}}function HD(e,n,t){return n&&OD(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function CD(e,n,t){return n=Ul(n),ND(e,_S()?Reflect.construct(n,t||[],Ul(e).constructor):n.apply(e,t))}function ND(e,n){if(n&&(bi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return RD(e)}function RD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_S=function(){return!!e})()}function Ul(e){return Ul=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ul(e)}function kD(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&tg(e,n)}function tg(e,n){return tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},tg(e,n)}function jy(e,n,t){return n=OS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function OS(e){var n=ED(e,"string");return bi(n)=="symbol"?n:n+""}function ED(e,n){if(bi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function TD(e){return e.dataKey}function jD(e,n){return E.isValidElement(e)?E.cloneElement(e,n):typeof e=="function"?E.createElement(e,n):E.createElement(fD,n)}var Mt=(function(e){function n(){return _D(this,n),CD(this,n,arguments)}return kD(n,e),HD(n,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,p=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,B=a.payload,I=a.payloadUniqBy,b=a.position,W=a.reverseDirection,S=a.useTranslate3d,M=a.viewBox,O=a.wrapperStyle,w=B??[];d&&w.length&&(w=IS(B.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,TD));var A=w.length>0;return E.createElement(MD,{allowEscapeViewBox:p,animationDuration:s,animationEasing:c,isAnimationActive:v,active:i,coordinate:m,hasPayload:A,offset:y,position:b,reverseDirection:W,useTranslate3d:S,viewBox:M,wrapperStyle:O},jD(f,rP(rP({},this.props),{},{payload:w})))}}])})(U.PureComponent);jy(Mt,"displayName","Tooltip");jy(Mt,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Ph,aP;function DD(){if(aP)return Ph;aP=1;var e=Sr(),n=function(){return e.Date.now()};return Ph=n,Ph}var Wh,oP;function $D(){if(oP)return Wh;oP=1;var e=/\s/;function n(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}return Wh=n,Wh}var Sh,iP;function LD(){if(iP)return Sh;iP=1;var e=$D(),n=/^\s+/;function t(r){return r&&r.slice(0,e(r)+1).replace(n,"")}return Sh=t,Sh}var Mh,uP;function HS(){if(uP)return Mh;uP=1;var e=LD(),n=ja(),t=Ki(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,p=/^0o[0-7]+$/i,s=parseInt;function c(f){if(typeof f=="number")return f;if(t(f))return r;if(n(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=n(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||p.test(f)?s(f.slice(2),d?2:8):a.test(f)?r:+f}return Mh=c,Mh}var Ah,pP;function FD(){if(pP)return Ah;pP=1;var e=ja(),n=DD(),t=HS(),r="Expected a function",a=Math.max,i=Math.min;function p(s,c,f){var m,d,v,y,B,I,b=0,W=!1,S=!1,M=!0;if(typeof s!="function")throw new TypeError(r);c=t(c)||0,e(f)&&(W=!!f.leading,S="maxWait"in f,v=S?a(t(f.maxWait)||0,c):v,M="trailing"in f?!!f.trailing:M);function O(F){var V=m,G=d;return m=d=void 0,b=F,y=s.apply(G,V),y}function w(F){return b=F,B=setTimeout(P,c),W?O(F):y}function A(F){var V=F-I,G=F-b,Y=c-V;return S?i(Y,v-G):Y}function N(F){var V=F-I,G=F-b;return I===void 0||V>=c||V<0||S&&G>=v}function P(){var F=n();if(N(F))return H(F);B=setTimeout(P,A(F))}function H(F){return B=void 0,M&&m?O(F):(m=d=void 0,y)}function k(){B!==void 0&&clearTimeout(B),b=0,m=I=d=B=void 0}function j(){return B===void 0?y:H(n())}function R(){var F=n(),V=N(F);if(m=arguments,d=this,I=F,V){if(B===void 0)return w(I);if(S)return clearTimeout(B),B=setTimeout(P,c),O(I)}return B===void 0&&(B=setTimeout(P,c)),y}return R.cancel=k,R.flush=j,R}return Ah=p,Ah}var _h,sP;function qD(){if(sP)return _h;sP=1;var e=FD(),n=ja(),t="Expected a function";function r(a,i,p){var s=!0,c=!0;if(typeof a!="function")throw new TypeError(t);return n(p)&&(s="leading"in p?!!p.leading:s,c="trailing"in p?!!p.trailing:c),e(a,i,{leading:s,maxWait:i,trailing:c})}return _h=r,_h}var zD=qD();const CS=Xe(zD);function yp(e){"@babel/helpers - typeof";return yp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yp(e)}function lP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function yl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lP(Object(t),!0).forEach(function(r){UD(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function UD(e,n,t){return n=VD(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function VD(e){var n=GD(e,"string");return yp(n)=="symbol"?n:n+""}function GD(e,n){if(yp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function KD(e,n){return ZD(e)||XD(e,n)||YD(e,n)||QD()}function QD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YD(e,n){if(e){if(typeof e=="string")return cP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return cP(e,n)}}function cP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function XD(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function ZD(e){if(Array.isArray(e))return e}var Dy=U.forwardRef(function(e,n){var t=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,p=i===void 0?"100%":i,s=e.height,c=s===void 0?"100%":s,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,B=e.debounce,I=B===void 0?0:B,b=e.id,W=e.className,S=e.onResize,M=e.style,O=M===void 0?{}:M,w=U.useRef(null),A=U.useRef();A.current=S,U.useImperativeHandle(n,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var N=U.useState({containerWidth:a.width,containerHeight:a.height}),P=KD(N,2),H=P[0],k=P[1],j=U.useCallback(function(F,V){k(function(G){var Y=Math.round(F),Q=Math.round(V);return G.containerWidth===Y&&G.containerHeight===Q?G:{containerWidth:Y,containerHeight:Q}})},[]);U.useEffect(function(){var F=function(K){var ne,T=K[0].contentRect,L=T.width,Z=T.height;j(L,Z),(ne=A.current)===null||ne===void 0||ne.call(A,L,Z)};I>0&&(F=CS(F,I,{trailing:!0,leading:!1}));var V=new ResizeObserver(F),G=w.current.getBoundingClientRect(),Y=G.width,Q=G.height;return j(Y,Q),V.observe(w.current),function(){V.disconnect()}},[j,I]);var R=U.useMemo(function(){var F=H.containerWidth,V=H.containerHeight;if(F<0||V<0)return null;sr(lo(p)||lo(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,p,c),sr(!t||t>0,"The aspect(%s) must be greater than zero.",t);var G=lo(p)?F:p,Y=lo(c)?V:c;t&&t>0&&(G?Y=G/t:Y&&(G=Y*t),v&&Y>v&&(Y=v)),sr(G>0||Y>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,G,Y,p,c,m,d,t);var Q=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return E.Children.map(y,function($){return E.isValidElement($)?U.cloneElement($,yl({width:G,height:Y},Q?{style:yl({height:"100%",width:"100%",maxHeight:Y,maxWidth:G},$.props.style)}:{})):$})},[t,y,c,v,d,m,H,p]);return E.createElement("div",{id:b?"".concat(b):void 0,className:De("recharts-responsive-container",W),style:yl(yl({},O),{},{width:p,height:c,minWidth:m,minHeight:d,maxHeight:v}),ref:w},R)}),Zp=function(n){return null};Zp.displayName="Cell";function bp(e){"@babel/helpers - typeof";return bp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bp(e)}function fP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rg(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?fP(Object(t),!0).forEach(function(r){JD(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function JD(e,n,t){return n=e$(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function e$(e){var n=n$(e,"string");return bp(n)=="symbol"?n:n+""}function n$(e,n){if(bp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ei={widthCache:{},cacheCount:0},t$=2e3,r$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},dP="recharts_measurement_span";function a$(e){var n=rg({},e);return Object.keys(n).forEach(function(t){n[t]||delete n[t]}),n}var ap=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n==null||Zr.isSsr)return{width:0,height:0};var r=a$(t),a=JSON.stringify({text:n,copyStyle:r});if(ei.widthCache[a])return ei.widthCache[a];try{var i=document.getElementById(dP);i||(i=document.createElement("span"),i.setAttribute("id",dP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var p=rg(rg({},r$),r);Object.assign(i.style,p),i.textContent="".concat(n);var s=i.getBoundingClientRect(),c={width:s.width,height:s.height};return ei.widthCache[a]=c,++ei.cacheCount>t$&&(ei.cacheCount=0,ei.widthCache={}),c}catch{return{width:0,height:0}}},o$=function(n){return{top:n.top+window.scrollY-document.documentElement.clientTop,left:n.left+window.scrollX-document.documentElement.clientLeft}};function Ip(e){"@babel/helpers - typeof";return Ip=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ip(e)}function Vl(e,n){return s$(e)||p$(e,n)||u$(e,n)||i$()}function i$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u$(e,n){if(e){if(typeof e=="string")return mP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return mP(e,n)}}function mP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function s$(e){if(Array.isArray(e))return e}function l$(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function hP(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f$(r.key),r)}}function c$(e,n,t){return n&&hP(e.prototype,n),t&&hP(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function f$(e){var n=d$(e,"string");return Ip(n)=="symbol"?n:n+""}function d$(e,n){if(Ip(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ip(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var vP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,gP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,m$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,h$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,NS={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},v$=Object.keys(NS),oi="NaN";function g$(e,n){return e*NS[n]}var bl=(function(){function e(n,t){l$(this,e),this.num=n,this.unit=t,this.num=n,this.unit=t,Number.isNaN(n)&&(this.unit=""),t!==""&&!m$.test(t)&&(this.num=NaN,this.unit=""),v$.includes(t)&&(this.num=g$(n,t),this.unit="px")}return c$(e,[{key:"add",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num+t.num,this.unit)}},{key:"subtract",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num-t.num,this.unit)}},{key:"multiply",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num*t.num,this.unit||t.unit)}},{key:"divide",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num/t.num,this.unit||t.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(t){var r,a=(r=h$.exec(t))!==null&&r!==void 0?r:[],i=Vl(a,3),p=i[1],s=i[2];return new e(parseFloat(p),s??"")}}])})();function RS(e){if(e.includes(oi))return oi;for(var n=e;n.includes("*")||n.includes("/");){var t,r=(t=vP.exec(n))!==null&&t!==void 0?t:[],a=Vl(r,4),i=a[1],p=a[2],s=a[3],c=bl.parse(i??""),f=bl.parse(s??""),m=p==="*"?c.multiply(f):c.divide(f);if(m.isNaN())return oi;n=n.replace(vP,m.toString())}for(;n.includes("+")||/.-\d+(?:\.\d+)?/.test(n);){var d,v=(d=gP.exec(n))!==null&&d!==void 0?d:[],y=Vl(v,4),B=y[1],I=y[2],b=y[3],W=bl.parse(B??""),S=bl.parse(b??""),M=I==="+"?W.add(S):W.subtract(S);if(M.isNaN())return oi;n=n.replace(gP,M.toString())}return n}var yP=/\(([^()]*)\)/;function y$(e){for(var n=e;n.includes("(");){var t=yP.exec(n),r=Vl(t,2),a=r[1];n=n.replace(yP,RS(a))}return n}function b$(e){var n=e.replace(/\s+/g,"");return n=y$(n),n=RS(n),n}function I$(e){try{return b$(e)}catch{return oi}}function Oh(e){var n=I$(e.slice(5,-1));return n===oi?"":n}var B$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],x$=["dx","dy","angle","className","breakAll"];function ag(){return ag=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ag.apply(this,arguments)}function bP(e,n){if(e==null)return{};var t=w$(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function w$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function IP(e,n){return M$(e)||S$(e,n)||W$(e,n)||P$()}function P$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W$(e,n){if(e){if(typeof e=="string")return BP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return BP(e,n)}}function BP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function M$(e){if(Array.isArray(e))return e}var kS=/[ \f\n\r\t\v\u2028\u2029]+/,ES=function(n){var t=n.children,r=n.breakAll,a=n.style;try{var i=[];ke(t)||(r?i=t.toString().split(""):i=t.toString().split(kS));var p=i.map(function(c){return{word:c,width:ap(c,a).width}}),s=r?0:ap(" ",a).width;return{wordsWithComputedWidth:p,spaceWidth:s}}catch{return null}},A$=function(n,t,r,a,i){var p=n.maxLines,s=n.children,c=n.style,f=n.breakAll,m=ce(p),d=s,v=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G.reduce(function(Y,Q){var $=Q.word,K=Q.width,ne=Y[Y.length-1];if(ne&&(a==null||i||ne.width+K+r<Number(a)))ne.words.push($),ne.width+=K+r;else{var T={words:[$],width:K};Y.push(T)}return Y},[])},y=v(t),B=function(G){return G.reduce(function(Y,Q){return Y.width>Q.width?Y:Q})};if(!m)return y;for(var I="…",b=function(G){var Y=d.slice(0,G),Q=ES({breakAll:f,style:c,children:Y+I}).wordsWithComputedWidth,$=v(Q),K=$.length>p||B($).width>Number(a);return[K,$]},W=0,S=d.length-1,M=0,O;W<=S&&M<=d.length-1;){var w=Math.floor((W+S)/2),A=w-1,N=b(A),P=IP(N,2),H=P[0],k=P[1],j=b(w),R=IP(j,1),F=R[0];if(!H&&!F&&(W=w+1),H&&F&&(S=w-1),!H&&F){O=k;break}M++}return O||y},xP=function(n){var t=ke(n)?[]:n.toString().split(kS);return[{words:t}]},_$=function(n){var t=n.width,r=n.scaleToFit,a=n.children,i=n.style,p=n.breakAll,s=n.maxLines;if((t||r)&&!Zr.isSsr){var c,f,m=ES({breakAll:p,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;c=d,f=v}else return xP(a);return A$({breakAll:p,children:a,maxLines:s,style:i},c,f,t,r)}return xP(a)},wP="#808080",yo=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,p=n.lineHeight,s=p===void 0?"1em":p,c=n.capHeight,f=c===void 0?"0.71em":c,m=n.scaleToFit,d=m===void 0?!1:m,v=n.textAnchor,y=v===void 0?"start":v,B=n.verticalAnchor,I=B===void 0?"end":B,b=n.fill,W=b===void 0?wP:b,S=bP(n,B$),M=U.useMemo(function(){return _$({breakAll:S.breakAll,children:S.children,maxLines:S.maxLines,scaleToFit:d,style:S.style,width:S.width})},[S.breakAll,S.children,S.maxLines,d,S.style,S.width]),O=S.dx,w=S.dy,A=S.angle,N=S.className,P=S.breakAll,H=bP(S,x$);if(!Tn(r)||!Tn(i))return null;var k=r+(ce(O)?O:0),j=i+(ce(w)?w:0),R;switch(I){case"start":R=Oh("calc(".concat(f,")"));break;case"middle":R=Oh("calc(".concat((M.length-1)/2," * -").concat(s," + (").concat(f," / 2))"));break;default:R=Oh("calc(".concat(M.length-1," * -").concat(s,")"));break}var F=[];if(d){var V=M[0].width,G=S.width;F.push("scale(".concat((ce(G)?G/V:1)/V,")"))}return A&&F.push("rotate(".concat(A,", ").concat(k,", ").concat(j,")")),F.length&&(H.transform=F.join(" ")),E.createElement("text",ag({},Oe(H,!0),{x:k,y:j,className:De("recharts-text",N),textAnchor:y,fill:W.includes("url")?wP:W}),M.map(function(Y,Q){var $=Y.words.join(P?"":" ");return E.createElement("tspan",{x:k,dy:Q===0?R:s,key:"".concat($,"-").concat(Q)},$)}))};function Ha(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function O$(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function $y(e){let n,t,r;e.length!==2?(n=Ha,t=(s,c)=>Ha(e(s),c),r=(s,c)=>e(s)-c):(n=e===Ha||e===O$?e:H$,t=e,r=e);function a(s,c,f=0,m=s.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<0?f=d+1:m=d}while(f<m)}return f}function i(s,c,f=0,m=s.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<=0?f=d+1:m=d}while(f<m)}return f}function p(s,c,f=0,m=s.length){const d=a(s,c,f,m-1);return d>f&&r(s[d-1],c)>-r(s[d],c)?d-1:d}return{left:a,center:p,right:i}}function H$(){return 0}function TS(e){return e===null?NaN:+e}function*C$(e,n){for(let t of e)t!=null&&(t=+t)>=t&&(yield t)}const N$=$y(Ha),Jp=N$.right;$y(TS).center;class PP extends Map{constructor(n,t=E$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),n!=null)for(const[r,a]of n)this.set(r,a)}get(n){return super.get(WP(this,n))}has(n){return super.has(WP(this,n))}set(n,t){return super.set(R$(this,n),t)}delete(n){return super.delete(k$(this,n))}}function WP({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):t}function R$({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):(e.set(r,t),t)}function k$({_intern:e,_key:n},t){const r=n(t);return e.has(r)&&(t=e.get(r),e.delete(r)),t}function E$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function T$(e=Ha){if(e===Ha)return jS;if(typeof e!="function")throw new TypeError("compare is not a function");return(n,t)=>{const r=e(n,t);return r||r===0?r:(e(t,t)===0)-(e(n,n)===0)}}function jS(e,n){return(e==null||!(e>=e))-(n==null||!(n>=n))||(e<n?-1:e>n?1:0)}const j$=Math.sqrt(50),D$=Math.sqrt(10),$$=Math.sqrt(2);function Gl(e,n,t){const r=(n-e)/Math.max(0,t),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),p=i>=j$?10:i>=D$?5:i>=$$?2:1;let s,c,f;return a<0?(f=Math.pow(10,-a)/p,s=Math.round(e*f),c=Math.round(n*f),s/f<e&&++s,c/f>n&&--c,f=-f):(f=Math.pow(10,a)*p,s=Math.round(e/f),c=Math.round(n/f),s*f<e&&++s,c*f>n&&--c),c<s&&.5<=t&&t<2?Gl(e,n,t*2):[s,c,f]}function og(e,n,t){if(n=+n,e=+e,t=+t,!(t>0))return[];if(e===n)return[e];const r=n<e,[a,i,p]=r?Gl(n,e,t):Gl(e,n,t);if(!(i>=a))return[];const s=i-a+1,c=new Array(s);if(r)if(p<0)for(let f=0;f<s;++f)c[f]=(i-f)/-p;else for(let f=0;f<s;++f)c[f]=(i-f)*p;else if(p<0)for(let f=0;f<s;++f)c[f]=(a+f)/-p;else for(let f=0;f<s;++f)c[f]=(a+f)*p;return c}function ig(e,n,t){return n=+n,e=+e,t=+t,Gl(e,n,t)[2]}function ug(e,n,t){n=+n,e=+e,t=+t;const r=n<e,a=r?ig(n,e,t):ig(e,n,t);return(r?-1:1)*(a<0?1/-a:a)}function SP(e,n){let t;for(const r of e)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);return t}function MP(e,n){let t;for(const r of e)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);return t}function DS(e,n,t=0,r=1/0,a){if(n=Math.floor(n),t=Math.floor(Math.max(0,t)),r=Math.floor(Math.min(e.length-1,r)),!(t<=n&&n<=r))return e;for(a=a===void 0?jS:T$(a);r>t;){if(r-t>600){const c=r-t+1,f=n-t+1,m=Math.log(c),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(t,Math.floor(n-f*d/c+v)),B=Math.min(r,Math.floor(n+(c-f)*d/c+v));DS(e,n,y,B,a)}const i=e[n];let p=t,s=r;for(Vu(e,t,n),a(e[r],i)>0&&Vu(e,t,r);p<s;){for(Vu(e,p,s),++p,--s;a(e[p],i)<0;)++p;for(;a(e[s],i)>0;)--s}a(e[t],i)===0?Vu(e,t,s):(++s,Vu(e,s,r)),s<=n&&(t=s+1),n<=s&&(r=s-1)}return e}function Vu(e,n,t){const r=e[n];e[n]=e[t],e[t]=r}function L$(e,n,t){if(e=Float64Array.from(C$(e)),!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return MP(e);if(n>=1)return SP(e);var r,a=(r-1)*n,i=Math.floor(a),p=SP(DS(e,i).subarray(0,i+1)),s=MP(e.subarray(i+1));return p+(s-p)*(a-i)}}function F$(e,n,t=TS){if(!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return+t(e[0],0,e);if(n>=1)return+t(e[r-1],r-1,e);var r,a=(r-1)*n,i=Math.floor(a),p=+t(e[i],i,e),s=+t(e[i+1],i+1,e);return p+(s-p)*(a-i)}}function q$(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=Math.max(0,Math.ceil((n-e)/t))|0,i=new Array(a);++r<a;)i[r]=e+r*t;return i}function Yt(e,n){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(n).domain(e);break}return this}function Jr(e,n){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof n=="function"?this.interpolator(n):this.range(n);break}}return this}const pg=Symbol("implicit");function Ly(){var e=new PP,n=[],t=[],r=pg;function a(i){let p=e.get(i);if(p===void 0){if(r!==pg)return r;e.set(i,p=n.push(i)-1)}return t[p%t.length]}return a.domain=function(i){if(!arguments.length)return n.slice();n=[],e=new PP;for(const p of i)e.has(p)||e.set(p,n.push(p)-1);return a},a.range=function(i){return arguments.length?(t=Array.from(i),a):t.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Ly(n,t).unknown(r)},Yt.apply(a,arguments),a}function Bp(){var e=Ly().unknown(void 0),n=e.domain,t=e.range,r=0,a=1,i,p,s=!1,c=0,f=0,m=.5;delete e.unknown;function d(){var v=n().length,y=a<r,B=y?a:r,I=y?r:a;i=(I-B)/Math.max(1,v-c+f*2),s&&(i=Math.floor(i)),B+=(I-B-i*(v-c))*m,p=i*(1-c),s&&(B=Math.round(B),p=Math.round(p));var b=q$(v).map(function(W){return B+i*W});return t(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(n(v),d()):n()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,s=!0,d()},e.bandwidth=function(){return p},e.step=function(){return i},e.round=function(v){return arguments.length?(s=!!v,d()):s},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return Bp(n(),[r,a]).round(s).paddingInner(c).paddingOuter(f).align(m)},Yt.apply(d(),arguments)}function $S(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return $S(n())},e}function op(){return $S(Bp.apply(null,arguments).paddingInner(1))}function Fy(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function LS(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function es(){}var xp=.7,Kl=1/xp,ci="\\s*([+-]?\\d+)\\s*",wp="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",z$=/^#([0-9a-f]{3,8})$/,U$=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),V$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),G$=new RegExp(`^rgba\\(${ci},${ci},${ci},${wp}\\)$`),K$=new RegExp(`^rgba\\(${xr},${xr},${xr},${wp}\\)$`),Q$=new RegExp(`^hsl\\(${wp},${xr},${xr}\\)$`),Y$=new RegExp(`^hsla\\(${wp},${xr},${xr},${wp}\\)$`),AP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Fy(es,Pp,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:_P,formatHex:_P,formatHex8:X$,formatHsl:Z$,formatRgb:OP,toString:OP});function _P(){return this.rgb().formatHex()}function X$(){return this.rgb().formatHex8()}function Z$(){return FS(this).formatHsl()}function OP(){return this.rgb().formatRgb()}function Pp(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=z$.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?HP(n):t===3?new yt(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?Il(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?Il(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=U$.exec(e))?new yt(n[1],n[2],n[3],1):(n=V$.exec(e))?new yt(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=G$.exec(e))?Il(n[1],n[2],n[3],n[4]):(n=K$.exec(e))?Il(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Q$.exec(e))?RP(n[1],n[2]/100,n[3]/100,1):(n=Y$.exec(e))?RP(n[1],n[2]/100,n[3]/100,n[4]):AP.hasOwnProperty(e)?HP(AP[e]):e==="transparent"?new yt(NaN,NaN,NaN,0):null}function HP(e){return new yt(e>>16&255,e>>8&255,e&255,1)}function Il(e,n,t,r){return r<=0&&(e=n=t=NaN),new yt(e,n,t,r)}function J$(e){return e instanceof es||(e=Pp(e)),e?(e=e.rgb(),new yt(e.r,e.g,e.b,e.opacity)):new yt}function sg(e,n,t,r){return arguments.length===1?J$(e):new yt(e,n,t,r??1)}function yt(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Fy(yt,sg,LS(es,{brighter(e){return e=e==null?Kl:Math.pow(Kl,e),new yt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?xp:Math.pow(xp,e),new yt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new yt(vo(this.r),vo(this.g),vo(this.b),Ql(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:CP,formatHex:CP,formatHex8:e8,formatRgb:NP,toString:NP}));function CP(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function e8(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function NP(){const e=Ql(this.opacity);return`${e===1?"rgb(":"rgba("}${vo(this.r)}, ${vo(this.g)}, ${vo(this.b)}${e===1?")":`, ${e})`}`}function Ql(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function vo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=vo(e),(e<16?"0":"")+e.toString(16)}function RP(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new pr(e,n,t,r)}function FS(e){if(e instanceof pr)return new pr(e.h,e.s,e.l,e.opacity);if(e instanceof es||(e=Pp(e)),!e)return new pr;if(e instanceof pr)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),i=Math.max(n,t,r),p=NaN,s=i-a,c=(i+a)/2;return s?(n===i?p=(t-r)/s+(t<r)*6:t===i?p=(r-n)/s+2:p=(n-t)/s+4,s/=c<.5?i+a:2-i-a,p*=60):s=c>0&&c<1?0:p,new pr(p,s,c,e.opacity)}function n8(e,n,t,r){return arguments.length===1?FS(e):new pr(e,n,t,r??1)}function pr(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Fy(pr,n8,LS(es,{brighter(e){return e=e==null?Kl:Math.pow(Kl,e),new pr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?xp:Math.pow(xp,e),new pr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new yt(Hh(e>=240?e-240:e+120,a,r),Hh(e,a,r),Hh(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new pr(kP(this.h),Bl(this.s),Bl(this.l),Ql(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ql(this.opacity);return`${e===1?"hsl(":"hsla("}${kP(this.h)}, ${Bl(this.s)*100}%, ${Bl(this.l)*100}%${e===1?")":`, ${e})`}`}}));function kP(e){return e=(e||0)%360,e<0?e+360:e}function Bl(e){return Math.max(0,Math.min(1,e||0))}function Hh(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const qy=e=>()=>e;function t8(e,n){return function(t){return e+t*n}}function r8(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function a8(e){return(e=+e)==1?qS:function(n,t){return t-n?r8(n,t,e):qy(isNaN(n)?t:n)}}function qS(e,n){var t=n-e;return t?t8(e,t):qy(isNaN(e)?n:e)}const EP=(function e(n){var t=a8(n);function r(a,i){var p=t((a=sg(a)).r,(i=sg(i)).r),s=t(a.g,i.g),c=t(a.b,i.b),f=qS(a.opacity,i.opacity);return function(m){return a.r=p(m),a.g=s(m),a.b=c(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function o8(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),a;return function(i){for(a=0;a<t;++a)r[a]=e[a]*(1-i)+n[a]*i;return r}}function i8(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function u8(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,a=new Array(r),i=new Array(t),p;for(p=0;p<r;++p)a[p]=Zi(e[p],n[p]);for(;p<t;++p)i[p]=n[p];return function(s){for(p=0;p<r;++p)i[p]=a[p](s);return i}}function p8(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function Yl(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function s8(e,n){var t={},r={},a;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(a in n)a in e?t[a]=Zi(e[a],n[a]):r[a]=n[a];return function(i){for(a in t)r[a]=t[a](i);return r}}var lg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ch=new RegExp(lg.source,"g");function l8(e){return function(){return e}}function c8(e){return function(n){return e(n)+""}}function f8(e,n){var t=lg.lastIndex=Ch.lastIndex=0,r,a,i,p=-1,s=[],c=[];for(e=e+"",n=n+"";(r=lg.exec(e))&&(a=Ch.exec(n));)(i=a.index)>t&&(i=n.slice(t,i),s[p]?s[p]+=i:s[++p]=i),(r=r[0])===(a=a[0])?s[p]?s[p]+=a:s[++p]=a:(s[++p]=null,c.push({i:p,x:Yl(r,a)})),t=Ch.lastIndex;return t<n.length&&(i=n.slice(t),s[p]?s[p]+=i:s[++p]=i),s.length<2?c[0]?c8(c[0].x):l8(n):(n=c.length,function(f){for(var m=0,d;m<n;++m)s[(d=c[m]).i]=d.x(f);return s.join("")})}function Zi(e,n){var t=typeof n,r;return n==null||t==="boolean"?qy(n):(t==="number"?Yl:t==="string"?(r=Pp(n))?(n=r,EP):f8:n instanceof Pp?EP:n instanceof Date?p8:i8(n)?o8:Array.isArray(n)?u8:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?s8:Yl)(e,n)}function zy(e,n){return e=+e,n=+n,function(t){return Math.round(e*(1-t)+n*t)}}function d8(e,n){n===void 0&&(n=e,e=Zi);for(var t=0,r=n.length-1,a=n[0],i=new Array(r<0?0:r);t<r;)i[t]=e(a,a=n[++t]);return function(p){var s=Math.max(0,Math.min(r-1,Math.floor(p*=r)));return i[s](p-s)}}function m8(e){return function(){return e}}function Xl(e){return+e}var TP=[0,1];function ut(e){return e}function cg(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:m8(isNaN(n)?NaN:.5)}function h8(e,n){var t;return e>n&&(t=e,e=n,n=t),function(r){return Math.max(e,Math.min(n,r))}}function v8(e,n,t){var r=e[0],a=e[1],i=n[0],p=n[1];return a<r?(r=cg(a,r),i=t(p,i)):(r=cg(r,a),i=t(i,p)),function(s){return i(r(s))}}function g8(e,n,t){var r=Math.min(e.length,n.length)-1,a=new Array(r),i=new Array(r),p=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),n=n.slice().reverse());++p<r;)a[p]=cg(e[p],e[p+1]),i[p]=t(n[p],n[p+1]);return function(s){var c=Jp(e,s,1,r)-1;return i[c](a[c](s))}}function ns(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function nc(){var e=TP,n=TP,t=Zi,r,a,i,p=ut,s,c,f;function m(){var v=Math.min(e.length,n.length);return p!==ut&&(p=h8(e[0],e[v-1])),s=v>2?g8:v8,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=s(e.map(r),n,t)))(r(p(v)))}return d.invert=function(v){return p(a((f||(f=s(n,e.map(r),Yl)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Xl),m()):e.slice()},d.range=function(v){return arguments.length?(n=Array.from(v),m()):n.slice()},d.rangeRound=function(v){return n=Array.from(v),t=zy,m()},d.clamp=function(v){return arguments.length?(p=v?!0:ut,m()):p!==ut},d.interpolate=function(v){return arguments.length?(t=v,m()):t},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,m()}}function Uy(){return nc()(ut,ut)}function y8(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Zl(e,n){if(!isFinite(e)||e===0)return null;var t=(e=n?e.toExponential(n-1):e.toExponential()).indexOf("e"),r=e.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+e.slice(t+1)]}function Ii(e){return e=Zl(Math.abs(e)),e?e[1]:NaN}function b8(e,n){return function(t,r){for(var a=t.length,i=[],p=0,s=e[0],c=0;a>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),i.push(t.substring(a-=s,a+s)),!((c+=s+1)>r));)s=e[p=(p+1)%e.length];return i.reverse().join(n)}}function I8(e){return function(n){return n.replace(/[0-9]/g,function(t){return e[+t]})}}var B8=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Wp(e){if(!(n=B8.exec(e)))throw new Error("invalid format: "+e);var n;return new Vy({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}Wp.prototype=Vy.prototype;function Vy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Vy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function x8(e){e:for(var n=e.length,t=1,r=-1,a;t<n;++t)switch(e[t]){case".":r=a=t;break;case"0":r===0&&(r=t),a=t;break;default:if(!+e[t])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Jl;function w8(e,n){var t=Zl(e,n);if(!t)return Jl=void 0,e.toPrecision(n);var r=t[0],a=t[1],i=a-(Jl=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,p=r.length;return i===p?r:i>p?r+new Array(i-p+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Zl(e,Math.max(0,n+i-1))[0]}function jP(e,n){var t=Zl(e,n);if(!t)return e+"";var r=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const DP={"%":(e,n)=>(e*100).toFixed(n),b:e=>Math.round(e).toString(2),c:e=>e+"",d:y8,e:(e,n)=>e.toExponential(n),f:(e,n)=>e.toFixed(n),g:(e,n)=>e.toPrecision(n),o:e=>Math.round(e).toString(8),p:(e,n)=>jP(e*100,n),r:jP,s:w8,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function $P(e){return e}var LP=Array.prototype.map,FP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function P8(e){var n=e.grouping===void 0||e.thousands===void 0?$P:b8(LP.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?$P:I8(LP.call(e.numerals,String)),p=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=Wp(d);var y=d.fill,B=d.align,I=d.sign,b=d.symbol,W=d.zero,S=d.width,M=d.comma,O=d.precision,w=d.trim,A=d.type;A==="n"?(M=!0,A="g"):DP[A]||(O===void 0&&(O=12),w=!0,A="g"),(W||y==="0"&&B==="=")&&(W=!0,y="0",B="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?t:b==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(A)?p:"")+(v&&v.suffix!==void 0?v.suffix:""),H=DP[A],k=/[defgprs%]/.test(A);O=O===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function j(R){var F=N,V=P,G,Y,Q;if(A==="c")V=H(R)+V,R="";else{R=+R;var $=R<0||1/R<0;if(R=isNaN(R)?c:H(Math.abs(R),O),w&&(R=x8(R)),$&&+R==0&&I!=="+"&&($=!1),F=($?I==="("?I:s:I==="-"||I==="("?"":I)+F,V=(A==="s"&&!isNaN(R)&&Jl!==void 0?FP[8+Jl/3]:"")+V+($&&I==="("?")":""),k){for(G=-1,Y=R.length;++G<Y;)if(Q=R.charCodeAt(G),48>Q||Q>57){V=(Q===46?a+R.slice(G+1):R.slice(G))+V,R=R.slice(0,G);break}}}M&&!W&&(R=n(R,1/0));var K=F.length+R.length+V.length,ne=K<S?new Array(S-K+1).join(y):"";switch(M&&W&&(R=n(ne+R,ne.length?S-V.length:1/0),ne=""),B){case"<":R=F+R+V+ne;break;case"=":R=F+ne+R+V;break;case"^":R=ne.slice(0,K=ne.length>>1)+F+R+V+ne.slice(K);break;default:R=ne+F+R+V;break}return i(R)}return j.toString=function(){return d+""},j}function m(d,v){var y=Math.max(-8,Math.min(8,Math.floor(Ii(v)/3)))*3,B=Math.pow(10,-y),I=f((d=Wp(d),d.type="f",d),{suffix:FP[8+y/3]});return function(b){return I(B*b)}}return{format:f,formatPrefix:m}}var xl,Gy,zS;W8({thousands:",",grouping:[3],currency:["$",""]});function W8(e){return xl=P8(e),Gy=xl.format,zS=xl.formatPrefix,xl}function S8(e){return Math.max(0,-Ii(Math.abs(e)))}function M8(e,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ii(n)/3)))*3-Ii(Math.abs(e)))}function A8(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Ii(n)-Ii(e))+1}function US(e,n,t,r){var a=ug(e,n,t),i;switch(r=Wp(r??",f"),r.type){case"s":{var p=Math.max(Math.abs(e),Math.abs(n));return r.precision==null&&!isNaN(i=M8(a,p))&&(r.precision=i),zS(r,p)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=A8(a,Math.max(Math.abs(e),Math.abs(n))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=S8(a))&&(r.precision=i-(r.type==="%")*2);break}}return Gy(r)}function $a(e){var n=e.domain;return e.ticks=function(t){var r=n();return og(r[0],r[r.length-1],t??10)},e.tickFormat=function(t,r){var a=n();return US(a[0],a[a.length-1],t??10,r)},e.nice=function(t){t==null&&(t=10);var r=n(),a=0,i=r.length-1,p=r[a],s=r[i],c,f,m=10;for(s<p&&(f=p,p=s,s=f,f=a,a=i,i=f);m-- >0;){if(f=ig(p,s,t),f===c)return r[a]=p,r[i]=s,n(r);if(f>0)p=Math.floor(p/f)*f,s=Math.ceil(s/f)*f;else if(f<0)p=Math.ceil(p*f)/f,s=Math.floor(s*f)/f;else break;c=f}return e},e}function e0(){var e=Uy();return e.copy=function(){return ns(e,e0())},Yt.apply(e,arguments),$a(e)}function VS(e){var n;function t(r){return r==null||isNaN(r=+r)?n:r}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(e=Array.from(r,Xl),t):e.slice()},t.unknown=function(r){return arguments.length?(n=r,t):n},t.copy=function(){return VS(e).unknown(n)},e=arguments.length?Array.from(e,Xl):[0,1],$a(t)}function GS(e,n){e=e.slice();var t=0,r=e.length-1,a=e[t],i=e[r],p;return i<a&&(p=t,t=r,r=p,p=a,a=i,i=p),e[t]=n.floor(a),e[r]=n.ceil(i),e}function qP(e){return Math.log(e)}function zP(e){return Math.exp(e)}function _8(e){return-Math.log(-e)}function O8(e){return-Math.exp(-e)}function H8(e){return isFinite(e)?+("1e"+e):e<0?0:e}function C8(e){return e===10?H8:e===Math.E?Math.exp:n=>Math.pow(e,n)}function N8(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),n=>Math.log(n)/e)}function UP(e){return(n,t)=>-e(-n,t)}function Ky(e){const n=e(qP,zP),t=n.domain;let r=10,a,i;function p(){return a=N8(r),i=C8(r),t()[0]<0?(a=UP(a),i=UP(i),e(_8,O8)):e(qP,zP),n}return n.base=function(s){return arguments.length?(r=+s,p()):r},n.domain=function(s){return arguments.length?(t(s),p()):t()},n.ticks=s=>{const c=t();let f=c[0],m=c[c.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),y=a(m),B,I;const b=s==null?10:+s;let W=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(B=1;B<r;++B)if(I=v<0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}}else for(;v<=y;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}W.length*2<b&&(W=og(f,m,b))}else W=og(v,y,Math.min(y-v,b)).map(i);return d?W.reverse():W},n.tickFormat=(s,c)=>{if(s==null&&(s=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Wp(c)).precision==null&&(c.trim=!0),c=Gy(c)),s===1/0)return c;const f=Math.max(1,r*s/n.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?c(m):""}},n.nice=()=>t(GS(t(),{floor:s=>i(Math.floor(a(s))),ceil:s=>i(Math.ceil(a(s)))})),n}function KS(){const e=Ky(nc()).domain([1,10]);return e.copy=()=>ns(e,KS()).base(e.base()),Yt.apply(e,arguments),e}function VP(e){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/e))}}function GP(e){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*e}}function Qy(e){var n=1,t=e(VP(n),GP(n));return t.constant=function(r){return arguments.length?e(VP(n=+r),GP(n)):n},$a(t)}function QS(){var e=Qy(nc());return e.copy=function(){return ns(e,QS()).constant(e.constant())},Yt.apply(e,arguments)}function KP(e){return function(n){return n<0?-Math.pow(-n,e):Math.pow(n,e)}}function R8(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function k8(e){return e<0?-e*e:e*e}function Yy(e){var n=e(ut,ut),t=1;function r(){return t===1?e(ut,ut):t===.5?e(R8,k8):e(KP(t),KP(1/t))}return n.exponent=function(a){return arguments.length?(t=+a,r()):t},$a(n)}function Xy(){var e=Yy(nc());return e.copy=function(){return ns(e,Xy()).exponent(e.exponent())},Yt.apply(e,arguments),e}function E8(){return Xy.apply(null,arguments).exponent(.5)}function QP(e){return Math.sign(e)*e*e}function T8(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function YS(){var e=Uy(),n=[0,1],t=!1,r;function a(i){var p=T8(e(i));return isNaN(p)?r:t?Math.round(p):p}return a.invert=function(i){return e.invert(QP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((n=Array.from(i,Xl)).map(QP)),a):n.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(t=!!i,a):t},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return YS(e.domain(),n).round(t).clamp(e.clamp()).unknown(r)},Yt.apply(a,arguments),$a(a)}function XS(){var e=[],n=[],t=[],r;function a(){var p=0,s=Math.max(1,n.length);for(t=new Array(s-1);++p<s;)t[p-1]=F$(e,p/s);return i}function i(p){return p==null||isNaN(p=+p)?r:n[Jp(t,p)]}return i.invertExtent=function(p){var s=n.indexOf(p);return s<0?[NaN,NaN]:[s>0?t[s-1]:e[0],s<t.length?t[s]:e[e.length-1]]},i.domain=function(p){if(!arguments.length)return e.slice();e=[];for(let s of p)s!=null&&!isNaN(s=+s)&&e.push(s);return e.sort(Ha),a()},i.range=function(p){return arguments.length?(n=Array.from(p),a()):n.slice()},i.unknown=function(p){return arguments.length?(r=p,i):r},i.quantiles=function(){return t.slice()},i.copy=function(){return XS().domain(e).range(n).unknown(r)},Yt.apply(i,arguments)}function ZS(){var e=0,n=1,t=1,r=[.5],a=[0,1],i;function p(c){return c!=null&&c<=c?a[Jp(r,c,0,t)]:i}function s(){var c=-1;for(r=new Array(t);++c<t;)r[c]=((c+1)*n-(c-t)*e)/(t+1);return p}return p.domain=function(c){return arguments.length?([e,n]=c,e=+e,n=+n,s()):[e,n]},p.range=function(c){return arguments.length?(t=(a=Array.from(c)).length-1,s()):a.slice()},p.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=t?[r[t-1],n]:[r[f-1],r[f]]},p.unknown=function(c){return arguments.length&&(i=c),p},p.thresholds=function(){return r.slice()},p.copy=function(){return ZS().domain([e,n]).range(a).unknown(i)},Yt.apply($a(p),arguments)}function JS(){var e=[.5],n=[0,1],t,r=1;function a(i){return i!=null&&i<=i?n[Jp(e,i,0,r)]:t}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,n.length-1),a):e.slice()},a.range=function(i){return arguments.length?(n=Array.from(i),r=Math.min(e.length,n.length-1),a):n.slice()},a.invertExtent=function(i){var p=n.indexOf(i);return[e[p-1],e[p]]},a.unknown=function(i){return arguments.length?(t=i,a):t},a.copy=function(){return JS().domain(e).range(n).unknown(t)},Yt.apply(a,arguments)}const Nh=new Date,Rh=new Date;function jn(e,n,t,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),n(i,1),e(i),i),a.round=i=>{const p=a(i),s=a.ceil(i);return i-p<s-i?p:s},a.offset=(i,p)=>(n(i=new Date(+i),p==null?1:Math.floor(p)),i),a.range=(i,p,s)=>{const c=[];if(i=a.ceil(i),s=s==null?1:Math.floor(s),!(i<p)||!(s>0))return c;let f;do c.push(f=new Date(+i)),n(i,s),e(i);while(f<i&&i<p);return c},a.filter=i=>jn(p=>{if(p>=p)for(;e(p),!i(p);)p.setTime(p-1)},(p,s)=>{if(p>=p)if(s<0)for(;++s<=0;)for(;n(p,-1),!i(p););else for(;--s>=0;)for(;n(p,1),!i(p););}),t&&(a.count=(i,p)=>(Nh.setTime(+i),Rh.setTime(+p),e(Nh),e(Rh),Math.floor(t(Nh,Rh))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?p=>r(p)%i===0:p=>a.count(0,p)%i===0):a)),a}const n0=jn(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);n0.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?jn(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):n0);n0.range;const $r=1e3,Gt=$r*60,Lr=Gt*60,Gr=Lr*24,Zy=Gr*7,YP=Gr*30,kh=Gr*365,fo=jn(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*$r)},(e,n)=>(n-e)/$r,e=>e.getUTCSeconds());fo.range;const Jy=jn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,n)=>{e.setTime(+e+n*Gt)},(e,n)=>(n-e)/Gt,e=>e.getMinutes());Jy.range;const eb=jn(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*Gt)},(e,n)=>(n-e)/Gt,e=>e.getUTCMinutes());eb.range;const nb=jn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Gt)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getHours());nb.range;const tb=jn(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getUTCHours());tb.range;const ts=jn(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*Gt)/Gr,e=>e.getDate()-1);ts.range;const tc=jn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>e.getUTCDate()-1);tc.range;const eM=jn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>Math.floor(e/Gr));eM.range;function wo(e){return jn(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Gt)/Zy)}const rc=wo(0),t0=wo(1),j8=wo(2),D8=wo(3),Bi=wo(4),$8=wo(5),L8=wo(6);rc.range;t0.range;j8.range;D8.range;Bi.range;$8.range;L8.range;function Po(e){return jn(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/Zy)}const ac=Po(0),r0=Po(1),F8=Po(2),q8=Po(3),xi=Po(4),z8=Po(5),U8=Po(6);ac.range;r0.range;F8.range;q8.range;xi.range;z8.range;U8.range;const rb=jn(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());rb.range;const ab=jn(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ab.range;const Kr=jn(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jn(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});Kr.range;const Qr=jn(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jn(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});Qr.range;function nM(e,n,t,r,a,i){const p=[[fo,1,$r],[fo,5,5*$r],[fo,15,15*$r],[fo,30,30*$r],[i,1,Gt],[i,5,5*Gt],[i,15,15*Gt],[i,30,30*Gt],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[t,1,Zy],[n,1,YP],[n,3,3*YP],[e,1,kh]];function s(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const y=d&&typeof d.range=="function"?d:c(f,m,d),B=y?y.range(f,+m+1):[];return v?B.reverse():B}function c(f,m,d){const v=Math.abs(m-f)/d,y=$y(([,,b])=>b).right(p,v);if(y===p.length)return e.every(ug(f/kh,m/kh,d));if(y===0)return n0.every(Math.max(ug(f,m,d),1));const[B,I]=p[v/p[y-1][2]<p[y][2]/v?y-1:y];return B.every(I)}return[s,c]}const[V8,G8]=nM(Qr,ab,ac,eM,tb,eb),[K8,Q8]=nM(Kr,rb,rc,ts,nb,Jy);function Eh(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Th(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Gu(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function Y8(e){var n=e.dateTime,t=e.date,r=e.time,a=e.periods,i=e.days,p=e.shortDays,s=e.months,c=e.shortMonths,f=Ku(a),m=Qu(a),d=Ku(i),v=Qu(i),y=Ku(p),B=Qu(p),I=Ku(s),b=Qu(s),W=Ku(c),S=Qu(c),M={a:Q,A:$,b:K,B:ne,c:null,d:t4,e:t4,f:bL,g:_L,G:HL,H:vL,I:gL,j:yL,L:tM,m:IL,M:BL,p:T,q:L,Q:o4,s:i4,S:xL,u:wL,U:PL,V:WL,w:SL,W:ML,x:null,X:null,y:AL,Y:OL,Z:CL,"%":a4},O={a:Z,A:se,b:he,B:Ie,c:null,d:r4,e:r4,f:EL,g:VL,G:KL,H:NL,I:RL,j:kL,L:aM,m:TL,M:jL,p:Be,q:me,Q:o4,s:i4,S:DL,u:$L,U:LL,V:FL,w:qL,W:zL,x:null,X:null,y:UL,Y:GL,Z:QL,"%":a4},w={a:k,A:j,b:R,B:F,c:V,d:e4,e:e4,f:fL,g:JP,G:ZP,H:n4,I:n4,j:pL,L:cL,m:uL,M:sL,p:H,q:iL,Q:mL,s:hL,S:lL,u:nL,U:tL,V:rL,w:eL,W:aL,x:G,X:Y,y:JP,Y:ZP,Z:oL,"%":dL};M.x=A(t,M),M.X=A(r,M),M.c=A(n,M),O.x=A(t,O),O.X=A(r,O),O.c=A(n,O);function A(ae,re){return function(ie){var J=[],ve=-1,fe=0,ye=ae.length,ge,xe,je;for(ie instanceof Date||(ie=new Date(+ie));++ve<ye;)ae.charCodeAt(ve)===37&&(J.push(ae.slice(fe,ve)),(xe=XP[ge=ae.charAt(++ve)])!=null?ge=ae.charAt(++ve):xe=ge==="e"?" ":"0",(je=re[ge])&&(ge=je(ie,xe)),J.push(ge),fe=ve+1);return J.push(ae.slice(fe,ve)),J.join("")}}function N(ae,re){return function(ie){var J=Gu(1900,void 0,1),ve=P(J,ae,ie+="",0),fe,ye;if(ve!=ie.length)return null;if("Q"in J)return new Date(J.Q);if("s"in J)return new Date(J.s*1e3+("L"in J?J.L:0));if(re&&!("Z"in J)&&(J.Z=0),"p"in J&&(J.H=J.H%12+J.p*12),J.m===void 0&&(J.m="q"in J?J.q:0),"V"in J){if(J.V<1||J.V>53)return null;"w"in J||(J.w=1),"Z"in J?(fe=Th(Gu(J.y,0,1)),ye=fe.getUTCDay(),fe=ye>4||ye===0?r0.ceil(fe):r0(fe),fe=tc.offset(fe,(J.V-1)*7),J.y=fe.getUTCFullYear(),J.m=fe.getUTCMonth(),J.d=fe.getUTCDate()+(J.w+6)%7):(fe=Eh(Gu(J.y,0,1)),ye=fe.getDay(),fe=ye>4||ye===0?t0.ceil(fe):t0(fe),fe=ts.offset(fe,(J.V-1)*7),J.y=fe.getFullYear(),J.m=fe.getMonth(),J.d=fe.getDate()+(J.w+6)%7)}else("W"in J||"U"in J)&&("w"in J||(J.w="u"in J?J.u%7:"W"in J?1:0),ye="Z"in J?Th(Gu(J.y,0,1)).getUTCDay():Eh(Gu(J.y,0,1)).getDay(),J.m=0,J.d="W"in J?(J.w+6)%7+J.W*7-(ye+5)%7:J.w+J.U*7-(ye+6)%7);return"Z"in J?(J.H+=J.Z/100|0,J.M+=J.Z%100,Th(J)):Eh(J)}}function P(ae,re,ie,J){for(var ve=0,fe=re.length,ye=ie.length,ge,xe;ve<fe;){if(J>=ye)return-1;if(ge=re.charCodeAt(ve++),ge===37){if(ge=re.charAt(ve++),xe=w[ge in XP?re.charAt(ve++):ge],!xe||(J=xe(ae,ie,J))<0)return-1}else if(ge!=ie.charCodeAt(J++))return-1}return J}function H(ae,re,ie){var J=f.exec(re.slice(ie));return J?(ae.p=m.get(J[0].toLowerCase()),ie+J[0].length):-1}function k(ae,re,ie){var J=y.exec(re.slice(ie));return J?(ae.w=B.get(J[0].toLowerCase()),ie+J[0].length):-1}function j(ae,re,ie){var J=d.exec(re.slice(ie));return J?(ae.w=v.get(J[0].toLowerCase()),ie+J[0].length):-1}function R(ae,re,ie){var J=W.exec(re.slice(ie));return J?(ae.m=S.get(J[0].toLowerCase()),ie+J[0].length):-1}function F(ae,re,ie){var J=I.exec(re.slice(ie));return J?(ae.m=b.get(J[0].toLowerCase()),ie+J[0].length):-1}function V(ae,re,ie){return P(ae,n,re,ie)}function G(ae,re,ie){return P(ae,t,re,ie)}function Y(ae,re,ie){return P(ae,r,re,ie)}function Q(ae){return p[ae.getDay()]}function $(ae){return i[ae.getDay()]}function K(ae){return c[ae.getMonth()]}function ne(ae){return s[ae.getMonth()]}function T(ae){return a[+(ae.getHours()>=12)]}function L(ae){return 1+~~(ae.getMonth()/3)}function Z(ae){return p[ae.getUTCDay()]}function se(ae){return i[ae.getUTCDay()]}function he(ae){return c[ae.getUTCMonth()]}function Ie(ae){return s[ae.getUTCMonth()]}function Be(ae){return a[+(ae.getUTCHours()>=12)]}function me(ae){return 1+~~(ae.getUTCMonth()/3)}return{format:function(ae){var re=A(ae+="",M);return re.toString=function(){return ae},re},parse:function(ae){var re=N(ae+="",!1);return re.toString=function(){return ae},re},utcFormat:function(ae){var re=A(ae+="",O);return re.toString=function(){return ae},re},utcParse:function(ae){var re=N(ae+="",!0);return re.toString=function(){return ae},re}}}var XP={"-":"",_:" ",0:"0"},Un=/^\s*\d+/,X8=/^%/,Z8=/[\\^$*+?|[\]().{}]/g;function Ve(e,n,t){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<t?new Array(t-i+1).join(n)+a:a)}function J8(e){return e.replace(Z8,"\\$&")}function Ku(e){return new RegExp("^(?:"+e.map(J8).join("|")+")","i")}function Qu(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function eL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function nL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function tL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function rL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function aL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function ZP(e,n,t){var r=Un.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function JP(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function oL(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function iL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function uL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function e4(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function pL(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function n4(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function sL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function lL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function cL(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function fL(e,n,t){var r=Un.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function dL(e,n,t){var r=X8.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function mL(e,n,t){var r=Un.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function hL(e,n,t){var r=Un.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function t4(e,n){return Ve(e.getDate(),n,2)}function vL(e,n){return Ve(e.getHours(),n,2)}function gL(e,n){return Ve(e.getHours()%12||12,n,2)}function yL(e,n){return Ve(1+ts.count(Kr(e),e),n,3)}function tM(e,n){return Ve(e.getMilliseconds(),n,3)}function bL(e,n){return tM(e,n)+"000"}function IL(e,n){return Ve(e.getMonth()+1,n,2)}function BL(e,n){return Ve(e.getMinutes(),n,2)}function xL(e,n){return Ve(e.getSeconds(),n,2)}function wL(e){var n=e.getDay();return n===0?7:n}function PL(e,n){return Ve(rc.count(Kr(e)-1,e),n,2)}function rM(e){var n=e.getDay();return n>=4||n===0?Bi(e):Bi.ceil(e)}function WL(e,n){return e=rM(e),Ve(Bi.count(Kr(e),e)+(Kr(e).getDay()===4),n,2)}function SL(e){return e.getDay()}function ML(e,n){return Ve(t0.count(Kr(e)-1,e),n,2)}function AL(e,n){return Ve(e.getFullYear()%100,n,2)}function _L(e,n){return e=rM(e),Ve(e.getFullYear()%100,n,2)}function OL(e,n){return Ve(e.getFullYear()%1e4,n,4)}function HL(e,n){var t=e.getDay();return e=t>=4||t===0?Bi(e):Bi.ceil(e),Ve(e.getFullYear()%1e4,n,4)}function CL(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Ve(n/60|0,"0",2)+Ve(n%60,"0",2)}function r4(e,n){return Ve(e.getUTCDate(),n,2)}function NL(e,n){return Ve(e.getUTCHours(),n,2)}function RL(e,n){return Ve(e.getUTCHours()%12||12,n,2)}function kL(e,n){return Ve(1+tc.count(Qr(e),e),n,3)}function aM(e,n){return Ve(e.getUTCMilliseconds(),n,3)}function EL(e,n){return aM(e,n)+"000"}function TL(e,n){return Ve(e.getUTCMonth()+1,n,2)}function jL(e,n){return Ve(e.getUTCMinutes(),n,2)}function DL(e,n){return Ve(e.getUTCSeconds(),n,2)}function $L(e){var n=e.getUTCDay();return n===0?7:n}function LL(e,n){return Ve(ac.count(Qr(e)-1,e),n,2)}function oM(e){var n=e.getUTCDay();return n>=4||n===0?xi(e):xi.ceil(e)}function FL(e,n){return e=oM(e),Ve(xi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),n,2)}function qL(e){return e.getUTCDay()}function zL(e,n){return Ve(r0.count(Qr(e)-1,e),n,2)}function UL(e,n){return Ve(e.getUTCFullYear()%100,n,2)}function VL(e,n){return e=oM(e),Ve(e.getUTCFullYear()%100,n,2)}function GL(e,n){return Ve(e.getUTCFullYear()%1e4,n,4)}function KL(e,n){var t=e.getUTCDay();return e=t>=4||t===0?xi(e):xi.ceil(e),Ve(e.getUTCFullYear()%1e4,n,4)}function QL(){return"+0000"}function a4(){return"%"}function o4(e){return+e}function i4(e){return Math.floor(+e/1e3)}var ni,iM,uM;YL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function YL(e){return ni=Y8(e),iM=ni.format,ni.parse,uM=ni.utcFormat,ni.utcParse,ni}function XL(e){return new Date(e)}function ZL(e){return e instanceof Date?+e:+new Date(+e)}function ob(e,n,t,r,a,i,p,s,c,f){var m=Uy(),d=m.invert,v=m.domain,y=f(".%L"),B=f(":%S"),I=f("%I:%M"),b=f("%I %p"),W=f("%a %d"),S=f("%b %d"),M=f("%B"),O=f("%Y");function w(A){return(c(A)<A?y:s(A)<A?B:p(A)<A?I:i(A)<A?b:r(A)<A?a(A)<A?W:S:t(A)<A?M:O)(A)}return m.invert=function(A){return new Date(d(A))},m.domain=function(A){return arguments.length?v(Array.from(A,ZL)):v().map(XL)},m.ticks=function(A){var N=v();return e(N[0],N[N.length-1],A??10)},m.tickFormat=function(A,N){return N==null?w:f(N)},m.nice=function(A){var N=v();return(!A||typeof A.range!="function")&&(A=n(N[0],N[N.length-1],A??10)),A?v(GS(N,A)):m},m.copy=function(){return ns(m,ob(e,n,t,r,a,i,p,s,c,f))},m}function JL(){return Yt.apply(ob(K8,Q8,Kr,rb,rc,ts,nb,Jy,fo,iM).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function e7(){return Yt.apply(ob(V8,G8,Qr,ab,ac,tc,tb,eb,fo,uM).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function oc(){var e=0,n=1,t,r,a,i,p=ut,s=!1,c;function f(d){return d==null||isNaN(d=+d)?c:p(a===0?.5:(d=(i(d)-t)*a,s?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,n]=d,t=i(e=+e),r=i(n=+n),a=t===r?0:1/(r-t),f):[e,n]},f.clamp=function(d){return arguments.length?(s=!!d,f):s},f.interpolator=function(d){return arguments.length?(p=d,f):p};function m(d){return function(v){var y,B;return arguments.length?([y,B]=v,p=d(y,B),f):[p(0),p(1)]}}return f.range=m(Zi),f.rangeRound=m(zy),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,t=d(e),r=d(n),a=t===r?0:1/(r-t),f}}function La(e,n){return n.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function pM(){var e=$a(oc()(ut));return e.copy=function(){return La(e,pM())},Jr.apply(e,arguments)}function sM(){var e=Ky(oc()).domain([1,10]);return e.copy=function(){return La(e,sM()).base(e.base())},Jr.apply(e,arguments)}function lM(){var e=Qy(oc());return e.copy=function(){return La(e,lM()).constant(e.constant())},Jr.apply(e,arguments)}function ib(){var e=Yy(oc());return e.copy=function(){return La(e,ib()).exponent(e.exponent())},Jr.apply(e,arguments)}function n7(){return ib.apply(null,arguments).exponent(.5)}function cM(){var e=[],n=ut;function t(r){if(r!=null&&!isNaN(r=+r))return n((Jp(e,r,1)-1)/(e.length-1))}return t.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ha),t},t.interpolator=function(r){return arguments.length?(n=r,t):n},t.range=function(){return e.map((r,a)=>n(a/(e.length-1)))},t.quantiles=function(r){return Array.from({length:r+1},(a,i)=>L$(e,i/r))},t.copy=function(){return cM(n).domain(e)},Jr.apply(t,arguments)}function ic(){var e=0,n=.5,t=1,r=1,a,i,p,s,c,f=ut,m,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?s:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,n,t]=I,a=m(e=+e),i=m(n=+n),p=m(t=+t),s=a===i?0:.5/(i-a),c=i===p?0:.5/(p-i),r=i<a?-1:1,y):[e,n,t]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function B(I){return function(b){var W,S,M;return arguments.length?([W,S,M]=b,f=d8(I,[W,S,M]),y):[f(0),f(.5),f(1)]}}return y.range=B(Zi),y.rangeRound=B(zy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return m=I,a=I(e),i=I(n),p=I(t),s=a===i?0:.5/(i-a),c=i===p?0:.5/(p-i),r=i<a?-1:1,y}}function fM(){var e=$a(ic()(ut));return e.copy=function(){return La(e,fM())},Jr.apply(e,arguments)}function dM(){var e=Ky(ic()).domain([.1,1,10]);return e.copy=function(){return La(e,dM()).base(e.base())},Jr.apply(e,arguments)}function mM(){var e=Qy(ic());return e.copy=function(){return La(e,mM()).constant(e.constant())},Jr.apply(e,arguments)}function ub(){var e=Yy(ic());return e.copy=function(){return La(e,ub()).exponent(e.exponent())},Jr.apply(e,arguments)}function t7(){return ub.apply(null,arguments).exponent(.5)}const u4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Bp,scaleDiverging:fM,scaleDivergingLog:dM,scaleDivergingPow:ub,scaleDivergingSqrt:t7,scaleDivergingSymlog:mM,scaleIdentity:VS,scaleImplicit:pg,scaleLinear:e0,scaleLog:KS,scaleOrdinal:Ly,scalePoint:op,scalePow:Xy,scaleQuantile:XS,scaleQuantize:ZS,scaleRadial:YS,scaleSequential:pM,scaleSequentialLog:sM,scaleSequentialPow:ib,scaleSequentialQuantile:cM,scaleSequentialSqrt:n7,scaleSequentialSymlog:lM,scaleSqrt:E8,scaleSymlog:QS,scaleThreshold:JS,scaleTime:JL,scaleUtc:e7,tickFormat:US},Symbol.toStringTag,{value:"Module"}));var jh,p4;function uc(){if(p4)return jh;p4=1;var e=Ki();function n(t,r,a){for(var i=-1,p=t.length;++i<p;){var s=t[i],c=r(s);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,m=s}return m}return jh=n,jh}var Dh,s4;function hM(){if(s4)return Dh;s4=1;function e(n,t){return n>t}return Dh=e,Dh}var $h,l4;function r7(){if(l4)return $h;l4=1;var e=uc(),n=hM(),t=Xi();function r(a){return a&&a.length?e(a,t,n):void 0}return $h=r,$h}var a7=r7();const Ma=Xe(a7);var Lh,c4;function vM(){if(c4)return Lh;c4=1;function e(n,t){return n<t}return Lh=e,Lh}var Fh,f4;function o7(){if(f4)return Fh;f4=1;var e=uc(),n=vM(),t=Xi();function r(a){return a&&a.length?e(a,t,n):void 0}return Fh=r,Fh}var i7=o7();const pc=Xe(i7);var qh,d4;function u7(){if(d4)return qh;d4=1;var e=wy(),n=Mr(),t=WS(),r=bt();function a(i,p){var s=r(i)?e:t;return s(i,n(p,3))}return qh=a,qh}var zh,m4;function p7(){if(m4)return zh;m4=1;var e=wS(),n=u7();function t(r,a){return e(n(r,a),1)}return zh=t,zh}var s7=p7();const l7=Xe(s7);var Uh,h4;function c7(){if(h4)return Uh;h4=1;var e=ky();function n(t,r){return e(t,r)}return Uh=n,Uh}var f7=c7();const ka=Xe(f7);var Ji=1e9,d7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},sb,fn=!0,Kt="[DecimalError] ",go=Kt+"Invalid argument: ",pb=Kt+"Exponent out of range: ",eu=Math.floor,po=Math.pow,m7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_t,qn=1e7,sn=7,gM=9007199254740991,a0=eu(gM/sn),We={};We.absoluteValue=We.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};We.comparedTo=We.cmp=function(e){var n,t,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,n=0,t=r<a?r:a;n<t;++n)if(i.d[n]!==e.d[n])return i.d[n]>e.d[n]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};We.decimalPlaces=We.dp=function(){var e=this,n=e.d.length-1,t=(n-e.e)*sn;if(n=e.d[n],n)for(;n%10==0;n/=10)t--;return t<0?0:t};We.dividedBy=We.div=function(e){return Vr(this,new this.constructor(e))};We.dividedToIntegerBy=We.idiv=function(e){var n=this,t=n.constructor;return nn(Vr(n,new t(e),0,1),t.precision)};We.equals=We.eq=function(e){return!this.cmp(e)};We.exponent=function(){return Hn(this)};We.greaterThan=We.gt=function(e){return this.cmp(e)>0};We.greaterThanOrEqualTo=We.gte=function(e){return this.cmp(e)>=0};We.isInteger=We.isint=function(){return this.e>this.d.length-2};We.isNegative=We.isneg=function(){return this.s<0};We.isPositive=We.ispos=function(){return this.s>0};We.isZero=function(){return this.s===0};We.lessThan=We.lt=function(e){return this.cmp(e)<0};We.lessThanOrEqualTo=We.lte=function(e){return this.cmp(e)<1};We.logarithm=We.log=function(e){var n,t=this,r=t.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(_t))throw Error(Kt+"NaN");if(t.s<1)throw Error(Kt+(t.s?"NaN":"-Infinity"));return t.eq(_t)?new r(0):(fn=!1,n=Vr(Sp(t,i),Sp(e,i),i),fn=!0,nn(n,a))};We.minus=We.sub=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?IM(n,e):yM(n,(e.s=-e.s,e))};We.modulo=We.mod=function(e){var n,t=this,r=t.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Kt+"NaN");return t.s?(fn=!1,n=Vr(t,e,0,1).times(e),fn=!0,t.minus(n)):nn(new r(t),a)};We.naturalExponential=We.exp=function(){return bM(this)};We.naturalLogarithm=We.ln=function(){return Sp(this)};We.negated=We.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};We.plus=We.add=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?yM(n,e):IM(n,(e.s=-e.s,e))};We.precision=We.sd=function(e){var n,t,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(go+e);if(n=Hn(a)+1,r=a.d.length-1,t=r*sn+1,r=a.d[r],r){for(;r%10==0;r/=10)t--;for(r=a.d[0];r>=10;r/=10)t++}return e&&n>t?n:t};We.squareRoot=We.sqrt=function(){var e,n,t,r,a,i,p,s=this,c=s.constructor;if(s.s<1){if(!s.s)return new c(0);throw Error(Kt+"NaN")}for(e=Hn(s),fn=!1,a=Math.sqrt(+s),a==0||a==1/0?(n=br(s.d),(n.length+e)%2==0&&(n+="0"),a=Math.sqrt(n),e=eu((e+1)/2)-(e<0||e%2),a==1/0?n="5e"+e:(n=a.toExponential(),n=n.slice(0,n.indexOf("e")+1)+e),r=new c(n)):r=new c(a.toString()),t=c.precision,a=p=t+3;;)if(i=r,r=i.plus(Vr(s,i,p+2)).times(.5),br(i.d).slice(0,p)===(n=br(r.d)).slice(0,p)){if(n=n.slice(p-3,p+1),a==p&&n=="4999"){if(nn(i,t+1,0),i.times(i).eq(s)){r=i;break}}else if(n!="9999")break;p+=4}return fn=!0,nn(r,t)};We.times=We.mul=function(e){var n,t,r,a,i,p,s,c,f,m=this,d=m.constructor,v=m.d,y=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,t=m.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,p=c,c=f,f=p),i=[],p=c+f,r=p;r--;)i.push(0);for(r=f;--r>=0;){for(n=0,a=c+r;a>r;)s=i[a]+y[r]*v[a-r-1]+n,i[a--]=s%qn|0,n=s/qn|0;i[a]=(i[a]+n)%qn|0}for(;!i[--p];)i.pop();return n?++t:i.shift(),e.d=i,e.e=t,fn?nn(e,d.precision):e};We.toDecimalPlaces=We.todp=function(e,n){var t=this,r=t.constructor;return t=new r(t),e===void 0?t:(Pr(e,0,Ji),n===void 0?n=r.rounding:Pr(n,0,8),nn(t,e+Hn(t)+1,n))};We.toExponential=function(e,n){var t,r=this,a=r.constructor;return e===void 0?t=bo(r,!0):(Pr(e,0,Ji),n===void 0?n=a.rounding:Pr(n,0,8),r=nn(new a(r),e+1,n),t=bo(r,!0,e+1)),t};We.toFixed=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?bo(a):(Pr(e,0,Ji),n===void 0?n=i.rounding:Pr(n,0,8),r=nn(new i(a),e+Hn(a)+1,n),t=bo(r.abs(),!1,e+Hn(r)+1),a.isneg()&&!a.isZero()?"-"+t:t)};We.toInteger=We.toint=function(){var e=this,n=e.constructor;return nn(new n(e),Hn(e)+1,n.rounding)};We.toNumber=function(){return+this};We.toPower=We.pow=function(e){var n,t,r,a,i,p,s=this,c=s.constructor,f=12,m=+(e=new c(e));if(!e.s)return new c(_t);if(s=new c(s),!s.s){if(e.s<1)throw Error(Kt+"Infinity");return s}if(s.eq(_t))return s;if(r=c.precision,e.eq(_t))return nn(s,r);if(n=e.e,t=e.d.length-1,p=n>=t,i=s.s,p){if((t=m<0?-m:m)<=gM){for(a=new c(_t),n=Math.ceil(r/sn+4),fn=!1;t%2&&(a=a.times(s),g4(a.d,n)),t=eu(t/2),t!==0;)s=s.times(s),g4(s.d,n);return fn=!0,e.s<0?new c(_t).div(a):nn(a,r)}}else if(i<0)throw Error(Kt+"NaN");return i=i<0&&e.d[Math.max(n,t)]&1?-1:1,s.s=1,fn=!1,a=e.times(Sp(s,r+f)),fn=!0,a=bM(a),a.s=i,a};We.toPrecision=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?(t=Hn(a),r=bo(a,t<=i.toExpNeg||t>=i.toExpPos)):(Pr(e,1,Ji),n===void 0?n=i.rounding:Pr(n,0,8),a=nn(new i(a),e,n),t=Hn(a),r=bo(a,e<=t||t<=i.toExpNeg,e)),r};We.toSignificantDigits=We.tosd=function(e,n){var t=this,r=t.constructor;return e===void 0?(e=r.precision,n=r.rounding):(Pr(e,1,Ji),n===void 0?n=r.rounding:Pr(n,0,8)),nn(new r(t),e,n)};We.toString=We.valueOf=We.val=We.toJSON=We[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,n=Hn(e),t=e.constructor;return bo(e,n<=t.toExpNeg||n>=t.toExpPos)};function yM(e,n){var t,r,a,i,p,s,c,f,m=e.constructor,d=m.precision;if(!e.s||!n.s)return n.s||(n=new m(e)),fn?nn(n,d):n;if(c=e.d,f=n.d,p=e.e,a=n.e,c=c.slice(),i=p-a,i){for(i<0?(r=c,i=-i,s=f.length):(r=f,a=p,s=c.length),p=Math.ceil(d/sn),s=p>s?p+1:s+1,i>s&&(i=s,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(s=c.length,i=f.length,s-i<0&&(i=s,r=f,f=c,c=r),t=0;i;)t=(c[--i]=c[i]+f[i]+t)/qn|0,c[i]%=qn;for(t&&(c.unshift(t),++a),s=c.length;c[--s]==0;)c.pop();return n.d=c,n.e=a,fn?nn(n,d):n}function Pr(e,n,t){if(e!==~~e||e<n||e>t)throw Error(go+e)}function br(e){var n,t,r,a=e.length-1,i="",p=e[0];if(a>0){for(i+=p,n=1;n<a;n++)r=e[n]+"",t=sn-r.length,t&&(i+=Wa(t)),i+=r;p=e[n],r=p+"",t=sn-r.length,t&&(i+=Wa(t))}else if(p===0)return"0";for(;p%10===0;)p/=10;return i+p}var Vr=(function(){function e(r,a){var i,p=0,s=r.length;for(r=r.slice();s--;)i=r[s]*a+p,r[s]=i%qn|0,p=i/qn|0;return p&&r.unshift(p),r}function n(r,a,i,p){var s,c;if(i!=p)c=i>p?1:-1;else for(s=c=0;s<i;s++)if(r[s]!=a[s]){c=r[s]>a[s]?1:-1;break}return c}function t(r,a,i){for(var p=0;i--;)r[i]-=p,p=r[i]<a[i]?1:0,r[i]=p*qn+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,p){var s,c,f,m,d,v,y,B,I,b,W,S,M,O,w,A,N,P,H=r.constructor,k=r.s==a.s?1:-1,j=r.d,R=a.d;if(!r.s)return new H(r);if(!a.s)throw Error(Kt+"Division by zero");for(c=r.e-a.e,N=R.length,w=j.length,y=new H(k),B=y.d=[],f=0;R[f]==(j[f]||0);)++f;if(R[f]>(j[f]||0)&&--c,i==null?S=i=H.precision:p?S=i+(Hn(r)-Hn(a))+1:S=i,S<0)return new H(0);if(S=S/sn+2|0,f=0,N==1)for(m=0,R=R[0],S++;(f<w||m)&&S--;f++)M=m*qn+(j[f]||0),B[f]=M/R|0,m=M%R|0;else{for(m=qn/(R[0]+1)|0,m>1&&(R=e(R,m),j=e(j,m),N=R.length,w=j.length),O=N,I=j.slice(0,N),b=I.length;b<N;)I[b++]=0;P=R.slice(),P.unshift(0),A=R[0],R[1]>=qn/2&&++A;do m=0,s=n(R,I,N,b),s<0?(W=I[0],N!=b&&(W=W*qn+(I[1]||0)),m=W/A|0,m>1?(m>=qn&&(m=qn-1),d=e(R,m),v=d.length,b=I.length,s=n(d,I,v,b),s==1&&(m--,t(d,N<v?P:R,v))):(m==0&&(s=m=1),d=R.slice()),v=d.length,v<b&&d.unshift(0),t(I,d,b),s==-1&&(b=I.length,s=n(R,I,N,b),s<1&&(m++,t(I,N<b?P:R,b))),b=I.length):s===0&&(m++,I=[0]),B[f++]=m,s&&I[0]?I[b++]=j[O]||0:(I=[j[O]],b=1);while((O++<w||I[0]!==void 0)&&S--)}return B[0]||B.shift(),y.e=c,nn(y,p?i+Hn(y)+1:i)}})();function bM(e,n){var t,r,a,i,p,s,c=0,f=0,m=e.constructor,d=m.precision;if(Hn(e)>16)throw Error(pb+Hn(e));if(!e.s)return new m(_t);for(fn=!1,s=d,p=new m(.03125);e.abs().gte(.1);)e=e.times(p),f+=5;for(r=Math.log(po(2,f))/Math.LN10*2+5|0,s+=r,t=a=i=new m(_t),m.precision=s;;){if(a=nn(a.times(e),s),t=t.times(++c),p=i.plus(Vr(a,t,s)),br(p.d).slice(0,s)===br(i.d).slice(0,s)){for(;f--;)i=nn(i.times(i),s);return m.precision=d,n==null?(fn=!0,nn(i,d)):i}i=p}}function Hn(e){for(var n=e.e*sn,t=e.d[0];t>=10;t/=10)n++;return n}function Vh(e,n,t){if(n>e.LN10.sd())throw fn=!0,t&&(e.precision=t),Error(Kt+"LN10 precision limit exceeded");return nn(new e(e.LN10),n)}function Wa(e){for(var n="";e--;)n+="0";return n}function Sp(e,n){var t,r,a,i,p,s,c,f,m,d=1,v=10,y=e,B=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Kt+(y.s?"NaN":"-Infinity"));if(y.eq(_t))return new I(0);if(n==null?(fn=!1,f=b):f=n,y.eq(10))return n==null&&(fn=!0),Vh(I,f);if(f+=v,I.precision=f,t=br(B),r=t.charAt(0),i=Hn(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)y=y.times(e),t=br(y.d),r=t.charAt(0),d++;i=Hn(y),r>1?(y=new I("0."+t),i++):y=new I(r+"."+t.slice(1))}else return c=Vh(I,f+2,b).times(i+""),y=Sp(new I(r+"."+t.slice(1)),f-v).plus(c),I.precision=b,n==null?(fn=!0,nn(y,b)):y;for(s=p=y=Vr(y.minus(_t),y.plus(_t),f),m=nn(y.times(y),f),a=3;;){if(p=nn(p.times(m),f),c=s.plus(Vr(p,new I(a),f)),br(c.d).slice(0,f)===br(s.d).slice(0,f))return s=s.times(2),i!==0&&(s=s.plus(Vh(I,f+2,b).times(i+""))),s=Vr(s,new I(d),f),I.precision=b,n==null?(fn=!0,nn(s,b)):s;s=c,a+=2}}function v4(e,n){var t,r,a;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(t<0&&(t=r),t+=+n.slice(r+1),n=n.substring(0,r)):t<0&&(t=n.length),r=0;n.charCodeAt(r)===48;)++r;for(a=n.length;n.charCodeAt(a-1)===48;)--a;if(n=n.slice(r,a),n){if(a-=r,t=t-r-1,e.e=eu(t/sn),e.d=[],r=(t+1)%sn,t<0&&(r+=sn),r<a){for(r&&e.d.push(+n.slice(0,r)),a-=sn;r<a;)e.d.push(+n.slice(r,r+=sn));n=n.slice(r),r=sn-n.length}else r-=a;for(;r--;)n+="0";if(e.d.push(+n),fn&&(e.e>a0||e.e<-a0))throw Error(pb+t)}else e.s=0,e.e=0,e.d=[0];return e}function nn(e,n,t){var r,a,i,p,s,c,f,m,d=e.d;for(p=1,i=d[0];i>=10;i/=10)p++;if(r=n-p,r<0)r+=sn,a=n,f=d[m=0];else{if(m=Math.ceil((r+1)/sn),i=d.length,m>=i)return e;for(f=i=d[m],p=1;i>=10;i/=10)p++;r%=sn,a=r-sn+p}if(t!==void 0&&(i=po(10,p-a-1),s=f/i%10|0,c=n<0||d[m+1]!==void 0||f%i,c=t<4?(s||c)&&(t==0||t==(e.s<0?3:2)):s>5||s==5&&(t==4||c||t==6&&(r>0?a>0?f/po(10,p-a):0:d[m-1])%10&1||t==(e.s<0?8:7))),n<1||!d[0])return c?(i=Hn(e),d.length=1,n=n-i-1,d[0]=po(10,(sn-n%sn)%sn),e.e=eu(-n/sn)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=po(10,sn-r),d[m]=a>0?(f/po(10,p-a)%po(10,a)|0)*i:0),c)for(;;)if(m==0){(d[0]+=i)==qn&&(d[0]=1,++e.e);break}else{if(d[m]+=i,d[m]!=qn)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(fn&&(e.e>a0||e.e<-a0))throw Error(pb+Hn(e));return e}function IM(e,n){var t,r,a,i,p,s,c,f,m,d,v=e.constructor,y=v.precision;if(!e.s||!n.s)return n.s?n.s=-n.s:n=new v(e),fn?nn(n,y):n;if(c=e.d,d=n.d,r=n.e,f=e.e,c=c.slice(),p=f-r,p){for(m=p<0,m?(t=c,p=-p,s=d.length):(t=d,r=f,s=c.length),a=Math.max(Math.ceil(y/sn),s)+2,p>a&&(p=a,t.length=1),t.reverse(),a=p;a--;)t.push(0);t.reverse()}else{for(a=c.length,s=d.length,m=a<s,m&&(s=a),a=0;a<s;a++)if(c[a]!=d[a]){m=c[a]<d[a];break}p=0}for(m&&(t=c,c=d,d=t,n.s=-n.s),s=c.length,a=d.length-s;a>0;--a)c[s++]=0;for(a=d.length;a>p;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=qn-1;--c[i],c[a]+=qn}c[a]-=d[a]}for(;c[--s]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(n.d=c,n.e=r,fn?nn(n,y):n):new v(0)}function bo(e,n,t){var r,a=Hn(e),i=br(e.d),p=i.length;return n?(t&&(r=t-p)>0?i=i.charAt(0)+"."+i.slice(1)+Wa(r):p>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Wa(-a-1)+i,t&&(r=t-p)>0&&(i+=Wa(r))):a>=p?(i+=Wa(a+1-p),t&&(r=t-a-1)>0&&(i=i+"."+Wa(r))):((r=a+1)<p&&(i=i.slice(0,r)+"."+i.slice(r)),t&&(r=t-p)>0&&(a+1===p&&(i+="."),i+=Wa(r))),e.s<0?"-"+i:i}function g4(e,n){if(e.length>n)return e.length=n,!0}function BM(e){var n,t,r;function a(i){var p=this;if(!(p instanceof a))return new a(i);if(p.constructor=a,i instanceof a){p.s=i.s,p.e=i.e,p.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(go+i);if(i>0)p.s=1;else if(i<0)i=-i,p.s=-1;else{p.s=0,p.e=0,p.d=[0];return}if(i===~~i&&i<1e7){p.e=0,p.d=[i];return}return v4(p,i.toString())}else if(typeof i!="string")throw Error(go+i);if(i.charCodeAt(0)===45?(i=i.slice(1),p.s=-1):p.s=1,m7.test(i))v4(p,i);else throw Error(go+i)}if(a.prototype=We,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=BM,a.config=a.set=h7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],n=0;n<r.length;)e.hasOwnProperty(t=r[n++])||(e[t]=this[t]);return a.config(e),a}function h7(e){if(!e||typeof e!="object")throw Error(Kt+"Object expected");var n,t,r,a=["precision",1,Ji,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(n=0;n<a.length;n+=3)if((r=e[t=a[n]])!==void 0)if(eu(r)===r&&r>=a[n+1]&&r<=a[n+2])this[t]=r;else throw Error(go+t+": "+r);if((r=e[t="LN10"])!==void 0)if(r==Math.LN10)this[t]=new this(r);else throw Error(go+t+": "+r);return this}var sb=BM(d7);_t=new sb(1);const en=sb;function v7(e){return I7(e)||b7(e)||y7(e)||g7()}function g7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y7(e,n){if(e){if(typeof e=="string")return fg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fg(e,n)}}function b7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function I7(e){if(Array.isArray(e))return fg(e)}function fg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var B7=function(n){return n},xM={},wM=function(n){return n===xM},y4=function(n){return function t(){return arguments.length===0||arguments.length===1&&wM(arguments.length<=0?void 0:arguments[0])?t:n.apply(void 0,arguments)}},x7=function e(n,t){return n===1?t:y4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var p=a.filter(function(s){return s!==xM}).length;return p>=n?t.apply(void 0,a):e(n-p,y4(function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];var m=a.map(function(d){return wM(d)?c.shift():d});return t.apply(void 0,v7(m).concat(c))}))})},sc=function(n){return x7(n.length,n)},dg=function(n,t){for(var r=[],a=n;a<t;++a)r[a-n]=a;return r},w7=sc(function(e,n){return Array.isArray(n)?n.map(e):Object.keys(n).map(function(t){return n[t]}).map(e)}),P7=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(!t.length)return B7;var a=t.reverse(),i=a[0],p=a.slice(1);return function(){return p.reduce(function(s,c){return c(s)},i.apply(void 0,arguments))}},mg=function(n){return Array.isArray(n)?n.reverse():n.split("").reverse.join("")},PM=function(n){var t=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),p=0;p<a;p++)i[p]=arguments[p];return t&&i.every(function(s,c){return s===t[c]})||(t=i,r=n.apply(void 0,i)),r}};function W7(e){var n;return e===0?n=1:n=Math.floor(new en(e).abs().log(10).toNumber())+1,n}function S7(e,n,t){for(var r=new en(e),a=0,i=[];r.lt(n)&&a<1e5;)i.push(r.toNumber()),r=r.add(t),a++;return i}var M7=sc(function(e,n,t){var r=+e,a=+n;return r+t*(a-r)}),A7=sc(function(e,n,t){var r=n-+e;return r=r||1/0,(t-e)/r}),_7=sc(function(e,n,t){var r=n-+e;return r=r||1/0,Math.max(0,Math.min(1,(t-e)/r))});const lc={rangeStep:S7,getDigitCount:W7,interpolateNumber:M7,uninterpolateNumber:A7,uninterpolateTruncation:_7};function hg(e){return C7(e)||H7(e)||WM(e)||O7()}function O7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function C7(e){if(Array.isArray(e))return vg(e)}function Mp(e,n){return k7(e)||R7(e,n)||WM(e,n)||N7()}function N7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WM(e,n){if(e){if(typeof e=="string")return vg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vg(e,n)}}function vg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function R7(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,a=!1,i=void 0;try{for(var p=e[Symbol.iterator](),s;!(r=(s=p.next()).done)&&(t.push(s.value),!(n&&t.length===n));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&p.return!=null&&p.return()}finally{if(a)throw i}}return t}}function k7(e){if(Array.isArray(e))return e}function SM(e){var n=Mp(e,2),t=n[0],r=n[1],a=t,i=r;return t>r&&(a=r,i=t),[a,i]}function MM(e,n,t){if(e.lte(0))return new en(0);var r=lc.getDigitCount(e.toNumber()),a=new en(10).pow(r),i=e.div(a),p=r!==1?.05:.1,s=new en(Math.ceil(i.div(p).toNumber())).add(t).mul(p),c=s.mul(a);return n?c:new en(Math.ceil(c))}function E7(e,n,t){var r=1,a=new en(e);if(!a.isint()&&t){var i=Math.abs(e);i<1?(r=new en(10).pow(lc.getDigitCount(e)-1),a=new en(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new en(Math.floor(e)))}else e===0?a=new en(Math.floor((n-1)/2)):t||(a=new en(Math.floor(e)));var p=Math.floor((n-1)/2),s=P7(w7(function(c){return a.add(new en(c-p).mul(r)).toNumber()}),dg);return s(0,n)}function AM(e,n,t,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-e)/(t-1)))return{step:new en(0),tickMin:new en(0),tickMax:new en(0)};var i=MM(new en(n).sub(e).div(t-1),r,a),p;e<=0&&n>=0?p=new en(0):(p=new en(e).add(n).div(2),p=p.sub(new en(p).mod(i)));var s=Math.ceil(p.sub(e).div(i).toNumber()),c=Math.ceil(new en(n).sub(p).div(i).toNumber()),f=s+c+1;return f>t?AM(e,n,t,r,a+1):(f<t&&(c=n>0?c+(t-f):c,s=n>0?s:s+(t-f)),{step:i,tickMin:p.sub(new en(s).mul(i)),tickMax:p.add(new en(c).mul(i))})}function T7(e){var n=Mp(e,2),t=n[0],r=n[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,p=Math.max(a,2),s=SM([t,r]),c=Mp(s,2),f=c[0],m=c[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(hg(dg(0,a-1).map(function(){return 1/0}))):[].concat(hg(dg(0,a-1).map(function(){return-1/0})),[m]);return t>r?mg(d):d}if(f===m)return E7(f,a,i);var v=AM(f,m,p,i),y=v.step,B=v.tickMin,I=v.tickMax,b=lc.rangeStep(B,I.add(new en(.1).mul(y)),y);return t>r?mg(b):b}function j7(e,n){var t=Mp(e,2),r=t[0],a=t[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,p=SM([r,a]),s=Mp(p,2),c=s[0],f=s[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var m=Math.max(n,2),d=MM(new en(f).sub(c).div(m-1),i,0),v=[].concat(hg(lc.rangeStep(new en(c),new en(f).sub(new en(.99).mul(d)),d)),[f]);return r>a?mg(v):v}var D7=PM(T7),$7=PM(j7),L7="Invariant failed";function Io(e,n){throw new Error(L7)}var F7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wi(e)}function o0(){return o0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o0.apply(this,arguments)}function q7(e,n){return G7(e)||V7(e,n)||U7(e,n)||z7()}function z7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U7(e,n){if(e){if(typeof e=="string")return b4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b4(e,n)}}function b4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function V7(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function G7(e){if(Array.isArray(e))return e}function K7(e,n){if(e==null)return{};var t=Q7(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Q7(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Y7(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function X7(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,HM(r.key),r)}}function Z7(e,n,t){return n&&X7(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function J7(e,n,t){return n=i0(n),e9(e,_M()?Reflect.construct(n,t||[],i0(e).constructor):n.apply(e,t))}function e9(e,n){if(n&&(wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n9(e)}function n9(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_M=function(){return!!e})()}function i0(e){return i0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i0(e)}function t9(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&gg(e,n)}function gg(e,n){return gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},gg(e,n)}function OM(e,n,t){return n=HM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function HM(e){var n=r9(e,"string");return wi(n)=="symbol"?n:n+""}function r9(e,n){if(wi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nu=(function(e){function n(){return Y7(this,n),J7(this,n,arguments)}return t9(n,e),Z7(n,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,p=r.width,s=r.dataKey,c=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=K7(r,F7),y=Oe(v,!1);this.props.direction==="x"&&m.type!=="number"&&Io();var B=c.map(function(I){var b=f(I,s),W=b.x,S=b.y,M=b.value,O=b.errorVal;if(!O)return null;var w=[],A,N;if(Array.isArray(O)){var P=q7(O,2);A=P[0],N=P[1]}else A=N=O;if(i==="vertical"){var H=m.scale,k=S+a,j=k+p,R=k-p,F=H(M-A),V=H(M+N);w.push({x1:V,y1:j,x2:V,y2:R}),w.push({x1:F,y1:k,x2:V,y2:k}),w.push({x1:F,y1:j,x2:F,y2:R})}else if(i==="horizontal"){var G=d.scale,Y=W+a,Q=Y-p,$=Y+p,K=G(M-A),ne=G(M+N);w.push({x1:Q,y1:ne,x2:$,y2:ne}),w.push({x1:Y,y1:K,x2:Y,y2:ne}),w.push({x1:Q,y1:K,x2:$,y2:K})}return E.createElement($e,o0({className:"recharts-errorBar",key:"bar-".concat(w.map(function(T){return"".concat(T.x1,"-").concat(T.x2,"-").concat(T.y1,"-").concat(T.y2)}))},y),w.map(function(T){return E.createElement("line",o0({},T,{key:"line-".concat(T.x1,"-").concat(T.x2,"-").concat(T.y1,"-").concat(T.y2)}))}))});return E.createElement($e,{className:"recharts-errorBars"},B)}}])})(E.Component);OM(nu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});OM(nu,"displayName","ErrorBar");function Ap(e){"@babel/helpers - typeof";return Ap=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ap(e)}function I4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ro(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?I4(Object(t),!0).forEach(function(r){a9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function a9(e,n,t){return n=o9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o9(e){var n=i9(e,"string");return Ap(n)=="symbol"?n:n+""}function i9(e,n){if(Ap(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ap(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var CM=function(n){var t=n.children,r=n.formattedGraphicalItems,a=n.legendWidth,i=n.legendContent,p=St(t,Oa);if(!p)return null;var s=Oa.defaultProps,c=s!==void 0?ro(ro({},s),p.props):{},f;return p.props&&p.props.payload?f=p.props&&p.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,y=d.props,B=y.sectors||y.data||[];return m.concat(B.map(function(I){return{type:p.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,y=v!==void 0?ro(ro({},v),d.props):{},B=y.dataKey,I=y.name,b=y.legendType,W=y.hide;return{inactive:W,dataKey:B,type:c.iconType||b||"square",color:lb(d),value:I||B,payload:y}}),ro(ro(ro({},c),Oa.getWithHeight(p,a)),{},{payload:f,item:p})};function _p(e){"@babel/helpers - typeof";return _p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_p(e)}function B4(e){return l9(e)||s9(e)||p9(e)||u9()}function u9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p9(e,n){if(e){if(typeof e=="string")return yg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yg(e,n)}}function s9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function l9(e){if(Array.isArray(e))return yg(e)}function yg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function In(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?x4(Object(t),!0).forEach(function(r){fi(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function fi(e,n,t){return n=c9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c9(e){var n=f9(e,"string");return _p(n)=="symbol"?n:n+""}function f9(e,n){if(_p(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ln(e,n,t){return ke(e)||ke(n)?t:Tn(n)?Ot(e,n,t):Re(n)?n(e):t}function ip(e,n,t,r){var a=l7(e,function(s){return ln(s,n)});if(t==="number"){var i=a.filter(function(s){return ce(s)||parseFloat(s)});return i.length?[pc(i),Ma(i)]:[1/0,-1/0]}var p=r?a.filter(function(s){return!ke(s)}):a;return p.map(function(s){return Tn(s)||s instanceof Date?s:""})}var d9=function(n){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,p=-1,s=(t=r==null?void 0:r.length)!==null&&t!==void 0?t:0;if(s<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<s;f++){var m=f>0?a[f-1].coordinate:a[s-1].coordinate,d=a[f].coordinate,v=f>=s-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(ot(d-m)!==ot(v-d)){var B=[];if(ot(v-d)===ot(c[1]-c[0])){y=v;var I=d+c[1]-c[0];B[0]=Math.min(I,(I+m)/2),B[1]=Math.max(I,(I+m)/2)}else{y=m;var b=v+c[1]-c[0];B[0]=Math.min(d,(b+d)/2),B[1]=Math.max(d,(b+d)/2)}var W=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(n>W[0]&&n<=W[1]||n>=B[0]&&n<=B[1]){p=a[f].index;break}}else{var S=Math.min(m,v),M=Math.max(m,v);if(n>(S+d)/2&&n<=(M+d)/2){p=a[f].index;break}}}else for(var O=0;O<s;O++)if(O===0&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<s-1&&n>(r[O].coordinate+r[O-1].coordinate)/2&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O===s-1&&n>(r[O].coordinate+r[O-1].coordinate)/2){p=r[O].index;break}return p},lb=function(n){var t,r=n,a=r.type.displayName,i=(t=n.type)!==null&&t!==void 0&&t.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,p=i.stroke,s=i.fill,c;switch(a){case"Line":c=p;break;case"Area":case"Radar":c=p&&p!=="none"?p:s;break;default:c=s;break}return c},m9=function(n){var t=n.barSize,r=n.totalSize,a=n.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var p={},s=Object.keys(i),c=0,f=s.length;c<f;c++)for(var m=i[s[c]].stackGroups,d=Object.keys(m),v=0,y=d.length;v<y;v++){var B=m[d[v]],I=B.items,b=B.cateAxisId,W=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(W&&W.length){var S=W[0].type.defaultProps,M=S!==void 0?In(In({},S),W[0].props):W[0].props,O=M.barSize,w=M[b];p[w]||(p[w]=[]);var A=ke(O)?t:O;p[w].push({item:W[0],stackList:W.slice(1),barSize:ke(A)?void 0:it(A,r,0)})}}return p},h9=function(n){var t=n.barGap,r=n.barCategoryGap,a=n.bandSize,i=n.sizeList,p=i===void 0?[]:i,s=n.maxBarSize,c=p.length;if(c<1)return null;var f=it(t,a,0,!0),m,d=[];if(p[0].barSize===+p[0].barSize){var v=!1,y=a/c,B=p.reduce(function(O,w){return O+w.barSize||0},0);B+=(c-1)*f,B>=a&&(B-=(c-1)*f,f=0),B>=a&&y>0&&(v=!0,y*=.9,B=c*y);var I=(a-B)/2>>0,b={offset:I-f,size:0};m=p.reduce(function(O,w){var A={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},N=[].concat(B4(O),[A]);return b=N[N.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:b})}),N},d)}else{var W=it(r,a,0,!0);a-2*W-(c-1)*f<=0&&(f=0);var S=(a-2*W-(c-1)*f)/c;S>1&&(S>>=0);var M=s===+s?Math.min(S,s):S;m=p.reduce(function(O,w,A){var N=[].concat(B4(O),[{item:w.item,position:{offset:W+(S+f)*A+(S-M)/2,size:M}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:N[N.length-1].position})}),N},d)}return m},v9=function(n,t,r,a){var i=r.children,p=r.width,s=r.margin,c=p-(s.left||0)-(s.right||0),f=CM({children:i,legendWidth:c});if(f){var m=a||{},d=m.width,v=m.height,y=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&y!=="center"&&ce(n[y]))return In(In({},n),{},fi({},y,n[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&B!=="middle"&&ce(n[B]))return In(In({},n),{},fi({},B,n[B]+(v||0)))}return n},g9=function(n,t,r){return ke(t)?!0:n==="horizontal"?t==="yAxis":n==="vertical"||r==="x"?t==="xAxis":r==="y"?t==="yAxis":!0},NM=function(n,t,r,a,i){var p=t.props.children,s=pt(p,nu).filter(function(f){return g9(a,i,f.props.direction)});if(s&&s.length){var c=s.map(function(f){return f.props.dataKey});return n.reduce(function(f,m){var d=ln(m,r);if(ke(d))return f;var v=Array.isArray(d)?[pc(d),Ma(d)]:[d,d],y=c.reduce(function(B,I){var b=ln(m,I,0),W=v[0]-Math.abs(Array.isArray(b)?b[0]:b),S=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(W,B[0]),Math.max(S,B[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},y9=function(n,t,r,a,i){var p=t.map(function(s){return NM(n,s,r,i,a)}).filter(function(s){return!ke(s)});return p&&p.length?p.reduce(function(s,c){return[Math.min(s[0],c[0]),Math.max(s[1],c[1])]},[1/0,-1/0]):null},RM=function(n,t,r,a,i){var p=t.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&NM(n,c,f,a)||ip(n,f,r,i)});if(r==="number")return p.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var s={};return p.reduce(function(c,f){for(var m=0,d=f.length;m<d;m++)s[f[m]]||(s[f[m]]=!0,c.push(f[m]));return c},[])},kM=function(n,t){return n==="horizontal"&&t==="xAxis"||n==="vertical"&&t==="yAxis"||n==="centric"&&t==="angleAxis"||n==="radial"&&t==="radiusAxis"},EM=function(n,t,r,a){if(a)return n.map(function(c){return c.coordinate});var i,p,s=n.map(function(c){return c.coordinate===t&&(i=!0),c.coordinate===r&&(p=!0),c.coordinate});return i||s.push(t),p||s.push(r),s},Fr=function(n,t,r){if(!n)return null;var a=n.scale,i=n.duplicateDomain,p=n.type,s=n.range,c=n.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(t||r)&&p==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=n.axisType==="angleAxis"&&(s==null?void 0:s.length)>=2?ot(s[0]-s[1])*2*f:f,t&&(n.ticks||n.niceTicks)){var m=(n.ticks||n.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Yi(d.coordinate)})}return n.isCategorical&&n.categoricalDomain?n.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(n.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Gh=new WeakMap,wl=function(n,t){if(typeof t!="function")return n;Gh.has(n)||Gh.set(n,new WeakMap);var r=Gh.get(n);if(r.has(t))return r.get(t);var a=function(){n.apply(void 0,arguments),t.apply(void 0,arguments)};return r.set(t,a),a},TM=function(n,t,r){var a=n.scale,i=n.type,p=n.layout,s=n.axisType;if(a==="auto")return p==="radial"&&s==="radiusAxis"?{scale:Bp(),realScaleType:"band"}:p==="radial"&&s==="angleAxis"?{scale:e0(),realScaleType:"linear"}:i==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:op(),realScaleType:"point"}:i==="category"?{scale:Bp(),realScaleType:"band"}:{scale:e0(),realScaleType:"linear"};if(Yp(a)){var c="scale".concat(G0(a));return{scale:(u4[c]||op)(),realScaleType:u4[c]?c:"point"}}return Re(a)?{scale:a}:{scale:op(),realScaleType:"point"}},w4=1e-4,jM=function(n){var t=n.domain();if(!(!t||t.length<=2)){var r=t.length,a=n.range(),i=Math.min(a[0],a[1])-w4,p=Math.max(a[0],a[1])+w4,s=n(t[0]),c=n(t[r-1]);(s<i||s>p||c<i||c>p)&&n.domain([t[0],t[r-1]])}},b9=function(n,t){if(!n)return null;for(var r=0,a=n.length;r<a;r++)if(n[r].item===t)return n[r].position;return null},I9=function(n,t){if(!t||t.length!==2||!ce(t[0])||!ce(t[1]))return n;var r=Math.min(t[0],t[1]),a=Math.max(t[0],t[1]),i=[n[0],n[1]];return(!ce(n[0])||n[0]<r)&&(i[0]=r),(!ce(n[1])||n[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},B9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,p=0,s=0;s<t;++s){var c=Yi(n[s][r][1])?n[s][r][0]:n[s][r][1];c>=0?(n[s][r][0]=i,n[s][r][1]=i+c,i=n[s][r][1]):(n[s][r][0]=p,n[s][r][1]=p+c,p=n[s][r][1])}},x9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,p=0;p<t;++p){var s=Yi(n[p][r][1])?n[p][r][0]:n[p][r][1];s>=0?(n[p][r][0]=i,n[p][r][1]=i+s,i=n[p][r][1]):(n[p][r][0]=0,n[p][r][1]=0)}},w9={sign:B9,expand:lT,none:hi,silhouette:cT,wiggle:fT,positive:x9},P9=function(n,t,r){var a=t.map(function(s){return s.props.dataKey}),i=w9[r],p=sT().keys(a).value(function(s,c){return+ln(s,c,0)}).order(Kv).offset(i);return p(n)},W9=function(n,t,r,a,i,p){if(!n)return null;var s=p?t.reverse():t,c={},f=s.reduce(function(d,v){var y,B=(y=v.type)!==null&&y!==void 0&&y.defaultProps?In(In({},v.type.defaultProps),v.props):v.props,I=B.stackId,b=B.hide;if(b)return d;var W=B[r],S=d[W]||{hasStack:!1,stackGroups:{}};if(Tn(I)){var M=S.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};M.items.push(v),S.hasStack=!0,S.stackGroups[I]=M}else S.stackGroups[Da("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return In(In({},d),{},fi({},W,S))},c),m={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var B={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var W=y.stackGroups[b];return In(In({},I),{},fi({},b,{numericAxisId:r,cateAxisId:a,items:W.items,stackedData:P9(n,W.items,i)}))},B)}return In(In({},d),{},fi({},v,y))},m)},DM=function(n,t){var r=t.realScaleType,a=t.type,i=t.tickCount,p=t.originalDomain,s=t.allowDecimals,c=r||t.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&p&&(p[0]==="auto"||p[1]==="auto")){var f=n.domain();if(!f.length)return null;var m=D7(f,i,s);return n.domain([pc(m),Ma(m)]),{niceTicks:m}}if(i&&a==="number"){var d=n.domain(),v=$7(d,i,s);return{niceTicks:v}}return null};function Pi(e){var n=e.axis,t=e.ticks,r=e.bandSize,a=e.entry,i=e.index,p=e.dataKey;if(n.type==="category"){if(!n.allowDuplicatedCategory&&n.dataKey&&!ke(a[n.dataKey])){var s=kl(t,"value",a[n.dataKey]);if(s)return s.coordinate+r/2}return t[i]?t[i].coordinate+r/2:null}var c=ln(a,ke(p)?n.dataKey:p);return ke(c)?null:n.scale(c)}var P4=function(n){var t=n.axis,r=n.ticks,a=n.offset,i=n.bandSize,p=n.entry,s=n.index;if(t.type==="category")return r[s]?r[s].coordinate+a:null;var c=ln(p,t.dataKey,t.domain[s]);return ke(c)?null:t.scale(c)-i/2+a},S9=function(n){var t=n.numericAxis,r=t.scale.domain();if(t.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},M9=function(n,t){var r,a=(r=n.type)!==null&&r!==void 0&&r.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,i=a.stackId;if(Tn(i)){var p=t[i];if(p){var s=p.items.indexOf(n);return s>=0?p.stackedData[s]:null}}return null},A9=function(n){return n.reduce(function(t,r){return[pc(r.concat([t[0]]).filter(ce)),Ma(r.concat([t[1]]).filter(ce))]},[1/0,-1/0])},$M=function(n,t,r){return Object.keys(n).reduce(function(a,i){var p=n[i],s=p.stackedData,c=s.reduce(function(f,m){var d=A9(m.slice(t,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},W4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,S4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,bg=function(n,t,r){if(Re(n))return n(t,r);if(!Array.isArray(n))return t;var a=[];if(ce(n[0]))a[0]=r?n[0]:Math.min(n[0],t[0]);else if(W4.test(n[0])){var i=+W4.exec(n[0])[1];a[0]=t[0]-i}else Re(n[0])?a[0]=n[0](t[0]):a[0]=t[0];if(ce(n[1]))a[1]=r?n[1]:Math.max(n[1],t[1]);else if(S4.test(n[1])){var p=+S4.exec(n[1])[1];a[1]=t[1]+p}else Re(n[1])?a[1]=n[1](t[1]):a[1]=t[1];return a},u0=function(n,t,r){if(n&&n.scale&&n.scale.bandwidth){var a=n.scale.bandwidth();if(!r||a>0)return a}if(n&&t&&t.length>=2){for(var i=Ty(t,function(d){return d.coordinate}),p=1/0,s=1,c=i.length;s<c;s++){var f=i[s],m=i[s-1];p=Math.min((f.coordinate||0)-(m.coordinate||0),p)}return p===1/0?0:p}return r?void 0:0},M4=function(n,t,r){return!n||!n.length||ka(n,Ot(r,"type.defaultProps.domain"))?t:n},LM=function(n,t){var r=n.type.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,a=r.dataKey,i=r.name,p=r.unit,s=r.formatter,c=r.tooltipType,f=r.chartType,m=r.hide;return In(In({},Oe(n,!1)),{},{dataKey:a,unit:p,formatter:s,name:i||a,color:lb(n),value:ln(t,a),type:c,payload:t,chartType:f,hide:m})};function Op(e){"@babel/helpers - typeof";return Op=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Op(e)}function A4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function jr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?A4(Object(t),!0).forEach(function(r){FM(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function FM(e,n,t){return n=_9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _9(e){var n=O9(e,"string");return Op(n)=="symbol"?n:n+""}function O9(e,n){if(Op(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Op(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function H9(e,n){return k9(e)||R9(e,n)||N9(e,n)||C9()}function C9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N9(e,n){if(e){if(typeof e=="string")return _4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _4(e,n)}}function _4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function R9(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function k9(e){if(Array.isArray(e))return e}var p0=Math.PI/180,E9=function(n){return n*180/Math.PI},on=function(n,t,r,a){return{x:n+Math.cos(-p0*a)*r,y:t+Math.sin(-p0*a)*r}},qM=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(n-(r.left||0)-(r.right||0)),Math.abs(t-(r.top||0)-(r.bottom||0)))/2},T9=function(n,t,r,a,i){var p=n.width,s=n.height,c=n.startAngle,f=n.endAngle,m=it(n.cx,p,p/2),d=it(n.cy,s,s/2),v=qM(p,s,r),y=it(n.innerRadius,v,0),B=it(n.outerRadius,v,v*.8),I=Object.keys(t);return I.reduce(function(b,W){var S=t[W],M=S.domain,O=S.reversed,w;if(ke(S.range))a==="angleAxis"?w=[c,f]:a==="radiusAxis"&&(w=[y,B]),O&&(w=[w[1],w[0]]);else{w=S.range;var A=w,N=H9(A,2);c=N[0],f=N[1]}var P=TM(S,i),H=P.realScaleType,k=P.scale;k.domain(M).range(w),jM(k);var j=DM(k,jr(jr({},S),{},{realScaleType:H})),R=jr(jr(jr({},S),j),{},{range:w,radius:B,realScaleType:H,scale:k,cx:m,cy:d,innerRadius:y,outerRadius:B,startAngle:c,endAngle:f});return jr(jr({},b),{},FM({},W,R))},{})},j9=function(n,t){var r=n.x,a=n.y,i=t.x,p=t.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-p,2))},D9=function(n,t){var r=n.x,a=n.y,i=t.cx,p=t.cy,s=j9({x:r,y:a},{x:i,y:p});if(s<=0)return{radius:s};var c=(r-i)/s,f=Math.acos(c);return a>p&&(f=2*Math.PI-f),{radius:s,angle:E9(f),angleInRadian:f}},$9=function(n){var t=n.startAngle,r=n.endAngle,a=Math.floor(t/360),i=Math.floor(r/360),p=Math.min(a,i);return{startAngle:t-p*360,endAngle:r-p*360}},L9=function(n,t){var r=t.startAngle,a=t.endAngle,i=Math.floor(r/360),p=Math.floor(a/360),s=Math.min(i,p);return n+s*360},O4=function(n,t){var r=n.x,a=n.y,i=D9({x:r,y:a},t),p=i.radius,s=i.angle,c=t.innerRadius,f=t.outerRadius;if(p<c||p>f)return!1;if(p===0)return!0;var m=$9(t),d=m.startAngle,v=m.endAngle,y=s,B;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;B=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;B=y>=v&&y<=d}return B?jr(jr({},t),{},{radius:p,angle:L9(y,t)}):null},zM=function(n){return!U.isValidElement(n)&&!Re(n)&&typeof n!="boolean"?n.className:""};function Hp(e){"@babel/helpers - typeof";return Hp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hp(e)}var F9=["offset"];function q9(e){return G9(e)||V9(e)||U9(e)||z9()}function z9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U9(e,n){if(e){if(typeof e=="string")return Ig(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ig(e,n)}}function V9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function G9(e){if(Array.isArray(e))return Ig(e)}function Ig(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function K9(e,n){if(e==null)return{};var t=Q9(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Q9(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function H4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function En(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?H4(Object(t),!0).forEach(function(r){Y9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Y9(e,n,t){return n=X9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function X9(e){var n=Z9(e,"string");return Hp(n)=="symbol"?n:n+""}function Z9(e,n){if(Hp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Cp(){return Cp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Cp.apply(this,arguments)}var J9=function(n){var t=n.value,r=n.formatter,a=ke(n.children)?t:n.children;return Re(r)?r(a):a},eF=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),360);return r*a},nF=function(n,t,r){var a=n.position,i=n.viewBox,p=n.offset,s=n.className,c=i,f=c.cx,m=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,B=c.endAngle,I=c.clockWise,b=(d+v)/2,W=eF(y,B),S=W>=0?1:-1,M,O;a==="insideStart"?(M=y+S*p,O=I):a==="insideEnd"?(M=B-S*p,O=!I):a==="end"&&(M=B+S*p,O=I),O=W<=0?O:!O;var w=on(f,m,b,M),A=on(f,m,b,M+(O?1:-1)*359),N="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(A.x,",").concat(A.y),P=ke(n.id)?Da("recharts-radial-line-"):n.id;return E.createElement("text",Cp({},r,{dominantBaseline:"central",className:De("recharts-radial-bar-label",s)}),E.createElement("defs",null,E.createElement("path",{id:P,d:N})),E.createElement("textPath",{xlinkHref:"#".concat(P)},t))},tF=function(n){var t=n.viewBox,r=n.offset,a=n.position,i=t,p=i.cx,s=i.cy,c=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var y=on(p,s,f+r,v),B=y.x,I=y.y;return{x:B,y:I,textAnchor:B>=p?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:p,y:s,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:p,y:s,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:p,y:s,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,W=on(p,s,b,v),S=W.x,M=W.y;return{x:S,y:M,textAnchor:"middle",verticalAnchor:"middle"}},rF=function(n){var t=n.viewBox,r=n.parentViewBox,a=n.offset,i=n.position,p=t,s=p.x,c=p.y,f=p.width,m=p.height,d=m>=0?1:-1,v=d*a,y=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,b=I*a,W=I>0?"end":"start",S=I>0?"start":"end";if(i==="top"){var M={x:s+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return En(En({},M),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:s+f/2,y:c+m+v,textAnchor:"middle",verticalAnchor:B};return En(En({},O),r?{height:Math.max(r.y+r.height-(c+m),0),width:f}:{})}if(i==="left"){var w={x:s-b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"};return En(En({},w),r?{width:Math.max(w.x-r.x,0),height:m}:{})}if(i==="right"){var A={x:s+f+b,y:c+m/2,textAnchor:S,verticalAnchor:"middle"};return En(En({},A),r?{width:Math.max(r.x+r.width-A.x,0),height:m}:{})}var N=r?{width:f,height:m}:{};return i==="insideLeft"?En({x:s+b,y:c+m/2,textAnchor:S,verticalAnchor:"middle"},N):i==="insideRight"?En({x:s+f-b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideTop"?En({x:s+f/2,y:c+v,textAnchor:"middle",verticalAnchor:B},N):i==="insideBottom"?En({x:s+f/2,y:c+m-v,textAnchor:"middle",verticalAnchor:y},N):i==="insideTopLeft"?En({x:s+b,y:c+v,textAnchor:S,verticalAnchor:B},N):i==="insideTopRight"?En({x:s+f-b,y:c+v,textAnchor:W,verticalAnchor:B},N):i==="insideBottomLeft"?En({x:s+b,y:c+m-v,textAnchor:S,verticalAnchor:y},N):i==="insideBottomRight"?En({x:s+f-b,y:c+m-v,textAnchor:W,verticalAnchor:y},N):Qi(i)&&(ce(i.x)||lo(i.x))&&(ce(i.y)||lo(i.y))?En({x:s+it(i.x,f),y:c+it(i.y,m),textAnchor:"end",verticalAnchor:"end"},N):En({x:s+f/2,y:c+m/2,textAnchor:"middle",verticalAnchor:"middle"},N)},aF=function(n){return"cx"in n&&ce(n.cx)};function zn(e){var n=e.offset,t=n===void 0?5:n,r=K9(e,F9),a=En({offset:t},r),i=a.viewBox,p=a.position,s=a.value,c=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||ke(s)&&ke(c)&&!U.isValidElement(f)&&!Re(f))return null;if(U.isValidElement(f))return U.cloneElement(f,a);var y;if(Re(f)){if(y=U.createElement(f,a),U.isValidElement(y))return y}else y=J9(a);var B=aF(i),I=Oe(a,!0);if(B&&(p==="insideStart"||p==="insideEnd"||p==="end"))return nF(a,y,I);var b=B?tF(a):rF(a);return E.createElement(yo,Cp({className:De("recharts-label",d)},I,b,{breakAll:v}),y)}zn.displayName="Label";var UM=function(n){var t=n.cx,r=n.cy,a=n.angle,i=n.startAngle,p=n.endAngle,s=n.r,c=n.radius,f=n.innerRadius,m=n.outerRadius,d=n.x,v=n.y,y=n.top,B=n.left,I=n.width,b=n.height,W=n.clockWise,S=n.labelViewBox;if(S)return S;if(ce(I)&&ce(b)){if(ce(d)&&ce(v))return{x:d,y:v,width:I,height:b};if(ce(y)&&ce(B))return{x:y,y:B,width:I,height:b}}return ce(d)&&ce(v)?{x:d,y:v,width:0,height:0}:ce(t)&&ce(r)?{cx:t,cy:r,startAngle:i||a||0,endAngle:p||a||0,innerRadius:f||0,outerRadius:m||c||s||0,clockWise:W}:n.viewBox?n.viewBox:{}},oF=function(n,t){return n?n===!0?E.createElement(zn,{key:"label-implicit",viewBox:t}):Tn(n)?E.createElement(zn,{key:"label-implicit",viewBox:t,value:n}):U.isValidElement(n)?n.type===zn?U.cloneElement(n,{key:"label-implicit",viewBox:t}):E.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Re(n)?E.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Qi(n)?E.createElement(zn,Cp({viewBox:t},n,{key:"label-implicit"})):null:null},iF=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n||!n.children&&r&&!n.label)return null;var a=n.children,i=UM(n),p=pt(a,zn).map(function(c,f){return U.cloneElement(c,{viewBox:t||i,key:"label-".concat(f)})});if(!r)return p;var s=oF(n.label,t||i);return[s].concat(q9(p))};zn.parseViewBox=UM;zn.renderCallByParent=iF;var Kh,C4;function uF(){if(C4)return Kh;C4=1;function e(n){var t=n==null?0:n.length;return t?n[t-1]:void 0}return Kh=e,Kh}var pF=uF();const sF=Xe(pF);function Np(e){"@babel/helpers - typeof";return Np=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Np(e)}var lF=["valueAccessor"],cF=["data","dataKey","clockWise","id","textBreakAll"];function fF(e){return vF(e)||hF(e)||mF(e)||dF()}function dF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mF(e,n){if(e){if(typeof e=="string")return Bg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bg(e,n)}}function hF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vF(e){if(Array.isArray(e))return Bg(e)}function Bg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s0(){return s0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s0.apply(this,arguments)}function N4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function R4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?N4(Object(t),!0).forEach(function(r){gF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gF(e,n,t){return n=yF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yF(e){var n=bF(e,"string");return Np(n)=="symbol"?n:n+""}function bF(e,n){if(Np(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Np(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function k4(e,n){if(e==null)return{};var t=IF(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function IF(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var BF=function(n){return Array.isArray(n.value)?sF(n.value):n.value};function lr(e){var n=e.valueAccessor,t=n===void 0?BF:n,r=k4(e,lF),a=r.data,i=r.dataKey,p=r.clockWise,s=r.id,c=r.textBreakAll,f=k4(r,cF);return!a||!a.length?null:E.createElement($e,{className:"recharts-label-list"},a.map(function(m,d){var v=ke(i)?t(m,d):ln(m&&m.payload,i),y=ke(s)?{}:{id:"".concat(s,"-").concat(d)};return E.createElement(zn,s0({},Oe(m,!0),f,y,{parentViewBox:m.parentViewBox,value:v,textBreakAll:c,viewBox:zn.parseViewBox(ke(p)?m:R4(R4({},m),{},{clockWise:p})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function xF(e,n){return e?e===!0?E.createElement(lr,{key:"labelList-implicit",data:n}):E.isValidElement(e)||Re(e)?E.createElement(lr,{key:"labelList-implicit",data:n,content:e}):Qi(e)?E.createElement(lr,s0({data:n},e,{key:"labelList-implicit"})):null:null}function wF(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&t&&!e.label)return null;var r=e.children,a=pt(r,lr).map(function(p,s){return U.cloneElement(p,{data:n,key:"labelList-".concat(s)})});if(!t)return a;var i=xF(e.label,n);return[i].concat(fF(a))}lr.renderCallByParent=wF;function Rp(e){"@babel/helpers - typeof";return Rp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rp(e)}function xg(){return xg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xg.apply(this,arguments)}function E4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function T4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E4(Object(t),!0).forEach(function(r){PF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function PF(e,n,t){return n=WF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function WF(e){var n=SF(e,"string");return Rp(n)=="symbol"?n:n+""}function SF(e,n){if(Rp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Rp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var MF=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),359.999);return r*a},Pl=function(n){var t=n.cx,r=n.cy,a=n.radius,i=n.angle,p=n.sign,s=n.isExternal,c=n.cornerRadius,f=n.cornerIsExternal,m=c*(s?1:-1)+a,d=Math.asin(c/m)/p0,v=f?i:i+p*d,y=on(t,r,m,v),B=on(t,r,a,v),I=f?i-p*d:i,b=on(t,r,m*Math.cos(d*p0),I);return{center:y,circleTangency:B,lineTangency:b,theta:d}},VM=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,p=n.startAngle,s=n.endAngle,c=MF(p,s),f=p+c,m=on(t,r,i,p),d=on(t,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(p>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=on(t,r,a,p),B=on(t,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(p<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(t,",").concat(r," Z");return v},AF=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,p=n.cornerRadius,s=n.forceCornerRadius,c=n.cornerIsExternal,f=n.startAngle,m=n.endAngle,d=ot(m-f),v=Pl({cx:t,cy:r,radius:i,angle:f,sign:d,cornerRadius:p,cornerIsExternal:c}),y=v.circleTangency,B=v.lineTangency,I=v.theta,b=Pl({cx:t,cy:r,radius:i,angle:m,sign:-d,cornerRadius:p,cornerIsExternal:c}),W=b.circleTangency,S=b.lineTangency,M=b.theta,O=c?Math.abs(f-m):Math.abs(f-m)-I-M;if(O<0)return s?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(p,",").concat(p,",0,0,1,").concat(p*2,`,0
        a`).concat(p,",").concat(p,",0,0,1,").concat(-p*2,`,0
      `):VM({cx:t,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var w="M ".concat(B.x,",").concat(B.y,`
    A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
    A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
  `);if(a>0){var A=Pl({cx:t,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:p,cornerIsExternal:c}),N=A.circleTangency,P=A.lineTangency,H=A.theta,k=Pl({cx:t,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:p,cornerIsExternal:c}),j=k.circleTangency,R=k.lineTangency,F=k.theta,V=c?Math.abs(f-m):Math.abs(f-m)-H-F;if(V<0&&p===0)return"".concat(w,"L").concat(t,",").concat(r,"Z");w+="L".concat(R.x,",").concat(R.y,`
      A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(V>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(t,",").concat(r,"Z");return w},_F={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},GM=function(n){var t=T4(T4({},_F),n),r=t.cx,a=t.cy,i=t.innerRadius,p=t.outerRadius,s=t.cornerRadius,c=t.forceCornerRadius,f=t.cornerIsExternal,m=t.startAngle,d=t.endAngle,v=t.className;if(p<i||m===d)return null;var y=De("recharts-sector",v),B=p-i,I=it(s,B,0,!0),b;return I>0&&Math.abs(m-d)<360?b=AF({cx:r,cy:a,innerRadius:i,outerRadius:p,cornerRadius:Math.min(I,B/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:m,endAngle:d}):b=VM({cx:r,cy:a,innerRadius:i,outerRadius:p,startAngle:m,endAngle:d}),E.createElement("path",xg({},Oe(t,!0),{className:y,d:b,role:"img"}))};function kp(e){"@babel/helpers - typeof";return kp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},kp(e)}function wg(){return wg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wg.apply(this,arguments)}function j4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function D4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?j4(Object(t),!0).forEach(function(r){OF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function OF(e,n,t){return n=HF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function HF(e){var n=CF(e,"string");return kp(n)=="symbol"?n:n+""}function CF(e,n){if(kp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(kp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var $4={curveBasisClosed:ZE,curveBasisOpen:JE,curveBasis:XE,curveBumpX:TE,curveBumpY:jE,curveLinearClosed:eT,curveLinear:Q0,curveMonotoneX:nT,curveMonotoneY:tT,curveNatural:rT,curveStep:aT,curveStepAfter:iT,curveStepBefore:oT},Wl=function(n){return n.x===+n.x&&n.y===+n.y},Yu=function(n){return n.x},Xu=function(n){return n.y},NF=function(n,t){if(Re(n))return n;var r="curve".concat(G0(n));return(r==="curveMonotone"||r==="curveBump")&&t?$4["".concat(r).concat(t==="vertical"?"Y":"X")]:$4[r]||Q0},RF=function(n){var t=n.type,r=t===void 0?"linear":t,a=n.points,i=a===void 0?[]:a,p=n.baseLine,s=n.layout,c=n.connectNulls,f=c===void 0?!1:c,m=NF(r,s),d=f?i.filter(function(I){return Wl(I)}):i,v;if(Array.isArray(p)){var y=f?p.filter(function(I){return Wl(I)}):p,B=d.map(function(I,b){return D4(D4({},I),{},{base:y[b]})});return s==="vertical"?v=vl().y(Xu).x1(Yu).x0(function(I){return I.base.x}):v=vl().x(Yu).y1(Xu).y0(function(I){return I.base.y}),v.defined(Wl).curve(m),v(B)}return s==="vertical"&&ce(p)?v=vl().y(Xu).x1(Yu).x0(p):ce(p)?v=vl().x(Yu).y1(Xu).y0(p):v=V3().x(Yu).y(Xu),v.defined(Wl).curve(m),v(d)},Ca=function(n){var t=n.className,r=n.points,a=n.path,i=n.pathRef;if((!r||!r.length)&&!a)return null;var p=r&&r.length?RF(n):a;return E.createElement("path",wg({},Oe(n,!1),El(n),{className:De("recharts-curve",t),d:p,ref:i}))},Qh={exports:{}},Yh,L4;function kF(){if(L4)return Yh;L4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yh=e,Yh}var Xh,F4;function EF(){if(F4)return Xh;F4=1;var e=kF();function n(){}function t(){}return t.resetWarningCache=n,Xh=function(){function r(p,s,c,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:n};return i.PropTypes=i,i},Xh}var q4;function TF(){return q4||(q4=1,Qh.exports=EF()()),Qh.exports}var jF=TF();const Ye=Xe(jF),{getOwnPropertyNames:DF,getOwnPropertySymbols:$F}=Object,{hasOwnProperty:LF}=Object.prototype;function Zh(e,n){return function(r,a,i){return e(r,a,i)&&n(r,a,i)}}function Sl(e){return function(t,r,a){if(!t||!r||typeof t!="object"||typeof r!="object")return e(t,r,a);const{cache:i}=a,p=i.get(t),s=i.get(r);if(p&&s)return p===r&&s===t;i.set(t,r),i.set(r,t);const c=e(t,r,a);return i.delete(t),i.delete(r),c}}function FF(e){return e!=null?e[Symbol.toStringTag]:void 0}function z4(e){return DF(e).concat($F(e))}const qF=Object.hasOwn||((e,n)=>LF.call(e,n));function Wo(e,n){return e===n||!e&&!n&&e!==e&&n!==n}const zF="__v",UF="__o",VF="_owner",{getOwnPropertyDescriptor:U4,keys:V4}=Object;function GF(e,n){return e.byteLength===n.byteLength&&l0(new Uint8Array(e),new Uint8Array(n))}function KF(e,n,t){let r=e.length;if(n.length!==r)return!1;for(;r-- >0;)if(!t.equals(e[r],n[r],r,r,e,n,t))return!1;return!0}function QF(e,n){return e.byteLength===n.byteLength&&l0(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function YF(e,n){return Wo(e.getTime(),n.getTime())}function XF(e,n){return e.name===n.name&&e.message===n.message&&e.cause===n.cause&&e.stack===n.stack}function ZF(e,n){return e===n}function G4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let p,s,c=0;for(;(p=i.next())&&!p.done;){const f=n.entries();let m=!1,d=0;for(;(s=f.next())&&!s.done;){if(a[d]){d++;continue}const v=p.value,y=s.value;if(t.equals(v[0],y[0],c,d,e,n,t)&&t.equals(v[1],y[1],v[0],y[0],e,n,t)){m=a[d]=!0;break}d++}if(!m)return!1;c++}return!0}const JF=Wo;function eq(e,n,t){const r=V4(e);let a=r.length;if(V4(n).length!==a)return!1;for(;a-- >0;)if(!KM(e,n,t,r[a]))return!1;return!0}function Zu(e,n,t){const r=z4(e);let a=r.length;if(z4(n).length!==a)return!1;let i,p,s;for(;a-- >0;)if(i=r[a],!KM(e,n,t,i)||(p=U4(e,i),s=U4(n,i),(p||s)&&(!p||!s||p.configurable!==s.configurable||p.enumerable!==s.enumerable||p.writable!==s.writable)))return!1;return!0}function nq(e,n){return Wo(e.valueOf(),n.valueOf())}function tq(e,n){return e.source===n.source&&e.flags===n.flags}function K4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let p,s;for(;(p=i.next())&&!p.done;){const c=n.values();let f=!1,m=0;for(;(s=c.next())&&!s.done;){if(!a[m]&&t.equals(p.value,s.value,p.value,s.value,e,n,t)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function l0(e,n){let t=e.byteLength;if(n.byteLength!==t||e.byteOffset!==n.byteOffset)return!1;for(;t-- >0;)if(e[t]!==n[t])return!1;return!0}function rq(e,n){return e.hostname===n.hostname&&e.pathname===n.pathname&&e.protocol===n.protocol&&e.port===n.port&&e.hash===n.hash&&e.username===n.username&&e.password===n.password}function KM(e,n,t,r){return(r===VF||r===UF||r===zF)&&(e.$$typeof||n.$$typeof)?!0:qF(n,r)&&t.equals(e[r],n[r],r,r,e,n,t)}const aq="[object ArrayBuffer]",oq="[object Arguments]",iq="[object Boolean]",uq="[object DataView]",pq="[object Date]",sq="[object Error]",lq="[object Map]",cq="[object Number]",fq="[object Object]",dq="[object RegExp]",mq="[object Set]",hq="[object String]",vq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},gq="[object URL]",yq=Object.prototype.toString;function bq({areArrayBuffersEqual:e,areArraysEqual:n,areDataViewsEqual:t,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:p,areNumbersEqual:s,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:B}){return function(b,W,S){if(b===W)return!0;if(b==null||W==null)return!1;const M=typeof b;if(M!==typeof W)return!1;if(M!=="object")return M==="number"?s(b,W,S):M==="function"?i(b,W,S):!1;const O=b.constructor;if(O!==W.constructor)return!1;if(O===Object)return c(b,W,S);if(Array.isArray(b))return n(b,W,S);if(O===Date)return r(b,W,S);if(O===RegExp)return m(b,W,S);if(O===Map)return p(b,W,S);if(O===Set)return d(b,W,S);const w=yq.call(b);if(w===pq)return r(b,W,S);if(w===dq)return m(b,W,S);if(w===lq)return p(b,W,S);if(w===mq)return d(b,W,S);if(w===fq)return typeof b.then!="function"&&typeof W.then!="function"&&c(b,W,S);if(w===gq)return y(b,W,S);if(w===sq)return a(b,W,S);if(w===oq)return c(b,W,S);if(vq[w])return v(b,W,S);if(w===aq)return e(b,W,S);if(w===uq)return t(b,W,S);if(w===iq||w===cq||w===hq)return f(b,W,S);if(B){let A=B[w];if(!A){const N=FF(b);N&&(A=B[N])}if(A)return A(b,W,S)}return!1}}function Iq({circular:e,createCustomConfig:n,strict:t}){let r={areArrayBuffersEqual:GF,areArraysEqual:t?Zu:KF,areDataViewsEqual:QF,areDatesEqual:YF,areErrorsEqual:XF,areFunctionsEqual:ZF,areMapsEqual:t?Zh(G4,Zu):G4,areNumbersEqual:JF,areObjectsEqual:t?Zu:eq,arePrimitiveWrappersEqual:nq,areRegExpsEqual:tq,areSetsEqual:t?Zh(K4,Zu):K4,areTypedArraysEqual:t?Zh(l0,Zu):l0,areUrlsEqual:rq,unknownTagComparators:void 0};if(n&&(r=Object.assign({},r,n(r))),e){const a=Sl(r.areArraysEqual),i=Sl(r.areMapsEqual),p=Sl(r.areObjectsEqual),s=Sl(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:p,areSetsEqual:s})}return r}function Bq(e){return function(n,t,r,a,i,p,s){return e(n,t,s)}}function xq({circular:e,comparator:n,createState:t,equals:r,strict:a}){if(t)return function(s,c){const{cache:f=e?new WeakMap:void 0,meta:m}=t();return n(s,c,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(s,c){return n(s,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(s,c){return n(s,c,i)}}const wq=Fa();Fa({strict:!0});Fa({circular:!0});Fa({circular:!0,strict:!0});Fa({createInternalComparator:()=>Wo});Fa({strict:!0,createInternalComparator:()=>Wo});Fa({circular:!0,createInternalComparator:()=>Wo});Fa({circular:!0,createInternalComparator:()=>Wo,strict:!0});function Fa(e={}){const{circular:n=!1,createInternalComparator:t,createState:r,strict:a=!1}=e,i=Iq(e),p=bq(i),s=t?t(p):Bq(p);return xq({circular:n,comparator:p,createState:r,equals:s,strict:a})}function Pq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function Q4(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=-1,r=function a(i){t<0&&(t=i),i-t>n?(e(i),t=-1):Pq(a)};requestAnimationFrame(r)}function Pg(e){"@babel/helpers - typeof";return Pg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pg(e)}function Wq(e){return _q(e)||Aq(e)||Mq(e)||Sq()}function Sq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mq(e,n){if(e){if(typeof e=="string")return Y4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y4(e,n)}}function Y4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Aq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _q(e){if(Array.isArray(e))return e}function Oq(){var e={},n=function(){return null},t=!1,r=function a(i){if(!t){if(Array.isArray(i)){if(!i.length)return;var p=i,s=Wq(p),c=s[0],f=s.slice(1);if(typeof c=="number"){Q4(a.bind(null,f),c);return}a(c),Q4(a.bind(null,f));return}Pg(i)==="object"&&(e=i,n(e)),typeof i=="function"&&i()}};return{stop:function(){t=!0},start:function(i){t=!1,r(i)},subscribe:function(i){return n=i,function(){n=function(){return null}}}}}function Ep(e){"@babel/helpers - typeof";return Ep=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ep(e)}function X4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Z4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?X4(Object(t),!0).forEach(function(r){QM(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function QM(e,n,t){return n=Hq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Hq(e){var n=Cq(e,"string");return Ep(n)==="symbol"?n:String(n)}function Cq(e,n){if(Ep(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ep(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Nq=function(n,t){return[Object.keys(n),Object.keys(t)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},Rq=function(n){return n},kq=function(n){return n.replace(/([A-Z])/g,function(t){return"-".concat(t.toLowerCase())})},up=function(n,t){return Object.keys(t).reduce(function(r,a){return Z4(Z4({},r),{},QM({},a,n(a,t[a])))},{})},J4=function(n,t,r){return n.map(function(a){return"".concat(kq(a)," ").concat(t,"ms ").concat(r)}).join(",")};function Eq(e,n){return Dq(e)||jq(e,n)||YM(e,n)||Tq()}function Tq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jq(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function Dq(e){if(Array.isArray(e))return e}function $q(e){return qq(e)||Fq(e)||YM(e)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YM(e,n){if(e){if(typeof e=="string")return Wg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wg(e,n)}}function Fq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qq(e){if(Array.isArray(e))return Wg(e)}function Wg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var c0=1e-4,XM=function(n,t){return[0,3*n,3*t-6*n,3*n-3*t+1]},ZM=function(n,t){return n.map(function(r,a){return r*Math.pow(t,a)}).reduce(function(r,a){return r+a})},e5=function(n,t){return function(r){var a=XM(n,t);return ZM(a,r)}},zq=function(n,t){return function(r){var a=XM(n,t),i=[].concat($q(a.map(function(p,s){return p*s}).slice(1)),[0]);return ZM(i,r)}},n5=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0],i=t[1],p=t[2],s=t[3];if(t.length===1)switch(t[0]){case"linear":a=0,i=0,p=1,s=1;break;case"ease":a=.25,i=.1,p=.25,s=1;break;case"ease-in":a=.42,i=0,p=1,s=1;break;case"ease-out":a=.42,i=0,p=.58,s=1;break;case"ease-in-out":a=0,i=0,p=.58,s=1;break;default:{var c=t[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),m=Eq(f,4);a=m[0],i=m[1],p=m[2],s=m[3]}}}var d=e5(a,p),v=e5(i,s),y=zq(a,p),B=function(W){return W>1?1:W<0?0:W},I=function(W){for(var S=W>1?1:W,M=S,O=0;O<8;++O){var w=d(M)-S,A=y(M);if(Math.abs(w-S)<c0||A<c0)return v(M);M=B(M-w/A)}return v(M)};return I.isStepper=!1,I},Uq=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.stiff,r=t===void 0?100:t,a=n.damping,i=a===void 0?8:a,p=n.dt,s=p===void 0?17:p,c=function(m,d,v){var y=-(m-d)*r,B=v*i,I=v+(y-B)*s/1e3,b=v*s/1e3+m;return Math.abs(b-d)<c0&&Math.abs(I)<c0?[d,0]:[b,I]};return c.isStepper=!0,c.dt=s,c},Vq=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return n5(a);case"spring":return Uq();default:if(a.split("(")[0]==="cubic-bezier")return n5(a)}return typeof a=="function"?a:null};function Tp(e){"@babel/helpers - typeof";return Tp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tp(e)}function t5(e){return Qq(e)||Kq(e)||JM(e)||Gq()}function Gq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qq(e){if(Array.isArray(e))return Mg(e)}function r5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Kn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?r5(Object(t),!0).forEach(function(r){Sg(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Sg(e,n,t){return n=Yq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Yq(e){var n=Xq(e,"string");return Tp(n)==="symbol"?n:String(n)}function Xq(e,n){if(Tp(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Tp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Zq(e,n){return nz(e)||ez(e,n)||JM(e,n)||Jq()}function Jq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JM(e,n){if(e){if(typeof e=="string")return Mg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mg(e,n)}}function Mg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ez(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function nz(e){if(Array.isArray(e))return e}var f0=function(n,t,r){return n+(t-n)*r},Ag=function(n){var t=n.from,r=n.to;return t!==r},tz=function e(n,t,r){var a=up(function(i,p){if(Ag(p)){var s=n(p.from,p.to,p.velocity),c=Zq(s,2),f=c[0],m=c[1];return Kn(Kn({},p),{},{from:f,velocity:m})}return p},t);return r<1?up(function(i,p){return Ag(p)?Kn(Kn({},p),{},{velocity:f0(p.velocity,a[i].velocity,r),from:f0(p.from,a[i].from,r)}):p},t):e(n,a,r-1)};const rz=(function(e,n,t,r,a){var i=Nq(e,n),p=i.reduce(function(b,W){return Kn(Kn({},b),{},Sg({},W,[e[W],n[W]]))},{}),s=i.reduce(function(b,W){return Kn(Kn({},b),{},Sg({},W,{from:e[W],velocity:0,to:n[W]}))},{}),c=-1,f,m,d=function(){return null},v=function(){return up(function(W,S){return S.from},s)},y=function(){return!Object.values(s).filter(Ag).length},B=function(W){f||(f=W);var S=W-f,M=S/t.dt;s=tz(t,s,M),a(Kn(Kn(Kn({},e),n),v())),f=W,y()||(c=requestAnimationFrame(d))},I=function(W){m||(m=W);var S=(W-m)/r,M=up(function(w,A){return f0.apply(void 0,t5(A).concat([t(S)]))},p);if(a(Kn(Kn(Kn({},e),n),M)),S<1)c=requestAnimationFrame(d);else{var O=up(function(w,A){return f0.apply(void 0,t5(A).concat([t(1)]))},p);a(Kn(Kn(Kn({},e),n),O))}};return d=t.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wi(e)}var az=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function oz(e,n){if(e==null)return{};var t=iz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function iz(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Jh(e){return lz(e)||sz(e)||pz(e)||uz()}function uz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pz(e,n){if(e){if(typeof e=="string")return _g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _g(e,n)}}function sz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lz(e){if(Array.isArray(e))return _g(e)}function _g(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ar(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?a5(Object(t),!0).forEach(function(r){rp(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rp(e,n,t){return n=eA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function cz(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function fz(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eA(r.key),r)}}function dz(e,n,t){return n&&fz(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eA(e){var n=mz(e,"string");return Wi(n)==="symbol"?n:String(n)}function mz(e,n){if(Wi(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Wi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function hz(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Og(e,n)}function Og(e,n){return Og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Og(e,n)}function vz(e){var n=gz();return function(){var r=d0(e),a;if(n){var i=d0(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Hg(this,a)}}function Hg(e,n){if(n&&(Wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cg(e)}function Cg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function d0(e){return d0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d0(e)}var Qt=(function(e){hz(t,e);var n=vz(t);function t(r,a){var i;cz(this,t),i=n.call(this,r,a);var p=i.props,s=p.isActive,c=p.attributeName,f=p.from,m=p.to,d=p.steps,v=p.children,y=p.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Cg(i)),i.changeStyle=i.changeStyle.bind(Cg(i)),!s||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Hg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Hg(i);i.state={style:c?rp({},c,f):f}}else i.state={style:{}};return i}return dz(t,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,p=a.canBegin;this.mounted=!0,!(!i||!p)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,p=i.isActive,s=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(s){if(!p){var y={style:c?rp({},c,m):m};this.state&&v&&(c&&v[c]!==m||!c&&v!==m)&&this.setState(y);return}if(!(wq(a.to,m)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var b={style:c?rp({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(ar(ar({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,p=a.from,s=a.to,c=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=rz(p,s,Vq(f),c,this.changeStyle),B=function(){i.stopJSAnimation=y()};this.manager.start([v,m,B,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,p=a.steps,s=a.begin,c=a.onAnimationStart,f=p[0],m=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,W){if(W===0)return I;var S=b.duration,M=b.easing,O=M===void 0?"ease":M,w=b.style,A=b.properties,N=b.onAnimationEnd,P=W>0?p[W-1]:b,H=A||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Jh(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:S,easing:O}),S]);var k=J4(H,S,O),j=ar(ar(ar({},P.style),w),{},{transition:k});return[].concat(Jh(I),[j,S,N]).filter(Rq)};return this.manager.start([c].concat(Jh(p.reduce(y,[m,Math.max(v,s)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=Oq());var i=a.begin,p=a.duration,s=a.attributeName,c=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=s?rp({},s,c):c,b=J4(Object.keys(I),p,f);B.start([m,i,ar(ar({},I),{},{transition:b}),p,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var p=a.duration;a.attributeName,a.easing;var s=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=oz(a,az),f=U.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!s||f===0||p<=0)return i;var d=function(y){var B=y.props,I=B.style,b=I===void 0?{}:I,W=B.className,S=U.cloneElement(y,ar(ar({},c),{},{style:ar(ar({},b),m),className:W}));return S};return f===1?d(U.Children.only(i)):E.createElement("div",null,U.Children.map(i,function(v){return d(v)}))}}]),t})(U.PureComponent);Qt.displayName="Animate";Qt.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Qt.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function jp(e){"@babel/helpers - typeof";return jp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jp(e)}function m0(){return m0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m0.apply(this,arguments)}function yz(e,n){return xz(e)||Bz(e,n)||Iz(e,n)||bz()}function bz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iz(e,n){if(e){if(typeof e=="string")return o5(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o5(e,n)}}function o5(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Bz(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function xz(e){if(Array.isArray(e))return e}function i5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function u5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i5(Object(t),!0).forEach(function(r){wz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wz(e,n,t){return n=Pz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Pz(e){var n=Wz(e,"string");return jp(n)=="symbol"?n:n+""}function Wz(e,n){if(jp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(jp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var p5=function(n,t,r,a,i){var p=Math.min(Math.abs(r)/2,Math.abs(a)/2),s=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(p>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>p?p:i[v];m="M".concat(n,",").concat(t+s*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(n+c*d[0],",").concat(t)),m+="L ".concat(n+r-c*d[1],",").concat(t),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(n+r,",").concat(t+s*d[1])),m+="L ".concat(n+r,",").concat(t+a-s*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(n+r-c*d[2],",").concat(t+a)),m+="L ".concat(n+c*d[3],",").concat(t+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(n,",").concat(t+a-s*d[3])),m+="Z"}else if(p>0&&i===+i&&i>0){var B=Math.min(p,i);m="M ".concat(n,",").concat(t+s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+c*B,",").concat(t,`
            L `).concat(n+r-c*B,",").concat(t,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r,",").concat(t+s*B,`
            L `).concat(n+r,",").concat(t+a-s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r-c*B,",").concat(t+a,`
            L `).concat(n+c*B,",").concat(t+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n,",").concat(t+a-s*B," Z")}else m="M ".concat(n,",").concat(t," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},Sz=function(n,t){if(!n||!t)return!1;var r=n.x,a=n.y,i=t.x,p=t.y,s=t.width,c=t.height;if(Math.abs(s)>0&&Math.abs(c)>0){var f=Math.min(i,i+s),m=Math.max(i,i+s),d=Math.min(p,p+c),v=Math.max(p,p+c);return r>=f&&r<=m&&a>=d&&a<=v}return!1},Mz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},cb=function(n){var t=u5(u5({},Mz),n),r=U.useRef(),a=U.useState(-1),i=yz(a,2),p=i[0],s=i[1];U.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&s(O)}catch{}},[]);var c=t.x,f=t.y,m=t.width,d=t.height,v=t.radius,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,W=t.isAnimationActive,S=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var M=De("recharts-rectangle",y);return S?E.createElement(Qt,{canBegin:p>0,from:{width:m,height:d,x:c,y:f},to:{width:m,height:d,x:c,y:f},duration:I,animationEasing:B,isActive:S},function(O){var w=O.width,A=O.height,N=O.x,P=O.y;return E.createElement(Qt,{canBegin:p>0,from:"0px ".concat(p===-1?1:p,"px"),to:"".concat(p,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:W,easing:B},E.createElement("path",m0({},Oe(t,!0),{className:M,d:p5(N,P,w,A,v),ref:r})))}):E.createElement("path",m0({},Oe(t,!0),{className:M,d:p5(c,f,m,d,v)}))},Az=["points","className","baseLinePoints","connectNulls"];function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ii.apply(this,arguments)}function _z(e,n){if(e==null)return{};var t=Oz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Oz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function s5(e){return Rz(e)||Nz(e)||Cz(e)||Hz()}function Hz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cz(e,n){if(e){if(typeof e=="string")return Ng(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ng(e,n)}}function Nz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rz(e){if(Array.isArray(e))return Ng(e)}function Ng(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l5=function(n){return n&&n.x===+n.x&&n.y===+n.y},kz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[[]];return n.forEach(function(r){l5(r)?t[t.length-1].push(r):t[t.length-1].length>0&&t.push([])}),l5(n[0])&&t[t.length-1].push(n[0]),t[t.length-1].length<=0&&(t=t.slice(0,-1)),t},pp=function(n,t){var r=kz(n);t&&(r=[r.reduce(function(i,p){return[].concat(s5(i),s5(p))},[])]);var a=r.map(function(i){return i.reduce(function(p,s,c){return"".concat(p).concat(c===0?"M":"L").concat(s.x,",").concat(s.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Ez=function(n,t,r){var a=pp(n,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(pp(t.reverse(),r).slice(1))},Tz=function(n){var t=n.points,r=n.className,a=n.baseLinePoints,i=n.connectNulls,p=_z(n,Az);if(!t||!t.length)return null;var s=De("recharts-polygon",r);if(a&&a.length){var c=p.stroke&&p.stroke!=="none",f=Ez(t,a,i);return E.createElement("g",{className:s},E.createElement("path",ii({},Oe(p,!0),{fill:f.slice(-1)==="Z"?p.fill:"none",stroke:"none",d:f})),c?E.createElement("path",ii({},Oe(p,!0),{fill:"none",d:pp(t,i)})):null,c?E.createElement("path",ii({},Oe(p,!0),{fill:"none",d:pp(a,i)})):null)}var m=pp(t,i);return E.createElement("path",ii({},Oe(p,!0),{fill:m.slice(-1)==="Z"?p.fill:"none",className:s,d:m}))};function Rg(){return Rg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Rg.apply(this,arguments)}var rs=function(n){var t=n.cx,r=n.cy,a=n.r,i=n.className,p=De("recharts-dot",i);return t===+t&&r===+r&&a===+a?E.createElement("circle",Rg({},Oe(n,!1),El(n),{className:p,cx:t,cy:r,r:a})):null};function Dp(e){"@babel/helpers - typeof";return Dp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Dp(e)}var jz=["x","y","top","left","width","height","className"];function kg(){return kg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kg.apply(this,arguments)}function c5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Dz(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c5(Object(t),!0).forEach(function(r){$z(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $z(e,n,t){return n=Lz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Lz(e){var n=Fz(e,"string");return Dp(n)=="symbol"?n:n+""}function Fz(e,n){if(Dp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Dp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function qz(e,n){if(e==null)return{};var t=zz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function zz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var Uz=function(n,t,r,a,i,p){return"M".concat(n,",").concat(i,"v").concat(a,"M").concat(p,",").concat(t,"h").concat(r)},Vz=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,p=n.top,s=p===void 0?0:p,c=n.left,f=c===void 0?0:c,m=n.width,d=m===void 0?0:m,v=n.height,y=v===void 0?0:v,B=n.className,I=qz(n,jz),b=Dz({x:r,y:i,top:s,left:f,width:d,height:y},I);return!ce(r)||!ce(i)||!ce(d)||!ce(y)||!ce(s)||!ce(f)?null:E.createElement("path",kg({},Oe(b,!0),{className:De("recharts-cross",B),d:Uz(r,i,d,y,s,f)}))},ev,f5;function Gz(){if(f5)return ev;f5=1;var e=uc(),n=hM(),t=Mr();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return ev=r,ev}var Kz=Gz();const Qz=Xe(Kz);var nv,d5;function Yz(){if(d5)return nv;d5=1;var e=uc(),n=Mr(),t=vM();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return nv=r,nv}var Xz=Yz();const Zz=Xe(Xz);var Jz=["cx","cy","angle","ticks","axisLine"],eU=["ticks","tick","angle","tickFormatter","stroke"];function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Si(e)}function sp(){return sp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sp.apply(this,arguments)}function m5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ao(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?m5(Object(t),!0).forEach(function(r){cc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function h5(e,n){if(e==null)return{};var t=nU(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function nU(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function tU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tA(r.key),r)}}function rU(e,n,t){return n&&v5(e.prototype,n),t&&v5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function aU(e,n,t){return n=h0(n),oU(e,nA()?Reflect.construct(n,t||[],h0(e).constructor):n.apply(e,t))}function oU(e,n){if(n&&(Si(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iU(e)}function iU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nA=function(){return!!e})()}function h0(e){return h0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h0(e)}function uU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Eg(e,n)}function Eg(e,n){return Eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Eg(e,n)}function cc(e,n,t){return n=tA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function tA(e){var n=pU(e,"string");return Si(n)=="symbol"?n:n+""}function pU(e,n){if(Si(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var fc=(function(e){function n(){return tU(this,n),aU(this,n,arguments)}return uU(n,e),rU(n,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,p=i.angle,s=i.cx,c=i.cy;return on(s,c,a,p)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,p=r.angle,s=r.ticks,c=Qz(s,function(m){return m.coordinate||0}),f=Zz(s,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:p,endAngle:p,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,p=r.angle,s=r.ticks,c=r.axisLine,f=h5(r,Jz),m=s.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=on(a,i,m[0],p),v=on(a,i,m[1],p),y=ao(ao(ao({},Oe(f,!1)),{},{fill:"none"},Oe(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return E.createElement("line",sp({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,p=a.tick,s=a.angle,c=a.tickFormatter,f=a.stroke,m=h5(a,eU),d=this.getTickTextAnchor(),v=Oe(m,!1),y=Oe(p,!1),B=i.map(function(I,b){var W=r.getTickValueCoord(I),S=ao(ao(ao(ao({textAnchor:d,transform:"rotate(".concat(90-s,", ").concat(W.x,", ").concat(W.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},W),{},{payload:I});return E.createElement($e,sp({className:De("recharts-polar-radius-axis-tick",zM(p)),key:"tick-".concat(I.coordinate)},Ra(r.props,I,b)),n.renderTickItem(p,S,c?c(I.value,b):I.value))});return E.createElement($e,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,p=r.tick;return!a||!a.length?null:E.createElement($e,{className:De("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),p&&this.renderTicks(),zn.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var p;return E.isValidElement(r)?p=E.cloneElement(r,a):Re(r)?p=r(a):p=E.createElement(yo,sp({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),p}}])})(U.PureComponent);cc(fc,"displayName","PolarRadiusAxis");cc(fc,"axisType","radiusAxis");cc(fc,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mi(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},so.apply(this,arguments)}function g5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function oo(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?g5(Object(t),!0).forEach(function(r){dc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function sU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function y5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,aA(r.key),r)}}function lU(e,n,t){return n&&y5(e.prototype,n),t&&y5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function cU(e,n,t){return n=v0(n),fU(e,rA()?Reflect.construct(n,t||[],v0(e).constructor):n.apply(e,t))}function fU(e,n){if(n&&(Mi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dU(e)}function dU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rA=function(){return!!e})()}function v0(e){return v0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v0(e)}function mU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Tg(e,n)}function Tg(e,n){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,n)}function dc(e,n,t){return n=aA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function aA(e){var n=hU(e,"string");return Mi(n)=="symbol"?n:n+""}function hU(e,n){if(Mi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var vU=Math.PI/180,b5=1e-5,mc=(function(e){function n(){return sU(this,n),cU(this,n,arguments)}return mU(n,e),lU(n,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,p=a.cy,s=a.radius,c=a.orientation,f=a.tickSize,m=f||8,d=on(i,p,s,r.coordinate),v=on(i,p,s+(c==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*vU),p;return i>b5?p=a==="outer"?"start":"end":i<-b5?p=a==="outer"?"end":"start":p="middle",p}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,p=r.radius,s=r.axisLine,c=r.axisLineType,f=oo(oo({},Oe(this.props,!1)),{},{fill:"none"},Oe(s,!1));if(c==="circle")return E.createElement(rs,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:p}));var m=this.props.ticks,d=m.map(function(v){return on(a,i,p,v.coordinate)});return E.createElement(Tz,so({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,p=a.tick,s=a.tickLine,c=a.tickFormatter,f=a.stroke,m=Oe(this.props,!1),d=Oe(p,!1),v=oo(oo({},m),{},{fill:"none"},Oe(s,!1)),y=i.map(function(B,I){var b=r.getTickLineCoord(B),W=r.getTickTextAnchor(B),S=oo(oo(oo({textAnchor:W},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:b.x2,y:b.y2});return E.createElement($e,so({className:De("recharts-polar-angle-axis-tick",zM(p)),key:"tick-".concat(B.coordinate)},Ra(r.props,B,I)),s&&E.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,b)),p&&n.renderTickItem(p,S,c?c(B.value,I):B.value))});return E.createElement($e,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,p=r.axisLine;return i<=0||!a||!a.length?null:E.createElement($e,{className:De("recharts-polar-angle-axis",this.props.className)},p&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var p;return E.isValidElement(r)?p=E.cloneElement(r,a):Re(r)?p=r(a):p=E.createElement(yo,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),p}}])})(U.PureComponent);dc(mc,"displayName","PolarAngleAxis");dc(mc,"axisType","angleAxis");dc(mc,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var tv,I5;function gU(){if(I5)return tv;I5=1;var e=hS(),n=e(Object.getPrototypeOf,Object);return tv=n,tv}var rv,B5;function yU(){if(B5)return rv;B5=1;var e=Yr(),n=gU(),t=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,p=a.toString,s=i.hasOwnProperty,c=p.call(Object);function f(m){if(!t(m)||e(m)!=r)return!1;var d=n(m);if(d===null)return!0;var v=s.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&p.call(v)==c}return rv=f,rv}var bU=yU();const IU=Xe(bU);var av,x5;function BU(){if(x5)return av;x5=1;var e=Yr(),n=Xr(),t="[object Boolean]";function r(a){return a===!0||a===!1||n(a)&&e(a)==t}return av=r,av}var xU=BU();const wU=Xe(xU);function $p(e){"@babel/helpers - typeof";return $p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$p(e)}function g0(){return g0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g0.apply(this,arguments)}function PU(e,n){return AU(e)||MU(e,n)||SU(e,n)||WU()}function WU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SU(e,n){if(e){if(typeof e=="string")return w5(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w5(e,n)}}function w5(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function MU(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function AU(e){if(Array.isArray(e))return e}function P5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function W5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?P5(Object(t),!0).forEach(function(r){_U(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _U(e,n,t){return n=OU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function OU(e){var n=HU(e,"string");return $p(n)=="symbol"?n:n+""}function HU(e,n){if($p(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var S5=function(n,t,r,a,i){var p=r-a,s;return s="M ".concat(n,",").concat(t),s+="L ".concat(n+r,",").concat(t),s+="L ".concat(n+r-p/2,",").concat(t+i),s+="L ".concat(n+r-p/2-a,",").concat(t+i),s+="L ".concat(n,",").concat(t," Z"),s},CU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},NU=function(n){var t=W5(W5({},CU),n),r=U.useRef(),a=U.useState(-1),i=PU(a,2),p=i[0],s=i[1];U.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var M=r.current.getTotalLength();M&&s(M)}catch{}},[]);var c=t.x,f=t.y,m=t.upperWidth,d=t.lowerWidth,v=t.height,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,W=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var S=De("recharts-trapezoid",y);return W?E.createElement(Qt,{canBegin:p>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:B,isActive:W},function(M){var O=M.upperWidth,w=M.lowerWidth,A=M.height,N=M.x,P=M.y;return E.createElement(Qt,{canBegin:p>0,from:"0px ".concat(p===-1?1:p,"px"),to:"".concat(p,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:B},E.createElement("path",g0({},Oe(t,!0),{className:S,d:S5(N,P,O,w,A),ref:r})))}):E.createElement("g",null,E.createElement("path",g0({},Oe(t,!0),{className:S,d:S5(c,f,m,d,v)})))},RU=["option","shapeType","propTransformer","activeClassName","isActive"];function Lp(e){"@babel/helpers - typeof";return Lp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Lp(e)}function kU(e,n){if(e==null)return{};var t=EU(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function EU(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function M5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function y0(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?M5(Object(t),!0).forEach(function(r){TU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function TU(e,n,t){return n=jU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function jU(e){var n=DU(e,"string");return Lp(n)=="symbol"?n:n+""}function DU(e,n){if(Lp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Lp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function $U(e,n){return y0(y0({},n),e)}function LU(e,n){return e==="symbols"}function A5(e){var n=e.shapeType,t=e.elementProps;switch(n){case"rectangle":return E.createElement(cb,t);case"trapezoid":return E.createElement(NU,t);case"sector":return E.createElement(GM,t);case"symbols":if(LU(n))return E.createElement(X0,t);break;default:return null}}function FU(e){return U.isValidElement(e)?e.props:e}function b0(e){var n=e.option,t=e.shapeType,r=e.propTransformer,a=r===void 0?$U:r,i=e.activeClassName,p=i===void 0?"recharts-active-shape":i,s=e.isActive,c=kU(e,RU),f;if(U.isValidElement(n))f=U.cloneElement(n,y0(y0({},c),FU(n)));else if(Re(n))f=n(c);else if(IU(n)&&!wU(n)){var m=a(n,c);f=E.createElement(A5,{shapeType:t,elementProps:m})}else{var d=c;f=E.createElement(A5,{shapeType:t,elementProps:d})}return s?E.createElement($e,{className:p},f):f}function hc(e,n){return n!=null&&"trapezoids"in e.props}function vc(e,n){return n!=null&&"sectors"in e.props}function Fp(e,n){return n!=null&&"points"in e.props}function qU(e,n){var t,r,a=e.x===(n==null||(t=n.labelViewBox)===null||t===void 0?void 0:t.x)||e.x===n.x,i=e.y===(n==null||(r=n.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===n.y;return a&&i}function zU(e,n){var t=e.endAngle===n.endAngle,r=e.startAngle===n.startAngle;return t&&r}function UU(e,n){var t=e.x===n.x,r=e.y===n.y,a=e.z===n.z;return t&&r&&a}function VU(e,n){var t;return hc(e,n)?t=qU:vc(e,n)?t=zU:Fp(e,n)&&(t=UU),t}function GU(e,n){var t;return hc(e,n)?t="trapezoids":vc(e,n)?t="sectors":Fp(e,n)&&(t="points"),t}function KU(e,n){if(hc(e,n)){var t;return(t=n.tooltipPayload)===null||t===void 0||(t=t[0])===null||t===void 0||(t=t.payload)===null||t===void 0?void 0:t.payload}if(vc(e,n)){var r;return(r=n.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Fp(e,n)?n.payload:{}}function QU(e){var n=e.activeTooltipItem,t=e.graphicalItem,r=e.itemData,a=GU(t,n),i=KU(t,n),p=r.filter(function(c,f){var m=ka(i,c),d=t.props[a].filter(function(B){var I=VU(t,n);return I(B,n)}),v=t.props[a].indexOf(d[d.length-1]),y=f===v;return m&&y}),s=r.indexOf(p[p.length-1]);return s}var Ol;function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ai(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ui.apply(this,arguments)}function _5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_5(Object(t),!0).forEach(function(r){zt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function YU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function O5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,iA(r.key),r)}}function XU(e,n,t){return n&&O5(e.prototype,n),t&&O5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZU(e,n,t){return n=I0(n),JU(e,oA()?Reflect.construct(n,t||[],I0(e).constructor):n.apply(e,t))}function JU(e,n){if(n&&(Ai(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eV(e)}function eV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(oA=function(){return!!e})()}function I0(e){return I0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I0(e)}function nV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&jg(e,n)}function jg(e,n){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,n)}function zt(e,n,t){return n=iA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function iA(e){var n=tV(e,"string");return Ai(n)=="symbol"?n:n+""}function tV(e,n){if(Ai(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function n(t){var r;return YU(this,n),r=ZU(this,n,[t]),zt(r,"pieRef",null),zt(r,"sectorRefs",[]),zt(r,"id",Da("recharts-pie-")),zt(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Re(a)&&a()}),zt(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Re(a)&&a()}),r.state={isAnimationFinished:!t.isAnimationActive,prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,sectorToFocus:0},r}return nV(n,e),XU(n,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,p=i.label,s=i.labelLine,c=i.dataKey,f=i.valueKey,m=Oe(this.props,!1),d=Oe(p,!1),v=Oe(s,!1),y=p&&p.offsetRadius||20,B=r.map(function(I,b){var W=(I.startAngle+I.endAngle)/2,S=on(I.cx,I.cy,I.outerRadius+y,W),M=rn(rn(rn(rn({},m),I),{},{stroke:"none"},d),{},{index:b,textAnchor:n.getTextAnchor(S.x,I.cx)},S),O=rn(rn(rn(rn({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[on(I.cx,I.cy,I.outerRadius,W),S]}),w=c;return ke(c)&&ke(f)?w="value":ke(c)&&(w=f),E.createElement($e,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},s&&n.renderLabelLineItem(s,O,"line"),n.renderLabelItem(p,M,ln(I,w)))});return E.createElement($e,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,p=i.activeShape,s=i.blendStroke,c=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=c&&a.hasActiveIndex()?c:null,y=d?p:v,B=rn(rn({},f),{},{stroke:s?f.fill:f.stroke,tabIndex:-1});return E.createElement($e,ui({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ra(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),E.createElement(b0,ui({option:y,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,p=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return E.createElement(Qt,{begin:s,duration:c,isActive:p,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,b=[],W=i&&i[0],S=W.startAngle;return i.forEach(function(M,O){var w=v&&v[O],A=O>0?Ot(M,"paddingAngle",0):0;if(w){var N=hn(w.endAngle-w.startAngle,M.endAngle-M.startAngle),P=rn(rn({},M),{},{startAngle:S+A,endAngle:S+N(I)+A});b.push(P),S=P.endAngle}else{var H=M.endAngle,k=M.startAngle,j=hn(0,H-k),R=j(I),F=rn(rn({},M),{},{startAngle:S+A,endAngle:S+R+A});b.push(F),S=F.endAngle}}),E.createElement($e,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var p=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[p].focus(),a.setState({sectorToFocus:p});break}case"ArrowRight":{var s=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,p=this.state.prevSectors;return i&&a&&a.length&&(!p||!ka(p,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,p=a.sectors,s=a.className,c=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,B=this.state.isAnimationFinished;if(i||!p||!p.length||!ce(f)||!ce(m)||!ce(d)||!ce(v))return null;var I=De("recharts-pie",s);return E.createElement($e,{tabIndex:this.props.rootTabIndex,className:I,ref:function(W){r.pieRef=W}},this.renderSectors(),c&&this.renderLabels(p),zn.renderCallByParent(this.props,null,!1),(!y||B)&&lr.renderCallByParent(this.props,p,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);if(Re(r))return r(a);var p=De("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return E.createElement(Ca,ui({},a,{key:i,type:"linear",className:p}))}},{key:"renderLabelItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);var p=i;if(Re(r)&&(p=r(a),E.isValidElement(p)))return p;var s=De("recharts-pie-label-text",typeof r!="boolean"&&!Re(r)?r.className:"");return E.createElement(yo,ui({},a,{alignmentBaseline:"middle",className:s}),p)}}])})(U.PureComponent);Ol=ea;zt(ea,"displayName","Pie");zt(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});zt(ea,"parseDeltaAngle",function(e,n){var t=ot(n-e),r=Math.min(Math.abs(n-e),360);return t*r});zt(ea,"getRealPieData",function(e){var n=e.data,t=e.children,r=Oe(e,!1),a=pt(t,Zp);return n&&n.length?n.map(function(i,p){return rn(rn(rn({payload:i},r),i),a&&a[p]&&a[p].props)}):a&&a.length?a.map(function(i){return rn(rn({},r),i.props)}):[]});zt(ea,"parseCoordinateOfPie",function(e,n){var t=n.top,r=n.left,a=n.width,i=n.height,p=qM(a,i),s=r+it(e.cx,a,a/2),c=t+it(e.cy,i,i/2),f=it(e.innerRadius,p,0),m=it(e.outerRadius,p,p*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:s,cy:c,innerRadius:f,outerRadius:m,maxRadius:d}});zt(ea,"getComposedData",function(e){var n=e.item,t=e.offset,r=n.type.defaultProps!==void 0?rn(rn({},n.type.defaultProps),n.props):n.props,a=Ol.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,p=r.startAngle,s=r.endAngle,c=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),B=Ol.parseCoordinateOfPie(r,t),I=Ol.parseDeltaAngle(p,s),b=Math.abs(I),W=f;ke(f)&&ke(d)?(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W="value"):ke(f)&&(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W=d);var S=a.filter(function(P){return ln(P,W,0)!==0}).length,M=(b>=360?S:S-1)*c,O=b-S*y-M,w=a.reduce(function(P,H){var k=ln(H,W,0);return P+(ce(k)?k:0)},0),A;if(w>0){var N;A=a.map(function(P,H){var k=ln(P,W,0),j=ln(P,m,H),R=(ce(k)?k:0)/w,F;H?F=N.endAngle+ot(I)*c*(k!==0?1:0):F=p;var V=F+ot(I)*((k!==0?y:0)+R*O),G=(F+V)/2,Y=(B.innerRadius+B.outerRadius)/2,Q=[{name:j,value:k,payload:P,dataKey:W,type:v}],$=on(B.cx,B.cy,Y,G);return N=rn(rn(rn({percent:R,cornerRadius:i,name:j,tooltipPayload:Q,midAngle:G,middleRadius:Y,tooltipPosition:$},P),B),{},{value:ln(P,W),startAngle:F,endAngle:V,payload:P,paddingAngle:ot(I)*c}),N})}return rn(rn({},B),{},{sectors:A,data:a})});var ov,H5;function rV(){if(H5)return ov;H5=1;var e=Math.ceil,n=Math.max;function t(r,a,i,p){for(var s=-1,c=n(e((a-r)/(i||1)),0),f=Array(c);c--;)f[p?c:++s]=r,r+=i;return f}return ov=t,ov}var iv,C5;function uA(){if(C5)return iv;C5=1;var e=HS(),n=1/0,t=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===n||a===-n){var i=a<0?-1:1;return i*t}return a===a?a:0}return iv=r,iv}var uv,N5;function aV(){if(N5)return uv;N5=1;var e=rV(),n=ec(),t=uA();function r(a){return function(i,p,s){return s&&typeof s!="number"&&n(i,p,s)&&(p=s=void 0),i=t(i),p===void 0?(p=i,i=0):p=t(p),s=s===void 0?i<p?1:-1:t(s),e(i,p,s,a)}}return uv=r,uv}var pv,R5;function oV(){if(R5)return pv;R5=1;var e=aV(),n=e();return pv=n,pv}var iV=oV();const B0=Xe(iV);function qp(e){"@babel/helpers - typeof";return qp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qp(e)}function k5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function E5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k5(Object(t),!0).forEach(function(r){pA(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function pA(e,n,t){return n=uV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function uV(e){var n=pV(e,"string");return qp(n)=="symbol"?n:n+""}function pV(e,n){if(qp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(qp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var sV=["Webkit","Moz","O","ms"],lV=function(n,t){var r=n.replace(/(\w)/,function(i){return i.toUpperCase()}),a=sV.reduce(function(i,p){return E5(E5({},i),{},pA({},p+r,t))},{});return a[n]=t,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_i(e)}function x0(){return x0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x0.apply(this,arguments)}function T5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function sv(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T5(Object(t),!0).forEach(function(r){Wt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function cV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function j5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,lA(r.key),r)}}function fV(e,n,t){return n&&j5(e.prototype,n),t&&j5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function dV(e,n,t){return n=w0(n),mV(e,sA()?Reflect.construct(n,t||[],w0(e).constructor):n.apply(e,t))}function mV(e,n){if(n&&(_i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hV(e)}function hV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sA=function(){return!!e})()}function w0(e){return w0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w0(e)}function vV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Dg(e,n)}function Dg(e,n){return Dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dg(e,n)}function Wt(e,n,t){return n=lA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function lA(e){var n=gV(e,"string");return _i(n)=="symbol"?n:n+""}function gV(e,n){if(_i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var yV=function(n){var t=n.data,r=n.startIndex,a=n.endIndex,i=n.x,p=n.width,s=n.travellerWidth;if(!t||!t.length)return{};var c=t.length,f=op().domain(B0(0,c)).range([i,i+p-s]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},D5=function(n){return n.changedTouches&&!!n.changedTouches.length},Oi=(function(e){function n(t){var r;return cV(this,n),r=dV(this,n,[t]),Wt(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Wt(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Wt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,p=a.onDragEnd,s=a.startIndex;p==null||p({endIndex:i,startIndex:s})}),r.detachDragEndListener()}),Wt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Wt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Wt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Wt(r,"handleSlideDragStart",function(a){var i=D5(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return vV(n,e),fV(n,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,p=this.state.scaleValues,s=this.props,c=s.gap,f=s.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=n.getIndexInRange(p,d),B=n.getIndexInRange(p,v);return{startIndex:y-y%c,endIndex:B===m?m:B-B%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,p=a.tickFormatter,s=a.dataKey,c=ln(i[r],s,r);return Re(p)?p(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,p=a.startX,s=a.endX,c=this.props,f=c.x,m=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,B=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-s,f+m-d-p):I<0&&(I=Math.max(I,f-p,f-s));var b=this.getIndex({startX:p+I,endX:s+I});(b.startIndex!==v||b.endIndex!==y)&&B&&B(b),this.setState({startX:p+I,endX:s+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=D5(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,p=a.movingTravellerId,s=a.endX,c=a.startX,f=this.state[p],m=this.props,d=m.x,v=m.width,y=m.travellerWidth,B=m.onChange,I=m.gap,b=m.data,W={startX:this.state.startX,endX:this.state.endX},S=r.pageX-i;S>0?S=Math.min(S,d+v-y-f):S<0&&(S=Math.max(S,d-f)),W[p]=f+S;var M=this.getIndex(W),O=M.startIndex,w=M.endIndex,A=function(){var P=b.length-1;return p==="startX"&&(s>c?O%I===0:w%I===0)||s<c&&w===P||p==="endX"&&(s>c?w%I===0:O%I===0)||s>c&&w===P};this.setState(Wt(Wt({},p,f+S),"brushMoveStartX",r.pageX),function(){B&&A()&&B(M)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,p=this.state,s=p.scaleValues,c=p.startX,f=p.endX,m=this.state[a],d=s.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=s.length)){var y=s[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Wt({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,p=r.width,s=r.height,c=r.fill,f=r.stroke;return E.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:p,height:s})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,p=r.width,s=r.height,c=r.data,f=r.children,m=r.padding,d=U.Children.only(f);return d?E.cloneElement(d,{x:a,y:i,width:p,height:s,margin:m,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,p,s=this,c=this.props,f=c.y,m=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,B=c.data,I=c.startIndex,b=c.endIndex,W=Math.max(r,this.props.x),S=sv(sv({},Oe(this.props,!1)),{},{x:W,y:f,width:m,height:d}),M=y||"Min value: ".concat((i=B[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((p=B[b])===null||p===void 0?void 0:p.name);return E.createElement($e,{tabIndex:0,role:"slider","aria-label":M,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),s.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){s.setState({isTravellerFocused:!0})},onBlur:function(){s.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},n.renderTraveller(v,S))}},{key:"renderSlide",value:function(r,a){var i=this.props,p=i.y,s=i.height,c=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return E.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:m,y:p,width:d,height:s})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,p=r.y,s=r.height,c=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,y=5,B={pointerEvents:"none",fill:f};return E.createElement($e,{className:"recharts-brush-texts"},E.createElement(yo,x0({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:p+s/2},B),this.getTextOfTick(a)),E.createElement(yo,x0({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:p+s/2},B),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,p=r.children,s=r.x,c=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,B=v.endX,I=v.isTextActive,b=v.isSlideMoving,W=v.isTravellerMoving,S=v.isTravellerFocused;if(!a||!a.length||!ce(s)||!ce(c)||!ce(f)||!ce(m)||f<=0||m<=0)return null;var M=De("recharts-brush",i),O=E.Children.count(p)===1,w=lV("userSelect","none");return E.createElement($e,{className:M,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,B),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(B,"endX"),(I||b||W||S||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,p=r.width,s=r.height,c=r.stroke,f=Math.floor(i+s/2)-1;return E.createElement(E.Fragment,null,E.createElement("rect",{x:a,y:i,width:p,height:s,fill:c,stroke:"none"}),E.createElement("line",{x1:a+1,y1:f,x2:a+p-1,y2:f,fill:"none",stroke:"#fff"}),E.createElement("line",{x1:a+1,y1:f+2,x2:a+p-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return E.isValidElement(r)?i=E.cloneElement(r,a):Re(r)?i=r(a):i=n.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,p=r.width,s=r.x,c=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return sv({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:p},i&&i.length?yV({data:i,width:p,x:s,travellerWidth:c,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(p!==a.prevWidth||s!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([s,s+p-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:p,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,p=0,s=i-1;s-p>1;){var c=Math.floor((p+s)/2);r[c]>a?s=c:p=c}return a>=r[s]?s:p}}])})(U.PureComponent);Wt(Oi,"displayName","Brush");Wt(Oi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var lv,$5;function bV(){if($5)return lv;$5=1;var e=Ey();function n(t,r){var a;return e(t,function(i,p,s){return a=r(i,p,s),!a}),!!a}return lv=n,lv}var cv,L5;function IV(){if(L5)return cv;L5=1;var e=pS(),n=Mr(),t=bV(),r=bt(),a=ec();function i(p,s,c){var f=r(p)?e:t;return c&&a(p,s,c)&&(s=void 0),f(p,n(s,3))}return cv=i,cv}var BV=IV();const xV=Xe(BV);var wr=function(n,t){var r=n.alwaysShow,a=n.ifOverflow;return r&&(a="extendDomain"),a===t},fv,F5;function wV(){if(F5)return fv;F5=1;var e=SS();function n(t,r,a){r=="__proto__"&&e?e(t,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[r]=a}return fv=n,fv}var dv,q5;function PV(){if(q5)return dv;q5=1;var e=wV(),n=PS(),t=Mr();function r(a,i){var p={};return i=t(i,3),n(a,function(s,c,f){e(p,c,i(s,c,f))}),p}return dv=r,dv}var WV=PV();const SV=Xe(WV);var mv,z5;function MV(){if(z5)return mv;z5=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(!t(n[r],r,n))return!1;return!0}return mv=e,mv}var hv,U5;function AV(){if(U5)return hv;U5=1;var e=Ey();function n(t,r){var a=!0;return e(t,function(i,p,s){return a=!!r(i,p,s),a}),a}return hv=n,hv}var vv,V5;function _V(){if(V5)return vv;V5=1;var e=MV(),n=AV(),t=Mr(),r=bt(),a=ec();function i(p,s,c){var f=r(p)?e:n;return c&&a(p,s,c)&&(s=void 0),f(p,t(s,3))}return vv=i,vv}var OV=_V();const cA=Xe(OV);var HV=["x","y"];function zp(e){"@babel/helpers - typeof";return zp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zp(e)}function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$g.apply(this,arguments)}function G5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ju(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?G5(Object(t),!0).forEach(function(r){CV(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function CV(e,n,t){return n=NV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function NV(e){var n=RV(e,"string");return zp(n)=="symbol"?n:n+""}function RV(e,n){if(zp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(zp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function kV(e,n){if(e==null)return{};var t=EV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function EV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function TV(e,n){var t=e.x,r=e.y,a=kV(e,HV),i="".concat(t),p=parseInt(i,10),s="".concat(r),c=parseInt(s,10),f="".concat(n.height||a.height),m=parseInt(f,10),d="".concat(n.width||a.width),v=parseInt(d,10);return Ju(Ju(Ju(Ju(Ju({},n),a),p?{x:p}:{}),c?{y:c}:{}),{},{height:m,width:v,name:n.name,radius:n.radius})}function K5(e){return E.createElement(b0,$g({shapeType:"rectangle",propTransformer:TV,activeClassName:"recharts-active-bar"},e))}var jV=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof n=="number")return n;var i=typeof r=="number";return i?n(r,a):(i||Io(),t)}},DV=["value","background"],fA;function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hi(e)}function $V(e,n){if(e==null)return{};var t=LV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function LV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function P0(){return P0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},P0.apply(this,arguments)}function Q5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function On(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Q5(Object(t),!0).forEach(function(r){Aa(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function FV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Y5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,mA(r.key),r)}}function qV(e,n,t){return n&&Y5(e.prototype,n),t&&Y5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function zV(e,n,t){return n=W0(n),UV(e,dA()?Reflect.construct(n,t||[],W0(e).constructor):n.apply(e,t))}function UV(e,n){if(n&&(Hi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return VV(e)}function VV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dA=function(){return!!e})()}function W0(e){return W0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W0(e)}function GV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Lg(e,n)}function Lg(e,n){return Lg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lg(e,n)}function Aa(e,n,t){return n=mA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function mA(e){var n=KV(e,"string");return Hi(n)=="symbol"?n:n+""}function KV(e,n){if(Hi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Wr=(function(e){function n(){var t;FV(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=zV(this,n,[].concat(a)),Aa(t,"state",{isAnimationFinished:!1}),Aa(t,"id",Da("recharts-bar-")),Aa(t,"handleAnimationEnd",function(){var p=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),p&&p()}),Aa(t,"handleAnimationStart",function(){var p=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),p&&p()}),t}return GV(n,e),qV(n,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,p=i.shape,s=i.dataKey,c=i.activeIndex,f=i.activeBar,m=Oe(this.props,!1);return r&&r.map(function(d,v){var y=v===c,B=y?f:p,I=On(On(On({},m),d),{},{isActive:y,option:B,index:v,dataKey:s,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return E.createElement($e,P0({className:"recharts-bar-rectangle"},Ra(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),E.createElement(K5,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,p=a.layout,s=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return E.createElement(Qt,{begin:c,duration:f,isActive:s,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var B=y.t,I=i.map(function(b,W){var S=v&&v[W];if(S){var M=hn(S.x,b.x),O=hn(S.y,b.y),w=hn(S.width,b.width),A=hn(S.height,b.height);return On(On({},b),{},{x:M(B),y:O(B),width:w(B),height:A(B)})}if(p==="horizontal"){var N=hn(0,b.height),P=N(B);return On(On({},b),{},{y:b.y+b.height-P,height:P})}var H=hn(0,b.width),k=H(B);return On(On({},b),{},{width:k})});return E.createElement($e,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,p=this.state.prevData;return i&&a&&a.length&&(!p||!ka(p,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,p=a.dataKey,s=a.activeIndex,c=Oe(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=$V(f,DV);if(!d)return null;var y=On(On(On(On(On({},v),{},{fill:"#eee"},d),c),Ra(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:p,index:m,className:"recharts-bar-background-rectangle"});return E.createElement(K5,P0({key:"background-bar-".concat(m),option:r.props.background,isActive:m===s},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,p=i.data,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=pt(m,nu);if(!d)return null;var v=f==="vertical"?p[0].height/2:p[0].width/2,y=function(b,W){var S=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:S,errorVal:ln(b,W)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement($e,B,d.map(function(I){return E.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:p,xAxis:s,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,p=r.className,s=r.xAxis,c=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,y=r.isAnimationActive,B=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,W=De("recharts-bar",p),S=s&&s.allowDataOverflow,M=c&&c.allowDataOverflow,O=S||M,w=ke(I)?this.id:I;return E.createElement($e,{className:W},S||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(w)},E.createElement("rect",{x:S?f:f-d/2,y:M?m:m-v/2,width:S?d:d*2,height:M?v:v*2}))):null,E.createElement($e,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!y||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(U.PureComponent);fA=Wr;Aa(Wr,"displayName","Bar");Aa(Wr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Aa(Wr,"getComposedData",function(e){var n=e.props,t=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,p=e.yAxis,s=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=b9(r,t);if(!y)return null;var B=n.layout,I=t.type.defaultProps,b=I!==void 0?On(On({},I),t.props):t.props,W=b.dataKey,S=b.children,M=b.minPointSize,O=B==="horizontal"?p:i,w=f?O.scale.domain():null,A=S9({numericAxis:O}),N=pt(S,Zp),P=d.map(function(H,k){var j,R,F,V,G,Y;f?j=I9(f[m+k],w):(j=ln(H,W),Array.isArray(j)||(j=[A,j]));var Q=jV(M,fA.defaultProps.minPointSize)(j[1],k);if(B==="horizontal"){var $,K=[p.scale(j[0]),p.scale(j[1])],ne=K[0],T=K[1];R=P4({axis:i,ticks:s,bandSize:a,offset:y.offset,entry:H,index:k}),F=($=T??ne)!==null&&$!==void 0?$:void 0,V=y.size;var L=ne-T;if(G=Number.isNaN(L)?0:L,Y={x:R,y:p.y,width:V,height:p.height},Math.abs(Q)>0&&Math.abs(G)<Math.abs(Q)){var Z=ot(G||Q)*(Math.abs(Q)-Math.abs(G));F-=Z,G+=Z}}else{var se=[i.scale(j[0]),i.scale(j[1])],he=se[0],Ie=se[1];if(R=he,F=P4({axis:p,ticks:c,bandSize:a,offset:y.offset,entry:H,index:k}),V=Ie-he,G=y.size,Y={x:i.x,y:F,width:i.width,height:G},Math.abs(Q)>0&&Math.abs(V)<Math.abs(Q)){var Be=ot(V||Q)*(Math.abs(Q)-Math.abs(V));V+=Be}}return On(On(On({},H),{},{x:R,y:F,width:V,height:G,value:f?j:j[1],payload:H,background:Y},N&&N[k]&&N[k].props),{},{tooltipPayload:[LM(t,H)],tooltipPosition:{x:R+V/2,y:F+G/2}})});return On({data:P,layout:B},v)});function Up(e){"@babel/helpers - typeof";return Up=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Up(e)}function QV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function X5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,hA(r.key),r)}}function YV(e,n,t){return n&&X5(e.prototype,n),t&&X5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Z5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function or(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Z5(Object(t),!0).forEach(function(r){gc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gc(e,n,t){return n=hA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function hA(e){var n=XV(e,"string");return Up(n)=="symbol"?n:n+""}function XV(e,n){if(Up(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Up(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var fb=function(n,t,r,a,i){var p=n.width,s=n.height,c=n.layout,f=n.children,m=Object.keys(t),d={left:r.left,leftMirror:r.left,right:p-r.right,rightMirror:p-r.right,top:r.top,topMirror:r.top,bottom:s-r.bottom,bottomMirror:s-r.bottom},v=!!St(f,Wr);return m.reduce(function(y,B){var I=t[B],b=I.orientation,W=I.domain,S=I.padding,M=S===void 0?{}:S,O=I.mirror,w=I.reversed,A="".concat(b).concat(O?"Mirror":""),N,P,H,k,j;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var R=W[1]-W[0],F=1/0,V=I.categoricalDomain.sort();if(V.forEach(function(se,he){he>0&&(F=Math.min((se||0)-(V[he-1]||0),F))}),Number.isFinite(F)){var G=F/R,Y=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=G*Y/2),I.padding==="no-gap"){var Q=it(n.barCategoryGap,G*Y),$=G*Y/2;N=$-Q-($-Q)/Y*Q}}}a==="xAxis"?P=[r.left+(M.left||0)+(N||0),r.left+r.width-(M.right||0)-(N||0)]:a==="yAxis"?P=c==="horizontal"?[r.top+r.height-(M.bottom||0),r.top+(M.top||0)]:[r.top+(M.top||0)+(N||0),r.top+r.height-(M.bottom||0)-(N||0)]:P=I.range,w&&(P=[P[1],P[0]]);var K=TM(I,i,v),ne=K.scale,T=K.realScaleType;ne.domain(W).range(P),jM(ne);var L=DM(ne,or(or({},I),{},{realScaleType:T}));a==="xAxis"?(j=b==="top"&&!O||b==="bottom"&&O,H=r.left,k=d[A]-j*I.height):a==="yAxis"&&(j=b==="left"&&!O||b==="right"&&O,H=d[A]-j*I.width,k=r.top);var Z=or(or(or({},I),L),{},{realScaleType:T,x:H,y:k,scale:ne,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return Z.bandSize=u0(Z,L),!I.hide&&a==="xAxis"?d[A]+=(j?-1:1)*Z.height:I.hide||(d[A]+=(j?-1:1)*Z.width),or(or({},y),{},gc({},B,Z))},{})},vA=function(n,t){var r=n.x,a=n.y,i=t.x,p=t.y;return{x:Math.min(r,i),y:Math.min(a,p),width:Math.abs(i-r),height:Math.abs(p-a)}},ZV=function(n){var t=n.x1,r=n.y1,a=n.x2,i=n.y2;return vA({x:t,y:r},{x:a,y:i})},gA=(function(){function e(n){QV(this,e),this.scale=n}return YV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(t!==void 0){if(i)switch(i){case"start":return this.scale(t);case"middle":{var p=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+p}case"end":{var s=this.bandwidth?this.bandwidth():0;return this.scale(t)+s}default:return this.scale(t)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+c}return this.scale(t)}}},{key:"isInRange",value:function(t){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?t>=a&&t<=i:t>=i&&t<=a}}],[{key:"create",value:function(t){return new e(t)}}])})();gc(gA,"EPS",1e-4);var db=function(n){var t=Object.keys(n).reduce(function(r,a){return or(or({},r),{},gc({},a,gA.create(n[a])))},{});return or(or({},t),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=i.bandAware,s=i.position;return SV(a,function(c,f){return t[f].apply(c,{bandAware:p,position:s})})},isInRange:function(a){return cA(a,function(i,p){return t[p].isInRange(i)})}})};function JV(e){return(e%180+180)%180}var eG=function(n){var t=n.width,r=n.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=JV(a),p=i*Math.PI/180,s=Math.atan(r/t),c=p>s&&p<Math.PI-s?r/Math.sin(p):t/Math.cos(p);return Math.abs(c)},gv,J5;function nG(){if(J5)return gv;J5=1;var e=Mr(),n=Xp(),t=Z0();function r(a){return function(i,p,s){var c=Object(i);if(!n(i)){var f=e(p,3);i=t(i),p=function(d){return f(c[d],d,c)}}var m=a(i,p,s);return m>-1?c[f?i[m]:m]:void 0}}return gv=r,gv}var yv,eW;function tG(){if(eW)return yv;eW=1;var e=uA();function n(t){var r=e(t),a=r%1;return r===r?a?r-a:r:0}return yv=n,yv}var bv,nW;function rG(){if(nW)return bv;nW=1;var e=bS(),n=Mr(),t=tG(),r=Math.max;function a(i,p,s){var c=i==null?0:i.length;if(!c)return-1;var f=s==null?0:t(s);return f<0&&(f=r(c+f,0)),e(i,n(p,3),f)}return bv=a,bv}var Iv,tW;function aG(){if(tW)return Iv;tW=1;var e=nG(),n=rG(),t=e(n);return Iv=t,Iv}var oG=aG();const iG=Xe(oG);var uG=R3();const pG=Xe(uG);var sG=pG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),mb=U.createContext(void 0),hb=U.createContext(void 0),yA=U.createContext(void 0),bA=U.createContext({}),IA=U.createContext(void 0),BA=U.createContext(0),xA=U.createContext(0),rW=function(n){var t=n.state,r=t.xAxisMap,a=t.yAxisMap,i=t.offset,p=n.clipPathId,s=n.children,c=n.width,f=n.height,m=sG(i);return E.createElement(mb.Provider,{value:r},E.createElement(hb.Provider,{value:a},E.createElement(bA.Provider,{value:i},E.createElement(yA.Provider,{value:m},E.createElement(IA.Provider,{value:p},E.createElement(BA.Provider,{value:f},E.createElement(xA.Provider,{value:c},s)))))))},lG=function(){return U.useContext(IA)},wA=function(n){var t=U.useContext(mb);t==null&&Io();var r=t[n];return r==null&&Io(),r},cG=function(){var n=U.useContext(mb);return Sa(n)},fG=function(){var n=U.useContext(hb),t=iG(n,function(r){return cA(r.domain,Number.isFinite)});return t||Sa(n)},PA=function(n){var t=U.useContext(hb);t==null&&Io();var r=t[n];return r==null&&Io(),r},dG=function(){var n=U.useContext(yA);return n},mG=function(){return U.useContext(bA)},vb=function(){return U.useContext(xA)},gb=function(){return U.useContext(BA)};function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ci(e)}function hG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function vG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SA(r.key),r)}}function gG(e,n,t){return n&&vG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function yG(e,n,t){return n=S0(n),bG(e,WA()?Reflect.construct(n,t||[],S0(e).constructor):n.apply(e,t))}function bG(e,n){if(n&&(Ci(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return IG(e)}function IG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(WA=function(){return!!e})()}function S0(e){return S0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S0(e)}function BG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Fg(e,n)}function Fg(e,n){return Fg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Fg(e,n)}function aW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function oW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?aW(Object(t),!0).forEach(function(r){yb(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):aW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yb(e,n,t){return n=SA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function SA(e){var n=xG(e,"string");return Ci(n)=="symbol"?n:n+""}function xG(e,n){if(Ci(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function wG(e,n){return MG(e)||SG(e,n)||WG(e,n)||PG()}function PG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WG(e,n){if(e){if(typeof e=="string")return iW(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return iW(e,n)}}function iW(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function SG(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function MG(e){if(Array.isArray(e))return e}function qg(){return qg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qg.apply(this,arguments)}var AG=function(n,t){var r;return E.isValidElement(n)?r=E.cloneElement(n,t):Re(n)?r=n(t):r=E.createElement("line",qg({},t,{className:"recharts-reference-line-line"})),r},_G=function(n,t,r,a,i,p,s,c,f){var m=i.x,d=i.y,v=i.width,y=i.height;if(r){var B=f.y,I=n.y.apply(B,{position:p});if(wr(f,"discard")&&!n.y.isInRange(I))return null;var b=[{x:m+v,y:I},{x:m,y:I}];return c==="left"?b.reverse():b}if(t){var W=f.x,S=n.x.apply(W,{position:p});if(wr(f,"discard")&&!n.x.isInRange(S))return null;var M=[{x:S,y:d+y},{x:S,y:d}];return s==="top"?M.reverse():M}if(a){var O=f.segment,w=O.map(function(A){return n.apply(A,{position:p})});return wr(f,"discard")&&xV(w,function(A){return!n.isInRange(A)})?null:w}return null};function OG(e){var n=e.x,t=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,p=e.shape,s=e.className,c=e.alwaysShow,f=lG(),m=wA(a),d=PA(i),v=dG();if(!f||!v)return null;sr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=db({x:m.scale,y:d.scale}),B=Tn(n),I=Tn(t),b=r&&r.length===2,W=_G(y,B,I,b,v,e.position,m.orientation,d.orientation,e);if(!W)return null;var S=wG(W,2),M=S[0],O=M.x,w=M.y,A=S[1],N=A.x,P=A.y,H=wr(e,"hidden")?"url(#".concat(f,")"):void 0,k=oW(oW({clipPath:H},Oe(e,!0)),{},{x1:O,y1:w,x2:N,y2:P});return E.createElement($e,{className:De("recharts-reference-line",s)},AG(p,k),zn.renderCallByParent(e,ZV({x1:O,y1:w,x2:N,y2:P})))}var bb=(function(e){function n(){return hG(this,n),yG(this,n,arguments)}return BG(n,e),gG(n,[{key:"render",value:function(){return E.createElement(OG,this.props)}}])})(E.Component);yb(bb,"displayName","ReferenceLine");yb(bb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function zg(){return zg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zg.apply(this,arguments)}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ni(e)}function uW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function pW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?uW(Object(t),!0).forEach(function(r){yc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):uW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function HG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function CG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AA(r.key),r)}}function NG(e,n,t){return n&&CG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function RG(e,n,t){return n=M0(n),kG(e,MA()?Reflect.construct(n,t||[],M0(e).constructor):n.apply(e,t))}function kG(e,n){if(n&&(Ni(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EG(e)}function EG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function MA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(MA=function(){return!!e})()}function M0(e){return M0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M0(e)}function TG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Ug(e,n)}function Ug(e,n){return Ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ug(e,n)}function yc(e,n,t){return n=AA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function AA(e){var n=jG(e,"string");return Ni(n)=="symbol"?n:n+""}function jG(e,n){if(Ni(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var DG=function(n){var t=n.x,r=n.y,a=n.xAxis,i=n.yAxis,p=db({x:a.scale,y:i.scale}),s=p.apply({x:t,y:r},{bandAware:!0});return wr(n,"discard")&&!p.isInRange(s)?null:s},bc=(function(e){function n(){return HG(this,n),RG(this,n,arguments)}return TG(n,e),NG(n,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,p=r.r,s=r.alwaysShow,c=r.clipPathId,f=Tn(a),m=Tn(i);if(sr(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=DG(this.props);if(!d)return null;var v=d.x,y=d.y,B=this.props,I=B.shape,b=B.className,W=wr(this.props,"hidden")?"url(#".concat(c,")"):void 0,S=pW(pW({clipPath:W},Oe(this.props,!0)),{},{cx:v,cy:y});return E.createElement($e,{className:De("recharts-reference-dot",b)},n.renderDot(I,S),zn.renderCallByParent(this.props,{x:v-p,y:y-p,width:2*p,height:2*p}))}}])})(E.Component);yc(bc,"displayName","ReferenceDot");yc(bc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});yc(bc,"renderDot",function(e,n){var t;return E.isValidElement(e)?t=E.cloneElement(e,n):Re(e)?t=e(n):t=E.createElement(rs,zg({},n,{cx:n.cx,cy:n.cy,className:"recharts-reference-dot-dot"})),t});function Vg(){return Vg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vg.apply(this,arguments)}function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ri(e)}function sW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function lW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sW(Object(t),!0).forEach(function(r){Ic(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $G(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function LG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OA(r.key),r)}}function FG(e,n,t){return n&&LG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qG(e,n,t){return n=A0(n),zG(e,_A()?Reflect.construct(n,t||[],A0(e).constructor):n.apply(e,t))}function zG(e,n){if(n&&(Ri(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return UG(e)}function UG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_A=function(){return!!e})()}function A0(e){return A0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A0(e)}function VG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Gg(e,n)}function Gg(e,n){return Gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gg(e,n)}function Ic(e,n,t){return n=OA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function OA(e){var n=GG(e,"string");return Ri(n)=="symbol"?n:n+""}function GG(e,n){if(Ri(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var KG=function(n,t,r,a,i){var p=i.x1,s=i.x2,c=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=db({x:m.scale,y:d.scale}),y={x:n?v.x.apply(p,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},B={x:t?v.x.apply(s,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(B))?null:vA(y,B)},Bc=(function(e){function n(){return $G(this,n),qG(this,n,arguments)}return VG(n,e),FG(n,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,p=r.y1,s=r.y2,c=r.className,f=r.alwaysShow,m=r.clipPathId;sr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Tn(a),v=Tn(i),y=Tn(p),B=Tn(s),I=this.props.shape;if(!d&&!v&&!y&&!B&&!I)return null;var b=KG(d,v,y,B,this.props);if(!b&&!I)return null;var W=wr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return E.createElement($e,{className:De("recharts-reference-area",c)},n.renderRect(I,lW(lW({clipPath:W},Oe(this.props,!0)),b)),zn.renderCallByParent(this.props,b))}}])})(E.Component);Ic(Bc,"displayName","ReferenceArea");Ic(Bc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});Ic(Bc,"renderRect",function(e,n){var t;return E.isValidElement(e)?t=E.cloneElement(e,n):Re(e)?t=e(n):t=E.createElement(cb,Vg({},n,{className:"recharts-reference-area-rect"})),t});function HA(e,n,t){if(n<1)return[];if(n===1&&t===void 0)return e;for(var r=[],a=0;a<e.length;a+=n)r.push(e[a]);return r}function QG(e,n,t){var r={width:e.width+n.width,height:e.height+n.height};return eG(r,t)}function YG(e,n,t){var r=t==="width",a=e.x,i=e.y,p=e.width,s=e.height;return n===1?{start:r?a:i,end:r?a+p:i+s}:{start:r?a+p:i+s,end:r?a:i}}function _0(e,n,t,r,a){if(e*n<e*r||e*n>e*a)return!1;var i=t();return e*(n-e*i/2-r)>=0&&e*(n+e*i/2-a)<=0}function XG(e,n){return HA(e,n+1)}function ZG(e,n,t,r,a){for(var i=(r||[]).slice(),p=n.start,s=n.end,c=0,f=1,m=p,d=function(){var B=r==null?void 0:r[c];if(B===void 0)return{v:HA(r,f)};var I=c,b,W=function(){return b===void 0&&(b=t(B,I)),b},S=B.coordinate,M=c===0||_0(e,S,W,m,s);M||(c=0,m=p,f+=1),M&&(m=S+e*(W()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Vp(e){"@babel/helpers - typeof";return Vp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Vp(e)}function cW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function et(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cW(Object(t),!0).forEach(function(r){JG(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function JG(e,n,t){return n=eK(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function eK(e){var n=nK(e,"string");return Vp(n)=="symbol"?n:n+""}function nK(e,n){if(Vp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Vp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function tK(e,n,t,r,a){for(var i=(r||[]).slice(),p=i.length,s=n.start,c=n.end,f=function(v){var y=i[v],B,I=function(){return B===void 0&&(B=t(y,v)),B};if(v===p-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=et(et({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=et(et({},y),{},{tickCoord:y.coordinate});var W=_0(e,y.tickCoord,I,s,c);W&&(c=y.tickCoord-e*(I()/2+a),i[v]=et(et({},y),{},{isShow:!0}))},m=p-1;m>=0;m--)f(m);return i}function rK(e,n,t,r,a,i){var p=(r||[]).slice(),s=p.length,c=n.start,f=n.end;if(i){var m=r[s-1],d=t(m,s-1),v=e*(m.coordinate+e*d/2-f);p[s-1]=m=et(et({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var y=_0(e,m.tickCoord,function(){return d},c,f);y&&(f=m.tickCoord-e*(d/2+a),p[s-1]=et(et({},m),{},{isShow:!0}))}for(var B=i?s-1:s,I=function(S){var M=p[S],O,w=function(){return O===void 0&&(O=t(M,S)),O};if(S===0){var A=e*(M.coordinate-e*w()/2-c);p[S]=M=et(et({},M),{},{tickCoord:A<0?M.coordinate-A*e:M.coordinate})}else p[S]=M=et(et({},M),{},{tickCoord:M.coordinate});var N=_0(e,M.tickCoord,w,c,f);N&&(c=M.tickCoord+e*(w()/2+a),p[S]=et(et({},M),{},{isShow:!0}))},b=0;b<B;b++)I(b);return p}function Ib(e,n,t){var r=e.tick,a=e.ticks,i=e.viewBox,p=e.minTickGap,s=e.orientation,c=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(ce(c)||Zr.isSsr)return XG(a,typeof c=="number"&&ce(c)?c:0);var v=[],y=s==="top"||s==="bottom"?"width":"height",B=m&&y==="width"?ap(m,{fontSize:n,letterSpacing:t}):{width:0,height:0},I=function(M,O){var w=Re(f)?f(M.value,O):M.value;return y==="width"?QG(ap(w,{fontSize:n,letterSpacing:t}),B,d):ap(w,{fontSize:n,letterSpacing:t})[y]},b=a.length>=2?ot(a[1].coordinate-a[0].coordinate):1,W=YG(i,b,y);return c==="equidistantPreserveStart"?ZG(b,W,I,a,p):(c==="preserveStart"||c==="preserveStartEnd"?v=rK(b,W,I,a,p,c==="preserveStartEnd"):v=tK(b,W,I,a,p),v.filter(function(S){return S.isShow}))}var aK=["viewBox"],oK=["viewBox"],iK=["ticks"];function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ki(e)}function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pi.apply(this,arguments)}function fW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function at(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?fW(Object(t),!0).forEach(function(r){Bb(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Bv(e,n){if(e==null)return{};var t=uK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function uK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function pK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function dW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NA(r.key),r)}}function sK(e,n,t){return n&&dW(e.prototype,n),t&&dW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function lK(e,n,t){return n=O0(n),cK(e,CA()?Reflect.construct(n,t||[],O0(e).constructor):n.apply(e,t))}function cK(e,n){if(n&&(ki(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fK(e)}function fK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CA=function(){return!!e})()}function O0(e){return O0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O0(e)}function dK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Kg(e,n)}function Kg(e,n){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,n)}function Bb(e,n,t){return n=NA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function NA(e){var n=mK(e,"string");return ki(n)=="symbol"?n:n+""}function mK(e,n){if(ki(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function n(t){var r;return pK(this,n),r=lK(this,n,[t]),r.state={fontSize:"",letterSpacing:""},r}return dK(n,e),sK(n,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,p=Bv(r,aK),s=this.props,c=s.viewBox,f=Bv(s,oK);return!li(i,c)||!li(p,f)||!li(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,p=a.y,s=a.width,c=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,y,B,I,b,W,S,M=d?-1:1,O=r.tickSize||m,w=ce(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=B=r.coordinate,b=p+ +!d*c,I=b-M*O,S=I-M*v,W=w;break;case"left":I=b=r.coordinate,B=i+ +!d*s,y=B-M*O,W=y-M*v,S=w;break;case"right":I=b=r.coordinate,B=i+ +d*s,y=B+M*O,W=y+M*v,S=w;break;default:y=B=r.coordinate,b=p+ +d*c,I=b+M*O,S=I+M*v,W=w;break}return{line:{x1:y,y1:I,x2:B,y2:b},tick:{x:W,y:S}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,p;switch(a){case"left":p=i?"start":"end";break;case"right":p=i?"end":"start";break;default:p="middle";break}return p}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,p="end";switch(a){case"left":case"right":p="middle";break;case"top":p=i?"start":"end";break;default:p=i?"end":"start";break}return p}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,p=r.width,s=r.height,c=r.orientation,f=r.mirror,m=r.axisLine,d=at(at(at({},Oe(this.props,!1)),Oe(m,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=at(at({},d),{},{x1:a,y1:i+v*s,x2:a+p,y2:i+v*s})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=at(at({},d),{},{x1:a+y*p,y1:i,x2:a+y*p,y2:i+s})}return E.createElement("line",pi({},d,{className:De("recharts-cartesian-axis-line",Ot(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var p=this,s=this.props,c=s.tickLine,f=s.stroke,m=s.tick,d=s.tickFormatter,v=s.unit,y=Ib(at(at({},this.props),{},{ticks:r}),a,i),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=Oe(this.props,!1),W=Oe(m,!1),S=at(at({},b),{},{fill:"none"},Oe(c,!1)),M=y.map(function(O,w){var A=p.getTickLineCoord(O),N=A.line,P=A.tick,H=at(at(at(at({textAnchor:B,verticalAnchor:I},b),{},{stroke:"none",fill:f},W),P),{},{index:w,payload:O,visibleTicksCount:y.length,tickFormatter:d});return E.createElement($e,pi({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ra(p.props,O,w)),c&&E.createElement("line",pi({},S,N,{className:De("recharts-cartesian-axis-tick-line",Ot(c,"className"))})),m&&n.renderTickItem(m,H,"".concat(Re(d)?d(O.value,w):O.value).concat(v||"")))});return E.createElement("g",{className:"recharts-cartesian-axis-ticks"},M)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,p=a.width,s=a.height,c=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,y=Bv(d,iK),B=v;return Re(c)&&(B=v&&v.length>0?c(this.props):c(y)),p<=0||s<=0||!B||!B.length?null:E.createElement($e,{className:De("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),zn.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var p;return E.isValidElement(r)?p=E.cloneElement(r,a):Re(r)?p=r(a):p=E.createElement(yo,pi({},a,{className:"recharts-cartesian-axis-tick-value"}),i),p}}])})(U.Component);Bb(tu,"displayName","CartesianAxis");Bb(tu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var hK=["x1","y1","x2","y2","key"],vK=["offset"];function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bo(e)}function mW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function nt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?mW(Object(t),!0).forEach(function(r){gK(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):mW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gK(e,n,t){return n=yK(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yK(e){var n=bK(e,"string");return Bo(n)=="symbol"?n:n+""}function bK(e,n){if(Bo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Bo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)}function hW(e,n){if(e==null)return{};var t=IK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function IK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var BK=function(n){var t=n.fill;if(!t||t==="none")return null;var r=n.fillOpacity,a=n.x,i=n.y,p=n.width,s=n.height,c=n.ry;return E.createElement("rect",{x:a,y:i,ry:c,width:p,height:s,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function RA(e,n){var t;if(E.isValidElement(e))t=E.cloneElement(e,n);else if(Re(e))t=e(n);else{var r=n.x1,a=n.y1,i=n.x2,p=n.y2,s=n.key,c=hW(n,hK),f=Oe(c,!1);f.offset;var m=hW(f,vK);t=E.createElement("line",mo({},m,{x1:r,y1:a,x2:i,y2:p,fill:"none",key:s}))}return t}function xK(e){var n=e.x,t=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var p=i.map(function(s,c){var f=nt(nt({},e),{},{x1:n,y1:s,x2:n+t,y2:s,key:"line-".concat(c),index:c});return RA(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-horizontal"},p)}function wK(e){var n=e.y,t=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var p=i.map(function(s,c){var f=nt(nt({},e),{},{x1:s,y1:n,x2:s,y2:n+t,key:"line-".concat(c),index:c});return RA(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-vertical"},p)}function PK(e){var n=e.horizontalFill,t=e.fillOpacity,r=e.x,a=e.y,i=e.width,p=e.height,s=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!n||!n.length)return null;var m=s.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?a+p-v:m[y+1]-v;if(I<=0)return null;var b=y%n.length;return E.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:n[b],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function WK(e){var n=e.vertical,t=n===void 0?!0:n,r=e.verticalFill,a=e.fillOpacity,i=e.x,p=e.y,s=e.width,c=e.height,f=e.verticalPoints;if(!t||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?i+s-v:m[y+1]-v;if(I<=0)return null;var b=y%r.length;return E.createElement("rect",{key:"react-".concat(y),x:v,y:p,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var SK=function(n,t){var r=n.xAxis,a=n.width,i=n.height,p=n.offset;return EM(Ib(nt(nt(nt({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),p.left,p.left+p.width,t)},MK=function(n,t){var r=n.yAxis,a=n.width,i=n.height,p=n.offset;return EM(Ib(nt(nt(nt({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),p.top,p.top+p.height,t)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function H0(e){var n,t,r,a,i,p,s=vb(),c=gb(),f=mG(),m=nt(nt({},e),{},{stroke:(n=e.stroke)!==null&&n!==void 0?n:ti.stroke,fill:(t=e.fill)!==null&&t!==void 0?t:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(p=e.verticalFill)!==null&&p!==void 0?p:ti.verticalFill,x:ce(e.x)?e.x:f.left,y:ce(e.y)?e.y:f.top,width:ce(e.width)?e.width:f.width,height:ce(e.height)?e.height:f.height}),d=m.x,v=m.y,y=m.width,B=m.height,I=m.syncWithTicks,b=m.horizontalValues,W=m.verticalValues,S=cG(),M=fG();if(!ce(y)||y<=0||!ce(B)||B<=0||!ce(d)||d!==+d||!ce(v)||v!==+v)return null;var O=m.verticalCoordinatesGenerator||SK,w=m.horizontalCoordinatesGenerator||MK,A=m.horizontalPoints,N=m.verticalPoints;if((!A||!A.length)&&Re(w)){var P=b&&b.length,H=w({yAxis:M?nt(nt({},M),{},{ticks:P?b:M.ticks}):void 0,width:s,height:c,offset:f},P?!0:I);sr(Array.isArray(H),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(H),"]")),Array.isArray(H)&&(A=H)}if((!N||!N.length)&&Re(O)){var k=W&&W.length,j=O({xAxis:S?nt(nt({},S),{},{ticks:k?W:S.ticks}):void 0,width:s,height:c,offset:f},k?!0:I);sr(Array.isArray(j),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(j),"]")),Array.isArray(j)&&(N=j)}return E.createElement("g",{className:"recharts-cartesian-grid"},E.createElement(BK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),E.createElement(xK,mo({},m,{offset:f,horizontalPoints:A,xAxis:S,yAxis:M})),E.createElement(wK,mo({},m,{offset:f,verticalPoints:N,xAxis:S,yAxis:M})),E.createElement(PK,mo({},m,{horizontalPoints:A})),E.createElement(WK,mo({},m,{verticalPoints:N})))}H0.displayName="CartesianGrid";var AK=["type","layout","connectNulls","ref"],_K=["key"];function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ei(e)}function vW(e,n){if(e==null)return{};var t=OK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function lp(){return lp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lp.apply(this,arguments)}function gW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Pt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gW(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ri(e){return RK(e)||NK(e)||CK(e)||HK()}function HK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CK(e,n){if(e){if(typeof e=="string")return Qg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qg(e,n)}}function NK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function RK(e){if(Array.isArray(e))return Qg(e)}function Qg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function kK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function yW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,EA(r.key),r)}}function EK(e,n,t){return n&&yW(e.prototype,n),t&&yW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function TK(e,n,t){return n=C0(n),jK(e,kA()?Reflect.construct(n,t||[],C0(e).constructor):n.apply(e,t))}function jK(e,n){if(n&&(Ei(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DK(e)}function DK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function kA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(kA=function(){return!!e})()}function C0(e){return C0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C0(e)}function $K(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Yg(e,n)}function Yg(e,n){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,n)}function ir(e,n,t){return n=EA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function EA(e){var n=LK(e,"string");return Ei(n)=="symbol"?n:n+""}function LK(e,n){if(Ei(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function n(){var t;kK(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=TK(this,n,[].concat(a)),ir(t,"state",{isAnimationFinished:!0,totalLength:0}),ir(t,"generateSimpleStrokeDasharray",function(p,s){return"".concat(s,"px ").concat(p-s,"px")}),ir(t,"getStrokeDasharray",function(p,s,c){var f=c.reduce(function(W,S){return W+S});if(!f)return t.generateSimpleStrokeDasharray(s,p);for(var m=Math.floor(p/f),d=p%f,v=s-p,y=[],B=0,I=0;B<c.length;I+=c[B],++B)if(I+c[B]>d){y=[].concat(ri(c.slice(0,B)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ri(n.repeat(c,m)),ri(y),b).map(function(W){return"".concat(W,"px")}).join(", ")}),ir(t,"id",Da("recharts-line-")),ir(t,"pathRef",function(p){t.mainCurve=p}),ir(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0}),t.props.onAnimationEnd&&t.props.onAnimationEnd()}),ir(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1}),t.props.onAnimationStart&&t.props.onAnimationStart()}),t}return $K(n,e),EK(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,p=i.points,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=pt(m,nu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:ln(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement($e,y,d.map(function(B){return E.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:p,xAxis:s,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var p=this.props.isAnimationActive;if(p&&!this.state.isAnimationFinished)return null;var s=this.props,c=s.dot,f=s.points,m=s.dataKey,d=Oe(this.props,!1),v=Oe(c,!0),y=f.map(function(I,b){var W=Pt(Pt(Pt({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return n.renderDotItem(c,W)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement($e,lp({className:"recharts-line-dots",key:"dots"},B),y)}},{key:"renderCurveStatically",value:function(r,a,i,p){var s=this.props,c=s.type,f=s.layout,m=s.connectNulls;s.ref;var d=vW(s,AK),v=Pt(Pt(Pt({},Oe(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},p),{},{type:c,layout:f,connectNulls:m});return E.createElement(Ca,lp({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,p=this.props,s=p.points,c=p.strokeDasharray,f=p.isAnimationActive,m=p.animationBegin,d=p.animationDuration,v=p.animationEasing,y=p.animationId,B=p.animateNewValues,I=p.width,b=p.height,W=this.state,S=W.prevPoints,M=W.totalLength;return E.createElement(Qt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(S){var A=S.length/s.length,N=s.map(function(R,F){var V=Math.floor(F*A);if(S[V]){var G=S[V],Y=hn(G.x,R.x),Q=hn(G.y,R.y);return Pt(Pt({},R),{},{x:Y(w),y:Q(w)})}if(B){var $=hn(I*2,R.x),K=hn(b/2,R.y);return Pt(Pt({},R),{},{x:$(w),y:K(w)})}return Pt(Pt({},R),{},{x:R.x,y:R.y})});return i.renderCurveStatically(N,r,a)}var P=hn(0,M),H=P(w),k;if(c){var j="".concat(c).split(/[,\s]+/gim).map(function(R){return parseFloat(R)});k=i.getStrokeDasharray(H,M,j)}else k=i.generateSimpleStrokeDasharray(M,H);return i.renderCurveStatically(s,r,a,{strokeDasharray:k})})}},{key:"renderCurve",value:function(r,a){var i=this.props,p=i.points,s=i.isAnimationActive,c=this.state,f=c.prevPoints,m=c.totalLength;return s&&p&&p.length&&(!f&&m>0||!ka(f,p))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(p,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,p=a.dot,s=a.points,c=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,S=s.length===1,M=De("recharts-line",c),O=f&&f.allowDataOverflow,w=m&&m.allowDataOverflow,A=O||w,N=ke(b)?this.id:b,P=(r=Oe(p,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=P.r,k=H===void 0?3:H,j=P.strokeWidth,R=j===void 0?2:j,F=D3(p)?p:{},V=F.clipDot,G=V===void 0?!0:V,Y=k*2+R;return E.createElement($e,{className:M},O||w?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?v:v-y/2,y:w?d:d-B/2,width:O?y:y*2,height:w?B:B*2})),!G&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:v-Y/2,y:d-Y/2,width:y+Y,height:B+Y}))):null,!S&&this.renderCurve(A,N),this.renderErrorBar(A,N),(S||p)&&this.renderDots(A,G,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ri(r),[0]):r,p=[],s=0;s<a;++s)p=[].concat(ri(p),ri(i));return p}},{key:"renderDotItem",value:function(r,a){var i;if(E.isValidElement(r))i=E.cloneElement(r,a);else if(Re(r))i=r(a);else{var p=a.key,s=vW(a,_K),c=De("recharts-line-dot",typeof r!="boolean"?r.className:"");i=E.createElement(rs,lp({key:p},s,{className:c}))}return i}}])})(U.PureComponent);ir(qr,"displayName","Line");ir(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(qr,"getComposedData",function(e){var n=e.props,t=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,p=e.dataKey,s=e.bandSize,c=e.displayedData,f=e.offset,m=n.layout,d=c.map(function(v,y){var B=ln(v,p);return m==="horizontal"?{x:Pi({axis:t,ticks:a,bandSize:s,entry:v,index:y}),y:ke(B)?null:r.scale(B),value:B,payload:v}:{x:ke(B)?null:t.scale(B),y:Pi({axis:r,ticks:i,bandSize:s,entry:v,index:y}),value:B,payload:v}});return Pt({points:d,layout:m},f)});var FK=["layout","type","stroke","connectNulls","isRange","ref"],qK=["key"],TA;function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ti(e)}function jA(e,n){if(e==null)return{};var t=zK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function zK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ho.apply(this,arguments)}function bW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Pa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?bW(Object(t),!0).forEach(function(r){Ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):bW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function UK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function IW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$A(r.key),r)}}function VK(e,n,t){return n&&IW(e.prototype,n),t&&IW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function GK(e,n,t){return n=N0(n),KK(e,DA()?Reflect.construct(n,t||[],N0(e).constructor):n.apply(e,t))}function KK(e,n){if(n&&(Ti(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QK(e)}function QK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DA=function(){return!!e})()}function N0(e){return N0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N0(e)}function YK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xg(e,n)}function Xg(e,n){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,n)}function Ir(e,n,t){return n=$A(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $A(e){var n=XK(e,"string");return Ti(n)=="symbol"?n:n+""}function XK(e,n){if(Ti(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var So=(function(e){function n(){var t;UK(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=GK(this,n,[].concat(a)),Ir(t,"state",{isAnimationFinished:!0}),Ir(t,"id",Da("recharts-area-")),Ir(t,"handleAnimationEnd",function(){var p=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),Re(p)&&p()}),Ir(t,"handleAnimationStart",function(){var p=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),Re(p)&&p()}),t}return YK(n,e),VK(n,[{key:"renderDots",value:function(r,a,i){var p=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(p&&!s)return null;var c=this.props,f=c.dot,m=c.points,d=c.dataKey,v=Oe(this.props,!1),y=Oe(f,!0),B=m.map(function(b,W){var S=Pa(Pa(Pa({key:"dot-".concat(W),r:3},v),y),{},{index:W,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:m});return n.renderDotItem(f,S)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement($e,ho({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,p=a.points,s=a.strokeWidth,c=p[0].x,f=p[p.length-1].x,m=r*Math.abs(c-f),d=Ma(p.map(function(v){return v.y||0}));return ce(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.y||0})),d)),ce(d)?E.createElement("rect",{x:c<f?c:c-m,y:0,width:m,height:Math.floor(d+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,p=a.points,s=a.strokeWidth,c=p[0].y,f=p[p.length-1].y,m=r*Math.abs(c-f),d=Ma(p.map(function(v){return v.x||0}));return ce(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.x||0})),d)),ce(d)?E.createElement("rect",{x:0,y:c<f?c:c-m,width:d+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,p){var s=this.props,c=s.layout,f=s.type,m=s.stroke,d=s.connectNulls,v=s.isRange;s.ref;var y=jA(s,FK);return E.createElement($e,{clipPath:i?"url(#clipPath-".concat(p,")"):null},E.createElement(Ca,ho({},Oe(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&E.createElement(Ca,ho({},Oe(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&E.createElement(Ca,ho({},Oe(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,p=this.props,s=p.points,c=p.baseLine,f=p.isAnimationActive,m=p.animationBegin,d=p.animationDuration,v=p.animationEasing,y=p.animationId,B=this.state,I=B.prevPoints,b=B.prevBaseLine;return E.createElement(Qt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(W){var S=W.t;if(I){var M=I.length/s.length,O=s.map(function(P,H){var k=Math.floor(H*M);if(I[k]){var j=I[k],R=hn(j.x,P.x),F=hn(j.y,P.y);return Pa(Pa({},P),{},{x:R(S),y:F(S)})}return P}),w;if(ce(c)&&typeof c=="number"){var A=hn(b,c);w=A(S)}else if(ke(c)||Yi(c)){var N=hn(b,0);w=N(S)}else w=c.map(function(P,H){var k=Math.floor(H*M);if(b[k]){var j=b[k],R=hn(j.x,P.x),F=hn(j.y,P.y);return Pa(Pa({},P),{},{x:R(S),y:F(S)})}return P});return i.renderAreaStatically(O,w,r,a)}return E.createElement($e,null,E.createElement("defs",null,E.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(S))),E.createElement($e,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(s,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,p=i.points,s=i.baseLine,c=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&p&&p.length&&(!m&&v>0||!ka(m,p)||!ka(d,s))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(p,s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,p=a.dot,s=a.points,c=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,S=s.length===1,M=De("recharts-area",c),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,A=O||w,N=ke(b)?this.id:b,P=(r=Oe(p,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=P.r,k=H===void 0?3:H,j=P.strokeWidth,R=j===void 0?2:j,F=D3(p)?p:{},V=F.clipDot,G=V===void 0?!0:V,Y=k*2+R;return E.createElement($e,{className:M},O||w?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?m:m-y/2,y:w?f:f-B/2,width:O?y:y*2,height:w?B:B*2})),!G&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:m-Y/2,y:f-Y/2,width:y+Y,height:B+Y}))):null,S?null:this.renderArea(A,N),(p||S)&&this.renderDots(A,G,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(U.PureComponent);TA=So;Ir(So,"displayName","Area");Ir(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(So,"getBaseValue",function(e,n,t,r){var a=e.layout,i=e.baseValue,p=n.props.baseValue,s=p??i;if(ce(s)&&typeof s=="number")return s;var c=a==="horizontal"?r:t,f=c.scale.domain();if(c.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return s==="dataMin"?d:s==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return s==="dataMin"?f[0]:s==="dataMax"?f[1]:f[0]});Ir(So,"getComposedData",function(e){var n=e.props,t=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,p=e.yAxisTicks,s=e.bandSize,c=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=n.layout,B=f&&f.length,I=TA.getBaseValue(n,t,r,a),b=y==="horizontal",W=!1,S=d.map(function(O,w){var A;B?A=f[m+w]:(A=ln(O,c),Array.isArray(A)?W=!0:A=[I,A]);var N=A[1]==null||B&&ln(O,c)==null;return b?{x:Pi({axis:r,ticks:i,bandSize:s,entry:O,index:w}),y:N?null:a.scale(A[1]),value:A,payload:O}:{x:N?null:r.scale(A[1]),y:Pi({axis:a,ticks:p,bandSize:s,entry:O,index:w}),value:A,payload:O}}),M;return B||W?M=S.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):M=b?a.scale(I):r.scale(I),Pa({points:S,baseLine:M,layout:y,isRange:W},v)});Ir(So,"renderDotItem",function(e,n){var t;if(E.isValidElement(e))t=E.cloneElement(e,n);else if(Re(e))t=e(n);else{var r=De("recharts-area-dot",typeof e!="boolean"?e.className:""),a=n.key,i=jA(n,qK);t=E.createElement(rs,ho({},i,{key:a,className:r}))}return t});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ji(e)}function ZK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function JK(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,qA(r.key),r)}}function eQ(e,n,t){return n&&JK(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function nQ(e,n,t){return n=R0(n),tQ(e,LA()?Reflect.construct(n,t||[],R0(e).constructor):n.apply(e,t))}function tQ(e,n){if(n&&(ji(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rQ(e)}function rQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LA=function(){return!!e})()}function R0(e){return R0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R0(e)}function aQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zg(e,n)}function Zg(e,n){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,n)}function FA(e,n,t){return n=qA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function qA(e){var n=oQ(e,"string");return ji(n)=="symbol"?n:n+""}function oQ(e,n){if(ji(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var xc=(function(e){function n(){return ZK(this,n),nQ(this,n,arguments)}return aQ(n,e),eQ(n,[{key:"render",value:function(){return null}}])})(E.Component);FA(xc,"displayName","ZAxis");FA(xc,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var iQ=["option","isActive"];function cp(){return cp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cp.apply(this,arguments)}function uQ(e,n){if(e==null)return{};var t=pQ(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function pQ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function sQ(e){var n=e.option,t=e.isActive,r=uQ(e,iQ);return typeof n=="string"?E.createElement(b0,cp({option:E.createElement(X0,cp({type:n},r)),isActive:t,shapeType:"symbols"},r)):E.createElement(b0,cp({option:n,isActive:t,shapeType:"symbols"},r))}function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Di(e)}function fp(){return fp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fp.apply(this,arguments)}function BW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function qt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?BW(Object(t),!0).forEach(function(r){_a(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):BW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function lQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function xW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,UA(r.key),r)}}function cQ(e,n,t){return n&&xW(e.prototype,n),t&&xW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fQ(e,n,t){return n=k0(n),dQ(e,zA()?Reflect.construct(n,t||[],k0(e).constructor):n.apply(e,t))}function dQ(e,n){if(n&&(Di(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mQ(e)}function mQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zA=function(){return!!e})()}function k0(e){return k0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k0(e)}function hQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Jg(e,n)}function Jg(e,n){return Jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jg(e,n)}function _a(e,n,t){return n=UA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function UA(e){var n=vQ(e,"string");return Di(n)=="symbol"?n:n+""}function vQ(e,n){if(Di(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var wc=(function(e){function n(){var t;lQ(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=fQ(this,n,[].concat(a)),_a(t,"state",{isAnimationFinished:!1}),_a(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),_a(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),_a(t,"id",Da("recharts-scatter-")),t}return hQ(n,e),cQ(n,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,p=i.shape,s=i.activeShape,c=i.activeIndex,f=Oe(this.props,!1);return r.map(function(m,d){var v=c===d,y=v?s:p,B=qt(qt({},f),m);return E.createElement($e,fp({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ra(a.props,m,d),{role:"img"}),E.createElement(sQ,fp({option:y,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,p=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return E.createElement(Qt,{begin:s,duration:c,isActive:p,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,B=i.map(function(I,b){var W=d&&d[b];if(W){var S=hn(W.cx,I.cx),M=hn(W.cy,I.cy),O=hn(W.size,I.size);return qt(qt({},I),{},{cx:S(y),cy:M(y),size:O(y)})}var w=hn(0,I.size);return qt(qt({},I),{},{size:w(y)})});return E.createElement($e,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,p=this.state.prevPoints;return i&&a&&a.length&&(!p||!ka(p,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,p=a.xAxis,s=a.yAxis,c=a.children,f=pt(c,nu);return f?f.map(function(m,d){var v=m.props,y=v.direction,B=v.dataKey;return E.cloneElement(m,{key:"".concat(y,"-").concat(B,"-").concat(i[d]),data:i,xAxis:p,yAxis:s,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,W){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:ln(b,W)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,p=r.lineType,s=r.lineJointType,c=Oe(this.props,!1),f=Oe(i,!1),m,d;if(p==="joint")m=a.map(function(M){return{x:M.cx,y:M.cy}});else if(p==="fitting"){var v=pE(a),y=v.xmin,B=v.xmax,I=v.a,b=v.b,W=function(O){return I*O+b};m=[{x:y,y:W(y)},{x:B,y:W(B)}]}var S=qt(qt(qt({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:m});return E.isValidElement(i)?d=E.cloneElement(i,S):Re(i)?d=i(S):d=E.createElement(Ca,fp({},S,{type:s})),E.createElement($e,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,p=r.line,s=r.className,c=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,y=r.height,B=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,W=De("recharts-scatter",s),S=c&&c.allowDataOverflow,M=f&&f.allowDataOverflow,O=S||M,w=ke(B)?this.id:B;return E.createElement($e,{className:W,clipPath:O?"url(#clipPath-".concat(w,")"):null},S||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(w)},E.createElement("rect",{x:S?m:m-v/2,y:M?d:d-y/2,width:S?v:v*2,height:M?y:y*2}))):null,p&&this.renderLine(),this.renderErrorBar(),E.createElement($e,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(U.PureComponent);_a(wc,"displayName","Scatter");_a(wc,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});_a(wc,"getComposedData",function(e){var n=e.xAxis,t=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,p=e.xAxisTicks,s=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,m=pt(a.props.children,Zp),d=ke(n.dataKey)?a.props.dataKey:n.dataKey,v=ke(t.dataKey)?a.props.dataKey:t.dataKey,y=r&&r.dataKey,B=r?r.range:xc.defaultProps.range,I=B&&B[0],b=n.scale.bandwidth?n.scale.bandwidth():0,W=t.scale.bandwidth?t.scale.bandwidth():0,S=i.map(function(M,O){var w=ln(M,d),A=ln(M,v),N=!ke(y)&&ln(M,y)||"-",P=[{name:ke(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:w,payload:M,dataKey:d,type:f},{name:ke(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:A,payload:M,dataKey:v,type:f}];N!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:M,dataKey:y,type:f});var H=Pi({axis:n,ticks:p,bandSize:b,entry:M,index:O,dataKey:d}),k=Pi({axis:t,ticks:s,bandSize:W,entry:M,index:O,dataKey:v}),j=N!=="-"?r.scale(N):I,R=Math.sqrt(Math.max(j,0)/Math.PI);return qt(qt({},M),{},{cx:H,cy:k,x:H-R,y:k-R,xAxis:n,yAxis:t,zAxis:r,width:2*R,height:2*R,size:j,node:{x:w,y:A,z:N},tooltipPayload:P,tooltipPosition:{x:H,y:k},payload:M},m&&m[O]&&m[O].props)});return qt({points:S},c)});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$i(e)}function gQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function yQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KA(r.key),r)}}function bQ(e,n,t){return n&&yQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function IQ(e,n,t){return n=E0(n),BQ(e,VA()?Reflect.construct(n,t||[],E0(e).constructor):n.apply(e,t))}function BQ(e,n){if(n&&($i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xQ(e)}function xQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VA=function(){return!!e})()}function E0(e){return E0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E0(e)}function wQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ey(e,n)}function ey(e,n){return ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ey(e,n)}function GA(e,n,t){return n=KA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function KA(e){var n=PQ(e,"string");return $i(n)=="symbol"?n:n+""}function PQ(e,n){if($i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ny(){return ny=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ny.apply(this,arguments)}function WQ(e){var n=e.xAxisId,t=vb(),r=gb(),a=wA(n);return a==null?null:E.createElement(tu,ny({},a,{className:De("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:t,height:r},ticksGenerator:function(p){return Fr(p,!0)}}))}var Ea=(function(e){function n(){return gQ(this,n),IQ(this,n,arguments)}return wQ(n,e),bQ(n,[{key:"render",value:function(){return E.createElement(WQ,this.props)}}])})(E.Component);GA(Ea,"displayName","XAxis");GA(Ea,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Li(e)}function SQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function MQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XA(r.key),r)}}function AQ(e,n,t){return n&&MQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _Q(e,n,t){return n=T0(n),OQ(e,QA()?Reflect.construct(n,t||[],T0(e).constructor):n.apply(e,t))}function OQ(e,n){if(n&&(Li(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HQ(e)}function HQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function QA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(QA=function(){return!!e})()}function T0(e){return T0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T0(e)}function CQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ty(e,n)}function ty(e,n){return ty=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ty(e,n)}function YA(e,n,t){return n=XA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function XA(e){var n=NQ(e,"string");return Li(n)=="symbol"?n:n+""}function NQ(e,n){if(Li(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ry(){return ry=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ry.apply(this,arguments)}var RQ=function(n){var t=n.yAxisId,r=vb(),a=gb(),i=PA(t);return i==null?null:E.createElement(tu,ry({},i,{className:De("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(s){return Fr(s,!0)}}))},Br=(function(e){function n(){return SQ(this,n),_Q(this,n,arguments)}return CQ(n,e),AQ(n,[{key:"render",value:function(){return E.createElement(RQ,this.props)}}])})(E.Component);YA(Br,"displayName","YAxis");YA(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function wW(e){return jQ(e)||TQ(e)||EQ(e)||kQ()}function kQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EQ(e,n){if(e){if(typeof e=="string")return ay(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ay(e,n)}}function TQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jQ(e){if(Array.isArray(e))return ay(e)}function ay(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var oy=function(n,t,r,a,i){var p=pt(n,bb),s=pt(n,bc),c=[].concat(wW(p),wW(s)),f=pt(n,Bc),m="".concat(a,"Id"),d=a[0],v=t;if(c.length&&(v=c.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&ce(b.props[d])){var W=b.props[d];return[Math.min(I[0],W),Math.max(I[1],W)]}return I},v)),f.length){var y="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&ce(b.props[y])&&ce(b.props[B])){var W=b.props[y],S=b.props[B];return[Math.min(I[0],W,S),Math.max(I[1],W,S)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return ce(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},xv={exports:{}},PW;function DQ(){return PW||(PW=1,(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function a(c,f,m){this.fn=c,this.context=f,this.once=m||!1}function i(c,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var y=new a(m,d||c,v),B=t?t+f:f;return c._events[B]?c._events[B].fn?c._events[B]=[c._events[B],y]:c._events[B].push(y):(c._events[B]=y,c._eventsCount++),c}function p(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)n.call(m,d)&&f.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},s.prototype.listeners=function(f){var m=t?t+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,B=new Array(y);v<y;v++)B[v]=d[v].fn;return B},s.prototype.listenerCount=function(f){var m=t?t+f:f,d=this._events[m];return d?d.fn?1:d.length:0},s.prototype.emit=function(f,m,d,v,y,B){var I=t?t+f:f;if(!this._events[I])return!1;var b=this._events[I],W=arguments.length,S,M;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),W){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,m),!0;case 3:return b.fn.call(b.context,m,d),!0;case 4:return b.fn.call(b.context,m,d,v),!0;case 5:return b.fn.call(b.context,m,d,v,y),!0;case 6:return b.fn.call(b.context,m,d,v,y,B),!0}for(M=1,S=new Array(W-1);M<W;M++)S[M-1]=arguments[M];b.fn.apply(b.context,S)}else{var O=b.length,w;for(M=0;M<O;M++)switch(b[M].once&&this.removeListener(f,b[M].fn,void 0,!0),W){case 1:b[M].fn.call(b[M].context);break;case 2:b[M].fn.call(b[M].context,m);break;case 3:b[M].fn.call(b[M].context,m,d);break;case 4:b[M].fn.call(b[M].context,m,d,v);break;default:if(!S)for(w=1,S=new Array(W-1);w<W;w++)S[w-1]=arguments[w];b[M].fn.apply(b[M].context,S)}}return!0},s.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},s.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},s.prototype.removeListener=function(f,m,d,v){var y=t?t+f:f;if(!this._events[y])return this;if(!m)return p(this,y),this;var B=this._events[y];if(B.fn)B.fn===m&&(!v||B.once)&&(!d||B.context===d)&&p(this,y);else{for(var I=0,b=[],W=B.length;I<W;I++)(B[I].fn!==m||v&&!B[I].once||d&&B[I].context!==d)&&b.push(B[I]);b.length?this._events[y]=b.length===1?b[0]:b:p(this,y)}return this},s.prototype.removeAllListeners=function(f){var m;return f?(m=t?t+f:f,this._events[m]&&p(this,m)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(xv)),xv.exports}var $Q=DQ();const LQ=Xe($Q);var wv=new LQ,Pv="recharts.syncMouseEvents";function Gp(e){"@babel/helpers - typeof";return Gp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gp(e)}function FQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function qQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ZA(r.key),r)}}function zQ(e,n,t){return n&&qQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wv(e,n,t){return n=ZA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ZA(e){var n=UQ(e,"string");return Gp(n)=="symbol"?n:n+""}function UQ(e,n){if(Gp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Gp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var VQ=(function(){function e(){FQ(this,e),Wv(this,"activeIndex",0),Wv(this,"coordinateList",[]),Wv(this,"layout","horizontal")}return zQ(e,[{key:"setDetails",value:function(t){var r,a=t.coordinateList,i=a===void 0?null:a,p=t.container,s=p===void 0?null:p,c=t.layout,f=c===void 0?null:c,m=t.offset,d=m===void 0?null:m,v=t.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=s??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(t){if(this.coordinateList.length!==0)switch(t.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(t){this.activeIndex=t}},{key:"spoofMouse",value:function(){var t,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,p=a.y,s=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((t=window)===null||t===void 0?void 0:t.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=p+this.offset.top+s/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function GQ(e,n,t){if(t==="number"&&n===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&ce(r)&&ce(a))return!0}return!1}function KQ(e,n,t,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?n.x-a:t.left+.5,y:e==="horizontal"?t.top+.5:n.y-a,width:e==="horizontal"?r:t.width-1,height:e==="horizontal"?t.height-1:r}}function JA(e){var n=e.cx,t=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,p=on(n,t,r,a),s=on(n,t,r,i);return{points:[p,s],cx:n,cy:t,radius:r,startAngle:a,endAngle:i}}function QQ(e,n,t){var r,a,i,p;if(e==="horizontal")r=n.x,i=r,a=t.top,p=t.top+t.height;else if(e==="vertical")a=n.y,p=a,r=t.left,i=t.left+t.width;else if(n.cx!=null&&n.cy!=null)if(e==="centric"){var s=n.cx,c=n.cy,f=n.innerRadius,m=n.outerRadius,d=n.angle,v=on(s,c,f,d),y=on(s,c,m,d);r=v.x,a=v.y,i=y.x,p=y.y}else return JA(n);return[{x:r,y:a},{x:i,y:p}]}function Kp(e){"@babel/helpers - typeof";return Kp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kp(e)}function WW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ml(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?WW(Object(t),!0).forEach(function(r){YQ(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):WW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function YQ(e,n,t){return n=XQ(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function XQ(e){var n=ZQ(e,"string");return Kp(n)=="symbol"?n:n+""}function ZQ(e,n){if(Kp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Kp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function JQ(e){var n,t,r=e.element,a=e.tooltipEventType,i=e.isActive,p=e.activeCoordinate,s=e.activePayload,c=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(n=r.props.cursor)!==null&&n!==void 0?n:(t=r.type.defaultProps)===null||t===void 0?void 0:t.cursor;if(!r||!y||!i||!p||v!=="ScatterChart"&&a!=="axis")return null;var B,I=Ca;if(v==="ScatterChart")B=p,I=Vz;else if(v==="BarChart")B=KQ(d,p,c,m),I=cb;else if(d==="radial"){var b=JA(p),W=b.cx,S=b.cy,M=b.radius,O=b.startAngle,w=b.endAngle;B={cx:W,cy:S,startAngle:O,endAngle:w,innerRadius:M,outerRadius:M},I=GM}else B={points:QQ(d,p,c)},I=Ca;var A=Ml(Ml(Ml(Ml({stroke:"#ccc",pointerEvents:"none"},c),B),Oe(y,!1)),{},{payload:s,payloadIndex:f,className:De("recharts-tooltip-cursor",y.className)});return U.isValidElement(y)?U.cloneElement(y,A):U.createElement(I,A)}var eY=["item"],nY=["children","className","width","height","style","compact","title","desc"];function Fi(e){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fi(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},si.apply(this,arguments)}function SW(e,n){return aY(e)||rY(e,n)||n_(e,n)||tY()}function tY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rY(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function aY(e){if(Array.isArray(e))return e}function MW(e,n){if(e==null)return{};var t=oY(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function oY(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function iY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function uY(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,t_(r.key),r)}}function pY(e,n,t){return n&&uY(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function sY(e,n,t){return n=j0(n),lY(e,e_()?Reflect.construct(n,t||[],j0(e).constructor):n.apply(e,t))}function lY(e,n){if(n&&(Fi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cY(e)}function cY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function e_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(e_=function(){return!!e})()}function j0(e){return j0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j0(e)}function fY(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&iy(e,n)}function iy(e,n){return iy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},iy(e,n)}function qi(e){return hY(e)||mY(e)||n_(e)||dY()}function dY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n_(e,n){if(e){if(typeof e=="string")return uy(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return uy(e,n)}}function mY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hY(e){if(Array.isArray(e))return uy(e)}function uy(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function AW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?AW(Object(t),!0).forEach(function(r){Ee(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ee(e,n,t){return n=t_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t_(e){var n=vY(e,"string");return Fi(n)=="symbol"?n:n+""}function vY(e,n){if(Fi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var gY={xAxis:["bottom","top"],yAxis:["left","right"]},yY={width:"100%",height:"100%"},r_={x:0,y:0};function Al(e){return e}var bY=function(n,t){return t==="horizontal"?n.x:t==="vertical"?n.y:t==="centric"?n.angle:n.radius},IY=function(n,t,r,a){var i=t.find(function(m){return m&&m.index===r});if(i){if(n==="horizontal")return{x:i.coordinate,y:a.y};if(n==="vertical")return{x:a.x,y:i.coordinate};if(n==="centric"){var p=i.coordinate,s=a.radius;return oe(oe(oe({},a),on(a.cx,a.cy,s,p)),{},{angle:p,radius:s})}var c=i.coordinate,f=a.angle;return oe(oe(oe({},a),on(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return r_},Pc=function(n,t){var r=t.graphicalItems,a=t.dataStartIndex,i=t.dataEndIndex,p=(r??[]).reduce(function(s,c){var f=c.props.data;return f&&f.length?[].concat(qi(s),qi(f)):s},[]);return p.length>0?p:n&&n.length&&ce(a)&&ce(i)?n.slice(a,i+1):[]};function a_(e){return e==="number"?[0,"auto"]:void 0}var py=function(n,t,r,a){var i=n.graphicalItems,p=n.tooltipAxis,s=Pc(t,n);return r<0||!i||!i.length||r>=s.length?null:i.reduce(function(c,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:t;d&&n.dataStartIndex+n.dataEndIndex!==0&&n.dataEndIndex-n.dataStartIndex>=r&&(d=d.slice(n.dataStartIndex,n.dataEndIndex+1));var v;if(p.dataKey&&!p.allowDuplicatedCategory){var y=d===void 0?s:d;v=kl(y,p.dataKey,a)}else v=d&&d[r]||s[r];return v?[].concat(qi(c),[LM(f,v)]):c},[])},_W=function(n,t,r,a){var i=a||{x:n.chartX,y:n.chartY},p=bY(i,r),s=n.orderedTooltipTicks,c=n.tooltipAxis,f=n.tooltipTicks,m=d9(p,s,f,c);if(m>=0&&f){var d=f[m]&&f[m].value,v=py(n,t,m,d),y=IY(r,s,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},BY=function(n,t){var r=t.axes,a=t.graphicalItems,i=t.axisType,p=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=n.stackOffset,y=kM(m,i);return r.reduce(function(B,I){var b,W=I.type.defaultProps!==void 0?oe(oe({},I.type.defaultProps),I.props):I.props,S=W.type,M=W.dataKey,O=W.allowDataOverflow,w=W.allowDuplicatedCategory,A=W.scale,N=W.ticks,P=W.includeHidden,H=W[p];if(B[H])return B;var k=Pc(n.data,{graphicalItems:a.filter(function(L){var Z,se=p in L.props?L.props[p]:(Z=L.type.defaultProps)===null||Z===void 0?void 0:Z[p];return se===H}),dataStartIndex:c,dataEndIndex:f}),j=k.length,R,F,V;GQ(W.domain,O,S)&&(R=bg(W.domain,null,O),y&&(S==="number"||A!=="auto")&&(V=ip(k,M,"category")));var G=a_(S);if(!R||R.length===0){var Y,Q=(Y=W.domain)!==null&&Y!==void 0?Y:G;if(M){if(R=ip(k,M,S),S==="category"&&y){var $=uE(R);w&&$?(F=R,R=B0(0,j)):w||(R=M4(Q,R,I).reduce(function(L,Z){return L.indexOf(Z)>=0?L:[].concat(qi(L),[Z])},[]))}else if(S==="category")w?R=R.filter(function(L){return L!==""&&!ke(L)}):R=M4(Q,R,I).reduce(function(L,Z){return L.indexOf(Z)>=0||Z===""||ke(Z)?L:[].concat(qi(L),[Z])},[]);else if(S==="number"){var K=y9(k,a.filter(function(L){var Z,se,he=p in L.props?L.props[p]:(Z=L.type.defaultProps)===null||Z===void 0?void 0:Z[p],Ie="hide"in L.props?L.props.hide:(se=L.type.defaultProps)===null||se===void 0?void 0:se.hide;return he===H&&(P||!Ie)}),M,i,m);K&&(R=K)}y&&(S==="number"||A!=="auto")&&(V=ip(k,M,"category"))}else y?R=B0(0,j):s&&s[H]&&s[H].hasStack&&S==="number"?R=v==="expand"?[0,1]:$M(s[H].stackGroups,c,f):R=RM(k,a.filter(function(L){var Z=p in L.props?L.props[p]:L.type.defaultProps[p],se="hide"in L.props?L.props.hide:L.type.defaultProps.hide;return Z===H&&(P||!se)}),S,m,!0);if(S==="number")R=oy(d,R,H,i,N),Q&&(R=bg(Q,R,O));else if(S==="category"&&Q){var ne=Q,T=R.every(function(L){return ne.indexOf(L)>=0});T&&(R=ne)}}return oe(oe({},B),{},Ee({},H,oe(oe({},W),{},{axisType:i,domain:R,categoricalDomain:V,duplicateDomain:F,originalDomain:(b=W.domain)!==null&&b!==void 0?b:G,isCategorical:y,layout:m})))},{})},xY=function(n,t){var r=t.graphicalItems,a=t.Axis,i=t.axisType,p=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=Pc(n.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,B=kM(m,i),I=-1;return r.reduce(function(b,W){var S=W.type.defaultProps!==void 0?oe(oe({},W.type.defaultProps),W.props):W.props,M=S[p],O=a_("number");if(!b[M]){I++;var w;return B?w=B0(0,y):s&&s[M]&&s[M].hasStack?(w=$M(s[M].stackGroups,c,f),w=oy(d,w,M,i)):(w=bg(O,RM(v,r.filter(function(A){var N,P,H=p in A.props?A.props[p]:(N=A.type.defaultProps)===null||N===void 0?void 0:N[p],k="hide"in A.props?A.props.hide:(P=A.type.defaultProps)===null||P===void 0?void 0:P.hide;return H===M&&!k}),"number",m),a.defaultProps.allowDataOverflow),w=oy(d,w,M,i)),oe(oe({},b),{},Ee({},M,oe(oe({axisType:i},a.defaultProps),{},{hide:!0,orientation:Ot(gY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:B,layout:m})))}return b},{})},wY=function(n,t){var r=t.axisType,a=r===void 0?"xAxis":r,i=t.AxisComp,p=t.graphicalItems,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.children,d="".concat(a,"Id"),v=pt(m,i),y={};return v&&v.length?y=BY(n,{axes:v,graphicalItems:p,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f}):p&&p.length&&(y=xY(n,{Axis:i,graphicalItems:p,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f})),y},PY=function(n){var t=Sa(n),r=Fr(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ty(r,function(a){return a.coordinate}),tooltipAxis:t,tooltipAxisBandSize:u0(t,r)}},OW=function(n){var t=n.children,r=n.defaultShowTooltip,a=St(t,Oi),i=0,p=0;return n.data&&n.data.length!==0&&(p=n.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(p=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:p,activeTooltipIndex:-1,isTooltipActive:!!r}},WY=function(n){return!n||!n.length?!1:n.some(function(t){var r=Ur(t&&t.type);return r&&r.indexOf("Bar")>=0})},HW=function(n){return n==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:n==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:n==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},SY=function(n,t){var r=n.props,a=n.graphicalItems,i=n.xAxisMap,p=i===void 0?{}:i,s=n.yAxisMap,c=s===void 0?{}:s,f=r.width,m=r.height,d=r.children,v=r.margin||{},y=St(d,Oi),B=St(d,Oa),I=Object.keys(c).reduce(function(w,A){var N=c[A],P=N.orientation;return!N.mirror&&!N.hide?oe(oe({},w),{},Ee({},P,w[P]+N.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(p).reduce(function(w,A){var N=p[A],P=N.orientation;return!N.mirror&&!N.hide?oe(oe({},w),{},Ee({},P,Ot(w,"".concat(P))+N.height)):w},{top:v.top||0,bottom:v.bottom||0}),W=oe(oe({},b),I),S=W.bottom;y&&(W.bottom+=y.props.height||Oi.defaultProps.height),B&&t&&(W=v9(W,a,r,t));var M=f-W.left-W.right,O=m-W.top-W.bottom;return oe(oe({brushBottom:S},W),{},{width:Math.max(M,0),height:Math.max(O,0)})},MY=function(n,t){if(t==="xAxis")return n[t].width;if(t==="yAxis")return n[t].height},Wc=function(n){var t=n.chartName,r=n.GraphicalChild,a=n.defaultTooltipEventType,i=a===void 0?"axis":a,p=n.validateTooltipEventTypes,s=p===void 0?["axis"]:p,c=n.axisComponents,f=n.legendContent,m=n.formatAxisMap,d=n.defaultProps,v=function(W,S){var M=S.graphicalItems,O=S.stackGroups,w=S.offset,A=S.updateId,N=S.dataStartIndex,P=S.dataEndIndex,H=W.barSize,k=W.layout,j=W.barGap,R=W.barCategoryGap,F=W.maxBarSize,V=HW(k),G=V.numericAxisName,Y=V.cateAxisName,Q=WY(M),$=[];return M.forEach(function(K,ne){var T=Pc(W.data,{graphicalItems:[K],dataStartIndex:N,dataEndIndex:P}),L=K.type.defaultProps!==void 0?oe(oe({},K.type.defaultProps),K.props):K.props,Z=L.dataKey,se=L.maxBarSize,he=L["".concat(G,"Id")],Ie=L["".concat(Y,"Id")],Be={},me=c.reduce(function(xn,gn){var Ht=S["".concat(gn.axisType,"Map")],yn=L["".concat(gn.axisType,"Id")];Ht&&Ht[yn]||gn.axisType==="zAxis"||Io();var Qn=Ht[yn];return oe(oe({},xn),{},Ee(Ee({},gn.axisType,Qn),"".concat(gn.axisType,"Ticks"),Fr(Qn)))},Be),ae=me[Y],re=me["".concat(Y,"Ticks")],ie=O&&O[he]&&O[he].hasStack&&M9(K,O[he].stackGroups),J=Ur(K.type).indexOf("Bar")>=0,ve=u0(ae,re),fe=[],ye=Q&&m9({barSize:H,stackGroups:O,totalSize:MY(me,Y)});if(J){var ge,xe,je=ke(se)?F:se,Fe=(ge=(xe=u0(ae,re,!0))!==null&&xe!==void 0?xe:je)!==null&&ge!==void 0?ge:0;fe=h9({barGap:j,barCategoryGap:R,bandSize:Fe!==ve?Fe:ve,sizeList:ye[Ie],maxBarSize:je}),Fe!==ve&&(fe=fe.map(function(xn){return oe(oe({},xn),{},{position:oe(oe({},xn.position),{},{offset:xn.position.offset-Fe/2})})}))}var Ke=K&&K.type&&K.type.getComposedData;Ke&&$.push({props:oe(oe({},Ke(oe(oe({},me),{},{displayedData:T,props:W,dataKey:Z,item:K,bandSize:ve,barPosition:fe,offset:w,stackedData:ie,layout:k,dataStartIndex:N,dataEndIndex:P}))),{},Ee(Ee(Ee({key:K.key||"item-".concat(ne)},G,me[G]),Y,me[Y]),"animationId",A)),childIndex:bE(K,W.children),item:K})}),$},y=function(W,S){var M=W.props,O=W.dataStartIndex,w=W.dataEndIndex,A=W.updateId;if(!FB({props:M}))return null;var N=M.children,P=M.layout,H=M.stackOffset,k=M.data,j=M.reverseStackOrder,R=HW(P),F=R.numericAxisName,V=R.cateAxisName,G=pt(N,r),Y=W9(k,G,"".concat(F,"Id"),"".concat(V,"Id"),H,j),Q=c.reduce(function(L,Z){var se="".concat(Z.axisType,"Map");return oe(oe({},L),{},Ee({},se,wY(M,oe(oe({},Z),{},{graphicalItems:G,stackGroups:Z.axisType===F&&Y,dataStartIndex:O,dataEndIndex:w}))))},{}),$=SY(oe(oe({},Q),{},{props:M,graphicalItems:G}),S==null?void 0:S.legendBBox);Object.keys(Q).forEach(function(L){Q[L]=m(M,Q[L],$,L.replace("Map",""),t)});var K=Q["".concat(V,"Map")],ne=PY(K),T=v(M,oe(oe({},Q),{},{dataStartIndex:O,dataEndIndex:w,updateId:A,graphicalItems:G,stackGroups:Y,offset:$}));return oe(oe({formattedGraphicalItems:T,graphicalItems:G,offset:$,stackGroups:Y},ne),Q)},B=(function(b){function W(S){var M,O,w;return iY(this,W),w=sY(this,W,[S]),Ee(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Ee(w,"accessibilityManager",new VQ),Ee(w,"handleLegendBBoxUpdate",function(A){if(A){var N=w.state,P=N.dataStartIndex,H=N.dataEndIndex,k=N.updateId;w.setState(oe({legendBBox:A},y({props:w.props,dataStartIndex:P,dataEndIndex:H,updateId:k},oe(oe({},w.state),{},{legendBBox:A}))))}}),Ee(w,"handleReceiveSyncEvent",function(A,N,P){if(w.props.syncId===A){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(N)}}),Ee(w,"handleBrushChange",function(A){var N=A.startIndex,P=A.endIndex;if(N!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var H=w.state.updateId;w.setState(function(){return oe({dataStartIndex:N,dataEndIndex:P},y({props:w.props,dataStartIndex:N,dataEndIndex:P,updateId:H},w.state))}),w.triggerSyncEvent({dataStartIndex:N,dataEndIndex:P})}}),Ee(w,"handleMouseEnter",function(A){var N=w.getMouseInfo(A);if(N){var P=oe(oe({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var H=w.props.onMouseEnter;Re(H)&&H(P,A)}}),Ee(w,"triggeredAfterMouseMove",function(A){var N=w.getMouseInfo(A),P=N?oe(oe({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var H=w.props.onMouseMove;Re(H)&&H(P,A)}),Ee(w,"handleItemMouseEnter",function(A){w.setState(function(){return{isTooltipActive:!0,activeItem:A,activePayload:A.tooltipPayload,activeCoordinate:A.tooltipPosition||{x:A.cx,y:A.cy}}})}),Ee(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Ee(w,"handleMouseMove",function(A){A.persist(),w.throttleTriggeredAfterMouseMove(A)}),Ee(w,"handleMouseLeave",function(A){w.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};w.setState(N),w.triggerSyncEvent(N);var P=w.props.onMouseLeave;Re(P)&&P(N,A)}),Ee(w,"handleOuterEvent",function(A){var N=yE(A),P=Ot(w.props,"".concat(N));if(N&&Re(P)){var H,k;/.*touch.*/i.test(N)?k=w.getMouseInfo(A.changedTouches[0]):k=w.getMouseInfo(A),P((H=k)!==null&&H!==void 0?H:{},A)}}),Ee(w,"handleClick",function(A){var N=w.getMouseInfo(A);if(N){var P=oe(oe({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var H=w.props.onClick;Re(H)&&H(P,A)}}),Ee(w,"handleMouseDown",function(A){var N=w.props.onMouseDown;if(Re(N)){var P=w.getMouseInfo(A);N(P,A)}}),Ee(w,"handleMouseUp",function(A){var N=w.props.onMouseUp;if(Re(N)){var P=w.getMouseInfo(A);N(P,A)}}),Ee(w,"handleTouchMove",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(A.changedTouches[0])}),Ee(w,"handleTouchStart",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.handleMouseDown(A.changedTouches[0])}),Ee(w,"handleTouchEnd",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.handleMouseUp(A.changedTouches[0])}),Ee(w,"handleDoubleClick",function(A){var N=w.props.onDoubleClick;if(Re(N)){var P=w.getMouseInfo(A);N(P,A)}}),Ee(w,"handleContextMenu",function(A){var N=w.props.onContextMenu;if(Re(N)){var P=w.getMouseInfo(A);N(P,A)}}),Ee(w,"triggerSyncEvent",function(A){w.props.syncId!==void 0&&wv.emit(Pv,w.props.syncId,A,w.eventEmitterSymbol)}),Ee(w,"applySyncEvent",function(A){var N=w.props,P=N.layout,H=N.syncMethod,k=w.state.updateId,j=A.dataStartIndex,R=A.dataEndIndex;if(A.dataStartIndex!==void 0||A.dataEndIndex!==void 0)w.setState(oe({dataStartIndex:j,dataEndIndex:R},y({props:w.props,dataStartIndex:j,dataEndIndex:R,updateId:k},w.state)));else if(A.activeTooltipIndex!==void 0){var F=A.chartX,V=A.chartY,G=A.activeTooltipIndex,Y=w.state,Q=Y.offset,$=Y.tooltipTicks;if(!Q)return;if(typeof H=="function")G=H($,A);else if(H==="value"){G=-1;for(var K=0;K<$.length;K++)if($[K].value===A.activeLabel){G=K;break}}var ne=oe(oe({},Q),{},{x:Q.left,y:Q.top}),T=Math.min(F,ne.x+ne.width),L=Math.min(V,ne.y+ne.height),Z=$[G]&&$[G].value,se=py(w.state,w.props.data,G),he=$[G]?{x:P==="horizontal"?$[G].coordinate:T,y:P==="horizontal"?L:$[G].coordinate}:r_;w.setState(oe(oe({},A),{},{activeLabel:Z,activeCoordinate:he,activePayload:se,activeTooltipIndex:G}))}else w.setState(A)}),Ee(w,"renderCursor",function(A){var N,P=w.state,H=P.isTooltipActive,k=P.activeCoordinate,j=P.activePayload,R=P.offset,F=P.activeTooltipIndex,V=P.tooltipAxisBandSize,G=w.getTooltipEventType(),Y=(N=A.props.active)!==null&&N!==void 0?N:H,Q=w.props.layout,$=A.key||"_recharts-cursor";return E.createElement(JQ,{key:$,activeCoordinate:k,activePayload:j,activeTooltipIndex:F,chartName:t,element:A,isActive:Y,layout:Q,offset:R,tooltipAxisBandSize:V,tooltipEventType:G})}),Ee(w,"renderPolarAxis",function(A,N,P){var H=Ot(A,"type.axisType"),k=Ot(w.state,"".concat(H,"Map")),j=A.type.defaultProps,R=j!==void 0?oe(oe({},j),A.props):A.props,F=k&&k[R["".concat(H,"Id")]];return U.cloneElement(A,oe(oe({},F),{},{className:De(H,F.className),key:A.key||"".concat(N,"-").concat(P),ticks:Fr(F,!0)}))}),Ee(w,"renderPolarGrid",function(A){var N=A.props,P=N.radialLines,H=N.polarAngles,k=N.polarRadius,j=w.state,R=j.radiusAxisMap,F=j.angleAxisMap,V=Sa(R),G=Sa(F),Y=G.cx,Q=G.cy,$=G.innerRadius,K=G.outerRadius;return U.cloneElement(A,{polarAngles:Array.isArray(H)?H:Fr(G,!0).map(function(ne){return ne.coordinate}),polarRadius:Array.isArray(k)?k:Fr(V,!0).map(function(ne){return ne.coordinate}),cx:Y,cy:Q,innerRadius:$,outerRadius:K,key:A.key||"polar-grid",radialLines:P})}),Ee(w,"renderLegend",function(){var A=w.state.formattedGraphicalItems,N=w.props,P=N.children,H=N.width,k=N.height,j=w.props.margin||{},R=H-(j.left||0)-(j.right||0),F=CM({children:P,formattedGraphicalItems:A,legendWidth:R,legendContent:f});if(!F)return null;var V=F.item,G=MW(F,eY);return U.cloneElement(V,oe(oe({},G),{},{chartWidth:H,chartHeight:k,margin:j,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Ee(w,"renderTooltip",function(){var A,N=w.props,P=N.children,H=N.accessibilityLayer,k=St(P,Mt);if(!k)return null;var j=w.state,R=j.isTooltipActive,F=j.activeCoordinate,V=j.activePayload,G=j.activeLabel,Y=j.offset,Q=(A=k.props.active)!==null&&A!==void 0?A:R;return U.cloneElement(k,{viewBox:oe(oe({},Y),{},{x:Y.left,y:Y.top}),active:Q,label:G,payload:Q?V:[],coordinate:F,accessibilityLayer:H})}),Ee(w,"renderBrush",function(A){var N=w.props,P=N.margin,H=N.data,k=w.state,j=k.offset,R=k.dataStartIndex,F=k.dataEndIndex,V=k.updateId;return U.cloneElement(A,{key:A.key||"_recharts-brush",onChange:wl(w.handleBrushChange,A.props.onChange),data:H,x:ce(A.props.x)?A.props.x:j.left,y:ce(A.props.y)?A.props.y:j.top+j.height+j.brushBottom-(P.bottom||0),width:ce(A.props.width)?A.props.width:j.width,startIndex:R,endIndex:F,updateId:"brush-".concat(V)})}),Ee(w,"renderReferenceElement",function(A,N,P){if(!A)return null;var H=w,k=H.clipPathId,j=w.state,R=j.xAxisMap,F=j.yAxisMap,V=j.offset,G=A.type.defaultProps||{},Y=A.props,Q=Y.xAxisId,$=Q===void 0?G.xAxisId:Q,K=Y.yAxisId,ne=K===void 0?G.yAxisId:K;return U.cloneElement(A,{key:A.key||"".concat(N,"-").concat(P),xAxis:R[$],yAxis:F[ne],viewBox:{x:V.left,y:V.top,width:V.width,height:V.height},clipPathId:k})}),Ee(w,"renderActivePoints",function(A){var N=A.item,P=A.activePoint,H=A.basePoint,k=A.childIndex,j=A.isRange,R=[],F=N.props.key,V=N.item.type.defaultProps!==void 0?oe(oe({},N.item.type.defaultProps),N.item.props):N.item.props,G=V.activeDot,Y=V.dataKey,Q=oe(oe({index:k,dataKey:Y,cx:P.x,cy:P.y,r:4,fill:lb(N.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},Oe(G,!1)),El(G));return R.push(W.renderActiveDot(G,Q,"".concat(F,"-activePoint-").concat(k))),H?R.push(W.renderActiveDot(G,oe(oe({},Q),{},{cx:H.x,cy:H.y}),"".concat(F,"-basePoint-").concat(k))):j&&R.push(null),R}),Ee(w,"renderGraphicChild",function(A,N,P){var H=w.filterFormatItem(A,N,P);if(!H)return null;var k=w.getTooltipEventType(),j=w.state,R=j.isTooltipActive,F=j.tooltipAxis,V=j.activeTooltipIndex,G=j.activeLabel,Y=w.props.children,Q=St(Y,Mt),$=H.props,K=$.points,ne=$.isRange,T=$.baseLine,L=H.item.type.defaultProps!==void 0?oe(oe({},H.item.type.defaultProps),H.item.props):H.item.props,Z=L.activeDot,se=L.hide,he=L.activeBar,Ie=L.activeShape,Be=!!(!se&&R&&Q&&(Z||he||Ie)),me={};k!=="axis"&&Q&&Q.props.trigger==="click"?me={onClick:wl(w.handleItemMouseEnter,A.props.onClick)}:k!=="axis"&&(me={onMouseLeave:wl(w.handleItemMouseLeave,A.props.onMouseLeave),onMouseEnter:wl(w.handleItemMouseEnter,A.props.onMouseEnter)});var ae=U.cloneElement(A,oe(oe({},H.props),me));function re(gn){return typeof F.dataKey=="function"?F.dataKey(gn.payload):null}if(Be)if(V>=0){var ie,J;if(F.dataKey&&!F.allowDuplicatedCategory){var ve=typeof F.dataKey=="function"?re:"payload.".concat(F.dataKey.toString());ie=kl(K,ve,G),J=ne&&T&&kl(T,ve,G)}else ie=K==null?void 0:K[V],J=ne&&T&&T[V];if(Ie||he){var fe=A.props.activeIndex!==void 0?A.props.activeIndex:V;return[U.cloneElement(A,oe(oe(oe({},H.props),me),{},{activeIndex:fe})),null,null]}if(!ke(ie))return[ae].concat(qi(w.renderActivePoints({item:H,activePoint:ie,basePoint:J,childIndex:V,isRange:ne})))}else{var ye,ge=(ye=w.getItemByXY(w.state.activeCoordinate))!==null&&ye!==void 0?ye:{graphicalItem:ae},xe=ge.graphicalItem,je=xe.item,Fe=je===void 0?A:je,Ke=xe.childIndex,xn=oe(oe(oe({},H.props),me),{},{activeIndex:Ke});return[U.cloneElement(Fe,xn),null,null]}return ne?[ae,null,null]:[ae,null]}),Ee(w,"renderCustomized",function(A,N,P){return U.cloneElement(A,oe(oe({key:"recharts-customized-".concat(P)},w.props),w.state))}),Ee(w,"renderMap",{CartesianGrid:{handler:Al,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Al},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Al},YAxis:{handler:Al},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((M=S.id)!==null&&M!==void 0?M:Da("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=CS(w.triggeredAfterMouseMove,(O=S.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return fY(W,b),pY(W,[{key:"componentDidMount",value:function(){var M,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(M=this.props.margin.left)!==null&&M!==void 0?M:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var M=this.props,O=M.children,w=M.data,A=M.height,N=M.layout,P=St(O,Mt);if(P){var H=P.props.defaultIndex;if(!(typeof H!="number"||H<0||H>this.state.tooltipTicks.length-1)){var k=this.state.tooltipTicks[H]&&this.state.tooltipTicks[H].value,j=py(this.state,w,H,k),R=this.state.tooltipTicks[H].coordinate,F=(this.state.offset.top+A)/2,V=N==="horizontal",G=V?{x:R,y:F}:{y:R,x:F},Y=this.state.formattedGraphicalItems.find(function($){var K=$.item;return K.type.name==="Scatter"});Y&&(G=oe(oe({},G),Y.props.points[H].tooltipPosition),j=Y.props.points[H].tooltipPayload);var Q={activeTooltipIndex:H,isTooltipActive:!0,activeLabel:k,activePayload:j,activeCoordinate:G};this.setState(Q),this.renderCursor(P),this.accessibilityManager.setIndex(H)}}}},{key:"getSnapshotBeforeUpdate",value:function(M,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==M.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==M.margin){var w,A;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(A=this.props.margin.top)!==null&&A!==void 0?A:0}})}return null}},{key:"componentDidUpdate",value:function(M){Lv([St(M.children,Mt)],[St(this.props.children,Mt)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var M=St(this.props.children,Mt);if(M&&typeof M.props.shared=="boolean"){var O=M.props.shared?"axis":"item";return s.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(M){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),A=o$(w),N={chartX:Math.round(M.pageX-A.left),chartY:Math.round(M.pageY-A.top)},P=w.width/O.offsetWidth||1,H=this.inRange(N.chartX,N.chartY,P);if(!H)return null;var k=this.state,j=k.xAxisMap,R=k.yAxisMap,F=this.getTooltipEventType(),V=_W(this.state,this.props.data,this.props.layout,H);if(F!=="axis"&&j&&R){var G=Sa(j).scale,Y=Sa(R).scale,Q=G&&G.invert?G.invert(N.chartX):null,$=Y&&Y.invert?Y.invert(N.chartY):null;return oe(oe({},N),{},{xValue:Q,yValue:$},V)}return V?oe(oe({},N),V):null}},{key:"inRange",value:function(M,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=this.props.layout,N=M/w,P=O/w;if(A==="horizontal"||A==="vertical"){var H=this.state.offset,k=N>=H.left&&N<=H.left+H.width&&P>=H.top&&P<=H.top+H.height;return k?{x:N,y:P}:null}var j=this.state,R=j.angleAxisMap,F=j.radiusAxisMap;if(R&&F){var V=Sa(R);return O4({x:N,y:P},V)}return null}},{key:"parseEventsOfWrapper",value:function(){var M=this.props.children,O=this.getTooltipEventType(),w=St(M,Mt),A={};w&&O==="axis"&&(w.props.trigger==="click"?A={onClick:this.handleClick}:A={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=El(this.props,this.handleOuterEvent);return oe(oe({},N),A)}},{key:"addListener",value:function(){wv.on(Pv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){wv.removeListener(Pv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(M,O,w){for(var A=this.state.formattedGraphicalItems,N=0,P=A.length;N<P;N++){var H=A[N];if(H.item===M||H.props.key===M.key||O===Ur(H.item.type)&&w===H.childIndex)return H}return null}},{key:"renderClipPath",value:function(){var M=this.clipPathId,O=this.state.offset,w=O.left,A=O.top,N=O.height,P=O.width;return E.createElement("defs",null,E.createElement("clipPath",{id:M},E.createElement("rect",{x:w,y:A,height:N,width:P})))}},{key:"getXScales",value:function(){var M=this.state.xAxisMap;return M?Object.entries(M).reduce(function(O,w){var A=SW(w,2),N=A[0],P=A[1];return oe(oe({},O),{},Ee({},N,P.scale))},{}):null}},{key:"getYScales",value:function(){var M=this.state.yAxisMap;return M?Object.entries(M).reduce(function(O,w){var A=SW(w,2),N=A[0],P=A[1];return oe(oe({},O),{},Ee({},N,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(M){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(M){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(M){var O=this.state,w=O.formattedGraphicalItems,A=O.activeItem;if(w&&w.length)for(var N=0,P=w.length;N<P;N++){var H=w[N],k=H.props,j=H.item,R=j.type.defaultProps!==void 0?oe(oe({},j.type.defaultProps),j.props):j.props,F=Ur(j.type);if(F==="Bar"){var V=(k.data||[]).find(function($){return Sz(M,$)});if(V)return{graphicalItem:H,payload:V}}else if(F==="RadialBar"){var G=(k.data||[]).find(function($){return O4(M,$)});if(G)return{graphicalItem:H,payload:G}}else if(hc(H,A)||vc(H,A)||Fp(H,A)){var Y=QU({graphicalItem:H,activeTooltipItem:A,itemData:R.data}),Q=R.activeIndex===void 0?Y:R.activeIndex;return{graphicalItem:oe(oe({},H),{},{childIndex:Q}),payload:Fp(H,A)?R.data[Y]:H.props.data[Y]}}}return null}},{key:"render",value:function(){var M=this;if(!FB(this))return null;var O=this.props,w=O.children,A=O.className,N=O.width,P=O.height,H=O.style,k=O.compact,j=O.title,R=O.desc,F=MW(O,nY),V=Oe(F,!1);if(k)return E.createElement(rW,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement(qv,si({},V,{width:N,height:P,title:j,desc:R}),this.renderClipPath(),zB(w,this.renderMap)));if(this.props.accessibilityLayer){var G,Y;V.tabIndex=(G=this.props.tabIndex)!==null&&G!==void 0?G:0,V.role=(Y=this.props.role)!==null&&Y!==void 0?Y:"application",V.onKeyDown=function($){M.accessibilityManager.keyboardEvent($)},V.onFocus=function(){M.accessibilityManager.focus()}}var Q=this.parseEventsOfWrapper();return E.createElement(rW,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement("div",si({className:De("recharts-wrapper",A),style:oe({position:"relative",cursor:"default",width:N,height:P},H)},Q,{ref:function(K){M.container=K}}),E.createElement(qv,si({},V,{width:N,height:P,title:j,desc:R,style:yY}),this.renderClipPath(),zB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(U.Component);Ee(B,"displayName",t),Ee(B,"defaultProps",oe({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Ee(B,"getDerivedStateFromProps",function(b,W){var S=b.dataKey,M=b.data,O=b.children,w=b.width,A=b.height,N=b.layout,P=b.stackOffset,H=b.margin,k=W.dataStartIndex,j=W.dataEndIndex;if(W.updateId===void 0){var R=OW(b);return oe(oe(oe({},R),{},{updateId:0},y(oe(oe({props:b},R),{},{updateId:0}),W)),{},{prevDataKey:S,prevData:M,prevWidth:w,prevHeight:A,prevLayout:N,prevStackOffset:P,prevMargin:H,prevChildren:O})}if(S!==W.prevDataKey||M!==W.prevData||w!==W.prevWidth||A!==W.prevHeight||N!==W.prevLayout||P!==W.prevStackOffset||!li(H,W.prevMargin)){var F=OW(b),V={chartX:W.chartX,chartY:W.chartY,isTooltipActive:W.isTooltipActive},G=oe(oe({},_W(W,M,N)),{},{updateId:W.updateId+1}),Y=oe(oe(oe({},F),V),G);return oe(oe(oe({},Y),y(oe({props:b},Y),W)),{},{prevDataKey:S,prevData:M,prevWidth:w,prevHeight:A,prevLayout:N,prevStackOffset:P,prevMargin:H,prevChildren:O})}if(!Lv(O,W.prevChildren)){var Q,$,K,ne,T=St(O,Oi),L=T&&(Q=($=T.props)===null||$===void 0?void 0:$.startIndex)!==null&&Q!==void 0?Q:k,Z=T&&(K=(ne=T.props)===null||ne===void 0?void 0:ne.endIndex)!==null&&K!==void 0?K:j,se=L!==k||Z!==j,he=!ke(M),Ie=he&&!se?W.updateId:W.updateId+1;return oe(oe({updateId:Ie},y(oe(oe({props:b},W),{},{updateId:Ie,dataStartIndex:L,dataEndIndex:Z}),W)),{},{prevChildren:O,dataStartIndex:L,dataEndIndex:Z})}return null}),Ee(B,"renderActiveDot",function(b,W,S){var M;return U.isValidElement(b)?M=U.cloneElement(b,W):Re(b)?M=b(W):M=E.createElement(rs,W),E.createElement($e,{className:"recharts-active-dot",key:S},M)});var I=U.forwardRef(function(W,S){return E.createElement(B,si({},W,{ref:S}))});return I.displayName=B.displayName,I},AY=Wc({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:fb}),_Y=Wc({chartName:"BarChart",GraphicalChild:Wr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:fb}),OY=Wc({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:mc},{axisType:"radiusAxis",AxisComp:fc}],formatAxisMap:T9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),HY=Wc({chartName:"ComposedChart",GraphicalChild:[qr,So,Wr,wc],axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:xc}],formatAxisMap:fb});const CW=({active:e,payload:n,label:t})=>e&&n&&n.length?_.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[_.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:t}),_.jsxs("div",{className:"space-y-1",children:[_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.totalSessions.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.humanEscalations.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),_.jsxs("span",{className:"text-gray-900",children:[n[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function o_({data:e,title:n,instanceId:t}){var y,B;const r=U.useId(),a=n||"Sessions & Escalation Trends",i=e.length<=3&&((B=(y=e[0])==null?void 0:y.week)==null?void 0:B.includes("2026")),p=t||r.replace(/:/g,"-"),s=`${n?n.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${p}`,c=`chart-${s}-${e.length}`,f=e.map((I,b)=>({...I,id:`${s}-${I.week.replace(/\s/g,"-")}-${b}`})),m=`colorSessions-${s}`,d=`colorEscalations-${s}`,v=`colorSessionsLine-${s}`;return _.jsxs(Ut,{className:"shadow-xl border-0",children:[_.jsx(D0,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx($0,{className:"text-2xl font-black text-gray-900",children:a}),_.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),_.jsx(Vt,{className:"p-6 bg-white",children:_.jsx(Dy,{width:"100%",height:400,children:i?_.jsxs(HY,{data:f,barGap:8,barCategoryGap:"20%",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),_.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),_.jsx(H0,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ea,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(Mt,{content:_.jsx(CW,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c):_.jsxs(AY,{data:f,children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),_.jsx(H0,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ea,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(Mt,{content:_.jsx(CW,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c)})})]})}const NW=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function i_({data:e,title:n}){const t=e.reduce((p,s)=>p+s.count,0),r=n||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((p,s)=>({...p,uniqueKey:`${a}-${p.channel.replace(/\s/g,"-")}-${p.count}-${s}`,id:`${a}-${s}`}));return _.jsxs(Ut,{children:[_.jsxs(D0,{children:[_.jsx($0,{children:r}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",t.toLocaleString()]})]}),_.jsx(Vt,{children:_.jsx(Dy,{width:"100%",height:300,children:_.jsxs(OY,{children:[_.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:p,percentage:s})=>`${p} (${s.toFixed(1)}%)`,children:i.map(p=>_.jsx(Zp,{fill:NW[i.indexOf(p)%NW.length]},p.uniqueKey))},`pie-${a}`),_.jsx(Mt,{formatter:(p,s,c)=>[`${p.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function CY({data:e}){const n=e.reduce((a,i)=>{const p=a.find(s=>s.product===i.product);return p?p.count+=i.count:a.push({...i}),a},[]),t=n.slice(0,10),r=n.reduce((a,i)=>a+i.count,0);return _.jsxs(Ut,{children:[_.jsxs(D0,{children:[_.jsx($0,{children:"Product Breakdown (Human Handled)"}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",t.length<n.length&&`(showing top ${t.length})`]})]}),_.jsx(Vt,{children:_.jsx(Dy,{width:"100%",height:300,children:_.jsxs(_Y,{data:t,children:[_.jsx(H0,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),_.jsx(Ea,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),_.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),_.jsx(Mt,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),_.jsx(Wr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function u_({className:e,...n}){return _.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:_.jsx("table",{"data-slot":"table",className:st("w-full caption-bottom text-sm",e),...n})})}function p_({className:e,...n}){return _.jsx("thead",{"data-slot":"table-header",className:st("[&_tr]:border-b",e),...n})}function s_({className:e,...n}){return _.jsx("tbody",{"data-slot":"table-body",className:st("[&_tr:last-child]:border-0",e),...n})}function di({className:e,...n}){return _.jsx("tr",{"data-slot":"table-row",className:st("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...n})}function Dr({className:e,...n}){return _.jsx("th",{"data-slot":"table-head",className:st("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function At({className:e,...n}){return _.jsx("td",{"data-slot":"table-cell",className:st("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function NY({data:e}){const[n,t]=U.useState(new Set),r=a=>{const i=new Set(n);i.has(a)?i.delete(a):i.add(a),t(i)};return _.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(u_,{children:[_.jsx(p_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(di,{children:[_.jsx(Dr,{className:"w-12"}),_.jsx(Dr,{children:"Issue Type"}),_.jsx(Dr,{className:"text-right",children:"Count"})]})}),_.jsx(s_,{children:e.flatMap((a,i)=>{const p=n.has(a.issue),s=[_.jsxs(di,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[_.jsx(At,{children:p?_.jsx(VC,{className:"w-4 h-4"}):_.jsx(Cv,{className:"w-4 h-4"})}),_.jsx(At,{className:"font-medium",children:a.issue}),_.jsx(At,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return p&&a.subIssues.forEach((c,f)=>{s.push(_.jsxs(di,{className:"bg-blue-50",children:[_.jsx(At,{}),_.jsx(At,{className:"pl-8",children:_.jsxs("div",{children:[_.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),_.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((m,d)=>_.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",_.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${c.subType}-${m.product}-${d}`))})]})}),_.jsx(At,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),s})})]})})})}const ep=50;function ai({field:e,currentField:n,direction:t,onSort:r,children:a}){return _.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,_.jsx(FC,{className:`w-4 h-4 ${n===e?"text-blue-600":"text-gray-400"}`})]})}function RY({data:e=[]}){const[n,t]=U.useState("createdAt"),[r,a]=U.useState("desc"),[i,p]=U.useState(0),s=U.useCallback(d=>{t(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),p(0)},[]),c=U.useMemo(()=>[...e].sort((d,v)=>{let y,B;return n==="createdAt"?(y=ur(d.createdAt).getTime(),B=ur(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(B)&&(B=-1/0)):(y=(d[n]||"").toLowerCase(),B=(v[n]||"").toLowerCase()),r==="asc"?y>B?1:y<B?-1:0:y<B?1:y>B?-1:0}),[e,n,r]),f=Math.ceil(c.length/ep),m=U.useMemo(()=>c.slice(i*ep,(i+1)*ep),[c,i]);return _.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[_.jsxs("span",{children:["Showing ",_.jsxs("span",{className:"font-semibold text-gray-800",children:[i*ep+1,"–",Math.min((i+1)*ep,c.length)]})," of ",_.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{onClick:()=>p(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(MI,{className:"w-4 h-4"})}),_.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),_.jsx("button",{onClick:()=>p(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(Cv,{className:"w-4 h-4"})})]})]}),_.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(u_,{children:[_.jsx(p_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(di,{children:[_.jsx(Dr,{children:_.jsx(ai,{field:"createdAt",currentField:n,direction:r,onSort:s,children:"Date"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"channel",currentField:n,direction:r,onSort:s,children:"Channel"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"product",currentField:n,direction:r,onSort:s,children:"Product"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"issue",currentField:n,direction:r,onSort:s,children:"Issue"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"subType",currentField:n,direction:r,onSort:s,children:"Sub Type"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"handled",currentField:n,direction:r,onSort:s,children:"Handled By"})})]})}),_.jsx(s_,{children:m.length===0?_.jsx(di,{children:_.jsx(At,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):m.map((d,v)=>_.jsxs(di,{className:"hover:bg-blue-50/50 transition-colors",children:[_.jsx(At,{className:"whitespace-nowrap text-gray-700",children:hk(ur(d.createdAt))}),_.jsx(At,{children:_.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),_.jsx(At,{className:"text-gray-700",children:d.product||"-"}),_.jsx(At,{className:"text-gray-700",children:d.issue||"-"}),_.jsx(At,{className:"text-gray-500 text-xs",children:d.subType||"-"}),_.jsx(At,{children:_.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&_.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[_.jsx("button",{onClick:()=>p(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),_.jsx("button",{onClick:()=>p(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(MI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,_.jsx("button",{onClick:()=>p(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),_.jsx("button",{onClick:()=>p(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(Cv,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>p(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function l_({metrics:e,topChannel:n,top5Products:t,top5Issues:r,monthCount:a}){return _.jsxs(Ut,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[_.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:_.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),_.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),_.jsxs(Vt,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[_.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),_.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),_.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),_.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),_.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(n==null?void 0:n.channel)||"N/A"}),_.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((n==null?void 0:n.percentage)||0).toFixed(1),"% Share"]})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[_.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:t.map((i,p)=>_.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[p+1,"."]})," ",i.product||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},p))})]}),_.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,p)=>_.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[p+1,"."]})," ",i.issue||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},p))})]})]})]})]})}function kY({monthsData:e,weeklyEscalation:n}){const t=e.flatMap(s=>s.data),r=Ev(t),a=Tv(t)[0],i=H3(t).slice(0,5),p=jv(t,5);return _.jsxs(_.Fragment,{children:[_.jsxs(Ut,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[_.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),_.jsx(Vt,{className:"p-5 relative z-10",children:_.jsxs("div",{className:"text-center text-white",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),_.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),_.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(s=>{const c=jv(s.data,3);return _.jsxs(Ut,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${s.colorFrom} ${s.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),_.jsx(D0,{className:"text-white pb-3 pt-4 relative z-10",children:_.jsxs("div",{className:"text-center",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),s.shortName]}),_.jsx($0,{className:"text-2xl font-black mb-3 drop-shadow",children:s.name}),_.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[_.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),_.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:s.data.length.toLocaleString()}),s.data.length<200&&_.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),_.jsxs(Vt,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[_.jsxs("div",{className:"space-y-2 mb-4",children:[_.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:_.jsxs("p",{className:"text-sm font-black text-green-700",children:[s.metrics.botPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.botHandled.toLocaleString()})]}),_.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:_.jsxs("p",{className:"text-sm font-black text-orange-700",children:[s.metrics.humanPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.humanHandled.toLocaleString()})]})]}),_.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[_.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),_.jsx("div",{className:"space-y-1.5",children:c.map((f,m)=>_.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[_.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),_.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},m))})]})]})]},s.name)})}),_.jsx(o_,{data:n,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(s=>_.jsx(i_,{data:s.channels,title:`${s.name} - Channels`},s.name))}),_.jsx(l_,{metrics:r,topChannel:a,top5Products:i,top5Issues:p,monthCount:e.length})]})}const EY="WaggleAIDB",TY=1,Ta="waggle_manual_data_store",xb=()=>new Promise((e,n)=>{const t=indexedDB.open(EY,TY);t.onerror=()=>{console.error("Error opening db",t.error),n(t.error)},t.onsuccess=()=>{e(t.result)},t.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains(Ta)||a.createObjectStore(Ta,{keyPath:"id"})}}),RW=async e=>{const n=await xb();return new Promise((t,r)=>{const p=n.transaction(Ta,"readwrite").objectStore(Ta).put({id:"all_data",data:e});p.onsuccess=()=>t(),p.onerror=()=>r(p.error)})},kW=async()=>{const e=await xb();return new Promise((n,t)=>{const i=e.transaction(Ta,"readonly").objectStore(Ta).get("all_data");i.onsuccess=()=>{i.result?n(i.result.data):n([])},i.onerror=()=>t(i.error)})},jY=async()=>{const e=await xb();return new Promise((n,t)=>{const i=e.transaction(Ta,"readwrite").objectStore(Ta).clear();i.onsuccess=()=>n(),i.onerror=()=>t(i.error)})},DY=`Channel,Created at,Product,Issue,Sub Type,Handled
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,Waggle Cam pro,Set Up,,Human
Inapp,2026-01-01,RV Mini Cam,Connection,,Human
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,PM,Temp Issue,,Human
Webapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,PM,GPS Issue,,Human
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Webapp,2026-01-01,,,,Bot
Inapp,2026-01-01,RV Mini Cam,Tech Query,,Human
Webapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Webapp,2026-01-01,RV Mini Cam,Presales,,Human
Inapp,2026-01-01,4g mini,Subscription Activation,,Human
Webapp,2026-01-01,,,,Bot
Webapp,2026-01-01,,,,Bot
Webapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,PM,DNR,,Human
Webapp,2026-01-02,,,,Bot
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,,,,Bot
Webapp,2026-01-02,,,,Bot
Inapp,2026-01-02,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-02,,,,Bot
Webapp,2026-01-02,4g mini,Subscription Activation,,Human
Webapp,2026-01-02,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-02,,,,Bot
Webapp,2026-01-02,,,,Bot
Inapp,2026-01-02,PM,DNR,,Human
Inapp,2026-01-02,4g mini,Subscription Activation - Combo,,Human
Webapp,2026-01-02,,,,Bot
Webapp,2026-01-02,4g mini,App Navigation,,Human
Webapp,2026-01-02,,,,Bot
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,4g mini,App Navigation,,Human
Inapp,2026-01-02,4g mini,Sound Detection,,Human
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,PM,Tech Query,,Human
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,4g mini,Subscription Activation - Combo,,Human
Inapp,2026-01-02,PM,Turning On,,Human
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,PM,DNR,,Human
Inapp,2026-01-03,PM,DNR,,Human
Inapp,2026-01-03,PM,App Navigation,,Human
Inapp,2026-01-03,PM,Order Status,,Human
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,PM,False Power Loss,,Human
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,PM,DNR,,Human
Inapp,2026-01-03,PM,Temp Issue,,Human
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,4g mini,Set Up,,Human
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,,,,Bot
Webapp,2026-01-03,PM,Login Issue,,Human
Webapp,2026-01-03,,,,Bot
Webapp,2026-01-03,PM,Subscription Activation,,Human
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Inapp,2026-01-03,,,,Bot
Webapp,2026-01-03,,,,Bot
Inapp,2026-01-03,PM,False Power Loss,,Human
Inapp,2026-01-03,PM,Presales,,Human
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Webapp,2026-01-04,PM,Accessories,,Human
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Webapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Webapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,,,,Bot
Webapp,2026-01-04,PM,Pause Subcription,,Human
Inapp,2026-01-04,,,,Bot
Inapp,2026-01-04,PM,Accessories,,Human
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,PM,Subscription Activation,,Human
Inapp,2026-01-05,RV Mini Cam,Connection,,Human
Webapp,2026-01-05,PM,Accessories,,Human
Inapp,2026-01-05,PM,GPS Issue,,Human
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,4g mini,Motion alerts,,Human
Inapp,2026-01-05,4g camera,Accessories,,Human
Webapp,2026-01-05,4g mini,Accessories,,Human
Webapp,2026-01-05,,,,Bot
Webapp,2026-01-05,4g mini,Presales,,Human
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,Waggle Cam pro,Registration Issue,,Human
Inapp,2026-01-05,RV Mini Cam,Subscription Activation,,Human
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,PM,Battery Issue,,Human
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,4g mini,Sound Detection,,Human
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,4g mini,Connection,,Human
Inapp,2026-01-06,PM,DNR,,Human
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,4g mini,Subscription Activation - Combo,,Human
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,Vet Chat,Query,,Human
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,4g camera,Subscription query,,Human
Inapp,2026-01-06,NA,No Reason,,Human
Inapp,2026-01-06,RV Mini Cam,Subscription Activation,,Human
Webapp,2026-01-06,PM,Accessories,,Human
Webapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,PM,DNR,,Human
Webapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Webapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Webapp,2026-01-07,PM,DNR,,Human
Webapp,2026-01-07,4g camera,Presales,,Human
Webapp,2026-01-07,,,,Bot
Inapp,2026-01-07,PM,Login Issue,,Human
Webapp,2026-01-07,,,,Bot
Inapp,2026-01-07,4g mini,Subscription Activation,,Human
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,Waggle Cam pro,Login Issue,,Human
Webapp,2026-01-07,Waggle Cam pro,Login Issue,,Human
Inapp,2026-01-07,Waggle Cam pro,Presales,,Human
Webapp,2026-01-07,4g mini,Motion alerts,,Human
Inapp,2026-01-07,,,,Bot
Webapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,PM,DNR,,Human
Inapp,2026-01-07,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-07,PM,Presales,,Human
Inapp,2026-01-08,PM,GPS Issue,,Human
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,Waggle Cam pro,Presales,,Human
Webapp,2026-01-08,4g mini,Subscription query,,Human
Webapp,2026-01-08,PM,DNR,,Human
Inapp,2026-01-08,RV Mini Cam,Subscription Cancellaiton,,Human
Webapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,NA,No Reason,,Human
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,Waggle Cam pro,Connection,,Human
Webapp,2026-01-08,PM,Login Issue,,Human
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Webapp,2026-01-08,4g mini,Login Issue,,Human
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,PM,DNR,,Human
Inapp,2026-01-08,RV Mini Cam,Motion alerts,,Human
Inapp,2026-01-08,RV Mini Cam,Connection,,Human
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,4g mini,Subscription Activation,,Human
Webapp,2026-01-08,4g mini,Connection,,Human
Webapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-09,,,,Bot
Webapp,2026-01-09,4g camera,Subscription query,,Human
Inapp,2026-01-09,PM,App Navigation,,Human
Webapp,2026-01-09,,,,Bot
Inapp,2026-01-09,PM,DNR,,Human
Webapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,PM,Tech Query,,Human
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,4g mini,Connection,,Human
Inapp,2026-01-09,PM,Power Recovery Not Sent,,Human
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-09,PM,Login Issue,,Human
Inapp,2026-01-09,PM,Return & refund,,Human
Webapp,2026-01-09,4g mini,Subscription Activation - Combo,,Human
Inapp,2026-01-09,PM,Login Issue,,Human
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,RV Mini Cam,Set Up,,Human
Webapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,RV Mini Cam,Connection,,Human
Webapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Webapp,2026-01-10,PM,DNR,,Human
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Inapp,2026-01-10,RV Mini Cam,Accessories,,Human
Webapp,2026-01-10,PM,Presales,,Human
Inapp,2026-01-10,Waggle Cam pro,Treat Tosser Issue,,Human
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Webapp,2026-01-10,4g mini,Presales,,Human
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,PM,DNR,,Human
Webapp,2026-01-10,PM,False Power Loss,,Human
Inapp,2026-01-10,PM,DNR,,Human
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,PM,Humidity Issue,,Human
Inapp,2026-01-10,PM,Charging Issue,,Human
Webapp,2026-01-10,PM,Tech Query,,Human
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Webapp,2026-01-11,PM,Subscription Activation,,Human
Inapp,2026-01-11,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,4g mini,Login Issue,,Human
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,RV Mini Cam,Subscription Activation,,Human
Webapp,2026-01-11,4g mini,Presales,,Human
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-12,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,PM,Accessories,,Human
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,,,,Bot
Inapp,2026-01-12,RV Mini Cam,Connection,,Human
Inapp,2026-01-12,Waggle Cam pro,Squeaky Sound,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,RV Mini Cam,Connection,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,PM,Temp Issue,,Human
Webapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,,,,Bot
Inapp,2026-01-12,4g mini,Subscription Activation - Combo,,Human
Webapp,2026-01-12,PM,Turning On,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,PM,Replcement Set Up,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,RV Mini Cam,Connection,,Human
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,,,,Bot
Inapp,2026-01-13,PM,DNR,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,RV Mini Cam,Connection,,Human
Webapp,2026-01-13,PM,Presales,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,,,,Bot
Webapp,2026-01-13,,,,Bot
Webapp,2026-01-13,PM,Tech Query,,Human
Inapp,2026-01-13,RV Mini Cam,Connection,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,Waggle Cam pro,Connection,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,PM,Login Issue,,Human
Webapp,2026-01-13,PM,Profile - Dog Breed,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,PM,Subscription Activation,,Human
Inapp,2026-01-13,PM,Subscription Activation,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,4g camera,Presales,,Human
Webapp,2026-01-14,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-14,PM,DNR,,Human
Webapp,2026-01-14,,,,Bot
Inapp,2026-01-14,,,,Bot
Inapp,2026-01-14,PM,Registration Issue,,Human
Webapp,2026-01-14,PM,DNR,,Human
Inapp,2026-01-14,,,,Bot
Inapp,2026-01-14,PM,DNR,,Human
Inapp,2026-01-14,RV Mini Cam,Connection,,Human
Webapp,2026-01-14,,,,Bot
Inapp,2026-01-14,,,,Bot
Webapp,2026-01-14,4g mini,Subscription Activation,,Human
Inapp,2026-01-14,,,,Bot
Inapp,2026-01-14,,,,Bot
Inapp,2026-01-14,PM,DNR,,Human
Inapp,2026-01-14,,,,Bot
Inapp,2026-01-14,,,,Bot
Inapp,2026-01-15,PM,DNR,,Human
Webapp,2026-01-15,,,,Bot
Webapp,2026-01-15,4g camera,Connection,,Human
Webapp,2026-01-15,PM,Presales,,Human
Inapp,2026-01-15,,,,Bot
Webapp,2026-01-15,PM,Battery Issue,,Human
Webapp,2026-01-15,,,,Bot
Inapp,2026-01-15,Waggle Cam pro,Connection,,Human
Webapp,2026-01-15,RV Mini Cam,Tech Query,,Human
Webapp,2026-01-15,PM,Subscription query,,Human
Webapp,2026-01-15,PM,Subscription Activation,,Human
Webapp,2026-01-15,Waggel Insurance,Waggel Insurance,,Human
Inapp,2026-01-15,,,,Bot
Webapp,2026-01-15,PM,Subscription Activation,,Human
Inapp,2026-01-15,PM,DNR,,Human
Inapp,2026-01-15,4g mini,Connection,,Human
Inapp,2026-01-15,,,,Bot
Inapp,2026-01-15,PM,DNR,,Human
Inapp,2026-01-15,PM,Subscription Mapping Issue,,Human
Inapp,2026-01-15,4g mini,Noise Issue,,Human
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,NA,No Reason,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,PM,DNR,,Human
Inapp,2026-01-16,RV Mini Cam,Multiple Login,,Human
Webapp,2026-01-16,4g mini,Connection,,Human
Webapp,2026-01-16,4g camera,Return & refund,,Human
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,Waggle Cam pro,Subscription query,,Human
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,PM,Subscription Activation,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,PM,DNR,,Human
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,4g mini,Connection,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,4g mini,Battery Issue,,Human
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,PM,DNR,,Human
Webapp,2026-01-16,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,4g mini,App Navigation,,Human
Inapp,2026-01-16,PM,DNR,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,4g mini,Subscription Mapping Issue,,Human
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,PM,DNR,,Human
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,PM,Subscription Activation,,Human
Webapp,2026-01-17,4g mini,Tech Query,,Human
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,PM,DNR,,Human
Webapp,2026-01-17,4g camera,Presales,,Human
Inapp,2026-01-17,RV Mini Cam,Connection,,Human
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Inapp,2026-01-17,PM,App Issue,,Human
Inapp,2026-01-17,PM,Registration Issue,,Human
Inapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Webapp,2026-01-17,,,,Bot
Webapp,2026-01-17,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,PM,Referral Query,,Human
Webapp,2026-01-18,,,,Bot
Inapp,2026-01-18,,,,Bot
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-18,,,,Bot
Inapp,2026-01-18,,,,Bot
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,PM,Tech Query,,Human
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-18,,,,Bot
Inapp,2026-01-18,,,,Bot
Webapp,2026-01-18,Waggle Cam pro,Device Removal,,Human
Inapp,2026-01-18,PM,Subscription Activation - Combo,,Human
Webapp,2026-01-18,PM,Accessories,,Human
Inapp,2026-01-18,,,,Bot
Inapp,2026-01-18,,,,Bot
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,,,,Bot
Inapp,2026-01-18,PM,DNR,,Human
Inapp,2026-01-18,,,,Bot
Inapp,2026-01-18,,,,Bot
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,4g mini,Tech Query,,Human
Inapp,2026-01-18,,,,Bot
Inapp,2026-01-19,4g mini,Set Up,,Human
Inapp,2026-01-19,4g mini,Registration Issue,,Human
Webapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Webapp,2026-01-19,,,,Bot
Inapp,2026-01-19,PM,DNR,,Human
Webapp,2026-01-19,PM,Device Query,,Human
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Webapp,2026-01-19,,,,Bot
Webapp,2026-01-19,PM,Accessories,,Human
Inapp,2026-01-19,,,,Bot
Webapp,2026-01-19,,,,Bot
Webapp,2026-01-19,,,,Bot
Webapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,NA,No Reason,,Human
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Webapp,2026-01-19,,,,Bot
Inapp,2026-01-19,RV Mini Cam,Device Query,,Human
Inapp,2026-01-19,,,,Bot
Webapp,2026-01-19,PM,Turning On,,Human
Inapp,2026-01-19,,,,Bot
Inapp,2026-01-19,,,,Bot
Webapp,2026-01-19,PM,Login Query,,Human
Webapp,2026-01-19,,,,Bot
Inapp,2026-01-20,,,,Bot
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,4g mini,App Navigation,,Human
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Webapp,2026-01-20,RV Mini Cam,Presales,,Human
Inapp,2026-01-20,PM,DNR,,Human
Webapp,2026-01-20,,,,Bot
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Inapp,2026-01-20,4g mini,Subscription Activation,,Human
Webapp,2026-01-20,PM,DNR,,Human
Inapp,2026-01-20,,,,Bot
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,PM,Registration Issue,,Human
Inapp,2026-01-20,RV Mini Cam,Device Removal,,Human
Inapp,2026-01-20,PM,Charging Issue,,Human
Inapp,2026-01-20,,,,Bot
Inapp,2026-01-20,4g camera,Device Query,,Human
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,PM,Order Status,,Human
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,PM,Device Query,,Human
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,PM,Charging Issue,,Human
Inapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Inapp,2026-01-21,Smart Sensor,Connection,,Human
Inapp,2026-01-21,PM,DNR,,Human
Inapp,2026-01-21,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Inapp,2026-01-21,4g mini,Device Query,,Human
Webapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,NA,No Reason,,Human
Inapp,2026-01-22,PM,DNR,,Human
Webapp,2026-01-22,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,PM,Profile - Dog Breed,,Human
Inapp,2026-01-22,,,,Bot
Webapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Webapp,2026-01-22,,,,Bot
Inapp,2026-01-22,4g mini,Device Removal,,Human
Inapp,2026-01-22,,,,Bot
Inapp,2026-01-22,,,,Bot
Webapp,2026-01-22,PM,Upgrade,,Human
Inapp,2026-01-22,PM,DNR,,Human
Webapp,2026-01-22,4g camera,Subscription Activation,,Human
Inapp,2026-01-22,PM,Subscription Activation,,Human
Webapp,2026-01-22,,,,Bot
Webapp,2026-01-22,,,,Bot
Webapp,2026-01-22,,,,Bot
Webapp,2026-01-22,,,,Bot
Inapp,2026-01-23,PM,Subscription Activation,,Human
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,PM,Flexi Plan Confusion,,Human
Inapp,2026-01-23,,,,Bot
Webapp,2026-01-23,PM,Presales,,Human
Inapp,2026-01-23,4g mini,Connection,,Human
Inapp,2026-01-23,PM,Text Alerts Exhausted,,Human
Inapp,2026-01-23,Smart Sensor,Connection,,Human
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,RV Mini Cam,Multiple Login,,Human
Inapp,2026-01-23,RV Mini Cam,Multiple Login,,Human
Inapp,2026-01-23,,,,Bot
Webapp,2026-01-23,,,,Bot
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-23,,,,Bot
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,PM,Display Issue,,Human
Inapp,2026-01-23,PM,Replcement Set Up,,Human
Webapp,2026-01-23,,,,Bot
Webapp,2026-01-23,4g mini,Presales,,Human
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,PM,Subscription Activation,,Human
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,RV Mini Cam,Subscription Activation,,Human
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-23,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-23,,,,Bot
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,PM,False Power Loss,,Human
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-23,,,,Bot
Webapp,2026-01-23,PM,Device Query,,Human
Webapp,2026-01-23,PM,Presales,,Human
Webapp,2026-01-23,,,,Bot
Inapp,2026-01-23,PM,DNR,,Human
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-23,,,,Bot
Inapp,2026-01-24,,,,Bot
Webapp,2026-01-24,PM,App Navigation,,Human
Inapp,2026-01-24,PM,Temp Issue,,Human
Inapp,2026-01-24,4g camera,Connection,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,Waggle Cam pro,Motion alerts,,Human
Inapp,2026-01-24,PM,DNR,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,PM,Temp Issue,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,PM,DNR,,Human
Inapp,2026-01-24,PM,DNR,,Human
Webapp,2026-01-24,PM,DNR,,Human
Inapp,2026-01-24,,,,Bot
Webapp,2026-01-24,,,,Bot
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,PM,App Navigation,,Human
Webapp,2026-01-24,,,,Bot
Webapp,2026-01-24,,,,Bot
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,4g mini,App Navigation,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,,,,Bot
Webapp,2026-01-24,,,,Bot
Webapp,2026-01-24,,,,Bot
Inapp,2026-01-24,4g mini,Subscription Mapping Issue,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,,,,Bot
Webapp,2026-01-24,PM,Subscription query,,Human
Webapp,2026-01-24,,,,Bot
Webapp,2026-01-25,,,,Bot
Inapp,2026-01-25,4g mini,Turning On,,Human
Inapp,2026-01-25,4g mini,Subscription Activation - Combo,,Human
Webapp,2026-01-25,PM,Battery Issue,,Human
Inapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g mini,Return & refund,,Human
Inapp,2026-01-25,RV Mini Cam,Registration Issue,,Human
Webapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g mini,Presales,,Human
Webapp,2026-01-25,PM,Order Status,,Human
Inapp,2026-01-25,PM,DNR,,Human
Inapp,2026-01-25,PM,DNR,,Human
Inapp,2026-01-25,,,,Bot
Webapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g mini,Subscription Activation,,Human
Inapp,2026-01-25,PM,DNR,,Human
Inapp,2026-01-25,,,,Bot
Inapp,2026-01-25,PM,DNR,,Human
Inapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g camera,Connection,,Human
Inapp,2026-01-25,PM,Accessories,,Human
Webapp,2026-01-25,,,,Bot
Webapp,2026-01-25,,,,Bot
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Webapp,2026-01-26,,,,Bot
Webapp,2026-01-26,,,,Bot
Webapp,2026-01-26,Vet Chat,Query,,Human
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Webapp,2026-01-26,PM,Presales,,Human
Webapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Webapp,2026-01-26,,,,Bot
Inapp,2026-01-26,PM,Subscription Mapping Issue,,Human
Inapp,2026-01-26,,,,Bot
Inapp,2026-01-26,PM,DNR,,Human
Webapp,2026-01-26,,,,Bot
Inapp,2026-01-26,,,,Bot
Webapp,2026-01-26,PM,Presales,,Human
Webapp,2026-01-26,4g mini,Presales,,Human
Inapp,2026-01-26,PM,Turning On,,Human
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,PM,DNR,,Human
Inapp,2026-01-27,4g mini,Device Query,,Human
Inapp,2026-01-27,PM,Accessories,,Human
Webapp,2026-01-27,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,4g mini,Referral Query,,Human
Inapp,2026-01-27,PM,DNR,,Human
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,PM,Device Removal,,Human
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,PM,DNR,,Human
Inapp,2026-01-27,PM,DNR,,Human
Webapp,2026-01-27,PM,Presales,,Human
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Webapp,2026-01-27,RV Mini Cam,Connection,,Human
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,4g mini,Subscription Activation,,Human
Webapp,2026-01-27,,,,Bot
Webapp,2026-01-28,4g mini,Presales,,Human
Inapp,2026-01-28,,,,Bot
Webapp,2026-01-28,,,,Bot
Webapp,2026-01-28,RV Mini Cam,Presales,,Human
Webapp,2026-01-28,PM,Device Query,,Human
Webapp,2026-01-28,PM,Presales,,Human
Inapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Webapp,2026-01-28,,,,Bot
Webapp,2026-01-28,,,,Bot
Webapp,2026-01-28,,,,Bot
Inapp,2026-01-28,RV Mini Cam,Connection,,Human
Inapp,2026-01-28,,,,Bot
Webapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Webapp,2026-01-28,,,,Bot
Inapp,2026-01-28,PM,Login Issue,,Human
Inapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Webapp,2026-01-28,PM,DNR,,Human
Webapp,2026-01-28,RV Mini Cam,Presales,,Human
Inapp,2026-01-28,,,,Bot
Inapp,2026-01-28,,,,Bot
Webapp,2026-01-28,Waggle Cam pro,Connection,,Human
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,4g mini,Connection,,Human
Inapp,2026-01-29,Waggel Insurance,Waggel Insurance,,Human
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,PM,DNR,,Human
Webapp,2026-01-29,4g mini,Presales,,Human
Inapp,2026-01-29,,,,Bot
Inapp,2026-01-29,PM,DNR,,Human
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,4g mini,Subscription Activation,,Human
Inapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-30,,,,Bot
Webapp,2026-01-30,,,,Bot
Webapp,2026-01-30,,,,Bot
Inapp,2026-01-30,PM,Subscription Activation,,Human
Webapp,2026-01-30,,,,Bot
Webapp,2026-01-30,,,,Bot
Inapp,2026-01-30,,,,Bot
Webapp,2026-01-30,PM,App Navigation,,Human
Webapp,2026-01-30,,,,Bot
Webapp,2026-01-30,PM,Presales,,Human
Webapp,2026-01-30,,,,Bot
Inapp,2026-01-30,,,,Bot
Inapp,2026-01-30,,,,Bot
Inapp,2026-01-30,,,,Bot
Inapp,2026-01-30,,,,Bot
Inapp,2026-01-30,PM,Subscription Activation,,Human
Webapp,2026-01-30,,,,Bot
Inapp,2026-01-30,,,,Bot
Webapp,2026-01-30,,,,Bot
Webapp,2026-01-30,PM,Login Issue,,Human
Inapp,2026-01-30,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-30,,,,Bot
Webapp,2026-01-30,,,,Bot
Webapp,2026-01-30,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-30,Waggle Cam pro,Connection,,Human
Inapp,2026-01-31,PM,Flexi Plan Confusion,,Human
Inapp,2026-01-31,PM,DNR,,Human
Webapp,2026-01-31,RV Mini Cam,Subscription Activation,,Human
Inapp,2026-01-31,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-31,4g mini,order related,,Human
Inapp,2026-01-31,PM,DNR,,Human
Webapp,2026-01-31,,,,Bot
Inapp,2026-01-31,PM,DNR,,Human
Inapp,2026-01-31,PM,DNR,,Human
Webapp,2026-01-31,,,,Bot
Inapp,2026-01-31,PM,DNR,,Human
Inapp,2026-01-31,PM,DNR,,Human
Inapp,2026-01-31,PM,DNR,,Human
Webapp,2026-01-31,PM,Subscription Activation - Combo,,Human
Webchat,2026-02-01,,,,Bot
Inapp,2026-02-01,,,,Bot
Webchat,2026-02-01,,,,Bot
Inapp,2026-02-01,,,,Bot
Webchat,2026-02-01,,,,Bot
Webchat,2026-02-01,PM,Subs Activation,Activation Steps,Human
Inapp,2026-02-01,4g camera,Subs Cancellation,Steps,Human
Inapp,2026-02-01,PM,InApp Notification,Not receiving,Human
Inapp,2026-02-01,PM,DNR,Reset Not working,Human
Webchat,2026-02-01,PM,Alerts,Limit,Human
Webchat,2026-02-01,,,,Bot
Webchat,2026-02-01,PM,multi-user-access,Sharing,Human
Webchat,2026-02-01,PM,Sub Query,Pricing,Human
Webchat,2026-02-01,,,,Bot
Webchat,2026-02-01,,,,Bot
Inapp,2026-02-01,,,,Bot
Webchat,2026-02-01,,,,Bot
Webchat,2026-02-01,,,,Bot
Inapp,2026-02-01,,,,Bot
Inapp,2026-02-01,,,,Bot
Inapp,2026-02-01,PM,Subs Cancellation,Unable to do that,Human
Inapp,2026-02-01,,,,Bot
Inapp,2026-02-01,PM,DNR,Reset Not working,Human
Inapp,2026-02-01,PM,Sub Query,Price High,Human
Inapp,2026-02-02,,,,Bot
Inapp,2026-02-02,PM,Subs Cancellation,Remove CC,Human
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,4g mini,Sim not Found,,Human
Inapp,2026-02-02,,,,Bot
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,PM,Subs Cancellation,Steps,Human
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,,,,Bot
Inapp,2026-02-02,PM,DNR,Back reset,Human
Inapp,2026-02-02,4g mini,Streaming,from another Device,Human
Webchat,2026-02-02,PM,Return & refund,Policy,Human
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,NA,No reason,,Human
Webchat,2026-02-02,,,,Bot
Inapp,2026-02-02,PM,DNR,Further steps,Human
Inapp,2026-02-02,,,,Bot
Webchat,2026-02-02,PM,Flexi Plan Confusion,Further steps,Human
Inapp,2026-02-02,,,,Bot
Inapp,2026-02-02,PM,DNR,Further steps,Human
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,PM,Registration Query,Add Pm,Human
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,PM,LED light Issue,Red & Amber Flashing,Human
Webchat,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,PM,Battery Issue,Not charging,Human
Inapp,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,4g mini,Audio Issue,Button not working,Human
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Inapp,2026-02-03,,,,Bot
Webchat,2026-02-03,,,,Bot
Webchat,2026-02-03,PM,Subs Activation,Activate monthly plan in app,Human
Webchat,2026-02-03,,,,Bot
Inapp,2026-02-03,4g mini,App Query,Turn off cam form app,Human
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,PM,Display,LED blinking,Human
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,PM,Support related,,Human
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,PM,Login,wrong cred,Human
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,PM,LED light Issue,,Human
Inapp,2026-02-04,PM,DNR,Reset Not working,Human
Inapp,2026-02-04,PM,Charging Query,Charging LED Query,Human
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,PM,Setup,,Human
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,PM,Error 121,Display,Human
Webchat,2026-02-04,PM,Address change,Order related,Human
Inapp,2026-02-04,PM,Display,not working,Human
Webchat,2026-02-04,PM,DNR,Reset Not working,Human
Inapp,2026-02-04,RV Mini Cam,App Navigation,notifcation off,Human
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Webchat,2026-02-04,4g mini,Presales,Subs Price,Human
Webchat,2026-02-04,PM,Return & refund,Process,Human
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-05,4g mini,Flip,How to do,Human
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,4g mini,Connection,,Human
Inapp,2026-02-05,4g mini,Subs Activation,Additional camera,Human
Inapp,2026-02-05,4g mini,Subs Activation,Price query,Human
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,4g mini,Sim not Found,,Human
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,PM,Accessories,Query 30 Foot cable,Human
Webchat,2026-02-05,RV Mini Cam,App Navigation,Live Recording,Human
Inapp,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,PM,App Navigation,Update payement Method,Human
Inapp,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,4g camera,Accessories,Whats included,Human
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,4g mini,Presales,Offers,Human
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Inapp,2026-02-06,Waggle Cam pro,Connection,Not connecting,Human
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,PM,App Navigation,Alert History,Human
Inapp,2026-02-06,PM,Battery Issue,Waggle app consuming high,Human
Inapp,2026-02-06,Waggel Insurance,Claim,,Human
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,PM,App Issue,Reinstall,Human
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,PM,DNR,Reset Not working,Human
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,4g mini,App Navigation,Battery %,Human
Webchat,2026-02-06,PM,Presales,GPS,Human
Inapp,2026-02-06,,,,Bot
Inapp,2026-02-06,PM,Device Removal,Upgraded,Human
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,RV Mini Cam,Record Issue,,Human
Inapp,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,RV Mini Cam,Device Query,Reset Button,Human
Webchat,2026-02-06,,,,Bot
Inapp,2026-02-06,NA,No reason,,Human
Inapp,2026-02-06,,,,Bot
Webchat,2026-02-07,,,,Bot
Webchat,2026-02-07,,,,Bot
Webchat,2026-02-07,,,,Bot
Webchat,2026-02-07,Smart Sensor,Presales,functionalities,Human
Webchat,2026-02-07,RV Mini Cam,Accessories,,Human
Webchat,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Webchat,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Webchat,2026-02-07,,,,Bot
Inapp,2026-02-07,4g mini,multi-user-access,,Human
Webchat,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Inapp,2026-02-07,PM,Battery query,Battery %,Human
Inapp,2026-02-07,PM,No reason,,Human
Inapp,2026-02-07,,,,Bot
Webchat,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Webchat,2026-02-07,PM,Login Query,computer,Human
Inapp,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Inapp,2026-02-07,,,,Bot
Inapp,2026-02-07,PM,Device Query,Calibration,Human
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,PM,DNR,Reset Not working,Human
Webchat,2026-02-08,PM,Account Transfer,New Owner,Human
Inapp,2026-02-08,PM,Subs Reactivation,discount,Human
Inapp,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,4g mini,Presales,Network carrier,Human
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,4g mini,Login,wrong cred,Human
Inapp,2026-02-08,4g mini,Presales,DIscount Code Request,Human
Inapp,2026-02-08,PM,Subs Activation - Combo,Combo Plan Query,Human
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,4g mini,Login,wrong cred,Human
Webchat,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,4g mini,InApp Notification,,Human
Inapp,2026-02-08,4g camera,motion detection,,Human
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,PM,Support related,,Human
Webchat,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Webchat,2026-02-09,4g camera,motion detection,Range,Human
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,4g mini,Device Query,Non Magnetic Part,Human
Webchat,2026-02-09,4g mini,Subs Activation,DIscount Code Request,Human
Webchat,2026-02-09,4g mini,Support related,copy of support ticket,Human
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,Device Query,Network carrier,Human
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,Support related,Live chat,Human
Webchat,2026-02-09,4g mini,Pan tilt,not working,Human
Webchat,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,4g mini,App Navigation,Recording,Human
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,PM,Subs Activation,DIscount Code Request,Human
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,App Navigation,Subs cancellation,Human
Inapp,2026-02-09,PM,Sub Query,reactivation related,Human
Inapp,2026-02-09,4g mini,Sub Query,Combo upgrade,Human
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,Sub Query,Flexi and pause,Human
Inapp,2026-02-09,RV Mini Cam,Connection,How to do,Human
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,4g mini,Subs Downgrade,Query,Human
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,PM,DNR,steps,Human
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,RV Mini Cam,Device Query,Mounting Related,Human
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-10,PM,Subs Cancellation,Steps,Human
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,PM,Pet Profile,Not Updating,Human
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,,,,Bot
Inapp,2026-02-10,4g mini,multi-user-access,,Human
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,4g mini,Presales,Subs Price,Human
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,4g camera,LED Issue,,Human
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,4g mini,Subs Activation,DIscount Code Request,Human
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Inapp,2026-02-11,PM,Email ID change,,Human
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,PM,Accessories,,Human
Webchat,2026-02-11,PM,Sub Query,Combo Plan,Human
Inapp,2026-02-11,,,,Bot
Inapp,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Inapp,2026-02-12,RV Mini Cam,Connection,reset Pin,Human
Inapp,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Inapp,2026-02-12,PM,Display,query,Human
Webchat,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Webchat,2026-02-12,4g mini,Device Query,Mounting Related,Human
Inapp,2026-02-12,,,,Bot
Webchat,2026-02-12,PM,Login,Mapping prob,Human
Webchat,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Inapp,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Inapp,2026-02-12,NA,No reason,,Human
Webchat,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Webchat,2026-02-12,,,,Bot
Webchat,2026-02-12,PM,Presales,Network carrier,Human
Inapp,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Webchat,2026-02-13,PM,Sub Query,Plan Comparison,Human
Inapp,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Inapp,2026-02-13,PM,App Navigation,,Human
Webchat,2026-02-13,,,,Bot
Webchat,2026-02-13,4g mini,Presales,Charging Query,Human
Webchat,2026-02-13,,,,Bot
Inapp,2026-02-13,RV Mini Cam,Connection,,Human
Webchat,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Inapp,2026-02-13,PM,Subs Mapping,,Human
Webchat,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-13,PM,DNR,Reset Not working,Human
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Webchat,2026-02-13,PM,Presales,Bundle Query,Human
Inapp,2026-02-13,,,,Bot
Webchat,2026-02-13,PM,Presales,Connection related,Human
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-13,,,,Bot
Webchat,2026-02-13,,,,Bot
Webchat,2026-02-13,PM,Sub Query,Flexi Plan query,Human
Webchat,2026-02-13,,,,Bot
Inapp,2026-02-13,PM,DNR,Reset Not working,Human
Inapp,2026-02-13,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,PM,DNR,Reset Not working,Human
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,PM,DNR,Reset Not working,Human
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,PM,Registration Query,Replacment Device,Human
Inapp,2026-02-14,PM,Display,,Human
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,4g mini,Rotation Issue,,Human
Webchat,2026-02-14,,,,Bot
Webchat,2026-02-14,NA,No reason,,Human
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,4g mini,Device Query,Apple Watch Comp.,Human
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,PM,Temp Issue,,Human
Inapp,2026-02-14,,,,Bot
Webchat,2026-02-14,,,,Bot
Webchat,2026-02-15,,,,Bot
Webchat,2026-02-15,,,,Bot
Webchat,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Webchat,2026-02-15,,,,Bot
Webchat,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Webchat,2026-02-15,PM,Charging Query,cigarette lighter charger,Human
Inapp,2026-02-15,,,,Bot
Webchat,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Webchat,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,PM,Registration Query,Second Hand Device,Human
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-15,,,,Bot
Inapp,2026-02-16,PM,Registration Query,Second Hand Device,Human
Webchat,2026-02-16,,,,Bot
Webchat,2026-02-16,,,,Bot
Webchat,2026-02-16,,,,Bot
Webchat,2026-02-16,,,,Bot
Webchat,2026-02-16,,,,Bot
Webchat,2026-02-16,4g camera,Device Query,Network carrier,Human
Webchat,2026-02-16,,,,Bot
Inapp,2026-02-16,PM,App Issue,,Human
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Webchat,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Webchat,2026-02-16,RV Mini Cam,App Issue,,Human
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,,,,Bot
Inapp,2026-02-16,PM,Subs Activation - Combo,Activation Steps,Human
Webchat,2026-02-16,PM,Display,,Human
Inapp,2026-02-16,PM,DNR,Reset Not working,Human
Inapp,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,PM,LED light Issue,,Human
Inapp,2026-02-17,PM,Subs Activation,DIscount Code Request,Human
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Inapp,2026-02-17,PM,Subs Activation - Combo,Activation Steps,Human
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Inapp,2026-02-17,Waggle Cam pro,Subs Cancellation,Marketing Issue,Human
Inapp,2026-02-17,PM,DNR,Reset Not working,Human
Inapp,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,PM,Presales,Apple Watch Comp.,Human
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,Smart Sensor,Presales,Stock,Human
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Webchat,2026-02-17,,,,Bot
Inapp,2026-02-17,,,,Bot
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Inapp,2026-02-18,4g mini,Subs Activation,Mapping prob,Human
Inapp,2026-02-18,,,,Bot
Inapp,2026-02-18,,,,Bot
Inapp,2026-02-18,PM,Charging Query,Charging LED Query,Human
Inapp,2026-02-18,,,,Bot
Inapp,2026-02-18,PM,Charging Query,Charging LED Query,Human
Inapp,2026-02-18,RV Mini Cam,Order,DIscount Code Request,Human
Webchat,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Inapp,2026-02-18,RV Mini Cam,Order,DIscount Code Request,Human
Webchat,2026-02-18,,,,Bot
Inapp,2026-02-18,,,,Bot
Inapp,2026-02-18,PM,Subs Mapping,,Human
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,4g mini,Presales,Battery Life,Human
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,4g mini,Subs Activation,pack of 3,Human
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,PM,Sub Query,Subs Price,Human
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,PM,Presales,Battery Life,Human
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-19,,,,Bot
Webchat,2026-02-19,PM,Presales,PLPB,Human
Webchat,2026-02-19,,,,Bot
Inapp,2026-02-19,,,,Bot
Webchat,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Inapp,2026-02-20,4g mini,Connection,,Human
Inapp,2026-02-20,PM,Sub Query,Flexi Plan Query,Human
Inapp,2026-02-20,,,,Bot
Inapp,2026-02-20,4g mini,Registration Query,Unable to scan QR code,Human
Inapp,2026-02-20,PM,DNR,Battery Reset,Human
Inapp,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Webchat,2026-02-20,PM,Device Query,Power On Button - Old PM,Human
Inapp,2026-02-20,4g mini,Registration Issue,Unable to scan QR code,Human
Webchat,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Inapp,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Inapp,2026-02-20,,,,Bot
Webchat,2026-02-20,PM,Presales,Military  Discount,Human
Webchat,2026-02-20,,,,Bot
Inapp,2026-02-20,,,,Bot
Inapp,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Inapp,2026-02-20,,,,Bot
Webchat,2026-02-20,PM,Order,Placing Order,Human
Webchat,2026-02-20,,,,Bot
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,PM,Order,Placing Order,Human
Webchat,2026-02-21,PM,Order,Placing Order,Human
Inapp,2026-02-21,PM,Subs Activation,Mapping prob,Human
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,PM,Power Loss,Report,Human
Webchat,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,PM,Presales,Bundle,Human
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,PM,Sub Query,Flexi Plan query,Human
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,PM,Login,Reset PW,Human
Webchat,2026-02-21,RV Mini Cam,Accessories,Mounting Bracket,Human
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Inapp,2026-02-21,PM,App Navigation,SMS turn Off,Human
Webchat,2026-02-21,PM,Marketing Emails,Unsubscribe,Human
Webchat,2026-02-21,4g camera,motion detection,Not tracking,Human
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,4g mini,Accessories,Mounting Bracket,Human
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,PM,Subs Cancellation,Refund,Human
Webchat,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,PM,Presales,Subs related,Human
Webchat,2026-02-22,PM,Order,Status,Human
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,4g camera,Presales,functionalities,Human
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,4g mini,Presales,Order related,Human
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,,,,Bot
Webchat,2026-02-22,4g mini,Sub Query,pack of 3,Human
Webchat,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,PM,Registration Issue,Second Hand Device,Human
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,4g mini,Registration Query,Add Additional Cam,Human
Inapp,2026-02-22,4g mini,App Navigation,Video Feed,Human
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,RV Mini Cam,Connection,Streaming Issue,Human
Inapp,2026-02-22,PM,Login,wrong cred,Human
Webchat,2026-02-22,,,,Bot
Inapp,2026-02-22,PM,DNR,Battery Reset,Human
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,PM,Registration Issue,Second PM,Human
Webchat,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,PM,DNR,Battery Reset,Human
Webchat,2026-02-22,PM,Order,Status,Human
Inapp,2026-02-23,,,,Bot
Inapp,2026-02-23,RV Mini Cam,Connection,Streaming Issue,Human
Webapp,2026-02-23,4g mini,Sub Query,Price query,Human
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,4g mini,App Navigation,Flip,Human
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,PM,Order,Status,Human
Inapp,2026-02-23,PM,Display,Query,Human
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,4g mini,Sim not Found,,Human
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,PM,DNR,Further steps,Human
Inapp,2026-02-23,4g mini,Login,wrong cred,Human
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Inapp,2026-02-23,PM,DNR,Further steps,Human
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,PM,Order,Pro+ OOS,Human
Inapp,2026-02-23,PM,DNR,Further steps,Human
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-24,PM,Presales,Difference,Human
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,PM,Subs Activation,Mapping prob,Human
Webapp,2026-02-24,4g mini,Accessories,Mount Broken,Human
Inapp,2026-02-24,PM,Subs Activation,Mapping prob,Human
Inapp,2026-02-24,4g mini,Subs Cancellation,,Human
Inapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Inapp,2026-02-24,PM,DNR,Battery Reset,Human
Inapp,2026-02-24,4g mini,No camera found,,Human
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,4g mini,Presales,functionalities,Human
Inapp,2026-02-24,,,,Bot
Inapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,RV Mini Cam,Presales,functionalities,Human
Inapp,2026-02-24,,,,Bot
Webapp,2026-02-24,NA,No reason,,Human
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Inapp,2026-02-24,PM,DNR,Further steps,Human
Inapp,2026-02-24,4g mini,Device Query,Network carrier,Human
Inapp,2026-02-24,,,,Bot
Inapp,2026-02-24,,,,Bot
Inapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Inapp,2026-02-24,,,,Bot
Inapp,2026-02-24,,,,Bot
Inapp,2026-02-24,,,,Bot
Inapp,2026-02-24,PM,Support related,contact Support,Human
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Webapp,2026-02-25,4g mini,Presales,functionalities,Human
Webapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Inapp,2026-02-25,4g mini,App Navigation,Rotation,Human
Webapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,4g mini,motion detection,Video Not Available,Human
Webapp,2026-02-25,PM,Sub Query,Price query,Human
Inapp,2026-02-25,PM,DNR,Further steps,Human
Inapp,2026-02-25,PM,Account Transfer,,Human
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Inapp,2026-02-25,RV Mini Cam,Unsupported Camera,Older version,Human
Inapp,2026-02-25,,,,Bot
Inapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,PM,App Navigation,Humidity Alerts,Human
Webapp,2026-02-26,NA,Ambassador Program,,Human
Inapp,2026-02-26,PM,DNR,Further steps,Human
Inapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Webapp,2026-02-26,PM,App Navigation,Temp/Humidity Notifications,Human
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,PM,No reason,,Human
Webapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Webapp,2026-02-26,PM,Accessories,,Human
Webapp,2026-02-26,PM,DNR,Further steps,Human
Inapp,2026-02-26,,,,Bot
Webapp,2026-02-26,Waggle Cam pro,Treat Toss,Schedule,Human
Webapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Webapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,PM,Charging Query,Car Charge,Human
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-26,,,,Bot
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Webapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-27,PM,DNR,Further steps,Human
Inapp,2026-02-27,,,,Bot
Webapp,2026-02-27,,,,Bot
Webapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-27,4g mini,App Navigation,Motion Recording,Human
Webapp,2026-02-27,RV Mini Cam,Connection,,Human
Webapp,2026-02-27,NA,No reason,,Human
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Webapp,2026-02-27,,,,Bot
Inapp,2026-02-27,PM,DNR,,Human
Webapp,2026-02-27,,,,Bot
Webapp,2026-02-27,PM,DNR,,Human
Webapp,2026-02-27,PM,Subs Activation,Combo Plan,Human
Webapp,2026-02-27,,,,Bot
Webapp,2026-02-27,,,,Bot
Inapp,2026-02-27,PM,Subs Activation,Trial Plan,Human
Inapp,2026-02-27,PM,Charging Query,LED blinking,Human
Inapp,2026-02-27,4g mini,Subs Activation,DIscount Code Request,Human
Webapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Webapp,2026-02-27,,,,Bot
Inapp,2026-02-27,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,Waggel Insurance,No reason,,Human
Inapp,2026-02-28,RV Mini Cam,Subs Cancellation,Steps,Human
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,4g mini,App Navigation,Add Phone No,Human
Inapp,2026-02-28,PM,Registration Issue,Replacment Device,Human
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,4g mini,Login,,Human
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,PM,DNR,,Human
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,4g mini,Registration Issue,,Human
Inapp,2026-02-28,4g mini,App Navigation,Remove Device,Human
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,4g mini,Registration Issue,,Human
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,PM,Device Removal,,Human
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,4g mini,Device Removal,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,PM,Subs Cancellation,Further Steps,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Webapp,2026-03-01,PM,Upgrade,Newer Model,Human
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,4g mini,Night Vision,Video Quality,Human
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,PM,Subs Activation,Coupon Code Request,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,PM,Subs Upgrade,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,PM,DNR,,Human
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,Emergency Fund,Inquiry,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Webapp,2026-03-01,,,,Bot
Webapp,2026-03-01,,,,Bot
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Webapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-01,PM,DNR,,Human
Inapp,2026-03-01,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,PM,DNR,,Human
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,PM,DNR,,Human
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,PM,Not Turning On,,Human
Inapp,2026-03-02,PM,DNR,,Human
Webapp,2026-03-02,4g mini,Not Turning On,,Human
Inapp,2026-03-02,PM,Subs Cancellation,,Human
Webapp,2026-03-02,PM,Presales,GPS,Human
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Inapp,2026-03-02,PM,Device Transfer,,Human
Webapp,2026-03-02,4g mini,Presales,Motion Detection,Human
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Inapp,2026-03-02,,,,Bot
Webapp,2026-03-02,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Inapp,2026-03-03,PM,Not Charging,,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,PM,Not Charging,,Human
Webapp,2026-03-03,PM,Presales,Price inquiry,Human
Inapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,PM,Subs Cancellation,,Human
Inapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,4g camera,Presales,Functionalities,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,RV Mini Cam,App Navigation,Unable to find,Human
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,RV Mini Cam,App Navigation,Joystick Control,Human
Inapp,2026-03-03,Waggle Cam pro,App Navigation,Joystick Control,Human
Webapp,2026-03-03,PM,Upgrade,,Human
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,Waggle Cam pro,Not Turning On,,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,4g mini,App Navigation,Joystick Control,Human
Inapp,2026-03-03,4g mini,App Navigation,Joystick Control,Human
Inapp,2026-03-03,Waggle Cam pro,App Navigation,Joystick Control,Human
Inapp,2026-03-03,4g mini,App Navigation,Joystick Control,Human
Inapp,2026-03-03,Waggle Cam pro,Treat Toss,,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,Waggle Cam pro,App Navigation,Joystick Control,Human
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,Waggle Cam pro,App Navigation,Joystick Control,Human
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,PM,DNR,,Human
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Webapp,2026-03-04,PM,Subs Activation,,Human
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,Waggle Cam pro,Replacment,,Human
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,4g mini,App Navigation,Joystick Control,Human
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Webapp,2026-03-05,PM,Presales,Subs Inquiry,Human
Inapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,PM,App Navigation,Geo Fence,Human
Webapp,2026-03-05,,,,Bot
Webapp,2026-03-05,PM,Charging Query,Charging LED Query,Human
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,4g mini,App Navigation,PW reset,Human
Webapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,PM,App Navigation,Temp threshold,Human
Webapp,2026-03-05,4g mini,App Issue,Unable to activate,Human
Webapp,2026-03-05,4g mini,Subs Mapping,,Human
Inapp,2026-03-05,4g mini,Subs Activation,Combo plan,Human
Inapp,2026-03-05,PM,Subs Cancellation,,Human
Inapp,2026-03-05,PM,DNR,,Human
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,PM,App Navigation,Geo Fence,Human
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,PM,DNR,,Human
Inapp,2026-03-05,PM,DNR,,Human
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,RV Mini Cam,Connection,,Human
Inapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,PM,Subs Activation,,Human
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,4g mini,App Navigation,Motion Detection,Human
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,4g mini,Connection,,Human
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,4g mini,multi-user-access,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,Waggle Cam pro,Connection,,Human
Inapp,2026-03-06,RV Mini Cam,Connection,,Human
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,App Issue,Loading,,Human
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,App Issue,Loading,,Human
Inapp,2026-03-06,PM,Presales,outside US,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,PM,Order Related,Shipping,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,PM,Subs Activation,Combo plan,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,PM,Presales,AQI,Human
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,PM,App Navigation,,Human
Webapp,2026-03-06,4g mini,Presales,Functionalities,Human
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,PM,DNR,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,4g mini,Subs Activation,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,PM,Subs Mapping,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4g mini,App Navigation,Battery Level,Human
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,Waggle Cam pro,multi-user-access,,Human
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4g camera,App Navigation,Battery Level,Human
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4g mini,Presales,Subs Inquiry,Human
Inapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,PM,DNR,,Human
Inapp,2026-03-07,RV Mini Cam,App Navigation,Noise Alerts,Human
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,PM,DNR,,Human
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4g camera,App Navigation,Noise Alerts,Human
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,PM,DNR,,Human
Inapp,2026-03-08,PM,Presales,Combo plan,Human
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,4g mini,App Navigation,Turn Off light,Human
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-08,PM,DNR,,Human
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,4g mini,App Navigation,,Human
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,RV Mini Cam,Device Removal,,Human
Inapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-08,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,PM,Temp Difference,,Human
Webapp,2026-03-09,,,,Bot
Webapp,2026-03-09,PM,Presales,Network Carrier,Human
Inapp,2026-03-09,Waggel Insurance,NA,NA,Human
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,PM,Device Query,Display related,Human
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,4g mini,App Navigation,Rotation,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,4g camera,App Navigation,Delete History,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,4g camera,App Navigation,Motion Alert Turn Off,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,PM,Device Transfer,,Human
Webapp,2026-03-09,PM,Subs Activation,Subs Inquiry,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,NA,NA,NA,Human
Webapp,2026-03-09,,,,Bot
Webapp,2026-03-09,PM,Presales,,Human
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,PM,Order Related,OOS,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,PM,Device Transfer,,Human
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,4g camera,Solar Panel,,Human
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,PM,Upgrade,,Human
Inapp,2026-03-10,4g mini,App Navigation,Battery Level,Human
Inapp,2026-03-10,Waggel Insurance,NA,NA,Human
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,PM,multi-user-access,,Human
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,4g mini,Subs Mapping,,Human
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,4g mini,Subs Activation,Additional devices,Human
Inapp,2026-03-10,RV Mini Cam,App Navigation,Delete Video,Human
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,RV Mini Cam,Subs Activation,Price inquiry,Human
Webapp,2026-03-10,PM,Replacment,,Human
Inapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,PM,DNR,,Human
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,PM,Warranty,Activation,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,4g mini,App Navigation,Settings Icon,Human
Webapp,2026-03-11,RV Mini Cam,Presales,Offers Related,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,4g mini,Subs Activation,Combo plan,Human
Webapp,2026-03-11,PM,Return and Refund,,Human
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,PM,DNR,,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,PM,App Navigation,Subs Related,Human
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,RV Mini Cam,Presales,Functionalities,Human
Inapp,2026-03-11,4g mini,App Navigation,Battery Level,Human
Inapp,2026-03-11,4g mini,SIM out of Service,,Human
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,4g mini,App Navigation,Battery Level,Human
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,RV Mini Cam,Connection,,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,4g mini,Connection,,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,PM,Registration,QR Code,Human
Webapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,PM,Subs Cancellation,,Human
Inapp,2026-03-12,PM,Device Query,Reporting Interval,Human
Inapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,RV Mini Cam,App Navigation,Pan Option,Human
Webapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Inapp,2026-03-12,RV Mini Cam,Connection,,Human
Inapp,2026-03-12,PM,App Navigation,Battery Level,Human
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,4g camera,Login Related,,Human
Inapp,2026-03-12,4g camera,Device Query,Functionalities,Human
Webapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Inapp,2026-03-12,,,,Bot
Webapp,2026-03-12,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Webapp,2026-03-13,PM,Order Related,,Human
Inapp,2026-03-13,PM,Email ID Change,,Human
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,4g mini,Trial Plan Query,,Human
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,PM,Not Turning On,,Human
Inapp,2026-03-13,4g mini,Time Format Query,,Human
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Webapp,2026-03-13,,,,Bot
Inapp,2026-03-13,PM,Coverage area (Mexico),,Human
Webapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,PM,Subs Activation,Price inquiry,Human
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,PM,Order Related,Shipping Delay,Human
Webapp,2026-03-14,General,App Download,,Human
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,4g mini,Subs Activation,Price inquiry,Human
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,4g mini,Device Removal,Sold,Human
Inapp,2026-03-14,PM,DNR,,Human
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,4g mini,App Navigation,Motion Detection,Human
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,PM,DNR,,Human
Webapp,2026-03-15,PM,Temp Difference,Old Device,Human
Webapp,2026-03-15,,,,Bot
Webapp,2026-03-15,4g mini,App Navigation,Joystick Control,Human
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,Waggle Cam pro,App Navigation,Privacy Settings,Human
Inapp,2026-03-15,4g mini,Subs Activation,Price inquiry,Human
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,PM,Subs Activation,Discount Request,Human
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,PM,DNR,,Human
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,RV Mini Cam,App Navigation,Erase Videos,Human
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,4g mini,Presales,Functionalities,Human
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,4g mini,Connection,,Human
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,PM,Subs Activation,Reactivation Query,Human
Webapp,2026-03-15,4g mini,Subs Activation,Additional devices,Human
Webapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,RV Mini Cam,Connection,,Human
Webapp,2026-03-15,PM,Login Related,,Human
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,Waggle Cam pro,App Navigation,Treat Tossing,Human
Inapp,2026-03-15,PM,Temp Difference,,Human
Webapp,2026-03-15,PM,Device Query,Functionalities,Human
Inapp,2026-03-16,4g mini,Connection,,Human
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,4g mini,App Navigation,Delete Clips,Human
Inapp,2026-03-16,4g mini,Subs Activation,Bundle,Human
Webapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,4g mini,App Navigation,Joystick Control,Human
Webapp,2026-03-16,PM,Presales,Functionalities,Human
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,PM,DNR,,Human
Webapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,4g camera,Return and Refund,,Human
Webapp,2026-03-16,PM,Presales,Subs Inquiry,Human
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,PM,Subs Activation,Subs Inquiry,Human
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,PM,Camping Search,,Human
Webapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,RV Mini Cam,Connection,,Human
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,PM,Subs Activation,Combo plan,Human
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,PM,DNR,,Human
Inapp,2026-03-16,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,4g mini,Feature Request,Camera list management,Human
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,PM,DNR,,Human
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,PM,DNR,,Human
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-17,PM,App Navigation,Screen Color Change,Human
Inapp,2026-03-17,PM,DNR,,Human
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,PM,Order Related,Shipping,Human
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Inapp,2026-03-17,,,,Bot
Webapp,2026-03-17,4g mini,Auto Tracking,,Human
Inapp,2026-03-17,4g mini,Auto Tracking,,Human
Webapp,2026-03-17,,,,Bot
Webapp,2026-03-17,,,,Bot
Inapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,NA,NA,NA,Human
Inapp,2026-03-18,PM,App Issue,Profile Setup,Human
Inapp,2026-03-18,PM,Device Removal,,Human
Inapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,PM,Accessories,,Human
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Webapp,2026-03-18,PM,Subs Activation,Second Monitor,Human
Webapp,2026-03-18,4g camera,Presales,Functionalities,Human
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,4g mini,multi-user-access,,Human
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,Waggle Cam pro,App Issue,Loading,Human
Inapp,2026-03-18,PM,Not Charging,,Human
Webapp,2026-03-18,,,,Bot
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,PM,Registration,Used Monitor,Human
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Webapp,2026-03-18,Older Waggle,Registration,,Human
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,PM,Alerts not working,,Human
Webapp,2026-03-18,,,,Bot
Webapp,2026-03-19,PM,Subs Activation,Combo plan,Human
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,PM,Device Query,Display related,Human
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,PM,Accessories,Purchase,Human
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,4g mini,Connection,,Human
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,PM,Subs Cancellation,,Human
Inapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,PM,Replacment,,Human
Webapp,2026-03-19,4g mini,Presales,Subs Inquiry,Human
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,RV Mini Cam,App Navigation,Delete Clips,Human
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,PM,DNR,,Human
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Inapp,2026-03-19,,,,Bot
Webapp,2026-03-19,,,,Bot
Webapp,2026-03-20,,,,Bot
Webapp,2026-03-20,PM,DNR,,Human
Webapp,2026-03-20,PM,Subs Activation,Discount Request,Human
Inapp,2026-03-20,RV Mini Cam,Device Query,Turn Off Device,Human
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,Waggel Insurance,NA,,Human
Webapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,RV Mini Cam,Connection,,Human
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,PM,App Navigation,Temp Report,Human
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,RV Mini Cam,Connection,,Human
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,PM,DNR,,Human
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,4g mini,Subs Activation,,Human
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,PM,Geo Fence Issue,,Human
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Webapp,2026-03-20,4g mini,Presales,Color Request,Human
Inapp,2026-03-20,PM,Alerts not working,,Human
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,PM,Temp Difference,,Human
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,4g camera,App Navigation,Flip,Human
Inapp,2026-03-21,Waggel Insurance,,,Human
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,PM,Registration,Query,Human
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,4g mini,Presales,Network Carrier,Human
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,PM,Subs Activation,Flexi Plan Query,Human
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,RV Mini Cam,Connection,,Human
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,PM,Presales,Network Carrier,Human
Inapp,2026-03-21,RV Mini Cam,App Navigation,Flip,Human
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,PM,App Issue,Device Selection,Human
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,PM,App Navigation,Temp threshold,Human
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,4g mini,Subs Cancellation,,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,4g mini,Subs Cancellation,,Human
Inapp,2026-03-22,4g mini,App Issue,Loading,Human
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,4g mini,App Navigation,Erase Videos,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,4g mini,Subs Activation,Discount Request,Human
Inapp,2026-03-22,4g mini,Connection,,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,PM,AQI,Alerts related,Human
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,PM,DNR,,Human
Webapp,2026-03-22,PM,Order Related,Delivery Issue,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,PM,Presales,Subs Inquiry,Human
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,4g mini,Hardware Damage,,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,PM,DNR,,Human
Webapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Webapp,2026-03-22,RV Mini Cam,Presales,Purchase link,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,PM,App Navigation,Pet Profile,Human
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,4g mini,Connection,Streaming,Human
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,PM,Presales,Subs Inquiry,Human
Webapp,2026-03-23,PM,Replacment,Shipping,Human
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Webapp,2026-03-23,PM,Subs Activation,Combo plan,Human
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,PM,DNR,,Human
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,PM,Temp Difference,,Human
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Webapp,2026-03-23,PM,Alerts not working,,Human
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,PM,Presales,Discount Request,Human
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,4g mini,Subs Activation,Combo plan,Human
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Webapp,2026-03-23,,,,Bot
Inapp,2026-03-23,PM,DNR,,Human
Webapp,2026-03-23,PM,DNR,,Human
Inapp,2026-03-23,PM,Not Charging,,Human
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-23,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,PM,Display Issue,Flickering,Human
Inapp,2026-03-24,4g mini,Recording,continuous-playback,Human
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,PM,Not Turning On,,Human
Webapp,2026-03-24,PM,Subs Activation,Discount Request,Human
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,PM,Device Query,Display related,Human
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,4g mini,App Navigation,Delete Clips,Human
Inapp,2026-03-24,PM,DNR,,Human
Inapp,2026-03-24,4g mini,App Issue,Loading,Human
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,NA,NA,,Human
Webapp,2026-03-24,,,,Bot
Webapp,2026-03-24,PM,DNR,,Human
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,4g mini,Presales,Subs Inquiry,Human
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,RV Mini Cam,Connection,,Human
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,PM,DNR,,Human
Inapp,2026-03-25,4g mini,Presales,Functionalities,Human
Webapp,2026-03-25,PM,Presales,Functionalities,Human
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,4g mini,Connection,,Human
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,RV Mini Cam,Connection,,Human
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,PM,DNR,,Human
Webapp,2026-03-25,,,,Bot
Webapp,2026-03-25,PM,DNR,,Human
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,Waggle Cam pro,SD card Location,,Human
Inapp,2026-03-25,,,,Bot
Webapp,2026-03-25,PM,Login Related,,Human
Inapp,2026-03-25,PM,Not Charging,,Human
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,PM,False Alerts,,Human
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,RV Mini Cam,Connection,,Human
Webapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,PM,Device Query,Turn Off,Human
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,PM,Login Related,,Human
Webapp,2026-03-26,RV Mini Cam,Accessories,,Human
Webapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,4g camera,Subs Activation,Price inquiry,Human
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,4g mini,Accessories,,Human
Inapp,2026-03-26,4g mini,App Navigation,Flip,Human
Webapp,2026-03-26,NA,Unsupported Camera,,Human
Webapp,2026-03-26,RV Mini Cam,Connection,,Human
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Inapp,2026-03-27,PM,Subs Activation,,Human
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,PM,Subs Cancellation,,Human
Webapp,2026-03-27,PM,multi-user-access,,Human
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Webapp,2026-03-27,4g camera,Turn Off Light,,Human
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,PM,Login Related,,Human
Inapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Webapp,2026-03-27,PM,Subs Transfer,,Human
Inapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,PM,Presales,Functionalities,Human
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Inapp,2026-03-27,,,,Bot
Webapp,2026-03-27,,,,Bot
Webapp,2026-03-27,RV Mini Cam,Connection,,Human
Inapp,2026-03-27,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,RV Mini Cam,App Navigation,Delete Clips,Human
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Webapp,2026-03-28,PM,Subs Cancellation,,Human
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,4g camera,Registration,,Human
Webapp,2026-03-28,4g mini,Subs Activation,Subs Inquiry,Human
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,PM,DNR,,Human
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,4g mini,Connection,,Human
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,4g camera,App Issue,Crash,Human
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,PM,Subs Activation,Discount Request,Human
Webapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,PM,Alerts Query,,Human
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,PM,Subs Cancellation,,Human
Webapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Webapp,2026-03-29,,,,Bot
Webapp,2026-03-29,4g mini,Presales,Subs Inquiry,Human
Webapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,,,,Bot
Inapp,2026-03-29,PM,Temp Difference,,Human
Inapp,2026-03-29,,,,Bot
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,4g mini,Presales,Network Carrier,Human
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,Waggel Insurance,NA,,Human
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,4g camera,Pan-Tilt Issue,,Human
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,PM,Device Removal,,Human
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,PM,Subs Activation,Discount Request,Human
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,PM,Device Removal,,Human
Webapp,30-03-2026,,,,Bot
Inapp,30-03-2026,PM,False Alerts,PLPB,Human
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Inapp,30-03-2026,,,,Bot
Webapp,30-03-2026,PM,Presales,outside US,Human
Inapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,Waggle Cam pro,Exchange Query,Size,Human
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,PM,Charging Issue,Battery Drain,Human
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,PM,Subs Activation,Discount Request,Human
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,PM,Presales,Functionalities,Human
Webapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,PM,Subs Activation,Query,Human
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Webapp,31-03-2026,PM,Subs Activation,Query,Human
Inapp,31-03-2026,,,,Bot
Webapp,31-03-2026,,,,Bot
Inapp,31-03-2026,PM,DNR,Reset,Human
Inapp,31-03-2026,,,,Bot
Inapp,,,,,Bot
Webchat,,PM,Subs Mapping,,Human
Inapp,,,,,Bot
Webchat,,PM,App Navigation,Profile - Second Pet,Human
Inapp,,4g mini,Subs Mapping,Wrong Plan purchased,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,Subs Cancellation,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,Waggle Cam pro,Connection,Reconfigure,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,Subs Activation,Combo Plan,Human
Inapp,,4g mini,Connection,,Human
Webchat,,PM,Subs Cancellation,,Human
Webchat,,4g mini,Presales,Subs Inquiry,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,4g mini,Connection,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,Subs Reactivation,,Human
Webchat,,PM,DNR,,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,Waggle Cam pro,Connection,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,RV Mini Cam,Subs Cancellation,,Human
Inapp,,PM,App Navigation,Change Pet Profile,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,Subs Reactivation,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,PM,Device Query,Functionalities,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,DNR,,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,Device Removal,,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,4g mini,Motion Alerts,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,Device Removal,,Human
Inapp,,Waggle.Org,NA,NA,Bot
Inapp,,PM,DNR,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,Subs Activation,Price Inquiry,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,NA,No Reason,,Bot
Inapp,,,,,Bot
Webchat,,NA,No Reason,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,RV Mini Cam,Return and Refund,,Human
Inapp,,PM,Subs Cancellation,,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,RV Mini Cam,Registration Issue,,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,4g mini,Connection,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Webchat,,4g mini,Presales,Combo Plan,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,PM,Subs Activation,Discount Request,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,PM,Presales,Device Model Query,Human
Webchat,,,,,Bot
Inapp,,4g camera,App Loading,,Human
Inapp,,PM,App Query,Turn Off,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,PM,Subs Reactivation,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,PM,Subs Activation,Discount Request,Human
Inapp,,,,,Bot
Inapp,,PM,Subs Cancellation,,Human
Webchat,,4g mini,SIM Card not Found,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,Device Removal,,Human
Inapp,,RV Mini Cam,Connection,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,4g mini,Accessories,,Human
Inapp,,4g mini,Subs Reactivation,Downgrade,Human
Webchat,,,,,Bot
Webchat,,4g mini,Accessories,,Human
Webchat,,4g mini,App Navigation,Pan Issue,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,RV Mini Cam,Connection,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,4g mini,Discount Code Request,,Human
Webchat,,,,,Bot
Webchat,,4g mini,Discount Code Request,,Human
Inapp,,4g mini,Motion Alerts,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,4g mini,Discount Code Request,,Human
Inapp,,4g mini,Subs Mapping,,Human
Webchat,,4g mini,Plan Mapping,,Human
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,Discount Code Request,,Human
Inapp,,PM,DNR,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,PM,DNR,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,PM,Accessories,Stock Issue,Human
Webchat,,,,,Bot
Webchat,,PM,Subs Activation,Combo Plan,Human
Inapp,,Waggle.Org,NA,,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Webchat,,RV Mini Cam,Presales,Functionalities,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,4g camera,Device Query,Mounting,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,PM,Subs Activation,Subs Inquiry,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,App Issue,Unable to proceed after payment,Human
Inapp,,RV Mini Cam,Connection,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,PM,Subs Mapping,,Human
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,PM,App Navigation,Profile - Second Pet,Human
Inapp,2026-04-01,4g mini,Subs Mapping,Wrong Plan purchased,Human
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,PM,Subs Cancellation,,Human
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,Waggle Cam pro,Connection,Reconfigure,Human
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,PM,Subs Activation,Combo Plan,Human
Inapp,2026-04-01,4g mini,Connection,,Human
Webapp,2026-04-01,PM,Subs Cancellation,,Human
Webapp,2026-04-01,4g mini,Presales,Subs Inquiry,Human
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Inapp,2026-04-01,,,,Bot
Webapp,2026-04-01,4g mini,Connection,,Human
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-01,,,,Bot
Webapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,PM,Subs Reactivation,,Human
Webapp,2026-04-02,PM,DNR,,Human
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,PM,DNR,,Human
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,Waggle Cam pro,Connection,,Human
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,PM,DNR,,Human
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Webapp,2026-04-02,RV Mini Cam,Subs Cancellation,,Human
Inapp,2026-04-02,PM,App Navigation,Change Pet Profile,Human
Webapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,PM,Subs Reactivation,,Human
Webapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Webapp,2026-04-02,PM,Device Query,Functionalities,Human
Inapp,2026-04-02,,,,Bot
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Inapp,2026-04-02,PM,DNR,,Human
Webapp,2026-04-02,,,,Bot
Inapp,2026-04-02,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,PM,Device Removal,,Human
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,4g mini,Motion Alerts,,Human
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,PM,Device Removal,,Human
Inapp,2026-04-03,Waggle.Org,NA,NA,Bot
Inapp,2026-04-03,PM,DNR,,Human
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,PM,Subs Activation,Price Inquiry,Human
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,NA,No Reason,,Bot
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,NA,No Reason,,Bot
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Webapp,2026-04-03,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,RV Mini Cam,Return and Refund,,Human
Inapp,2026-04-04,PM,Subs Cancellation,,Human
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,RV Mini Cam,Registration Issue,,Human
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,4g mini,Connection,,Human
Webapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,PM,DNR,,Human
Webapp,2026-04-04,4g mini,Presales,Combo Plan,Human
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,PM,DNR,,Human
Inapp,2026-04-04,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,PM,Presales,Device Model Query,Human
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,4g camera,App Loading,,Human
Inapp,2026-04-04,PM,App Query,Turn Off,Human
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,PM,DNR,,Human
Webapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Inapp,2026-04-04,,,,Bot
Webapp,2026-04-04,PM,Subs Reactivation,,Human
Webapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Webapp,2026-04-04,,,,Bot
Webapp,2026-04-04,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-04,,,,Bot
Inapp,2026-04-04,PM,Subs Cancellation,,Human
Webapp,2026-04-05,4g mini,SIM Card not Found,,Human
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,PM,Device Removal,,Human
Inapp,2026-04-05,RV Mini Cam,Connection,,Human
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,4g mini,Accessories,,Human
Inapp,2026-04-05,4g mini,Subs Reactivation,Downgrade,Human
Webapp,2026-04-05,,,,Bot
Webapp,2026-04-05,4g mini,Accessories,,Human
Webapp,2026-04-05,4g mini,App Navigation,Pan Issue,Human
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,RV Mini Cam,Connection,,Human
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,4g mini,Discount Code Request,,Human
Webapp,2026-04-05,,,,Bot
Webapp,2026-04-05,4g mini,Discount Code Request,,Human
Inapp,2026-04-05,4g mini,Motion Alerts,,Human
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,4g mini,Discount Code Request,,Human
Inapp,2026-04-05,4g mini,Subs Mapping,,Human
Webapp,2026-04-05,4g mini,Plan Mapping,,Human
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Webapp,2026-04-05,,,,Bot
Inapp,2026-04-05,,,,Bot
Inapp,2026-04-05,PM,Discount Code Request,,Human
Inapp,2026-04-06,PM,DNR,,Human
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,PM,DNR,,Human
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,PM,Accessories,Stock Issue,Human
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,PM,Subs Activation,Combo Plan,Human
Inapp,2026-04-06,Waggle.Org,NA,,Human
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,PM,DNR,,Human
Webapp,2026-04-06,RV Mini Cam,Presales,Functionalities,Human
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,4g camera,Device Query,Mounting,Human
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,PM,DNR,,Human
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,PM,DNR,,Human
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,PM,DNR,,Human
Inapp,2026-04-06,PM,Subs Activation,Subs Inquiry,Human
Inapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,,,,Bot
Inapp,2026-04-06,PM,App Issue,Unable to proceed after payment,Human
Inapp,2026-04-06,RV Mini Cam,Connection,,Human
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Webapp,2026-04-06,,,,Bot
Inapp,2026-04-06,PM,DNR,,Human
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,PM,DNR,,Human
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,PM,DNR,,Human
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,PM,DNR,,Human
Webapp,2026-04-07,PM,Presales,Functionalities,Human
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,PM,DNR,,Human
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,PM,DNR,,Human
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,PM,GPS,Lost device Location,Human
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,4g mini,Barking Alert,Feature Request,Human
Webapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,Waggle.Org,NA,,Human
Webapp,2026-04-07,4g mini,Subs Activation,Combo Plan,Human
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Webapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Inapp,2026-04-07,,,,Bot
Webapp,2026-04-08,4g mini,App Navigation,Turn Off Light,Human
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,PM,ERROR 121,,Human
Inapp,2026-04-08,,,,Bot
Inapp,2026-04-08,PM,Registration Issue,Old device,Human
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,4g mini,Device Query,Functionalities,Human
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,NA,NA,NA,Human
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Inapp,2026-04-08,PM,GPS,Unable change Location,Human
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,PM,Presales,Device Query,Human
Inapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,RV Mini Cam,Presales,Device Query,Human
Inapp,2026-04-08,,,,Bot
Inapp,2026-04-08,4g camera,Mounting,Solar Panel,Human
Webapp,2026-04-08,,,,Bot
Inapp,2026-04-08,,,,Bot
Webapp,2026-04-08,PM,ERROR 121,,Human
Inapp,2026-04-08,PM,DNR,,Human
Webapp,2026-04-08,,,,Bot
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,PM,DNR,,Human
Webapp,2026-04-09,PM,Order Cancel,Subs Cost,Human
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,PM,Device Query,Outside USA,Human
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,PM,AQI,Carbon monoxide Query,Human
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,4g mini,Device Query,Auto Tracking,Human
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,PM,DNR,,Human
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,PM,App Navigation,Email Alert Enable,Human
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,PM,No Reason,Contact Support,Human
Inapp,2026-04-09,4g mini,Connection,,Human
Inapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,PM,No Reason,Contact Support,Human
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,PM,No Reason,Contact Support,Human
Inapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Inapp,2026-04-09,PM,Subs Activation,Discount Request,Human
Webapp,2026-04-09,PM,Order Cancel,By Mistake,Human
Inapp,2026-04-09,,,,Bot
Inapp,2026-04-09,,,,Bot
Inapp,2026-04-09,RV Mini Cam,Device Query,Temp Request,Human
Inapp,2026-04-09,PM,Pet Profile,Dog Breed,Human
Webapp,2026-04-09,PM,Order Cancel,By Mistake,Human
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,PM,Charging Issue,,Human
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,4g mini,App Navigation,Data Usage Request,Human
Inapp,2026-04-09,,,,Bot
Webapp,2026-04-09,4g camera,App Navigation,Motion Detection,Human
Webapp,2026-04-09,,,,Bot
Webapp,2026-04-09,,,,Bot
Inapp,2026-04-09,PM,Subs Activation,Plan Upgrade,Human
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,PM,False PLPB,,Human
Webapp,2026-04-10,PM,DNR,,Human
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,RV Mini Cam,Subs Activation,Combo Plan,Human
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Webapp,2026-04-10,PM,Return and Refund,,Human
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,PM,DNR,,Human
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,PM,DNR,,Human
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Webapp,2026-04-10,PM,Return and Refund,,Human
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,PM,Return and Refund,Refund Status,Human
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,PM,Subs Activation,Subs Inquiry,Human
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Webapp,2026-04-10,PM,App Navigation,Update Phone No,Human
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,PM,DNR,,Human
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Webapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,,,,Bot
Inapp,2026-04-10,4g mini,Connection,,Human
Inapp,2026-04-11,RV Mini Cam,Subs Cancellation,,Human
Inapp,2026-04-11,4g mini,Subs Activation,Combo Plan,Human
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,4g mini,Email change,,Human
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,PM,DNR,,Human
Inapp,2026-04-11,4g mini,App Navigation,Live Streaming,Human
Inapp,2026-04-11,PM,DNR,,Human
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,PM,Registration Issue,Multiple Devices,Human
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,RV Mini Cam,App Navigation,Notification Sound,Human
Inapp,2026-04-11,PM,Device Removal,,Human
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,PM,Subs Mapping,,Human
Inapp,2026-04-11,PM,Device Removal,,Human
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,PM,App Navigation,Payment Method,Human
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,PM,App Navigation,Payment Method,Human
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,4g camera,Playback Issue,,Human
Inapp,2026-04-11,Waggle Cam pro,Treat Toss Issue,,Human
Webapp,2026-04-11,,,,Bot
Webapp,2026-04-11,PM,Order Cancel,Wrong Address,Human
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,PM,DNR,,Human
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-11,,,,Bot
Inapp,2026-04-11,RV Mini Cam,Subs Cancellation,,Human
Inapp,2026-04-11,,,,Bot
Inapp,2026-04-11,PM,Subs Reactivation,,Human
Inapp,2026-04-11,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,4g mini,Streaming Issue,,Human
Webapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,PM,Battery Issue,,Human
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,4g mini,Subs Activation,Combo Plan,Human
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,RV Mini Cam,Auto Tracking,,Human
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Webapp,2026-04-12,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,PM,Subs Activation,Price Inquiry,Human
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,NA,Wrong Cam Model,,Human
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,4g mini,Subs Activation,Combo Plan,Human
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Webapp,2026-04-12,,,,Bot
Inapp,2026-04-12,,,,Bot
Inapp,2026-04-13,PM,Device Removal,,Human
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,PM,Replacement,Older Device,Human
Inapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Inapp,2026-04-13,PM,DNR,,Human
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,PM,Subs Activation,Discount Request,Human
Webapp,2026-04-13,4g mini,App Navigation,Spotlight,Human
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,PM,Subs Cancellation,,Human
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,PM,Return and Refund,,Human
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,RV Mini Cam,Subs Activation,Price Inquiry,Human
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,4g mini,Presales,Discount Request,Human
Webapp,2026-04-13,PM,Subs Activation,Subs Cost,Human
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,4g mini,App Navigation,Delete Recording,Human
Inapp,2026-04-13,RV Mini Cam,App Issue,Delete Recording,Human
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,PM,DNR,,Human
Webapp,2026-04-13,PM,Subs Cancellation,,Human
Webapp,2026-04-13,4g camera,App Navigation,Turn Off Light,Human
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,PM,Order,Tracking,Human
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,PM,Order,Wrong Item received,Human
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Inapp,2026-04-13,PM,DNR,,Human
Inapp,2026-04-13,4g mini,No SD Card Found,,Human
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-13,,,,Bot
Webapp,2026-04-13,,,,Bot
Inapp,2026-04-14,PM,Registration Issue,Used Device,Human
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,PM,Subs Cancellation,,Human
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,Smart Sensor,Presales,Functionalities,Human
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,PM,Presales,Discount Request,Human
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,PM,Subs Cancellation,,Human
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,PM,Device Query,AQI,Human
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,PM,DNR,,Human
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,4g mini,Subs Activation,Subs Inquiry,Human
Inapp,2026-04-14,RV Mini Cam,Connection,,Human
Webapp,2026-04-14,4g mini,Presales,Functionalities,Human
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,PM,Login Issue,,Human
Webapp,2026-04-14,,,,Bot
Inapp,2026-04-14,,,,Bot
Inapp,2026-04-14,PM,Registration Issue,,Human
Inapp,2026-04-14,PM,Device Query,Shut Down,Human
Inapp,2026-04-14,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,PM,Temp Difference,,Human
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,PM,Temp Difference,,Human
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,4g mini,Connection,,Human
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,PM,DNR,,Human
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,PM,PLPB,,Human
Inapp,2026-04-15,PM,DNR,,Human
Inapp,2026-04-15,4g mini,App Query,Share Video,Human
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,4g mini,Subs Activation,Flexi Plan Query,Human
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,4g camera,App Navigation,Auto Tracking,Human
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Webapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-15,,,,Bot
Inapp,2026-04-16,,,,Bot
Webapp,2026-04-16,PM,Subs Activation,Discount Request,Human
Webapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Webapp,2026-04-16,4g camera,App Navigation,Auto Tracking,Human
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,PM,Subs Reactivation,Query,Human
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Inapp,2026-04-16,PM,DNR,,Human
Webapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Webapp,2026-04-16,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Webapp,2026-04-16,,,,Bot
Inapp,2026-04-16,PM,Order,Missed to apply coupon,Human
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-16,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-17,PM,DNR,SIM not found,Human
Inapp,2026-04-17,PM,DNR,,Human
Inapp,2026-04-17,PM,Geo Fence Issue,,Human
Inapp,2026-04-17,PM,DNR,,Human
Inapp,2026-04-17,PM,Login Issue,Different Email,Human
Inapp,2026-04-17,PM,SIM Card not Found,,Human
Inapp,2026-04-17,Waggle Cam pro,Plan Mapping,,Human
Inapp,2026-04-17,4g mini,App Navigation,Payment Method,Human
Inapp,2026-04-17,PM,Temp Difference,,Human
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,PM,Plan Mapping,,Human
Inapp,2026-04-17,PM,Registration Issue,Used Device,Human
Webapp,2026-04-17,4g mini,App Issue,Unable to register,Human
Webapp,2026-04-17,PM,Subs Cancellation,Query,Human
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Inapp,2026-04-18,PM,Subs Activation,Presales,Human
Inapp,2026-04-18,PM,Device Query,Display related,Human
Inapp,2026-04-18,4g mini,App Navigation,Turn Off Light,Human
Inapp,2026-04-18,RV Mini Cam,Order,Unable Enter Address,Human
Inapp,2026-04-18,4g camera,Presales,Functionalities,Human
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-17,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-18,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-19,,,,Bot
Inapp,2026-04-18,RV Mini Cam,Connection,,Human
Inapp,2026-04-18,RV Mini Cam,Connection,,Human
Inapp,2026-04-18,PM,PLPB,Query,Human
Webapp,2026-04-18,PM,Order Cancel,,Human
Webapp,2026-04-18,PM,Subs Cancellation,,Human
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-17,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-18,,,,Bot
Webapp,2026-04-19,,,,Bot
Webapp,2026-04-19,,,,Bot
Webapp,2026-04-19,,,,Bot
Webapp,2026-04-19,,,,Bot
Webapp,2026-04-18,PM,App Issue,Apple Watch,Human
Inapp,2026-04-19,PM,App Navigation,CO2 Query,Human
Inapp,2026-04-19,PM,App Navigation,CO Query,Human
Inapp,2026-04-19,PM,Subs Cancellation,,Human
Inapp,2026-04-19,PM,Subs Activation,Price Inquiry,Human
Inapp,2026-04-19,PM,Device Removal,,Human
Inapp,2026-04-19,PM,Return and Refund,,Human
Inapp,2026-04-19,PM,Subs Mapping,,Human
Inapp,2026-04-19,,,,Bot
Webapp,2026-04-19,PM,App Navigation,Multi User,Human
Webapp,2026-04-19,PM,Device Query,LED Indicators,Human
Webapp,2026-04-19,PM,Subs Cancellation,,Human
Webapp,2026-04-19,,,,Bot
Webapp,2026-04-19,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,4g mini,Connection,,Human
Inapp,2026-04-20,PM,DNR,,Human
Inapp,2026-04-20,4g mini,Registration Issue,Ownership Transfer,Human
Inapp,2026-04-20,4g camera,Mounting Query,,Human
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,PM,Plan Mapping,,Human
Inapp,2026-04-20,PM,DNR,,Human
Inapp,2026-04-20,PM,Device Query,Bark Alert,Human
Inapp,2026-04-20,PM,Device Query,Battery Level Indicator,Human
Inapp,2026-04-20,RV Mini Cam,App Navigation,Motion Detection,Human
Inapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,4g camera,Return and Refund,,Human
Webapp,2026-04-20,4g mini,Connection,SIM out of service,Human
Webapp,2026-04-20,PM,Subs Cancellation,,Human
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,4g mini,Not Turning On,,Human
Webapp,2026-04-20,4g mini,Subs Query,,Human
Webapp,2026-04-20,,,,Bot
Inapp,2026-04-21,4g mini,Connection,,Human
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,PM,Temp Difference,,Human
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,PM,Subs Cancellation,,Human
Webapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Webapp,2026-04-21,4g mini,Two Way Audio issue,,Human
Inapp,2026-04-21,,,,Bot
Webapp,2026-04-21,4g mini,Two Way Audio issue,,Human
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,RV Mini Cam,App Navigation,Flip Video,Human
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Webapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Inapp,2026-04-21,,,,Bot
Webapp,2026-04-21,,,,Bot
Inapp,2026-04-21,PM,DNR,,Human
Webapp,2026-04-21,,,,Bot
Webapp,2026-04-21,,,,Bot
Webapp,2026-04-21,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,PM,PLPB,Query,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,PM,App Issue,Profle Update,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,4g mini,Subs Activation,Flexi Plan query,Human
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Webapp,2026-04-22,NA,Contact Support,,Human
Webapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,PM,DNR,,Human
Inapp,2026-04-22,RV Mini Cam,Set Up,Connection,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,4g mini,App Navigation,Combo Plan,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,Waggle Cam pro,App Navigation,Alerts Related,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,PM,DNR,,Human
Inapp,2026-04-22,PM,DNR,,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,RV Mini Cam,Conneciton,,Human
Inapp,2026-04-23,PM,Subs Activation,Discount Request,Human
Inapp,2026-04-23,4g mini,User Guide Request,Pan Related,Human
Inapp,2026-04-23,PM,DNR,,Human
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,PM,Order,Charger,Human
Inapp,2026-04-23,PM,App Navigation,Change Billing Address,Human
Webapp,2026-04-23,PM,DNR,,Human
Webapp,2026-04-23,,,,Bot
Webapp,2026-04-23,4g mini,Presales,Price Inquiry,Human
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,4g mini,App Issue,Cam not showing,Human
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,PM,Subs Cancellation,,Human
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,4g mini,Trial Plan Query,,Human
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,PM,Subs Activation,Combo Plan,Human
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,4g mini,Device Removal,,Human
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,NA,Contact Support,NA,Human
Webapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Webapp,2026-04-24,,,,Bot
Webapp,2026-04-24,PM,Presales,Subs Inquiry,Human
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,4g mini,Streaming,Other device,Human
Webapp,2026-04-24,,,,Bot
Webapp,2026-04-24,,,,Bot
Webapp,2026-04-24,PM,Order,Canada Order,Human
Inapp,2026-04-24,PM,DNR,,Human
Inapp,2026-04-24,PM,Subs Cancellation,Further Steps,Human
Webapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,PM,DNR,,Human
Webapp,2026-04-24,,,,Bot
Webapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,PM,DNR,,Human
Inapp,2026-04-24,,,,Bot
Webapp,2026-04-24,,,,Bot
Webapp,2026-04-24,,,,Bot
Webapp,2026-04-24,,,,Bot
Inapp,2026-04-24,PM,Spanish Language,Warranty Query,Human
Inapp,2026-04-24,,,,Bot
Inapp,2026-04-24,RV Mini Cam,Connection,,Human
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,PM,Subs Activation,Query,Human
Webapp,2026-04-25,PM,PLPB,Query,Human
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,PM,Presales,Cellular Network,Human
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,PM,Warranty,Unable to claim,Human
Webapp,2026-04-25,PM,Warranty,Unable to claim,Human
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,4g mini,Device Query,Functionalities,Human
Webapp,2026-04-25,,,,Bot
Webapp,2026-04-25,4g mini,Subs Activation,Combo Plan,Human
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,PM,DNR,,Human
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,PM,DNR,,Human
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,PM,DNR,,Human
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,PM,DNR,,Human
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,PM,DNR,,Human
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,PM,Warranty,Unable to claim,Human
Inapp,2026-04-25,RV Mini Cam,Registration Issue,Unable to register,Human
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,4g mini,App Navigation,Delete Recording,Human
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Webapp,2026-04-25,,,,Bot
Inapp,2026-04-25,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,PM,Warranty,Unable to claim,Human
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,4g mini,Charging Query,,Human
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,PM,Warranty,Unable to claim,Human
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,PM,Warranty,Unable to claim,Human
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-26,PM,DNR,,Human
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Webapp,2026-04-26,PM,Warranty,Unable to claim,Human
Webapp,2026-04-26,4g mini,Subs Activation,Discount Request,Human
Inapp,2026-04-26,PM,DNR,,Human
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,4g mini,Return and Refund,Outside Window,Human
Webapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,PM,Subs Reactivation,Issue,Human
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,4g mini,Multi User Access,,Human
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,PM,DNR,,Human
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,PM,DNR,,Human
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,PM,Return and Refund,,Human
Inapp,2026-04-27,PM,Subs Cancellation,Further Steps,Human
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,4g mini,Return and Refund,Mistakenly Ordered two,Human
Webapp,2026-04-27,4g mini,Multi User Access,,Human
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,PM,Device Query,Functionalities,Human
Inapp,2026-04-27,PM,DNR,,Human
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,PM,Subs Activation,Query,Human
Webapp,2026-04-27,PM,Warranty,Unable to claim,Human
Inapp,2026-04-27,PM,Subs Cancellation,,Human
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,PM,Warranty,Unable to claim,Human
Inapp,2026-04-27,PM,DNR,,Human
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,4g camera,Subs Activation,Combo Plan,Human
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Webapp,2026-04-27,,,,Bot
Inapp,2026-04-27,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,DNR,,Human
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,Alert Query,SMS Alert,Human
Inapp,2026-04-29,PM,Alert Query,SMS on SPAM,Human
Inapp,2026-04-29,PM,App Navigation,Alert Turn Off,Human
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,NA,Contact Support,Human
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,False PLPB,,Human
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,App Issue,Notification Related - Fully Charged,Human
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,PM,DNR,,Human
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,PM,Account Related,Update Phone No,Human
Inapp,2026-04-29,PM,App Issue,Notification Related - Fully Charged,Human
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,App Issue,Notification Related - Fully Charged,Human
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,DNR,,Human
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,,,,Bot
Webapp,2026-04-29,,,,Bot
Inapp,2026-04-29,PM,Subs Activation,Different Email Used,Human
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,PM,Subs Mapping,Replacement Device,Human
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,4g mini,App Issue,Plan Purchase,Human
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Webapp,2026-04-30,4g mini,Presales,Combo Plan,Human
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,PM,App Issue,Change Pet Profile,Human
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,4g mini,Subs Mapping,,Human
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,4g mini,Connection,,Human
Inapp,2026-04-30,PM,Subs Mapping,,Human
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,,,,Bot
Inapp,2026-04-30,PM,DNR,,Human
Inapp,2026-04-30,PM,Subs Activation,Ownership Transfer,Human
Inapp,2026-04-30,,,,Bot
Webapp,2026-04-30,,,,Bot
Inapp,2026-04-30,PM,Subs Reactivation,Query,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,4g mini,Connection,,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,PM,Subs Mapping,,Human
Inapp,2026-04-28,PM,Device Query,AQI,Human
Webapp,2026-04-28,PM,DNR,,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,PM,Subs Cancellation,,Human
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,4g mini,Device Query,Charger Sel,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,PM,Subs Cancellation,,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,PM,Subs Activation,Payment Is,Human
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,PM,App Issue,Loading,Human
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-17,NA,Waggel Insurance,UK,Human
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,Waggle Cam Pro,Treat Tosser,Treat Size,Human
Inapp,2026-05-17,PM,Temp Difference,,Human
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-03,PM,Subs Query,Flexi Plan Confusion,Human
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-03,4g mini,Subs Query,Monthly - Pause and Resume,Human
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-03,4g mini,Subs Query,Price Inquiry,Human
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-10,Vet Chat,Subs Query,,Human
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-11,PM,Subs Query,Contact Support,Human
Webapp,2026-05-12,4g mini,Subs Query,Pause Plan,Human
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,4g mini,Subs Mapping,,Human
Inapp,2026-05-09,PM,Subs Mapping,,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-10,4g mini,Subs Mapping,,Human
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-11,4g mini,Subs Mapping,,Human
Inapp,2026-05-14,PM,Subs Mapping,,Human
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-14,PM,Subs Mapping,,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-14,4g mini,Subs Mapping,,Human
Webapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-16,4g mini,Subs Mapping,,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-17,PM,Subs Mapping,,Human
Inapp,2026-05-02,PM,Subs Cancellation,,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-04,PM,Subs Cancellation,,Human
Inapp,2026-05-06,PM,Subs Cancellation,,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-08,PM,Subs Cancellation,,Human
Inapp,2026-05-10,PM,Subs Cancellation,,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,,,,Bot
Webapp,2026-05-11,PM,Subs Cancellation,,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-12,PM,Subs Cancellation,,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-13,RV Mini Cam,Subs Cancellation,Wrong Cam Purchased,Human
Inapp,2026-05-13,RV Mini Cam,Subs Cancellation,,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-13,4g mini,Subs Cancellation,,Human
Webapp,2026-05-15,PM,Subs Cancellation,,Human
Webapp,2026-05-03,,,,Bot
Webapp,2026-05-15,PM,Subs Cancellation,,Human
Inapp,2026-05-16,PM,Subs Cancellation,,Human
Inapp,2026-05-17,PM,Subs Cancellation,,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-01,4g mini,Subs Activation,Price Inquiry,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-02,RV Mini Cam,Subs Activation,Plan Query (2 Years),Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,4g mini,Subs Activation,Combo Plan Query,Human
Webapp,2026-05-03,PM,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-04,4g mini,Subs Activation,Discount Request,Human
Inapp,2026-05-04,4g mini,Subs Activation,Price Inquiry,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-05,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-06,4g mini,Subs Activation,Combo Plan Query,Human
Webapp,2026-05-04,,,,Bot
Inapp,2026-05-07,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-08,PM,Subs Activation,Combo Plan Query,Human
Webapp,2026-05-15,PM,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-15,PM,Subs Activation,6 Month Plan Request,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-16,PM,Subs Activation,Discount Request,Human
Inapp,2026-05-16,PM,Subs Activation,Coupon Not Working,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-17,PM,Subs Activation,App Loading,Human
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-07,4g mini,SIM Out of Service,,Human
Webapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-04,,,,Bot
Webapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,RV Mini Cam,Setup,,Human
Inapp,2026-05-07,PM,Setup,,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-11,4g camera,Setup,,Human
Inapp,2026-05-12,4g mini,Setup,,Human
Inapp,2026-05-15,4g mini,Setup,,Human
Inapp,2026-05-05,PM,Return & Refund,Subs Expensive,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-07,RV Mini Cam,Return & Refund,,Human
Inapp,2026-05-07,4g camera,Return & Refund,,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-07,4g camera,Return & Refund,,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-11,PM,Return & Refund,,Human
Webapp,2026-05-05,,,,Bot
Webapp,2026-05-11,4g mini,Return & Refund,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-13,RV Mini Cam,Return & Refund,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-15,PM,Return & Refund,Subs Expensive,Human
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-16,PM,Return & Refund,,Human
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-16,PM,Reporting Interval Related,Request - 1 min,Human
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,RV Mini Cam,Replacement,Charger / Broke,Human
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-04,PM,Registration Issue,Wrong Email,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,4g mini,Registration Issue,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-08,4g mini,Registration Issue,,Human
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-09,PM,Registration Issue,Device Transfer,Human
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-10,4g mini,Registration Issue,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-12,PM,Registration Issue,,Human
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-13,Smart Sensor,Registration Issue,,Human
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-14,4g mini,Registration Issue,,Human
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-14,PM,Registration Issue,Device Transfer,Human
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-15,PM,Registration Issue,Second PM,Human
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-17,PM,Registration Issue,Not verified,Human
Inapp,2026-05-17,RV Mini Cam,Registration Issue,Used Device,Human
Inapp,2026-05-02,RV Mini Cam,Presales,Plan Inquiry,Human
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Webapp,2026-05-04,4g mini,Presales,Discount Request,Human
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-05,PM,Presales,Functionalities,Human
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,RV Mini Cam,Presales,Functionalities,Human
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-10,PM,Presales,Canada Cellular Use,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-10,PM,Presales,Functionalities,Human
Webapp,2026-05-14,4g camera,Presales,Solar Panel Mounting,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-16,PM,Presales,Subs Query,Human
Webapp,2026-05-09,PM,Order Related,NA,Human
Webapp,2026-05-04,PM,Order,Delivery Issue,Human
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-15,PM,Not Turning On,,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-15,PM,Not Turning On,,Human
Inapp,2026-05-11,PM,Not Charging,,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-03,NA,NA,NA,Human
Webapp,2026-05-15,PM,NA,Request Model Type,Human
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-13,4g mini,Multi User Access,,Human
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-10,4g mini,Mounting Assistance,,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-14,4g mini,Motion Detection,Light goes off,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-15,RV Mini Cam,Magnetic Mount,,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-11,4g mini,Login Issue,Wrong Email,Human
Inapp,2026-05-16,4g mini,Login Issue,,Human
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-10,PM,GPS,Query,Human
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-11,PM,GPS,Location Not updated,Human
Webapp,2026-05-11,PM,GPS,Location Needed (Lost Device),Human
Inapp,2026-05-02,PM,False PLPB,,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-03,PM,False PLPB,,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-04,PM,False PLPB,,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,PM,Error 121,,Human
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-05,PM,Email ID Change,,Human
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-14,PM,Email ID Change,,Human
Inapp,2026-05-09,,,,Bot
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-01,PM,DNR,Reset Button,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-03,PM,DNR,,Human
Inapp,2026-05-03,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-03,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,PM,DNR,,Human
Webapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-04,PM,DNR,,Human
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Inapp,2026-05-05,PM,DNR,,Human
Inapp,2026-05-05,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-06,PM,DNR,,Human
Inapp,2026-05-06,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-07,PM,DNR,,Human
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-07,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-07,PM,DNR,,Human
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-07,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Webapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-11,,,,Bot
Inapp,2026-05-09,PM,DNR,,Human
Webapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-09,PM,DNR,,Human
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-09,PM,DNR,,Human
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-09,PM,DNR,,Human
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,PM,DNR,,Human
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-12,,,,Bot
Webapp,2026-05-12,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-12,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-11,PM,DNR,,Human
Inapp,2026-05-11,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Webapp,2026-05-12,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-12,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-12,PM,DNR,,Human
Webapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,PM,DNR,,Human
Webapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Webapp,2026-05-13,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-14,PM,DNR,,Human
Webapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-14,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-14,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Webapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-14,PM,DNR,,Human
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Inapp,2026-05-13,,,,Bot
Webapp,2026-05-14,,,,Bot
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,PM,DNR,,Human
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,PM,DNR,,Human
Inapp,2026-05-14,PM,DNR,,Human
Inapp,2026-05-15,PM,DNR,,Human
Inapp,2026-05-14,,,,Bot
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-15,PM,DNR,,Human
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-15,PM,DNR,,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-15,PM,DNR,,Human
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-15,PM,DNR,,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-16,PM,DNR,,Human
Inapp,2026-05-14,,,,Bot
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-16,PM,DNR,,Human
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-16,PM,DNR,,Human
Inapp,2026-05-16,PM,DNR,,Human
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-16,PM,DNR,,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-17,PM,DNR,,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-17,PM,DNR,,Human
Inapp,2026-05-17,PM,DNR,,Human
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-17,PM,DNR,,Human
Webapp,2026-05-13,PM,Device Transfer,,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-03,RV Mini Cam,Device Removal,,Human
Webapp,2026-05-03,PM,Device Removal,Device Transfer,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-04,PM,Device Removal,Device Transfer,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-12,4g mini,Device Removal,,Human
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Webapp,2026-05-14,,,,Bot
Webapp,2026-05-14,,,,Bot
Inapp,2026-05-14,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Webapp,2026-05-16,PM,Device Removal,,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-02,PM,Device Query,Battery,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-03,RV Mini Cam,Device Query,TIme Format Change,Human
Inapp,2026-05-04,PM,Device Query,LED Indicator,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-09,4g mini,Device Query,Functionalities,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-10,4g mini,Device Query,Shut Down,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-11,4g mini,Device Query,Storage/Alerts Related,Human
Inapp,2026-05-16,PM,Device Query,Shut Down,Human
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-10,4g mini,Delete Videos,,Human
Webapp,2026-05-11,PM,Contact Support,NA,Human
Inapp,2026-05-12,NA,Contact Support,NA,Human
Webapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-02,RV Mini Cam,Connection,,Human
Webapp,2026-05-06,4g mini,Connection,,Human
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-06,4g mini,Connection,,Human
Webapp,2026-05-06,4g mini,Connection,,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-08,4g mini,Connection,,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-09,RV Mini Cam,Connection,,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-11,4g mini,Connection,,Human
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-11,4g mini,Connection,,Human
Inapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Webapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-15,,,,Bot
Inapp,2026-05-14,4g mini,Connection,,Human
Webapp,2026-05-15,RV Mini Cam,Connection,,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-15,PM,Compatability - Canada,,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-04,PM,Charging Issue,Not charging,Human
Inapp,2026-05-13,PM,Charging Issue,,Human
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-14,PM,Charging Issue,,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-14,PM,AQI,Query,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-01,PM,App Navigation,Humidity Threshold,Human
Inapp,2026-05-05,PM,App Navigation,Temp Threshold,Human
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-06,4g mini,App Navigation,Turn Off Camera,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-12,PM,App Navigation,Temp Threshold,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-13,RV Mini Cam,App Navigation,Delete Videos,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-14,PM,App Navigation,Profile Issue,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-14,PM,App Navigation,Delete Account,Human
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-15,4g mini,App Navigation,Full Screen,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-17,PM,App Navigation,Reset Password,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-03,4g mini,App Issue,Policy Update,Human
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Webapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-16,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-14,Waggle Cam Pro,App Issue,App Loading,Human
Webapp,2026-05-14,PM,App Issue,Privacy Policy,Human
Inapp,2026-05-15,PM,App Issue,Profile Issue,Human
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Webapp,2026-05-16,4g mini,App Issue,Waiting to Load,Human
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-16,PM,App Issue,Update not Working,Human
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,PM,App Issue,Profile Issue,Human
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-04,4g mini,Alerts Related,Unique Alert Sounds,Human
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-12,PM,Alerts Related,Temp Threshold,Human
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-01,PM,Accessories,Wall Mount Purchase (OOS),Human
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-03,4g camera,Accessories,Replacment Cord - OOS,Human
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Webapp,2026-05-15,RV Mini Cam,Accessories,Mounting Bracket,Human
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Webapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-17,,,,Bot
Inapp,2026-05-18,PM,Subs Cancellation,Refund Request,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Device Removal,Sold Device,Human
Inapp,2026-05-18,PM,DNR,,Human
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,PM,DNR,,Human
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,4g mini,Presales,Functionalities,Human
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,PM,Subs Cancellation,,Human
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,4g mini,Subs Cancellation,Refund Request,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,PM,Setup,,Human
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,PM,DNR,No SIM Found,Human
Inapp,2026-05-18,4g camera,App Issue,Waiting to Load,Human
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Login Issue,,Human
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,PM,DNR,,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Order,Cancel and Refund,Human
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Presales,Coverage & Subscription,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Registration Issue,,Human
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Subs Activation,Plan Inquiry,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,PM,DNR,,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,4g mini,Device Query,LED Indicator,Human
Inapp,2026-05-18,PM,DNR,,Human
Inapp,2026-05-18,PM,PLPB Query,,Human
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Webapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Inapp,2026-05-18,,,,Bot
Webapp,2026-05-18,PM,Setup,Login Issue,Human
Webapp,2026-05-18,4g mini,Return & Refund,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,4g mini,App Issue,Privacy Policy,Human
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,PM,DNR,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,4g mini,Connection,,Human
Inapp,2026-05-19,4g mini,Connection,,Human
Inapp,2026-05-19,PM,Subs Cancellation,,Human
Inapp,2026-05-19,PM,Hardware Damage,Cord,Human
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,PM,DNR,,Human
Inapp,2026-05-19,PM,DNR,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,PM,Subs Cancellation,Refund Request,Human
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,PM,DNR,,Human
Webapp,2026-05-19,PM,Device Transfer,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,PM,DNR,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,NA,Waggel Insurance,NA,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,RV Mini Cam,Subs Activation,Discount Request,Human
Inapp,2026-05-19,PM,Not Turning On,,Human
Webapp,2026-05-19,4g mini,Accessories,Solar Panel Mounting,Human
Inapp,2026-05-19,PM,Email ID Change,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,PM,Device Removal,,Human
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,PM,DNR,,Human
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Webapp,2026-05-19,4g mini,App Navigation,Play Button,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,PM,DNR,,Human
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Webapp,2026-05-19,,,,Bot
Inapp,2026-05-19,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Webapp,2026-05-20,4g mini,Order,Solar Panel,Human
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,PLPB Query,,Human
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,DNR,,Human
Webapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,Login Issue,Wrong Email,Human
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,Subs Cancellation,,Human
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,Subs Mapping,,Human
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,DNR,,Human
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,,,,Bot
Webapp,2026-05-20,,,,Bot
Inapp,2026-05-20,PM,Error 121,,Human
Inapp,2026-05-20,4g mini,Presales,Functionalities,Human
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,Wrong Email Campaign,Non Waggle Charger,Human
Webapp,2026-05-21,PM,Setup,,Human
Webapp,2026-05-21,PM,False PLPB,,Human
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,Wrong Email Campaign,Non Waggle Charger,Human
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,Wrong Email Campaign,Non Waggle Charger,Human
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,Subs Cancellation,,Human
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,RV Mini Cam,Device Query,Turn Off Camera - App,Human
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,4g mini,Device Query,Motion Alert,Human
Inapp,2026-05-21,PM,Wrong Email Campaign,Non Waggle Charger,Human
Webapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,PM,Subs Cancellation,,Human
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,4g camera,Device Query,Network Query,Human
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,PM,Wrong Email Campaign,Non Waggle Charger,Human
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,PM,Wrong Email Campaign,Non Waggle Charger,Human
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,PM,Alerts Related,Humidity Threshold,Human
Webapp,2026-05-21,,,,Bot
Webapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Webapp,2026-05-21,PM,Setup,,Human
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,,,,Bot
Inapp,2026-05-21,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,Alerts Related,Inapp Notifications,Human
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,DNR,,Human
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,4g mini,Connection,,Human
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,4g mini,Subs Cancellation,,Human
Inapp,2026-05-22,4g mini,Device Query,Turn Off Camera,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,4g mini,Device Removal,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,4g mini,Connection,,Human
Inapp,2026-05-22,PM,DNR,,Human
Webapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Webapp,2026-05-22,PM,Not Charging,,Human
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,App Navigation,Update Phone No,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,Setup,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,4g mini,Device Query,Turn Off Camera,Human
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,4g mini,Connection,,Human
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,PM,DNR,,Human
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,PM,DNR,,Human
Inapp,2026-05-22,PM,Not Charging,,Human
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-22,,,,Bot
Webapp,2026-05-22,PM,Order,Cancel and Refund,Human
Inapp,2026-05-22,,,,Bot
Inapp,2026-05-23,PM,DNR,,Human
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,4g mini,Subs Activation,,Human
Inapp,2026-05-23,4g mini,App Navigation,Turn Off Light,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,PM,DNR,,Human
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,PM,Order,Order ID Request,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,4g mini,Device Removal,,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,4g mini,Registration Issue,QR Not Working,Human
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,4g mini,Presales,Functionalities,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,PM,Subs Activation,Discount Request,Human
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,PM,DNR,,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,PM,DNR,,Human
Inapp,2026-05-23,PM,DNR,,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,RV Mini Cam,Device Removal,Different User,Human
Inapp,2026-05-23,,,,Bot
Webapp,2026-05-23,,,,Bot
Inapp,2026-05-23,PM,DNR,,Human
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-23,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,NA,Contact Support,,Human
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,App Navigation,Add Phone No,Human
Inapp,2026-05-24,PM,App Navigation,Add Email,Human
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,SIM Not Found,,Human
Inapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,PM,Device Query,Find Device,Human
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,Connection,,Human
Inapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,PM,Subs Activation,Price Inquiry,Human
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,Subs Activation,Price Inquiry,Human
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,Waggle Cam Pro,App Navigation,Add Phone No,Human
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Webapp,2026-05-24,PM,Subs Cancellation,,Human
Webapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,PM,Warranty,Mapping Issue,Human
Webapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,PM,DNR,,Human
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Webapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-24,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,PM,Marketing Notifications,Turn Off,Human
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,PM,Subs Cancellation,,Human
Webapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,RV Mini Cam,Connection,,Human
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,PM,DNR,,Human
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,PM,App Issue,Unable to Activate Plan,Human
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,PM,DNR,,Human
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,PM,Return & Refund,,Human
Inapp,2026-05-25,PM,DNR,,Human
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,4g mini,Presales,Functionalities,Human
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,4g mini,Return & Refund,,Human
Webapp,2026-05-25,4g mini,Order,Scout Bundle,Human
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Webapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-25,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,4g mini,Subs Activation,Price Inquiry,Human
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,PM,Order,Cancel and Refund,Human
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,PM,DNR,,Human
Inapp,2026-05-26,4g mini,App Issue,App Loading,Human
Webapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Webapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-26,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Webapp,2026-05-27,RV Mini Cam,Connection,,Human
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,RV Mini Cam,Device Query,Remote Access,Human
Inapp,2026-05-27,PM,DNR,,Human
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,4g mini,Order,Shipping Issue,Human
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,PM,DNR,,Human
Webapp,2026-05-27,,,,Bot
Webapp,2026-05-27,PM,Presales,Discount Request,Human
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,PM,DNR,,Human
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,PM,DNR,,Human
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,Smart Bowl,Registration Issue,,Human
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,Smart Bowl,Registration Issue,,Human
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,PM,DNR,,Human
Webapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-27,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,4g camera,NA,,Human
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,DNR,,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,NA,Waggel Insurance,NA,Human
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,False PLPB,Different Charger,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,4g mini,Motion Detection,,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,4g mini,Motion Detection,Tracking,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,DNR,,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,Device Removal,,Human
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,4g camera,Unified,,Human
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,4g mini,Connection,,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,PM,Contact Support,,Human
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,DNR,,Human
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,DNR,,Human
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,PM,DNR,,Human
Inapp,2026-05-28,PM,DNR,,Human
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Inapp,2026-05-28,,,,Bot
Webapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,4g mini,Connection,,Human
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,PM,Device Query,GPS Compatability,Human
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,4g mini,Order,Payment Failed,Human
Inapp,2026-05-29,PM,Device Query,Turn Off,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,4g mini,Device Query,Turn Off,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Webapp,2026-05-29,4g mini,App Navigation,Charging Indicators,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,DNR,,Human
Webapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,4g mini,Connection,,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,Subs Mapping,,Human
Inapp,2026-05-29,PM,Device Removal,,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,Unified,,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,4g mini,Return & Refund,,Human
Inapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,,,,Bot
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,PM,Subs Cancellation,,Human
Inapp,2026-05-29,PM,DNR,,Human
Inapp,2026-05-29,4g mini,Subs Activation,Discount Request,Human
Webapp,2026-05-29,,,,Bot
Inapp,2026-05-29,4g mini,Subs Activation,Discount Request,Human
Inapp,2026-05-29,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,False PLPB,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,Subs Cancellation,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,PM,Contact Support,No Reason,Human
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,Multi User Access,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,Subs Cancellation,,Human
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,PM,Error 121,,Human
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,PM,Subs Activation,Price Inquiry,Human
Inapp,2026-05-30,PM,Subs Mapping,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,PM,DNR,,Human
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,DNR,,Human
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,RV Mini Cam,Device Query,Battery Level,Human
Inapp,2026-05-30,4g mini,Subs Query,6 Month Plan Request,Human
Inapp,2026-05-30,,,,Bot
Webapp,2026-05-30,,,,Bot
Inapp,2026-05-30,PM,Alerts Related,SMS not received,Human
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,Login Issue,Wrong Email,Human
Inapp,2026-05-31,,,,Bot
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,Temp Difference,Older Model,Human
Webapp,2026-05-31,,,,Bot
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,Referral Related,Bonus,Human
Inapp,2026-05-31,,,,Bot
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,DNR,,Human
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,DNR,,Human
Webapp,2026-05-31,,,,Bot
Webapp,2026-05-31,,,,Bot
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,DNR,,Human
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,DNR,,Human
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Webapp,2026-05-31,4g mini,Connection,,Human
Inapp,2026-05-31,RV Mini Cam,Joystick Not Working,,Human
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,PM,DNR,,Human
Webapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
Inapp,2026-05-31,,,,Bot
`;function $Y(){const[e,n]=U.useState([]),[t,r]=U.useState([]),[a,i]=U.useState("all"),[p,s]=U.useState("all"),[c,f]=U.useState([]),[m,d]=U.useState("overview"),v=U.useRef(null),[y,B]=U.useState(null),[I,b]=U.useState(!1),W="Samson@12",[S,M]=U.useState({open:!1,action:null}),[O,w]=U.useState(""),[A,N]=U.useState(""),[P,H]=U.useState(!1),k=re=>{w(""),N(""),H(!1),M({open:!0,action:re})},j=()=>{var re;O===W?(M({open:!1,action:null}),S.action==="add"?(re=v.current)==null||re.click():S.action==="clear"&&T()):(N("Incorrect password. Please try again."),w(""))},R=re=>{re.key==="Enter"&&j(),re.key==="Escape"&&M({open:!1,action:null})},F=U.useRef([]);U.useEffect(()=>{F.current=e},[e]);const[V,G]=U.useState(!1);U.useEffect(()=>{new URLSearchParams(window.location.search).get("admin")==="true"&&G(!0)},[]);const Y=re=>{if(!re)return re;const ie=re.trim(),J=ie.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(J){const[,ye,ge,xe]=J;return`${xe.padStart(2,"0")}-${ge.padStart(2,"0")}-${ye}`}const ve=ie.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(ve){const[,ye,ge,xe]=ve;return parseInt(ye)>12?`${ye.padStart(2,"0")}-${ge.padStart(2,"0")}-${xe}`:`${ge.padStart(2,"0")}-${ye.padStart(2,"0")}-${xe}`}const fe=new Date(ie);return isNaN(fe.getTime())?ie:`${String(fe.getDate()).padStart(2,"0")}-${String(fe.getMonth()+1).padStart(2,"0")}-${fe.getFullYear()}`},Q=re=>{if(!re)return"";const ie=re.trim().toLowerCase();return ie==="bot"||ie==="robot"?"Bot":ie==="human"||ie==="agent"?"Human":re.trim()},$=(re,...ie)=>{if(!re)return"";const J=ie.map(ve=>ve.toLowerCase().replace(/\s+/g,""));for(const ve of Object.keys(re)){const fe=ve.trim().replace(/\r$/,"").toLowerCase().replace(/\s+/g,"");if(J.includes(fe))return re[ve]||""}return""};U.useEffect(()=>{let re=[];vI.parse(DY,{header:!0,skipEmptyLines:!0,complete:async ie=>{re=ie.data.map(J=>({channel:$(J,"Channel"),createdAt:Y($(J,"Created at","createdAt","Created date","Date","date","Created Date")),product:$(J,"Product"),issue:$(J,"Issue"),subType:$(J,"Sub Type","subType"),handled:Q($(J,"Handled","Handled By","Handledby"))}));try{const J=localStorage.getItem("waggle_manual_data");let ve=await kW();if(J&&ve.length===0)try{const fe=JSON.parse(J);Array.isArray(fe)&&(ve=fe,await RW(fe))}catch{}Array.isArray(ve)&&ve.length>0&&(re=[...re,...ve],b(!0))}catch(J){console.error("Error loading data from IndexedDB",J)}n(re)}})},[]);const K=U.useMemo(()=>{const re=["january","february","march","april","may","june","july","august","september","october","november","december"],ie=new Set;return e.forEach(J=>{try{const ve=ur(J.createdAt);if(!isNaN(ve.getTime())){const fe=re[ve.getMonth()];ie.add(`${fe}-${ve.getFullYear()}`)}}catch{}}),Array.from(ie).sort((J,ve)=>{const[fe,ye]=J.split("-"),[ge,xe]=ve.split("-");return ye!==xe?parseInt(ye)-parseInt(xe):re.indexOf(fe)-re.indexOf(ge)})},[e]);U.useEffect(()=>{f(a&&a!=="all"?_3(a):[]),s("all")},[a]),U.useEffect(()=>{e.length>0&&L(a,p)},[p,a,e,m]);const ne=re=>{var J;const ie=(J=re.target.files)==null?void 0:J[0];ie&&(vI.parse(ie,{header:!0,skipEmptyLines:!0,complete:ve=>{if(!ve.data.length){B({type:"error",message:"The CSV file appears to be empty."});return}const fe=ve.data.map(xe=>({channel:$(xe,"Channel"),createdAt:Y($(xe,"Created at","createdAt","Created date","Date","date","Created Date")),product:$(xe,"Product"),issue:$(xe,"Issue"),subType:$(xe,"Sub Type","subType"),handled:Q($(xe,"Handled","Handled By","Handledby"))})),ye=new Set(F.current.map(xe=>`${xe.channel}|${xe.createdAt}|${xe.product}|${xe.issue}|${xe.subType}|${xe.handled}`)),ge=fe.filter(xe=>!ye.has(`${xe.channel}|${xe.createdAt}|${xe.product}|${xe.issue}|${xe.subType}|${xe.handled}`));ge.length>0?kW().then(async xe=>{const je=[...xe,...ge];await RW(je);try{localStorage.setItem("waggle_manual_data",JSON.stringify(je))}catch{}n(Fe=>[...Fe,...ge]),b(!0),B({type:"success",message:`Added ${ge.length} rows.`}),setTimeout(()=>B(null),5e3)}).catch(xe=>{console.error("Failed to save manual data",xe),B({type:"error",message:"Failed to save data. Try again."}),setTimeout(()=>B(null),5e3)}):(B({type:"error",message:"No new rows found."}),setTimeout(()=>B(null),5e3))}}),re.target.value="")},T=async()=>{if(confirm("Are you sure you want to remove all manually uploaded data? This cannot be undone."))try{await jY(),localStorage.removeItem("waggle_manual_data"),b(!1),B({type:"success",message:"All uploaded data has been cleared. Reloading..."}),setTimeout(()=>window.location.reload(),1500)}catch(re){console.error("Failed to clear manual data",re),B({type:"error",message:"Failed to clear data."})}},L=(re,ie,J)=>{let ve=e;if(re!=="all"?ve=e.filter(fe=>{const ye=ur(fe.createdAt);return kv(ye,re)}):ve=e.filter(fe=>!isNaN(ur(fe.createdAt).getTime())),ie!=="all"){const fe=c.find(ye=>ye.value===ie);fe&&(ve=ve.filter(ye=>O3(ur(ye.createdAt),fe)))}r(ve)},Z=Ev(t),se=Tv(t),he=H3(t),Ie=gk(t),Be=vk(e,a),me=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],ae=(a==="all"?K:[a]).map((re,ie)=>{const J=e.filter(ge=>kv(ur(ge.createdAt),re)),[ve,fe]=re.split("-"),ye=me[ie%me.length];return{name:`${ve.charAt(0).toUpperCase()+ve.slice(1)} ${fe}`,shortName:`Month ${ie+1}`,data:J,metrics:Ev(J),channels:Tv(J),colorFrom:ye.from,colorTo:ye.to}});return _.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:[_.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[_.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[_.jsxs("div",{children:[_.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",_.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),_.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[_.jsxs("select",{value:a,onChange:re=>i(re.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[_.jsx("option",{value:"all",children:"All Months"}),K.map(re=>_.jsxs("option",{value:re,children:[re.split("-")[0].charAt(0).toUpperCase()+re.split("-")[0].slice(1)," ",re.split("-")[1]]},re))]}),_.jsxs("select",{value:p,onChange:re=>s(re.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[_.jsx("option",{value:"all",children:"All Weeks"}),c.map(re=>_.jsx("option",{value:re.value,children:re.label},re.value))]}),_.jsx("input",{ref:v,type:"file",accept:".csv",onChange:ne,className:"hidden"}),_.jsxs(Fu,{onClick:()=>k("add"),variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[_.jsx(YC,{className:"w-4 h-4 mr-2"})," Add Data"]}),I&&_.jsxs(Fu,{onClick:()=>k("clear"),variant:"outline",className:"bg-white border-red-300 text-red-600",children:[_.jsx(iN,{className:"w-4 h-4 mr-2"})," Clear Data"]}),_.jsxs(Fu,{onClick:()=>yk(t),variant:"outline",className:"bg-white",children:[_.jsx(ZC,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),y&&_.jsx(Ut,{className:`border ${y.type==="success"?"bg-green-50":"bg-red-50"}`,children:_.jsxs(Vt,{className:"p-4 flex items-center justify-between",children:[_.jsx("p",{className:"font-medium",children:y.message}),_.jsx("button",{onClick:()=>B(null),children:_.jsx(AI,{className:"w-4 h-4"})})]})}),a==="all"&&_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[_.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),_.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?_.jsx(kY,{monthsData:ae,weeklyEscalation:Be}):_.jsxs(_.Fragment,{children:[_.jsx(bk,{metrics:Z}),_.jsx(l_,{metrics:Z,topChannel:se[0],top5Products:he.slice(0,5),top5Issues:jv(t,5),monthCount:a==="all"?K.length:1}),_.jsx(o_,{data:Be,instanceId:"detailed-analysis"}),_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[_.jsx(i_,{data:se}),_.jsx(CY,{data:he})]}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs(kC,{defaultValue:"issues",className:"w-full",children:[_.jsxs(EC,{className:"grid w-full grid-cols-2 max-w-md",children:[_.jsx(PI,{value:"issues",children:"Issue Analysis"}),_.jsx(PI,{value:"sessions",children:"Detailed Sessions"})]}),_.jsx(WI,{value:"issues",className:"mt-6",children:_.jsx(NY,{data:Ie})}),_.jsx(WI,{value:"sessions",className:"mt-6",children:_.jsx(RY,{data:t})})]})})})]})]}),S.open&&_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:_.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6",children:[_.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center",children:_.jsx(aN,{className:"w-5 h-5 text-blue-600"})}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:S.action==="add"?"Add Data":"Clear Uploads"}),_.jsx("p",{className:"text-sm text-gray-500",children:"Enter the admin password to continue"})]}),_.jsx("button",{onClick:()=>M({open:!1,action:null}),className:"ml-auto text-gray-400 hover:text-gray-600",children:_.jsx(AI,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"relative mb-4",children:[_.jsx("input",{autoFocus:!0,type:P?"text":"password",value:O,onChange:re=>{w(re.target.value),N("")},onKeyDown:R,placeholder:"Password",className:"w-full h-10 border border-gray-300 rounded-lg px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),_.jsx("button",{type:"button",onClick:()=>H(re=>!re),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:P?_.jsx(eN,{className:"w-4 h-4"}):_.jsx(tN,{className:"w-4 h-4"})})]}),A&&_.jsx("p",{className:"text-red-500 text-sm mb-3",children:A}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx(Fu,{variant:"outline",className:"flex-1",onClick:()=>M({open:!1,action:null}),children:"Cancel"}),_.jsx(Fu,{className:`flex-1 ${S.action==="clear"?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"} text-white`,onClick:j,children:S.action==="add"?"Unlock & Upload":"Unlock & Clear"})]})]})})]})}vH.createRoot(document.getElementById("root")).render(_.jsx($Y,{}));
