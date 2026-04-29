var XC=Object.defineProperty;var ZC=(e,t,n)=>t in e?XC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>ZC(e,typeof t!="symbol"?t+"":t,n);function JC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f2={exports:{}},ju={},d2={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tI;function ek(){if(tI)return Le;tI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=d&&R[d]||R["@@iterator"],typeof R=="function"?R:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function y(R,$,Z){this.props=R,this.context=$,this.refs=I,this.updater=Z||b}y.prototype.isReactComponent={},y.prototype.setState=function(R,$){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,$,"setState")},y.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function S(){}S.prototype=y.prototype;function A(R,$,Z){this.props=R,this.context=$,this.refs=I,this.updater=Z||b}var W=A.prototype=new S;W.constructor=A,x(W,y.prototype),W.isPureReactComponent=!0;var _=Array.isArray,w=Object.prototype.hasOwnProperty,M={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(R,$,Z){var ue,he={},ge=null,ye=null;if($!=null)for(ue in $.ref!==void 0&&(ye=$.ref),$.key!==void 0&&(ge=""+$.key),$)w.call($,ue)&&!E.hasOwnProperty(ue)&&(he[ue]=$[ue]);var fe=arguments.length-2;if(fe===1)he.children=Z;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(R&&R.defaultProps)for(ue in fe=R.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:R,key:ge,ref:ye,props:he,_owner:M.current}}function O(R,$){return{$$typeof:e,type:R.type,key:$,ref:R.ref,props:R.props,_owner:R._owner}}function N(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function D(R){var $={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Z){return $[Z]})}var T=/\/+/g;function q(R,$){return typeof R=="object"&&R!==null&&R.key!=null?D(""+R.key):$.toString(36)}function F(R,$,Z,ue,he){var ge=typeof R;(ge==="undefined"||ge==="boolean")&&(R=null);var ye=!1;if(R===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(R.$$typeof){case e:case t:ye=!0}}if(ye)return ye=R,he=he(ye),R=ue===""?"."+q(ye,0):ue,_(he)?(Z="",R!=null&&(Z=R.replace(T,"$&/")+"/"),F(he,$,Z,"",function(de){return de})):he!=null&&(N(he)&&(he=O(he,Z+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(T,"$&/")+"/")+R)),$.push(he)),1;if(ye=0,ue=ue===""?".":ue+":",_(R))for(var fe=0;fe<R.length;fe++){ge=R[fe];var ne=ue+q(ge,fe);ye+=F(ge,$,Z,ne,he)}else if(ne=v(R),typeof ne=="function")for(R=ne.call(R),fe=0;!(ge=R.next()).done;)ge=ge.value,ne=ue+q(ge,fe++),ye+=F(ge,$,Z,ne,he);else if(ge==="object")throw $=String(R),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return ye}function G(R,$,Z){if(R==null)return R;var ue=[],he=0;return F(R,ue,"","",function(ge){return $.call(Z,ge,he++)}),ue}function Q(R){if(R._status===-1){var $=R._result;$=$(),$.then(function(Z){(R._status===0||R._status===-1)&&(R._status=1,R._result=Z)},function(Z){(R._status===0||R._status===-1)&&(R._status=2,R._result=Z)}),R._status===-1&&(R._status=0,R._result=$)}if(R._status===1)return R._result.default;throw R._result}var V={current:null},H={transition:null},U={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:H,ReactCurrentOwner:M};function X(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:G,forEach:function(R,$,Z){G(R,function(){$.apply(this,arguments)},Z)},count:function(R){var $=0;return G(R,function(){$++}),$},toArray:function(R){return G(R,function($){return $})||[]},only:function(R){if(!N(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Le.Component=y,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=A,Le.StrictMode=r,Le.Suspense=p,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Le.act=X,Le.cloneElement=function(R,$,Z){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ue=x({},R.props),he=R.key,ge=R.ref,ye=R._owner;if($!=null){if($.ref!==void 0&&(ge=$.ref,ye=M.current),$.key!==void 0&&(he=""+$.key),R.type&&R.type.defaultProps)var fe=R.type.defaultProps;for(ne in $)w.call($,ne)&&!E.hasOwnProperty(ne)&&(ue[ne]=$[ne]===void 0&&fe!==void 0?fe[ne]:$[ne])}var ne=arguments.length-2;if(ne===1)ue.children=Z;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:R.type,key:he,ref:ge,props:ue,_owner:ye}},Le.createContext=function(R){return R={$$typeof:s,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:i,_context:R},R.Consumer=R},Le.createElement=P,Le.createFactory=function(R){var $=P.bind(null,R);return $.type=R,$},Le.createRef=function(){return{current:null}},Le.forwardRef=function(R){return{$$typeof:l,render:R}},Le.isValidElement=N,Le.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:Q}},Le.memo=function(R,$){return{$$typeof:f,type:R,compare:$===void 0?null:$}},Le.startTransition=function(R){var $=H.transition;H.transition={};try{R()}finally{H.transition=$}},Le.unstable_act=X,Le.useCallback=function(R,$){return V.current.useCallback(R,$)},Le.useContext=function(R){return V.current.useContext(R)},Le.useDebugValue=function(){},Le.useDeferredValue=function(R){return V.current.useDeferredValue(R)},Le.useEffect=function(R,$){return V.current.useEffect(R,$)},Le.useId=function(){return V.current.useId()},Le.useImperativeHandle=function(R,$,Z){return V.current.useImperativeHandle(R,$,Z)},Le.useInsertionEffect=function(R,$){return V.current.useInsertionEffect(R,$)},Le.useLayoutEffect=function(R,$){return V.current.useLayoutEffect(R,$)},Le.useMemo=function(R,$){return V.current.useMemo(R,$)},Le.useReducer=function(R,$,Z){return V.current.useReducer(R,$,Z)},Le.useRef=function(R){return V.current.useRef(R)},Le.useState=function(R){return V.current.useState(R)},Le.useSyncExternalStore=function(R,$,Z){return V.current.useSyncExternalStore(R,$,Z)},Le.useTransition=function(){return V.current.useTransition()},Le.version="18.3.1",Le}var nI;function oy(){return nI||(nI=1,d2.exports=ek()),d2.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI;function tk(){if(rI)return ju;rI=1;var e=oy(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(l,p,f){var m,d={},v=null,b=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(b=p.ref);for(m in p)r.call(p,m)&&!i.hasOwnProperty(m)&&(d[m]=p[m]);if(l&&l.defaultProps)for(m in p=l.defaultProps,p)d[m]===void 0&&(d[m]=p[m]);return{$$typeof:t,type:l,key:v,ref:b,props:d,_owner:a.current}}return ju.Fragment=n,ju.jsx=s,ju.jsxs=s,ju}var aI;function nk(){return aI||(aI=1,f2.exports=tk()),f2.exports}var C=nk(),sc={},h2={exports:{}},vn={},m2={exports:{}},v2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI;function rk(){return oI||(oI=1,(function(e){function t(H,U){var X=H.length;H.push(U);e:for(;0<X;){var R=X-1>>>1,$=H[R];if(0<a($,U))H[R]=U,H[X]=$,X=R;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var U=H[0],X=H.pop();if(X!==U){H[0]=X;e:for(var R=0,$=H.length,Z=$>>>1;R<Z;){var ue=2*(R+1)-1,he=H[ue],ge=ue+1,ye=H[ge];if(0>a(he,X))ge<$&&0>a(ye,he)?(H[R]=ye,H[ge]=X,R=ge):(H[R]=he,H[ue]=X,R=ue);else if(ge<$&&0>a(ye,X))H[R]=ye,H[ge]=X,R=ge;else break e}}return U}function a(H,U){var X=H.sortIndex-U.sortIndex;return X!==0?X:H.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var p=[],f=[],m=1,d=null,v=3,b=!1,x=!1,I=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(H){for(var U=n(f);U!==null;){if(U.callback===null)r(f);else if(U.startTime<=H)r(f),U.sortIndex=U.expirationTime,t(p,U);else break;U=n(f)}}function _(H){if(I=!1,W(H),!x)if(n(p)!==null)x=!0,Q(w);else{var U=n(f);U!==null&&V(_,U.startTime-H)}}function w(H,U){x=!1,I&&(I=!1,S(P),P=-1),b=!0;var X=v;try{for(W(U),d=n(p);d!==null&&(!(d.expirationTime>U)||H&&!D());){var R=d.callback;if(typeof R=="function"){d.callback=null,v=d.priorityLevel;var $=R(d.expirationTime<=U);U=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(p)&&r(p),W(U)}else r(p);d=n(p)}if(d!==null)var Z=!0;else{var ue=n(f);ue!==null&&V(_,ue.startTime-U),Z=!1}return Z}finally{d=null,v=X,b=!1}}var M=!1,E=null,P=-1,O=5,N=-1;function D(){return!(e.unstable_now()-N<O)}function T(){if(E!==null){var H=e.unstable_now();N=H;var U=!0;try{U=E(!0,H)}finally{U?q():(M=!1,E=null)}}else M=!1}var q;if(typeof A=="function")q=function(){A(T)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,G=F.port2;F.port1.onmessage=T,q=function(){G.postMessage(null)}}else q=function(){y(T,0)};function Q(H){E=H,M||(M=!0,q())}function V(H,U){P=y(function(){H(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,Q(w))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(H){switch(v){case 1:case 2:case 3:var U=3;break;default:U=v}var X=v;v=U;try{return H()}finally{v=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,U){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=v;v=H;try{return U()}finally{v=X}},e.unstable_scheduleCallback=function(H,U,X){var R=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?R+X:R):X=R,H){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=X+$,H={id:m++,callback:U,priorityLevel:H,startTime:X,expirationTime:$,sortIndex:-1},X>R?(H.sortIndex=X,t(f,H),n(p)===null&&H===n(f)&&(I?(S(P),P=-1):I=!0,V(_,X-R))):(H.sortIndex=$,t(p,H),x||b||(x=!0,Q(w))),H},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(H){var U=v;return function(){var X=v;v=U;try{return H.apply(this,arguments)}finally{v=X}}}})(v2)),v2}var iI;function ak(){return iI||(iI=1,m2.exports=rk()),m2.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI;function ok(){if(uI)return vn;uI=1;var e=oy(),t=ak();function n(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,c=1;c<arguments.length;c++)u+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return p.call(d,o)?!0:p.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function b(o,u,c,h){if(c!==null&&c.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function x(o,u,c,h){if(u===null||typeof u>"u"||b(o,u,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,c,h,g,B,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=c,this.propertyName=o,this.type=u,this.sanitizeURL=B,this.removeEmptyString=k}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){y[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];y[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){y[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){y[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){y[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){y[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){y[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){y[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){y[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,A);y[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,A);y[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,A);y[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){y[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),y.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){y[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function W(o,u,c,h){var g=y.hasOwnProperty(u)?y[u]:null;(g!==null?g.type!==0:h||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(x(u,c,g,h)&&(c=null),h||g===null?v(u)&&(c===null?o.removeAttribute(u):o.setAttribute(u,""+c)):g.mustUseProperty?o[g.propertyName]=c===null?g.type===3?!1:"":c:(u=g.attributeName,h=g.attributeNamespace,c===null?o.removeAttribute(u):(g=g.type,c=g===3||g===4&&c===!0?"":""+c,h?o.setAttributeNS(h,u,c):o.setAttribute(u,c))))}var _=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),H=Symbol.iterator;function U(o){return o===null||typeof o!="object"?null:(o=H&&o[H]||o["@@iterator"],typeof o=="function"?o:null)}var X=Object.assign,R;function $(o){if(R===void 0)try{throw Error()}catch(c){var u=c.stack.trim().match(/\n( *(at )?)/);R=u&&u[1]||""}return`
`+R+o}var Z=!1;function ue(o,u){if(!o||Z)return"";Z=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var h=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){h=te}o.call(u.prototype)}else{try{throw Error()}catch(te){h=te}o()}}catch(te){if(te&&h&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),B=h.stack.split(`
`),k=g.length-1,L=B.length-1;1<=k&&0<=L&&g[k]!==B[L];)L--;for(;1<=k&&0<=L;k--,L--)if(g[k]!==B[L]){if(k!==1||L!==1)do if(k--,L--,0>L||g[k]!==B[L]){var z=`
`+g[k].replace(" at new "," at ");return o.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",o.displayName)),z}while(1<=k&&0<=L);break}}}finally{Z=!1,Error.prepareStackTrace=c}return(o=o?o.displayName||o.name:"")?$(o):""}function he(o){switch(o.tag){case 5:return $(o.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ge(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case E:return"Fragment";case M:return"Portal";case O:return"Profiler";case P:return"StrictMode";case q:return"Suspense";case F:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case D:return(o.displayName||"Context")+".Consumer";case N:return(o._context.displayName||"Context")+".Provider";case T:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case G:return u=o.displayName||null,u!==null?u:ge(o.type)||"Memo";case Q:u=o._payload,o=o._init;try{return ge(o(u))}catch{}}return null}function ye(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ne(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=ne(o)?"checked":"value",c=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),h=""+o[u];if(!o.hasOwnProperty(u)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var g=c.get,B=c.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(k){h=""+k,B.call(this,k)}}),Object.defineProperty(o,u,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(k){h=""+k},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function pe(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var c=u.getValue(),h="";return o&&(h=ne(o)?o.checked?"true":"false":o.value),o=h,o!==c?(u.setValue(o),!0):!1}function Re(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var c=u.checked;return X({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??o._wrapperState.initialChecked})}function Ce(o,u){var c=u.defaultValue==null?"":u.defaultValue,h=u.checked!=null?u.checked:u.defaultChecked;c=fe(u.value!=null?u.value:c),o._wrapperState={initialChecked:h,initialValue:c,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function We(o,u){u=u.checked,u!=null&&W(o,"checked",u,!1)}function Fe(o,u){We(o,u);var c=fe(u.value),h=u.type;if(c!=null)h==="number"?(c===0&&o.value===""||o.value!=c)&&(o.value=""+c):o.value!==""+c&&(o.value=""+c);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,c):u.hasOwnProperty("defaultValue")&&qe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function He(o,u,c){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var h=u.type;if(!(h!=="submit"&&h!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,c||u===o.value||(o.value=u),o.defaultValue=u}c=o.name,c!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,c!==""&&(o.name=c)}function qe(o,u,c){(u!=="number"||Re(o.ownerDocument)!==o)&&(c==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+c&&(o.defaultValue=""+c))}var Ke=Array.isArray;function Bt(o,u,c,h){if(o=o.options,u){u={};for(var g=0;g<c.length;g++)u["$"+c[g]]=!0;for(c=0;c<o.length;c++)g=u.hasOwnProperty("$"+o[c].value),o[c].selected!==g&&(o[c].selected=g),g&&h&&(o[c].defaultSelected=!0)}else{for(c=""+fe(c),u=null,g=0;g<o.length;g++){if(o[g].value===c){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function vt(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function _n(o,u){var c=u.value;if(c==null){if(c=u.children,u=u.defaultValue,c!=null){if(u!=null)throw Error(n(92));if(Ke(c)){if(1<c.length)throw Error(n(93));c=c[0]}u=c}u==null&&(u=""),c=u}o._wrapperState={initialValue:fe(c)}}function gt(o,u){var c=fe(u.value),h=fe(u.defaultValue);c!=null&&(c=""+c,c!==o.value&&(o.value=c),u.defaultValue==null&&o.defaultValue!==c&&(o.defaultValue=c)),h!=null&&(o.defaultValue=""+h)}function Kt(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function xt(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?xt(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var cn,Ao=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,c,h,g){MSApp.execUnsafeLocalFunction(function(){return o(u,c,h,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(cn=cn||document.createElement("div"),cn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=cn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function ta(o,u){if(u){var c=o.firstChild;if(c&&c===o.lastChild&&c.nodeType===3){c.nodeValue=u;return}}o.textContent=u}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cn=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(o){Cn.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),On[u]=On[o]})});function na(o,u,c){return u==null||typeof u=="boolean"||u===""?"":c||typeof u!="number"||u===0||On.hasOwnProperty(o)&&On[o]?(""+u).trim():u+"px"}function eu(o,u){o=o.style;for(var c in u)if(u.hasOwnProperty(c)){var h=c.indexOf("--")===0,g=na(c,u[c],h);c==="float"&&(c="cssFloat"),h?o.setProperty(c,g):o[c]=g}}var nO=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function w0(o,u){if(u){if(nO[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function P0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S0=null;function A0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var W0=null,Wo=null,Mo=null;function yb(o){if(o=xu(o)){if(typeof W0!="function")throw Error(n(280));var u=o.stateNode;u&&(u=xl(u),W0(o.stateNode,o.type,u))}}function bb(o){Wo?Mo?Mo.push(o):Mo=[o]:Wo=o}function Ib(){if(Wo){var o=Wo,u=Mo;if(Mo=Wo=null,yb(o),u)for(o=0;o<u.length;o++)yb(u[o])}}function Bb(o,u){return o(u)}function xb(){}var M0=!1;function wb(o,u,c){if(M0)return o(u,c);M0=!0;try{return Bb(o,u,c)}finally{M0=!1,(Wo!==null||Mo!==null)&&(xb(),Ib())}}function tu(o,u){var c=o.stateNode;if(c===null)return null;var h=xl(c);if(h===null)return null;c=h[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(c&&typeof c!="function")throw Error(n(231,u,typeof c));return c}var _0=!1;if(l)try{var nu={};Object.defineProperty(nu,"passive",{get:function(){_0=!0}}),window.addEventListener("test",nu,nu),window.removeEventListener("test",nu,nu)}catch{_0=!1}function rO(o,u,c,h,g,B,k,L,z){var te=Array.prototype.slice.call(arguments,3);try{u.apply(c,te)}catch(ie){this.onError(ie)}}var ru=!1,el=null,tl=!1,O0=null,aO={onError:function(o){ru=!0,el=o}};function oO(o,u,c,h,g,B,k,L,z){ru=!1,el=null,rO.apply(aO,arguments)}function iO(o,u,c,h,g,B,k,L,z){if(oO.apply(this,arguments),ru){if(ru){var te=el;ru=!1,el=null}else throw Error(n(198));tl||(tl=!0,O0=te)}}function Fa(o){var u=o,c=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(c=u.return),o=u.return;while(o)}return u.tag===3?c:null}function Pb(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function Sb(o){if(Fa(o)!==o)throw Error(n(188))}function uO(o){var u=o.alternate;if(!u){if(u=Fa(o),u===null)throw Error(n(188));return u!==o?null:o}for(var c=o,h=u;;){var g=c.return;if(g===null)break;var B=g.alternate;if(B===null){if(h=g.return,h!==null){c=h;continue}break}if(g.child===B.child){for(B=g.child;B;){if(B===c)return Sb(g),o;if(B===h)return Sb(g),u;B=B.sibling}throw Error(n(188))}if(c.return!==h.return)c=g,h=B;else{for(var k=!1,L=g.child;L;){if(L===c){k=!0,c=g,h=B;break}if(L===h){k=!0,h=g,c=B;break}L=L.sibling}if(!k){for(L=B.child;L;){if(L===c){k=!0,c=B,h=g;break}if(L===h){k=!0,h=B,c=g;break}L=L.sibling}if(!k)throw Error(n(189))}}if(c.alternate!==h)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?o:u}function Ab(o){return o=uO(o),o!==null?Wb(o):null}function Wb(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=Wb(o);if(u!==null)return u;o=o.sibling}return null}var Mb=t.unstable_scheduleCallback,_b=t.unstable_cancelCallback,sO=t.unstable_shouldYield,lO=t.unstable_requestPaint,wt=t.unstable_now,cO=t.unstable_getCurrentPriorityLevel,C0=t.unstable_ImmediatePriority,Ob=t.unstable_UserBlockingPriority,nl=t.unstable_NormalPriority,pO=t.unstable_LowPriority,Cb=t.unstable_IdlePriority,rl=null,pr=null;function fO(o){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(rl,o,void 0,(o.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:mO,dO=Math.log,hO=Math.LN2;function mO(o){return o>>>=0,o===0?32:31-(dO(o)/hO|0)|0}var al=64,ol=4194304;function au(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function il(o,u){var c=o.pendingLanes;if(c===0)return 0;var h=0,g=o.suspendedLanes,B=o.pingedLanes,k=c&268435455;if(k!==0){var L=k&~g;L!==0?h=au(L):(B&=k,B!==0&&(h=au(B)))}else k=c&~g,k!==0?h=au(k):B!==0&&(h=au(B));if(h===0)return 0;if(u!==0&&u!==h&&(u&g)===0&&(g=h&-h,B=u&-u,g>=B||g===16&&(B&4194240)!==0))return u;if((h&4)!==0&&(h|=c&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=h;0<u;)c=31-Yn(u),g=1<<c,h|=o[c],u&=~g;return h}function vO(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gO(o,u){for(var c=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,B=o.pendingLanes;0<B;){var k=31-Yn(B),L=1<<k,z=g[k];z===-1?((L&c)===0||(L&h)!==0)&&(g[k]=vO(L,u)):z<=u&&(o.expiredLanes|=L),B&=~L}}function k0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function kb(){var o=al;return al<<=1,(al&4194240)===0&&(al=64),o}function E0(o){for(var u=[],c=0;31>c;c++)u.push(o);return u}function ou(o,u,c){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Yn(u),o[u]=c}function yO(o,u){var c=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<c;){var g=31-Yn(c),B=1<<g;u[g]=0,h[g]=-1,o[g]=-1,c&=~B}}function T0(o,u){var c=o.entangledLanes|=u;for(o=o.entanglements;c;){var h=31-Yn(c),g=1<<h;g&u|o[h]&u&&(o[h]|=u),c&=~g}}var Ze=0;function Eb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Tb,N0,Nb,Rb,jb,R0=!1,ul=[],ra=null,aa=null,oa=null,iu=new Map,uu=new Map,ia=[],bO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hb(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":iu.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(u.pointerId)}}function su(o,u,c,h,g,B){return o===null||o.nativeEvent!==B?(o={blockedOn:u,domEventName:c,eventSystemFlags:h,nativeEvent:B,targetContainers:[g]},u!==null&&(u=xu(u),u!==null&&N0(u)),o):(o.eventSystemFlags|=h,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function IO(o,u,c,h,g){switch(u){case"focusin":return ra=su(ra,o,u,c,h,g),!0;case"dragenter":return aa=su(aa,o,u,c,h,g),!0;case"mouseover":return oa=su(oa,o,u,c,h,g),!0;case"pointerover":var B=g.pointerId;return iu.set(B,su(iu.get(B)||null,o,u,c,h,g)),!0;case"gotpointercapture":return B=g.pointerId,uu.set(B,su(uu.get(B)||null,o,u,c,h,g)),!0}return!1}function Db(o){var u=qa(o.target);if(u!==null){var c=Fa(u);if(c!==null){if(u=c.tag,u===13){if(u=Pb(c),u!==null){o.blockedOn=u,jb(o.priority,function(){Nb(c)});return}}else if(u===3&&c.stateNode.current.memoizedState.isDehydrated){o.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}o.blockedOn=null}function sl(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var c=H0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(c===null){c=o.nativeEvent;var h=new c.constructor(c.type,c);S0=h,c.target.dispatchEvent(h),S0=null}else return u=xu(c),u!==null&&N0(u),o.blockedOn=c,!1;u.shift()}return!0}function $b(o,u,c){sl(o)&&c.delete(u)}function BO(){R0=!1,ra!==null&&sl(ra)&&(ra=null),aa!==null&&sl(aa)&&(aa=null),oa!==null&&sl(oa)&&(oa=null),iu.forEach($b),uu.forEach($b)}function lu(o,u){o.blockedOn===u&&(o.blockedOn=null,R0||(R0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,BO)))}function cu(o){function u(g){return lu(g,o)}if(0<ul.length){lu(ul[0],o);for(var c=1;c<ul.length;c++){var h=ul[c];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&lu(ra,o),aa!==null&&lu(aa,o),oa!==null&&lu(oa,o),iu.forEach(u),uu.forEach(u),c=0;c<ia.length;c++)h=ia[c],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(c=ia[0],c.blockedOn===null);)Db(c),c.blockedOn===null&&ia.shift()}var _o=_.ReactCurrentBatchConfig,ll=!0;function xO(o,u,c,h){var g=Ze,B=_o.transition;_o.transition=null;try{Ze=1,j0(o,u,c,h)}finally{Ze=g,_o.transition=B}}function wO(o,u,c,h){var g=Ze,B=_o.transition;_o.transition=null;try{Ze=4,j0(o,u,c,h)}finally{Ze=g,_o.transition=B}}function j0(o,u,c,h){if(ll){var g=H0(o,u,c,h);if(g===null)tf(o,u,h,cl,c),Hb(o,h);else if(IO(g,o,u,c,h))h.stopPropagation();else if(Hb(o,h),u&4&&-1<bO.indexOf(o)){for(;g!==null;){var B=xu(g);if(B!==null&&Tb(B),B=H0(o,u,c,h),B===null&&tf(o,u,h,cl,c),B===g)break;g=B}g!==null&&h.stopPropagation()}else tf(o,u,h,null,c)}}var cl=null;function H0(o,u,c,h){if(cl=null,o=A0(h),o=qa(o),o!==null)if(u=Fa(o),u===null)o=null;else if(c=u.tag,c===13){if(o=Pb(u),o!==null)return o;o=null}else if(c===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return cl=o,null}function Lb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cO()){case C0:return 1;case Ob:return 4;case nl:case pO:return 16;case Cb:return 536870912;default:return 16}default:return 16}}var ua=null,D0=null,pl=null;function Fb(){if(pl)return pl;var o,u=D0,c=u.length,h,g="value"in ua?ua.value:ua.textContent,B=g.length;for(o=0;o<c&&u[o]===g[o];o++);var k=c-o;for(h=1;h<=k&&u[c-h]===g[B-h];h++);return pl=g.slice(o,1<h?1-h:void 0)}function fl(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function dl(){return!0}function qb(){return!1}function bn(o){function u(c,h,g,B,k){this._reactName=c,this._targetInst=g,this.type=h,this.nativeEvent=B,this.target=k,this.currentTarget=null;for(var L in o)o.hasOwnProperty(L)&&(c=o[L],this[L]=c?c(B):B[L]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?dl:qb,this.isPropagationStopped=qb,this}return X(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),u}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$0=bn(Oo),pu=X({},Oo,{view:0,detail:0}),PO=bn(pu),L0,F0,fu,hl=X({},pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:z0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==fu&&(fu&&o.type==="mousemove"?(L0=o.screenX-fu.screenX,F0=o.screenY-fu.screenY):F0=L0=0,fu=o),L0)},movementY:function(o){return"movementY"in o?o.movementY:F0}}),zb=bn(hl),SO=X({},hl,{dataTransfer:0}),AO=bn(SO),WO=X({},pu,{relatedTarget:0}),q0=bn(WO),MO=X({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),_O=bn(MO),OO=X({},Oo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),CO=bn(OO),kO=X({},Oo,{data:0}),Ub=bn(kO),EO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RO(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=NO[o])?!!u[o]:!1}function z0(){return RO}var jO=X({},pu,{key:function(o){if(o.key){var u=EO[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=fl(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?TO[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:z0,charCode:function(o){return o.type==="keypress"?fl(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?fl(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),HO=bn(jO),DO=X({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gb=bn(DO),$O=X({},pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:z0}),LO=bn($O),FO=X({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),qO=bn(FO),zO=X({},hl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),UO=bn(zO),GO=[9,13,27,32],U0=l&&"CompositionEvent"in window,du=null;l&&"documentMode"in document&&(du=document.documentMode);var VO=l&&"TextEvent"in window&&!du,Vb=l&&(!U0||du&&8<du&&11>=du),Kb=" ",Qb=!1;function Yb(o,u){switch(o){case"keyup":return GO.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xb(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function KO(o,u){switch(o){case"compositionend":return Xb(u);case"keypress":return u.which!==32?null:(Qb=!0,Kb);case"textInput":return o=u.data,o===Kb&&Qb?null:o;default:return null}}function QO(o,u){if(Co)return o==="compositionend"||!U0&&Yb(o,u)?(o=Fb(),pl=D0=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Vb&&u.locale!=="ko"?null:u.data;default:return null}}var YO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zb(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!YO[o.type]:u==="textarea"}function Jb(o,u,c,h){bb(h),u=bl(u,"onChange"),0<u.length&&(c=new $0("onChange","change",null,c,h),o.push({event:c,listeners:u}))}var hu=null,mu=null;function XO(o){g1(o,0)}function ml(o){var u=Ro(o);if(re(u))return o}function ZO(o,u){if(o==="change")return u}var e1=!1;if(l){var G0;if(l){var V0="oninput"in document;if(!V0){var t1=document.createElement("div");t1.setAttribute("oninput","return;"),V0=typeof t1.oninput=="function"}G0=V0}else G0=!1;e1=G0&&(!document.documentMode||9<document.documentMode)}function n1(){hu&&(hu.detachEvent("onpropertychange",r1),mu=hu=null)}function r1(o){if(o.propertyName==="value"&&ml(mu)){var u=[];Jb(u,mu,o,A0(o)),wb(XO,u)}}function JO(o,u,c){o==="focusin"?(n1(),hu=u,mu=c,hu.attachEvent("onpropertychange",r1)):o==="focusout"&&n1()}function eC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return ml(mu)}function tC(o,u){if(o==="click")return ml(u)}function nC(o,u){if(o==="input"||o==="change")return ml(u)}function rC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Xn=typeof Object.is=="function"?Object.is:rC;function vu(o,u){if(Xn(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var c=Object.keys(o),h=Object.keys(u);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var g=c[h];if(!p.call(u,g)||!Xn(o[g],u[g]))return!1}return!0}function a1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function o1(o,u){var c=a1(o);o=0;for(var h;c;){if(c.nodeType===3){if(h=o+c.textContent.length,o<=u&&h>=u)return{node:c,offset:u-o};o=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=a1(c)}}function i1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?i1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function u1(){for(var o=window,u=Re();u instanceof o.HTMLIFrameElement;){try{var c=typeof u.contentWindow.location.href=="string"}catch{c=!1}if(c)o=u.contentWindow;else break;u=Re(o.document)}return u}function K0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function aC(o){var u=u1(),c=o.focusedElem,h=o.selectionRange;if(u!==c&&c&&c.ownerDocument&&i1(c.ownerDocument.documentElement,c)){if(h!==null&&K0(c)){if(u=h.start,o=h.end,o===void 0&&(o=u),"selectionStart"in c)c.selectionStart=u,c.selectionEnd=Math.min(o,c.value.length);else if(o=(u=c.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=c.textContent.length,B=Math.min(h.start,g);h=h.end===void 0?B:Math.min(h.end,g),!o.extend&&B>h&&(g=h,h=B,B=g),g=o1(c,B);var k=o1(c,h);g&&k&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),B>h?(o.addRange(u),o.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),o.addRange(u)))}}for(u=[],o=c;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<u.length;c++)o=u[c],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var oC=l&&"documentMode"in document&&11>=document.documentMode,ko=null,Q0=null,gu=null,Y0=!1;function s1(o,u,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Y0||ko==null||ko!==Re(h)||(h=ko,"selectionStart"in h&&K0(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),gu&&vu(gu,h)||(gu=h,h=bl(Q0,"onSelect"),0<h.length&&(u=new $0("onSelect","select",null,u,c),o.push({event:u,listeners:h}),u.target=ko)))}function vl(o,u){var c={};return c[o.toLowerCase()]=u.toLowerCase(),c["Webkit"+o]="webkit"+u,c["Moz"+o]="moz"+u,c}var Eo={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},X0={},l1={};l&&(l1=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function gl(o){if(X0[o])return X0[o];if(!Eo[o])return o;var u=Eo[o],c;for(c in u)if(u.hasOwnProperty(c)&&c in l1)return X0[o]=u[c];return o}var c1=gl("animationend"),p1=gl("animationiteration"),f1=gl("animationstart"),d1=gl("transitionend"),h1=new Map,m1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){h1.set(o,u),i(u,[o])}for(var Z0=0;Z0<m1.length;Z0++){var J0=m1[Z0],iC=J0.toLowerCase(),uC=J0[0].toUpperCase()+J0.slice(1);sa(iC,"on"+uC)}sa(c1,"onAnimationEnd"),sa(p1,"onAnimationIteration"),sa(f1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(d1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("cancel close invalid load scroll toggle".split(" ").concat(yu));function v1(o,u,c){var h=o.type||"unknown-event";o.currentTarget=c,iO(h,u,void 0,o),o.currentTarget=null}function g1(o,u){u=(u&4)!==0;for(var c=0;c<o.length;c++){var h=o[c],g=h.event;h=h.listeners;e:{var B=void 0;if(u)for(var k=h.length-1;0<=k;k--){var L=h[k],z=L.instance,te=L.currentTarget;if(L=L.listener,z!==B&&g.isPropagationStopped())break e;v1(g,L,te),B=z}else for(k=0;k<h.length;k++){if(L=h[k],z=L.instance,te=L.currentTarget,L=L.listener,z!==B&&g.isPropagationStopped())break e;v1(g,L,te),B=z}}}if(tl)throw o=O0,tl=!1,O0=null,o}function it(o,u){var c=u[sf];c===void 0&&(c=u[sf]=new Set);var h=o+"__bubble";c.has(h)||(y1(u,o,2,!1),c.add(h))}function ef(o,u,c){var h=0;u&&(h|=4),y1(c,o,h,u)}var yl="_reactListening"+Math.random().toString(36).slice(2);function bu(o){if(!o[yl]){o[yl]=!0,r.forEach(function(c){c!=="selectionchange"&&(sC.has(c)||ef(c,!1,o),ef(c,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[yl]||(u[yl]=!0,ef("selectionchange",!1,u))}}function y1(o,u,c,h){switch(Lb(u)){case 1:var g=xO;break;case 4:g=wO;break;default:g=j0}c=g.bind(null,u,c,o),g=void 0,!_0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(u,c,{capture:!0,passive:g}):o.addEventListener(u,c,!0):g!==void 0?o.addEventListener(u,c,{passive:g}):o.addEventListener(u,c,!1)}function tf(o,u,c,h,g){var B=h;if((u&1)===0&&(u&2)===0&&h!==null)e:for(;;){if(h===null)return;var k=h.tag;if(k===3||k===4){var L=h.stateNode.containerInfo;if(L===g||L.nodeType===8&&L.parentNode===g)break;if(k===4)for(k=h.return;k!==null;){var z=k.tag;if((z===3||z===4)&&(z=k.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;k=k.return}for(;L!==null;){if(k=qa(L),k===null)return;if(z=k.tag,z===5||z===6){h=B=k;continue e}L=L.parentNode}}h=h.return}wb(function(){var te=B,ie=A0(c),se=[];e:{var oe=h1.get(o);if(oe!==void 0){var me=$0,Be=o;switch(o){case"keypress":if(fl(c)===0)break e;case"keydown":case"keyup":me=HO;break;case"focusin":Be="focus",me=q0;break;case"focusout":Be="blur",me=q0;break;case"beforeblur":case"afterblur":me=q0;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=zb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=AO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=LO;break;case c1:case p1:case f1:me=_O;break;case d1:me=qO;break;case"scroll":me=PO;break;case"wheel":me=UO;break;case"copy":case"cut":case"paste":me=CO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Gb}var Se=(u&4)!==0,Pt=!Se&&o==="scroll",J=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var K=te,ee;K!==null;){ee=K;var ce=ee.stateNode;if(ee.tag===5&&ce!==null&&(ee=ce,J!==null&&(ce=tu(K,J),ce!=null&&Se.push(Iu(K,ce,ee)))),Pt)break;K=K.return}0<Se.length&&(oe=new me(oe,Be,null,c,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",me=o==="mouseout"||o==="pointerout",oe&&c!==S0&&(Be=c.relatedTarget||c.fromElement)&&(qa(Be)||Be[Mr]))break e;if((me||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Be=c.relatedTarget||c.toElement,me=te,Be=Be?qa(Be):null,Be!==null&&(Pt=Fa(Be),Be!==Pt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(me=null,Be=te),me!==Be)){if(Se=zb,ce="onMouseLeave",J="onMouseEnter",K="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Gb,ce="onPointerLeave",J="onPointerEnter",K="pointer"),Pt=me==null?oe:Ro(me),ee=Be==null?oe:Ro(Be),oe=new Se(ce,K+"leave",me,c,ie),oe.target=Pt,oe.relatedTarget=ee,ce=null,qa(ie)===te&&(Se=new Se(J,K+"enter",Be,c,ie),Se.target=ee,Se.relatedTarget=Pt,ce=Se),Pt=ce,me&&Be)t:{for(Se=me,J=Be,K=0,ee=Se;ee;ee=To(ee))K++;for(ee=0,ce=J;ce;ce=To(ce))ee++;for(;0<K-ee;)Se=To(Se),K--;for(;0<ee-K;)J=To(J),ee--;for(;K--;){if(Se===J||J!==null&&Se===J.alternate)break t;Se=To(Se),J=To(J)}Se=null}else Se=null;me!==null&&b1(se,oe,me,Se,!1),Be!==null&&Pt!==null&&b1(se,Pt,Be,Se,!0)}}e:{if(oe=te?Ro(te):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var Me=ZO;else if(Zb(oe))if(e1)Me=nC;else{Me=eC;var _e=JO}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(Me=tC);if(Me&&(Me=Me(o,te))){Jb(se,Me,c,ie);break e}_e&&_e(o,oe,te),o==="focusout"&&(_e=oe._wrapperState)&&_e.controlled&&oe.type==="number"&&qe(oe,"number",oe.value)}switch(_e=te?Ro(te):window,o){case"focusin":(Zb(_e)||_e.contentEditable==="true")&&(ko=_e,Q0=te,gu=null);break;case"focusout":gu=Q0=ko=null;break;case"mousedown":Y0=!0;break;case"contextmenu":case"mouseup":case"dragend":Y0=!1,s1(se,c,ie);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":s1(se,c,ie)}var Oe;if(U0)e:{switch(o){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Co?Yb(o,c)&&(Ne="onCompositionEnd"):o==="keydown"&&c.keyCode===229&&(Ne="onCompositionStart");Ne&&(Vb&&c.locale!=="ko"&&(Co||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Co&&(Oe=Fb()):(ua=ie,D0="value"in ua?ua.value:ua.textContent,Co=!0)),_e=bl(te,Ne),0<_e.length&&(Ne=new Ub(Ne,o,null,c,ie),se.push({event:Ne,listeners:_e}),Oe?Ne.data=Oe:(Oe=Xb(c),Oe!==null&&(Ne.data=Oe)))),(Oe=VO?KO(o,c):QO(o,c))&&(te=bl(te,"onBeforeInput"),0<te.length&&(ie=new Ub("onBeforeInput","beforeinput",null,c,ie),se.push({event:ie,listeners:te}),ie.data=Oe))}g1(se,u)})}function Iu(o,u,c){return{instance:o,listener:u,currentTarget:c}}function bl(o,u){for(var c=u+"Capture",h=[];o!==null;){var g=o,B=g.stateNode;g.tag===5&&B!==null&&(g=B,B=tu(o,c),B!=null&&h.unshift(Iu(o,B,g)),B=tu(o,u),B!=null&&h.push(Iu(o,B,g))),o=o.return}return h}function To(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function b1(o,u,c,h,g){for(var B=u._reactName,k=[];c!==null&&c!==h;){var L=c,z=L.alternate,te=L.stateNode;if(z!==null&&z===h)break;L.tag===5&&te!==null&&(L=te,g?(z=tu(c,B),z!=null&&k.unshift(Iu(c,z,L))):g||(z=tu(c,B),z!=null&&k.push(Iu(c,z,L)))),c=c.return}k.length!==0&&o.push({event:u,listeners:k})}var lC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function I1(o){return(typeof o=="string"?o:""+o).replace(lC,`
`).replace(cC,"")}function Il(o,u,c){if(u=I1(u),I1(o)!==u&&c)throw Error(n(425))}function Bl(){}var nf=null,rf=null;function af(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,pC=typeof clearTimeout=="function"?clearTimeout:void 0,B1=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof B1<"u"?function(o){return B1.resolve(null).then(o).catch(dC)}:of;function dC(o){setTimeout(function(){throw o})}function uf(o,u){var c=u,h=0;do{var g=c.nextSibling;if(o.removeChild(c),g&&g.nodeType===8)if(c=g.data,c==="/$"){if(h===0){o.removeChild(g),cu(u);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=g}while(c);cu(u)}function la(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function x1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var c=o.data;if(c==="$"||c==="$!"||c==="$?"){if(u===0)return o;u--}else c==="/$"&&u++}o=o.previousSibling}return null}var No=Math.random().toString(36).slice(2),fr="__reactFiber$"+No,Bu="__reactProps$"+No,Mr="__reactContainer$"+No,sf="__reactEvents$"+No,hC="__reactListeners$"+No,mC="__reactHandles$"+No;function qa(o){var u=o[fr];if(u)return u;for(var c=o.parentNode;c;){if(u=c[Mr]||c[fr]){if(c=u.alternate,u.child!==null||c!==null&&c.child!==null)for(o=x1(o);o!==null;){if(c=o[fr])return c;o=x1(o)}return u}o=c,c=o.parentNode}return null}function xu(o){return o=o[fr]||o[Mr],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Ro(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function xl(o){return o[Bu]||null}var lf=[],jo=-1;function ca(o){return{current:o}}function ut(o){0>jo||(o.current=lf[jo],lf[jo]=null,jo--)}function nt(o,u){jo++,lf[jo]=o.current,o.current=u}var pa={},Qt=ca(pa),pn=ca(!1),za=pa;function Ho(o,u){var c=o.type.contextTypes;if(!c)return pa;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===u)return h.__reactInternalMemoizedMaskedChildContext;var g={},B;for(B in c)g[B]=u[B];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function fn(o){return o=o.childContextTypes,o!=null}function wl(){ut(pn),ut(Qt)}function w1(o,u,c){if(Qt.current!==pa)throw Error(n(168));nt(Qt,u),nt(pn,c)}function P1(o,u,c){var h=o.stateNode;if(u=u.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var g in h)if(!(g in u))throw Error(n(108,ye(o)||"Unknown",g));return X({},c,h)}function Pl(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||pa,za=Qt.current,nt(Qt,o),nt(pn,pn.current),!0}function S1(o,u,c){var h=o.stateNode;if(!h)throw Error(n(169));c?(o=P1(o,u,za),h.__reactInternalMemoizedMergedChildContext=o,ut(pn),ut(Qt),nt(Qt,o)):ut(pn),nt(pn,c)}var _r=null,Sl=!1,cf=!1;function A1(o){_r===null?_r=[o]:_r.push(o)}function vC(o){Sl=!0,A1(o)}function fa(){if(!cf&&_r!==null){cf=!0;var o=0,u=Ze;try{var c=_r;for(Ze=1;o<c.length;o++){var h=c[o];do h=h(!0);while(h!==null)}_r=null,Sl=!1}catch(g){throw _r!==null&&(_r=_r.slice(o+1)),Mb(C0,fa),g}finally{Ze=u,cf=!1}}return null}var Do=[],$o=0,Al=null,Wl=0,kn=[],En=0,Ua=null,Or=1,Cr="";function Ga(o,u){Do[$o++]=Wl,Do[$o++]=Al,Al=o,Wl=u}function W1(o,u,c){kn[En++]=Or,kn[En++]=Cr,kn[En++]=Ua,Ua=o;var h=Or;o=Cr;var g=32-Yn(h)-1;h&=~(1<<g),c+=1;var B=32-Yn(u)+g;if(30<B){var k=g-g%5;B=(h&(1<<k)-1).toString(32),h>>=k,g-=k,Or=1<<32-Yn(u)+g|c<<g|h,Cr=B+o}else Or=1<<B|c<<g|h,Cr=o}function pf(o){o.return!==null&&(Ga(o,1),W1(o,1,0))}function ff(o){for(;o===Al;)Al=Do[--$o],Do[$o]=null,Wl=Do[--$o],Do[$o]=null;for(;o===Ua;)Ua=kn[--En],kn[En]=null,Cr=kn[--En],kn[En]=null,Or=kn[--En],kn[En]=null}var In=null,Bn=null,ct=!1,Zn=null;function M1(o,u){var c=jn(5,null,null,0);c.elementType="DELETED",c.stateNode=u,c.return=o,u=o.deletions,u===null?(o.deletions=[c],o.flags|=16):u.push(c)}function _1(o,u){switch(o.tag){case 5:var c=o.type;return u=u.nodeType!==1||c.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,In=o,Bn=la(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,In=o,Bn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(c=Ua!==null?{id:Or,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:c,retryLane:1073741824},c=jn(18,null,null,0),c.stateNode=u,c.return=o,o.child=c,In=o,Bn=null,!0):!1;default:return!1}}function df(o){return(o.mode&1)!==0&&(o.flags&128)===0}function hf(o){if(ct){var u=Bn;if(u){var c=u;if(!_1(o,u)){if(df(o))throw Error(n(418));u=la(c.nextSibling);var h=In;u&&_1(o,u)?M1(h,c):(o.flags=o.flags&-4097|2,ct=!1,In=o)}}else{if(df(o))throw Error(n(418));o.flags=o.flags&-4097|2,ct=!1,In=o}}}function O1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;In=o}function Ml(o){if(o!==In)return!1;if(!ct)return O1(o),ct=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!af(o.type,o.memoizedProps)),u&&(u=Bn)){if(df(o))throw C1(),Error(n(418));for(;u;)M1(o,u),u=la(u.nextSibling)}if(O1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var c=o.data;if(c==="/$"){if(u===0){Bn=la(o.nextSibling);break e}u--}else c!=="$"&&c!=="$!"&&c!=="$?"||u++}o=o.nextSibling}Bn=null}}else Bn=In?la(o.stateNode.nextSibling):null;return!0}function C1(){for(var o=Bn;o;)o=la(o.nextSibling)}function Lo(){Bn=In=null,ct=!1}function mf(o){Zn===null?Zn=[o]:Zn.push(o)}var gC=_.ReactCurrentBatchConfig;function wu(o,u,c){if(o=c.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var h=c.stateNode}if(!h)throw Error(n(147,o));var g=h,B=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===B?u.ref:(u=function(k){var L=g.refs;k===null?delete L[B]:L[B]=k},u._stringRef=B,u)}if(typeof o!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,o))}return o}function _l(o,u){throw o=Object.prototype.toString.call(u),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function k1(o){var u=o._init;return u(o._payload)}function E1(o){function u(J,K){if(o){var ee=J.deletions;ee===null?(J.deletions=[K],J.flags|=16):ee.push(K)}}function c(J,K){if(!o)return null;for(;K!==null;)u(J,K),K=K.sibling;return null}function h(J,K){for(J=new Map;K!==null;)K.key!==null?J.set(K.key,K):J.set(K.index,K),K=K.sibling;return J}function g(J,K){return J=Ia(J,K),J.index=0,J.sibling=null,J}function B(J,K,ee){return J.index=ee,o?(ee=J.alternate,ee!==null?(ee=ee.index,ee<K?(J.flags|=2,K):ee):(J.flags|=2,K)):(J.flags|=1048576,K)}function k(J){return o&&J.alternate===null&&(J.flags|=2),J}function L(J,K,ee,ce){return K===null||K.tag!==6?(K=i2(ee,J.mode,ce),K.return=J,K):(K=g(K,ee),K.return=J,K)}function z(J,K,ee,ce){var Me=ee.type;return Me===E?ie(J,K,ee.props.children,ce,ee.key):K!==null&&(K.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===Q&&k1(Me)===K.type)?(ce=g(K,ee.props),ce.ref=wu(J,K,ee),ce.return=J,ce):(ce=Jl(ee.type,ee.key,ee.props,null,J.mode,ce),ce.ref=wu(J,K,ee),ce.return=J,ce)}function te(J,K,ee,ce){return K===null||K.tag!==4||K.stateNode.containerInfo!==ee.containerInfo||K.stateNode.implementation!==ee.implementation?(K=u2(ee,J.mode,ce),K.return=J,K):(K=g(K,ee.children||[]),K.return=J,K)}function ie(J,K,ee,ce,Me){return K===null||K.tag!==7?(K=eo(ee,J.mode,ce,Me),K.return=J,K):(K=g(K,ee),K.return=J,K)}function se(J,K,ee){if(typeof K=="string"&&K!==""||typeof K=="number")return K=i2(""+K,J.mode,ee),K.return=J,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return ee=Jl(K.type,K.key,K.props,null,J.mode,ee),ee.ref=wu(J,null,K),ee.return=J,ee;case M:return K=u2(K,J.mode,ee),K.return=J,K;case Q:var ce=K._init;return se(J,ce(K._payload),ee)}if(Ke(K)||U(K))return K=eo(K,J.mode,ee,null),K.return=J,K;_l(J,K)}return null}function oe(J,K,ee,ce){var Me=K!==null?K.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Me!==null?null:L(J,K,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===Me?z(J,K,ee,ce):null;case M:return ee.key===Me?te(J,K,ee,ce):null;case Q:return Me=ee._init,oe(J,K,Me(ee._payload),ce)}if(Ke(ee)||U(ee))return Me!==null?null:ie(J,K,ee,ce,null);_l(J,ee)}return null}function me(J,K,ee,ce,Me){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return J=J.get(ee)||null,L(K,J,""+ce,Me);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:return J=J.get(ce.key===null?ee:ce.key)||null,z(K,J,ce,Me);case M:return J=J.get(ce.key===null?ee:ce.key)||null,te(K,J,ce,Me);case Q:var _e=ce._init;return me(J,K,ee,_e(ce._payload),Me)}if(Ke(ce)||U(ce))return J=J.get(ee)||null,ie(K,J,ce,Me,null);_l(K,ce)}return null}function Be(J,K,ee,ce){for(var Me=null,_e=null,Oe=K,Ne=K=0,Lt=null;Oe!==null&&Ne<ee.length;Ne++){Oe.index>Ne?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ue=oe(J,Oe,ee[Ne],ce);if(Ue===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ue.alternate===null&&u(J,Oe),K=B(Ue,K,Ne),_e===null?Me=Ue:_e.sibling=Ue,_e=Ue,Oe=Lt}if(Ne===ee.length)return c(J,Oe),ct&&Ga(J,Ne),Me;if(Oe===null){for(;Ne<ee.length;Ne++)Oe=se(J,ee[Ne],ce),Oe!==null&&(K=B(Oe,K,Ne),_e===null?Me=Oe:_e.sibling=Oe,_e=Oe);return ct&&Ga(J,Ne),Me}for(Oe=h(J,Oe);Ne<ee.length;Ne++)Lt=me(Oe,J,Ne,ee[Ne],ce),Lt!==null&&(o&&Lt.alternate!==null&&Oe.delete(Lt.key===null?Ne:Lt.key),K=B(Lt,K,Ne),_e===null?Me=Lt:_e.sibling=Lt,_e=Lt);return o&&Oe.forEach(function(Ba){return u(J,Ba)}),ct&&Ga(J,Ne),Me}function Se(J,K,ee,ce){var Me=U(ee);if(typeof Me!="function")throw Error(n(150));if(ee=Me.call(ee),ee==null)throw Error(n(151));for(var _e=Me=null,Oe=K,Ne=K=0,Lt=null,Ue=ee.next();Oe!==null&&!Ue.done;Ne++,Ue=ee.next()){Oe.index>Ne?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ba=oe(J,Oe,Ue.value,ce);if(Ba===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ba.alternate===null&&u(J,Oe),K=B(Ba,K,Ne),_e===null?Me=Ba:_e.sibling=Ba,_e=Ba,Oe=Lt}if(Ue.done)return c(J,Oe),ct&&Ga(J,Ne),Me;if(Oe===null){for(;!Ue.done;Ne++,Ue=ee.next())Ue=se(J,Ue.value,ce),Ue!==null&&(K=B(Ue,K,Ne),_e===null?Me=Ue:_e.sibling=Ue,_e=Ue);return ct&&Ga(J,Ne),Me}for(Oe=h(J,Oe);!Ue.done;Ne++,Ue=ee.next())Ue=me(Oe,J,Ne,Ue.value,ce),Ue!==null&&(o&&Ue.alternate!==null&&Oe.delete(Ue.key===null?Ne:Ue.key),K=B(Ue,K,Ne),_e===null?Me=Ue:_e.sibling=Ue,_e=Ue);return o&&Oe.forEach(function(YC){return u(J,YC)}),ct&&Ga(J,Ne),Me}function Pt(J,K,ee,ce){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var Me=ee.key,_e=K;_e!==null;){if(_e.key===Me){if(Me=ee.type,Me===E){if(_e.tag===7){c(J,_e.sibling),K=g(_e,ee.props.children),K.return=J,J=K;break e}}else if(_e.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===Q&&k1(Me)===_e.type){c(J,_e.sibling),K=g(_e,ee.props),K.ref=wu(J,_e,ee),K.return=J,J=K;break e}c(J,_e);break}else u(J,_e);_e=_e.sibling}ee.type===E?(K=eo(ee.props.children,J.mode,ce,ee.key),K.return=J,J=K):(ce=Jl(ee.type,ee.key,ee.props,null,J.mode,ce),ce.ref=wu(J,K,ee),ce.return=J,J=ce)}return k(J);case M:e:{for(_e=ee.key;K!==null;){if(K.key===_e)if(K.tag===4&&K.stateNode.containerInfo===ee.containerInfo&&K.stateNode.implementation===ee.implementation){c(J,K.sibling),K=g(K,ee.children||[]),K.return=J,J=K;break e}else{c(J,K);break}else u(J,K);K=K.sibling}K=u2(ee,J.mode,ce),K.return=J,J=K}return k(J);case Q:return _e=ee._init,Pt(J,K,_e(ee._payload),ce)}if(Ke(ee))return Be(J,K,ee,ce);if(U(ee))return Se(J,K,ee,ce);_l(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,K!==null&&K.tag===6?(c(J,K.sibling),K=g(K,ee),K.return=J,J=K):(c(J,K),K=i2(ee,J.mode,ce),K.return=J,J=K),k(J)):c(J,K)}return Pt}var Fo=E1(!0),T1=E1(!1),Ol=ca(null),Cl=null,qo=null,vf=null;function gf(){vf=qo=Cl=null}function yf(o){var u=Ol.current;ut(Ol),o._currentValue=u}function bf(o,u,c){for(;o!==null;){var h=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,h!==null&&(h.childLanes|=u)):h!==null&&(h.childLanes&u)!==u&&(h.childLanes|=u),o===c)break;o=o.return}}function zo(o,u){Cl=o,vf=qo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dn=!0),o.firstContext=null)}function Tn(o){var u=o._currentValue;if(vf!==o)if(o={context:o,memoizedValue:u,next:null},qo===null){if(Cl===null)throw Error(n(308));qo=o,Cl.dependencies={lanes:0,firstContext:o}}else qo=qo.next=o;return u}var Va=null;function If(o){Va===null?Va=[o]:Va.push(o)}function N1(o,u,c,h){var g=u.interleaved;return g===null?(c.next=c,If(u)):(c.next=g.next,g.next=c),u.interleaved=c,kr(o,h)}function kr(o,u){o.lanes|=u;var c=o.alternate;for(c!==null&&(c.lanes|=u),c=o,o=o.return;o!==null;)o.childLanes|=u,c=o.alternate,c!==null&&(c.childLanes|=u),c=o,o=o.return;return c.tag===3?c.stateNode:null}var da=!1;function Bf(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Er(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(o,u,c){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var g=h.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u,kr(o,c)}return g=h.interleaved,g===null?(u.next=u,If(h)):(u.next=g.next,g.next=u),h.interleaved=u,kr(o,c)}function kl(o,u,c){if(u=u.updateQueue,u!==null&&(u=u.shared,(c&4194240)!==0)){var h=u.lanes;h&=o.pendingLanes,c|=h,u.lanes=c,T0(o,c)}}function j1(o,u){var c=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var g=null,B=null;if(c=c.firstBaseUpdate,c!==null){do{var k={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};B===null?g=B=k:B=B.next=k,c=c.next}while(c!==null);B===null?g=B=u:B=B.next=u}else g=B=u;c={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:B,shared:h.shared,effects:h.effects},o.updateQueue=c;return}o=c.lastBaseUpdate,o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=u}function El(o,u,c,h){var g=o.updateQueue;da=!1;var B=g.firstBaseUpdate,k=g.lastBaseUpdate,L=g.shared.pending;if(L!==null){g.shared.pending=null;var z=L,te=z.next;z.next=null,k===null?B=te:k.next=te,k=z;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,L=ie.lastBaseUpdate,L!==k&&(L===null?ie.firstBaseUpdate=te:L.next=te,ie.lastBaseUpdate=z))}if(B!==null){var se=g.baseState;k=0,ie=te=z=null,L=B;do{var oe=L.lane,me=L.eventTime;if((h&oe)===oe){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=o,Se=L;switch(oe=u,me=c,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(me,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(me,se,oe):Be,oe==null)break e;se=X({},se,oe);break e;case 2:da=!0}}L.callback!==null&&L.lane!==0&&(o.flags|=64,oe=g.effects,oe===null?g.effects=[L]:oe.push(L))}else me={eventTime:me,lane:oe,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ie===null?(te=ie=me,z=se):ie=ie.next=me,k|=oe;if(L=L.next,L===null){if(L=g.shared.pending,L===null)break;oe=L,L=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ie===null&&(z=se),g.baseState=z,g.firstBaseUpdate=te,g.lastBaseUpdate=ie,u=g.shared.interleaved,u!==null){g=u;do k|=g.lane,g=g.next;while(g!==u)}else B===null&&(g.shared.lanes=0);Ya|=k,o.lanes=k,o.memoizedState=se}}function H1(o,u,c){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var h=o[u],g=h.callback;if(g!==null){if(h.callback=null,h=c,typeof g!="function")throw Error(n(191,g));g.call(h)}}}var Pu={},dr=ca(Pu),Su=ca(Pu),Au=ca(Pu);function Ka(o){if(o===Pu)throw Error(n(174));return o}function xf(o,u){switch(nt(Au,u),nt(Su,o),nt(dr,Pu),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:Ht(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=Ht(u,o)}ut(dr),nt(dr,u)}function Uo(){ut(dr),ut(Su),ut(Au)}function D1(o){Ka(Au.current);var u=Ka(dr.current),c=Ht(u,o.type);u!==c&&(nt(Su,o),nt(dr,c))}function wf(o){Su.current===o&&(ut(dr),ut(Su))}var ft=ca(0);function Tl(o){for(var u=o;u!==null;){if(u.tag===13){var c=u.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var Pf=[];function Sf(){for(var o=0;o<Pf.length;o++)Pf[o]._workInProgressVersionPrimary=null;Pf.length=0}var Nl=_.ReactCurrentDispatcher,Af=_.ReactCurrentBatchConfig,Qa=0,dt=null,kt=null,Dt=null,Rl=!1,Wu=!1,Mu=0,yC=0;function Yt(){throw Error(n(321))}function Wf(o,u){if(u===null)return!1;for(var c=0;c<u.length&&c<o.length;c++)if(!Xn(o[c],u[c]))return!1;return!0}function Mf(o,u,c,h,g,B){if(Qa=B,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Nl.current=o===null||o.memoizedState===null?xC:wC,o=c(h,g),Wu){B=0;do{if(Wu=!1,Mu=0,25<=B)throw Error(n(301));B+=1,Dt=kt=null,u.updateQueue=null,Nl.current=PC,o=c(h,g)}while(Wu)}if(Nl.current=Dl,u=kt!==null&&kt.next!==null,Qa=0,Dt=kt=dt=null,Rl=!1,u)throw Error(n(300));return o}function _f(){var o=Mu!==0;return Mu=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function Nn(){if(kt===null){var o=dt.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=o;else{if(o===null)throw Error(n(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function _u(o,u){return typeof u=="function"?u(o):u}function Of(o){var u=Nn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var h=kt,g=h.baseQueue,B=c.pending;if(B!==null){if(g!==null){var k=g.next;g.next=B.next,B.next=k}h.baseQueue=g=B,c.pending=null}if(g!==null){B=g.next,h=h.baseState;var L=k=null,z=null,te=B;do{var ie=te.lane;if((Qa&ie)===ie)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),h=te.hasEagerState?te.eagerState:o(h,te.action);else{var se={lane:ie,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(L=z=se,k=h):z=z.next=se,dt.lanes|=ie,Ya|=ie}te=te.next}while(te!==null&&te!==B);z===null?k=h:z.next=L,Xn(h,u.memoizedState)||(dn=!0),u.memoizedState=h,u.baseState=k,u.baseQueue=z,c.lastRenderedState=h}if(o=c.interleaved,o!==null){g=o;do B=g.lane,dt.lanes|=B,Ya|=B,g=g.next;while(g!==o)}else g===null&&(c.lanes=0);return[u.memoizedState,c.dispatch]}function Cf(o){var u=Nn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var h=c.dispatch,g=c.pending,B=u.memoizedState;if(g!==null){c.pending=null;var k=g=g.next;do B=o(B,k.action),k=k.next;while(k!==g);Xn(B,u.memoizedState)||(dn=!0),u.memoizedState=B,u.baseQueue===null&&(u.baseState=B),c.lastRenderedState=B}return[B,h]}function $1(){}function L1(o,u){var c=dt,h=Nn(),g=u(),B=!Xn(h.memoizedState,g);if(B&&(h.memoizedState=g,dn=!0),h=h.queue,kf(z1.bind(null,c,h,o),[o]),h.getSnapshot!==u||B||Dt!==null&&Dt.memoizedState.tag&1){if(c.flags|=2048,Ou(9,q1.bind(null,c,h,g,u),void 0,null),$t===null)throw Error(n(349));(Qa&30)!==0||F1(c,u,g)}return g}function F1(o,u,c){o.flags|=16384,o={getSnapshot:u,value:c},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[o]):(c=u.stores,c===null?u.stores=[o]:c.push(o))}function q1(o,u,c,h){u.value=c,u.getSnapshot=h,U1(u)&&G1(o)}function z1(o,u,c){return c(function(){U1(u)&&G1(o)})}function U1(o){var u=o.getSnapshot;o=o.value;try{var c=u();return!Xn(o,c)}catch{return!0}}function G1(o){var u=kr(o,1);u!==null&&nr(u,o,1,-1)}function V1(o){var u=hr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_u,lastRenderedState:o},u.queue=o,o=o.dispatch=BC.bind(null,dt,o),[u.memoizedState,o]}function Ou(o,u,c,h){return o={tag:o,create:u,destroy:c,deps:h,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=o.next=o):(c=u.lastEffect,c===null?u.lastEffect=o.next=o:(h=c.next,c.next=o,o.next=h,u.lastEffect=o)),o}function K1(){return Nn().memoizedState}function jl(o,u,c,h){var g=hr();dt.flags|=o,g.memoizedState=Ou(1|u,c,void 0,h===void 0?null:h)}function Hl(o,u,c,h){var g=Nn();h=h===void 0?null:h;var B=void 0;if(kt!==null){var k=kt.memoizedState;if(B=k.destroy,h!==null&&Wf(h,k.deps)){g.memoizedState=Ou(u,c,B,h);return}}dt.flags|=o,g.memoizedState=Ou(1|u,c,B,h)}function Q1(o,u){return jl(8390656,8,o,u)}function kf(o,u){return Hl(2048,8,o,u)}function Y1(o,u){return Hl(4,2,o,u)}function X1(o,u){return Hl(4,4,o,u)}function Z1(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function J1(o,u,c){return c=c!=null?c.concat([o]):null,Hl(4,4,Z1.bind(null,u,o),c)}function Ef(){}function e6(o,u){var c=Nn();u=u===void 0?null:u;var h=c.memoizedState;return h!==null&&u!==null&&Wf(u,h[1])?h[0]:(c.memoizedState=[o,u],o)}function t6(o,u){var c=Nn();u=u===void 0?null:u;var h=c.memoizedState;return h!==null&&u!==null&&Wf(u,h[1])?h[0]:(o=o(),c.memoizedState=[o,u],o)}function n6(o,u,c){return(Qa&21)===0?(o.baseState&&(o.baseState=!1,dn=!0),o.memoizedState=c):(Xn(c,u)||(c=kb(),dt.lanes|=c,Ya|=c,o.baseState=!0),u)}function bC(o,u){var c=Ze;Ze=c!==0&&4>c?c:4,o(!0);var h=Af.transition;Af.transition={};try{o(!1),u()}finally{Ze=c,Af.transition=h}}function r6(){return Nn().memoizedState}function IC(o,u,c){var h=ya(o);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},a6(o))o6(u,c);else if(c=N1(o,u,c,h),c!==null){var g=nn();nr(c,o,h,g),i6(c,u,h)}}function BC(o,u,c){var h=ya(o),g={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(a6(o))o6(u,g);else{var B=o.alternate;if(o.lanes===0&&(B===null||B.lanes===0)&&(B=u.lastRenderedReducer,B!==null))try{var k=u.lastRenderedState,L=B(k,c);if(g.hasEagerState=!0,g.eagerState=L,Xn(L,k)){var z=u.interleaved;z===null?(g.next=g,If(u)):(g.next=z.next,z.next=g),u.interleaved=g;return}}catch{}finally{}c=N1(o,u,g,h),c!==null&&(g=nn(),nr(c,o,h,g),i6(c,u,h))}}function a6(o){var u=o.alternate;return o===dt||u!==null&&u===dt}function o6(o,u){Wu=Rl=!0;var c=o.pending;c===null?u.next=u:(u.next=c.next,c.next=u),o.pending=u}function i6(o,u,c){if((c&4194240)!==0){var h=u.lanes;h&=o.pendingLanes,c|=h,u.lanes=c,T0(o,c)}}var Dl={readContext:Tn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},xC={readContext:Tn,useCallback:function(o,u){return hr().memoizedState=[o,u===void 0?null:u],o},useContext:Tn,useEffect:Q1,useImperativeHandle:function(o,u,c){return c=c!=null?c.concat([o]):null,jl(4194308,4,Z1.bind(null,u,o),c)},useLayoutEffect:function(o,u){return jl(4194308,4,o,u)},useInsertionEffect:function(o,u){return jl(4,2,o,u)},useMemo:function(o,u){var c=hr();return u=u===void 0?null:u,o=o(),c.memoizedState=[o,u],o},useReducer:function(o,u,c){var h=hr();return u=c!==void 0?c(u):u,h.memoizedState=h.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},h.queue=o,o=o.dispatch=IC.bind(null,dt,o),[h.memoizedState,o]},useRef:function(o){var u=hr();return o={current:o},u.memoizedState=o},useState:V1,useDebugValue:Ef,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=V1(!1),u=o[0];return o=bC.bind(null,o[1]),hr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,c){var h=dt,g=hr();if(ct){if(c===void 0)throw Error(n(407));c=c()}else{if(c=u(),$t===null)throw Error(n(349));(Qa&30)!==0||F1(h,u,c)}g.memoizedState=c;var B={value:c,getSnapshot:u};return g.queue=B,Q1(z1.bind(null,h,B,o),[o]),h.flags|=2048,Ou(9,q1.bind(null,h,B,c,u),void 0,null),c},useId:function(){var o=hr(),u=$t.identifierPrefix;if(ct){var c=Cr,h=Or;c=(h&~(1<<32-Yn(h)-1)).toString(32)+c,u=":"+u+"R"+c,c=Mu++,0<c&&(u+="H"+c.toString(32)),u+=":"}else c=yC++,u=":"+u+"r"+c.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},wC={readContext:Tn,useCallback:e6,useContext:Tn,useEffect:kf,useImperativeHandle:J1,useInsertionEffect:Y1,useLayoutEffect:X1,useMemo:t6,useReducer:Of,useRef:K1,useState:function(){return Of(_u)},useDebugValue:Ef,useDeferredValue:function(o){var u=Nn();return n6(u,kt.memoizedState,o)},useTransition:function(){var o=Of(_u)[0],u=Nn().memoizedState;return[o,u]},useMutableSource:$1,useSyncExternalStore:L1,useId:r6,unstable_isNewReconciler:!1},PC={readContext:Tn,useCallback:e6,useContext:Tn,useEffect:kf,useImperativeHandle:J1,useInsertionEffect:Y1,useLayoutEffect:X1,useMemo:t6,useReducer:Cf,useRef:K1,useState:function(){return Cf(_u)},useDebugValue:Ef,useDeferredValue:function(o){var u=Nn();return kt===null?u.memoizedState=o:n6(u,kt.memoizedState,o)},useTransition:function(){var o=Cf(_u)[0],u=Nn().memoizedState;return[o,u]},useMutableSource:$1,useSyncExternalStore:L1,useId:r6,unstable_isNewReconciler:!1};function Jn(o,u){if(o&&o.defaultProps){u=X({},u),o=o.defaultProps;for(var c in o)u[c]===void 0&&(u[c]=o[c]);return u}return u}function Tf(o,u,c,h){u=o.memoizedState,c=c(h,u),c=c==null?u:X({},u,c),o.memoizedState=c,o.lanes===0&&(o.updateQueue.baseState=c)}var $l={isMounted:function(o){return(o=o._reactInternals)?Fa(o)===o:!1},enqueueSetState:function(o,u,c){o=o._reactInternals;var h=nn(),g=ya(o),B=Er(h,g);B.payload=u,c!=null&&(B.callback=c),u=ha(o,B,g),u!==null&&(nr(u,o,g,h),kl(u,o,g))},enqueueReplaceState:function(o,u,c){o=o._reactInternals;var h=nn(),g=ya(o),B=Er(h,g);B.tag=1,B.payload=u,c!=null&&(B.callback=c),u=ha(o,B,g),u!==null&&(nr(u,o,g,h),kl(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var c=nn(),h=ya(o),g=Er(c,h);g.tag=2,u!=null&&(g.callback=u),u=ha(o,g,h),u!==null&&(nr(u,o,h,c),kl(u,o,h))}};function u6(o,u,c,h,g,B,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,B,k):u.prototype&&u.prototype.isPureReactComponent?!vu(c,h)||!vu(g,B):!0}function s6(o,u,c){var h=!1,g=pa,B=u.contextType;return typeof B=="object"&&B!==null?B=Tn(B):(g=fn(u)?za:Qt.current,h=u.contextTypes,B=(h=h!=null)?Ho(o,g):pa),u=new u(c,B),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$l,o.stateNode=u,u._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=B),u}function l6(o,u,c,h){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(c,h),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(c,h),u.state!==o&&$l.enqueueReplaceState(u,u.state,null)}function Nf(o,u,c,h){var g=o.stateNode;g.props=c,g.state=o.memoizedState,g.refs={},Bf(o);var B=u.contextType;typeof B=="object"&&B!==null?g.context=Tn(B):(B=fn(u)?za:Qt.current,g.context=Ho(o,B)),g.state=o.memoizedState,B=u.getDerivedStateFromProps,typeof B=="function"&&(Tf(o,u,B,c),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&$l.enqueueReplaceState(g,g.state,null),El(o,c,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Go(o,u){try{var c="",h=u;do c+=he(h),h=h.return;while(h);var g=c}catch(B){g=`
Error generating stack: `+B.message+`
`+B.stack}return{value:o,source:u,stack:g,digest:null}}function Rf(o,u,c){return{value:o,source:null,stack:c??null,digest:u??null}}function jf(o,u){try{console.error(u.value)}catch(c){setTimeout(function(){throw c})}}var SC=typeof WeakMap=="function"?WeakMap:Map;function c6(o,u,c){c=Er(-1,c),c.tag=3,c.payload={element:null};var h=u.value;return c.callback=function(){Vl||(Vl=!0,Zf=h),jf(o,u)},c}function p6(o,u,c){c=Er(-1,c),c.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;c.payload=function(){return h(g)},c.callback=function(){jf(o,u)}}var B=o.stateNode;return B!==null&&typeof B.componentDidCatch=="function"&&(c.callback=function(){jf(o,u),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),c}function f6(o,u,c){var h=o.pingCache;if(h===null){h=o.pingCache=new SC;var g=new Set;h.set(u,g)}else g=h.get(u),g===void 0&&(g=new Set,h.set(u,g));g.has(c)||(g.add(c),o=DC.bind(null,o,u,c),u.then(o,o))}function d6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function h6(o,u,c,h,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(u=Er(-1,1),u.tag=2,ha(c,u,1))),c.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var AC=_.ReactCurrentOwner,dn=!1;function tn(o,u,c,h){u.child=o===null?T1(u,null,c,h):Fo(u,o.child,c,h)}function m6(o,u,c,h,g){c=c.render;var B=u.ref;return zo(u,g),h=Mf(o,u,c,h,B,g),c=_f(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Tr(o,u,g)):(ct&&c&&pf(u),u.flags|=1,tn(o,u,h,g),u.child)}function v6(o,u,c,h,g){if(o===null){var B=c.type;return typeof B=="function"&&!o2(B)&&B.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(u.tag=15,u.type=B,g6(o,u,B,h,g)):(o=Jl(c.type,null,h,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(B=o.child,(o.lanes&g)===0){var k=B.memoizedProps;if(c=c.compare,c=c!==null?c:vu,c(k,h)&&o.ref===u.ref)return Tr(o,u,g)}return u.flags|=1,o=Ia(B,h),o.ref=u.ref,o.return=u,u.child=o}function g6(o,u,c,h,g){if(o!==null){var B=o.memoizedProps;if(vu(B,h)&&o.ref===u.ref)if(dn=!1,u.pendingProps=h=B,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dn=!0);else return u.lanes=o.lanes,Tr(o,u,g)}return Hf(o,u,c,h,g)}function y6(o,u,c){var h=u.pendingProps,g=h.children,B=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ko,xn),xn|=c;else{if((c&1073741824)===0)return o=B!==null?B.baseLanes|c:c,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,nt(Ko,xn),xn|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=B!==null?B.baseLanes:c,nt(Ko,xn),xn|=h}else B!==null?(h=B.baseLanes|c,u.memoizedState=null):h=c,nt(Ko,xn),xn|=h;return tn(o,u,g,c),u.child}function b6(o,u){var c=u.ref;(o===null&&c!==null||o!==null&&o.ref!==c)&&(u.flags|=512,u.flags|=2097152)}function Hf(o,u,c,h,g){var B=fn(c)?za:Qt.current;return B=Ho(u,B),zo(u,g),c=Mf(o,u,c,h,B,g),h=_f(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Tr(o,u,g)):(ct&&h&&pf(u),u.flags|=1,tn(o,u,c,g),u.child)}function I6(o,u,c,h,g){if(fn(c)){var B=!0;Pl(u)}else B=!1;if(zo(u,g),u.stateNode===null)Fl(o,u),s6(u,c,h),Nf(u,c,h,g),h=!0;else if(o===null){var k=u.stateNode,L=u.memoizedProps;k.props=L;var z=k.context,te=c.contextType;typeof te=="object"&&te!==null?te=Tn(te):(te=fn(c)?za:Qt.current,te=Ho(u,te));var ie=c.getDerivedStateFromProps,se=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(L!==h||z!==te)&&l6(u,k,h,te),da=!1;var oe=u.memoizedState;k.state=oe,El(u,h,k,g),z=u.memoizedState,L!==h||oe!==z||pn.current||da?(typeof ie=="function"&&(Tf(u,c,ie,h),z=u.memoizedState),(L=da||u6(u,c,L,h,oe,z,te))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=h,u.memoizedState=z),k.props=h,k.state=z,k.context=te,h=L):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),h=!1)}else{k=u.stateNode,R1(o,u),L=u.memoizedProps,te=u.type===u.elementType?L:Jn(u.type,L),k.props=te,se=u.pendingProps,oe=k.context,z=c.contextType,typeof z=="object"&&z!==null?z=Tn(z):(z=fn(c)?za:Qt.current,z=Ho(u,z));var me=c.getDerivedStateFromProps;(ie=typeof me=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(L!==se||oe!==z)&&l6(u,k,h,z),da=!1,oe=u.memoizedState,k.state=oe,El(u,h,k,g);var Be=u.memoizedState;L!==se||oe!==Be||pn.current||da?(typeof me=="function"&&(Tf(u,c,me,h),Be=u.memoizedState),(te=da||u6(u,c,te,h,oe,Be,z)||!1)?(ie||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(h,Be,z),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(h,Be,z)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||L===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||L===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=h,u.memoizedState=Be),k.props=h,k.state=Be,k.context=z,h=te):(typeof k.componentDidUpdate!="function"||L===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||L===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),h=!1)}return Df(o,u,c,h,B,g)}function Df(o,u,c,h,g,B){b6(o,u);var k=(u.flags&128)!==0;if(!h&&!k)return g&&S1(u,c,!1),Tr(o,u,B);h=u.stateNode,AC.current=u;var L=k&&typeof c.getDerivedStateFromError!="function"?null:h.render();return u.flags|=1,o!==null&&k?(u.child=Fo(u,o.child,null,B),u.child=Fo(u,null,L,B)):tn(o,u,L,B),u.memoizedState=h.state,g&&S1(u,c,!0),u.child}function B6(o){var u=o.stateNode;u.pendingContext?w1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&w1(o,u.context,!1),xf(o,u.containerInfo)}function x6(o,u,c,h,g){return Lo(),mf(g),u.flags|=256,tn(o,u,c,h),u.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Lf(o){return{baseLanes:o,cachePool:null,transitions:null}}function w6(o,u,c){var h=u.pendingProps,g=ft.current,B=!1,k=(u.flags&128)!==0,L;if((L=k)||(L=o!==null&&o.memoizedState===null?!1:(g&2)!==0),L?(B=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),nt(ft,g&1),o===null)return hf(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=h.children,o=h.fallback,B?(h=u.mode,B=u.child,k={mode:"hidden",children:k},(h&1)===0&&B!==null?(B.childLanes=0,B.pendingProps=k):B=ec(k,h,0,null),o=eo(o,h,c,null),B.return=u,o.return=u,B.sibling=o,u.child=B,u.child.memoizedState=Lf(c),u.memoizedState=$f,o):Ff(u,k));if(g=o.memoizedState,g!==null&&(L=g.dehydrated,L!==null))return WC(o,u,k,h,L,g,c);if(B){B=h.fallback,k=u.mode,g=o.child,L=g.sibling;var z={mode:"hidden",children:h.children};return(k&1)===0&&u.child!==g?(h=u.child,h.childLanes=0,h.pendingProps=z,u.deletions=null):(h=Ia(g,z),h.subtreeFlags=g.subtreeFlags&14680064),L!==null?B=Ia(L,B):(B=eo(B,k,c,null),B.flags|=2),B.return=u,h.return=u,h.sibling=B,u.child=h,h=B,B=u.child,k=o.child.memoizedState,k=k===null?Lf(c):{baseLanes:k.baseLanes|c,cachePool:null,transitions:k.transitions},B.memoizedState=k,B.childLanes=o.childLanes&~c,u.memoizedState=$f,h}return B=o.child,o=B.sibling,h=Ia(B,{mode:"visible",children:h.children}),(u.mode&1)===0&&(h.lanes=c),h.return=u,h.sibling=null,o!==null&&(c=u.deletions,c===null?(u.deletions=[o],u.flags|=16):c.push(o)),u.child=h,u.memoizedState=null,h}function Ff(o,u){return u=ec({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function Ll(o,u,c,h){return h!==null&&mf(h),Fo(u,o.child,null,c),o=Ff(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function WC(o,u,c,h,g,B,k){if(c)return u.flags&256?(u.flags&=-257,h=Rf(Error(n(422))),Ll(o,u,k,h)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(B=h.fallback,g=u.mode,h=ec({mode:"visible",children:h.children},g,0,null),B=eo(B,g,k,null),B.flags|=2,h.return=u,B.return=u,h.sibling=B,u.child=h,(u.mode&1)!==0&&Fo(u,o.child,null,k),u.child.memoizedState=Lf(k),u.memoizedState=$f,B);if((u.mode&1)===0)return Ll(o,u,k,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var L=h.dgst;return h=L,B=Error(n(419)),h=Rf(B,h,void 0),Ll(o,u,k,h)}if(L=(k&o.childLanes)!==0,dn||L){if(h=$t,h!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|k))!==0?0:g,g!==0&&g!==B.retryLane&&(B.retryLane=g,kr(o,g),nr(h,o,g,-1))}return a2(),h=Rf(Error(n(421))),Ll(o,u,k,h)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=$C.bind(null,o),g._reactRetry=u,null):(o=B.treeContext,Bn=la(g.nextSibling),In=u,ct=!0,Zn=null,o!==null&&(kn[En++]=Or,kn[En++]=Cr,kn[En++]=Ua,Or=o.id,Cr=o.overflow,Ua=u),u=Ff(u,h.children),u.flags|=4096,u)}function P6(o,u,c){o.lanes|=u;var h=o.alternate;h!==null&&(h.lanes|=u),bf(o.return,u,c)}function qf(o,u,c,h,g){var B=o.memoizedState;B===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:g}:(B.isBackwards=u,B.rendering=null,B.renderingStartTime=0,B.last=h,B.tail=c,B.tailMode=g)}function S6(o,u,c){var h=u.pendingProps,g=h.revealOrder,B=h.tail;if(tn(o,u,h.children,c),h=ft.current,(h&2)!==0)h=h&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&P6(o,c,u);else if(o.tag===19)P6(o,c,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(nt(ft,h),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(c=u.child,g=null;c!==null;)o=c.alternate,o!==null&&Tl(o)===null&&(g=c),c=c.sibling;c=g,c===null?(g=u.child,u.child=null):(g=c.sibling,c.sibling=null),qf(u,!1,g,c,B);break;case"backwards":for(c=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Tl(o)===null){u.child=g;break}o=g.sibling,g.sibling=c,c=g,g=o}qf(u,!0,c,null,B);break;case"together":qf(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Fl(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Tr(o,u,c){if(o!==null&&(u.dependencies=o.dependencies),Ya|=u.lanes,(c&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(n(153));if(u.child!==null){for(o=u.child,c=Ia(o,o.pendingProps),u.child=c,c.return=u;o.sibling!==null;)o=o.sibling,c=c.sibling=Ia(o,o.pendingProps),c.return=u;c.sibling=null}return u.child}function MC(o,u,c){switch(u.tag){case 3:B6(u),Lo();break;case 5:D1(u);break;case 1:fn(u.type)&&Pl(u);break;case 4:xf(u,u.stateNode.containerInfo);break;case 10:var h=u.type._context,g=u.memoizedProps.value;nt(Ol,h._currentValue),h._currentValue=g;break;case 13:if(h=u.memoizedState,h!==null)return h.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(c&u.child.childLanes)!==0?w6(o,u,c):(nt(ft,ft.current&1),o=Tr(o,u,c),o!==null?o.sibling:null);nt(ft,ft.current&1);break;case 19:if(h=(c&u.childLanes)!==0,(o.flags&128)!==0){if(h)return S6(o,u,c);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),nt(ft,ft.current),h)break;return null;case 22:case 23:return u.lanes=0,y6(o,u,c)}return Tr(o,u,c)}var A6,zf,W6,M6;A6=function(o,u){for(var c=u.child;c!==null;){if(c.tag===5||c.tag===6)o.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===u)break;for(;c.sibling===null;){if(c.return===null||c.return===u)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},zf=function(){},W6=function(o,u,c,h){var g=o.memoizedProps;if(g!==h){o=u.stateNode,Ka(dr.current);var B=null;switch(c){case"input":g=Pe(o,g),h=Pe(o,h),B=[];break;case"select":g=X({},g,{value:void 0}),h=X({},h,{value:void 0}),B=[];break;case"textarea":g=vt(o,g),h=vt(o,h),B=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=Bl)}w0(c,h);var k;c=null;for(te in g)if(!h.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var L=g[te];for(k in L)L.hasOwnProperty(k)&&(c||(c={}),c[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?B||(B=[]):(B=B||[]).push(te,null));for(te in h){var z=h[te];if(L=g!=null?g[te]:void 0,h.hasOwnProperty(te)&&z!==L&&(z!=null||L!=null))if(te==="style")if(L){for(k in L)!L.hasOwnProperty(k)||z&&z.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in z)z.hasOwnProperty(k)&&L[k]!==z[k]&&(c||(c={}),c[k]=z[k])}else c||(B||(B=[]),B.push(te,c)),c=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,L=L?L.__html:void 0,z!=null&&L!==z&&(B=B||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(B=B||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&it("scroll",o),B||L===z||(B=[])):(B=B||[]).push(te,z))}c&&(B=B||[]).push("style",c);var te=B;(u.updateQueue=te)&&(u.flags|=4)}},M6=function(o,u,c,h){c!==h&&(u.flags|=4)};function Cu(o,u){if(!ct)switch(o.tailMode){case"hidden":u=o.tail;for(var c=null;u!==null;)u.alternate!==null&&(c=u),u=u.sibling;c===null?o.tail=null:c.sibling=null;break;case"collapsed":c=o.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Xt(o){var u=o.alternate!==null&&o.alternate.child===o.child,c=0,h=0;if(u)for(var g=o.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=c,u}function _C(o,u,c){var h=u.pendingProps;switch(ff(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&wl(),Xt(u),null;case 3:return h=u.stateNode,Uo(),ut(pn),ut(Qt),Sf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(Ml(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Zn!==null&&(t2(Zn),Zn=null))),zf(o,u),Xt(u),null;case 5:wf(u);var g=Ka(Au.current);if(c=u.type,o!==null&&u.stateNode!=null)W6(o,u,c,h,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!h){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(o=Ka(dr.current),Ml(u)){h=u.stateNode,c=u.type;var B=u.memoizedProps;switch(h[fr]=u,h[Bu]=B,o=(u.mode&1)!==0,c){case"dialog":it("cancel",h),it("close",h);break;case"iframe":case"object":case"embed":it("load",h);break;case"video":case"audio":for(g=0;g<yu.length;g++)it(yu[g],h);break;case"source":it("error",h);break;case"img":case"image":case"link":it("error",h),it("load",h);break;case"details":it("toggle",h);break;case"input":Ce(h,B),it("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!B.multiple},it("invalid",h);break;case"textarea":_n(h,B),it("invalid",h)}w0(c,B),g=null;for(var k in B)if(B.hasOwnProperty(k)){var L=B[k];k==="children"?typeof L=="string"?h.textContent!==L&&(B.suppressHydrationWarning!==!0&&Il(h.textContent,L,o),g=["children",L]):typeof L=="number"&&h.textContent!==""+L&&(B.suppressHydrationWarning!==!0&&Il(h.textContent,L,o),g=["children",""+L]):a.hasOwnProperty(k)&&L!=null&&k==="onScroll"&&it("scroll",h)}switch(c){case"input":pe(h),He(h,B,!0);break;case"textarea":pe(h),Kt(h);break;case"select":case"option":break;default:typeof B.onClick=="function"&&(h.onclick=Bl)}h=g,u.updateQueue=h,h!==null&&(u.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=xt(c)),o==="http://www.w3.org/1999/xhtml"?c==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=k.createElement(c,{is:h.is}):(o=k.createElement(c),c==="select"&&(k=o,h.multiple?k.multiple=!0:h.size&&(k.size=h.size))):o=k.createElementNS(o,c),o[fr]=u,o[Bu]=h,A6(o,u,!1,!1),u.stateNode=o;e:{switch(k=P0(c,h),c){case"dialog":it("cancel",o),it("close",o),g=h;break;case"iframe":case"object":case"embed":it("load",o),g=h;break;case"video":case"audio":for(g=0;g<yu.length;g++)it(yu[g],o);g=h;break;case"source":it("error",o),g=h;break;case"img":case"image":case"link":it("error",o),it("load",o),g=h;break;case"details":it("toggle",o),g=h;break;case"input":Ce(o,h),g=Pe(o,h),it("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=X({},h,{value:void 0}),it("invalid",o);break;case"textarea":_n(o,h),g=vt(o,h),it("invalid",o);break;default:g=h}w0(c,g),L=g;for(B in L)if(L.hasOwnProperty(B)){var z=L[B];B==="style"?eu(o,z):B==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ao(o,z)):B==="children"?typeof z=="string"?(c!=="textarea"||z!=="")&&ta(o,z):typeof z=="number"&&ta(o,""+z):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(a.hasOwnProperty(B)?z!=null&&B==="onScroll"&&it("scroll",o):z!=null&&W(o,B,z,k))}switch(c){case"input":pe(o),He(o,h,!1);break;case"textarea":pe(o),Kt(o);break;case"option":h.value!=null&&o.setAttribute("value",""+fe(h.value));break;case"select":o.multiple=!!h.multiple,B=h.value,B!=null?Bt(o,!!h.multiple,B,!1):h.defaultValue!=null&&Bt(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=Bl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(o&&u.stateNode!=null)M6(o,u,o.memoizedProps,h);else{if(typeof h!="string"&&u.stateNode===null)throw Error(n(166));if(c=Ka(Au.current),Ka(dr.current),Ml(u)){if(h=u.stateNode,c=u.memoizedProps,h[fr]=u,(B=h.nodeValue!==c)&&(o=In,o!==null))switch(o.tag){case 3:Il(h.nodeValue,c,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&Il(h.nodeValue,c,(o.mode&1)!==0)}B&&(u.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[fr]=u,u.stateNode=h}return Xt(u),null;case 13:if(ut(ft),h=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(ct&&Bn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)C1(),Lo(),u.flags|=98560,B=!1;else if(B=Ml(u),h!==null&&h.dehydrated!==null){if(o===null){if(!B)throw Error(n(318));if(B=u.memoizedState,B=B!==null?B.dehydrated:null,!B)throw Error(n(317));B[fr]=u}else Lo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),B=!1}else Zn!==null&&(t2(Zn),Zn=null),B=!0;if(!B)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=c,u):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(ft.current&1)!==0?Et===0&&(Et=3):a2())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return Uo(),zf(o,u),o===null&&bu(u.stateNode.containerInfo),Xt(u),null;case 10:return yf(u.type._context),Xt(u),null;case 17:return fn(u.type)&&wl(),Xt(u),null;case 19:if(ut(ft),B=u.memoizedState,B===null)return Xt(u),null;if(h=(u.flags&128)!==0,k=B.rendering,k===null)if(h)Cu(B,!1);else{if(Et!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(k=Tl(o),k!==null){for(u.flags|=128,Cu(B,!1),h=k.updateQueue,h!==null&&(u.updateQueue=h,u.flags|=4),u.subtreeFlags=0,h=c,c=u.child;c!==null;)B=c,o=h,B.flags&=14680066,k=B.alternate,k===null?(B.childLanes=0,B.lanes=o,B.child=null,B.subtreeFlags=0,B.memoizedProps=null,B.memoizedState=null,B.updateQueue=null,B.dependencies=null,B.stateNode=null):(B.childLanes=k.childLanes,B.lanes=k.lanes,B.child=k.child,B.subtreeFlags=0,B.deletions=null,B.memoizedProps=k.memoizedProps,B.memoizedState=k.memoizedState,B.updateQueue=k.updateQueue,B.type=k.type,o=k.dependencies,B.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),c=c.sibling;return nt(ft,ft.current&1|2),u.child}o=o.sibling}B.tail!==null&&wt()>Qo&&(u.flags|=128,h=!0,Cu(B,!1),u.lanes=4194304)}else{if(!h)if(o=Tl(k),o!==null){if(u.flags|=128,h=!0,c=o.updateQueue,c!==null&&(u.updateQueue=c,u.flags|=4),Cu(B,!0),B.tail===null&&B.tailMode==="hidden"&&!k.alternate&&!ct)return Xt(u),null}else 2*wt()-B.renderingStartTime>Qo&&c!==1073741824&&(u.flags|=128,h=!0,Cu(B,!1),u.lanes=4194304);B.isBackwards?(k.sibling=u.child,u.child=k):(c=B.last,c!==null?c.sibling=k:u.child=k,B.last=k)}return B.tail!==null?(u=B.tail,B.rendering=u,B.tail=u.sibling,B.renderingStartTime=wt(),u.sibling=null,c=ft.current,nt(ft,h?c&1|2:c&1),u):(Xt(u),null);case 22:case 23:return r2(),h=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(u.flags|=8192),h&&(u.mode&1)!==0?(xn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function OC(o,u){switch(ff(u),u.tag){case 1:return fn(u.type)&&wl(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Uo(),ut(pn),ut(Qt),Sf(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return wf(u),null;case 13:if(ut(ft),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(n(340));Lo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return ut(ft),null;case 4:return Uo(),null;case 10:return yf(u.type._context),null;case 22:case 23:return r2(),null;case 24:return null;default:return null}}var ql=!1,Zt=!1,CC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Vo(o,u){var c=o.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){yt(o,u,h)}else c.current=null}function Uf(o,u,c){try{c()}catch(h){yt(o,u,h)}}var _6=!1;function kC(o,u){if(nf=ll,o=u1(),K0(o)){if("selectionStart"in o)var c={start:o.selectionStart,end:o.selectionEnd};else e:{c=(c=o.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var g=h.anchorOffset,B=h.focusNode;h=h.focusOffset;try{c.nodeType,B.nodeType}catch{c=null;break e}var k=0,L=-1,z=-1,te=0,ie=0,se=o,oe=null;t:for(;;){for(var me;se!==c||g!==0&&se.nodeType!==3||(L=k+g),se!==B||h!==0&&se.nodeType!==3||(z=k+h),se.nodeType===3&&(k+=se.nodeValue.length),(me=se.firstChild)!==null;)oe=se,se=me;for(;;){if(se===o)break t;if(oe===c&&++te===g&&(L=k),oe===B&&++ie===h&&(z=k),(me=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=me}c=L===-1||z===-1?null:{start:L,end:z}}else c=null}c=c||{start:0,end:0}}else c=null;for(rf={focusedElem:o,selectionRange:c},ll=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Pt=Be.memoizedState,J=u.stateNode,K=J.getSnapshotBeforeUpdate(u.elementType===u.type?Se:Jn(u.type,Se),Pt);J.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ce){yt(u,u.return,ce)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=_6,_6=!1,Be}function ku(o,u,c){var h=u.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var B=g.destroy;g.destroy=void 0,B!==void 0&&Uf(u,c,B)}g=g.next}while(g!==h)}}function zl(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var c=u=u.next;do{if((c.tag&o)===o){var h=c.create;c.destroy=h()}c=c.next}while(c!==u)}}function Gf(o){var u=o.ref;if(u!==null){var c=o.stateNode;switch(o.tag){case 5:o=c;break;default:o=c}typeof u=="function"?u(o):u.current=o}}function O6(o){var u=o.alternate;u!==null&&(o.alternate=null,O6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[fr],delete u[Bu],delete u[sf],delete u[hC],delete u[mC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function C6(o){return o.tag===5||o.tag===3||o.tag===4}function k6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||C6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Vf(o,u,c){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?c.nodeType===8?c.parentNode.insertBefore(o,u):c.insertBefore(o,u):(c.nodeType===8?(u=c.parentNode,u.insertBefore(o,c)):(u=c,u.appendChild(o)),c=c._reactRootContainer,c!=null||u.onclick!==null||(u.onclick=Bl));else if(h!==4&&(o=o.child,o!==null))for(Vf(o,u,c),o=o.sibling;o!==null;)Vf(o,u,c),o=o.sibling}function Kf(o,u,c){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?c.insertBefore(o,u):c.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Kf(o,u,c),o=o.sibling;o!==null;)Kf(o,u,c),o=o.sibling}var Ut=null,er=!1;function ma(o,u,c){for(c=c.child;c!==null;)E6(o,u,c),c=c.sibling}function E6(o,u,c){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(rl,c)}catch{}switch(c.tag){case 5:Zt||Vo(c,u);case 6:var h=Ut,g=er;Ut=null,ma(o,u,c),Ut=h,er=g,Ut!==null&&(er?(o=Ut,c=c.stateNode,o.nodeType===8?o.parentNode.removeChild(c):o.removeChild(c)):Ut.removeChild(c.stateNode));break;case 18:Ut!==null&&(er?(o=Ut,c=c.stateNode,o.nodeType===8?uf(o.parentNode,c):o.nodeType===1&&uf(o,c),cu(o)):uf(Ut,c.stateNode));break;case 4:h=Ut,g=er,Ut=c.stateNode.containerInfo,er=!0,ma(o,u,c),Ut=h,er=g;break;case 0:case 11:case 14:case 15:if(!Zt&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var B=g,k=B.destroy;B=B.tag,k!==void 0&&((B&2)!==0||(B&4)!==0)&&Uf(c,u,k),g=g.next}while(g!==h)}ma(o,u,c);break;case 1:if(!Zt&&(Vo(c,u),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(L){yt(c,u,L)}ma(o,u,c);break;case 21:ma(o,u,c);break;case 22:c.mode&1?(Zt=(h=Zt)||c.memoizedState!==null,ma(o,u,c),Zt=h):ma(o,u,c);break;default:ma(o,u,c)}}function T6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var c=o.stateNode;c===null&&(c=o.stateNode=new CC),u.forEach(function(h){var g=LC.bind(null,o,h);c.has(h)||(c.add(h),h.then(g,g))})}}function tr(o,u){var c=u.deletions;if(c!==null)for(var h=0;h<c.length;h++){var g=c[h];try{var B=o,k=u,L=k;e:for(;L!==null;){switch(L.tag){case 5:Ut=L.stateNode,er=!1;break e;case 3:Ut=L.stateNode.containerInfo,er=!0;break e;case 4:Ut=L.stateNode.containerInfo,er=!0;break e}L=L.return}if(Ut===null)throw Error(n(160));E6(B,k,g),Ut=null,er=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(te){yt(g,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)N6(u,o),u=u.sibling}function N6(o,u){var c=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),mr(o),h&4){try{ku(3,o,o.return),zl(3,o)}catch(Se){yt(o,o.return,Se)}try{ku(5,o,o.return)}catch(Se){yt(o,o.return,Se)}}break;case 1:tr(u,o),mr(o),h&512&&c!==null&&Vo(c,c.return);break;case 5:if(tr(u,o),mr(o),h&512&&c!==null&&Vo(c,c.return),o.flags&32){var g=o.stateNode;try{ta(g,"")}catch(Se){yt(o,o.return,Se)}}if(h&4&&(g=o.stateNode,g!=null)){var B=o.memoizedProps,k=c!==null?c.memoizedProps:B,L=o.type,z=o.updateQueue;if(o.updateQueue=null,z!==null)try{L==="input"&&B.type==="radio"&&B.name!=null&&We(g,B),P0(L,k);var te=P0(L,B);for(k=0;k<z.length;k+=2){var ie=z[k],se=z[k+1];ie==="style"?eu(g,se):ie==="dangerouslySetInnerHTML"?Ao(g,se):ie==="children"?ta(g,se):W(g,ie,se,te)}switch(L){case"input":Fe(g,B);break;case"textarea":gt(g,B);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!B.multiple;var me=B.value;me!=null?Bt(g,!!B.multiple,me,!1):oe!==!!B.multiple&&(B.defaultValue!=null?Bt(g,!!B.multiple,B.defaultValue,!0):Bt(g,!!B.multiple,B.multiple?[]:"",!1))}g[Bu]=B}catch(Se){yt(o,o.return,Se)}}break;case 6:if(tr(u,o),mr(o),h&4){if(o.stateNode===null)throw Error(n(162));g=o.stateNode,B=o.memoizedProps;try{g.nodeValue=B}catch(Se){yt(o,o.return,Se)}}break;case 3:if(tr(u,o),mr(o),h&4&&c!==null&&c.memoizedState.isDehydrated)try{cu(u.containerInfo)}catch(Se){yt(o,o.return,Se)}break;case 4:tr(u,o),mr(o);break;case 13:tr(u,o),mr(o),g=o.child,g.flags&8192&&(B=g.memoizedState!==null,g.stateNode.isHidden=B,!B||g.alternate!==null&&g.alternate.memoizedState!==null||(Xf=wt())),h&4&&T6(o);break;case 22:if(ie=c!==null&&c.memoizedState!==null,o.mode&1?(Zt=(te=Zt)||ie,tr(u,o),Zt=te):tr(u,o),mr(o),h&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:ku(4,oe,oe.return);break;case 1:Vo(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){h=oe,c=oe.return;try{u=h,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){yt(h,c,Se)}}break;case 5:Vo(oe,oe.return);break;case 22:if(oe.memoizedState!==null){H6(se);continue}}me!==null?(me.return=oe,be=me):H6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{g=se.stateNode,te?(B=g.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none"):(L=se.stateNode,z=se.memoizedProps.style,k=z!=null&&z.hasOwnProperty("display")?z.display:null,L.style.display=na("display",k))}catch(Se){yt(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){yt(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),mr(o),h&4&&T6(o);break;case 21:break;default:tr(u,o),mr(o)}}function mr(o){var u=o.flags;if(u&2){try{e:{for(var c=o.return;c!==null;){if(C6(c)){var h=c;break e}c=c.return}throw Error(n(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(ta(g,""),h.flags&=-33);var B=k6(o);Kf(o,B,g);break;case 3:case 4:var k=h.stateNode.containerInfo,L=k6(o);Vf(o,L,k);break;default:throw Error(n(161))}}catch(z){yt(o,o.return,z)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function EC(o,u,c){be=o,R6(o)}function R6(o,u,c){for(var h=(o.mode&1)!==0;be!==null;){var g=be,B=g.child;if(g.tag===22&&h){var k=g.memoizedState!==null||ql;if(!k){var L=g.alternate,z=L!==null&&L.memoizedState!==null||Zt;L=ql;var te=Zt;if(ql=k,(Zt=z)&&!te)for(be=g;be!==null;)k=be,z=k.child,k.tag===22&&k.memoizedState!==null?D6(g):z!==null?(z.return=k,be=z):D6(g);for(;B!==null;)be=B,R6(B),B=B.sibling;be=g,ql=L,Zt=te}j6(o)}else(g.subtreeFlags&8772)!==0&&B!==null?(B.return=g,be=B):j6(o)}}function j6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var c=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||zl(5,u);break;case 1:var h=u.stateNode;if(u.flags&4&&!Zt)if(c===null)h.componentDidMount();else{var g=u.elementType===u.type?c.memoizedProps:Jn(u.type,c.memoizedProps);h.componentDidUpdate(g,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var B=u.updateQueue;B!==null&&H1(u,B,h);break;case 3:var k=u.updateQueue;if(k!==null){if(c=null,u.child!==null)switch(u.child.tag){case 5:c=u.child.stateNode;break;case 1:c=u.child.stateNode}H1(u,k,c)}break;case 5:var L=u.stateNode;if(c===null&&u.flags&4){c=L;var z=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&c.focus();break;case"img":z.src&&(c.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var ie=te.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&cu(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&Gf(u)}catch(oe){yt(u,u.return,oe)}}if(u===o){be=null;break}if(c=u.sibling,c!==null){c.return=u.return,be=c;break}be=u.return}}function H6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var c=u.sibling;if(c!==null){c.return=u.return,be=c;break}be=u.return}}function D6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var c=u.return;try{zl(4,u)}catch(z){yt(u,c,z)}break;case 1:var h=u.stateNode;if(typeof h.componentDidMount=="function"){var g=u.return;try{h.componentDidMount()}catch(z){yt(u,g,z)}}var B=u.return;try{Gf(u)}catch(z){yt(u,B,z)}break;case 5:var k=u.return;try{Gf(u)}catch(z){yt(u,k,z)}}}catch(z){yt(u,u.return,z)}if(u===o){be=null;break}var L=u.sibling;if(L!==null){L.return=u.return,be=L;break}be=u.return}}var TC=Math.ceil,Ul=_.ReactCurrentDispatcher,Qf=_.ReactCurrentOwner,Rn=_.ReactCurrentBatchConfig,ze=0,$t=null,Mt=null,Gt=0,xn=0,Ko=ca(0),Et=0,Eu=null,Ya=0,Gl=0,Yf=0,Tu=null,hn=null,Xf=0,Qo=1/0,Nr=null,Vl=!1,Zf=null,va=null,Kl=!1,ga=null,Ql=0,Nu=0,Jf=null,Yl=-1,Xl=0;function nn(){return(ze&6)!==0?wt():Yl!==-1?Yl:Yl=wt()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Gt!==0?Gt&-Gt:gC.transition!==null?(Xl===0&&(Xl=kb()),Xl):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:Lb(o.type)),o)}function nr(o,u,c,h){if(50<Nu)throw Nu=0,Jf=null,Error(n(185));ou(o,c,h),((ze&2)===0||o!==$t)&&(o===$t&&((ze&2)===0&&(Gl|=c),Et===4&&ba(o,Gt)),mn(o,h),c===1&&ze===0&&(u.mode&1)===0&&(Qo=wt()+500,Sl&&fa()))}function mn(o,u){var c=o.callbackNode;gO(o,u);var h=il(o,o===$t?Gt:0);if(h===0)c!==null&&_b(c),o.callbackNode=null,o.callbackPriority=0;else if(u=h&-h,o.callbackPriority!==u){if(c!=null&&_b(c),u===1)o.tag===0?vC(L6.bind(null,o)):A1(L6.bind(null,o)),fC(function(){(ze&6)===0&&fa()}),c=null;else{switch(Eb(h)){case 1:c=C0;break;case 4:c=Ob;break;case 16:c=nl;break;case 536870912:c=Cb;break;default:c=nl}c=Q6(c,$6.bind(null,o))}o.callbackPriority=u,o.callbackNode=c}}function $6(o,u){if(Yl=-1,Xl=0,(ze&6)!==0)throw Error(n(327));var c=o.callbackNode;if(Yo()&&o.callbackNode!==c)return null;var h=il(o,o===$t?Gt:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||u)u=Zl(o,h);else{u=h;var g=ze;ze|=2;var B=q6();($t!==o||Gt!==u)&&(Nr=null,Qo=wt()+500,Za(o,u));do try{jC();break}catch(L){F6(o,L)}while(!0);gf(),Ul.current=B,ze=g,Mt!==null?u=0:($t=null,Gt=0,u=Et)}if(u!==0){if(u===2&&(g=k0(o),g!==0&&(h=g,u=e2(o,g))),u===1)throw c=Eu,Za(o,0),ba(o,h),mn(o,wt()),c;if(u===6)ba(o,h);else{if(g=o.current.alternate,(h&30)===0&&!NC(g)&&(u=Zl(o,h),u===2&&(B=k0(o),B!==0&&(h=B,u=e2(o,B))),u===1))throw c=Eu,Za(o,0),ba(o,h),mn(o,wt()),c;switch(o.finishedWork=g,o.finishedLanes=h,u){case 0:case 1:throw Error(n(345));case 2:Ja(o,hn,Nr);break;case 3:if(ba(o,h),(h&130023424)===h&&(u=Xf+500-wt(),10<u)){if(il(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){nn(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=of(Ja.bind(null,o,hn,Nr),u);break}Ja(o,hn,Nr);break;case 4:if(ba(o,h),(h&4194240)===h)break;for(u=o.eventTimes,g=-1;0<h;){var k=31-Yn(h);B=1<<k,k=u[k],k>g&&(g=k),h&=~B}if(h=g,h=wt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*TC(h/1960))-h,10<h){o.timeoutHandle=of(Ja.bind(null,o,hn,Nr),h);break}Ja(o,hn,Nr);break;case 5:Ja(o,hn,Nr);break;default:throw Error(n(329))}}}return mn(o,wt()),o.callbackNode===c?$6.bind(null,o):null}function e2(o,u){var c=Tu;return o.current.memoizedState.isDehydrated&&(Za(o,u).flags|=256),o=Zl(o,u),o!==2&&(u=hn,hn=c,u!==null&&t2(u)),o}function t2(o){hn===null?hn=o:hn.push.apply(hn,o)}function NC(o){for(var u=o;;){if(u.flags&16384){var c=u.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var g=c[h],B=g.getSnapshot;g=g.value;try{if(!Xn(B(),g))return!1}catch{return!1}}}if(c=u.child,u.subtreeFlags&16384&&c!==null)c.return=u,u=c;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~Yf,u&=~Gl,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var c=31-Yn(u),h=1<<c;o[c]=-1,u&=~h}}function L6(o){if((ze&6)!==0)throw Error(n(327));Yo();var u=il(o,0);if((u&1)===0)return mn(o,wt()),null;var c=Zl(o,u);if(o.tag!==0&&c===2){var h=k0(o);h!==0&&(u=h,c=e2(o,h))}if(c===1)throw c=Eu,Za(o,0),ba(o,u),mn(o,wt()),c;if(c===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,Ja(o,hn,Nr),mn(o,wt()),null}function n2(o,u){var c=ze;ze|=1;try{return o(u)}finally{ze=c,ze===0&&(Qo=wt()+500,Sl&&fa())}}function Xa(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Yo();var u=ze;ze|=1;var c=Rn.transition,h=Ze;try{if(Rn.transition=null,Ze=1,o)return o()}finally{Ze=h,Rn.transition=c,ze=u,(ze&6)===0&&fa()}}function r2(){xn=Ko.current,ut(Ko)}function Za(o,u){o.finishedWork=null,o.finishedLanes=0;var c=o.timeoutHandle;if(c!==-1&&(o.timeoutHandle=-1,pC(c)),Mt!==null)for(c=Mt.return;c!==null;){var h=c;switch(ff(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&wl();break;case 3:Uo(),ut(pn),ut(Qt),Sf();break;case 5:wf(h);break;case 4:Uo();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:yf(h.type._context);break;case 22:case 23:r2()}c=c.return}if($t=o,Mt=o=Ia(o.current,null),Gt=xn=u,Et=0,Eu=null,Yf=Gl=Ya=0,hn=Tu=null,Va!==null){for(u=0;u<Va.length;u++)if(c=Va[u],h=c.interleaved,h!==null){c.interleaved=null;var g=h.next,B=c.pending;if(B!==null){var k=B.next;B.next=g,h.next=k}c.pending=h}Va=null}return o}function F6(o,u){do{var c=Mt;try{if(gf(),Nl.current=Dl,Rl){for(var h=dt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}Rl=!1}if(Qa=0,Dt=kt=dt=null,Wu=!1,Mu=0,Qf.current=null,c===null||c.return===null){Et=1,Eu=u,Mt=null;break}e:{var B=o,k=c.return,L=c,z=u;if(u=Gt,L.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,ie=L,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=d6(k);if(me!==null){me.flags&=-257,h6(me,k,L,B,u),me.mode&1&&f6(B,te,u),u=me,z=te;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(z),u.updateQueue=Se}else Be.add(z);break e}else{if((u&1)===0){f6(B,te,u),a2();break e}z=Error(n(426))}}else if(ct&&L.mode&1){var Pt=d6(k);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),h6(Pt,k,L,B,u),mf(Go(z,L));break e}}B=z=Go(z,L),Et!==4&&(Et=2),Tu===null?Tu=[B]:Tu.push(B),B=k;do{switch(B.tag){case 3:B.flags|=65536,u&=-u,B.lanes|=u;var J=c6(B,z,u);j1(B,J);break e;case 1:L=z;var K=B.type,ee=B.stateNode;if((B.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){B.flags|=65536,u&=-u,B.lanes|=u;var ce=p6(B,L,u);j1(B,ce);break e}}B=B.return}while(B!==null)}U6(c)}catch(Me){u=Me,Mt===c&&c!==null&&(Mt=c=c.return);continue}break}while(!0)}function q6(){var o=Ul.current;return Ul.current=Dl,o===null?Dl:o}function a2(){(Et===0||Et===3||Et===2)&&(Et=4),$t===null||(Ya&268435455)===0&&(Gl&268435455)===0||ba($t,Gt)}function Zl(o,u){var c=ze;ze|=2;var h=q6();($t!==o||Gt!==u)&&(Nr=null,Za(o,u));do try{RC();break}catch(g){F6(o,g)}while(!0);if(gf(),ze=c,Ul.current=h,Mt!==null)throw Error(n(261));return $t=null,Gt=0,Et}function RC(){for(;Mt!==null;)z6(Mt)}function jC(){for(;Mt!==null&&!sO();)z6(Mt)}function z6(o){var u=K6(o.alternate,o,xn);o.memoizedProps=o.pendingProps,u===null?U6(o):Mt=u,Qf.current=null}function U6(o){var u=o;do{var c=u.alternate;if(o=u.return,(u.flags&32768)===0){if(c=_C(c,u,xn),c!==null){Mt=c;return}}else{if(c=OC(c,u),c!==null){c.flags&=32767,Mt=c;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Et=6,Mt=null;return}}if(u=u.sibling,u!==null){Mt=u;return}Mt=u=o}while(u!==null);Et===0&&(Et=5)}function Ja(o,u,c){var h=Ze,g=Rn.transition;try{Rn.transition=null,Ze=1,HC(o,u,c,h)}finally{Rn.transition=g,Ze=h}return null}function HC(o,u,c,h){do Yo();while(ga!==null);if((ze&6)!==0)throw Error(n(327));c=o.finishedWork;var g=o.finishedLanes;if(c===null)return null;if(o.finishedWork=null,o.finishedLanes=0,c===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var B=c.lanes|c.childLanes;if(yO(o,B),o===$t&&(Mt=$t=null,Gt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Kl||(Kl=!0,Q6(nl,function(){return Yo(),null})),B=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||B){B=Rn.transition,Rn.transition=null;var k=Ze;Ze=1;var L=ze;ze|=4,Qf.current=null,kC(o,c),N6(c,o),aC(rf),ll=!!nf,rf=nf=null,o.current=c,EC(c),lO(),ze=L,Ze=k,Rn.transition=B}else o.current=c;if(Kl&&(Kl=!1,ga=o,Ql=g),B=o.pendingLanes,B===0&&(va=null),fO(c.stateNode),mn(o,wt()),u!==null)for(h=o.onRecoverableError,c=0;c<u.length;c++)g=u[c],h(g.value,{componentStack:g.stack,digest:g.digest});if(Vl)throw Vl=!1,o=Zf,Zf=null,o;return(Ql&1)!==0&&o.tag!==0&&Yo(),B=o.pendingLanes,(B&1)!==0?o===Jf?Nu++:(Nu=0,Jf=o):Nu=0,fa(),null}function Yo(){if(ga!==null){var o=Eb(Ql),u=Rn.transition,c=Ze;try{if(Rn.transition=null,Ze=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Ql=0,(ze&6)!==0)throw Error(n(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var B=be,k=B.child;if((be.flags&16)!==0){var L=B.deletions;if(L!==null){for(var z=0;z<L.length;z++){var te=L[z];for(be=te;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:ku(8,ie,B)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,me=ie.return;if(O6(ie),ie===te){be=null;break}if(oe!==null){oe.return=me,be=oe;break}be=me}}}var Be=B.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=B}}if((B.subtreeFlags&2064)!==0&&k!==null)k.return=B,be=k;else e:for(;be!==null;){if(B=be,(B.flags&2048)!==0)switch(B.tag){case 0:case 11:case 15:ku(9,B,B.return)}var J=B.sibling;if(J!==null){J.return=B.return,be=J;break e}be=B.return}}var K=o.current;for(be=K;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=K;be!==null;){if(L=be,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:zl(9,L)}}catch(Me){yt(L,L.return,Me)}if(L===k){be=null;break e}var ce=L.sibling;if(ce!==null){ce.return=L.return,be=ce;break e}be=L.return}}if(ze=g,fa(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(rl,o)}catch{}h=!0}return h}finally{Ze=c,Rn.transition=u}}return!1}function G6(o,u,c){u=Go(c,u),u=c6(o,u,1),o=ha(o,u,1),u=nn(),o!==null&&(ou(o,1,u),mn(o,u))}function yt(o,u,c){if(o.tag===3)G6(o,o,c);else for(;u!==null;){if(u.tag===3){G6(u,o,c);break}else if(u.tag===1){var h=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Go(c,o),o=p6(u,o,1),u=ha(u,o,1),o=nn(),u!==null&&(ou(u,1,o),mn(u,o));break}}u=u.return}}function DC(o,u,c){var h=o.pingCache;h!==null&&h.delete(u),u=nn(),o.pingedLanes|=o.suspendedLanes&c,$t===o&&(Gt&c)===c&&(Et===4||Et===3&&(Gt&130023424)===Gt&&500>wt()-Xf?Za(o,0):Yf|=c),mn(o,u)}function V6(o,u){u===0&&((o.mode&1)===0?u=1:(u=ol,ol<<=1,(ol&130023424)===0&&(ol=4194304)));var c=nn();o=kr(o,u),o!==null&&(ou(o,u,c),mn(o,c))}function $C(o){var u=o.memoizedState,c=0;u!==null&&(c=u.retryLane),V6(o,c)}function LC(o,u){var c=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(c=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(n(314))}h!==null&&h.delete(u),V6(o,c)}var K6;K6=function(o,u,c){if(o!==null)if(o.memoizedProps!==u.pendingProps||pn.current)dn=!0;else{if((o.lanes&c)===0&&(u.flags&128)===0)return dn=!1,MC(o,u,c);dn=(o.flags&131072)!==0}else dn=!1,ct&&(u.flags&1048576)!==0&&W1(u,Wl,u.index);switch(u.lanes=0,u.tag){case 2:var h=u.type;Fl(o,u),o=u.pendingProps;var g=Ho(u,Qt.current);zo(u,c),g=Mf(null,u,h,o,g,c);var B=_f();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(h)?(B=!0,Pl(u)):B=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Bf(u),g.updater=$l,u.stateNode=g,g._reactInternals=u,Nf(u,h,o,c),u=Df(null,u,h,!0,B,c)):(u.tag=0,ct&&B&&pf(u),tn(null,u,g,c),u=u.child),u;case 16:h=u.elementType;e:{switch(Fl(o,u),o=u.pendingProps,g=h._init,h=g(h._payload),u.type=h,g=u.tag=qC(h),o=Jn(h,o),g){case 0:u=Hf(null,u,h,o,c);break e;case 1:u=I6(null,u,h,o,c);break e;case 11:u=m6(null,u,h,o,c);break e;case 14:u=v6(null,u,h,Jn(h.type,o),c);break e}throw Error(n(306,h,""))}return u;case 0:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),Hf(o,u,h,g,c);case 1:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),I6(o,u,h,g,c);case 3:e:{if(B6(u),o===null)throw Error(n(387));h=u.pendingProps,B=u.memoizedState,g=B.element,R1(o,u),El(u,h,null,c);var k=u.memoizedState;if(h=k.element,B.isDehydrated)if(B={element:h,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=B,u.memoizedState=B,u.flags&256){g=Go(Error(n(423)),u),u=x6(o,u,h,c,g);break e}else if(h!==g){g=Go(Error(n(424)),u),u=x6(o,u,h,c,g);break e}else for(Bn=la(u.stateNode.containerInfo.firstChild),In=u,ct=!0,Zn=null,c=T1(u,null,h,c),u.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Lo(),h===g){u=Tr(o,u,c);break e}tn(o,u,h,c)}u=u.child}return u;case 5:return D1(u),o===null&&hf(u),h=u.type,g=u.pendingProps,B=o!==null?o.memoizedProps:null,k=g.children,af(h,g)?k=null:B!==null&&af(h,B)&&(u.flags|=32),b6(o,u),tn(o,u,k,c),u.child;case 6:return o===null&&hf(u),null;case 13:return w6(o,u,c);case 4:return xf(u,u.stateNode.containerInfo),h=u.pendingProps,o===null?u.child=Fo(u,null,h,c):tn(o,u,h,c),u.child;case 11:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),m6(o,u,h,g,c);case 7:return tn(o,u,u.pendingProps,c),u.child;case 8:return tn(o,u,u.pendingProps.children,c),u.child;case 12:return tn(o,u,u.pendingProps.children,c),u.child;case 10:e:{if(h=u.type._context,g=u.pendingProps,B=u.memoizedProps,k=g.value,nt(Ol,h._currentValue),h._currentValue=k,B!==null)if(Xn(B.value,k)){if(B.children===g.children&&!pn.current){u=Tr(o,u,c);break e}}else for(B=u.child,B!==null&&(B.return=u);B!==null;){var L=B.dependencies;if(L!==null){k=B.child;for(var z=L.firstContext;z!==null;){if(z.context===h){if(B.tag===1){z=Er(-1,c&-c),z.tag=2;var te=B.updateQueue;if(te!==null){te=te.shared;var ie=te.pending;ie===null?z.next=z:(z.next=ie.next,ie.next=z),te.pending=z}}B.lanes|=c,z=B.alternate,z!==null&&(z.lanes|=c),bf(B.return,c,u),L.lanes|=c;break}z=z.next}}else if(B.tag===10)k=B.type===u.type?null:B.child;else if(B.tag===18){if(k=B.return,k===null)throw Error(n(341));k.lanes|=c,L=k.alternate,L!==null&&(L.lanes|=c),bf(k,c,u),k=B.sibling}else k=B.child;if(k!==null)k.return=B;else for(k=B;k!==null;){if(k===u){k=null;break}if(B=k.sibling,B!==null){B.return=k.return,k=B;break}k=k.return}B=k}tn(o,u,g.children,c),u=u.child}return u;case 9:return g=u.type,h=u.pendingProps.children,zo(u,c),g=Tn(g),h=h(g),u.flags|=1,tn(o,u,h,c),u.child;case 14:return h=u.type,g=Jn(h,u.pendingProps),g=Jn(h.type,g),v6(o,u,h,g,c);case 15:return g6(o,u,u.type,u.pendingProps,c);case 17:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),Fl(o,u),u.tag=1,fn(h)?(o=!0,Pl(u)):o=!1,zo(u,c),s6(u,h,g),Nf(u,h,g,c),Df(null,u,h,!0,o,c);case 19:return S6(o,u,c);case 22:return y6(o,u,c)}throw Error(n(156,u.tag))};function Q6(o,u){return Mb(o,u)}function FC(o,u,c,h){this.tag=o,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(o,u,c,h){return new FC(o,u,c,h)}function o2(o){return o=o.prototype,!(!o||!o.isReactComponent)}function qC(o){if(typeof o=="function")return o2(o)?1:0;if(o!=null){if(o=o.$$typeof,o===T)return 11;if(o===G)return 14}return 2}function Ia(o,u){var c=o.alternate;return c===null?(c=jn(o.tag,u,o.key,o.mode),c.elementType=o.elementType,c.type=o.type,c.stateNode=o.stateNode,c.alternate=o,o.alternate=c):(c.pendingProps=u,c.type=o.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=o.flags&14680064,c.childLanes=o.childLanes,c.lanes=o.lanes,c.child=o.child,c.memoizedProps=o.memoizedProps,c.memoizedState=o.memoizedState,c.updateQueue=o.updateQueue,u=o.dependencies,c.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},c.sibling=o.sibling,c.index=o.index,c.ref=o.ref,c}function Jl(o,u,c,h,g,B){var k=2;if(h=o,typeof o=="function")o2(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case E:return eo(c.children,g,B,u);case P:k=8,g|=8;break;case O:return o=jn(12,c,u,g|2),o.elementType=O,o.lanes=B,o;case q:return o=jn(13,c,u,g),o.elementType=q,o.lanes=B,o;case F:return o=jn(19,c,u,g),o.elementType=F,o.lanes=B,o;case V:return ec(c,g,B,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case N:k=10;break e;case D:k=9;break e;case T:k=11;break e;case G:k=14;break e;case Q:k=16,h=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return u=jn(k,c,u,g),u.elementType=o,u.type=h,u.lanes=B,u}function eo(o,u,c,h){return o=jn(7,o,h,u),o.lanes=c,o}function ec(o,u,c,h){return o=jn(22,o,h,u),o.elementType=V,o.lanes=c,o.stateNode={isHidden:!1},o}function i2(o,u,c){return o=jn(6,o,null,u),o.lanes=c,o}function u2(o,u,c){return u=jn(4,o.children!==null?o.children:[],o.key,u),u.lanes=c,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function zC(o,u,c,h,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=E0(0),this.expirationTimes=E0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E0(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function s2(o,u,c,h,g,B,k,L,z){return o=new zC(o,u,c,L,z),u===1?(u=1,B===!0&&(u|=8)):u=0,B=jn(3,null,null,u),o.current=B,B.stateNode=o,B.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(B),o}function UC(o,u,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:h==null?null:""+h,children:o,containerInfo:u,implementation:c}}function Y6(o){if(!o)return pa;o=o._reactInternals;e:{if(Fa(o)!==o||o.tag!==1)throw Error(n(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(o.tag===1){var c=o.type;if(fn(c))return P1(o,c,u)}return u}function X6(o,u,c,h,g,B,k,L,z){return o=s2(c,h,!0,o,g,B,k,L,z),o.context=Y6(null),c=o.current,h=nn(),g=ya(c),B=Er(h,g),B.callback=u??null,ha(c,B,g),o.current.lanes=g,ou(o,g,h),mn(o,h),o}function tc(o,u,c,h){var g=u.current,B=nn(),k=ya(g);return c=Y6(c),u.context===null?u.context=c:u.pendingContext=c,u=Er(B,k),u.payload={element:o},h=h===void 0?null:h,h!==null&&(u.callback=h),o=ha(g,u,k),o!==null&&(nr(o,g,k,B),kl(o,g,k)),k}function nc(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function Z6(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var c=o.retryLane;o.retryLane=c!==0&&c<u?c:u}}function l2(o,u){Z6(o,u),(o=o.alternate)&&Z6(o,u)}function GC(){return null}var J6=typeof reportError=="function"?reportError:function(o){console.error(o)};function c2(o){this._internalRoot=o}rc.prototype.render=c2.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(n(409));tc(o,u,null,null)},rc.prototype.unmount=c2.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Xa(function(){tc(null,o,null,null)}),u[Mr]=null}};function rc(o){this._internalRoot=o}rc.prototype.unstable_scheduleHydration=function(o){if(o){var u=Rb();o={blockedOn:null,target:o,priority:u};for(var c=0;c<ia.length&&u!==0&&u<ia[c].priority;c++);ia.splice(c,0,o),c===0&&Db(o)}};function p2(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ac(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function eI(){}function VC(o,u,c,h,g){if(g){if(typeof h=="function"){var B=h;h=function(){var te=nc(k);B.call(te)}}var k=X6(u,h,o,0,null,!1,!1,"",eI);return o._reactRootContainer=k,o[Mr]=k.current,bu(o.nodeType===8?o.parentNode:o),Xa(),k}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var L=h;h=function(){var te=nc(z);L.call(te)}}var z=s2(o,0,!1,null,null,!1,!1,"",eI);return o._reactRootContainer=z,o[Mr]=z.current,bu(o.nodeType===8?o.parentNode:o),Xa(function(){tc(u,z,c,h)}),z}function oc(o,u,c,h,g){var B=c._reactRootContainer;if(B){var k=B;if(typeof g=="function"){var L=g;g=function(){var z=nc(k);L.call(z)}}tc(u,k,o,g)}else k=VC(c,u,o,g,h);return nc(k)}Tb=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var c=au(u.pendingLanes);c!==0&&(T0(u,c|1),mn(u,wt()),(ze&6)===0&&(Qo=wt()+500,fa()))}break;case 13:Xa(function(){var h=kr(o,1);if(h!==null){var g=nn();nr(h,o,1,g)}}),l2(o,1)}},N0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var c=nn();nr(u,o,134217728,c)}l2(o,134217728)}},Nb=function(o){if(o.tag===13){var u=ya(o),c=kr(o,u);if(c!==null){var h=nn();nr(c,o,u,h)}l2(o,u)}},Rb=function(){return Ze},jb=function(o,u){var c=Ze;try{return Ze=o,u()}finally{Ze=c}},W0=function(o,u,c){switch(u){case"input":if(Fe(o,c),u=c.name,c.type==="radio"&&u!=null){for(c=o;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<c.length;u++){var h=c[u];if(h!==o&&h.form===o.form){var g=xl(h);if(!g)throw Error(n(90));re(h),Fe(h,g)}}}break;case"textarea":gt(o,c);break;case"select":u=c.value,u!=null&&Bt(o,!!c.multiple,u,!1)}},Bb=n2,xb=Xa;var KC={usingClientEntryPoint:!1,Events:[xu,Ro,xl,bb,Ib,n2]},Ru={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QC={bundleType:Ru.bundleType,version:Ru.version,rendererPackageName:Ru.rendererPackageName,rendererConfig:Ru.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Ab(o),o===null?null:o.stateNode},findFiberByHostInstance:Ru.findFiberByHostInstance||GC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{rl=ic.inject(QC),pr=ic}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC,vn.createPortal=function(o,u){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p2(u))throw Error(n(200));return UC(o,u,null,c)},vn.createRoot=function(o,u){if(!p2(o))throw Error(n(299));var c=!1,h="",g=J6;return u!=null&&(u.unstable_strictMode===!0&&(c=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=s2(o,1,!1,null,null,c,!1,h,g),o[Mr]=u.current,bu(o.nodeType===8?o.parentNode:o),new c2(u)},vn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=Ab(u),o=o===null?null:o.stateNode,o},vn.flushSync=function(o){return Xa(o)},vn.hydrate=function(o,u,c){if(!ac(u))throw Error(n(200));return oc(null,o,u,!0,c)},vn.hydrateRoot=function(o,u,c){if(!p2(o))throw Error(n(405));var h=c!=null&&c.hydratedSources||null,g=!1,B="",k=J6;if(c!=null&&(c.unstable_strictMode===!0&&(g=!0),c.identifierPrefix!==void 0&&(B=c.identifierPrefix),c.onRecoverableError!==void 0&&(k=c.onRecoverableError)),u=X6(u,null,o,1,c??null,g,!1,B,k),o[Mr]=u.current,bu(o),h)for(o=0;o<h.length;o++)c=h[o],g=c._getVersion,g=g(c._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[c,g]:u.mutableSourceEagerHydrationData.push(c,g);return new rc(u)},vn.render=function(o,u,c){if(!ac(u))throw Error(n(200));return oc(null,o,u,!1,c)},vn.unmountComponentAtNode=function(o){if(!ac(o))throw Error(n(40));return o._reactRootContainer?(Xa(function(){oc(null,null,o,!1,function(){o._reactRootContainer=null,o[Mr]=null})}),!0):!1},vn.unstable_batchedUpdates=n2,vn.unstable_renderSubtreeIntoContainer=function(o,u,c,h){if(!ac(c))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return oc(o,u,c,!1,h)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var sI;function M3(){if(sI)return h2.exports;sI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),h2.exports=ok(),h2.exports}var lI;function ik(){if(lI)return sc;lI=1;var e=M3();return sc.createRoot=e.createRoot,sc.hydrateRoot=e.hydrateRoot,sc}var uk=ik(),Y=oy();const j=Xe(Y),sk=JC({__proto__:null,default:j},[Y]);var Sc={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var lk=Sc.exports,cI;function ck(){return cI||(cI=1,(function(e,t){((n,r)=>{e.exports=r()})(lk,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},p=0,f={};function m(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(O){var N=w(O);N.chunkSize=parseInt(N.chunkSize),O.step||O.chunk||(N.chunkSize=null),this._handle=new I(N),(this._handle.streamer=this)._config=N}).call(this,P),this.parseChunk=function(O,N){var D=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<D){let q=this._config.newline;q||(T=this._config.quoteChar||'"',q=this._handle.guessLineEndings(O,T)),O=[...O.split(q).slice(D)].join(q)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(T=this._config.beforeFirstChunk(O))!==void 0&&(O=T),this.isFirstChunk=!1,this._halted=!1;var D=this._partialLine+O,T=(this._partialLine="",this._handle.parse(D,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(O=T.meta.cursor,D=(this._finished||(this._partialLine=D.substring(O-this._baseIndex),this._baseIndex=O),T&&T.data&&(this._rowCount+=T.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:T,workerId:f.WORKER_ID,finished:D});else if(E(this._config.chunk)&&!N){if(this._config.chunk(T,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=T=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(T.data),this._completeResults.errors=this._completeResults.errors.concat(T.errors),this._completeResults.meta=T.meta),this._completed||!D||!E(this._config.complete)||T&&T.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||T&&T.meta.paused||this._nextChunk(),T}this._halted=!0},this._sendError=function(O){E(this._config.error)?this._config.error(O):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:O,finished:!1})}}function d(P){var O;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),m.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(N){this._input=N,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(O=new XMLHttpRequest,this._config.withCredentials&&(O.withCredentials=this._config.withCredentials),i||(O.onload=M(this._chunkLoaded,this),O.onerror=M(this._chunkError,this)),O.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var N,D=this._config.downloadRequestHeaders;for(N in D)O.setRequestHeader(N,D[N])}var T;this._config.chunkSize&&(T=this._start+this._config.chunkSize-1,O.setRequestHeader("Range","bytes="+this._start+"-"+T));try{O.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}i&&O.status===0&&this._chunkError()}},this._chunkLoaded=function(){O.readyState===4&&(O.status<200||400<=O.status?this._chunkError():(this._start+=this._config.chunkSize||O.responseText.length,this._finished=!this._config.chunkSize||this._start>=(N=>(N=N.getResponseHeader("Content-Range"))!==null?parseInt(N.substring(N.lastIndexOf("/")+1)):-1)(O),this.parseChunk(O.responseText)))},this._chunkError=function(N){N=O.statusText||N,this._sendError(new Error(N))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),m.call(this,P);var O,N,D=typeof FileReader<"u";this.stream=function(T){this._input=T,N=T.slice||T.webkitSlice||T.mozSlice,D?((O=new FileReader).onload=M(this._chunkLoaded,this),O.onerror=M(this._chunkError,this)):O=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var T=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),T=N.call(T,this._start,q)),O.readAsText(T,this._config.encoding));D||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(T){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(T.target.result)},this._chunkError=function(){this._sendError(O.error)}}function b(P){var O;m.call(this,P=P||{}),this.stream=function(N){return O=N,this._nextChunk()},this._nextChunk=function(){var N,D;if(!this._finished)return N=this._config.chunkSize,O=N?(D=O.substring(0,N),O.substring(N)):(D=O,""),this._finished=!O,this.parseChunk(D)}}function x(P){m.call(this,P=P||{});var O=[],N=!0,D=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(T){this._input=T,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){D&&O.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),O.length?this.parseChunk(O.shift()):N=!0},this._streamData=M(function(T){try{O.push(typeof T=="string"?T:T.toString(this._config.encoding)),N&&(N=!1,this._checkIsFinished(),this.parseChunk(O.shift()))}catch(q){this._streamError(q)}},this),this._streamError=M(function(T){this._streamCleanUp(),this._sendError(T)},this),this._streamEnd=M(function(){this._streamCleanUp(),D=!0,this._streamData("")},this),this._streamCleanUp=M(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var O,N,D,T,q=Math.pow(2,53),F=-q,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,V=this,H=0,U=0,X=!1,R=!1,$=[],Z={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(Z&&D&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),D=!1),P.skipEmptyLines&&(Z.data=Z.data.filter(function(re){return!ue(re)})),ge()){let re=function(Re,Pe){E(P.transformHeader)&&(Re=P.transformHeader(Re,Pe)),$.push(Re)};var pe=re;if(Z)if(Array.isArray(Z.data[0])){for(var fe=0;ge()&&fe<Z.data.length;fe++)Z.data[fe].forEach(re);Z.data.splice(0,1)}else Z.data.forEach(re)}function ne(re,Re){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var We=Ce,Fe=re[Ce],Fe=((He,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(He)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(G.test(Ke)&&(Ke=parseFloat(Ke),F<Ke&&Ke<q))return 1})(qe)?parseFloat(qe):Q.test(qe)?new Date(qe):qe===""?null:qe):qe)(We=P.header?Ce>=$.length?"__parsed_extra":$[Ce]:We,Fe=P.transform?P.transform(Fe,We):Fe);We==="__parsed_extra"?(Pe[We]=Pe[We]||[],Pe[We].push(Fe)):Pe[We]=Fe}return P.header&&(Ce>$.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+$.length+" fields but parsed "+Ce,U+Re):Ce<$.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+$.length+" fields but parsed "+Ce,U+Re)),Pe}var de;Z&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!Z.data.length||Array.isArray(Z.data[0])?(Z.data=Z.data.map(ne),de=Z.data.length):Z.data=ne(Z.data,0),P.header&&Z.meta&&(Z.meta.fields=$),U+=de)}function ge(){return P.header&&$.length===0}function ye(fe,ne,de,pe){fe={type:fe,code:ne,message:de},pe!==void 0&&(fe.row=pe),Z.errors.push(fe)}E(P.step)&&(T=P.step,P.step=function(fe){Z=fe,ge()?he():(he(),Z.data.length!==0&&(H+=fe.data.length,P.preview&&H>P.preview?N.abort():(Z.data=Z.data[0],T(Z,V))))}),this.parse=function(fe,ne,de){var pe=P.quoteChar||'"',pe=(P.newline||(P.newline=this.guessLineEndings(fe,pe)),D=!1,P.delimiter?E(P.delimiter)&&(P.delimiter=P.delimiter(fe),Z.meta.delimiter=P.delimiter):((pe=((re,Re,Pe,Ce,We)=>{var Fe,He,qe,Ke;We=We||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Bt=0;Bt<We.length;Bt++){for(var vt,_n=We[Bt],gt=0,Kt=0,xt=0,Ht=(qe=void 0,new S({comments:Ce,delimiter:_n,newline:Re,preview:10}).parse(re)),cn=0;cn<Ht.data.length;cn++)Pe&&ue(Ht.data[cn])?xt++:(vt=Ht.data[cn].length,Kt+=vt,qe===void 0?qe=vt:0<vt&&(gt+=Math.abs(vt-qe),qe=vt));0<Ht.data.length&&(Kt/=Ht.data.length-xt),(He===void 0||gt<=He)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(He=gt,Fe=_n,Ke=Kt)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=pe.bestDelimiter:(D=!0,P.delimiter=f.DefaultDelimiter),Z.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&pe.preview++,O=fe,N=new S(pe),Z=N.parse(O,ne,de),he(),X?{meta:{paused:!0}}:Z||{meta:{paused:!1}}},this.paused=function(){return X},this.pause=function(){X=!0,N.abort(),O=E(P.chunk)?"":O.substring(N.getCharIndex())},this.resume=function(){V.streamer._halted?(X=!1,V.streamer.parseChunk(O,!0)):setTimeout(V.resume,3)},this.aborted=function(){return R},this.abort=function(){R=!0,N.abort(),Z.meta.aborted=!0,E(P.complete)&&P.complete(Z),O=""},this.guessLineEndings=function(re,pe){re=re.substring(0,1048576);var pe=new RegExp(y(pe)+"([^]*?)"+y(pe),"gm"),de=(re=re.replace(pe,"")).split("\r"),pe=re.split(`
`),re=1<pe.length&&pe[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Re=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Re++;return Re>=de.length/2?`\r
`:"\r"}}function y(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var O=(P=P||{}).delimiter,N=P.newline,D=P.comments,T=P.step,q=P.preview,F=P.fastMode,G=null,Q=!1,V=P.quoteChar==null?'"':P.quoteChar,H=V;if(P.escapeChar!==void 0&&(H=P.escapeChar),(typeof O!="string"||-1<f.BAD_DELIMITERS.indexOf(O))&&(O=","),D===O)throw new Error("Comment character same as delimiter");D===!0?D="#":(typeof D!="string"||-1<f.BAD_DELIMITERS.indexOf(D))&&(D=!1),N!==`
`&&N!=="\r"&&N!==`\r
`&&(N=`
`);var U=0,X=!1;this.parse=function(R,$,Z){if(typeof R!="string")throw new Error("Input must be a string");var ue=R.length,he=O.length,ge=N.length,ye=D.length,fe=E(T),ne=[],de=[],pe=[],re=U=0;if(!R)return gt();if(F||F!==!1&&R.indexOf(V)===-1){for(var Re=R.split(N),Pe=0;Pe<Re.length;Pe++){if(pe=Re[Pe],U+=pe.length,Pe!==Re.length-1)U+=N.length;else if(Z)return gt();if(!D||pe.substring(0,ye)!==D){if(fe){if(ne=[],Ke(pe.split(O)),Kt(),X)return gt()}else Ke(pe.split(O));if(q&&q<=Pe)return ne=ne.slice(0,q),gt(!0)}}return gt()}for(var Ce=R.indexOf(O,U),We=R.indexOf(N,U),Fe=new RegExp(y(H)+y(V),"g"),He=R.indexOf(V,U);;)if(R[U]===V)for(He=U,U++;;){if((He=R.indexOf(V,He+1))===-1)return Z||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:U}),vt();if(He===ue-1)return vt(R.substring(U,He).replace(Fe,V));if(V===H&&R[He+1]===H)He++;else if(V===H||He===0||R[He-1]!==H){Ce!==-1&&Ce<He+1&&(Ce=R.indexOf(O,He+1));var qe=Bt((We=We!==-1&&We<He+1?R.indexOf(N,He+1):We)===-1?Ce:Math.min(Ce,We));if(R.substr(He+1+qe,he)===O){pe.push(R.substring(U,He).replace(Fe,V)),R[U=He+1+qe+he]!==V&&(He=R.indexOf(V,U)),Ce=R.indexOf(O,U),We=R.indexOf(N,U);break}if(qe=Bt(We),R.substring(He+1+qe,He+1+qe+ge)===N){if(pe.push(R.substring(U,He).replace(Fe,V)),_n(He+1+qe+ge),Ce=R.indexOf(O,U),He=R.indexOf(V,U),fe&&(Kt(),X))return gt();if(q&&ne.length>=q)return gt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:U}),He++}}else if(D&&pe.length===0&&R.substring(U,U+ye)===D){if(We===-1)return gt();U=We+ge,We=R.indexOf(N,U),Ce=R.indexOf(O,U)}else if(Ce!==-1&&(Ce<We||We===-1))pe.push(R.substring(U,Ce)),U=Ce+he,Ce=R.indexOf(O,U);else{if(We===-1)break;if(pe.push(R.substring(U,We)),_n(We+ge),fe&&(Kt(),X))return gt();if(q&&ne.length>=q)return gt(!0)}return vt();function Ke(xt){ne.push(xt),re=U}function Bt(xt){var Ht=0;return Ht=xt!==-1&&(xt=R.substring(He+1,xt))&&xt.trim()===""?xt.length:Ht}function vt(xt){return Z||(xt===void 0&&(xt=R.substring(U)),pe.push(xt),U=ue,Ke(pe),fe&&Kt()),gt()}function _n(xt){U=xt,Ke(pe),pe=[],We=R.indexOf(N,U)}function gt(xt){if(P.header&&!$&&ne.length&&!Q){var Ht=ne[0],cn=Object.create(null),Ao=new Set(Ht);let ta=!1;for(let On=0;On<Ht.length;On++){let Cn=Ht[On];if(cn[Cn=E(P.transformHeader)?P.transformHeader(Cn,On):Cn]){let na,eu=cn[Cn];for(;na=Cn+"_"+eu,eu++,Ao.has(na););Ao.add(na),Ht[On]=na,cn[Cn]++,ta=!0,(G=G===null?{}:G)[na]=Cn}else cn[Cn]=1,Ht[On]=Cn;Ao.add(Cn)}ta&&console.warn("Duplicate headers found and renamed."),Q=!0}return{data:ne,errors:de,meta:{delimiter:O,linebreak:N,aborted:X,truncated:!!xt,cursor:re+($||0),renamedHeaders:G}}}function Kt(){T(gt()),ne=[],de=[]}},this.abort=function(){X=!0},this.getCharIndex=function(){return U}}function A(P){var O=P.data,N=l[O.workerId],D=!1;if(O.error)N.userError(O.error,O.file);else if(O.results&&O.results.data){var T={abort:function(){D=!0,W(O.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(E(N.userStep)){for(var q=0;q<O.results.data.length&&(N.userStep({data:O.results.data[q],errors:O.results.errors,meta:O.results.meta},T),!D);q++);delete O.results}else E(N.userChunk)&&(N.userChunk(O.results,T,O.file),delete O.results)}O.finished&&!D&&W(O.workerId,O.results)}function W(P,O){var N=l[P];E(N.userComplete)&&N.userComplete(O),N.terminate(),delete l[P]}function _(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var O,N=Array.isArray(P)?[]:{};for(O in P)N[O]=w(P[O]);return N}function M(P,O){return function(){P.apply(O,arguments)}}function E(P){return typeof P=="function"}return f.parse=function(P,O){var N=(O=O||{}).dynamicTyping||!1;if(E(N)&&(O.dynamicTypingFunction=N,N={}),O.dynamicTyping=N,O.transform=!!E(O.transform)&&O.transform,!O.worker||!f.WORKERS_SUPPORTED)return N=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(D=>D.charCodeAt(0)!==65279?D:D.slice(1))(P),N=new(O.download?d:b)(O)):P.readable===!0&&E(P.read)&&E(P.on)?N=new x(O):(r.File&&P instanceof File||P instanceof Object)&&(N=new v(O)),N.stream(P);(N=(()=>{var D;return!!f.WORKERS_SUPPORTED&&(D=(()=>{var T=r.URL||r.webkitURL||null,q=n.toString();return f.BLOB_URL||(f.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(D=new r.Worker(D)).onmessage=A,D.id=p++,l[D.id]=D)})()).userStep=O.step,N.userChunk=O.chunk,N.userComplete=O.complete,N.userError=O.error,O.step=E(O.step),O.chunk=E(O.chunk),O.complete=E(O.complete),O.error=E(O.error),delete O.worker,N.postMessage({input:P,config:O,workerId:N.id})},f.unparse=function(P,O){var N=!1,D=!0,T=",",q=`\r
`,F='"',G=F+F,Q=!1,V=null,H=!1,U=((()=>{if(typeof O=="object"){if(typeof O.delimiter!="string"||f.BAD_DELIMITERS.filter(function($){return O.delimiter.indexOf($)!==-1}).length||(T=O.delimiter),typeof O.quotes!="boolean"&&typeof O.quotes!="function"&&!Array.isArray(O.quotes)||(N=O.quotes),typeof O.skipEmptyLines!="boolean"&&typeof O.skipEmptyLines!="string"||(Q=O.skipEmptyLines),typeof O.newline=="string"&&(q=O.newline),typeof O.quoteChar=="string"&&(F=O.quoteChar),typeof O.header=="boolean"&&(D=O.header),Array.isArray(O.columns)){if(O.columns.length===0)throw new Error("Option columns is empty");V=O.columns}O.escapeChar!==void 0&&(G=O.escapeChar+F),O.escapeFormulae instanceof RegExp?H=O.escapeFormulae:typeof O.escapeFormulae=="boolean"&&O.escapeFormulae&&(H=/^[=+\-@\t\r].*$/)}})(),new RegExp(y(F),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return X(null,P,Q);if(typeof P[0]=="object")return X(V||Object.keys(P[0]),P,Q)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||V),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),X(P.fields||[],P.data||[],Q);throw new Error("Unable to serialize unrecognized input");function X($,Z,ue){var he="",ge=(typeof $=="string"&&($=JSON.parse($)),typeof Z=="string"&&(Z=JSON.parse(Z)),Array.isArray($)&&0<$.length),ye=!Array.isArray(Z[0]);if(ge&&D){for(var fe=0;fe<$.length;fe++)0<fe&&(he+=T),he+=R($[fe],fe);0<Z.length&&(he+=q)}for(var ne=0;ne<Z.length;ne++){var de=(ge?$:Z[ne]).length,pe=!1,re=ge?Object.keys(Z[ne]).length===0:Z[ne].length===0;if(ue&&!ge&&(pe=ue==="greedy"?Z[ne].join("").trim()==="":Z[ne].length===1&&Z[ne][0].length===0),ue==="greedy"&&ge){for(var Re=[],Pe=0;Pe<de;Pe++){var Ce=ye?$[Pe]:Pe;Re.push(Z[ne][Ce])}pe=Re.join("").trim()===""}if(!pe){for(var We=0;We<de;We++){0<We&&!re&&(he+=T);var Fe=ge&&ye?$[We]:We;he+=R(Z[ne][Fe],We)}ne<Z.length-1&&(!ue||0<de&&!re)&&(he+=q)}}return he}function R($,Z){var ue,he;return $==null?"":$.constructor===Date?JSON.stringify($).slice(1,25):(he=!1,H&&typeof $=="string"&&H.test($)&&($="'"+$,he=!0),ue=$.toString().replace(U,G),(he=he||N===!0||typeof N=="function"&&N($,Z)||Array.isArray(N)&&N[Z]||((ge,ye)=>{for(var fe=0;fe<ye.length;fe++)if(-1<ge.indexOf(ye[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(T)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?F+ue+F:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=b,f.ReadableStreamStreamer=x,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var O=P.config||{},N=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var F=0;F<this.files.length;F++)N.push({file:this.files[F],inputElem:this,instanceConfig:a.extend({},O)})}),D(),this;function D(){if(N.length===0)E(P.complete)&&P.complete();else{var q,F,G,Q,V=N[0];if(E(P.before)){var H=P.before(V.file,V.inputElem);if(typeof H=="object"){if(H.action==="abort")return q="AbortError",F=V.file,G=V.inputElem,Q=H.reason,void(E(P.error)&&P.error({name:q},F,G,Q));if(H.action==="skip")return void T();typeof H.config=="object"&&(V.instanceConfig=a.extend(V.instanceConfig,H.config))}else if(H==="skip")return void T()}var U=V.instanceConfig.complete;V.instanceConfig.complete=function(X){E(U)&&U(X,V.file,V.inputElem),T()},f.parse(V.file,V.instanceConfig)}}function T(){N.splice(0,1),D()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(b.prototype=Object.create(b.prototype)).constructor=b,(x.prototype=Object.create(m.prototype)).constructor=x,f})})(Sc)),Sc.exports}var pk=ck();const g2=Xe(pk);function pI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function _3(...e){return t=>{let n=!1;const r=e.map(a=>{const i=pI(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():pI(e[a],null)}}}}function Wc(...e){return Y.useCallback(_3(...e),e)}var ls=Y.forwardRef((e,t)=>{const{children:n,...r}=e,a=Y.Children.toArray(n),i=a.find(dk);if(i){const s=i.props.children,l=a.map(p=>p===i?Y.Children.count(s)>1?Y.Children.only(null):Y.isValidElement(s)?s.props.children:null:p);return C.jsx(Pv,{...r,ref:t,children:Y.isValidElement(s)?Y.cloneElement(s,void 0,l):null})}return C.jsx(Pv,{...r,ref:t,children:n})});ls.displayName="Slot";var Pv=Y.forwardRef((e,t)=>{const{children:n,...r}=e;if(Y.isValidElement(n)){const a=mk(n),i=hk(r,n.props);return n.type!==Y.Fragment&&(i.ref=t?_3(t,a):a),Y.cloneElement(n,i)}return Y.Children.count(n)>1?Y.Children.only(null):null});Pv.displayName="SlotClone";var fk=({children:e})=>C.jsx(C.Fragment,{children:e});function dk(e){return Y.isValidElement(e)&&e.type===fk}function hk(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...l)=>{i(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function mk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function O3(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=O3(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function je(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=O3(e))&&(r&&(r+=" "),r+=t);return r}const fI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,dI=je,vk=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return dI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(f=>{const m=n==null?void 0:n[f],d=i==null?void 0:i[f];if(m===null)return null;const v=fI(m)||fI(d);return a[f][v]}),l=n&&Object.entries(n).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),p=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...b}=m;return Object.entries(b).every(x=>{let[I,y]=x;return Array.isArray(y)?y.includes({...i,...l}[I]):{...i,...l}[I]===y})?[...f,d,v]:f},[]);return dI(e,s,p,n==null?void 0:n.class,n==null?void 0:n.className)},iy="-",gk=e=>{const t=bk(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(iy);return l[0]===""&&l.length!==1&&l.shift(),C3(l,t)||yk(s)},getConflictingClassGroupIds:(s,l)=>{const p=n[s]||[];return l&&r[s]?[...p,...r[s]]:p}}},C3=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?C3(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(iy);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},hI=/^\[(.+)\]$/,yk=e=>{if(hI.test(e)){const t=hI.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},bk=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Sv(n[a],r,a,t);return r},Sv=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:mI(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(Ik(a)){Sv(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,s])=>{Sv(s,mI(t,i),n,r)})})},mI=(e,t)=>{let n=e;return t.split(iy).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Ik=e=>e.isThemeGetter,Bk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){n.has(i)?n.set(i,s):a(i,s)}}},Av="!",Wv=":",xk=Wv.length,wk=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,p=0,f;for(let x=0;x<a.length;x++){let I=a[x];if(s===0&&l===0){if(I===Wv){i.push(a.slice(p,x)),p=x+xk;continue}if(I==="/"){f=x;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const m=i.length===0?a:a.substring(p),d=Pk(m),v=d!==m,b=f&&f>p?f-p:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:b}};if(t){const a=t+Wv,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},Pk=e=>e.endsWith(Av)?e.substring(0,e.length-1):e.startsWith(Av)?e.substring(1):e,Sk=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},Ak=e=>({cache:Bk(e.cacheSize),parseClassName:wk(e),sortModifiers:Sk(e),...gk(e)}),Wk=/\s+/,Mk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(Wk);let p="";for(let f=l.length-1;f>=0;f-=1){const m=l[f],{isExternal:d,modifiers:v,hasImportantModifier:b,baseClassName:x,maybePostfixModifierPosition:I}=n(m);if(d){p=m+(p.length>0?" "+p:p);continue}let y=!!I,S=r(y?x.substring(0,I):x);if(!S){if(!y){p=m+(p.length>0?" "+p:p);continue}if(S=r(x),!S){p=m+(p.length>0?" "+p:p);continue}y=!1}const A=i(v).join(":"),W=b?A+Av:A,_=W+S;if(s.includes(_))continue;s.push(_);const w=a(S,y);for(let M=0;M<w.length;++M){const E=w[M];s.push(W+E)}p=m+(p.length>0?" "+p:p)}return p};function _k(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=k3(t))&&(r&&(r+=" "),r+=n);return r}const k3=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=k3(e[r]))&&(n&&(n+=" "),n+=t);return n};function Ok(e,...t){let n,r,a,i=s;function s(p){const f=t.reduce((m,d)=>d(m),e());return n=Ak(f),r=n.cache.get,a=n.cache.set,i=l,l(p)}function l(p){const f=r(p);if(f)return f;const m=Mk(p,n);return a(p,m),m}return function(){return i(_k.apply(null,arguments))}}const Tt=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},E3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,T3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ck=/^\d+\/\d+$/,kk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ek=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Nk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Rk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=e=>Ck.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),y2=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Rr=e=>kk.test(e),jk=()=>!0,Hk=e=>Ek.test(e)&&!Tk.test(e),N3=()=>!1,Dk=e=>Nk.test(e),$k=e=>Rk.test(e),Lk=e=>!xe(e)&&!we(e),Fk=e=>Li(e,H3,N3),xe=e=>E3.test(e),to=e=>Li(e,D3,Hk),b2=e=>Li(e,Vk,$e),vI=e=>Li(e,R3,N3),qk=e=>Li(e,j3,$k),lc=e=>Li(e,$3,Dk),we=e=>T3.test(e),Hu=e=>Fi(e,D3),zk=e=>Fi(e,Kk),gI=e=>Fi(e,R3),Uk=e=>Fi(e,H3),Gk=e=>Fi(e,j3),cc=e=>Fi(e,$3,!0),Li=(e,t,n)=>{const r=E3.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Fi=(e,t,n=!1)=>{const r=T3.exec(e);return r?r[1]?t(r[1]):n:!1},R3=e=>e==="position"||e==="percentage",j3=e=>e==="image"||e==="url",H3=e=>e==="length"||e==="size"||e==="bg-size",D3=e=>e==="length",Vk=e=>e==="number",Kk=e=>e==="family-name",$3=e=>e==="shadow",Qk=()=>{const e=Tt("color"),t=Tt("font"),n=Tt("text"),r=Tt("font-weight"),a=Tt("tracking"),i=Tt("leading"),s=Tt("breakpoint"),l=Tt("container"),p=Tt("spacing"),f=Tt("radius"),m=Tt("shadow"),d=Tt("inset-shadow"),v=Tt("text-shadow"),b=Tt("drop-shadow"),x=Tt("blur"),I=Tt("perspective"),y=Tt("aspect"),S=Tt("ease"),A=Tt("animate"),W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[..._(),we,xe],M=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],P=()=>[we,xe,p],O=()=>[Xo,"full","auto",...P()],N=()=>[xa,"none","subgrid",we,xe],D=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],T=()=>[xa,"auto",we,xe],q=()=>["auto","min","max","fr",we,xe],F=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],Q=()=>["auto",...P()],V=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],H=()=>[e,we,xe],U=()=>[..._(),gI,vI,{position:[we,xe]}],X=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",Uk,Fk,{size:[we,xe]}],$=()=>[y2,Hu,to],Z=()=>["","none","full",f,we,xe],ue=()=>["",$e,Hu,to],he=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[$e,y2,gI,vI],fe=()=>["","none",x,we,xe],ne=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],pe=()=>[$e,we,xe],re=()=>[Xo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rr],breakpoint:[Rr],color:[jk],container:[Rr],"drop-shadow":[Rr],ease:["in","out","in-out"],font:[Lk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rr],shadow:[Rr],spacing:["px",$e],text:[Rr],"text-shadow":[Rr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,xe,we,y]}],container:["container"],columns:[{columns:[$e,xe,we,l]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:O()}],"inset-x":[{"inset-x":O()}],"inset-y":[{"inset-y":O()}],start:[{start:O()}],end:[{end:O()}],top:[{top:O()}],right:[{right:O()}],bottom:[{bottom:O()}],left:[{left:O()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Xo,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Xo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":q()}],"auto-rows":[{"auto-rows":q()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...F(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...F()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":F()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:Q()}],mx:[{mx:Q()}],my:[{my:Q()}],ms:[{ms:Q()}],me:[{me:Q()}],mt:[{mt:Q()}],mr:[{mr:Q()}],mb:[{mb:Q()}],ml:[{ml:Q()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:V()}],w:[{w:[l,"screen",...V()]}],"min-w":[{"min-w":[l,"screen","none",...V()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...V()]}],h:[{h:["screen",...V()]}],"min-h":[{"min-h":["screen","none",...V()]}],"max-h":[{"max-h":["screen",...V()]}],"font-size":[{text:["base",n,Hu,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,b2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",y2,xe]}],"font-family":[{font:[zk,xe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,b2]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:U()}],"bg-repeat":[{bg:X()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},Gk,qk]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:$()}],"gradient-via-pos":[{via:$()}],"gradient-to-pos":[{to:$()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Hu,to]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",m,cc,lc]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",d,cc,lc]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",v,cc,lc]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:U()}],"mask-repeat":[{mask:X()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",b,cc,lc]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",A,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:pe()}],"skew-x":[{"skew-x":pe()}],"skew-y":[{"skew-y":pe()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[$e,Hu,to,b2]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Yk=Ok(Qk);function ln(...e){return Yk(je(e))}const Xk=vk("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function yI({className:e,variant:t,size:n,asChild:r=!1,...a}){const i=r?ls:"button";return C.jsx(i,{"data-slot":"button",className:ln(Xk({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return C.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function Rp({className:e,...t}){return C.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function jp({className:e,...t}){return C.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return C.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function uy(e,t=[]){let n=[];function r(i,s){const l=Y.createContext(s),p=n.length;n=[...n,s];const f=d=>{var S;const{scope:v,children:b,...x}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[p])||l,y=Y.useMemo(()=>x,Object.values(x));return C.jsx(I.Provider,{value:y,children:b})};f.displayName=i+"Provider";function m(d,v){var I;const b=((I=v==null?void 0:v[e])==null?void 0:I[p])||l,x=Y.useContext(b);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=n.map(s=>Y.createContext(s));return function(l){const p=(l==null?void 0:l[e])||i;return Y.useMemo(()=>({[`__scope${e}`]:{...l,[e]:p}}),[l,p])}};return a.scopeName=e,[r,Zk(a,...t)]}function Zk(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((l,{useScope:p,scopeName:f})=>{const d=p(i)[`__scope${f}`];return{...l,...d}},{});return Y.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Jk(e){const t=e+"CollectionProvider",[n,r]=uy(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=b=>{const{scope:x,children:I}=b,y=j.useRef(null),S=j.useRef(new Map).current;return C.jsx(a,{scope:x,itemMap:S,collectionRef:y,children:I})};s.displayName=t;const l=e+"CollectionSlot",p=j.forwardRef((b,x)=>{const{scope:I,children:y}=b,S=i(l,I),A=Wc(x,S.collectionRef);return C.jsx(ls,{ref:A,children:y})});p.displayName=l;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=j.forwardRef((b,x)=>{const{scope:I,children:y,...S}=b,A=j.useRef(null),W=Wc(x,A),_=i(f,I);return j.useEffect(()=>(_.itemMap.set(A,{ref:A,...S}),()=>void _.itemMap.delete(A))),C.jsx(ls,{[m]:"",ref:W,children:y})});d.displayName=f;function v(b){const x=i(e+"CollectionConsumer",b);return j.useCallback(()=>{const y=x.collectionRef.current;if(!y)return[];const S=Array.from(y.querySelectorAll(`[${m}]`));return Array.from(x.itemMap.values()).sort((_,w)=>S.indexOf(_.ref.current)-S.indexOf(w.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:p,ItemSlot:d},v,r]}var Mv=globalThis!=null&&globalThis.document?Y.useLayoutEffect:()=>{},eE=sk.useId||(()=>{}),tE=0;function L3(e){const[t,n]=Y.useState(eE());return Mv(()=>{n(r=>r??String(tE++))},[e]),e||(t?`radix-${t}`:"")}M3();var nE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],qi=nE.reduce((e,t)=>{const n=Y.forwardRef((r,a)=>{const{asChild:i,...s}=r,l=i?ls:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function sy(e){const t=Y.useRef(e);return Y.useEffect(()=>{t.current=e}),Y.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function F3({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=rE({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=sy(n),p=Y.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&l(d)}else a(f)},[i,e,a,l]);return[s,p]}function rE({defaultProp:e,onChange:t}){const n=Y.useState(e),[r]=n,a=Y.useRef(r),i=sy(t);return Y.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}var aE=Y.createContext(void 0);function q3(e){const t=Y.useContext(aE);return e||t||"ltr"}var I2="rovingFocusGroup.onEntryFocus",oE={bubbles:!1,cancelable:!0},Hp="RovingFocusGroup",[_v,z3,iE]=Jk(Hp),[uE,U3]=uy(Hp,[iE]),[sE,lE]=uE(Hp),G3=Y.forwardRef((e,t)=>C.jsx(_v.Provider,{scope:e.__scopeRovingFocusGroup,children:C.jsx(_v.Slot,{scope:e.__scopeRovingFocusGroup,children:C.jsx(cE,{...e,ref:t})})}));G3.displayName=Hp;var cE=Y.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:p,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=Y.useRef(null),b=Wc(t,v),x=q3(i),[I=null,y]=F3({prop:s,defaultProp:l,onChange:p}),[S,A]=Y.useState(!1),W=sy(f),_=z3(n),w=Y.useRef(!1),[M,E]=Y.useState(0);return Y.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(I2,W),()=>P.removeEventListener(I2,W)},[W]),C.jsx(sE,{scope:n,orientation:r,dir:x,loop:a,currentTabStopId:I,onItemFocus:Y.useCallback(P=>y(P),[y]),onItemShiftTab:Y.useCallback(()=>A(!0),[]),onFocusableItemAdd:Y.useCallback(()=>E(P=>P+1),[]),onFocusableItemRemove:Y.useCallback(()=>E(P=>P-1),[]),children:C.jsx(qi.div,{tabIndex:S||M===0?-1:0,"data-orientation":r,...d,ref:b,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const O=!w.current;if(P.target===P.currentTarget&&O&&!S){const N=new CustomEvent(I2,oE);if(P.currentTarget.dispatchEvent(N),!N.defaultPrevented){const D=_().filter(Q=>Q.focusable),T=D.find(Q=>Q.active),q=D.find(Q=>Q.id===I),G=[T,q,...D].filter(Boolean).map(Q=>Q.ref.current);Q3(G,m)}}w.current=!1}),onBlur:zr(e.onBlur,()=>A(!1))})})}),V3="RovingFocusGroupItem",K3=Y.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,l=L3(),p=i||l,f=lE(V3,n),m=f.currentTabStopId===p,d=z3(n),{onFocusableItemAdd:v,onFocusableItemRemove:b}=f;return Y.useEffect(()=>{if(r)return v(),()=>b()},[r,v,b]),C.jsx(_v.ItemSlot,{scope:n,id:p,focusable:r,active:a,children:C.jsx(qi.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,x=>{r?f.onItemFocus(p):x.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(p)),onKeyDown:zr(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const I=dE(x,f.orientation,f.dir);if(I!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=d().filter(A=>A.focusable).map(A=>A.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const A=S.indexOf(x.currentTarget);S=f.loop?hE(S,A+1):S.slice(A+1)}setTimeout(()=>Q3(S))}})})})});K3.displayName=V3;var pE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function fE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function dE(e,t,n){const r=fE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return pE[r]}function Q3(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function hE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var mE=G3,vE=K3;function gE(e,t){return Y.useReducer((n,r)=>t[n][r]??n,e)}var Y3=e=>{const{present:t,children:n}=e,r=yE(t),a=typeof n=="function"?n({present:r.isPresent}):Y.Children.only(n),i=Wc(r.ref,bE(a));return typeof n=="function"||r.isPresent?Y.cloneElement(a,{ref:i}):null};Y3.displayName="Presence";function yE(e){const[t,n]=Y.useState(),r=Y.useRef({}),a=Y.useRef(e),i=Y.useRef("none"),s=e?"mounted":"unmounted",[l,p]=gE(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Y.useEffect(()=>{const f=pc(r.current);i.current=l==="mounted"?f:"none"},[l]),Mv(()=>{const f=r.current,m=a.current;if(m!==e){const v=i.current,b=pc(f);e?p("MOUNT"):b==="none"||(f==null?void 0:f.display)==="none"?p("UNMOUNT"):p(m&&v!==b?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,p]),Mv(()=>{if(t){let f;const m=t.ownerDocument.defaultView??window,d=b=>{const I=pc(r.current).includes(b.animationName);if(b.target===t&&I&&(p("ANIMATION_END"),!a.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",f=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},v=b=>{b.target===t&&(i.current=pc(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{m.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:Y.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function pc(e){return(e==null?void 0:e.animationName)||"none"}function bE(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ly="Tabs",[IE]=uy(ly,[U3]),X3=U3(),[BE,cy]=IE(ly),Z3=Y.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:p="automatic",...f}=e,m=q3(l),[d,v]=F3({prop:r,onChange:a,defaultProp:i});return C.jsx(BE,{scope:n,baseId:L3(),value:d,onValueChange:v,orientation:s,dir:m,activationMode:p,children:C.jsx(qi.div,{dir:m,"data-orientation":s,...f,ref:t})})});Z3.displayName=ly;var J3="TabsList",eA=Y.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,i=cy(J3,n),s=X3(n);return C.jsx(mE,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:C.jsx(qi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});eA.displayName=J3;var tA="TabsTrigger",nA=Y.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...i}=e,s=cy(tA,n),l=X3(n),p=oA(s.baseId,r),f=iA(s.baseId,r),m=r===s.value;return C.jsx(vE,{asChild:!0,...l,focusable:!a,active:m,children:C.jsx(qi.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:p,...i,ref:t,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!m&&!a&&d&&s.onValueChange(r)})})})});nA.displayName=tA;var rA="TabsContent",aA=Y.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:i,...s}=e,l=cy(rA,n),p=oA(l.baseId,r),f=iA(l.baseId,r),m=r===l.value,d=Y.useRef(m);return Y.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),C.jsx(Y3,{present:a||m,children:({present:v})=>C.jsx(qi.div,{"data-state":m?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":p,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});aA.displayName=rA;function oA(e,t){return`${e}-trigger-${t}`}function iA(e,t){return`${e}-content-${t}`}var xE=Z3,wE=eA,PE=nA,SE=aA;function AE({className:e,...t}){return C.jsx(xE,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function WE({className:e,...t}){return C.jsx(wE,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function bI({className:e,...t}){return C.jsx(PE,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function II({className:e,...t}){return C.jsx(SE,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_E=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),BI=e=>{const t=_E(e);return t.charAt(0).toUpperCase()+t.slice(1)},uA=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...l},p)=>Y.createElement("svg",{ref:p,...OE,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:uA("lucide",a),...l},[...s.map(([f,m])=>Y.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=(e,t)=>{const n=Y.forwardRef(({className:r,...a},i)=>Y.createElement(CE,{ref:i,iconNode:t,className:uA(`lucide-${ME(BI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=BI(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],EE=lr("arrow-up-down",kE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],NE=lr("bot",TE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jE=lr("chevron-down",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],DE=lr("chevron-right",HE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],LE=lr("circle-check",$E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],qE=lr("circle-plus",FE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],UE=lr("download",zE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],VE=lr("trending-up",GE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],QE=lr("triangle-alert",KE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],XE=lr("users",YE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xI=lr("x",ZE);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Mc(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const sA=6048e5,JE=864e5,eT=6e4,tT=36e5,nT=1e3;let rT={};function zi(){return rT}function Ea(e,t){var l,p,f,m;const n=zi(),r=(t==null?void 0:t.weekStartsOn)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Ct(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function pi(e){return Ea(e,{weekStartsOn:1})}function lA(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=pi(r),i=St(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=pi(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function wI(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function _c(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function aT(e,t){const n=wI(e),r=wI(t),a=+n-_c(n),i=+r-_c(r);return Math.round((a-i)/JE)}function oT(e){const t=lA(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),pi(n)}function iT(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function uT(e){if(!iT(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function sT(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function lT(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function cT(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const pT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fT=(e,t,n)=>{let r;const a=pT[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function B2(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const dT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},hT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},mT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vT={date:B2({formats:dT,defaultWidth:"full"}),time:B2({formats:hT,defaultWidth:"full"}),dateTime:B2({formats:mT,defaultWidth:"full"})},gT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yT=(e,t,n,r)=>gT[e];function Du(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const bT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},IT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},BT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},PT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ST=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},AT={ordinalNumber:ST,era:Du({values:bT,defaultWidth:"wide"}),quarter:Du({values:IT,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Du({values:BT,defaultWidth:"wide"}),day:Du({values:xT,defaultWidth:"wide"}),dayPeriod:Du({values:wT,defaultWidth:"wide",formattingValues:PT,defaultFormattingWidth:"wide"})};function $u(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?MT(l,d=>d.test(s)):WT(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(p):p,f=n.valueCallback?n.valueCallback(f):f;const m=t.slice(s.length);return{value:f,rest:m}}}function WT(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function MT(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function _T(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const OT=/^(\d+)(th|st|nd|rd)?/i,CT=/\d+/i,kT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ET={any:[/^b/i,/^(a|c)/i]},TT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},NT={any:[/1/i,/2/i,/3/i,/4/i]},RT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},HT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},DT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$T={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},LT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},FT={ordinalNumber:_T({matchPattern:OT,parsePattern:CT,valueCallback:e=>parseInt(e,10)}),era:$u({matchPatterns:kT,defaultMatchWidth:"wide",parsePatterns:ET,defaultParseWidth:"any"}),quarter:$u({matchPatterns:TT,defaultMatchWidth:"wide",parsePatterns:NT,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$u({matchPatterns:RT,defaultMatchWidth:"wide",parsePatterns:jT,defaultParseWidth:"any"}),day:$u({matchPatterns:HT,defaultMatchWidth:"wide",parsePatterns:DT,defaultParseWidth:"any"}),dayPeriod:$u({matchPatterns:$T,defaultMatchWidth:"any",parsePatterns:LT,defaultParseWidth:"any"})},cA={code:"en-US",formatDistance:fT,formatLong:vT,formatRelative:yT,localize:AT,match:FT,options:{weekStartsOn:0,firstWeekContainsDate:1}};function qT(e){const t=Ct(e);return aT(t,cT(t))+1}function pA(e){const t=Ct(e),n=+pi(t)-+oT(t);return Math.round(n/sA)+1}function py(e,t){var m,d,v,b;const n=Ct(e),r=n.getFullYear(),a=zi(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((b=(v=a.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=Ea(s,t),p=St(e,0);p.setFullYear(r,0,i),p.setHours(0,0,0,0);const f=Ea(p,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function zT(e,t){var l,p,f,m;const n=zi(),r=(t==null?void 0:t.firstWeekContainsDate)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=py(e,t),i=St(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Ea(i,t)}function fA(e,t){const n=Ct(e),r=+Ea(n,t)-+zT(n,t);return Math.round(r/sA)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},PI={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=py(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):Je(i,t.length)},R:function(e,t){const n=lA(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=fA(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=pA(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=qT(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Je(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Je(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return AI(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return AI(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+SI(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+SI(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function SI(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+Je(i,2)}function AI(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):oo(e,t)}function oo(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return n+a+t+i}const WI=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},dA=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},UT=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return WI(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",WI(r,t)).replace("{{time}}",dA(a,t))},Ov={p:dA,P:UT},GT=/^D+$/,VT=/^Y+$/,KT=["D","DD","YY","YYYY"];function hA(e){return GT.test(e)}function mA(e){return VT.test(e)}function Cv(e,t,n){const r=QT(e,t,n);if(console.warn(r),KT.includes(e))throw new RangeError(r)}function QT(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const YT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,XT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ZT=/^'([^]*?)'?$/,JT=/''/g,eN=/[a-zA-Z]/;function Oc(e,t,n){var m,d,v,b;const r=zi(),a=r.locale??cA,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((b=(v=r.locale)==null?void 0:v.options)==null?void 0:b.weekStartsOn)??0,l=Ct(e);if(!uT(l))throw new RangeError("Invalid time value");let p=t.match(XT).map(x=>{const I=x[0];if(I==="p"||I==="P"){const y=Ov[I];return y(x,a.formatLong)}return x}).join("").match(YT).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const I=x[0];if(I==="'")return{isToken:!1,value:tN(x)};if(PI[I])return{isToken:!0,value:x};if(I.match(eN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:x}});a.localize.preprocessor&&(p=a.localize.preprocessor(l,p));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return p.map(x=>{if(!x.isToken)return x.value;const I=x.value;(mA(I)||hA(I))&&Cv(I,t,String(e));const y=PI[I[0]];return y(l,I,a.localize,f)}).join("")}function tN(e){const t=e.match(ZT);return t?t[1].replace(JT,"'"):e}function nN(){return Object.assign({},zi())}function rN(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function aN(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const oN=10;class vA{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class iN extends vA{constructor(t,n,r,a,i){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class uN extends vA{constructor(){super(...arguments);ve(this,"priority",oN);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,aN(n,Date))}}class Ve{run(t,n,r,a){const i=this.parse(t,n,r,a);return i?{setter:new iN(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,n,r){return!0}}class sN extends Ve{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const At={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},vr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Wt(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function gr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*tT+i*eT+s*nT),rest:t.slice(n[0].length)}}function gA(e){return mt(At.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(At.singleDigit,t);case 2:return mt(At.twoDigits,t);case 3:return mt(At.threeDigits,t);case 4:return mt(At.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function Cc(e,t){switch(e){case 1:return mt(At.singleDigitSigned,t);case 2:return mt(At.twoDigitsSigned,t);case 3:return mt(At.threeDigitsSigned,t);case 4:return mt(At.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function fy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function yA(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,l=e>=i%100;a=e+s-(l?100:0)}return n?a:1-a}function bA(e){return e%400===0||e%4===0&&e%100!==0}class lN extends Ve{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return Wt(It(4,n),i);case"yo":return Wt(a.ordinalNumber(n,{unit:"year"}),i);default:return Wt(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const i=n.getFullYear();if(a.isTwoDigitYear){const l=yA(a.year,i);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class cN extends Ve{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return Wt(It(4,n),i);case"Yo":return Wt(a.ordinalNumber(n,{unit:"year"}),i);default:return Wt(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,i){const s=py(n,i);if(a.isTwoDigitYear){const p=yA(a.year,s);return n.setFullYear(p,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}}class pN extends Ve{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return Cc(r==="R"?4:r.length,n)}set(n,r,a){const i=St(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),pi(i)}}class fN extends Ve{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return Cc(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class dN extends Ve{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class hN extends Ve{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class mN extends Ve{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const i=s=>s-1;switch(r){case"M":return Wt(mt(At.month,n),i);case"MM":return Wt(It(2,n),i);case"Mo":return Wt(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class vN extends Ve{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const i=s=>s-1;switch(r){case"L":return Wt(mt(At.month,n),i);case"LL":return Wt(It(2,n),i);case"Lo":return Wt(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function gN(e,t,n){const r=Ct(e),a=fA(r,n)-t;return r.setDate(r.getDate()-a*7),r}class yN extends Ve{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(At.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,i){return Ea(gN(n,a,i),i)}}function bN(e,t){const n=Ct(e),r=pA(n)-t;return n.setDate(n.getDate()-r*7),n}class IN extends Ve{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(At.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return pi(bN(n,a))}}const BN=[31,28,31,30,31,30,31,31,30,31,30,31],xN=[31,29,31,30,31,30,31,31,30,31,30,31];class wN extends Ve{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(At.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),i=bA(a),s=n.getMonth();return i?r>=1&&r<=xN[s]:r>=1&&r<=BN[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class PN extends Ve{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(At.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return bA(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function dy(e,t,n){var d,v,b,x;const r=zi(),a=(n==null?void 0:n.weekStartsOn)??((v=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((x=(b=r.locale)==null?void 0:b.options)==null?void 0:x.weekStartsOn)??0,i=Ct(e),s=i.getDay(),p=(t%7+7)%7,f=7-a,m=t<0||t>6?t-(s+f)%7:(p+f)%7-(s+f)%7;return Mc(i,m)}class SN extends Ve{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=dy(n,a,i),n.setHours(0,0,0,0),n}}class AN extends Ve{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,i){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+p};switch(r){case"e":case"ee":return Wt(It(r.length,n),s);case"eo":return Wt(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=dy(n,a,i),n.setHours(0,0,0,0),n}}class WN extends Ve{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,i){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+p};switch(r){case"c":case"cc":return Wt(It(r.length,n),s);case"co":return Wt(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=dy(n,a,i),n.setHours(0,0,0,0),n}}function MN(e,t){const n=Ct(e),r=rN(n),a=t-r;return Mc(n,a)}class _N extends Ve{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return Wt(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return Wt(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return Wt(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return Wt(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=MN(n,a),n.setHours(0,0,0,0),n}}class ON extends Ve{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(fy(a),0,0,0),n}}class CN extends Ve{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(fy(a),0,0,0),n}}class kN extends Ve{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(fy(a),0,0,0),n}}class EN extends Ve{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(At.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class TN extends Ve{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(At.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class NN extends Ve{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(At.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class RN extends Ve{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(At.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class jN extends Ve{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(At.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class HN extends Ve{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(At.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class DN extends Ve{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return Wt(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class $N extends Ve{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return gr(vr.basicOptionalMinutes,n);case"XX":return gr(vr.basic,n);case"XXXX":return gr(vr.basicOptionalSeconds,n);case"XXXXX":return gr(vr.extendedOptionalSeconds,n);case"XXX":default:return gr(vr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-_c(n)-a)}}class LN extends Ve{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return gr(vr.basicOptionalMinutes,n);case"xx":return gr(vr.basic,n);case"xxxx":return gr(vr.basicOptionalSeconds,n);case"xxxxx":return gr(vr.extendedOptionalSeconds,n);case"xxx":default:return gr(vr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-_c(n)-a)}}class FN extends Ve{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return gA(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class qN extends Ve{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return gA(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const zN={G:new sN,y:new lN,Y:new cN,R:new pN,u:new fN,Q:new dN,q:new hN,M:new mN,L:new vN,w:new yN,I:new IN,d:new wN,D:new PN,E:new SN,e:new AN,c:new WN,i:new _N,a:new ON,b:new CN,B:new kN,h:new EN,H:new TN,K:new NN,k:new RN,m:new jN,s:new HN,S:new DN,X:new $N,x:new LN,t:new FN,T:new qN},UN=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,GN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,VN=/^'([^]*?)'?$/,KN=/''/g,QN=/\S/,YN=/[a-zA-Z]/;function XN(e,t,n,r){var I,y,S,A;const a=nN(),i=a.locale??cA,s=a.firstWeekContainsDate??((y=(I=a.locale)==null?void 0:I.options)==null?void 0:y.firstWeekContainsDate)??1,l=a.weekStartsOn??((A=(S=a.locale)==null?void 0:S.options)==null?void 0:A.weekStartsOn)??0,p={firstWeekContainsDate:s,weekStartsOn:l,locale:i},f=[new uN],m=t.match(GN).map(W=>{const _=W[0];if(_ in Ov){const w=Ov[_];return w(W,i.formatLong)}return W}).join("").match(UN),d=[];for(let W of m){mA(W)&&Cv(W,t,e),hA(W)&&Cv(W,t,e);const _=W[0],w=zN[_];if(w){const{incompatibleTokens:M}=w;if(Array.isArray(M)){const P=d.find(O=>M.includes(O.token)||O.token===_);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${W}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${W}\` and any other token at the same time`);d.push({token:_,fullToken:W});const E=w.run(e,W,i.match,p);if(!E)return St(n,NaN);f.push(E.setter),e=E.rest}else{if(_.match(YN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");if(W==="''"?W="'":_==="'"&&(W=ZN(W)),e.indexOf(W)===0)e=e.slice(W.length);else return St(n,NaN)}}if(e.length>0&&QN.test(e))return St(n,NaN);const v=f.map(W=>W.priority).sort((W,_)=>_-W).filter((W,_,w)=>w.indexOf(W)===_).map(W=>f.filter(_=>_.priority===W).sort((_,w)=>w.subPriority-_.subPriority)).map(W=>W[0]);let b=Ct(n);if(isNaN(b.getTime()))return St(n,NaN);const x={};for(const W of v){if(!W.validate(b,p))return St(n,NaN);const _=W.set(b,x,p);Array.isArray(_)?(b=_[0],Object.assign(x,_[1])):b=_}return St(n,b)}function ZN(e){return e.match(VN)[1].replace(KN,"'")}const yr=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,i,s]=n;return new Date(parseInt(a),parseInt(i)-1,parseInt(s))}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a))}return XN(e,"dd-MM-yyyy",new Date)},IA=["january","february","march","april","may","june","july","august","september","october","november","december"],BA=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=IA.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const i=lT(new Date(a,r)),s=sT(new Date(a,r)),l=[];let p=i,f=1;for(;p<=s;){let m=Mc(p,6);m>s&&(m=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${p.getDate()}-${m.getDate()}`,startDate:p,endDate:m}),p=Mc(m,1),f++}return l},xA=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},kv=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=IA.indexOf(n.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},JN=e=>Oc(e,"MMM dd, yyyy"),Ev=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Tv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=t.get(a)||0;t.set(a,i+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},wA=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},eR=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.total-r.total).slice(0,t)},tR=(e,t="february-2026")=>{if(t==="all"){const n=new Set;return e.forEach(a=>{try{const i=yr(a.createdAt);isNaN(i.getTime())||n.add(`${Oc(i,"MMM yyyy")}|${Oc(i,"MMMM").toLowerCase()}-${i.getFullYear()}`)}catch{}}),Array.from(n).map(a=>{const[i,s]=a.split("|"),l=e.filter(d=>kv(yr(d.createdAt),s)),p=l.length,f=l.filter(d=>d.handled==="Human").length,m=p>0?f/p*100:0;return{week:i,totalSessions:p,humanEscalations:f,escalationRate:m}}).sort((a,i)=>new Date(`1 ${a.week}`).getTime()-new Date(`1 ${i.week}`).getTime()).filter(a=>a.totalSessions>0)}else return BA(t).map(r=>{const a=e.filter(p=>{const f=yr(p.createdAt);return xA(f,r)}),i=a.length,s=a.filter(p=>p.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:l}})},nR=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([l,p])=>{const f=Array.from(p.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:l,count:m,products:f}}).sort((l,p)=>p.count-l.count),s=i.reduce((l,p)=>l+p.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},rR=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",t),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function aR({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),C.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),C.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:C.jsx(VE,{className:"w-6 h-6 text-blue-600"})})]})})}),C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),C.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),C.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),C.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:C.jsx(NE,{className:"w-6 h-6 text-blue-600"})})]})})}),C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),C.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),C.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),C.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:C.jsx(XE,{className:"w-6 h-6 text-orange-600"})})]})})}),C.jsx(zn,{className:n(e.escalationRate),children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),C.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),C.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),C.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:C.jsx(QE,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var x2,MI;function yn(){if(MI)return x2;MI=1;var e=Array.isArray;return x2=e,x2}var w2,_I;function PA(){if(_I)return w2;_I=1;var e=typeof uc=="object"&&uc&&uc.Object===Object&&uc;return w2=e,w2}var P2,OI;function Ar(){if(OI)return P2;OI=1;var e=PA(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return P2=n,P2}var S2,CI;function Us(){if(CI)return S2;CI=1;var e=Ar(),t=e.Symbol;return S2=t,S2}var A2,kI;function oR(){if(kI)return A2;kI=1;var e=Us(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function i(s){var l=n.call(s,a),p=s[a];try{s[a]=void 0;var f=!0}catch{}var m=r.call(s);return f&&(l?s[a]=p:delete s[a]),m}return A2=i,A2}var W2,EI;function iR(){if(EI)return W2;EI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return W2=n,W2}var M2,TI;function Yr(){if(TI)return M2;TI=1;var e=Us(),t=oR(),n=iR(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:i&&i in Object(l)?t(l):n(l)}return M2=s,M2}var _2,NI;function Xr(){if(NI)return _2;NI=1;function e(t){return t!=null&&typeof t=="object"}return _2=e,_2}var O2,RI;function Ui(){if(RI)return O2;RI=1;var e=Yr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return O2=r,O2}var C2,jI;function hy(){if(jI)return C2;jI=1;var e=yn(),t=Ui(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||t(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return C2=a,C2}var k2,HI;function ja(){if(HI)return k2;HI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return k2=e,k2}var E2,DI;function my(){if(DI)return E2;DI=1;var e=Yr(),t=ja(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(l){if(!t(l))return!1;var p=e(l);return p==r||p==a||p==n||p==i}return E2=s,E2}var T2,$I;function uR(){if($I)return T2;$I=1;var e=Ar(),t=e["__core-js_shared__"];return T2=t,T2}var N2,LI;function sR(){if(LI)return N2;LI=1;var e=uR(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return N2=n,N2}var R2,FI;function SA(){if(FI)return R2;FI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return R2=n,R2}var j2,qI;function lR(){if(qI)return j2;qI=1;var e=my(),t=sR(),n=ja(),r=SA(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,p=s.toString,f=l.hasOwnProperty,m=RegExp("^"+p.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!n(v)||t(v))return!1;var b=e(v)?m:i;return b.test(r(v))}return j2=d,j2}var H2,zI;function cR(){if(zI)return H2;zI=1;function e(t,n){return t==null?void 0:t[n]}return H2=e,H2}var D2,UI;function Bo(){if(UI)return D2;UI=1;var e=lR(),t=cR();function n(r,a){var i=t(r,a);return e(i)?i:void 0}return D2=n,D2}var $2,GI;function Dp(){if(GI)return $2;GI=1;var e=Bo(),t=e(Object,"create");return $2=t,$2}var L2,VI;function pR(){if(VI)return L2;VI=1;var e=Dp();function t(){this.__data__=e?e(null):{},this.size=0}return L2=t,L2}var F2,KI;function fR(){if(KI)return F2;KI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return F2=e,F2}var q2,QI;function dR(){if(QI)return q2;QI=1;var e=Dp(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(e){var l=s[i];return l===t?void 0:l}return r.call(s,i)?s[i]:void 0}return q2=a,q2}var z2,YI;function hR(){if(YI)return z2;YI=1;var e=Dp(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:n.call(i,a)}return z2=r,z2}var U2,XI;function mR(){if(XI)return U2;XI=1;var e=Dp(),t="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?t:a,this}return U2=n,U2}var G2,ZI;function vR(){if(ZI)return G2;ZI=1;var e=pR(),t=fR(),n=dR(),r=hR(),a=mR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,G2=i,G2}var V2,JI;function gR(){if(JI)return V2;JI=1;function e(){this.__data__=[],this.size=0}return V2=e,V2}var K2,eB;function vy(){if(eB)return K2;eB=1;function e(t,n){return t===n||t!==t&&n!==n}return K2=e,K2}var Q2,tB;function $p(){if(tB)return Q2;tB=1;var e=vy();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Q2=t,Q2}var Y2,nB;function yR(){if(nB)return Y2;nB=1;var e=$p(),t=Array.prototype,n=t.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var l=i.length-1;return s==l?i.pop():n.call(i,s,1),--this.size,!0}return Y2=r,Y2}var X2,rB;function bR(){if(rB)return X2;rB=1;var e=$p();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return X2=t,X2}var Z2,aB;function IR(){if(aB)return Z2;aB=1;var e=$p();function t(n){return e(this.__data__,n)>-1}return Z2=t,Z2}var J2,oB;function BR(){if(oB)return J2;oB=1;var e=$p();function t(n,r){var a=this.__data__,i=e(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return J2=t,J2}var ed,iB;function Lp(){if(iB)return ed;iB=1;var e=gR(),t=yR(),n=bR(),r=IR(),a=BR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ed=i,ed}var td,uB;function gy(){if(uB)return td;uB=1;var e=Bo(),t=Ar(),n=e(t,"Map");return td=n,td}var nd,sB;function xR(){if(sB)return nd;sB=1;var e=vR(),t=Lp(),n=gy();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return nd=r,nd}var rd,lB;function wR(){if(lB)return rd;lB=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return rd=e,rd}var ad,cB;function Fp(){if(cB)return ad;cB=1;var e=wR();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return ad=t,ad}var od,pB;function PR(){if(pB)return od;pB=1;var e=Fp();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return od=t,od}var id,fB;function SR(){if(fB)return id;fB=1;var e=Fp();function t(n){return e(this,n).get(n)}return id=t,id}var ud,dB;function AR(){if(dB)return ud;dB=1;var e=Fp();function t(n){return e(this,n).has(n)}return ud=t,ud}var sd,hB;function WR(){if(hB)return sd;hB=1;var e=Fp();function t(n,r){var a=e(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return sd=t,sd}var ld,mB;function yy(){if(mB)return ld;mB=1;var e=xR(),t=PR(),n=SR(),r=AR(),a=WR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ld=i,ld}var cd,vB;function AA(){if(vB)return cd;vB=1;var e=yy(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var i=function(){var s=arguments,l=a?a.apply(this,s):s[0],p=i.cache;if(p.has(l))return p.get(l);var f=r.apply(this,s);return i.cache=p.set(l,f)||p,f};return i.cache=new(n.Cache||e),i}return n.Cache=e,cd=n,cd}var pd,gB;function MR(){if(gB)return pd;gB=1;var e=AA(),t=500;function n(r){var a=e(r,function(s){return i.size===t&&i.clear(),s}),i=a.cache;return a}return pd=n,pd}var fd,yB;function _R(){if(yB)return fd;yB=1;var e=MR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(t,function(s,l,p,f){i.push(p?f.replace(n,"$1"):l||s)}),i});return fd=r,fd}var dd,bB;function by(){if(bB)return dd;bB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=Array(a);++r<a;)i[r]=n(t[r],r,t);return i}return dd=e,dd}var hd,IB;function OR(){if(IB)return hd;IB=1;var e=Us(),t=by(),n=yn(),r=Ui(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return i?i.call(l):"";var p=l+"";return p=="0"&&1/l==-1/0?"-0":p}return hd=s,hd}var md,BB;function WA(){if(BB)return md;BB=1;var e=OR();function t(n){return n==null?"":e(n)}return md=t,md}var vd,xB;function MA(){if(xB)return vd;xB=1;var e=yn(),t=hy(),n=_R(),r=WA();function a(i,s){return e(i)?i:t(i,s)?[i]:n(r(i))}return vd=a,vd}var gd,wB;function qp(){if(wB)return gd;wB=1;var e=Ui();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return gd=t,gd}var yd,PB;function Iy(){if(PB)return yd;PB=1;var e=MA(),t=qp();function n(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[t(a[i++])];return i&&i==s?r:void 0}return yd=n,yd}var bd,SB;function _A(){if(SB)return bd;SB=1;var e=Iy();function t(n,r,a){var i=n==null?void 0:e(n,r);return i===void 0?a:i}return bd=t,bd}var CR=_A();const Mn=Xe(CR);var Id,AB;function kR(){if(AB)return Id;AB=1;function e(t){return t==null}return Id=e,Id}var ER=kR();const Ee=Xe(ER);var Bd,WB;function TR(){if(WB)return Bd;WB=1;var e=Yr(),t=yn(),n=Xr(),r="[object String]";function a(i){return typeof i=="string"||!t(i)&&n(i)&&e(i)==r}return Bd=a,Bd}var NR=TR();const Gs=Xe(NR);var RR=my();const ke=Xe(RR);var jR=ja();const Gi=Xe(jR);var xd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MB;function HR(){if(MB)return Qe;MB=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function I(y){if(typeof y=="object"&&y!==null){var S=y.$$typeof;switch(S){case e:switch(y=y.type,y){case n:case a:case r:case f:case m:return y;default:switch(y=y&&y.$$typeof,y){case l:case s:case p:case v:case d:case i:return y;default:return S}}case t:return S}}}return Qe.ContextConsumer=s,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=p,Qe.Fragment=n,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=t,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=m,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(y){return I(y)===s},Qe.isContextProvider=function(y){return I(y)===i},Qe.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===e},Qe.isForwardRef=function(y){return I(y)===p},Qe.isFragment=function(y){return I(y)===n},Qe.isLazy=function(y){return I(y)===v},Qe.isMemo=function(y){return I(y)===d},Qe.isPortal=function(y){return I(y)===t},Qe.isProfiler=function(y){return I(y)===a},Qe.isStrictMode=function(y){return I(y)===r},Qe.isSuspense=function(y){return I(y)===f},Qe.isSuspenseList=function(y){return I(y)===m},Qe.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===n||y===a||y===r||y===f||y===m||y===b||typeof y=="object"&&y!==null&&(y.$$typeof===v||y.$$typeof===d||y.$$typeof===i||y.$$typeof===s||y.$$typeof===p||y.$$typeof===x||y.getModuleId!==void 0)},Qe.typeOf=I,Qe}var _B;function DR(){return _B||(_B=1,xd.exports=HR()),xd.exports}var $R=DR(),wd,OB;function OA(){if(OB)return wd;OB=1;var e=Yr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return wd=r,wd}var Pd,CB;function LR(){if(CB)return Pd;CB=1;var e=OA();function t(n){return e(n)&&n!=+n}return Pd=t,Pd}var FR=LR();const Vi=Xe(FR);var qR=OA();const zR=Xe(qR);var an=function(t){return t===0?0:t>0?1:-1},lo=function(t){return Gs(t)&&t.indexOf("%")===t.length-1},le=function(t){return zR(t)&&!Vi(t)},Rt=function(t){return le(t)||Gs(t)},UR=0,Ha=function(t){var n=++UR;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Gs(t))return r;var i;if(lo(t)){var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Vi(i)&&(i=r),a&&i>n&&(i=n),i},Aa=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},GR=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function kc(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Mn(r,t))===n})}var VR=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,i=0,s=0,l=1/0,p=-1/0,f=0,m=0,d=0;d<n;d++)f=t[d].cx||0,m=t[d].cy||0,r+=f,a+=m,i+=f*m,s+=f*f,l=Math.min(l,f),p=Math.max(p,f);var v=n*s!==r*r?(n*i-r*a)/(n*s-r*r):0;return{xmin:l,xmax:p,a:v,b:(a-v*r)/n}};function si(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Nv(e){"@babel/helpers - typeof";return Nv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nv(e)}var KR=["viewBox","children"],QR=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],kB=["points","pathLength"],Sd={svg:KR,polygon:kB,polyline:kB},By=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Ec=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(Y.isValidElement(t)&&(r=t.props),!Gi(r))return null;var a={};return Object.keys(r).forEach(function(i){By.includes(i)&&(a[i]=n||function(s){return r[i](r,s)})}),a},YR=function(t,n,r){return function(a){return t(n,r,a),null}},Ta=function(t,n,r){if(!Gi(t)||Nv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(i){var s=t[i];By.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=YR(s,n,r))}),a},XR=["children"],ZR=["children"];function EB(e,t){if(e==null)return{};var n=JR(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function JR(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Rv(e){"@babel/helpers - typeof";return Rv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rv(e)}var TB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},NB=null,Ad=null,xy=function e(t){if(t===NB&&Array.isArray(Ad))return Ad;var n=[];return Y.Children.forEach(t,function(r){Ee(r)||($R.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),Ad=n,NB=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],xy(e).forEach(function(a){var i=Mn(a,"type.displayName")||Mn(a,"type.name");r.indexOf(i)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var RB=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},ej=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],tj=function(t){return t&&t.type&&Gs(t.type)&&ej.indexOf(t.type)>=0},CA=function(t){return t&&Rv(t)==="object"&&"clipDot"in t},nj=function(t,n,r,a){var i,s=(i=Sd==null?void 0:Sd[a])!==null&&i!==void 0?i:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||QR.includes(n))||r&&By.includes(n)},Ae=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(Y.isValidElement(t)&&(a=t.props),!Gi(a))return null;var i={};return Object.keys(a).forEach(function(s){var l;nj((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(i[s]=a[s])}),i},jv=function e(t,n){if(t===n)return!0;var r=Y.Children.count(t);if(r!==Y.Children.count(n))return!1;if(r===0)return!0;if(r===1)return jB(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var i=t[a],s=n[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!jB(i,s))return!1}return!0},jB=function(t,n){if(Ee(t)&&Ee(n))return!0;if(!Ee(t)&&!Ee(n)){var r=t.props||{},a=r.children,i=EB(r,XR),s=n.props||{},l=s.children,p=EB(s,ZR);return a&&l?si(i,p)&&jv(a,l):!a&&!l?si(i,p):!1}return!1},HB=function(t,n){var r=[],a={};return xy(t).forEach(function(i,s){if(tj(i))r.push(i);else if(i){var l=Ur(i.type),p=n[l]||{},f=p.handler,m=p.once;if(f&&(!m||!a[l])){var d=f(i,l,s);r.push(d),a[l]=!0}}}),r},rj=function(t){var n=t&&t.type;return n&&TB[n]?TB[n]:null},aj=function(t,n){return xy(n).indexOf(t)},oj=["children","width","height","viewBox","className","style","title","desc"];function Hv(){return Hv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hv.apply(this,arguments)}function ij(e,t){if(e==null)return{};var n=uj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Dv(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,l=e.title,p=e.desc,f=ij(e,oj),m=a||{width:n,height:r,x:0,y:0},d=je("recharts-surface",i);return j.createElement("svg",Hv({},Ae(f,!0,"svg"),{className:d,width:n,height:r,style:s,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),j.createElement("title",null,l),j.createElement("desc",null,p),t)}var sj=["children","className"];function $v(){return $v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$v.apply(this,arguments)}function lj(e,t){if(e==null)return{};var n=cj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=j.forwardRef(function(e,t){var n=e.children,r=e.className,a=lj(e,sj),i=je("recharts-layer",r);return j.createElement("g",$v({className:i},Ae(a,!0),{ref:t}),n)}),ur=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},Wd,DB;function pj(){if(DB)return Wd;DB=1;function e(t,n,r){var a=-1,i=t.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(i);++a<i;)s[a]=t[a+n];return s}return Wd=e,Wd}var Md,$B;function fj(){if($B)return Md;$B=1;var e=pj();function t(n,r,a){var i=n.length;return a=a===void 0?i:a,!r&&a>=i?n:e(n,r,a)}return Md=t,Md}var _d,LB;function kA(){if(LB)return _d;LB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+i+"]");function p(f){return l.test(f)}return _d=p,_d}var Od,FB;function dj(){if(FB)return Od;FB=1;function e(t){return t.split("")}return Od=e,Od}var Cd,qB;function hj(){if(qB)return Cd;qB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",p="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+p+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",x=f+"?",I="["+i+"]?",y="(?:"+b+"(?:"+[m,d,v].join("|")+")"+I+x+")*",S=I+x+y,A="(?:"+[m+l+"?",l,d,v,s].join("|")+")",W=RegExp(p+"(?="+p+")|"+A+S,"g");function _(w){return w.match(W)||[]}return Cd=_,Cd}var kd,zB;function mj(){if(zB)return kd;zB=1;var e=dj(),t=kA(),n=hj();function r(a){return t(a)?n(a):e(a)}return kd=r,kd}var Ed,UB;function vj(){if(UB)return Ed;UB=1;var e=fj(),t=kA(),n=mj(),r=WA();function a(i){return function(s){s=r(s);var l=t(s)?n(s):void 0,p=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return p[i]()+f}}return Ed=a,Ed}var Td,GB;function gj(){if(GB)return Td;GB=1;var e=vj(),t=e("toUpperCase");return Td=t,Td}var yj=gj();const zp=Xe(yj);function at(e){return function(){return e}}const EA=Math.cos,Tc=Math.sin,cr=Math.sqrt,Nc=Math.PI,Up=2*Nc,Lv=Math.PI,Fv=2*Lv,io=1e-6,bj=Fv-io;function TA(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Ij(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return TA;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class Bj{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?TA:Ij(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,p=r-t,f=a-n,m=s-t,d=l-n,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>io)if(!(Math.abs(d*p-f*m)>io)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let b=r-s,x=a-l,I=p*p+f*f,y=b*b+x*x,S=Math.sqrt(I),A=Math.sqrt(v),W=i*Math.tan((Lv-Math.acos((I+v-y)/(2*S*A)))/2),_=W/A,w=W/S;Math.abs(_-1)>io&&this._append`L${t+_*m},${n+_*d}`,this._append`A${i},${i},0,0,${+(d*b>m*x)},${this._x1=t+w*p},${this._y1=n+w*f}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),p=r*Math.sin(a),f=t+l,m=n+p,d=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-m)>io)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%Fv+Fv),v>bj?this._append`A${r},${r},0,1,${d},${t-l},${n-p}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>io&&this._append`A${r},${r},0,${+(v>=Lv)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function wy(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Bj(t)}function Py(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function NA(e){this._context=e}NA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Gp(e){return new NA(e)}function RA(e){return e[0]}function jA(e){return e[1]}function HA(e,t){var n=at(!0),r=null,a=Gp,i=null,s=wy(l);e=typeof e=="function"?e:e===void 0?RA:at(e),t=typeof t=="function"?t:t===void 0?jA:at(t);function l(p){var f,m=(p=Py(p)).length,d,v=!1,b;for(r==null&&(i=a(b=s())),f=0;f<=m;++f)!(f<m&&n(d=p[f],f,p))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,p),+t(d,f,p));if(b)return i=null,b+""||null}return l.x=function(p){return arguments.length?(e=typeof p=="function"?p:at(+p),l):e},l.y=function(p){return arguments.length?(t=typeof p=="function"?p:at(+p),l):t},l.defined=function(p){return arguments.length?(n=typeof p=="function"?p:at(!!p),l):n},l.curve=function(p){return arguments.length?(a=p,r!=null&&(i=a(r)),l):a},l.context=function(p){return arguments.length?(p==null?r=i=null:i=a(r=p),l):r},l}function fc(e,t,n){var r=null,a=at(!0),i=null,s=Gp,l=null,p=wy(f);e=typeof e=="function"?e:e===void 0?RA:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?jA:at(+n);function f(d){var v,b,x,I=(d=Py(d)).length,y,S=!1,A,W=new Array(I),_=new Array(I);for(i==null&&(l=s(A=p())),v=0;v<=I;++v){if(!(v<I&&a(y=d[v],v,d))===S)if(S=!S)b=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),x=v-1;x>=b;--x)l.point(W[x],_[x]);l.lineEnd(),l.areaEnd()}S&&(W[v]=+e(y,v,d),_[v]=+t(y,v,d),l.point(r?+r(y,v,d):W[v],n?+n(y,v,d):_[v]))}if(A)return l=null,A+""||null}function m(){return HA().defined(a).curve(s).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:at(+d),f):r},f.y=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),n=null,f):t},f.y0=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),f):t},f.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:at(+d),f):n},f.lineX0=f.lineY0=function(){return m().x(e).y(t)},f.lineY1=function(){return m().x(e).y(n)},f.lineX1=function(){return m().x(r).y(t)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:at(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,i!=null&&(l=s(i)),f):s},f.context=function(d){return arguments.length?(d==null?i=l=null:l=s(i=d),f):i},f}class DA{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function xj(e){return new DA(e,!0)}function wj(e){return new DA(e,!1)}const Sy={draw(e,t){const n=cr(t/Nc);e.moveTo(n,0),e.arc(0,0,n,0,Up)}},Pj={draw(e,t){const n=cr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},$A=cr(1/3),Sj=$A*2,Aj={draw(e,t){const n=cr(t/Sj),r=n*$A;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},Wj={draw(e,t){const n=cr(t),r=-n/2;e.rect(r,r,n,n)}},Mj=.8908130915292852,LA=Tc(Nc/10)/Tc(7*Nc/10),_j=Tc(Up/10)*LA,Oj=-EA(Up/10)*LA,Cj={draw(e,t){const n=cr(t*Mj),r=_j*n,a=Oj*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Up*i/5,l=EA(s),p=Tc(s);e.lineTo(p*n,-l*n),e.lineTo(l*r-p*a,p*r+l*a)}e.closePath()}},Nd=cr(3),kj={draw(e,t){const n=-cr(t/(Nd*3));e.moveTo(0,n*2),e.lineTo(-Nd*n,-n),e.lineTo(Nd*n,-n),e.closePath()}},Hn=-.5,Dn=cr(3)/2,qv=1/cr(12),Ej=(qv/2+1)*3,Tj={draw(e,t){const n=cr(t/Ej),r=n/2,a=n*qv,i=r,s=n*qv+n,l=-i,p=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,p),e.lineTo(Hn*r-Dn*a,Dn*r+Hn*a),e.lineTo(Hn*i-Dn*s,Dn*i+Hn*s),e.lineTo(Hn*l-Dn*p,Dn*l+Hn*p),e.lineTo(Hn*r+Dn*a,Hn*a-Dn*r),e.lineTo(Hn*i+Dn*s,Hn*s-Dn*i),e.lineTo(Hn*l+Dn*p,Hn*p-Dn*l),e.closePath()}};function Nj(e,t){let n=null,r=wy(a);e=typeof e=="function"?e:at(e||Sy),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:at(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:at(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function Rc(){}function jc(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function FA(e){this._context=e}FA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:jc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:jc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Rj(e){return new FA(e)}function qA(e){this._context=e}qA.prototype={areaStart:Rc,areaEnd:Rc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:jc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function jj(e){return new qA(e)}function zA(e){this._context=e}zA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:jc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Hj(e){return new zA(e)}function UA(e){this._context=e}UA.prototype={areaStart:Rc,areaEnd:Rc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function Dj(e){return new UA(e)}function VB(e){return e<0?-1:1}function KB(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(VB(i)+VB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function QB(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Rd(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function Hc(e){this._context=e}Hc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Rd(this,this._t0,QB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Rd(this,QB(this,n=KB(this,e,t)),n);break;default:Rd(this,this._t0,n=KB(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function GA(e){this._context=new VA(e)}(GA.prototype=Object.create(Hc.prototype)).point=function(e,t){Hc.prototype.point.call(this,t,e)};function VA(e){this._context=e}VA.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function $j(e){return new Hc(e)}function Lj(e){return new GA(e)}function KA(e){this._context=e}KA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=YB(e),a=YB(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function YB(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function Fj(e){return new KA(e)}function Vp(e,t){this._context=e,this._t=t}Vp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function qj(e){return new Vp(e,.5)}function zj(e){return new Vp(e,0)}function Uj(e){return new Vp(e,1)}function fi(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function zv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function Gj(e,t){return e[t]}function Vj(e){const t=[];return t.key=e,t}function Kj(){var e=at([]),t=zv,n=fi,r=Gj;function a(i){var s=Array.from(e.apply(this,arguments),Vj),l,p=s.length,f=-1,m;for(const d of i)for(l=0,++f;l<p;++l)(s[l][f]=[0,+r(d,s[l].key,f,i)]).data=d;for(l=0,m=Py(t(s));l<p;++l)s[m[l]].index=l;return n(s,m),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:at(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:at(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?zv:typeof i=="function"?i:at(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??fi,a):n},a}function Qj(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}fi(e,t)}}function Yj(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}fi(e,t)}}function Xj(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,p=0,f=0;l<s;++l){for(var m=e[t[l]],d=m[r][1]||0,v=m[r-1][1]||0,b=(d-v)/2,x=0;x<l;++x){var I=e[t[x]],y=I[r][1]||0,S=I[r-1][1]||0;b+=y-S}p+=d,f+=b*d}a[r-1][1]+=a[r-1][0]=n,p&&(n-=f/p)}a[r-1][1]+=a[r-1][0]=n,fi(e,t)}}function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}var Zj=["type","size","sizeType"];function Uv(){return Uv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uv.apply(this,arguments)}function XB(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ZB(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?XB(Object(n),!0).forEach(function(r){Jj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XB(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jj(e,t,n){return t=eH(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eH(e){var t=tH(e,"string");return cs(t)=="symbol"?t:t+""}function tH(e,t){if(cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nH(e,t){if(e==null)return{};var n=rH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var QA={symbolCircle:Sy,symbolCross:Pj,symbolDiamond:Aj,symbolSquare:Wj,symbolStar:Cj,symbolTriangle:kj,symbolWye:Tj},aH=Math.PI/180,oH=function(t){var n="symbol".concat(zp(t));return QA[n]||Sy},iH=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*aH;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},uH=function(t,n){QA["symbol".concat(zp(t))]=n},Kp=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,i=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,p=nH(t,Zj),f=ZB(ZB({},p),{},{type:r,size:i,sizeType:l}),m=function(){var y=oH(r),S=Nj().type(y).size(iH(i,l,r));return S()},d=f.className,v=f.cx,b=f.cy,x=Ae(f,!0);return v===+v&&b===+b&&i===+i?j.createElement("path",Uv({},x,{className:je("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(b,")"),d:m()})):null};Kp.registerSymbol=uH;function di(e){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(e)}function Gv(){return Gv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gv.apply(this,arguments)}function JB(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function sH(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?JB(Object(n),!0).forEach(function(r){ps(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):JB(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cH(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XA(r.key),r)}}function pH(e,t,n){return t&&cH(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fH(e,t,n){return t=Dc(t),dH(e,YA()?Reflect.construct(t,n||[],Dc(e).constructor):t.apply(e,n))}function dH(e,t){if(t&&(di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hH(e)}function hH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YA=function(){return!!e})()}function Dc(e){return Dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Dc(e)}function mH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vv(e,t)}function Vv(e,t){return Vv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vv(e,t)}function ps(e,t,n){return t=XA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XA(e){var t=vH(e,"string");return di(t)=="symbol"?t:t+""}function vH(e,t){if(di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $n=32,Ay=(function(e){function t(){return lH(this,t),fH(this,t,arguments)}return mH(t,e),pH(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=$n/2,s=$n/6,l=$n/3,p=r.inactive?a:r.color;if(r.type==="plainline")return j.createElement("line",{strokeWidth:4,fill:"none",stroke:p,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:$n,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return j.createElement("path",{strokeWidth:4,fill:"none",stroke:p,d:"M0,".concat(i,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(i,`
            H`).concat($n,"M").concat(2*l,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return j.createElement("path",{stroke:"none",fill:p,d:"M0,".concat($n/8,"h").concat($n,"v").concat($n*3/4,"h").concat(-$n,"z"),className:"recharts-legend-icon"});if(j.isValidElement(r.legendIcon)){var f=sH({},r);return delete f.legendIcon,j.cloneElement(r.legendIcon,f)}return j.createElement(Kp,{fill:p,cx:i,cy:i,size:$n,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,l=a.layout,p=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:$n,height:$n},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(b,x){var I=b.formatter||p,y=je(ps(ps({"recharts-legend-item":!0},"legend-item-".concat(x),!0),"inactive",b.inactive));if(b.type==="none")return null;var S=ke(b.value)?null:b.value;ur(!ke(b.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var A=b.inactive?f:b.color;return j.createElement("li",Gv({className:y,style:d,key:"legend-item-".concat(x)},Ta(r.props,b,x)),j.createElement(Dv,{width:s,height:s,viewBox:m,style:v},r.renderIcon(b)),j.createElement("span",{className:"recharts-legend-item-text",style:{color:A}},I?I(S,b,x):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return j.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(Y.PureComponent);ps(Ay,"displayName","Legend");ps(Ay,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var jd,ex;function gH(){if(ex)return jd;ex=1;var e=Lp();function t(){this.__data__=new e,this.size=0}return jd=t,jd}var Hd,tx;function yH(){if(tx)return Hd;tx=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return Hd=e,Hd}var Dd,nx;function bH(){if(nx)return Dd;nx=1;function e(t){return this.__data__.get(t)}return Dd=e,Dd}var $d,rx;function IH(){if(rx)return $d;rx=1;function e(t){return this.__data__.has(t)}return $d=e,$d}var Ld,ax;function BH(){if(ax)return Ld;ax=1;var e=Lp(),t=gy(),n=yy(),r=200;function a(i,s){var l=this.__data__;if(l instanceof e){var p=l.__data__;if(!t||p.length<r-1)return p.push([i,s]),this.size=++l.size,this;l=this.__data__=new n(p)}return l.set(i,s),this.size=l.size,this}return Ld=a,Ld}var Fd,ox;function ZA(){if(ox)return Fd;ox=1;var e=Lp(),t=gH(),n=yH(),r=bH(),a=IH(),i=BH();function s(l){var p=this.__data__=new e(l);this.size=p.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,Fd=s,Fd}var qd,ix;function xH(){if(ix)return qd;ix=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return qd=t,qd}var zd,ux;function wH(){if(ux)return zd;ux=1;function e(t){return this.__data__.has(t)}return zd=e,zd}var Ud,sx;function JA(){if(sx)return Ud;sx=1;var e=yy(),t=xH(),n=wH();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Ud=r,Ud}var Gd,lx;function eW(){if(lx)return Gd;lx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Gd=e,Gd}var Vd,cx;function tW(){if(cx)return Vd;cx=1;function e(t,n){return t.has(n)}return Vd=e,Vd}var Kd,px;function nW(){if(px)return Kd;px=1;var e=JA(),t=eW(),n=tW(),r=1,a=2;function i(s,l,p,f,m,d){var v=p&r,b=s.length,x=l.length;if(b!=x&&!(v&&x>b))return!1;var I=d.get(s),y=d.get(l);if(I&&y)return I==l&&y==s;var S=-1,A=!0,W=p&a?new e:void 0;for(d.set(s,l),d.set(l,s);++S<b;){var _=s[S],w=l[S];if(f)var M=v?f(w,_,S,l,s,d):f(_,w,S,s,l,d);if(M!==void 0){if(M)continue;A=!1;break}if(W){if(!t(l,function(E,P){if(!n(W,P)&&(_===E||m(_,E,p,f,d)))return W.push(P)})){A=!1;break}}else if(!(_===w||m(_,w,p,f,d))){A=!1;break}}return d.delete(s),d.delete(l),A}return Kd=i,Kd}var Qd,fx;function PH(){if(fx)return Qd;fx=1;var e=Ar(),t=e.Uint8Array;return Qd=t,Qd}var Yd,dx;function SH(){if(dx)return Yd;dx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,i){r[++n]=[i,a]}),r}return Yd=e,Yd}var Xd,hx;function Wy(){if(hx)return Xd;hx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Xd=e,Xd}var Zd,mx;function AH(){if(mx)return Zd;mx=1;var e=Us(),t=PH(),n=vy(),r=nW(),a=SH(),i=Wy(),s=1,l=2,p="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",b="[object RegExp]",x="[object Set]",I="[object String]",y="[object Symbol]",S="[object ArrayBuffer]",A="[object DataView]",W=e?e.prototype:void 0,_=W?W.valueOf:void 0;function w(M,E,P,O,N,D,T){switch(P){case A:if(M.byteLength!=E.byteLength||M.byteOffset!=E.byteOffset)return!1;M=M.buffer,E=E.buffer;case S:return!(M.byteLength!=E.byteLength||!D(new t(M),new t(E)));case p:case f:case v:return n(+M,+E);case m:return M.name==E.name&&M.message==E.message;case b:case I:return M==E+"";case d:var q=a;case x:var F=O&s;if(q||(q=i),M.size!=E.size&&!F)return!1;var G=T.get(M);if(G)return G==E;O|=l,T.set(M,E);var Q=r(q(M),q(E),O,N,D,T);return T.delete(M),Q;case y:if(_)return _.call(M)==_.call(E)}return!1}return Zd=w,Zd}var Jd,vx;function rW(){if(vx)return Jd;vx=1;function e(t,n){for(var r=-1,a=n.length,i=t.length;++r<a;)t[i+r]=n[r];return t}return Jd=e,Jd}var eh,gx;function WH(){if(gx)return eh;gx=1;var e=rW(),t=yn();function n(r,a,i){var s=a(r);return t(r)?s:e(s,i(r))}return eh=n,eh}var th,yx;function MH(){if(yx)return th;yx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[i++]=l)}return s}return th=e,th}var nh,bx;function _H(){if(bx)return nh;bx=1;function e(){return[]}return nh=e,nh}var rh,Ix;function OH(){if(Ix)return rh;Ix=1;var e=MH(),t=_H(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return rh=i,rh}var ah,Bx;function CH(){if(Bx)return ah;Bx=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return ah=e,ah}var oh,xx;function kH(){if(xx)return oh;xx=1;var e=Yr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return oh=r,oh}var ih,wx;function My(){if(wx)return ih;wx=1;var e=kH(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return ih=i,ih}var Yu={exports:{}},uh,Px;function EH(){if(Px)return uh;Px=1;function e(){return!1}return uh=e,uh}Yu.exports;var Sx;function aW(){return Sx||(Sx=1,(function(e,t){var n=Ar(),r=EH(),a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,l=s?n.Buffer:void 0,p=l?l.isBuffer:void 0,f=p||r;e.exports=f})(Yu,Yu.exports)),Yu.exports}var sh,Ax;function _y(){if(Ax)return sh;Ax=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return sh=n,sh}var lh,Wx;function Oy(){if(Wx)return lh;Wx=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return lh=t,lh}var ch,Mx;function TH(){if(Mx)return ch;Mx=1;var e=Yr(),t=Oy(),n=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",l="[object Error]",p="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",b="[object Set]",x="[object String]",I="[object WeakMap]",y="[object ArrayBuffer]",S="[object DataView]",A="[object Float32Array]",W="[object Float64Array]",_="[object Int8Array]",w="[object Int16Array]",M="[object Int32Array]",E="[object Uint8Array]",P="[object Uint8ClampedArray]",O="[object Uint16Array]",N="[object Uint32Array]",D={};D[A]=D[W]=D[_]=D[w]=D[M]=D[E]=D[P]=D[O]=D[N]=!0,D[r]=D[a]=D[y]=D[i]=D[S]=D[s]=D[l]=D[p]=D[f]=D[m]=D[d]=D[v]=D[b]=D[x]=D[I]=!1;function T(q){return n(q)&&t(q.length)&&!!D[e(q)]}return ch=T,ch}var ph,_x;function oW(){if(_x)return ph;_x=1;function e(t){return function(n){return t(n)}}return ph=e,ph}var Xu={exports:{}};Xu.exports;var Ox;function NH(){return Ox||(Ox=1,(function(e,t){var n=PA(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&n.process,l=(function(){try{var p=a&&a.require&&a.require("util").types;return p||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(Xu,Xu.exports)),Xu.exports}var fh,Cx;function iW(){if(Cx)return fh;Cx=1;var e=TH(),t=oW(),n=NH(),r=n&&n.isTypedArray,a=r?t(r):e;return fh=a,fh}var dh,kx;function RH(){if(kx)return dh;kx=1;var e=CH(),t=My(),n=yn(),r=aW(),a=_y(),i=iW(),s=Object.prototype,l=s.hasOwnProperty;function p(f,m){var d=n(f),v=!d&&t(f),b=!d&&!v&&r(f),x=!d&&!v&&!b&&i(f),I=d||v||b||x,y=I?e(f.length,String):[],S=y.length;for(var A in f)(m||l.call(f,A))&&!(I&&(A=="length"||b&&(A=="offset"||A=="parent")||x&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||a(A,S)))&&y.push(A);return y}return dh=p,dh}var hh,Ex;function jH(){if(Ex)return hh;Ex=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return hh=t,hh}var mh,Tx;function uW(){if(Tx)return mh;Tx=1;function e(t,n){return function(r){return t(n(r))}}return mh=e,mh}var vh,Nx;function HH(){if(Nx)return vh;Nx=1;var e=uW(),t=e(Object.keys,Object);return vh=t,vh}var gh,Rx;function DH(){if(Rx)return gh;Rx=1;var e=jH(),t=HH(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!e(i))return t(i);var s=[];for(var l in Object(i))r.call(i,l)&&l!="constructor"&&s.push(l);return s}return gh=a,gh}var yh,jx;function Vs(){if(jx)return yh;jx=1;var e=my(),t=Oy();function n(r){return r!=null&&t(r.length)&&!e(r)}return yh=n,yh}var bh,Hx;function Qp(){if(Hx)return bh;Hx=1;var e=RH(),t=DH(),n=Vs();function r(a){return n(a)?e(a):t(a)}return bh=r,bh}var Ih,Dx;function $H(){if(Dx)return Ih;Dx=1;var e=WH(),t=OH(),n=Qp();function r(a){return e(a,n,t)}return Ih=r,Ih}var Bh,$x;function LH(){if($x)return Bh;$x=1;var e=$H(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,l,p,f,m){var d=l&t,v=e(i),b=v.length,x=e(s),I=x.length;if(b!=I&&!d)return!1;for(var y=b;y--;){var S=v[y];if(!(d?S in s:r.call(s,S)))return!1}var A=m.get(i),W=m.get(s);if(A&&W)return A==s&&W==i;var _=!0;m.set(i,s),m.set(s,i);for(var w=d;++y<b;){S=v[y];var M=i[S],E=s[S];if(p)var P=d?p(E,M,S,s,i,m):p(M,E,S,i,s,m);if(!(P===void 0?M===E||f(M,E,l,p,m):P)){_=!1;break}w||(w=S=="constructor")}if(_&&!w){var O=i.constructor,N=s.constructor;O!=N&&"constructor"in i&&"constructor"in s&&!(typeof O=="function"&&O instanceof O&&typeof N=="function"&&N instanceof N)&&(_=!1)}return m.delete(i),m.delete(s),_}return Bh=a,Bh}var xh,Lx;function FH(){if(Lx)return xh;Lx=1;var e=Bo(),t=Ar(),n=e(t,"DataView");return xh=n,xh}var wh,Fx;function qH(){if(Fx)return wh;Fx=1;var e=Bo(),t=Ar(),n=e(t,"Promise");return wh=n,wh}var Ph,qx;function sW(){if(qx)return Ph;qx=1;var e=Bo(),t=Ar(),n=e(t,"Set");return Ph=n,Ph}var Sh,zx;function zH(){if(zx)return Sh;zx=1;var e=Bo(),t=Ar(),n=e(t,"WeakMap");return Sh=n,Sh}var Ah,Ux;function UH(){if(Ux)return Ah;Ux=1;var e=FH(),t=gy(),n=qH(),r=sW(),a=zH(),i=Yr(),s=SA(),l="[object Map]",p="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",b=s(e),x=s(t),I=s(n),y=s(r),S=s(a),A=i;return(e&&A(new e(new ArrayBuffer(1)))!=v||t&&A(new t)!=l||n&&A(n.resolve())!=f||r&&A(new r)!=m||a&&A(new a)!=d)&&(A=function(W){var _=i(W),w=_==p?W.constructor:void 0,M=w?s(w):"";if(M)switch(M){case b:return v;case x:return l;case I:return f;case y:return m;case S:return d}return _}),Ah=A,Ah}var Wh,Gx;function GH(){if(Gx)return Wh;Gx=1;var e=ZA(),t=nW(),n=AH(),r=LH(),a=UH(),i=yn(),s=aW(),l=iW(),p=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,b=v.hasOwnProperty;function x(I,y,S,A,W,_){var w=i(I),M=i(y),E=w?m:a(I),P=M?m:a(y);E=E==f?d:E,P=P==f?d:P;var O=E==d,N=P==d,D=E==P;if(D&&s(I)){if(!s(y))return!1;w=!0,O=!1}if(D&&!O)return _||(_=new e),w||l(I)?t(I,y,S,A,W,_):n(I,y,E,S,A,W,_);if(!(S&p)){var T=O&&b.call(I,"__wrapped__"),q=N&&b.call(y,"__wrapped__");if(T||q){var F=T?I.value():I,G=q?y.value():y;return _||(_=new e),W(F,G,S,A,_)}}return D?(_||(_=new e),r(I,y,S,A,W,_)):!1}return Wh=x,Wh}var Mh,Vx;function Cy(){if(Vx)return Mh;Vx=1;var e=GH(),t=Xr();function n(r,a,i,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,i,s,n,l)}return Mh=n,Mh}var _h,Kx;function VH(){if(Kx)return _h;Kx=1;var e=ZA(),t=Cy(),n=1,r=2;function a(i,s,l,p){var f=l.length,m=f,d=!p;if(i==null)return!m;for(i=Object(i);f--;){var v=l[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=l[f];var b=v[0],x=i[b],I=v[1];if(d&&v[2]){if(x===void 0&&!(b in i))return!1}else{var y=new e;if(p)var S=p(x,I,b,i,s,y);if(!(S===void 0?t(I,x,n|r,p,y):S))return!1}}return!0}return _h=a,_h}var Oh,Qx;function lW(){if(Qx)return Oh;Qx=1;var e=ja();function t(n){return n===n&&!e(n)}return Oh=t,Oh}var Ch,Yx;function KH(){if(Yx)return Ch;Yx=1;var e=lW(),t=Qp();function n(r){for(var a=t(r),i=a.length;i--;){var s=a[i],l=r[s];a[i]=[s,l,e(l)]}return a}return Ch=n,Ch}var kh,Xx;function cW(){if(Xx)return kh;Xx=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return kh=e,kh}var Eh,Zx;function QH(){if(Zx)return Eh;Zx=1;var e=VH(),t=KH(),n=cW();function r(a){var i=t(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Eh=r,Eh}var Th,Jx;function YH(){if(Jx)return Th;Jx=1;function e(t,n){return t!=null&&n in Object(t)}return Th=e,Th}var Nh,ew;function XH(){if(ew)return Nh;ew=1;var e=MA(),t=My(),n=yn(),r=_y(),a=Oy(),i=qp();function s(l,p,f){p=e(p,l);for(var m=-1,d=p.length,v=!1;++m<d;){var b=i(p[m]);if(!(v=l!=null&&f(l,b)))break;l=l[b]}return v||++m!=d?v:(d=l==null?0:l.length,!!d&&a(d)&&r(b,d)&&(n(l)||t(l)))}return Nh=s,Nh}var Rh,tw;function ZH(){if(tw)return Rh;tw=1;var e=YH(),t=XH();function n(r,a){return r!=null&&t(r,a,e)}return Rh=n,Rh}var jh,nw;function JH(){if(nw)return jh;nw=1;var e=Cy(),t=_A(),n=ZH(),r=hy(),a=lW(),i=cW(),s=qp(),l=1,p=2;function f(m,d){return r(m)&&a(d)?i(s(m),d):function(v){var b=t(v,m);return b===void 0&&b===d?n(v,m):e(d,b,l|p)}}return jh=f,jh}var Hh,rw;function Ki(){if(rw)return Hh;rw=1;function e(t){return t}return Hh=e,Hh}var Dh,aw;function eD(){if(aw)return Dh;aw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return Dh=e,Dh}var $h,ow;function tD(){if(ow)return $h;ow=1;var e=Iy();function t(n){return function(r){return e(r,n)}}return $h=t,$h}var Lh,iw;function nD(){if(iw)return Lh;iw=1;var e=eD(),t=tD(),n=hy(),r=qp();function a(i){return n(i)?e(r(i)):t(i)}return Lh=a,Lh}var Fh,uw;function Wr(){if(uw)return Fh;uw=1;var e=QH(),t=JH(),n=Ki(),r=yn(),a=nD();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return Fh=i,Fh}var qh,sw;function pW(){if(sw)return qh;sw=1;function e(t,n,r,a){for(var i=t.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(t[s],s,t))return s;return-1}return qh=e,qh}var zh,lw;function rD(){if(lw)return zh;lw=1;function e(t){return t!==t}return zh=e,zh}var Uh,cw;function aD(){if(cw)return Uh;cw=1;function e(t,n,r){for(var a=r-1,i=t.length;++a<i;)if(t[a]===n)return a;return-1}return Uh=e,Uh}var Gh,pw;function oD(){if(pw)return Gh;pw=1;var e=pW(),t=rD(),n=aD();function r(a,i,s){return i===i?n(a,i,s):e(a,t,s)}return Gh=r,Gh}var Vh,fw;function iD(){if(fw)return Vh;fw=1;var e=oD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Vh=t,Vh}var Kh,dw;function uD(){if(dw)return Kh;dw=1;function e(t,n,r){for(var a=-1,i=t==null?0:t.length;++a<i;)if(r(n,t[a]))return!0;return!1}return Kh=e,Kh}var Qh,hw;function sD(){if(hw)return Qh;hw=1;function e(){}return Qh=e,Qh}var Yh,mw;function lD(){if(mw)return Yh;mw=1;var e=sW(),t=sD(),n=Wy(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(i){return new e(i)}:t;return Yh=a,Yh}var Xh,vw;function cD(){if(vw)return Xh;vw=1;var e=JA(),t=iD(),n=uD(),r=tW(),a=lD(),i=Wy(),s=200;function l(p,f,m){var d=-1,v=t,b=p.length,x=!0,I=[],y=I;if(m)x=!1,v=n;else if(b>=s){var S=f?null:a(p);if(S)return i(S);x=!1,v=r,y=new e}else y=f?[]:I;e:for(;++d<b;){var A=p[d],W=f?f(A):A;if(A=m||A!==0?A:0,x&&W===W){for(var _=y.length;_--;)if(y[_]===W)continue e;f&&y.push(W),I.push(A)}else v(y,W,m)||(y!==I&&y.push(W),I.push(A))}return I}return Xh=l,Xh}var Zh,gw;function pD(){if(gw)return Zh;gw=1;var e=Wr(),t=cD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return Zh=n,Zh}var fD=pD();const yw=Xe(fD);function fW(e,t,n){return t===!0?yw(e,n):ke(t)?yw(e,t):e}function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}var dD=["ref"];function bw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bw(Object(n),!0).forEach(function(r){Yp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,hW(r.key),r)}}function mD(e,t,n){return t&&Iw(e.prototype,t),n&&Iw(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vD(e,t,n){return t=$c(t),gD(e,dW()?Reflect.construct(t,n||[],$c(e).constructor):t.apply(e,n))}function gD(e,t){if(t&&(hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yD(e)}function yD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dW=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$c(e)}function bD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kv(e,t)}function Kv(e,t){return Kv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kv(e,t)}function Yp(e,t,n){return t=hW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hW(e){var t=ID(e,"string");return hi(t)=="symbol"?t:t+""}function ID(e,t){if(hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function BD(e,t){if(e==null)return{};var n=xD(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wD(e){return e.value}function PD(e,t){if(j.isValidElement(e))return j.cloneElement(e,t);if(typeof e=="function")return j.createElement(e,t);t.ref;var n=BD(t,dD);return j.createElement(Ay,n)}var Bw=1,Oa=(function(e){function t(){var n;hD(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=vD(this,t,[].concat(a)),Yp(n,"lastBoundingBox",{width:-1,height:-1}),n}return bD(t,e),mD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Bw||Math.abs(a.height-this.lastBoundingBox.height)>Bw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?jr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,l=a.verticalAlign,p=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var b=this.getBBoxSnapshot();d={left:((f||0)-b.width)/2}}else d=s==="right"?{right:p&&p.right||0}:{left:p&&p.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var x=this.getBBoxSnapshot();v={top:((m||0)-x.height)/2}}else v=l==="bottom"?{bottom:p&&p.bottom||0}:{top:p&&p.top||0};return jr(jr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,l=a.height,p=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=jr(jr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(p)),p);return j.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(b){r.wrapperNode=b}},PD(i,jr(jr({},this.props),{},{payload:fW(m,f,wD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=jr(jr({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(Y.PureComponent);Yp(Oa,"displayName","Legend");Yp(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Jh,xw;function SD(){if(xw)return Jh;xw=1;var e=Us(),t=My(),n=yn(),r=e?e.isConcatSpreadable:void 0;function a(i){return n(i)||t(i)||!!(r&&i&&i[r])}return Jh=a,Jh}var em,ww;function mW(){if(ww)return em;ww=1;var e=rW(),t=SD();function n(r,a,i,s,l){var p=-1,f=r.length;for(i||(i=t),l||(l=[]);++p<f;){var m=r[p];a>0&&i(m)?a>1?n(m,a-1,i,s,l):e(l,m):s||(l[l.length]=m)}return l}return em=n,em}var tm,Pw;function AD(){if(Pw)return tm;Pw=1;function e(t){return function(n,r,a){for(var i=-1,s=Object(n),l=a(n),p=l.length;p--;){var f=l[t?p:++i];if(r(s[f],f,s)===!1)break}return n}}return tm=e,tm}var nm,Sw;function WD(){if(Sw)return nm;Sw=1;var e=AD(),t=e();return nm=t,nm}var rm,Aw;function vW(){if(Aw)return rm;Aw=1;var e=WD(),t=Qp();function n(r,a){return r&&e(r,a,t)}return rm=n,rm}var am,Ww;function MD(){if(Ww)return am;Ww=1;var e=Vs();function t(n,r){return function(a,i){if(a==null)return a;if(!e(a))return n(a,i);for(var s=a.length,l=r?s:-1,p=Object(a);(r?l--:++l<s)&&i(p[l],l,p)!==!1;);return a}}return am=t,am}var om,Mw;function ky(){if(Mw)return om;Mw=1;var e=vW(),t=MD(),n=t(e);return om=n,om}var im,_w;function gW(){if(_w)return im;_w=1;var e=ky(),t=Vs();function n(r,a){var i=-1,s=t(r)?Array(r.length):[];return e(r,function(l,p,f){s[++i]=a(l,p,f)}),s}return im=n,im}var um,Ow;function _D(){if(Ow)return um;Ow=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return um=e,um}var sm,Cw;function OD(){if(Cw)return sm;Cw=1;var e=Ui();function t(n,r){if(n!==r){var a=n!==void 0,i=n===null,s=n===n,l=e(n),p=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!l&&n>r||l&&p&&m&&!f&&!d||i&&p&&m||!a&&m||!s)return 1;if(!i&&!l&&!d&&n<r||d&&a&&s&&!i&&!l||f&&a&&s||!p&&s||!m)return-1}return 0}return sm=t,sm}var lm,kw;function CD(){if(kw)return lm;kw=1;var e=OD();function t(n,r,a){for(var i=-1,s=n.criteria,l=r.criteria,p=s.length,f=a.length;++i<p;){var m=e(s[i],l[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return n.index-r.index}return lm=t,lm}var cm,Ew;function kD(){if(Ew)return cm;Ew=1;var e=by(),t=Iy(),n=Wr(),r=gW(),a=_D(),i=oW(),s=CD(),l=Ki(),p=yn();function f(m,d,v){d.length?d=e(d,function(I){return p(I)?function(y){return t(y,I.length===1?I[0]:I)}:I}):d=[l];var b=-1;d=e(d,i(n));var x=r(m,function(I,y,S){var A=e(d,function(W){return W(I)});return{criteria:A,index:++b,value:I}});return a(x,function(I,y){return s(I,y,v)})}return cm=f,cm}var pm,Tw;function ED(){if(Tw)return pm;Tw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return pm=e,pm}var fm,Nw;function TD(){if(Nw)return fm;Nw=1;var e=ED(),t=Math.max;function n(r,a,i){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,p=t(s.length-a,0),f=Array(p);++l<p;)f[l]=s[a+l];l=-1;for(var m=Array(a+1);++l<a;)m[l]=s[l];return m[a]=i(f),e(r,this,m)}}return fm=n,fm}var dm,Rw;function ND(){if(Rw)return dm;Rw=1;function e(t){return function(){return t}}return dm=e,dm}var hm,jw;function yW(){if(jw)return hm;jw=1;var e=Bo(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return hm=t,hm}var mm,Hw;function RD(){if(Hw)return mm;Hw=1;var e=ND(),t=yW(),n=Ki(),r=t?function(a,i){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:n;return mm=r,mm}var vm,Dw;function jD(){if(Dw)return vm;Dw=1;var e=800,t=16,n=Date.now;function r(a){var i=0,s=0;return function(){var l=n(),p=t-(l-s);if(s=l,p>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return vm=r,vm}var gm,$w;function HD(){if($w)return gm;$w=1;var e=RD(),t=jD(),n=t(e);return gm=n,gm}var ym,Lw;function DD(){if(Lw)return ym;Lw=1;var e=Ki(),t=TD(),n=HD();function r(a,i){return n(t(a,i,e),a+"")}return ym=r,ym}var bm,Fw;function Xp(){if(Fw)return bm;Fw=1;var e=vy(),t=Vs(),n=_y(),r=ja();function a(i,s,l){if(!r(l))return!1;var p=typeof s;return(p=="number"?t(l)&&n(s,l.length):p=="string"&&s in l)?e(l[s],i):!1}return bm=a,bm}var Im,qw;function $D(){if(qw)return Im;qw=1;var e=mW(),t=kD(),n=DD(),r=Xp(),a=n(function(i,s){if(i==null)return[];var l=s.length;return l>1&&r(i,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(i,e(s,1),[])});return Im=a,Im}var LD=$D();const Ey=Xe(LD);function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qv.apply(this,arguments)}function FD(e,t){return GD(e)||UD(e,t)||zD(e,t)||qD()}function qD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zD(e,t){if(e){if(typeof e=="string")return zw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zw(e,t)}}function zw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function UD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function GD(e){if(Array.isArray(e))return e}function Uw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Bm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uw(Object(n),!0).forEach(function(r){VD(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VD(e,t,n){return t=KD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KD(e){var t=QD(e,"string");return fs(t)=="symbol"?t:t+""}function QD(e,t){if(fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YD(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var XD=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,i=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,p=t.labelStyle,f=p===void 0?{}:p,m=t.payload,d=t.formatter,v=t.itemSorter,b=t.wrapperClassName,x=t.labelClassName,I=t.label,y=t.labelFormatter,S=t.accessibilityLayer,A=S===void 0?!1:S,W=function(){if(m&&m.length){var T={padding:0,margin:0},q=(v?Ey(m,v):m).map(function(F,G){if(F.type==="none")return null;var Q=Bm({display:"block",paddingTop:4,paddingBottom:4,color:F.color||"#000"},l),V=F.formatter||d||YD,H=F.value,U=F.name,X=H,R=U;if(V&&X!=null&&R!=null){var $=V(H,U,F,G,m);if(Array.isArray($)){var Z=FD($,2);X=Z[0],R=Z[1]}else X=$}return j.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:Q},Rt(R)?j.createElement("span",{className:"recharts-tooltip-item-name"},R):null,Rt(R)?j.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,j.createElement("span",{className:"recharts-tooltip-item-value"},X),j.createElement("span",{className:"recharts-tooltip-item-unit"},F.unit||""))});return j.createElement("ul",{className:"recharts-tooltip-item-list",style:T},q)}return null},_=Bm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=Bm({margin:0},f),M=!Ee(I),E=M?I:"",P=je("recharts-default-tooltip",b),O=je("recharts-tooltip-label",x);M&&y&&m!==void 0&&m!==null&&(E=y(I,m));var N=A?{role:"status","aria-live":"assertive"}:{};return j.createElement("div",Qv({className:P,style:_},N),j.createElement("p",{className:O,style:w},j.isValidElement(E)?E:"".concat(E)),W())};function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}function dc(e,t,n){return t=ZD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZD(e){var t=JD(e,"string");return ds(t)=="symbol"?t:t+""}function JD(e,t){if(ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Lu="recharts-tooltip-wrapper",e$={visibility:"hidden"};function t$(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return je(Lu,dc(dc(dc(dc({},"".concat(Lu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(Lu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(Lu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(Lu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Gw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,l=e.tooltipDimension,p=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var m=n[r]-l-a,d=n[r]+a;if(t[r])return s[r]?m:d;if(s[r]){var v=m,b=p[r];return v<b?Math.max(d,p[r]):Math.max(m,p[r])}var x=d+l,I=p[r]+f;return x>I?Math.max(m,p[r]):Math.max(d,p[r])}function n$(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function r$(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,p=e.viewBox,f,m,d;return s.height>0&&s.width>0&&n?(m=Gw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:p,viewBoxDimension:p.width}),d=Gw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:p,viewBoxDimension:p.height}),f=n$({translateX:m,translateY:d,useTranslate3d:l})):f=e$,{cssProperties:f,cssClasses:t$({translateX:m,translateY:d,coordinate:n})}}function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function Vw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Kw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vw(Object(n),!0).forEach(function(r){Xv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,IW(r.key),r)}}function i$(e,t,n){return t&&o$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function u$(e,t,n){return t=Lc(t),s$(e,bW()?Reflect.construct(t,n||[],Lc(e).constructor):t.apply(e,n))}function s$(e,t){if(t&&(mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l$(e)}function l$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bW=function(){return!!e})()}function Lc(e){return Lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lc(e)}function c$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yv(e,t)}function Yv(e,t){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(e,t)}function Xv(e,t,n){return t=IW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IW(e){var t=p$(e,"string");return mi(t)=="symbol"?t:t+""}function p$(e,t){if(mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Qw=1,f$=(function(e){function t(){var n;a$(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=u$(this,t,[].concat(a)),Xv(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),Xv(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,p,f,m;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(p=n.props.coordinate)===null||p===void 0?void 0:p.x)!==null&&l!==void 0?l:0,y:(f=(m=n.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),n}return c$(t,e),i$(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Qw||Math.abs(r.height-this.state.lastBoundingBox.height)>Qw)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,b=a.offset,x=a.position,I=a.reverseDirection,y=a.useTranslate3d,S=a.viewBox,A=a.wrapperStyle,W=r$({allowEscapeViewBox:s,coordinate:m,offsetTopLeft:b,position:x,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:y,viewBox:S}),_=W.cssClasses,w=W.cssProperties,M=Kw(Kw({transition:v&&i?"transform ".concat(l,"ms ").concat(p):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},A);return j.createElement("div",{tabIndex:-1,className:_,style:M,ref:function(P){r.wrapperNode=P}},f)}}])})(Y.PureComponent),d$=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:d$()};function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function Yw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yw(Object(n),!0).forEach(function(r){Ty(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,xW(r.key),r)}}function v$(e,t,n){return t&&m$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function g$(e,t,n){return t=Fc(t),y$(e,BW()?Reflect.construct(t,n||[],Fc(e).constructor):t.apply(e,n))}function y$(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b$(e)}function b$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function BW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(BW=function(){return!!e})()}function Fc(e){return Fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Fc(e)}function I$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zv(e,t)}function Zv(e,t){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,t)}function Ty(e,t,n){return t=xW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xW(e){var t=B$(e,"string");return vi(t)=="symbol"?t:t+""}function B$(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function x$(e){return e.dataKey}function w$(e,t){return j.isValidElement(e)?j.cloneElement(e,t):typeof e=="function"?j.createElement(e,t):j.createElement(XD,t)}var An=(function(e){function t(){return h$(this,t),g$(this,t,arguments)}return I$(t,e),v$(t,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,b=a.offset,x=a.payload,I=a.payloadUniqBy,y=a.position,S=a.reverseDirection,A=a.useTranslate3d,W=a.viewBox,_=a.wrapperStyle,w=x??[];d&&w.length&&(w=fW(x.filter(function(E){return E.value!=null&&(E.hide!==!0||r.props.includeHidden)}),I,x$));var M=w.length>0;return j.createElement(f$,{allowEscapeViewBox:s,animationDuration:l,animationEasing:p,isAnimationActive:v,active:i,coordinate:m,hasPayload:M,offset:b,position:y,reverseDirection:S,useTranslate3d:A,viewBox:W,wrapperStyle:_},w$(f,Xw(Xw({},this.props),{},{payload:w})))}}])})(Y.PureComponent);Ty(An,"displayName","Tooltip");Ty(An,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var xm,Zw;function P$(){if(Zw)return xm;Zw=1;var e=Ar(),t=function(){return e.Date.now()};return xm=t,xm}var wm,Jw;function S$(){if(Jw)return wm;Jw=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return wm=t,wm}var Pm,eP;function A$(){if(eP)return Pm;eP=1;var e=S$(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Pm=n,Pm}var Sm,tP;function wW(){if(tP)return Sm;tP=1;var e=A$(),t=ja(),n=Ui(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function p(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=t(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||s.test(f)?l(f.slice(2),d?2:8):a.test(f)?r:+f}return Sm=p,Sm}var Am,nP;function W$(){if(nP)return Am;nP=1;var e=ja(),t=P$(),n=wW(),r="Expected a function",a=Math.max,i=Math.min;function s(l,p,f){var m,d,v,b,x,I,y=0,S=!1,A=!1,W=!0;if(typeof l!="function")throw new TypeError(r);p=n(p)||0,e(f)&&(S=!!f.leading,A="maxWait"in f,v=A?a(n(f.maxWait)||0,p):v,W="trailing"in f?!!f.trailing:W);function _(q){var F=m,G=d;return m=d=void 0,y=q,b=l.apply(G,F),b}function w(q){return y=q,x=setTimeout(P,p),S?_(q):b}function M(q){var F=q-I,G=q-y,Q=p-F;return A?i(Q,v-G):Q}function E(q){var F=q-I,G=q-y;return I===void 0||F>=p||F<0||A&&G>=v}function P(){var q=t();if(E(q))return O(q);x=setTimeout(P,M(q))}function O(q){return x=void 0,W&&m?_(q):(m=d=void 0,b)}function N(){x!==void 0&&clearTimeout(x),y=0,m=I=d=x=void 0}function D(){return x===void 0?b:O(t())}function T(){var q=t(),F=E(q);if(m=arguments,d=this,I=q,F){if(x===void 0)return w(I);if(A)return clearTimeout(x),x=setTimeout(P,p),_(I)}return x===void 0&&(x=setTimeout(P,p)),b}return T.cancel=N,T.flush=D,T}return Am=s,Am}var Wm,rP;function M$(){if(rP)return Wm;rP=1;var e=W$(),t=ja(),n="Expected a function";function r(a,i,s){var l=!0,p=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,p="trailing"in s?!!s.trailing:p),e(a,i,{leading:l,maxWait:i,trailing:p})}return Wm=r,Wm}var _$=M$();const PW=Xe(_$);function hs(e){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hs(e)}function aP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function hc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?aP(Object(n),!0).forEach(function(r){O$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O$(e,t,n){return t=C$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C$(e){var t=k$(e,"string");return hs(t)=="symbol"?t:t+""}function k$(e,t){if(hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E$(e,t){return j$(e)||R$(e,t)||N$(e,t)||T$()}function T$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N$(e,t){if(e){if(typeof e=="string")return oP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oP(e,t)}}function oP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function j$(e){if(Array.isArray(e))return e}var Ny=Y.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,l=e.height,p=l===void 0?"100%":l,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,b=e.children,x=e.debounce,I=x===void 0?0:x,y=e.id,S=e.className,A=e.onResize,W=e.style,_=W===void 0?{}:W,w=Y.useRef(null),M=Y.useRef();M.current=A,Y.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var E=Y.useState({containerWidth:a.width,containerHeight:a.height}),P=E$(E,2),O=P[0],N=P[1],D=Y.useCallback(function(q,F){N(function(G){var Q=Math.round(q),V=Math.round(F);return G.containerWidth===Q&&G.containerHeight===V?G:{containerWidth:Q,containerHeight:V}})},[]);Y.useEffect(function(){var q=function(U){var X,R=U[0].contentRect,$=R.width,Z=R.height;D($,Z),(X=M.current)===null||X===void 0||X.call(M,$,Z)};I>0&&(q=PW(q,I,{trailing:!0,leading:!1}));var F=new ResizeObserver(q),G=w.current.getBoundingClientRect(),Q=G.width,V=G.height;return D(Q,V),F.observe(w.current),function(){F.disconnect()}},[D,I]);var T=Y.useMemo(function(){var q=O.containerWidth,F=O.containerHeight;if(q<0||F<0)return null;ur(lo(s)||lo(p),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,p),ur(!n||n>0,"The aspect(%s) must be greater than zero.",n);var G=lo(s)?q:s,Q=lo(p)?F:p;n&&n>0&&(G?Q=G/n:Q&&(G=Q*n),v&&Q>v&&(Q=v)),ur(G>0||Q>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,G,Q,s,p,m,d,n);var V=!Array.isArray(b)&&Ur(b.type).endsWith("Chart");return j.Children.map(b,function(H){return j.isValidElement(H)?Y.cloneElement(H,hc({width:G,height:Q},V?{style:hc({height:"100%",width:"100%",maxHeight:Q,maxWidth:G},H.props.style)}:{})):H})},[n,b,p,v,d,m,O,s]);return j.createElement("div",{id:y?"".concat(y):void 0,className:je("recharts-responsive-container",S),style:hc(hc({},_),{},{width:s,height:p,minWidth:m,minHeight:d,maxHeight:v}),ref:w},T)}),Ks=function(t){return null};Ks.displayName="Cell";function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function iP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iP(Object(n),!0).forEach(function(r){H$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H$(e,t,n){return t=D$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D$(e){var t=$$(e,"string");return ms(t)=="symbol"?t:t+""}function $$(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Jo={widthCache:{},cacheCount:0},L$=2e3,F$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},uP="recharts_measurement_span";function q$(e){var t=Jv({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=q$(n),a=JSON.stringify({text:t,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(uP);i||(i=document.createElement("span"),i.setAttribute("id",uP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=Jv(Jv({},F$),r);Object.assign(i.style,s),i.textContent="".concat(t);var l=i.getBoundingClientRect(),p={width:l.width,height:l.height};return Jo.widthCache[a]=p,++Jo.cacheCount>L$&&(Jo.cacheCount=0,Jo.widthCache={}),p}catch{return{width:0,height:0}}},z$=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function qc(e,t){return K$(e)||V$(e,t)||G$(e,t)||U$()}function U$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G$(e,t){if(e){if(typeof e=="string")return sP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sP(e,t)}}function sP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function K$(e){if(Array.isArray(e))return e}function Q$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X$(r.key),r)}}function Y$(e,t,n){return t&&lP(e.prototype,t),n&&lP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function X$(e){var t=Z$(e,"string");return vs(t)=="symbol"?t:t+""}function Z$(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var cP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,pP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,J$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,eL=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,SW={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},tL=Object.keys(SW),ri="NaN";function nL(e,t){return e*SW[t]}var mc=(function(){function e(t,n){Q$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!J$.test(n)&&(this.num=NaN,this.unit=""),tL.includes(n)&&(this.num=nL(t,n),this.unit="px")}return Y$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=eL.exec(n))!==null&&r!==void 0?r:[],i=qc(a,3),s=i[1],l=i[2];return new e(parseFloat(s),l??"")}}])})();function AW(e){if(e.includes(ri))return ri;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=cP.exec(t))!==null&&n!==void 0?n:[],a=qc(r,4),i=a[1],s=a[2],l=a[3],p=mc.parse(i??""),f=mc.parse(l??""),m=s==="*"?p.multiply(f):p.divide(f);if(m.isNaN())return ri;t=t.replace(cP,m.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,v=(d=pP.exec(t))!==null&&d!==void 0?d:[],b=qc(v,4),x=b[1],I=b[2],y=b[3],S=mc.parse(x??""),A=mc.parse(y??""),W=I==="+"?S.add(A):S.subtract(A);if(W.isNaN())return ri;t=t.replace(pP,W.toString())}return t}var fP=/\(([^()]*)\)/;function rL(e){for(var t=e;t.includes("(");){var n=fP.exec(t),r=qc(n,2),a=r[1];t=t.replace(fP,AW(a))}return t}function aL(e){var t=e.replace(/\s+/g,"");return t=rL(t),t=AW(t),t}function oL(e){try{return aL(e)}catch{return ri}}function Mm(e){var t=oL(e.slice(5,-1));return t===ri?"":t}var iL=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],uL=["dx","dy","angle","className","breakAll"];function eg(){return eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eg.apply(this,arguments)}function dP(e,t){if(e==null)return{};var n=sL(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function hP(e,t){return fL(e)||pL(e,t)||cL(e,t)||lL()}function lL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cL(e,t){if(e){if(typeof e=="string")return mP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mP(e,t)}}function mP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function fL(e){if(Array.isArray(e))return e}var WW=/[ \f\n\r\t\v\u2028\u2029]+/,MW=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var i=[];Ee(n)||(r?i=n.toString().split(""):i=n.toString().split(WW));var s=i.map(function(p){return{word:p,width:Ju(p,a).width}}),l=r?0:Ju(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},dL=function(t,n,r,a,i){var s=t.maxLines,l=t.children,p=t.style,f=t.breakAll,m=le(s),d=l,v=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G.reduce(function(Q,V){var H=V.word,U=V.width,X=Q[Q.length-1];if(X&&(a==null||i||X.width+U+r<Number(a)))X.words.push(H),X.width+=U+r;else{var R={words:[H],width:U};Q.push(R)}return Q},[])},b=v(n),x=function(G){return G.reduce(function(Q,V){return Q.width>V.width?Q:V})};if(!m)return b;for(var I="…",y=function(G){var Q=d.slice(0,G),V=MW({breakAll:f,style:p,children:Q+I}).wordsWithComputedWidth,H=v(V),U=H.length>s||x(H).width>Number(a);return[U,H]},S=0,A=d.length-1,W=0,_;S<=A&&W<=d.length-1;){var w=Math.floor((S+A)/2),M=w-1,E=y(M),P=hP(E,2),O=P[0],N=P[1],D=y(w),T=hP(D,1),q=T[0];if(!O&&!q&&(S=w+1),O&&q&&(A=w-1),!O&&q){_=N;break}W++}return _||b},vP=function(t){var n=Ee(t)?[]:t.toString().split(WW);return[{words:n}]},hL=function(t){var n=t.width,r=t.scaleToFit,a=t.children,i=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var p,f,m=MW({breakAll:s,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;p=d,f=v}else return vP(a);return dL({breakAll:s,children:a,maxLines:l,style:i},p,f,n,r)}return vP(a)},gP="#808080",go=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,p=t.capHeight,f=p===void 0?"0.71em":p,m=t.scaleToFit,d=m===void 0?!1:m,v=t.textAnchor,b=v===void 0?"start":v,x=t.verticalAnchor,I=x===void 0?"end":x,y=t.fill,S=y===void 0?gP:y,A=dP(t,iL),W=Y.useMemo(function(){return hL({breakAll:A.breakAll,children:A.children,maxLines:A.maxLines,scaleToFit:d,style:A.style,width:A.width})},[A.breakAll,A.children,A.maxLines,d,A.style,A.width]),_=A.dx,w=A.dy,M=A.angle,E=A.className,P=A.breakAll,O=dP(A,uL);if(!Rt(r)||!Rt(i))return null;var N=r+(le(_)?_:0),D=i+(le(w)?w:0),T;switch(I){case"start":T=Mm("calc(".concat(f,")"));break;case"middle":T=Mm("calc(".concat((W.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:T=Mm("calc(".concat(W.length-1," * -").concat(l,")"));break}var q=[];if(d){var F=W[0].width,G=A.width;q.push("scale(".concat((le(G)?G/F:1)/F,")"))}return M&&q.push("rotate(".concat(M,", ").concat(N,", ").concat(D,")")),q.length&&(O.transform=q.join(" ")),j.createElement("text",eg({},Ae(O,!0),{x:N,y:D,className:je("recharts-text",E),textAnchor:b,fill:S.includes("url")?gP:S}),W.map(function(Q,V){var H=Q.words.join(P?"":" ");return j.createElement("tspan",{x:N,dy:V===0?T:l,key:"".concat(H,"-").concat(V)},H)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function mL(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Ry(e){let t,n,r;e.length!==2?(t=Ca,n=(l,p)=>Ca(e(l),p),r=(l,p)=>e(l)-p):(t=e===Ca||e===mL?e:vL,n=e,r=e);function a(l,p,f=0,m=l.length){if(f<m){if(t(p,p)!==0)return m;do{const d=f+m>>>1;n(l[d],p)<0?f=d+1:m=d}while(f<m)}return f}function i(l,p,f=0,m=l.length){if(f<m){if(t(p,p)!==0)return m;do{const d=f+m>>>1;n(l[d],p)<=0?f=d+1:m=d}while(f<m)}return f}function s(l,p,f=0,m=l.length){const d=a(l,p,f,m-1);return d>f&&r(l[d-1],p)>-r(l[d],p)?d-1:d}return{left:a,center:s,right:i}}function vL(){return 0}function _W(e){return e===null?NaN:+e}function*gL(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const yL=Ry(Ca),Qs=yL.right;Ry(_W).center;class yP extends Map{constructor(t,n=BL){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(bP(this,t))}has(t){return super.has(bP(this,t))}set(t,n){return super.set(bL(this,t),n)}delete(t){return super.delete(IL(this,t))}}function bP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function bL({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function IL({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function BL(e){return e!==null&&typeof e=="object"?e.valueOf():e}function xL(e=Ca){if(e===Ca)return OW;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function OW(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const wL=Math.sqrt(50),PL=Math.sqrt(10),SL=Math.sqrt(2);function zc(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=wL?10:i>=PL?5:i>=SL?2:1;let l,p,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),p=Math.round(t*f),l/f<e&&++l,p/f>t&&--p,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),p=Math.round(t/f),l*f<e&&++l,p*f>t&&--p),p<l&&.5<=n&&n<2?zc(e,t,n*2):[l,p,f]}function tg(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?zc(t,e,n):zc(e,t,n);if(!(i>=a))return[];const l=i-a+1,p=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)p[f]=(i-f)/-s;else for(let f=0;f<l;++f)p[f]=(i-f)*s;else if(s<0)for(let f=0;f<l;++f)p[f]=(a+f)/-s;else for(let f=0;f<l;++f)p[f]=(a+f)*s;return p}function ng(e,t,n){return t=+t,e=+e,n=+n,zc(e,t,n)[2]}function rg(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?ng(t,e,n):ng(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function IP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function BP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function CW(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?OW:xL(a);r>n;){if(r-n>600){const p=r-n+1,f=t-n+1,m=Math.log(p),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(p-d)/p)*(f-p/2<0?-1:1),b=Math.max(n,Math.floor(t-f*d/p+v)),x=Math.min(r,Math.floor(t+(p-f)*d/p+v));CW(e,t,b,x,a)}const i=e[t];let s=n,l=r;for(Fu(e,n,t),a(e[r],i)>0&&Fu(e,n,r);s<l;){for(Fu(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?Fu(e,n,l):(++l,Fu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function Fu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function AL(e,t,n){if(e=Float64Array.from(gL(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return BP(e);if(t>=1)return IP(e);var r,a=(r-1)*t,i=Math.floor(a),s=IP(CW(e,i).subarray(0,i+1)),l=BP(e.subarray(i+1));return s+(l-s)*(a-i)}}function WL(e,t,n=_W){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function ML(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function Qn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ag=Symbol("implicit");function jy(){var e=new yP,t=[],n=[],r=ag;function a(i){let s=e.get(i);if(s===void 0){if(r!==ag)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new yP;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return jy(t,n).unknown(r)},Qn.apply(a,arguments),a}function gs(){var e=jy().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,p=0,f=0,m=.5;delete e.unknown;function d(){var v=t().length,b=a<r,x=b?a:r,I=b?r:a;i=(I-x)/Math.max(1,v-p+f*2),l&&(i=Math.floor(i)),x+=(I-x-i*(v-p))*m,s=i*(1-p),l&&(x=Math.round(x),s=Math.round(s));var y=ML(v).map(function(S){return x+i*S});return n(b?y.reverse():y)}return e.domain=function(v){return arguments.length?(t(v),d()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(l=!!v,d()):l},e.padding=function(v){return arguments.length?(p=Math.min(1,f=+v),d()):p},e.paddingInner=function(v){return arguments.length?(p=Math.min(1,v),d()):p},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return gs(t(),[r,a]).round(l).paddingInner(p).paddingOuter(f).align(m)},Qn.apply(d(),arguments)}function kW(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return kW(t())},e}function es(){return kW(gs.apply(null,arguments).paddingInner(1))}function Hy(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function EW(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Ys(){}var ys=.7,Uc=1/ys,li="\\s*([+-]?\\d+)\\s*",bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_L=/^#([0-9a-f]{3,8})$/,OL=new RegExp(`^rgb\\(${li},${li},${li}\\)$`),CL=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),kL=new RegExp(`^rgba\\(${li},${li},${li},${bs}\\)$`),EL=new RegExp(`^rgba\\(${xr},${xr},${xr},${bs}\\)$`),TL=new RegExp(`^hsl\\(${bs},${xr},${xr}\\)$`),NL=new RegExp(`^hsla\\(${bs},${xr},${xr},${bs}\\)$`),xP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Hy(Ys,Is,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:wP,formatHex:wP,formatHex8:RL,formatHsl:jL,formatRgb:PP,toString:PP});function wP(){return this.rgb().formatHex()}function RL(){return this.rgb().formatHex8()}function jL(){return TW(this).formatHsl()}function PP(){return this.rgb().formatRgb()}function Is(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=_L.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?SP(t):n===3?new gn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?vc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?vc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=OL.exec(e))?new gn(t[1],t[2],t[3],1):(t=CL.exec(e))?new gn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=kL.exec(e))?vc(t[1],t[2],t[3],t[4]):(t=EL.exec(e))?vc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=TL.exec(e))?MP(t[1],t[2]/100,t[3]/100,1):(t=NL.exec(e))?MP(t[1],t[2]/100,t[3]/100,t[4]):xP.hasOwnProperty(e)?SP(xP[e]):e==="transparent"?new gn(NaN,NaN,NaN,0):null}function SP(e){return new gn(e>>16&255,e>>8&255,e&255,1)}function vc(e,t,n,r){return r<=0&&(e=t=n=NaN),new gn(e,t,n,r)}function HL(e){return e instanceof Ys||(e=Is(e)),e?(e=e.rgb(),new gn(e.r,e.g,e.b,e.opacity)):new gn}function og(e,t,n,r){return arguments.length===1?HL(e):new gn(e,t,n,r??1)}function gn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Hy(gn,og,EW(Ys,{brighter(e){return e=e==null?Uc:Math.pow(Uc,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ys:Math.pow(ys,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gn(mo(this.r),mo(this.g),mo(this.b),Gc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:AP,formatHex:AP,formatHex8:DL,formatRgb:WP,toString:WP}));function AP(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function DL(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function WP(){const e=Gc(this.opacity);return`${e===1?"rgb(":"rgba("}${mo(this.r)}, ${mo(this.g)}, ${mo(this.b)}${e===1?")":`, ${e})`}`}function Gc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function mo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=mo(e),(e<16?"0":"")+e.toString(16)}function MP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ir(e,t,n,r)}function TW(e){if(e instanceof ir)return new ir(e.h,e.s,e.l,e.opacity);if(e instanceof Ys||(e=Is(e)),!e)return new ir;if(e instanceof ir)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,p=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=p<.5?i+a:2-i-a,s*=60):l=p>0&&p<1?0:s,new ir(s,l,p,e.opacity)}function $L(e,t,n,r){return arguments.length===1?TW(e):new ir(e,t,n,r??1)}function ir(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Hy(ir,$L,EW(Ys,{brighter(e){return e=e==null?Uc:Math.pow(Uc,e),new ir(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ys:Math.pow(ys,e),new ir(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new gn(_m(e>=240?e-240:e+120,a,r),_m(e,a,r),_m(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new ir(_P(this.h),gc(this.s),gc(this.l),Gc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Gc(this.opacity);return`${e===1?"hsl(":"hsla("}${_P(this.h)}, ${gc(this.s)*100}%, ${gc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function _P(e){return e=(e||0)%360,e<0?e+360:e}function gc(e){return Math.max(0,Math.min(1,e||0))}function _m(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Dy=e=>()=>e;function LL(e,t){return function(n){return e+n*t}}function FL(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function qL(e){return(e=+e)==1?NW:function(t,n){return n-t?FL(t,n,e):Dy(isNaN(t)?n:t)}}function NW(e,t){var n=t-e;return n?LL(e,n):Dy(isNaN(e)?t:e)}const OP=(function e(t){var n=qL(t);function r(a,i){var s=n((a=og(a)).r,(i=og(i)).r),l=n(a.g,i.g),p=n(a.b,i.b),f=NW(a.opacity,i.opacity);return function(m){return a.r=s(m),a.g=l(m),a.b=p(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function zL(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function UL(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function GL(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=Qi(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function VL(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Vc(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function KL(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Qi(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var ig=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Om=new RegExp(ig.source,"g");function QL(e){return function(){return e}}function YL(e){return function(t){return e(t)+""}}function XL(e,t){var n=ig.lastIndex=Om.lastIndex=0,r,a,i,s=-1,l=[],p=[];for(e=e+"",t=t+"";(r=ig.exec(e))&&(a=Om.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,p.push({i:s,x:Vc(r,a)})),n=Om.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?p[0]?YL(p[0].x):QL(t):(t=p.length,function(f){for(var m=0,d;m<t;++m)l[(d=p[m]).i]=d.x(f);return l.join("")})}function Qi(e,t){var n=typeof t,r;return t==null||n==="boolean"?Dy(t):(n==="number"?Vc:n==="string"?(r=Is(t))?(t=r,OP):XL:t instanceof Is?OP:t instanceof Date?VL:UL(t)?zL:Array.isArray(t)?GL:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?KL:Vc)(e,t)}function $y(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ZL(e,t){t===void 0&&(t=e,e=Qi);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function JL(e){return function(){return e}}function Kc(e){return+e}var CP=[0,1];function un(e){return e}function ug(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:JL(isNaN(t)?NaN:.5)}function e5(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function t5(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=ug(a,r),i=n(s,i)):(r=ug(r,a),i=n(i,s)),function(l){return i(r(l))}}function n5(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=ug(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var p=Qs(e,l,1,r)-1;return i[p](a[p](l))}}function Xs(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Zp(){var e=CP,t=CP,n=Qi,r,a,i,s=un,l,p,f;function m(){var v=Math.min(e.length,t.length);return s!==un&&(s=e5(e[0],e[v-1])),l=v>2?n5:t5,p=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(p||(p=l(e.map(r),t,n)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=l(t,e.map(r),Vc)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Kc),m()):e.slice()},d.range=function(v){return arguments.length?(t=Array.from(v),m()):t.slice()},d.rangeRound=function(v){return t=Array.from(v),n=$y,m()},d.clamp=function(v){return arguments.length?(s=v?!0:un,m()):s!==un},d.interpolate=function(v){return arguments.length?(n=v,m()):n},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,b){return r=v,a=b,m()}}function Ly(){return Zp()(un,un)}function r5(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Qc(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function gi(e){return e=Qc(Math.abs(e)),e?e[1]:NaN}function a5(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],p=0;a>0&&l>0&&(p+l+1>r&&(l=Math.max(1,r-p)),i.push(n.substring(a-=l,a+l)),!((p+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function o5(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var i5=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Bs(e){if(!(t=i5.exec(e)))throw new Error("invalid format: "+e);var t;return new Fy({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Bs.prototype=Fy.prototype;function Fy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Fy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function u5(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Yc;function s5(e,t){var n=Qc(e,t);if(!n)return Yc=void 0,e.toPrecision(t);var r=n[0],a=n[1],i=a-(Yc=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Qc(e,Math.max(0,t+i-1))[0]}function kP(e,t){var n=Qc(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const EP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:r5,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>kP(e*100,t),r:kP,s:s5,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function TP(e){return e}var NP=Array.prototype.map,RP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function l5(e){var t=e.grouping===void 0||e.thousands===void 0?TP:a5(NP.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?TP:o5(NP.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",p=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=Bs(d);var b=d.fill,x=d.align,I=d.sign,y=d.symbol,S=d.zero,A=d.width,W=d.comma,_=d.precision,w=d.trim,M=d.type;M==="n"?(W=!0,M="g"):EP[M]||(_===void 0&&(_=12),w=!0,M="g"),(S||b==="0"&&x==="=")&&(S=!0,b="0",x="=");var E=(v&&v.prefix!==void 0?v.prefix:"")+(y==="$"?n:y==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():""),P=(y==="$"?r:/[%p]/.test(M)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),O=EP[M],N=/[defgprs%]/.test(M);_=_===void 0?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function D(T){var q=E,F=P,G,Q,V;if(M==="c")F=O(T)+F,T="";else{T=+T;var H=T<0||1/T<0;if(T=isNaN(T)?p:O(Math.abs(T),_),w&&(T=u5(T)),H&&+T==0&&I!=="+"&&(H=!1),q=(H?I==="("?I:l:I==="-"||I==="("?"":I)+q,F=(M==="s"&&!isNaN(T)&&Yc!==void 0?RP[8+Yc/3]:"")+F+(H&&I==="("?")":""),N){for(G=-1,Q=T.length;++G<Q;)if(V=T.charCodeAt(G),48>V||V>57){F=(V===46?a+T.slice(G+1):T.slice(G))+F,T=T.slice(0,G);break}}}W&&!S&&(T=t(T,1/0));var U=q.length+T.length+F.length,X=U<A?new Array(A-U+1).join(b):"";switch(W&&S&&(T=t(X+T,X.length?A-F.length:1/0),X=""),x){case"<":T=q+T+F+X;break;case"=":T=q+X+T+F;break;case"^":T=X.slice(0,U=X.length>>1)+q+T+F+X.slice(U);break;default:T=X+q+T+F;break}return i(T)}return D.toString=function(){return d+""},D}function m(d,v){var b=Math.max(-8,Math.min(8,Math.floor(gi(v)/3)))*3,x=Math.pow(10,-b),I=f((d=Bs(d),d.type="f",d),{suffix:RP[8+b/3]});return function(y){return I(x*y)}}return{format:f,formatPrefix:m}}var yc,qy,RW;c5({thousands:",",grouping:[3],currency:["$",""]});function c5(e){return yc=l5(e),qy=yc.format,RW=yc.formatPrefix,yc}function p5(e){return Math.max(0,-gi(Math.abs(e)))}function f5(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(gi(t)/3)))*3-gi(Math.abs(e)))}function d5(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,gi(t)-gi(e))+1}function jW(e,t,n,r){var a=rg(e,t,n),i;switch(r=Bs(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=f5(a,s))&&(r.precision=i),RW(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=d5(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=p5(a))&&(r.precision=i-(r.type==="%")*2);break}}return qy(r)}function Da(e){var t=e.domain;return e.ticks=function(n){var r=t();return tg(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return jW(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],p,f,m=10;for(l<s&&(f=s,s=l,l=f,f=a,a=i,i=f);m-- >0;){if(f=ng(s,l,n),f===p)return r[a]=s,r[i]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;p=f}return e},e}function Xc(){var e=Ly();return e.copy=function(){return Xs(e,Xc())},Qn.apply(e,arguments),Da(e)}function HW(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Kc),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return HW(e).unknown(t)},e=arguments.length?Array.from(e,Kc):[0,1],Da(n)}function DW(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function jP(e){return Math.log(e)}function HP(e){return Math.exp(e)}function h5(e){return-Math.log(-e)}function m5(e){return-Math.exp(-e)}function v5(e){return isFinite(e)?+("1e"+e):e<0?0:e}function g5(e){return e===10?v5:e===Math.E?Math.exp:t=>Math.pow(e,t)}function y5(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function DP(e){return(t,n)=>-e(-t,n)}function zy(e){const t=e(jP,HP),n=t.domain;let r=10,a,i;function s(){return a=y5(r),i=g5(r),n()[0]<0?(a=DP(a),i=DP(i),e(h5,m5)):e(jP,HP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const p=n();let f=p[0],m=p[p.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),b=a(m),x,I;const y=l==null?10:+l;let S=[];if(!(r%1)&&b-v<y){if(v=Math.floor(v),b=Math.ceil(b),f>0){for(;v<=b;++v)for(x=1;x<r;++x)if(I=v<0?x/i(-v):x*i(v),!(I<f)){if(I>m)break;S.push(I)}}else for(;v<=b;++v)for(x=r-1;x>=1;--x)if(I=v>0?x/i(-v):x*i(v),!(I<f)){if(I>m)break;S.push(I)}S.length*2<y&&(S=tg(f,m,y))}else S=tg(v,b,Math.min(b-v,y)).map(i);return d?S.reverse():S},t.tickFormat=(l,p)=>{if(l==null&&(l=10),p==null&&(p=r===10?"s":","),typeof p!="function"&&(!(r%1)&&(p=Bs(p)).precision==null&&(p.trim=!0),p=qy(p)),l===1/0)return p;const f=Math.max(1,r*l/t.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?p(m):""}},t.nice=()=>n(DW(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function $W(){const e=zy(Zp()).domain([1,10]);return e.copy=()=>Xs(e,$W()).base(e.base()),Qn.apply(e,arguments),e}function $P(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function LP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Uy(e){var t=1,n=e($P(t),LP(t));return n.constant=function(r){return arguments.length?e($P(t=+r),LP(t)):t},Da(n)}function LW(){var e=Uy(Zp());return e.copy=function(){return Xs(e,LW()).constant(e.constant())},Qn.apply(e,arguments)}function FP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function b5(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function I5(e){return e<0?-e*e:e*e}function Gy(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(b5,I5):e(FP(n),FP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Da(t)}function Vy(){var e=Gy(Zp());return e.copy=function(){return Xs(e,Vy()).exponent(e.exponent())},Qn.apply(e,arguments),e}function B5(){return Vy.apply(null,arguments).exponent(.5)}function qP(e){return Math.sign(e)*e*e}function x5(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function FW(){var e=Ly(),t=[0,1],n=!1,r;function a(i){var s=x5(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(qP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,Kc)).map(qP)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return FW(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Qn.apply(a,arguments),Da(a)}function qW(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=WL(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[Qs(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return qW().domain(e).range(t).unknown(r)},Qn.apply(i,arguments)}function zW(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(p){return p!=null&&p<=p?a[Qs(r,p,0,n)]:i}function l(){var p=-1;for(r=new Array(n);++p<n;)r[p]=((p+1)*t-(p-n)*e)/(n+1);return s}return s.domain=function(p){return arguments.length?([e,t]=p,e=+e,t=+t,l()):[e,t]},s.range=function(p){return arguments.length?(n=(a=Array.from(p)).length-1,l()):a.slice()},s.invertExtent=function(p){var f=a.indexOf(p);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(p){return arguments.length&&(i=p),s},s.thresholds=function(){return r.slice()},s.copy=function(){return zW().domain([e,t]).range(a).unknown(i)},Qn.apply(Da(s),arguments)}function UW(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[Qs(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return UW().domain(e).range(t).unknown(n)},Qn.apply(a,arguments)}const Cm=new Date,km=new Date;function jt(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const p=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return p;let f;do p.push(f=new Date(+i)),t(i,l),e(i);while(f<i&&i<s);return p},a.filter=i=>jt(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(Cm.setTime(+i),km.setTime(+s),e(Cm),e(km),Math.floor(n(Cm,km))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const Zc=jt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Zc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?jt(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Zc);Zc.range;const $r=1e3,Gn=$r*60,Lr=Gn*60,Vr=Lr*24,Ky=Vr*7,zP=Vr*30,Em=Vr*365,po=jt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());po.range;const Qy=jt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Gn)},(e,t)=>(t-e)/Gn,e=>e.getMinutes());Qy.range;const Yy=jt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Gn)},(e,t)=>(t-e)/Gn,e=>e.getUTCMinutes());Yy.range;const Xy=jt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Gn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());Xy.range;const Zy=jt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());Zy.range;const Zs=jt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Gn)/Vr,e=>e.getDate()-1);Zs.range;const Jp=jt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Vr,e=>e.getUTCDate()-1);Jp.range;const GW=jt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Vr,e=>Math.floor(e/Vr));GW.range;function xo(e){return jt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Gn)/Ky)}const e0=xo(0),Jc=xo(1),w5=xo(2),P5=xo(3),yi=xo(4),S5=xo(5),A5=xo(6);e0.range;Jc.range;w5.range;P5.range;yi.range;S5.range;A5.range;function wo(e){return jt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Ky)}const t0=wo(0),ep=wo(1),W5=wo(2),M5=wo(3),bi=wo(4),_5=wo(5),O5=wo(6);t0.range;ep.range;W5.range;M5.range;bi.range;_5.range;O5.range;const Jy=jt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Jy.range;const eb=jt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());eb.range;const Kr=jt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Qr=jt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Qr.range;function VW(e,t,n,r,a,i){const s=[[po,1,$r],[po,5,5*$r],[po,15,15*$r],[po,30,30*$r],[i,1,Gn],[i,5,5*Gn],[i,15,15*Gn],[i,30,30*Gn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Vr],[r,2,2*Vr],[n,1,Ky],[t,1,zP],[t,3,3*zP],[e,1,Em]];function l(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const b=d&&typeof d.range=="function"?d:p(f,m,d),x=b?b.range(f,+m+1):[];return v?x.reverse():x}function p(f,m,d){const v=Math.abs(m-f)/d,b=Ry(([,,y])=>y).right(s,v);if(b===s.length)return e.every(rg(f/Em,m/Em,d));if(b===0)return Zc.every(Math.max(rg(f,m,d),1));const[x,I]=s[v/s[b-1][2]<s[b][2]/v?b-1:b];return x.every(I)}return[l,p]}const[C5,k5]=VW(Qr,eb,t0,GW,Zy,Yy),[E5,T5]=VW(Kr,Jy,e0,Zs,Xy,Qy);function Tm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Nm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function qu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function N5(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,p=e.shortMonths,f=zu(a),m=Uu(a),d=zu(i),v=Uu(i),b=zu(s),x=Uu(s),I=zu(l),y=Uu(l),S=zu(p),A=Uu(p),W={a:V,A:H,b:U,B:X,c:null,d:YP,e:YP,f:a8,g:h8,G:v8,H:t8,I:n8,j:r8,L:KW,m:o8,M:i8,p:R,q:$,Q:JP,s:eS,S:u8,u:s8,U:l8,V:c8,w:p8,W:f8,x:null,X:null,y:d8,Y:m8,Z:g8,"%":ZP},_={a:Z,A:ue,b:he,B:ge,c:null,d:XP,e:XP,f:B8,g:C8,G:E8,H:y8,I:b8,j:I8,L:YW,m:x8,M:w8,p:ye,q:fe,Q:JP,s:eS,S:P8,u:S8,U:A8,V:W8,w:M8,W:_8,x:null,X:null,y:O8,Y:k8,Z:T8,"%":ZP},w={a:N,A:D,b:T,B:q,c:F,d:KP,e:KP,f:X5,g:VP,G:GP,H:QP,I:QP,j:V5,L:Y5,m:G5,M:K5,p:O,q:U5,Q:J5,s:e8,S:Q5,u:$5,U:L5,V:F5,w:D5,W:q5,x:G,X:Q,y:VP,Y:GP,Z:z5,"%":Z5};W.x=M(n,W),W.X=M(r,W),W.c=M(t,W),_.x=M(n,_),_.X=M(r,_),_.c=M(t,_);function M(ne,de){return function(pe){var re=[],Re=-1,Pe=0,Ce=ne.length,We,Fe,He;for(pe instanceof Date||(pe=new Date(+pe));++Re<Ce;)ne.charCodeAt(Re)===37&&(re.push(ne.slice(Pe,Re)),(Fe=UP[We=ne.charAt(++Re)])!=null?We=ne.charAt(++Re):Fe=We==="e"?" ":"0",(He=de[We])&&(We=He(pe,Fe)),re.push(We),Pe=Re+1);return re.push(ne.slice(Pe,Re)),re.join("")}}function E(ne,de){return function(pe){var re=qu(1900,void 0,1),Re=P(re,ne,pe+="",0),Pe,Ce;if(Re!=pe.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Nm(qu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?ep.ceil(Pe):ep(Pe),Pe=Jp.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Tm(qu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?Jc.ceil(Pe):Jc(Pe),Pe=Zs.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Nm(qu(re.y,0,1)).getUTCDay():Tm(qu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Nm(re)):Tm(re)}}function P(ne,de,pe,re){for(var Re=0,Pe=de.length,Ce=pe.length,We,Fe;Re<Pe;){if(re>=Ce)return-1;if(We=de.charCodeAt(Re++),We===37){if(We=de.charAt(Re++),Fe=w[We in UP?de.charAt(Re++):We],!Fe||(re=Fe(ne,pe,re))<0)return-1}else if(We!=pe.charCodeAt(re++))return-1}return re}function O(ne,de,pe){var re=f.exec(de.slice(pe));return re?(ne.p=m.get(re[0].toLowerCase()),pe+re[0].length):-1}function N(ne,de,pe){var re=b.exec(de.slice(pe));return re?(ne.w=x.get(re[0].toLowerCase()),pe+re[0].length):-1}function D(ne,de,pe){var re=d.exec(de.slice(pe));return re?(ne.w=v.get(re[0].toLowerCase()),pe+re[0].length):-1}function T(ne,de,pe){var re=S.exec(de.slice(pe));return re?(ne.m=A.get(re[0].toLowerCase()),pe+re[0].length):-1}function q(ne,de,pe){var re=I.exec(de.slice(pe));return re?(ne.m=y.get(re[0].toLowerCase()),pe+re[0].length):-1}function F(ne,de,pe){return P(ne,t,de,pe)}function G(ne,de,pe){return P(ne,n,de,pe)}function Q(ne,de,pe){return P(ne,r,de,pe)}function V(ne){return s[ne.getDay()]}function H(ne){return i[ne.getDay()]}function U(ne){return p[ne.getMonth()]}function X(ne){return l[ne.getMonth()]}function R(ne){return a[+(ne.getHours()>=12)]}function $(ne){return 1+~~(ne.getMonth()/3)}function Z(ne){return s[ne.getUTCDay()]}function ue(ne){return i[ne.getUTCDay()]}function he(ne){return p[ne.getUTCMonth()]}function ge(ne){return l[ne.getUTCMonth()]}function ye(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=M(ne+="",W);return de.toString=function(){return ne},de},parse:function(ne){var de=E(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=M(ne+="",_);return de.toString=function(){return ne},de},utcParse:function(ne){var de=E(ne+="",!0);return de.toString=function(){return ne},de}}}var UP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,R5=/^%/,j5=/[\\^$*+?|[\]().{}]/g;function Ge(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function H5(e){return e.replace(j5,"\\$&")}function zu(e){return new RegExp("^(?:"+e.map(H5).join("|")+")","i")}function Uu(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function D5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function $5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function L5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function F5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function q5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function GP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function VP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function z5(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function U5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function G5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function KP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function V5(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function QP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function K5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Q5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Y5(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function X5(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function Z5(e,t,n){var r=R5.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function J5(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function e8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function YP(e,t){return Ge(e.getDate(),t,2)}function t8(e,t){return Ge(e.getHours(),t,2)}function n8(e,t){return Ge(e.getHours()%12||12,t,2)}function r8(e,t){return Ge(1+Zs.count(Kr(e),e),t,3)}function KW(e,t){return Ge(e.getMilliseconds(),t,3)}function a8(e,t){return KW(e,t)+"000"}function o8(e,t){return Ge(e.getMonth()+1,t,2)}function i8(e,t){return Ge(e.getMinutes(),t,2)}function u8(e,t){return Ge(e.getSeconds(),t,2)}function s8(e){var t=e.getDay();return t===0?7:t}function l8(e,t){return Ge(e0.count(Kr(e)-1,e),t,2)}function QW(e){var t=e.getDay();return t>=4||t===0?yi(e):yi.ceil(e)}function c8(e,t){return e=QW(e),Ge(yi.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function p8(e){return e.getDay()}function f8(e,t){return Ge(Jc.count(Kr(e)-1,e),t,2)}function d8(e,t){return Ge(e.getFullYear()%100,t,2)}function h8(e,t){return e=QW(e),Ge(e.getFullYear()%100,t,2)}function m8(e,t){return Ge(e.getFullYear()%1e4,t,4)}function v8(e,t){var n=e.getDay();return e=n>=4||n===0?yi(e):yi.ceil(e),Ge(e.getFullYear()%1e4,t,4)}function g8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ge(t/60|0,"0",2)+Ge(t%60,"0",2)}function XP(e,t){return Ge(e.getUTCDate(),t,2)}function y8(e,t){return Ge(e.getUTCHours(),t,2)}function b8(e,t){return Ge(e.getUTCHours()%12||12,t,2)}function I8(e,t){return Ge(1+Jp.count(Qr(e),e),t,3)}function YW(e,t){return Ge(e.getUTCMilliseconds(),t,3)}function B8(e,t){return YW(e,t)+"000"}function x8(e,t){return Ge(e.getUTCMonth()+1,t,2)}function w8(e,t){return Ge(e.getUTCMinutes(),t,2)}function P8(e,t){return Ge(e.getUTCSeconds(),t,2)}function S8(e){var t=e.getUTCDay();return t===0?7:t}function A8(e,t){return Ge(t0.count(Qr(e)-1,e),t,2)}function XW(e){var t=e.getUTCDay();return t>=4||t===0?bi(e):bi.ceil(e)}function W8(e,t){return e=XW(e),Ge(bi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),t,2)}function M8(e){return e.getUTCDay()}function _8(e,t){return Ge(ep.count(Qr(e)-1,e),t,2)}function O8(e,t){return Ge(e.getUTCFullYear()%100,t,2)}function C8(e,t){return e=XW(e),Ge(e.getUTCFullYear()%100,t,2)}function k8(e,t){return Ge(e.getUTCFullYear()%1e4,t,4)}function E8(e,t){var n=e.getUTCDay();return e=n>=4||n===0?bi(e):bi.ceil(e),Ge(e.getUTCFullYear()%1e4,t,4)}function T8(){return"+0000"}function ZP(){return"%"}function JP(e){return+e}function eS(e){return Math.floor(+e/1e3)}var ei,ZW,JW;N8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function N8(e){return ei=N5(e),ZW=ei.format,ei.parse,JW=ei.utcFormat,ei.utcParse,ei}function R8(e){return new Date(e)}function j8(e){return e instanceof Date?+e:+new Date(+e)}function tb(e,t,n,r,a,i,s,l,p,f){var m=Ly(),d=m.invert,v=m.domain,b=f(".%L"),x=f(":%S"),I=f("%I:%M"),y=f("%I %p"),S=f("%a %d"),A=f("%b %d"),W=f("%B"),_=f("%Y");function w(M){return(p(M)<M?b:l(M)<M?x:s(M)<M?I:i(M)<M?y:r(M)<M?a(M)<M?S:A:n(M)<M?W:_)(M)}return m.invert=function(M){return new Date(d(M))},m.domain=function(M){return arguments.length?v(Array.from(M,j8)):v().map(R8)},m.ticks=function(M){var E=v();return e(E[0],E[E.length-1],M??10)},m.tickFormat=function(M,E){return E==null?w:f(E)},m.nice=function(M){var E=v();return(!M||typeof M.range!="function")&&(M=t(E[0],E[E.length-1],M??10)),M?v(DW(E,M)):m},m.copy=function(){return Xs(m,tb(e,t,n,r,a,i,s,l,p,f))},m}function H8(){return Qn.apply(tb(E5,T5,Kr,Jy,e0,Zs,Xy,Qy,po,ZW).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function D8(){return Qn.apply(tb(C5,k5,Qr,eb,t0,Jp,Zy,Yy,po,JW).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function n0(){var e=0,t=1,n,r,a,i,s=un,l=!1,p;function f(d){return d==null||isNaN(d=+d)?p:s(a===0?.5:(d=(i(d)-n)*a,l?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,t]=d,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(d){return arguments.length?(l=!!d,f):l},f.interpolator=function(d){return arguments.length?(s=d,f):s};function m(d){return function(v){var b,x;return arguments.length?([b,x]=v,s=d(b,x),f):[s(0),s(1)]}}return f.range=m(Qi),f.rangeRound=m($y),f.unknown=function(d){return arguments.length?(p=d,f):p},function(d){return i=d,n=d(e),r=d(t),a=n===r?0:1/(r-n),f}}function $a(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function eM(){var e=Da(n0()(un));return e.copy=function(){return $a(e,eM())},Jr.apply(e,arguments)}function tM(){var e=zy(n0()).domain([1,10]);return e.copy=function(){return $a(e,tM()).base(e.base())},Jr.apply(e,arguments)}function nM(){var e=Uy(n0());return e.copy=function(){return $a(e,nM()).constant(e.constant())},Jr.apply(e,arguments)}function nb(){var e=Gy(n0());return e.copy=function(){return $a(e,nb()).exponent(e.exponent())},Jr.apply(e,arguments)}function $8(){return nb.apply(null,arguments).exponent(.5)}function rM(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Qs(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>AL(e,i/r))},n.copy=function(){return rM(t).domain(e)},Jr.apply(n,arguments)}function r0(){var e=0,t=.5,n=1,r=1,a,i,s,l,p,f=un,m,d=!1,v;function b(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?l:p),f(d?Math.max(0,Math.min(1,I)):I))}b.domain=function(I){return arguments.length?([e,t,n]=I,a=m(e=+e),i=m(t=+t),s=m(n=+n),l=a===i?0:.5/(i-a),p=i===s?0:.5/(s-i),r=i<a?-1:1,b):[e,t,n]},b.clamp=function(I){return arguments.length?(d=!!I,b):d},b.interpolator=function(I){return arguments.length?(f=I,b):f};function x(I){return function(y){var S,A,W;return arguments.length?([S,A,W]=y,f=ZL(I,[S,A,W]),b):[f(0),f(.5),f(1)]}}return b.range=x(Qi),b.rangeRound=x($y),b.unknown=function(I){return arguments.length?(v=I,b):v},function(I){return m=I,a=I(e),i=I(t),s=I(n),l=a===i?0:.5/(i-a),p=i===s?0:.5/(s-i),r=i<a?-1:1,b}}function aM(){var e=Da(r0()(un));return e.copy=function(){return $a(e,aM())},Jr.apply(e,arguments)}function oM(){var e=zy(r0()).domain([.1,1,10]);return e.copy=function(){return $a(e,oM()).base(e.base())},Jr.apply(e,arguments)}function iM(){var e=Uy(r0());return e.copy=function(){return $a(e,iM()).constant(e.constant())},Jr.apply(e,arguments)}function rb(){var e=Gy(r0());return e.copy=function(){return $a(e,rb()).exponent(e.exponent())},Jr.apply(e,arguments)}function L8(){return rb.apply(null,arguments).exponent(.5)}const tS=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:gs,scaleDiverging:aM,scaleDivergingLog:oM,scaleDivergingPow:rb,scaleDivergingSqrt:L8,scaleDivergingSymlog:iM,scaleIdentity:HW,scaleImplicit:ag,scaleLinear:Xc,scaleLog:$W,scaleOrdinal:jy,scalePoint:es,scalePow:Vy,scaleQuantile:qW,scaleQuantize:zW,scaleRadial:FW,scaleSequential:eM,scaleSequentialLog:tM,scaleSequentialPow:nb,scaleSequentialQuantile:rM,scaleSequentialSqrt:$8,scaleSequentialSymlog:nM,scaleSqrt:B5,scaleSymlog:LW,scaleThreshold:UW,scaleTime:H8,scaleUtc:D8,tickFormat:jW},Symbol.toStringTag,{value:"Module"}));var Rm,nS;function a0(){if(nS)return Rm;nS=1;var e=Ui();function t(n,r,a){for(var i=-1,s=n.length;++i<s;){var l=n[i],p=r(l);if(p!=null&&(f===void 0?p===p&&!e(p):a(p,f)))var f=p,m=l}return m}return Rm=t,Rm}var jm,rS;function uM(){if(rS)return jm;rS=1;function e(t,n){return t>n}return jm=e,jm}var Hm,aS;function F8(){if(aS)return Hm;aS=1;var e=a0(),t=uM(),n=Ki();function r(a){return a&&a.length?e(a,n,t):void 0}return Hm=r,Hm}var q8=F8();const Wa=Xe(q8);var Dm,oS;function sM(){if(oS)return Dm;oS=1;function e(t,n){return t<n}return Dm=e,Dm}var $m,iS;function z8(){if(iS)return $m;iS=1;var e=a0(),t=sM(),n=Ki();function r(a){return a&&a.length?e(a,n,t):void 0}return $m=r,$m}var U8=z8();const o0=Xe(U8);var Lm,uS;function G8(){if(uS)return Lm;uS=1;var e=by(),t=Wr(),n=gW(),r=yn();function a(i,s){var l=r(i)?e:n;return l(i,t(s,3))}return Lm=a,Lm}var Fm,sS;function V8(){if(sS)return Fm;sS=1;var e=mW(),t=G8();function n(r,a){return e(t(r,a),1)}return Fm=n,Fm}var K8=V8();const Q8=Xe(K8);var qm,lS;function Y8(){if(lS)return qm;lS=1;var e=Cy();function t(n,r){return e(n,r)}return qm=t,qm}var X8=Y8();const Na=Xe(X8);var Yi=1e9,Z8={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},ob,pt=!0,Vn="[DecimalError] ",vo=Vn+"Invalid argument: ",ab=Vn+"Exponent out of range: ",Xi=Math.floor,uo=Math.pow,J8=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Wn,Ft=1e7,st=7,lM=9007199254740991,tp=Xi(lM/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Gr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Gr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Ot(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(Wn))throw Error(Vn+"NaN");if(n.s<1)throw Error(Vn+(n.s?"NaN":"-Infinity"));return n.eq(Wn)?new r(0):(pt=!1,t=Gr(xs(n,i),xs(e,i),i),pt=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?fM(t,e):cM(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Vn+"NaN");return n.s?(pt=!1,t=Gr(n,e,0,1).times(e),pt=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return pM(this)};Ie.naturalLogarithm=Ie.ln=function(){return xs(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?cM(t,e):fM(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(vo+e);if(t=Ot(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,i,s,l=this,p=l.constructor;if(l.s<1){if(!l.s)return new p(0);throw Error(Vn+"NaN")}for(e=Ot(l),pt=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=br(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Xi((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new p(t)):r=new p(a.toString()),n=p.precision,a=s=n+3;;)if(i=r,r=i.plus(Gr(l,i,s+2)).times(.5),br(i.d).slice(0,s)===(t=br(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return pt=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,i,s,l,p,f,m=this,d=m.constructor,v=m.d,b=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,n=m.e+e.e,p=v.length,f=b.length,p<f&&(i=v,v=b,b=i,s=p,p=f,f=s),i=[],s=p+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(t=0,a=p+r;a>r;)l=i[a]+b[r]*v[a-r-1]+t,i[a--]=l%Ft|0,t=l/Ft|0;i[a]=(i[a]+t)%Ft|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,pt?tt(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Pr(e,0,Yi),t===void 0?t=r.rounding:Pr(t,0,8),tt(n,e+Ot(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=yo(r,!0):(Pr(e,0,Yi),t===void 0?t=a.rounding:Pr(t,0,8),r=tt(new a(r),e+1,t),n=yo(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?yo(a):(Pr(e,0,Yi),t===void 0?t=i.rounding:Pr(t,0,8),r=tt(new i(a),e+Ot(a)+1,t),n=yo(r.abs(),!1,e+Ot(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Ot(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,i,s,l=this,p=l.constructor,f=12,m=+(e=new p(e));if(!e.s)return new p(Wn);if(l=new p(l),!l.s){if(e.s<1)throw Error(Vn+"Infinity");return l}if(l.eq(Wn))return l;if(r=p.precision,e.eq(Wn))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=m<0?-m:m)<=lM){for(a=new p(Wn),t=Math.ceil(r/st+4),pt=!1;n%2&&(a=a.times(l),pS(a.d,t)),n=Xi(n/2),n!==0;)l=l.times(l),pS(l.d,t);return pt=!0,e.s<0?new p(Wn).div(a):tt(a,r)}}else if(i<0)throw Error(Vn+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,pt=!1,a=e.times(xs(l,r+f)),pt=!0,a=pM(a),a.s=i,a};Ie.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=Ot(a),r=yo(a,n<=i.toExpNeg||n>=i.toExpPos)):(Pr(e,1,Yi),t===void 0?t=i.rounding:Pr(t,0,8),a=tt(new i(a),e,t),n=Ot(a),r=yo(a,e<=n||n<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Pr(e,1,Yi),t===void 0?t=r.rounding:Pr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ot(e),n=e.constructor;return yo(e,t<=n.toExpNeg||t>=n.toExpPos)};function cM(e,t){var n,r,a,i,s,l,p,f,m=e.constructor,d=m.precision;if(!e.s||!t.s)return t.s||(t=new m(e)),pt?tt(t,d):t;if(p=e.d,f=t.d,s=e.e,a=t.e,p=p.slice(),i=s-a,i){for(i<0?(r=p,i=-i,l=f.length):(r=f,a=s,l=p.length),s=Math.ceil(d/st),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=p.length,i=f.length,l-i<0&&(i=l,r=f,f=p,p=r),n=0;i;)n=(p[--i]=p[i]+f[i]+n)/Ft|0,p[i]%=Ft;for(n&&(p.unshift(n),++a),l=p.length;p[--l]==0;)p.pop();return t.d=p,t.e=a,pt?tt(t,d):t}function Pr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(vo+e)}function br(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(i+=Sa(n)),i+=r;s=e[t],r=s+"",n=st-r.length,n&&(i+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Gr=(function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%Ft|0,s=i/Ft|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,p;if(i!=s)p=i>s?1:-1;else for(l=p=0;l<i;l++)if(r[l]!=a[l]){p=r[l]>a[l]?1:-1;break}return p}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*Ft+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,p,f,m,d,v,b,x,I,y,S,A,W,_,w,M,E,P,O=r.constructor,N=r.s==a.s?1:-1,D=r.d,T=a.d;if(!r.s)return new O(r);if(!a.s)throw Error(Vn+"Division by zero");for(p=r.e-a.e,E=T.length,w=D.length,b=new O(N),x=b.d=[],f=0;T[f]==(D[f]||0);)++f;if(T[f]>(D[f]||0)&&--p,i==null?A=i=O.precision:s?A=i+(Ot(r)-Ot(a))+1:A=i,A<0)return new O(0);if(A=A/st+2|0,f=0,E==1)for(m=0,T=T[0],A++;(f<w||m)&&A--;f++)W=m*Ft+(D[f]||0),x[f]=W/T|0,m=W%T|0;else{for(m=Ft/(T[0]+1)|0,m>1&&(T=e(T,m),D=e(D,m),E=T.length,w=D.length),_=E,I=D.slice(0,E),y=I.length;y<E;)I[y++]=0;P=T.slice(),P.unshift(0),M=T[0],T[1]>=Ft/2&&++M;do m=0,l=t(T,I,E,y),l<0?(S=I[0],E!=y&&(S=S*Ft+(I[1]||0)),m=S/M|0,m>1?(m>=Ft&&(m=Ft-1),d=e(T,m),v=d.length,y=I.length,l=t(d,I,v,y),l==1&&(m--,n(d,E<v?P:T,v))):(m==0&&(l=m=1),d=T.slice()),v=d.length,v<y&&d.unshift(0),n(I,d,y),l==-1&&(y=I.length,l=t(T,I,E,y),l<1&&(m++,n(I,E<y?P:T,y))),y=I.length):l===0&&(m++,I=[0]),x[f++]=m,l&&I[0]?I[y++]=D[_]||0:(I=[D[_]],y=1);while((_++<w||I[0]!==void 0)&&A--)}return x[0]||x.shift(),b.e=p,tt(b,s?i+Ot(b)+1:i)}})();function pM(e,t){var n,r,a,i,s,l,p=0,f=0,m=e.constructor,d=m.precision;if(Ot(e)>16)throw Error(ab+Ot(e));if(!e.s)return new m(Wn);for(pt=!1,l=d,s=new m(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(uo(2,f))/Math.LN10*2+5|0,l+=r,n=a=i=new m(Wn),m.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++p),s=i.plus(Gr(a,n,l)),br(s.d).slice(0,l)===br(i.d).slice(0,l)){for(;f--;)i=tt(i.times(i),l);return m.precision=d,t==null?(pt=!0,tt(i,d)):i}i=s}}function Ot(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function zm(e,t,n){if(t>e.LN10.sd())throw pt=!0,n&&(e.precision=n),Error(Vn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function xs(e,t){var n,r,a,i,s,l,p,f,m,d=1,v=10,b=e,x=b.d,I=b.constructor,y=I.precision;if(b.s<1)throw Error(Vn+(b.s?"NaN":"-Infinity"));if(b.eq(Wn))return new I(0);if(t==null?(pt=!1,f=y):f=t,b.eq(10))return t==null&&(pt=!0),zm(I,f);if(f+=v,I.precision=f,n=br(x),r=n.charAt(0),i=Ot(b),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)b=b.times(e),n=br(b.d),r=n.charAt(0),d++;i=Ot(b),r>1?(b=new I("0."+n),i++):b=new I(r+"."+n.slice(1))}else return p=zm(I,f+2,y).times(i+""),b=xs(new I(r+"."+n.slice(1)),f-v).plus(p),I.precision=y,t==null?(pt=!0,tt(b,y)):b;for(l=s=b=Gr(b.minus(Wn),b.plus(Wn),f),m=tt(b.times(b),f),a=3;;){if(s=tt(s.times(m),f),p=l.plus(Gr(s,new I(a),f)),br(p.d).slice(0,f)===br(l.d).slice(0,f))return l=l.times(2),i!==0&&(l=l.plus(zm(I,f+2,y).times(i+""))),l=Gr(l,new I(d),f),I.precision=y,t==null?(pt=!0,tt(l,y)):l;l=p,a+=2}}function cS(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=Xi(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),pt&&(e.e>tp||e.e<-tp))throw Error(ab+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,i,s,l,p,f,m,d=e.d;for(s=1,i=d[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=d[m=0];else{if(m=Math.ceil((r+1)/st),i=d.length,m>=i)return e;for(f=i=d[m],s=1;i>=10;i/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(i=uo(10,s-a-1),l=f/i%10|0,p=t<0||d[m+1]!==void 0||f%i,p=n<4?(l||p)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||p||n==6&&(r>0?a>0?f/uo(10,s-a):0:d[m-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return p?(i=Ot(e),d.length=1,t=t-i-1,d[0]=uo(10,(st-t%st)%st),e.e=Xi(-t/st)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=uo(10,st-r),d[m]=a>0?(f/uo(10,s-a)%uo(10,a)|0)*i:0),p)for(;;)if(m==0){(d[0]+=i)==Ft&&(d[0]=1,++e.e);break}else{if(d[m]+=i,d[m]!=Ft)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(pt&&(e.e>tp||e.e<-tp))throw Error(ab+Ot(e));return e}function fM(e,t){var n,r,a,i,s,l,p,f,m,d,v=e.constructor,b=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),pt?tt(t,b):t;if(p=e.d,d=t.d,r=t.e,f=e.e,p=p.slice(),s=f-r,s){for(m=s<0,m?(n=p,s=-s,l=d.length):(n=d,r=f,l=p.length),a=Math.max(Math.ceil(b/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=p.length,l=d.length,m=a<l,m&&(l=a),a=0;a<l;a++)if(p[a]!=d[a]){m=p[a]<d[a];break}s=0}for(m&&(n=p,p=d,d=n,t.s=-t.s),l=p.length,a=d.length-l;a>0;--a)p[l++]=0;for(a=d.length;a>s;){if(p[--a]<d[a]){for(i=a;i&&p[--i]===0;)p[i]=Ft-1;--p[i],p[a]+=Ft}p[a]-=d[a]}for(;p[--l]===0;)p.pop();for(;p[0]===0;p.shift())--r;return p[0]?(t.d=p,t.e=r,pt?tt(t,b):t):new v(0)}function yo(e,t,n){var r,a=Ot(e),i=br(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,n&&(r=n-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function pS(e,t){if(e.length>t)return e.length=t,!0}function dM(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return cS(s,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,J8.test(i))cS(s,i);else throw Error(vo+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=dM,a.config=a.set=eF,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function eF(e){if(!e||typeof e!="object")throw Error(Vn+"Object expected");var t,n,r,a=["precision",1,Yi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(Xi(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(vo+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(vo+n+": "+r);return this}var ob=dM(Z8);Wn=new ob(1);const et=ob;function tF(e){return oF(e)||aF(e)||rF(e)||nF()}function nF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rF(e,t){if(e){if(typeof e=="string")return sg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sg(e,t)}}function aF(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function oF(e){if(Array.isArray(e))return sg(e)}function sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var iF=function(t){return t},hM={},mM=function(t){return t===hM},fS=function(t){return function n(){return arguments.length===0||arguments.length===1&&mM(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},uF=function e(t,n){return t===1?n:fS(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(l){return l!==hM}).length;return s>=t?n.apply(void 0,a):e(t-s,fS(function(){for(var l=arguments.length,p=new Array(l),f=0;f<l;f++)p[f]=arguments[f];var m=a.map(function(d){return mM(d)?p.shift():d});return n.apply(void 0,tF(m).concat(p))}))})},i0=function(t){return uF(t.length,t)},lg=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},sF=i0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),lF=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return iF;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(l,p){return p(l)},i.apply(void 0,arguments))}},cg=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},vM=function(t){var n=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n&&i.every(function(l,p){return l===n[p]})||(n=i,r=t.apply(void 0,i)),r}};function cF(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function pF(e,t,n){for(var r=new et(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var fF=i0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),dF=i0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),hF=i0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const u0={rangeStep:pF,getDigitCount:cF,interpolateNumber:fF,uninterpolateNumber:dF,uninterpolateTruncation:hF};function pg(e){return gF(e)||vF(e)||gM(e)||mF()}function mF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vF(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function gF(e){if(Array.isArray(e))return fg(e)}function ws(e,t){return IF(e)||bF(e,t)||gM(e,t)||yF()}function yF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gM(e,t){if(e){if(typeof e=="string")return fg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fg(e,t)}}function fg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bF(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(p){a=!0,i=p}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return n}}function IF(e){if(Array.isArray(e))return e}function yM(e){var t=ws(e,2),n=t[0],r=t[1],a=n,i=r;return n>r&&(a=r,i=n),[a,i]}function bM(e,t,n){if(e.lte(0))return new et(0);var r=u0.getDigitCount(e.toNumber()),a=new et(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(i.div(s).toNumber())).add(n).mul(s),p=l.mul(a);return t?p:new et(Math.ceil(p))}function BF(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new et(10).pow(u0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=lF(sF(function(p){return a.add(new et(p-s).mul(r)).toNumber()}),lg);return l(0,t)}function IM(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var i=bM(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(i)));var l=Math.ceil(s.sub(e).div(i).toNumber()),p=Math.ceil(new et(t).sub(s).div(i).toNumber()),f=l+p+1;return f>n?IM(e,t,n,r,a+1):(f<n&&(p=t>0?p+(n-f):p,l=t>0?l:l+(n-f)),{step:i,tickMin:s.sub(new et(l).mul(i)),tickMax:s.add(new et(p).mul(i))})}function xF(e){var t=ws(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=yM([n,r]),p=ws(l,2),f=p[0],m=p[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(pg(lg(0,a-1).map(function(){return 1/0}))):[].concat(pg(lg(0,a-1).map(function(){return-1/0})),[m]);return n>r?cg(d):d}if(f===m)return BF(f,a,i);var v=IM(f,m,s,i),b=v.step,x=v.tickMin,I=v.tickMax,y=u0.rangeStep(x,I.add(new et(.1).mul(b)),b);return n>r?cg(y):y}function wF(e,t){var n=ws(e,2),r=n[0],a=n[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=yM([r,a]),l=ws(s,2),p=l[0],f=l[1];if(p===-1/0||f===1/0)return[r,a];if(p===f)return[p];var m=Math.max(t,2),d=bM(new et(f).sub(p).div(m-1),i,0),v=[].concat(pg(u0.rangeStep(new et(p),new et(f).sub(new et(.99).mul(d)),d)),[f]);return r>a?cg(v):v}var PF=vM(xF),SF=vM(wF),AF="Invariant failed";function bo(e,t){throw new Error(AF)}var WF=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Ii(e){"@babel/helpers - typeof";return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ii(e)}function np(){return np=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},np.apply(this,arguments)}function MF(e,t){return kF(e)||CF(e,t)||OF(e,t)||_F()}function _F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OF(e,t){if(e){if(typeof e=="string")return dS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dS(e,t)}}function dS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function CF(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function kF(e){if(Array.isArray(e))return e}function EF(e,t){if(e==null)return{};var n=TF(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function TF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function NF(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function RF(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wM(r.key),r)}}function jF(e,t,n){return t&&RF(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function HF(e,t,n){return t=rp(t),DF(e,BM()?Reflect.construct(t,n||[],rp(e).constructor):t.apply(e,n))}function DF(e,t){if(t&&(Ii(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $F(e)}function $F(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function BM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(BM=function(){return!!e})()}function rp(e){return rp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rp(e)}function LF(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&dg(e,t)}function dg(e,t){return dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},dg(e,t)}function xM(e,t,n){return t=wM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wM(e){var t=FF(e,"string");return Ii(t)=="symbol"?t:t+""}function FF(e,t){if(Ii(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ii(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Zi=(function(e){function t(){return NF(this,t),HF(this,t,arguments)}return LF(t,e),jF(t,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,l=r.dataKey,p=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=EF(r,WF),b=Ae(v,!1);this.props.direction==="x"&&m.type!=="number"&&bo();var x=p.map(function(I){var y=f(I,l),S=y.x,A=y.y,W=y.value,_=y.errorVal;if(!_)return null;var w=[],M,E;if(Array.isArray(_)){var P=MF(_,2);M=P[0],E=P[1]}else M=E=_;if(i==="vertical"){var O=m.scale,N=A+a,D=N+s,T=N-s,q=O(W-M),F=O(W+E);w.push({x1:F,y1:D,x2:F,y2:T}),w.push({x1:q,y1:N,x2:F,y2:N}),w.push({x1:q,y1:D,x2:q,y2:T})}else if(i==="horizontal"){var G=d.scale,Q=S+a,V=Q-s,H=Q+s,U=G(W-M),X=G(W+E);w.push({x1:V,y1:X,x2:H,y2:X}),w.push({x1:Q,y1:U,x2:Q,y2:X}),w.push({x1:V,y1:U,x2:H,y2:U})}return j.createElement(De,np({className:"recharts-errorBar",key:"bar-".concat(w.map(function(R){return"".concat(R.x1,"-").concat(R.x2,"-").concat(R.y1,"-").concat(R.y2)}))},b),w.map(function(R){return j.createElement("line",np({},R,{key:"line-".concat(R.x1,"-").concat(R.x2,"-").concat(R.y1,"-").concat(R.y2)}))}))});return j.createElement(De,{className:"recharts-errorBars"},x)}}])})(j.Component);xM(Zi,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});xM(Zi,"displayName","ErrorBar");function Ps(e){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ps(e)}function hS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function no(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hS(Object(n),!0).forEach(function(r){qF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qF(e,t,n){return t=zF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zF(e){var t=UF(e,"string");return Ps(t)=="symbol"?t:t+""}function UF(e,t){if(Ps(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ps(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var PM=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,i=t.legendContent,s=Sn(n,Oa);if(!s)return null;var l=Oa.defaultProps,p=l!==void 0?no(no({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,b=d.props,x=b.sectors||b.data||[];return m.concat(x.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,b=v!==void 0?no(no({},v),d.props):{},x=b.dataKey,I=b.name,y=b.legendType,S=b.hide;return{inactive:S,dataKey:x,type:p.iconType||y||"square",color:ib(d),value:I||x,payload:b}}),no(no(no({},p),Oa.getWithHeight(s,a)),{},{payload:f,item:s})};function Ss(e){"@babel/helpers - typeof";return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ss(e)}function mS(e){return QF(e)||KF(e)||VF(e)||GF()}function GF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VF(e,t){if(e){if(typeof e=="string")return hg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hg(e,t)}}function KF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function QF(e){if(Array.isArray(e))return hg(e)}function hg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vS(Object(n),!0).forEach(function(r){ci(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ci(e,t,n){return t=YF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YF(e){var t=XF(e,"string");return Ss(t)=="symbol"?t:t+""}function XF(e,t){if(Ss(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ss(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ee(e)||Ee(t)?n:Rt(t)?Mn(e,t,n):ke(t)?t(e):n}function ts(e,t,n,r){var a=Q8(e,function(l){return lt(l,t)});if(n==="number"){var i=a.filter(function(l){return le(l)||parseFloat(l)});return i.length?[o0(i),Wa(i)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ee(l)}):a;return s.map(function(l){return Rt(l)||l instanceof Date?l:""})}var ZF=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var p=i.range,f=0;f<l;f++){var m=f>0?a[f-1].coordinate:a[l-1].coordinate,d=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,b=void 0;if(an(d-m)!==an(v-d)){var x=[];if(an(v-d)===an(p[1]-p[0])){b=v;var I=d+p[1]-p[0];x[0]=Math.min(I,(I+m)/2),x[1]=Math.max(I,(I+m)/2)}else{b=m;var y=v+p[1]-p[0];x[0]=Math.min(d,(y+d)/2),x[1]=Math.max(d,(y+d)/2)}var S=[Math.min(d,(b+d)/2),Math.max(d,(b+d)/2)];if(t>S[0]&&t<=S[1]||t>=x[0]&&t<=x[1]){s=a[f].index;break}}else{var A=Math.min(m,v),W=Math.max(m,v);if(t>(A+d)/2&&t<=(W+d)/2){s=a[f].index;break}}}else for(var _=0;_<l;_++)if(_===0&&t<=(r[_].coordinate+r[_+1].coordinate)/2||_>0&&_<l-1&&t>(r[_].coordinate+r[_-1].coordinate)/2&&t<=(r[_].coordinate+r[_+1].coordinate)/2||_===l-1&&t>(r[_].coordinate+r[_-1].coordinate)/2){s=r[_].index;break}return s},ib=function(t){var n,r=t,a=r.type.displayName,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=i.stroke,l=i.fill,p;switch(a){case"Line":p=s;break;case"Area":case"Radar":p=s&&s!=="none"?s:l;break;default:p=l;break}return p},JF=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},l=Object.keys(i),p=0,f=l.length;p<f;p++)for(var m=i[l[p]].stackGroups,d=Object.keys(m),v=0,b=d.length;v<b;v++){var x=m[d[v]],I=x.items,y=x.cateAxisId,S=I.filter(function(E){return Ur(E.type).indexOf("Bar")>=0});if(S&&S.length){var A=S[0].type.defaultProps,W=A!==void 0?bt(bt({},A),S[0].props):S[0].props,_=W.barSize,w=W[y];s[w]||(s[w]=[]);var M=Ee(_)?n:_;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ee(M)?void 0:on(M,r,0)})}}return s},eq=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,i=t.sizeList,s=i===void 0?[]:i,l=t.maxBarSize,p=s.length;if(p<1)return null;var f=on(n,a,0,!0),m,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,b=a/p,x=s.reduce(function(_,w){return _+w.barSize||0},0);x+=(p-1)*f,x>=a&&(x-=(p-1)*f,f=0),x>=a&&b>0&&(v=!0,b*=.9,x=p*b);var I=(a-x)/2>>0,y={offset:I-f,size:0};m=s.reduce(function(_,w){var M={item:w.item,position:{offset:y.offset+y.size+f,size:v?b:w.barSize}},E=[].concat(mS(_),[M]);return y=E[E.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:y})}),E},d)}else{var S=on(r,a,0,!0);a-2*S-(p-1)*f<=0&&(f=0);var A=(a-2*S-(p-1)*f)/p;A>1&&(A>>=0);var W=l===+l?Math.min(A,l):A;m=s.reduce(function(_,w,M){var E=[].concat(mS(_),[{item:w.item,position:{offset:S+(A+f)*M+(A-W)/2,size:W}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:E[E.length-1].position})}),E},d)}return m},tq=function(t,n,r,a){var i=r.children,s=r.width,l=r.margin,p=s-(l.left||0)-(l.right||0),f=PM({children:i,legendWidth:p});if(f){var m=a||{},d=m.width,v=m.height,b=f.align,x=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&x==="middle")&&b!=="center"&&le(t[b]))return bt(bt({},t),{},ci({},b,t[b]+(d||0)));if((I==="horizontal"||I==="vertical"&&b==="center")&&x!=="middle"&&le(t[x]))return bt(bt({},t),{},ci({},x,t[x]+(v||0)))}return t},nq=function(t,n,r){return Ee(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},SM=function(t,n,r,a,i){var s=n.props.children,l=sn(s,Zi).filter(function(f){return nq(a,i,f.props.direction)});if(l&&l.length){var p=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,m){var d=lt(m,r);if(Ee(d))return f;var v=Array.isArray(d)?[o0(d),Wa(d)]:[d,d],b=p.reduce(function(x,I){var y=lt(m,I,0),S=v[0]-Math.abs(Array.isArray(y)?y[0]:y),A=v[1]+Math.abs(Array.isArray(y)?y[1]:y);return[Math.min(S,x[0]),Math.max(A,x[1])]},[1/0,-1/0]);return[Math.min(b[0],f[0]),Math.max(b[1],f[1])]},[1/0,-1/0])}return null},rq=function(t,n,r,a,i){var s=n.map(function(l){return SM(t,l,r,i,a)}).filter(function(l){return!Ee(l)});return s&&s.length?s.reduce(function(l,p){return[Math.min(l[0],p[0]),Math.max(l[1],p[1])]},[1/0,-1/0]):null},AM=function(t,n,r,a,i){var s=n.map(function(p){var f=p.props.dataKey;return r==="number"&&f&&SM(t,p,f,a)||ts(t,f,r,i)});if(r==="number")return s.reduce(function(p,f){return[Math.min(p[0],f[0]),Math.max(p[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(p,f){for(var m=0,d=f.length;m<d;m++)l[f[m]]||(l[f[m]]=!0,p.push(f[m]));return p},[])},WM=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},MM=function(t,n,r,a){if(a)return t.map(function(p){return p.coordinate});var i,s,l=t.map(function(p){return p.coordinate===n&&(i=!0),p.coordinate===r&&(s=!0),p.coordinate});return i||l.push(n),s||l.push(r),l},Fr=function(t,n,r){if(!t)return null;var a=t.scale,i=t.duplicateDomain,s=t.type,l=t.range,p=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/p:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var m=(t.ticks||t.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Vi(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Um=new WeakMap,bc=function(t,n){if(typeof n!="function")return t;Um.has(t)||Um.set(t,new WeakMap);var r=Um.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},_M=function(t,n,r){var a=t.scale,i=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:gs(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Xc(),realScaleType:"linear"}:i==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:es(),realScaleType:"point"}:i==="category"?{scale:gs(),realScaleType:"band"}:{scale:Xc(),realScaleType:"linear"};if(Gs(a)){var p="scale".concat(zp(a));return{scale:(tS[p]||es)(),realScaleType:tS[p]?p:"point"}}return ke(a)?{scale:a}:{scale:es(),realScaleType:"point"}},gS=1e-4,OM=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),i=Math.min(a[0],a[1])-gS,s=Math.max(a[0],a[1])+gS,l=t(n[0]),p=t(n[r-1]);(l<i||l>s||p<i||p>s)&&t.domain([n[0],n[r-1]])}},aq=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},oq=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),i=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(i[0]=r),(!le(t[1])||t[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},iq=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0,l=0;l<n;++l){var p=Vi(t[l][r][1])?t[l][r][0]:t[l][r][1];p>=0?(t[l][r][0]=i,t[l][r][1]=i+p,i=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+p,s=t[l][r][1])}},uq=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0;s<n;++s){var l=Vi(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=i,t[s][r][1]=i+l,i=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},sq={sign:iq,expand:Qj,none:fi,silhouette:Yj,wiggle:Xj,positive:uq},lq=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),i=sq[r],s=Kj().keys(a).value(function(l,p){return+lt(l,p,0)}).order(zv).offset(i);return s(t)},cq=function(t,n,r,a,i,s){if(!t)return null;var l=s?n.reverse():n,p={},f=l.reduce(function(d,v){var b,x=(b=v.type)!==null&&b!==void 0&&b.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=x.stackId,y=x.hide;if(y)return d;var S=x[r],A=d[S]||{hasStack:!1,stackGroups:{}};if(Rt(I)){var W=A.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};W.items.push(v),A.hasStack=!0,A.stackGroups[I]=W}else A.stackGroups[Ha("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},d),{},ci({},S,A))},p),m={};return Object.keys(f).reduce(function(d,v){var b=f[v];if(b.hasStack){var x={};b.stackGroups=Object.keys(b.stackGroups).reduce(function(I,y){var S=b.stackGroups[y];return bt(bt({},I),{},ci({},y,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:lq(t,S.items,i)}))},x)}return bt(bt({},d),{},ci({},v,b))},m)},CM=function(t,n){var r=n.realScaleType,a=n.type,i=n.tickCount,s=n.originalDomain,l=n.allowDecimals,p=r||n.scale;if(p!=="auto"&&p!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var m=PF(f,i,l);return t.domain([o0(m),Wa(m)]),{niceTicks:m}}if(i&&a==="number"){var d=t.domain(),v=SF(d,i,l);return{niceTicks:v}}return null};function Bi(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ee(a[t.dataKey])){var l=kc(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[i]?n[i].coordinate+r/2:null}var p=lt(a,Ee(s)?t.dataKey:s);return Ee(p)?null:t.scale(p)}var yS=function(t){var n=t.axis,r=t.ticks,a=t.offset,i=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var p=lt(s,n.dataKey,n.domain[l]);return Ee(p)?null:n.scale(p)-i/2+a},pq=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},fq=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,i=a.stackId;if(Rt(i)){var s=n[i];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},dq=function(t){return t.reduce(function(n,r){return[o0(r.concat([n[0]]).filter(le)),Wa(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},kM=function(t,n,r){return Object.keys(t).reduce(function(a,i){var s=t[i],l=s.stackedData,p=l.reduce(function(f,m){var d=dq(m.slice(n,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(p[0],a[0]),Math.max(p[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},bS=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,IS=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,mg=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(bS.test(t[0])){var i=+bS.exec(t[0])[1];a[0]=n[0]-i}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(IS.test(t[1])){var s=+IS.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},ap=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var i=Ey(n,function(d){return d.coordinate}),s=1/0,l=1,p=i.length;l<p;l++){var f=i[l],m=i[l-1];s=Math.min((f.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},BS=function(t,n,r){return!t||!t.length||Na(t,Mn(r,"type.defaultProps.domain"))?n:t},EM=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,i=r.name,s=r.unit,l=r.formatter,p=r.tooltipType,f=r.chartType,m=r.hide;return bt(bt({},Ae(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:i||a,color:ib(t),value:lt(n,a),type:p,payload:n,chartType:f,hide:m})};function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function xS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xS(Object(n),!0).forEach(function(r){TM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TM(e,t,n){return t=hq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hq(e){var t=mq(e,"string");return As(t)=="symbol"?t:t+""}function mq(e,t){if(As(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vq(e,t){return Iq(e)||bq(e,t)||yq(e,t)||gq()}function gq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yq(e,t){if(e){if(typeof e=="string")return wS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wS(e,t)}}function wS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function Iq(e){if(Array.isArray(e))return e}var op=Math.PI/180,Bq=function(t){return t*180/Math.PI},ot=function(t,n,r,a){return{x:t+Math.cos(-op*a)*r,y:n+Math.sin(-op*a)*r}},NM=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},xq=function(t,n,r,a,i){var s=t.width,l=t.height,p=t.startAngle,f=t.endAngle,m=on(t.cx,s,s/2),d=on(t.cy,l,l/2),v=NM(s,l,r),b=on(t.innerRadius,v,0),x=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(y,S){var A=n[S],W=A.domain,_=A.reversed,w;if(Ee(A.range))a==="angleAxis"?w=[p,f]:a==="radiusAxis"&&(w=[b,x]),_&&(w=[w[1],w[0]]);else{w=A.range;var M=w,E=vq(M,2);p=E[0],f=E[1]}var P=_M(A,i),O=P.realScaleType,N=P.scale;N.domain(W).range(w),OM(N);var D=CM(N,Hr(Hr({},A),{},{realScaleType:O})),T=Hr(Hr(Hr({},A),D),{},{range:w,radius:x,realScaleType:O,scale:N,cx:m,cy:d,innerRadius:b,outerRadius:x,startAngle:p,endAngle:f});return Hr(Hr({},y),{},TM({},S,T))},{})},wq=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},Pq=function(t,n){var r=t.x,a=t.y,i=n.cx,s=n.cy,l=wq({x:r,y:a},{x:i,y:s});if(l<=0)return{radius:l};var p=(r-i)/l,f=Math.acos(p);return a>s&&(f=2*Math.PI-f),{radius:l,angle:Bq(f),angleInRadian:f}},Sq=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:n-s*360,endAngle:r-s*360}},Aq=function(t,n){var r=n.startAngle,a=n.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(i,s);return t+l*360},PS=function(t,n){var r=t.x,a=t.y,i=Pq({x:r,y:a},n),s=i.radius,l=i.angle,p=n.innerRadius,f=n.outerRadius;if(s<p||s>f)return!1;if(s===0)return!0;var m=Sq(n),d=m.startAngle,v=m.endAngle,b=l,x;if(d<=v){for(;b>v;)b-=360;for(;b<d;)b+=360;x=b>=d&&b<=v}else{for(;b>d;)b-=360;for(;b<v;)b+=360;x=b>=v&&b<=d}return x?Hr(Hr({},n),{},{radius:s,angle:Aq(b,n)}):null},RM=function(t){return!Y.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function Ws(e){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ws(e)}var Wq=["offset"];function Mq(e){return kq(e)||Cq(e)||Oq(e)||_q()}function _q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oq(e,t){if(e){if(typeof e=="string")return vg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vg(e,t)}}function Cq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kq(e){if(Array.isArray(e))return vg(e)}function vg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Eq(e,t){if(e==null)return{};var n=Tq(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tq(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function SS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(n),!0).forEach(function(r){Nq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nq(e,t,n){return t=Rq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rq(e){var t=jq(e,"string");return Ws(t)=="symbol"?t:t+""}function jq(e,t){if(Ws(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ms.apply(this,arguments)}var Hq=function(t){var n=t.value,r=t.formatter,a=Ee(t.children)?n:t.children;return ke(r)?r(a):a},Dq=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},$q=function(t,n,r){var a=t.position,i=t.viewBox,s=t.offset,l=t.className,p=i,f=p.cx,m=p.cy,d=p.innerRadius,v=p.outerRadius,b=p.startAngle,x=p.endAngle,I=p.clockWise,y=(d+v)/2,S=Dq(b,x),A=S>=0?1:-1,W,_;a==="insideStart"?(W=b+A*s,_=I):a==="insideEnd"?(W=x-A*s,_=!I):a==="end"&&(W=x+A*s,_=I),_=S<=0?_:!_;var w=ot(f,m,y,W),M=ot(f,m,y,W+(_?1:-1)*359),E="M".concat(w.x,",").concat(w.y,`
    A`).concat(y,",").concat(y,",0,1,").concat(_?0:1,`,
    `).concat(M.x,",").concat(M.y),P=Ee(t.id)?Ha("recharts-radial-line-"):t.id;return j.createElement("text",Ms({},r,{dominantBaseline:"central",className:je("recharts-radial-bar-label",l)}),j.createElement("defs",null,j.createElement("path",{id:P,d:E})),j.createElement("textPath",{xlinkHref:"#".concat(P)},n))},Lq=function(t){var n=t.viewBox,r=t.offset,a=t.position,i=n,s=i.cx,l=i.cy,p=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var b=ot(s,l,f+r,v),x=b.x,I=b.y;return{x,y:I,textAnchor:x>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var y=(p+f)/2,S=ot(s,l,y,v),A=S.x,W=S.y;return{x:A,y:W,textAnchor:"middle",verticalAnchor:"middle"}},Fq=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,i=t.position,s=n,l=s.x,p=s.y,f=s.width,m=s.height,d=m>=0?1:-1,v=d*a,b=d>0?"end":"start",x=d>0?"start":"end",I=f>=0?1:-1,y=I*a,S=I>0?"end":"start",A=I>0?"start":"end";if(i==="top"){var W={x:l+f/2,y:p-d*a,textAnchor:"middle",verticalAnchor:b};return Nt(Nt({},W),r?{height:Math.max(p-r.y,0),width:f}:{})}if(i==="bottom"){var _={x:l+f/2,y:p+m+v,textAnchor:"middle",verticalAnchor:x};return Nt(Nt({},_),r?{height:Math.max(r.y+r.height-(p+m),0),width:f}:{})}if(i==="left"){var w={x:l-y,y:p+m/2,textAnchor:S,verticalAnchor:"middle"};return Nt(Nt({},w),r?{width:Math.max(w.x-r.x,0),height:m}:{})}if(i==="right"){var M={x:l+f+y,y:p+m/2,textAnchor:A,verticalAnchor:"middle"};return Nt(Nt({},M),r?{width:Math.max(r.x+r.width-M.x,0),height:m}:{})}var E=r?{width:f,height:m}:{};return i==="insideLeft"?Nt({x:l+y,y:p+m/2,textAnchor:A,verticalAnchor:"middle"},E):i==="insideRight"?Nt({x:l+f-y,y:p+m/2,textAnchor:S,verticalAnchor:"middle"},E):i==="insideTop"?Nt({x:l+f/2,y:p+v,textAnchor:"middle",verticalAnchor:x},E):i==="insideBottom"?Nt({x:l+f/2,y:p+m-v,textAnchor:"middle",verticalAnchor:b},E):i==="insideTopLeft"?Nt({x:l+y,y:p+v,textAnchor:A,verticalAnchor:x},E):i==="insideTopRight"?Nt({x:l+f-y,y:p+v,textAnchor:S,verticalAnchor:x},E):i==="insideBottomLeft"?Nt({x:l+y,y:p+m-v,textAnchor:A,verticalAnchor:b},E):i==="insideBottomRight"?Nt({x:l+f-y,y:p+m-v,textAnchor:S,verticalAnchor:b},E):Gi(i)&&(le(i.x)||lo(i.x))&&(le(i.y)||lo(i.y))?Nt({x:l+on(i.x,f),y:p+on(i.y,m),textAnchor:"end",verticalAnchor:"end"},E):Nt({x:l+f/2,y:p+m/2,textAnchor:"middle",verticalAnchor:"middle"},E)},qq=function(t){return"cx"in t&&le(t.cx)};function qt(e){var t=e.offset,n=t===void 0?5:t,r=Eq(e,Wq),a=Nt({offset:n},r),i=a.viewBox,s=a.position,l=a.value,p=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||Ee(l)&&Ee(p)&&!Y.isValidElement(f)&&!ke(f))return null;if(Y.isValidElement(f))return Y.cloneElement(f,a);var b;if(ke(f)){if(b=Y.createElement(f,a),Y.isValidElement(b))return b}else b=Hq(a);var x=qq(i),I=Ae(a,!0);if(x&&(s==="insideStart"||s==="insideEnd"||s==="end"))return $q(a,b,I);var y=x?Lq(a):Fq(a);return j.createElement(go,Ms({className:je("recharts-label",d)},I,y,{breakAll:v}),b)}qt.displayName="Label";var jM=function(t){var n=t.cx,r=t.cy,a=t.angle,i=t.startAngle,s=t.endAngle,l=t.r,p=t.radius,f=t.innerRadius,m=t.outerRadius,d=t.x,v=t.y,b=t.top,x=t.left,I=t.width,y=t.height,S=t.clockWise,A=t.labelViewBox;if(A)return A;if(le(I)&&le(y)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:y};if(le(b)&&le(x))return{x:b,y:x,width:I,height:y}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:m||p||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},zq=function(t,n){return t?t===!0?j.createElement(qt,{key:"label-implicit",viewBox:n}):Rt(t)?j.createElement(qt,{key:"label-implicit",viewBox:n,value:t}):Y.isValidElement(t)?t.type===qt?Y.cloneElement(t,{key:"label-implicit",viewBox:n}):j.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):ke(t)?j.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):Gi(t)?j.createElement(qt,Ms({viewBox:n},t,{key:"label-implicit"})):null:null},Uq=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,i=jM(t),s=sn(a,qt).map(function(p,f){return Y.cloneElement(p,{viewBox:n||i,key:"label-".concat(f)})});if(!r)return s;var l=zq(t.label,n||i);return[l].concat(Mq(s))};qt.parseViewBox=jM;qt.renderCallByParent=Uq;var Gm,AS;function Gq(){if(AS)return Gm;AS=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Gm=e,Gm}var Vq=Gq();const Kq=Xe(Vq);function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}var Qq=["valueAccessor"],Yq=["data","dataKey","clockWise","id","textBreakAll"];function Xq(e){return t7(e)||e7(e)||Jq(e)||Zq()}function Zq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jq(e,t){if(e){if(typeof e=="string")return gg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gg(e,t)}}function e7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function t7(e){if(Array.isArray(e))return gg(e)}function gg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ip(){return ip=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ip.apply(this,arguments)}function WS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function MS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?WS(Object(n),!0).forEach(function(r){n7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n7(e,t,n){return t=r7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r7(e){var t=a7(e,"string");return _s(t)=="symbol"?t:t+""}function a7(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _S(e,t){if(e==null)return{};var n=o7(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function o7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var i7=function(t){return Array.isArray(t.value)?Kq(t.value):t.value};function sr(e){var t=e.valueAccessor,n=t===void 0?i7:t,r=_S(e,Qq),a=r.data,i=r.dataKey,s=r.clockWise,l=r.id,p=r.textBreakAll,f=_S(r,Yq);return!a||!a.length?null:j.createElement(De,{className:"recharts-label-list"},a.map(function(m,d){var v=Ee(i)?n(m,d):lt(m&&m.payload,i),b=Ee(l)?{}:{id:"".concat(l,"-").concat(d)};return j.createElement(qt,ip({},Ae(m,!0),f,b,{parentViewBox:m.parentViewBox,value:v,textBreakAll:p,viewBox:qt.parseViewBox(Ee(s)?m:MS(MS({},m),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}sr.displayName="LabelList";function u7(e,t){return e?e===!0?j.createElement(sr,{key:"labelList-implicit",data:t}):j.isValidElement(e)||ke(e)?j.createElement(sr,{key:"labelList-implicit",data:t,content:e}):Gi(e)?j.createElement(sr,ip({data:t},e,{key:"labelList-implicit"})):null:null}function s7(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,sr).map(function(s,l){return Y.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var i=u7(e.label,t);return[i].concat(Xq(a))}sr.renderCallByParent=s7;function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}function yg(){return yg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yg.apply(this,arguments)}function OS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function CS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?OS(Object(n),!0).forEach(function(r){l7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):OS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l7(e,t,n){return t=c7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c7(e){var t=p7(e,"string");return Os(t)=="symbol"?t:t+""}function p7(e,t){if(Os(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Os(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var f7=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},Ic=function(t){var n=t.cx,r=t.cy,a=t.radius,i=t.angle,s=t.sign,l=t.isExternal,p=t.cornerRadius,f=t.cornerIsExternal,m=p*(l?1:-1)+a,d=Math.asin(p/m)/op,v=f?i:i+s*d,b=ot(n,r,m,v),x=ot(n,r,a,v),I=f?i-s*d:i,y=ot(n,r,m*Math.cos(d*op),I);return{center:b,circleTangency:x,lineTangency:y,theta:d}},HM=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.startAngle,l=t.endAngle,p=f7(s,l),f=s+p,m=ot(n,r,i,s),d=ot(n,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(p)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var b=ot(n,r,a,s),x=ot(n,r,a,f);v+="L ".concat(x.x,",").concat(x.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(p)>180),",").concat(+(s<=f),`,
            `).concat(b.x,",").concat(b.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},d7=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,p=t.cornerIsExternal,f=t.startAngle,m=t.endAngle,d=an(m-f),v=Ic({cx:n,cy:r,radius:i,angle:f,sign:d,cornerRadius:s,cornerIsExternal:p}),b=v.circleTangency,x=v.lineTangency,I=v.theta,y=Ic({cx:n,cy:r,radius:i,angle:m,sign:-d,cornerRadius:s,cornerIsExternal:p}),S=y.circleTangency,A=y.lineTangency,W=y.theta,_=p?Math.abs(f-m):Math.abs(f-m)-I-W;if(_<0)return l?"M ".concat(x.x,",").concat(x.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):HM({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var w="M ".concat(x.x,",").concat(x.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(b.x,",").concat(b.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(_>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(A.x,",").concat(A.y,`
  `);if(a>0){var M=Ic({cx:n,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),E=M.circleTangency,P=M.lineTangency,O=M.theta,N=Ic({cx:n,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),D=N.circleTangency,T=N.lineTangency,q=N.theta,F=p?Math.abs(f-m):Math.abs(f-m)-O-q;if(F<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(T.x,",").concat(T.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(D.x,",").concat(D.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(F>180),",").concat(+(d>0),",").concat(E.x,",").concat(E.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},h7={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},DM=function(t){var n=CS(CS({},h7),t),r=n.cx,a=n.cy,i=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,p=n.forceCornerRadius,f=n.cornerIsExternal,m=n.startAngle,d=n.endAngle,v=n.className;if(s<i||m===d)return null;var b=je("recharts-sector",v),x=s-i,I=on(l,x,0,!0),y;return I>0&&Math.abs(m-d)<360?y=d7({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,x/2),forceCornerRadius:p,cornerIsExternal:f,startAngle:m,endAngle:d}):y=HM({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:m,endAngle:d}),j.createElement("path",yg({},Ae(n,!0),{className:b,d:y,role:"img"}))};function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}function bg(){return bg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bg.apply(this,arguments)}function kS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ES(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kS(Object(n),!0).forEach(function(r){m7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m7(e,t,n){return t=v7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v7(e){var t=g7(e,"string");return Cs(t)=="symbol"?t:t+""}function g7(e,t){if(Cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var TS={curveBasisClosed:jj,curveBasisOpen:Hj,curveBasis:Rj,curveBumpX:xj,curveBumpY:wj,curveLinearClosed:Dj,curveLinear:Gp,curveMonotoneX:$j,curveMonotoneY:Lj,curveNatural:Fj,curveStep:qj,curveStepAfter:Uj,curveStepBefore:zj},Bc=function(t){return t.x===+t.x&&t.y===+t.y},Gu=function(t){return t.x},Vu=function(t){return t.y},y7=function(t,n){if(ke(t))return t;var r="curve".concat(zp(t));return(r==="curveMonotone"||r==="curveBump")&&n?TS["".concat(r).concat(n==="vertical"?"Y":"X")]:TS[r]||Gp},b7=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,i=a===void 0?[]:a,s=t.baseLine,l=t.layout,p=t.connectNulls,f=p===void 0?!1:p,m=y7(r,l),d=f?i.filter(function(I){return Bc(I)}):i,v;if(Array.isArray(s)){var b=f?s.filter(function(I){return Bc(I)}):s,x=d.map(function(I,y){return ES(ES({},I),{},{base:b[y]})});return l==="vertical"?v=fc().y(Vu).x1(Gu).x0(function(I){return I.base.x}):v=fc().x(Gu).y1(Vu).y0(function(I){return I.base.y}),v.defined(Bc).curve(m),v(x)}return l==="vertical"&&le(s)?v=fc().y(Vu).x1(Gu).x0(s):le(s)?v=fc().x(Gu).y1(Vu).y0(s):v=HA().x(Gu).y(Vu),v.defined(Bc).curve(m),v(d)},ka=function(t){var n=t.className,r=t.points,a=t.path,i=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?b7(t):a;return j.createElement("path",bg({},Ae(t,!1),Ec(t),{className:je("recharts-curve",n),d:s,ref:i}))},Vm={exports:{}},Km,NS;function I7(){if(NS)return Km;NS=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Km=e,Km}var Qm,RS;function B7(){if(RS)return Qm;RS=1;var e=I7();function t(){}function n(){}return n.resetWarningCache=t,Qm=function(){function r(s,l,p,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Qm}var jS;function x7(){return jS||(jS=1,Vm.exports=B7()()),Vm.exports}var w7=x7();const Ye=Xe(w7),{getOwnPropertyNames:P7,getOwnPropertySymbols:S7}=Object,{hasOwnProperty:A7}=Object.prototype;function Ym(e,t){return function(r,a,i){return e(r,a,i)&&t(r,a,i)}}function xc(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:i}=a,s=i.get(n),l=i.get(r);if(s&&l)return s===r&&l===n;i.set(n,r),i.set(r,n);const p=e(n,r,a);return i.delete(n),i.delete(r),p}}function W7(e){return e!=null?e[Symbol.toStringTag]:void 0}function HS(e){return P7(e).concat(S7(e))}const M7=Object.hasOwn||((e,t)=>A7.call(e,t));function Po(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const _7="__v",O7="__o",C7="_owner",{getOwnPropertyDescriptor:DS,keys:$S}=Object;function k7(e,t){return e.byteLength===t.byteLength&&up(new Uint8Array(e),new Uint8Array(t))}function E7(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function T7(e,t){return e.byteLength===t.byteLength&&up(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function N7(e,t){return Po(e.getTime(),t.getTime())}function R7(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function j7(e,t){return e===t}function LS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,l,p=0;for(;(s=i.next())&&!s.done;){const f=t.entries();let m=!1,d=0;for(;(l=f.next())&&!l.done;){if(a[d]){d++;continue}const v=s.value,b=l.value;if(n.equals(v[0],b[0],p,d,e,t,n)&&n.equals(v[1],b[1],v[0],b[0],e,t,n)){m=a[d]=!0;break}d++}if(!m)return!1;p++}return!0}const H7=Po;function D7(e,t,n){const r=$S(e);let a=r.length;if($S(t).length!==a)return!1;for(;a-- >0;)if(!$M(e,t,n,r[a]))return!1;return!0}function Ku(e,t,n){const r=HS(e);let a=r.length;if(HS(t).length!==a)return!1;let i,s,l;for(;a-- >0;)if(i=r[a],!$M(e,t,n,i)||(s=DS(e,i),l=DS(t,i),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function $7(e,t){return Po(e.valueOf(),t.valueOf())}function L7(e,t){return e.source===t.source&&e.flags===t.flags}function FS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,l;for(;(s=i.next())&&!s.done;){const p=t.values();let f=!1,m=0;for(;(l=p.next())&&!l.done;){if(!a[m]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function up(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function F7(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function $M(e,t,n,r){return(r===C7||r===O7||r===_7)&&(e.$$typeof||t.$$typeof)?!0:M7(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const q7="[object ArrayBuffer]",z7="[object Arguments]",U7="[object Boolean]",G7="[object DataView]",V7="[object Date]",K7="[object Error]",Q7="[object Map]",Y7="[object Number]",X7="[object Object]",Z7="[object RegExp]",J7="[object Set]",e9="[object String]",t9={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},n9="[object URL]",r9=Object.prototype.toString;function a9({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:p,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:b,unknownTagComparators:x}){return function(y,S,A){if(y===S)return!0;if(y==null||S==null)return!1;const W=typeof y;if(W!==typeof S)return!1;if(W!=="object")return W==="number"?l(y,S,A):W==="function"?i(y,S,A):!1;const _=y.constructor;if(_!==S.constructor)return!1;if(_===Object)return p(y,S,A);if(Array.isArray(y))return t(y,S,A);if(_===Date)return r(y,S,A);if(_===RegExp)return m(y,S,A);if(_===Map)return s(y,S,A);if(_===Set)return d(y,S,A);const w=r9.call(y);if(w===V7)return r(y,S,A);if(w===Z7)return m(y,S,A);if(w===Q7)return s(y,S,A);if(w===J7)return d(y,S,A);if(w===X7)return typeof y.then!="function"&&typeof S.then!="function"&&p(y,S,A);if(w===n9)return b(y,S,A);if(w===K7)return a(y,S,A);if(w===z7)return p(y,S,A);if(t9[w])return v(y,S,A);if(w===q7)return e(y,S,A);if(w===G7)return n(y,S,A);if(w===U7||w===Y7||w===e9)return f(y,S,A);if(x){let M=x[w];if(!M){const E=W7(y);E&&(M=x[E])}if(M)return M(y,S,A)}return!1}}function o9({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:k7,areArraysEqual:n?Ku:E7,areDataViewsEqual:T7,areDatesEqual:N7,areErrorsEqual:R7,areFunctionsEqual:j7,areMapsEqual:n?Ym(LS,Ku):LS,areNumbersEqual:H7,areObjectsEqual:n?Ku:D7,arePrimitiveWrappersEqual:$7,areRegExpsEqual:L7,areSetsEqual:n?Ym(FS,Ku):FS,areTypedArraysEqual:n?Ym(up,Ku):up,areUrlsEqual:F7,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=xc(r.areArraysEqual),i=xc(r.areMapsEqual),s=xc(r.areObjectsEqual),l=xc(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:l})}return r}function i9(e){return function(t,n,r,a,i,s,l){return e(t,n,l)}}function u9({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,p){const{cache:f=e?new WeakMap:void 0,meta:m}=n();return t(l,p,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(l,p){return t(l,p,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,p){return t(l,p,i)}}const s9=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>Po});La({strict:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po,strict:!0});function La(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,i=o9(e),s=a9(i),l=n?n(s):i9(s);return u9({circular:t,comparator:s,createState:r,equals:l,strict:a})}function l9(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function qS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(i){n<0&&(n=i),i-n>t?(e(i),n=-1):l9(a)};requestAnimationFrame(r)}function Ig(e){"@babel/helpers - typeof";return Ig=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ig(e)}function c9(e){return h9(e)||d9(e)||f9(e)||p9()}function p9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f9(e,t){if(e){if(typeof e=="string")return zS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zS(e,t)}}function zS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h9(e){if(Array.isArray(e))return e}function m9(){var e={},t=function(){return null},n=!1,r=function a(i){if(!n){if(Array.isArray(i)){if(!i.length)return;var s=i,l=c9(s),p=l[0],f=l.slice(1);if(typeof p=="number"){qS(a.bind(null,f),p);return}a(p),qS(a.bind(null,f));return}Ig(i)==="object"&&(e=i,t(e)),typeof i=="function"&&i()}};return{stop:function(){n=!0},start:function(i){n=!1,r(i)},subscribe:function(i){return t=i,function(){t=function(){return null}}}}}function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}function US(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function GS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?US(Object(n),!0).forEach(function(r){LM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):US(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LM(e,t,n){return t=v9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v9(e){var t=g9(e,"string");return ks(t)==="symbol"?t:String(t)}function g9(e,t){if(ks(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var y9=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},b9=function(t){return t},I9=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},ns=function(t,n){return Object.keys(n).reduce(function(r,a){return GS(GS({},r),{},LM({},a,t(a,n[a])))},{})},VS=function(t,n,r){return t.map(function(a){return"".concat(I9(a)," ").concat(n,"ms ").concat(r)}).join(",")};function B9(e,t){return P9(e)||w9(e,t)||FM(e,t)||x9()}function x9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function P9(e){if(Array.isArray(e))return e}function S9(e){return M9(e)||W9(e)||FM(e)||A9()}function A9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FM(e,t){if(e){if(typeof e=="string")return Bg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bg(e,t)}}function W9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M9(e){if(Array.isArray(e))return Bg(e)}function Bg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var sp=1e-4,qM=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},zM=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},KS=function(t,n){return function(r){var a=qM(t,n);return zM(a,r)}},_9=function(t,n){return function(r){var a=qM(t,n),i=[].concat(S9(a.map(function(s,l){return s*l}).slice(1)),[0]);return zM(i,r)}},QS=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],i=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,i=0,s=1,l=1;break;case"ease":a=.25,i=.1,s=.25,l=1;break;case"ease-in":a=.42,i=0,s=1,l=1;break;case"ease-out":a=.42,i=0,s=.58,l=1;break;case"ease-in-out":a=0,i=0,s=.58,l=1;break;default:{var p=n[0].split("(");if(p[0]==="cubic-bezier"&&p[1].split(")")[0].split(",").length===4){var f=p[1].split(")")[0].split(",").map(function(y){return parseFloat(y)}),m=B9(f,4);a=m[0],i=m[1],s=m[2],l=m[3]}}}var d=KS(a,s),v=KS(i,l),b=_9(a,s),x=function(S){return S>1?1:S<0?0:S},I=function(S){for(var A=S>1?1:S,W=A,_=0;_<8;++_){var w=d(W)-A,M=b(W);if(Math.abs(w-A)<sp||M<sp)return v(W);W=x(W-w/M)}return v(W)};return I.isStepper=!1,I},O9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,i=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,p=function(m,d,v){var b=-(m-d)*r,x=v*i,I=v+(b-x)*l/1e3,y=v*l/1e3+m;return Math.abs(y-d)<sp&&Math.abs(I)<sp?[d,0]:[y,I]};return p.isStepper=!0,p.dt=l,p},C9=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return QS(a);case"spring":return O9();default:if(a.split("(")[0]==="cubic-bezier")return QS(a)}return typeof a=="function"?a:null};function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function YS(e){return T9(e)||E9(e)||UM(e)||k9()}function k9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T9(e){if(Array.isArray(e))return wg(e)}function XS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?XS(Object(n),!0).forEach(function(r){xg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xg(e,t,n){return t=N9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N9(e){var t=R9(e,"string");return Es(t)==="symbol"?t:String(t)}function R9(e,t){if(Es(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function j9(e,t){return $9(e)||D9(e,t)||UM(e,t)||H9()}function H9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UM(e,t){if(e){if(typeof e=="string")return wg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wg(e,t)}}function wg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function $9(e){if(Array.isArray(e))return e}var lp=function(t,n,r){return t+(n-t)*r},Pg=function(t){var n=t.from,r=t.to;return n!==r},L9=function e(t,n,r){var a=ns(function(i,s){if(Pg(s)){var l=t(s.from,s.to,s.velocity),p=j9(l,2),f=p[0],m=p[1];return Vt(Vt({},s),{},{from:f,velocity:m})}return s},n);return r<1?ns(function(i,s){return Pg(s)?Vt(Vt({},s),{},{velocity:lp(s.velocity,a[i].velocity,r),from:lp(s.from,a[i].from,r)}):s},n):e(t,a,r-1)};const F9=(function(e,t,n,r,a){var i=y9(e,t),s=i.reduce(function(y,S){return Vt(Vt({},y),{},xg({},S,[e[S],t[S]]))},{}),l=i.reduce(function(y,S){return Vt(Vt({},y),{},xg({},S,{from:e[S],velocity:0,to:t[S]}))},{}),p=-1,f,m,d=function(){return null},v=function(){return ns(function(S,A){return A.from},l)},b=function(){return!Object.values(l).filter(Pg).length},x=function(S){f||(f=S);var A=S-f,W=A/n.dt;l=L9(n,l,W),a(Vt(Vt(Vt({},e),t),v())),f=S,b()||(p=requestAnimationFrame(d))},I=function(S){m||(m=S);var A=(S-m)/r,W=ns(function(w,M){return lp.apply(void 0,YS(M).concat([n(A)]))},s);if(a(Vt(Vt(Vt({},e),t),W)),A<1)p=requestAnimationFrame(d);else{var _=ns(function(w,M){return lp.apply(void 0,YS(M).concat([n(1)]))},s);a(Vt(Vt(Vt({},e),t),_))}};return d=n.isStepper?x:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(p)}}});function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}var q9=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function z9(e,t){if(e==null)return{};var n=U9(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function U9(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xm(e){return Q9(e)||K9(e)||V9(e)||G9()}function G9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V9(e,t){if(e){if(typeof e=="string")return Sg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sg(e,t)}}function K9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Q9(e){if(Array.isArray(e))return Sg(e)}function Sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ZS(Object(n),!0).forEach(function(r){Zu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ZS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zu(e,t,n){return t=GM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X9(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,GM(r.key),r)}}function Z9(e,t,n){return t&&X9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function GM(e){var t=J9(e,"string");return xi(t)==="symbol"?t:String(t)}function J9(e,t){if(xi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ez(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ag(e,t)}function Ag(e,t){return Ag=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ag(e,t)}function tz(e){var t=nz();return function(){var r=cp(e),a;if(t){var i=cp(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Wg(this,a)}}function Wg(e,t){if(t&&(xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mg(e)}function Mg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cp(e){return cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},cp(e)}var Kn=(function(e){ez(n,e);var t=tz(n);function n(r,a){var i;Y9(this,n),i=t.call(this,r,a);var s=i.props,l=s.isActive,p=s.attributeName,f=s.from,m=s.to,d=s.steps,v=s.children,b=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Mg(i)),i.changeStyle=i.changeStyle.bind(Mg(i)),!l||b<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Wg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Wg(i);i.state={style:p?Zu({},p,f):f}}else i.state={style:{}};return i}return Z9(n,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,l=i.canBegin,p=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(l){if(!s){var b={style:p?Zu({},p,m):m};this.state&&v&&(p&&v[p]!==m||!p&&v!==m)&&this.setState(b);return}if(!(s9(a.to,m)&&a.canBegin&&a.isActive)){var x=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=x||f?d:a.to;if(this.state&&v){var y={style:p?Zu({},p,I):I};(p&&v[p]!==I||!p&&v!==I)&&this.setState(y)}this.runAnimation(rr(rr({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,l=a.to,p=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,b=F9(s,l,C9(f),p,this.changeStyle),x=function(){i.stopJSAnimation=b()};this.manager.start([v,m,x,p,d])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,l=a.begin,p=a.onAnimationStart,f=s[0],m=f.style,d=f.duration,v=d===void 0?0:d,b=function(I,y,S){if(S===0)return I;var A=y.duration,W=y.easing,_=W===void 0?"ease":W,w=y.style,M=y.properties,E=y.onAnimationEnd,P=S>0?s[S-1]:y,O=M||Object.keys(w);if(typeof _=="function"||_==="spring")return[].concat(Xm(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:A,easing:_}),A]);var N=VS(O,A,_),D=rr(rr(rr({},P.style),w),{},{transition:N});return[].concat(Xm(I),[D,A,E]).filter(b9)};return this.manager.start([p].concat(Xm(s.reduce(b,[m,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=m9());var i=a.begin,s=a.duration,l=a.attributeName,p=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,b=a.children,x=this.manager;if(this.unSubscribe=x.subscribe(this.handleStyleChange),typeof f=="function"||typeof b=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?Zu({},l,p):p,y=VS(Object.keys(I),s,f);x.start([m,i,rr(rr({},I),{},{transition:y}),s,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var p=z9(a,q9),f=Y.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!l||f===0||s<=0)return i;var d=function(b){var x=b.props,I=x.style,y=I===void 0?{}:I,S=x.className,A=Y.cloneElement(b,rr(rr({},p),{},{style:rr(rr({},y),m),className:S}));return A};return f===1?d(Y.Children.only(i)):j.createElement("div",null,Y.Children.map(i,function(v){return d(v)}))}}]),n})(Y.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function pp(){return pp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pp.apply(this,arguments)}function rz(e,t){return uz(e)||iz(e,t)||oz(e,t)||az()}function az(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oz(e,t){if(e){if(typeof e=="string")return JS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return JS(e,t)}}function JS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function iz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function uz(e){if(Array.isArray(e))return e}function e4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function t4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?e4(Object(n),!0).forEach(function(r){sz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):e4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sz(e,t,n){return t=lz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lz(e){var t=cz(e,"string");return Ts(t)=="symbol"?t:t+""}function cz(e,t){if(Ts(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var n4=function(t,n,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,p=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(s>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,b=4;v<b;v++)d[v]=i[v]>s?s:i[v];m="M".concat(t,",").concat(n+l*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(t+p*d[0],",").concat(n)),m+="L ".concat(t+r-p*d[1],",").concat(n),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*d[1])),m+="L ".concat(t+r,",").concat(n+a-l*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(t+r-p*d[2],",").concat(n+a)),m+="L ".concat(t+p*d[3],",").concat(n+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*d[3])),m+="Z"}else if(s>0&&i===+i&&i>0){var x=Math.min(s,i);m="M ".concat(t,",").concat(n+l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+p*x,",").concat(n,`
            L `).concat(t+r-p*x,",").concat(n,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*x,`
            L `).concat(t+r,",").concat(n+a-l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r-p*x,",").concat(n+a,`
            L `).concat(t+p*x,",").concat(n+a,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*x," Z")}else m="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},pz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,i=n.x,s=n.y,l=n.width,p=n.height;if(Math.abs(l)>0&&Math.abs(p)>0){var f=Math.min(i,i+l),m=Math.max(i,i+l),d=Math.min(s,s+p),v=Math.max(s,s+p);return r>=f&&r<=m&&a>=d&&a<=v}return!1},fz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},ub=function(t){var n=t4(t4({},fz),t),r=Y.useRef(),a=Y.useState(-1),i=rz(a,2),s=i[0],l=i[1];Y.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var _=r.current.getTotalLength();_&&l(_)}catch{}},[]);var p=n.x,f=n.y,m=n.width,d=n.height,v=n.radius,b=n.className,x=n.animationEasing,I=n.animationDuration,y=n.animationBegin,S=n.isAnimationActive,A=n.isUpdateAnimationActive;if(p!==+p||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var W=je("recharts-rectangle",b);return A?j.createElement(Kn,{canBegin:s>0,from:{width:m,height:d,x:p,y:f},to:{width:m,height:d,x:p,y:f},duration:I,animationEasing:x,isActive:A},function(_){var w=_.width,M=_.height,E=_.x,P=_.y;return j.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:y,duration:I,isActive:S,easing:x},j.createElement("path",pp({},Ae(n,!0),{className:W,d:n4(E,P,w,M,v),ref:r})))}):j.createElement("path",pp({},Ae(n,!0),{className:W,d:n4(p,f,m,d,v)}))},dz=["points","className","baseLinePoints","connectNulls"];function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}function hz(e,t){if(e==null)return{};var n=mz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function r4(e){return bz(e)||yz(e)||gz(e)||vz()}function vz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gz(e,t){if(e){if(typeof e=="string")return _g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _g(e,t)}}function yz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bz(e){if(Array.isArray(e))return _g(e)}function _g(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a4=function(t){return t&&t.x===+t.x&&t.y===+t.y},Iz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){a4(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),a4(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},rs=function(t,n){var r=Iz(t);n&&(r=[r.reduce(function(i,s){return[].concat(r4(i),r4(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,l,p){return"".concat(s).concat(p===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Bz=function(t,n,r){var a=rs(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(rs(n.reverse(),r).slice(1))},xz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,i=t.connectNulls,s=hz(t,dz);if(!n||!n.length)return null;var l=je("recharts-polygon",r);if(a&&a.length){var p=s.stroke&&s.stroke!=="none",f=Bz(n,a,i);return j.createElement("g",{className:l},j.createElement("path",ai({},Ae(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),p?j.createElement("path",ai({},Ae(s,!0),{fill:"none",d:rs(n,i)})):null,p?j.createElement("path",ai({},Ae(s,!0),{fill:"none",d:rs(a,i)})):null)}var m=rs(n,i);return j.createElement("path",ai({},Ae(s,!0),{fill:m.slice(-1)==="Z"?s.fill:"none",className:l,d:m}))};function Og(){return Og=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Og.apply(this,arguments)}var Js=function(t){var n=t.cx,r=t.cy,a=t.r,i=t.className,s=je("recharts-dot",i);return n===+n&&r===+r&&a===+a?j.createElement("circle",Og({},Ae(t,!1),Ec(t),{className:s,cx:n,cy:r,r:a})):null};function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}var wz=["x","y","top","left","width","height","className"];function Cg(){return Cg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cg.apply(this,arguments)}function o4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o4(Object(n),!0).forEach(function(r){Sz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sz(e,t,n){return t=Az(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Az(e){var t=Wz(e,"string");return Ns(t)=="symbol"?t:t+""}function Wz(e,t){if(Ns(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mz(e,t){if(e==null)return{};var n=_z(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _z(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Oz=function(t,n,r,a,i,s){return"M".concat(t,",").concat(i,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},Cz=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.top,l=s===void 0?0:s,p=t.left,f=p===void 0?0:p,m=t.width,d=m===void 0?0:m,v=t.height,b=v===void 0?0:v,x=t.className,I=Mz(t,wz),y=Pz({x:r,y:i,top:l,left:f,width:d,height:b},I);return!le(r)||!le(i)||!le(d)||!le(b)||!le(l)||!le(f)?null:j.createElement("path",Cg({},Ae(y,!0),{className:je("recharts-cross",x),d:Oz(r,i,d,b,l,f)}))},Zm,i4;function kz(){if(i4)return Zm;i4=1;var e=a0(),t=uM(),n=Wr();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return Zm=r,Zm}var Ez=kz();const Tz=Xe(Ez);var Jm,u4;function Nz(){if(u4)return Jm;u4=1;var e=a0(),t=Wr(),n=sM();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return Jm=r,Jm}var Rz=Nz();const jz=Xe(Rz);var Hz=["cx","cy","angle","ticks","axisLine"],Dz=["ticks","tick","angle","tickFormatter","stroke"];function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}function s4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s4(Object(n),!0).forEach(function(r){s0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l4(e,t){if(e==null)return{};var n=$z(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $z(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Lz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KM(r.key),r)}}function Fz(e,t,n){return t&&c4(e.prototype,t),n&&c4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qz(e,t,n){return t=fp(t),zz(e,VM()?Reflect.construct(t,n||[],fp(e).constructor):t.apply(e,n))}function zz(e,t){if(t&&(wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Uz(e)}function Uz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VM=function(){return!!e})()}function fp(e){return fp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fp(e)}function Gz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&kg(e,t)}function kg(e,t){return kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},kg(e,t)}function s0(e,t,n){return t=KM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KM(e){var t=Vz(e,"string");return wi(t)=="symbol"?t:t+""}function Vz(e,t){if(wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var l0=(function(e){function t(){return Lz(this,t),qz(this,t,arguments)}return Gz(t,e),Fz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,l=i.cx,p=i.cy;return ot(l,p,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,p=Tz(l,function(m){return m.coordinate||0}),f=jz(l,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:p.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,p=r.axisLine,f=l4(r,Hz),m=l.reduce(function(x,I){return[Math.min(x[0],I.coordinate),Math.max(x[1],I.coordinate)]},[1/0,-1/0]),d=ot(a,i,m[0],s),v=ot(a,i,m[1],s),b=ro(ro(ro({},Ae(f,!1)),{},{fill:"none"},Ae(p,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return j.createElement("line",as({className:"recharts-polar-radius-axis-line"},b))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.angle,p=a.tickFormatter,f=a.stroke,m=l4(a,Dz),d=this.getTickTextAnchor(),v=Ae(m,!1),b=Ae(s,!1),x=i.map(function(I,y){var S=r.getTickValueCoord(I),A=ro(ro(ro(ro({textAnchor:d,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},b),{},{index:y},S),{},{payload:I});return j.createElement(De,as({className:je("recharts-polar-radius-axis-tick",RM(s)),key:"tick-".concat(I.coordinate)},Ta(r.props,I,y)),t.renderTickItem(s,A,p?p(I.value,y):I.value))});return j.createElement(De,{className:"recharts-polar-radius-axis-ticks"},x)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:j.createElement(De,{className:je("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),qt.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return j.isValidElement(r)?s=j.cloneElement(r,a):ke(r)?s=r(a):s=j.createElement(go,as({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(Y.PureComponent);s0(l0,"displayName","PolarRadiusAxis");s0(l0,"axisType","radiusAxis");s0(l0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function p4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p4(Object(n),!0).forEach(function(r){c0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,YM(r.key),r)}}function Qz(e,t,n){return t&&f4(e.prototype,t),n&&f4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yz(e,t,n){return t=dp(t),Xz(e,QM()?Reflect.construct(t,n||[],dp(e).constructor):t.apply(e,n))}function Xz(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zz(e)}function Zz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function QM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(QM=function(){return!!e})()}function dp(e){return dp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dp(e)}function Jz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Eg(e,t)}function Eg(e,t){return Eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Eg(e,t)}function c0(e,t,n){return t=YM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YM(e){var t=eU(e,"string");return Pi(t)=="symbol"?t:t+""}function eU(e,t){if(Pi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tU=Math.PI/180,d4=1e-5,p0=(function(e){function t(){return Kz(this,t),Yz(this,t,arguments)}return Jz(t,e),Qz(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,l=a.radius,p=a.orientation,f=a.tickSize,m=f||8,d=ot(i,s,l,r.coordinate),v=ot(i,s,l+(p==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*tU),s;return i>d4?s=a==="outer"?"start":"end":i<-d4?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,l=r.axisLine,p=r.axisLineType,f=ao(ao({},Ae(this.props,!1)),{},{fill:"none"},Ae(l,!1));if(p==="circle")return j.createElement(Js,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var m=this.props.ticks,d=m.map(function(v){return ot(a,i,s,v.coordinate)});return j.createElement(xz,so({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.tickLine,p=a.tickFormatter,f=a.stroke,m=Ae(this.props,!1),d=Ae(s,!1),v=ao(ao({},m),{},{fill:"none"},Ae(l,!1)),b=i.map(function(x,I){var y=r.getTickLineCoord(x),S=r.getTickTextAnchor(x),A=ao(ao(ao({textAnchor:S},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:x,x:y.x2,y:y.y2});return j.createElement(De,so({className:je("recharts-polar-angle-axis-tick",RM(s)),key:"tick-".concat(x.coordinate)},Ta(r.props,x,I)),l&&j.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,y)),s&&t.renderTickItem(s,A,p?p(x.value,I):x.value))});return j.createElement(De,{className:"recharts-polar-angle-axis-ticks"},b)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:j.createElement(De,{className:je("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return j.isValidElement(r)?s=j.cloneElement(r,a):ke(r)?s=r(a):s=j.createElement(go,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(Y.PureComponent);c0(p0,"displayName","PolarAngleAxis");c0(p0,"axisType","angleAxis");c0(p0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var ev,h4;function nU(){if(h4)return ev;h4=1;var e=uW(),t=e(Object.getPrototypeOf,Object);return ev=t,ev}var tv,m4;function rU(){if(m4)return tv;m4=1;var e=Yr(),t=nU(),n=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,l=i.hasOwnProperty,p=s.call(Object);function f(m){if(!n(m)||e(m)!=r)return!1;var d=t(m);if(d===null)return!0;var v=l.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==p}return tv=f,tv}var aU=rU();const oU=Xe(aU);var nv,v4;function iU(){if(v4)return nv;v4=1;var e=Yr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return nv=r,nv}var uU=iU();const sU=Xe(uU);function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function hp(){return hp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hp.apply(this,arguments)}function lU(e,t){return dU(e)||fU(e,t)||pU(e,t)||cU()}function cU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pU(e,t){if(e){if(typeof e=="string")return g4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g4(e,t)}}function g4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function dU(e){if(Array.isArray(e))return e}function y4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function b4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y4(Object(n),!0).forEach(function(r){hU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hU(e,t,n){return t=mU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mU(e){var t=vU(e,"string");return Rs(t)=="symbol"?t:t+""}function vU(e,t){if(Rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I4=function(t,n,r,a,i){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+i),l+="L ".concat(t+r-s/2-a,",").concat(n+i),l+="L ".concat(t,",").concat(n," Z"),l},gU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},yU=function(t){var n=b4(b4({},gU),t),r=Y.useRef(),a=Y.useState(-1),i=lU(a,2),s=i[0],l=i[1];Y.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var W=r.current.getTotalLength();W&&l(W)}catch{}},[]);var p=n.x,f=n.y,m=n.upperWidth,d=n.lowerWidth,v=n.height,b=n.className,x=n.animationEasing,I=n.animationDuration,y=n.animationBegin,S=n.isUpdateAnimationActive;if(p!==+p||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var A=je("recharts-trapezoid",b);return S?j.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:p,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:p,y:f},duration:I,animationEasing:x,isActive:S},function(W){var _=W.upperWidth,w=W.lowerWidth,M=W.height,E=W.x,P=W.y;return j.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:y,duration:I,easing:x},j.createElement("path",hp({},Ae(n,!0),{className:A,d:I4(E,P,_,w,M),ref:r})))}):j.createElement("g",null,j.createElement("path",hp({},Ae(n,!0),{className:A,d:I4(p,f,m,d,v)})))},bU=["option","shapeType","propTransformer","activeClassName","isActive"];function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}function IU(e,t){if(e==null)return{};var n=BU(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function BU(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function B4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B4(Object(n),!0).forEach(function(r){xU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xU(e,t,n){return t=wU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wU(e){var t=PU(e,"string");return js(t)=="symbol"?t:t+""}function PU(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function SU(e,t){return mp(mp({},t),e)}function AU(e,t){return e==="symbols"}function x4(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return j.createElement(ub,n);case"trapezoid":return j.createElement(yU,n);case"sector":return j.createElement(DM,n);case"symbols":if(AU(t))return j.createElement(Kp,n);break;default:return null}}function WU(e){return Y.isValidElement(e)?e.props:e}function vp(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?SU:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,l=e.isActive,p=IU(e,bU),f;if(Y.isValidElement(t))f=Y.cloneElement(t,mp(mp({},p),WU(t)));else if(ke(t))f=t(p);else if(oU(t)&&!sU(t)){var m=a(t,p);f=j.createElement(x4,{shapeType:n,elementProps:m})}else{var d=p;f=j.createElement(x4,{shapeType:n,elementProps:d})}return l?j.createElement(De,{className:s},f):f}function f0(e,t){return t!=null&&"trapezoids"in e.props}function d0(e,t){return t!=null&&"sectors"in e.props}function Hs(e,t){return t!=null&&"points"in e.props}function MU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,i=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&i}function _U(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function OU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function CU(e,t){var n;return f0(e,t)?n=MU:d0(e,t)?n=_U:Hs(e,t)&&(n=OU),n}function kU(e,t){var n;return f0(e,t)?n="trapezoids":d0(e,t)?n="sectors":Hs(e,t)&&(n="points"),n}function EU(e,t){if(f0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(d0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Hs(e,t)?t.payload:{}}function TU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=kU(n,t),i=EU(n,t),s=r.filter(function(p,f){var m=Na(i,p),d=n.props[a].filter(function(x){var I=CU(n,t);return I(x,t)}),v=n.props[a].indexOf(d[d.length-1]),b=f===v;return m&&b}),l=r.indexOf(s[s.length-1]);return l}var Ac;function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function w4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w4(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ZM(r.key),r)}}function RU(e,t,n){return t&&P4(e.prototype,t),n&&P4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jU(e,t,n){return t=gp(t),HU(e,XM()?Reflect.construct(t,n||[],gp(e).constructor):t.apply(e,n))}function HU(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DU(e)}function DU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function XM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XM=function(){return!!e})()}function gp(e){return gp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},gp(e)}function $U(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Tg(e,t)}function Tg(e,t){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,t)}function qn(e,t,n){return t=ZM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZM(e){var t=LU(e,"string");return Si(t)=="symbol"?t:t+""}function LU(e,t){if(Si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return NU(this,t),r=jU(this,t,[n]),qn(r,"pieRef",null),qn(r,"sectorRefs",[]),qn(r,"id",Ha("recharts-pie-")),qn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),qn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return $U(t,e),RU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,l=i.labelLine,p=i.dataKey,f=i.valueKey,m=Ae(this.props,!1),d=Ae(s,!1),v=Ae(l,!1),b=s&&s.offsetRadius||20,x=r.map(function(I,y){var S=(I.startAngle+I.endAngle)/2,A=ot(I.cx,I.cy,I.outerRadius+b,S),W=rt(rt(rt(rt({},m),I),{},{stroke:"none"},d),{},{index:y,textAnchor:t.getTextAnchor(A.x,I.cx)},A),_=rt(rt(rt(rt({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:y,points:[ot(I.cx,I.cy,I.outerRadius,S),A]}),w=p;return Ee(p)&&Ee(f)?w="value":Ee(p)&&(w=f),j.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(y)},l&&t.renderLabelLineItem(l,_,"line"),t.renderLabelItem(s,W,lt(I,w)))});return j.createElement(De,{className:"recharts-pie-labels"},x)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,l=i.blendStroke,p=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=p&&a.hasActiveIndex()?p:null,b=d?s:v,x=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return j.createElement(De,oi({ref:function(y){y&&!a.sectorRefs.includes(y)&&a.sectorRefs.push(y)},tabIndex:-1,className:"recharts-pie-sector"},Ta(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),j.createElement(vp,oi({option:b,isActive:d,shapeType:"sector"},x)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,b=d.prevIsAnimationActive;return j.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(b),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(x){var I=x.t,y=[],S=i&&i[0],A=S.startAngle;return i.forEach(function(W,_){var w=v&&v[_],M=_>0?Mn(W,"paddingAngle",0):0;if(w){var E=ht(w.endAngle-w.startAngle,W.endAngle-W.startAngle),P=rt(rt({},W),{},{startAngle:A+M,endAngle:A+E(I)+M});y.push(P),A=P.endAngle}else{var O=W.endAngle,N=W.startAngle,D=ht(0,O-N),T=D(I),q=rt(rt({},W),{},{startAngle:A+M,endAngle:A+T+M});y.push(q),A=q.endAngle}}),j.createElement(De,null,r.renderSectorsStatically(y))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,l=a.className,p=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,b=a.isAnimationActive,x=this.state.isAnimationFinished;if(i||!s||!s.length||!le(f)||!le(m)||!le(d)||!le(v))return null;var I=je("recharts-pie",l);return j.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),p&&this.renderLabels(s),qt.renderCallByParent(this.props,null,!1),(!b||x)&&sr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(j.isValidElement(r))return j.cloneElement(r,a);if(ke(r))return r(a);var s=je("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return j.createElement(ka,oi({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(j.isValidElement(r))return j.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),j.isValidElement(s)))return s;var l=je("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return j.createElement(go,oi({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(Y.PureComponent);Ac=ea;qn(ea,"displayName","Pie");qn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});qn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=Ae(e,!1),a=sn(n,Ks);return t&&t.length?t.map(function(i,s){return rt(rt(rt({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rt(rt({},r),i.props)}):[]});qn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,i=t.height,s=NM(a,i),l=r+on(e.cx,a,a/2),p=n+on(e.cy,i,i/2),f=on(e.innerRadius,s,0),m=on(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:l,cy:p,innerRadius:f,outerRadius:m,maxRadius:d}});qn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=Ac.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,l=r.endAngle,p=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,b=Math.abs(r.minAngle),x=Ac.parseCoordinateOfPie(r,n),I=Ac.parseDeltaAngle(s,l),y=Math.abs(I),S=f;Ee(f)&&Ee(d)?(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ee(f)&&(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var A=a.filter(function(P){return lt(P,S,0)!==0}).length,W=(y>=360?A:A-1)*p,_=y-A*b-W,w=a.reduce(function(P,O){var N=lt(O,S,0);return P+(le(N)?N:0)},0),M;if(w>0){var E;M=a.map(function(P,O){var N=lt(P,S,0),D=lt(P,m,O),T=(le(N)?N:0)/w,q;O?q=E.endAngle+an(I)*p*(N!==0?1:0):q=s;var F=q+an(I)*((N!==0?b:0)+T*_),G=(q+F)/2,Q=(x.innerRadius+x.outerRadius)/2,V=[{name:D,value:N,payload:P,dataKey:S,type:v}],H=ot(x.cx,x.cy,Q,G);return E=rt(rt(rt({percent:T,cornerRadius:i,name:D,tooltipPayload:V,midAngle:G,middleRadius:Q,tooltipPosition:H},P),x),{},{value:lt(P,S),startAngle:q,endAngle:F,payload:P,paddingAngle:an(I)*p}),E})}return rt(rt({},x),{},{sectors:M,data:a})});var rv,S4;function FU(){if(S4)return rv;S4=1;var e=Math.ceil,t=Math.max;function n(r,a,i,s){for(var l=-1,p=t(e((a-r)/(i||1)),0),f=Array(p);p--;)f[s?p:++l]=r,r+=i;return f}return rv=n,rv}var av,A4;function JM(){if(A4)return av;A4=1;var e=wW(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var i=a<0?-1:1;return i*n}return a===a?a:0}return av=r,av}var ov,W4;function qU(){if(W4)return ov;W4=1;var e=FU(),t=Xp(),n=JM();function r(a){return function(i,s,l){return l&&typeof l!="number"&&t(i,s,l)&&(s=l=void 0),i=n(i),s===void 0?(s=i,i=0):s=n(s),l=l===void 0?i<s?1:-1:n(l),e(i,s,l,a)}}return ov=r,ov}var iv,M4;function zU(){if(M4)return iv;M4=1;var e=qU(),t=e();return iv=t,iv}var UU=zU();const yp=Xe(UU);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function _4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_4(Object(n),!0).forEach(function(r){e_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e_(e,t,n){return t=GU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GU(e){var t=VU(e,"string");return Ds(t)=="symbol"?t:t+""}function VU(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var KU=["Webkit","Moz","O","ms"],QU=function(t,n){var r=t.replace(/(\w)/,function(i){return i.toUpperCase()}),a=KU.reduce(function(i,s){return O4(O4({},i),{},e_({},s+r,n))},{});return a[t]=n,a};function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function bp(){return bp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bp.apply(this,arguments)}function C4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function uv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C4(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n_(r.key),r)}}function XU(e,t,n){return t&&k4(e.prototype,t),n&&k4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZU(e,t,n){return t=Ip(t),JU(e,t_()?Reflect.construct(t,n||[],Ip(e).constructor):t.apply(e,n))}function JU(e,t){if(t&&(Ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eG(e)}function eG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(t_=function(){return!!e})()}function Ip(e){return Ip=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ip(e)}function tG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ng(e,t)}function Ng(e,t){return Ng=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ng(e,t)}function Pn(e,t,n){return t=n_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n_(e){var t=nG(e,"string");return Ai(t)=="symbol"?t:t+""}function nG(e,t){if(Ai(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var rG=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,i=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var p=n.length,f=es().domain(yp(0,p)).range([i,i+s-l]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},E4=function(t){return t.changedTouches&&!!t.changedTouches.length},Wi=(function(e){function t(n){var r;return YU(this,t),r=ZU(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:i,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var i=E4(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return tG(t,e),XU(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,l=this.props,p=l.gap,f=l.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),b=t.getIndexInRange(s,d),x=t.getIndexInRange(s,v);return{startIndex:b-b%p,endIndex:x===m?m:x-x%p}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,l=a.dataKey,p=lt(i[r],l,r);return ke(s)?s(p,r):p}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,l=a.endX,p=this.props,f=p.x,m=p.width,d=p.travellerWidth,v=p.startIndex,b=p.endIndex,x=p.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-l,f+m-d-s):I<0&&(I=Math.max(I,f-s,f-l));var y=this.getIndex({startX:s+I,endX:l+I});(y.startIndex!==v||y.endIndex!==b)&&x&&x(y),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=E4(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,p=a.startX,f=this.state[s],m=this.props,d=m.x,v=m.width,b=m.travellerWidth,x=m.onChange,I=m.gap,y=m.data,S={startX:this.state.startX,endX:this.state.endX},A=r.pageX-i;A>0?A=Math.min(A,d+v-b-f):A<0&&(A=Math.max(A,d-f)),S[s]=f+A;var W=this.getIndex(S),_=W.startIndex,w=W.endIndex,M=function(){var P=y.length-1;return s==="startX"&&(l>p?_%I===0:w%I===0)||l<p&&w===P||s==="endX"&&(l>p?w%I===0:_%I===0)||l>p&&w===P};this.setState(Pn(Pn({},s,f+A),"brushMoveStartX",r.pageX),function(){x&&M()&&x(W)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,l=s.scaleValues,p=s.startX,f=s.endX,m=this.state[a],d=l.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=l.length)){var b=l[v];a==="startX"&&b>=f||a==="endX"&&b<=p||this.setState(Pn({},a,b),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.fill,f=r.stroke;return j.createElement("rect",{stroke:f,fill:p,x:a,y:i,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.data,f=r.children,m=r.padding,d=Y.Children.only(f);return d?j.cloneElement(d,{x:a,y:i,width:s,height:l,margin:m,compact:!0,data:p}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,l=this,p=this.props,f=p.y,m=p.travellerWidth,d=p.height,v=p.traveller,b=p.ariaLabel,x=p.data,I=p.startIndex,y=p.endIndex,S=Math.max(r,this.props.x),A=uv(uv({},Ae(this.props,!1)),{},{x:S,y:f,width:m,height:d}),W=b||"Min value: ".concat((i=x[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=x[y])===null||s===void 0?void 0:s.name);return j.createElement(De,{tabIndex:0,role:"slider","aria-label":W,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,A))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,l=i.height,p=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return j.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:p,fillOpacity:.2,x:m,y:s,width:d,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,l=r.height,p=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,b=5,x={pointerEvents:"none",fill:f};return j.createElement(De,{className:"recharts-brush-texts"},j.createElement(go,bp({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-b,y:s+l/2},x),this.getTextOfTick(a)),j.createElement(go,bp({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+p+b,y:s+l/2},x),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,l=r.x,p=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,b=v.startX,x=v.endX,I=v.isTextActive,y=v.isSlideMoving,S=v.isTravellerMoving,A=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(p)||!le(f)||!le(m)||f<=0||m<=0)return null;var W=je("recharts-brush",i),_=j.Children.count(s)===1,w=QU("userSelect","none");return j.createElement(De,{className:W,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),_&&this.renderPanorama(),this.renderSlide(b,x),this.renderTravellerLayer(b,"startX"),this.renderTravellerLayer(x,"endX"),(I||y||S||A||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,l=r.height,p=r.stroke,f=Math.floor(i+l/2)-1;return j.createElement(j.Fragment,null,j.createElement("rect",{x:a,y:i,width:s,height:l,fill:p,stroke:"none"}),j.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),j.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return j.isValidElement(r)?i=j.cloneElement(r,a):ke(r)?i=r(a):i=t.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,l=r.x,p=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return uv({prevData:i,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s},i&&i.length?rG({data:i,width:s,x:l,travellerWidth:p,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||p!==a.prevTravellerWidth)){a.scale.range([l,l+s-p]);var v=a.scale.domain().map(function(b){return a.scale(b)});return{prevData:i,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,l=i-1;l-s>1;){var p=Math.floor((s+l)/2);r[p]>a?l=p:s=p}return a>=r[l]?l:s}}])})(Y.PureComponent);Pn(Wi,"displayName","Brush");Pn(Wi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var sv,T4;function aG(){if(T4)return sv;T4=1;var e=ky();function t(n,r){var a;return e(n,function(i,s,l){return a=r(i,s,l),!a}),!!a}return sv=t,sv}var lv,N4;function oG(){if(N4)return lv;N4=1;var e=eW(),t=Wr(),n=aG(),r=yn(),a=Xp();function i(s,l,p){var f=r(s)?e:n;return p&&a(s,l,p)&&(l=void 0),f(s,t(l,3))}return lv=i,lv}var iG=oG();const uG=Xe(iG);var wr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},cv,R4;function sG(){if(R4)return cv;R4=1;var e=yW();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return cv=t,cv}var pv,j4;function lG(){if(j4)return pv;j4=1;var e=sG(),t=vW(),n=Wr();function r(a,i){var s={};return i=n(i,3),t(a,function(l,p,f){e(s,p,i(l,p,f))}),s}return pv=r,pv}var cG=lG();const pG=Xe(cG);var fv,H4;function fG(){if(H4)return fv;H4=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return fv=e,fv}var dv,D4;function dG(){if(D4)return dv;D4=1;var e=ky();function t(n,r){var a=!0;return e(n,function(i,s,l){return a=!!r(i,s,l),a}),a}return dv=t,dv}var hv,$4;function hG(){if($4)return hv;$4=1;var e=fG(),t=dG(),n=Wr(),r=yn(),a=Xp();function i(s,l,p){var f=r(s)?e:t;return p&&a(s,l,p)&&(l=void 0),f(s,n(l,3))}return hv=i,hv}var mG=hG();const r_=Xe(mG);var vG=["x","y"];function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function Rg(){return Rg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rg.apply(this,arguments)}function L4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Qu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L4(Object(n),!0).forEach(function(r){gG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gG(e,t,n){return t=yG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yG(e){var t=bG(e,"string");return $s(t)=="symbol"?t:t+""}function bG(e,t){if($s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IG(e,t){if(e==null)return{};var n=BG(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function BG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function xG(e,t){var n=e.x,r=e.y,a=IG(e,vG),i="".concat(n),s=parseInt(i,10),l="".concat(r),p=parseInt(l,10),f="".concat(t.height||a.height),m=parseInt(f,10),d="".concat(t.width||a.width),v=parseInt(d,10);return Qu(Qu(Qu(Qu(Qu({},t),a),s?{x:s}:{}),p?{y:p}:{}),{},{height:m,width:v,name:t.name,radius:t.radius})}function F4(e){return j.createElement(vp,Rg({shapeType:"rectangle",propTransformer:xG,activeClassName:"recharts-active-bar"},e))}var wG=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var i=typeof r=="number";return i?t(r,a):(i||bo(),n)}},PG=["value","background"],a_;function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function SG(e,t){if(e==null)return{};var n=AG(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function AG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Bp(){return Bp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bp.apply(this,arguments)}function q4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q4(Object(n),!0).forEach(function(r){Ma(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i_(r.key),r)}}function MG(e,t,n){return t&&z4(e.prototype,t),n&&z4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _G(e,t,n){return t=xp(t),OG(e,o_()?Reflect.construct(t,n||[],xp(e).constructor):t.apply(e,n))}function OG(e,t){if(t&&(Mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CG(e)}function CG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(o_=function(){return!!e})()}function xp(e){return xp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xp(e)}function kG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&jg(e,t)}function jg(e,t){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,t)}function Ma(e,t,n){return t=i_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i_(e){var t=EG(e,"string");return Mi(t)=="symbol"?t:t+""}function EG(e,t){if(Mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function t(){var n;WG(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=_G(this,t,[].concat(a)),Ma(n,"state",{isAnimationFinished:!1}),Ma(n,"id",Ha("recharts-bar-")),Ma(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),Ma(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return kG(t,e),MG(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.dataKey,p=i.activeIndex,f=i.activeBar,m=Ae(this.props,!1);return r&&r.map(function(d,v){var b=v===p,x=b?f:s,I=_t(_t(_t({},m),d),{},{isActive:b,option:x,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return j.createElement(De,Bp({className:"recharts-bar-rectangle"},Ta(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),j.createElement(F4,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,l=a.isAnimationActive,p=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return j.createElement(Kn,{begin:p,duration:f,isActive:l,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(b){var x=b.t,I=i.map(function(y,S){var A=v&&v[S];if(A){var W=ht(A.x,y.x),_=ht(A.y,y.y),w=ht(A.width,y.width),M=ht(A.height,y.height);return _t(_t({},y),{},{x:W(x),y:_(x),width:w(x),height:M(x)})}if(s==="horizontal"){var E=ht(0,y.height),P=E(x);return _t(_t({},y),{},{y:y.y+y.height-P,height:P})}var O=ht(0,y.width),N=O(x);return _t(_t({},y),{},{width:N})});return j.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,l=a.activeIndex,p=Ae(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=SG(f,PG);if(!d)return null;var b=_t(_t(_t(_t(_t({},v),{},{fill:"#eee"},d),p),Ta(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:m,className:"recharts-bar-background-rectangle"});return j.createElement(F4,Bp({key:"background-bar-".concat(m),option:r.props.background,isActive:m===l},b))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,l=i.xAxis,p=i.yAxis,f=i.layout,m=i.children,d=sn(m,Zi);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,b=function(y,S){var A=Array.isArray(y.value)?y.value[1]:y.value;return{x:y.x,y:y.y,value:A,errorVal:lt(y,S)}},x={clipPath:r?"url(#clipPath-".concat(a,")"):null};return j.createElement(De,x,d.map(function(I){return j.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,offset:v,dataPointFormatter:b})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,l=r.xAxis,p=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,b=r.isAnimationActive,x=r.background,I=r.id;if(a||!i||!i.length)return null;var y=this.state.isAnimationFinished,S=je("recharts-bar",s),A=l&&l.allowDataOverflow,W=p&&p.allowDataOverflow,_=A||W,w=Ee(I)?this.id:I;return j.createElement(De,{className:S},A||W?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(w)},j.createElement("rect",{x:A?f:f-d/2,y:W?m:m-v/2,width:A?d:d*2,height:W?v:v*2}))):null,j.createElement(De,{className:"recharts-bar-rectangles",clipPath:_?"url(#clipPath-".concat(w,")"):null},x?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(_,w),(!b||y)&&sr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(Y.PureComponent);a_=Sr;Ma(Sr,"displayName","Bar");Ma(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Ma(Sr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,l=e.xAxisTicks,p=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,b=aq(r,n);if(!b)return null;var x=t.layout,I=n.type.defaultProps,y=I!==void 0?_t(_t({},I),n.props):n.props,S=y.dataKey,A=y.children,W=y.minPointSize,_=x==="horizontal"?s:i,w=f?_.scale.domain():null,M=pq({numericAxis:_}),E=sn(A,Ks),P=d.map(function(O,N){var D,T,q,F,G,Q;f?D=oq(f[m+N],w):(D=lt(O,S),Array.isArray(D)||(D=[M,D]));var V=wG(W,a_.defaultProps.minPointSize)(D[1],N);if(x==="horizontal"){var H,U=[s.scale(D[0]),s.scale(D[1])],X=U[0],R=U[1];T=yS({axis:i,ticks:l,bandSize:a,offset:b.offset,entry:O,index:N}),q=(H=R??X)!==null&&H!==void 0?H:void 0,F=b.size;var $=X-R;if(G=Number.isNaN($)?0:$,Q={x:T,y:s.y,width:F,height:s.height},Math.abs(V)>0&&Math.abs(G)<Math.abs(V)){var Z=an(G||V)*(Math.abs(V)-Math.abs(G));q-=Z,G+=Z}}else{var ue=[i.scale(D[0]),i.scale(D[1])],he=ue[0],ge=ue[1];if(T=he,q=yS({axis:s,ticks:p,bandSize:a,offset:b.offset,entry:O,index:N}),F=ge-he,G=b.size,Q={x:i.x,y:q,width:i.width,height:G},Math.abs(V)>0&&Math.abs(F)<Math.abs(V)){var ye=an(F||V)*(Math.abs(V)-Math.abs(F));F+=ye}}return _t(_t(_t({},O),{},{x:T,y:q,width:F,height:G,value:f?D:D[1],payload:O,background:Q},E&&E[N]&&E[N].props),{},{tooltipPayload:[EM(n,O)],tooltipPosition:{x:T+F/2,y:q+G/2}})});return _t({data:P,layout:x},v)});function Ls(e){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ls(e)}function TG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u_(r.key),r)}}function NG(e,t,n){return t&&U4(e.prototype,t),n&&U4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function G4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?G4(Object(n),!0).forEach(function(r){h0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h0(e,t,n){return t=u_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u_(e){var t=RG(e,"string");return Ls(t)=="symbol"?t:t+""}function RG(e,t){if(Ls(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sb=function(t,n,r,a,i){var s=t.width,l=t.height,p=t.layout,f=t.children,m=Object.keys(n),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Sr);return m.reduce(function(b,x){var I=n[x],y=I.orientation,S=I.domain,A=I.padding,W=A===void 0?{}:A,_=I.mirror,w=I.reversed,M="".concat(y).concat(_?"Mirror":""),E,P,O,N,D;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var T=S[1]-S[0],q=1/0,F=I.categoricalDomain.sort();if(F.forEach(function(ue,he){he>0&&(q=Math.min((ue||0)-(F[he-1]||0),q))}),Number.isFinite(q)){var G=q/T,Q=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(E=G*Q/2),I.padding==="no-gap"){var V=on(t.barCategoryGap,G*Q),H=G*Q/2;E=H-V-(H-V)/Q*V}}}a==="xAxis"?P=[r.left+(W.left||0)+(E||0),r.left+r.width-(W.right||0)-(E||0)]:a==="yAxis"?P=p==="horizontal"?[r.top+r.height-(W.bottom||0),r.top+(W.top||0)]:[r.top+(W.top||0)+(E||0),r.top+r.height-(W.bottom||0)-(E||0)]:P=I.range,w&&(P=[P[1],P[0]]);var U=_M(I,i,v),X=U.scale,R=U.realScaleType;X.domain(S).range(P),OM(X);var $=CM(X,ar(ar({},I),{},{realScaleType:R}));a==="xAxis"?(D=y==="top"&&!_||y==="bottom"&&_,O=r.left,N=d[M]-D*I.height):a==="yAxis"&&(D=y==="left"&&!_||y==="right"&&_,O=d[M]-D*I.width,N=r.top);var Z=ar(ar(ar({},I),$),{},{realScaleType:R,x:O,y:N,scale:X,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return Z.bandSize=ap(Z,$),!I.hide&&a==="xAxis"?d[M]+=(D?-1:1)*Z.height:I.hide||(d[M]+=(D?-1:1)*Z.width),ar(ar({},b),{},h0({},x,Z))},{})},s_=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},jG=function(t){var n=t.x1,r=t.y1,a=t.x2,i=t.y2;return s_({x:n,y:r},{x:a,y:i})},l_=(function(){function e(t){TG(this,e),this.scale=t}return NG(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(n!==void 0){if(i)switch(i){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var p=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+p}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?n>=a&&n<=i:n>=i&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();h0(l_,"EPS",1e-4);var lb=function(t){var n=Object.keys(t).reduce(function(r,a){return ar(ar({},r),{},h0({},a,l_.create(t[a])))},{});return ar(ar({},n),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,l=i.position;return pG(a,function(p,f){return n[f].apply(p,{bandAware:s,position:l})})},isInRange:function(a){return r_(a,function(i,s){return n[s].isInRange(i)})}})};function HG(e){return(e%180+180)%180}var DG=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=HG(a),s=i*Math.PI/180,l=Math.atan(r/n),p=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(p)},mv,V4;function $G(){if(V4)return mv;V4=1;var e=Wr(),t=Vs(),n=Qp();function r(a){return function(i,s,l){var p=Object(i);if(!t(i)){var f=e(s,3);i=n(i),s=function(d){return f(p[d],d,p)}}var m=a(i,s,l);return m>-1?p[f?i[m]:m]:void 0}}return mv=r,mv}var vv,K4;function LG(){if(K4)return vv;K4=1;var e=JM();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return vv=t,vv}var gv,Q4;function FG(){if(Q4)return gv;Q4=1;var e=pW(),t=Wr(),n=LG(),r=Math.max;function a(i,s,l){var p=i==null?0:i.length;if(!p)return-1;var f=l==null?0:n(l);return f<0&&(f=r(p+f,0)),e(i,t(s,3),f)}return gv=a,gv}var yv,Y4;function qG(){if(Y4)return yv;Y4=1;var e=$G(),t=FG(),n=e(t);return yv=n,yv}var zG=qG();const UG=Xe(zG);var GG=AA();const VG=Xe(GG);var KG=VG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),cb=Y.createContext(void 0),pb=Y.createContext(void 0),c_=Y.createContext(void 0),p_=Y.createContext({}),f_=Y.createContext(void 0),d_=Y.createContext(0),h_=Y.createContext(0),X4=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,i=n.offset,s=t.clipPathId,l=t.children,p=t.width,f=t.height,m=KG(i);return j.createElement(cb.Provider,{value:r},j.createElement(pb.Provider,{value:a},j.createElement(p_.Provider,{value:i},j.createElement(c_.Provider,{value:m},j.createElement(f_.Provider,{value:s},j.createElement(d_.Provider,{value:f},j.createElement(h_.Provider,{value:p},l)))))))},QG=function(){return Y.useContext(f_)},m_=function(t){var n=Y.useContext(cb);n==null&&bo();var r=n[t];return r==null&&bo(),r},YG=function(){var t=Y.useContext(cb);return Aa(t)},XG=function(){var t=Y.useContext(pb),n=UG(t,function(r){return r_(r.domain,Number.isFinite)});return n||Aa(t)},v_=function(t){var n=Y.useContext(pb);n==null&&bo();var r=n[t];return r==null&&bo(),r},ZG=function(){var t=Y.useContext(c_);return t},JG=function(){return Y.useContext(p_)},fb=function(){return Y.useContext(h_)},db=function(){return Y.useContext(d_)};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function eV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y_(r.key),r)}}function nV(e,t,n){return t&&tV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function rV(e,t,n){return t=wp(t),aV(e,g_()?Reflect.construct(t,n||[],wp(e).constructor):t.apply(e,n))}function aV(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oV(e)}function oV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(g_=function(){return!!e})()}function wp(e){return wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},wp(e)}function iV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hg(e,t)}function Hg(e,t){return Hg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Hg(e,t)}function Z4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function J4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z4(Object(n),!0).forEach(function(r){hb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hb(e,t,n){return t=y_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y_(e){var t=uV(e,"string");return _i(t)=="symbol"?t:t+""}function uV(e,t){if(_i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function sV(e,t){return fV(e)||pV(e,t)||cV(e,t)||lV()}function lV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cV(e,t){if(e){if(typeof e=="string")return e3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e3(e,t)}}function e3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pV(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function fV(e){if(Array.isArray(e))return e}function Dg(){return Dg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dg.apply(this,arguments)}var dV=function(t,n){var r;return j.isValidElement(t)?r=j.cloneElement(t,n):ke(t)?r=t(n):r=j.createElement("line",Dg({},n,{className:"recharts-reference-line-line"})),r},hV=function(t,n,r,a,i,s,l,p,f){var m=i.x,d=i.y,v=i.width,b=i.height;if(r){var x=f.y,I=t.y.apply(x,{position:s});if(wr(f,"discard")&&!t.y.isInRange(I))return null;var y=[{x:m+v,y:I},{x:m,y:I}];return p==="left"?y.reverse():y}if(n){var S=f.x,A=t.x.apply(S,{position:s});if(wr(f,"discard")&&!t.x.isInRange(A))return null;var W=[{x:A,y:d+b},{x:A,y:d}];return l==="top"?W.reverse():W}if(a){var _=f.segment,w=_.map(function(M){return t.apply(M,{position:s})});return wr(f,"discard")&&uG(w,function(M){return!t.isInRange(M)})?null:w}return null};function mV(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,l=e.className,p=e.alwaysShow,f=QG(),m=m_(a),d=v_(i),v=ZG();if(!f||!v)return null;ur(p===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var b=lb({x:m.scale,y:d.scale}),x=Rt(t),I=Rt(n),y=r&&r.length===2,S=hV(b,x,I,y,v,e.position,m.orientation,d.orientation,e);if(!S)return null;var A=sV(S,2),W=A[0],_=W.x,w=W.y,M=A[1],E=M.x,P=M.y,O=wr(e,"hidden")?"url(#".concat(f,")"):void 0,N=J4(J4({clipPath:O},Ae(e,!0)),{},{x1:_,y1:w,x2:E,y2:P});return j.createElement(De,{className:je("recharts-reference-line",l)},dV(s,N),qt.renderCallByParent(e,jG({x1:_,y1:w,x2:E,y2:P})))}var mb=(function(e){function t(){return eV(this,t),rV(this,t,arguments)}return iV(t,e),nV(t,[{key:"render",value:function(){return j.createElement(mV,this.props)}}])})(j.Component);hb(mb,"displayName","ReferenceLine");hb(mb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$g.apply(this,arguments)}function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function t3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function n3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?t3(Object(n),!0).forEach(function(r){m0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,I_(r.key),r)}}function yV(e,t,n){return t&&gV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function bV(e,t,n){return t=Pp(t),IV(e,b_()?Reflect.construct(t,n||[],Pp(e).constructor):t.apply(e,n))}function IV(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BV(e)}function BV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(b_=function(){return!!e})()}function Pp(e){return Pp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pp(e)}function xV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Lg(e,t)}function Lg(e,t){return Lg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lg(e,t)}function m0(e,t,n){return t=I_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I_(e){var t=wV(e,"string");return Oi(t)=="symbol"?t:t+""}function wV(e,t){if(Oi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var PV=function(t){var n=t.x,r=t.y,a=t.xAxis,i=t.yAxis,s=lb({x:a.scale,y:i.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return wr(t,"discard")&&!s.isInRange(l)?null:l},v0=(function(e){function t(){return vV(this,t),bV(this,t,arguments)}return xV(t,e),yV(t,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,l=r.alwaysShow,p=r.clipPathId,f=Rt(a),m=Rt(i);if(ur(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=PV(this.props);if(!d)return null;var v=d.x,b=d.y,x=this.props,I=x.shape,y=x.className,S=wr(this.props,"hidden")?"url(#".concat(p,")"):void 0,A=n3(n3({clipPath:S},Ae(this.props,!0)),{},{cx:v,cy:b});return j.createElement(De,{className:je("recharts-reference-dot",y)},t.renderDot(I,A),qt.renderCallByParent(this.props,{x:v-s,y:b-s,width:2*s,height:2*s}))}}])})(j.Component);m0(v0,"displayName","ReferenceDot");m0(v0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});m0(v0,"renderDot",function(e,t){var n;return j.isValidElement(e)?n=j.cloneElement(e,t):ke(e)?n=e(t):n=j.createElement(Js,$g({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function Fg(){return Fg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fg.apply(this,arguments)}function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function r3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function a3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?r3(Object(n),!0).forEach(function(r){g0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x_(r.key),r)}}function WV(e,t,n){return t&&AV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function MV(e,t,n){return t=Sp(t),_V(e,B_()?Reflect.construct(t,n||[],Sp(e).constructor):t.apply(e,n))}function _V(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return OV(e)}function OV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(B_=function(){return!!e})()}function Sp(e){return Sp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sp(e)}function CV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qg(e,t)}function qg(e,t){return qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},qg(e,t)}function g0(e,t,n){return t=x_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x_(e){var t=kV(e,"string");return Ci(t)=="symbol"?t:t+""}function kV(e,t){if(Ci(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var EV=function(t,n,r,a,i){var s=i.x1,l=i.x2,p=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=lb({x:m.scale,y:d.scale}),b={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(p,{position:"start"}):v.y.rangeMin},x={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(b)||!v.isInRange(x))?null:s_(b,x)},y0=(function(e){function t(){return SV(this,t),MV(this,t,arguments)}return CV(t,e),WV(t,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,l=r.y2,p=r.className,f=r.alwaysShow,m=r.clipPathId;ur(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Rt(a),v=Rt(i),b=Rt(s),x=Rt(l),I=this.props.shape;if(!d&&!v&&!b&&!x&&!I)return null;var y=EV(d,v,b,x,this.props);if(!y&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return j.createElement(De,{className:je("recharts-reference-area",p)},t.renderRect(I,a3(a3({clipPath:S},Ae(this.props,!0)),y)),qt.renderCallByParent(this.props,y))}}])})(j.Component);g0(y0,"displayName","ReferenceArea");g0(y0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});g0(y0,"renderRect",function(e,t){var n;return j.isValidElement(e)?n=j.cloneElement(e,t):ke(e)?n=e(t):n=j.createElement(ub,Fg({},t,{className:"recharts-reference-area-rect"})),n});function w_(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function TV(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return DG(r,n)}function NV(e,t,n){var r=n==="width",a=e.x,i=e.y,s=e.width,l=e.height;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function Ap(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function RV(e,t){return w_(e,t+1)}function jV(e,t,n,r,a){for(var i=(r||[]).slice(),s=t.start,l=t.end,p=0,f=1,m=s,d=function(){var x=r==null?void 0:r[p];if(x===void 0)return{v:w_(r,f)};var I=p,y,S=function(){return y===void 0&&(y=n(x,I)),y},A=x.coordinate,W=p===0||Ap(e,A,S,m,l);W||(p=0,m=s,f+=1),W&&(m=A+e*(S()/2+a),p+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function o3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o3(Object(n),!0).forEach(function(r){HV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HV(e,t,n){return t=DV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DV(e){var t=$V(e,"string");return Fs(t)=="symbol"?t:t+""}function $V(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LV(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,l=t.start,p=t.end,f=function(v){var b=i[v],x,I=function(){return x===void 0&&(x=n(b,v)),x};if(v===s-1){var y=e*(b.coordinate+e*I()/2-p);i[v]=b=Jt(Jt({},b),{},{tickCoord:y>0?b.coordinate-y*e:b.coordinate})}else i[v]=b=Jt(Jt({},b),{},{tickCoord:b.coordinate});var S=Ap(e,b.tickCoord,I,l,p);S&&(p=b.tickCoord-e*(I()/2+a),i[v]=Jt(Jt({},b),{},{isShow:!0}))},m=s-1;m>=0;m--)f(m);return i}function FV(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,p=t.start,f=t.end;if(i){var m=r[l-1],d=n(m,l-1),v=e*(m.coordinate+e*d/2-f);s[l-1]=m=Jt(Jt({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var b=Ap(e,m.tickCoord,function(){return d},p,f);b&&(f=m.tickCoord-e*(d/2+a),s[l-1]=Jt(Jt({},m),{},{isShow:!0}))}for(var x=i?l-1:l,I=function(A){var W=s[A],_,w=function(){return _===void 0&&(_=n(W,A)),_};if(A===0){var M=e*(W.coordinate-e*w()/2-p);s[A]=W=Jt(Jt({},W),{},{tickCoord:M<0?W.coordinate-M*e:W.coordinate})}else s[A]=W=Jt(Jt({},W),{},{tickCoord:W.coordinate});var E=Ap(e,W.tickCoord,w,p,f);E&&(p=W.tickCoord+e*(w()/2+a),s[A]=Jt(Jt({},W),{},{isShow:!0}))},y=0;y<x;y++)I(y);return s}function vb(e,t,n){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,l=e.orientation,p=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(p)||Zr.isSsr)return RV(a,typeof p=="number"&&le(p)?p:0);var v=[],b=l==="top"||l==="bottom"?"width":"height",x=m&&b==="width"?Ju(m,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(W,_){var w=ke(f)?f(W.value,_):W.value;return b==="width"?TV(Ju(w,{fontSize:t,letterSpacing:n}),x,d):Ju(w,{fontSize:t,letterSpacing:n})[b]},y=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=NV(i,y,b);return p==="equidistantPreserveStart"?jV(y,S,I,a,s):(p==="preserveStart"||p==="preserveStartEnd"?v=FV(y,S,I,a,s,p==="preserveStartEnd"):v=LV(y,S,I,a,s),v.filter(function(A){return A.isShow}))}var qV=["viewBox"],zV=["viewBox"],UV=["ticks"];function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}function i3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i3(Object(n),!0).forEach(function(r){gb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bv(e,t){if(e==null)return{};var n=GV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function GV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function VV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S_(r.key),r)}}function KV(e,t,n){return t&&u3(e.prototype,t),n&&u3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function QV(e,t,n){return t=Wp(t),YV(e,P_()?Reflect.construct(t,n||[],Wp(e).constructor):t.apply(e,n))}function YV(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return XV(e)}function XV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(P_=function(){return!!e})()}function Wp(e){return Wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wp(e)}function ZV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zg(e,t)}function zg(e,t){return zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},zg(e,t)}function gb(e,t,n){return t=S_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S_(e){var t=JV(e,"string");return ki(t)=="symbol"?t:t+""}function JV(e,t){if(ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ji=(function(e){function t(n){var r;return VV(this,t),r=QV(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return ZV(t,e),KV(t,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=bv(r,qV),l=this.props,p=l.viewBox,f=bv(l,zV);return!si(i,p)||!si(s,f)||!si(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,l=a.width,p=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,b,x,I,y,S,A,W=d?-1:1,_=r.tickSize||m,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":b=x=r.coordinate,y=s+ +!d*p,I=y-W*_,A=I-W*v,S=w;break;case"left":I=y=r.coordinate,x=i+ +!d*l,b=x-W*_,S=b-W*v,A=w;break;case"right":I=y=r.coordinate,x=i+ +d*l,b=x+W*_,S=b+W*v,A=w;break;default:b=x=r.coordinate,y=s+ +d*p,I=y+W*_,A=I+W*v,S=w;break}return{line:{x1:b,y1:I,x2:x,y2:y},tick:{x:S,y:A}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.orientation,f=r.mirror,m=r.axisLine,d=rn(rn(rn({},Ae(this.props,!1)),Ae(m,!1)),{},{fill:"none"});if(p==="top"||p==="bottom"){var v=+(p==="top"&&!f||p==="bottom"&&f);d=rn(rn({},d),{},{x1:a,y1:i+v*l,x2:a+s,y2:i+v*l})}else{var b=+(p==="left"&&!f||p==="right"&&f);d=rn(rn({},d),{},{x1:a+b*s,y1:i,x2:a+b*s,y2:i+l})}return j.createElement("line",ii({},d,{className:je("recharts-cartesian-axis-line",Mn(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,l=this.props,p=l.tickLine,f=l.stroke,m=l.tick,d=l.tickFormatter,v=l.unit,b=vb(rn(rn({},this.props),{},{ticks:r}),a,i),x=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),y=Ae(this.props,!1),S=Ae(m,!1),A=rn(rn({},y),{},{fill:"none"},Ae(p,!1)),W=b.map(function(_,w){var M=s.getTickLineCoord(_),E=M.line,P=M.tick,O=rn(rn(rn(rn({textAnchor:x,verticalAnchor:I},y),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:_,visibleTicksCount:b.length,tickFormatter:d});return j.createElement(De,ii({className:"recharts-cartesian-axis-tick",key:"tick-".concat(_.value,"-").concat(_.coordinate,"-").concat(_.tickCoord)},Ta(s.props,_,w)),p&&j.createElement("line",ii({},A,E,{className:je("recharts-cartesian-axis-tick-line",Mn(p,"className"))})),m&&t.renderTickItem(m,O,"".concat(ke(d)?d(_.value,w):_.value).concat(v||"")))});return j.createElement("g",{className:"recharts-cartesian-axis-ticks"},W)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,l=a.height,p=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,b=bv(d,UV),x=v;return ke(p)&&(x=v&&v.length>0?p(this.props):p(b)),s<=0||l<=0||!x||!x.length?null:j.createElement(De,{className:je("recharts-cartesian-axis",f),ref:function(y){r.layerReference=y}},i&&this.renderAxisLine(),this.renderTicks(x,this.state.fontSize,this.state.letterSpacing),qt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return j.isValidElement(r)?s=j.cloneElement(r,a):ke(r)?s=r(a):s=j.createElement(go,ii({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(Y.Component);gb(Ji,"displayName","CartesianAxis");gb(Ji,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var eK=["x1","y1","x2","y2","key"],tK=["offset"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(e)}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){nK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nK(e,t,n){return t=rK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rK(e){var t=aK(e,"string");return Io(t)=="symbol"?t:t+""}function aK(e,t){if(Io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function l3(e,t){if(e==null)return{};var n=oK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var iK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,i=t.y,s=t.width,l=t.height,p=t.ry;return j.createElement("rect",{x:a,y:i,ry:p,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function A_(e,t){var n;if(j.isValidElement(e))n=j.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,i=t.x2,s=t.y2,l=t.key,p=l3(t,eK),f=Ae(p,!1);f.offset;var m=l3(f,tK);n=j.createElement("line",fo({},m,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:l}))}return n}function uK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,p){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(p),index:p});return A_(a,f)});return j.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function sK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,p){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(p),index:p});return A_(a,f)});return j.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function lK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,l=e.horizontalPoints,p=e.horizontal,f=p===void 0?!0:p;if(!f||!t||!t.length)return null;var m=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,b){return v-b});a!==m[0]&&m.unshift(0);var d=m.map(function(v,b){var x=!m[b+1],I=x?a+s-v:m[b+1]-v;if(I<=0)return null;var y=b%t.length;return j.createElement("rect",{key:"react-".concat(b),y:v,x:r,height:I,width:i,stroke:"none",fill:t[y],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return j.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function cK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,l=e.width,p=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,b){return v-b});i!==m[0]&&m.unshift(0);var d=m.map(function(v,b){var x=!m[b+1],I=x?i+l-v:m[b+1]-v;if(I<=0)return null;var y=b%r.length;return j.createElement("rect",{key:"react-".concat(b),x:v,y:s,width:I,height:p,stroke:"none",fill:r[y],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return j.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var pK=function(t,n){var r=t.xAxis,a=t.width,i=t.height,s=t.offset;return MM(vb(en(en(en({},Ji.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,n)},fK=function(t,n){var r=t.yAxis,a=t.width,i=t.height,s=t.offset;return MM(vb(en(en(en({},Ji.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,n)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Mp(e){var t,n,r,a,i,s,l=fb(),p=db(),f=JG(),m=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ti.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=m.x,v=m.y,b=m.width,x=m.height,I=m.syncWithTicks,y=m.horizontalValues,S=m.verticalValues,A=YG(),W=XG();if(!le(b)||b<=0||!le(x)||x<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var _=m.verticalCoordinatesGenerator||pK,w=m.horizontalCoordinatesGenerator||fK,M=m.horizontalPoints,E=m.verticalPoints;if((!M||!M.length)&&ke(w)){var P=y&&y.length,O=w({yAxis:W?en(en({},W),{},{ticks:P?y:W.ticks}):void 0,width:l,height:p,offset:f},P?!0:I);ur(Array.isArray(O),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(O),"]")),Array.isArray(O)&&(M=O)}if((!E||!E.length)&&ke(_)){var N=S&&S.length,D=_({xAxis:A?en(en({},A),{},{ticks:N?S:A.ticks}):void 0,width:l,height:p,offset:f},N?!0:I);ur(Array.isArray(D),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(D),"]")),Array.isArray(D)&&(E=D)}return j.createElement("g",{className:"recharts-cartesian-grid"},j.createElement(iK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),j.createElement(uK,fo({},m,{offset:f,horizontalPoints:M,xAxis:A,yAxis:W})),j.createElement(sK,fo({},m,{offset:f,verticalPoints:E,xAxis:A,yAxis:W})),j.createElement(lK,fo({},m,{horizontalPoints:M})),j.createElement(cK,fo({},m,{verticalPoints:E})))}Mp.displayName="CartesianGrid";var dK=["type","layout","connectNulls","ref"],hK=["key"];function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function c3(e,t){if(e==null)return{};var n=mK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function p3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p3(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ni(e){return bK(e)||yK(e)||gK(e)||vK()}function vK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gK(e,t){if(e){if(typeof e=="string")return Ug(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ug(e,t)}}function yK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bK(e){if(Array.isArray(e))return Ug(e)}function Ug(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function IK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M_(r.key),r)}}function BK(e,t,n){return t&&f3(e.prototype,t),n&&f3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xK(e,t,n){return t=_p(t),wK(e,W_()?Reflect.construct(t,n||[],_p(e).constructor):t.apply(e,n))}function wK(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PK(e)}function PK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(W_=function(){return!!e})()}function _p(e){return _p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},_p(e)}function SK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gg(e,t)}function Gg(e,t){return Gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gg(e,t)}function or(e,t,n){return t=M_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M_(e){var t=AK(e,"string");return Ei(t)=="symbol"?t:t+""}function AK(e,t){if(Ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function t(){var n;IK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=xK(this,t,[].concat(a)),or(n,"state",{isAnimationFinished:!0,totalLength:0}),or(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),or(n,"getStrokeDasharray",function(s,l,p){var f=p.reduce(function(S,A){return S+A});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var m=Math.floor(s/f),d=s%f,v=l-s,b=[],x=0,I=0;x<p.length;I+=p[x],++x)if(I+p[x]>d){b=[].concat(ni(p.slice(0,x)),[d-I]);break}var y=b.length%2===0?[0,v]:[v];return[].concat(ni(t.repeat(p,m)),ni(b),y).map(function(S){return"".concat(S,"px")}).join(", ")}),or(n,"id",Ha("recharts-line-")),or(n,"pathRef",function(s){n.mainCurve=s}),or(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),or(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return SK(t,e),BK(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,l=i.xAxis,p=i.yAxis,f=i.layout,m=i.children,d=sn(m,Zi);if(!d)return null;var v=function(I,y){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,y)}},b={clipPath:r?"url(#clipPath-".concat(a,")"):null};return j.createElement(De,b,d.map(function(x){return j.cloneElement(x,{key:"bar-".concat(x.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,p=l.dot,f=l.points,m=l.dataKey,d=Ae(this.props,!1),v=Ae(p,!0),b=f.map(function(I,y){var S=wn(wn(wn({key:"dot-".concat(y),r:3},d),v),{},{index:y,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return t.renderDotItem(p,S)}),x={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return j.createElement(De,os({className:"recharts-line-dots",key:"dots"},x),b)}},{key:"renderCurveStatically",value:function(r,a,i,s){var l=this.props,p=l.type,f=l.layout,m=l.connectNulls;l.ref;var d=c3(l,dK),v=wn(wn(wn({},Ae(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:p,layout:f,connectNulls:m});return j.createElement(ka,os({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,p=s.strokeDasharray,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,b=s.animationId,x=s.animateNewValues,I=s.width,y=s.height,S=this.state,A=S.prevPoints,W=S.totalLength;return j.createElement(Kn,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(_){var w=_.t;if(A){var M=A.length/l.length,E=l.map(function(T,q){var F=Math.floor(q*M);if(A[F]){var G=A[F],Q=ht(G.x,T.x),V=ht(G.y,T.y);return wn(wn({},T),{},{x:Q(w),y:V(w)})}if(x){var H=ht(I*2,T.x),U=ht(y/2,T.y);return wn(wn({},T),{},{x:H(w),y:U(w)})}return wn(wn({},T),{},{x:T.x,y:T.y})});return i.renderCurveStatically(E,r,a)}var P=ht(0,W),O=P(w),N;if(p){var D="".concat(p).split(/[,\s]+/gim).map(function(T){return parseFloat(T)});N=i.getStrokeDasharray(O,W,D)}else N=i.generateSimpleStrokeDasharray(W,O);return i.renderCurveStatically(l,r,a,{strokeDasharray:N})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,l=i.isAnimationActive,p=this.state,f=p.prevPoints,m=p.totalLength;return l&&s&&s.length&&(!f&&m>0||!Na(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,p=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,b=a.width,x=a.height,I=a.isAnimationActive,y=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,A=l.length===1,W=je("recharts-line",p),_=f&&f.allowDataOverflow,w=m&&m.allowDataOverflow,M=_||w,E=Ee(y)?this.id:y,P=(r=Ae(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},O=P.r,N=O===void 0?3:O,D=P.strokeWidth,T=D===void 0?2:D,q=CA(s)?s:{},F=q.clipDot,G=F===void 0?!0:F,Q=N*2+T;return j.createElement(De,{className:W},_||w?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(E)},j.createElement("rect",{x:_?v:v-b/2,y:w?d:d-x/2,width:_?b:b*2,height:w?x:x*2})),!G&&j.createElement("clipPath",{id:"clipPath-dots-".concat(E)},j.createElement("rect",{x:v-Q/2,y:d-Q/2,width:b+Q,height:x+Q}))):null,!A&&this.renderCurve(M,E),this.renderErrorBar(M,E),(A||s)&&this.renderDots(M,G,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ni(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(ni(s),ni(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(j.isValidElement(r))i=j.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,l=c3(a,hK),p=je("recharts-line-dot",typeof r!="boolean"?r.className:"");i=j.createElement(Js,os({key:s},l,{className:p}))}return i}}])})(Y.PureComponent);or(qr,"displayName","Line");or(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});or(qr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,l=e.bandSize,p=e.displayedData,f=e.offset,m=t.layout,d=p.map(function(v,b){var x=lt(v,s);return m==="horizontal"?{x:Bi({axis:n,ticks:a,bandSize:l,entry:v,index:b}),y:Ee(x)?null:r.scale(x),value:x,payload:v}:{x:Ee(x)?null:n.scale(x),y:Bi({axis:r,ticks:i,bandSize:l,entry:v,index:b}),value:x,payload:v}});return wn({points:d,layout:m},f)});var WK=["layout","type","stroke","connectNulls","isRange","ref"],MK=["key"],__;function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function O_(e,t){if(e==null)return{};var n=_K(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _K(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function d3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d3(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function OK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k_(r.key),r)}}function CK(e,t,n){return t&&h3(e.prototype,t),n&&h3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kK(e,t,n){return t=Op(t),EK(e,C_()?Reflect.construct(t,n||[],Op(e).constructor):t.apply(e,n))}function EK(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return TK(e)}function TK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(C_=function(){return!!e})()}function Op(e){return Op=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Op(e)}function NK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vg(e,t)}function Vg(e,t){return Vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vg(e,t)}function Ir(e,t,n){return t=k_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k_(e){var t=RK(e,"string");return Ti(t)=="symbol"?t:t+""}function RK(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var So=(function(e){function t(){var n;OK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=kK(this,t,[].concat(a)),Ir(n,"state",{isAnimationFinished:!0}),Ir(n,"id",Ha("recharts-area-")),Ir(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return NK(t,e),CK(t,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var p=this.props,f=p.dot,m=p.points,d=p.dataKey,v=Ae(this.props,!1),b=Ae(f,!0),x=m.map(function(y,S){var A=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),b),{},{index:S,cx:y.x,cy:y.y,dataKey:d,value:y.value,payload:y.payload,points:m});return t.renderDotItem(f,A)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return j.createElement(De,ho({className:"recharts-area-dots"},I),x)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].x,f=s[s.length-1].x,m=r*Math.abs(p-f),d=Wa(s.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Wa(i.map(function(v){return v.y||0})),d)),le(d)?j.createElement("rect",{x:p<f?p:p-m,y:0,width:m,height:Math.floor(d+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].y,f=s[s.length-1].y,m=r*Math.abs(p-f),d=Wa(s.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Wa(i.map(function(v){return v.x||0})),d)),le(d)?j.createElement("rect",{x:0,y:p<f?p:p-m,width:d+(l?parseInt("".concat(l),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var l=this.props,p=l.layout,f=l.type,m=l.stroke,d=l.connectNulls,v=l.isRange;l.ref;var b=O_(l,WK);return j.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},j.createElement(ka,ho({},Ae(b,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:p,stroke:"none",className:"recharts-area-area"})),m!=="none"&&j.createElement(ka,ho({},Ae(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&j.createElement(ka,ho({},Ae(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,p=s.baseLine,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,b=s.animationId,x=this.state,I=x.prevPoints,y=x.prevBaseLine;return j.createElement(Kn,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var A=S.t;if(I){var W=I.length/l.length,_=l.map(function(P,O){var N=Math.floor(O*W);if(I[N]){var D=I[N],T=ht(D.x,P.x),q=ht(D.y,P.y);return Pa(Pa({},P),{},{x:T(A),y:q(A)})}return P}),w;if(le(p)&&typeof p=="number"){var M=ht(y,p);w=M(A)}else if(Ee(p)||Vi(p)){var E=ht(y,0);w=E(A)}else w=p.map(function(P,O){var N=Math.floor(O*W);if(y[N]){var D=y[N],T=ht(D.x,P.x),q=ht(D.y,P.y);return Pa(Pa({},P),{},{x:T(A),y:q(A)})}return P});return i.renderAreaStatically(_,w,r,a)}return j.createElement(De,null,j.createElement("defs",null,j.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(A))),j.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(l,p,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,l=i.baseLine,p=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return p&&s&&s.length&&(!m&&v>0||!Na(m,s)||!Na(d,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,p=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,b=a.width,x=a.height,I=a.isAnimationActive,y=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,A=l.length===1,W=je("recharts-area",p),_=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,M=_||w,E=Ee(y)?this.id:y,P=(r=Ae(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},O=P.r,N=O===void 0?3:O,D=P.strokeWidth,T=D===void 0?2:D,q=CA(s)?s:{},F=q.clipDot,G=F===void 0?!0:F,Q=N*2+T;return j.createElement(De,{className:W},_||w?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(E)},j.createElement("rect",{x:_?m:m-b/2,y:w?f:f-x/2,width:_?b:b*2,height:w?x:x*2})),!G&&j.createElement("clipPath",{id:"clipPath-dots-".concat(E)},j.createElement("rect",{x:m-Q/2,y:f-Q/2,width:b+Q,height:x+Q}))):null,A?null:this.renderArea(M,E),(s||A)&&this.renderDots(M,G,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(Y.PureComponent);__=So;Ir(So,"displayName","Area");Ir(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(So,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,s=t.props.baseValue,l=s??i;if(le(l)&&typeof l=="number")return l;var p=a==="horizontal"?r:n,f=p.scale.domain();if(p.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return l==="dataMin"?d:l==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});Ir(So,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,p=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,b=t.layout,x=f&&f.length,I=__.getBaseValue(t,n,r,a),y=b==="horizontal",S=!1,A=d.map(function(_,w){var M;x?M=f[m+w]:(M=lt(_,p),Array.isArray(M)?S=!0:M=[I,M]);var E=M[1]==null||x&&lt(_,p)==null;return y?{x:Bi({axis:r,ticks:i,bandSize:l,entry:_,index:w}),y:E?null:a.scale(M[1]),value:M,payload:_}:{x:E?null:r.scale(M[1]),y:Bi({axis:a,ticks:s,bandSize:l,entry:_,index:w}),value:M,payload:_}}),W;return x||S?W=A.map(function(_){var w=Array.isArray(_.value)?_.value[0]:null;return y?{x:_.x,y:w!=null&&_.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:_.y}}):W=y?a.scale(I):r.scale(I),Pa({points:A,baseLine:W,layout:b,isRange:S},v)});Ir(So,"renderDotItem",function(e,t){var n;if(j.isValidElement(e))n=j.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=je("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=O_(t,MK);n=j.createElement(Js,ho({},i,{key:a,className:r}))}return n});function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function jK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function HK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N_(r.key),r)}}function DK(e,t,n){return t&&HK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $K(e,t,n){return t=Cp(t),LK(e,E_()?Reflect.construct(t,n||[],Cp(e).constructor):t.apply(e,n))}function LK(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FK(e)}function FK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(E_=function(){return!!e})()}function Cp(e){return Cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cp(e)}function qK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kg(e,t)}function Kg(e,t){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,t)}function T_(e,t,n){return t=N_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N_(e){var t=zK(e,"string");return Ni(t)=="symbol"?t:t+""}function zK(e,t){if(Ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var b0=(function(e){function t(){return jK(this,t),$K(this,t,arguments)}return qK(t,e),DK(t,[{key:"render",value:function(){return null}}])})(j.Component);T_(b0,"displayName","ZAxis");T_(b0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var UK=["option","isActive"];function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function GK(e,t){if(e==null)return{};var n=VK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function VK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function KK(e){var t=e.option,n=e.isActive,r=GK(e,UK);return typeof t=="string"?j.createElement(vp,is({option:j.createElement(Kp,is({type:t},r)),isActive:n,shapeType:"symbols"},r)):j.createElement(vp,is({option:t,isActive:n,shapeType:"symbols"},r))}function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function m3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m3(Object(n),!0).forEach(function(r){_a(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j_(r.key),r)}}function YK(e,t,n){return t&&v3(e.prototype,t),n&&v3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function XK(e,t,n){return t=kp(t),ZK(e,R_()?Reflect.construct(t,n||[],kp(e).constructor):t.apply(e,n))}function ZK(e,t){if(t&&(Ri(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JK(e)}function JK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(R_=function(){return!!e})()}function kp(e){return kp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kp(e)}function eQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qg(e,t)}function Qg(e,t){return Qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qg(e,t)}function _a(e,t,n){return t=j_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j_(e){var t=tQ(e,"string");return Ri(t)=="symbol"?t:t+""}function tQ(e,t){if(Ri(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I0=(function(e){function t(){var n;QK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=XK(this,t,[].concat(a)),_a(n,"state",{isAnimationFinished:!1}),_a(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),_a(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),_a(n,"id",Ha("recharts-scatter-")),n}return eQ(t,e),YK(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.activeShape,p=i.activeIndex,f=Ae(this.props,!1);return r.map(function(m,d){var v=p===d,b=v?l:s,x=Ln(Ln({},f),m);return j.createElement(De,us({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ta(a.props,m,d),{role:"img"}),j.createElement(KK,us({option:b,isActive:v,key:"symbol-".concat(d)},x)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return j.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var b=v.t,x=i.map(function(I,y){var S=d&&d[y];if(S){var A=ht(S.cx,I.cx),W=ht(S.cy,I.cy),_=ht(S.size,I.size);return Ln(Ln({},I),{},{cx:A(b),cy:W(b),size:_(b)})}var w=ht(0,I.size);return Ln(Ln({},I),{},{size:w(b)})});return j.createElement(De,null,r.renderSymbolsStatically(x))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,l=a.yAxis,p=a.children,f=sn(p,Zi);return f?f.map(function(m,d){var v=m.props,b=v.direction,x=v.dataKey;return j.cloneElement(m,{key:"".concat(b,"-").concat(x,"-").concat(i[d]),data:i,xAxis:s,yAxis:l,layout:b==="x"?"vertical":"horizontal",dataPointFormatter:function(y,S){return{x:y.cx,y:y.cy,value:b==="x"?+y.node.x:+y.node.y,errorVal:lt(y,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,l=r.lineJointType,p=Ae(this.props,!1),f=Ae(i,!1),m,d;if(s==="joint")m=a.map(function(W){return{x:W.cx,y:W.cy}});else if(s==="fitting"){var v=VR(a),b=v.xmin,x=v.xmax,I=v.a,y=v.b,S=function(_){return I*_+y};m=[{x:b,y:S(b)},{x,y:S(x)}]}var A=Ln(Ln(Ln({},p),{},{fill:"none",stroke:p&&p.fill},f),{},{points:m});return j.isValidElement(i)?d=j.cloneElement(i,A):ke(i)?d=i(A):d=j.createElement(ka,us({},A,{type:l})),j.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,l=r.className,p=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,b=r.height,x=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var y=this.state.isAnimationFinished,S=je("recharts-scatter",l),A=p&&p.allowDataOverflow,W=f&&f.allowDataOverflow,_=A||W,w=Ee(x)?this.id:x;return j.createElement(De,{className:S,clipPath:_?"url(#clipPath-".concat(w,")"):null},A||W?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(w)},j.createElement("rect",{x:A?m:m-v/2,y:W?d:d-b/2,width:A?v:v*2,height:W?b:b*2}))):null,s&&this.renderLine(),this.renderErrorBar(),j.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||y)&&sr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(Y.PureComponent);_a(I0,"displayName","Scatter");_a(I0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});_a(I0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,p=e.offset,f=a.props.tooltipType,m=sn(a.props.children,Ks),d=Ee(t.dataKey)?a.props.dataKey:t.dataKey,v=Ee(n.dataKey)?a.props.dataKey:n.dataKey,b=r&&r.dataKey,x=r?r.range:b0.defaultProps.range,I=x&&x[0],y=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,A=i.map(function(W,_){var w=lt(W,d),M=lt(W,v),E=!Ee(b)&&lt(W,b)||"-",P=[{name:Ee(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:W,dataKey:d,type:f},{name:Ee(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:M,payload:W,dataKey:v,type:f}];E!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:E,payload:W,dataKey:b,type:f});var O=Bi({axis:t,ticks:s,bandSize:y,entry:W,index:_,dataKey:d}),N=Bi({axis:n,ticks:l,bandSize:S,entry:W,index:_,dataKey:v}),D=E!=="-"?r.scale(E):I,T=Math.sqrt(Math.max(D,0)/Math.PI);return Ln(Ln({},W),{},{cx:O,cy:N,x:O-T,y:N-T,xAxis:t,yAxis:n,zAxis:r,width:2*T,height:2*T,size:D,node:{x:w,y:M,z:E},tooltipPayload:P,tooltipPosition:{x:O,y:N},payload:W},m&&m[_]&&m[_].props)});return Ln({points:A},p)});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function nQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$_(r.key),r)}}function aQ(e,t,n){return t&&rQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oQ(e,t,n){return t=Ep(t),iQ(e,H_()?Reflect.construct(t,n||[],Ep(e).constructor):t.apply(e,n))}function iQ(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uQ(e)}function uQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H_=function(){return!!e})()}function Ep(e){return Ep=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ep(e)}function sQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yg(e,t)}function Yg(e,t){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,t)}function D_(e,t,n){return t=$_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $_(e){var t=lQ(e,"string");return ji(t)=="symbol"?t:t+""}function lQ(e,t){if(ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Xg(){return Xg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xg.apply(this,arguments)}function cQ(e){var t=e.xAxisId,n=fb(),r=db(),a=m_(t);return a==null?null:j.createElement(Ji,Xg({},a,{className:je("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return Fr(s,!0)}}))}var Ra=(function(e){function t(){return nQ(this,t),oQ(this,t,arguments)}return sQ(t,e),aQ(t,[{key:"render",value:function(){return j.createElement(cQ,this.props)}}])})(j.Component);D_(Ra,"displayName","XAxis");D_(Ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function pQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,q_(r.key),r)}}function dQ(e,t,n){return t&&fQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function hQ(e,t,n){return t=Tp(t),mQ(e,L_()?Reflect.construct(t,n||[],Tp(e).constructor):t.apply(e,n))}function mQ(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vQ(e)}function vQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(L_=function(){return!!e})()}function Tp(e){return Tp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tp(e)}function gQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zg(e,t)}function Zg(e,t){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,t)}function F_(e,t,n){return t=q_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q_(e){var t=yQ(e,"string");return Hi(t)=="symbol"?t:t+""}function yQ(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Jg(){return Jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jg.apply(this,arguments)}var bQ=function(t){var n=t.yAxisId,r=fb(),a=db(),i=v_(n);return i==null?null:j.createElement(Ji,Jg({},i,{className:je("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return Fr(l,!0)}}))},Br=(function(e){function t(){return pQ(this,t),hQ(this,t,arguments)}return gQ(t,e),dQ(t,[{key:"render",value:function(){return j.createElement(bQ,this.props)}}])})(j.Component);F_(Br,"displayName","YAxis");F_(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function g3(e){return wQ(e)||xQ(e)||BQ(e)||IQ()}function IQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BQ(e,t){if(e){if(typeof e=="string")return ey(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ey(e,t)}}function xQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wQ(e){if(Array.isArray(e))return ey(e)}function ey(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ty=function(t,n,r,a,i){var s=sn(t,mb),l=sn(t,v0),p=[].concat(g3(s),g3(l)),f=sn(t,y0),m="".concat(a,"Id"),d=a[0],v=n;if(p.length&&(v=p.reduce(function(I,y){if(y.props[m]===r&&wr(y.props,"extendDomain")&&le(y.props[d])){var S=y.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var b="".concat(d,"1"),x="".concat(d,"2");v=f.reduce(function(I,y){if(y.props[m]===r&&wr(y.props,"extendDomain")&&le(y.props[b])&&le(y.props[x])){var S=y.props[b],A=y.props[x];return[Math.min(I[0],S,A),Math.max(I[1],S,A)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,y){return le(y)?[Math.min(I[0],y),Math.max(I[1],y)]:I},v)),v},Iv={exports:{}},y3;function PQ(){return y3||(y3=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(p,f,m){this.fn=p,this.context=f,this.once=m||!1}function i(p,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var b=new a(m,d||p,v),x=n?n+f:f;return p._events[x]?p._events[x].fn?p._events[x]=[p._events[x],b]:p._events[x].push(b):(p._events[x]=b,p._eventsCount++),p}function s(p,f){--p._eventsCount===0?p._events=new r:delete p._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)t.call(m,d)&&f.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},l.prototype.listeners=function(f){var m=n?n+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,b=d.length,x=new Array(b);v<b;v++)x[v]=d[v].fn;return x},l.prototype.listenerCount=function(f){var m=n?n+f:f,d=this._events[m];return d?d.fn?1:d.length:0},l.prototype.emit=function(f,m,d,v,b,x){var I=n?n+f:f;if(!this._events[I])return!1;var y=this._events[I],S=arguments.length,A,W;if(y.fn){switch(y.once&&this.removeListener(f,y.fn,void 0,!0),S){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,m),!0;case 3:return y.fn.call(y.context,m,d),!0;case 4:return y.fn.call(y.context,m,d,v),!0;case 5:return y.fn.call(y.context,m,d,v,b),!0;case 6:return y.fn.call(y.context,m,d,v,b,x),!0}for(W=1,A=new Array(S-1);W<S;W++)A[W-1]=arguments[W];y.fn.apply(y.context,A)}else{var _=y.length,w;for(W=0;W<_;W++)switch(y[W].once&&this.removeListener(f,y[W].fn,void 0,!0),S){case 1:y[W].fn.call(y[W].context);break;case 2:y[W].fn.call(y[W].context,m);break;case 3:y[W].fn.call(y[W].context,m,d);break;case 4:y[W].fn.call(y[W].context,m,d,v);break;default:if(!A)for(w=1,A=new Array(S-1);w<S;w++)A[w-1]=arguments[w];y[W].fn.apply(y[W].context,A)}}return!0},l.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},l.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},l.prototype.removeListener=function(f,m,d,v){var b=n?n+f:f;if(!this._events[b])return this;if(!m)return s(this,b),this;var x=this._events[b];if(x.fn)x.fn===m&&(!v||x.once)&&(!d||x.context===d)&&s(this,b);else{for(var I=0,y=[],S=x.length;I<S;I++)(x[I].fn!==m||v&&!x[I].once||d&&x[I].context!==d)&&y.push(x[I]);y.length?this._events[b]=y.length===1?y[0]:y:s(this,b)}return this},l.prototype.removeAllListeners=function(f){var m;return f?(m=n?n+f:f,this._events[m]&&s(this,m)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(Iv)),Iv.exports}var SQ=PQ();const AQ=Xe(SQ);var Bv=new AQ,xv="recharts.syncMouseEvents";function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function WQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function MQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,z_(r.key),r)}}function _Q(e,t,n){return t&&MQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wv(e,t,n){return t=z_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z_(e){var t=OQ(e,"string");return qs(t)=="symbol"?t:t+""}function OQ(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var CQ=(function(){function e(){WQ(this,e),wv(this,"activeIndex",0),wv(this,"coordinateList",[]),wv(this,"layout","horizontal")}return _Q(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,i=a===void 0?null:a,s=n.container,l=s===void 0?null:s,p=n.layout,f=p===void 0?null:p,m=n.offset,d=m===void 0?null:m,v=n.mouseHandlerCallback,b=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=b??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,l=a.height,p=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+p+f,v=s+this.offset.top+l/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function kQ(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function EQ(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function U_(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=ot(t,n,r,a),l=ot(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}function TQ(e,t,n){var r,a,i,s;if(e==="horizontal")r=t.x,i=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,i=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,p=t.cy,f=t.innerRadius,m=t.outerRadius,d=t.angle,v=ot(l,p,f,d),b=ot(l,p,m,d);r=v.x,a=v.y,i=b.x,s=b.y}else return U_(t);return[{x:r,y:a},{x:i,y:s}]}function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function b3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b3(Object(n),!0).forEach(function(r){NQ(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NQ(e,t,n){return t=RQ(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RQ(e){var t=jQ(e,"string");return zs(t)=="symbol"?t:t+""}function jQ(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function HQ(e){var t,n,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,l=e.activePayload,p=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,b=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!b||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var x,I=ka;if(v==="ScatterChart")x=s,I=Cz;else if(v==="BarChart")x=EQ(d,s,p,m),I=ub;else if(d==="radial"){var y=U_(s),S=y.cx,A=y.cy,W=y.radius,_=y.startAngle,w=y.endAngle;x={cx:S,cy:A,startAngle:_,endAngle:w,innerRadius:W,outerRadius:W},I=DM}else x={points:TQ(d,s,p)},I=ka;var M=wc(wc(wc(wc({stroke:"#ccc",pointerEvents:"none"},p),x),Ae(b,!1)),{},{payload:l,payloadIndex:f,className:je("recharts-tooltip-cursor",b.className)});return Y.isValidElement(b)?Y.cloneElement(b,M):Y.createElement(I,M)}var DQ=["item"],$Q=["children","className","width","height","style","compact","title","desc"];function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}function I3(e,t){return qQ(e)||FQ(e,t)||V_(e,t)||LQ()}function LQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FQ(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function qQ(e){if(Array.isArray(e))return e}function B3(e,t){if(e==null)return{};var n=zQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function UQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function GQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,K_(r.key),r)}}function VQ(e,t,n){return t&&GQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function KQ(e,t,n){return t=Np(t),QQ(e,G_()?Reflect.construct(t,n||[],Np(e).constructor):t.apply(e,n))}function QQ(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return YQ(e)}function YQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G_=function(){return!!e})()}function Np(e){return Np=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Np(e)}function XQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ny(e,t)}function ny(e,t){return ny=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ny(e,t)}function $i(e){return eY(e)||JQ(e)||V_(e)||ZQ()}function ZQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V_(e,t){if(e){if(typeof e=="string")return ry(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ry(e,t)}}function JQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eY(e){if(Array.isArray(e))return ry(e)}function ry(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x3(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Te(e,t,n){return t=K_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K_(e){var t=tY(e,"string");return Di(t)=="symbol"?t:t+""}function tY(e,t){if(Di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nY={xAxis:["bottom","top"],yAxis:["left","right"]},rY={width:"100%",height:"100%"},Q_={x:0,y:0};function Pc(e){return e}var aY=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},oY=function(t,n,r,a){var i=n.find(function(m){return m&&m.index===r});if(i){if(t==="horizontal")return{x:i.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:i.coordinate};if(t==="centric"){var s=i.coordinate,l=a.radius;return ae(ae(ae({},a),ot(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var p=i.coordinate,f=a.angle;return ae(ae(ae({},a),ot(a.cx,a.cy,p,f)),{},{angle:f,radius:p})}return Q_},B0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,i=n.dataEndIndex,s=(r??[]).reduce(function(l,p){var f=p.props.data;return f&&f.length?[].concat($i(l),$i(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(i)?t.slice(a,i+1):[]};function Y_(e){return e==="number"?[0,"auto"]:void 0}var ay=function(t,n,r,a){var i=t.graphicalItems,s=t.tooltipAxis,l=B0(n,t);return r<0||!i||!i.length||r>=l.length?null:i.reduce(function(p,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var b=d===void 0?l:d;v=kc(b,s.dataKey,a)}else v=d&&d[r]||l[r];return v?[].concat($i(p),[EM(f,v)]):p},[])},w3=function(t,n,r,a){var i=a||{x:t.chartX,y:t.chartY},s=aY(i,r),l=t.orderedTooltipTicks,p=t.tooltipAxis,f=t.tooltipTicks,m=ZF(s,l,f,p);if(m>=0&&f){var d=f[m]&&f[m].value,v=ay(t,n,m,d),b=oY(r,l,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:b}}return null},iY=function(t,n){var r=n.axes,a=n.graphicalItems,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.layout,d=t.children,v=t.stackOffset,b=WM(m,i);return r.reduce(function(x,I){var y,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,A=S.type,W=S.dataKey,_=S.allowDataOverflow,w=S.allowDuplicatedCategory,M=S.scale,E=S.ticks,P=S.includeHidden,O=S[s];if(x[O])return x;var N=B0(t.data,{graphicalItems:a.filter(function($){var Z,ue=s in $.props?$.props[s]:(Z=$.type.defaultProps)===null||Z===void 0?void 0:Z[s];return ue===O}),dataStartIndex:p,dataEndIndex:f}),D=N.length,T,q,F;kQ(S.domain,_,A)&&(T=mg(S.domain,null,_),b&&(A==="number"||M!=="auto")&&(F=ts(N,W,"category")));var G=Y_(A);if(!T||T.length===0){var Q,V=(Q=S.domain)!==null&&Q!==void 0?Q:G;if(W){if(T=ts(N,W,A),A==="category"&&b){var H=GR(T);w&&H?(q=T,T=yp(0,D)):w||(T=BS(V,T,I).reduce(function($,Z){return $.indexOf(Z)>=0?$:[].concat($i($),[Z])},[]))}else if(A==="category")w?T=T.filter(function($){return $!==""&&!Ee($)}):T=BS(V,T,I).reduce(function($,Z){return $.indexOf(Z)>=0||Z===""||Ee(Z)?$:[].concat($i($),[Z])},[]);else if(A==="number"){var U=rq(N,a.filter(function($){var Z,ue,he=s in $.props?$.props[s]:(Z=$.type.defaultProps)===null||Z===void 0?void 0:Z[s],ge="hide"in $.props?$.props.hide:(ue=$.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===O&&(P||!ge)}),W,i,m);U&&(T=U)}b&&(A==="number"||M!=="auto")&&(F=ts(N,W,"category"))}else b?T=yp(0,D):l&&l[O]&&l[O].hasStack&&A==="number"?T=v==="expand"?[0,1]:kM(l[O].stackGroups,p,f):T=AM(N,a.filter(function($){var Z=s in $.props?$.props[s]:$.type.defaultProps[s],ue="hide"in $.props?$.props.hide:$.type.defaultProps.hide;return Z===O&&(P||!ue)}),A,m,!0);if(A==="number")T=ty(d,T,O,i,E),V&&(T=mg(V,T,_));else if(A==="category"&&V){var X=V,R=T.every(function($){return X.indexOf($)>=0});R&&(T=X)}}return ae(ae({},x),{},Te({},O,ae(ae({},S),{},{axisType:i,domain:T,categoricalDomain:F,duplicateDomain:q,originalDomain:(y=S.domain)!==null&&y!==void 0?y:G,isCategorical:b,layout:m})))},{})},uY=function(t,n){var r=n.graphicalItems,a=n.Axis,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.layout,d=t.children,v=B0(t.data,{graphicalItems:r,dataStartIndex:p,dataEndIndex:f}),b=v.length,x=WM(m,i),I=-1;return r.reduce(function(y,S){var A=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,W=A[s],_=Y_("number");if(!y[W]){I++;var w;return x?w=yp(0,b):l&&l[W]&&l[W].hasStack?(w=kM(l[W].stackGroups,p,f),w=ty(d,w,W,i)):(w=mg(_,AM(v,r.filter(function(M){var E,P,O=s in M.props?M.props[s]:(E=M.type.defaultProps)===null||E===void 0?void 0:E[s],N="hide"in M.props?M.props.hide:(P=M.type.defaultProps)===null||P===void 0?void 0:P.hide;return O===W&&!N}),"number",m),a.defaultProps.allowDataOverflow),w=ty(d,w,W,i)),ae(ae({},y),{},Te({},W,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:Mn(nY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:_,isCategorical:x,layout:m})))}return y},{})},sY=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,i=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.children,d="".concat(a,"Id"),v=sn(m,i),b={};return v&&v.length?b=iY(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:p,dataEndIndex:f}):s&&s.length&&(b=uY(t,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:p,dataEndIndex:f})),b},lY=function(t){var n=Aa(t),r=Fr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ey(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:ap(n,r)}},P3=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,Wi),i=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},cY=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},S3=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},pY=function(t,n){var r=t.props,a=t.graphicalItems,i=t.xAxisMap,s=i===void 0?{}:i,l=t.yAxisMap,p=l===void 0?{}:l,f=r.width,m=r.height,d=r.children,v=r.margin||{},b=Sn(d,Wi),x=Sn(d,Oa),I=Object.keys(p).reduce(function(w,M){var E=p[M],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,w[P]+E.width)):w},{left:v.left||0,right:v.right||0}),y=Object.keys(s).reduce(function(w,M){var E=s[M],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,Mn(w,"".concat(P))+E.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},y),I),A=S.bottom;b&&(S.bottom+=b.props.height||Wi.defaultProps.height),x&&n&&(S=tq(S,a,r,n));var W=f-S.left-S.right,_=m-S.top-S.bottom;return ae(ae({brushBottom:A},S),{},{width:Math.max(W,0),height:Math.max(_,0)})},fY=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},x0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,i=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,p=t.axisComponents,f=t.legendContent,m=t.formatAxisMap,d=t.defaultProps,v=function(S,A){var W=A.graphicalItems,_=A.stackGroups,w=A.offset,M=A.updateId,E=A.dataStartIndex,P=A.dataEndIndex,O=S.barSize,N=S.layout,D=S.barGap,T=S.barCategoryGap,q=S.maxBarSize,F=S3(N),G=F.numericAxisName,Q=F.cateAxisName,V=cY(W),H=[];return W.forEach(function(U,X){var R=B0(S.data,{graphicalItems:[U],dataStartIndex:E,dataEndIndex:P}),$=U.type.defaultProps!==void 0?ae(ae({},U.type.defaultProps),U.props):U.props,Z=$.dataKey,ue=$.maxBarSize,he=$["".concat(G,"Id")],ge=$["".concat(Q,"Id")],ye={},fe=p.reduce(function(Bt,vt){var _n=A["".concat(vt.axisType,"Map")],gt=$["".concat(vt.axisType,"Id")];_n&&_n[gt]||vt.axisType==="zAxis"||bo();var Kt=_n[gt];return ae(ae({},Bt),{},Te(Te({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),Fr(Kt)))},ye),ne=fe[Q],de=fe["".concat(Q,"Ticks")],pe=_&&_[he]&&_[he].hasStack&&fq(U,_[he].stackGroups),re=Ur(U.type).indexOf("Bar")>=0,Re=ap(ne,de),Pe=[],Ce=V&&JF({barSize:O,stackGroups:_,totalSize:fY(fe,Q)});if(re){var We,Fe,He=Ee(ue)?q:ue,qe=(We=(Fe=ap(ne,de,!0))!==null&&Fe!==void 0?Fe:He)!==null&&We!==void 0?We:0;Pe=eq({barGap:D,barCategoryGap:T,bandSize:qe!==Re?qe:Re,sizeList:Ce[ge],maxBarSize:He}),qe!==Re&&(Pe=Pe.map(function(Bt){return ae(ae({},Bt),{},{position:ae(ae({},Bt.position),{},{offset:Bt.position.offset-qe/2})})}))}var Ke=U&&U.type&&U.type.getComposedData;Ke&&H.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:R,props:S,dataKey:Z,item:U,bandSize:Re,barPosition:Pe,offset:w,stackedData:pe,layout:N,dataStartIndex:E,dataEndIndex:P}))),{},Te(Te(Te({key:U.key||"item-".concat(X)},G,fe[G]),Q,fe[Q]),"animationId",M)),childIndex:aj(U,S.children),item:U})}),H},b=function(S,A){var W=S.props,_=S.dataStartIndex,w=S.dataEndIndex,M=S.updateId;if(!RB({props:W}))return null;var E=W.children,P=W.layout,O=W.stackOffset,N=W.data,D=W.reverseStackOrder,T=S3(P),q=T.numericAxisName,F=T.cateAxisName,G=sn(E,r),Q=cq(N,G,"".concat(q,"Id"),"".concat(F,"Id"),O,D),V=p.reduce(function($,Z){var ue="".concat(Z.axisType,"Map");return ae(ae({},$),{},Te({},ue,sY(W,ae(ae({},Z),{},{graphicalItems:G,stackGroups:Z.axisType===q&&Q,dataStartIndex:_,dataEndIndex:w}))))},{}),H=pY(ae(ae({},V),{},{props:W,graphicalItems:G}),A==null?void 0:A.legendBBox);Object.keys(V).forEach(function($){V[$]=m(W,V[$],H,$.replace("Map",""),n)});var U=V["".concat(F,"Map")],X=lY(U),R=v(W,ae(ae({},V),{},{dataStartIndex:_,dataEndIndex:w,updateId:M,graphicalItems:G,stackGroups:Q,offset:H}));return ae(ae({formattedGraphicalItems:R,graphicalItems:G,offset:H,stackGroups:Q},X),V)},x=(function(y){function S(A){var W,_,w;return UQ(this,S),w=KQ(this,S,[A]),Te(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Te(w,"accessibilityManager",new CQ),Te(w,"handleLegendBBoxUpdate",function(M){if(M){var E=w.state,P=E.dataStartIndex,O=E.dataEndIndex,N=E.updateId;w.setState(ae({legendBBox:M},b({props:w.props,dataStartIndex:P,dataEndIndex:O,updateId:N},ae(ae({},w.state),{},{legendBBox:M}))))}}),Te(w,"handleReceiveSyncEvent",function(M,E,P){if(w.props.syncId===M){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(E)}}),Te(w,"handleBrushChange",function(M){var E=M.startIndex,P=M.endIndex;if(E!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var O=w.state.updateId;w.setState(function(){return ae({dataStartIndex:E,dataEndIndex:P},b({props:w.props,dataStartIndex:E,dataEndIndex:P,updateId:O},w.state))}),w.triggerSyncEvent({dataStartIndex:E,dataEndIndex:P})}}),Te(w,"handleMouseEnter",function(M){var E=w.getMouseInfo(M);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var O=w.props.onMouseEnter;ke(O)&&O(P,M)}}),Te(w,"triggeredAfterMouseMove",function(M){var E=w.getMouseInfo(M),P=E?ae(ae({},E),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var O=w.props.onMouseMove;ke(O)&&O(P,M)}),Te(w,"handleItemMouseEnter",function(M){w.setState(function(){return{isTooltipActive:!0,activeItem:M,activePayload:M.tooltipPayload,activeCoordinate:M.tooltipPosition||{x:M.cx,y:M.cy}}})}),Te(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Te(w,"handleMouseMove",function(M){M.persist(),w.throttleTriggeredAfterMouseMove(M)}),Te(w,"handleMouseLeave",function(M){w.throttleTriggeredAfterMouseMove.cancel();var E={isTooltipActive:!1};w.setState(E),w.triggerSyncEvent(E);var P=w.props.onMouseLeave;ke(P)&&P(E,M)}),Te(w,"handleOuterEvent",function(M){var E=rj(M),P=Mn(w.props,"".concat(E));if(E&&ke(P)){var O,N;/.*touch.*/i.test(E)?N=w.getMouseInfo(M.changedTouches[0]):N=w.getMouseInfo(M),P((O=N)!==null&&O!==void 0?O:{},M)}}),Te(w,"handleClick",function(M){var E=w.getMouseInfo(M);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var O=w.props.onClick;ke(O)&&O(P,M)}}),Te(w,"handleMouseDown",function(M){var E=w.props.onMouseDown;if(ke(E)){var P=w.getMouseInfo(M);E(P,M)}}),Te(w,"handleMouseUp",function(M){var E=w.props.onMouseUp;if(ke(E)){var P=w.getMouseInfo(M);E(P,M)}}),Te(w,"handleTouchMove",function(M){M.changedTouches!=null&&M.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(M.changedTouches[0])}),Te(w,"handleTouchStart",function(M){M.changedTouches!=null&&M.changedTouches.length>0&&w.handleMouseDown(M.changedTouches[0])}),Te(w,"handleTouchEnd",function(M){M.changedTouches!=null&&M.changedTouches.length>0&&w.handleMouseUp(M.changedTouches[0])}),Te(w,"handleDoubleClick",function(M){var E=w.props.onDoubleClick;if(ke(E)){var P=w.getMouseInfo(M);E(P,M)}}),Te(w,"handleContextMenu",function(M){var E=w.props.onContextMenu;if(ke(E)){var P=w.getMouseInfo(M);E(P,M)}}),Te(w,"triggerSyncEvent",function(M){w.props.syncId!==void 0&&Bv.emit(xv,w.props.syncId,M,w.eventEmitterSymbol)}),Te(w,"applySyncEvent",function(M){var E=w.props,P=E.layout,O=E.syncMethod,N=w.state.updateId,D=M.dataStartIndex,T=M.dataEndIndex;if(M.dataStartIndex!==void 0||M.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:D,dataEndIndex:T},b({props:w.props,dataStartIndex:D,dataEndIndex:T,updateId:N},w.state)));else if(M.activeTooltipIndex!==void 0){var q=M.chartX,F=M.chartY,G=M.activeTooltipIndex,Q=w.state,V=Q.offset,H=Q.tooltipTicks;if(!V)return;if(typeof O=="function")G=O(H,M);else if(O==="value"){G=-1;for(var U=0;U<H.length;U++)if(H[U].value===M.activeLabel){G=U;break}}var X=ae(ae({},V),{},{x:V.left,y:V.top}),R=Math.min(q,X.x+X.width),$=Math.min(F,X.y+X.height),Z=H[G]&&H[G].value,ue=ay(w.state,w.props.data,G),he=H[G]?{x:P==="horizontal"?H[G].coordinate:R,y:P==="horizontal"?$:H[G].coordinate}:Q_;w.setState(ae(ae({},M),{},{activeLabel:Z,activeCoordinate:he,activePayload:ue,activeTooltipIndex:G}))}else w.setState(M)}),Te(w,"renderCursor",function(M){var E,P=w.state,O=P.isTooltipActive,N=P.activeCoordinate,D=P.activePayload,T=P.offset,q=P.activeTooltipIndex,F=P.tooltipAxisBandSize,G=w.getTooltipEventType(),Q=(E=M.props.active)!==null&&E!==void 0?E:O,V=w.props.layout,H=M.key||"_recharts-cursor";return j.createElement(HQ,{key:H,activeCoordinate:N,activePayload:D,activeTooltipIndex:q,chartName:n,element:M,isActive:Q,layout:V,offset:T,tooltipAxisBandSize:F,tooltipEventType:G})}),Te(w,"renderPolarAxis",function(M,E,P){var O=Mn(M,"type.axisType"),N=Mn(w.state,"".concat(O,"Map")),D=M.type.defaultProps,T=D!==void 0?ae(ae({},D),M.props):M.props,q=N&&N[T["".concat(O,"Id")]];return Y.cloneElement(M,ae(ae({},q),{},{className:je(O,q.className),key:M.key||"".concat(E,"-").concat(P),ticks:Fr(q,!0)}))}),Te(w,"renderPolarGrid",function(M){var E=M.props,P=E.radialLines,O=E.polarAngles,N=E.polarRadius,D=w.state,T=D.radiusAxisMap,q=D.angleAxisMap,F=Aa(T),G=Aa(q),Q=G.cx,V=G.cy,H=G.innerRadius,U=G.outerRadius;return Y.cloneElement(M,{polarAngles:Array.isArray(O)?O:Fr(G,!0).map(function(X){return X.coordinate}),polarRadius:Array.isArray(N)?N:Fr(F,!0).map(function(X){return X.coordinate}),cx:Q,cy:V,innerRadius:H,outerRadius:U,key:M.key||"polar-grid",radialLines:P})}),Te(w,"renderLegend",function(){var M=w.state.formattedGraphicalItems,E=w.props,P=E.children,O=E.width,N=E.height,D=w.props.margin||{},T=O-(D.left||0)-(D.right||0),q=PM({children:P,formattedGraphicalItems:M,legendWidth:T,legendContent:f});if(!q)return null;var F=q.item,G=B3(q,DQ);return Y.cloneElement(F,ae(ae({},G),{},{chartWidth:O,chartHeight:N,margin:D,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Te(w,"renderTooltip",function(){var M,E=w.props,P=E.children,O=E.accessibilityLayer,N=Sn(P,An);if(!N)return null;var D=w.state,T=D.isTooltipActive,q=D.activeCoordinate,F=D.activePayload,G=D.activeLabel,Q=D.offset,V=(M=N.props.active)!==null&&M!==void 0?M:T;return Y.cloneElement(N,{viewBox:ae(ae({},Q),{},{x:Q.left,y:Q.top}),active:V,label:G,payload:V?F:[],coordinate:q,accessibilityLayer:O})}),Te(w,"renderBrush",function(M){var E=w.props,P=E.margin,O=E.data,N=w.state,D=N.offset,T=N.dataStartIndex,q=N.dataEndIndex,F=N.updateId;return Y.cloneElement(M,{key:M.key||"_recharts-brush",onChange:bc(w.handleBrushChange,M.props.onChange),data:O,x:le(M.props.x)?M.props.x:D.left,y:le(M.props.y)?M.props.y:D.top+D.height+D.brushBottom-(P.bottom||0),width:le(M.props.width)?M.props.width:D.width,startIndex:T,endIndex:q,updateId:"brush-".concat(F)})}),Te(w,"renderReferenceElement",function(M,E,P){if(!M)return null;var O=w,N=O.clipPathId,D=w.state,T=D.xAxisMap,q=D.yAxisMap,F=D.offset,G=M.type.defaultProps||{},Q=M.props,V=Q.xAxisId,H=V===void 0?G.xAxisId:V,U=Q.yAxisId,X=U===void 0?G.yAxisId:U;return Y.cloneElement(M,{key:M.key||"".concat(E,"-").concat(P),xAxis:T[H],yAxis:q[X],viewBox:{x:F.left,y:F.top,width:F.width,height:F.height},clipPathId:N})}),Te(w,"renderActivePoints",function(M){var E=M.item,P=M.activePoint,O=M.basePoint,N=M.childIndex,D=M.isRange,T=[],q=E.props.key,F=E.item.type.defaultProps!==void 0?ae(ae({},E.item.type.defaultProps),E.item.props):E.item.props,G=F.activeDot,Q=F.dataKey,V=ae(ae({index:N,dataKey:Q,cx:P.x,cy:P.y,r:4,fill:ib(E.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},Ae(G,!1)),Ec(G));return T.push(S.renderActiveDot(G,V,"".concat(q,"-activePoint-").concat(N))),O?T.push(S.renderActiveDot(G,ae(ae({},V),{},{cx:O.x,cy:O.y}),"".concat(q,"-basePoint-").concat(N))):D&&T.push(null),T}),Te(w,"renderGraphicChild",function(M,E,P){var O=w.filterFormatItem(M,E,P);if(!O)return null;var N=w.getTooltipEventType(),D=w.state,T=D.isTooltipActive,q=D.tooltipAxis,F=D.activeTooltipIndex,G=D.activeLabel,Q=w.props.children,V=Sn(Q,An),H=O.props,U=H.points,X=H.isRange,R=H.baseLine,$=O.item.type.defaultProps!==void 0?ae(ae({},O.item.type.defaultProps),O.item.props):O.item.props,Z=$.activeDot,ue=$.hide,he=$.activeBar,ge=$.activeShape,ye=!!(!ue&&T&&V&&(Z||he||ge)),fe={};N!=="axis"&&V&&V.props.trigger==="click"?fe={onClick:bc(w.handleItemMouseEnter,M.props.onClick)}:N!=="axis"&&(fe={onMouseLeave:bc(w.handleItemMouseLeave,M.props.onMouseLeave),onMouseEnter:bc(w.handleItemMouseEnter,M.props.onMouseEnter)});var ne=Y.cloneElement(M,ae(ae({},O.props),fe));function de(vt){return typeof q.dataKey=="function"?q.dataKey(vt.payload):null}if(ye)if(F>=0){var pe,re;if(q.dataKey&&!q.allowDuplicatedCategory){var Re=typeof q.dataKey=="function"?de:"payload.".concat(q.dataKey.toString());pe=kc(U,Re,G),re=X&&R&&kc(R,Re,G)}else pe=U==null?void 0:U[F],re=X&&R&&R[F];if(ge||he){var Pe=M.props.activeIndex!==void 0?M.props.activeIndex:F;return[Y.cloneElement(M,ae(ae(ae({},O.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ee(pe))return[ne].concat($i(w.renderActivePoints({item:O,activePoint:pe,basePoint:re,childIndex:F,isRange:X})))}else{var Ce,We=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},Fe=We.graphicalItem,He=Fe.item,qe=He===void 0?M:He,Ke=Fe.childIndex,Bt=ae(ae(ae({},O.props),fe),{},{activeIndex:Ke});return[Y.cloneElement(qe,Bt),null,null]}return X?[ne,null,null]:[ne,null]}),Te(w,"renderCustomized",function(M,E,P){return Y.cloneElement(M,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Te(w,"renderMap",{CartesianGrid:{handler:Pc,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Pc},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Pc},YAxis:{handler:Pc},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((W=A.id)!==null&&W!==void 0?W:Ha("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=PW(w.triggeredAfterMouseMove,(_=A.throttleDelay)!==null&&_!==void 0?_:1e3/60),w.state={},w}return XQ(S,y),VQ(S,[{key:"componentDidMount",value:function(){var W,_;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(W=this.props.margin.left)!==null&&W!==void 0?W:0,top:(_=this.props.margin.top)!==null&&_!==void 0?_:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var W=this.props,_=W.children,w=W.data,M=W.height,E=W.layout,P=Sn(_,An);if(P){var O=P.props.defaultIndex;if(!(typeof O!="number"||O<0||O>this.state.tooltipTicks.length-1)){var N=this.state.tooltipTicks[O]&&this.state.tooltipTicks[O].value,D=ay(this.state,w,O,N),T=this.state.tooltipTicks[O].coordinate,q=(this.state.offset.top+M)/2,F=E==="horizontal",G=F?{x:T,y:q}:{y:T,x:q},Q=this.state.formattedGraphicalItems.find(function(H){var U=H.item;return U.type.name==="Scatter"});Q&&(G=ae(ae({},G),Q.props.points[O].tooltipPosition),D=Q.props.points[O].tooltipPayload);var V={activeTooltipIndex:O,isTooltipActive:!0,activeLabel:N,activePayload:D,activeCoordinate:G};this.setState(V),this.renderCursor(P),this.accessibilityManager.setIndex(O)}}}},{key:"getSnapshotBeforeUpdate",value:function(W,_){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==_.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==W.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==W.margin){var w,M;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(M=this.props.margin.top)!==null&&M!==void 0?M:0}})}return null}},{key:"componentDidUpdate",value:function(W){jv([Sn(W.children,An)],[Sn(this.props.children,An)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var W=Sn(this.props.children,An);if(W&&typeof W.props.shared=="boolean"){var _=W.props.shared?"axis":"item";return l.indexOf(_)>=0?_:i}return i}},{key:"getMouseInfo",value:function(W){if(!this.container)return null;var _=this.container,w=_.getBoundingClientRect(),M=z$(w),E={chartX:Math.round(W.pageX-M.left),chartY:Math.round(W.pageY-M.top)},P=w.width/_.offsetWidth||1,O=this.inRange(E.chartX,E.chartY,P);if(!O)return null;var N=this.state,D=N.xAxisMap,T=N.yAxisMap,q=this.getTooltipEventType(),F=w3(this.state,this.props.data,this.props.layout,O);if(q!=="axis"&&D&&T){var G=Aa(D).scale,Q=Aa(T).scale,V=G&&G.invert?G.invert(E.chartX):null,H=Q&&Q.invert?Q.invert(E.chartY):null;return ae(ae({},E),{},{xValue:V,yValue:H},F)}return F?ae(ae({},E),F):null}},{key:"inRange",value:function(W,_){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,M=this.props.layout,E=W/w,P=_/w;if(M==="horizontal"||M==="vertical"){var O=this.state.offset,N=E>=O.left&&E<=O.left+O.width&&P>=O.top&&P<=O.top+O.height;return N?{x:E,y:P}:null}var D=this.state,T=D.angleAxisMap,q=D.radiusAxisMap;if(T&&q){var F=Aa(T);return PS({x:E,y:P},F)}return null}},{key:"parseEventsOfWrapper",value:function(){var W=this.props.children,_=this.getTooltipEventType(),w=Sn(W,An),M={};w&&_==="axis"&&(w.props.trigger==="click"?M={onClick:this.handleClick}:M={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var E=Ec(this.props,this.handleOuterEvent);return ae(ae({},E),M)}},{key:"addListener",value:function(){Bv.on(xv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Bv.removeListener(xv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(W,_,w){for(var M=this.state.formattedGraphicalItems,E=0,P=M.length;E<P;E++){var O=M[E];if(O.item===W||O.props.key===W.key||_===Ur(O.item.type)&&w===O.childIndex)return O}return null}},{key:"renderClipPath",value:function(){var W=this.clipPathId,_=this.state.offset,w=_.left,M=_.top,E=_.height,P=_.width;return j.createElement("defs",null,j.createElement("clipPath",{id:W},j.createElement("rect",{x:w,y:M,height:E,width:P})))}},{key:"getXScales",value:function(){var W=this.state.xAxisMap;return W?Object.entries(W).reduce(function(_,w){var M=I3(w,2),E=M[0],P=M[1];return ae(ae({},_),{},Te({},E,P.scale))},{}):null}},{key:"getYScales",value:function(){var W=this.state.yAxisMap;return W?Object.entries(W).reduce(function(_,w){var M=I3(w,2),E=M[0],P=M[1];return ae(ae({},_),{},Te({},E,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(W){var _;return(_=this.state.xAxisMap)===null||_===void 0||(_=_[W])===null||_===void 0?void 0:_.scale}},{key:"getYScaleByAxisId",value:function(W){var _;return(_=this.state.yAxisMap)===null||_===void 0||(_=_[W])===null||_===void 0?void 0:_.scale}},{key:"getItemByXY",value:function(W){var _=this.state,w=_.formattedGraphicalItems,M=_.activeItem;if(w&&w.length)for(var E=0,P=w.length;E<P;E++){var O=w[E],N=O.props,D=O.item,T=D.type.defaultProps!==void 0?ae(ae({},D.type.defaultProps),D.props):D.props,q=Ur(D.type);if(q==="Bar"){var F=(N.data||[]).find(function(H){return pz(W,H)});if(F)return{graphicalItem:O,payload:F}}else if(q==="RadialBar"){var G=(N.data||[]).find(function(H){return PS(W,H)});if(G)return{graphicalItem:O,payload:G}}else if(f0(O,M)||d0(O,M)||Hs(O,M)){var Q=TU({graphicalItem:O,activeTooltipItem:M,itemData:T.data}),V=T.activeIndex===void 0?Q:T.activeIndex;return{graphicalItem:ae(ae({},O),{},{childIndex:V}),payload:Hs(O,M)?T.data[Q]:O.props.data[Q]}}}return null}},{key:"render",value:function(){var W=this;if(!RB(this))return null;var _=this.props,w=_.children,M=_.className,E=_.width,P=_.height,O=_.style,N=_.compact,D=_.title,T=_.desc,q=B3(_,$Q),F=Ae(q,!1);if(N)return j.createElement(X4,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},j.createElement(Dv,ui({},F,{width:E,height:P,title:D,desc:T}),this.renderClipPath(),HB(w,this.renderMap)));if(this.props.accessibilityLayer){var G,Q;F.tabIndex=(G=this.props.tabIndex)!==null&&G!==void 0?G:0,F.role=(Q=this.props.role)!==null&&Q!==void 0?Q:"application",F.onKeyDown=function(H){W.accessibilityManager.keyboardEvent(H)},F.onFocus=function(){W.accessibilityManager.focus()}}var V=this.parseEventsOfWrapper();return j.createElement(X4,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},j.createElement("div",ui({className:je("recharts-wrapper",M),style:ae({position:"relative",cursor:"default",width:E,height:P},O)},V,{ref:function(U){W.container=U}}),j.createElement(Dv,ui({},F,{width:E,height:P,title:D,desc:T,style:rY}),this.renderClipPath(),HB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(Y.Component);Te(x,"displayName",n),Te(x,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Te(x,"getDerivedStateFromProps",function(y,S){var A=y.dataKey,W=y.data,_=y.children,w=y.width,M=y.height,E=y.layout,P=y.stackOffset,O=y.margin,N=S.dataStartIndex,D=S.dataEndIndex;if(S.updateId===void 0){var T=P3(y);return ae(ae(ae({},T),{},{updateId:0},b(ae(ae({props:y},T),{},{updateId:0}),S)),{},{prevDataKey:A,prevData:W,prevWidth:w,prevHeight:M,prevLayout:E,prevStackOffset:P,prevMargin:O,prevChildren:_})}if(A!==S.prevDataKey||W!==S.prevData||w!==S.prevWidth||M!==S.prevHeight||E!==S.prevLayout||P!==S.prevStackOffset||!si(O,S.prevMargin)){var q=P3(y),F={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},G=ae(ae({},w3(S,W,E)),{},{updateId:S.updateId+1}),Q=ae(ae(ae({},q),F),G);return ae(ae(ae({},Q),b(ae({props:y},Q),S)),{},{prevDataKey:A,prevData:W,prevWidth:w,prevHeight:M,prevLayout:E,prevStackOffset:P,prevMargin:O,prevChildren:_})}if(!jv(_,S.prevChildren)){var V,H,U,X,R=Sn(_,Wi),$=R&&(V=(H=R.props)===null||H===void 0?void 0:H.startIndex)!==null&&V!==void 0?V:N,Z=R&&(U=(X=R.props)===null||X===void 0?void 0:X.endIndex)!==null&&U!==void 0?U:D,ue=$!==N||Z!==D,he=!Ee(W),ge=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ge},b(ae(ae({props:y},S),{},{updateId:ge,dataStartIndex:$,dataEndIndex:Z}),S)),{},{prevChildren:_,dataStartIndex:$,dataEndIndex:Z})}return null}),Te(x,"renderActiveDot",function(y,S,A){var W;return Y.isValidElement(y)?W=Y.cloneElement(y,S):ke(y)?W=y(S):W=j.createElement(Js,S),j.createElement(De,{className:"recharts-active-dot",key:A},W)});var I=Y.forwardRef(function(S,A){return j.createElement(x,ui({},S,{ref:A}))});return I.displayName=x.displayName,I},dY=x0({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:sb}),hY=x0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:sb}),mY=x0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:p0},{axisType:"radiusAxis",AxisComp:l0}],formatAxisMap:xq,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),vY=x0({chartName:"ComposedChart",GraphicalChild:[qr,So,Sr,I0],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:b0}],formatAxisMap:sb});const A3=({active:e,payload:t,label:n})=>e&&t&&t.length?C.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[C.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),C.jsxs("div",{className:"space-y-1",children:[C.jsxs("p",{className:"text-sm",children:[C.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),C.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),C.jsxs("p",{className:"text-sm",children:[C.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),C.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),C.jsxs("p",{className:"text-sm",children:[C.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),C.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function X_({data:e,title:t,instanceId:n}){var b,x;const r=Y.useId(),a=t||"Sessions & Escalation Trends",i=e.length<=3&&((x=(b=e[0])==null?void 0:b.week)==null?void 0:x.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,p=`chart-${l}-${e.length}`,f=e.map((I,y)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${y}`})),m=`colorSessions-${l}`,d=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return C.jsxs(zn,{className:"shadow-xl border-0",children:[C.jsx(Rp,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:C.jsxs("div",{className:"flex items-start justify-between",children:[C.jsxs("div",{children:[C.jsx(jp,{className:"text-2xl font-black text-gray-900",children:a}),C.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),C.jsxs("div",{className:"flex gap-2",children:[C.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),C.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),C.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),C.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),C.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),C.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),C.jsx(Un,{className:"p-6 bg-white",children:C.jsx(Ny,{width:"100%",height:400,children:i?C.jsxs(vY,{data:f,barGap:8,barCategoryGap:"20%",children:[C.jsxs("defs",{children:[C.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[C.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),C.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),C.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[C.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),C.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),C.jsx(Mp,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),C.jsx(Ra,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),C.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),C.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),C.jsx(An,{content:C.jsx(A3,{})},`tooltip-${l}`),C.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),C.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),C.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),C.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p):C.jsxs(dY,{data:f,children:[C.jsx("defs",{children:C.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[C.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),C.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),C.jsx(Mp,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),C.jsx(Ra,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),C.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),C.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),C.jsx(An,{content:C.jsx(A3,{})},`tooltip-${l}`),C.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),C.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),C.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),C.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p)})})]})}const W3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function Z_({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return C.jsxs(zn,{children:[C.jsxs(Rp,{children:[C.jsx(jp,{children:r}),C.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),C.jsx(Un,{children:C.jsx(Ny,{width:"100%",height:300,children:C.jsxs(mY,{children:[C.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:i.map(s=>C.jsx(Ks,{fill:W3[i.indexOf(s)%W3.length]},s.uniqueKey))},`pie-${a}`),C.jsx(An,{formatter:(s,l,p)=>[`${s.toLocaleString()} sessions (${p.payload.percentage.toFixed(1)}%)`,p.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function gY({data:e}){const t=e.reduce((a,i)=>{const s=a.find(l=>l.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),n=t.slice(0,10),r=t.reduce((a,i)=>a+i.count,0);return C.jsxs(zn,{children:[C.jsxs(Rp,{children:[C.jsx(jp,{children:"Product Breakdown (Human Handled)"}),C.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),C.jsx(Un,{children:C.jsx(Ny,{width:"100%",height:300,children:C.jsxs(hY,{data:n,children:[C.jsx(Mp,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),C.jsx(Ra,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),C.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),C.jsx(An,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),C.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function J_({className:e,...t}){return C.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:C.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function eO({className:e,...t}){return C.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function tO({className:e,...t}){return C.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function ss({className:e,...t}){return C.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return C.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function Fn({className:e,...t}){return C.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function yY({data:e}){const[t,n]=Y.useState(new Set),r=a=>{const i=new Set(t);i.has(a)?i.delete(a):i.add(a),n(i)};return C.jsx("div",{className:"border rounded-lg overflow-hidden",children:C.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:C.jsxs(J_,{children:[C.jsx(eO,{className:"bg-gray-50 sticky top-0 z-10",children:C.jsxs(ss,{children:[C.jsx(Dr,{className:"w-12"}),C.jsx(Dr,{children:"Issue Type"}),C.jsx(Dr,{className:"text-right",children:"Count"})]})}),C.jsx(tO,{children:e.flatMap((a,i)=>{const s=t.has(a.issue),l=[C.jsxs(ss,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[C.jsx(Fn,{children:s?C.jsx(jE,{className:"w-4 h-4"}):C.jsx(DE,{className:"w-4 h-4"})}),C.jsx(Fn,{className:"font-medium",children:a.issue}),C.jsx(Fn,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((p,f)=>{l.push(C.jsxs(ss,{className:"bg-blue-50",children:[C.jsx(Fn,{}),C.jsx(Fn,{className:"pl-8",children:C.jsxs("div",{children:[C.jsx("div",{className:"font-medium text-sm text-gray-900",children:p.subType}),C.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:p.products.map((m,d)=>C.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",C.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${p.subType}-${m.product}-${d}`))})]})}),C.jsx(Fn,{className:"text-right",children:p.count})]},`${a.issue}-${p.subType}-${f}`))}),l})})]})})})}function bY({data:e}){const[t,n]=Y.useState("createdAt"),[r,a]=Y.useState("desc"),i=p=>{t===p?a(r==="asc"?"desc":"asc"):(n(p),a("asc"))},s=[...e].sort((p,f)=>{let m=p[t],d=f[t];return t==="createdAt"?(m=yr(p.createdAt).getTime(),d=yr(f.createdAt).getTime()):(m=(m||"").toLowerCase(),d=(d||"").toLowerCase()),r==="asc"?m>d?1:-1:m<d?1:-1}),l=({field:p,children:f})=>C.jsxs("button",{onClick:()=>i(p),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[f,C.jsx(EE,{className:"w-4 h-4"})]});return C.jsx("div",{className:"border rounded-lg overflow-hidden",children:C.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:C.jsxs(J_,{children:[C.jsx(eO,{className:"bg-gray-50 sticky top-0 z-10",children:C.jsxs(ss,{children:[C.jsx(Dr,{children:C.jsx(l,{field:"createdAt",children:"Date"})}),C.jsx(Dr,{children:C.jsx(l,{field:"channel",children:"Channel"})}),C.jsx(Dr,{children:C.jsx(l,{field:"product",children:"Product"})}),C.jsx(Dr,{children:C.jsx(l,{field:"issue",children:"Issue"})}),C.jsx(Dr,{children:C.jsx(l,{field:"subType",children:"Sub Type"})}),C.jsx(Dr,{children:C.jsx(l,{field:"handled",children:"Handled By"})})]})}),C.jsx(tO,{children:s.map((p,f)=>C.jsxs(ss,{children:[C.jsx(Fn,{className:"whitespace-nowrap",children:JN(yr(p.createdAt))}),C.jsx(Fn,{children:p.channel}),C.jsx(Fn,{children:p.product||"-"}),C.jsx(Fn,{children:p.issue||"-"}),C.jsx(Fn,{children:p.subType||"-"}),C.jsx(Fn,{children:C.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${p.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:p.handled})})]},f))})]})})})}function IY({monthsData:e,weeklyEscalation:t}){const n=e.flatMap(l=>l.data),r=Ev(n),a=Tv(n)[0],i=wA(n).slice(0,5),s=eR(n,1).slice(0,5);return C.jsxs(C.Fragment,{children:[C.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[C.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),C.jsx(Un,{className:"p-5 relative z-10",children:C.jsxs("div",{className:"text-center text-white",children:[C.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[C.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),C.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),C.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),C.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>C.jsxs(zn,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),C.jsx(Rp,{className:"text-white pb-3 pt-4 relative z-10",children:C.jsxs("div",{className:"text-center",children:[C.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[C.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),C.jsx(jp,{className:"text-2xl font-black mb-3 drop-shadow",children:l.name}),C.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[C.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),C.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:l.data.length.toLocaleString()}),l.data.length<200&&C.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),C.jsx(Un,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:C.jsxs("div",{className:"space-y-2",children:[C.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[C.jsxs("div",{className:"flex justify-between items-center mb-1",children:[C.jsxs("div",{className:"flex items-center gap-1.5",children:[C.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:C.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),C.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),C.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:C.jsxs("p",{className:"text-sm font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),C.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),C.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[C.jsxs("div",{className:"flex justify-between items-center mb-1",children:[C.jsxs("div",{className:"flex items-center gap-1.5",children:[C.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:C.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),C.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),C.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:C.jsxs("p",{className:"text-sm font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),C.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]}),C.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-3 shadow-sm border border-red-200",children:[C.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[C.jsx("div",{className:"w-6 h-6 bg-red-500 rounded flex items-center justify-center shadow-sm",children:C.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),C.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Escalation Rate"})]}),C.jsxs("p",{className:"text-2xl font-black text-red-600",children:[l.metrics.escalationRate.toFixed(1),"%"]})]})]})})]},l.name))}),C.jsx(X_,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),C.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>C.jsx(Z_,{data:l.channels,title:`${l.name} - Channels`},l.name))}),C.jsxs(zn,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[C.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:C.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),C.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),C.jsxs(Un,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[C.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[C.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[C.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:C.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),C.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),C.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:r.totalSessions.toLocaleString()}),C.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",e.length," months"]})]}),C.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[C.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:C.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),C.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),C.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[r.botPercentage.toFixed(1),"%"]}),C.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[r.botHandled.toLocaleString()," Handled"]})]}),C.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[C.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:C.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),C.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),C.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[r.escalationRate.toFixed(1),"%"]}),C.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),C.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[C.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:C.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),C.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),C.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(a==null?void 0:a.channel)||"N/A"}),C.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((a==null?void 0:a.percentage)||0).toFixed(1),"% Share"]})]})]}),C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[C.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[C.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:C.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),C.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[C.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),C.jsx("div",{className:"space-y-2 relative z-10",children:i.map((l,p)=>C.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[C.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[C.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[p+1,"."]})," ",l.product||"N/A"]}),C.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[l.count.toLocaleString()," cases"]})]},p))})]}),C.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[C.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:C.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),C.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[C.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),C.jsx("div",{className:"space-y-2 relative z-10",children:s.map((l,p)=>C.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[C.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[C.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[p+1,"."]})," ",l.issue||"N/A"]}),C.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[l.total.toLocaleString()," escapements"]})]},p))})]})]})]})]})]})}const BY=`Channel,Created at,Product,Issue,Sub Type,Handled
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,Waggel Cam Pro,Set Up,,Human
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
Inapp,2026-01-01,RV Mini Cam,Tech Query ,,Human
Webapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Inapp,2026-01-01,,,,Bot
Webapp,2026-01-01,RV Mini Cam,Presales,,Human
Inapp,2026-01-01,4g Mini Cam,Subscription Activation,,Human
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
Webapp,2026-01-02,4g Mini Cam,Subscription Activation,,Human
Webapp,2026-01-02,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-02,,,,Bot
Webapp,2026-01-02,,,,Bot
Inapp,2026-01-02,PM,DNR,,Human
Inapp,2026-01-02,4g Mini Cam,Subscription Activation - Combo,,Human
Webapp,2026-01-02,,,,Bot
Webapp,2026-01-02,4g Mini Cam,App Navigation,,Human
Webapp,2026-01-02,,,,Bot
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,4g Mini Cam,App Navigation,,Human
Inapp,2026-01-02,4g Mini Cam,Sound Detection,,Human
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,PM,Tech Query ,,Human
Inapp,2026-01-02,,,,Bot
Inapp,2026-01-02,4g Mini Cam,Subscription Activation - Combo,,Human
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
Webapp,2026-01-03,4g Mini Cam,Set Up,,Human
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
Inapp,2026-01-05,4g Mini Cam,Motion alerts,,Human
Inapp,2026-01-05,4g camera,Accessories,,Human
Webapp,2026-01-05,4g Mini Cam,Accessories,,Human
Webapp,2026-01-05,,,,Bot
Webapp,2026-01-05,4g Mini Cam,Presales,,Human
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Webapp,2026-01-05,,,,Bot
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,Waggle Cam Pro,Registration Issue,,Human
Inapp,2026-01-05,RV Mini Cam,Subscription Activation,,Human
Inapp,2026-01-05,,,,Bot
Inapp,2026-01-05,PM,Battery Issue,,Human
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,4g Mini Cam,Sound Detection,,Human
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,,,,Bot
Inapp,2026-01-06,4g Mini Cam,Connection,,Human
Inapp,2026-01-06,PM,DNR,,Human
Webapp,2026-01-06,,,,Bot
Inapp,2026-01-06,4g Mini Cam,Subscription Activation - Combo,,Human
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
Inapp,2026-01-07,4g Mini Cam,Subscription Activation,,Human
Inapp,2026-01-07,,,,Bot
Inapp,2026-01-07,Waggle Cam Pro,Login Issue,,Human
Webapp,2026-01-07,Waggle Cam Pro,Login Issue,,Human
Inapp,2026-01-07,Waggle Cam Pro,Presales,,Human
Webapp,2026-01-07,4g Mini Cam,Motion alerts,,Human
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
Inapp,2026-01-08,Waggle Cam Pro,Presales,,Human
Webapp,2026-01-08,4g Mini Cam,Subscription query,,Human
Webapp,2026-01-08,PM,DNR,,Human
Inapp,2026-01-08,RV Mini Cam,Subscription Cancellaiton,,Human
Webapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,NA,No Reason,,Human
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,Waggle Cam Pro,Connection,,Human
Webapp,2026-01-08,PM,Login Issue,,Human
Webapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Webapp,2026-01-08,,,,Bot
Webapp,2026-01-08,4g Mini Cam,Login Issue,,Human
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,PM,DNR,,Human
Inapp,2026-01-08,RV Mini Cam,Motion alerts,,Human
Inapp,2026-01-08,RV Mini Cam,Connection,,Human
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Inapp,2026-01-08,,,,Bot
Webapp,2026-01-08,4g Mini Cam,Subscription Activation,,Human
Webapp,2026-01-08,4g Mini Cam,Connection,,Human
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
Inapp,2026-01-09,PM,Tech Query ,,Human
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,4g Mini Cam,Connection,,Human
Inapp,2026-01-09,PM,Power Recovery Not Sent,,Human
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Inapp,2026-01-09,,,,Bot
Webapp,2026-01-09,PM,Login Issue,,Human
Inapp,2026-01-09,PM,Return & refund,,Human
Webapp,2026-01-09,4g Mini Cam,Subscription Activation - Combo,,Human
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
Inapp,2026-01-10,Waggle Cam Pro,Treat Tosser Issue,,Human
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-10,,,,Bot
Webapp,2026-01-10,4g Mini Cam,Presales,,Human
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
Webapp,2026-01-10,PM,Tech Query ,,Human
Inapp,2026-01-10,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Webapp,2026-01-11,PM,Subscription Activation,,Human
Inapp,2026-01-11,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-11,,,,Bot
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-11,4g Mini Cam,Login Issue,,Human
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
Webapp,2026-01-11,4g Mini Cam,Presales,,Human
Webapp,2026-01-11,,,,Bot
Inapp,2026-01-12,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,PM,Accessories,,Human
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,,,,Bot
Inapp,2026-01-12,RV Mini Cam,Connection,,Human
Inapp,2026-01-12,Waggle Cam Pro,Squeaky Sound,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,RV Mini Cam,Connection,,Human
Inapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,PM,Temp Issue,,Human
Webapp,2026-01-12,,,,Bot
Webapp,2026-01-12,,,,Bot
Inapp,2026-01-12,,,,Bot
Inapp,2026-01-12,4g Mini Cam,Subscription Activation - Combo,,Human
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
Webapp,2026-01-13,PM,Tech Query ,,Human
Inapp,2026-01-13,RV Mini Cam,Connection,,Human
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,,,,Bot
Inapp,2026-01-13,Waggel Cam Pro,Connection,,Human
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
Webapp,2026-01-14,4g Mini Cam,Subscription Activation,,Human
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
Inapp,2026-01-15,Waggle Cam Pro,Connection,,Human
Webapp,2026-01-15,RV Mini Cam,Tech Query ,,Human
Webapp,2026-01-15,PM,Subscription query,,Human
Webapp,2026-01-15,PM,Subscription Activation,,Human
Webapp,2026-01-15,Waggel Insurance,Waggel Insurance,,Human
Inapp,2026-01-15,,,,Bot
Webapp,2026-01-15,PM,Subscription Activation,,Human
Inapp,2026-01-15,PM,DNR,,Human
Inapp,2026-01-15,4g Mini Cam,Connection,,Human
Inapp,2026-01-15,,,,Bot
Inapp,2026-01-15,PM,DNR,,Human
Inapp,2026-01-15,PM,Subscription Mapping Issue,,Human
Inapp,2026-01-15,4g Mini Cam,Noise Issue,,Human
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,NA,No Reason,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,PM,DNR,,Human
Inapp,2026-01-16,RV Mini Cam,Multiple Login,,Human
Webapp,2026-01-16,4g Mini Cam,Connection,,Human
Webapp,2026-01-16,4g camera,Return & refund,,Human
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,Waggle Cam Pro,Subscription query,,Human
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,PM,Subscription Activation,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,PM,DNR,,Human
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,4g Mini Cam,Connection,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,4g Mini Cam,Battery Issue,,Human
Webapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,PM,DNR,,Human
Webapp,2026-01-16,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-16,,,,Bot
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,4g Mini Cam,App Navigation,,Human
Inapp,2026-01-16,PM,DNR,,Human
Webapp,2026-01-16,,,,Bot
Inapp,2026-01-16,,,,Bot
Inapp,2026-01-16,4g Mini Cam,Subscription Mapping Issue,,Human
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
Webapp,2026-01-17,4g Mini Cam,Tech Query ,,Human
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
Webapp,2026-01-18,PM,Tech Query ,,Human
Webapp,2026-01-18,,,,Bot
Webapp,2026-01-18,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-18,,,,Bot
Inapp,2026-01-18,,,,Bot
Webapp,2026-01-18,Waggle Cam Pro,Device Removal,,Human
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
Webapp,2026-01-18,4g Mini Cam,Tech Query ,,Human
Inapp,2026-01-18,,,,Bot
Inapp,2026-01-19,4g Mini Cam,Set Up,,Human
Inapp,2026-01-19,4g Mini Cam,Registration Issue,,Human
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
Inapp,2026-01-20,4g Mini Cam,App Navigation,,Human
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Webapp,2026-01-20,RV Mini Cam,Presales,,Human
Inapp,2026-01-20,PM,DNR,,Human
Webapp,2026-01-20,,,,Bot
Webapp,2026-01-20,,,,Bot
Inapp,2026-01-20,,,,Bot
Inapp,2026-01-20,4g Mini Cam,Subscription Activation,,Human
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
Inapp,2026-01-21,Waggle Smart Sensor,Connection,,Human
Inapp,2026-01-21,PM,DNR,,Human
Inapp,2026-01-21,PM,Subscription Cancellaiton,,Human
Inapp,2026-01-21,,,,Bot
Inapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Webapp,2026-01-21,,,,Bot
Inapp,2026-01-21,4g Mini Cam,Device Query,,Human
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
Inapp,2026-01-22,4g Mini Cam,Device Removal,,Human
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
Inapp,2026-01-23,4g Mini Cam,Connection,,Human
Inapp,2026-01-23,PM,Text Alerts Exhausted,,Human
Inapp,2026-01-23,Waggle Smart Sensor,Connection,,Human
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
Webapp,2026-01-23,4g Mini Cam,Presales,,Human
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
Inapp,2026-01-24,Waggel Cam Pro,Motion alerts,,Human
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
Inapp,2026-01-24,4g Mini Cam,App Navigation,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,,,,Bot
Webapp,2026-01-24,,,,Bot
Webapp,2026-01-24,,,,Bot
Inapp,2026-01-24,4g Mini Cam,Subscription Mapping Issue,,Human
Inapp,2026-01-24,,,,Bot
Inapp,2026-01-24,,,,Bot
Webapp,2026-01-24,PM,Subscription query,,Human
Webapp,2026-01-24,,,,Bot
Webapp,2026-01-25,,,,Bot
Inapp,2026-01-25,4g Mini Cam,Turning On,,Human
Inapp,2026-01-25,4g Mini Cam,Subscription Activation - Combo,,Human
Webapp,2026-01-25,PM,Battery Issue,,Human
Inapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g Mini Cam,Return & refund,,Human
Inapp,2026-01-25,RV Mini Cam,Registration Issue,,Human
Webapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g Mini Cam,Presales,,Human
Webapp,2026-01-25,PM,Order Status,,Human
Inapp,2026-01-25,PM,DNR,,Human
Inapp,2026-01-25,PM,DNR,,Human
Inapp,2026-01-25,,,,Bot
Webapp,2026-01-25,,,,Bot
Webapp,2026-01-25,4g Mini Cam,Subscription Activation,,Human
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
Webapp,2026-01-26,4g Mini Cam,Presales,,Human
Inapp,2026-01-26,PM,Turning On,,Human
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,,,,Bot
Inapp,2026-01-27,PM,DNR,,Human
Inapp,2026-01-27,4g Mini Cam,Device Query,,Human
Inapp,2026-01-27,PM,Accessories,,Human
Webapp,2026-01-27,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-27,,,,Bot
Inapp,2026-01-27,4g Mini Cam,Referral Query,,Human
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
Inapp,2026-01-27,4g Mini Cam,Subscription Activation,,Human
Webapp,2026-01-27,,,,Bot
Webapp,2026-01-28,4g Mini Cam,Presales,,Human
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
Webapp,2026-01-28,Waggel Cam Pro,Connection,,Human
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,4g Mini Cam,Connection,,Human
Inapp,2026-01-29,Waggel Insurance,Waggel Insurance,,Human
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,PM,DNR,,Human
Webapp,2026-01-29,4g Mini Cam,Presales,,Human
Inapp,2026-01-29,,,,Bot
Inapp,2026-01-29,PM,DNR,,Human
Webapp,2026-01-29,,,,Bot
Inapp,2026-01-29,,,,Bot
Webapp,2026-01-29,4g Mini Cam,Subscription Activation,,Human
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
Inapp,2026-01-30,Waggle Cam Pro,Connection,,Human
Inapp,2026-01-31,PM,Flexi Plan Confusion,,Human
Inapp,2026-01-31,PM,DNR,,Human
Webapp,2026-01-31,RV Mini Cam,Subscription Activation,,Human
Inapp,2026-01-31,PM,Subscription Cancellaiton,,Human
Webapp,2026-01-31,4g Mini Cam,order related,,Human
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
Inapp,2026-02-01,4G Camera,Subs Cancellation,Steps,Human
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
Inapp,2026-02-02,4G Mini,Sim not Found,,Human
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
Inapp,2026-02-02,4G Mini,Streaming,from another Device,Human
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
Inapp,2026-02-03,4G Mini,Audio Issue,Button not working,Human
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
Inapp,2026-02-03,4G Mini,App Query,Turn off cam form app,Human
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,PM,Display ,LED blinking,Human
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
Inapp,2026-02-04,PM,Display ,not working,Human
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
Webchat,2026-02-04,4G Mini,Presales,Subs Price,Human
Webchat,2026-02-04,PM,Return & refund,Process,Human
Inapp,2026-02-04,,,,Bot
Inapp,2026-02-04,,,,Bot
Webchat,2026-02-04,,,,Bot
Inapp,2026-02-05,4G Mini,Flip,How to do,Human
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,4G Mini,Connection,,Human
Inapp,2026-02-05,4G Mini,Subs Activation,Additional camera,Human
Inapp,2026-02-05,4G Mini,Subs Activation,Price query,Human
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,4G Mini,Sim not Found,,Human
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
Webchat,2026-02-05,4G Camera,Accessories,Whats included,Human
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,,,,Bot
Inapp,2026-02-05,4G Mini,Presales,Offers,Human
Webchat,2026-02-05,,,,Bot
Webchat,2026-02-05,,,,Bot
Inapp,2026-02-06,Waggle Cam Pro,Connection, Not connecting,Human
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
Inapp,2026-02-06,4G Mini,App Navigation,Battery %,Human
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
Inapp,2026-02-07,4G Mini,multi-user-access,,Human
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
Inapp,2026-02-08,4G Mini,Presales,Network carrier,Human
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,4G Mini,Login,wrong cred,Human
Inapp,2026-02-08,4G Mini,Presales,DIscount Code Request,Human
Inapp,2026-02-08,PM,Subs Activation - Combo,Combo Plan Query,Human
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,4G Mini,Login,wrong cred,Human
Webchat,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,4G Mini,InApp Notification,,Human
Inapp,2026-02-08,4G Camera,motion detection,,Human
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,PM,Support related,,Human
Webchat,2026-02-08,,,,Bot
Webchat,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Inapp,2026-02-08,,,,Bot
Webchat,2026-02-09,4G Camera,motion detection,Range,Human
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,4G Mini,Device Query,Non Magnetic Part,Human
Webchat,2026-02-09,4G Mini,Subs Activation,DIscount Code Request,Human
Webchat,2026-02-09,4G Mini,Support related,copy of support ticket,Human
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,Device Query,Network carrier,Human
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,Support related,Live chat,Human
Webchat,2026-02-09,4G Mini,Pan tilt,not working,Human
Webchat,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,4G Mini,App Navigation,Recording,Human
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,PM,Subs Activation,DIscount Code Request,Human
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,App Navigation,Subs cancellation,Human
Inapp,2026-02-09,PM,Sub Query,reactivation related,Human
Inapp,2026-02-09,4G Mini,Sub Query,Combo upgrade,Human
Webchat,2026-02-09,,,,Bot
Inapp,2026-02-09,,,,Bot
Webchat,2026-02-09,PM,Sub Query,Flexi and pause,Human
Inapp,2026-02-09,RV Mini Cam,Connection,How to do,Human
Inapp,2026-02-09,,,,Bot
Inapp,2026-02-09,4G Mini,Subs Downgrade,Query,Human
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
Inapp,2026-02-10,4G Mini,multi-user-access,,Human
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Inapp,2026-02-10,4G Mini,Presales,Subs Price,Human
Inapp,2026-02-10,,,,Bot
Webchat,2026-02-10,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,4G Camera,LED Issue,,Human
Inapp,2026-02-11,,,,Bot
Webchat,2026-02-11,,,,Bot
Webchat,2026-02-11,4G Mini,Subs Activation,DIscount Code Request,Human
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
Webchat,2026-02-12,4G Mini,Device Query,Mounting Related,Human
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
Webchat,2026-02-13,4G Mini,Presales,Charging Query,Human
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
Inapp,2026-02-14,PM,Display ,,Human
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,,,,Bot
Inapp,2026-02-14,4G Mini,Rotation Issue,,Human
Webchat,2026-02-14,,,,Bot
Webchat,2026-02-14,NA,No reason,,Human
Webchat,2026-02-14,,,,Bot
Inapp,2026-02-14,4G Mini,Device Query,Apple Watch Comp.,Human
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
Webchat,2026-02-16,4G Camera,Device Query,Network carrier,Human
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
Webchat,2026-02-16,PM,Display ,,Human
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
Inapp,2026-02-17,Waggle Cam Pro,Subs Cancellation,Marketing Issue,Human
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
Inapp,2026-02-18,4G Mini,Subs Activation,Mapping prob,Human
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
Webchat,2026-02-18,4G Mini,Presales,Battery Life,Human
Inapp,2026-02-18,,,,Bot
Webchat,2026-02-18,4G Mini,Subs Activation,pack of 3,Human
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
Inapp,2026-02-20,4G Mini,Connection,,Human
Inapp,2026-02-20,PM,Sub Query,Flexi Plan Query,Human
Inapp,2026-02-20,,,,Bot
Inapp,2026-02-20,4G Mini,Registration Query,Unable to scan QR code,Human
Inapp,2026-02-20,PM,DNR,Battery Reset,Human
Inapp,2026-02-20,,,,Bot
Webchat,2026-02-20,,,,Bot
Webchat,2026-02-20,PM,Device Query,Power On Button - Old PM,Human
Inapp,2026-02-20,4G Mini,Registration Issue,Unable to scan QR code,Human
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
Webchat,2026-02-21,4G Camera,motion detection,Not tracking,Human
Inapp,2026-02-21,,,,Bot
Inapp,2026-02-21,,,,Bot
Webchat,2026-02-21,,,,Bot
Webchat,2026-02-21,4G Mini,Accessories,Mounting Bracket,Human
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
Webchat,2026-02-22,4G Camera,Presales,functionalities,Human
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,4G Mini,Presales,Order related,Human
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,,,,Bot
Webchat,2026-02-22,4G Mini,Sub Query,pack of 3,Human
Webchat,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,,,,Bot
Inapp,2026-02-22,PM,Registration Issue,Second Hand Device,Human
Inapp,2026-02-22,,,,Bot
Webchat,2026-02-22,4G Mini,Registration Query,Add Additional Cam,Human
Inapp,2026-02-22,4G Mini,App Navigation,Video Feed,Human
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
Webapp,2026-02-23,4G Mini,Sub Query,Price query,Human
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,4G Mini,App Navigation,Flip,Human
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,PM,Order,Status,Human
Inapp,2026-02-23,PM,Display,Query,Human
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,4G Mini,Sim not Found,,Human
Inapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Webapp,2026-02-23,,,,Bot
Inapp,2026-02-23,PM,DNR,Further steps,Human
Inapp,2026-02-23,4G Mini,Login,wrong cred,Human
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
Webapp,2026-02-24,4G Mini,Accessories,Mount Broken,Human
Inapp,2026-02-24,PM,Subs Activation,Mapping prob,Human
Inapp,2026-02-24,4G Mini,Subs Cancellation,,Human
Inapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,,,,Bot
Inapp,2026-02-24,PM,DNR,Battery Reset,Human
Inapp,2026-02-24,4G Mini,No camera found,,Human
Webapp,2026-02-24,,,,Bot
Webapp,2026-02-24,4G Mini,Presales,functionalities,Human
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
Inapp,2026-02-24,4G Mini,Device Query,Network carrier,Human
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
Webapp,2026-02-25,4G Mini,Presales,functionalities,Human
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
Inapp,2026-02-25,4G Mini,App Navigation,Rotation,Human
Webapp,2026-02-25,,,,Bot
Webapp,2026-02-25,,,,Bot
Inapp,2026-02-25,,,,Bot
Webapp,2026-02-25,4G Mini,motion detection,Video Not Available,Human
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
Webapp,2026-02-26,Waggle Cam Pro,Treat Toss,Schedule,Human
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
Inapp,2026-02-27,4G Mini,App Navigation,Motion Recording,Human
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
Inapp,2026-02-27,4G Mini,Subs Activation,DIscount Code Request,Human
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
Inapp,2026-02-28,4G Mini,App Navigation,Add Phone No,Human
Inapp,2026-02-28,PM,Registration Issue,Replacment Device,Human
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,4G Mini,Login,,Human
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,PM,DNR,,Human
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,4G Mini,Registration Issue,,Human
Inapp,2026-02-28,4G Mini,App Navigation,Remove Device,Human
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Webapp,2026-02-28,,,,Bot
Inapp,2026-02-28,,,,Bot
Inapp,2026-02-28,4G Mini,Registration Issue,,Human
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
Inapp,2026-03-01,4g Mini,Device Removal,,Human
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
Inapp,2026-03-01,4g Mini,Night Vision,Video Quality,Human
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
Webapp,2026-03-02,4g Mini,Not Turning On,,Human
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
Webapp,2026-03-02,4g Mini,Presales,Motion Detection,Human
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
Webapp,2026-03-03,4G Camera,Presales,Functionalities,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,RV Mini Cam,App Navigation,Unable to find,Human
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,,,,Bot
Webapp,2026-03-03,RV Mini Cam,App Navigation,Joystick Control,Human
Inapp,2026-03-03,Waggle Cam Pro,App Navigation,Joystick Control,Human
Webapp,2026-03-03,PM,Upgrade,,Human
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,Waggle Cam Pro,Not Turning On,,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-03,,,,Bot
Inapp,2026-03-03,4g Mini,App Navigation,Joystick Control,Human
Inapp,2026-03-03,4g Mini,App Navigation,Joystick Control,Human
Inapp,2026-03-03,Waggle Cam Pro,App Navigation,Joystick Control,Human
Inapp,2026-03-03,4g Mini,App Navigation,Joystick Control,Human
Inapp,2026-03-03,Waggle Cam Pro,Treat Toss,,Human
Webapp,2026-03-03,,,,Bot
Webapp,2026-03-04,,,,Bot
Webapp,2026-03-04,,,,Bot
Inapp,2026-03-04,Waggle Cam Pro,App Navigation,Joystick Control,Human
Inapp,2026-03-04,,,,Bot
Inapp,2026-03-04,Waggle Cam Pro,App Navigation,Joystick Control,Human
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
Webapp,2026-03-04,Waggle Cam Pro,Replacment,,Human
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
Inapp,2026-03-05,4g Mini,App Navigation,Joystick Control,Human
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
Inapp,2026-03-05,4g Mini,App Navigation,PW reset,Human
Webapp,2026-03-05,,,,Bot
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,PM,App Navigation,Temp threshold,Human
Webapp,2026-03-05,4g Mini,App Issue,Unable to activate,Human
Webapp,2026-03-05,4g Mini,Subs Mapping,,Human
Inapp,2026-03-05,4g Mini,Subs Activation,Combo plan,Human
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
Inapp,2026-03-05,4g Mini,App Navigation,Motion Detection,Human
Inapp,2026-03-05,,,,Bot
Inapp,2026-03-05,4g Mini,Connection,,Human
Webapp,2026-03-05,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,4g Mini,multi-user-access,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,Waggle Cam Pro,Connection,,Human
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
Webapp,2026-03-06,4g Mini,Presales,Functionalities,Human
Webapp,2026-03-06,,,,Bot
Inapp,2026-03-06,PM,DNR,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,4g Mini,Subs Activation,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-06,PM,Subs Mapping,,Human
Inapp,2026-03-06,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4g Mini,App Navigation,Battery Level,Human
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,Waggle Cam Pro,multi-user-access,,Human
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4G Camera,App Navigation,Battery Level,Human
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Inapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-07,4g Mini,Presales,Subs Inquiry,Human
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
Inapp,2026-03-07,4G Camera,App Navigation,Noise Alerts,Human
Webapp,2026-03-07,,,,Bot
Inapp,2026-03-08,,,,Bot
Inapp,2026-03-08,PM,DNR,,Human
Inapp,2026-03-08,PM,Presales,Combo plan,Human
Webapp,2026-03-08,,,,Bot
Inapp,2026-03-08,4g Mini,App Navigation,Turn Off light,Human
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
Inapp,2026-03-08,4g Mini,App Navigation,,Human
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
Inapp,2026-03-09,4g Mini,App Navigation,Rotation,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,4G Camera,App Navigation,Delete History,Human
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Inapp,2026-03-09,,,,Bot
Webapp,2026-03-09,,,,Bot
Inapp,2026-03-09,4G Camera,App Navigation,Motion Alert Turn Off,Human
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
Inapp,2026-03-10,4G Camera,Solar Panel,,Human
Webapp,2026-03-10,,,,Bot
Webapp,2026-03-10,PM,Upgrade,,Human
Inapp,2026-03-10,4g Mini,App Navigation,Battery Level,Human
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
Inapp,2026-03-10,4g Mini,Subs Mapping,,Human
Inapp,2026-03-10,,,,Bot
Inapp,2026-03-10,4g Mini,Subs Activation,Additional devices,Human
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
Webapp,2026-03-11,4g Mini,App Navigation,Settings Icon,Human
Webapp,2026-03-11,RV Mini Cam,Presales,Offers Related,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,4g Mini,Subs Activation,Combo plan,Human
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
Inapp,2026-03-11,4g Mini,App Navigation,Battery Level,Human
Inapp,2026-03-11,4g Mini,SIM out of Service,,Human
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,4g Mini,App Navigation,Battery Level,Human
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,RV Mini Cam,Connection,,Human
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Webapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,,,,Bot
Inapp,2026-03-11,4g Mini,Connection,,Human
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
Inapp,2026-03-12,4G Camera,Login Related,,Human
Inapp,2026-03-12,4G Camera,Device Query,Functionalities,Human
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
Inapp,2026-03-13,4g Mini,Trial Plan Query,,Human
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,,,,Bot
Inapp,2026-03-13,PM,Not Turning On,,Human
Inapp,2026-03-13,4g Mini,Time Format Query,,Human
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
Webapp,2026-03-14,4g Mini,Subs Activation,Price inquiry,Human
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,4g Mini,Device Removal,Sold,Human
Inapp,2026-03-14,PM,DNR,,Human
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-14,4g Mini,App Navigation,Motion Detection,Human
Inapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Webapp,2026-03-14,,,,Bot
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,PM,DNR,,Human
Webapp,2026-03-15,PM,Temp Difference,Old Device,Human
Webapp,2026-03-15,,,,Bot
Webapp,2026-03-15,4g Mini,App Navigation,Joystick Control,Human
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,Waggle Cam Pro,App Navigation,Privacy Settings,Human
Inapp,2026-03-15,4g Mini,Subs Activation,Price inquiry,Human
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
Webapp,2026-03-15,4g Mini,Presales,Functionalities,Human
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,4g Mini,Connection,,Human
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Inapp,2026-03-15,,,,Bot
Webapp,2026-03-15,,,,Bot
Inapp,2026-03-15,PM,Subs Activation,Reactivation Query,Human
Webapp,2026-03-15,4g Mini,Subs Activation,Additional devices,Human
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
Inapp,2026-03-15,Waggle Cam Pro,App Navigation,Treat Tossing,Human
Inapp,2026-03-15,PM,Temp Difference,,Human
Webapp,2026-03-15,PM,Device Query,Functionalities,Human
Inapp,2026-03-16,4g Mini,Connection,,Human
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,,,,Bot
Inapp,2026-03-16,4g Mini,App Navigation,Delete Clips,Human
Inapp,2026-03-16,4g Mini,Subs Activation,Bundle,Human
Webapp,2026-03-16,,,,Bot
Webapp,2026-03-16,,,,Bot
Inapp,2026-03-16,4g Mini,App Navigation,Joystick Control,Human
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
Webapp,2026-03-16,4G Camera,Return and Refund,,Human
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
Webapp,2026-03-17,4g Mini,Feature Request,Camera list management,Human
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
Webapp,2026-03-17,4g Mini,Auto Tracking,,Human
Inapp,2026-03-17,4g Mini,Auto Tracking,,Human
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
Webapp,2026-03-18,4G Camera,Presales,Functionalities,Human
Webapp,2026-03-18,,,,Bot
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,4g Mini,multi-user-access,,Human
Inapp,2026-03-18,,,,Bot
Inapp,2026-03-18,Waggle Cam Pro,App Issue,Loading,Human
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
Inapp,2026-03-19,4g Mini,Connection,,Human
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
Webapp,2026-03-19,4g Mini,Presales,Subs Inquiry,Human
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
Webapp,2026-03-20,4g Mini,Subs Activation,,Human
Webapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,PM,Geo Fence Issue,,Human
Inapp,2026-03-20,,,,Bot
Webapp,2026-03-20,,,,Bot
Webapp,2026-03-20,4g Mini,Presales,Color Request,Human
Inapp,2026-03-20,PM,Alerts not working,,Human
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,,,,Bot
Inapp,2026-03-20,PM,Temp Difference,,Human
Inapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,4G Camera,App Navigation,Flip,Human
Inapp,2026-03-21,Waggel Insurance,,,Human
Webapp,2026-03-21,,,,Bot
Webapp,2026-03-21,,,,Bot
Inapp,2026-03-21,PM,Registration,Query,Human
Inapp,2026-03-21,,,,Bot
Webapp,2026-03-21,4g Mini,Presales,Network Carrier,Human
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
Inapp,2026-03-21,4g Mini,Subs Cancellation,,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,4g Mini,Subs Cancellation,,Human
Inapp,2026-03-22,4g Mini,App Issue,Loading,Human
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,4g Mini,App Navigation,Erase Videos,Human
Inapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Webapp,2026-03-22,,,,Bot
Inapp,2026-03-22,,,,Bot
Inapp,2026-03-22,4g Mini,Subs Activation,Discount Request,Human
Inapp,2026-03-22,4g Mini,Connection,,Human
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
Inapp,2026-03-22,4g Mini,Hardware Damage,,Human
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
Inapp,2026-03-23,4g Mini,Connection,Streaming,Human
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
Webapp,2026-03-23,4g Mini,Subs Activation,Combo plan,Human
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
Inapp,2026-03-24,4g Mini,Recording,continuous-playback,Human
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
Webapp,2026-03-24,4g Mini,App Navigation,Delete Clips,Human
Inapp,2026-03-24,PM,DNR,,Human
Inapp,2026-03-24,4g Mini,App Issue,Loading,Human
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
Inapp,2026-03-24,4g Mini,Presales,Subs Inquiry,Human
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-24,,,,Bot
Inapp,2026-03-24,RV Mini Cam,Connection,,Human
Inapp,2026-03-24,,,,Bot
Webapp,2026-03-24,,,,Bot
Inapp,2026-03-25,,,,Bot
Inapp,2026-03-25,PM,DNR,,Human
Inapp,2026-03-25,4g Mini,Presales,Functionalities,Human
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
Inapp,2026-03-25,4g Mini,Connection,,Human
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
Inapp,2026-03-25,Waggle Cam Pro,SD card Location,,Human
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
Webapp,2026-03-26,4G Camera,Subs Activation,Price inquiry,Human
Webapp,2026-03-26,,,,Bot
Inapp,2026-03-26,,,,Bot
Webapp,2026-03-26,4g Mini,Accessories,,Human
Inapp,2026-03-26,4g Mini,App Navigation,Flip,Human
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
Webapp,2026-03-27,4G Camera,Turn Off Light,,Human
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
Inapp,2026-03-28,4G Camera,Registration,,Human
Webapp,2026-03-28,4g Mini,Subs Activation,Subs Inquiry,Human
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
Inapp,2026-03-28,4g Mini,Connection,,Human
Webapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Inapp,2026-03-28,,,,Bot
Webapp,2026-03-28,4G Camera,App Issue,Crash,Human
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
Webapp,2026-03-29,4g Mini,Presales,Subs Inquiry,Human
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
Webapp,30-03-2026,4g Mini,Presales,Network Carrier,Human
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
Inapp,30-03-2026,4G Camera,Pan-Tilt Issue,,Human
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
Webapp,31-03-2026,Waggle Cam Pro,Exchange Query,Size,Human
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
Inapp,,4g Mini,Subs Mapping,Wrong Plan purchased,Human
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
Webchat,,Waggle Cam Pro,Connection,Reconfigure,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,PM,Subs Activation,Combo Plan,Human
Inapp,,4g Mini,Connection,,Human
Webchat,,PM,Subs Cancellation,,Human
Webchat,,4g Mini,Presales,Subs Inquiry,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,4g Mini,Connection,,Human
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
Inapp,,Waggle Cam Pro,Connection,,Human
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
Inapp,,4g Mini,Motion Alerts,,Human
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
Inapp,,4g Mini,Connection,,Human
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Webchat,,4g Mini,Presales,Combo Plan,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,PM,DNR,,Human
Inapp,,PM,Subs Activation,Discount Request,Human
Inapp,,,,,Bot
Inapp,,,,,Bot
Webchat,,PM,Presales,Device Model Query,Human
Webchat,,,,,Bot
Inapp,,4G Camera,App Loading,,Human
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
Webchat,,4g Mini,SIM Card not Found,,Human
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
Webchat,,4g Mini,Accessories,,Human
Inapp,,4g Mini,Subs Reactivation,Downgrade,Human
Webchat,,,,,Bot
Webchat,,4g Mini,Accessories,,Human
Webchat,,4g Mini,App Navigation,Pan Issue,Human
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
Inapp,,4g Mini,Discount Code Request,,Human
Webchat,,,,,Bot
Webchat,,4g Mini,Discount Code Request,,Human
Inapp,,4g Mini,Motion Alerts,,Human
Inapp,,,,,Bot
Webchat,,,,,Bot
Inapp,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Webchat,,,,,Bot
Inapp,,4g Mini,Discount Code Request,,Human
Inapp,,4g Mini,Subs Mapping,,Human
Webchat,,4g Mini,Plan Mapping,,Human
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
Inapp,,Waggle.org,NA,,Human
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
Webchat,,4G Camera,Device Query,Mounting,Human
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
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,PM,Subs Mapping,,Human
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,4g Mini,Subs Mapping,Wrong Plan purchased,Human
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,PM,Subs Cancellation,,Human
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,Waggle Cam Pro,Connection,Reconfigure,Human
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,PM,Subs Activation,Combo Plan,Human
Inapp,01-04-2026,4g Mini,Connection,,Human
Webapp,01-04-2026,PM,Subs Cancellation,,Human
Webapp,01-04-2026,4g Mini,Presales,Subs Inquiry,Human
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Inapp,01-04-2026,,,,Bot
Webapp,01-04-2026,4g Mini,Connection,,Human
Webapp,01-04-2026,,,,Bot
Webapp,01-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,PM,Subs Reactivation,,Human
Webapp,02-04-2026,PM,DNR,,Human
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,PM,DNR,,Human
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,Waggle Cam Pro,Connection,,Human
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,PM,DNR,,Human
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Webapp,02-04-2026,RV Mini Cam,Subs Cancellation,,Human
Inapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,PM,Subs Reactivation,,Human
Webapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Webapp,02-04-2026,PM,Device Query,Functionalities,Human
Inapp,02-04-2026,,,,Bot
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Inapp,02-04-2026,PM,DNR,,Human
Webapp,02-04-2026,,,,Bot
Inapp,02-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,PM,Device Removal,,Human
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,4g Mini,Motion Alerts,,Human
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,PM,Device Removal,,Human
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,PM,DNR,,Human
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,PM,Subs Activation,Price Inquiry,Human
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Webapp,03-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,RV Mini Cam,Return and Refund,,Human
Inapp,04-04-2026,PM,Subs Cancellation,,Human
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,RV Mini Cam,Registration Issue,,Human
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,4g Mini,Connection,,Human
Webapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,PM,DNR,,Human
Webapp,04-04-2026,4g Mini,Presales,Combo Plan,Human
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,PM,DNR,,Human
Inapp,04-04-2026,PM,Subs Activation,Discount Request,Human
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,PM,Presales,Device Model Query,Human
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,4G Camera,App Loading,,Human
Inapp,04-04-2026,PM,App Query,Turn Off,Human
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,PM,DNR,,Human
Webapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Inapp,04-04-2026,,,,Bot
Webapp,04-04-2026,PM,Subs Reactivation,,Human
Webapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Webapp,04-04-2026,,,,Bot
Webapp,04-04-2026,PM,Subs Activation,Discount Request,Human
Inapp,04-04-2026,,,,Bot
Inapp,04-04-2026,PM,Subs Cancellation,,Human
Webapp,05-04-2026,4g Mini,SIM Card not Found,,Human
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,PM,Device Removal,,Human
Inapp,05-04-2026,RV Mini Cam,Connection,,Human
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,4g Mini,Accessories,,Human
Inapp,05-04-2026,4g Mini,Subs Reactivation,Downgrade,Human
Webapp,05-04-2026,,,,Bot
Webapp,05-04-2026,4g Mini,Accessories,,Human
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,RV Mini Cam,Connection,,Human
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,4g Mini,Discount Code Request,,Human
Webapp,05-04-2026,,,,Bot
Webapp,05-04-2026,4g Mini,Discount Code Request,,Human
Inapp,05-04-2026,4g Mini,Motion Alerts,,Human
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,4g Mini,Discount Code Request,,Human
Inapp,05-04-2026,4g Mini,Subs Mapping,,Human
Webapp,05-04-2026,4g Mini,Plan Mapping,,Human
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Webapp,05-04-2026,,,,Bot
Inapp,05-04-2026,,,,Bot
Inapp,05-04-2026,PM,Discount Code Request,,Human
Inapp,06-04-2026,PM,DNR,,Human
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,PM,DNR,,Human
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,PM,Accessories,Stock Issue,Human
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,PM,Subs Activation,Combo Plan,Human
Inapp,06-04-2026,Waggle.org,NA,,Human
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,PM,DNR,,Human
Webapp,06-04-2026,RV Mini Cam,Presales,Functionalities,Human
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,4G Camera,Device Query,Mounting,Human
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,PM,DNR,,Human
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,PM,DNR,,Human
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,PM,DNR,,Human
Inapp,06-04-2026,PM,Subs Activation,Subs Inquiry,Human
Inapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,,,,Bot
Inapp,06-04-2026,PM,App Issue,Unable to proceed after payment,Human
Inapp,06-04-2026,RV Mini Cam,Connection,,Human
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Webapp,06-04-2026,,,,Bot
Inapp,06-04-2026,PM,DNR,,Human
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,PM,DNR,,Human
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,PM,DNR,,Human
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,PM,DNR,,Human
Webapp,07-04-2026,PM,Presales,Functionalities,Human
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,PM,DNR,,Human
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,PM,DNR,,Human
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,PM,Subs Activation,Discount Request,Human
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,PM,GPS,Lost device Location,Human
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,4g Mini,Barking Alert,Feature Request,Human
Webapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,Waggle.Org,NA,,Human
Webapp,07-04-2026,4g Mini,Subs Activation,Combo Plan,Human
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Webapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Inapp,07-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,PM,ERROR 121,,Human
Inapp,08-04-2026,,,,Bot
Inapp,08-04-2026,PM,Registration Issue,Old device,Human
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,4g Mini,Device Query,Functionalities,Human
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,NA,NA,NA,Human
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Inapp,08-04-2026,PM,GPS,Unable change Location,Human
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,PM,Presales,Device Query,Human
Inapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,RV Mini Cam,Presales,Device Query,Human
Inapp,08-04-2026,,,,Bot
Inapp,08-04-2026,4G Camera,Mounting,Solar Panel,Human
Webapp,08-04-2026,,,,Bot
Inapp,08-04-2026,,,,Bot
Webapp,08-04-2026,PM,ERROR 121,,Human
Inapp,08-04-2026,PM,DNR,,Human
Webapp,08-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,PM,DNR,,Human
Webapp,09-04-2026,PM,Order Cancel,Subs Cost,Human
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,PM,Subs Activation,Discount Request,Human
Inapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,PM,Device Query,Outside USA,Human
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,PM,AQI,Carbon monoxide Query,Human
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,4g Mini,Device Query,Auto Tracking,Human
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,PM,DNR,,Human
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,PM,App Navigation,Email Alert Enable,Human
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,PM,No Reason,Contact Support,Human
Inapp,09-04-2026,4g Mini,Connection,,Human
Inapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,PM,No Reason,Contact Support,Human
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,PM,No Reason,Contact Support,Human
Inapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Inapp,09-04-2026,PM,Subs Activation,Discount Request,Human
Webapp,09-04-2026,PM,Order Cancel,By Mistake,Human
Inapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Inapp,09-04-2026,RV Mini Cam,Device Query,Temp Request,Human
Inapp,09-04-2026,PM,Pet Profile,Dog Breed,Human
Webapp,09-04-2026,PM,Order Cancel,By Mistake,Human
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,PM,Charging Issue,,Human
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,4g Mini,App Navigation,Data Usage Request,Human
Inapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Webapp,09-04-2026,,,,Bot
Inapp,09-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,PM,False PLPB,,Human
Webapp,10-04-2026,PM,DNR,,Human
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,RV Mini Cam,Subs Activation,Combo Plan,Human
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Webapp,10-04-2026,PM,Return and Refund,,Human
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,PM,DNR,,Human
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,PM,DNR,,Human
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Webapp,10-04-2026,PM,Return and Refund,,Human
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,PM,Return and Refund,Refund Status,Human
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,PM,Subs Activation,Subs Inquiry,Human
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Webapp,10-04-2026,PM,App Navigation,Update Phone No,Human
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,PM,DNR,,Human
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Webapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,,,,Bot
Inapp,10-04-2026,4g Mini,Connection,,Human
Inapp,11-04-2026,RV Mini Cam,Subs Cancellation,,Human
Inapp,11-04-2026,4g Mini,Subs Activation,Combo Plan,Human
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,4g Mini,Email change,,Human
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,PM,DNR,,Human
Inapp,11-04-2026,4g Mini,App Navigation,Live Streaming,Human
Inapp,11-04-2026,PM,DNR,,Human
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,PM,Registration Issue,Multiple Devices,Human
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,RV Mini Cam,App Navigation,Notification Sound,Human
Inapp,11-04-2026,PM,Device Removal,,Human
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,PM,Subs Mapping,,Human
Inapp,11-04-2026,PM,Device Removal,,Human
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,PM,App Navigation,Payment Method,Human
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,PM,App Navigation,Payment Method,Human
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,4G Camera,Playback Issue,,Human
Inapp,11-04-2026,Waggle Cam Pro,Treat Toss Issue,,Human
Webapp,11-04-2026,,,,Bot
Webapp,11-04-2026,PM,Order Cancel,Wrong Address,Human
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,PM,DNR,,Human
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,,,,Bot
Webapp,11-04-2026,,,,Bot
Inapp,11-04-2026,RV Mini Cam,Subs Cancellation,,Human
Inapp,11-04-2026,,,,Bot
Inapp,11-04-2026,PM,Subs Reactivation,,Human
Inapp,11-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,4g Mini,Streaming Issue,,Human
Webapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,PM,Battery Issue,,Human
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,4g Mini,Subs Activation,Combo Plan,Human
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,RV Mini Cam,Auto Tracking,,Human
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Webapp,12-04-2026,PM,Subs Activation,Discount Request,Human
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,PM,Subs Activation,Price Inquiry,Human
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,NA,Wrong Cam Model,,Human
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,4g Mini,Subs Activation,Combo Plan,Human
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Webapp,12-04-2026,,,,Bot
Inapp,12-04-2026,,,,Bot
Inapp,13-04-2026,PM,Device Removal,,Human
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,PM,Replacement,Older Device,Human
Inapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Inapp,13-04-2026,PM,DNR,,Human
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,PM,Subs Activation,Discount Request,Human
Webapp,13-04-2026,4g Mini,App Navigation,Spotlight,Human
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,PM,Subs Cancellation,,Human
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,PM,Return and Refund,,Human
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,RV Mini Cam,Subs Activation,Price Inquiry,Human
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,4g Mini,Presales,Discount Request,Human
Webapp,13-04-2026,PM,Subs Activation,Subs Cost,Human
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,4g Mini,App Navigation,Delete Recording,Human
Inapp,13-04-2026,RV Mini Cam,App Issue,Delete Recording,Human
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,PM,DNR,,Human
Webapp,13-04-2026,PM,Subs Cancellation,,Human
Webapp,13-04-2026,4G Camera,App Navigation,Turn Off Light,Human
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,PM,Order,Tracking,Human
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,PM,Order,Wrong Item received,Human
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Inapp,13-04-2026,PM,DNR,,Human
Inapp,13-04-2026,4g Mini,No SD Card Found,,Human
Webapp,13-04-2026,,,,Bot
Inapp,13-04-2026,,,,Bot
Webapp,13-04-2026,,,,Bot
Inapp,14-04-2026,PM,Registration Issue,Used Device,Human
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,PM,Subs Cancellation,,Human
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,Smart Sensor,Presales,Functionalities,Human
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,PM,Presales,Discount Request,Human
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,PM,Subs Cancellation,,Human
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,PM,Device Query,AQI,Human
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,PM,DNR,,Human
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,4g Mini,Subs Activation,Subs Inquiry,Human
Inapp,14-04-2026,RV Mini Cam,Connection,,Human
Webapp,14-04-2026,4g Mini,Presales,Functionalities,Human
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,PM,Login Issue,,Human
Webapp,14-04-2026,,,,Bot
Inapp,14-04-2026,,,,Bot
Inapp,14-04-2026,PM,Registration Issue,,Human
Inapp,14-04-2026,PM,Device Query,Shut Down,Human
Inapp,14-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,PM,Temp Difference,,Human
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,PM,Temp Difference,,Human
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,4g Mini,Connection,,Human
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,PM,DNR,,Human
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,PM,PLPB,,Human
Inapp,15-04-2026,PM,DNR,,Human
Inapp,15-04-2026,4g Mini,App Query,Share Video,Human
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,4g Mini,Subs Activation,Flexi Plan Query,Human
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,4G Camera,App Navigation,Auto Tracking,Human
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Webapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,15-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Webapp,16-04-2026,PM,Subs Activation,Discount Request,Human
Webapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Webapp,16-04-2026,4G Camera,App Navigation,Auto Tracking,Human
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,PM,Subs Reactivation,Query,Human
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Inapp,16-04-2026,PM,DNR,,Human
Webapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Webapp,16-04-2026,PM,Subs Activation,Discount Request,Human
Inapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Webapp,16-04-2026,,,,Bot
Inapp,16-04-2026,PM,Order,Missed to apply coupon,Human
Inapp,16-04-2026,,,,Bot
Inapp,16-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,17-04-2026,PM,DNR,SIM not found,Human
Inapp,17-04-2026,PM,DNR,,Human
Inapp,17-04-2026,PM,Geo Fence Issue,,Human
Inapp,17-04-2026,PM,DNR,,Human
Inapp,17-04-2026,PM,Login Issue,Different Email,Human
Inapp,17-04-2026,PM,SIM Card not Found,,Human
Inapp,17-04-2026,Waggle Cam Pro,Plan Mapping,,Human
Inapp,17-04-2026,4g Mini,App Navigation,Payment Method,Human
Inapp,17-04-2026,PM,Temp Difference,,Human
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,PM,Plan Mapping,,Human
Inapp,17-04-2026,PM,Registration Issue,Used Device,Human
Webapp,17-04-2026,4g Mini,App Issue,Unable to register,Human
Webapp,17-04-2026,PM,Subs Cancellation,Query,Human
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Inapp,18-04-2026,PM,Subs Activation,Presales,Human
Inapp,18-04-2026,PM,Device Query,Display related,Human
Inapp,18-04-2026,4g Mini,App Navigation,Turn Off Light,Human
Inapp,18-04-2026,RV Mini Cam,Order,Unable Enter Address,Human
Inapp,18-04-2026,4G Camera,Presales,Functionalities,Human
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,17-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,18-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,19-04-2026,,,,Bot
Inapp,18-04-2026,RV Mini Cam,Connection,,Human
Inapp,18-04-2026,RV Mini Cam,Connection,,Human
Inapp,18-04-2026,PM,PLPB,Query,Human
Webapp,18-04-2026,PM,Order Cancel,,Human
Webapp,18-04-2026,PM,Subs Cancellation,,Human
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,17-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,18-04-2026,,,,Bot
Webapp,19-04-2026,,,,Bot
Webapp,19-04-2026,,,,Bot
Webapp,19-04-2026,,,,Bot
Webapp,19-04-2026,,,,Bot
Webapp,18-04-2026,PM,App Issue,Apple Watch,Human
Inapp,19-04-2026,PM,App Navigation,CO2 Query,Human
Inapp,19-04-2026,PM,App Navigation,CO Query,Human
Inapp,19-04-2026,PM,Subs Cancellation,,Human
Inapp,19-04-2026,PM,Subs Activation,Price Inquiry,Human
Inapp,19-04-2026,PM,Device Removal,,Human
Inapp,19-04-2026,PM,Return and Refund,,Human
Inapp,19-04-2026,PM,Subs Mapping,,Human
Inapp,19-04-2026,,,,Bot
Webapp,19-04-2026,PM,App Navigation,Multi User,Human
Webapp,19-04-2026,PM,Device Query,LED Indicators,Human
Webapp,19-04-2026,PM,Subs Cancellation,,Human
Webapp,19-04-2026,,,,Bot
Webapp,19-04-2026,,,,Bot
Email,08-04-2026,Freshservice,Billing,Login Error,Bot
WebApp,14-04-2026,Freshservice,Feature Request,Navigation,Human
Webchat,21-04-2026,Freshservice,Authentication,Invoice Issue,Bot
Webchat,05-04-2026,Freshdesk,Billing,Login Error,Bot
Webchat,14-04-2026,Waggle Copilot,Billing,Invoice Issue,Bot
Webchat,24-04-2026,Freshdesk,Setup error,Account Setup,Bot
WebApp,24-04-2026,Waggle Copilot,Billing,Navigation,Bot
WebApp,23-04-2026,Waggle Copilot,Billing,Login Error,Bot
Webchat,04-04-2026,Freshdesk,Billing,Account Setup,Human
Email,13-04-2026,Freshservice,Setup error,Navigation,Human
WebApp,14-04-2026,Freshdesk,Feature Request,Password Reset,Bot
Webchat,02-04-2026,Freshservice,General Query,Navigation,Bot
WebApp,20-04-2026,Freshdesk,Authentication,Account Setup,Bot
Email,10-04-2026,Waggle AI Bot,Billing,Login Error,Bot
Email,02-04-2026,Waggle Copilot,Setup error,Navigation,Bot
Email,25-04-2026,Freshdesk,Setup error,Login Error,Bot
Email,05-04-2026,Freshservice,Feature Request,Account Setup,Human
WebApp,10-04-2026,Waggle Copilot,Billing,Password Reset,Bot
Webchat,14-04-2026,Waggle Copilot,Billing,Password Reset,Bot
Email,04-04-2026,Freshdesk,General Query,Invoice Issue,Bot
Webchat,10-04-2026,Waggle AI Bot,Authentication,Login Error,Bot
WebApp,07-04-2026,Waggle AI Bot,Authentication,Invoice Issue,Human
Email,26-04-2026,Freshservice,Feature Request,Account Setup,Bot
WebApp,01-04-2026,Freshservice,General Query,Invoice Issue,Bot
Email,05-04-2026,Freshservice,Billing,Password Reset,Bot
Webchat,02-04-2026,Freshservice,Setup error,Account Setup,Bot
WebApp,07-04-2026,Waggle AI Bot,General Query,Account Setup,Bot
Webchat,07-04-2026,Waggle AI Bot,General Query,Invoice Issue,Bot
Email,04-04-2026,Freshdesk,General Query,Navigation,Bot
Email,16-04-2026,Freshdesk,General Query,Password Reset,Bot
Webchat,10-04-2026,Freshservice,Authentication,Navigation,Bot
Email,10-04-2026,Waggle AI Bot,Feature Request,Login Error,Human
Email,02-04-2026,Freshdesk,General Query,Password Reset,Bot
Webchat,25-04-2026,Waggle AI Bot,Setup error,Invoice Issue,Bot
Email,03-04-2026,Waggle AI Bot,General Query,Password Reset,Bot
Webchat,16-04-2026,Waggle AI Bot,Authentication,Login Error,Bot
Email,14-04-2026,Freshdesk,Feature Request,Navigation,Bot
WebApp,11-04-2026,Waggle AI Bot,Setup error,Login Error,Bot
Email,06-04-2026,Freshdesk,Feature Request,Invoice Issue,Bot
Webchat,20-04-2026,Freshdesk,Billing,Navigation,Bot
Webchat,22-04-2026,Freshservice,Setup error,Account Setup,Bot
Webchat,10-04-2026,Waggle Copilot,General Query,Navigation,Human
Email,22-04-2026,Waggle AI Bot,Setup error,Password Reset,Bot
WebApp,10-04-2026,Waggle AI Bot,General Query,Password Reset,Bot
Webchat,08-04-2026,Freshdesk,General Query,Invoice Issue,Bot
WebApp,15-04-2026,Freshdesk,General Query,Invoice Issue,Bot
WebApp,02-04-2026,Freshdesk,Authentication,Login Error,Bot
WebApp,23-04-2026,Waggle Copilot,Feature Request,Password Reset,Bot
WebApp,15-04-2026,Freshservice,Authentication,Login Error,Bot
WebApp,04-04-2026,Freshdesk,Billing,Password Reset,Human
Webchat,21-04-2026,Freshservice,Authentication,Account Setup,Bot
WebApp,08-04-2026,Freshdesk,Setup error,Password Reset,Bot
Webchat,11-04-2026,Freshdesk,Billing,Password Reset,Bot
WebApp,06-04-2026,Waggle Copilot,General Query,Login Error,Bot
WebApp,23-04-2026,Freshservice,Authentication,Invoice Issue,Bot
Email,02-04-2026,Waggle Copilot,General Query,Password Reset,Bot
Webchat,21-04-2026,Waggle AI Bot,Billing,Account Setup,Human
Webchat,26-04-2026,Freshservice,Billing,Password Reset,Bot
Webchat,21-04-2026,Freshservice,General Query,Invoice Issue,Bot
Email,08-04-2026,Freshdesk,Feature Request,Password Reset,Bot
WebApp,01-04-2026,Waggle Copilot,Feature Request,Login Error,Bot
Webchat,09-04-2026,Freshservice,General Query,Invoice Issue,Bot
Email,12-04-2026,Waggle AI Bot,General Query,Account Setup,Bot
Webchat,01-04-2026,Waggle AI Bot,General Query,Navigation,Bot
Webchat,19-04-2026,Freshservice,General Query,Login Error,Bot
WebApp,04-04-2026,Freshdesk,Authentication,Login Error,Human
Email,09-04-2026,Waggle AI Bot,Billing,Invoice Issue,Human
WebApp,05-04-2026,Freshservice,General Query,Invoice Issue,Human
Email,14-04-2026,Waggle Copilot,Billing,Login Error,Bot
WebApp,20-04-2026,Waggle AI Bot,Setup error,Invoice Issue,Bot
Email,24-04-2026,Waggle AI Bot,Billing,Navigation,Bot
WebApp,22-04-2026,Freshservice,General Query,Login Error,Bot
Email,26-04-2026,Freshdesk,Feature Request,Account Setup,Bot
Email,20-04-2026,Waggle AI Bot,Setup error,Navigation,Bot
WebApp,19-04-2026,Freshdesk,General Query,Invoice Issue,Bot
WebApp,24-04-2026,Waggle AI Bot,Setup error,Account Setup,Bot
Webchat,19-04-2026,Freshservice,Feature Request,Account Setup,Bot
Email,26-04-2026,Freshdesk,Authentication,Password Reset,Bot
Webchat,03-04-2026,Freshservice,Billing,Account Setup,Bot
WebApp,19-04-2026,Freshdesk,Feature Request,Password Reset,Bot
Email,25-04-2026,Freshdesk,Billing,Login Error,Human
WebApp,23-04-2026,Freshdesk,Setup error,Navigation,Bot
Email,18-04-2026,Waggle AI Bot,Billing,Password Reset,Bot
Email,09-04-2026,Freshservice,Billing,Account Setup,Bot
WebApp,09-04-2026,Waggle Copilot,General Query,Login Error,Bot
Email,21-04-2026,Freshdesk,Billing,Login Error,Bot
Email,21-04-2026,Waggle Copilot,Authentication,Navigation,Human
WebApp,03-04-2026,Waggle Copilot,Feature Request,Invoice Issue,Human
Email,02-04-2026,Freshservice,Setup error,Navigation,Bot
Webchat,05-04-2026,Waggle Copilot,Setup error,Navigation,Human
Webchat,05-04-2026,Waggle Copilot,Setup error,Login Error,Bot
Email,24-04-2026,Freshdesk,Authentication,Account Setup,Bot
Email,13-04-2026,Freshdesk,General Query,Password Reset,Bot
Email,18-04-2026,Freshdesk,General Query,Navigation,Bot
Email,14-04-2026,Freshservice,General Query,Navigation,Bot
Webchat,25-04-2026,Freshservice,Feature Request,Navigation,Bot
Email,15-04-2026,Waggle AI Bot,General Query,Password Reset,Bot
Webchat,03-04-2026,Freshservice,General Query,Invoice Issue,Bot
Webchat,08-04-2026,Waggle Copilot,Feature Request,Invoice Issue,Human
Email,22-04-2026,Waggle Copilot,General Query,Account Setup,Bot
Webchat,25-04-2026,Freshservice,Authentication,Password Reset,Human
Email,25-04-2026,Waggle Copilot,General Query,Account Setup,Bot
Webchat,21-04-2026,Waggle Copilot,General Query,Account Setup,Human
Webchat,21-04-2026,Waggle AI Bot,Setup error,Account Setup,Bot
Email,23-04-2026,Waggle Copilot,General Query,Invoice Issue,Bot
Webchat,25-04-2026,Freshdesk,Billing,Navigation,Bot
Email,22-04-2026,Freshservice,General Query,Account Setup,Bot
WebApp,25-04-2026,Waggle AI Bot,Setup error,Password Reset,Bot
Webchat,23-04-2026,Freshservice,Authentication,Navigation,Bot
Webchat,25-04-2026,Waggle AI Bot,General Query,Invoice Issue,Human
Webchat,20-04-2026,Freshservice,Billing,Invoice Issue,Bot
Webchat,23-04-2026,Freshdesk,Feature Request,Login Error,Human
Webchat,21-04-2026,Waggle Copilot,Feature Request,Invoice Issue,Bot
Webchat,23-04-2026,Freshservice,Billing,Invoice Issue,Bot
Webchat,25-04-2026,Waggle AI Bot,Feature Request,Invoice Issue,Bot
WebApp,25-04-2026,Freshdesk,Feature Request,Login Error,Human
WebApp,26-04-2026,Freshdesk,Billing,Login Error,Bot
Email,21-04-2026,Waggle Copilot,General Query,Invoice Issue,Bot
Email,24-04-2026,Waggle Copilot,Authentication,Password Reset,Bot
WebApp,25-04-2026,Waggle Copilot,Authentication,Password Reset,Bot
Email,23-04-2026,Freshdesk,General Query,Navigation,Bot
Email,20-04-2026,Freshservice,General Query,Login Error,Human
Webchat,23-04-2026,Waggle Copilot,Setup error,Navigation,Human
WebApp,26-04-2026,Freshdesk,Feature Request,Login Error,Bot
WebApp,24-04-2026,Freshdesk,Authentication,Password Reset,Bot
Webchat,25-04-2026,Freshservice,Authentication,Login Error,Bot
Email,20-04-2026,Waggle AI Bot,Billing,Login Error,Bot
Email,24-04-2026,Freshservice,Setup error,Navigation,Bot
WebApp,24-04-2026,Freshdesk,Authentication,Navigation,Bot
WebApp,22-04-2026,Freshservice,Billing,Login Error,Bot
Email,21-04-2026,Waggle AI Bot,Feature Request,Login Error,Human
Webchat,20-04-2026,Freshdesk,Setup error,Invoice Issue,Bot
Email,24-04-2026,Freshdesk,Setup error,Invoice Issue,Bot
Email,24-04-2026,Freshservice,Authentication,Account Setup,Bot
WebApp,24-04-2026,Waggle AI Bot,General Query,Navigation,Bot
Email,26-04-2026,Waggle AI Bot,Setup error,Invoice Issue,Bot
WebApp,23-04-2026,Freshdesk,Feature Request,Navigation,Human
WebApp,25-04-2026,Waggle AI Bot,Setup error,Login Error,Bot
Email,24-04-2026,Waggle AI Bot,Authentication,Password Reset,Bot
Email,23-04-2026,Waggle Copilot,Billing,Invoice Issue,Bot
WebApp,22-04-2026,Waggle Copilot,Feature Request,Navigation,Bot
WebApp,21-04-2026,Waggle Copilot,Authentication,Navigation,Bot
Email,22-04-2026,Freshdesk,General Query,Navigation,Bot
Webchat,26-04-2026,Waggle AI Bot,Setup error,Account Setup,Bot
Webchat,22-04-2026,Freshdesk,Feature Request,Invoice Issue,Bot
Email,22-04-2026,Freshservice,Setup error,Account Setup,Bot
WebApp,26-04-2026,Freshdesk,Authentication,Password Reset,Bot
WebApp,24-04-2026,Freshdesk,Authentication,Invoice Issue,Human
Webchat,22-04-2026,Waggle AI Bot,Billing,Account Setup,Bot
Webchat,26-04-2026,Freshservice,Authentication,Navigation,Bot
Email,26-04-2026,Waggle AI Bot,General Query,Password Reset,Bot
Webchat,20-04-2026,Freshdesk,Authentication,Password Reset,Bot
Webchat,22-04-2026,Waggle AI Bot,Feature Request,Password Reset,Bot
Email,21-04-2026,Freshservice,Billing,Invoice Issue,Bot
WebApp,20-04-2026,Freshservice,Billing,Navigation,Bot
Webchat,21-04-2026,Freshdesk,Setup error,Invoice Issue,Bot
Email,25-04-2026,Waggle Copilot,Billing,Account Setup,Bot
Webchat,20-04-2026,Waggle Copilot,Feature Request,Password Reset,Human
Email,26-04-2026,Waggle AI Bot,Authentication,Navigation,Bot
WebApp,21-04-2026,Waggle Copilot,Billing,Invoice Issue,Bot
Webchat,21-04-2026,Freshdesk,Billing,Invoice Issue,Bot
Email,20-04-2026,Waggle Copilot,Billing,Navigation,Bot
Email,24-04-2026,Waggle Copilot,General Query,Navigation,Bot
WebApp,26-04-2026,Freshdesk,General Query,Account Setup,Bot
Email,20-04-2026,Freshdesk,Feature Request,Account Setup,Bot
Email,24-04-2026,Freshservice,Setup error,Password Reset,Bot
Webchat,25-04-2026,Freshdesk,Setup error,Navigation,Bot
WebApp,20-04-2026,Waggle AI Bot,Setup error,Navigation,Bot
Email,25-04-2026,Freshservice,General Query,Password Reset,Bot
Email,23-04-2026,Freshservice,Setup error,Navigation,Bot
Email,22-04-2026,Freshservice,Feature Request,Password Reset,Bot
Webchat,22-04-2026,Waggle Copilot,Setup error,Account Setup,Human
Email,25-04-2026,Waggle Copilot,General Query,Password Reset,Human
Webchat,24-04-2026,Freshdesk,Feature Request,Account Setup,Bot
Webchat,26-04-2026,Waggle Copilot,Billing,Login Error,Bot
Email,23-04-2026,Waggle Copilot,General Query,Invoice Issue,Bot
Email,21-04-2026,Freshdesk,Billing,Navigation,Bot
Email,25-04-2026,Waggle AI Bot,Billing,Login Error,Bot
Webchat,22-04-2026,Freshdesk,Feature Request,Account Setup,Bot
Webchat,25-04-2026,Freshdesk,General Query,Account Setup,Human
Email,24-04-2026,Waggle Copilot,Billing,Password Reset,Human
Email,20-04-2026,Freshservice,Feature Request,Navigation,Bot
Webchat,23-04-2026,Freshdesk,Authentication,Login Error,Bot
Webchat,26-04-2026,Freshservice,Setup error,Login Error,Bot
WebApp,22-04-2026,Waggle Copilot,Setup error,Invoice Issue,Human
WebApp,25-04-2026,Freshdesk,General Query,Invoice Issue,Bot
WebApp,24-04-2026,Waggle Copilot,Billing,Account Setup,Bot
Webchat,21-04-2026,Waggle Copilot,Billing,Account Setup,Bot
WebApp,25-04-2026,Freshdesk,Feature Request,Password Reset,Bot
WebApp,24-04-2026,Waggle AI Bot,General Query,Navigation,Bot
Webchat,26-04-2026,Waggle Copilot,Feature Request,Invoice Issue,Bot
WebApp,26-04-2026,Freshservice,Feature Request,Account Setup,Human
Email,20-04-2026,Waggle AI Bot,Setup error,Account Setup,Bot
WebApp,23-04-2026,Freshdesk,Feature Request,Navigation,Bot
Webchat,22-04-2026,Waggle AI Bot,Billing,Login Error,Bot
Webchat,21-04-2026,Freshdesk,Feature Request,Password Reset,Bot
Email,20-04-2026,Waggle Copilot,Billing,Account Setup,Bot
Webchat,21-04-2026,Waggle Copilot,General Query,Login Error,Bot
Email,23-04-2026,Freshdesk,Authentication,Login Error,Human
Email,20-04-2026,Waggle Copilot,Billing,Navigation,Bot
WebApp,23-04-2026,Freshdesk,General Query,Account Setup,Bot
Email,23-04-2026,Waggle AI Bot,Setup error,Account Setup,Human
WebApp,22-04-2026,Waggle Copilot,Billing,Navigation,Bot
WebApp,26-04-2026,Waggle Copilot,General Query,Invoice Issue,Human
Email,25-04-2026,Freshservice,General Query,Login Error,Bot
Webchat,23-04-2026,Waggle Copilot,Authentication,Navigation,Bot
Email,24-04-2026,Waggle Copilot,Feature Request,Login Error,Bot
WebApp,20-04-2026,Waggle AI Bot,Billing,Account Setup,Bot
WebApp,21-04-2026,Freshservice,Setup error,Invoice Issue,Bot
WebApp,21-04-2026,Freshdesk,General Query,Navigation,Bot
Email,23-04-2026,Waggle AI Bot,Feature Request,Password Reset,Bot
WebApp,22-04-2026,Freshdesk,Feature Request,Navigation,Bot
Email,24-04-2026,Waggle Copilot,General Query,Invoice Issue,Bot
Email,21-04-2026,Freshservice,Billing,Account Setup,Bot
Email,22-04-2026,Waggle Copilot,Authentication,Login Error,Bot
Email,23-04-2026,Freshservice,General Query,Navigation,Bot
Webchat,21-04-2026,Waggle AI Bot,General Query,Account Setup,Human
Webchat,25-04-2026,Waggle Copilot,General Query,Invoice Issue,Human
WebApp,24-04-2026,Waggle AI Bot,Feature Request,Navigation,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,,,,Bot
Inapp,2026-04-20,4g Mini,Connection,,Human
Inapp,2026-04-20,PM,DNR,,Human
Inapp,2026-04-20,4g Mini,Registration Issue,Ownership Transfer,Human
Inapp,2026-04-20,4G Camera,Mounting Query,,Human
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
Webapp,2026-04-20,4G Camera,Return and Refund,,Human
Webapp,2026-04-20,4g Mini,Connection,SIM out of service,Human
Webapp,2026-04-20,PM,Subs Cancellation,,Human
Webapp,2026-04-20,,,,Bot
Webapp,2026-04-20,4g Mini,Not Turning On,,Human
Webapp,2026-04-20,4g Mini,Subs Query,,Human
Webapp,2026-04-20,,,,Bot
Inapp,2026-04-21,4g Mini,Connection,,Human
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
Webapp,2026-04-21,4g Mini,Two Way Audio issue,,Human
Inapp,2026-04-21,,,,Bot
Webapp,2026-04-21,4g Mini,Two Way Audio issue,,Human
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
Inapp,2026-04-22,4g Mini,Subs Activation,Flexi Plan query,Human
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
Webapp,2026-04-22,4g Mini,App Navigation,Combo Plan,Human
Inapp,2026-04-22,,,,Bot
Inapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Webapp,2026-04-22,,,,Bot
Inapp,2026-04-22,Waggle Cam Pro,App Navigation,Alerts Related,Human
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
Inapp,2026-04-23,4g Mini,User Guide Request,Pan Related,Human
Inapp,2026-04-23,PM,DNR,,Human
Webapp,2026-04-23,,,,Bot
Inapp,2026-04-23,PM,Order,Charger,Human
Inapp,2026-04-23,PM,App Navigation,Change Billing Address,Human
Webapp,2026-04-23,PM,DNR,,Human
Webapp,2026-04-23,,,,Bot
Webapp,2026-04-23,4g Mini,Presales,Price Inquiry,Human
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,,,,Bot
Inapp,2026-04-23,4g Mini,App Issue,Cam not showing,Human
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
Inapp,2026-04-23,4g Mini,Trial Plan Query,,Human
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
Inapp,2026-04-23,4g Mini,Device Removal,,Human
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
Inapp,2026-04-24,4g Mini,Streaming,Other device,Human
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
Webapp,2026-04-25,4g Mini,Device Query,Functionalities,Human
Webapp,2026-04-25,,,,Bot
Webapp,2026-04-25,4g Mini,Subs Activation,Combo Plan,Human
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
Inapp,2026-04-25,4g Mini,App Navigation,Delete Recording,Human
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
Inapp,2026-04-26,4g Mini,Charging Query,,Human
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
Webapp,2026-04-26,4g Mini,Subs Activation,Discount Request,Human
Inapp,2026-04-26,PM,DNR,,Human
Inapp,2026-04-26,,,,Bot
Inapp,2026-04-26,,,,Bot
Webapp,2026-04-26,4g Mini,Return and Refund,Outside Window,Human
Webapp,2026-04-26,,,,Bot
Webapp,2026-04-26,,,,Bot`,xY="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQmdcr8EaeN04nsRVatF2B0lVYCOpsrvnFoldLpPjuRBXeOcHL1KGCQRbCw62A78cVtxxY2fW246vB/pub?output=csv";function wY(){const[e,t]=Y.useState([]),[n,r]=Y.useState([]),[a,i]=Y.useState("all"),[s,l]=Y.useState("all"),[p,f]=Y.useState([]),[m,d]=Y.useState("overview"),[v,b]=Y.useState(null);Y.useRef(null);const x=Y.useRef(null),[I,y]=Y.useState(null),S=Y.useRef([]);Y.useEffect(()=>{S.current=e},[e]);const A=F=>{if(!F)return F;const G=F.trim(),Q=G.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(Q){const[,H,U,X]=Q;return`${X.padStart(2,"0")}-${U.padStart(2,"0")}-${H}`}const V=G.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(V){const[,H,U,X]=V;return`${H.padStart(2,"0")}-${U.padStart(2,"0")}-${X}`}return G};Y.useEffect(()=>{let F=[];const G=Q=>{g2.parse(xY,{download:!0,header:!0,skipEmptyLines:!0,complete:V=>{if(V.data&&V.data.length>0){const H=V.data.map(U=>({channel:U.Channel||U.channel||"",createdAt:A(U["Created at"]||U.createdAt||U["Created date"]||""),product:U.Product||U.product||"",issue:U.Issue||U.issue||"",subType:U["Sub Type"]||U.subType||"",handled:U.Handled||U.handled||""}));t(U=>{const X=new Set(U.map($=>`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`)),R=H.filter($=>!X.has(`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`));return[...U,...R]}),b(new Date().toLocaleTimeString()),console.log(`Synced ${H.length} rows from Google Sheets.`)}},error:V=>{console.error("Error syncing with Google Sheets:",V)}})};g2.parse(BY,{header:!0,skipEmptyLines:!0,complete:Q=>{F=Q.data.map(H=>({channel:H.Channel||H.channel||"",createdAt:A(H["Created at"]||H.createdAt||H["Created date"]||""),product:H.Product||H.product||"",issue:H.Issue||H.issue||"",subType:H["Sub Type"]||H.subType||"",handled:H.Handled||H.handled||""}));const V=localStorage.getItem("waggle_manual_data");if(V)try{const H=JSON.parse(V);Array.isArray(H)&&(F=[...F,...H],console.log(`Loaded ${H.length} manually uploaded rows from local storage.`))}catch(H){console.error("Error parsing local storage data:",H)}t(F),G()}})},[]);const W=Y.useMemo(()=>{const F=["january","february","march","april","may","june","july","august","september","october","november","december"],G=new Set;return e.forEach(Q=>{try{const V=yr(Q.createdAt);isNaN(V.getTime())||G.add(`${Oc(V,"MMMM").toLowerCase()}-${V.getFullYear()}`)}catch{}}),Array.from(G).sort((Q,V)=>{const[H,U]=Q.split("-"),[X,R]=V.split("-");return U!==R?parseInt(U)-parseInt(R):F.indexOf(H)-F.indexOf(X)})},[e]);Y.useEffect(()=>{if(a&&a!=="all"){const F=BA(a);f(F)}else f([]);l("all")},[a]),Y.useEffect(()=>{e.length>0&&w(a,s)},[s,a,e]);const _=F=>{var Q;const G=(Q=F.target.files)==null?void 0:Q[0];G&&(g2.parse(G,{header:!0,skipEmptyLines:!0,complete:V=>{if(!V.data.length){y({type:"error",message:"The CSV file appears to be empty."}),setTimeout(()=>y(null),5e3);return}const H=V.data.map($=>{const Z=$["Created at"]||$["created at"]||$.createdAt||$["Created date"]||$["Created At"]||"";return{channel:$.Channel||$.channel||"",createdAt:A(Z),product:$.Product||$.product||"",issue:$.Issue||$.issue||"",subType:$["Sub Type"]||$.subType||"",handled:$.Handled||$.handled||""}}),U=new Set(S.current.map($=>`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`)),X=H.filter($=>!U.has(`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`));try{const $=localStorage.getItem("waggle_manual_data");let Z=[];if($)try{Z=JSON.parse($)}catch{}if(X.length>0){const ue=[...Z,...X];localStorage.setItem("waggle_manual_data",JSON.stringify(ue))}}catch($){console.warn("localStorage write failed (quota exceeded?):",$)}X.length>0&&t($=>[...$,...X]);const R=X.length>0?`✅ Added ${X.length.toLocaleString()} new rows from "${G.name}". Data is saved in this browser and will persist on refresh.`:`ℹ️ No new rows found in "${G.name}" — all ${H.length.toLocaleString()} rows already exist in the dashboard.`;y({type:X.length>0?"success":"error",message:R}),setTimeout(()=>y(null),8e3)},error:()=>{y({type:"error",message:"Failed to parse the CSV file. Please check the format."}),setTimeout(()=>y(null),5e3)}}),F.target.value="")},w=(F,G)=>{let Q=e;if(F!=="all"&&(Q=e.filter(V=>{const H=yr(V.createdAt);return kv(H,F)})),G!=="all"){const V=p.find(H=>H.value===G);V&&(Q=Q.filter(H=>{const U=yr(H.createdAt);return xA(U,V)}))}r(Q)},M=()=>{let F="analytics-export.csv";a==="all"?F=s==="all"?"analytics-all-months.csv":`analytics-all-months-${s}.csv`:F=s==="all"?`analytics-${a}.csv`:`analytics-${a}-${s}.csv`,rR(n,F)},E=Ev(n),P=Tv(n),O=wA(n),N=nR(n);a!=="all"||W[0];const D=tR(e,a),T=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],q=(a==="all"?W:[a]).map((F,G)=>{const Q=e.filter($=>{const Z=yr($.createdAt);return kv(Z,F)}),[V,H]=F.split("-"),U=`Month ${G+1}`,X=`${V.charAt(0).toUpperCase()+V.slice(1)} ${H}`,R=T[G%T.length];return{name:X,shortName:U,data:Q,metrics:Ev(Q),channels:Tv(Q),colorFrom:R.from,colorTo:R.to}});return C.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:C.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[C.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[C.jsxs("div",{children:[C.jsx("h1",{className:"text-3xl font-bold",children:"Waggle AI Chatbot Dashboard"}),C.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),C.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[C.jsxs("select",{value:a,onChange:F=>i(F.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-[200px] cursor-pointer",children:[C.jsx("option",{value:"all",children:"All Months"}),W.map(F=>{const[G,Q]=F.split("-");return C.jsxs("option",{value:F,children:[G.charAt(0).toUpperCase()+G.slice(1)," ",Q]},F)})]}),C.jsxs("select",{value:s,onChange:F=>l(F.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-[200px] cursor-pointer",disabled:a==="all",children:[C.jsx("option",{value:"all",children:"All Weeks"}),p.map(F=>C.jsx("option",{value:F.value,children:F.label},F.value))]}),C.jsx("input",{ref:x,type:"file",accept:".csv",onChange:_,className:"hidden"}),C.jsxs(yI,{onClick:()=>{var F;return(F=x.current)==null?void 0:F.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700 hover:bg-blue-50",children:[C.jsx(qE,{className:"w-4 h-4 mr-2"}),"Add Data"]}),C.jsxs(yI,{onClick:M,variant:"outline",className:"bg-white",children:[C.jsx(UE,{className:"w-4 h-4 mr-2"}),"Export CSV"]})]})]}),I&&C.jsx(zn,{className:`border ${I.type==="success"?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:C.jsxs(Un,{className:"p-4 flex items-center justify-between gap-3",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[I.type==="success"?C.jsx(LE,{className:"w-5 h-5 text-green-600 shrink-0"}):C.jsx(xI,{className:"w-5 h-5 text-red-600 shrink-0"}),C.jsx("p",{className:`font-medium ${I.type==="success"?"text-green-900":"text-red-900"}`,children:I.message})]}),C.jsx("button",{onClick:()=>y(null),className:"text-gray-400 hover:text-gray-600 shrink-0",children:C.jsx(xI,{className:"w-4 h-4"})})]})}),a==="all"&&C.jsx("div",{className:"flex justify-center",children:C.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[C.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium transition-colors ${m==="overview"?"bg-blue-600 text-white shadow-sm":"text-gray-700 hover:text-gray-900"}`,children:"Overview Comparison"}),C.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium transition-colors ${m==="detailed"?"bg-blue-600 text-white shadow-sm":"text-gray-700 hover:text-gray-900"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?C.jsx(IY,{monthsData:q,weeklyEscalation:D}):C.jsxs(C.Fragment,{children:[C.jsx(aR,{metrics:E}),C.jsx(X_,{data:D,instanceId:"detailed-analysis"}),C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[C.jsx(Z_,{data:P}),C.jsx(gY,{data:O})]}),C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs(AE,{defaultValue:"issues",className:"w-full",children:[C.jsxs(WE,{className:"grid w-full grid-cols-2 max-w-md",children:[C.jsx(bI,{value:"issues",children:"Issue Analysis"}),C.jsx(bI,{value:"sessions",children:"Detailed Sessions"})]}),C.jsx(II,{value:"issues",className:"mt-6",children:C.jsxs("div",{className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Human Escalations Breakdown"}),C.jsx("p",{className:"text-sm text-gray-600",children:"Click on any issue to expand and view sub-issues with product breakdown"})]}),C.jsx(yY,{data:N})]})}),C.jsx(II,{value:"sessions",className:"mt-6",children:C.jsxs("div",{className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg font-semibold mb-2",children:"All Sessions"}),C.jsxs("p",{className:"text-sm text-gray-600",children:["Click column headers to sort. Showing ",n.length," sessions."]})]}),C.jsx(bY,{data:n})]})})]})})})]})]})})}uk.createRoot(document.getElementById("root")).render(C.jsx(wY,{}));
