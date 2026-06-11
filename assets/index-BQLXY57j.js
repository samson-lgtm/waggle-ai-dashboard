var lH=Object.defineProperty;var cH=(e,n,t)=>n in e?lH(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var xe=(e,n,t)=>cH(e,typeof n!="symbol"?n+"":n,t);function fH(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var l0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mf={exports:{}},jp={},hf={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI;function dH(){if(aI)return Fe;aI=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=d&&T[d]||T["@@iterator"],typeof T=="function"?T:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function b(T,L,Z){this.props=T,this.context=L,this.refs=I,this.updater=Z||y}b.prototype.isReactComponent={},b.prototype.setState=function(T,L){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,L,"setState")},b.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function W(){}W.prototype=b.prototype;function S(T,L,Z){this.props=T,this.context=L,this.refs=I,this.updater=Z||y}var M=S.prototype=new W;M.constructor=S,B(M,b.prototype),M.isPureReactComponent=!0;var O=Array.isArray,P=Object.prototype.hasOwnProperty,A={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function w(T,L,Z){var se,he={},Ie=null,Be=null;if(L!=null)for(se in L.ref!==void 0&&(Be=L.ref),L.key!==void 0&&(Ie=""+L.key),L)P.call(L,se)&&!N.hasOwnProperty(se)&&(he[se]=L[se]);var de=arguments.length-2;if(de===1)he.children=Z;else if(1<de){for(var ae=Array(de),re=0;re<de;re++)ae[re]=arguments[re+2];he.children=ae}if(T&&T.defaultProps)for(se in de=T.defaultProps,de)he[se]===void 0&&(he[se]=de[se]);return{$$typeof:e,type:T,key:Ie,ref:Be,props:he,_owner:A.current}}function H(T,L){return{$$typeof:e,type:T.type,key:L,ref:T.ref,props:T.props,_owner:T._owner}}function k(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function D(T){var L={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return L[Z]})}var R=/\/+/g;function F(T,L){return typeof T=="object"&&T!==null&&T.key!=null?D(""+T.key):L.toString(36)}function V(T,L,Z,se,he){var Ie=typeof T;(Ie==="undefined"||Ie==="boolean")&&(T=null);var Be=!1;if(T===null)Be=!0;else switch(Ie){case"string":case"number":Be=!0;break;case"object":switch(T.$$typeof){case e:case n:Be=!0}}if(Be)return Be=T,he=he(Be),T=se===""?"."+F(Be,0):se,O(he)?(Z="",T!=null&&(Z=T.replace(R,"$&/")+"/"),V(he,L,Z,"",function(re){return re})):he!=null&&(k(he)&&(he=H(he,Z+(!he.key||Be&&Be.key===he.key?"":(""+he.key).replace(R,"$&/")+"/")+T)),L.push(he)),1;if(Be=0,se=se===""?".":se+":",O(T))for(var de=0;de<T.length;de++){Ie=T[de];var ae=se+F(Ie,de);Be+=V(Ie,L,Z,ae,he)}else if(ae=v(T),typeof ae=="function")for(T=ae.call(T),de=0;!(Ie=T.next()).done;)Ie=Ie.value,ae=se+F(Ie,de++),Be+=V(Ie,L,Z,ae,he);else if(Ie==="object")throw L=String(T),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Be}function G(T,L,Z){if(T==null)return T;var se=[],he=0;return V(T,se,"","",function(Ie){return L.call(Z,Ie,he++)}),se}function Y(T){if(T._status===-1){var L=T._result;L=L(),L.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=L)}if(T._status===1)return T._result.default;throw T._result}var Q={current:null},$={transition:null},K={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:$,ReactCurrentOwner:A};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:G,forEach:function(T,L,Z){G(T,function(){L.apply(this,arguments)},Z)},count:function(T){var L=0;return G(T,function(){L++}),L},toArray:function(T){return G(T,function(L){return L})||[]},only:function(T){if(!k(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Fe.Component=b,Fe.Fragment=t,Fe.Profiler=a,Fe.PureComponent=S,Fe.StrictMode=r,Fe.Suspense=c,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Fe.act=ne,Fe.cloneElement=function(T,L,Z){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var se=B({},T.props),he=T.key,Ie=T.ref,Be=T._owner;if(L!=null){if(L.ref!==void 0&&(Ie=L.ref,Be=A.current),L.key!==void 0&&(he=""+L.key),T.type&&T.type.defaultProps)var de=T.type.defaultProps;for(ae in L)P.call(L,ae)&&!N.hasOwnProperty(ae)&&(se[ae]=L[ae]===void 0&&de!==void 0?de[ae]:L[ae])}var ae=arguments.length-2;if(ae===1)se.children=Z;else if(1<ae){de=Array(ae);for(var re=0;re<ae;re++)de[re]=arguments[re+2];se.children=de}return{$$typeof:e,type:T.type,key:he,ref:Ie,props:se,_owner:Be}},Fe.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:i,_context:T},T.Consumer=T},Fe.createElement=w,Fe.createFactory=function(T){var L=w.bind(null,T);return L.type=T,L},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(T){return{$$typeof:s,render:T}},Fe.isValidElement=k,Fe.lazy=function(T){return{$$typeof:m,_payload:{_status:-1,_result:T},_init:Y}},Fe.memo=function(T,L){return{$$typeof:f,type:T,compare:L===void 0?null:L}},Fe.startTransition=function(T){var L=$.transition;$.transition={};try{T()}finally{$.transition=L}},Fe.unstable_act=ne,Fe.useCallback=function(T,L){return Q.current.useCallback(T,L)},Fe.useContext=function(T){return Q.current.useContext(T)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(T){return Q.current.useDeferredValue(T)},Fe.useEffect=function(T,L){return Q.current.useEffect(T,L)},Fe.useId=function(){return Q.current.useId()},Fe.useImperativeHandle=function(T,L,Z){return Q.current.useImperativeHandle(T,L,Z)},Fe.useInsertionEffect=function(T,L){return Q.current.useInsertionEffect(T,L)},Fe.useLayoutEffect=function(T,L){return Q.current.useLayoutEffect(T,L)},Fe.useMemo=function(T,L){return Q.current.useMemo(T,L)},Fe.useReducer=function(T,L,Z){return Q.current.useReducer(T,L,Z)},Fe.useRef=function(T){return Q.current.useRef(T)},Fe.useState=function(T){return Q.current.useState(T)},Fe.useSyncExternalStore=function(T,L,Z){return Q.current.useSyncExternalStore(T,L,Z)},Fe.useTransition=function(){return Q.current.useTransition()},Fe.version="18.3.1",Fe}var oI;function ug(){return oI||(oI=1,hf.exports=dH()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function mH(){if(iI)return jp;iI=1;var e=ug(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(s,c,f){var m,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(m in c)r.call(c,m)&&!i.hasOwnProperty(m)&&(d[m]=c[m]);if(s&&s.defaultProps)for(m in c=s.defaultProps,c)d[m]===void 0&&(d[m]=c[m]);return{$$typeof:n,type:s,key:v,ref:y,props:d,_owner:a.current}}return jp.Fragment=t,jp.jsx=u,jp.jsxs=u,jp}var pI;function hH(){return pI||(pI=1,mf.exports=mH()),mf.exports}var _=hH(),c0={},vf={exports:{}},gt={},gf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI;function vH(){return uI||(uI=1,(function(e){function n($,K){var ne=$.length;$.push(K);e:for(;0<ne;){var T=ne-1>>>1,L=$[T];if(0<a(L,K))$[T]=K,$[ne]=L,ne=T;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],ne=$.pop();if(ne!==K){$[0]=ne;e:for(var T=0,L=$.length,Z=L>>>1;T<Z;){var se=2*(T+1)-1,he=$[se],Ie=se+1,Be=$[Ie];if(0>a(he,ne))Ie<L&&0>a(Be,he)?($[T]=Be,$[Ie]=ne,T=Ie):($[T]=he,$[se]=ne,T=se);else if(Ie<L&&0>a(Be,ne))$[T]=Be,$[Ie]=ne,T=Ie;else break e}}return K}function a($,K){var ne=$.sortIndex-K.sortIndex;return ne!==0?ne:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var c=[],f=[],m=1,d=null,v=3,y=!1,B=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M($){for(var K=t(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=$)r(f),K.sortIndex=K.expirationTime,n(c,K);else break;K=t(f)}}function O($){if(I=!1,M($),!B)if(t(c)!==null)B=!0,Y(P);else{var K=t(f);K!==null&&Q(O,K.startTime-$)}}function P($,K){B=!1,I&&(I=!1,W(w),w=-1),y=!0;var ne=v;try{for(M(K),d=t(c);d!==null&&(!(d.expirationTime>K)||$&&!D());){var T=d.callback;if(typeof T=="function"){d.callback=null,v=d.priorityLevel;var L=T(d.expirationTime<=K);K=e.unstable_now(),typeof L=="function"?d.callback=L:d===t(c)&&r(c),M(K)}else r(c);d=t(c)}if(d!==null)var Z=!0;else{var se=t(f);se!==null&&Q(O,se.startTime-K),Z=!1}return Z}finally{d=null,v=ne,y=!1}}var A=!1,N=null,w=-1,H=5,k=-1;function D(){return!(e.unstable_now()-k<H)}function R(){if(N!==null){var $=e.unstable_now();k=$;var K=!0;try{K=N(!0,$)}finally{K?F():(A=!1,N=null)}}else A=!1}var F;if(typeof S=="function")F=function(){S(R)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,G=V.port2;V.port1.onmessage=R,F=function(){G.postMessage(null)}}else F=function(){b(R,0)};function Y($){N=$,A||(A=!0,F())}function Q($,K){w=b(function(){$(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){B||y||(B=!0,Y(P))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function($){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var ne=v;v=K;try{return $()}finally{v=ne}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=v;v=$;try{return K()}finally{v=ne}},e.unstable_scheduleCallback=function($,K,ne){var T=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?T+ne:T):ne=T,$){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ne+L,$={id:m++,callback:K,priorityLevel:$,startTime:ne,expirationTime:L,sortIndex:-1},ne>T?($.sortIndex=ne,n(f,$),t(c)===null&&$===t(f)&&(I?(W(w),w=-1):I=!0,Q(O,ne-T))):($.sortIndex=L,n(c,$),B||y||(B=!0,Y(P))),$},e.unstable_shouldYield=D,e.unstable_wrapCallback=function($){var K=v;return function(){var ne=v;v=K;try{return $.apply(this,arguments)}finally{v=ne}}}})(yf)),yf}var sI;function gH(){return sI||(sI=1,gf.exports=vH()),gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function yH(){if(lI)return gt;lI=1;var e=ug(),n=gH();function t(o){for(var p="https://reactjs.org/docs/error-decoder.html?invariant="+o,l=1;l<arguments.length;l++)p+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+o+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,p){u(o,p),u(o+"Capture",p)}function u(o,p){for(a[o]=p,o=0;o<p.length;o++)r.add(p[o])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return c.call(d,o)?!0:c.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function y(o,p,l,h){if(l!==null&&l.type===0)return!1;switch(typeof p){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function B(o,p,l,h){if(p===null||typeof p>"u"||y(o,p,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!p;case 4:return p===!1;case 5:return isNaN(p);case 6:return isNaN(p)||1>p}return!1}function I(o,p,l,h,g,x,C){this.acceptsBooleans=p===2||p===3||p===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=o,this.type=p,this.sanitizeURL=x,this.removeEmptyString=C}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var p=o[0];b[p]=new I(p,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function S(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var p=o.replace(W,S);b[p]=new I(p,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var p=o.replace(W,S);b[p]=new I(p,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var p=o.replace(W,S);b[p]=new I(p,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function M(o,p,l,h){var g=b.hasOwnProperty(p)?b[p]:null;(g!==null?g.type!==0:h||!(2<p.length)||p[0]!=="o"&&p[0]!=="O"||p[1]!=="n"&&p[1]!=="N")&&(B(p,l,g,h)&&(l=null),h||g===null?v(p)&&(l===null?o.removeAttribute(p):o.setAttribute(p,""+l)):g.mustUseProperty?o[g.propertyName]=l===null?g.type===3?!1:"":l:(p=g.attributeName,h=g.attributeNamespace,l===null?o.removeAttribute(p):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?o.setAttributeNS(h,p,l):o.setAttribute(p,l))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),$=Symbol.iterator;function K(o){return o===null||typeof o!="object"?null:(o=$&&o[$]||o["@@iterator"],typeof o=="function"?o:null)}var ne=Object.assign,T;function L(o){if(T===void 0)try{throw Error()}catch(l){var p=l.stack.trim().match(/\n( *(at )?)/);T=p&&p[1]||""}return`
`+T+o}var Z=!1;function se(o,p){if(!o||Z)return"";Z=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(p)if(p=function(){throw Error()},Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(te){var h=te}Reflect.construct(o,[],p)}else{try{p.call()}catch(te){h=te}o.call(p.prototype)}else{try{throw Error()}catch(te){h=te}o()}}catch(te){if(te&&h&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),x=h.stack.split(`
`),C=g.length-1,j=x.length-1;1<=C&&0<=j&&g[C]!==x[j];)j--;for(;1<=C&&0<=j;C--,j--)if(g[C]!==x[j]){if(C!==1||j!==1)do if(C--,j--,0>j||g[C]!==x[j]){var q=`
`+g[C].replace(" at new "," at ");return o.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",o.displayName)),q}while(1<=C&&0<=j);break}}}finally{Z=!1,Error.prepareStackTrace=l}return(o=o?o.displayName||o.name:"")?L(o):""}function he(o){switch(o.tag){case 5:return L(o.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return o=se(o.type,!1),o;case 11:return o=se(o.type.render,!1),o;case 1:return o=se(o.type,!0),o;default:return""}}function Ie(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case A:return"Portal";case H:return"Profiler";case w:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case D:return(o.displayName||"Context")+".Consumer";case k:return(o._context.displayName||"Context")+".Provider";case R:var p=o.render;return o=o.displayName,o||(o=p.displayName||p.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case G:return p=o.displayName||null,p!==null?p:Ie(o.type)||"Memo";case Y:p=o._payload,o=o._init;try{return Ie(o(p))}catch{}}return null}function Be(o){var p=o.type;switch(o.tag){case 24:return"Cache";case 9:return(p.displayName||"Context")+".Consumer";case 10:return(p._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=p.render,o=o.displayName||o.name||"",p.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return p;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ie(p);case 8:return p===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof p=="function")return p.displayName||p.name||null;if(typeof p=="string")return p}return null}function de(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ae(o){var p=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(p==="checkbox"||p==="radio")}function re(o){var p=ae(o)?"checked":"value",l=Object.getOwnPropertyDescriptor(o.constructor.prototype,p),h=""+o[p];if(!o.hasOwnProperty(p)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(o,p,{configurable:!0,get:function(){return g.call(this)},set:function(C){h=""+C,x.call(this,C)}}),Object.defineProperty(o,p,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(C){h=""+C},stopTracking:function(){o._valueTracker=null,delete o[p]}}}}function ie(o){o._valueTracker||(o._valueTracker=re(o))}function J(o){if(!o)return!1;var p=o._valueTracker;if(!p)return!0;var l=p.getValue(),h="";return o&&(h=ae(o)?o.checked?"true":"false":o.value),o=h,o!==l?(p.setValue(o),!0):!1}function ge(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function me(o,p){var l=p.checked;return ne({},p,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??o._wrapperState.initialChecked})}function ye(o,p){var l=p.defaultValue==null?"":p.defaultValue,h=p.checked!=null?p.checked:p.defaultChecked;l=de(p.value!=null?p.value:l),o._wrapperState={initialChecked:h,initialValue:l,controlled:p.type==="checkbox"||p.type==="radio"?p.checked!=null:p.value!=null}}function ve(o,p){p=p.checked,p!=null&&M(o,"checked",p,!1)}function Pe(o,p){ve(o,p);var l=de(p.value),h=p.type;if(l!=null)h==="number"?(l===0&&o.value===""||o.value!=l)&&(o.value=""+l):o.value!==""+l&&(o.value=""+l);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}p.hasOwnProperty("value")?qe(o,p.type,l):p.hasOwnProperty("defaultValue")&&qe(o,p.type,de(p.defaultValue)),p.checked==null&&p.defaultChecked!=null&&(o.defaultChecked=!!p.defaultChecked)}function je(o,p,l){if(p.hasOwnProperty("value")||p.hasOwnProperty("defaultValue")){var h=p.type;if(!(h!=="submit"&&h!=="reset"||p.value!==void 0&&p.value!==null))return;p=""+o._wrapperState.initialValue,l||p===o.value||(o.value=p),o.defaultValue=p}l=o.name,l!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,l!==""&&(o.name=l)}function qe(o,p,l){(p!=="number"||ge(o.ownerDocument)!==o)&&(l==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+l&&(o.defaultValue=""+l))}var Ke=Array.isArray;function xn(o,p,l,h){if(o=o.options,p){p={};for(var g=0;g<l.length;g++)p["$"+l[g]]=!0;for(l=0;l<o.length;l++)g=p.hasOwnProperty("$"+o[l].value),o[l].selected!==g&&(o[l].selected=g),g&&h&&(o[l].defaultSelected=!0)}else{for(l=""+de(l),p=null,g=0;g<o.length;g++){if(o[g].value===l){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}p!==null||o[g].disabled||(p=o[g])}p!==null&&(p.selected=!0)}}function gn(o,p){if(p.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},p,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Ht(o,p){var l=p.value;if(l==null){if(l=p.children,p=p.defaultValue,l!=null){if(p!=null)throw Error(t(92));if(Ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}p=l}p==null&&(p=""),l=p}o._wrapperState={initialValue:de(l)}}function yn(o,p){var l=de(p.value),h=de(p.defaultValue);l!=null&&(l=""+l,l!==o.value&&(o.value=l),p.defaultValue==null&&o.defaultValue!==l&&(o.defaultValue=l)),h!=null&&(o.defaultValue=""+h)}function Qn(o){var p=o.textContent;p===o._wrapperState.initialValue&&p!==""&&p!==null&&(o.value=p)}function Pn(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jn(o,p){return o==null||o==="http://www.w3.org/1999/xhtml"?Pn(p):o==="http://www.w3.org/2000/svg"&&p==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var ct,So=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(p,l,h,g){MSApp.execUnsafeLocalFunction(function(){return o(p,l,h,g)})}:o})(function(o,p){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=p;else{for(ct=ct||document.createElement("div"),ct.innerHTML="<svg>"+p.valueOf().toString()+"</svg>",p=ct.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;p.firstChild;)o.appendChild(p.firstChild)}});function na(o,p){if(p){var l=o.firstChild;if(l&&l===o.lastChild&&l.nodeType===3){l.nodeValue=p;return}}o.textContent=p}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nt=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(o){Nt.forEach(function(p){p=p+o.charAt(0).toUpperCase()+o.substring(1),Ct[p]=Ct[o]})});function ta(o,p,l){return p==null||typeof p=="boolean"||p===""?"":l||typeof p!="number"||p===0||Ct.hasOwnProperty(o)&&Ct[o]?(""+p).trim():p+"px"}function tp(o,p){o=o.style;for(var l in p)if(p.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=ta(l,p[l],h);l==="float"&&(l="cssFloat"),h?o.setProperty(l,g):o[l]=g}}var h_=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(o,p){if(p){if(h_[o]&&(p.children!=null||p.dangerouslySetInnerHTML!=null))throw Error(t(137,o));if(p.dangerouslySetInnerHTML!=null){if(p.children!=null)throw Error(t(60));if(typeof p.dangerouslySetInnerHTML!="object"||!("__html"in p.dangerouslySetInnerHTML))throw Error(t(61))}if(p.style!=null&&typeof p.style!="object")throw Error(t(62))}}function Sc(o,p){if(o.indexOf("-")===-1)return typeof p.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function Ac(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var _c=null,Mo=null,Ao=null;function By(o){if(o=wp(o)){if(typeof _c!="function")throw Error(t(280));var p=o.stateNode;p&&(p=Ws(p),_c(o.stateNode,o.type,p))}}function xy(o){Mo?Ao?Ao.push(o):Ao=[o]:Mo=o}function Py(){if(Mo){var o=Mo,p=Ao;if(Ao=Mo=null,By(o),p)for(o=0;o<p.length;o++)By(p[o])}}function wy(o,p){return o(p)}function Wy(){}var Oc=!1;function Sy(o,p,l){if(Oc)return o(p,l);Oc=!0;try{return wy(o,p,l)}finally{Oc=!1,(Mo!==null||Ao!==null)&&(Wy(),Py())}}function rp(o,p){var l=o.stateNode;if(l===null)return null;var h=Ws(l);if(h===null)return null;l=h[p];e:switch(p){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(l&&typeof l!="function")throw Error(t(231,p,typeof l));return l}var Hc=!1;if(s)try{var ap={};Object.defineProperty(ap,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",ap,ap),window.removeEventListener("test",ap,ap)}catch{Hc=!1}function v_(o,p,l,h,g,x,C,j,q){var te=Array.prototype.slice.call(arguments,3);try{p.apply(l,te)}catch(ue){this.onError(ue)}}var op=!1,rs=null,as=!1,Cc=null,g_={onError:function(o){op=!0,rs=o}};function y_(o,p,l,h,g,x,C,j,q){op=!1,rs=null,v_.apply(g_,arguments)}function b_(o,p,l,h,g,x,C,j,q){if(y_.apply(this,arguments),op){if(op){var te=rs;op=!1,rs=null}else throw Error(t(198));as||(as=!0,Cc=te)}}function Fa(o){var p=o,l=o;if(o.alternate)for(;p.return;)p=p.return;else{o=p;do p=o,(p.flags&4098)!==0&&(l=p.return),o=p.return;while(o)}return p.tag===3?l:null}function My(o){if(o.tag===13){var p=o.memoizedState;if(p===null&&(o=o.alternate,o!==null&&(p=o.memoizedState)),p!==null)return p.dehydrated}return null}function Ay(o){if(Fa(o)!==o)throw Error(t(188))}function I_(o){var p=o.alternate;if(!p){if(p=Fa(o),p===null)throw Error(t(188));return p!==o?null:o}for(var l=o,h=p;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return Ay(g),o;if(x===h)return Ay(g),p;x=x.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=x;else{for(var C=!1,j=g.child;j;){if(j===l){C=!0,l=g,h=x;break}if(j===h){C=!0,h=g,l=x;break}j=j.sibling}if(!C){for(j=x.child;j;){if(j===l){C=!0,l=x,h=g;break}if(j===h){C=!0,h=x,l=g;break}j=j.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?o:p}function _y(o){return o=I_(o),o!==null?Oy(o):null}function Oy(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var p=Oy(o);if(p!==null)return p;o=o.sibling}return null}var Hy=n.unstable_scheduleCallback,Cy=n.unstable_cancelCallback,B_=n.unstable_shouldYield,x_=n.unstable_requestPaint,wn=n.unstable_now,P_=n.unstable_getCurrentPriorityLevel,Nc=n.unstable_ImmediatePriority,Ny=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,w_=n.unstable_LowPriority,Ry=n.unstable_IdlePriority,is=null,fr=null;function W_(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(is,o,void 0,(o.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:A_,S_=Math.log,M_=Math.LN2;function A_(o){return o>>>=0,o===0?32:31-(S_(o)/M_|0)|0}var ps=64,us=4194304;function ip(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function ss(o,p){var l=o.pendingLanes;if(l===0)return 0;var h=0,g=o.suspendedLanes,x=o.pingedLanes,C=l&268435455;if(C!==0){var j=C&~g;j!==0?h=ip(j):(x&=C,x!==0&&(h=ip(x)))}else C=l&~g,C!==0?h=ip(C):x!==0&&(h=ip(x));if(h===0)return 0;if(p!==0&&p!==h&&(p&g)===0&&(g=h&-h,x=p&-p,g>=x||g===16&&(x&4194240)!==0))return p;if((h&4)!==0&&(h|=l&16),p=o.entangledLanes,p!==0)for(o=o.entanglements,p&=h;0<p;)l=31-Xt(p),g=1<<l,h|=o[l],p&=~g;return h}function __(o,p){switch(o){case 1:case 2:case 4:return p+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return p+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O_(o,p){for(var l=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,x=o.pendingLanes;0<x;){var C=31-Xt(x),j=1<<C,q=g[C];q===-1?((j&l)===0||(j&h)!==0)&&(g[C]=__(j,p)):q<=p&&(o.expiredLanes|=j),x&=~j}}function Rc(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function ky(){var o=ps;return ps<<=1,(ps&4194240)===0&&(ps=64),o}function kc(o){for(var p=[],l=0;31>l;l++)p.push(o);return p}function pp(o,p,l){o.pendingLanes|=p,p!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,p=31-Xt(p),o[p]=l}function H_(o,p){var l=o.pendingLanes&~p;o.pendingLanes=p,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=p,o.mutableReadLanes&=p,o.entangledLanes&=p,p=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<l;){var g=31-Xt(l),x=1<<g;p[g]=0,h[g]=-1,o[g]=-1,l&=~x}}function Ec(o,p){var l=o.entangledLanes|=p;for(o=o.entanglements;l;){var h=31-Xt(l),g=1<<h;g&p|o[h]&p&&(o[h]|=p),l&=~g}}var Ze=0;function Ey(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Ty,Tc,Dy,jy,$y,Dc=!1,ls=[],ra=null,aa=null,oa=null,up=new Map,sp=new Map,ia=[],C_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ly(o,p){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":up.delete(p.pointerId);break;case"gotpointercapture":case"lostpointercapture":sp.delete(p.pointerId)}}function lp(o,p,l,h,g,x){return o===null||o.nativeEvent!==x?(o={blockedOn:p,domEventName:l,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},p!==null&&(p=wp(p),p!==null&&Tc(p)),o):(o.eventSystemFlags|=h,p=o.targetContainers,g!==null&&p.indexOf(g)===-1&&p.push(g),o)}function N_(o,p,l,h,g){switch(p){case"focusin":return ra=lp(ra,o,p,l,h,g),!0;case"dragenter":return aa=lp(aa,o,p,l,h,g),!0;case"mouseover":return oa=lp(oa,o,p,l,h,g),!0;case"pointerover":var x=g.pointerId;return up.set(x,lp(up.get(x)||null,o,p,l,h,g)),!0;case"gotpointercapture":return x=g.pointerId,sp.set(x,lp(sp.get(x)||null,o,p,l,h,g)),!0}return!1}function Fy(o){var p=qa(o.target);if(p!==null){var l=Fa(p);if(l!==null){if(p=l.tag,p===13){if(p=My(l),p!==null){o.blockedOn=p,$y(o.priority,function(){Dy(l)});return}}else if(p===3&&l.stateNode.current.memoizedState.isDehydrated){o.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}o.blockedOn=null}function cs(o){if(o.blockedOn!==null)return!1;for(var p=o.targetContainers;0<p.length;){var l=$c(o.domEventName,o.eventSystemFlags,p[0],o.nativeEvent);if(l===null){l=o.nativeEvent;var h=new l.constructor(l.type,l);Mc=h,l.target.dispatchEvent(h),Mc=null}else return p=wp(l),p!==null&&Tc(p),o.blockedOn=l,!1;p.shift()}return!0}function qy(o,p,l){cs(o)&&l.delete(p)}function R_(){Dc=!1,ra!==null&&cs(ra)&&(ra=null),aa!==null&&cs(aa)&&(aa=null),oa!==null&&cs(oa)&&(oa=null),up.forEach(qy),sp.forEach(qy)}function cp(o,p){o.blockedOn===p&&(o.blockedOn=null,Dc||(Dc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,R_)))}function fp(o){function p(g){return cp(g,o)}if(0<ls.length){cp(ls[0],o);for(var l=1;l<ls.length;l++){var h=ls[l];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&cp(ra,o),aa!==null&&cp(aa,o),oa!==null&&cp(oa,o),up.forEach(p),sp.forEach(p),l=0;l<ia.length;l++)h=ia[l],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(l=ia[0],l.blockedOn===null);)Fy(l),l.blockedOn===null&&ia.shift()}var _o=O.ReactCurrentBatchConfig,fs=!0;function k_(o,p,l,h){var g=Ze,x=_o.transition;_o.transition=null;try{Ze=1,jc(o,p,l,h)}finally{Ze=g,_o.transition=x}}function E_(o,p,l,h){var g=Ze,x=_o.transition;_o.transition=null;try{Ze=4,jc(o,p,l,h)}finally{Ze=g,_o.transition=x}}function jc(o,p,l,h){if(fs){var g=$c(o,p,l,h);if(g===null)r2(o,p,h,ds,l),Ly(o,h);else if(N_(g,o,p,l,h))h.stopPropagation();else if(Ly(o,h),p&4&&-1<C_.indexOf(o)){for(;g!==null;){var x=wp(g);if(x!==null&&Ty(x),x=$c(o,p,l,h),x===null&&r2(o,p,h,ds,l),x===g)break;g=x}g!==null&&h.stopPropagation()}else r2(o,p,h,null,l)}}var ds=null;function $c(o,p,l,h){if(ds=null,o=Ac(h),o=qa(o),o!==null)if(p=Fa(o),p===null)o=null;else if(l=p.tag,l===13){if(o=My(p),o!==null)return o;o=null}else if(l===3){if(p.stateNode.current.memoizedState.isDehydrated)return p.tag===3?p.stateNode.containerInfo:null;o=null}else p!==o&&(o=null);return ds=o,null}function zy(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P_()){case Nc:return 1;case Ny:return 4;case os:case w_:return 16;case Ry:return 536870912;default:return 16}default:return 16}}var pa=null,Lc=null,ms=null;function Uy(){if(ms)return ms;var o,p=Lc,l=p.length,h,g="value"in pa?pa.value:pa.textContent,x=g.length;for(o=0;o<l&&p[o]===g[o];o++);var C=l-o;for(h=1;h<=C&&p[l-h]===g[x-h];h++);return ms=g.slice(o,1<h?1-h:void 0)}function hs(o){var p=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&p===13&&(o=13)):o=p,o===10&&(o=13),32<=o||o===13?o:0}function vs(){return!0}function Vy(){return!1}function It(o){function p(l,h,g,x,C){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var j in o)o.hasOwnProperty(j)&&(l=o[j],this[j]=l?l(x):x[j]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?vs:Vy,this.isPropagationStopped=Vy,this}return ne(p.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),p}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=It(Oo),dp=ne({},Oo,{view:0,detail:0}),T_=It(dp),qc,zc,mp,gs=ne({},dp,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==mp&&(mp&&o.type==="mousemove"?(qc=o.screenX-mp.screenX,zc=o.screenY-mp.screenY):zc=qc=0,mp=o),qc)},movementY:function(o){return"movementY"in o?o.movementY:zc}}),Gy=It(gs),D_=ne({},gs,{dataTransfer:0}),j_=It(D_),$_=ne({},dp,{relatedTarget:0}),Uc=It($_),L_=ne({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=It(L_),q_=ne({},Oo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),z_=It(q_),U_=ne({},Oo,{data:0}),Ky=It(U_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(o){var p=this.nativeEvent;return p.getModifierState?p.getModifierState(o):(o=K_[o])?!!p[o]:!1}function Vc(){return Q_}var Y_=ne({},dp,{key:function(o){if(o.key){var p=V_[o.key]||o.key;if(p!=="Unidentified")return p}return o.type==="keypress"?(o=hs(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?G_[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(o){return o.type==="keypress"?hs(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?hs(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),X_=It(Y_),Z_=ne({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qy=It(Z_),J_=ne({},dp,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),eO=It(J_),nO=ne({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tO=It(nO),rO=ne({},gs,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),aO=It(rO),oO=[9,13,27,32],Gc=s&&"CompositionEvent"in window,hp=null;s&&"documentMode"in document&&(hp=document.documentMode);var iO=s&&"TextEvent"in window&&!hp,Yy=s&&(!Gc||hp&&8<hp&&11>=hp),Xy=" ",Zy=!1;function Jy(o,p){switch(o){case"keyup":return oO.indexOf(p.keyCode)!==-1;case"keydown":return p.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eb(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Ho=!1;function pO(o,p){switch(o){case"compositionend":return eb(p);case"keypress":return p.which!==32?null:(Zy=!0,Xy);case"textInput":return o=p.data,o===Xy&&Zy?null:o;default:return null}}function uO(o,p){if(Ho)return o==="compositionend"||!Gc&&Jy(o,p)?(o=Uy(),ms=Lc=pa=null,Ho=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(p.ctrlKey||p.altKey||p.metaKey)||p.ctrlKey&&p.altKey){if(p.char&&1<p.char.length)return p.char;if(p.which)return String.fromCharCode(p.which)}return null;case"compositionend":return Yy&&p.locale!=="ko"?null:p.data;default:return null}}var sO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nb(o){var p=o&&o.nodeName&&o.nodeName.toLowerCase();return p==="input"?!!sO[o.type]:p==="textarea"}function tb(o,p,l,h){xy(h),p=xs(p,"onChange"),0<p.length&&(l=new Fc("onChange","change",null,l,h),o.push({event:l,listeners:p}))}var vp=null,gp=null;function lO(o){Ib(o,0)}function ys(o){var p=Eo(o);if(J(p))return o}function cO(o,p){if(o==="change")return p}var rb=!1;if(s){var Kc;if(s){var Qc="oninput"in document;if(!Qc){var ab=document.createElement("div");ab.setAttribute("oninput","return;"),Qc=typeof ab.oninput=="function"}Kc=Qc}else Kc=!1;rb=Kc&&(!document.documentMode||9<document.documentMode)}function ob(){vp&&(vp.detachEvent("onpropertychange",ib),gp=vp=null)}function ib(o){if(o.propertyName==="value"&&ys(gp)){var p=[];tb(p,gp,o,Ac(o)),Sy(lO,p)}}function fO(o,p,l){o==="focusin"?(ob(),vp=p,gp=l,vp.attachEvent("onpropertychange",ib)):o==="focusout"&&ob()}function dO(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return ys(gp)}function mO(o,p){if(o==="click")return ys(p)}function hO(o,p){if(o==="input"||o==="change")return ys(p)}function vO(o,p){return o===p&&(o!==0||1/o===1/p)||o!==o&&p!==p}var Zt=typeof Object.is=="function"?Object.is:vO;function yp(o,p){if(Zt(o,p))return!0;if(typeof o!="object"||o===null||typeof p!="object"||p===null)return!1;var l=Object.keys(o),h=Object.keys(p);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!c.call(p,g)||!Zt(o[g],p[g]))return!1}return!0}function pb(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function ub(o,p){var l=pb(o);o=0;for(var h;l;){if(l.nodeType===3){if(h=o+l.textContent.length,o<=p&&h>=p)return{node:l,offset:p-o};o=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=pb(l)}}function sb(o,p){return o&&p?o===p?!0:o&&o.nodeType===3?!1:p&&p.nodeType===3?sb(o,p.parentNode):"contains"in o?o.contains(p):o.compareDocumentPosition?!!(o.compareDocumentPosition(p)&16):!1:!1}function lb(){for(var o=window,p=ge();p instanceof o.HTMLIFrameElement;){try{var l=typeof p.contentWindow.location.href=="string"}catch{l=!1}if(l)o=p.contentWindow;else break;p=ge(o.document)}return p}function Yc(o){var p=o&&o.nodeName&&o.nodeName.toLowerCase();return p&&(p==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||p==="textarea"||o.contentEditable==="true")}function gO(o){var p=lb(),l=o.focusedElem,h=o.selectionRange;if(p!==l&&l&&l.ownerDocument&&sb(l.ownerDocument.documentElement,l)){if(h!==null&&Yc(l)){if(p=h.start,o=h.end,o===void 0&&(o=p),"selectionStart"in l)l.selectionStart=p,l.selectionEnd=Math.min(o,l.value.length);else if(o=(p=l.ownerDocument||document)&&p.defaultView||window,o.getSelection){o=o.getSelection();var g=l.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!o.extend&&x>h&&(g=h,h=x,x=g),g=ub(l,x);var C=ub(l,h);g&&C&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==C.node||o.focusOffset!==C.offset)&&(p=p.createRange(),p.setStart(g.node,g.offset),o.removeAllRanges(),x>h?(o.addRange(p),o.extend(C.node,C.offset)):(p.setEnd(C.node,C.offset),o.addRange(p)))}}for(p=[],o=l;o=o.parentNode;)o.nodeType===1&&p.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<p.length;l++)o=p[l],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var yO=s&&"documentMode"in document&&11>=document.documentMode,Co=null,Xc=null,bp=null,Zc=!1;function cb(o,p,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zc||Co==null||Co!==ge(h)||(h=Co,"selectionStart"in h&&Yc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),bp&&yp(bp,h)||(bp=h,h=xs(Xc,"onSelect"),0<h.length&&(p=new Fc("onSelect","select",null,p,l),o.push({event:p,listeners:h}),p.target=Co)))}function bs(o,p){var l={};return l[o.toLowerCase()]=p.toLowerCase(),l["Webkit"+o]="webkit"+p,l["Moz"+o]="moz"+p,l}var No={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Jc={},fb={};s&&(fb=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Is(o){if(Jc[o])return Jc[o];if(!No[o])return o;var p=No[o],l;for(l in p)if(p.hasOwnProperty(l)&&l in fb)return Jc[o]=p[l];return o}var db=Is("animationend"),mb=Is("animationiteration"),hb=Is("animationstart"),vb=Is("transitionend"),gb=new Map,yb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ua(o,p){gb.set(o,p),i(p,[o])}for(var e2=0;e2<yb.length;e2++){var n2=yb[e2],bO=n2.toLowerCase(),IO=n2[0].toUpperCase()+n2.slice(1);ua(bO,"on"+IO)}ua(db,"onAnimationEnd"),ua(mb,"onAnimationIteration"),ua(hb,"onAnimationStart"),ua("dblclick","onDoubleClick"),ua("focusin","onFocus"),ua("focusout","onBlur"),ua(vb,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ip="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ip));function bb(o,p,l){var h=o.type||"unknown-event";o.currentTarget=l,b_(h,p,void 0,o),o.currentTarget=null}function Ib(o,p){p=(p&4)!==0;for(var l=0;l<o.length;l++){var h=o[l],g=h.event;h=h.listeners;e:{var x=void 0;if(p)for(var C=h.length-1;0<=C;C--){var j=h[C],q=j.instance,te=j.currentTarget;if(j=j.listener,q!==x&&g.isPropagationStopped())break e;bb(g,j,te),x=q}else for(C=0;C<h.length;C++){if(j=h[C],q=j.instance,te=j.currentTarget,j=j.listener,q!==x&&g.isPropagationStopped())break e;bb(g,j,te),x=q}}}if(as)throw o=Cc,as=!1,Cc=null,o}function pn(o,p){var l=p[s2];l===void 0&&(l=p[s2]=new Set);var h=o+"__bubble";l.has(h)||(Bb(p,o,2,!1),l.add(h))}function t2(o,p,l){var h=0;p&&(h|=4),Bb(l,o,h,p)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Bp(o){if(!o[Bs]){o[Bs]=!0,r.forEach(function(l){l!=="selectionchange"&&(BO.has(l)||t2(l,!1,o),t2(l,!0,o))});var p=o.nodeType===9?o:o.ownerDocument;p===null||p[Bs]||(p[Bs]=!0,t2("selectionchange",!1,p))}}function Bb(o,p,l,h){switch(zy(p)){case 1:var g=k_;break;case 4:g=E_;break;default:g=jc}l=g.bind(null,p,l,o),g=void 0,!Hc||p!=="touchstart"&&p!=="touchmove"&&p!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(p,l,{capture:!0,passive:g}):o.addEventListener(p,l,!0):g!==void 0?o.addEventListener(p,l,{passive:g}):o.addEventListener(p,l,!1)}function r2(o,p,l,h,g){var x=h;if((p&1)===0&&(p&2)===0&&h!==null)e:for(;;){if(h===null)return;var C=h.tag;if(C===3||C===4){var j=h.stateNode.containerInfo;if(j===g||j.nodeType===8&&j.parentNode===g)break;if(C===4)for(C=h.return;C!==null;){var q=C.tag;if((q===3||q===4)&&(q=C.stateNode.containerInfo,q===g||q.nodeType===8&&q.parentNode===g))return;C=C.return}for(;j!==null;){if(C=qa(j),C===null)return;if(q=C.tag,q===5||q===6){h=x=C;continue e}j=j.parentNode}}h=h.return}Sy(function(){var te=x,ue=Ac(l),le=[];e:{var pe=gb.get(o);if(pe!==void 0){var be=Fc,Se=o;switch(o){case"keypress":if(hs(l)===0)break e;case"keydown":case"keyup":be=X_;break;case"focusin":Se="focus",be=Uc;break;case"focusout":Se="blur",be=Uc;break;case"beforeblur":case"afterblur":be=Uc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=j_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=eO;break;case db:case mb:case hb:be=F_;break;case vb:be=tO;break;case"scroll":be=T_;break;case"wheel":be=aO;break;case"copy":case"cut":case"paste":be=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Qy}var _e=(p&4)!==0,Wn=!_e&&o==="scroll",X=_e?pe!==null?pe+"Capture":null:pe;_e=[];for(var z=te,ee;z!==null;){ee=z;var fe=ee.stateNode;if(ee.tag===5&&fe!==null&&(ee=fe,X!==null&&(fe=rp(z,X),fe!=null&&_e.push(xp(z,fe,ee)))),Wn)break;z=z.return}0<_e.length&&(pe=new be(pe,Se,null,l,ue),le.push({event:pe,listeners:_e}))}}if((p&7)===0){e:{if(pe=o==="mouseover"||o==="pointerover",be=o==="mouseout"||o==="pointerout",pe&&l!==Mc&&(Se=l.relatedTarget||l.fromElement)&&(qa(Se)||Se[Ar]))break e;if((be||pe)&&(pe=ue.window===ue?ue:(pe=ue.ownerDocument)?pe.defaultView||pe.parentWindow:window,be?(Se=l.relatedTarget||l.toElement,be=te,Se=Se?qa(Se):null,Se!==null&&(Wn=Fa(Se),Se!==Wn||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(be=null,Se=te),be!==Se)){if(_e=Gy,fe="onMouseLeave",X="onMouseEnter",z="mouse",(o==="pointerout"||o==="pointerover")&&(_e=Qy,fe="onPointerLeave",X="onPointerEnter",z="pointer"),Wn=be==null?pe:Eo(be),ee=Se==null?pe:Eo(Se),pe=new _e(fe,z+"leave",be,l,ue),pe.target=Wn,pe.relatedTarget=ee,fe=null,qa(ue)===te&&(_e=new _e(X,z+"enter",Se,l,ue),_e.target=ee,_e.relatedTarget=Wn,fe=_e),Wn=fe,be&&Se)n:{for(_e=be,X=Se,z=0,ee=_e;ee;ee=Ro(ee))z++;for(ee=0,fe=X;fe;fe=Ro(fe))ee++;for(;0<z-ee;)_e=Ro(_e),z--;for(;0<ee-z;)X=Ro(X),ee--;for(;z--;){if(_e===X||X!==null&&_e===X.alternate)break n;_e=Ro(_e),X=Ro(X)}_e=null}else _e=null;be!==null&&xb(le,pe,be,_e,!1),Se!==null&&Wn!==null&&xb(le,Wn,Se,_e,!0)}}e:{if(pe=te?Eo(te):window,be=pe.nodeName&&pe.nodeName.toLowerCase(),be==="select"||be==="input"&&pe.type==="file")var He=cO;else if(nb(pe))if(rb)He=hO;else{He=dO;var Ce=fO}else(be=pe.nodeName)&&be.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(He=mO);if(He&&(He=He(o,te))){tb(le,He,l,ue);break e}Ce&&Ce(o,pe,te),o==="focusout"&&(Ce=pe._wrapperState)&&Ce.controlled&&pe.type==="number"&&qe(pe,"number",pe.value)}switch(Ce=te?Eo(te):window,o){case"focusin":(nb(Ce)||Ce.contentEditable==="true")&&(Co=Ce,Xc=te,bp=null);break;case"focusout":bp=Xc=Co=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,cb(le,l,ue);break;case"selectionchange":if(yO)break;case"keydown":case"keyup":cb(le,l,ue)}var Ne;if(Gc)e:{switch(o){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ho?Jy(o,l)&&(Te="onCompositionEnd"):o==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(Yy&&l.locale!=="ko"&&(Ho||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ho&&(Ne=Uy()):(pa=ue,Lc="value"in pa?pa.value:pa.textContent,Ho=!0)),Ce=xs(te,Te),0<Ce.length&&(Te=new Ky(Te,o,null,l,ue),le.push({event:Te,listeners:Ce}),Ne?Te.data=Ne:(Ne=eb(l),Ne!==null&&(Te.data=Ne)))),(Ne=iO?pO(o,l):uO(o,l))&&(te=xs(te,"onBeforeInput"),0<te.length&&(ue=new Ky("onBeforeInput","beforeinput",null,l,ue),le.push({event:ue,listeners:te}),ue.data=Ne))}Ib(le,p)})}function xp(o,p,l){return{instance:o,listener:p,currentTarget:l}}function xs(o,p){for(var l=p+"Capture",h=[];o!==null;){var g=o,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=rp(o,l),x!=null&&h.unshift(xp(o,x,g)),x=rp(o,p),x!=null&&h.push(xp(o,x,g))),o=o.return}return h}function Ro(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function xb(o,p,l,h,g){for(var x=p._reactName,C=[];l!==null&&l!==h;){var j=l,q=j.alternate,te=j.stateNode;if(q!==null&&q===h)break;j.tag===5&&te!==null&&(j=te,g?(q=rp(l,x),q!=null&&C.unshift(xp(l,q,j))):g||(q=rp(l,x),q!=null&&C.push(xp(l,q,j)))),l=l.return}C.length!==0&&o.push({event:p,listeners:C})}var xO=/\r\n?/g,PO=/\u0000|\uFFFD/g;function Pb(o){return(typeof o=="string"?o:""+o).replace(xO,`
`).replace(PO,"")}function Ps(o,p,l){if(p=Pb(p),Pb(o)!==p&&l)throw Error(t(425))}function ws(){}var a2=null,o2=null;function i2(o,p){return o==="textarea"||o==="noscript"||typeof p.children=="string"||typeof p.children=="number"||typeof p.dangerouslySetInnerHTML=="object"&&p.dangerouslySetInnerHTML!==null&&p.dangerouslySetInnerHTML.__html!=null}var p2=typeof setTimeout=="function"?setTimeout:void 0,wO=typeof clearTimeout=="function"?clearTimeout:void 0,wb=typeof Promise=="function"?Promise:void 0,WO=typeof queueMicrotask=="function"?queueMicrotask:typeof wb<"u"?function(o){return wb.resolve(null).then(o).catch(SO)}:p2;function SO(o){setTimeout(function(){throw o})}function u2(o,p){var l=p,h=0;do{var g=l.nextSibling;if(o.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){o.removeChild(g),fp(p);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);fp(p)}function sa(o){for(;o!=null;o=o.nextSibling){var p=o.nodeType;if(p===1||p===3)break;if(p===8){if(p=o.data,p==="$"||p==="$!"||p==="$?")break;if(p==="/$")return null}}return o}function Wb(o){o=o.previousSibling;for(var p=0;o;){if(o.nodeType===8){var l=o.data;if(l==="$"||l==="$!"||l==="$?"){if(p===0)return o;p--}else l==="/$"&&p++}o=o.previousSibling}return null}var ko=Math.random().toString(36).slice(2),dr="__reactFiber$"+ko,Pp="__reactProps$"+ko,Ar="__reactContainer$"+ko,s2="__reactEvents$"+ko,MO="__reactListeners$"+ko,AO="__reactHandles$"+ko;function qa(o){var p=o[dr];if(p)return p;for(var l=o.parentNode;l;){if(p=l[Ar]||l[dr]){if(l=p.alternate,p.child!==null||l!==null&&l.child!==null)for(o=Wb(o);o!==null;){if(l=o[dr])return l;o=Wb(o)}return p}o=l,l=o.parentNode}return null}function wp(o){return o=o[dr]||o[Ar],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Eo(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(t(33))}function Ws(o){return o[Pp]||null}var l2=[],To=-1;function la(o){return{current:o}}function un(o){0>To||(o.current=l2[To],l2[To]=null,To--)}function tn(o,p){To++,l2[To]=o.current,o.current=p}var ca={},Yn=la(ca),ft=la(!1),za=ca;function Do(o,p){var l=o.type.contextTypes;if(!l)return ca;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===p)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=p[x];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=p,o.__reactInternalMemoizedMaskedChildContext=g),g}function dt(o){return o=o.childContextTypes,o!=null}function Ss(){un(ft),un(Yn)}function Sb(o,p,l){if(Yn.current!==ca)throw Error(t(168));tn(Yn,p),tn(ft,l)}function Mb(o,p,l){var h=o.stateNode;if(p=p.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in p))throw Error(t(108,Be(o)||"Unknown",g));return ne({},l,h)}function Ms(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,za=Yn.current,tn(Yn,o),tn(ft,ft.current),!0}function Ab(o,p,l){var h=o.stateNode;if(!h)throw Error(t(169));l?(o=Mb(o,p,za),h.__reactInternalMemoizedMergedChildContext=o,un(ft),un(Yn),tn(Yn,o)):un(ft),tn(ft,l)}var _r=null,As=!1,c2=!1;function _b(o){_r===null?_r=[o]:_r.push(o)}function _O(o){As=!0,_b(o)}function fa(){if(!c2&&_r!==null){c2=!0;var o=0,p=Ze;try{var l=_r;for(Ze=1;o<l.length;o++){var h=l[o];do h=h(!0);while(h!==null)}_r=null,As=!1}catch(g){throw _r!==null&&(_r=_r.slice(o+1)),Hy(Nc,fa),g}finally{Ze=p,c2=!1}}return null}var jo=[],$o=0,_s=null,Os=0,Rt=[],kt=0,Ua=null,Or=1,Hr="";function Va(o,p){jo[$o++]=Os,jo[$o++]=_s,_s=o,Os=p}function Ob(o,p,l){Rt[kt++]=Or,Rt[kt++]=Hr,Rt[kt++]=Ua,Ua=o;var h=Or;o=Hr;var g=32-Xt(h)-1;h&=~(1<<g),l+=1;var x=32-Xt(p)+g;if(30<x){var C=g-g%5;x=(h&(1<<C)-1).toString(32),h>>=C,g-=C,Or=1<<32-Xt(p)+g|l<<g|h,Hr=x+o}else Or=1<<x|l<<g|h,Hr=o}function f2(o){o.return!==null&&(Va(o,1),Ob(o,1,0))}function d2(o){for(;o===_s;)_s=jo[--$o],jo[$o]=null,Os=jo[--$o],jo[$o]=null;for(;o===Ua;)Ua=Rt[--kt],Rt[kt]=null,Hr=Rt[--kt],Rt[kt]=null,Or=Rt[--kt],Rt[kt]=null}var Bt=null,xt=null,cn=!1,Jt=null;function Hb(o,p){var l=jt(5,null,null,0);l.elementType="DELETED",l.stateNode=p,l.return=o,p=o.deletions,p===null?(o.deletions=[l],o.flags|=16):p.push(l)}function Cb(o,p){switch(o.tag){case 5:var l=o.type;return p=p.nodeType!==1||l.toLowerCase()!==p.nodeName.toLowerCase()?null:p,p!==null?(o.stateNode=p,Bt=o,xt=sa(p.firstChild),!0):!1;case 6:return p=o.pendingProps===""||p.nodeType!==3?null:p,p!==null?(o.stateNode=p,Bt=o,xt=null,!0):!1;case 13:return p=p.nodeType!==8?null:p,p!==null?(l=Ua!==null?{id:Or,overflow:Hr}:null,o.memoizedState={dehydrated:p,treeContext:l,retryLane:1073741824},l=jt(18,null,null,0),l.stateNode=p,l.return=o,o.child=l,Bt=o,xt=null,!0):!1;default:return!1}}function m2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function h2(o){if(cn){var p=xt;if(p){var l=p;if(!Cb(o,p)){if(m2(o))throw Error(t(418));p=sa(l.nextSibling);var h=Bt;p&&Cb(o,p)?Hb(h,l):(o.flags=o.flags&-4097|2,cn=!1,Bt=o)}}else{if(m2(o))throw Error(t(418));o.flags=o.flags&-4097|2,cn=!1,Bt=o}}}function Nb(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Bt=o}function Hs(o){if(o!==Bt)return!1;if(!cn)return Nb(o),cn=!0,!1;var p;if((p=o.tag!==3)&&!(p=o.tag!==5)&&(p=o.type,p=p!=="head"&&p!=="body"&&!i2(o.type,o.memoizedProps)),p&&(p=xt)){if(m2(o))throw Rb(),Error(t(418));for(;p;)Hb(o,p),p=sa(p.nextSibling)}if(Nb(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(t(317));e:{for(o=o.nextSibling,p=0;o;){if(o.nodeType===8){var l=o.data;if(l==="/$"){if(p===0){xt=sa(o.nextSibling);break e}p--}else l!=="$"&&l!=="$!"&&l!=="$?"||p++}o=o.nextSibling}xt=null}}else xt=Bt?sa(o.stateNode.nextSibling):null;return!0}function Rb(){for(var o=xt;o;)o=sa(o.nextSibling)}function Lo(){xt=Bt=null,cn=!1}function v2(o){Jt===null?Jt=[o]:Jt.push(o)}var OO=O.ReactCurrentBatchConfig;function Wp(o,p,l){if(o=l.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,o));var g=h,x=""+o;return p!==null&&p.ref!==null&&typeof p.ref=="function"&&p.ref._stringRef===x?p.ref:(p=function(C){var j=g.refs;C===null?delete j[x]:j[x]=C},p._stringRef=x,p)}if(typeof o!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,o))}return o}function Cs(o,p){throw o=Object.prototype.toString.call(p),Error(t(31,o==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":o))}function kb(o){var p=o._init;return p(o._payload)}function Eb(o){function p(X,z){if(o){var ee=X.deletions;ee===null?(X.deletions=[z],X.flags|=16):ee.push(z)}}function l(X,z){if(!o)return null;for(;z!==null;)p(X,z),z=z.sibling;return null}function h(X,z){for(X=new Map;z!==null;)z.key!==null?X.set(z.key,z):X.set(z.index,z),z=z.sibling;return X}function g(X,z){return X=Ia(X,z),X.index=0,X.sibling=null,X}function x(X,z,ee){return X.index=ee,o?(ee=X.alternate,ee!==null?(ee=ee.index,ee<z?(X.flags|=2,z):ee):(X.flags|=2,z)):(X.flags|=1048576,z)}function C(X){return o&&X.alternate===null&&(X.flags|=2),X}function j(X,z,ee,fe){return z===null||z.tag!==6?(z=uf(ee,X.mode,fe),z.return=X,z):(z=g(z,ee),z.return=X,z)}function q(X,z,ee,fe){var He=ee.type;return He===N?ue(X,z,ee.props.children,fe,ee.key):z!==null&&(z.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Y&&kb(He)===z.type)?(fe=g(z,ee.props),fe.ref=Wp(X,z,ee),fe.return=X,fe):(fe=t0(ee.type,ee.key,ee.props,null,X.mode,fe),fe.ref=Wp(X,z,ee),fe.return=X,fe)}function te(X,z,ee,fe){return z===null||z.tag!==4||z.stateNode.containerInfo!==ee.containerInfo||z.stateNode.implementation!==ee.implementation?(z=sf(ee,X.mode,fe),z.return=X,z):(z=g(z,ee.children||[]),z.return=X,z)}function ue(X,z,ee,fe,He){return z===null||z.tag!==7?(z=eo(ee,X.mode,fe,He),z.return=X,z):(z=g(z,ee),z.return=X,z)}function le(X,z,ee){if(typeof z=="string"&&z!==""||typeof z=="number")return z=uf(""+z,X.mode,ee),z.return=X,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case P:return ee=t0(z.type,z.key,z.props,null,X.mode,ee),ee.ref=Wp(X,null,z),ee.return=X,ee;case A:return z=sf(z,X.mode,ee),z.return=X,z;case Y:var fe=z._init;return le(X,fe(z._payload),ee)}if(Ke(z)||K(z))return z=eo(z,X.mode,ee,null),z.return=X,z;Cs(X,z)}return null}function pe(X,z,ee,fe){var He=z!==null?z.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return He!==null?null:j(X,z,""+ee,fe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case P:return ee.key===He?q(X,z,ee,fe):null;case A:return ee.key===He?te(X,z,ee,fe):null;case Y:return He=ee._init,pe(X,z,He(ee._payload),fe)}if(Ke(ee)||K(ee))return He!==null?null:ue(X,z,ee,fe,null);Cs(X,ee)}return null}function be(X,z,ee,fe,He){if(typeof fe=="string"&&fe!==""||typeof fe=="number")return X=X.get(ee)||null,j(z,X,""+fe,He);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:return X=X.get(fe.key===null?ee:fe.key)||null,q(z,X,fe,He);case A:return X=X.get(fe.key===null?ee:fe.key)||null,te(z,X,fe,He);case Y:var Ce=fe._init;return be(X,z,ee,Ce(fe._payload),He)}if(Ke(fe)||K(fe))return X=X.get(ee)||null,ue(z,X,fe,He,null);Cs(z,fe)}return null}function Se(X,z,ee,fe){for(var He=null,Ce=null,Ne=z,Te=z=0,Fn=null;Ne!==null&&Te<ee.length;Te++){Ne.index>Te?(Fn=Ne,Ne=null):Fn=Ne.sibling;var Ue=pe(X,Ne,ee[Te],fe);if(Ue===null){Ne===null&&(Ne=Fn);break}o&&Ne&&Ue.alternate===null&&p(X,Ne),z=x(Ue,z,Te),Ce===null?He=Ue:Ce.sibling=Ue,Ce=Ue,Ne=Fn}if(Te===ee.length)return l(X,Ne),cn&&Va(X,Te),He;if(Ne===null){for(;Te<ee.length;Te++)Ne=le(X,ee[Te],fe),Ne!==null&&(z=x(Ne,z,Te),Ce===null?He=Ne:Ce.sibling=Ne,Ce=Ne);return cn&&Va(X,Te),He}for(Ne=h(X,Ne);Te<ee.length;Te++)Fn=be(Ne,X,Te,ee[Te],fe),Fn!==null&&(o&&Fn.alternate!==null&&Ne.delete(Fn.key===null?Te:Fn.key),z=x(Fn,z,Te),Ce===null?He=Fn:Ce.sibling=Fn,Ce=Fn);return o&&Ne.forEach(function(Ba){return p(X,Ba)}),cn&&Va(X,Te),He}function _e(X,z,ee,fe){var He=K(ee);if(typeof He!="function")throw Error(t(150));if(ee=He.call(ee),ee==null)throw Error(t(151));for(var Ce=He=null,Ne=z,Te=z=0,Fn=null,Ue=ee.next();Ne!==null&&!Ue.done;Te++,Ue=ee.next()){Ne.index>Te?(Fn=Ne,Ne=null):Fn=Ne.sibling;var Ba=pe(X,Ne,Ue.value,fe);if(Ba===null){Ne===null&&(Ne=Fn);break}o&&Ne&&Ba.alternate===null&&p(X,Ne),z=x(Ba,z,Te),Ce===null?He=Ba:Ce.sibling=Ba,Ce=Ba,Ne=Fn}if(Ue.done)return l(X,Ne),cn&&Va(X,Te),He;if(Ne===null){for(;!Ue.done;Te++,Ue=ee.next())Ue=le(X,Ue.value,fe),Ue!==null&&(z=x(Ue,z,Te),Ce===null?He=Ue:Ce.sibling=Ue,Ce=Ue);return cn&&Va(X,Te),He}for(Ne=h(X,Ne);!Ue.done;Te++,Ue=ee.next())Ue=be(Ne,X,Te,Ue.value,fe),Ue!==null&&(o&&Ue.alternate!==null&&Ne.delete(Ue.key===null?Te:Ue.key),z=x(Ue,z,Te),Ce===null?He=Ue:Ce.sibling=Ue,Ce=Ue);return o&&Ne.forEach(function(sH){return p(X,sH)}),cn&&Va(X,Te),He}function Wn(X,z,ee,fe){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case P:e:{for(var He=ee.key,Ce=z;Ce!==null;){if(Ce.key===He){if(He=ee.type,He===N){if(Ce.tag===7){l(X,Ce.sibling),z=g(Ce,ee.props.children),z.return=X,X=z;break e}}else if(Ce.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Y&&kb(He)===Ce.type){l(X,Ce.sibling),z=g(Ce,ee.props),z.ref=Wp(X,Ce,ee),z.return=X,X=z;break e}l(X,Ce);break}else p(X,Ce);Ce=Ce.sibling}ee.type===N?(z=eo(ee.props.children,X.mode,fe,ee.key),z.return=X,X=z):(fe=t0(ee.type,ee.key,ee.props,null,X.mode,fe),fe.ref=Wp(X,z,ee),fe.return=X,X=fe)}return C(X);case A:e:{for(Ce=ee.key;z!==null;){if(z.key===Ce)if(z.tag===4&&z.stateNode.containerInfo===ee.containerInfo&&z.stateNode.implementation===ee.implementation){l(X,z.sibling),z=g(z,ee.children||[]),z.return=X,X=z;break e}else{l(X,z);break}else p(X,z);z=z.sibling}z=sf(ee,X.mode,fe),z.return=X,X=z}return C(X);case Y:return Ce=ee._init,Wn(X,z,Ce(ee._payload),fe)}if(Ke(ee))return Se(X,z,ee,fe);if(K(ee))return _e(X,z,ee,fe);Cs(X,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,z!==null&&z.tag===6?(l(X,z.sibling),z=g(z,ee),z.return=X,X=z):(l(X,z),z=uf(ee,X.mode,fe),z.return=X,X=z),C(X)):l(X,z)}return Wn}var Fo=Eb(!0),Tb=Eb(!1),Ns=la(null),Rs=null,qo=null,g2=null;function y2(){g2=qo=Rs=null}function b2(o){var p=Ns.current;un(Ns),o._currentValue=p}function I2(o,p,l){for(;o!==null;){var h=o.alternate;if((o.childLanes&p)!==p?(o.childLanes|=p,h!==null&&(h.childLanes|=p)):h!==null&&(h.childLanes&p)!==p&&(h.childLanes|=p),o===l)break;o=o.return}}function zo(o,p){Rs=o,g2=qo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&p)!==0&&(mt=!0),o.firstContext=null)}function Et(o){var p=o._currentValue;if(g2!==o)if(o={context:o,memoizedValue:p,next:null},qo===null){if(Rs===null)throw Error(t(308));qo=o,Rs.dependencies={lanes:0,firstContext:o}}else qo=qo.next=o;return p}var Ga=null;function B2(o){Ga===null?Ga=[o]:Ga.push(o)}function Db(o,p,l,h){var g=p.interleaved;return g===null?(l.next=l,B2(p)):(l.next=g.next,g.next=l),p.interleaved=l,Cr(o,h)}function Cr(o,p){o.lanes|=p;var l=o.alternate;for(l!==null&&(l.lanes|=p),l=o,o=o.return;o!==null;)o.childLanes|=p,l=o.alternate,l!==null&&(l.childLanes|=p),l=o,o=o.return;return l.tag===3?l.stateNode:null}var da=!1;function x2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jb(o,p){o=o.updateQueue,p.updateQueue===o&&(p.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,p){return{eventTime:o,lane:p,tag:0,payload:null,callback:null,next:null}}function ma(o,p,l){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var g=h.pending;return g===null?p.next=p:(p.next=g.next,g.next=p),h.pending=p,Cr(o,l)}return g=h.interleaved,g===null?(p.next=p,B2(h)):(p.next=g.next,g.next=p),h.interleaved=p,Cr(o,l)}function ks(o,p,l){if(p=p.updateQueue,p!==null&&(p=p.shared,(l&4194240)!==0)){var h=p.lanes;h&=o.pendingLanes,l|=h,p.lanes=l,Ec(o,l)}}function $b(o,p){var l=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?g=x=p:x=x.next=p}else g=x=p;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},o.updateQueue=l;return}o=l.lastBaseUpdate,o===null?l.firstBaseUpdate=p:o.next=p,l.lastBaseUpdate=p}function Es(o,p,l,h){var g=o.updateQueue;da=!1;var x=g.firstBaseUpdate,C=g.lastBaseUpdate,j=g.shared.pending;if(j!==null){g.shared.pending=null;var q=j,te=q.next;q.next=null,C===null?x=te:C.next=te,C=q;var ue=o.alternate;ue!==null&&(ue=ue.updateQueue,j=ue.lastBaseUpdate,j!==C&&(j===null?ue.firstBaseUpdate=te:j.next=te,ue.lastBaseUpdate=q))}if(x!==null){var le=g.baseState;C=0,ue=te=q=null,j=x;do{var pe=j.lane,be=j.eventTime;if((h&pe)===pe){ue!==null&&(ue=ue.next={eventTime:be,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var Se=o,_e=j;switch(pe=p,be=l,_e.tag){case 1:if(Se=_e.payload,typeof Se=="function"){le=Se.call(be,le,pe);break e}le=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=_e.payload,pe=typeof Se=="function"?Se.call(be,le,pe):Se,pe==null)break e;le=ne({},le,pe);break e;case 2:da=!0}}j.callback!==null&&j.lane!==0&&(o.flags|=64,pe=g.effects,pe===null?g.effects=[j]:pe.push(j))}else be={eventTime:be,lane:pe,tag:j.tag,payload:j.payload,callback:j.callback,next:null},ue===null?(te=ue=be,q=le):ue=ue.next=be,C|=pe;if(j=j.next,j===null){if(j=g.shared.pending,j===null)break;pe=j,j=pe.next,pe.next=null,g.lastBaseUpdate=pe,g.shared.pending=null}}while(!0);if(ue===null&&(q=le),g.baseState=q,g.firstBaseUpdate=te,g.lastBaseUpdate=ue,p=g.shared.interleaved,p!==null){g=p;do C|=g.lane,g=g.next;while(g!==p)}else x===null&&(g.shared.lanes=0);Ya|=C,o.lanes=C,o.memoizedState=le}}function Lb(o,p,l){if(o=p.effects,p.effects=null,o!==null)for(p=0;p<o.length;p++){var h=o[p],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Sp={},mr=la(Sp),Mp=la(Sp),Ap=la(Sp);function Ka(o){if(o===Sp)throw Error(t(174));return o}function P2(o,p){switch(tn(Ap,p),tn(Mp,o),tn(mr,Sp),o=p.nodeType,o){case 9:case 11:p=(p=p.documentElement)?p.namespaceURI:jn(null,"");break;default:o=o===8?p.parentNode:p,p=o.namespaceURI||null,o=o.tagName,p=jn(p,o)}un(mr),tn(mr,p)}function Uo(){un(mr),un(Mp),un(Ap)}function Fb(o){Ka(Ap.current);var p=Ka(mr.current),l=jn(p,o.type);p!==l&&(tn(Mp,o),tn(mr,l))}function w2(o){Mp.current===o&&(un(mr),un(Mp))}var dn=la(0);function Ts(o){for(var p=o;p!==null;){if(p.tag===13){var l=p.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return p}else if(p.tag===19&&p.memoizedProps.revealOrder!==void 0){if((p.flags&128)!==0)return p}else if(p.child!==null){p.child.return=p,p=p.child;continue}if(p===o)break;for(;p.sibling===null;){if(p.return===null||p.return===o)return null;p=p.return}p.sibling.return=p.return,p=p.sibling}return null}var W2=[];function S2(){for(var o=0;o<W2.length;o++)W2[o]._workInProgressVersionPrimary=null;W2.length=0}var Ds=O.ReactCurrentDispatcher,M2=O.ReactCurrentBatchConfig,Qa=0,mn=null,Nn=null,$n=null,js=!1,_p=!1,Op=0,HO=0;function Xn(){throw Error(t(321))}function A2(o,p){if(p===null)return!1;for(var l=0;l<p.length&&l<o.length;l++)if(!Zt(o[l],p[l]))return!1;return!0}function _2(o,p,l,h,g,x){if(Qa=x,mn=p,p.memoizedState=null,p.updateQueue=null,p.lanes=0,Ds.current=o===null||o.memoizedState===null?kO:EO,o=l(h,g),_p){x=0;do{if(_p=!1,Op=0,25<=x)throw Error(t(301));x+=1,$n=Nn=null,p.updateQueue=null,Ds.current=TO,o=l(h,g)}while(_p)}if(Ds.current=Fs,p=Nn!==null&&Nn.next!==null,Qa=0,$n=Nn=mn=null,js=!1,p)throw Error(t(300));return o}function O2(){var o=Op!==0;return Op=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $n===null?mn.memoizedState=$n=o:$n=$n.next=o,$n}function Tt(){if(Nn===null){var o=mn.alternate;o=o!==null?o.memoizedState:null}else o=Nn.next;var p=$n===null?mn.memoizedState:$n.next;if(p!==null)$n=p,Nn=o;else{if(o===null)throw Error(t(310));Nn=o,o={memoizedState:Nn.memoizedState,baseState:Nn.baseState,baseQueue:Nn.baseQueue,queue:Nn.queue,next:null},$n===null?mn.memoizedState=$n=o:$n=$n.next=o}return $n}function Hp(o,p){return typeof p=="function"?p(o):p}function H2(o){var p=Tt(),l=p.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=Nn,g=h.baseQueue,x=l.pending;if(x!==null){if(g!==null){var C=g.next;g.next=x.next,x.next=C}h.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,h=h.baseState;var j=C=null,q=null,te=x;do{var ue=te.lane;if((Qa&ue)===ue)q!==null&&(q=q.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),h=te.hasEagerState?te.eagerState:o(h,te.action);else{var le={lane:ue,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};q===null?(j=q=le,C=h):q=q.next=le,mn.lanes|=ue,Ya|=ue}te=te.next}while(te!==null&&te!==x);q===null?C=h:q.next=j,Zt(h,p.memoizedState)||(mt=!0),p.memoizedState=h,p.baseState=C,p.baseQueue=q,l.lastRenderedState=h}if(o=l.interleaved,o!==null){g=o;do x=g.lane,mn.lanes|=x,Ya|=x,g=g.next;while(g!==o)}else g===null&&(l.lanes=0);return[p.memoizedState,l.dispatch]}function C2(o){var p=Tt(),l=p.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=l.dispatch,g=l.pending,x=p.memoizedState;if(g!==null){l.pending=null;var C=g=g.next;do x=o(x,C.action),C=C.next;while(C!==g);Zt(x,p.memoizedState)||(mt=!0),p.memoizedState=x,p.baseQueue===null&&(p.baseState=x),l.lastRenderedState=x}return[x,h]}function qb(){}function zb(o,p){var l=mn,h=Tt(),g=p(),x=!Zt(h.memoizedState,g);if(x&&(h.memoizedState=g,mt=!0),h=h.queue,N2(Gb.bind(null,l,h,o),[o]),h.getSnapshot!==p||x||$n!==null&&$n.memoizedState.tag&1){if(l.flags|=2048,Cp(9,Vb.bind(null,l,h,g,p),void 0,null),Ln===null)throw Error(t(349));(Qa&30)!==0||Ub(l,p,g)}return g}function Ub(o,p,l){o.flags|=16384,o={getSnapshot:p,value:l},p=mn.updateQueue,p===null?(p={lastEffect:null,stores:null},mn.updateQueue=p,p.stores=[o]):(l=p.stores,l===null?p.stores=[o]:l.push(o))}function Vb(o,p,l,h){p.value=l,p.getSnapshot=h,Kb(p)&&Qb(o)}function Gb(o,p,l){return l(function(){Kb(p)&&Qb(o)})}function Kb(o){var p=o.getSnapshot;o=o.value;try{var l=p();return!Zt(o,l)}catch{return!0}}function Qb(o){var p=Cr(o,1);p!==null&&rr(p,o,1,-1)}function Yb(o){var p=hr();return typeof o=="function"&&(o=o()),p.memoizedState=p.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hp,lastRenderedState:o},p.queue=o,o=o.dispatch=RO.bind(null,mn,o),[p.memoizedState,o]}function Cp(o,p,l,h){return o={tag:o,create:p,destroy:l,deps:h,next:null},p=mn.updateQueue,p===null?(p={lastEffect:null,stores:null},mn.updateQueue=p,p.lastEffect=o.next=o):(l=p.lastEffect,l===null?p.lastEffect=o.next=o:(h=l.next,l.next=o,o.next=h,p.lastEffect=o)),o}function Xb(){return Tt().memoizedState}function $s(o,p,l,h){var g=hr();mn.flags|=o,g.memoizedState=Cp(1|p,l,void 0,h===void 0?null:h)}function Ls(o,p,l,h){var g=Tt();h=h===void 0?null:h;var x=void 0;if(Nn!==null){var C=Nn.memoizedState;if(x=C.destroy,h!==null&&A2(h,C.deps)){g.memoizedState=Cp(p,l,x,h);return}}mn.flags|=o,g.memoizedState=Cp(1|p,l,x,h)}function Zb(o,p){return $s(8390656,8,o,p)}function N2(o,p){return Ls(2048,8,o,p)}function Jb(o,p){return Ls(4,2,o,p)}function e1(o,p){return Ls(4,4,o,p)}function n1(o,p){if(typeof p=="function")return o=o(),p(o),function(){p(null)};if(p!=null)return o=o(),p.current=o,function(){p.current=null}}function t1(o,p,l){return l=l!=null?l.concat([o]):null,Ls(4,4,n1.bind(null,p,o),l)}function R2(){}function r1(o,p){var l=Tt();p=p===void 0?null:p;var h=l.memoizedState;return h!==null&&p!==null&&A2(p,h[1])?h[0]:(l.memoizedState=[o,p],o)}function a1(o,p){var l=Tt();p=p===void 0?null:p;var h=l.memoizedState;return h!==null&&p!==null&&A2(p,h[1])?h[0]:(o=o(),l.memoizedState=[o,p],o)}function o1(o,p,l){return(Qa&21)===0?(o.baseState&&(o.baseState=!1,mt=!0),o.memoizedState=l):(Zt(l,p)||(l=ky(),mn.lanes|=l,Ya|=l,o.baseState=!0),p)}function CO(o,p){var l=Ze;Ze=l!==0&&4>l?l:4,o(!0);var h=M2.transition;M2.transition={};try{o(!1),p()}finally{Ze=l,M2.transition=h}}function i1(){return Tt().memoizedState}function NO(o,p,l){var h=ya(o);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},p1(o))u1(p,l);else if(l=Db(o,p,l,h),l!==null){var g=rt();rr(l,o,h,g),s1(l,p,h)}}function RO(o,p,l){var h=ya(o),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(p1(o))u1(p,g);else{var x=o.alternate;if(o.lanes===0&&(x===null||x.lanes===0)&&(x=p.lastRenderedReducer,x!==null))try{var C=p.lastRenderedState,j=x(C,l);if(g.hasEagerState=!0,g.eagerState=j,Zt(j,C)){var q=p.interleaved;q===null?(g.next=g,B2(p)):(g.next=q.next,q.next=g),p.interleaved=g;return}}catch{}finally{}l=Db(o,p,g,h),l!==null&&(g=rt(),rr(l,o,h,g),s1(l,p,h))}}function p1(o){var p=o.alternate;return o===mn||p!==null&&p===mn}function u1(o,p){_p=js=!0;var l=o.pending;l===null?p.next=p:(p.next=l.next,l.next=p),o.pending=p}function s1(o,p,l){if((l&4194240)!==0){var h=p.lanes;h&=o.pendingLanes,l|=h,p.lanes=l,Ec(o,l)}}var Fs={readContext:Et,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},kO={readContext:Et,useCallback:function(o,p){return hr().memoizedState=[o,p===void 0?null:p],o},useContext:Et,useEffect:Zb,useImperativeHandle:function(o,p,l){return l=l!=null?l.concat([o]):null,$s(4194308,4,n1.bind(null,p,o),l)},useLayoutEffect:function(o,p){return $s(4194308,4,o,p)},useInsertionEffect:function(o,p){return $s(4,2,o,p)},useMemo:function(o,p){var l=hr();return p=p===void 0?null:p,o=o(),l.memoizedState=[o,p],o},useReducer:function(o,p,l){var h=hr();return p=l!==void 0?l(p):p,h.memoizedState=h.baseState=p,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:p},h.queue=o,o=o.dispatch=NO.bind(null,mn,o),[h.memoizedState,o]},useRef:function(o){var p=hr();return o={current:o},p.memoizedState=o},useState:Yb,useDebugValue:R2,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=Yb(!1),p=o[0];return o=CO.bind(null,o[1]),hr().memoizedState=o,[p,o]},useMutableSource:function(){},useSyncExternalStore:function(o,p,l){var h=mn,g=hr();if(cn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=p(),Ln===null)throw Error(t(349));(Qa&30)!==0||Ub(h,p,l)}g.memoizedState=l;var x={value:l,getSnapshot:p};return g.queue=x,Zb(Gb.bind(null,h,x,o),[o]),h.flags|=2048,Cp(9,Vb.bind(null,h,x,l,p),void 0,null),l},useId:function(){var o=hr(),p=Ln.identifierPrefix;if(cn){var l=Hr,h=Or;l=(h&~(1<<32-Xt(h)-1)).toString(32)+l,p=":"+p+"R"+l,l=Op++,0<l&&(p+="H"+l.toString(32)),p+=":"}else l=HO++,p=":"+p+"r"+l.toString(32)+":";return o.memoizedState=p},unstable_isNewReconciler:!1},EO={readContext:Et,useCallback:r1,useContext:Et,useEffect:N2,useImperativeHandle:t1,useInsertionEffect:Jb,useLayoutEffect:e1,useMemo:a1,useReducer:H2,useRef:Xb,useState:function(){return H2(Hp)},useDebugValue:R2,useDeferredValue:function(o){var p=Tt();return o1(p,Nn.memoizedState,o)},useTransition:function(){var o=H2(Hp)[0],p=Tt().memoizedState;return[o,p]},useMutableSource:qb,useSyncExternalStore:zb,useId:i1,unstable_isNewReconciler:!1},TO={readContext:Et,useCallback:r1,useContext:Et,useEffect:N2,useImperativeHandle:t1,useInsertionEffect:Jb,useLayoutEffect:e1,useMemo:a1,useReducer:C2,useRef:Xb,useState:function(){return C2(Hp)},useDebugValue:R2,useDeferredValue:function(o){var p=Tt();return Nn===null?p.memoizedState=o:o1(p,Nn.memoizedState,o)},useTransition:function(){var o=C2(Hp)[0],p=Tt().memoizedState;return[o,p]},useMutableSource:qb,useSyncExternalStore:zb,useId:i1,unstable_isNewReconciler:!1};function er(o,p){if(o&&o.defaultProps){p=ne({},p),o=o.defaultProps;for(var l in o)p[l]===void 0&&(p[l]=o[l]);return p}return p}function k2(o,p,l,h){p=o.memoizedState,l=l(h,p),l=l==null?p:ne({},p,l),o.memoizedState=l,o.lanes===0&&(o.updateQueue.baseState=l)}var qs={isMounted:function(o){return(o=o._reactInternals)?Fa(o)===o:!1},enqueueSetState:function(o,p,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.payload=p,l!=null&&(x.callback=l),p=ma(o,x,g),p!==null&&(rr(p,o,g,h),ks(p,o,g))},enqueueReplaceState:function(o,p,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.tag=1,x.payload=p,l!=null&&(x.callback=l),p=ma(o,x,g),p!==null&&(rr(p,o,g,h),ks(p,o,g))},enqueueForceUpdate:function(o,p){o=o._reactInternals;var l=rt(),h=ya(o),g=Nr(l,h);g.tag=2,p!=null&&(g.callback=p),p=ma(o,g,h),p!==null&&(rr(p,o,h,l),ks(p,o,h))}};function l1(o,p,l,h,g,x,C){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,x,C):p.prototype&&p.prototype.isPureReactComponent?!yp(l,h)||!yp(g,x):!0}function c1(o,p,l){var h=!1,g=ca,x=p.contextType;return typeof x=="object"&&x!==null?x=Et(x):(g=dt(p)?za:Yn.current,h=p.contextTypes,x=(h=h!=null)?Do(o,g):ca),p=new p(l,x),o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=qs,o.stateNode=p,p._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=x),p}function f1(o,p,l,h){o=p.state,typeof p.componentWillReceiveProps=="function"&&p.componentWillReceiveProps(l,h),typeof p.UNSAFE_componentWillReceiveProps=="function"&&p.UNSAFE_componentWillReceiveProps(l,h),p.state!==o&&qs.enqueueReplaceState(p,p.state,null)}function E2(o,p,l,h){var g=o.stateNode;g.props=l,g.state=o.memoizedState,g.refs={},x2(o);var x=p.contextType;typeof x=="object"&&x!==null?g.context=Et(x):(x=dt(p)?za:Yn.current,g.context=Do(o,x)),g.state=o.memoizedState,x=p.getDerivedStateFromProps,typeof x=="function"&&(k2(o,p,x,l),g.state=o.memoizedState),typeof p.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(p=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),p!==g.state&&qs.enqueueReplaceState(g,g.state,null),Es(o,l,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Vo(o,p){try{var l="",h=p;do l+=he(h),h=h.return;while(h);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:o,source:p,stack:g,digest:null}}function T2(o,p,l){return{value:o,source:null,stack:l??null,digest:p??null}}function D2(o,p){try{console.error(p.value)}catch(l){setTimeout(function(){throw l})}}var DO=typeof WeakMap=="function"?WeakMap:Map;function d1(o,p,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var h=p.value;return l.callback=function(){Ys||(Ys=!0,J2=h),D2(o,p)},l}function m1(o,p,l){l=Nr(-1,l),l.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=p.value;l.payload=function(){return h(g)},l.callback=function(){D2(o,p)}}var x=o.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){D2(o,p),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var C=p.stack;this.componentDidCatch(p.value,{componentStack:C!==null?C:""})}),l}function h1(o,p,l){var h=o.pingCache;if(h===null){h=o.pingCache=new DO;var g=new Set;h.set(p,g)}else g=h.get(p),g===void 0&&(g=new Set,h.set(p,g));g.has(l)||(g.add(l),o=ZO.bind(null,o,p,l),p.then(o,o))}function v1(o){do{var p;if((p=o.tag===13)&&(p=o.memoizedState,p=p!==null?p.dehydrated!==null:!0),p)return o;o=o.return}while(o!==null);return null}function g1(o,p,l,h,g){return(o.mode&1)===0?(o===p?o.flags|=65536:(o.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(p=Nr(-1,1),p.tag=2,ma(l,p,1))),l.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var jO=O.ReactCurrentOwner,mt=!1;function tt(o,p,l,h){p.child=o===null?Tb(p,null,l,h):Fo(p,o.child,l,h)}function y1(o,p,l,h,g){l=l.render;var x=p.ref;return zo(p,g),h=_2(o,p,l,h,x,g),l=O2(),o!==null&&!mt?(p.updateQueue=o.updateQueue,p.flags&=-2053,o.lanes&=~g,Rr(o,p,g)):(cn&&l&&f2(p),p.flags|=1,tt(o,p,h,g),p.child)}function b1(o,p,l,h,g){if(o===null){var x=l.type;return typeof x=="function"&&!pf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(p.tag=15,p.type=x,I1(o,p,x,h,g)):(o=t0(l.type,null,h,p,p.mode,g),o.ref=p.ref,o.return=p,p.child=o)}if(x=o.child,(o.lanes&g)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:yp,l(C,h)&&o.ref===p.ref)return Rr(o,p,g)}return p.flags|=1,o=Ia(x,h),o.ref=p.ref,o.return=p,p.child=o}function I1(o,p,l,h,g){if(o!==null){var x=o.memoizedProps;if(yp(x,h)&&o.ref===p.ref)if(mt=!1,p.pendingProps=h=x,(o.lanes&g)!==0)(o.flags&131072)!==0&&(mt=!0);else return p.lanes=o.lanes,Rr(o,p,g)}return j2(o,p,l,h,g)}function B1(o,p,l){var h=p.pendingProps,g=h.children,x=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((p.mode&1)===0)p.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Ko,Pt),Pt|=l;else{if((l&1073741824)===0)return o=x!==null?x.baseLanes|l:l,p.lanes=p.childLanes=1073741824,p.memoizedState={baseLanes:o,cachePool:null,transitions:null},p.updateQueue=null,tn(Ko,Pt),Pt|=o,null;p.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:l,tn(Ko,Pt),Pt|=h}else x!==null?(h=x.baseLanes|l,p.memoizedState=null):h=l,tn(Ko,Pt),Pt|=h;return tt(o,p,g,l),p.child}function x1(o,p){var l=p.ref;(o===null&&l!==null||o!==null&&o.ref!==l)&&(p.flags|=512,p.flags|=2097152)}function j2(o,p,l,h,g){var x=dt(l)?za:Yn.current;return x=Do(p,x),zo(p,g),l=_2(o,p,l,h,x,g),h=O2(),o!==null&&!mt?(p.updateQueue=o.updateQueue,p.flags&=-2053,o.lanes&=~g,Rr(o,p,g)):(cn&&h&&f2(p),p.flags|=1,tt(o,p,l,g),p.child)}function P1(o,p,l,h,g){if(dt(l)){var x=!0;Ms(p)}else x=!1;if(zo(p,g),p.stateNode===null)Us(o,p),c1(p,l,h),E2(p,l,h,g),h=!0;else if(o===null){var C=p.stateNode,j=p.memoizedProps;C.props=j;var q=C.context,te=l.contextType;typeof te=="object"&&te!==null?te=Et(te):(te=dt(l)?za:Yn.current,te=Do(p,te));var ue=l.getDerivedStateFromProps,le=typeof ue=="function"||typeof C.getSnapshotBeforeUpdate=="function";le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==h||q!==te)&&f1(p,C,h,te),da=!1;var pe=p.memoizedState;C.state=pe,Es(p,h,C,g),q=p.memoizedState,j!==h||pe!==q||ft.current||da?(typeof ue=="function"&&(k2(p,l,ue,h),q=p.memoizedState),(j=da||l1(p,l,j,h,pe,q,te))?(le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(p.flags|=4194308)):(typeof C.componentDidMount=="function"&&(p.flags|=4194308),p.memoizedProps=h,p.memoizedState=q),C.props=h,C.state=q,C.context=te,h=j):(typeof C.componentDidMount=="function"&&(p.flags|=4194308),h=!1)}else{C=p.stateNode,jb(o,p),j=p.memoizedProps,te=p.type===p.elementType?j:er(p.type,j),C.props=te,le=p.pendingProps,pe=C.context,q=l.contextType,typeof q=="object"&&q!==null?q=Et(q):(q=dt(l)?za:Yn.current,q=Do(p,q));var be=l.getDerivedStateFromProps;(ue=typeof be=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==le||pe!==q)&&f1(p,C,h,q),da=!1,pe=p.memoizedState,C.state=pe,Es(p,h,C,g);var Se=p.memoizedState;j!==le||pe!==Se||ft.current||da?(typeof be=="function"&&(k2(p,l,be,h),Se=p.memoizedState),(te=da||l1(p,l,te,h,pe,Se,q)||!1)?(ue||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(h,Se,q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(h,Se,q)),typeof C.componentDidUpdate=="function"&&(p.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(p.flags|=1024)):(typeof C.componentDidUpdate!="function"||j===o.memoizedProps&&pe===o.memoizedState||(p.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===o.memoizedProps&&pe===o.memoizedState||(p.flags|=1024),p.memoizedProps=h,p.memoizedState=Se),C.props=h,C.state=Se,C.context=q,h=te):(typeof C.componentDidUpdate!="function"||j===o.memoizedProps&&pe===o.memoizedState||(p.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===o.memoizedProps&&pe===o.memoizedState||(p.flags|=1024),h=!1)}return $2(o,p,l,h,x,g)}function $2(o,p,l,h,g,x){x1(o,p);var C=(p.flags&128)!==0;if(!h&&!C)return g&&Ab(p,l,!1),Rr(o,p,x);h=p.stateNode,jO.current=p;var j=C&&typeof l.getDerivedStateFromError!="function"?null:h.render();return p.flags|=1,o!==null&&C?(p.child=Fo(p,o.child,null,x),p.child=Fo(p,null,j,x)):tt(o,p,j,x),p.memoizedState=h.state,g&&Ab(p,l,!0),p.child}function w1(o){var p=o.stateNode;p.pendingContext?Sb(o,p.pendingContext,p.pendingContext!==p.context):p.context&&Sb(o,p.context,!1),P2(o,p.containerInfo)}function W1(o,p,l,h,g){return Lo(),v2(g),p.flags|=256,tt(o,p,l,h),p.child}var L2={dehydrated:null,treeContext:null,retryLane:0};function F2(o){return{baseLanes:o,cachePool:null,transitions:null}}function S1(o,p,l){var h=p.pendingProps,g=dn.current,x=!1,C=(p.flags&128)!==0,j;if((j=C)||(j=o!==null&&o.memoizedState===null?!1:(g&2)!==0),j?(x=!0,p.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),tn(dn,g&1),o===null)return h2(p),o=p.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((p.mode&1)===0?p.lanes=1:o.data==="$!"?p.lanes=8:p.lanes=1073741824,null):(C=h.children,o=h.fallback,x?(h=p.mode,x=p.child,C={mode:"hidden",children:C},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=r0(C,h,0,null),o=eo(o,h,l,null),x.return=p,o.return=p,x.sibling=o,p.child=x,p.child.memoizedState=F2(l),p.memoizedState=L2,o):q2(p,C));if(g=o.memoizedState,g!==null&&(j=g.dehydrated,j!==null))return $O(o,p,C,h,j,g,l);if(x){x=h.fallback,C=p.mode,g=o.child,j=g.sibling;var q={mode:"hidden",children:h.children};return(C&1)===0&&p.child!==g?(h=p.child,h.childLanes=0,h.pendingProps=q,p.deletions=null):(h=Ia(g,q),h.subtreeFlags=g.subtreeFlags&14680064),j!==null?x=Ia(j,x):(x=eo(x,C,l,null),x.flags|=2),x.return=p,h.return=p,h.sibling=x,p.child=h,h=x,x=p.child,C=o.child.memoizedState,C=C===null?F2(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=o.childLanes&~l,p.memoizedState=L2,h}return x=o.child,o=x.sibling,h=Ia(x,{mode:"visible",children:h.children}),(p.mode&1)===0&&(h.lanes=l),h.return=p,h.sibling=null,o!==null&&(l=p.deletions,l===null?(p.deletions=[o],p.flags|=16):l.push(o)),p.child=h,p.memoizedState=null,h}function q2(o,p){return p=r0({mode:"visible",children:p},o.mode,0,null),p.return=o,o.child=p}function zs(o,p,l,h){return h!==null&&v2(h),Fo(p,o.child,null,l),o=q2(p,p.pendingProps.children),o.flags|=2,p.memoizedState=null,o}function $O(o,p,l,h,g,x,C){if(l)return p.flags&256?(p.flags&=-257,h=T2(Error(t(422))),zs(o,p,C,h)):p.memoizedState!==null?(p.child=o.child,p.flags|=128,null):(x=h.fallback,g=p.mode,h=r0({mode:"visible",children:h.children},g,0,null),x=eo(x,g,C,null),x.flags|=2,h.return=p,x.return=p,h.sibling=x,p.child=h,(p.mode&1)!==0&&Fo(p,o.child,null,C),p.child.memoizedState=F2(C),p.memoizedState=L2,x);if((p.mode&1)===0)return zs(o,p,C,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var j=h.dgst;return h=j,x=Error(t(419)),h=T2(x,h,void 0),zs(o,p,C,h)}if(j=(C&o.childLanes)!==0,mt||j){if(h=Ln,h!==null){switch(C&-C){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|C))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,Cr(o,g),rr(h,o,g,-1))}return of(),h=T2(Error(t(421))),zs(o,p,C,h)}return g.data==="$?"?(p.flags|=128,p.child=o.child,p=JO.bind(null,o),g._reactRetry=p,null):(o=x.treeContext,xt=sa(g.nextSibling),Bt=p,cn=!0,Jt=null,o!==null&&(Rt[kt++]=Or,Rt[kt++]=Hr,Rt[kt++]=Ua,Or=o.id,Hr=o.overflow,Ua=p),p=q2(p,h.children),p.flags|=4096,p)}function M1(o,p,l){o.lanes|=p;var h=o.alternate;h!==null&&(h.lanes|=p),I2(o.return,p,l)}function z2(o,p,l,h,g){var x=o.memoizedState;x===null?o.memoizedState={isBackwards:p,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(x.isBackwards=p,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=l,x.tailMode=g)}function A1(o,p,l){var h=p.pendingProps,g=h.revealOrder,x=h.tail;if(tt(o,p,h.children,l),h=dn.current,(h&2)!==0)h=h&1|2,p.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=p.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&M1(o,l,p);else if(o.tag===19)M1(o,l,p);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===p)break e;for(;o.sibling===null;){if(o.return===null||o.return===p)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(tn(dn,h),(p.mode&1)===0)p.memoizedState=null;else switch(g){case"forwards":for(l=p.child,g=null;l!==null;)o=l.alternate,o!==null&&Ts(o)===null&&(g=l),l=l.sibling;l=g,l===null?(g=p.child,p.child=null):(g=l.sibling,l.sibling=null),z2(p,!1,g,l,x);break;case"backwards":for(l=null,g=p.child,p.child=null;g!==null;){if(o=g.alternate,o!==null&&Ts(o)===null){p.child=g;break}o=g.sibling,g.sibling=l,l=g,g=o}z2(p,!0,l,null,x);break;case"together":z2(p,!1,null,null,void 0);break;default:p.memoizedState=null}return p.child}function Us(o,p){(p.mode&1)===0&&o!==null&&(o.alternate=null,p.alternate=null,p.flags|=2)}function Rr(o,p,l){if(o!==null&&(p.dependencies=o.dependencies),Ya|=p.lanes,(l&p.childLanes)===0)return null;if(o!==null&&p.child!==o.child)throw Error(t(153));if(p.child!==null){for(o=p.child,l=Ia(o,o.pendingProps),p.child=l,l.return=p;o.sibling!==null;)o=o.sibling,l=l.sibling=Ia(o,o.pendingProps),l.return=p;l.sibling=null}return p.child}function LO(o,p,l){switch(p.tag){case 3:w1(p),Lo();break;case 5:Fb(p);break;case 1:dt(p.type)&&Ms(p);break;case 4:P2(p,p.stateNode.containerInfo);break;case 10:var h=p.type._context,g=p.memoizedProps.value;tn(Ns,h._currentValue),h._currentValue=g;break;case 13:if(h=p.memoizedState,h!==null)return h.dehydrated!==null?(tn(dn,dn.current&1),p.flags|=128,null):(l&p.child.childLanes)!==0?S1(o,p,l):(tn(dn,dn.current&1),o=Rr(o,p,l),o!==null?o.sibling:null);tn(dn,dn.current&1);break;case 19:if(h=(l&p.childLanes)!==0,(o.flags&128)!==0){if(h)return A1(o,p,l);p.flags|=128}if(g=p.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),tn(dn,dn.current),h)break;return null;case 22:case 23:return p.lanes=0,B1(o,p,l)}return Rr(o,p,l)}var _1,U2,O1,H1;_1=function(o,p){for(var l=p.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===p)break;for(;l.sibling===null;){if(l.return===null||l.return===p)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},U2=function(){},O1=function(o,p,l,h){var g=o.memoizedProps;if(g!==h){o=p.stateNode,Ka(mr.current);var x=null;switch(l){case"input":g=me(o,g),h=me(o,h),x=[];break;case"select":g=ne({},g,{value:void 0}),h=ne({},h,{value:void 0}),x=[];break;case"textarea":g=gn(o,g),h=gn(o,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=ws)}Wc(l,h);var C;l=null;for(te in g)if(!h.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var j=g[te];for(C in j)j.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?x||(x=[]):(x=x||[]).push(te,null));for(te in h){var q=h[te];if(j=g!=null?g[te]:void 0,h.hasOwnProperty(te)&&q!==j&&(q!=null||j!=null))if(te==="style")if(j){for(C in j)!j.hasOwnProperty(C)||q&&q.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in q)q.hasOwnProperty(C)&&j[C]!==q[C]&&(l||(l={}),l[C]=q[C])}else l||(x||(x=[]),x.push(te,l)),l=q;else te==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,j=j?j.__html:void 0,q!=null&&j!==q&&(x=x||[]).push(te,q)):te==="children"?typeof q!="string"&&typeof q!="number"||(x=x||[]).push(te,""+q):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(q!=null&&te==="onScroll"&&pn("scroll",o),x||j===q||(x=[])):(x=x||[]).push(te,q))}l&&(x=x||[]).push("style",l);var te=x;(p.updateQueue=te)&&(p.flags|=4)}},H1=function(o,p,l,h){l!==h&&(p.flags|=4)};function Np(o,p){if(!cn)switch(o.tailMode){case"hidden":p=o.tail;for(var l=null;p!==null;)p.alternate!==null&&(l=p),p=p.sibling;l===null?o.tail=null:l.sibling=null;break;case"collapsed":l=o.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?p||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Zn(o){var p=o.alternate!==null&&o.alternate.child===o.child,l=0,h=0;if(p)for(var g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=l,p}function FO(o,p,l){var h=p.pendingProps;switch(d2(p),p.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(p),null;case 1:return dt(p.type)&&Ss(),Zn(p),null;case 3:return h=p.stateNode,Uo(),un(ft),un(Yn),S2(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(Hs(p)?p.flags|=4:o===null||o.memoizedState.isDehydrated&&(p.flags&256)===0||(p.flags|=1024,Jt!==null&&(tf(Jt),Jt=null))),U2(o,p),Zn(p),null;case 5:w2(p);var g=Ka(Ap.current);if(l=p.type,o!==null&&p.stateNode!=null)O1(o,p,l,h,g),o.ref!==p.ref&&(p.flags|=512,p.flags|=2097152);else{if(!h){if(p.stateNode===null)throw Error(t(166));return Zn(p),null}if(o=Ka(mr.current),Hs(p)){h=p.stateNode,l=p.type;var x=p.memoizedProps;switch(h[dr]=p,h[Pp]=x,o=(p.mode&1)!==0,l){case"dialog":pn("cancel",h),pn("close",h);break;case"iframe":case"object":case"embed":pn("load",h);break;case"video":case"audio":for(g=0;g<Ip.length;g++)pn(Ip[g],h);break;case"source":pn("error",h);break;case"img":case"image":case"link":pn("error",h),pn("load",h);break;case"details":pn("toggle",h);break;case"input":ye(h,x),pn("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},pn("invalid",h);break;case"textarea":Ht(h,x),pn("invalid",h)}Wc(l,x),g=null;for(var C in x)if(x.hasOwnProperty(C)){var j=x[C];C==="children"?typeof j=="string"?h.textContent!==j&&(x.suppressHydrationWarning!==!0&&Ps(h.textContent,j,o),g=["children",j]):typeof j=="number"&&h.textContent!==""+j&&(x.suppressHydrationWarning!==!0&&Ps(h.textContent,j,o),g=["children",""+j]):a.hasOwnProperty(C)&&j!=null&&C==="onScroll"&&pn("scroll",h)}switch(l){case"input":ie(h),je(h,x,!0);break;case"textarea":ie(h),Qn(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=ws)}h=g,p.updateQueue=h,h!==null&&(p.flags|=4)}else{C=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=Pn(l)),o==="http://www.w3.org/1999/xhtml"?l==="script"?(o=C.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=C.createElement(l,{is:h.is}):(o=C.createElement(l),l==="select"&&(C=o,h.multiple?C.multiple=!0:h.size&&(C.size=h.size))):o=C.createElementNS(o,l),o[dr]=p,o[Pp]=h,_1(o,p,!1,!1),p.stateNode=o;e:{switch(C=Sc(l,h),l){case"dialog":pn("cancel",o),pn("close",o),g=h;break;case"iframe":case"object":case"embed":pn("load",o),g=h;break;case"video":case"audio":for(g=0;g<Ip.length;g++)pn(Ip[g],o);g=h;break;case"source":pn("error",o),g=h;break;case"img":case"image":case"link":pn("error",o),pn("load",o),g=h;break;case"details":pn("toggle",o),g=h;break;case"input":ye(o,h),g=me(o,h),pn("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=ne({},h,{value:void 0}),pn("invalid",o);break;case"textarea":Ht(o,h),g=gn(o,h),pn("invalid",o);break;default:g=h}Wc(l,g),j=g;for(x in j)if(j.hasOwnProperty(x)){var q=j[x];x==="style"?tp(o,q):x==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&So(o,q)):x==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&na(o,q):typeof q=="number"&&na(o,""+q):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?q!=null&&x==="onScroll"&&pn("scroll",o):q!=null&&M(o,x,q,C))}switch(l){case"input":ie(o),je(o,h,!1);break;case"textarea":ie(o),Qn(o);break;case"option":h.value!=null&&o.setAttribute("value",""+de(h.value));break;case"select":o.multiple=!!h.multiple,x=h.value,x!=null?xn(o,!!h.multiple,x,!1):h.defaultValue!=null&&xn(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=ws)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(p.flags|=4)}p.ref!==null&&(p.flags|=512,p.flags|=2097152)}return Zn(p),null;case 6:if(o&&p.stateNode!=null)H1(o,p,o.memoizedProps,h);else{if(typeof h!="string"&&p.stateNode===null)throw Error(t(166));if(l=Ka(Ap.current),Ka(mr.current),Hs(p)){if(h=p.stateNode,l=p.memoizedProps,h[dr]=p,(x=h.nodeValue!==l)&&(o=Bt,o!==null))switch(o.tag){case 3:Ps(h.nodeValue,l,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&Ps(h.nodeValue,l,(o.mode&1)!==0)}x&&(p.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[dr]=p,p.stateNode=h}return Zn(p),null;case 13:if(un(dn),h=p.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(cn&&xt!==null&&(p.mode&1)!==0&&(p.flags&128)===0)Rb(),Lo(),p.flags|=98560,x=!1;else if(x=Hs(p),h!==null&&h.dehydrated!==null){if(o===null){if(!x)throw Error(t(318));if(x=p.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[dr]=p}else Lo(),(p.flags&128)===0&&(p.memoizedState=null),p.flags|=4;Zn(p),x=!1}else Jt!==null&&(tf(Jt),Jt=null),x=!0;if(!x)return p.flags&65536?p:null}return(p.flags&128)!==0?(p.lanes=l,p):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(p.child.flags|=8192,(p.mode&1)!==0&&(o===null||(dn.current&1)!==0?Rn===0&&(Rn=3):of())),p.updateQueue!==null&&(p.flags|=4),Zn(p),null);case 4:return Uo(),U2(o,p),o===null&&Bp(p.stateNode.containerInfo),Zn(p),null;case 10:return b2(p.type._context),Zn(p),null;case 17:return dt(p.type)&&Ss(),Zn(p),null;case 19:if(un(dn),x=p.memoizedState,x===null)return Zn(p),null;if(h=(p.flags&128)!==0,C=x.rendering,C===null)if(h)Np(x,!1);else{if(Rn!==0||o!==null&&(o.flags&128)!==0)for(o=p.child;o!==null;){if(C=Ts(o),C!==null){for(p.flags|=128,Np(x,!1),h=C.updateQueue,h!==null&&(p.updateQueue=h,p.flags|=4),p.subtreeFlags=0,h=l,l=p.child;l!==null;)x=l,o=h,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=o,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,o=C.dependencies,x.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),l=l.sibling;return tn(dn,dn.current&1|2),p.child}o=o.sibling}x.tail!==null&&wn()>Qo&&(p.flags|=128,h=!0,Np(x,!1),p.lanes=4194304)}else{if(!h)if(o=Ts(C),o!==null){if(p.flags|=128,h=!0,l=o.updateQueue,l!==null&&(p.updateQueue=l,p.flags|=4),Np(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!cn)return Zn(p),null}else 2*wn()-x.renderingStartTime>Qo&&l!==1073741824&&(p.flags|=128,h=!0,Np(x,!1),p.lanes=4194304);x.isBackwards?(C.sibling=p.child,p.child=C):(l=x.last,l!==null?l.sibling=C:p.child=C,x.last=C)}return x.tail!==null?(p=x.tail,x.rendering=p,x.tail=p.sibling,x.renderingStartTime=wn(),p.sibling=null,l=dn.current,tn(dn,h?l&1|2:l&1),p):(Zn(p),null);case 22:case 23:return af(),h=p.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(p.flags|=8192),h&&(p.mode&1)!==0?(Pt&1073741824)!==0&&(Zn(p),p.subtreeFlags&6&&(p.flags|=8192)):Zn(p),null;case 24:return null;case 25:return null}throw Error(t(156,p.tag))}function qO(o,p){switch(d2(p),p.tag){case 1:return dt(p.type)&&Ss(),o=p.flags,o&65536?(p.flags=o&-65537|128,p):null;case 3:return Uo(),un(ft),un(Yn),S2(),o=p.flags,(o&65536)!==0&&(o&128)===0?(p.flags=o&-65537|128,p):null;case 5:return w2(p),null;case 13:if(un(dn),o=p.memoizedState,o!==null&&o.dehydrated!==null){if(p.alternate===null)throw Error(t(340));Lo()}return o=p.flags,o&65536?(p.flags=o&-65537|128,p):null;case 19:return un(dn),null;case 4:return Uo(),null;case 10:return b2(p.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Vs=!1,Jn=!1,zO=typeof WeakSet=="function"?WeakSet:Set,we=null;function Go(o,p){var l=o.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){bn(o,p,h)}else l.current=null}function V2(o,p,l){try{l()}catch(h){bn(o,p,h)}}var C1=!1;function UO(o,p){if(a2=fs,o=lb(),Yc(o)){if("selectionStart"in o)var l={start:o.selectionStart,end:o.selectionEnd};else e:{l=(l=o.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,j=-1,q=-1,te=0,ue=0,le=o,pe=null;n:for(;;){for(var be;le!==l||g!==0&&le.nodeType!==3||(j=C+g),le!==x||h!==0&&le.nodeType!==3||(q=C+h),le.nodeType===3&&(C+=le.nodeValue.length),(be=le.firstChild)!==null;)pe=le,le=be;for(;;){if(le===o)break n;if(pe===l&&++te===g&&(j=C),pe===x&&++ue===h&&(q=C),(be=le.nextSibling)!==null)break;le=pe,pe=le.parentNode}le=be}l=j===-1||q===-1?null:{start:j,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(o2={focusedElem:o,selectionRange:l},fs=!1,we=p;we!==null;)if(p=we,o=p.child,(p.subtreeFlags&1028)!==0&&o!==null)o.return=p,we=o;else for(;we!==null;){p=we;try{var Se=p.alternate;if((p.flags&1024)!==0)switch(p.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var _e=Se.memoizedProps,Wn=Se.memoizedState,X=p.stateNode,z=X.getSnapshotBeforeUpdate(p.elementType===p.type?_e:er(p.type,_e),Wn);X.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var ee=p.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(fe){bn(p,p.return,fe)}if(o=p.sibling,o!==null){o.return=p.return,we=o;break}we=p.return}return Se=C1,C1=!1,Se}function Rp(o,p,l){var h=p.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var x=g.destroy;g.destroy=void 0,x!==void 0&&V2(p,l,x)}g=g.next}while(g!==h)}}function Gs(o,p){if(p=p.updateQueue,p=p!==null?p.lastEffect:null,p!==null){var l=p=p.next;do{if((l.tag&o)===o){var h=l.create;l.destroy=h()}l=l.next}while(l!==p)}}function G2(o){var p=o.ref;if(p!==null){var l=o.stateNode;switch(o.tag){case 5:o=l;break;default:o=l}typeof p=="function"?p(o):p.current=o}}function N1(o){var p=o.alternate;p!==null&&(o.alternate=null,N1(p)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(p=o.stateNode,p!==null&&(delete p[dr],delete p[Pp],delete p[s2],delete p[MO],delete p[AO])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function R1(o){return o.tag===5||o.tag===3||o.tag===4}function k1(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||R1(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function K2(o,p,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,p?l.nodeType===8?l.parentNode.insertBefore(o,p):l.insertBefore(o,p):(l.nodeType===8?(p=l.parentNode,p.insertBefore(o,l)):(p=l,p.appendChild(o)),l=l._reactRootContainer,l!=null||p.onclick!==null||(p.onclick=ws));else if(h!==4&&(o=o.child,o!==null))for(K2(o,p,l),o=o.sibling;o!==null;)K2(o,p,l),o=o.sibling}function Q2(o,p,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,p?l.insertBefore(o,p):l.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Q2(o,p,l),o=o.sibling;o!==null;)Q2(o,p,l),o=o.sibling}var Vn=null,nr=!1;function ha(o,p,l){for(l=l.child;l!==null;)E1(o,p,l),l=l.sibling}function E1(o,p,l){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(is,l)}catch{}switch(l.tag){case 5:Jn||Go(l,p);case 6:var h=Vn,g=nr;Vn=null,ha(o,p,l),Vn=h,nr=g,Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?u2(o.parentNode,l):o.nodeType===1&&u2(o,l),fp(o)):u2(Vn,l.stateNode));break;case 4:h=Vn,g=nr,Vn=l.stateNode.containerInfo,nr=!0,ha(o,p,l),Vn=h,nr=g;break;case 0:case 11:case 14:case 15:if(!Jn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&V2(l,p,C),g=g.next}while(g!==h)}ha(o,p,l);break;case 1:if(!Jn&&(Go(l,p),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(j){bn(l,p,j)}ha(o,p,l);break;case 21:ha(o,p,l);break;case 22:l.mode&1?(Jn=(h=Jn)||l.memoizedState!==null,ha(o,p,l),Jn=h):ha(o,p,l);break;default:ha(o,p,l)}}function T1(o){var p=o.updateQueue;if(p!==null){o.updateQueue=null;var l=o.stateNode;l===null&&(l=o.stateNode=new zO),p.forEach(function(h){var g=eH.bind(null,o,h);l.has(h)||(l.add(h),h.then(g,g))})}}function tr(o,p){var l=p.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var x=o,C=p,j=C;e:for(;j!==null;){switch(j.tag){case 5:Vn=j.stateNode,nr=!1;break e;case 3:Vn=j.stateNode.containerInfo,nr=!0;break e;case 4:Vn=j.stateNode.containerInfo,nr=!0;break e}j=j.return}if(Vn===null)throw Error(t(160));E1(x,C,g),Vn=null,nr=!1;var q=g.alternate;q!==null&&(q.return=null),g.return=null}catch(te){bn(g,p,te)}}if(p.subtreeFlags&12854)for(p=p.child;p!==null;)D1(p,o),p=p.sibling}function D1(o,p){var l=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(p,o),vr(o),h&4){try{Rp(3,o,o.return),Gs(3,o)}catch(_e){bn(o,o.return,_e)}try{Rp(5,o,o.return)}catch(_e){bn(o,o.return,_e)}}break;case 1:tr(p,o),vr(o),h&512&&l!==null&&Go(l,l.return);break;case 5:if(tr(p,o),vr(o),h&512&&l!==null&&Go(l,l.return),o.flags&32){var g=o.stateNode;try{na(g,"")}catch(_e){bn(o,o.return,_e)}}if(h&4&&(g=o.stateNode,g!=null)){var x=o.memoizedProps,C=l!==null?l.memoizedProps:x,j=o.type,q=o.updateQueue;if(o.updateQueue=null,q!==null)try{j==="input"&&x.type==="radio"&&x.name!=null&&ve(g,x),Sc(j,C);var te=Sc(j,x);for(C=0;C<q.length;C+=2){var ue=q[C],le=q[C+1];ue==="style"?tp(g,le):ue==="dangerouslySetInnerHTML"?So(g,le):ue==="children"?na(g,le):M(g,ue,le,te)}switch(j){case"input":Pe(g,x);break;case"textarea":yn(g,x);break;case"select":var pe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var be=x.value;be!=null?xn(g,!!x.multiple,be,!1):pe!==!!x.multiple&&(x.defaultValue!=null?xn(g,!!x.multiple,x.defaultValue,!0):xn(g,!!x.multiple,x.multiple?[]:"",!1))}g[Pp]=x}catch(_e){bn(o,o.return,_e)}}break;case 6:if(tr(p,o),vr(o),h&4){if(o.stateNode===null)throw Error(t(162));g=o.stateNode,x=o.memoizedProps;try{g.nodeValue=x}catch(_e){bn(o,o.return,_e)}}break;case 3:if(tr(p,o),vr(o),h&4&&l!==null&&l.memoizedState.isDehydrated)try{fp(p.containerInfo)}catch(_e){bn(o,o.return,_e)}break;case 4:tr(p,o),vr(o);break;case 13:tr(p,o),vr(o),g=o.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Z2=wn())),h&4&&T1(o);break;case 22:if(ue=l!==null&&l.memoizedState!==null,o.mode&1?(Jn=(te=Jn)||ue,tr(p,o),Jn=te):tr(p,o),vr(o),h&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ue&&(o.mode&1)!==0)for(we=o,ue=o.child;ue!==null;){for(le=we=ue;we!==null;){switch(pe=we,be=pe.child,pe.tag){case 0:case 11:case 14:case 15:Rp(4,pe,pe.return);break;case 1:Go(pe,pe.return);var Se=pe.stateNode;if(typeof Se.componentWillUnmount=="function"){h=pe,l=pe.return;try{p=h,Se.props=p.memoizedProps,Se.state=p.memoizedState,Se.componentWillUnmount()}catch(_e){bn(h,l,_e)}}break;case 5:Go(pe,pe.return);break;case 22:if(pe.memoizedState!==null){L1(le);continue}}be!==null?(be.return=pe,we=be):L1(le)}ue=ue.sibling}e:for(ue=null,le=o;;){if(le.tag===5){if(ue===null){ue=le;try{g=le.stateNode,te?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(j=le.stateNode,q=le.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null,j.style.display=ta("display",C))}catch(_e){bn(o,o.return,_e)}}}else if(le.tag===6){if(ue===null)try{le.stateNode.nodeValue=te?"":le.memoizedProps}catch(_e){bn(o,o.return,_e)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===o)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===o)break e;for(;le.sibling===null;){if(le.return===null||le.return===o)break e;ue===le&&(ue=null),le=le.return}ue===le&&(ue=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:tr(p,o),vr(o),h&4&&T1(o);break;case 21:break;default:tr(p,o),vr(o)}}function vr(o){var p=o.flags;if(p&2){try{e:{for(var l=o.return;l!==null;){if(R1(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(na(g,""),h.flags&=-33);var x=k1(o);Q2(o,x,g);break;case 3:case 4:var C=h.stateNode.containerInfo,j=k1(o);K2(o,j,C);break;default:throw Error(t(161))}}catch(q){bn(o,o.return,q)}o.flags&=-3}p&4096&&(o.flags&=-4097)}function VO(o,p,l){we=o,j1(o)}function j1(o,p,l){for(var h=(o.mode&1)!==0;we!==null;){var g=we,x=g.child;if(g.tag===22&&h){var C=g.memoizedState!==null||Vs;if(!C){var j=g.alternate,q=j!==null&&j.memoizedState!==null||Jn;j=Vs;var te=Jn;if(Vs=C,(Jn=q)&&!te)for(we=g;we!==null;)C=we,q=C.child,C.tag===22&&C.memoizedState!==null?F1(g):q!==null?(q.return=C,we=q):F1(g);for(;x!==null;)we=x,j1(x),x=x.sibling;we=g,Vs=j,Jn=te}$1(o)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,we=x):$1(o)}}function $1(o){for(;we!==null;){var p=we;if((p.flags&8772)!==0){var l=p.alternate;try{if((p.flags&8772)!==0)switch(p.tag){case 0:case 11:case 15:Jn||Gs(5,p);break;case 1:var h=p.stateNode;if(p.flags&4&&!Jn)if(l===null)h.componentDidMount();else{var g=p.elementType===p.type?l.memoizedProps:er(p.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=p.updateQueue;x!==null&&Lb(p,x,h);break;case 3:var C=p.updateQueue;if(C!==null){if(l=null,p.child!==null)switch(p.child.tag){case 5:l=p.child.stateNode;break;case 1:l=p.child.stateNode}Lb(p,C,l)}break;case 5:var j=p.stateNode;if(l===null&&p.flags&4){l=j;var q=p.memoizedProps;switch(p.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(p.memoizedState===null){var te=p.alternate;if(te!==null){var ue=te.memoizedState;if(ue!==null){var le=ue.dehydrated;le!==null&&fp(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||p.flags&512&&G2(p)}catch(pe){bn(p,p.return,pe)}}if(p===o){we=null;break}if(l=p.sibling,l!==null){l.return=p.return,we=l;break}we=p.return}}function L1(o){for(;we!==null;){var p=we;if(p===o){we=null;break}var l=p.sibling;if(l!==null){l.return=p.return,we=l;break}we=p.return}}function F1(o){for(;we!==null;){var p=we;try{switch(p.tag){case 0:case 11:case 15:var l=p.return;try{Gs(4,p)}catch(q){bn(p,l,q)}break;case 1:var h=p.stateNode;if(typeof h.componentDidMount=="function"){var g=p.return;try{h.componentDidMount()}catch(q){bn(p,g,q)}}var x=p.return;try{G2(p)}catch(q){bn(p,x,q)}break;case 5:var C=p.return;try{G2(p)}catch(q){bn(p,C,q)}}}catch(q){bn(p,p.return,q)}if(p===o){we=null;break}var j=p.sibling;if(j!==null){j.return=p.return,we=j;break}we=p.return}}var GO=Math.ceil,Ks=O.ReactCurrentDispatcher,Y2=O.ReactCurrentOwner,Dt=O.ReactCurrentBatchConfig,ze=0,Ln=null,_n=null,Gn=0,Pt=0,Ko=la(0),Rn=0,kp=null,Ya=0,Qs=0,X2=0,Ep=null,ht=null,Z2=0,Qo=1/0,kr=null,Ys=!1,J2=null,va=null,Xs=!1,ga=null,Zs=0,Tp=0,ef=null,Js=-1,e0=0;function rt(){return(ze&6)!==0?wn():Js!==-1?Js:Js=wn()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Gn!==0?Gn&-Gn:OO.transition!==null?(e0===0&&(e0=ky()),e0):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:zy(o.type)),o)}function rr(o,p,l,h){if(50<Tp)throw Tp=0,ef=null,Error(t(185));pp(o,l,h),((ze&2)===0||o!==Ln)&&(o===Ln&&((ze&2)===0&&(Qs|=l),Rn===4&&ba(o,Gn)),vt(o,h),l===1&&ze===0&&(p.mode&1)===0&&(Qo=wn()+500,As&&fa()))}function vt(o,p){var l=o.callbackNode;O_(o,p);var h=ss(o,o===Ln?Gn:0);if(h===0)l!==null&&Cy(l),o.callbackNode=null,o.callbackPriority=0;else if(p=h&-h,o.callbackPriority!==p){if(l!=null&&Cy(l),p===1)o.tag===0?_O(z1.bind(null,o)):_b(z1.bind(null,o)),WO(function(){(ze&6)===0&&fa()}),l=null;else{switch(Ey(h)){case 1:l=Nc;break;case 4:l=Ny;break;case 16:l=os;break;case 536870912:l=Ry;break;default:l=os}l=Z1(l,q1.bind(null,o))}o.callbackPriority=p,o.callbackNode=l}}function q1(o,p){if(Js=-1,e0=0,(ze&6)!==0)throw Error(t(327));var l=o.callbackNode;if(Yo()&&o.callbackNode!==l)return null;var h=ss(o,o===Ln?Gn:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||p)p=n0(o,h);else{p=h;var g=ze;ze|=2;var x=V1();(Ln!==o||Gn!==p)&&(kr=null,Qo=wn()+500,Za(o,p));do try{YO();break}catch(j){U1(o,j)}while(!0);y2(),Ks.current=x,ze=g,_n!==null?p=0:(Ln=null,Gn=0,p=Rn)}if(p!==0){if(p===2&&(g=Rc(o),g!==0&&(h=g,p=nf(o,g))),p===1)throw l=kp,Za(o,0),ba(o,h),vt(o,wn()),l;if(p===6)ba(o,h);else{if(g=o.current.alternate,(h&30)===0&&!KO(g)&&(p=n0(o,h),p===2&&(x=Rc(o),x!==0&&(h=x,p=nf(o,x))),p===1))throw l=kp,Za(o,0),ba(o,h),vt(o,wn()),l;switch(o.finishedWork=g,o.finishedLanes=h,p){case 0:case 1:throw Error(t(345));case 2:Ja(o,ht,kr);break;case 3:if(ba(o,h),(h&130023424)===h&&(p=Z2+500-wn(),10<p)){if(ss(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){rt(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=p2(Ja.bind(null,o,ht,kr),p);break}Ja(o,ht,kr);break;case 4:if(ba(o,h),(h&4194240)===h)break;for(p=o.eventTimes,g=-1;0<h;){var C=31-Xt(h);x=1<<C,C=p[C],C>g&&(g=C),h&=~x}if(h=g,h=wn()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*GO(h/1960))-h,10<h){o.timeoutHandle=p2(Ja.bind(null,o,ht,kr),h);break}Ja(o,ht,kr);break;case 5:Ja(o,ht,kr);break;default:throw Error(t(329))}}}return vt(o,wn()),o.callbackNode===l?q1.bind(null,o):null}function nf(o,p){var l=Ep;return o.current.memoizedState.isDehydrated&&(Za(o,p).flags|=256),o=n0(o,p),o!==2&&(p=ht,ht=l,p!==null&&tf(p)),o}function tf(o){ht===null?ht=o:ht.push.apply(ht,o)}function KO(o){for(var p=o;;){if(p.flags&16384){var l=p.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],x=g.getSnapshot;g=g.value;try{if(!Zt(x(),g))return!1}catch{return!1}}}if(l=p.child,p.subtreeFlags&16384&&l!==null)l.return=p,p=l;else{if(p===o)break;for(;p.sibling===null;){if(p.return===null||p.return===o)return!0;p=p.return}p.sibling.return=p.return,p=p.sibling}}return!0}function ba(o,p){for(p&=~X2,p&=~Qs,o.suspendedLanes|=p,o.pingedLanes&=~p,o=o.expirationTimes;0<p;){var l=31-Xt(p),h=1<<l;o[l]=-1,p&=~h}}function z1(o){if((ze&6)!==0)throw Error(t(327));Yo();var p=ss(o,0);if((p&1)===0)return vt(o,wn()),null;var l=n0(o,p);if(o.tag!==0&&l===2){var h=Rc(o);h!==0&&(p=h,l=nf(o,h))}if(l===1)throw l=kp,Za(o,0),ba(o,p),vt(o,wn()),l;if(l===6)throw Error(t(345));return o.finishedWork=o.current.alternate,o.finishedLanes=p,Ja(o,ht,kr),vt(o,wn()),null}function rf(o,p){var l=ze;ze|=1;try{return o(p)}finally{ze=l,ze===0&&(Qo=wn()+500,As&&fa())}}function Xa(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Yo();var p=ze;ze|=1;var l=Dt.transition,h=Ze;try{if(Dt.transition=null,Ze=1,o)return o()}finally{Ze=h,Dt.transition=l,ze=p,(ze&6)===0&&fa()}}function af(){Pt=Ko.current,un(Ko)}function Za(o,p){o.finishedWork=null,o.finishedLanes=0;var l=o.timeoutHandle;if(l!==-1&&(o.timeoutHandle=-1,wO(l)),_n!==null)for(l=_n.return;l!==null;){var h=l;switch(d2(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ss();break;case 3:Uo(),un(ft),un(Yn),S2();break;case 5:w2(h);break;case 4:Uo();break;case 13:un(dn);break;case 19:un(dn);break;case 10:b2(h.type._context);break;case 22:case 23:af()}l=l.return}if(Ln=o,_n=o=Ia(o.current,null),Gn=Pt=p,Rn=0,kp=null,X2=Qs=Ya=0,ht=Ep=null,Ga!==null){for(p=0;p<Ga.length;p++)if(l=Ga[p],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,x=l.pending;if(x!==null){var C=x.next;x.next=g,h.next=C}l.pending=h}Ga=null}return o}function U1(o,p){do{var l=_n;try{if(y2(),Ds.current=Fs,js){for(var h=mn.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}js=!1}if(Qa=0,$n=Nn=mn=null,_p=!1,Op=0,Y2.current=null,l===null||l.return===null){Rn=1,kp=p,_n=null;break}e:{var x=o,C=l.return,j=l,q=p;if(p=Gn,j.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var te=q,ue=j,le=ue.tag;if((ue.mode&1)===0&&(le===0||le===11||le===15)){var pe=ue.alternate;pe?(ue.updateQueue=pe.updateQueue,ue.memoizedState=pe.memoizedState,ue.lanes=pe.lanes):(ue.updateQueue=null,ue.memoizedState=null)}var be=v1(C);if(be!==null){be.flags&=-257,g1(be,C,j,x,p),be.mode&1&&h1(x,te,p),p=be,q=te;var Se=p.updateQueue;if(Se===null){var _e=new Set;_e.add(q),p.updateQueue=_e}else Se.add(q);break e}else{if((p&1)===0){h1(x,te,p),of();break e}q=Error(t(426))}}else if(cn&&j.mode&1){var Wn=v1(C);if(Wn!==null){(Wn.flags&65536)===0&&(Wn.flags|=256),g1(Wn,C,j,x,p),v2(Vo(q,j));break e}}x=q=Vo(q,j),Rn!==4&&(Rn=2),Ep===null?Ep=[x]:Ep.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,p&=-p,x.lanes|=p;var X=d1(x,q,p);$b(x,X);break e;case 1:j=q;var z=x.type,ee=x.stateNode;if((x.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){x.flags|=65536,p&=-p,x.lanes|=p;var fe=m1(x,j,p);$b(x,fe);break e}}x=x.return}while(x!==null)}K1(l)}catch(He){p=He,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function V1(){var o=Ks.current;return Ks.current=Fs,o===null?Fs:o}function of(){(Rn===0||Rn===3||Rn===2)&&(Rn=4),Ln===null||(Ya&268435455)===0&&(Qs&268435455)===0||ba(Ln,Gn)}function n0(o,p){var l=ze;ze|=2;var h=V1();(Ln!==o||Gn!==p)&&(kr=null,Za(o,p));do try{QO();break}catch(g){U1(o,g)}while(!0);if(y2(),ze=l,Ks.current=h,_n!==null)throw Error(t(261));return Ln=null,Gn=0,Rn}function QO(){for(;_n!==null;)G1(_n)}function YO(){for(;_n!==null&&!B_();)G1(_n)}function G1(o){var p=X1(o.alternate,o,Pt);o.memoizedProps=o.pendingProps,p===null?K1(o):_n=p,Y2.current=null}function K1(o){var p=o;do{var l=p.alternate;if(o=p.return,(p.flags&32768)===0){if(l=FO(l,p,Pt),l!==null){_n=l;return}}else{if(l=qO(l,p),l!==null){l.flags&=32767,_n=l;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Rn=6,_n=null;return}}if(p=p.sibling,p!==null){_n=p;return}_n=p=o}while(p!==null);Rn===0&&(Rn=5)}function Ja(o,p,l){var h=Ze,g=Dt.transition;try{Dt.transition=null,Ze=1,XO(o,p,l,h)}finally{Dt.transition=g,Ze=h}return null}function XO(o,p,l,h){do Yo();while(ga!==null);if((ze&6)!==0)throw Error(t(327));l=o.finishedWork;var g=o.finishedLanes;if(l===null)return null;if(o.finishedWork=null,o.finishedLanes=0,l===o.current)throw Error(t(177));o.callbackNode=null,o.callbackPriority=0;var x=l.lanes|l.childLanes;if(H_(o,x),o===Ln&&(_n=Ln=null,Gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xs||(Xs=!0,Z1(os,function(){return Yo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Dt.transition,Dt.transition=null;var C=Ze;Ze=1;var j=ze;ze|=4,Y2.current=null,UO(o,l),D1(l,o),gO(o2),fs=!!a2,o2=a2=null,o.current=l,VO(l),x_(),ze=j,Ze=C,Dt.transition=x}else o.current=l;if(Xs&&(Xs=!1,ga=o,Zs=g),x=o.pendingLanes,x===0&&(va=null),W_(l.stateNode),vt(o,wn()),p!==null)for(h=o.onRecoverableError,l=0;l<p.length;l++)g=p[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(Ys)throw Ys=!1,o=J2,J2=null,o;return(Zs&1)!==0&&o.tag!==0&&Yo(),x=o.pendingLanes,(x&1)!==0?o===ef?Tp++:(Tp=0,ef=o):Tp=0,fa(),null}function Yo(){if(ga!==null){var o=Ey(Zs),p=Dt.transition,l=Ze;try{if(Dt.transition=null,Ze=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Zs=0,(ze&6)!==0)throw Error(t(331));var g=ze;for(ze|=4,we=o.current;we!==null;){var x=we,C=x.child;if((we.flags&16)!==0){var j=x.deletions;if(j!==null){for(var q=0;q<j.length;q++){var te=j[q];for(we=te;we!==null;){var ue=we;switch(ue.tag){case 0:case 11:case 15:Rp(8,ue,x)}var le=ue.child;if(le!==null)le.return=ue,we=le;else for(;we!==null;){ue=we;var pe=ue.sibling,be=ue.return;if(N1(ue),ue===te){we=null;break}if(pe!==null){pe.return=be,we=pe;break}we=be}}}var Se=x.alternate;if(Se!==null){var _e=Se.child;if(_e!==null){Se.child=null;do{var Wn=_e.sibling;_e.sibling=null,_e=Wn}while(_e!==null)}}we=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,we=C;else e:for(;we!==null;){if(x=we,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Rp(9,x,x.return)}var X=x.sibling;if(X!==null){X.return=x.return,we=X;break e}we=x.return}}var z=o.current;for(we=z;we!==null;){C=we;var ee=C.child;if((C.subtreeFlags&2064)!==0&&ee!==null)ee.return=C,we=ee;else e:for(C=z;we!==null;){if(j=we,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:Gs(9,j)}}catch(He){bn(j,j.return,He)}if(j===C){we=null;break e}var fe=j.sibling;if(fe!==null){fe.return=j.return,we=fe;break e}we=j.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(is,o)}catch{}h=!0}return h}finally{Ze=l,Dt.transition=p}}return!1}function Q1(o,p,l){p=Vo(l,p),p=d1(o,p,1),o=ma(o,p,1),p=rt(),o!==null&&(pp(o,1,p),vt(o,p))}function bn(o,p,l){if(o.tag===3)Q1(o,o,l);else for(;p!==null;){if(p.tag===3){Q1(p,o,l);break}else if(p.tag===1){var h=p.stateNode;if(typeof p.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Vo(l,o),o=m1(p,o,1),p=ma(p,o,1),o=rt(),p!==null&&(pp(p,1,o),vt(p,o));break}}p=p.return}}function ZO(o,p,l){var h=o.pingCache;h!==null&&h.delete(p),p=rt(),o.pingedLanes|=o.suspendedLanes&l,Ln===o&&(Gn&l)===l&&(Rn===4||Rn===3&&(Gn&130023424)===Gn&&500>wn()-Z2?Za(o,0):X2|=l),vt(o,p)}function Y1(o,p){p===0&&((o.mode&1)===0?p=1:(p=us,us<<=1,(us&130023424)===0&&(us=4194304)));var l=rt();o=Cr(o,p),o!==null&&(pp(o,p,l),vt(o,l))}function JO(o){var p=o.memoizedState,l=0;p!==null&&(l=p.retryLane),Y1(o,l)}function eH(o,p){var l=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(p),Y1(o,l)}var X1;X1=function(o,p,l){if(o!==null)if(o.memoizedProps!==p.pendingProps||ft.current)mt=!0;else{if((o.lanes&l)===0&&(p.flags&128)===0)return mt=!1,LO(o,p,l);mt=(o.flags&131072)!==0}else mt=!1,cn&&(p.flags&1048576)!==0&&Ob(p,Os,p.index);switch(p.lanes=0,p.tag){case 2:var h=p.type;Us(o,p),o=p.pendingProps;var g=Do(p,Yn.current);zo(p,l),g=_2(null,p,h,o,g,l);var x=O2();return p.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(p.tag=1,p.memoizedState=null,p.updateQueue=null,dt(h)?(x=!0,Ms(p)):x=!1,p.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,x2(p),g.updater=qs,p.stateNode=g,g._reactInternals=p,E2(p,h,o,l),p=$2(null,p,h,!0,x,l)):(p.tag=0,cn&&x&&f2(p),tt(null,p,g,l),p=p.child),p;case 16:h=p.elementType;e:{switch(Us(o,p),o=p.pendingProps,g=h._init,h=g(h._payload),p.type=h,g=p.tag=tH(h),o=er(h,o),g){case 0:p=j2(null,p,h,o,l);break e;case 1:p=P1(null,p,h,o,l);break e;case 11:p=y1(null,p,h,o,l);break e;case 14:p=b1(null,p,h,er(h.type,o),l);break e}throw Error(t(306,h,""))}return p;case 0:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:er(h,g),j2(o,p,h,g,l);case 1:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:er(h,g),P1(o,p,h,g,l);case 3:e:{if(w1(p),o===null)throw Error(t(387));h=p.pendingProps,x=p.memoizedState,g=x.element,jb(o,p),Es(p,h,null,l);var C=p.memoizedState;if(h=C.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},p.updateQueue.baseState=x,p.memoizedState=x,p.flags&256){g=Vo(Error(t(423)),p),p=W1(o,p,h,l,g);break e}else if(h!==g){g=Vo(Error(t(424)),p),p=W1(o,p,h,l,g);break e}else for(xt=sa(p.stateNode.containerInfo.firstChild),Bt=p,cn=!0,Jt=null,l=Tb(p,null,h,l),p.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Lo(),h===g){p=Rr(o,p,l);break e}tt(o,p,h,l)}p=p.child}return p;case 5:return Fb(p),o===null&&h2(p),h=p.type,g=p.pendingProps,x=o!==null?o.memoizedProps:null,C=g.children,i2(h,g)?C=null:x!==null&&i2(h,x)&&(p.flags|=32),x1(o,p),tt(o,p,C,l),p.child;case 6:return o===null&&h2(p),null;case 13:return S1(o,p,l);case 4:return P2(p,p.stateNode.containerInfo),h=p.pendingProps,o===null?p.child=Fo(p,null,h,l):tt(o,p,h,l),p.child;case 11:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:er(h,g),y1(o,p,h,g,l);case 7:return tt(o,p,p.pendingProps,l),p.child;case 8:return tt(o,p,p.pendingProps.children,l),p.child;case 12:return tt(o,p,p.pendingProps.children,l),p.child;case 10:e:{if(h=p.type._context,g=p.pendingProps,x=p.memoizedProps,C=g.value,tn(Ns,h._currentValue),h._currentValue=C,x!==null)if(Zt(x.value,C)){if(x.children===g.children&&!ft.current){p=Rr(o,p,l);break e}}else for(x=p.child,x!==null&&(x.return=p);x!==null;){var j=x.dependencies;if(j!==null){C=x.child;for(var q=j.firstContext;q!==null;){if(q.context===h){if(x.tag===1){q=Nr(-1,l&-l),q.tag=2;var te=x.updateQueue;if(te!==null){te=te.shared;var ue=te.pending;ue===null?q.next=q:(q.next=ue.next,ue.next=q),te.pending=q}}x.lanes|=l,q=x.alternate,q!==null&&(q.lanes|=l),I2(x.return,l,p),j.lanes|=l;break}q=q.next}}else if(x.tag===10)C=x.type===p.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,j=C.alternate,j!==null&&(j.lanes|=l),I2(C,l,p),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===p){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}tt(o,p,g.children,l),p=p.child}return p;case 9:return g=p.type,h=p.pendingProps.children,zo(p,l),g=Et(g),h=h(g),p.flags|=1,tt(o,p,h,l),p.child;case 14:return h=p.type,g=er(h,p.pendingProps),g=er(h.type,g),b1(o,p,h,g,l);case 15:return I1(o,p,p.type,p.pendingProps,l);case 17:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:er(h,g),Us(o,p),p.tag=1,dt(h)?(o=!0,Ms(p)):o=!1,zo(p,l),c1(p,h,g),E2(p,h,g,l),$2(null,p,h,!0,o,l);case 19:return A1(o,p,l);case 22:return B1(o,p,l)}throw Error(t(156,p.tag))};function Z1(o,p){return Hy(o,p)}function nH(o,p,l,h){this.tag=o,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=p,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(o,p,l,h){return new nH(o,p,l,h)}function pf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function tH(o){if(typeof o=="function")return pf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===R)return 11;if(o===G)return 14}return 2}function Ia(o,p){var l=o.alternate;return l===null?(l=jt(o.tag,p,o.key,o.mode),l.elementType=o.elementType,l.type=o.type,l.stateNode=o.stateNode,l.alternate=o,o.alternate=l):(l.pendingProps=p,l.type=o.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=o.flags&14680064,l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,p=o.dependencies,l.dependencies=p===null?null:{lanes:p.lanes,firstContext:p.firstContext},l.sibling=o.sibling,l.index=o.index,l.ref=o.ref,l}function t0(o,p,l,h,g,x){var C=2;if(h=o,typeof o=="function")pf(o)&&(C=1);else if(typeof o=="string")C=5;else e:switch(o){case N:return eo(l.children,g,x,p);case w:C=8,g|=8;break;case H:return o=jt(12,l,p,g|2),o.elementType=H,o.lanes=x,o;case F:return o=jt(13,l,p,g),o.elementType=F,o.lanes=x,o;case V:return o=jt(19,l,p,g),o.elementType=V,o.lanes=x,o;case Q:return r0(l,g,x,p);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case k:C=10;break e;case D:C=9;break e;case R:C=11;break e;case G:C=14;break e;case Y:C=16,h=null;break e}throw Error(t(130,o==null?o:typeof o,""))}return p=jt(C,l,p,g),p.elementType=o,p.type=h,p.lanes=x,p}function eo(o,p,l,h){return o=jt(7,o,h,p),o.lanes=l,o}function r0(o,p,l,h){return o=jt(22,o,h,p),o.elementType=Q,o.lanes=l,o.stateNode={isHidden:!1},o}function uf(o,p,l){return o=jt(6,o,null,p),o.lanes=l,o}function sf(o,p,l){return p=jt(4,o.children!==null?o.children:[],o.key,p),p.lanes=l,p.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},p}function rH(o,p,l,h,g){this.tag=p,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function lf(o,p,l,h,g,x,C,j,q){return o=new rH(o,p,l,j,q),p===1?(p=1,x===!0&&(p|=8)):p=0,x=jt(3,null,null,p),o.current=x,x.stateNode=o,x.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},x2(x),o}function aH(o,p,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:h==null?null:""+h,children:o,containerInfo:p,implementation:l}}function J1(o){if(!o)return ca;o=o._reactInternals;e:{if(Fa(o)!==o||o.tag!==1)throw Error(t(170));var p=o;do{switch(p.tag){case 3:p=p.stateNode.context;break e;case 1:if(dt(p.type)){p=p.stateNode.__reactInternalMemoizedMergedChildContext;break e}}p=p.return}while(p!==null);throw Error(t(171))}if(o.tag===1){var l=o.type;if(dt(l))return Mb(o,l,p)}return p}function eI(o,p,l,h,g,x,C,j,q){return o=lf(l,h,!0,o,g,x,C,j,q),o.context=J1(null),l=o.current,h=rt(),g=ya(l),x=Nr(h,g),x.callback=p??null,ma(l,x,g),o.current.lanes=g,pp(o,g,h),vt(o,h),o}function a0(o,p,l,h){var g=p.current,x=rt(),C=ya(g);return l=J1(l),p.context===null?p.context=l:p.pendingContext=l,p=Nr(x,C),p.payload={element:o},h=h===void 0?null:h,h!==null&&(p.callback=h),o=ma(g,p,C),o!==null&&(rr(o,g,C,x),ks(o,g,C)),C}function o0(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function nI(o,p){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var l=o.retryLane;o.retryLane=l!==0&&l<p?l:p}}function cf(o,p){nI(o,p),(o=o.alternate)&&nI(o,p)}function oH(){return null}var tI=typeof reportError=="function"?reportError:function(o){console.error(o)};function ff(o){this._internalRoot=o}i0.prototype.render=ff.prototype.render=function(o){var p=this._internalRoot;if(p===null)throw Error(t(409));a0(o,p,null,null)},i0.prototype.unmount=ff.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var p=o.containerInfo;Xa(function(){a0(null,o,null,null)}),p[Ar]=null}};function i0(o){this._internalRoot=o}i0.prototype.unstable_scheduleHydration=function(o){if(o){var p=jy();o={blockedOn:null,target:o,priority:p};for(var l=0;l<ia.length&&p!==0&&p<ia[l].priority;l++);ia.splice(l,0,o),l===0&&Fy(o)}};function df(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function p0(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function rI(){}function iH(o,p,l,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var te=o0(C);x.call(te)}}var C=eI(p,h,o,0,null,!1,!1,"",rI);return o._reactRootContainer=C,o[Ar]=C.current,Bp(o.nodeType===8?o.parentNode:o),Xa(),C}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var j=h;h=function(){var te=o0(q);j.call(te)}}var q=lf(o,0,!1,null,null,!1,!1,"",rI);return o._reactRootContainer=q,o[Ar]=q.current,Bp(o.nodeType===8?o.parentNode:o),Xa(function(){a0(p,q,l,h)}),q}function u0(o,p,l,h,g){var x=l._reactRootContainer;if(x){var C=x;if(typeof g=="function"){var j=g;g=function(){var q=o0(C);j.call(q)}}a0(p,C,o,g)}else C=iH(l,p,o,g,h);return o0(C)}Ty=function(o){switch(o.tag){case 3:var p=o.stateNode;if(p.current.memoizedState.isDehydrated){var l=ip(p.pendingLanes);l!==0&&(Ec(p,l|1),vt(p,wn()),(ze&6)===0&&(Qo=wn()+500,fa()))}break;case 13:Xa(function(){var h=Cr(o,1);if(h!==null){var g=rt();rr(h,o,1,g)}}),cf(o,1)}},Tc=function(o){if(o.tag===13){var p=Cr(o,134217728);if(p!==null){var l=rt();rr(p,o,134217728,l)}cf(o,134217728)}},Dy=function(o){if(o.tag===13){var p=ya(o),l=Cr(o,p);if(l!==null){var h=rt();rr(l,o,p,h)}cf(o,p)}},jy=function(){return Ze},$y=function(o,p){var l=Ze;try{return Ze=o,p()}finally{Ze=l}},_c=function(o,p,l){switch(p){case"input":if(Pe(o,l),p=l.name,l.type==="radio"&&p!=null){for(l=o;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+p)+'][type="radio"]'),p=0;p<l.length;p++){var h=l[p];if(h!==o&&h.form===o.form){var g=Ws(h);if(!g)throw Error(t(90));J(h),Pe(h,g)}}}break;case"textarea":yn(o,l);break;case"select":p=l.value,p!=null&&xn(o,!!l.multiple,p,!1)}},wy=rf,Wy=Xa;var pH={usingClientEntryPoint:!1,Events:[wp,Eo,Ws,xy,Py,rf]},Dp={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uH={bundleType:Dp.bundleType,version:Dp.version,rendererPackageName:Dp.rendererPackageName,rendererConfig:Dp.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=_y(o),o===null?null:o.stateNode},findFiberByHostInstance:Dp.findFiberByHostInstance||oH,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var s0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!s0.isDisabled&&s0.supportsFiber)try{is=s0.inject(uH),fr=s0}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pH,gt.createPortal=function(o,p){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(p))throw Error(t(200));return aH(o,p,null,l)},gt.createRoot=function(o,p){if(!df(o))throw Error(t(299));var l=!1,h="",g=tI;return p!=null&&(p.unstable_strictMode===!0&&(l=!0),p.identifierPrefix!==void 0&&(h=p.identifierPrefix),p.onRecoverableError!==void 0&&(g=p.onRecoverableError)),p=lf(o,1,!1,null,null,l,!1,h,g),o[Ar]=p.current,Bp(o.nodeType===8?o.parentNode:o),new ff(p)},gt.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var p=o._reactInternals;if(p===void 0)throw typeof o.render=="function"?Error(t(188)):(o=Object.keys(o).join(","),Error(t(268,o)));return o=_y(p),o=o===null?null:o.stateNode,o},gt.flushSync=function(o){return Xa(o)},gt.hydrate=function(o,p,l){if(!p0(p))throw Error(t(200));return u0(null,o,p,!0,l)},gt.hydrateRoot=function(o,p,l){if(!df(o))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,x="",C=tI;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),p=eI(p,null,o,1,l??null,g,!1,x,C),o[Ar]=p.current,Bp(o),h)for(o=0;o<h.length;o++)l=h[o],g=l._getVersion,g=g(l._source),p.mutableSourceEagerHydrationData==null?p.mutableSourceEagerHydrationData=[l,g]:p.mutableSourceEagerHydrationData.push(l,g);return new i0(p)},gt.render=function(o,p,l){if(!p0(p))throw Error(t(200));return u0(null,o,p,!1,l)},gt.unmountComponentAtNode=function(o){if(!p0(o))throw Error(t(40));return o._reactRootContainer?(Xa(function(){u0(null,null,o,!1,function(){o._reactRootContainer=null,o[Ar]=null})}),!0):!1},gt.unstable_batchedUpdates=rf,gt.unstable_renderSubtreeIntoContainer=function(o,p,l,h){if(!p0(l))throw Error(t(200));if(o==null||o._reactInternals===void 0)throw Error(t(38));return u0(o,p,l,!1,h)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var cI;function NW(){if(cI)return vf.exports;cI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),vf.exports=yH(),vf.exports}var fI;function bH(){if(fI)return c0;fI=1;var e=NW();return c0.createRoot=e.createRoot,c0.hydrateRoot=e.hydrateRoot,c0}var IH=bH(),U=ug();const E=Xe(U),BH=fH({__proto__:null,default:E},[U]);var A0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var xH=A0.exports,dI;function PH(){return dI||(dI=1,(function(e,n){((t,r)=>{e.exports=r()})(xH,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,u=r.IS_PAPA_WORKER||!1,s={},c=0,f={};function m(w){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(H){var k=P(H);k.chunkSize=parseInt(k.chunkSize),H.step||H.chunk||(k.chunkSize=null),this._handle=new I(k),(this._handle.streamer=this)._config=k}).call(this,w),this.parseChunk=function(H,k){var D=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<D){let F=this._config.newline;F||(R=this._config.quoteChar||'"',F=this._handle.guessLineEndings(H,R)),H=[...H.split(F).slice(D)].join(F)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(R=this._config.beforeFirstChunk(H))!==void 0&&(H=R),this.isFirstChunk=!1,this._halted=!1;var D=this._partialLine+H,R=(this._partialLine="",this._handle.parse(D,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(H=R.meta.cursor,D=(this._finished||(this._partialLine=D.substring(H-this._baseIndex),this._baseIndex=H),R&&R.data&&(this._rowCount+=R.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),u)r.postMessage({results:R,workerId:f.WORKER_ID,finished:D});else if(N(this._config.chunk)&&!k){if(this._config.chunk(R,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=R=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(R.data),this._completeResults.errors=this._completeResults.errors.concat(R.errors),this._completeResults.meta=R.meta),this._completed||!D||!N(this._config.complete)||R&&R.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||R&&R.meta.paused||this._nextChunk(),R}this._halted=!0},this._sendError=function(H){N(this._config.error)?this._config.error(H):u&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:H,finished:!1})}}function d(w){var H;(w=w||{}).chunkSize||(w.chunkSize=f.RemoteChunkSize),m.call(this,w),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(H=new XMLHttpRequest,this._config.withCredentials&&(H.withCredentials=this._config.withCredentials),i||(H.onload=A(this._chunkLoaded,this),H.onerror=A(this._chunkError,this)),H.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,D=this._config.downloadRequestHeaders;for(k in D)H.setRequestHeader(k,D[k])}var R;this._config.chunkSize&&(R=this._start+this._config.chunkSize-1,H.setRequestHeader("Range","bytes="+this._start+"-"+R));try{H.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}i&&H.status===0&&this._chunkError()}},this._chunkLoaded=function(){H.readyState===4&&(H.status<200||400<=H.status?this._chunkError():(this._start+=this._config.chunkSize||H.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(H),this.parseChunk(H.responseText)))},this._chunkError=function(k){k=H.statusText||k,this._sendError(new Error(k))}}function v(w){(w=w||{}).chunkSize||(w.chunkSize=f.LocalChunkSize),m.call(this,w);var H,k,D=typeof FileReader<"u";this.stream=function(R){this._input=R,k=R.slice||R.webkitSlice||R.mozSlice,D?((H=new FileReader).onload=A(this._chunkLoaded,this),H.onerror=A(this._chunkError,this)):H=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var R=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),R=k.call(R,this._start,F)),H.readAsText(R,this._config.encoding));D||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(R){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(R.target.result)},this._chunkError=function(){this._sendError(H.error)}}function y(w){var H;m.call(this,w=w||{}),this.stream=function(k){return H=k,this._nextChunk()},this._nextChunk=function(){var k,D;if(!this._finished)return k=this._config.chunkSize,H=k?(D=H.substring(0,k),H.substring(k)):(D=H,""),this._finished=!H,this.parseChunk(D)}}function B(w){m.call(this,w=w||{});var H=[],k=!0,D=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(R){this._input=R,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){D&&H.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),H.length?this.parseChunk(H.shift()):k=!0},this._streamData=A(function(R){try{H.push(typeof R=="string"?R:R.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(H.shift()))}catch(F){this._streamError(F)}},this),this._streamError=A(function(R){this._streamCleanUp(),this._sendError(R)},this),this._streamEnd=A(function(){this._streamCleanUp(),D=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(w){var H,k,D,R,F=Math.pow(2,53),V=-F,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,$=0,K=0,ne=!1,T=!1,L=[],Z={data:[],errors:[],meta:{}};function se(de){return w.skipEmptyLines==="greedy"?de.join("").trim()==="":de.length===1&&de[0].length===0}function he(){if(Z&&D&&(Be("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),D=!1),w.skipEmptyLines&&(Z.data=Z.data.filter(function(J){return!se(J)})),Ie()){let J=function(ge,me){N(w.transformHeader)&&(ge=w.transformHeader(ge,me)),L.push(ge)};var ie=J;if(Z)if(Array.isArray(Z.data[0])){for(var de=0;Ie()&&de<Z.data.length;de++)Z.data[de].forEach(J);Z.data.splice(0,1)}else Z.data.forEach(J)}function ae(J,ge){for(var me=w.header?{}:[],ye=0;ye<J.length;ye++){var ve=ye,Pe=J[ye],Pe=((je,qe)=>(Ke=>(w.dynamicTypingFunction&&w.dynamicTyping[Ke]===void 0&&(w.dynamicTyping[Ke]=w.dynamicTypingFunction(Ke)),(w.dynamicTyping[Ke]||w.dynamicTyping)===!0))(je)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(G.test(Ke)&&(Ke=parseFloat(Ke),V<Ke&&Ke<F))return 1})(qe)?parseFloat(qe):Y.test(qe)?new Date(qe):qe===""?null:qe):qe)(ve=w.header?ye>=L.length?"__parsed_extra":L[ye]:ve,Pe=w.transform?w.transform(Pe,ve):Pe);ve==="__parsed_extra"?(me[ve]=me[ve]||[],me[ve].push(Pe)):me[ve]=Pe}return w.header&&(ye>L.length?Be("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+ye,K+ge):ye<L.length&&Be("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+ye,K+ge)),me}var re;Z&&(w.header||w.dynamicTyping||w.transform)&&(re=1,!Z.data.length||Array.isArray(Z.data[0])?(Z.data=Z.data.map(ae),re=Z.data.length):Z.data=ae(Z.data,0),w.header&&Z.meta&&(Z.meta.fields=L),K+=re)}function Ie(){return w.header&&L.length===0}function Be(de,ae,re,ie){de={type:de,code:ae,message:re},ie!==void 0&&(de.row=ie),Z.errors.push(de)}N(w.step)&&(R=w.step,w.step=function(de){Z=de,Ie()?he():(he(),Z.data.length!==0&&($+=de.data.length,w.preview&&$>w.preview?k.abort():(Z.data=Z.data[0],R(Z,Q))))}),this.parse=function(de,ae,re){var ie=w.quoteChar||'"',ie=(w.newline||(w.newline=this.guessLineEndings(de,ie)),D=!1,w.delimiter?N(w.delimiter)&&(w.delimiter=w.delimiter(de),Z.meta.delimiter=w.delimiter):((ie=((J,ge,me,ye,ve)=>{var Pe,je,qe,Ke;ve=ve||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var xn=0;xn<ve.length;xn++){for(var gn,Ht=ve[xn],yn=0,Qn=0,Pn=0,jn=(qe=void 0,new W({comments:ye,delimiter:Ht,newline:ge,preview:10}).parse(J)),ct=0;ct<jn.data.length;ct++)me&&se(jn.data[ct])?Pn++:(gn=jn.data[ct].length,Qn+=gn,qe===void 0?qe=gn:0<gn&&(yn+=Math.abs(gn-qe),qe=gn));0<jn.data.length&&(Qn/=jn.data.length-Pn),(je===void 0||yn<=je)&&(Ke===void 0||Ke<Qn)&&1.99<Qn&&(je=yn,Pe=Ht,Ke=Qn)}return{successful:!!(w.delimiter=Pe),bestDelimiter:Pe}})(de,w.newline,w.skipEmptyLines,w.comments,w.delimitersToGuess)).successful?w.delimiter=ie.bestDelimiter:(D=!0,w.delimiter=f.DefaultDelimiter),Z.meta.delimiter=w.delimiter),P(w));return w.preview&&w.header&&ie.preview++,H=de,k=new W(ie),Z=k.parse(H,ae,re),he(),ne?{meta:{paused:!0}}:Z||{meta:{paused:!1}}},this.paused=function(){return ne},this.pause=function(){ne=!0,k.abort(),H=N(w.chunk)?"":H.substring(k.getCharIndex())},this.resume=function(){Q.streamer._halted?(ne=!1,Q.streamer.parseChunk(H,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,k.abort(),Z.meta.aborted=!0,N(w.complete)&&w.complete(Z),H=""},this.guessLineEndings=function(J,ie){J=J.substring(0,1048576);var ie=new RegExp(b(ie)+"([^]*?)"+b(ie),"gm"),re=(J=J.replace(ie,"")).split("\r"),ie=J.split(`
`),J=1<ie.length&&ie[0].length<re[0].length;if(re.length===1||J)return`
`;for(var ge=0,me=0;me<re.length;me++)re[me][0]===`
`&&ge++;return ge>=re.length/2?`\r
`:"\r"}}function b(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function W(w){var H=(w=w||{}).delimiter,k=w.newline,D=w.comments,R=w.step,F=w.preview,V=w.fastMode,G=null,Y=!1,Q=w.quoteChar==null?'"':w.quoteChar,$=Q;if(w.escapeChar!==void 0&&($=w.escapeChar),(typeof H!="string"||-1<f.BAD_DELIMITERS.indexOf(H))&&(H=","),D===H)throw new Error("Comment character same as delimiter");D===!0?D="#":(typeof D!="string"||-1<f.BAD_DELIMITERS.indexOf(D))&&(D=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var K=0,ne=!1;this.parse=function(T,L,Z){if(typeof T!="string")throw new Error("Input must be a string");var se=T.length,he=H.length,Ie=k.length,Be=D.length,de=N(R),ae=[],re=[],ie=[],J=K=0;if(!T)return yn();if(V||V!==!1&&T.indexOf(Q)===-1){for(var ge=T.split(k),me=0;me<ge.length;me++){if(ie=ge[me],K+=ie.length,me!==ge.length-1)K+=k.length;else if(Z)return yn();if(!D||ie.substring(0,Be)!==D){if(de){if(ae=[],Ke(ie.split(H)),Qn(),ne)return yn()}else Ke(ie.split(H));if(F&&F<=me)return ae=ae.slice(0,F),yn(!0)}}return yn()}for(var ye=T.indexOf(H,K),ve=T.indexOf(k,K),Pe=new RegExp(b($)+b(Q),"g"),je=T.indexOf(Q,K);;)if(T[K]===Q)for(je=K,K++;;){if((je=T.indexOf(Q,je+1))===-1)return Z||re.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ae.length,index:K}),gn();if(je===se-1)return gn(T.substring(K,je).replace(Pe,Q));if(Q===$&&T[je+1]===$)je++;else if(Q===$||je===0||T[je-1]!==$){ye!==-1&&ye<je+1&&(ye=T.indexOf(H,je+1));var qe=xn((ve=ve!==-1&&ve<je+1?T.indexOf(k,je+1):ve)===-1?ye:Math.min(ye,ve));if(T.substr(je+1+qe,he)===H){ie.push(T.substring(K,je).replace(Pe,Q)),T[K=je+1+qe+he]!==Q&&(je=T.indexOf(Q,K)),ye=T.indexOf(H,K),ve=T.indexOf(k,K);break}if(qe=xn(ve),T.substring(je+1+qe,je+1+qe+Ie)===k){if(ie.push(T.substring(K,je).replace(Pe,Q)),Ht(je+1+qe+Ie),ye=T.indexOf(H,K),je=T.indexOf(Q,K),de&&(Qn(),ne))return yn();if(F&&ae.length>=F)return yn(!0);break}re.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ae.length,index:K}),je++}}else if(D&&ie.length===0&&T.substring(K,K+Be)===D){if(ve===-1)return yn();K=ve+Ie,ve=T.indexOf(k,K),ye=T.indexOf(H,K)}else if(ye!==-1&&(ye<ve||ve===-1))ie.push(T.substring(K,ye)),K=ye+he,ye=T.indexOf(H,K);else{if(ve===-1)break;if(ie.push(T.substring(K,ve)),Ht(ve+Ie),de&&(Qn(),ne))return yn();if(F&&ae.length>=F)return yn(!0)}return gn();function Ke(Pn){ae.push(Pn),J=K}function xn(Pn){var jn=0;return jn=Pn!==-1&&(Pn=T.substring(je+1,Pn))&&Pn.trim()===""?Pn.length:jn}function gn(Pn){return Z||(Pn===void 0&&(Pn=T.substring(K)),ie.push(Pn),K=se,Ke(ie),de&&Qn()),yn()}function Ht(Pn){K=Pn,Ke(ie),ie=[],ve=T.indexOf(k,K)}function yn(Pn){if(w.header&&!L&&ae.length&&!Y){var jn=ae[0],ct=Object.create(null),So=new Set(jn);let na=!1;for(let Ct=0;Ct<jn.length;Ct++){let Nt=jn[Ct];if(ct[Nt=N(w.transformHeader)?w.transformHeader(Nt,Ct):Nt]){let ta,tp=ct[Nt];for(;ta=Nt+"_"+tp,tp++,So.has(ta););So.add(ta),jn[Ct]=ta,ct[Nt]++,na=!0,(G=G===null?{}:G)[ta]=Nt}else ct[Nt]=1,jn[Ct]=Nt;So.add(Nt)}na&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:ae,errors:re,meta:{delimiter:H,linebreak:k,aborted:ne,truncated:!!Pn,cursor:J+(L||0),renamedHeaders:G}}}function Qn(){R(yn()),ae=[],re=[]}},this.abort=function(){ne=!0},this.getCharIndex=function(){return K}}function S(w){var H=w.data,k=s[H.workerId],D=!1;if(H.error)k.userError(H.error,H.file);else if(H.results&&H.results.data){var R={abort:function(){D=!0,M(H.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(k.userStep)){for(var F=0;F<H.results.data.length&&(k.userStep({data:H.results.data[F],errors:H.results.errors,meta:H.results.meta},R),!D);F++);delete H.results}else N(k.userChunk)&&(k.userChunk(H.results,R,H.file),delete H.results)}H.finished&&!D&&M(H.workerId,H.results)}function M(w,H){var k=s[w];N(k.userComplete)&&k.userComplete(H),k.terminate(),delete s[w]}function O(){throw new Error("Not implemented.")}function P(w){if(typeof w!="object"||w===null)return w;var H,k=Array.isArray(w)?[]:{};for(H in w)k[H]=P(w[H]);return k}function A(w,H){return function(){w.apply(H,arguments)}}function N(w){return typeof w=="function"}return f.parse=function(w,H){var k=(H=H||{}).dynamicTyping||!1;if(N(k)&&(H.dynamicTypingFunction=k,k={}),H.dynamicTyping=k,H.transform=!!N(H.transform)&&H.transform,!H.worker||!f.WORKERS_SUPPORTED)return k=null,f.NODE_STREAM_INPUT,typeof w=="string"?(w=(D=>D.charCodeAt(0)!==65279?D:D.slice(1))(w),k=new(H.download?d:y)(H)):w.readable===!0&&N(w.read)&&N(w.on)?k=new B(H):(r.File&&w instanceof File||w instanceof Object)&&(k=new v(H)),k.stream(w);(k=(()=>{var D;return!!f.WORKERS_SUPPORTED&&(D=(()=>{var R=r.URL||r.webkitURL||null,F=t.toString();return f.BLOB_URL||(f.BLOB_URL=R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(D=new r.Worker(D)).onmessage=S,D.id=c++,s[D.id]=D)})()).userStep=H.step,k.userChunk=H.chunk,k.userComplete=H.complete,k.userError=H.error,H.step=N(H.step),H.chunk=N(H.chunk),H.complete=N(H.complete),H.error=N(H.error),delete H.worker,k.postMessage({input:w,config:H,workerId:k.id})},f.unparse=function(w,H){var k=!1,D=!0,R=",",F=`\r
`,V='"',G=V+V,Y=!1,Q=null,$=!1,K=((()=>{if(typeof H=="object"){if(typeof H.delimiter!="string"||f.BAD_DELIMITERS.filter(function(L){return H.delimiter.indexOf(L)!==-1}).length||(R=H.delimiter),typeof H.quotes!="boolean"&&typeof H.quotes!="function"&&!Array.isArray(H.quotes)||(k=H.quotes),typeof H.skipEmptyLines!="boolean"&&typeof H.skipEmptyLines!="string"||(Y=H.skipEmptyLines),typeof H.newline=="string"&&(F=H.newline),typeof H.quoteChar=="string"&&(V=H.quoteChar),typeof H.header=="boolean"&&(D=H.header),Array.isArray(H.columns)){if(H.columns.length===0)throw new Error("Option columns is empty");Q=H.columns}H.escapeChar!==void 0&&(G=H.escapeChar+V),H.escapeFormulae instanceof RegExp?$=H.escapeFormulae:typeof H.escapeFormulae=="boolean"&&H.escapeFormulae&&($=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(V),"g"));if(typeof w=="string"&&(w=JSON.parse(w)),Array.isArray(w)){if(!w.length||Array.isArray(w[0]))return ne(null,w,Y);if(typeof w[0]=="object")return ne(Q||Object.keys(w[0]),w,Y)}else if(typeof w=="object")return typeof w.data=="string"&&(w.data=JSON.parse(w.data)),Array.isArray(w.data)&&(w.fields||(w.fields=w.meta&&w.meta.fields||Q),w.fields||(w.fields=Array.isArray(w.data[0])?w.fields:typeof w.data[0]=="object"?Object.keys(w.data[0]):[]),Array.isArray(w.data[0])||typeof w.data[0]=="object"||(w.data=[w.data])),ne(w.fields||[],w.data||[],Y);throw new Error("Unable to serialize unrecognized input");function ne(L,Z,se){var he="",Ie=(typeof L=="string"&&(L=JSON.parse(L)),typeof Z=="string"&&(Z=JSON.parse(Z)),Array.isArray(L)&&0<L.length),Be=!Array.isArray(Z[0]);if(Ie&&D){for(var de=0;de<L.length;de++)0<de&&(he+=R),he+=T(L[de],de);0<Z.length&&(he+=F)}for(var ae=0;ae<Z.length;ae++){var re=(Ie?L:Z[ae]).length,ie=!1,J=Ie?Object.keys(Z[ae]).length===0:Z[ae].length===0;if(se&&!Ie&&(ie=se==="greedy"?Z[ae].join("").trim()==="":Z[ae].length===1&&Z[ae][0].length===0),se==="greedy"&&Ie){for(var ge=[],me=0;me<re;me++){var ye=Be?L[me]:me;ge.push(Z[ae][ye])}ie=ge.join("").trim()===""}if(!ie){for(var ve=0;ve<re;ve++){0<ve&&!J&&(he+=R);var Pe=Ie&&Be?L[ve]:ve;he+=T(Z[ae][Pe],ve)}ae<Z.length-1&&(!se||0<re&&!J)&&(he+=F)}}return he}function T(L,Z){var se,he;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(he=!1,$&&typeof L=="string"&&$.test(L)&&(L="'"+L,he=!0),se=L.toString().replace(K,G),(he=he||k===!0||typeof k=="function"&&k(L,Z)||Array.isArray(k)&&k[Z]||((Ie,Be)=>{for(var de=0;de<Be.length;de++)if(-1<Ie.indexOf(Be[de]))return!0;return!1})(se,f.BAD_DELIMITERS)||-1<se.indexOf(R)||se.charAt(0)===" "||se.charAt(se.length-1)===" ")?V+se+V:se)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=W,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(w){var H=w.config||{},k=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var V=0;V<this.files.length;V++)k.push({file:this.files[V],inputElem:this,instanceConfig:a.extend({},H)})}),D(),this;function D(){if(k.length===0)N(w.complete)&&w.complete();else{var F,V,G,Y,Q=k[0];if(N(w.before)){var $=w.before(Q.file,Q.inputElem);if(typeof $=="object"){if($.action==="abort")return F="AbortError",V=Q.file,G=Q.inputElem,Y=$.reason,void(N(w.error)&&w.error({name:F},V,G,Y));if($.action==="skip")return void R();typeof $.config=="object"&&(Q.instanceConfig=a.extend(Q.instanceConfig,$.config))}else if($==="skip")return void R()}var K=Q.instanceConfig.complete;Q.instanceConfig.complete=function(ne){N(K)&&K(ne,Q.file,Q.inputElem),R()},f.parse(Q.file,Q.instanceConfig)}}function R(){k.splice(0,1),D()}}),u&&(r.onmessage=function(w){w=w.data,f.WORKER_ID===void 0&&w&&(f.WORKER_ID=w.workerId),typeof w.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(w.input,w.config),finished:!0}):(r.File&&w.input instanceof File||w.input instanceof Object)&&(w=f.parse(w.input,w.config))&&r.postMessage({workerId:f.WORKER_ID,results:w,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(B.prototype=Object.create(m.prototype)).constructor=B,f})})(A0)),A0.exports}var wH=PH();const mI=Xe(wH);function hI(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function RW(...e){return n=>{let t=!1;const r=e.map(a=>{const i=hI(a,n);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():hI(e[a],null)}}}}function O0(...e){return U.useCallback(RW(...e),e)}var fu=U.forwardRef((e,n)=>{const{children:t,...r}=e,a=U.Children.toArray(t),i=a.find(SH);if(i){const u=i.props.children,s=a.map(c=>c===i?U.Children.count(u)>1?U.Children.only(null):U.isValidElement(u)?u.props.children:null:c);return _.jsx(W6,{...r,ref:n,children:U.isValidElement(u)?U.cloneElement(u,void 0,s):null})}return _.jsx(W6,{...r,ref:n,children:t})});fu.displayName="Slot";var W6=U.forwardRef((e,n)=>{const{children:t,...r}=e;if(U.isValidElement(t)){const a=AH(t),i=MH(r,t.props);return t.type!==U.Fragment&&(i.ref=n?RW(n,a):a),U.cloneElement(t,i)}return U.Children.count(t)>1?U.Children.only(null):null});W6.displayName="SlotClone";var WH=({children:e})=>_.jsx(_.Fragment,{children:e});function SH(e){return U.isValidElement(e)&&e.type===WH}function MH(e,n){const t={...n};for(const r in n){const a=e[r],i=n[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...s)=>{i(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...i}:r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}function AH(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function kW(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=kW(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function De(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=kW(e))&&(r&&(r+=" "),r+=n);return r}const vI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,gI=De,_H=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return gI(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:i}=n,u=Object.keys(a).map(f=>{const m=t==null?void 0:t[f],d=i==null?void 0:i[f];if(m===null)return null;const v=vI(m)||vI(d);return a[f][v]}),s=t&&Object.entries(t).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),c=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...y}=m;return Object.entries(y).every(B=>{let[I,b]=B;return Array.isArray(b)?b.includes({...i,...s}[I]):{...i,...s}[I]===b})?[...f,d,v]:f},[]);return gI(e,u,c,t==null?void 0:t.class,t==null?void 0:t.className)},sg="-",OH=e=>{const n=CH(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:u=>{const s=u.split(sg);return s[0]===""&&s.length!==1&&s.shift(),EW(s,n)||HH(u)},getConflictingClassGroupIds:(u,s)=>{const c=t[u]||[];return s&&r[u]?[...c,...r[u]]:c}}},EW=(e,n)=>{var u;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),a=r?EW(e.slice(1),r):void 0;if(a)return a;if(n.validators.length===0)return;const i=e.join(sg);return(u=n.validators.find(({validator:s})=>s(i)))==null?void 0:u.classGroupId},yI=/^\[(.+)\]$/,HH=e=>{if(yI.test(e)){const n=yI.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},CH=e=>{const{theme:n,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const a in t)S6(t[a],r,a,n);return r},S6=(e,n,t,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?n:bI(n,a);i.classGroupId=t;return}if(typeof a=="function"){if(NH(a)){S6(a(r),n,t,r);return}n.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([i,u])=>{S6(u,bI(n,i),t,r)})})},bI=(e,n)=>{let t=e;return n.split(sg).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},NH=e=>e.isThemeGetter,RH=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const a=(i,u)=>{t.set(i,u),n++,n>e&&(n=0,r=t,t=new Map)};return{get(i){let u=t.get(i);if(u!==void 0)return u;if((u=r.get(i))!==void 0)return a(i,u),u},set(i,u){t.has(i)?t.set(i,u):a(i,u)}}},M6="!",A6=":",kH=A6.length,EH=e=>{const{prefix:n,experimentalParseClassName:t}=e;let r=a=>{const i=[];let u=0,s=0,c=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(u===0&&s===0){if(I===A6){i.push(a.slice(c,B)),c=B+kH;continue}if(I==="/"){f=B;continue}}I==="["?u++:I==="]"?u--:I==="("?s++:I===")"&&s--}const m=i.length===0?a:a.substring(c),d=TH(m),v=d!==m,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(n){const a=n+A6,i=r;r=u=>u.startsWith(a)?i(u.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(t){const a=r;r=i=>t({className:i,parseClassName:a})}return r},TH=e=>e.endsWith(M6)?e.substring(0,e.length-1):e.startsWith(M6)?e.substring(1):e,DH=e=>{const n=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(u=>{u[0]==="["||n[u]?(a.push(...i.sort(),u),i=[]):i.push(u)}),a.push(...i.sort()),a}},jH=e=>({cache:RH(e.cacheSize),parseClassName:EH(e),sortModifiers:DH(e),...OH(e)}),$H=/\s+/,LH=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=n,u=[],s=e.trim().split($H);let c="";for(let f=s.length-1;f>=0;f-=1){const m=s[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:B,maybePostfixModifierPosition:I}=t(m);if(d){c=m+(c.length>0?" "+c:c);continue}let b=!!I,W=r(b?B.substring(0,I):B);if(!W){if(!b){c=m+(c.length>0?" "+c:c);continue}if(W=r(B),!W){c=m+(c.length>0?" "+c:c);continue}b=!1}const S=i(v).join(":"),M=y?S+M6:S,O=M+W;if(u.includes(O))continue;u.push(O);const P=a(W,b);for(let A=0;A<P.length;++A){const N=P[A];u.push(M+N)}c=m+(c.length>0?" "+c:c)}return c};function FH(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=TW(n))&&(r&&(r+=" "),r+=t);return r}const TW=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=TW(e[r]))&&(t&&(t+=" "),t+=n);return t};function qH(e,...n){let t,r,a,i=u;function u(c){const f=n.reduce((m,d)=>d(m),e());return t=jH(f),r=t.cache.get,a=t.cache.set,i=s,s(c)}function s(c){const f=r(c);if(f)return f;const m=LH(c,t);return a(c,m),m}return function(){return i(FH.apply(null,arguments))}}const kn=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},DW=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,jW=/^\((?:(\w[\w-]*):)?(.+)\)$/i,zH=/^\d+\/\d+$/,UH=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VH=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GH=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,KH=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,QH=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=e=>zH.test(e),Le=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),bf=e=>e.endsWith("%")&&Le(e.slice(0,-1)),Er=e=>UH.test(e),YH=()=>!0,XH=e=>VH.test(e)&&!GH.test(e),$W=()=>!1,ZH=e=>KH.test(e),JH=e=>QH.test(e),eC=e=>!Me(e)&&!Ae(e),nC=e=>qi(e,qW,$W),Me=e=>DW.test(e),no=e=>qi(e,zW,XH),If=e=>qi(e,iC,Le),II=e=>qi(e,LW,$W),tC=e=>qi(e,FW,JH),f0=e=>qi(e,UW,ZH),Ae=e=>jW.test(e),$p=e=>zi(e,zW),rC=e=>zi(e,pC),BI=e=>zi(e,LW),aC=e=>zi(e,qW),oC=e=>zi(e,FW),d0=e=>zi(e,UW,!0),qi=(e,n,t)=>{const r=DW.exec(e);return r?r[1]?n(r[1]):t(r[2]):!1},zi=(e,n,t=!1)=>{const r=jW.exec(e);return r?r[1]?n(r[1]):t:!1},LW=e=>e==="position"||e==="percentage",FW=e=>e==="image"||e==="url",qW=e=>e==="length"||e==="size"||e==="bg-size",zW=e=>e==="length",iC=e=>e==="number",pC=e=>e==="family-name",UW=e=>e==="shadow",uC=()=>{const e=kn("color"),n=kn("font"),t=kn("text"),r=kn("font-weight"),a=kn("tracking"),i=kn("leading"),u=kn("breakpoint"),s=kn("container"),c=kn("spacing"),f=kn("radius"),m=kn("shadow"),d=kn("inset-shadow"),v=kn("text-shadow"),y=kn("drop-shadow"),B=kn("blur"),I=kn("perspective"),b=kn("aspect"),W=kn("ease"),S=kn("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...O(),Ae,Me],A=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],w=()=>[Ae,Me,c],H=()=>[Xo,"full","auto",...w()],k=()=>[xa,"none","subgrid",Ae,Me],D=()=>["auto",{span:["full",xa,Ae,Me]},xa,Ae,Me],R=()=>[xa,"auto",Ae,Me],F=()=>["auto","min","max","fr",Ae,Me],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...w()],Q=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...w()],$=()=>[e,Ae,Me],K=()=>[...O(),BI,II,{position:[Ae,Me]}],ne=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",aC,nC,{size:[Ae,Me]}],L=()=>[bf,$p,no],Z=()=>["","none","full",f,Ae,Me],se=()=>["",Le,$p,no],he=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Be=()=>[Le,bf,BI,II],de=()=>["","none",B,Ae,Me],ae=()=>["none",Le,Ae,Me],re=()=>["none",Le,Ae,Me],ie=()=>[Le,Ae,Me],J=()=>[Xo,"full",...w()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Er],breakpoint:[Er],color:[YH],container:[Er],"drop-shadow":[Er],ease:["in","out","in-out"],font:[eC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Er],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Er],shadow:[Er],spacing:["px",Le],text:[Er],"text-shadow":[Er],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,Me,Ae,b]}],container:["container"],columns:[{columns:[Le,Me,Ae,s]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{start:H()}],end:[{end:H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",Ae,Me]}],basis:[{basis:[Xo,"full","auto",s,...w()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Le,Xo,"auto","initial","none",Me]}],grow:[{grow:["",Le,Ae,Me]}],shrink:[{shrink:["",Le,Ae,Me]}],order:[{order:[xa,"first","last","none",Ae,Me]}],"grid-cols":[{"grid-cols":k()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":k()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":F()}],"auto-rows":[{"auto-rows":F()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":w()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":w()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[s,"screen",...Q()]}],"min-w":[{"min-w":[s,"screen","none",...Q()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[u]},...Q()]}],h:[{h:["screen",...Q()]}],"min-h":[{"min-h":["screen","none",...Q()]}],"max-h":[{"max-h":["screen",...Q()]}],"font-size":[{text:["base",t,$p,no]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Ae,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bf,Me]}],"font-family":[{font:[rC,Me,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,Ae,Me]}],"line-clamp":[{"line-clamp":[Le,"none",Ae,If]}],leading:[{leading:[i,...w()]}],"list-image":[{"list-image":["none",Ae,Me]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ae,Me]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[Le,"from-font","auto",Ae,no]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[Le,"auto",Ae,Me]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ae,Me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ae,Me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,Ae,Me],radial:["",Ae,Me],conic:[xa,Ae,Me]},oC,tC]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:L()}],"gradient-via-pos":[{via:L()}],"gradient-to-pos":[{to:L()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:se()}],"border-w-x":[{"border-x":se()}],"border-w-y":[{"border-y":se()}],"border-w-s":[{"border-s":se()}],"border-w-e":[{"border-e":se()}],"border-w-t":[{"border-t":se()}],"border-w-r":[{"border-r":se()}],"border-w-b":[{"border-b":se()}],"border-w-l":[{"border-l":se()}],"divide-x":[{"divide-x":se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Le,Ae,Me]}],"outline-w":[{outline:["",Le,$p,no]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",m,d0,f0]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",d,d0,f0]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[Le,no]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":se()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",v,d0,f0]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[Le,Ae,Me]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Le]}],"mask-image-linear-from-pos":[{"mask-linear-from":Be()}],"mask-image-linear-to-pos":[{"mask-linear-to":Be()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":Be()}],"mask-image-t-to-pos":[{"mask-t-to":Be()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":Be()}],"mask-image-r-to-pos":[{"mask-r-to":Be()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":Be()}],"mask-image-b-to-pos":[{"mask-b-to":Be()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":Be()}],"mask-image-l-to-pos":[{"mask-l-to":Be()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":Be()}],"mask-image-x-to-pos":[{"mask-x-to":Be()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":Be()}],"mask-image-y-to-pos":[{"mask-y-to":Be()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[Ae,Me]}],"mask-image-radial-from-pos":[{"mask-radial-from":Be()}],"mask-image-radial-to-pos":[{"mask-radial-to":Be()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[Le]}],"mask-image-conic-from-pos":[{"mask-conic-from":Be()}],"mask-image-conic-to-pos":[{"mask-conic-to":Be()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ae,Me]}],filter:[{filter:["","none",Ae,Me]}],blur:[{blur:de()}],brightness:[{brightness:[Le,Ae,Me]}],contrast:[{contrast:[Le,Ae,Me]}],"drop-shadow":[{"drop-shadow":["","none",y,d0,f0]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",Le,Ae,Me]}],"hue-rotate":[{"hue-rotate":[Le,Ae,Me]}],invert:[{invert:["",Le,Ae,Me]}],saturate:[{saturate:[Le,Ae,Me]}],sepia:[{sepia:["",Le,Ae,Me]}],"backdrop-filter":[{"backdrop-filter":["","none",Ae,Me]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[Le,Ae,Me]}],"backdrop-contrast":[{"backdrop-contrast":[Le,Ae,Me]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Le,Ae,Me]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Le,Ae,Me]}],"backdrop-invert":[{"backdrop-invert":["",Le,Ae,Me]}],"backdrop-opacity":[{"backdrop-opacity":[Le,Ae,Me]}],"backdrop-saturate":[{"backdrop-saturate":[Le,Ae,Me]}],"backdrop-sepia":[{"backdrop-sepia":["",Le,Ae,Me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ae,Me]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Le,"initial",Ae,Me]}],ease:[{ease:["linear","initial",W,Ae,Me]}],delay:[{delay:[Le,Ae,Me]}],animate:[{animate:["none",S,Ae,Me]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,Ae,Me]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:ae()}],"rotate-x":[{"rotate-x":ae()}],"rotate-y":[{"rotate-y":ae()}],"rotate-z":[{"rotate-z":ae()}],scale:[{scale:re()}],"scale-x":[{"scale-x":re()}],"scale-y":[{"scale-y":re()}],"scale-z":[{"scale-z":re()}],"scale-3d":["scale-3d"],skew:[{skew:ie()}],"skew-x":[{"skew-x":ie()}],"skew-y":[{"skew-y":ie()}],transform:[{transform:[Ae,Me,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:J()}],"translate-x":[{"translate-x":J()}],"translate-y":[{"translate-y":J()}],"translate-z":[{"translate-z":J()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ae,Me]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ae,Me]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[Le,$p,no,If]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},sC=qH(uC);function st(...e){return sC(De(e))}const lC=_H("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Lp({className:e,variant:n,size:t,asChild:r=!1,...a}){const i=r?fu:"button";return _.jsx(i,{"data-slot":"button",className:st(lC({variant:n,size:t,className:e})),...a})}function Ut({className:e,...n}){return _.jsx("div",{"data-slot":"card",className:st("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...n})}function Dl({className:e,...n}){return _.jsx("div",{"data-slot":"card-header",className:st("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...n})}function jl({className:e,...n}){return _.jsx("h4",{"data-slot":"card-title",className:st("leading-none",e),...n})}function Vt({className:e,...n}){return _.jsx("div",{"data-slot":"card-content",className:st("px-6 [&:last-child]:pb-6",e),...n})}function zr(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}function lg(e,n=[]){let t=[];function r(i,u){const s=U.createContext(u),c=t.length;t=[...t,u];const f=d=>{var W;const{scope:v,children:y,...B}=d,I=((W=v==null?void 0:v[e])==null?void 0:W[c])||s,b=U.useMemo(()=>B,Object.values(B));return _.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function m(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||s,B=U.useContext(y);if(B)return B;if(u!==void 0)return u;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=t.map(u=>U.createContext(u));return function(s){const c=(s==null?void 0:s[e])||i;return U.useMemo(()=>({[`__scope${e}`]:{...s,[e]:c}}),[s,c])}};return a.scopeName=e,[r,cC(a,...n)]}function cC(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const u=r.reduce((s,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...s,...d}},{});return U.useMemo(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}function fC(e){const n=e+"CollectionProvider",[t,r]=lg(n),[a,i]=t(n,{collectionRef:{current:null},itemMap:new Map}),u=y=>{const{scope:B,children:I}=y,b=E.useRef(null),W=E.useRef(new Map).current;return _.jsx(a,{scope:B,itemMap:W,collectionRef:b,children:I})};u.displayName=n;const s=e+"CollectionSlot",c=E.forwardRef((y,B)=>{const{scope:I,children:b}=y,W=i(s,I),S=O0(B,W.collectionRef);return _.jsx(fu,{ref:S,children:b})});c.displayName=s;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=E.forwardRef((y,B)=>{const{scope:I,children:b,...W}=y,S=E.useRef(null),M=O0(B,S),O=i(f,I);return E.useEffect(()=>(O.itemMap.set(S,{ref:S,...W}),()=>void O.itemMap.delete(S))),_.jsx(fu,{[m]:"",ref:M,children:b})});d.displayName=f;function v(y){const B=i(e+"CollectionConsumer",y);return E.useCallback(()=>{const b=B.collectionRef.current;if(!b)return[];const W=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(B.itemMap.values()).sort((O,P)=>W.indexOf(O.ref.current)-W.indexOf(P.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:u,Slot:c,ItemSlot:d},v,r]}var _6=globalThis!=null&&globalThis.document?U.useLayoutEffect:()=>{},dC=BH.useId||(()=>{}),mC=0;function VW(e){const[n,t]=U.useState(dC());return _6(()=>{t(r=>r??String(mC++))},[e]),e||(n?`radix-${n}`:"")}NW();var hC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ui=hC.reduce((e,n)=>{const t=U.forwardRef((r,a)=>{const{asChild:i,...u}=r,s=i?fu:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(s,{...u,ref:a})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function cg(e){const n=U.useRef(e);return U.useEffect(()=>{n.current=e}),U.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function GW({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,a]=vC({defaultProp:n,onChange:t}),i=e!==void 0,u=i?e:r,s=cg(t),c=U.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&s(d)}else a(f)},[i,e,a,s]);return[u,c]}function vC({defaultProp:e,onChange:n}){const t=U.useState(e),[r]=t,a=U.useRef(r),i=cg(n);return U.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),t}var gC=U.createContext(void 0);function KW(e){const n=U.useContext(gC);return e||n||"ltr"}var Bf="rovingFocusGroup.onEntryFocus",yC={bubbles:!1,cancelable:!0},$l="RovingFocusGroup",[O6,QW,bC]=fC($l),[IC,YW]=lg($l,[bC]),[BC,xC]=IC($l),XW=U.forwardRef((e,n)=>_.jsx(O6.Provider,{scope:e.__scopeRovingFocusGroup,children:_.jsx(O6.Slot,{scope:e.__scopeRovingFocusGroup,children:_.jsx(PC,{...e,ref:n})})}));XW.displayName=$l;var PC=U.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:a=!1,dir:i,currentTabStopId:u,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=U.useRef(null),y=O0(n,v),B=KW(i),[I=null,b]=GW({prop:u,defaultProp:s,onChange:c}),[W,S]=U.useState(!1),M=cg(f),O=QW(t),P=U.useRef(!1),[A,N]=U.useState(0);return U.useEffect(()=>{const w=v.current;if(w)return w.addEventListener(Bf,M),()=>w.removeEventListener(Bf,M)},[M]),_.jsx(BC,{scope:t,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:U.useCallback(w=>b(w),[b]),onItemShiftTab:U.useCallback(()=>S(!0),[]),onFocusableItemAdd:U.useCallback(()=>N(w=>w+1),[]),onFocusableItemRemove:U.useCallback(()=>N(w=>w-1),[]),children:_.jsx(Ui.div,{tabIndex:W||A===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{P.current=!0}),onFocus:zr(e.onFocus,w=>{const H=!P.current;if(w.target===w.currentTarget&&H&&!W){const k=new CustomEvent(Bf,yC);if(w.currentTarget.dispatchEvent(k),!k.defaultPrevented){const D=O().filter(Y=>Y.focusable),R=D.find(Y=>Y.active),F=D.find(Y=>Y.id===I),G=[R,F,...D].filter(Boolean).map(Y=>Y.ref.current);e3(G,m)}}P.current=!1}),onBlur:zr(e.onBlur,()=>S(!1))})})}),ZW="RovingFocusGroupItem",JW=U.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:a=!1,tabStopId:i,...u}=e,s=VW(),c=i||s,f=xC(ZW,t),m=f.currentTabStopId===c,d=QW(t),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return U.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),_.jsx(O6.ItemSlot,{scope:t,id:c,focusable:r,active:a,children:_.jsx(Ui.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...u,ref:n,onMouseDown:zr(e.onMouseDown,B=>{r?f.onItemFocus(c):B.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=SC(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let W=d().filter(S=>S.focusable).map(S=>S.ref.current);if(I==="last")W.reverse();else if(I==="prev"||I==="next"){I==="prev"&&W.reverse();const S=W.indexOf(B.currentTarget);W=f.loop?MC(W,S+1):W.slice(S+1)}setTimeout(()=>e3(W))}})})})});JW.displayName=ZW;var wC={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function WC(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function SC(e,n,t){const r=WC(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return wC[r]}function e3(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function MC(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var AC=XW,_C=JW;function OC(e,n){return U.useReducer((t,r)=>n[t][r]??t,e)}var n3=e=>{const{present:n,children:t}=e,r=HC(n),a=typeof t=="function"?t({present:r.isPresent}):U.Children.only(t),i=O0(r.ref,CC(a));return typeof t=="function"||r.isPresent?U.cloneElement(a,{ref:i}):null};n3.displayName="Presence";function HC(e){const[n,t]=U.useState(),r=U.useRef({}),a=U.useRef(e),i=U.useRef("none"),u=e?"mounted":"unmounted",[s,c]=OC(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return U.useEffect(()=>{const f=m0(r.current);i.current=s==="mounted"?f:"none"},[s]),_6(()=>{const f=r.current,m=a.current;if(m!==e){const v=i.current,y=m0(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(m&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),_6(()=>{if(n){let f;const m=n.ownerDocument.defaultView??window,d=y=>{const I=m0(r.current).includes(y.animationName);if(y.target===n&&I&&(c("ANIMATION_END"),!a.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",f=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},v=y=>{y.target===n&&(i.current=m0(r.current))};return n.addEventListener("animationstart",v),n.addEventListener("animationcancel",d),n.addEventListener("animationend",d),()=>{m.clearTimeout(f),n.removeEventListener("animationstart",v),n.removeEventListener("animationcancel",d),n.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:U.useCallback(f=>{f&&(r.current=getComputedStyle(f)),t(f)},[])}}function m0(e){return(e==null?void 0:e.animationName)||"none"}function CC(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var fg="Tabs",[NC]=lg(fg,[YW]),t3=YW(),[RC,dg]=NC(fg),r3=U.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,onValueChange:a,defaultValue:i,orientation:u="horizontal",dir:s,activationMode:c="automatic",...f}=e,m=KW(s),[d,v]=GW({prop:r,onChange:a,defaultProp:i});return _.jsx(RC,{scope:t,baseId:VW(),value:d,onValueChange:v,orientation:u,dir:m,activationMode:c,children:_.jsx(Ui.div,{dir:m,"data-orientation":u,...f,ref:n})})});r3.displayName=fg;var a3="TabsList",o3=U.forwardRef((e,n)=>{const{__scopeTabs:t,loop:r=!0,...a}=e,i=dg(a3,t),u=t3(t);return _.jsx(AC,{asChild:!0,...u,orientation:i.orientation,dir:i.dir,loop:r,children:_.jsx(Ui.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:n})})});o3.displayName=a3;var i3="TabsTrigger",p3=U.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,disabled:a=!1,...i}=e,u=dg(i3,t),s=t3(t),c=l3(u.baseId,r),f=c3(u.baseId,r),m=r===u.value;return _.jsx(_C,{asChild:!0,...s,focusable:!a,active:m,children:_.jsx(Ui.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:n,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?u.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&u.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=u.activationMode!=="manual";!m&&!a&&d&&u.onValueChange(r)})})})});p3.displayName=i3;var u3="TabsContent",s3=U.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,forceMount:a,children:i,...u}=e,s=dg(u3,t),c=l3(s.baseId,r),f=c3(s.baseId,r),m=r===s.value,d=U.useRef(m);return U.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),_.jsx(n3,{present:a||m,children:({present:v})=>_.jsx(Ui.div,{"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...u,ref:n,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});s3.displayName=u3;function l3(e,n){return`${e}-trigger-${n}`}function c3(e,n){return`${e}-content-${n}`}var kC=r3,EC=o3,TC=p3,DC=s3;function jC({className:e,...n}){return _.jsx(kC,{"data-slot":"tabs",className:st("flex flex-col gap-2",e),...n})}function $C({className:e,...n}){return _.jsx(EC,{"data-slot":"tabs-list",className:st("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...n})}function xI({className:e,...n}){return _.jsx(TC,{"data-slot":"tabs-trigger",className:st("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n})}function PI({className:e,...n}){return _.jsx(DC,{"data-slot":"tabs-content",className:st("flex-1 outline-none",e),...n})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),FC=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,r)=>r?r.toUpperCase():t.toLowerCase()),wI=e=>{const n=FC(e);return n.charAt(0).toUpperCase()+n.slice(1)},f3=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=U.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:u,...s},c)=>U.createElement("svg",{ref:c,...qC,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:f3("lucide",a),...s},[...u.map(([f,m])=>U.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(e,n)=>{const t=U.forwardRef(({className:r,...a},i)=>U.createElement(zC,{ref:i,iconNode:n,className:f3(`lucide-${LC(wI(e))}`,`lucide-${e}`,r),...a}));return t.displayName=wI(e),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],VC=lt("arrow-up-down",UC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],KC=lt("bot",GC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],YC=lt("chevron-down",QC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],WI=lt("chevron-left",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],H6=lt("chevron-right",ZC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],eN=lt("circle-plus",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],tN=lt("download",nN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],aN=lt("eye-off",rN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],iN=lt("eye",oN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],uN=lt("lock",pN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],lN=lt("trash-2",sN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],fN=lt("trending-up",cN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mN=lt("triangle-alert",dN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],vN=lt("users",hN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],SI=lt("x",gN);function Cn(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function Sn(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}function H0(e,n){const t=Cn(e);return isNaN(n)?Sn(e,NaN):(n&&t.setDate(t.getDate()+n),t)}const d3=6048e5,yN=864e5,bN=6e4,IN=36e5,BN=1e3;let xN={};function Vi(){return xN}function Na(e,n){var s,c,f,m;const t=Vi(),r=(n==null?void 0:n.weekStartsOn)??((c=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Cn(e),i=a.getDay(),u=(i<r?7:0)+i-r;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}function di(e){return Na(e,{weekStartsOn:1})}function m3(e){const n=Cn(e),t=n.getFullYear(),r=Sn(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const a=di(r),i=Sn(e,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const u=di(i);return n.getTime()>=a.getTime()?t+1:n.getTime()>=u.getTime()?t:t-1}function MI(e){const n=Cn(e);return n.setHours(0,0,0,0),n}function C0(e){const n=Cn(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function PN(e,n){const t=MI(e),r=MI(n),a=+t-C0(t),i=+r-C0(r);return Math.round((a-i)/yN)}function wN(e){const n=m3(e),t=Sn(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),di(t)}function WN(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function SN(e){if(!WN(e)&&typeof e!="number")return!1;const n=Cn(e);return!isNaN(Number(n))}function MN(e){const n=Cn(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function AN(e){const n=Cn(e);return n.setDate(1),n.setHours(0,0,0,0),n}function _N(e){const n=Cn(e),t=Sn(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const ON={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},HN=(e,n,t)=>{let r;const a=ON[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function xf(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const CN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},NN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},RN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kN={date:xf({formats:CN,defaultWidth:"full"}),time:xf({formats:NN,defaultWidth:"full"}),dateTime:xf({formats:RN,defaultWidth:"full"})},EN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},TN=(e,n,t,r)=>EN[e];function Fp(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):u;a=e.formattingValues[s]||e.formattingValues[u]}else{const u=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[u]}const i=e.argumentCallback?e.argumentCallback(n):n;return a[i]}}const DN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$N={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},LN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},FN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},zN=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},UN={ordinalNumber:zN,era:Fp({values:DN,defaultWidth:"wide"}),quarter:Fp({values:jN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fp({values:$N,defaultWidth:"wide"}),day:Fp({values:LN,defaultWidth:"wide"}),dayPeriod:Fp({values:FN,defaultWidth:"wide",formattingValues:qN,defaultFormattingWidth:"wide"})};function qp(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=n.match(a);if(!i)return null;const u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?GN(s,d=>d.test(u)):VN(s,d=>d.test(u));let f;f=e.valueCallback?e.valueCallback(c):c,f=t.valueCallback?t.valueCallback(f):f;const m=n.slice(u.length);return{value:f,rest:m}}}function VN(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function GN(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function KN(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],i=n.match(e.parsePattern);if(!i)return null;let u=e.valueCallback?e.valueCallback(i[0]):i[0];u=t.valueCallback?t.valueCallback(u):u;const s=n.slice(a.length);return{value:u,rest:s}}}const QN=/^(\d+)(th|st|nd|rd)?/i,YN=/\d+/i,XN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ZN={any:[/^b/i,/^(a|c)/i]},JN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},eR={any:[/1/i,/2/i,/3/i,/4/i]},nR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},rR={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},aR={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oR={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},iR={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pR={ordinalNumber:KN({matchPattern:QN,parsePattern:YN,valueCallback:e=>parseInt(e,10)}),era:qp({matchPatterns:XN,defaultMatchWidth:"wide",parsePatterns:ZN,defaultParseWidth:"any"}),quarter:qp({matchPatterns:JN,defaultMatchWidth:"wide",parsePatterns:eR,defaultParseWidth:"any",valueCallback:e=>e+1}),month:qp({matchPatterns:nR,defaultMatchWidth:"wide",parsePatterns:tR,defaultParseWidth:"any"}),day:qp({matchPatterns:rR,defaultMatchWidth:"wide",parsePatterns:aR,defaultParseWidth:"any"}),dayPeriod:qp({matchPatterns:oR,defaultMatchWidth:"any",parsePatterns:iR,defaultParseWidth:"any"})},h3={code:"en-US",formatDistance:HN,formatLong:kN,formatRelative:TN,localize:UN,match:pR,options:{weekStartsOn:0,firstWeekContainsDate:1}};function uR(e){const n=Cn(e);return PN(n,_N(n))+1}function v3(e){const n=Cn(e),t=+di(n)-+wN(n);return Math.round(t/d3)+1}function mg(e,n){var m,d,v,y;const t=Cn(e),r=t.getFullYear(),a=Vi(),i=(n==null?void 0:n.firstWeekContainsDate)??((d=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,u=Sn(e,0);u.setFullYear(r+1,0,i),u.setHours(0,0,0,0);const s=Na(u,n),c=Sn(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,n);return t.getTime()>=s.getTime()?r+1:t.getTime()>=f.getTime()?r:r-1}function sR(e,n){var s,c,f,m;const t=Vi(),r=(n==null?void 0:n.firstWeekContainsDate)??((c=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=mg(e,n),i=Sn(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,n)}function g3(e,n){const t=Cn(e),r=+Na(t,n)-+sR(t,n);return Math.round(r/d3)+1}function Je(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const Pa={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return Je(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):Je(t+1,2)},d(e,n){return Je(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return Je(e.getHours()%12||12,n.length)},H(e,n){return Je(e.getHours(),n.length)},m(e,n){return Je(e.getMinutes(),n.length)},s(e,n){return Je(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return Je(a,n.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},AI={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return Pa.y(e,n)},Y:function(e,n,t,r){const a=mg(e,r),i=a>0?a:1-a;if(n==="YY"){const u=i%100;return Je(u,2)}return n==="Yo"?t.ordinalNumber(i,{unit:"year"}):Je(i,n.length)},R:function(e,n){const t=m3(e);return Je(t,n.length)},u:function(e,n){const t=e.getFullYear();return Je(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Je(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return Pa.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const a=g3(e,r);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):Je(a,n.length)},I:function(e,n,t){const r=v3(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):Je(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Pa.d(e,n)},D:function(e,n,t){const r=uR(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return Je(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return Je(i,n.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return Je(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Pa.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Pa.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Pa.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Pa.s(e,n)},S:function(e,n){return Pa.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return OI(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return OI(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+_I(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+_I(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return Je(r,n.length)},T:function(e,n,t){const r=e.getTime();return Je(r,n.length)}};function _I(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?t+String(a):t+String(a)+n+Je(i,2)}function OI(e,n){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):oo(e,n)}function oo(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return t+a+n+i}const HI=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},y3=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},lR=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return HI(e,n);let i;switch(r){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",HI(r,n)).replace("{{time}}",y3(a,n))},C6={p:y3,P:lR},cR=/^D+$/,fR=/^Y+$/,dR=["D","DD","YY","YYYY"];function b3(e){return cR.test(e)}function I3(e){return fR.test(e)}function N6(e,n,t){const r=mR(e,n,t);if(console.warn(r),dR.includes(e))throw new RangeError(r)}function mR(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,gR=/^'([^]*?)'?$/,yR=/''/g,bR=/[a-zA-Z]/;function IR(e,n,t){var m,d,v,y;const r=Vi(),a=r.locale??h3,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,u=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,s=Cn(e);if(!SN(s))throw new RangeError("Invalid time value");let c=n.match(vR).map(B=>{const I=B[0];if(I==="p"||I==="P"){const b=C6[I];return b(B,a.formatLong)}return B}).join("").match(hR).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:BR(B)};if(AI[I])return{isToken:!0,value:B};if(I.match(bR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const f={firstWeekContainsDate:i,weekStartsOn:u,locale:a};return c.map(B=>{if(!B.isToken)return B.value;const I=B.value;(I3(I)||b3(I))&&N6(I,n,String(e));const b=AI[I[0]];return b(s,I,a.localize,f)}).join("")}function BR(e){const n=e.match(gR);return n?n[1].replace(yR,"'"):e}function xR(){return Object.assign({},Vi())}function PR(e){let t=Cn(e).getDay();return t===0&&(t=7),t}function wR(e,n){const t=n instanceof Date?Sn(n,0):new n(0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}const WR=10;class B3{constructor(){xe(this,"subPriority",0)}validate(n,t){return!0}}class SR extends B3{constructor(n,t,r,a,i){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class MR extends B3{constructor(){super(...arguments);xe(this,"priority",WR);xe(this,"subPriority",-1)}set(t,r){return r.timestampIsSet?t:Sn(t,wR(t,Date))}}class Ge{run(n,t,r,a){const i=this.parse(n,t,r,a);return i?{setter:new SR(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(n,t,r){return!0}}class AR extends Ge{constructor(){super(...arguments);xe(this,"priority",140);xe(this,"incompatibleTokens",["R","u","t","T"])}parse(t,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"});case"GGGGG":return a.era(t,{width:"narrow"});case"GGGG":default:return a.era(t,{width:"wide"})||a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"})}}set(t,r,a){return r.era=a,t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}const Mn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function An(e,n){return e&&{value:n(e.value),rest:e.rest}}function vn(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function yr(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,u=t[5]?parseInt(t[5],10):0;return{value:r*(a*IN+i*bN+u*BN),rest:n.slice(t[0].length)}}function x3(e){return vn(Mn.anyDigitsSigned,e)}function Bn(e,n){switch(e){case 1:return vn(Mn.singleDigit,n);case 2:return vn(Mn.twoDigits,n);case 3:return vn(Mn.threeDigits,n);case 4:return vn(Mn.fourDigits,n);default:return vn(new RegExp("^\\d{1,"+e+"}"),n)}}function N0(e,n){switch(e){case 1:return vn(Mn.singleDigitSigned,n);case 2:return vn(Mn.twoDigitsSigned,n);case 3:return vn(Mn.threeDigitsSigned,n);case 4:return vn(Mn.fourDigitsSigned,n);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),n)}}function hg(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function P3(e,n){const t=n>0,r=t?n:1-n;let a;if(r<=50)a=e||100;else{const i=r+50,u=Math.trunc(i/100)*100,s=e>=i%100;a=e+u-(s?100:0)}return t?a:1-a}function w3(e){return e%400===0||e%4===0&&e%100!==0}class _R extends Ge{constructor(){super(...arguments);xe(this,"priority",130);xe(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,r,a){const i=u=>({year:u,isTwoDigitYear:r==="yy"});switch(r){case"y":return An(Bn(4,t),i);case"yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a){const i=t.getFullYear();if(a.isTwoDigitYear){const s=P3(a.year,i);return t.setFullYear(s,0,1),t.setHours(0,0,0,0),t}const u=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(u,0,1),t.setHours(0,0,0,0),t}}class OR extends Ge{constructor(){super(...arguments);xe(this,"priority",130);xe(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,r,a){const i=u=>({year:u,isTwoDigitYear:r==="YY"});switch(r){case"Y":return An(Bn(4,t),i);case"Yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a,i){const u=mg(t,i);if(a.isTwoDigitYear){const c=P3(a.year,u);return t.setFullYear(c,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}const s=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(s,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}}class HR extends Ge{constructor(){super(...arguments);xe(this,"priority",130);xe(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,r){return N0(r==="R"?4:r.length,t)}set(t,r,a){const i=Sn(t,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),di(i)}}class CR extends Ge{constructor(){super(...arguments);xe(this,"priority",130);xe(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,r){return N0(r==="u"?4:r.length,t)}set(t,r,a){return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class NR extends Ge{constructor(){super(...arguments);xe(this,"priority",120);xe(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"Q":case"QQ":return Bn(r.length,t);case"Qo":return a.ordinalNumber(t,{unit:"quarter"});case"QQQ":return a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(t,{width:"wide",context:"formatting"})||a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class RR extends Ge{constructor(){super(...arguments);xe(this,"priority",120);xe(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"q":case"qq":return Bn(r.length,t);case"qo":return a.ordinalNumber(t,{unit:"quarter"});case"qqq":return a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(t,{width:"wide",context:"standalone"})||a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class kR extends Ge{constructor(){super(...arguments);xe(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);xe(this,"priority",110)}parse(t,r,a){const i=u=>u-1;switch(r){case"M":return An(vn(Mn.month,t),i);case"MM":return An(Bn(2,t),i);case"Mo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"MMM":return a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(t,{width:"wide",context:"formatting"})||a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}class ER extends Ge{constructor(){super(...arguments);xe(this,"priority",110);xe(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,r,a){const i=u=>u-1;switch(r){case"L":return An(vn(Mn.month,t),i);case"LL":return An(Bn(2,t),i);case"Lo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"LLL":return a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(t,{width:"wide",context:"standalone"})||a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}function TR(e,n,t){const r=Cn(e),a=g3(r,t)-n;return r.setDate(r.getDate()-a*7),r}class DR extends Ge{constructor(){super(...arguments);xe(this,"priority",100);xe(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,r,a){switch(r){case"w":return vn(Mn.week,t);case"wo":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a,i){return Na(TR(t,a,i),i)}}function jR(e,n){const t=Cn(e),r=v3(t)-n;return t.setDate(t.getDate()-r*7),t}class $R extends Ge{constructor(){super(...arguments);xe(this,"priority",100);xe(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,r,a){switch(r){case"I":return vn(Mn.week,t);case"Io":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a){return di(jR(t,a))}}const LR=[31,28,31,30,31,30,31,31,30,31,30,31],FR=[31,29,31,30,31,30,31,31,30,31,30,31];class qR extends Ge{constructor(){super(...arguments);xe(this,"priority",90);xe(this,"subPriority",1);xe(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"d":return vn(Mn.date,t);case"do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear(),i=w3(a),u=t.getMonth();return i?r>=1&&r<=FR[u]:r>=1&&r<=LR[u]}set(t,r,a){return t.setDate(a),t.setHours(0,0,0,0),t}}class zR extends Ge{constructor(){super(...arguments);xe(this,"priority",90);xe(this,"subpriority",1);xe(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,r,a){switch(r){case"D":case"DD":return vn(Mn.dayOfYear,t);case"Do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear();return w3(a)?r>=1&&r<=366:r>=1&&r<=365}set(t,r,a){return t.setMonth(0,a),t.setHours(0,0,0,0),t}}function vg(e,n,t){var d,v,y,B;const r=Vi(),a=(t==null?void 0:t.weekStartsOn)??((v=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(y=r.locale)==null?void 0:y.options)==null?void 0:B.weekStartsOn)??0,i=Cn(e),u=i.getDay(),c=(n%7+7)%7,f=7-a,m=n<0||n>6?n-(u+f)%7:(c+f)%7-(u+f)%7;return H0(i,m)}class UR extends Ge{constructor(){super(...arguments);xe(this,"priority",90);xe(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=vg(t,a,i),t.setHours(0,0,0,0),t}}class VR extends Ge{constructor(){super(...arguments);xe(this,"priority",90);xe(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,r,a,i){const u=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return An(Bn(r.length,t),u);case"eo":return An(a.ordinalNumber(t,{unit:"day"}),u);case"eee":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeeee":return a.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=vg(t,a,i),t.setHours(0,0,0,0),t}}class GR extends Ge{constructor(){super(...arguments);xe(this,"priority",90);xe(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,r,a,i){const u=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return An(Bn(r.length,t),u);case"co":return An(a.ordinalNumber(t,{unit:"day"}),u);case"ccc":return a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"ccccc":return a.day(t,{width:"narrow",context:"standalone"});case"cccccc":return a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(t,{width:"wide",context:"standalone"})||a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=vg(t,a,i),t.setHours(0,0,0,0),t}}function KR(e,n){const t=Cn(e),r=PR(t),a=n-r;return H0(t,a)}class QR extends Ge{constructor(){super(...arguments);xe(this,"priority",90);xe(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,r,a){const i=u=>u===0?7:u;switch(r){case"i":case"ii":return Bn(r.length,t);case"io":return a.ordinalNumber(t,{unit:"day"});case"iii":return An(a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiii":return An(a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiiii":return An(a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiii":default:return An(a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i)}}validate(t,r){return r>=1&&r<=7}set(t,r,a){return t=KR(t,a),t.setHours(0,0,0,0),t}}class YR extends Ge{constructor(){super(...arguments);xe(this,"priority",80);xe(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(hg(a),0,0,0),t}}class XR extends Ge{constructor(){super(...arguments);xe(this,"priority",80);xe(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(hg(a),0,0,0),t}}class ZR extends Ge{constructor(){super(...arguments);xe(this,"priority",80);xe(this,"incompatibleTokens",["a","b","t","T"])}parse(t,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(hg(a),0,0,0),t}}class JR extends Ge{constructor(){super(...arguments);xe(this,"priority",70);xe(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,r,a){switch(r){case"h":return vn(Mn.hour12h,t);case"ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=12}set(t,r,a){const i=t.getHours()>=12;return i&&a<12?t.setHours(a+12,0,0,0):!i&&a===12?t.setHours(0,0,0,0):t.setHours(a,0,0,0),t}}class ek extends Ge{constructor(){super(...arguments);xe(this,"priority",70);xe(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,r,a){switch(r){case"H":return vn(Mn.hour23h,t);case"Ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=23}set(t,r,a){return t.setHours(a,0,0,0),t}}class nk extends Ge{constructor(){super(...arguments);xe(this,"priority",70);xe(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,r,a){switch(r){case"K":return vn(Mn.hour11h,t);case"Ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.getHours()>=12&&a<12?t.setHours(a+12,0,0,0):t.setHours(a,0,0,0),t}}class tk extends Ge{constructor(){super(...arguments);xe(this,"priority",70);xe(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,r,a){switch(r){case"k":return vn(Mn.hour24h,t);case"ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=24}set(t,r,a){const i=a<=24?a%24:a;return t.setHours(i,0,0,0),t}}class rk extends Ge{constructor(){super(...arguments);xe(this,"priority",60);xe(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"m":return vn(Mn.minute,t);case"mo":return a.ordinalNumber(t,{unit:"minute"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setMinutes(a,0,0),t}}class ak extends Ge{constructor(){super(...arguments);xe(this,"priority",50);xe(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"s":return vn(Mn.second,t);case"so":return a.ordinalNumber(t,{unit:"second"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setSeconds(a,0),t}}class ok extends Ge{constructor(){super(...arguments);xe(this,"priority",30);xe(this,"incompatibleTokens",["t","T"])}parse(t,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return An(Bn(r.length,t),a)}set(t,r,a){return t.setMilliseconds(a),t}}class ik extends Ge{constructor(){super(...arguments);xe(this,"priority",10);xe(this,"incompatibleTokens",["t","T","x"])}parse(t,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,t);case"XX":return yr(gr.basic,t);case"XXXX":return yr(gr.basicOptionalSeconds,t);case"XXXXX":return yr(gr.extendedOptionalSeconds,t);case"XXX":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Sn(t,t.getTime()-C0(t)-a)}}class pk extends Ge{constructor(){super(...arguments);xe(this,"priority",10);xe(this,"incompatibleTokens",["t","T","X"])}parse(t,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,t);case"xx":return yr(gr.basic,t);case"xxxx":return yr(gr.basicOptionalSeconds,t);case"xxxxx":return yr(gr.extendedOptionalSeconds,t);case"xxx":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Sn(t,t.getTime()-C0(t)-a)}}class uk extends Ge{constructor(){super(...arguments);xe(this,"priority",40);xe(this,"incompatibleTokens","*")}parse(t){return x3(t)}set(t,r,a){return[Sn(t,a*1e3),{timestampIsSet:!0}]}}class sk extends Ge{constructor(){super(...arguments);xe(this,"priority",20);xe(this,"incompatibleTokens","*")}parse(t){return x3(t)}set(t,r,a){return[Sn(t,a),{timestampIsSet:!0}]}}const lk={G:new AR,y:new _R,Y:new OR,R:new HR,u:new CR,Q:new NR,q:new RR,M:new kR,L:new ER,w:new DR,I:new $R,d:new qR,D:new zR,E:new UR,e:new VR,c:new GR,i:new QR,a:new YR,b:new XR,B:new ZR,h:new JR,H:new ek,K:new nk,k:new tk,m:new rk,s:new ak,S:new ok,X:new ik,x:new pk,t:new uk,T:new sk},ck=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dk=/^'([^]*?)'?$/,mk=/''/g,hk=/\S/,vk=/[a-zA-Z]/;function gk(e,n,t,r){var I,b,W,S;const a=xR(),i=a.locale??h3,u=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,s=a.weekStartsOn??((S=(W=a.locale)==null?void 0:W.options)==null?void 0:S.weekStartsOn)??0,c={firstWeekContainsDate:u,weekStartsOn:s,locale:i},f=[new MR],m=n.match(fk).map(M=>{const O=M[0];if(O in C6){const P=C6[O];return P(M,i.formatLong)}return M}).join("").match(ck),d=[];for(let M of m){I3(M)&&N6(M,n,e),b3(M)&&N6(M,n,e);const O=M[0],P=lk[O];if(P){const{incompatibleTokens:A}=P;if(Array.isArray(A)){const w=d.find(H=>A.includes(H.token)||H.token===O);if(w)throw new RangeError(`The format string mustn't contain \`${w.fullToken}\` and \`${M}\` at the same time`)}else if(P.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${M}\` and any other token at the same time`);d.push({token:O,fullToken:M});const N=P.run(e,M,i.match,c);if(!N)return Sn(t,NaN);f.push(N.setter),e=N.rest}else{if(O.match(vk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(M==="''"?M="'":O==="'"&&(M=yk(M)),e.indexOf(M)===0)e=e.slice(M.length);else return Sn(t,NaN)}}if(e.length>0&&hk.test(e))return Sn(t,NaN);const v=f.map(M=>M.priority).sort((M,O)=>O-M).filter((M,O,P)=>P.indexOf(M)===O).map(M=>f.filter(O=>O.priority===M).sort((O,P)=>P.subPriority-O.subPriority)).map(M=>M[0]);let y=Cn(t);if(isNaN(y.getTime()))return Sn(t,NaN);const B={};for(const M of v){if(!M.validate(y,c))return Sn(t,NaN);const O=M.set(y,B,c);Array.isArray(O)?(y=O[0],Object.assign(B,O[1])):y=O}return Sn(t,y)}function yk(e){return e.match(dk)[1].replace(mk,"'")}const pr=e=>{if(!e)return new Date(NaN);const n=e.trim(),t=n.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(t){const[,a,i,u]=t;return new Date(parseInt(a),parseInt(i)-1,parseInt(u),12,0,0)}const r=n.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,u]=r;return new Date(parseInt(u),parseInt(i)-1,parseInt(a),12,0,0)}return gk(e,"dd-MM-yyyy",new Date)},W3=["january","february","march","april","may","june","july","august","september","october","november","december"],S3=e=>{if(e==="all"||!e)return[];const[n,t]=e.split("-"),r=W3.indexOf(n.toLowerCase()),a=parseInt(t)||2026;if(r===-1)return[];const i=AN(new Date(a,r)),u=MN(new Date(a,r)),s=[];let c=i,f=1;for(;c<=u;){let m=H0(c,6);m>u&&(m=u),s.push({value:`${n}-week${f}`,label:`${n.charAt(0).toUpperCase()+n.slice(1,3)} ${c.getDate()}-${m.getDate()}`,startDate:c,endDate:m}),c=H0(m,1),f++}return s},M3=(e,n)=>{if(isNaN(e.getTime()))return!1;const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return t>=n.startDate&&t<=n.endDate},R6=(e,n)=>{if(n==="all")return!0;if(isNaN(e.getTime()))return!1;const[t,r]=n.split("-"),a=W3.indexOf(t.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},bk=e=>!e||isNaN(e.getTime())?"N/A":IR(e,"MMM dd, yyyy"),k6=e=>{const n=e.length,t=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:n,botHandled:t,humanHandled:r,botPercentage:n>0?t/n*100:0,humanPercentage:n>0?r/n*100:0,escalationRate:n>0?r/n*100:0}},E6=e=>{const n=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=n.get(a)||0;n.set(a,i+1)});const t=e.length;return Array.from(n.entries()).map(([r,a])=>({channel:r,count:a,percentage:t>0?a/t*100:0})).sort((r,a)=>a.count-r.count)},A3=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=t.get(r.product)||0;t.set(r.product,a+1)}}),Array.from(t.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},T6=(e,n=10)=>{const t=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=t.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,t.set(r.issue,a)}}),Array.from(t.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,n)},Ik=(e,n="february-2026")=>{if(n==="all"){const t=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const u=pr(i.createdAt);if(!isNaN(u.getTime())){const s=t[u.getMonth()],c=`${s.charAt(0).toUpperCase()}${s.slice(1,3)} ${u.getFullYear()}`;r.add(`${c}|${s}-${u.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[u,s]=i.split("|"),c=e.filter(v=>R6(pr(v.createdAt),s)),f=c.length,m=c.filter(v=>v.handled==="Human").length,d=f>0?m/f*100:0;return{week:u,totalSessions:f,humanEscalations:m,escalationRate:d}}).sort((i,u)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${u.week}`).getTime()).filter(i=>i.totalSessions>0)}else return S3(n).map(r=>{const a=e.filter(c=>{const f=pr(c.createdAt);return M3(f,r)}),i=a.length,u=a.filter(c=>c.handled==="Human").length,s=a.length>0?u/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:u,escalationRate:s}})},Bk=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.issue&&r.issue.trim()!==""){t.has(r.issue)||t.set(r.issue,new Map);const a=t.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const u=a.get(i),s=r.product&&r.product.trim()!==""?r.product:"Unknown";u.set(s,(u.get(s)||0)+1)}}),Array.from(t.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([s,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:s,count:m,products:f}}).sort((s,c)=>c.count-s.count),u=i.reduce((s,c)=>s+c.count,0);return{issue:r,count:u,subIssues:i}}).sort((r,a)=>a.count-r.count)},xk=(e,n="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(s=>[s.channel,s.createdAt,s.product||"",s.issue||"",s.subType||"",s.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),u=URL.createObjectURL(a);i.setAttribute("href",u),i.setAttribute("download",n),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function Pk({metrics:e}){const n=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",t=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return _.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(fN,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(KC,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:_.jsx(vN,{className:"w-6 h-6 text-orange-600"})})]})})}),_.jsx(Ut,{className:t(e.escalationRate),children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),_.jsxs("p",{className:`text-3xl font-bold mt-2 ${n(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),_.jsx("div",{className:`p-3 rounded-full ${n(e.escalationRate).replace("text","bg").replace("600","100")}`,children:_.jsx(mN,{className:`w-6 h-6 ${n(e.escalationRate)}`})})]})})})]})}var Pf,CI;function bt(){if(CI)return Pf;CI=1;var e=Array.isArray;return Pf=e,Pf}var wf,NI;function _3(){if(NI)return wf;NI=1;var e=typeof l0=="object"&&l0&&l0.Object===Object&&l0;return wf=e,wf}var Wf,RI;function Sr(){if(RI)return Wf;RI=1;var e=_3(),n=typeof self=="object"&&self&&self.Object===Object&&self,t=e||n||Function("return this")();return Wf=t,Wf}var Sf,kI;function Ku(){if(kI)return Sf;kI=1;var e=Sr(),n=e.Symbol;return Sf=n,Sf}var Mf,EI;function wk(){if(EI)return Mf;EI=1;var e=Ku(),n=Object.prototype,t=n.hasOwnProperty,r=n.toString,a=e?e.toStringTag:void 0;function i(u){var s=t.call(u,a),c=u[a];try{u[a]=void 0;var f=!0}catch{}var m=r.call(u);return f&&(s?u[a]=c:delete u[a]),m}return Mf=i,Mf}var Af,TI;function Wk(){if(TI)return Af;TI=1;var e=Object.prototype,n=e.toString;function t(r){return n.call(r)}return Af=t,Af}var _f,DI;function Yr(){if(DI)return _f;DI=1;var e=Ku(),n=wk(),t=Wk(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function u(s){return s==null?s===void 0?a:r:i&&i in Object(s)?n(s):t(s)}return _f=u,_f}var Of,jI;function Xr(){if(jI)return Of;jI=1;function e(n){return n!=null&&typeof n=="object"}return Of=e,Of}var Hf,$I;function Gi(){if($I)return Hf;$I=1;var e=Yr(),n=Xr(),t="[object Symbol]";function r(a){return typeof a=="symbol"||n(a)&&e(a)==t}return Hf=r,Hf}var Cf,LI;function gg(){if(LI)return Cf;LI=1;var e=bt(),n=Gi(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,u){if(e(i))return!1;var s=typeof i;return s=="number"||s=="symbol"||s=="boolean"||i==null||n(i)?!0:r.test(i)||!t.test(i)||u!=null&&i in Object(u)}return Cf=a,Cf}var Nf,FI;function Ta(){if(FI)return Nf;FI=1;function e(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}return Nf=e,Nf}var Rf,qI;function yg(){if(qI)return Rf;qI=1;var e=Yr(),n=Ta(),t="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function u(s){if(!n(s))return!1;var c=e(s);return c==r||c==a||c==t||c==i}return Rf=u,Rf}var kf,zI;function Sk(){if(zI)return kf;zI=1;var e=Sr(),n=e["__core-js_shared__"];return kf=n,kf}var Ef,UI;function Mk(){if(UI)return Ef;UI=1;var e=Sk(),n=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function t(r){return!!n&&n in r}return Ef=t,Ef}var Tf,VI;function O3(){if(VI)return Tf;VI=1;var e=Function.prototype,n=e.toString;function t(r){if(r!=null){try{return n.call(r)}catch{}try{return r+""}catch{}}return""}return Tf=t,Tf}var Df,GI;function Ak(){if(GI)return Df;GI=1;var e=yg(),n=Mk(),t=Ta(),r=O3(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,c=u.toString,f=s.hasOwnProperty,m=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!t(v)||n(v))return!1;var y=e(v)?m:i;return y.test(r(v))}return Df=d,Df}var jf,KI;function _k(){if(KI)return jf;KI=1;function e(n,t){return n==null?void 0:n[t]}return jf=e,jf}var $f,QI;function Bo(){if(QI)return $f;QI=1;var e=Ak(),n=_k();function t(r,a){var i=n(r,a);return e(i)?i:void 0}return $f=t,$f}var Lf,YI;function Ll(){if(YI)return Lf;YI=1;var e=Bo(),n=e(Object,"create");return Lf=n,Lf}var Ff,XI;function Ok(){if(XI)return Ff;XI=1;var e=Ll();function n(){this.__data__=e?e(null):{},this.size=0}return Ff=n,Ff}var qf,ZI;function Hk(){if(ZI)return qf;ZI=1;function e(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}return qf=e,qf}var zf,JI;function Ck(){if(JI)return zf;JI=1;var e=Ll(),n="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function a(i){var u=this.__data__;if(e){var s=u[i];return s===n?void 0:s}return r.call(u,i)?u[i]:void 0}return zf=a,zf}var Uf,eB;function Nk(){if(eB)return Uf;eB=1;var e=Ll(),n=Object.prototype,t=n.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:t.call(i,a)}return Uf=r,Uf}var Vf,nB;function Rk(){if(nB)return Vf;nB=1;var e=Ll(),n="__lodash_hash_undefined__";function t(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?n:a,this}return Vf=t,Vf}var Gf,tB;function kk(){if(tB)return Gf;tB=1;var e=Ok(),n=Hk(),t=Ck(),r=Nk(),a=Rk();function i(u){var s=-1,c=u==null?0:u.length;for(this.clear();++s<c;){var f=u[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,Gf=i,Gf}var Kf,rB;function Ek(){if(rB)return Kf;rB=1;function e(){this.__data__=[],this.size=0}return Kf=e,Kf}var Qf,aB;function bg(){if(aB)return Qf;aB=1;function e(n,t){return n===t||n!==n&&t!==t}return Qf=e,Qf}var Yf,oB;function Fl(){if(oB)return Yf;oB=1;var e=bg();function n(t,r){for(var a=t.length;a--;)if(e(t[a][0],r))return a;return-1}return Yf=n,Yf}var Xf,iB;function Tk(){if(iB)return Xf;iB=1;var e=Fl(),n=Array.prototype,t=n.splice;function r(a){var i=this.__data__,u=e(i,a);if(u<0)return!1;var s=i.length-1;return u==s?i.pop():t.call(i,u,1),--this.size,!0}return Xf=r,Xf}var Zf,pB;function Dk(){if(pB)return Zf;pB=1;var e=Fl();function n(t){var r=this.__data__,a=e(r,t);return a<0?void 0:r[a][1]}return Zf=n,Zf}var Jf,uB;function jk(){if(uB)return Jf;uB=1;var e=Fl();function n(t){return e(this.__data__,t)>-1}return Jf=n,Jf}var ed,sB;function $k(){if(sB)return ed;sB=1;var e=Fl();function n(t,r){var a=this.__data__,i=e(a,t);return i<0?(++this.size,a.push([t,r])):a[i][1]=r,this}return ed=n,ed}var nd,lB;function ql(){if(lB)return nd;lB=1;var e=Ek(),n=Tk(),t=Dk(),r=jk(),a=$k();function i(u){var s=-1,c=u==null?0:u.length;for(this.clear();++s<c;){var f=u[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,nd=i,nd}var td,cB;function Ig(){if(cB)return td;cB=1;var e=Bo(),n=Sr(),t=e(n,"Map");return td=t,td}var rd,fB;function Lk(){if(fB)return rd;fB=1;var e=kk(),n=ql(),t=Ig();function r(){this.size=0,this.__data__={hash:new e,map:new(t||n),string:new e}}return rd=r,rd}var ad,dB;function Fk(){if(dB)return ad;dB=1;function e(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}return ad=e,ad}var od,mB;function zl(){if(mB)return od;mB=1;var e=Fk();function n(t,r){var a=t.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return od=n,od}var id,hB;function qk(){if(hB)return id;hB=1;var e=zl();function n(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}return id=n,id}var pd,vB;function zk(){if(vB)return pd;vB=1;var e=zl();function n(t){return e(this,t).get(t)}return pd=n,pd}var ud,gB;function Uk(){if(gB)return ud;gB=1;var e=zl();function n(t){return e(this,t).has(t)}return ud=n,ud}var sd,yB;function Vk(){if(yB)return sd;yB=1;var e=zl();function n(t,r){var a=e(this,t),i=a.size;return a.set(t,r),this.size+=a.size==i?0:1,this}return sd=n,sd}var ld,bB;function Bg(){if(bB)return ld;bB=1;var e=Lk(),n=qk(),t=zk(),r=Uk(),a=Vk();function i(u){var s=-1,c=u==null?0:u.length;for(this.clear();++s<c;){var f=u[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,ld=i,ld}var cd,IB;function H3(){if(IB)return cd;IB=1;var e=Bg(),n="Expected a function";function t(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(n);var i=function(){var u=arguments,s=a?a.apply(this,u):u[0],c=i.cache;if(c.has(s))return c.get(s);var f=r.apply(this,u);return i.cache=c.set(s,f)||c,f};return i.cache=new(t.Cache||e),i}return t.Cache=e,cd=t,cd}var fd,BB;function Gk(){if(BB)return fd;BB=1;var e=H3(),n=500;function t(r){var a=e(r,function(u){return i.size===n&&i.clear(),u}),i=a.cache;return a}return fd=t,fd}var dd,xB;function Kk(){if(xB)return dd;xB=1;var e=Gk(),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(n,function(u,s,c,f){i.push(c?f.replace(t,"$1"):s||u)}),i});return dd=r,dd}var md,PB;function xg(){if(PB)return md;PB=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=Array(a);++r<a;)i[r]=t(n[r],r,n);return i}return md=e,md}var hd,wB;function Qk(){if(wB)return hd;wB=1;var e=Ku(),n=xg(),t=bt(),r=Gi(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function u(s){if(typeof s=="string")return s;if(t(s))return n(s,u)+"";if(r(s))return i?i.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}return hd=u,hd}var vd,WB;function C3(){if(WB)return vd;WB=1;var e=Qk();function n(t){return t==null?"":e(t)}return vd=n,vd}var gd,SB;function N3(){if(SB)return gd;SB=1;var e=bt(),n=gg(),t=Kk(),r=C3();function a(i,u){return e(i)?i:n(i,u)?[i]:t(r(i))}return gd=a,gd}var yd,MB;function Ul(){if(MB)return yd;MB=1;var e=Gi();function n(t){if(typeof t=="string"||e(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return yd=n,yd}var bd,AB;function Pg(){if(AB)return bd;AB=1;var e=N3(),n=Ul();function t(r,a){a=e(a,r);for(var i=0,u=a.length;r!=null&&i<u;)r=r[n(a[i++])];return i&&i==u?r:void 0}return bd=t,bd}var Id,_B;function R3(){if(_B)return Id;_B=1;var e=Pg();function n(t,r,a){var i=t==null?void 0:e(t,r);return i===void 0?a:i}return Id=n,Id}var Yk=R3();const Ot=Xe(Yk);var Bd,OB;function Xk(){if(OB)return Bd;OB=1;function e(n){return n==null}return Bd=e,Bd}var Zk=Xk();const ke=Xe(Zk);var xd,HB;function Jk(){if(HB)return xd;HB=1;var e=Yr(),n=bt(),t=Xr(),r="[object String]";function a(i){return typeof i=="string"||!n(i)&&t(i)&&e(i)==r}return xd=a,xd}var eE=Jk();const Qu=Xe(eE);var nE=yg();const Re=Xe(nE);var tE=Ta();const Ki=Xe(tE);var Pd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CB;function rE(){if(CB)return Qe;CB=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var W=b.$$typeof;switch(W){case e:switch(b=b.type,b){case t:case a:case r:case f:case m:return b;default:switch(b=b&&b.$$typeof,b){case s:case u:case c:case v:case d:case i:return b;default:return W}}case n:return W}}}return Qe.ContextConsumer=u,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=t,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=n,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=m,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===u},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===t},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===n},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===m},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===t||b===a||b===r||b===f||b===m||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===u||b.$$typeof===c||b.$$typeof===B||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var NB;function aE(){return NB||(NB=1,Pd.exports=rE()),Pd.exports}var oE=aE(),wd,RB;function k3(){if(RB)return wd;RB=1;var e=Yr(),n=Xr(),t="[object Number]";function r(a){return typeof a=="number"||n(a)&&e(a)==t}return wd=r,wd}var Wd,kB;function iE(){if(kB)return Wd;kB=1;var e=k3();function n(t){return e(t)&&t!=+t}return Wd=n,Wd}var pE=iE();const Qi=Xe(pE);var uE=k3();const sE=Xe(uE);var ot=function(n){return n===0?0:n>0?1:-1},so=function(n){return Qu(n)&&n.indexOf("%")===n.length-1},ce=function(n){return sE(n)&&!Qi(n)},Tn=function(n){return ce(n)||Qu(n)},lE=0,Da=function(n){var t=++lE;return"".concat(n||"").concat(t)},it=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!ce(n)&&!Qu(n))return r;var i;if(so(n)){var u=n.indexOf("%");i=t*parseFloat(n.slice(0,u))/100}else i=+n;return Qi(i)&&(i=r),a&&i>t&&(i=t),i},Sa=function(n){if(!n)return null;var t=Object.keys(n);return t&&t.length?n[t[0]]:null},cE=function(n){if(!Array.isArray(n))return!1;for(var t=n.length,r={},a=0;a<t;a++)if(!r[n[a]])r[n[a]]=!0;else return!0;return!1},hn=function(n,t){return ce(n)&&ce(t)?function(r){return n+r*(t-n)}:function(){return t}};function R0(e,n,t){return!e||!e.length?null:e.find(function(r){return r&&(typeof n=="function"?n(r):Ot(r,n))===t})}var fE=function(n){if(!n||!n.length)return null;for(var t=n.length,r=0,a=0,i=0,u=0,s=1/0,c=-1/0,f=0,m=0,d=0;d<t;d++)f=n[d].cx||0,m=n[d].cy||0,r+=f,a+=m,i+=f*m,u+=f*f,s=Math.min(s,f),c=Math.max(c,f);var v=t*u!==r*r?(t*i-r*a)/(t*u-r*r):0;return{xmin:s,xmax:c,a:v,b:(a-v*r)/t}};function si(e,n){for(var t in e)if({}.hasOwnProperty.call(e,t)&&(!{}.hasOwnProperty.call(n,t)||e[t]!==n[t]))return!1;for(var r in n)if({}.hasOwnProperty.call(n,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function D6(e){"@babel/helpers - typeof";return D6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D6(e)}var dE=["viewBox","children"],mE=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],EB=["points","pathLength"],Sd={svg:dE,polygon:EB,polyline:EB},wg=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],k0=function(n,t){if(!n||typeof n=="function"||typeof n=="boolean")return null;var r=n;if(U.isValidElement(n)&&(r=n.props),!Ki(r))return null;var a={};return Object.keys(r).forEach(function(i){wg.includes(i)&&(a[i]=t||function(u){return r[i](r,u)})}),a},hE=function(n,t,r){return function(a){return n(t,r,a),null}},Ra=function(n,t,r){if(!Ki(n)||D6(n)!=="object")return null;var a=null;return Object.keys(n).forEach(function(i){var u=n[i];wg.includes(i)&&typeof u=="function"&&(a||(a={}),a[i]=hE(u,t,r))}),a},vE=["children"],gE=["children"];function TB(e,n){if(e==null)return{};var t=yE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function yE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function j6(e){"@babel/helpers - typeof";return j6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j6(e)}var DB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(n){return typeof n=="string"?n:n?n.displayName||n.name||"Component":""},jB=null,Md=null,Wg=function e(n){if(n===jB&&Array.isArray(Md))return Md;var t=[];return U.Children.forEach(n,function(r){ke(r)||(oE.isFragment(r)?t=t.concat(e(r.props.children)):t.push(r))}),Md=t,jB=n,t};function ut(e,n){var t=[],r=[];return Array.isArray(n)?r=n.map(function(a){return Ur(a)}):r=[Ur(n)],Wg(e).forEach(function(a){var i=Ot(a,"type.displayName")||Ot(a,"type.name");r.indexOf(i)!==-1&&t.push(a)}),t}function St(e,n){var t=ut(e,n);return t&&t[0]}var $B=function(n){if(!n||!n.props)return!1;var t=n.props,r=t.width,a=t.height;return!(!ce(r)||r<=0||!ce(a)||a<=0)},bE=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],IE=function(n){return n&&n.type&&Qu(n.type)&&bE.indexOf(n.type)>=0},E3=function(n){return n&&j6(n)==="object"&&"clipDot"in n},BE=function(n,t,r,a){var i,u=(i=Sd==null?void 0:Sd[a])!==null&&i!==void 0?i:[];return t.startsWith("data-")||!Re(n)&&(a&&u.includes(t)||mE.includes(t))||r&&wg.includes(t)},Oe=function(n,t,r){if(!n||typeof n=="function"||typeof n=="boolean")return null;var a=n;if(U.isValidElement(n)&&(a=n.props),!Ki(a))return null;var i={};return Object.keys(a).forEach(function(u){var s;BE((s=a)===null||s===void 0?void 0:s[u],u,t,r)&&(i[u]=a[u])}),i},$6=function e(n,t){if(n===t)return!0;var r=U.Children.count(n);if(r!==U.Children.count(t))return!1;if(r===0)return!0;if(r===1)return LB(Array.isArray(n)?n[0]:n,Array.isArray(t)?t[0]:t);for(var a=0;a<r;a++){var i=n[a],u=t[a];if(Array.isArray(i)||Array.isArray(u)){if(!e(i,u))return!1}else if(!LB(i,u))return!1}return!0},LB=function(n,t){if(ke(n)&&ke(t))return!0;if(!ke(n)&&!ke(t)){var r=n.props||{},a=r.children,i=TB(r,vE),u=t.props||{},s=u.children,c=TB(u,gE);return a&&s?si(i,c)&&$6(a,s):!a&&!s?si(i,c):!1}return!1},FB=function(n,t){var r=[],a={};return Wg(n).forEach(function(i,u){if(IE(i))r.push(i);else if(i){var s=Ur(i.type),c=t[s]||{},f=c.handler,m=c.once;if(f&&(!m||!a[s])){var d=f(i,s,u);r.push(d),a[s]=!0}}}),r},xE=function(n){var t=n&&n.type;return t&&DB[t]?DB[t]:null},PE=function(n,t){return Wg(t).indexOf(n)},wE=["children","width","height","viewBox","className","style","title","desc"];function L6(){return L6=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L6.apply(this,arguments)}function WE(e,n){if(e==null)return{};var t=SE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function SE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function F6(e){var n=e.children,t=e.width,r=e.height,a=e.viewBox,i=e.className,u=e.style,s=e.title,c=e.desc,f=WE(e,wE),m=a||{width:t,height:r,x:0,y:0},d=De("recharts-surface",i);return E.createElement("svg",L6({},Oe(f,!0,"svg"),{className:d,width:t,height:r,style:u,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),E.createElement("title",null,s),E.createElement("desc",null,c),n)}var ME=["children","className"];function q6(){return q6=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q6.apply(this,arguments)}function AE(e,n){if(e==null)return{};var t=_E(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function _E(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var $e=E.forwardRef(function(e,n){var t=e.children,r=e.className,a=AE(e,ME),i=De("recharts-layer",r);return E.createElement("g",q6({className:i},Oe(a,!0),{ref:n}),t)}),sr=function(n,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},Ad,qB;function OE(){if(qB)return Ad;qB=1;function e(n,t,r){var a=-1,i=n.length;t<0&&(t=-t>i?0:i+t),r=r>i?i:r,r<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var u=Array(i);++a<i;)u[a]=n[a+t];return u}return Ad=e,Ad}var _d,zB;function HE(){if(zB)return _d;zB=1;var e=OE();function n(t,r,a){var i=t.length;return a=a===void 0?i:a,!r&&a>=i?t:e(t,r,a)}return _d=n,_d}var Od,UB;function T3(){if(UB)return Od;UB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",u="\\u200d",s=RegExp("["+u+e+a+i+"]");function c(f){return s.test(f)}return Od=c,Od}var Hd,VB;function CE(){if(VB)return Hd;VB=1;function e(n){return n.split("")}return Hd=e,Hd}var Cd,GB;function NE(){if(GB)return Cd;GB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",u="["+e+"]",s="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+c+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",B=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[m,d,v].join("|")+")"+I+B+")*",W=I+B+b,S="(?:"+[m+s+"?",s,d,v,u].join("|")+")",M=RegExp(c+"(?="+c+")|"+S+W,"g");function O(P){return P.match(M)||[]}return Cd=O,Cd}var Nd,KB;function RE(){if(KB)return Nd;KB=1;var e=CE(),n=T3(),t=NE();function r(a){return n(a)?t(a):e(a)}return Nd=r,Nd}var Rd,QB;function kE(){if(QB)return Rd;QB=1;var e=HE(),n=T3(),t=RE(),r=C3();function a(i){return function(u){u=r(u);var s=n(u)?t(u):void 0,c=s?s[0]:u.charAt(0),f=s?e(s,1).join(""):u.slice(1);return c[i]()+f}}return Rd=a,Rd}var kd,YB;function EE(){if(YB)return kd;YB=1;var e=kE(),n=e("toUpperCase");return kd=n,kd}var TE=EE();const Vl=Xe(TE);function an(e){return function(){return e}}const D3=Math.cos,E0=Math.sin,cr=Math.sqrt,T0=Math.PI,Gl=2*T0,z6=Math.PI,U6=2*z6,io=1e-6,DE=U6-io;function j3(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function jE(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return j3;const t=10**n;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*t)/t+r[a]}}class $E{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?j3:jE(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,r,a){this._append`Q${+n},${+t},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(n,t,r,a,i,u){this._append`C${+n},${+t},${+r},${+a},${this._x1=+i},${this._y1=+u}`}arcTo(n,t,r,a,i){if(n=+n,t=+t,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let u=this._x1,s=this._y1,c=r-n,f=a-t,m=u-n,d=s-t,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(v>io)if(!(Math.abs(d*c-f*m)>io)||!i)this._append`L${this._x1=n},${this._y1=t}`;else{let y=r-u,B=a-s,I=c*c+f*f,b=y*y+B*B,W=Math.sqrt(I),S=Math.sqrt(v),M=i*Math.tan((z6-Math.acos((I+v-b)/(2*W*S)))/2),O=M/S,P=M/W;Math.abs(O-1)>io&&this._append`L${n+O*m},${t+O*d}`,this._append`A${i},${i},0,0,${+(d*y>m*B)},${this._x1=n+P*c},${this._y1=t+P*f}`}}arc(n,t,r,a,i,u){if(n=+n,t=+t,r=+r,u=!!u,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(a),c=r*Math.sin(a),f=n+s,m=t+c,d=1^u,v=u?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-m)>io)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%U6+U6),v>DE?this._append`A${r},${r},0,1,${d},${n-s},${t-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>io&&this._append`A${r},${r},0,${+(v>=z6)},${d},${this._x1=n+r*Math.cos(i)},${this._y1=t+r*Math.sin(i)}`)}rect(n,t,r,a){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Sg(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);n=r}return e},()=>new $E(n)}function Mg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function $3(e){this._context=e}$3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function Kl(e){return new $3(e)}function L3(e){return e[0]}function F3(e){return e[1]}function q3(e,n){var t=an(!0),r=null,a=Kl,i=null,u=Sg(s);e=typeof e=="function"?e:e===void 0?L3:an(e),n=typeof n=="function"?n:n===void 0?F3:an(n);function s(c){var f,m=(c=Mg(c)).length,d,v=!1,y;for(r==null&&(i=a(y=u())),f=0;f<=m;++f)!(f<m&&t(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+n(d,f,c));if(y)return i=null,y+""||null}return s.x=function(c){return arguments.length?(e=typeof c=="function"?c:an(+c),s):e},s.y=function(c){return arguments.length?(n=typeof c=="function"?c:an(+c),s):n},s.defined=function(c){return arguments.length?(t=typeof c=="function"?c:an(!!c),s):t},s.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),s):a},s.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),s):r},s}function h0(e,n,t){var r=null,a=an(!0),i=null,u=Kl,s=null,c=Sg(f);e=typeof e=="function"?e:e===void 0?L3:an(+e),n=typeof n=="function"?n:an(n===void 0?0:+n),t=typeof t=="function"?t:t===void 0?F3:an(+t);function f(d){var v,y,B,I=(d=Mg(d)).length,b,W=!1,S,M=new Array(I),O=new Array(I);for(i==null&&(s=u(S=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===W)if(W=!W)y=v,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),B=v-1;B>=y;--B)s.point(M[B],O[B]);s.lineEnd(),s.areaEnd()}W&&(M[v]=+e(b,v,d),O[v]=+n(b,v,d),s.point(r?+r(b,v,d):M[v],t?+t(b,v,d):O[v]))}if(S)return s=null,S+""||null}function m(){return q3().defined(a).curve(u).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:an(+d),f):r},f.y=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),t=null,f):n},f.y0=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),f):n},f.y1=function(d){return arguments.length?(t=d==null?null:typeof d=="function"?d:an(+d),f):t},f.lineX0=f.lineY0=function(){return m().x(e).y(n)},f.lineY1=function(){return m().x(e).y(t)},f.lineX1=function(){return m().x(r).y(n)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:an(!!d),f):a},f.curve=function(d){return arguments.length?(u=d,i!=null&&(s=u(i)),f):u},f.context=function(d){return arguments.length?(d==null?i=s=null:s=u(i=d),f):i},f}class z3{constructor(n,t){this._context=n,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,t){switch(n=+n,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,t,n,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,n,this._y0,n,t);break}}this._x0=n,this._y0=t}}function LE(e){return new z3(e,!0)}function FE(e){return new z3(e,!1)}const Ag={draw(e,n){const t=cr(n/T0);e.moveTo(t,0),e.arc(0,0,t,0,Gl)}},qE={draw(e,n){const t=cr(n/5)/2;e.moveTo(-3*t,-t),e.lineTo(-t,-t),e.lineTo(-t,-3*t),e.lineTo(t,-3*t),e.lineTo(t,-t),e.lineTo(3*t,-t),e.lineTo(3*t,t),e.lineTo(t,t),e.lineTo(t,3*t),e.lineTo(-t,3*t),e.lineTo(-t,t),e.lineTo(-3*t,t),e.closePath()}},U3=cr(1/3),zE=U3*2,UE={draw(e,n){const t=cr(n/zE),r=t*U3;e.moveTo(0,-t),e.lineTo(r,0),e.lineTo(0,t),e.lineTo(-r,0),e.closePath()}},VE={draw(e,n){const t=cr(n),r=-t/2;e.rect(r,r,t,t)}},GE=.8908130915292852,V3=E0(T0/10)/E0(7*T0/10),KE=E0(Gl/10)*V3,QE=-D3(Gl/10)*V3,YE={draw(e,n){const t=cr(n*GE),r=KE*t,a=QE*t;e.moveTo(0,-t),e.lineTo(r,a);for(let i=1;i<5;++i){const u=Gl*i/5,s=D3(u),c=E0(u);e.lineTo(c*t,-s*t),e.lineTo(s*r-c*a,c*r+s*a)}e.closePath()}},Ed=cr(3),XE={draw(e,n){const t=-cr(n/(Ed*3));e.moveTo(0,t*2),e.lineTo(-Ed*t,-t),e.lineTo(Ed*t,-t),e.closePath()}},$t=-.5,Lt=cr(3)/2,V6=1/cr(12),ZE=(V6/2+1)*3,JE={draw(e,n){const t=cr(n/ZE),r=t/2,a=t*V6,i=r,u=t*V6+t,s=-i,c=u;e.moveTo(r,a),e.lineTo(i,u),e.lineTo(s,c),e.lineTo($t*r-Lt*a,Lt*r+$t*a),e.lineTo($t*i-Lt*u,Lt*i+$t*u),e.lineTo($t*s-Lt*c,Lt*s+$t*c),e.lineTo($t*r+Lt*a,$t*a-Lt*r),e.lineTo($t*i+Lt*u,$t*u-Lt*i),e.lineTo($t*s+Lt*c,$t*c-Lt*s),e.closePath()}};function eT(e,n){let t=null,r=Sg(a);e=typeof e=="function"?e:an(e||Ag),n=typeof n=="function"?n:an(n===void 0?64:+n);function a(){let i;if(t||(t=i=r()),e.apply(this,arguments).draw(t,+n.apply(this,arguments)),i)return t=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:an(i),a):e},a.size=function(i){return arguments.length?(n=typeof i=="function"?i:an(+i),a):n},a.context=function(i){return arguments.length?(t=i??null,a):t},a}function D0(){}function j0(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function G3(e){this._context=e}G3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:j0(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:j0(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function nT(e){return new G3(e)}function K3(e){this._context=e}K3.prototype={areaStart:D0,areaEnd:D0,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x2=e,this._y2=n;break;case 1:this._point=2,this._x3=e,this._y3=n;break;case 2:this._point=3,this._x4=e,this._y4=n,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+n)/6);break;default:j0(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function tT(e){return new K3(e)}function Q3(e){this._context=e}Q3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:j0(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function rT(e){return new Q3(e)}function Y3(e){this._context=e}Y3.prototype={areaStart:D0,areaEnd:D0,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,n){e=+e,n=+n,this._point?this._context.lineTo(e,n):(this._point=1,this._context.moveTo(e,n))}};function aT(e){return new Y3(e)}function XB(e){return e<0?-1:1}function ZB(e,n,t){var r=e._x1-e._x0,a=n-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),u=(t-e._y1)/(a||r<0&&-0),s=(i*a+u*r)/(r+a);return(XB(i)+XB(u))*Math.min(Math.abs(i),Math.abs(u),.5*Math.abs(s))||0}function JB(e,n){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-n)/2:n}function Td(e,n,t){var r=e._x0,a=e._y0,i=e._x1,u=e._y1,s=(i-r)/3;e._context.bezierCurveTo(r+s,a+s*n,i-s,u-s*t,i,u)}function $0(e){this._context=e}$0.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Td(this,this._t0,JB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){var t=NaN;if(e=+e,n=+n,!(e===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,Td(this,JB(this,t=ZB(this,e,n)),t);break;default:Td(this,this._t0,t=ZB(this,e,n));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n,this._t0=t}}};function X3(e){this._context=new Z3(e)}(X3.prototype=Object.create($0.prototype)).point=function(e,n){$0.prototype.point.call(this,n,e)};function Z3(e){this._context=e}Z3.prototype={moveTo:function(e,n){this._context.moveTo(n,e)},closePath:function(){this._context.closePath()},lineTo:function(e,n){this._context.lineTo(n,e)},bezierCurveTo:function(e,n,t,r,a,i){this._context.bezierCurveTo(n,e,r,t,i,a)}};function oT(e){return new $0(e)}function iT(e){return new X3(e)}function J3(e){this._context=e}J3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,n=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],n[0]):this._context.moveTo(e[0],n[0]),t===2)this._context.lineTo(e[1],n[1]);else for(var r=ex(e),a=ex(n),i=0,u=1;u<t;++i,++u)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[u],n[u]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,n){this._x.push(+e),this._y.push(+n)}};function ex(e){var n,t=e.length-1,r,a=new Array(t),i=new Array(t),u=new Array(t);for(a[0]=0,i[0]=2,u[0]=e[0]+2*e[1],n=1;n<t-1;++n)a[n]=1,i[n]=4,u[n]=4*e[n]+2*e[n+1];for(a[t-1]=2,i[t-1]=7,u[t-1]=8*e[t-1]+e[t],n=1;n<t;++n)r=a[n]/i[n-1],i[n]-=r,u[n]-=r*u[n-1];for(a[t-1]=u[t-1]/i[t-1],n=t-2;n>=0;--n)a[n]=(u[n]-a[n+1])/i[n];for(i[t-1]=(e[t]+a[t-1])/2,n=0;n<t-1;++n)i[n]=2*e[n+1]-a[n+1];return[a,i]}function pT(e){return new J3(e)}function Ql(e,n){this._context=e,this._t=n}Ql.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(e,n);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,n)}break}}this._x=e,this._y=n}};function uT(e){return new Ql(e,.5)}function sT(e){return new Ql(e,0)}function lT(e){return new Ql(e,1)}function mi(e,n){if((u=e.length)>1)for(var t=1,r,a,i=e[n[0]],u,s=i.length;t<u;++t)for(a=i,i=e[n[t]],r=0;r<s;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function G6(e){for(var n=e.length,t=new Array(n);--n>=0;)t[n]=n;return t}function cT(e,n){return e[n]}function fT(e){const n=[];return n.key=e,n}function dT(){var e=an([]),n=G6,t=mi,r=cT;function a(i){var u=Array.from(e.apply(this,arguments),fT),s,c=u.length,f=-1,m;for(const d of i)for(s=0,++f;s<c;++s)(u[s][f]=[0,+r(d,u[s].key,f,i)]).data=d;for(s=0,m=Mg(n(u));s<c;++s)u[m[s]].index=s;return t(u,m),u}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:an(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:an(+i),a):r},a.order=function(i){return arguments.length?(n=i==null?G6:typeof i=="function"?i:an(Array.from(i)),a):n},a.offset=function(i){return arguments.length?(t=i??mi,a):t},a}function mT(e,n){if((r=e.length)>0){for(var t,r,a=0,i=e[0].length,u;a<i;++a){for(u=t=0;t<r;++t)u+=e[t][a][1]||0;if(u)for(t=0;t<r;++t)e[t][a][1]/=u}mi(e,n)}}function hT(e,n){if((a=e.length)>0){for(var t=0,r=e[n[0]],a,i=r.length;t<i;++t){for(var u=0,s=0;u<a;++u)s+=e[u][t][1]||0;r[t][1]+=r[t][0]=-s/2}mi(e,n)}}function vT(e,n){if(!(!((u=e.length)>0)||!((i=(a=e[n[0]]).length)>0))){for(var t=0,r=1,a,i,u;r<i;++r){for(var s=0,c=0,f=0;s<u;++s){for(var m=e[n[s]],d=m[r][1]||0,v=m[r-1][1]||0,y=(d-v)/2,B=0;B<s;++B){var I=e[n[B]],b=I[r][1]||0,W=I[r-1][1]||0;y+=b-W}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=t,c&&(t-=f/c)}a[r-1][1]+=a[r-1][0]=t,mi(e,n)}}function du(e){"@babel/helpers - typeof";return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},du(e)}var gT=["type","size","sizeType"];function K6(){return K6=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K6.apply(this,arguments)}function nx(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function tx(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nx(Object(t),!0).forEach(function(r){yT(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nx(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yT(e,n,t){return n=bT(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bT(e){var n=IT(e,"string");return du(n)=="symbol"?n:n+""}function IT(e,n){if(du(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(du(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function BT(e,n){if(e==null)return{};var t=xT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function xT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var eS={symbolCircle:Ag,symbolCross:qE,symbolDiamond:UE,symbolSquare:VE,symbolStar:YE,symbolTriangle:XE,symbolWye:JE},PT=Math.PI/180,wT=function(n){var t="symbol".concat(Vl(n));return eS[t]||Ag},WT=function(n,t,r){if(t==="area")return n;switch(r){case"cross":return 5*n*n/9;case"diamond":return .5*n*n/Math.sqrt(3);case"square":return n*n;case"star":{var a=18*PT;return 1.25*n*n*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*n*n/4;case"wye":return(21-10*Math.sqrt(3))*n*n/8;default:return Math.PI*n*n/4}},ST=function(n,t){eS["symbol".concat(Vl(n))]=t},Yl=function(n){var t=n.type,r=t===void 0?"circle":t,a=n.size,i=a===void 0?64:a,u=n.sizeType,s=u===void 0?"area":u,c=BT(n,gT),f=tx(tx({},c),{},{type:r,size:i,sizeType:s}),m=function(){var b=wT(r),W=eT().type(b).size(WT(i,s,r));return W()},d=f.className,v=f.cx,y=f.cy,B=Oe(f,!0);return v===+v&&y===+y&&i===+i?E.createElement("path",K6({},B,{className:De("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:m()})):null};Yl.registerSymbol=ST;function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hi(e)}function Q6(){return Q6=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Q6.apply(this,arguments)}function rx(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function MT(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rx(Object(t),!0).forEach(function(r){mu(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rx(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function AT(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _T(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tS(r.key),r)}}function OT(e,n,t){return n&&_T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function HT(e,n,t){return n=L0(n),CT(e,nS()?Reflect.construct(n,t||[],L0(e).constructor):n.apply(e,t))}function CT(e,n){if(n&&(hi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NT(e)}function NT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nS=function(){return!!e})()}function L0(e){return L0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L0(e)}function RT(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Y6(e,n)}function Y6(e,n){return Y6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Y6(e,n)}function mu(e,n,t){return n=tS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function tS(e){var n=kT(e,"string");return hi(n)=="symbol"?n:n+""}function kT(e,n){if(hi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ft=32,_g=(function(e){function n(){return AT(this,n),HT(this,n,arguments)}return RT(n,e),OT(n,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ft/2,u=Ft/6,s=Ft/3,c=r.inactive?a:r.color;if(r.type==="plainline")return E.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ft,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return E.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(s,`
            A`).concat(u,",").concat(u,",0,1,1,").concat(2*s,",").concat(i,`
            H`).concat(Ft,"M").concat(2*s,",").concat(i,`
            A`).concat(u,",").concat(u,",0,1,1,").concat(s,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return E.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Ft/8,"h").concat(Ft,"v").concat(Ft*3/4,"h").concat(-Ft,"z"),className:"recharts-legend-icon"});if(E.isValidElement(r.legendIcon)){var f=MT({},r);return delete f.legendIcon,E.cloneElement(r.legendIcon,f)}return E.createElement(Yl,{fill:c,cx:i,cy:i,size:Ft,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,u=a.iconSize,s=a.layout,c=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:Ft,height:Ft},d={display:s==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,B){var I=y.formatter||c,b=De(mu(mu({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",y.inactive));if(y.type==="none")return null;var W=Re(y.value)?null:y.value;sr(!Re(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var S=y.inactive?f:y.color;return E.createElement("li",Q6({className:b,style:d,key:"legend-item-".concat(B)},Ra(r.props,y,B)),E.createElement(F6,{width:u,height:u,viewBox:m,style:v},r.renderIcon(y)),E.createElement("span",{className:"recharts-legend-item-text",style:{color:S}},I?I(W,y,B):W))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,u=r.align;if(!a||!a.length)return null;var s={padding:0,margin:0,textAlign:i==="horizontal"?u:"left"};return E.createElement("ul",{className:"recharts-default-legend",style:s},this.renderItems())}}])})(U.PureComponent);mu(_g,"displayName","Legend");mu(_g,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Dd,ax;function ET(){if(ax)return Dd;ax=1;var e=ql();function n(){this.__data__=new e,this.size=0}return Dd=n,Dd}var jd,ox;function TT(){if(ox)return jd;ox=1;function e(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}return jd=e,jd}var $d,ix;function DT(){if(ix)return $d;ix=1;function e(n){return this.__data__.get(n)}return $d=e,$d}var Ld,px;function jT(){if(px)return Ld;px=1;function e(n){return this.__data__.has(n)}return Ld=e,Ld}var Fd,ux;function $T(){if(ux)return Fd;ux=1;var e=ql(),n=Ig(),t=Bg(),r=200;function a(i,u){var s=this.__data__;if(s instanceof e){var c=s.__data__;if(!n||c.length<r-1)return c.push([i,u]),this.size=++s.size,this;s=this.__data__=new t(c)}return s.set(i,u),this.size=s.size,this}return Fd=a,Fd}var qd,sx;function rS(){if(sx)return qd;sx=1;var e=ql(),n=ET(),t=TT(),r=DT(),a=jT(),i=$T();function u(s){var c=this.__data__=new e(s);this.size=c.size}return u.prototype.clear=n,u.prototype.delete=t,u.prototype.get=r,u.prototype.has=a,u.prototype.set=i,qd=u,qd}var zd,lx;function LT(){if(lx)return zd;lx=1;var e="__lodash_hash_undefined__";function n(t){return this.__data__.set(t,e),this}return zd=n,zd}var Ud,cx;function FT(){if(cx)return Ud;cx=1;function e(n){return this.__data__.has(n)}return Ud=e,Ud}var Vd,fx;function aS(){if(fx)return Vd;fx=1;var e=Bg(),n=LT(),t=FT();function r(a){var i=-1,u=a==null?0:a.length;for(this.__data__=new e;++i<u;)this.add(a[i])}return r.prototype.add=r.prototype.push=n,r.prototype.has=t,Vd=r,Vd}var Gd,dx;function oS(){if(dx)return Gd;dx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(t(n[r],r,n))return!0;return!1}return Gd=e,Gd}var Kd,mx;function iS(){if(mx)return Kd;mx=1;function e(n,t){return n.has(t)}return Kd=e,Kd}var Qd,hx;function pS(){if(hx)return Qd;hx=1;var e=aS(),n=oS(),t=iS(),r=1,a=2;function i(u,s,c,f,m,d){var v=c&r,y=u.length,B=s.length;if(y!=B&&!(v&&B>y))return!1;var I=d.get(u),b=d.get(s);if(I&&b)return I==s&&b==u;var W=-1,S=!0,M=c&a?new e:void 0;for(d.set(u,s),d.set(s,u);++W<y;){var O=u[W],P=s[W];if(f)var A=v?f(P,O,W,s,u,d):f(O,P,W,u,s,d);if(A!==void 0){if(A)continue;S=!1;break}if(M){if(!n(s,function(N,w){if(!t(M,w)&&(O===N||m(O,N,c,f,d)))return M.push(w)})){S=!1;break}}else if(!(O===P||m(O,P,c,f,d))){S=!1;break}}return d.delete(u),d.delete(s),S}return Qd=i,Qd}var Yd,vx;function qT(){if(vx)return Yd;vx=1;var e=Sr(),n=e.Uint8Array;return Yd=n,Yd}var Xd,gx;function zT(){if(gx)return Xd;gx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a,i){r[++t]=[i,a]}),r}return Xd=e,Xd}var Zd,yx;function Og(){if(yx)return Zd;yx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a){r[++t]=a}),r}return Zd=e,Zd}var Jd,bx;function UT(){if(bx)return Jd;bx=1;var e=Ku(),n=qT(),t=bg(),r=pS(),a=zT(),i=Og(),u=1,s=2,c="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",B="[object Set]",I="[object String]",b="[object Symbol]",W="[object ArrayBuffer]",S="[object DataView]",M=e?e.prototype:void 0,O=M?M.valueOf:void 0;function P(A,N,w,H,k,D,R){switch(w){case S:if(A.byteLength!=N.byteLength||A.byteOffset!=N.byteOffset)return!1;A=A.buffer,N=N.buffer;case W:return!(A.byteLength!=N.byteLength||!D(new n(A),new n(N)));case c:case f:case v:return t(+A,+N);case m:return A.name==N.name&&A.message==N.message;case y:case I:return A==N+"";case d:var F=a;case B:var V=H&u;if(F||(F=i),A.size!=N.size&&!V)return!1;var G=R.get(A);if(G)return G==N;H|=s,R.set(A,N);var Y=r(F(A),F(N),H,k,D,R);return R.delete(A),Y;case b:if(O)return O.call(A)==O.call(N)}return!1}return Jd=P,Jd}var em,Ix;function uS(){if(Ix)return em;Ix=1;function e(n,t){for(var r=-1,a=t.length,i=n.length;++r<a;)n[i+r]=t[r];return n}return em=e,em}var nm,Bx;function VT(){if(Bx)return nm;Bx=1;var e=uS(),n=bt();function t(r,a,i){var u=a(r);return n(r)?u:e(u,i(r))}return nm=t,nm}var tm,xx;function GT(){if(xx)return tm;xx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=0,u=[];++r<a;){var s=n[r];t(s,r,n)&&(u[i++]=s)}return u}return tm=e,tm}var rm,Px;function KT(){if(Px)return rm;Px=1;function e(){return[]}return rm=e,rm}var am,wx;function QT(){if(wx)return am;wx=1;var e=GT(),n=KT(),t=Object.prototype,r=t.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(u){return u==null?[]:(u=Object(u),e(a(u),function(s){return r.call(u,s)}))}:n;return am=i,am}var om,Wx;function YT(){if(Wx)return om;Wx=1;function e(n,t){for(var r=-1,a=Array(n);++r<n;)a[r]=t(r);return a}return om=e,om}var im,Sx;function XT(){if(Sx)return im;Sx=1;var e=Yr(),n=Xr(),t="[object Arguments]";function r(a){return n(a)&&e(a)==t}return im=r,im}var pm,Mx;function Hg(){if(Mx)return pm;Mx=1;var e=XT(),n=Xr(),t=Object.prototype,r=t.hasOwnProperty,a=t.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(u){return n(u)&&r.call(u,"callee")&&!a.call(u,"callee")};return pm=i,pm}var eu={exports:{}},um,Ax;function ZT(){if(Ax)return um;Ax=1;function e(){return!1}return um=e,um}eu.exports;var _x;function sS(){return _x||(_x=1,(function(e,n){var t=Sr(),r=ZT(),a=n&&!n.nodeType&&n,i=a&&!0&&e&&!e.nodeType&&e,u=i&&i.exports===a,s=u?t.Buffer:void 0,c=s?s.isBuffer:void 0,f=c||r;e.exports=f})(eu,eu.exports)),eu.exports}var sm,Ox;function Cg(){if(Ox)return sm;Ox=1;var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function t(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&n.test(r))&&r>-1&&r%1==0&&r<a}return sm=t,sm}var lm,Hx;function Ng(){if(Hx)return lm;Hx=1;var e=9007199254740991;function n(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=e}return lm=n,lm}var cm,Cx;function JT(){if(Cx)return cm;Cx=1;var e=Yr(),n=Ng(),t=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",u="[object Date]",s="[object Error]",c="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",B="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",W="[object DataView]",S="[object Float32Array]",M="[object Float64Array]",O="[object Int8Array]",P="[object Int16Array]",A="[object Int32Array]",N="[object Uint8Array]",w="[object Uint8ClampedArray]",H="[object Uint16Array]",k="[object Uint32Array]",D={};D[S]=D[M]=D[O]=D[P]=D[A]=D[N]=D[w]=D[H]=D[k]=!0,D[r]=D[a]=D[b]=D[i]=D[W]=D[u]=D[s]=D[c]=D[f]=D[m]=D[d]=D[v]=D[y]=D[B]=D[I]=!1;function R(F){return t(F)&&n(F.length)&&!!D[e(F)]}return cm=R,cm}var fm,Nx;function lS(){if(Nx)return fm;Nx=1;function e(n){return function(t){return n(t)}}return fm=e,fm}var nu={exports:{}};nu.exports;var Rx;function eD(){return Rx||(Rx=1,(function(e,n){var t=_3(),r=n&&!n.nodeType&&n,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,u=i&&t.process,s=(function(){try{var c=a&&a.require&&a.require("util").types;return c||u&&u.binding&&u.binding("util")}catch{}})();e.exports=s})(nu,nu.exports)),nu.exports}var dm,kx;function cS(){if(kx)return dm;kx=1;var e=JT(),n=lS(),t=eD(),r=t&&t.isTypedArray,a=r?n(r):e;return dm=a,dm}var mm,Ex;function nD(){if(Ex)return mm;Ex=1;var e=YT(),n=Hg(),t=bt(),r=sS(),a=Cg(),i=cS(),u=Object.prototype,s=u.hasOwnProperty;function c(f,m){var d=t(f),v=!d&&n(f),y=!d&&!v&&r(f),B=!d&&!v&&!y&&i(f),I=d||v||y||B,b=I?e(f.length,String):[],W=b.length;for(var S in f)(m||s.call(f,S))&&!(I&&(S=="length"||y&&(S=="offset"||S=="parent")||B&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||a(S,W)))&&b.push(S);return b}return mm=c,mm}var hm,Tx;function tD(){if(Tx)return hm;Tx=1;var e=Object.prototype;function n(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||e;return t===a}return hm=n,hm}var vm,Dx;function fS(){if(Dx)return vm;Dx=1;function e(n,t){return function(r){return n(t(r))}}return vm=e,vm}var gm,jx;function rD(){if(jx)return gm;jx=1;var e=fS(),n=e(Object.keys,Object);return gm=n,gm}var ym,$x;function aD(){if($x)return ym;$x=1;var e=tD(),n=rD(),t=Object.prototype,r=t.hasOwnProperty;function a(i){if(!e(i))return n(i);var u=[];for(var s in Object(i))r.call(i,s)&&s!="constructor"&&u.push(s);return u}return ym=a,ym}var bm,Lx;function Yu(){if(Lx)return bm;Lx=1;var e=yg(),n=Ng();function t(r){return r!=null&&n(r.length)&&!e(r)}return bm=t,bm}var Im,Fx;function Xl(){if(Fx)return Im;Fx=1;var e=nD(),n=aD(),t=Yu();function r(a){return t(a)?e(a):n(a)}return Im=r,Im}var Bm,qx;function oD(){if(qx)return Bm;qx=1;var e=VT(),n=QT(),t=Xl();function r(a){return e(a,t,n)}return Bm=r,Bm}var xm,zx;function iD(){if(zx)return xm;zx=1;var e=oD(),n=1,t=Object.prototype,r=t.hasOwnProperty;function a(i,u,s,c,f,m){var d=s&n,v=e(i),y=v.length,B=e(u),I=B.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var W=v[b];if(!(d?W in u:r.call(u,W)))return!1}var S=m.get(i),M=m.get(u);if(S&&M)return S==u&&M==i;var O=!0;m.set(i,u),m.set(u,i);for(var P=d;++b<y;){W=v[b];var A=i[W],N=u[W];if(c)var w=d?c(N,A,W,u,i,m):c(A,N,W,i,u,m);if(!(w===void 0?A===N||f(A,N,s,c,m):w)){O=!1;break}P||(P=W=="constructor")}if(O&&!P){var H=i.constructor,k=u.constructor;H!=k&&"constructor"in i&&"constructor"in u&&!(typeof H=="function"&&H instanceof H&&typeof k=="function"&&k instanceof k)&&(O=!1)}return m.delete(i),m.delete(u),O}return xm=a,xm}var Pm,Ux;function pD(){if(Ux)return Pm;Ux=1;var e=Bo(),n=Sr(),t=e(n,"DataView");return Pm=t,Pm}var wm,Vx;function uD(){if(Vx)return wm;Vx=1;var e=Bo(),n=Sr(),t=e(n,"Promise");return wm=t,wm}var Wm,Gx;function dS(){if(Gx)return Wm;Gx=1;var e=Bo(),n=Sr(),t=e(n,"Set");return Wm=t,Wm}var Sm,Kx;function sD(){if(Kx)return Sm;Kx=1;var e=Bo(),n=Sr(),t=e(n,"WeakMap");return Sm=t,Sm}var Mm,Qx;function lD(){if(Qx)return Mm;Qx=1;var e=pD(),n=Ig(),t=uD(),r=dS(),a=sD(),i=Yr(),u=O3(),s="[object Map]",c="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",y=u(e),B=u(n),I=u(t),b=u(r),W=u(a),S=i;return(e&&S(new e(new ArrayBuffer(1)))!=v||n&&S(new n)!=s||t&&S(t.resolve())!=f||r&&S(new r)!=m||a&&S(new a)!=d)&&(S=function(M){var O=i(M),P=O==c?M.constructor:void 0,A=P?u(P):"";if(A)switch(A){case y:return v;case B:return s;case I:return f;case b:return m;case W:return d}return O}),Mm=S,Mm}var Am,Yx;function cD(){if(Yx)return Am;Yx=1;var e=rS(),n=pS(),t=UT(),r=iD(),a=lD(),i=bt(),u=sS(),s=cS(),c=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function B(I,b,W,S,M,O){var P=i(I),A=i(b),N=P?m:a(I),w=A?m:a(b);N=N==f?d:N,w=w==f?d:w;var H=N==d,k=w==d,D=N==w;if(D&&u(I)){if(!u(b))return!1;P=!0,H=!1}if(D&&!H)return O||(O=new e),P||s(I)?n(I,b,W,S,M,O):t(I,b,N,W,S,M,O);if(!(W&c)){var R=H&&y.call(I,"__wrapped__"),F=k&&y.call(b,"__wrapped__");if(R||F){var V=R?I.value():I,G=F?b.value():b;return O||(O=new e),M(V,G,W,S,O)}}return D?(O||(O=new e),r(I,b,W,S,M,O)):!1}return Am=B,Am}var _m,Xx;function Rg(){if(Xx)return _m;Xx=1;var e=cD(),n=Xr();function t(r,a,i,u,s){return r===a?!0:r==null||a==null||!n(r)&&!n(a)?r!==r&&a!==a:e(r,a,i,u,t,s)}return _m=t,_m}var Om,Zx;function fD(){if(Zx)return Om;Zx=1;var e=rS(),n=Rg(),t=1,r=2;function a(i,u,s,c){var f=s.length,m=f,d=!c;if(i==null)return!m;for(i=Object(i);f--;){var v=s[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=s[f];var y=v[0],B=i[y],I=v[1];if(d&&v[2]){if(B===void 0&&!(y in i))return!1}else{var b=new e;if(c)var W=c(B,I,y,i,u,b);if(!(W===void 0?n(I,B,t|r,c,b):W))return!1}}return!0}return Om=a,Om}var Hm,Jx;function mS(){if(Jx)return Hm;Jx=1;var e=Ta();function n(t){return t===t&&!e(t)}return Hm=n,Hm}var Cm,eP;function dD(){if(eP)return Cm;eP=1;var e=mS(),n=Xl();function t(r){for(var a=n(r),i=a.length;i--;){var u=a[i],s=r[u];a[i]=[u,s,e(s)]}return a}return Cm=t,Cm}var Nm,nP;function hS(){if(nP)return Nm;nP=1;function e(n,t){return function(r){return r==null?!1:r[n]===t&&(t!==void 0||n in Object(r))}}return Nm=e,Nm}var Rm,tP;function mD(){if(tP)return Rm;tP=1;var e=fD(),n=dD(),t=hS();function r(a){var i=n(a);return i.length==1&&i[0][2]?t(i[0][0],i[0][1]):function(u){return u===a||e(u,a,i)}}return Rm=r,Rm}var km,rP;function hD(){if(rP)return km;rP=1;function e(n,t){return n!=null&&t in Object(n)}return km=e,km}var Em,aP;function vD(){if(aP)return Em;aP=1;var e=N3(),n=Hg(),t=bt(),r=Cg(),a=Ng(),i=Ul();function u(s,c,f){c=e(c,s);for(var m=-1,d=c.length,v=!1;++m<d;){var y=i(c[m]);if(!(v=s!=null&&f(s,y)))break;s=s[y]}return v||++m!=d?v:(d=s==null?0:s.length,!!d&&a(d)&&r(y,d)&&(t(s)||n(s)))}return Em=u,Em}var Tm,oP;function gD(){if(oP)return Tm;oP=1;var e=hD(),n=vD();function t(r,a){return r!=null&&n(r,a,e)}return Tm=t,Tm}var Dm,iP;function yD(){if(iP)return Dm;iP=1;var e=Rg(),n=R3(),t=gD(),r=gg(),a=mS(),i=hS(),u=Ul(),s=1,c=2;function f(m,d){return r(m)&&a(d)?i(u(m),d):function(v){var y=n(v,m);return y===void 0&&y===d?t(v,m):e(d,y,s|c)}}return Dm=f,Dm}var jm,pP;function Yi(){if(pP)return jm;pP=1;function e(n){return n}return jm=e,jm}var $m,uP;function bD(){if(uP)return $m;uP=1;function e(n){return function(t){return t==null?void 0:t[n]}}return $m=e,$m}var Lm,sP;function ID(){if(sP)return Lm;sP=1;var e=Pg();function n(t){return function(r){return e(r,t)}}return Lm=n,Lm}var Fm,lP;function BD(){if(lP)return Fm;lP=1;var e=bD(),n=ID(),t=gg(),r=Ul();function a(i){return t(i)?e(r(i)):n(i)}return Fm=a,Fm}var qm,cP;function Mr(){if(cP)return qm;cP=1;var e=mD(),n=yD(),t=Yi(),r=bt(),a=BD();function i(u){return typeof u=="function"?u:u==null?t:typeof u=="object"?r(u)?n(u[0],u[1]):e(u):a(u)}return qm=i,qm}var zm,fP;function vS(){if(fP)return zm;fP=1;function e(n,t,r,a){for(var i=n.length,u=r+(a?1:-1);a?u--:++u<i;)if(t(n[u],u,n))return u;return-1}return zm=e,zm}var Um,dP;function xD(){if(dP)return Um;dP=1;function e(n){return n!==n}return Um=e,Um}var Vm,mP;function PD(){if(mP)return Vm;mP=1;function e(n,t,r){for(var a=r-1,i=n.length;++a<i;)if(n[a]===t)return a;return-1}return Vm=e,Vm}var Gm,hP;function wD(){if(hP)return Gm;hP=1;var e=vS(),n=xD(),t=PD();function r(a,i,u){return i===i?t(a,i,u):e(a,n,u)}return Gm=r,Gm}var Km,vP;function WD(){if(vP)return Km;vP=1;var e=wD();function n(t,r){var a=t==null?0:t.length;return!!a&&e(t,r,0)>-1}return Km=n,Km}var Qm,gP;function SD(){if(gP)return Qm;gP=1;function e(n,t,r){for(var a=-1,i=n==null?0:n.length;++a<i;)if(r(t,n[a]))return!0;return!1}return Qm=e,Qm}var Ym,yP;function MD(){if(yP)return Ym;yP=1;function e(){}return Ym=e,Ym}var Xm,bP;function AD(){if(bP)return Xm;bP=1;var e=dS(),n=MD(),t=Og(),r=1/0,a=e&&1/t(new e([,-0]))[1]==r?function(i){return new e(i)}:n;return Xm=a,Xm}var Zm,IP;function _D(){if(IP)return Zm;IP=1;var e=aS(),n=WD(),t=SD(),r=iS(),a=AD(),i=Og(),u=200;function s(c,f,m){var d=-1,v=n,y=c.length,B=!0,I=[],b=I;if(m)B=!1,v=t;else if(y>=u){var W=f?null:a(c);if(W)return i(W);B=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var S=c[d],M=f?f(S):S;if(S=m||S!==0?S:0,B&&M===M){for(var O=b.length;O--;)if(b[O]===M)continue e;f&&b.push(M),I.push(S)}else v(b,M,m)||(b!==I&&b.push(M),I.push(S))}return I}return Zm=s,Zm}var Jm,BP;function OD(){if(BP)return Jm;BP=1;var e=Mr(),n=_D();function t(r,a){return r&&r.length?n(r,e(a,2)):[]}return Jm=t,Jm}var HD=OD();const xP=Xe(HD);function gS(e,n,t){return n===!0?xP(e,t):Re(n)?xP(e,n):e}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vi(e)}var CD=["ref"];function PP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Tr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?PP(Object(t),!0).forEach(function(r){Zl(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ND(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function wP(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,bS(r.key),r)}}function RD(e,n,t){return n&&wP(e.prototype,n),t&&wP(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function kD(e,n,t){return n=F0(n),ED(e,yS()?Reflect.construct(n,t||[],F0(e).constructor):n.apply(e,t))}function ED(e,n){if(n&&(vi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return TD(e)}function TD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(yS=function(){return!!e})()}function F0(e){return F0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F0(e)}function DD(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&X6(e,n)}function X6(e,n){return X6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},X6(e,n)}function Zl(e,n,t){return n=bS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bS(e){var n=jD(e,"string");return vi(n)=="symbol"?n:n+""}function jD(e,n){if(vi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function $D(e,n){if(e==null)return{};var t=LD(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function LD(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function FD(e){return e.value}function qD(e,n){if(E.isValidElement(e))return E.cloneElement(e,n);if(typeof e=="function")return E.createElement(e,n);n.ref;var t=$D(n,CD);return E.createElement(_g,t)}var WP=1,Oa=(function(e){function n(){var t;ND(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=kD(this,n,[].concat(a)),Zl(t,"lastBoundingBox",{width:-1,height:-1}),t}return DD(n,e),RD(n,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>WP||Math.abs(a.height-this.lastBoundingBox.height)>WP)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Tr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,u=a.align,s=a.verticalAlign,c=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(u==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=u==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(s==="middle"){var B=this.getBBoxSnapshot();v={top:((m||0)-B.height)/2}}else v=s==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Tr(Tr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,u=a.width,s=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=Tr(Tr({position:"absolute",width:u||"auto",height:s||"auto"},this.getDefaultPosition(c)),c);return E.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},qD(i,Tr(Tr({},this.props),{},{payload:gS(m,f,FD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Tr(Tr({},this.defaultProps),r.props),u=i.layout;return u==="vertical"&&ce(r.props.height)?{height:r.props.height}:u==="horizontal"?{width:r.props.width||a}:null}}])})(U.PureComponent);Zl(Oa,"displayName","Legend");Zl(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var eh,SP;function zD(){if(SP)return eh;SP=1;var e=Ku(),n=Hg(),t=bt(),r=e?e.isConcatSpreadable:void 0;function a(i){return t(i)||n(i)||!!(r&&i&&i[r])}return eh=a,eh}var nh,MP;function IS(){if(MP)return nh;MP=1;var e=uS(),n=zD();function t(r,a,i,u,s){var c=-1,f=r.length;for(i||(i=n),s||(s=[]);++c<f;){var m=r[c];a>0&&i(m)?a>1?t(m,a-1,i,u,s):e(s,m):u||(s[s.length]=m)}return s}return nh=t,nh}var th,AP;function UD(){if(AP)return th;AP=1;function e(n){return function(t,r,a){for(var i=-1,u=Object(t),s=a(t),c=s.length;c--;){var f=s[n?c:++i];if(r(u[f],f,u)===!1)break}return t}}return th=e,th}var rh,_P;function VD(){if(_P)return rh;_P=1;var e=UD(),n=e();return rh=n,rh}var ah,OP;function BS(){if(OP)return ah;OP=1;var e=VD(),n=Xl();function t(r,a){return r&&e(r,a,n)}return ah=t,ah}var oh,HP;function GD(){if(HP)return oh;HP=1;var e=Yu();function n(t,r){return function(a,i){if(a==null)return a;if(!e(a))return t(a,i);for(var u=a.length,s=r?u:-1,c=Object(a);(r?s--:++s<u)&&i(c[s],s,c)!==!1;);return a}}return oh=n,oh}var ih,CP;function kg(){if(CP)return ih;CP=1;var e=BS(),n=GD(),t=n(e);return ih=t,ih}var ph,NP;function xS(){if(NP)return ph;NP=1;var e=kg(),n=Yu();function t(r,a){var i=-1,u=n(r)?Array(r.length):[];return e(r,function(s,c,f){u[++i]=a(s,c,f)}),u}return ph=t,ph}var uh,RP;function KD(){if(RP)return uh;RP=1;function e(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}return uh=e,uh}var sh,kP;function QD(){if(kP)return sh;kP=1;var e=Gi();function n(t,r){if(t!==r){var a=t!==void 0,i=t===null,u=t===t,s=e(t),c=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!s&&t>r||s&&c&&m&&!f&&!d||i&&c&&m||!a&&m||!u)return 1;if(!i&&!s&&!d&&t<r||d&&a&&u&&!i&&!s||f&&a&&u||!c&&u||!m)return-1}return 0}return sh=n,sh}var lh,EP;function YD(){if(EP)return lh;EP=1;var e=QD();function n(t,r,a){for(var i=-1,u=t.criteria,s=r.criteria,c=u.length,f=a.length;++i<c;){var m=e(u[i],s[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return t.index-r.index}return lh=n,lh}var ch,TP;function XD(){if(TP)return ch;TP=1;var e=xg(),n=Pg(),t=Mr(),r=xS(),a=KD(),i=lS(),u=YD(),s=Yi(),c=bt();function f(m,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return n(b,I.length===1?I[0]:I)}:I}):d=[s];var y=-1;d=e(d,i(t));var B=r(m,function(I,b,W){var S=e(d,function(M){return M(I)});return{criteria:S,index:++y,value:I}});return a(B,function(I,b){return u(I,b,v)})}return ch=f,ch}var fh,DP;function ZD(){if(DP)return fh;DP=1;function e(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}return fh=e,fh}var dh,jP;function JD(){if(jP)return dh;jP=1;var e=ZD(),n=Math.max;function t(r,a,i){return a=n(a===void 0?r.length-1:a,0),function(){for(var u=arguments,s=-1,c=n(u.length-a,0),f=Array(c);++s<c;)f[s]=u[a+s];s=-1;for(var m=Array(a+1);++s<a;)m[s]=u[s];return m[a]=i(f),e(r,this,m)}}return dh=t,dh}var mh,$P;function ej(){if($P)return mh;$P=1;function e(n){return function(){return n}}return mh=e,mh}var hh,LP;function PS(){if(LP)return hh;LP=1;var e=Bo(),n=(function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch{}})();return hh=n,hh}var vh,FP;function nj(){if(FP)return vh;FP=1;var e=ej(),n=PS(),t=Yi(),r=n?function(a,i){return n(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:t;return vh=r,vh}var gh,qP;function tj(){if(qP)return gh;qP=1;var e=800,n=16,t=Date.now;function r(a){var i=0,u=0;return function(){var s=t(),c=n-(s-u);if(u=s,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return gh=r,gh}var yh,zP;function rj(){if(zP)return yh;zP=1;var e=nj(),n=tj(),t=n(e);return yh=t,yh}var bh,UP;function aj(){if(UP)return bh;UP=1;var e=Yi(),n=JD(),t=rj();function r(a,i){return t(n(a,i,e),a+"")}return bh=r,bh}var Ih,VP;function Jl(){if(VP)return Ih;VP=1;var e=bg(),n=Yu(),t=Cg(),r=Ta();function a(i,u,s){if(!r(s))return!1;var c=typeof u;return(c=="number"?n(s)&&t(u,s.length):c=="string"&&u in s)?e(s[u],i):!1}return Ih=a,Ih}var Bh,GP;function oj(){if(GP)return Bh;GP=1;var e=IS(),n=XD(),t=aj(),r=Jl(),a=t(function(i,u){if(i==null)return[];var s=u.length;return s>1&&r(i,u[0],u[1])?u=[]:s>2&&r(u[0],u[1],u[2])&&(u=[u[0]]),n(i,e(u,1),[])});return Bh=a,Bh}var ij=oj();const Eg=Xe(ij);function hu(e){"@babel/helpers - typeof";return hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hu(e)}function Z6(){return Z6=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z6.apply(this,arguments)}function pj(e,n){return cj(e)||lj(e,n)||sj(e,n)||uj()}function uj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sj(e,n){if(e){if(typeof e=="string")return KP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return KP(e,n)}}function KP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function lj(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function cj(e){if(Array.isArray(e))return e}function QP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function xh(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?QP(Object(t),!0).forEach(function(r){fj(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):QP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function fj(e,n,t){return n=dj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dj(e){var n=mj(e,"string");return hu(n)=="symbol"?n:n+""}function mj(e,n){if(hu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(hu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function hj(e){return Array.isArray(e)&&Tn(e[0])&&Tn(e[1])?e.join(" ~ "):e}var vj=function(n){var t=n.separator,r=t===void 0?" : ":t,a=n.contentStyle,i=a===void 0?{}:a,u=n.itemStyle,s=u===void 0?{}:u,c=n.labelStyle,f=c===void 0?{}:c,m=n.payload,d=n.formatter,v=n.itemSorter,y=n.wrapperClassName,B=n.labelClassName,I=n.label,b=n.labelFormatter,W=n.accessibilityLayer,S=W===void 0?!1:W,M=function(){if(m&&m.length){var R={padding:0,margin:0},F=(v?Eg(m,v):m).map(function(V,G){if(V.type==="none")return null;var Y=xh({display:"block",paddingTop:4,paddingBottom:4,color:V.color||"#000"},s),Q=V.formatter||d||hj,$=V.value,K=V.name,ne=$,T=K;if(Q&&ne!=null&&T!=null){var L=Q($,K,V,G,m);if(Array.isArray(L)){var Z=pj(L,2);ne=Z[0],T=Z[1]}else ne=L}return E.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:Y},Tn(T)?E.createElement("span",{className:"recharts-tooltip-item-name"},T):null,Tn(T)?E.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,E.createElement("span",{className:"recharts-tooltip-item-value"},ne),E.createElement("span",{className:"recharts-tooltip-item-unit"},V.unit||""))});return E.createElement("ul",{className:"recharts-tooltip-item-list",style:R},F)}return null},O=xh({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),P=xh({margin:0},f),A=!ke(I),N=A?I:"",w=De("recharts-default-tooltip",y),H=De("recharts-tooltip-label",B);A&&b&&m!==void 0&&m!==null&&(N=b(I,m));var k=S?{role:"status","aria-live":"assertive"}:{};return E.createElement("div",Z6({className:w,style:O},k),E.createElement("p",{className:H,style:P},E.isValidElement(N)?N:"".concat(N)),M())};function vu(e){"@babel/helpers - typeof";return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vu(e)}function v0(e,n,t){return n=gj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function gj(e){var n=yj(e,"string");return vu(n)=="symbol"?n:n+""}function yj(e,n){if(vu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var zp="recharts-tooltip-wrapper",bj={visibility:"hidden"};function Ij(e){var n=e.coordinate,t=e.translateX,r=e.translateY;return De(zp,v0(v0(v0(v0({},"".concat(zp,"-right"),ce(t)&&n&&ce(n.x)&&t>=n.x),"".concat(zp,"-left"),ce(t)&&n&&ce(n.x)&&t<n.x),"".concat(zp,"-bottom"),ce(r)&&n&&ce(n.y)&&r>=n.y),"".concat(zp,"-top"),ce(r)&&n&&ce(n.y)&&r<n.y))}function YP(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,u=e.reverseDirection,s=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&ce(i[r]))return i[r];var m=t[r]-s-a,d=t[r]+a;if(n[r])return u[r]?m:d;if(u[r]){var v=m,y=c[r];return v<y?Math.max(d,c[r]):Math.max(m,c[r])}var B=d+s,I=c[r]+f;return B>I?Math.max(m,c[r]):Math.max(d,c[r])}function Bj(e){var n=e.translateX,t=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(n,"px, ").concat(t,"px, 0)"):"translate(".concat(n,"px, ").concat(t,"px)")}}function xj(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,u=e.tooltipBox,s=e.useTranslate3d,c=e.viewBox,f,m,d;return u.height>0&&u.width>0&&t?(m=YP({allowEscapeViewBox:n,coordinate:t,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:u.width,viewBox:c,viewBoxDimension:c.width}),d=YP({allowEscapeViewBox:n,coordinate:t,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:u.height,viewBox:c,viewBoxDimension:c.height}),f=Bj({translateX:m,translateY:d,useTranslate3d:s})):f=bj,{cssProperties:f,cssClasses:Ij({translateX:m,translateY:d,coordinate:t})}}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gi(e)}function XP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ZP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?XP(Object(t),!0).forEach(function(r){ev(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):XP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Pj(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function wj(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,WS(r.key),r)}}function Wj(e,n,t){return n&&wj(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sj(e,n,t){return n=q0(n),Mj(e,wS()?Reflect.construct(n,t||[],q0(e).constructor):n.apply(e,t))}function Mj(e,n){if(n&&(gi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Aj(e)}function Aj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wS=function(){return!!e})()}function q0(e){return q0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q0(e)}function _j(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&J6(e,n)}function J6(e,n){return J6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},J6(e,n)}function ev(e,n,t){return n=WS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function WS(e){var n=Oj(e,"string");return gi(n)=="symbol"?n:n+""}function Oj(e,n){if(gi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var JP=1,Hj=(function(e){function n(){var t;Pj(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=Sj(this,n,[].concat(a)),ev(t,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),ev(t,"handleKeyDown",function(u){if(u.key==="Escape"){var s,c,f,m;t.setState({dismissed:!0,dismissedAtCoordinate:{x:(s=(c=t.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&s!==void 0?s:0,y:(f=(m=t.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),t}return _j(n,e),Wj(n,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>JP||Math.abs(r.height-this.state.lastBoundingBox.height)>JP)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,u=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,B=a.position,I=a.reverseDirection,b=a.useTranslate3d,W=a.viewBox,S=a.wrapperStyle,M=xj({allowEscapeViewBox:u,coordinate:m,offsetTopLeft:y,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:W}),O=M.cssClasses,P=M.cssProperties,A=ZP(ZP({transition:v&&i?"transform ".concat(s,"ms ").concat(c):void 0},P),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},S);return E.createElement("div",{tabIndex:-1,className:O,style:A,ref:function(w){r.wrapperNode=w}},f)}}])})(U.PureComponent),Cj=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:Cj()};function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yi(e)}function ew(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function nw(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ew(Object(t),!0).forEach(function(r){Tg(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ew(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Nj(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Rj(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MS(r.key),r)}}function kj(e,n,t){return n&&Rj(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ej(e,n,t){return n=z0(n),Tj(e,SS()?Reflect.construct(n,t||[],z0(e).constructor):n.apply(e,t))}function Tj(e,n){if(n&&(yi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Dj(e)}function Dj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SS=function(){return!!e})()}function z0(e){return z0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z0(e)}function jj(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&nv(e,n)}function nv(e,n){return nv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},nv(e,n)}function Tg(e,n,t){return n=MS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MS(e){var n=$j(e,"string");return yi(n)=="symbol"?n:n+""}function $j(e,n){if(yi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Lj(e){return e.dataKey}function Fj(e,n){return E.isValidElement(e)?E.cloneElement(e,n):typeof e=="function"?E.createElement(e,n):E.createElement(vj,n)}var Mt=(function(e){function n(){return Nj(this,n),Ej(this,n,arguments)}return jj(n,e),kj(n,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,u=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,B=a.payload,I=a.payloadUniqBy,b=a.position,W=a.reverseDirection,S=a.useTranslate3d,M=a.viewBox,O=a.wrapperStyle,P=B??[];d&&P.length&&(P=gS(B.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,Lj));var A=P.length>0;return E.createElement(Hj,{allowEscapeViewBox:u,animationDuration:s,animationEasing:c,isAnimationActive:v,active:i,coordinate:m,hasPayload:A,offset:y,position:b,reverseDirection:W,useTranslate3d:S,viewBox:M,wrapperStyle:O},Fj(f,nw(nw({},this.props),{},{payload:P})))}}])})(U.PureComponent);Tg(Mt,"displayName","Tooltip");Tg(Mt,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Ph,tw;function qj(){if(tw)return Ph;tw=1;var e=Sr(),n=function(){return e.Date.now()};return Ph=n,Ph}var wh,rw;function zj(){if(rw)return wh;rw=1;var e=/\s/;function n(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}return wh=n,wh}var Wh,aw;function Uj(){if(aw)return Wh;aw=1;var e=zj(),n=/^\s+/;function t(r){return r&&r.slice(0,e(r)+1).replace(n,"")}return Wh=t,Wh}var Sh,ow;function AS(){if(ow)return Sh;ow=1;var e=Uj(),n=Ta(),t=Gi(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;function c(f){if(typeof f=="number")return f;if(t(f))return r;if(n(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=n(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||u.test(f)?s(f.slice(2),d?2:8):a.test(f)?r:+f}return Sh=c,Sh}var Mh,iw;function Vj(){if(iw)return Mh;iw=1;var e=Ta(),n=qj(),t=AS(),r="Expected a function",a=Math.max,i=Math.min;function u(s,c,f){var m,d,v,y,B,I,b=0,W=!1,S=!1,M=!0;if(typeof s!="function")throw new TypeError(r);c=t(c)||0,e(f)&&(W=!!f.leading,S="maxWait"in f,v=S?a(t(f.maxWait)||0,c):v,M="trailing"in f?!!f.trailing:M);function O(F){var V=m,G=d;return m=d=void 0,b=F,y=s.apply(G,V),y}function P(F){return b=F,B=setTimeout(w,c),W?O(F):y}function A(F){var V=F-I,G=F-b,Y=c-V;return S?i(Y,v-G):Y}function N(F){var V=F-I,G=F-b;return I===void 0||V>=c||V<0||S&&G>=v}function w(){var F=n();if(N(F))return H(F);B=setTimeout(w,A(F))}function H(F){return B=void 0,M&&m?O(F):(m=d=void 0,y)}function k(){B!==void 0&&clearTimeout(B),b=0,m=I=d=B=void 0}function D(){return B===void 0?y:H(n())}function R(){var F=n(),V=N(F);if(m=arguments,d=this,I=F,V){if(B===void 0)return P(I);if(S)return clearTimeout(B),B=setTimeout(w,c),O(I)}return B===void 0&&(B=setTimeout(w,c)),y}return R.cancel=k,R.flush=D,R}return Mh=u,Mh}var Ah,pw;function Gj(){if(pw)return Ah;pw=1;var e=Vj(),n=Ta(),t="Expected a function";function r(a,i,u){var s=!0,c=!0;if(typeof a!="function")throw new TypeError(t);return n(u)&&(s="leading"in u?!!u.leading:s,c="trailing"in u?!!u.trailing:c),e(a,i,{leading:s,maxWait:i,trailing:c})}return Ah=r,Ah}var Kj=Gj();const _S=Xe(Kj);function gu(e){"@babel/helpers - typeof";return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gu(e)}function uw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function g0(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?uw(Object(t),!0).forEach(function(r){Qj(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):uw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Qj(e,n,t){return n=Yj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Yj(e){var n=Xj(e,"string");return gu(n)=="symbol"?n:n+""}function Xj(e,n){if(gu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Zj(e,n){return t$(e)||n$(e,n)||e$(e,n)||Jj()}function Jj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e$(e,n){if(e){if(typeof e=="string")return sw(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sw(e,n)}}function sw(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function n$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function t$(e){if(Array.isArray(e))return e}var Dg=U.forwardRef(function(e,n){var t=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,u=i===void 0?"100%":i,s=e.height,c=s===void 0?"100%":s,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,B=e.debounce,I=B===void 0?0:B,b=e.id,W=e.className,S=e.onResize,M=e.style,O=M===void 0?{}:M,P=U.useRef(null),A=U.useRef();A.current=S,U.useImperativeHandle(n,function(){return Object.defineProperty(P.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),P.current},configurable:!0})});var N=U.useState({containerWidth:a.width,containerHeight:a.height}),w=Zj(N,2),H=w[0],k=w[1],D=U.useCallback(function(F,V){k(function(G){var Y=Math.round(F),Q=Math.round(V);return G.containerWidth===Y&&G.containerHeight===Q?G:{containerWidth:Y,containerHeight:Q}})},[]);U.useEffect(function(){var F=function(K){var ne,T=K[0].contentRect,L=T.width,Z=T.height;D(L,Z),(ne=A.current)===null||ne===void 0||ne.call(A,L,Z)};I>0&&(F=_S(F,I,{trailing:!0,leading:!1}));var V=new ResizeObserver(F),G=P.current.getBoundingClientRect(),Y=G.width,Q=G.height;return D(Y,Q),V.observe(P.current),function(){V.disconnect()}},[D,I]);var R=U.useMemo(function(){var F=H.containerWidth,V=H.containerHeight;if(F<0||V<0)return null;sr(so(u)||so(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,u,c),sr(!t||t>0,"The aspect(%s) must be greater than zero.",t);var G=so(u)?F:u,Y=so(c)?V:c;t&&t>0&&(G?Y=G/t:Y&&(G=Y*t),v&&Y>v&&(Y=v)),sr(G>0||Y>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,G,Y,u,c,m,d,t);var Q=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return E.Children.map(y,function($){return E.isValidElement($)?U.cloneElement($,g0({width:G,height:Y},Q?{style:g0({height:"100%",width:"100%",maxHeight:Y,maxWidth:G},$.props.style)}:{})):$})},[t,y,c,v,d,m,H,u]);return E.createElement("div",{id:b?"".concat(b):void 0,className:De("recharts-responsive-container",W),style:g0(g0({},O),{},{width:u,height:c,minWidth:m,minHeight:d,maxHeight:v}),ref:P},R)}),Xu=function(n){return null};Xu.displayName="Cell";function yu(e){"@babel/helpers - typeof";return yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yu(e)}function lw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function tv(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lw(Object(t),!0).forEach(function(r){r$(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function r$(e,n,t){return n=a$(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a$(e){var n=o$(e,"string");return yu(n)=="symbol"?n:n+""}function o$(e,n){if(yu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Jo={widthCache:{},cacheCount:0},i$=2e3,p$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},cw="recharts_measurement_span";function u$(e){var n=tv({},e);return Object.keys(n).forEach(function(t){n[t]||delete n[t]}),n}var ru=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n==null||Zr.isSsr)return{width:0,height:0};var r=u$(t),a=JSON.stringify({text:n,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(cw);i||(i=document.createElement("span"),i.setAttribute("id",cw),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var u=tv(tv({},p$),r);Object.assign(i.style,u),i.textContent="".concat(n);var s=i.getBoundingClientRect(),c={width:s.width,height:s.height};return Jo.widthCache[a]=c,++Jo.cacheCount>i$&&(Jo.cacheCount=0,Jo.widthCache={}),c}catch{return{width:0,height:0}}},s$=function(n){return{top:n.top+window.scrollY-document.documentElement.clientTop,left:n.left+window.scrollX-document.documentElement.clientLeft}};function bu(e){"@babel/helpers - typeof";return bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bu(e)}function U0(e,n){return d$(e)||f$(e,n)||c$(e,n)||l$()}function l$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c$(e,n){if(e){if(typeof e=="string")return fw(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fw(e,n)}}function fw(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function d$(e){if(Array.isArray(e))return e}function m$(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function dw(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v$(r.key),r)}}function h$(e,n,t){return n&&dw(e.prototype,n),t&&dw(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function v$(e){var n=g$(e,"string");return bu(n)=="symbol"?n:n+""}function g$(e,n){if(bu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var mw=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,hw=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,y$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,b$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,OS={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},I$=Object.keys(OS),ai="NaN";function B$(e,n){return e*OS[n]}var y0=(function(){function e(n,t){m$(this,e),this.num=n,this.unit=t,this.num=n,this.unit=t,Number.isNaN(n)&&(this.unit=""),t!==""&&!y$.test(t)&&(this.num=NaN,this.unit=""),I$.includes(t)&&(this.num=B$(n,t),this.unit="px")}return h$(e,[{key:"add",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num+t.num,this.unit)}},{key:"subtract",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num-t.num,this.unit)}},{key:"multiply",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num*t.num,this.unit||t.unit)}},{key:"divide",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num/t.num,this.unit||t.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(t){var r,a=(r=b$.exec(t))!==null&&r!==void 0?r:[],i=U0(a,3),u=i[1],s=i[2];return new e(parseFloat(u),s??"")}}])})();function HS(e){if(e.includes(ai))return ai;for(var n=e;n.includes("*")||n.includes("/");){var t,r=(t=mw.exec(n))!==null&&t!==void 0?t:[],a=U0(r,4),i=a[1],u=a[2],s=a[3],c=y0.parse(i??""),f=y0.parse(s??""),m=u==="*"?c.multiply(f):c.divide(f);if(m.isNaN())return ai;n=n.replace(mw,m.toString())}for(;n.includes("+")||/.-\d+(?:\.\d+)?/.test(n);){var d,v=(d=hw.exec(n))!==null&&d!==void 0?d:[],y=U0(v,4),B=y[1],I=y[2],b=y[3],W=y0.parse(B??""),S=y0.parse(b??""),M=I==="+"?W.add(S):W.subtract(S);if(M.isNaN())return ai;n=n.replace(hw,M.toString())}return n}var vw=/\(([^()]*)\)/;function x$(e){for(var n=e;n.includes("(");){var t=vw.exec(n),r=U0(t,2),a=r[1];n=n.replace(vw,HS(a))}return n}function P$(e){var n=e.replace(/\s+/g,"");return n=x$(n),n=HS(n),n}function w$(e){try{return P$(e)}catch{return ai}}function _h(e){var n=w$(e.slice(5,-1));return n===ai?"":n}var W$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],S$=["dx","dy","angle","className","breakAll"];function rv(){return rv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rv.apply(this,arguments)}function gw(e,n){if(e==null)return{};var t=M$(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function M$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function yw(e,n){return H$(e)||O$(e,n)||_$(e,n)||A$()}function A$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _$(e,n){if(e){if(typeof e=="string")return bw(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return bw(e,n)}}function bw(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function O$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function H$(e){if(Array.isArray(e))return e}var CS=/[ \f\n\r\t\v\u2028\u2029]+/,NS=function(n){var t=n.children,r=n.breakAll,a=n.style;try{var i=[];ke(t)||(r?i=t.toString().split(""):i=t.toString().split(CS));var u=i.map(function(c){return{word:c,width:ru(c,a).width}}),s=r?0:ru(" ",a).width;return{wordsWithComputedWidth:u,spaceWidth:s}}catch{return null}},C$=function(n,t,r,a,i){var u=n.maxLines,s=n.children,c=n.style,f=n.breakAll,m=ce(u),d=s,v=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G.reduce(function(Y,Q){var $=Q.word,K=Q.width,ne=Y[Y.length-1];if(ne&&(a==null||i||ne.width+K+r<Number(a)))ne.words.push($),ne.width+=K+r;else{var T={words:[$],width:K};Y.push(T)}return Y},[])},y=v(t),B=function(G){return G.reduce(function(Y,Q){return Y.width>Q.width?Y:Q})};if(!m)return y;for(var I="…",b=function(G){var Y=d.slice(0,G),Q=NS({breakAll:f,style:c,children:Y+I}).wordsWithComputedWidth,$=v(Q),K=$.length>u||B($).width>Number(a);return[K,$]},W=0,S=d.length-1,M=0,O;W<=S&&M<=d.length-1;){var P=Math.floor((W+S)/2),A=P-1,N=b(A),w=yw(N,2),H=w[0],k=w[1],D=b(P),R=yw(D,1),F=R[0];if(!H&&!F&&(W=P+1),H&&F&&(S=P-1),!H&&F){O=k;break}M++}return O||y},Iw=function(n){var t=ke(n)?[]:n.toString().split(CS);return[{words:t}]},N$=function(n){var t=n.width,r=n.scaleToFit,a=n.children,i=n.style,u=n.breakAll,s=n.maxLines;if((t||r)&&!Zr.isSsr){var c,f,m=NS({breakAll:u,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;c=d,f=v}else return Iw(a);return C$({breakAll:u,children:a,maxLines:s,style:i},c,f,t,r)}return Iw(a)},Bw="#808080",go=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,u=n.lineHeight,s=u===void 0?"1em":u,c=n.capHeight,f=c===void 0?"0.71em":c,m=n.scaleToFit,d=m===void 0?!1:m,v=n.textAnchor,y=v===void 0?"start":v,B=n.verticalAnchor,I=B===void 0?"end":B,b=n.fill,W=b===void 0?Bw:b,S=gw(n,W$),M=U.useMemo(function(){return N$({breakAll:S.breakAll,children:S.children,maxLines:S.maxLines,scaleToFit:d,style:S.style,width:S.width})},[S.breakAll,S.children,S.maxLines,d,S.style,S.width]),O=S.dx,P=S.dy,A=S.angle,N=S.className,w=S.breakAll,H=gw(S,S$);if(!Tn(r)||!Tn(i))return null;var k=r+(ce(O)?O:0),D=i+(ce(P)?P:0),R;switch(I){case"start":R=_h("calc(".concat(f,")"));break;case"middle":R=_h("calc(".concat((M.length-1)/2," * -").concat(s," + (").concat(f," / 2))"));break;default:R=_h("calc(".concat(M.length-1," * -").concat(s,")"));break}var F=[];if(d){var V=M[0].width,G=S.width;F.push("scale(".concat((ce(G)?G/V:1)/V,")"))}return A&&F.push("rotate(".concat(A,", ").concat(k,", ").concat(D,")")),F.length&&(H.transform=F.join(" ")),E.createElement("text",rv({},Oe(H,!0),{x:k,y:D,className:De("recharts-text",N),textAnchor:y,fill:W.includes("url")?Bw:W}),M.map(function(Y,Q){var $=Y.words.join(w?"":" ");return E.createElement("tspan",{x:k,dy:Q===0?R:s,key:"".concat($,"-").concat(Q)},$)}))};function Ha(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function R$(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function jg(e){let n,t,r;e.length!==2?(n=Ha,t=(s,c)=>Ha(e(s),c),r=(s,c)=>e(s)-c):(n=e===Ha||e===R$?e:k$,t=e,r=e);function a(s,c,f=0,m=s.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<0?f=d+1:m=d}while(f<m)}return f}function i(s,c,f=0,m=s.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<=0?f=d+1:m=d}while(f<m)}return f}function u(s,c,f=0,m=s.length){const d=a(s,c,f,m-1);return d>f&&r(s[d-1],c)>-r(s[d],c)?d-1:d}return{left:a,center:u,right:i}}function k$(){return 0}function RS(e){return e===null?NaN:+e}function*E$(e,n){for(let t of e)t!=null&&(t=+t)>=t&&(yield t)}const T$=jg(Ha),Zu=T$.right;jg(RS).center;class xw extends Map{constructor(n,t=$$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),n!=null)for(const[r,a]of n)this.set(r,a)}get(n){return super.get(Pw(this,n))}has(n){return super.has(Pw(this,n))}set(n,t){return super.set(D$(this,n),t)}delete(n){return super.delete(j$(this,n))}}function Pw({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):t}function D$({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):(e.set(r,t),t)}function j$({_intern:e,_key:n},t){const r=n(t);return e.has(r)&&(t=e.get(r),e.delete(r)),t}function $$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function L$(e=Ha){if(e===Ha)return kS;if(typeof e!="function")throw new TypeError("compare is not a function");return(n,t)=>{const r=e(n,t);return r||r===0?r:(e(t,t)===0)-(e(n,n)===0)}}function kS(e,n){return(e==null||!(e>=e))-(n==null||!(n>=n))||(e<n?-1:e>n?1:0)}const F$=Math.sqrt(50),q$=Math.sqrt(10),z$=Math.sqrt(2);function V0(e,n,t){const r=(n-e)/Math.max(0,t),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),u=i>=F$?10:i>=q$?5:i>=z$?2:1;let s,c,f;return a<0?(f=Math.pow(10,-a)/u,s=Math.round(e*f),c=Math.round(n*f),s/f<e&&++s,c/f>n&&--c,f=-f):(f=Math.pow(10,a)*u,s=Math.round(e/f),c=Math.round(n/f),s*f<e&&++s,c*f>n&&--c),c<s&&.5<=t&&t<2?V0(e,n,t*2):[s,c,f]}function av(e,n,t){if(n=+n,e=+e,t=+t,!(t>0))return[];if(e===n)return[e];const r=n<e,[a,i,u]=r?V0(n,e,t):V0(e,n,t);if(!(i>=a))return[];const s=i-a+1,c=new Array(s);if(r)if(u<0)for(let f=0;f<s;++f)c[f]=(i-f)/-u;else for(let f=0;f<s;++f)c[f]=(i-f)*u;else if(u<0)for(let f=0;f<s;++f)c[f]=(a+f)/-u;else for(let f=0;f<s;++f)c[f]=(a+f)*u;return c}function ov(e,n,t){return n=+n,e=+e,t=+t,V0(e,n,t)[2]}function iv(e,n,t){n=+n,e=+e,t=+t;const r=n<e,a=r?ov(n,e,t):ov(e,n,t);return(r?-1:1)*(a<0?1/-a:a)}function ww(e,n){let t;for(const r of e)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);return t}function Ww(e,n){let t;for(const r of e)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);return t}function ES(e,n,t=0,r=1/0,a){if(n=Math.floor(n),t=Math.floor(Math.max(0,t)),r=Math.floor(Math.min(e.length-1,r)),!(t<=n&&n<=r))return e;for(a=a===void 0?kS:L$(a);r>t;){if(r-t>600){const c=r-t+1,f=n-t+1,m=Math.log(c),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(t,Math.floor(n-f*d/c+v)),B=Math.min(r,Math.floor(n+(c-f)*d/c+v));ES(e,n,y,B,a)}const i=e[n];let u=t,s=r;for(Up(e,t,n),a(e[r],i)>0&&Up(e,t,r);u<s;){for(Up(e,u,s),++u,--s;a(e[u],i)<0;)++u;for(;a(e[s],i)>0;)--s}a(e[t],i)===0?Up(e,t,s):(++s,Up(e,s,r)),s<=n&&(t=s+1),n<=s&&(r=s-1)}return e}function Up(e,n,t){const r=e[n];e[n]=e[t],e[t]=r}function U$(e,n,t){if(e=Float64Array.from(E$(e)),!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return Ww(e);if(n>=1)return ww(e);var r,a=(r-1)*n,i=Math.floor(a),u=ww(ES(e,i).subarray(0,i+1)),s=Ww(e.subarray(i+1));return u+(s-u)*(a-i)}}function V$(e,n,t=RS){if(!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return+t(e[0],0,e);if(n>=1)return+t(e[r-1],r-1,e);var r,a=(r-1)*n,i=Math.floor(a),u=+t(e[i],i,e),s=+t(e[i+1],i+1,e);return u+(s-u)*(a-i)}}function G$(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=Math.max(0,Math.ceil((n-e)/t))|0,i=new Array(a);++r<a;)i[r]=e+r*t;return i}function Yt(e,n){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(n).domain(e);break}return this}function Jr(e,n){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof n=="function"?this.interpolator(n):this.range(n);break}}return this}const pv=Symbol("implicit");function $g(){var e=new xw,n=[],t=[],r=pv;function a(i){let u=e.get(i);if(u===void 0){if(r!==pv)return r;e.set(i,u=n.push(i)-1)}return t[u%t.length]}return a.domain=function(i){if(!arguments.length)return n.slice();n=[],e=new xw;for(const u of i)e.has(u)||e.set(u,n.push(u)-1);return a},a.range=function(i){return arguments.length?(t=Array.from(i),a):t.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return $g(n,t).unknown(r)},Yt.apply(a,arguments),a}function Iu(){var e=$g().unknown(void 0),n=e.domain,t=e.range,r=0,a=1,i,u,s=!1,c=0,f=0,m=.5;delete e.unknown;function d(){var v=n().length,y=a<r,B=y?a:r,I=y?r:a;i=(I-B)/Math.max(1,v-c+f*2),s&&(i=Math.floor(i)),B+=(I-B-i*(v-c))*m,u=i*(1-c),s&&(B=Math.round(B),u=Math.round(u));var b=G$(v).map(function(W){return B+i*W});return t(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(n(v),d()):n()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,s=!0,d()},e.bandwidth=function(){return u},e.step=function(){return i},e.round=function(v){return arguments.length?(s=!!v,d()):s},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return Iu(n(),[r,a]).round(s).paddingInner(c).paddingOuter(f).align(m)},Yt.apply(d(),arguments)}function TS(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return TS(n())},e}function au(){return TS(Iu.apply(null,arguments).paddingInner(1))}function Lg(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function DS(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function Ju(){}var Bu=.7,G0=1/Bu,li="\\s*([+-]?\\d+)\\s*",xu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",K$=/^#([0-9a-f]{3,8})$/,Q$=new RegExp(`^rgb\\(${li},${li},${li}\\)$`),Y$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),X$=new RegExp(`^rgba\\(${li},${li},${li},${xu}\\)$`),Z$=new RegExp(`^rgba\\(${xr},${xr},${xr},${xu}\\)$`),J$=new RegExp(`^hsl\\(${xu},${xr},${xr}\\)$`),e8=new RegExp(`^hsla\\(${xu},${xr},${xr},${xu}\\)$`),Sw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Lg(Ju,Pu,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Mw,formatHex:Mw,formatHex8:n8,formatHsl:t8,formatRgb:Aw,toString:Aw});function Mw(){return this.rgb().formatHex()}function n8(){return this.rgb().formatHex8()}function t8(){return jS(this).formatHsl()}function Aw(){return this.rgb().formatRgb()}function Pu(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=K$.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?_w(n):t===3?new yt(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?b0(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?b0(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Q$.exec(e))?new yt(n[1],n[2],n[3],1):(n=Y$.exec(e))?new yt(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=X$.exec(e))?b0(n[1],n[2],n[3],n[4]):(n=Z$.exec(e))?b0(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=J$.exec(e))?Cw(n[1],n[2]/100,n[3]/100,1):(n=e8.exec(e))?Cw(n[1],n[2]/100,n[3]/100,n[4]):Sw.hasOwnProperty(e)?_w(Sw[e]):e==="transparent"?new yt(NaN,NaN,NaN,0):null}function _w(e){return new yt(e>>16&255,e>>8&255,e&255,1)}function b0(e,n,t,r){return r<=0&&(e=n=t=NaN),new yt(e,n,t,r)}function r8(e){return e instanceof Ju||(e=Pu(e)),e?(e=e.rgb(),new yt(e.r,e.g,e.b,e.opacity)):new yt}function uv(e,n,t,r){return arguments.length===1?r8(e):new yt(e,n,t,r??1)}function yt(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Lg(yt,uv,DS(Ju,{brighter(e){return e=e==null?G0:Math.pow(G0,e),new yt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bu:Math.pow(Bu,e),new yt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new yt(ho(this.r),ho(this.g),ho(this.b),K0(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ow,formatHex:Ow,formatHex8:a8,formatRgb:Hw,toString:Hw}));function Ow(){return`#${lo(this.r)}${lo(this.g)}${lo(this.b)}`}function a8(){return`#${lo(this.r)}${lo(this.g)}${lo(this.b)}${lo((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hw(){const e=K0(this.opacity);return`${e===1?"rgb(":"rgba("}${ho(this.r)}, ${ho(this.g)}, ${ho(this.b)}${e===1?")":`, ${e})`}`}function K0(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function ho(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function lo(e){return e=ho(e),(e<16?"0":"")+e.toString(16)}function Cw(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new ur(e,n,t,r)}function jS(e){if(e instanceof ur)return new ur(e.h,e.s,e.l,e.opacity);if(e instanceof Ju||(e=Pu(e)),!e)return new ur;if(e instanceof ur)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),i=Math.max(n,t,r),u=NaN,s=i-a,c=(i+a)/2;return s?(n===i?u=(t-r)/s+(t<r)*6:t===i?u=(r-n)/s+2:u=(n-t)/s+4,s/=c<.5?i+a:2-i-a,u*=60):s=c>0&&c<1?0:u,new ur(u,s,c,e.opacity)}function o8(e,n,t,r){return arguments.length===1?jS(e):new ur(e,n,t,r??1)}function ur(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Lg(ur,o8,DS(Ju,{brighter(e){return e=e==null?G0:Math.pow(G0,e),new ur(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bu:Math.pow(Bu,e),new ur(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new yt(Oh(e>=240?e-240:e+120,a,r),Oh(e,a,r),Oh(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new ur(Nw(this.h),I0(this.s),I0(this.l),K0(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=K0(this.opacity);return`${e===1?"hsl(":"hsla("}${Nw(this.h)}, ${I0(this.s)*100}%, ${I0(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Nw(e){return e=(e||0)%360,e<0?e+360:e}function I0(e){return Math.max(0,Math.min(1,e||0))}function Oh(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Fg=e=>()=>e;function i8(e,n){return function(t){return e+t*n}}function p8(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function u8(e){return(e=+e)==1?$S:function(n,t){return t-n?p8(n,t,e):Fg(isNaN(n)?t:n)}}function $S(e,n){var t=n-e;return t?i8(e,t):Fg(isNaN(e)?n:e)}const Rw=(function e(n){var t=u8(n);function r(a,i){var u=t((a=uv(a)).r,(i=uv(i)).r),s=t(a.g,i.g),c=t(a.b,i.b),f=$S(a.opacity,i.opacity);return function(m){return a.r=u(m),a.g=s(m),a.b=c(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function s8(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),a;return function(i){for(a=0;a<t;++a)r[a]=e[a]*(1-i)+n[a]*i;return r}}function l8(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function c8(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,a=new Array(r),i=new Array(t),u;for(u=0;u<r;++u)a[u]=Xi(e[u],n[u]);for(;u<t;++u)i[u]=n[u];return function(s){for(u=0;u<r;++u)i[u]=a[u](s);return i}}function f8(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function Q0(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function d8(e,n){var t={},r={},a;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(a in n)a in e?t[a]=Xi(e[a],n[a]):r[a]=n[a];return function(i){for(a in t)r[a]=t[a](i);return r}}var sv=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Hh=new RegExp(sv.source,"g");function m8(e){return function(){return e}}function h8(e){return function(n){return e(n)+""}}function v8(e,n){var t=sv.lastIndex=Hh.lastIndex=0,r,a,i,u=-1,s=[],c=[];for(e=e+"",n=n+"";(r=sv.exec(e))&&(a=Hh.exec(n));)(i=a.index)>t&&(i=n.slice(t,i),s[u]?s[u]+=i:s[++u]=i),(r=r[0])===(a=a[0])?s[u]?s[u]+=a:s[++u]=a:(s[++u]=null,c.push({i:u,x:Q0(r,a)})),t=Hh.lastIndex;return t<n.length&&(i=n.slice(t),s[u]?s[u]+=i:s[++u]=i),s.length<2?c[0]?h8(c[0].x):m8(n):(n=c.length,function(f){for(var m=0,d;m<n;++m)s[(d=c[m]).i]=d.x(f);return s.join("")})}function Xi(e,n){var t=typeof n,r;return n==null||t==="boolean"?Fg(n):(t==="number"?Q0:t==="string"?(r=Pu(n))?(n=r,Rw):v8:n instanceof Pu?Rw:n instanceof Date?f8:l8(n)?s8:Array.isArray(n)?c8:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?d8:Q0)(e,n)}function qg(e,n){return e=+e,n=+n,function(t){return Math.round(e*(1-t)+n*t)}}function g8(e,n){n===void 0&&(n=e,e=Xi);for(var t=0,r=n.length-1,a=n[0],i=new Array(r<0?0:r);t<r;)i[t]=e(a,a=n[++t]);return function(u){var s=Math.max(0,Math.min(r-1,Math.floor(u*=r)));return i[s](u-s)}}function y8(e){return function(){return e}}function Y0(e){return+e}var kw=[0,1];function pt(e){return e}function lv(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:y8(isNaN(n)?NaN:.5)}function b8(e,n){var t;return e>n&&(t=e,e=n,n=t),function(r){return Math.max(e,Math.min(n,r))}}function I8(e,n,t){var r=e[0],a=e[1],i=n[0],u=n[1];return a<r?(r=lv(a,r),i=t(u,i)):(r=lv(r,a),i=t(i,u)),function(s){return i(r(s))}}function B8(e,n,t){var r=Math.min(e.length,n.length)-1,a=new Array(r),i=new Array(r),u=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),n=n.slice().reverse());++u<r;)a[u]=lv(e[u],e[u+1]),i[u]=t(n[u],n[u+1]);return function(s){var c=Zu(e,s,1,r)-1;return i[c](a[c](s))}}function es(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function ec(){var e=kw,n=kw,t=Xi,r,a,i,u=pt,s,c,f;function m(){var v=Math.min(e.length,n.length);return u!==pt&&(u=b8(e[0],e[v-1])),s=v>2?B8:I8,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=s(e.map(r),n,t)))(r(u(v)))}return d.invert=function(v){return u(a((f||(f=s(n,e.map(r),Q0)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Y0),m()):e.slice()},d.range=function(v){return arguments.length?(n=Array.from(v),m()):n.slice()},d.rangeRound=function(v){return n=Array.from(v),t=qg,m()},d.clamp=function(v){return arguments.length?(u=v?!0:pt,m()):u!==pt},d.interpolate=function(v){return arguments.length?(t=v,m()):t},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,m()}}function zg(){return ec()(pt,pt)}function x8(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function X0(e,n){if(!isFinite(e)||e===0)return null;var t=(e=n?e.toExponential(n-1):e.toExponential()).indexOf("e"),r=e.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+e.slice(t+1)]}function bi(e){return e=X0(Math.abs(e)),e?e[1]:NaN}function P8(e,n){return function(t,r){for(var a=t.length,i=[],u=0,s=e[0],c=0;a>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),i.push(t.substring(a-=s,a+s)),!((c+=s+1)>r));)s=e[u=(u+1)%e.length];return i.reverse().join(n)}}function w8(e){return function(n){return n.replace(/[0-9]/g,function(t){return e[+t]})}}var W8=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function wu(e){if(!(n=W8.exec(e)))throw new Error("invalid format: "+e);var n;return new Ug({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}wu.prototype=Ug.prototype;function Ug(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Ug.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function S8(e){e:for(var n=e.length,t=1,r=-1,a;t<n;++t)switch(e[t]){case".":r=a=t;break;case"0":r===0&&(r=t),a=t;break;default:if(!+e[t])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Z0;function M8(e,n){var t=X0(e,n);if(!t)return Z0=void 0,e.toPrecision(n);var r=t[0],a=t[1],i=a-(Z0=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,u=r.length;return i===u?r:i>u?r+new Array(i-u+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+X0(e,Math.max(0,n+i-1))[0]}function Ew(e,n){var t=X0(e,n);if(!t)return e+"";var r=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const Tw={"%":(e,n)=>(e*100).toFixed(n),b:e=>Math.round(e).toString(2),c:e=>e+"",d:x8,e:(e,n)=>e.toExponential(n),f:(e,n)=>e.toFixed(n),g:(e,n)=>e.toPrecision(n),o:e=>Math.round(e).toString(8),p:(e,n)=>Ew(e*100,n),r:Ew,s:M8,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Dw(e){return e}var jw=Array.prototype.map,$w=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function A8(e){var n=e.grouping===void 0||e.thousands===void 0?Dw:P8(jw.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?Dw:w8(jw.call(e.numerals,String)),u=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=wu(d);var y=d.fill,B=d.align,I=d.sign,b=d.symbol,W=d.zero,S=d.width,M=d.comma,O=d.precision,P=d.trim,A=d.type;A==="n"?(M=!0,A="g"):Tw[A]||(O===void 0&&(O=12),P=!0,A="g"),(W||y==="0"&&B==="=")&&(W=!0,y="0",B="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?t:b==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),w=(b==="$"?r:/[%p]/.test(A)?u:"")+(v&&v.suffix!==void 0?v.suffix:""),H=Tw[A],k=/[defgprs%]/.test(A);O=O===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function D(R){var F=N,V=w,G,Y,Q;if(A==="c")V=H(R)+V,R="";else{R=+R;var $=R<0||1/R<0;if(R=isNaN(R)?c:H(Math.abs(R),O),P&&(R=S8(R)),$&&+R==0&&I!=="+"&&($=!1),F=($?I==="("?I:s:I==="-"||I==="("?"":I)+F,V=(A==="s"&&!isNaN(R)&&Z0!==void 0?$w[8+Z0/3]:"")+V+($&&I==="("?")":""),k){for(G=-1,Y=R.length;++G<Y;)if(Q=R.charCodeAt(G),48>Q||Q>57){V=(Q===46?a+R.slice(G+1):R.slice(G))+V,R=R.slice(0,G);break}}}M&&!W&&(R=n(R,1/0));var K=F.length+R.length+V.length,ne=K<S?new Array(S-K+1).join(y):"";switch(M&&W&&(R=n(ne+R,ne.length?S-V.length:1/0),ne=""),B){case"<":R=F+R+V+ne;break;case"=":R=F+ne+R+V;break;case"^":R=ne.slice(0,K=ne.length>>1)+F+R+V+ne.slice(K);break;default:R=ne+F+R+V;break}return i(R)}return D.toString=function(){return d+""},D}function m(d,v){var y=Math.max(-8,Math.min(8,Math.floor(bi(v)/3)))*3,B=Math.pow(10,-y),I=f((d=wu(d),d.type="f",d),{suffix:$w[8+y/3]});return function(b){return I(B*b)}}return{format:f,formatPrefix:m}}var B0,Vg,LS;_8({thousands:",",grouping:[3],currency:["$",""]});function _8(e){return B0=A8(e),Vg=B0.format,LS=B0.formatPrefix,B0}function O8(e){return Math.max(0,-bi(Math.abs(e)))}function H8(e,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bi(n)/3)))*3-bi(Math.abs(e)))}function C8(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,bi(n)-bi(e))+1}function FS(e,n,t,r){var a=iv(e,n,t),i;switch(r=wu(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(e),Math.abs(n));return r.precision==null&&!isNaN(i=H8(a,u))&&(r.precision=i),LS(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=C8(a,Math.max(Math.abs(e),Math.abs(n))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=O8(a))&&(r.precision=i-(r.type==="%")*2);break}}return Vg(r)}function ja(e){var n=e.domain;return e.ticks=function(t){var r=n();return av(r[0],r[r.length-1],t??10)},e.tickFormat=function(t,r){var a=n();return FS(a[0],a[a.length-1],t??10,r)},e.nice=function(t){t==null&&(t=10);var r=n(),a=0,i=r.length-1,u=r[a],s=r[i],c,f,m=10;for(s<u&&(f=u,u=s,s=f,f=a,a=i,i=f);m-- >0;){if(f=ov(u,s,t),f===c)return r[a]=u,r[i]=s,n(r);if(f>0)u=Math.floor(u/f)*f,s=Math.ceil(s/f)*f;else if(f<0)u=Math.ceil(u*f)/f,s=Math.floor(s*f)/f;else break;c=f}return e},e}function J0(){var e=zg();return e.copy=function(){return es(e,J0())},Yt.apply(e,arguments),ja(e)}function qS(e){var n;function t(r){return r==null||isNaN(r=+r)?n:r}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(e=Array.from(r,Y0),t):e.slice()},t.unknown=function(r){return arguments.length?(n=r,t):n},t.copy=function(){return qS(e).unknown(n)},e=arguments.length?Array.from(e,Y0):[0,1],ja(t)}function zS(e,n){e=e.slice();var t=0,r=e.length-1,a=e[t],i=e[r],u;return i<a&&(u=t,t=r,r=u,u=a,a=i,i=u),e[t]=n.floor(a),e[r]=n.ceil(i),e}function Lw(e){return Math.log(e)}function Fw(e){return Math.exp(e)}function N8(e){return-Math.log(-e)}function R8(e){return-Math.exp(-e)}function k8(e){return isFinite(e)?+("1e"+e):e<0?0:e}function E8(e){return e===10?k8:e===Math.E?Math.exp:n=>Math.pow(e,n)}function T8(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),n=>Math.log(n)/e)}function qw(e){return(n,t)=>-e(-n,t)}function Gg(e){const n=e(Lw,Fw),t=n.domain;let r=10,a,i;function u(){return a=T8(r),i=E8(r),t()[0]<0?(a=qw(a),i=qw(i),e(N8,R8)):e(Lw,Fw),n}return n.base=function(s){return arguments.length?(r=+s,u()):r},n.domain=function(s){return arguments.length?(t(s),u()):t()},n.ticks=s=>{const c=t();let f=c[0],m=c[c.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),y=a(m),B,I;const b=s==null?10:+s;let W=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(B=1;B<r;++B)if(I=v<0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}}else for(;v<=y;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}W.length*2<b&&(W=av(f,m,b))}else W=av(v,y,Math.min(y-v,b)).map(i);return d?W.reverse():W},n.tickFormat=(s,c)=>{if(s==null&&(s=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=wu(c)).precision==null&&(c.trim=!0),c=Vg(c)),s===1/0)return c;const f=Math.max(1,r*s/n.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?c(m):""}},n.nice=()=>t(zS(t(),{floor:s=>i(Math.floor(a(s))),ceil:s=>i(Math.ceil(a(s)))})),n}function US(){const e=Gg(ec()).domain([1,10]);return e.copy=()=>es(e,US()).base(e.base()),Yt.apply(e,arguments),e}function zw(e){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/e))}}function Uw(e){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*e}}function Kg(e){var n=1,t=e(zw(n),Uw(n));return t.constant=function(r){return arguments.length?e(zw(n=+r),Uw(n)):n},ja(t)}function VS(){var e=Kg(ec());return e.copy=function(){return es(e,VS()).constant(e.constant())},Yt.apply(e,arguments)}function Vw(e){return function(n){return n<0?-Math.pow(-n,e):Math.pow(n,e)}}function D8(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function j8(e){return e<0?-e*e:e*e}function Qg(e){var n=e(pt,pt),t=1;function r(){return t===1?e(pt,pt):t===.5?e(D8,j8):e(Vw(t),Vw(1/t))}return n.exponent=function(a){return arguments.length?(t=+a,r()):t},ja(n)}function Yg(){var e=Qg(ec());return e.copy=function(){return es(e,Yg()).exponent(e.exponent())},Yt.apply(e,arguments),e}function $8(){return Yg.apply(null,arguments).exponent(.5)}function Gw(e){return Math.sign(e)*e*e}function L8(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function GS(){var e=zg(),n=[0,1],t=!1,r;function a(i){var u=L8(e(i));return isNaN(u)?r:t?Math.round(u):u}return a.invert=function(i){return e.invert(Gw(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((n=Array.from(i,Y0)).map(Gw)),a):n.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(t=!!i,a):t},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return GS(e.domain(),n).round(t).clamp(e.clamp()).unknown(r)},Yt.apply(a,arguments),ja(a)}function KS(){var e=[],n=[],t=[],r;function a(){var u=0,s=Math.max(1,n.length);for(t=new Array(s-1);++u<s;)t[u-1]=V$(e,u/s);return i}function i(u){return u==null||isNaN(u=+u)?r:n[Zu(t,u)]}return i.invertExtent=function(u){var s=n.indexOf(u);return s<0?[NaN,NaN]:[s>0?t[s-1]:e[0],s<t.length?t[s]:e[e.length-1]]},i.domain=function(u){if(!arguments.length)return e.slice();e=[];for(let s of u)s!=null&&!isNaN(s=+s)&&e.push(s);return e.sort(Ha),a()},i.range=function(u){return arguments.length?(n=Array.from(u),a()):n.slice()},i.unknown=function(u){return arguments.length?(r=u,i):r},i.quantiles=function(){return t.slice()},i.copy=function(){return KS().domain(e).range(n).unknown(r)},Yt.apply(i,arguments)}function QS(){var e=0,n=1,t=1,r=[.5],a=[0,1],i;function u(c){return c!=null&&c<=c?a[Zu(r,c,0,t)]:i}function s(){var c=-1;for(r=new Array(t);++c<t;)r[c]=((c+1)*n-(c-t)*e)/(t+1);return u}return u.domain=function(c){return arguments.length?([e,n]=c,e=+e,n=+n,s()):[e,n]},u.range=function(c){return arguments.length?(t=(a=Array.from(c)).length-1,s()):a.slice()},u.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=t?[r[t-1],n]:[r[f-1],r[f]]},u.unknown=function(c){return arguments.length&&(i=c),u},u.thresholds=function(){return r.slice()},u.copy=function(){return QS().domain([e,n]).range(a).unknown(i)},Yt.apply(ja(u),arguments)}function YS(){var e=[.5],n=[0,1],t,r=1;function a(i){return i!=null&&i<=i?n[Zu(e,i,0,r)]:t}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,n.length-1),a):e.slice()},a.range=function(i){return arguments.length?(n=Array.from(i),r=Math.min(e.length,n.length-1),a):n.slice()},a.invertExtent=function(i){var u=n.indexOf(i);return[e[u-1],e[u]]},a.unknown=function(i){return arguments.length?(t=i,a):t},a.copy=function(){return YS().domain(e).range(n).unknown(t)},Yt.apply(a,arguments)}const Ch=new Date,Nh=new Date;function Dn(e,n,t,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),n(i,1),e(i),i),a.round=i=>{const u=a(i),s=a.ceil(i);return i-u<s-i?u:s},a.offset=(i,u)=>(n(i=new Date(+i),u==null?1:Math.floor(u)),i),a.range=(i,u,s)=>{const c=[];if(i=a.ceil(i),s=s==null?1:Math.floor(s),!(i<u)||!(s>0))return c;let f;do c.push(f=new Date(+i)),n(i,s),e(i);while(f<i&&i<u);return c},a.filter=i=>Dn(u=>{if(u>=u)for(;e(u),!i(u);)u.setTime(u-1)},(u,s)=>{if(u>=u)if(s<0)for(;++s<=0;)for(;n(u,-1),!i(u););else for(;--s>=0;)for(;n(u,1),!i(u););}),t&&(a.count=(i,u)=>(Ch.setTime(+i),Nh.setTime(+u),e(Ch),e(Nh),Math.floor(t(Ch,Nh))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?u=>r(u)%i===0:u=>a.count(0,u)%i===0):a)),a}const el=Dn(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);el.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Dn(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):el);el.range;const $r=1e3,Gt=$r*60,Lr=Gt*60,Gr=Lr*24,Xg=Gr*7,Kw=Gr*30,Rh=Gr*365,co=Dn(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*$r)},(e,n)=>(n-e)/$r,e=>e.getUTCSeconds());co.range;const Zg=Dn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,n)=>{e.setTime(+e+n*Gt)},(e,n)=>(n-e)/Gt,e=>e.getMinutes());Zg.range;const Jg=Dn(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*Gt)},(e,n)=>(n-e)/Gt,e=>e.getUTCMinutes());Jg.range;const ey=Dn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Gt)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getHours());ey.range;const ny=Dn(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getUTCHours());ny.range;const ns=Dn(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*Gt)/Gr,e=>e.getDate()-1);ns.range;const nc=Dn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>e.getUTCDate()-1);nc.range;const XS=Dn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>Math.floor(e/Gr));XS.range;function xo(e){return Dn(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Gt)/Xg)}const tc=xo(0),nl=xo(1),F8=xo(2),q8=xo(3),Ii=xo(4),z8=xo(5),U8=xo(6);tc.range;nl.range;F8.range;q8.range;Ii.range;z8.range;U8.range;function Po(e){return Dn(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/Xg)}const rc=Po(0),tl=Po(1),V8=Po(2),G8=Po(3),Bi=Po(4),K8=Po(5),Q8=Po(6);rc.range;tl.range;V8.range;G8.range;Bi.range;K8.range;Q8.range;const ty=Dn(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());ty.range;const ry=Dn(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ry.range;const Kr=Dn(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Dn(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});Kr.range;const Qr=Dn(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Dn(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});Qr.range;function ZS(e,n,t,r,a,i){const u=[[co,1,$r],[co,5,5*$r],[co,15,15*$r],[co,30,30*$r],[i,1,Gt],[i,5,5*Gt],[i,15,15*Gt],[i,30,30*Gt],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[t,1,Xg],[n,1,Kw],[n,3,3*Kw],[e,1,Rh]];function s(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const y=d&&typeof d.range=="function"?d:c(f,m,d),B=y?y.range(f,+m+1):[];return v?B.reverse():B}function c(f,m,d){const v=Math.abs(m-f)/d,y=jg(([,,b])=>b).right(u,v);if(y===u.length)return e.every(iv(f/Rh,m/Rh,d));if(y===0)return el.every(Math.max(iv(f,m,d),1));const[B,I]=u[v/u[y-1][2]<u[y][2]/v?y-1:y];return B.every(I)}return[s,c]}const[Y8,X8]=ZS(Qr,ry,rc,XS,ny,Jg),[Z8,J8]=ZS(Kr,ty,tc,ns,ey,Zg);function kh(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Eh(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Vp(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function eL(e){var n=e.dateTime,t=e.date,r=e.time,a=e.periods,i=e.days,u=e.shortDays,s=e.months,c=e.shortMonths,f=Gp(a),m=Kp(a),d=Gp(i),v=Kp(i),y=Gp(u),B=Kp(u),I=Gp(s),b=Kp(s),W=Gp(c),S=Kp(c),M={a:Q,A:$,b:K,B:ne,c:null,d:e4,e:e4,f:PL,g:NL,G:kL,H:IL,I:BL,j:xL,L:JS,m:wL,M:WL,p:T,q:L,Q:r4,s:a4,S:SL,u:ML,U:AL,V:_L,w:OL,W:HL,x:null,X:null,y:CL,Y:RL,Z:EL,"%":t4},O={a:Z,A:se,b:he,B:Ie,c:null,d:n4,e:n4,f:$L,g:YL,G:ZL,H:TL,I:DL,j:jL,L:nM,m:LL,M:FL,p:Be,q:de,Q:r4,s:a4,S:qL,u:zL,U:UL,V:VL,w:GL,W:KL,x:null,X:null,y:QL,Y:XL,Z:JL,"%":t4},P={a:k,A:D,b:R,B:F,c:V,d:Zw,e:Zw,f:vL,g:Xw,G:Yw,H:Jw,I:Jw,j:fL,L:hL,m:cL,M:dL,p:H,q:lL,Q:yL,s:bL,S:mL,u:oL,U:iL,V:pL,w:aL,W:uL,x:G,X:Y,y:Xw,Y:Yw,Z:sL,"%":gL};M.x=A(t,M),M.X=A(r,M),M.c=A(n,M),O.x=A(t,O),O.X=A(r,O),O.c=A(n,O);function A(ae,re){return function(ie){var J=[],ge=-1,me=0,ye=ae.length,ve,Pe,je;for(ie instanceof Date||(ie=new Date(+ie));++ge<ye;)ae.charCodeAt(ge)===37&&(J.push(ae.slice(me,ge)),(Pe=Qw[ve=ae.charAt(++ge)])!=null?ve=ae.charAt(++ge):Pe=ve==="e"?" ":"0",(je=re[ve])&&(ve=je(ie,Pe)),J.push(ve),me=ge+1);return J.push(ae.slice(me,ge)),J.join("")}}function N(ae,re){return function(ie){var J=Vp(1900,void 0,1),ge=w(J,ae,ie+="",0),me,ye;if(ge!=ie.length)return null;if("Q"in J)return new Date(J.Q);if("s"in J)return new Date(J.s*1e3+("L"in J?J.L:0));if(re&&!("Z"in J)&&(J.Z=0),"p"in J&&(J.H=J.H%12+J.p*12),J.m===void 0&&(J.m="q"in J?J.q:0),"V"in J){if(J.V<1||J.V>53)return null;"w"in J||(J.w=1),"Z"in J?(me=Eh(Vp(J.y,0,1)),ye=me.getUTCDay(),me=ye>4||ye===0?tl.ceil(me):tl(me),me=nc.offset(me,(J.V-1)*7),J.y=me.getUTCFullYear(),J.m=me.getUTCMonth(),J.d=me.getUTCDate()+(J.w+6)%7):(me=kh(Vp(J.y,0,1)),ye=me.getDay(),me=ye>4||ye===0?nl.ceil(me):nl(me),me=ns.offset(me,(J.V-1)*7),J.y=me.getFullYear(),J.m=me.getMonth(),J.d=me.getDate()+(J.w+6)%7)}else("W"in J||"U"in J)&&("w"in J||(J.w="u"in J?J.u%7:"W"in J?1:0),ye="Z"in J?Eh(Vp(J.y,0,1)).getUTCDay():kh(Vp(J.y,0,1)).getDay(),J.m=0,J.d="W"in J?(J.w+6)%7+J.W*7-(ye+5)%7:J.w+J.U*7-(ye+6)%7);return"Z"in J?(J.H+=J.Z/100|0,J.M+=J.Z%100,Eh(J)):kh(J)}}function w(ae,re,ie,J){for(var ge=0,me=re.length,ye=ie.length,ve,Pe;ge<me;){if(J>=ye)return-1;if(ve=re.charCodeAt(ge++),ve===37){if(ve=re.charAt(ge++),Pe=P[ve in Qw?re.charAt(ge++):ve],!Pe||(J=Pe(ae,ie,J))<0)return-1}else if(ve!=ie.charCodeAt(J++))return-1}return J}function H(ae,re,ie){var J=f.exec(re.slice(ie));return J?(ae.p=m.get(J[0].toLowerCase()),ie+J[0].length):-1}function k(ae,re,ie){var J=y.exec(re.slice(ie));return J?(ae.w=B.get(J[0].toLowerCase()),ie+J[0].length):-1}function D(ae,re,ie){var J=d.exec(re.slice(ie));return J?(ae.w=v.get(J[0].toLowerCase()),ie+J[0].length):-1}function R(ae,re,ie){var J=W.exec(re.slice(ie));return J?(ae.m=S.get(J[0].toLowerCase()),ie+J[0].length):-1}function F(ae,re,ie){var J=I.exec(re.slice(ie));return J?(ae.m=b.get(J[0].toLowerCase()),ie+J[0].length):-1}function V(ae,re,ie){return w(ae,n,re,ie)}function G(ae,re,ie){return w(ae,t,re,ie)}function Y(ae,re,ie){return w(ae,r,re,ie)}function Q(ae){return u[ae.getDay()]}function $(ae){return i[ae.getDay()]}function K(ae){return c[ae.getMonth()]}function ne(ae){return s[ae.getMonth()]}function T(ae){return a[+(ae.getHours()>=12)]}function L(ae){return 1+~~(ae.getMonth()/3)}function Z(ae){return u[ae.getUTCDay()]}function se(ae){return i[ae.getUTCDay()]}function he(ae){return c[ae.getUTCMonth()]}function Ie(ae){return s[ae.getUTCMonth()]}function Be(ae){return a[+(ae.getUTCHours()>=12)]}function de(ae){return 1+~~(ae.getUTCMonth()/3)}return{format:function(ae){var re=A(ae+="",M);return re.toString=function(){return ae},re},parse:function(ae){var re=N(ae+="",!1);return re.toString=function(){return ae},re},utcFormat:function(ae){var re=A(ae+="",O);return re.toString=function(){return ae},re},utcParse:function(ae){var re=N(ae+="",!0);return re.toString=function(){return ae},re}}}var Qw={"-":"",_:" ",0:"0"},Un=/^\s*\d+/,nL=/^%/,tL=/[\\^$*+?|[\]().{}]/g;function Ve(e,n,t){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<t?new Array(t-i+1).join(n)+a:a)}function rL(e){return e.replace(tL,"\\$&")}function Gp(e){return new RegExp("^(?:"+e.map(rL).join("|")+")","i")}function Kp(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function aL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function oL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function iL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function pL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function uL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function Yw(e,n,t){var r=Un.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function Xw(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function sL(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function lL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function cL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function Zw(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function fL(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function Jw(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function dL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function mL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function hL(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function vL(e,n,t){var r=Un.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function gL(e,n,t){var r=nL.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function yL(e,n,t){var r=Un.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function bL(e,n,t){var r=Un.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function e4(e,n){return Ve(e.getDate(),n,2)}function IL(e,n){return Ve(e.getHours(),n,2)}function BL(e,n){return Ve(e.getHours()%12||12,n,2)}function xL(e,n){return Ve(1+ns.count(Kr(e),e),n,3)}function JS(e,n){return Ve(e.getMilliseconds(),n,3)}function PL(e,n){return JS(e,n)+"000"}function wL(e,n){return Ve(e.getMonth()+1,n,2)}function WL(e,n){return Ve(e.getMinutes(),n,2)}function SL(e,n){return Ve(e.getSeconds(),n,2)}function ML(e){var n=e.getDay();return n===0?7:n}function AL(e,n){return Ve(tc.count(Kr(e)-1,e),n,2)}function eM(e){var n=e.getDay();return n>=4||n===0?Ii(e):Ii.ceil(e)}function _L(e,n){return e=eM(e),Ve(Ii.count(Kr(e),e)+(Kr(e).getDay()===4),n,2)}function OL(e){return e.getDay()}function HL(e,n){return Ve(nl.count(Kr(e)-1,e),n,2)}function CL(e,n){return Ve(e.getFullYear()%100,n,2)}function NL(e,n){return e=eM(e),Ve(e.getFullYear()%100,n,2)}function RL(e,n){return Ve(e.getFullYear()%1e4,n,4)}function kL(e,n){var t=e.getDay();return e=t>=4||t===0?Ii(e):Ii.ceil(e),Ve(e.getFullYear()%1e4,n,4)}function EL(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Ve(n/60|0,"0",2)+Ve(n%60,"0",2)}function n4(e,n){return Ve(e.getUTCDate(),n,2)}function TL(e,n){return Ve(e.getUTCHours(),n,2)}function DL(e,n){return Ve(e.getUTCHours()%12||12,n,2)}function jL(e,n){return Ve(1+nc.count(Qr(e),e),n,3)}function nM(e,n){return Ve(e.getUTCMilliseconds(),n,3)}function $L(e,n){return nM(e,n)+"000"}function LL(e,n){return Ve(e.getUTCMonth()+1,n,2)}function FL(e,n){return Ve(e.getUTCMinutes(),n,2)}function qL(e,n){return Ve(e.getUTCSeconds(),n,2)}function zL(e){var n=e.getUTCDay();return n===0?7:n}function UL(e,n){return Ve(rc.count(Qr(e)-1,e),n,2)}function tM(e){var n=e.getUTCDay();return n>=4||n===0?Bi(e):Bi.ceil(e)}function VL(e,n){return e=tM(e),Ve(Bi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),n,2)}function GL(e){return e.getUTCDay()}function KL(e,n){return Ve(tl.count(Qr(e)-1,e),n,2)}function QL(e,n){return Ve(e.getUTCFullYear()%100,n,2)}function YL(e,n){return e=tM(e),Ve(e.getUTCFullYear()%100,n,2)}function XL(e,n){return Ve(e.getUTCFullYear()%1e4,n,4)}function ZL(e,n){var t=e.getUTCDay();return e=t>=4||t===0?Bi(e):Bi.ceil(e),Ve(e.getUTCFullYear()%1e4,n,4)}function JL(){return"+0000"}function t4(){return"%"}function r4(e){return+e}function a4(e){return Math.floor(+e/1e3)}var ei,rM,aM;e7({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function e7(e){return ei=eL(e),rM=ei.format,ei.parse,aM=ei.utcFormat,ei.utcParse,ei}function n7(e){return new Date(e)}function t7(e){return e instanceof Date?+e:+new Date(+e)}function ay(e,n,t,r,a,i,u,s,c,f){var m=zg(),d=m.invert,v=m.domain,y=f(".%L"),B=f(":%S"),I=f("%I:%M"),b=f("%I %p"),W=f("%a %d"),S=f("%b %d"),M=f("%B"),O=f("%Y");function P(A){return(c(A)<A?y:s(A)<A?B:u(A)<A?I:i(A)<A?b:r(A)<A?a(A)<A?W:S:t(A)<A?M:O)(A)}return m.invert=function(A){return new Date(d(A))},m.domain=function(A){return arguments.length?v(Array.from(A,t7)):v().map(n7)},m.ticks=function(A){var N=v();return e(N[0],N[N.length-1],A??10)},m.tickFormat=function(A,N){return N==null?P:f(N)},m.nice=function(A){var N=v();return(!A||typeof A.range!="function")&&(A=n(N[0],N[N.length-1],A??10)),A?v(zS(N,A)):m},m.copy=function(){return es(m,ay(e,n,t,r,a,i,u,s,c,f))},m}function r7(){return Yt.apply(ay(Z8,J8,Kr,ty,tc,ns,ey,Zg,co,rM).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function a7(){return Yt.apply(ay(Y8,X8,Qr,ry,rc,nc,ny,Jg,co,aM).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function ac(){var e=0,n=1,t,r,a,i,u=pt,s=!1,c;function f(d){return d==null||isNaN(d=+d)?c:u(a===0?.5:(d=(i(d)-t)*a,s?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,n]=d,t=i(e=+e),r=i(n=+n),a=t===r?0:1/(r-t),f):[e,n]},f.clamp=function(d){return arguments.length?(s=!!d,f):s},f.interpolator=function(d){return arguments.length?(u=d,f):u};function m(d){return function(v){var y,B;return arguments.length?([y,B]=v,u=d(y,B),f):[u(0),u(1)]}}return f.range=m(Xi),f.rangeRound=m(qg),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,t=d(e),r=d(n),a=t===r?0:1/(r-t),f}}function $a(e,n){return n.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function oM(){var e=ja(ac()(pt));return e.copy=function(){return $a(e,oM())},Jr.apply(e,arguments)}function iM(){var e=Gg(ac()).domain([1,10]);return e.copy=function(){return $a(e,iM()).base(e.base())},Jr.apply(e,arguments)}function pM(){var e=Kg(ac());return e.copy=function(){return $a(e,pM()).constant(e.constant())},Jr.apply(e,arguments)}function oy(){var e=Qg(ac());return e.copy=function(){return $a(e,oy()).exponent(e.exponent())},Jr.apply(e,arguments)}function o7(){return oy.apply(null,arguments).exponent(.5)}function uM(){var e=[],n=pt;function t(r){if(r!=null&&!isNaN(r=+r))return n((Zu(e,r,1)-1)/(e.length-1))}return t.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ha),t},t.interpolator=function(r){return arguments.length?(n=r,t):n},t.range=function(){return e.map((r,a)=>n(a/(e.length-1)))},t.quantiles=function(r){return Array.from({length:r+1},(a,i)=>U$(e,i/r))},t.copy=function(){return uM(n).domain(e)},Jr.apply(t,arguments)}function oc(){var e=0,n=.5,t=1,r=1,a,i,u,s,c,f=pt,m,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?s:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,n,t]=I,a=m(e=+e),i=m(n=+n),u=m(t=+t),s=a===i?0:.5/(i-a),c=i===u?0:.5/(u-i),r=i<a?-1:1,y):[e,n,t]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function B(I){return function(b){var W,S,M;return arguments.length?([W,S,M]=b,f=g8(I,[W,S,M]),y):[f(0),f(.5),f(1)]}}return y.range=B(Xi),y.rangeRound=B(qg),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return m=I,a=I(e),i=I(n),u=I(t),s=a===i?0:.5/(i-a),c=i===u?0:.5/(u-i),r=i<a?-1:1,y}}function sM(){var e=ja(oc()(pt));return e.copy=function(){return $a(e,sM())},Jr.apply(e,arguments)}function lM(){var e=Gg(oc()).domain([.1,1,10]);return e.copy=function(){return $a(e,lM()).base(e.base())},Jr.apply(e,arguments)}function cM(){var e=Kg(oc());return e.copy=function(){return $a(e,cM()).constant(e.constant())},Jr.apply(e,arguments)}function iy(){var e=Qg(oc());return e.copy=function(){return $a(e,iy()).exponent(e.exponent())},Jr.apply(e,arguments)}function i7(){return iy.apply(null,arguments).exponent(.5)}const o4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Iu,scaleDiverging:sM,scaleDivergingLog:lM,scaleDivergingPow:iy,scaleDivergingSqrt:i7,scaleDivergingSymlog:cM,scaleIdentity:qS,scaleImplicit:pv,scaleLinear:J0,scaleLog:US,scaleOrdinal:$g,scalePoint:au,scalePow:Yg,scaleQuantile:KS,scaleQuantize:QS,scaleRadial:GS,scaleSequential:oM,scaleSequentialLog:iM,scaleSequentialPow:oy,scaleSequentialQuantile:uM,scaleSequentialSqrt:o7,scaleSequentialSymlog:pM,scaleSqrt:$8,scaleSymlog:VS,scaleThreshold:YS,scaleTime:r7,scaleUtc:a7,tickFormat:FS},Symbol.toStringTag,{value:"Module"}));var Th,i4;function ic(){if(i4)return Th;i4=1;var e=Gi();function n(t,r,a){for(var i=-1,u=t.length;++i<u;){var s=t[i],c=r(s);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,m=s}return m}return Th=n,Th}var Dh,p4;function fM(){if(p4)return Dh;p4=1;function e(n,t){return n>t}return Dh=e,Dh}var jh,u4;function p7(){if(u4)return jh;u4=1;var e=ic(),n=fM(),t=Yi();function r(a){return a&&a.length?e(a,t,n):void 0}return jh=r,jh}var u7=p7();const Ma=Xe(u7);var $h,s4;function dM(){if(s4)return $h;s4=1;function e(n,t){return n<t}return $h=e,$h}var Lh,l4;function s7(){if(l4)return Lh;l4=1;var e=ic(),n=dM(),t=Yi();function r(a){return a&&a.length?e(a,t,n):void 0}return Lh=r,Lh}var l7=s7();const pc=Xe(l7);var Fh,c4;function c7(){if(c4)return Fh;c4=1;var e=xg(),n=Mr(),t=xS(),r=bt();function a(i,u){var s=r(i)?e:t;return s(i,n(u,3))}return Fh=a,Fh}var qh,f4;function f7(){if(f4)return qh;f4=1;var e=IS(),n=c7();function t(r,a){return e(n(r,a),1)}return qh=t,qh}var d7=f7();const m7=Xe(d7);var zh,d4;function h7(){if(d4)return zh;d4=1;var e=Rg();function n(t,r){return e(t,r)}return zh=n,zh}var v7=h7();const ka=Xe(v7);var Zi=1e9,g7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},uy,fn=!0,Kt="[DecimalError] ",vo=Kt+"Invalid argument: ",py=Kt+"Exponent out of range: ",Ji=Math.floor,po=Math.pow,y7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_t,qn=1e7,sn=7,mM=9007199254740991,rl=Ji(mM/sn),We={};We.absoluteValue=We.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};We.comparedTo=We.cmp=function(e){var n,t,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,n=0,t=r<a?r:a;n<t;++n)if(i.d[n]!==e.d[n])return i.d[n]>e.d[n]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};We.decimalPlaces=We.dp=function(){var e=this,n=e.d.length-1,t=(n-e.e)*sn;if(n=e.d[n],n)for(;n%10==0;n/=10)t--;return t<0?0:t};We.dividedBy=We.div=function(e){return Vr(this,new this.constructor(e))};We.dividedToIntegerBy=We.idiv=function(e){var n=this,t=n.constructor;return nn(Vr(n,new t(e),0,1),t.precision)};We.equals=We.eq=function(e){return!this.cmp(e)};We.exponent=function(){return Hn(this)};We.greaterThan=We.gt=function(e){return this.cmp(e)>0};We.greaterThanOrEqualTo=We.gte=function(e){return this.cmp(e)>=0};We.isInteger=We.isint=function(){return this.e>this.d.length-2};We.isNegative=We.isneg=function(){return this.s<0};We.isPositive=We.ispos=function(){return this.s>0};We.isZero=function(){return this.s===0};We.lessThan=We.lt=function(e){return this.cmp(e)<0};We.lessThanOrEqualTo=We.lte=function(e){return this.cmp(e)<1};We.logarithm=We.log=function(e){var n,t=this,r=t.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(_t))throw Error(Kt+"NaN");if(t.s<1)throw Error(Kt+(t.s?"NaN":"-Infinity"));return t.eq(_t)?new r(0):(fn=!1,n=Vr(Wu(t,i),Wu(e,i),i),fn=!0,nn(n,a))};We.minus=We.sub=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?gM(n,e):hM(n,(e.s=-e.s,e))};We.modulo=We.mod=function(e){var n,t=this,r=t.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Kt+"NaN");return t.s?(fn=!1,n=Vr(t,e,0,1).times(e),fn=!0,t.minus(n)):nn(new r(t),a)};We.naturalExponential=We.exp=function(){return vM(this)};We.naturalLogarithm=We.ln=function(){return Wu(this)};We.negated=We.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};We.plus=We.add=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?hM(n,e):gM(n,(e.s=-e.s,e))};We.precision=We.sd=function(e){var n,t,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(vo+e);if(n=Hn(a)+1,r=a.d.length-1,t=r*sn+1,r=a.d[r],r){for(;r%10==0;r/=10)t--;for(r=a.d[0];r>=10;r/=10)t++}return e&&n>t?n:t};We.squareRoot=We.sqrt=function(){var e,n,t,r,a,i,u,s=this,c=s.constructor;if(s.s<1){if(!s.s)return new c(0);throw Error(Kt+"NaN")}for(e=Hn(s),fn=!1,a=Math.sqrt(+s),a==0||a==1/0?(n=br(s.d),(n.length+e)%2==0&&(n+="0"),a=Math.sqrt(n),e=Ji((e+1)/2)-(e<0||e%2),a==1/0?n="5e"+e:(n=a.toExponential(),n=n.slice(0,n.indexOf("e")+1)+e),r=new c(n)):r=new c(a.toString()),t=c.precision,a=u=t+3;;)if(i=r,r=i.plus(Vr(s,i,u+2)).times(.5),br(i.d).slice(0,u)===(n=br(r.d)).slice(0,u)){if(n=n.slice(u-3,u+1),a==u&&n=="4999"){if(nn(i,t+1,0),i.times(i).eq(s)){r=i;break}}else if(n!="9999")break;u+=4}return fn=!0,nn(r,t)};We.times=We.mul=function(e){var n,t,r,a,i,u,s,c,f,m=this,d=m.constructor,v=m.d,y=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,t=m.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,u=c,c=f,f=u),i=[],u=c+f,r=u;r--;)i.push(0);for(r=f;--r>=0;){for(n=0,a=c+r;a>r;)s=i[a]+y[r]*v[a-r-1]+n,i[a--]=s%qn|0,n=s/qn|0;i[a]=(i[a]+n)%qn|0}for(;!i[--u];)i.pop();return n?++t:i.shift(),e.d=i,e.e=t,fn?nn(e,d.precision):e};We.toDecimalPlaces=We.todp=function(e,n){var t=this,r=t.constructor;return t=new r(t),e===void 0?t:(wr(e,0,Zi),n===void 0?n=r.rounding:wr(n,0,8),nn(t,e+Hn(t)+1,n))};We.toExponential=function(e,n){var t,r=this,a=r.constructor;return e===void 0?t=yo(r,!0):(wr(e,0,Zi),n===void 0?n=a.rounding:wr(n,0,8),r=nn(new a(r),e+1,n),t=yo(r,!0,e+1)),t};We.toFixed=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?yo(a):(wr(e,0,Zi),n===void 0?n=i.rounding:wr(n,0,8),r=nn(new i(a),e+Hn(a)+1,n),t=yo(r.abs(),!1,e+Hn(r)+1),a.isneg()&&!a.isZero()?"-"+t:t)};We.toInteger=We.toint=function(){var e=this,n=e.constructor;return nn(new n(e),Hn(e)+1,n.rounding)};We.toNumber=function(){return+this};We.toPower=We.pow=function(e){var n,t,r,a,i,u,s=this,c=s.constructor,f=12,m=+(e=new c(e));if(!e.s)return new c(_t);if(s=new c(s),!s.s){if(e.s<1)throw Error(Kt+"Infinity");return s}if(s.eq(_t))return s;if(r=c.precision,e.eq(_t))return nn(s,r);if(n=e.e,t=e.d.length-1,u=n>=t,i=s.s,u){if((t=m<0?-m:m)<=mM){for(a=new c(_t),n=Math.ceil(r/sn+4),fn=!1;t%2&&(a=a.times(s),h4(a.d,n)),t=Ji(t/2),t!==0;)s=s.times(s),h4(s.d,n);return fn=!0,e.s<0?new c(_t).div(a):nn(a,r)}}else if(i<0)throw Error(Kt+"NaN");return i=i<0&&e.d[Math.max(n,t)]&1?-1:1,s.s=1,fn=!1,a=e.times(Wu(s,r+f)),fn=!0,a=vM(a),a.s=i,a};We.toPrecision=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?(t=Hn(a),r=yo(a,t<=i.toExpNeg||t>=i.toExpPos)):(wr(e,1,Zi),n===void 0?n=i.rounding:wr(n,0,8),a=nn(new i(a),e,n),t=Hn(a),r=yo(a,e<=t||t<=i.toExpNeg,e)),r};We.toSignificantDigits=We.tosd=function(e,n){var t=this,r=t.constructor;return e===void 0?(e=r.precision,n=r.rounding):(wr(e,1,Zi),n===void 0?n=r.rounding:wr(n,0,8)),nn(new r(t),e,n)};We.toString=We.valueOf=We.val=We.toJSON=We[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,n=Hn(e),t=e.constructor;return yo(e,n<=t.toExpNeg||n>=t.toExpPos)};function hM(e,n){var t,r,a,i,u,s,c,f,m=e.constructor,d=m.precision;if(!e.s||!n.s)return n.s||(n=new m(e)),fn?nn(n,d):n;if(c=e.d,f=n.d,u=e.e,a=n.e,c=c.slice(),i=u-a,i){for(i<0?(r=c,i=-i,s=f.length):(r=f,a=u,s=c.length),u=Math.ceil(d/sn),s=u>s?u+1:s+1,i>s&&(i=s,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(s=c.length,i=f.length,s-i<0&&(i=s,r=f,f=c,c=r),t=0;i;)t=(c[--i]=c[i]+f[i]+t)/qn|0,c[i]%=qn;for(t&&(c.unshift(t),++a),s=c.length;c[--s]==0;)c.pop();return n.d=c,n.e=a,fn?nn(n,d):n}function wr(e,n,t){if(e!==~~e||e<n||e>t)throw Error(vo+e)}function br(e){var n,t,r,a=e.length-1,i="",u=e[0];if(a>0){for(i+=u,n=1;n<a;n++)r=e[n]+"",t=sn-r.length,t&&(i+=Wa(t)),i+=r;u=e[n],r=u+"",t=sn-r.length,t&&(i+=Wa(t))}else if(u===0)return"0";for(;u%10===0;)u/=10;return i+u}var Vr=(function(){function e(r,a){var i,u=0,s=r.length;for(r=r.slice();s--;)i=r[s]*a+u,r[s]=i%qn|0,u=i/qn|0;return u&&r.unshift(u),r}function n(r,a,i,u){var s,c;if(i!=u)c=i>u?1:-1;else for(s=c=0;s<i;s++)if(r[s]!=a[s]){c=r[s]>a[s]?1:-1;break}return c}function t(r,a,i){for(var u=0;i--;)r[i]-=u,u=r[i]<a[i]?1:0,r[i]=u*qn+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,u){var s,c,f,m,d,v,y,B,I,b,W,S,M,O,P,A,N,w,H=r.constructor,k=r.s==a.s?1:-1,D=r.d,R=a.d;if(!r.s)return new H(r);if(!a.s)throw Error(Kt+"Division by zero");for(c=r.e-a.e,N=R.length,P=D.length,y=new H(k),B=y.d=[],f=0;R[f]==(D[f]||0);)++f;if(R[f]>(D[f]||0)&&--c,i==null?S=i=H.precision:u?S=i+(Hn(r)-Hn(a))+1:S=i,S<0)return new H(0);if(S=S/sn+2|0,f=0,N==1)for(m=0,R=R[0],S++;(f<P||m)&&S--;f++)M=m*qn+(D[f]||0),B[f]=M/R|0,m=M%R|0;else{for(m=qn/(R[0]+1)|0,m>1&&(R=e(R,m),D=e(D,m),N=R.length,P=D.length),O=N,I=D.slice(0,N),b=I.length;b<N;)I[b++]=0;w=R.slice(),w.unshift(0),A=R[0],R[1]>=qn/2&&++A;do m=0,s=n(R,I,N,b),s<0?(W=I[0],N!=b&&(W=W*qn+(I[1]||0)),m=W/A|0,m>1?(m>=qn&&(m=qn-1),d=e(R,m),v=d.length,b=I.length,s=n(d,I,v,b),s==1&&(m--,t(d,N<v?w:R,v))):(m==0&&(s=m=1),d=R.slice()),v=d.length,v<b&&d.unshift(0),t(I,d,b),s==-1&&(b=I.length,s=n(R,I,N,b),s<1&&(m++,t(I,N<b?w:R,b))),b=I.length):s===0&&(m++,I=[0]),B[f++]=m,s&&I[0]?I[b++]=D[O]||0:(I=[D[O]],b=1);while((O++<P||I[0]!==void 0)&&S--)}return B[0]||B.shift(),y.e=c,nn(y,u?i+Hn(y)+1:i)}})();function vM(e,n){var t,r,a,i,u,s,c=0,f=0,m=e.constructor,d=m.precision;if(Hn(e)>16)throw Error(py+Hn(e));if(!e.s)return new m(_t);for(fn=!1,s=d,u=new m(.03125);e.abs().gte(.1);)e=e.times(u),f+=5;for(r=Math.log(po(2,f))/Math.LN10*2+5|0,s+=r,t=a=i=new m(_t),m.precision=s;;){if(a=nn(a.times(e),s),t=t.times(++c),u=i.plus(Vr(a,t,s)),br(u.d).slice(0,s)===br(i.d).slice(0,s)){for(;f--;)i=nn(i.times(i),s);return m.precision=d,n==null?(fn=!0,nn(i,d)):i}i=u}}function Hn(e){for(var n=e.e*sn,t=e.d[0];t>=10;t/=10)n++;return n}function Uh(e,n,t){if(n>e.LN10.sd())throw fn=!0,t&&(e.precision=t),Error(Kt+"LN10 precision limit exceeded");return nn(new e(e.LN10),n)}function Wa(e){for(var n="";e--;)n+="0";return n}function Wu(e,n){var t,r,a,i,u,s,c,f,m,d=1,v=10,y=e,B=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Kt+(y.s?"NaN":"-Infinity"));if(y.eq(_t))return new I(0);if(n==null?(fn=!1,f=b):f=n,y.eq(10))return n==null&&(fn=!0),Uh(I,f);if(f+=v,I.precision=f,t=br(B),r=t.charAt(0),i=Hn(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)y=y.times(e),t=br(y.d),r=t.charAt(0),d++;i=Hn(y),r>1?(y=new I("0."+t),i++):y=new I(r+"."+t.slice(1))}else return c=Uh(I,f+2,b).times(i+""),y=Wu(new I(r+"."+t.slice(1)),f-v).plus(c),I.precision=b,n==null?(fn=!0,nn(y,b)):y;for(s=u=y=Vr(y.minus(_t),y.plus(_t),f),m=nn(y.times(y),f),a=3;;){if(u=nn(u.times(m),f),c=s.plus(Vr(u,new I(a),f)),br(c.d).slice(0,f)===br(s.d).slice(0,f))return s=s.times(2),i!==0&&(s=s.plus(Uh(I,f+2,b).times(i+""))),s=Vr(s,new I(d),f),I.precision=b,n==null?(fn=!0,nn(s,b)):s;s=c,a+=2}}function m4(e,n){var t,r,a;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(t<0&&(t=r),t+=+n.slice(r+1),n=n.substring(0,r)):t<0&&(t=n.length),r=0;n.charCodeAt(r)===48;)++r;for(a=n.length;n.charCodeAt(a-1)===48;)--a;if(n=n.slice(r,a),n){if(a-=r,t=t-r-1,e.e=Ji(t/sn),e.d=[],r=(t+1)%sn,t<0&&(r+=sn),r<a){for(r&&e.d.push(+n.slice(0,r)),a-=sn;r<a;)e.d.push(+n.slice(r,r+=sn));n=n.slice(r),r=sn-n.length}else r-=a;for(;r--;)n+="0";if(e.d.push(+n),fn&&(e.e>rl||e.e<-rl))throw Error(py+t)}else e.s=0,e.e=0,e.d=[0];return e}function nn(e,n,t){var r,a,i,u,s,c,f,m,d=e.d;for(u=1,i=d[0];i>=10;i/=10)u++;if(r=n-u,r<0)r+=sn,a=n,f=d[m=0];else{if(m=Math.ceil((r+1)/sn),i=d.length,m>=i)return e;for(f=i=d[m],u=1;i>=10;i/=10)u++;r%=sn,a=r-sn+u}if(t!==void 0&&(i=po(10,u-a-1),s=f/i%10|0,c=n<0||d[m+1]!==void 0||f%i,c=t<4?(s||c)&&(t==0||t==(e.s<0?3:2)):s>5||s==5&&(t==4||c||t==6&&(r>0?a>0?f/po(10,u-a):0:d[m-1])%10&1||t==(e.s<0?8:7))),n<1||!d[0])return c?(i=Hn(e),d.length=1,n=n-i-1,d[0]=po(10,(sn-n%sn)%sn),e.e=Ji(-n/sn)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=po(10,sn-r),d[m]=a>0?(f/po(10,u-a)%po(10,a)|0)*i:0),c)for(;;)if(m==0){(d[0]+=i)==qn&&(d[0]=1,++e.e);break}else{if(d[m]+=i,d[m]!=qn)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(fn&&(e.e>rl||e.e<-rl))throw Error(py+Hn(e));return e}function gM(e,n){var t,r,a,i,u,s,c,f,m,d,v=e.constructor,y=v.precision;if(!e.s||!n.s)return n.s?n.s=-n.s:n=new v(e),fn?nn(n,y):n;if(c=e.d,d=n.d,r=n.e,f=e.e,c=c.slice(),u=f-r,u){for(m=u<0,m?(t=c,u=-u,s=d.length):(t=d,r=f,s=c.length),a=Math.max(Math.ceil(y/sn),s)+2,u>a&&(u=a,t.length=1),t.reverse(),a=u;a--;)t.push(0);t.reverse()}else{for(a=c.length,s=d.length,m=a<s,m&&(s=a),a=0;a<s;a++)if(c[a]!=d[a]){m=c[a]<d[a];break}u=0}for(m&&(t=c,c=d,d=t,n.s=-n.s),s=c.length,a=d.length-s;a>0;--a)c[s++]=0;for(a=d.length;a>u;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=qn-1;--c[i],c[a]+=qn}c[a]-=d[a]}for(;c[--s]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(n.d=c,n.e=r,fn?nn(n,y):n):new v(0)}function yo(e,n,t){var r,a=Hn(e),i=br(e.d),u=i.length;return n?(t&&(r=t-u)>0?i=i.charAt(0)+"."+i.slice(1)+Wa(r):u>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Wa(-a-1)+i,t&&(r=t-u)>0&&(i+=Wa(r))):a>=u?(i+=Wa(a+1-u),t&&(r=t-a-1)>0&&(i=i+"."+Wa(r))):((r=a+1)<u&&(i=i.slice(0,r)+"."+i.slice(r)),t&&(r=t-u)>0&&(a+1===u&&(i+="."),i+=Wa(r))),e.s<0?"-"+i:i}function h4(e,n){if(e.length>n)return e.length=n,!0}function yM(e){var n,t,r;function a(i){var u=this;if(!(u instanceof a))return new a(i);if(u.constructor=a,i instanceof a){u.s=i.s,u.e=i.e,u.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)u.s=1;else if(i<0)i=-i,u.s=-1;else{u.s=0,u.e=0,u.d=[0];return}if(i===~~i&&i<1e7){u.e=0,u.d=[i];return}return m4(u,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),u.s=-1):u.s=1,y7.test(i))m4(u,i);else throw Error(vo+i)}if(a.prototype=We,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=yM,a.config=a.set=b7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],n=0;n<r.length;)e.hasOwnProperty(t=r[n++])||(e[t]=this[t]);return a.config(e),a}function b7(e){if(!e||typeof e!="object")throw Error(Kt+"Object expected");var n,t,r,a=["precision",1,Zi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(n=0;n<a.length;n+=3)if((r=e[t=a[n]])!==void 0)if(Ji(r)===r&&r>=a[n+1]&&r<=a[n+2])this[t]=r;else throw Error(vo+t+": "+r);if((r=e[t="LN10"])!==void 0)if(r==Math.LN10)this[t]=new this(r);else throw Error(vo+t+": "+r);return this}var uy=yM(g7);_t=new uy(1);const en=uy;function I7(e){return w7(e)||P7(e)||x7(e)||B7()}function B7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x7(e,n){if(e){if(typeof e=="string")return cv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return cv(e,n)}}function P7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function w7(e){if(Array.isArray(e))return cv(e)}function cv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var W7=function(n){return n},bM={},IM=function(n){return n===bM},v4=function(n){return function t(){return arguments.length===0||arguments.length===1&&IM(arguments.length<=0?void 0:arguments[0])?t:n.apply(void 0,arguments)}},S7=function e(n,t){return n===1?t:v4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var u=a.filter(function(s){return s!==bM}).length;return u>=n?t.apply(void 0,a):e(n-u,v4(function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];var m=a.map(function(d){return IM(d)?c.shift():d});return t.apply(void 0,I7(m).concat(c))}))})},uc=function(n){return S7(n.length,n)},fv=function(n,t){for(var r=[],a=n;a<t;++a)r[a-n]=a;return r},M7=uc(function(e,n){return Array.isArray(n)?n.map(e):Object.keys(n).map(function(t){return n[t]}).map(e)}),A7=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(!t.length)return W7;var a=t.reverse(),i=a[0],u=a.slice(1);return function(){return u.reduce(function(s,c){return c(s)},i.apply(void 0,arguments))}},dv=function(n){return Array.isArray(n)?n.reverse():n.split("").reverse.join("")},BM=function(n){var t=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return t&&i.every(function(s,c){return s===t[c]})||(t=i,r=n.apply(void 0,i)),r}};function _7(e){var n;return e===0?n=1:n=Math.floor(new en(e).abs().log(10).toNumber())+1,n}function O7(e,n,t){for(var r=new en(e),a=0,i=[];r.lt(n)&&a<1e5;)i.push(r.toNumber()),r=r.add(t),a++;return i}var H7=uc(function(e,n,t){var r=+e,a=+n;return r+t*(a-r)}),C7=uc(function(e,n,t){var r=n-+e;return r=r||1/0,(t-e)/r}),N7=uc(function(e,n,t){var r=n-+e;return r=r||1/0,Math.max(0,Math.min(1,(t-e)/r))});const sc={rangeStep:O7,getDigitCount:_7,interpolateNumber:H7,uninterpolateNumber:C7,uninterpolateTruncation:N7};function mv(e){return E7(e)||k7(e)||xM(e)||R7()}function R7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function E7(e){if(Array.isArray(e))return hv(e)}function Su(e,n){return j7(e)||D7(e,n)||xM(e,n)||T7()}function T7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xM(e,n){if(e){if(typeof e=="string")return hv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hv(e,n)}}function hv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function D7(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,a=!1,i=void 0;try{for(var u=e[Symbol.iterator](),s;!(r=(s=u.next()).done)&&(t.push(s.value),!(n&&t.length===n));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&u.return!=null&&u.return()}finally{if(a)throw i}}return t}}function j7(e){if(Array.isArray(e))return e}function PM(e){var n=Su(e,2),t=n[0],r=n[1],a=t,i=r;return t>r&&(a=r,i=t),[a,i]}function wM(e,n,t){if(e.lte(0))return new en(0);var r=sc.getDigitCount(e.toNumber()),a=new en(10).pow(r),i=e.div(a),u=r!==1?.05:.1,s=new en(Math.ceil(i.div(u).toNumber())).add(t).mul(u),c=s.mul(a);return n?c:new en(Math.ceil(c))}function $7(e,n,t){var r=1,a=new en(e);if(!a.isint()&&t){var i=Math.abs(e);i<1?(r=new en(10).pow(sc.getDigitCount(e)-1),a=new en(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new en(Math.floor(e)))}else e===0?a=new en(Math.floor((n-1)/2)):t||(a=new en(Math.floor(e)));var u=Math.floor((n-1)/2),s=A7(M7(function(c){return a.add(new en(c-u).mul(r)).toNumber()}),fv);return s(0,n)}function WM(e,n,t,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-e)/(t-1)))return{step:new en(0),tickMin:new en(0),tickMax:new en(0)};var i=wM(new en(n).sub(e).div(t-1),r,a),u;e<=0&&n>=0?u=new en(0):(u=new en(e).add(n).div(2),u=u.sub(new en(u).mod(i)));var s=Math.ceil(u.sub(e).div(i).toNumber()),c=Math.ceil(new en(n).sub(u).div(i).toNumber()),f=s+c+1;return f>t?WM(e,n,t,r,a+1):(f<t&&(c=n>0?c+(t-f):c,s=n>0?s:s+(t-f)),{step:i,tickMin:u.sub(new en(s).mul(i)),tickMax:u.add(new en(c).mul(i))})}function L7(e){var n=Su(e,2),t=n[0],r=n[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=Math.max(a,2),s=PM([t,r]),c=Su(s,2),f=c[0],m=c[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(mv(fv(0,a-1).map(function(){return 1/0}))):[].concat(mv(fv(0,a-1).map(function(){return-1/0})),[m]);return t>r?dv(d):d}if(f===m)return $7(f,a,i);var v=WM(f,m,u,i),y=v.step,B=v.tickMin,I=v.tickMax,b=sc.rangeStep(B,I.add(new en(.1).mul(y)),y);return t>r?dv(b):b}function F7(e,n){var t=Su(e,2),r=t[0],a=t[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=PM([r,a]),s=Su(u,2),c=s[0],f=s[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var m=Math.max(n,2),d=wM(new en(f).sub(c).div(m-1),i,0),v=[].concat(mv(sc.rangeStep(new en(c),new en(f).sub(new en(.99).mul(d)),d)),[f]);return r>a?dv(v):v}var q7=BM(L7),z7=BM(F7),U7="Invariant failed";function bo(e,n){throw new Error(U7)}var V7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xi(e)}function al(){return al=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},al.apply(this,arguments)}function G7(e,n){return X7(e)||Y7(e,n)||Q7(e,n)||K7()}function K7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q7(e,n){if(e){if(typeof e=="string")return g4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g4(e,n)}}function g4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Y7(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function X7(e){if(Array.isArray(e))return e}function Z7(e,n){if(e==null)return{};var t=J7(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function J7(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function e9(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n9(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AM(r.key),r)}}function t9(e,n,t){return n&&n9(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function r9(e,n,t){return n=ol(n),a9(e,SM()?Reflect.construct(n,t||[],ol(e).constructor):n.apply(e,t))}function a9(e,n){if(n&&(xi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o9(e)}function o9(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SM=function(){return!!e})()}function ol(e){return ol=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ol(e)}function i9(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&vv(e,n)}function vv(e,n){return vv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},vv(e,n)}function MM(e,n,t){return n=AM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function AM(e){var n=p9(e,"string");return xi(n)=="symbol"?n:n+""}function p9(e,n){if(xi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ep=(function(e){function n(){return e9(this,n),r9(this,n,arguments)}return i9(n,e),t9(n,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,u=r.width,s=r.dataKey,c=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=Z7(r,V7),y=Oe(v,!1);this.props.direction==="x"&&m.type!=="number"&&bo();var B=c.map(function(I){var b=f(I,s),W=b.x,S=b.y,M=b.value,O=b.errorVal;if(!O)return null;var P=[],A,N;if(Array.isArray(O)){var w=G7(O,2);A=w[0],N=w[1]}else A=N=O;if(i==="vertical"){var H=m.scale,k=S+a,D=k+u,R=k-u,F=H(M-A),V=H(M+N);P.push({x1:V,y1:D,x2:V,y2:R}),P.push({x1:F,y1:k,x2:V,y2:k}),P.push({x1:F,y1:D,x2:F,y2:R})}else if(i==="horizontal"){var G=d.scale,Y=W+a,Q=Y-u,$=Y+u,K=G(M-A),ne=G(M+N);P.push({x1:Q,y1:ne,x2:$,y2:ne}),P.push({x1:Y,y1:K,x2:Y,y2:ne}),P.push({x1:Q,y1:K,x2:$,y2:K})}return E.createElement($e,al({className:"recharts-errorBar",key:"bar-".concat(P.map(function(T){return"".concat(T.x1,"-").concat(T.x2,"-").concat(T.y1,"-").concat(T.y2)}))},y),P.map(function(T){return E.createElement("line",al({},T,{key:"line-".concat(T.x1,"-").concat(T.x2,"-").concat(T.y1,"-").concat(T.y2)}))}))});return E.createElement($e,{className:"recharts-errorBars"},B)}}])})(E.Component);MM(ep,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});MM(ep,"displayName","ErrorBar");function Mu(e){"@babel/helpers - typeof";return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mu(e)}function y4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function to(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?y4(Object(t),!0).forEach(function(r){u9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u9(e,n,t){return n=s9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s9(e){var n=l9(e,"string");return Mu(n)=="symbol"?n:n+""}function l9(e,n){if(Mu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var _M=function(n){var t=n.children,r=n.formattedGraphicalItems,a=n.legendWidth,i=n.legendContent,u=St(t,Oa);if(!u)return null;var s=Oa.defaultProps,c=s!==void 0?to(to({},s),u.props):{},f;return u.props&&u.props.payload?f=u.props&&u.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,y=d.props,B=y.sectors||y.data||[];return m.concat(B.map(function(I){return{type:u.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,y=v!==void 0?to(to({},v),d.props):{},B=y.dataKey,I=y.name,b=y.legendType,W=y.hide;return{inactive:W,dataKey:B,type:c.iconType||b||"square",color:sy(d),value:I||B,payload:y}}),to(to(to({},c),Oa.getWithHeight(u,a)),{},{payload:f,item:u})};function Au(e){"@babel/helpers - typeof";return Au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Au(e)}function b4(e){return m9(e)||d9(e)||f9(e)||c9()}function c9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f9(e,n){if(e){if(typeof e=="string")return gv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gv(e,n)}}function d9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function m9(e){if(Array.isArray(e))return gv(e)}function gv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function In(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?I4(Object(t),!0).forEach(function(r){ci(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ci(e,n,t){return n=h9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h9(e){var n=v9(e,"string");return Au(n)=="symbol"?n:n+""}function v9(e,n){if(Au(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Au(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ln(e,n,t){return ke(e)||ke(n)?t:Tn(n)?Ot(e,n,t):Re(n)?n(e):t}function ou(e,n,t,r){var a=m7(e,function(s){return ln(s,n)});if(t==="number"){var i=a.filter(function(s){return ce(s)||parseFloat(s)});return i.length?[pc(i),Ma(i)]:[1/0,-1/0]}var u=r?a.filter(function(s){return!ke(s)}):a;return u.map(function(s){return Tn(s)||s instanceof Date?s:""})}var g9=function(n){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,u=-1,s=(t=r==null?void 0:r.length)!==null&&t!==void 0?t:0;if(s<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<s;f++){var m=f>0?a[f-1].coordinate:a[s-1].coordinate,d=a[f].coordinate,v=f>=s-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(ot(d-m)!==ot(v-d)){var B=[];if(ot(v-d)===ot(c[1]-c[0])){y=v;var I=d+c[1]-c[0];B[0]=Math.min(I,(I+m)/2),B[1]=Math.max(I,(I+m)/2)}else{y=m;var b=v+c[1]-c[0];B[0]=Math.min(d,(b+d)/2),B[1]=Math.max(d,(b+d)/2)}var W=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(n>W[0]&&n<=W[1]||n>=B[0]&&n<=B[1]){u=a[f].index;break}}else{var S=Math.min(m,v),M=Math.max(m,v);if(n>(S+d)/2&&n<=(M+d)/2){u=a[f].index;break}}}else for(var O=0;O<s;O++)if(O===0&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<s-1&&n>(r[O].coordinate+r[O-1].coordinate)/2&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O===s-1&&n>(r[O].coordinate+r[O-1].coordinate)/2){u=r[O].index;break}return u},sy=function(n){var t,r=n,a=r.type.displayName,i=(t=n.type)!==null&&t!==void 0&&t.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,u=i.stroke,s=i.fill,c;switch(a){case"Line":c=u;break;case"Area":case"Radar":c=u&&u!=="none"?u:s;break;default:c=s;break}return c},y9=function(n){var t=n.barSize,r=n.totalSize,a=n.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var u={},s=Object.keys(i),c=0,f=s.length;c<f;c++)for(var m=i[s[c]].stackGroups,d=Object.keys(m),v=0,y=d.length;v<y;v++){var B=m[d[v]],I=B.items,b=B.cateAxisId,W=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(W&&W.length){var S=W[0].type.defaultProps,M=S!==void 0?In(In({},S),W[0].props):W[0].props,O=M.barSize,P=M[b];u[P]||(u[P]=[]);var A=ke(O)?t:O;u[P].push({item:W[0],stackList:W.slice(1),barSize:ke(A)?void 0:it(A,r,0)})}}return u},b9=function(n){var t=n.barGap,r=n.barCategoryGap,a=n.bandSize,i=n.sizeList,u=i===void 0?[]:i,s=n.maxBarSize,c=u.length;if(c<1)return null;var f=it(t,a,0,!0),m,d=[];if(u[0].barSize===+u[0].barSize){var v=!1,y=a/c,B=u.reduce(function(O,P){return O+P.barSize||0},0);B+=(c-1)*f,B>=a&&(B-=(c-1)*f,f=0),B>=a&&y>0&&(v=!0,y*=.9,B=c*y);var I=(a-B)/2>>0,b={offset:I-f,size:0};m=u.reduce(function(O,P){var A={item:P.item,position:{offset:b.offset+b.size+f,size:v?y:P.barSize}},N=[].concat(b4(O),[A]);return b=N[N.length-1].position,P.stackList&&P.stackList.length&&P.stackList.forEach(function(w){N.push({item:w,position:b})}),N},d)}else{var W=it(r,a,0,!0);a-2*W-(c-1)*f<=0&&(f=0);var S=(a-2*W-(c-1)*f)/c;S>1&&(S>>=0);var M=s===+s?Math.min(S,s):S;m=u.reduce(function(O,P,A){var N=[].concat(b4(O),[{item:P.item,position:{offset:W+(S+f)*A+(S-M)/2,size:M}}]);return P.stackList&&P.stackList.length&&P.stackList.forEach(function(w){N.push({item:w,position:N[N.length-1].position})}),N},d)}return m},I9=function(n,t,r,a){var i=r.children,u=r.width,s=r.margin,c=u-(s.left||0)-(s.right||0),f=_M({children:i,legendWidth:c});if(f){var m=a||{},d=m.width,v=m.height,y=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&y!=="center"&&ce(n[y]))return In(In({},n),{},ci({},y,n[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&B!=="middle"&&ce(n[B]))return In(In({},n),{},ci({},B,n[B]+(v||0)))}return n},B9=function(n,t,r){return ke(t)?!0:n==="horizontal"?t==="yAxis":n==="vertical"||r==="x"?t==="xAxis":r==="y"?t==="yAxis":!0},OM=function(n,t,r,a,i){var u=t.props.children,s=ut(u,ep).filter(function(f){return B9(a,i,f.props.direction)});if(s&&s.length){var c=s.map(function(f){return f.props.dataKey});return n.reduce(function(f,m){var d=ln(m,r);if(ke(d))return f;var v=Array.isArray(d)?[pc(d),Ma(d)]:[d,d],y=c.reduce(function(B,I){var b=ln(m,I,0),W=v[0]-Math.abs(Array.isArray(b)?b[0]:b),S=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(W,B[0]),Math.max(S,B[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},x9=function(n,t,r,a,i){var u=t.map(function(s){return OM(n,s,r,i,a)}).filter(function(s){return!ke(s)});return u&&u.length?u.reduce(function(s,c){return[Math.min(s[0],c[0]),Math.max(s[1],c[1])]},[1/0,-1/0]):null},HM=function(n,t,r,a,i){var u=t.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&OM(n,c,f,a)||ou(n,f,r,i)});if(r==="number")return u.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var s={};return u.reduce(function(c,f){for(var m=0,d=f.length;m<d;m++)s[f[m]]||(s[f[m]]=!0,c.push(f[m]));return c},[])},CM=function(n,t){return n==="horizontal"&&t==="xAxis"||n==="vertical"&&t==="yAxis"||n==="centric"&&t==="angleAxis"||n==="radial"&&t==="radiusAxis"},NM=function(n,t,r,a){if(a)return n.map(function(c){return c.coordinate});var i,u,s=n.map(function(c){return c.coordinate===t&&(i=!0),c.coordinate===r&&(u=!0),c.coordinate});return i||s.push(t),u||s.push(r),s},Fr=function(n,t,r){if(!n)return null;var a=n.scale,i=n.duplicateDomain,u=n.type,s=n.range,c=n.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(t||r)&&u==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=n.axisType==="angleAxis"&&(s==null?void 0:s.length)>=2?ot(s[0]-s[1])*2*f:f,t&&(n.ticks||n.niceTicks)){var m=(n.ticks||n.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Qi(d.coordinate)})}return n.isCategorical&&n.categoricalDomain?n.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(n.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Vh=new WeakMap,x0=function(n,t){if(typeof t!="function")return n;Vh.has(n)||Vh.set(n,new WeakMap);var r=Vh.get(n);if(r.has(t))return r.get(t);var a=function(){n.apply(void 0,arguments),t.apply(void 0,arguments)};return r.set(t,a),a},RM=function(n,t,r){var a=n.scale,i=n.type,u=n.layout,s=n.axisType;if(a==="auto")return u==="radial"&&s==="radiusAxis"?{scale:Iu(),realScaleType:"band"}:u==="radial"&&s==="angleAxis"?{scale:J0(),realScaleType:"linear"}:i==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:au(),realScaleType:"point"}:i==="category"?{scale:Iu(),realScaleType:"band"}:{scale:J0(),realScaleType:"linear"};if(Qu(a)){var c="scale".concat(Vl(a));return{scale:(o4[c]||au)(),realScaleType:o4[c]?c:"point"}}return Re(a)?{scale:a}:{scale:au(),realScaleType:"point"}},B4=1e-4,kM=function(n){var t=n.domain();if(!(!t||t.length<=2)){var r=t.length,a=n.range(),i=Math.min(a[0],a[1])-B4,u=Math.max(a[0],a[1])+B4,s=n(t[0]),c=n(t[r-1]);(s<i||s>u||c<i||c>u)&&n.domain([t[0],t[r-1]])}},P9=function(n,t){if(!n)return null;for(var r=0,a=n.length;r<a;r++)if(n[r].item===t)return n[r].position;return null},w9=function(n,t){if(!t||t.length!==2||!ce(t[0])||!ce(t[1]))return n;var r=Math.min(t[0],t[1]),a=Math.max(t[0],t[1]),i=[n[0],n[1]];return(!ce(n[0])||n[0]<r)&&(i[0]=r),(!ce(n[1])||n[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},W9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,u=0,s=0;s<t;++s){var c=Qi(n[s][r][1])?n[s][r][0]:n[s][r][1];c>=0?(n[s][r][0]=i,n[s][r][1]=i+c,i=n[s][r][1]):(n[s][r][0]=u,n[s][r][1]=u+c,u=n[s][r][1])}},S9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,u=0;u<t;++u){var s=Qi(n[u][r][1])?n[u][r][0]:n[u][r][1];s>=0?(n[u][r][0]=i,n[u][r][1]=i+s,i=n[u][r][1]):(n[u][r][0]=0,n[u][r][1]=0)}},M9={sign:W9,expand:mT,none:mi,silhouette:hT,wiggle:vT,positive:S9},A9=function(n,t,r){var a=t.map(function(s){return s.props.dataKey}),i=M9[r],u=dT().keys(a).value(function(s,c){return+ln(s,c,0)}).order(G6).offset(i);return u(n)},_9=function(n,t,r,a,i,u){if(!n)return null;var s=u?t.reverse():t,c={},f=s.reduce(function(d,v){var y,B=(y=v.type)!==null&&y!==void 0&&y.defaultProps?In(In({},v.type.defaultProps),v.props):v.props,I=B.stackId,b=B.hide;if(b)return d;var W=B[r],S=d[W]||{hasStack:!1,stackGroups:{}};if(Tn(I)){var M=S.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};M.items.push(v),S.hasStack=!0,S.stackGroups[I]=M}else S.stackGroups[Da("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return In(In({},d),{},ci({},W,S))},c),m={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var B={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var W=y.stackGroups[b];return In(In({},I),{},ci({},b,{numericAxisId:r,cateAxisId:a,items:W.items,stackedData:A9(n,W.items,i)}))},B)}return In(In({},d),{},ci({},v,y))},m)},EM=function(n,t){var r=t.realScaleType,a=t.type,i=t.tickCount,u=t.originalDomain,s=t.allowDecimals,c=r||t.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&u&&(u[0]==="auto"||u[1]==="auto")){var f=n.domain();if(!f.length)return null;var m=q7(f,i,s);return n.domain([pc(m),Ma(m)]),{niceTicks:m}}if(i&&a==="number"){var d=n.domain(),v=z7(d,i,s);return{niceTicks:v}}return null};function Pi(e){var n=e.axis,t=e.ticks,r=e.bandSize,a=e.entry,i=e.index,u=e.dataKey;if(n.type==="category"){if(!n.allowDuplicatedCategory&&n.dataKey&&!ke(a[n.dataKey])){var s=R0(t,"value",a[n.dataKey]);if(s)return s.coordinate+r/2}return t[i]?t[i].coordinate+r/2:null}var c=ln(a,ke(u)?n.dataKey:u);return ke(c)?null:n.scale(c)}var x4=function(n){var t=n.axis,r=n.ticks,a=n.offset,i=n.bandSize,u=n.entry,s=n.index;if(t.type==="category")return r[s]?r[s].coordinate+a:null;var c=ln(u,t.dataKey,t.domain[s]);return ke(c)?null:t.scale(c)-i/2+a},O9=function(n){var t=n.numericAxis,r=t.scale.domain();if(t.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},H9=function(n,t){var r,a=(r=n.type)!==null&&r!==void 0&&r.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,i=a.stackId;if(Tn(i)){var u=t[i];if(u){var s=u.items.indexOf(n);return s>=0?u.stackedData[s]:null}}return null},C9=function(n){return n.reduce(function(t,r){return[pc(r.concat([t[0]]).filter(ce)),Ma(r.concat([t[1]]).filter(ce))]},[1/0,-1/0])},TM=function(n,t,r){return Object.keys(n).reduce(function(a,i){var u=n[i],s=u.stackedData,c=s.reduce(function(f,m){var d=C9(m.slice(t,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},P4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,w4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,yv=function(n,t,r){if(Re(n))return n(t,r);if(!Array.isArray(n))return t;var a=[];if(ce(n[0]))a[0]=r?n[0]:Math.min(n[0],t[0]);else if(P4.test(n[0])){var i=+P4.exec(n[0])[1];a[0]=t[0]-i}else Re(n[0])?a[0]=n[0](t[0]):a[0]=t[0];if(ce(n[1]))a[1]=r?n[1]:Math.max(n[1],t[1]);else if(w4.test(n[1])){var u=+w4.exec(n[1])[1];a[1]=t[1]+u}else Re(n[1])?a[1]=n[1](t[1]):a[1]=t[1];return a},il=function(n,t,r){if(n&&n.scale&&n.scale.bandwidth){var a=n.scale.bandwidth();if(!r||a>0)return a}if(n&&t&&t.length>=2){for(var i=Eg(t,function(d){return d.coordinate}),u=1/0,s=1,c=i.length;s<c;s++){var f=i[s],m=i[s-1];u=Math.min((f.coordinate||0)-(m.coordinate||0),u)}return u===1/0?0:u}return r?void 0:0},W4=function(n,t,r){return!n||!n.length||ka(n,Ot(r,"type.defaultProps.domain"))?t:n},DM=function(n,t){var r=n.type.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,a=r.dataKey,i=r.name,u=r.unit,s=r.formatter,c=r.tooltipType,f=r.chartType,m=r.hide;return In(In({},Oe(n,!1)),{},{dataKey:a,unit:u,formatter:s,name:i||a,color:sy(n),value:ln(t,a),type:c,payload:t,chartType:f,hide:m})};function _u(e){"@babel/helpers - typeof";return _u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_u(e)}function S4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Dr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?S4(Object(t),!0).forEach(function(r){jM(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function jM(e,n,t){return n=N9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N9(e){var n=R9(e,"string");return _u(n)=="symbol"?n:n+""}function R9(e,n){if(_u(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function k9(e,n){return j9(e)||D9(e,n)||T9(e,n)||E9()}function E9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T9(e,n){if(e){if(typeof e=="string")return M4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M4(e,n)}}function M4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function D9(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function j9(e){if(Array.isArray(e))return e}var pl=Math.PI/180,$9=function(n){return n*180/Math.PI},on=function(n,t,r,a){return{x:n+Math.cos(-pl*a)*r,y:t+Math.sin(-pl*a)*r}},$M=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(n-(r.left||0)-(r.right||0)),Math.abs(t-(r.top||0)-(r.bottom||0)))/2},L9=function(n,t,r,a,i){var u=n.width,s=n.height,c=n.startAngle,f=n.endAngle,m=it(n.cx,u,u/2),d=it(n.cy,s,s/2),v=$M(u,s,r),y=it(n.innerRadius,v,0),B=it(n.outerRadius,v,v*.8),I=Object.keys(t);return I.reduce(function(b,W){var S=t[W],M=S.domain,O=S.reversed,P;if(ke(S.range))a==="angleAxis"?P=[c,f]:a==="radiusAxis"&&(P=[y,B]),O&&(P=[P[1],P[0]]);else{P=S.range;var A=P,N=k9(A,2);c=N[0],f=N[1]}var w=RM(S,i),H=w.realScaleType,k=w.scale;k.domain(M).range(P),kM(k);var D=EM(k,Dr(Dr({},S),{},{realScaleType:H})),R=Dr(Dr(Dr({},S),D),{},{range:P,radius:B,realScaleType:H,scale:k,cx:m,cy:d,innerRadius:y,outerRadius:B,startAngle:c,endAngle:f});return Dr(Dr({},b),{},jM({},W,R))},{})},F9=function(n,t){var r=n.x,a=n.y,i=t.x,u=t.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-u,2))},q9=function(n,t){var r=n.x,a=n.y,i=t.cx,u=t.cy,s=F9({x:r,y:a},{x:i,y:u});if(s<=0)return{radius:s};var c=(r-i)/s,f=Math.acos(c);return a>u&&(f=2*Math.PI-f),{radius:s,angle:$9(f),angleInRadian:f}},z9=function(n){var t=n.startAngle,r=n.endAngle,a=Math.floor(t/360),i=Math.floor(r/360),u=Math.min(a,i);return{startAngle:t-u*360,endAngle:r-u*360}},U9=function(n,t){var r=t.startAngle,a=t.endAngle,i=Math.floor(r/360),u=Math.floor(a/360),s=Math.min(i,u);return n+s*360},A4=function(n,t){var r=n.x,a=n.y,i=q9({x:r,y:a},t),u=i.radius,s=i.angle,c=t.innerRadius,f=t.outerRadius;if(u<c||u>f)return!1;if(u===0)return!0;var m=z9(t),d=m.startAngle,v=m.endAngle,y=s,B;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;B=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;B=y>=v&&y<=d}return B?Dr(Dr({},t),{},{radius:u,angle:U9(y,t)}):null},LM=function(n){return!U.isValidElement(n)&&!Re(n)&&typeof n!="boolean"?n.className:""};function Ou(e){"@babel/helpers - typeof";return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ou(e)}var V9=["offset"];function G9(e){return X9(e)||Y9(e)||Q9(e)||K9()}function K9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q9(e,n){if(e){if(typeof e=="string")return bv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return bv(e,n)}}function Y9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function X9(e){if(Array.isArray(e))return bv(e)}function bv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Z9(e,n){if(e==null)return{};var t=J9(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function J9(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function _4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function En(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_4(Object(t),!0).forEach(function(r){eF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function eF(e,n,t){return n=nF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nF(e){var n=tF(e,"string");return Ou(n)=="symbol"?n:n+""}function tF(e,n){if(Ou(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ou(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Hu(){return Hu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Hu.apply(this,arguments)}var rF=function(n){var t=n.value,r=n.formatter,a=ke(n.children)?t:n.children;return Re(r)?r(a):a},aF=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),360);return r*a},oF=function(n,t,r){var a=n.position,i=n.viewBox,u=n.offset,s=n.className,c=i,f=c.cx,m=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,B=c.endAngle,I=c.clockWise,b=(d+v)/2,W=aF(y,B),S=W>=0?1:-1,M,O;a==="insideStart"?(M=y+S*u,O=I):a==="insideEnd"?(M=B-S*u,O=!I):a==="end"&&(M=B+S*u,O=I),O=W<=0?O:!O;var P=on(f,m,b,M),A=on(f,m,b,M+(O?1:-1)*359),N="M".concat(P.x,",").concat(P.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(A.x,",").concat(A.y),w=ke(n.id)?Da("recharts-radial-line-"):n.id;return E.createElement("text",Hu({},r,{dominantBaseline:"central",className:De("recharts-radial-bar-label",s)}),E.createElement("defs",null,E.createElement("path",{id:w,d:N})),E.createElement("textPath",{xlinkHref:"#".concat(w)},t))},iF=function(n){var t=n.viewBox,r=n.offset,a=n.position,i=t,u=i.cx,s=i.cy,c=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var y=on(u,s,f+r,v),B=y.x,I=y.y;return{x:B,y:I,textAnchor:B>=u?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:u,y:s,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:u,y:s,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:u,y:s,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,W=on(u,s,b,v),S=W.x,M=W.y;return{x:S,y:M,textAnchor:"middle",verticalAnchor:"middle"}},pF=function(n){var t=n.viewBox,r=n.parentViewBox,a=n.offset,i=n.position,u=t,s=u.x,c=u.y,f=u.width,m=u.height,d=m>=0?1:-1,v=d*a,y=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,b=I*a,W=I>0?"end":"start",S=I>0?"start":"end";if(i==="top"){var M={x:s+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return En(En({},M),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:s+f/2,y:c+m+v,textAnchor:"middle",verticalAnchor:B};return En(En({},O),r?{height:Math.max(r.y+r.height-(c+m),0),width:f}:{})}if(i==="left"){var P={x:s-b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"};return En(En({},P),r?{width:Math.max(P.x-r.x,0),height:m}:{})}if(i==="right"){var A={x:s+f+b,y:c+m/2,textAnchor:S,verticalAnchor:"middle"};return En(En({},A),r?{width:Math.max(r.x+r.width-A.x,0),height:m}:{})}var N=r?{width:f,height:m}:{};return i==="insideLeft"?En({x:s+b,y:c+m/2,textAnchor:S,verticalAnchor:"middle"},N):i==="insideRight"?En({x:s+f-b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideTop"?En({x:s+f/2,y:c+v,textAnchor:"middle",verticalAnchor:B},N):i==="insideBottom"?En({x:s+f/2,y:c+m-v,textAnchor:"middle",verticalAnchor:y},N):i==="insideTopLeft"?En({x:s+b,y:c+v,textAnchor:S,verticalAnchor:B},N):i==="insideTopRight"?En({x:s+f-b,y:c+v,textAnchor:W,verticalAnchor:B},N):i==="insideBottomLeft"?En({x:s+b,y:c+m-v,textAnchor:S,verticalAnchor:y},N):i==="insideBottomRight"?En({x:s+f-b,y:c+m-v,textAnchor:W,verticalAnchor:y},N):Ki(i)&&(ce(i.x)||so(i.x))&&(ce(i.y)||so(i.y))?En({x:s+it(i.x,f),y:c+it(i.y,m),textAnchor:"end",verticalAnchor:"end"},N):En({x:s+f/2,y:c+m/2,textAnchor:"middle",verticalAnchor:"middle"},N)},uF=function(n){return"cx"in n&&ce(n.cx)};function zn(e){var n=e.offset,t=n===void 0?5:n,r=Z9(e,V9),a=En({offset:t},r),i=a.viewBox,u=a.position,s=a.value,c=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||ke(s)&&ke(c)&&!U.isValidElement(f)&&!Re(f))return null;if(U.isValidElement(f))return U.cloneElement(f,a);var y;if(Re(f)){if(y=U.createElement(f,a),U.isValidElement(y))return y}else y=rF(a);var B=uF(i),I=Oe(a,!0);if(B&&(u==="insideStart"||u==="insideEnd"||u==="end"))return oF(a,y,I);var b=B?iF(a):pF(a);return E.createElement(go,Hu({className:De("recharts-label",d)},I,b,{breakAll:v}),y)}zn.displayName="Label";var FM=function(n){var t=n.cx,r=n.cy,a=n.angle,i=n.startAngle,u=n.endAngle,s=n.r,c=n.radius,f=n.innerRadius,m=n.outerRadius,d=n.x,v=n.y,y=n.top,B=n.left,I=n.width,b=n.height,W=n.clockWise,S=n.labelViewBox;if(S)return S;if(ce(I)&&ce(b)){if(ce(d)&&ce(v))return{x:d,y:v,width:I,height:b};if(ce(y)&&ce(B))return{x:y,y:B,width:I,height:b}}return ce(d)&&ce(v)?{x:d,y:v,width:0,height:0}:ce(t)&&ce(r)?{cx:t,cy:r,startAngle:i||a||0,endAngle:u||a||0,innerRadius:f||0,outerRadius:m||c||s||0,clockWise:W}:n.viewBox?n.viewBox:{}},sF=function(n,t){return n?n===!0?E.createElement(zn,{key:"label-implicit",viewBox:t}):Tn(n)?E.createElement(zn,{key:"label-implicit",viewBox:t,value:n}):U.isValidElement(n)?n.type===zn?U.cloneElement(n,{key:"label-implicit",viewBox:t}):E.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Re(n)?E.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Ki(n)?E.createElement(zn,Hu({viewBox:t},n,{key:"label-implicit"})):null:null},lF=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n||!n.children&&r&&!n.label)return null;var a=n.children,i=FM(n),u=ut(a,zn).map(function(c,f){return U.cloneElement(c,{viewBox:t||i,key:"label-".concat(f)})});if(!r)return u;var s=sF(n.label,t||i);return[s].concat(G9(u))};zn.parseViewBox=FM;zn.renderCallByParent=lF;var Gh,O4;function cF(){if(O4)return Gh;O4=1;function e(n){var t=n==null?0:n.length;return t?n[t-1]:void 0}return Gh=e,Gh}var fF=cF();const dF=Xe(fF);function Cu(e){"@babel/helpers - typeof";return Cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Cu(e)}var mF=["valueAccessor"],hF=["data","dataKey","clockWise","id","textBreakAll"];function vF(e){return IF(e)||bF(e)||yF(e)||gF()}function gF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yF(e,n){if(e){if(typeof e=="string")return Iv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Iv(e,n)}}function bF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IF(e){if(Array.isArray(e))return Iv(e)}function Iv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ul.apply(this,arguments)}function H4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function C4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?H4(Object(t),!0).forEach(function(r){BF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function BF(e,n,t){return n=xF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xF(e){var n=PF(e,"string");return Cu(n)=="symbol"?n:n+""}function PF(e,n){if(Cu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Cu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function N4(e,n){if(e==null)return{};var t=wF(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function wF(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var WF=function(n){return Array.isArray(n.value)?dF(n.value):n.value};function lr(e){var n=e.valueAccessor,t=n===void 0?WF:n,r=N4(e,mF),a=r.data,i=r.dataKey,u=r.clockWise,s=r.id,c=r.textBreakAll,f=N4(r,hF);return!a||!a.length?null:E.createElement($e,{className:"recharts-label-list"},a.map(function(m,d){var v=ke(i)?t(m,d):ln(m&&m.payload,i),y=ke(s)?{}:{id:"".concat(s,"-").concat(d)};return E.createElement(zn,ul({},Oe(m,!0),f,y,{parentViewBox:m.parentViewBox,value:v,textBreakAll:c,viewBox:zn.parseViewBox(ke(u)?m:C4(C4({},m),{},{clockWise:u})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function SF(e,n){return e?e===!0?E.createElement(lr,{key:"labelList-implicit",data:n}):E.isValidElement(e)||Re(e)?E.createElement(lr,{key:"labelList-implicit",data:n,content:e}):Ki(e)?E.createElement(lr,ul({data:n},e,{key:"labelList-implicit"})):null:null}function MF(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&t&&!e.label)return null;var r=e.children,a=ut(r,lr).map(function(u,s){return U.cloneElement(u,{data:n,key:"labelList-".concat(s)})});if(!t)return a;var i=SF(e.label,n);return[i].concat(vF(a))}lr.renderCallByParent=MF;function Nu(e){"@babel/helpers - typeof";return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Nu(e)}function Bv(){return Bv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bv.apply(this,arguments)}function R4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function k4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?R4(Object(t),!0).forEach(function(r){AF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function AF(e,n,t){return n=_F(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _F(e){var n=OF(e,"string");return Nu(n)=="symbol"?n:n+""}function OF(e,n){if(Nu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Nu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var HF=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),359.999);return r*a},P0=function(n){var t=n.cx,r=n.cy,a=n.radius,i=n.angle,u=n.sign,s=n.isExternal,c=n.cornerRadius,f=n.cornerIsExternal,m=c*(s?1:-1)+a,d=Math.asin(c/m)/pl,v=f?i:i+u*d,y=on(t,r,m,v),B=on(t,r,a,v),I=f?i-u*d:i,b=on(t,r,m*Math.cos(d*pl),I);return{center:y,circleTangency:B,lineTangency:b,theta:d}},qM=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,u=n.startAngle,s=n.endAngle,c=HF(u,s),f=u+c,m=on(t,r,i,u),d=on(t,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(u>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=on(t,r,a,u),B=on(t,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(u<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(t,",").concat(r," Z");return v},CF=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,u=n.cornerRadius,s=n.forceCornerRadius,c=n.cornerIsExternal,f=n.startAngle,m=n.endAngle,d=ot(m-f),v=P0({cx:t,cy:r,radius:i,angle:f,sign:d,cornerRadius:u,cornerIsExternal:c}),y=v.circleTangency,B=v.lineTangency,I=v.theta,b=P0({cx:t,cy:r,radius:i,angle:m,sign:-d,cornerRadius:u,cornerIsExternal:c}),W=b.circleTangency,S=b.lineTangency,M=b.theta,O=c?Math.abs(f-m):Math.abs(f-m)-I-M;if(O<0)return s?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(u,",").concat(u,",0,0,1,").concat(u*2,`,0
        a`).concat(u,",").concat(u,",0,0,1,").concat(-u*2,`,0
      `):qM({cx:t,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var P="M ".concat(B.x,",").concat(B.y,`
    A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
    A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
  `);if(a>0){var A=P0({cx:t,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:u,cornerIsExternal:c}),N=A.circleTangency,w=A.lineTangency,H=A.theta,k=P0({cx:t,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:u,cornerIsExternal:c}),D=k.circleTangency,R=k.lineTangency,F=k.theta,V=c?Math.abs(f-m):Math.abs(f-m)-H-F;if(V<0&&u===0)return"".concat(P,"L").concat(t,",").concat(r,"Z");P+="L".concat(R.x,",").concat(R.y,`
      A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(D.x,",").concat(D.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(V>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(w.x,",").concat(w.y,"Z")}else P+="L".concat(t,",").concat(r,"Z");return P},NF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},zM=function(n){var t=k4(k4({},NF),n),r=t.cx,a=t.cy,i=t.innerRadius,u=t.outerRadius,s=t.cornerRadius,c=t.forceCornerRadius,f=t.cornerIsExternal,m=t.startAngle,d=t.endAngle,v=t.className;if(u<i||m===d)return null;var y=De("recharts-sector",v),B=u-i,I=it(s,B,0,!0),b;return I>0&&Math.abs(m-d)<360?b=CF({cx:r,cy:a,innerRadius:i,outerRadius:u,cornerRadius:Math.min(I,B/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:m,endAngle:d}):b=qM({cx:r,cy:a,innerRadius:i,outerRadius:u,startAngle:m,endAngle:d}),E.createElement("path",Bv({},Oe(t,!0),{className:y,d:b,role:"img"}))};function Ru(e){"@babel/helpers - typeof";return Ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ru(e)}function xv(){return xv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xv.apply(this,arguments)}function E4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function T4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E4(Object(t),!0).forEach(function(r){RF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function RF(e,n,t){return n=kF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kF(e){var n=EF(e,"string");return Ru(n)=="symbol"?n:n+""}function EF(e,n){if(Ru(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ru(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var D4={curveBasisClosed:tT,curveBasisOpen:rT,curveBasis:nT,curveBumpX:LE,curveBumpY:FE,curveLinearClosed:aT,curveLinear:Kl,curveMonotoneX:oT,curveMonotoneY:iT,curveNatural:pT,curveStep:uT,curveStepAfter:lT,curveStepBefore:sT},w0=function(n){return n.x===+n.x&&n.y===+n.y},Qp=function(n){return n.x},Yp=function(n){return n.y},TF=function(n,t){if(Re(n))return n;var r="curve".concat(Vl(n));return(r==="curveMonotone"||r==="curveBump")&&t?D4["".concat(r).concat(t==="vertical"?"Y":"X")]:D4[r]||Kl},DF=function(n){var t=n.type,r=t===void 0?"linear":t,a=n.points,i=a===void 0?[]:a,u=n.baseLine,s=n.layout,c=n.connectNulls,f=c===void 0?!1:c,m=TF(r,s),d=f?i.filter(function(I){return w0(I)}):i,v;if(Array.isArray(u)){var y=f?u.filter(function(I){return w0(I)}):u,B=d.map(function(I,b){return T4(T4({},I),{},{base:y[b]})});return s==="vertical"?v=h0().y(Yp).x1(Qp).x0(function(I){return I.base.x}):v=h0().x(Qp).y1(Yp).y0(function(I){return I.base.y}),v.defined(w0).curve(m),v(B)}return s==="vertical"&&ce(u)?v=h0().y(Yp).x1(Qp).x0(u):ce(u)?v=h0().x(Qp).y1(Yp).y0(u):v=q3().x(Qp).y(Yp),v.defined(w0).curve(m),v(d)},Ca=function(n){var t=n.className,r=n.points,a=n.path,i=n.pathRef;if((!r||!r.length)&&!a)return null;var u=r&&r.length?DF(n):a;return E.createElement("path",xv({},Oe(n,!1),k0(n),{className:De("recharts-curve",t),d:u,ref:i}))},Kh={exports:{}},Qh,j4;function jF(){if(j4)return Qh;j4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qh=e,Qh}var Yh,$4;function $F(){if($4)return Yh;$4=1;var e=jF();function n(){}function t(){}return t.resetWarningCache=n,Yh=function(){function r(u,s,c,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:n};return i.PropTypes=i,i},Yh}var L4;function LF(){return L4||(L4=1,Kh.exports=$F()()),Kh.exports}var FF=LF();const Ye=Xe(FF),{getOwnPropertyNames:qF,getOwnPropertySymbols:zF}=Object,{hasOwnProperty:UF}=Object.prototype;function Xh(e,n){return function(r,a,i){return e(r,a,i)&&n(r,a,i)}}function W0(e){return function(t,r,a){if(!t||!r||typeof t!="object"||typeof r!="object")return e(t,r,a);const{cache:i}=a,u=i.get(t),s=i.get(r);if(u&&s)return u===r&&s===t;i.set(t,r),i.set(r,t);const c=e(t,r,a);return i.delete(t),i.delete(r),c}}function VF(e){return e!=null?e[Symbol.toStringTag]:void 0}function F4(e){return qF(e).concat(zF(e))}const GF=Object.hasOwn||((e,n)=>UF.call(e,n));function wo(e,n){return e===n||!e&&!n&&e!==e&&n!==n}const KF="__v",QF="__o",YF="_owner",{getOwnPropertyDescriptor:q4,keys:z4}=Object;function XF(e,n){return e.byteLength===n.byteLength&&sl(new Uint8Array(e),new Uint8Array(n))}function ZF(e,n,t){let r=e.length;if(n.length!==r)return!1;for(;r-- >0;)if(!t.equals(e[r],n[r],r,r,e,n,t))return!1;return!0}function JF(e,n){return e.byteLength===n.byteLength&&sl(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function eq(e,n){return wo(e.getTime(),n.getTime())}function nq(e,n){return e.name===n.name&&e.message===n.message&&e.cause===n.cause&&e.stack===n.stack}function tq(e,n){return e===n}function U4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let u,s,c=0;for(;(u=i.next())&&!u.done;){const f=n.entries();let m=!1,d=0;for(;(s=f.next())&&!s.done;){if(a[d]){d++;continue}const v=u.value,y=s.value;if(t.equals(v[0],y[0],c,d,e,n,t)&&t.equals(v[1],y[1],v[0],y[0],e,n,t)){m=a[d]=!0;break}d++}if(!m)return!1;c++}return!0}const rq=wo;function aq(e,n,t){const r=z4(e);let a=r.length;if(z4(n).length!==a)return!1;for(;a-- >0;)if(!UM(e,n,t,r[a]))return!1;return!0}function Xp(e,n,t){const r=F4(e);let a=r.length;if(F4(n).length!==a)return!1;let i,u,s;for(;a-- >0;)if(i=r[a],!UM(e,n,t,i)||(u=q4(e,i),s=q4(n,i),(u||s)&&(!u||!s||u.configurable!==s.configurable||u.enumerable!==s.enumerable||u.writable!==s.writable)))return!1;return!0}function oq(e,n){return wo(e.valueOf(),n.valueOf())}function iq(e,n){return e.source===n.source&&e.flags===n.flags}function V4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let u,s;for(;(u=i.next())&&!u.done;){const c=n.values();let f=!1,m=0;for(;(s=c.next())&&!s.done;){if(!a[m]&&t.equals(u.value,s.value,u.value,s.value,e,n,t)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function sl(e,n){let t=e.byteLength;if(n.byteLength!==t||e.byteOffset!==n.byteOffset)return!1;for(;t-- >0;)if(e[t]!==n[t])return!1;return!0}function pq(e,n){return e.hostname===n.hostname&&e.pathname===n.pathname&&e.protocol===n.protocol&&e.port===n.port&&e.hash===n.hash&&e.username===n.username&&e.password===n.password}function UM(e,n,t,r){return(r===YF||r===QF||r===KF)&&(e.$$typeof||n.$$typeof)?!0:GF(n,r)&&t.equals(e[r],n[r],r,r,e,n,t)}const uq="[object ArrayBuffer]",sq="[object Arguments]",lq="[object Boolean]",cq="[object DataView]",fq="[object Date]",dq="[object Error]",mq="[object Map]",hq="[object Number]",vq="[object Object]",gq="[object RegExp]",yq="[object Set]",bq="[object String]",Iq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},Bq="[object URL]",xq=Object.prototype.toString;function Pq({areArrayBuffersEqual:e,areArraysEqual:n,areDataViewsEqual:t,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:u,areNumbersEqual:s,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:B}){return function(b,W,S){if(b===W)return!0;if(b==null||W==null)return!1;const M=typeof b;if(M!==typeof W)return!1;if(M!=="object")return M==="number"?s(b,W,S):M==="function"?i(b,W,S):!1;const O=b.constructor;if(O!==W.constructor)return!1;if(O===Object)return c(b,W,S);if(Array.isArray(b))return n(b,W,S);if(O===Date)return r(b,W,S);if(O===RegExp)return m(b,W,S);if(O===Map)return u(b,W,S);if(O===Set)return d(b,W,S);const P=xq.call(b);if(P===fq)return r(b,W,S);if(P===gq)return m(b,W,S);if(P===mq)return u(b,W,S);if(P===yq)return d(b,W,S);if(P===vq)return typeof b.then!="function"&&typeof W.then!="function"&&c(b,W,S);if(P===Bq)return y(b,W,S);if(P===dq)return a(b,W,S);if(P===sq)return c(b,W,S);if(Iq[P])return v(b,W,S);if(P===uq)return e(b,W,S);if(P===cq)return t(b,W,S);if(P===lq||P===hq||P===bq)return f(b,W,S);if(B){let A=B[P];if(!A){const N=VF(b);N&&(A=B[N])}if(A)return A(b,W,S)}return!1}}function wq({circular:e,createCustomConfig:n,strict:t}){let r={areArrayBuffersEqual:XF,areArraysEqual:t?Xp:ZF,areDataViewsEqual:JF,areDatesEqual:eq,areErrorsEqual:nq,areFunctionsEqual:tq,areMapsEqual:t?Xh(U4,Xp):U4,areNumbersEqual:rq,areObjectsEqual:t?Xp:aq,arePrimitiveWrappersEqual:oq,areRegExpsEqual:iq,areSetsEqual:t?Xh(V4,Xp):V4,areTypedArraysEqual:t?Xh(sl,Xp):sl,areUrlsEqual:pq,unknownTagComparators:void 0};if(n&&(r=Object.assign({},r,n(r))),e){const a=W0(r.areArraysEqual),i=W0(r.areMapsEqual),u=W0(r.areObjectsEqual),s=W0(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:u,areSetsEqual:s})}return r}function Wq(e){return function(n,t,r,a,i,u,s){return e(n,t,s)}}function Sq({circular:e,comparator:n,createState:t,equals:r,strict:a}){if(t)return function(s,c){const{cache:f=e?new WeakMap:void 0,meta:m}=t();return n(s,c,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(s,c){return n(s,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(s,c){return n(s,c,i)}}const Mq=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>wo});La({strict:!0,createInternalComparator:()=>wo});La({circular:!0,createInternalComparator:()=>wo});La({circular:!0,createInternalComparator:()=>wo,strict:!0});function La(e={}){const{circular:n=!1,createInternalComparator:t,createState:r,strict:a=!1}=e,i=wq(e),u=Pq(i),s=t?t(u):Wq(u);return Sq({circular:n,comparator:u,createState:r,equals:s,strict:a})}function Aq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function G4(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=-1,r=function a(i){t<0&&(t=i),i-t>n?(e(i),t=-1):Aq(a)};requestAnimationFrame(r)}function Pv(e){"@babel/helpers - typeof";return Pv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pv(e)}function _q(e){return Nq(e)||Cq(e)||Hq(e)||Oq()}function Oq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hq(e,n){if(e){if(typeof e=="string")return K4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return K4(e,n)}}function K4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Cq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nq(e){if(Array.isArray(e))return e}function Rq(){var e={},n=function(){return null},t=!1,r=function a(i){if(!t){if(Array.isArray(i)){if(!i.length)return;var u=i,s=_q(u),c=s[0],f=s.slice(1);if(typeof c=="number"){G4(a.bind(null,f),c);return}a(c),G4(a.bind(null,f));return}Pv(i)==="object"&&(e=i,n(e)),typeof i=="function"&&i()}};return{stop:function(){t=!0},start:function(i){t=!1,r(i)},subscribe:function(i){return n=i,function(){n=function(){return null}}}}}function ku(e){"@babel/helpers - typeof";return ku=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ku(e)}function Q4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Y4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Q4(Object(t),!0).forEach(function(r){VM(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function VM(e,n,t){return n=kq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kq(e){var n=Eq(e,"string");return ku(n)==="symbol"?n:String(n)}function Eq(e,n){if(ku(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ku(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Tq=function(n,t){return[Object.keys(n),Object.keys(t)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},Dq=function(n){return n},jq=function(n){return n.replace(/([A-Z])/g,function(t){return"-".concat(t.toLowerCase())})},iu=function(n,t){return Object.keys(t).reduce(function(r,a){return Y4(Y4({},r),{},VM({},a,n(a,t[a])))},{})},X4=function(n,t,r){return n.map(function(a){return"".concat(jq(a)," ").concat(t,"ms ").concat(r)}).join(",")};function $q(e,n){return qq(e)||Fq(e,n)||GM(e,n)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fq(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function qq(e){if(Array.isArray(e))return e}function zq(e){return Gq(e)||Vq(e)||GM(e)||Uq()}function Uq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GM(e,n){if(e){if(typeof e=="string")return wv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wv(e,n)}}function Vq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gq(e){if(Array.isArray(e))return wv(e)}function wv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var ll=1e-4,KM=function(n,t){return[0,3*n,3*t-6*n,3*n-3*t+1]},QM=function(n,t){return n.map(function(r,a){return r*Math.pow(t,a)}).reduce(function(r,a){return r+a})},Z4=function(n,t){return function(r){var a=KM(n,t);return QM(a,r)}},Kq=function(n,t){return function(r){var a=KM(n,t),i=[].concat(zq(a.map(function(u,s){return u*s}).slice(1)),[0]);return QM(i,r)}},J4=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0],i=t[1],u=t[2],s=t[3];if(t.length===1)switch(t[0]){case"linear":a=0,i=0,u=1,s=1;break;case"ease":a=.25,i=.1,u=.25,s=1;break;case"ease-in":a=.42,i=0,u=1,s=1;break;case"ease-out":a=.42,i=0,u=.58,s=1;break;case"ease-in-out":a=0,i=0,u=.58,s=1;break;default:{var c=t[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),m=$q(f,4);a=m[0],i=m[1],u=m[2],s=m[3]}}}var d=Z4(a,u),v=Z4(i,s),y=Kq(a,u),B=function(W){return W>1?1:W<0?0:W},I=function(W){for(var S=W>1?1:W,M=S,O=0;O<8;++O){var P=d(M)-S,A=y(M);if(Math.abs(P-S)<ll||A<ll)return v(M);M=B(M-P/A)}return v(M)};return I.isStepper=!1,I},Qq=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.stiff,r=t===void 0?100:t,a=n.damping,i=a===void 0?8:a,u=n.dt,s=u===void 0?17:u,c=function(m,d,v){var y=-(m-d)*r,B=v*i,I=v+(y-B)*s/1e3,b=v*s/1e3+m;return Math.abs(b-d)<ll&&Math.abs(I)<ll?[d,0]:[b,I]};return c.isStepper=!0,c.dt=s,c},Yq=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return J4(a);case"spring":return Qq();default:if(a.split("(")[0]==="cubic-bezier")return J4(a)}return typeof a=="function"?a:null};function Eu(e){"@babel/helpers - typeof";return Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Eu(e)}function e5(e){return Jq(e)||Zq(e)||YM(e)||Xq()}function Xq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jq(e){if(Array.isArray(e))return Sv(e)}function n5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Kn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?n5(Object(t),!0).forEach(function(r){Wv(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Wv(e,n,t){return n=ez(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ez(e){var n=nz(e,"string");return Eu(n)==="symbol"?n:String(n)}function nz(e,n){if(Eu(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Eu(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function tz(e,n){return oz(e)||az(e,n)||YM(e,n)||rz()}function rz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YM(e,n){if(e){if(typeof e=="string")return Sv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sv(e,n)}}function Sv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function az(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function oz(e){if(Array.isArray(e))return e}var cl=function(n,t,r){return n+(t-n)*r},Mv=function(n){var t=n.from,r=n.to;return t!==r},iz=function e(n,t,r){var a=iu(function(i,u){if(Mv(u)){var s=n(u.from,u.to,u.velocity),c=tz(s,2),f=c[0],m=c[1];return Kn(Kn({},u),{},{from:f,velocity:m})}return u},t);return r<1?iu(function(i,u){return Mv(u)?Kn(Kn({},u),{},{velocity:cl(u.velocity,a[i].velocity,r),from:cl(u.from,a[i].from,r)}):u},t):e(n,a,r-1)};const pz=(function(e,n,t,r,a){var i=Tq(e,n),u=i.reduce(function(b,W){return Kn(Kn({},b),{},Wv({},W,[e[W],n[W]]))},{}),s=i.reduce(function(b,W){return Kn(Kn({},b),{},Wv({},W,{from:e[W],velocity:0,to:n[W]}))},{}),c=-1,f,m,d=function(){return null},v=function(){return iu(function(W,S){return S.from},s)},y=function(){return!Object.values(s).filter(Mv).length},B=function(W){f||(f=W);var S=W-f,M=S/t.dt;s=iz(t,s,M),a(Kn(Kn(Kn({},e),n),v())),f=W,y()||(c=requestAnimationFrame(d))},I=function(W){m||(m=W);var S=(W-m)/r,M=iu(function(P,A){return cl.apply(void 0,e5(A).concat([t(S)]))},u);if(a(Kn(Kn(Kn({},e),n),M)),S<1)c=requestAnimationFrame(d);else{var O=iu(function(P,A){return cl.apply(void 0,e5(A).concat([t(1)]))},u);a(Kn(Kn(Kn({},e),n),O))}};return d=t.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wi(e)}var uz=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function sz(e,n){if(e==null)return{};var t=lz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function lz(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Zh(e){return mz(e)||dz(e)||fz(e)||cz()}function cz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fz(e,n){if(e){if(typeof e=="string")return Av(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Av(e,n)}}function dz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mz(e){if(Array.isArray(e))return Av(e)}function Av(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ar(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?t5(Object(t),!0).forEach(function(r){tu(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):t5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tu(e,n,t){return n=XM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function hz(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function vz(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XM(r.key),r)}}function gz(e,n,t){return n&&vz(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function XM(e){var n=yz(e,"string");return wi(n)==="symbol"?n:String(n)}function yz(e,n){if(wi(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(wi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function bz(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&_v(e,n)}function _v(e,n){return _v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},_v(e,n)}function Iz(e){var n=Bz();return function(){var r=fl(e),a;if(n){var i=fl(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Ov(this,a)}}function Ov(e,n){if(n&&(wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Hv(e)}function Hv(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Bz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fl(e){return fl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},fl(e)}var Qt=(function(e){bz(t,e);var n=Iz(t);function t(r,a){var i;hz(this,t),i=n.call(this,r,a);var u=i.props,s=u.isActive,c=u.attributeName,f=u.from,m=u.to,d=u.steps,v=u.children,y=u.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Hv(i)),i.changeStyle=i.changeStyle.bind(Hv(i)),!s||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Ov(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Ov(i);i.state={style:c?tu({},c,f):f}}else i.state={style:{}};return i}return gz(t,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,u=a.canBegin;this.mounted=!0,!(!i||!u)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,u=i.isActive,s=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(s){if(!u){var y={style:c?tu({},c,m):m};this.state&&v&&(c&&v[c]!==m||!c&&v!==m)&&this.setState(y);return}if(!(Mq(a.to,m)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var b={style:c?tu({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(ar(ar({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,u=a.from,s=a.to,c=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=pz(u,s,Yq(f),c,this.changeStyle),B=function(){i.stopJSAnimation=y()};this.manager.start([v,m,B,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,u=a.steps,s=a.begin,c=a.onAnimationStart,f=u[0],m=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,W){if(W===0)return I;var S=b.duration,M=b.easing,O=M===void 0?"ease":M,P=b.style,A=b.properties,N=b.onAnimationEnd,w=W>0?u[W-1]:b,H=A||Object.keys(P);if(typeof O=="function"||O==="spring")return[].concat(Zh(I),[i.runJSAnimation.bind(i,{from:w.style,to:P,duration:S,easing:O}),S]);var k=X4(H,S,O),D=ar(ar(ar({},w.style),P),{},{transition:k});return[].concat(Zh(I),[D,S,N]).filter(Dq)};return this.manager.start([c].concat(Zh(u.reduce(y,[m,Math.max(v,s)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=Rq());var i=a.begin,u=a.duration,s=a.attributeName,c=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=s?tu({},s,c):c,b=X4(Object.keys(I),u,f);B.start([m,i,ar(ar({},I),{},{transition:b}),u,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var u=a.duration;a.attributeName,a.easing;var s=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=sz(a,uz),f=U.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!s||f===0||u<=0)return i;var d=function(y){var B=y.props,I=B.style,b=I===void 0?{}:I,W=B.className,S=U.cloneElement(y,ar(ar({},c),{},{style:ar(ar({},b),m),className:W}));return S};return f===1?d(U.Children.only(i)):E.createElement("div",null,U.Children.map(i,function(v){return d(v)}))}}]),t})(U.PureComponent);Qt.displayName="Animate";Qt.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Qt.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Tu(e){"@babel/helpers - typeof";return Tu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tu(e)}function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dl.apply(this,arguments)}function xz(e,n){return Sz(e)||Wz(e,n)||wz(e,n)||Pz()}function Pz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wz(e,n){if(e){if(typeof e=="string")return r5(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r5(e,n)}}function r5(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Wz(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function Sz(e){if(Array.isArray(e))return e}function a5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function o5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?a5(Object(t),!0).forEach(function(r){Mz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Mz(e,n,t){return n=Az(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Az(e){var n=_z(e,"string");return Tu(n)=="symbol"?n:n+""}function _z(e,n){if(Tu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Tu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var i5=function(n,t,r,a,i){var u=Math.min(Math.abs(r)/2,Math.abs(a)/2),s=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(u>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>u?u:i[v];m="M".concat(n,",").concat(t+s*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(n+c*d[0],",").concat(t)),m+="L ".concat(n+r-c*d[1],",").concat(t),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(n+r,",").concat(t+s*d[1])),m+="L ".concat(n+r,",").concat(t+a-s*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(n+r-c*d[2],",").concat(t+a)),m+="L ".concat(n+c*d[3],",").concat(t+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(n,",").concat(t+a-s*d[3])),m+="Z"}else if(u>0&&i===+i&&i>0){var B=Math.min(u,i);m="M ".concat(n,",").concat(t+s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+c*B,",").concat(t,`
            L `).concat(n+r-c*B,",").concat(t,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r,",").concat(t+s*B,`
            L `).concat(n+r,",").concat(t+a-s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r-c*B,",").concat(t+a,`
            L `).concat(n+c*B,",").concat(t+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n,",").concat(t+a-s*B," Z")}else m="M ".concat(n,",").concat(t," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},Oz=function(n,t){if(!n||!t)return!1;var r=n.x,a=n.y,i=t.x,u=t.y,s=t.width,c=t.height;if(Math.abs(s)>0&&Math.abs(c)>0){var f=Math.min(i,i+s),m=Math.max(i,i+s),d=Math.min(u,u+c),v=Math.max(u,u+c);return r>=f&&r<=m&&a>=d&&a<=v}return!1},Hz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},ly=function(n){var t=o5(o5({},Hz),n),r=U.useRef(),a=U.useState(-1),i=xz(a,2),u=i[0],s=i[1];U.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&s(O)}catch{}},[]);var c=t.x,f=t.y,m=t.width,d=t.height,v=t.radius,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,W=t.isAnimationActive,S=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var M=De("recharts-rectangle",y);return S?E.createElement(Qt,{canBegin:u>0,from:{width:m,height:d,x:c,y:f},to:{width:m,height:d,x:c,y:f},duration:I,animationEasing:B,isActive:S},function(O){var P=O.width,A=O.height,N=O.x,w=O.y;return E.createElement(Qt,{canBegin:u>0,from:"0px ".concat(u===-1?1:u,"px"),to:"".concat(u,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:W,easing:B},E.createElement("path",dl({},Oe(t,!0),{className:M,d:i5(N,w,P,A,v),ref:r})))}):E.createElement("path",dl({},Oe(t,!0),{className:M,d:i5(c,f,m,d,v)}))},Cz=["points","className","baseLinePoints","connectNulls"];function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},oi.apply(this,arguments)}function Nz(e,n){if(e==null)return{};var t=Rz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Rz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function p5(e){return Dz(e)||Tz(e)||Ez(e)||kz()}function kz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ez(e,n){if(e){if(typeof e=="string")return Cv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cv(e,n)}}function Tz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dz(e){if(Array.isArray(e))return Cv(e)}function Cv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u5=function(n){return n&&n.x===+n.x&&n.y===+n.y},jz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[[]];return n.forEach(function(r){u5(r)?t[t.length-1].push(r):t[t.length-1].length>0&&t.push([])}),u5(n[0])&&t[t.length-1].push(n[0]),t[t.length-1].length<=0&&(t=t.slice(0,-1)),t},pu=function(n,t){var r=jz(n);t&&(r=[r.reduce(function(i,u){return[].concat(p5(i),p5(u))},[])]);var a=r.map(function(i){return i.reduce(function(u,s,c){return"".concat(u).concat(c===0?"M":"L").concat(s.x,",").concat(s.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},$z=function(n,t,r){var a=pu(n,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(pu(t.reverse(),r).slice(1))},Lz=function(n){var t=n.points,r=n.className,a=n.baseLinePoints,i=n.connectNulls,u=Nz(n,Cz);if(!t||!t.length)return null;var s=De("recharts-polygon",r);if(a&&a.length){var c=u.stroke&&u.stroke!=="none",f=$z(t,a,i);return E.createElement("g",{className:s},E.createElement("path",oi({},Oe(u,!0),{fill:f.slice(-1)==="Z"?u.fill:"none",stroke:"none",d:f})),c?E.createElement("path",oi({},Oe(u,!0),{fill:"none",d:pu(t,i)})):null,c?E.createElement("path",oi({},Oe(u,!0),{fill:"none",d:pu(a,i)})):null)}var m=pu(t,i);return E.createElement("path",oi({},Oe(u,!0),{fill:m.slice(-1)==="Z"?u.fill:"none",className:s,d:m}))};function Nv(){return Nv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Nv.apply(this,arguments)}var ts=function(n){var t=n.cx,r=n.cy,a=n.r,i=n.className,u=De("recharts-dot",i);return t===+t&&r===+r&&a===+a?E.createElement("circle",Nv({},Oe(n,!1),k0(n),{className:u,cx:t,cy:r,r:a})):null};function Du(e){"@babel/helpers - typeof";return Du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Du(e)}var Fz=["x","y","top","left","width","height","className"];function Rv(){return Rv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Rv.apply(this,arguments)}function s5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function qz(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s5(Object(t),!0).forEach(function(r){zz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zz(e,n,t){return n=Uz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Uz(e){var n=Vz(e,"string");return Du(n)=="symbol"?n:n+""}function Vz(e,n){if(Du(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Du(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Gz(e,n){if(e==null)return{};var t=Kz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Kz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var Qz=function(n,t,r,a,i,u){return"M".concat(n,",").concat(i,"v").concat(a,"M").concat(u,",").concat(t,"h").concat(r)},Yz=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,u=n.top,s=u===void 0?0:u,c=n.left,f=c===void 0?0:c,m=n.width,d=m===void 0?0:m,v=n.height,y=v===void 0?0:v,B=n.className,I=Gz(n,Fz),b=qz({x:r,y:i,top:s,left:f,width:d,height:y},I);return!ce(r)||!ce(i)||!ce(d)||!ce(y)||!ce(s)||!ce(f)?null:E.createElement("path",Rv({},Oe(b,!0),{className:De("recharts-cross",B),d:Qz(r,i,d,y,s,f)}))},Jh,l5;function Xz(){if(l5)return Jh;l5=1;var e=ic(),n=fM(),t=Mr();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return Jh=r,Jh}var Zz=Xz();const Jz=Xe(Zz);var e6,c5;function eU(){if(c5)return e6;c5=1;var e=ic(),n=Mr(),t=dM();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return e6=r,e6}var nU=eU();const tU=Xe(nU);var rU=["cx","cy","angle","ticks","axisLine"],aU=["ticks","tick","angle","tickFormatter","stroke"];function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wi(e)}function uu(){return uu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},uu.apply(this,arguments)}function f5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ro(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?f5(Object(t),!0).forEach(function(r){lc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function d5(e,n){if(e==null)return{};var t=oU(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function oU(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function iU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,JM(r.key),r)}}function pU(e,n,t){return n&&m5(e.prototype,n),t&&m5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function uU(e,n,t){return n=ml(n),sU(e,ZM()?Reflect.construct(n,t||[],ml(e).constructor):n.apply(e,t))}function sU(e,n){if(n&&(Wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lU(e)}function lU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ZM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ZM=function(){return!!e})()}function ml(e){return ml=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ml(e)}function cU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&kv(e,n)}function kv(e,n){return kv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},kv(e,n)}function lc(e,n,t){return n=JM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function JM(e){var n=fU(e,"string");return Wi(n)=="symbol"?n:n+""}function fU(e,n){if(Wi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var cc=(function(e){function n(){return iU(this,n),uU(this,n,arguments)}return cU(n,e),pU(n,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,u=i.angle,s=i.cx,c=i.cy;return on(s,c,a,u)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,u=r.angle,s=r.ticks,c=Jz(s,function(m){return m.coordinate||0}),f=tU(s,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:u,endAngle:u,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,u=r.angle,s=r.ticks,c=r.axisLine,f=d5(r,rU),m=s.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=on(a,i,m[0],u),v=on(a,i,m[1],u),y=ro(ro(ro({},Oe(f,!1)),{},{fill:"none"},Oe(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return E.createElement("line",uu({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,u=a.tick,s=a.angle,c=a.tickFormatter,f=a.stroke,m=d5(a,aU),d=this.getTickTextAnchor(),v=Oe(m,!1),y=Oe(u,!1),B=i.map(function(I,b){var W=r.getTickValueCoord(I),S=ro(ro(ro(ro({textAnchor:d,transform:"rotate(".concat(90-s,", ").concat(W.x,", ").concat(W.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},W),{},{payload:I});return E.createElement($e,uu({className:De("recharts-polar-radius-axis-tick",LM(u)),key:"tick-".concat(I.coordinate)},Ra(r.props,I,b)),n.renderTickItem(u,S,c?c(I.value,b):I.value))});return E.createElement($e,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,u=r.tick;return!a||!a.length?null:E.createElement($e,{className:De("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),u&&this.renderTicks(),zn.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var u;return E.isValidElement(r)?u=E.cloneElement(r,a):Re(r)?u=r(a):u=E.createElement(go,uu({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),u}}])})(U.PureComponent);lc(cc,"displayName","PolarRadiusAxis");lc(cc,"axisType","radiusAxis");lc(cc,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Si(e)}function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},uo.apply(this,arguments)}function h5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ao(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?h5(Object(t),!0).forEach(function(r){fc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function dU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nA(r.key),r)}}function mU(e,n,t){return n&&v5(e.prototype,n),t&&v5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function hU(e,n,t){return n=hl(n),vU(e,eA()?Reflect.construct(n,t||[],hl(e).constructor):n.apply(e,t))}function vU(e,n){if(n&&(Si(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gU(e)}function gU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eA=function(){return!!e})()}function hl(e){return hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},hl(e)}function yU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Ev(e,n)}function Ev(e,n){return Ev=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ev(e,n)}function fc(e,n,t){return n=nA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nA(e){var n=bU(e,"string");return Si(n)=="symbol"?n:n+""}function bU(e,n){if(Si(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var IU=Math.PI/180,g5=1e-5,dc=(function(e){function n(){return dU(this,n),hU(this,n,arguments)}return yU(n,e),mU(n,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,u=a.cy,s=a.radius,c=a.orientation,f=a.tickSize,m=f||8,d=on(i,u,s,r.coordinate),v=on(i,u,s+(c==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*IU),u;return i>g5?u=a==="outer"?"start":"end":i<-g5?u=a==="outer"?"end":"start":u="middle",u}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,u=r.radius,s=r.axisLine,c=r.axisLineType,f=ao(ao({},Oe(this.props,!1)),{},{fill:"none"},Oe(s,!1));if(c==="circle")return E.createElement(ts,uo({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:u}));var m=this.props.ticks,d=m.map(function(v){return on(a,i,u,v.coordinate)});return E.createElement(Lz,uo({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,u=a.tick,s=a.tickLine,c=a.tickFormatter,f=a.stroke,m=Oe(this.props,!1),d=Oe(u,!1),v=ao(ao({},m),{},{fill:"none"},Oe(s,!1)),y=i.map(function(B,I){var b=r.getTickLineCoord(B),W=r.getTickTextAnchor(B),S=ao(ao(ao({textAnchor:W},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:b.x2,y:b.y2});return E.createElement($e,uo({className:De("recharts-polar-angle-axis-tick",LM(u)),key:"tick-".concat(B.coordinate)},Ra(r.props,B,I)),s&&E.createElement("line",uo({className:"recharts-polar-angle-axis-tick-line"},v,b)),u&&n.renderTickItem(u,S,c?c(B.value,I):B.value))});return E.createElement($e,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,u=r.axisLine;return i<=0||!a||!a.length?null:E.createElement($e,{className:De("recharts-polar-angle-axis",this.props.className)},u&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var u;return E.isValidElement(r)?u=E.cloneElement(r,a):Re(r)?u=r(a):u=E.createElement(go,uo({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),u}}])})(U.PureComponent);fc(dc,"displayName","PolarAngleAxis");fc(dc,"axisType","angleAxis");fc(dc,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var n6,y5;function BU(){if(y5)return n6;y5=1;var e=fS(),n=e(Object.getPrototypeOf,Object);return n6=n,n6}var t6,b5;function xU(){if(b5)return t6;b5=1;var e=Yr(),n=BU(),t=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,u=a.toString,s=i.hasOwnProperty,c=u.call(Object);function f(m){if(!t(m)||e(m)!=r)return!1;var d=n(m);if(d===null)return!0;var v=s.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&u.call(v)==c}return t6=f,t6}var PU=xU();const wU=Xe(PU);var r6,I5;function WU(){if(I5)return r6;I5=1;var e=Yr(),n=Xr(),t="[object Boolean]";function r(a){return a===!0||a===!1||n(a)&&e(a)==t}return r6=r,r6}var SU=WU();const MU=Xe(SU);function ju(e){"@babel/helpers - typeof";return ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ju(e)}function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vl.apply(this,arguments)}function AU(e,n){return CU(e)||HU(e,n)||OU(e,n)||_U()}function _U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OU(e,n){if(e){if(typeof e=="string")return B5(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B5(e,n)}}function B5(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function HU(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function CU(e){if(Array.isArray(e))return e}function x5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function P5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?x5(Object(t),!0).forEach(function(r){NU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function NU(e,n,t){return n=RU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function RU(e){var n=kU(e,"string");return ju(n)=="symbol"?n:n+""}function kU(e,n){if(ju(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ju(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var w5=function(n,t,r,a,i){var u=r-a,s;return s="M ".concat(n,",").concat(t),s+="L ".concat(n+r,",").concat(t),s+="L ".concat(n+r-u/2,",").concat(t+i),s+="L ".concat(n+r-u/2-a,",").concat(t+i),s+="L ".concat(n,",").concat(t," Z"),s},EU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},TU=function(n){var t=P5(P5({},EU),n),r=U.useRef(),a=U.useState(-1),i=AU(a,2),u=i[0],s=i[1];U.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var M=r.current.getTotalLength();M&&s(M)}catch{}},[]);var c=t.x,f=t.y,m=t.upperWidth,d=t.lowerWidth,v=t.height,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,W=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var S=De("recharts-trapezoid",y);return W?E.createElement(Qt,{canBegin:u>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:B,isActive:W},function(M){var O=M.upperWidth,P=M.lowerWidth,A=M.height,N=M.x,w=M.y;return E.createElement(Qt,{canBegin:u>0,from:"0px ".concat(u===-1?1:u,"px"),to:"".concat(u,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:B},E.createElement("path",vl({},Oe(t,!0),{className:S,d:w5(N,w,O,P,A),ref:r})))}):E.createElement("g",null,E.createElement("path",vl({},Oe(t,!0),{className:S,d:w5(c,f,m,d,v)})))},DU=["option","shapeType","propTransformer","activeClassName","isActive"];function $u(e){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$u(e)}function jU(e,n){if(e==null)return{};var t=$U(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function $U(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function W5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function gl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?W5(Object(t),!0).forEach(function(r){LU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function LU(e,n,t){return n=FU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function FU(e){var n=qU(e,"string");return $u(n)=="symbol"?n:n+""}function qU(e,n){if($u(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function zU(e,n){return gl(gl({},n),e)}function UU(e,n){return e==="symbols"}function S5(e){var n=e.shapeType,t=e.elementProps;switch(n){case"rectangle":return E.createElement(ly,t);case"trapezoid":return E.createElement(TU,t);case"sector":return E.createElement(zM,t);case"symbols":if(UU(n))return E.createElement(Yl,t);break;default:return null}}function VU(e){return U.isValidElement(e)?e.props:e}function yl(e){var n=e.option,t=e.shapeType,r=e.propTransformer,a=r===void 0?zU:r,i=e.activeClassName,u=i===void 0?"recharts-active-shape":i,s=e.isActive,c=jU(e,DU),f;if(U.isValidElement(n))f=U.cloneElement(n,gl(gl({},c),VU(n)));else if(Re(n))f=n(c);else if(wU(n)&&!MU(n)){var m=a(n,c);f=E.createElement(S5,{shapeType:t,elementProps:m})}else{var d=c;f=E.createElement(S5,{shapeType:t,elementProps:d})}return s?E.createElement($e,{className:u},f):f}function mc(e,n){return n!=null&&"trapezoids"in e.props}function hc(e,n){return n!=null&&"sectors"in e.props}function Lu(e,n){return n!=null&&"points"in e.props}function GU(e,n){var t,r,a=e.x===(n==null||(t=n.labelViewBox)===null||t===void 0?void 0:t.x)||e.x===n.x,i=e.y===(n==null||(r=n.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===n.y;return a&&i}function KU(e,n){var t=e.endAngle===n.endAngle,r=e.startAngle===n.startAngle;return t&&r}function QU(e,n){var t=e.x===n.x,r=e.y===n.y,a=e.z===n.z;return t&&r&&a}function YU(e,n){var t;return mc(e,n)?t=GU:hc(e,n)?t=KU:Lu(e,n)&&(t=QU),t}function XU(e,n){var t;return mc(e,n)?t="trapezoids":hc(e,n)?t="sectors":Lu(e,n)&&(t="points"),t}function ZU(e,n){if(mc(e,n)){var t;return(t=n.tooltipPayload)===null||t===void 0||(t=t[0])===null||t===void 0||(t=t.payload)===null||t===void 0?void 0:t.payload}if(hc(e,n)){var r;return(r=n.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Lu(e,n)?n.payload:{}}function JU(e){var n=e.activeTooltipItem,t=e.graphicalItem,r=e.itemData,a=XU(t,n),i=ZU(t,n),u=r.filter(function(c,f){var m=ka(i,c),d=t.props[a].filter(function(B){var I=YU(t,n);return I(B,n)}),v=t.props[a].indexOf(d[d.length-1]),y=f===v;return m&&y}),s=r.indexOf(u[u.length-1]);return s}var _0;function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mi(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ii.apply(this,arguments)}function M5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?M5(Object(t),!0).forEach(function(r){zt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function eV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function A5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,rA(r.key),r)}}function nV(e,n,t){return n&&A5(e.prototype,n),t&&A5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function tV(e,n,t){return n=bl(n),rV(e,tA()?Reflect.construct(n,t||[],bl(e).constructor):n.apply(e,t))}function rV(e,n){if(n&&(Mi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aV(e)}function aV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tA=function(){return!!e})()}function bl(e){return bl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},bl(e)}function oV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Tv(e,n)}function Tv(e,n){return Tv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tv(e,n)}function zt(e,n,t){return n=rA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rA(e){var n=iV(e,"string");return Mi(n)=="symbol"?n:n+""}function iV(e,n){if(Mi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function n(t){var r;return eV(this,n),r=tV(this,n,[t]),zt(r,"pieRef",null),zt(r,"sectorRefs",[]),zt(r,"id",Da("recharts-pie-")),zt(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Re(a)&&a()}),zt(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Re(a)&&a()}),r.state={isAnimationFinished:!t.isAnimationActive,prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,sectorToFocus:0},r}return oV(n,e),nV(n,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,u=i.label,s=i.labelLine,c=i.dataKey,f=i.valueKey,m=Oe(this.props,!1),d=Oe(u,!1),v=Oe(s,!1),y=u&&u.offsetRadius||20,B=r.map(function(I,b){var W=(I.startAngle+I.endAngle)/2,S=on(I.cx,I.cy,I.outerRadius+y,W),M=rn(rn(rn(rn({},m),I),{},{stroke:"none"},d),{},{index:b,textAnchor:n.getTextAnchor(S.x,I.cx)},S),O=rn(rn(rn(rn({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[on(I.cx,I.cy,I.outerRadius,W),S]}),P=c;return ke(c)&&ke(f)?P="value":ke(c)&&(P=f),E.createElement($e,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},s&&n.renderLabelLineItem(s,O,"line"),n.renderLabelItem(u,M,ln(I,P)))});return E.createElement($e,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,u=i.activeShape,s=i.blendStroke,c=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=c&&a.hasActiveIndex()?c:null,y=d?u:v,B=rn(rn({},f),{},{stroke:s?f.fill:f.stroke,tabIndex:-1});return E.createElement($e,ii({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ra(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),E.createElement(yl,ii({option:y,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,u=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return E.createElement(Qt,{begin:s,duration:c,isActive:u,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,b=[],W=i&&i[0],S=W.startAngle;return i.forEach(function(M,O){var P=v&&v[O],A=O>0?Ot(M,"paddingAngle",0):0;if(P){var N=hn(P.endAngle-P.startAngle,M.endAngle-M.startAngle),w=rn(rn({},M),{},{startAngle:S+A,endAngle:S+N(I)+A});b.push(w),S=w.endAngle}else{var H=M.endAngle,k=M.startAngle,D=hn(0,H-k),R=D(I),F=rn(rn({},M),{},{startAngle:S+A,endAngle:S+R+A});b.push(F),S=F.endAngle}}),E.createElement($e,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var u=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[u].focus(),a.setState({sectorToFocus:u});break}case"ArrowRight":{var s=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,u=this.state.prevSectors;return i&&a&&a.length&&(!u||!ka(u,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,u=a.sectors,s=a.className,c=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,B=this.state.isAnimationFinished;if(i||!u||!u.length||!ce(f)||!ce(m)||!ce(d)||!ce(v))return null;var I=De("recharts-pie",s);return E.createElement($e,{tabIndex:this.props.rootTabIndex,className:I,ref:function(W){r.pieRef=W}},this.renderSectors(),c&&this.renderLabels(u),zn.renderCallByParent(this.props,null,!1),(!y||B)&&lr.renderCallByParent(this.props,u,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);if(Re(r))return r(a);var u=De("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return E.createElement(Ca,ii({},a,{key:i,type:"linear",className:u}))}},{key:"renderLabelItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);var u=i;if(Re(r)&&(u=r(a),E.isValidElement(u)))return u;var s=De("recharts-pie-label-text",typeof r!="boolean"&&!Re(r)?r.className:"");return E.createElement(go,ii({},a,{alignmentBaseline:"middle",className:s}),u)}}])})(U.PureComponent);_0=ea;zt(ea,"displayName","Pie");zt(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});zt(ea,"parseDeltaAngle",function(e,n){var t=ot(n-e),r=Math.min(Math.abs(n-e),360);return t*r});zt(ea,"getRealPieData",function(e){var n=e.data,t=e.children,r=Oe(e,!1),a=ut(t,Xu);return n&&n.length?n.map(function(i,u){return rn(rn(rn({payload:i},r),i),a&&a[u]&&a[u].props)}):a&&a.length?a.map(function(i){return rn(rn({},r),i.props)}):[]});zt(ea,"parseCoordinateOfPie",function(e,n){var t=n.top,r=n.left,a=n.width,i=n.height,u=$M(a,i),s=r+it(e.cx,a,a/2),c=t+it(e.cy,i,i/2),f=it(e.innerRadius,u,0),m=it(e.outerRadius,u,u*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:s,cy:c,innerRadius:f,outerRadius:m,maxRadius:d}});zt(ea,"getComposedData",function(e){var n=e.item,t=e.offset,r=n.type.defaultProps!==void 0?rn(rn({},n.type.defaultProps),n.props):n.props,a=_0.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,u=r.startAngle,s=r.endAngle,c=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),B=_0.parseCoordinateOfPie(r,t),I=_0.parseDeltaAngle(u,s),b=Math.abs(I),W=f;ke(f)&&ke(d)?(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W="value"):ke(f)&&(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W=d);var S=a.filter(function(w){return ln(w,W,0)!==0}).length,M=(b>=360?S:S-1)*c,O=b-S*y-M,P=a.reduce(function(w,H){var k=ln(H,W,0);return w+(ce(k)?k:0)},0),A;if(P>0){var N;A=a.map(function(w,H){var k=ln(w,W,0),D=ln(w,m,H),R=(ce(k)?k:0)/P,F;H?F=N.endAngle+ot(I)*c*(k!==0?1:0):F=u;var V=F+ot(I)*((k!==0?y:0)+R*O),G=(F+V)/2,Y=(B.innerRadius+B.outerRadius)/2,Q=[{name:D,value:k,payload:w,dataKey:W,type:v}],$=on(B.cx,B.cy,Y,G);return N=rn(rn(rn({percent:R,cornerRadius:i,name:D,tooltipPayload:Q,midAngle:G,middleRadius:Y,tooltipPosition:$},w),B),{},{value:ln(w,W),startAngle:F,endAngle:V,payload:w,paddingAngle:ot(I)*c}),N})}return rn(rn({},B),{},{sectors:A,data:a})});var a6,_5;function pV(){if(_5)return a6;_5=1;var e=Math.ceil,n=Math.max;function t(r,a,i,u){for(var s=-1,c=n(e((a-r)/(i||1)),0),f=Array(c);c--;)f[u?c:++s]=r,r+=i;return f}return a6=t,a6}var o6,O5;function aA(){if(O5)return o6;O5=1;var e=AS(),n=1/0,t=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===n||a===-n){var i=a<0?-1:1;return i*t}return a===a?a:0}return o6=r,o6}var i6,H5;function uV(){if(H5)return i6;H5=1;var e=pV(),n=Jl(),t=aA();function r(a){return function(i,u,s){return s&&typeof s!="number"&&n(i,u,s)&&(u=s=void 0),i=t(i),u===void 0?(u=i,i=0):u=t(u),s=s===void 0?i<u?1:-1:t(s),e(i,u,s,a)}}return i6=r,i6}var p6,C5;function sV(){if(C5)return p6;C5=1;var e=uV(),n=e();return p6=n,p6}var lV=sV();const Il=Xe(lV);function Fu(e){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fu(e)}function N5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function R5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?N5(Object(t),!0).forEach(function(r){oA(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function oA(e,n,t){return n=cV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function cV(e){var n=fV(e,"string");return Fu(n)=="symbol"?n:n+""}function fV(e,n){if(Fu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var dV=["Webkit","Moz","O","ms"],mV=function(n,t){var r=n.replace(/(\w)/,function(i){return i.toUpperCase()}),a=dV.reduce(function(i,u){return R5(R5({},i),{},oA({},u+r,t))},{});return a[n]=t,a};function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ai(e)}function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bl.apply(this,arguments)}function k5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function u6(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k5(Object(t),!0).forEach(function(r){Wt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function hV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function E5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pA(r.key),r)}}function vV(e,n,t){return n&&E5(e.prototype,n),t&&E5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gV(e,n,t){return n=xl(n),yV(e,iA()?Reflect.construct(n,t||[],xl(e).constructor):n.apply(e,t))}function yV(e,n){if(n&&(Ai(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bV(e)}function bV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iA=function(){return!!e})()}function xl(e){return xl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xl(e)}function IV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Dv(e,n)}function Dv(e,n){return Dv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dv(e,n)}function Wt(e,n,t){return n=pA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function pA(e){var n=BV(e,"string");return Ai(n)=="symbol"?n:n+""}function BV(e,n){if(Ai(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var xV=function(n){var t=n.data,r=n.startIndex,a=n.endIndex,i=n.x,u=n.width,s=n.travellerWidth;if(!t||!t.length)return{};var c=t.length,f=au().domain(Il(0,c)).range([i,i+u-s]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},T5=function(n){return n.changedTouches&&!!n.changedTouches.length},_i=(function(e){function n(t){var r;return hV(this,n),r=gV(this,n,[t]),Wt(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Wt(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Wt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,u=a.onDragEnd,s=a.startIndex;u==null||u({endIndex:i,startIndex:s})}),r.detachDragEndListener()}),Wt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Wt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Wt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Wt(r,"handleSlideDragStart",function(a){var i=T5(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return IV(n,e),vV(n,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,u=this.state.scaleValues,s=this.props,c=s.gap,f=s.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=n.getIndexInRange(u,d),B=n.getIndexInRange(u,v);return{startIndex:y-y%c,endIndex:B===m?m:B-B%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,u=a.tickFormatter,s=a.dataKey,c=ln(i[r],s,r);return Re(u)?u(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,u=a.startX,s=a.endX,c=this.props,f=c.x,m=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,B=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-s,f+m-d-u):I<0&&(I=Math.max(I,f-u,f-s));var b=this.getIndex({startX:u+I,endX:s+I});(b.startIndex!==v||b.endIndex!==y)&&B&&B(b),this.setState({startX:u+I,endX:s+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=T5(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,u=a.movingTravellerId,s=a.endX,c=a.startX,f=this.state[u],m=this.props,d=m.x,v=m.width,y=m.travellerWidth,B=m.onChange,I=m.gap,b=m.data,W={startX:this.state.startX,endX:this.state.endX},S=r.pageX-i;S>0?S=Math.min(S,d+v-y-f):S<0&&(S=Math.max(S,d-f)),W[u]=f+S;var M=this.getIndex(W),O=M.startIndex,P=M.endIndex,A=function(){var w=b.length-1;return u==="startX"&&(s>c?O%I===0:P%I===0)||s<c&&P===w||u==="endX"&&(s>c?P%I===0:O%I===0)||s>c&&P===w};this.setState(Wt(Wt({},u,f+S),"brushMoveStartX",r.pageX),function(){B&&A()&&B(M)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,u=this.state,s=u.scaleValues,c=u.startX,f=u.endX,m=this.state[a],d=s.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=s.length)){var y=s[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Wt({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,u=r.width,s=r.height,c=r.fill,f=r.stroke;return E.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:u,height:s})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,u=r.width,s=r.height,c=r.data,f=r.children,m=r.padding,d=U.Children.only(f);return d?E.cloneElement(d,{x:a,y:i,width:u,height:s,margin:m,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,u,s=this,c=this.props,f=c.y,m=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,B=c.data,I=c.startIndex,b=c.endIndex,W=Math.max(r,this.props.x),S=u6(u6({},Oe(this.props,!1)),{},{x:W,y:f,width:m,height:d}),M=y||"Min value: ".concat((i=B[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((u=B[b])===null||u===void 0?void 0:u.name);return E.createElement($e,{tabIndex:0,role:"slider","aria-label":M,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(P){["ArrowLeft","ArrowRight"].includes(P.key)&&(P.preventDefault(),P.stopPropagation(),s.handleTravellerMoveKeyboard(P.key==="ArrowRight"?1:-1,a))},onFocus:function(){s.setState({isTravellerFocused:!0})},onBlur:function(){s.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},n.renderTraveller(v,S))}},{key:"renderSlide",value:function(r,a){var i=this.props,u=i.y,s=i.height,c=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return E.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:m,y:u,width:d,height:s})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,u=r.y,s=r.height,c=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,y=5,B={pointerEvents:"none",fill:f};return E.createElement($e,{className:"recharts-brush-texts"},E.createElement(go,Bl({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:u+s/2},B),this.getTextOfTick(a)),E.createElement(go,Bl({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:u+s/2},B),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,u=r.children,s=r.x,c=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,B=v.endX,I=v.isTextActive,b=v.isSlideMoving,W=v.isTravellerMoving,S=v.isTravellerFocused;if(!a||!a.length||!ce(s)||!ce(c)||!ce(f)||!ce(m)||f<=0||m<=0)return null;var M=De("recharts-brush",i),O=E.Children.count(u)===1,P=mV("userSelect","none");return E.createElement($e,{className:M,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:P},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,B),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(B,"endX"),(I||b||W||S||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,u=r.width,s=r.height,c=r.stroke,f=Math.floor(i+s/2)-1;return E.createElement(E.Fragment,null,E.createElement("rect",{x:a,y:i,width:u,height:s,fill:c,stroke:"none"}),E.createElement("line",{x1:a+1,y1:f,x2:a+u-1,y2:f,fill:"none",stroke:"#fff"}),E.createElement("line",{x1:a+1,y1:f+2,x2:a+u-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return E.isValidElement(r)?i=E.cloneElement(r,a):Re(r)?i=r(a):i=n.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,u=r.width,s=r.x,c=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return u6({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:u},i&&i.length?xV({data:i,width:u,x:s,travellerWidth:c,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(u!==a.prevWidth||s!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([s,s+u-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:u,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,u=0,s=i-1;s-u>1;){var c=Math.floor((u+s)/2);r[c]>a?s=c:u=c}return a>=r[s]?s:u}}])})(U.PureComponent);Wt(_i,"displayName","Brush");Wt(_i,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var s6,D5;function PV(){if(D5)return s6;D5=1;var e=kg();function n(t,r){var a;return e(t,function(i,u,s){return a=r(i,u,s),!a}),!!a}return s6=n,s6}var l6,j5;function wV(){if(j5)return l6;j5=1;var e=oS(),n=Mr(),t=PV(),r=bt(),a=Jl();function i(u,s,c){var f=r(u)?e:t;return c&&a(u,s,c)&&(s=void 0),f(u,n(s,3))}return l6=i,l6}var WV=wV();const SV=Xe(WV);var Pr=function(n,t){var r=n.alwaysShow,a=n.ifOverflow;return r&&(a="extendDomain"),a===t},c6,$5;function MV(){if($5)return c6;$5=1;var e=PS();function n(t,r,a){r=="__proto__"&&e?e(t,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[r]=a}return c6=n,c6}var f6,L5;function AV(){if(L5)return f6;L5=1;var e=MV(),n=BS(),t=Mr();function r(a,i){var u={};return i=t(i,3),n(a,function(s,c,f){e(u,c,i(s,c,f))}),u}return f6=r,f6}var _V=AV();const OV=Xe(_V);var d6,F5;function HV(){if(F5)return d6;F5=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(!t(n[r],r,n))return!1;return!0}return d6=e,d6}var m6,q5;function CV(){if(q5)return m6;q5=1;var e=kg();function n(t,r){var a=!0;return e(t,function(i,u,s){return a=!!r(i,u,s),a}),a}return m6=n,m6}var h6,z5;function NV(){if(z5)return h6;z5=1;var e=HV(),n=CV(),t=Mr(),r=bt(),a=Jl();function i(u,s,c){var f=r(u)?e:n;return c&&a(u,s,c)&&(s=void 0),f(u,t(s,3))}return h6=i,h6}var RV=NV();const uA=Xe(RV);var kV=["x","y"];function qu(e){"@babel/helpers - typeof";return qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qu(e)}function jv(){return jv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jv.apply(this,arguments)}function U5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Zp(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?U5(Object(t),!0).forEach(function(r){EV(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function EV(e,n,t){return n=TV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function TV(e){var n=DV(e,"string");return qu(n)=="symbol"?n:n+""}function DV(e,n){if(qu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(qu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function jV(e,n){if(e==null)return{};var t=$V(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function $V(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function LV(e,n){var t=e.x,r=e.y,a=jV(e,kV),i="".concat(t),u=parseInt(i,10),s="".concat(r),c=parseInt(s,10),f="".concat(n.height||a.height),m=parseInt(f,10),d="".concat(n.width||a.width),v=parseInt(d,10);return Zp(Zp(Zp(Zp(Zp({},n),a),u?{x:u}:{}),c?{y:c}:{}),{},{height:m,width:v,name:n.name,radius:n.radius})}function V5(e){return E.createElement(yl,jv({shapeType:"rectangle",propTransformer:LV,activeClassName:"recharts-active-bar"},e))}var FV=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof n=="number")return n;var i=typeof r=="number";return i?n(r,a):(i||bo(),t)}},qV=["value","background"],sA;function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oi(e)}function zV(e,n){if(e==null)return{};var t=UV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function UV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pl.apply(this,arguments)}function G5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function On(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?G5(Object(t),!0).forEach(function(r){Aa(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function VV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function K5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,cA(r.key),r)}}function GV(e,n,t){return n&&K5(e.prototype,n),t&&K5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function KV(e,n,t){return n=wl(n),QV(e,lA()?Reflect.construct(n,t||[],wl(e).constructor):n.apply(e,t))}function QV(e,n){if(n&&(Oi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return YV(e)}function YV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lA=function(){return!!e})()}function wl(e){return wl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wl(e)}function XV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&$v(e,n)}function $v(e,n){return $v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},$v(e,n)}function Aa(e,n,t){return n=cA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function cA(e){var n=ZV(e,"string");return Oi(n)=="symbol"?n:n+""}function ZV(e,n){if(Oi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Wr=(function(e){function n(){var t;VV(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=KV(this,n,[].concat(a)),Aa(t,"state",{isAnimationFinished:!1}),Aa(t,"id",Da("recharts-bar-")),Aa(t,"handleAnimationEnd",function(){var u=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),u&&u()}),Aa(t,"handleAnimationStart",function(){var u=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),u&&u()}),t}return XV(n,e),GV(n,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,u=i.shape,s=i.dataKey,c=i.activeIndex,f=i.activeBar,m=Oe(this.props,!1);return r&&r.map(function(d,v){var y=v===c,B=y?f:u,I=On(On(On({},m),d),{},{isActive:y,option:B,index:v,dataKey:s,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return E.createElement($e,Pl({className:"recharts-bar-rectangle"},Ra(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),E.createElement(V5,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,u=a.layout,s=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return E.createElement(Qt,{begin:c,duration:f,isActive:s,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var B=y.t,I=i.map(function(b,W){var S=v&&v[W];if(S){var M=hn(S.x,b.x),O=hn(S.y,b.y),P=hn(S.width,b.width),A=hn(S.height,b.height);return On(On({},b),{},{x:M(B),y:O(B),width:P(B),height:A(B)})}if(u==="horizontal"){var N=hn(0,b.height),w=N(B);return On(On({},b),{},{y:b.y+b.height-w,height:w})}var H=hn(0,b.width),k=H(B);return On(On({},b),{},{width:k})});return E.createElement($e,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,u=this.state.prevData;return i&&a&&a.length&&(!u||!ka(u,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,u=a.dataKey,s=a.activeIndex,c=Oe(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=zV(f,qV);if(!d)return null;var y=On(On(On(On(On({},v),{},{fill:"#eee"},d),c),Ra(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:u,index:m,className:"recharts-bar-background-rectangle"});return E.createElement(V5,Pl({key:"background-bar-".concat(m),option:r.props.background,isActive:m===s},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,u=i.data,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=ut(m,ep);if(!d)return null;var v=f==="vertical"?u[0].height/2:u[0].width/2,y=function(b,W){var S=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:S,errorVal:ln(b,W)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement($e,B,d.map(function(I){return E.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:u,xAxis:s,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,u=r.className,s=r.xAxis,c=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,y=r.isAnimationActive,B=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,W=De("recharts-bar",u),S=s&&s.allowDataOverflow,M=c&&c.allowDataOverflow,O=S||M,P=ke(I)?this.id:I;return E.createElement($e,{className:W},S||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(P)},E.createElement("rect",{x:S?f:f-d/2,y:M?m:m-v/2,width:S?d:d*2,height:M?v:v*2}))):null,E.createElement($e,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(P,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,P),(!y||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(U.PureComponent);sA=Wr;Aa(Wr,"displayName","Bar");Aa(Wr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Aa(Wr,"getComposedData",function(e){var n=e.props,t=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,u=e.yAxis,s=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=P9(r,t);if(!y)return null;var B=n.layout,I=t.type.defaultProps,b=I!==void 0?On(On({},I),t.props):t.props,W=b.dataKey,S=b.children,M=b.minPointSize,O=B==="horizontal"?u:i,P=f?O.scale.domain():null,A=O9({numericAxis:O}),N=ut(S,Xu),w=d.map(function(H,k){var D,R,F,V,G,Y;f?D=w9(f[m+k],P):(D=ln(H,W),Array.isArray(D)||(D=[A,D]));var Q=FV(M,sA.defaultProps.minPointSize)(D[1],k);if(B==="horizontal"){var $,K=[u.scale(D[0]),u.scale(D[1])],ne=K[0],T=K[1];R=x4({axis:i,ticks:s,bandSize:a,offset:y.offset,entry:H,index:k}),F=($=T??ne)!==null&&$!==void 0?$:void 0,V=y.size;var L=ne-T;if(G=Number.isNaN(L)?0:L,Y={x:R,y:u.y,width:V,height:u.height},Math.abs(Q)>0&&Math.abs(G)<Math.abs(Q)){var Z=ot(G||Q)*(Math.abs(Q)-Math.abs(G));F-=Z,G+=Z}}else{var se=[i.scale(D[0]),i.scale(D[1])],he=se[0],Ie=se[1];if(R=he,F=x4({axis:u,ticks:c,bandSize:a,offset:y.offset,entry:H,index:k}),V=Ie-he,G=y.size,Y={x:i.x,y:F,width:i.width,height:G},Math.abs(Q)>0&&Math.abs(V)<Math.abs(Q)){var Be=ot(V||Q)*(Math.abs(Q)-Math.abs(V));V+=Be}}return On(On(On({},H),{},{x:R,y:F,width:V,height:G,value:f?D:D[1],payload:H,background:Y},N&&N[k]&&N[k].props),{},{tooltipPayload:[DM(t,H)],tooltipPosition:{x:R+V/2,y:F+G/2}})});return On({data:w,layout:B},v)});function zu(e){"@babel/helpers - typeof";return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zu(e)}function JV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Q5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,fA(r.key),r)}}function eG(e,n,t){return n&&Q5(e.prototype,n),t&&Q5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function or(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Y5(Object(t),!0).forEach(function(r){vc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function vc(e,n,t){return n=fA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fA(e){var n=nG(e,"string");return zu(n)=="symbol"?n:n+""}function nG(e,n){if(zu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(zu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var cy=function(n,t,r,a,i){var u=n.width,s=n.height,c=n.layout,f=n.children,m=Object.keys(t),d={left:r.left,leftMirror:r.left,right:u-r.right,rightMirror:u-r.right,top:r.top,topMirror:r.top,bottom:s-r.bottom,bottomMirror:s-r.bottom},v=!!St(f,Wr);return m.reduce(function(y,B){var I=t[B],b=I.orientation,W=I.domain,S=I.padding,M=S===void 0?{}:S,O=I.mirror,P=I.reversed,A="".concat(b).concat(O?"Mirror":""),N,w,H,k,D;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var R=W[1]-W[0],F=1/0,V=I.categoricalDomain.sort();if(V.forEach(function(se,he){he>0&&(F=Math.min((se||0)-(V[he-1]||0),F))}),Number.isFinite(F)){var G=F/R,Y=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=G*Y/2),I.padding==="no-gap"){var Q=it(n.barCategoryGap,G*Y),$=G*Y/2;N=$-Q-($-Q)/Y*Q}}}a==="xAxis"?w=[r.left+(M.left||0)+(N||0),r.left+r.width-(M.right||0)-(N||0)]:a==="yAxis"?w=c==="horizontal"?[r.top+r.height-(M.bottom||0),r.top+(M.top||0)]:[r.top+(M.top||0)+(N||0),r.top+r.height-(M.bottom||0)-(N||0)]:w=I.range,P&&(w=[w[1],w[0]]);var K=RM(I,i,v),ne=K.scale,T=K.realScaleType;ne.domain(W).range(w),kM(ne);var L=EM(ne,or(or({},I),{},{realScaleType:T}));a==="xAxis"?(D=b==="top"&&!O||b==="bottom"&&O,H=r.left,k=d[A]-D*I.height):a==="yAxis"&&(D=b==="left"&&!O||b==="right"&&O,H=d[A]-D*I.width,k=r.top);var Z=or(or(or({},I),L),{},{realScaleType:T,x:H,y:k,scale:ne,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return Z.bandSize=il(Z,L),!I.hide&&a==="xAxis"?d[A]+=(D?-1:1)*Z.height:I.hide||(d[A]+=(D?-1:1)*Z.width),or(or({},y),{},vc({},B,Z))},{})},dA=function(n,t){var r=n.x,a=n.y,i=t.x,u=t.y;return{x:Math.min(r,i),y:Math.min(a,u),width:Math.abs(i-r),height:Math.abs(u-a)}},tG=function(n){var t=n.x1,r=n.y1,a=n.x2,i=n.y2;return dA({x:t,y:r},{x:a,y:i})},mA=(function(){function e(n){JV(this,e),this.scale=n}return eG(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(t!==void 0){if(i)switch(i){case"start":return this.scale(t);case"middle":{var u=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+u}case"end":{var s=this.bandwidth?this.bandwidth():0;return this.scale(t)+s}default:return this.scale(t)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+c}return this.scale(t)}}},{key:"isInRange",value:function(t){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?t>=a&&t<=i:t>=i&&t<=a}}],[{key:"create",value:function(t){return new e(t)}}])})();vc(mA,"EPS",1e-4);var fy=function(n){var t=Object.keys(n).reduce(function(r,a){return or(or({},r),{},vc({},a,mA.create(n[a])))},{});return or(or({},t),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=i.bandAware,s=i.position;return OV(a,function(c,f){return t[f].apply(c,{bandAware:u,position:s})})},isInRange:function(a){return uA(a,function(i,u){return t[u].isInRange(i)})}})};function rG(e){return(e%180+180)%180}var aG=function(n){var t=n.width,r=n.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=rG(a),u=i*Math.PI/180,s=Math.atan(r/t),c=u>s&&u<Math.PI-s?r/Math.sin(u):t/Math.cos(u);return Math.abs(c)},v6,X5;function oG(){if(X5)return v6;X5=1;var e=Mr(),n=Yu(),t=Xl();function r(a){return function(i,u,s){var c=Object(i);if(!n(i)){var f=e(u,3);i=t(i),u=function(d){return f(c[d],d,c)}}var m=a(i,u,s);return m>-1?c[f?i[m]:m]:void 0}}return v6=r,v6}var g6,Z5;function iG(){if(Z5)return g6;Z5=1;var e=aA();function n(t){var r=e(t),a=r%1;return r===r?a?r-a:r:0}return g6=n,g6}var y6,J5;function pG(){if(J5)return y6;J5=1;var e=vS(),n=Mr(),t=iG(),r=Math.max;function a(i,u,s){var c=i==null?0:i.length;if(!c)return-1;var f=s==null?0:t(s);return f<0&&(f=r(c+f,0)),e(i,n(u,3),f)}return y6=a,y6}var b6,eW;function uG(){if(eW)return b6;eW=1;var e=oG(),n=pG(),t=e(n);return b6=t,b6}var sG=uG();const lG=Xe(sG);var cG=H3();const fG=Xe(cG);var dG=fG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),dy=U.createContext(void 0),my=U.createContext(void 0),hA=U.createContext(void 0),vA=U.createContext({}),gA=U.createContext(void 0),yA=U.createContext(0),bA=U.createContext(0),nW=function(n){var t=n.state,r=t.xAxisMap,a=t.yAxisMap,i=t.offset,u=n.clipPathId,s=n.children,c=n.width,f=n.height,m=dG(i);return E.createElement(dy.Provider,{value:r},E.createElement(my.Provider,{value:a},E.createElement(vA.Provider,{value:i},E.createElement(hA.Provider,{value:m},E.createElement(gA.Provider,{value:u},E.createElement(yA.Provider,{value:f},E.createElement(bA.Provider,{value:c},s)))))))},mG=function(){return U.useContext(gA)},IA=function(n){var t=U.useContext(dy);t==null&&bo();var r=t[n];return r==null&&bo(),r},hG=function(){var n=U.useContext(dy);return Sa(n)},vG=function(){var n=U.useContext(my),t=lG(n,function(r){return uA(r.domain,Number.isFinite)});return t||Sa(n)},BA=function(n){var t=U.useContext(my);t==null&&bo();var r=t[n];return r==null&&bo(),r},gG=function(){var n=U.useContext(hA);return n},yG=function(){return U.useContext(vA)},hy=function(){return U.useContext(bA)},vy=function(){return U.useContext(yA)};function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hi(e)}function bG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function IG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,PA(r.key),r)}}function BG(e,n,t){return n&&IG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xG(e,n,t){return n=Wl(n),PG(e,xA()?Reflect.construct(n,t||[],Wl(e).constructor):n.apply(e,t))}function PG(e,n){if(n&&(Hi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wG(e)}function wG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xA=function(){return!!e})()}function Wl(e){return Wl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wl(e)}function WG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Lv(e,n)}function Lv(e,n){return Lv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lv(e,n)}function tW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tW(Object(t),!0).forEach(function(r){gy(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gy(e,n,t){return n=PA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function PA(e){var n=SG(e,"string");return Hi(n)=="symbol"?n:n+""}function SG(e,n){if(Hi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function MG(e,n){return HG(e)||OG(e,n)||_G(e,n)||AG()}function AG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _G(e,n){if(e){if(typeof e=="string")return aW(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return aW(e,n)}}function aW(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function OG(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function HG(e){if(Array.isArray(e))return e}function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fv.apply(this,arguments)}var CG=function(n,t){var r;return E.isValidElement(n)?r=E.cloneElement(n,t):Re(n)?r=n(t):r=E.createElement("line",Fv({},t,{className:"recharts-reference-line-line"})),r},NG=function(n,t,r,a,i,u,s,c,f){var m=i.x,d=i.y,v=i.width,y=i.height;if(r){var B=f.y,I=n.y.apply(B,{position:u});if(Pr(f,"discard")&&!n.y.isInRange(I))return null;var b=[{x:m+v,y:I},{x:m,y:I}];return c==="left"?b.reverse():b}if(t){var W=f.x,S=n.x.apply(W,{position:u});if(Pr(f,"discard")&&!n.x.isInRange(S))return null;var M=[{x:S,y:d+y},{x:S,y:d}];return s==="top"?M.reverse():M}if(a){var O=f.segment,P=O.map(function(A){return n.apply(A,{position:u})});return Pr(f,"discard")&&SV(P,function(A){return!n.isInRange(A)})?null:P}return null};function RG(e){var n=e.x,t=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,u=e.shape,s=e.className,c=e.alwaysShow,f=mG(),m=IA(a),d=BA(i),v=gG();if(!f||!v)return null;sr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=fy({x:m.scale,y:d.scale}),B=Tn(n),I=Tn(t),b=r&&r.length===2,W=NG(y,B,I,b,v,e.position,m.orientation,d.orientation,e);if(!W)return null;var S=MG(W,2),M=S[0],O=M.x,P=M.y,A=S[1],N=A.x,w=A.y,H=Pr(e,"hidden")?"url(#".concat(f,")"):void 0,k=rW(rW({clipPath:H},Oe(e,!0)),{},{x1:O,y1:P,x2:N,y2:w});return E.createElement($e,{className:De("recharts-reference-line",s)},CG(u,k),zn.renderCallByParent(e,tG({x1:O,y1:P,x2:N,y2:w})))}var yy=(function(e){function n(){return bG(this,n),xG(this,n,arguments)}return WG(n,e),BG(n,[{key:"render",value:function(){return E.createElement(RG,this.props)}}])})(E.Component);gy(yy,"displayName","ReferenceLine");gy(yy,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function qv(){return qv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qv.apply(this,arguments)}function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ci(e)}function oW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function iW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?oW(Object(t),!0).forEach(function(r){gc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function kG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function EG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,WA(r.key),r)}}function TG(e,n,t){return n&&EG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function DG(e,n,t){return n=Sl(n),jG(e,wA()?Reflect.construct(n,t||[],Sl(e).constructor):n.apply(e,t))}function jG(e,n){if(n&&(Ci(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $G(e)}function $G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wA=function(){return!!e})()}function Sl(e){return Sl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Sl(e)}function LG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&zv(e,n)}function zv(e,n){return zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},zv(e,n)}function gc(e,n,t){return n=WA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function WA(e){var n=FG(e,"string");return Ci(n)=="symbol"?n:n+""}function FG(e,n){if(Ci(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qG=function(n){var t=n.x,r=n.y,a=n.xAxis,i=n.yAxis,u=fy({x:a.scale,y:i.scale}),s=u.apply({x:t,y:r},{bandAware:!0});return Pr(n,"discard")&&!u.isInRange(s)?null:s},yc=(function(e){function n(){return kG(this,n),DG(this,n,arguments)}return LG(n,e),TG(n,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,u=r.r,s=r.alwaysShow,c=r.clipPathId,f=Tn(a),m=Tn(i);if(sr(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=qG(this.props);if(!d)return null;var v=d.x,y=d.y,B=this.props,I=B.shape,b=B.className,W=Pr(this.props,"hidden")?"url(#".concat(c,")"):void 0,S=iW(iW({clipPath:W},Oe(this.props,!0)),{},{cx:v,cy:y});return E.createElement($e,{className:De("recharts-reference-dot",b)},n.renderDot(I,S),zn.renderCallByParent(this.props,{x:v-u,y:y-u,width:2*u,height:2*u}))}}])})(E.Component);gc(yc,"displayName","ReferenceDot");gc(yc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});gc(yc,"renderDot",function(e,n){var t;return E.isValidElement(e)?t=E.cloneElement(e,n):Re(e)?t=e(n):t=E.createElement(ts,qv({},n,{cx:n.cx,cy:n.cy,className:"recharts-reference-dot-dot"})),t});function Uv(){return Uv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Uv.apply(this,arguments)}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ni(e)}function pW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function uW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?pW(Object(t),!0).forEach(function(r){bc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function UG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MA(r.key),r)}}function VG(e,n,t){return n&&UG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function GG(e,n,t){return n=Ml(n),KG(e,SA()?Reflect.construct(n,t||[],Ml(e).constructor):n.apply(e,t))}function KG(e,n){if(n&&(Ni(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QG(e)}function QG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SA=function(){return!!e})()}function Ml(e){return Ml=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ml(e)}function YG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Vv(e,n)}function Vv(e,n){return Vv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vv(e,n)}function bc(e,n,t){return n=MA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MA(e){var n=XG(e,"string");return Ni(n)=="symbol"?n:n+""}function XG(e,n){if(Ni(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ZG=function(n,t,r,a,i){var u=i.x1,s=i.x2,c=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=fy({x:m.scale,y:d.scale}),y={x:n?v.x.apply(u,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},B={x:t?v.x.apply(s,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return Pr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(B))?null:dA(y,B)},Ic=(function(e){function n(){return zG(this,n),GG(this,n,arguments)}return YG(n,e),VG(n,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,u=r.y1,s=r.y2,c=r.className,f=r.alwaysShow,m=r.clipPathId;sr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Tn(a),v=Tn(i),y=Tn(u),B=Tn(s),I=this.props.shape;if(!d&&!v&&!y&&!B&&!I)return null;var b=ZG(d,v,y,B,this.props);if(!b&&!I)return null;var W=Pr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return E.createElement($e,{className:De("recharts-reference-area",c)},n.renderRect(I,uW(uW({clipPath:W},Oe(this.props,!0)),b)),zn.renderCallByParent(this.props,b))}}])})(E.Component);bc(Ic,"displayName","ReferenceArea");bc(Ic,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});bc(Ic,"renderRect",function(e,n){var t;return E.isValidElement(e)?t=E.cloneElement(e,n):Re(e)?t=e(n):t=E.createElement(ly,Uv({},n,{className:"recharts-reference-area-rect"})),t});function AA(e,n,t){if(n<1)return[];if(n===1&&t===void 0)return e;for(var r=[],a=0;a<e.length;a+=n)r.push(e[a]);return r}function JG(e,n,t){var r={width:e.width+n.width,height:e.height+n.height};return aG(r,t)}function eK(e,n,t){var r=t==="width",a=e.x,i=e.y,u=e.width,s=e.height;return n===1?{start:r?a:i,end:r?a+u:i+s}:{start:r?a+u:i+s,end:r?a:i}}function Al(e,n,t,r,a){if(e*n<e*r||e*n>e*a)return!1;var i=t();return e*(n-e*i/2-r)>=0&&e*(n+e*i/2-a)<=0}function nK(e,n){return AA(e,n+1)}function tK(e,n,t,r,a){for(var i=(r||[]).slice(),u=n.start,s=n.end,c=0,f=1,m=u,d=function(){var B=r==null?void 0:r[c];if(B===void 0)return{v:AA(r,f)};var I=c,b,W=function(){return b===void 0&&(b=t(B,I)),b},S=B.coordinate,M=c===0||Al(e,S,W,m,s);M||(c=0,m=u,f+=1),M&&(m=S+e*(W()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Uu(e){"@babel/helpers - typeof";return Uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Uu(e)}function sW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function et(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sW(Object(t),!0).forEach(function(r){rK(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rK(e,n,t){return n=aK(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function aK(e){var n=oK(e,"string");return Uu(n)=="symbol"?n:n+""}function oK(e,n){if(Uu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Uu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function iK(e,n,t,r,a){for(var i=(r||[]).slice(),u=i.length,s=n.start,c=n.end,f=function(v){var y=i[v],B,I=function(){return B===void 0&&(B=t(y,v)),B};if(v===u-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=et(et({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=et(et({},y),{},{tickCoord:y.coordinate});var W=Al(e,y.tickCoord,I,s,c);W&&(c=y.tickCoord-e*(I()/2+a),i[v]=et(et({},y),{},{isShow:!0}))},m=u-1;m>=0;m--)f(m);return i}function pK(e,n,t,r,a,i){var u=(r||[]).slice(),s=u.length,c=n.start,f=n.end;if(i){var m=r[s-1],d=t(m,s-1),v=e*(m.coordinate+e*d/2-f);u[s-1]=m=et(et({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var y=Al(e,m.tickCoord,function(){return d},c,f);y&&(f=m.tickCoord-e*(d/2+a),u[s-1]=et(et({},m),{},{isShow:!0}))}for(var B=i?s-1:s,I=function(S){var M=u[S],O,P=function(){return O===void 0&&(O=t(M,S)),O};if(S===0){var A=e*(M.coordinate-e*P()/2-c);u[S]=M=et(et({},M),{},{tickCoord:A<0?M.coordinate-A*e:M.coordinate})}else u[S]=M=et(et({},M),{},{tickCoord:M.coordinate});var N=Al(e,M.tickCoord,P,c,f);N&&(c=M.tickCoord+e*(P()/2+a),u[S]=et(et({},M),{},{isShow:!0}))},b=0;b<B;b++)I(b);return u}function by(e,n,t){var r=e.tick,a=e.ticks,i=e.viewBox,u=e.minTickGap,s=e.orientation,c=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(ce(c)||Zr.isSsr)return nK(a,typeof c=="number"&&ce(c)?c:0);var v=[],y=s==="top"||s==="bottom"?"width":"height",B=m&&y==="width"?ru(m,{fontSize:n,letterSpacing:t}):{width:0,height:0},I=function(M,O){var P=Re(f)?f(M.value,O):M.value;return y==="width"?JG(ru(P,{fontSize:n,letterSpacing:t}),B,d):ru(P,{fontSize:n,letterSpacing:t})[y]},b=a.length>=2?ot(a[1].coordinate-a[0].coordinate):1,W=eK(i,b,y);return c==="equidistantPreserveStart"?tK(b,W,I,a,u):(c==="preserveStart"||c==="preserveStartEnd"?v=pK(b,W,I,a,u,c==="preserveStartEnd"):v=iK(b,W,I,a,u),v.filter(function(S){return S.isShow}))}var uK=["viewBox"],sK=["viewBox"],lK=["ticks"];function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ri(e)}function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pi.apply(this,arguments)}function lW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function at(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lW(Object(t),!0).forEach(function(r){Iy(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function I6(e,n){if(e==null)return{};var t=cK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function cK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function fK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function cW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OA(r.key),r)}}function dK(e,n,t){return n&&cW(e.prototype,n),t&&cW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function mK(e,n,t){return n=_l(n),hK(e,_A()?Reflect.construct(n,t||[],_l(e).constructor):n.apply(e,t))}function hK(e,n){if(n&&(Ri(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vK(e)}function vK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_A=function(){return!!e})()}function _l(e){return _l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_l(e)}function gK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Gv(e,n)}function Gv(e,n){return Gv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gv(e,n)}function Iy(e,n,t){return n=OA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function OA(e){var n=yK(e,"string");return Ri(n)=="symbol"?n:n+""}function yK(e,n){if(Ri(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var np=(function(e){function n(t){var r;return fK(this,n),r=mK(this,n,[t]),r.state={fontSize:"",letterSpacing:""},r}return gK(n,e),dK(n,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,u=I6(r,uK),s=this.props,c=s.viewBox,f=I6(s,sK);return!si(i,c)||!si(u,f)||!si(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,u=a.y,s=a.width,c=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,y,B,I,b,W,S,M=d?-1:1,O=r.tickSize||m,P=ce(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=B=r.coordinate,b=u+ +!d*c,I=b-M*O,S=I-M*v,W=P;break;case"left":I=b=r.coordinate,B=i+ +!d*s,y=B-M*O,W=y-M*v,S=P;break;case"right":I=b=r.coordinate,B=i+ +d*s,y=B+M*O,W=y+M*v,S=P;break;default:y=B=r.coordinate,b=u+ +d*c,I=b+M*O,S=I+M*v,W=P;break}return{line:{x1:y,y1:I,x2:B,y2:b},tick:{x:W,y:S}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,u;switch(a){case"left":u=i?"start":"end";break;case"right":u=i?"end":"start";break;default:u="middle";break}return u}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,u="end";switch(a){case"left":case"right":u="middle";break;case"top":u=i?"start":"end";break;default:u=i?"end":"start";break}return u}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,u=r.width,s=r.height,c=r.orientation,f=r.mirror,m=r.axisLine,d=at(at(at({},Oe(this.props,!1)),Oe(m,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=at(at({},d),{},{x1:a,y1:i+v*s,x2:a+u,y2:i+v*s})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=at(at({},d),{},{x1:a+y*u,y1:i,x2:a+y*u,y2:i+s})}return E.createElement("line",pi({},d,{className:De("recharts-cartesian-axis-line",Ot(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var u=this,s=this.props,c=s.tickLine,f=s.stroke,m=s.tick,d=s.tickFormatter,v=s.unit,y=by(at(at({},this.props),{},{ticks:r}),a,i),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=Oe(this.props,!1),W=Oe(m,!1),S=at(at({},b),{},{fill:"none"},Oe(c,!1)),M=y.map(function(O,P){var A=u.getTickLineCoord(O),N=A.line,w=A.tick,H=at(at(at(at({textAnchor:B,verticalAnchor:I},b),{},{stroke:"none",fill:f},W),w),{},{index:P,payload:O,visibleTicksCount:y.length,tickFormatter:d});return E.createElement($e,pi({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ra(u.props,O,P)),c&&E.createElement("line",pi({},S,N,{className:De("recharts-cartesian-axis-tick-line",Ot(c,"className"))})),m&&n.renderTickItem(m,H,"".concat(Re(d)?d(O.value,P):O.value).concat(v||"")))});return E.createElement("g",{className:"recharts-cartesian-axis-ticks"},M)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,u=a.width,s=a.height,c=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,y=I6(d,lK),B=v;return Re(c)&&(B=v&&v.length>0?c(this.props):c(y)),u<=0||s<=0||!B||!B.length?null:E.createElement($e,{className:De("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),zn.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var u;return E.isValidElement(r)?u=E.cloneElement(r,a):Re(r)?u=r(a):u=E.createElement(go,pi({},a,{className:"recharts-cartesian-axis-tick-value"}),i),u}}])})(U.Component);Iy(np,"displayName","CartesianAxis");Iy(np,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var bK=["x1","y1","x2","y2","key"],IK=["offset"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Io(e)}function fW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function nt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?fW(Object(t),!0).forEach(function(r){BK(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function BK(e,n,t){return n=xK(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xK(e){var n=PK(e,"string");return Io(n)=="symbol"?n:n+""}function PK(e,n){if(Io(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fo.apply(this,arguments)}function dW(e,n){if(e==null)return{};var t=wK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function wK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var WK=function(n){var t=n.fill;if(!t||t==="none")return null;var r=n.fillOpacity,a=n.x,i=n.y,u=n.width,s=n.height,c=n.ry;return E.createElement("rect",{x:a,y:i,ry:c,width:u,height:s,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function HA(e,n){var t;if(E.isValidElement(e))t=E.cloneElement(e,n);else if(Re(e))t=e(n);else{var r=n.x1,a=n.y1,i=n.x2,u=n.y2,s=n.key,c=dW(n,bK),f=Oe(c,!1);f.offset;var m=dW(f,IK);t=E.createElement("line",fo({},m,{x1:r,y1:a,x2:i,y2:u,fill:"none",key:s}))}return t}function SK(e){var n=e.x,t=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var u=i.map(function(s,c){var f=nt(nt({},e),{},{x1:n,y1:s,x2:n+t,y2:s,key:"line-".concat(c),index:c});return HA(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-horizontal"},u)}function MK(e){var n=e.y,t=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var u=i.map(function(s,c){var f=nt(nt({},e),{},{x1:s,y1:n,x2:s,y2:n+t,key:"line-".concat(c),index:c});return HA(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-vertical"},u)}function AK(e){var n=e.horizontalFill,t=e.fillOpacity,r=e.x,a=e.y,i=e.width,u=e.height,s=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!n||!n.length)return null;var m=s.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?a+u-v:m[y+1]-v;if(I<=0)return null;var b=y%n.length;return E.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:n[b],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function _K(e){var n=e.vertical,t=n===void 0?!0:n,r=e.verticalFill,a=e.fillOpacity,i=e.x,u=e.y,s=e.width,c=e.height,f=e.verticalPoints;if(!t||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?i+s-v:m[y+1]-v;if(I<=0)return null;var b=y%r.length;return E.createElement("rect",{key:"react-".concat(y),x:v,y:u,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var OK=function(n,t){var r=n.xAxis,a=n.width,i=n.height,u=n.offset;return NM(by(nt(nt(nt({},np.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),u.left,u.left+u.width,t)},HK=function(n,t){var r=n.yAxis,a=n.width,i=n.height,u=n.offset;return NM(by(nt(nt(nt({},np.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),u.top,u.top+u.height,t)},ni={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Ol(e){var n,t,r,a,i,u,s=hy(),c=vy(),f=yG(),m=nt(nt({},e),{},{stroke:(n=e.stroke)!==null&&n!==void 0?n:ni.stroke,fill:(t=e.fill)!==null&&t!==void 0?t:ni.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ni.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ni.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ni.vertical,verticalFill:(u=e.verticalFill)!==null&&u!==void 0?u:ni.verticalFill,x:ce(e.x)?e.x:f.left,y:ce(e.y)?e.y:f.top,width:ce(e.width)?e.width:f.width,height:ce(e.height)?e.height:f.height}),d=m.x,v=m.y,y=m.width,B=m.height,I=m.syncWithTicks,b=m.horizontalValues,W=m.verticalValues,S=hG(),M=vG();if(!ce(y)||y<=0||!ce(B)||B<=0||!ce(d)||d!==+d||!ce(v)||v!==+v)return null;var O=m.verticalCoordinatesGenerator||OK,P=m.horizontalCoordinatesGenerator||HK,A=m.horizontalPoints,N=m.verticalPoints;if((!A||!A.length)&&Re(P)){var w=b&&b.length,H=P({yAxis:M?nt(nt({},M),{},{ticks:w?b:M.ticks}):void 0,width:s,height:c,offset:f},w?!0:I);sr(Array.isArray(H),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(H),"]")),Array.isArray(H)&&(A=H)}if((!N||!N.length)&&Re(O)){var k=W&&W.length,D=O({xAxis:S?nt(nt({},S),{},{ticks:k?W:S.ticks}):void 0,width:s,height:c,offset:f},k?!0:I);sr(Array.isArray(D),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(D),"]")),Array.isArray(D)&&(N=D)}return E.createElement("g",{className:"recharts-cartesian-grid"},E.createElement(WK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),E.createElement(SK,fo({},m,{offset:f,horizontalPoints:A,xAxis:S,yAxis:M})),E.createElement(MK,fo({},m,{offset:f,verticalPoints:N,xAxis:S,yAxis:M})),E.createElement(AK,fo({},m,{horizontalPoints:A})),E.createElement(_K,fo({},m,{verticalPoints:N})))}Ol.displayName="CartesianGrid";var CK=["type","layout","connectNulls","ref"],NK=["key"];function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ki(e)}function mW(e,n){if(e==null)return{};var t=RK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function RK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function su(){return su=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},su.apply(this,arguments)}function hW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?hW(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):hW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ti(e){return DK(e)||TK(e)||EK(e)||kK()}function kK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EK(e,n){if(e){if(typeof e=="string")return Kv(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Kv(e,n)}}function TK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function DK(e){if(Array.isArray(e))return Kv(e)}function Kv(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function jK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function vW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NA(r.key),r)}}function $K(e,n,t){return n&&vW(e.prototype,n),t&&vW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function LK(e,n,t){return n=Hl(n),FK(e,CA()?Reflect.construct(n,t||[],Hl(e).constructor):n.apply(e,t))}function FK(e,n){if(n&&(ki(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qK(e)}function qK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CA=function(){return!!e})()}function Hl(e){return Hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hl(e)}function zK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Qv(e,n)}function Qv(e,n){return Qv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qv(e,n)}function ir(e,n,t){return n=NA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function NA(e){var n=UK(e,"string");return ki(n)=="symbol"?n:n+""}function UK(e,n){if(ki(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function n(){var t;jK(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=LK(this,n,[].concat(a)),ir(t,"state",{isAnimationFinished:!0,totalLength:0}),ir(t,"generateSimpleStrokeDasharray",function(u,s){return"".concat(s,"px ").concat(u-s,"px")}),ir(t,"getStrokeDasharray",function(u,s,c){var f=c.reduce(function(W,S){return W+S});if(!f)return t.generateSimpleStrokeDasharray(s,u);for(var m=Math.floor(u/f),d=u%f,v=s-u,y=[],B=0,I=0;B<c.length;I+=c[B],++B)if(I+c[B]>d){y=[].concat(ti(c.slice(0,B)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ti(n.repeat(c,m)),ti(y),b).map(function(W){return"".concat(W,"px")}).join(", ")}),ir(t,"id",Da("recharts-line-")),ir(t,"pathRef",function(u){t.mainCurve=u}),ir(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0}),t.props.onAnimationEnd&&t.props.onAnimationEnd()}),ir(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1}),t.props.onAnimationStart&&t.props.onAnimationStart()}),t}return zK(n,e),$K(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,u=i.points,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=ut(m,ep);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:ln(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement($e,y,d.map(function(B){return E.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:u,xAxis:s,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var u=this.props.isAnimationActive;if(u&&!this.state.isAnimationFinished)return null;var s=this.props,c=s.dot,f=s.points,m=s.dataKey,d=Oe(this.props,!1),v=Oe(c,!0),y=f.map(function(I,b){var W=wt(wt(wt({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return n.renderDotItem(c,W)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement($e,su({className:"recharts-line-dots",key:"dots"},B),y)}},{key:"renderCurveStatically",value:function(r,a,i,u){var s=this.props,c=s.type,f=s.layout,m=s.connectNulls;s.ref;var d=mW(s,CK),v=wt(wt(wt({},Oe(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},u),{},{type:c,layout:f,connectNulls:m});return E.createElement(Ca,su({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,u=this.props,s=u.points,c=u.strokeDasharray,f=u.isAnimationActive,m=u.animationBegin,d=u.animationDuration,v=u.animationEasing,y=u.animationId,B=u.animateNewValues,I=u.width,b=u.height,W=this.state,S=W.prevPoints,M=W.totalLength;return E.createElement(Qt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var P=O.t;if(S){var A=S.length/s.length,N=s.map(function(R,F){var V=Math.floor(F*A);if(S[V]){var G=S[V],Y=hn(G.x,R.x),Q=hn(G.y,R.y);return wt(wt({},R),{},{x:Y(P),y:Q(P)})}if(B){var $=hn(I*2,R.x),K=hn(b/2,R.y);return wt(wt({},R),{},{x:$(P),y:K(P)})}return wt(wt({},R),{},{x:R.x,y:R.y})});return i.renderCurveStatically(N,r,a)}var w=hn(0,M),H=w(P),k;if(c){var D="".concat(c).split(/[,\s]+/gim).map(function(R){return parseFloat(R)});k=i.getStrokeDasharray(H,M,D)}else k=i.generateSimpleStrokeDasharray(M,H);return i.renderCurveStatically(s,r,a,{strokeDasharray:k})})}},{key:"renderCurve",value:function(r,a){var i=this.props,u=i.points,s=i.isAnimationActive,c=this.state,f=c.prevPoints,m=c.totalLength;return s&&u&&u.length&&(!f&&m>0||!ka(f,u))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(u,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,u=a.dot,s=a.points,c=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,S=s.length===1,M=De("recharts-line",c),O=f&&f.allowDataOverflow,P=m&&m.allowDataOverflow,A=O||P,N=ke(b)?this.id:b,w=(r=Oe(u,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=w.r,k=H===void 0?3:H,D=w.strokeWidth,R=D===void 0?2:D,F=E3(u)?u:{},V=F.clipDot,G=V===void 0?!0:V,Y=k*2+R;return E.createElement($e,{className:M},O||P?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?v:v-y/2,y:P?d:d-B/2,width:O?y:y*2,height:P?B:B*2})),!G&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:v-Y/2,y:d-Y/2,width:y+Y,height:B+Y}))):null,!S&&this.renderCurve(A,N),this.renderErrorBar(A,N),(S||u)&&this.renderDots(A,G,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ti(r),[0]):r,u=[],s=0;s<a;++s)u=[].concat(ti(u),ti(i));return u}},{key:"renderDotItem",value:function(r,a){var i;if(E.isValidElement(r))i=E.cloneElement(r,a);else if(Re(r))i=r(a);else{var u=a.key,s=mW(a,NK),c=De("recharts-line-dot",typeof r!="boolean"?r.className:"");i=E.createElement(ts,su({key:u},s,{className:c}))}return i}}])})(U.PureComponent);ir(qr,"displayName","Line");ir(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(qr,"getComposedData",function(e){var n=e.props,t=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,u=e.dataKey,s=e.bandSize,c=e.displayedData,f=e.offset,m=n.layout,d=c.map(function(v,y){var B=ln(v,u);return m==="horizontal"?{x:Pi({axis:t,ticks:a,bandSize:s,entry:v,index:y}),y:ke(B)?null:r.scale(B),value:B,payload:v}:{x:ke(B)?null:t.scale(B),y:Pi({axis:r,ticks:i,bandSize:s,entry:v,index:y}),value:B,payload:v}});return wt({points:d,layout:m},f)});var VK=["layout","type","stroke","connectNulls","isRange","ref"],GK=["key"],RA;function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ei(e)}function kA(e,n){if(e==null)return{};var t=KK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function KK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)}function gW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gW(Object(t),!0).forEach(function(r){Ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function QK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function yW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,TA(r.key),r)}}function YK(e,n,t){return n&&yW(e.prototype,n),t&&yW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function XK(e,n,t){return n=Cl(n),ZK(e,EA()?Reflect.construct(n,t||[],Cl(e).constructor):n.apply(e,t))}function ZK(e,n){if(n&&(Ei(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JK(e)}function JK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EA=function(){return!!e})()}function Cl(e){return Cl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Cl(e)}function eQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Yv(e,n)}function Yv(e,n){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(e,n)}function Ir(e,n,t){return n=TA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function TA(e){var n=nQ(e,"string");return Ei(n)=="symbol"?n:n+""}function nQ(e,n){if(Ei(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Wo=(function(e){function n(){var t;QK(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=XK(this,n,[].concat(a)),Ir(t,"state",{isAnimationFinished:!0}),Ir(t,"id",Da("recharts-area-")),Ir(t,"handleAnimationEnd",function(){var u=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),Re(u)&&u()}),Ir(t,"handleAnimationStart",function(){var u=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),Re(u)&&u()}),t}return eQ(n,e),YK(n,[{key:"renderDots",value:function(r,a,i){var u=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(u&&!s)return null;var c=this.props,f=c.dot,m=c.points,d=c.dataKey,v=Oe(this.props,!1),y=Oe(f,!0),B=m.map(function(b,W){var S=wa(wa(wa({key:"dot-".concat(W),r:3},v),y),{},{index:W,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:m});return n.renderDotItem(f,S)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement($e,mo({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,u=a.points,s=a.strokeWidth,c=u[0].x,f=u[u.length-1].x,m=r*Math.abs(c-f),d=Ma(u.map(function(v){return v.y||0}));return ce(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.y||0})),d)),ce(d)?E.createElement("rect",{x:c<f?c:c-m,y:0,width:m,height:Math.floor(d+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,u=a.points,s=a.strokeWidth,c=u[0].y,f=u[u.length-1].y,m=r*Math.abs(c-f),d=Ma(u.map(function(v){return v.x||0}));return ce(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.x||0})),d)),ce(d)?E.createElement("rect",{x:0,y:c<f?c:c-m,width:d+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,u){var s=this.props,c=s.layout,f=s.type,m=s.stroke,d=s.connectNulls,v=s.isRange;s.ref;var y=kA(s,VK);return E.createElement($e,{clipPath:i?"url(#clipPath-".concat(u,")"):null},E.createElement(Ca,mo({},Oe(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&E.createElement(Ca,mo({},Oe(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&E.createElement(Ca,mo({},Oe(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,u=this.props,s=u.points,c=u.baseLine,f=u.isAnimationActive,m=u.animationBegin,d=u.animationDuration,v=u.animationEasing,y=u.animationId,B=this.state,I=B.prevPoints,b=B.prevBaseLine;return E.createElement(Qt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(W){var S=W.t;if(I){var M=I.length/s.length,O=s.map(function(w,H){var k=Math.floor(H*M);if(I[k]){var D=I[k],R=hn(D.x,w.x),F=hn(D.y,w.y);return wa(wa({},w),{},{x:R(S),y:F(S)})}return w}),P;if(ce(c)&&typeof c=="number"){var A=hn(b,c);P=A(S)}else if(ke(c)||Qi(c)){var N=hn(b,0);P=N(S)}else P=c.map(function(w,H){var k=Math.floor(H*M);if(b[k]){var D=b[k],R=hn(D.x,w.x),F=hn(D.y,w.y);return wa(wa({},w),{},{x:R(S),y:F(S)})}return w});return i.renderAreaStatically(O,P,r,a)}return E.createElement($e,null,E.createElement("defs",null,E.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(S))),E.createElement($e,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(s,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,u=i.points,s=i.baseLine,c=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&u&&u.length&&(!m&&v>0||!ka(m,u)||!ka(d,s))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(u,s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,u=a.dot,s=a.points,c=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,S=s.length===1,M=De("recharts-area",c),O=d&&d.allowDataOverflow,P=v&&v.allowDataOverflow,A=O||P,N=ke(b)?this.id:b,w=(r=Oe(u,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=w.r,k=H===void 0?3:H,D=w.strokeWidth,R=D===void 0?2:D,F=E3(u)?u:{},V=F.clipDot,G=V===void 0?!0:V,Y=k*2+R;return E.createElement($e,{className:M},O||P?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?m:m-y/2,y:P?f:f-B/2,width:O?y:y*2,height:P?B:B*2})),!G&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:m-Y/2,y:f-Y/2,width:y+Y,height:B+Y}))):null,S?null:this.renderArea(A,N),(u||S)&&this.renderDots(A,G,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(U.PureComponent);RA=Wo;Ir(Wo,"displayName","Area");Ir(Wo,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(Wo,"getBaseValue",function(e,n,t,r){var a=e.layout,i=e.baseValue,u=n.props.baseValue,s=u??i;if(ce(s)&&typeof s=="number")return s;var c=a==="horizontal"?r:t,f=c.scale.domain();if(c.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return s==="dataMin"?d:s==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return s==="dataMin"?f[0]:s==="dataMax"?f[1]:f[0]});Ir(Wo,"getComposedData",function(e){var n=e.props,t=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,u=e.yAxisTicks,s=e.bandSize,c=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=n.layout,B=f&&f.length,I=RA.getBaseValue(n,t,r,a),b=y==="horizontal",W=!1,S=d.map(function(O,P){var A;B?A=f[m+P]:(A=ln(O,c),Array.isArray(A)?W=!0:A=[I,A]);var N=A[1]==null||B&&ln(O,c)==null;return b?{x:Pi({axis:r,ticks:i,bandSize:s,entry:O,index:P}),y:N?null:a.scale(A[1]),value:A,payload:O}:{x:N?null:r.scale(A[1]),y:Pi({axis:a,ticks:u,bandSize:s,entry:O,index:P}),value:A,payload:O}}),M;return B||W?M=S.map(function(O){var P=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:P!=null&&O.y!=null?a.scale(P):null}:{x:P!=null?r.scale(P):null,y:O.y}}):M=b?a.scale(I):r.scale(I),wa({points:S,baseLine:M,layout:y,isRange:W},v)});Ir(Wo,"renderDotItem",function(e,n){var t;if(E.isValidElement(e))t=E.cloneElement(e,n);else if(Re(e))t=e(n);else{var r=De("recharts-area-dot",typeof e!="boolean"?e.className:""),a=n.key,i=kA(n,GK);t=E.createElement(ts,mo({},i,{key:a,className:r}))}return t});function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ti(e)}function tQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function rQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$A(r.key),r)}}function aQ(e,n,t){return n&&rQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oQ(e,n,t){return n=Nl(n),iQ(e,DA()?Reflect.construct(n,t||[],Nl(e).constructor):n.apply(e,t))}function iQ(e,n){if(n&&(Ti(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pQ(e)}function pQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DA=function(){return!!e})()}function Nl(e){return Nl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Nl(e)}function uQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xv(e,n)}function Xv(e,n){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,n)}function jA(e,n,t){return n=$A(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $A(e){var n=sQ(e,"string");return Ti(n)=="symbol"?n:n+""}function sQ(e,n){if(Ti(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Bc=(function(e){function n(){return tQ(this,n),oQ(this,n,arguments)}return uQ(n,e),aQ(n,[{key:"render",value:function(){return null}}])})(E.Component);jA(Bc,"displayName","ZAxis");jA(Bc,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var lQ=["option","isActive"];function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lu.apply(this,arguments)}function cQ(e,n){if(e==null)return{};var t=fQ(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function fQ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function dQ(e){var n=e.option,t=e.isActive,r=cQ(e,lQ);return typeof n=="string"?E.createElement(yl,lu({option:E.createElement(Yl,lu({type:n},r)),isActive:t,shapeType:"symbols"},r)):E.createElement(yl,lu({option:n,isActive:t,shapeType:"symbols"},r))}function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Di(e)}function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cu.apply(this,arguments)}function bW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function qt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?bW(Object(t),!0).forEach(function(r){_a(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):bW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function mQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function IW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,FA(r.key),r)}}function hQ(e,n,t){return n&&IW(e.prototype,n),t&&IW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function vQ(e,n,t){return n=Rl(n),gQ(e,LA()?Reflect.construct(n,t||[],Rl(e).constructor):n.apply(e,t))}function gQ(e,n){if(n&&(Di(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yQ(e)}function yQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LA=function(){return!!e})()}function Rl(e){return Rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Rl(e)}function bQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zv(e,n)}function Zv(e,n){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,n)}function _a(e,n,t){return n=FA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function FA(e){var n=IQ(e,"string");return Di(n)=="symbol"?n:n+""}function IQ(e,n){if(Di(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var xc=(function(e){function n(){var t;mQ(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=vQ(this,n,[].concat(a)),_a(t,"state",{isAnimationFinished:!1}),_a(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),_a(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),_a(t,"id",Da("recharts-scatter-")),t}return bQ(n,e),hQ(n,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,u=i.shape,s=i.activeShape,c=i.activeIndex,f=Oe(this.props,!1);return r.map(function(m,d){var v=c===d,y=v?s:u,B=qt(qt({},f),m);return E.createElement($e,cu({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ra(a.props,m,d),{role:"img"}),E.createElement(dQ,cu({option:y,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,u=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return E.createElement(Qt,{begin:s,duration:c,isActive:u,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,B=i.map(function(I,b){var W=d&&d[b];if(W){var S=hn(W.cx,I.cx),M=hn(W.cy,I.cy),O=hn(W.size,I.size);return qt(qt({},I),{},{cx:S(y),cy:M(y),size:O(y)})}var P=hn(0,I.size);return qt(qt({},I),{},{size:P(y)})});return E.createElement($e,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,u=this.state.prevPoints;return i&&a&&a.length&&(!u||!ka(u,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,u=a.xAxis,s=a.yAxis,c=a.children,f=ut(c,ep);return f?f.map(function(m,d){var v=m.props,y=v.direction,B=v.dataKey;return E.cloneElement(m,{key:"".concat(y,"-").concat(B,"-").concat(i[d]),data:i,xAxis:u,yAxis:s,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,W){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:ln(b,W)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,u=r.lineType,s=r.lineJointType,c=Oe(this.props,!1),f=Oe(i,!1),m,d;if(u==="joint")m=a.map(function(M){return{x:M.cx,y:M.cy}});else if(u==="fitting"){var v=fE(a),y=v.xmin,B=v.xmax,I=v.a,b=v.b,W=function(O){return I*O+b};m=[{x:y,y:W(y)},{x:B,y:W(B)}]}var S=qt(qt(qt({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:m});return E.isValidElement(i)?d=E.cloneElement(i,S):Re(i)?d=i(S):d=E.createElement(Ca,cu({},S,{type:s})),E.createElement($e,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,u=r.line,s=r.className,c=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,y=r.height,B=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,W=De("recharts-scatter",s),S=c&&c.allowDataOverflow,M=f&&f.allowDataOverflow,O=S||M,P=ke(B)?this.id:B;return E.createElement($e,{className:W,clipPath:O?"url(#clipPath-".concat(P,")"):null},S||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(P)},E.createElement("rect",{x:S?m:m-v/2,y:M?d:d-y/2,width:S?v:v*2,height:M?y:y*2}))):null,u&&this.renderLine(),this.renderErrorBar(),E.createElement($e,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(U.PureComponent);_a(xc,"displayName","Scatter");_a(xc,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});_a(xc,"getComposedData",function(e){var n=e.xAxis,t=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,u=e.xAxisTicks,s=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,m=ut(a.props.children,Xu),d=ke(n.dataKey)?a.props.dataKey:n.dataKey,v=ke(t.dataKey)?a.props.dataKey:t.dataKey,y=r&&r.dataKey,B=r?r.range:Bc.defaultProps.range,I=B&&B[0],b=n.scale.bandwidth?n.scale.bandwidth():0,W=t.scale.bandwidth?t.scale.bandwidth():0,S=i.map(function(M,O){var P=ln(M,d),A=ln(M,v),N=!ke(y)&&ln(M,y)||"-",w=[{name:ke(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:P,payload:M,dataKey:d,type:f},{name:ke(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:A,payload:M,dataKey:v,type:f}];N!=="-"&&w.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:M,dataKey:y,type:f});var H=Pi({axis:n,ticks:u,bandSize:b,entry:M,index:O,dataKey:d}),k=Pi({axis:t,ticks:s,bandSize:W,entry:M,index:O,dataKey:v}),D=N!=="-"?r.scale(N):I,R=Math.sqrt(Math.max(D,0)/Math.PI);return qt(qt({},M),{},{cx:H,cy:k,x:H-R,y:k-R,xAxis:n,yAxis:t,zAxis:r,width:2*R,height:2*R,size:D,node:{x:P,y:A,z:N},tooltipPayload:w,tooltipPosition:{x:H,y:k},payload:M},m&&m[O]&&m[O].props)});return qt({points:S},c)});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ji(e)}function BQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function xQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,UA(r.key),r)}}function PQ(e,n,t){return n&&xQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wQ(e,n,t){return n=kl(n),WQ(e,qA()?Reflect.construct(n,t||[],kl(e).constructor):n.apply(e,t))}function WQ(e,n){if(n&&(ji(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SQ(e)}function SQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qA=function(){return!!e})()}function kl(e){return kl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},kl(e)}function MQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Jv(e,n)}function Jv(e,n){return Jv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jv(e,n)}function zA(e,n,t){return n=UA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function UA(e){var n=AQ(e,"string");return ji(n)=="symbol"?n:n+""}function AQ(e,n){if(ji(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function eg(){return eg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},eg.apply(this,arguments)}function _Q(e){var n=e.xAxisId,t=hy(),r=vy(),a=IA(n);return a==null?null:E.createElement(np,eg({},a,{className:De("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:t,height:r},ticksGenerator:function(u){return Fr(u,!0)}}))}var Ea=(function(e){function n(){return BQ(this,n),wQ(this,n,arguments)}return MQ(n,e),PQ(n,[{key:"render",value:function(){return E.createElement(_Q,this.props)}}])})(E.Component);zA(Ea,"displayName","XAxis");zA(Ea,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$i(e)}function OQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function HQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KA(r.key),r)}}function CQ(e,n,t){return n&&HQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function NQ(e,n,t){return n=El(n),RQ(e,VA()?Reflect.construct(n,t||[],El(e).constructor):n.apply(e,t))}function RQ(e,n){if(n&&($i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kQ(e)}function kQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VA=function(){return!!e})()}function El(e){return El=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},El(e)}function EQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ng(e,n)}function ng(e,n){return ng=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ng(e,n)}function GA(e,n,t){return n=KA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function KA(e){var n=TQ(e,"string");return $i(n)=="symbol"?n:n+""}function TQ(e,n){if($i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function tg(){return tg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tg.apply(this,arguments)}var DQ=function(n){var t=n.yAxisId,r=hy(),a=vy(),i=BA(t);return i==null?null:E.createElement(np,tg({},i,{className:De("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(s){return Fr(s,!0)}}))},Br=(function(e){function n(){return OQ(this,n),NQ(this,n,arguments)}return EQ(n,e),CQ(n,[{key:"render",value:function(){return E.createElement(DQ,this.props)}}])})(E.Component);GA(Br,"displayName","YAxis");GA(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function BW(e){return FQ(e)||LQ(e)||$Q(e)||jQ()}function jQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $Q(e,n){if(e){if(typeof e=="string")return rg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rg(e,n)}}function LQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function FQ(e){if(Array.isArray(e))return rg(e)}function rg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var ag=function(n,t,r,a,i){var u=ut(n,yy),s=ut(n,yc),c=[].concat(BW(u),BW(s)),f=ut(n,Ic),m="".concat(a,"Id"),d=a[0],v=t;if(c.length&&(v=c.reduce(function(I,b){if(b.props[m]===r&&Pr(b.props,"extendDomain")&&ce(b.props[d])){var W=b.props[d];return[Math.min(I[0],W),Math.max(I[1],W)]}return I},v)),f.length){var y="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[m]===r&&Pr(b.props,"extendDomain")&&ce(b.props[y])&&ce(b.props[B])){var W=b.props[y],S=b.props[B];return[Math.min(I[0],W,S),Math.max(I[1],W,S)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return ce(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},B6={exports:{}},xW;function qQ(){return xW||(xW=1,(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function a(c,f,m){this.fn=c,this.context=f,this.once=m||!1}function i(c,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var y=new a(m,d||c,v),B=t?t+f:f;return c._events[B]?c._events[B].fn?c._events[B]=[c._events[B],y]:c._events[B].push(y):(c._events[B]=y,c._eventsCount++),c}function u(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)n.call(m,d)&&f.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},s.prototype.listeners=function(f){var m=t?t+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,B=new Array(y);v<y;v++)B[v]=d[v].fn;return B},s.prototype.listenerCount=function(f){var m=t?t+f:f,d=this._events[m];return d?d.fn?1:d.length:0},s.prototype.emit=function(f,m,d,v,y,B){var I=t?t+f:f;if(!this._events[I])return!1;var b=this._events[I],W=arguments.length,S,M;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),W){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,m),!0;case 3:return b.fn.call(b.context,m,d),!0;case 4:return b.fn.call(b.context,m,d,v),!0;case 5:return b.fn.call(b.context,m,d,v,y),!0;case 6:return b.fn.call(b.context,m,d,v,y,B),!0}for(M=1,S=new Array(W-1);M<W;M++)S[M-1]=arguments[M];b.fn.apply(b.context,S)}else{var O=b.length,P;for(M=0;M<O;M++)switch(b[M].once&&this.removeListener(f,b[M].fn,void 0,!0),W){case 1:b[M].fn.call(b[M].context);break;case 2:b[M].fn.call(b[M].context,m);break;case 3:b[M].fn.call(b[M].context,m,d);break;case 4:b[M].fn.call(b[M].context,m,d,v);break;default:if(!S)for(P=1,S=new Array(W-1);P<W;P++)S[P-1]=arguments[P];b[M].fn.apply(b[M].context,S)}}return!0},s.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},s.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},s.prototype.removeListener=function(f,m,d,v){var y=t?t+f:f;if(!this._events[y])return this;if(!m)return u(this,y),this;var B=this._events[y];if(B.fn)B.fn===m&&(!v||B.once)&&(!d||B.context===d)&&u(this,y);else{for(var I=0,b=[],W=B.length;I<W;I++)(B[I].fn!==m||v&&!B[I].once||d&&B[I].context!==d)&&b.push(B[I]);b.length?this._events[y]=b.length===1?b[0]:b:u(this,y)}return this},s.prototype.removeAllListeners=function(f){var m;return f?(m=t?t+f:f,this._events[m]&&u(this,m)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(B6)),B6.exports}var zQ=qQ();const UQ=Xe(zQ);var x6=new UQ,P6="recharts.syncMouseEvents";function Vu(e){"@babel/helpers - typeof";return Vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Vu(e)}function VQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function GQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,QA(r.key),r)}}function KQ(e,n,t){return n&&GQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function w6(e,n,t){return n=QA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function QA(e){var n=QQ(e,"string");return Vu(n)=="symbol"?n:n+""}function QQ(e,n){if(Vu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Vu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var YQ=(function(){function e(){VQ(this,e),w6(this,"activeIndex",0),w6(this,"coordinateList",[]),w6(this,"layout","horizontal")}return KQ(e,[{key:"setDetails",value:function(t){var r,a=t.coordinateList,i=a===void 0?null:a,u=t.container,s=u===void 0?null:u,c=t.layout,f=c===void 0?null:c,m=t.offset,d=m===void 0?null:m,v=t.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=s??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(t){if(this.coordinateList.length!==0)switch(t.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(t){this.activeIndex=t}},{key:"spoofMouse",value:function(){var t,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,u=a.y,s=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((t=window)===null||t===void 0?void 0:t.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=u+this.offset.top+s/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function XQ(e,n,t){if(t==="number"&&n===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&ce(r)&&ce(a))return!0}return!1}function ZQ(e,n,t,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?n.x-a:t.left+.5,y:e==="horizontal"?t.top+.5:n.y-a,width:e==="horizontal"?r:t.width-1,height:e==="horizontal"?t.height-1:r}}function YA(e){var n=e.cx,t=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,u=on(n,t,r,a),s=on(n,t,r,i);return{points:[u,s],cx:n,cy:t,radius:r,startAngle:a,endAngle:i}}function JQ(e,n,t){var r,a,i,u;if(e==="horizontal")r=n.x,i=r,a=t.top,u=t.top+t.height;else if(e==="vertical")a=n.y,u=a,r=t.left,i=t.left+t.width;else if(n.cx!=null&&n.cy!=null)if(e==="centric"){var s=n.cx,c=n.cy,f=n.innerRadius,m=n.outerRadius,d=n.angle,v=on(s,c,f,d),y=on(s,c,m,d);r=v.x,a=v.y,i=y.x,u=y.y}else return YA(n);return[{x:r,y:a},{x:i,y:u}]}function Gu(e){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gu(e)}function PW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function S0(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?PW(Object(t),!0).forEach(function(r){eY(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function eY(e,n,t){return n=nY(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nY(e){var n=tY(e,"string");return Gu(n)=="symbol"?n:n+""}function tY(e,n){if(Gu(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Gu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function rY(e){var n,t,r=e.element,a=e.tooltipEventType,i=e.isActive,u=e.activeCoordinate,s=e.activePayload,c=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(n=r.props.cursor)!==null&&n!==void 0?n:(t=r.type.defaultProps)===null||t===void 0?void 0:t.cursor;if(!r||!y||!i||!u||v!=="ScatterChart"&&a!=="axis")return null;var B,I=Ca;if(v==="ScatterChart")B=u,I=Yz;else if(v==="BarChart")B=ZQ(d,u,c,m),I=ly;else if(d==="radial"){var b=YA(u),W=b.cx,S=b.cy,M=b.radius,O=b.startAngle,P=b.endAngle;B={cx:W,cy:S,startAngle:O,endAngle:P,innerRadius:M,outerRadius:M},I=zM}else B={points:JQ(d,u,c)},I=Ca;var A=S0(S0(S0(S0({stroke:"#ccc",pointerEvents:"none"},c),B),Oe(y,!1)),{},{payload:s,payloadIndex:f,className:De("recharts-tooltip-cursor",y.className)});return U.isValidElement(y)?U.cloneElement(y,A):U.createElement(I,A)}var aY=["item"],oY=["children","className","width","height","style","compact","title","desc"];function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Li(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ui.apply(this,arguments)}function wW(e,n){return uY(e)||pY(e,n)||ZA(e,n)||iY()}function iY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pY(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function uY(e){if(Array.isArray(e))return e}function WW(e,n){if(e==null)return{};var t=sY(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function sY(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function lY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function cY(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,JA(r.key),r)}}function fY(e,n,t){return n&&cY(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function dY(e,n,t){return n=Tl(n),mY(e,XA()?Reflect.construct(n,t||[],Tl(e).constructor):n.apply(e,t))}function mY(e,n){if(n&&(Li(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hY(e)}function hY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function XA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XA=function(){return!!e})()}function Tl(e){return Tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Tl(e)}function vY(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&og(e,n)}function og(e,n){return og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},og(e,n)}function Fi(e){return bY(e)||yY(e)||ZA(e)||gY()}function gY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZA(e,n){if(e){if(typeof e=="string")return ig(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ig(e,n)}}function yY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bY(e){if(Array.isArray(e))return ig(e)}function ig(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function SW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?SW(Object(t),!0).forEach(function(r){Ee(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):SW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ee(e,n,t){return n=JA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function JA(e){var n=IY(e,"string");return Li(n)=="symbol"?n:n+""}function IY(e,n){if(Li(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var BY={xAxis:["bottom","top"],yAxis:["left","right"]},xY={width:"100%",height:"100%"},e_={x:0,y:0};function M0(e){return e}var PY=function(n,t){return t==="horizontal"?n.x:t==="vertical"?n.y:t==="centric"?n.angle:n.radius},wY=function(n,t,r,a){var i=t.find(function(m){return m&&m.index===r});if(i){if(n==="horizontal")return{x:i.coordinate,y:a.y};if(n==="vertical")return{x:a.x,y:i.coordinate};if(n==="centric"){var u=i.coordinate,s=a.radius;return oe(oe(oe({},a),on(a.cx,a.cy,s,u)),{},{angle:u,radius:s})}var c=i.coordinate,f=a.angle;return oe(oe(oe({},a),on(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return e_},Pc=function(n,t){var r=t.graphicalItems,a=t.dataStartIndex,i=t.dataEndIndex,u=(r??[]).reduce(function(s,c){var f=c.props.data;return f&&f.length?[].concat(Fi(s),Fi(f)):s},[]);return u.length>0?u:n&&n.length&&ce(a)&&ce(i)?n.slice(a,i+1):[]};function n_(e){return e==="number"?[0,"auto"]:void 0}var pg=function(n,t,r,a){var i=n.graphicalItems,u=n.tooltipAxis,s=Pc(t,n);return r<0||!i||!i.length||r>=s.length?null:i.reduce(function(c,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:t;d&&n.dataStartIndex+n.dataEndIndex!==0&&n.dataEndIndex-n.dataStartIndex>=r&&(d=d.slice(n.dataStartIndex,n.dataEndIndex+1));var v;if(u.dataKey&&!u.allowDuplicatedCategory){var y=d===void 0?s:d;v=R0(y,u.dataKey,a)}else v=d&&d[r]||s[r];return v?[].concat(Fi(c),[DM(f,v)]):c},[])},MW=function(n,t,r,a){var i=a||{x:n.chartX,y:n.chartY},u=PY(i,r),s=n.orderedTooltipTicks,c=n.tooltipAxis,f=n.tooltipTicks,m=g9(u,s,f,c);if(m>=0&&f){var d=f[m]&&f[m].value,v=pg(n,t,m,d),y=wY(r,s,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},WY=function(n,t){var r=t.axes,a=t.graphicalItems,i=t.axisType,u=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=n.stackOffset,y=CM(m,i);return r.reduce(function(B,I){var b,W=I.type.defaultProps!==void 0?oe(oe({},I.type.defaultProps),I.props):I.props,S=W.type,M=W.dataKey,O=W.allowDataOverflow,P=W.allowDuplicatedCategory,A=W.scale,N=W.ticks,w=W.includeHidden,H=W[u];if(B[H])return B;var k=Pc(n.data,{graphicalItems:a.filter(function(L){var Z,se=u in L.props?L.props[u]:(Z=L.type.defaultProps)===null||Z===void 0?void 0:Z[u];return se===H}),dataStartIndex:c,dataEndIndex:f}),D=k.length,R,F,V;XQ(W.domain,O,S)&&(R=yv(W.domain,null,O),y&&(S==="number"||A!=="auto")&&(V=ou(k,M,"category")));var G=n_(S);if(!R||R.length===0){var Y,Q=(Y=W.domain)!==null&&Y!==void 0?Y:G;if(M){if(R=ou(k,M,S),S==="category"&&y){var $=cE(R);P&&$?(F=R,R=Il(0,D)):P||(R=W4(Q,R,I).reduce(function(L,Z){return L.indexOf(Z)>=0?L:[].concat(Fi(L),[Z])},[]))}else if(S==="category")P?R=R.filter(function(L){return L!==""&&!ke(L)}):R=W4(Q,R,I).reduce(function(L,Z){return L.indexOf(Z)>=0||Z===""||ke(Z)?L:[].concat(Fi(L),[Z])},[]);else if(S==="number"){var K=x9(k,a.filter(function(L){var Z,se,he=u in L.props?L.props[u]:(Z=L.type.defaultProps)===null||Z===void 0?void 0:Z[u],Ie="hide"in L.props?L.props.hide:(se=L.type.defaultProps)===null||se===void 0?void 0:se.hide;return he===H&&(w||!Ie)}),M,i,m);K&&(R=K)}y&&(S==="number"||A!=="auto")&&(V=ou(k,M,"category"))}else y?R=Il(0,D):s&&s[H]&&s[H].hasStack&&S==="number"?R=v==="expand"?[0,1]:TM(s[H].stackGroups,c,f):R=HM(k,a.filter(function(L){var Z=u in L.props?L.props[u]:L.type.defaultProps[u],se="hide"in L.props?L.props.hide:L.type.defaultProps.hide;return Z===H&&(w||!se)}),S,m,!0);if(S==="number")R=ag(d,R,H,i,N),Q&&(R=yv(Q,R,O));else if(S==="category"&&Q){var ne=Q,T=R.every(function(L){return ne.indexOf(L)>=0});T&&(R=ne)}}return oe(oe({},B),{},Ee({},H,oe(oe({},W),{},{axisType:i,domain:R,categoricalDomain:V,duplicateDomain:F,originalDomain:(b=W.domain)!==null&&b!==void 0?b:G,isCategorical:y,layout:m})))},{})},SY=function(n,t){var r=t.graphicalItems,a=t.Axis,i=t.axisType,u=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=Pc(n.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,B=CM(m,i),I=-1;return r.reduce(function(b,W){var S=W.type.defaultProps!==void 0?oe(oe({},W.type.defaultProps),W.props):W.props,M=S[u],O=n_("number");if(!b[M]){I++;var P;return B?P=Il(0,y):s&&s[M]&&s[M].hasStack?(P=TM(s[M].stackGroups,c,f),P=ag(d,P,M,i)):(P=yv(O,HM(v,r.filter(function(A){var N,w,H=u in A.props?A.props[u]:(N=A.type.defaultProps)===null||N===void 0?void 0:N[u],k="hide"in A.props?A.props.hide:(w=A.type.defaultProps)===null||w===void 0?void 0:w.hide;return H===M&&!k}),"number",m),a.defaultProps.allowDataOverflow),P=ag(d,P,M,i)),oe(oe({},b),{},Ee({},M,oe(oe({axisType:i},a.defaultProps),{},{hide:!0,orientation:Ot(BY,"".concat(i,".").concat(I%2),null),domain:P,originalDomain:O,isCategorical:B,layout:m})))}return b},{})},MY=function(n,t){var r=t.axisType,a=r===void 0?"xAxis":r,i=t.AxisComp,u=t.graphicalItems,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.children,d="".concat(a,"Id"),v=ut(m,i),y={};return v&&v.length?y=WY(n,{axes:v,graphicalItems:u,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f}):u&&u.length&&(y=SY(n,{Axis:i,graphicalItems:u,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f})),y},AY=function(n){var t=Sa(n),r=Fr(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Eg(r,function(a){return a.coordinate}),tooltipAxis:t,tooltipAxisBandSize:il(t,r)}},AW=function(n){var t=n.children,r=n.defaultShowTooltip,a=St(t,_i),i=0,u=0;return n.data&&n.data.length!==0&&(u=n.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(u=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:u,activeTooltipIndex:-1,isTooltipActive:!!r}},_Y=function(n){return!n||!n.length?!1:n.some(function(t){var r=Ur(t&&t.type);return r&&r.indexOf("Bar")>=0})},_W=function(n){return n==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:n==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:n==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},OY=function(n,t){var r=n.props,a=n.graphicalItems,i=n.xAxisMap,u=i===void 0?{}:i,s=n.yAxisMap,c=s===void 0?{}:s,f=r.width,m=r.height,d=r.children,v=r.margin||{},y=St(d,_i),B=St(d,Oa),I=Object.keys(c).reduce(function(P,A){var N=c[A],w=N.orientation;return!N.mirror&&!N.hide?oe(oe({},P),{},Ee({},w,P[w]+N.width)):P},{left:v.left||0,right:v.right||0}),b=Object.keys(u).reduce(function(P,A){var N=u[A],w=N.orientation;return!N.mirror&&!N.hide?oe(oe({},P),{},Ee({},w,Ot(P,"".concat(w))+N.height)):P},{top:v.top||0,bottom:v.bottom||0}),W=oe(oe({},b),I),S=W.bottom;y&&(W.bottom+=y.props.height||_i.defaultProps.height),B&&t&&(W=I9(W,a,r,t));var M=f-W.left-W.right,O=m-W.top-W.bottom;return oe(oe({brushBottom:S},W),{},{width:Math.max(M,0),height:Math.max(O,0)})},HY=function(n,t){if(t==="xAxis")return n[t].width;if(t==="yAxis")return n[t].height},wc=function(n){var t=n.chartName,r=n.GraphicalChild,a=n.defaultTooltipEventType,i=a===void 0?"axis":a,u=n.validateTooltipEventTypes,s=u===void 0?["axis"]:u,c=n.axisComponents,f=n.legendContent,m=n.formatAxisMap,d=n.defaultProps,v=function(W,S){var M=S.graphicalItems,O=S.stackGroups,P=S.offset,A=S.updateId,N=S.dataStartIndex,w=S.dataEndIndex,H=W.barSize,k=W.layout,D=W.barGap,R=W.barCategoryGap,F=W.maxBarSize,V=_W(k),G=V.numericAxisName,Y=V.cateAxisName,Q=_Y(M),$=[];return M.forEach(function(K,ne){var T=Pc(W.data,{graphicalItems:[K],dataStartIndex:N,dataEndIndex:w}),L=K.type.defaultProps!==void 0?oe(oe({},K.type.defaultProps),K.props):K.props,Z=L.dataKey,se=L.maxBarSize,he=L["".concat(G,"Id")],Ie=L["".concat(Y,"Id")],Be={},de=c.reduce(function(xn,gn){var Ht=S["".concat(gn.axisType,"Map")],yn=L["".concat(gn.axisType,"Id")];Ht&&Ht[yn]||gn.axisType==="zAxis"||bo();var Qn=Ht[yn];return oe(oe({},xn),{},Ee(Ee({},gn.axisType,Qn),"".concat(gn.axisType,"Ticks"),Fr(Qn)))},Be),ae=de[Y],re=de["".concat(Y,"Ticks")],ie=O&&O[he]&&O[he].hasStack&&H9(K,O[he].stackGroups),J=Ur(K.type).indexOf("Bar")>=0,ge=il(ae,re),me=[],ye=Q&&y9({barSize:H,stackGroups:O,totalSize:HY(de,Y)});if(J){var ve,Pe,je=ke(se)?F:se,qe=(ve=(Pe=il(ae,re,!0))!==null&&Pe!==void 0?Pe:je)!==null&&ve!==void 0?ve:0;me=b9({barGap:D,barCategoryGap:R,bandSize:qe!==ge?qe:ge,sizeList:ye[Ie],maxBarSize:je}),qe!==ge&&(me=me.map(function(xn){return oe(oe({},xn),{},{position:oe(oe({},xn.position),{},{offset:xn.position.offset-qe/2})})}))}var Ke=K&&K.type&&K.type.getComposedData;Ke&&$.push({props:oe(oe({},Ke(oe(oe({},de),{},{displayedData:T,props:W,dataKey:Z,item:K,bandSize:ge,barPosition:me,offset:P,stackedData:ie,layout:k,dataStartIndex:N,dataEndIndex:w}))),{},Ee(Ee(Ee({key:K.key||"item-".concat(ne)},G,de[G]),Y,de[Y]),"animationId",A)),childIndex:PE(K,W.children),item:K})}),$},y=function(W,S){var M=W.props,O=W.dataStartIndex,P=W.dataEndIndex,A=W.updateId;if(!$B({props:M}))return null;var N=M.children,w=M.layout,H=M.stackOffset,k=M.data,D=M.reverseStackOrder,R=_W(w),F=R.numericAxisName,V=R.cateAxisName,G=ut(N,r),Y=_9(k,G,"".concat(F,"Id"),"".concat(V,"Id"),H,D),Q=c.reduce(function(L,Z){var se="".concat(Z.axisType,"Map");return oe(oe({},L),{},Ee({},se,MY(M,oe(oe({},Z),{},{graphicalItems:G,stackGroups:Z.axisType===F&&Y,dataStartIndex:O,dataEndIndex:P}))))},{}),$=OY(oe(oe({},Q),{},{props:M,graphicalItems:G}),S==null?void 0:S.legendBBox);Object.keys(Q).forEach(function(L){Q[L]=m(M,Q[L],$,L.replace("Map",""),t)});var K=Q["".concat(V,"Map")],ne=AY(K),T=v(M,oe(oe({},Q),{},{dataStartIndex:O,dataEndIndex:P,updateId:A,graphicalItems:G,stackGroups:Y,offset:$}));return oe(oe({formattedGraphicalItems:T,graphicalItems:G,offset:$,stackGroups:Y},ne),Q)},B=(function(b){function W(S){var M,O,P;return lY(this,W),P=dY(this,W,[S]),Ee(P,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Ee(P,"accessibilityManager",new YQ),Ee(P,"handleLegendBBoxUpdate",function(A){if(A){var N=P.state,w=N.dataStartIndex,H=N.dataEndIndex,k=N.updateId;P.setState(oe({legendBBox:A},y({props:P.props,dataStartIndex:w,dataEndIndex:H,updateId:k},oe(oe({},P.state),{},{legendBBox:A}))))}}),Ee(P,"handleReceiveSyncEvent",function(A,N,w){if(P.props.syncId===A){if(w===P.eventEmitterSymbol&&typeof P.props.syncMethod!="function")return;P.applySyncEvent(N)}}),Ee(P,"handleBrushChange",function(A){var N=A.startIndex,w=A.endIndex;if(N!==P.state.dataStartIndex||w!==P.state.dataEndIndex){var H=P.state.updateId;P.setState(function(){return oe({dataStartIndex:N,dataEndIndex:w},y({props:P.props,dataStartIndex:N,dataEndIndex:w,updateId:H},P.state))}),P.triggerSyncEvent({dataStartIndex:N,dataEndIndex:w})}}),Ee(P,"handleMouseEnter",function(A){var N=P.getMouseInfo(A);if(N){var w=oe(oe({},N),{},{isTooltipActive:!0});P.setState(w),P.triggerSyncEvent(w);var H=P.props.onMouseEnter;Re(H)&&H(w,A)}}),Ee(P,"triggeredAfterMouseMove",function(A){var N=P.getMouseInfo(A),w=N?oe(oe({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};P.setState(w),P.triggerSyncEvent(w);var H=P.props.onMouseMove;Re(H)&&H(w,A)}),Ee(P,"handleItemMouseEnter",function(A){P.setState(function(){return{isTooltipActive:!0,activeItem:A,activePayload:A.tooltipPayload,activeCoordinate:A.tooltipPosition||{x:A.cx,y:A.cy}}})}),Ee(P,"handleItemMouseLeave",function(){P.setState(function(){return{isTooltipActive:!1}})}),Ee(P,"handleMouseMove",function(A){A.persist(),P.throttleTriggeredAfterMouseMove(A)}),Ee(P,"handleMouseLeave",function(A){P.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};P.setState(N),P.triggerSyncEvent(N);var w=P.props.onMouseLeave;Re(w)&&w(N,A)}),Ee(P,"handleOuterEvent",function(A){var N=xE(A),w=Ot(P.props,"".concat(N));if(N&&Re(w)){var H,k;/.*touch.*/i.test(N)?k=P.getMouseInfo(A.changedTouches[0]):k=P.getMouseInfo(A),w((H=k)!==null&&H!==void 0?H:{},A)}}),Ee(P,"handleClick",function(A){var N=P.getMouseInfo(A);if(N){var w=oe(oe({},N),{},{isTooltipActive:!0});P.setState(w),P.triggerSyncEvent(w);var H=P.props.onClick;Re(H)&&H(w,A)}}),Ee(P,"handleMouseDown",function(A){var N=P.props.onMouseDown;if(Re(N)){var w=P.getMouseInfo(A);N(w,A)}}),Ee(P,"handleMouseUp",function(A){var N=P.props.onMouseUp;if(Re(N)){var w=P.getMouseInfo(A);N(w,A)}}),Ee(P,"handleTouchMove",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&P.throttleTriggeredAfterMouseMove(A.changedTouches[0])}),Ee(P,"handleTouchStart",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&P.handleMouseDown(A.changedTouches[0])}),Ee(P,"handleTouchEnd",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&P.handleMouseUp(A.changedTouches[0])}),Ee(P,"handleDoubleClick",function(A){var N=P.props.onDoubleClick;if(Re(N)){var w=P.getMouseInfo(A);N(w,A)}}),Ee(P,"handleContextMenu",function(A){var N=P.props.onContextMenu;if(Re(N)){var w=P.getMouseInfo(A);N(w,A)}}),Ee(P,"triggerSyncEvent",function(A){P.props.syncId!==void 0&&x6.emit(P6,P.props.syncId,A,P.eventEmitterSymbol)}),Ee(P,"applySyncEvent",function(A){var N=P.props,w=N.layout,H=N.syncMethod,k=P.state.updateId,D=A.dataStartIndex,R=A.dataEndIndex;if(A.dataStartIndex!==void 0||A.dataEndIndex!==void 0)P.setState(oe({dataStartIndex:D,dataEndIndex:R},y({props:P.props,dataStartIndex:D,dataEndIndex:R,updateId:k},P.state)));else if(A.activeTooltipIndex!==void 0){var F=A.chartX,V=A.chartY,G=A.activeTooltipIndex,Y=P.state,Q=Y.offset,$=Y.tooltipTicks;if(!Q)return;if(typeof H=="function")G=H($,A);else if(H==="value"){G=-1;for(var K=0;K<$.length;K++)if($[K].value===A.activeLabel){G=K;break}}var ne=oe(oe({},Q),{},{x:Q.left,y:Q.top}),T=Math.min(F,ne.x+ne.width),L=Math.min(V,ne.y+ne.height),Z=$[G]&&$[G].value,se=pg(P.state,P.props.data,G),he=$[G]?{x:w==="horizontal"?$[G].coordinate:T,y:w==="horizontal"?L:$[G].coordinate}:e_;P.setState(oe(oe({},A),{},{activeLabel:Z,activeCoordinate:he,activePayload:se,activeTooltipIndex:G}))}else P.setState(A)}),Ee(P,"renderCursor",function(A){var N,w=P.state,H=w.isTooltipActive,k=w.activeCoordinate,D=w.activePayload,R=w.offset,F=w.activeTooltipIndex,V=w.tooltipAxisBandSize,G=P.getTooltipEventType(),Y=(N=A.props.active)!==null&&N!==void 0?N:H,Q=P.props.layout,$=A.key||"_recharts-cursor";return E.createElement(rY,{key:$,activeCoordinate:k,activePayload:D,activeTooltipIndex:F,chartName:t,element:A,isActive:Y,layout:Q,offset:R,tooltipAxisBandSize:V,tooltipEventType:G})}),Ee(P,"renderPolarAxis",function(A,N,w){var H=Ot(A,"type.axisType"),k=Ot(P.state,"".concat(H,"Map")),D=A.type.defaultProps,R=D!==void 0?oe(oe({},D),A.props):A.props,F=k&&k[R["".concat(H,"Id")]];return U.cloneElement(A,oe(oe({},F),{},{className:De(H,F.className),key:A.key||"".concat(N,"-").concat(w),ticks:Fr(F,!0)}))}),Ee(P,"renderPolarGrid",function(A){var N=A.props,w=N.radialLines,H=N.polarAngles,k=N.polarRadius,D=P.state,R=D.radiusAxisMap,F=D.angleAxisMap,V=Sa(R),G=Sa(F),Y=G.cx,Q=G.cy,$=G.innerRadius,K=G.outerRadius;return U.cloneElement(A,{polarAngles:Array.isArray(H)?H:Fr(G,!0).map(function(ne){return ne.coordinate}),polarRadius:Array.isArray(k)?k:Fr(V,!0).map(function(ne){return ne.coordinate}),cx:Y,cy:Q,innerRadius:$,outerRadius:K,key:A.key||"polar-grid",radialLines:w})}),Ee(P,"renderLegend",function(){var A=P.state.formattedGraphicalItems,N=P.props,w=N.children,H=N.width,k=N.height,D=P.props.margin||{},R=H-(D.left||0)-(D.right||0),F=_M({children:w,formattedGraphicalItems:A,legendWidth:R,legendContent:f});if(!F)return null;var V=F.item,G=WW(F,aY);return U.cloneElement(V,oe(oe({},G),{},{chartWidth:H,chartHeight:k,margin:D,onBBoxUpdate:P.handleLegendBBoxUpdate}))}),Ee(P,"renderTooltip",function(){var A,N=P.props,w=N.children,H=N.accessibilityLayer,k=St(w,Mt);if(!k)return null;var D=P.state,R=D.isTooltipActive,F=D.activeCoordinate,V=D.activePayload,G=D.activeLabel,Y=D.offset,Q=(A=k.props.active)!==null&&A!==void 0?A:R;return U.cloneElement(k,{viewBox:oe(oe({},Y),{},{x:Y.left,y:Y.top}),active:Q,label:G,payload:Q?V:[],coordinate:F,accessibilityLayer:H})}),Ee(P,"renderBrush",function(A){var N=P.props,w=N.margin,H=N.data,k=P.state,D=k.offset,R=k.dataStartIndex,F=k.dataEndIndex,V=k.updateId;return U.cloneElement(A,{key:A.key||"_recharts-brush",onChange:x0(P.handleBrushChange,A.props.onChange),data:H,x:ce(A.props.x)?A.props.x:D.left,y:ce(A.props.y)?A.props.y:D.top+D.height+D.brushBottom-(w.bottom||0),width:ce(A.props.width)?A.props.width:D.width,startIndex:R,endIndex:F,updateId:"brush-".concat(V)})}),Ee(P,"renderReferenceElement",function(A,N,w){if(!A)return null;var H=P,k=H.clipPathId,D=P.state,R=D.xAxisMap,F=D.yAxisMap,V=D.offset,G=A.type.defaultProps||{},Y=A.props,Q=Y.xAxisId,$=Q===void 0?G.xAxisId:Q,K=Y.yAxisId,ne=K===void 0?G.yAxisId:K;return U.cloneElement(A,{key:A.key||"".concat(N,"-").concat(w),xAxis:R[$],yAxis:F[ne],viewBox:{x:V.left,y:V.top,width:V.width,height:V.height},clipPathId:k})}),Ee(P,"renderActivePoints",function(A){var N=A.item,w=A.activePoint,H=A.basePoint,k=A.childIndex,D=A.isRange,R=[],F=N.props.key,V=N.item.type.defaultProps!==void 0?oe(oe({},N.item.type.defaultProps),N.item.props):N.item.props,G=V.activeDot,Y=V.dataKey,Q=oe(oe({index:k,dataKey:Y,cx:w.x,cy:w.y,r:4,fill:sy(N.item),strokeWidth:2,stroke:"#fff",payload:w.payload,value:w.value},Oe(G,!1)),k0(G));return R.push(W.renderActiveDot(G,Q,"".concat(F,"-activePoint-").concat(k))),H?R.push(W.renderActiveDot(G,oe(oe({},Q),{},{cx:H.x,cy:H.y}),"".concat(F,"-basePoint-").concat(k))):D&&R.push(null),R}),Ee(P,"renderGraphicChild",function(A,N,w){var H=P.filterFormatItem(A,N,w);if(!H)return null;var k=P.getTooltipEventType(),D=P.state,R=D.isTooltipActive,F=D.tooltipAxis,V=D.activeTooltipIndex,G=D.activeLabel,Y=P.props.children,Q=St(Y,Mt),$=H.props,K=$.points,ne=$.isRange,T=$.baseLine,L=H.item.type.defaultProps!==void 0?oe(oe({},H.item.type.defaultProps),H.item.props):H.item.props,Z=L.activeDot,se=L.hide,he=L.activeBar,Ie=L.activeShape,Be=!!(!se&&R&&Q&&(Z||he||Ie)),de={};k!=="axis"&&Q&&Q.props.trigger==="click"?de={onClick:x0(P.handleItemMouseEnter,A.props.onClick)}:k!=="axis"&&(de={onMouseLeave:x0(P.handleItemMouseLeave,A.props.onMouseLeave),onMouseEnter:x0(P.handleItemMouseEnter,A.props.onMouseEnter)});var ae=U.cloneElement(A,oe(oe({},H.props),de));function re(gn){return typeof F.dataKey=="function"?F.dataKey(gn.payload):null}if(Be)if(V>=0){var ie,J;if(F.dataKey&&!F.allowDuplicatedCategory){var ge=typeof F.dataKey=="function"?re:"payload.".concat(F.dataKey.toString());ie=R0(K,ge,G),J=ne&&T&&R0(T,ge,G)}else ie=K==null?void 0:K[V],J=ne&&T&&T[V];if(Ie||he){var me=A.props.activeIndex!==void 0?A.props.activeIndex:V;return[U.cloneElement(A,oe(oe(oe({},H.props),de),{},{activeIndex:me})),null,null]}if(!ke(ie))return[ae].concat(Fi(P.renderActivePoints({item:H,activePoint:ie,basePoint:J,childIndex:V,isRange:ne})))}else{var ye,ve=(ye=P.getItemByXY(P.state.activeCoordinate))!==null&&ye!==void 0?ye:{graphicalItem:ae},Pe=ve.graphicalItem,je=Pe.item,qe=je===void 0?A:je,Ke=Pe.childIndex,xn=oe(oe(oe({},H.props),de),{},{activeIndex:Ke});return[U.cloneElement(qe,xn),null,null]}return ne?[ae,null,null]:[ae,null]}),Ee(P,"renderCustomized",function(A,N,w){return U.cloneElement(A,oe(oe({key:"recharts-customized-".concat(w)},P.props),P.state))}),Ee(P,"renderMap",{CartesianGrid:{handler:M0,once:!0},ReferenceArea:{handler:P.renderReferenceElement},ReferenceLine:{handler:M0},ReferenceDot:{handler:P.renderReferenceElement},XAxis:{handler:M0},YAxis:{handler:M0},Brush:{handler:P.renderBrush,once:!0},Bar:{handler:P.renderGraphicChild},Line:{handler:P.renderGraphicChild},Area:{handler:P.renderGraphicChild},Radar:{handler:P.renderGraphicChild},RadialBar:{handler:P.renderGraphicChild},Scatter:{handler:P.renderGraphicChild},Pie:{handler:P.renderGraphicChild},Funnel:{handler:P.renderGraphicChild},Tooltip:{handler:P.renderCursor,once:!0},PolarGrid:{handler:P.renderPolarGrid,once:!0},PolarAngleAxis:{handler:P.renderPolarAxis},PolarRadiusAxis:{handler:P.renderPolarAxis},Customized:{handler:P.renderCustomized}}),P.clipPathId="".concat((M=S.id)!==null&&M!==void 0?M:Da("recharts"),"-clip"),P.throttleTriggeredAfterMouseMove=_S(P.triggeredAfterMouseMove,(O=S.throttleDelay)!==null&&O!==void 0?O:1e3/60),P.state={},P}return vY(W,b),fY(W,[{key:"componentDidMount",value:function(){var M,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(M=this.props.margin.left)!==null&&M!==void 0?M:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var M=this.props,O=M.children,P=M.data,A=M.height,N=M.layout,w=St(O,Mt);if(w){var H=w.props.defaultIndex;if(!(typeof H!="number"||H<0||H>this.state.tooltipTicks.length-1)){var k=this.state.tooltipTicks[H]&&this.state.tooltipTicks[H].value,D=pg(this.state,P,H,k),R=this.state.tooltipTicks[H].coordinate,F=(this.state.offset.top+A)/2,V=N==="horizontal",G=V?{x:R,y:F}:{y:R,x:F},Y=this.state.formattedGraphicalItems.find(function($){var K=$.item;return K.type.name==="Scatter"});Y&&(G=oe(oe({},G),Y.props.points[H].tooltipPosition),D=Y.props.points[H].tooltipPayload);var Q={activeTooltipIndex:H,isTooltipActive:!0,activeLabel:k,activePayload:D,activeCoordinate:G};this.setState(Q),this.renderCursor(w),this.accessibilityManager.setIndex(H)}}}},{key:"getSnapshotBeforeUpdate",value:function(M,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==M.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==M.margin){var P,A;this.accessibilityManager.setDetails({offset:{left:(P=this.props.margin.left)!==null&&P!==void 0?P:0,top:(A=this.props.margin.top)!==null&&A!==void 0?A:0}})}return null}},{key:"componentDidUpdate",value:function(M){$6([St(M.children,Mt)],[St(this.props.children,Mt)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var M=St(this.props.children,Mt);if(M&&typeof M.props.shared=="boolean"){var O=M.props.shared?"axis":"item";return s.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(M){if(!this.container)return null;var O=this.container,P=O.getBoundingClientRect(),A=s$(P),N={chartX:Math.round(M.pageX-A.left),chartY:Math.round(M.pageY-A.top)},w=P.width/O.offsetWidth||1,H=this.inRange(N.chartX,N.chartY,w);if(!H)return null;var k=this.state,D=k.xAxisMap,R=k.yAxisMap,F=this.getTooltipEventType(),V=MW(this.state,this.props.data,this.props.layout,H);if(F!=="axis"&&D&&R){var G=Sa(D).scale,Y=Sa(R).scale,Q=G&&G.invert?G.invert(N.chartX):null,$=Y&&Y.invert?Y.invert(N.chartY):null;return oe(oe({},N),{},{xValue:Q,yValue:$},V)}return V?oe(oe({},N),V):null}},{key:"inRange",value:function(M,O){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=this.props.layout,N=M/P,w=O/P;if(A==="horizontal"||A==="vertical"){var H=this.state.offset,k=N>=H.left&&N<=H.left+H.width&&w>=H.top&&w<=H.top+H.height;return k?{x:N,y:w}:null}var D=this.state,R=D.angleAxisMap,F=D.radiusAxisMap;if(R&&F){var V=Sa(R);return A4({x:N,y:w},V)}return null}},{key:"parseEventsOfWrapper",value:function(){var M=this.props.children,O=this.getTooltipEventType(),P=St(M,Mt),A={};P&&O==="axis"&&(P.props.trigger==="click"?A={onClick:this.handleClick}:A={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=k0(this.props,this.handleOuterEvent);return oe(oe({},N),A)}},{key:"addListener",value:function(){x6.on(P6,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){x6.removeListener(P6,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(M,O,P){for(var A=this.state.formattedGraphicalItems,N=0,w=A.length;N<w;N++){var H=A[N];if(H.item===M||H.props.key===M.key||O===Ur(H.item.type)&&P===H.childIndex)return H}return null}},{key:"renderClipPath",value:function(){var M=this.clipPathId,O=this.state.offset,P=O.left,A=O.top,N=O.height,w=O.width;return E.createElement("defs",null,E.createElement("clipPath",{id:M},E.createElement("rect",{x:P,y:A,height:N,width:w})))}},{key:"getXScales",value:function(){var M=this.state.xAxisMap;return M?Object.entries(M).reduce(function(O,P){var A=wW(P,2),N=A[0],w=A[1];return oe(oe({},O),{},Ee({},N,w.scale))},{}):null}},{key:"getYScales",value:function(){var M=this.state.yAxisMap;return M?Object.entries(M).reduce(function(O,P){var A=wW(P,2),N=A[0],w=A[1];return oe(oe({},O),{},Ee({},N,w.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(M){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(M){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(M){var O=this.state,P=O.formattedGraphicalItems,A=O.activeItem;if(P&&P.length)for(var N=0,w=P.length;N<w;N++){var H=P[N],k=H.props,D=H.item,R=D.type.defaultProps!==void 0?oe(oe({},D.type.defaultProps),D.props):D.props,F=Ur(D.type);if(F==="Bar"){var V=(k.data||[]).find(function($){return Oz(M,$)});if(V)return{graphicalItem:H,payload:V}}else if(F==="RadialBar"){var G=(k.data||[]).find(function($){return A4(M,$)});if(G)return{graphicalItem:H,payload:G}}else if(mc(H,A)||hc(H,A)||Lu(H,A)){var Y=JU({graphicalItem:H,activeTooltipItem:A,itemData:R.data}),Q=R.activeIndex===void 0?Y:R.activeIndex;return{graphicalItem:oe(oe({},H),{},{childIndex:Q}),payload:Lu(H,A)?R.data[Y]:H.props.data[Y]}}}return null}},{key:"render",value:function(){var M=this;if(!$B(this))return null;var O=this.props,P=O.children,A=O.className,N=O.width,w=O.height,H=O.style,k=O.compact,D=O.title,R=O.desc,F=WW(O,oY),V=Oe(F,!1);if(k)return E.createElement(nW,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement(F6,ui({},V,{width:N,height:w,title:D,desc:R}),this.renderClipPath(),FB(P,this.renderMap)));if(this.props.accessibilityLayer){var G,Y;V.tabIndex=(G=this.props.tabIndex)!==null&&G!==void 0?G:0,V.role=(Y=this.props.role)!==null&&Y!==void 0?Y:"application",V.onKeyDown=function($){M.accessibilityManager.keyboardEvent($)},V.onFocus=function(){M.accessibilityManager.focus()}}var Q=this.parseEventsOfWrapper();return E.createElement(nW,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement("div",ui({className:De("recharts-wrapper",A),style:oe({position:"relative",cursor:"default",width:N,height:w},H)},Q,{ref:function(K){M.container=K}}),E.createElement(F6,ui({},V,{width:N,height:w,title:D,desc:R,style:xY}),this.renderClipPath(),FB(P,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(U.Component);Ee(B,"displayName",t),Ee(B,"defaultProps",oe({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Ee(B,"getDerivedStateFromProps",function(b,W){var S=b.dataKey,M=b.data,O=b.children,P=b.width,A=b.height,N=b.layout,w=b.stackOffset,H=b.margin,k=W.dataStartIndex,D=W.dataEndIndex;if(W.updateId===void 0){var R=AW(b);return oe(oe(oe({},R),{},{updateId:0},y(oe(oe({props:b},R),{},{updateId:0}),W)),{},{prevDataKey:S,prevData:M,prevWidth:P,prevHeight:A,prevLayout:N,prevStackOffset:w,prevMargin:H,prevChildren:O})}if(S!==W.prevDataKey||M!==W.prevData||P!==W.prevWidth||A!==W.prevHeight||N!==W.prevLayout||w!==W.prevStackOffset||!si(H,W.prevMargin)){var F=AW(b),V={chartX:W.chartX,chartY:W.chartY,isTooltipActive:W.isTooltipActive},G=oe(oe({},MW(W,M,N)),{},{updateId:W.updateId+1}),Y=oe(oe(oe({},F),V),G);return oe(oe(oe({},Y),y(oe({props:b},Y),W)),{},{prevDataKey:S,prevData:M,prevWidth:P,prevHeight:A,prevLayout:N,prevStackOffset:w,prevMargin:H,prevChildren:O})}if(!$6(O,W.prevChildren)){var Q,$,K,ne,T=St(O,_i),L=T&&(Q=($=T.props)===null||$===void 0?void 0:$.startIndex)!==null&&Q!==void 0?Q:k,Z=T&&(K=(ne=T.props)===null||ne===void 0?void 0:ne.endIndex)!==null&&K!==void 0?K:D,se=L!==k||Z!==D,he=!ke(M),Ie=he&&!se?W.updateId:W.updateId+1;return oe(oe({updateId:Ie},y(oe(oe({props:b},W),{},{updateId:Ie,dataStartIndex:L,dataEndIndex:Z}),W)),{},{prevChildren:O,dataStartIndex:L,dataEndIndex:Z})}return null}),Ee(B,"renderActiveDot",function(b,W,S){var M;return U.isValidElement(b)?M=U.cloneElement(b,W):Re(b)?M=b(W):M=E.createElement(ts,W),E.createElement($e,{className:"recharts-active-dot",key:S},M)});var I=U.forwardRef(function(W,S){return E.createElement(B,ui({},W,{ref:S}))});return I.displayName=B.displayName,I},CY=wc({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cy}),NY=wc({chartName:"BarChart",GraphicalChild:Wr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cy}),RY=wc({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:dc},{axisType:"radiusAxis",AxisComp:cc}],formatAxisMap:L9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),kY=wc({chartName:"ComposedChart",GraphicalChild:[qr,Wo,Wr,xc],axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:Bc}],formatAxisMap:cy});const OW=({active:e,payload:n,label:t})=>e&&n&&n.length?_.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[_.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:t}),_.jsxs("div",{className:"space-y-1",children:[_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.totalSessions.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.humanEscalations.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),_.jsxs("span",{className:"text-gray-900",children:[n[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function t_({data:e,title:n,instanceId:t}){var y,B;const r=U.useId(),a=n||"Sessions & Escalation Trends",i=e.length<=3&&((B=(y=e[0])==null?void 0:y.week)==null?void 0:B.includes("2026")),u=t||r.replace(/:/g,"-"),s=`${n?n.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${u}`,c=`chart-${s}-${e.length}`,f=e.map((I,b)=>({...I,id:`${s}-${I.week.replace(/\s/g,"-")}-${b}`})),m=`colorSessions-${s}`,d=`colorEscalations-${s}`,v=`colorSessionsLine-${s}`;return _.jsxs(Ut,{className:"shadow-xl border-0",children:[_.jsx(Dl,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx(jl,{className:"text-2xl font-black text-gray-900",children:a}),_.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),_.jsx(Vt,{className:"p-6 bg-white",children:_.jsx(Dg,{width:"100%",height:400,children:i?_.jsxs(kY,{data:f,barGap:8,barCategoryGap:"20%",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),_.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),_.jsx(Ol,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ea,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(Mt,{content:_.jsx(OW,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c):_.jsxs(CY,{data:f,children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),_.jsx(Ol,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ea,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(Mt,{content:_.jsx(OW,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c)})})]})}const HW=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function r_({data:e,title:n}){const t=e.reduce((u,s)=>u+s.count,0),r=n||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((u,s)=>({...u,uniqueKey:`${a}-${u.channel.replace(/\s/g,"-")}-${u.count}-${s}`,id:`${a}-${s}`}));return _.jsxs(Ut,{children:[_.jsxs(Dl,{children:[_.jsx(jl,{children:r}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",t.toLocaleString()]})]}),_.jsx(Vt,{children:_.jsx(Dg,{width:"100%",height:300,children:_.jsxs(RY,{children:[_.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:u,percentage:s})=>`${u} (${s.toFixed(1)}%)`,children:i.map(u=>_.jsx(Xu,{fill:HW[i.indexOf(u)%HW.length]},u.uniqueKey))},`pie-${a}`),_.jsx(Mt,{formatter:(u,s,c)=>[`${u.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function EY({data:e}){const n=e.reduce((a,i)=>{const u=a.find(s=>s.product===i.product);return u?u.count+=i.count:a.push({...i}),a},[]),t=n.slice(0,10),r=n.reduce((a,i)=>a+i.count,0);return _.jsxs(Ut,{children:[_.jsxs(Dl,{children:[_.jsx(jl,{children:"Product Breakdown (Human Handled)"}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",t.length<n.length&&`(showing top ${t.length})`]})]}),_.jsx(Vt,{children:_.jsx(Dg,{width:"100%",height:300,children:_.jsxs(NY,{data:t,children:[_.jsx(Ol,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),_.jsx(Ea,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),_.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),_.jsx(Mt,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),_.jsx(Wr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function a_({className:e,...n}){return _.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:_.jsx("table",{"data-slot":"table",className:st("w-full caption-bottom text-sm",e),...n})})}function o_({className:e,...n}){return _.jsx("thead",{"data-slot":"table-header",className:st("[&_tr]:border-b",e),...n})}function i_({className:e,...n}){return _.jsx("tbody",{"data-slot":"table-body",className:st("[&_tr:last-child]:border-0",e),...n})}function fi({className:e,...n}){return _.jsx("tr",{"data-slot":"table-row",className:st("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...n})}function jr({className:e,...n}){return _.jsx("th",{"data-slot":"table-head",className:st("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function At({className:e,...n}){return _.jsx("td",{"data-slot":"table-cell",className:st("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function TY({data:e}){const[n,t]=U.useState(new Set),r=a=>{const i=new Set(n);i.has(a)?i.delete(a):i.add(a),t(i)};return _.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(a_,{children:[_.jsx(o_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(fi,{children:[_.jsx(jr,{className:"w-12"}),_.jsx(jr,{children:"Issue Type"}),_.jsx(jr,{className:"text-right",children:"Count"})]})}),_.jsx(i_,{children:e.flatMap((a,i)=>{const u=n.has(a.issue),s=[_.jsxs(fi,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[_.jsx(At,{children:u?_.jsx(YC,{className:"w-4 h-4"}):_.jsx(H6,{className:"w-4 h-4"})}),_.jsx(At,{className:"font-medium",children:a.issue}),_.jsx(At,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return u&&a.subIssues.forEach((c,f)=>{s.push(_.jsxs(fi,{className:"bg-blue-50",children:[_.jsx(At,{}),_.jsx(At,{className:"pl-8",children:_.jsxs("div",{children:[_.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),_.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((m,d)=>_.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",_.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${c.subType}-${m.product}-${d}`))})]})}),_.jsx(At,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),s})})]})})})}const Jp=50;function ri({field:e,currentField:n,direction:t,onSort:r,children:a}){return _.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,_.jsx(VC,{className:`w-4 h-4 ${n===e?"text-blue-600":"text-gray-400"}`})]})}function DY({data:e=[]}){const[n,t]=U.useState("createdAt"),[r,a]=U.useState("desc"),[i,u]=U.useState(0),s=U.useCallback(d=>{t(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),u(0)},[]),c=U.useMemo(()=>[...e].sort((d,v)=>{let y,B;return n==="createdAt"?(y=pr(d.createdAt).getTime(),B=pr(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(B)&&(B=-1/0)):(y=(d[n]||"").toLowerCase(),B=(v[n]||"").toLowerCase()),r==="asc"?y>B?1:y<B?-1:0:y<B?1:y>B?-1:0}),[e,n,r]),f=Math.ceil(c.length/Jp),m=U.useMemo(()=>c.slice(i*Jp,(i+1)*Jp),[c,i]);return _.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[_.jsxs("span",{children:["Showing ",_.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Jp+1,"–",Math.min((i+1)*Jp,c.length)]})," of ",_.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{onClick:()=>u(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(WI,{className:"w-4 h-4"})}),_.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),_.jsx("button",{onClick:()=>u(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(H6,{className:"w-4 h-4"})})]})]}),_.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(a_,{children:[_.jsx(o_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(fi,{children:[_.jsx(jr,{children:_.jsx(ri,{field:"createdAt",currentField:n,direction:r,onSort:s,children:"Date"})}),_.jsx(jr,{children:_.jsx(ri,{field:"channel",currentField:n,direction:r,onSort:s,children:"Channel"})}),_.jsx(jr,{children:_.jsx(ri,{field:"product",currentField:n,direction:r,onSort:s,children:"Product"})}),_.jsx(jr,{children:_.jsx(ri,{field:"issue",currentField:n,direction:r,onSort:s,children:"Issue"})}),_.jsx(jr,{children:_.jsx(ri,{field:"subType",currentField:n,direction:r,onSort:s,children:"Sub Type"})}),_.jsx(jr,{children:_.jsx(ri,{field:"handled",currentField:n,direction:r,onSort:s,children:"Handled By"})})]})}),_.jsx(i_,{children:m.length===0?_.jsx(fi,{children:_.jsx(At,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):m.map((d,v)=>_.jsxs(fi,{className:"hover:bg-blue-50/50 transition-colors",children:[_.jsx(At,{className:"whitespace-nowrap text-gray-700",children:bk(pr(d.createdAt))}),_.jsx(At,{children:_.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),_.jsx(At,{className:"text-gray-700",children:d.product||"-"}),_.jsx(At,{className:"text-gray-700",children:d.issue||"-"}),_.jsx(At,{className:"text-gray-500 text-xs",children:d.subType||"-"}),_.jsx(At,{children:_.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&_.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[_.jsx("button",{onClick:()=>u(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),_.jsx("button",{onClick:()=>u(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(WI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,_.jsx("button",{onClick:()=>u(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),_.jsx("button",{onClick:()=>u(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(H6,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>u(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function p_({metrics:e,topChannel:n,top5Products:t,top5Issues:r,monthCount:a}){return _.jsxs(Ut,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[_.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:_.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),_.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),_.jsxs(Vt,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[_.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),_.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),_.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),_.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),_.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(n==null?void 0:n.channel)||"N/A"}),_.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((n==null?void 0:n.percentage)||0).toFixed(1),"% Share"]})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[_.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:t.map((i,u)=>_.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[u+1,"."]})," ",i.product||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},u))})]}),_.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,u)=>_.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[u+1,"."]})," ",i.issue||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},u))})]})]})]})]})}function jY({monthsData:e,weeklyEscalation:n}){const t=e.flatMap(s=>s.data),r=k6(t),a=E6(t)[0],i=A3(t).slice(0,5),u=T6(t,5);return _.jsxs(_.Fragment,{children:[_.jsxs(Ut,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[_.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),_.jsx(Vt,{className:"p-5 relative z-10",children:_.jsxs("div",{className:"text-center text-white",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),_.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),_.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(s=>{const c=T6(s.data,3);return _.jsxs(Ut,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${s.colorFrom} ${s.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),_.jsx(Dl,{className:"text-white pb-3 pt-4 relative z-10",children:_.jsxs("div",{className:"text-center",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),s.shortName]}),_.jsx(jl,{className:"text-2xl font-black mb-3 drop-shadow",children:s.name}),_.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[_.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),_.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:s.data.length.toLocaleString()}),s.data.length<200&&_.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),_.jsxs(Vt,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[_.jsxs("div",{className:"space-y-2 mb-4",children:[_.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:_.jsxs("p",{className:"text-sm font-black text-green-700",children:[s.metrics.botPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.botHandled.toLocaleString()})]}),_.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:_.jsxs("p",{className:"text-sm font-black text-orange-700",children:[s.metrics.humanPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.humanHandled.toLocaleString()})]})]}),_.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[_.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),_.jsx("div",{className:"space-y-1.5",children:c.map((f,m)=>_.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[_.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),_.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},m))})]})]})]},s.name)})}),_.jsx(t_,{data:n,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(s=>_.jsx(r_,{data:s.channels,title:`${s.name} - Channels`},s.name))}),_.jsx(p_,{metrics:r,topChannel:a,top5Products:i,top5Issues:u,monthCount:e.length})]})}const u_="PASTE_YOUR_GITHUB_TOKEN_HERE",s_="samson-lgtm",l_="waggle-ai-dashboard",c_="uploaded-data.json",f_="gh-pages",$Y=`https://${s_}.github.io/${l_}/${c_}`,d_=`https://api.github.com/repos/${s_}/${l_}/contents/${c_}`,CW=async()=>{try{const e=await fetch(`${$Y}?t=${Date.now()}`);return e.ok?await e.json():[]}catch(e){return console.error("Failed to read cloud data",e),[]}},LY=async()=>{try{const e=await fetch(`${d_}?ref=${f_}`,{headers:{Authorization:`token ${u_}`,Accept:"application/vnd.github.v3+json"}});return e.ok?(await e.json()).sha:void 0}catch{return}},m_=async e=>{const n=await LY(),r={message:"Update uploaded dashboard data",content:btoa(unescape(encodeURIComponent(JSON.stringify(e,null,2)))),branch:f_};n&&(r.sha=n);const a=await fetch(d_,{method:"PUT",headers:{Authorization:`token ${u_}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const i=await a.text();throw new Error(`GitHub API error ${a.status}: ${i}`)}},FY=async()=>{await m_([])},qY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Inapp,2026-06-01,PM,Registration Issue,Ownership Transfer,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,PM,False PLPB,,Human
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,RV Mini Cam,Time Zone Issue,,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,4g mini,Connection,,Human
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Webapp,2026-06-01,PM,Contact Support,,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,4g mini,Connection,,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,PM,Login Issue,Wrong Email,Human
Webapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,PM,Device Removal,Old Device,Human
Inapp,2026-06-01,PM,Subs Activation,Missed Enter Discount,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,PM,Device Removal,Old Device,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,NA,Human Agent Transfer,,Human
Inapp,2026-06-01,PM,DNR,,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Webapp,2026-06-01,PM,Subs Cancellation,,Human
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-01,,,,Bot
Inapp,2026-06-02,PM,Device Removal,,Human
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,4g mini,Return & Refund,Subs Expensive,Human
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,PM,Device Query,Turn Off,Human
Inapp,2026-06-02,4g mini,Connection,,Human
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,PM,DNR,,Human
Inapp,2026-06-02,RV Mini Cam,Connection,,Human
Webapp,2026-06-02,PM,DNR,,Human
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,PM,Subs Cancellation,,Human
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,PM,Subs Renewal,Add On Query,Human
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Webapp,2026-06-02,,,,Bot
Inapp,2026-06-02,,,,Bot
Inapp,2026-06-02,PM,DNR,,Human
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,4g mini,Not Turning On,,Human
Inapp,2026-06-02,RV Mini Cam,Device Query,WiFi Capabilities,Human
Inapp,2026-06-02,,,,Bot
Webapp,2026-06-02,PM,DNR,,Human
Webapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Webapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,PM,DNR,,Human
Inapp,2026-06-03,4g mini,Connection,,Human
Inapp,2026-06-03,PM,DNR,,Human
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,PM,DNR,,Human
Webapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Webapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Webapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,PM,Subs Cancellation,,Human
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,PM,DNR,,Human
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,PM,Subs Cancellation,,Human
Inapp,2026-06-03,,,,Bot
Webapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,RV Mini Cam,Connection,,Human
Inapp,2026-06-03,PM,Subs Cancellation,,Human
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,PM,DNR,,Human
Inapp,2026-06-03,PM,DNR,,Human
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-03,RV Mini Cam,Connection,,Human
Inapp,2026-06-03,PM,Subs Activation,Pause Plan,Human
Inapp,2026-06-03,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,PM,DNR,,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,PM,Login Issue,Wrong Email,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,PM,Charging Query,Battery Percentage,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,PM,Registration Issue,QR Code,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,RV Mini Cam,Connection,,Human
Webapp,2026-06-04,PM,App Navigation,Unified,Human
Inapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,PM,Subs Activation,Combo Plan,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,4g Camera,Subs Activation,Subs Query,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,PM,DNR,,Human
Webapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Webapp,2026-06-04,,,,Bot
Webapp,2026-06-04,PM,Temp Difference,,Human
Inapp,2026-06-04,,,,Bot
Inapp,2026-06-05,RV Mini Cam,Device Query,WiFi Capabilities,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,Login Issue,Wrong Email,Human
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,NA,Waggel Insurance,NA,Human
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,Subs Mapping,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,4g mini,SIM Not Found,,Human
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,4g mini,Connection,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,PM,Subs Mapping,,Human
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,4g mini,Connection,,Human
Webapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,DNR,,Human
Inapp,2026-06-05,PM,Subs Mapping,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,4g mini,Connection,,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,PM,Subs Mapping,,Human
Inapp,2026-06-05,PM,DNR,,Human
Webapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Webapp,2026-06-05,PM,Subs Activation,Trial Plan,Human
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,4g mini,SIM Not Found,,Human
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,4g mini,Device Removal,,Human
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Webapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-05,,,,Bot
Inapp,2026-06-06,PM,Device Query,Reporting Intervel,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,DNR,,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,PM,Subs Activation,Discount Code Request,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,PM,DNR,,Human
Inapp,2026-06-06,PM,Device Removal,Ownership Transfer,Human
Inapp,2026-06-06,NA,Waggel Insurance,NA,Human
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,4g mini,Connection,,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,DNR,,Human
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,PM,Device Query,Turn On,Human,
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,PM,Subs Cancellation,,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,DNR,,Human
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,4g mini,Connection,,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,Device Removal,Wrong Email,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,GPS Issue,,Human
Inapp,2026-06-06,PM,Subs Activation,Discount Code Request,Human
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,Device Removal,,Human
Inapp,2026-06-06,4g mini,Device Removal,Different email,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,4g Camera,Subs Activation,Combo Plan,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,DNR,,Human
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,4g mini,Motion Detection,,Human
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,PM,Subs Activation,Payment Failed,Human,
Inapp,2026-06-06,PM,DNR,,Human
Webapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-06,,,,Bot
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,PM,Subs Activation,Unable to enter coupon code,Human
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,PM,Subs Activation,Payment Failed,Human
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,PM,DNR,,Human
Webapp,2026-06-07,PM,Subs Cancellation,,Human
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,PM,Waggle Cam Pro,Connection,Human
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,PM,Return & Refund,Subs Expensive,Human
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,Solar Panel,Device Query,Birds Disturbance,Human
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,PM,Device Removal,Ownership Transfer,Human
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,PM,DNR,,Human
Inapp,2026-06-07,PM,DNR,,Human
Inapp,2026-06-07,4g mini,App Navigation,Battery Percentage,Human
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,4g mini,Hardware Issue,Broke,Human,
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,RV Mini Cam,Connection,,Human,,
Webapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,4g mini,Connection,,Human,,
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,4g Camera,Charging Issue,,Human,,
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
Webapp,2026-06-07,,,,Bot
Inapp,2026-06-07,,,,Bot
`;function zY(){const[e,n]=U.useState([]),[t,r]=U.useState([]),[a,i]=U.useState("all"),[u,s]=U.useState("all"),[c,f]=U.useState([]),[m,d]=U.useState("overview"),v=U.useRef(null),[y,B]=U.useState(null),[I,b]=U.useState(!1),W="Samson@12",[S,M]=U.useState({open:!1,action:null}),[O,P]=U.useState(""),[A,N]=U.useState(""),[w,H]=U.useState(!1),k=re=>{P(""),N(""),H(!1),M({open:!0,action:re})},D=()=>{var re;O===W?(M({open:!1,action:null}),S.action==="add"?(re=v.current)==null||re.click():S.action==="clear"&&T()):(N("Incorrect password. Please try again."),P(""))},R=re=>{re.key==="Enter"&&D(),re.key==="Escape"&&M({open:!1,action:null})},F=U.useRef([]);U.useEffect(()=>{F.current=e},[e]);const[V,G]=U.useState(!1);U.useEffect(()=>{new URLSearchParams(window.location.search).get("admin")==="true"&&G(!0)},[]);const Y=re=>{if(!re)return re;const ie=re.trim(),J=ie.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(J){const[,ye,ve,Pe]=J;return`${Pe.padStart(2,"0")}-${ve.padStart(2,"0")}-${ye}`}const ge=ie.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(ge){const[,ye,ve,Pe]=ge;return parseInt(ye)>12?`${ye.padStart(2,"0")}-${ve.padStart(2,"0")}-${Pe}`:`${ve.padStart(2,"0")}-${ye.padStart(2,"0")}-${Pe}`}const me=new Date(ie);return isNaN(me.getTime())?ie:`${String(me.getDate()).padStart(2,"0")}-${String(me.getMonth()+1).padStart(2,"0")}-${me.getFullYear()}`},Q=re=>{if(!re)return"";const ie=re.trim().toLowerCase();return ie==="bot"||ie==="robot"?"Bot":ie==="human"||ie==="agent"?"Human":re.trim()},$=(re,...ie)=>{if(!re)return"";const J=ie.map(ge=>ge.toLowerCase().replace(/\s+/g,""));for(const ge of Object.keys(re)){const me=ge.trim().replace(/\r$/,"").toLowerCase().replace(/\s+/g,"");if(J.includes(me))return re[ge]||""}return""};U.useEffect(()=>{let re=[];mI.parse(qY,{header:!0,skipEmptyLines:!0,complete:async ie=>{re=ie.data.map(J=>({channel:$(J,"Channel"),createdAt:Y($(J,"Created at","createdAt","Created date","Date","date","Created Date")),product:$(J,"Product"),issue:$(J,"Issue"),subType:$(J,"Sub Type","subType"),handled:Q($(J,"Handled","Handled By","Handledby"))}));try{const J=await CW();Array.isArray(J)&&J.length>0&&(re=[...re,...J],b(!0))}catch(J){console.error("Error loading shared cloud data",J)}n(re)}})},[]);const K=U.useMemo(()=>{const re=["january","february","march","april","may","june","july","august","september","october","november","december"],ie=new Set;return e.forEach(J=>{try{const ge=pr(J.createdAt);if(!isNaN(ge.getTime())){const me=re[ge.getMonth()];ie.add(`${me}-${ge.getFullYear()}`)}}catch{}}),Array.from(ie).sort((J,ge)=>{const[me,ye]=J.split("-"),[ve,Pe]=ge.split("-");return ye!==Pe?parseInt(ye)-parseInt(Pe):re.indexOf(me)-re.indexOf(ve)})},[e]);U.useEffect(()=>{f(a&&a!=="all"?S3(a):[]),s("all")},[a]),U.useEffect(()=>{e.length>0&&L(a,u)},[u,a,e,m]);const ne=re=>{var J;const ie=(J=re.target.files)==null?void 0:J[0];ie&&(mI.parse(ie,{header:!0,skipEmptyLines:!0,complete:async ge=>{if(!ge.data.length){B({type:"error",message:"The CSV file appears to be empty."});return}const me=ge.data.map(Pe=>({channel:$(Pe,"Channel"),createdAt:Y($(Pe,"Created at","createdAt","Created date","Date","date","Created Date")),product:$(Pe,"Product"),issue:$(Pe,"Issue"),subType:$(Pe,"Sub Type","subType"),handled:Q($(Pe,"Handled","Handled By","Handledby"))})),ye=new Set(F.current.map(Pe=>`${Pe.channel}|${Pe.createdAt}|${Pe.product}|${Pe.issue}|${Pe.subType}|${Pe.handled}`)),ve=me.filter(Pe=>!ye.has(`${Pe.channel}|${Pe.createdAt}|${Pe.product}|${Pe.issue}|${Pe.subType}|${Pe.handled}`));if(ve.length>0)try{const je=[...await CW(),...ve];await m_(je),n(qe=>[...qe,...ve]),b(!0),B({type:"success",message:`Added ${ve.length} rows. Visible to all users.`}),setTimeout(()=>B(null),5e3)}catch(Pe){console.error("Failed to save to cloud",Pe),B({type:"error",message:"Failed to save data. Check Firebase config."}),setTimeout(()=>B(null),5e3)}else B({type:"error",message:"No new rows found."}),setTimeout(()=>B(null),5e3)}}),re.target.value="")},T=async()=>{if(confirm("Are you sure you want to remove all uploaded data for ALL users? This cannot be undone."))try{await FY(),b(!1),B({type:"success",message:"All uploaded data cleared for everyone. Reloading..."}),setTimeout(()=>window.location.reload(),1500)}catch(re){console.error("Failed to clear cloud data",re),B({type:"error",message:"Failed to clear data. Check Firebase config."})}},L=(re,ie,J)=>{let ge=e;if(re!=="all"?ge=e.filter(me=>{const ye=pr(me.createdAt);return R6(ye,re)}):ge=e.filter(me=>!isNaN(pr(me.createdAt).getTime())),ie!=="all"){const me=c.find(ye=>ye.value===ie);me&&(ge=ge.filter(ye=>M3(pr(ye.createdAt),me)))}r(ge)},Z=k6(t),se=E6(t),he=A3(t),Ie=Bk(t),Be=Ik(e,a),de=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],ae=(a==="all"?K:[a]).map((re,ie)=>{const J=e.filter(ve=>R6(pr(ve.createdAt),re)),[ge,me]=re.split("-"),ye=de[ie%de.length];return{name:`${ge.charAt(0).toUpperCase()+ge.slice(1)} ${me}`,shortName:`Month ${ie+1}`,data:J,metrics:k6(J),channels:E6(J),colorFrom:ye.from,colorTo:ye.to}});return _.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:[_.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[_.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[_.jsxs("div",{children:[_.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",_.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),_.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[_.jsxs("select",{value:a,onChange:re=>i(re.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[_.jsx("option",{value:"all",children:"All Months"}),K.map(re=>_.jsxs("option",{value:re,children:[re.split("-")[0].charAt(0).toUpperCase()+re.split("-")[0].slice(1)," ",re.split("-")[1]]},re))]}),_.jsxs("select",{value:u,onChange:re=>s(re.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[_.jsx("option",{value:"all",children:"All Weeks"}),c.map(re=>_.jsx("option",{value:re.value,children:re.label},re.value))]}),_.jsx("input",{ref:v,type:"file",accept:".csv",onChange:ne,className:"hidden"}),_.jsxs(Lp,{onClick:()=>k("add"),variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[_.jsx(eN,{className:"w-4 h-4 mr-2"})," Add Data"]}),I&&_.jsxs(Lp,{onClick:()=>k("clear"),variant:"outline",className:"bg-white border-red-300 text-red-600",children:[_.jsx(lN,{className:"w-4 h-4 mr-2"})," Clear Data"]}),_.jsxs(Lp,{onClick:()=>xk(t),variant:"outline",className:"bg-white",children:[_.jsx(tN,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),y&&_.jsx(Ut,{className:`border ${y.type==="success"?"bg-green-50":"bg-red-50"}`,children:_.jsxs(Vt,{className:"p-4 flex items-center justify-between",children:[_.jsx("p",{className:"font-medium",children:y.message}),_.jsx("button",{onClick:()=>B(null),children:_.jsx(SI,{className:"w-4 h-4"})})]})}),a==="all"&&_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[_.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),_.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?_.jsx(jY,{monthsData:ae,weeklyEscalation:Be}):_.jsxs(_.Fragment,{children:[_.jsx(Pk,{metrics:Z}),_.jsx(p_,{metrics:Z,topChannel:se[0],top5Products:he.slice(0,5),top5Issues:T6(t,5),monthCount:a==="all"?K.length:1}),_.jsx(t_,{data:Be,instanceId:"detailed-analysis"}),_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[_.jsx(r_,{data:se}),_.jsx(EY,{data:he})]}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs(jC,{defaultValue:"issues",className:"w-full",children:[_.jsxs($C,{className:"grid w-full grid-cols-2 max-w-md",children:[_.jsx(xI,{value:"issues",children:"Issue Analysis"}),_.jsx(xI,{value:"sessions",children:"Detailed Sessions"})]}),_.jsx(PI,{value:"issues",className:"mt-6",children:_.jsx(TY,{data:Ie})}),_.jsx(PI,{value:"sessions",className:"mt-6",children:_.jsx(DY,{data:t})})]})})})]})]}),S.open&&_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:_.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6",children:[_.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center",children:_.jsx(uN,{className:"w-5 h-5 text-blue-600"})}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:S.action==="add"?"Add Data":"Clear Uploads"}),_.jsx("p",{className:"text-sm text-gray-500",children:"Enter the admin password to continue"})]}),_.jsx("button",{onClick:()=>M({open:!1,action:null}),className:"ml-auto text-gray-400 hover:text-gray-600",children:_.jsx(SI,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"relative mb-4",children:[_.jsx("input",{autoFocus:!0,type:w?"text":"password",value:O,onChange:re=>{P(re.target.value),N("")},onKeyDown:R,placeholder:"Password",className:"w-full h-10 border border-gray-300 rounded-lg px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),_.jsx("button",{type:"button",onClick:()=>H(re=>!re),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:w?_.jsx(aN,{className:"w-4 h-4"}):_.jsx(iN,{className:"w-4 h-4"})})]}),A&&_.jsx("p",{className:"text-red-500 text-sm mb-3",children:A}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx(Lp,{variant:"outline",className:"flex-1",onClick:()=>M({open:!1,action:null}),children:"Cancel"}),_.jsx(Lp,{className:`flex-1 ${S.action==="clear"?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"} text-white`,onClick:D,children:S.action==="add"?"Unlock & Upload":"Unlock & Clear"})]})]})})]})}IH.createRoot(document.getElementById("root")).render(_.jsx(zY,{}));
