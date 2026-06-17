var lH=Object.defineProperty;var cH=(n,e,t)=>e in n?lH(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pn=(n,e,t)=>cH(n,typeof e!="symbol"?e+"":e,t);function fH(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mf={exports:{}},jp={},hf={exports:{}},qn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI;function dH(){if(aI)return qn;aI=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=d&&T[d]||T["@@iterator"],typeof T=="function"?T:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function y(T,L,Z){this.props=T,this.context=L,this.refs=I,this.updater=Z||b}y.prototype.isReactComponent={},y.prototype.setState=function(T,L){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,L,"setState")},y.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function W(){}W.prototype=y.prototype;function S(T,L,Z){this.props=T,this.context=L,this.refs=I,this.updater=Z||b}var M=S.prototype=new W;M.constructor=S,B(M,y.prototype),M.isPureReactComponent=!0;var O=Array.isArray,P=Object.prototype.hasOwnProperty,A={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function w(T,L,Z){var ln,vn={},Bn=null,xn=null;if(L!=null)for(ln in L.ref!==void 0&&(xn=L.ref),L.key!==void 0&&(Bn=""+L.key),L)P.call(L,ln)&&!N.hasOwnProperty(ln)&&(vn[ln]=L[ln]);var mn=arguments.length-2;if(mn===1)vn.children=Z;else if(1<mn){for(var an=Array(mn),rn=0;rn<mn;rn++)an[rn]=arguments[rn+2];vn.children=an}if(T&&T.defaultProps)for(ln in mn=T.defaultProps,mn)vn[ln]===void 0&&(vn[ln]=mn[ln]);return{$$typeof:n,type:T,key:Bn,ref:xn,props:vn,_owner:A.current}}function H(T,L){return{$$typeof:n,type:T.type,key:L,ref:T.ref,props:T.props,_owner:T._owner}}function k(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function D(T){var L={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return L[Z]})}var R=/\/+/g;function F(T,L){return typeof T=="object"&&T!==null&&T.key!=null?D(""+T.key):L.toString(36)}function V(T,L,Z,ln,vn){var Bn=typeof T;(Bn==="undefined"||Bn==="boolean")&&(T=null);var xn=!1;if(T===null)xn=!0;else switch(Bn){case"string":case"number":xn=!0;break;case"object":switch(T.$$typeof){case n:case e:xn=!0}}if(xn)return xn=T,vn=vn(xn),T=ln===""?"."+F(xn,0):ln,O(vn)?(Z="",T!=null&&(Z=T.replace(R,"$&/")+"/"),V(vn,L,Z,"",function(rn){return rn})):vn!=null&&(k(vn)&&(vn=H(vn,Z+(!vn.key||xn&&xn.key===vn.key?"":(""+vn.key).replace(R,"$&/")+"/")+T)),L.push(vn)),1;if(xn=0,ln=ln===""?".":ln+":",O(T))for(var mn=0;mn<T.length;mn++){Bn=T[mn];var an=ln+F(Bn,mn);xn+=V(Bn,L,Z,an,vn)}else if(an=v(T),typeof an=="function")for(T=an.call(T),mn=0;!(Bn=T.next()).done;)Bn=Bn.value,an=ln+F(Bn,mn++),xn+=V(Bn,L,Z,an,vn);else if(Bn==="object")throw L=String(T),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return xn}function G(T,L,Z){if(T==null)return T;var ln=[],vn=0;return V(T,ln,"","",function(Bn){return L.call(Z,Bn,vn++)}),ln}function Y(T){if(T._status===-1){var L=T._result;L=L(),L.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=L)}if(T._status===1)return T._result.default;throw T._result}var Q={current:null},$={transition:null},K={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:$,ReactCurrentOwner:A};function en(){throw Error("act(...) is not supported in production builds of React.")}return qn.Children={map:G,forEach:function(T,L,Z){G(T,function(){L.apply(this,arguments)},Z)},count:function(T){var L=0;return G(T,function(){L++}),L},toArray:function(T){return G(T,function(L){return L})||[]},only:function(T){if(!k(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},qn.Component=y,qn.Fragment=t,qn.Profiler=a,qn.PureComponent=S,qn.StrictMode=r,qn.Suspense=c,qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,qn.act=en,qn.cloneElement=function(T,L,Z){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ln=B({},T.props),vn=T.key,Bn=T.ref,xn=T._owner;if(L!=null){if(L.ref!==void 0&&(Bn=L.ref,xn=A.current),L.key!==void 0&&(vn=""+L.key),T.type&&T.type.defaultProps)var mn=T.type.defaultProps;for(an in L)P.call(L,an)&&!N.hasOwnProperty(an)&&(ln[an]=L[an]===void 0&&mn!==void 0?mn[an]:L[an])}var an=arguments.length-2;if(an===1)ln.children=Z;else if(1<an){mn=Array(an);for(var rn=0;rn<an;rn++)mn[rn]=arguments[rn+2];ln.children=mn}return{$$typeof:n,type:T.type,key:vn,ref:Bn,props:ln,_owner:xn}},qn.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:i,_context:T},T.Consumer=T},qn.createElement=w,qn.createFactory=function(T){var L=w.bind(null,T);return L.type=T,L},qn.createRef=function(){return{current:null}},qn.forwardRef=function(T){return{$$typeof:s,render:T}},qn.isValidElement=k,qn.lazy=function(T){return{$$typeof:m,_payload:{_status:-1,_result:T},_init:Y}},qn.memo=function(T,L){return{$$typeof:f,type:T,compare:L===void 0?null:L}},qn.startTransition=function(T){var L=$.transition;$.transition={};try{T()}finally{$.transition=L}},qn.unstable_act=en,qn.useCallback=function(T,L){return Q.current.useCallback(T,L)},qn.useContext=function(T){return Q.current.useContext(T)},qn.useDebugValue=function(){},qn.useDeferredValue=function(T){return Q.current.useDeferredValue(T)},qn.useEffect=function(T,L){return Q.current.useEffect(T,L)},qn.useId=function(){return Q.current.useId()},qn.useImperativeHandle=function(T,L,Z){return Q.current.useImperativeHandle(T,L,Z)},qn.useInsertionEffect=function(T,L){return Q.current.useInsertionEffect(T,L)},qn.useLayoutEffect=function(T,L){return Q.current.useLayoutEffect(T,L)},qn.useMemo=function(T,L){return Q.current.useMemo(T,L)},qn.useReducer=function(T,L,Z){return Q.current.useReducer(T,L,Z)},qn.useRef=function(T){return Q.current.useRef(T)},qn.useState=function(T){return Q.current.useState(T)},qn.useSyncExternalStore=function(T,L,Z){return Q.current.useSyncExternalStore(T,L,Z)},qn.useTransition=function(){return Q.current.useTransition()},qn.version="18.3.1",qn}var oI;function ug(){return oI||(oI=1,hf.exports=dH()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function mH(){if(iI)return jp;iI=1;var n=ug(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(s,c,f){var m,d={},v=null,b=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(b=c.ref);for(m in c)r.call(c,m)&&!i.hasOwnProperty(m)&&(d[m]=c[m]);if(s&&s.defaultProps)for(m in c=s.defaultProps,c)d[m]===void 0&&(d[m]=c[m]);return{$$typeof:e,type:s,key:v,ref:b,props:d,_owner:a.current}}return jp.Fragment=t,jp.jsx=u,jp.jsxs=u,jp}var pI;function hH(){return pI||(pI=1,mf.exports=mH()),mf.exports}var _=hH(),cs={},vf={exports:{}},gt={},gf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI;function vH(){return uI||(uI=1,(function(n){function e($,K){var en=$.length;$.push(K);n:for(;0<en;){var T=en-1>>>1,L=$[T];if(0<a(L,K))$[T]=K,$[en]=L,en=T;else break n}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],en=$.pop();if(en!==K){$[0]=en;n:for(var T=0,L=$.length,Z=L>>>1;T<Z;){var ln=2*(T+1)-1,vn=$[ln],Bn=ln+1,xn=$[Bn];if(0>a(vn,en))Bn<L&&0>a(xn,vn)?($[T]=xn,$[Bn]=en,T=Bn):($[T]=vn,$[ln]=en,T=ln);else if(Bn<L&&0>a(xn,en))$[T]=xn,$[Bn]=en,T=Bn;else break n}}return K}function a($,K){var en=$.sortIndex-K.sortIndex;return en!==0?en:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();n.unstable_now=function(){return u.now()-s}}var c=[],f=[],m=1,d=null,v=3,b=!1,B=!1,I=!1,y=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M($){for(var K=t(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=$)r(f),K.sortIndex=K.expirationTime,e(c,K);else break;K=t(f)}}function O($){if(I=!1,M($),!B)if(t(c)!==null)B=!0,Y(P);else{var K=t(f);K!==null&&Q(O,K.startTime-$)}}function P($,K){B=!1,I&&(I=!1,W(w),w=-1),b=!0;var en=v;try{for(M(K),d=t(c);d!==null&&(!(d.expirationTime>K)||$&&!D());){var T=d.callback;if(typeof T=="function"){d.callback=null,v=d.priorityLevel;var L=T(d.expirationTime<=K);K=n.unstable_now(),typeof L=="function"?d.callback=L:d===t(c)&&r(c),M(K)}else r(c);d=t(c)}if(d!==null)var Z=!0;else{var ln=t(f);ln!==null&&Q(O,ln.startTime-K),Z=!1}return Z}finally{d=null,v=en,b=!1}}var A=!1,N=null,w=-1,H=5,k=-1;function D(){return!(n.unstable_now()-k<H)}function R(){if(N!==null){var $=n.unstable_now();k=$;var K=!0;try{K=N(!0,$)}finally{K?F():(A=!1,N=null)}}else A=!1}var F;if(typeof S=="function")F=function(){S(R)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,G=V.port2;V.port1.onmessage=R,F=function(){G.postMessage(null)}}else F=function(){y(R,0)};function Y($){N=$,A||(A=!0,F())}function Q($,K){w=y(function(){$(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_continueExecution=function(){B||b||(B=!0,Y(P))},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(c)},n.unstable_next=function($){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var en=v;v=K;try{return $()}finally{v=en}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var en=v;v=$;try{return K()}finally{v=en}},n.unstable_scheduleCallback=function($,K,en){var T=n.unstable_now();switch(typeof en=="object"&&en!==null?(en=en.delay,en=typeof en=="number"&&0<en?T+en:T):en=T,$){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=en+L,$={id:m++,callback:K,priorityLevel:$,startTime:en,expirationTime:L,sortIndex:-1},en>T?($.sortIndex=en,e(f,$),t(c)===null&&$===t(f)&&(I?(W(w),w=-1):I=!0,Q(O,en-T))):($.sortIndex=L,e(c,$),B||b||(B=!0,Y(P))),$},n.unstable_shouldYield=D,n.unstable_wrapCallback=function($){var K=v;return function(){var en=v;v=K;try{return $.apply(this,arguments)}finally{v=en}}}})(bf)),bf}var sI;function gH(){return sI||(sI=1,gf.exports=vH()),gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function bH(){if(lI)return gt;lI=1;var n=ug(),e=gH();function t(o){for(var p="https://reactjs.org/docs/error-decoder.html?invariant="+o,l=1;l<arguments.length;l++)p+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+o+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,p){u(o,p),u(o+"Capture",p)}function u(o,p){for(a[o]=p,o=0;o<p.length;o++)r.add(p[o])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return c.call(d,o)?!0:c.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function b(o,p,l,h){if(l!==null&&l.type===0)return!1;switch(typeof p){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function B(o,p,l,h){if(p===null||typeof p>"u"||b(o,p,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!p;case 4:return p===!1;case 5:return isNaN(p);case 6:return isNaN(p)||1>p}return!1}function I(o,p,l,h,g,x,C){this.acceptsBooleans=p===2||p===3||p===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=o,this.type=p,this.sanitizeURL=x,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){y[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var p=o[0];y[p]=new I(p,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){y[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){y[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){y[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){y[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){y[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){y[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){y[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function S(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var p=o.replace(W,S);y[p]=new I(p,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var p=o.replace(W,S);y[p]=new I(p,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var p=o.replace(W,S);y[p]=new I(p,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){y[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),y.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){y[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function M(o,p,l,h){var g=y.hasOwnProperty(p)?y[p]:null;(g!==null?g.type!==0:h||!(2<p.length)||p[0]!=="o"&&p[0]!=="O"||p[1]!=="n"&&p[1]!=="N")&&(B(p,l,g,h)&&(l=null),h||g===null?v(p)&&(l===null?o.removeAttribute(p):o.setAttribute(p,""+l)):g.mustUseProperty?o[g.propertyName]=l===null?g.type===3?!1:"":l:(p=g.attributeName,h=g.attributeNamespace,l===null?o.removeAttribute(p):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?o.setAttributeNS(h,p,l):o.setAttribute(p,l))))}var O=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),$=Symbol.iterator;function K(o){return o===null||typeof o!="object"?null:(o=$&&o[$]||o["@@iterator"],typeof o=="function"?o:null)}var en=Object.assign,T;function L(o){if(T===void 0)try{throw Error()}catch(l){var p=l.stack.trim().match(/\n( *(at )?)/);T=p&&p[1]||""}return`
`+T+o}var Z=!1;function ln(o,p){if(!o||Z)return"";Z=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(p)if(p=function(){throw Error()},Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(tn){var h=tn}Reflect.construct(o,[],p)}else{try{p.call()}catch(tn){h=tn}o.call(p.prototype)}else{try{throw Error()}catch(tn){h=tn}o()}}catch(tn){if(tn&&h&&typeof tn.stack=="string"){for(var g=tn.stack.split(`
`),x=h.stack.split(`
`),C=g.length-1,j=x.length-1;1<=C&&0<=j&&g[C]!==x[j];)j--;for(;1<=C&&0<=j;C--,j--)if(g[C]!==x[j]){if(C!==1||j!==1)do if(C--,j--,0>j||g[C]!==x[j]){var q=`
`+g[C].replace(" at new "," at ");return o.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",o.displayName)),q}while(1<=C&&0<=j);break}}}finally{Z=!1,Error.prepareStackTrace=l}return(o=o?o.displayName||o.name:"")?L(o):""}function vn(o){switch(o.tag){case 5:return L(o.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return o=ln(o.type,!1),o;case 11:return o=ln(o.type.render,!1),o;case 1:return o=ln(o.type,!0),o;default:return""}}function Bn(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case A:return"Portal";case H:return"Profiler";case w:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case D:return(o.displayName||"Context")+".Consumer";case k:return(o._context.displayName||"Context")+".Provider";case R:var p=o.render;return o=o.displayName,o||(o=p.displayName||p.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case G:return p=o.displayName||null,p!==null?p:Bn(o.type)||"Memo";case Y:p=o._payload,o=o._init;try{return Bn(o(p))}catch{}}return null}function xn(o){var p=o.type;switch(o.tag){case 24:return"Cache";case 9:return(p.displayName||"Context")+".Consumer";case 10:return(p._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=p.render,o=o.displayName||o.name||"",p.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return p;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bn(p);case 8:return p===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof p=="function")return p.displayName||p.name||null;if(typeof p=="string")return p}return null}function mn(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function an(o){var p=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(p==="checkbox"||p==="radio")}function rn(o){var p=an(o)?"checked":"value",l=Object.getOwnPropertyDescriptor(o.constructor.prototype,p),h=""+o[p];if(!o.hasOwnProperty(p)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(o,p,{configurable:!0,get:function(){return g.call(this)},set:function(C){h=""+C,x.call(this,C)}}),Object.defineProperty(o,p,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(C){h=""+C},stopTracking:function(){o._valueTracker=null,delete o[p]}}}}function pn(o){o._valueTracker||(o._valueTracker=rn(o))}function J(o){if(!o)return!1;var p=o._valueTracker;if(!p)return!0;var l=p.getValue(),h="";return o&&(h=an(o)?o.checked?"true":"false":o.value),o=h,o!==l?(p.setValue(o),!0):!1}function bn(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function hn(o,p){var l=p.checked;return en({},p,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??o._wrapperState.initialChecked})}function yn(o,p){var l=p.defaultValue==null?"":p.defaultValue,h=p.checked!=null?p.checked:p.defaultChecked;l=mn(p.value!=null?p.value:l),o._wrapperState={initialChecked:h,initialValue:l,controlled:p.type==="checkbox"||p.type==="radio"?p.checked!=null:p.value!=null}}function gn(o,p){p=p.checked,p!=null&&M(o,"checked",p,!1)}function wn(o,p){gn(o,p);var l=mn(p.value),h=p.type;if(l!=null)h==="number"?(l===0&&o.value===""||o.value!=l)&&(o.value=""+l):o.value!==""+l&&(o.value=""+l);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}p.hasOwnProperty("value")?zn(o,p.type,l):p.hasOwnProperty("defaultValue")&&zn(o,p.type,mn(p.defaultValue)),p.checked==null&&p.defaultChecked!=null&&(o.defaultChecked=!!p.defaultChecked)}function $n(o,p,l){if(p.hasOwnProperty("value")||p.hasOwnProperty("defaultValue")){var h=p.type;if(!(h!=="submit"&&h!=="reset"||p.value!==void 0&&p.value!==null))return;p=""+o._wrapperState.initialValue,l||p===o.value||(o.value=p),o.defaultValue=p}l=o.name,l!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,l!==""&&(o.name=l)}function zn(o,p,l){(p!=="number"||bn(o.ownerDocument)!==o)&&(l==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+l&&(o.defaultValue=""+l))}var Qn=Array.isArray;function xe(o,p,l,h){if(o=o.options,p){p={};for(var g=0;g<l.length;g++)p["$"+l[g]]=!0;for(l=0;l<o.length;l++)g=p.hasOwnProperty("$"+o[l].value),o[l].selected!==g&&(o[l].selected=g),g&&h&&(o[l].defaultSelected=!0)}else{for(l=""+mn(l),p=null,g=0;g<o.length;g++){if(o[g].value===l){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}p!==null||o[g].disabled||(p=o[g])}p!==null&&(p.selected=!0)}}function ge(o,p){if(p.dangerouslySetInnerHTML!=null)throw Error(t(91));return en({},p,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Ht(o,p){var l=p.value;if(l==null){if(l=p.children,p=p.defaultValue,l!=null){if(p!=null)throw Error(t(92));if(Qn(l)){if(1<l.length)throw Error(t(93));l=l[0]}p=l}p==null&&(p=""),l=p}o._wrapperState={initialValue:mn(l)}}function be(o,p){var l=mn(p.value),h=mn(p.defaultValue);l!=null&&(l=""+l,l!==o.value&&(o.value=l),p.defaultValue==null&&o.defaultValue!==l&&(o.defaultValue=l)),h!=null&&(o.defaultValue=""+h)}function Qe(o){var p=o.textContent;p===o._wrapperState.initialValue&&p!==""&&p!==null&&(o.value=p)}function Pe(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(o,p){return o==null||o==="http://www.w3.org/1999/xhtml"?Pe(p):o==="http://www.w3.org/2000/svg"&&p==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var ct,So=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(p,l,h,g){MSApp.execUnsafeLocalFunction(function(){return o(p,l,h,g)})}:o})(function(o,p){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=p;else{for(ct=ct||document.createElement("div"),ct.innerHTML="<svg>"+p.valueOf().toString()+"</svg>",p=ct.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;p.firstChild;)o.appendChild(p.firstChild)}});function ea(o,p){if(p){var l=o.firstChild;if(l&&l===o.lastChild&&l.nodeType===3){l.nodeValue=p;return}}o.textContent=p}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nt=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(o){Nt.forEach(function(p){p=p+o.charAt(0).toUpperCase()+o.substring(1),Ct[p]=Ct[o]})});function ta(o,p,l){return p==null||typeof p=="boolean"||p===""?"":l||typeof p!="number"||p===0||Ct.hasOwnProperty(o)&&Ct[o]?(""+p).trim():p+"px"}function tp(o,p){o=o.style;for(var l in p)if(p.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=ta(l,p[l],h);l==="float"&&(l="cssFloat"),h?o.setProperty(l,g):o[l]=g}}var h_=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function W2(o,p){if(p){if(h_[o]&&(p.children!=null||p.dangerouslySetInnerHTML!=null))throw Error(t(137,o));if(p.dangerouslySetInnerHTML!=null){if(p.children!=null)throw Error(t(60));if(typeof p.dangerouslySetInnerHTML!="object"||!("__html"in p.dangerouslySetInnerHTML))throw Error(t(61))}if(p.style!=null&&typeof p.style!="object")throw Error(t(62))}}function S2(o,p){if(o.indexOf("-")===-1)return typeof p.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M2=null;function A2(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var _2=null,Mo=null,Ao=null;function Bb(o){if(o=wp(o)){if(typeof _2!="function")throw Error(t(280));var p=o.stateNode;p&&(p=W0(p),_2(o.stateNode,o.type,p))}}function xb(o){Mo?Ao?Ao.push(o):Ao=[o]:Mo=o}function Pb(){if(Mo){var o=Mo,p=Ao;if(Ao=Mo=null,Bb(o),p)for(o=0;o<p.length;o++)Bb(p[o])}}function wb(o,p){return o(p)}function Wb(){}var O2=!1;function Sb(o,p,l){if(O2)return o(p,l);O2=!0;try{return wb(o,p,l)}finally{O2=!1,(Mo!==null||Ao!==null)&&(Wb(),Pb())}}function rp(o,p){var l=o.stateNode;if(l===null)return null;var h=W0(l);if(h===null)return null;l=h[p];n:switch(p){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break n;default:o=!1}if(o)return null;if(l&&typeof l!="function")throw Error(t(231,p,typeof l));return l}var H2=!1;if(s)try{var ap={};Object.defineProperty(ap,"passive",{get:function(){H2=!0}}),window.addEventListener("test",ap,ap),window.removeEventListener("test",ap,ap)}catch{H2=!1}function v_(o,p,l,h,g,x,C,j,q){var tn=Array.prototype.slice.call(arguments,3);try{p.apply(l,tn)}catch(sn){this.onError(sn)}}var op=!1,r0=null,a0=!1,C2=null,g_={onError:function(o){op=!0,r0=o}};function b_(o,p,l,h,g,x,C,j,q){op=!1,r0=null,v_.apply(g_,arguments)}function y_(o,p,l,h,g,x,C,j,q){if(b_.apply(this,arguments),op){if(op){var tn=r0;op=!1,r0=null}else throw Error(t(198));a0||(a0=!0,C2=tn)}}function Fa(o){var p=o,l=o;if(o.alternate)for(;p.return;)p=p.return;else{o=p;do p=o,(p.flags&4098)!==0&&(l=p.return),o=p.return;while(o)}return p.tag===3?l:null}function Mb(o){if(o.tag===13){var p=o.memoizedState;if(p===null&&(o=o.alternate,o!==null&&(p=o.memoizedState)),p!==null)return p.dehydrated}return null}function Ab(o){if(Fa(o)!==o)throw Error(t(188))}function I_(o){var p=o.alternate;if(!p){if(p=Fa(o),p===null)throw Error(t(188));return p!==o?null:o}for(var l=o,h=p;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return Ab(g),o;if(x===h)return Ab(g),p;x=x.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=x;else{for(var C=!1,j=g.child;j;){if(j===l){C=!0,l=g,h=x;break}if(j===h){C=!0,h=g,l=x;break}j=j.sibling}if(!C){for(j=x.child;j;){if(j===l){C=!0,l=x,h=g;break}if(j===h){C=!0,h=x,l=g;break}j=j.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?o:p}function _b(o){return o=I_(o),o!==null?Ob(o):null}function Ob(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var p=Ob(o);if(p!==null)return p;o=o.sibling}return null}var Hb=e.unstable_scheduleCallback,Cb=e.unstable_cancelCallback,B_=e.unstable_shouldYield,x_=e.unstable_requestPaint,we=e.unstable_now,P_=e.unstable_getCurrentPriorityLevel,N2=e.unstable_ImmediatePriority,Nb=e.unstable_UserBlockingPriority,o0=e.unstable_NormalPriority,w_=e.unstable_LowPriority,Rb=e.unstable_IdlePriority,i0=null,fr=null;function W_(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(i0,o,void 0,(o.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:A_,S_=Math.log,M_=Math.LN2;function A_(o){return o>>>=0,o===0?32:31-(S_(o)/M_|0)|0}var p0=64,u0=4194304;function ip(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function s0(o,p){var l=o.pendingLanes;if(l===0)return 0;var h=0,g=o.suspendedLanes,x=o.pingedLanes,C=l&268435455;if(C!==0){var j=C&~g;j!==0?h=ip(j):(x&=C,x!==0&&(h=ip(x)))}else C=l&~g,C!==0?h=ip(C):x!==0&&(h=ip(x));if(h===0)return 0;if(p!==0&&p!==h&&(p&g)===0&&(g=h&-h,x=p&-p,g>=x||g===16&&(x&4194240)!==0))return p;if((h&4)!==0&&(h|=l&16),p=o.entangledLanes,p!==0)for(o=o.entanglements,p&=h;0<p;)l=31-Xt(p),g=1<<l,h|=o[l],p&=~g;return h}function __(o,p){switch(o){case 1:case 2:case 4:return p+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return p+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O_(o,p){for(var l=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,x=o.pendingLanes;0<x;){var C=31-Xt(x),j=1<<C,q=g[C];q===-1?((j&l)===0||(j&h)!==0)&&(g[C]=__(j,p)):q<=p&&(o.expiredLanes|=j),x&=~j}}function R2(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function kb(){var o=p0;return p0<<=1,(p0&4194240)===0&&(p0=64),o}function k2(o){for(var p=[],l=0;31>l;l++)p.push(o);return p}function pp(o,p,l){o.pendingLanes|=p,p!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,p=31-Xt(p),o[p]=l}function H_(o,p){var l=o.pendingLanes&~p;o.pendingLanes=p,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=p,o.mutableReadLanes&=p,o.entangledLanes&=p,p=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<l;){var g=31-Xt(l),x=1<<g;p[g]=0,h[g]=-1,o[g]=-1,l&=~x}}function E2(o,p){var l=o.entangledLanes|=p;for(o=o.entanglements;l;){var h=31-Xt(l),g=1<<h;g&p|o[h]&p&&(o[h]|=p),l&=~g}}var Jn=0;function Eb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Tb,T2,Db,jb,$b,D2=!1,l0=[],ra=null,aa=null,oa=null,up=new Map,sp=new Map,ia=[],C_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lb(o,p){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":up.delete(p.pointerId);break;case"gotpointercapture":case"lostpointercapture":sp.delete(p.pointerId)}}function lp(o,p,l,h,g,x){return o===null||o.nativeEvent!==x?(o={blockedOn:p,domEventName:l,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},p!==null&&(p=wp(p),p!==null&&T2(p)),o):(o.eventSystemFlags|=h,p=o.targetContainers,g!==null&&p.indexOf(g)===-1&&p.push(g),o)}function N_(o,p,l,h,g){switch(p){case"focusin":return ra=lp(ra,o,p,l,h,g),!0;case"dragenter":return aa=lp(aa,o,p,l,h,g),!0;case"mouseover":return oa=lp(oa,o,p,l,h,g),!0;case"pointerover":var x=g.pointerId;return up.set(x,lp(up.get(x)||null,o,p,l,h,g)),!0;case"gotpointercapture":return x=g.pointerId,sp.set(x,lp(sp.get(x)||null,o,p,l,h,g)),!0}return!1}function Fb(o){var p=qa(o.target);if(p!==null){var l=Fa(p);if(l!==null){if(p=l.tag,p===13){if(p=Mb(l),p!==null){o.blockedOn=p,$b(o.priority,function(){Db(l)});return}}else if(p===3&&l.stateNode.current.memoizedState.isDehydrated){o.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}o.blockedOn=null}function c0(o){if(o.blockedOn!==null)return!1;for(var p=o.targetContainers;0<p.length;){var l=$2(o.domEventName,o.eventSystemFlags,p[0],o.nativeEvent);if(l===null){l=o.nativeEvent;var h=new l.constructor(l.type,l);M2=h,l.target.dispatchEvent(h),M2=null}else return p=wp(l),p!==null&&T2(p),o.blockedOn=l,!1;p.shift()}return!0}function qb(o,p,l){c0(o)&&l.delete(p)}function R_(){D2=!1,ra!==null&&c0(ra)&&(ra=null),aa!==null&&c0(aa)&&(aa=null),oa!==null&&c0(oa)&&(oa=null),up.forEach(qb),sp.forEach(qb)}function cp(o,p){o.blockedOn===p&&(o.blockedOn=null,D2||(D2=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,R_)))}function fp(o){function p(g){return cp(g,o)}if(0<l0.length){cp(l0[0],o);for(var l=1;l<l0.length;l++){var h=l0[l];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&cp(ra,o),aa!==null&&cp(aa,o),oa!==null&&cp(oa,o),up.forEach(p),sp.forEach(p),l=0;l<ia.length;l++)h=ia[l],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(l=ia[0],l.blockedOn===null);)Fb(l),l.blockedOn===null&&ia.shift()}var _o=O.ReactCurrentBatchConfig,f0=!0;function k_(o,p,l,h){var g=Jn,x=_o.transition;_o.transition=null;try{Jn=1,j2(o,p,l,h)}finally{Jn=g,_o.transition=x}}function E_(o,p,l,h){var g=Jn,x=_o.transition;_o.transition=null;try{Jn=4,j2(o,p,l,h)}finally{Jn=g,_o.transition=x}}function j2(o,p,l,h){if(f0){var g=$2(o,p,l,h);if(g===null)rc(o,p,h,d0,l),Lb(o,h);else if(N_(g,o,p,l,h))h.stopPropagation();else if(Lb(o,h),p&4&&-1<C_.indexOf(o)){for(;g!==null;){var x=wp(g);if(x!==null&&Tb(x),x=$2(o,p,l,h),x===null&&rc(o,p,h,d0,l),x===g)break;g=x}g!==null&&h.stopPropagation()}else rc(o,p,h,null,l)}}var d0=null;function $2(o,p,l,h){if(d0=null,o=A2(h),o=qa(o),o!==null)if(p=Fa(o),p===null)o=null;else if(l=p.tag,l===13){if(o=Mb(p),o!==null)return o;o=null}else if(l===3){if(p.stateNode.current.memoizedState.isDehydrated)return p.tag===3?p.stateNode.containerInfo:null;o=null}else p!==o&&(o=null);return d0=o,null}function zb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P_()){case N2:return 1;case Nb:return 4;case o0:case w_:return 16;case Rb:return 536870912;default:return 16}default:return 16}}var pa=null,L2=null,m0=null;function Ub(){if(m0)return m0;var o,p=L2,l=p.length,h,g="value"in pa?pa.value:pa.textContent,x=g.length;for(o=0;o<l&&p[o]===g[o];o++);var C=l-o;for(h=1;h<=C&&p[l-h]===g[x-h];h++);return m0=g.slice(o,1<h?1-h:void 0)}function h0(o){var p=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&p===13&&(o=13)):o=p,o===10&&(o=13),32<=o||o===13?o:0}function v0(){return!0}function Vb(){return!1}function It(o){function p(l,h,g,x,C){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var j in o)o.hasOwnProperty(j)&&(l=o[j],this[j]=l?l(x):x[j]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?v0:Vb,this.isPropagationStopped=Vb,this}return en(p.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=v0)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=v0)},persist:function(){},isPersistent:v0}),p}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},F2=It(Oo),dp=en({},Oo,{view:0,detail:0}),T_=It(dp),q2,z2,mp,g0=en({},dp,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V2,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==mp&&(mp&&o.type==="mousemove"?(q2=o.screenX-mp.screenX,z2=o.screenY-mp.screenY):z2=q2=0,mp=o),q2)},movementY:function(o){return"movementY"in o?o.movementY:z2}}),Gb=It(g0),D_=en({},g0,{dataTransfer:0}),j_=It(D_),$_=en({},dp,{relatedTarget:0}),U2=It($_),L_=en({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=It(L_),q_=en({},Oo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),z_=It(q_),U_=en({},Oo,{data:0}),Kb=It(U_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(o){var p=this.nativeEvent;return p.getModifierState?p.getModifierState(o):(o=K_[o])?!!p[o]:!1}function V2(){return Q_}var Y_=en({},dp,{key:function(o){if(o.key){var p=V_[o.key]||o.key;if(p!=="Unidentified")return p}return o.type==="keypress"?(o=h0(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?G_[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V2,charCode:function(o){return o.type==="keypress"?h0(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?h0(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),X_=It(Y_),Z_=en({},g0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qb=It(Z_),J_=en({},dp,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V2}),nO=It(J_),eO=en({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tO=It(eO),rO=en({},g0,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),aO=It(rO),oO=[9,13,27,32],G2=s&&"CompositionEvent"in window,hp=null;s&&"documentMode"in document&&(hp=document.documentMode);var iO=s&&"TextEvent"in window&&!hp,Yb=s&&(!G2||hp&&8<hp&&11>=hp),Xb=" ",Zb=!1;function Jb(o,p){switch(o){case"keyup":return oO.indexOf(p.keyCode)!==-1;case"keydown":return p.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Ho=!1;function pO(o,p){switch(o){case"compositionend":return ny(p);case"keypress":return p.which!==32?null:(Zb=!0,Xb);case"textInput":return o=p.data,o===Xb&&Zb?null:o;default:return null}}function uO(o,p){if(Ho)return o==="compositionend"||!G2&&Jb(o,p)?(o=Ub(),m0=L2=pa=null,Ho=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(p.ctrlKey||p.altKey||p.metaKey)||p.ctrlKey&&p.altKey){if(p.char&&1<p.char.length)return p.char;if(p.which)return String.fromCharCode(p.which)}return null;case"compositionend":return Yb&&p.locale!=="ko"?null:p.data;default:return null}}var sO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ey(o){var p=o&&o.nodeName&&o.nodeName.toLowerCase();return p==="input"?!!sO[o.type]:p==="textarea"}function ty(o,p,l,h){xb(h),p=x0(p,"onChange"),0<p.length&&(l=new F2("onChange","change",null,l,h),o.push({event:l,listeners:p}))}var vp=null,gp=null;function lO(o){Iy(o,0)}function b0(o){var p=Eo(o);if(J(p))return o}function cO(o,p){if(o==="change")return p}var ry=!1;if(s){var K2;if(s){var Q2="oninput"in document;if(!Q2){var ay=document.createElement("div");ay.setAttribute("oninput","return;"),Q2=typeof ay.oninput=="function"}K2=Q2}else K2=!1;ry=K2&&(!document.documentMode||9<document.documentMode)}function oy(){vp&&(vp.detachEvent("onpropertychange",iy),gp=vp=null)}function iy(o){if(o.propertyName==="value"&&b0(gp)){var p=[];ty(p,gp,o,A2(o)),Sb(lO,p)}}function fO(o,p,l){o==="focusin"?(oy(),vp=p,gp=l,vp.attachEvent("onpropertychange",iy)):o==="focusout"&&oy()}function dO(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return b0(gp)}function mO(o,p){if(o==="click")return b0(p)}function hO(o,p){if(o==="input"||o==="change")return b0(p)}function vO(o,p){return o===p&&(o!==0||1/o===1/p)||o!==o&&p!==p}var Zt=typeof Object.is=="function"?Object.is:vO;function bp(o,p){if(Zt(o,p))return!0;if(typeof o!="object"||o===null||typeof p!="object"||p===null)return!1;var l=Object.keys(o),h=Object.keys(p);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!c.call(p,g)||!Zt(o[g],p[g]))return!1}return!0}function py(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function uy(o,p){var l=py(o);o=0;for(var h;l;){if(l.nodeType===3){if(h=o+l.textContent.length,o<=p&&h>=p)return{node:l,offset:p-o};o=h}n:{for(;l;){if(l.nextSibling){l=l.nextSibling;break n}l=l.parentNode}l=void 0}l=py(l)}}function sy(o,p){return o&&p?o===p?!0:o&&o.nodeType===3?!1:p&&p.nodeType===3?sy(o,p.parentNode):"contains"in o?o.contains(p):o.compareDocumentPosition?!!(o.compareDocumentPosition(p)&16):!1:!1}function ly(){for(var o=window,p=bn();p instanceof o.HTMLIFrameElement;){try{var l=typeof p.contentWindow.location.href=="string"}catch{l=!1}if(l)o=p.contentWindow;else break;p=bn(o.document)}return p}function Y2(o){var p=o&&o.nodeName&&o.nodeName.toLowerCase();return p&&(p==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||p==="textarea"||o.contentEditable==="true")}function gO(o){var p=ly(),l=o.focusedElem,h=o.selectionRange;if(p!==l&&l&&l.ownerDocument&&sy(l.ownerDocument.documentElement,l)){if(h!==null&&Y2(l)){if(p=h.start,o=h.end,o===void 0&&(o=p),"selectionStart"in l)l.selectionStart=p,l.selectionEnd=Math.min(o,l.value.length);else if(o=(p=l.ownerDocument||document)&&p.defaultView||window,o.getSelection){o=o.getSelection();var g=l.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!o.extend&&x>h&&(g=h,h=x,x=g),g=uy(l,x);var C=uy(l,h);g&&C&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==C.node||o.focusOffset!==C.offset)&&(p=p.createRange(),p.setStart(g.node,g.offset),o.removeAllRanges(),x>h?(o.addRange(p),o.extend(C.node,C.offset)):(p.setEnd(C.node,C.offset),o.addRange(p)))}}for(p=[],o=l;o=o.parentNode;)o.nodeType===1&&p.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<p.length;l++)o=p[l],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var bO=s&&"documentMode"in document&&11>=document.documentMode,Co=null,X2=null,yp=null,Z2=!1;function cy(o,p,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Z2||Co==null||Co!==bn(h)||(h=Co,"selectionStart"in h&&Y2(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),yp&&bp(yp,h)||(yp=h,h=x0(X2,"onSelect"),0<h.length&&(p=new F2("onSelect","select",null,p,l),o.push({event:p,listeners:h}),p.target=Co)))}function y0(o,p){var l={};return l[o.toLowerCase()]=p.toLowerCase(),l["Webkit"+o]="webkit"+p,l["Moz"+o]="moz"+p,l}var No={animationend:y0("Animation","AnimationEnd"),animationiteration:y0("Animation","AnimationIteration"),animationstart:y0("Animation","AnimationStart"),transitionend:y0("Transition","TransitionEnd")},J2={},fy={};s&&(fy=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function I0(o){if(J2[o])return J2[o];if(!No[o])return o;var p=No[o],l;for(l in p)if(p.hasOwnProperty(l)&&l in fy)return J2[o]=p[l];return o}var dy=I0("animationend"),my=I0("animationiteration"),hy=I0("animationstart"),vy=I0("transitionend"),gy=new Map,by="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ua(o,p){gy.set(o,p),i(p,[o])}for(var nc=0;nc<by.length;nc++){var ec=by[nc],yO=ec.toLowerCase(),IO=ec[0].toUpperCase()+ec.slice(1);ua(yO,"on"+IO)}ua(dy,"onAnimationEnd"),ua(my,"onAnimationIteration"),ua(hy,"onAnimationStart"),ua("dblclick","onDoubleClick"),ua("focusin","onFocus"),ua("focusout","onBlur"),ua(vy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ip="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ip));function yy(o,p,l){var h=o.type||"unknown-event";o.currentTarget=l,y_(h,p,void 0,o),o.currentTarget=null}function Iy(o,p){p=(p&4)!==0;for(var l=0;l<o.length;l++){var h=o[l],g=h.event;h=h.listeners;n:{var x=void 0;if(p)for(var C=h.length-1;0<=C;C--){var j=h[C],q=j.instance,tn=j.currentTarget;if(j=j.listener,q!==x&&g.isPropagationStopped())break n;yy(g,j,tn),x=q}else for(C=0;C<h.length;C++){if(j=h[C],q=j.instance,tn=j.currentTarget,j=j.listener,q!==x&&g.isPropagationStopped())break n;yy(g,j,tn),x=q}}}if(a0)throw o=C2,a0=!1,C2=null,o}function pe(o,p){var l=p[sc];l===void 0&&(l=p[sc]=new Set);var h=o+"__bubble";l.has(h)||(By(p,o,2,!1),l.add(h))}function tc(o,p,l){var h=0;p&&(h|=4),By(l,o,h,p)}var B0="_reactListening"+Math.random().toString(36).slice(2);function Bp(o){if(!o[B0]){o[B0]=!0,r.forEach(function(l){l!=="selectionchange"&&(BO.has(l)||tc(l,!1,o),tc(l,!0,o))});var p=o.nodeType===9?o:o.ownerDocument;p===null||p[B0]||(p[B0]=!0,tc("selectionchange",!1,p))}}function By(o,p,l,h){switch(zb(p)){case 1:var g=k_;break;case 4:g=E_;break;default:g=j2}l=g.bind(null,p,l,o),g=void 0,!H2||p!=="touchstart"&&p!=="touchmove"&&p!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(p,l,{capture:!0,passive:g}):o.addEventListener(p,l,!0):g!==void 0?o.addEventListener(p,l,{passive:g}):o.addEventListener(p,l,!1)}function rc(o,p,l,h,g){var x=h;if((p&1)===0&&(p&2)===0&&h!==null)n:for(;;){if(h===null)return;var C=h.tag;if(C===3||C===4){var j=h.stateNode.containerInfo;if(j===g||j.nodeType===8&&j.parentNode===g)break;if(C===4)for(C=h.return;C!==null;){var q=C.tag;if((q===3||q===4)&&(q=C.stateNode.containerInfo,q===g||q.nodeType===8&&q.parentNode===g))return;C=C.return}for(;j!==null;){if(C=qa(j),C===null)return;if(q=C.tag,q===5||q===6){h=x=C;continue n}j=j.parentNode}}h=h.return}Sb(function(){var tn=x,sn=A2(l),cn=[];n:{var un=gy.get(o);if(un!==void 0){var In=F2,Mn=o;switch(o){case"keypress":if(h0(l)===0)break n;case"keydown":case"keyup":In=X_;break;case"focusin":Mn="focus",In=U2;break;case"focusout":Mn="blur",In=U2;break;case"beforeblur":case"afterblur":In=U2;break;case"click":if(l.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":In=Gb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":In=j_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":In=nO;break;case dy:case my:case hy:In=F_;break;case vy:In=tO;break;case"scroll":In=T_;break;case"wheel":In=aO;break;case"copy":case"cut":case"paste":In=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":In=Qb}var On=(p&4)!==0,We=!On&&o==="scroll",X=On?un!==null?un+"Capture":null:un;On=[];for(var z=tn,nn;z!==null;){nn=z;var dn=nn.stateNode;if(nn.tag===5&&dn!==null&&(nn=dn,X!==null&&(dn=rp(z,X),dn!=null&&On.push(xp(z,dn,nn)))),We)break;z=z.return}0<On.length&&(un=new In(un,Mn,null,l,sn),cn.push({event:un,listeners:On}))}}if((p&7)===0){n:{if(un=o==="mouseover"||o==="pointerover",In=o==="mouseout"||o==="pointerout",un&&l!==M2&&(Mn=l.relatedTarget||l.fromElement)&&(qa(Mn)||Mn[Ar]))break n;if((In||un)&&(un=sn.window===sn?sn:(un=sn.ownerDocument)?un.defaultView||un.parentWindow:window,In?(Mn=l.relatedTarget||l.toElement,In=tn,Mn=Mn?qa(Mn):null,Mn!==null&&(We=Fa(Mn),Mn!==We||Mn.tag!==5&&Mn.tag!==6)&&(Mn=null)):(In=null,Mn=tn),In!==Mn)){if(On=Gb,dn="onMouseLeave",X="onMouseEnter",z="mouse",(o==="pointerout"||o==="pointerover")&&(On=Qb,dn="onPointerLeave",X="onPointerEnter",z="pointer"),We=In==null?un:Eo(In),nn=Mn==null?un:Eo(Mn),un=new On(dn,z+"leave",In,l,sn),un.target=We,un.relatedTarget=nn,dn=null,qa(sn)===tn&&(On=new On(X,z+"enter",Mn,l,sn),On.target=nn,On.relatedTarget=We,dn=On),We=dn,In&&Mn)e:{for(On=In,X=Mn,z=0,nn=On;nn;nn=Ro(nn))z++;for(nn=0,dn=X;dn;dn=Ro(dn))nn++;for(;0<z-nn;)On=Ro(On),z--;for(;0<nn-z;)X=Ro(X),nn--;for(;z--;){if(On===X||X!==null&&On===X.alternate)break e;On=Ro(On),X=Ro(X)}On=null}else On=null;In!==null&&xy(cn,un,In,On,!1),Mn!==null&&We!==null&&xy(cn,We,Mn,On,!0)}}n:{if(un=tn?Eo(tn):window,In=un.nodeName&&un.nodeName.toLowerCase(),In==="select"||In==="input"&&un.type==="file")var Cn=cO;else if(ey(un))if(ry)Cn=hO;else{Cn=dO;var Nn=fO}else(In=un.nodeName)&&In.toLowerCase()==="input"&&(un.type==="checkbox"||un.type==="radio")&&(Cn=mO);if(Cn&&(Cn=Cn(o,tn))){ty(cn,Cn,l,sn);break n}Nn&&Nn(o,un,tn),o==="focusout"&&(Nn=un._wrapperState)&&Nn.controlled&&un.type==="number"&&zn(un,"number",un.value)}switch(Nn=tn?Eo(tn):window,o){case"focusin":(ey(Nn)||Nn.contentEditable==="true")&&(Co=Nn,X2=tn,yp=null);break;case"focusout":yp=X2=Co=null;break;case"mousedown":Z2=!0;break;case"contextmenu":case"mouseup":case"dragend":Z2=!1,cy(cn,l,sn);break;case"selectionchange":if(bO)break;case"keydown":case"keyup":cy(cn,l,sn)}var Rn;if(G2)n:{switch(o){case"compositionstart":var Dn="onCompositionStart";break n;case"compositionend":Dn="onCompositionEnd";break n;case"compositionupdate":Dn="onCompositionUpdate";break n}Dn=void 0}else Ho?Jb(o,l)&&(Dn="onCompositionEnd"):o==="keydown"&&l.keyCode===229&&(Dn="onCompositionStart");Dn&&(Yb&&l.locale!=="ko"&&(Ho||Dn!=="onCompositionStart"?Dn==="onCompositionEnd"&&Ho&&(Rn=Ub()):(pa=sn,L2="value"in pa?pa.value:pa.textContent,Ho=!0)),Nn=x0(tn,Dn),0<Nn.length&&(Dn=new Kb(Dn,o,null,l,sn),cn.push({event:Dn,listeners:Nn}),Rn?Dn.data=Rn:(Rn=ny(l),Rn!==null&&(Dn.data=Rn)))),(Rn=iO?pO(o,l):uO(o,l))&&(tn=x0(tn,"onBeforeInput"),0<tn.length&&(sn=new Kb("onBeforeInput","beforeinput",null,l,sn),cn.push({event:sn,listeners:tn}),sn.data=Rn))}Iy(cn,p)})}function xp(o,p,l){return{instance:o,listener:p,currentTarget:l}}function x0(o,p){for(var l=p+"Capture",h=[];o!==null;){var g=o,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=rp(o,l),x!=null&&h.unshift(xp(o,x,g)),x=rp(o,p),x!=null&&h.push(xp(o,x,g))),o=o.return}return h}function Ro(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function xy(o,p,l,h,g){for(var x=p._reactName,C=[];l!==null&&l!==h;){var j=l,q=j.alternate,tn=j.stateNode;if(q!==null&&q===h)break;j.tag===5&&tn!==null&&(j=tn,g?(q=rp(l,x),q!=null&&C.unshift(xp(l,q,j))):g||(q=rp(l,x),q!=null&&C.push(xp(l,q,j)))),l=l.return}C.length!==0&&o.push({event:p,listeners:C})}var xO=/\r\n?/g,PO=/\u0000|\uFFFD/g;function Py(o){return(typeof o=="string"?o:""+o).replace(xO,`
`).replace(PO,"")}function P0(o,p,l){if(p=Py(p),Py(o)!==p&&l)throw Error(t(425))}function w0(){}var ac=null,oc=null;function ic(o,p){return o==="textarea"||o==="noscript"||typeof p.children=="string"||typeof p.children=="number"||typeof p.dangerouslySetInnerHTML=="object"&&p.dangerouslySetInnerHTML!==null&&p.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,wO=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,WO=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(o){return wy.resolve(null).then(o).catch(SO)}:pc;function SO(o){setTimeout(function(){throw o})}function uc(o,p){var l=p,h=0;do{var g=l.nextSibling;if(o.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){o.removeChild(g),fp(p);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);fp(p)}function sa(o){for(;o!=null;o=o.nextSibling){var p=o.nodeType;if(p===1||p===3)break;if(p===8){if(p=o.data,p==="$"||p==="$!"||p==="$?")break;if(p==="/$")return null}}return o}function Wy(o){o=o.previousSibling;for(var p=0;o;){if(o.nodeType===8){var l=o.data;if(l==="$"||l==="$!"||l==="$?"){if(p===0)return o;p--}else l==="/$"&&p++}o=o.previousSibling}return null}var ko=Math.random().toString(36).slice(2),dr="__reactFiber$"+ko,Pp="__reactProps$"+ko,Ar="__reactContainer$"+ko,sc="__reactEvents$"+ko,MO="__reactListeners$"+ko,AO="__reactHandles$"+ko;function qa(o){var p=o[dr];if(p)return p;for(var l=o.parentNode;l;){if(p=l[Ar]||l[dr]){if(l=p.alternate,p.child!==null||l!==null&&l.child!==null)for(o=Wy(o);o!==null;){if(l=o[dr])return l;o=Wy(o)}return p}o=l,l=o.parentNode}return null}function wp(o){return o=o[dr]||o[Ar],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Eo(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(t(33))}function W0(o){return o[Pp]||null}var lc=[],To=-1;function la(o){return{current:o}}function ue(o){0>To||(o.current=lc[To],lc[To]=null,To--)}function re(o,p){To++,lc[To]=o.current,o.current=p}var ca={},Ye=la(ca),ft=la(!1),za=ca;function Do(o,p){var l=o.type.contextTypes;if(!l)return ca;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===p)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=p[x];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=p,o.__reactInternalMemoizedMaskedChildContext=g),g}function dt(o){return o=o.childContextTypes,o!=null}function S0(){ue(ft),ue(Ye)}function Sy(o,p,l){if(Ye.current!==ca)throw Error(t(168));re(Ye,p),re(ft,l)}function My(o,p,l){var h=o.stateNode;if(p=p.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in p))throw Error(t(108,xn(o)||"Unknown",g));return en({},l,h)}function M0(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,za=Ye.current,re(Ye,o),re(ft,ft.current),!0}function Ay(o,p,l){var h=o.stateNode;if(!h)throw Error(t(169));l?(o=My(o,p,za),h.__reactInternalMemoizedMergedChildContext=o,ue(ft),ue(Ye),re(Ye,o)):ue(ft),re(ft,l)}var _r=null,A0=!1,cc=!1;function _y(o){_r===null?_r=[o]:_r.push(o)}function _O(o){A0=!0,_y(o)}function fa(){if(!cc&&_r!==null){cc=!0;var o=0,p=Jn;try{var l=_r;for(Jn=1;o<l.length;o++){var h=l[o];do h=h(!0);while(h!==null)}_r=null,A0=!1}catch(g){throw _r!==null&&(_r=_r.slice(o+1)),Hb(N2,fa),g}finally{Jn=p,cc=!1}}return null}var jo=[],$o=0,_0=null,O0=0,Rt=[],kt=0,Ua=null,Or=1,Hr="";function Va(o,p){jo[$o++]=O0,jo[$o++]=_0,_0=o,O0=p}function Oy(o,p,l){Rt[kt++]=Or,Rt[kt++]=Hr,Rt[kt++]=Ua,Ua=o;var h=Or;o=Hr;var g=32-Xt(h)-1;h&=~(1<<g),l+=1;var x=32-Xt(p)+g;if(30<x){var C=g-g%5;x=(h&(1<<C)-1).toString(32),h>>=C,g-=C,Or=1<<32-Xt(p)+g|l<<g|h,Hr=x+o}else Or=1<<x|l<<g|h,Hr=o}function fc(o){o.return!==null&&(Va(o,1),Oy(o,1,0))}function dc(o){for(;o===_0;)_0=jo[--$o],jo[$o]=null,O0=jo[--$o],jo[$o]=null;for(;o===Ua;)Ua=Rt[--kt],Rt[kt]=null,Hr=Rt[--kt],Rt[kt]=null,Or=Rt[--kt],Rt[kt]=null}var Bt=null,xt=null,ce=!1,Jt=null;function Hy(o,p){var l=jt(5,null,null,0);l.elementType="DELETED",l.stateNode=p,l.return=o,p=o.deletions,p===null?(o.deletions=[l],o.flags|=16):p.push(l)}function Cy(o,p){switch(o.tag){case 5:var l=o.type;return p=p.nodeType!==1||l.toLowerCase()!==p.nodeName.toLowerCase()?null:p,p!==null?(o.stateNode=p,Bt=o,xt=sa(p.firstChild),!0):!1;case 6:return p=o.pendingProps===""||p.nodeType!==3?null:p,p!==null?(o.stateNode=p,Bt=o,xt=null,!0):!1;case 13:return p=p.nodeType!==8?null:p,p!==null?(l=Ua!==null?{id:Or,overflow:Hr}:null,o.memoizedState={dehydrated:p,treeContext:l,retryLane:1073741824},l=jt(18,null,null,0),l.stateNode=p,l.return=o,o.child=l,Bt=o,xt=null,!0):!1;default:return!1}}function mc(o){return(o.mode&1)!==0&&(o.flags&128)===0}function hc(o){if(ce){var p=xt;if(p){var l=p;if(!Cy(o,p)){if(mc(o))throw Error(t(418));p=sa(l.nextSibling);var h=Bt;p&&Cy(o,p)?Hy(h,l):(o.flags=o.flags&-4097|2,ce=!1,Bt=o)}}else{if(mc(o))throw Error(t(418));o.flags=o.flags&-4097|2,ce=!1,Bt=o}}}function Ny(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Bt=o}function H0(o){if(o!==Bt)return!1;if(!ce)return Ny(o),ce=!0,!1;var p;if((p=o.tag!==3)&&!(p=o.tag!==5)&&(p=o.type,p=p!=="head"&&p!=="body"&&!ic(o.type,o.memoizedProps)),p&&(p=xt)){if(mc(o))throw Ry(),Error(t(418));for(;p;)Hy(o,p),p=sa(p.nextSibling)}if(Ny(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(t(317));n:{for(o=o.nextSibling,p=0;o;){if(o.nodeType===8){var l=o.data;if(l==="/$"){if(p===0){xt=sa(o.nextSibling);break n}p--}else l!=="$"&&l!=="$!"&&l!=="$?"||p++}o=o.nextSibling}xt=null}}else xt=Bt?sa(o.stateNode.nextSibling):null;return!0}function Ry(){for(var o=xt;o;)o=sa(o.nextSibling)}function Lo(){xt=Bt=null,ce=!1}function vc(o){Jt===null?Jt=[o]:Jt.push(o)}var OO=O.ReactCurrentBatchConfig;function Wp(o,p,l){if(o=l.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,o));var g=h,x=""+o;return p!==null&&p.ref!==null&&typeof p.ref=="function"&&p.ref._stringRef===x?p.ref:(p=function(C){var j=g.refs;C===null?delete j[x]:j[x]=C},p._stringRef=x,p)}if(typeof o!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,o))}return o}function C0(o,p){throw o=Object.prototype.toString.call(p),Error(t(31,o==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":o))}function ky(o){var p=o._init;return p(o._payload)}function Ey(o){function p(X,z){if(o){var nn=X.deletions;nn===null?(X.deletions=[z],X.flags|=16):nn.push(z)}}function l(X,z){if(!o)return null;for(;z!==null;)p(X,z),z=z.sibling;return null}function h(X,z){for(X=new Map;z!==null;)z.key!==null?X.set(z.key,z):X.set(z.index,z),z=z.sibling;return X}function g(X,z){return X=Ia(X,z),X.index=0,X.sibling=null,X}function x(X,z,nn){return X.index=nn,o?(nn=X.alternate,nn!==null?(nn=nn.index,nn<z?(X.flags|=2,z):nn):(X.flags|=2,z)):(X.flags|=1048576,z)}function C(X){return o&&X.alternate===null&&(X.flags|=2),X}function j(X,z,nn,dn){return z===null||z.tag!==6?(z=uf(nn,X.mode,dn),z.return=X,z):(z=g(z,nn),z.return=X,z)}function q(X,z,nn,dn){var Cn=nn.type;return Cn===N?sn(X,z,nn.props.children,dn,nn.key):z!==null&&(z.elementType===Cn||typeof Cn=="object"&&Cn!==null&&Cn.$$typeof===Y&&ky(Cn)===z.type)?(dn=g(z,nn.props),dn.ref=Wp(X,z,nn),dn.return=X,dn):(dn=ts(nn.type,nn.key,nn.props,null,X.mode,dn),dn.ref=Wp(X,z,nn),dn.return=X,dn)}function tn(X,z,nn,dn){return z===null||z.tag!==4||z.stateNode.containerInfo!==nn.containerInfo||z.stateNode.implementation!==nn.implementation?(z=sf(nn,X.mode,dn),z.return=X,z):(z=g(z,nn.children||[]),z.return=X,z)}function sn(X,z,nn,dn,Cn){return z===null||z.tag!==7?(z=no(nn,X.mode,dn,Cn),z.return=X,z):(z=g(z,nn),z.return=X,z)}function cn(X,z,nn){if(typeof z=="string"&&z!==""||typeof z=="number")return z=uf(""+z,X.mode,nn),z.return=X,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case P:return nn=ts(z.type,z.key,z.props,null,X.mode,nn),nn.ref=Wp(X,null,z),nn.return=X,nn;case A:return z=sf(z,X.mode,nn),z.return=X,z;case Y:var dn=z._init;return cn(X,dn(z._payload),nn)}if(Qn(z)||K(z))return z=no(z,X.mode,nn,null),z.return=X,z;C0(X,z)}return null}function un(X,z,nn,dn){var Cn=z!==null?z.key:null;if(typeof nn=="string"&&nn!==""||typeof nn=="number")return Cn!==null?null:j(X,z,""+nn,dn);if(typeof nn=="object"&&nn!==null){switch(nn.$$typeof){case P:return nn.key===Cn?q(X,z,nn,dn):null;case A:return nn.key===Cn?tn(X,z,nn,dn):null;case Y:return Cn=nn._init,un(X,z,Cn(nn._payload),dn)}if(Qn(nn)||K(nn))return Cn!==null?null:sn(X,z,nn,dn,null);C0(X,nn)}return null}function In(X,z,nn,dn,Cn){if(typeof dn=="string"&&dn!==""||typeof dn=="number")return X=X.get(nn)||null,j(z,X,""+dn,Cn);if(typeof dn=="object"&&dn!==null){switch(dn.$$typeof){case P:return X=X.get(dn.key===null?nn:dn.key)||null,q(z,X,dn,Cn);case A:return X=X.get(dn.key===null?nn:dn.key)||null,tn(z,X,dn,Cn);case Y:var Nn=dn._init;return In(X,z,nn,Nn(dn._payload),Cn)}if(Qn(dn)||K(dn))return X=X.get(nn)||null,sn(z,X,dn,Cn,null);C0(z,dn)}return null}function Mn(X,z,nn,dn){for(var Cn=null,Nn=null,Rn=z,Dn=z=0,Fe=null;Rn!==null&&Dn<nn.length;Dn++){Rn.index>Dn?(Fe=Rn,Rn=null):Fe=Rn.sibling;var Vn=un(X,Rn,nn[Dn],dn);if(Vn===null){Rn===null&&(Rn=Fe);break}o&&Rn&&Vn.alternate===null&&p(X,Rn),z=x(Vn,z,Dn),Nn===null?Cn=Vn:Nn.sibling=Vn,Nn=Vn,Rn=Fe}if(Dn===nn.length)return l(X,Rn),ce&&Va(X,Dn),Cn;if(Rn===null){for(;Dn<nn.length;Dn++)Rn=cn(X,nn[Dn],dn),Rn!==null&&(z=x(Rn,z,Dn),Nn===null?Cn=Rn:Nn.sibling=Rn,Nn=Rn);return ce&&Va(X,Dn),Cn}for(Rn=h(X,Rn);Dn<nn.length;Dn++)Fe=In(Rn,X,Dn,nn[Dn],dn),Fe!==null&&(o&&Fe.alternate!==null&&Rn.delete(Fe.key===null?Dn:Fe.key),z=x(Fe,z,Dn),Nn===null?Cn=Fe:Nn.sibling=Fe,Nn=Fe);return o&&Rn.forEach(function(Ba){return p(X,Ba)}),ce&&Va(X,Dn),Cn}function On(X,z,nn,dn){var Cn=K(nn);if(typeof Cn!="function")throw Error(t(150));if(nn=Cn.call(nn),nn==null)throw Error(t(151));for(var Nn=Cn=null,Rn=z,Dn=z=0,Fe=null,Vn=nn.next();Rn!==null&&!Vn.done;Dn++,Vn=nn.next()){Rn.index>Dn?(Fe=Rn,Rn=null):Fe=Rn.sibling;var Ba=un(X,Rn,Vn.value,dn);if(Ba===null){Rn===null&&(Rn=Fe);break}o&&Rn&&Ba.alternate===null&&p(X,Rn),z=x(Ba,z,Dn),Nn===null?Cn=Ba:Nn.sibling=Ba,Nn=Ba,Rn=Fe}if(Vn.done)return l(X,Rn),ce&&Va(X,Dn),Cn;if(Rn===null){for(;!Vn.done;Dn++,Vn=nn.next())Vn=cn(X,Vn.value,dn),Vn!==null&&(z=x(Vn,z,Dn),Nn===null?Cn=Vn:Nn.sibling=Vn,Nn=Vn);return ce&&Va(X,Dn),Cn}for(Rn=h(X,Rn);!Vn.done;Dn++,Vn=nn.next())Vn=In(Rn,X,Dn,Vn.value,dn),Vn!==null&&(o&&Vn.alternate!==null&&Rn.delete(Vn.key===null?Dn:Vn.key),z=x(Vn,z,Dn),Nn===null?Cn=Vn:Nn.sibling=Vn,Nn=Vn);return o&&Rn.forEach(function(sH){return p(X,sH)}),ce&&Va(X,Dn),Cn}function We(X,z,nn,dn){if(typeof nn=="object"&&nn!==null&&nn.type===N&&nn.key===null&&(nn=nn.props.children),typeof nn=="object"&&nn!==null){switch(nn.$$typeof){case P:n:{for(var Cn=nn.key,Nn=z;Nn!==null;){if(Nn.key===Cn){if(Cn=nn.type,Cn===N){if(Nn.tag===7){l(X,Nn.sibling),z=g(Nn,nn.props.children),z.return=X,X=z;break n}}else if(Nn.elementType===Cn||typeof Cn=="object"&&Cn!==null&&Cn.$$typeof===Y&&ky(Cn)===Nn.type){l(X,Nn.sibling),z=g(Nn,nn.props),z.ref=Wp(X,Nn,nn),z.return=X,X=z;break n}l(X,Nn);break}else p(X,Nn);Nn=Nn.sibling}nn.type===N?(z=no(nn.props.children,X.mode,dn,nn.key),z.return=X,X=z):(dn=ts(nn.type,nn.key,nn.props,null,X.mode,dn),dn.ref=Wp(X,z,nn),dn.return=X,X=dn)}return C(X);case A:n:{for(Nn=nn.key;z!==null;){if(z.key===Nn)if(z.tag===4&&z.stateNode.containerInfo===nn.containerInfo&&z.stateNode.implementation===nn.implementation){l(X,z.sibling),z=g(z,nn.children||[]),z.return=X,X=z;break n}else{l(X,z);break}else p(X,z);z=z.sibling}z=sf(nn,X.mode,dn),z.return=X,X=z}return C(X);case Y:return Nn=nn._init,We(X,z,Nn(nn._payload),dn)}if(Qn(nn))return Mn(X,z,nn,dn);if(K(nn))return On(X,z,nn,dn);C0(X,nn)}return typeof nn=="string"&&nn!==""||typeof nn=="number"?(nn=""+nn,z!==null&&z.tag===6?(l(X,z.sibling),z=g(z,nn),z.return=X,X=z):(l(X,z),z=uf(nn,X.mode,dn),z.return=X,X=z),C(X)):l(X,z)}return We}var Fo=Ey(!0),Ty=Ey(!1),N0=la(null),R0=null,qo=null,gc=null;function bc(){gc=qo=R0=null}function yc(o){var p=N0.current;ue(N0),o._currentValue=p}function Ic(o,p,l){for(;o!==null;){var h=o.alternate;if((o.childLanes&p)!==p?(o.childLanes|=p,h!==null&&(h.childLanes|=p)):h!==null&&(h.childLanes&p)!==p&&(h.childLanes|=p),o===l)break;o=o.return}}function zo(o,p){R0=o,gc=qo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&p)!==0&&(mt=!0),o.firstContext=null)}function Et(o){var p=o._currentValue;if(gc!==o)if(o={context:o,memoizedValue:p,next:null},qo===null){if(R0===null)throw Error(t(308));qo=o,R0.dependencies={lanes:0,firstContext:o}}else qo=qo.next=o;return p}var Ga=null;function Bc(o){Ga===null?Ga=[o]:Ga.push(o)}function Dy(o,p,l,h){var g=p.interleaved;return g===null?(l.next=l,Bc(p)):(l.next=g.next,g.next=l),p.interleaved=l,Cr(o,h)}function Cr(o,p){o.lanes|=p;var l=o.alternate;for(l!==null&&(l.lanes|=p),l=o,o=o.return;o!==null;)o.childLanes|=p,l=o.alternate,l!==null&&(l.childLanes|=p),l=o,o=o.return;return l.tag===3?l.stateNode:null}var da=!1;function xc(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jy(o,p){o=o.updateQueue,p.updateQueue===o&&(p.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,p){return{eventTime:o,lane:p,tag:0,payload:null,callback:null,next:null}}function ma(o,p,l){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(Un&2)!==0){var g=h.pending;return g===null?p.next=p:(p.next=g.next,g.next=p),h.pending=p,Cr(o,l)}return g=h.interleaved,g===null?(p.next=p,Bc(h)):(p.next=g.next,g.next=p),h.interleaved=p,Cr(o,l)}function k0(o,p,l){if(p=p.updateQueue,p!==null&&(p=p.shared,(l&4194240)!==0)){var h=p.lanes;h&=o.pendingLanes,l|=h,p.lanes=l,E2(o,l)}}function $y(o,p){var l=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?g=x=p:x=x.next=p}else g=x=p;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},o.updateQueue=l;return}o=l.lastBaseUpdate,o===null?l.firstBaseUpdate=p:o.next=p,l.lastBaseUpdate=p}function E0(o,p,l,h){var g=o.updateQueue;da=!1;var x=g.firstBaseUpdate,C=g.lastBaseUpdate,j=g.shared.pending;if(j!==null){g.shared.pending=null;var q=j,tn=q.next;q.next=null,C===null?x=tn:C.next=tn,C=q;var sn=o.alternate;sn!==null&&(sn=sn.updateQueue,j=sn.lastBaseUpdate,j!==C&&(j===null?sn.firstBaseUpdate=tn:j.next=tn,sn.lastBaseUpdate=q))}if(x!==null){var cn=g.baseState;C=0,sn=tn=q=null,j=x;do{var un=j.lane,In=j.eventTime;if((h&un)===un){sn!==null&&(sn=sn.next={eventTime:In,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});n:{var Mn=o,On=j;switch(un=p,In=l,On.tag){case 1:if(Mn=On.payload,typeof Mn=="function"){cn=Mn.call(In,cn,un);break n}cn=Mn;break n;case 3:Mn.flags=Mn.flags&-65537|128;case 0:if(Mn=On.payload,un=typeof Mn=="function"?Mn.call(In,cn,un):Mn,un==null)break n;cn=en({},cn,un);break n;case 2:da=!0}}j.callback!==null&&j.lane!==0&&(o.flags|=64,un=g.effects,un===null?g.effects=[j]:un.push(j))}else In={eventTime:In,lane:un,tag:j.tag,payload:j.payload,callback:j.callback,next:null},sn===null?(tn=sn=In,q=cn):sn=sn.next=In,C|=un;if(j=j.next,j===null){if(j=g.shared.pending,j===null)break;un=j,j=un.next,un.next=null,g.lastBaseUpdate=un,g.shared.pending=null}}while(!0);if(sn===null&&(q=cn),g.baseState=q,g.firstBaseUpdate=tn,g.lastBaseUpdate=sn,p=g.shared.interleaved,p!==null){g=p;do C|=g.lane,g=g.next;while(g!==p)}else x===null&&(g.shared.lanes=0);Ya|=C,o.lanes=C,o.memoizedState=cn}}function Ly(o,p,l){if(o=p.effects,p.effects=null,o!==null)for(p=0;p<o.length;p++){var h=o[p],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Sp={},mr=la(Sp),Mp=la(Sp),Ap=la(Sp);function Ka(o){if(o===Sp)throw Error(t(174));return o}function Pc(o,p){switch(re(Ap,p),re(Mp,o),re(mr,Sp),o=p.nodeType,o){case 9:case 11:p=(p=p.documentElement)?p.namespaceURI:je(null,"");break;default:o=o===8?p.parentNode:p,p=o.namespaceURI||null,o=o.tagName,p=je(p,o)}ue(mr),re(mr,p)}function Uo(){ue(mr),ue(Mp),ue(Ap)}function Fy(o){Ka(Ap.current);var p=Ka(mr.current),l=je(p,o.type);p!==l&&(re(Mp,o),re(mr,l))}function wc(o){Mp.current===o&&(ue(mr),ue(Mp))}var de=la(0);function T0(o){for(var p=o;p!==null;){if(p.tag===13){var l=p.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return p}else if(p.tag===19&&p.memoizedProps.revealOrder!==void 0){if((p.flags&128)!==0)return p}else if(p.child!==null){p.child.return=p,p=p.child;continue}if(p===o)break;for(;p.sibling===null;){if(p.return===null||p.return===o)return null;p=p.return}p.sibling.return=p.return,p=p.sibling}return null}var Wc=[];function Sc(){for(var o=0;o<Wc.length;o++)Wc[o]._workInProgressVersionPrimary=null;Wc.length=0}var D0=O.ReactCurrentDispatcher,Mc=O.ReactCurrentBatchConfig,Qa=0,me=null,Ne=null,$e=null,j0=!1,_p=!1,Op=0,HO=0;function Xe(){throw Error(t(321))}function Ac(o,p){if(p===null)return!1;for(var l=0;l<p.length&&l<o.length;l++)if(!Zt(o[l],p[l]))return!1;return!0}function _c(o,p,l,h,g,x){if(Qa=x,me=p,p.memoizedState=null,p.updateQueue=null,p.lanes=0,D0.current=o===null||o.memoizedState===null?kO:EO,o=l(h,g),_p){x=0;do{if(_p=!1,Op=0,25<=x)throw Error(t(301));x+=1,$e=Ne=null,p.updateQueue=null,D0.current=TO,o=l(h,g)}while(_p)}if(D0.current=F0,p=Ne!==null&&Ne.next!==null,Qa=0,$e=Ne=me=null,j0=!1,p)throw Error(t(300));return o}function Oc(){var o=Op!==0;return Op=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?me.memoizedState=$e=o:$e=$e.next=o,$e}function Tt(){if(Ne===null){var o=me.alternate;o=o!==null?o.memoizedState:null}else o=Ne.next;var p=$e===null?me.memoizedState:$e.next;if(p!==null)$e=p,Ne=o;else{if(o===null)throw Error(t(310));Ne=o,o={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},$e===null?me.memoizedState=$e=o:$e=$e.next=o}return $e}function Hp(o,p){return typeof p=="function"?p(o):p}function Hc(o){var p=Tt(),l=p.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=Ne,g=h.baseQueue,x=l.pending;if(x!==null){if(g!==null){var C=g.next;g.next=x.next,x.next=C}h.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,h=h.baseState;var j=C=null,q=null,tn=x;do{var sn=tn.lane;if((Qa&sn)===sn)q!==null&&(q=q.next={lane:0,action:tn.action,hasEagerState:tn.hasEagerState,eagerState:tn.eagerState,next:null}),h=tn.hasEagerState?tn.eagerState:o(h,tn.action);else{var cn={lane:sn,action:tn.action,hasEagerState:tn.hasEagerState,eagerState:tn.eagerState,next:null};q===null?(j=q=cn,C=h):q=q.next=cn,me.lanes|=sn,Ya|=sn}tn=tn.next}while(tn!==null&&tn!==x);q===null?C=h:q.next=j,Zt(h,p.memoizedState)||(mt=!0),p.memoizedState=h,p.baseState=C,p.baseQueue=q,l.lastRenderedState=h}if(o=l.interleaved,o!==null){g=o;do x=g.lane,me.lanes|=x,Ya|=x,g=g.next;while(g!==o)}else g===null&&(l.lanes=0);return[p.memoizedState,l.dispatch]}function Cc(o){var p=Tt(),l=p.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=l.dispatch,g=l.pending,x=p.memoizedState;if(g!==null){l.pending=null;var C=g=g.next;do x=o(x,C.action),C=C.next;while(C!==g);Zt(x,p.memoizedState)||(mt=!0),p.memoizedState=x,p.baseQueue===null&&(p.baseState=x),l.lastRenderedState=x}return[x,h]}function qy(){}function zy(o,p){var l=me,h=Tt(),g=p(),x=!Zt(h.memoizedState,g);if(x&&(h.memoizedState=g,mt=!0),h=h.queue,Nc(Gy.bind(null,l,h,o),[o]),h.getSnapshot!==p||x||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,Cp(9,Vy.bind(null,l,h,g,p),void 0,null),Le===null)throw Error(t(349));(Qa&30)!==0||Uy(l,p,g)}return g}function Uy(o,p,l){o.flags|=16384,o={getSnapshot:p,value:l},p=me.updateQueue,p===null?(p={lastEffect:null,stores:null},me.updateQueue=p,p.stores=[o]):(l=p.stores,l===null?p.stores=[o]:l.push(o))}function Vy(o,p,l,h){p.value=l,p.getSnapshot=h,Ky(p)&&Qy(o)}function Gy(o,p,l){return l(function(){Ky(p)&&Qy(o)})}function Ky(o){var p=o.getSnapshot;o=o.value;try{var l=p();return!Zt(o,l)}catch{return!0}}function Qy(o){var p=Cr(o,1);p!==null&&rr(p,o,1,-1)}function Yy(o){var p=hr();return typeof o=="function"&&(o=o()),p.memoizedState=p.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hp,lastRenderedState:o},p.queue=o,o=o.dispatch=RO.bind(null,me,o),[p.memoizedState,o]}function Cp(o,p,l,h){return o={tag:o,create:p,destroy:l,deps:h,next:null},p=me.updateQueue,p===null?(p={lastEffect:null,stores:null},me.updateQueue=p,p.lastEffect=o.next=o):(l=p.lastEffect,l===null?p.lastEffect=o.next=o:(h=l.next,l.next=o,o.next=h,p.lastEffect=o)),o}function Xy(){return Tt().memoizedState}function $0(o,p,l,h){var g=hr();me.flags|=o,g.memoizedState=Cp(1|p,l,void 0,h===void 0?null:h)}function L0(o,p,l,h){var g=Tt();h=h===void 0?null:h;var x=void 0;if(Ne!==null){var C=Ne.memoizedState;if(x=C.destroy,h!==null&&Ac(h,C.deps)){g.memoizedState=Cp(p,l,x,h);return}}me.flags|=o,g.memoizedState=Cp(1|p,l,x,h)}function Zy(o,p){return $0(8390656,8,o,p)}function Nc(o,p){return L0(2048,8,o,p)}function Jy(o,p){return L0(4,2,o,p)}function n1(o,p){return L0(4,4,o,p)}function e1(o,p){if(typeof p=="function")return o=o(),p(o),function(){p(null)};if(p!=null)return o=o(),p.current=o,function(){p.current=null}}function t1(o,p,l){return l=l!=null?l.concat([o]):null,L0(4,4,e1.bind(null,p,o),l)}function Rc(){}function r1(o,p){var l=Tt();p=p===void 0?null:p;var h=l.memoizedState;return h!==null&&p!==null&&Ac(p,h[1])?h[0]:(l.memoizedState=[o,p],o)}function a1(o,p){var l=Tt();p=p===void 0?null:p;var h=l.memoizedState;return h!==null&&p!==null&&Ac(p,h[1])?h[0]:(o=o(),l.memoizedState=[o,p],o)}function o1(o,p,l){return(Qa&21)===0?(o.baseState&&(o.baseState=!1,mt=!0),o.memoizedState=l):(Zt(l,p)||(l=kb(),me.lanes|=l,Ya|=l,o.baseState=!0),p)}function CO(o,p){var l=Jn;Jn=l!==0&&4>l?l:4,o(!0);var h=Mc.transition;Mc.transition={};try{o(!1),p()}finally{Jn=l,Mc.transition=h}}function i1(){return Tt().memoizedState}function NO(o,p,l){var h=ba(o);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},p1(o))u1(p,l);else if(l=Dy(o,p,l,h),l!==null){var g=rt();rr(l,o,h,g),s1(l,p,h)}}function RO(o,p,l){var h=ba(o),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(p1(o))u1(p,g);else{var x=o.alternate;if(o.lanes===0&&(x===null||x.lanes===0)&&(x=p.lastRenderedReducer,x!==null))try{var C=p.lastRenderedState,j=x(C,l);if(g.hasEagerState=!0,g.eagerState=j,Zt(j,C)){var q=p.interleaved;q===null?(g.next=g,Bc(p)):(g.next=q.next,q.next=g),p.interleaved=g;return}}catch{}finally{}l=Dy(o,p,g,h),l!==null&&(g=rt(),rr(l,o,h,g),s1(l,p,h))}}function p1(o){var p=o.alternate;return o===me||p!==null&&p===me}function u1(o,p){_p=j0=!0;var l=o.pending;l===null?p.next=p:(p.next=l.next,l.next=p),o.pending=p}function s1(o,p,l){if((l&4194240)!==0){var h=p.lanes;h&=o.pendingLanes,l|=h,p.lanes=l,E2(o,l)}}var F0={readContext:Et,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},kO={readContext:Et,useCallback:function(o,p){return hr().memoizedState=[o,p===void 0?null:p],o},useContext:Et,useEffect:Zy,useImperativeHandle:function(o,p,l){return l=l!=null?l.concat([o]):null,$0(4194308,4,e1.bind(null,p,o),l)},useLayoutEffect:function(o,p){return $0(4194308,4,o,p)},useInsertionEffect:function(o,p){return $0(4,2,o,p)},useMemo:function(o,p){var l=hr();return p=p===void 0?null:p,o=o(),l.memoizedState=[o,p],o},useReducer:function(o,p,l){var h=hr();return p=l!==void 0?l(p):p,h.memoizedState=h.baseState=p,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:p},h.queue=o,o=o.dispatch=NO.bind(null,me,o),[h.memoizedState,o]},useRef:function(o){var p=hr();return o={current:o},p.memoizedState=o},useState:Yy,useDebugValue:Rc,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=Yy(!1),p=o[0];return o=CO.bind(null,o[1]),hr().memoizedState=o,[p,o]},useMutableSource:function(){},useSyncExternalStore:function(o,p,l){var h=me,g=hr();if(ce){if(l===void 0)throw Error(t(407));l=l()}else{if(l=p(),Le===null)throw Error(t(349));(Qa&30)!==0||Uy(h,p,l)}g.memoizedState=l;var x={value:l,getSnapshot:p};return g.queue=x,Zy(Gy.bind(null,h,x,o),[o]),h.flags|=2048,Cp(9,Vy.bind(null,h,x,l,p),void 0,null),l},useId:function(){var o=hr(),p=Le.identifierPrefix;if(ce){var l=Hr,h=Or;l=(h&~(1<<32-Xt(h)-1)).toString(32)+l,p=":"+p+"R"+l,l=Op++,0<l&&(p+="H"+l.toString(32)),p+=":"}else l=HO++,p=":"+p+"r"+l.toString(32)+":";return o.memoizedState=p},unstable_isNewReconciler:!1},EO={readContext:Et,useCallback:r1,useContext:Et,useEffect:Nc,useImperativeHandle:t1,useInsertionEffect:Jy,useLayoutEffect:n1,useMemo:a1,useReducer:Hc,useRef:Xy,useState:function(){return Hc(Hp)},useDebugValue:Rc,useDeferredValue:function(o){var p=Tt();return o1(p,Ne.memoizedState,o)},useTransition:function(){var o=Hc(Hp)[0],p=Tt().memoizedState;return[o,p]},useMutableSource:qy,useSyncExternalStore:zy,useId:i1,unstable_isNewReconciler:!1},TO={readContext:Et,useCallback:r1,useContext:Et,useEffect:Nc,useImperativeHandle:t1,useInsertionEffect:Jy,useLayoutEffect:n1,useMemo:a1,useReducer:Cc,useRef:Xy,useState:function(){return Cc(Hp)},useDebugValue:Rc,useDeferredValue:function(o){var p=Tt();return Ne===null?p.memoizedState=o:o1(p,Ne.memoizedState,o)},useTransition:function(){var o=Cc(Hp)[0],p=Tt().memoizedState;return[o,p]},useMutableSource:qy,useSyncExternalStore:zy,useId:i1,unstable_isNewReconciler:!1};function nr(o,p){if(o&&o.defaultProps){p=en({},p),o=o.defaultProps;for(var l in o)p[l]===void 0&&(p[l]=o[l]);return p}return p}function kc(o,p,l,h){p=o.memoizedState,l=l(h,p),l=l==null?p:en({},p,l),o.memoizedState=l,o.lanes===0&&(o.updateQueue.baseState=l)}var q0={isMounted:function(o){return(o=o._reactInternals)?Fa(o)===o:!1},enqueueSetState:function(o,p,l){o=o._reactInternals;var h=rt(),g=ba(o),x=Nr(h,g);x.payload=p,l!=null&&(x.callback=l),p=ma(o,x,g),p!==null&&(rr(p,o,g,h),k0(p,o,g))},enqueueReplaceState:function(o,p,l){o=o._reactInternals;var h=rt(),g=ba(o),x=Nr(h,g);x.tag=1,x.payload=p,l!=null&&(x.callback=l),p=ma(o,x,g),p!==null&&(rr(p,o,g,h),k0(p,o,g))},enqueueForceUpdate:function(o,p){o=o._reactInternals;var l=rt(),h=ba(o),g=Nr(l,h);g.tag=2,p!=null&&(g.callback=p),p=ma(o,g,h),p!==null&&(rr(p,o,h,l),k0(p,o,h))}};function l1(o,p,l,h,g,x,C){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,x,C):p.prototype&&p.prototype.isPureReactComponent?!bp(l,h)||!bp(g,x):!0}function c1(o,p,l){var h=!1,g=ca,x=p.contextType;return typeof x=="object"&&x!==null?x=Et(x):(g=dt(p)?za:Ye.current,h=p.contextTypes,x=(h=h!=null)?Do(o,g):ca),p=new p(l,x),o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=q0,o.stateNode=p,p._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=x),p}function f1(o,p,l,h){o=p.state,typeof p.componentWillReceiveProps=="function"&&p.componentWillReceiveProps(l,h),typeof p.UNSAFE_componentWillReceiveProps=="function"&&p.UNSAFE_componentWillReceiveProps(l,h),p.state!==o&&q0.enqueueReplaceState(p,p.state,null)}function Ec(o,p,l,h){var g=o.stateNode;g.props=l,g.state=o.memoizedState,g.refs={},xc(o);var x=p.contextType;typeof x=="object"&&x!==null?g.context=Et(x):(x=dt(p)?za:Ye.current,g.context=Do(o,x)),g.state=o.memoizedState,x=p.getDerivedStateFromProps,typeof x=="function"&&(kc(o,p,x,l),g.state=o.memoizedState),typeof p.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(p=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),p!==g.state&&q0.enqueueReplaceState(g,g.state,null),E0(o,l,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Vo(o,p){try{var l="",h=p;do l+=vn(h),h=h.return;while(h);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:o,source:p,stack:g,digest:null}}function Tc(o,p,l){return{value:o,source:null,stack:l??null,digest:p??null}}function Dc(o,p){try{console.error(p.value)}catch(l){setTimeout(function(){throw l})}}var DO=typeof WeakMap=="function"?WeakMap:Map;function d1(o,p,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var h=p.value;return l.callback=function(){Y0||(Y0=!0,Jc=h),Dc(o,p)},l}function m1(o,p,l){l=Nr(-1,l),l.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=p.value;l.payload=function(){return h(g)},l.callback=function(){Dc(o,p)}}var x=o.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Dc(o,p),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var C=p.stack;this.componentDidCatch(p.value,{componentStack:C!==null?C:""})}),l}function h1(o,p,l){var h=o.pingCache;if(h===null){h=o.pingCache=new DO;var g=new Set;h.set(p,g)}else g=h.get(p),g===void 0&&(g=new Set,h.set(p,g));g.has(l)||(g.add(l),o=ZO.bind(null,o,p,l),p.then(o,o))}function v1(o){do{var p;if((p=o.tag===13)&&(p=o.memoizedState,p=p!==null?p.dehydrated!==null:!0),p)return o;o=o.return}while(o!==null);return null}function g1(o,p,l,h,g){return(o.mode&1)===0?(o===p?o.flags|=65536:(o.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(p=Nr(-1,1),p.tag=2,ma(l,p,1))),l.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var jO=O.ReactCurrentOwner,mt=!1;function tt(o,p,l,h){p.child=o===null?Ty(p,null,l,h):Fo(p,o.child,l,h)}function b1(o,p,l,h,g){l=l.render;var x=p.ref;return zo(p,g),h=_c(o,p,l,h,x,g),l=Oc(),o!==null&&!mt?(p.updateQueue=o.updateQueue,p.flags&=-2053,o.lanes&=~g,Rr(o,p,g)):(ce&&l&&fc(p),p.flags|=1,tt(o,p,h,g),p.child)}function y1(o,p,l,h,g){if(o===null){var x=l.type;return typeof x=="function"&&!pf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(p.tag=15,p.type=x,I1(o,p,x,h,g)):(o=ts(l.type,null,h,p,p.mode,g),o.ref=p.ref,o.return=p,p.child=o)}if(x=o.child,(o.lanes&g)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:bp,l(C,h)&&o.ref===p.ref)return Rr(o,p,g)}return p.flags|=1,o=Ia(x,h),o.ref=p.ref,o.return=p,p.child=o}function I1(o,p,l,h,g){if(o!==null){var x=o.memoizedProps;if(bp(x,h)&&o.ref===p.ref)if(mt=!1,p.pendingProps=h=x,(o.lanes&g)!==0)(o.flags&131072)!==0&&(mt=!0);else return p.lanes=o.lanes,Rr(o,p,g)}return jc(o,p,l,h,g)}function B1(o,p,l){var h=p.pendingProps,g=h.children,x=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((p.mode&1)===0)p.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ko,Pt),Pt|=l;else{if((l&1073741824)===0)return o=x!==null?x.baseLanes|l:l,p.lanes=p.childLanes=1073741824,p.memoizedState={baseLanes:o,cachePool:null,transitions:null},p.updateQueue=null,re(Ko,Pt),Pt|=o,null;p.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:l,re(Ko,Pt),Pt|=h}else x!==null?(h=x.baseLanes|l,p.memoizedState=null):h=l,re(Ko,Pt),Pt|=h;return tt(o,p,g,l),p.child}function x1(o,p){var l=p.ref;(o===null&&l!==null||o!==null&&o.ref!==l)&&(p.flags|=512,p.flags|=2097152)}function jc(o,p,l,h,g){var x=dt(l)?za:Ye.current;return x=Do(p,x),zo(p,g),l=_c(o,p,l,h,x,g),h=Oc(),o!==null&&!mt?(p.updateQueue=o.updateQueue,p.flags&=-2053,o.lanes&=~g,Rr(o,p,g)):(ce&&h&&fc(p),p.flags|=1,tt(o,p,l,g),p.child)}function P1(o,p,l,h,g){if(dt(l)){var x=!0;M0(p)}else x=!1;if(zo(p,g),p.stateNode===null)U0(o,p),c1(p,l,h),Ec(p,l,h,g),h=!0;else if(o===null){var C=p.stateNode,j=p.memoizedProps;C.props=j;var q=C.context,tn=l.contextType;typeof tn=="object"&&tn!==null?tn=Et(tn):(tn=dt(l)?za:Ye.current,tn=Do(p,tn));var sn=l.getDerivedStateFromProps,cn=typeof sn=="function"||typeof C.getSnapshotBeforeUpdate=="function";cn||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==h||q!==tn)&&f1(p,C,h,tn),da=!1;var un=p.memoizedState;C.state=un,E0(p,h,C,g),q=p.memoizedState,j!==h||un!==q||ft.current||da?(typeof sn=="function"&&(kc(p,l,sn,h),q=p.memoizedState),(j=da||l1(p,l,j,h,un,q,tn))?(cn||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(p.flags|=4194308)):(typeof C.componentDidMount=="function"&&(p.flags|=4194308),p.memoizedProps=h,p.memoizedState=q),C.props=h,C.state=q,C.context=tn,h=j):(typeof C.componentDidMount=="function"&&(p.flags|=4194308),h=!1)}else{C=p.stateNode,jy(o,p),j=p.memoizedProps,tn=p.type===p.elementType?j:nr(p.type,j),C.props=tn,cn=p.pendingProps,un=C.context,q=l.contextType,typeof q=="object"&&q!==null?q=Et(q):(q=dt(l)?za:Ye.current,q=Do(p,q));var In=l.getDerivedStateFromProps;(sn=typeof In=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==cn||un!==q)&&f1(p,C,h,q),da=!1,un=p.memoizedState,C.state=un,E0(p,h,C,g);var Mn=p.memoizedState;j!==cn||un!==Mn||ft.current||da?(typeof In=="function"&&(kc(p,l,In,h),Mn=p.memoizedState),(tn=da||l1(p,l,tn,h,un,Mn,q)||!1)?(sn||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(h,Mn,q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(h,Mn,q)),typeof C.componentDidUpdate=="function"&&(p.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(p.flags|=1024)):(typeof C.componentDidUpdate!="function"||j===o.memoizedProps&&un===o.memoizedState||(p.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===o.memoizedProps&&un===o.memoizedState||(p.flags|=1024),p.memoizedProps=h,p.memoizedState=Mn),C.props=h,C.state=Mn,C.context=q,h=tn):(typeof C.componentDidUpdate!="function"||j===o.memoizedProps&&un===o.memoizedState||(p.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===o.memoizedProps&&un===o.memoizedState||(p.flags|=1024),h=!1)}return $c(o,p,l,h,x,g)}function $c(o,p,l,h,g,x){x1(o,p);var C=(p.flags&128)!==0;if(!h&&!C)return g&&Ay(p,l,!1),Rr(o,p,x);h=p.stateNode,jO.current=p;var j=C&&typeof l.getDerivedStateFromError!="function"?null:h.render();return p.flags|=1,o!==null&&C?(p.child=Fo(p,o.child,null,x),p.child=Fo(p,null,j,x)):tt(o,p,j,x),p.memoizedState=h.state,g&&Ay(p,l,!0),p.child}function w1(o){var p=o.stateNode;p.pendingContext?Sy(o,p.pendingContext,p.pendingContext!==p.context):p.context&&Sy(o,p.context,!1),Pc(o,p.containerInfo)}function W1(o,p,l,h,g){return Lo(),vc(g),p.flags|=256,tt(o,p,l,h),p.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Fc(o){return{baseLanes:o,cachePool:null,transitions:null}}function S1(o,p,l){var h=p.pendingProps,g=de.current,x=!1,C=(p.flags&128)!==0,j;if((j=C)||(j=o!==null&&o.memoizedState===null?!1:(g&2)!==0),j?(x=!0,p.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),re(de,g&1),o===null)return hc(p),o=p.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((p.mode&1)===0?p.lanes=1:o.data==="$!"?p.lanes=8:p.lanes=1073741824,null):(C=h.children,o=h.fallback,x?(h=p.mode,x=p.child,C={mode:"hidden",children:C},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=rs(C,h,0,null),o=no(o,h,l,null),x.return=p,o.return=p,x.sibling=o,p.child=x,p.child.memoizedState=Fc(l),p.memoizedState=Lc,o):qc(p,C));if(g=o.memoizedState,g!==null&&(j=g.dehydrated,j!==null))return $O(o,p,C,h,j,g,l);if(x){x=h.fallback,C=p.mode,g=o.child,j=g.sibling;var q={mode:"hidden",children:h.children};return(C&1)===0&&p.child!==g?(h=p.child,h.childLanes=0,h.pendingProps=q,p.deletions=null):(h=Ia(g,q),h.subtreeFlags=g.subtreeFlags&14680064),j!==null?x=Ia(j,x):(x=no(x,C,l,null),x.flags|=2),x.return=p,h.return=p,h.sibling=x,p.child=h,h=x,x=p.child,C=o.child.memoizedState,C=C===null?Fc(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=o.childLanes&~l,p.memoizedState=Lc,h}return x=o.child,o=x.sibling,h=Ia(x,{mode:"visible",children:h.children}),(p.mode&1)===0&&(h.lanes=l),h.return=p,h.sibling=null,o!==null&&(l=p.deletions,l===null?(p.deletions=[o],p.flags|=16):l.push(o)),p.child=h,p.memoizedState=null,h}function qc(o,p){return p=rs({mode:"visible",children:p},o.mode,0,null),p.return=o,o.child=p}function z0(o,p,l,h){return h!==null&&vc(h),Fo(p,o.child,null,l),o=qc(p,p.pendingProps.children),o.flags|=2,p.memoizedState=null,o}function $O(o,p,l,h,g,x,C){if(l)return p.flags&256?(p.flags&=-257,h=Tc(Error(t(422))),z0(o,p,C,h)):p.memoizedState!==null?(p.child=o.child,p.flags|=128,null):(x=h.fallback,g=p.mode,h=rs({mode:"visible",children:h.children},g,0,null),x=no(x,g,C,null),x.flags|=2,h.return=p,x.return=p,h.sibling=x,p.child=h,(p.mode&1)!==0&&Fo(p,o.child,null,C),p.child.memoizedState=Fc(C),p.memoizedState=Lc,x);if((p.mode&1)===0)return z0(o,p,C,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var j=h.dgst;return h=j,x=Error(t(419)),h=Tc(x,h,void 0),z0(o,p,C,h)}if(j=(C&o.childLanes)!==0,mt||j){if(h=Le,h!==null){switch(C&-C){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|C))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,Cr(o,g),rr(h,o,g,-1))}return of(),h=Tc(Error(t(421))),z0(o,p,C,h)}return g.data==="$?"?(p.flags|=128,p.child=o.child,p=JO.bind(null,o),g._reactRetry=p,null):(o=x.treeContext,xt=sa(g.nextSibling),Bt=p,ce=!0,Jt=null,o!==null&&(Rt[kt++]=Or,Rt[kt++]=Hr,Rt[kt++]=Ua,Or=o.id,Hr=o.overflow,Ua=p),p=qc(p,h.children),p.flags|=4096,p)}function M1(o,p,l){o.lanes|=p;var h=o.alternate;h!==null&&(h.lanes|=p),Ic(o.return,p,l)}function zc(o,p,l,h,g){var x=o.memoizedState;x===null?o.memoizedState={isBackwards:p,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(x.isBackwards=p,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=l,x.tailMode=g)}function A1(o,p,l){var h=p.pendingProps,g=h.revealOrder,x=h.tail;if(tt(o,p,h.children,l),h=de.current,(h&2)!==0)h=h&1|2,p.flags|=128;else{if(o!==null&&(o.flags&128)!==0)n:for(o=p.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&M1(o,l,p);else if(o.tag===19)M1(o,l,p);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===p)break n;for(;o.sibling===null;){if(o.return===null||o.return===p)break n;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(re(de,h),(p.mode&1)===0)p.memoizedState=null;else switch(g){case"forwards":for(l=p.child,g=null;l!==null;)o=l.alternate,o!==null&&T0(o)===null&&(g=l),l=l.sibling;l=g,l===null?(g=p.child,p.child=null):(g=l.sibling,l.sibling=null),zc(p,!1,g,l,x);break;case"backwards":for(l=null,g=p.child,p.child=null;g!==null;){if(o=g.alternate,o!==null&&T0(o)===null){p.child=g;break}o=g.sibling,g.sibling=l,l=g,g=o}zc(p,!0,l,null,x);break;case"together":zc(p,!1,null,null,void 0);break;default:p.memoizedState=null}return p.child}function U0(o,p){(p.mode&1)===0&&o!==null&&(o.alternate=null,p.alternate=null,p.flags|=2)}function Rr(o,p,l){if(o!==null&&(p.dependencies=o.dependencies),Ya|=p.lanes,(l&p.childLanes)===0)return null;if(o!==null&&p.child!==o.child)throw Error(t(153));if(p.child!==null){for(o=p.child,l=Ia(o,o.pendingProps),p.child=l,l.return=p;o.sibling!==null;)o=o.sibling,l=l.sibling=Ia(o,o.pendingProps),l.return=p;l.sibling=null}return p.child}function LO(o,p,l){switch(p.tag){case 3:w1(p),Lo();break;case 5:Fy(p);break;case 1:dt(p.type)&&M0(p);break;case 4:Pc(p,p.stateNode.containerInfo);break;case 10:var h=p.type._context,g=p.memoizedProps.value;re(N0,h._currentValue),h._currentValue=g;break;case 13:if(h=p.memoizedState,h!==null)return h.dehydrated!==null?(re(de,de.current&1),p.flags|=128,null):(l&p.child.childLanes)!==0?S1(o,p,l):(re(de,de.current&1),o=Rr(o,p,l),o!==null?o.sibling:null);re(de,de.current&1);break;case 19:if(h=(l&p.childLanes)!==0,(o.flags&128)!==0){if(h)return A1(o,p,l);p.flags|=128}if(g=p.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),re(de,de.current),h)break;return null;case 22:case 23:return p.lanes=0,B1(o,p,l)}return Rr(o,p,l)}var _1,Uc,O1,H1;_1=function(o,p){for(var l=p.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===p)break;for(;l.sibling===null;){if(l.return===null||l.return===p)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Uc=function(){},O1=function(o,p,l,h){var g=o.memoizedProps;if(g!==h){o=p.stateNode,Ka(mr.current);var x=null;switch(l){case"input":g=hn(o,g),h=hn(o,h),x=[];break;case"select":g=en({},g,{value:void 0}),h=en({},h,{value:void 0}),x=[];break;case"textarea":g=ge(o,g),h=ge(o,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=w0)}W2(l,h);var C;l=null;for(tn in g)if(!h.hasOwnProperty(tn)&&g.hasOwnProperty(tn)&&g[tn]!=null)if(tn==="style"){var j=g[tn];for(C in j)j.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else tn!=="dangerouslySetInnerHTML"&&tn!=="children"&&tn!=="suppressContentEditableWarning"&&tn!=="suppressHydrationWarning"&&tn!=="autoFocus"&&(a.hasOwnProperty(tn)?x||(x=[]):(x=x||[]).push(tn,null));for(tn in h){var q=h[tn];if(j=g!=null?g[tn]:void 0,h.hasOwnProperty(tn)&&q!==j&&(q!=null||j!=null))if(tn==="style")if(j){for(C in j)!j.hasOwnProperty(C)||q&&q.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in q)q.hasOwnProperty(C)&&j[C]!==q[C]&&(l||(l={}),l[C]=q[C])}else l||(x||(x=[]),x.push(tn,l)),l=q;else tn==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,j=j?j.__html:void 0,q!=null&&j!==q&&(x=x||[]).push(tn,q)):tn==="children"?typeof q!="string"&&typeof q!="number"||(x=x||[]).push(tn,""+q):tn!=="suppressContentEditableWarning"&&tn!=="suppressHydrationWarning"&&(a.hasOwnProperty(tn)?(q!=null&&tn==="onScroll"&&pe("scroll",o),x||j===q||(x=[])):(x=x||[]).push(tn,q))}l&&(x=x||[]).push("style",l);var tn=x;(p.updateQueue=tn)&&(p.flags|=4)}},H1=function(o,p,l,h){l!==h&&(p.flags|=4)};function Np(o,p){if(!ce)switch(o.tailMode){case"hidden":p=o.tail;for(var l=null;p!==null;)p.alternate!==null&&(l=p),p=p.sibling;l===null?o.tail=null:l.sibling=null;break;case"collapsed":l=o.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?p||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Ze(o){var p=o.alternate!==null&&o.alternate.child===o.child,l=0,h=0;if(p)for(var g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=l,p}function FO(o,p,l){var h=p.pendingProps;switch(dc(p),p.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(p),null;case 1:return dt(p.type)&&S0(),Ze(p),null;case 3:return h=p.stateNode,Uo(),ue(ft),ue(Ye),Sc(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(H0(p)?p.flags|=4:o===null||o.memoizedState.isDehydrated&&(p.flags&256)===0||(p.flags|=1024,Jt!==null&&(tf(Jt),Jt=null))),Uc(o,p),Ze(p),null;case 5:wc(p);var g=Ka(Ap.current);if(l=p.type,o!==null&&p.stateNode!=null)O1(o,p,l,h,g),o.ref!==p.ref&&(p.flags|=512,p.flags|=2097152);else{if(!h){if(p.stateNode===null)throw Error(t(166));return Ze(p),null}if(o=Ka(mr.current),H0(p)){h=p.stateNode,l=p.type;var x=p.memoizedProps;switch(h[dr]=p,h[Pp]=x,o=(p.mode&1)!==0,l){case"dialog":pe("cancel",h),pe("close",h);break;case"iframe":case"object":case"embed":pe("load",h);break;case"video":case"audio":for(g=0;g<Ip.length;g++)pe(Ip[g],h);break;case"source":pe("error",h);break;case"img":case"image":case"link":pe("error",h),pe("load",h);break;case"details":pe("toggle",h);break;case"input":yn(h,x),pe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},pe("invalid",h);break;case"textarea":Ht(h,x),pe("invalid",h)}W2(l,x),g=null;for(var C in x)if(x.hasOwnProperty(C)){var j=x[C];C==="children"?typeof j=="string"?h.textContent!==j&&(x.suppressHydrationWarning!==!0&&P0(h.textContent,j,o),g=["children",j]):typeof j=="number"&&h.textContent!==""+j&&(x.suppressHydrationWarning!==!0&&P0(h.textContent,j,o),g=["children",""+j]):a.hasOwnProperty(C)&&j!=null&&C==="onScroll"&&pe("scroll",h)}switch(l){case"input":pn(h),$n(h,x,!0);break;case"textarea":pn(h),Qe(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=w0)}h=g,p.updateQueue=h,h!==null&&(p.flags|=4)}else{C=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=Pe(l)),o==="http://www.w3.org/1999/xhtml"?l==="script"?(o=C.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=C.createElement(l,{is:h.is}):(o=C.createElement(l),l==="select"&&(C=o,h.multiple?C.multiple=!0:h.size&&(C.size=h.size))):o=C.createElementNS(o,l),o[dr]=p,o[Pp]=h,_1(o,p,!1,!1),p.stateNode=o;n:{switch(C=S2(l,h),l){case"dialog":pe("cancel",o),pe("close",o),g=h;break;case"iframe":case"object":case"embed":pe("load",o),g=h;break;case"video":case"audio":for(g=0;g<Ip.length;g++)pe(Ip[g],o);g=h;break;case"source":pe("error",o),g=h;break;case"img":case"image":case"link":pe("error",o),pe("load",o),g=h;break;case"details":pe("toggle",o),g=h;break;case"input":yn(o,h),g=hn(o,h),pe("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=en({},h,{value:void 0}),pe("invalid",o);break;case"textarea":Ht(o,h),g=ge(o,h),pe("invalid",o);break;default:g=h}W2(l,g),j=g;for(x in j)if(j.hasOwnProperty(x)){var q=j[x];x==="style"?tp(o,q):x==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&So(o,q)):x==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&ea(o,q):typeof q=="number"&&ea(o,""+q):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?q!=null&&x==="onScroll"&&pe("scroll",o):q!=null&&M(o,x,q,C))}switch(l){case"input":pn(o),$n(o,h,!1);break;case"textarea":pn(o),Qe(o);break;case"option":h.value!=null&&o.setAttribute("value",""+mn(h.value));break;case"select":o.multiple=!!h.multiple,x=h.value,x!=null?xe(o,!!h.multiple,x,!1):h.defaultValue!=null&&xe(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=w0)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break n;case"img":h=!0;break n;default:h=!1}}h&&(p.flags|=4)}p.ref!==null&&(p.flags|=512,p.flags|=2097152)}return Ze(p),null;case 6:if(o&&p.stateNode!=null)H1(o,p,o.memoizedProps,h);else{if(typeof h!="string"&&p.stateNode===null)throw Error(t(166));if(l=Ka(Ap.current),Ka(mr.current),H0(p)){if(h=p.stateNode,l=p.memoizedProps,h[dr]=p,(x=h.nodeValue!==l)&&(o=Bt,o!==null))switch(o.tag){case 3:P0(h.nodeValue,l,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&P0(h.nodeValue,l,(o.mode&1)!==0)}x&&(p.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[dr]=p,p.stateNode=h}return Ze(p),null;case 13:if(ue(de),h=p.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(ce&&xt!==null&&(p.mode&1)!==0&&(p.flags&128)===0)Ry(),Lo(),p.flags|=98560,x=!1;else if(x=H0(p),h!==null&&h.dehydrated!==null){if(o===null){if(!x)throw Error(t(318));if(x=p.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[dr]=p}else Lo(),(p.flags&128)===0&&(p.memoizedState=null),p.flags|=4;Ze(p),x=!1}else Jt!==null&&(tf(Jt),Jt=null),x=!0;if(!x)return p.flags&65536?p:null}return(p.flags&128)!==0?(p.lanes=l,p):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(p.child.flags|=8192,(p.mode&1)!==0&&(o===null||(de.current&1)!==0?Re===0&&(Re=3):of())),p.updateQueue!==null&&(p.flags|=4),Ze(p),null);case 4:return Uo(),Uc(o,p),o===null&&Bp(p.stateNode.containerInfo),Ze(p),null;case 10:return yc(p.type._context),Ze(p),null;case 17:return dt(p.type)&&S0(),Ze(p),null;case 19:if(ue(de),x=p.memoizedState,x===null)return Ze(p),null;if(h=(p.flags&128)!==0,C=x.rendering,C===null)if(h)Np(x,!1);else{if(Re!==0||o!==null&&(o.flags&128)!==0)for(o=p.child;o!==null;){if(C=T0(o),C!==null){for(p.flags|=128,Np(x,!1),h=C.updateQueue,h!==null&&(p.updateQueue=h,p.flags|=4),p.subtreeFlags=0,h=l,l=p.child;l!==null;)x=l,o=h,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=o,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,o=C.dependencies,x.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),l=l.sibling;return re(de,de.current&1|2),p.child}o=o.sibling}x.tail!==null&&we()>Qo&&(p.flags|=128,h=!0,Np(x,!1),p.lanes=4194304)}else{if(!h)if(o=T0(C),o!==null){if(p.flags|=128,h=!0,l=o.updateQueue,l!==null&&(p.updateQueue=l,p.flags|=4),Np(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!ce)return Ze(p),null}else 2*we()-x.renderingStartTime>Qo&&l!==1073741824&&(p.flags|=128,h=!0,Np(x,!1),p.lanes=4194304);x.isBackwards?(C.sibling=p.child,p.child=C):(l=x.last,l!==null?l.sibling=C:p.child=C,x.last=C)}return x.tail!==null?(p=x.tail,x.rendering=p,x.tail=p.sibling,x.renderingStartTime=we(),p.sibling=null,l=de.current,re(de,h?l&1|2:l&1),p):(Ze(p),null);case 22:case 23:return af(),h=p.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(p.flags|=8192),h&&(p.mode&1)!==0?(Pt&1073741824)!==0&&(Ze(p),p.subtreeFlags&6&&(p.flags|=8192)):Ze(p),null;case 24:return null;case 25:return null}throw Error(t(156,p.tag))}function qO(o,p){switch(dc(p),p.tag){case 1:return dt(p.type)&&S0(),o=p.flags,o&65536?(p.flags=o&-65537|128,p):null;case 3:return Uo(),ue(ft),ue(Ye),Sc(),o=p.flags,(o&65536)!==0&&(o&128)===0?(p.flags=o&-65537|128,p):null;case 5:return wc(p),null;case 13:if(ue(de),o=p.memoizedState,o!==null&&o.dehydrated!==null){if(p.alternate===null)throw Error(t(340));Lo()}return o=p.flags,o&65536?(p.flags=o&-65537|128,p):null;case 19:return ue(de),null;case 4:return Uo(),null;case 10:return yc(p.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var V0=!1,Je=!1,zO=typeof WeakSet=="function"?WeakSet:Set,Wn=null;function Go(o,p){var l=o.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ye(o,p,h)}else l.current=null}function Vc(o,p,l){try{l()}catch(h){ye(o,p,h)}}var C1=!1;function UO(o,p){if(ac=f0,o=ly(),Y2(o)){if("selectionStart"in o)var l={start:o.selectionStart,end:o.selectionEnd};else n:{l=(l=o.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break n}var C=0,j=-1,q=-1,tn=0,sn=0,cn=o,un=null;e:for(;;){for(var In;cn!==l||g!==0&&cn.nodeType!==3||(j=C+g),cn!==x||h!==0&&cn.nodeType!==3||(q=C+h),cn.nodeType===3&&(C+=cn.nodeValue.length),(In=cn.firstChild)!==null;)un=cn,cn=In;for(;;){if(cn===o)break e;if(un===l&&++tn===g&&(j=C),un===x&&++sn===h&&(q=C),(In=cn.nextSibling)!==null)break;cn=un,un=cn.parentNode}cn=In}l=j===-1||q===-1?null:{start:j,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(oc={focusedElem:o,selectionRange:l},f0=!1,Wn=p;Wn!==null;)if(p=Wn,o=p.child,(p.subtreeFlags&1028)!==0&&o!==null)o.return=p,Wn=o;else for(;Wn!==null;){p=Wn;try{var Mn=p.alternate;if((p.flags&1024)!==0)switch(p.tag){case 0:case 11:case 15:break;case 1:if(Mn!==null){var On=Mn.memoizedProps,We=Mn.memoizedState,X=p.stateNode,z=X.getSnapshotBeforeUpdate(p.elementType===p.type?On:nr(p.type,On),We);X.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var nn=p.stateNode.containerInfo;nn.nodeType===1?nn.textContent="":nn.nodeType===9&&nn.documentElement&&nn.removeChild(nn.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(dn){ye(p,p.return,dn)}if(o=p.sibling,o!==null){o.return=p.return,Wn=o;break}Wn=p.return}return Mn=C1,C1=!1,Mn}function Rp(o,p,l){var h=p.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var x=g.destroy;g.destroy=void 0,x!==void 0&&Vc(p,l,x)}g=g.next}while(g!==h)}}function G0(o,p){if(p=p.updateQueue,p=p!==null?p.lastEffect:null,p!==null){var l=p=p.next;do{if((l.tag&o)===o){var h=l.create;l.destroy=h()}l=l.next}while(l!==p)}}function Gc(o){var p=o.ref;if(p!==null){var l=o.stateNode;switch(o.tag){case 5:o=l;break;default:o=l}typeof p=="function"?p(o):p.current=o}}function N1(o){var p=o.alternate;p!==null&&(o.alternate=null,N1(p)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(p=o.stateNode,p!==null&&(delete p[dr],delete p[Pp],delete p[sc],delete p[MO],delete p[AO])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function R1(o){return o.tag===5||o.tag===3||o.tag===4}function k1(o){n:for(;;){for(;o.sibling===null;){if(o.return===null||R1(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue n;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Kc(o,p,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,p?l.nodeType===8?l.parentNode.insertBefore(o,p):l.insertBefore(o,p):(l.nodeType===8?(p=l.parentNode,p.insertBefore(o,l)):(p=l,p.appendChild(o)),l=l._reactRootContainer,l!=null||p.onclick!==null||(p.onclick=w0));else if(h!==4&&(o=o.child,o!==null))for(Kc(o,p,l),o=o.sibling;o!==null;)Kc(o,p,l),o=o.sibling}function Qc(o,p,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,p?l.insertBefore(o,p):l.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Qc(o,p,l),o=o.sibling;o!==null;)Qc(o,p,l),o=o.sibling}var Ve=null,er=!1;function ha(o,p,l){for(l=l.child;l!==null;)E1(o,p,l),l=l.sibling}function E1(o,p,l){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(i0,l)}catch{}switch(l.tag){case 5:Je||Go(l,p);case 6:var h=Ve,g=er;Ve=null,ha(o,p,l),Ve=h,er=g,Ve!==null&&(er?(o=Ve,l=l.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):Ve.removeChild(l.stateNode));break;case 18:Ve!==null&&(er?(o=Ve,l=l.stateNode,o.nodeType===8?uc(o.parentNode,l):o.nodeType===1&&uc(o,l),fp(o)):uc(Ve,l.stateNode));break;case 4:h=Ve,g=er,Ve=l.stateNode.containerInfo,er=!0,ha(o,p,l),Ve=h,er=g;break;case 0:case 11:case 14:case 15:if(!Je&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Vc(l,p,C),g=g.next}while(g!==h)}ha(o,p,l);break;case 1:if(!Je&&(Go(l,p),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(j){ye(l,p,j)}ha(o,p,l);break;case 21:ha(o,p,l);break;case 22:l.mode&1?(Je=(h=Je)||l.memoizedState!==null,ha(o,p,l),Je=h):ha(o,p,l);break;default:ha(o,p,l)}}function T1(o){var p=o.updateQueue;if(p!==null){o.updateQueue=null;var l=o.stateNode;l===null&&(l=o.stateNode=new zO),p.forEach(function(h){var g=nH.bind(null,o,h);l.has(h)||(l.add(h),h.then(g,g))})}}function tr(o,p){var l=p.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var x=o,C=p,j=C;n:for(;j!==null;){switch(j.tag){case 5:Ve=j.stateNode,er=!1;break n;case 3:Ve=j.stateNode.containerInfo,er=!0;break n;case 4:Ve=j.stateNode.containerInfo,er=!0;break n}j=j.return}if(Ve===null)throw Error(t(160));E1(x,C,g),Ve=null,er=!1;var q=g.alternate;q!==null&&(q.return=null),g.return=null}catch(tn){ye(g,p,tn)}}if(p.subtreeFlags&12854)for(p=p.child;p!==null;)D1(p,o),p=p.sibling}function D1(o,p){var l=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(p,o),vr(o),h&4){try{Rp(3,o,o.return),G0(3,o)}catch(On){ye(o,o.return,On)}try{Rp(5,o,o.return)}catch(On){ye(o,o.return,On)}}break;case 1:tr(p,o),vr(o),h&512&&l!==null&&Go(l,l.return);break;case 5:if(tr(p,o),vr(o),h&512&&l!==null&&Go(l,l.return),o.flags&32){var g=o.stateNode;try{ea(g,"")}catch(On){ye(o,o.return,On)}}if(h&4&&(g=o.stateNode,g!=null)){var x=o.memoizedProps,C=l!==null?l.memoizedProps:x,j=o.type,q=o.updateQueue;if(o.updateQueue=null,q!==null)try{j==="input"&&x.type==="radio"&&x.name!=null&&gn(g,x),S2(j,C);var tn=S2(j,x);for(C=0;C<q.length;C+=2){var sn=q[C],cn=q[C+1];sn==="style"?tp(g,cn):sn==="dangerouslySetInnerHTML"?So(g,cn):sn==="children"?ea(g,cn):M(g,sn,cn,tn)}switch(j){case"input":wn(g,x);break;case"textarea":be(g,x);break;case"select":var un=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var In=x.value;In!=null?xe(g,!!x.multiple,In,!1):un!==!!x.multiple&&(x.defaultValue!=null?xe(g,!!x.multiple,x.defaultValue,!0):xe(g,!!x.multiple,x.multiple?[]:"",!1))}g[Pp]=x}catch(On){ye(o,o.return,On)}}break;case 6:if(tr(p,o),vr(o),h&4){if(o.stateNode===null)throw Error(t(162));g=o.stateNode,x=o.memoizedProps;try{g.nodeValue=x}catch(On){ye(o,o.return,On)}}break;case 3:if(tr(p,o),vr(o),h&4&&l!==null&&l.memoizedState.isDehydrated)try{fp(p.containerInfo)}catch(On){ye(o,o.return,On)}break;case 4:tr(p,o),vr(o);break;case 13:tr(p,o),vr(o),g=o.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Zc=we())),h&4&&T1(o);break;case 22:if(sn=l!==null&&l.memoizedState!==null,o.mode&1?(Je=(tn=Je)||sn,tr(p,o),Je=tn):tr(p,o),vr(o),h&8192){if(tn=o.memoizedState!==null,(o.stateNode.isHidden=tn)&&!sn&&(o.mode&1)!==0)for(Wn=o,sn=o.child;sn!==null;){for(cn=Wn=sn;Wn!==null;){switch(un=Wn,In=un.child,un.tag){case 0:case 11:case 14:case 15:Rp(4,un,un.return);break;case 1:Go(un,un.return);var Mn=un.stateNode;if(typeof Mn.componentWillUnmount=="function"){h=un,l=un.return;try{p=h,Mn.props=p.memoizedProps,Mn.state=p.memoizedState,Mn.componentWillUnmount()}catch(On){ye(h,l,On)}}break;case 5:Go(un,un.return);break;case 22:if(un.memoizedState!==null){L1(cn);continue}}In!==null?(In.return=un,Wn=In):L1(cn)}sn=sn.sibling}n:for(sn=null,cn=o;;){if(cn.tag===5){if(sn===null){sn=cn;try{g=cn.stateNode,tn?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(j=cn.stateNode,q=cn.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null,j.style.display=ta("display",C))}catch(On){ye(o,o.return,On)}}}else if(cn.tag===6){if(sn===null)try{cn.stateNode.nodeValue=tn?"":cn.memoizedProps}catch(On){ye(o,o.return,On)}}else if((cn.tag!==22&&cn.tag!==23||cn.memoizedState===null||cn===o)&&cn.child!==null){cn.child.return=cn,cn=cn.child;continue}if(cn===o)break n;for(;cn.sibling===null;){if(cn.return===null||cn.return===o)break n;sn===cn&&(sn=null),cn=cn.return}sn===cn&&(sn=null),cn.sibling.return=cn.return,cn=cn.sibling}}break;case 19:tr(p,o),vr(o),h&4&&T1(o);break;case 21:break;default:tr(p,o),vr(o)}}function vr(o){var p=o.flags;if(p&2){try{n:{for(var l=o.return;l!==null;){if(R1(l)){var h=l;break n}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(ea(g,""),h.flags&=-33);var x=k1(o);Qc(o,x,g);break;case 3:case 4:var C=h.stateNode.containerInfo,j=k1(o);Kc(o,j,C);break;default:throw Error(t(161))}}catch(q){ye(o,o.return,q)}o.flags&=-3}p&4096&&(o.flags&=-4097)}function VO(o,p,l){Wn=o,j1(o)}function j1(o,p,l){for(var h=(o.mode&1)!==0;Wn!==null;){var g=Wn,x=g.child;if(g.tag===22&&h){var C=g.memoizedState!==null||V0;if(!C){var j=g.alternate,q=j!==null&&j.memoizedState!==null||Je;j=V0;var tn=Je;if(V0=C,(Je=q)&&!tn)for(Wn=g;Wn!==null;)C=Wn,q=C.child,C.tag===22&&C.memoizedState!==null?F1(g):q!==null?(q.return=C,Wn=q):F1(g);for(;x!==null;)Wn=x,j1(x),x=x.sibling;Wn=g,V0=j,Je=tn}$1(o)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,Wn=x):$1(o)}}function $1(o){for(;Wn!==null;){var p=Wn;if((p.flags&8772)!==0){var l=p.alternate;try{if((p.flags&8772)!==0)switch(p.tag){case 0:case 11:case 15:Je||G0(5,p);break;case 1:var h=p.stateNode;if(p.flags&4&&!Je)if(l===null)h.componentDidMount();else{var g=p.elementType===p.type?l.memoizedProps:nr(p.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=p.updateQueue;x!==null&&Ly(p,x,h);break;case 3:var C=p.updateQueue;if(C!==null){if(l=null,p.child!==null)switch(p.child.tag){case 5:l=p.child.stateNode;break;case 1:l=p.child.stateNode}Ly(p,C,l)}break;case 5:var j=p.stateNode;if(l===null&&p.flags&4){l=j;var q=p.memoizedProps;switch(p.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(p.memoizedState===null){var tn=p.alternate;if(tn!==null){var sn=tn.memoizedState;if(sn!==null){var cn=sn.dehydrated;cn!==null&&fp(cn)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Je||p.flags&512&&Gc(p)}catch(un){ye(p,p.return,un)}}if(p===o){Wn=null;break}if(l=p.sibling,l!==null){l.return=p.return,Wn=l;break}Wn=p.return}}function L1(o){for(;Wn!==null;){var p=Wn;if(p===o){Wn=null;break}var l=p.sibling;if(l!==null){l.return=p.return,Wn=l;break}Wn=p.return}}function F1(o){for(;Wn!==null;){var p=Wn;try{switch(p.tag){case 0:case 11:case 15:var l=p.return;try{G0(4,p)}catch(q){ye(p,l,q)}break;case 1:var h=p.stateNode;if(typeof h.componentDidMount=="function"){var g=p.return;try{h.componentDidMount()}catch(q){ye(p,g,q)}}var x=p.return;try{Gc(p)}catch(q){ye(p,x,q)}break;case 5:var C=p.return;try{Gc(p)}catch(q){ye(p,C,q)}}}catch(q){ye(p,p.return,q)}if(p===o){Wn=null;break}var j=p.sibling;if(j!==null){j.return=p.return,Wn=j;break}Wn=p.return}}var GO=Math.ceil,K0=O.ReactCurrentDispatcher,Yc=O.ReactCurrentOwner,Dt=O.ReactCurrentBatchConfig,Un=0,Le=null,_e=null,Ge=0,Pt=0,Ko=la(0),Re=0,kp=null,Ya=0,Q0=0,Xc=0,Ep=null,ht=null,Zc=0,Qo=1/0,kr=null,Y0=!1,Jc=null,va=null,X0=!1,ga=null,Z0=0,Tp=0,nf=null,J0=-1,ns=0;function rt(){return(Un&6)!==0?we():J0!==-1?J0:J0=we()}function ba(o){return(o.mode&1)===0?1:(Un&2)!==0&&Ge!==0?Ge&-Ge:OO.transition!==null?(ns===0&&(ns=kb()),ns):(o=Jn,o!==0||(o=window.event,o=o===void 0?16:zb(o.type)),o)}function rr(o,p,l,h){if(50<Tp)throw Tp=0,nf=null,Error(t(185));pp(o,l,h),((Un&2)===0||o!==Le)&&(o===Le&&((Un&2)===0&&(Q0|=l),Re===4&&ya(o,Ge)),vt(o,h),l===1&&Un===0&&(p.mode&1)===0&&(Qo=we()+500,A0&&fa()))}function vt(o,p){var l=o.callbackNode;O_(o,p);var h=s0(o,o===Le?Ge:0);if(h===0)l!==null&&Cb(l),o.callbackNode=null,o.callbackPriority=0;else if(p=h&-h,o.callbackPriority!==p){if(l!=null&&Cb(l),p===1)o.tag===0?_O(z1.bind(null,o)):_y(z1.bind(null,o)),WO(function(){(Un&6)===0&&fa()}),l=null;else{switch(Eb(h)){case 1:l=N2;break;case 4:l=Nb;break;case 16:l=o0;break;case 536870912:l=Rb;break;default:l=o0}l=Z1(l,q1.bind(null,o))}o.callbackPriority=p,o.callbackNode=l}}function q1(o,p){if(J0=-1,ns=0,(Un&6)!==0)throw Error(t(327));var l=o.callbackNode;if(Yo()&&o.callbackNode!==l)return null;var h=s0(o,o===Le?Ge:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||p)p=es(o,h);else{p=h;var g=Un;Un|=2;var x=V1();(Le!==o||Ge!==p)&&(kr=null,Qo=we()+500,Za(o,p));do try{YO();break}catch(j){U1(o,j)}while(!0);bc(),K0.current=x,Un=g,_e!==null?p=0:(Le=null,Ge=0,p=Re)}if(p!==0){if(p===2&&(g=R2(o),g!==0&&(h=g,p=ef(o,g))),p===1)throw l=kp,Za(o,0),ya(o,h),vt(o,we()),l;if(p===6)ya(o,h);else{if(g=o.current.alternate,(h&30)===0&&!KO(g)&&(p=es(o,h),p===2&&(x=R2(o),x!==0&&(h=x,p=ef(o,x))),p===1))throw l=kp,Za(o,0),ya(o,h),vt(o,we()),l;switch(o.finishedWork=g,o.finishedLanes=h,p){case 0:case 1:throw Error(t(345));case 2:Ja(o,ht,kr);break;case 3:if(ya(o,h),(h&130023424)===h&&(p=Zc+500-we(),10<p)){if(s0(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){rt(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=pc(Ja.bind(null,o,ht,kr),p);break}Ja(o,ht,kr);break;case 4:if(ya(o,h),(h&4194240)===h)break;for(p=o.eventTimes,g=-1;0<h;){var C=31-Xt(h);x=1<<C,C=p[C],C>g&&(g=C),h&=~x}if(h=g,h=we()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*GO(h/1960))-h,10<h){o.timeoutHandle=pc(Ja.bind(null,o,ht,kr),h);break}Ja(o,ht,kr);break;case 5:Ja(o,ht,kr);break;default:throw Error(t(329))}}}return vt(o,we()),o.callbackNode===l?q1.bind(null,o):null}function ef(o,p){var l=Ep;return o.current.memoizedState.isDehydrated&&(Za(o,p).flags|=256),o=es(o,p),o!==2&&(p=ht,ht=l,p!==null&&tf(p)),o}function tf(o){ht===null?ht=o:ht.push.apply(ht,o)}function KO(o){for(var p=o;;){if(p.flags&16384){var l=p.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],x=g.getSnapshot;g=g.value;try{if(!Zt(x(),g))return!1}catch{return!1}}}if(l=p.child,p.subtreeFlags&16384&&l!==null)l.return=p,p=l;else{if(p===o)break;for(;p.sibling===null;){if(p.return===null||p.return===o)return!0;p=p.return}p.sibling.return=p.return,p=p.sibling}}return!0}function ya(o,p){for(p&=~Xc,p&=~Q0,o.suspendedLanes|=p,o.pingedLanes&=~p,o=o.expirationTimes;0<p;){var l=31-Xt(p),h=1<<l;o[l]=-1,p&=~h}}function z1(o){if((Un&6)!==0)throw Error(t(327));Yo();var p=s0(o,0);if((p&1)===0)return vt(o,we()),null;var l=es(o,p);if(o.tag!==0&&l===2){var h=R2(o);h!==0&&(p=h,l=ef(o,h))}if(l===1)throw l=kp,Za(o,0),ya(o,p),vt(o,we()),l;if(l===6)throw Error(t(345));return o.finishedWork=o.current.alternate,o.finishedLanes=p,Ja(o,ht,kr),vt(o,we()),null}function rf(o,p){var l=Un;Un|=1;try{return o(p)}finally{Un=l,Un===0&&(Qo=we()+500,A0&&fa())}}function Xa(o){ga!==null&&ga.tag===0&&(Un&6)===0&&Yo();var p=Un;Un|=1;var l=Dt.transition,h=Jn;try{if(Dt.transition=null,Jn=1,o)return o()}finally{Jn=h,Dt.transition=l,Un=p,(Un&6)===0&&fa()}}function af(){Pt=Ko.current,ue(Ko)}function Za(o,p){o.finishedWork=null,o.finishedLanes=0;var l=o.timeoutHandle;if(l!==-1&&(o.timeoutHandle=-1,wO(l)),_e!==null)for(l=_e.return;l!==null;){var h=l;switch(dc(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&S0();break;case 3:Uo(),ue(ft),ue(Ye),Sc();break;case 5:wc(h);break;case 4:Uo();break;case 13:ue(de);break;case 19:ue(de);break;case 10:yc(h.type._context);break;case 22:case 23:af()}l=l.return}if(Le=o,_e=o=Ia(o.current,null),Ge=Pt=p,Re=0,kp=null,Xc=Q0=Ya=0,ht=Ep=null,Ga!==null){for(p=0;p<Ga.length;p++)if(l=Ga[p],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,x=l.pending;if(x!==null){var C=x.next;x.next=g,h.next=C}l.pending=h}Ga=null}return o}function U1(o,p){do{var l=_e;try{if(bc(),D0.current=F0,j0){for(var h=me.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}j0=!1}if(Qa=0,$e=Ne=me=null,_p=!1,Op=0,Yc.current=null,l===null||l.return===null){Re=1,kp=p,_e=null;break}n:{var x=o,C=l.return,j=l,q=p;if(p=Ge,j.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var tn=q,sn=j,cn=sn.tag;if((sn.mode&1)===0&&(cn===0||cn===11||cn===15)){var un=sn.alternate;un?(sn.updateQueue=un.updateQueue,sn.memoizedState=un.memoizedState,sn.lanes=un.lanes):(sn.updateQueue=null,sn.memoizedState=null)}var In=v1(C);if(In!==null){In.flags&=-257,g1(In,C,j,x,p),In.mode&1&&h1(x,tn,p),p=In,q=tn;var Mn=p.updateQueue;if(Mn===null){var On=new Set;On.add(q),p.updateQueue=On}else Mn.add(q);break n}else{if((p&1)===0){h1(x,tn,p),of();break n}q=Error(t(426))}}else if(ce&&j.mode&1){var We=v1(C);if(We!==null){(We.flags&65536)===0&&(We.flags|=256),g1(We,C,j,x,p),vc(Vo(q,j));break n}}x=q=Vo(q,j),Re!==4&&(Re=2),Ep===null?Ep=[x]:Ep.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,p&=-p,x.lanes|=p;var X=d1(x,q,p);$y(x,X);break n;case 1:j=q;var z=x.type,nn=x.stateNode;if((x.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||nn!==null&&typeof nn.componentDidCatch=="function"&&(va===null||!va.has(nn)))){x.flags|=65536,p&=-p,x.lanes|=p;var dn=m1(x,j,p);$y(x,dn);break n}}x=x.return}while(x!==null)}K1(l)}catch(Cn){p=Cn,_e===l&&l!==null&&(_e=l=l.return);continue}break}while(!0)}function V1(){var o=K0.current;return K0.current=F0,o===null?F0:o}function of(){(Re===0||Re===3||Re===2)&&(Re=4),Le===null||(Ya&268435455)===0&&(Q0&268435455)===0||ya(Le,Ge)}function es(o,p){var l=Un;Un|=2;var h=V1();(Le!==o||Ge!==p)&&(kr=null,Za(o,p));do try{QO();break}catch(g){U1(o,g)}while(!0);if(bc(),Un=l,K0.current=h,_e!==null)throw Error(t(261));return Le=null,Ge=0,Re}function QO(){for(;_e!==null;)G1(_e)}function YO(){for(;_e!==null&&!B_();)G1(_e)}function G1(o){var p=X1(o.alternate,o,Pt);o.memoizedProps=o.pendingProps,p===null?K1(o):_e=p,Yc.current=null}function K1(o){var p=o;do{var l=p.alternate;if(o=p.return,(p.flags&32768)===0){if(l=FO(l,p,Pt),l!==null){_e=l;return}}else{if(l=qO(l,p),l!==null){l.flags&=32767,_e=l;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Re=6,_e=null;return}}if(p=p.sibling,p!==null){_e=p;return}_e=p=o}while(p!==null);Re===0&&(Re=5)}function Ja(o,p,l){var h=Jn,g=Dt.transition;try{Dt.transition=null,Jn=1,XO(o,p,l,h)}finally{Dt.transition=g,Jn=h}return null}function XO(o,p,l,h){do Yo();while(ga!==null);if((Un&6)!==0)throw Error(t(327));l=o.finishedWork;var g=o.finishedLanes;if(l===null)return null;if(o.finishedWork=null,o.finishedLanes=0,l===o.current)throw Error(t(177));o.callbackNode=null,o.callbackPriority=0;var x=l.lanes|l.childLanes;if(H_(o,x),o===Le&&(_e=Le=null,Ge=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||X0||(X0=!0,Z1(o0,function(){return Yo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Dt.transition,Dt.transition=null;var C=Jn;Jn=1;var j=Un;Un|=4,Yc.current=null,UO(o,l),D1(l,o),gO(oc),f0=!!ac,oc=ac=null,o.current=l,VO(l),x_(),Un=j,Jn=C,Dt.transition=x}else o.current=l;if(X0&&(X0=!1,ga=o,Z0=g),x=o.pendingLanes,x===0&&(va=null),W_(l.stateNode),vt(o,we()),p!==null)for(h=o.onRecoverableError,l=0;l<p.length;l++)g=p[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(Y0)throw Y0=!1,o=Jc,Jc=null,o;return(Z0&1)!==0&&o.tag!==0&&Yo(),x=o.pendingLanes,(x&1)!==0?o===nf?Tp++:(Tp=0,nf=o):Tp=0,fa(),null}function Yo(){if(ga!==null){var o=Eb(Z0),p=Dt.transition,l=Jn;try{if(Dt.transition=null,Jn=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Z0=0,(Un&6)!==0)throw Error(t(331));var g=Un;for(Un|=4,Wn=o.current;Wn!==null;){var x=Wn,C=x.child;if((Wn.flags&16)!==0){var j=x.deletions;if(j!==null){for(var q=0;q<j.length;q++){var tn=j[q];for(Wn=tn;Wn!==null;){var sn=Wn;switch(sn.tag){case 0:case 11:case 15:Rp(8,sn,x)}var cn=sn.child;if(cn!==null)cn.return=sn,Wn=cn;else for(;Wn!==null;){sn=Wn;var un=sn.sibling,In=sn.return;if(N1(sn),sn===tn){Wn=null;break}if(un!==null){un.return=In,Wn=un;break}Wn=In}}}var Mn=x.alternate;if(Mn!==null){var On=Mn.child;if(On!==null){Mn.child=null;do{var We=On.sibling;On.sibling=null,On=We}while(On!==null)}}Wn=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,Wn=C;else n:for(;Wn!==null;){if(x=Wn,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Rp(9,x,x.return)}var X=x.sibling;if(X!==null){X.return=x.return,Wn=X;break n}Wn=x.return}}var z=o.current;for(Wn=z;Wn!==null;){C=Wn;var nn=C.child;if((C.subtreeFlags&2064)!==0&&nn!==null)nn.return=C,Wn=nn;else n:for(C=z;Wn!==null;){if(j=Wn,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:G0(9,j)}}catch(Cn){ye(j,j.return,Cn)}if(j===C){Wn=null;break n}var dn=j.sibling;if(dn!==null){dn.return=j.return,Wn=dn;break n}Wn=j.return}}if(Un=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(i0,o)}catch{}h=!0}return h}finally{Jn=l,Dt.transition=p}}return!1}function Q1(o,p,l){p=Vo(l,p),p=d1(o,p,1),o=ma(o,p,1),p=rt(),o!==null&&(pp(o,1,p),vt(o,p))}function ye(o,p,l){if(o.tag===3)Q1(o,o,l);else for(;p!==null;){if(p.tag===3){Q1(p,o,l);break}else if(p.tag===1){var h=p.stateNode;if(typeof p.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Vo(l,o),o=m1(p,o,1),p=ma(p,o,1),o=rt(),p!==null&&(pp(p,1,o),vt(p,o));break}}p=p.return}}function ZO(o,p,l){var h=o.pingCache;h!==null&&h.delete(p),p=rt(),o.pingedLanes|=o.suspendedLanes&l,Le===o&&(Ge&l)===l&&(Re===4||Re===3&&(Ge&130023424)===Ge&&500>we()-Zc?Za(o,0):Xc|=l),vt(o,p)}function Y1(o,p){p===0&&((o.mode&1)===0?p=1:(p=u0,u0<<=1,(u0&130023424)===0&&(u0=4194304)));var l=rt();o=Cr(o,p),o!==null&&(pp(o,p,l),vt(o,l))}function JO(o){var p=o.memoizedState,l=0;p!==null&&(l=p.retryLane),Y1(o,l)}function nH(o,p){var l=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(p),Y1(o,l)}var X1;X1=function(o,p,l){if(o!==null)if(o.memoizedProps!==p.pendingProps||ft.current)mt=!0;else{if((o.lanes&l)===0&&(p.flags&128)===0)return mt=!1,LO(o,p,l);mt=(o.flags&131072)!==0}else mt=!1,ce&&(p.flags&1048576)!==0&&Oy(p,O0,p.index);switch(p.lanes=0,p.tag){case 2:var h=p.type;U0(o,p),o=p.pendingProps;var g=Do(p,Ye.current);zo(p,l),g=_c(null,p,h,o,g,l);var x=Oc();return p.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(p.tag=1,p.memoizedState=null,p.updateQueue=null,dt(h)?(x=!0,M0(p)):x=!1,p.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,xc(p),g.updater=q0,p.stateNode=g,g._reactInternals=p,Ec(p,h,o,l),p=$c(null,p,h,!0,x,l)):(p.tag=0,ce&&x&&fc(p),tt(null,p,g,l),p=p.child),p;case 16:h=p.elementType;n:{switch(U0(o,p),o=p.pendingProps,g=h._init,h=g(h._payload),p.type=h,g=p.tag=tH(h),o=nr(h,o),g){case 0:p=jc(null,p,h,o,l);break n;case 1:p=P1(null,p,h,o,l);break n;case 11:p=b1(null,p,h,o,l);break n;case 14:p=y1(null,p,h,nr(h.type,o),l);break n}throw Error(t(306,h,""))}return p;case 0:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:nr(h,g),jc(o,p,h,g,l);case 1:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:nr(h,g),P1(o,p,h,g,l);case 3:n:{if(w1(p),o===null)throw Error(t(387));h=p.pendingProps,x=p.memoizedState,g=x.element,jy(o,p),E0(p,h,null,l);var C=p.memoizedState;if(h=C.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},p.updateQueue.baseState=x,p.memoizedState=x,p.flags&256){g=Vo(Error(t(423)),p),p=W1(o,p,h,l,g);break n}else if(h!==g){g=Vo(Error(t(424)),p),p=W1(o,p,h,l,g);break n}else for(xt=sa(p.stateNode.containerInfo.firstChild),Bt=p,ce=!0,Jt=null,l=Ty(p,null,h,l),p.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Lo(),h===g){p=Rr(o,p,l);break n}tt(o,p,h,l)}p=p.child}return p;case 5:return Fy(p),o===null&&hc(p),h=p.type,g=p.pendingProps,x=o!==null?o.memoizedProps:null,C=g.children,ic(h,g)?C=null:x!==null&&ic(h,x)&&(p.flags|=32),x1(o,p),tt(o,p,C,l),p.child;case 6:return o===null&&hc(p),null;case 13:return S1(o,p,l);case 4:return Pc(p,p.stateNode.containerInfo),h=p.pendingProps,o===null?p.child=Fo(p,null,h,l):tt(o,p,h,l),p.child;case 11:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:nr(h,g),b1(o,p,h,g,l);case 7:return tt(o,p,p.pendingProps,l),p.child;case 8:return tt(o,p,p.pendingProps.children,l),p.child;case 12:return tt(o,p,p.pendingProps.children,l),p.child;case 10:n:{if(h=p.type._context,g=p.pendingProps,x=p.memoizedProps,C=g.value,re(N0,h._currentValue),h._currentValue=C,x!==null)if(Zt(x.value,C)){if(x.children===g.children&&!ft.current){p=Rr(o,p,l);break n}}else for(x=p.child,x!==null&&(x.return=p);x!==null;){var j=x.dependencies;if(j!==null){C=x.child;for(var q=j.firstContext;q!==null;){if(q.context===h){if(x.tag===1){q=Nr(-1,l&-l),q.tag=2;var tn=x.updateQueue;if(tn!==null){tn=tn.shared;var sn=tn.pending;sn===null?q.next=q:(q.next=sn.next,sn.next=q),tn.pending=q}}x.lanes|=l,q=x.alternate,q!==null&&(q.lanes|=l),Ic(x.return,l,p),j.lanes|=l;break}q=q.next}}else if(x.tag===10)C=x.type===p.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,j=C.alternate,j!==null&&(j.lanes|=l),Ic(C,l,p),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===p){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}tt(o,p,g.children,l),p=p.child}return p;case 9:return g=p.type,h=p.pendingProps.children,zo(p,l),g=Et(g),h=h(g),p.flags|=1,tt(o,p,h,l),p.child;case 14:return h=p.type,g=nr(h,p.pendingProps),g=nr(h.type,g),y1(o,p,h,g,l);case 15:return I1(o,p,p.type,p.pendingProps,l);case 17:return h=p.type,g=p.pendingProps,g=p.elementType===h?g:nr(h,g),U0(o,p),p.tag=1,dt(h)?(o=!0,M0(p)):o=!1,zo(p,l),c1(p,h,g),Ec(p,h,g,l),$c(null,p,h,!0,o,l);case 19:return A1(o,p,l);case 22:return B1(o,p,l)}throw Error(t(156,p.tag))};function Z1(o,p){return Hb(o,p)}function eH(o,p,l,h){this.tag=o,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=p,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(o,p,l,h){return new eH(o,p,l,h)}function pf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function tH(o){if(typeof o=="function")return pf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===R)return 11;if(o===G)return 14}return 2}function Ia(o,p){var l=o.alternate;return l===null?(l=jt(o.tag,p,o.key,o.mode),l.elementType=o.elementType,l.type=o.type,l.stateNode=o.stateNode,l.alternate=o,o.alternate=l):(l.pendingProps=p,l.type=o.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=o.flags&14680064,l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,p=o.dependencies,l.dependencies=p===null?null:{lanes:p.lanes,firstContext:p.firstContext},l.sibling=o.sibling,l.index=o.index,l.ref=o.ref,l}function ts(o,p,l,h,g,x){var C=2;if(h=o,typeof o=="function")pf(o)&&(C=1);else if(typeof o=="string")C=5;else n:switch(o){case N:return no(l.children,g,x,p);case w:C=8,g|=8;break;case H:return o=jt(12,l,p,g|2),o.elementType=H,o.lanes=x,o;case F:return o=jt(13,l,p,g),o.elementType=F,o.lanes=x,o;case V:return o=jt(19,l,p,g),o.elementType=V,o.lanes=x,o;case Q:return rs(l,g,x,p);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case k:C=10;break n;case D:C=9;break n;case R:C=11;break n;case G:C=14;break n;case Y:C=16,h=null;break n}throw Error(t(130,o==null?o:typeof o,""))}return p=jt(C,l,p,g),p.elementType=o,p.type=h,p.lanes=x,p}function no(o,p,l,h){return o=jt(7,o,h,p),o.lanes=l,o}function rs(o,p,l,h){return o=jt(22,o,h,p),o.elementType=Q,o.lanes=l,o.stateNode={isHidden:!1},o}function uf(o,p,l){return o=jt(6,o,null,p),o.lanes=l,o}function sf(o,p,l){return p=jt(4,o.children!==null?o.children:[],o.key,p),p.lanes=l,p.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},p}function rH(o,p,l,h,g){this.tag=p,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=k2(0),this.expirationTimes=k2(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=k2(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function lf(o,p,l,h,g,x,C,j,q){return o=new rH(o,p,l,j,q),p===1?(p=1,x===!0&&(p|=8)):p=0,x=jt(3,null,null,p),o.current=x,x.stateNode=o,x.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(x),o}function aH(o,p,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:h==null?null:""+h,children:o,containerInfo:p,implementation:l}}function J1(o){if(!o)return ca;o=o._reactInternals;n:{if(Fa(o)!==o||o.tag!==1)throw Error(t(170));var p=o;do{switch(p.tag){case 3:p=p.stateNode.context;break n;case 1:if(dt(p.type)){p=p.stateNode.__reactInternalMemoizedMergedChildContext;break n}}p=p.return}while(p!==null);throw Error(t(171))}if(o.tag===1){var l=o.type;if(dt(l))return My(o,l,p)}return p}function nI(o,p,l,h,g,x,C,j,q){return o=lf(l,h,!0,o,g,x,C,j,q),o.context=J1(null),l=o.current,h=rt(),g=ba(l),x=Nr(h,g),x.callback=p??null,ma(l,x,g),o.current.lanes=g,pp(o,g,h),vt(o,h),o}function as(o,p,l,h){var g=p.current,x=rt(),C=ba(g);return l=J1(l),p.context===null?p.context=l:p.pendingContext=l,p=Nr(x,C),p.payload={element:o},h=h===void 0?null:h,h!==null&&(p.callback=h),o=ma(g,p,C),o!==null&&(rr(o,g,C,x),k0(o,g,C)),C}function os(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function eI(o,p){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var l=o.retryLane;o.retryLane=l!==0&&l<p?l:p}}function cf(o,p){eI(o,p),(o=o.alternate)&&eI(o,p)}function oH(){return null}var tI=typeof reportError=="function"?reportError:function(o){console.error(o)};function ff(o){this._internalRoot=o}is.prototype.render=ff.prototype.render=function(o){var p=this._internalRoot;if(p===null)throw Error(t(409));as(o,p,null,null)},is.prototype.unmount=ff.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var p=o.containerInfo;Xa(function(){as(null,o,null,null)}),p[Ar]=null}};function is(o){this._internalRoot=o}is.prototype.unstable_scheduleHydration=function(o){if(o){var p=jb();o={blockedOn:null,target:o,priority:p};for(var l=0;l<ia.length&&p!==0&&p<ia[l].priority;l++);ia.splice(l,0,o),l===0&&Fb(o)}};function df(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ps(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function rI(){}function iH(o,p,l,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var tn=os(C);x.call(tn)}}var C=nI(p,h,o,0,null,!1,!1,"",rI);return o._reactRootContainer=C,o[Ar]=C.current,Bp(o.nodeType===8?o.parentNode:o),Xa(),C}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var j=h;h=function(){var tn=os(q);j.call(tn)}}var q=lf(o,0,!1,null,null,!1,!1,"",rI);return o._reactRootContainer=q,o[Ar]=q.current,Bp(o.nodeType===8?o.parentNode:o),Xa(function(){as(p,q,l,h)}),q}function us(o,p,l,h,g){var x=l._reactRootContainer;if(x){var C=x;if(typeof g=="function"){var j=g;g=function(){var q=os(C);j.call(q)}}as(p,C,o,g)}else C=iH(l,p,o,g,h);return os(C)}Tb=function(o){switch(o.tag){case 3:var p=o.stateNode;if(p.current.memoizedState.isDehydrated){var l=ip(p.pendingLanes);l!==0&&(E2(p,l|1),vt(p,we()),(Un&6)===0&&(Qo=we()+500,fa()))}break;case 13:Xa(function(){var h=Cr(o,1);if(h!==null){var g=rt();rr(h,o,1,g)}}),cf(o,1)}},T2=function(o){if(o.tag===13){var p=Cr(o,134217728);if(p!==null){var l=rt();rr(p,o,134217728,l)}cf(o,134217728)}},Db=function(o){if(o.tag===13){var p=ba(o),l=Cr(o,p);if(l!==null){var h=rt();rr(l,o,p,h)}cf(o,p)}},jb=function(){return Jn},$b=function(o,p){var l=Jn;try{return Jn=o,p()}finally{Jn=l}},_2=function(o,p,l){switch(p){case"input":if(wn(o,l),p=l.name,l.type==="radio"&&p!=null){for(l=o;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+p)+'][type="radio"]'),p=0;p<l.length;p++){var h=l[p];if(h!==o&&h.form===o.form){var g=W0(h);if(!g)throw Error(t(90));J(h),wn(h,g)}}}break;case"textarea":be(o,l);break;case"select":p=l.value,p!=null&&xe(o,!!l.multiple,p,!1)}},wb=rf,Wb=Xa;var pH={usingClientEntryPoint:!1,Events:[wp,Eo,W0,xb,Pb,rf]},Dp={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uH={bundleType:Dp.bundleType,version:Dp.version,rendererPackageName:Dp.rendererPackageName,rendererConfig:Dp.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=_b(o),o===null?null:o.stateNode},findFiberByHostInstance:Dp.findFiberByHostInstance||oH,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{i0=ss.inject(uH),fr=ss}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pH,gt.createPortal=function(o,p){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(p))throw Error(t(200));return aH(o,p,null,l)},gt.createRoot=function(o,p){if(!df(o))throw Error(t(299));var l=!1,h="",g=tI;return p!=null&&(p.unstable_strictMode===!0&&(l=!0),p.identifierPrefix!==void 0&&(h=p.identifierPrefix),p.onRecoverableError!==void 0&&(g=p.onRecoverableError)),p=lf(o,1,!1,null,null,l,!1,h,g),o[Ar]=p.current,Bp(o.nodeType===8?o.parentNode:o),new ff(p)},gt.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var p=o._reactInternals;if(p===void 0)throw typeof o.render=="function"?Error(t(188)):(o=Object.keys(o).join(","),Error(t(268,o)));return o=_b(p),o=o===null?null:o.stateNode,o},gt.flushSync=function(o){return Xa(o)},gt.hydrate=function(o,p,l){if(!ps(p))throw Error(t(200));return us(null,o,p,!0,l)},gt.hydrateRoot=function(o,p,l){if(!df(o))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,x="",C=tI;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),p=nI(p,null,o,1,l??null,g,!1,x,C),o[Ar]=p.current,Bp(o),h)for(o=0;o<h.length;o++)l=h[o],g=l._getVersion,g=g(l._source),p.mutableSourceEagerHydrationData==null?p.mutableSourceEagerHydrationData=[l,g]:p.mutableSourceEagerHydrationData.push(l,g);return new is(p)},gt.render=function(o,p,l){if(!ps(p))throw Error(t(200));return us(null,o,p,!1,l)},gt.unmountComponentAtNode=function(o){if(!ps(o))throw Error(t(40));return o._reactRootContainer?(Xa(function(){us(null,null,o,!1,function(){o._reactRootContainer=null,o[Ar]=null})}),!0):!1},gt.unstable_batchedUpdates=rf,gt.unstable_renderSubtreeIntoContainer=function(o,p,l,h){if(!ps(l))throw Error(t(200));if(o==null||o._reactInternals===void 0)throw Error(t(38));return us(o,p,l,!1,h)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var cI;function N3(){if(cI)return vf.exports;cI=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),vf.exports=bH(),vf.exports}var fI;function yH(){if(fI)return cs;fI=1;var n=N3();return cs.createRoot=n.createRoot,cs.hydrateRoot=n.hydrateRoot,cs}var IH=yH(),U=ug();const E=Zn(U),BH=fH({__proto__:null,default:E},[U]);var As={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var xH=As.exports,dI;function PH(){return dI||(dI=1,(function(n,e){((t,r)=>{n.exports=r()})(xH,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,u=r.IS_PAPA_WORKER||!1,s={},c=0,f={};function m(w){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(H){var k=P(H);k.chunkSize=parseInt(k.chunkSize),H.step||H.chunk||(k.chunkSize=null),this._handle=new I(k),(this._handle.streamer=this)._config=k}).call(this,w),this.parseChunk=function(H,k){var D=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<D){let F=this._config.newline;F||(R=this._config.quoteChar||'"',F=this._handle.guessLineEndings(H,R)),H=[...H.split(F).slice(D)].join(F)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(R=this._config.beforeFirstChunk(H))!==void 0&&(H=R),this.isFirstChunk=!1,this._halted=!1;var D=this._partialLine+H,R=(this._partialLine="",this._handle.parse(D,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(H=R.meta.cursor,D=(this._finished||(this._partialLine=D.substring(H-this._baseIndex),this._baseIndex=H),R&&R.data&&(this._rowCount+=R.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),u)r.postMessage({results:R,workerId:f.WORKER_ID,finished:D});else if(N(this._config.chunk)&&!k){if(this._config.chunk(R,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=R=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(R.data),this._completeResults.errors=this._completeResults.errors.concat(R.errors),this._completeResults.meta=R.meta),this._completed||!D||!N(this._config.complete)||R&&R.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||R&&R.meta.paused||this._nextChunk(),R}this._halted=!0},this._sendError=function(H){N(this._config.error)?this._config.error(H):u&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:H,finished:!1})}}function d(w){var H;(w=w||{}).chunkSize||(w.chunkSize=f.RemoteChunkSize),m.call(this,w),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(H=new XMLHttpRequest,this._config.withCredentials&&(H.withCredentials=this._config.withCredentials),i||(H.onload=A(this._chunkLoaded,this),H.onerror=A(this._chunkError,this)),H.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,D=this._config.downloadRequestHeaders;for(k in D)H.setRequestHeader(k,D[k])}var R;this._config.chunkSize&&(R=this._start+this._config.chunkSize-1,H.setRequestHeader("Range","bytes="+this._start+"-"+R));try{H.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}i&&H.status===0&&this._chunkError()}},this._chunkLoaded=function(){H.readyState===4&&(H.status<200||400<=H.status?this._chunkError():(this._start+=this._config.chunkSize||H.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(H),this.parseChunk(H.responseText)))},this._chunkError=function(k){k=H.statusText||k,this._sendError(new Error(k))}}function v(w){(w=w||{}).chunkSize||(w.chunkSize=f.LocalChunkSize),m.call(this,w);var H,k,D=typeof FileReader<"u";this.stream=function(R){this._input=R,k=R.slice||R.webkitSlice||R.mozSlice,D?((H=new FileReader).onload=A(this._chunkLoaded,this),H.onerror=A(this._chunkError,this)):H=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var R=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),R=k.call(R,this._start,F)),H.readAsText(R,this._config.encoding));D||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(R){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(R.target.result)},this._chunkError=function(){this._sendError(H.error)}}function b(w){var H;m.call(this,w=w||{}),this.stream=function(k){return H=k,this._nextChunk()},this._nextChunk=function(){var k,D;if(!this._finished)return k=this._config.chunkSize,H=k?(D=H.substring(0,k),H.substring(k)):(D=H,""),this._finished=!H,this.parseChunk(D)}}function B(w){m.call(this,w=w||{});var H=[],k=!0,D=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(R){this._input=R,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){D&&H.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),H.length?this.parseChunk(H.shift()):k=!0},this._streamData=A(function(R){try{H.push(typeof R=="string"?R:R.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(H.shift()))}catch(F){this._streamError(F)}},this),this._streamError=A(function(R){this._streamCleanUp(),this._sendError(R)},this),this._streamEnd=A(function(){this._streamCleanUp(),D=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(w){var H,k,D,R,F=Math.pow(2,53),V=-F,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,$=0,K=0,en=!1,T=!1,L=[],Z={data:[],errors:[],meta:{}};function ln(mn){return w.skipEmptyLines==="greedy"?mn.join("").trim()==="":mn.length===1&&mn[0].length===0}function vn(){if(Z&&D&&(xn("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),D=!1),w.skipEmptyLines&&(Z.data=Z.data.filter(function(J){return!ln(J)})),Bn()){let J=function(bn,hn){N(w.transformHeader)&&(bn=w.transformHeader(bn,hn)),L.push(bn)};var pn=J;if(Z)if(Array.isArray(Z.data[0])){for(var mn=0;Bn()&&mn<Z.data.length;mn++)Z.data[mn].forEach(J);Z.data.splice(0,1)}else Z.data.forEach(J)}function an(J,bn){for(var hn=w.header?{}:[],yn=0;yn<J.length;yn++){var gn=yn,wn=J[yn],wn=(($n,zn)=>(Qn=>(w.dynamicTypingFunction&&w.dynamicTyping[Qn]===void 0&&(w.dynamicTyping[Qn]=w.dynamicTypingFunction(Qn)),(w.dynamicTyping[Qn]||w.dynamicTyping)===!0))($n)?zn==="true"||zn==="TRUE"||zn!=="false"&&zn!=="FALSE"&&((Qn=>{if(G.test(Qn)&&(Qn=parseFloat(Qn),V<Qn&&Qn<F))return 1})(zn)?parseFloat(zn):Y.test(zn)?new Date(zn):zn===""?null:zn):zn)(gn=w.header?yn>=L.length?"__parsed_extra":L[yn]:gn,wn=w.transform?w.transform(wn,gn):wn);gn==="__parsed_extra"?(hn[gn]=hn[gn]||[],hn[gn].push(wn)):hn[gn]=wn}return w.header&&(yn>L.length?xn("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+yn,K+bn):yn<L.length&&xn("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+yn,K+bn)),hn}var rn;Z&&(w.header||w.dynamicTyping||w.transform)&&(rn=1,!Z.data.length||Array.isArray(Z.data[0])?(Z.data=Z.data.map(an),rn=Z.data.length):Z.data=an(Z.data,0),w.header&&Z.meta&&(Z.meta.fields=L),K+=rn)}function Bn(){return w.header&&L.length===0}function xn(mn,an,rn,pn){mn={type:mn,code:an,message:rn},pn!==void 0&&(mn.row=pn),Z.errors.push(mn)}N(w.step)&&(R=w.step,w.step=function(mn){Z=mn,Bn()?vn():(vn(),Z.data.length!==0&&($+=mn.data.length,w.preview&&$>w.preview?k.abort():(Z.data=Z.data[0],R(Z,Q))))}),this.parse=function(mn,an,rn){var pn=w.quoteChar||'"',pn=(w.newline||(w.newline=this.guessLineEndings(mn,pn)),D=!1,w.delimiter?N(w.delimiter)&&(w.delimiter=w.delimiter(mn),Z.meta.delimiter=w.delimiter):((pn=((J,bn,hn,yn,gn)=>{var wn,$n,zn,Qn;gn=gn||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var xe=0;xe<gn.length;xe++){for(var ge,Ht=gn[xe],be=0,Qe=0,Pe=0,je=(zn=void 0,new W({comments:yn,delimiter:Ht,newline:bn,preview:10}).parse(J)),ct=0;ct<je.data.length;ct++)hn&&ln(je.data[ct])?Pe++:(ge=je.data[ct].length,Qe+=ge,zn===void 0?zn=ge:0<ge&&(be+=Math.abs(ge-zn),zn=ge));0<je.data.length&&(Qe/=je.data.length-Pe),($n===void 0||be<=$n)&&(Qn===void 0||Qn<Qe)&&1.99<Qe&&($n=be,wn=Ht,Qn=Qe)}return{successful:!!(w.delimiter=wn),bestDelimiter:wn}})(mn,w.newline,w.skipEmptyLines,w.comments,w.delimitersToGuess)).successful?w.delimiter=pn.bestDelimiter:(D=!0,w.delimiter=f.DefaultDelimiter),Z.meta.delimiter=w.delimiter),P(w));return w.preview&&w.header&&pn.preview++,H=mn,k=new W(pn),Z=k.parse(H,an,rn),vn(),en?{meta:{paused:!0}}:Z||{meta:{paused:!1}}},this.paused=function(){return en},this.pause=function(){en=!0,k.abort(),H=N(w.chunk)?"":H.substring(k.getCharIndex())},this.resume=function(){Q.streamer._halted?(en=!1,Q.streamer.parseChunk(H,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,k.abort(),Z.meta.aborted=!0,N(w.complete)&&w.complete(Z),H=""},this.guessLineEndings=function(J,pn){J=J.substring(0,1048576);var pn=new RegExp(y(pn)+"([^]*?)"+y(pn),"gm"),rn=(J=J.replace(pn,"")).split("\r"),pn=J.split(`
`),J=1<pn.length&&pn[0].length<rn[0].length;if(rn.length===1||J)return`
`;for(var bn=0,hn=0;hn<rn.length;hn++)rn[hn][0]===`
`&&bn++;return bn>=rn.length/2?`\r
`:"\r"}}function y(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function W(w){var H=(w=w||{}).delimiter,k=w.newline,D=w.comments,R=w.step,F=w.preview,V=w.fastMode,G=null,Y=!1,Q=w.quoteChar==null?'"':w.quoteChar,$=Q;if(w.escapeChar!==void 0&&($=w.escapeChar),(typeof H!="string"||-1<f.BAD_DELIMITERS.indexOf(H))&&(H=","),D===H)throw new Error("Comment character same as delimiter");D===!0?D="#":(typeof D!="string"||-1<f.BAD_DELIMITERS.indexOf(D))&&(D=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var K=0,en=!1;this.parse=function(T,L,Z){if(typeof T!="string")throw new Error("Input must be a string");var ln=T.length,vn=H.length,Bn=k.length,xn=D.length,mn=N(R),an=[],rn=[],pn=[],J=K=0;if(!T)return be();if(V||V!==!1&&T.indexOf(Q)===-1){for(var bn=T.split(k),hn=0;hn<bn.length;hn++){if(pn=bn[hn],K+=pn.length,hn!==bn.length-1)K+=k.length;else if(Z)return be();if(!D||pn.substring(0,xn)!==D){if(mn){if(an=[],Qn(pn.split(H)),Qe(),en)return be()}else Qn(pn.split(H));if(F&&F<=hn)return an=an.slice(0,F),be(!0)}}return be()}for(var yn=T.indexOf(H,K),gn=T.indexOf(k,K),wn=new RegExp(y($)+y(Q),"g"),$n=T.indexOf(Q,K);;)if(T[K]===Q)for($n=K,K++;;){if(($n=T.indexOf(Q,$n+1))===-1)return Z||rn.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:an.length,index:K}),ge();if($n===ln-1)return ge(T.substring(K,$n).replace(wn,Q));if(Q===$&&T[$n+1]===$)$n++;else if(Q===$||$n===0||T[$n-1]!==$){yn!==-1&&yn<$n+1&&(yn=T.indexOf(H,$n+1));var zn=xe((gn=gn!==-1&&gn<$n+1?T.indexOf(k,$n+1):gn)===-1?yn:Math.min(yn,gn));if(T.substr($n+1+zn,vn)===H){pn.push(T.substring(K,$n).replace(wn,Q)),T[K=$n+1+zn+vn]!==Q&&($n=T.indexOf(Q,K)),yn=T.indexOf(H,K),gn=T.indexOf(k,K);break}if(zn=xe(gn),T.substring($n+1+zn,$n+1+zn+Bn)===k){if(pn.push(T.substring(K,$n).replace(wn,Q)),Ht($n+1+zn+Bn),yn=T.indexOf(H,K),$n=T.indexOf(Q,K),mn&&(Qe(),en))return be();if(F&&an.length>=F)return be(!0);break}rn.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:an.length,index:K}),$n++}}else if(D&&pn.length===0&&T.substring(K,K+xn)===D){if(gn===-1)return be();K=gn+Bn,gn=T.indexOf(k,K),yn=T.indexOf(H,K)}else if(yn!==-1&&(yn<gn||gn===-1))pn.push(T.substring(K,yn)),K=yn+vn,yn=T.indexOf(H,K);else{if(gn===-1)break;if(pn.push(T.substring(K,gn)),Ht(gn+Bn),mn&&(Qe(),en))return be();if(F&&an.length>=F)return be(!0)}return ge();function Qn(Pe){an.push(Pe),J=K}function xe(Pe){var je=0;return je=Pe!==-1&&(Pe=T.substring($n+1,Pe))&&Pe.trim()===""?Pe.length:je}function ge(Pe){return Z||(Pe===void 0&&(Pe=T.substring(K)),pn.push(Pe),K=ln,Qn(pn),mn&&Qe()),be()}function Ht(Pe){K=Pe,Qn(pn),pn=[],gn=T.indexOf(k,K)}function be(Pe){if(w.header&&!L&&an.length&&!Y){var je=an[0],ct=Object.create(null),So=new Set(je);let ea=!1;for(let Ct=0;Ct<je.length;Ct++){let Nt=je[Ct];if(ct[Nt=N(w.transformHeader)?w.transformHeader(Nt,Ct):Nt]){let ta,tp=ct[Nt];for(;ta=Nt+"_"+tp,tp++,So.has(ta););So.add(ta),je[Ct]=ta,ct[Nt]++,ea=!0,(G=G===null?{}:G)[ta]=Nt}else ct[Nt]=1,je[Ct]=Nt;So.add(Nt)}ea&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:an,errors:rn,meta:{delimiter:H,linebreak:k,aborted:en,truncated:!!Pe,cursor:J+(L||0),renamedHeaders:G}}}function Qe(){R(be()),an=[],rn=[]}},this.abort=function(){en=!0},this.getCharIndex=function(){return K}}function S(w){var H=w.data,k=s[H.workerId],D=!1;if(H.error)k.userError(H.error,H.file);else if(H.results&&H.results.data){var R={abort:function(){D=!0,M(H.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(k.userStep)){for(var F=0;F<H.results.data.length&&(k.userStep({data:H.results.data[F],errors:H.results.errors,meta:H.results.meta},R),!D);F++);delete H.results}else N(k.userChunk)&&(k.userChunk(H.results,R,H.file),delete H.results)}H.finished&&!D&&M(H.workerId,H.results)}function M(w,H){var k=s[w];N(k.userComplete)&&k.userComplete(H),k.terminate(),delete s[w]}function O(){throw new Error("Not implemented.")}function P(w){if(typeof w!="object"||w===null)return w;var H,k=Array.isArray(w)?[]:{};for(H in w)k[H]=P(w[H]);return k}function A(w,H){return function(){w.apply(H,arguments)}}function N(w){return typeof w=="function"}return f.parse=function(w,H){var k=(H=H||{}).dynamicTyping||!1;if(N(k)&&(H.dynamicTypingFunction=k,k={}),H.dynamicTyping=k,H.transform=!!N(H.transform)&&H.transform,!H.worker||!f.WORKERS_SUPPORTED)return k=null,f.NODE_STREAM_INPUT,typeof w=="string"?(w=(D=>D.charCodeAt(0)!==65279?D:D.slice(1))(w),k=new(H.download?d:b)(H)):w.readable===!0&&N(w.read)&&N(w.on)?k=new B(H):(r.File&&w instanceof File||w instanceof Object)&&(k=new v(H)),k.stream(w);(k=(()=>{var D;return!!f.WORKERS_SUPPORTED&&(D=(()=>{var R=r.URL||r.webkitURL||null,F=t.toString();return f.BLOB_URL||(f.BLOB_URL=R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(D=new r.Worker(D)).onmessage=S,D.id=c++,s[D.id]=D)})()).userStep=H.step,k.userChunk=H.chunk,k.userComplete=H.complete,k.userError=H.error,H.step=N(H.step),H.chunk=N(H.chunk),H.complete=N(H.complete),H.error=N(H.error),delete H.worker,k.postMessage({input:w,config:H,workerId:k.id})},f.unparse=function(w,H){var k=!1,D=!0,R=",",F=`\r
`,V='"',G=V+V,Y=!1,Q=null,$=!1,K=((()=>{if(typeof H=="object"){if(typeof H.delimiter!="string"||f.BAD_DELIMITERS.filter(function(L){return H.delimiter.indexOf(L)!==-1}).length||(R=H.delimiter),typeof H.quotes!="boolean"&&typeof H.quotes!="function"&&!Array.isArray(H.quotes)||(k=H.quotes),typeof H.skipEmptyLines!="boolean"&&typeof H.skipEmptyLines!="string"||(Y=H.skipEmptyLines),typeof H.newline=="string"&&(F=H.newline),typeof H.quoteChar=="string"&&(V=H.quoteChar),typeof H.header=="boolean"&&(D=H.header),Array.isArray(H.columns)){if(H.columns.length===0)throw new Error("Option columns is empty");Q=H.columns}H.escapeChar!==void 0&&(G=H.escapeChar+V),H.escapeFormulae instanceof RegExp?$=H.escapeFormulae:typeof H.escapeFormulae=="boolean"&&H.escapeFormulae&&($=/^[=+\-@\t\r].*$/)}})(),new RegExp(y(V),"g"));if(typeof w=="string"&&(w=JSON.parse(w)),Array.isArray(w)){if(!w.length||Array.isArray(w[0]))return en(null,w,Y);if(typeof w[0]=="object")return en(Q||Object.keys(w[0]),w,Y)}else if(typeof w=="object")return typeof w.data=="string"&&(w.data=JSON.parse(w.data)),Array.isArray(w.data)&&(w.fields||(w.fields=w.meta&&w.meta.fields||Q),w.fields||(w.fields=Array.isArray(w.data[0])?w.fields:typeof w.data[0]=="object"?Object.keys(w.data[0]):[]),Array.isArray(w.data[0])||typeof w.data[0]=="object"||(w.data=[w.data])),en(w.fields||[],w.data||[],Y);throw new Error("Unable to serialize unrecognized input");function en(L,Z,ln){var vn="",Bn=(typeof L=="string"&&(L=JSON.parse(L)),typeof Z=="string"&&(Z=JSON.parse(Z)),Array.isArray(L)&&0<L.length),xn=!Array.isArray(Z[0]);if(Bn&&D){for(var mn=0;mn<L.length;mn++)0<mn&&(vn+=R),vn+=T(L[mn],mn);0<Z.length&&(vn+=F)}for(var an=0;an<Z.length;an++){var rn=(Bn?L:Z[an]).length,pn=!1,J=Bn?Object.keys(Z[an]).length===0:Z[an].length===0;if(ln&&!Bn&&(pn=ln==="greedy"?Z[an].join("").trim()==="":Z[an].length===1&&Z[an][0].length===0),ln==="greedy"&&Bn){for(var bn=[],hn=0;hn<rn;hn++){var yn=xn?L[hn]:hn;bn.push(Z[an][yn])}pn=bn.join("").trim()===""}if(!pn){for(var gn=0;gn<rn;gn++){0<gn&&!J&&(vn+=R);var wn=Bn&&xn?L[gn]:gn;vn+=T(Z[an][wn],gn)}an<Z.length-1&&(!ln||0<rn&&!J)&&(vn+=F)}}return vn}function T(L,Z){var ln,vn;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(vn=!1,$&&typeof L=="string"&&$.test(L)&&(L="'"+L,vn=!0),ln=L.toString().replace(K,G),(vn=vn||k===!0||typeof k=="function"&&k(L,Z)||Array.isArray(k)&&k[Z]||((Bn,xn)=>{for(var mn=0;mn<xn.length;mn++)if(-1<Bn.indexOf(xn[mn]))return!0;return!1})(ln,f.BAD_DELIMITERS)||-1<ln.indexOf(R)||ln.charAt(0)===" "||ln.charAt(ln.length-1)===" ")?V+ln+V:ln)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=W,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=b,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(w){var H=w.config||{},k=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var V=0;V<this.files.length;V++)k.push({file:this.files[V],inputElem:this,instanceConfig:a.extend({},H)})}),D(),this;function D(){if(k.length===0)N(w.complete)&&w.complete();else{var F,V,G,Y,Q=k[0];if(N(w.before)){var $=w.before(Q.file,Q.inputElem);if(typeof $=="object"){if($.action==="abort")return F="AbortError",V=Q.file,G=Q.inputElem,Y=$.reason,void(N(w.error)&&w.error({name:F},V,G,Y));if($.action==="skip")return void R();typeof $.config=="object"&&(Q.instanceConfig=a.extend(Q.instanceConfig,$.config))}else if($==="skip")return void R()}var K=Q.instanceConfig.complete;Q.instanceConfig.complete=function(en){N(K)&&K(en,Q.file,Q.inputElem),R()},f.parse(Q.file,Q.instanceConfig)}}function R(){k.splice(0,1),D()}}),u&&(r.onmessage=function(w){w=w.data,f.WORKER_ID===void 0&&w&&(f.WORKER_ID=w.workerId),typeof w.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(w.input,w.config),finished:!0}):(r.File&&w.input instanceof File||w.input instanceof Object)&&(w=f.parse(w.input,w.config))&&r.postMessage({workerId:f.WORKER_ID,results:w,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(b.prototype=Object.create(b.prototype)).constructor=b,(B.prototype=Object.create(m.prototype)).constructor=B,f})})(As)),As.exports}var wH=PH();const mI=Zn(wH);function hI(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function R3(...n){return e=>{let t=!1;const r=n.map(a=>{const i=hI(a,e);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():hI(n[a],null)}}}}function Os(...n){return U.useCallback(R3(...n),n)}var fu=U.forwardRef((n,e)=>{const{children:t,...r}=n,a=U.Children.toArray(t),i=a.find(SH);if(i){const u=i.props.children,s=a.map(c=>c===i?U.Children.count(u)>1?U.Children.only(null):U.isValidElement(u)?u.props.children:null:c);return _.jsx(W6,{...r,ref:e,children:U.isValidElement(u)?U.cloneElement(u,void 0,s):null})}return _.jsx(W6,{...r,ref:e,children:t})});fu.displayName="Slot";var W6=U.forwardRef((n,e)=>{const{children:t,...r}=n;if(U.isValidElement(t)){const a=AH(t),i=MH(r,t.props);return t.type!==U.Fragment&&(i.ref=e?R3(e,a):a),U.cloneElement(t,i)}return U.Children.count(t)>1?U.Children.only(null):null});W6.displayName="SlotClone";var WH=({children:n})=>_.jsx(_.Fragment,{children:n});function SH(n){return U.isValidElement(n)&&n.type===WH}function MH(n,e){const t={...e};for(const r in e){const a=n[r],i=e[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...s)=>{i(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...i}:r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return{...n,...t}}function AH(n){var r,a;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(a=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:a.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function k3(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(e=0;e<a;e++)n[e]&&(t=k3(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function jn(){for(var n,e,t=0,r="",a=arguments.length;t<a;t++)(n=arguments[t])&&(e=k3(n))&&(r&&(r+=" "),r+=e);return r}const vI=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,gI=jn,_H=(n,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return gI(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:i}=e,u=Object.keys(a).map(f=>{const m=t==null?void 0:t[f],d=i==null?void 0:i[f];if(m===null)return null;const v=vI(m)||vI(d);return a[f][v]}),s=t&&Object.entries(t).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),c=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...b}=m;return Object.entries(b).every(B=>{let[I,y]=B;return Array.isArray(y)?y.includes({...i,...s}[I]):{...i,...s}[I]===y})?[...f,d,v]:f},[]);return gI(n,u,c,t==null?void 0:t.class,t==null?void 0:t.className)},sg="-",OH=n=>{const e=CH(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:u=>{const s=u.split(sg);return s[0]===""&&s.length!==1&&s.shift(),E3(s,e)||HH(u)},getConflictingClassGroupIds:(u,s)=>{const c=t[u]||[];return s&&r[u]?[...c,...r[u]]:c}}},E3=(n,e)=>{var u;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),a=r?E3(n.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const i=n.join(sg);return(u=e.validators.find(({validator:s})=>s(i)))==null?void 0:u.classGroupId},bI=/^\[(.+)\]$/,HH=n=>{if(bI.test(n)){const e=bI.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},CH=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const a in t)S6(t[a],r,a,e);return r},S6=(n,e,t,r)=>{n.forEach(a=>{if(typeof a=="string"){const i=a===""?e:yI(e,a);i.classGroupId=t;return}if(typeof a=="function"){if(NH(a)){S6(a(r),e,t,r);return}e.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([i,u])=>{S6(u,yI(e,i),t,r)})})},yI=(n,e)=>{let t=n;return e.split(sg).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},NH=n=>n.isThemeGetter,RH=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const a=(i,u)=>{t.set(i,u),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let u=t.get(i);if(u!==void 0)return u;if((u=r.get(i))!==void 0)return a(i,u),u},set(i,u){t.has(i)?t.set(i,u):a(i,u)}}},M6="!",A6=":",kH=A6.length,EH=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=a=>{const i=[];let u=0,s=0,c=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(u===0&&s===0){if(I===A6){i.push(a.slice(c,B)),c=B+kH;continue}if(I==="/"){f=B;continue}}I==="["?u++:I==="]"?u--:I==="("?s++:I===")"&&s--}const m=i.length===0?a:a.substring(c),d=TH(m),v=d!==m,b=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:b}};if(e){const a=e+A6,i=r;r=u=>u.startsWith(a)?i(u.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(t){const a=r;r=i=>t({className:i,parseClassName:a})}return r},TH=n=>n.endsWith(M6)?n.substring(0,n.length-1):n.startsWith(M6)?n.substring(1):n,DH=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(u=>{u[0]==="["||e[u]?(a.push(...i.sort(),u),i=[]):i.push(u)}),a.push(...i.sort()),a}},jH=n=>({cache:RH(n.cacheSize),parseClassName:EH(n),sortModifiers:DH(n),...OH(n)}),$H=/\s+/,LH=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=e,u=[],s=n.trim().split($H);let c="";for(let f=s.length-1;f>=0;f-=1){const m=s[f],{isExternal:d,modifiers:v,hasImportantModifier:b,baseClassName:B,maybePostfixModifierPosition:I}=t(m);if(d){c=m+(c.length>0?" "+c:c);continue}let y=!!I,W=r(y?B.substring(0,I):B);if(!W){if(!y){c=m+(c.length>0?" "+c:c);continue}if(W=r(B),!W){c=m+(c.length>0?" "+c:c);continue}y=!1}const S=i(v).join(":"),M=b?S+M6:S,O=M+W;if(u.includes(O))continue;u.push(O);const P=a(W,y);for(let A=0;A<P.length;++A){const N=P[A];u.push(M+N)}c=m+(c.length>0?" "+c:c)}return c};function FH(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=T3(e))&&(r&&(r+=" "),r+=t);return r}const T3=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=T3(n[r]))&&(t&&(t+=" "),t+=e);return t};function qH(n,...e){let t,r,a,i=u;function u(c){const f=e.reduce((m,d)=>d(m),n());return t=jH(f),r=t.cache.get,a=t.cache.set,i=s,s(c)}function s(c){const f=r(c);if(f)return f;const m=LH(c,t);return a(c,m),m}return function(){return i(FH.apply(null,arguments))}}const ke=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},D3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,j3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,zH=/^\d+\/\d+$/,UH=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VH=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GH=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,KH=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,QH=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=n=>zH.test(n),Fn=n=>!!n&&!Number.isNaN(Number(n)),xa=n=>!!n&&Number.isInteger(Number(n)),yf=n=>n.endsWith("%")&&Fn(n.slice(0,-1)),Er=n=>UH.test(n),YH=()=>!0,XH=n=>VH.test(n)&&!GH.test(n),$3=()=>!1,ZH=n=>KH.test(n),JH=n=>QH.test(n),nC=n=>!An(n)&&!_n(n),eC=n=>qi(n,q3,$3),An=n=>D3.test(n),eo=n=>qi(n,z3,XH),If=n=>qi(n,iC,Fn),II=n=>qi(n,L3,$3),tC=n=>qi(n,F3,JH),fs=n=>qi(n,U3,ZH),_n=n=>j3.test(n),$p=n=>zi(n,z3),rC=n=>zi(n,pC),BI=n=>zi(n,L3),aC=n=>zi(n,q3),oC=n=>zi(n,F3),ds=n=>zi(n,U3,!0),qi=(n,e,t)=>{const r=D3.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},zi=(n,e,t=!1)=>{const r=j3.exec(n);return r?r[1]?e(r[1]):t:!1},L3=n=>n==="position"||n==="percentage",F3=n=>n==="image"||n==="url",q3=n=>n==="length"||n==="size"||n==="bg-size",z3=n=>n==="length",iC=n=>n==="number",pC=n=>n==="family-name",U3=n=>n==="shadow",uC=()=>{const n=ke("color"),e=ke("font"),t=ke("text"),r=ke("font-weight"),a=ke("tracking"),i=ke("leading"),u=ke("breakpoint"),s=ke("container"),c=ke("spacing"),f=ke("radius"),m=ke("shadow"),d=ke("inset-shadow"),v=ke("text-shadow"),b=ke("drop-shadow"),B=ke("blur"),I=ke("perspective"),y=ke("aspect"),W=ke("ease"),S=ke("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...O(),_n,An],A=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],w=()=>[_n,An,c],H=()=>[Xo,"full","auto",...w()],k=()=>[xa,"none","subgrid",_n,An],D=()=>["auto",{span:["full",xa,_n,An]},xa,_n,An],R=()=>[xa,"auto",_n,An],F=()=>["auto","min","max","fr",_n,An],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...w()],Q=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...w()],$=()=>[n,_n,An],K=()=>[...O(),BI,II,{position:[_n,An]}],en=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",aC,eC,{size:[_n,An]}],L=()=>[yf,$p,eo],Z=()=>["","none","full",f,_n,An],ln=()=>["",Fn,$p,eo],vn=()=>["solid","dashed","dotted","double"],Bn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],xn=()=>[Fn,yf,BI,II],mn=()=>["","none",B,_n,An],an=()=>["none",Fn,_n,An],rn=()=>["none",Fn,_n,An],pn=()=>[Fn,_n,An],J=()=>[Xo,"full",...w()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Er],breakpoint:[Er],color:[YH],container:[Er],"drop-shadow":[Er],ease:["in","out","in-out"],font:[nC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Er],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Er],shadow:[Er],spacing:["px",Fn],text:[Er],"text-shadow":[Er],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,An,_n,y]}],container:["container"],columns:[{columns:[Fn,An,_n,s]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{start:H()}],end:[{end:H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",_n,An]}],basis:[{basis:[Xo,"full","auto",s,...w()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Fn,Xo,"auto","initial","none",An]}],grow:[{grow:["",Fn,_n,An]}],shrink:[{shrink:["",Fn,_n,An]}],order:[{order:[xa,"first","last","none",_n,An]}],"grid-cols":[{"grid-cols":k()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":k()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":F()}],"auto-rows":[{"auto-rows":F()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":w()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":w()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[s,"screen",...Q()]}],"min-w":[{"min-w":[s,"screen","none",...Q()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[u]},...Q()]}],h:[{h:["screen",...Q()]}],"min-h":[{"min-h":["screen","none",...Q()]}],"max-h":[{"max-h":["screen",...Q()]}],"font-size":[{text:["base",t,$p,eo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,_n,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",yf,An]}],"font-family":[{font:[rC,An,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,_n,An]}],"line-clamp":[{"line-clamp":[Fn,"none",_n,If]}],leading:[{leading:[i,...w()]}],"list-image":[{"list-image":["none",_n,An]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",_n,An]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...vn(),"wavy"]}],"text-decoration-thickness":[{decoration:[Fn,"from-font","auto",_n,eo]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[Fn,"auto",_n,An]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_n,An]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_n,An]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:en()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,_n,An],radial:["",_n,An],conic:[xa,_n,An]},oC,tC]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:L()}],"gradient-via-pos":[{via:L()}],"gradient-to-pos":[{to:L()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:ln()}],"border-w-x":[{"border-x":ln()}],"border-w-y":[{"border-y":ln()}],"border-w-s":[{"border-s":ln()}],"border-w-e":[{"border-e":ln()}],"border-w-t":[{"border-t":ln()}],"border-w-r":[{"border-r":ln()}],"border-w-b":[{"border-b":ln()}],"border-w-l":[{"border-l":ln()}],"divide-x":[{"divide-x":ln()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ln()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...vn(),"hidden","none"]}],"divide-style":[{divide:[...vn(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...vn(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Fn,_n,An]}],"outline-w":[{outline:["",Fn,$p,eo]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",m,ds,fs]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",d,ds,fs]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:ln()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[Fn,eo]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":ln()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",v,ds,fs]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[Fn,_n,An]}],"mix-blend":[{"mix-blend":[...Bn(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Bn()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Fn]}],"mask-image-linear-from-pos":[{"mask-linear-from":xn()}],"mask-image-linear-to-pos":[{"mask-linear-to":xn()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":xn()}],"mask-image-t-to-pos":[{"mask-t-to":xn()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":xn()}],"mask-image-r-to-pos":[{"mask-r-to":xn()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":xn()}],"mask-image-b-to-pos":[{"mask-b-to":xn()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":xn()}],"mask-image-l-to-pos":[{"mask-l-to":xn()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":xn()}],"mask-image-x-to-pos":[{"mask-x-to":xn()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":xn()}],"mask-image-y-to-pos":[{"mask-y-to":xn()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[_n,An]}],"mask-image-radial-from-pos":[{"mask-radial-from":xn()}],"mask-image-radial-to-pos":[{"mask-radial-to":xn()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[Fn]}],"mask-image-conic-from-pos":[{"mask-conic-from":xn()}],"mask-image-conic-to-pos":[{"mask-conic-to":xn()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:en()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",_n,An]}],filter:[{filter:["","none",_n,An]}],blur:[{blur:mn()}],brightness:[{brightness:[Fn,_n,An]}],contrast:[{contrast:[Fn,_n,An]}],"drop-shadow":[{"drop-shadow":["","none",b,ds,fs]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",Fn,_n,An]}],"hue-rotate":[{"hue-rotate":[Fn,_n,An]}],invert:[{invert:["",Fn,_n,An]}],saturate:[{saturate:[Fn,_n,An]}],sepia:[{sepia:["",Fn,_n,An]}],"backdrop-filter":[{"backdrop-filter":["","none",_n,An]}],"backdrop-blur":[{"backdrop-blur":mn()}],"backdrop-brightness":[{"backdrop-brightness":[Fn,_n,An]}],"backdrop-contrast":[{"backdrop-contrast":[Fn,_n,An]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Fn,_n,An]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Fn,_n,An]}],"backdrop-invert":[{"backdrop-invert":["",Fn,_n,An]}],"backdrop-opacity":[{"backdrop-opacity":[Fn,_n,An]}],"backdrop-saturate":[{"backdrop-saturate":[Fn,_n,An]}],"backdrop-sepia":[{"backdrop-sepia":["",Fn,_n,An]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",_n,An]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Fn,"initial",_n,An]}],ease:[{ease:["linear","initial",W,_n,An]}],delay:[{delay:[Fn,_n,An]}],animate:[{animate:["none",S,_n,An]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,_n,An]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:an()}],"rotate-x":[{"rotate-x":an()}],"rotate-y":[{"rotate-y":an()}],"rotate-z":[{"rotate-z":an()}],scale:[{scale:rn()}],"scale-x":[{"scale-x":rn()}],"scale-y":[{"scale-y":rn()}],"scale-z":[{"scale-z":rn()}],"scale-3d":["scale-3d"],skew:[{skew:pn()}],"skew-x":[{"skew-x":pn()}],"skew-y":[{"skew-y":pn()}],transform:[{transform:[_n,An,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:J()}],"translate-x":[{"translate-x":J()}],"translate-y":[{"translate-y":J()}],"translate-z":[{"translate-z":J()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_n,An]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_n,An]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[Fn,$p,eo,If]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},sC=qH(uC);function st(...n){return sC(jn(n))}const lC=_H("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Lp({className:n,variant:e,size:t,asChild:r=!1,...a}){const i=r?fu:"button";return _.jsx(i,{"data-slot":"button",className:st(lC({variant:e,size:t,className:n})),...a})}function Ut({className:n,...e}){return _.jsx("div",{"data-slot":"card",className:st("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",n),...e})}function Dl({className:n,...e}){return _.jsx("div",{"data-slot":"card-header",className:st("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",n),...e})}function jl({className:n,...e}){return _.jsx("h4",{"data-slot":"card-title",className:st("leading-none",n),...e})}function Vt({className:n,...e}){return _.jsx("div",{"data-slot":"card-content",className:st("px-6 [&:last-child]:pb-6",n),...e})}function zr(n,e,{checkForDefaultPrevented:t=!0}={}){return function(a){if(n==null||n(a),t===!1||!a.defaultPrevented)return e==null?void 0:e(a)}}function lg(n,e=[]){let t=[];function r(i,u){const s=U.createContext(u),c=t.length;t=[...t,u];const f=d=>{var W;const{scope:v,children:b,...B}=d,I=((W=v==null?void 0:v[n])==null?void 0:W[c])||s,y=U.useMemo(()=>B,Object.values(B));return _.jsx(I.Provider,{value:y,children:b})};f.displayName=i+"Provider";function m(d,v){var I;const b=((I=v==null?void 0:v[n])==null?void 0:I[c])||s,B=U.useContext(b);if(B)return B;if(u!==void 0)return u;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=t.map(u=>U.createContext(u));return function(s){const c=(s==null?void 0:s[n])||i;return U.useMemo(()=>({[`__scope${n}`]:{...s,[n]:c}}),[s,c])}};return a.scopeName=n,[r,cC(a,...e)]}function cC(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const r=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const u=r.reduce((s,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...s,...d}},{});return U.useMemo(()=>({[`__scope${e.scopeName}`]:u}),[u])}};return t.scopeName=e.scopeName,t}function fC(n){const e=n+"CollectionProvider",[t,r]=lg(e),[a,i]=t(e,{collectionRef:{current:null},itemMap:new Map}),u=b=>{const{scope:B,children:I}=b,y=E.useRef(null),W=E.useRef(new Map).current;return _.jsx(a,{scope:B,itemMap:W,collectionRef:y,children:I})};u.displayName=e;const s=n+"CollectionSlot",c=E.forwardRef((b,B)=>{const{scope:I,children:y}=b,W=i(s,I),S=Os(B,W.collectionRef);return _.jsx(fu,{ref:S,children:y})});c.displayName=s;const f=n+"CollectionItemSlot",m="data-radix-collection-item",d=E.forwardRef((b,B)=>{const{scope:I,children:y,...W}=b,S=E.useRef(null),M=Os(B,S),O=i(f,I);return E.useEffect(()=>(O.itemMap.set(S,{ref:S,...W}),()=>void O.itemMap.delete(S))),_.jsx(fu,{[m]:"",ref:M,children:y})});d.displayName=f;function v(b){const B=i(n+"CollectionConsumer",b);return E.useCallback(()=>{const y=B.collectionRef.current;if(!y)return[];const W=Array.from(y.querySelectorAll(`[${m}]`));return Array.from(B.itemMap.values()).sort((O,P)=>W.indexOf(O.ref.current)-W.indexOf(P.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:u,Slot:c,ItemSlot:d},v,r]}var _6=globalThis!=null&&globalThis.document?U.useLayoutEffect:()=>{},dC=BH.useId||(()=>{}),mC=0;function V3(n){const[e,t]=U.useState(dC());return _6(()=>{t(r=>r??String(mC++))},[n]),n||(e?`radix-${e}`:"")}N3();var hC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ui=hC.reduce((n,e)=>{const t=U.forwardRef((r,a)=>{const{asChild:i,...u}=r,s=i?fu:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(s,{...u,ref:a})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function cg(n){const e=U.useRef(n);return U.useEffect(()=>{e.current=n}),U.useMemo(()=>(...t)=>{var r;return(r=e.current)==null?void 0:r.call(e,...t)},[])}function G3({prop:n,defaultProp:e,onChange:t=()=>{}}){const[r,a]=vC({defaultProp:e,onChange:t}),i=n!==void 0,u=i?n:r,s=cg(t),c=U.useCallback(f=>{if(i){const d=typeof f=="function"?f(n):f;d!==n&&s(d)}else a(f)},[i,n,a,s]);return[u,c]}function vC({defaultProp:n,onChange:e}){const t=U.useState(n),[r]=t,a=U.useRef(r),i=cg(e);return U.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),t}var gC=U.createContext(void 0);function K3(n){const e=U.useContext(gC);return n||e||"ltr"}var Bf="rovingFocusGroup.onEntryFocus",bC={bubbles:!1,cancelable:!0},$l="RovingFocusGroup",[O6,Q3,yC]=fC($l),[IC,Y3]=lg($l,[yC]),[BC,xC]=IC($l),X3=U.forwardRef((n,e)=>_.jsx(O6.Provider,{scope:n.__scopeRovingFocusGroup,children:_.jsx(O6.Slot,{scope:n.__scopeRovingFocusGroup,children:_.jsx(PC,{...n,ref:e})})}));X3.displayName=$l;var PC=U.forwardRef((n,e)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:a=!1,dir:i,currentTabStopId:u,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=n,v=U.useRef(null),b=Os(e,v),B=K3(i),[I=null,y]=G3({prop:u,defaultProp:s,onChange:c}),[W,S]=U.useState(!1),M=cg(f),O=Q3(t),P=U.useRef(!1),[A,N]=U.useState(0);return U.useEffect(()=>{const w=v.current;if(w)return w.addEventListener(Bf,M),()=>w.removeEventListener(Bf,M)},[M]),_.jsx(BC,{scope:t,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:U.useCallback(w=>y(w),[y]),onItemShiftTab:U.useCallback(()=>S(!0),[]),onFocusableItemAdd:U.useCallback(()=>N(w=>w+1),[]),onFocusableItemRemove:U.useCallback(()=>N(w=>w-1),[]),children:_.jsx(Ui.div,{tabIndex:W||A===0?-1:0,"data-orientation":r,...d,ref:b,style:{outline:"none",...n.style},onMouseDown:zr(n.onMouseDown,()=>{P.current=!0}),onFocus:zr(n.onFocus,w=>{const H=!P.current;if(w.target===w.currentTarget&&H&&!W){const k=new CustomEvent(Bf,bC);if(w.currentTarget.dispatchEvent(k),!k.defaultPrevented){const D=O().filter(Y=>Y.focusable),R=D.find(Y=>Y.active),F=D.find(Y=>Y.id===I),G=[R,F,...D].filter(Boolean).map(Y=>Y.ref.current);n5(G,m)}}P.current=!1}),onBlur:zr(n.onBlur,()=>S(!1))})})}),Z3="RovingFocusGroupItem",J3=U.forwardRef((n,e)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:a=!1,tabStopId:i,...u}=n,s=V3(),c=i||s,f=xC(Z3,t),m=f.currentTabStopId===c,d=Q3(t),{onFocusableItemAdd:v,onFocusableItemRemove:b}=f;return U.useEffect(()=>{if(r)return v(),()=>b()},[r,v,b]),_.jsx(O6.ItemSlot,{scope:t,id:c,focusable:r,active:a,children:_.jsx(Ui.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...u,ref:e,onMouseDown:zr(n.onMouseDown,B=>{r?f.onItemFocus(c):B.preventDefault()}),onFocus:zr(n.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(n.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=SC(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let W=d().filter(S=>S.focusable).map(S=>S.ref.current);if(I==="last")W.reverse();else if(I==="prev"||I==="next"){I==="prev"&&W.reverse();const S=W.indexOf(B.currentTarget);W=f.loop?MC(W,S+1):W.slice(S+1)}setTimeout(()=>n5(W))}})})})});J3.displayName=Z3;var wC={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function WC(n,e){return e!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function SC(n,e,t){const r=WC(n.key,t);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return wC[r]}function n5(n,e=!1){const t=document.activeElement;for(const r of n)if(r===t||(r.focus({preventScroll:e}),document.activeElement!==t))return}function MC(n,e){return n.map((t,r)=>n[(e+r)%n.length])}var AC=X3,_C=J3;function OC(n,e){return U.useReducer((t,r)=>e[t][r]??t,n)}var e5=n=>{const{present:e,children:t}=n,r=HC(e),a=typeof t=="function"?t({present:r.isPresent}):U.Children.only(t),i=Os(r.ref,CC(a));return typeof t=="function"||r.isPresent?U.cloneElement(a,{ref:i}):null};e5.displayName="Presence";function HC(n){const[e,t]=U.useState(),r=U.useRef({}),a=U.useRef(n),i=U.useRef("none"),u=n?"mounted":"unmounted",[s,c]=OC(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return U.useEffect(()=>{const f=ms(r.current);i.current=s==="mounted"?f:"none"},[s]),_6(()=>{const f=r.current,m=a.current;if(m!==n){const v=i.current,b=ms(f);n?c("MOUNT"):b==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(m&&v!==b?"ANIMATION_OUT":"UNMOUNT"),a.current=n}},[n,c]),_6(()=>{if(e){let f;const m=e.ownerDocument.defaultView??window,d=b=>{const I=ms(r.current).includes(b.animationName);if(b.target===e&&I&&(c("ANIMATION_END"),!a.current)){const y=e.style.animationFillMode;e.style.animationFillMode="forwards",f=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=y)})}},v=b=>{b.target===e&&(i.current=ms(r.current))};return e.addEventListener("animationstart",v),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{m.clearTimeout(f),e.removeEventListener("animationstart",v),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[e,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:U.useCallback(f=>{f&&(r.current=getComputedStyle(f)),t(f)},[])}}function ms(n){return(n==null?void 0:n.animationName)||"none"}function CC(n){var r,a;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(a=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:a.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var fg="Tabs",[NC]=lg(fg,[Y3]),t5=Y3(),[RC,dg]=NC(fg),r5=U.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,onValueChange:a,defaultValue:i,orientation:u="horizontal",dir:s,activationMode:c="automatic",...f}=n,m=K3(s),[d,v]=G3({prop:r,onChange:a,defaultProp:i});return _.jsx(RC,{scope:t,baseId:V3(),value:d,onValueChange:v,orientation:u,dir:m,activationMode:c,children:_.jsx(Ui.div,{dir:m,"data-orientation":u,...f,ref:e})})});r5.displayName=fg;var a5="TabsList",o5=U.forwardRef((n,e)=>{const{__scopeTabs:t,loop:r=!0,...a}=n,i=dg(a5,t),u=t5(t);return _.jsx(AC,{asChild:!0,...u,orientation:i.orientation,dir:i.dir,loop:r,children:_.jsx(Ui.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:e})})});o5.displayName=a5;var i5="TabsTrigger",p5=U.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,disabled:a=!1,...i}=n,u=dg(i5,t),s=t5(t),c=l5(u.baseId,r),f=c5(u.baseId,r),m=r===u.value;return _.jsx(_C,{asChild:!0,...s,focusable:!a,active:m,children:_.jsx(Ui.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:e,onMouseDown:zr(n.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?u.onValueChange(r):d.preventDefault()}),onKeyDown:zr(n.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&u.onValueChange(r)}),onFocus:zr(n.onFocus,()=>{const d=u.activationMode!=="manual";!m&&!a&&d&&u.onValueChange(r)})})})});p5.displayName=i5;var u5="TabsContent",s5=U.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,forceMount:a,children:i,...u}=n,s=dg(u5,t),c=l5(s.baseId,r),f=c5(s.baseId,r),m=r===s.value,d=U.useRef(m);return U.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),_.jsx(e5,{present:a||m,children:({present:v})=>_.jsx(Ui.div,{"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...u,ref:e,style:{...n.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});s5.displayName=u5;function l5(n,e){return`${n}-trigger-${e}`}function c5(n,e){return`${n}-content-${e}`}var kC=r5,EC=o5,TC=p5,DC=s5;function jC({className:n,...e}){return _.jsx(kC,{"data-slot":"tabs",className:st("flex flex-col gap-2",n),...e})}function $C({className:n,...e}){return _.jsx(EC,{"data-slot":"tabs-list",className:st("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",n),...e})}function xI({className:n,...e}){return _.jsx(TC,{"data-slot":"tabs-trigger",className:st("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...e})}function PI({className:n,...e}){return _.jsx(DC,{"data-slot":"tabs-content",className:st("flex-1 outline-none",n),...e})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),FC=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),wI=n=>{const e=FC(n);return e.charAt(0).toUpperCase()+e.slice(1)},f5=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=U.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:u,...s},c)=>U.createElement("svg",{ref:c,...qC,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:f5("lucide",a),...s},[...u.map(([f,m])=>U.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(n,e)=>{const t=U.forwardRef(({className:r,...a},i)=>U.createElement(zC,{ref:i,iconNode:e,className:f5(`lucide-${LC(wI(n))}`,`lucide-${n}`,r),...a}));return t.displayName=wI(n),t};/**
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
 */const JC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],nN=lt("circle-plus",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],tN=lt("download",eN);/**
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
 */const gN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],SI=lt("x",gN);function Ce(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function Se(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}function Hs(n,e){const t=Ce(n);return isNaN(e)?Se(n,NaN):(e&&t.setDate(t.getDate()+e),t)}const d5=6048e5,bN=864e5,yN=6e4,IN=36e5,BN=1e3;let xN={};function Vi(){return xN}function Na(n,e){var s,c,f,m;const t=Vi(),r=(e==null?void 0:e.weekStartsOn)??((c=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Ce(n),i=a.getDay(),u=(i<r?7:0)+i-r;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}function di(n){return Na(n,{weekStartsOn:1})}function m5(n){const e=Ce(n),t=e.getFullYear(),r=Se(n,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const a=di(r),i=Se(n,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const u=di(i);return e.getTime()>=a.getTime()?t+1:e.getTime()>=u.getTime()?t:t-1}function MI(n){const e=Ce(n);return e.setHours(0,0,0,0),e}function Cs(n){const e=Ce(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function PN(n,e){const t=MI(n),r=MI(e),a=+t-Cs(t),i=+r-Cs(r);return Math.round((a-i)/bN)}function wN(n){const e=m5(n),t=Se(n,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),di(t)}function WN(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function SN(n){if(!WN(n)&&typeof n!="number")return!1;const e=Ce(n);return!isNaN(Number(e))}function MN(n){const e=Ce(n),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function AN(n){const e=Ce(n);return e.setDate(1),e.setHours(0,0,0,0),e}function _N(n){const e=Ce(n),t=Se(n,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const ON={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},HN=(n,e,t)=>{let r;const a=ON[n];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function xf(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const CN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},NN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},RN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kN={date:xf({formats:CN,defaultWidth:"full"}),time:xf({formats:NN,defaultWidth:"full"}),dateTime:xf({formats:RN,defaultWidth:"full"})},EN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},TN=(n,e,t,r)=>EN[n];function Fp(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const u=n.defaultFormattingWidth||n.defaultWidth,s=t!=null&&t.width?String(t.width):u;a=n.formattingValues[s]||n.formattingValues[u]}else{const u=n.defaultWidth,s=t!=null&&t.width?String(t.width):n.defaultWidth;a=n.values[s]||n.values[u]}const i=n.argumentCallback?n.argumentCallback(e):e;return a[i]}}const DN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$N={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},LN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},FN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},zN=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},UN={ordinalNumber:zN,era:Fp({values:DN,defaultWidth:"wide"}),quarter:Fp({values:jN,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Fp({values:$N,defaultWidth:"wide"}),day:Fp({values:LN,defaultWidth:"wide"}),dayPeriod:Fp({values:FN,defaultWidth:"wide",formattingValues:qN,defaultFormattingWidth:"wide"})};function qp(n){return(e,t={})=>{const r=t.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(a);if(!i)return null;const u=i[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?GN(s,d=>d.test(u)):VN(s,d=>d.test(u));let f;f=n.valueCallback?n.valueCallback(c):c,f=t.valueCallback?t.valueCallback(f):f;const m=e.slice(u.length);return{value:f,rest:m}}}function VN(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function GN(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function KN(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const a=r[0],i=e.match(n.parsePattern);if(!i)return null;let u=n.valueCallback?n.valueCallback(i[0]):i[0];u=t.valueCallback?t.valueCallback(u):u;const s=e.slice(a.length);return{value:u,rest:s}}}const QN=/^(\d+)(th|st|nd|rd)?/i,YN=/\d+/i,XN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ZN={any:[/^b/i,/^(a|c)/i]},JN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nR={any:[/1/i,/2/i,/3/i,/4/i]},eR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},rR={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},aR={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oR={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},iR={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pR={ordinalNumber:KN({matchPattern:QN,parsePattern:YN,valueCallback:n=>parseInt(n,10)}),era:qp({matchPatterns:XN,defaultMatchWidth:"wide",parsePatterns:ZN,defaultParseWidth:"any"}),quarter:qp({matchPatterns:JN,defaultMatchWidth:"wide",parsePatterns:nR,defaultParseWidth:"any",valueCallback:n=>n+1}),month:qp({matchPatterns:eR,defaultMatchWidth:"wide",parsePatterns:tR,defaultParseWidth:"any"}),day:qp({matchPatterns:rR,defaultMatchWidth:"wide",parsePatterns:aR,defaultParseWidth:"any"}),dayPeriod:qp({matchPatterns:oR,defaultMatchWidth:"any",parsePatterns:iR,defaultParseWidth:"any"})},h5={code:"en-US",formatDistance:HN,formatLong:kN,formatRelative:TN,localize:UN,match:pR,options:{weekStartsOn:0,firstWeekContainsDate:1}};function uR(n){const e=Ce(n);return PN(e,_N(e))+1}function v5(n){const e=Ce(n),t=+di(e)-+wN(e);return Math.round(t/d5)+1}function mg(n,e){var m,d,v,b;const t=Ce(n),r=t.getFullYear(),a=Vi(),i=(e==null?void 0:e.firstWeekContainsDate)??((d=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((b=(v=a.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??1,u=Se(n,0);u.setFullYear(r+1,0,i),u.setHours(0,0,0,0);const s=Na(u,e),c=Se(n,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,e);return t.getTime()>=s.getTime()?r+1:t.getTime()>=f.getTime()?r:r-1}function sR(n,e){var s,c,f,m;const t=Vi(),r=(e==null?void 0:e.firstWeekContainsDate)??((c=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=mg(n,e),i=Se(n,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,e)}function g5(n,e){const t=Ce(n),r=+Na(t,e)-+sR(t,e);return Math.round(r/d5)+1}function ne(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const Pa={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return ne(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):ne(t+1,2)},d(n,e){return ne(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return ne(n.getHours()%12||12,e.length)},H(n,e){return ne(n.getHours(),e.length)},m(n,e){return ne(n.getMinutes(),e.length)},s(n,e){return ne(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return ne(a,e.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},AI={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return Pa.y(n,e)},Y:function(n,e,t,r){const a=mg(n,r),i=a>0?a:1-a;if(e==="YY"){const u=i%100;return ne(u,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):ne(i,e.length)},R:function(n,e){const t=m5(n);return ne(t,e.length)},u:function(n,e){const t=n.getFullYear();return ne(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ne(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ne(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return Pa.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return ne(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const a=g5(n,r);return e==="wo"?t.ordinalNumber(a,{unit:"week"}):ne(a,e.length)},I:function(n,e,t){const r=v5(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):ne(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):Pa.d(n,e)},D:function(n,e,t){const r=uR(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):ne(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const a=n.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return ne(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const a=n.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return ne(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return ne(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const a=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Pa.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):Pa.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):ne(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):ne(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):Pa.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):Pa.s(n,e)},S:function(n,e){return Pa.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return OI(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return OI(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+_I(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+_I(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(n,e,t){const r=Math.trunc(n.getTime()/1e3);return ne(r,e.length)},T:function(n,e,t){const r=n.getTime();return ne(r,e.length)}};function _I(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),i=r%60;return i===0?t+String(a):t+String(a)+e+ne(i,2)}function OI(n,e){return n%60===0?(n>0?"-":"+")+ne(Math.abs(n)/60,2):oo(n,e)}function oo(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=ne(Math.trunc(r/60),2),i=ne(r%60,2);return t+a+e+i}const HI=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},b5=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},lR=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return HI(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",HI(r,e)).replace("{{time}}",b5(a,e))},C6={p:b5,P:lR},cR=/^D+$/,fR=/^Y+$/,dR=["D","DD","YY","YYYY"];function y5(n){return cR.test(n)}function I5(n){return fR.test(n)}function N6(n,e,t){const r=mR(n,e,t);if(console.warn(r),dR.includes(n))throw new RangeError(r)}function mR(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,gR=/^'([^]*?)'?$/,bR=/''/g,yR=/[a-zA-Z]/;function IR(n,e,t){var m,d,v,b;const r=Vi(),a=r.locale??h5,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,u=r.weekStartsOn??((b=(v=r.locale)==null?void 0:v.options)==null?void 0:b.weekStartsOn)??0,s=Ce(n);if(!SN(s))throw new RangeError("Invalid time value");let c=e.match(vR).map(B=>{const I=B[0];if(I==="p"||I==="P"){const y=C6[I];return y(B,a.formatLong)}return B}).join("").match(hR).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:BR(B)};if(AI[I])return{isToken:!0,value:B};if(I.match(yR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const f={firstWeekContainsDate:i,weekStartsOn:u,locale:a};return c.map(B=>{if(!B.isToken)return B.value;const I=B.value;(I5(I)||y5(I))&&N6(I,e,String(n));const y=AI[I[0]];return y(s,I,a.localize,f)}).join("")}function BR(n){const e=n.match(gR);return e?e[1].replace(bR,"'"):n}function xR(){return Object.assign({},Vi())}function PR(n){let t=Ce(n).getDay();return t===0&&(t=7),t}function wR(n,e){const t=e instanceof Date?Se(e,0):new e(0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t}const WR=10;class B5{constructor(){Pn(this,"subPriority",0)}validate(e,t){return!0}}class SR extends B5{constructor(e,t,r,a,i){super(),this.value=e,this.validateValue=t,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(e,t){return this.validateValue(e,this.value,t)}set(e,t,r){return this.setValue(e,t,this.value,r)}}class MR extends B5{constructor(){super(...arguments);Pn(this,"priority",WR);Pn(this,"subPriority",-1)}set(t,r){return r.timestampIsSet?t:Se(t,wR(t,Date))}}class Kn{run(e,t,r,a){const i=this.parse(e,t,r,a);return i?{setter:new SR(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(e,t,r){return!0}}class AR extends Kn{constructor(){super(...arguments);Pn(this,"priority",140);Pn(this,"incompatibleTokens",["R","u","t","T"])}parse(t,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"});case"GGGGG":return a.era(t,{width:"narrow"});case"GGGG":default:return a.era(t,{width:"wide"})||a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"})}}set(t,r,a){return r.era=a,t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}const Me={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ae(n,e){return n&&{value:e(n.value),rest:n.rest}}function ve(n,e){const t=e.match(n);return t?{value:parseInt(t[0],10),rest:e.slice(t[0].length)}:null}function br(n,e){const t=e.match(n);if(!t)return null;if(t[0]==="Z")return{value:0,rest:e.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,u=t[5]?parseInt(t[5],10):0;return{value:r*(a*IN+i*yN+u*BN),rest:e.slice(t[0].length)}}function x5(n){return ve(Me.anyDigitsSigned,n)}function Be(n,e){switch(n){case 1:return ve(Me.singleDigit,e);case 2:return ve(Me.twoDigits,e);case 3:return ve(Me.threeDigits,e);case 4:return ve(Me.fourDigits,e);default:return ve(new RegExp("^\\d{1,"+n+"}"),e)}}function Ns(n,e){switch(n){case 1:return ve(Me.singleDigitSigned,e);case 2:return ve(Me.twoDigitsSigned,e);case 3:return ve(Me.threeDigitsSigned,e);case 4:return ve(Me.fourDigitsSigned,e);default:return ve(new RegExp("^-?\\d{1,"+n+"}"),e)}}function hg(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function P5(n,e){const t=e>0,r=t?e:1-e;let a;if(r<=50)a=n||100;else{const i=r+50,u=Math.trunc(i/100)*100,s=n>=i%100;a=n+u-(s?100:0)}return t?a:1-a}function w5(n){return n%400===0||n%4===0&&n%100!==0}class _R extends Kn{constructor(){super(...arguments);Pn(this,"priority",130);Pn(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,r,a){const i=u=>({year:u,isTwoDigitYear:r==="yy"});switch(r){case"y":return Ae(Be(4,t),i);case"yo":return Ae(a.ordinalNumber(t,{unit:"year"}),i);default:return Ae(Be(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a){const i=t.getFullYear();if(a.isTwoDigitYear){const s=P5(a.year,i);return t.setFullYear(s,0,1),t.setHours(0,0,0,0),t}const u=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(u,0,1),t.setHours(0,0,0,0),t}}class OR extends Kn{constructor(){super(...arguments);Pn(this,"priority",130);Pn(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,r,a){const i=u=>({year:u,isTwoDigitYear:r==="YY"});switch(r){case"Y":return Ae(Be(4,t),i);case"Yo":return Ae(a.ordinalNumber(t,{unit:"year"}),i);default:return Ae(Be(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a,i){const u=mg(t,i);if(a.isTwoDigitYear){const c=P5(a.year,u);return t.setFullYear(c,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}const s=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(s,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}}class HR extends Kn{constructor(){super(...arguments);Pn(this,"priority",130);Pn(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,r){return Ns(r==="R"?4:r.length,t)}set(t,r,a){const i=Se(t,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),di(i)}}class CR extends Kn{constructor(){super(...arguments);Pn(this,"priority",130);Pn(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,r){return Ns(r==="u"?4:r.length,t)}set(t,r,a){return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class NR extends Kn{constructor(){super(...arguments);Pn(this,"priority",120);Pn(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"Q":case"QQ":return Be(r.length,t);case"Qo":return a.ordinalNumber(t,{unit:"quarter"});case"QQQ":return a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(t,{width:"wide",context:"formatting"})||a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class RR extends Kn{constructor(){super(...arguments);Pn(this,"priority",120);Pn(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"q":case"qq":return Be(r.length,t);case"qo":return a.ordinalNumber(t,{unit:"quarter"});case"qqq":return a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(t,{width:"wide",context:"standalone"})||a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class kR extends Kn{constructor(){super(...arguments);Pn(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);Pn(this,"priority",110)}parse(t,r,a){const i=u=>u-1;switch(r){case"M":return Ae(ve(Me.month,t),i);case"MM":return Ae(Be(2,t),i);case"Mo":return Ae(a.ordinalNumber(t,{unit:"month"}),i);case"MMM":return a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(t,{width:"wide",context:"formatting"})||a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}class ER extends Kn{constructor(){super(...arguments);Pn(this,"priority",110);Pn(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,r,a){const i=u=>u-1;switch(r){case"L":return Ae(ve(Me.month,t),i);case"LL":return Ae(Be(2,t),i);case"Lo":return Ae(a.ordinalNumber(t,{unit:"month"}),i);case"LLL":return a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(t,{width:"wide",context:"standalone"})||a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}function TR(n,e,t){const r=Ce(n),a=g5(r,t)-e;return r.setDate(r.getDate()-a*7),r}class DR extends Kn{constructor(){super(...arguments);Pn(this,"priority",100);Pn(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,r,a){switch(r){case"w":return ve(Me.week,t);case"wo":return a.ordinalNumber(t,{unit:"week"});default:return Be(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a,i){return Na(TR(t,a,i),i)}}function jR(n,e){const t=Ce(n),r=v5(t)-e;return t.setDate(t.getDate()-r*7),t}class $R extends Kn{constructor(){super(...arguments);Pn(this,"priority",100);Pn(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,r,a){switch(r){case"I":return ve(Me.week,t);case"Io":return a.ordinalNumber(t,{unit:"week"});default:return Be(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a){return di(jR(t,a))}}const LR=[31,28,31,30,31,30,31,31,30,31,30,31],FR=[31,29,31,30,31,30,31,31,30,31,30,31];class qR extends Kn{constructor(){super(...arguments);Pn(this,"priority",90);Pn(this,"subPriority",1);Pn(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"d":return ve(Me.date,t);case"do":return a.ordinalNumber(t,{unit:"date"});default:return Be(r.length,t)}}validate(t,r){const a=t.getFullYear(),i=w5(a),u=t.getMonth();return i?r>=1&&r<=FR[u]:r>=1&&r<=LR[u]}set(t,r,a){return t.setDate(a),t.setHours(0,0,0,0),t}}class zR extends Kn{constructor(){super(...arguments);Pn(this,"priority",90);Pn(this,"subpriority",1);Pn(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,r,a){switch(r){case"D":case"DD":return ve(Me.dayOfYear,t);case"Do":return a.ordinalNumber(t,{unit:"date"});default:return Be(r.length,t)}}validate(t,r){const a=t.getFullYear();return w5(a)?r>=1&&r<=366:r>=1&&r<=365}set(t,r,a){return t.setMonth(0,a),t.setHours(0,0,0,0),t}}function vg(n,e,t){var d,v,b,B;const r=Vi(),a=(t==null?void 0:t.weekStartsOn)??((v=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(b=r.locale)==null?void 0:b.options)==null?void 0:B.weekStartsOn)??0,i=Ce(n),u=i.getDay(),c=(e%7+7)%7,f=7-a,m=e<0||e>6?e-(u+f)%7:(c+f)%7-(u+f)%7;return Hs(i,m)}class UR extends Kn{constructor(){super(...arguments);Pn(this,"priority",90);Pn(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=vg(t,a,i),t.setHours(0,0,0,0),t}}class VR extends Kn{constructor(){super(...arguments);Pn(this,"priority",90);Pn(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,r,a,i){const u=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return Ae(Be(r.length,t),u);case"eo":return Ae(a.ordinalNumber(t,{unit:"day"}),u);case"eee":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeeee":return a.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=vg(t,a,i),t.setHours(0,0,0,0),t}}class GR extends Kn{constructor(){super(...arguments);Pn(this,"priority",90);Pn(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,r,a,i){const u=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return Ae(Be(r.length,t),u);case"co":return Ae(a.ordinalNumber(t,{unit:"day"}),u);case"ccc":return a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"ccccc":return a.day(t,{width:"narrow",context:"standalone"});case"cccccc":return a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(t,{width:"wide",context:"standalone"})||a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=vg(t,a,i),t.setHours(0,0,0,0),t}}function KR(n,e){const t=Ce(n),r=PR(t),a=e-r;return Hs(t,a)}class QR extends Kn{constructor(){super(...arguments);Pn(this,"priority",90);Pn(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,r,a){const i=u=>u===0?7:u;switch(r){case"i":case"ii":return Be(r.length,t);case"io":return a.ordinalNumber(t,{unit:"day"});case"iii":return Ae(a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiii":return Ae(a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiiii":return Ae(a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiii":default:return Ae(a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i)}}validate(t,r){return r>=1&&r<=7}set(t,r,a){return t=KR(t,a),t.setHours(0,0,0,0),t}}class YR extends Kn{constructor(){super(...arguments);Pn(this,"priority",80);Pn(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(hg(a),0,0,0),t}}class XR extends Kn{constructor(){super(...arguments);Pn(this,"priority",80);Pn(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(hg(a),0,0,0),t}}class ZR extends Kn{constructor(){super(...arguments);Pn(this,"priority",80);Pn(this,"incompatibleTokens",["a","b","t","T"])}parse(t,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(hg(a),0,0,0),t}}class JR extends Kn{constructor(){super(...arguments);Pn(this,"priority",70);Pn(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,r,a){switch(r){case"h":return ve(Me.hour12h,t);case"ho":return a.ordinalNumber(t,{unit:"hour"});default:return Be(r.length,t)}}validate(t,r){return r>=1&&r<=12}set(t,r,a){const i=t.getHours()>=12;return i&&a<12?t.setHours(a+12,0,0,0):!i&&a===12?t.setHours(0,0,0,0):t.setHours(a,0,0,0),t}}class nk extends Kn{constructor(){super(...arguments);Pn(this,"priority",70);Pn(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,r,a){switch(r){case"H":return ve(Me.hour23h,t);case"Ho":return a.ordinalNumber(t,{unit:"hour"});default:return Be(r.length,t)}}validate(t,r){return r>=0&&r<=23}set(t,r,a){return t.setHours(a,0,0,0),t}}class ek extends Kn{constructor(){super(...arguments);Pn(this,"priority",70);Pn(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,r,a){switch(r){case"K":return ve(Me.hour11h,t);case"Ko":return a.ordinalNumber(t,{unit:"hour"});default:return Be(r.length,t)}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.getHours()>=12&&a<12?t.setHours(a+12,0,0,0):t.setHours(a,0,0,0),t}}class tk extends Kn{constructor(){super(...arguments);Pn(this,"priority",70);Pn(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,r,a){switch(r){case"k":return ve(Me.hour24h,t);case"ko":return a.ordinalNumber(t,{unit:"hour"});default:return Be(r.length,t)}}validate(t,r){return r>=1&&r<=24}set(t,r,a){const i=a<=24?a%24:a;return t.setHours(i,0,0,0),t}}class rk extends Kn{constructor(){super(...arguments);Pn(this,"priority",60);Pn(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"m":return ve(Me.minute,t);case"mo":return a.ordinalNumber(t,{unit:"minute"});default:return Be(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setMinutes(a,0,0),t}}class ak extends Kn{constructor(){super(...arguments);Pn(this,"priority",50);Pn(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"s":return ve(Me.second,t);case"so":return a.ordinalNumber(t,{unit:"second"});default:return Be(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setSeconds(a,0),t}}class ok extends Kn{constructor(){super(...arguments);Pn(this,"priority",30);Pn(this,"incompatibleTokens",["t","T"])}parse(t,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return Ae(Be(r.length,t),a)}set(t,r,a){return t.setMilliseconds(a),t}}class ik extends Kn{constructor(){super(...arguments);Pn(this,"priority",10);Pn(this,"incompatibleTokens",["t","T","x"])}parse(t,r){switch(r){case"X":return br(gr.basicOptionalMinutes,t);case"XX":return br(gr.basic,t);case"XXXX":return br(gr.basicOptionalSeconds,t);case"XXXXX":return br(gr.extendedOptionalSeconds,t);case"XXX":default:return br(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Se(t,t.getTime()-Cs(t)-a)}}class pk extends Kn{constructor(){super(...arguments);Pn(this,"priority",10);Pn(this,"incompatibleTokens",["t","T","X"])}parse(t,r){switch(r){case"x":return br(gr.basicOptionalMinutes,t);case"xx":return br(gr.basic,t);case"xxxx":return br(gr.basicOptionalSeconds,t);case"xxxxx":return br(gr.extendedOptionalSeconds,t);case"xxx":default:return br(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Se(t,t.getTime()-Cs(t)-a)}}class uk extends Kn{constructor(){super(...arguments);Pn(this,"priority",40);Pn(this,"incompatibleTokens","*")}parse(t){return x5(t)}set(t,r,a){return[Se(t,a*1e3),{timestampIsSet:!0}]}}class sk extends Kn{constructor(){super(...arguments);Pn(this,"priority",20);Pn(this,"incompatibleTokens","*")}parse(t){return x5(t)}set(t,r,a){return[Se(t,a),{timestampIsSet:!0}]}}const lk={G:new AR,y:new _R,Y:new OR,R:new HR,u:new CR,Q:new NR,q:new RR,M:new kR,L:new ER,w:new DR,I:new $R,d:new qR,D:new zR,E:new UR,e:new VR,c:new GR,i:new QR,a:new YR,b:new XR,B:new ZR,h:new JR,H:new nk,K:new ek,k:new tk,m:new rk,s:new ak,S:new ok,X:new ik,x:new pk,t:new uk,T:new sk},ck=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dk=/^'([^]*?)'?$/,mk=/''/g,hk=/\S/,vk=/[a-zA-Z]/;function gk(n,e,t,r){var I,y,W,S;const a=xR(),i=a.locale??h5,u=a.firstWeekContainsDate??((y=(I=a.locale)==null?void 0:I.options)==null?void 0:y.firstWeekContainsDate)??1,s=a.weekStartsOn??((S=(W=a.locale)==null?void 0:W.options)==null?void 0:S.weekStartsOn)??0,c={firstWeekContainsDate:u,weekStartsOn:s,locale:i},f=[new MR],m=e.match(fk).map(M=>{const O=M[0];if(O in C6){const P=C6[O];return P(M,i.formatLong)}return M}).join("").match(ck),d=[];for(let M of m){I5(M)&&N6(M,e,n),y5(M)&&N6(M,e,n);const O=M[0],P=lk[O];if(P){const{incompatibleTokens:A}=P;if(Array.isArray(A)){const w=d.find(H=>A.includes(H.token)||H.token===O);if(w)throw new RangeError(`The format string mustn't contain \`${w.fullToken}\` and \`${M}\` at the same time`)}else if(P.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${M}\` and any other token at the same time`);d.push({token:O,fullToken:M});const N=P.run(n,M,i.match,c);if(!N)return Se(t,NaN);f.push(N.setter),n=N.rest}else{if(O.match(vk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(M==="''"?M="'":O==="'"&&(M=bk(M)),n.indexOf(M)===0)n=n.slice(M.length);else return Se(t,NaN)}}if(n.length>0&&hk.test(n))return Se(t,NaN);const v=f.map(M=>M.priority).sort((M,O)=>O-M).filter((M,O,P)=>P.indexOf(M)===O).map(M=>f.filter(O=>O.priority===M).sort((O,P)=>P.subPriority-O.subPriority)).map(M=>M[0]);let b=Ce(t);if(isNaN(b.getTime()))return Se(t,NaN);const B={};for(const M of v){if(!M.validate(b,c))return Se(t,NaN);const O=M.set(b,B,c);Array.isArray(O)?(b=O[0],Object.assign(B,O[1])):b=O}return Se(t,b)}function bk(n){return n.match(dk)[1].replace(mk,"'")}const pr=n=>{if(!n)return new Date(NaN);const e=n.trim(),t=e.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(t){const[,a,i,u]=t;return new Date(parseInt(a),parseInt(i)-1,parseInt(u),12,0,0)}const r=e.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,u]=r;return new Date(parseInt(u),parseInt(i)-1,parseInt(a),12,0,0)}return gk(n,"dd-MM-yyyy",new Date)},W5=["january","february","march","april","may","june","july","august","september","october","november","december"],S5=n=>{if(n==="all"||!n)return[];const[e,t]=n.split("-"),r=W5.indexOf(e.toLowerCase()),a=parseInt(t)||2026;if(r===-1)return[];const i=AN(new Date(a,r)),u=MN(new Date(a,r)),s=[];let c=i,f=1;for(;c<=u;){let m=Hs(c,6);m>u&&(m=u),s.push({value:`${e}-week${f}`,label:`${e.charAt(0).toUpperCase()+e.slice(1,3)} ${c.getDate()}-${m.getDate()}`,startDate:c,endDate:m}),c=Hs(m,1),f++}return s},M5=(n,e)=>{if(isNaN(n.getTime()))return!1;const t=new Date(n.getFullYear(),n.getMonth(),n.getDate(),12,0,0);return t>=e.startDate&&t<=e.endDate},R6=(n,e)=>{if(e==="all")return!0;if(isNaN(n.getTime()))return!1;const[t,r]=e.split("-"),a=W5.indexOf(t.toLowerCase()),i=parseInt(r);return n.getMonth()===a&&n.getFullYear()===i},yk=n=>!n||isNaN(n.getTime())?"N/A":IR(n,"MMM dd, yyyy"),k6=n=>{const e=n.length,t=n.filter(a=>a.handled==="Bot").length,r=n.filter(a=>a.handled==="Human").length;return{totalSessions:e,botHandled:t,humanHandled:r,botPercentage:e>0?t/e*100:0,humanPercentage:e>0?r/e*100:0,escalationRate:e>0?r/e*100:0}},E6=n=>{const e=new Map;n.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=e.get(a)||0;e.set(a,i+1)});const t=n.length;return Array.from(e.entries()).map(([r,a])=>({channel:r,count:a,percentage:t>0?a/t*100:0})).sort((r,a)=>a.count-r.count)},A5=n=>{const e=n.filter(r=>r.handled==="Human"),t=new Map;return e.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=t.get(r.product)||0;t.set(r.product,a+1)}}),Array.from(t.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},T6=(n,e=10)=>{const t=new Map;return n.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=t.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,t.set(r.issue,a)}}),Array.from(t.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,e)},Ik=(n,e="february-2026")=>{if(e==="all"){const t=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return n.forEach(i=>{try{const u=pr(i.createdAt);if(!isNaN(u.getTime())){const s=t[u.getMonth()],c=`${s.charAt(0).toUpperCase()}${s.slice(1,3)} ${u.getFullYear()}`;r.add(`${c}|${s}-${u.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[u,s]=i.split("|"),c=n.filter(v=>R6(pr(v.createdAt),s)),f=c.length,m=c.filter(v=>v.handled==="Human").length,d=f>0?m/f*100:0;return{week:u,totalSessions:f,humanEscalations:m,escalationRate:d}}).sort((i,u)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${u.week}`).getTime()).filter(i=>i.totalSessions>0)}else return S5(e).map(r=>{const a=n.filter(c=>{const f=pr(c.createdAt);return M5(f,r)}),i=a.length,u=a.filter(c=>c.handled==="Human").length,s=a.length>0?u/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:u,escalationRate:s}})},Bk=n=>{const e=n.filter(r=>r.handled==="Human"),t=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){t.has(r.issue)||t.set(r.issue,new Map);const a=t.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const u=a.get(i),s=r.product&&r.product.trim()!==""?r.product:"Unknown";u.set(s,(u.get(s)||0)+1)}}),Array.from(t.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([s,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:s,count:m,products:f}}).sort((s,c)=>c.count-s.count),u=i.reduce((s,c)=>s+c.count,0);return{issue:r,count:u,subIssues:i}}).sort((r,a)=>a.count-r.count)},xk=(n,e="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...n.map(s=>[s.channel,s.createdAt,s.product||"",s.issue||"",s.subType||"",s.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),u=URL.createObjectURL(a);i.setAttribute("href",u),i.setAttribute("download",e),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function Pk({metrics:n}){const e=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",t=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return _.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:n.totalSessions.toLocaleString()})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(fN,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:n.botHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[n.botPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(KC,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:n.humanHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[n.humanPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:_.jsx(vN,{className:"w-6 h-6 text-orange-600"})})]})})}),_.jsx(Ut,{className:t(n.escalationRate),children:_.jsx(Vt,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),_.jsxs("p",{className:`text-3xl font-bold mt-2 ${e(n.escalationRate)}`,children:[n.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:n.escalationRate<20?"Excellent":n.escalationRate<40?"Good":"Needs Attention"})]}),_.jsx("div",{className:`p-3 rounded-full ${e(n.escalationRate).replace("text","bg").replace("600","100")}`,children:_.jsx(mN,{className:`w-6 h-6 ${e(n.escalationRate)}`})})]})})})]})}var Pf,CI;function yt(){if(CI)return Pf;CI=1;var n=Array.isArray;return Pf=n,Pf}var wf,NI;function _5(){if(NI)return wf;NI=1;var n=typeof ls=="object"&&ls&&ls.Object===Object&&ls;return wf=n,wf}var Wf,RI;function Sr(){if(RI)return Wf;RI=1;var n=_5(),e=typeof self=="object"&&self&&self.Object===Object&&self,t=n||e||Function("return this")();return Wf=t,Wf}var Sf,kI;function Ku(){if(kI)return Sf;kI=1;var n=Sr(),e=n.Symbol;return Sf=e,Sf}var Mf,EI;function wk(){if(EI)return Mf;EI=1;var n=Ku(),e=Object.prototype,t=e.hasOwnProperty,r=e.toString,a=n?n.toStringTag:void 0;function i(u){var s=t.call(u,a),c=u[a];try{u[a]=void 0;var f=!0}catch{}var m=r.call(u);return f&&(s?u[a]=c:delete u[a]),m}return Mf=i,Mf}var Af,TI;function Wk(){if(TI)return Af;TI=1;var n=Object.prototype,e=n.toString;function t(r){return e.call(r)}return Af=t,Af}var _f,DI;function Yr(){if(DI)return _f;DI=1;var n=Ku(),e=wk(),t=Wk(),r="[object Null]",a="[object Undefined]",i=n?n.toStringTag:void 0;function u(s){return s==null?s===void 0?a:r:i&&i in Object(s)?e(s):t(s)}return _f=u,_f}var Of,jI;function Xr(){if(jI)return Of;jI=1;function n(e){return e!=null&&typeof e=="object"}return Of=n,Of}var Hf,$I;function Gi(){if($I)return Hf;$I=1;var n=Yr(),e=Xr(),t="[object Symbol]";function r(a){return typeof a=="symbol"||e(a)&&n(a)==t}return Hf=r,Hf}var Cf,LI;function gg(){if(LI)return Cf;LI=1;var n=yt(),e=Gi(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,u){if(n(i))return!1;var s=typeof i;return s=="number"||s=="symbol"||s=="boolean"||i==null||e(i)?!0:r.test(i)||!t.test(i)||u!=null&&i in Object(u)}return Cf=a,Cf}var Nf,FI;function Ta(){if(FI)return Nf;FI=1;function n(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}return Nf=n,Nf}var Rf,qI;function bg(){if(qI)return Rf;qI=1;var n=Yr(),e=Ta(),t="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function u(s){if(!e(s))return!1;var c=n(s);return c==r||c==a||c==t||c==i}return Rf=u,Rf}var kf,zI;function Sk(){if(zI)return kf;zI=1;var n=Sr(),e=n["__core-js_shared__"];return kf=e,kf}var Ef,UI;function Mk(){if(UI)return Ef;UI=1;var n=Sk(),e=(function(){var r=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function t(r){return!!e&&e in r}return Ef=t,Ef}var Tf,VI;function O5(){if(VI)return Tf;VI=1;var n=Function.prototype,e=n.toString;function t(r){if(r!=null){try{return e.call(r)}catch{}try{return r+""}catch{}}return""}return Tf=t,Tf}var Df,GI;function Ak(){if(GI)return Df;GI=1;var n=bg(),e=Mk(),t=Ta(),r=O5(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,c=u.toString,f=s.hasOwnProperty,m=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!t(v)||e(v))return!1;var b=n(v)?m:i;return b.test(r(v))}return Df=d,Df}var jf,KI;function _k(){if(KI)return jf;KI=1;function n(e,t){return e==null?void 0:e[t]}return jf=n,jf}var $f,QI;function Bo(){if(QI)return $f;QI=1;var n=Ak(),e=_k();function t(r,a){var i=e(r,a);return n(i)?i:void 0}return $f=t,$f}var Lf,YI;function Ll(){if(YI)return Lf;YI=1;var n=Bo(),e=n(Object,"create");return Lf=e,Lf}var Ff,XI;function Ok(){if(XI)return Ff;XI=1;var n=Ll();function e(){this.__data__=n?n(null):{},this.size=0}return Ff=e,Ff}var qf,ZI;function Hk(){if(ZI)return qf;ZI=1;function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}return qf=n,qf}var zf,JI;function Ck(){if(JI)return zf;JI=1;var n=Ll(),e="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function a(i){var u=this.__data__;if(n){var s=u[i];return s===e?void 0:s}return r.call(u,i)?u[i]:void 0}return zf=a,zf}var Uf,nB;function Nk(){if(nB)return Uf;nB=1;var n=Ll(),e=Object.prototype,t=e.hasOwnProperty;function r(a){var i=this.__data__;return n?i[a]!==void 0:t.call(i,a)}return Uf=r,Uf}var Vf,eB;function Rk(){if(eB)return Vf;eB=1;var n=Ll(),e="__lodash_hash_undefined__";function t(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=n&&a===void 0?e:a,this}return Vf=t,Vf}var Gf,tB;function kk(){if(tB)return Gf;tB=1;var n=Ok(),e=Hk(),t=Ck(),r=Nk(),a=Rk();function i(u){var s=-1,c=u==null?0:u.length;for(this.clear();++s<c;){var f=u[s];this.set(f[0],f[1])}}return i.prototype.clear=n,i.prototype.delete=e,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,Gf=i,Gf}var Kf,rB;function Ek(){if(rB)return Kf;rB=1;function n(){this.__data__=[],this.size=0}return Kf=n,Kf}var Qf,aB;function yg(){if(aB)return Qf;aB=1;function n(e,t){return e===t||e!==e&&t!==t}return Qf=n,Qf}var Yf,oB;function Fl(){if(oB)return Yf;oB=1;var n=yg();function e(t,r){for(var a=t.length;a--;)if(n(t[a][0],r))return a;return-1}return Yf=e,Yf}var Xf,iB;function Tk(){if(iB)return Xf;iB=1;var n=Fl(),e=Array.prototype,t=e.splice;function r(a){var i=this.__data__,u=n(i,a);if(u<0)return!1;var s=i.length-1;return u==s?i.pop():t.call(i,u,1),--this.size,!0}return Xf=r,Xf}var Zf,pB;function Dk(){if(pB)return Zf;pB=1;var n=Fl();function e(t){var r=this.__data__,a=n(r,t);return a<0?void 0:r[a][1]}return Zf=e,Zf}var Jf,uB;function jk(){if(uB)return Jf;uB=1;var n=Fl();function e(t){return n(this.__data__,t)>-1}return Jf=e,Jf}var nd,sB;function $k(){if(sB)return nd;sB=1;var n=Fl();function e(t,r){var a=this.__data__,i=n(a,t);return i<0?(++this.size,a.push([t,r])):a[i][1]=r,this}return nd=e,nd}var ed,lB;function ql(){if(lB)return ed;lB=1;var n=Ek(),e=Tk(),t=Dk(),r=jk(),a=$k();function i(u){var s=-1,c=u==null?0:u.length;for(this.clear();++s<c;){var f=u[s];this.set(f[0],f[1])}}return i.prototype.clear=n,i.prototype.delete=e,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,ed=i,ed}var td,cB;function Ig(){if(cB)return td;cB=1;var n=Bo(),e=Sr(),t=n(e,"Map");return td=t,td}var rd,fB;function Lk(){if(fB)return rd;fB=1;var n=kk(),e=ql(),t=Ig();function r(){this.size=0,this.__data__={hash:new n,map:new(t||e),string:new n}}return rd=r,rd}var ad,dB;function Fk(){if(dB)return ad;dB=1;function n(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}return ad=n,ad}var od,mB;function zl(){if(mB)return od;mB=1;var n=Fk();function e(t,r){var a=t.__data__;return n(r)?a[typeof r=="string"?"string":"hash"]:a.map}return od=e,od}var id,hB;function qk(){if(hB)return id;hB=1;var n=zl();function e(t){var r=n(this,t).delete(t);return this.size-=r?1:0,r}return id=e,id}var pd,vB;function zk(){if(vB)return pd;vB=1;var n=zl();function e(t){return n(this,t).get(t)}return pd=e,pd}var ud,gB;function Uk(){if(gB)return ud;gB=1;var n=zl();function e(t){return n(this,t).has(t)}return ud=e,ud}var sd,bB;function Vk(){if(bB)return sd;bB=1;var n=zl();function e(t,r){var a=n(this,t),i=a.size;return a.set(t,r),this.size+=a.size==i?0:1,this}return sd=e,sd}var ld,yB;function Bg(){if(yB)return ld;yB=1;var n=Lk(),e=qk(),t=zk(),r=Uk(),a=Vk();function i(u){var s=-1,c=u==null?0:u.length;for(this.clear();++s<c;){var f=u[s];this.set(f[0],f[1])}}return i.prototype.clear=n,i.prototype.delete=e,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,ld=i,ld}var cd,IB;function H5(){if(IB)return cd;IB=1;var n=Bg(),e="Expected a function";function t(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(e);var i=function(){var u=arguments,s=a?a.apply(this,u):u[0],c=i.cache;if(c.has(s))return c.get(s);var f=r.apply(this,u);return i.cache=c.set(s,f)||c,f};return i.cache=new(t.Cache||n),i}return t.Cache=n,cd=t,cd}var fd,BB;function Gk(){if(BB)return fd;BB=1;var n=H5(),e=500;function t(r){var a=n(r,function(u){return i.size===e&&i.clear(),u}),i=a.cache;return a}return fd=t,fd}var dd,xB;function Kk(){if(xB)return dd;xB=1;var n=Gk(),e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=n(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(e,function(u,s,c,f){i.push(c?f.replace(t,"$1"):s||u)}),i});return dd=r,dd}var md,PB;function xg(){if(PB)return md;PB=1;function n(e,t){for(var r=-1,a=e==null?0:e.length,i=Array(a);++r<a;)i[r]=t(e[r],r,e);return i}return md=n,md}var hd,wB;function Qk(){if(wB)return hd;wB=1;var n=Ku(),e=xg(),t=yt(),r=Gi(),a=n?n.prototype:void 0,i=a?a.toString:void 0;function u(s){if(typeof s=="string")return s;if(t(s))return e(s,u)+"";if(r(s))return i?i.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}return hd=u,hd}var vd,WB;function C5(){if(WB)return vd;WB=1;var n=Qk();function e(t){return t==null?"":n(t)}return vd=e,vd}var gd,SB;function N5(){if(SB)return gd;SB=1;var n=yt(),e=gg(),t=Kk(),r=C5();function a(i,u){return n(i)?i:e(i,u)?[i]:t(r(i))}return gd=a,gd}var bd,MB;function Ul(){if(MB)return bd;MB=1;var n=Gi();function e(t){if(typeof t=="string"||n(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return bd=e,bd}var yd,AB;function Pg(){if(AB)return yd;AB=1;var n=N5(),e=Ul();function t(r,a){a=n(a,r);for(var i=0,u=a.length;r!=null&&i<u;)r=r[e(a[i++])];return i&&i==u?r:void 0}return yd=t,yd}var Id,_B;function R5(){if(_B)return Id;_B=1;var n=Pg();function e(t,r,a){var i=t==null?void 0:n(t,r);return i===void 0?a:i}return Id=e,Id}var Yk=R5();const Ot=Zn(Yk);var Bd,OB;function Xk(){if(OB)return Bd;OB=1;function n(e){return e==null}return Bd=n,Bd}var Zk=Xk();const En=Zn(Zk);var xd,HB;function Jk(){if(HB)return xd;HB=1;var n=Yr(),e=yt(),t=Xr(),r="[object String]";function a(i){return typeof i=="string"||!e(i)&&t(i)&&n(i)==r}return xd=a,xd}var nE=Jk();const Qu=Zn(nE);var eE=bg();const kn=Zn(eE);var tE=Ta();const Ki=Zn(tE);var Pd={exports:{}},Yn={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CB;function rE(){if(CB)return Yn;CB=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(y){if(typeof y=="object"&&y!==null){var W=y.$$typeof;switch(W){case n:switch(y=y.type,y){case t:case a:case r:case f:case m:return y;default:switch(y=y&&y.$$typeof,y){case s:case u:case c:case v:case d:case i:return y;default:return W}}case e:return W}}}return Yn.ContextConsumer=u,Yn.ContextProvider=i,Yn.Element=n,Yn.ForwardRef=c,Yn.Fragment=t,Yn.Lazy=v,Yn.Memo=d,Yn.Portal=e,Yn.Profiler=a,Yn.StrictMode=r,Yn.Suspense=f,Yn.SuspenseList=m,Yn.isAsyncMode=function(){return!1},Yn.isConcurrentMode=function(){return!1},Yn.isContextConsumer=function(y){return I(y)===u},Yn.isContextProvider=function(y){return I(y)===i},Yn.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===n},Yn.isForwardRef=function(y){return I(y)===c},Yn.isFragment=function(y){return I(y)===t},Yn.isLazy=function(y){return I(y)===v},Yn.isMemo=function(y){return I(y)===d},Yn.isPortal=function(y){return I(y)===e},Yn.isProfiler=function(y){return I(y)===a},Yn.isStrictMode=function(y){return I(y)===r},Yn.isSuspense=function(y){return I(y)===f},Yn.isSuspenseList=function(y){return I(y)===m},Yn.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===a||y===r||y===f||y===m||y===b||typeof y=="object"&&y!==null&&(y.$$typeof===v||y.$$typeof===d||y.$$typeof===i||y.$$typeof===u||y.$$typeof===c||y.$$typeof===B||y.getModuleId!==void 0)},Yn.typeOf=I,Yn}var NB;function aE(){return NB||(NB=1,Pd.exports=rE()),Pd.exports}var oE=aE(),wd,RB;function k5(){if(RB)return wd;RB=1;var n=Yr(),e=Xr(),t="[object Number]";function r(a){return typeof a=="number"||e(a)&&n(a)==t}return wd=r,wd}var Wd,kB;function iE(){if(kB)return Wd;kB=1;var n=k5();function e(t){return n(t)&&t!=+t}return Wd=e,Wd}var pE=iE();const Qi=Zn(pE);var uE=k5();const sE=Zn(uE);var ot=function(e){return e===0?0:e>0?1:-1},so=function(e){return Qu(e)&&e.indexOf("%")===e.length-1},fn=function(e){return sE(e)&&!Qi(e)},Te=function(e){return fn(e)||Qu(e)},lE=0,Da=function(e){var t=++lE;return"".concat(e||"").concat(t)},it=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!fn(e)&&!Qu(e))return r;var i;if(so(e)){var u=e.indexOf("%");i=t*parseFloat(e.slice(0,u))/100}else i=+e;return Qi(i)&&(i=r),a&&i>t&&(i=t),i},Sa=function(e){if(!e)return null;var t=Object.keys(e);return t&&t.length?e[t[0]]:null},cE=function(e){if(!Array.isArray(e))return!1;for(var t=e.length,r={},a=0;a<t;a++)if(!r[e[a]])r[e[a]]=!0;else return!0;return!1},he=function(e,t){return fn(e)&&fn(t)?function(r){return e+r*(t-e)}:function(){return t}};function Rs(n,e,t){return!n||!n.length?null:n.find(function(r){return r&&(typeof e=="function"?e(r):Ot(r,e))===t})}var fE=function(e){if(!e||!e.length)return null;for(var t=e.length,r=0,a=0,i=0,u=0,s=1/0,c=-1/0,f=0,m=0,d=0;d<t;d++)f=e[d].cx||0,m=e[d].cy||0,r+=f,a+=m,i+=f*m,u+=f*f,s=Math.min(s,f),c=Math.max(c,f);var v=t*u!==r*r?(t*i-r*a)/(t*u-r*r):0;return{xmin:s,xmax:c,a:v,b:(a-v*r)/t}};function si(n,e){for(var t in n)if({}.hasOwnProperty.call(n,t)&&(!{}.hasOwnProperty.call(e,t)||n[t]!==e[t]))return!1;for(var r in e)if({}.hasOwnProperty.call(e,r)&&!{}.hasOwnProperty.call(n,r))return!1;return!0}function D6(n){"@babel/helpers - typeof";return D6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D6(n)}var dE=["viewBox","children"],mE=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],EB=["points","pathLength"],Sd={svg:dE,polygon:EB,polyline:EB},wg=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],ks=function(e,t){if(!e||typeof e=="function"||typeof e=="boolean")return null;var r=e;if(U.isValidElement(e)&&(r=e.props),!Ki(r))return null;var a={};return Object.keys(r).forEach(function(i){wg.includes(i)&&(a[i]=t||function(u){return r[i](r,u)})}),a},hE=function(e,t,r){return function(a){return e(t,r,a),null}},Ra=function(e,t,r){if(!Ki(e)||D6(e)!=="object")return null;var a=null;return Object.keys(e).forEach(function(i){var u=e[i];wg.includes(i)&&typeof u=="function"&&(a||(a={}),a[i]=hE(u,t,r))}),a},vE=["children"],gE=["children"];function TB(n,e){if(n==null)return{};var t=bE(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function bE(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function j6(n){"@babel/helpers - typeof";return j6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j6(n)}var DB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(e){return typeof e=="string"?e:e?e.displayName||e.name||"Component":""},jB=null,Md=null,Wg=function n(e){if(e===jB&&Array.isArray(Md))return Md;var t=[];return U.Children.forEach(e,function(r){En(r)||(oE.isFragment(r)?t=t.concat(n(r.props.children)):t.push(r))}),Md=t,jB=e,t};function ut(n,e){var t=[],r=[];return Array.isArray(e)?r=e.map(function(a){return Ur(a)}):r=[Ur(e)],Wg(n).forEach(function(a){var i=Ot(a,"type.displayName")||Ot(a,"type.name");r.indexOf(i)!==-1&&t.push(a)}),t}function St(n,e){var t=ut(n,e);return t&&t[0]}var $B=function(e){if(!e||!e.props)return!1;var t=e.props,r=t.width,a=t.height;return!(!fn(r)||r<=0||!fn(a)||a<=0)},yE=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],IE=function(e){return e&&e.type&&Qu(e.type)&&yE.indexOf(e.type)>=0},E5=function(e){return e&&j6(e)==="object"&&"clipDot"in e},BE=function(e,t,r,a){var i,u=(i=Sd==null?void 0:Sd[a])!==null&&i!==void 0?i:[];return t.startsWith("data-")||!kn(e)&&(a&&u.includes(t)||mE.includes(t))||r&&wg.includes(t)},Hn=function(e,t,r){if(!e||typeof e=="function"||typeof e=="boolean")return null;var a=e;if(U.isValidElement(e)&&(a=e.props),!Ki(a))return null;var i={};return Object.keys(a).forEach(function(u){var s;BE((s=a)===null||s===void 0?void 0:s[u],u,t,r)&&(i[u]=a[u])}),i},$6=function n(e,t){if(e===t)return!0;var r=U.Children.count(e);if(r!==U.Children.count(t))return!1;if(r===0)return!0;if(r===1)return LB(Array.isArray(e)?e[0]:e,Array.isArray(t)?t[0]:t);for(var a=0;a<r;a++){var i=e[a],u=t[a];if(Array.isArray(i)||Array.isArray(u)){if(!n(i,u))return!1}else if(!LB(i,u))return!1}return!0},LB=function(e,t){if(En(e)&&En(t))return!0;if(!En(e)&&!En(t)){var r=e.props||{},a=r.children,i=TB(r,vE),u=t.props||{},s=u.children,c=TB(u,gE);return a&&s?si(i,c)&&$6(a,s):!a&&!s?si(i,c):!1}return!1},FB=function(e,t){var r=[],a={};return Wg(e).forEach(function(i,u){if(IE(i))r.push(i);else if(i){var s=Ur(i.type),c=t[s]||{},f=c.handler,m=c.once;if(f&&(!m||!a[s])){var d=f(i,s,u);r.push(d),a[s]=!0}}}),r},xE=function(e){var t=e&&e.type;return t&&DB[t]?DB[t]:null},PE=function(e,t){return Wg(t).indexOf(e)},wE=["children","width","height","viewBox","className","style","title","desc"];function L6(){return L6=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},L6.apply(this,arguments)}function WE(n,e){if(n==null)return{};var t=SE(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function SE(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function F6(n){var e=n.children,t=n.width,r=n.height,a=n.viewBox,i=n.className,u=n.style,s=n.title,c=n.desc,f=WE(n,wE),m=a||{width:t,height:r,x:0,y:0},d=jn("recharts-surface",i);return E.createElement("svg",L6({},Hn(f,!0,"svg"),{className:d,width:t,height:r,style:u,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),E.createElement("title",null,s),E.createElement("desc",null,c),e)}var ME=["children","className"];function q6(){return q6=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},q6.apply(this,arguments)}function AE(n,e){if(n==null)return{};var t=_E(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function _E(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}var Ln=E.forwardRef(function(n,e){var t=n.children,r=n.className,a=AE(n,ME),i=jn("recharts-layer",r);return E.createElement("g",q6({className:i},Hn(a,!0),{ref:e}),t)}),sr=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},Ad,qB;function OE(){if(qB)return Ad;qB=1;function n(e,t,r){var a=-1,i=e.length;t<0&&(t=-t>i?0:i+t),r=r>i?i:r,r<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var u=Array(i);++a<i;)u[a]=e[a+t];return u}return Ad=n,Ad}var _d,zB;function HE(){if(zB)return _d;zB=1;var n=OE();function e(t,r,a){var i=t.length;return a=a===void 0?i:a,!r&&a>=i?t:n(t,r,a)}return _d=e,_d}var Od,UB;function T5(){if(UB)return Od;UB=1;var n="\\ud800-\\udfff",e="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=e+t+r,i="\\ufe0e\\ufe0f",u="\\u200d",s=RegExp("["+u+n+a+i+"]");function c(f){return s.test(f)}return Od=c,Od}var Hd,VB;function CE(){if(VB)return Hd;VB=1;function n(e){return e.split("")}return Hd=n,Hd}var Cd,GB;function NE(){if(GB)return Cd;GB=1;var n="\\ud800-\\udfff",e="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=e+t+r,i="\\ufe0e\\ufe0f",u="["+n+"]",s="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+c+")",m="[^"+n+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",B=f+"?",I="["+i+"]?",y="(?:"+b+"(?:"+[m,d,v].join("|")+")"+I+B+")*",W=I+B+y,S="(?:"+[m+s+"?",s,d,v,u].join("|")+")",M=RegExp(c+"(?="+c+")|"+S+W,"g");function O(P){return P.match(M)||[]}return Cd=O,Cd}var Nd,KB;function RE(){if(KB)return Nd;KB=1;var n=CE(),e=T5(),t=NE();function r(a){return e(a)?t(a):n(a)}return Nd=r,Nd}var Rd,QB;function kE(){if(QB)return Rd;QB=1;var n=HE(),e=T5(),t=RE(),r=C5();function a(i){return function(u){u=r(u);var s=e(u)?t(u):void 0,c=s?s[0]:u.charAt(0),f=s?n(s,1).join(""):u.slice(1);return c[i]()+f}}return Rd=a,Rd}var kd,YB;function EE(){if(YB)return kd;YB=1;var n=kE(),e=n("toUpperCase");return kd=e,kd}var TE=EE();const Vl=Zn(TE);function oe(n){return function(){return n}}const D5=Math.cos,Es=Math.sin,cr=Math.sqrt,Ts=Math.PI,Gl=2*Ts,z6=Math.PI,U6=2*z6,io=1e-6,DE=U6-io;function j5(n){this._+=n[0];for(let e=1,t=n.length;e<t;++e)this._+=arguments[e]+n[e]}function jE(n){let e=Math.floor(n);if(!(e>=0))throw new Error(`invalid digits: ${n}`);if(e>15)return j5;const t=10**e;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*t)/t+r[a]}}class $E{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?j5:jE(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,r,a){this._append`Q${+e},${+t},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(e,t,r,a,i,u){this._append`C${+e},${+t},${+r},${+a},${this._x1=+i},${this._y1=+u}`}arcTo(e,t,r,a,i){if(e=+e,t=+t,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let u=this._x1,s=this._y1,c=r-e,f=a-t,m=u-e,d=s-t,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(v>io)if(!(Math.abs(d*c-f*m)>io)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let b=r-u,B=a-s,I=c*c+f*f,y=b*b+B*B,W=Math.sqrt(I),S=Math.sqrt(v),M=i*Math.tan((z6-Math.acos((I+v-y)/(2*W*S)))/2),O=M/S,P=M/W;Math.abs(O-1)>io&&this._append`L${e+O*m},${t+O*d}`,this._append`A${i},${i},0,0,${+(d*b>m*B)},${this._x1=e+P*c},${this._y1=t+P*f}`}}arc(e,t,r,a,i,u){if(e=+e,t=+t,r=+r,u=!!u,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(a),c=r*Math.sin(a),f=e+s,m=t+c,d=1^u,v=u?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-m)>io)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%U6+U6),v>DE?this._append`A${r},${r},0,1,${d},${e-s},${t-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>io&&this._append`A${r},${r},0,${+(v>=z6)},${d},${this._x1=e+r*Math.cos(i)},${this._y1=t+r*Math.sin(i)}`)}rect(e,t,r,a){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Sg(n){let e=3;return n.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);e=r}return n},()=>new $E(e)}function Mg(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function $5(n){this._context=n}$5.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;default:this._context.lineTo(n,e);break}}};function Kl(n){return new $5(n)}function L5(n){return n[0]}function F5(n){return n[1]}function q5(n,e){var t=oe(!0),r=null,a=Kl,i=null,u=Sg(s);n=typeof n=="function"?n:n===void 0?L5:oe(n),e=typeof e=="function"?e:e===void 0?F5:oe(e);function s(c){var f,m=(c=Mg(c)).length,d,v=!1,b;for(r==null&&(i=a(b=u())),f=0;f<=m;++f)!(f<m&&t(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+n(d,f,c),+e(d,f,c));if(b)return i=null,b+""||null}return s.x=function(c){return arguments.length?(n=typeof c=="function"?c:oe(+c),s):n},s.y=function(c){return arguments.length?(e=typeof c=="function"?c:oe(+c),s):e},s.defined=function(c){return arguments.length?(t=typeof c=="function"?c:oe(!!c),s):t},s.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),s):a},s.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),s):r},s}function hs(n,e,t){var r=null,a=oe(!0),i=null,u=Kl,s=null,c=Sg(f);n=typeof n=="function"?n:n===void 0?L5:oe(+n),e=typeof e=="function"?e:oe(e===void 0?0:+e),t=typeof t=="function"?t:t===void 0?F5:oe(+t);function f(d){var v,b,B,I=(d=Mg(d)).length,y,W=!1,S,M=new Array(I),O=new Array(I);for(i==null&&(s=u(S=c())),v=0;v<=I;++v){if(!(v<I&&a(y=d[v],v,d))===W)if(W=!W)b=v,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),B=v-1;B>=b;--B)s.point(M[B],O[B]);s.lineEnd(),s.areaEnd()}W&&(M[v]=+n(y,v,d),O[v]=+e(y,v,d),s.point(r?+r(y,v,d):M[v],t?+t(y,v,d):O[v]))}if(S)return s=null,S+""||null}function m(){return q5().defined(a).curve(u).context(i)}return f.x=function(d){return arguments.length?(n=typeof d=="function"?d:oe(+d),r=null,f):n},f.x0=function(d){return arguments.length?(n=typeof d=="function"?d:oe(+d),f):n},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:oe(+d),f):r},f.y=function(d){return arguments.length?(e=typeof d=="function"?d:oe(+d),t=null,f):e},f.y0=function(d){return arguments.length?(e=typeof d=="function"?d:oe(+d),f):e},f.y1=function(d){return arguments.length?(t=d==null?null:typeof d=="function"?d:oe(+d),f):t},f.lineX0=f.lineY0=function(){return m().x(n).y(e)},f.lineY1=function(){return m().x(n).y(t)},f.lineX1=function(){return m().x(r).y(e)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:oe(!!d),f):a},f.curve=function(d){return arguments.length?(u=d,i!=null&&(s=u(i)),f):u},f.context=function(d){return arguments.length?(d==null?i=s=null:s=u(i=d),f):i},f}class z5{constructor(e,t){this._context=e,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(e,t){switch(e=+e,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+e)/2,this._y0,this._x0,t,e,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,e,this._y0,e,t);break}}this._x0=e,this._y0=t}}function LE(n){return new z5(n,!0)}function FE(n){return new z5(n,!1)}const Ag={draw(n,e){const t=cr(e/Ts);n.moveTo(t,0),n.arc(0,0,t,0,Gl)}},qE={draw(n,e){const t=cr(e/5)/2;n.moveTo(-3*t,-t),n.lineTo(-t,-t),n.lineTo(-t,-3*t),n.lineTo(t,-3*t),n.lineTo(t,-t),n.lineTo(3*t,-t),n.lineTo(3*t,t),n.lineTo(t,t),n.lineTo(t,3*t),n.lineTo(-t,3*t),n.lineTo(-t,t),n.lineTo(-3*t,t),n.closePath()}},U5=cr(1/3),zE=U5*2,UE={draw(n,e){const t=cr(e/zE),r=t*U5;n.moveTo(0,-t),n.lineTo(r,0),n.lineTo(0,t),n.lineTo(-r,0),n.closePath()}},VE={draw(n,e){const t=cr(e),r=-t/2;n.rect(r,r,t,t)}},GE=.8908130915292852,V5=Es(Ts/10)/Es(7*Ts/10),KE=Es(Gl/10)*V5,QE=-D5(Gl/10)*V5,YE={draw(n,e){const t=cr(e*GE),r=KE*t,a=QE*t;n.moveTo(0,-t),n.lineTo(r,a);for(let i=1;i<5;++i){const u=Gl*i/5,s=D5(u),c=Es(u);n.lineTo(c*t,-s*t),n.lineTo(s*r-c*a,c*r+s*a)}n.closePath()}},Ed=cr(3),XE={draw(n,e){const t=-cr(e/(Ed*3));n.moveTo(0,t*2),n.lineTo(-Ed*t,-t),n.lineTo(Ed*t,-t),n.closePath()}},$t=-.5,Lt=cr(3)/2,V6=1/cr(12),ZE=(V6/2+1)*3,JE={draw(n,e){const t=cr(e/ZE),r=t/2,a=t*V6,i=r,u=t*V6+t,s=-i,c=u;n.moveTo(r,a),n.lineTo(i,u),n.lineTo(s,c),n.lineTo($t*r-Lt*a,Lt*r+$t*a),n.lineTo($t*i-Lt*u,Lt*i+$t*u),n.lineTo($t*s-Lt*c,Lt*s+$t*c),n.lineTo($t*r+Lt*a,$t*a-Lt*r),n.lineTo($t*i+Lt*u,$t*u-Lt*i),n.lineTo($t*s+Lt*c,$t*c-Lt*s),n.closePath()}};function nT(n,e){let t=null,r=Sg(a);n=typeof n=="function"?n:oe(n||Ag),e=typeof e=="function"?e:oe(e===void 0?64:+e);function a(){let i;if(t||(t=i=r()),n.apply(this,arguments).draw(t,+e.apply(this,arguments)),i)return t=null,i+""||null}return a.type=function(i){return arguments.length?(n=typeof i=="function"?i:oe(i),a):n},a.size=function(i){return arguments.length?(e=typeof i=="function"?i:oe(+i),a):e},a.context=function(i){return arguments.length?(t=i??null,a):t},a}function Ds(){}function js(n,e,t){n._context.bezierCurveTo((2*n._x0+n._x1)/3,(2*n._y0+n._y1)/3,(n._x0+2*n._x1)/3,(n._y0+2*n._y1)/3,(n._x0+4*n._x1+e)/6,(n._y0+4*n._y1+t)/6)}function G5(n){this._context=n}G5.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:js(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:js(this,n,e);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e}};function eT(n){return new G5(n)}function K5(n){this._context=n}K5.prototype={areaStart:Ds,areaEnd:Ds,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._x2=n,this._y2=e;break;case 1:this._point=2,this._x3=n,this._y3=e;break;case 2:this._point=3,this._x4=n,this._y4=e,this._context.moveTo((this._x0+4*this._x1+n)/6,(this._y0+4*this._y1+e)/6);break;default:js(this,n,e);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e}};function tT(n){return new K5(n)}function Q5(n){this._context=n}Q5.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+n)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:js(this,n,e);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e}};function rT(n){return new Q5(n)}function Y5(n){this._context=n}Y5.prototype={areaStart:Ds,areaEnd:Ds,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(n,e){n=+n,e=+e,this._point?this._context.lineTo(n,e):(this._point=1,this._context.moveTo(n,e))}};function aT(n){return new Y5(n)}function XB(n){return n<0?-1:1}function ZB(n,e,t){var r=n._x1-n._x0,a=e-n._x1,i=(n._y1-n._y0)/(r||a<0&&-0),u=(t-n._y1)/(a||r<0&&-0),s=(i*a+u*r)/(r+a);return(XB(i)+XB(u))*Math.min(Math.abs(i),Math.abs(u),.5*Math.abs(s))||0}function JB(n,e){var t=n._x1-n._x0;return t?(3*(n._y1-n._y0)/t-e)/2:e}function Td(n,e,t){var r=n._x0,a=n._y0,i=n._x1,u=n._y1,s=(i-r)/3;n._context.bezierCurveTo(r+s,a+s*e,i-s,u-s*t,i,u)}function $s(n){this._context=n}$s.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Td(this,this._t0,JB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){var t=NaN;if(n=+n,e=+e,!(n===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;break;case 2:this._point=3,Td(this,JB(this,t=ZB(this,n,e)),t);break;default:Td(this,this._t0,t=ZB(this,n,e));break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e,this._t0=t}}};function X5(n){this._context=new Z5(n)}(X5.prototype=Object.create($s.prototype)).point=function(n,e){$s.prototype.point.call(this,e,n)};function Z5(n){this._context=n}Z5.prototype={moveTo:function(n,e){this._context.moveTo(e,n)},closePath:function(){this._context.closePath()},lineTo:function(n,e){this._context.lineTo(e,n)},bezierCurveTo:function(n,e,t,r,a,i){this._context.bezierCurveTo(e,n,r,t,i,a)}};function oT(n){return new $s(n)}function iT(n){return new X5(n)}function J5(n){this._context=n}J5.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var n=this._x,e=this._y,t=n.length;if(t)if(this._line?this._context.lineTo(n[0],e[0]):this._context.moveTo(n[0],e[0]),t===2)this._context.lineTo(n[1],e[1]);else for(var r=nx(n),a=nx(e),i=0,u=1;u<t;++i,++u)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],n[u],e[u]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(n,e){this._x.push(+n),this._y.push(+e)}};function nx(n){var e,t=n.length-1,r,a=new Array(t),i=new Array(t),u=new Array(t);for(a[0]=0,i[0]=2,u[0]=n[0]+2*n[1],e=1;e<t-1;++e)a[e]=1,i[e]=4,u[e]=4*n[e]+2*n[e+1];for(a[t-1]=2,i[t-1]=7,u[t-1]=8*n[t-1]+n[t],e=1;e<t;++e)r=a[e]/i[e-1],i[e]-=r,u[e]-=r*u[e-1];for(a[t-1]=u[t-1]/i[t-1],e=t-2;e>=0;--e)a[e]=(u[e]-a[e+1])/i[e];for(i[t-1]=(n[t]+a[t-1])/2,e=0;e<t-1;++e)i[e]=2*n[e+1]-a[e+1];return[a,i]}function pT(n){return new J5(n)}function Ql(n,e){this._context=n,this._t=e}Ql.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(n,e);else{var t=this._x*(1-this._t)+n*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,e)}break}}this._x=n,this._y=e}};function uT(n){return new Ql(n,.5)}function sT(n){return new Ql(n,0)}function lT(n){return new Ql(n,1)}function mi(n,e){if((u=n.length)>1)for(var t=1,r,a,i=n[e[0]],u,s=i.length;t<u;++t)for(a=i,i=n[e[t]],r=0;r<s;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function G6(n){for(var e=n.length,t=new Array(e);--e>=0;)t[e]=e;return t}function cT(n,e){return n[e]}function fT(n){const e=[];return e.key=n,e}function dT(){var n=oe([]),e=G6,t=mi,r=cT;function a(i){var u=Array.from(n.apply(this,arguments),fT),s,c=u.length,f=-1,m;for(const d of i)for(s=0,++f;s<c;++s)(u[s][f]=[0,+r(d,u[s].key,f,i)]).data=d;for(s=0,m=Mg(e(u));s<c;++s)u[m[s]].index=s;return t(u,m),u}return a.keys=function(i){return arguments.length?(n=typeof i=="function"?i:oe(Array.from(i)),a):n},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:oe(+i),a):r},a.order=function(i){return arguments.length?(e=i==null?G6:typeof i=="function"?i:oe(Array.from(i)),a):e},a.offset=function(i){return arguments.length?(t=i??mi,a):t},a}function mT(n,e){if((r=n.length)>0){for(var t,r,a=0,i=n[0].length,u;a<i;++a){for(u=t=0;t<r;++t)u+=n[t][a][1]||0;if(u)for(t=0;t<r;++t)n[t][a][1]/=u}mi(n,e)}}function hT(n,e){if((a=n.length)>0){for(var t=0,r=n[e[0]],a,i=r.length;t<i;++t){for(var u=0,s=0;u<a;++u)s+=n[u][t][1]||0;r[t][1]+=r[t][0]=-s/2}mi(n,e)}}function vT(n,e){if(!(!((u=n.length)>0)||!((i=(a=n[e[0]]).length)>0))){for(var t=0,r=1,a,i,u;r<i;++r){for(var s=0,c=0,f=0;s<u;++s){for(var m=n[e[s]],d=m[r][1]||0,v=m[r-1][1]||0,b=(d-v)/2,B=0;B<s;++B){var I=n[e[B]],y=I[r][1]||0,W=I[r-1][1]||0;b+=y-W}c+=d,f+=b*d}a[r-1][1]+=a[r-1][0]=t,c&&(t-=f/c)}a[r-1][1]+=a[r-1][0]=t,mi(n,e)}}function du(n){"@babel/helpers - typeof";return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},du(n)}var gT=["type","size","sizeType"];function K6(){return K6=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},K6.apply(this,arguments)}function ex(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function tx(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ex(Object(t),!0).forEach(function(r){bT(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ex(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function bT(n,e,t){return e=yT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yT(n){var e=IT(n,"string");return du(e)=="symbol"?e:e+""}function IT(n,e){if(du(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(du(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function BT(n,e){if(n==null)return{};var t=xT(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function xT(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}var nS={symbolCircle:Ag,symbolCross:qE,symbolDiamond:UE,symbolSquare:VE,symbolStar:YE,symbolTriangle:XE,symbolWye:JE},PT=Math.PI/180,wT=function(e){var t="symbol".concat(Vl(e));return nS[t]||Ag},WT=function(e,t,r){if(t==="area")return e;switch(r){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var a=18*PT;return 1.25*e*e*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},ST=function(e,t){nS["symbol".concat(Vl(e))]=t},Yl=function(e){var t=e.type,r=t===void 0?"circle":t,a=e.size,i=a===void 0?64:a,u=e.sizeType,s=u===void 0?"area":u,c=BT(e,gT),f=tx(tx({},c),{},{type:r,size:i,sizeType:s}),m=function(){var y=wT(r),W=nT().type(y).size(WT(i,s,r));return W()},d=f.className,v=f.cx,b=f.cy,B=Hn(f,!0);return v===+v&&b===+b&&i===+i?E.createElement("path",K6({},B,{className:jn("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(b,")"),d:m()})):null};Yl.registerSymbol=ST;function hi(n){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hi(n)}function Q6(){return Q6=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Q6.apply(this,arguments)}function rx(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function MT(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rx(Object(t),!0).forEach(function(r){mu(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):rx(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function AT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,tS(r.key),r)}}function OT(n,e,t){return e&&_T(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function HT(n,e,t){return e=Ls(e),CT(n,eS()?Reflect.construct(e,t||[],Ls(n).constructor):e.apply(n,t))}function CT(n,e){if(e&&(hi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NT(n)}function NT(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function eS(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eS=function(){return!!n})()}function Ls(n){return Ls=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ls(n)}function RT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Y6(n,e)}function Y6(n,e){return Y6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Y6(n,e)}function mu(n,e,t){return e=tS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function tS(n){var e=kT(n,"string");return hi(e)=="symbol"?e:e+""}function kT(n,e){if(hi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var Ft=32,_g=(function(n){function e(){return AT(this,e),HT(this,e,arguments)}return RT(e,n),OT(e,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ft/2,u=Ft/6,s=Ft/3,c=r.inactive?a:r.color;if(r.type==="plainline")return E.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ft,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return E.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(s,`
            A`).concat(u,",").concat(u,",0,1,1,").concat(2*s,",").concat(i,`
            H`).concat(Ft,"M").concat(2*s,",").concat(i,`
            A`).concat(u,",").concat(u,",0,1,1,").concat(s,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return E.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Ft/8,"h").concat(Ft,"v").concat(Ft*3/4,"h").concat(-Ft,"z"),className:"recharts-legend-icon"});if(E.isValidElement(r.legendIcon)){var f=MT({},r);return delete f.legendIcon,E.cloneElement(r.legendIcon,f)}return E.createElement(Yl,{fill:c,cx:i,cy:i,size:Ft,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,u=a.iconSize,s=a.layout,c=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:Ft,height:Ft},d={display:s==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(b,B){var I=b.formatter||c,y=jn(mu(mu({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",b.inactive));if(b.type==="none")return null;var W=kn(b.value)?null:b.value;sr(!kn(b.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var S=b.inactive?f:b.color;return E.createElement("li",Q6({className:y,style:d,key:"legend-item-".concat(B)},Ra(r.props,b,B)),E.createElement(F6,{width:u,height:u,viewBox:m,style:v},r.renderIcon(b)),E.createElement("span",{className:"recharts-legend-item-text",style:{color:S}},I?I(W,b,B):W))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,u=r.align;if(!a||!a.length)return null;var s={padding:0,margin:0,textAlign:i==="horizontal"?u:"left"};return E.createElement("ul",{className:"recharts-default-legend",style:s},this.renderItems())}}])})(U.PureComponent);mu(_g,"displayName","Legend");mu(_g,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Dd,ax;function ET(){if(ax)return Dd;ax=1;var n=ql();function e(){this.__data__=new n,this.size=0}return Dd=e,Dd}var jd,ox;function TT(){if(ox)return jd;ox=1;function n(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}return jd=n,jd}var $d,ix;function DT(){if(ix)return $d;ix=1;function n(e){return this.__data__.get(e)}return $d=n,$d}var Ld,px;function jT(){if(px)return Ld;px=1;function n(e){return this.__data__.has(e)}return Ld=n,Ld}var Fd,ux;function $T(){if(ux)return Fd;ux=1;var n=ql(),e=Ig(),t=Bg(),r=200;function a(i,u){var s=this.__data__;if(s instanceof n){var c=s.__data__;if(!e||c.length<r-1)return c.push([i,u]),this.size=++s.size,this;s=this.__data__=new t(c)}return s.set(i,u),this.size=s.size,this}return Fd=a,Fd}var qd,sx;function rS(){if(sx)return qd;sx=1;var n=ql(),e=ET(),t=TT(),r=DT(),a=jT(),i=$T();function u(s){var c=this.__data__=new n(s);this.size=c.size}return u.prototype.clear=e,u.prototype.delete=t,u.prototype.get=r,u.prototype.has=a,u.prototype.set=i,qd=u,qd}var zd,lx;function LT(){if(lx)return zd;lx=1;var n="__lodash_hash_undefined__";function e(t){return this.__data__.set(t,n),this}return zd=e,zd}var Ud,cx;function FT(){if(cx)return Ud;cx=1;function n(e){return this.__data__.has(e)}return Ud=n,Ud}var Vd,fx;function aS(){if(fx)return Vd;fx=1;var n=Bg(),e=LT(),t=FT();function r(a){var i=-1,u=a==null?0:a.length;for(this.__data__=new n;++i<u;)this.add(a[i])}return r.prototype.add=r.prototype.push=e,r.prototype.has=t,Vd=r,Vd}var Gd,dx;function oS(){if(dx)return Gd;dx=1;function n(e,t){for(var r=-1,a=e==null?0:e.length;++r<a;)if(t(e[r],r,e))return!0;return!1}return Gd=n,Gd}var Kd,mx;function iS(){if(mx)return Kd;mx=1;function n(e,t){return e.has(t)}return Kd=n,Kd}var Qd,hx;function pS(){if(hx)return Qd;hx=1;var n=aS(),e=oS(),t=iS(),r=1,a=2;function i(u,s,c,f,m,d){var v=c&r,b=u.length,B=s.length;if(b!=B&&!(v&&B>b))return!1;var I=d.get(u),y=d.get(s);if(I&&y)return I==s&&y==u;var W=-1,S=!0,M=c&a?new n:void 0;for(d.set(u,s),d.set(s,u);++W<b;){var O=u[W],P=s[W];if(f)var A=v?f(P,O,W,s,u,d):f(O,P,W,u,s,d);if(A!==void 0){if(A)continue;S=!1;break}if(M){if(!e(s,function(N,w){if(!t(M,w)&&(O===N||m(O,N,c,f,d)))return M.push(w)})){S=!1;break}}else if(!(O===P||m(O,P,c,f,d))){S=!1;break}}return d.delete(u),d.delete(s),S}return Qd=i,Qd}var Yd,vx;function qT(){if(vx)return Yd;vx=1;var n=Sr(),e=n.Uint8Array;return Yd=e,Yd}var Xd,gx;function zT(){if(gx)return Xd;gx=1;function n(e){var t=-1,r=Array(e.size);return e.forEach(function(a,i){r[++t]=[i,a]}),r}return Xd=n,Xd}var Zd,bx;function Og(){if(bx)return Zd;bx=1;function n(e){var t=-1,r=Array(e.size);return e.forEach(function(a){r[++t]=a}),r}return Zd=n,Zd}var Jd,yx;function UT(){if(yx)return Jd;yx=1;var n=Ku(),e=qT(),t=yg(),r=pS(),a=zT(),i=Og(),u=1,s=2,c="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",b="[object RegExp]",B="[object Set]",I="[object String]",y="[object Symbol]",W="[object ArrayBuffer]",S="[object DataView]",M=n?n.prototype:void 0,O=M?M.valueOf:void 0;function P(A,N,w,H,k,D,R){switch(w){case S:if(A.byteLength!=N.byteLength||A.byteOffset!=N.byteOffset)return!1;A=A.buffer,N=N.buffer;case W:return!(A.byteLength!=N.byteLength||!D(new e(A),new e(N)));case c:case f:case v:return t(+A,+N);case m:return A.name==N.name&&A.message==N.message;case b:case I:return A==N+"";case d:var F=a;case B:var V=H&u;if(F||(F=i),A.size!=N.size&&!V)return!1;var G=R.get(A);if(G)return G==N;H|=s,R.set(A,N);var Y=r(F(A),F(N),H,k,D,R);return R.delete(A),Y;case y:if(O)return O.call(A)==O.call(N)}return!1}return Jd=P,Jd}var nm,Ix;function uS(){if(Ix)return nm;Ix=1;function n(e,t){for(var r=-1,a=t.length,i=e.length;++r<a;)e[i+r]=t[r];return e}return nm=n,nm}var em,Bx;function VT(){if(Bx)return em;Bx=1;var n=uS(),e=yt();function t(r,a,i){var u=a(r);return e(r)?u:n(u,i(r))}return em=t,em}var tm,xx;function GT(){if(xx)return tm;xx=1;function n(e,t){for(var r=-1,a=e==null?0:e.length,i=0,u=[];++r<a;){var s=e[r];t(s,r,e)&&(u[i++]=s)}return u}return tm=n,tm}var rm,Px;function KT(){if(Px)return rm;Px=1;function n(){return[]}return rm=n,rm}var am,wx;function QT(){if(wx)return am;wx=1;var n=GT(),e=KT(),t=Object.prototype,r=t.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(u){return u==null?[]:(u=Object(u),n(a(u),function(s){return r.call(u,s)}))}:e;return am=i,am}var om,Wx;function YT(){if(Wx)return om;Wx=1;function n(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}return om=n,om}var im,Sx;function XT(){if(Sx)return im;Sx=1;var n=Yr(),e=Xr(),t="[object Arguments]";function r(a){return e(a)&&n(a)==t}return im=r,im}var pm,Mx;function Hg(){if(Mx)return pm;Mx=1;var n=XT(),e=Xr(),t=Object.prototype,r=t.hasOwnProperty,a=t.propertyIsEnumerable,i=n((function(){return arguments})())?n:function(u){return e(u)&&r.call(u,"callee")&&!a.call(u,"callee")};return pm=i,pm}var nu={exports:{}},um,Ax;function ZT(){if(Ax)return um;Ax=1;function n(){return!1}return um=n,um}nu.exports;var _x;function sS(){return _x||(_x=1,(function(n,e){var t=Sr(),r=ZT(),a=e&&!e.nodeType&&e,i=a&&!0&&n&&!n.nodeType&&n,u=i&&i.exports===a,s=u?t.Buffer:void 0,c=s?s.isBuffer:void 0,f=c||r;n.exports=f})(nu,nu.exports)),nu.exports}var sm,Ox;function Cg(){if(Ox)return sm;Ox=1;var n=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function t(r,a){var i=typeof r;return a=a??n,!!a&&(i=="number"||i!="symbol"&&e.test(r))&&r>-1&&r%1==0&&r<a}return sm=t,sm}var lm,Hx;function Ng(){if(Hx)return lm;Hx=1;var n=9007199254740991;function e(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=n}return lm=e,lm}var cm,Cx;function JT(){if(Cx)return cm;Cx=1;var n=Yr(),e=Ng(),t=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",u="[object Date]",s="[object Error]",c="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",b="[object Set]",B="[object String]",I="[object WeakMap]",y="[object ArrayBuffer]",W="[object DataView]",S="[object Float32Array]",M="[object Float64Array]",O="[object Int8Array]",P="[object Int16Array]",A="[object Int32Array]",N="[object Uint8Array]",w="[object Uint8ClampedArray]",H="[object Uint16Array]",k="[object Uint32Array]",D={};D[S]=D[M]=D[O]=D[P]=D[A]=D[N]=D[w]=D[H]=D[k]=!0,D[r]=D[a]=D[y]=D[i]=D[W]=D[u]=D[s]=D[c]=D[f]=D[m]=D[d]=D[v]=D[b]=D[B]=D[I]=!1;function R(F){return t(F)&&e(F.length)&&!!D[n(F)]}return cm=R,cm}var fm,Nx;function lS(){if(Nx)return fm;Nx=1;function n(e){return function(t){return e(t)}}return fm=n,fm}var eu={exports:{}};eu.exports;var Rx;function nD(){return Rx||(Rx=1,(function(n,e){var t=_5(),r=e&&!e.nodeType&&e,a=r&&!0&&n&&!n.nodeType&&n,i=a&&a.exports===r,u=i&&t.process,s=(function(){try{var c=a&&a.require&&a.require("util").types;return c||u&&u.binding&&u.binding("util")}catch{}})();n.exports=s})(eu,eu.exports)),eu.exports}var dm,kx;function cS(){if(kx)return dm;kx=1;var n=JT(),e=lS(),t=nD(),r=t&&t.isTypedArray,a=r?e(r):n;return dm=a,dm}var mm,Ex;function eD(){if(Ex)return mm;Ex=1;var n=YT(),e=Hg(),t=yt(),r=sS(),a=Cg(),i=cS(),u=Object.prototype,s=u.hasOwnProperty;function c(f,m){var d=t(f),v=!d&&e(f),b=!d&&!v&&r(f),B=!d&&!v&&!b&&i(f),I=d||v||b||B,y=I?n(f.length,String):[],W=y.length;for(var S in f)(m||s.call(f,S))&&!(I&&(S=="length"||b&&(S=="offset"||S=="parent")||B&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||a(S,W)))&&y.push(S);return y}return mm=c,mm}var hm,Tx;function tD(){if(Tx)return hm;Tx=1;var n=Object.prototype;function e(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||n;return t===a}return hm=e,hm}var vm,Dx;function fS(){if(Dx)return vm;Dx=1;function n(e,t){return function(r){return e(t(r))}}return vm=n,vm}var gm,jx;function rD(){if(jx)return gm;jx=1;var n=fS(),e=n(Object.keys,Object);return gm=e,gm}var bm,$x;function aD(){if($x)return bm;$x=1;var n=tD(),e=rD(),t=Object.prototype,r=t.hasOwnProperty;function a(i){if(!n(i))return e(i);var u=[];for(var s in Object(i))r.call(i,s)&&s!="constructor"&&u.push(s);return u}return bm=a,bm}var ym,Lx;function Yu(){if(Lx)return ym;Lx=1;var n=bg(),e=Ng();function t(r){return r!=null&&e(r.length)&&!n(r)}return ym=t,ym}var Im,Fx;function Xl(){if(Fx)return Im;Fx=1;var n=eD(),e=aD(),t=Yu();function r(a){return t(a)?n(a):e(a)}return Im=r,Im}var Bm,qx;function oD(){if(qx)return Bm;qx=1;var n=VT(),e=QT(),t=Xl();function r(a){return n(a,t,e)}return Bm=r,Bm}var xm,zx;function iD(){if(zx)return xm;zx=1;var n=oD(),e=1,t=Object.prototype,r=t.hasOwnProperty;function a(i,u,s,c,f,m){var d=s&e,v=n(i),b=v.length,B=n(u),I=B.length;if(b!=I&&!d)return!1;for(var y=b;y--;){var W=v[y];if(!(d?W in u:r.call(u,W)))return!1}var S=m.get(i),M=m.get(u);if(S&&M)return S==u&&M==i;var O=!0;m.set(i,u),m.set(u,i);for(var P=d;++y<b;){W=v[y];var A=i[W],N=u[W];if(c)var w=d?c(N,A,W,u,i,m):c(A,N,W,i,u,m);if(!(w===void 0?A===N||f(A,N,s,c,m):w)){O=!1;break}P||(P=W=="constructor")}if(O&&!P){var H=i.constructor,k=u.constructor;H!=k&&"constructor"in i&&"constructor"in u&&!(typeof H=="function"&&H instanceof H&&typeof k=="function"&&k instanceof k)&&(O=!1)}return m.delete(i),m.delete(u),O}return xm=a,xm}var Pm,Ux;function pD(){if(Ux)return Pm;Ux=1;var n=Bo(),e=Sr(),t=n(e,"DataView");return Pm=t,Pm}var wm,Vx;function uD(){if(Vx)return wm;Vx=1;var n=Bo(),e=Sr(),t=n(e,"Promise");return wm=t,wm}var Wm,Gx;function dS(){if(Gx)return Wm;Gx=1;var n=Bo(),e=Sr(),t=n(e,"Set");return Wm=t,Wm}var Sm,Kx;function sD(){if(Kx)return Sm;Kx=1;var n=Bo(),e=Sr(),t=n(e,"WeakMap");return Sm=t,Sm}var Mm,Qx;function lD(){if(Qx)return Mm;Qx=1;var n=pD(),e=Ig(),t=uD(),r=dS(),a=sD(),i=Yr(),u=O5(),s="[object Map]",c="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",b=u(n),B=u(e),I=u(t),y=u(r),W=u(a),S=i;return(n&&S(new n(new ArrayBuffer(1)))!=v||e&&S(new e)!=s||t&&S(t.resolve())!=f||r&&S(new r)!=m||a&&S(new a)!=d)&&(S=function(M){var O=i(M),P=O==c?M.constructor:void 0,A=P?u(P):"";if(A)switch(A){case b:return v;case B:return s;case I:return f;case y:return m;case W:return d}return O}),Mm=S,Mm}var Am,Yx;function cD(){if(Yx)return Am;Yx=1;var n=rS(),e=pS(),t=UT(),r=iD(),a=lD(),i=yt(),u=sS(),s=cS(),c=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,b=v.hasOwnProperty;function B(I,y,W,S,M,O){var P=i(I),A=i(y),N=P?m:a(I),w=A?m:a(y);N=N==f?d:N,w=w==f?d:w;var H=N==d,k=w==d,D=N==w;if(D&&u(I)){if(!u(y))return!1;P=!0,H=!1}if(D&&!H)return O||(O=new n),P||s(I)?e(I,y,W,S,M,O):t(I,y,N,W,S,M,O);if(!(W&c)){var R=H&&b.call(I,"__wrapped__"),F=k&&b.call(y,"__wrapped__");if(R||F){var V=R?I.value():I,G=F?y.value():y;return O||(O=new n),M(V,G,W,S,O)}}return D?(O||(O=new n),r(I,y,W,S,M,O)):!1}return Am=B,Am}var _m,Xx;function Rg(){if(Xx)return _m;Xx=1;var n=cD(),e=Xr();function t(r,a,i,u,s){return r===a?!0:r==null||a==null||!e(r)&&!e(a)?r!==r&&a!==a:n(r,a,i,u,t,s)}return _m=t,_m}var Om,Zx;function fD(){if(Zx)return Om;Zx=1;var n=rS(),e=Rg(),t=1,r=2;function a(i,u,s,c){var f=s.length,m=f,d=!c;if(i==null)return!m;for(i=Object(i);f--;){var v=s[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=s[f];var b=v[0],B=i[b],I=v[1];if(d&&v[2]){if(B===void 0&&!(b in i))return!1}else{var y=new n;if(c)var W=c(B,I,b,i,u,y);if(!(W===void 0?e(I,B,t|r,c,y):W))return!1}}return!0}return Om=a,Om}var Hm,Jx;function mS(){if(Jx)return Hm;Jx=1;var n=Ta();function e(t){return t===t&&!n(t)}return Hm=e,Hm}var Cm,nP;function dD(){if(nP)return Cm;nP=1;var n=mS(),e=Xl();function t(r){for(var a=e(r),i=a.length;i--;){var u=a[i],s=r[u];a[i]=[u,s,n(s)]}return a}return Cm=t,Cm}var Nm,eP;function hS(){if(eP)return Nm;eP=1;function n(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}return Nm=n,Nm}var Rm,tP;function mD(){if(tP)return Rm;tP=1;var n=fD(),e=dD(),t=hS();function r(a){var i=e(a);return i.length==1&&i[0][2]?t(i[0][0],i[0][1]):function(u){return u===a||n(u,a,i)}}return Rm=r,Rm}var km,rP;function hD(){if(rP)return km;rP=1;function n(e,t){return e!=null&&t in Object(e)}return km=n,km}var Em,aP;function vD(){if(aP)return Em;aP=1;var n=N5(),e=Hg(),t=yt(),r=Cg(),a=Ng(),i=Ul();function u(s,c,f){c=n(c,s);for(var m=-1,d=c.length,v=!1;++m<d;){var b=i(c[m]);if(!(v=s!=null&&f(s,b)))break;s=s[b]}return v||++m!=d?v:(d=s==null?0:s.length,!!d&&a(d)&&r(b,d)&&(t(s)||e(s)))}return Em=u,Em}var Tm,oP;function gD(){if(oP)return Tm;oP=1;var n=hD(),e=vD();function t(r,a){return r!=null&&e(r,a,n)}return Tm=t,Tm}var Dm,iP;function bD(){if(iP)return Dm;iP=1;var n=Rg(),e=R5(),t=gD(),r=gg(),a=mS(),i=hS(),u=Ul(),s=1,c=2;function f(m,d){return r(m)&&a(d)?i(u(m),d):function(v){var b=e(v,m);return b===void 0&&b===d?t(v,m):n(d,b,s|c)}}return Dm=f,Dm}var jm,pP;function Yi(){if(pP)return jm;pP=1;function n(e){return e}return jm=n,jm}var $m,uP;function yD(){if(uP)return $m;uP=1;function n(e){return function(t){return t==null?void 0:t[e]}}return $m=n,$m}var Lm,sP;function ID(){if(sP)return Lm;sP=1;var n=Pg();function e(t){return function(r){return n(r,t)}}return Lm=e,Lm}var Fm,lP;function BD(){if(lP)return Fm;lP=1;var n=yD(),e=ID(),t=gg(),r=Ul();function a(i){return t(i)?n(r(i)):e(i)}return Fm=a,Fm}var qm,cP;function Mr(){if(cP)return qm;cP=1;var n=mD(),e=bD(),t=Yi(),r=yt(),a=BD();function i(u){return typeof u=="function"?u:u==null?t:typeof u=="object"?r(u)?e(u[0],u[1]):n(u):a(u)}return qm=i,qm}var zm,fP;function vS(){if(fP)return zm;fP=1;function n(e,t,r,a){for(var i=e.length,u=r+(a?1:-1);a?u--:++u<i;)if(t(e[u],u,e))return u;return-1}return zm=n,zm}var Um,dP;function xD(){if(dP)return Um;dP=1;function n(e){return e!==e}return Um=n,Um}var Vm,mP;function PD(){if(mP)return Vm;mP=1;function n(e,t,r){for(var a=r-1,i=e.length;++a<i;)if(e[a]===t)return a;return-1}return Vm=n,Vm}var Gm,hP;function wD(){if(hP)return Gm;hP=1;var n=vS(),e=xD(),t=PD();function r(a,i,u){return i===i?t(a,i,u):n(a,e,u)}return Gm=r,Gm}var Km,vP;function WD(){if(vP)return Km;vP=1;var n=wD();function e(t,r){var a=t==null?0:t.length;return!!a&&n(t,r,0)>-1}return Km=e,Km}var Qm,gP;function SD(){if(gP)return Qm;gP=1;function n(e,t,r){for(var a=-1,i=e==null?0:e.length;++a<i;)if(r(t,e[a]))return!0;return!1}return Qm=n,Qm}var Ym,bP;function MD(){if(bP)return Ym;bP=1;function n(){}return Ym=n,Ym}var Xm,yP;function AD(){if(yP)return Xm;yP=1;var n=dS(),e=MD(),t=Og(),r=1/0,a=n&&1/t(new n([,-0]))[1]==r?function(i){return new n(i)}:e;return Xm=a,Xm}var Zm,IP;function _D(){if(IP)return Zm;IP=1;var n=aS(),e=WD(),t=SD(),r=iS(),a=AD(),i=Og(),u=200;function s(c,f,m){var d=-1,v=e,b=c.length,B=!0,I=[],y=I;if(m)B=!1,v=t;else if(b>=u){var W=f?null:a(c);if(W)return i(W);B=!1,v=r,y=new n}else y=f?[]:I;n:for(;++d<b;){var S=c[d],M=f?f(S):S;if(S=m||S!==0?S:0,B&&M===M){for(var O=y.length;O--;)if(y[O]===M)continue n;f&&y.push(M),I.push(S)}else v(y,M,m)||(y!==I&&y.push(M),I.push(S))}return I}return Zm=s,Zm}var Jm,BP;function OD(){if(BP)return Jm;BP=1;var n=Mr(),e=_D();function t(r,a){return r&&r.length?e(r,n(a,2)):[]}return Jm=t,Jm}var HD=OD();const xP=Zn(HD);function gS(n,e,t){return e===!0?xP(n,t):kn(e)?xP(n,e):n}function vi(n){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vi(n)}var CD=["ref"];function PP(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Tr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?PP(Object(t),!0).forEach(function(r){Zl(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):PP(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ND(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function wP(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,yS(r.key),r)}}function RD(n,e,t){return e&&wP(n.prototype,e),t&&wP(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function kD(n,e,t){return e=Fs(e),ED(n,bS()?Reflect.construct(e,t||[],Fs(n).constructor):e.apply(n,t))}function ED(n,e){if(e&&(vi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return TD(n)}function TD(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function bS(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bS=function(){return!!n})()}function Fs(n){return Fs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fs(n)}function DD(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&X6(n,e)}function X6(n,e){return X6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},X6(n,e)}function Zl(n,e,t){return e=yS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yS(n){var e=jD(n,"string");return vi(e)=="symbol"?e:e+""}function jD(n,e){if(vi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function $D(n,e){if(n==null)return{};var t=LD(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function LD(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function FD(n){return n.value}function qD(n,e){if(E.isValidElement(n))return E.cloneElement(n,e);if(typeof n=="function")return E.createElement(n,e);e.ref;var t=$D(e,CD);return E.createElement(_g,t)}var WP=1,Oa=(function(n){function e(){var t;ND(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=kD(this,e,[].concat(a)),Zl(t,"lastBoundingBox",{width:-1,height:-1}),t}return DD(e,n),RD(e,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>WP||Math.abs(a.height-this.lastBoundingBox.height)>WP)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Tr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,u=a.align,s=a.verticalAlign,c=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(u==="center"&&i==="vertical"){var b=this.getBBoxSnapshot();d={left:((f||0)-b.width)/2}}else d=u==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(s==="middle"){var B=this.getBBoxSnapshot();v={top:((m||0)-B.height)/2}}else v=s==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Tr(Tr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,u=a.width,s=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=Tr(Tr({position:"absolute",width:u||"auto",height:s||"auto"},this.getDefaultPosition(c)),c);return E.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(b){r.wrapperNode=b}},qD(i,Tr(Tr({},this.props),{},{payload:gS(m,f,FD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Tr(Tr({},this.defaultProps),r.props),u=i.layout;return u==="vertical"&&fn(r.props.height)?{height:r.props.height}:u==="horizontal"?{width:r.props.width||a}:null}}])})(U.PureComponent);Zl(Oa,"displayName","Legend");Zl(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var nh,SP;function zD(){if(SP)return nh;SP=1;var n=Ku(),e=Hg(),t=yt(),r=n?n.isConcatSpreadable:void 0;function a(i){return t(i)||e(i)||!!(r&&i&&i[r])}return nh=a,nh}var eh,MP;function IS(){if(MP)return eh;MP=1;var n=uS(),e=zD();function t(r,a,i,u,s){var c=-1,f=r.length;for(i||(i=e),s||(s=[]);++c<f;){var m=r[c];a>0&&i(m)?a>1?t(m,a-1,i,u,s):n(s,m):u||(s[s.length]=m)}return s}return eh=t,eh}var th,AP;function UD(){if(AP)return th;AP=1;function n(e){return function(t,r,a){for(var i=-1,u=Object(t),s=a(t),c=s.length;c--;){var f=s[e?c:++i];if(r(u[f],f,u)===!1)break}return t}}return th=n,th}var rh,_P;function VD(){if(_P)return rh;_P=1;var n=UD(),e=n();return rh=e,rh}var ah,OP;function BS(){if(OP)return ah;OP=1;var n=VD(),e=Xl();function t(r,a){return r&&n(r,a,e)}return ah=t,ah}var oh,HP;function GD(){if(HP)return oh;HP=1;var n=Yu();function e(t,r){return function(a,i){if(a==null)return a;if(!n(a))return t(a,i);for(var u=a.length,s=r?u:-1,c=Object(a);(r?s--:++s<u)&&i(c[s],s,c)!==!1;);return a}}return oh=e,oh}var ih,CP;function kg(){if(CP)return ih;CP=1;var n=BS(),e=GD(),t=e(n);return ih=t,ih}var ph,NP;function xS(){if(NP)return ph;NP=1;var n=kg(),e=Yu();function t(r,a){var i=-1,u=e(r)?Array(r.length):[];return n(r,function(s,c,f){u[++i]=a(s,c,f)}),u}return ph=t,ph}var uh,RP;function KD(){if(RP)return uh;RP=1;function n(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}return uh=n,uh}var sh,kP;function QD(){if(kP)return sh;kP=1;var n=Gi();function e(t,r){if(t!==r){var a=t!==void 0,i=t===null,u=t===t,s=n(t),c=r!==void 0,f=r===null,m=r===r,d=n(r);if(!f&&!d&&!s&&t>r||s&&c&&m&&!f&&!d||i&&c&&m||!a&&m||!u)return 1;if(!i&&!s&&!d&&t<r||d&&a&&u&&!i&&!s||f&&a&&u||!c&&u||!m)return-1}return 0}return sh=e,sh}var lh,EP;function YD(){if(EP)return lh;EP=1;var n=QD();function e(t,r,a){for(var i=-1,u=t.criteria,s=r.criteria,c=u.length,f=a.length;++i<c;){var m=n(u[i],s[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return t.index-r.index}return lh=e,lh}var ch,TP;function XD(){if(TP)return ch;TP=1;var n=xg(),e=Pg(),t=Mr(),r=xS(),a=KD(),i=lS(),u=YD(),s=Yi(),c=yt();function f(m,d,v){d.length?d=n(d,function(I){return c(I)?function(y){return e(y,I.length===1?I[0]:I)}:I}):d=[s];var b=-1;d=n(d,i(t));var B=r(m,function(I,y,W){var S=n(d,function(M){return M(I)});return{criteria:S,index:++b,value:I}});return a(B,function(I,y){return u(I,y,v)})}return ch=f,ch}var fh,DP;function ZD(){if(DP)return fh;DP=1;function n(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}return fh=n,fh}var dh,jP;function JD(){if(jP)return dh;jP=1;var n=ZD(),e=Math.max;function t(r,a,i){return a=e(a===void 0?r.length-1:a,0),function(){for(var u=arguments,s=-1,c=e(u.length-a,0),f=Array(c);++s<c;)f[s]=u[a+s];s=-1;for(var m=Array(a+1);++s<a;)m[s]=u[s];return m[a]=i(f),n(r,this,m)}}return dh=t,dh}var mh,$P;function nj(){if($P)return mh;$P=1;function n(e){return function(){return e}}return mh=n,mh}var hh,LP;function PS(){if(LP)return hh;LP=1;var n=Bo(),e=(function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch{}})();return hh=e,hh}var vh,FP;function ej(){if(FP)return vh;FP=1;var n=nj(),e=PS(),t=Yi(),r=e?function(a,i){return e(a,"toString",{configurable:!0,enumerable:!1,value:n(i),writable:!0})}:t;return vh=r,vh}var gh,qP;function tj(){if(qP)return gh;qP=1;var n=800,e=16,t=Date.now;function r(a){var i=0,u=0;return function(){var s=t(),c=e-(s-u);if(u=s,c>0){if(++i>=n)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return gh=r,gh}var bh,zP;function rj(){if(zP)return bh;zP=1;var n=ej(),e=tj(),t=e(n);return bh=t,bh}var yh,UP;function aj(){if(UP)return yh;UP=1;var n=Yi(),e=JD(),t=rj();function r(a,i){return t(e(a,i,n),a+"")}return yh=r,yh}var Ih,VP;function Jl(){if(VP)return Ih;VP=1;var n=yg(),e=Yu(),t=Cg(),r=Ta();function a(i,u,s){if(!r(s))return!1;var c=typeof u;return(c=="number"?e(s)&&t(u,s.length):c=="string"&&u in s)?n(s[u],i):!1}return Ih=a,Ih}var Bh,GP;function oj(){if(GP)return Bh;GP=1;var n=IS(),e=XD(),t=aj(),r=Jl(),a=t(function(i,u){if(i==null)return[];var s=u.length;return s>1&&r(i,u[0],u[1])?u=[]:s>2&&r(u[0],u[1],u[2])&&(u=[u[0]]),e(i,n(u,1),[])});return Bh=a,Bh}var ij=oj();const Eg=Zn(ij);function hu(n){"@babel/helpers - typeof";return hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hu(n)}function Z6(){return Z6=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z6.apply(this,arguments)}function pj(n,e){return cj(n)||lj(n,e)||sj(n,e)||uj()}function uj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sj(n,e){if(n){if(typeof n=="string")return KP(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return KP(n,e)}}function KP(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function lj(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function cj(n){if(Array.isArray(n))return n}function QP(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function xh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?QP(Object(t),!0).forEach(function(r){fj(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):QP(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function fj(n,e,t){return e=dj(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function dj(n){var e=mj(n,"string");return hu(e)=="symbol"?e:e+""}function mj(n,e){if(hu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(hu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function hj(n){return Array.isArray(n)&&Te(n[0])&&Te(n[1])?n.join(" ~ "):n}var vj=function(e){var t=e.separator,r=t===void 0?" : ":t,a=e.contentStyle,i=a===void 0?{}:a,u=e.itemStyle,s=u===void 0?{}:u,c=e.labelStyle,f=c===void 0?{}:c,m=e.payload,d=e.formatter,v=e.itemSorter,b=e.wrapperClassName,B=e.labelClassName,I=e.label,y=e.labelFormatter,W=e.accessibilityLayer,S=W===void 0?!1:W,M=function(){if(m&&m.length){var R={padding:0,margin:0},F=(v?Eg(m,v):m).map(function(V,G){if(V.type==="none")return null;var Y=xh({display:"block",paddingTop:4,paddingBottom:4,color:V.color||"#000"},s),Q=V.formatter||d||hj,$=V.value,K=V.name,en=$,T=K;if(Q&&en!=null&&T!=null){var L=Q($,K,V,G,m);if(Array.isArray(L)){var Z=pj(L,2);en=Z[0],T=Z[1]}else en=L}return E.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:Y},Te(T)?E.createElement("span",{className:"recharts-tooltip-item-name"},T):null,Te(T)?E.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,E.createElement("span",{className:"recharts-tooltip-item-value"},en),E.createElement("span",{className:"recharts-tooltip-item-unit"},V.unit||""))});return E.createElement("ul",{className:"recharts-tooltip-item-list",style:R},F)}return null},O=xh({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),P=xh({margin:0},f),A=!En(I),N=A?I:"",w=jn("recharts-default-tooltip",b),H=jn("recharts-tooltip-label",B);A&&y&&m!==void 0&&m!==null&&(N=y(I,m));var k=S?{role:"status","aria-live":"assertive"}:{};return E.createElement("div",Z6({className:w,style:O},k),E.createElement("p",{className:H,style:P},E.isValidElement(N)?N:"".concat(N)),M())};function vu(n){"@babel/helpers - typeof";return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vu(n)}function vs(n,e,t){return e=gj(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gj(n){var e=bj(n,"string");return vu(e)=="symbol"?e:e+""}function bj(n,e){if(vu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(vu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var zp="recharts-tooltip-wrapper",yj={visibility:"hidden"};function Ij(n){var e=n.coordinate,t=n.translateX,r=n.translateY;return jn(zp,vs(vs(vs(vs({},"".concat(zp,"-right"),fn(t)&&e&&fn(e.x)&&t>=e.x),"".concat(zp,"-left"),fn(t)&&e&&fn(e.x)&&t<e.x),"".concat(zp,"-bottom"),fn(r)&&e&&fn(e.y)&&r>=e.y),"".concat(zp,"-top"),fn(r)&&e&&fn(e.y)&&r<e.y))}function YP(n){var e=n.allowEscapeViewBox,t=n.coordinate,r=n.key,a=n.offsetTopLeft,i=n.position,u=n.reverseDirection,s=n.tooltipDimension,c=n.viewBox,f=n.viewBoxDimension;if(i&&fn(i[r]))return i[r];var m=t[r]-s-a,d=t[r]+a;if(e[r])return u[r]?m:d;if(u[r]){var v=m,b=c[r];return v<b?Math.max(d,c[r]):Math.max(m,c[r])}var B=d+s,I=c[r]+f;return B>I?Math.max(m,c[r]):Math.max(d,c[r])}function Bj(n){var e=n.translateX,t=n.translateY,r=n.useTranslate3d;return{transform:r?"translate3d(".concat(e,"px, ").concat(t,"px, 0)"):"translate(".concat(e,"px, ").concat(t,"px)")}}function xj(n){var e=n.allowEscapeViewBox,t=n.coordinate,r=n.offsetTopLeft,a=n.position,i=n.reverseDirection,u=n.tooltipBox,s=n.useTranslate3d,c=n.viewBox,f,m,d;return u.height>0&&u.width>0&&t?(m=YP({allowEscapeViewBox:e,coordinate:t,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:u.width,viewBox:c,viewBoxDimension:c.width}),d=YP({allowEscapeViewBox:e,coordinate:t,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:u.height,viewBox:c,viewBoxDimension:c.height}),f=Bj({translateX:m,translateY:d,useTranslate3d:s})):f=yj,{cssProperties:f,cssClasses:Ij({translateX:m,translateY:d,coordinate:t})}}function gi(n){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gi(n)}function XP(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ZP(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?XP(Object(t),!0).forEach(function(r){nv(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):XP(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Pj(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function wj(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,WS(r.key),r)}}function Wj(n,e,t){return e&&wj(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Sj(n,e,t){return e=qs(e),Mj(n,wS()?Reflect.construct(e,t||[],qs(n).constructor):e.apply(n,t))}function Mj(n,e){if(e&&(gi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Aj(n)}function Aj(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wS(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wS=function(){return!!n})()}function qs(n){return qs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},qs(n)}function _j(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&J6(n,e)}function J6(n,e){return J6=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},J6(n,e)}function nv(n,e,t){return e=WS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function WS(n){var e=Oj(n,"string");return gi(e)=="symbol"?e:e+""}function Oj(n,e){if(gi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var JP=1,Hj=(function(n){function e(){var t;Pj(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=Sj(this,e,[].concat(a)),nv(t,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),nv(t,"handleKeyDown",function(u){if(u.key==="Escape"){var s,c,f,m;t.setState({dismissed:!0,dismissedAtCoordinate:{x:(s=(c=t.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&s!==void 0?s:0,y:(f=(m=t.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),t}return _j(e,n),Wj(e,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>JP||Math.abs(r.height-this.state.lastBoundingBox.height)>JP)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,u=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,b=a.offset,B=a.position,I=a.reverseDirection,y=a.useTranslate3d,W=a.viewBox,S=a.wrapperStyle,M=xj({allowEscapeViewBox:u,coordinate:m,offsetTopLeft:b,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:y,viewBox:W}),O=M.cssClasses,P=M.cssProperties,A=ZP(ZP({transition:v&&i?"transform ".concat(s,"ms ").concat(c):void 0},P),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},S);return E.createElement("div",{tabIndex:-1,className:O,style:A,ref:function(w){r.wrapperNode=w}},f)}}])})(U.PureComponent),Cj=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:Cj()};function bi(n){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bi(n)}function nw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ew(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nw(Object(t),!0).forEach(function(r){Tg(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):nw(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Nj(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Rj(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,MS(r.key),r)}}function kj(n,e,t){return e&&Rj(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ej(n,e,t){return e=zs(e),Tj(n,SS()?Reflect.construct(e,t||[],zs(n).constructor):e.apply(n,t))}function Tj(n,e){if(e&&(bi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Dj(n)}function Dj(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function SS(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SS=function(){return!!n})()}function zs(n){return zs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zs(n)}function jj(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&ev(n,e)}function ev(n,e){return ev=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ev(n,e)}function Tg(n,e,t){return e=MS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function MS(n){var e=$j(n,"string");return bi(e)=="symbol"?e:e+""}function $j(n,e){if(bi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function Lj(n){return n.dataKey}function Fj(n,e){return E.isValidElement(n)?E.cloneElement(n,e):typeof n=="function"?E.createElement(n,e):E.createElement(vj,e)}var Mt=(function(n){function e(){return Nj(this,e),Ej(this,e,arguments)}return jj(e,n),kj(e,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,u=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,b=a.offset,B=a.payload,I=a.payloadUniqBy,y=a.position,W=a.reverseDirection,S=a.useTranslate3d,M=a.viewBox,O=a.wrapperStyle,P=B??[];d&&P.length&&(P=gS(B.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,Lj));var A=P.length>0;return E.createElement(Hj,{allowEscapeViewBox:u,animationDuration:s,animationEasing:c,isAnimationActive:v,active:i,coordinate:m,hasPayload:A,offset:b,position:y,reverseDirection:W,useTranslate3d:S,viewBox:M,wrapperStyle:O},Fj(f,ew(ew({},this.props),{},{payload:P})))}}])})(U.PureComponent);Tg(Mt,"displayName","Tooltip");Tg(Mt,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Ph,tw;function qj(){if(tw)return Ph;tw=1;var n=Sr(),e=function(){return n.Date.now()};return Ph=e,Ph}var wh,rw;function zj(){if(rw)return wh;rw=1;var n=/\s/;function e(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}return wh=e,wh}var Wh,aw;function Uj(){if(aw)return Wh;aw=1;var n=zj(),e=/^\s+/;function t(r){return r&&r.slice(0,n(r)+1).replace(e,"")}return Wh=t,Wh}var Sh,ow;function AS(){if(ow)return Sh;ow=1;var n=Uj(),e=Ta(),t=Gi(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;function c(f){if(typeof f=="number")return f;if(t(f))return r;if(e(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=e(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=n(f);var d=i.test(f);return d||u.test(f)?s(f.slice(2),d?2:8):a.test(f)?r:+f}return Sh=c,Sh}var Mh,iw;function Vj(){if(iw)return Mh;iw=1;var n=Ta(),e=qj(),t=AS(),r="Expected a function",a=Math.max,i=Math.min;function u(s,c,f){var m,d,v,b,B,I,y=0,W=!1,S=!1,M=!0;if(typeof s!="function")throw new TypeError(r);c=t(c)||0,n(f)&&(W=!!f.leading,S="maxWait"in f,v=S?a(t(f.maxWait)||0,c):v,M="trailing"in f?!!f.trailing:M);function O(F){var V=m,G=d;return m=d=void 0,y=F,b=s.apply(G,V),b}function P(F){return y=F,B=setTimeout(w,c),W?O(F):b}function A(F){var V=F-I,G=F-y,Y=c-V;return S?i(Y,v-G):Y}function N(F){var V=F-I,G=F-y;return I===void 0||V>=c||V<0||S&&G>=v}function w(){var F=e();if(N(F))return H(F);B=setTimeout(w,A(F))}function H(F){return B=void 0,M&&m?O(F):(m=d=void 0,b)}function k(){B!==void 0&&clearTimeout(B),y=0,m=I=d=B=void 0}function D(){return B===void 0?b:H(e())}function R(){var F=e(),V=N(F);if(m=arguments,d=this,I=F,V){if(B===void 0)return P(I);if(S)return clearTimeout(B),B=setTimeout(w,c),O(I)}return B===void 0&&(B=setTimeout(w,c)),b}return R.cancel=k,R.flush=D,R}return Mh=u,Mh}var Ah,pw;function Gj(){if(pw)return Ah;pw=1;var n=Vj(),e=Ta(),t="Expected a function";function r(a,i,u){var s=!0,c=!0;if(typeof a!="function")throw new TypeError(t);return e(u)&&(s="leading"in u?!!u.leading:s,c="trailing"in u?!!u.trailing:c),n(a,i,{leading:s,maxWait:i,trailing:c})}return Ah=r,Ah}var Kj=Gj();const _S=Zn(Kj);function gu(n){"@babel/helpers - typeof";return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gu(n)}function uw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function gs(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?uw(Object(t),!0).forEach(function(r){Qj(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):uw(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Qj(n,e,t){return e=Yj(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Yj(n){var e=Xj(n,"string");return gu(e)=="symbol"?e:e+""}function Xj(n,e){if(gu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(gu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Zj(n,e){return t$(n)||e$(n,e)||n$(n,e)||Jj()}function Jj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n$(n,e){if(n){if(typeof n=="string")return sw(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sw(n,e)}}function sw(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function e$(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function t$(n){if(Array.isArray(n))return n}var Dg=U.forwardRef(function(n,e){var t=n.aspect,r=n.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=n.width,u=i===void 0?"100%":i,s=n.height,c=s===void 0?"100%":s,f=n.minWidth,m=f===void 0?0:f,d=n.minHeight,v=n.maxHeight,b=n.children,B=n.debounce,I=B===void 0?0:B,y=n.id,W=n.className,S=n.onResize,M=n.style,O=M===void 0?{}:M,P=U.useRef(null),A=U.useRef();A.current=S,U.useImperativeHandle(e,function(){return Object.defineProperty(P.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),P.current},configurable:!0})});var N=U.useState({containerWidth:a.width,containerHeight:a.height}),w=Zj(N,2),H=w[0],k=w[1],D=U.useCallback(function(F,V){k(function(G){var Y=Math.round(F),Q=Math.round(V);return G.containerWidth===Y&&G.containerHeight===Q?G:{containerWidth:Y,containerHeight:Q}})},[]);U.useEffect(function(){var F=function(K){var en,T=K[0].contentRect,L=T.width,Z=T.height;D(L,Z),(en=A.current)===null||en===void 0||en.call(A,L,Z)};I>0&&(F=_S(F,I,{trailing:!0,leading:!1}));var V=new ResizeObserver(F),G=P.current.getBoundingClientRect(),Y=G.width,Q=G.height;return D(Y,Q),V.observe(P.current),function(){V.disconnect()}},[D,I]);var R=U.useMemo(function(){var F=H.containerWidth,V=H.containerHeight;if(F<0||V<0)return null;sr(so(u)||so(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,u,c),sr(!t||t>0,"The aspect(%s) must be greater than zero.",t);var G=so(u)?F:u,Y=so(c)?V:c;t&&t>0&&(G?Y=G/t:Y&&(G=Y*t),v&&Y>v&&(Y=v)),sr(G>0||Y>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,G,Y,u,c,m,d,t);var Q=!Array.isArray(b)&&Ur(b.type).endsWith("Chart");return E.Children.map(b,function($){return E.isValidElement($)?U.cloneElement($,gs({width:G,height:Y},Q?{style:gs({height:"100%",width:"100%",maxHeight:Y,maxWidth:G},$.props.style)}:{})):$})},[t,b,c,v,d,m,H,u]);return E.createElement("div",{id:y?"".concat(y):void 0,className:jn("recharts-responsive-container",W),style:gs(gs({},O),{},{width:u,height:c,minWidth:m,minHeight:d,maxHeight:v}),ref:P},R)}),Xu=function(e){return null};Xu.displayName="Cell";function bu(n){"@babel/helpers - typeof";return bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bu(n)}function lw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function tv(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?lw(Object(t),!0).forEach(function(r){r$(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):lw(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function r$(n,e,t){return e=a$(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a$(n){var e=o$(n,"string");return bu(e)=="symbol"?e:e+""}function o$(n,e){if(bu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(bu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Jo={widthCache:{},cacheCount:0},i$=2e3,p$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},cw="recharts_measurement_span";function u$(n){var e=tv({},n);return Object.keys(e).forEach(function(t){e[t]||delete e[t]}),e}var ru=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e==null||Zr.isSsr)return{width:0,height:0};var r=u$(t),a=JSON.stringify({text:e,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(cw);i||(i=document.createElement("span"),i.setAttribute("id",cw),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var u=tv(tv({},p$),r);Object.assign(i.style,u),i.textContent="".concat(e);var s=i.getBoundingClientRect(),c={width:s.width,height:s.height};return Jo.widthCache[a]=c,++Jo.cacheCount>i$&&(Jo.cacheCount=0,Jo.widthCache={}),c}catch{return{width:0,height:0}}},s$=function(e){return{top:e.top+window.scrollY-document.documentElement.clientTop,left:e.left+window.scrollX-document.documentElement.clientLeft}};function yu(n){"@babel/helpers - typeof";return yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yu(n)}function Us(n,e){return d$(n)||f$(n,e)||c$(n,e)||l$()}function l$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c$(n,e){if(n){if(typeof n=="string")return fw(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fw(n,e)}}function fw(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function f$(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function d$(n){if(Array.isArray(n))return n}function m$(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function dw(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,v$(r.key),r)}}function h$(n,e,t){return e&&dw(n.prototype,e),t&&dw(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function v$(n){var e=g$(n,"string");return yu(e)=="symbol"?e:e+""}function g$(n,e){if(yu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(yu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var mw=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,hw=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,b$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,y$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,OS={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},I$=Object.keys(OS),ai="NaN";function B$(n,e){return n*OS[e]}var bs=(function(){function n(e,t){m$(this,n),this.num=e,this.unit=t,this.num=e,this.unit=t,Number.isNaN(e)&&(this.unit=""),t!==""&&!b$.test(t)&&(this.num=NaN,this.unit=""),I$.includes(t)&&(this.num=B$(e,t),this.unit="px")}return h$(n,[{key:"add",value:function(t){return this.unit!==t.unit?new n(NaN,""):new n(this.num+t.num,this.unit)}},{key:"subtract",value:function(t){return this.unit!==t.unit?new n(NaN,""):new n(this.num-t.num,this.unit)}},{key:"multiply",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new n(NaN,""):new n(this.num*t.num,this.unit||t.unit)}},{key:"divide",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new n(NaN,""):new n(this.num/t.num,this.unit||t.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(t){var r,a=(r=y$.exec(t))!==null&&r!==void 0?r:[],i=Us(a,3),u=i[1],s=i[2];return new n(parseFloat(u),s??"")}}])})();function HS(n){if(n.includes(ai))return ai;for(var e=n;e.includes("*")||e.includes("/");){var t,r=(t=mw.exec(e))!==null&&t!==void 0?t:[],a=Us(r,4),i=a[1],u=a[2],s=a[3],c=bs.parse(i??""),f=bs.parse(s??""),m=u==="*"?c.multiply(f):c.divide(f);if(m.isNaN())return ai;e=e.replace(mw,m.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){var d,v=(d=hw.exec(e))!==null&&d!==void 0?d:[],b=Us(v,4),B=b[1],I=b[2],y=b[3],W=bs.parse(B??""),S=bs.parse(y??""),M=I==="+"?W.add(S):W.subtract(S);if(M.isNaN())return ai;e=e.replace(hw,M.toString())}return e}var vw=/\(([^()]*)\)/;function x$(n){for(var e=n;e.includes("(");){var t=vw.exec(e),r=Us(t,2),a=r[1];e=e.replace(vw,HS(a))}return e}function P$(n){var e=n.replace(/\s+/g,"");return e=x$(e),e=HS(e),e}function w$(n){try{return P$(n)}catch{return ai}}function _h(n){var e=w$(n.slice(5,-1));return e===ai?"":e}var W$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],S$=["dx","dy","angle","className","breakAll"];function rv(){return rv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},rv.apply(this,arguments)}function gw(n,e){if(n==null)return{};var t=M$(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function M$(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function bw(n,e){return H$(n)||O$(n,e)||_$(n,e)||A$()}function A$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _$(n,e){if(n){if(typeof n=="string")return yw(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yw(n,e)}}function yw(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function O$(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function H$(n){if(Array.isArray(n))return n}var CS=/[ \f\n\r\t\v\u2028\u2029]+/,NS=function(e){var t=e.children,r=e.breakAll,a=e.style;try{var i=[];En(t)||(r?i=t.toString().split(""):i=t.toString().split(CS));var u=i.map(function(c){return{word:c,width:ru(c,a).width}}),s=r?0:ru(" ",a).width;return{wordsWithComputedWidth:u,spaceWidth:s}}catch{return null}},C$=function(e,t,r,a,i){var u=e.maxLines,s=e.children,c=e.style,f=e.breakAll,m=fn(u),d=s,v=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G.reduce(function(Y,Q){var $=Q.word,K=Q.width,en=Y[Y.length-1];if(en&&(a==null||i||en.width+K+r<Number(a)))en.words.push($),en.width+=K+r;else{var T={words:[$],width:K};Y.push(T)}return Y},[])},b=v(t),B=function(G){return G.reduce(function(Y,Q){return Y.width>Q.width?Y:Q})};if(!m)return b;for(var I="…",y=function(G){var Y=d.slice(0,G),Q=NS({breakAll:f,style:c,children:Y+I}).wordsWithComputedWidth,$=v(Q),K=$.length>u||B($).width>Number(a);return[K,$]},W=0,S=d.length-1,M=0,O;W<=S&&M<=d.length-1;){var P=Math.floor((W+S)/2),A=P-1,N=y(A),w=bw(N,2),H=w[0],k=w[1],D=y(P),R=bw(D,1),F=R[0];if(!H&&!F&&(W=P+1),H&&F&&(S=P-1),!H&&F){O=k;break}M++}return O||b},Iw=function(e){var t=En(e)?[]:e.toString().split(CS);return[{words:t}]},N$=function(e){var t=e.width,r=e.scaleToFit,a=e.children,i=e.style,u=e.breakAll,s=e.maxLines;if((t||r)&&!Zr.isSsr){var c,f,m=NS({breakAll:u,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;c=d,f=v}else return Iw(a);return C$({breakAll:u,children:a,maxLines:s,style:i},c,f,t,r)}return Iw(a)},Bw="#808080",go=function(e){var t=e.x,r=t===void 0?0:t,a=e.y,i=a===void 0?0:a,u=e.lineHeight,s=u===void 0?"1em":u,c=e.capHeight,f=c===void 0?"0.71em":c,m=e.scaleToFit,d=m===void 0?!1:m,v=e.textAnchor,b=v===void 0?"start":v,B=e.verticalAnchor,I=B===void 0?"end":B,y=e.fill,W=y===void 0?Bw:y,S=gw(e,W$),M=U.useMemo(function(){return N$({breakAll:S.breakAll,children:S.children,maxLines:S.maxLines,scaleToFit:d,style:S.style,width:S.width})},[S.breakAll,S.children,S.maxLines,d,S.style,S.width]),O=S.dx,P=S.dy,A=S.angle,N=S.className,w=S.breakAll,H=gw(S,S$);if(!Te(r)||!Te(i))return null;var k=r+(fn(O)?O:0),D=i+(fn(P)?P:0),R;switch(I){case"start":R=_h("calc(".concat(f,")"));break;case"middle":R=_h("calc(".concat((M.length-1)/2," * -").concat(s," + (").concat(f," / 2))"));break;default:R=_h("calc(".concat(M.length-1," * -").concat(s,")"));break}var F=[];if(d){var V=M[0].width,G=S.width;F.push("scale(".concat((fn(G)?G/V:1)/V,")"))}return A&&F.push("rotate(".concat(A,", ").concat(k,", ").concat(D,")")),F.length&&(H.transform=F.join(" ")),E.createElement("text",rv({},Hn(H,!0),{x:k,y:D,className:jn("recharts-text",N),textAnchor:b,fill:W.includes("url")?Bw:W}),M.map(function(Y,Q){var $=Y.words.join(w?"":" ");return E.createElement("tspan",{x:k,dy:Q===0?R:s,key:"".concat($,"-").concat(Q)},$)}))};function Ha(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function R$(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function jg(n){let e,t,r;n.length!==2?(e=Ha,t=(s,c)=>Ha(n(s),c),r=(s,c)=>n(s)-c):(e=n===Ha||n===R$?n:k$,t=n,r=n);function a(s,c,f=0,m=s.length){if(f<m){if(e(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<0?f=d+1:m=d}while(f<m)}return f}function i(s,c,f=0,m=s.length){if(f<m){if(e(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<=0?f=d+1:m=d}while(f<m)}return f}function u(s,c,f=0,m=s.length){const d=a(s,c,f,m-1);return d>f&&r(s[d-1],c)>-r(s[d],c)?d-1:d}return{left:a,center:u,right:i}}function k$(){return 0}function RS(n){return n===null?NaN:+n}function*E$(n,e){for(let t of n)t!=null&&(t=+t)>=t&&(yield t)}const T$=jg(Ha),Zu=T$.right;jg(RS).center;class xw extends Map{constructor(e,t=$$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,a]of e)this.set(r,a)}get(e){return super.get(Pw(this,e))}has(e){return super.has(Pw(this,e))}set(e,t){return super.set(D$(this,e),t)}delete(e){return super.delete(j$(this,e))}}function Pw({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function D$({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function j$({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function $$(n){return n!==null&&typeof n=="object"?n.valueOf():n}function L$(n=Ha){if(n===Ha)return kS;if(typeof n!="function")throw new TypeError("compare is not a function");return(e,t)=>{const r=n(e,t);return r||r===0?r:(n(t,t)===0)-(n(e,e)===0)}}function kS(n,e){return(n==null||!(n>=n))-(e==null||!(e>=e))||(n<e?-1:n>e?1:0)}const F$=Math.sqrt(50),q$=Math.sqrt(10),z$=Math.sqrt(2);function Vs(n,e,t){const r=(e-n)/Math.max(0,t),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),u=i>=F$?10:i>=q$?5:i>=z$?2:1;let s,c,f;return a<0?(f=Math.pow(10,-a)/u,s=Math.round(n*f),c=Math.round(e*f),s/f<n&&++s,c/f>e&&--c,f=-f):(f=Math.pow(10,a)*u,s=Math.round(n/f),c=Math.round(e/f),s*f<n&&++s,c*f>e&&--c),c<s&&.5<=t&&t<2?Vs(n,e,t*2):[s,c,f]}function av(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[a,i,u]=r?Vs(e,n,t):Vs(n,e,t);if(!(i>=a))return[];const s=i-a+1,c=new Array(s);if(r)if(u<0)for(let f=0;f<s;++f)c[f]=(i-f)/-u;else for(let f=0;f<s;++f)c[f]=(i-f)*u;else if(u<0)for(let f=0;f<s;++f)c[f]=(a+f)/-u;else for(let f=0;f<s;++f)c[f]=(a+f)*u;return c}function ov(n,e,t){return e=+e,n=+n,t=+t,Vs(n,e,t)[2]}function iv(n,e,t){e=+e,n=+n,t=+t;const r=e<n,a=r?ov(e,n,t):ov(n,e,t);return(r?-1:1)*(a<0?1/-a:a)}function ww(n,e){let t;for(const r of n)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);return t}function Ww(n,e){let t;for(const r of n)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);return t}function ES(n,e,t=0,r=1/0,a){if(e=Math.floor(e),t=Math.floor(Math.max(0,t)),r=Math.floor(Math.min(n.length-1,r)),!(t<=e&&e<=r))return n;for(a=a===void 0?kS:L$(a);r>t;){if(r-t>600){const c=r-t+1,f=e-t+1,m=Math.log(c),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(c-d)/c)*(f-c/2<0?-1:1),b=Math.max(t,Math.floor(e-f*d/c+v)),B=Math.min(r,Math.floor(e+(c-f)*d/c+v));ES(n,e,b,B,a)}const i=n[e];let u=t,s=r;for(Up(n,t,e),a(n[r],i)>0&&Up(n,t,r);u<s;){for(Up(n,u,s),++u,--s;a(n[u],i)<0;)++u;for(;a(n[s],i)>0;)--s}a(n[t],i)===0?Up(n,t,s):(++s,Up(n,s,r)),s<=e&&(t=s+1),e<=s&&(r=s-1)}return n}function Up(n,e,t){const r=n[e];n[e]=n[t],n[t]=r}function U$(n,e,t){if(n=Float64Array.from(E$(n)),!(!(r=n.length)||isNaN(e=+e))){if(e<=0||r<2)return Ww(n);if(e>=1)return ww(n);var r,a=(r-1)*e,i=Math.floor(a),u=ww(ES(n,i).subarray(0,i+1)),s=Ww(n.subarray(i+1));return u+(s-u)*(a-i)}}function V$(n,e,t=RS){if(!(!(r=n.length)||isNaN(e=+e))){if(e<=0||r<2)return+t(n[0],0,n);if(e>=1)return+t(n[r-1],r-1,n);var r,a=(r-1)*e,i=Math.floor(a),u=+t(n[i],i,n),s=+t(n[i+1],i+1,n);return u+(s-u)*(a-i)}}function G$(n,e,t){n=+n,e=+e,t=(a=arguments.length)<2?(e=n,n=0,1):a<3?1:+t;for(var r=-1,a=Math.max(0,Math.ceil((e-n)/t))|0,i=new Array(a);++r<a;)i[r]=n+r*t;return i}function Yt(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Jr(n,e){switch(arguments.length){case 0:break;case 1:{typeof n=="function"?this.interpolator(n):this.range(n);break}default:{this.domain(n),typeof e=="function"?this.interpolator(e):this.range(e);break}}return this}const pv=Symbol("implicit");function $g(){var n=new xw,e=[],t=[],r=pv;function a(i){let u=n.get(i);if(u===void 0){if(r!==pv)return r;n.set(i,u=e.push(i)-1)}return t[u%t.length]}return a.domain=function(i){if(!arguments.length)return e.slice();e=[],n=new xw;for(const u of i)n.has(u)||n.set(u,e.push(u)-1);return a},a.range=function(i){return arguments.length?(t=Array.from(i),a):t.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return $g(e,t).unknown(r)},Yt.apply(a,arguments),a}function Iu(){var n=$g().unknown(void 0),e=n.domain,t=n.range,r=0,a=1,i,u,s=!1,c=0,f=0,m=.5;delete n.unknown;function d(){var v=e().length,b=a<r,B=b?a:r,I=b?r:a;i=(I-B)/Math.max(1,v-c+f*2),s&&(i=Math.floor(i)),B+=(I-B-i*(v-c))*m,u=i*(1-c),s&&(B=Math.round(B),u=Math.round(u));var y=G$(v).map(function(W){return B+i*W});return t(b?y.reverse():y)}return n.domain=function(v){return arguments.length?(e(v),d()):e()},n.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},n.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,s=!0,d()},n.bandwidth=function(){return u},n.step=function(){return i},n.round=function(v){return arguments.length?(s=!!v,d()):s},n.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},n.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},n.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},n.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},n.copy=function(){return Iu(e(),[r,a]).round(s).paddingInner(c).paddingOuter(f).align(m)},Yt.apply(d(),arguments)}function TS(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return TS(e())},n}function au(){return TS(Iu.apply(null,arguments).paddingInner(1))}function Lg(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function DS(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function Ju(){}var Bu=.7,Gs=1/Bu,li="\\s*([+-]?\\d+)\\s*",xu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",K$=/^#([0-9a-f]{3,8})$/,Q$=new RegExp(`^rgb\\(${li},${li},${li}\\)$`),Y$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),X$=new RegExp(`^rgba\\(${li},${li},${li},${xu}\\)$`),Z$=new RegExp(`^rgba\\(${xr},${xr},${xr},${xu}\\)$`),J$=new RegExp(`^hsl\\(${xu},${xr},${xr}\\)$`),n8=new RegExp(`^hsla\\(${xu},${xr},${xr},${xu}\\)$`),Sw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Lg(Ju,Pu,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Mw,formatHex:Mw,formatHex8:e8,formatHsl:t8,formatRgb:Aw,toString:Aw});function Mw(){return this.rgb().formatHex()}function e8(){return this.rgb().formatHex8()}function t8(){return jS(this).formatHsl()}function Aw(){return this.rgb().formatRgb()}function Pu(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=K$.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?_w(e):t===3?new bt(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?ys(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?ys(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Q$.exec(n))?new bt(e[1],e[2],e[3],1):(e=Y$.exec(n))?new bt(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=X$.exec(n))?ys(e[1],e[2],e[3],e[4]):(e=Z$.exec(n))?ys(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=J$.exec(n))?Cw(e[1],e[2]/100,e[3]/100,1):(e=n8.exec(n))?Cw(e[1],e[2]/100,e[3]/100,e[4]):Sw.hasOwnProperty(n)?_w(Sw[n]):n==="transparent"?new bt(NaN,NaN,NaN,0):null}function _w(n){return new bt(n>>16&255,n>>8&255,n&255,1)}function ys(n,e,t,r){return r<=0&&(n=e=t=NaN),new bt(n,e,t,r)}function r8(n){return n instanceof Ju||(n=Pu(n)),n?(n=n.rgb(),new bt(n.r,n.g,n.b,n.opacity)):new bt}function uv(n,e,t,r){return arguments.length===1?r8(n):new bt(n,e,t,r??1)}function bt(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}Lg(bt,uv,DS(Ju,{brighter(n){return n=n==null?Gs:Math.pow(Gs,n),new bt(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Bu:Math.pow(Bu,n),new bt(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new bt(ho(this.r),ho(this.g),ho(this.b),Ks(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ow,formatHex:Ow,formatHex8:a8,formatRgb:Hw,toString:Hw}));function Ow(){return`#${lo(this.r)}${lo(this.g)}${lo(this.b)}`}function a8(){return`#${lo(this.r)}${lo(this.g)}${lo(this.b)}${lo((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hw(){const n=Ks(this.opacity);return`${n===1?"rgb(":"rgba("}${ho(this.r)}, ${ho(this.g)}, ${ho(this.b)}${n===1?")":`, ${n})`}`}function Ks(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ho(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function lo(n){return n=ho(n),(n<16?"0":"")+n.toString(16)}function Cw(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new ur(n,e,t,r)}function jS(n){if(n instanceof ur)return new ur(n.h,n.s,n.l,n.opacity);if(n instanceof Ju||(n=Pu(n)),!n)return new ur;if(n instanceof ur)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,a=Math.min(e,t,r),i=Math.max(e,t,r),u=NaN,s=i-a,c=(i+a)/2;return s?(e===i?u=(t-r)/s+(t<r)*6:t===i?u=(r-e)/s+2:u=(e-t)/s+4,s/=c<.5?i+a:2-i-a,u*=60):s=c>0&&c<1?0:u,new ur(u,s,c,n.opacity)}function o8(n,e,t,r){return arguments.length===1?jS(n):new ur(n,e,t,r??1)}function ur(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}Lg(ur,o8,DS(Ju,{brighter(n){return n=n==null?Gs:Math.pow(Gs,n),new ur(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Bu:Math.pow(Bu,n),new ur(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,a=2*t-r;return new bt(Oh(n>=240?n-240:n+120,a,r),Oh(n,a,r),Oh(n<120?n+240:n-120,a,r),this.opacity)},clamp(){return new ur(Nw(this.h),Is(this.s),Is(this.l),Ks(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ks(this.opacity);return`${n===1?"hsl(":"hsla("}${Nw(this.h)}, ${Is(this.s)*100}%, ${Is(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Nw(n){return n=(n||0)%360,n<0?n+360:n}function Is(n){return Math.max(0,Math.min(1,n||0))}function Oh(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const Fg=n=>()=>n;function i8(n,e){return function(t){return n+t*e}}function p8(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function u8(n){return(n=+n)==1?$S:function(e,t){return t-e?p8(e,t,n):Fg(isNaN(e)?t:e)}}function $S(n,e){var t=e-n;return t?i8(n,t):Fg(isNaN(n)?e:n)}const Rw=(function n(e){var t=u8(e);function r(a,i){var u=t((a=uv(a)).r,(i=uv(i)).r),s=t(a.g,i.g),c=t(a.b,i.b),f=$S(a.opacity,i.opacity);return function(m){return a.r=u(m),a.g=s(m),a.b=c(m),a.opacity=f(m),a+""}}return r.gamma=n,r})(1);function s8(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),a;return function(i){for(a=0;a<t;++a)r[a]=n[a]*(1-i)+e[a]*i;return r}}function l8(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function c8(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,a=new Array(r),i=new Array(t),u;for(u=0;u<r;++u)a[u]=Xi(n[u],e[u]);for(;u<t;++u)i[u]=e[u];return function(s){for(u=0;u<r;++u)i[u]=a[u](s);return i}}function f8(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function Qs(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function d8(n,e){var t={},r={},a;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(a in e)a in n?t[a]=Xi(n[a],e[a]):r[a]=e[a];return function(i){for(a in t)r[a]=t[a](i);return r}}var sv=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Hh=new RegExp(sv.source,"g");function m8(n){return function(){return n}}function h8(n){return function(e){return n(e)+""}}function v8(n,e){var t=sv.lastIndex=Hh.lastIndex=0,r,a,i,u=-1,s=[],c=[];for(n=n+"",e=e+"";(r=sv.exec(n))&&(a=Hh.exec(e));)(i=a.index)>t&&(i=e.slice(t,i),s[u]?s[u]+=i:s[++u]=i),(r=r[0])===(a=a[0])?s[u]?s[u]+=a:s[++u]=a:(s[++u]=null,c.push({i:u,x:Qs(r,a)})),t=Hh.lastIndex;return t<e.length&&(i=e.slice(t),s[u]?s[u]+=i:s[++u]=i),s.length<2?c[0]?h8(c[0].x):m8(e):(e=c.length,function(f){for(var m=0,d;m<e;++m)s[(d=c[m]).i]=d.x(f);return s.join("")})}function Xi(n,e){var t=typeof e,r;return e==null||t==="boolean"?Fg(e):(t==="number"?Qs:t==="string"?(r=Pu(e))?(e=r,Rw):v8:e instanceof Pu?Rw:e instanceof Date?f8:l8(e)?s8:Array.isArray(e)?c8:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?d8:Qs)(n,e)}function qg(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function g8(n,e){e===void 0&&(e=n,n=Xi);for(var t=0,r=e.length-1,a=e[0],i=new Array(r<0?0:r);t<r;)i[t]=n(a,a=e[++t]);return function(u){var s=Math.max(0,Math.min(r-1,Math.floor(u*=r)));return i[s](u-s)}}function b8(n){return function(){return n}}function Ys(n){return+n}var kw=[0,1];function pt(n){return n}function lv(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:b8(isNaN(e)?NaN:.5)}function y8(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function I8(n,e,t){var r=n[0],a=n[1],i=e[0],u=e[1];return a<r?(r=lv(a,r),i=t(u,i)):(r=lv(r,a),i=t(i,u)),function(s){return i(r(s))}}function B8(n,e,t){var r=Math.min(n.length,e.length)-1,a=new Array(r),i=new Array(r),u=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++u<r;)a[u]=lv(n[u],n[u+1]),i[u]=t(e[u],e[u+1]);return function(s){var c=Zu(n,s,1,r)-1;return i[c](a[c](s))}}function n0(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function n2(){var n=kw,e=kw,t=Xi,r,a,i,u=pt,s,c,f;function m(){var v=Math.min(n.length,e.length);return u!==pt&&(u=y8(n[0],n[v-1])),s=v>2?B8:I8,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=s(n.map(r),e,t)))(r(u(v)))}return d.invert=function(v){return u(a((f||(f=s(e,n.map(r),Qs)))(v)))},d.domain=function(v){return arguments.length?(n=Array.from(v,Ys),m()):n.slice()},d.range=function(v){return arguments.length?(e=Array.from(v),m()):e.slice()},d.rangeRound=function(v){return e=Array.from(v),t=qg,m()},d.clamp=function(v){return arguments.length?(u=v?!0:pt,m()):u!==pt},d.interpolate=function(v){return arguments.length?(t=v,m()):t},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,b){return r=v,a=b,m()}}function zg(){return n2()(pt,pt)}function x8(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Xs(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function yi(n){return n=Xs(Math.abs(n)),n?n[1]:NaN}function P8(n,e){return function(t,r){for(var a=t.length,i=[],u=0,s=n[0],c=0;a>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),i.push(t.substring(a-=s,a+s)),!((c+=s+1)>r));)s=n[u=(u+1)%n.length];return i.reverse().join(e)}}function w8(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var W8=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function wu(n){if(!(e=W8.exec(n)))throw new Error("invalid format: "+n);var e;return new Ug({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}wu.prototype=Ug.prototype;function Ug(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Ug.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function S8(n){n:for(var e=n.length,t=1,r=-1,a;t<e;++t)switch(n[t]){case".":r=a=t;break;case"0":r===0&&(r=t),a=t;break;default:if(!+n[t])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(a+1):n}var Zs;function M8(n,e){var t=Xs(n,e);if(!t)return Zs=void 0,n.toPrecision(e);var r=t[0],a=t[1],i=a-(Zs=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,u=r.length;return i===u?r:i>u?r+new Array(i-u+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Xs(n,Math.max(0,e+i-1))[0]}function Ew(n,e){var t=Xs(n,e);if(!t)return n+"";var r=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const Tw={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:x8,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Ew(n*100,e),r:Ew,s:M8,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Dw(n){return n}var jw=Array.prototype.map,$w=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function A8(n){var e=n.grouping===void 0||n.thousands===void 0?Dw:P8(jw.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",a=n.decimal===void 0?".":n.decimal+"",i=n.numerals===void 0?Dw:w8(jw.call(n.numerals,String)),u=n.percent===void 0?"%":n.percent+"",s=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function f(d,v){d=wu(d);var b=d.fill,B=d.align,I=d.sign,y=d.symbol,W=d.zero,S=d.width,M=d.comma,O=d.precision,P=d.trim,A=d.type;A==="n"?(M=!0,A="g"):Tw[A]||(O===void 0&&(O=12),P=!0,A="g"),(W||b==="0"&&B==="=")&&(W=!0,b="0",B="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(y==="$"?t:y==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),w=(y==="$"?r:/[%p]/.test(A)?u:"")+(v&&v.suffix!==void 0?v.suffix:""),H=Tw[A],k=/[defgprs%]/.test(A);O=O===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function D(R){var F=N,V=w,G,Y,Q;if(A==="c")V=H(R)+V,R="";else{R=+R;var $=R<0||1/R<0;if(R=isNaN(R)?c:H(Math.abs(R),O),P&&(R=S8(R)),$&&+R==0&&I!=="+"&&($=!1),F=($?I==="("?I:s:I==="-"||I==="("?"":I)+F,V=(A==="s"&&!isNaN(R)&&Zs!==void 0?$w[8+Zs/3]:"")+V+($&&I==="("?")":""),k){for(G=-1,Y=R.length;++G<Y;)if(Q=R.charCodeAt(G),48>Q||Q>57){V=(Q===46?a+R.slice(G+1):R.slice(G))+V,R=R.slice(0,G);break}}}M&&!W&&(R=e(R,1/0));var K=F.length+R.length+V.length,en=K<S?new Array(S-K+1).join(b):"";switch(M&&W&&(R=e(en+R,en.length?S-V.length:1/0),en=""),B){case"<":R=F+R+V+en;break;case"=":R=F+en+R+V;break;case"^":R=en.slice(0,K=en.length>>1)+F+R+V+en.slice(K);break;default:R=en+F+R+V;break}return i(R)}return D.toString=function(){return d+""},D}function m(d,v){var b=Math.max(-8,Math.min(8,Math.floor(yi(v)/3)))*3,B=Math.pow(10,-b),I=f((d=wu(d),d.type="f",d),{suffix:$w[8+b/3]});return function(y){return I(B*y)}}return{format:f,formatPrefix:m}}var Bs,Vg,LS;_8({thousands:",",grouping:[3],currency:["$",""]});function _8(n){return Bs=A8(n),Vg=Bs.format,LS=Bs.formatPrefix,Bs}function O8(n){return Math.max(0,-yi(Math.abs(n)))}function H8(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(yi(e)/3)))*3-yi(Math.abs(n)))}function C8(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,yi(e)-yi(n))+1}function FS(n,e,t,r){var a=iv(n,e,t),i;switch(r=wu(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(i=H8(a,u))&&(r.precision=i),LS(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=C8(a,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=O8(a))&&(r.precision=i-(r.type==="%")*2);break}}return Vg(r)}function ja(n){var e=n.domain;return n.ticks=function(t){var r=e();return av(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var a=e();return FS(a[0],a[a.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),a=0,i=r.length-1,u=r[a],s=r[i],c,f,m=10;for(s<u&&(f=u,u=s,s=f,f=a,a=i,i=f);m-- >0;){if(f=ov(u,s,t),f===c)return r[a]=u,r[i]=s,e(r);if(f>0)u=Math.floor(u/f)*f,s=Math.ceil(s/f)*f;else if(f<0)u=Math.ceil(u*f)/f,s=Math.floor(s*f)/f;else break;c=f}return n},n}function Js(){var n=zg();return n.copy=function(){return n0(n,Js())},Yt.apply(n,arguments),ja(n)}function qS(n){var e;function t(r){return r==null||isNaN(r=+r)?e:r}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(n=Array.from(r,Ys),t):n.slice()},t.unknown=function(r){return arguments.length?(e=r,t):e},t.copy=function(){return qS(n).unknown(e)},n=arguments.length?Array.from(n,Ys):[0,1],ja(t)}function zS(n,e){n=n.slice();var t=0,r=n.length-1,a=n[t],i=n[r],u;return i<a&&(u=t,t=r,r=u,u=a,a=i,i=u),n[t]=e.floor(a),n[r]=e.ceil(i),n}function Lw(n){return Math.log(n)}function Fw(n){return Math.exp(n)}function N8(n){return-Math.log(-n)}function R8(n){return-Math.exp(-n)}function k8(n){return isFinite(n)?+("1e"+n):n<0?0:n}function E8(n){return n===10?k8:n===Math.E?Math.exp:e=>Math.pow(n,e)}function T8(n){return n===Math.E?Math.log:n===10&&Math.log10||n===2&&Math.log2||(n=Math.log(n),e=>Math.log(e)/n)}function qw(n){return(e,t)=>-n(-e,t)}function Gg(n){const e=n(Lw,Fw),t=e.domain;let r=10,a,i;function u(){return a=T8(r),i=E8(r),t()[0]<0?(a=qw(a),i=qw(i),n(N8,R8)):n(Lw,Fw),e}return e.base=function(s){return arguments.length?(r=+s,u()):r},e.domain=function(s){return arguments.length?(t(s),u()):t()},e.ticks=s=>{const c=t();let f=c[0],m=c[c.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),b=a(m),B,I;const y=s==null?10:+s;let W=[];if(!(r%1)&&b-v<y){if(v=Math.floor(v),b=Math.ceil(b),f>0){for(;v<=b;++v)for(B=1;B<r;++B)if(I=v<0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}}else for(;v<=b;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}W.length*2<y&&(W=av(f,m,y))}else W=av(v,b,Math.min(b-v,y)).map(i);return d?W.reverse():W},e.tickFormat=(s,c)=>{if(s==null&&(s=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=wu(c)).precision==null&&(c.trim=!0),c=Vg(c)),s===1/0)return c;const f=Math.max(1,r*s/e.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?c(m):""}},e.nice=()=>t(zS(t(),{floor:s=>i(Math.floor(a(s))),ceil:s=>i(Math.ceil(a(s)))})),e}function US(){const n=Gg(n2()).domain([1,10]);return n.copy=()=>n0(n,US()).base(n.base()),Yt.apply(n,arguments),n}function zw(n){return function(e){return Math.sign(e)*Math.log1p(Math.abs(e/n))}}function Uw(n){return function(e){return Math.sign(e)*Math.expm1(Math.abs(e))*n}}function Kg(n){var e=1,t=n(zw(e),Uw(e));return t.constant=function(r){return arguments.length?n(zw(e=+r),Uw(e)):e},ja(t)}function VS(){var n=Kg(n2());return n.copy=function(){return n0(n,VS()).constant(n.constant())},Yt.apply(n,arguments)}function Vw(n){return function(e){return e<0?-Math.pow(-e,n):Math.pow(e,n)}}function D8(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function j8(n){return n<0?-n*n:n*n}function Qg(n){var e=n(pt,pt),t=1;function r(){return t===1?n(pt,pt):t===.5?n(D8,j8):n(Vw(t),Vw(1/t))}return e.exponent=function(a){return arguments.length?(t=+a,r()):t},ja(e)}function Yg(){var n=Qg(n2());return n.copy=function(){return n0(n,Yg()).exponent(n.exponent())},Yt.apply(n,arguments),n}function $8(){return Yg.apply(null,arguments).exponent(.5)}function Gw(n){return Math.sign(n)*n*n}function L8(n){return Math.sign(n)*Math.sqrt(Math.abs(n))}function GS(){var n=zg(),e=[0,1],t=!1,r;function a(i){var u=L8(n(i));return isNaN(u)?r:t?Math.round(u):u}return a.invert=function(i){return n.invert(Gw(i))},a.domain=function(i){return arguments.length?(n.domain(i),a):n.domain()},a.range=function(i){return arguments.length?(n.range((e=Array.from(i,Ys)).map(Gw)),a):e.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(t=!!i,a):t},a.clamp=function(i){return arguments.length?(n.clamp(i),a):n.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return GS(n.domain(),e).round(t).clamp(n.clamp()).unknown(r)},Yt.apply(a,arguments),ja(a)}function KS(){var n=[],e=[],t=[],r;function a(){var u=0,s=Math.max(1,e.length);for(t=new Array(s-1);++u<s;)t[u-1]=V$(n,u/s);return i}function i(u){return u==null||isNaN(u=+u)?r:e[Zu(t,u)]}return i.invertExtent=function(u){var s=e.indexOf(u);return s<0?[NaN,NaN]:[s>0?t[s-1]:n[0],s<t.length?t[s]:n[n.length-1]]},i.domain=function(u){if(!arguments.length)return n.slice();n=[];for(let s of u)s!=null&&!isNaN(s=+s)&&n.push(s);return n.sort(Ha),a()},i.range=function(u){return arguments.length?(e=Array.from(u),a()):e.slice()},i.unknown=function(u){return arguments.length?(r=u,i):r},i.quantiles=function(){return t.slice()},i.copy=function(){return KS().domain(n).range(e).unknown(r)},Yt.apply(i,arguments)}function QS(){var n=0,e=1,t=1,r=[.5],a=[0,1],i;function u(c){return c!=null&&c<=c?a[Zu(r,c,0,t)]:i}function s(){var c=-1;for(r=new Array(t);++c<t;)r[c]=((c+1)*e-(c-t)*n)/(t+1);return u}return u.domain=function(c){return arguments.length?([n,e]=c,n=+n,e=+e,s()):[n,e]},u.range=function(c){return arguments.length?(t=(a=Array.from(c)).length-1,s()):a.slice()},u.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[n,r[0]]:f>=t?[r[t-1],e]:[r[f-1],r[f]]},u.unknown=function(c){return arguments.length&&(i=c),u},u.thresholds=function(){return r.slice()},u.copy=function(){return QS().domain([n,e]).range(a).unknown(i)},Yt.apply(ja(u),arguments)}function YS(){var n=[.5],e=[0,1],t,r=1;function a(i){return i!=null&&i<=i?e[Zu(n,i,0,r)]:t}return a.domain=function(i){return arguments.length?(n=Array.from(i),r=Math.min(n.length,e.length-1),a):n.slice()},a.range=function(i){return arguments.length?(e=Array.from(i),r=Math.min(n.length,e.length-1),a):e.slice()},a.invertExtent=function(i){var u=e.indexOf(i);return[n[u-1],n[u]]},a.unknown=function(i){return arguments.length?(t=i,a):t},a.copy=function(){return YS().domain(n).range(e).unknown(t)},Yt.apply(a,arguments)}const Ch=new Date,Nh=new Date;function De(n,e,t,r){function a(i){return n(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(n(i=new Date(+i)),i),a.ceil=i=>(n(i=new Date(i-1)),e(i,1),n(i),i),a.round=i=>{const u=a(i),s=a.ceil(i);return i-u<s-i?u:s},a.offset=(i,u)=>(e(i=new Date(+i),u==null?1:Math.floor(u)),i),a.range=(i,u,s)=>{const c=[];if(i=a.ceil(i),s=s==null?1:Math.floor(s),!(i<u)||!(s>0))return c;let f;do c.push(f=new Date(+i)),e(i,s),n(i);while(f<i&&i<u);return c},a.filter=i=>De(u=>{if(u>=u)for(;n(u),!i(u);)u.setTime(u-1)},(u,s)=>{if(u>=u)if(s<0)for(;++s<=0;)for(;e(u,-1),!i(u););else for(;--s>=0;)for(;e(u,1),!i(u););}),t&&(a.count=(i,u)=>(Ch.setTime(+i),Nh.setTime(+u),n(Ch),n(Nh),Math.floor(t(Ch,Nh))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?u=>r(u)%i===0:u=>a.count(0,u)%i===0):a)),a}const nl=De(()=>{},(n,e)=>{n.setTime(+n+e)},(n,e)=>e-n);nl.every=n=>(n=Math.floor(n),!isFinite(n)||!(n>0)?null:n>1?De(e=>{e.setTime(Math.floor(e/n)*n)},(e,t)=>{e.setTime(+e+t*n)},(e,t)=>(t-e)/n):nl);nl.range;const $r=1e3,Gt=$r*60,Lr=Gt*60,Gr=Lr*24,Xg=Gr*7,Kw=Gr*30,Rh=Gr*365,co=De(n=>{n.setTime(n-n.getMilliseconds())},(n,e)=>{n.setTime(+n+e*$r)},(n,e)=>(e-n)/$r,n=>n.getUTCSeconds());co.range;const Zg=De(n=>{n.setTime(n-n.getMilliseconds()-n.getSeconds()*$r)},(n,e)=>{n.setTime(+n+e*Gt)},(n,e)=>(e-n)/Gt,n=>n.getMinutes());Zg.range;const Jg=De(n=>{n.setUTCSeconds(0,0)},(n,e)=>{n.setTime(+n+e*Gt)},(n,e)=>(e-n)/Gt,n=>n.getUTCMinutes());Jg.range;const nb=De(n=>{n.setTime(n-n.getMilliseconds()-n.getSeconds()*$r-n.getMinutes()*Gt)},(n,e)=>{n.setTime(+n+e*Lr)},(n,e)=>(e-n)/Lr,n=>n.getHours());nb.range;const eb=De(n=>{n.setUTCMinutes(0,0,0)},(n,e)=>{n.setTime(+n+e*Lr)},(n,e)=>(e-n)/Lr,n=>n.getUTCHours());eb.range;const e0=De(n=>n.setHours(0,0,0,0),(n,e)=>n.setDate(n.getDate()+e),(n,e)=>(e-n-(e.getTimezoneOffset()-n.getTimezoneOffset())*Gt)/Gr,n=>n.getDate()-1);e0.range;const e2=De(n=>{n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCDate(n.getUTCDate()+e)},(n,e)=>(e-n)/Gr,n=>n.getUTCDate()-1);e2.range;const XS=De(n=>{n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCDate(n.getUTCDate()+e)},(n,e)=>(e-n)/Gr,n=>Math.floor(n/Gr));XS.range;function xo(n){return De(e=>{e.setDate(e.getDate()-(e.getDay()+7-n)%7),e.setHours(0,0,0,0)},(e,t)=>{e.setDate(e.getDate()+t*7)},(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Gt)/Xg)}const t2=xo(0),el=xo(1),F8=xo(2),q8=xo(3),Ii=xo(4),z8=xo(5),U8=xo(6);t2.range;el.range;F8.range;q8.range;Ii.range;z8.range;U8.range;function Po(n){return De(e=>{e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-n)%7),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t*7)},(e,t)=>(t-e)/Xg)}const r2=Po(0),tl=Po(1),V8=Po(2),G8=Po(3),Bi=Po(4),K8=Po(5),Q8=Po(6);r2.range;tl.range;V8.range;G8.range;Bi.range;K8.range;Q8.range;const tb=De(n=>{n.setDate(1),n.setHours(0,0,0,0)},(n,e)=>{n.setMonth(n.getMonth()+e)},(n,e)=>e.getMonth()-n.getMonth()+(e.getFullYear()-n.getFullYear())*12,n=>n.getMonth());tb.range;const rb=De(n=>{n.setUTCDate(1),n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCMonth(n.getUTCMonth()+e)},(n,e)=>e.getUTCMonth()-n.getUTCMonth()+(e.getUTCFullYear()-n.getUTCFullYear())*12,n=>n.getUTCMonth());rb.range;const Kr=De(n=>{n.setMonth(0,1),n.setHours(0,0,0,0)},(n,e)=>{n.setFullYear(n.getFullYear()+e)},(n,e)=>e.getFullYear()-n.getFullYear(),n=>n.getFullYear());Kr.every=n=>!isFinite(n=Math.floor(n))||!(n>0)?null:De(e=>{e.setFullYear(Math.floor(e.getFullYear()/n)*n),e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t*n)});Kr.range;const Qr=De(n=>{n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCFullYear(n.getUTCFullYear()+e)},(n,e)=>e.getUTCFullYear()-n.getUTCFullYear(),n=>n.getUTCFullYear());Qr.every=n=>!isFinite(n=Math.floor(n))||!(n>0)?null:De(e=>{e.setUTCFullYear(Math.floor(e.getUTCFullYear()/n)*n),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t*n)});Qr.range;function ZS(n,e,t,r,a,i){const u=[[co,1,$r],[co,5,5*$r],[co,15,15*$r],[co,30,30*$r],[i,1,Gt],[i,5,5*Gt],[i,15,15*Gt],[i,30,30*Gt],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[t,1,Xg],[e,1,Kw],[e,3,3*Kw],[n,1,Rh]];function s(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const b=d&&typeof d.range=="function"?d:c(f,m,d),B=b?b.range(f,+m+1):[];return v?B.reverse():B}function c(f,m,d){const v=Math.abs(m-f)/d,b=jg(([,,y])=>y).right(u,v);if(b===u.length)return n.every(iv(f/Rh,m/Rh,d));if(b===0)return nl.every(Math.max(iv(f,m,d),1));const[B,I]=u[v/u[b-1][2]<u[b][2]/v?b-1:b];return B.every(I)}return[s,c]}const[Y8,X8]=ZS(Qr,rb,r2,XS,eb,Jg),[Z8,J8]=ZS(Kr,tb,t2,e0,nb,Zg);function kh(n){if(0<=n.y&&n.y<100){var e=new Date(-1,n.m,n.d,n.H,n.M,n.S,n.L);return e.setFullYear(n.y),e}return new Date(n.y,n.m,n.d,n.H,n.M,n.S,n.L)}function Eh(n){if(0<=n.y&&n.y<100){var e=new Date(Date.UTC(-1,n.m,n.d,n.H,n.M,n.S,n.L));return e.setUTCFullYear(n.y),e}return new Date(Date.UTC(n.y,n.m,n.d,n.H,n.M,n.S,n.L))}function Vp(n,e,t){return{y:n,m:e,d:t,H:0,M:0,S:0,L:0}}function nL(n){var e=n.dateTime,t=n.date,r=n.time,a=n.periods,i=n.days,u=n.shortDays,s=n.months,c=n.shortMonths,f=Gp(a),m=Kp(a),d=Gp(i),v=Kp(i),b=Gp(u),B=Kp(u),I=Gp(s),y=Kp(s),W=Gp(c),S=Kp(c),M={a:Q,A:$,b:K,B:en,c:null,d:nW,e:nW,f:PL,g:NL,G:kL,H:IL,I:BL,j:xL,L:JS,m:wL,M:WL,p:T,q:L,Q:rW,s:aW,S:SL,u:ML,U:AL,V:_L,w:OL,W:HL,x:null,X:null,y:CL,Y:RL,Z:EL,"%":tW},O={a:Z,A:ln,b:vn,B:Bn,c:null,d:eW,e:eW,f:$L,g:YL,G:ZL,H:TL,I:DL,j:jL,L:eM,m:LL,M:FL,p:xn,q:mn,Q:rW,s:aW,S:qL,u:zL,U:UL,V:VL,w:GL,W:KL,x:null,X:null,y:QL,Y:XL,Z:JL,"%":tW},P={a:k,A:D,b:R,B:F,c:V,d:Zw,e:Zw,f:vL,g:Xw,G:Yw,H:Jw,I:Jw,j:fL,L:hL,m:cL,M:dL,p:H,q:lL,Q:bL,s:yL,S:mL,u:oL,U:iL,V:pL,w:aL,W:uL,x:G,X:Y,y:Xw,Y:Yw,Z:sL,"%":gL};M.x=A(t,M),M.X=A(r,M),M.c=A(e,M),O.x=A(t,O),O.X=A(r,O),O.c=A(e,O);function A(an,rn){return function(pn){var J=[],bn=-1,hn=0,yn=an.length,gn,wn,$n;for(pn instanceof Date||(pn=new Date(+pn));++bn<yn;)an.charCodeAt(bn)===37&&(J.push(an.slice(hn,bn)),(wn=Qw[gn=an.charAt(++bn)])!=null?gn=an.charAt(++bn):wn=gn==="e"?" ":"0",($n=rn[gn])&&(gn=$n(pn,wn)),J.push(gn),hn=bn+1);return J.push(an.slice(hn,bn)),J.join("")}}function N(an,rn){return function(pn){var J=Vp(1900,void 0,1),bn=w(J,an,pn+="",0),hn,yn;if(bn!=pn.length)return null;if("Q"in J)return new Date(J.Q);if("s"in J)return new Date(J.s*1e3+("L"in J?J.L:0));if(rn&&!("Z"in J)&&(J.Z=0),"p"in J&&(J.H=J.H%12+J.p*12),J.m===void 0&&(J.m="q"in J?J.q:0),"V"in J){if(J.V<1||J.V>53)return null;"w"in J||(J.w=1),"Z"in J?(hn=Eh(Vp(J.y,0,1)),yn=hn.getUTCDay(),hn=yn>4||yn===0?tl.ceil(hn):tl(hn),hn=e2.offset(hn,(J.V-1)*7),J.y=hn.getUTCFullYear(),J.m=hn.getUTCMonth(),J.d=hn.getUTCDate()+(J.w+6)%7):(hn=kh(Vp(J.y,0,1)),yn=hn.getDay(),hn=yn>4||yn===0?el.ceil(hn):el(hn),hn=e0.offset(hn,(J.V-1)*7),J.y=hn.getFullYear(),J.m=hn.getMonth(),J.d=hn.getDate()+(J.w+6)%7)}else("W"in J||"U"in J)&&("w"in J||(J.w="u"in J?J.u%7:"W"in J?1:0),yn="Z"in J?Eh(Vp(J.y,0,1)).getUTCDay():kh(Vp(J.y,0,1)).getDay(),J.m=0,J.d="W"in J?(J.w+6)%7+J.W*7-(yn+5)%7:J.w+J.U*7-(yn+6)%7);return"Z"in J?(J.H+=J.Z/100|0,J.M+=J.Z%100,Eh(J)):kh(J)}}function w(an,rn,pn,J){for(var bn=0,hn=rn.length,yn=pn.length,gn,wn;bn<hn;){if(J>=yn)return-1;if(gn=rn.charCodeAt(bn++),gn===37){if(gn=rn.charAt(bn++),wn=P[gn in Qw?rn.charAt(bn++):gn],!wn||(J=wn(an,pn,J))<0)return-1}else if(gn!=pn.charCodeAt(J++))return-1}return J}function H(an,rn,pn){var J=f.exec(rn.slice(pn));return J?(an.p=m.get(J[0].toLowerCase()),pn+J[0].length):-1}function k(an,rn,pn){var J=b.exec(rn.slice(pn));return J?(an.w=B.get(J[0].toLowerCase()),pn+J[0].length):-1}function D(an,rn,pn){var J=d.exec(rn.slice(pn));return J?(an.w=v.get(J[0].toLowerCase()),pn+J[0].length):-1}function R(an,rn,pn){var J=W.exec(rn.slice(pn));return J?(an.m=S.get(J[0].toLowerCase()),pn+J[0].length):-1}function F(an,rn,pn){var J=I.exec(rn.slice(pn));return J?(an.m=y.get(J[0].toLowerCase()),pn+J[0].length):-1}function V(an,rn,pn){return w(an,e,rn,pn)}function G(an,rn,pn){return w(an,t,rn,pn)}function Y(an,rn,pn){return w(an,r,rn,pn)}function Q(an){return u[an.getDay()]}function $(an){return i[an.getDay()]}function K(an){return c[an.getMonth()]}function en(an){return s[an.getMonth()]}function T(an){return a[+(an.getHours()>=12)]}function L(an){return 1+~~(an.getMonth()/3)}function Z(an){return u[an.getUTCDay()]}function ln(an){return i[an.getUTCDay()]}function vn(an){return c[an.getUTCMonth()]}function Bn(an){return s[an.getUTCMonth()]}function xn(an){return a[+(an.getUTCHours()>=12)]}function mn(an){return 1+~~(an.getUTCMonth()/3)}return{format:function(an){var rn=A(an+="",M);return rn.toString=function(){return an},rn},parse:function(an){var rn=N(an+="",!1);return rn.toString=function(){return an},rn},utcFormat:function(an){var rn=A(an+="",O);return rn.toString=function(){return an},rn},utcParse:function(an){var rn=N(an+="",!0);return rn.toString=function(){return an},rn}}}var Qw={"-":"",_:" ",0:"0"},Ue=/^\s*\d+/,eL=/^%/,tL=/[\\^$*+?|[\]().{}]/g;function Gn(n,e,t){var r=n<0?"-":"",a=(r?-n:n)+"",i=a.length;return r+(i<t?new Array(t-i+1).join(e)+a:a)}function rL(n){return n.replace(tL,"\\$&")}function Gp(n){return new RegExp("^(?:"+n.map(rL).join("|")+")","i")}function Kp(n){return new Map(n.map((e,t)=>[e.toLowerCase(),t]))}function aL(n,e,t){var r=Ue.exec(e.slice(t,t+1));return r?(n.w=+r[0],t+r[0].length):-1}function oL(n,e,t){var r=Ue.exec(e.slice(t,t+1));return r?(n.u=+r[0],t+r[0].length):-1}function iL(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.U=+r[0],t+r[0].length):-1}function pL(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.V=+r[0],t+r[0].length):-1}function uL(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.W=+r[0],t+r[0].length):-1}function Yw(n,e,t){var r=Ue.exec(e.slice(t,t+4));return r?(n.y=+r[0],t+r[0].length):-1}function Xw(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function sL(n,e,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(t,t+6));return r?(n.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function lL(n,e,t){var r=Ue.exec(e.slice(t,t+1));return r?(n.q=r[0]*3-3,t+r[0].length):-1}function cL(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.m=r[0]-1,t+r[0].length):-1}function Zw(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.d=+r[0],t+r[0].length):-1}function fL(n,e,t){var r=Ue.exec(e.slice(t,t+3));return r?(n.m=0,n.d=+r[0],t+r[0].length):-1}function Jw(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.H=+r[0],t+r[0].length):-1}function dL(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.M=+r[0],t+r[0].length):-1}function mL(n,e,t){var r=Ue.exec(e.slice(t,t+2));return r?(n.S=+r[0],t+r[0].length):-1}function hL(n,e,t){var r=Ue.exec(e.slice(t,t+3));return r?(n.L=+r[0],t+r[0].length):-1}function vL(n,e,t){var r=Ue.exec(e.slice(t,t+6));return r?(n.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function gL(n,e,t){var r=eL.exec(e.slice(t,t+1));return r?t+r[0].length:-1}function bL(n,e,t){var r=Ue.exec(e.slice(t));return r?(n.Q=+r[0],t+r[0].length):-1}function yL(n,e,t){var r=Ue.exec(e.slice(t));return r?(n.s=+r[0],t+r[0].length):-1}function nW(n,e){return Gn(n.getDate(),e,2)}function IL(n,e){return Gn(n.getHours(),e,2)}function BL(n,e){return Gn(n.getHours()%12||12,e,2)}function xL(n,e){return Gn(1+e0.count(Kr(n),n),e,3)}function JS(n,e){return Gn(n.getMilliseconds(),e,3)}function PL(n,e){return JS(n,e)+"000"}function wL(n,e){return Gn(n.getMonth()+1,e,2)}function WL(n,e){return Gn(n.getMinutes(),e,2)}function SL(n,e){return Gn(n.getSeconds(),e,2)}function ML(n){var e=n.getDay();return e===0?7:e}function AL(n,e){return Gn(t2.count(Kr(n)-1,n),e,2)}function nM(n){var e=n.getDay();return e>=4||e===0?Ii(n):Ii.ceil(n)}function _L(n,e){return n=nM(n),Gn(Ii.count(Kr(n),n)+(Kr(n).getDay()===4),e,2)}function OL(n){return n.getDay()}function HL(n,e){return Gn(el.count(Kr(n)-1,n),e,2)}function CL(n,e){return Gn(n.getFullYear()%100,e,2)}function NL(n,e){return n=nM(n),Gn(n.getFullYear()%100,e,2)}function RL(n,e){return Gn(n.getFullYear()%1e4,e,4)}function kL(n,e){var t=n.getDay();return n=t>=4||t===0?Ii(n):Ii.ceil(n),Gn(n.getFullYear()%1e4,e,4)}function EL(n){var e=n.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+Gn(e/60|0,"0",2)+Gn(e%60,"0",2)}function eW(n,e){return Gn(n.getUTCDate(),e,2)}function TL(n,e){return Gn(n.getUTCHours(),e,2)}function DL(n,e){return Gn(n.getUTCHours()%12||12,e,2)}function jL(n,e){return Gn(1+e2.count(Qr(n),n),e,3)}function eM(n,e){return Gn(n.getUTCMilliseconds(),e,3)}function $L(n,e){return eM(n,e)+"000"}function LL(n,e){return Gn(n.getUTCMonth()+1,e,2)}function FL(n,e){return Gn(n.getUTCMinutes(),e,2)}function qL(n,e){return Gn(n.getUTCSeconds(),e,2)}function zL(n){var e=n.getUTCDay();return e===0?7:e}function UL(n,e){return Gn(r2.count(Qr(n)-1,n),e,2)}function tM(n){var e=n.getUTCDay();return e>=4||e===0?Bi(n):Bi.ceil(n)}function VL(n,e){return n=tM(n),Gn(Bi.count(Qr(n),n)+(Qr(n).getUTCDay()===4),e,2)}function GL(n){return n.getUTCDay()}function KL(n,e){return Gn(tl.count(Qr(n)-1,n),e,2)}function QL(n,e){return Gn(n.getUTCFullYear()%100,e,2)}function YL(n,e){return n=tM(n),Gn(n.getUTCFullYear()%100,e,2)}function XL(n,e){return Gn(n.getUTCFullYear()%1e4,e,4)}function ZL(n,e){var t=n.getUTCDay();return n=t>=4||t===0?Bi(n):Bi.ceil(n),Gn(n.getUTCFullYear()%1e4,e,4)}function JL(){return"+0000"}function tW(){return"%"}function rW(n){return+n}function aW(n){return Math.floor(+n/1e3)}var ni,rM,aM;n7({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function n7(n){return ni=nL(n),rM=ni.format,ni.parse,aM=ni.utcFormat,ni.utcParse,ni}function e7(n){return new Date(n)}function t7(n){return n instanceof Date?+n:+new Date(+n)}function ab(n,e,t,r,a,i,u,s,c,f){var m=zg(),d=m.invert,v=m.domain,b=f(".%L"),B=f(":%S"),I=f("%I:%M"),y=f("%I %p"),W=f("%a %d"),S=f("%b %d"),M=f("%B"),O=f("%Y");function P(A){return(c(A)<A?b:s(A)<A?B:u(A)<A?I:i(A)<A?y:r(A)<A?a(A)<A?W:S:t(A)<A?M:O)(A)}return m.invert=function(A){return new Date(d(A))},m.domain=function(A){return arguments.length?v(Array.from(A,t7)):v().map(e7)},m.ticks=function(A){var N=v();return n(N[0],N[N.length-1],A??10)},m.tickFormat=function(A,N){return N==null?P:f(N)},m.nice=function(A){var N=v();return(!A||typeof A.range!="function")&&(A=e(N[0],N[N.length-1],A??10)),A?v(zS(N,A)):m},m.copy=function(){return n0(m,ab(n,e,t,r,a,i,u,s,c,f))},m}function r7(){return Yt.apply(ab(Z8,J8,Kr,tb,t2,e0,nb,Zg,co,rM).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function a7(){return Yt.apply(ab(Y8,X8,Qr,rb,r2,e2,eb,Jg,co,aM).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function a2(){var n=0,e=1,t,r,a,i,u=pt,s=!1,c;function f(d){return d==null||isNaN(d=+d)?c:u(a===0?.5:(d=(i(d)-t)*a,s?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([n,e]=d,t=i(n=+n),r=i(e=+e),a=t===r?0:1/(r-t),f):[n,e]},f.clamp=function(d){return arguments.length?(s=!!d,f):s},f.interpolator=function(d){return arguments.length?(u=d,f):u};function m(d){return function(v){var b,B;return arguments.length?([b,B]=v,u=d(b,B),f):[u(0),u(1)]}}return f.range=m(Xi),f.rangeRound=m(qg),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,t=d(n),r=d(e),a=t===r?0:1/(r-t),f}}function $a(n,e){return e.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function oM(){var n=ja(a2()(pt));return n.copy=function(){return $a(n,oM())},Jr.apply(n,arguments)}function iM(){var n=Gg(a2()).domain([1,10]);return n.copy=function(){return $a(n,iM()).base(n.base())},Jr.apply(n,arguments)}function pM(){var n=Kg(a2());return n.copy=function(){return $a(n,pM()).constant(n.constant())},Jr.apply(n,arguments)}function ob(){var n=Qg(a2());return n.copy=function(){return $a(n,ob()).exponent(n.exponent())},Jr.apply(n,arguments)}function o7(){return ob.apply(null,arguments).exponent(.5)}function uM(){var n=[],e=pt;function t(r){if(r!=null&&!isNaN(r=+r))return e((Zu(n,r,1)-1)/(n.length-1))}return t.domain=function(r){if(!arguments.length)return n.slice();n=[];for(let a of r)a!=null&&!isNaN(a=+a)&&n.push(a);return n.sort(Ha),t},t.interpolator=function(r){return arguments.length?(e=r,t):e},t.range=function(){return n.map((r,a)=>e(a/(n.length-1)))},t.quantiles=function(r){return Array.from({length:r+1},(a,i)=>U$(n,i/r))},t.copy=function(){return uM(e).domain(n)},Jr.apply(t,arguments)}function o2(){var n=0,e=.5,t=1,r=1,a,i,u,s,c,f=pt,m,d=!1,v;function b(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?s:c),f(d?Math.max(0,Math.min(1,I)):I))}b.domain=function(I){return arguments.length?([n,e,t]=I,a=m(n=+n),i=m(e=+e),u=m(t=+t),s=a===i?0:.5/(i-a),c=i===u?0:.5/(u-i),r=i<a?-1:1,b):[n,e,t]},b.clamp=function(I){return arguments.length?(d=!!I,b):d},b.interpolator=function(I){return arguments.length?(f=I,b):f};function B(I){return function(y){var W,S,M;return arguments.length?([W,S,M]=y,f=g8(I,[W,S,M]),b):[f(0),f(.5),f(1)]}}return b.range=B(Xi),b.rangeRound=B(qg),b.unknown=function(I){return arguments.length?(v=I,b):v},function(I){return m=I,a=I(n),i=I(e),u=I(t),s=a===i?0:.5/(i-a),c=i===u?0:.5/(u-i),r=i<a?-1:1,b}}function sM(){var n=ja(o2()(pt));return n.copy=function(){return $a(n,sM())},Jr.apply(n,arguments)}function lM(){var n=Gg(o2()).domain([.1,1,10]);return n.copy=function(){return $a(n,lM()).base(n.base())},Jr.apply(n,arguments)}function cM(){var n=Kg(o2());return n.copy=function(){return $a(n,cM()).constant(n.constant())},Jr.apply(n,arguments)}function ib(){var n=Qg(o2());return n.copy=function(){return $a(n,ib()).exponent(n.exponent())},Jr.apply(n,arguments)}function i7(){return ib.apply(null,arguments).exponent(.5)}const oW=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Iu,scaleDiverging:sM,scaleDivergingLog:lM,scaleDivergingPow:ib,scaleDivergingSqrt:i7,scaleDivergingSymlog:cM,scaleIdentity:qS,scaleImplicit:pv,scaleLinear:Js,scaleLog:US,scaleOrdinal:$g,scalePoint:au,scalePow:Yg,scaleQuantile:KS,scaleQuantize:QS,scaleRadial:GS,scaleSequential:oM,scaleSequentialLog:iM,scaleSequentialPow:ob,scaleSequentialQuantile:uM,scaleSequentialSqrt:o7,scaleSequentialSymlog:pM,scaleSqrt:$8,scaleSymlog:VS,scaleThreshold:YS,scaleTime:r7,scaleUtc:a7,tickFormat:FS},Symbol.toStringTag,{value:"Module"}));var Th,iW;function i2(){if(iW)return Th;iW=1;var n=Gi();function e(t,r,a){for(var i=-1,u=t.length;++i<u;){var s=t[i],c=r(s);if(c!=null&&(f===void 0?c===c&&!n(c):a(c,f)))var f=c,m=s}return m}return Th=e,Th}var Dh,pW;function fM(){if(pW)return Dh;pW=1;function n(e,t){return e>t}return Dh=n,Dh}var jh,uW;function p7(){if(uW)return jh;uW=1;var n=i2(),e=fM(),t=Yi();function r(a){return a&&a.length?n(a,t,e):void 0}return jh=r,jh}var u7=p7();const Ma=Zn(u7);var $h,sW;function dM(){if(sW)return $h;sW=1;function n(e,t){return e<t}return $h=n,$h}var Lh,lW;function s7(){if(lW)return Lh;lW=1;var n=i2(),e=dM(),t=Yi();function r(a){return a&&a.length?n(a,t,e):void 0}return Lh=r,Lh}var l7=s7();const p2=Zn(l7);var Fh,cW;function c7(){if(cW)return Fh;cW=1;var n=xg(),e=Mr(),t=xS(),r=yt();function a(i,u){var s=r(i)?n:t;return s(i,e(u,3))}return Fh=a,Fh}var qh,fW;function f7(){if(fW)return qh;fW=1;var n=IS(),e=c7();function t(r,a){return n(e(r,a),1)}return qh=t,qh}var d7=f7();const m7=Zn(d7);var zh,dW;function h7(){if(dW)return zh;dW=1;var n=Rg();function e(t,r){return n(t,r)}return zh=e,zh}var v7=h7();const ka=Zn(v7);var Zi=1e9,g7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},ub,fe=!0,Kt="[DecimalError] ",vo=Kt+"Invalid argument: ",pb=Kt+"Exponent out of range: ",Ji=Math.floor,po=Math.pow,b7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_t,qe=1e7,se=7,mM=9007199254740991,rl=Ji(mM/se),Sn={};Sn.absoluteValue=Sn.abs=function(){var n=new this.constructor(this);return n.s&&(n.s=1),n};Sn.comparedTo=Sn.cmp=function(n){var e,t,r,a,i=this;if(n=new i.constructor(n),i.s!==n.s)return i.s||-n.s;if(i.e!==n.e)return i.e>n.e^i.s<0?1:-1;for(r=i.d.length,a=n.d.length,e=0,t=r<a?r:a;e<t;++e)if(i.d[e]!==n.d[e])return i.d[e]>n.d[e]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Sn.decimalPlaces=Sn.dp=function(){var n=this,e=n.d.length-1,t=(e-n.e)*se;if(e=n.d[e],e)for(;e%10==0;e/=10)t--;return t<0?0:t};Sn.dividedBy=Sn.div=function(n){return Vr(this,new this.constructor(n))};Sn.dividedToIntegerBy=Sn.idiv=function(n){var e=this,t=e.constructor;return te(Vr(e,new t(n),0,1),t.precision)};Sn.equals=Sn.eq=function(n){return!this.cmp(n)};Sn.exponent=function(){return He(this)};Sn.greaterThan=Sn.gt=function(n){return this.cmp(n)>0};Sn.greaterThanOrEqualTo=Sn.gte=function(n){return this.cmp(n)>=0};Sn.isInteger=Sn.isint=function(){return this.e>this.d.length-2};Sn.isNegative=Sn.isneg=function(){return this.s<0};Sn.isPositive=Sn.ispos=function(){return this.s>0};Sn.isZero=function(){return this.s===0};Sn.lessThan=Sn.lt=function(n){return this.cmp(n)<0};Sn.lessThanOrEqualTo=Sn.lte=function(n){return this.cmp(n)<1};Sn.logarithm=Sn.log=function(n){var e,t=this,r=t.constructor,a=r.precision,i=a+5;if(n===void 0)n=new r(10);else if(n=new r(n),n.s<1||n.eq(_t))throw Error(Kt+"NaN");if(t.s<1)throw Error(Kt+(t.s?"NaN":"-Infinity"));return t.eq(_t)?new r(0):(fe=!1,e=Vr(Wu(t,i),Wu(n,i),i),fe=!0,te(e,a))};Sn.minus=Sn.sub=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?gM(e,n):hM(e,(n.s=-n.s,n))};Sn.modulo=Sn.mod=function(n){var e,t=this,r=t.constructor,a=r.precision;if(n=new r(n),!n.s)throw Error(Kt+"NaN");return t.s?(fe=!1,e=Vr(t,n,0,1).times(n),fe=!0,t.minus(e)):te(new r(t),a)};Sn.naturalExponential=Sn.exp=function(){return vM(this)};Sn.naturalLogarithm=Sn.ln=function(){return Wu(this)};Sn.negated=Sn.neg=function(){var n=new this.constructor(this);return n.s=-n.s||0,n};Sn.plus=Sn.add=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?hM(e,n):gM(e,(n.s=-n.s,n))};Sn.precision=Sn.sd=function(n){var e,t,r,a=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(vo+n);if(e=He(a)+1,r=a.d.length-1,t=r*se+1,r=a.d[r],r){for(;r%10==0;r/=10)t--;for(r=a.d[0];r>=10;r/=10)t++}return n&&e>t?e:t};Sn.squareRoot=Sn.sqrt=function(){var n,e,t,r,a,i,u,s=this,c=s.constructor;if(s.s<1){if(!s.s)return new c(0);throw Error(Kt+"NaN")}for(n=He(s),fe=!1,a=Math.sqrt(+s),a==0||a==1/0?(e=yr(s.d),(e.length+n)%2==0&&(e+="0"),a=Math.sqrt(e),n=Ji((n+1)/2)-(n<0||n%2),a==1/0?e="5e"+n:(e=a.toExponential(),e=e.slice(0,e.indexOf("e")+1)+n),r=new c(e)):r=new c(a.toString()),t=c.precision,a=u=t+3;;)if(i=r,r=i.plus(Vr(s,i,u+2)).times(.5),yr(i.d).slice(0,u)===(e=yr(r.d)).slice(0,u)){if(e=e.slice(u-3,u+1),a==u&&e=="4999"){if(te(i,t+1,0),i.times(i).eq(s)){r=i;break}}else if(e!="9999")break;u+=4}return fe=!0,te(r,t)};Sn.times=Sn.mul=function(n){var e,t,r,a,i,u,s,c,f,m=this,d=m.constructor,v=m.d,b=(n=new d(n)).d;if(!m.s||!n.s)return new d(0);for(n.s*=m.s,t=m.e+n.e,c=v.length,f=b.length,c<f&&(i=v,v=b,b=i,u=c,c=f,f=u),i=[],u=c+f,r=u;r--;)i.push(0);for(r=f;--r>=0;){for(e=0,a=c+r;a>r;)s=i[a]+b[r]*v[a-r-1]+e,i[a--]=s%qe|0,e=s/qe|0;i[a]=(i[a]+e)%qe|0}for(;!i[--u];)i.pop();return e?++t:i.shift(),n.d=i,n.e=t,fe?te(n,d.precision):n};Sn.toDecimalPlaces=Sn.todp=function(n,e){var t=this,r=t.constructor;return t=new r(t),n===void 0?t:(wr(n,0,Zi),e===void 0?e=r.rounding:wr(e,0,8),te(t,n+He(t)+1,e))};Sn.toExponential=function(n,e){var t,r=this,a=r.constructor;return n===void 0?t=bo(r,!0):(wr(n,0,Zi),e===void 0?e=a.rounding:wr(e,0,8),r=te(new a(r),n+1,e),t=bo(r,!0,n+1)),t};Sn.toFixed=function(n,e){var t,r,a=this,i=a.constructor;return n===void 0?bo(a):(wr(n,0,Zi),e===void 0?e=i.rounding:wr(e,0,8),r=te(new i(a),n+He(a)+1,e),t=bo(r.abs(),!1,n+He(r)+1),a.isneg()&&!a.isZero()?"-"+t:t)};Sn.toInteger=Sn.toint=function(){var n=this,e=n.constructor;return te(new e(n),He(n)+1,e.rounding)};Sn.toNumber=function(){return+this};Sn.toPower=Sn.pow=function(n){var e,t,r,a,i,u,s=this,c=s.constructor,f=12,m=+(n=new c(n));if(!n.s)return new c(_t);if(s=new c(s),!s.s){if(n.s<1)throw Error(Kt+"Infinity");return s}if(s.eq(_t))return s;if(r=c.precision,n.eq(_t))return te(s,r);if(e=n.e,t=n.d.length-1,u=e>=t,i=s.s,u){if((t=m<0?-m:m)<=mM){for(a=new c(_t),e=Math.ceil(r/se+4),fe=!1;t%2&&(a=a.times(s),hW(a.d,e)),t=Ji(t/2),t!==0;)s=s.times(s),hW(s.d,e);return fe=!0,n.s<0?new c(_t).div(a):te(a,r)}}else if(i<0)throw Error(Kt+"NaN");return i=i<0&&n.d[Math.max(e,t)]&1?-1:1,s.s=1,fe=!1,a=n.times(Wu(s,r+f)),fe=!0,a=vM(a),a.s=i,a};Sn.toPrecision=function(n,e){var t,r,a=this,i=a.constructor;return n===void 0?(t=He(a),r=bo(a,t<=i.toExpNeg||t>=i.toExpPos)):(wr(n,1,Zi),e===void 0?e=i.rounding:wr(e,0,8),a=te(new i(a),n,e),t=He(a),r=bo(a,n<=t||t<=i.toExpNeg,n)),r};Sn.toSignificantDigits=Sn.tosd=function(n,e){var t=this,r=t.constructor;return n===void 0?(n=r.precision,e=r.rounding):(wr(n,1,Zi),e===void 0?e=r.rounding:wr(e,0,8)),te(new r(t),n,e)};Sn.toString=Sn.valueOf=Sn.val=Sn.toJSON=Sn[Symbol.for("nodejs.util.inspect.custom")]=function(){var n=this,e=He(n),t=n.constructor;return bo(n,e<=t.toExpNeg||e>=t.toExpPos)};function hM(n,e){var t,r,a,i,u,s,c,f,m=n.constructor,d=m.precision;if(!n.s||!e.s)return e.s||(e=new m(n)),fe?te(e,d):e;if(c=n.d,f=e.d,u=n.e,a=e.e,c=c.slice(),i=u-a,i){for(i<0?(r=c,i=-i,s=f.length):(r=f,a=u,s=c.length),u=Math.ceil(d/se),s=u>s?u+1:s+1,i>s&&(i=s,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(s=c.length,i=f.length,s-i<0&&(i=s,r=f,f=c,c=r),t=0;i;)t=(c[--i]=c[i]+f[i]+t)/qe|0,c[i]%=qe;for(t&&(c.unshift(t),++a),s=c.length;c[--s]==0;)c.pop();return e.d=c,e.e=a,fe?te(e,d):e}function wr(n,e,t){if(n!==~~n||n<e||n>t)throw Error(vo+n)}function yr(n){var e,t,r,a=n.length-1,i="",u=n[0];if(a>0){for(i+=u,e=1;e<a;e++)r=n[e]+"",t=se-r.length,t&&(i+=Wa(t)),i+=r;u=n[e],r=u+"",t=se-r.length,t&&(i+=Wa(t))}else if(u===0)return"0";for(;u%10===0;)u/=10;return i+u}var Vr=(function(){function n(r,a){var i,u=0,s=r.length;for(r=r.slice();s--;)i=r[s]*a+u,r[s]=i%qe|0,u=i/qe|0;return u&&r.unshift(u),r}function e(r,a,i,u){var s,c;if(i!=u)c=i>u?1:-1;else for(s=c=0;s<i;s++)if(r[s]!=a[s]){c=r[s]>a[s]?1:-1;break}return c}function t(r,a,i){for(var u=0;i--;)r[i]-=u,u=r[i]<a[i]?1:0,r[i]=u*qe+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,u){var s,c,f,m,d,v,b,B,I,y,W,S,M,O,P,A,N,w,H=r.constructor,k=r.s==a.s?1:-1,D=r.d,R=a.d;if(!r.s)return new H(r);if(!a.s)throw Error(Kt+"Division by zero");for(c=r.e-a.e,N=R.length,P=D.length,b=new H(k),B=b.d=[],f=0;R[f]==(D[f]||0);)++f;if(R[f]>(D[f]||0)&&--c,i==null?S=i=H.precision:u?S=i+(He(r)-He(a))+1:S=i,S<0)return new H(0);if(S=S/se+2|0,f=0,N==1)for(m=0,R=R[0],S++;(f<P||m)&&S--;f++)M=m*qe+(D[f]||0),B[f]=M/R|0,m=M%R|0;else{for(m=qe/(R[0]+1)|0,m>1&&(R=n(R,m),D=n(D,m),N=R.length,P=D.length),O=N,I=D.slice(0,N),y=I.length;y<N;)I[y++]=0;w=R.slice(),w.unshift(0),A=R[0],R[1]>=qe/2&&++A;do m=0,s=e(R,I,N,y),s<0?(W=I[0],N!=y&&(W=W*qe+(I[1]||0)),m=W/A|0,m>1?(m>=qe&&(m=qe-1),d=n(R,m),v=d.length,y=I.length,s=e(d,I,v,y),s==1&&(m--,t(d,N<v?w:R,v))):(m==0&&(s=m=1),d=R.slice()),v=d.length,v<y&&d.unshift(0),t(I,d,y),s==-1&&(y=I.length,s=e(R,I,N,y),s<1&&(m++,t(I,N<y?w:R,y))),y=I.length):s===0&&(m++,I=[0]),B[f++]=m,s&&I[0]?I[y++]=D[O]||0:(I=[D[O]],y=1);while((O++<P||I[0]!==void 0)&&S--)}return B[0]||B.shift(),b.e=c,te(b,u?i+He(b)+1:i)}})();function vM(n,e){var t,r,a,i,u,s,c=0,f=0,m=n.constructor,d=m.precision;if(He(n)>16)throw Error(pb+He(n));if(!n.s)return new m(_t);for(fe=!1,s=d,u=new m(.03125);n.abs().gte(.1);)n=n.times(u),f+=5;for(r=Math.log(po(2,f))/Math.LN10*2+5|0,s+=r,t=a=i=new m(_t),m.precision=s;;){if(a=te(a.times(n),s),t=t.times(++c),u=i.plus(Vr(a,t,s)),yr(u.d).slice(0,s)===yr(i.d).slice(0,s)){for(;f--;)i=te(i.times(i),s);return m.precision=d,e==null?(fe=!0,te(i,d)):i}i=u}}function He(n){for(var e=n.e*se,t=n.d[0];t>=10;t/=10)e++;return e}function Uh(n,e,t){if(e>n.LN10.sd())throw fe=!0,t&&(n.precision=t),Error(Kt+"LN10 precision limit exceeded");return te(new n(n.LN10),e)}function Wa(n){for(var e="";n--;)e+="0";return e}function Wu(n,e){var t,r,a,i,u,s,c,f,m,d=1,v=10,b=n,B=b.d,I=b.constructor,y=I.precision;if(b.s<1)throw Error(Kt+(b.s?"NaN":"-Infinity"));if(b.eq(_t))return new I(0);if(e==null?(fe=!1,f=y):f=e,b.eq(10))return e==null&&(fe=!0),Uh(I,f);if(f+=v,I.precision=f,t=yr(B),r=t.charAt(0),i=He(b),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)b=b.times(n),t=yr(b.d),r=t.charAt(0),d++;i=He(b),r>1?(b=new I("0."+t),i++):b=new I(r+"."+t.slice(1))}else return c=Uh(I,f+2,y).times(i+""),b=Wu(new I(r+"."+t.slice(1)),f-v).plus(c),I.precision=y,e==null?(fe=!0,te(b,y)):b;for(s=u=b=Vr(b.minus(_t),b.plus(_t),f),m=te(b.times(b),f),a=3;;){if(u=te(u.times(m),f),c=s.plus(Vr(u,new I(a),f)),yr(c.d).slice(0,f)===yr(s.d).slice(0,f))return s=s.times(2),i!==0&&(s=s.plus(Uh(I,f+2,y).times(i+""))),s=Vr(s,new I(d),f),I.precision=y,e==null?(fe=!0,te(s,y)):s;s=c,a+=2}}function mW(n,e){var t,r,a;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(t<0&&(t=r),t+=+e.slice(r+1),e=e.substring(0,r)):t<0&&(t=e.length),r=0;e.charCodeAt(r)===48;)++r;for(a=e.length;e.charCodeAt(a-1)===48;)--a;if(e=e.slice(r,a),e){if(a-=r,t=t-r-1,n.e=Ji(t/se),n.d=[],r=(t+1)%se,t<0&&(r+=se),r<a){for(r&&n.d.push(+e.slice(0,r)),a-=se;r<a;)n.d.push(+e.slice(r,r+=se));e=e.slice(r),r=se-e.length}else r-=a;for(;r--;)e+="0";if(n.d.push(+e),fe&&(n.e>rl||n.e<-rl))throw Error(pb+t)}else n.s=0,n.e=0,n.d=[0];return n}function te(n,e,t){var r,a,i,u,s,c,f,m,d=n.d;for(u=1,i=d[0];i>=10;i/=10)u++;if(r=e-u,r<0)r+=se,a=e,f=d[m=0];else{if(m=Math.ceil((r+1)/se),i=d.length,m>=i)return n;for(f=i=d[m],u=1;i>=10;i/=10)u++;r%=se,a=r-se+u}if(t!==void 0&&(i=po(10,u-a-1),s=f/i%10|0,c=e<0||d[m+1]!==void 0||f%i,c=t<4?(s||c)&&(t==0||t==(n.s<0?3:2)):s>5||s==5&&(t==4||c||t==6&&(r>0?a>0?f/po(10,u-a):0:d[m-1])%10&1||t==(n.s<0?8:7))),e<1||!d[0])return c?(i=He(n),d.length=1,e=e-i-1,d[0]=po(10,(se-e%se)%se),n.e=Ji(-e/se)||0):(d.length=1,d[0]=n.e=n.s=0),n;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=po(10,se-r),d[m]=a>0?(f/po(10,u-a)%po(10,a)|0)*i:0),c)for(;;)if(m==0){(d[0]+=i)==qe&&(d[0]=1,++n.e);break}else{if(d[m]+=i,d[m]!=qe)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(fe&&(n.e>rl||n.e<-rl))throw Error(pb+He(n));return n}function gM(n,e){var t,r,a,i,u,s,c,f,m,d,v=n.constructor,b=v.precision;if(!n.s||!e.s)return e.s?e.s=-e.s:e=new v(n),fe?te(e,b):e;if(c=n.d,d=e.d,r=e.e,f=n.e,c=c.slice(),u=f-r,u){for(m=u<0,m?(t=c,u=-u,s=d.length):(t=d,r=f,s=c.length),a=Math.max(Math.ceil(b/se),s)+2,u>a&&(u=a,t.length=1),t.reverse(),a=u;a--;)t.push(0);t.reverse()}else{for(a=c.length,s=d.length,m=a<s,m&&(s=a),a=0;a<s;a++)if(c[a]!=d[a]){m=c[a]<d[a];break}u=0}for(m&&(t=c,c=d,d=t,e.s=-e.s),s=c.length,a=d.length-s;a>0;--a)c[s++]=0;for(a=d.length;a>u;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=qe-1;--c[i],c[a]+=qe}c[a]-=d[a]}for(;c[--s]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(e.d=c,e.e=r,fe?te(e,b):e):new v(0)}function bo(n,e,t){var r,a=He(n),i=yr(n.d),u=i.length;return e?(t&&(r=t-u)>0?i=i.charAt(0)+"."+i.slice(1)+Wa(r):u>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Wa(-a-1)+i,t&&(r=t-u)>0&&(i+=Wa(r))):a>=u?(i+=Wa(a+1-u),t&&(r=t-a-1)>0&&(i=i+"."+Wa(r))):((r=a+1)<u&&(i=i.slice(0,r)+"."+i.slice(r)),t&&(r=t-u)>0&&(a+1===u&&(i+="."),i+=Wa(r))),n.s<0?"-"+i:i}function hW(n,e){if(n.length>e)return n.length=e,!0}function bM(n){var e,t,r;function a(i){var u=this;if(!(u instanceof a))return new a(i);if(u.constructor=a,i instanceof a){u.s=i.s,u.e=i.e,u.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)u.s=1;else if(i<0)i=-i,u.s=-1;else{u.s=0,u.e=0,u.d=[0];return}if(i===~~i&&i<1e7){u.e=0,u.d=[i];return}return mW(u,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),u.s=-1):u.s=1,b7.test(i))mW(u,i);else throw Error(vo+i)}if(a.prototype=Sn,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=bM,a.config=a.set=y7,n===void 0&&(n={}),n)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],e=0;e<r.length;)n.hasOwnProperty(t=r[e++])||(n[t]=this[t]);return a.config(n),a}function y7(n){if(!n||typeof n!="object")throw Error(Kt+"Object expected");var e,t,r,a=["precision",1,Zi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<a.length;e+=3)if((r=n[t=a[e]])!==void 0)if(Ji(r)===r&&r>=a[e+1]&&r<=a[e+2])this[t]=r;else throw Error(vo+t+": "+r);if((r=n[t="LN10"])!==void 0)if(r==Math.LN10)this[t]=new this(r);else throw Error(vo+t+": "+r);return this}var ub=bM(g7);_t=new ub(1);const ee=ub;function I7(n){return w7(n)||P7(n)||x7(n)||B7()}function B7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x7(n,e){if(n){if(typeof n=="string")return cv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return cv(n,e)}}function P7(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function w7(n){if(Array.isArray(n))return cv(n)}function cv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var W7=function(e){return e},yM={},IM=function(e){return e===yM},vW=function(e){return function t(){return arguments.length===0||arguments.length===1&&IM(arguments.length<=0?void 0:arguments[0])?t:e.apply(void 0,arguments)}},S7=function n(e,t){return e===1?t:vW(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var u=a.filter(function(s){return s!==yM}).length;return u>=e?t.apply(void 0,a):n(e-u,vW(function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];var m=a.map(function(d){return IM(d)?c.shift():d});return t.apply(void 0,I7(m).concat(c))}))})},u2=function(e){return S7(e.length,e)},fv=function(e,t){for(var r=[],a=e;a<t;++a)r[a-e]=a;return r},M7=u2(function(n,e){return Array.isArray(e)?e.map(n):Object.keys(e).map(function(t){return e[t]}).map(n)}),A7=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!t.length)return W7;var a=t.reverse(),i=a[0],u=a.slice(1);return function(){return u.reduce(function(s,c){return c(s)},i.apply(void 0,arguments))}},dv=function(e){return Array.isArray(e)?e.reverse():e.split("").reverse.join("")},BM=function(e){var t=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return t&&i.every(function(s,c){return s===t[c]})||(t=i,r=e.apply(void 0,i)),r}};function _7(n){var e;return n===0?e=1:e=Math.floor(new ee(n).abs().log(10).toNumber())+1,e}function O7(n,e,t){for(var r=new ee(n),a=0,i=[];r.lt(e)&&a<1e5;)i.push(r.toNumber()),r=r.add(t),a++;return i}var H7=u2(function(n,e,t){var r=+n,a=+e;return r+t*(a-r)}),C7=u2(function(n,e,t){var r=e-+n;return r=r||1/0,(t-n)/r}),N7=u2(function(n,e,t){var r=e-+n;return r=r||1/0,Math.max(0,Math.min(1,(t-n)/r))});const s2={rangeStep:O7,getDigitCount:_7,interpolateNumber:H7,uninterpolateNumber:C7,uninterpolateTruncation:N7};function mv(n){return E7(n)||k7(n)||xM(n)||R7()}function R7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k7(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function E7(n){if(Array.isArray(n))return hv(n)}function Su(n,e){return j7(n)||D7(n,e)||xM(n,e)||T7()}function T7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xM(n,e){if(n){if(typeof n=="string")return hv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hv(n,e)}}function hv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function D7(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],r=!0,a=!1,i=void 0;try{for(var u=n[Symbol.iterator](),s;!(r=(s=u.next()).done)&&(t.push(s.value),!(e&&t.length===e));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&u.return!=null&&u.return()}finally{if(a)throw i}}return t}}function j7(n){if(Array.isArray(n))return n}function PM(n){var e=Su(n,2),t=e[0],r=e[1],a=t,i=r;return t>r&&(a=r,i=t),[a,i]}function wM(n,e,t){if(n.lte(0))return new ee(0);var r=s2.getDigitCount(n.toNumber()),a=new ee(10).pow(r),i=n.div(a),u=r!==1?.05:.1,s=new ee(Math.ceil(i.div(u).toNumber())).add(t).mul(u),c=s.mul(a);return e?c:new ee(Math.ceil(c))}function $7(n,e,t){var r=1,a=new ee(n);if(!a.isint()&&t){var i=Math.abs(n);i<1?(r=new ee(10).pow(s2.getDigitCount(n)-1),a=new ee(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new ee(Math.floor(n)))}else n===0?a=new ee(Math.floor((e-1)/2)):t||(a=new ee(Math.floor(n)));var u=Math.floor((e-1)/2),s=A7(M7(function(c){return a.add(new ee(c-u).mul(r)).toNumber()}),fv);return s(0,e)}function WM(n,e,t,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((e-n)/(t-1)))return{step:new ee(0),tickMin:new ee(0),tickMax:new ee(0)};var i=wM(new ee(e).sub(n).div(t-1),r,a),u;n<=0&&e>=0?u=new ee(0):(u=new ee(n).add(e).div(2),u=u.sub(new ee(u).mod(i)));var s=Math.ceil(u.sub(n).div(i).toNumber()),c=Math.ceil(new ee(e).sub(u).div(i).toNumber()),f=s+c+1;return f>t?WM(n,e,t,r,a+1):(f<t&&(c=e>0?c+(t-f):c,s=e>0?s:s+(t-f)),{step:i,tickMin:u.sub(new ee(s).mul(i)),tickMax:u.add(new ee(c).mul(i))})}function L7(n){var e=Su(n,2),t=e[0],r=e[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=Math.max(a,2),s=PM([t,r]),c=Su(s,2),f=c[0],m=c[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(mv(fv(0,a-1).map(function(){return 1/0}))):[].concat(mv(fv(0,a-1).map(function(){return-1/0})),[m]);return t>r?dv(d):d}if(f===m)return $7(f,a,i);var v=WM(f,m,u,i),b=v.step,B=v.tickMin,I=v.tickMax,y=s2.rangeStep(B,I.add(new ee(.1).mul(b)),b);return t>r?dv(y):y}function F7(n,e){var t=Su(n,2),r=t[0],a=t[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=PM([r,a]),s=Su(u,2),c=s[0],f=s[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var m=Math.max(e,2),d=wM(new ee(f).sub(c).div(m-1),i,0),v=[].concat(mv(s2.rangeStep(new ee(c),new ee(f).sub(new ee(.99).mul(d)),d)),[f]);return r>a?dv(v):v}var q7=BM(L7),z7=BM(F7),U7="Invariant failed";function yo(n,e){throw new Error(U7)}var V7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function xi(n){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xi(n)}function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},al.apply(this,arguments)}function G7(n,e){return X7(n)||Y7(n,e)||Q7(n,e)||K7()}function K7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q7(n,e){if(n){if(typeof n=="string")return gW(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gW(n,e)}}function gW(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Y7(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function X7(n){if(Array.isArray(n))return n}function Z7(n,e){if(n==null)return{};var t=J7(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function J7(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function n9(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e9(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,AM(r.key),r)}}function t9(n,e,t){return e&&e9(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function r9(n,e,t){return e=ol(e),a9(n,SM()?Reflect.construct(e,t||[],ol(n).constructor):e.apply(n,t))}function a9(n,e){if(e&&(xi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o9(n)}function o9(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function SM(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SM=function(){return!!n})()}function ol(n){return ol=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ol(n)}function i9(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&vv(n,e)}function vv(n,e){return vv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},vv(n,e)}function MM(n,e,t){return e=AM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function AM(n){var e=p9(n,"string");return xi(e)=="symbol"?e:e+""}function p9(n,e){if(xi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var np=(function(n){function e(){return n9(this,e),r9(this,e,arguments)}return i9(e,n),t9(e,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,u=r.width,s=r.dataKey,c=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=Z7(r,V7),b=Hn(v,!1);this.props.direction==="x"&&m.type!=="number"&&yo();var B=c.map(function(I){var y=f(I,s),W=y.x,S=y.y,M=y.value,O=y.errorVal;if(!O)return null;var P=[],A,N;if(Array.isArray(O)){var w=G7(O,2);A=w[0],N=w[1]}else A=N=O;if(i==="vertical"){var H=m.scale,k=S+a,D=k+u,R=k-u,F=H(M-A),V=H(M+N);P.push({x1:V,y1:D,x2:V,y2:R}),P.push({x1:F,y1:k,x2:V,y2:k}),P.push({x1:F,y1:D,x2:F,y2:R})}else if(i==="horizontal"){var G=d.scale,Y=W+a,Q=Y-u,$=Y+u,K=G(M-A),en=G(M+N);P.push({x1:Q,y1:en,x2:$,y2:en}),P.push({x1:Y,y1:K,x2:Y,y2:en}),P.push({x1:Q,y1:K,x2:$,y2:K})}return E.createElement(Ln,al({className:"recharts-errorBar",key:"bar-".concat(P.map(function(T){return"".concat(T.x1,"-").concat(T.x2,"-").concat(T.y1,"-").concat(T.y2)}))},b),P.map(function(T){return E.createElement("line",al({},T,{key:"line-".concat(T.x1,"-").concat(T.x2,"-").concat(T.y1,"-").concat(T.y2)}))}))});return E.createElement(Ln,{className:"recharts-errorBars"},B)}}])})(E.Component);MM(np,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});MM(np,"displayName","ErrorBar");function Mu(n){"@babel/helpers - typeof";return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mu(n)}function bW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function to(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bW(Object(t),!0).forEach(function(r){u9(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function u9(n,e,t){return e=s9(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s9(n){var e=l9(n,"string");return Mu(e)=="symbol"?e:e+""}function l9(n,e){if(Mu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Mu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var _M=function(e){var t=e.children,r=e.formattedGraphicalItems,a=e.legendWidth,i=e.legendContent,u=St(t,Oa);if(!u)return null;var s=Oa.defaultProps,c=s!==void 0?to(to({},s),u.props):{},f;return u.props&&u.props.payload?f=u.props&&u.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,b=d.props,B=b.sectors||b.data||[];return m.concat(B.map(function(I){return{type:u.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,b=v!==void 0?to(to({},v),d.props):{},B=b.dataKey,I=b.name,y=b.legendType,W=b.hide;return{inactive:W,dataKey:B,type:c.iconType||y||"square",color:sb(d),value:I||B,payload:b}}),to(to(to({},c),Oa.getWithHeight(u,a)),{},{payload:f,item:u})};function Au(n){"@babel/helpers - typeof";return Au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Au(n)}function yW(n){return m9(n)||d9(n)||f9(n)||c9()}function c9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f9(n,e){if(n){if(typeof n=="string")return gv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gv(n,e)}}function d9(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function m9(n){if(Array.isArray(n))return gv(n)}function gv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function IW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Ie(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?IW(Object(t),!0).forEach(function(r){ci(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):IW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ci(n,e,t){return e=h9(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function h9(n){var e=v9(n,"string");return Au(e)=="symbol"?e:e+""}function v9(n,e){if(Au(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Au(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function le(n,e,t){return En(n)||En(e)?t:Te(e)?Ot(n,e,t):kn(e)?e(n):t}function ou(n,e,t,r){var a=m7(n,function(s){return le(s,e)});if(t==="number"){var i=a.filter(function(s){return fn(s)||parseFloat(s)});return i.length?[p2(i),Ma(i)]:[1/0,-1/0]}var u=r?a.filter(function(s){return!En(s)}):a;return u.map(function(s){return Te(s)||s instanceof Date?s:""})}var g9=function(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,u=-1,s=(t=r==null?void 0:r.length)!==null&&t!==void 0?t:0;if(s<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<s;f++){var m=f>0?a[f-1].coordinate:a[s-1].coordinate,d=a[f].coordinate,v=f>=s-1?a[0].coordinate:a[f+1].coordinate,b=void 0;if(ot(d-m)!==ot(v-d)){var B=[];if(ot(v-d)===ot(c[1]-c[0])){b=v;var I=d+c[1]-c[0];B[0]=Math.min(I,(I+m)/2),B[1]=Math.max(I,(I+m)/2)}else{b=m;var y=v+c[1]-c[0];B[0]=Math.min(d,(y+d)/2),B[1]=Math.max(d,(y+d)/2)}var W=[Math.min(d,(b+d)/2),Math.max(d,(b+d)/2)];if(e>W[0]&&e<=W[1]||e>=B[0]&&e<=B[1]){u=a[f].index;break}}else{var S=Math.min(m,v),M=Math.max(m,v);if(e>(S+d)/2&&e<=(M+d)/2){u=a[f].index;break}}}else for(var O=0;O<s;O++)if(O===0&&e<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<s-1&&e>(r[O].coordinate+r[O-1].coordinate)/2&&e<=(r[O].coordinate+r[O+1].coordinate)/2||O===s-1&&e>(r[O].coordinate+r[O-1].coordinate)/2){u=r[O].index;break}return u},sb=function(e){var t,r=e,a=r.type.displayName,i=(t=e.type)!==null&&t!==void 0&&t.defaultProps?Ie(Ie({},e.type.defaultProps),e.props):e.props,u=i.stroke,s=i.fill,c;switch(a){case"Line":c=u;break;case"Area":case"Radar":c=u&&u!=="none"?u:s;break;default:c=s;break}return c},b9=function(e){var t=e.barSize,r=e.totalSize,a=e.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var u={},s=Object.keys(i),c=0,f=s.length;c<f;c++)for(var m=i[s[c]].stackGroups,d=Object.keys(m),v=0,b=d.length;v<b;v++){var B=m[d[v]],I=B.items,y=B.cateAxisId,W=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(W&&W.length){var S=W[0].type.defaultProps,M=S!==void 0?Ie(Ie({},S),W[0].props):W[0].props,O=M.barSize,P=M[y];u[P]||(u[P]=[]);var A=En(O)?t:O;u[P].push({item:W[0],stackList:W.slice(1),barSize:En(A)?void 0:it(A,r,0)})}}return u},y9=function(e){var t=e.barGap,r=e.barCategoryGap,a=e.bandSize,i=e.sizeList,u=i===void 0?[]:i,s=e.maxBarSize,c=u.length;if(c<1)return null;var f=it(t,a,0,!0),m,d=[];if(u[0].barSize===+u[0].barSize){var v=!1,b=a/c,B=u.reduce(function(O,P){return O+P.barSize||0},0);B+=(c-1)*f,B>=a&&(B-=(c-1)*f,f=0),B>=a&&b>0&&(v=!0,b*=.9,B=c*b);var I=(a-B)/2>>0,y={offset:I-f,size:0};m=u.reduce(function(O,P){var A={item:P.item,position:{offset:y.offset+y.size+f,size:v?b:P.barSize}},N=[].concat(yW(O),[A]);return y=N[N.length-1].position,P.stackList&&P.stackList.length&&P.stackList.forEach(function(w){N.push({item:w,position:y})}),N},d)}else{var W=it(r,a,0,!0);a-2*W-(c-1)*f<=0&&(f=0);var S=(a-2*W-(c-1)*f)/c;S>1&&(S>>=0);var M=s===+s?Math.min(S,s):S;m=u.reduce(function(O,P,A){var N=[].concat(yW(O),[{item:P.item,position:{offset:W+(S+f)*A+(S-M)/2,size:M}}]);return P.stackList&&P.stackList.length&&P.stackList.forEach(function(w){N.push({item:w,position:N[N.length-1].position})}),N},d)}return m},I9=function(e,t,r,a){var i=r.children,u=r.width,s=r.margin,c=u-(s.left||0)-(s.right||0),f=_M({children:i,legendWidth:c});if(f){var m=a||{},d=m.width,v=m.height,b=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&b!=="center"&&fn(e[b]))return Ie(Ie({},e),{},ci({},b,e[b]+(d||0)));if((I==="horizontal"||I==="vertical"&&b==="center")&&B!=="middle"&&fn(e[B]))return Ie(Ie({},e),{},ci({},B,e[B]+(v||0)))}return e},B9=function(e,t,r){return En(t)?!0:e==="horizontal"?t==="yAxis":e==="vertical"||r==="x"?t==="xAxis":r==="y"?t==="yAxis":!0},OM=function(e,t,r,a,i){var u=t.props.children,s=ut(u,np).filter(function(f){return B9(a,i,f.props.direction)});if(s&&s.length){var c=s.map(function(f){return f.props.dataKey});return e.reduce(function(f,m){var d=le(m,r);if(En(d))return f;var v=Array.isArray(d)?[p2(d),Ma(d)]:[d,d],b=c.reduce(function(B,I){var y=le(m,I,0),W=v[0]-Math.abs(Array.isArray(y)?y[0]:y),S=v[1]+Math.abs(Array.isArray(y)?y[1]:y);return[Math.min(W,B[0]),Math.max(S,B[1])]},[1/0,-1/0]);return[Math.min(b[0],f[0]),Math.max(b[1],f[1])]},[1/0,-1/0])}return null},x9=function(e,t,r,a,i){var u=t.map(function(s){return OM(e,s,r,i,a)}).filter(function(s){return!En(s)});return u&&u.length?u.reduce(function(s,c){return[Math.min(s[0],c[0]),Math.max(s[1],c[1])]},[1/0,-1/0]):null},HM=function(e,t,r,a,i){var u=t.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&OM(e,c,f,a)||ou(e,f,r,i)});if(r==="number")return u.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var s={};return u.reduce(function(c,f){for(var m=0,d=f.length;m<d;m++)s[f[m]]||(s[f[m]]=!0,c.push(f[m]));return c},[])},CM=function(e,t){return e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis"},NM=function(e,t,r,a){if(a)return e.map(function(c){return c.coordinate});var i,u,s=e.map(function(c){return c.coordinate===t&&(i=!0),c.coordinate===r&&(u=!0),c.coordinate});return i||s.push(t),u||s.push(r),s},Fr=function(e,t,r){if(!e)return null;var a=e.scale,i=e.duplicateDomain,u=e.type,s=e.range,c=e.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(t||r)&&u==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=e.axisType==="angleAxis"&&(s==null?void 0:s.length)>=2?ot(s[0]-s[1])*2*f:f,t&&(e.ticks||e.niceTicks)){var m=(e.ticks||e.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Qi(d.coordinate)})}return e.isCategorical&&e.categoricalDomain?e.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(e.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Vh=new WeakMap,xs=function(e,t){if(typeof t!="function")return e;Vh.has(e)||Vh.set(e,new WeakMap);var r=Vh.get(e);if(r.has(t))return r.get(t);var a=function(){e.apply(void 0,arguments),t.apply(void 0,arguments)};return r.set(t,a),a},RM=function(e,t,r){var a=e.scale,i=e.type,u=e.layout,s=e.axisType;if(a==="auto")return u==="radial"&&s==="radiusAxis"?{scale:Iu(),realScaleType:"band"}:u==="radial"&&s==="angleAxis"?{scale:Js(),realScaleType:"linear"}:i==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:au(),realScaleType:"point"}:i==="category"?{scale:Iu(),realScaleType:"band"}:{scale:Js(),realScaleType:"linear"};if(Qu(a)){var c="scale".concat(Vl(a));return{scale:(oW[c]||au)(),realScaleType:oW[c]?c:"point"}}return kn(a)?{scale:a}:{scale:au(),realScaleType:"point"}},BW=1e-4,kM=function(e){var t=e.domain();if(!(!t||t.length<=2)){var r=t.length,a=e.range(),i=Math.min(a[0],a[1])-BW,u=Math.max(a[0],a[1])+BW,s=e(t[0]),c=e(t[r-1]);(s<i||s>u||c<i||c>u)&&e.domain([t[0],t[r-1]])}},P9=function(e,t){if(!e)return null;for(var r=0,a=e.length;r<a;r++)if(e[r].item===t)return e[r].position;return null},w9=function(e,t){if(!t||t.length!==2||!fn(t[0])||!fn(t[1]))return e;var r=Math.min(t[0],t[1]),a=Math.max(t[0],t[1]),i=[e[0],e[1]];return(!fn(e[0])||e[0]<r)&&(i[0]=r),(!fn(e[1])||e[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},W9=function(e){var t=e.length;if(!(t<=0))for(var r=0,a=e[0].length;r<a;++r)for(var i=0,u=0,s=0;s<t;++s){var c=Qi(e[s][r][1])?e[s][r][0]:e[s][r][1];c>=0?(e[s][r][0]=i,e[s][r][1]=i+c,i=e[s][r][1]):(e[s][r][0]=u,e[s][r][1]=u+c,u=e[s][r][1])}},S9=function(e){var t=e.length;if(!(t<=0))for(var r=0,a=e[0].length;r<a;++r)for(var i=0,u=0;u<t;++u){var s=Qi(e[u][r][1])?e[u][r][0]:e[u][r][1];s>=0?(e[u][r][0]=i,e[u][r][1]=i+s,i=e[u][r][1]):(e[u][r][0]=0,e[u][r][1]=0)}},M9={sign:W9,expand:mT,none:mi,silhouette:hT,wiggle:vT,positive:S9},A9=function(e,t,r){var a=t.map(function(s){return s.props.dataKey}),i=M9[r],u=dT().keys(a).value(function(s,c){return+le(s,c,0)}).order(G6).offset(i);return u(e)},_9=function(e,t,r,a,i,u){if(!e)return null;var s=u?t.reverse():t,c={},f=s.reduce(function(d,v){var b,B=(b=v.type)!==null&&b!==void 0&&b.defaultProps?Ie(Ie({},v.type.defaultProps),v.props):v.props,I=B.stackId,y=B.hide;if(y)return d;var W=B[r],S=d[W]||{hasStack:!1,stackGroups:{}};if(Te(I)){var M=S.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};M.items.push(v),S.hasStack=!0,S.stackGroups[I]=M}else S.stackGroups[Da("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return Ie(Ie({},d),{},ci({},W,S))},c),m={};return Object.keys(f).reduce(function(d,v){var b=f[v];if(b.hasStack){var B={};b.stackGroups=Object.keys(b.stackGroups).reduce(function(I,y){var W=b.stackGroups[y];return Ie(Ie({},I),{},ci({},y,{numericAxisId:r,cateAxisId:a,items:W.items,stackedData:A9(e,W.items,i)}))},B)}return Ie(Ie({},d),{},ci({},v,b))},m)},EM=function(e,t){var r=t.realScaleType,a=t.type,i=t.tickCount,u=t.originalDomain,s=t.allowDecimals,c=r||t.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&u&&(u[0]==="auto"||u[1]==="auto")){var f=e.domain();if(!f.length)return null;var m=q7(f,i,s);return e.domain([p2(m),Ma(m)]),{niceTicks:m}}if(i&&a==="number"){var d=e.domain(),v=z7(d,i,s);return{niceTicks:v}}return null};function Pi(n){var e=n.axis,t=n.ticks,r=n.bandSize,a=n.entry,i=n.index,u=n.dataKey;if(e.type==="category"){if(!e.allowDuplicatedCategory&&e.dataKey&&!En(a[e.dataKey])){var s=Rs(t,"value",a[e.dataKey]);if(s)return s.coordinate+r/2}return t[i]?t[i].coordinate+r/2:null}var c=le(a,En(u)?e.dataKey:u);return En(c)?null:e.scale(c)}var xW=function(e){var t=e.axis,r=e.ticks,a=e.offset,i=e.bandSize,u=e.entry,s=e.index;if(t.type==="category")return r[s]?r[s].coordinate+a:null;var c=le(u,t.dataKey,t.domain[s]);return En(c)?null:t.scale(c)-i/2+a},O9=function(e){var t=e.numericAxis,r=t.scale.domain();if(t.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},H9=function(e,t){var r,a=(r=e.type)!==null&&r!==void 0&&r.defaultProps?Ie(Ie({},e.type.defaultProps),e.props):e.props,i=a.stackId;if(Te(i)){var u=t[i];if(u){var s=u.items.indexOf(e);return s>=0?u.stackedData[s]:null}}return null},C9=function(e){return e.reduce(function(t,r){return[p2(r.concat([t[0]]).filter(fn)),Ma(r.concat([t[1]]).filter(fn))]},[1/0,-1/0])},TM=function(e,t,r){return Object.keys(e).reduce(function(a,i){var u=e[i],s=u.stackedData,c=s.reduce(function(f,m){var d=C9(m.slice(t,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},PW=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,wW=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,bv=function(e,t,r){if(kn(e))return e(t,r);if(!Array.isArray(e))return t;var a=[];if(fn(e[0]))a[0]=r?e[0]:Math.min(e[0],t[0]);else if(PW.test(e[0])){var i=+PW.exec(e[0])[1];a[0]=t[0]-i}else kn(e[0])?a[0]=e[0](t[0]):a[0]=t[0];if(fn(e[1]))a[1]=r?e[1]:Math.max(e[1],t[1]);else if(wW.test(e[1])){var u=+wW.exec(e[1])[1];a[1]=t[1]+u}else kn(e[1])?a[1]=e[1](t[1]):a[1]=t[1];return a},il=function(e,t,r){if(e&&e.scale&&e.scale.bandwidth){var a=e.scale.bandwidth();if(!r||a>0)return a}if(e&&t&&t.length>=2){for(var i=Eg(t,function(d){return d.coordinate}),u=1/0,s=1,c=i.length;s<c;s++){var f=i[s],m=i[s-1];u=Math.min((f.coordinate||0)-(m.coordinate||0),u)}return u===1/0?0:u}return r?void 0:0},WW=function(e,t,r){return!e||!e.length||ka(e,Ot(r,"type.defaultProps.domain"))?t:e},DM=function(e,t){var r=e.type.defaultProps?Ie(Ie({},e.type.defaultProps),e.props):e.props,a=r.dataKey,i=r.name,u=r.unit,s=r.formatter,c=r.tooltipType,f=r.chartType,m=r.hide;return Ie(Ie({},Hn(e,!1)),{},{dataKey:a,unit:u,formatter:s,name:i||a,color:sb(e),value:le(t,a),type:c,payload:t,chartType:f,hide:m})};function _u(n){"@babel/helpers - typeof";return _u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_u(n)}function SW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Dr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?SW(Object(t),!0).forEach(function(r){jM(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):SW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function jM(n,e,t){return e=N9(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N9(n){var e=R9(n,"string");return _u(e)=="symbol"?e:e+""}function R9(n,e){if(_u(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(_u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function k9(n,e){return j9(n)||D9(n,e)||T9(n,e)||E9()}function E9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T9(n,e){if(n){if(typeof n=="string")return MW(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return MW(n,e)}}function MW(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function D9(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function j9(n){if(Array.isArray(n))return n}var pl=Math.PI/180,$9=function(e){return e*180/Math.PI},ie=function(e,t,r,a){return{x:e+Math.cos(-pl*a)*r,y:t+Math.sin(-pl*a)*r}},$M=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(e-(r.left||0)-(r.right||0)),Math.abs(t-(r.top||0)-(r.bottom||0)))/2},L9=function(e,t,r,a,i){var u=e.width,s=e.height,c=e.startAngle,f=e.endAngle,m=it(e.cx,u,u/2),d=it(e.cy,s,s/2),v=$M(u,s,r),b=it(e.innerRadius,v,0),B=it(e.outerRadius,v,v*.8),I=Object.keys(t);return I.reduce(function(y,W){var S=t[W],M=S.domain,O=S.reversed,P;if(En(S.range))a==="angleAxis"?P=[c,f]:a==="radiusAxis"&&(P=[b,B]),O&&(P=[P[1],P[0]]);else{P=S.range;var A=P,N=k9(A,2);c=N[0],f=N[1]}var w=RM(S,i),H=w.realScaleType,k=w.scale;k.domain(M).range(P),kM(k);var D=EM(k,Dr(Dr({},S),{},{realScaleType:H})),R=Dr(Dr(Dr({},S),D),{},{range:P,radius:B,realScaleType:H,scale:k,cx:m,cy:d,innerRadius:b,outerRadius:B,startAngle:c,endAngle:f});return Dr(Dr({},y),{},jM({},W,R))},{})},F9=function(e,t){var r=e.x,a=e.y,i=t.x,u=t.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-u,2))},q9=function(e,t){var r=e.x,a=e.y,i=t.cx,u=t.cy,s=F9({x:r,y:a},{x:i,y:u});if(s<=0)return{radius:s};var c=(r-i)/s,f=Math.acos(c);return a>u&&(f=2*Math.PI-f),{radius:s,angle:$9(f),angleInRadian:f}},z9=function(e){var t=e.startAngle,r=e.endAngle,a=Math.floor(t/360),i=Math.floor(r/360),u=Math.min(a,i);return{startAngle:t-u*360,endAngle:r-u*360}},U9=function(e,t){var r=t.startAngle,a=t.endAngle,i=Math.floor(r/360),u=Math.floor(a/360),s=Math.min(i,u);return e+s*360},AW=function(e,t){var r=e.x,a=e.y,i=q9({x:r,y:a},t),u=i.radius,s=i.angle,c=t.innerRadius,f=t.outerRadius;if(u<c||u>f)return!1;if(u===0)return!0;var m=z9(t),d=m.startAngle,v=m.endAngle,b=s,B;if(d<=v){for(;b>v;)b-=360;for(;b<d;)b+=360;B=b>=d&&b<=v}else{for(;b>d;)b-=360;for(;b<v;)b+=360;B=b>=v&&b<=d}return B?Dr(Dr({},t),{},{radius:u,angle:U9(b,t)}):null},LM=function(e){return!U.isValidElement(e)&&!kn(e)&&typeof e!="boolean"?e.className:""};function Ou(n){"@babel/helpers - typeof";return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ou(n)}var V9=["offset"];function G9(n){return X9(n)||Y9(n)||Q9(n)||K9()}function K9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q9(n,e){if(n){if(typeof n=="string")return yv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yv(n,e)}}function Y9(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function X9(n){if(Array.isArray(n))return yv(n)}function yv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Z9(n,e){if(n==null)return{};var t=J9(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function J9(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function _W(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Ee(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_W(Object(t),!0).forEach(function(r){nF(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_W(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function nF(n,e,t){return e=eF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function eF(n){var e=tF(n,"string");return Ou(e)=="symbol"?e:e+""}function tF(n,e){if(Ou(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ou(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Hu(){return Hu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Hu.apply(this,arguments)}var rF=function(e){var t=e.value,r=e.formatter,a=En(e.children)?t:e.children;return kn(r)?r(a):a},aF=function(e,t){var r=ot(t-e),a=Math.min(Math.abs(t-e),360);return r*a},oF=function(e,t,r){var a=e.position,i=e.viewBox,u=e.offset,s=e.className,c=i,f=c.cx,m=c.cy,d=c.innerRadius,v=c.outerRadius,b=c.startAngle,B=c.endAngle,I=c.clockWise,y=(d+v)/2,W=aF(b,B),S=W>=0?1:-1,M,O;a==="insideStart"?(M=b+S*u,O=I):a==="insideEnd"?(M=B-S*u,O=!I):a==="end"&&(M=B+S*u,O=I),O=W<=0?O:!O;var P=ie(f,m,y,M),A=ie(f,m,y,M+(O?1:-1)*359),N="M".concat(P.x,",").concat(P.y,`
    A`).concat(y,",").concat(y,",0,1,").concat(O?0:1,`,
    `).concat(A.x,",").concat(A.y),w=En(e.id)?Da("recharts-radial-line-"):e.id;return E.createElement("text",Hu({},r,{dominantBaseline:"central",className:jn("recharts-radial-bar-label",s)}),E.createElement("defs",null,E.createElement("path",{id:w,d:N})),E.createElement("textPath",{xlinkHref:"#".concat(w)},t))},iF=function(e){var t=e.viewBox,r=e.offset,a=e.position,i=t,u=i.cx,s=i.cy,c=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var b=ie(u,s,f+r,v),B=b.x,I=b.y;return{x:B,y:I,textAnchor:B>=u?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:u,y:s,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:u,y:s,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:u,y:s,textAnchor:"middle",verticalAnchor:"end"};var y=(c+f)/2,W=ie(u,s,y,v),S=W.x,M=W.y;return{x:S,y:M,textAnchor:"middle",verticalAnchor:"middle"}},pF=function(e){var t=e.viewBox,r=e.parentViewBox,a=e.offset,i=e.position,u=t,s=u.x,c=u.y,f=u.width,m=u.height,d=m>=0?1:-1,v=d*a,b=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,y=I*a,W=I>0?"end":"start",S=I>0?"start":"end";if(i==="top"){var M={x:s+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:b};return Ee(Ee({},M),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:s+f/2,y:c+m+v,textAnchor:"middle",verticalAnchor:B};return Ee(Ee({},O),r?{height:Math.max(r.y+r.height-(c+m),0),width:f}:{})}if(i==="left"){var P={x:s-y,y:c+m/2,textAnchor:W,verticalAnchor:"middle"};return Ee(Ee({},P),r?{width:Math.max(P.x-r.x,0),height:m}:{})}if(i==="right"){var A={x:s+f+y,y:c+m/2,textAnchor:S,verticalAnchor:"middle"};return Ee(Ee({},A),r?{width:Math.max(r.x+r.width-A.x,0),height:m}:{})}var N=r?{width:f,height:m}:{};return i==="insideLeft"?Ee({x:s+y,y:c+m/2,textAnchor:S,verticalAnchor:"middle"},N):i==="insideRight"?Ee({x:s+f-y,y:c+m/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideTop"?Ee({x:s+f/2,y:c+v,textAnchor:"middle",verticalAnchor:B},N):i==="insideBottom"?Ee({x:s+f/2,y:c+m-v,textAnchor:"middle",verticalAnchor:b},N):i==="insideTopLeft"?Ee({x:s+y,y:c+v,textAnchor:S,verticalAnchor:B},N):i==="insideTopRight"?Ee({x:s+f-y,y:c+v,textAnchor:W,verticalAnchor:B},N):i==="insideBottomLeft"?Ee({x:s+y,y:c+m-v,textAnchor:S,verticalAnchor:b},N):i==="insideBottomRight"?Ee({x:s+f-y,y:c+m-v,textAnchor:W,verticalAnchor:b},N):Ki(i)&&(fn(i.x)||so(i.x))&&(fn(i.y)||so(i.y))?Ee({x:s+it(i.x,f),y:c+it(i.y,m),textAnchor:"end",verticalAnchor:"end"},N):Ee({x:s+f/2,y:c+m/2,textAnchor:"middle",verticalAnchor:"middle"},N)},uF=function(e){return"cx"in e&&fn(e.cx)};function ze(n){var e=n.offset,t=e===void 0?5:e,r=Z9(n,V9),a=Ee({offset:t},r),i=a.viewBox,u=a.position,s=a.value,c=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||En(s)&&En(c)&&!U.isValidElement(f)&&!kn(f))return null;if(U.isValidElement(f))return U.cloneElement(f,a);var b;if(kn(f)){if(b=U.createElement(f,a),U.isValidElement(b))return b}else b=rF(a);var B=uF(i),I=Hn(a,!0);if(B&&(u==="insideStart"||u==="insideEnd"||u==="end"))return oF(a,b,I);var y=B?iF(a):pF(a);return E.createElement(go,Hu({className:jn("recharts-label",d)},I,y,{breakAll:v}),b)}ze.displayName="Label";var FM=function(e){var t=e.cx,r=e.cy,a=e.angle,i=e.startAngle,u=e.endAngle,s=e.r,c=e.radius,f=e.innerRadius,m=e.outerRadius,d=e.x,v=e.y,b=e.top,B=e.left,I=e.width,y=e.height,W=e.clockWise,S=e.labelViewBox;if(S)return S;if(fn(I)&&fn(y)){if(fn(d)&&fn(v))return{x:d,y:v,width:I,height:y};if(fn(b)&&fn(B))return{x:b,y:B,width:I,height:y}}return fn(d)&&fn(v)?{x:d,y:v,width:0,height:0}:fn(t)&&fn(r)?{cx:t,cy:r,startAngle:i||a||0,endAngle:u||a||0,innerRadius:f||0,outerRadius:m||c||s||0,clockWise:W}:e.viewBox?e.viewBox:{}},sF=function(e,t){return e?e===!0?E.createElement(ze,{key:"label-implicit",viewBox:t}):Te(e)?E.createElement(ze,{key:"label-implicit",viewBox:t,value:e}):U.isValidElement(e)?e.type===ze?U.cloneElement(e,{key:"label-implicit",viewBox:t}):E.createElement(ze,{key:"label-implicit",content:e,viewBox:t}):kn(e)?E.createElement(ze,{key:"label-implicit",content:e,viewBox:t}):Ki(e)?E.createElement(ze,Hu({viewBox:t},e,{key:"label-implicit"})):null:null},lF=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var a=e.children,i=FM(e),u=ut(a,ze).map(function(c,f){return U.cloneElement(c,{viewBox:t||i,key:"label-".concat(f)})});if(!r)return u;var s=sF(e.label,t||i);return[s].concat(G9(u))};ze.parseViewBox=FM;ze.renderCallByParent=lF;var Gh,OW;function cF(){if(OW)return Gh;OW=1;function n(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}return Gh=n,Gh}var fF=cF();const dF=Zn(fF);function Cu(n){"@babel/helpers - typeof";return Cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cu(n)}var mF=["valueAccessor"],hF=["data","dataKey","clockWise","id","textBreakAll"];function vF(n){return IF(n)||yF(n)||bF(n)||gF()}function gF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bF(n,e){if(n){if(typeof n=="string")return Iv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Iv(n,e)}}function yF(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function IF(n){if(Array.isArray(n))return Iv(n)}function Iv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function ul(){return ul=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ul.apply(this,arguments)}function HW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function CW(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?HW(Object(t),!0).forEach(function(r){BF(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):HW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function BF(n,e,t){return e=xF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xF(n){var e=PF(n,"string");return Cu(e)=="symbol"?e:e+""}function PF(n,e){if(Cu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Cu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function NW(n,e){if(n==null)return{};var t=wF(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function wF(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}var WF=function(e){return Array.isArray(e.value)?dF(e.value):e.value};function lr(n){var e=n.valueAccessor,t=e===void 0?WF:e,r=NW(n,mF),a=r.data,i=r.dataKey,u=r.clockWise,s=r.id,c=r.textBreakAll,f=NW(r,hF);return!a||!a.length?null:E.createElement(Ln,{className:"recharts-label-list"},a.map(function(m,d){var v=En(i)?t(m,d):le(m&&m.payload,i),b=En(s)?{}:{id:"".concat(s,"-").concat(d)};return E.createElement(ze,ul({},Hn(m,!0),f,b,{parentViewBox:m.parentViewBox,value:v,textBreakAll:c,viewBox:ze.parseViewBox(En(u)?m:CW(CW({},m),{},{clockWise:u})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function SF(n,e){return n?n===!0?E.createElement(lr,{key:"labelList-implicit",data:e}):E.isValidElement(n)||kn(n)?E.createElement(lr,{key:"labelList-implicit",data:e,content:n}):Ki(n)?E.createElement(lr,ul({data:e},n,{key:"labelList-implicit"})):null:null}function MF(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n||!n.children&&t&&!n.label)return null;var r=n.children,a=ut(r,lr).map(function(u,s){return U.cloneElement(u,{data:e,key:"labelList-".concat(s)})});if(!t)return a;var i=SF(n.label,e);return[i].concat(vF(a))}lr.renderCallByParent=MF;function Nu(n){"@babel/helpers - typeof";return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nu(n)}function Bv(){return Bv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Bv.apply(this,arguments)}function RW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function kW(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?RW(Object(t),!0).forEach(function(r){AF(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):RW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function AF(n,e,t){return e=_F(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _F(n){var e=OF(n,"string");return Nu(e)=="symbol"?e:e+""}function OF(n,e){if(Nu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Nu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var HF=function(e,t){var r=ot(t-e),a=Math.min(Math.abs(t-e),359.999);return r*a},Ps=function(e){var t=e.cx,r=e.cy,a=e.radius,i=e.angle,u=e.sign,s=e.isExternal,c=e.cornerRadius,f=e.cornerIsExternal,m=c*(s?1:-1)+a,d=Math.asin(c/m)/pl,v=f?i:i+u*d,b=ie(t,r,m,v),B=ie(t,r,a,v),I=f?i-u*d:i,y=ie(t,r,m*Math.cos(d*pl),I);return{center:b,circleTangency:B,lineTangency:y,theta:d}},qM=function(e){var t=e.cx,r=e.cy,a=e.innerRadius,i=e.outerRadius,u=e.startAngle,s=e.endAngle,c=HF(u,s),f=u+c,m=ie(t,r,i,u),d=ie(t,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(u>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var b=ie(t,r,a,u),B=ie(t,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(u<=f),`,
            `).concat(b.x,",").concat(b.y," Z")}else v+="L ".concat(t,",").concat(r," Z");return v},CF=function(e){var t=e.cx,r=e.cy,a=e.innerRadius,i=e.outerRadius,u=e.cornerRadius,s=e.forceCornerRadius,c=e.cornerIsExternal,f=e.startAngle,m=e.endAngle,d=ot(m-f),v=Ps({cx:t,cy:r,radius:i,angle:f,sign:d,cornerRadius:u,cornerIsExternal:c}),b=v.circleTangency,B=v.lineTangency,I=v.theta,y=Ps({cx:t,cy:r,radius:i,angle:m,sign:-d,cornerRadius:u,cornerIsExternal:c}),W=y.circleTangency,S=y.lineTangency,M=y.theta,O=c?Math.abs(f-m):Math.abs(f-m)-I-M;if(O<0)return s?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(u,",").concat(u,",0,0,1,").concat(u*2,`,0
        a`).concat(u,",").concat(u,",0,0,1,").concat(-u*2,`,0
      `):qM({cx:t,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var P="M ".concat(B.x,",").concat(B.y,`
    A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(b.x,",").concat(b.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
    A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
  `);if(a>0){var A=Ps({cx:t,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:u,cornerIsExternal:c}),N=A.circleTangency,w=A.lineTangency,H=A.theta,k=Ps({cx:t,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:u,cornerIsExternal:c}),D=k.circleTangency,R=k.lineTangency,F=k.theta,V=c?Math.abs(f-m):Math.abs(f-m)-H-F;if(V<0&&u===0)return"".concat(P,"L").concat(t,",").concat(r,"Z");P+="L".concat(R.x,",").concat(R.y,`
      A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(D.x,",").concat(D.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(V>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(u,",").concat(u,",0,0,").concat(+(d<0),",").concat(w.x,",").concat(w.y,"Z")}else P+="L".concat(t,",").concat(r,"Z");return P},NF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},zM=function(e){var t=kW(kW({},NF),e),r=t.cx,a=t.cy,i=t.innerRadius,u=t.outerRadius,s=t.cornerRadius,c=t.forceCornerRadius,f=t.cornerIsExternal,m=t.startAngle,d=t.endAngle,v=t.className;if(u<i||m===d)return null;var b=jn("recharts-sector",v),B=u-i,I=it(s,B,0,!0),y;return I>0&&Math.abs(m-d)<360?y=CF({cx:r,cy:a,innerRadius:i,outerRadius:u,cornerRadius:Math.min(I,B/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:m,endAngle:d}):y=qM({cx:r,cy:a,innerRadius:i,outerRadius:u,startAngle:m,endAngle:d}),E.createElement("path",Bv({},Hn(t,!0),{className:b,d:y,role:"img"}))};function Ru(n){"@babel/helpers - typeof";return Ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ru(n)}function xv(){return xv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},xv.apply(this,arguments)}function EW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function TW(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?EW(Object(t),!0).forEach(function(r){RF(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):EW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function RF(n,e,t){return e=kF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kF(n){var e=EF(n,"string");return Ru(e)=="symbol"?e:e+""}function EF(n,e){if(Ru(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ru(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var DW={curveBasisClosed:tT,curveBasisOpen:rT,curveBasis:eT,curveBumpX:LE,curveBumpY:FE,curveLinearClosed:aT,curveLinear:Kl,curveMonotoneX:oT,curveMonotoneY:iT,curveNatural:pT,curveStep:uT,curveStepAfter:lT,curveStepBefore:sT},ws=function(e){return e.x===+e.x&&e.y===+e.y},Qp=function(e){return e.x},Yp=function(e){return e.y},TF=function(e,t){if(kn(e))return e;var r="curve".concat(Vl(e));return(r==="curveMonotone"||r==="curveBump")&&t?DW["".concat(r).concat(t==="vertical"?"Y":"X")]:DW[r]||Kl},DF=function(e){var t=e.type,r=t===void 0?"linear":t,a=e.points,i=a===void 0?[]:a,u=e.baseLine,s=e.layout,c=e.connectNulls,f=c===void 0?!1:c,m=TF(r,s),d=f?i.filter(function(I){return ws(I)}):i,v;if(Array.isArray(u)){var b=f?u.filter(function(I){return ws(I)}):u,B=d.map(function(I,y){return TW(TW({},I),{},{base:b[y]})});return s==="vertical"?v=hs().y(Yp).x1(Qp).x0(function(I){return I.base.x}):v=hs().x(Qp).y1(Yp).y0(function(I){return I.base.y}),v.defined(ws).curve(m),v(B)}return s==="vertical"&&fn(u)?v=hs().y(Yp).x1(Qp).x0(u):fn(u)?v=hs().x(Qp).y1(Yp).y0(u):v=q5().x(Qp).y(Yp),v.defined(ws).curve(m),v(d)},Ca=function(e){var t=e.className,r=e.points,a=e.path,i=e.pathRef;if((!r||!r.length)&&!a)return null;var u=r&&r.length?DF(e):a;return E.createElement("path",xv({},Hn(e,!1),ks(e),{className:jn("recharts-curve",t),d:u,ref:i}))},Kh={exports:{}},Qh,jW;function jF(){if(jW)return Qh;jW=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qh=n,Qh}var Yh,$W;function $F(){if($W)return Yh;$W=1;var n=jF();function e(){}function t(){}return t.resetWarningCache=e,Yh=function(){function r(u,s,c,f,m,d){if(d!==n){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return i.PropTypes=i,i},Yh}var LW;function LF(){return LW||(LW=1,Kh.exports=$F()()),Kh.exports}var FF=LF();const Xn=Zn(FF),{getOwnPropertyNames:qF,getOwnPropertySymbols:zF}=Object,{hasOwnProperty:UF}=Object.prototype;function Xh(n,e){return function(r,a,i){return n(r,a,i)&&e(r,a,i)}}function Ws(n){return function(t,r,a){if(!t||!r||typeof t!="object"||typeof r!="object")return n(t,r,a);const{cache:i}=a,u=i.get(t),s=i.get(r);if(u&&s)return u===r&&s===t;i.set(t,r),i.set(r,t);const c=n(t,r,a);return i.delete(t),i.delete(r),c}}function VF(n){return n!=null?n[Symbol.toStringTag]:void 0}function FW(n){return qF(n).concat(zF(n))}const GF=Object.hasOwn||((n,e)=>UF.call(n,e));function wo(n,e){return n===e||!n&&!e&&n!==n&&e!==e}const KF="__v",QF="__o",YF="_owner",{getOwnPropertyDescriptor:qW,keys:zW}=Object;function XF(n,e){return n.byteLength===e.byteLength&&sl(new Uint8Array(n),new Uint8Array(e))}function ZF(n,e,t){let r=n.length;if(e.length!==r)return!1;for(;r-- >0;)if(!t.equals(n[r],e[r],r,r,n,e,t))return!1;return!0}function JF(n,e){return n.byteLength===e.byteLength&&sl(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}function nq(n,e){return wo(n.getTime(),e.getTime())}function eq(n,e){return n.name===e.name&&n.message===e.message&&n.cause===e.cause&&n.stack===e.stack}function tq(n,e){return n===e}function UW(n,e,t){const r=n.size;if(r!==e.size)return!1;if(!r)return!0;const a=new Array(r),i=n.entries();let u,s,c=0;for(;(u=i.next())&&!u.done;){const f=e.entries();let m=!1,d=0;for(;(s=f.next())&&!s.done;){if(a[d]){d++;continue}const v=u.value,b=s.value;if(t.equals(v[0],b[0],c,d,n,e,t)&&t.equals(v[1],b[1],v[0],b[0],n,e,t)){m=a[d]=!0;break}d++}if(!m)return!1;c++}return!0}const rq=wo;function aq(n,e,t){const r=zW(n);let a=r.length;if(zW(e).length!==a)return!1;for(;a-- >0;)if(!UM(n,e,t,r[a]))return!1;return!0}function Xp(n,e,t){const r=FW(n);let a=r.length;if(FW(e).length!==a)return!1;let i,u,s;for(;a-- >0;)if(i=r[a],!UM(n,e,t,i)||(u=qW(n,i),s=qW(e,i),(u||s)&&(!u||!s||u.configurable!==s.configurable||u.enumerable!==s.enumerable||u.writable!==s.writable)))return!1;return!0}function oq(n,e){return wo(n.valueOf(),e.valueOf())}function iq(n,e){return n.source===e.source&&n.flags===e.flags}function VW(n,e,t){const r=n.size;if(r!==e.size)return!1;if(!r)return!0;const a=new Array(r),i=n.values();let u,s;for(;(u=i.next())&&!u.done;){const c=e.values();let f=!1,m=0;for(;(s=c.next())&&!s.done;){if(!a[m]&&t.equals(u.value,s.value,u.value,s.value,n,e,t)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function sl(n,e){let t=n.byteLength;if(e.byteLength!==t||n.byteOffset!==e.byteOffset)return!1;for(;t-- >0;)if(n[t]!==e[t])return!1;return!0}function pq(n,e){return n.hostname===e.hostname&&n.pathname===e.pathname&&n.protocol===e.protocol&&n.port===e.port&&n.hash===e.hash&&n.username===e.username&&n.password===e.password}function UM(n,e,t,r){return(r===YF||r===QF||r===KF)&&(n.$$typeof||e.$$typeof)?!0:GF(e,r)&&t.equals(n[r],e[r],r,r,n,e,t)}const uq="[object ArrayBuffer]",sq="[object Arguments]",lq="[object Boolean]",cq="[object DataView]",fq="[object Date]",dq="[object Error]",mq="[object Map]",hq="[object Number]",vq="[object Object]",gq="[object RegExp]",bq="[object Set]",yq="[object String]",Iq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},Bq="[object URL]",xq=Object.prototype.toString;function Pq({areArrayBuffersEqual:n,areArraysEqual:e,areDataViewsEqual:t,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:u,areNumbersEqual:s,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:b,unknownTagComparators:B}){return function(y,W,S){if(y===W)return!0;if(y==null||W==null)return!1;const M=typeof y;if(M!==typeof W)return!1;if(M!=="object")return M==="number"?s(y,W,S):M==="function"?i(y,W,S):!1;const O=y.constructor;if(O!==W.constructor)return!1;if(O===Object)return c(y,W,S);if(Array.isArray(y))return e(y,W,S);if(O===Date)return r(y,W,S);if(O===RegExp)return m(y,W,S);if(O===Map)return u(y,W,S);if(O===Set)return d(y,W,S);const P=xq.call(y);if(P===fq)return r(y,W,S);if(P===gq)return m(y,W,S);if(P===mq)return u(y,W,S);if(P===bq)return d(y,W,S);if(P===vq)return typeof y.then!="function"&&typeof W.then!="function"&&c(y,W,S);if(P===Bq)return b(y,W,S);if(P===dq)return a(y,W,S);if(P===sq)return c(y,W,S);if(Iq[P])return v(y,W,S);if(P===uq)return n(y,W,S);if(P===cq)return t(y,W,S);if(P===lq||P===hq||P===yq)return f(y,W,S);if(B){let A=B[P];if(!A){const N=VF(y);N&&(A=B[N])}if(A)return A(y,W,S)}return!1}}function wq({circular:n,createCustomConfig:e,strict:t}){let r={areArrayBuffersEqual:XF,areArraysEqual:t?Xp:ZF,areDataViewsEqual:JF,areDatesEqual:nq,areErrorsEqual:eq,areFunctionsEqual:tq,areMapsEqual:t?Xh(UW,Xp):UW,areNumbersEqual:rq,areObjectsEqual:t?Xp:aq,arePrimitiveWrappersEqual:oq,areRegExpsEqual:iq,areSetsEqual:t?Xh(VW,Xp):VW,areTypedArraysEqual:t?Xh(sl,Xp):sl,areUrlsEqual:pq,unknownTagComparators:void 0};if(e&&(r=Object.assign({},r,e(r))),n){const a=Ws(r.areArraysEqual),i=Ws(r.areMapsEqual),u=Ws(r.areObjectsEqual),s=Ws(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:u,areSetsEqual:s})}return r}function Wq(n){return function(e,t,r,a,i,u,s){return n(e,t,s)}}function Sq({circular:n,comparator:e,createState:t,equals:r,strict:a}){if(t)return function(s,c){const{cache:f=n?new WeakMap:void 0,meta:m}=t();return e(s,c,{cache:f,equals:r,meta:m,strict:a})};if(n)return function(s,c){return e(s,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(s,c){return e(s,c,i)}}const Mq=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>wo});La({strict:!0,createInternalComparator:()=>wo});La({circular:!0,createInternalComparator:()=>wo});La({circular:!0,createInternalComparator:()=>wo,strict:!0});function La(n={}){const{circular:e=!1,createInternalComparator:t,createState:r,strict:a=!1}=n,i=wq(n),u=Pq(i),s=t?t(u):Wq(u);return Sq({circular:e,comparator:u,createState:r,equals:s,strict:a})}function Aq(n){typeof requestAnimationFrame<"u"&&requestAnimationFrame(n)}function GW(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=-1,r=function a(i){t<0&&(t=i),i-t>e?(n(i),t=-1):Aq(a)};requestAnimationFrame(r)}function Pv(n){"@babel/helpers - typeof";return Pv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pv(n)}function _q(n){return Nq(n)||Cq(n)||Hq(n)||Oq()}function Oq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hq(n,e){if(n){if(typeof n=="string")return KW(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return KW(n,e)}}function KW(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Cq(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Nq(n){if(Array.isArray(n))return n}function Rq(){var n={},e=function(){return null},t=!1,r=function a(i){if(!t){if(Array.isArray(i)){if(!i.length)return;var u=i,s=_q(u),c=s[0],f=s.slice(1);if(typeof c=="number"){GW(a.bind(null,f),c);return}a(c),GW(a.bind(null,f));return}Pv(i)==="object"&&(n=i,e(n)),typeof i=="function"&&i()}};return{stop:function(){t=!0},start:function(i){t=!1,r(i)},subscribe:function(i){return e=i,function(){e=function(){return null}}}}}function ku(n){"@babel/helpers - typeof";return ku=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ku(n)}function QW(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function YW(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?QW(Object(t),!0).forEach(function(r){VM(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):QW(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function VM(n,e,t){return e=kq(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kq(n){var e=Eq(n,"string");return ku(e)==="symbol"?e:String(e)}function Eq(n,e){if(ku(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ku(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Tq=function(e,t){return[Object.keys(e),Object.keys(t)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},Dq=function(e){return e},jq=function(e){return e.replace(/([A-Z])/g,function(t){return"-".concat(t.toLowerCase())})},iu=function(e,t){return Object.keys(t).reduce(function(r,a){return YW(YW({},r),{},VM({},a,e(a,t[a])))},{})},XW=function(e,t,r){return e.map(function(a){return"".concat(jq(a)," ").concat(t,"ms ").concat(r)}).join(",")};function $q(n,e){return qq(n)||Fq(n,e)||GM(n,e)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fq(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function qq(n){if(Array.isArray(n))return n}function zq(n){return Gq(n)||Vq(n)||GM(n)||Uq()}function Uq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GM(n,e){if(n){if(typeof n=="string")return wv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wv(n,e)}}function Vq(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Gq(n){if(Array.isArray(n))return wv(n)}function wv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var ll=1e-4,KM=function(e,t){return[0,3*e,3*t-6*e,3*e-3*t+1]},QM=function(e,t){return e.map(function(r,a){return r*Math.pow(t,a)}).reduce(function(r,a){return r+a})},ZW=function(e,t){return function(r){var a=KM(e,t);return QM(a,r)}},Kq=function(e,t){return function(r){var a=KM(e,t),i=[].concat(zq(a.map(function(u,s){return u*s}).slice(1)),[0]);return QM(i,r)}},JW=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],i=t[1],u=t[2],s=t[3];if(t.length===1)switch(t[0]){case"linear":a=0,i=0,u=1,s=1;break;case"ease":a=.25,i=.1,u=.25,s=1;break;case"ease-in":a=.42,i=0,u=1,s=1;break;case"ease-out":a=.42,i=0,u=.58,s=1;break;case"ease-in-out":a=0,i=0,u=.58,s=1;break;default:{var c=t[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(y){return parseFloat(y)}),m=$q(f,4);a=m[0],i=m[1],u=m[2],s=m[3]}}}var d=ZW(a,u),v=ZW(i,s),b=Kq(a,u),B=function(W){return W>1?1:W<0?0:W},I=function(W){for(var S=W>1?1:W,M=S,O=0;O<8;++O){var P=d(M)-S,A=b(M);if(Math.abs(P-S)<ll||A<ll)return v(M);M=B(M-P/A)}return v(M)};return I.isStepper=!1,I},Qq=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.stiff,r=t===void 0?100:t,a=e.damping,i=a===void 0?8:a,u=e.dt,s=u===void 0?17:u,c=function(m,d,v){var b=-(m-d)*r,B=v*i,I=v+(b-B)*s/1e3,y=v*s/1e3+m;return Math.abs(y-d)<ll&&Math.abs(I)<ll?[d,0]:[y,I]};return c.isStepper=!0,c.dt=s,c},Yq=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return JW(a);case"spring":return Qq();default:if(a.split("(")[0]==="cubic-bezier")return JW(a)}return typeof a=="function"?a:null};function Eu(n){"@babel/helpers - typeof";return Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eu(n)}function n4(n){return Jq(n)||Zq(n)||YM(n)||Xq()}function Xq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zq(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Jq(n){if(Array.isArray(n))return Sv(n)}function e4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Ke(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?e4(Object(t),!0).forEach(function(r){Wv(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):e4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Wv(n,e,t){return e=nz(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function nz(n){var e=ez(n,"string");return Eu(e)==="symbol"?e:String(e)}function ez(n,e){if(Eu(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Eu(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function tz(n,e){return oz(n)||az(n,e)||YM(n,e)||rz()}function rz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YM(n,e){if(n){if(typeof n=="string")return Sv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sv(n,e)}}function Sv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function az(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function oz(n){if(Array.isArray(n))return n}var cl=function(e,t,r){return e+(t-e)*r},Mv=function(e){var t=e.from,r=e.to;return t!==r},iz=function n(e,t,r){var a=iu(function(i,u){if(Mv(u)){var s=e(u.from,u.to,u.velocity),c=tz(s,2),f=c[0],m=c[1];return Ke(Ke({},u),{},{from:f,velocity:m})}return u},t);return r<1?iu(function(i,u){return Mv(u)?Ke(Ke({},u),{},{velocity:cl(u.velocity,a[i].velocity,r),from:cl(u.from,a[i].from,r)}):u},t):n(e,a,r-1)};const pz=(function(n,e,t,r,a){var i=Tq(n,e),u=i.reduce(function(y,W){return Ke(Ke({},y),{},Wv({},W,[n[W],e[W]]))},{}),s=i.reduce(function(y,W){return Ke(Ke({},y),{},Wv({},W,{from:n[W],velocity:0,to:e[W]}))},{}),c=-1,f,m,d=function(){return null},v=function(){return iu(function(W,S){return S.from},s)},b=function(){return!Object.values(s).filter(Mv).length},B=function(W){f||(f=W);var S=W-f,M=S/t.dt;s=iz(t,s,M),a(Ke(Ke(Ke({},n),e),v())),f=W,b()||(c=requestAnimationFrame(d))},I=function(W){m||(m=W);var S=(W-m)/r,M=iu(function(P,A){return cl.apply(void 0,n4(A).concat([t(S)]))},u);if(a(Ke(Ke(Ke({},n),e),M)),S<1)c=requestAnimationFrame(d);else{var O=iu(function(P,A){return cl.apply(void 0,n4(A).concat([t(1)]))},u);a(Ke(Ke(Ke({},n),e),O))}};return d=t.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function wi(n){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wi(n)}var uz=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function sz(n,e){if(n==null)return{};var t=lz(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function lz(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function Zh(n){return mz(n)||dz(n)||fz(n)||cz()}function cz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fz(n,e){if(n){if(typeof n=="string")return Av(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Av(n,e)}}function dz(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function mz(n){if(Array.isArray(n))return Av(n)}function Av(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function t4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ar(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?t4(Object(t),!0).forEach(function(r){tu(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):t4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function tu(n,e,t){return e=XM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hz(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function vz(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,XM(r.key),r)}}function gz(n,e,t){return e&&vz(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function XM(n){var e=bz(n,"string");return wi(e)==="symbol"?e:String(e)}function bz(n,e){if(wi(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(wi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function yz(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&_v(n,e)}function _v(n,e){return _v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},_v(n,e)}function Iz(n){var e=Bz();return function(){var r=fl(n),a;if(e){var i=fl(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Ov(this,a)}}function Ov(n,e){if(e&&(wi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Hv(n)}function Hv(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Bz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fl(n){return fl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},fl(n)}var Qt=(function(n){yz(t,n);var e=Iz(t);function t(r,a){var i;hz(this,t),i=e.call(this,r,a);var u=i.props,s=u.isActive,c=u.attributeName,f=u.from,m=u.to,d=u.steps,v=u.children,b=u.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Hv(i)),i.changeStyle=i.changeStyle.bind(Hv(i)),!s||b<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Ov(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Ov(i);i.state={style:c?tu({},c,f):f}}else i.state={style:{}};return i}return gz(t,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,u=a.canBegin;this.mounted=!0,!(!i||!u)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,u=i.isActive,s=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(s){if(!u){var b={style:c?tu({},c,m):m};this.state&&v&&(c&&v[c]!==m||!c&&v!==m)&&this.setState(b);return}if(!(Mq(a.to,m)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var y={style:c?tu({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(y)}this.runAnimation(ar(ar({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,u=a.from,s=a.to,c=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,b=pz(u,s,Yq(f),c,this.changeStyle),B=function(){i.stopJSAnimation=b()};this.manager.start([v,m,B,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,u=a.steps,s=a.begin,c=a.onAnimationStart,f=u[0],m=f.style,d=f.duration,v=d===void 0?0:d,b=function(I,y,W){if(W===0)return I;var S=y.duration,M=y.easing,O=M===void 0?"ease":M,P=y.style,A=y.properties,N=y.onAnimationEnd,w=W>0?u[W-1]:y,H=A||Object.keys(P);if(typeof O=="function"||O==="spring")return[].concat(Zh(I),[i.runJSAnimation.bind(i,{from:w.style,to:P,duration:S,easing:O}),S]);var k=XW(H,S,O),D=ar(ar(ar({},w.style),P),{},{transition:k});return[].concat(Zh(I),[D,S,N]).filter(Dq)};return this.manager.start([c].concat(Zh(u.reduce(b,[m,Math.max(v,s)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=Rq());var i=a.begin,u=a.duration,s=a.attributeName,c=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,b=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof b=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=s?tu({},s,c):c,y=XW(Object.keys(I),u,f);B.start([m,i,ar(ar({},I),{},{transition:y}),u,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var u=a.duration;a.attributeName,a.easing;var s=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=sz(a,uz),f=U.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!s||f===0||u<=0)return i;var d=function(b){var B=b.props,I=B.style,y=I===void 0?{}:I,W=B.className,S=U.cloneElement(b,ar(ar({},c),{},{style:ar(ar({},y),m),className:W}));return S};return f===1?d(U.Children.only(i)):E.createElement("div",null,U.Children.map(i,function(v){return d(v)}))}}]),t})(U.PureComponent);Qt.displayName="Animate";Qt.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Qt.propTypes={from:Xn.oneOfType([Xn.object,Xn.string]),to:Xn.oneOfType([Xn.object,Xn.string]),attributeName:Xn.string,duration:Xn.number,begin:Xn.number,easing:Xn.oneOfType([Xn.string,Xn.func]),steps:Xn.arrayOf(Xn.shape({duration:Xn.number.isRequired,style:Xn.object.isRequired,easing:Xn.oneOfType([Xn.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Xn.func]),properties:Xn.arrayOf("string"),onAnimationEnd:Xn.func})),children:Xn.oneOfType([Xn.node,Xn.func]),isActive:Xn.bool,canBegin:Xn.bool,onAnimationEnd:Xn.func,shouldReAnimate:Xn.bool,onAnimationStart:Xn.func,onAnimationReStart:Xn.func};function Tu(n){"@babel/helpers - typeof";return Tu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tu(n)}function dl(){return dl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},dl.apply(this,arguments)}function xz(n,e){return Sz(n)||Wz(n,e)||wz(n,e)||Pz()}function Pz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wz(n,e){if(n){if(typeof n=="string")return r4(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r4(n,e)}}function r4(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Wz(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function Sz(n){if(Array.isArray(n))return n}function a4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function o4(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?a4(Object(t),!0).forEach(function(r){Mz(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Mz(n,e,t){return e=Az(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Az(n){var e=_z(n,"string");return Tu(e)=="symbol"?e:e+""}function _z(n,e){if(Tu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Tu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var i4=function(e,t,r,a,i){var u=Math.min(Math.abs(r)/2,Math.abs(a)/2),s=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(u>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,b=4;v<b;v++)d[v]=i[v]>u?u:i[v];m="M".concat(e,",").concat(t+s*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(e+c*d[0],",").concat(t)),m+="L ".concat(e+r-c*d[1],",").concat(t),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(e+r,",").concat(t+s*d[1])),m+="L ".concat(e+r,",").concat(t+a-s*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(e+r-c*d[2],",").concat(t+a)),m+="L ".concat(e+c*d[3],",").concat(t+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(e,",").concat(t+a-s*d[3])),m+="Z"}else if(u>0&&i===+i&&i>0){var B=Math.min(u,i);m="M ".concat(e,",").concat(t+s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(e+c*B,",").concat(t,`
            L `).concat(e+r-c*B,",").concat(t,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(e+r,",").concat(t+s*B,`
            L `).concat(e+r,",").concat(t+a-s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(e+r-c*B,",").concat(t+a,`
            L `).concat(e+c*B,",").concat(t+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(e,",").concat(t+a-s*B," Z")}else m="M ".concat(e,",").concat(t," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},Oz=function(e,t){if(!e||!t)return!1;var r=e.x,a=e.y,i=t.x,u=t.y,s=t.width,c=t.height;if(Math.abs(s)>0&&Math.abs(c)>0){var f=Math.min(i,i+s),m=Math.max(i,i+s),d=Math.min(u,u+c),v=Math.max(u,u+c);return r>=f&&r<=m&&a>=d&&a<=v}return!1},Hz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},lb=function(e){var t=o4(o4({},Hz),e),r=U.useRef(),a=U.useState(-1),i=xz(a,2),u=i[0],s=i[1];U.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&s(O)}catch{}},[]);var c=t.x,f=t.y,m=t.width,d=t.height,v=t.radius,b=t.className,B=t.animationEasing,I=t.animationDuration,y=t.animationBegin,W=t.isAnimationActive,S=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var M=jn("recharts-rectangle",b);return S?E.createElement(Qt,{canBegin:u>0,from:{width:m,height:d,x:c,y:f},to:{width:m,height:d,x:c,y:f},duration:I,animationEasing:B,isActive:S},function(O){var P=O.width,A=O.height,N=O.x,w=O.y;return E.createElement(Qt,{canBegin:u>0,from:"0px ".concat(u===-1?1:u,"px"),to:"".concat(u,"px 0px"),attributeName:"strokeDasharray",begin:y,duration:I,isActive:W,easing:B},E.createElement("path",dl({},Hn(t,!0),{className:M,d:i4(N,w,P,A,v),ref:r})))}):E.createElement("path",dl({},Hn(t,!0),{className:M,d:i4(c,f,m,d,v)}))},Cz=["points","className","baseLinePoints","connectNulls"];function oi(){return oi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},oi.apply(this,arguments)}function Nz(n,e){if(n==null)return{};var t=Rz(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Rz(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function p4(n){return Dz(n)||Tz(n)||Ez(n)||kz()}function kz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ez(n,e){if(n){if(typeof n=="string")return Cv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cv(n,e)}}function Tz(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Dz(n){if(Array.isArray(n))return Cv(n)}function Cv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var u4=function(e){return e&&e.x===+e.x&&e.y===+e.y},jz=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[[]];return e.forEach(function(r){u4(r)?t[t.length-1].push(r):t[t.length-1].length>0&&t.push([])}),u4(e[0])&&t[t.length-1].push(e[0]),t[t.length-1].length<=0&&(t=t.slice(0,-1)),t},pu=function(e,t){var r=jz(e);t&&(r=[r.reduce(function(i,u){return[].concat(p4(i),p4(u))},[])]);var a=r.map(function(i){return i.reduce(function(u,s,c){return"".concat(u).concat(c===0?"M":"L").concat(s.x,",").concat(s.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},$z=function(e,t,r){var a=pu(e,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(pu(t.reverse(),r).slice(1))},Lz=function(e){var t=e.points,r=e.className,a=e.baseLinePoints,i=e.connectNulls,u=Nz(e,Cz);if(!t||!t.length)return null;var s=jn("recharts-polygon",r);if(a&&a.length){var c=u.stroke&&u.stroke!=="none",f=$z(t,a,i);return E.createElement("g",{className:s},E.createElement("path",oi({},Hn(u,!0),{fill:f.slice(-1)==="Z"?u.fill:"none",stroke:"none",d:f})),c?E.createElement("path",oi({},Hn(u,!0),{fill:"none",d:pu(t,i)})):null,c?E.createElement("path",oi({},Hn(u,!0),{fill:"none",d:pu(a,i)})):null)}var m=pu(t,i);return E.createElement("path",oi({},Hn(u,!0),{fill:m.slice(-1)==="Z"?u.fill:"none",className:s,d:m}))};function Nv(){return Nv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Nv.apply(this,arguments)}var t0=function(e){var t=e.cx,r=e.cy,a=e.r,i=e.className,u=jn("recharts-dot",i);return t===+t&&r===+r&&a===+a?E.createElement("circle",Nv({},Hn(e,!1),ks(e),{className:u,cx:t,cy:r,r:a})):null};function Du(n){"@babel/helpers - typeof";return Du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Du(n)}var Fz=["x","y","top","left","width","height","className"];function Rv(){return Rv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Rv.apply(this,arguments)}function s4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function qz(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?s4(Object(t),!0).forEach(function(r){zz(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zz(n,e,t){return e=Uz(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Uz(n){var e=Vz(n,"string");return Du(e)=="symbol"?e:e+""}function Vz(n,e){if(Du(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Du(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Gz(n,e){if(n==null)return{};var t=Kz(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Kz(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}var Qz=function(e,t,r,a,i,u){return"M".concat(e,",").concat(i,"v").concat(a,"M").concat(u,",").concat(t,"h").concat(r)},Yz=function(e){var t=e.x,r=t===void 0?0:t,a=e.y,i=a===void 0?0:a,u=e.top,s=u===void 0?0:u,c=e.left,f=c===void 0?0:c,m=e.width,d=m===void 0?0:m,v=e.height,b=v===void 0?0:v,B=e.className,I=Gz(e,Fz),y=qz({x:r,y:i,top:s,left:f,width:d,height:b},I);return!fn(r)||!fn(i)||!fn(d)||!fn(b)||!fn(s)||!fn(f)?null:E.createElement("path",Rv({},Hn(y,!0),{className:jn("recharts-cross",B),d:Qz(r,i,d,b,s,f)}))},Jh,l4;function Xz(){if(l4)return Jh;l4=1;var n=i2(),e=fM(),t=Mr();function r(a,i){return a&&a.length?n(a,t(i,2),e):void 0}return Jh=r,Jh}var Zz=Xz();const Jz=Zn(Zz);var n6,c4;function nU(){if(c4)return n6;c4=1;var n=i2(),e=Mr(),t=dM();function r(a,i){return a&&a.length?n(a,e(i,2),t):void 0}return n6=r,n6}var eU=nU();const tU=Zn(eU);var rU=["cx","cy","angle","ticks","axisLine"],aU=["ticks","tick","angle","tickFormatter","stroke"];function Wi(n){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wi(n)}function uu(){return uu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},uu.apply(this,arguments)}function f4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ro(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?f4(Object(t),!0).forEach(function(r){l2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function d4(n,e){if(n==null)return{};var t=oU(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function oU(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function iU(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function m4(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,JM(r.key),r)}}function pU(n,e,t){return e&&m4(n.prototype,e),t&&m4(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function uU(n,e,t){return e=ml(e),sU(n,ZM()?Reflect.construct(e,t||[],ml(n).constructor):e.apply(n,t))}function sU(n,e){if(e&&(Wi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lU(n)}function lU(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ZM(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ZM=function(){return!!n})()}function ml(n){return ml=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ml(n)}function cU(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&kv(n,e)}function kv(n,e){return kv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},kv(n,e)}function l2(n,e,t){return e=JM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function JM(n){var e=fU(n,"string");return Wi(e)=="symbol"?e:e+""}function fU(n,e){if(Wi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var c2=(function(n){function e(){return iU(this,e),uU(this,e,arguments)}return cU(e,n),pU(e,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,u=i.angle,s=i.cx,c=i.cy;return ie(s,c,a,u)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,u=r.angle,s=r.ticks,c=Jz(s,function(m){return m.coordinate||0}),f=tU(s,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:u,endAngle:u,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,u=r.angle,s=r.ticks,c=r.axisLine,f=d4(r,rU),m=s.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=ie(a,i,m[0],u),v=ie(a,i,m[1],u),b=ro(ro(ro({},Hn(f,!1)),{},{fill:"none"},Hn(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return E.createElement("line",uu({className:"recharts-polar-radius-axis-line"},b))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,u=a.tick,s=a.angle,c=a.tickFormatter,f=a.stroke,m=d4(a,aU),d=this.getTickTextAnchor(),v=Hn(m,!1),b=Hn(u,!1),B=i.map(function(I,y){var W=r.getTickValueCoord(I),S=ro(ro(ro(ro({textAnchor:d,transform:"rotate(".concat(90-s,", ").concat(W.x,", ").concat(W.y,")")},v),{},{stroke:"none",fill:f},b),{},{index:y},W),{},{payload:I});return E.createElement(Ln,uu({className:jn("recharts-polar-radius-axis-tick",LM(u)),key:"tick-".concat(I.coordinate)},Ra(r.props,I,y)),e.renderTickItem(u,S,c?c(I.value,y):I.value))});return E.createElement(Ln,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,u=r.tick;return!a||!a.length?null:E.createElement(Ln,{className:jn("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),u&&this.renderTicks(),ze.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var u;return E.isValidElement(r)?u=E.cloneElement(r,a):kn(r)?u=r(a):u=E.createElement(go,uu({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),u}}])})(U.PureComponent);l2(c2,"displayName","PolarRadiusAxis");l2(c2,"axisType","radiusAxis");l2(c2,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Si(n){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Si(n)}function uo(){return uo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},uo.apply(this,arguments)}function h4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ao(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?h4(Object(t),!0).forEach(function(r){f2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function dU(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function v4(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,eA(r.key),r)}}function mU(n,e,t){return e&&v4(n.prototype,e),t&&v4(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function hU(n,e,t){return e=hl(e),vU(n,nA()?Reflect.construct(e,t||[],hl(n).constructor):e.apply(n,t))}function vU(n,e){if(e&&(Si(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gU(n)}function gU(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function nA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nA=function(){return!!n})()}function hl(n){return hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},hl(n)}function bU(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ev(n,e)}function Ev(n,e){return Ev=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ev(n,e)}function f2(n,e,t){return e=eA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function eA(n){var e=yU(n,"string");return Si(e)=="symbol"?e:e+""}function yU(n,e){if(Si(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var IU=Math.PI/180,g4=1e-5,d2=(function(n){function e(){return dU(this,e),hU(this,e,arguments)}return bU(e,n),mU(e,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,u=a.cy,s=a.radius,c=a.orientation,f=a.tickSize,m=f||8,d=ie(i,u,s,r.coordinate),v=ie(i,u,s+(c==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*IU),u;return i>g4?u=a==="outer"?"start":"end":i<-g4?u=a==="outer"?"end":"start":u="middle",u}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,u=r.radius,s=r.axisLine,c=r.axisLineType,f=ao(ao({},Hn(this.props,!1)),{},{fill:"none"},Hn(s,!1));if(c==="circle")return E.createElement(t0,uo({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:u}));var m=this.props.ticks,d=m.map(function(v){return ie(a,i,u,v.coordinate)});return E.createElement(Lz,uo({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,u=a.tick,s=a.tickLine,c=a.tickFormatter,f=a.stroke,m=Hn(this.props,!1),d=Hn(u,!1),v=ao(ao({},m),{},{fill:"none"},Hn(s,!1)),b=i.map(function(B,I){var y=r.getTickLineCoord(B),W=r.getTickTextAnchor(B),S=ao(ao(ao({textAnchor:W},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:y.x2,y:y.y2});return E.createElement(Ln,uo({className:jn("recharts-polar-angle-axis-tick",LM(u)),key:"tick-".concat(B.coordinate)},Ra(r.props,B,I)),s&&E.createElement("line",uo({className:"recharts-polar-angle-axis-tick-line"},v,y)),u&&e.renderTickItem(u,S,c?c(B.value,I):B.value))});return E.createElement(Ln,{className:"recharts-polar-angle-axis-ticks"},b)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,u=r.axisLine;return i<=0||!a||!a.length?null:E.createElement(Ln,{className:jn("recharts-polar-angle-axis",this.props.className)},u&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var u;return E.isValidElement(r)?u=E.cloneElement(r,a):kn(r)?u=r(a):u=E.createElement(go,uo({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),u}}])})(U.PureComponent);f2(d2,"displayName","PolarAngleAxis");f2(d2,"axisType","angleAxis");f2(d2,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var e6,b4;function BU(){if(b4)return e6;b4=1;var n=fS(),e=n(Object.getPrototypeOf,Object);return e6=e,e6}var t6,y4;function xU(){if(y4)return t6;y4=1;var n=Yr(),e=BU(),t=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,u=a.toString,s=i.hasOwnProperty,c=u.call(Object);function f(m){if(!t(m)||n(m)!=r)return!1;var d=e(m);if(d===null)return!0;var v=s.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&u.call(v)==c}return t6=f,t6}var PU=xU();const wU=Zn(PU);var r6,I4;function WU(){if(I4)return r6;I4=1;var n=Yr(),e=Xr(),t="[object Boolean]";function r(a){return a===!0||a===!1||e(a)&&n(a)==t}return r6=r,r6}var SU=WU();const MU=Zn(SU);function ju(n){"@babel/helpers - typeof";return ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ju(n)}function vl(){return vl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},vl.apply(this,arguments)}function AU(n,e){return CU(n)||HU(n,e)||OU(n,e)||_U()}function _U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OU(n,e){if(n){if(typeof n=="string")return B4(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B4(n,e)}}function B4(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function HU(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function CU(n){if(Array.isArray(n))return n}function x4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function P4(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?x4(Object(t),!0).forEach(function(r){NU(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function NU(n,e,t){return e=RU(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function RU(n){var e=kU(n,"string");return ju(e)=="symbol"?e:e+""}function kU(n,e){if(ju(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ju(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var w4=function(e,t,r,a,i){var u=r-a,s;return s="M ".concat(e,",").concat(t),s+="L ".concat(e+r,",").concat(t),s+="L ".concat(e+r-u/2,",").concat(t+i),s+="L ".concat(e+r-u/2-a,",").concat(t+i),s+="L ".concat(e,",").concat(t," Z"),s},EU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},TU=function(e){var t=P4(P4({},EU),e),r=U.useRef(),a=U.useState(-1),i=AU(a,2),u=i[0],s=i[1];U.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var M=r.current.getTotalLength();M&&s(M)}catch{}},[]);var c=t.x,f=t.y,m=t.upperWidth,d=t.lowerWidth,v=t.height,b=t.className,B=t.animationEasing,I=t.animationDuration,y=t.animationBegin,W=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var S=jn("recharts-trapezoid",b);return W?E.createElement(Qt,{canBegin:u>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:B,isActive:W},function(M){var O=M.upperWidth,P=M.lowerWidth,A=M.height,N=M.x,w=M.y;return E.createElement(Qt,{canBegin:u>0,from:"0px ".concat(u===-1?1:u,"px"),to:"".concat(u,"px 0px"),attributeName:"strokeDasharray",begin:y,duration:I,easing:B},E.createElement("path",vl({},Hn(t,!0),{className:S,d:w4(N,w,O,P,A),ref:r})))}):E.createElement("g",null,E.createElement("path",vl({},Hn(t,!0),{className:S,d:w4(c,f,m,d,v)})))},DU=["option","shapeType","propTransformer","activeClassName","isActive"];function $u(n){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$u(n)}function jU(n,e){if(n==null)return{};var t=$U(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function $U(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function W4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function gl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?W4(Object(t),!0).forEach(function(r){LU(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function LU(n,e,t){return e=FU(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function FU(n){var e=qU(n,"string");return $u(e)=="symbol"?e:e+""}function qU(n,e){if($u(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if($u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function zU(n,e){return gl(gl({},e),n)}function UU(n,e){return n==="symbols"}function S4(n){var e=n.shapeType,t=n.elementProps;switch(e){case"rectangle":return E.createElement(lb,t);case"trapezoid":return E.createElement(TU,t);case"sector":return E.createElement(zM,t);case"symbols":if(UU(e))return E.createElement(Yl,t);break;default:return null}}function VU(n){return U.isValidElement(n)?n.props:n}function bl(n){var e=n.option,t=n.shapeType,r=n.propTransformer,a=r===void 0?zU:r,i=n.activeClassName,u=i===void 0?"recharts-active-shape":i,s=n.isActive,c=jU(n,DU),f;if(U.isValidElement(e))f=U.cloneElement(e,gl(gl({},c),VU(e)));else if(kn(e))f=e(c);else if(wU(e)&&!MU(e)){var m=a(e,c);f=E.createElement(S4,{shapeType:t,elementProps:m})}else{var d=c;f=E.createElement(S4,{shapeType:t,elementProps:d})}return s?E.createElement(Ln,{className:u},f):f}function m2(n,e){return e!=null&&"trapezoids"in n.props}function h2(n,e){return e!=null&&"sectors"in n.props}function Lu(n,e){return e!=null&&"points"in n.props}function GU(n,e){var t,r,a=n.x===(e==null||(t=e.labelViewBox)===null||t===void 0?void 0:t.x)||n.x===e.x,i=n.y===(e==null||(r=e.labelViewBox)===null||r===void 0?void 0:r.y)||n.y===e.y;return a&&i}function KU(n,e){var t=n.endAngle===e.endAngle,r=n.startAngle===e.startAngle;return t&&r}function QU(n,e){var t=n.x===e.x,r=n.y===e.y,a=n.z===e.z;return t&&r&&a}function YU(n,e){var t;return m2(n,e)?t=GU:h2(n,e)?t=KU:Lu(n,e)&&(t=QU),t}function XU(n,e){var t;return m2(n,e)?t="trapezoids":h2(n,e)?t="sectors":Lu(n,e)&&(t="points"),t}function ZU(n,e){if(m2(n,e)){var t;return(t=e.tooltipPayload)===null||t===void 0||(t=t[0])===null||t===void 0||(t=t.payload)===null||t===void 0?void 0:t.payload}if(h2(n,e)){var r;return(r=e.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Lu(n,e)?e.payload:{}}function JU(n){var e=n.activeTooltipItem,t=n.graphicalItem,r=n.itemData,a=XU(t,e),i=ZU(t,e),u=r.filter(function(c,f){var m=ka(i,c),d=t.props[a].filter(function(B){var I=YU(t,e);return I(B,e)}),v=t.props[a].indexOf(d[d.length-1]),b=f===v;return m&&b}),s=r.indexOf(u[u.length-1]);return s}var _s;function Mi(n){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mi(n)}function ii(){return ii=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ii.apply(this,arguments)}function M4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ae(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?M4(Object(t),!0).forEach(function(r){zt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):M4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function nV(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function A4(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,rA(r.key),r)}}function eV(n,e,t){return e&&A4(n.prototype,e),t&&A4(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function tV(n,e,t){return e=yl(e),rV(n,tA()?Reflect.construct(e,t||[],yl(n).constructor):e.apply(n,t))}function rV(n,e){if(e&&(Mi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aV(n)}function aV(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tA=function(){return!!n})()}function yl(n){return yl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yl(n)}function oV(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Tv(n,e)}function Tv(n,e){return Tv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tv(n,e)}function zt(n,e,t){return e=rA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function rA(n){var e=iV(n,"string");return Mi(e)=="symbol"?e:e+""}function iV(n,e){if(Mi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var na=(function(n){function e(t){var r;return nV(this,e),r=tV(this,e,[t]),zt(r,"pieRef",null),zt(r,"sectorRefs",[]),zt(r,"id",Da("recharts-pie-")),zt(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),kn(a)&&a()}),zt(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),kn(a)&&a()}),r.state={isAnimationFinished:!t.isAnimationActive,prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,sectorToFocus:0},r}return oV(e,n),eV(e,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,u=i.label,s=i.labelLine,c=i.dataKey,f=i.valueKey,m=Hn(this.props,!1),d=Hn(u,!1),v=Hn(s,!1),b=u&&u.offsetRadius||20,B=r.map(function(I,y){var W=(I.startAngle+I.endAngle)/2,S=ie(I.cx,I.cy,I.outerRadius+b,W),M=ae(ae(ae(ae({},m),I),{},{stroke:"none"},d),{},{index:y,textAnchor:e.getTextAnchor(S.x,I.cx)},S),O=ae(ae(ae(ae({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:y,points:[ie(I.cx,I.cy,I.outerRadius,W),S]}),P=c;return En(c)&&En(f)?P="value":En(c)&&(P=f),E.createElement(Ln,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(y)},s&&e.renderLabelLineItem(s,O,"line"),e.renderLabelItem(u,M,le(I,P)))});return E.createElement(Ln,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,u=i.activeShape,s=i.blendStroke,c=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=c&&a.hasActiveIndex()?c:null,b=d?u:v,B=ae(ae({},f),{},{stroke:s?f.fill:f.stroke,tabIndex:-1});return E.createElement(Ln,ii({ref:function(y){y&&!a.sectorRefs.includes(y)&&a.sectorRefs.push(y)},tabIndex:-1,className:"recharts-pie-sector"},Ra(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),E.createElement(bl,ii({option:b,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,u=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,b=d.prevIsAnimationActive;return E.createElement(Qt,{begin:s,duration:c,isActive:u,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(b),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,y=[],W=i&&i[0],S=W.startAngle;return i.forEach(function(M,O){var P=v&&v[O],A=O>0?Ot(M,"paddingAngle",0):0;if(P){var N=he(P.endAngle-P.startAngle,M.endAngle-M.startAngle),w=ae(ae({},M),{},{startAngle:S+A,endAngle:S+N(I)+A});y.push(w),S=w.endAngle}else{var H=M.endAngle,k=M.startAngle,D=he(0,H-k),R=D(I),F=ae(ae({},M),{},{startAngle:S+A,endAngle:S+R+A});y.push(F),S=F.endAngle}}),E.createElement(Ln,null,r.renderSectorsStatically(y))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var u=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[u].focus(),a.setState({sectorToFocus:u});break}case"ArrowRight":{var s=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,u=this.state.prevSectors;return i&&a&&a.length&&(!u||!ka(u,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,u=a.sectors,s=a.className,c=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,b=a.isAnimationActive,B=this.state.isAnimationFinished;if(i||!u||!u.length||!fn(f)||!fn(m)||!fn(d)||!fn(v))return null;var I=jn("recharts-pie",s);return E.createElement(Ln,{tabIndex:this.props.rootTabIndex,className:I,ref:function(W){r.pieRef=W}},this.renderSectors(),c&&this.renderLabels(u),ze.renderCallByParent(this.props,null,!1),(!b||B)&&lr.renderCallByParent(this.props,u,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);if(kn(r))return r(a);var u=jn("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return E.createElement(Ca,ii({},a,{key:i,type:"linear",className:u}))}},{key:"renderLabelItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);var u=i;if(kn(r)&&(u=r(a),E.isValidElement(u)))return u;var s=jn("recharts-pie-label-text",typeof r!="boolean"&&!kn(r)?r.className:"");return E.createElement(go,ii({},a,{alignmentBaseline:"middle",className:s}),u)}}])})(U.PureComponent);_s=na;zt(na,"displayName","Pie");zt(na,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});zt(na,"parseDeltaAngle",function(n,e){var t=ot(e-n),r=Math.min(Math.abs(e-n),360);return t*r});zt(na,"getRealPieData",function(n){var e=n.data,t=n.children,r=Hn(n,!1),a=ut(t,Xu);return e&&e.length?e.map(function(i,u){return ae(ae(ae({payload:i},r),i),a&&a[u]&&a[u].props)}):a&&a.length?a.map(function(i){return ae(ae({},r),i.props)}):[]});zt(na,"parseCoordinateOfPie",function(n,e){var t=e.top,r=e.left,a=e.width,i=e.height,u=$M(a,i),s=r+it(n.cx,a,a/2),c=t+it(n.cy,i,i/2),f=it(n.innerRadius,u,0),m=it(n.outerRadius,u,u*.8),d=n.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:s,cy:c,innerRadius:f,outerRadius:m,maxRadius:d}});zt(na,"getComposedData",function(n){var e=n.item,t=n.offset,r=e.type.defaultProps!==void 0?ae(ae({},e.type.defaultProps),e.props):e.props,a=_s.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,u=r.startAngle,s=r.endAngle,c=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,b=Math.abs(r.minAngle),B=_s.parseCoordinateOfPie(r,t),I=_s.parseDeltaAngle(u,s),y=Math.abs(I),W=f;En(f)&&En(d)?(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W="value"):En(f)&&(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W=d);var S=a.filter(function(w){return le(w,W,0)!==0}).length,M=(y>=360?S:S-1)*c,O=y-S*b-M,P=a.reduce(function(w,H){var k=le(H,W,0);return w+(fn(k)?k:0)},0),A;if(P>0){var N;A=a.map(function(w,H){var k=le(w,W,0),D=le(w,m,H),R=(fn(k)?k:0)/P,F;H?F=N.endAngle+ot(I)*c*(k!==0?1:0):F=u;var V=F+ot(I)*((k!==0?b:0)+R*O),G=(F+V)/2,Y=(B.innerRadius+B.outerRadius)/2,Q=[{name:D,value:k,payload:w,dataKey:W,type:v}],$=ie(B.cx,B.cy,Y,G);return N=ae(ae(ae({percent:R,cornerRadius:i,name:D,tooltipPayload:Q,midAngle:G,middleRadius:Y,tooltipPosition:$},w),B),{},{value:le(w,W),startAngle:F,endAngle:V,payload:w,paddingAngle:ot(I)*c}),N})}return ae(ae({},B),{},{sectors:A,data:a})});var a6,_4;function pV(){if(_4)return a6;_4=1;var n=Math.ceil,e=Math.max;function t(r,a,i,u){for(var s=-1,c=e(n((a-r)/(i||1)),0),f=Array(c);c--;)f[u?c:++s]=r,r+=i;return f}return a6=t,a6}var o6,O4;function aA(){if(O4)return o6;O4=1;var n=AS(),e=1/0,t=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=n(a),a===e||a===-e){var i=a<0?-1:1;return i*t}return a===a?a:0}return o6=r,o6}var i6,H4;function uV(){if(H4)return i6;H4=1;var n=pV(),e=Jl(),t=aA();function r(a){return function(i,u,s){return s&&typeof s!="number"&&e(i,u,s)&&(u=s=void 0),i=t(i),u===void 0?(u=i,i=0):u=t(u),s=s===void 0?i<u?1:-1:t(s),n(i,u,s,a)}}return i6=r,i6}var p6,C4;function sV(){if(C4)return p6;C4=1;var n=uV(),e=n();return p6=e,p6}var lV=sV();const Il=Zn(lV);function Fu(n){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fu(n)}function N4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function R4(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?N4(Object(t),!0).forEach(function(r){oA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function oA(n,e,t){return e=cV(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cV(n){var e=fV(n,"string");return Fu(e)=="symbol"?e:e+""}function fV(n,e){if(Fu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Fu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var dV=["Webkit","Moz","O","ms"],mV=function(e,t){var r=e.replace(/(\w)/,function(i){return i.toUpperCase()}),a=dV.reduce(function(i,u){return R4(R4({},i),{},oA({},u+r,t))},{});return a[e]=t,a};function Ai(n){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ai(n)}function Bl(){return Bl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Bl.apply(this,arguments)}function k4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function u6(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?k4(Object(t),!0).forEach(function(r){Wt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function hV(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function E4(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,pA(r.key),r)}}function vV(n,e,t){return e&&E4(n.prototype,e),t&&E4(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function gV(n,e,t){return e=xl(e),bV(n,iA()?Reflect.construct(e,t||[],xl(n).constructor):e.apply(n,t))}function bV(n,e){if(e&&(Ai(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yV(n)}function yV(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function iA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iA=function(){return!!n})()}function xl(n){return xl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xl(n)}function IV(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Dv(n,e)}function Dv(n,e){return Dv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dv(n,e)}function Wt(n,e,t){return e=pA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pA(n){var e=BV(n,"string");return Ai(e)=="symbol"?e:e+""}function BV(n,e){if(Ai(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var xV=function(e){var t=e.data,r=e.startIndex,a=e.endIndex,i=e.x,u=e.width,s=e.travellerWidth;if(!t||!t.length)return{};var c=t.length,f=au().domain(Il(0,c)).range([i,i+u-s]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},T4=function(e){return e.changedTouches&&!!e.changedTouches.length},_i=(function(n){function e(t){var r;return hV(this,e),r=gV(this,e,[t]),Wt(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Wt(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Wt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,u=a.onDragEnd,s=a.startIndex;u==null||u({endIndex:i,startIndex:s})}),r.detachDragEndListener()}),Wt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Wt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Wt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Wt(r,"handleSlideDragStart",function(a){var i=T4(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return IV(e,n),vV(e,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,u=this.state.scaleValues,s=this.props,c=s.gap,f=s.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),b=e.getIndexInRange(u,d),B=e.getIndexInRange(u,v);return{startIndex:b-b%c,endIndex:B===m?m:B-B%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,u=a.tickFormatter,s=a.dataKey,c=le(i[r],s,r);return kn(u)?u(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,u=a.startX,s=a.endX,c=this.props,f=c.x,m=c.width,d=c.travellerWidth,v=c.startIndex,b=c.endIndex,B=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-s,f+m-d-u):I<0&&(I=Math.max(I,f-u,f-s));var y=this.getIndex({startX:u+I,endX:s+I});(y.startIndex!==v||y.endIndex!==b)&&B&&B(y),this.setState({startX:u+I,endX:s+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=T4(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,u=a.movingTravellerId,s=a.endX,c=a.startX,f=this.state[u],m=this.props,d=m.x,v=m.width,b=m.travellerWidth,B=m.onChange,I=m.gap,y=m.data,W={startX:this.state.startX,endX:this.state.endX},S=r.pageX-i;S>0?S=Math.min(S,d+v-b-f):S<0&&(S=Math.max(S,d-f)),W[u]=f+S;var M=this.getIndex(W),O=M.startIndex,P=M.endIndex,A=function(){var w=y.length-1;return u==="startX"&&(s>c?O%I===0:P%I===0)||s<c&&P===w||u==="endX"&&(s>c?P%I===0:O%I===0)||s>c&&P===w};this.setState(Wt(Wt({},u,f+S),"brushMoveStartX",r.pageX),function(){B&&A()&&B(M)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,u=this.state,s=u.scaleValues,c=u.startX,f=u.endX,m=this.state[a],d=s.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=s.length)){var b=s[v];a==="startX"&&b>=f||a==="endX"&&b<=c||this.setState(Wt({},a,b),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,u=r.width,s=r.height,c=r.fill,f=r.stroke;return E.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:u,height:s})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,u=r.width,s=r.height,c=r.data,f=r.children,m=r.padding,d=U.Children.only(f);return d?E.cloneElement(d,{x:a,y:i,width:u,height:s,margin:m,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,u,s=this,c=this.props,f=c.y,m=c.travellerWidth,d=c.height,v=c.traveller,b=c.ariaLabel,B=c.data,I=c.startIndex,y=c.endIndex,W=Math.max(r,this.props.x),S=u6(u6({},Hn(this.props,!1)),{},{x:W,y:f,width:m,height:d}),M=b||"Min value: ".concat((i=B[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((u=B[y])===null||u===void 0?void 0:u.name);return E.createElement(Ln,{tabIndex:0,role:"slider","aria-label":M,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(P){["ArrowLeft","ArrowRight"].includes(P.key)&&(P.preventDefault(),P.stopPropagation(),s.handleTravellerMoveKeyboard(P.key==="ArrowRight"?1:-1,a))},onFocus:function(){s.setState({isTravellerFocused:!0})},onBlur:function(){s.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},e.renderTraveller(v,S))}},{key:"renderSlide",value:function(r,a){var i=this.props,u=i.y,s=i.height,c=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return E.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:m,y:u,width:d,height:s})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,u=r.y,s=r.height,c=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,b=5,B={pointerEvents:"none",fill:f};return E.createElement(Ln,{className:"recharts-brush-texts"},E.createElement(go,Bl({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-b,y:u+s/2},B),this.getTextOfTick(a)),E.createElement(go,Bl({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+b,y:u+s/2},B),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,u=r.children,s=r.x,c=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,b=v.startX,B=v.endX,I=v.isTextActive,y=v.isSlideMoving,W=v.isTravellerMoving,S=v.isTravellerFocused;if(!a||!a.length||!fn(s)||!fn(c)||!fn(f)||!fn(m)||f<=0||m<=0)return null;var M=jn("recharts-brush",i),O=E.Children.count(u)===1,P=mV("userSelect","none");return E.createElement(Ln,{className:M,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:P},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(b,B),this.renderTravellerLayer(b,"startX"),this.renderTravellerLayer(B,"endX"),(I||y||W||S||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,u=r.width,s=r.height,c=r.stroke,f=Math.floor(i+s/2)-1;return E.createElement(E.Fragment,null,E.createElement("rect",{x:a,y:i,width:u,height:s,fill:c,stroke:"none"}),E.createElement("line",{x1:a+1,y1:f,x2:a+u-1,y2:f,fill:"none",stroke:"#fff"}),E.createElement("line",{x1:a+1,y1:f+2,x2:a+u-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return E.isValidElement(r)?i=E.cloneElement(r,a):kn(r)?i=r(a):i=e.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,u=r.width,s=r.x,c=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return u6({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:u},i&&i.length?xV({data:i,width:u,x:s,travellerWidth:c,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(u!==a.prevWidth||s!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([s,s+u-c]);var v=a.scale.domain().map(function(b){return a.scale(b)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:u,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,u=0,s=i-1;s-u>1;){var c=Math.floor((u+s)/2);r[c]>a?s=c:u=c}return a>=r[s]?s:u}}])})(U.PureComponent);Wt(_i,"displayName","Brush");Wt(_i,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var s6,D4;function PV(){if(D4)return s6;D4=1;var n=kg();function e(t,r){var a;return n(t,function(i,u,s){return a=r(i,u,s),!a}),!!a}return s6=e,s6}var l6,j4;function wV(){if(j4)return l6;j4=1;var n=oS(),e=Mr(),t=PV(),r=yt(),a=Jl();function i(u,s,c){var f=r(u)?n:t;return c&&a(u,s,c)&&(s=void 0),f(u,e(s,3))}return l6=i,l6}var WV=wV();const SV=Zn(WV);var Pr=function(e,t){var r=e.alwaysShow,a=e.ifOverflow;return r&&(a="extendDomain"),a===t},c6,$4;function MV(){if($4)return c6;$4=1;var n=PS();function e(t,r,a){r=="__proto__"&&n?n(t,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[r]=a}return c6=e,c6}var f6,L4;function AV(){if(L4)return f6;L4=1;var n=MV(),e=BS(),t=Mr();function r(a,i){var u={};return i=t(i,3),e(a,function(s,c,f){n(u,c,i(s,c,f))}),u}return f6=r,f6}var _V=AV();const OV=Zn(_V);var d6,F4;function HV(){if(F4)return d6;F4=1;function n(e,t){for(var r=-1,a=e==null?0:e.length;++r<a;)if(!t(e[r],r,e))return!1;return!0}return d6=n,d6}var m6,q4;function CV(){if(q4)return m6;q4=1;var n=kg();function e(t,r){var a=!0;return n(t,function(i,u,s){return a=!!r(i,u,s),a}),a}return m6=e,m6}var h6,z4;function NV(){if(z4)return h6;z4=1;var n=HV(),e=CV(),t=Mr(),r=yt(),a=Jl();function i(u,s,c){var f=r(u)?n:e;return c&&a(u,s,c)&&(s=void 0),f(u,t(s,3))}return h6=i,h6}var RV=NV();const uA=Zn(RV);var kV=["x","y"];function qu(n){"@babel/helpers - typeof";return qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qu(n)}function jv(){return jv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},jv.apply(this,arguments)}function U4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Zp(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?U4(Object(t),!0).forEach(function(r){EV(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function EV(n,e,t){return e=TV(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function TV(n){var e=DV(n,"string");return qu(e)=="symbol"?e:e+""}function DV(n,e){if(qu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(qu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jV(n,e){if(n==null)return{};var t=$V(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function $V(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function LV(n,e){var t=n.x,r=n.y,a=jV(n,kV),i="".concat(t),u=parseInt(i,10),s="".concat(r),c=parseInt(s,10),f="".concat(e.height||a.height),m=parseInt(f,10),d="".concat(e.width||a.width),v=parseInt(d,10);return Zp(Zp(Zp(Zp(Zp({},e),a),u?{x:u}:{}),c?{y:c}:{}),{},{height:m,width:v,name:e.name,radius:e.radius})}function V4(n){return E.createElement(bl,jv({shapeType:"rectangle",propTransformer:LV,activeClassName:"recharts-active-bar"},n))}var FV=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof e=="number")return e;var i=typeof r=="number";return i?e(r,a):(i||yo(),t)}},qV=["value","background"],sA;function Oi(n){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oi(n)}function zV(n,e){if(n==null)return{};var t=UV(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function UV(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Pl(){return Pl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Pl.apply(this,arguments)}function G4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Oe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?G4(Object(t),!0).forEach(function(r){Aa(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):G4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function VV(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function K4(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,cA(r.key),r)}}function GV(n,e,t){return e&&K4(n.prototype,e),t&&K4(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function KV(n,e,t){return e=wl(e),QV(n,lA()?Reflect.construct(e,t||[],wl(n).constructor):e.apply(n,t))}function QV(n,e){if(e&&(Oi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return YV(n)}function YV(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function lA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lA=function(){return!!n})()}function wl(n){return wl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wl(n)}function XV(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&$v(n,e)}function $v(n,e){return $v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},$v(n,e)}function Aa(n,e,t){return e=cA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cA(n){var e=ZV(n,"string");return Oi(e)=="symbol"?e:e+""}function ZV(n,e){if(Oi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var Wr=(function(n){function e(){var t;VV(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=KV(this,e,[].concat(a)),Aa(t,"state",{isAnimationFinished:!1}),Aa(t,"id",Da("recharts-bar-")),Aa(t,"handleAnimationEnd",function(){var u=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),u&&u()}),Aa(t,"handleAnimationStart",function(){var u=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),u&&u()}),t}return XV(e,n),GV(e,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,u=i.shape,s=i.dataKey,c=i.activeIndex,f=i.activeBar,m=Hn(this.props,!1);return r&&r.map(function(d,v){var b=v===c,B=b?f:u,I=Oe(Oe(Oe({},m),d),{},{isActive:b,option:B,index:v,dataKey:s,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return E.createElement(Ln,Pl({className:"recharts-bar-rectangle"},Ra(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),E.createElement(V4,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,u=a.layout,s=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return E.createElement(Qt,{begin:c,duration:f,isActive:s,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(b){var B=b.t,I=i.map(function(y,W){var S=v&&v[W];if(S){var M=he(S.x,y.x),O=he(S.y,y.y),P=he(S.width,y.width),A=he(S.height,y.height);return Oe(Oe({},y),{},{x:M(B),y:O(B),width:P(B),height:A(B)})}if(u==="horizontal"){var N=he(0,y.height),w=N(B);return Oe(Oe({},y),{},{y:y.y+y.height-w,height:w})}var H=he(0,y.width),k=H(B);return Oe(Oe({},y),{},{width:k})});return E.createElement(Ln,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,u=this.state.prevData;return i&&a&&a.length&&(!u||!ka(u,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,u=a.dataKey,s=a.activeIndex,c=Hn(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=zV(f,qV);if(!d)return null;var b=Oe(Oe(Oe(Oe(Oe({},v),{},{fill:"#eee"},d),c),Ra(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:u,index:m,className:"recharts-bar-background-rectangle"});return E.createElement(V4,Pl({key:"background-bar-".concat(m),option:r.props.background,isActive:m===s},b))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,u=i.data,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=ut(m,np);if(!d)return null;var v=f==="vertical"?u[0].height/2:u[0].width/2,b=function(y,W){var S=Array.isArray(y.value)?y.value[1]:y.value;return{x:y.x,y:y.y,value:S,errorVal:le(y,W)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement(Ln,B,d.map(function(I){return E.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:u,xAxis:s,yAxis:c,layout:f,offset:v,dataPointFormatter:b})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,u=r.className,s=r.xAxis,c=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,b=r.isAnimationActive,B=r.background,I=r.id;if(a||!i||!i.length)return null;var y=this.state.isAnimationFinished,W=jn("recharts-bar",u),S=s&&s.allowDataOverflow,M=c&&c.allowDataOverflow,O=S||M,P=En(I)?this.id:I;return E.createElement(Ln,{className:W},S||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(P)},E.createElement("rect",{x:S?f:f-d/2,y:M?m:m-v/2,width:S?d:d*2,height:M?v:v*2}))):null,E.createElement(Ln,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(P,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,P),(!b||y)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(U.PureComponent);sA=Wr;Aa(Wr,"displayName","Bar");Aa(Wr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Aa(Wr,"getComposedData",function(n){var e=n.props,t=n.item,r=n.barPosition,a=n.bandSize,i=n.xAxis,u=n.yAxis,s=n.xAxisTicks,c=n.yAxisTicks,f=n.stackedData,m=n.dataStartIndex,d=n.displayedData,v=n.offset,b=P9(r,t);if(!b)return null;var B=e.layout,I=t.type.defaultProps,y=I!==void 0?Oe(Oe({},I),t.props):t.props,W=y.dataKey,S=y.children,M=y.minPointSize,O=B==="horizontal"?u:i,P=f?O.scale.domain():null,A=O9({numericAxis:O}),N=ut(S,Xu),w=d.map(function(H,k){var D,R,F,V,G,Y;f?D=w9(f[m+k],P):(D=le(H,W),Array.isArray(D)||(D=[A,D]));var Q=FV(M,sA.defaultProps.minPointSize)(D[1],k);if(B==="horizontal"){var $,K=[u.scale(D[0]),u.scale(D[1])],en=K[0],T=K[1];R=xW({axis:i,ticks:s,bandSize:a,offset:b.offset,entry:H,index:k}),F=($=T??en)!==null&&$!==void 0?$:void 0,V=b.size;var L=en-T;if(G=Number.isNaN(L)?0:L,Y={x:R,y:u.y,width:V,height:u.height},Math.abs(Q)>0&&Math.abs(G)<Math.abs(Q)){var Z=ot(G||Q)*(Math.abs(Q)-Math.abs(G));F-=Z,G+=Z}}else{var ln=[i.scale(D[0]),i.scale(D[1])],vn=ln[0],Bn=ln[1];if(R=vn,F=xW({axis:u,ticks:c,bandSize:a,offset:b.offset,entry:H,index:k}),V=Bn-vn,G=b.size,Y={x:i.x,y:F,width:i.width,height:G},Math.abs(Q)>0&&Math.abs(V)<Math.abs(Q)){var xn=ot(V||Q)*(Math.abs(Q)-Math.abs(V));V+=xn}}return Oe(Oe(Oe({},H),{},{x:R,y:F,width:V,height:G,value:f?D:D[1],payload:H,background:Y},N&&N[k]&&N[k].props),{},{tooltipPayload:[DM(t,H)],tooltipPosition:{x:R+V/2,y:F+G/2}})});return Oe({data:w,layout:B},v)});function zu(n){"@babel/helpers - typeof";return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zu(n)}function JV(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Q4(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,fA(r.key),r)}}function nG(n,e,t){return e&&Q4(n.prototype,e),t&&Q4(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Y4(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function or(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Y4(Object(t),!0).forEach(function(r){v2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Y4(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function v2(n,e,t){return e=fA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function fA(n){var e=eG(n,"string");return zu(e)=="symbol"?e:e+""}function eG(n,e){if(zu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(zu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var cb=function(e,t,r,a,i){var u=e.width,s=e.height,c=e.layout,f=e.children,m=Object.keys(t),d={left:r.left,leftMirror:r.left,right:u-r.right,rightMirror:u-r.right,top:r.top,topMirror:r.top,bottom:s-r.bottom,bottomMirror:s-r.bottom},v=!!St(f,Wr);return m.reduce(function(b,B){var I=t[B],y=I.orientation,W=I.domain,S=I.padding,M=S===void 0?{}:S,O=I.mirror,P=I.reversed,A="".concat(y).concat(O?"Mirror":""),N,w,H,k,D;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var R=W[1]-W[0],F=1/0,V=I.categoricalDomain.sort();if(V.forEach(function(ln,vn){vn>0&&(F=Math.min((ln||0)-(V[vn-1]||0),F))}),Number.isFinite(F)){var G=F/R,Y=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=G*Y/2),I.padding==="no-gap"){var Q=it(e.barCategoryGap,G*Y),$=G*Y/2;N=$-Q-($-Q)/Y*Q}}}a==="xAxis"?w=[r.left+(M.left||0)+(N||0),r.left+r.width-(M.right||0)-(N||0)]:a==="yAxis"?w=c==="horizontal"?[r.top+r.height-(M.bottom||0),r.top+(M.top||0)]:[r.top+(M.top||0)+(N||0),r.top+r.height-(M.bottom||0)-(N||0)]:w=I.range,P&&(w=[w[1],w[0]]);var K=RM(I,i,v),en=K.scale,T=K.realScaleType;en.domain(W).range(w),kM(en);var L=EM(en,or(or({},I),{},{realScaleType:T}));a==="xAxis"?(D=y==="top"&&!O||y==="bottom"&&O,H=r.left,k=d[A]-D*I.height):a==="yAxis"&&(D=y==="left"&&!O||y==="right"&&O,H=d[A]-D*I.width,k=r.top);var Z=or(or(or({},I),L),{},{realScaleType:T,x:H,y:k,scale:en,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return Z.bandSize=il(Z,L),!I.hide&&a==="xAxis"?d[A]+=(D?-1:1)*Z.height:I.hide||(d[A]+=(D?-1:1)*Z.width),or(or({},b),{},v2({},B,Z))},{})},dA=function(e,t){var r=e.x,a=e.y,i=t.x,u=t.y;return{x:Math.min(r,i),y:Math.min(a,u),width:Math.abs(i-r),height:Math.abs(u-a)}},tG=function(e){var t=e.x1,r=e.y1,a=e.x2,i=e.y2;return dA({x:t,y:r},{x:a,y:i})},mA=(function(){function n(e){JV(this,n),this.scale=e}return nG(n,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(t!==void 0){if(i)switch(i){case"start":return this.scale(t);case"middle":{var u=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+u}case"end":{var s=this.bandwidth?this.bandwidth():0;return this.scale(t)+s}default:return this.scale(t)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+c}return this.scale(t)}}},{key:"isInRange",value:function(t){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?t>=a&&t<=i:t>=i&&t<=a}}],[{key:"create",value:function(t){return new n(t)}}])})();v2(mA,"EPS",1e-4);var fb=function(e){var t=Object.keys(e).reduce(function(r,a){return or(or({},r),{},v2({},a,mA.create(e[a])))},{});return or(or({},t),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=i.bandAware,s=i.position;return OV(a,function(c,f){return t[f].apply(c,{bandAware:u,position:s})})},isInRange:function(a){return uA(a,function(i,u){return t[u].isInRange(i)})}})};function rG(n){return(n%180+180)%180}var aG=function(e){var t=e.width,r=e.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=rG(a),u=i*Math.PI/180,s=Math.atan(r/t),c=u>s&&u<Math.PI-s?r/Math.sin(u):t/Math.cos(u);return Math.abs(c)},v6,X4;function oG(){if(X4)return v6;X4=1;var n=Mr(),e=Yu(),t=Xl();function r(a){return function(i,u,s){var c=Object(i);if(!e(i)){var f=n(u,3);i=t(i),u=function(d){return f(c[d],d,c)}}var m=a(i,u,s);return m>-1?c[f?i[m]:m]:void 0}}return v6=r,v6}var g6,Z4;function iG(){if(Z4)return g6;Z4=1;var n=aA();function e(t){var r=n(t),a=r%1;return r===r?a?r-a:r:0}return g6=e,g6}var b6,J4;function pG(){if(J4)return b6;J4=1;var n=vS(),e=Mr(),t=iG(),r=Math.max;function a(i,u,s){var c=i==null?0:i.length;if(!c)return-1;var f=s==null?0:t(s);return f<0&&(f=r(c+f,0)),n(i,e(u,3),f)}return b6=a,b6}var y6,n3;function uG(){if(n3)return y6;n3=1;var n=oG(),e=pG(),t=n(e);return y6=t,y6}var sG=uG();const lG=Zn(sG);var cG=H5();const fG=Zn(cG);var dG=fG(function(n){return{x:n.left,y:n.top,width:n.width,height:n.height}},function(n){return["l",n.left,"t",n.top,"w",n.width,"h",n.height].join("")}),db=U.createContext(void 0),mb=U.createContext(void 0),hA=U.createContext(void 0),vA=U.createContext({}),gA=U.createContext(void 0),bA=U.createContext(0),yA=U.createContext(0),e3=function(e){var t=e.state,r=t.xAxisMap,a=t.yAxisMap,i=t.offset,u=e.clipPathId,s=e.children,c=e.width,f=e.height,m=dG(i);return E.createElement(db.Provider,{value:r},E.createElement(mb.Provider,{value:a},E.createElement(vA.Provider,{value:i},E.createElement(hA.Provider,{value:m},E.createElement(gA.Provider,{value:u},E.createElement(bA.Provider,{value:f},E.createElement(yA.Provider,{value:c},s)))))))},mG=function(){return U.useContext(gA)},IA=function(e){var t=U.useContext(db);t==null&&yo();var r=t[e];return r==null&&yo(),r},hG=function(){var e=U.useContext(db);return Sa(e)},vG=function(){var e=U.useContext(mb),t=lG(e,function(r){return uA(r.domain,Number.isFinite)});return t||Sa(e)},BA=function(e){var t=U.useContext(mb);t==null&&yo();var r=t[e];return r==null&&yo(),r},gG=function(){var e=U.useContext(hA);return e},bG=function(){return U.useContext(vA)},hb=function(){return U.useContext(yA)},vb=function(){return U.useContext(bA)};function Hi(n){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hi(n)}function yG(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function IG(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,PA(r.key),r)}}function BG(n,e,t){return e&&IG(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function xG(n,e,t){return e=Wl(e),PG(n,xA()?Reflect.construct(e,t||[],Wl(n).constructor):e.apply(n,t))}function PG(n,e){if(e&&(Hi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wG(n)}function wG(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function xA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xA=function(){return!!n})()}function Wl(n){return Wl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wl(n)}function WG(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Lv(n,e)}function Lv(n,e){return Lv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lv(n,e)}function t3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function r3(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?t3(Object(t),!0).forEach(function(r){gb(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):t3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function gb(n,e,t){return e=PA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function PA(n){var e=SG(n,"string");return Hi(e)=="symbol"?e:e+""}function SG(n,e){if(Hi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function MG(n,e){return HG(n)||OG(n,e)||_G(n,e)||AG()}function AG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _G(n,e){if(n){if(typeof n=="string")return a3(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a3(n,e)}}function a3(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function OG(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function HG(n){if(Array.isArray(n))return n}function Fv(){return Fv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Fv.apply(this,arguments)}var CG=function(e,t){var r;return E.isValidElement(e)?r=E.cloneElement(e,t):kn(e)?r=e(t):r=E.createElement("line",Fv({},t,{className:"recharts-reference-line-line"})),r},NG=function(e,t,r,a,i,u,s,c,f){var m=i.x,d=i.y,v=i.width,b=i.height;if(r){var B=f.y,I=e.y.apply(B,{position:u});if(Pr(f,"discard")&&!e.y.isInRange(I))return null;var y=[{x:m+v,y:I},{x:m,y:I}];return c==="left"?y.reverse():y}if(t){var W=f.x,S=e.x.apply(W,{position:u});if(Pr(f,"discard")&&!e.x.isInRange(S))return null;var M=[{x:S,y:d+b},{x:S,y:d}];return s==="top"?M.reverse():M}if(a){var O=f.segment,P=O.map(function(A){return e.apply(A,{position:u})});return Pr(f,"discard")&&SV(P,function(A){return!e.isInRange(A)})?null:P}return null};function RG(n){var e=n.x,t=n.y,r=n.segment,a=n.xAxisId,i=n.yAxisId,u=n.shape,s=n.className,c=n.alwaysShow,f=mG(),m=IA(a),d=BA(i),v=gG();if(!f||!v)return null;sr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var b=fb({x:m.scale,y:d.scale}),B=Te(e),I=Te(t),y=r&&r.length===2,W=NG(b,B,I,y,v,n.position,m.orientation,d.orientation,n);if(!W)return null;var S=MG(W,2),M=S[0],O=M.x,P=M.y,A=S[1],N=A.x,w=A.y,H=Pr(n,"hidden")?"url(#".concat(f,")"):void 0,k=r3(r3({clipPath:H},Hn(n,!0)),{},{x1:O,y1:P,x2:N,y2:w});return E.createElement(Ln,{className:jn("recharts-reference-line",s)},CG(u,k),ze.renderCallByParent(n,tG({x1:O,y1:P,x2:N,y2:w})))}var bb=(function(n){function e(){return yG(this,e),xG(this,e,arguments)}return WG(e,n),BG(e,[{key:"render",value:function(){return E.createElement(RG,this.props)}}])})(E.Component);gb(bb,"displayName","ReferenceLine");gb(bb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function qv(){return qv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},qv.apply(this,arguments)}function Ci(n){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ci(n)}function o3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function i3(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?o3(Object(t),!0).forEach(function(r){g2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function kG(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function EG(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,WA(r.key),r)}}function TG(n,e,t){return e&&EG(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function DG(n,e,t){return e=Sl(e),jG(n,wA()?Reflect.construct(e,t||[],Sl(n).constructor):e.apply(n,t))}function jG(n,e){if(e&&(Ci(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $G(n)}function $G(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wA=function(){return!!n})()}function Sl(n){return Sl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Sl(n)}function LG(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&zv(n,e)}function zv(n,e){return zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},zv(n,e)}function g2(n,e,t){return e=WA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function WA(n){var e=FG(n,"string");return Ci(e)=="symbol"?e:e+""}function FG(n,e){if(Ci(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var qG=function(e){var t=e.x,r=e.y,a=e.xAxis,i=e.yAxis,u=fb({x:a.scale,y:i.scale}),s=u.apply({x:t,y:r},{bandAware:!0});return Pr(e,"discard")&&!u.isInRange(s)?null:s},b2=(function(n){function e(){return kG(this,e),DG(this,e,arguments)}return LG(e,n),TG(e,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,u=r.r,s=r.alwaysShow,c=r.clipPathId,f=Te(a),m=Te(i);if(sr(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=qG(this.props);if(!d)return null;var v=d.x,b=d.y,B=this.props,I=B.shape,y=B.className,W=Pr(this.props,"hidden")?"url(#".concat(c,")"):void 0,S=i3(i3({clipPath:W},Hn(this.props,!0)),{},{cx:v,cy:b});return E.createElement(Ln,{className:jn("recharts-reference-dot",y)},e.renderDot(I,S),ze.renderCallByParent(this.props,{x:v-u,y:b-u,width:2*u,height:2*u}))}}])})(E.Component);g2(b2,"displayName","ReferenceDot");g2(b2,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});g2(b2,"renderDot",function(n,e){var t;return E.isValidElement(n)?t=E.cloneElement(n,e):kn(n)?t=n(e):t=E.createElement(t0,qv({},e,{cx:e.cx,cy:e.cy,className:"recharts-reference-dot-dot"})),t});function Uv(){return Uv=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Uv.apply(this,arguments)}function Ni(n){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(n)}function p3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function u3(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?p3(Object(t),!0).forEach(function(r){y2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zG(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function UG(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,MA(r.key),r)}}function VG(n,e,t){return e&&UG(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function GG(n,e,t){return e=Ml(e),KG(n,SA()?Reflect.construct(e,t||[],Ml(n).constructor):e.apply(n,t))}function KG(n,e){if(e&&(Ni(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QG(n)}function QG(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function SA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SA=function(){return!!n})()}function Ml(n){return Ml=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ml(n)}function YG(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Vv(n,e)}function Vv(n,e){return Vv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vv(n,e)}function y2(n,e,t){return e=MA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function MA(n){var e=XG(n,"string");return Ni(e)=="symbol"?e:e+""}function XG(n,e){if(Ni(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var ZG=function(e,t,r,a,i){var u=i.x1,s=i.x2,c=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=fb({x:m.scale,y:d.scale}),b={x:e?v.x.apply(u,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},B={x:t?v.x.apply(s,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return Pr(i,"discard")&&(!v.isInRange(b)||!v.isInRange(B))?null:dA(b,B)},I2=(function(n){function e(){return zG(this,e),GG(this,e,arguments)}return YG(e,n),VG(e,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,u=r.y1,s=r.y2,c=r.className,f=r.alwaysShow,m=r.clipPathId;sr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Te(a),v=Te(i),b=Te(u),B=Te(s),I=this.props.shape;if(!d&&!v&&!b&&!B&&!I)return null;var y=ZG(d,v,b,B,this.props);if(!y&&!I)return null;var W=Pr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return E.createElement(Ln,{className:jn("recharts-reference-area",c)},e.renderRect(I,u3(u3({clipPath:W},Hn(this.props,!0)),y)),ze.renderCallByParent(this.props,y))}}])})(E.Component);y2(I2,"displayName","ReferenceArea");y2(I2,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});y2(I2,"renderRect",function(n,e){var t;return E.isValidElement(n)?t=E.cloneElement(n,e):kn(n)?t=n(e):t=E.createElement(lb,Uv({},e,{className:"recharts-reference-area-rect"})),t});function AA(n,e,t){if(e<1)return[];if(e===1&&t===void 0)return n;for(var r=[],a=0;a<n.length;a+=e)r.push(n[a]);return r}function JG(n,e,t){var r={width:n.width+e.width,height:n.height+e.height};return aG(r,t)}function nK(n,e,t){var r=t==="width",a=n.x,i=n.y,u=n.width,s=n.height;return e===1?{start:r?a:i,end:r?a+u:i+s}:{start:r?a+u:i+s,end:r?a:i}}function Al(n,e,t,r,a){if(n*e<n*r||n*e>n*a)return!1;var i=t();return n*(e-n*i/2-r)>=0&&n*(e+n*i/2-a)<=0}function eK(n,e){return AA(n,e+1)}function tK(n,e,t,r,a){for(var i=(r||[]).slice(),u=e.start,s=e.end,c=0,f=1,m=u,d=function(){var B=r==null?void 0:r[c];if(B===void 0)return{v:AA(r,f)};var I=c,y,W=function(){return y===void 0&&(y=t(B,I)),y},S=B.coordinate,M=c===0||Al(n,S,W,m,s);M||(c=0,m=u,f+=1),M&&(m=S+n*(W()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Uu(n){"@babel/helpers - typeof";return Uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uu(n)}function s3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function nt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?s3(Object(t),!0).forEach(function(r){rK(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function rK(n,e,t){return e=aK(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function aK(n){var e=oK(n,"string");return Uu(e)=="symbol"?e:e+""}function oK(n,e){if(Uu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Uu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function iK(n,e,t,r,a){for(var i=(r||[]).slice(),u=i.length,s=e.start,c=e.end,f=function(v){var b=i[v],B,I=function(){return B===void 0&&(B=t(b,v)),B};if(v===u-1){var y=n*(b.coordinate+n*I()/2-c);i[v]=b=nt(nt({},b),{},{tickCoord:y>0?b.coordinate-y*n:b.coordinate})}else i[v]=b=nt(nt({},b),{},{tickCoord:b.coordinate});var W=Al(n,b.tickCoord,I,s,c);W&&(c=b.tickCoord-n*(I()/2+a),i[v]=nt(nt({},b),{},{isShow:!0}))},m=u-1;m>=0;m--)f(m);return i}function pK(n,e,t,r,a,i){var u=(r||[]).slice(),s=u.length,c=e.start,f=e.end;if(i){var m=r[s-1],d=t(m,s-1),v=n*(m.coordinate+n*d/2-f);u[s-1]=m=nt(nt({},m),{},{tickCoord:v>0?m.coordinate-v*n:m.coordinate});var b=Al(n,m.tickCoord,function(){return d},c,f);b&&(f=m.tickCoord-n*(d/2+a),u[s-1]=nt(nt({},m),{},{isShow:!0}))}for(var B=i?s-1:s,I=function(S){var M=u[S],O,P=function(){return O===void 0&&(O=t(M,S)),O};if(S===0){var A=n*(M.coordinate-n*P()/2-c);u[S]=M=nt(nt({},M),{},{tickCoord:A<0?M.coordinate-A*n:M.coordinate})}else u[S]=M=nt(nt({},M),{},{tickCoord:M.coordinate});var N=Al(n,M.tickCoord,P,c,f);N&&(c=M.tickCoord+n*(P()/2+a),u[S]=nt(nt({},M),{},{isShow:!0}))},y=0;y<B;y++)I(y);return u}function yb(n,e,t){var r=n.tick,a=n.ticks,i=n.viewBox,u=n.minTickGap,s=n.orientation,c=n.interval,f=n.tickFormatter,m=n.unit,d=n.angle;if(!a||!a.length||!r)return[];if(fn(c)||Zr.isSsr)return eK(a,typeof c=="number"&&fn(c)?c:0);var v=[],b=s==="top"||s==="bottom"?"width":"height",B=m&&b==="width"?ru(m,{fontSize:e,letterSpacing:t}):{width:0,height:0},I=function(M,O){var P=kn(f)?f(M.value,O):M.value;return b==="width"?JG(ru(P,{fontSize:e,letterSpacing:t}),B,d):ru(P,{fontSize:e,letterSpacing:t})[b]},y=a.length>=2?ot(a[1].coordinate-a[0].coordinate):1,W=nK(i,y,b);return c==="equidistantPreserveStart"?tK(y,W,I,a,u):(c==="preserveStart"||c==="preserveStartEnd"?v=pK(y,W,I,a,u,c==="preserveStartEnd"):v=iK(y,W,I,a,u),v.filter(function(S){return S.isShow}))}var uK=["viewBox"],sK=["viewBox"],lK=["ticks"];function Ri(n){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ri(n)}function pi(){return pi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},pi.apply(this,arguments)}function l3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function at(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?l3(Object(t),!0).forEach(function(r){Ib(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function I6(n,e){if(n==null)return{};var t=cK(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function cK(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function fK(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c3(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,OA(r.key),r)}}function dK(n,e,t){return e&&c3(n.prototype,e),t&&c3(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function mK(n,e,t){return e=_l(e),hK(n,_A()?Reflect.construct(e,t||[],_l(n).constructor):e.apply(n,t))}function hK(n,e){if(e&&(Ri(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vK(n)}function vK(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _A(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_A=function(){return!!n})()}function _l(n){return _l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_l(n)}function gK(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Gv(n,e)}function Gv(n,e){return Gv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gv(n,e)}function Ib(n,e,t){return e=OA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function OA(n){var e=bK(n,"string");return Ri(e)=="symbol"?e:e+""}function bK(n,e){if(Ri(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var ep=(function(n){function e(t){var r;return fK(this,e),r=mK(this,e,[t]),r.state={fontSize:"",letterSpacing:""},r}return gK(e,n),dK(e,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,u=I6(r,uK),s=this.props,c=s.viewBox,f=I6(s,sK);return!si(i,c)||!si(u,f)||!si(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,u=a.y,s=a.width,c=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,b,B,I,y,W,S,M=d?-1:1,O=r.tickSize||m,P=fn(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":b=B=r.coordinate,y=u+ +!d*c,I=y-M*O,S=I-M*v,W=P;break;case"left":I=y=r.coordinate,B=i+ +!d*s,b=B-M*O,W=b-M*v,S=P;break;case"right":I=y=r.coordinate,B=i+ +d*s,b=B+M*O,W=b+M*v,S=P;break;default:b=B=r.coordinate,y=u+ +d*c,I=y+M*O,S=I+M*v,W=P;break}return{line:{x1:b,y1:I,x2:B,y2:y},tick:{x:W,y:S}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,u;switch(a){case"left":u=i?"start":"end";break;case"right":u=i?"end":"start";break;default:u="middle";break}return u}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,u="end";switch(a){case"left":case"right":u="middle";break;case"top":u=i?"start":"end";break;default:u=i?"end":"start";break}return u}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,u=r.width,s=r.height,c=r.orientation,f=r.mirror,m=r.axisLine,d=at(at(at({},Hn(this.props,!1)),Hn(m,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=at(at({},d),{},{x1:a,y1:i+v*s,x2:a+u,y2:i+v*s})}else{var b=+(c==="left"&&!f||c==="right"&&f);d=at(at({},d),{},{x1:a+b*u,y1:i,x2:a+b*u,y2:i+s})}return E.createElement("line",pi({},d,{className:jn("recharts-cartesian-axis-line",Ot(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var u=this,s=this.props,c=s.tickLine,f=s.stroke,m=s.tick,d=s.tickFormatter,v=s.unit,b=yb(at(at({},this.props),{},{ticks:r}),a,i),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),y=Hn(this.props,!1),W=Hn(m,!1),S=at(at({},y),{},{fill:"none"},Hn(c,!1)),M=b.map(function(O,P){var A=u.getTickLineCoord(O),N=A.line,w=A.tick,H=at(at(at(at({textAnchor:B,verticalAnchor:I},y),{},{stroke:"none",fill:f},W),w),{},{index:P,payload:O,visibleTicksCount:b.length,tickFormatter:d});return E.createElement(Ln,pi({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ra(u.props,O,P)),c&&E.createElement("line",pi({},S,N,{className:jn("recharts-cartesian-axis-tick-line",Ot(c,"className"))})),m&&e.renderTickItem(m,H,"".concat(kn(d)?d(O.value,P):O.value).concat(v||"")))});return E.createElement("g",{className:"recharts-cartesian-axis-ticks"},M)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,u=a.width,s=a.height,c=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,b=I6(d,lK),B=v;return kn(c)&&(B=v&&v.length>0?c(this.props):c(b)),u<=0||s<=0||!B||!B.length?null:E.createElement(Ln,{className:jn("recharts-cartesian-axis",f),ref:function(y){r.layerReference=y}},i&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),ze.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var u;return E.isValidElement(r)?u=E.cloneElement(r,a):kn(r)?u=r(a):u=E.createElement(go,pi({},a,{className:"recharts-cartesian-axis-tick-value"}),i),u}}])})(U.Component);Ib(ep,"displayName","CartesianAxis");Ib(ep,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var yK=["x1","y1","x2","y2","key"],IK=["offset"];function Io(n){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Io(n)}function f3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function et(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?f3(Object(t),!0).forEach(function(r){BK(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function BK(n,e,t){return e=xK(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xK(n){var e=PK(n,"string");return Io(e)=="symbol"?e:e+""}function PK(n,e){if(Io(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function fo(){return fo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},fo.apply(this,arguments)}function d3(n,e){if(n==null)return{};var t=wK(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function wK(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}var WK=function(e){var t=e.fill;if(!t||t==="none")return null;var r=e.fillOpacity,a=e.x,i=e.y,u=e.width,s=e.height,c=e.ry;return E.createElement("rect",{x:a,y:i,ry:c,width:u,height:s,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function HA(n,e){var t;if(E.isValidElement(n))t=E.cloneElement(n,e);else if(kn(n))t=n(e);else{var r=e.x1,a=e.y1,i=e.x2,u=e.y2,s=e.key,c=d3(e,yK),f=Hn(c,!1);f.offset;var m=d3(f,IK);t=E.createElement("line",fo({},m,{x1:r,y1:a,x2:i,y2:u,fill:"none",key:s}))}return t}function SK(n){var e=n.x,t=n.width,r=n.horizontal,a=r===void 0?!0:r,i=n.horizontalPoints;if(!a||!i||!i.length)return null;var u=i.map(function(s,c){var f=et(et({},n),{},{x1:e,y1:s,x2:e+t,y2:s,key:"line-".concat(c),index:c});return HA(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-horizontal"},u)}function MK(n){var e=n.y,t=n.height,r=n.vertical,a=r===void 0?!0:r,i=n.verticalPoints;if(!a||!i||!i.length)return null;var u=i.map(function(s,c){var f=et(et({},n),{},{x1:s,y1:e,x2:s,y2:e+t,key:"line-".concat(c),index:c});return HA(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-vertical"},u)}function AK(n){var e=n.horizontalFill,t=n.fillOpacity,r=n.x,a=n.y,i=n.width,u=n.height,s=n.horizontalPoints,c=n.horizontal,f=c===void 0?!0:c;if(!f||!e||!e.length)return null;var m=s.map(function(v){return Math.round(v+a-a)}).sort(function(v,b){return v-b});a!==m[0]&&m.unshift(0);var d=m.map(function(v,b){var B=!m[b+1],I=B?a+u-v:m[b+1]-v;if(I<=0)return null;var y=b%e.length;return E.createElement("rect",{key:"react-".concat(b),y:v,x:r,height:I,width:i,stroke:"none",fill:e[y],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function _K(n){var e=n.vertical,t=e===void 0?!0:e,r=n.verticalFill,a=n.fillOpacity,i=n.x,u=n.y,s=n.width,c=n.height,f=n.verticalPoints;if(!t||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,b){return v-b});i!==m[0]&&m.unshift(0);var d=m.map(function(v,b){var B=!m[b+1],I=B?i+s-v:m[b+1]-v;if(I<=0)return null;var y=b%r.length;return E.createElement("rect",{key:"react-".concat(b),x:v,y:u,width:I,height:c,stroke:"none",fill:r[y],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var OK=function(e,t){var r=e.xAxis,a=e.width,i=e.height,u=e.offset;return NM(yb(et(et(et({},ep.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),u.left,u.left+u.width,t)},HK=function(e,t){var r=e.yAxis,a=e.width,i=e.height,u=e.offset;return NM(yb(et(et(et({},ep.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),u.top,u.top+u.height,t)},ei={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Ol(n){var e,t,r,a,i,u,s=hb(),c=vb(),f=bG(),m=et(et({},n),{},{stroke:(e=n.stroke)!==null&&e!==void 0?e:ei.stroke,fill:(t=n.fill)!==null&&t!==void 0?t:ei.fill,horizontal:(r=n.horizontal)!==null&&r!==void 0?r:ei.horizontal,horizontalFill:(a=n.horizontalFill)!==null&&a!==void 0?a:ei.horizontalFill,vertical:(i=n.vertical)!==null&&i!==void 0?i:ei.vertical,verticalFill:(u=n.verticalFill)!==null&&u!==void 0?u:ei.verticalFill,x:fn(n.x)?n.x:f.left,y:fn(n.y)?n.y:f.top,width:fn(n.width)?n.width:f.width,height:fn(n.height)?n.height:f.height}),d=m.x,v=m.y,b=m.width,B=m.height,I=m.syncWithTicks,y=m.horizontalValues,W=m.verticalValues,S=hG(),M=vG();if(!fn(b)||b<=0||!fn(B)||B<=0||!fn(d)||d!==+d||!fn(v)||v!==+v)return null;var O=m.verticalCoordinatesGenerator||OK,P=m.horizontalCoordinatesGenerator||HK,A=m.horizontalPoints,N=m.verticalPoints;if((!A||!A.length)&&kn(P)){var w=y&&y.length,H=P({yAxis:M?et(et({},M),{},{ticks:w?y:M.ticks}):void 0,width:s,height:c,offset:f},w?!0:I);sr(Array.isArray(H),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(H),"]")),Array.isArray(H)&&(A=H)}if((!N||!N.length)&&kn(O)){var k=W&&W.length,D=O({xAxis:S?et(et({},S),{},{ticks:k?W:S.ticks}):void 0,width:s,height:c,offset:f},k?!0:I);sr(Array.isArray(D),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(D),"]")),Array.isArray(D)&&(N=D)}return E.createElement("g",{className:"recharts-cartesian-grid"},E.createElement(WK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),E.createElement(SK,fo({},m,{offset:f,horizontalPoints:A,xAxis:S,yAxis:M})),E.createElement(MK,fo({},m,{offset:f,verticalPoints:N,xAxis:S,yAxis:M})),E.createElement(AK,fo({},m,{horizontalPoints:A})),E.createElement(_K,fo({},m,{verticalPoints:N})))}Ol.displayName="CartesianGrid";var CK=["type","layout","connectNulls","ref"],NK=["key"];function ki(n){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ki(n)}function m3(n,e){if(n==null)return{};var t=RK(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function RK(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function su(){return su=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},su.apply(this,arguments)}function h3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function wt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?h3(Object(t),!0).forEach(function(r){ir(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ti(n){return DK(n)||TK(n)||EK(n)||kK()}function kK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EK(n,e){if(n){if(typeof n=="string")return Kv(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Kv(n,e)}}function TK(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function DK(n){if(Array.isArray(n))return Kv(n)}function Kv(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function jK(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function v3(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,NA(r.key),r)}}function $K(n,e,t){return e&&v3(n.prototype,e),t&&v3(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function LK(n,e,t){return e=Hl(e),FK(n,CA()?Reflect.construct(e,t||[],Hl(n).constructor):e.apply(n,t))}function FK(n,e){if(e&&(ki(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qK(n)}function qK(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function CA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CA=function(){return!!n})()}function Hl(n){return Hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hl(n)}function zK(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Qv(n,e)}function Qv(n,e){return Qv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qv(n,e)}function ir(n,e,t){return e=NA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function NA(n){var e=UK(n,"string");return ki(e)=="symbol"?e:e+""}function UK(n,e){if(ki(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var qr=(function(n){function e(){var t;jK(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=LK(this,e,[].concat(a)),ir(t,"state",{isAnimationFinished:!0,totalLength:0}),ir(t,"generateSimpleStrokeDasharray",function(u,s){return"".concat(s,"px ").concat(u-s,"px")}),ir(t,"getStrokeDasharray",function(u,s,c){var f=c.reduce(function(W,S){return W+S});if(!f)return t.generateSimpleStrokeDasharray(s,u);for(var m=Math.floor(u/f),d=u%f,v=s-u,b=[],B=0,I=0;B<c.length;I+=c[B],++B)if(I+c[B]>d){b=[].concat(ti(c.slice(0,B)),[d-I]);break}var y=b.length%2===0?[0,v]:[v];return[].concat(ti(e.repeat(c,m)),ti(b),y).map(function(W){return"".concat(W,"px")}).join(", ")}),ir(t,"id",Da("recharts-line-")),ir(t,"pathRef",function(u){t.mainCurve=u}),ir(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0}),t.props.onAnimationEnd&&t.props.onAnimationEnd()}),ir(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1}),t.props.onAnimationStart&&t.props.onAnimationStart()}),t}return zK(e,n),$K(e,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,u=i.points,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=ut(m,np);if(!d)return null;var v=function(I,y){return{x:I.x,y:I.y,value:I.value,errorVal:le(I.payload,y)}},b={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement(Ln,b,d.map(function(B){return E.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:u,xAxis:s,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var u=this.props.isAnimationActive;if(u&&!this.state.isAnimationFinished)return null;var s=this.props,c=s.dot,f=s.points,m=s.dataKey,d=Hn(this.props,!1),v=Hn(c,!0),b=f.map(function(I,y){var W=wt(wt(wt({key:"dot-".concat(y),r:3},d),v),{},{index:y,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return e.renderDotItem(c,W)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement(Ln,su({className:"recharts-line-dots",key:"dots"},B),b)}},{key:"renderCurveStatically",value:function(r,a,i,u){var s=this.props,c=s.type,f=s.layout,m=s.connectNulls;s.ref;var d=m3(s,CK),v=wt(wt(wt({},Hn(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},u),{},{type:c,layout:f,connectNulls:m});return E.createElement(Ca,su({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,u=this.props,s=u.points,c=u.strokeDasharray,f=u.isAnimationActive,m=u.animationBegin,d=u.animationDuration,v=u.animationEasing,b=u.animationId,B=u.animateNewValues,I=u.width,y=u.height,W=this.state,S=W.prevPoints,M=W.totalLength;return E.createElement(Qt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var P=O.t;if(S){var A=S.length/s.length,N=s.map(function(R,F){var V=Math.floor(F*A);if(S[V]){var G=S[V],Y=he(G.x,R.x),Q=he(G.y,R.y);return wt(wt({},R),{},{x:Y(P),y:Q(P)})}if(B){var $=he(I*2,R.x),K=he(y/2,R.y);return wt(wt({},R),{},{x:$(P),y:K(P)})}return wt(wt({},R),{},{x:R.x,y:R.y})});return i.renderCurveStatically(N,r,a)}var w=he(0,M),H=w(P),k;if(c){var D="".concat(c).split(/[,\s]+/gim).map(function(R){return parseFloat(R)});k=i.getStrokeDasharray(H,M,D)}else k=i.generateSimpleStrokeDasharray(M,H);return i.renderCurveStatically(s,r,a,{strokeDasharray:k})})}},{key:"renderCurve",value:function(r,a){var i=this.props,u=i.points,s=i.isAnimationActive,c=this.state,f=c.prevPoints,m=c.totalLength;return s&&u&&u.length&&(!f&&m>0||!ka(f,u))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(u,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,u=a.dot,s=a.points,c=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,b=a.width,B=a.height,I=a.isAnimationActive,y=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,S=s.length===1,M=jn("recharts-line",c),O=f&&f.allowDataOverflow,P=m&&m.allowDataOverflow,A=O||P,N=En(y)?this.id:y,w=(r=Hn(u,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=w.r,k=H===void 0?3:H,D=w.strokeWidth,R=D===void 0?2:D,F=E5(u)?u:{},V=F.clipDot,G=V===void 0?!0:V,Y=k*2+R;return E.createElement(Ln,{className:M},O||P?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?v:v-b/2,y:P?d:d-B/2,width:O?b:b*2,height:P?B:B*2})),!G&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:v-Y/2,y:d-Y/2,width:b+Y,height:B+Y}))):null,!S&&this.renderCurve(A,N),this.renderErrorBar(A,N),(S||u)&&this.renderDots(A,G,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ti(r),[0]):r,u=[],s=0;s<a;++s)u=[].concat(ti(u),ti(i));return u}},{key:"renderDotItem",value:function(r,a){var i;if(E.isValidElement(r))i=E.cloneElement(r,a);else if(kn(r))i=r(a);else{var u=a.key,s=m3(a,NK),c=jn("recharts-line-dot",typeof r!="boolean"?r.className:"");i=E.createElement(t0,su({key:u},s,{className:c}))}return i}}])})(U.PureComponent);ir(qr,"displayName","Line");ir(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(qr,"getComposedData",function(n){var e=n.props,t=n.xAxis,r=n.yAxis,a=n.xAxisTicks,i=n.yAxisTicks,u=n.dataKey,s=n.bandSize,c=n.displayedData,f=n.offset,m=e.layout,d=c.map(function(v,b){var B=le(v,u);return m==="horizontal"?{x:Pi({axis:t,ticks:a,bandSize:s,entry:v,index:b}),y:En(B)?null:r.scale(B),value:B,payload:v}:{x:En(B)?null:t.scale(B),y:Pi({axis:r,ticks:i,bandSize:s,entry:v,index:b}),value:B,payload:v}});return wt({points:d,layout:m},f)});var VK=["layout","type","stroke","connectNulls","isRange","ref"],GK=["key"],RA;function Ei(n){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ei(n)}function kA(n,e){if(n==null)return{};var t=KK(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function KK(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function mo(){return mo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},mo.apply(this,arguments)}function g3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function wa(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?g3(Object(t),!0).forEach(function(r){Ir(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function QK(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function b3(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,TA(r.key),r)}}function YK(n,e,t){return e&&b3(n.prototype,e),t&&b3(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function XK(n,e,t){return e=Cl(e),ZK(n,EA()?Reflect.construct(e,t||[],Cl(n).constructor):e.apply(n,t))}function ZK(n,e){if(e&&(Ei(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JK(n)}function JK(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function EA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EA=function(){return!!n})()}function Cl(n){return Cl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Cl(n)}function nQ(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Yv(n,e)}function Yv(n,e){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(n,e)}function Ir(n,e,t){return e=TA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function TA(n){var e=eQ(n,"string");return Ei(e)=="symbol"?e:e+""}function eQ(n,e){if(Ei(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Wo=(function(n){function e(){var t;QK(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=XK(this,e,[].concat(a)),Ir(t,"state",{isAnimationFinished:!0}),Ir(t,"id",Da("recharts-area-")),Ir(t,"handleAnimationEnd",function(){var u=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),kn(u)&&u()}),Ir(t,"handleAnimationStart",function(){var u=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),kn(u)&&u()}),t}return nQ(e,n),YK(e,[{key:"renderDots",value:function(r,a,i){var u=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(u&&!s)return null;var c=this.props,f=c.dot,m=c.points,d=c.dataKey,v=Hn(this.props,!1),b=Hn(f,!0),B=m.map(function(y,W){var S=wa(wa(wa({key:"dot-".concat(W),r:3},v),b),{},{index:W,cx:y.x,cy:y.y,dataKey:d,value:y.value,payload:y.payload,points:m});return e.renderDotItem(f,S)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement(Ln,mo({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,u=a.points,s=a.strokeWidth,c=u[0].x,f=u[u.length-1].x,m=r*Math.abs(c-f),d=Ma(u.map(function(v){return v.y||0}));return fn(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.y||0})),d)),fn(d)?E.createElement("rect",{x:c<f?c:c-m,y:0,width:m,height:Math.floor(d+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,u=a.points,s=a.strokeWidth,c=u[0].y,f=u[u.length-1].y,m=r*Math.abs(c-f),d=Ma(u.map(function(v){return v.x||0}));return fn(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.x||0})),d)),fn(d)?E.createElement("rect",{x:0,y:c<f?c:c-m,width:d+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,u){var s=this.props,c=s.layout,f=s.type,m=s.stroke,d=s.connectNulls,v=s.isRange;s.ref;var b=kA(s,VK);return E.createElement(Ln,{clipPath:i?"url(#clipPath-".concat(u,")"):null},E.createElement(Ca,mo({},Hn(b,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&E.createElement(Ca,mo({},Hn(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&E.createElement(Ca,mo({},Hn(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,u=this.props,s=u.points,c=u.baseLine,f=u.isAnimationActive,m=u.animationBegin,d=u.animationDuration,v=u.animationEasing,b=u.animationId,B=this.state,I=B.prevPoints,y=B.prevBaseLine;return E.createElement(Qt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(W){var S=W.t;if(I){var M=I.length/s.length,O=s.map(function(w,H){var k=Math.floor(H*M);if(I[k]){var D=I[k],R=he(D.x,w.x),F=he(D.y,w.y);return wa(wa({},w),{},{x:R(S),y:F(S)})}return w}),P;if(fn(c)&&typeof c=="number"){var A=he(y,c);P=A(S)}else if(En(c)||Qi(c)){var N=he(y,0);P=N(S)}else P=c.map(function(w,H){var k=Math.floor(H*M);if(y[k]){var D=y[k],R=he(D.x,w.x),F=he(D.y,w.y);return wa(wa({},w),{},{x:R(S),y:F(S)})}return w});return i.renderAreaStatically(O,P,r,a)}return E.createElement(Ln,null,E.createElement("defs",null,E.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(S))),E.createElement(Ln,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(s,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,u=i.points,s=i.baseLine,c=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&u&&u.length&&(!m&&v>0||!ka(m,u)||!ka(d,s))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(u,s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,u=a.dot,s=a.points,c=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,b=a.width,B=a.height,I=a.isAnimationActive,y=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,S=s.length===1,M=jn("recharts-area",c),O=d&&d.allowDataOverflow,P=v&&v.allowDataOverflow,A=O||P,N=En(y)?this.id:y,w=(r=Hn(u,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=w.r,k=H===void 0?3:H,D=w.strokeWidth,R=D===void 0?2:D,F=E5(u)?u:{},V=F.clipDot,G=V===void 0?!0:V,Y=k*2+R;return E.createElement(Ln,{className:M},O||P?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?m:m-b/2,y:P?f:f-B/2,width:O?b:b*2,height:P?B:B*2})),!G&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:m-Y/2,y:f-Y/2,width:b+Y,height:B+Y}))):null,S?null:this.renderArea(A,N),(u||S)&&this.renderDots(A,G,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(U.PureComponent);RA=Wo;Ir(Wo,"displayName","Area");Ir(Wo,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(Wo,"getBaseValue",function(n,e,t,r){var a=n.layout,i=n.baseValue,u=e.props.baseValue,s=u??i;if(fn(s)&&typeof s=="number")return s;var c=a==="horizontal"?r:t,f=c.scale.domain();if(c.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return s==="dataMin"?d:s==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return s==="dataMin"?f[0]:s==="dataMax"?f[1]:f[0]});Ir(Wo,"getComposedData",function(n){var e=n.props,t=n.item,r=n.xAxis,a=n.yAxis,i=n.xAxisTicks,u=n.yAxisTicks,s=n.bandSize,c=n.dataKey,f=n.stackedData,m=n.dataStartIndex,d=n.displayedData,v=n.offset,b=e.layout,B=f&&f.length,I=RA.getBaseValue(e,t,r,a),y=b==="horizontal",W=!1,S=d.map(function(O,P){var A;B?A=f[m+P]:(A=le(O,c),Array.isArray(A)?W=!0:A=[I,A]);var N=A[1]==null||B&&le(O,c)==null;return y?{x:Pi({axis:r,ticks:i,bandSize:s,entry:O,index:P}),y:N?null:a.scale(A[1]),value:A,payload:O}:{x:N?null:r.scale(A[1]),y:Pi({axis:a,ticks:u,bandSize:s,entry:O,index:P}),value:A,payload:O}}),M;return B||W?M=S.map(function(O){var P=Array.isArray(O.value)?O.value[0]:null;return y?{x:O.x,y:P!=null&&O.y!=null?a.scale(P):null}:{x:P!=null?r.scale(P):null,y:O.y}}):M=y?a.scale(I):r.scale(I),wa({points:S,baseLine:M,layout:b,isRange:W},v)});Ir(Wo,"renderDotItem",function(n,e){var t;if(E.isValidElement(n))t=E.cloneElement(n,e);else if(kn(n))t=n(e);else{var r=jn("recharts-area-dot",typeof n!="boolean"?n.className:""),a=e.key,i=kA(e,GK);t=E.createElement(t0,mo({},i,{key:a,className:r}))}return t});function Ti(n){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ti(n)}function tQ(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function rQ(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,$A(r.key),r)}}function aQ(n,e,t){return e&&rQ(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function oQ(n,e,t){return e=Nl(e),iQ(n,DA()?Reflect.construct(e,t||[],Nl(n).constructor):e.apply(n,t))}function iQ(n,e){if(e&&(Ti(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pQ(n)}function pQ(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function DA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DA=function(){return!!n})()}function Nl(n){return Nl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Nl(n)}function uQ(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Xv(n,e)}function Xv(n,e){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(n,e)}function jA(n,e,t){return e=$A(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function $A(n){var e=sQ(n,"string");return Ti(e)=="symbol"?e:e+""}function sQ(n,e){if(Ti(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var B2=(function(n){function e(){return tQ(this,e),oQ(this,e,arguments)}return uQ(e,n),aQ(e,[{key:"render",value:function(){return null}}])})(E.Component);jA(B2,"displayName","ZAxis");jA(B2,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var lQ=["option","isActive"];function lu(){return lu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},lu.apply(this,arguments)}function cQ(n,e){if(n==null)return{};var t=fQ(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function fQ(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function dQ(n){var e=n.option,t=n.isActive,r=cQ(n,lQ);return typeof e=="string"?E.createElement(bl,lu({option:E.createElement(Yl,lu({type:e},r)),isActive:t,shapeType:"symbols"},r)):E.createElement(bl,lu({option:e,isActive:t,shapeType:"symbols"},r))}function Di(n){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Di(n)}function cu(){return cu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},cu.apply(this,arguments)}function y3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function qt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?y3(Object(t),!0).forEach(function(r){_a(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function mQ(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function I3(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,FA(r.key),r)}}function hQ(n,e,t){return e&&I3(n.prototype,e),t&&I3(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function vQ(n,e,t){return e=Rl(e),gQ(n,LA()?Reflect.construct(e,t||[],Rl(n).constructor):e.apply(n,t))}function gQ(n,e){if(e&&(Di(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bQ(n)}function bQ(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function LA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LA=function(){return!!n})()}function Rl(n){return Rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Rl(n)}function yQ(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Zv(n,e)}function Zv(n,e){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(n,e)}function _a(n,e,t){return e=FA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function FA(n){var e=IQ(n,"string");return Di(e)=="symbol"?e:e+""}function IQ(n,e){if(Di(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var x2=(function(n){function e(){var t;mQ(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=vQ(this,e,[].concat(a)),_a(t,"state",{isAnimationFinished:!1}),_a(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),_a(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),_a(t,"id",Da("recharts-scatter-")),t}return yQ(e,n),hQ(e,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,u=i.shape,s=i.activeShape,c=i.activeIndex,f=Hn(this.props,!1);return r.map(function(m,d){var v=c===d,b=v?s:u,B=qt(qt({},f),m);return E.createElement(Ln,cu({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ra(a.props,m,d),{role:"img"}),E.createElement(dQ,cu({option:b,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,u=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return E.createElement(Qt,{begin:s,duration:c,isActive:u,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var b=v.t,B=i.map(function(I,y){var W=d&&d[y];if(W){var S=he(W.cx,I.cx),M=he(W.cy,I.cy),O=he(W.size,I.size);return qt(qt({},I),{},{cx:S(b),cy:M(b),size:O(b)})}var P=he(0,I.size);return qt(qt({},I),{},{size:P(b)})});return E.createElement(Ln,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,u=this.state.prevPoints;return i&&a&&a.length&&(!u||!ka(u,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,u=a.xAxis,s=a.yAxis,c=a.children,f=ut(c,np);return f?f.map(function(m,d){var v=m.props,b=v.direction,B=v.dataKey;return E.cloneElement(m,{key:"".concat(b,"-").concat(B,"-").concat(i[d]),data:i,xAxis:u,yAxis:s,layout:b==="x"?"vertical":"horizontal",dataPointFormatter:function(y,W){return{x:y.cx,y:y.cy,value:b==="x"?+y.node.x:+y.node.y,errorVal:le(y,W)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,u=r.lineType,s=r.lineJointType,c=Hn(this.props,!1),f=Hn(i,!1),m,d;if(u==="joint")m=a.map(function(M){return{x:M.cx,y:M.cy}});else if(u==="fitting"){var v=fE(a),b=v.xmin,B=v.xmax,I=v.a,y=v.b,W=function(O){return I*O+y};m=[{x:b,y:W(b)},{x:B,y:W(B)}]}var S=qt(qt(qt({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:m});return E.isValidElement(i)?d=E.cloneElement(i,S):kn(i)?d=i(S):d=E.createElement(Ca,cu({},S,{type:s})),E.createElement(Ln,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,u=r.line,s=r.className,c=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,b=r.height,B=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var y=this.state.isAnimationFinished,W=jn("recharts-scatter",s),S=c&&c.allowDataOverflow,M=f&&f.allowDataOverflow,O=S||M,P=En(B)?this.id:B;return E.createElement(Ln,{className:W,clipPath:O?"url(#clipPath-".concat(P,")"):null},S||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(P)},E.createElement("rect",{x:S?m:m-v/2,y:M?d:d-b/2,width:S?v:v*2,height:M?b:b*2}))):null,u&&this.renderLine(),this.renderErrorBar(),E.createElement(Ln,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||y)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(U.PureComponent);_a(x2,"displayName","Scatter");_a(x2,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});_a(x2,"getComposedData",function(n){var e=n.xAxis,t=n.yAxis,r=n.zAxis,a=n.item,i=n.displayedData,u=n.xAxisTicks,s=n.yAxisTicks,c=n.offset,f=a.props.tooltipType,m=ut(a.props.children,Xu),d=En(e.dataKey)?a.props.dataKey:e.dataKey,v=En(t.dataKey)?a.props.dataKey:t.dataKey,b=r&&r.dataKey,B=r?r.range:B2.defaultProps.range,I=B&&B[0],y=e.scale.bandwidth?e.scale.bandwidth():0,W=t.scale.bandwidth?t.scale.bandwidth():0,S=i.map(function(M,O){var P=le(M,d),A=le(M,v),N=!En(b)&&le(M,b)||"-",w=[{name:En(e.dataKey)?a.props.name:e.name||e.dataKey,unit:e.unit||"",value:P,payload:M,dataKey:d,type:f},{name:En(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:A,payload:M,dataKey:v,type:f}];N!=="-"&&w.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:M,dataKey:b,type:f});var H=Pi({axis:e,ticks:u,bandSize:y,entry:M,index:O,dataKey:d}),k=Pi({axis:t,ticks:s,bandSize:W,entry:M,index:O,dataKey:v}),D=N!=="-"?r.scale(N):I,R=Math.sqrt(Math.max(D,0)/Math.PI);return qt(qt({},M),{},{cx:H,cy:k,x:H-R,y:k-R,xAxis:e,yAxis:t,zAxis:r,width:2*R,height:2*R,size:D,node:{x:P,y:A,z:N},tooltipPayload:w,tooltipPosition:{x:H,y:k},payload:M},m&&m[O]&&m[O].props)});return qt({points:S},c)});function ji(n){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ji(n)}function BQ(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function xQ(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,UA(r.key),r)}}function PQ(n,e,t){return e&&xQ(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function wQ(n,e,t){return e=kl(e),WQ(n,qA()?Reflect.construct(e,t||[],kl(n).constructor):e.apply(n,t))}function WQ(n,e){if(e&&(ji(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SQ(n)}function SQ(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function qA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qA=function(){return!!n})()}function kl(n){return kl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},kl(n)}function MQ(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Jv(n,e)}function Jv(n,e){return Jv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jv(n,e)}function zA(n,e,t){return e=UA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function UA(n){var e=AQ(n,"string");return ji(e)=="symbol"?e:e+""}function AQ(n,e){if(ji(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function ng(){return ng=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ng.apply(this,arguments)}function _Q(n){var e=n.xAxisId,t=hb(),r=vb(),a=IA(e);return a==null?null:E.createElement(ep,ng({},a,{className:jn("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:t,height:r},ticksGenerator:function(u){return Fr(u,!0)}}))}var Ea=(function(n){function e(){return BQ(this,e),wQ(this,e,arguments)}return MQ(e,n),PQ(e,[{key:"render",value:function(){return E.createElement(_Q,this.props)}}])})(E.Component);zA(Ea,"displayName","XAxis");zA(Ea,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function $i(n){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$i(n)}function OQ(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function HQ(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,KA(r.key),r)}}function CQ(n,e,t){return e&&HQ(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function NQ(n,e,t){return e=El(e),RQ(n,VA()?Reflect.construct(e,t||[],El(n).constructor):e.apply(n,t))}function RQ(n,e){if(e&&($i(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kQ(n)}function kQ(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function VA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VA=function(){return!!n})()}function El(n){return El=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},El(n)}function EQ(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&eg(n,e)}function eg(n,e){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(n,e)}function GA(n,e,t){return e=KA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function KA(n){var e=TQ(n,"string");return $i(e)=="symbol"?e:e+""}function TQ(n,e){if($i(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function tg(){return tg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tg.apply(this,arguments)}var DQ=function(e){var t=e.yAxisId,r=hb(),a=vb(),i=BA(t);return i==null?null:E.createElement(ep,tg({},i,{className:jn("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(s){return Fr(s,!0)}}))},Br=(function(n){function e(){return OQ(this,e),NQ(this,e,arguments)}return EQ(e,n),CQ(e,[{key:"render",value:function(){return E.createElement(DQ,this.props)}}])})(E.Component);GA(Br,"displayName","YAxis");GA(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function B3(n){return FQ(n)||LQ(n)||$Q(n)||jQ()}function jQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $Q(n,e){if(n){if(typeof n=="string")return rg(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rg(n,e)}}function LQ(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function FQ(n){if(Array.isArray(n))return rg(n)}function rg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var ag=function(e,t,r,a,i){var u=ut(e,bb),s=ut(e,b2),c=[].concat(B3(u),B3(s)),f=ut(e,I2),m="".concat(a,"Id"),d=a[0],v=t;if(c.length&&(v=c.reduce(function(I,y){if(y.props[m]===r&&Pr(y.props,"extendDomain")&&fn(y.props[d])){var W=y.props[d];return[Math.min(I[0],W),Math.max(I[1],W)]}return I},v)),f.length){var b="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,y){if(y.props[m]===r&&Pr(y.props,"extendDomain")&&fn(y.props[b])&&fn(y.props[B])){var W=y.props[b],S=y.props[B];return[Math.min(I[0],W,S),Math.max(I[1],W,S)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,y){return fn(y)?[Math.min(I[0],y),Math.max(I[1],y)]:I},v)),v},B6={exports:{}},x3;function qQ(){return x3||(x3=1,(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function a(c,f,m){this.fn=c,this.context=f,this.once=m||!1}function i(c,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var b=new a(m,d||c,v),B=t?t+f:f;return c._events[B]?c._events[B].fn?c._events[B]=[c._events[B],b]:c._events[B].push(b):(c._events[B]=b,c._eventsCount++),c}function u(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)e.call(m,d)&&f.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},s.prototype.listeners=function(f){var m=t?t+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,b=d.length,B=new Array(b);v<b;v++)B[v]=d[v].fn;return B},s.prototype.listenerCount=function(f){var m=t?t+f:f,d=this._events[m];return d?d.fn?1:d.length:0},s.prototype.emit=function(f,m,d,v,b,B){var I=t?t+f:f;if(!this._events[I])return!1;var y=this._events[I],W=arguments.length,S,M;if(y.fn){switch(y.once&&this.removeListener(f,y.fn,void 0,!0),W){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,m),!0;case 3:return y.fn.call(y.context,m,d),!0;case 4:return y.fn.call(y.context,m,d,v),!0;case 5:return y.fn.call(y.context,m,d,v,b),!0;case 6:return y.fn.call(y.context,m,d,v,b,B),!0}for(M=1,S=new Array(W-1);M<W;M++)S[M-1]=arguments[M];y.fn.apply(y.context,S)}else{var O=y.length,P;for(M=0;M<O;M++)switch(y[M].once&&this.removeListener(f,y[M].fn,void 0,!0),W){case 1:y[M].fn.call(y[M].context);break;case 2:y[M].fn.call(y[M].context,m);break;case 3:y[M].fn.call(y[M].context,m,d);break;case 4:y[M].fn.call(y[M].context,m,d,v);break;default:if(!S)for(P=1,S=new Array(W-1);P<W;P++)S[P-1]=arguments[P];y[M].fn.apply(y[M].context,S)}}return!0},s.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},s.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},s.prototype.removeListener=function(f,m,d,v){var b=t?t+f:f;if(!this._events[b])return this;if(!m)return u(this,b),this;var B=this._events[b];if(B.fn)B.fn===m&&(!v||B.once)&&(!d||B.context===d)&&u(this,b);else{for(var I=0,y=[],W=B.length;I<W;I++)(B[I].fn!==m||v&&!B[I].once||d&&B[I].context!==d)&&y.push(B[I]);y.length?this._events[b]=y.length===1?y[0]:y:u(this,b)}return this},s.prototype.removeAllListeners=function(f){var m;return f?(m=t?t+f:f,this._events[m]&&u(this,m)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,n.exports=s})(B6)),B6.exports}var zQ=qQ();const UQ=Zn(zQ);var x6=new UQ,P6="recharts.syncMouseEvents";function Vu(n){"@babel/helpers - typeof";return Vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vu(n)}function VQ(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function GQ(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,QA(r.key),r)}}function KQ(n,e,t){return e&&GQ(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function w6(n,e,t){return e=QA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function QA(n){var e=QQ(n,"string");return Vu(e)=="symbol"?e:e+""}function QQ(n,e){if(Vu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Vu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var YQ=(function(){function n(){VQ(this,n),w6(this,"activeIndex",0),w6(this,"coordinateList",[]),w6(this,"layout","horizontal")}return KQ(n,[{key:"setDetails",value:function(t){var r,a=t.coordinateList,i=a===void 0?null:a,u=t.container,s=u===void 0?null:u,c=t.layout,f=c===void 0?null:c,m=t.offset,d=m===void 0?null:m,v=t.mouseHandlerCallback,b=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=s??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=b??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(t){if(this.coordinateList.length!==0)switch(t.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(t){this.activeIndex=t}},{key:"spoofMouse",value:function(){var t,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,u=a.y,s=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((t=window)===null||t===void 0?void 0:t.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=u+this.offset.top+s/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function XQ(n,e,t){if(t==="number"&&e===!0&&Array.isArray(n)){var r=n==null?void 0:n[0],a=n==null?void 0:n[1];if(r&&a&&fn(r)&&fn(a))return!0}return!1}function ZQ(n,e,t,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:n==="horizontal"?e.x-a:t.left+.5,y:n==="horizontal"?t.top+.5:e.y-a,width:n==="horizontal"?r:t.width-1,height:n==="horizontal"?t.height-1:r}}function YA(n){var e=n.cx,t=n.cy,r=n.radius,a=n.startAngle,i=n.endAngle,u=ie(e,t,r,a),s=ie(e,t,r,i);return{points:[u,s],cx:e,cy:t,radius:r,startAngle:a,endAngle:i}}function JQ(n,e,t){var r,a,i,u;if(n==="horizontal")r=e.x,i=r,a=t.top,u=t.top+t.height;else if(n==="vertical")a=e.y,u=a,r=t.left,i=t.left+t.width;else if(e.cx!=null&&e.cy!=null)if(n==="centric"){var s=e.cx,c=e.cy,f=e.innerRadius,m=e.outerRadius,d=e.angle,v=ie(s,c,f,d),b=ie(s,c,m,d);r=v.x,a=v.y,i=b.x,u=b.y}else return YA(e);return[{x:r,y:a},{x:i,y:u}]}function Gu(n){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(n)}function P3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Ss(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?P3(Object(t),!0).forEach(function(r){nY(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):P3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function nY(n,e,t){return e=eY(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function eY(n){var e=tY(n,"string");return Gu(e)=="symbol"?e:e+""}function tY(n,e){if(Gu(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Gu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function rY(n){var e,t,r=n.element,a=n.tooltipEventType,i=n.isActive,u=n.activeCoordinate,s=n.activePayload,c=n.offset,f=n.activeTooltipIndex,m=n.tooltipAxisBandSize,d=n.layout,v=n.chartName,b=(e=r.props.cursor)!==null&&e!==void 0?e:(t=r.type.defaultProps)===null||t===void 0?void 0:t.cursor;if(!r||!b||!i||!u||v!=="ScatterChart"&&a!=="axis")return null;var B,I=Ca;if(v==="ScatterChart")B=u,I=Yz;else if(v==="BarChart")B=ZQ(d,u,c,m),I=lb;else if(d==="radial"){var y=YA(u),W=y.cx,S=y.cy,M=y.radius,O=y.startAngle,P=y.endAngle;B={cx:W,cy:S,startAngle:O,endAngle:P,innerRadius:M,outerRadius:M},I=zM}else B={points:JQ(d,u,c)},I=Ca;var A=Ss(Ss(Ss(Ss({stroke:"#ccc",pointerEvents:"none"},c),B),Hn(b,!1)),{},{payload:s,payloadIndex:f,className:jn("recharts-tooltip-cursor",b.className)});return U.isValidElement(b)?U.cloneElement(b,A):U.createElement(I,A)}var aY=["item"],oY=["children","className","width","height","style","compact","title","desc"];function Li(n){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Li(n)}function ui(){return ui=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ui.apply(this,arguments)}function w3(n,e){return uY(n)||pY(n,e)||ZA(n,e)||iY()}function iY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pY(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,u,s=[],c=!0,f=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return s}}function uY(n){if(Array.isArray(n))return n}function W3(n,e){if(n==null)return{};var t=sY(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function sY(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function lY(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function cY(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,JA(r.key),r)}}function fY(n,e,t){return e&&cY(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function dY(n,e,t){return e=Tl(e),mY(n,XA()?Reflect.construct(e,t||[],Tl(n).constructor):e.apply(n,t))}function mY(n,e){if(e&&(Li(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hY(n)}function hY(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function XA(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XA=function(){return!!n})()}function Tl(n){return Tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Tl(n)}function vY(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&og(n,e)}function og(n,e){return og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},og(n,e)}function Fi(n){return yY(n)||bY(n)||ZA(n)||gY()}function gY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZA(n,e){if(n){if(typeof n=="string")return ig(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ig(n,e)}}function bY(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yY(n){if(Array.isArray(n))return ig(n)}function ig(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function S3(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function on(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?S3(Object(t),!0).forEach(function(r){Tn(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S3(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Tn(n,e,t){return e=JA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function JA(n){var e=IY(n,"string");return Li(e)=="symbol"?e:e+""}function IY(n,e){if(Li(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var BY={xAxis:["bottom","top"],yAxis:["left","right"]},xY={width:"100%",height:"100%"},n_={x:0,y:0};function Ms(n){return n}var PY=function(e,t){return t==="horizontal"?e.x:t==="vertical"?e.y:t==="centric"?e.angle:e.radius},wY=function(e,t,r,a){var i=t.find(function(m){return m&&m.index===r});if(i){if(e==="horizontal")return{x:i.coordinate,y:a.y};if(e==="vertical")return{x:a.x,y:i.coordinate};if(e==="centric"){var u=i.coordinate,s=a.radius;return on(on(on({},a),ie(a.cx,a.cy,s,u)),{},{angle:u,radius:s})}var c=i.coordinate,f=a.angle;return on(on(on({},a),ie(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return n_},P2=function(e,t){var r=t.graphicalItems,a=t.dataStartIndex,i=t.dataEndIndex,u=(r??[]).reduce(function(s,c){var f=c.props.data;return f&&f.length?[].concat(Fi(s),Fi(f)):s},[]);return u.length>0?u:e&&e.length&&fn(a)&&fn(i)?e.slice(a,i+1):[]};function e_(n){return n==="number"?[0,"auto"]:void 0}var pg=function(e,t,r,a){var i=e.graphicalItems,u=e.tooltipAxis,s=P2(t,e);return r<0||!i||!i.length||r>=s.length?null:i.reduce(function(c,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:t;d&&e.dataStartIndex+e.dataEndIndex!==0&&e.dataEndIndex-e.dataStartIndex>=r&&(d=d.slice(e.dataStartIndex,e.dataEndIndex+1));var v;if(u.dataKey&&!u.allowDuplicatedCategory){var b=d===void 0?s:d;v=Rs(b,u.dataKey,a)}else v=d&&d[r]||s[r];return v?[].concat(Fi(c),[DM(f,v)]):c},[])},M3=function(e,t,r,a){var i=a||{x:e.chartX,y:e.chartY},u=PY(i,r),s=e.orderedTooltipTicks,c=e.tooltipAxis,f=e.tooltipTicks,m=g9(u,s,f,c);if(m>=0&&f){var d=f[m]&&f[m].value,v=pg(e,t,m,d),b=wY(r,s,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:b}}return null},WY=function(e,t){var r=t.axes,a=t.graphicalItems,i=t.axisType,u=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=e.layout,d=e.children,v=e.stackOffset,b=CM(m,i);return r.reduce(function(B,I){var y,W=I.type.defaultProps!==void 0?on(on({},I.type.defaultProps),I.props):I.props,S=W.type,M=W.dataKey,O=W.allowDataOverflow,P=W.allowDuplicatedCategory,A=W.scale,N=W.ticks,w=W.includeHidden,H=W[u];if(B[H])return B;var k=P2(e.data,{graphicalItems:a.filter(function(L){var Z,ln=u in L.props?L.props[u]:(Z=L.type.defaultProps)===null||Z===void 0?void 0:Z[u];return ln===H}),dataStartIndex:c,dataEndIndex:f}),D=k.length,R,F,V;XQ(W.domain,O,S)&&(R=bv(W.domain,null,O),b&&(S==="number"||A!=="auto")&&(V=ou(k,M,"category")));var G=e_(S);if(!R||R.length===0){var Y,Q=(Y=W.domain)!==null&&Y!==void 0?Y:G;if(M){if(R=ou(k,M,S),S==="category"&&b){var $=cE(R);P&&$?(F=R,R=Il(0,D)):P||(R=WW(Q,R,I).reduce(function(L,Z){return L.indexOf(Z)>=0?L:[].concat(Fi(L),[Z])},[]))}else if(S==="category")P?R=R.filter(function(L){return L!==""&&!En(L)}):R=WW(Q,R,I).reduce(function(L,Z){return L.indexOf(Z)>=0||Z===""||En(Z)?L:[].concat(Fi(L),[Z])},[]);else if(S==="number"){var K=x9(k,a.filter(function(L){var Z,ln,vn=u in L.props?L.props[u]:(Z=L.type.defaultProps)===null||Z===void 0?void 0:Z[u],Bn="hide"in L.props?L.props.hide:(ln=L.type.defaultProps)===null||ln===void 0?void 0:ln.hide;return vn===H&&(w||!Bn)}),M,i,m);K&&(R=K)}b&&(S==="number"||A!=="auto")&&(V=ou(k,M,"category"))}else b?R=Il(0,D):s&&s[H]&&s[H].hasStack&&S==="number"?R=v==="expand"?[0,1]:TM(s[H].stackGroups,c,f):R=HM(k,a.filter(function(L){var Z=u in L.props?L.props[u]:L.type.defaultProps[u],ln="hide"in L.props?L.props.hide:L.type.defaultProps.hide;return Z===H&&(w||!ln)}),S,m,!0);if(S==="number")R=ag(d,R,H,i,N),Q&&(R=bv(Q,R,O));else if(S==="category"&&Q){var en=Q,T=R.every(function(L){return en.indexOf(L)>=0});T&&(R=en)}}return on(on({},B),{},Tn({},H,on(on({},W),{},{axisType:i,domain:R,categoricalDomain:V,duplicateDomain:F,originalDomain:(y=W.domain)!==null&&y!==void 0?y:G,isCategorical:b,layout:m})))},{})},SY=function(e,t){var r=t.graphicalItems,a=t.Axis,i=t.axisType,u=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=e.layout,d=e.children,v=P2(e.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),b=v.length,B=CM(m,i),I=-1;return r.reduce(function(y,W){var S=W.type.defaultProps!==void 0?on(on({},W.type.defaultProps),W.props):W.props,M=S[u],O=e_("number");if(!y[M]){I++;var P;return B?P=Il(0,b):s&&s[M]&&s[M].hasStack?(P=TM(s[M].stackGroups,c,f),P=ag(d,P,M,i)):(P=bv(O,HM(v,r.filter(function(A){var N,w,H=u in A.props?A.props[u]:(N=A.type.defaultProps)===null||N===void 0?void 0:N[u],k="hide"in A.props?A.props.hide:(w=A.type.defaultProps)===null||w===void 0?void 0:w.hide;return H===M&&!k}),"number",m),a.defaultProps.allowDataOverflow),P=ag(d,P,M,i)),on(on({},y),{},Tn({},M,on(on({axisType:i},a.defaultProps),{},{hide:!0,orientation:Ot(BY,"".concat(i,".").concat(I%2),null),domain:P,originalDomain:O,isCategorical:B,layout:m})))}return y},{})},MY=function(e,t){var r=t.axisType,a=r===void 0?"xAxis":r,i=t.AxisComp,u=t.graphicalItems,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=e.children,d="".concat(a,"Id"),v=ut(m,i),b={};return v&&v.length?b=WY(e,{axes:v,graphicalItems:u,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f}):u&&u.length&&(b=SY(e,{Axis:i,graphicalItems:u,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f})),b},AY=function(e){var t=Sa(e),r=Fr(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Eg(r,function(a){return a.coordinate}),tooltipAxis:t,tooltipAxisBandSize:il(t,r)}},A3=function(e){var t=e.children,r=e.defaultShowTooltip,a=St(t,_i),i=0,u=0;return e.data&&e.data.length!==0&&(u=e.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(u=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:u,activeTooltipIndex:-1,isTooltipActive:!!r}},_Y=function(e){return!e||!e.length?!1:e.some(function(t){var r=Ur(t&&t.type);return r&&r.indexOf("Bar")>=0})},_3=function(e){return e==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:e==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:e==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},OY=function(e,t){var r=e.props,a=e.graphicalItems,i=e.xAxisMap,u=i===void 0?{}:i,s=e.yAxisMap,c=s===void 0?{}:s,f=r.width,m=r.height,d=r.children,v=r.margin||{},b=St(d,_i),B=St(d,Oa),I=Object.keys(c).reduce(function(P,A){var N=c[A],w=N.orientation;return!N.mirror&&!N.hide?on(on({},P),{},Tn({},w,P[w]+N.width)):P},{left:v.left||0,right:v.right||0}),y=Object.keys(u).reduce(function(P,A){var N=u[A],w=N.orientation;return!N.mirror&&!N.hide?on(on({},P),{},Tn({},w,Ot(P,"".concat(w))+N.height)):P},{top:v.top||0,bottom:v.bottom||0}),W=on(on({},y),I),S=W.bottom;b&&(W.bottom+=b.props.height||_i.defaultProps.height),B&&t&&(W=I9(W,a,r,t));var M=f-W.left-W.right,O=m-W.top-W.bottom;return on(on({brushBottom:S},W),{},{width:Math.max(M,0),height:Math.max(O,0)})},HY=function(e,t){if(t==="xAxis")return e[t].width;if(t==="yAxis")return e[t].height},w2=function(e){var t=e.chartName,r=e.GraphicalChild,a=e.defaultTooltipEventType,i=a===void 0?"axis":a,u=e.validateTooltipEventTypes,s=u===void 0?["axis"]:u,c=e.axisComponents,f=e.legendContent,m=e.formatAxisMap,d=e.defaultProps,v=function(W,S){var M=S.graphicalItems,O=S.stackGroups,P=S.offset,A=S.updateId,N=S.dataStartIndex,w=S.dataEndIndex,H=W.barSize,k=W.layout,D=W.barGap,R=W.barCategoryGap,F=W.maxBarSize,V=_3(k),G=V.numericAxisName,Y=V.cateAxisName,Q=_Y(M),$=[];return M.forEach(function(K,en){var T=P2(W.data,{graphicalItems:[K],dataStartIndex:N,dataEndIndex:w}),L=K.type.defaultProps!==void 0?on(on({},K.type.defaultProps),K.props):K.props,Z=L.dataKey,ln=L.maxBarSize,vn=L["".concat(G,"Id")],Bn=L["".concat(Y,"Id")],xn={},mn=c.reduce(function(xe,ge){var Ht=S["".concat(ge.axisType,"Map")],be=L["".concat(ge.axisType,"Id")];Ht&&Ht[be]||ge.axisType==="zAxis"||yo();var Qe=Ht[be];return on(on({},xe),{},Tn(Tn({},ge.axisType,Qe),"".concat(ge.axisType,"Ticks"),Fr(Qe)))},xn),an=mn[Y],rn=mn["".concat(Y,"Ticks")],pn=O&&O[vn]&&O[vn].hasStack&&H9(K,O[vn].stackGroups),J=Ur(K.type).indexOf("Bar")>=0,bn=il(an,rn),hn=[],yn=Q&&b9({barSize:H,stackGroups:O,totalSize:HY(mn,Y)});if(J){var gn,wn,$n=En(ln)?F:ln,zn=(gn=(wn=il(an,rn,!0))!==null&&wn!==void 0?wn:$n)!==null&&gn!==void 0?gn:0;hn=y9({barGap:D,barCategoryGap:R,bandSize:zn!==bn?zn:bn,sizeList:yn[Bn],maxBarSize:$n}),zn!==bn&&(hn=hn.map(function(xe){return on(on({},xe),{},{position:on(on({},xe.position),{},{offset:xe.position.offset-zn/2})})}))}var Qn=K&&K.type&&K.type.getComposedData;Qn&&$.push({props:on(on({},Qn(on(on({},mn),{},{displayedData:T,props:W,dataKey:Z,item:K,bandSize:bn,barPosition:hn,offset:P,stackedData:pn,layout:k,dataStartIndex:N,dataEndIndex:w}))),{},Tn(Tn(Tn({key:K.key||"item-".concat(en)},G,mn[G]),Y,mn[Y]),"animationId",A)),childIndex:PE(K,W.children),item:K})}),$},b=function(W,S){var M=W.props,O=W.dataStartIndex,P=W.dataEndIndex,A=W.updateId;if(!$B({props:M}))return null;var N=M.children,w=M.layout,H=M.stackOffset,k=M.data,D=M.reverseStackOrder,R=_3(w),F=R.numericAxisName,V=R.cateAxisName,G=ut(N,r),Y=_9(k,G,"".concat(F,"Id"),"".concat(V,"Id"),H,D),Q=c.reduce(function(L,Z){var ln="".concat(Z.axisType,"Map");return on(on({},L),{},Tn({},ln,MY(M,on(on({},Z),{},{graphicalItems:G,stackGroups:Z.axisType===F&&Y,dataStartIndex:O,dataEndIndex:P}))))},{}),$=OY(on(on({},Q),{},{props:M,graphicalItems:G}),S==null?void 0:S.legendBBox);Object.keys(Q).forEach(function(L){Q[L]=m(M,Q[L],$,L.replace("Map",""),t)});var K=Q["".concat(V,"Map")],en=AY(K),T=v(M,on(on({},Q),{},{dataStartIndex:O,dataEndIndex:P,updateId:A,graphicalItems:G,stackGroups:Y,offset:$}));return on(on({formattedGraphicalItems:T,graphicalItems:G,offset:$,stackGroups:Y},en),Q)},B=(function(y){function W(S){var M,O,P;return lY(this,W),P=dY(this,W,[S]),Tn(P,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Tn(P,"accessibilityManager",new YQ),Tn(P,"handleLegendBBoxUpdate",function(A){if(A){var N=P.state,w=N.dataStartIndex,H=N.dataEndIndex,k=N.updateId;P.setState(on({legendBBox:A},b({props:P.props,dataStartIndex:w,dataEndIndex:H,updateId:k},on(on({},P.state),{},{legendBBox:A}))))}}),Tn(P,"handleReceiveSyncEvent",function(A,N,w){if(P.props.syncId===A){if(w===P.eventEmitterSymbol&&typeof P.props.syncMethod!="function")return;P.applySyncEvent(N)}}),Tn(P,"handleBrushChange",function(A){var N=A.startIndex,w=A.endIndex;if(N!==P.state.dataStartIndex||w!==P.state.dataEndIndex){var H=P.state.updateId;P.setState(function(){return on({dataStartIndex:N,dataEndIndex:w},b({props:P.props,dataStartIndex:N,dataEndIndex:w,updateId:H},P.state))}),P.triggerSyncEvent({dataStartIndex:N,dataEndIndex:w})}}),Tn(P,"handleMouseEnter",function(A){var N=P.getMouseInfo(A);if(N){var w=on(on({},N),{},{isTooltipActive:!0});P.setState(w),P.triggerSyncEvent(w);var H=P.props.onMouseEnter;kn(H)&&H(w,A)}}),Tn(P,"triggeredAfterMouseMove",function(A){var N=P.getMouseInfo(A),w=N?on(on({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};P.setState(w),P.triggerSyncEvent(w);var H=P.props.onMouseMove;kn(H)&&H(w,A)}),Tn(P,"handleItemMouseEnter",function(A){P.setState(function(){return{isTooltipActive:!0,activeItem:A,activePayload:A.tooltipPayload,activeCoordinate:A.tooltipPosition||{x:A.cx,y:A.cy}}})}),Tn(P,"handleItemMouseLeave",function(){P.setState(function(){return{isTooltipActive:!1}})}),Tn(P,"handleMouseMove",function(A){A.persist(),P.throttleTriggeredAfterMouseMove(A)}),Tn(P,"handleMouseLeave",function(A){P.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};P.setState(N),P.triggerSyncEvent(N);var w=P.props.onMouseLeave;kn(w)&&w(N,A)}),Tn(P,"handleOuterEvent",function(A){var N=xE(A),w=Ot(P.props,"".concat(N));if(N&&kn(w)){var H,k;/.*touch.*/i.test(N)?k=P.getMouseInfo(A.changedTouches[0]):k=P.getMouseInfo(A),w((H=k)!==null&&H!==void 0?H:{},A)}}),Tn(P,"handleClick",function(A){var N=P.getMouseInfo(A);if(N){var w=on(on({},N),{},{isTooltipActive:!0});P.setState(w),P.triggerSyncEvent(w);var H=P.props.onClick;kn(H)&&H(w,A)}}),Tn(P,"handleMouseDown",function(A){var N=P.props.onMouseDown;if(kn(N)){var w=P.getMouseInfo(A);N(w,A)}}),Tn(P,"handleMouseUp",function(A){var N=P.props.onMouseUp;if(kn(N)){var w=P.getMouseInfo(A);N(w,A)}}),Tn(P,"handleTouchMove",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&P.throttleTriggeredAfterMouseMove(A.changedTouches[0])}),Tn(P,"handleTouchStart",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&P.handleMouseDown(A.changedTouches[0])}),Tn(P,"handleTouchEnd",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&P.handleMouseUp(A.changedTouches[0])}),Tn(P,"handleDoubleClick",function(A){var N=P.props.onDoubleClick;if(kn(N)){var w=P.getMouseInfo(A);N(w,A)}}),Tn(P,"handleContextMenu",function(A){var N=P.props.onContextMenu;if(kn(N)){var w=P.getMouseInfo(A);N(w,A)}}),Tn(P,"triggerSyncEvent",function(A){P.props.syncId!==void 0&&x6.emit(P6,P.props.syncId,A,P.eventEmitterSymbol)}),Tn(P,"applySyncEvent",function(A){var N=P.props,w=N.layout,H=N.syncMethod,k=P.state.updateId,D=A.dataStartIndex,R=A.dataEndIndex;if(A.dataStartIndex!==void 0||A.dataEndIndex!==void 0)P.setState(on({dataStartIndex:D,dataEndIndex:R},b({props:P.props,dataStartIndex:D,dataEndIndex:R,updateId:k},P.state)));else if(A.activeTooltipIndex!==void 0){var F=A.chartX,V=A.chartY,G=A.activeTooltipIndex,Y=P.state,Q=Y.offset,$=Y.tooltipTicks;if(!Q)return;if(typeof H=="function")G=H($,A);else if(H==="value"){G=-1;for(var K=0;K<$.length;K++)if($[K].value===A.activeLabel){G=K;break}}var en=on(on({},Q),{},{x:Q.left,y:Q.top}),T=Math.min(F,en.x+en.width),L=Math.min(V,en.y+en.height),Z=$[G]&&$[G].value,ln=pg(P.state,P.props.data,G),vn=$[G]?{x:w==="horizontal"?$[G].coordinate:T,y:w==="horizontal"?L:$[G].coordinate}:n_;P.setState(on(on({},A),{},{activeLabel:Z,activeCoordinate:vn,activePayload:ln,activeTooltipIndex:G}))}else P.setState(A)}),Tn(P,"renderCursor",function(A){var N,w=P.state,H=w.isTooltipActive,k=w.activeCoordinate,D=w.activePayload,R=w.offset,F=w.activeTooltipIndex,V=w.tooltipAxisBandSize,G=P.getTooltipEventType(),Y=(N=A.props.active)!==null&&N!==void 0?N:H,Q=P.props.layout,$=A.key||"_recharts-cursor";return E.createElement(rY,{key:$,activeCoordinate:k,activePayload:D,activeTooltipIndex:F,chartName:t,element:A,isActive:Y,layout:Q,offset:R,tooltipAxisBandSize:V,tooltipEventType:G})}),Tn(P,"renderPolarAxis",function(A,N,w){var H=Ot(A,"type.axisType"),k=Ot(P.state,"".concat(H,"Map")),D=A.type.defaultProps,R=D!==void 0?on(on({},D),A.props):A.props,F=k&&k[R["".concat(H,"Id")]];return U.cloneElement(A,on(on({},F),{},{className:jn(H,F.className),key:A.key||"".concat(N,"-").concat(w),ticks:Fr(F,!0)}))}),Tn(P,"renderPolarGrid",function(A){var N=A.props,w=N.radialLines,H=N.polarAngles,k=N.polarRadius,D=P.state,R=D.radiusAxisMap,F=D.angleAxisMap,V=Sa(R),G=Sa(F),Y=G.cx,Q=G.cy,$=G.innerRadius,K=G.outerRadius;return U.cloneElement(A,{polarAngles:Array.isArray(H)?H:Fr(G,!0).map(function(en){return en.coordinate}),polarRadius:Array.isArray(k)?k:Fr(V,!0).map(function(en){return en.coordinate}),cx:Y,cy:Q,innerRadius:$,outerRadius:K,key:A.key||"polar-grid",radialLines:w})}),Tn(P,"renderLegend",function(){var A=P.state.formattedGraphicalItems,N=P.props,w=N.children,H=N.width,k=N.height,D=P.props.margin||{},R=H-(D.left||0)-(D.right||0),F=_M({children:w,formattedGraphicalItems:A,legendWidth:R,legendContent:f});if(!F)return null;var V=F.item,G=W3(F,aY);return U.cloneElement(V,on(on({},G),{},{chartWidth:H,chartHeight:k,margin:D,onBBoxUpdate:P.handleLegendBBoxUpdate}))}),Tn(P,"renderTooltip",function(){var A,N=P.props,w=N.children,H=N.accessibilityLayer,k=St(w,Mt);if(!k)return null;var D=P.state,R=D.isTooltipActive,F=D.activeCoordinate,V=D.activePayload,G=D.activeLabel,Y=D.offset,Q=(A=k.props.active)!==null&&A!==void 0?A:R;return U.cloneElement(k,{viewBox:on(on({},Y),{},{x:Y.left,y:Y.top}),active:Q,label:G,payload:Q?V:[],coordinate:F,accessibilityLayer:H})}),Tn(P,"renderBrush",function(A){var N=P.props,w=N.margin,H=N.data,k=P.state,D=k.offset,R=k.dataStartIndex,F=k.dataEndIndex,V=k.updateId;return U.cloneElement(A,{key:A.key||"_recharts-brush",onChange:xs(P.handleBrushChange,A.props.onChange),data:H,x:fn(A.props.x)?A.props.x:D.left,y:fn(A.props.y)?A.props.y:D.top+D.height+D.brushBottom-(w.bottom||0),width:fn(A.props.width)?A.props.width:D.width,startIndex:R,endIndex:F,updateId:"brush-".concat(V)})}),Tn(P,"renderReferenceElement",function(A,N,w){if(!A)return null;var H=P,k=H.clipPathId,D=P.state,R=D.xAxisMap,F=D.yAxisMap,V=D.offset,G=A.type.defaultProps||{},Y=A.props,Q=Y.xAxisId,$=Q===void 0?G.xAxisId:Q,K=Y.yAxisId,en=K===void 0?G.yAxisId:K;return U.cloneElement(A,{key:A.key||"".concat(N,"-").concat(w),xAxis:R[$],yAxis:F[en],viewBox:{x:V.left,y:V.top,width:V.width,height:V.height},clipPathId:k})}),Tn(P,"renderActivePoints",function(A){var N=A.item,w=A.activePoint,H=A.basePoint,k=A.childIndex,D=A.isRange,R=[],F=N.props.key,V=N.item.type.defaultProps!==void 0?on(on({},N.item.type.defaultProps),N.item.props):N.item.props,G=V.activeDot,Y=V.dataKey,Q=on(on({index:k,dataKey:Y,cx:w.x,cy:w.y,r:4,fill:sb(N.item),strokeWidth:2,stroke:"#fff",payload:w.payload,value:w.value},Hn(G,!1)),ks(G));return R.push(W.renderActiveDot(G,Q,"".concat(F,"-activePoint-").concat(k))),H?R.push(W.renderActiveDot(G,on(on({},Q),{},{cx:H.x,cy:H.y}),"".concat(F,"-basePoint-").concat(k))):D&&R.push(null),R}),Tn(P,"renderGraphicChild",function(A,N,w){var H=P.filterFormatItem(A,N,w);if(!H)return null;var k=P.getTooltipEventType(),D=P.state,R=D.isTooltipActive,F=D.tooltipAxis,V=D.activeTooltipIndex,G=D.activeLabel,Y=P.props.children,Q=St(Y,Mt),$=H.props,K=$.points,en=$.isRange,T=$.baseLine,L=H.item.type.defaultProps!==void 0?on(on({},H.item.type.defaultProps),H.item.props):H.item.props,Z=L.activeDot,ln=L.hide,vn=L.activeBar,Bn=L.activeShape,xn=!!(!ln&&R&&Q&&(Z||vn||Bn)),mn={};k!=="axis"&&Q&&Q.props.trigger==="click"?mn={onClick:xs(P.handleItemMouseEnter,A.props.onClick)}:k!=="axis"&&(mn={onMouseLeave:xs(P.handleItemMouseLeave,A.props.onMouseLeave),onMouseEnter:xs(P.handleItemMouseEnter,A.props.onMouseEnter)});var an=U.cloneElement(A,on(on({},H.props),mn));function rn(ge){return typeof F.dataKey=="function"?F.dataKey(ge.payload):null}if(xn)if(V>=0){var pn,J;if(F.dataKey&&!F.allowDuplicatedCategory){var bn=typeof F.dataKey=="function"?rn:"payload.".concat(F.dataKey.toString());pn=Rs(K,bn,G),J=en&&T&&Rs(T,bn,G)}else pn=K==null?void 0:K[V],J=en&&T&&T[V];if(Bn||vn){var hn=A.props.activeIndex!==void 0?A.props.activeIndex:V;return[U.cloneElement(A,on(on(on({},H.props),mn),{},{activeIndex:hn})),null,null]}if(!En(pn))return[an].concat(Fi(P.renderActivePoints({item:H,activePoint:pn,basePoint:J,childIndex:V,isRange:en})))}else{var yn,gn=(yn=P.getItemByXY(P.state.activeCoordinate))!==null&&yn!==void 0?yn:{graphicalItem:an},wn=gn.graphicalItem,$n=wn.item,zn=$n===void 0?A:$n,Qn=wn.childIndex,xe=on(on(on({},H.props),mn),{},{activeIndex:Qn});return[U.cloneElement(zn,xe),null,null]}return en?[an,null,null]:[an,null]}),Tn(P,"renderCustomized",function(A,N,w){return U.cloneElement(A,on(on({key:"recharts-customized-".concat(w)},P.props),P.state))}),Tn(P,"renderMap",{CartesianGrid:{handler:Ms,once:!0},ReferenceArea:{handler:P.renderReferenceElement},ReferenceLine:{handler:Ms},ReferenceDot:{handler:P.renderReferenceElement},XAxis:{handler:Ms},YAxis:{handler:Ms},Brush:{handler:P.renderBrush,once:!0},Bar:{handler:P.renderGraphicChild},Line:{handler:P.renderGraphicChild},Area:{handler:P.renderGraphicChild},Radar:{handler:P.renderGraphicChild},RadialBar:{handler:P.renderGraphicChild},Scatter:{handler:P.renderGraphicChild},Pie:{handler:P.renderGraphicChild},Funnel:{handler:P.renderGraphicChild},Tooltip:{handler:P.renderCursor,once:!0},PolarGrid:{handler:P.renderPolarGrid,once:!0},PolarAngleAxis:{handler:P.renderPolarAxis},PolarRadiusAxis:{handler:P.renderPolarAxis},Customized:{handler:P.renderCustomized}}),P.clipPathId="".concat((M=S.id)!==null&&M!==void 0?M:Da("recharts"),"-clip"),P.throttleTriggeredAfterMouseMove=_S(P.triggeredAfterMouseMove,(O=S.throttleDelay)!==null&&O!==void 0?O:1e3/60),P.state={},P}return vY(W,y),fY(W,[{key:"componentDidMount",value:function(){var M,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(M=this.props.margin.left)!==null&&M!==void 0?M:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var M=this.props,O=M.children,P=M.data,A=M.height,N=M.layout,w=St(O,Mt);if(w){var H=w.props.defaultIndex;if(!(typeof H!="number"||H<0||H>this.state.tooltipTicks.length-1)){var k=this.state.tooltipTicks[H]&&this.state.tooltipTicks[H].value,D=pg(this.state,P,H,k),R=this.state.tooltipTicks[H].coordinate,F=(this.state.offset.top+A)/2,V=N==="horizontal",G=V?{x:R,y:F}:{y:R,x:F},Y=this.state.formattedGraphicalItems.find(function($){var K=$.item;return K.type.name==="Scatter"});Y&&(G=on(on({},G),Y.props.points[H].tooltipPosition),D=Y.props.points[H].tooltipPayload);var Q={activeTooltipIndex:H,isTooltipActive:!0,activeLabel:k,activePayload:D,activeCoordinate:G};this.setState(Q),this.renderCursor(w),this.accessibilityManager.setIndex(H)}}}},{key:"getSnapshotBeforeUpdate",value:function(M,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==M.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==M.margin){var P,A;this.accessibilityManager.setDetails({offset:{left:(P=this.props.margin.left)!==null&&P!==void 0?P:0,top:(A=this.props.margin.top)!==null&&A!==void 0?A:0}})}return null}},{key:"componentDidUpdate",value:function(M){$6([St(M.children,Mt)],[St(this.props.children,Mt)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var M=St(this.props.children,Mt);if(M&&typeof M.props.shared=="boolean"){var O=M.props.shared?"axis":"item";return s.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(M){if(!this.container)return null;var O=this.container,P=O.getBoundingClientRect(),A=s$(P),N={chartX:Math.round(M.pageX-A.left),chartY:Math.round(M.pageY-A.top)},w=P.width/O.offsetWidth||1,H=this.inRange(N.chartX,N.chartY,w);if(!H)return null;var k=this.state,D=k.xAxisMap,R=k.yAxisMap,F=this.getTooltipEventType(),V=M3(this.state,this.props.data,this.props.layout,H);if(F!=="axis"&&D&&R){var G=Sa(D).scale,Y=Sa(R).scale,Q=G&&G.invert?G.invert(N.chartX):null,$=Y&&Y.invert?Y.invert(N.chartY):null;return on(on({},N),{},{xValue:Q,yValue:$},V)}return V?on(on({},N),V):null}},{key:"inRange",value:function(M,O){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=this.props.layout,N=M/P,w=O/P;if(A==="horizontal"||A==="vertical"){var H=this.state.offset,k=N>=H.left&&N<=H.left+H.width&&w>=H.top&&w<=H.top+H.height;return k?{x:N,y:w}:null}var D=this.state,R=D.angleAxisMap,F=D.radiusAxisMap;if(R&&F){var V=Sa(R);return AW({x:N,y:w},V)}return null}},{key:"parseEventsOfWrapper",value:function(){var M=this.props.children,O=this.getTooltipEventType(),P=St(M,Mt),A={};P&&O==="axis"&&(P.props.trigger==="click"?A={onClick:this.handleClick}:A={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=ks(this.props,this.handleOuterEvent);return on(on({},N),A)}},{key:"addListener",value:function(){x6.on(P6,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){x6.removeListener(P6,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(M,O,P){for(var A=this.state.formattedGraphicalItems,N=0,w=A.length;N<w;N++){var H=A[N];if(H.item===M||H.props.key===M.key||O===Ur(H.item.type)&&P===H.childIndex)return H}return null}},{key:"renderClipPath",value:function(){var M=this.clipPathId,O=this.state.offset,P=O.left,A=O.top,N=O.height,w=O.width;return E.createElement("defs",null,E.createElement("clipPath",{id:M},E.createElement("rect",{x:P,y:A,height:N,width:w})))}},{key:"getXScales",value:function(){var M=this.state.xAxisMap;return M?Object.entries(M).reduce(function(O,P){var A=w3(P,2),N=A[0],w=A[1];return on(on({},O),{},Tn({},N,w.scale))},{}):null}},{key:"getYScales",value:function(){var M=this.state.yAxisMap;return M?Object.entries(M).reduce(function(O,P){var A=w3(P,2),N=A[0],w=A[1];return on(on({},O),{},Tn({},N,w.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(M){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(M){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(M){var O=this.state,P=O.formattedGraphicalItems,A=O.activeItem;if(P&&P.length)for(var N=0,w=P.length;N<w;N++){var H=P[N],k=H.props,D=H.item,R=D.type.defaultProps!==void 0?on(on({},D.type.defaultProps),D.props):D.props,F=Ur(D.type);if(F==="Bar"){var V=(k.data||[]).find(function($){return Oz(M,$)});if(V)return{graphicalItem:H,payload:V}}else if(F==="RadialBar"){var G=(k.data||[]).find(function($){return AW(M,$)});if(G)return{graphicalItem:H,payload:G}}else if(m2(H,A)||h2(H,A)||Lu(H,A)){var Y=JU({graphicalItem:H,activeTooltipItem:A,itemData:R.data}),Q=R.activeIndex===void 0?Y:R.activeIndex;return{graphicalItem:on(on({},H),{},{childIndex:Q}),payload:Lu(H,A)?R.data[Y]:H.props.data[Y]}}}return null}},{key:"render",value:function(){var M=this;if(!$B(this))return null;var O=this.props,P=O.children,A=O.className,N=O.width,w=O.height,H=O.style,k=O.compact,D=O.title,R=O.desc,F=W3(O,oY),V=Hn(F,!1);if(k)return E.createElement(e3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement(F6,ui({},V,{width:N,height:w,title:D,desc:R}),this.renderClipPath(),FB(P,this.renderMap)));if(this.props.accessibilityLayer){var G,Y;V.tabIndex=(G=this.props.tabIndex)!==null&&G!==void 0?G:0,V.role=(Y=this.props.role)!==null&&Y!==void 0?Y:"application",V.onKeyDown=function($){M.accessibilityManager.keyboardEvent($)},V.onFocus=function(){M.accessibilityManager.focus()}}var Q=this.parseEventsOfWrapper();return E.createElement(e3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement("div",ui({className:jn("recharts-wrapper",A),style:on({position:"relative",cursor:"default",width:N,height:w},H)},Q,{ref:function(K){M.container=K}}),E.createElement(F6,ui({},V,{width:N,height:w,title:D,desc:R,style:xY}),this.renderClipPath(),FB(P,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(U.Component);Tn(B,"displayName",t),Tn(B,"defaultProps",on({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Tn(B,"getDerivedStateFromProps",function(y,W){var S=y.dataKey,M=y.data,O=y.children,P=y.width,A=y.height,N=y.layout,w=y.stackOffset,H=y.margin,k=W.dataStartIndex,D=W.dataEndIndex;if(W.updateId===void 0){var R=A3(y);return on(on(on({},R),{},{updateId:0},b(on(on({props:y},R),{},{updateId:0}),W)),{},{prevDataKey:S,prevData:M,prevWidth:P,prevHeight:A,prevLayout:N,prevStackOffset:w,prevMargin:H,prevChildren:O})}if(S!==W.prevDataKey||M!==W.prevData||P!==W.prevWidth||A!==W.prevHeight||N!==W.prevLayout||w!==W.prevStackOffset||!si(H,W.prevMargin)){var F=A3(y),V={chartX:W.chartX,chartY:W.chartY,isTooltipActive:W.isTooltipActive},G=on(on({},M3(W,M,N)),{},{updateId:W.updateId+1}),Y=on(on(on({},F),V),G);return on(on(on({},Y),b(on({props:y},Y),W)),{},{prevDataKey:S,prevData:M,prevWidth:P,prevHeight:A,prevLayout:N,prevStackOffset:w,prevMargin:H,prevChildren:O})}if(!$6(O,W.prevChildren)){var Q,$,K,en,T=St(O,_i),L=T&&(Q=($=T.props)===null||$===void 0?void 0:$.startIndex)!==null&&Q!==void 0?Q:k,Z=T&&(K=(en=T.props)===null||en===void 0?void 0:en.endIndex)!==null&&K!==void 0?K:D,ln=L!==k||Z!==D,vn=!En(M),Bn=vn&&!ln?W.updateId:W.updateId+1;return on(on({updateId:Bn},b(on(on({props:y},W),{},{updateId:Bn,dataStartIndex:L,dataEndIndex:Z}),W)),{},{prevChildren:O,dataStartIndex:L,dataEndIndex:Z})}return null}),Tn(B,"renderActiveDot",function(y,W,S){var M;return U.isValidElement(y)?M=U.cloneElement(y,W):kn(y)?M=y(W):M=E.createElement(t0,W),E.createElement(Ln,{className:"recharts-active-dot",key:S},M)});var I=U.forwardRef(function(W,S){return E.createElement(B,ui({},W,{ref:S}))});return I.displayName=B.displayName,I},CY=w2({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cb}),NY=w2({chartName:"BarChart",GraphicalChild:Wr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cb}),RY=w2({chartName:"PieChart",GraphicalChild:na,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:d2},{axisType:"radiusAxis",AxisComp:c2}],formatAxisMap:L9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),kY=w2({chartName:"ComposedChart",GraphicalChild:[qr,Wo,Wr,x2],axisComponents:[{axisType:"xAxis",AxisComp:Ea},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:B2}],formatAxisMap:cb});const O3=({active:n,payload:e,label:t})=>n&&e&&e.length?_.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[_.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:t}),_.jsxs("div",{className:"space-y-1",children:[_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),_.jsx("span",{className:"text-gray-900",children:e[0].payload.totalSessions.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),_.jsx("span",{className:"text-gray-900",children:e[0].payload.humanEscalations.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),_.jsxs("span",{className:"text-gray-900",children:[e[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function t_({data:n,title:e,instanceId:t}){var b,B;const r=U.useId(),a=e||"Sessions & Escalation Trends",i=n.length<=3&&((B=(b=n[0])==null?void 0:b.week)==null?void 0:B.includes("2026")),u=t||r.replace(/:/g,"-"),s=`${e?e.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${u}`,c=`chart-${s}-${n.length}`,f=n.map((I,y)=>({...I,id:`${s}-${I.week.replace(/\s/g,"-")}-${y}`})),m=`colorSessions-${s}`,d=`colorEscalations-${s}`,v=`colorSessionsLine-${s}`;return _.jsxs(Ut,{className:"shadow-xl border-0",children:[_.jsx(Dl,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx(jl,{className:"text-2xl font-black text-gray-900",children:a}),_.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),_.jsx(Vt,{className:"p-6 bg-white",children:_.jsx(Dg,{width:"100%",height:400,children:i?_.jsxs(kY,{data:f,barGap:8,barCategoryGap:"20%",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),_.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),_.jsx(Ol,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ea,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(Mt,{content:_.jsx(O3,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c):_.jsxs(CY,{data:f,children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),_.jsx(Ol,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ea,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(Mt,{content:_.jsx(O3,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c)})})]})}const H3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function r_({data:n,title:e}){const t=n.reduce((u,s)=>u+s.count,0),r=e||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=n.map((u,s)=>({...u,uniqueKey:`${a}-${u.channel.replace(/\s/g,"-")}-${u.count}-${s}`,id:`${a}-${s}`}));return _.jsxs(Ut,{children:[_.jsxs(Dl,{children:[_.jsx(jl,{children:r}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",t.toLocaleString()]})]}),_.jsx(Vt,{children:_.jsx(Dg,{width:"100%",height:300,children:_.jsxs(RY,{children:[_.jsx(na,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:u,percentage:s})=>`${u} (${s.toFixed(1)}%)`,children:i.map(u=>_.jsx(Xu,{fill:H3[i.indexOf(u)%H3.length]},u.uniqueKey))},`pie-${a}`),_.jsx(Mt,{formatter:(u,s,c)=>[`${u.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function EY({data:n}){const e=n.reduce((a,i)=>{const u=a.find(s=>s.product===i.product);return u?u.count+=i.count:a.push({...i}),a},[]),t=e.slice(0,10),r=e.reduce((a,i)=>a+i.count,0);return _.jsxs(Ut,{children:[_.jsxs(Dl,{children:[_.jsx(jl,{children:"Product Breakdown (Human Handled)"}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",t.length<e.length&&`(showing top ${t.length})`]})]}),_.jsx(Vt,{children:_.jsx(Dg,{width:"100%",height:300,children:_.jsxs(NY,{data:t,children:[_.jsx(Ol,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),_.jsx(Ea,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),_.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),_.jsx(Mt,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),_.jsx(Wr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function a_({className:n,...e}){return _.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:_.jsx("table",{"data-slot":"table",className:st("w-full caption-bottom text-sm",n),...e})})}function o_({className:n,...e}){return _.jsx("thead",{"data-slot":"table-header",className:st("[&_tr]:border-b",n),...e})}function i_({className:n,...e}){return _.jsx("tbody",{"data-slot":"table-body",className:st("[&_tr:last-child]:border-0",n),...e})}function fi({className:n,...e}){return _.jsx("tr",{"data-slot":"table-row",className:st("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",n),...e})}function jr({className:n,...e}){return _.jsx("th",{"data-slot":"table-head",className:st("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",n),...e})}function At({className:n,...e}){return _.jsx("td",{"data-slot":"table-cell",className:st("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",n),...e})}function TY({data:n}){const[e,t]=U.useState(new Set),r=a=>{const i=new Set(e);i.has(a)?i.delete(a):i.add(a),t(i)};return _.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(a_,{children:[_.jsx(o_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(fi,{children:[_.jsx(jr,{className:"w-12"}),_.jsx(jr,{children:"Issue Type"}),_.jsx(jr,{className:"text-right",children:"Count"})]})}),_.jsx(i_,{children:n.flatMap((a,i)=>{const u=e.has(a.issue),s=[_.jsxs(fi,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[_.jsx(At,{children:u?_.jsx(YC,{className:"w-4 h-4"}):_.jsx(H6,{className:"w-4 h-4"})}),_.jsx(At,{className:"font-medium",children:a.issue}),_.jsx(At,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return u&&a.subIssues.forEach((c,f)=>{s.push(_.jsxs(fi,{className:"bg-blue-50",children:[_.jsx(At,{}),_.jsx(At,{className:"pl-8",children:_.jsxs("div",{children:[_.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),_.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((m,d)=>_.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",_.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${c.subType}-${m.product}-${d}`))})]})}),_.jsx(At,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),s})})]})})})}const Jp=50;function ri({field:n,currentField:e,direction:t,onSort:r,children:a}){return _.jsxs("button",{onClick:()=>r(n),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,_.jsx(VC,{className:`w-4 h-4 ${e===n?"text-blue-600":"text-gray-400"}`})]})}function DY({data:n=[]}){const[e,t]=U.useState("createdAt"),[r,a]=U.useState("desc"),[i,u]=U.useState(0),s=U.useCallback(d=>{t(v=>v===d?(a(b=>b==="asc"?"desc":"asc"),d):(a("asc"),d)),u(0)},[]),c=U.useMemo(()=>[...n].sort((d,v)=>{let b,B;return e==="createdAt"?(b=pr(d.createdAt).getTime(),B=pr(v.createdAt).getTime(),isNaN(b)&&(b=-1/0),isNaN(B)&&(B=-1/0)):(b=(d[e]||"").toLowerCase(),B=(v[e]||"").toLowerCase()),r==="asc"?b>B?1:b<B?-1:0:b<B?1:b>B?-1:0}),[n,e,r]),f=Math.ceil(c.length/Jp),m=U.useMemo(()=>c.slice(i*Jp,(i+1)*Jp),[c,i]);return _.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[_.jsxs("span",{children:["Showing ",_.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Jp+1,"–",Math.min((i+1)*Jp,c.length)]})," of ",_.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{onClick:()=>u(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(WI,{className:"w-4 h-4"})}),_.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),_.jsx("button",{onClick:()=>u(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(H6,{className:"w-4 h-4"})})]})]}),_.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(a_,{children:[_.jsx(o_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(fi,{children:[_.jsx(jr,{children:_.jsx(ri,{field:"createdAt",currentField:e,direction:r,onSort:s,children:"Date"})}),_.jsx(jr,{children:_.jsx(ri,{field:"channel",currentField:e,direction:r,onSort:s,children:"Channel"})}),_.jsx(jr,{children:_.jsx(ri,{field:"product",currentField:e,direction:r,onSort:s,children:"Product"})}),_.jsx(jr,{children:_.jsx(ri,{field:"issue",currentField:e,direction:r,onSort:s,children:"Issue"})}),_.jsx(jr,{children:_.jsx(ri,{field:"subType",currentField:e,direction:r,onSort:s,children:"Sub Type"})}),_.jsx(jr,{children:_.jsx(ri,{field:"handled",currentField:e,direction:r,onSort:s,children:"Handled By"})})]})}),_.jsx(i_,{children:m.length===0?_.jsx(fi,{children:_.jsx(At,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):m.map((d,v)=>_.jsxs(fi,{className:"hover:bg-blue-50/50 transition-colors",children:[_.jsx(At,{className:"whitespace-nowrap text-gray-700",children:yk(pr(d.createdAt))}),_.jsx(At,{children:_.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),_.jsx(At,{className:"text-gray-700",children:d.product||"-"}),_.jsx(At,{className:"text-gray-700",children:d.issue||"-"}),_.jsx(At,{className:"text-gray-500 text-xs",children:d.subType||"-"}),_.jsx(At,{children:_.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&_.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[_.jsx("button",{onClick:()=>u(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),_.jsx("button",{onClick:()=>u(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(WI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let b;return f<=5||i<3?b=v:i>f-4?b=f-5+v:b=i-2+v,_.jsx("button",{onClick:()=>u(b),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${b===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:b+1},b)}),_.jsx("button",{onClick:()=>u(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(H6,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>u(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function p_({metrics:n,topChannel:e,top5Products:t,top5Issues:r,monthCount:a}){return _.jsxs(Ut,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[_.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:_.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),_.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),_.jsxs(Vt,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[_.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:n.totalSessions.toLocaleString()}),_.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),_.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[n.botPercentage.toFixed(1),"%"]}),_.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[n.botHandled.toLocaleString()," Handled"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),_.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[n.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(e==null?void 0:e.channel)||"N/A"}),_.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((e==null?void 0:e.percentage)||0).toFixed(1),"% Share"]})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[_.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:t.map((i,u)=>_.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[u+1,"."]})," ",i.product||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},u))})]}),_.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,u)=>_.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[u+1,"."]})," ",i.issue||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},u))})]})]})]})]})}function jY({monthsData:n,weeklyEscalation:e}){const t=n.flatMap(s=>s.data),r=k6(t),a=E6(t)[0],i=A5(t).slice(0,5),u=T6(t,5);return _.jsxs(_.Fragment,{children:[_.jsxs(Ut,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[_.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),_.jsx(Vt,{className:"p-5 relative z-10",children:_.jsxs("div",{className:"text-center text-white",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),_.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),_.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:n.map(s=>{const c=T6(s.data,3);return _.jsxs(Ut,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${s.colorFrom} ${s.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),_.jsx(Dl,{className:"text-white pb-3 pt-4 relative z-10",children:_.jsxs("div",{className:"text-center",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),s.shortName]}),_.jsx(jl,{className:"text-2xl font-black mb-3 drop-shadow",children:s.name}),_.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[_.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),_.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:s.data.length.toLocaleString()}),s.data.length<200&&_.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),_.jsxs(Vt,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[_.jsxs("div",{className:"space-y-2 mb-4",children:[_.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:_.jsxs("p",{className:"text-sm font-black text-green-700",children:[s.metrics.botPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.botHandled.toLocaleString()})]}),_.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:_.jsxs("p",{className:"text-sm font-black text-orange-700",children:[s.metrics.humanPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.humanHandled.toLocaleString()})]})]}),_.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[_.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),_.jsx("div",{className:"space-y-1.5",children:c.map((f,m)=>_.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[_.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),_.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},m))})]})]})]},s.name)})}),_.jsx(t_,{data:e,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:n.map(s=>_.jsx(r_,{data:s.channels,title:`${s.name} - Channels`},s.name))}),_.jsx(p_,{metrics:r,topChannel:a,top5Products:i,top5Issues:u,monthCount:n.length})]})}const u_="PASTE_YOUR_GITHUB_TOKEN_HERE",s_="samson-lgtm",l_="waggle-ai-dashboard",c_="uploaded-data.json",f_="gh-pages",$Y=`https://${s_}.github.io/${l_}/${c_}`,d_=`https://api.github.com/repos/${s_}/${l_}/contents/${c_}`,C3=async()=>{try{const n=await fetch(`${$Y}?t=${Date.now()}`);return n.ok?await n.json():[]}catch(n){return console.error("Failed to read cloud data",n),[]}},LY=async()=>{try{const n=await fetch(`${d_}?ref=${f_}`,{headers:{Authorization:`token ${u_}`,Accept:"application/vnd.github.v3+json"}});return n.ok?(await n.json()).sha:void 0}catch{return}},m_=async n=>{const e=await LY(),r={message:"Update uploaded dashboard data",content:btoa(unescape(encodeURIComponent(JSON.stringify(n,null,2)))),branch:f_};e&&(r.sha=e);const a=await fetch(d_,{method:"PUT",headers:{Authorization:`token ${u_}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok){const i=await a.text();throw new Error(`GitHub API error ${a.status}: ${i}`)}},FY=async()=>{await m_([])},qY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,PM,DNR,,Human
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,4g mini,Return & Refund,,Human
Inapp,2026-06-08,PM,DNR,,Human
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,PM,DNR,,Human
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,4g mini,Connection,,Human
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,PM,DNR,,Human
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,Waggle Cam Pro,Connection,,Human
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,PM,DNR,,Human
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,PM,DNR,,Human
Inapp,2026-06-08,PM,Subs Activation,Combo Plan,Human
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Webapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-08,RV Mini Cam,Device Query,WiFi Capabilities,Human
Inapp,2026-06-08,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,PM,DNR,,Human
Inapp,2026-06-09,PM,Multi User Access,,Human
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,PM,DNR,,Human
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,PM,DNR,,Human
Inapp,2026-06-09,PM,DNR,,Human
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,PM,DNR,,Human
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,PM,DNR,,Human
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,4g mini,Connection,,Human
Inapp,2026-06-09,PM,DNR,,Human
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,Smart Sensor,Connection,,Human
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,PM,Temp Difference,,Human
Webapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,RV Mini Cam,Connection,,Human
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Inapp,2026-06-09,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,4g mini,Connection,,Human
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,4g mini,Subs Cancellation,,Human
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,4g mini,Connection,,Human
Inapp,2026-06-10,PM,DNR,,Human
Webapp,2026-06-10,PM,DNR,,Human
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,PM,Subs Cancellation,,Human
Inapp,2026-06-10,PM,Device Removal,Old Device,Human
Inapp,2026-06-10,PM,DNR,,Human
Inapp,2026-06-10,PM,Email ID Change,,Human
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,4g mini,Device Removal,Old Device,Human
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,PM,Device Query,Old Device,Human
Webapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,PM,DNR,,Human
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,4g mini,Subs Mapping,,Human
Webapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,PM,DNR,,Human
Inapp,2026-06-10,RV Mini Cam,Connection,,Human
Inapp,2026-06-10,4g mini,Connection,,Human
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Webapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,PM,DNR,,Human
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Inapp,2026-06-10,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,PM,Presales,Scount Bundle,Human
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,PM,Login Issue,Wrong Email,Human
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,PM,DNR,,Human
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,4g mini,SIM Not Found,,Human
Webapp,2026-06-11,4g mini,Subs Activation,Combo Plan,Human
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,PM,Temp Difference,,Human
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,PM,Email ID Change,,Human
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,RV Mini Cam,Device Query,WiFi Capabilities,Human
Inapp,2026-06-11,PM,DNR,,Human
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,PM,DNR,,Human
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-11,,,,Bot
Inapp,2026-06-11,PM,DNR,,Human
Inapp,2026-06-11,PM,App Issues,Unable to Login,Human
Inapp,2026-06-11,PM,Subs Mapping,,Human
Webapp,2026-06-11,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,Email ID Change,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,4g mini,App Navigation,Disable Motion Detection,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,RV Mini Cam,Connection,,Human
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,GPS Issue,,Human
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,RV Mini Cam,Connection,,Human
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,PM,DNR,,Human
Webapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,PM,Subs Activation,Discount Code Request,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,PM,DNR,,Human
Webapp,2026-06-12,PM,Subs Mapping,,Human
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Webapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,4g mini,Registration Issue,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,4g mini,SIM Not Found,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-12,PM,DNR,,Human
Webapp,2026-06-12,,,,Bot
Inapp,2026-06-12,4g mini,App Issues,No Push Notifications,Human
Inapp,2026-06-12,PM,DNR,,Human
Inapp,2026-06-12,,,,Bot
Inapp,2026-06-13,PM,DNR,,Human
Inapp,2026-06-13,RV Mini Cam,Device Query,Turn Off,Human
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,4g mini,App Issues,No Push Notifications,Human
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,PM,DNR,,Human
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,PM,App Issues,Subs Purchase,Human
Inapp,2026-06-13,PM,SMS Alerts,Exhausted,Human
Inapp,2026-06-13,PM,False PLPB,,Human
Inapp,2026-06-13,PM,DNR,,Human
Inapp,2026-06-13,RV Mini Cam,Login Issue,Wrong Email,Human
Inapp,2026-06-13,PM,Accessories,Stickers,Human
Inapp,2026-06-13,PM,DNR,,Human
Inapp,2026-06-13,NA,Waggel Insurance,,Human
Inapp,2026-06-13,PM,DNR,,Human
Inapp,2026-06-13,PM,Subs Mapping,,Human
Inapp,2026-06-13,PM,Account Deletion,,Human
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Webapp,2026-06-13,,,,Bot
Inapp,2026-06-13,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,RV Mini Cam,App Issues,Loading issue,Human
Inapp,2026-06-14,PM,DNR,,Human
Inapp,2026-06-14,4g mini,Connection,,Human
Webapp,2026-06-14,PM,Email ID Change,,Human
Inapp,2026-06-14,4g mini,App Navigation,Disable Motion Detection,Human
Webapp,2026-06-14,PM,DNR,,Human
Inapp,2026-06-14,PM,DNR,,Human
Inapp,2026-06-14,RV Mini Cam,Connection,,Human
Webapp,2026-06-14,PM,DNR,,Human
Webapp,2026-06-14,PM,DNR,,Human
Inapp,2026-06-14,PM,GPS Issue,,Human
Inapp,2026-06-14,RV Mini Cam,Connection,,Human
Webapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Webapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
Inapp,2026-06-14,,,,Bot
`;function zY(){const[n,e]=U.useState([]),[t,r]=U.useState([]),[a,i]=U.useState("all"),[u,s]=U.useState("all"),[c,f]=U.useState([]),[m,d]=U.useState("overview"),v=U.useRef(null),[b,B]=U.useState(null),[I,y]=U.useState(!1),W="Samson@12",[S,M]=U.useState({open:!1,action:null}),[O,P]=U.useState(""),[A,N]=U.useState(""),[w,H]=U.useState(!1),k=rn=>{P(""),N(""),H(!1),M({open:!0,action:rn})},D=()=>{var rn;O===W?(M({open:!1,action:null}),S.action==="add"?(rn=v.current)==null||rn.click():S.action==="clear"&&T()):(N("Incorrect password. Please try again."),P(""))},R=rn=>{rn.key==="Enter"&&D(),rn.key==="Escape"&&M({open:!1,action:null})},F=U.useRef([]);U.useEffect(()=>{F.current=n},[n]);const[V,G]=U.useState(!1);U.useEffect(()=>{new URLSearchParams(window.location.search).get("admin")==="true"&&G(!0)},[]);const Y=rn=>{if(!rn)return rn;const pn=rn.trim(),J=pn.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(J){const[,yn,gn,wn]=J;return`${wn.padStart(2,"0")}-${gn.padStart(2,"0")}-${yn}`}const bn=pn.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(bn){const[,yn,gn,wn]=bn;return parseInt(yn)>12?`${yn.padStart(2,"0")}-${gn.padStart(2,"0")}-${wn}`:`${gn.padStart(2,"0")}-${yn.padStart(2,"0")}-${wn}`}const hn=new Date(pn);return isNaN(hn.getTime())?pn:`${String(hn.getDate()).padStart(2,"0")}-${String(hn.getMonth()+1).padStart(2,"0")}-${hn.getFullYear()}`},Q=rn=>{if(!rn)return"";const pn=rn.trim().toLowerCase();return pn==="bot"||pn==="robot"?"Bot":pn==="human"||pn==="agent"?"Human":rn.trim()},$=(rn,...pn)=>{if(!rn)return"";const J=pn.map(bn=>bn.toLowerCase().replace(/\s+/g,""));for(const bn of Object.keys(rn)){const hn=bn.trim().replace(/\r$/,"").toLowerCase().replace(/\s+/g,"");if(J.includes(hn))return rn[bn]||""}return""};U.useEffect(()=>{let rn=[];mI.parse(qY,{header:!0,skipEmptyLines:!0,complete:async pn=>{rn=pn.data.map(J=>({channel:$(J,"Channel"),createdAt:Y($(J,"Created at","createdAt","Created date","Date","date","Created Date")),product:$(J,"Product"),issue:$(J,"Issue"),subType:$(J,"Sub Type","subType"),handled:Q($(J,"Handled","Handled By","Handledby"))}));try{const J=await C3();Array.isArray(J)&&J.length>0&&(rn=[...rn,...J],y(!0))}catch(J){console.error("Error loading shared cloud data",J)}e(rn)}})},[]);const K=U.useMemo(()=>{const rn=["january","february","march","april","may","june","july","august","september","october","november","december"],pn=new Set;return n.forEach(J=>{try{const bn=pr(J.createdAt);if(!isNaN(bn.getTime())){const hn=rn[bn.getMonth()];pn.add(`${hn}-${bn.getFullYear()}`)}}catch{}}),Array.from(pn).sort((J,bn)=>{const[hn,yn]=J.split("-"),[gn,wn]=bn.split("-");return yn!==wn?parseInt(yn)-parseInt(wn):rn.indexOf(hn)-rn.indexOf(gn)})},[n]);U.useEffect(()=>{f(a&&a!=="all"?S5(a):[]),s("all")},[a]),U.useEffect(()=>{n.length>0&&L(a,u)},[u,a,n,m]);const en=rn=>{var J;const pn=(J=rn.target.files)==null?void 0:J[0];pn&&(mI.parse(pn,{header:!0,skipEmptyLines:!0,complete:async bn=>{if(!bn.data.length){B({type:"error",message:"The CSV file appears to be empty."});return}const hn=bn.data.map(wn=>({channel:$(wn,"Channel"),createdAt:Y($(wn,"Created at","createdAt","Created date","Date","date","Created Date")),product:$(wn,"Product"),issue:$(wn,"Issue"),subType:$(wn,"Sub Type","subType"),handled:Q($(wn,"Handled","Handled By","Handledby"))})),yn=new Set(F.current.map(wn=>`${wn.channel}|${wn.createdAt}|${wn.product}|${wn.issue}|${wn.subType}|${wn.handled}`)),gn=hn.filter(wn=>!yn.has(`${wn.channel}|${wn.createdAt}|${wn.product}|${wn.issue}|${wn.subType}|${wn.handled}`));if(gn.length>0)try{const $n=[...await C3(),...gn];await m_($n),e(zn=>[...zn,...gn]),y(!0),B({type:"success",message:`Added ${gn.length} rows. Visible to all users.`}),setTimeout(()=>B(null),5e3)}catch(wn){console.error("Failed to save to cloud",wn),B({type:"error",message:"Failed to save data. Check Firebase config."}),setTimeout(()=>B(null),5e3)}else B({type:"error",message:"No new rows found."}),setTimeout(()=>B(null),5e3)}}),rn.target.value="")},T=async()=>{if(confirm("Are you sure you want to remove all uploaded data for ALL users? This cannot be undone."))try{await FY(),y(!1),B({type:"success",message:"All uploaded data cleared for everyone. Reloading..."}),setTimeout(()=>window.location.reload(),1500)}catch(rn){console.error("Failed to clear cloud data",rn),B({type:"error",message:"Failed to clear data. Check Firebase config."})}},L=(rn,pn,J)=>{let bn=n;if(rn!=="all"?bn=n.filter(hn=>{const yn=pr(hn.createdAt);return R6(yn,rn)}):bn=n.filter(hn=>!isNaN(pr(hn.createdAt).getTime())),pn!=="all"){const hn=c.find(yn=>yn.value===pn);hn&&(bn=bn.filter(yn=>M5(pr(yn.createdAt),hn)))}r(bn)},Z=k6(t),ln=E6(t),vn=A5(t),Bn=Bk(t),xn=Ik(n,a),mn=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],an=(a==="all"?K:[a]).map((rn,pn)=>{const J=n.filter(gn=>R6(pr(gn.createdAt),rn)),[bn,hn]=rn.split("-"),yn=mn[pn%mn.length];return{name:`${bn.charAt(0).toUpperCase()+bn.slice(1)} ${hn}`,shortName:`Month ${pn+1}`,data:J,metrics:k6(J),channels:E6(J),colorFrom:yn.from,colorTo:yn.to}});return _.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:[_.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[_.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[_.jsxs("div",{children:[_.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",_.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),_.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[_.jsxs("select",{value:a,onChange:rn=>i(rn.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[_.jsx("option",{value:"all",children:"All Months"}),K.map(rn=>_.jsxs("option",{value:rn,children:[rn.split("-")[0].charAt(0).toUpperCase()+rn.split("-")[0].slice(1)," ",rn.split("-")[1]]},rn))]}),_.jsxs("select",{value:u,onChange:rn=>s(rn.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[_.jsx("option",{value:"all",children:"All Weeks"}),c.map(rn=>_.jsx("option",{value:rn.value,children:rn.label},rn.value))]}),_.jsx("input",{ref:v,type:"file",accept:".csv",onChange:en,className:"hidden"}),_.jsxs(Lp,{onClick:()=>k("add"),variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[_.jsx(nN,{className:"w-4 h-4 mr-2"})," Add Data"]}),I&&_.jsxs(Lp,{onClick:()=>k("clear"),variant:"outline",className:"bg-white border-red-300 text-red-600",children:[_.jsx(lN,{className:"w-4 h-4 mr-2"})," Clear Data"]}),_.jsxs(Lp,{onClick:()=>xk(t),variant:"outline",className:"bg-white",children:[_.jsx(tN,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),b&&_.jsx(Ut,{className:`border ${b.type==="success"?"bg-green-50":"bg-red-50"}`,children:_.jsxs(Vt,{className:"p-4 flex items-center justify-between",children:[_.jsx("p",{className:"font-medium",children:b.message}),_.jsx("button",{onClick:()=>B(null),children:_.jsx(SI,{className:"w-4 h-4"})})]})}),a==="all"&&_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[_.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),_.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?_.jsx(jY,{monthsData:an,weeklyEscalation:xn}):_.jsxs(_.Fragment,{children:[_.jsx(Pk,{metrics:Z}),_.jsx(p_,{metrics:Z,topChannel:ln[0],top5Products:vn.slice(0,5),top5Issues:T6(t,5),monthCount:a==="all"?K.length:1}),_.jsx(t_,{data:xn,instanceId:"detailed-analysis"}),_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[_.jsx(r_,{data:ln}),_.jsx(EY,{data:vn})]}),_.jsx(Ut,{children:_.jsx(Vt,{className:"p-6",children:_.jsxs(jC,{defaultValue:"issues",className:"w-full",children:[_.jsxs($C,{className:"grid w-full grid-cols-2 max-w-md",children:[_.jsx(xI,{value:"issues",children:"Issue Analysis"}),_.jsx(xI,{value:"sessions",children:"Detailed Sessions"})]}),_.jsx(PI,{value:"issues",className:"mt-6",children:_.jsx(TY,{data:Bn})}),_.jsx(PI,{value:"sessions",className:"mt-6",children:_.jsx(DY,{data:t})})]})})})]})]}),S.open&&_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:_.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6",children:[_.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center",children:_.jsx(uN,{className:"w-5 h-5 text-blue-600"})}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:S.action==="add"?"Add Data":"Clear Uploads"}),_.jsx("p",{className:"text-sm text-gray-500",children:"Enter the admin password to continue"})]}),_.jsx("button",{onClick:()=>M({open:!1,action:null}),className:"ml-auto text-gray-400 hover:text-gray-600",children:_.jsx(SI,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"relative mb-4",children:[_.jsx("input",{autoFocus:!0,type:w?"text":"password",value:O,onChange:rn=>{P(rn.target.value),N("")},onKeyDown:R,placeholder:"Password",className:"w-full h-10 border border-gray-300 rounded-lg px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),_.jsx("button",{type:"button",onClick:()=>H(rn=>!rn),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:w?_.jsx(aN,{className:"w-4 h-4"}):_.jsx(iN,{className:"w-4 h-4"})})]}),A&&_.jsx("p",{className:"text-red-500 text-sm mb-3",children:A}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx(Lp,{variant:"outline",className:"flex-1",onClick:()=>M({open:!1,action:null}),children:"Cancel"}),_.jsx(Lp,{className:`flex-1 ${S.action==="clear"?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"} text-white`,onClick:D,children:S.action==="add"?"Unlock & Upload":"Unlock & Clear"})]})]})})]})}IH.createRoot(document.getElementById("root")).render(_.jsx(zY,{}));
