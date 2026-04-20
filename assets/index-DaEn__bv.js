var XC=Object.defineProperty;var ZC=(e,t,n)=>t in e?XC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>ZC(e,typeof t!="symbol"?t+"":t,n);function JC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f2={exports:{}},Ru={},d2={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tI;function ek(){if(tI)return Le;tI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(j){return j===null||typeof j!="object"?null:(j=d&&j[d]||j["@@iterator"],typeof j=="function"?j:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function g(j,$,Z){this.props=j,this.context=$,this.refs=I,this.updater=Z||b}g.prototype.isReactComponent={},g.prototype.setState=function(j,$){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,$,"setState")},g.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function S(){}S.prototype=g.prototype;function M(j,$,Z){this.props=j,this.context=$,this.refs=I,this.updater=Z||b}var _=M.prototype=new S;_.constructor=M,B(_,g.prototype),_.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,A={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(j,$,Z){var ue,he={},ye=null,ge=null;if($!=null)for(ue in $.ref!==void 0&&(ge=$.ref),$.key!==void 0&&(ye=""+$.key),$)w.call($,ue)&&!E.hasOwnProperty(ue)&&(he[ue]=$[ue]);var fe=arguments.length-2;if(fe===1)he.children=Z;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(j&&j.defaultProps)for(ue in fe=j.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:j,key:ye,ref:ge,props:he,_owner:A.current}}function W(j,$){return{$$typeof:e,type:j.type,key:$,ref:j.ref,props:j.props,_owner:j._owner}}function N(j){return typeof j=="object"&&j!==null&&j.$$typeof===e}function D(j){var $={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Z){return $[Z]})}var T=/\/+/g;function F(j,$){return typeof j=="object"&&j!==null&&j.key!=null?D(""+j.key):$.toString(36)}function q(j,$,Z,ue,he){var ye=typeof j;(ye==="undefined"||ye==="boolean")&&(j=null);var ge=!1;if(j===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(j.$$typeof){case e:case t:ge=!0}}if(ge)return ge=j,he=he(ge),j=ue===""?"."+F(ge,0):ue,O(he)?(Z="",j!=null&&(Z=j.replace(T,"$&/")+"/"),q(he,$,Z,"",function(de){return de})):he!=null&&(N(he)&&(he=W(he,Z+(!he.key||ge&&ge.key===he.key?"":(""+he.key).replace(T,"$&/")+"/")+j)),$.push(he)),1;if(ge=0,ue=ue===""?".":ue+":",O(j))for(var fe=0;fe<j.length;fe++){ye=j[fe];var ne=ue+F(ye,fe);ge+=q(ye,$,Z,ne,he)}else if(ne=v(j),typeof ne=="function")for(j=ne.call(j),fe=0;!(ye=j.next()).done;)ye=ye.value,ne=ue+F(ye,fe++),ge+=q(ye,$,Z,ne,he);else if(ye==="object")throw $=String(j),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return ge}function V(j,$,Z){if(j==null)return j;var ue=[],he=0;return q(j,ue,"","",function(ye){return $.call(Z,ye,he++)}),ue}function Y(j){if(j._status===-1){var $=j._result;$=$(),$.then(function(Z){(j._status===0||j._status===-1)&&(j._status=1,j._result=Z)},function(Z){(j._status===0||j._status===-1)&&(j._status=2,j._result=Z)}),j._status===-1&&(j._status=0,j._result=$)}if(j._status===1)return j._result.default;throw j._result}var G={current:null},H={transition:null},U={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:H,ReactCurrentOwner:A};function X(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:V,forEach:function(j,$,Z){V(j,function(){$.apply(this,arguments)},Z)},count:function(j){var $=0;return V(j,function(){$++}),$},toArray:function(j){return V(j,function($){return $})||[]},only:function(j){if(!N(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Le.Component=g,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=M,Le.StrictMode=r,Le.Suspense=p,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Le.act=X,Le.cloneElement=function(j,$,Z){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var ue=B({},j.props),he=j.key,ye=j.ref,ge=j._owner;if($!=null){if($.ref!==void 0&&(ye=$.ref,ge=A.current),$.key!==void 0&&(he=""+$.key),j.type&&j.type.defaultProps)var fe=j.type.defaultProps;for(ne in $)w.call($,ne)&&!E.hasOwnProperty(ne)&&(ue[ne]=$[ne]===void 0&&fe!==void 0?fe[ne]:$[ne])}var ne=arguments.length-2;if(ne===1)ue.children=Z;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:j.type,key:he,ref:ye,props:ue,_owner:ge}},Le.createContext=function(j){return j={$$typeof:s,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:o,_context:j},j.Consumer=j},Le.createElement=P,Le.createFactory=function(j){var $=P.bind(null,j);return $.type=j,$},Le.createRef=function(){return{current:null}},Le.forwardRef=function(j){return{$$typeof:l,render:j}},Le.isValidElement=N,Le.lazy=function(j){return{$$typeof:m,_payload:{_status:-1,_result:j},_init:Y}},Le.memo=function(j,$){return{$$typeof:f,type:j,compare:$===void 0?null:$}},Le.startTransition=function(j){var $=H.transition;H.transition={};try{j()}finally{H.transition=$}},Le.unstable_act=X,Le.useCallback=function(j,$){return G.current.useCallback(j,$)},Le.useContext=function(j){return G.current.useContext(j)},Le.useDebugValue=function(){},Le.useDeferredValue=function(j){return G.current.useDeferredValue(j)},Le.useEffect=function(j,$){return G.current.useEffect(j,$)},Le.useId=function(){return G.current.useId()},Le.useImperativeHandle=function(j,$,Z){return G.current.useImperativeHandle(j,$,Z)},Le.useInsertionEffect=function(j,$){return G.current.useInsertionEffect(j,$)},Le.useLayoutEffect=function(j,$){return G.current.useLayoutEffect(j,$)},Le.useMemo=function(j,$){return G.current.useMemo(j,$)},Le.useReducer=function(j,$,Z){return G.current.useReducer(j,$,Z)},Le.useRef=function(j){return G.current.useRef(j)},Le.useState=function(j){return G.current.useState(j)},Le.useSyncExternalStore=function(j,$,Z){return G.current.useSyncExternalStore(j,$,Z)},Le.useTransition=function(){return G.current.useTransition()},Le.version="18.3.1",Le}var nI;function ig(){return nI||(nI=1,d2.exports=ek()),d2.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI;function tk(){if(rI)return Ru;rI=1;var e=ig(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(l,p,f){var m,d={},v=null,b=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(b=p.ref);for(m in p)r.call(p,m)&&!o.hasOwnProperty(m)&&(d[m]=p[m]);if(l&&l.defaultProps)for(m in p=l.defaultProps,p)d[m]===void 0&&(d[m]=p[m]);return{$$typeof:t,type:l,key:v,ref:b,props:d,_owner:a.current}}return Ru.Fragment=n,Ru.jsx=s,Ru.jsxs=s,Ru}var aI;function nk(){return aI||(aI=1,f2.exports=tk()),f2.exports}var C=nk(),sc={},h2={exports:{}},vn={},m2={exports:{}},v2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function rk(){return iI||(iI=1,(function(e){function t(H,U){var X=H.length;H.push(U);e:for(;0<X;){var j=X-1>>>1,$=H[j];if(0<a($,U))H[j]=U,H[X]=$,X=j;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var U=H[0],X=H.pop();if(X!==U){H[0]=X;e:for(var j=0,$=H.length,Z=$>>>1;j<Z;){var ue=2*(j+1)-1,he=H[ue],ye=ue+1,ge=H[ye];if(0>a(he,X))ye<$&&0>a(ge,he)?(H[j]=ge,H[ye]=X,j=ye):(H[j]=he,H[ue]=X,j=ue);else if(ye<$&&0>a(ge,X))H[j]=ge,H[ye]=X,j=ye;else break e}}return U}function a(H,U){var X=H.sortIndex-U.sortIndex;return X!==0?X:H.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var p=[],f=[],m=1,d=null,v=3,b=!1,B=!1,I=!1,g=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(H){for(var U=n(f);U!==null;){if(U.callback===null)r(f);else if(U.startTime<=H)r(f),U.sortIndex=U.expirationTime,t(p,U);else break;U=n(f)}}function O(H){if(I=!1,_(H),!B)if(n(p)!==null)B=!0,Y(w);else{var U=n(f);U!==null&&G(O,U.startTime-H)}}function w(H,U){B=!1,I&&(I=!1,S(P),P=-1),b=!0;var X=v;try{for(_(U),d=n(p);d!==null&&(!(d.expirationTime>U)||H&&!D());){var j=d.callback;if(typeof j=="function"){d.callback=null,v=d.priorityLevel;var $=j(d.expirationTime<=U);U=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(p)&&r(p),_(U)}else r(p);d=n(p)}if(d!==null)var Z=!0;else{var ue=n(f);ue!==null&&G(O,ue.startTime-U),Z=!1}return Z}finally{d=null,v=X,b=!1}}var A=!1,E=null,P=-1,W=5,N=-1;function D(){return!(e.unstable_now()-N<W)}function T(){if(E!==null){var H=e.unstable_now();N=H;var U=!0;try{U=E(!0,H)}finally{U?F():(A=!1,E=null)}}else A=!1}var F;if(typeof M=="function")F=function(){M(T)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,V=q.port2;q.port1.onmessage=T,F=function(){V.postMessage(null)}}else F=function(){g(T,0)};function Y(H){E=H,A||(A=!0,F())}function G(H,U){P=g(function(){H(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){B||b||(B=!0,Y(w))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(H){switch(v){case 1:case 2:case 3:var U=3;break;default:U=v}var X=v;v=U;try{return H()}finally{v=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,U){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=v;v=H;try{return U()}finally{v=X}},e.unstable_scheduleCallback=function(H,U,X){var j=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?j+X:j):X=j,H){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=X+$,H={id:m++,callback:U,priorityLevel:H,startTime:X,expirationTime:$,sortIndex:-1},X>j?(H.sortIndex=X,t(f,H),n(p)===null&&H===n(f)&&(I?(S(P),P=-1):I=!0,G(O,X-j))):(H.sortIndex=$,t(p,H),B||b||(B=!0,Y(w))),H},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(H){var U=v;return function(){var X=v;v=U;try{return H.apply(this,arguments)}finally{v=X}}}})(v2)),v2}var oI;function ak(){return oI||(oI=1,m2.exports=rk()),m2.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI;function ik(){if(uI)return vn;uI=1;var e=ig(),t=ak();function n(i){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)u+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function o(i,u){s(i,u),s(i+"Capture",u)}function s(i,u){for(a[i]=u,i=0;i<u.length;i++)r.add(u[i])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(i){return p.call(d,i)?!0:p.call(m,i)?!1:f.test(i)?d[i]=!0:(m[i]=!0,!1)}function b(i,u,c,h){if(c!==null&&c.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function B(i,u,c,h){if(u===null||typeof u>"u"||b(i,u,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(i,u,c,h,y,x,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=h,this.attributeNamespace=y,this.mustUseProperty=c,this.propertyName=i,this.type=u,this.sanitizeURL=x,this.removeEmptyString=k}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){g[i]=new I(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var u=i[0];g[u]=new I(u,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){g[i]=new I(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){g[i]=new I(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){g[i]=new I(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){g[i]=new I(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){g[i]=new I(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){g[i]=new I(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){g[i]=new I(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function M(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var u=i.replace(S,M);g[u]=new I(u,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var u=i.replace(S,M);g[u]=new I(u,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var u=i.replace(S,M);g[u]=new I(u,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){g[i]=new I(i,1,!1,i.toLowerCase(),null,!1,!1)}),g.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){g[i]=new I(i,1,!1,i.toLowerCase(),null,!0,!0)});function _(i,u,c,h){var y=g.hasOwnProperty(u)?g[u]:null;(y!==null?y.type!==0:h||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(B(u,c,y,h)&&(c=null),h||y===null?v(u)&&(c===null?i.removeAttribute(u):i.setAttribute(u,""+c)):y.mustUseProperty?i[y.propertyName]=c===null?y.type===3?!1:"":c:(u=y.attributeName,h=y.attributeNamespace,c===null?i.removeAttribute(u):(y=y.type,c=y===3||y===4&&c===!0?"":""+c,h?i.setAttributeNS(h,u,c):i.setAttribute(u,c))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),A=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),H=Symbol.iterator;function U(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var X=Object.assign,j;function $(i){if(j===void 0)try{throw Error()}catch(c){var u=c.stack.trim().match(/\n( *(at )?)/);j=u&&u[1]||""}return`
`+j+i}var Z=!1;function ue(i,u){if(!i||Z)return"";Z=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var h=te}Reflect.construct(i,[],u)}else{try{u.call()}catch(te){h=te}i.call(u.prototype)}else{try{throw Error()}catch(te){h=te}i()}}catch(te){if(te&&h&&typeof te.stack=="string"){for(var y=te.stack.split(`
`),x=h.stack.split(`
`),k=y.length-1,L=x.length-1;1<=k&&0<=L&&y[k]!==x[L];)L--;for(;1<=k&&0<=L;k--,L--)if(y[k]!==x[L]){if(k!==1||L!==1)do if(k--,L--,0>L||y[k]!==x[L]){var z=`
`+y[k].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=k&&0<=L);break}}}finally{Z=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?$(i):""}function he(i){switch(i.tag){case 5:return $(i.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return i=ue(i.type,!1),i;case 11:return i=ue(i.type.render,!1),i;case 1:return i=ue(i.type,!0),i;default:return""}}function ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case E:return"Fragment";case A:return"Portal";case W:return"Profiler";case P:return"StrictMode";case F:return"Suspense";case q:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case T:var u=i.render;return i=i.displayName,i||(i=u.displayName||u.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case V:return u=i.displayName||null,u!==null?u:ye(i.type)||"Memo";case Y:u=i._payload,i=i._init;try{return ye(i(u))}catch{}}return null}function ge(i){var u=i.type;switch(i.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=u.render,i=i.displayName||i.name||"",u.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ne(i){var u=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(i){var u=ne(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,u),h=""+i[u];if(!i.hasOwnProperty(u)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var y=c.get,x=c.set;return Object.defineProperty(i,u,{configurable:!0,get:function(){return y.call(this)},set:function(k){h=""+k,x.call(this,k)}}),Object.defineProperty(i,u,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(k){h=""+k},stopTracking:function(){i._valueTracker=null,delete i[u]}}}}function pe(i){i._valueTracker||(i._valueTracker=de(i))}function re(i){if(!i)return!1;var u=i._valueTracker;if(!u)return!0;var c=u.getValue(),h="";return i&&(h=ne(i)?i.checked?"true":"false":i.value),i=h,i!==c?(u.setValue(i),!0):!1}function je(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Pe(i,u){var c=u.checked;return X({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function Ce(i,u){var c=u.defaultValue==null?"":u.defaultValue,h=u.checked!=null?u.checked:u.defaultChecked;c=fe(u.value!=null?u.value:c),i._wrapperState={initialChecked:h,initialValue:c,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function _e(i,u){u=u.checked,u!=null&&_(i,"checked",u,!1)}function qe(i,u){_e(i,u);var c=fe(u.value),h=u.type;if(c!=null)h==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}u.hasOwnProperty("value")?Fe(i,u.type,c):u.hasOwnProperty("defaultValue")&&Fe(i,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(i.defaultChecked=!!u.defaultChecked)}function He(i,u,c){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var h=u.type;if(!(h!=="submit"&&h!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+i._wrapperState.initialValue,c||u===i.value||(i.value=u),i.defaultValue=u}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function Fe(i,u,c){(u!=="number"||je(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var Ke=Array.isArray;function xt(i,u,c,h){if(i=i.options,u){u={};for(var y=0;y<c.length;y++)u["$"+c[y]]=!0;for(c=0;c<i.length;c++)y=u.hasOwnProperty("$"+i[c].value),i[c].selected!==y&&(i[c].selected=y),y&&h&&(i[c].defaultSelected=!0)}else{for(c=""+fe(c),u=null,y=0;y<i.length;y++){if(i[y].value===c){i[y].selected=!0,h&&(i[y].defaultSelected=!0);return}u!==null||i[y].disabled||(u=i[y])}u!==null&&(u.selected=!0)}}function vt(i,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},u,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function On(i,u){var c=u.value;if(c==null){if(c=u.children,u=u.defaultValue,c!=null){if(u!=null)throw Error(n(92));if(Ke(c)){if(1<c.length)throw Error(n(93));c=c[0]}u=c}u==null&&(u=""),c=u}i._wrapperState={initialValue:fe(c)}}function yt(i,u){var c=fe(u.value),h=fe(u.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),u.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),h!=null&&(i.defaultValue=""+h)}function Kt(i){var u=i.textContent;u===i._wrapperState.initialValue&&u!==""&&u!==null&&(i.value=u)}function Bt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(i,u){return i==null||i==="http://www.w3.org/1999/xhtml"?Bt(u):i==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var cn,Si=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,c,h,y){MSApp.execUnsafeLocalFunction(function(){return i(u,c,h,y)})}:i})(function(i,u){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=u;else{for(cn=cn||document.createElement("div"),cn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=cn.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;u.firstChild;)i.appendChild(u.firstChild)}});function ta(i,u){if(u){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=u;return}}i.textContent=u}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cn=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(i){Cn.forEach(function(u){u=u+i.charAt(0).toUpperCase()+i.substring(1),Wn[u]=Wn[i]})});function na(i,u,c){return u==null||typeof u=="boolean"||u===""?"":c||typeof u!="number"||u===0||Wn.hasOwnProperty(i)&&Wn[i]?(""+u).trim():u+"px"}function eu(i,u){i=i.style;for(var c in u)if(u.hasOwnProperty(c)){var h=c.indexOf("--")===0,y=na(c,u[c],h);c==="float"&&(c="cssFloat"),h?i.setProperty(c,y):i[c]=y}}var n4=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function w0(i,u){if(u){if(n4[i]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function P0(i,u){if(i.indexOf("-")===-1)return typeof u.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S0=null;function M0(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var _0=null,Mi=null,_i=null;function gb(i){if(i=Bu(i)){if(typeof _0!="function")throw Error(n(280));var u=i.stateNode;u&&(u=Bl(u),_0(i.stateNode,i.type,u))}}function bb(i){Mi?_i?_i.push(i):_i=[i]:Mi=i}function Ib(){if(Mi){var i=Mi,u=_i;if(_i=Mi=null,gb(i),u)for(i=0;i<u.length;i++)gb(u[i])}}function xb(i,u){return i(u)}function Bb(){}var A0=!1;function wb(i,u,c){if(A0)return i(u,c);A0=!0;try{return xb(i,u,c)}finally{A0=!1,(Mi!==null||_i!==null)&&(Bb(),Ib())}}function tu(i,u){var c=i.stateNode;if(c===null)return null;var h=Bl(c);if(h===null)return null;c=h[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(n(231,u,typeof c));return c}var O0=!1;if(l)try{var nu={};Object.defineProperty(nu,"passive",{get:function(){O0=!0}}),window.addEventListener("test",nu,nu),window.removeEventListener("test",nu,nu)}catch{O0=!1}function r4(i,u,c,h,y,x,k,L,z){var te=Array.prototype.slice.call(arguments,3);try{u.apply(c,te)}catch(oe){this.onError(oe)}}var ru=!1,el=null,tl=!1,W0=null,a4={onError:function(i){ru=!0,el=i}};function i4(i,u,c,h,y,x,k,L,z){ru=!1,el=null,r4.apply(a4,arguments)}function o4(i,u,c,h,y,x,k,L,z){if(i4.apply(this,arguments),ru){if(ru){var te=el;ru=!1,el=null}else throw Error(n(198));tl||(tl=!0,W0=te)}}function qa(i){var u=i,c=i;if(i.alternate)for(;u.return;)u=u.return;else{i=u;do u=i,(u.flags&4098)!==0&&(c=u.return),i=u.return;while(i)}return u.tag===3?c:null}function Pb(i){if(i.tag===13){var u=i.memoizedState;if(u===null&&(i=i.alternate,i!==null&&(u=i.memoizedState)),u!==null)return u.dehydrated}return null}function Sb(i){if(qa(i)!==i)throw Error(n(188))}function u4(i){var u=i.alternate;if(!u){if(u=qa(i),u===null)throw Error(n(188));return u!==i?null:i}for(var c=i,h=u;;){var y=c.return;if(y===null)break;var x=y.alternate;if(x===null){if(h=y.return,h!==null){c=h;continue}break}if(y.child===x.child){for(x=y.child;x;){if(x===c)return Sb(y),i;if(x===h)return Sb(y),u;x=x.sibling}throw Error(n(188))}if(c.return!==h.return)c=y,h=x;else{for(var k=!1,L=y.child;L;){if(L===c){k=!0,c=y,h=x;break}if(L===h){k=!0,h=y,c=x;break}L=L.sibling}if(!k){for(L=x.child;L;){if(L===c){k=!0,c=x,h=y;break}if(L===h){k=!0,h=x,c=y;break}L=L.sibling}if(!k)throw Error(n(189))}}if(c.alternate!==h)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?i:u}function Mb(i){return i=u4(i),i!==null?_b(i):null}function _b(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var u=_b(i);if(u!==null)return u;i=i.sibling}return null}var Ab=t.unstable_scheduleCallback,Ob=t.unstable_cancelCallback,s4=t.unstable_shouldYield,l4=t.unstable_requestPaint,wt=t.unstable_now,c4=t.unstable_getCurrentPriorityLevel,C0=t.unstable_ImmediatePriority,Wb=t.unstable_UserBlockingPriority,nl=t.unstable_NormalPriority,p4=t.unstable_LowPriority,Cb=t.unstable_IdlePriority,rl=null,pr=null;function f4(i){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(rl,i,void 0,(i.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:m4,d4=Math.log,h4=Math.LN2;function m4(i){return i>>>=0,i===0?32:31-(d4(i)/h4|0)|0}var al=64,il=4194304;function au(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ol(i,u){var c=i.pendingLanes;if(c===0)return 0;var h=0,y=i.suspendedLanes,x=i.pingedLanes,k=c&268435455;if(k!==0){var L=k&~y;L!==0?h=au(L):(x&=k,x!==0&&(h=au(x)))}else k=c&~y,k!==0?h=au(k):x!==0&&(h=au(x));if(h===0)return 0;if(u!==0&&u!==h&&(u&y)===0&&(y=h&-h,x=u&-u,y>=x||y===16&&(x&4194240)!==0))return u;if((h&4)!==0&&(h|=c&16),u=i.entangledLanes,u!==0)for(i=i.entanglements,u&=h;0<u;)c=31-Qn(u),y=1<<c,h|=i[c],u&=~y;return h}function v4(i,u){switch(i){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y4(i,u){for(var c=i.suspendedLanes,h=i.pingedLanes,y=i.expirationTimes,x=i.pendingLanes;0<x;){var k=31-Qn(x),L=1<<k,z=y[k];z===-1?((L&c)===0||(L&h)!==0)&&(y[k]=v4(L,u)):z<=u&&(i.expiredLanes|=L),x&=~L}}function k0(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function kb(){var i=al;return al<<=1,(al&4194240)===0&&(al=64),i}function E0(i){for(var u=[],c=0;31>c;c++)u.push(i);return u}function iu(i,u,c){i.pendingLanes|=u,u!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,u=31-Qn(u),i[u]=c}function g4(i,u){var c=i.pendingLanes&~u;i.pendingLanes=u,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=u,i.mutableReadLanes&=u,i.entangledLanes&=u,u=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<c;){var y=31-Qn(c),x=1<<y;u[y]=0,h[y]=-1,i[y]=-1,c&=~x}}function T0(i,u){var c=i.entangledLanes|=u;for(i=i.entanglements;c;){var h=31-Qn(c),y=1<<h;y&u|i[h]&u&&(i[h]|=u),c&=~y}}var Ze=0;function Eb(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Tb,N0,Nb,jb,Rb,j0=!1,ul=[],ra=null,aa=null,ia=null,ou=new Map,uu=new Map,oa=[],b4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hb(i,u){switch(i){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":ou.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(u.pointerId)}}function su(i,u,c,h,y,x){return i===null||i.nativeEvent!==x?(i={blockedOn:u,domEventName:c,eventSystemFlags:h,nativeEvent:x,targetContainers:[y]},u!==null&&(u=Bu(u),u!==null&&N0(u)),i):(i.eventSystemFlags|=h,u=i.targetContainers,y!==null&&u.indexOf(y)===-1&&u.push(y),i)}function I4(i,u,c,h,y){switch(u){case"focusin":return ra=su(ra,i,u,c,h,y),!0;case"dragenter":return aa=su(aa,i,u,c,h,y),!0;case"mouseover":return ia=su(ia,i,u,c,h,y),!0;case"pointerover":var x=y.pointerId;return ou.set(x,su(ou.get(x)||null,i,u,c,h,y)),!0;case"gotpointercapture":return x=y.pointerId,uu.set(x,su(uu.get(x)||null,i,u,c,h,y)),!0}return!1}function Db(i){var u=Fa(i.target);if(u!==null){var c=qa(u);if(c!==null){if(u=c.tag,u===13){if(u=Pb(c),u!==null){i.blockedOn=u,Rb(i.priority,function(){Nb(c)});return}}else if(u===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sl(i){if(i.blockedOn!==null)return!1;for(var u=i.targetContainers;0<u.length;){var c=H0(i.domEventName,i.eventSystemFlags,u[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var h=new c.constructor(c.type,c);S0=h,c.target.dispatchEvent(h),S0=null}else return u=Bu(c),u!==null&&N0(u),i.blockedOn=c,!1;u.shift()}return!0}function $b(i,u,c){sl(i)&&c.delete(u)}function x4(){j0=!1,ra!==null&&sl(ra)&&(ra=null),aa!==null&&sl(aa)&&(aa=null),ia!==null&&sl(ia)&&(ia=null),ou.forEach($b),uu.forEach($b)}function lu(i,u){i.blockedOn===u&&(i.blockedOn=null,j0||(j0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,x4)))}function cu(i){function u(y){return lu(y,i)}if(0<ul.length){lu(ul[0],i);for(var c=1;c<ul.length;c++){var h=ul[c];h.blockedOn===i&&(h.blockedOn=null)}}for(ra!==null&&lu(ra,i),aa!==null&&lu(aa,i),ia!==null&&lu(ia,i),ou.forEach(u),uu.forEach(u),c=0;c<oa.length;c++)h=oa[c],h.blockedOn===i&&(h.blockedOn=null);for(;0<oa.length&&(c=oa[0],c.blockedOn===null);)Db(c),c.blockedOn===null&&oa.shift()}var Ai=O.ReactCurrentBatchConfig,ll=!0;function B4(i,u,c,h){var y=Ze,x=Ai.transition;Ai.transition=null;try{Ze=1,R0(i,u,c,h)}finally{Ze=y,Ai.transition=x}}function w4(i,u,c,h){var y=Ze,x=Ai.transition;Ai.transition=null;try{Ze=4,R0(i,u,c,h)}finally{Ze=y,Ai.transition=x}}function R0(i,u,c,h){if(ll){var y=H0(i,u,c,h);if(y===null)tf(i,u,h,cl,c),Hb(i,h);else if(I4(y,i,u,c,h))h.stopPropagation();else if(Hb(i,h),u&4&&-1<b4.indexOf(i)){for(;y!==null;){var x=Bu(y);if(x!==null&&Tb(x),x=H0(i,u,c,h),x===null&&tf(i,u,h,cl,c),x===y)break;y=x}y!==null&&h.stopPropagation()}else tf(i,u,h,null,c)}}var cl=null;function H0(i,u,c,h){if(cl=null,i=M0(h),i=Fa(i),i!==null)if(u=qa(i),u===null)i=null;else if(c=u.tag,c===13){if(i=Pb(u),i!==null)return i;i=null}else if(c===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;i=null}else u!==i&&(i=null);return cl=i,null}function Lb(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c4()){case C0:return 1;case Wb:return 4;case nl:case p4:return 16;case Cb:return 536870912;default:return 16}default:return 16}}var ua=null,D0=null,pl=null;function qb(){if(pl)return pl;var i,u=D0,c=u.length,h,y="value"in ua?ua.value:ua.textContent,x=y.length;for(i=0;i<c&&u[i]===y[i];i++);var k=c-i;for(h=1;h<=k&&u[c-h]===y[x-h];h++);return pl=y.slice(i,1<h?1-h:void 0)}function fl(i){var u=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&u===13&&(i=13)):i=u,i===10&&(i=13),32<=i||i===13?i:0}function dl(){return!0}function Fb(){return!1}function bn(i){function u(c,h,y,x,k){this._reactName=c,this._targetInst=y,this.type=h,this.nativeEvent=x,this.target=k,this.currentTarget=null;for(var L in i)i.hasOwnProperty(L)&&(c=i[L],this[L]=c?c(x):x[L]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?dl:Fb,this.isPropagationStopped=Fb,this}return X(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),u}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$0=bn(Oi),pu=X({},Oi,{view:0,detail:0}),P4=bn(pu),L0,q0,fu,hl=X({},pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:z0,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==fu&&(fu&&i.type==="mousemove"?(L0=i.screenX-fu.screenX,q0=i.screenY-fu.screenY):q0=L0=0,fu=i),L0)},movementY:function(i){return"movementY"in i?i.movementY:q0}}),zb=bn(hl),S4=X({},hl,{dataTransfer:0}),M4=bn(S4),_4=X({},pu,{relatedTarget:0}),F0=bn(_4),A4=X({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),O4=bn(A4),W4=X({},Oi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),C4=bn(W4),k4=X({},Oi,{data:0}),Ub=bn(k4),E4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j4(i){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(i):(i=N4[i])?!!u[i]:!1}function z0(){return j4}var R4=X({},pu,{key:function(i){if(i.key){var u=E4[i.key]||i.key;if(u!=="Unidentified")return u}return i.type==="keypress"?(i=fl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?T4[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:z0,charCode:function(i){return i.type==="keypress"?fl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),H4=bn(R4),D4=X({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vb=bn(D4),$4=X({},pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:z0}),L4=bn($4),q4=X({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),F4=bn(q4),z4=X({},hl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),U4=bn(z4),V4=[9,13,27,32],U0=l&&"CompositionEvent"in window,du=null;l&&"documentMode"in document&&(du=document.documentMode);var G4=l&&"TextEvent"in window&&!du,Gb=l&&(!U0||du&&8<du&&11>=du),Kb=" ",Yb=!1;function Qb(i,u){switch(i){case"keyup":return V4.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xb(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Wi=!1;function K4(i,u){switch(i){case"compositionend":return Xb(u);case"keypress":return u.which!==32?null:(Yb=!0,Kb);case"textInput":return i=u.data,i===Kb&&Yb?null:i;default:return null}}function Y4(i,u){if(Wi)return i==="compositionend"||!U0&&Qb(i,u)?(i=qb(),pl=D0=ua=null,Wi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Gb&&u.locale!=="ko"?null:u.data;default:return null}}var Q4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zb(i){var u=i&&i.nodeName&&i.nodeName.toLowerCase();return u==="input"?!!Q4[i.type]:u==="textarea"}function Jb(i,u,c,h){bb(h),u=bl(u,"onChange"),0<u.length&&(c=new $0("onChange","change",null,c,h),i.push({event:c,listeners:u}))}var hu=null,mu=null;function X4(i){y1(i,0)}function ml(i){var u=Ni(i);if(re(u))return i}function Z4(i,u){if(i==="change")return u}var e1=!1;if(l){var V0;if(l){var G0="oninput"in document;if(!G0){var t1=document.createElement("div");t1.setAttribute("oninput","return;"),G0=typeof t1.oninput=="function"}V0=G0}else V0=!1;e1=V0&&(!document.documentMode||9<document.documentMode)}function n1(){hu&&(hu.detachEvent("onpropertychange",r1),mu=hu=null)}function r1(i){if(i.propertyName==="value"&&ml(mu)){var u=[];Jb(u,mu,i,M0(i)),wb(X4,u)}}function J4(i,u,c){i==="focusin"?(n1(),hu=u,mu=c,hu.attachEvent("onpropertychange",r1)):i==="focusout"&&n1()}function eC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ml(mu)}function tC(i,u){if(i==="click")return ml(u)}function nC(i,u){if(i==="input"||i==="change")return ml(u)}function rC(i,u){return i===u&&(i!==0||1/i===1/u)||i!==i&&u!==u}var Xn=typeof Object.is=="function"?Object.is:rC;function vu(i,u){if(Xn(i,u))return!0;if(typeof i!="object"||i===null||typeof u!="object"||u===null)return!1;var c=Object.keys(i),h=Object.keys(u);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var y=c[h];if(!p.call(u,y)||!Xn(i[y],u[y]))return!1}return!0}function a1(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function i1(i,u){var c=a1(i);i=0;for(var h;c;){if(c.nodeType===3){if(h=i+c.textContent.length,i<=u&&h>=u)return{node:c,offset:u-i};i=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=a1(c)}}function o1(i,u){return i&&u?i===u?!0:i&&i.nodeType===3?!1:u&&u.nodeType===3?o1(i,u.parentNode):"contains"in i?i.contains(u):i.compareDocumentPosition?!!(i.compareDocumentPosition(u)&16):!1:!1}function u1(){for(var i=window,u=je();u instanceof i.HTMLIFrameElement;){try{var c=typeof u.contentWindow.location.href=="string"}catch{c=!1}if(c)i=u.contentWindow;else break;u=je(i.document)}return u}function K0(i){var u=i&&i.nodeName&&i.nodeName.toLowerCase();return u&&(u==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||u==="textarea"||i.contentEditable==="true")}function aC(i){var u=u1(),c=i.focusedElem,h=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&o1(c.ownerDocument.documentElement,c)){if(h!==null&&K0(c)){if(u=h.start,i=h.end,i===void 0&&(i=u),"selectionStart"in c)c.selectionStart=u,c.selectionEnd=Math.min(i,c.value.length);else if(i=(u=c.ownerDocument||document)&&u.defaultView||window,i.getSelection){i=i.getSelection();var y=c.textContent.length,x=Math.min(h.start,y);h=h.end===void 0?x:Math.min(h.end,y),!i.extend&&x>h&&(y=h,h=x,x=y),y=i1(c,x);var k=i1(c,h);y&&k&&(i.rangeCount!==1||i.anchorNode!==y.node||i.anchorOffset!==y.offset||i.focusNode!==k.node||i.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(y.node,y.offset),i.removeAllRanges(),x>h?(i.addRange(u),i.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),i.addRange(u)))}}for(u=[],i=c;i=i.parentNode;)i.nodeType===1&&u.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<u.length;c++)i=u[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var iC=l&&"documentMode"in document&&11>=document.documentMode,Ci=null,Y0=null,yu=null,Q0=!1;function s1(i,u,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Q0||Ci==null||Ci!==je(h)||(h=Ci,"selectionStart"in h&&K0(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),yu&&vu(yu,h)||(yu=h,h=bl(Y0,"onSelect"),0<h.length&&(u=new $0("onSelect","select",null,u,c),i.push({event:u,listeners:h}),u.target=Ci)))}function vl(i,u){var c={};return c[i.toLowerCase()]=u.toLowerCase(),c["Webkit"+i]="webkit"+u,c["Moz"+i]="moz"+u,c}var ki={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},X0={},l1={};l&&(l1=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function yl(i){if(X0[i])return X0[i];if(!ki[i])return i;var u=ki[i],c;for(c in u)if(u.hasOwnProperty(c)&&c in l1)return X0[i]=u[c];return i}var c1=yl("animationend"),p1=yl("animationiteration"),f1=yl("animationstart"),d1=yl("transitionend"),h1=new Map,m1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(i,u){h1.set(i,u),o(u,[i])}for(var Z0=0;Z0<m1.length;Z0++){var J0=m1[Z0],oC=J0.toLowerCase(),uC=J0[0].toUpperCase()+J0.slice(1);sa(oC,"on"+uC)}sa(c1,"onAnimationEnd"),sa(p1,"onAnimationIteration"),sa(f1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(d1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("cancel close invalid load scroll toggle".split(" ").concat(gu));function v1(i,u,c){var h=i.type||"unknown-event";i.currentTarget=c,o4(h,u,void 0,i),i.currentTarget=null}function y1(i,u){u=(u&4)!==0;for(var c=0;c<i.length;c++){var h=i[c],y=h.event;h=h.listeners;e:{var x=void 0;if(u)for(var k=h.length-1;0<=k;k--){var L=h[k],z=L.instance,te=L.currentTarget;if(L=L.listener,z!==x&&y.isPropagationStopped())break e;v1(y,L,te),x=z}else for(k=0;k<h.length;k++){if(L=h[k],z=L.instance,te=L.currentTarget,L=L.listener,z!==x&&y.isPropagationStopped())break e;v1(y,L,te),x=z}}}if(tl)throw i=W0,tl=!1,W0=null,i}function ot(i,u){var c=u[sf];c===void 0&&(c=u[sf]=new Set);var h=i+"__bubble";c.has(h)||(g1(u,i,2,!1),c.add(h))}function ef(i,u,c){var h=0;u&&(h|=4),g1(c,i,h,u)}var gl="_reactListening"+Math.random().toString(36).slice(2);function bu(i){if(!i[gl]){i[gl]=!0,r.forEach(function(c){c!=="selectionchange"&&(sC.has(c)||ef(c,!1,i),ef(c,!0,i))});var u=i.nodeType===9?i:i.ownerDocument;u===null||u[gl]||(u[gl]=!0,ef("selectionchange",!1,u))}}function g1(i,u,c,h){switch(Lb(u)){case 1:var y=B4;break;case 4:y=w4;break;default:y=R0}c=y.bind(null,u,c,i),y=void 0,!O0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(y=!0),h?y!==void 0?i.addEventListener(u,c,{capture:!0,passive:y}):i.addEventListener(u,c,!0):y!==void 0?i.addEventListener(u,c,{passive:y}):i.addEventListener(u,c,!1)}function tf(i,u,c,h,y){var x=h;if((u&1)===0&&(u&2)===0&&h!==null)e:for(;;){if(h===null)return;var k=h.tag;if(k===3||k===4){var L=h.stateNode.containerInfo;if(L===y||L.nodeType===8&&L.parentNode===y)break;if(k===4)for(k=h.return;k!==null;){var z=k.tag;if((z===3||z===4)&&(z=k.stateNode.containerInfo,z===y||z.nodeType===8&&z.parentNode===y))return;k=k.return}for(;L!==null;){if(k=Fa(L),k===null)return;if(z=k.tag,z===5||z===6){h=x=k;continue e}L=L.parentNode}}h=h.return}wb(function(){var te=x,oe=M0(c),se=[];e:{var ie=h1.get(i);if(ie!==void 0){var me=$0,xe=i;switch(i){case"keypress":if(fl(c)===0)break e;case"keydown":case"keyup":me=H4;break;case"focusin":xe="focus",me=F0;break;case"focusout":xe="blur",me=F0;break;case"beforeblur":case"afterblur":me=F0;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=zb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=M4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=L4;break;case c1:case p1:case f1:me=O4;break;case d1:me=F4;break;case"scroll":me=P4;break;case"wheel":me=U4;break;case"copy":case"cut":case"paste":me=C4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Vb}var Se=(u&4)!==0,Pt=!Se&&i==="scroll",J=Se?ie!==null?ie+"Capture":null:ie;Se=[];for(var K=te,ee;K!==null;){ee=K;var ce=ee.stateNode;if(ee.tag===5&&ce!==null&&(ee=ce,J!==null&&(ce=tu(K,J),ce!=null&&Se.push(Iu(K,ce,ee)))),Pt)break;K=K.return}0<Se.length&&(ie=new me(ie,xe,null,c,oe),se.push({event:ie,listeners:Se}))}}if((u&7)===0){e:{if(ie=i==="mouseover"||i==="pointerover",me=i==="mouseout"||i==="pointerout",ie&&c!==S0&&(xe=c.relatedTarget||c.fromElement)&&(Fa(xe)||xe[Ar]))break e;if((me||ie)&&(ie=oe.window===oe?oe:(ie=oe.ownerDocument)?ie.defaultView||ie.parentWindow:window,me?(xe=c.relatedTarget||c.toElement,me=te,xe=xe?Fa(xe):null,xe!==null&&(Pt=qa(xe),xe!==Pt||xe.tag!==5&&xe.tag!==6)&&(xe=null)):(me=null,xe=te),me!==xe)){if(Se=zb,ce="onMouseLeave",J="onMouseEnter",K="mouse",(i==="pointerout"||i==="pointerover")&&(Se=Vb,ce="onPointerLeave",J="onPointerEnter",K="pointer"),Pt=me==null?ie:Ni(me),ee=xe==null?ie:Ni(xe),ie=new Se(ce,K+"leave",me,c,oe),ie.target=Pt,ie.relatedTarget=ee,ce=null,Fa(oe)===te&&(Se=new Se(J,K+"enter",xe,c,oe),Se.target=ee,Se.relatedTarget=Pt,ce=Se),Pt=ce,me&&xe)t:{for(Se=me,J=xe,K=0,ee=Se;ee;ee=Ei(ee))K++;for(ee=0,ce=J;ce;ce=Ei(ce))ee++;for(;0<K-ee;)Se=Ei(Se),K--;for(;0<ee-K;)J=Ei(J),ee--;for(;K--;){if(Se===J||J!==null&&Se===J.alternate)break t;Se=Ei(Se),J=Ei(J)}Se=null}else Se=null;me!==null&&b1(se,ie,me,Se,!1),xe!==null&&Pt!==null&&b1(se,Pt,xe,Se,!0)}}e:{if(ie=te?Ni(te):window,me=ie.nodeName&&ie.nodeName.toLowerCase(),me==="select"||me==="input"&&ie.type==="file")var Ae=Z4;else if(Zb(ie))if(e1)Ae=nC;else{Ae=eC;var Oe=J4}else(me=ie.nodeName)&&me.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Ae=tC);if(Ae&&(Ae=Ae(i,te))){Jb(se,Ae,c,oe);break e}Oe&&Oe(i,ie,te),i==="focusout"&&(Oe=ie._wrapperState)&&Oe.controlled&&ie.type==="number"&&Fe(ie,"number",ie.value)}switch(Oe=te?Ni(te):window,i){case"focusin":(Zb(Oe)||Oe.contentEditable==="true")&&(Ci=Oe,Y0=te,yu=null);break;case"focusout":yu=Y0=Ci=null;break;case"mousedown":Q0=!0;break;case"contextmenu":case"mouseup":case"dragend":Q0=!1,s1(se,c,oe);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":s1(se,c,oe)}var We;if(U0)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Wi?Qb(i,c)&&(Ne="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(Ne="onCompositionStart");Ne&&(Gb&&c.locale!=="ko"&&(Wi||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Wi&&(We=qb()):(ua=oe,D0="value"in ua?ua.value:ua.textContent,Wi=!0)),Oe=bl(te,Ne),0<Oe.length&&(Ne=new Ub(Ne,i,null,c,oe),se.push({event:Ne,listeners:Oe}),We?Ne.data=We:(We=Xb(c),We!==null&&(Ne.data=We)))),(We=G4?K4(i,c):Y4(i,c))&&(te=bl(te,"onBeforeInput"),0<te.length&&(oe=new Ub("onBeforeInput","beforeinput",null,c,oe),se.push({event:oe,listeners:te}),oe.data=We))}y1(se,u)})}function Iu(i,u,c){return{instance:i,listener:u,currentTarget:c}}function bl(i,u){for(var c=u+"Capture",h=[];i!==null;){var y=i,x=y.stateNode;y.tag===5&&x!==null&&(y=x,x=tu(i,c),x!=null&&h.unshift(Iu(i,x,y)),x=tu(i,u),x!=null&&h.push(Iu(i,x,y))),i=i.return}return h}function Ei(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function b1(i,u,c,h,y){for(var x=u._reactName,k=[];c!==null&&c!==h;){var L=c,z=L.alternate,te=L.stateNode;if(z!==null&&z===h)break;L.tag===5&&te!==null&&(L=te,y?(z=tu(c,x),z!=null&&k.unshift(Iu(c,z,L))):y||(z=tu(c,x),z!=null&&k.push(Iu(c,z,L)))),c=c.return}k.length!==0&&i.push({event:u,listeners:k})}var lC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function I1(i){return(typeof i=="string"?i:""+i).replace(lC,`
`).replace(cC,"")}function Il(i,u,c){if(u=I1(u),I1(i)!==u&&c)throw Error(n(425))}function xl(){}var nf=null,rf=null;function af(i,u){return i==="textarea"||i==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,pC=typeof clearTimeout=="function"?clearTimeout:void 0,x1=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof x1<"u"?function(i){return x1.resolve(null).then(i).catch(dC)}:of;function dC(i){setTimeout(function(){throw i})}function uf(i,u){var c=u,h=0;do{var y=c.nextSibling;if(i.removeChild(c),y&&y.nodeType===8)if(c=y.data,c==="/$"){if(h===0){i.removeChild(y),cu(u);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=y}while(c);cu(u)}function la(i){for(;i!=null;i=i.nextSibling){var u=i.nodeType;if(u===1||u===3)break;if(u===8){if(u=i.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return i}function B1(i){i=i.previousSibling;for(var u=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(u===0)return i;u--}else c==="/$"&&u++}i=i.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),fr="__reactFiber$"+Ti,xu="__reactProps$"+Ti,Ar="__reactContainer$"+Ti,sf="__reactEvents$"+Ti,hC="__reactListeners$"+Ti,mC="__reactHandles$"+Ti;function Fa(i){var u=i[fr];if(u)return u;for(var c=i.parentNode;c;){if(u=c[Ar]||c[fr]){if(c=u.alternate,u.child!==null||c!==null&&c.child!==null)for(i=B1(i);i!==null;){if(c=i[fr])return c;i=B1(i)}return u}i=c,c=i.parentNode}return null}function Bu(i){return i=i[fr]||i[Ar],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ni(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Bl(i){return i[xu]||null}var lf=[],ji=-1;function ca(i){return{current:i}}function ut(i){0>ji||(i.current=lf[ji],lf[ji]=null,ji--)}function nt(i,u){ji++,lf[ji]=i.current,i.current=u}var pa={},Yt=ca(pa),pn=ca(!1),za=pa;function Ri(i,u){var c=i.type.contextTypes;if(!c)return pa;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===u)return h.__reactInternalMemoizedMaskedChildContext;var y={},x;for(x in c)y[x]=u[x];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=u,i.__reactInternalMemoizedMaskedChildContext=y),y}function fn(i){return i=i.childContextTypes,i!=null}function wl(){ut(pn),ut(Yt)}function w1(i,u,c){if(Yt.current!==pa)throw Error(n(168));nt(Yt,u),nt(pn,c)}function P1(i,u,c){var h=i.stateNode;if(u=u.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var y in h)if(!(y in u))throw Error(n(108,ge(i)||"Unknown",y));return X({},c,h)}function Pl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||pa,za=Yt.current,nt(Yt,i),nt(pn,pn.current),!0}function S1(i,u,c){var h=i.stateNode;if(!h)throw Error(n(169));c?(i=P1(i,u,za),h.__reactInternalMemoizedMergedChildContext=i,ut(pn),ut(Yt),nt(Yt,i)):ut(pn),nt(pn,c)}var Or=null,Sl=!1,cf=!1;function M1(i){Or===null?Or=[i]:Or.push(i)}function vC(i){Sl=!0,M1(i)}function fa(){if(!cf&&Or!==null){cf=!0;var i=0,u=Ze;try{var c=Or;for(Ze=1;i<c.length;i++){var h=c[i];do h=h(!0);while(h!==null)}Or=null,Sl=!1}catch(y){throw Or!==null&&(Or=Or.slice(i+1)),Ab(C0,fa),y}finally{Ze=u,cf=!1}}return null}var Hi=[],Di=0,Ml=null,_l=0,kn=[],En=0,Ua=null,Wr=1,Cr="";function Va(i,u){Hi[Di++]=_l,Hi[Di++]=Ml,Ml=i,_l=u}function _1(i,u,c){kn[En++]=Wr,kn[En++]=Cr,kn[En++]=Ua,Ua=i;var h=Wr;i=Cr;var y=32-Qn(h)-1;h&=~(1<<y),c+=1;var x=32-Qn(u)+y;if(30<x){var k=y-y%5;x=(h&(1<<k)-1).toString(32),h>>=k,y-=k,Wr=1<<32-Qn(u)+y|c<<y|h,Cr=x+i}else Wr=1<<x|c<<y|h,Cr=i}function pf(i){i.return!==null&&(Va(i,1),_1(i,1,0))}function ff(i){for(;i===Ml;)Ml=Hi[--Di],Hi[Di]=null,_l=Hi[--Di],Hi[Di]=null;for(;i===Ua;)Ua=kn[--En],kn[En]=null,Cr=kn[--En],kn[En]=null,Wr=kn[--En],kn[En]=null}var In=null,xn=null,ct=!1,Zn=null;function A1(i,u){var c=Rn(5,null,null,0);c.elementType="DELETED",c.stateNode=u,c.return=i,u=i.deletions,u===null?(i.deletions=[c],i.flags|=16):u.push(c)}function O1(i,u){switch(i.tag){case 5:var c=i.type;return u=u.nodeType!==1||c.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(i.stateNode=u,In=i,xn=la(u.firstChild),!0):!1;case 6:return u=i.pendingProps===""||u.nodeType!==3?null:u,u!==null?(i.stateNode=u,In=i,xn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(c=Ua!==null?{id:Wr,overflow:Cr}:null,i.memoizedState={dehydrated:u,treeContext:c,retryLane:1073741824},c=Rn(18,null,null,0),c.stateNode=u,c.return=i,i.child=c,In=i,xn=null,!0):!1;default:return!1}}function df(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hf(i){if(ct){var u=xn;if(u){var c=u;if(!O1(i,u)){if(df(i))throw Error(n(418));u=la(c.nextSibling);var h=In;u&&O1(i,u)?A1(h,c):(i.flags=i.flags&-4097|2,ct=!1,In=i)}}else{if(df(i))throw Error(n(418));i.flags=i.flags&-4097|2,ct=!1,In=i}}}function W1(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;In=i}function Al(i){if(i!==In)return!1;if(!ct)return W1(i),ct=!0,!1;var u;if((u=i.tag!==3)&&!(u=i.tag!==5)&&(u=i.type,u=u!=="head"&&u!=="body"&&!af(i.type,i.memoizedProps)),u&&(u=xn)){if(df(i))throw C1(),Error(n(418));for(;u;)A1(i,u),u=la(u.nextSibling)}if(W1(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,u=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(u===0){xn=la(i.nextSibling);break e}u--}else c!=="$"&&c!=="$!"&&c!=="$?"||u++}i=i.nextSibling}xn=null}}else xn=In?la(i.stateNode.nextSibling):null;return!0}function C1(){for(var i=xn;i;)i=la(i.nextSibling)}function $i(){xn=In=null,ct=!1}function mf(i){Zn===null?Zn=[i]:Zn.push(i)}var yC=O.ReactCurrentBatchConfig;function wu(i,u,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var h=c.stateNode}if(!h)throw Error(n(147,i));var y=h,x=""+i;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===x?u.ref:(u=function(k){var L=y.refs;k===null?delete L[x]:L[x]=k},u._stringRef=x,u)}if(typeof i!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,i))}return i}function Ol(i,u){throw i=Object.prototype.toString.call(u),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":i))}function k1(i){var u=i._init;return u(i._payload)}function E1(i){function u(J,K){if(i){var ee=J.deletions;ee===null?(J.deletions=[K],J.flags|=16):ee.push(K)}}function c(J,K){if(!i)return null;for(;K!==null;)u(J,K),K=K.sibling;return null}function h(J,K){for(J=new Map;K!==null;)K.key!==null?J.set(K.key,K):J.set(K.index,K),K=K.sibling;return J}function y(J,K){return J=Ia(J,K),J.index=0,J.sibling=null,J}function x(J,K,ee){return J.index=ee,i?(ee=J.alternate,ee!==null?(ee=ee.index,ee<K?(J.flags|=2,K):ee):(J.flags|=2,K)):(J.flags|=1048576,K)}function k(J){return i&&J.alternate===null&&(J.flags|=2),J}function L(J,K,ee,ce){return K===null||K.tag!==6?(K=o2(ee,J.mode,ce),K.return=J,K):(K=y(K,ee),K.return=J,K)}function z(J,K,ee,ce){var Ae=ee.type;return Ae===E?oe(J,K,ee.props.children,ce,ee.key):K!==null&&(K.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===Y&&k1(Ae)===K.type)?(ce=y(K,ee.props),ce.ref=wu(J,K,ee),ce.return=J,ce):(ce=Jl(ee.type,ee.key,ee.props,null,J.mode,ce),ce.ref=wu(J,K,ee),ce.return=J,ce)}function te(J,K,ee,ce){return K===null||K.tag!==4||K.stateNode.containerInfo!==ee.containerInfo||K.stateNode.implementation!==ee.implementation?(K=u2(ee,J.mode,ce),K.return=J,K):(K=y(K,ee.children||[]),K.return=J,K)}function oe(J,K,ee,ce,Ae){return K===null||K.tag!==7?(K=ei(ee,J.mode,ce,Ae),K.return=J,K):(K=y(K,ee),K.return=J,K)}function se(J,K,ee){if(typeof K=="string"&&K!==""||typeof K=="number")return K=o2(""+K,J.mode,ee),K.return=J,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return ee=Jl(K.type,K.key,K.props,null,J.mode,ee),ee.ref=wu(J,null,K),ee.return=J,ee;case A:return K=u2(K,J.mode,ee),K.return=J,K;case Y:var ce=K._init;return se(J,ce(K._payload),ee)}if(Ke(K)||U(K))return K=ei(K,J.mode,ee,null),K.return=J,K;Ol(J,K)}return null}function ie(J,K,ee,ce){var Ae=K!==null?K.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ae!==null?null:L(J,K,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===Ae?z(J,K,ee,ce):null;case A:return ee.key===Ae?te(J,K,ee,ce):null;case Y:return Ae=ee._init,ie(J,K,Ae(ee._payload),ce)}if(Ke(ee)||U(ee))return Ae!==null?null:oe(J,K,ee,ce,null);Ol(J,ee)}return null}function me(J,K,ee,ce,Ae){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return J=J.get(ee)||null,L(K,J,""+ce,Ae);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:return J=J.get(ce.key===null?ee:ce.key)||null,z(K,J,ce,Ae);case A:return J=J.get(ce.key===null?ee:ce.key)||null,te(K,J,ce,Ae);case Y:var Oe=ce._init;return me(J,K,ee,Oe(ce._payload),Ae)}if(Ke(ce)||U(ce))return J=J.get(ee)||null,oe(K,J,ce,Ae,null);Ol(K,ce)}return null}function xe(J,K,ee,ce){for(var Ae=null,Oe=null,We=K,Ne=K=0,Lt=null;We!==null&&Ne<ee.length;Ne++){We.index>Ne?(Lt=We,We=null):Lt=We.sibling;var Ue=ie(J,We,ee[Ne],ce);if(Ue===null){We===null&&(We=Lt);break}i&&We&&Ue.alternate===null&&u(J,We),K=x(Ue,K,Ne),Oe===null?Ae=Ue:Oe.sibling=Ue,Oe=Ue,We=Lt}if(Ne===ee.length)return c(J,We),ct&&Va(J,Ne),Ae;if(We===null){for(;Ne<ee.length;Ne++)We=se(J,ee[Ne],ce),We!==null&&(K=x(We,K,Ne),Oe===null?Ae=We:Oe.sibling=We,Oe=We);return ct&&Va(J,Ne),Ae}for(We=h(J,We);Ne<ee.length;Ne++)Lt=me(We,J,Ne,ee[Ne],ce),Lt!==null&&(i&&Lt.alternate!==null&&We.delete(Lt.key===null?Ne:Lt.key),K=x(Lt,K,Ne),Oe===null?Ae=Lt:Oe.sibling=Lt,Oe=Lt);return i&&We.forEach(function(xa){return u(J,xa)}),ct&&Va(J,Ne),Ae}function Se(J,K,ee,ce){var Ae=U(ee);if(typeof Ae!="function")throw Error(n(150));if(ee=Ae.call(ee),ee==null)throw Error(n(151));for(var Oe=Ae=null,We=K,Ne=K=0,Lt=null,Ue=ee.next();We!==null&&!Ue.done;Ne++,Ue=ee.next()){We.index>Ne?(Lt=We,We=null):Lt=We.sibling;var xa=ie(J,We,Ue.value,ce);if(xa===null){We===null&&(We=Lt);break}i&&We&&xa.alternate===null&&u(J,We),K=x(xa,K,Ne),Oe===null?Ae=xa:Oe.sibling=xa,Oe=xa,We=Lt}if(Ue.done)return c(J,We),ct&&Va(J,Ne),Ae;if(We===null){for(;!Ue.done;Ne++,Ue=ee.next())Ue=se(J,Ue.value,ce),Ue!==null&&(K=x(Ue,K,Ne),Oe===null?Ae=Ue:Oe.sibling=Ue,Oe=Ue);return ct&&Va(J,Ne),Ae}for(We=h(J,We);!Ue.done;Ne++,Ue=ee.next())Ue=me(We,J,Ne,Ue.value,ce),Ue!==null&&(i&&Ue.alternate!==null&&We.delete(Ue.key===null?Ne:Ue.key),K=x(Ue,K,Ne),Oe===null?Ae=Ue:Oe.sibling=Ue,Oe=Ue);return i&&We.forEach(function(QC){return u(J,QC)}),ct&&Va(J,Ne),Ae}function Pt(J,K,ee,ce){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var Ae=ee.key,Oe=K;Oe!==null;){if(Oe.key===Ae){if(Ae=ee.type,Ae===E){if(Oe.tag===7){c(J,Oe.sibling),K=y(Oe,ee.props.children),K.return=J,J=K;break e}}else if(Oe.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===Y&&k1(Ae)===Oe.type){c(J,Oe.sibling),K=y(Oe,ee.props),K.ref=wu(J,Oe,ee),K.return=J,J=K;break e}c(J,Oe);break}else u(J,Oe);Oe=Oe.sibling}ee.type===E?(K=ei(ee.props.children,J.mode,ce,ee.key),K.return=J,J=K):(ce=Jl(ee.type,ee.key,ee.props,null,J.mode,ce),ce.ref=wu(J,K,ee),ce.return=J,J=ce)}return k(J);case A:e:{for(Oe=ee.key;K!==null;){if(K.key===Oe)if(K.tag===4&&K.stateNode.containerInfo===ee.containerInfo&&K.stateNode.implementation===ee.implementation){c(J,K.sibling),K=y(K,ee.children||[]),K.return=J,J=K;break e}else{c(J,K);break}else u(J,K);K=K.sibling}K=u2(ee,J.mode,ce),K.return=J,J=K}return k(J);case Y:return Oe=ee._init,Pt(J,K,Oe(ee._payload),ce)}if(Ke(ee))return xe(J,K,ee,ce);if(U(ee))return Se(J,K,ee,ce);Ol(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,K!==null&&K.tag===6?(c(J,K.sibling),K=y(K,ee),K.return=J,J=K):(c(J,K),K=o2(ee,J.mode,ce),K.return=J,J=K),k(J)):c(J,K)}return Pt}var Li=E1(!0),T1=E1(!1),Wl=ca(null),Cl=null,qi=null,vf=null;function yf(){vf=qi=Cl=null}function gf(i){var u=Wl.current;ut(Wl),i._currentValue=u}function bf(i,u,c){for(;i!==null;){var h=i.alternate;if((i.childLanes&u)!==u?(i.childLanes|=u,h!==null&&(h.childLanes|=u)):h!==null&&(h.childLanes&u)!==u&&(h.childLanes|=u),i===c)break;i=i.return}}function Fi(i,u){Cl=i,vf=qi=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&u)!==0&&(dn=!0),i.firstContext=null)}function Tn(i){var u=i._currentValue;if(vf!==i)if(i={context:i,memoizedValue:u,next:null},qi===null){if(Cl===null)throw Error(n(308));qi=i,Cl.dependencies={lanes:0,firstContext:i}}else qi=qi.next=i;return u}var Ga=null;function If(i){Ga===null?Ga=[i]:Ga.push(i)}function N1(i,u,c,h){var y=u.interleaved;return y===null?(c.next=c,If(u)):(c.next=y.next,y.next=c),u.interleaved=c,kr(i,h)}function kr(i,u){i.lanes|=u;var c=i.alternate;for(c!==null&&(c.lanes|=u),c=i,i=i.return;i!==null;)i.childLanes|=u,c=i.alternate,c!==null&&(c.childLanes|=u),c=i,i=i.return;return c.tag===3?c.stateNode:null}var da=!1;function xf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j1(i,u){i=i.updateQueue,u.updateQueue===i&&(u.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Er(i,u){return{eventTime:i,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(i,u,c){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var y=h.pending;return y===null?u.next=u:(u.next=y.next,y.next=u),h.pending=u,kr(i,c)}return y=h.interleaved,y===null?(u.next=u,If(h)):(u.next=y.next,y.next=u),h.interleaved=u,kr(i,c)}function kl(i,u,c){if(u=u.updateQueue,u!==null&&(u=u.shared,(c&4194240)!==0)){var h=u.lanes;h&=i.pendingLanes,c|=h,u.lanes=c,T0(i,c)}}function R1(i,u){var c=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var y=null,x=null;if(c=c.firstBaseUpdate,c!==null){do{var k={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};x===null?y=x=k:x=x.next=k,c=c.next}while(c!==null);x===null?y=x=u:x=x.next=u}else y=x=u;c={baseState:h.baseState,firstBaseUpdate:y,lastBaseUpdate:x,shared:h.shared,effects:h.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=u}function El(i,u,c,h){var y=i.updateQueue;da=!1;var x=y.firstBaseUpdate,k=y.lastBaseUpdate,L=y.shared.pending;if(L!==null){y.shared.pending=null;var z=L,te=z.next;z.next=null,k===null?x=te:k.next=te,k=z;var oe=i.alternate;oe!==null&&(oe=oe.updateQueue,L=oe.lastBaseUpdate,L!==k&&(L===null?oe.firstBaseUpdate=te:L.next=te,oe.lastBaseUpdate=z))}if(x!==null){var se=y.baseState;k=0,oe=te=z=null,L=x;do{var ie=L.lane,me=L.eventTime;if((h&ie)===ie){oe!==null&&(oe=oe.next={eventTime:me,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var xe=i,Se=L;switch(ie=u,me=c,Se.tag){case 1:if(xe=Se.payload,typeof xe=="function"){se=xe.call(me,se,ie);break e}se=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Se.payload,ie=typeof xe=="function"?xe.call(me,se,ie):xe,ie==null)break e;se=X({},se,ie);break e;case 2:da=!0}}L.callback!==null&&L.lane!==0&&(i.flags|=64,ie=y.effects,ie===null?y.effects=[L]:ie.push(L))}else me={eventTime:me,lane:ie,tag:L.tag,payload:L.payload,callback:L.callback,next:null},oe===null?(te=oe=me,z=se):oe=oe.next=me,k|=ie;if(L=L.next,L===null){if(L=y.shared.pending,L===null)break;ie=L,L=ie.next,ie.next=null,y.lastBaseUpdate=ie,y.shared.pending=null}}while(!0);if(oe===null&&(z=se),y.baseState=z,y.firstBaseUpdate=te,y.lastBaseUpdate=oe,u=y.shared.interleaved,u!==null){y=u;do k|=y.lane,y=y.next;while(y!==u)}else x===null&&(y.shared.lanes=0);Qa|=k,i.lanes=k,i.memoizedState=se}}function H1(i,u,c){if(i=u.effects,u.effects=null,i!==null)for(u=0;u<i.length;u++){var h=i[u],y=h.callback;if(y!==null){if(h.callback=null,h=c,typeof y!="function")throw Error(n(191,y));y.call(h)}}}var Pu={},dr=ca(Pu),Su=ca(Pu),Mu=ca(Pu);function Ka(i){if(i===Pu)throw Error(n(174));return i}function Bf(i,u){switch(nt(Mu,u),nt(Su,i),nt(dr,Pu),i=u.nodeType,i){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:Ht(null,"");break;default:i=i===8?u.parentNode:u,u=i.namespaceURI||null,i=i.tagName,u=Ht(u,i)}ut(dr),nt(dr,u)}function zi(){ut(dr),ut(Su),ut(Mu)}function D1(i){Ka(Mu.current);var u=Ka(dr.current),c=Ht(u,i.type);u!==c&&(nt(Su,i),nt(dr,c))}function wf(i){Su.current===i&&(ut(dr),ut(Su))}var ft=ca(0);function Tl(i){for(var u=i;u!==null;){if(u.tag===13){var c=u.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break;for(;u.sibling===null;){if(u.return===null||u.return===i)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var Pf=[];function Sf(){for(var i=0;i<Pf.length;i++)Pf[i]._workInProgressVersionPrimary=null;Pf.length=0}var Nl=O.ReactCurrentDispatcher,Mf=O.ReactCurrentBatchConfig,Ya=0,dt=null,kt=null,Dt=null,jl=!1,_u=!1,Au=0,gC=0;function Qt(){throw Error(n(321))}function _f(i,u){if(u===null)return!1;for(var c=0;c<u.length&&c<i.length;c++)if(!Xn(i[c],u[c]))return!1;return!0}function Af(i,u,c,h,y,x){if(Ya=x,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Nl.current=i===null||i.memoizedState===null?BC:wC,i=c(h,y),_u){x=0;do{if(_u=!1,Au=0,25<=x)throw Error(n(301));x+=1,Dt=kt=null,u.updateQueue=null,Nl.current=PC,i=c(h,y)}while(_u)}if(Nl.current=Dl,u=kt!==null&&kt.next!==null,Ya=0,Dt=kt=dt=null,jl=!1,u)throw Error(n(300));return i}function Of(){var i=Au!==0;return Au=0,i}function hr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=i:Dt=Dt.next=i,Dt}function Nn(){if(kt===null){var i=dt.alternate;i=i!==null?i.memoizedState:null}else i=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=i;else{if(i===null)throw Error(n(310));kt=i,i={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=i:Dt=Dt.next=i}return Dt}function Ou(i,u){return typeof u=="function"?u(i):u}function Wf(i){var u=Nn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=i;var h=kt,y=h.baseQueue,x=c.pending;if(x!==null){if(y!==null){var k=y.next;y.next=x.next,x.next=k}h.baseQueue=y=x,c.pending=null}if(y!==null){x=y.next,h=h.baseState;var L=k=null,z=null,te=x;do{var oe=te.lane;if((Ya&oe)===oe)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),h=te.hasEagerState?te.eagerState:i(h,te.action);else{var se={lane:oe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(L=z=se,k=h):z=z.next=se,dt.lanes|=oe,Qa|=oe}te=te.next}while(te!==null&&te!==x);z===null?k=h:z.next=L,Xn(h,u.memoizedState)||(dn=!0),u.memoizedState=h,u.baseState=k,u.baseQueue=z,c.lastRenderedState=h}if(i=c.interleaved,i!==null){y=i;do x=y.lane,dt.lanes|=x,Qa|=x,y=y.next;while(y!==i)}else y===null&&(c.lanes=0);return[u.memoizedState,c.dispatch]}function Cf(i){var u=Nn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=i;var h=c.dispatch,y=c.pending,x=u.memoizedState;if(y!==null){c.pending=null;var k=y=y.next;do x=i(x,k.action),k=k.next;while(k!==y);Xn(x,u.memoizedState)||(dn=!0),u.memoizedState=x,u.baseQueue===null&&(u.baseState=x),c.lastRenderedState=x}return[x,h]}function $1(){}function L1(i,u){var c=dt,h=Nn(),y=u(),x=!Xn(h.memoizedState,y);if(x&&(h.memoizedState=y,dn=!0),h=h.queue,kf(z1.bind(null,c,h,i),[i]),h.getSnapshot!==u||x||Dt!==null&&Dt.memoizedState.tag&1){if(c.flags|=2048,Wu(9,F1.bind(null,c,h,y,u),void 0,null),$t===null)throw Error(n(349));(Ya&30)!==0||q1(c,u,y)}return y}function q1(i,u,c){i.flags|=16384,i={getSnapshot:u,value:c},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[i]):(c=u.stores,c===null?u.stores=[i]:c.push(i))}function F1(i,u,c,h){u.value=c,u.getSnapshot=h,U1(u)&&V1(i)}function z1(i,u,c){return c(function(){U1(u)&&V1(i)})}function U1(i){var u=i.getSnapshot;i=i.value;try{var c=u();return!Xn(i,c)}catch{return!0}}function V1(i){var u=kr(i,1);u!==null&&nr(u,i,1,-1)}function G1(i){var u=hr();return typeof i=="function"&&(i=i()),u.memoizedState=u.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:i},u.queue=i,i=i.dispatch=xC.bind(null,dt,i),[u.memoizedState,i]}function Wu(i,u,c,h){return i={tag:i,create:u,destroy:c,deps:h,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=i.next=i):(c=u.lastEffect,c===null?u.lastEffect=i.next=i:(h=c.next,c.next=i,i.next=h,u.lastEffect=i)),i}function K1(){return Nn().memoizedState}function Rl(i,u,c,h){var y=hr();dt.flags|=i,y.memoizedState=Wu(1|u,c,void 0,h===void 0?null:h)}function Hl(i,u,c,h){var y=Nn();h=h===void 0?null:h;var x=void 0;if(kt!==null){var k=kt.memoizedState;if(x=k.destroy,h!==null&&_f(h,k.deps)){y.memoizedState=Wu(u,c,x,h);return}}dt.flags|=i,y.memoizedState=Wu(1|u,c,x,h)}function Y1(i,u){return Rl(8390656,8,i,u)}function kf(i,u){return Hl(2048,8,i,u)}function Q1(i,u){return Hl(4,2,i,u)}function X1(i,u){return Hl(4,4,i,u)}function Z1(i,u){if(typeof u=="function")return i=i(),u(i),function(){u(null)};if(u!=null)return i=i(),u.current=i,function(){u.current=null}}function J1(i,u,c){return c=c!=null?c.concat([i]):null,Hl(4,4,Z1.bind(null,u,i),c)}function Ef(){}function e6(i,u){var c=Nn();u=u===void 0?null:u;var h=c.memoizedState;return h!==null&&u!==null&&_f(u,h[1])?h[0]:(c.memoizedState=[i,u],i)}function t6(i,u){var c=Nn();u=u===void 0?null:u;var h=c.memoizedState;return h!==null&&u!==null&&_f(u,h[1])?h[0]:(i=i(),c.memoizedState=[i,u],i)}function n6(i,u,c){return(Ya&21)===0?(i.baseState&&(i.baseState=!1,dn=!0),i.memoizedState=c):(Xn(c,u)||(c=kb(),dt.lanes|=c,Qa|=c,i.baseState=!0),u)}function bC(i,u){var c=Ze;Ze=c!==0&&4>c?c:4,i(!0);var h=Mf.transition;Mf.transition={};try{i(!1),u()}finally{Ze=c,Mf.transition=h}}function r6(){return Nn().memoizedState}function IC(i,u,c){var h=ga(i);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},a6(i))i6(u,c);else if(c=N1(i,u,c,h),c!==null){var y=nn();nr(c,i,h,y),o6(c,u,h)}}function xC(i,u,c){var h=ga(i),y={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(a6(i))i6(u,y);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=u.lastRenderedReducer,x!==null))try{var k=u.lastRenderedState,L=x(k,c);if(y.hasEagerState=!0,y.eagerState=L,Xn(L,k)){var z=u.interleaved;z===null?(y.next=y,If(u)):(y.next=z.next,z.next=y),u.interleaved=y;return}}catch{}finally{}c=N1(i,u,y,h),c!==null&&(y=nn(),nr(c,i,h,y),o6(c,u,h))}}function a6(i){var u=i.alternate;return i===dt||u!==null&&u===dt}function i6(i,u){_u=jl=!0;var c=i.pending;c===null?u.next=u:(u.next=c.next,c.next=u),i.pending=u}function o6(i,u,c){if((c&4194240)!==0){var h=u.lanes;h&=i.pendingLanes,c|=h,u.lanes=c,T0(i,c)}}var Dl={readContext:Tn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},BC={readContext:Tn,useCallback:function(i,u){return hr().memoizedState=[i,u===void 0?null:u],i},useContext:Tn,useEffect:Y1,useImperativeHandle:function(i,u,c){return c=c!=null?c.concat([i]):null,Rl(4194308,4,Z1.bind(null,u,i),c)},useLayoutEffect:function(i,u){return Rl(4194308,4,i,u)},useInsertionEffect:function(i,u){return Rl(4,2,i,u)},useMemo:function(i,u){var c=hr();return u=u===void 0?null:u,i=i(),c.memoizedState=[i,u],i},useReducer:function(i,u,c){var h=hr();return u=c!==void 0?c(u):u,h.memoizedState=h.baseState=u,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:u},h.queue=i,i=i.dispatch=IC.bind(null,dt,i),[h.memoizedState,i]},useRef:function(i){var u=hr();return i={current:i},u.memoizedState=i},useState:G1,useDebugValue:Ef,useDeferredValue:function(i){return hr().memoizedState=i},useTransition:function(){var i=G1(!1),u=i[0];return i=bC.bind(null,i[1]),hr().memoizedState=i,[u,i]},useMutableSource:function(){},useSyncExternalStore:function(i,u,c){var h=dt,y=hr();if(ct){if(c===void 0)throw Error(n(407));c=c()}else{if(c=u(),$t===null)throw Error(n(349));(Ya&30)!==0||q1(h,u,c)}y.memoizedState=c;var x={value:c,getSnapshot:u};return y.queue=x,Y1(z1.bind(null,h,x,i),[i]),h.flags|=2048,Wu(9,F1.bind(null,h,x,c,u),void 0,null),c},useId:function(){var i=hr(),u=$t.identifierPrefix;if(ct){var c=Cr,h=Wr;c=(h&~(1<<32-Qn(h)-1)).toString(32)+c,u=":"+u+"R"+c,c=Au++,0<c&&(u+="H"+c.toString(32)),u+=":"}else c=gC++,u=":"+u+"r"+c.toString(32)+":";return i.memoizedState=u},unstable_isNewReconciler:!1},wC={readContext:Tn,useCallback:e6,useContext:Tn,useEffect:kf,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:X1,useMemo:t6,useReducer:Wf,useRef:K1,useState:function(){return Wf(Ou)},useDebugValue:Ef,useDeferredValue:function(i){var u=Nn();return n6(u,kt.memoizedState,i)},useTransition:function(){var i=Wf(Ou)[0],u=Nn().memoizedState;return[i,u]},useMutableSource:$1,useSyncExternalStore:L1,useId:r6,unstable_isNewReconciler:!1},PC={readContext:Tn,useCallback:e6,useContext:Tn,useEffect:kf,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:X1,useMemo:t6,useReducer:Cf,useRef:K1,useState:function(){return Cf(Ou)},useDebugValue:Ef,useDeferredValue:function(i){var u=Nn();return kt===null?u.memoizedState=i:n6(u,kt.memoizedState,i)},useTransition:function(){var i=Cf(Ou)[0],u=Nn().memoizedState;return[i,u]},useMutableSource:$1,useSyncExternalStore:L1,useId:r6,unstable_isNewReconciler:!1};function Jn(i,u){if(i&&i.defaultProps){u=X({},u),i=i.defaultProps;for(var c in i)u[c]===void 0&&(u[c]=i[c]);return u}return u}function Tf(i,u,c,h){u=i.memoizedState,c=c(h,u),c=c==null?u:X({},u,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var $l={isMounted:function(i){return(i=i._reactInternals)?qa(i)===i:!1},enqueueSetState:function(i,u,c){i=i._reactInternals;var h=nn(),y=ga(i),x=Er(h,y);x.payload=u,c!=null&&(x.callback=c),u=ha(i,x,y),u!==null&&(nr(u,i,y,h),kl(u,i,y))},enqueueReplaceState:function(i,u,c){i=i._reactInternals;var h=nn(),y=ga(i),x=Er(h,y);x.tag=1,x.payload=u,c!=null&&(x.callback=c),u=ha(i,x,y),u!==null&&(nr(u,i,y,h),kl(u,i,y))},enqueueForceUpdate:function(i,u){i=i._reactInternals;var c=nn(),h=ga(i),y=Er(c,h);y.tag=2,u!=null&&(y.callback=u),u=ha(i,y,h),u!==null&&(nr(u,i,h,c),kl(u,i,h))}};function u6(i,u,c,h,y,x,k){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,x,k):u.prototype&&u.prototype.isPureReactComponent?!vu(c,h)||!vu(y,x):!0}function s6(i,u,c){var h=!1,y=pa,x=u.contextType;return typeof x=="object"&&x!==null?x=Tn(x):(y=fn(u)?za:Yt.current,h=u.contextTypes,x=(h=h!=null)?Ri(i,y):pa),u=new u(c,x),i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$l,i.stateNode=u,u._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=y,i.__reactInternalMemoizedMaskedChildContext=x),u}function l6(i,u,c,h){i=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(c,h),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(c,h),u.state!==i&&$l.enqueueReplaceState(u,u.state,null)}function Nf(i,u,c,h){var y=i.stateNode;y.props=c,y.state=i.memoizedState,y.refs={},xf(i);var x=u.contextType;typeof x=="object"&&x!==null?y.context=Tn(x):(x=fn(u)?za:Yt.current,y.context=Ri(i,x)),y.state=i.memoizedState,x=u.getDerivedStateFromProps,typeof x=="function"&&(Tf(i,u,x,c),y.state=i.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(u=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),u!==y.state&&$l.enqueueReplaceState(y,y.state,null),El(i,c,y,h),y.state=i.memoizedState),typeof y.componentDidMount=="function"&&(i.flags|=4194308)}function Ui(i,u){try{var c="",h=u;do c+=he(h),h=h.return;while(h);var y=c}catch(x){y=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:u,stack:y,digest:null}}function jf(i,u,c){return{value:i,source:null,stack:c??null,digest:u??null}}function Rf(i,u){try{console.error(u.value)}catch(c){setTimeout(function(){throw c})}}var SC=typeof WeakMap=="function"?WeakMap:Map;function c6(i,u,c){c=Er(-1,c),c.tag=3,c.payload={element:null};var h=u.value;return c.callback=function(){Gl||(Gl=!0,Zf=h),Rf(i,u)},c}function p6(i,u,c){c=Er(-1,c),c.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var y=u.value;c.payload=function(){return h(y)},c.callback=function(){Rf(i,u)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(c.callback=function(){Rf(i,u),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),c}function f6(i,u,c){var h=i.pingCache;if(h===null){h=i.pingCache=new SC;var y=new Set;h.set(u,y)}else y=h.get(u),y===void 0&&(y=new Set,h.set(u,y));y.has(c)||(y.add(c),i=DC.bind(null,i,u,c),u.then(i,i))}function d6(i){do{var u;if((u=i.tag===13)&&(u=i.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return i;i=i.return}while(i!==null);return null}function h6(i,u,c,h,y){return(i.mode&1)===0?(i===u?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(u=Er(-1,1),u.tag=2,ha(c,u,1))),c.lanes|=1),i):(i.flags|=65536,i.lanes=y,i)}var MC=O.ReactCurrentOwner,dn=!1;function tn(i,u,c,h){u.child=i===null?T1(u,null,c,h):Li(u,i.child,c,h)}function m6(i,u,c,h,y){c=c.render;var x=u.ref;return Fi(u,y),h=Af(i,u,c,h,x,y),c=Of(),i!==null&&!dn?(u.updateQueue=i.updateQueue,u.flags&=-2053,i.lanes&=~y,Tr(i,u,y)):(ct&&c&&pf(u),u.flags|=1,tn(i,u,h,y),u.child)}function v6(i,u,c,h,y){if(i===null){var x=c.type;return typeof x=="function"&&!i2(x)&&x.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(u.tag=15,u.type=x,y6(i,u,x,h,y)):(i=Jl(c.type,null,h,u,u.mode,y),i.ref=u.ref,i.return=u,u.child=i)}if(x=i.child,(i.lanes&y)===0){var k=x.memoizedProps;if(c=c.compare,c=c!==null?c:vu,c(k,h)&&i.ref===u.ref)return Tr(i,u,y)}return u.flags|=1,i=Ia(x,h),i.ref=u.ref,i.return=u,u.child=i}function y6(i,u,c,h,y){if(i!==null){var x=i.memoizedProps;if(vu(x,h)&&i.ref===u.ref)if(dn=!1,u.pendingProps=h=x,(i.lanes&y)!==0)(i.flags&131072)!==0&&(dn=!0);else return u.lanes=i.lanes,Tr(i,u,y)}return Hf(i,u,c,h,y)}function g6(i,u,c){var h=u.pendingProps,y=h.children,x=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Gi,Bn),Bn|=c;else{if((c&1073741824)===0)return i=x!==null?x.baseLanes|c:c,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:i,cachePool:null,transitions:null},u.updateQueue=null,nt(Gi,Bn),Bn|=i,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:c,nt(Gi,Bn),Bn|=h}else x!==null?(h=x.baseLanes|c,u.memoizedState=null):h=c,nt(Gi,Bn),Bn|=h;return tn(i,u,y,c),u.child}function b6(i,u){var c=u.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(u.flags|=512,u.flags|=2097152)}function Hf(i,u,c,h,y){var x=fn(c)?za:Yt.current;return x=Ri(u,x),Fi(u,y),c=Af(i,u,c,h,x,y),h=Of(),i!==null&&!dn?(u.updateQueue=i.updateQueue,u.flags&=-2053,i.lanes&=~y,Tr(i,u,y)):(ct&&h&&pf(u),u.flags|=1,tn(i,u,c,y),u.child)}function I6(i,u,c,h,y){if(fn(c)){var x=!0;Pl(u)}else x=!1;if(Fi(u,y),u.stateNode===null)ql(i,u),s6(u,c,h),Nf(u,c,h,y),h=!0;else if(i===null){var k=u.stateNode,L=u.memoizedProps;k.props=L;var z=k.context,te=c.contextType;typeof te=="object"&&te!==null?te=Tn(te):(te=fn(c)?za:Yt.current,te=Ri(u,te));var oe=c.getDerivedStateFromProps,se=typeof oe=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(L!==h||z!==te)&&l6(u,k,h,te),da=!1;var ie=u.memoizedState;k.state=ie,El(u,h,k,y),z=u.memoizedState,L!==h||ie!==z||pn.current||da?(typeof oe=="function"&&(Tf(u,c,oe,h),z=u.memoizedState),(L=da||u6(u,c,L,h,ie,z,te))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=h,u.memoizedState=z),k.props=h,k.state=z,k.context=te,h=L):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),h=!1)}else{k=u.stateNode,j1(i,u),L=u.memoizedProps,te=u.type===u.elementType?L:Jn(u.type,L),k.props=te,se=u.pendingProps,ie=k.context,z=c.contextType,typeof z=="object"&&z!==null?z=Tn(z):(z=fn(c)?za:Yt.current,z=Ri(u,z));var me=c.getDerivedStateFromProps;(oe=typeof me=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(L!==se||ie!==z)&&l6(u,k,h,z),da=!1,ie=u.memoizedState,k.state=ie,El(u,h,k,y);var xe=u.memoizedState;L!==se||ie!==xe||pn.current||da?(typeof me=="function"&&(Tf(u,c,me,h),xe=u.memoizedState),(te=da||u6(u,c,te,h,ie,xe,z)||!1)?(oe||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(h,xe,z),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(h,xe,z)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||L===i.memoizedProps&&ie===i.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||L===i.memoizedProps&&ie===i.memoizedState||(u.flags|=1024),u.memoizedProps=h,u.memoizedState=xe),k.props=h,k.state=xe,k.context=z,h=te):(typeof k.componentDidUpdate!="function"||L===i.memoizedProps&&ie===i.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||L===i.memoizedProps&&ie===i.memoizedState||(u.flags|=1024),h=!1)}return Df(i,u,c,h,x,y)}function Df(i,u,c,h,y,x){b6(i,u);var k=(u.flags&128)!==0;if(!h&&!k)return y&&S1(u,c,!1),Tr(i,u,x);h=u.stateNode,MC.current=u;var L=k&&typeof c.getDerivedStateFromError!="function"?null:h.render();return u.flags|=1,i!==null&&k?(u.child=Li(u,i.child,null,x),u.child=Li(u,null,L,x)):tn(i,u,L,x),u.memoizedState=h.state,y&&S1(u,c,!0),u.child}function x6(i){var u=i.stateNode;u.pendingContext?w1(i,u.pendingContext,u.pendingContext!==u.context):u.context&&w1(i,u.context,!1),Bf(i,u.containerInfo)}function B6(i,u,c,h,y){return $i(),mf(y),u.flags|=256,tn(i,u,c,h),u.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Lf(i){return{baseLanes:i,cachePool:null,transitions:null}}function w6(i,u,c){var h=u.pendingProps,y=ft.current,x=!1,k=(u.flags&128)!==0,L;if((L=k)||(L=i!==null&&i.memoizedState===null?!1:(y&2)!==0),L?(x=!0,u.flags&=-129):(i===null||i.memoizedState!==null)&&(y|=1),nt(ft,y&1),i===null)return hf(u),i=u.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((u.mode&1)===0?u.lanes=1:i.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=h.children,i=h.fallback,x?(h=u.mode,x=u.child,k={mode:"hidden",children:k},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=k):x=ec(k,h,0,null),i=ei(i,h,c,null),x.return=u,i.return=u,x.sibling=i,u.child=x,u.child.memoizedState=Lf(c),u.memoizedState=$f,i):qf(u,k));if(y=i.memoizedState,y!==null&&(L=y.dehydrated,L!==null))return _C(i,u,k,h,L,y,c);if(x){x=h.fallback,k=u.mode,y=i.child,L=y.sibling;var z={mode:"hidden",children:h.children};return(k&1)===0&&u.child!==y?(h=u.child,h.childLanes=0,h.pendingProps=z,u.deletions=null):(h=Ia(y,z),h.subtreeFlags=y.subtreeFlags&14680064),L!==null?x=Ia(L,x):(x=ei(x,k,c,null),x.flags|=2),x.return=u,h.return=u,h.sibling=x,u.child=h,h=x,x=u.child,k=i.child.memoizedState,k=k===null?Lf(c):{baseLanes:k.baseLanes|c,cachePool:null,transitions:k.transitions},x.memoizedState=k,x.childLanes=i.childLanes&~c,u.memoizedState=$f,h}return x=i.child,i=x.sibling,h=Ia(x,{mode:"visible",children:h.children}),(u.mode&1)===0&&(h.lanes=c),h.return=u,h.sibling=null,i!==null&&(c=u.deletions,c===null?(u.deletions=[i],u.flags|=16):c.push(i)),u.child=h,u.memoizedState=null,h}function qf(i,u){return u=ec({mode:"visible",children:u},i.mode,0,null),u.return=i,i.child=u}function Ll(i,u,c,h){return h!==null&&mf(h),Li(u,i.child,null,c),i=qf(u,u.pendingProps.children),i.flags|=2,u.memoizedState=null,i}function _C(i,u,c,h,y,x,k){if(c)return u.flags&256?(u.flags&=-257,h=jf(Error(n(422))),Ll(i,u,k,h)):u.memoizedState!==null?(u.child=i.child,u.flags|=128,null):(x=h.fallback,y=u.mode,h=ec({mode:"visible",children:h.children},y,0,null),x=ei(x,y,k,null),x.flags|=2,h.return=u,x.return=u,h.sibling=x,u.child=h,(u.mode&1)!==0&&Li(u,i.child,null,k),u.child.memoizedState=Lf(k),u.memoizedState=$f,x);if((u.mode&1)===0)return Ll(i,u,k,null);if(y.data==="$!"){if(h=y.nextSibling&&y.nextSibling.dataset,h)var L=h.dgst;return h=L,x=Error(n(419)),h=jf(x,h,void 0),Ll(i,u,k,h)}if(L=(k&i.childLanes)!==0,dn||L){if(h=$t,h!==null){switch(k&-k){case 4:y=2;break;case 16:y=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:y=32;break;case 536870912:y=268435456;break;default:y=0}y=(y&(h.suspendedLanes|k))!==0?0:y,y!==0&&y!==x.retryLane&&(x.retryLane=y,kr(i,y),nr(h,i,y,-1))}return a2(),h=jf(Error(n(421))),Ll(i,u,k,h)}return y.data==="$?"?(u.flags|=128,u.child=i.child,u=$C.bind(null,i),y._reactRetry=u,null):(i=x.treeContext,xn=la(y.nextSibling),In=u,ct=!0,Zn=null,i!==null&&(kn[En++]=Wr,kn[En++]=Cr,kn[En++]=Ua,Wr=i.id,Cr=i.overflow,Ua=u),u=qf(u,h.children),u.flags|=4096,u)}function P6(i,u,c){i.lanes|=u;var h=i.alternate;h!==null&&(h.lanes|=u),bf(i.return,u,c)}function Ff(i,u,c,h,y){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:y}:(x.isBackwards=u,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=c,x.tailMode=y)}function S6(i,u,c){var h=u.pendingProps,y=h.revealOrder,x=h.tail;if(tn(i,u,h.children,c),h=ft.current,(h&2)!==0)h=h&1|2,u.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=u.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&P6(i,c,u);else if(i.tag===19)P6(i,c,u);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===u)break e;for(;i.sibling===null;){if(i.return===null||i.return===u)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(nt(ft,h),(u.mode&1)===0)u.memoizedState=null;else switch(y){case"forwards":for(c=u.child,y=null;c!==null;)i=c.alternate,i!==null&&Tl(i)===null&&(y=c),c=c.sibling;c=y,c===null?(y=u.child,u.child=null):(y=c.sibling,c.sibling=null),Ff(u,!1,y,c,x);break;case"backwards":for(c=null,y=u.child,u.child=null;y!==null;){if(i=y.alternate,i!==null&&Tl(i)===null){u.child=y;break}i=y.sibling,y.sibling=c,c=y,y=i}Ff(u,!0,c,null,x);break;case"together":Ff(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function ql(i,u){(u.mode&1)===0&&i!==null&&(i.alternate=null,u.alternate=null,u.flags|=2)}function Tr(i,u,c){if(i!==null&&(u.dependencies=i.dependencies),Qa|=u.lanes,(c&u.childLanes)===0)return null;if(i!==null&&u.child!==i.child)throw Error(n(153));if(u.child!==null){for(i=u.child,c=Ia(i,i.pendingProps),u.child=c,c.return=u;i.sibling!==null;)i=i.sibling,c=c.sibling=Ia(i,i.pendingProps),c.return=u;c.sibling=null}return u.child}function AC(i,u,c){switch(u.tag){case 3:x6(u),$i();break;case 5:D1(u);break;case 1:fn(u.type)&&Pl(u);break;case 4:Bf(u,u.stateNode.containerInfo);break;case 10:var h=u.type._context,y=u.memoizedProps.value;nt(Wl,h._currentValue),h._currentValue=y;break;case 13:if(h=u.memoizedState,h!==null)return h.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(c&u.child.childLanes)!==0?w6(i,u,c):(nt(ft,ft.current&1),i=Tr(i,u,c),i!==null?i.sibling:null);nt(ft,ft.current&1);break;case 19:if(h=(c&u.childLanes)!==0,(i.flags&128)!==0){if(h)return S6(i,u,c);u.flags|=128}if(y=u.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),nt(ft,ft.current),h)break;return null;case 22:case 23:return u.lanes=0,g6(i,u,c)}return Tr(i,u,c)}var M6,zf,_6,A6;M6=function(i,u){for(var c=u.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===u)break;for(;c.sibling===null;){if(c.return===null||c.return===u)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},zf=function(){},_6=function(i,u,c,h){var y=i.memoizedProps;if(y!==h){i=u.stateNode,Ka(dr.current);var x=null;switch(c){case"input":y=Pe(i,y),h=Pe(i,h),x=[];break;case"select":y=X({},y,{value:void 0}),h=X({},h,{value:void 0}),x=[];break;case"textarea":y=vt(i,y),h=vt(i,h),x=[];break;default:typeof y.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=xl)}w0(c,h);var k;c=null;for(te in y)if(!h.hasOwnProperty(te)&&y.hasOwnProperty(te)&&y[te]!=null)if(te==="style"){var L=y[te];for(k in L)L.hasOwnProperty(k)&&(c||(c={}),c[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?x||(x=[]):(x=x||[]).push(te,null));for(te in h){var z=h[te];if(L=y!=null?y[te]:void 0,h.hasOwnProperty(te)&&z!==L&&(z!=null||L!=null))if(te==="style")if(L){for(k in L)!L.hasOwnProperty(k)||z&&z.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in z)z.hasOwnProperty(k)&&L[k]!==z[k]&&(c||(c={}),c[k]=z[k])}else c||(x||(x=[]),x.push(te,c)),c=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,L=L?L.__html:void 0,z!=null&&L!==z&&(x=x||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&ot("scroll",i),x||L===z||(x=[])):(x=x||[]).push(te,z))}c&&(x=x||[]).push("style",c);var te=x;(u.updateQueue=te)&&(u.flags|=4)}},A6=function(i,u,c,h){c!==h&&(u.flags|=4)};function Cu(i,u){if(!ct)switch(i.tailMode){case"hidden":u=i.tail;for(var c=null;u!==null;)u.alternate!==null&&(c=u),u=u.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?u||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Xt(i){var u=i.alternate!==null&&i.alternate.child===i.child,c=0,h=0;if(u)for(var y=i.child;y!==null;)c|=y.lanes|y.childLanes,h|=y.subtreeFlags&14680064,h|=y.flags&14680064,y.return=i,y=y.sibling;else for(y=i.child;y!==null;)c|=y.lanes|y.childLanes,h|=y.subtreeFlags,h|=y.flags,y.return=i,y=y.sibling;return i.subtreeFlags|=h,i.childLanes=c,u}function OC(i,u,c){var h=u.pendingProps;switch(ff(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&wl(),Xt(u),null;case 3:return h=u.stateNode,zi(),ut(pn),ut(Yt),Sf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Al(u)?u.flags|=4:i===null||i.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Zn!==null&&(t2(Zn),Zn=null))),zf(i,u),Xt(u),null;case 5:wf(u);var y=Ka(Mu.current);if(c=u.type,i!==null&&u.stateNode!=null)_6(i,u,c,h,y),i.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!h){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(i=Ka(dr.current),Al(u)){h=u.stateNode,c=u.type;var x=u.memoizedProps;switch(h[fr]=u,h[xu]=x,i=(u.mode&1)!==0,c){case"dialog":ot("cancel",h),ot("close",h);break;case"iframe":case"object":case"embed":ot("load",h);break;case"video":case"audio":for(y=0;y<gu.length;y++)ot(gu[y],h);break;case"source":ot("error",h);break;case"img":case"image":case"link":ot("error",h),ot("load",h);break;case"details":ot("toggle",h);break;case"input":Ce(h,x),ot("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},ot("invalid",h);break;case"textarea":On(h,x),ot("invalid",h)}w0(c,x),y=null;for(var k in x)if(x.hasOwnProperty(k)){var L=x[k];k==="children"?typeof L=="string"?h.textContent!==L&&(x.suppressHydrationWarning!==!0&&Il(h.textContent,L,i),y=["children",L]):typeof L=="number"&&h.textContent!==""+L&&(x.suppressHydrationWarning!==!0&&Il(h.textContent,L,i),y=["children",""+L]):a.hasOwnProperty(k)&&L!=null&&k==="onScroll"&&ot("scroll",h)}switch(c){case"input":pe(h),He(h,x,!0);break;case"textarea":pe(h),Kt(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=xl)}h=y,u.updateQueue=h,h!==null&&(u.flags|=4)}else{k=y.nodeType===9?y:y.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Bt(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=k.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=k.createElement(c,{is:h.is}):(i=k.createElement(c),c==="select"&&(k=i,h.multiple?k.multiple=!0:h.size&&(k.size=h.size))):i=k.createElementNS(i,c),i[fr]=u,i[xu]=h,M6(i,u,!1,!1),u.stateNode=i;e:{switch(k=P0(c,h),c){case"dialog":ot("cancel",i),ot("close",i),y=h;break;case"iframe":case"object":case"embed":ot("load",i),y=h;break;case"video":case"audio":for(y=0;y<gu.length;y++)ot(gu[y],i);y=h;break;case"source":ot("error",i),y=h;break;case"img":case"image":case"link":ot("error",i),ot("load",i),y=h;break;case"details":ot("toggle",i),y=h;break;case"input":Ce(i,h),y=Pe(i,h),ot("invalid",i);break;case"option":y=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},y=X({},h,{value:void 0}),ot("invalid",i);break;case"textarea":On(i,h),y=vt(i,h),ot("invalid",i);break;default:y=h}w0(c,y),L=y;for(x in L)if(L.hasOwnProperty(x)){var z=L[x];x==="style"?eu(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Si(i,z)):x==="children"?typeof z=="string"?(c!=="textarea"||z!=="")&&ta(i,z):typeof z=="number"&&ta(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&ot("scroll",i):z!=null&&_(i,x,z,k))}switch(c){case"input":pe(i),He(i,h,!1);break;case"textarea":pe(i),Kt(i);break;case"option":h.value!=null&&i.setAttribute("value",""+fe(h.value));break;case"select":i.multiple=!!h.multiple,x=h.value,x!=null?xt(i,!!h.multiple,x,!1):h.defaultValue!=null&&xt(i,!!h.multiple,h.defaultValue,!0);break;default:typeof y.onClick=="function"&&(i.onclick=xl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(i&&u.stateNode!=null)A6(i,u,i.memoizedProps,h);else{if(typeof h!="string"&&u.stateNode===null)throw Error(n(166));if(c=Ka(Mu.current),Ka(dr.current),Al(u)){if(h=u.stateNode,c=u.memoizedProps,h[fr]=u,(x=h.nodeValue!==c)&&(i=In,i!==null))switch(i.tag){case 3:Il(h.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Il(h.nodeValue,c,(i.mode&1)!==0)}x&&(u.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[fr]=u,u.stateNode=h}return Xt(u),null;case 13:if(ut(ft),h=u.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ct&&xn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)C1(),$i(),u.flags|=98560,x=!1;else if(x=Al(u),h!==null&&h.dehydrated!==null){if(i===null){if(!x)throw Error(n(318));if(x=u.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[fr]=u}else $i(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),x=!1}else Zn!==null&&(t2(Zn),Zn=null),x=!0;if(!x)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=c,u):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(u.child.flags|=8192,(u.mode&1)!==0&&(i===null||(ft.current&1)!==0?Et===0&&(Et=3):a2())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return zi(),zf(i,u),i===null&&bu(u.stateNode.containerInfo),Xt(u),null;case 10:return gf(u.type._context),Xt(u),null;case 17:return fn(u.type)&&wl(),Xt(u),null;case 19:if(ut(ft),x=u.memoizedState,x===null)return Xt(u),null;if(h=(u.flags&128)!==0,k=x.rendering,k===null)if(h)Cu(x,!1);else{if(Et!==0||i!==null&&(i.flags&128)!==0)for(i=u.child;i!==null;){if(k=Tl(i),k!==null){for(u.flags|=128,Cu(x,!1),h=k.updateQueue,h!==null&&(u.updateQueue=h,u.flags|=4),u.subtreeFlags=0,h=c,c=u.child;c!==null;)x=c,i=h,x.flags&=14680066,k=x.alternate,k===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=k.childLanes,x.lanes=k.lanes,x.child=k.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=k.memoizedProps,x.memoizedState=k.memoizedState,x.updateQueue=k.updateQueue,x.type=k.type,i=k.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return nt(ft,ft.current&1|2),u.child}i=i.sibling}x.tail!==null&&wt()>Ki&&(u.flags|=128,h=!0,Cu(x,!1),u.lanes=4194304)}else{if(!h)if(i=Tl(k),i!==null){if(u.flags|=128,h=!0,c=i.updateQueue,c!==null&&(u.updateQueue=c,u.flags|=4),Cu(x,!0),x.tail===null&&x.tailMode==="hidden"&&!k.alternate&&!ct)return Xt(u),null}else 2*wt()-x.renderingStartTime>Ki&&c!==1073741824&&(u.flags|=128,h=!0,Cu(x,!1),u.lanes=4194304);x.isBackwards?(k.sibling=u.child,u.child=k):(c=x.last,c!==null?c.sibling=k:u.child=k,x.last=k)}return x.tail!==null?(u=x.tail,x.rendering=u,x.tail=u.sibling,x.renderingStartTime=wt(),u.sibling=null,c=ft.current,nt(ft,h?c&1|2:c&1),u):(Xt(u),null);case 22:case 23:return r2(),h=u.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(u.flags|=8192),h&&(u.mode&1)!==0?(Bn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function WC(i,u){switch(ff(u),u.tag){case 1:return fn(u.type)&&wl(),i=u.flags,i&65536?(u.flags=i&-65537|128,u):null;case 3:return zi(),ut(pn),ut(Yt),Sf(),i=u.flags,(i&65536)!==0&&(i&128)===0?(u.flags=i&-65537|128,u):null;case 5:return wf(u),null;case 13:if(ut(ft),i=u.memoizedState,i!==null&&i.dehydrated!==null){if(u.alternate===null)throw Error(n(340));$i()}return i=u.flags,i&65536?(u.flags=i&-65537|128,u):null;case 19:return ut(ft),null;case 4:return zi(),null;case 10:return gf(u.type._context),null;case 22:case 23:return r2(),null;case 24:return null;default:return null}}var Fl=!1,Zt=!1,CC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Vi(i,u){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){gt(i,u,h)}else c.current=null}function Uf(i,u,c){try{c()}catch(h){gt(i,u,h)}}var O6=!1;function kC(i,u){if(nf=ll,i=u1(),K0(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var y=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{c.nodeType,x.nodeType}catch{c=null;break e}var k=0,L=-1,z=-1,te=0,oe=0,se=i,ie=null;t:for(;;){for(var me;se!==c||y!==0&&se.nodeType!==3||(L=k+y),se!==x||h!==0&&se.nodeType!==3||(z=k+h),se.nodeType===3&&(k+=se.nodeValue.length),(me=se.firstChild)!==null;)ie=se,se=me;for(;;){if(se===i)break t;if(ie===c&&++te===y&&(L=k),ie===x&&++oe===h&&(z=k),(me=se.nextSibling)!==null)break;se=ie,ie=se.parentNode}se=me}c=L===-1||z===-1?null:{start:L,end:z}}else c=null}c=c||{start:0,end:0}}else c=null;for(rf={focusedElem:i,selectionRange:c},ll=!1,be=u;be!==null;)if(u=be,i=u.child,(u.subtreeFlags&1028)!==0&&i!==null)i.return=u,be=i;else for(;be!==null;){u=be;try{var xe=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(xe!==null){var Se=xe.memoizedProps,Pt=xe.memoizedState,J=u.stateNode,K=J.getSnapshotBeforeUpdate(u.elementType===u.type?Se:Jn(u.type,Se),Pt);J.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ce){gt(u,u.return,ce)}if(i=u.sibling,i!==null){i.return=u.return,be=i;break}be=u.return}return xe=O6,O6=!1,xe}function ku(i,u,c){var h=u.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var y=h=h.next;do{if((y.tag&i)===i){var x=y.destroy;y.destroy=void 0,x!==void 0&&Uf(u,c,x)}y=y.next}while(y!==h)}}function zl(i,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var c=u=u.next;do{if((c.tag&i)===i){var h=c.create;c.destroy=h()}c=c.next}while(c!==u)}}function Vf(i){var u=i.ref;if(u!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof u=="function"?u(i):u.current=i}}function W6(i){var u=i.alternate;u!==null&&(i.alternate=null,W6(u)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(u=i.stateNode,u!==null&&(delete u[fr],delete u[xu],delete u[sf],delete u[hC],delete u[mC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function C6(i){return i.tag===5||i.tag===3||i.tag===4}function k6(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||C6(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Gf(i,u,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,u?c.nodeType===8?c.parentNode.insertBefore(i,u):c.insertBefore(i,u):(c.nodeType===8?(u=c.parentNode,u.insertBefore(i,c)):(u=c,u.appendChild(i)),c=c._reactRootContainer,c!=null||u.onclick!==null||(u.onclick=xl));else if(h!==4&&(i=i.child,i!==null))for(Gf(i,u,c),i=i.sibling;i!==null;)Gf(i,u,c),i=i.sibling}function Kf(i,u,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,u?c.insertBefore(i,u):c.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Kf(i,u,c),i=i.sibling;i!==null;)Kf(i,u,c),i=i.sibling}var Ut=null,er=!1;function ma(i,u,c){for(c=c.child;c!==null;)E6(i,u,c),c=c.sibling}function E6(i,u,c){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(rl,c)}catch{}switch(c.tag){case 5:Zt||Vi(c,u);case 6:var h=Ut,y=er;Ut=null,ma(i,u,c),Ut=h,er=y,Ut!==null&&(er?(i=Ut,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Ut.removeChild(c.stateNode));break;case 18:Ut!==null&&(er?(i=Ut,c=c.stateNode,i.nodeType===8?uf(i.parentNode,c):i.nodeType===1&&uf(i,c),cu(i)):uf(Ut,c.stateNode));break;case 4:h=Ut,y=er,Ut=c.stateNode.containerInfo,er=!0,ma(i,u,c),Ut=h,er=y;break;case 0:case 11:case 14:case 15:if(!Zt&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){y=h=h.next;do{var x=y,k=x.destroy;x=x.tag,k!==void 0&&((x&2)!==0||(x&4)!==0)&&Uf(c,u,k),y=y.next}while(y!==h)}ma(i,u,c);break;case 1:if(!Zt&&(Vi(c,u),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(L){gt(c,u,L)}ma(i,u,c);break;case 21:ma(i,u,c);break;case 22:c.mode&1?(Zt=(h=Zt)||c.memoizedState!==null,ma(i,u,c),Zt=h):ma(i,u,c);break;default:ma(i,u,c)}}function T6(i){var u=i.updateQueue;if(u!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new CC),u.forEach(function(h){var y=LC.bind(null,i,h);c.has(h)||(c.add(h),h.then(y,y))})}}function tr(i,u){var c=u.deletions;if(c!==null)for(var h=0;h<c.length;h++){var y=c[h];try{var x=i,k=u,L=k;e:for(;L!==null;){switch(L.tag){case 5:Ut=L.stateNode,er=!1;break e;case 3:Ut=L.stateNode.containerInfo,er=!0;break e;case 4:Ut=L.stateNode.containerInfo,er=!0;break e}L=L.return}if(Ut===null)throw Error(n(160));E6(x,k,y),Ut=null,er=!1;var z=y.alternate;z!==null&&(z.return=null),y.return=null}catch(te){gt(y,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)N6(u,i),u=u.sibling}function N6(i,u){var c=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(tr(u,i),mr(i),h&4){try{ku(3,i,i.return),zl(3,i)}catch(Se){gt(i,i.return,Se)}try{ku(5,i,i.return)}catch(Se){gt(i,i.return,Se)}}break;case 1:tr(u,i),mr(i),h&512&&c!==null&&Vi(c,c.return);break;case 5:if(tr(u,i),mr(i),h&512&&c!==null&&Vi(c,c.return),i.flags&32){var y=i.stateNode;try{ta(y,"")}catch(Se){gt(i,i.return,Se)}}if(h&4&&(y=i.stateNode,y!=null)){var x=i.memoizedProps,k=c!==null?c.memoizedProps:x,L=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{L==="input"&&x.type==="radio"&&x.name!=null&&_e(y,x),P0(L,k);var te=P0(L,x);for(k=0;k<z.length;k+=2){var oe=z[k],se=z[k+1];oe==="style"?eu(y,se):oe==="dangerouslySetInnerHTML"?Si(y,se):oe==="children"?ta(y,se):_(y,oe,se,te)}switch(L){case"input":qe(y,x);break;case"textarea":yt(y,x);break;case"select":var ie=y._wrapperState.wasMultiple;y._wrapperState.wasMultiple=!!x.multiple;var me=x.value;me!=null?xt(y,!!x.multiple,me,!1):ie!==!!x.multiple&&(x.defaultValue!=null?xt(y,!!x.multiple,x.defaultValue,!0):xt(y,!!x.multiple,x.multiple?[]:"",!1))}y[xu]=x}catch(Se){gt(i,i.return,Se)}}break;case 6:if(tr(u,i),mr(i),h&4){if(i.stateNode===null)throw Error(n(162));y=i.stateNode,x=i.memoizedProps;try{y.nodeValue=x}catch(Se){gt(i,i.return,Se)}}break;case 3:if(tr(u,i),mr(i),h&4&&c!==null&&c.memoizedState.isDehydrated)try{cu(u.containerInfo)}catch(Se){gt(i,i.return,Se)}break;case 4:tr(u,i),mr(i);break;case 13:tr(u,i),mr(i),y=i.child,y.flags&8192&&(x=y.memoizedState!==null,y.stateNode.isHidden=x,!x||y.alternate!==null&&y.alternate.memoizedState!==null||(Xf=wt())),h&4&&T6(i);break;case 22:if(oe=c!==null&&c.memoizedState!==null,i.mode&1?(Zt=(te=Zt)||oe,tr(u,i),Zt=te):tr(u,i),mr(i),h&8192){if(te=i.memoizedState!==null,(i.stateNode.isHidden=te)&&!oe&&(i.mode&1)!==0)for(be=i,oe=i.child;oe!==null;){for(se=be=oe;be!==null;){switch(ie=be,me=ie.child,ie.tag){case 0:case 11:case 14:case 15:ku(4,ie,ie.return);break;case 1:Vi(ie,ie.return);var xe=ie.stateNode;if(typeof xe.componentWillUnmount=="function"){h=ie,c=ie.return;try{u=h,xe.props=u.memoizedProps,xe.state=u.memoizedState,xe.componentWillUnmount()}catch(Se){gt(h,c,Se)}}break;case 5:Vi(ie,ie.return);break;case 22:if(ie.memoizedState!==null){H6(se);continue}}me!==null?(me.return=ie,be=me):H6(se)}oe=oe.sibling}e:for(oe=null,se=i;;){if(se.tag===5){if(oe===null){oe=se;try{y=se.stateNode,te?(x=y.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(L=se.stateNode,z=se.memoizedProps.style,k=z!=null&&z.hasOwnProperty("display")?z.display:null,L.style.display=na("display",k))}catch(Se){gt(i,i.return,Se)}}}else if(se.tag===6){if(oe===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){gt(i,i.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===i)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===i)break e;for(;se.sibling===null;){if(se.return===null||se.return===i)break e;oe===se&&(oe=null),se=se.return}oe===se&&(oe=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,i),mr(i),h&4&&T6(i);break;case 21:break;default:tr(u,i),mr(i)}}function mr(i){var u=i.flags;if(u&2){try{e:{for(var c=i.return;c!==null;){if(C6(c)){var h=c;break e}c=c.return}throw Error(n(160))}switch(h.tag){case 5:var y=h.stateNode;h.flags&32&&(ta(y,""),h.flags&=-33);var x=k6(i);Kf(i,x,y);break;case 3:case 4:var k=h.stateNode.containerInfo,L=k6(i);Gf(i,L,k);break;default:throw Error(n(161))}}catch(z){gt(i,i.return,z)}i.flags&=-3}u&4096&&(i.flags&=-4097)}function EC(i,u,c){be=i,j6(i)}function j6(i,u,c){for(var h=(i.mode&1)!==0;be!==null;){var y=be,x=y.child;if(y.tag===22&&h){var k=y.memoizedState!==null||Fl;if(!k){var L=y.alternate,z=L!==null&&L.memoizedState!==null||Zt;L=Fl;var te=Zt;if(Fl=k,(Zt=z)&&!te)for(be=y;be!==null;)k=be,z=k.child,k.tag===22&&k.memoizedState!==null?D6(y):z!==null?(z.return=k,be=z):D6(y);for(;x!==null;)be=x,j6(x),x=x.sibling;be=y,Fl=L,Zt=te}R6(i)}else(y.subtreeFlags&8772)!==0&&x!==null?(x.return=y,be=x):R6(i)}}function R6(i){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var c=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||zl(5,u);break;case 1:var h=u.stateNode;if(u.flags&4&&!Zt)if(c===null)h.componentDidMount();else{var y=u.elementType===u.type?c.memoizedProps:Jn(u.type,c.memoizedProps);h.componentDidUpdate(y,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=u.updateQueue;x!==null&&H1(u,x,h);break;case 3:var k=u.updateQueue;if(k!==null){if(c=null,u.child!==null)switch(u.child.tag){case 5:c=u.child.stateNode;break;case 1:c=u.child.stateNode}H1(u,k,c)}break;case 5:var L=u.stateNode;if(c===null&&u.flags&4){c=L;var z=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&c.focus();break;case"img":z.src&&(c.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var oe=te.memoizedState;if(oe!==null){var se=oe.dehydrated;se!==null&&cu(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&Vf(u)}catch(ie){gt(u,u.return,ie)}}if(u===i){be=null;break}if(c=u.sibling,c!==null){c.return=u.return,be=c;break}be=u.return}}function H6(i){for(;be!==null;){var u=be;if(u===i){be=null;break}var c=u.sibling;if(c!==null){c.return=u.return,be=c;break}be=u.return}}function D6(i){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var c=u.return;try{zl(4,u)}catch(z){gt(u,c,z)}break;case 1:var h=u.stateNode;if(typeof h.componentDidMount=="function"){var y=u.return;try{h.componentDidMount()}catch(z){gt(u,y,z)}}var x=u.return;try{Vf(u)}catch(z){gt(u,x,z)}break;case 5:var k=u.return;try{Vf(u)}catch(z){gt(u,k,z)}}}catch(z){gt(u,u.return,z)}if(u===i){be=null;break}var L=u.sibling;if(L!==null){L.return=u.return,be=L;break}be=u.return}}var TC=Math.ceil,Ul=O.ReactCurrentDispatcher,Yf=O.ReactCurrentOwner,jn=O.ReactCurrentBatchConfig,ze=0,$t=null,At=null,Vt=0,Bn=0,Gi=ca(0),Et=0,Eu=null,Qa=0,Vl=0,Qf=0,Tu=null,hn=null,Xf=0,Ki=1/0,Nr=null,Gl=!1,Zf=null,va=null,Kl=!1,ya=null,Yl=0,Nu=0,Jf=null,Ql=-1,Xl=0;function nn(){return(ze&6)!==0?wt():Ql!==-1?Ql:Ql=wt()}function ga(i){return(i.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:yC.transition!==null?(Xl===0&&(Xl=kb()),Xl):(i=Ze,i!==0||(i=window.event,i=i===void 0?16:Lb(i.type)),i)}function nr(i,u,c,h){if(50<Nu)throw Nu=0,Jf=null,Error(n(185));iu(i,c,h),((ze&2)===0||i!==$t)&&(i===$t&&((ze&2)===0&&(Vl|=c),Et===4&&ba(i,Vt)),mn(i,h),c===1&&ze===0&&(u.mode&1)===0&&(Ki=wt()+500,Sl&&fa()))}function mn(i,u){var c=i.callbackNode;y4(i,u);var h=ol(i,i===$t?Vt:0);if(h===0)c!==null&&Ob(c),i.callbackNode=null,i.callbackPriority=0;else if(u=h&-h,i.callbackPriority!==u){if(c!=null&&Ob(c),u===1)i.tag===0?vC(L6.bind(null,i)):M1(L6.bind(null,i)),fC(function(){(ze&6)===0&&fa()}),c=null;else{switch(Eb(h)){case 1:c=C0;break;case 4:c=Wb;break;case 16:c=nl;break;case 536870912:c=Cb;break;default:c=nl}c=Y6(c,$6.bind(null,i))}i.callbackPriority=u,i.callbackNode=c}}function $6(i,u){if(Ql=-1,Xl=0,(ze&6)!==0)throw Error(n(327));var c=i.callbackNode;if(Yi()&&i.callbackNode!==c)return null;var h=ol(i,i===$t?Vt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||u)u=Zl(i,h);else{u=h;var y=ze;ze|=2;var x=F6();($t!==i||Vt!==u)&&(Nr=null,Ki=wt()+500,Za(i,u));do try{RC();break}catch(L){q6(i,L)}while(!0);yf(),Ul.current=x,ze=y,At!==null?u=0:($t=null,Vt=0,u=Et)}if(u!==0){if(u===2&&(y=k0(i),y!==0&&(h=y,u=e2(i,y))),u===1)throw c=Eu,Za(i,0),ba(i,h),mn(i,wt()),c;if(u===6)ba(i,h);else{if(y=i.current.alternate,(h&30)===0&&!NC(y)&&(u=Zl(i,h),u===2&&(x=k0(i),x!==0&&(h=x,u=e2(i,x))),u===1))throw c=Eu,Za(i,0),ba(i,h),mn(i,wt()),c;switch(i.finishedWork=y,i.finishedLanes=h,u){case 0:case 1:throw Error(n(345));case 2:Ja(i,hn,Nr);break;case 3:if(ba(i,h),(h&130023424)===h&&(u=Xf+500-wt(),10<u)){if(ol(i,0)!==0)break;if(y=i.suspendedLanes,(y&h)!==h){nn(),i.pingedLanes|=i.suspendedLanes&y;break}i.timeoutHandle=of(Ja.bind(null,i,hn,Nr),u);break}Ja(i,hn,Nr);break;case 4:if(ba(i,h),(h&4194240)===h)break;for(u=i.eventTimes,y=-1;0<h;){var k=31-Qn(h);x=1<<k,k=u[k],k>y&&(y=k),h&=~x}if(h=y,h=wt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*TC(h/1960))-h,10<h){i.timeoutHandle=of(Ja.bind(null,i,hn,Nr),h);break}Ja(i,hn,Nr);break;case 5:Ja(i,hn,Nr);break;default:throw Error(n(329))}}}return mn(i,wt()),i.callbackNode===c?$6.bind(null,i):null}function e2(i,u){var c=Tu;return i.current.memoizedState.isDehydrated&&(Za(i,u).flags|=256),i=Zl(i,u),i!==2&&(u=hn,hn=c,u!==null&&t2(u)),i}function t2(i){hn===null?hn=i:hn.push.apply(hn,i)}function NC(i){for(var u=i;;){if(u.flags&16384){var c=u.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var y=c[h],x=y.getSnapshot;y=y.value;try{if(!Xn(x(),y))return!1}catch{return!1}}}if(c=u.child,u.subtreeFlags&16384&&c!==null)c.return=u,u=c;else{if(u===i)break;for(;u.sibling===null;){if(u.return===null||u.return===i)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(i,u){for(u&=~Qf,u&=~Vl,i.suspendedLanes|=u,i.pingedLanes&=~u,i=i.expirationTimes;0<u;){var c=31-Qn(u),h=1<<c;i[c]=-1,u&=~h}}function L6(i){if((ze&6)!==0)throw Error(n(327));Yi();var u=ol(i,0);if((u&1)===0)return mn(i,wt()),null;var c=Zl(i,u);if(i.tag!==0&&c===2){var h=k0(i);h!==0&&(u=h,c=e2(i,h))}if(c===1)throw c=Eu,Za(i,0),ba(i,u),mn(i,wt()),c;if(c===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=u,Ja(i,hn,Nr),mn(i,wt()),null}function n2(i,u){var c=ze;ze|=1;try{return i(u)}finally{ze=c,ze===0&&(Ki=wt()+500,Sl&&fa())}}function Xa(i){ya!==null&&ya.tag===0&&(ze&6)===0&&Yi();var u=ze;ze|=1;var c=jn.transition,h=Ze;try{if(jn.transition=null,Ze=1,i)return i()}finally{Ze=h,jn.transition=c,ze=u,(ze&6)===0&&fa()}}function r2(){Bn=Gi.current,ut(Gi)}function Za(i,u){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,pC(c)),At!==null)for(c=At.return;c!==null;){var h=c;switch(ff(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&wl();break;case 3:zi(),ut(pn),ut(Yt),Sf();break;case 5:wf(h);break;case 4:zi();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:gf(h.type._context);break;case 22:case 23:r2()}c=c.return}if($t=i,At=i=Ia(i.current,null),Vt=Bn=u,Et=0,Eu=null,Qf=Vl=Qa=0,hn=Tu=null,Ga!==null){for(u=0;u<Ga.length;u++)if(c=Ga[u],h=c.interleaved,h!==null){c.interleaved=null;var y=h.next,x=c.pending;if(x!==null){var k=x.next;x.next=y,h.next=k}c.pending=h}Ga=null}return i}function q6(i,u){do{var c=At;try{if(yf(),Nl.current=Dl,jl){for(var h=dt.memoizedState;h!==null;){var y=h.queue;y!==null&&(y.pending=null),h=h.next}jl=!1}if(Ya=0,Dt=kt=dt=null,_u=!1,Au=0,Yf.current=null,c===null||c.return===null){Et=1,Eu=u,At=null;break}e:{var x=i,k=c.return,L=c,z=u;if(u=Vt,L.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,oe=L,se=oe.tag;if((oe.mode&1)===0&&(se===0||se===11||se===15)){var ie=oe.alternate;ie?(oe.updateQueue=ie.updateQueue,oe.memoizedState=ie.memoizedState,oe.lanes=ie.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var me=d6(k);if(me!==null){me.flags&=-257,h6(me,k,L,x,u),me.mode&1&&f6(x,te,u),u=me,z=te;var xe=u.updateQueue;if(xe===null){var Se=new Set;Se.add(z),u.updateQueue=Se}else xe.add(z);break e}else{if((u&1)===0){f6(x,te,u),a2();break e}z=Error(n(426))}}else if(ct&&L.mode&1){var Pt=d6(k);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),h6(Pt,k,L,x,u),mf(Ui(z,L));break e}}x=z=Ui(z,L),Et!==4&&(Et=2),Tu===null?Tu=[x]:Tu.push(x),x=k;do{switch(x.tag){case 3:x.flags|=65536,u&=-u,x.lanes|=u;var J=c6(x,z,u);R1(x,J);break e;case 1:L=z;var K=x.type,ee=x.stateNode;if((x.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){x.flags|=65536,u&=-u,x.lanes|=u;var ce=p6(x,L,u);R1(x,ce);break e}}x=x.return}while(x!==null)}U6(c)}catch(Ae){u=Ae,At===c&&c!==null&&(At=c=c.return);continue}break}while(!0)}function F6(){var i=Ul.current;return Ul.current=Dl,i===null?Dl:i}function a2(){(Et===0||Et===3||Et===2)&&(Et=4),$t===null||(Qa&268435455)===0&&(Vl&268435455)===0||ba($t,Vt)}function Zl(i,u){var c=ze;ze|=2;var h=F6();($t!==i||Vt!==u)&&(Nr=null,Za(i,u));do try{jC();break}catch(y){q6(i,y)}while(!0);if(yf(),ze=c,Ul.current=h,At!==null)throw Error(n(261));return $t=null,Vt=0,Et}function jC(){for(;At!==null;)z6(At)}function RC(){for(;At!==null&&!s4();)z6(At)}function z6(i){var u=K6(i.alternate,i,Bn);i.memoizedProps=i.pendingProps,u===null?U6(i):At=u,Yf.current=null}function U6(i){var u=i;do{var c=u.alternate;if(i=u.return,(u.flags&32768)===0){if(c=OC(c,u,Bn),c!==null){At=c;return}}else{if(c=WC(c,u),c!==null){c.flags&=32767,At=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Et=6,At=null;return}}if(u=u.sibling,u!==null){At=u;return}At=u=i}while(u!==null);Et===0&&(Et=5)}function Ja(i,u,c){var h=Ze,y=jn.transition;try{jn.transition=null,Ze=1,HC(i,u,c,h)}finally{jn.transition=y,Ze=h}return null}function HC(i,u,c,h){do Yi();while(ya!==null);if((ze&6)!==0)throw Error(n(327));c=i.finishedWork;var y=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var x=c.lanes|c.childLanes;if(g4(i,x),i===$t&&(At=$t=null,Vt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Kl||(Kl=!0,Y6(nl,function(){return Yi(),null})),x=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||x){x=jn.transition,jn.transition=null;var k=Ze;Ze=1;var L=ze;ze|=4,Yf.current=null,kC(i,c),N6(c,i),aC(rf),ll=!!nf,rf=nf=null,i.current=c,EC(c),l4(),ze=L,Ze=k,jn.transition=x}else i.current=c;if(Kl&&(Kl=!1,ya=i,Yl=y),x=i.pendingLanes,x===0&&(va=null),f4(c.stateNode),mn(i,wt()),u!==null)for(h=i.onRecoverableError,c=0;c<u.length;c++)y=u[c],h(y.value,{componentStack:y.stack,digest:y.digest});if(Gl)throw Gl=!1,i=Zf,Zf=null,i;return(Yl&1)!==0&&i.tag!==0&&Yi(),x=i.pendingLanes,(x&1)!==0?i===Jf?Nu++:(Nu=0,Jf=i):Nu=0,fa(),null}function Yi(){if(ya!==null){var i=Eb(Yl),u=jn.transition,c=Ze;try{if(jn.transition=null,Ze=16>i?16:i,ya===null)var h=!1;else{if(i=ya,ya=null,Yl=0,(ze&6)!==0)throw Error(n(331));var y=ze;for(ze|=4,be=i.current;be!==null;){var x=be,k=x.child;if((be.flags&16)!==0){var L=x.deletions;if(L!==null){for(var z=0;z<L.length;z++){var te=L[z];for(be=te;be!==null;){var oe=be;switch(oe.tag){case 0:case 11:case 15:ku(8,oe,x)}var se=oe.child;if(se!==null)se.return=oe,be=se;else for(;be!==null;){oe=be;var ie=oe.sibling,me=oe.return;if(W6(oe),oe===te){be=null;break}if(ie!==null){ie.return=me,be=ie;break}be=me}}}var xe=x.alternate;if(xe!==null){var Se=xe.child;if(Se!==null){xe.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=x}}if((x.subtreeFlags&2064)!==0&&k!==null)k.return=x,be=k;else e:for(;be!==null;){if(x=be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ku(9,x,x.return)}var J=x.sibling;if(J!==null){J.return=x.return,be=J;break e}be=x.return}}var K=i.current;for(be=K;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=K;be!==null;){if(L=be,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:zl(9,L)}}catch(Ae){gt(L,L.return,Ae)}if(L===k){be=null;break e}var ce=L.sibling;if(ce!==null){ce.return=L.return,be=ce;break e}be=L.return}}if(ze=y,fa(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(rl,i)}catch{}h=!0}return h}finally{Ze=c,jn.transition=u}}return!1}function V6(i,u,c){u=Ui(c,u),u=c6(i,u,1),i=ha(i,u,1),u=nn(),i!==null&&(iu(i,1,u),mn(i,u))}function gt(i,u,c){if(i.tag===3)V6(i,i,c);else for(;u!==null;){if(u.tag===3){V6(u,i,c);break}else if(u.tag===1){var h=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){i=Ui(c,i),i=p6(u,i,1),u=ha(u,i,1),i=nn(),u!==null&&(iu(u,1,i),mn(u,i));break}}u=u.return}}function DC(i,u,c){var h=i.pingCache;h!==null&&h.delete(u),u=nn(),i.pingedLanes|=i.suspendedLanes&c,$t===i&&(Vt&c)===c&&(Et===4||Et===3&&(Vt&130023424)===Vt&&500>wt()-Xf?Za(i,0):Qf|=c),mn(i,u)}function G6(i,u){u===0&&((i.mode&1)===0?u=1:(u=il,il<<=1,(il&130023424)===0&&(il=4194304)));var c=nn();i=kr(i,u),i!==null&&(iu(i,u,c),mn(i,c))}function $C(i){var u=i.memoizedState,c=0;u!==null&&(c=u.retryLane),G6(i,c)}function LC(i,u){var c=0;switch(i.tag){case 13:var h=i.stateNode,y=i.memoizedState;y!==null&&(c=y.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(n(314))}h!==null&&h.delete(u),G6(i,c)}var K6;K6=function(i,u,c){if(i!==null)if(i.memoizedProps!==u.pendingProps||pn.current)dn=!0;else{if((i.lanes&c)===0&&(u.flags&128)===0)return dn=!1,AC(i,u,c);dn=(i.flags&131072)!==0}else dn=!1,ct&&(u.flags&1048576)!==0&&_1(u,_l,u.index);switch(u.lanes=0,u.tag){case 2:var h=u.type;ql(i,u),i=u.pendingProps;var y=Ri(u,Yt.current);Fi(u,c),y=Af(null,u,h,i,y,c);var x=Of();return u.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(h)?(x=!0,Pl(u)):x=!1,u.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,xf(u),y.updater=$l,u.stateNode=y,y._reactInternals=u,Nf(u,h,i,c),u=Df(null,u,h,!0,x,c)):(u.tag=0,ct&&x&&pf(u),tn(null,u,y,c),u=u.child),u;case 16:h=u.elementType;e:{switch(ql(i,u),i=u.pendingProps,y=h._init,h=y(h._payload),u.type=h,y=u.tag=FC(h),i=Jn(h,i),y){case 0:u=Hf(null,u,h,i,c);break e;case 1:u=I6(null,u,h,i,c);break e;case 11:u=m6(null,u,h,i,c);break e;case 14:u=v6(null,u,h,Jn(h.type,i),c);break e}throw Error(n(306,h,""))}return u;case 0:return h=u.type,y=u.pendingProps,y=u.elementType===h?y:Jn(h,y),Hf(i,u,h,y,c);case 1:return h=u.type,y=u.pendingProps,y=u.elementType===h?y:Jn(h,y),I6(i,u,h,y,c);case 3:e:{if(x6(u),i===null)throw Error(n(387));h=u.pendingProps,x=u.memoizedState,y=x.element,j1(i,u),El(u,h,null,c);var k=u.memoizedState;if(h=k.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=x,u.memoizedState=x,u.flags&256){y=Ui(Error(n(423)),u),u=B6(i,u,h,c,y);break e}else if(h!==y){y=Ui(Error(n(424)),u),u=B6(i,u,h,c,y);break e}else for(xn=la(u.stateNode.containerInfo.firstChild),In=u,ct=!0,Zn=null,c=T1(u,null,h,c),u.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if($i(),h===y){u=Tr(i,u,c);break e}tn(i,u,h,c)}u=u.child}return u;case 5:return D1(u),i===null&&hf(u),h=u.type,y=u.pendingProps,x=i!==null?i.memoizedProps:null,k=y.children,af(h,y)?k=null:x!==null&&af(h,x)&&(u.flags|=32),b6(i,u),tn(i,u,k,c),u.child;case 6:return i===null&&hf(u),null;case 13:return w6(i,u,c);case 4:return Bf(u,u.stateNode.containerInfo),h=u.pendingProps,i===null?u.child=Li(u,null,h,c):tn(i,u,h,c),u.child;case 11:return h=u.type,y=u.pendingProps,y=u.elementType===h?y:Jn(h,y),m6(i,u,h,y,c);case 7:return tn(i,u,u.pendingProps,c),u.child;case 8:return tn(i,u,u.pendingProps.children,c),u.child;case 12:return tn(i,u,u.pendingProps.children,c),u.child;case 10:e:{if(h=u.type._context,y=u.pendingProps,x=u.memoizedProps,k=y.value,nt(Wl,h._currentValue),h._currentValue=k,x!==null)if(Xn(x.value,k)){if(x.children===y.children&&!pn.current){u=Tr(i,u,c);break e}}else for(x=u.child,x!==null&&(x.return=u);x!==null;){var L=x.dependencies;if(L!==null){k=x.child;for(var z=L.firstContext;z!==null;){if(z.context===h){if(x.tag===1){z=Er(-1,c&-c),z.tag=2;var te=x.updateQueue;if(te!==null){te=te.shared;var oe=te.pending;oe===null?z.next=z:(z.next=oe.next,oe.next=z),te.pending=z}}x.lanes|=c,z=x.alternate,z!==null&&(z.lanes|=c),bf(x.return,c,u),L.lanes|=c;break}z=z.next}}else if(x.tag===10)k=x.type===u.type?null:x.child;else if(x.tag===18){if(k=x.return,k===null)throw Error(n(341));k.lanes|=c,L=k.alternate,L!==null&&(L.lanes|=c),bf(k,c,u),k=x.sibling}else k=x.child;if(k!==null)k.return=x;else for(k=x;k!==null;){if(k===u){k=null;break}if(x=k.sibling,x!==null){x.return=k.return,k=x;break}k=k.return}x=k}tn(i,u,y.children,c),u=u.child}return u;case 9:return y=u.type,h=u.pendingProps.children,Fi(u,c),y=Tn(y),h=h(y),u.flags|=1,tn(i,u,h,c),u.child;case 14:return h=u.type,y=Jn(h,u.pendingProps),y=Jn(h.type,y),v6(i,u,h,y,c);case 15:return y6(i,u,u.type,u.pendingProps,c);case 17:return h=u.type,y=u.pendingProps,y=u.elementType===h?y:Jn(h,y),ql(i,u),u.tag=1,fn(h)?(i=!0,Pl(u)):i=!1,Fi(u,c),s6(u,h,y),Nf(u,h,y,c),Df(null,u,h,!0,i,c);case 19:return S6(i,u,c);case 22:return g6(i,u,c)}throw Error(n(156,u.tag))};function Y6(i,u){return Ab(i,u)}function qC(i,u,c,h){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(i,u,c,h){return new qC(i,u,c,h)}function i2(i){return i=i.prototype,!(!i||!i.isReactComponent)}function FC(i){if(typeof i=="function")return i2(i)?1:0;if(i!=null){if(i=i.$$typeof,i===T)return 11;if(i===V)return 14}return 2}function Ia(i,u){var c=i.alternate;return c===null?(c=Rn(i.tag,u,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=u,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,u=i.dependencies,c.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function Jl(i,u,c,h,y,x){var k=2;if(h=i,typeof i=="function")i2(i)&&(k=1);else if(typeof i=="string")k=5;else e:switch(i){case E:return ei(c.children,y,x,u);case P:k=8,y|=8;break;case W:return i=Rn(12,c,u,y|2),i.elementType=W,i.lanes=x,i;case F:return i=Rn(13,c,u,y),i.elementType=F,i.lanes=x,i;case q:return i=Rn(19,c,u,y),i.elementType=q,i.lanes=x,i;case G:return ec(c,y,x,u);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:k=10;break e;case D:k=9;break e;case T:k=11;break e;case V:k=14;break e;case Y:k=16,h=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return u=Rn(k,c,u,y),u.elementType=i,u.type=h,u.lanes=x,u}function ei(i,u,c,h){return i=Rn(7,i,h,u),i.lanes=c,i}function ec(i,u,c,h){return i=Rn(22,i,h,u),i.elementType=G,i.lanes=c,i.stateNode={isHidden:!1},i}function o2(i,u,c){return i=Rn(6,i,null,u),i.lanes=c,i}function u2(i,u,c){return u=Rn(4,i.children!==null?i.children:[],i.key,u),u.lanes=c,u.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},u}function zC(i,u,c,h,y){this.tag=u,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=E0(0),this.expirationTimes=E0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E0(0),this.identifierPrefix=h,this.onRecoverableError=y,this.mutableSourceEagerHydrationData=null}function s2(i,u,c,h,y,x,k,L,z){return i=new zC(i,u,c,L,z),u===1?(u=1,x===!0&&(u|=8)):u=0,x=Rn(3,null,null,u),i.current=x,x.stateNode=i,x.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(x),i}function UC(i,u,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:h==null?null:""+h,children:i,containerInfo:u,implementation:c}}function Q6(i){if(!i)return pa;i=i._reactInternals;e:{if(qa(i)!==i||i.tag!==1)throw Error(n(170));var u=i;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(i.tag===1){var c=i.type;if(fn(c))return P1(i,c,u)}return u}function X6(i,u,c,h,y,x,k,L,z){return i=s2(c,h,!0,i,y,x,k,L,z),i.context=Q6(null),c=i.current,h=nn(),y=ga(c),x=Er(h,y),x.callback=u??null,ha(c,x,y),i.current.lanes=y,iu(i,y,h),mn(i,h),i}function tc(i,u,c,h){var y=u.current,x=nn(),k=ga(y);return c=Q6(c),u.context===null?u.context=c:u.pendingContext=c,u=Er(x,k),u.payload={element:i},h=h===void 0?null:h,h!==null&&(u.callback=h),i=ha(y,u,k),i!==null&&(nr(i,y,k,x),kl(i,y,k)),k}function nc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Z6(i,u){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<u?c:u}}function l2(i,u){Z6(i,u),(i=i.alternate)&&Z6(i,u)}function VC(){return null}var J6=typeof reportError=="function"?reportError:function(i){console.error(i)};function c2(i){this._internalRoot=i}rc.prototype.render=c2.prototype.render=function(i){var u=this._internalRoot;if(u===null)throw Error(n(409));tc(i,u,null,null)},rc.prototype.unmount=c2.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var u=i.containerInfo;Xa(function(){tc(null,i,null,null)}),u[Ar]=null}};function rc(i){this._internalRoot=i}rc.prototype.unstable_scheduleHydration=function(i){if(i){var u=jb();i={blockedOn:null,target:i,priority:u};for(var c=0;c<oa.length&&u!==0&&u<oa[c].priority;c++);oa.splice(c,0,i),c===0&&Db(i)}};function p2(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ac(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function eI(){}function GC(i,u,c,h,y){if(y){if(typeof h=="function"){var x=h;h=function(){var te=nc(k);x.call(te)}}var k=X6(u,h,i,0,null,!1,!1,"",eI);return i._reactRootContainer=k,i[Ar]=k.current,bu(i.nodeType===8?i.parentNode:i),Xa(),k}for(;y=i.lastChild;)i.removeChild(y);if(typeof h=="function"){var L=h;h=function(){var te=nc(z);L.call(te)}}var z=s2(i,0,!1,null,null,!1,!1,"",eI);return i._reactRootContainer=z,i[Ar]=z.current,bu(i.nodeType===8?i.parentNode:i),Xa(function(){tc(u,z,c,h)}),z}function ic(i,u,c,h,y){var x=c._reactRootContainer;if(x){var k=x;if(typeof y=="function"){var L=y;y=function(){var z=nc(k);L.call(z)}}tc(u,k,i,y)}else k=GC(c,u,i,y,h);return nc(k)}Tb=function(i){switch(i.tag){case 3:var u=i.stateNode;if(u.current.memoizedState.isDehydrated){var c=au(u.pendingLanes);c!==0&&(T0(u,c|1),mn(u,wt()),(ze&6)===0&&(Ki=wt()+500,fa()))}break;case 13:Xa(function(){var h=kr(i,1);if(h!==null){var y=nn();nr(h,i,1,y)}}),l2(i,1)}},N0=function(i){if(i.tag===13){var u=kr(i,134217728);if(u!==null){var c=nn();nr(u,i,134217728,c)}l2(i,134217728)}},Nb=function(i){if(i.tag===13){var u=ga(i),c=kr(i,u);if(c!==null){var h=nn();nr(c,i,u,h)}l2(i,u)}},jb=function(){return Ze},Rb=function(i,u){var c=Ze;try{return Ze=i,u()}finally{Ze=c}},_0=function(i,u,c){switch(u){case"input":if(qe(i,c),u=c.name,c.type==="radio"&&u!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<c.length;u++){var h=c[u];if(h!==i&&h.form===i.form){var y=Bl(h);if(!y)throw Error(n(90));re(h),qe(h,y)}}}break;case"textarea":yt(i,c);break;case"select":u=c.value,u!=null&&xt(i,!!c.multiple,u,!1)}},xb=n2,Bb=Xa;var KC={usingClientEntryPoint:!1,Events:[Bu,Ni,Bl,bb,Ib,n2]},ju={findFiberByHostInstance:Fa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YC={bundleType:ju.bundleType,version:ju.version,rendererPackageName:ju.rendererPackageName,rendererConfig:ju.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Mb(i),i===null?null:i.stateNode},findFiberByHostInstance:ju.findFiberByHostInstance||VC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{rl=oc.inject(YC),pr=oc}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC,vn.createPortal=function(i,u){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p2(u))throw Error(n(200));return UC(i,u,null,c)},vn.createRoot=function(i,u){if(!p2(i))throw Error(n(299));var c=!1,h="",y=J6;return u!=null&&(u.unstable_strictMode===!0&&(c=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onRecoverableError!==void 0&&(y=u.onRecoverableError)),u=s2(i,1,!1,null,null,c,!1,h,y),i[Ar]=u.current,bu(i.nodeType===8?i.parentNode:i),new c2(u)},vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var u=i._reactInternals;if(u===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Mb(u),i=i===null?null:i.stateNode,i},vn.flushSync=function(i){return Xa(i)},vn.hydrate=function(i,u,c){if(!ac(u))throw Error(n(200));return ic(null,i,u,!0,c)},vn.hydrateRoot=function(i,u,c){if(!p2(i))throw Error(n(405));var h=c!=null&&c.hydratedSources||null,y=!1,x="",k=J6;if(c!=null&&(c.unstable_strictMode===!0&&(y=!0),c.identifierPrefix!==void 0&&(x=c.identifierPrefix),c.onRecoverableError!==void 0&&(k=c.onRecoverableError)),u=X6(u,null,i,1,c??null,y,!1,x,k),i[Ar]=u.current,bu(i),h)for(i=0;i<h.length;i++)c=h[i],y=c._getVersion,y=y(c._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[c,y]:u.mutableSourceEagerHydrationData.push(c,y);return new rc(u)},vn.render=function(i,u,c){if(!ac(u))throw Error(n(200));return ic(null,i,u,!1,c)},vn.unmountComponentAtNode=function(i){if(!ac(i))throw Error(n(40));return i._reactRootContainer?(Xa(function(){ic(null,null,i,!1,function(){i._reactRootContainer=null,i[Ar]=null})}),!0):!1},vn.unstable_batchedUpdates=n2,vn.unstable_renderSubtreeIntoContainer=function(i,u,c,h){if(!ac(c))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return ic(i,u,c,!1,h)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var sI;function AM(){if(sI)return h2.exports;sI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),h2.exports=ik(),h2.exports}var lI;function ok(){if(lI)return sc;lI=1;var e=AM();return sc.createRoot=e.createRoot,sc.hydrateRoot=e.hydrateRoot,sc}var uk=ok(),Q=ig();const R=Xe(Q),sk=JC({__proto__:null,default:R},[Q]);var Sc={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var lk=Sc.exports,cI;function ck(){return cI||(cI=1,(function(e,t){((n,r)=>{e.exports=r()})(lk,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,o=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},p=0,f={};function m(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(W){var N=w(W);N.chunkSize=parseInt(N.chunkSize),W.step||W.chunk||(N.chunkSize=null),this._handle=new I(N),(this._handle.streamer=this)._config=N}).call(this,P),this.parseChunk=function(W,N){var D=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<D){let F=this._config.newline;F||(T=this._config.quoteChar||'"',F=this._handle.guessLineEndings(W,T)),W=[...W.split(F).slice(D)].join(F)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(T=this._config.beforeFirstChunk(W))!==void 0&&(W=T),this.isFirstChunk=!1,this._halted=!1;var D=this._partialLine+W,T=(this._partialLine="",this._handle.parse(D,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(W=T.meta.cursor,D=(this._finished||(this._partialLine=D.substring(W-this._baseIndex),this._baseIndex=W),T&&T.data&&(this._rowCount+=T.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:T,workerId:f.WORKER_ID,finished:D});else if(E(this._config.chunk)&&!N){if(this._config.chunk(T,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=T=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(T.data),this._completeResults.errors=this._completeResults.errors.concat(T.errors),this._completeResults.meta=T.meta),this._completed||!D||!E(this._config.complete)||T&&T.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||T&&T.meta.paused||this._nextChunk(),T}this._halted=!0},this._sendError=function(W){E(this._config.error)?this._config.error(W):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:W,finished:!1})}}function d(P){var W;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),m.call(this,P),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(N){this._input=N,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(W=new XMLHttpRequest,this._config.withCredentials&&(W.withCredentials=this._config.withCredentials),o||(W.onload=A(this._chunkLoaded,this),W.onerror=A(this._chunkError,this)),W.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var N,D=this._config.downloadRequestHeaders;for(N in D)W.setRequestHeader(N,D[N])}var T;this._config.chunkSize&&(T=this._start+this._config.chunkSize-1,W.setRequestHeader("Range","bytes="+this._start+"-"+T));try{W.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}o&&W.status===0&&this._chunkError()}},this._chunkLoaded=function(){W.readyState===4&&(W.status<200||400<=W.status?this._chunkError():(this._start+=this._config.chunkSize||W.responseText.length,this._finished=!this._config.chunkSize||this._start>=(N=>(N=N.getResponseHeader("Content-Range"))!==null?parseInt(N.substring(N.lastIndexOf("/")+1)):-1)(W),this.parseChunk(W.responseText)))},this._chunkError=function(N){N=W.statusText||N,this._sendError(new Error(N))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),m.call(this,P);var W,N,D=typeof FileReader<"u";this.stream=function(T){this._input=T,N=T.slice||T.webkitSlice||T.mozSlice,D?((W=new FileReader).onload=A(this._chunkLoaded,this),W.onerror=A(this._chunkError,this)):W=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var T=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),T=N.call(T,this._start,F)),W.readAsText(T,this._config.encoding));D||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(T){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(T.target.result)},this._chunkError=function(){this._sendError(W.error)}}function b(P){var W;m.call(this,P=P||{}),this.stream=function(N){return W=N,this._nextChunk()},this._nextChunk=function(){var N,D;if(!this._finished)return N=this._config.chunkSize,W=N?(D=W.substring(0,N),W.substring(N)):(D=W,""),this._finished=!W,this.parseChunk(D)}}function B(P){m.call(this,P=P||{});var W=[],N=!0,D=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(T){this._input=T,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){D&&W.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),W.length?this.parseChunk(W.shift()):N=!0},this._streamData=A(function(T){try{W.push(typeof T=="string"?T:T.toString(this._config.encoding)),N&&(N=!1,this._checkIsFinished(),this.parseChunk(W.shift()))}catch(F){this._streamError(F)}},this),this._streamError=A(function(T){this._streamCleanUp(),this._sendError(T)},this),this._streamEnd=A(function(){this._streamCleanUp(),D=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var W,N,D,T,F=Math.pow(2,53),q=-F,V=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,G=this,H=0,U=0,X=!1,j=!1,$=[],Z={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(Z&&D&&(ge("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),D=!1),P.skipEmptyLines&&(Z.data=Z.data.filter(function(re){return!ue(re)})),ye()){let re=function(je,Pe){E(P.transformHeader)&&(je=P.transformHeader(je,Pe)),$.push(je)};var pe=re;if(Z)if(Array.isArray(Z.data[0])){for(var fe=0;ye()&&fe<Z.data.length;fe++)Z.data[fe].forEach(re);Z.data.splice(0,1)}else Z.data.forEach(re)}function ne(re,je){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var _e=Ce,qe=re[Ce],qe=((He,Fe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(He)?Fe==="true"||Fe==="TRUE"||Fe!=="false"&&Fe!=="FALSE"&&((Ke=>{if(V.test(Ke)&&(Ke=parseFloat(Ke),q<Ke&&Ke<F))return 1})(Fe)?parseFloat(Fe):Y.test(Fe)?new Date(Fe):Fe===""?null:Fe):Fe)(_e=P.header?Ce>=$.length?"__parsed_extra":$[Ce]:_e,qe=P.transform?P.transform(qe,_e):qe);_e==="__parsed_extra"?(Pe[_e]=Pe[_e]||[],Pe[_e].push(qe)):Pe[_e]=qe}return P.header&&(Ce>$.length?ge("FieldMismatch","TooManyFields","Too many fields: expected "+$.length+" fields but parsed "+Ce,U+je):Ce<$.length&&ge("FieldMismatch","TooFewFields","Too few fields: expected "+$.length+" fields but parsed "+Ce,U+je)),Pe}var de;Z&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!Z.data.length||Array.isArray(Z.data[0])?(Z.data=Z.data.map(ne),de=Z.data.length):Z.data=ne(Z.data,0),P.header&&Z.meta&&(Z.meta.fields=$),U+=de)}function ye(){return P.header&&$.length===0}function ge(fe,ne,de,pe){fe={type:fe,code:ne,message:de},pe!==void 0&&(fe.row=pe),Z.errors.push(fe)}E(P.step)&&(T=P.step,P.step=function(fe){Z=fe,ye()?he():(he(),Z.data.length!==0&&(H+=fe.data.length,P.preview&&H>P.preview?N.abort():(Z.data=Z.data[0],T(Z,G))))}),this.parse=function(fe,ne,de){var pe=P.quoteChar||'"',pe=(P.newline||(P.newline=this.guessLineEndings(fe,pe)),D=!1,P.delimiter?E(P.delimiter)&&(P.delimiter=P.delimiter(fe),Z.meta.delimiter=P.delimiter):((pe=((re,je,Pe,Ce,_e)=>{var qe,He,Fe,Ke;_e=_e||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var xt=0;xt<_e.length;xt++){for(var vt,On=_e[xt],yt=0,Kt=0,Bt=0,Ht=(Fe=void 0,new S({comments:Ce,delimiter:On,newline:je,preview:10}).parse(re)),cn=0;cn<Ht.data.length;cn++)Pe&&ue(Ht.data[cn])?Bt++:(vt=Ht.data[cn].length,Kt+=vt,Fe===void 0?Fe=vt:0<vt&&(yt+=Math.abs(vt-Fe),Fe=vt));0<Ht.data.length&&(Kt/=Ht.data.length-Bt),(He===void 0||yt<=He)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(He=yt,qe=On,Ke=Kt)}return{successful:!!(P.delimiter=qe),bestDelimiter:qe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=pe.bestDelimiter:(D=!0,P.delimiter=f.DefaultDelimiter),Z.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&pe.preview++,W=fe,N=new S(pe),Z=N.parse(W,ne,de),he(),X?{meta:{paused:!0}}:Z||{meta:{paused:!1}}},this.paused=function(){return X},this.pause=function(){X=!0,N.abort(),W=E(P.chunk)?"":W.substring(N.getCharIndex())},this.resume=function(){G.streamer._halted?(X=!1,G.streamer.parseChunk(W,!0)):setTimeout(G.resume,3)},this.aborted=function(){return j},this.abort=function(){j=!0,N.abort(),Z.meta.aborted=!0,E(P.complete)&&P.complete(Z),W=""},this.guessLineEndings=function(re,pe){re=re.substring(0,1048576);var pe=new RegExp(g(pe)+"([^]*?)"+g(pe),"gm"),de=(re=re.replace(pe,"")).split("\r"),pe=re.split(`
`),re=1<pe.length&&pe[0].length<de[0].length;if(de.length===1||re)return`
`;for(var je=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&je++;return je>=de.length/2?`\r
`:"\r"}}function g(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var W=(P=P||{}).delimiter,N=P.newline,D=P.comments,T=P.step,F=P.preview,q=P.fastMode,V=null,Y=!1,G=P.quoteChar==null?'"':P.quoteChar,H=G;if(P.escapeChar!==void 0&&(H=P.escapeChar),(typeof W!="string"||-1<f.BAD_DELIMITERS.indexOf(W))&&(W=","),D===W)throw new Error("Comment character same as delimiter");D===!0?D="#":(typeof D!="string"||-1<f.BAD_DELIMITERS.indexOf(D))&&(D=!1),N!==`
`&&N!=="\r"&&N!==`\r
`&&(N=`
`);var U=0,X=!1;this.parse=function(j,$,Z){if(typeof j!="string")throw new Error("Input must be a string");var ue=j.length,he=W.length,ye=N.length,ge=D.length,fe=E(T),ne=[],de=[],pe=[],re=U=0;if(!j)return yt();if(q||q!==!1&&j.indexOf(G)===-1){for(var je=j.split(N),Pe=0;Pe<je.length;Pe++){if(pe=je[Pe],U+=pe.length,Pe!==je.length-1)U+=N.length;else if(Z)return yt();if(!D||pe.substring(0,ge)!==D){if(fe){if(ne=[],Ke(pe.split(W)),Kt(),X)return yt()}else Ke(pe.split(W));if(F&&F<=Pe)return ne=ne.slice(0,F),yt(!0)}}return yt()}for(var Ce=j.indexOf(W,U),_e=j.indexOf(N,U),qe=new RegExp(g(H)+g(G),"g"),He=j.indexOf(G,U);;)if(j[U]===G)for(He=U,U++;;){if((He=j.indexOf(G,He+1))===-1)return Z||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:U}),vt();if(He===ue-1)return vt(j.substring(U,He).replace(qe,G));if(G===H&&j[He+1]===H)He++;else if(G===H||He===0||j[He-1]!==H){Ce!==-1&&Ce<He+1&&(Ce=j.indexOf(W,He+1));var Fe=xt((_e=_e!==-1&&_e<He+1?j.indexOf(N,He+1):_e)===-1?Ce:Math.min(Ce,_e));if(j.substr(He+1+Fe,he)===W){pe.push(j.substring(U,He).replace(qe,G)),j[U=He+1+Fe+he]!==G&&(He=j.indexOf(G,U)),Ce=j.indexOf(W,U),_e=j.indexOf(N,U);break}if(Fe=xt(_e),j.substring(He+1+Fe,He+1+Fe+ye)===N){if(pe.push(j.substring(U,He).replace(qe,G)),On(He+1+Fe+ye),Ce=j.indexOf(W,U),He=j.indexOf(G,U),fe&&(Kt(),X))return yt();if(F&&ne.length>=F)return yt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:U}),He++}}else if(D&&pe.length===0&&j.substring(U,U+ge)===D){if(_e===-1)return yt();U=_e+ye,_e=j.indexOf(N,U),Ce=j.indexOf(W,U)}else if(Ce!==-1&&(Ce<_e||_e===-1))pe.push(j.substring(U,Ce)),U=Ce+he,Ce=j.indexOf(W,U);else{if(_e===-1)break;if(pe.push(j.substring(U,_e)),On(_e+ye),fe&&(Kt(),X))return yt();if(F&&ne.length>=F)return yt(!0)}return vt();function Ke(Bt){ne.push(Bt),re=U}function xt(Bt){var Ht=0;return Ht=Bt!==-1&&(Bt=j.substring(He+1,Bt))&&Bt.trim()===""?Bt.length:Ht}function vt(Bt){return Z||(Bt===void 0&&(Bt=j.substring(U)),pe.push(Bt),U=ue,Ke(pe),fe&&Kt()),yt()}function On(Bt){U=Bt,Ke(pe),pe=[],_e=j.indexOf(N,U)}function yt(Bt){if(P.header&&!$&&ne.length&&!Y){var Ht=ne[0],cn=Object.create(null),Si=new Set(Ht);let ta=!1;for(let Wn=0;Wn<Ht.length;Wn++){let Cn=Ht[Wn];if(cn[Cn=E(P.transformHeader)?P.transformHeader(Cn,Wn):Cn]){let na,eu=cn[Cn];for(;na=Cn+"_"+eu,eu++,Si.has(na););Si.add(na),Ht[Wn]=na,cn[Cn]++,ta=!0,(V=V===null?{}:V)[na]=Cn}else cn[Cn]=1,Ht[Wn]=Cn;Si.add(Cn)}ta&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:ne,errors:de,meta:{delimiter:W,linebreak:N,aborted:X,truncated:!!Bt,cursor:re+($||0),renamedHeaders:V}}}function Kt(){T(yt()),ne=[],de=[]}},this.abort=function(){X=!0},this.getCharIndex=function(){return U}}function M(P){var W=P.data,N=l[W.workerId],D=!1;if(W.error)N.userError(W.error,W.file);else if(W.results&&W.results.data){var T={abort:function(){D=!0,_(W.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(E(N.userStep)){for(var F=0;F<W.results.data.length&&(N.userStep({data:W.results.data[F],errors:W.results.errors,meta:W.results.meta},T),!D);F++);delete W.results}else E(N.userChunk)&&(N.userChunk(W.results,T,W.file),delete W.results)}W.finished&&!D&&_(W.workerId,W.results)}function _(P,W){var N=l[P];E(N.userComplete)&&N.userComplete(W),N.terminate(),delete l[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var W,N=Array.isArray(P)?[]:{};for(W in P)N[W]=w(P[W]);return N}function A(P,W){return function(){P.apply(W,arguments)}}function E(P){return typeof P=="function"}return f.parse=function(P,W){var N=(W=W||{}).dynamicTyping||!1;if(E(N)&&(W.dynamicTypingFunction=N,N={}),W.dynamicTyping=N,W.transform=!!E(W.transform)&&W.transform,!W.worker||!f.WORKERS_SUPPORTED)return N=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(D=>D.charCodeAt(0)!==65279?D:D.slice(1))(P),N=new(W.download?d:b)(W)):P.readable===!0&&E(P.read)&&E(P.on)?N=new B(W):(r.File&&P instanceof File||P instanceof Object)&&(N=new v(W)),N.stream(P);(N=(()=>{var D;return!!f.WORKERS_SUPPORTED&&(D=(()=>{var T=r.URL||r.webkitURL||null,F=n.toString();return f.BLOB_URL||(f.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(D=new r.Worker(D)).onmessage=M,D.id=p++,l[D.id]=D)})()).userStep=W.step,N.userChunk=W.chunk,N.userComplete=W.complete,N.userError=W.error,W.step=E(W.step),W.chunk=E(W.chunk),W.complete=E(W.complete),W.error=E(W.error),delete W.worker,N.postMessage({input:P,config:W,workerId:N.id})},f.unparse=function(P,W){var N=!1,D=!0,T=",",F=`\r
`,q='"',V=q+q,Y=!1,G=null,H=!1,U=((()=>{if(typeof W=="object"){if(typeof W.delimiter!="string"||f.BAD_DELIMITERS.filter(function($){return W.delimiter.indexOf($)!==-1}).length||(T=W.delimiter),typeof W.quotes!="boolean"&&typeof W.quotes!="function"&&!Array.isArray(W.quotes)||(N=W.quotes),typeof W.skipEmptyLines!="boolean"&&typeof W.skipEmptyLines!="string"||(Y=W.skipEmptyLines),typeof W.newline=="string"&&(F=W.newline),typeof W.quoteChar=="string"&&(q=W.quoteChar),typeof W.header=="boolean"&&(D=W.header),Array.isArray(W.columns)){if(W.columns.length===0)throw new Error("Option columns is empty");G=W.columns}W.escapeChar!==void 0&&(V=W.escapeChar+q),W.escapeFormulae instanceof RegExp?H=W.escapeFormulae:typeof W.escapeFormulae=="boolean"&&W.escapeFormulae&&(H=/^[=+\-@\t\r].*$/)}})(),new RegExp(g(q),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return X(null,P,Y);if(typeof P[0]=="object")return X(G||Object.keys(P[0]),P,Y)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||G),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),X(P.fields||[],P.data||[],Y);throw new Error("Unable to serialize unrecognized input");function X($,Z,ue){var he="",ye=(typeof $=="string"&&($=JSON.parse($)),typeof Z=="string"&&(Z=JSON.parse(Z)),Array.isArray($)&&0<$.length),ge=!Array.isArray(Z[0]);if(ye&&D){for(var fe=0;fe<$.length;fe++)0<fe&&(he+=T),he+=j($[fe],fe);0<Z.length&&(he+=F)}for(var ne=0;ne<Z.length;ne++){var de=(ye?$:Z[ne]).length,pe=!1,re=ye?Object.keys(Z[ne]).length===0:Z[ne].length===0;if(ue&&!ye&&(pe=ue==="greedy"?Z[ne].join("").trim()==="":Z[ne].length===1&&Z[ne][0].length===0),ue==="greedy"&&ye){for(var je=[],Pe=0;Pe<de;Pe++){var Ce=ge?$[Pe]:Pe;je.push(Z[ne][Ce])}pe=je.join("").trim()===""}if(!pe){for(var _e=0;_e<de;_e++){0<_e&&!re&&(he+=T);var qe=ye&&ge?$[_e]:_e;he+=j(Z[ne][qe],_e)}ne<Z.length-1&&(!ue||0<de&&!re)&&(he+=F)}}return he}function j($,Z){var ue,he;return $==null?"":$.constructor===Date?JSON.stringify($).slice(1,25):(he=!1,H&&typeof $=="string"&&H.test($)&&($="'"+$,he=!0),ue=$.toString().replace(U,V),(he=he||N===!0||typeof N=="function"&&N($,Z)||Array.isArray(N)&&N[Z]||((ye,ge)=>{for(var fe=0;fe<ge.length;fe++)if(-1<ye.indexOf(ge[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(T)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?q+ue+q:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!o&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=b,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var W=P.config||{},N=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var q=0;q<this.files.length;q++)N.push({file:this.files[q],inputElem:this,instanceConfig:a.extend({},W)})}),D(),this;function D(){if(N.length===0)E(P.complete)&&P.complete();else{var F,q,V,Y,G=N[0];if(E(P.before)){var H=P.before(G.file,G.inputElem);if(typeof H=="object"){if(H.action==="abort")return F="AbortError",q=G.file,V=G.inputElem,Y=H.reason,void(E(P.error)&&P.error({name:F},q,V,Y));if(H.action==="skip")return void T();typeof H.config=="object"&&(G.instanceConfig=a.extend(G.instanceConfig,H.config))}else if(H==="skip")return void T()}var U=G.instanceConfig.complete;G.instanceConfig.complete=function(X){E(U)&&U(X,G.file,G.inputElem),T()},f.parse(G.file,G.instanceConfig)}}function T(){N.splice(0,1),D()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(b.prototype=Object.create(b.prototype)).constructor=b,(B.prototype=Object.create(m.prototype)).constructor=B,f})})(Sc)),Sc.exports}var pk=ck();const y2=Xe(pk);function pI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function OM(...e){return t=>{let n=!1;const r=e.map(a=>{const o=pI(a,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():pI(e[a],null)}}}}function _c(...e){return Q.useCallback(OM(...e),e)}var ls=Q.forwardRef((e,t)=>{const{children:n,...r}=e,a=Q.Children.toArray(n),o=a.find(dk);if(o){const s=o.props.children,l=a.map(p=>p===o?Q.Children.count(s)>1?Q.Children.only(null):Q.isValidElement(s)?s.props.children:null:p);return C.jsx(Pv,{...r,ref:t,children:Q.isValidElement(s)?Q.cloneElement(s,void 0,l):null})}return C.jsx(Pv,{...r,ref:t,children:n})});ls.displayName="Slot";var Pv=Q.forwardRef((e,t)=>{const{children:n,...r}=e;if(Q.isValidElement(n)){const a=mk(n),o=hk(r,n.props);return n.type!==Q.Fragment&&(o.ref=t?OM(t,a):a),Q.cloneElement(n,o)}return Q.Children.count(n)>1?Q.Children.only(null):null});Pv.displayName="SlotClone";var fk=({children:e})=>C.jsx(C.Fragment,{children:e});function dk(e){return Q.isValidElement(e)&&e.type===fk}function hk(e,t){const n={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...l)=>{o(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...o}:r==="className"&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}function mk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function WM(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=WM(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Re(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=WM(e))&&(r&&(r+=" "),r+=t);return r}const fI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,dI=Re,vk=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return dI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:o}=t,s=Object.keys(a).map(f=>{const m=n==null?void 0:n[f],d=o==null?void 0:o[f];if(m===null)return null;const v=fI(m)||fI(d);return a[f][v]}),l=n&&Object.entries(n).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),p=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...b}=m;return Object.entries(b).every(B=>{let[I,g]=B;return Array.isArray(g)?g.includes({...o,...l}[I]):{...o,...l}[I]===g})?[...f,d,v]:f},[]);return dI(e,s,p,n==null?void 0:n.class,n==null?void 0:n.className)},og="-",yk=e=>{const t=bk(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(og);return l[0]===""&&l.length!==1&&l.shift(),CM(l,t)||gk(s)},getConflictingClassGroupIds:(s,l)=>{const p=n[s]||[];return l&&r[s]?[...p,...r[s]]:p}}},CM=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?CM(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const o=e.join(og);return(s=t.validators.find(({validator:l})=>l(o)))==null?void 0:s.classGroupId},hI=/^\[(.+)\]$/,gk=e=>{if(hI.test(e)){const t=hI.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},bk=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Sv(n[a],r,a,t);return r},Sv=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const o=a===""?t:mI(t,a);o.classGroupId=n;return}if(typeof a=="function"){if(Ik(a)){Sv(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([o,s])=>{Sv(s,mI(t,o),n,r)})})},mI=(e,t)=>{let n=e;return t.split(og).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Ik=e=>e.isThemeGetter,xk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return a(o,s),s},set(o,s){n.has(o)?n.set(o,s):a(o,s)}}},Mv="!",_v=":",Bk=_v.length,wk=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const o=[];let s=0,l=0,p=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(s===0&&l===0){if(I===_v){o.push(a.slice(p,B)),p=B+Bk;continue}if(I==="/"){f=B;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const m=o.length===0?a:a.substring(p),d=Pk(m),v=d!==m,b=f&&f>p?f-p:void 0;return{modifiers:o,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:b}};if(t){const a=t+_v,o=r;r=s=>s.startsWith(a)?o(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=o=>n({className:o,parseClassName:a})}return r},Pk=e=>e.endsWith(Mv)?e.substring(0,e.length-1):e.startsWith(Mv)?e.substring(1):e,Sk=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let o=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...o.sort(),s),o=[]):o.push(s)}),a.push(...o.sort()),a}},Mk=e=>({cache:xk(e.cacheSize),parseClassName:wk(e),sortModifiers:Sk(e),...yk(e)}),_k=/\s+/,Ak=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:o}=t,s=[],l=e.trim().split(_k);let p="";for(let f=l.length-1;f>=0;f-=1){const m=l[f],{isExternal:d,modifiers:v,hasImportantModifier:b,baseClassName:B,maybePostfixModifierPosition:I}=n(m);if(d){p=m+(p.length>0?" "+p:p);continue}let g=!!I,S=r(g?B.substring(0,I):B);if(!S){if(!g){p=m+(p.length>0?" "+p:p);continue}if(S=r(B),!S){p=m+(p.length>0?" "+p:p);continue}g=!1}const M=o(v).join(":"),_=b?M+Mv:M,O=_+S;if(s.includes(O))continue;s.push(O);const w=a(S,g);for(let A=0;A<w.length;++A){const E=w[A];s.push(_+E)}p=m+(p.length>0?" "+p:p)}return p};function Ok(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=kM(t))&&(r&&(r+=" "),r+=n);return r}const kM=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=kM(e[r]))&&(n&&(n+=" "),n+=t);return n};function Wk(e,...t){let n,r,a,o=s;function s(p){const f=t.reduce((m,d)=>d(m),e());return n=Mk(f),r=n.cache.get,a=n.cache.set,o=l,l(p)}function l(p){const f=r(p);if(f)return f;const m=Ak(p,n);return a(p,m),m}return function(){return o(Ok.apply(null,arguments))}}const Tt=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},EM=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,TM=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ck=/^\d+\/\d+$/,kk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ek=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Nk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qi=e=>Ck.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),Ba=e=>!!e&&Number.isInteger(Number(e)),g2=e=>e.endsWith("%")&&$e(e.slice(0,-1)),jr=e=>kk.test(e),Rk=()=>!0,Hk=e=>Ek.test(e)&&!Tk.test(e),NM=()=>!1,Dk=e=>Nk.test(e),$k=e=>jk.test(e),Lk=e=>!Be(e)&&!we(e),qk=e=>Lo(e,HM,NM),Be=e=>EM.test(e),ti=e=>Lo(e,DM,Hk),b2=e=>Lo(e,Gk,$e),vI=e=>Lo(e,jM,NM),Fk=e=>Lo(e,RM,$k),lc=e=>Lo(e,$M,Dk),we=e=>TM.test(e),Hu=e=>qo(e,DM),zk=e=>qo(e,Kk),yI=e=>qo(e,jM),Uk=e=>qo(e,HM),Vk=e=>qo(e,RM),cc=e=>qo(e,$M,!0),Lo=(e,t,n)=>{const r=EM.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},qo=(e,t,n=!1)=>{const r=TM.exec(e);return r?r[1]?t(r[1]):n:!1},jM=e=>e==="position"||e==="percentage",RM=e=>e==="image"||e==="url",HM=e=>e==="length"||e==="size"||e==="bg-size",DM=e=>e==="length",Gk=e=>e==="number",Kk=e=>e==="family-name",$M=e=>e==="shadow",Yk=()=>{const e=Tt("color"),t=Tt("font"),n=Tt("text"),r=Tt("font-weight"),a=Tt("tracking"),o=Tt("leading"),s=Tt("breakpoint"),l=Tt("container"),p=Tt("spacing"),f=Tt("radius"),m=Tt("shadow"),d=Tt("inset-shadow"),v=Tt("text-shadow"),b=Tt("drop-shadow"),B=Tt("blur"),I=Tt("perspective"),g=Tt("aspect"),S=Tt("ease"),M=Tt("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),we,Be],A=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],P=()=>[we,Be,p],W=()=>[Qi,"full","auto",...P()],N=()=>[Ba,"none","subgrid",we,Be],D=()=>["auto",{span:["full",Ba,we,Be]},Ba,we,Be],T=()=>[Ba,"auto",we,Be],F=()=>["auto","min","max","fr",we,Be],q=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],V=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...P()],G=()=>[Qi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],H=()=>[e,we,Be],U=()=>[...O(),yI,vI,{position:[we,Be]}],X=()=>["no-repeat",{repeat:["","x","y","space","round"]}],j=()=>["auto","cover","contain",Uk,qk,{size:[we,Be]}],$=()=>[g2,Hu,ti],Z=()=>["","none","full",f,we,Be],ue=()=>["",$e,Hu,ti],he=()=>["solid","dashed","dotted","double"],ye=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>[$e,g2,yI,vI],fe=()=>["","none",B,we,Be],ne=()=>["none",$e,we,Be],de=()=>["none",$e,we,Be],pe=()=>[$e,we,Be],re=()=>[Qi,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[jr],breakpoint:[jr],color:[Rk],container:[jr],"drop-shadow":[jr],ease:["in","out","in-out"],font:[Lk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[jr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[jr],shadow:[jr],spacing:["px",$e],text:[jr],"text-shadow":[jr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Qi,Be,we,g]}],container:["container"],columns:[{columns:[$e,Be,we,l]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:W()}],"inset-x":[{"inset-x":W()}],"inset-y":[{"inset-y":W()}],start:[{start:W()}],end:[{end:W()}],top:[{top:W()}],right:[{right:W()}],bottom:[{bottom:W()}],left:[{left:W()}],visibility:["visible","invisible","collapse"],z:[{z:[Ba,"auto",we,Be]}],basis:[{basis:[Qi,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Qi,"auto","initial","none",Be]}],grow:[{grow:["",$e,we,Be]}],shrink:[{shrink:["",$e,we,Be]}],order:[{order:[Ba,"first","last","none",we,Be]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":F()}],"auto-rows":[{"auto-rows":F()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...q(),"normal"]}],"justify-items":[{"justify-items":[...V(),"normal"]}],"justify-self":[{"justify-self":["auto",...V()]}],"align-content":[{content:["normal",...q()]}],"align-items":[{items:[...V(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...V(),{baseline:["","last"]}]}],"place-content":[{"place-content":q()}],"place-items":[{"place-items":[...V(),"baseline"]}],"place-self":[{"place-self":["auto",...V()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[l,"screen",...G()]}],"min-w":[{"min-w":[l,"screen","none",...G()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...G()]}],h:[{h:["screen",...G()]}],"min-h":[{"min-h":["screen","none",...G()]}],"max-h":[{"max-h":["screen",...G()]}],"font-size":[{text:["base",n,Hu,ti]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,b2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",g2,Be]}],"font-family":[{font:[zk,Be,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,Be]}],"line-clamp":[{"line-clamp":[$e,"none",we,b2]}],leading:[{leading:[o,...P()]}],"list-image":[{"list-image":["none",we,Be]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,Be]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,ti]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[$e,"auto",we,Be]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,Be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,Be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:U()}],"bg-repeat":[{bg:X()}],"bg-size":[{bg:j()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ba,we,Be],radial:["",we,Be],conic:[Ba,we,Be]},Vk,Fk]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:$()}],"gradient-via-pos":[{via:$()}],"gradient-to-pos":[{to:$()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,Be]}],"outline-w":[{outline:["",$e,Hu,ti]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",m,cc,lc]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",d,cc,lc]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[$e,ti]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",v,cc,lc]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[$e,we,Be]}],"mix-blend":[{"mix-blend":[...ye(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ye()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ge()}],"mask-image-linear-to-pos":[{"mask-linear-to":ge()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":ge()}],"mask-image-t-to-pos":[{"mask-t-to":ge()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":ge()}],"mask-image-r-to-pos":[{"mask-r-to":ge()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":ge()}],"mask-image-b-to-pos":[{"mask-b-to":ge()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":ge()}],"mask-image-l-to-pos":[{"mask-l-to":ge()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":ge()}],"mask-image-x-to-pos":[{"mask-x-to":ge()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":ge()}],"mask-image-y-to-pos":[{"mask-y-to":ge()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[we,Be]}],"mask-image-radial-from-pos":[{"mask-radial-from":ge()}],"mask-image-radial-to-pos":[{"mask-radial-to":ge()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ge()}],"mask-image-conic-to-pos":[{"mask-conic-to":ge()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:U()}],"mask-repeat":[{mask:X()}],"mask-size":[{mask:j()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,Be]}],filter:[{filter:["","none",we,Be]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,Be]}],contrast:[{contrast:[$e,we,Be]}],"drop-shadow":[{"drop-shadow":["","none",b,cc,lc]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",$e,we,Be]}],"hue-rotate":[{"hue-rotate":[$e,we,Be]}],invert:[{invert:["",$e,we,Be]}],saturate:[{saturate:[$e,we,Be]}],sepia:[{sepia:["",$e,we,Be]}],"backdrop-filter":[{"backdrop-filter":["","none",we,Be]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,Be]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,Be]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,Be]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,Be]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,Be]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,Be]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,Be]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,Be]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,Be]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,Be]}],ease:[{ease:["linear","initial",S,we,Be]}],delay:[{delay:[$e,we,Be]}],animate:[{animate:["none",M,we,Be]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,Be]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:pe()}],"skew-x":[{"skew-x":pe()}],"skew-y":[{"skew-y":pe()}],transform:[{transform:[we,Be,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,Be]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,Be]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[$e,Hu,ti,b2]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Qk=Wk(Yk);function ln(...e){return Qk(Re(e))}const Xk=vk("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function gI({className:e,variant:t,size:n,asChild:r=!1,...a}){const o=r?ls:"button";return C.jsx(o,{"data-slot":"button",className:ln(Xk({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return C.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function jp({className:e,...t}){return C.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function Rp({className:e,...t}){return C.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return C.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function ug(e,t=[]){let n=[];function r(o,s){const l=Q.createContext(s),p=n.length;n=[...n,s];const f=d=>{var S;const{scope:v,children:b,...B}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[p])||l,g=Q.useMemo(()=>B,Object.values(B));return C.jsx(I.Provider,{value:g,children:b})};f.displayName=o+"Provider";function m(d,v){var I;const b=((I=v==null?void 0:v[e])==null?void 0:I[p])||l,B=Q.useContext(b);if(B)return B;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return[f,m]}const a=()=>{const o=n.map(s=>Q.createContext(s));return function(l){const p=(l==null?void 0:l[e])||o;return Q.useMemo(()=>({[`__scope${e}`]:{...l,[e]:p}}),[l,p])}};return a.scopeName=e,[r,Zk(a,...t)]}function Zk(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const s=r.reduce((l,{useScope:p,scopeName:f})=>{const d=p(o)[`__scope${f}`];return{...l,...d}},{});return Q.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Jk(e){const t=e+"CollectionProvider",[n,r]=ug(t),[a,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=b=>{const{scope:B,children:I}=b,g=R.useRef(null),S=R.useRef(new Map).current;return C.jsx(a,{scope:B,itemMap:S,collectionRef:g,children:I})};s.displayName=t;const l=e+"CollectionSlot",p=R.forwardRef((b,B)=>{const{scope:I,children:g}=b,S=o(l,I),M=_c(B,S.collectionRef);return C.jsx(ls,{ref:M,children:g})});p.displayName=l;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=R.forwardRef((b,B)=>{const{scope:I,children:g,...S}=b,M=R.useRef(null),_=_c(B,M),O=o(f,I);return R.useEffect(()=>(O.itemMap.set(M,{ref:M,...S}),()=>void O.itemMap.delete(M))),C.jsx(ls,{[m]:"",ref:_,children:g})});d.displayName=f;function v(b){const B=o(e+"CollectionConsumer",b);return R.useCallback(()=>{const g=B.collectionRef.current;if(!g)return[];const S=Array.from(g.querySelectorAll(`[${m}]`));return Array.from(B.itemMap.values()).sort((O,w)=>S.indexOf(O.ref.current)-S.indexOf(w.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:s,Slot:p,ItemSlot:d},v,r]}var Av=globalThis!=null&&globalThis.document?Q.useLayoutEffect:()=>{},eE=sk.useId||(()=>{}),tE=0;function LM(e){const[t,n]=Q.useState(eE());return Av(()=>{n(r=>r??String(tE++))},[e]),e||(t?`radix-${t}`:"")}AM();var nE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Fo=nE.reduce((e,t)=>{const n=Q.forwardRef((r,a)=>{const{asChild:o,...s}=r,l=o?ls:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function sg(e){const t=Q.useRef(e);return Q.useEffect(()=>{t.current=e}),Q.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function qM({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=rE({defaultProp:t,onChange:n}),o=e!==void 0,s=o?e:r,l=sg(n),p=Q.useCallback(f=>{if(o){const d=typeof f=="function"?f(e):f;d!==e&&l(d)}else a(f)},[o,e,a,l]);return[s,p]}function rE({defaultProp:e,onChange:t}){const n=Q.useState(e),[r]=n,a=Q.useRef(r),o=sg(t);return Q.useEffect(()=>{a.current!==r&&(o(r),a.current=r)},[r,a,o]),n}var aE=Q.createContext(void 0);function FM(e){const t=Q.useContext(aE);return e||t||"ltr"}var I2="rovingFocusGroup.onEntryFocus",iE={bubbles:!1,cancelable:!0},Hp="RovingFocusGroup",[Ov,zM,oE]=Jk(Hp),[uE,UM]=ug(Hp,[oE]),[sE,lE]=uE(Hp),VM=Q.forwardRef((e,t)=>C.jsx(Ov.Provider,{scope:e.__scopeRovingFocusGroup,children:C.jsx(Ov.Slot,{scope:e.__scopeRovingFocusGroup,children:C.jsx(cE,{...e,ref:t})})}));VM.displayName=Hp;var cE=Q.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:p,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=Q.useRef(null),b=_c(t,v),B=FM(o),[I=null,g]=qM({prop:s,defaultProp:l,onChange:p}),[S,M]=Q.useState(!1),_=sg(f),O=zM(n),w=Q.useRef(!1),[A,E]=Q.useState(0);return Q.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(I2,_),()=>P.removeEventListener(I2,_)},[_]),C.jsx(sE,{scope:n,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:Q.useCallback(P=>g(P),[g]),onItemShiftTab:Q.useCallback(()=>M(!0),[]),onFocusableItemAdd:Q.useCallback(()=>E(P=>P+1),[]),onFocusableItemRemove:Q.useCallback(()=>E(P=>P-1),[]),children:C.jsx(Fo.div,{tabIndex:S||A===0?-1:0,"data-orientation":r,...d,ref:b,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const W=!w.current;if(P.target===P.currentTarget&&W&&!S){const N=new CustomEvent(I2,iE);if(P.currentTarget.dispatchEvent(N),!N.defaultPrevented){const D=O().filter(Y=>Y.focusable),T=D.find(Y=>Y.active),F=D.find(Y=>Y.id===I),V=[T,F,...D].filter(Boolean).map(Y=>Y.ref.current);YM(V,m)}}w.current=!1}),onBlur:zr(e.onBlur,()=>M(!1))})})}),GM="RovingFocusGroupItem",KM=Q.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:o,...s}=e,l=LM(),p=o||l,f=lE(GM,n),m=f.currentTabStopId===p,d=zM(n),{onFocusableItemAdd:v,onFocusableItemRemove:b}=f;return Q.useEffect(()=>{if(r)return v(),()=>b()},[r,v,b]),C.jsx(Ov.ItemSlot,{scope:n,id:p,focusable:r,active:a,children:C.jsx(Fo.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,B=>{r?f.onItemFocus(p):B.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(p)),onKeyDown:zr(e.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=dE(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let S=d().filter(M=>M.focusable).map(M=>M.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const M=S.indexOf(B.currentTarget);S=f.loop?hE(S,M+1):S.slice(M+1)}setTimeout(()=>YM(S))}})})})});KM.displayName=GM;var pE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function fE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function dE(e,t,n){const r=fE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return pE[r]}function YM(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function hE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var mE=VM,vE=KM;function yE(e,t){return Q.useReducer((n,r)=>t[n][r]??n,e)}var QM=e=>{const{present:t,children:n}=e,r=gE(t),a=typeof n=="function"?n({present:r.isPresent}):Q.Children.only(n),o=_c(r.ref,bE(a));return typeof n=="function"||r.isPresent?Q.cloneElement(a,{ref:o}):null};QM.displayName="Presence";function gE(e){const[t,n]=Q.useState(),r=Q.useRef({}),a=Q.useRef(e),o=Q.useRef("none"),s=e?"mounted":"unmounted",[l,p]=yE(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Q.useEffect(()=>{const f=pc(r.current);o.current=l==="mounted"?f:"none"},[l]),Av(()=>{const f=r.current,m=a.current;if(m!==e){const v=o.current,b=pc(f);e?p("MOUNT"):b==="none"||(f==null?void 0:f.display)==="none"?p("UNMOUNT"):p(m&&v!==b?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,p]),Av(()=>{if(t){let f;const m=t.ownerDocument.defaultView??window,d=b=>{const I=pc(r.current).includes(b.animationName);if(b.target===t&&I&&(p("ANIMATION_END"),!a.current)){const g=t.style.animationFillMode;t.style.animationFillMode="forwards",f=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=g)})}},v=b=>{b.target===t&&(o.current=pc(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{m.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:Q.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function pc(e){return(e==null?void 0:e.animationName)||"none"}function bE(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var lg="Tabs",[IE]=ug(lg,[UM]),XM=UM(),[xE,cg]=IE(lg),ZM=Q.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:o,orientation:s="horizontal",dir:l,activationMode:p="automatic",...f}=e,m=FM(l),[d,v]=qM({prop:r,onChange:a,defaultProp:o});return C.jsx(xE,{scope:n,baseId:LM(),value:d,onValueChange:v,orientation:s,dir:m,activationMode:p,children:C.jsx(Fo.div,{dir:m,"data-orientation":s,...f,ref:t})})});ZM.displayName=lg;var JM="TabsList",e_=Q.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,o=cg(JM,n),s=XM(n);return C.jsx(mE,{asChild:!0,...s,orientation:o.orientation,dir:o.dir,loop:r,children:C.jsx(Fo.div,{role:"tablist","aria-orientation":o.orientation,...a,ref:t})})});e_.displayName=JM;var t_="TabsTrigger",n_=Q.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...o}=e,s=cg(t_,n),l=XM(n),p=i_(s.baseId,r),f=o_(s.baseId,r),m=r===s.value;return C.jsx(vE,{asChild:!0,...l,focusable:!a,active:m,children:C.jsx(Fo.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:p,...o,ref:t,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!m&&!a&&d&&s.onValueChange(r)})})})});n_.displayName=t_;var r_="TabsContent",a_=Q.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:o,...s}=e,l=cg(r_,n),p=i_(l.baseId,r),f=o_(l.baseId,r),m=r===l.value,d=Q.useRef(m);return Q.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),C.jsx(QM,{present:a||m,children:({present:v})=>C.jsx(Fo.div,{"data-state":m?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":p,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&o})})});a_.displayName=r_;function i_(e,t){return`${e}-trigger-${t}`}function o_(e,t){return`${e}-content-${t}`}var BE=ZM,wE=e_,PE=n_,SE=a_;function ME({className:e,...t}){return C.jsx(BE,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function _E({className:e,...t}){return C.jsx(wE,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function bI({className:e,...t}){return C.jsx(PE,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function II({className:e,...t}){return C.jsx(SE,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OE=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),xI=e=>{const t=OE(e);return t.charAt(0).toUpperCase()+t.slice(1)},u_=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Q.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:s,...l},p)=>Q.createElement("svg",{ref:p,...WE,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:u_("lucide",a),...l},[...s.map(([f,m])=>Q.createElement(f,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=(e,t)=>{const n=Q.forwardRef(({className:r,...a},o)=>Q.createElement(CE,{ref:o,iconNode:t,className:u_(`lucide-${AE(xI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=xI(e),n};/**
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
 */const jE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],RE=lr("chevron-down",jE);/**
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
 */const qE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],FE=lr("circle-plus",qE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],UE=lr("download",zE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],GE=lr("trending-up",VE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],YE=lr("triangle-alert",KE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],XE=lr("users",QE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],BI=lr("x",ZE);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Ac(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const s_=6048e5,JE=864e5,eT=6e4,tT=36e5,nT=1e3;let rT={};function zo(){return rT}function Ea(e,t){var l,p,f,m;const n=zo(),r=(t==null?void 0:t.weekStartsOn)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Ct(e),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function co(e){return Ea(e,{weekStartsOn:1})}function l_(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=co(r),o=St(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=co(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function wI(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function Oc(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function aT(e,t){const n=wI(e),r=wI(t),a=+n-Oc(n),o=+r-Oc(r);return Math.round((a-o)/JE)}function iT(e){const t=l_(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),co(n)}function oT(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function uT(e){if(!oT(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function sT(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function lT(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function cT(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const pT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fT=(e,t,n)=>{let r;const a=pT[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function x2(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const dT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},hT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},mT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vT={date:x2({formats:dT,defaultWidth:"full"}),time:x2({formats:hT,defaultWidth:"full"}),dateTime:x2({formats:mT,defaultWidth:"full"})},yT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},gT=(e,t,n,r)=>yT[e];function Du(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const o=e.argumentCallback?e.argumentCallback(t):t;return a[o]}}const bT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},IT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},xT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},BT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},PT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ST=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},MT={ordinalNumber:ST,era:Du({values:bT,defaultWidth:"wide"}),quarter:Du({values:IT,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Du({values:xT,defaultWidth:"wide"}),day:Du({values:BT,defaultWidth:"wide"}),dayPeriod:Du({values:wT,defaultWidth:"wide",formattingValues:PT,defaultFormattingWidth:"wide"})};function $u(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;const s=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?AT(l,d=>d.test(s)):_T(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(p):p,f=n.valueCallback?n.valueCallback(f):f;const m=t.slice(s.length);return{value:f,rest:m}}}function _T(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function AT(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function OT(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],o=t.match(e.parsePattern);if(!o)return null;let s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const WT=/^(\d+)(th|st|nd|rd)?/i,CT=/\d+/i,kT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ET={any:[/^b/i,/^(a|c)/i]},TT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},NT={any:[/1/i,/2/i,/3/i,/4/i]},jT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},RT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},HT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},DT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$T={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},LT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qT={ordinalNumber:OT({matchPattern:WT,parsePattern:CT,valueCallback:e=>parseInt(e,10)}),era:$u({matchPatterns:kT,defaultMatchWidth:"wide",parsePatterns:ET,defaultParseWidth:"any"}),quarter:$u({matchPatterns:TT,defaultMatchWidth:"wide",parsePatterns:NT,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$u({matchPatterns:jT,defaultMatchWidth:"wide",parsePatterns:RT,defaultParseWidth:"any"}),day:$u({matchPatterns:HT,defaultMatchWidth:"wide",parsePatterns:DT,defaultParseWidth:"any"}),dayPeriod:$u({matchPatterns:$T,defaultMatchWidth:"any",parsePatterns:LT,defaultParseWidth:"any"})},c_={code:"en-US",formatDistance:fT,formatLong:vT,formatRelative:gT,localize:MT,match:qT,options:{weekStartsOn:0,firstWeekContainsDate:1}};function FT(e){const t=Ct(e);return aT(t,cT(t))+1}function p_(e){const t=Ct(e),n=+co(t)-+iT(t);return Math.round(n/s_)+1}function pg(e,t){var m,d,v,b;const n=Ct(e),r=n.getFullYear(),a=zo(),o=(t==null?void 0:t.firstWeekContainsDate)??((d=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((b=(v=a.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const l=Ea(s,t),p=St(e,0);p.setFullYear(r,0,o),p.setHours(0,0,0,0);const f=Ea(p,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function zT(e,t){var l,p,f,m;const n=zo(),r=(t==null?void 0:t.firstWeekContainsDate)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=pg(e,t),o=St(e,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),Ea(o,t)}function f_(e,t){const n=Ct(e),r=+Ea(n,t)-+zT(n,t);return Math.round(r/s_)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Xi={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},PI={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=pg(e,r),o=a>0?a:1-a;if(t==="YY"){const s=o%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):Je(o,t.length)},R:function(e,t){const n=l_(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=f_(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=p_(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=FT(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return Je(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return Je(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Xi.noon:r===0?a=Xi.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Xi.evening:r>=12?a=Xi.afternoon:r>=4?a=Xi.morning:a=Xi.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return MI(r);case"XXXX":case"XX":return ii(r);case"XXXXX":case"XXX":default:return ii(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return MI(r);case"xxxx":case"xx":return ii(r);case"xxxxx":case"xxx":default:return ii(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+SI(r,":");case"OOOO":default:return"GMT"+ii(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+SI(r,":");case"zzzz":default:return"GMT"+ii(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function SI(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+t+Je(o,2)}function MI(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):ii(e,t)}function ii(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),o=Je(r%60,2);return n+a+t+o}const _I=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},d_=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},UT=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return _I(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",_I(r,t)).replace("{{time}}",d_(a,t))},Wv={p:d_,P:UT},VT=/^D+$/,GT=/^Y+$/,KT=["D","DD","YY","YYYY"];function h_(e){return VT.test(e)}function m_(e){return GT.test(e)}function Cv(e,t,n){const r=YT(e,t,n);if(console.warn(r),KT.includes(e))throw new RangeError(r)}function YT(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const QT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,XT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ZT=/^'([^]*?)'?$/,JT=/''/g,eN=/[a-zA-Z]/;function Wc(e,t,n){var m,d,v,b;const r=zo(),a=r.locale??c_,o=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((b=(v=r.locale)==null?void 0:v.options)==null?void 0:b.weekStartsOn)??0,l=Ct(e);if(!uT(l))throw new RangeError("Invalid time value");let p=t.match(XT).map(B=>{const I=B[0];if(I==="p"||I==="P"){const g=Wv[I];return g(B,a.formatLong)}return B}).join("").match(QT).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:tN(B)};if(PI[I])return{isToken:!0,value:B};if(I.match(eN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(p=a.localize.preprocessor(l,p));const f={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return p.map(B=>{if(!B.isToken)return B.value;const I=B.value;(m_(I)||h_(I))&&Cv(I,t,String(e));const g=PI[I[0]];return g(l,I,a.localize,f)}).join("")}function tN(e){const t=e.match(ZT);return t?t[1].replace(JT,"'"):e}function nN(){return Object.assign({},zo())}function rN(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function aN(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const iN=10;class v_{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class oN extends v_{constructor(t,n,r,a,o){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,o&&(this.subPriority=o)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class uN extends v_{constructor(){super(...arguments);ve(this,"priority",iN);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,aN(n,Date))}}class Ge{run(t,n,r,a){const o=this.parse(t,n,r,a);return o?{setter:new oN(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}validate(t,n,r){return!0}}class sN extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Mt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},vr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function _t(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function yr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,o=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*tT+o*eT+s*nT),rest:t.slice(n[0].length)}}function y_(e){return mt(Mt.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(Mt.singleDigit,t);case 2:return mt(Mt.twoDigits,t);case 3:return mt(Mt.threeDigits,t);case 4:return mt(Mt.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function Cc(e,t){switch(e){case 1:return mt(Mt.singleDigitSigned,t);case 2:return mt(Mt.twoDigitsSigned,t);case 3:return mt(Mt.threeDigitsSigned,t);case 4:return mt(Mt.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function fg(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function g_(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const o=r+50,s=Math.trunc(o/100)*100,l=e>=o%100;a=e+s-(l?100:0)}return n?a:1-a}function b_(e){return e%400===0||e%4===0&&e%100!==0}class lN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const o=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return _t(It(4,n),o);case"yo":return _t(a.ordinalNumber(n,{unit:"year"}),o);default:return _t(It(r.length,n),o)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const o=n.getFullYear();if(a.isTwoDigitYear){const l=g_(a.year,o);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class cN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const o=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return _t(It(4,n),o);case"Yo":return _t(a.ordinalNumber(n,{unit:"year"}),o);default:return _t(It(r.length,n),o)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,o){const s=pg(n,o);if(a.isTwoDigitYear){const p=g_(a.year,s);return n.setFullYear(p,0,o.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,o)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,o.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,o)}}class pN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return Cc(r==="R"?4:r.length,n)}set(n,r,a){const o=St(n,0);return o.setFullYear(a,0,4),o.setHours(0,0,0,0),co(o)}}class fN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return Cc(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class dN extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class hN extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class mN extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const o=s=>s-1;switch(r){case"M":return _t(mt(Mt.month,n),o);case"MM":return _t(It(2,n),o);case"Mo":return _t(a.ordinalNumber(n,{unit:"month"}),o);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class vN extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const o=s=>s-1;switch(r){case"L":return _t(mt(Mt.month,n),o);case"LL":return _t(It(2,n),o);case"Lo":return _t(a.ordinalNumber(n,{unit:"month"}),o);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function yN(e,t,n){const r=Ct(e),a=f_(r,n)-t;return r.setDate(r.getDate()-a*7),r}class gN extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(Mt.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,o){return Ea(yN(n,a,o),o)}}function bN(e,t){const n=Ct(e),r=p_(n)-t;return n.setDate(n.getDate()-r*7),n}class IN extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(Mt.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return co(bN(n,a))}}const xN=[31,28,31,30,31,30,31,31,30,31,30,31],BN=[31,29,31,30,31,30,31,31,30,31,30,31];class wN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(Mt.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),o=b_(a),s=n.getMonth();return o?r>=1&&r<=BN[s]:r>=1&&r<=xN[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class PN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(Mt.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return b_(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function dg(e,t,n){var d,v,b,B;const r=zo(),a=(n==null?void 0:n.weekStartsOn)??((v=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(b=r.locale)==null?void 0:b.options)==null?void 0:B.weekStartsOn)??0,o=Ct(e),s=o.getDay(),p=(t%7+7)%7,f=7-a,m=t<0||t>6?t-(s+f)%7:(p+f)%7-(s+f)%7;return Ac(o,m)}class SN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,o){return n=dg(n,a,o),n.setHours(0,0,0,0),n}}class MN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,o){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+o.weekStartsOn+6)%7+p};switch(r){case"e":case"ee":return _t(It(r.length,n),s);case"eo":return _t(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,o){return n=dg(n,a,o),n.setHours(0,0,0,0),n}}class _N extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,o){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+o.weekStartsOn+6)%7+p};switch(r){case"c":case"cc":return _t(It(r.length,n),s);case"co":return _t(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,o){return n=dg(n,a,o),n.setHours(0,0,0,0),n}}function AN(e,t){const n=Ct(e),r=rN(n),a=t-r;return Ac(n,a)}class ON extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const o=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return _t(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),o);case"iiiii":return _t(a.day(n,{width:"narrow",context:"formatting"}),o);case"iiiiii":return _t(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),o);case"iiii":default:return _t(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),o)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=AN(n,a),n.setHours(0,0,0,0),n}}class WN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(fg(a),0,0,0),n}}class CN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(fg(a),0,0,0),n}}class kN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(fg(a),0,0,0),n}}class EN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(Mt.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const o=n.getHours()>=12;return o&&a<12?n.setHours(a+12,0,0,0):!o&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class TN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(Mt.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class NN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(Mt.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class jN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(Mt.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const o=a<=24?a%24:a;return n.setHours(o,0,0,0),n}}class RN extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(Mt.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class HN extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(Mt.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class DN extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=o=>Math.trunc(o*Math.pow(10,-r.length+3));return _t(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class $N extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return yr(vr.basicOptionalMinutes,n);case"XX":return yr(vr.basic,n);case"XXXX":return yr(vr.basicOptionalSeconds,n);case"XXXXX":return yr(vr.extendedOptionalSeconds,n);case"XXX":default:return yr(vr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Oc(n)-a)}}class LN extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return yr(vr.basicOptionalMinutes,n);case"xx":return yr(vr.basic,n);case"xxxx":return yr(vr.basicOptionalSeconds,n);case"xxxxx":return yr(vr.extendedOptionalSeconds,n);case"xxx":default:return yr(vr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Oc(n)-a)}}class qN extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return y_(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class FN extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return y_(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const zN={G:new sN,y:new lN,Y:new cN,R:new pN,u:new fN,Q:new dN,q:new hN,M:new mN,L:new vN,w:new gN,I:new IN,d:new wN,D:new PN,E:new SN,e:new MN,c:new _N,i:new ON,a:new WN,b:new CN,B:new kN,h:new EN,H:new TN,K:new NN,k:new jN,m:new RN,s:new HN,S:new DN,X:new $N,x:new LN,t:new qN,T:new FN},UN=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,VN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,GN=/^'([^]*?)'?$/,KN=/''/g,YN=/\S/,QN=/[a-zA-Z]/;function XN(e,t,n,r){var I,g,S,M;const a=nN(),o=a.locale??c_,s=a.firstWeekContainsDate??((g=(I=a.locale)==null?void 0:I.options)==null?void 0:g.firstWeekContainsDate)??1,l=a.weekStartsOn??((M=(S=a.locale)==null?void 0:S.options)==null?void 0:M.weekStartsOn)??0,p={firstWeekContainsDate:s,weekStartsOn:l,locale:o},f=[new uN],m=t.match(VN).map(_=>{const O=_[0];if(O in Wv){const w=Wv[O];return w(_,o.formatLong)}return _}).join("").match(UN),d=[];for(let _ of m){m_(_)&&Cv(_,t,e),h_(_)&&Cv(_,t,e);const O=_[0],w=zN[O];if(w){const{incompatibleTokens:A}=w;if(Array.isArray(A)){const P=d.find(W=>A.includes(W.token)||W.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${_}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${_}\` and any other token at the same time`);d.push({token:O,fullToken:_});const E=w.run(e,_,o.match,p);if(!E)return St(n,NaN);f.push(E.setter),e=E.rest}else{if(O.match(QN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(_==="''"?_="'":O==="'"&&(_=ZN(_)),e.indexOf(_)===0)e=e.slice(_.length);else return St(n,NaN)}}if(e.length>0&&YN.test(e))return St(n,NaN);const v=f.map(_=>_.priority).sort((_,O)=>O-_).filter((_,O,w)=>w.indexOf(_)===O).map(_=>f.filter(O=>O.priority===_).sort((O,w)=>w.subPriority-O.subPriority)).map(_=>_[0]);let b=Ct(n);if(isNaN(b.getTime()))return St(n,NaN);const B={};for(const _ of v){if(!_.validate(b,p))return St(n,NaN);const O=_.set(b,B,p);Array.isArray(O)?(b=O[0],Object.assign(B,O[1])):b=O}return St(n,b)}function ZN(e){return e.match(GN)[1].replace(KN,"'")}const gr=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,o,s]=n;return new Date(parseInt(a),parseInt(o)-1,parseInt(s))}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,o,s]=r;return new Date(parseInt(s),parseInt(o)-1,parseInt(a))}return XN(e,"dd-MM-yyyy",new Date)},I_=["january","february","march","april","may","june","july","august","september","october","november","december"],x_=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=I_.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const o=lT(new Date(a,r)),s=sT(new Date(a,r)),l=[];let p=o,f=1;for(;p<=s;){let m=Ac(p,6);m>s&&(m=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${p.getDate()}-${m.getDate()}`,startDate:p,endDate:m}),p=Ac(m,1),f++}return l},B_=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},kv=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=I_.indexOf(n.toLowerCase()),o=parseInt(r);return e.getMonth()===a&&e.getFullYear()===o},JN=e=>Wc(e,"MMM dd, yyyy"),Ev=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Tv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,o=t.get(a)||0;t.set(a,o+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},w_=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},ej=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.total-r.total).slice(0,t)},tj=(e,t="february-2026")=>{if(t==="all"){const n=new Set;return e.forEach(a=>{try{const o=gr(a.createdAt);isNaN(o.getTime())||n.add(`${Wc(o,"MMM yyyy")}|${Wc(o,"MMMM").toLowerCase()}-${o.getFullYear()}`)}catch{}}),Array.from(n).map(a=>{const[o,s]=a.split("|"),l=e.filter(d=>kv(gr(d.createdAt),s)),p=l.length,f=l.filter(d=>d.handled==="Human").length,m=p>0?f/p*100:0;return{week:o,totalSessions:p,humanEscalations:f,escalationRate:m}}).sort((a,o)=>new Date(`1 ${a.week}`).getTime()-new Date(`1 ${o.week}`).getTime()).filter(a=>a.totalSessions>0)}else return x_(t).map(r=>{const a=e.filter(p=>{const f=gr(p.createdAt);return B_(f,r)}),o=a.length,s=a.filter(p=>p.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:o,humanEscalations:s,escalationRate:l}})},nj=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),o=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(o)||a.set(o,new Map);const s=a.get(o),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const o=Array.from(a.entries()).map(([l,p])=>{const f=Array.from(p.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:l,count:m,products:f}}).sort((l,p)=>p.count-l.count),s=o.reduce((l,p)=>l+p.count,0);return{issue:r,count:s,subIssues:o}}).sort((r,a)=>a.count-r.count)},rj=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a"),s=URL.createObjectURL(a);o.setAttribute("href",s),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)};function aj({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),C.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),C.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:C.jsx(GE,{className:"w-6 h-6 text-blue-600"})})]})})}),C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),C.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),C.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),C.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:C.jsx(NE,{className:"w-6 h-6 text-blue-600"})})]})})}),C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),C.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),C.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),C.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:C.jsx(XE,{className:"w-6 h-6 text-orange-600"})})]})})}),C.jsx(zn,{className:n(e.escalationRate),children:C.jsx(Un,{className:"p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),C.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),C.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),C.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:C.jsx(YE,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var B2,AI;function gn(){if(AI)return B2;AI=1;var e=Array.isArray;return B2=e,B2}var w2,OI;function P_(){if(OI)return w2;OI=1;var e=typeof uc=="object"&&uc&&uc.Object===Object&&uc;return w2=e,w2}var P2,WI;function Mr(){if(WI)return P2;WI=1;var e=P_(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return P2=n,P2}var S2,CI;function Us(){if(CI)return S2;CI=1;var e=Mr(),t=e.Symbol;return S2=t,S2}var M2,kI;function ij(){if(kI)return M2;kI=1;var e=Us(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function o(s){var l=n.call(s,a),p=s[a];try{s[a]=void 0;var f=!0}catch{}var m=r.call(s);return f&&(l?s[a]=p:delete s[a]),m}return M2=o,M2}var _2,EI;function oj(){if(EI)return _2;EI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return _2=n,_2}var A2,TI;function Qr(){if(TI)return A2;TI=1;var e=Us(),t=ij(),n=oj(),r="[object Null]",a="[object Undefined]",o=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:o&&o in Object(l)?t(l):n(l)}return A2=s,A2}var O2,NI;function Xr(){if(NI)return O2;NI=1;function e(t){return t!=null&&typeof t=="object"}return O2=e,O2}var W2,jI;function Uo(){if(jI)return W2;jI=1;var e=Qr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return W2=r,W2}var C2,RI;function hg(){if(RI)return C2;RI=1;var e=gn(),t=Uo(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(o,s){if(e(o))return!1;var l=typeof o;return l=="number"||l=="symbol"||l=="boolean"||o==null||t(o)?!0:r.test(o)||!n.test(o)||s!=null&&o in Object(s)}return C2=a,C2}var k2,HI;function Ra(){if(HI)return k2;HI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return k2=e,k2}var E2,DI;function mg(){if(DI)return E2;DI=1;var e=Qr(),t=Ra(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",o="[object Proxy]";function s(l){if(!t(l))return!1;var p=e(l);return p==r||p==a||p==n||p==o}return E2=s,E2}var T2,$I;function uj(){if($I)return T2;$I=1;var e=Mr(),t=e["__core-js_shared__"];return T2=t,T2}var N2,LI;function sj(){if(LI)return N2;LI=1;var e=uj(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return N2=n,N2}var j2,qI;function S_(){if(qI)return j2;qI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return j2=n,j2}var R2,FI;function lj(){if(FI)return R2;FI=1;var e=mg(),t=sj(),n=Ra(),r=S_(),a=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,p=s.toString,f=l.hasOwnProperty,m=RegExp("^"+p.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!n(v)||t(v))return!1;var b=e(v)?m:o;return b.test(r(v))}return R2=d,R2}var H2,zI;function cj(){if(zI)return H2;zI=1;function e(t,n){return t==null?void 0:t[n]}return H2=e,H2}var D2,UI;function Ii(){if(UI)return D2;UI=1;var e=lj(),t=cj();function n(r,a){var o=t(r,a);return e(o)?o:void 0}return D2=n,D2}var $2,VI;function Dp(){if(VI)return $2;VI=1;var e=Ii(),t=e(Object,"create");return $2=t,$2}var L2,GI;function pj(){if(GI)return L2;GI=1;var e=Dp();function t(){this.__data__=e?e(null):{},this.size=0}return L2=t,L2}var q2,KI;function fj(){if(KI)return q2;KI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return q2=e,q2}var F2,YI;function dj(){if(YI)return F2;YI=1;var e=Dp(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(o){var s=this.__data__;if(e){var l=s[o];return l===t?void 0:l}return r.call(s,o)?s[o]:void 0}return F2=a,F2}var z2,QI;function hj(){if(QI)return z2;QI=1;var e=Dp(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var o=this.__data__;return e?o[a]!==void 0:n.call(o,a)}return z2=r,z2}var U2,XI;function mj(){if(XI)return U2;XI=1;var e=Dp(),t="__lodash_hash_undefined__";function n(r,a){var o=this.__data__;return this.size+=this.has(r)?0:1,o[r]=e&&a===void 0?t:a,this}return U2=n,U2}var V2,ZI;function vj(){if(ZI)return V2;ZI=1;var e=pj(),t=fj(),n=dj(),r=hj(),a=mj();function o(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=a,V2=o,V2}var G2,JI;function yj(){if(JI)return G2;JI=1;function e(){this.__data__=[],this.size=0}return G2=e,G2}var K2,ex;function vg(){if(ex)return K2;ex=1;function e(t,n){return t===n||t!==t&&n!==n}return K2=e,K2}var Y2,tx;function $p(){if(tx)return Y2;tx=1;var e=vg();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Y2=t,Y2}var Q2,nx;function gj(){if(nx)return Q2;nx=1;var e=$p(),t=Array.prototype,n=t.splice;function r(a){var o=this.__data__,s=e(o,a);if(s<0)return!1;var l=o.length-1;return s==l?o.pop():n.call(o,s,1),--this.size,!0}return Q2=r,Q2}var X2,rx;function bj(){if(rx)return X2;rx=1;var e=$p();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return X2=t,X2}var Z2,ax;function Ij(){if(ax)return Z2;ax=1;var e=$p();function t(n){return e(this.__data__,n)>-1}return Z2=t,Z2}var J2,ix;function xj(){if(ix)return J2;ix=1;var e=$p();function t(n,r){var a=this.__data__,o=e(a,n);return o<0?(++this.size,a.push([n,r])):a[o][1]=r,this}return J2=t,J2}var ed,ox;function Lp(){if(ox)return ed;ox=1;var e=yj(),t=gj(),n=bj(),r=Ij(),a=xj();function o(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=a,ed=o,ed}var td,ux;function yg(){if(ux)return td;ux=1;var e=Ii(),t=Mr(),n=e(t,"Map");return td=n,td}var nd,sx;function Bj(){if(sx)return nd;sx=1;var e=vj(),t=Lp(),n=yg();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return nd=r,nd}var rd,lx;function wj(){if(lx)return rd;lx=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return rd=e,rd}var ad,cx;function qp(){if(cx)return ad;cx=1;var e=wj();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return ad=t,ad}var id,px;function Pj(){if(px)return id;px=1;var e=qp();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return id=t,id}var od,fx;function Sj(){if(fx)return od;fx=1;var e=qp();function t(n){return e(this,n).get(n)}return od=t,od}var ud,dx;function Mj(){if(dx)return ud;dx=1;var e=qp();function t(n){return e(this,n).has(n)}return ud=t,ud}var sd,hx;function _j(){if(hx)return sd;hx=1;var e=qp();function t(n,r){var a=e(this,n),o=a.size;return a.set(n,r),this.size+=a.size==o?0:1,this}return sd=t,sd}var ld,mx;function gg(){if(mx)return ld;mx=1;var e=Bj(),t=Pj(),n=Sj(),r=Mj(),a=_j();function o(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=a,ld=o,ld}var cd,vx;function M_(){if(vx)return cd;vx=1;var e=gg(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var o=function(){var s=arguments,l=a?a.apply(this,s):s[0],p=o.cache;if(p.has(l))return p.get(l);var f=r.apply(this,s);return o.cache=p.set(l,f)||p,f};return o.cache=new(n.Cache||e),o}return n.Cache=e,cd=n,cd}var pd,yx;function Aj(){if(yx)return pd;yx=1;var e=M_(),t=500;function n(r){var a=e(r,function(s){return o.size===t&&o.clear(),s}),o=a.cache;return a}return pd=n,pd}var fd,gx;function Oj(){if(gx)return fd;gx=1;var e=Aj(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var o=[];return a.charCodeAt(0)===46&&o.push(""),a.replace(t,function(s,l,p,f){o.push(p?f.replace(n,"$1"):l||s)}),o});return fd=r,fd}var dd,bx;function bg(){if(bx)return dd;bx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,o=Array(a);++r<a;)o[r]=n(t[r],r,t);return o}return dd=e,dd}var hd,Ix;function Wj(){if(Ix)return hd;Ix=1;var e=Us(),t=bg(),n=gn(),r=Uo(),a=e?e.prototype:void 0,o=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return o?o.call(l):"";var p=l+"";return p=="0"&&1/l==-1/0?"-0":p}return hd=s,hd}var md,xx;function __(){if(xx)return md;xx=1;var e=Wj();function t(n){return n==null?"":e(n)}return md=t,md}var vd,Bx;function A_(){if(Bx)return vd;Bx=1;var e=gn(),t=hg(),n=Oj(),r=__();function a(o,s){return e(o)?o:t(o,s)?[o]:n(r(o))}return vd=a,vd}var yd,wx;function Fp(){if(wx)return yd;wx=1;var e=Uo();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return yd=t,yd}var gd,Px;function Ig(){if(Px)return gd;Px=1;var e=A_(),t=Fp();function n(r,a){a=e(a,r);for(var o=0,s=a.length;r!=null&&o<s;)r=r[t(a[o++])];return o&&o==s?r:void 0}return gd=n,gd}var bd,Sx;function O_(){if(Sx)return bd;Sx=1;var e=Ig();function t(n,r,a){var o=n==null?void 0:e(n,r);return o===void 0?a:o}return bd=t,bd}var Cj=O_();const An=Xe(Cj);var Id,Mx;function kj(){if(Mx)return Id;Mx=1;function e(t){return t==null}return Id=e,Id}var Ej=kj();const Ee=Xe(Ej);var xd,_x;function Tj(){if(_x)return xd;_x=1;var e=Qr(),t=gn(),n=Xr(),r="[object String]";function a(o){return typeof o=="string"||!t(o)&&n(o)&&e(o)==r}return xd=a,xd}var Nj=Tj();const Vs=Xe(Nj);var jj=mg();const ke=Xe(jj);var Rj=Ra();const Vo=Xe(Rj);var Bd={exports:{}},Ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function Hj(){if(Ax)return Ye;Ax=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(g){if(typeof g=="object"&&g!==null){var S=g.$$typeof;switch(S){case e:switch(g=g.type,g){case n:case a:case r:case f:case m:return g;default:switch(g=g&&g.$$typeof,g){case l:case s:case p:case v:case d:case o:return g;default:return S}}case t:return S}}}return Ye.ContextConsumer=s,Ye.ContextProvider=o,Ye.Element=e,Ye.ForwardRef=p,Ye.Fragment=n,Ye.Lazy=v,Ye.Memo=d,Ye.Portal=t,Ye.Profiler=a,Ye.StrictMode=r,Ye.Suspense=f,Ye.SuspenseList=m,Ye.isAsyncMode=function(){return!1},Ye.isConcurrentMode=function(){return!1},Ye.isContextConsumer=function(g){return I(g)===s},Ye.isContextProvider=function(g){return I(g)===o},Ye.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},Ye.isForwardRef=function(g){return I(g)===p},Ye.isFragment=function(g){return I(g)===n},Ye.isLazy=function(g){return I(g)===v},Ye.isMemo=function(g){return I(g)===d},Ye.isPortal=function(g){return I(g)===t},Ye.isProfiler=function(g){return I(g)===a},Ye.isStrictMode=function(g){return I(g)===r},Ye.isSuspense=function(g){return I(g)===f},Ye.isSuspenseList=function(g){return I(g)===m},Ye.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===n||g===a||g===r||g===f||g===m||g===b||typeof g=="object"&&g!==null&&(g.$$typeof===v||g.$$typeof===d||g.$$typeof===o||g.$$typeof===s||g.$$typeof===p||g.$$typeof===B||g.getModuleId!==void 0)},Ye.typeOf=I,Ye}var Ox;function Dj(){return Ox||(Ox=1,Bd.exports=Hj()),Bd.exports}var $j=Dj(),wd,Wx;function W_(){if(Wx)return wd;Wx=1;var e=Qr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return wd=r,wd}var Pd,Cx;function Lj(){if(Cx)return Pd;Cx=1;var e=W_();function t(n){return e(n)&&n!=+n}return Pd=t,Pd}var qj=Lj();const Go=Xe(qj);var Fj=W_();const zj=Xe(Fj);var an=function(t){return t===0?0:t>0?1:-1},li=function(t){return Vs(t)&&t.indexOf("%")===t.length-1},le=function(t){return zj(t)&&!Go(t)},jt=function(t){return le(t)||Vs(t)},Uj=0,Ha=function(t){var n=++Uj;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Vs(t))return r;var o;if(li(t)){var s=t.indexOf("%");o=n*parseFloat(t.slice(0,s))/100}else o=+t;return Go(o)&&(o=r),a&&o>n&&(o=n),o},Ma=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},Vj=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function kc(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):An(r,t))===n})}var Gj=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,o=0,s=0,l=1/0,p=-1/0,f=0,m=0,d=0;d<n;d++)f=t[d].cx||0,m=t[d].cy||0,r+=f,a+=m,o+=f*m,s+=f*f,l=Math.min(l,f),p=Math.max(p,f);var v=n*s!==r*r?(n*o-r*a)/(n*s-r*r):0;return{xmin:l,xmax:p,a:v,b:(a-v*r)/n}};function uo(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Nv(e){"@babel/helpers - typeof";return Nv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nv(e)}var Kj=["viewBox","children"],Yj=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],kx=["points","pathLength"],Sd={svg:Kj,polygon:kx,polyline:kx},xg=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Ec=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(Q.isValidElement(t)&&(r=t.props),!Vo(r))return null;var a={};return Object.keys(r).forEach(function(o){xg.includes(o)&&(a[o]=n||function(s){return r[o](r,s)})}),a},Qj=function(t,n,r){return function(a){return t(n,r,a),null}},Ta=function(t,n,r){if(!Vo(t)||Nv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(o){var s=t[o];xg.includes(o)&&typeof s=="function"&&(a||(a={}),a[o]=Qj(s,n,r))}),a},Xj=["children"],Zj=["children"];function Ex(e,t){if(e==null)return{};var n=Jj(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function jv(e){"@babel/helpers - typeof";return jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jv(e)}var Tx={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},Nx=null,Md=null,Bg=function e(t){if(t===Nx&&Array.isArray(Md))return Md;var n=[];return Q.Children.forEach(t,function(r){Ee(r)||($j.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),Md=n,Nx=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],Bg(e).forEach(function(a){var o=An(a,"type.displayName")||An(a,"type.name");r.indexOf(o)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var jx=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},eR=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],tR=function(t){return t&&t.type&&Vs(t.type)&&eR.indexOf(t.type)>=0},C_=function(t){return t&&jv(t)==="object"&&"clipDot"in t},nR=function(t,n,r,a){var o,s=(o=Sd==null?void 0:Sd[a])!==null&&o!==void 0?o:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||Yj.includes(n))||r&&xg.includes(n)},Me=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(Q.isValidElement(t)&&(a=t.props),!Vo(a))return null;var o={};return Object.keys(a).forEach(function(s){var l;nR((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(o[s]=a[s])}),o},Rv=function e(t,n){if(t===n)return!0;var r=Q.Children.count(t);if(r!==Q.Children.count(n))return!1;if(r===0)return!0;if(r===1)return Rx(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var o=t[a],s=n[a];if(Array.isArray(o)||Array.isArray(s)){if(!e(o,s))return!1}else if(!Rx(o,s))return!1}return!0},Rx=function(t,n){if(Ee(t)&&Ee(n))return!0;if(!Ee(t)&&!Ee(n)){var r=t.props||{},a=r.children,o=Ex(r,Xj),s=n.props||{},l=s.children,p=Ex(s,Zj);return a&&l?uo(o,p)&&Rv(a,l):!a&&!l?uo(o,p):!1}return!1},Hx=function(t,n){var r=[],a={};return Bg(t).forEach(function(o,s){if(tR(o))r.push(o);else if(o){var l=Ur(o.type),p=n[l]||{},f=p.handler,m=p.once;if(f&&(!m||!a[l])){var d=f(o,l,s);r.push(d),a[l]=!0}}}),r},rR=function(t){var n=t&&t.type;return n&&Tx[n]?Tx[n]:null},aR=function(t,n){return Bg(n).indexOf(t)},iR=["children","width","height","viewBox","className","style","title","desc"];function Hv(){return Hv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hv.apply(this,arguments)}function oR(e,t){if(e==null)return{};var n=uR(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uR(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Dv(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,o=e.className,s=e.style,l=e.title,p=e.desc,f=oR(e,iR),m=a||{width:n,height:r,x:0,y:0},d=Re("recharts-surface",o);return R.createElement("svg",Hv({},Me(f,!0,"svg"),{className:d,width:n,height:r,style:s,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),R.createElement("title",null,l),R.createElement("desc",null,p),t)}var sR=["children","className"];function $v(){return $v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$v.apply(this,arguments)}function lR(e,t){if(e==null)return{};var n=cR(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cR(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=R.forwardRef(function(e,t){var n=e.children,r=e.className,a=lR(e,sR),o=Re("recharts-layer",r);return R.createElement("g",$v({className:o},Me(a,!0),{ref:t}),n)}),ur=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o]},_d,Dx;function pR(){if(Dx)return _d;Dx=1;function e(t,n,r){var a=-1,o=t.length;n<0&&(n=-n>o?0:o+n),r=r>o?o:r,r<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(o);++a<o;)s[a]=t[a+n];return s}return _d=e,_d}var Ad,$x;function fR(){if($x)return Ad;$x=1;var e=pR();function t(n,r,a){var o=n.length;return a=a===void 0?o:a,!r&&a>=o?n:e(n,r,a)}return Ad=t,Ad}var Od,Lx;function k_(){if(Lx)return Od;Lx=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,o="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+o+"]");function p(f){return l.test(f)}return Od=p,Od}var Wd,qx;function dR(){if(qx)return Wd;qx=1;function e(t){return t.split("")}return Wd=e,Wd}var Cd,Fx;function hR(){if(Fx)return Cd;Fx=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,o="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",p="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+p+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",B=f+"?",I="["+o+"]?",g="(?:"+b+"(?:"+[m,d,v].join("|")+")"+I+B+")*",S=I+B+g,M="(?:"+[m+l+"?",l,d,v,s].join("|")+")",_=RegExp(p+"(?="+p+")|"+M+S,"g");function O(w){return w.match(_)||[]}return Cd=O,Cd}var kd,zx;function mR(){if(zx)return kd;zx=1;var e=dR(),t=k_(),n=hR();function r(a){return t(a)?n(a):e(a)}return kd=r,kd}var Ed,Ux;function vR(){if(Ux)return Ed;Ux=1;var e=fR(),t=k_(),n=mR(),r=__();function a(o){return function(s){s=r(s);var l=t(s)?n(s):void 0,p=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return p[o]()+f}}return Ed=a,Ed}var Td,Vx;function yR(){if(Vx)return Td;Vx=1;var e=vR(),t=e("toUpperCase");return Td=t,Td}var gR=yR();const zp=Xe(gR);function at(e){return function(){return e}}const E_=Math.cos,Tc=Math.sin,cr=Math.sqrt,Nc=Math.PI,Up=2*Nc,Lv=Math.PI,qv=2*Lv,oi=1e-6,bR=qv-oi;function T_(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function IR(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return T_;const n=10**t;return function(r){this._+=r[0];for(let a=1,o=r.length;a<o;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class xR{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?T_:IR(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,o,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+o},${this._y1=+s}`}arcTo(t,n,r,a,o){if(t=+t,n=+n,r=+r,a=+a,o=+o,o<0)throw new Error(`negative radius: ${o}`);let s=this._x1,l=this._y1,p=r-t,f=a-n,m=s-t,d=l-n,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>oi)if(!(Math.abs(d*p-f*m)>oi)||!o)this._append`L${this._x1=t},${this._y1=n}`;else{let b=r-s,B=a-l,I=p*p+f*f,g=b*b+B*B,S=Math.sqrt(I),M=Math.sqrt(v),_=o*Math.tan((Lv-Math.acos((I+v-g)/(2*S*M)))/2),O=_/M,w=_/S;Math.abs(O-1)>oi&&this._append`L${t+O*m},${n+O*d}`,this._append`A${o},${o},0,0,${+(d*b>m*B)},${this._x1=t+w*p},${this._y1=n+w*f}`}}arc(t,n,r,a,o,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),p=r*Math.sin(a),f=t+l,m=n+p,d=1^s,v=s?a-o:o-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>oi||Math.abs(this._y1-m)>oi)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%qv+qv),v>bR?this._append`A${r},${r},0,1,${d},${t-l},${n-p}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>oi&&this._append`A${r},${r},0,${+(v>=Lv)},${d},${this._x1=t+r*Math.cos(o)},${this._y1=n+r*Math.sin(o)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function wg(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new xR(t)}function Pg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function N_(e){this._context=e}N_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Vp(e){return new N_(e)}function j_(e){return e[0]}function R_(e){return e[1]}function H_(e,t){var n=at(!0),r=null,a=Vp,o=null,s=wg(l);e=typeof e=="function"?e:e===void 0?j_:at(e),t=typeof t=="function"?t:t===void 0?R_:at(t);function l(p){var f,m=(p=Pg(p)).length,d,v=!1,b;for(r==null&&(o=a(b=s())),f=0;f<=m;++f)!(f<m&&n(d=p[f],f,p))===v&&((v=!v)?o.lineStart():o.lineEnd()),v&&o.point(+e(d,f,p),+t(d,f,p));if(b)return o=null,b+""||null}return l.x=function(p){return arguments.length?(e=typeof p=="function"?p:at(+p),l):e},l.y=function(p){return arguments.length?(t=typeof p=="function"?p:at(+p),l):t},l.defined=function(p){return arguments.length?(n=typeof p=="function"?p:at(!!p),l):n},l.curve=function(p){return arguments.length?(a=p,r!=null&&(o=a(r)),l):a},l.context=function(p){return arguments.length?(p==null?r=o=null:o=a(r=p),l):r},l}function fc(e,t,n){var r=null,a=at(!0),o=null,s=Vp,l=null,p=wg(f);e=typeof e=="function"?e:e===void 0?j_:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?R_:at(+n);function f(d){var v,b,B,I=(d=Pg(d)).length,g,S=!1,M,_=new Array(I),O=new Array(I);for(o==null&&(l=s(M=p())),v=0;v<=I;++v){if(!(v<I&&a(g=d[v],v,d))===S)if(S=!S)b=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),B=v-1;B>=b;--B)l.point(_[B],O[B]);l.lineEnd(),l.areaEnd()}S&&(_[v]=+e(g,v,d),O[v]=+t(g,v,d),l.point(r?+r(g,v,d):_[v],n?+n(g,v,d):O[v]))}if(M)return l=null,M+""||null}function m(){return H_().defined(a).curve(s).context(o)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:at(+d),f):r},f.y=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),n=null,f):t},f.y0=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),f):t},f.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:at(+d),f):n},f.lineX0=f.lineY0=function(){return m().x(e).y(t)},f.lineY1=function(){return m().x(e).y(n)},f.lineX1=function(){return m().x(r).y(t)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:at(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,o!=null&&(l=s(o)),f):s},f.context=function(d){return arguments.length?(d==null?o=l=null:l=s(o=d),f):o},f}class D_{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function BR(e){return new D_(e,!0)}function wR(e){return new D_(e,!1)}const Sg={draw(e,t){const n=cr(t/Nc);e.moveTo(n,0),e.arc(0,0,n,0,Up)}},PR={draw(e,t){const n=cr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},$_=cr(1/3),SR=$_*2,MR={draw(e,t){const n=cr(t/SR),r=n*$_;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},_R={draw(e,t){const n=cr(t),r=-n/2;e.rect(r,r,n,n)}},AR=.8908130915292852,L_=Tc(Nc/10)/Tc(7*Nc/10),OR=Tc(Up/10)*L_,WR=-E_(Up/10)*L_,CR={draw(e,t){const n=cr(t*AR),r=OR*n,a=WR*n;e.moveTo(0,-n),e.lineTo(r,a);for(let o=1;o<5;++o){const s=Up*o/5,l=E_(s),p=Tc(s);e.lineTo(p*n,-l*n),e.lineTo(l*r-p*a,p*r+l*a)}e.closePath()}},Nd=cr(3),kR={draw(e,t){const n=-cr(t/(Nd*3));e.moveTo(0,n*2),e.lineTo(-Nd*n,-n),e.lineTo(Nd*n,-n),e.closePath()}},Hn=-.5,Dn=cr(3)/2,Fv=1/cr(12),ER=(Fv/2+1)*3,TR={draw(e,t){const n=cr(t/ER),r=n/2,a=n*Fv,o=r,s=n*Fv+n,l=-o,p=s;e.moveTo(r,a),e.lineTo(o,s),e.lineTo(l,p),e.lineTo(Hn*r-Dn*a,Dn*r+Hn*a),e.lineTo(Hn*o-Dn*s,Dn*o+Hn*s),e.lineTo(Hn*l-Dn*p,Dn*l+Hn*p),e.lineTo(Hn*r+Dn*a,Hn*a-Dn*r),e.lineTo(Hn*o+Dn*s,Hn*s-Dn*o),e.lineTo(Hn*l+Dn*p,Hn*p-Dn*l),e.closePath()}};function NR(e,t){let n=null,r=wg(a);e=typeof e=="function"?e:at(e||Sg),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let o;if(n||(n=o=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),o)return n=null,o+""||null}return a.type=function(o){return arguments.length?(e=typeof o=="function"?o:at(o),a):e},a.size=function(o){return arguments.length?(t=typeof o=="function"?o:at(+o),a):t},a.context=function(o){return arguments.length?(n=o??null,a):n},a}function jc(){}function Rc(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function q_(e){this._context=e}q_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Rc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Rc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function jR(e){return new q_(e)}function F_(e){this._context=e}F_.prototype={areaStart:jc,areaEnd:jc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Rc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function RR(e){return new F_(e)}function z_(e){this._context=e}z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Rc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function HR(e){return new z_(e)}function U_(e){this._context=e}U_.prototype={areaStart:jc,areaEnd:jc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function DR(e){return new U_(e)}function Gx(e){return e<0?-1:1}function Kx(e,t,n){var r=e._x1-e._x0,a=t-e._x1,o=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(o*a+s*r)/(r+a);return(Gx(o)+Gx(s))*Math.min(Math.abs(o),Math.abs(s),.5*Math.abs(l))||0}function Yx(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function jd(e,t,n){var r=e._x0,a=e._y0,o=e._x1,s=e._y1,l=(o-r)/3;e._context.bezierCurveTo(r+l,a+l*t,o-l,s-l*n,o,s)}function Hc(e){this._context=e}Hc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:jd(this,this._t0,Yx(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,jd(this,Yx(this,n=Kx(this,e,t)),n);break;default:jd(this,this._t0,n=Kx(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function V_(e){this._context=new G_(e)}(V_.prototype=Object.create(Hc.prototype)).point=function(e,t){Hc.prototype.point.call(this,t,e)};function G_(e){this._context=e}G_.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,o){this._context.bezierCurveTo(t,e,r,n,o,a)}};function $R(e){return new Hc(e)}function LR(e){return new V_(e)}function K_(e){this._context=e}K_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=Qx(e),a=Qx(t),o=0,s=1;s<n;++o,++s)this._context.bezierCurveTo(r[0][o],a[0][o],r[1][o],a[1][o],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function Qx(e){var t,n=e.length-1,r,a=new Array(n),o=new Array(n),s=new Array(n);for(a[0]=0,o[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,o[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,o[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/o[t-1],o[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/o[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/o[t];for(o[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)o[t]=2*e[t+1]-a[t+1];return[a,o]}function qR(e){return new K_(e)}function Gp(e,t){this._context=e,this._t=t}Gp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function FR(e){return new Gp(e,.5)}function zR(e){return new Gp(e,0)}function UR(e){return new Gp(e,1)}function po(e,t){if((s=e.length)>1)for(var n=1,r,a,o=e[t[0]],s,l=o.length;n<s;++n)for(a=o,o=e[t[n]],r=0;r<l;++r)o[r][1]+=o[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function zv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function VR(e,t){return e[t]}function GR(e){const t=[];return t.key=e,t}function KR(){var e=at([]),t=zv,n=po,r=VR;function a(o){var s=Array.from(e.apply(this,arguments),GR),l,p=s.length,f=-1,m;for(const d of o)for(l=0,++f;l<p;++l)(s[l][f]=[0,+r(d,s[l].key,f,o)]).data=d;for(l=0,m=Pg(t(s));l<p;++l)s[m[l]].index=l;return n(s,m),s}return a.keys=function(o){return arguments.length?(e=typeof o=="function"?o:at(Array.from(o)),a):e},a.value=function(o){return arguments.length?(r=typeof o=="function"?o:at(+o),a):r},a.order=function(o){return arguments.length?(t=o==null?zv:typeof o=="function"?o:at(Array.from(o)),a):t},a.offset=function(o){return arguments.length?(n=o??po,a):n},a}function YR(e,t){if((r=e.length)>0){for(var n,r,a=0,o=e[0].length,s;a<o;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}po(e,t)}}function QR(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,o=r.length;n<o;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}po(e,t)}}function XR(e,t){if(!(!((s=e.length)>0)||!((o=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,o,s;r<o;++r){for(var l=0,p=0,f=0;l<s;++l){for(var m=e[t[l]],d=m[r][1]||0,v=m[r-1][1]||0,b=(d-v)/2,B=0;B<l;++B){var I=e[t[B]],g=I[r][1]||0,S=I[r-1][1]||0;b+=g-S}p+=d,f+=b*d}a[r-1][1]+=a[r-1][0]=n,p&&(n-=f/p)}a[r-1][1]+=a[r-1][0]=n,po(e,t)}}function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}var ZR=["type","size","sizeType"];function Uv(){return Uv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uv.apply(this,arguments)}function Xx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Zx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xx(Object(n),!0).forEach(function(r){JR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JR(e,t,n){return t=eH(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eH(e){var t=tH(e,"string");return cs(t)=="symbol"?t:t+""}function tH(e,t){if(cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nH(e,t){if(e==null)return{};var n=rH(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Y_={symbolCircle:Sg,symbolCross:PR,symbolDiamond:MR,symbolSquare:_R,symbolStar:CR,symbolTriangle:kR,symbolWye:TR},aH=Math.PI/180,iH=function(t){var n="symbol".concat(zp(t));return Y_[n]||Sg},oH=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*aH;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},uH=function(t,n){Y_["symbol".concat(zp(t))]=n},Kp=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,o=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,p=nH(t,ZR),f=Zx(Zx({},p),{},{type:r,size:o,sizeType:l}),m=function(){var g=iH(r),S=NR().type(g).size(oH(o,l,r));return S()},d=f.className,v=f.cx,b=f.cy,B=Me(f,!0);return v===+v&&b===+b&&o===+o?R.createElement("path",Uv({},B,{className:Re("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(b,")"),d:m()})):null};Kp.registerSymbol=uH;function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function Vv(){return Vv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vv.apply(this,arguments)}function Jx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function sH(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jx(Object(n),!0).forEach(function(r){ps(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cH(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X_(r.key),r)}}function pH(e,t,n){return t&&cH(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fH(e,t,n){return t=Dc(t),dH(e,Q_()?Reflect.construct(t,n||[],Dc(e).constructor):t.apply(e,n))}function dH(e,t){if(t&&(fo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hH(e)}function hH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Q_=function(){return!!e})()}function Dc(e){return Dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Dc(e)}function mH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gv(e,t)}function Gv(e,t){return Gv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gv(e,t)}function ps(e,t,n){return t=X_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X_(e){var t=vH(e,"string");return fo(t)=="symbol"?t:t+""}function vH(e,t){if(fo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $n=32,Mg=(function(e){function t(){return lH(this,t),fH(this,t,arguments)}return mH(t,e),pH(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,o=$n/2,s=$n/6,l=$n/3,p=r.inactive?a:r.color;if(r.type==="plainline")return R.createElement("line",{strokeWidth:4,fill:"none",stroke:p,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:o,x2:$n,y2:o,className:"recharts-legend-icon"});if(r.type==="line")return R.createElement("path",{strokeWidth:4,fill:"none",stroke:p,d:"M0,".concat(o,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(o,`
            H`).concat($n,"M").concat(2*l,",").concat(o,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(o),className:"recharts-legend-icon"});if(r.type==="rect")return R.createElement("path",{stroke:"none",fill:p,d:"M0,".concat($n/8,"h").concat($n,"v").concat($n*3/4,"h").concat(-$n,"z"),className:"recharts-legend-icon"});if(R.isValidElement(r.legendIcon)){var f=sH({},r);return delete f.legendIcon,R.cloneElement(r.legendIcon,f)}return R.createElement(Kp,{fill:p,cx:o,cy:o,size:$n,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,o=a.payload,s=a.iconSize,l=a.layout,p=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:$n,height:$n},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return o.map(function(b,B){var I=b.formatter||p,g=Re(ps(ps({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",b.inactive));if(b.type==="none")return null;var S=ke(b.value)?null:b.value;ur(!ke(b.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var M=b.inactive?f:b.color;return R.createElement("li",Vv({className:g,style:d,key:"legend-item-".concat(B)},Ta(r.props,b,B)),R.createElement(Dv,{width:s,height:s,viewBox:m,style:v},r.renderIcon(b)),R.createElement("span",{className:"recharts-legend-item-text",style:{color:M}},I?I(S,b,B):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,o=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:o==="horizontal"?s:"left"};return R.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(Q.PureComponent);ps(Mg,"displayName","Legend");ps(Mg,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Rd,eB;function yH(){if(eB)return Rd;eB=1;var e=Lp();function t(){this.__data__=new e,this.size=0}return Rd=t,Rd}var Hd,tB;function gH(){if(tB)return Hd;tB=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return Hd=e,Hd}var Dd,nB;function bH(){if(nB)return Dd;nB=1;function e(t){return this.__data__.get(t)}return Dd=e,Dd}var $d,rB;function IH(){if(rB)return $d;rB=1;function e(t){return this.__data__.has(t)}return $d=e,$d}var Ld,aB;function xH(){if(aB)return Ld;aB=1;var e=Lp(),t=yg(),n=gg(),r=200;function a(o,s){var l=this.__data__;if(l instanceof e){var p=l.__data__;if(!t||p.length<r-1)return p.push([o,s]),this.size=++l.size,this;l=this.__data__=new n(p)}return l.set(o,s),this.size=l.size,this}return Ld=a,Ld}var qd,iB;function Z_(){if(iB)return qd;iB=1;var e=Lp(),t=yH(),n=gH(),r=bH(),a=IH(),o=xH();function s(l){var p=this.__data__=new e(l);this.size=p.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=o,qd=s,qd}var Fd,oB;function BH(){if(oB)return Fd;oB=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return Fd=t,Fd}var zd,uB;function wH(){if(uB)return zd;uB=1;function e(t){return this.__data__.has(t)}return zd=e,zd}var Ud,sB;function J_(){if(sB)return Ud;sB=1;var e=gg(),t=BH(),n=wH();function r(a){var o=-1,s=a==null?0:a.length;for(this.__data__=new e;++o<s;)this.add(a[o])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Ud=r,Ud}var Vd,lB;function eA(){if(lB)return Vd;lB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Vd=e,Vd}var Gd,cB;function tA(){if(cB)return Gd;cB=1;function e(t,n){return t.has(n)}return Gd=e,Gd}var Kd,pB;function nA(){if(pB)return Kd;pB=1;var e=J_(),t=eA(),n=tA(),r=1,a=2;function o(s,l,p,f,m,d){var v=p&r,b=s.length,B=l.length;if(b!=B&&!(v&&B>b))return!1;var I=d.get(s),g=d.get(l);if(I&&g)return I==l&&g==s;var S=-1,M=!0,_=p&a?new e:void 0;for(d.set(s,l),d.set(l,s);++S<b;){var O=s[S],w=l[S];if(f)var A=v?f(w,O,S,l,s,d):f(O,w,S,s,l,d);if(A!==void 0){if(A)continue;M=!1;break}if(_){if(!t(l,function(E,P){if(!n(_,P)&&(O===E||m(O,E,p,f,d)))return _.push(P)})){M=!1;break}}else if(!(O===w||m(O,w,p,f,d))){M=!1;break}}return d.delete(s),d.delete(l),M}return Kd=o,Kd}var Yd,fB;function PH(){if(fB)return Yd;fB=1;var e=Mr(),t=e.Uint8Array;return Yd=t,Yd}var Qd,dB;function SH(){if(dB)return Qd;dB=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,o){r[++n]=[o,a]}),r}return Qd=e,Qd}var Xd,hB;function _g(){if(hB)return Xd;hB=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Xd=e,Xd}var Zd,mB;function MH(){if(mB)return Zd;mB=1;var e=Us(),t=PH(),n=vg(),r=nA(),a=SH(),o=_g(),s=1,l=2,p="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",b="[object RegExp]",B="[object Set]",I="[object String]",g="[object Symbol]",S="[object ArrayBuffer]",M="[object DataView]",_=e?e.prototype:void 0,O=_?_.valueOf:void 0;function w(A,E,P,W,N,D,T){switch(P){case M:if(A.byteLength!=E.byteLength||A.byteOffset!=E.byteOffset)return!1;A=A.buffer,E=E.buffer;case S:return!(A.byteLength!=E.byteLength||!D(new t(A),new t(E)));case p:case f:case v:return n(+A,+E);case m:return A.name==E.name&&A.message==E.message;case b:case I:return A==E+"";case d:var F=a;case B:var q=W&s;if(F||(F=o),A.size!=E.size&&!q)return!1;var V=T.get(A);if(V)return V==E;W|=l,T.set(A,E);var Y=r(F(A),F(E),W,N,D,T);return T.delete(A),Y;case g:if(O)return O.call(A)==O.call(E)}return!1}return Zd=w,Zd}var Jd,vB;function rA(){if(vB)return Jd;vB=1;function e(t,n){for(var r=-1,a=n.length,o=t.length;++r<a;)t[o+r]=n[r];return t}return Jd=e,Jd}var eh,yB;function _H(){if(yB)return eh;yB=1;var e=rA(),t=gn();function n(r,a,o){var s=a(r);return t(r)?s:e(s,o(r))}return eh=n,eh}var th,gB;function AH(){if(gB)return th;gB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,o=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[o++]=l)}return s}return th=e,th}var nh,bB;function OH(){if(bB)return nh;bB=1;function e(){return[]}return nh=e,nh}var rh,IB;function WH(){if(IB)return rh;IB=1;var e=AH(),t=OH(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,o=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return rh=o,rh}var ah,xB;function CH(){if(xB)return ah;xB=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return ah=e,ah}var ih,BB;function kH(){if(BB)return ih;BB=1;var e=Qr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return ih=r,ih}var oh,wB;function Ag(){if(wB)return oh;wB=1;var e=kH(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return oh=o,oh}var Qu={exports:{}},uh,PB;function EH(){if(PB)return uh;PB=1;function e(){return!1}return uh=e,uh}Qu.exports;var SB;function aA(){return SB||(SB=1,(function(e,t){var n=Mr(),r=EH(),a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===a,l=s?n.Buffer:void 0,p=l?l.isBuffer:void 0,f=p||r;e.exports=f})(Qu,Qu.exports)),Qu.exports}var sh,MB;function Og(){if(MB)return sh;MB=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var o=typeof r;return a=a??e,!!a&&(o=="number"||o!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return sh=n,sh}var lh,_B;function Wg(){if(_B)return lh;_B=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return lh=t,lh}var ch,AB;function TH(){if(AB)return ch;AB=1;var e=Qr(),t=Wg(),n=Xr(),r="[object Arguments]",a="[object Array]",o="[object Boolean]",s="[object Date]",l="[object Error]",p="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",b="[object Set]",B="[object String]",I="[object WeakMap]",g="[object ArrayBuffer]",S="[object DataView]",M="[object Float32Array]",_="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",A="[object Int32Array]",E="[object Uint8Array]",P="[object Uint8ClampedArray]",W="[object Uint16Array]",N="[object Uint32Array]",D={};D[M]=D[_]=D[O]=D[w]=D[A]=D[E]=D[P]=D[W]=D[N]=!0,D[r]=D[a]=D[g]=D[o]=D[S]=D[s]=D[l]=D[p]=D[f]=D[m]=D[d]=D[v]=D[b]=D[B]=D[I]=!1;function T(F){return n(F)&&t(F.length)&&!!D[e(F)]}return ch=T,ch}var ph,OB;function iA(){if(OB)return ph;OB=1;function e(t){return function(n){return t(n)}}return ph=e,ph}var Xu={exports:{}};Xu.exports;var WB;function NH(){return WB||(WB=1,(function(e,t){var n=P_(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===r,s=o&&n.process,l=(function(){try{var p=a&&a.require&&a.require("util").types;return p||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(Xu,Xu.exports)),Xu.exports}var fh,CB;function oA(){if(CB)return fh;CB=1;var e=TH(),t=iA(),n=NH(),r=n&&n.isTypedArray,a=r?t(r):e;return fh=a,fh}var dh,kB;function jH(){if(kB)return dh;kB=1;var e=CH(),t=Ag(),n=gn(),r=aA(),a=Og(),o=oA(),s=Object.prototype,l=s.hasOwnProperty;function p(f,m){var d=n(f),v=!d&&t(f),b=!d&&!v&&r(f),B=!d&&!v&&!b&&o(f),I=d||v||b||B,g=I?e(f.length,String):[],S=g.length;for(var M in f)(m||l.call(f,M))&&!(I&&(M=="length"||b&&(M=="offset"||M=="parent")||B&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||a(M,S)))&&g.push(M);return g}return dh=p,dh}var hh,EB;function RH(){if(EB)return hh;EB=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return hh=t,hh}var mh,TB;function uA(){if(TB)return mh;TB=1;function e(t,n){return function(r){return t(n(r))}}return mh=e,mh}var vh,NB;function HH(){if(NB)return vh;NB=1;var e=uA(),t=e(Object.keys,Object);return vh=t,vh}var yh,jB;function DH(){if(jB)return yh;jB=1;var e=RH(),t=HH(),n=Object.prototype,r=n.hasOwnProperty;function a(o){if(!e(o))return t(o);var s=[];for(var l in Object(o))r.call(o,l)&&l!="constructor"&&s.push(l);return s}return yh=a,yh}var gh,RB;function Gs(){if(RB)return gh;RB=1;var e=mg(),t=Wg();function n(r){return r!=null&&t(r.length)&&!e(r)}return gh=n,gh}var bh,HB;function Yp(){if(HB)return bh;HB=1;var e=jH(),t=DH(),n=Gs();function r(a){return n(a)?e(a):t(a)}return bh=r,bh}var Ih,DB;function $H(){if(DB)return Ih;DB=1;var e=_H(),t=WH(),n=Yp();function r(a){return e(a,n,t)}return Ih=r,Ih}var xh,$B;function LH(){if($B)return xh;$B=1;var e=$H(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(o,s,l,p,f,m){var d=l&t,v=e(o),b=v.length,B=e(s),I=B.length;if(b!=I&&!d)return!1;for(var g=b;g--;){var S=v[g];if(!(d?S in s:r.call(s,S)))return!1}var M=m.get(o),_=m.get(s);if(M&&_)return M==s&&_==o;var O=!0;m.set(o,s),m.set(s,o);for(var w=d;++g<b;){S=v[g];var A=o[S],E=s[S];if(p)var P=d?p(E,A,S,s,o,m):p(A,E,S,o,s,m);if(!(P===void 0?A===E||f(A,E,l,p,m):P)){O=!1;break}w||(w=S=="constructor")}if(O&&!w){var W=o.constructor,N=s.constructor;W!=N&&"constructor"in o&&"constructor"in s&&!(typeof W=="function"&&W instanceof W&&typeof N=="function"&&N instanceof N)&&(O=!1)}return m.delete(o),m.delete(s),O}return xh=a,xh}var Bh,LB;function qH(){if(LB)return Bh;LB=1;var e=Ii(),t=Mr(),n=e(t,"DataView");return Bh=n,Bh}var wh,qB;function FH(){if(qB)return wh;qB=1;var e=Ii(),t=Mr(),n=e(t,"Promise");return wh=n,wh}var Ph,FB;function sA(){if(FB)return Ph;FB=1;var e=Ii(),t=Mr(),n=e(t,"Set");return Ph=n,Ph}var Sh,zB;function zH(){if(zB)return Sh;zB=1;var e=Ii(),t=Mr(),n=e(t,"WeakMap");return Sh=n,Sh}var Mh,UB;function UH(){if(UB)return Mh;UB=1;var e=qH(),t=yg(),n=FH(),r=sA(),a=zH(),o=Qr(),s=S_(),l="[object Map]",p="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",b=s(e),B=s(t),I=s(n),g=s(r),S=s(a),M=o;return(e&&M(new e(new ArrayBuffer(1)))!=v||t&&M(new t)!=l||n&&M(n.resolve())!=f||r&&M(new r)!=m||a&&M(new a)!=d)&&(M=function(_){var O=o(_),w=O==p?_.constructor:void 0,A=w?s(w):"";if(A)switch(A){case b:return v;case B:return l;case I:return f;case g:return m;case S:return d}return O}),Mh=M,Mh}var _h,VB;function VH(){if(VB)return _h;VB=1;var e=Z_(),t=nA(),n=MH(),r=LH(),a=UH(),o=gn(),s=aA(),l=oA(),p=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,b=v.hasOwnProperty;function B(I,g,S,M,_,O){var w=o(I),A=o(g),E=w?m:a(I),P=A?m:a(g);E=E==f?d:E,P=P==f?d:P;var W=E==d,N=P==d,D=E==P;if(D&&s(I)){if(!s(g))return!1;w=!0,W=!1}if(D&&!W)return O||(O=new e),w||l(I)?t(I,g,S,M,_,O):n(I,g,E,S,M,_,O);if(!(S&p)){var T=W&&b.call(I,"__wrapped__"),F=N&&b.call(g,"__wrapped__");if(T||F){var q=T?I.value():I,V=F?g.value():g;return O||(O=new e),_(q,V,S,M,O)}}return D?(O||(O=new e),r(I,g,S,M,_,O)):!1}return _h=B,_h}var Ah,GB;function Cg(){if(GB)return Ah;GB=1;var e=VH(),t=Xr();function n(r,a,o,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,o,s,n,l)}return Ah=n,Ah}var Oh,KB;function GH(){if(KB)return Oh;KB=1;var e=Z_(),t=Cg(),n=1,r=2;function a(o,s,l,p){var f=l.length,m=f,d=!p;if(o==null)return!m;for(o=Object(o);f--;){var v=l[f];if(d&&v[2]?v[1]!==o[v[0]]:!(v[0]in o))return!1}for(;++f<m;){v=l[f];var b=v[0],B=o[b],I=v[1];if(d&&v[2]){if(B===void 0&&!(b in o))return!1}else{var g=new e;if(p)var S=p(B,I,b,o,s,g);if(!(S===void 0?t(I,B,n|r,p,g):S))return!1}}return!0}return Oh=a,Oh}var Wh,YB;function lA(){if(YB)return Wh;YB=1;var e=Ra();function t(n){return n===n&&!e(n)}return Wh=t,Wh}var Ch,QB;function KH(){if(QB)return Ch;QB=1;var e=lA(),t=Yp();function n(r){for(var a=t(r),o=a.length;o--;){var s=a[o],l=r[s];a[o]=[s,l,e(l)]}return a}return Ch=n,Ch}var kh,XB;function cA(){if(XB)return kh;XB=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return kh=e,kh}var Eh,ZB;function YH(){if(ZB)return Eh;ZB=1;var e=GH(),t=KH(),n=cA();function r(a){var o=t(a);return o.length==1&&o[0][2]?n(o[0][0],o[0][1]):function(s){return s===a||e(s,a,o)}}return Eh=r,Eh}var Th,JB;function QH(){if(JB)return Th;JB=1;function e(t,n){return t!=null&&n in Object(t)}return Th=e,Th}var Nh,ew;function XH(){if(ew)return Nh;ew=1;var e=A_(),t=Ag(),n=gn(),r=Og(),a=Wg(),o=Fp();function s(l,p,f){p=e(p,l);for(var m=-1,d=p.length,v=!1;++m<d;){var b=o(p[m]);if(!(v=l!=null&&f(l,b)))break;l=l[b]}return v||++m!=d?v:(d=l==null?0:l.length,!!d&&a(d)&&r(b,d)&&(n(l)||t(l)))}return Nh=s,Nh}var jh,tw;function ZH(){if(tw)return jh;tw=1;var e=QH(),t=XH();function n(r,a){return r!=null&&t(r,a,e)}return jh=n,jh}var Rh,nw;function JH(){if(nw)return Rh;nw=1;var e=Cg(),t=O_(),n=ZH(),r=hg(),a=lA(),o=cA(),s=Fp(),l=1,p=2;function f(m,d){return r(m)&&a(d)?o(s(m),d):function(v){var b=t(v,m);return b===void 0&&b===d?n(v,m):e(d,b,l|p)}}return Rh=f,Rh}var Hh,rw;function Ko(){if(rw)return Hh;rw=1;function e(t){return t}return Hh=e,Hh}var Dh,aw;function eD(){if(aw)return Dh;aw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return Dh=e,Dh}var $h,iw;function tD(){if(iw)return $h;iw=1;var e=Ig();function t(n){return function(r){return e(r,n)}}return $h=t,$h}var Lh,ow;function nD(){if(ow)return Lh;ow=1;var e=eD(),t=tD(),n=hg(),r=Fp();function a(o){return n(o)?e(r(o)):t(o)}return Lh=a,Lh}var qh,uw;function _r(){if(uw)return qh;uw=1;var e=YH(),t=JH(),n=Ko(),r=gn(),a=nD();function o(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return qh=o,qh}var Fh,sw;function pA(){if(sw)return Fh;sw=1;function e(t,n,r,a){for(var o=t.length,s=r+(a?1:-1);a?s--:++s<o;)if(n(t[s],s,t))return s;return-1}return Fh=e,Fh}var zh,lw;function rD(){if(lw)return zh;lw=1;function e(t){return t!==t}return zh=e,zh}var Uh,cw;function aD(){if(cw)return Uh;cw=1;function e(t,n,r){for(var a=r-1,o=t.length;++a<o;)if(t[a]===n)return a;return-1}return Uh=e,Uh}var Vh,pw;function iD(){if(pw)return Vh;pw=1;var e=pA(),t=rD(),n=aD();function r(a,o,s){return o===o?n(a,o,s):e(a,t,s)}return Vh=r,Vh}var Gh,fw;function oD(){if(fw)return Gh;fw=1;var e=iD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Gh=t,Gh}var Kh,dw;function uD(){if(dw)return Kh;dw=1;function e(t,n,r){for(var a=-1,o=t==null?0:t.length;++a<o;)if(r(n,t[a]))return!0;return!1}return Kh=e,Kh}var Yh,hw;function sD(){if(hw)return Yh;hw=1;function e(){}return Yh=e,Yh}var Qh,mw;function lD(){if(mw)return Qh;mw=1;var e=sA(),t=sD(),n=_g(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(o){return new e(o)}:t;return Qh=a,Qh}var Xh,vw;function cD(){if(vw)return Xh;vw=1;var e=J_(),t=oD(),n=uD(),r=tA(),a=lD(),o=_g(),s=200;function l(p,f,m){var d=-1,v=t,b=p.length,B=!0,I=[],g=I;if(m)B=!1,v=n;else if(b>=s){var S=f?null:a(p);if(S)return o(S);B=!1,v=r,g=new e}else g=f?[]:I;e:for(;++d<b;){var M=p[d],_=f?f(M):M;if(M=m||M!==0?M:0,B&&_===_){for(var O=g.length;O--;)if(g[O]===_)continue e;f&&g.push(_),I.push(M)}else v(g,_,m)||(g!==I&&g.push(_),I.push(M))}return I}return Xh=l,Xh}var Zh,yw;function pD(){if(yw)return Zh;yw=1;var e=_r(),t=cD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return Zh=n,Zh}var fD=pD();const gw=Xe(fD);function fA(e,t,n){return t===!0?gw(e,n):ke(t)?gw(e,t):e}function ho(e){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ho(e)}var dD=["ref"];function bw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bw(Object(n),!0).forEach(function(r){Qp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,hA(r.key),r)}}function mD(e,t,n){return t&&Iw(e.prototype,t),n&&Iw(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vD(e,t,n){return t=$c(t),yD(e,dA()?Reflect.construct(t,n||[],$c(e).constructor):t.apply(e,n))}function yD(e,t){if(t&&(ho(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gD(e)}function gD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dA=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$c(e)}function bD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kv(e,t)}function Kv(e,t){return Kv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kv(e,t)}function Qp(e,t,n){return t=hA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hA(e){var t=ID(e,"string");return ho(t)=="symbol"?t:t+""}function ID(e,t){if(ho(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ho(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function xD(e,t){if(e==null)return{};var n=BD(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function BD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wD(e){return e.value}function PD(e,t){if(R.isValidElement(e))return R.cloneElement(e,t);if(typeof e=="function")return R.createElement(e,t);t.ref;var n=xD(t,dD);return R.createElement(Mg,n)}var xw=1,Wa=(function(e){function t(){var n;hD(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=vD(this,t,[].concat(a)),Qp(n,"lastBoundingBox",{width:-1,height:-1}),n}return bD(t,e),mD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>xw||Math.abs(a.height-this.lastBoundingBox.height)>xw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Rr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,o=a.layout,s=a.align,l=a.verticalAlign,p=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&o==="vertical"){var b=this.getBBoxSnapshot();d={left:((f||0)-b.width)/2}}else d=s==="right"?{right:p&&p.right||0}:{left:p&&p.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var B=this.getBBoxSnapshot();v={top:((m||0)-B.height)/2}}else v=l==="bottom"?{bottom:p&&p.bottom||0}:{top:p&&p.top||0};return Rr(Rr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,o=a.content,s=a.width,l=a.height,p=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=Rr(Rr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(p)),p);return R.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(b){r.wrapperNode=b}},PD(o,Rr(Rr({},this.props),{},{payload:fA(m,f,wD)})))}}],[{key:"getWithHeight",value:function(r,a){var o=Rr(Rr({},this.defaultProps),r.props),s=o.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(Q.PureComponent);Qp(Wa,"displayName","Legend");Qp(Wa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Jh,Bw;function SD(){if(Bw)return Jh;Bw=1;var e=Us(),t=Ag(),n=gn(),r=e?e.isConcatSpreadable:void 0;function a(o){return n(o)||t(o)||!!(r&&o&&o[r])}return Jh=a,Jh}var em,ww;function mA(){if(ww)return em;ww=1;var e=rA(),t=SD();function n(r,a,o,s,l){var p=-1,f=r.length;for(o||(o=t),l||(l=[]);++p<f;){var m=r[p];a>0&&o(m)?a>1?n(m,a-1,o,s,l):e(l,m):s||(l[l.length]=m)}return l}return em=n,em}var tm,Pw;function MD(){if(Pw)return tm;Pw=1;function e(t){return function(n,r,a){for(var o=-1,s=Object(n),l=a(n),p=l.length;p--;){var f=l[t?p:++o];if(r(s[f],f,s)===!1)break}return n}}return tm=e,tm}var nm,Sw;function _D(){if(Sw)return nm;Sw=1;var e=MD(),t=e();return nm=t,nm}var rm,Mw;function vA(){if(Mw)return rm;Mw=1;var e=_D(),t=Yp();function n(r,a){return r&&e(r,a,t)}return rm=n,rm}var am,_w;function AD(){if(_w)return am;_w=1;var e=Gs();function t(n,r){return function(a,o){if(a==null)return a;if(!e(a))return n(a,o);for(var s=a.length,l=r?s:-1,p=Object(a);(r?l--:++l<s)&&o(p[l],l,p)!==!1;);return a}}return am=t,am}var im,Aw;function kg(){if(Aw)return im;Aw=1;var e=vA(),t=AD(),n=t(e);return im=n,im}var om,Ow;function yA(){if(Ow)return om;Ow=1;var e=kg(),t=Gs();function n(r,a){var o=-1,s=t(r)?Array(r.length):[];return e(r,function(l,p,f){s[++o]=a(l,p,f)}),s}return om=n,om}var um,Ww;function OD(){if(Ww)return um;Ww=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return um=e,um}var sm,Cw;function WD(){if(Cw)return sm;Cw=1;var e=Uo();function t(n,r){if(n!==r){var a=n!==void 0,o=n===null,s=n===n,l=e(n),p=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!l&&n>r||l&&p&&m&&!f&&!d||o&&p&&m||!a&&m||!s)return 1;if(!o&&!l&&!d&&n<r||d&&a&&s&&!o&&!l||f&&a&&s||!p&&s||!m)return-1}return 0}return sm=t,sm}var lm,kw;function CD(){if(kw)return lm;kw=1;var e=WD();function t(n,r,a){for(var o=-1,s=n.criteria,l=r.criteria,p=s.length,f=a.length;++o<p;){var m=e(s[o],l[o]);if(m){if(o>=f)return m;var d=a[o];return m*(d=="desc"?-1:1)}}return n.index-r.index}return lm=t,lm}var cm,Ew;function kD(){if(Ew)return cm;Ew=1;var e=bg(),t=Ig(),n=_r(),r=yA(),a=OD(),o=iA(),s=CD(),l=Ko(),p=gn();function f(m,d,v){d.length?d=e(d,function(I){return p(I)?function(g){return t(g,I.length===1?I[0]:I)}:I}):d=[l];var b=-1;d=e(d,o(n));var B=r(m,function(I,g,S){var M=e(d,function(_){return _(I)});return{criteria:M,index:++b,value:I}});return a(B,function(I,g){return s(I,g,v)})}return cm=f,cm}var pm,Tw;function ED(){if(Tw)return pm;Tw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return pm=e,pm}var fm,Nw;function TD(){if(Nw)return fm;Nw=1;var e=ED(),t=Math.max;function n(r,a,o){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,p=t(s.length-a,0),f=Array(p);++l<p;)f[l]=s[a+l];l=-1;for(var m=Array(a+1);++l<a;)m[l]=s[l];return m[a]=o(f),e(r,this,m)}}return fm=n,fm}var dm,jw;function ND(){if(jw)return dm;jw=1;function e(t){return function(){return t}}return dm=e,dm}var hm,Rw;function gA(){if(Rw)return hm;Rw=1;var e=Ii(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return hm=t,hm}var mm,Hw;function jD(){if(Hw)return mm;Hw=1;var e=ND(),t=gA(),n=Ko(),r=t?function(a,o){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(o),writable:!0})}:n;return mm=r,mm}var vm,Dw;function RD(){if(Dw)return vm;Dw=1;var e=800,t=16,n=Date.now;function r(a){var o=0,s=0;return function(){var l=n(),p=t-(l-s);if(s=l,p>0){if(++o>=e)return arguments[0]}else o=0;return a.apply(void 0,arguments)}}return vm=r,vm}var ym,$w;function HD(){if($w)return ym;$w=1;var e=jD(),t=RD(),n=t(e);return ym=n,ym}var gm,Lw;function DD(){if(Lw)return gm;Lw=1;var e=Ko(),t=TD(),n=HD();function r(a,o){return n(t(a,o,e),a+"")}return gm=r,gm}var bm,qw;function Xp(){if(qw)return bm;qw=1;var e=vg(),t=Gs(),n=Og(),r=Ra();function a(o,s,l){if(!r(l))return!1;var p=typeof s;return(p=="number"?t(l)&&n(s,l.length):p=="string"&&s in l)?e(l[s],o):!1}return bm=a,bm}var Im,Fw;function $D(){if(Fw)return Im;Fw=1;var e=mA(),t=kD(),n=DD(),r=Xp(),a=n(function(o,s){if(o==null)return[];var l=s.length;return l>1&&r(o,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(o,e(s,1),[])});return Im=a,Im}var LD=$D();const Eg=Xe(LD);function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}function Yv(){return Yv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yv.apply(this,arguments)}function qD(e,t){return VD(e)||UD(e,t)||zD(e,t)||FD()}function FD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zD(e,t){if(e){if(typeof e=="string")return zw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zw(e,t)}}function zw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function UD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function VD(e){if(Array.isArray(e))return e}function Uw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uw(Object(n),!0).forEach(function(r){GD(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GD(e,t,n){return t=KD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KD(e){var t=YD(e,"string");return fs(t)=="symbol"?t:t+""}function YD(e,t){if(fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function QD(e){return Array.isArray(e)&&jt(e[0])&&jt(e[1])?e.join(" ~ "):e}var XD=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,o=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,p=t.labelStyle,f=p===void 0?{}:p,m=t.payload,d=t.formatter,v=t.itemSorter,b=t.wrapperClassName,B=t.labelClassName,I=t.label,g=t.labelFormatter,S=t.accessibilityLayer,M=S===void 0?!1:S,_=function(){if(m&&m.length){var T={padding:0,margin:0},F=(v?Eg(m,v):m).map(function(q,V){if(q.type==="none")return null;var Y=xm({display:"block",paddingTop:4,paddingBottom:4,color:q.color||"#000"},l),G=q.formatter||d||QD,H=q.value,U=q.name,X=H,j=U;if(G&&X!=null&&j!=null){var $=G(H,U,q,V,m);if(Array.isArray($)){var Z=qD($,2);X=Z[0],j=Z[1]}else X=$}return R.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(V),style:Y},jt(j)?R.createElement("span",{className:"recharts-tooltip-item-name"},j):null,jt(j)?R.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,R.createElement("span",{className:"recharts-tooltip-item-value"},X),R.createElement("span",{className:"recharts-tooltip-item-unit"},q.unit||""))});return R.createElement("ul",{className:"recharts-tooltip-item-list",style:T},F)}return null},O=xm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},o),w=xm({margin:0},f),A=!Ee(I),E=A?I:"",P=Re("recharts-default-tooltip",b),W=Re("recharts-tooltip-label",B);A&&g&&m!==void 0&&m!==null&&(E=g(I,m));var N=M?{role:"status","aria-live":"assertive"}:{};return R.createElement("div",Yv({className:P,style:O},N),R.createElement("p",{className:W,style:w},R.isValidElement(E)?E:"".concat(E)),_())};function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}function dc(e,t,n){return t=ZD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZD(e){var t=JD(e,"string");return ds(t)=="symbol"?t:t+""}function JD(e,t){if(ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Lu="recharts-tooltip-wrapper",e$={visibility:"hidden"};function t$(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return Re(Lu,dc(dc(dc(dc({},"".concat(Lu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(Lu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(Lu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(Lu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Vw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,o=e.position,s=e.reverseDirection,l=e.tooltipDimension,p=e.viewBox,f=e.viewBoxDimension;if(o&&le(o[r]))return o[r];var m=n[r]-l-a,d=n[r]+a;if(t[r])return s[r]?m:d;if(s[r]){var v=m,b=p[r];return v<b?Math.max(d,p[r]):Math.max(m,p[r])}var B=d+l,I=p[r]+f;return B>I?Math.max(m,p[r]):Math.max(d,p[r])}function n$(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function r$(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,o=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,p=e.viewBox,f,m,d;return s.height>0&&s.width>0&&n?(m=Vw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:o,tooltipDimension:s.width,viewBox:p,viewBoxDimension:p.width}),d=Vw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:o,tooltipDimension:s.height,viewBox:p,viewBoxDimension:p.height}),f=n$({translateX:m,translateY:d,useTranslate3d:l})):f=e$,{cssProperties:f,cssClasses:t$({translateX:m,translateY:d,coordinate:n})}}function mo(e){"@babel/helpers - typeof";return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mo(e)}function Gw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Kw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gw(Object(n),!0).forEach(function(r){Xv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,IA(r.key),r)}}function o$(e,t,n){return t&&i$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function u$(e,t,n){return t=Lc(t),s$(e,bA()?Reflect.construct(t,n||[],Lc(e).constructor):t.apply(e,n))}function s$(e,t){if(t&&(mo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l$(e)}function l$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bA=function(){return!!e})()}function Lc(e){return Lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lc(e)}function c$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qv(e,t)}function Qv(e,t){return Qv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qv(e,t)}function Xv(e,t,n){return t=IA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IA(e){var t=p$(e,"string");return mo(t)=="symbol"?t:t+""}function p$(e,t){if(mo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Yw=1,f$=(function(e){function t(){var n;a$(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=u$(this,t,[].concat(a)),Xv(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),Xv(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,p,f,m;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(p=n.props.coordinate)===null||p===void 0?void 0:p.x)!==null&&l!==void 0?l:0,y:(f=(m=n.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),n}return c$(t,e),o$(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Yw||Math.abs(r.height-this.state.lastBoundingBox.height)>Yw)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,o=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,b=a.offset,B=a.position,I=a.reverseDirection,g=a.useTranslate3d,S=a.viewBox,M=a.wrapperStyle,_=r$({allowEscapeViewBox:s,coordinate:m,offsetTopLeft:b,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:g,viewBox:S}),O=_.cssClasses,w=_.cssProperties,A=Kw(Kw({transition:v&&o?"transform ".concat(l,"ms ").concat(p):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&o&&d?"visible":"hidden",position:"absolute",top:0,left:0},M);return R.createElement("div",{tabIndex:-1,className:O,style:A,ref:function(P){r.wrapperNode=P}},f)}}])})(Q.PureComponent),d$=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:d$()};function vo(e){"@babel/helpers - typeof";return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vo(e)}function Qw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qw(Object(n),!0).forEach(function(r){Tg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BA(r.key),r)}}function v$(e,t,n){return t&&m$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function y$(e,t,n){return t=qc(t),g$(e,xA()?Reflect.construct(t,n||[],qc(e).constructor):t.apply(e,n))}function g$(e,t){if(t&&(vo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b$(e)}function b$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xA=function(){return!!e})()}function qc(e){return qc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qc(e)}function I$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zv(e,t)}function Zv(e,t){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,t)}function Tg(e,t,n){return t=BA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BA(e){var t=x$(e,"string");return vo(t)=="symbol"?t:t+""}function x$(e,t){if(vo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function B$(e){return e.dataKey}function w$(e,t){return R.isValidElement(e)?R.cloneElement(e,t):typeof e=="function"?R.createElement(e,t):R.createElement(XD,t)}var Mn=(function(e){function t(){return h$(this,t),y$(this,t,arguments)}return I$(t,e),v$(t,[{key:"render",value:function(){var r=this,a=this.props,o=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,b=a.offset,B=a.payload,I=a.payloadUniqBy,g=a.position,S=a.reverseDirection,M=a.useTranslate3d,_=a.viewBox,O=a.wrapperStyle,w=B??[];d&&w.length&&(w=fA(B.filter(function(E){return E.value!=null&&(E.hide!==!0||r.props.includeHidden)}),I,B$));var A=w.length>0;return R.createElement(f$,{allowEscapeViewBox:s,animationDuration:l,animationEasing:p,isAnimationActive:v,active:o,coordinate:m,hasPayload:A,offset:b,position:g,reverseDirection:S,useTranslate3d:M,viewBox:_,wrapperStyle:O},w$(f,Xw(Xw({},this.props),{},{payload:w})))}}])})(Q.PureComponent);Tg(Mn,"displayName","Tooltip");Tg(Mn,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Bm,Zw;function P$(){if(Zw)return Bm;Zw=1;var e=Mr(),t=function(){return e.Date.now()};return Bm=t,Bm}var wm,Jw;function S$(){if(Jw)return wm;Jw=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return wm=t,wm}var Pm,eP;function M$(){if(eP)return Pm;eP=1;var e=S$(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Pm=n,Pm}var Sm,tP;function wA(){if(tP)return Sm;tP=1;var e=M$(),t=Ra(),n=Uo(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function p(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=t(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=o.test(f);return d||s.test(f)?l(f.slice(2),d?2:8):a.test(f)?r:+f}return Sm=p,Sm}var Mm,nP;function _$(){if(nP)return Mm;nP=1;var e=Ra(),t=P$(),n=wA(),r="Expected a function",a=Math.max,o=Math.min;function s(l,p,f){var m,d,v,b,B,I,g=0,S=!1,M=!1,_=!0;if(typeof l!="function")throw new TypeError(r);p=n(p)||0,e(f)&&(S=!!f.leading,M="maxWait"in f,v=M?a(n(f.maxWait)||0,p):v,_="trailing"in f?!!f.trailing:_);function O(F){var q=m,V=d;return m=d=void 0,g=F,b=l.apply(V,q),b}function w(F){return g=F,B=setTimeout(P,p),S?O(F):b}function A(F){var q=F-I,V=F-g,Y=p-q;return M?o(Y,v-V):Y}function E(F){var q=F-I,V=F-g;return I===void 0||q>=p||q<0||M&&V>=v}function P(){var F=t();if(E(F))return W(F);B=setTimeout(P,A(F))}function W(F){return B=void 0,_&&m?O(F):(m=d=void 0,b)}function N(){B!==void 0&&clearTimeout(B),g=0,m=I=d=B=void 0}function D(){return B===void 0?b:W(t())}function T(){var F=t(),q=E(F);if(m=arguments,d=this,I=F,q){if(B===void 0)return w(I);if(M)return clearTimeout(B),B=setTimeout(P,p),O(I)}return B===void 0&&(B=setTimeout(P,p)),b}return T.cancel=N,T.flush=D,T}return Mm=s,Mm}var _m,rP;function A$(){if(rP)return _m;rP=1;var e=_$(),t=Ra(),n="Expected a function";function r(a,o,s){var l=!0,p=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,p="trailing"in s?!!s.trailing:p),e(a,o,{leading:l,maxWait:o,trailing:p})}return _m=r,_m}var O$=A$();const PA=Xe(O$);function hs(e){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hs(e)}function aP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function hc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?aP(Object(n),!0).forEach(function(r){W$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function W$(e,t,n){return t=C$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C$(e){var t=k$(e,"string");return hs(t)=="symbol"?t:t+""}function k$(e,t){if(hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E$(e,t){return R$(e)||j$(e,t)||N$(e,t)||T$()}function T$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N$(e,t){if(e){if(typeof e=="string")return iP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return iP(e,t)}}function iP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function R$(e){if(Array.isArray(e))return e}var Ng=Q.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,o=e.width,s=o===void 0?"100%":o,l=e.height,p=l===void 0?"100%":l,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,b=e.children,B=e.debounce,I=B===void 0?0:B,g=e.id,S=e.className,M=e.onResize,_=e.style,O=_===void 0?{}:_,w=Q.useRef(null),A=Q.useRef();A.current=M,Q.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var E=Q.useState({containerWidth:a.width,containerHeight:a.height}),P=E$(E,2),W=P[0],N=P[1],D=Q.useCallback(function(F,q){N(function(V){var Y=Math.round(F),G=Math.round(q);return V.containerWidth===Y&&V.containerHeight===G?V:{containerWidth:Y,containerHeight:G}})},[]);Q.useEffect(function(){var F=function(U){var X,j=U[0].contentRect,$=j.width,Z=j.height;D($,Z),(X=A.current)===null||X===void 0||X.call(A,$,Z)};I>0&&(F=PA(F,I,{trailing:!0,leading:!1}));var q=new ResizeObserver(F),V=w.current.getBoundingClientRect(),Y=V.width,G=V.height;return D(Y,G),q.observe(w.current),function(){q.disconnect()}},[D,I]);var T=Q.useMemo(function(){var F=W.containerWidth,q=W.containerHeight;if(F<0||q<0)return null;ur(li(s)||li(p),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,p),ur(!n||n>0,"The aspect(%s) must be greater than zero.",n);var V=li(s)?F:s,Y=li(p)?q:p;n&&n>0&&(V?Y=V/n:Y&&(V=Y*n),v&&Y>v&&(Y=v)),ur(V>0||Y>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,V,Y,s,p,m,d,n);var G=!Array.isArray(b)&&Ur(b.type).endsWith("Chart");return R.Children.map(b,function(H){return R.isValidElement(H)?Q.cloneElement(H,hc({width:V,height:Y},G?{style:hc({height:"100%",width:"100%",maxHeight:Y,maxWidth:V},H.props.style)}:{})):H})},[n,b,p,v,d,m,W,s]);return R.createElement("div",{id:g?"".concat(g):void 0,className:Re("recharts-responsive-container",S),style:hc(hc({},O),{},{width:s,height:p,minWidth:m,minHeight:d,maxHeight:v}),ref:w},T)}),Ks=function(t){return null};Ks.displayName="Cell";function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function oP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oP(Object(n),!0).forEach(function(r){H$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H$(e,t,n){return t=D$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D$(e){var t=$$(e,"string");return ms(t)=="symbol"?t:t+""}function $$(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Zi={widthCache:{},cacheCount:0},L$=2e3,q$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},uP="recharts_measurement_span";function F$(e){var t=Jv({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=F$(n),a=JSON.stringify({text:t,copyStyle:r});if(Zi.widthCache[a])return Zi.widthCache[a];try{var o=document.getElementById(uP);o||(o=document.createElement("span"),o.setAttribute("id",uP),o.setAttribute("aria-hidden","true"),document.body.appendChild(o));var s=Jv(Jv({},q$),r);Object.assign(o.style,s),o.textContent="".concat(t);var l=o.getBoundingClientRect(),p={width:l.width,height:l.height};return Zi.widthCache[a]=p,++Zi.cacheCount>L$&&(Zi.cacheCount=0,Zi.widthCache={}),p}catch{return{width:0,height:0}}},z$=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function Fc(e,t){return K$(e)||G$(e,t)||V$(e,t)||U$()}function U$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V$(e,t){if(e){if(typeof e=="string")return sP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sP(e,t)}}function sP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function K$(e){if(Array.isArray(e))return e}function Y$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X$(r.key),r)}}function Q$(e,t,n){return t&&lP(e.prototype,t),n&&lP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function X$(e){var t=Z$(e,"string");return vs(t)=="symbol"?t:t+""}function Z$(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var cP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,pP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,J$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,eL=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,SA={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},tL=Object.keys(SA),no="NaN";function nL(e,t){return e*SA[t]}var mc=(function(){function e(t,n){Y$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!J$.test(n)&&(this.num=NaN,this.unit=""),tL.includes(n)&&(this.num=nL(t,n),this.unit="px")}return Q$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=eL.exec(n))!==null&&r!==void 0?r:[],o=Fc(a,3),s=o[1],l=o[2];return new e(parseFloat(s),l??"")}}])})();function MA(e){if(e.includes(no))return no;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=cP.exec(t))!==null&&n!==void 0?n:[],a=Fc(r,4),o=a[1],s=a[2],l=a[3],p=mc.parse(o??""),f=mc.parse(l??""),m=s==="*"?p.multiply(f):p.divide(f);if(m.isNaN())return no;t=t.replace(cP,m.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,v=(d=pP.exec(t))!==null&&d!==void 0?d:[],b=Fc(v,4),B=b[1],I=b[2],g=b[3],S=mc.parse(B??""),M=mc.parse(g??""),_=I==="+"?S.add(M):S.subtract(M);if(_.isNaN())return no;t=t.replace(pP,_.toString())}return t}var fP=/\(([^()]*)\)/;function rL(e){for(var t=e;t.includes("(");){var n=fP.exec(t),r=Fc(n,2),a=r[1];t=t.replace(fP,MA(a))}return t}function aL(e){var t=e.replace(/\s+/g,"");return t=rL(t),t=MA(t),t}function iL(e){try{return aL(e)}catch{return no}}function Am(e){var t=iL(e.slice(5,-1));return t===no?"":t}var oL=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],uL=["dx","dy","angle","className","breakAll"];function ey(){return ey=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ey.apply(this,arguments)}function dP(e,t){if(e==null)return{};var n=sL(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function hP(e,t){return fL(e)||pL(e,t)||cL(e,t)||lL()}function lL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cL(e,t){if(e){if(typeof e=="string")return mP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mP(e,t)}}function mP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function fL(e){if(Array.isArray(e))return e}var _A=/[ \f\n\r\t\v\u2028\u2029]+/,AA=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var o=[];Ee(n)||(r?o=n.toString().split(""):o=n.toString().split(_A));var s=o.map(function(p){return{word:p,width:Ju(p,a).width}}),l=r?0:Ju(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},dL=function(t,n,r,a,o){var s=t.maxLines,l=t.children,p=t.style,f=t.breakAll,m=le(s),d=l,v=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return V.reduce(function(Y,G){var H=G.word,U=G.width,X=Y[Y.length-1];if(X&&(a==null||o||X.width+U+r<Number(a)))X.words.push(H),X.width+=U+r;else{var j={words:[H],width:U};Y.push(j)}return Y},[])},b=v(n),B=function(V){return V.reduce(function(Y,G){return Y.width>G.width?Y:G})};if(!m)return b;for(var I="…",g=function(V){var Y=d.slice(0,V),G=AA({breakAll:f,style:p,children:Y+I}).wordsWithComputedWidth,H=v(G),U=H.length>s||B(H).width>Number(a);return[U,H]},S=0,M=d.length-1,_=0,O;S<=M&&_<=d.length-1;){var w=Math.floor((S+M)/2),A=w-1,E=g(A),P=hP(E,2),W=P[0],N=P[1],D=g(w),T=hP(D,1),F=T[0];if(!W&&!F&&(S=w+1),W&&F&&(M=w-1),!W&&F){O=N;break}_++}return O||b},vP=function(t){var n=Ee(t)?[]:t.toString().split(_A);return[{words:n}]},hL=function(t){var n=t.width,r=t.scaleToFit,a=t.children,o=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var p,f,m=AA({breakAll:s,children:a,style:o});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;p=d,f=v}else return vP(a);return dL({breakAll:s,children:a,maxLines:l,style:o},p,f,n,r)}return vP(a)},yP="#808080",vi=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,o=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,p=t.capHeight,f=p===void 0?"0.71em":p,m=t.scaleToFit,d=m===void 0?!1:m,v=t.textAnchor,b=v===void 0?"start":v,B=t.verticalAnchor,I=B===void 0?"end":B,g=t.fill,S=g===void 0?yP:g,M=dP(t,oL),_=Q.useMemo(function(){return hL({breakAll:M.breakAll,children:M.children,maxLines:M.maxLines,scaleToFit:d,style:M.style,width:M.width})},[M.breakAll,M.children,M.maxLines,d,M.style,M.width]),O=M.dx,w=M.dy,A=M.angle,E=M.className,P=M.breakAll,W=dP(M,uL);if(!jt(r)||!jt(o))return null;var N=r+(le(O)?O:0),D=o+(le(w)?w:0),T;switch(I){case"start":T=Am("calc(".concat(f,")"));break;case"middle":T=Am("calc(".concat((_.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:T=Am("calc(".concat(_.length-1," * -").concat(l,")"));break}var F=[];if(d){var q=_[0].width,V=M.width;F.push("scale(".concat((le(V)?V/q:1)/q,")"))}return A&&F.push("rotate(".concat(A,", ").concat(N,", ").concat(D,")")),F.length&&(W.transform=F.join(" ")),R.createElement("text",ey({},Me(W,!0),{x:N,y:D,className:Re("recharts-text",E),textAnchor:b,fill:S.includes("url")?yP:S}),_.map(function(Y,G){var H=Y.words.join(P?"":" ");return R.createElement("tspan",{x:N,dy:G===0?T:l,key:"".concat(H,"-").concat(G)},H)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function mL(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function jg(e){let t,n,r;e.length!==2?(t=Ca,n=(l,p)=>Ca(e(l),p),r=(l,p)=>e(l)-p):(t=e===Ca||e===mL?e:vL,n=e,r=e);function a(l,p,f=0,m=l.length){if(f<m){if(t(p,p)!==0)return m;do{const d=f+m>>>1;n(l[d],p)<0?f=d+1:m=d}while(f<m)}return f}function o(l,p,f=0,m=l.length){if(f<m){if(t(p,p)!==0)return m;do{const d=f+m>>>1;n(l[d],p)<=0?f=d+1:m=d}while(f<m)}return f}function s(l,p,f=0,m=l.length){const d=a(l,p,f,m-1);return d>f&&r(l[d-1],p)>-r(l[d],p)?d-1:d}return{left:a,center:s,right:o}}function vL(){return 0}function OA(e){return e===null?NaN:+e}function*yL(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const gL=jg(Ca),Ys=gL.right;jg(OA).center;class gP extends Map{constructor(t,n=xL){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(bP(this,t))}has(t){return super.has(bP(this,t))}set(t,n){return super.set(bL(this,t),n)}delete(t){return super.delete(IL(this,t))}}function bP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function bL({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function IL({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function xL(e){return e!==null&&typeof e=="object"?e.valueOf():e}function BL(e=Ca){if(e===Ca)return WA;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function WA(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const wL=Math.sqrt(50),PL=Math.sqrt(10),SL=Math.sqrt(2);function zc(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),o=r/Math.pow(10,a),s=o>=wL?10:o>=PL?5:o>=SL?2:1;let l,p,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),p=Math.round(t*f),l/f<e&&++l,p/f>t&&--p,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),p=Math.round(t/f),l*f<e&&++l,p*f>t&&--p),p<l&&.5<=n&&n<2?zc(e,t,n*2):[l,p,f]}function ty(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,o,s]=r?zc(t,e,n):zc(e,t,n);if(!(o>=a))return[];const l=o-a+1,p=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)p[f]=(o-f)/-s;else for(let f=0;f<l;++f)p[f]=(o-f)*s;else if(s<0)for(let f=0;f<l;++f)p[f]=(a+f)/-s;else for(let f=0;f<l;++f)p[f]=(a+f)*s;return p}function ny(e,t,n){return t=+t,e=+e,n=+n,zc(e,t,n)[2]}function ry(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?ny(t,e,n):ny(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function IP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function xP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function CA(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?WA:BL(a);r>n;){if(r-n>600){const p=r-n+1,f=t-n+1,m=Math.log(p),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(p-d)/p)*(f-p/2<0?-1:1),b=Math.max(n,Math.floor(t-f*d/p+v)),B=Math.min(r,Math.floor(t+(p-f)*d/p+v));CA(e,t,b,B,a)}const o=e[t];let s=n,l=r;for(qu(e,n,t),a(e[r],o)>0&&qu(e,n,r);s<l;){for(qu(e,s,l),++s,--l;a(e[s],o)<0;)++s;for(;a(e[l],o)>0;)--l}a(e[n],o)===0?qu(e,n,l):(++l,qu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function qu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function ML(e,t,n){if(e=Float64Array.from(yL(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return xP(e);if(t>=1)return IP(e);var r,a=(r-1)*t,o=Math.floor(a),s=IP(CA(e,o).subarray(0,o+1)),l=xP(e.subarray(o+1));return s+(l-s)*(a-o)}}function _L(e,t,n=OA){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,o=Math.floor(a),s=+n(e[o],o,e),l=+n(e[o+1],o+1,e);return s+(l-s)*(a-o)}}function AL(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,o=new Array(a);++r<a;)o[r]=e+r*n;return o}function Yn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ay=Symbol("implicit");function Rg(){var e=new gP,t=[],n=[],r=ay;function a(o){let s=e.get(o);if(s===void 0){if(r!==ay)return r;e.set(o,s=t.push(o)-1)}return n[s%n.length]}return a.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new gP;for(const s of o)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(o){return arguments.length?(n=Array.from(o),a):n.slice()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return Rg(t,n).unknown(r)},Yn.apply(a,arguments),a}function ys(){var e=Rg().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,o,s,l=!1,p=0,f=0,m=.5;delete e.unknown;function d(){var v=t().length,b=a<r,B=b?a:r,I=b?r:a;o=(I-B)/Math.max(1,v-p+f*2),l&&(o=Math.floor(o)),B+=(I-B-o*(v-p))*m,s=o*(1-p),l&&(B=Math.round(B),s=Math.round(s));var g=AL(v).map(function(S){return B+o*S});return n(b?g.reverse():g)}return e.domain=function(v){return arguments.length?(t(v),d()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,d()},e.bandwidth=function(){return s},e.step=function(){return o},e.round=function(v){return arguments.length?(l=!!v,d()):l},e.padding=function(v){return arguments.length?(p=Math.min(1,f=+v),d()):p},e.paddingInner=function(v){return arguments.length?(p=Math.min(1,v),d()):p},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return ys(t(),[r,a]).round(l).paddingInner(p).paddingOuter(f).align(m)},Yn.apply(d(),arguments)}function kA(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return kA(t())},e}function es(){return kA(ys.apply(null,arguments).paddingInner(1))}function Hg(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function EA(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Qs(){}var gs=.7,Uc=1/gs,so="\\s*([+-]?\\d+)\\s*",bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Br="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",OL=/^#([0-9a-f]{3,8})$/,WL=new RegExp(`^rgb\\(${so},${so},${so}\\)$`),CL=new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`),kL=new RegExp(`^rgba\\(${so},${so},${so},${bs}\\)$`),EL=new RegExp(`^rgba\\(${Br},${Br},${Br},${bs}\\)$`),TL=new RegExp(`^hsl\\(${bs},${Br},${Br}\\)$`),NL=new RegExp(`^hsla\\(${bs},${Br},${Br},${bs}\\)$`),BP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Hg(Qs,Is,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:wP,formatHex:wP,formatHex8:jL,formatHsl:RL,formatRgb:PP,toString:PP});function wP(){return this.rgb().formatHex()}function jL(){return this.rgb().formatHex8()}function RL(){return TA(this).formatHsl()}function PP(){return this.rgb().formatRgb()}function Is(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=OL.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?SP(t):n===3?new yn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?vc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?vc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=WL.exec(e))?new yn(t[1],t[2],t[3],1):(t=CL.exec(e))?new yn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=kL.exec(e))?vc(t[1],t[2],t[3],t[4]):(t=EL.exec(e))?vc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=TL.exec(e))?AP(t[1],t[2]/100,t[3]/100,1):(t=NL.exec(e))?AP(t[1],t[2]/100,t[3]/100,t[4]):BP.hasOwnProperty(e)?SP(BP[e]):e==="transparent"?new yn(NaN,NaN,NaN,0):null}function SP(e){return new yn(e>>16&255,e>>8&255,e&255,1)}function vc(e,t,n,r){return r<=0&&(e=t=n=NaN),new yn(e,t,n,r)}function HL(e){return e instanceof Qs||(e=Is(e)),e?(e=e.rgb(),new yn(e.r,e.g,e.b,e.opacity)):new yn}function iy(e,t,n,r){return arguments.length===1?HL(e):new yn(e,t,n,r??1)}function yn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Hg(yn,iy,EA(Qs,{brighter(e){return e=e==null?Uc:Math.pow(Uc,e),new yn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?gs:Math.pow(gs,e),new yn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new yn(hi(this.r),hi(this.g),hi(this.b),Vc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:MP,formatHex:MP,formatHex8:DL,formatRgb:_P,toString:_P}));function MP(){return`#${ci(this.r)}${ci(this.g)}${ci(this.b)}`}function DL(){return`#${ci(this.r)}${ci(this.g)}${ci(this.b)}${ci((isNaN(this.opacity)?1:this.opacity)*255)}`}function _P(){const e=Vc(this.opacity);return`${e===1?"rgb(":"rgba("}${hi(this.r)}, ${hi(this.g)}, ${hi(this.b)}${e===1?")":`, ${e})`}`}function Vc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function hi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ci(e){return e=hi(e),(e<16?"0":"")+e.toString(16)}function AP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new or(e,t,n,r)}function TA(e){if(e instanceof or)return new or(e.h,e.s,e.l,e.opacity);if(e instanceof Qs||(e=Is(e)),!e)return new or;if(e instanceof or)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),o=Math.max(t,n,r),s=NaN,l=o-a,p=(o+a)/2;return l?(t===o?s=(n-r)/l+(n<r)*6:n===o?s=(r-t)/l+2:s=(t-n)/l+4,l/=p<.5?o+a:2-o-a,s*=60):l=p>0&&p<1?0:s,new or(s,l,p,e.opacity)}function $L(e,t,n,r){return arguments.length===1?TA(e):new or(e,t,n,r??1)}function or(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Hg(or,$L,EA(Qs,{brighter(e){return e=e==null?Uc:Math.pow(Uc,e),new or(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?gs:Math.pow(gs,e),new or(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new yn(Om(e>=240?e-240:e+120,a,r),Om(e,a,r),Om(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new or(OP(this.h),yc(this.s),yc(this.l),Vc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Vc(this.opacity);return`${e===1?"hsl(":"hsla("}${OP(this.h)}, ${yc(this.s)*100}%, ${yc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function OP(e){return e=(e||0)%360,e<0?e+360:e}function yc(e){return Math.max(0,Math.min(1,e||0))}function Om(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Dg=e=>()=>e;function LL(e,t){return function(n){return e+n*t}}function qL(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function FL(e){return(e=+e)==1?NA:function(t,n){return n-t?qL(t,n,e):Dg(isNaN(t)?n:t)}}function NA(e,t){var n=t-e;return n?LL(e,n):Dg(isNaN(e)?t:e)}const WP=(function e(t){var n=FL(t);function r(a,o){var s=n((a=iy(a)).r,(o=iy(o)).r),l=n(a.g,o.g),p=n(a.b,o.b),f=NA(a.opacity,o.opacity);return function(m){return a.r=s(m),a.g=l(m),a.b=p(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function zL(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(o){for(a=0;a<n;++a)r[a]=e[a]*(1-o)+t[a]*o;return r}}function UL(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function VL(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),o=new Array(n),s;for(s=0;s<r;++s)a[s]=Yo(e[s],t[s]);for(;s<n;++s)o[s]=t[s];return function(l){for(s=0;s<r;++s)o[s]=a[s](l);return o}}function GL(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Gc(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function KL(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Yo(e[a],t[a]):r[a]=t[a];return function(o){for(a in n)r[a]=n[a](o);return r}}var oy=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wm=new RegExp(oy.source,"g");function YL(e){return function(){return e}}function QL(e){return function(t){return e(t)+""}}function XL(e,t){var n=oy.lastIndex=Wm.lastIndex=0,r,a,o,s=-1,l=[],p=[];for(e=e+"",t=t+"";(r=oy.exec(e))&&(a=Wm.exec(t));)(o=a.index)>n&&(o=t.slice(n,o),l[s]?l[s]+=o:l[++s]=o),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,p.push({i:s,x:Gc(r,a)})),n=Wm.lastIndex;return n<t.length&&(o=t.slice(n),l[s]?l[s]+=o:l[++s]=o),l.length<2?p[0]?QL(p[0].x):YL(t):(t=p.length,function(f){for(var m=0,d;m<t;++m)l[(d=p[m]).i]=d.x(f);return l.join("")})}function Yo(e,t){var n=typeof t,r;return t==null||n==="boolean"?Dg(t):(n==="number"?Gc:n==="string"?(r=Is(t))?(t=r,WP):XL:t instanceof Is?WP:t instanceof Date?GL:UL(t)?zL:Array.isArray(t)?VL:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?KL:Gc)(e,t)}function $g(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ZL(e,t){t===void 0&&(t=e,e=Yo);for(var n=0,r=t.length-1,a=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return o[l](s-l)}}function JL(e){return function(){return e}}function Kc(e){return+e}var CP=[0,1];function un(e){return e}function uy(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:JL(isNaN(t)?NaN:.5)}function e8(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function t8(e,t,n){var r=e[0],a=e[1],o=t[0],s=t[1];return a<r?(r=uy(a,r),o=n(s,o)):(r=uy(r,a),o=n(o,s)),function(l){return o(r(l))}}function n8(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),o=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=uy(e[s],e[s+1]),o[s]=n(t[s],t[s+1]);return function(l){var p=Ys(e,l,1,r)-1;return o[p](a[p](l))}}function Xs(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Zp(){var e=CP,t=CP,n=Yo,r,a,o,s=un,l,p,f;function m(){var v=Math.min(e.length,t.length);return s!==un&&(s=e8(e[0],e[v-1])),l=v>2?n8:t8,p=f=null,d}function d(v){return v==null||isNaN(v=+v)?o:(p||(p=l(e.map(r),t,n)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=l(t,e.map(r),Gc)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Kc),m()):e.slice()},d.range=function(v){return arguments.length?(t=Array.from(v),m()):t.slice()},d.rangeRound=function(v){return t=Array.from(v),n=$g,m()},d.clamp=function(v){return arguments.length?(s=v?!0:un,m()):s!==un},d.interpolate=function(v){return arguments.length?(n=v,m()):n},d.unknown=function(v){return arguments.length?(o=v,d):o},function(v,b){return r=v,a=b,m()}}function Lg(){return Zp()(un,un)}function r8(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Yc(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function yo(e){return e=Yc(Math.abs(e)),e?e[1]:NaN}function a8(e,t){return function(n,r){for(var a=n.length,o=[],s=0,l=e[0],p=0;a>0&&l>0&&(p+l+1>r&&(l=Math.max(1,r-p)),o.push(n.substring(a-=l,a+l)),!((p+=l+1)>r));)l=e[s=(s+1)%e.length];return o.reverse().join(t)}}function i8(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var o8=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function xs(e){if(!(t=o8.exec(e)))throw new Error("invalid format: "+e);var t;return new qg({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}xs.prototype=qg.prototype;function qg(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}qg.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function u8(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Qc;function s8(e,t){var n=Yc(e,t);if(!n)return Qc=void 0,e.toPrecision(t);var r=n[0],a=n[1],o=a-(Qc=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return o===s?r:o>s?r+new Array(o-s+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Yc(e,Math.max(0,t+o-1))[0]}function kP(e,t){var n=Yc(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const EP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:r8,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>kP(e*100,t),r:kP,s:s8,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function TP(e){return e}var NP=Array.prototype.map,jP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function l8(e){var t=e.grouping===void 0||e.thousands===void 0?TP:a8(NP.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?TP:i8(NP.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",p=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=xs(d);var b=d.fill,B=d.align,I=d.sign,g=d.symbol,S=d.zero,M=d.width,_=d.comma,O=d.precision,w=d.trim,A=d.type;A==="n"?(_=!0,A="g"):EP[A]||(O===void 0&&(O=12),w=!0,A="g"),(S||b==="0"&&B==="=")&&(S=!0,b="0",B="=");var E=(v&&v.prefix!==void 0?v.prefix:"")+(g==="$"?n:g==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),P=(g==="$"?r:/[%p]/.test(A)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),W=EP[A],N=/[defgprs%]/.test(A);O=O===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function D(T){var F=E,q=P,V,Y,G;if(A==="c")q=W(T)+q,T="";else{T=+T;var H=T<0||1/T<0;if(T=isNaN(T)?p:W(Math.abs(T),O),w&&(T=u8(T)),H&&+T==0&&I!=="+"&&(H=!1),F=(H?I==="("?I:l:I==="-"||I==="("?"":I)+F,q=(A==="s"&&!isNaN(T)&&Qc!==void 0?jP[8+Qc/3]:"")+q+(H&&I==="("?")":""),N){for(V=-1,Y=T.length;++V<Y;)if(G=T.charCodeAt(V),48>G||G>57){q=(G===46?a+T.slice(V+1):T.slice(V))+q,T=T.slice(0,V);break}}}_&&!S&&(T=t(T,1/0));var U=F.length+T.length+q.length,X=U<M?new Array(M-U+1).join(b):"";switch(_&&S&&(T=t(X+T,X.length?M-q.length:1/0),X=""),B){case"<":T=F+T+q+X;break;case"=":T=F+X+T+q;break;case"^":T=X.slice(0,U=X.length>>1)+F+T+q+X.slice(U);break;default:T=X+F+T+q;break}return o(T)}return D.toString=function(){return d+""},D}function m(d,v){var b=Math.max(-8,Math.min(8,Math.floor(yo(v)/3)))*3,B=Math.pow(10,-b),I=f((d=xs(d),d.type="f",d),{suffix:jP[8+b/3]});return function(g){return I(B*g)}}return{format:f,formatPrefix:m}}var gc,Fg,jA;c8({thousands:",",grouping:[3],currency:["$",""]});function c8(e){return gc=l8(e),Fg=gc.format,jA=gc.formatPrefix,gc}function p8(e){return Math.max(0,-yo(Math.abs(e)))}function f8(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(yo(t)/3)))*3-yo(Math.abs(e)))}function d8(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,yo(t)-yo(e))+1}function RA(e,t,n,r){var a=ry(e,t,n),o;switch(r=xs(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(o=f8(a,s))&&(r.precision=o),jA(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=d8(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=p8(a))&&(r.precision=o-(r.type==="%")*2);break}}return Fg(r)}function Da(e){var t=e.domain;return e.ticks=function(n){var r=t();return ty(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return RA(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,o=r.length-1,s=r[a],l=r[o],p,f,m=10;for(l<s&&(f=s,s=l,l=f,f=a,a=o,o=f);m-- >0;){if(f=ny(s,l,n),f===p)return r[a]=s,r[o]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;p=f}return e},e}function Xc(){var e=Lg();return e.copy=function(){return Xs(e,Xc())},Yn.apply(e,arguments),Da(e)}function HA(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Kc),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return HA(e).unknown(t)},e=arguments.length?Array.from(e,Kc):[0,1],Da(n)}function DA(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],o=e[r],s;return o<a&&(s=n,n=r,r=s,s=a,a=o,o=s),e[n]=t.floor(a),e[r]=t.ceil(o),e}function RP(e){return Math.log(e)}function HP(e){return Math.exp(e)}function h8(e){return-Math.log(-e)}function m8(e){return-Math.exp(-e)}function v8(e){return isFinite(e)?+("1e"+e):e<0?0:e}function y8(e){return e===10?v8:e===Math.E?Math.exp:t=>Math.pow(e,t)}function g8(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function DP(e){return(t,n)=>-e(-t,n)}function zg(e){const t=e(RP,HP),n=t.domain;let r=10,a,o;function s(){return a=g8(r),o=y8(r),n()[0]<0?(a=DP(a),o=DP(o),e(h8,m8)):e(RP,HP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const p=n();let f=p[0],m=p[p.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),b=a(m),B,I;const g=l==null?10:+l;let S=[];if(!(r%1)&&b-v<g){if(v=Math.floor(v),b=Math.ceil(b),f>0){for(;v<=b;++v)for(B=1;B<r;++B)if(I=v<0?B/o(-v):B*o(v),!(I<f)){if(I>m)break;S.push(I)}}else for(;v<=b;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/o(-v):B*o(v),!(I<f)){if(I>m)break;S.push(I)}S.length*2<g&&(S=ty(f,m,g))}else S=ty(v,b,Math.min(b-v,g)).map(o);return d?S.reverse():S},t.tickFormat=(l,p)=>{if(l==null&&(l=10),p==null&&(p=r===10?"s":","),typeof p!="function"&&(!(r%1)&&(p=xs(p)).precision==null&&(p.trim=!0),p=Fg(p)),l===1/0)return p;const f=Math.max(1,r*l/t.ticks().length);return m=>{let d=m/o(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?p(m):""}},t.nice=()=>n(DA(n(),{floor:l=>o(Math.floor(a(l))),ceil:l=>o(Math.ceil(a(l)))})),t}function $A(){const e=zg(Zp()).domain([1,10]);return e.copy=()=>Xs(e,$A()).base(e.base()),Yn.apply(e,arguments),e}function $P(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function LP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Ug(e){var t=1,n=e($P(t),LP(t));return n.constant=function(r){return arguments.length?e($P(t=+r),LP(t)):t},Da(n)}function LA(){var e=Ug(Zp());return e.copy=function(){return Xs(e,LA()).constant(e.constant())},Yn.apply(e,arguments)}function qP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function b8(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function I8(e){return e<0?-e*e:e*e}function Vg(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(b8,I8):e(qP(n),qP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Da(t)}function Gg(){var e=Vg(Zp());return e.copy=function(){return Xs(e,Gg()).exponent(e.exponent())},Yn.apply(e,arguments),e}function x8(){return Gg.apply(null,arguments).exponent(.5)}function FP(e){return Math.sign(e)*e*e}function B8(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function qA(){var e=Lg(),t=[0,1],n=!1,r;function a(o){var s=B8(e(o));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(o){return e.invert(FP(o))},a.domain=function(o){return arguments.length?(e.domain(o),a):e.domain()},a.range=function(o){return arguments.length?(e.range((t=Array.from(o,Kc)).map(FP)),a):t.slice()},a.rangeRound=function(o){return a.range(o).round(!0)},a.round=function(o){return arguments.length?(n=!!o,a):n},a.clamp=function(o){return arguments.length?(e.clamp(o),a):e.clamp()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return qA(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Yn.apply(a,arguments),Da(a)}function FA(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=_L(e,s/l);return o}function o(s){return s==null||isNaN(s=+s)?r:t[Ys(n,s)]}return o.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},o.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},o.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},o.unknown=function(s){return arguments.length?(r=s,o):r},o.quantiles=function(){return n.slice()},o.copy=function(){return FA().domain(e).range(t).unknown(r)},Yn.apply(o,arguments)}function zA(){var e=0,t=1,n=1,r=[.5],a=[0,1],o;function s(p){return p!=null&&p<=p?a[Ys(r,p,0,n)]:o}function l(){var p=-1;for(r=new Array(n);++p<n;)r[p]=((p+1)*t-(p-n)*e)/(n+1);return s}return s.domain=function(p){return arguments.length?([e,t]=p,e=+e,t=+t,l()):[e,t]},s.range=function(p){return arguments.length?(n=(a=Array.from(p)).length-1,l()):a.slice()},s.invertExtent=function(p){var f=a.indexOf(p);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(p){return arguments.length&&(o=p),s},s.thresholds=function(){return r.slice()},s.copy=function(){return zA().domain([e,t]).range(a).unknown(o)},Yn.apply(Da(s),arguments)}function UA(){var e=[.5],t=[0,1],n,r=1;function a(o){return o!=null&&o<=o?t[Ys(e,o,0,r)]:n}return a.domain=function(o){return arguments.length?(e=Array.from(o),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(o){return arguments.length?(t=Array.from(o),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(o){var s=t.indexOf(o);return[e[s-1],e[s]]},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return UA().domain(e).range(t).unknown(n)},Yn.apply(a,arguments)}const Cm=new Date,km=new Date;function Rt(e,t,n,r){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),a.round=o=>{const s=a(o),l=a.ceil(o);return o-s<l-o?s:l},a.offset=(o,s)=>(t(o=new Date(+o),s==null?1:Math.floor(s)),o),a.range=(o,s,l)=>{const p=[];if(o=a.ceil(o),l=l==null?1:Math.floor(l),!(o<s)||!(l>0))return p;let f;do p.push(f=new Date(+o)),t(o,l),e(o);while(f<o&&o<s);return p},a.filter=o=>Rt(s=>{if(s>=s)for(;e(s),!o(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!o(s););else for(;--l>=0;)for(;t(s,1),!o(s););}),n&&(a.count=(o,s)=>(Cm.setTime(+o),km.setTime(+s),e(Cm),e(km),Math.floor(n(Cm,km))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(r?s=>r(s)%o===0:s=>a.count(0,s)%o===0):a)),a}const Zc=Rt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Zc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Rt(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Zc);Zc.range;const $r=1e3,Vn=$r*60,Lr=Vn*60,Gr=Lr*24,Kg=Gr*7,zP=Gr*30,Em=Gr*365,pi=Rt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());pi.range;const Yg=Rt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getMinutes());Yg.range;const Qg=Rt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCMinutes());Qg.range;const Xg=Rt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());Xg.range;const Zg=Rt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());Zg.range;const Zs=Rt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Vn)/Gr,e=>e.getDate()-1);Zs.range;const Jp=Rt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>e.getUTCDate()-1);Jp.range;const VA=Rt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>Math.floor(e/Gr));VA.range;function xi(e){return Rt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Vn)/Kg)}const e0=xi(0),Jc=xi(1),w8=xi(2),P8=xi(3),go=xi(4),S8=xi(5),M8=xi(6);e0.range;Jc.range;w8.range;P8.range;go.range;S8.range;M8.range;function Bi(e){return Rt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Kg)}const t0=Bi(0),ep=Bi(1),_8=Bi(2),A8=Bi(3),bo=Bi(4),O8=Bi(5),W8=Bi(6);t0.range;ep.range;_8.range;A8.range;bo.range;O8.range;W8.range;const Jg=Rt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Jg.range;const eb=Rt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());eb.range;const Kr=Rt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Rt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Yr=Rt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Yr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Rt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Yr.range;function GA(e,t,n,r,a,o){const s=[[pi,1,$r],[pi,5,5*$r],[pi,15,15*$r],[pi,30,30*$r],[o,1,Vn],[o,5,5*Vn],[o,15,15*Vn],[o,30,30*Vn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[n,1,Kg],[t,1,zP],[t,3,3*zP],[e,1,Em]];function l(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const b=d&&typeof d.range=="function"?d:p(f,m,d),B=b?b.range(f,+m+1):[];return v?B.reverse():B}function p(f,m,d){const v=Math.abs(m-f)/d,b=jg(([,,g])=>g).right(s,v);if(b===s.length)return e.every(ry(f/Em,m/Em,d));if(b===0)return Zc.every(Math.max(ry(f,m,d),1));const[B,I]=s[v/s[b-1][2]<s[b][2]/v?b-1:b];return B.every(I)}return[l,p]}const[C8,k8]=GA(Yr,eb,t0,VA,Zg,Qg),[E8,T8]=GA(Kr,Jg,e0,Zs,Xg,Yg);function Tm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Nm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Fu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function N8(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,o=e.days,s=e.shortDays,l=e.months,p=e.shortMonths,f=zu(a),m=Uu(a),d=zu(o),v=Uu(o),b=zu(s),B=Uu(s),I=zu(l),g=Uu(l),S=zu(p),M=Uu(p),_={a:G,A:H,b:U,B:X,c:null,d:QP,e:QP,f:a5,g:h5,G:v5,H:t5,I:n5,j:r5,L:KA,m:i5,M:o5,p:j,q:$,Q:JP,s:eS,S:u5,u:s5,U:l5,V:c5,w:p5,W:f5,x:null,X:null,y:d5,Y:m5,Z:y5,"%":ZP},O={a:Z,A:ue,b:he,B:ye,c:null,d:XP,e:XP,f:x5,g:C5,G:E5,H:g5,I:b5,j:I5,L:QA,m:B5,M:w5,p:ge,q:fe,Q:JP,s:eS,S:P5,u:S5,U:M5,V:_5,w:A5,W:O5,x:null,X:null,y:W5,Y:k5,Z:T5,"%":ZP},w={a:N,A:D,b:T,B:F,c:q,d:KP,e:KP,f:X8,g:GP,G:VP,H:YP,I:YP,j:G8,L:Q8,m:V8,M:K8,p:W,q:U8,Q:J8,s:e5,S:Y8,u:$8,U:L8,V:q8,w:D8,W:F8,x:V,X:Y,y:GP,Y:VP,Z:z8,"%":Z8};_.x=A(n,_),_.X=A(r,_),_.c=A(t,_),O.x=A(n,O),O.X=A(r,O),O.c=A(t,O);function A(ne,de){return function(pe){var re=[],je=-1,Pe=0,Ce=ne.length,_e,qe,He;for(pe instanceof Date||(pe=new Date(+pe));++je<Ce;)ne.charCodeAt(je)===37&&(re.push(ne.slice(Pe,je)),(qe=UP[_e=ne.charAt(++je)])!=null?_e=ne.charAt(++je):qe=_e==="e"?" ":"0",(He=de[_e])&&(_e=He(pe,qe)),re.push(_e),Pe=je+1);return re.push(ne.slice(Pe,je)),re.join("")}}function E(ne,de){return function(pe){var re=Fu(1900,void 0,1),je=P(re,ne,pe+="",0),Pe,Ce;if(je!=pe.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Nm(Fu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?ep.ceil(Pe):ep(Pe),Pe=Jp.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Tm(Fu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?Jc.ceil(Pe):Jc(Pe),Pe=Zs.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Nm(Fu(re.y,0,1)).getUTCDay():Tm(Fu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Nm(re)):Tm(re)}}function P(ne,de,pe,re){for(var je=0,Pe=de.length,Ce=pe.length,_e,qe;je<Pe;){if(re>=Ce)return-1;if(_e=de.charCodeAt(je++),_e===37){if(_e=de.charAt(je++),qe=w[_e in UP?de.charAt(je++):_e],!qe||(re=qe(ne,pe,re))<0)return-1}else if(_e!=pe.charCodeAt(re++))return-1}return re}function W(ne,de,pe){var re=f.exec(de.slice(pe));return re?(ne.p=m.get(re[0].toLowerCase()),pe+re[0].length):-1}function N(ne,de,pe){var re=b.exec(de.slice(pe));return re?(ne.w=B.get(re[0].toLowerCase()),pe+re[0].length):-1}function D(ne,de,pe){var re=d.exec(de.slice(pe));return re?(ne.w=v.get(re[0].toLowerCase()),pe+re[0].length):-1}function T(ne,de,pe){var re=S.exec(de.slice(pe));return re?(ne.m=M.get(re[0].toLowerCase()),pe+re[0].length):-1}function F(ne,de,pe){var re=I.exec(de.slice(pe));return re?(ne.m=g.get(re[0].toLowerCase()),pe+re[0].length):-1}function q(ne,de,pe){return P(ne,t,de,pe)}function V(ne,de,pe){return P(ne,n,de,pe)}function Y(ne,de,pe){return P(ne,r,de,pe)}function G(ne){return s[ne.getDay()]}function H(ne){return o[ne.getDay()]}function U(ne){return p[ne.getMonth()]}function X(ne){return l[ne.getMonth()]}function j(ne){return a[+(ne.getHours()>=12)]}function $(ne){return 1+~~(ne.getMonth()/3)}function Z(ne){return s[ne.getUTCDay()]}function ue(ne){return o[ne.getUTCDay()]}function he(ne){return p[ne.getUTCMonth()]}function ye(ne){return l[ne.getUTCMonth()]}function ge(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=A(ne+="",_);return de.toString=function(){return ne},de},parse:function(ne){var de=E(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=A(ne+="",O);return de.toString=function(){return ne},de},utcParse:function(ne){var de=E(ne+="",!0);return de.toString=function(){return ne},de}}}var UP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,j8=/^%/,R8=/[\\^$*+?|[\]().{}]/g;function Ve(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",o=a.length;return r+(o<n?new Array(n-o+1).join(t)+a:a)}function H8(e){return e.replace(R8,"\\$&")}function zu(e){return new RegExp("^(?:"+e.map(H8).join("|")+")","i")}function Uu(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function D8(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function $8(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function L8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function q8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function F8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function VP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function GP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function z8(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function U8(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function V8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function KP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function G8(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function YP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function K8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Y8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Q8(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function X8(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function Z8(e,t,n){var r=j8.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function J8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function e5(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function QP(e,t){return Ve(e.getDate(),t,2)}function t5(e,t){return Ve(e.getHours(),t,2)}function n5(e,t){return Ve(e.getHours()%12||12,t,2)}function r5(e,t){return Ve(1+Zs.count(Kr(e),e),t,3)}function KA(e,t){return Ve(e.getMilliseconds(),t,3)}function a5(e,t){return KA(e,t)+"000"}function i5(e,t){return Ve(e.getMonth()+1,t,2)}function o5(e,t){return Ve(e.getMinutes(),t,2)}function u5(e,t){return Ve(e.getSeconds(),t,2)}function s5(e){var t=e.getDay();return t===0?7:t}function l5(e,t){return Ve(e0.count(Kr(e)-1,e),t,2)}function YA(e){var t=e.getDay();return t>=4||t===0?go(e):go.ceil(e)}function c5(e,t){return e=YA(e),Ve(go.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function p5(e){return e.getDay()}function f5(e,t){return Ve(Jc.count(Kr(e)-1,e),t,2)}function d5(e,t){return Ve(e.getFullYear()%100,t,2)}function h5(e,t){return e=YA(e),Ve(e.getFullYear()%100,t,2)}function m5(e,t){return Ve(e.getFullYear()%1e4,t,4)}function v5(e,t){var n=e.getDay();return e=n>=4||n===0?go(e):go.ceil(e),Ve(e.getFullYear()%1e4,t,4)}function y5(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ve(t/60|0,"0",2)+Ve(t%60,"0",2)}function XP(e,t){return Ve(e.getUTCDate(),t,2)}function g5(e,t){return Ve(e.getUTCHours(),t,2)}function b5(e,t){return Ve(e.getUTCHours()%12||12,t,2)}function I5(e,t){return Ve(1+Jp.count(Yr(e),e),t,3)}function QA(e,t){return Ve(e.getUTCMilliseconds(),t,3)}function x5(e,t){return QA(e,t)+"000"}function B5(e,t){return Ve(e.getUTCMonth()+1,t,2)}function w5(e,t){return Ve(e.getUTCMinutes(),t,2)}function P5(e,t){return Ve(e.getUTCSeconds(),t,2)}function S5(e){var t=e.getUTCDay();return t===0?7:t}function M5(e,t){return Ve(t0.count(Yr(e)-1,e),t,2)}function XA(e){var t=e.getUTCDay();return t>=4||t===0?bo(e):bo.ceil(e)}function _5(e,t){return e=XA(e),Ve(bo.count(Yr(e),e)+(Yr(e).getUTCDay()===4),t,2)}function A5(e){return e.getUTCDay()}function O5(e,t){return Ve(ep.count(Yr(e)-1,e),t,2)}function W5(e,t){return Ve(e.getUTCFullYear()%100,t,2)}function C5(e,t){return e=XA(e),Ve(e.getUTCFullYear()%100,t,2)}function k5(e,t){return Ve(e.getUTCFullYear()%1e4,t,4)}function E5(e,t){var n=e.getUTCDay();return e=n>=4||n===0?bo(e):bo.ceil(e),Ve(e.getUTCFullYear()%1e4,t,4)}function T5(){return"+0000"}function ZP(){return"%"}function JP(e){return+e}function eS(e){return Math.floor(+e/1e3)}var Ji,ZA,JA;N5({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function N5(e){return Ji=N8(e),ZA=Ji.format,Ji.parse,JA=Ji.utcFormat,Ji.utcParse,Ji}function j5(e){return new Date(e)}function R5(e){return e instanceof Date?+e:+new Date(+e)}function tb(e,t,n,r,a,o,s,l,p,f){var m=Lg(),d=m.invert,v=m.domain,b=f(".%L"),B=f(":%S"),I=f("%I:%M"),g=f("%I %p"),S=f("%a %d"),M=f("%b %d"),_=f("%B"),O=f("%Y");function w(A){return(p(A)<A?b:l(A)<A?B:s(A)<A?I:o(A)<A?g:r(A)<A?a(A)<A?S:M:n(A)<A?_:O)(A)}return m.invert=function(A){return new Date(d(A))},m.domain=function(A){return arguments.length?v(Array.from(A,R5)):v().map(j5)},m.ticks=function(A){var E=v();return e(E[0],E[E.length-1],A??10)},m.tickFormat=function(A,E){return E==null?w:f(E)},m.nice=function(A){var E=v();return(!A||typeof A.range!="function")&&(A=t(E[0],E[E.length-1],A??10)),A?v(DA(E,A)):m},m.copy=function(){return Xs(m,tb(e,t,n,r,a,o,s,l,p,f))},m}function H5(){return Yn.apply(tb(E8,T8,Kr,Jg,e0,Zs,Xg,Yg,pi,ZA).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function D5(){return Yn.apply(tb(C8,k8,Yr,eb,t0,Jp,Zg,Qg,pi,JA).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function n0(){var e=0,t=1,n,r,a,o,s=un,l=!1,p;function f(d){return d==null||isNaN(d=+d)?p:s(a===0?.5:(d=(o(d)-n)*a,l?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,t]=d,n=o(e=+e),r=o(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(d){return arguments.length?(l=!!d,f):l},f.interpolator=function(d){return arguments.length?(s=d,f):s};function m(d){return function(v){var b,B;return arguments.length?([b,B]=v,s=d(b,B),f):[s(0),s(1)]}}return f.range=m(Yo),f.rangeRound=m($g),f.unknown=function(d){return arguments.length?(p=d,f):p},function(d){return o=d,n=d(e),r=d(t),a=n===r?0:1/(r-n),f}}function $a(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function eO(){var e=Da(n0()(un));return e.copy=function(){return $a(e,eO())},Jr.apply(e,arguments)}function tO(){var e=zg(n0()).domain([1,10]);return e.copy=function(){return $a(e,tO()).base(e.base())},Jr.apply(e,arguments)}function nO(){var e=Ug(n0());return e.copy=function(){return $a(e,nO()).constant(e.constant())},Jr.apply(e,arguments)}function nb(){var e=Vg(n0());return e.copy=function(){return $a(e,nb()).exponent(e.exponent())},Jr.apply(e,arguments)}function $5(){return nb.apply(null,arguments).exponent(.5)}function rO(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Ys(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,o)=>ML(e,o/r))},n.copy=function(){return rO(t).domain(e)},Jr.apply(n,arguments)}function r0(){var e=0,t=.5,n=1,r=1,a,o,s,l,p,f=un,m,d=!1,v;function b(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-o)*(r*I<r*o?l:p),f(d?Math.max(0,Math.min(1,I)):I))}b.domain=function(I){return arguments.length?([e,t,n]=I,a=m(e=+e),o=m(t=+t),s=m(n=+n),l=a===o?0:.5/(o-a),p=o===s?0:.5/(s-o),r=o<a?-1:1,b):[e,t,n]},b.clamp=function(I){return arguments.length?(d=!!I,b):d},b.interpolator=function(I){return arguments.length?(f=I,b):f};function B(I){return function(g){var S,M,_;return arguments.length?([S,M,_]=g,f=ZL(I,[S,M,_]),b):[f(0),f(.5),f(1)]}}return b.range=B(Yo),b.rangeRound=B($g),b.unknown=function(I){return arguments.length?(v=I,b):v},function(I){return m=I,a=I(e),o=I(t),s=I(n),l=a===o?0:.5/(o-a),p=o===s?0:.5/(s-o),r=o<a?-1:1,b}}function aO(){var e=Da(r0()(un));return e.copy=function(){return $a(e,aO())},Jr.apply(e,arguments)}function iO(){var e=zg(r0()).domain([.1,1,10]);return e.copy=function(){return $a(e,iO()).base(e.base())},Jr.apply(e,arguments)}function oO(){var e=Ug(r0());return e.copy=function(){return $a(e,oO()).constant(e.constant())},Jr.apply(e,arguments)}function rb(){var e=Vg(r0());return e.copy=function(){return $a(e,rb()).exponent(e.exponent())},Jr.apply(e,arguments)}function L5(){return rb.apply(null,arguments).exponent(.5)}const tS=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:ys,scaleDiverging:aO,scaleDivergingLog:iO,scaleDivergingPow:rb,scaleDivergingSqrt:L5,scaleDivergingSymlog:oO,scaleIdentity:HA,scaleImplicit:ay,scaleLinear:Xc,scaleLog:$A,scaleOrdinal:Rg,scalePoint:es,scalePow:Gg,scaleQuantile:FA,scaleQuantize:zA,scaleRadial:qA,scaleSequential:eO,scaleSequentialLog:tO,scaleSequentialPow:nb,scaleSequentialQuantile:rO,scaleSequentialSqrt:$5,scaleSequentialSymlog:nO,scaleSqrt:x8,scaleSymlog:LA,scaleThreshold:UA,scaleTime:H5,scaleUtc:D5,tickFormat:RA},Symbol.toStringTag,{value:"Module"}));var jm,nS;function a0(){if(nS)return jm;nS=1;var e=Uo();function t(n,r,a){for(var o=-1,s=n.length;++o<s;){var l=n[o],p=r(l);if(p!=null&&(f===void 0?p===p&&!e(p):a(p,f)))var f=p,m=l}return m}return jm=t,jm}var Rm,rS;function uO(){if(rS)return Rm;rS=1;function e(t,n){return t>n}return Rm=e,Rm}var Hm,aS;function q5(){if(aS)return Hm;aS=1;var e=a0(),t=uO(),n=Ko();function r(a){return a&&a.length?e(a,n,t):void 0}return Hm=r,Hm}var F5=q5();const _a=Xe(F5);var Dm,iS;function sO(){if(iS)return Dm;iS=1;function e(t,n){return t<n}return Dm=e,Dm}var $m,oS;function z5(){if(oS)return $m;oS=1;var e=a0(),t=sO(),n=Ko();function r(a){return a&&a.length?e(a,n,t):void 0}return $m=r,$m}var U5=z5();const i0=Xe(U5);var Lm,uS;function V5(){if(uS)return Lm;uS=1;var e=bg(),t=_r(),n=yA(),r=gn();function a(o,s){var l=r(o)?e:n;return l(o,t(s,3))}return Lm=a,Lm}var qm,sS;function G5(){if(sS)return qm;sS=1;var e=mA(),t=V5();function n(r,a){return e(t(r,a),1)}return qm=n,qm}var K5=G5();const Y5=Xe(K5);var Fm,lS;function Q5(){if(lS)return Fm;lS=1;var e=Cg();function t(n,r){return e(n,r)}return Fm=t,Fm}var X5=Q5();const Na=Xe(X5);var Qo=1e9,Z5={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},ib,pt=!0,Gn="[DecimalError] ",mi=Gn+"Invalid argument: ",ab=Gn+"Exponent out of range: ",Xo=Math.floor,ui=Math.pow,J5=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_n,qt=1e7,st=7,lO=9007199254740991,tp=Xo(lO/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(r=o.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(o.d[t]!==e.d[t])return o.d[t]>e.d[t]^o.s<0?1:-1;return r===a?0:r>a^o.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Vr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Wt(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,o=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(_n))throw Error(Gn+"NaN");if(n.s<1)throw Error(Gn+(n.s?"NaN":"-Infinity"));return n.eq(_n)?new r(0):(pt=!1,t=Vr(Bs(n,o),Bs(e,o),o),pt=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?fO(t,e):cO(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gn+"NaN");return n.s?(pt=!1,t=Vr(n,e,0,1).times(e),pt=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return pO(this)};Ie.naturalLogarithm=Ie.ln=function(){return Bs(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?cO(t,e):fO(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(mi+e);if(t=Wt(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,o,s,l=this,p=l.constructor;if(l.s<1){if(!l.s)return new p(0);throw Error(Gn+"NaN")}for(e=Wt(l),pt=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=br(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Xo((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new p(t)):r=new p(a.toString()),n=p.precision,a=s=n+3;;)if(o=r,r=o.plus(Vr(l,o,s+2)).times(.5),br(o.d).slice(0,s)===(t=br(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(o,n+1,0),o.times(o).eq(l)){r=o;break}}else if(t!="9999")break;s+=4}return pt=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,o,s,l,p,f,m=this,d=m.constructor,v=m.d,b=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,n=m.e+e.e,p=v.length,f=b.length,p<f&&(o=v,v=b,b=o,s=p,p=f,f=s),o=[],s=p+f,r=s;r--;)o.push(0);for(r=f;--r>=0;){for(t=0,a=p+r;a>r;)l=o[a]+b[r]*v[a-r-1]+t,o[a--]=l%qt|0,t=l/qt|0;o[a]=(o[a]+t)%qt|0}for(;!o[--s];)o.pop();return t?++n:o.shift(),e.d=o,e.e=n,pt?tt(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Pr(e,0,Qo),t===void 0?t=r.rounding:Pr(t,0,8),tt(n,e+Wt(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=yi(r,!0):(Pr(e,0,Qo),t===void 0?t=a.rounding:Pr(t,0,8),r=tt(new a(r),e+1,t),n=yi(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,o=a.constructor;return e===void 0?yi(a):(Pr(e,0,Qo),t===void 0?t=o.rounding:Pr(t,0,8),r=tt(new o(a),e+Wt(a)+1,t),n=yi(r.abs(),!1,e+Wt(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Wt(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,o,s,l=this,p=l.constructor,f=12,m=+(e=new p(e));if(!e.s)return new p(_n);if(l=new p(l),!l.s){if(e.s<1)throw Error(Gn+"Infinity");return l}if(l.eq(_n))return l;if(r=p.precision,e.eq(_n))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,o=l.s,s){if((n=m<0?-m:m)<=lO){for(a=new p(_n),t=Math.ceil(r/st+4),pt=!1;n%2&&(a=a.times(l),pS(a.d,t)),n=Xo(n/2),n!==0;)l=l.times(l),pS(l.d,t);return pt=!0,e.s<0?new p(_n).div(a):tt(a,r)}}else if(o<0)throw Error(Gn+"NaN");return o=o<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,pt=!1,a=e.times(Bs(l,r+f)),pt=!0,a=pO(a),a.s=o,a};Ie.toPrecision=function(e,t){var n,r,a=this,o=a.constructor;return e===void 0?(n=Wt(a),r=yi(a,n<=o.toExpNeg||n>=o.toExpPos)):(Pr(e,1,Qo),t===void 0?t=o.rounding:Pr(t,0,8),a=tt(new o(a),e,t),n=Wt(a),r=yi(a,e<=n||n<=o.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Pr(e,1,Qo),t===void 0?t=r.rounding:Pr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Wt(e),n=e.constructor;return yi(e,t<=n.toExpNeg||t>=n.toExpPos)};function cO(e,t){var n,r,a,o,s,l,p,f,m=e.constructor,d=m.precision;if(!e.s||!t.s)return t.s||(t=new m(e)),pt?tt(t,d):t;if(p=e.d,f=t.d,s=e.e,a=t.e,p=p.slice(),o=s-a,o){for(o<0?(r=p,o=-o,l=f.length):(r=f,a=s,l=p.length),s=Math.ceil(d/st),l=s>l?s+1:l+1,o>l&&(o=l,r.length=1),r.reverse();o--;)r.push(0);r.reverse()}for(l=p.length,o=f.length,l-o<0&&(o=l,r=f,f=p,p=r),n=0;o;)n=(p[--o]=p[o]+f[o]+n)/qt|0,p[o]%=qt;for(n&&(p.unshift(n),++a),l=p.length;p[--l]==0;)p.pop();return t.d=p,t.e=a,pt?tt(t,d):t}function Pr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(mi+e)}function br(e){var t,n,r,a=e.length-1,o="",s=e[0];if(a>0){for(o+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(o+=Sa(n)),o+=r;s=e[t],r=s+"",n=st-r.length,n&&(o+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return o+s}var Vr=(function(){function e(r,a){var o,s=0,l=r.length;for(r=r.slice();l--;)o=r[l]*a+s,r[l]=o%qt|0,s=o/qt|0;return s&&r.unshift(s),r}function t(r,a,o,s){var l,p;if(o!=s)p=o>s?1:-1;else for(l=p=0;l<o;l++)if(r[l]!=a[l]){p=r[l]>a[l]?1:-1;break}return p}function n(r,a,o){for(var s=0;o--;)r[o]-=s,s=r[o]<a[o]?1:0,r[o]=s*qt+r[o]-a[o];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,o,s){var l,p,f,m,d,v,b,B,I,g,S,M,_,O,w,A,E,P,W=r.constructor,N=r.s==a.s?1:-1,D=r.d,T=a.d;if(!r.s)return new W(r);if(!a.s)throw Error(Gn+"Division by zero");for(p=r.e-a.e,E=T.length,w=D.length,b=new W(N),B=b.d=[],f=0;T[f]==(D[f]||0);)++f;if(T[f]>(D[f]||0)&&--p,o==null?M=o=W.precision:s?M=o+(Wt(r)-Wt(a))+1:M=o,M<0)return new W(0);if(M=M/st+2|0,f=0,E==1)for(m=0,T=T[0],M++;(f<w||m)&&M--;f++)_=m*qt+(D[f]||0),B[f]=_/T|0,m=_%T|0;else{for(m=qt/(T[0]+1)|0,m>1&&(T=e(T,m),D=e(D,m),E=T.length,w=D.length),O=E,I=D.slice(0,E),g=I.length;g<E;)I[g++]=0;P=T.slice(),P.unshift(0),A=T[0],T[1]>=qt/2&&++A;do m=0,l=t(T,I,E,g),l<0?(S=I[0],E!=g&&(S=S*qt+(I[1]||0)),m=S/A|0,m>1?(m>=qt&&(m=qt-1),d=e(T,m),v=d.length,g=I.length,l=t(d,I,v,g),l==1&&(m--,n(d,E<v?P:T,v))):(m==0&&(l=m=1),d=T.slice()),v=d.length,v<g&&d.unshift(0),n(I,d,g),l==-1&&(g=I.length,l=t(T,I,E,g),l<1&&(m++,n(I,E<g?P:T,g))),g=I.length):l===0&&(m++,I=[0]),B[f++]=m,l&&I[0]?I[g++]=D[O]||0:(I=[D[O]],g=1);while((O++<w||I[0]!==void 0)&&M--)}return B[0]||B.shift(),b.e=p,tt(b,s?o+Wt(b)+1:o)}})();function pO(e,t){var n,r,a,o,s,l,p=0,f=0,m=e.constructor,d=m.precision;if(Wt(e)>16)throw Error(ab+Wt(e));if(!e.s)return new m(_n);for(pt=!1,l=d,s=new m(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(ui(2,f))/Math.LN10*2+5|0,l+=r,n=a=o=new m(_n),m.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++p),s=o.plus(Vr(a,n,l)),br(s.d).slice(0,l)===br(o.d).slice(0,l)){for(;f--;)o=tt(o.times(o),l);return m.precision=d,t==null?(pt=!0,tt(o,d)):o}o=s}}function Wt(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function zm(e,t,n){if(t>e.LN10.sd())throw pt=!0,n&&(e.precision=n),Error(Gn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function Bs(e,t){var n,r,a,o,s,l,p,f,m,d=1,v=10,b=e,B=b.d,I=b.constructor,g=I.precision;if(b.s<1)throw Error(Gn+(b.s?"NaN":"-Infinity"));if(b.eq(_n))return new I(0);if(t==null?(pt=!1,f=g):f=t,b.eq(10))return t==null&&(pt=!0),zm(I,f);if(f+=v,I.precision=f,n=br(B),r=n.charAt(0),o=Wt(b),Math.abs(o)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)b=b.times(e),n=br(b.d),r=n.charAt(0),d++;o=Wt(b),r>1?(b=new I("0."+n),o++):b=new I(r+"."+n.slice(1))}else return p=zm(I,f+2,g).times(o+""),b=Bs(new I(r+"."+n.slice(1)),f-v).plus(p),I.precision=g,t==null?(pt=!0,tt(b,g)):b;for(l=s=b=Vr(b.minus(_n),b.plus(_n),f),m=tt(b.times(b),f),a=3;;){if(s=tt(s.times(m),f),p=l.plus(Vr(s,new I(a),f)),br(p.d).slice(0,f)===br(l.d).slice(0,f))return l=l.times(2),o!==0&&(l=l.plus(zm(I,f+2,g).times(o+""))),l=Vr(l,new I(d),f),I.precision=g,t==null?(pt=!0,tt(l,g)):l;l=p,a+=2}}function cS(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=Xo(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),pt&&(e.e>tp||e.e<-tp))throw Error(ab+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,o,s,l,p,f,m,d=e.d;for(s=1,o=d[0];o>=10;o/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=d[m=0];else{if(m=Math.ceil((r+1)/st),o=d.length,m>=o)return e;for(f=o=d[m],s=1;o>=10;o/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(o=ui(10,s-a-1),l=f/o%10|0,p=t<0||d[m+1]!==void 0||f%o,p=n<4?(l||p)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||p||n==6&&(r>0?a>0?f/ui(10,s-a):0:d[m-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return p?(o=Wt(e),d.length=1,t=t-o-1,d[0]=ui(10,(st-t%st)%st),e.e=Xo(-t/st)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,o=1,m--):(d.length=m+1,o=ui(10,st-r),d[m]=a>0?(f/ui(10,s-a)%ui(10,a)|0)*o:0),p)for(;;)if(m==0){(d[0]+=o)==qt&&(d[0]=1,++e.e);break}else{if(d[m]+=o,d[m]!=qt)break;d[m--]=0,o=1}for(r=d.length;d[--r]===0;)d.pop();if(pt&&(e.e>tp||e.e<-tp))throw Error(ab+Wt(e));return e}function fO(e,t){var n,r,a,o,s,l,p,f,m,d,v=e.constructor,b=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),pt?tt(t,b):t;if(p=e.d,d=t.d,r=t.e,f=e.e,p=p.slice(),s=f-r,s){for(m=s<0,m?(n=p,s=-s,l=d.length):(n=d,r=f,l=p.length),a=Math.max(Math.ceil(b/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=p.length,l=d.length,m=a<l,m&&(l=a),a=0;a<l;a++)if(p[a]!=d[a]){m=p[a]<d[a];break}s=0}for(m&&(n=p,p=d,d=n,t.s=-t.s),l=p.length,a=d.length-l;a>0;--a)p[l++]=0;for(a=d.length;a>s;){if(p[--a]<d[a]){for(o=a;o&&p[--o]===0;)p[o]=qt-1;--p[o],p[a]+=qt}p[a]-=d[a]}for(;p[--l]===0;)p.pop();for(;p[0]===0;p.shift())--r;return p[0]?(t.d=p,t.e=r,pt?tt(t,b):t):new v(0)}function yi(e,t,n){var r,a=Wt(e),o=br(e.d),s=o.length;return t?(n&&(r=n-s)>0?o=o.charAt(0)+"."+o.slice(1)+Sa(r):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(a<0?"e":"e+")+a):a<0?(o="0."+Sa(-a-1)+o,n&&(r=n-s)>0&&(o+=Sa(r))):a>=s?(o+=Sa(a+1-s),n&&(r=n-a-1)>0&&(o=o+"."+Sa(r))):((r=a+1)<s&&(o=o.slice(0,r)+"."+o.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(o+="."),o+=Sa(r))),e.s<0?"-"+o:o}function pS(e,t){if(e.length>t)return e.length=t,!0}function dO(e){var t,n,r;function a(o){var s=this;if(!(s instanceof a))return new a(o);if(s.constructor=a,o instanceof a){s.s=o.s,s.e=o.e,s.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(mi+o);if(o>0)s.s=1;else if(o<0)o=-o,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(o===~~o&&o<1e7){s.e=0,s.d=[o];return}return cS(s,o.toString())}else if(typeof o!="string")throw Error(mi+o);if(o.charCodeAt(0)===45?(o=o.slice(1),s.s=-1):s.s=1,J5.test(o))cS(s,o);else throw Error(mi+o)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=dO,a.config=a.set=eq,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function eq(e){if(!e||typeof e!="object")throw Error(Gn+"Object expected");var t,n,r,a=["precision",1,Qo,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(Xo(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(mi+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(mi+n+": "+r);return this}var ib=dO(Z5);_n=new ib(1);const et=ib;function tq(e){return iq(e)||aq(e)||rq(e)||nq()}function nq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rq(e,t){if(e){if(typeof e=="string")return sy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sy(e,t)}}function aq(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function iq(e){if(Array.isArray(e))return sy(e)}function sy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oq=function(t){return t},hO={},mO=function(t){return t===hO},fS=function(t){return function n(){return arguments.length===0||arguments.length===1&&mO(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},uq=function e(t,n){return t===1?n:fS(function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var s=a.filter(function(l){return l!==hO}).length;return s>=t?n.apply(void 0,a):e(t-s,fS(function(){for(var l=arguments.length,p=new Array(l),f=0;f<l;f++)p[f]=arguments[f];var m=a.map(function(d){return mO(d)?p.shift():d});return n.apply(void 0,tq(m).concat(p))}))})},o0=function(t){return uq(t.length,t)},ly=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},sq=o0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),lq=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return oq;var a=n.reverse(),o=a[0],s=a.slice(1);return function(){return s.reduce(function(l,p){return p(l)},o.apply(void 0,arguments))}},cy=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},vO=function(t){var n=null,r=null;return function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return n&&o.every(function(l,p){return l===n[p]})||(n=o,r=t.apply(void 0,o)),r}};function cq(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function pq(e,t,n){for(var r=new et(e),a=0,o=[];r.lt(t)&&a<1e5;)o.push(r.toNumber()),r=r.add(n),a++;return o}var fq=o0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),dq=o0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),hq=o0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const u0={rangeStep:pq,getDigitCount:cq,interpolateNumber:fq,uninterpolateNumber:dq,uninterpolateTruncation:hq};function py(e){return yq(e)||vq(e)||yO(e)||mq()}function mq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vq(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function yq(e){if(Array.isArray(e))return fy(e)}function ws(e,t){return Iq(e)||bq(e,t)||yO(e,t)||gq()}function gq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yO(e,t){if(e){if(typeof e=="string")return fy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fy(e,t)}}function fy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bq(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(p){a=!0,o=p}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw o}}return n}}function Iq(e){if(Array.isArray(e))return e}function gO(e){var t=ws(e,2),n=t[0],r=t[1],a=n,o=r;return n>r&&(a=r,o=n),[a,o]}function bO(e,t,n){if(e.lte(0))return new et(0);var r=u0.getDigitCount(e.toNumber()),a=new et(10).pow(r),o=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(o.div(s).toNumber())).add(n).mul(s),p=l.mul(a);return t?p:new et(Math.ceil(p))}function xq(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var o=Math.abs(e);o<1?(r=new et(10).pow(u0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):o>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=lq(sq(function(p){return a.add(new et(p-s).mul(r)).toNumber()}),ly);return l(0,t)}function IO(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var o=bO(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(o)));var l=Math.ceil(s.sub(e).div(o).toNumber()),p=Math.ceil(new et(t).sub(s).div(o).toNumber()),f=l+p+1;return f>n?IO(e,t,n,r,a+1):(f<n&&(p=t>0?p+(n-f):p,l=t>0?l:l+(n-f)),{step:o,tickMin:s.sub(new et(l).mul(o)),tickMax:s.add(new et(p).mul(o))})}function Bq(e){var t=ws(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=gO([n,r]),p=ws(l,2),f=p[0],m=p[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(py(ly(0,a-1).map(function(){return 1/0}))):[].concat(py(ly(0,a-1).map(function(){return-1/0})),[m]);return n>r?cy(d):d}if(f===m)return xq(f,a,o);var v=IO(f,m,s,o),b=v.step,B=v.tickMin,I=v.tickMax,g=u0.rangeStep(B,I.add(new et(.1).mul(b)),b);return n>r?cy(g):g}function wq(e,t){var n=ws(e,2),r=n[0],a=n[1],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=gO([r,a]),l=ws(s,2),p=l[0],f=l[1];if(p===-1/0||f===1/0)return[r,a];if(p===f)return[p];var m=Math.max(t,2),d=bO(new et(f).sub(p).div(m-1),o,0),v=[].concat(py(u0.rangeStep(new et(p),new et(f).sub(new et(.99).mul(d)),d)),[f]);return r>a?cy(v):v}var Pq=vO(Bq),Sq=vO(wq),Mq="Invariant failed";function gi(e,t){throw new Error(Mq)}var _q=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(e)}function np(){return np=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},np.apply(this,arguments)}function Aq(e,t){return kq(e)||Cq(e,t)||Wq(e,t)||Oq()}function Oq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wq(e,t){if(e){if(typeof e=="string")return dS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dS(e,t)}}function dS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function kq(e){if(Array.isArray(e))return e}function Eq(e,t){if(e==null)return{};var n=Tq(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tq(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Nq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jq(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wO(r.key),r)}}function Rq(e,t,n){return t&&jq(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hq(e,t,n){return t=rp(t),Dq(e,xO()?Reflect.construct(t,n||[],rp(e).constructor):t.apply(e,n))}function Dq(e,t){if(t&&(Io(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $q(e)}function $q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xO=function(){return!!e})()}function rp(e){return rp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rp(e)}function Lq(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&dy(e,t)}function dy(e,t){return dy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},dy(e,t)}function BO(e,t,n){return t=wO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wO(e){var t=qq(e,"string");return Io(t)=="symbol"?t:t+""}function qq(e,t){if(Io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Zo=(function(e){function t(){return Nq(this,t),Hq(this,t,arguments)}return Lq(t,e),Rq(t,[{key:"render",value:function(){var r=this.props,a=r.offset,o=r.layout,s=r.width,l=r.dataKey,p=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=Eq(r,_q),b=Me(v,!1);this.props.direction==="x"&&m.type!=="number"&&gi();var B=p.map(function(I){var g=f(I,l),S=g.x,M=g.y,_=g.value,O=g.errorVal;if(!O)return null;var w=[],A,E;if(Array.isArray(O)){var P=Aq(O,2);A=P[0],E=P[1]}else A=E=O;if(o==="vertical"){var W=m.scale,N=M+a,D=N+s,T=N-s,F=W(_-A),q=W(_+E);w.push({x1:q,y1:D,x2:q,y2:T}),w.push({x1:F,y1:N,x2:q,y2:N}),w.push({x1:F,y1:D,x2:F,y2:T})}else if(o==="horizontal"){var V=d.scale,Y=S+a,G=Y-s,H=Y+s,U=V(_-A),X=V(_+E);w.push({x1:G,y1:X,x2:H,y2:X}),w.push({x1:Y,y1:U,x2:Y,y2:X}),w.push({x1:G,y1:U,x2:H,y2:U})}return R.createElement(De,np({className:"recharts-errorBar",key:"bar-".concat(w.map(function(j){return"".concat(j.x1,"-").concat(j.x2,"-").concat(j.y1,"-").concat(j.y2)}))},b),w.map(function(j){return R.createElement("line",np({},j,{key:"line-".concat(j.x1,"-").concat(j.x2,"-").concat(j.y1,"-").concat(j.y2)}))}))});return R.createElement(De,{className:"recharts-errorBars"},B)}}])})(R.Component);BO(Zo,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});BO(Zo,"displayName","ErrorBar");function Ps(e){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ps(e)}function hS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ni(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hS(Object(n),!0).forEach(function(r){Fq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fq(e,t,n){return t=zq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zq(e){var t=Uq(e,"string");return Ps(t)=="symbol"?t:t+""}function Uq(e,t){if(Ps(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ps(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var PO=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,o=t.legendContent,s=Sn(n,Wa);if(!s)return null;var l=Wa.defaultProps,p=l!==void 0?ni(ni({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:o==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,b=d.props,B=b.sectors||b.data||[];return m.concat(B.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,b=v!==void 0?ni(ni({},v),d.props):{},B=b.dataKey,I=b.name,g=b.legendType,S=b.hide;return{inactive:S,dataKey:B,type:p.iconType||g||"square",color:ob(d),value:I||B,payload:b}}),ni(ni(ni({},p),Wa.getWithHeight(s,a)),{},{payload:f,item:s})};function Ss(e){"@babel/helpers - typeof";return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ss(e)}function mS(e){return Yq(e)||Kq(e)||Gq(e)||Vq()}function Vq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gq(e,t){if(e){if(typeof e=="string")return hy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hy(e,t)}}function Kq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yq(e){if(Array.isArray(e))return hy(e)}function hy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vS(Object(n),!0).forEach(function(r){lo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lo(e,t,n){return t=Qq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qq(e){var t=Xq(e,"string");return Ss(t)=="symbol"?t:t+""}function Xq(e,t){if(Ss(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ss(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ee(e)||Ee(t)?n:jt(t)?An(e,t,n):ke(t)?t(e):n}function ts(e,t,n,r){var a=Y5(e,function(l){return lt(l,t)});if(n==="number"){var o=a.filter(function(l){return le(l)||parseFloat(l)});return o.length?[i0(o),_a(o)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ee(l)}):a;return s.map(function(l){return jt(l)||l instanceof Date?l:""})}var Zq=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(o&&o.axisType==="angleAxis"&&Math.abs(Math.abs(o.range[1]-o.range[0])-360)<=1e-6)for(var p=o.range,f=0;f<l;f++){var m=f>0?a[f-1].coordinate:a[l-1].coordinate,d=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,b=void 0;if(an(d-m)!==an(v-d)){var B=[];if(an(v-d)===an(p[1]-p[0])){b=v;var I=d+p[1]-p[0];B[0]=Math.min(I,(I+m)/2),B[1]=Math.max(I,(I+m)/2)}else{b=m;var g=v+p[1]-p[0];B[0]=Math.min(d,(g+d)/2),B[1]=Math.max(d,(g+d)/2)}var S=[Math.min(d,(b+d)/2),Math.max(d,(b+d)/2)];if(t>S[0]&&t<=S[1]||t>=B[0]&&t<=B[1]){s=a[f].index;break}}else{var M=Math.min(m,v),_=Math.max(m,v);if(t>(M+d)/2&&t<=(_+d)/2){s=a[f].index;break}}}else for(var O=0;O<l;O++)if(O===0&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O===l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2){s=r[O].index;break}return s},ob=function(t){var n,r=t,a=r.type.displayName,o=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=o.stroke,l=o.fill,p;switch(a){case"Line":p=s;break;case"Area":case"Radar":p=s&&s!=="none"?s:l;break;default:p=l;break}return p},Jq=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,o=a===void 0?{}:a;if(!o)return{};for(var s={},l=Object.keys(o),p=0,f=l.length;p<f;p++)for(var m=o[l[p]].stackGroups,d=Object.keys(m),v=0,b=d.length;v<b;v++){var B=m[d[v]],I=B.items,g=B.cateAxisId,S=I.filter(function(E){return Ur(E.type).indexOf("Bar")>=0});if(S&&S.length){var M=S[0].type.defaultProps,_=M!==void 0?bt(bt({},M),S[0].props):S[0].props,O=_.barSize,w=_[g];s[w]||(s[w]=[]);var A=Ee(O)?n:O;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ee(A)?void 0:on(A,r,0)})}}return s},eF=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,o=t.sizeList,s=o===void 0?[]:o,l=t.maxBarSize,p=s.length;if(p<1)return null;var f=on(n,a,0,!0),m,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,b=a/p,B=s.reduce(function(O,w){return O+w.barSize||0},0);B+=(p-1)*f,B>=a&&(B-=(p-1)*f,f=0),B>=a&&b>0&&(v=!0,b*=.9,B=p*b);var I=(a-B)/2>>0,g={offset:I-f,size:0};m=s.reduce(function(O,w){var A={item:w.item,position:{offset:g.offset+g.size+f,size:v?b:w.barSize}},E=[].concat(mS(O),[A]);return g=E[E.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:g})}),E},d)}else{var S=on(r,a,0,!0);a-2*S-(p-1)*f<=0&&(f=0);var M=(a-2*S-(p-1)*f)/p;M>1&&(M>>=0);var _=l===+l?Math.min(M,l):M;m=s.reduce(function(O,w,A){var E=[].concat(mS(O),[{item:w.item,position:{offset:S+(M+f)*A+(M-_)/2,size:_}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:E[E.length-1].position})}),E},d)}return m},tF=function(t,n,r,a){var o=r.children,s=r.width,l=r.margin,p=s-(l.left||0)-(l.right||0),f=PO({children:o,legendWidth:p});if(f){var m=a||{},d=m.width,v=m.height,b=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&b!=="center"&&le(t[b]))return bt(bt({},t),{},lo({},b,t[b]+(d||0)));if((I==="horizontal"||I==="vertical"&&b==="center")&&B!=="middle"&&le(t[B]))return bt(bt({},t),{},lo({},B,t[B]+(v||0)))}return t},nF=function(t,n,r){return Ee(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},SO=function(t,n,r,a,o){var s=n.props.children,l=sn(s,Zo).filter(function(f){return nF(a,o,f.props.direction)});if(l&&l.length){var p=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,m){var d=lt(m,r);if(Ee(d))return f;var v=Array.isArray(d)?[i0(d),_a(d)]:[d,d],b=p.reduce(function(B,I){var g=lt(m,I,0),S=v[0]-Math.abs(Array.isArray(g)?g[0]:g),M=v[1]+Math.abs(Array.isArray(g)?g[1]:g);return[Math.min(S,B[0]),Math.max(M,B[1])]},[1/0,-1/0]);return[Math.min(b[0],f[0]),Math.max(b[1],f[1])]},[1/0,-1/0])}return null},rF=function(t,n,r,a,o){var s=n.map(function(l){return SO(t,l,r,o,a)}).filter(function(l){return!Ee(l)});return s&&s.length?s.reduce(function(l,p){return[Math.min(l[0],p[0]),Math.max(l[1],p[1])]},[1/0,-1/0]):null},MO=function(t,n,r,a,o){var s=n.map(function(p){var f=p.props.dataKey;return r==="number"&&f&&SO(t,p,f,a)||ts(t,f,r,o)});if(r==="number")return s.reduce(function(p,f){return[Math.min(p[0],f[0]),Math.max(p[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(p,f){for(var m=0,d=f.length;m<d;m++)l[f[m]]||(l[f[m]]=!0,p.push(f[m]));return p},[])},_O=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},AO=function(t,n,r,a){if(a)return t.map(function(p){return p.coordinate});var o,s,l=t.map(function(p){return p.coordinate===n&&(o=!0),p.coordinate===r&&(s=!0),p.coordinate});return o||l.push(n),s||l.push(r),l},qr=function(t,n,r){if(!t)return null;var a=t.scale,o=t.duplicateDomain,s=t.type,l=t.range,p=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/p:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var m=(t.ticks||t.niceTicks).map(function(d){var v=o?o.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Go(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:o?o[d]:d,index:v,offset:f}})},Um=new WeakMap,bc=function(t,n){if(typeof n!="function")return t;Um.has(t)||Um.set(t,new WeakMap);var r=Um.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},OO=function(t,n,r){var a=t.scale,o=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:ys(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Xc(),realScaleType:"linear"}:o==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:es(),realScaleType:"point"}:o==="category"?{scale:ys(),realScaleType:"band"}:{scale:Xc(),realScaleType:"linear"};if(Vs(a)){var p="scale".concat(zp(a));return{scale:(tS[p]||es)(),realScaleType:tS[p]?p:"point"}}return ke(a)?{scale:a}:{scale:es(),realScaleType:"point"}},yS=1e-4,WO=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),o=Math.min(a[0],a[1])-yS,s=Math.max(a[0],a[1])+yS,l=t(n[0]),p=t(n[r-1]);(l<o||l>s||p<o||p>s)&&t.domain([n[0],n[r-1]])}},aF=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},iF=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),o=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(o[0]=r),(!le(t[1])||t[1]>a)&&(o[1]=a),o[0]>a&&(o[0]=a),o[1]<r&&(o[1]=r),o},oF=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var o=0,s=0,l=0;l<n;++l){var p=Go(t[l][r][1])?t[l][r][0]:t[l][r][1];p>=0?(t[l][r][0]=o,t[l][r][1]=o+p,o=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+p,s=t[l][r][1])}},uF=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var o=0,s=0;s<n;++s){var l=Go(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=o,t[s][r][1]=o+l,o=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},sF={sign:oF,expand:YR,none:po,silhouette:QR,wiggle:XR,positive:uF},lF=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),o=sF[r],s=KR().keys(a).value(function(l,p){return+lt(l,p,0)}).order(zv).offset(o);return s(t)},cF=function(t,n,r,a,o,s){if(!t)return null;var l=s?n.reverse():n,p={},f=l.reduce(function(d,v){var b,B=(b=v.type)!==null&&b!==void 0&&b.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=B.stackId,g=B.hide;if(g)return d;var S=B[r],M=d[S]||{hasStack:!1,stackGroups:{}};if(jt(I)){var _=M.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};_.items.push(v),M.hasStack=!0,M.stackGroups[I]=_}else M.stackGroups[Ha("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},d),{},lo({},S,M))},p),m={};return Object.keys(f).reduce(function(d,v){var b=f[v];if(b.hasStack){var B={};b.stackGroups=Object.keys(b.stackGroups).reduce(function(I,g){var S=b.stackGroups[g];return bt(bt({},I),{},lo({},g,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:lF(t,S.items,o)}))},B)}return bt(bt({},d),{},lo({},v,b))},m)},CO=function(t,n){var r=n.realScaleType,a=n.type,o=n.tickCount,s=n.originalDomain,l=n.allowDecimals,p=r||n.scale;if(p!=="auto"&&p!=="linear")return null;if(o&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var m=Pq(f,o,l);return t.domain([i0(m),_a(m)]),{niceTicks:m}}if(o&&a==="number"){var d=t.domain(),v=Sq(d,o,l);return{niceTicks:v}}return null};function xo(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,o=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ee(a[t.dataKey])){var l=kc(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[o]?n[o].coordinate+r/2:null}var p=lt(a,Ee(s)?t.dataKey:s);return Ee(p)?null:t.scale(p)}var gS=function(t){var n=t.axis,r=t.ticks,a=t.offset,o=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var p=lt(s,n.dataKey,n.domain[l]);return Ee(p)?null:n.scale(p)-o/2+a},pF=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);return a<=0&&o>=0?0:o<0?o:a}return r[0]},fF=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,o=a.stackId;if(jt(o)){var s=n[o];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},dF=function(t){return t.reduce(function(n,r){return[i0(r.concat([n[0]]).filter(le)),_a(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},kO=function(t,n,r){return Object.keys(t).reduce(function(a,o){var s=t[o],l=s.stackedData,p=l.reduce(function(f,m){var d=dF(m.slice(n,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(p[0],a[0]),Math.max(p[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},bS=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,IS=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,my=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(bS.test(t[0])){var o=+bS.exec(t[0])[1];a[0]=n[0]-o}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(IS.test(t[1])){var s=+IS.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},ap=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var o=Eg(n,function(d){return d.coordinate}),s=1/0,l=1,p=o.length;l<p;l++){var f=o[l],m=o[l-1];s=Math.min((f.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},xS=function(t,n,r){return!t||!t.length||Na(t,An(r,"type.defaultProps.domain"))?n:t},EO=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,o=r.name,s=r.unit,l=r.formatter,p=r.tooltipType,f=r.chartType,m=r.hide;return bt(bt({},Me(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:o||a,color:ob(t),value:lt(n,a),type:p,payload:n,chartType:f,hide:m})};function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function BS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?BS(Object(n),!0).forEach(function(r){TO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):BS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TO(e,t,n){return t=hF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hF(e){var t=mF(e,"string");return Ms(t)=="symbol"?t:t+""}function mF(e,t){if(Ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vF(e,t){return IF(e)||bF(e,t)||gF(e,t)||yF()}function yF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gF(e,t){if(e){if(typeof e=="string")return wS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wS(e,t)}}function wS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bF(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function IF(e){if(Array.isArray(e))return e}var ip=Math.PI/180,xF=function(t){return t*180/Math.PI},it=function(t,n,r,a){return{x:t+Math.cos(-ip*a)*r,y:n+Math.sin(-ip*a)*r}},NO=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},BF=function(t,n,r,a,o){var s=t.width,l=t.height,p=t.startAngle,f=t.endAngle,m=on(t.cx,s,s/2),d=on(t.cy,l,l/2),v=NO(s,l,r),b=on(t.innerRadius,v,0),B=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(g,S){var M=n[S],_=M.domain,O=M.reversed,w;if(Ee(M.range))a==="angleAxis"?w=[p,f]:a==="radiusAxis"&&(w=[b,B]),O&&(w=[w[1],w[0]]);else{w=M.range;var A=w,E=vF(A,2);p=E[0],f=E[1]}var P=OO(M,o),W=P.realScaleType,N=P.scale;N.domain(_).range(w),WO(N);var D=CO(N,Hr(Hr({},M),{},{realScaleType:W})),T=Hr(Hr(Hr({},M),D),{},{range:w,radius:B,realScaleType:W,scale:N,cx:m,cy:d,innerRadius:b,outerRadius:B,startAngle:p,endAngle:f});return Hr(Hr({},g),{},TO({},S,T))},{})},wF=function(t,n){var r=t.x,a=t.y,o=n.x,s=n.y;return Math.sqrt(Math.pow(r-o,2)+Math.pow(a-s,2))},PF=function(t,n){var r=t.x,a=t.y,o=n.cx,s=n.cy,l=wF({x:r,y:a},{x:o,y:s});if(l<=0)return{radius:l};var p=(r-o)/l,f=Math.acos(p);return a>s&&(f=2*Math.PI-f),{radius:l,angle:xF(f),angleInRadian:f}},SF=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),o=Math.floor(r/360),s=Math.min(a,o);return{startAngle:n-s*360,endAngle:r-s*360}},MF=function(t,n){var r=n.startAngle,a=n.endAngle,o=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(o,s);return t+l*360},PS=function(t,n){var r=t.x,a=t.y,o=PF({x:r,y:a},n),s=o.radius,l=o.angle,p=n.innerRadius,f=n.outerRadius;if(s<p||s>f)return!1;if(s===0)return!0;var m=SF(n),d=m.startAngle,v=m.endAngle,b=l,B;if(d<=v){for(;b>v;)b-=360;for(;b<d;)b+=360;B=b>=d&&b<=v}else{for(;b>d;)b-=360;for(;b<v;)b+=360;B=b>=v&&b<=d}return B?Hr(Hr({},n),{},{radius:s,angle:MF(b,n)}):null},jO=function(t){return!Q.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}var _F=["offset"];function AF(e){return kF(e)||CF(e)||WF(e)||OF()}function OF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WF(e,t){if(e){if(typeof e=="string")return vy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vy(e,t)}}function CF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kF(e){if(Array.isArray(e))return vy(e)}function vy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function EF(e,t){if(e==null)return{};var n=TF(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function TF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function SS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(n),!0).forEach(function(r){NF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NF(e,t,n){return t=jF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jF(e){var t=RF(e,"string");return _s(t)=="symbol"?t:t+""}function RF(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},As.apply(this,arguments)}var HF=function(t){var n=t.value,r=t.formatter,a=Ee(t.children)?n:t.children;return ke(r)?r(a):a},DF=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},$F=function(t,n,r){var a=t.position,o=t.viewBox,s=t.offset,l=t.className,p=o,f=p.cx,m=p.cy,d=p.innerRadius,v=p.outerRadius,b=p.startAngle,B=p.endAngle,I=p.clockWise,g=(d+v)/2,S=DF(b,B),M=S>=0?1:-1,_,O;a==="insideStart"?(_=b+M*s,O=I):a==="insideEnd"?(_=B-M*s,O=!I):a==="end"&&(_=B+M*s,O=I),O=S<=0?O:!O;var w=it(f,m,g,_),A=it(f,m,g,_+(O?1:-1)*359),E="M".concat(w.x,",").concat(w.y,`
    A`).concat(g,",").concat(g,",0,1,").concat(O?0:1,`,
    `).concat(A.x,",").concat(A.y),P=Ee(t.id)?Ha("recharts-radial-line-"):t.id;return R.createElement("text",As({},r,{dominantBaseline:"central",className:Re("recharts-radial-bar-label",l)}),R.createElement("defs",null,R.createElement("path",{id:P,d:E})),R.createElement("textPath",{xlinkHref:"#".concat(P)},n))},LF=function(t){var n=t.viewBox,r=t.offset,a=t.position,o=n,s=o.cx,l=o.cy,p=o.innerRadius,f=o.outerRadius,m=o.startAngle,d=o.endAngle,v=(m+d)/2;if(a==="outside"){var b=it(s,l,f+r,v),B=b.x,I=b.y;return{x:B,y:I,textAnchor:B>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var g=(p+f)/2,S=it(s,l,g,v),M=S.x,_=S.y;return{x:M,y:_,textAnchor:"middle",verticalAnchor:"middle"}},qF=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,o=t.position,s=n,l=s.x,p=s.y,f=s.width,m=s.height,d=m>=0?1:-1,v=d*a,b=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,g=I*a,S=I>0?"end":"start",M=I>0?"start":"end";if(o==="top"){var _={x:l+f/2,y:p-d*a,textAnchor:"middle",verticalAnchor:b};return Nt(Nt({},_),r?{height:Math.max(p-r.y,0),width:f}:{})}if(o==="bottom"){var O={x:l+f/2,y:p+m+v,textAnchor:"middle",verticalAnchor:B};return Nt(Nt({},O),r?{height:Math.max(r.y+r.height-(p+m),0),width:f}:{})}if(o==="left"){var w={x:l-g,y:p+m/2,textAnchor:S,verticalAnchor:"middle"};return Nt(Nt({},w),r?{width:Math.max(w.x-r.x,0),height:m}:{})}if(o==="right"){var A={x:l+f+g,y:p+m/2,textAnchor:M,verticalAnchor:"middle"};return Nt(Nt({},A),r?{width:Math.max(r.x+r.width-A.x,0),height:m}:{})}var E=r?{width:f,height:m}:{};return o==="insideLeft"?Nt({x:l+g,y:p+m/2,textAnchor:M,verticalAnchor:"middle"},E):o==="insideRight"?Nt({x:l+f-g,y:p+m/2,textAnchor:S,verticalAnchor:"middle"},E):o==="insideTop"?Nt({x:l+f/2,y:p+v,textAnchor:"middle",verticalAnchor:B},E):o==="insideBottom"?Nt({x:l+f/2,y:p+m-v,textAnchor:"middle",verticalAnchor:b},E):o==="insideTopLeft"?Nt({x:l+g,y:p+v,textAnchor:M,verticalAnchor:B},E):o==="insideTopRight"?Nt({x:l+f-g,y:p+v,textAnchor:S,verticalAnchor:B},E):o==="insideBottomLeft"?Nt({x:l+g,y:p+m-v,textAnchor:M,verticalAnchor:b},E):o==="insideBottomRight"?Nt({x:l+f-g,y:p+m-v,textAnchor:S,verticalAnchor:b},E):Vo(o)&&(le(o.x)||li(o.x))&&(le(o.y)||li(o.y))?Nt({x:l+on(o.x,f),y:p+on(o.y,m),textAnchor:"end",verticalAnchor:"end"},E):Nt({x:l+f/2,y:p+m/2,textAnchor:"middle",verticalAnchor:"middle"},E)},FF=function(t){return"cx"in t&&le(t.cx)};function Ft(e){var t=e.offset,n=t===void 0?5:t,r=EF(e,_F),a=Nt({offset:n},r),o=a.viewBox,s=a.position,l=a.value,p=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!o||Ee(l)&&Ee(p)&&!Q.isValidElement(f)&&!ke(f))return null;if(Q.isValidElement(f))return Q.cloneElement(f,a);var b;if(ke(f)){if(b=Q.createElement(f,a),Q.isValidElement(b))return b}else b=HF(a);var B=FF(o),I=Me(a,!0);if(B&&(s==="insideStart"||s==="insideEnd"||s==="end"))return $F(a,b,I);var g=B?LF(a):qF(a);return R.createElement(vi,As({className:Re("recharts-label",d)},I,g,{breakAll:v}),b)}Ft.displayName="Label";var RO=function(t){var n=t.cx,r=t.cy,a=t.angle,o=t.startAngle,s=t.endAngle,l=t.r,p=t.radius,f=t.innerRadius,m=t.outerRadius,d=t.x,v=t.y,b=t.top,B=t.left,I=t.width,g=t.height,S=t.clockWise,M=t.labelViewBox;if(M)return M;if(le(I)&&le(g)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:g};if(le(b)&&le(B))return{x:b,y:B,width:I,height:g}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:o||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:m||p||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},zF=function(t,n){return t?t===!0?R.createElement(Ft,{key:"label-implicit",viewBox:n}):jt(t)?R.createElement(Ft,{key:"label-implicit",viewBox:n,value:t}):Q.isValidElement(t)?t.type===Ft?Q.cloneElement(t,{key:"label-implicit",viewBox:n}):R.createElement(Ft,{key:"label-implicit",content:t,viewBox:n}):ke(t)?R.createElement(Ft,{key:"label-implicit",content:t,viewBox:n}):Vo(t)?R.createElement(Ft,As({viewBox:n},t,{key:"label-implicit"})):null:null},UF=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,o=RO(t),s=sn(a,Ft).map(function(p,f){return Q.cloneElement(p,{viewBox:n||o,key:"label-".concat(f)})});if(!r)return s;var l=zF(t.label,n||o);return[l].concat(AF(s))};Ft.parseViewBox=RO;Ft.renderCallByParent=UF;var Vm,MS;function VF(){if(MS)return Vm;MS=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Vm=e,Vm}var GF=VF();const KF=Xe(GF);function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}var YF=["valueAccessor"],QF=["data","dataKey","clockWise","id","textBreakAll"];function XF(e){return t7(e)||e7(e)||JF(e)||ZF()}function ZF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JF(e,t){if(e){if(typeof e=="string")return yy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yy(e,t)}}function e7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function t7(e){if(Array.isArray(e))return yy(e)}function yy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function op(){return op=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},op.apply(this,arguments)}function _S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function AS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_S(Object(n),!0).forEach(function(r){n7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_S(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n7(e,t,n){return t=r7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r7(e){var t=a7(e,"string");return Os(t)=="symbol"?t:t+""}function a7(e,t){if(Os(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Os(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function OS(e,t){if(e==null)return{};var n=i7(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var o7=function(t){return Array.isArray(t.value)?KF(t.value):t.value};function sr(e){var t=e.valueAccessor,n=t===void 0?o7:t,r=OS(e,YF),a=r.data,o=r.dataKey,s=r.clockWise,l=r.id,p=r.textBreakAll,f=OS(r,QF);return!a||!a.length?null:R.createElement(De,{className:"recharts-label-list"},a.map(function(m,d){var v=Ee(o)?n(m,d):lt(m&&m.payload,o),b=Ee(l)?{}:{id:"".concat(l,"-").concat(d)};return R.createElement(Ft,op({},Me(m,!0),f,b,{parentViewBox:m.parentViewBox,value:v,textBreakAll:p,viewBox:Ft.parseViewBox(Ee(s)?m:AS(AS({},m),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}sr.displayName="LabelList";function u7(e,t){return e?e===!0?R.createElement(sr,{key:"labelList-implicit",data:t}):R.isValidElement(e)||ke(e)?R.createElement(sr,{key:"labelList-implicit",data:t,content:e}):Vo(e)?R.createElement(sr,op({data:t},e,{key:"labelList-implicit"})):null:null}function s7(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,sr).map(function(s,l){return Q.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var o=u7(e.label,t);return[o].concat(XF(a))}sr.renderCallByParent=s7;function Ws(e){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ws(e)}function gy(){return gy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gy.apply(this,arguments)}function WS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function CS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?WS(Object(n),!0).forEach(function(r){l7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l7(e,t,n){return t=c7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c7(e){var t=p7(e,"string");return Ws(t)=="symbol"?t:t+""}function p7(e,t){if(Ws(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var f7=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},Ic=function(t){var n=t.cx,r=t.cy,a=t.radius,o=t.angle,s=t.sign,l=t.isExternal,p=t.cornerRadius,f=t.cornerIsExternal,m=p*(l?1:-1)+a,d=Math.asin(p/m)/ip,v=f?o:o+s*d,b=it(n,r,m,v),B=it(n,r,a,v),I=f?o-s*d:o,g=it(n,r,m*Math.cos(d*ip),I);return{center:b,circleTangency:B,lineTangency:g,theta:d}},HO=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,o=t.outerRadius,s=t.startAngle,l=t.endAngle,p=f7(s,l),f=s+p,m=it(n,r,o,s),d=it(n,r,o,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(o,",").concat(o,`,0,
    `).concat(+(Math.abs(p)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var b=it(n,r,a,s),B=it(n,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(p)>180),",").concat(+(s<=f),`,
            `).concat(b.x,",").concat(b.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},d7=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,o=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,p=t.cornerIsExternal,f=t.startAngle,m=t.endAngle,d=an(m-f),v=Ic({cx:n,cy:r,radius:o,angle:f,sign:d,cornerRadius:s,cornerIsExternal:p}),b=v.circleTangency,B=v.lineTangency,I=v.theta,g=Ic({cx:n,cy:r,radius:o,angle:m,sign:-d,cornerRadius:s,cornerIsExternal:p}),S=g.circleTangency,M=g.lineTangency,_=g.theta,O=p?Math.abs(f-m):Math.abs(f-m)-I-_;if(O<0)return l?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):HO({cx:n,cy:r,innerRadius:a,outerRadius:o,startAngle:f,endAngle:m});var w="M ".concat(B.x,",").concat(B.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(b.x,",").concat(b.y,`
    A`).concat(o,",").concat(o,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(M.x,",").concat(M.y,`
  `);if(a>0){var A=Ic({cx:n,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),E=A.circleTangency,P=A.lineTangency,W=A.theta,N=Ic({cx:n,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),D=N.circleTangency,T=N.lineTangency,F=N.theta,q=p?Math.abs(f-m):Math.abs(f-m)-W-F;if(q<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(T.x,",").concat(T.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(D.x,",").concat(D.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(q>180),",").concat(+(d>0),",").concat(E.x,",").concat(E.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},h7={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},DO=function(t){var n=CS(CS({},h7),t),r=n.cx,a=n.cy,o=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,p=n.forceCornerRadius,f=n.cornerIsExternal,m=n.startAngle,d=n.endAngle,v=n.className;if(s<o||m===d)return null;var b=Re("recharts-sector",v),B=s-o,I=on(l,B,0,!0),g;return I>0&&Math.abs(m-d)<360?g=d7({cx:r,cy:a,innerRadius:o,outerRadius:s,cornerRadius:Math.min(I,B/2),forceCornerRadius:p,cornerIsExternal:f,startAngle:m,endAngle:d}):g=HO({cx:r,cy:a,innerRadius:o,outerRadius:s,startAngle:m,endAngle:d}),R.createElement("path",gy({},Me(n,!0),{className:b,d:g,role:"img"}))};function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}function by(){return by=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},by.apply(this,arguments)}function kS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ES(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kS(Object(n),!0).forEach(function(r){m7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m7(e,t,n){return t=v7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v7(e){var t=y7(e,"string");return Cs(t)=="symbol"?t:t+""}function y7(e,t){if(Cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var TS={curveBasisClosed:RR,curveBasisOpen:HR,curveBasis:jR,curveBumpX:BR,curveBumpY:wR,curveLinearClosed:DR,curveLinear:Vp,curveMonotoneX:$R,curveMonotoneY:LR,curveNatural:qR,curveStep:FR,curveStepAfter:UR,curveStepBefore:zR},xc=function(t){return t.x===+t.x&&t.y===+t.y},Vu=function(t){return t.x},Gu=function(t){return t.y},g7=function(t,n){if(ke(t))return t;var r="curve".concat(zp(t));return(r==="curveMonotone"||r==="curveBump")&&n?TS["".concat(r).concat(n==="vertical"?"Y":"X")]:TS[r]||Vp},b7=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,o=a===void 0?[]:a,s=t.baseLine,l=t.layout,p=t.connectNulls,f=p===void 0?!1:p,m=g7(r,l),d=f?o.filter(function(I){return xc(I)}):o,v;if(Array.isArray(s)){var b=f?s.filter(function(I){return xc(I)}):s,B=d.map(function(I,g){return ES(ES({},I),{},{base:b[g]})});return l==="vertical"?v=fc().y(Gu).x1(Vu).x0(function(I){return I.base.x}):v=fc().x(Vu).y1(Gu).y0(function(I){return I.base.y}),v.defined(xc).curve(m),v(B)}return l==="vertical"&&le(s)?v=fc().y(Gu).x1(Vu).x0(s):le(s)?v=fc().x(Vu).y1(Gu).y0(s):v=H_().x(Vu).y(Gu),v.defined(xc).curve(m),v(d)},ka=function(t){var n=t.className,r=t.points,a=t.path,o=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?b7(t):a;return R.createElement("path",by({},Me(t,!1),Ec(t),{className:Re("recharts-curve",n),d:s,ref:o}))},Gm={exports:{}},Km,NS;function I7(){if(NS)return Km;NS=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Km=e,Km}var Ym,jS;function x7(){if(jS)return Ym;jS=1;var e=I7();function t(){}function n(){}return n.resetWarningCache=t,Ym=function(){function r(s,l,p,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},Ym}var RS;function B7(){return RS||(RS=1,Gm.exports=x7()()),Gm.exports}var w7=B7();const Qe=Xe(w7),{getOwnPropertyNames:P7,getOwnPropertySymbols:S7}=Object,{hasOwnProperty:M7}=Object.prototype;function Qm(e,t){return function(r,a,o){return e(r,a,o)&&t(r,a,o)}}function Bc(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:o}=a,s=o.get(n),l=o.get(r);if(s&&l)return s===r&&l===n;o.set(n,r),o.set(r,n);const p=e(n,r,a);return o.delete(n),o.delete(r),p}}function _7(e){return e!=null?e[Symbol.toStringTag]:void 0}function HS(e){return P7(e).concat(S7(e))}const A7=Object.hasOwn||((e,t)=>M7.call(e,t));function wi(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const O7="__v",W7="__o",C7="_owner",{getOwnPropertyDescriptor:DS,keys:$S}=Object;function k7(e,t){return e.byteLength===t.byteLength&&up(new Uint8Array(e),new Uint8Array(t))}function E7(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function T7(e,t){return e.byteLength===t.byteLength&&up(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function N7(e,t){return wi(e.getTime(),t.getTime())}function j7(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function R7(e,t){return e===t}function LS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),o=e.entries();let s,l,p=0;for(;(s=o.next())&&!s.done;){const f=t.entries();let m=!1,d=0;for(;(l=f.next())&&!l.done;){if(a[d]){d++;continue}const v=s.value,b=l.value;if(n.equals(v[0],b[0],p,d,e,t,n)&&n.equals(v[1],b[1],v[0],b[0],e,t,n)){m=a[d]=!0;break}d++}if(!m)return!1;p++}return!0}const H7=wi;function D7(e,t,n){const r=$S(e);let a=r.length;if($S(t).length!==a)return!1;for(;a-- >0;)if(!$O(e,t,n,r[a]))return!1;return!0}function Ku(e,t,n){const r=HS(e);let a=r.length;if(HS(t).length!==a)return!1;let o,s,l;for(;a-- >0;)if(o=r[a],!$O(e,t,n,o)||(s=DS(e,o),l=DS(t,o),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function $7(e,t){return wi(e.valueOf(),t.valueOf())}function L7(e,t){return e.source===t.source&&e.flags===t.flags}function qS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),o=e.values();let s,l;for(;(s=o.next())&&!s.done;){const p=t.values();let f=!1,m=0;for(;(l=p.next())&&!l.done;){if(!a[m]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function up(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function q7(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function $O(e,t,n,r){return(r===C7||r===W7||r===O7)&&(e.$$typeof||t.$$typeof)?!0:A7(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const F7="[object ArrayBuffer]",z7="[object Arguments]",U7="[object Boolean]",V7="[object DataView]",G7="[object Date]",K7="[object Error]",Y7="[object Map]",Q7="[object Number]",X7="[object Object]",Z7="[object RegExp]",J7="[object Set]",e9="[object String]",t9={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},n9="[object URL]",r9=Object.prototype.toString;function a9({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:o,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:p,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:b,unknownTagComparators:B}){return function(g,S,M){if(g===S)return!0;if(g==null||S==null)return!1;const _=typeof g;if(_!==typeof S)return!1;if(_!=="object")return _==="number"?l(g,S,M):_==="function"?o(g,S,M):!1;const O=g.constructor;if(O!==S.constructor)return!1;if(O===Object)return p(g,S,M);if(Array.isArray(g))return t(g,S,M);if(O===Date)return r(g,S,M);if(O===RegExp)return m(g,S,M);if(O===Map)return s(g,S,M);if(O===Set)return d(g,S,M);const w=r9.call(g);if(w===G7)return r(g,S,M);if(w===Z7)return m(g,S,M);if(w===Y7)return s(g,S,M);if(w===J7)return d(g,S,M);if(w===X7)return typeof g.then!="function"&&typeof S.then!="function"&&p(g,S,M);if(w===n9)return b(g,S,M);if(w===K7)return a(g,S,M);if(w===z7)return p(g,S,M);if(t9[w])return v(g,S,M);if(w===F7)return e(g,S,M);if(w===V7)return n(g,S,M);if(w===U7||w===Q7||w===e9)return f(g,S,M);if(B){let A=B[w];if(!A){const E=_7(g);E&&(A=B[E])}if(A)return A(g,S,M)}return!1}}function i9({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:k7,areArraysEqual:n?Ku:E7,areDataViewsEqual:T7,areDatesEqual:N7,areErrorsEqual:j7,areFunctionsEqual:R7,areMapsEqual:n?Qm(LS,Ku):LS,areNumbersEqual:H7,areObjectsEqual:n?Ku:D7,arePrimitiveWrappersEqual:$7,areRegExpsEqual:L7,areSetsEqual:n?Qm(qS,Ku):qS,areTypedArraysEqual:n?Qm(up,Ku):up,areUrlsEqual:q7,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=Bc(r.areArraysEqual),o=Bc(r.areMapsEqual),s=Bc(r.areObjectsEqual),l=Bc(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:o,areObjectsEqual:s,areSetsEqual:l})}return r}function o9(e){return function(t,n,r,a,o,s,l){return e(t,n,l)}}function u9({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,p){const{cache:f=e?new WeakMap:void 0,meta:m}=n();return t(l,p,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(l,p){return t(l,p,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const o={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,p){return t(l,p,o)}}const s9=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>wi});La({strict:!0,createInternalComparator:()=>wi});La({circular:!0,createInternalComparator:()=>wi});La({circular:!0,createInternalComparator:()=>wi,strict:!0});function La(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,o=i9(e),s=a9(o),l=n?n(s):o9(s);return u9({circular:t,comparator:s,createState:r,equals:l,strict:a})}function l9(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function FS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(o){n<0&&(n=o),o-n>t?(e(o),n=-1):l9(a)};requestAnimationFrame(r)}function Iy(e){"@babel/helpers - typeof";return Iy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Iy(e)}function c9(e){return h9(e)||d9(e)||f9(e)||p9()}function p9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f9(e,t){if(e){if(typeof e=="string")return zS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zS(e,t)}}function zS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h9(e){if(Array.isArray(e))return e}function m9(){var e={},t=function(){return null},n=!1,r=function a(o){if(!n){if(Array.isArray(o)){if(!o.length)return;var s=o,l=c9(s),p=l[0],f=l.slice(1);if(typeof p=="number"){FS(a.bind(null,f),p);return}a(p),FS(a.bind(null,f));return}Iy(o)==="object"&&(e=o,t(e)),typeof o=="function"&&o()}};return{stop:function(){n=!0},start:function(o){n=!1,r(o)},subscribe:function(o){return t=o,function(){t=function(){return null}}}}}function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}function US(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function VS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?US(Object(n),!0).forEach(function(r){LO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):US(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LO(e,t,n){return t=v9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v9(e){var t=y9(e,"string");return ks(t)==="symbol"?t:String(t)}function y9(e,t){if(ks(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var g9=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(o){return a.includes(o)})})},b9=function(t){return t},I9=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},ns=function(t,n){return Object.keys(n).reduce(function(r,a){return VS(VS({},r),{},LO({},a,t(a,n[a])))},{})},GS=function(t,n,r){return t.map(function(a){return"".concat(I9(a)," ").concat(n,"ms ").concat(r)}).join(",")};function x9(e,t){return P9(e)||w9(e,t)||qO(e,t)||B9()}function B9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function P9(e){if(Array.isArray(e))return e}function S9(e){return A9(e)||_9(e)||qO(e)||M9()}function M9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qO(e,t){if(e){if(typeof e=="string")return xy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xy(e,t)}}function _9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A9(e){if(Array.isArray(e))return xy(e)}function xy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var sp=1e-4,FO=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},zO=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},KS=function(t,n){return function(r){var a=FO(t,n);return zO(a,r)}},O9=function(t,n){return function(r){var a=FO(t,n),o=[].concat(S9(a.map(function(s,l){return s*l}).slice(1)),[0]);return zO(o,r)}},YS=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],o=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,o=0,s=1,l=1;break;case"ease":a=.25,o=.1,s=.25,l=1;break;case"ease-in":a=.42,o=0,s=1,l=1;break;case"ease-out":a=.42,o=0,s=.58,l=1;break;case"ease-in-out":a=0,o=0,s=.58,l=1;break;default:{var p=n[0].split("(");if(p[0]==="cubic-bezier"&&p[1].split(")")[0].split(",").length===4){var f=p[1].split(")")[0].split(",").map(function(g){return parseFloat(g)}),m=x9(f,4);a=m[0],o=m[1],s=m[2],l=m[3]}}}var d=KS(a,s),v=KS(o,l),b=O9(a,s),B=function(S){return S>1?1:S<0?0:S},I=function(S){for(var M=S>1?1:S,_=M,O=0;O<8;++O){var w=d(_)-M,A=b(_);if(Math.abs(w-M)<sp||A<sp)return v(_);_=B(_-w/A)}return v(_)};return I.isStepper=!1,I},W9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,o=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,p=function(m,d,v){var b=-(m-d)*r,B=v*o,I=v+(b-B)*l/1e3,g=v*l/1e3+m;return Math.abs(g-d)<sp&&Math.abs(I)<sp?[d,0]:[g,I]};return p.isStepper=!0,p.dt=l,p},C9=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return YS(a);case"spring":return W9();default:if(a.split("(")[0]==="cubic-bezier")return YS(a)}return typeof a=="function"?a:null};function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function QS(e){return T9(e)||E9(e)||UO(e)||k9()}function k9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T9(e){if(Array.isArray(e))return wy(e)}function XS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?XS(Object(n),!0).forEach(function(r){By(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function By(e,t,n){return t=N9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N9(e){var t=j9(e,"string");return Es(t)==="symbol"?t:String(t)}function j9(e,t){if(Es(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R9(e,t){return $9(e)||D9(e,t)||UO(e,t)||H9()}function H9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UO(e,t){if(e){if(typeof e=="string")return wy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wy(e,t)}}function wy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function $9(e){if(Array.isArray(e))return e}var lp=function(t,n,r){return t+(n-t)*r},Py=function(t){var n=t.from,r=t.to;return n!==r},L9=function e(t,n,r){var a=ns(function(o,s){if(Py(s)){var l=t(s.from,s.to,s.velocity),p=R9(l,2),f=p[0],m=p[1];return Gt(Gt({},s),{},{from:f,velocity:m})}return s},n);return r<1?ns(function(o,s){return Py(s)?Gt(Gt({},s),{},{velocity:lp(s.velocity,a[o].velocity,r),from:lp(s.from,a[o].from,r)}):s},n):e(t,a,r-1)};const q9=(function(e,t,n,r,a){var o=g9(e,t),s=o.reduce(function(g,S){return Gt(Gt({},g),{},By({},S,[e[S],t[S]]))},{}),l=o.reduce(function(g,S){return Gt(Gt({},g),{},By({},S,{from:e[S],velocity:0,to:t[S]}))},{}),p=-1,f,m,d=function(){return null},v=function(){return ns(function(S,M){return M.from},l)},b=function(){return!Object.values(l).filter(Py).length},B=function(S){f||(f=S);var M=S-f,_=M/n.dt;l=L9(n,l,_),a(Gt(Gt(Gt({},e),t),v())),f=S,b()||(p=requestAnimationFrame(d))},I=function(S){m||(m=S);var M=(S-m)/r,_=ns(function(w,A){return lp.apply(void 0,QS(A).concat([n(M)]))},s);if(a(Gt(Gt(Gt({},e),t),_)),M<1)p=requestAnimationFrame(d);else{var O=ns(function(w,A){return lp.apply(void 0,QS(A).concat([n(1)]))},s);a(Gt(Gt(Gt({},e),t),O))}};return d=n.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(p)}}});function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bo(e)}var F9=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function z9(e,t){if(e==null)return{};var n=U9(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function U9(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xm(e){return Y9(e)||K9(e)||G9(e)||V9()}function V9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G9(e,t){if(e){if(typeof e=="string")return Sy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sy(e,t)}}function K9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y9(e){if(Array.isArray(e))return Sy(e)}function Sy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ZS(Object(n),!0).forEach(function(r){Zu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ZS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zu(e,t,n){return t=VO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X9(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,VO(r.key),r)}}function Z9(e,t,n){return t&&X9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function VO(e){var t=J9(e,"string");return Bo(t)==="symbol"?t:String(t)}function J9(e,t){if(Bo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Bo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ez(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&My(e,t)}function My(e,t){return My=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},My(e,t)}function tz(e){var t=nz();return function(){var r=cp(e),a;if(t){var o=cp(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return _y(this,a)}}function _y(e,t){if(t&&(Bo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ay(e)}function Ay(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cp(e){return cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},cp(e)}var Kn=(function(e){ez(n,e);var t=tz(n);function n(r,a){var o;Q9(this,n),o=t.call(this,r,a);var s=o.props,l=s.isActive,p=s.attributeName,f=s.from,m=s.to,d=s.steps,v=s.children,b=s.duration;if(o.handleStyleChange=o.handleStyleChange.bind(Ay(o)),o.changeStyle=o.changeStyle.bind(Ay(o)),!l||b<=0)return o.state={style:{}},typeof v=="function"&&(o.state={style:m}),_y(o);if(d&&d.length)o.state={style:d[0].style};else if(f){if(typeof v=="function")return o.state={style:f},_y(o);o.state={style:p?Zu({},p,f):f}}else o.state={style:{}};return o}return Z9(n,[{key:"componentDidMount",value:function(){var a=this.props,o=a.isActive,s=a.canBegin;this.mounted=!0,!(!o||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var o=this.props,s=o.isActive,l=o.canBegin,p=o.attributeName,f=o.shouldReAnimate,m=o.to,d=o.from,v=this.state.style;if(l){if(!s){var b={style:p?Zu({},p,m):m};this.state&&v&&(p&&v[p]!==m||!p&&v!==m)&&this.setState(b);return}if(!(s9(a.to,m)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var g={style:p?Zu({},p,I):I};(p&&v[p]!==I||!p&&v!==I)&&this.setState(g)}this.runAnimation(rr(rr({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var o=this,s=a.from,l=a.to,p=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,b=q9(s,l,C9(f),p,this.changeStyle),B=function(){o.stopJSAnimation=b()};this.manager.start([v,m,B,p,d])}},{key:"runStepAnimation",value:function(a){var o=this,s=a.steps,l=a.begin,p=a.onAnimationStart,f=s[0],m=f.style,d=f.duration,v=d===void 0?0:d,b=function(I,g,S){if(S===0)return I;var M=g.duration,_=g.easing,O=_===void 0?"ease":_,w=g.style,A=g.properties,E=g.onAnimationEnd,P=S>0?s[S-1]:g,W=A||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Xm(I),[o.runJSAnimation.bind(o,{from:P.style,to:w,duration:M,easing:O}),M]);var N=GS(W,M,O),D=rr(rr(rr({},P.style),w),{},{transition:N});return[].concat(Xm(I),[D,M,E]).filter(b9)};return this.manager.start([p].concat(Xm(s.reduce(b,[m,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=m9());var o=a.begin,s=a.duration,l=a.attributeName,p=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,b=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof b=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?Zu({},l,p):p,g=GS(Object.keys(I),s,f);B.start([m,o,rr(rr({},I),{},{transition:g}),s,d])}},{key:"render",value:function(){var a=this.props,o=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var p=z9(a,F9),f=Q.Children.count(o),m=this.state.style;if(typeof o=="function")return o(m);if(!l||f===0||s<=0)return o;var d=function(b){var B=b.props,I=B.style,g=I===void 0?{}:I,S=B.className,M=Q.cloneElement(b,rr(rr({},p),{},{style:rr(rr({},g),m),className:S}));return M};return f===1?d(Q.Children.only(o)):R.createElement("div",null,Q.Children.map(o,function(v){return d(v)}))}}]),n})(Q.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Qe.oneOfType([Qe.object,Qe.string]),to:Qe.oneOfType([Qe.object,Qe.string]),attributeName:Qe.string,duration:Qe.number,begin:Qe.number,easing:Qe.oneOfType([Qe.string,Qe.func]),steps:Qe.arrayOf(Qe.shape({duration:Qe.number.isRequired,style:Qe.object.isRequired,easing:Qe.oneOfType([Qe.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Qe.func]),properties:Qe.arrayOf("string"),onAnimationEnd:Qe.func})),children:Qe.oneOfType([Qe.node,Qe.func]),isActive:Qe.bool,canBegin:Qe.bool,onAnimationEnd:Qe.func,shouldReAnimate:Qe.bool,onAnimationStart:Qe.func,onAnimationReStart:Qe.func};function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function pp(){return pp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pp.apply(this,arguments)}function rz(e,t){return uz(e)||oz(e,t)||iz(e,t)||az()}function az(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iz(e,t){if(e){if(typeof e=="string")return JS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return JS(e,t)}}function JS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function uz(e){if(Array.isArray(e))return e}function e3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function t3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?e3(Object(n),!0).forEach(function(r){sz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):e3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sz(e,t,n){return t=lz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lz(e){var t=cz(e,"string");return Ts(t)=="symbol"?t:t+""}function cz(e,t){if(Ts(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var n3=function(t,n,r,a,o){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,p=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(s>0&&o instanceof Array){for(var d=[0,0,0,0],v=0,b=4;v<b;v++)d[v]=o[v]>s?s:o[v];m="M".concat(t,",").concat(n+l*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(t+p*d[0],",").concat(n)),m+="L ".concat(t+r-p*d[1],",").concat(n),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*d[1])),m+="L ".concat(t+r,",").concat(n+a-l*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(t+r-p*d[2],",").concat(n+a)),m+="L ".concat(t+p*d[3],",").concat(n+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*d[3])),m+="Z"}else if(s>0&&o===+o&&o>0){var B=Math.min(s,o);m="M ".concat(t,",").concat(n+l*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t+p*B,",").concat(n,`
            L `).concat(t+r-p*B,",").concat(n,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*B,`
            L `).concat(t+r,",").concat(n+a-l*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t+r-p*B,",").concat(n+a,`
            L `).concat(t+p*B,",").concat(n+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*B," Z")}else m="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},pz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,o=n.x,s=n.y,l=n.width,p=n.height;if(Math.abs(l)>0&&Math.abs(p)>0){var f=Math.min(o,o+l),m=Math.max(o,o+l),d=Math.min(s,s+p),v=Math.max(s,s+p);return r>=f&&r<=m&&a>=d&&a<=v}return!1},fz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},ub=function(t){var n=t3(t3({},fz),t),r=Q.useRef(),a=Q.useState(-1),o=rz(a,2),s=o[0],l=o[1];Q.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&l(O)}catch{}},[]);var p=n.x,f=n.y,m=n.width,d=n.height,v=n.radius,b=n.className,B=n.animationEasing,I=n.animationDuration,g=n.animationBegin,S=n.isAnimationActive,M=n.isUpdateAnimationActive;if(p!==+p||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var _=Re("recharts-rectangle",b);return M?R.createElement(Kn,{canBegin:s>0,from:{width:m,height:d,x:p,y:f},to:{width:m,height:d,x:p,y:f},duration:I,animationEasing:B,isActive:M},function(O){var w=O.width,A=O.height,E=O.x,P=O.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:I,isActive:S,easing:B},R.createElement("path",pp({},Me(n,!0),{className:_,d:n3(E,P,w,A,v),ref:r})))}):R.createElement("path",pp({},Me(n,!0),{className:_,d:n3(p,f,m,d,v)}))},dz=["points","className","baseLinePoints","connectNulls"];function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function hz(e,t){if(e==null)return{};var n=mz(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function r3(e){return bz(e)||gz(e)||yz(e)||vz()}function vz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yz(e,t){if(e){if(typeof e=="string")return Oy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oy(e,t)}}function gz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bz(e){if(Array.isArray(e))return Oy(e)}function Oy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a3=function(t){return t&&t.x===+t.x&&t.y===+t.y},Iz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){a3(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),a3(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},rs=function(t,n){var r=Iz(t);n&&(r=[r.reduce(function(o,s){return[].concat(r3(o),r3(s))},[])]);var a=r.map(function(o){return o.reduce(function(s,l,p){return"".concat(s).concat(p===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},xz=function(t,n,r){var a=rs(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(rs(n.reverse(),r).slice(1))},Bz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,o=t.connectNulls,s=hz(t,dz);if(!n||!n.length)return null;var l=Re("recharts-polygon",r);if(a&&a.length){var p=s.stroke&&s.stroke!=="none",f=xz(n,a,o);return R.createElement("g",{className:l},R.createElement("path",ro({},Me(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),p?R.createElement("path",ro({},Me(s,!0),{fill:"none",d:rs(n,o)})):null,p?R.createElement("path",ro({},Me(s,!0),{fill:"none",d:rs(a,o)})):null)}var m=rs(n,o);return R.createElement("path",ro({},Me(s,!0),{fill:m.slice(-1)==="Z"?s.fill:"none",className:l,d:m}))};function Wy(){return Wy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wy.apply(this,arguments)}var Js=function(t){var n=t.cx,r=t.cy,a=t.r,o=t.className,s=Re("recharts-dot",o);return n===+n&&r===+r&&a===+a?R.createElement("circle",Wy({},Me(t,!1),Ec(t),{className:s,cx:n,cy:r,r:a})):null};function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}var wz=["x","y","top","left","width","height","className"];function Cy(){return Cy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cy.apply(this,arguments)}function i3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i3(Object(n),!0).forEach(function(r){Sz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sz(e,t,n){return t=Mz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mz(e){var t=_z(e,"string");return Ns(t)=="symbol"?t:t+""}function _z(e,t){if(Ns(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Az(e,t){if(e==null)return{};var n=Oz(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Wz=function(t,n,r,a,o,s){return"M".concat(t,",").concat(o,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},Cz=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,o=a===void 0?0:a,s=t.top,l=s===void 0?0:s,p=t.left,f=p===void 0?0:p,m=t.width,d=m===void 0?0:m,v=t.height,b=v===void 0?0:v,B=t.className,I=Az(t,wz),g=Pz({x:r,y:o,top:l,left:f,width:d,height:b},I);return!le(r)||!le(o)||!le(d)||!le(b)||!le(l)||!le(f)?null:R.createElement("path",Cy({},Me(g,!0),{className:Re("recharts-cross",B),d:Wz(r,o,d,b,l,f)}))},Zm,o3;function kz(){if(o3)return Zm;o3=1;var e=a0(),t=uO(),n=_r();function r(a,o){return a&&a.length?e(a,n(o,2),t):void 0}return Zm=r,Zm}var Ez=kz();const Tz=Xe(Ez);var Jm,u3;function Nz(){if(u3)return Jm;u3=1;var e=a0(),t=_r(),n=sO();function r(a,o){return a&&a.length?e(a,t(o,2),n):void 0}return Jm=r,Jm}var jz=Nz();const Rz=Xe(jz);var Hz=["cx","cy","angle","ticks","axisLine"],Dz=["ticks","tick","angle","tickFormatter","stroke"];function wo(e){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wo(e)}function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ri(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){s0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l3(e,t){if(e==null)return{};var n=$z(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $z(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Lz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KO(r.key),r)}}function qz(e,t,n){return t&&c3(e.prototype,t),n&&c3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fz(e,t,n){return t=fp(t),zz(e,GO()?Reflect.construct(t,n||[],fp(e).constructor):t.apply(e,n))}function zz(e,t){if(t&&(wo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Uz(e)}function Uz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GO=function(){return!!e})()}function fp(e){return fp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fp(e)}function Vz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ky(e,t)}function ky(e,t){return ky=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ky(e,t)}function s0(e,t,n){return t=KO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KO(e){var t=Gz(e,"string");return wo(t)=="symbol"?t:t+""}function Gz(e,t){if(wo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(wo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var l0=(function(e){function t(){return Lz(this,t),Fz(this,t,arguments)}return Vz(t,e),qz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,o=this.props,s=o.angle,l=o.cx,p=o.cy;return it(l,p,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,o=r.cy,s=r.angle,l=r.ticks,p=Tz(l,function(m){return m.coordinate||0}),f=Rz(l,function(m){return m.coordinate||0});return{cx:a,cy:o,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:p.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,o=r.cy,s=r.angle,l=r.ticks,p=r.axisLine,f=l3(r,Hz),m=l.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=it(a,o,m[0],s),v=it(a,o,m[1],s),b=ri(ri(ri({},Me(f,!1)),{},{fill:"none"},Me(p,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return R.createElement("line",as({className:"recharts-polar-radius-axis-line"},b))}},{key:"renderTicks",value:function(){var r=this,a=this.props,o=a.ticks,s=a.tick,l=a.angle,p=a.tickFormatter,f=a.stroke,m=l3(a,Dz),d=this.getTickTextAnchor(),v=Me(m,!1),b=Me(s,!1),B=o.map(function(I,g){var S=r.getTickValueCoord(I),M=ri(ri(ri(ri({textAnchor:d,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},b),{},{index:g},S),{},{payload:I});return R.createElement(De,as({className:Re("recharts-polar-radius-axis-tick",jO(s)),key:"tick-".concat(I.coordinate)},Ta(r.props,I,g)),t.renderTickItem(s,M,p?p(I.value,g):I.value))});return R.createElement(De,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,o=r.axisLine,s=r.tick;return!a||!a.length?null:R.createElement(De,{className:Re("recharts-polar-radius-axis",this.props.className)},o&&this.renderAxisLine(),s&&this.renderTicks(),Ft.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,o){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(vi,as({},a,{className:"recharts-polar-radius-axis-tick-value"}),o),s}}])})(Q.PureComponent);s0(l0,"displayName","PolarRadiusAxis");s0(l0,"axisType","radiusAxis");s0(l0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Po(e){"@babel/helpers - typeof";return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Po(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}function p3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ai(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p3(Object(n),!0).forEach(function(r){c0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,QO(r.key),r)}}function Yz(e,t,n){return t&&f3(e.prototype,t),n&&f3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qz(e,t,n){return t=dp(t),Xz(e,YO()?Reflect.construct(t,n||[],dp(e).constructor):t.apply(e,n))}function Xz(e,t){if(t&&(Po(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zz(e)}function Zz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YO=function(){return!!e})()}function dp(e){return dp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dp(e)}function Jz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ey(e,t)}function Ey(e,t){return Ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ey(e,t)}function c0(e,t,n){return t=QO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QO(e){var t=eU(e,"string");return Po(t)=="symbol"?t:t+""}function eU(e,t){if(Po(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Po(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tU=Math.PI/180,d3=1e-5,p0=(function(e){function t(){return Kz(this,t),Qz(this,t,arguments)}return Jz(t,e),Yz(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,o=a.cx,s=a.cy,l=a.radius,p=a.orientation,f=a.tickSize,m=f||8,d=it(o,s,l,r.coordinate),v=it(o,s,l+(p==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,o=Math.cos(-r.coordinate*tU),s;return o>d3?s=a==="outer"?"start":"end":o<-d3?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,o=r.cy,s=r.radius,l=r.axisLine,p=r.axisLineType,f=ai(ai({},Me(this.props,!1)),{},{fill:"none"},Me(l,!1));if(p==="circle")return R.createElement(Js,si({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:o,r:s}));var m=this.props.ticks,d=m.map(function(v){return it(a,o,s,v.coordinate)});return R.createElement(Bz,si({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,o=a.ticks,s=a.tick,l=a.tickLine,p=a.tickFormatter,f=a.stroke,m=Me(this.props,!1),d=Me(s,!1),v=ai(ai({},m),{},{fill:"none"},Me(l,!1)),b=o.map(function(B,I){var g=r.getTickLineCoord(B),S=r.getTickTextAnchor(B),M=ai(ai(ai({textAnchor:S},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:g.x2,y:g.y2});return R.createElement(De,si({className:Re("recharts-polar-angle-axis-tick",jO(s)),key:"tick-".concat(B.coordinate)},Ta(r.props,B,I)),l&&R.createElement("line",si({className:"recharts-polar-angle-axis-tick-line"},v,g)),s&&t.renderTickItem(s,M,p?p(B.value,I):B.value))});return R.createElement(De,{className:"recharts-polar-angle-axis-ticks"},b)}},{key:"render",value:function(){var r=this.props,a=r.ticks,o=r.radius,s=r.axisLine;return o<=0||!a||!a.length?null:R.createElement(De,{className:Re("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,o){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(vi,si({},a,{className:"recharts-polar-angle-axis-tick-value"}),o),s}}])})(Q.PureComponent);c0(p0,"displayName","PolarAngleAxis");c0(p0,"axisType","angleAxis");c0(p0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var ev,h3;function nU(){if(h3)return ev;h3=1;var e=uA(),t=e(Object.getPrototypeOf,Object);return ev=t,ev}var tv,m3;function rU(){if(m3)return tv;m3=1;var e=Qr(),t=nU(),n=Xr(),r="[object Object]",a=Function.prototype,o=Object.prototype,s=a.toString,l=o.hasOwnProperty,p=s.call(Object);function f(m){if(!n(m)||e(m)!=r)return!1;var d=t(m);if(d===null)return!0;var v=l.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==p}return tv=f,tv}var aU=rU();const iU=Xe(aU);var nv,v3;function oU(){if(v3)return nv;v3=1;var e=Qr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return nv=r,nv}var uU=oU();const sU=Xe(uU);function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}function hp(){return hp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hp.apply(this,arguments)}function lU(e,t){return dU(e)||fU(e,t)||pU(e,t)||cU()}function cU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pU(e,t){if(e){if(typeof e=="string")return y3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y3(e,t)}}function y3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function dU(e){if(Array.isArray(e))return e}function g3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function b3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g3(Object(n),!0).forEach(function(r){hU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hU(e,t,n){return t=mU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mU(e){var t=vU(e,"string");return js(t)=="symbol"?t:t+""}function vU(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I3=function(t,n,r,a,o){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+o),l+="L ".concat(t+r-s/2-a,",").concat(n+o),l+="L ".concat(t,",").concat(n," Z"),l},yU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},gU=function(t){var n=b3(b3({},yU),t),r=Q.useRef(),a=Q.useState(-1),o=lU(a,2),s=o[0],l=o[1];Q.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var _=r.current.getTotalLength();_&&l(_)}catch{}},[]);var p=n.x,f=n.y,m=n.upperWidth,d=n.lowerWidth,v=n.height,b=n.className,B=n.animationEasing,I=n.animationDuration,g=n.animationBegin,S=n.isUpdateAnimationActive;if(p!==+p||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var M=Re("recharts-trapezoid",b);return S?R.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:p,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:p,y:f},duration:I,animationEasing:B,isActive:S},function(_){var O=_.upperWidth,w=_.lowerWidth,A=_.height,E=_.x,P=_.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:I,easing:B},R.createElement("path",hp({},Me(n,!0),{className:M,d:I3(E,P,O,w,A),ref:r})))}):R.createElement("g",null,R.createElement("path",hp({},Me(n,!0),{className:M,d:I3(p,f,m,d,v)})))},bU=["option","shapeType","propTransformer","activeClassName","isActive"];function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function IU(e,t){if(e==null)return{};var n=xU(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xU(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function x3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x3(Object(n),!0).forEach(function(r){BU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BU(e,t,n){return t=wU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wU(e){var t=PU(e,"string");return Rs(t)=="symbol"?t:t+""}function PU(e,t){if(Rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function SU(e,t){return mp(mp({},t),e)}function MU(e,t){return e==="symbols"}function B3(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return R.createElement(ub,n);case"trapezoid":return R.createElement(gU,n);case"sector":return R.createElement(DO,n);case"symbols":if(MU(t))return R.createElement(Kp,n);break;default:return null}}function _U(e){return Q.isValidElement(e)?e.props:e}function vp(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?SU:r,o=e.activeClassName,s=o===void 0?"recharts-active-shape":o,l=e.isActive,p=IU(e,bU),f;if(Q.isValidElement(t))f=Q.cloneElement(t,mp(mp({},p),_U(t)));else if(ke(t))f=t(p);else if(iU(t)&&!sU(t)){var m=a(t,p);f=R.createElement(B3,{shapeType:n,elementProps:m})}else{var d=p;f=R.createElement(B3,{shapeType:n,elementProps:d})}return l?R.createElement(De,{className:s},f):f}function f0(e,t){return t!=null&&"trapezoids"in e.props}function d0(e,t){return t!=null&&"sectors"in e.props}function Hs(e,t){return t!=null&&"points"in e.props}function AU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,o=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&o}function OU(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function WU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function CU(e,t){var n;return f0(e,t)?n=AU:d0(e,t)?n=OU:Hs(e,t)&&(n=WU),n}function kU(e,t){var n;return f0(e,t)?n="trapezoids":d0(e,t)?n="sectors":Hs(e,t)&&(n="points"),n}function EU(e,t){if(f0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(d0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Hs(e,t)?t.payload:{}}function TU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=kU(n,t),o=EU(n,t),s=r.filter(function(p,f){var m=Na(o,p),d=n.props[a].filter(function(B){var I=CU(n,t);return I(B,t)}),v=n.props[a].indexOf(d[d.length-1]),b=f===v;return m&&b}),l=r.indexOf(s[s.length-1]);return l}var Mc;function So(e){"@babel/helpers - typeof";return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},So(e)}function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}function w3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w3(Object(n),!0).forEach(function(r){Fn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ZO(r.key),r)}}function jU(e,t,n){return t&&P3(e.prototype,t),n&&P3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function RU(e,t,n){return t=yp(t),HU(e,XO()?Reflect.construct(t,n||[],yp(e).constructor):t.apply(e,n))}function HU(e,t){if(t&&(So(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DU(e)}function DU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function XO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XO=function(){return!!e})()}function yp(e){return yp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},yp(e)}function $U(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ty(e,t)}function Ty(e,t){return Ty=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ty(e,t)}function Fn(e,t,n){return t=ZO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZO(e){var t=LU(e,"string");return So(t)=="symbol"?t:t+""}function LU(e,t){if(So(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(So(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return NU(this,t),r=RU(this,t,[n]),Fn(r,"pieRef",null),Fn(r,"sectorRefs",[]),Fn(r,"id",Ha("recharts-pie-")),Fn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),Fn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return $U(t,e),jU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.label,l=o.labelLine,p=o.dataKey,f=o.valueKey,m=Me(this.props,!1),d=Me(s,!1),v=Me(l,!1),b=s&&s.offsetRadius||20,B=r.map(function(I,g){var S=(I.startAngle+I.endAngle)/2,M=it(I.cx,I.cy,I.outerRadius+b,S),_=rt(rt(rt(rt({},m),I),{},{stroke:"none"},d),{},{index:g,textAnchor:t.getTextAnchor(M.x,I.cx)},M),O=rt(rt(rt(rt({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:g,points:[it(I.cx,I.cy,I.outerRadius,S),M]}),w=p;return Ee(p)&&Ee(f)?w="value":Ee(p)&&(w=f),R.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(g)},l&&t.renderLabelLineItem(l,O,"line"),t.renderLabelItem(s,_,lt(I,w)))});return R.createElement(De,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,o=this.props,s=o.activeShape,l=o.blendStroke,p=o.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=p&&a.hasActiveIndex()?p:null,b=d?s:v,B=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return R.createElement(De,ao({ref:function(g){g&&!a.sectorRefs.includes(g)&&a.sectorRefs.push(g)},tabIndex:-1,className:"recharts-pie-sector"},Ta(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),R.createElement(vp,ao({option:b,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,o=a.sectors,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,b=d.prevIsAnimationActive;return R.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(b),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,g=[],S=o&&o[0],M=S.startAngle;return o.forEach(function(_,O){var w=v&&v[O],A=O>0?An(_,"paddingAngle",0):0;if(w){var E=ht(w.endAngle-w.startAngle,_.endAngle-_.startAngle),P=rt(rt({},_),{},{startAngle:M+A,endAngle:M+E(I)+A});g.push(P),M=P.endAngle}else{var W=_.endAngle,N=_.startAngle,D=ht(0,W-N),T=D(I),F=rt(rt({},_),{},{startAngle:M+A,endAngle:M+T+A});g.push(F),M=F.endAngle}}),R.createElement(De,null,r.renderSectorsStatically(g))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,o=r.isAnimationActive,s=this.state.prevSectors;return o&&a&&a.length&&(!s||!Na(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,o=a.hide,s=a.sectors,l=a.className,p=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,b=a.isAnimationActive,B=this.state.isAnimationFinished;if(o||!s||!s.length||!le(f)||!le(m)||!le(d)||!le(v))return null;var I=Re("recharts-pie",l);return R.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),p&&this.renderLabels(s),Ft.renderCallByParent(this.props,null,!1),(!b||B)&&sr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,o){if(R.isValidElement(r))return R.cloneElement(r,a);if(ke(r))return r(a);var s=Re("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return R.createElement(ka,ao({},a,{key:o,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,o){if(R.isValidElement(r))return R.cloneElement(r,a);var s=o;if(ke(r)&&(s=r(a),R.isValidElement(s)))return s;var l=Re("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return R.createElement(vi,ao({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(Q.PureComponent);Mc=ea;Fn(ea,"displayName","Pie");Fn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});Fn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});Fn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=Me(e,!1),a=sn(n,Ks);return t&&t.length?t.map(function(o,s){return rt(rt(rt({payload:o},r),o),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(o){return rt(rt({},r),o.props)}):[]});Fn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,o=t.height,s=NO(a,o),l=r+on(e.cx,a,a/2),p=n+on(e.cy,o,o/2),f=on(e.innerRadius,s,0),m=on(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+o*o)/2;return{cx:l,cy:p,innerRadius:f,outerRadius:m,maxRadius:d}});Fn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=Mc.getRealPieData(r);if(!a||!a.length)return null;var o=r.cornerRadius,s=r.startAngle,l=r.endAngle,p=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,b=Math.abs(r.minAngle),B=Mc.parseCoordinateOfPie(r,n),I=Mc.parseDeltaAngle(s,l),g=Math.abs(I),S=f;Ee(f)&&Ee(d)?(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ee(f)&&(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var M=a.filter(function(P){return lt(P,S,0)!==0}).length,_=(g>=360?M:M-1)*p,O=g-M*b-_,w=a.reduce(function(P,W){var N=lt(W,S,0);return P+(le(N)?N:0)},0),A;if(w>0){var E;A=a.map(function(P,W){var N=lt(P,S,0),D=lt(P,m,W),T=(le(N)?N:0)/w,F;W?F=E.endAngle+an(I)*p*(N!==0?1:0):F=s;var q=F+an(I)*((N!==0?b:0)+T*O),V=(F+q)/2,Y=(B.innerRadius+B.outerRadius)/2,G=[{name:D,value:N,payload:P,dataKey:S,type:v}],H=it(B.cx,B.cy,Y,V);return E=rt(rt(rt({percent:T,cornerRadius:o,name:D,tooltipPayload:G,midAngle:V,middleRadius:Y,tooltipPosition:H},P),B),{},{value:lt(P,S),startAngle:F,endAngle:q,payload:P,paddingAngle:an(I)*p}),E})}return rt(rt({},B),{},{sectors:A,data:a})});var rv,S3;function qU(){if(S3)return rv;S3=1;var e=Math.ceil,t=Math.max;function n(r,a,o,s){for(var l=-1,p=t(e((a-r)/(o||1)),0),f=Array(p);p--;)f[s?p:++l]=r,r+=o;return f}return rv=n,rv}var av,M3;function JO(){if(M3)return av;M3=1;var e=wA(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var o=a<0?-1:1;return o*n}return a===a?a:0}return av=r,av}var iv,_3;function FU(){if(_3)return iv;_3=1;var e=qU(),t=Xp(),n=JO();function r(a){return function(o,s,l){return l&&typeof l!="number"&&t(o,s,l)&&(s=l=void 0),o=n(o),s===void 0?(s=o,o=0):s=n(s),l=l===void 0?o<s?1:-1:n(l),e(o,s,l,a)}}return iv=r,iv}var ov,A3;function zU(){if(A3)return ov;A3=1;var e=FU(),t=e();return ov=t,ov}var UU=zU();const gp=Xe(UU);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function O3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function W3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O3(Object(n),!0).forEach(function(r){eW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eW(e,t,n){return t=VU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VU(e){var t=GU(e,"string");return Ds(t)=="symbol"?t:t+""}function GU(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var KU=["Webkit","Moz","O","ms"],YU=function(t,n){var r=t.replace(/(\w)/,function(o){return o.toUpperCase()}),a=KU.reduce(function(o,s){return W3(W3({},o),{},eW({},s+r,n))},{});return a[t]=n,a};function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function bp(){return bp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bp.apply(this,arguments)}function C3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function uv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C3(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nW(r.key),r)}}function XU(e,t,n){return t&&k3(e.prototype,t),n&&k3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZU(e,t,n){return t=Ip(t),JU(e,tW()?Reflect.construct(t,n||[],Ip(e).constructor):t.apply(e,n))}function JU(e,t){if(t&&(Mo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eV(e)}function eV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tW=function(){return!!e})()}function Ip(e){return Ip=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ip(e)}function tV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ny(e,t)}function Ny(e,t){return Ny=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ny(e,t)}function Pn(e,t,n){return t=nW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nW(e){var t=nV(e,"string");return Mo(t)=="symbol"?t:t+""}function nV(e,t){if(Mo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var rV=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,o=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var p=n.length,f=es().domain(gp(0,p)).range([o,o+s-l]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},E3=function(t){return t.changedTouches&&!!t.changedTouches.length},_o=(function(e){function t(n){var r;return QU(this,t),r=ZU(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,o=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:o,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var o=E3(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:o.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return tV(t,e),XU(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,o=r.endX,s=this.state.scaleValues,l=this.props,p=l.gap,f=l.data,m=f.length-1,d=Math.min(a,o),v=Math.max(a,o),b=t.getIndexInRange(s,d),B=t.getIndexInRange(s,v);return{startIndex:b-b%p,endIndex:B===m?m:B-B%p}}},{key:"getTextOfTick",value:function(r){var a=this.props,o=a.data,s=a.tickFormatter,l=a.dataKey,p=lt(o[r],l,r);return ke(s)?s(p,r):p}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,o=a.slideMoveStartX,s=a.startX,l=a.endX,p=this.props,f=p.x,m=p.width,d=p.travellerWidth,v=p.startIndex,b=p.endIndex,B=p.onChange,I=r.pageX-o;I>0?I=Math.min(I,f+m-d-l,f+m-d-s):I<0&&(I=Math.max(I,f-s,f-l));var g=this.getIndex({startX:s+I,endX:l+I});(g.startIndex!==v||g.endIndex!==b)&&B&&B(g),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var o=E3(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:o.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,o=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,p=a.startX,f=this.state[s],m=this.props,d=m.x,v=m.width,b=m.travellerWidth,B=m.onChange,I=m.gap,g=m.data,S={startX:this.state.startX,endX:this.state.endX},M=r.pageX-o;M>0?M=Math.min(M,d+v-b-f):M<0&&(M=Math.max(M,d-f)),S[s]=f+M;var _=this.getIndex(S),O=_.startIndex,w=_.endIndex,A=function(){var P=g.length-1;return s==="startX"&&(l>p?O%I===0:w%I===0)||l<p&&w===P||s==="endX"&&(l>p?w%I===0:O%I===0)||l>p&&w===P};this.setState(Pn(Pn({},s,f+M),"brushMoveStartX",r.pageX),function(){B&&A()&&B(_)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var o=this,s=this.state,l=s.scaleValues,p=s.startX,f=s.endX,m=this.state[a],d=l.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=l.length)){var b=l[v];a==="startX"&&b>=f||a==="endX"&&b<=p||this.setState(Pn({},a,b),function(){o.props.onChange(o.getIndex({startX:o.state.startX,endX:o.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,o=r.y,s=r.width,l=r.height,p=r.fill,f=r.stroke;return R.createElement("rect",{stroke:f,fill:p,x:a,y:o,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,o=r.y,s=r.width,l=r.height,p=r.data,f=r.children,m=r.padding,d=Q.Children.only(f);return d?R.cloneElement(d,{x:a,y:o,width:s,height:l,margin:m,compact:!0,data:p}):null}},{key:"renderTravellerLayer",value:function(r,a){var o,s,l=this,p=this.props,f=p.y,m=p.travellerWidth,d=p.height,v=p.traveller,b=p.ariaLabel,B=p.data,I=p.startIndex,g=p.endIndex,S=Math.max(r,this.props.x),M=uv(uv({},Me(this.props,!1)),{},{x:S,y:f,width:m,height:d}),_=b||"Min value: ".concat((o=B[I])===null||o===void 0?void 0:o.name,", Max value: ").concat((s=B[g])===null||s===void 0?void 0:s.name);return R.createElement(De,{tabIndex:0,role:"slider","aria-label":_,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,M))}},{key:"renderSlide",value:function(r,a){var o=this.props,s=o.y,l=o.height,p=o.stroke,f=o.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return R.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:p,fillOpacity:.2,x:m,y:s,width:d,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,o=r.endIndex,s=r.y,l=r.height,p=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,b=5,B={pointerEvents:"none",fill:f};return R.createElement(De,{className:"recharts-brush-texts"},R.createElement(vi,bp({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-b,y:s+l/2},B),this.getTextOfTick(a)),R.createElement(vi,bp({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+p+b,y:s+l/2},B),this.getTextOfTick(o)))}},{key:"render",value:function(){var r=this.props,a=r.data,o=r.className,s=r.children,l=r.x,p=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,b=v.startX,B=v.endX,I=v.isTextActive,g=v.isSlideMoving,S=v.isTravellerMoving,M=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(p)||!le(f)||!le(m)||f<=0||m<=0)return null;var _=Re("recharts-brush",o),O=R.Children.count(s)===1,w=YU("userSelect","none");return R.createElement(De,{className:_,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(b,B),this.renderTravellerLayer(b,"startX"),this.renderTravellerLayer(B,"endX"),(I||g||S||M||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,o=r.y,s=r.width,l=r.height,p=r.stroke,f=Math.floor(o+l/2)-1;return R.createElement(R.Fragment,null,R.createElement("rect",{x:a,y:o,width:s,height:l,fill:p,stroke:"none"}),R.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),R.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var o;return R.isValidElement(r)?o=R.cloneElement(r,a):ke(r)?o=r(a):o=t.renderDefaultTraveller(a),o}},{key:"getDerivedStateFromProps",value:function(r,a){var o=r.data,s=r.width,l=r.x,p=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(o!==a.prevData||f!==a.prevUpdateId)return uv({prevData:o,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s},o&&o.length?rV({data:o,width:s,x:l,travellerWidth:p,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||p!==a.prevTravellerWidth)){a.scale.range([l,l+s-p]);var v=a.scale.domain().map(function(b){return a.scale(b)});return{prevData:o,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var o=r.length,s=0,l=o-1;l-s>1;){var p=Math.floor((s+l)/2);r[p]>a?l=p:s=p}return a>=r[l]?l:s}}])})(Q.PureComponent);Pn(_o,"displayName","Brush");Pn(_o,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var sv,T3;function aV(){if(T3)return sv;T3=1;var e=kg();function t(n,r){var a;return e(n,function(o,s,l){return a=r(o,s,l),!a}),!!a}return sv=t,sv}var lv,N3;function iV(){if(N3)return lv;N3=1;var e=eA(),t=_r(),n=aV(),r=gn(),a=Xp();function o(s,l,p){var f=r(s)?e:n;return p&&a(s,l,p)&&(l=void 0),f(s,t(l,3))}return lv=o,lv}var oV=iV();const uV=Xe(oV);var wr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},cv,j3;function sV(){if(j3)return cv;j3=1;var e=gA();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return cv=t,cv}var pv,R3;function lV(){if(R3)return pv;R3=1;var e=sV(),t=vA(),n=_r();function r(a,o){var s={};return o=n(o,3),t(a,function(l,p,f){e(s,p,o(l,p,f))}),s}return pv=r,pv}var cV=lV();const pV=Xe(cV);var fv,H3;function fV(){if(H3)return fv;H3=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return fv=e,fv}var dv,D3;function dV(){if(D3)return dv;D3=1;var e=kg();function t(n,r){var a=!0;return e(n,function(o,s,l){return a=!!r(o,s,l),a}),a}return dv=t,dv}var hv,$3;function hV(){if($3)return hv;$3=1;var e=fV(),t=dV(),n=_r(),r=gn(),a=Xp();function o(s,l,p){var f=r(s)?e:t;return p&&a(s,l,p)&&(l=void 0),f(s,n(l,3))}return hv=o,hv}var mV=hV();const rW=Xe(mV);var vV=["x","y"];function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function jy(){return jy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jy.apply(this,arguments)}function L3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Yu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L3(Object(n),!0).forEach(function(r){yV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yV(e,t,n){return t=gV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gV(e){var t=bV(e,"string");return $s(t)=="symbol"?t:t+""}function bV(e,t){if($s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IV(e,t){if(e==null)return{};var n=xV(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function BV(e,t){var n=e.x,r=e.y,a=IV(e,vV),o="".concat(n),s=parseInt(o,10),l="".concat(r),p=parseInt(l,10),f="".concat(t.height||a.height),m=parseInt(f,10),d="".concat(t.width||a.width),v=parseInt(d,10);return Yu(Yu(Yu(Yu(Yu({},t),a),s?{x:s}:{}),p?{y:p}:{}),{},{height:m,width:v,name:t.name,radius:t.radius})}function q3(e){return R.createElement(vp,jy({shapeType:"rectangle",propTransformer:BV,activeClassName:"recharts-active-bar"},e))}var wV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var o=typeof r=="number";return o?t(r,a):(o||gi(),n)}},PV=["value","background"],aW;function Ao(e){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ao(e)}function SV(e,t){if(e==null)return{};var n=MV(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function MV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function xp(){return xp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xp.apply(this,arguments)}function F3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F3(Object(n),!0).forEach(function(r){Aa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oW(r.key),r)}}function AV(e,t,n){return t&&z3(e.prototype,t),n&&z3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function OV(e,t,n){return t=Bp(t),WV(e,iW()?Reflect.construct(t,n||[],Bp(e).constructor):t.apply(e,n))}function WV(e,t){if(t&&(Ao(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CV(e)}function CV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iW=function(){return!!e})()}function Bp(e){return Bp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Bp(e)}function kV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ry(e,t)}function Ry(e,t){return Ry=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ry(e,t)}function Aa(e,t,n){return t=oW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oW(e){var t=EV(e,"string");return Ao(t)=="symbol"?t:t+""}function EV(e,t){if(Ao(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ao(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function t(){var n;_V(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=OV(this,t,[].concat(a)),Aa(n,"state",{isAnimationFinished:!1}),Aa(n,"id",Ha("recharts-bar-")),Aa(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),Aa(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return kV(t,e),AV(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,o=this.props,s=o.shape,l=o.dataKey,p=o.activeIndex,f=o.activeBar,m=Me(this.props,!1);return r&&r.map(function(d,v){var b=v===p,B=b?f:s,I=Ot(Ot(Ot({},m),d),{},{isActive:b,option:B,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return R.createElement(De,xp({className:"recharts-bar-rectangle"},Ta(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),R.createElement(q3,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,o=a.data,s=a.layout,l=a.isAnimationActive,p=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return R.createElement(Kn,{begin:p,duration:f,isActive:l,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(b){var B=b.t,I=o.map(function(g,S){var M=v&&v[S];if(M){var _=ht(M.x,g.x),O=ht(M.y,g.y),w=ht(M.width,g.width),A=ht(M.height,g.height);return Ot(Ot({},g),{},{x:_(B),y:O(B),width:w(B),height:A(B)})}if(s==="horizontal"){var E=ht(0,g.height),P=E(B);return Ot(Ot({},g),{},{y:g.y+g.height-P,height:P})}var W=ht(0,g.width),N=W(B);return Ot(Ot({},g),{},{width:N})});return R.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,o=r.isAnimationActive,s=this.state.prevData;return o&&a&&a.length&&(!s||!Na(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,o=a.data,s=a.dataKey,l=a.activeIndex,p=Me(this.props.background,!1);return o.map(function(f,m){f.value;var d=f.background,v=SV(f,PV);if(!d)return null;var b=Ot(Ot(Ot(Ot(Ot({},v),{},{fill:"#eee"},d),p),Ta(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:m,className:"recharts-bar-background-rectangle"});return R.createElement(q3,xp({key:"background-bar-".concat(m),option:r.props.background,isActive:m===l},b))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.data,l=o.xAxis,p=o.yAxis,f=o.layout,m=o.children,d=sn(m,Zo);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,b=function(g,S){var M=Array.isArray(g.value)?g.value[1]:g.value;return{x:g.x,y:g.y,value:M,errorVal:lt(g,S)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,B,d.map(function(I){return R.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,offset:v,dataPointFormatter:b})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,o=r.data,s=r.className,l=r.xAxis,p=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,b=r.isAnimationActive,B=r.background,I=r.id;if(a||!o||!o.length)return null;var g=this.state.isAnimationFinished,S=Re("recharts-bar",s),M=l&&l.allowDataOverflow,_=p&&p.allowDataOverflow,O=M||_,w=Ee(I)?this.id:I;return R.createElement(De,{className:S},M||_?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:M?f:f-d/2,y:_?m:m-v/2,width:M?d:d*2,height:_?v:v*2}))):null,R.createElement(De,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!b||g)&&sr.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(Q.PureComponent);aW=Sr;Aa(Sr,"displayName","Bar");Aa(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Aa(Sr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,o=e.xAxis,s=e.yAxis,l=e.xAxisTicks,p=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,b=aF(r,n);if(!b)return null;var B=t.layout,I=n.type.defaultProps,g=I!==void 0?Ot(Ot({},I),n.props):n.props,S=g.dataKey,M=g.children,_=g.minPointSize,O=B==="horizontal"?s:o,w=f?O.scale.domain():null,A=pF({numericAxis:O}),E=sn(M,Ks),P=d.map(function(W,N){var D,T,F,q,V,Y;f?D=iF(f[m+N],w):(D=lt(W,S),Array.isArray(D)||(D=[A,D]));var G=wV(_,aW.defaultProps.minPointSize)(D[1],N);if(B==="horizontal"){var H,U=[s.scale(D[0]),s.scale(D[1])],X=U[0],j=U[1];T=gS({axis:o,ticks:l,bandSize:a,offset:b.offset,entry:W,index:N}),F=(H=j??X)!==null&&H!==void 0?H:void 0,q=b.size;var $=X-j;if(V=Number.isNaN($)?0:$,Y={x:T,y:s.y,width:q,height:s.height},Math.abs(G)>0&&Math.abs(V)<Math.abs(G)){var Z=an(V||G)*(Math.abs(G)-Math.abs(V));F-=Z,V+=Z}}else{var ue=[o.scale(D[0]),o.scale(D[1])],he=ue[0],ye=ue[1];if(T=he,F=gS({axis:s,ticks:p,bandSize:a,offset:b.offset,entry:W,index:N}),q=ye-he,V=b.size,Y={x:o.x,y:F,width:o.width,height:V},Math.abs(G)>0&&Math.abs(q)<Math.abs(G)){var ge=an(q||G)*(Math.abs(G)-Math.abs(q));q+=ge}}return Ot(Ot(Ot({},W),{},{x:T,y:F,width:q,height:V,value:f?D:D[1],payload:W,background:Y},E&&E[N]&&E[N].props),{},{tooltipPayload:[EO(n,W)],tooltipPosition:{x:T+q/2,y:F+V/2}})});return Ot({data:P,layout:B},v)});function Ls(e){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ls(e)}function TV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,uW(r.key),r)}}function NV(e,t,n){return t&&U3(e.prototype,t),n&&U3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function V3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V3(Object(n),!0).forEach(function(r){h0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h0(e,t,n){return t=uW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uW(e){var t=jV(e,"string");return Ls(t)=="symbol"?t:t+""}function jV(e,t){if(Ls(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sb=function(t,n,r,a,o){var s=t.width,l=t.height,p=t.layout,f=t.children,m=Object.keys(n),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Sr);return m.reduce(function(b,B){var I=n[B],g=I.orientation,S=I.domain,M=I.padding,_=M===void 0?{}:M,O=I.mirror,w=I.reversed,A="".concat(g).concat(O?"Mirror":""),E,P,W,N,D;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var T=S[1]-S[0],F=1/0,q=I.categoricalDomain.sort();if(q.forEach(function(ue,he){he>0&&(F=Math.min((ue||0)-(q[he-1]||0),F))}),Number.isFinite(F)){var V=F/T,Y=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(E=V*Y/2),I.padding==="no-gap"){var G=on(t.barCategoryGap,V*Y),H=V*Y/2;E=H-G-(H-G)/Y*G}}}a==="xAxis"?P=[r.left+(_.left||0)+(E||0),r.left+r.width-(_.right||0)-(E||0)]:a==="yAxis"?P=p==="horizontal"?[r.top+r.height-(_.bottom||0),r.top+(_.top||0)]:[r.top+(_.top||0)+(E||0),r.top+r.height-(_.bottom||0)-(E||0)]:P=I.range,w&&(P=[P[1],P[0]]);var U=OO(I,o,v),X=U.scale,j=U.realScaleType;X.domain(S).range(P),WO(X);var $=CO(X,ar(ar({},I),{},{realScaleType:j}));a==="xAxis"?(D=g==="top"&&!O||g==="bottom"&&O,W=r.left,N=d[A]-D*I.height):a==="yAxis"&&(D=g==="left"&&!O||g==="right"&&O,W=d[A]-D*I.width,N=r.top);var Z=ar(ar(ar({},I),$),{},{realScaleType:j,x:W,y:N,scale:X,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return Z.bandSize=ap(Z,$),!I.hide&&a==="xAxis"?d[A]+=(D?-1:1)*Z.height:I.hide||(d[A]+=(D?-1:1)*Z.width),ar(ar({},b),{},h0({},B,Z))},{})},sW=function(t,n){var r=t.x,a=t.y,o=n.x,s=n.y;return{x:Math.min(r,o),y:Math.min(a,s),width:Math.abs(o-r),height:Math.abs(s-a)}},RV=function(t){var n=t.x1,r=t.y1,a=t.x2,o=t.y2;return sW({x:n,y:r},{x:a,y:o})},lW=(function(){function e(t){TV(this,e),this.scale=t}return NV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,o=r.position;if(n!==void 0){if(o)switch(o){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var p=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+p}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],o=r[r.length-1];return a<=o?n>=a&&n<=o:n>=o&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();h0(lW,"EPS",1e-4);var lb=function(t){var n=Object.keys(t).reduce(function(r,a){return ar(ar({},r),{},h0({},a,lW.create(t[a])))},{});return ar(ar({},n),{},{apply:function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=o.bandAware,l=o.position;return pV(a,function(p,f){return n[f].apply(p,{bandAware:s,position:l})})},isInRange:function(a){return rW(a,function(o,s){return n[s].isInRange(o)})}})};function HV(e){return(e%180+180)%180}var DV=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=HV(a),s=o*Math.PI/180,l=Math.atan(r/n),p=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(p)},mv,G3;function $V(){if(G3)return mv;G3=1;var e=_r(),t=Gs(),n=Yp();function r(a){return function(o,s,l){var p=Object(o);if(!t(o)){var f=e(s,3);o=n(o),s=function(d){return f(p[d],d,p)}}var m=a(o,s,l);return m>-1?p[f?o[m]:m]:void 0}}return mv=r,mv}var vv,K3;function LV(){if(K3)return vv;K3=1;var e=JO();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return vv=t,vv}var yv,Y3;function qV(){if(Y3)return yv;Y3=1;var e=pA(),t=_r(),n=LV(),r=Math.max;function a(o,s,l){var p=o==null?0:o.length;if(!p)return-1;var f=l==null?0:n(l);return f<0&&(f=r(p+f,0)),e(o,t(s,3),f)}return yv=a,yv}var gv,Q3;function FV(){if(Q3)return gv;Q3=1;var e=$V(),t=qV(),n=e(t);return gv=n,gv}var zV=FV();const UV=Xe(zV);var VV=M_();const GV=Xe(VV);var KV=GV(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),cb=Q.createContext(void 0),pb=Q.createContext(void 0),cW=Q.createContext(void 0),pW=Q.createContext({}),fW=Q.createContext(void 0),dW=Q.createContext(0),hW=Q.createContext(0),X3=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,o=n.offset,s=t.clipPathId,l=t.children,p=t.width,f=t.height,m=KV(o);return R.createElement(cb.Provider,{value:r},R.createElement(pb.Provider,{value:a},R.createElement(pW.Provider,{value:o},R.createElement(cW.Provider,{value:m},R.createElement(fW.Provider,{value:s},R.createElement(dW.Provider,{value:f},R.createElement(hW.Provider,{value:p},l)))))))},YV=function(){return Q.useContext(fW)},mW=function(t){var n=Q.useContext(cb);n==null&&gi();var r=n[t];return r==null&&gi(),r},QV=function(){var t=Q.useContext(cb);return Ma(t)},XV=function(){var t=Q.useContext(pb),n=UV(t,function(r){return rW(r.domain,Number.isFinite)});return n||Ma(t)},vW=function(t){var n=Q.useContext(pb);n==null&&gi();var r=n[t];return r==null&&gi(),r},ZV=function(){var t=Q.useContext(cW);return t},JV=function(){return Q.useContext(pW)},fb=function(){return Q.useContext(hW)},db=function(){return Q.useContext(dW)};function Oo(e){"@babel/helpers - typeof";return Oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oo(e)}function eG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,gW(r.key),r)}}function nG(e,t,n){return t&&tG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function rG(e,t,n){return t=wp(t),aG(e,yW()?Reflect.construct(t,n||[],wp(e).constructor):t.apply(e,n))}function aG(e,t){if(t&&(Oo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iG(e)}function iG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(yW=function(){return!!e})()}function wp(e){return wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},wp(e)}function oG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hy(e,t)}function Hy(e,t){return Hy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Hy(e,t)}function Z3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function J3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z3(Object(n),!0).forEach(function(r){hb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hb(e,t,n){return t=gW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gW(e){var t=uG(e,"string");return Oo(t)=="symbol"?t:t+""}function uG(e,t){if(Oo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Oo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function sG(e,t){return fG(e)||pG(e,t)||cG(e,t)||lG()}function lG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cG(e,t){if(e){if(typeof e=="string")return eM(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eM(e,t)}}function eM(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function fG(e){if(Array.isArray(e))return e}function Dy(){return Dy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dy.apply(this,arguments)}var dG=function(t,n){var r;return R.isValidElement(t)?r=R.cloneElement(t,n):ke(t)?r=t(n):r=R.createElement("line",Dy({},n,{className:"recharts-reference-line-line"})),r},hG=function(t,n,r,a,o,s,l,p,f){var m=o.x,d=o.y,v=o.width,b=o.height;if(r){var B=f.y,I=t.y.apply(B,{position:s});if(wr(f,"discard")&&!t.y.isInRange(I))return null;var g=[{x:m+v,y:I},{x:m,y:I}];return p==="left"?g.reverse():g}if(n){var S=f.x,M=t.x.apply(S,{position:s});if(wr(f,"discard")&&!t.x.isInRange(M))return null;var _=[{x:M,y:d+b},{x:M,y:d}];return l==="top"?_.reverse():_}if(a){var O=f.segment,w=O.map(function(A){return t.apply(A,{position:s})});return wr(f,"discard")&&uV(w,function(A){return!t.isInRange(A)})?null:w}return null};function mG(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,o=e.yAxisId,s=e.shape,l=e.className,p=e.alwaysShow,f=YV(),m=mW(a),d=vW(o),v=ZV();if(!f||!v)return null;ur(p===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var b=lb({x:m.scale,y:d.scale}),B=jt(t),I=jt(n),g=r&&r.length===2,S=hG(b,B,I,g,v,e.position,m.orientation,d.orientation,e);if(!S)return null;var M=sG(S,2),_=M[0],O=_.x,w=_.y,A=M[1],E=A.x,P=A.y,W=wr(e,"hidden")?"url(#".concat(f,")"):void 0,N=J3(J3({clipPath:W},Me(e,!0)),{},{x1:O,y1:w,x2:E,y2:P});return R.createElement(De,{className:Re("recharts-reference-line",l)},dG(s,N),Ft.renderCallByParent(e,RV({x1:O,y1:w,x2:E,y2:P})))}var mb=(function(e){function t(){return eG(this,t),rG(this,t,arguments)}return oG(t,e),nG(t,[{key:"render",value:function(){return R.createElement(mG,this.props)}}])})(R.Component);hb(mb,"displayName","ReferenceLine");hb(mb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function $y(){return $y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$y.apply(this,arguments)}function Wo(e){"@babel/helpers - typeof";return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wo(e)}function tM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nM(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tM(Object(n),!0).forEach(function(r){m0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,IW(r.key),r)}}function gG(e,t,n){return t&&yG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function bG(e,t,n){return t=Pp(t),IG(e,bW()?Reflect.construct(t,n||[],Pp(e).constructor):t.apply(e,n))}function IG(e,t){if(t&&(Wo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xG(e)}function xG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bW=function(){return!!e})()}function Pp(e){return Pp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pp(e)}function BG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ly(e,t)}function Ly(e,t){return Ly=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ly(e,t)}function m0(e,t,n){return t=IW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IW(e){var t=wG(e,"string");return Wo(t)=="symbol"?t:t+""}function wG(e,t){if(Wo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var PG=function(t){var n=t.x,r=t.y,a=t.xAxis,o=t.yAxis,s=lb({x:a.scale,y:o.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return wr(t,"discard")&&!s.isInRange(l)?null:l},v0=(function(e){function t(){return vG(this,t),bG(this,t,arguments)}return BG(t,e),gG(t,[{key:"render",value:function(){var r=this.props,a=r.x,o=r.y,s=r.r,l=r.alwaysShow,p=r.clipPathId,f=jt(a),m=jt(o);if(ur(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=PG(this.props);if(!d)return null;var v=d.x,b=d.y,B=this.props,I=B.shape,g=B.className,S=wr(this.props,"hidden")?"url(#".concat(p,")"):void 0,M=nM(nM({clipPath:S},Me(this.props,!0)),{},{cx:v,cy:b});return R.createElement(De,{className:Re("recharts-reference-dot",g)},t.renderDot(I,M),Ft.renderCallByParent(this.props,{x:v-s,y:b-s,width:2*s,height:2*s}))}}])})(R.Component);m0(v0,"displayName","ReferenceDot");m0(v0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});m0(v0,"renderDot",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(Js,$y({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function qy(){return qy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qy.apply(this,arguments)}function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function rM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function aM(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rM(Object(n),!0).forEach(function(r){y0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function MG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BW(r.key),r)}}function _G(e,t,n){return t&&MG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function AG(e,t,n){return t=Sp(t),OG(e,xW()?Reflect.construct(t,n||[],Sp(e).constructor):t.apply(e,n))}function OG(e,t){if(t&&(Co(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WG(e)}function WG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xW=function(){return!!e})()}function Sp(e){return Sp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sp(e)}function CG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fy(e,t)}function Fy(e,t){return Fy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Fy(e,t)}function y0(e,t,n){return t=BW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BW(e){var t=kG(e,"string");return Co(t)=="symbol"?t:t+""}function kG(e,t){if(Co(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Co(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var EG=function(t,n,r,a,o){var s=o.x1,l=o.x2,p=o.y1,f=o.y2,m=o.xAxis,d=o.yAxis;if(!m||!d)return null;var v=lb({x:m.scale,y:d.scale}),b={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(p,{position:"start"}):v.y.rangeMin},B={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(o,"discard")&&(!v.isInRange(b)||!v.isInRange(B))?null:sW(b,B)},g0=(function(e){function t(){return SG(this,t),AG(this,t,arguments)}return CG(t,e),_G(t,[{key:"render",value:function(){var r=this.props,a=r.x1,o=r.x2,s=r.y1,l=r.y2,p=r.className,f=r.alwaysShow,m=r.clipPathId;ur(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=jt(a),v=jt(o),b=jt(s),B=jt(l),I=this.props.shape;if(!d&&!v&&!b&&!B&&!I)return null;var g=EG(d,v,b,B,this.props);if(!g&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return R.createElement(De,{className:Re("recharts-reference-area",p)},t.renderRect(I,aM(aM({clipPath:S},Me(this.props,!0)),g)),Ft.renderCallByParent(this.props,g))}}])})(R.Component);y0(g0,"displayName","ReferenceArea");y0(g0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});y0(g0,"renderRect",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(ub,qy({},t,{className:"recharts-reference-area-rect"})),n});function wW(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function TG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return DV(r,n)}function NG(e,t,n){var r=n==="width",a=e.x,o=e.y,s=e.width,l=e.height;return t===1?{start:r?a:o,end:r?a+s:o+l}:{start:r?a+s:o+l,end:r?a:o}}function Mp(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var o=n();return e*(t-e*o/2-r)>=0&&e*(t+e*o/2-a)<=0}function jG(e,t){return wW(e,t+1)}function RG(e,t,n,r,a){for(var o=(r||[]).slice(),s=t.start,l=t.end,p=0,f=1,m=s,d=function(){var B=r==null?void 0:r[p];if(B===void 0)return{v:wW(r,f)};var I=p,g,S=function(){return g===void 0&&(g=n(B,I)),g},M=B.coordinate,_=p===0||Mp(e,M,S,m,l);_||(p=0,m=s,f+=1),_&&(m=M+e*(S()/2+a),p+=f)},v;f<=o.length;)if(v=d(),v)return v.v;return[]}function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function iM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iM(Object(n),!0).forEach(function(r){HG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HG(e,t,n){return t=DG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DG(e){var t=$G(e,"string");return qs(t)=="symbol"?t:t+""}function $G(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LG(e,t,n,r,a){for(var o=(r||[]).slice(),s=o.length,l=t.start,p=t.end,f=function(v){var b=o[v],B,I=function(){return B===void 0&&(B=n(b,v)),B};if(v===s-1){var g=e*(b.coordinate+e*I()/2-p);o[v]=b=Jt(Jt({},b),{},{tickCoord:g>0?b.coordinate-g*e:b.coordinate})}else o[v]=b=Jt(Jt({},b),{},{tickCoord:b.coordinate});var S=Mp(e,b.tickCoord,I,l,p);S&&(p=b.tickCoord-e*(I()/2+a),o[v]=Jt(Jt({},b),{},{isShow:!0}))},m=s-1;m>=0;m--)f(m);return o}function qG(e,t,n,r,a,o){var s=(r||[]).slice(),l=s.length,p=t.start,f=t.end;if(o){var m=r[l-1],d=n(m,l-1),v=e*(m.coordinate+e*d/2-f);s[l-1]=m=Jt(Jt({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var b=Mp(e,m.tickCoord,function(){return d},p,f);b&&(f=m.tickCoord-e*(d/2+a),s[l-1]=Jt(Jt({},m),{},{isShow:!0}))}for(var B=o?l-1:l,I=function(M){var _=s[M],O,w=function(){return O===void 0&&(O=n(_,M)),O};if(M===0){var A=e*(_.coordinate-e*w()/2-p);s[M]=_=Jt(Jt({},_),{},{tickCoord:A<0?_.coordinate-A*e:_.coordinate})}else s[M]=_=Jt(Jt({},_),{},{tickCoord:_.coordinate});var E=Mp(e,_.tickCoord,w,p,f);E&&(p=_.tickCoord+e*(w()/2+a),s[M]=Jt(Jt({},_),{},{isShow:!0}))},g=0;g<B;g++)I(g);return s}function vb(e,t,n){var r=e.tick,a=e.ticks,o=e.viewBox,s=e.minTickGap,l=e.orientation,p=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(p)||Zr.isSsr)return jG(a,typeof p=="number"&&le(p)?p:0);var v=[],b=l==="top"||l==="bottom"?"width":"height",B=m&&b==="width"?Ju(m,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(_,O){var w=ke(f)?f(_.value,O):_.value;return b==="width"?TG(Ju(w,{fontSize:t,letterSpacing:n}),B,d):Ju(w,{fontSize:t,letterSpacing:n})[b]},g=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=NG(o,g,b);return p==="equidistantPreserveStart"?RG(g,S,I,a,s):(p==="preserveStart"||p==="preserveStartEnd"?v=qG(g,S,I,a,s,p==="preserveStartEnd"):v=LG(g,S,I,a,s),v.filter(function(M){return M.isShow}))}var FG=["viewBox"],zG=["viewBox"],UG=["ticks"];function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}function oM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oM(Object(n),!0).forEach(function(r){yb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bv(e,t){if(e==null)return{};var n=VG(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function VG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function GG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uM(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SW(r.key),r)}}function KG(e,t,n){return t&&uM(e.prototype,t),n&&uM(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function YG(e,t,n){return t=_p(t),QG(e,PW()?Reflect.construct(t,n||[],_p(e).constructor):t.apply(e,n))}function QG(e,t){if(t&&(ko(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return XG(e)}function XG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PW=function(){return!!e})()}function _p(e){return _p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},_p(e)}function ZG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zy(e,t)}function zy(e,t){return zy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},zy(e,t)}function yb(e,t,n){return t=SW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SW(e){var t=JG(e,"string");return ko(t)=="symbol"?t:t+""}function JG(e,t){if(ko(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ko(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Jo=(function(e){function t(n){var r;return GG(this,t),r=YG(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return ZG(t,e),KG(t,[{key:"shouldComponentUpdate",value:function(r,a){var o=r.viewBox,s=bv(r,FG),l=this.props,p=l.viewBox,f=bv(l,zG);return!uo(o,p)||!uo(s,f)||!uo(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,o=a.x,s=a.y,l=a.width,p=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,b,B,I,g,S,M,_=d?-1:1,O=r.tickSize||m,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":b=B=r.coordinate,g=s+ +!d*p,I=g-_*O,M=I-_*v,S=w;break;case"left":I=g=r.coordinate,B=o+ +!d*l,b=B-_*O,S=b-_*v,M=w;break;case"right":I=g=r.coordinate,B=o+ +d*l,b=B+_*O,S=b+_*v,M=w;break;default:b=B=r.coordinate,g=s+ +d*p,I=g+_*O,M=I+_*v,S=w;break}return{line:{x1:b,y1:I,x2:B,y2:g},tick:{x:S,y:M}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,o=r.mirror,s;switch(a){case"left":s=o?"start":"end";break;case"right":s=o?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,o=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=o?"start":"end";break;default:s=o?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,o=r.y,s=r.width,l=r.height,p=r.orientation,f=r.mirror,m=r.axisLine,d=rn(rn(rn({},Me(this.props,!1)),Me(m,!1)),{},{fill:"none"});if(p==="top"||p==="bottom"){var v=+(p==="top"&&!f||p==="bottom"&&f);d=rn(rn({},d),{},{x1:a,y1:o+v*l,x2:a+s,y2:o+v*l})}else{var b=+(p==="left"&&!f||p==="right"&&f);d=rn(rn({},d),{},{x1:a+b*s,y1:o,x2:a+b*s,y2:o+l})}return R.createElement("line",io({},d,{className:Re("recharts-cartesian-axis-line",An(m,"className"))}))}},{key:"renderTicks",value:function(r,a,o){var s=this,l=this.props,p=l.tickLine,f=l.stroke,m=l.tick,d=l.tickFormatter,v=l.unit,b=vb(rn(rn({},this.props),{},{ticks:r}),a,o),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),g=Me(this.props,!1),S=Me(m,!1),M=rn(rn({},g),{},{fill:"none"},Me(p,!1)),_=b.map(function(O,w){var A=s.getTickLineCoord(O),E=A.line,P=A.tick,W=rn(rn(rn(rn({textAnchor:B,verticalAnchor:I},g),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:O,visibleTicksCount:b.length,tickFormatter:d});return R.createElement(De,io({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ta(s.props,O,w)),p&&R.createElement("line",io({},M,E,{className:Re("recharts-cartesian-axis-tick-line",An(p,"className"))})),m&&t.renderTickItem(m,W,"".concat(ke(d)?d(O.value,w):O.value).concat(v||"")))});return R.createElement("g",{className:"recharts-cartesian-axis-ticks"},_)}},{key:"render",value:function(){var r=this,a=this.props,o=a.axisLine,s=a.width,l=a.height,p=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,b=bv(d,UG),B=v;return ke(p)&&(B=v&&v.length>0?p(this.props):p(b)),s<=0||l<=0||!B||!B.length?null:R.createElement(De,{className:Re("recharts-cartesian-axis",f),ref:function(g){r.layerReference=g}},o&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),Ft.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,o){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(vi,io({},a,{className:"recharts-cartesian-axis-tick-value"}),o),s}}])})(Q.Component);yb(Jo,"displayName","CartesianAxis");yb(Jo,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var eK=["x1","y1","x2","y2","key"],tK=["offset"];function bi(e){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bi(e)}function sM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sM(Object(n),!0).forEach(function(r){nK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nK(e,t,n){return t=rK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rK(e){var t=aK(e,"string");return bi(t)=="symbol"?t:t+""}function aK(e,t){if(bi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(this,arguments)}function lM(e,t){if(e==null)return{};var n=iK(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function iK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var oK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,o=t.y,s=t.width,l=t.height,p=t.ry;return R.createElement("rect",{x:a,y:o,ry:p,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function MW(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,o=t.x2,s=t.y2,l=t.key,p=lM(t,eK),f=Me(p,!1);f.offset;var m=lM(f,tK);n=R.createElement("line",fi({},m,{x1:r,y1:a,x2:o,y2:s,fill:"none",key:l}))}return n}function uK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,o=e.horizontalPoints;if(!a||!o||!o.length)return null;var s=o.map(function(l,p){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(p),index:p});return MW(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function sK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,o=e.verticalPoints;if(!a||!o||!o.length)return null;var s=o.map(function(l,p){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(p),index:p});return MW(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function lK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,o=e.width,s=e.height,l=e.horizontalPoints,p=e.horizontal,f=p===void 0?!0:p;if(!f||!t||!t.length)return null;var m=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,b){return v-b});a!==m[0]&&m.unshift(0);var d=m.map(function(v,b){var B=!m[b+1],I=B?a+s-v:m[b+1]-v;if(I<=0)return null;var g=b%t.length;return R.createElement("rect",{key:"react-".concat(b),y:v,x:r,height:I,width:o,stroke:"none",fill:t[g],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function cK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,o=e.x,s=e.y,l=e.width,p=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+o-o)}).sort(function(v,b){return v-b});o!==m[0]&&m.unshift(0);var d=m.map(function(v,b){var B=!m[b+1],I=B?o+l-v:m[b+1]-v;if(I<=0)return null;var g=b%r.length;return R.createElement("rect",{key:"react-".concat(b),x:v,y:s,width:I,height:p,stroke:"none",fill:r[g],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var pK=function(t,n){var r=t.xAxis,a=t.width,o=t.height,s=t.offset;return AO(vb(en(en(en({},Jo.defaultProps),r),{},{ticks:qr(r,!0),viewBox:{x:0,y:0,width:a,height:o}})),s.left,s.left+s.width,n)},fK=function(t,n){var r=t.yAxis,a=t.width,o=t.height,s=t.offset;return AO(vb(en(en(en({},Jo.defaultProps),r),{},{ticks:qr(r,!0),viewBox:{x:0,y:0,width:a,height:o}})),s.top,s.top+s.height,n)},eo={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Ap(e){var t,n,r,a,o,s,l=fb(),p=db(),f=JV(),m=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:eo.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:eo.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:eo.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:eo.horizontalFill,vertical:(o=e.vertical)!==null&&o!==void 0?o:eo.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:eo.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=m.x,v=m.y,b=m.width,B=m.height,I=m.syncWithTicks,g=m.horizontalValues,S=m.verticalValues,M=QV(),_=XV();if(!le(b)||b<=0||!le(B)||B<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var O=m.verticalCoordinatesGenerator||pK,w=m.horizontalCoordinatesGenerator||fK,A=m.horizontalPoints,E=m.verticalPoints;if((!A||!A.length)&&ke(w)){var P=g&&g.length,W=w({yAxis:_?en(en({},_),{},{ticks:P?g:_.ticks}):void 0,width:l,height:p,offset:f},P?!0:I);ur(Array.isArray(W),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(bi(W),"]")),Array.isArray(W)&&(A=W)}if((!E||!E.length)&&ke(O)){var N=S&&S.length,D=O({xAxis:M?en(en({},M),{},{ticks:N?S:M.ticks}):void 0,width:l,height:p,offset:f},N?!0:I);ur(Array.isArray(D),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(bi(D),"]")),Array.isArray(D)&&(E=D)}return R.createElement("g",{className:"recharts-cartesian-grid"},R.createElement(oK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),R.createElement(uK,fi({},m,{offset:f,horizontalPoints:A,xAxis:M,yAxis:_})),R.createElement(sK,fi({},m,{offset:f,verticalPoints:E,xAxis:M,yAxis:_})),R.createElement(lK,fi({},m,{horizontalPoints:A})),R.createElement(cK,fi({},m,{verticalPoints:E})))}Ap.displayName="CartesianGrid";var dK=["type","layout","connectNulls","ref"],hK=["key"];function Eo(e){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eo(e)}function cM(e,t){if(e==null)return{};var n=mK(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function pM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pM(Object(n),!0).forEach(function(r){ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function to(e){return bK(e)||gK(e)||yK(e)||vK()}function vK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yK(e,t){if(e){if(typeof e=="string")return Uy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uy(e,t)}}function gK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bK(e){if(Array.isArray(e))return Uy(e)}function Uy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function IK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fM(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AW(r.key),r)}}function xK(e,t,n){return t&&fM(e.prototype,t),n&&fM(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BK(e,t,n){return t=Op(t),wK(e,_W()?Reflect.construct(t,n||[],Op(e).constructor):t.apply(e,n))}function wK(e,t){if(t&&(Eo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PK(e)}function PK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_W=function(){return!!e})()}function Op(e){return Op=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Op(e)}function SK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vy(e,t)}function Vy(e,t){return Vy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vy(e,t)}function ir(e,t,n){return t=AW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AW(e){var t=MK(e,"string");return Eo(t)=="symbol"?t:t+""}function MK(e,t){if(Eo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Fr=(function(e){function t(){var n;IK(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=BK(this,t,[].concat(a)),ir(n,"state",{isAnimationFinished:!0,totalLength:0}),ir(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),ir(n,"getStrokeDasharray",function(s,l,p){var f=p.reduce(function(S,M){return S+M});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var m=Math.floor(s/f),d=s%f,v=l-s,b=[],B=0,I=0;B<p.length;I+=p[B],++B)if(I+p[B]>d){b=[].concat(to(p.slice(0,B)),[d-I]);break}var g=b.length%2===0?[0,v]:[v];return[].concat(to(t.repeat(p,m)),to(b),g).map(function(S){return"".concat(S,"px")}).join(", ")}),ir(n,"id",Ha("recharts-line-")),ir(n,"pathRef",function(s){n.mainCurve=s}),ir(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),ir(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return SK(t,e),xK(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.points,l=o.xAxis,p=o.yAxis,f=o.layout,m=o.children,d=sn(m,Zo);if(!d)return null;var v=function(I,g){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,g)}},b={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,b,d.map(function(B){return R.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,o){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,p=l.dot,f=l.points,m=l.dataKey,d=Me(this.props,!1),v=Me(p,!0),b=f.map(function(I,g){var S=wn(wn(wn({key:"dot-".concat(g),r:3},d),v),{},{index:g,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return t.renderDotItem(p,S)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(o,")"):null};return R.createElement(De,is({className:"recharts-line-dots",key:"dots"},B),b)}},{key:"renderCurveStatically",value:function(r,a,o,s){var l=this.props,p=l.type,f=l.layout,m=l.connectNulls;l.ref;var d=cM(l,dK),v=wn(wn(wn({},Me(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(o,")"):null,points:r},s),{},{type:p,layout:f,connectNulls:m});return R.createElement(ka,is({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var o=this,s=this.props,l=s.points,p=s.strokeDasharray,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,b=s.animationId,B=s.animateNewValues,I=s.width,g=s.height,S=this.state,M=S.prevPoints,_=S.totalLength;return R.createElement(Kn,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(M){var A=M.length/l.length,E=l.map(function(T,F){var q=Math.floor(F*A);if(M[q]){var V=M[q],Y=ht(V.x,T.x),G=ht(V.y,T.y);return wn(wn({},T),{},{x:Y(w),y:G(w)})}if(B){var H=ht(I*2,T.x),U=ht(g/2,T.y);return wn(wn({},T),{},{x:H(w),y:U(w)})}return wn(wn({},T),{},{x:T.x,y:T.y})});return o.renderCurveStatically(E,r,a)}var P=ht(0,_),W=P(w),N;if(p){var D="".concat(p).split(/[,\s]+/gim).map(function(T){return parseFloat(T)});N=o.getStrokeDasharray(W,_,D)}else N=o.generateSimpleStrokeDasharray(_,W);return o.renderCurveStatically(l,r,a,{strokeDasharray:N})})}},{key:"renderCurve",value:function(r,a){var o=this.props,s=o.points,l=o.isAnimationActive,p=this.state,f=p.prevPoints,m=p.totalLength;return l&&s&&s.length&&(!f&&m>0||!Na(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,o=a.hide,s=a.dot,l=a.points,p=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,b=a.width,B=a.height,I=a.isAnimationActive,g=a.id;if(o||!l||!l.length)return null;var S=this.state.isAnimationFinished,M=l.length===1,_=Re("recharts-line",p),O=f&&f.allowDataOverflow,w=m&&m.allowDataOverflow,A=O||w,E=Ee(g)?this.id:g,P=(r=Me(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},W=P.r,N=W===void 0?3:W,D=P.strokeWidth,T=D===void 0?2:D,F=C_(s)?s:{},q=F.clipDot,V=q===void 0?!0:q,Y=N*2+T;return R.createElement(De,{className:_},O||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(E)},R.createElement("rect",{x:O?v:v-b/2,y:w?d:d-B/2,width:O?b:b*2,height:w?B:B*2})),!V&&R.createElement("clipPath",{id:"clipPath-dots-".concat(E)},R.createElement("rect",{x:v-Y/2,y:d-Y/2,width:b+Y,height:B+Y}))):null,!M&&this.renderCurve(A,E),this.renderErrorBar(A,E),(M||s)&&this.renderDots(A,V,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var o=r.length%2!==0?[].concat(to(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(to(s),to(o));return s}},{key:"renderDotItem",value:function(r,a){var o;if(R.isValidElement(r))o=R.cloneElement(r,a);else if(ke(r))o=r(a);else{var s=a.key,l=cM(a,hK),p=Re("recharts-line-dot",typeof r!="boolean"?r.className:"");o=R.createElement(Js,is({key:s},l,{className:p}))}return o}}])})(Q.PureComponent);ir(Fr,"displayName","Line");ir(Fr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(Fr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,o=e.yAxisTicks,s=e.dataKey,l=e.bandSize,p=e.displayedData,f=e.offset,m=t.layout,d=p.map(function(v,b){var B=lt(v,s);return m==="horizontal"?{x:xo({axis:n,ticks:a,bandSize:l,entry:v,index:b}),y:Ee(B)?null:r.scale(B),value:B,payload:v}:{x:Ee(B)?null:n.scale(B),y:xo({axis:r,ticks:o,bandSize:l,entry:v,index:b}),value:B,payload:v}});return wn({points:d,layout:m},f)});var _K=["layout","type","stroke","connectNulls","isRange","ref"],AK=["key"],OW;function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},To(e)}function WW(e,t){if(e==null)return{};var n=OK(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function OK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(this,arguments)}function dM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dM(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hM(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kW(r.key),r)}}function CK(e,t,n){return t&&hM(e.prototype,t),n&&hM(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kK(e,t,n){return t=Wp(t),EK(e,CW()?Reflect.construct(t,n||[],Wp(e).constructor):t.apply(e,n))}function EK(e,t){if(t&&(To(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return TK(e)}function TK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CW=function(){return!!e})()}function Wp(e){return Wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wp(e)}function NK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gy(e,t)}function Gy(e,t){return Gy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gy(e,t)}function Ir(e,t,n){return t=kW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kW(e){var t=jK(e,"string");return To(t)=="symbol"?t:t+""}function jK(e,t){if(To(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(To(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Pi=(function(e){function t(){var n;WK(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=kK(this,t,[].concat(a)),Ir(n,"state",{isAnimationFinished:!0}),Ir(n,"id",Ha("recharts-area-")),Ir(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return NK(t,e),CK(t,[{key:"renderDots",value:function(r,a,o){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var p=this.props,f=p.dot,m=p.points,d=p.dataKey,v=Me(this.props,!1),b=Me(f,!0),B=m.map(function(g,S){var M=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),b),{},{index:S,cx:g.x,cy:g.y,dataKey:d,value:g.value,payload:g.payload,points:m});return t.renderDotItem(f,M)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(o,")"):null};return R.createElement(De,di({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,o=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].x,f=s[s.length-1].x,m=r*Math.abs(p-f),d=_a(s.map(function(v){return v.y||0}));return le(o)&&typeof o=="number"?d=Math.max(o,d):o&&Array.isArray(o)&&o.length&&(d=Math.max(_a(o.map(function(v){return v.y||0})),d)),le(d)?R.createElement("rect",{x:p<f?p:p-m,y:0,width:m,height:Math.floor(d+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,o=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].y,f=s[s.length-1].y,m=r*Math.abs(p-f),d=_a(s.map(function(v){return v.x||0}));return le(o)&&typeof o=="number"?d=Math.max(o,d):o&&Array.isArray(o)&&o.length&&(d=Math.max(_a(o.map(function(v){return v.x||0})),d)),le(d)?R.createElement("rect",{x:0,y:p<f?p:p-m,width:d+(l?parseInt("".concat(l),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,o,s){var l=this.props,p=l.layout,f=l.type,m=l.stroke,d=l.connectNulls,v=l.isRange;l.ref;var b=WW(l,_K);return R.createElement(De,{clipPath:o?"url(#clipPath-".concat(s,")"):null},R.createElement(ka,di({},Me(b,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:p,stroke:"none",className:"recharts-area-area"})),m!=="none"&&R.createElement(ka,di({},Me(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&R.createElement(ka,di({},Me(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var o=this,s=this.props,l=s.points,p=s.baseLine,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,b=s.animationId,B=this.state,I=B.prevPoints,g=B.prevBaseLine;return R.createElement(Kn,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var M=S.t;if(I){var _=I.length/l.length,O=l.map(function(P,W){var N=Math.floor(W*_);if(I[N]){var D=I[N],T=ht(D.x,P.x),F=ht(D.y,P.y);return Pa(Pa({},P),{},{x:T(M),y:F(M)})}return P}),w;if(le(p)&&typeof p=="number"){var A=ht(g,p);w=A(M)}else if(Ee(p)||Go(p)){var E=ht(g,0);w=E(M)}else w=p.map(function(P,W){var N=Math.floor(W*_);if(g[N]){var D=g[N],T=ht(D.x,P.x),F=ht(D.y,P.y);return Pa(Pa({},P),{},{x:T(M),y:F(M)})}return P});return o.renderAreaStatically(O,w,r,a)}return R.createElement(De,null,R.createElement("defs",null,R.createElement("clipPath",{id:"animationClipPath-".concat(a)},o.renderClipRect(M))),R.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},o.renderAreaStatically(l,p,r,a)))})}},{key:"renderArea",value:function(r,a){var o=this.props,s=o.points,l=o.baseLine,p=o.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return p&&s&&s.length&&(!m&&v>0||!Na(m,s)||!Na(d,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,o=a.hide,s=a.dot,l=a.points,p=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,b=a.width,B=a.height,I=a.isAnimationActive,g=a.id;if(o||!l||!l.length)return null;var S=this.state.isAnimationFinished,M=l.length===1,_=Re("recharts-area",p),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,A=O||w,E=Ee(g)?this.id:g,P=(r=Me(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},W=P.r,N=W===void 0?3:W,D=P.strokeWidth,T=D===void 0?2:D,F=C_(s)?s:{},q=F.clipDot,V=q===void 0?!0:q,Y=N*2+T;return R.createElement(De,{className:_},O||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(E)},R.createElement("rect",{x:O?m:m-b/2,y:w?f:f-B/2,width:O?b:b*2,height:w?B:B*2})),!V&&R.createElement("clipPath",{id:"clipPath-dots-".concat(E)},R.createElement("rect",{x:m-Y/2,y:f-Y/2,width:b+Y,height:B+Y}))):null,M?null:this.renderArea(A,E),(s||M)&&this.renderDots(A,V,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(Q.PureComponent);OW=Pi;Ir(Pi,"displayName","Area");Ir(Pi,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(Pi,"getBaseValue",function(e,t,n,r){var a=e.layout,o=e.baseValue,s=t.props.baseValue,l=s??o;if(le(l)&&typeof l=="number")return l;var p=a==="horizontal"?r:n,f=p.scale.domain();if(p.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return l==="dataMin"?d:l==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});Ir(Pi,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,o=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,p=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,b=t.layout,B=f&&f.length,I=OW.getBaseValue(t,n,r,a),g=b==="horizontal",S=!1,M=d.map(function(O,w){var A;B?A=f[m+w]:(A=lt(O,p),Array.isArray(A)?S=!0:A=[I,A]);var E=A[1]==null||B&&lt(O,p)==null;return g?{x:xo({axis:r,ticks:o,bandSize:l,entry:O,index:w}),y:E?null:a.scale(A[1]),value:A,payload:O}:{x:E?null:r.scale(A[1]),y:xo({axis:a,ticks:s,bandSize:l,entry:O,index:w}),value:A,payload:O}}),_;return B||S?_=M.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return g?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):_=g?a.scale(I):r.scale(I),Pa({points:M,baseLine:_,layout:b,isRange:S},v)});Ir(Pi,"renderDotItem",function(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=Re("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,o=WW(t,AK);n=R.createElement(Js,di({},o,{key:a,className:r}))}return n});function No(e){"@babel/helpers - typeof";return No=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},No(e)}function RK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function HK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NW(r.key),r)}}function DK(e,t,n){return t&&HK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $K(e,t,n){return t=Cp(t),LK(e,EW()?Reflect.construct(t,n||[],Cp(e).constructor):t.apply(e,n))}function LK(e,t){if(t&&(No(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qK(e)}function qK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EW=function(){return!!e})()}function Cp(e){return Cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cp(e)}function FK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ky(e,t)}function Ky(e,t){return Ky=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ky(e,t)}function TW(e,t,n){return t=NW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NW(e){var t=zK(e,"string");return No(t)=="symbol"?t:t+""}function zK(e,t){if(No(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(No(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var b0=(function(e){function t(){return RK(this,t),$K(this,t,arguments)}return FK(t,e),DK(t,[{key:"render",value:function(){return null}}])})(R.Component);TW(b0,"displayName","ZAxis");TW(b0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var UK=["option","isActive"];function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function VK(e,t){if(e==null)return{};var n=GK(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function GK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function KK(e){var t=e.option,n=e.isActive,r=VK(e,UK);return typeof t=="string"?R.createElement(vp,os({option:R.createElement(Kp,os({type:t},r)),isActive:n,shapeType:"symbols"},r)):R.createElement(vp,os({option:t,isActive:n,shapeType:"symbols"},r))}function jo(e){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jo(e)}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function mM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mM(Object(n),!0).forEach(function(r){Oa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vM(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,RW(r.key),r)}}function QK(e,t,n){return t&&vM(e.prototype,t),n&&vM(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function XK(e,t,n){return t=kp(t),ZK(e,jW()?Reflect.construct(t,n||[],kp(e).constructor):t.apply(e,n))}function ZK(e,t){if(t&&(jo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JK(e)}function JK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jW=function(){return!!e})()}function kp(e){return kp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kp(e)}function eY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yy(e,t)}function Yy(e,t){return Yy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yy(e,t)}function Oa(e,t,n){return t=RW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RW(e){var t=tY(e,"string");return jo(t)=="symbol"?t:t+""}function tY(e,t){if(jo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(jo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I0=(function(e){function t(){var n;YK(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=XK(this,t,[].concat(a)),Oa(n,"state",{isAnimationFinished:!1}),Oa(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),Oa(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),Oa(n,"id",Ha("recharts-scatter-")),n}return eY(t,e),QK(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,o=this.props,s=o.shape,l=o.activeShape,p=o.activeIndex,f=Me(this.props,!1);return r.map(function(m,d){var v=p===d,b=v?l:s,B=Ln(Ln({},f),m);return R.createElement(De,us({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ta(a.props,m,d),{role:"img"}),R.createElement(KK,us({option:b,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,o=a.points,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return R.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var b=v.t,B=o.map(function(I,g){var S=d&&d[g];if(S){var M=ht(S.cx,I.cx),_=ht(S.cy,I.cy),O=ht(S.size,I.size);return Ln(Ln({},I),{},{cx:M(b),cy:_(b),size:O(b)})}var w=ht(0,I.size);return Ln(Ln({},I),{},{size:w(b)})});return R.createElement(De,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,o=r.isAnimationActive,s=this.state.prevPoints;return o&&a&&a.length&&(!s||!Na(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,s=a.xAxis,l=a.yAxis,p=a.children,f=sn(p,Zo);return f?f.map(function(m,d){var v=m.props,b=v.direction,B=v.dataKey;return R.cloneElement(m,{key:"".concat(b,"-").concat(B,"-").concat(o[d]),data:o,xAxis:s,yAxis:l,layout:b==="x"?"vertical":"horizontal",dataPointFormatter:function(g,S){return{x:g.cx,y:g.cy,value:b==="x"?+g.node.x:+g.node.y,errorVal:lt(g,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,o=r.line,s=r.lineType,l=r.lineJointType,p=Me(this.props,!1),f=Me(o,!1),m,d;if(s==="joint")m=a.map(function(_){return{x:_.cx,y:_.cy}});else if(s==="fitting"){var v=Gj(a),b=v.xmin,B=v.xmax,I=v.a,g=v.b,S=function(O){return I*O+g};m=[{x:b,y:S(b)},{x:B,y:S(B)}]}var M=Ln(Ln(Ln({},p),{},{fill:"none",stroke:p&&p.fill},f),{},{points:m});return R.isValidElement(o)?d=R.cloneElement(o,M):ke(o)?d=o(M):d=R.createElement(ka,us({},M,{type:l})),R.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,o=r.points,s=r.line,l=r.className,p=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,b=r.height,B=r.id,I=r.isAnimationActive;if(a||!o||!o.length)return null;var g=this.state.isAnimationFinished,S=Re("recharts-scatter",l),M=p&&p.allowDataOverflow,_=f&&f.allowDataOverflow,O=M||_,w=Ee(B)?this.id:B;return R.createElement(De,{className:S,clipPath:O?"url(#clipPath-".concat(w,")"):null},M||_?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:M?m:m-v/2,y:_?d:d-b/2,width:M?v:v*2,height:_?b:b*2}))):null,s&&this.renderLine(),this.renderErrorBar(),R.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||g)&&sr.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(Q.PureComponent);Oa(I0,"displayName","Scatter");Oa(I0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});Oa(I0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,o=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,p=e.offset,f=a.props.tooltipType,m=sn(a.props.children,Ks),d=Ee(t.dataKey)?a.props.dataKey:t.dataKey,v=Ee(n.dataKey)?a.props.dataKey:n.dataKey,b=r&&r.dataKey,B=r?r.range:b0.defaultProps.range,I=B&&B[0],g=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,M=o.map(function(_,O){var w=lt(_,d),A=lt(_,v),E=!Ee(b)&&lt(_,b)||"-",P=[{name:Ee(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:_,dataKey:d,type:f},{name:Ee(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:A,payload:_,dataKey:v,type:f}];E!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:E,payload:_,dataKey:b,type:f});var W=xo({axis:t,ticks:s,bandSize:g,entry:_,index:O,dataKey:d}),N=xo({axis:n,ticks:l,bandSize:S,entry:_,index:O,dataKey:v}),D=E!=="-"?r.scale(E):I,T=Math.sqrt(Math.max(D,0)/Math.PI);return Ln(Ln({},_),{},{cx:W,cy:N,x:W-T,y:N-T,xAxis:t,yAxis:n,zAxis:r,width:2*T,height:2*T,size:D,node:{x:w,y:A,z:E},tooltipPayload:P,tooltipPosition:{x:W,y:N},payload:_},m&&m[O]&&m[O].props)});return Ln({points:M},p)});function Ro(e){"@babel/helpers - typeof";return Ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ro(e)}function nY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$W(r.key),r)}}function aY(e,t,n){return t&&rY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function iY(e,t,n){return t=Ep(t),oY(e,HW()?Reflect.construct(t,n||[],Ep(e).constructor):t.apply(e,n))}function oY(e,t){if(t&&(Ro(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uY(e)}function uY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(HW=function(){return!!e})()}function Ep(e){return Ep=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ep(e)}function sY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qy(e,t)}function Qy(e,t){return Qy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qy(e,t)}function DW(e,t,n){return t=$W(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $W(e){var t=lY(e,"string");return Ro(t)=="symbol"?t:t+""}function lY(e,t){if(Ro(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ro(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Xy(){return Xy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xy.apply(this,arguments)}function cY(e){var t=e.xAxisId,n=fb(),r=db(),a=mW(t);return a==null?null:R.createElement(Jo,Xy({},a,{className:Re("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return qr(s,!0)}}))}var ja=(function(e){function t(){return nY(this,t),iY(this,t,arguments)}return sY(t,e),aY(t,[{key:"render",value:function(){return R.createElement(cY,this.props)}}])})(R.Component);DW(ja,"displayName","XAxis");DW(ja,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Ho(e){"@babel/helpers - typeof";return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ho(e)}function pY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,FW(r.key),r)}}function dY(e,t,n){return t&&fY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function hY(e,t,n){return t=Tp(t),mY(e,LW()?Reflect.construct(t,n||[],Tp(e).constructor):t.apply(e,n))}function mY(e,t){if(t&&(Ho(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vY(e)}function vY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LW=function(){return!!e})()}function Tp(e){return Tp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tp(e)}function yY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zy(e,t)}function Zy(e,t){return Zy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zy(e,t)}function qW(e,t,n){return t=FW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FW(e){var t=gY(e,"string");return Ho(t)=="symbol"?t:t+""}function gY(e,t){if(Ho(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ho(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Jy(){return Jy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jy.apply(this,arguments)}var bY=function(t){var n=t.yAxisId,r=fb(),a=db(),o=vW(n);return o==null?null:R.createElement(Jo,Jy({},o,{className:Re("recharts-".concat(o.axisType," ").concat(o.axisType),o.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return qr(l,!0)}}))},xr=(function(e){function t(){return pY(this,t),hY(this,t,arguments)}return yY(t,e),dY(t,[{key:"render",value:function(){return R.createElement(bY,this.props)}}])})(R.Component);qW(xr,"displayName","YAxis");qW(xr,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function yM(e){return wY(e)||BY(e)||xY(e)||IY()}function IY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xY(e,t){if(e){if(typeof e=="string")return eg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eg(e,t)}}function BY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wY(e){if(Array.isArray(e))return eg(e)}function eg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var tg=function(t,n,r,a,o){var s=sn(t,mb),l=sn(t,v0),p=[].concat(yM(s),yM(l)),f=sn(t,g0),m="".concat(a,"Id"),d=a[0],v=n;if(p.length&&(v=p.reduce(function(I,g){if(g.props[m]===r&&wr(g.props,"extendDomain")&&le(g.props[d])){var S=g.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var b="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,g){if(g.props[m]===r&&wr(g.props,"extendDomain")&&le(g.props[b])&&le(g.props[B])){var S=g.props[b],M=g.props[B];return[Math.min(I[0],S,M),Math.max(I[1],S,M)]}return I},v)}return o&&o.length&&(v=o.reduce(function(I,g){return le(g)?[Math.min(I[0],g),Math.max(I[1],g)]:I},v)),v},Iv={exports:{}},gM;function PY(){return gM||(gM=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(p,f,m){this.fn=p,this.context=f,this.once=m||!1}function o(p,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var b=new a(m,d||p,v),B=n?n+f:f;return p._events[B]?p._events[B].fn?p._events[B]=[p._events[B],b]:p._events[B].push(b):(p._events[B]=b,p._eventsCount++),p}function s(p,f){--p._eventsCount===0?p._events=new r:delete p._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)t.call(m,d)&&f.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},l.prototype.listeners=function(f){var m=n?n+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,b=d.length,B=new Array(b);v<b;v++)B[v]=d[v].fn;return B},l.prototype.listenerCount=function(f){var m=n?n+f:f,d=this._events[m];return d?d.fn?1:d.length:0},l.prototype.emit=function(f,m,d,v,b,B){var I=n?n+f:f;if(!this._events[I])return!1;var g=this._events[I],S=arguments.length,M,_;if(g.fn){switch(g.once&&this.removeListener(f,g.fn,void 0,!0),S){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,m),!0;case 3:return g.fn.call(g.context,m,d),!0;case 4:return g.fn.call(g.context,m,d,v),!0;case 5:return g.fn.call(g.context,m,d,v,b),!0;case 6:return g.fn.call(g.context,m,d,v,b,B),!0}for(_=1,M=new Array(S-1);_<S;_++)M[_-1]=arguments[_];g.fn.apply(g.context,M)}else{var O=g.length,w;for(_=0;_<O;_++)switch(g[_].once&&this.removeListener(f,g[_].fn,void 0,!0),S){case 1:g[_].fn.call(g[_].context);break;case 2:g[_].fn.call(g[_].context,m);break;case 3:g[_].fn.call(g[_].context,m,d);break;case 4:g[_].fn.call(g[_].context,m,d,v);break;default:if(!M)for(w=1,M=new Array(S-1);w<S;w++)M[w-1]=arguments[w];g[_].fn.apply(g[_].context,M)}}return!0},l.prototype.on=function(f,m,d){return o(this,f,m,d,!1)},l.prototype.once=function(f,m,d){return o(this,f,m,d,!0)},l.prototype.removeListener=function(f,m,d,v){var b=n?n+f:f;if(!this._events[b])return this;if(!m)return s(this,b),this;var B=this._events[b];if(B.fn)B.fn===m&&(!v||B.once)&&(!d||B.context===d)&&s(this,b);else{for(var I=0,g=[],S=B.length;I<S;I++)(B[I].fn!==m||v&&!B[I].once||d&&B[I].context!==d)&&g.push(B[I]);g.length?this._events[b]=g.length===1?g[0]:g:s(this,b)}return this},l.prototype.removeAllListeners=function(f){var m;return f?(m=n?n+f:f,this._events[m]&&s(this,m)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(Iv)),Iv.exports}var SY=PY();const MY=Xe(SY);var xv=new MY,Bv="recharts.syncMouseEvents";function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function _Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,zW(r.key),r)}}function OY(e,t,n){return t&&AY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wv(e,t,n){return t=zW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zW(e){var t=WY(e,"string");return Fs(t)=="symbol"?t:t+""}function WY(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var CY=(function(){function e(){_Y(this,e),wv(this,"activeIndex",0),wv(this,"coordinateList",[]),wv(this,"layout","horizontal")}return OY(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,o=a===void 0?null:a,s=n.container,l=s===void 0?null:s,p=n.layout,f=p===void 0?null:p,m=n.offset,d=m===void 0?null:m,v=n.mouseHandlerCallback,b=v===void 0?null:v;this.coordinateList=(r=o??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=b??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),o=a.x,s=a.y,l=a.height,p=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=o+p+f,v=s+this.offset.top+l/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function kY(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function EY(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function UW(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,o=e.endAngle,s=it(t,n,r,a),l=it(t,n,r,o);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:o}}function TY(e,t,n){var r,a,o,s;if(e==="horizontal")r=t.x,o=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,o=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,p=t.cy,f=t.innerRadius,m=t.outerRadius,d=t.angle,v=it(l,p,f,d),b=it(l,p,m,d);r=v.x,a=v.y,o=b.x,s=b.y}else return UW(t);return[{x:r,y:a},{x:o,y:s}]}function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function bM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bM(Object(n),!0).forEach(function(r){NY(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NY(e,t,n){return t=jY(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jY(e){var t=RY(e,"string");return zs(t)=="symbol"?t:t+""}function RY(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function HY(e){var t,n,r=e.element,a=e.tooltipEventType,o=e.isActive,s=e.activeCoordinate,l=e.activePayload,p=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,b=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!b||!o||!s||v!=="ScatterChart"&&a!=="axis")return null;var B,I=ka;if(v==="ScatterChart")B=s,I=Cz;else if(v==="BarChart")B=EY(d,s,p,m),I=ub;else if(d==="radial"){var g=UW(s),S=g.cx,M=g.cy,_=g.radius,O=g.startAngle,w=g.endAngle;B={cx:S,cy:M,startAngle:O,endAngle:w,innerRadius:_,outerRadius:_},I=DO}else B={points:TY(d,s,p)},I=ka;var A=wc(wc(wc(wc({stroke:"#ccc",pointerEvents:"none"},p),B),Me(b,!1)),{},{payload:l,payloadIndex:f,className:Re("recharts-tooltip-cursor",b.className)});return Q.isValidElement(b)?Q.cloneElement(b,A):Q.createElement(I,A)}var DY=["item"],$Y=["children","className","width","height","style","compact","title","desc"];function Do(e){"@babel/helpers - typeof";return Do=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Do(e)}function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}function IM(e,t){return FY(e)||qY(e,t)||GW(e,t)||LY()}function LY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qY(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,s,l=[],p=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(p=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function FY(e){if(Array.isArray(e))return e}function xM(e,t){if(e==null)return{};var n=zY(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zY(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function UY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function VY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KW(r.key),r)}}function GY(e,t,n){return t&&VY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function KY(e,t,n){return t=Np(t),YY(e,VW()?Reflect.construct(t,n||[],Np(e).constructor):t.apply(e,n))}function YY(e,t){if(t&&(Do(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QY(e)}function QY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VW=function(){return!!e})()}function Np(e){return Np=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Np(e)}function XY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ng(e,t)}function ng(e,t){return ng=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ng(e,t)}function $o(e){return eQ(e)||JY(e)||GW(e)||ZY()}function ZY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GW(e,t){if(e){if(typeof e=="string")return rg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rg(e,t)}}function JY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eQ(e){if(Array.isArray(e))return rg(e)}function rg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function BM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?BM(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):BM(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Te(e,t,n){return t=KW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KW(e){var t=tQ(e,"string");return Do(t)=="symbol"?t:t+""}function tQ(e,t){if(Do(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Do(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nQ={xAxis:["bottom","top"],yAxis:["left","right"]},rQ={width:"100%",height:"100%"},YW={x:0,y:0};function Pc(e){return e}var aQ=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},iQ=function(t,n,r,a){var o=n.find(function(m){return m&&m.index===r});if(o){if(t==="horizontal")return{x:o.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:o.coordinate};if(t==="centric"){var s=o.coordinate,l=a.radius;return ae(ae(ae({},a),it(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var p=o.coordinate,f=a.angle;return ae(ae(ae({},a),it(a.cx,a.cy,p,f)),{},{angle:f,radius:p})}return YW},x0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,o=n.dataEndIndex,s=(r??[]).reduce(function(l,p){var f=p.props.data;return f&&f.length?[].concat($o(l),$o(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(o)?t.slice(a,o+1):[]};function QW(e){return e==="number"?[0,"auto"]:void 0}var ag=function(t,n,r,a){var o=t.graphicalItems,s=t.tooltipAxis,l=x0(n,t);return r<0||!o||!o.length||r>=l.length?null:o.reduce(function(p,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var b=d===void 0?l:d;v=kc(b,s.dataKey,a)}else v=d&&d[r]||l[r];return v?[].concat($o(p),[EO(f,v)]):p},[])},wM=function(t,n,r,a){var o=a||{x:t.chartX,y:t.chartY},s=aQ(o,r),l=t.orderedTooltipTicks,p=t.tooltipAxis,f=t.tooltipTicks,m=Zq(s,l,f,p);if(m>=0&&f){var d=f[m]&&f[m].value,v=ag(t,n,m,d),b=iQ(r,l,m,o);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:b}}return null},oQ=function(t,n){var r=n.axes,a=n.graphicalItems,o=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.layout,d=t.children,v=t.stackOffset,b=_O(m,o);return r.reduce(function(B,I){var g,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,M=S.type,_=S.dataKey,O=S.allowDataOverflow,w=S.allowDuplicatedCategory,A=S.scale,E=S.ticks,P=S.includeHidden,W=S[s];if(B[W])return B;var N=x0(t.data,{graphicalItems:a.filter(function($){var Z,ue=s in $.props?$.props[s]:(Z=$.type.defaultProps)===null||Z===void 0?void 0:Z[s];return ue===W}),dataStartIndex:p,dataEndIndex:f}),D=N.length,T,F,q;kY(S.domain,O,M)&&(T=my(S.domain,null,O),b&&(M==="number"||A!=="auto")&&(q=ts(N,_,"category")));var V=QW(M);if(!T||T.length===0){var Y,G=(Y=S.domain)!==null&&Y!==void 0?Y:V;if(_){if(T=ts(N,_,M),M==="category"&&b){var H=Vj(T);w&&H?(F=T,T=gp(0,D)):w||(T=xS(G,T,I).reduce(function($,Z){return $.indexOf(Z)>=0?$:[].concat($o($),[Z])},[]))}else if(M==="category")w?T=T.filter(function($){return $!==""&&!Ee($)}):T=xS(G,T,I).reduce(function($,Z){return $.indexOf(Z)>=0||Z===""||Ee(Z)?$:[].concat($o($),[Z])},[]);else if(M==="number"){var U=rF(N,a.filter(function($){var Z,ue,he=s in $.props?$.props[s]:(Z=$.type.defaultProps)===null||Z===void 0?void 0:Z[s],ye="hide"in $.props?$.props.hide:(ue=$.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===W&&(P||!ye)}),_,o,m);U&&(T=U)}b&&(M==="number"||A!=="auto")&&(q=ts(N,_,"category"))}else b?T=gp(0,D):l&&l[W]&&l[W].hasStack&&M==="number"?T=v==="expand"?[0,1]:kO(l[W].stackGroups,p,f):T=MO(N,a.filter(function($){var Z=s in $.props?$.props[s]:$.type.defaultProps[s],ue="hide"in $.props?$.props.hide:$.type.defaultProps.hide;return Z===W&&(P||!ue)}),M,m,!0);if(M==="number")T=tg(d,T,W,o,E),G&&(T=my(G,T,O));else if(M==="category"&&G){var X=G,j=T.every(function($){return X.indexOf($)>=0});j&&(T=X)}}return ae(ae({},B),{},Te({},W,ae(ae({},S),{},{axisType:o,domain:T,categoricalDomain:q,duplicateDomain:F,originalDomain:(g=S.domain)!==null&&g!==void 0?g:V,isCategorical:b,layout:m})))},{})},uQ=function(t,n){var r=n.graphicalItems,a=n.Axis,o=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.layout,d=t.children,v=x0(t.data,{graphicalItems:r,dataStartIndex:p,dataEndIndex:f}),b=v.length,B=_O(m,o),I=-1;return r.reduce(function(g,S){var M=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,_=M[s],O=QW("number");if(!g[_]){I++;var w;return B?w=gp(0,b):l&&l[_]&&l[_].hasStack?(w=kO(l[_].stackGroups,p,f),w=tg(d,w,_,o)):(w=my(O,MO(v,r.filter(function(A){var E,P,W=s in A.props?A.props[s]:(E=A.type.defaultProps)===null||E===void 0?void 0:E[s],N="hide"in A.props?A.props.hide:(P=A.type.defaultProps)===null||P===void 0?void 0:P.hide;return W===_&&!N}),"number",m),a.defaultProps.allowDataOverflow),w=tg(d,w,_,o)),ae(ae({},g),{},Te({},_,ae(ae({axisType:o},a.defaultProps),{},{hide:!0,orientation:An(nQ,"".concat(o,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:B,layout:m})))}return g},{})},sQ=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,o=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.children,d="".concat(a,"Id"),v=sn(m,o),b={};return v&&v.length?b=oQ(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:p,dataEndIndex:f}):s&&s.length&&(b=uQ(t,{Axis:o,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:p,dataEndIndex:f})),b},lQ=function(t){var n=Ma(t),r=qr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Eg(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:ap(n,r)}},PM=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,_o),o=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(o=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:o,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},cQ=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},SM=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},pQ=function(t,n){var r=t.props,a=t.graphicalItems,o=t.xAxisMap,s=o===void 0?{}:o,l=t.yAxisMap,p=l===void 0?{}:l,f=r.width,m=r.height,d=r.children,v=r.margin||{},b=Sn(d,_o),B=Sn(d,Wa),I=Object.keys(p).reduce(function(w,A){var E=p[A],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,w[P]+E.width)):w},{left:v.left||0,right:v.right||0}),g=Object.keys(s).reduce(function(w,A){var E=s[A],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,An(w,"".concat(P))+E.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},g),I),M=S.bottom;b&&(S.bottom+=b.props.height||_o.defaultProps.height),B&&n&&(S=tF(S,a,r,n));var _=f-S.left-S.right,O=m-S.top-S.bottom;return ae(ae({brushBottom:M},S),{},{width:Math.max(_,0),height:Math.max(O,0)})},fQ=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},B0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,o=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,p=t.axisComponents,f=t.legendContent,m=t.formatAxisMap,d=t.defaultProps,v=function(S,M){var _=M.graphicalItems,O=M.stackGroups,w=M.offset,A=M.updateId,E=M.dataStartIndex,P=M.dataEndIndex,W=S.barSize,N=S.layout,D=S.barGap,T=S.barCategoryGap,F=S.maxBarSize,q=SM(N),V=q.numericAxisName,Y=q.cateAxisName,G=cQ(_),H=[];return _.forEach(function(U,X){var j=x0(S.data,{graphicalItems:[U],dataStartIndex:E,dataEndIndex:P}),$=U.type.defaultProps!==void 0?ae(ae({},U.type.defaultProps),U.props):U.props,Z=$.dataKey,ue=$.maxBarSize,he=$["".concat(V,"Id")],ye=$["".concat(Y,"Id")],ge={},fe=p.reduce(function(xt,vt){var On=M["".concat(vt.axisType,"Map")],yt=$["".concat(vt.axisType,"Id")];On&&On[yt]||vt.axisType==="zAxis"||gi();var Kt=On[yt];return ae(ae({},xt),{},Te(Te({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),qr(Kt)))},ge),ne=fe[Y],de=fe["".concat(Y,"Ticks")],pe=O&&O[he]&&O[he].hasStack&&fF(U,O[he].stackGroups),re=Ur(U.type).indexOf("Bar")>=0,je=ap(ne,de),Pe=[],Ce=G&&Jq({barSize:W,stackGroups:O,totalSize:fQ(fe,Y)});if(re){var _e,qe,He=Ee(ue)?F:ue,Fe=(_e=(qe=ap(ne,de,!0))!==null&&qe!==void 0?qe:He)!==null&&_e!==void 0?_e:0;Pe=eF({barGap:D,barCategoryGap:T,bandSize:Fe!==je?Fe:je,sizeList:Ce[ye],maxBarSize:He}),Fe!==je&&(Pe=Pe.map(function(xt){return ae(ae({},xt),{},{position:ae(ae({},xt.position),{},{offset:xt.position.offset-Fe/2})})}))}var Ke=U&&U.type&&U.type.getComposedData;Ke&&H.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:j,props:S,dataKey:Z,item:U,bandSize:je,barPosition:Pe,offset:w,stackedData:pe,layout:N,dataStartIndex:E,dataEndIndex:P}))),{},Te(Te(Te({key:U.key||"item-".concat(X)},V,fe[V]),Y,fe[Y]),"animationId",A)),childIndex:aR(U,S.children),item:U})}),H},b=function(S,M){var _=S.props,O=S.dataStartIndex,w=S.dataEndIndex,A=S.updateId;if(!jx({props:_}))return null;var E=_.children,P=_.layout,W=_.stackOffset,N=_.data,D=_.reverseStackOrder,T=SM(P),F=T.numericAxisName,q=T.cateAxisName,V=sn(E,r),Y=cF(N,V,"".concat(F,"Id"),"".concat(q,"Id"),W,D),G=p.reduce(function($,Z){var ue="".concat(Z.axisType,"Map");return ae(ae({},$),{},Te({},ue,sQ(_,ae(ae({},Z),{},{graphicalItems:V,stackGroups:Z.axisType===F&&Y,dataStartIndex:O,dataEndIndex:w}))))},{}),H=pQ(ae(ae({},G),{},{props:_,graphicalItems:V}),M==null?void 0:M.legendBBox);Object.keys(G).forEach(function($){G[$]=m(_,G[$],H,$.replace("Map",""),n)});var U=G["".concat(q,"Map")],X=lQ(U),j=v(_,ae(ae({},G),{},{dataStartIndex:O,dataEndIndex:w,updateId:A,graphicalItems:V,stackGroups:Y,offset:H}));return ae(ae({formattedGraphicalItems:j,graphicalItems:V,offset:H,stackGroups:Y},X),G)},B=(function(g){function S(M){var _,O,w;return UY(this,S),w=KY(this,S,[M]),Te(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Te(w,"accessibilityManager",new CY),Te(w,"handleLegendBBoxUpdate",function(A){if(A){var E=w.state,P=E.dataStartIndex,W=E.dataEndIndex,N=E.updateId;w.setState(ae({legendBBox:A},b({props:w.props,dataStartIndex:P,dataEndIndex:W,updateId:N},ae(ae({},w.state),{},{legendBBox:A}))))}}),Te(w,"handleReceiveSyncEvent",function(A,E,P){if(w.props.syncId===A){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(E)}}),Te(w,"handleBrushChange",function(A){var E=A.startIndex,P=A.endIndex;if(E!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var W=w.state.updateId;w.setState(function(){return ae({dataStartIndex:E,dataEndIndex:P},b({props:w.props,dataStartIndex:E,dataEndIndex:P,updateId:W},w.state))}),w.triggerSyncEvent({dataStartIndex:E,dataEndIndex:P})}}),Te(w,"handleMouseEnter",function(A){var E=w.getMouseInfo(A);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var W=w.props.onMouseEnter;ke(W)&&W(P,A)}}),Te(w,"triggeredAfterMouseMove",function(A){var E=w.getMouseInfo(A),P=E?ae(ae({},E),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var W=w.props.onMouseMove;ke(W)&&W(P,A)}),Te(w,"handleItemMouseEnter",function(A){w.setState(function(){return{isTooltipActive:!0,activeItem:A,activePayload:A.tooltipPayload,activeCoordinate:A.tooltipPosition||{x:A.cx,y:A.cy}}})}),Te(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Te(w,"handleMouseMove",function(A){A.persist(),w.throttleTriggeredAfterMouseMove(A)}),Te(w,"handleMouseLeave",function(A){w.throttleTriggeredAfterMouseMove.cancel();var E={isTooltipActive:!1};w.setState(E),w.triggerSyncEvent(E);var P=w.props.onMouseLeave;ke(P)&&P(E,A)}),Te(w,"handleOuterEvent",function(A){var E=rR(A),P=An(w.props,"".concat(E));if(E&&ke(P)){var W,N;/.*touch.*/i.test(E)?N=w.getMouseInfo(A.changedTouches[0]):N=w.getMouseInfo(A),P((W=N)!==null&&W!==void 0?W:{},A)}}),Te(w,"handleClick",function(A){var E=w.getMouseInfo(A);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var W=w.props.onClick;ke(W)&&W(P,A)}}),Te(w,"handleMouseDown",function(A){var E=w.props.onMouseDown;if(ke(E)){var P=w.getMouseInfo(A);E(P,A)}}),Te(w,"handleMouseUp",function(A){var E=w.props.onMouseUp;if(ke(E)){var P=w.getMouseInfo(A);E(P,A)}}),Te(w,"handleTouchMove",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(A.changedTouches[0])}),Te(w,"handleTouchStart",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.handleMouseDown(A.changedTouches[0])}),Te(w,"handleTouchEnd",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.handleMouseUp(A.changedTouches[0])}),Te(w,"handleDoubleClick",function(A){var E=w.props.onDoubleClick;if(ke(E)){var P=w.getMouseInfo(A);E(P,A)}}),Te(w,"handleContextMenu",function(A){var E=w.props.onContextMenu;if(ke(E)){var P=w.getMouseInfo(A);E(P,A)}}),Te(w,"triggerSyncEvent",function(A){w.props.syncId!==void 0&&xv.emit(Bv,w.props.syncId,A,w.eventEmitterSymbol)}),Te(w,"applySyncEvent",function(A){var E=w.props,P=E.layout,W=E.syncMethod,N=w.state.updateId,D=A.dataStartIndex,T=A.dataEndIndex;if(A.dataStartIndex!==void 0||A.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:D,dataEndIndex:T},b({props:w.props,dataStartIndex:D,dataEndIndex:T,updateId:N},w.state)));else if(A.activeTooltipIndex!==void 0){var F=A.chartX,q=A.chartY,V=A.activeTooltipIndex,Y=w.state,G=Y.offset,H=Y.tooltipTicks;if(!G)return;if(typeof W=="function")V=W(H,A);else if(W==="value"){V=-1;for(var U=0;U<H.length;U++)if(H[U].value===A.activeLabel){V=U;break}}var X=ae(ae({},G),{},{x:G.left,y:G.top}),j=Math.min(F,X.x+X.width),$=Math.min(q,X.y+X.height),Z=H[V]&&H[V].value,ue=ag(w.state,w.props.data,V),he=H[V]?{x:P==="horizontal"?H[V].coordinate:j,y:P==="horizontal"?$:H[V].coordinate}:YW;w.setState(ae(ae({},A),{},{activeLabel:Z,activeCoordinate:he,activePayload:ue,activeTooltipIndex:V}))}else w.setState(A)}),Te(w,"renderCursor",function(A){var E,P=w.state,W=P.isTooltipActive,N=P.activeCoordinate,D=P.activePayload,T=P.offset,F=P.activeTooltipIndex,q=P.tooltipAxisBandSize,V=w.getTooltipEventType(),Y=(E=A.props.active)!==null&&E!==void 0?E:W,G=w.props.layout,H=A.key||"_recharts-cursor";return R.createElement(HY,{key:H,activeCoordinate:N,activePayload:D,activeTooltipIndex:F,chartName:n,element:A,isActive:Y,layout:G,offset:T,tooltipAxisBandSize:q,tooltipEventType:V})}),Te(w,"renderPolarAxis",function(A,E,P){var W=An(A,"type.axisType"),N=An(w.state,"".concat(W,"Map")),D=A.type.defaultProps,T=D!==void 0?ae(ae({},D),A.props):A.props,F=N&&N[T["".concat(W,"Id")]];return Q.cloneElement(A,ae(ae({},F),{},{className:Re(W,F.className),key:A.key||"".concat(E,"-").concat(P),ticks:qr(F,!0)}))}),Te(w,"renderPolarGrid",function(A){var E=A.props,P=E.radialLines,W=E.polarAngles,N=E.polarRadius,D=w.state,T=D.radiusAxisMap,F=D.angleAxisMap,q=Ma(T),V=Ma(F),Y=V.cx,G=V.cy,H=V.innerRadius,U=V.outerRadius;return Q.cloneElement(A,{polarAngles:Array.isArray(W)?W:qr(V,!0).map(function(X){return X.coordinate}),polarRadius:Array.isArray(N)?N:qr(q,!0).map(function(X){return X.coordinate}),cx:Y,cy:G,innerRadius:H,outerRadius:U,key:A.key||"polar-grid",radialLines:P})}),Te(w,"renderLegend",function(){var A=w.state.formattedGraphicalItems,E=w.props,P=E.children,W=E.width,N=E.height,D=w.props.margin||{},T=W-(D.left||0)-(D.right||0),F=PO({children:P,formattedGraphicalItems:A,legendWidth:T,legendContent:f});if(!F)return null;var q=F.item,V=xM(F,DY);return Q.cloneElement(q,ae(ae({},V),{},{chartWidth:W,chartHeight:N,margin:D,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Te(w,"renderTooltip",function(){var A,E=w.props,P=E.children,W=E.accessibilityLayer,N=Sn(P,Mn);if(!N)return null;var D=w.state,T=D.isTooltipActive,F=D.activeCoordinate,q=D.activePayload,V=D.activeLabel,Y=D.offset,G=(A=N.props.active)!==null&&A!==void 0?A:T;return Q.cloneElement(N,{viewBox:ae(ae({},Y),{},{x:Y.left,y:Y.top}),active:G,label:V,payload:G?q:[],coordinate:F,accessibilityLayer:W})}),Te(w,"renderBrush",function(A){var E=w.props,P=E.margin,W=E.data,N=w.state,D=N.offset,T=N.dataStartIndex,F=N.dataEndIndex,q=N.updateId;return Q.cloneElement(A,{key:A.key||"_recharts-brush",onChange:bc(w.handleBrushChange,A.props.onChange),data:W,x:le(A.props.x)?A.props.x:D.left,y:le(A.props.y)?A.props.y:D.top+D.height+D.brushBottom-(P.bottom||0),width:le(A.props.width)?A.props.width:D.width,startIndex:T,endIndex:F,updateId:"brush-".concat(q)})}),Te(w,"renderReferenceElement",function(A,E,P){if(!A)return null;var W=w,N=W.clipPathId,D=w.state,T=D.xAxisMap,F=D.yAxisMap,q=D.offset,V=A.type.defaultProps||{},Y=A.props,G=Y.xAxisId,H=G===void 0?V.xAxisId:G,U=Y.yAxisId,X=U===void 0?V.yAxisId:U;return Q.cloneElement(A,{key:A.key||"".concat(E,"-").concat(P),xAxis:T[H],yAxis:F[X],viewBox:{x:q.left,y:q.top,width:q.width,height:q.height},clipPathId:N})}),Te(w,"renderActivePoints",function(A){var E=A.item,P=A.activePoint,W=A.basePoint,N=A.childIndex,D=A.isRange,T=[],F=E.props.key,q=E.item.type.defaultProps!==void 0?ae(ae({},E.item.type.defaultProps),E.item.props):E.item.props,V=q.activeDot,Y=q.dataKey,G=ae(ae({index:N,dataKey:Y,cx:P.x,cy:P.y,r:4,fill:ob(E.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},Me(V,!1)),Ec(V));return T.push(S.renderActiveDot(V,G,"".concat(F,"-activePoint-").concat(N))),W?T.push(S.renderActiveDot(V,ae(ae({},G),{},{cx:W.x,cy:W.y}),"".concat(F,"-basePoint-").concat(N))):D&&T.push(null),T}),Te(w,"renderGraphicChild",function(A,E,P){var W=w.filterFormatItem(A,E,P);if(!W)return null;var N=w.getTooltipEventType(),D=w.state,T=D.isTooltipActive,F=D.tooltipAxis,q=D.activeTooltipIndex,V=D.activeLabel,Y=w.props.children,G=Sn(Y,Mn),H=W.props,U=H.points,X=H.isRange,j=H.baseLine,$=W.item.type.defaultProps!==void 0?ae(ae({},W.item.type.defaultProps),W.item.props):W.item.props,Z=$.activeDot,ue=$.hide,he=$.activeBar,ye=$.activeShape,ge=!!(!ue&&T&&G&&(Z||he||ye)),fe={};N!=="axis"&&G&&G.props.trigger==="click"?fe={onClick:bc(w.handleItemMouseEnter,A.props.onClick)}:N!=="axis"&&(fe={onMouseLeave:bc(w.handleItemMouseLeave,A.props.onMouseLeave),onMouseEnter:bc(w.handleItemMouseEnter,A.props.onMouseEnter)});var ne=Q.cloneElement(A,ae(ae({},W.props),fe));function de(vt){return typeof F.dataKey=="function"?F.dataKey(vt.payload):null}if(ge)if(q>=0){var pe,re;if(F.dataKey&&!F.allowDuplicatedCategory){var je=typeof F.dataKey=="function"?de:"payload.".concat(F.dataKey.toString());pe=kc(U,je,V),re=X&&j&&kc(j,je,V)}else pe=U==null?void 0:U[q],re=X&&j&&j[q];if(ye||he){var Pe=A.props.activeIndex!==void 0?A.props.activeIndex:q;return[Q.cloneElement(A,ae(ae(ae({},W.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ee(pe))return[ne].concat($o(w.renderActivePoints({item:W,activePoint:pe,basePoint:re,childIndex:q,isRange:X})))}else{var Ce,_e=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},qe=_e.graphicalItem,He=qe.item,Fe=He===void 0?A:He,Ke=qe.childIndex,xt=ae(ae(ae({},W.props),fe),{},{activeIndex:Ke});return[Q.cloneElement(Fe,xt),null,null]}return X?[ne,null,null]:[ne,null]}),Te(w,"renderCustomized",function(A,E,P){return Q.cloneElement(A,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Te(w,"renderMap",{CartesianGrid:{handler:Pc,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Pc},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Pc},YAxis:{handler:Pc},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((_=M.id)!==null&&_!==void 0?_:Ha("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=PA(w.triggeredAfterMouseMove,(O=M.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return XY(S,g),GY(S,[{key:"componentDidMount",value:function(){var _,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(_=this.props.margin.left)!==null&&_!==void 0?_:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var _=this.props,O=_.children,w=_.data,A=_.height,E=_.layout,P=Sn(O,Mn);if(P){var W=P.props.defaultIndex;if(!(typeof W!="number"||W<0||W>this.state.tooltipTicks.length-1)){var N=this.state.tooltipTicks[W]&&this.state.tooltipTicks[W].value,D=ag(this.state,w,W,N),T=this.state.tooltipTicks[W].coordinate,F=(this.state.offset.top+A)/2,q=E==="horizontal",V=q?{x:T,y:F}:{y:T,x:F},Y=this.state.formattedGraphicalItems.find(function(H){var U=H.item;return U.type.name==="Scatter"});Y&&(V=ae(ae({},V),Y.props.points[W].tooltipPosition),D=Y.props.points[W].tooltipPayload);var G={activeTooltipIndex:W,isTooltipActive:!0,activeLabel:N,activePayload:D,activeCoordinate:V};this.setState(G),this.renderCursor(P),this.accessibilityManager.setIndex(W)}}}},{key:"getSnapshotBeforeUpdate",value:function(_,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==_.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==_.margin){var w,A;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(A=this.props.margin.top)!==null&&A!==void 0?A:0}})}return null}},{key:"componentDidUpdate",value:function(_){Rv([Sn(_.children,Mn)],[Sn(this.props.children,Mn)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var _=Sn(this.props.children,Mn);if(_&&typeof _.props.shared=="boolean"){var O=_.props.shared?"axis":"item";return l.indexOf(O)>=0?O:o}return o}},{key:"getMouseInfo",value:function(_){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),A=z$(w),E={chartX:Math.round(_.pageX-A.left),chartY:Math.round(_.pageY-A.top)},P=w.width/O.offsetWidth||1,W=this.inRange(E.chartX,E.chartY,P);if(!W)return null;var N=this.state,D=N.xAxisMap,T=N.yAxisMap,F=this.getTooltipEventType(),q=wM(this.state,this.props.data,this.props.layout,W);if(F!=="axis"&&D&&T){var V=Ma(D).scale,Y=Ma(T).scale,G=V&&V.invert?V.invert(E.chartX):null,H=Y&&Y.invert?Y.invert(E.chartY):null;return ae(ae({},E),{},{xValue:G,yValue:H},q)}return q?ae(ae({},E),q):null}},{key:"inRange",value:function(_,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=this.props.layout,E=_/w,P=O/w;if(A==="horizontal"||A==="vertical"){var W=this.state.offset,N=E>=W.left&&E<=W.left+W.width&&P>=W.top&&P<=W.top+W.height;return N?{x:E,y:P}:null}var D=this.state,T=D.angleAxisMap,F=D.radiusAxisMap;if(T&&F){var q=Ma(T);return PS({x:E,y:P},q)}return null}},{key:"parseEventsOfWrapper",value:function(){var _=this.props.children,O=this.getTooltipEventType(),w=Sn(_,Mn),A={};w&&O==="axis"&&(w.props.trigger==="click"?A={onClick:this.handleClick}:A={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var E=Ec(this.props,this.handleOuterEvent);return ae(ae({},E),A)}},{key:"addListener",value:function(){xv.on(Bv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){xv.removeListener(Bv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(_,O,w){for(var A=this.state.formattedGraphicalItems,E=0,P=A.length;E<P;E++){var W=A[E];if(W.item===_||W.props.key===_.key||O===Ur(W.item.type)&&w===W.childIndex)return W}return null}},{key:"renderClipPath",value:function(){var _=this.clipPathId,O=this.state.offset,w=O.left,A=O.top,E=O.height,P=O.width;return R.createElement("defs",null,R.createElement("clipPath",{id:_},R.createElement("rect",{x:w,y:A,height:E,width:P})))}},{key:"getXScales",value:function(){var _=this.state.xAxisMap;return _?Object.entries(_).reduce(function(O,w){var A=IM(w,2),E=A[0],P=A[1];return ae(ae({},O),{},Te({},E,P.scale))},{}):null}},{key:"getYScales",value:function(){var _=this.state.yAxisMap;return _?Object.entries(_).reduce(function(O,w){var A=IM(w,2),E=A[0],P=A[1];return ae(ae({},O),{},Te({},E,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(_){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[_])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(_){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[_])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(_){var O=this.state,w=O.formattedGraphicalItems,A=O.activeItem;if(w&&w.length)for(var E=0,P=w.length;E<P;E++){var W=w[E],N=W.props,D=W.item,T=D.type.defaultProps!==void 0?ae(ae({},D.type.defaultProps),D.props):D.props,F=Ur(D.type);if(F==="Bar"){var q=(N.data||[]).find(function(H){return pz(_,H)});if(q)return{graphicalItem:W,payload:q}}else if(F==="RadialBar"){var V=(N.data||[]).find(function(H){return PS(_,H)});if(V)return{graphicalItem:W,payload:V}}else if(f0(W,A)||d0(W,A)||Hs(W,A)){var Y=TU({graphicalItem:W,activeTooltipItem:A,itemData:T.data}),G=T.activeIndex===void 0?Y:T.activeIndex;return{graphicalItem:ae(ae({},W),{},{childIndex:G}),payload:Hs(W,A)?T.data[Y]:W.props.data[Y]}}}return null}},{key:"render",value:function(){var _=this;if(!jx(this))return null;var O=this.props,w=O.children,A=O.className,E=O.width,P=O.height,W=O.style,N=O.compact,D=O.title,T=O.desc,F=xM(O,$Y),q=Me(F,!1);if(N)return R.createElement(X3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement(Dv,oo({},q,{width:E,height:P,title:D,desc:T}),this.renderClipPath(),Hx(w,this.renderMap)));if(this.props.accessibilityLayer){var V,Y;q.tabIndex=(V=this.props.tabIndex)!==null&&V!==void 0?V:0,q.role=(Y=this.props.role)!==null&&Y!==void 0?Y:"application",q.onKeyDown=function(H){_.accessibilityManager.keyboardEvent(H)},q.onFocus=function(){_.accessibilityManager.focus()}}var G=this.parseEventsOfWrapper();return R.createElement(X3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement("div",oo({className:Re("recharts-wrapper",A),style:ae({position:"relative",cursor:"default",width:E,height:P},W)},G,{ref:function(U){_.container=U}}),R.createElement(Dv,oo({},q,{width:E,height:P,title:D,desc:T,style:rQ}),this.renderClipPath(),Hx(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(Q.Component);Te(B,"displayName",n),Te(B,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Te(B,"getDerivedStateFromProps",function(g,S){var M=g.dataKey,_=g.data,O=g.children,w=g.width,A=g.height,E=g.layout,P=g.stackOffset,W=g.margin,N=S.dataStartIndex,D=S.dataEndIndex;if(S.updateId===void 0){var T=PM(g);return ae(ae(ae({},T),{},{updateId:0},b(ae(ae({props:g},T),{},{updateId:0}),S)),{},{prevDataKey:M,prevData:_,prevWidth:w,prevHeight:A,prevLayout:E,prevStackOffset:P,prevMargin:W,prevChildren:O})}if(M!==S.prevDataKey||_!==S.prevData||w!==S.prevWidth||A!==S.prevHeight||E!==S.prevLayout||P!==S.prevStackOffset||!uo(W,S.prevMargin)){var F=PM(g),q={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},V=ae(ae({},wM(S,_,E)),{},{updateId:S.updateId+1}),Y=ae(ae(ae({},F),q),V);return ae(ae(ae({},Y),b(ae({props:g},Y),S)),{},{prevDataKey:M,prevData:_,prevWidth:w,prevHeight:A,prevLayout:E,prevStackOffset:P,prevMargin:W,prevChildren:O})}if(!Rv(O,S.prevChildren)){var G,H,U,X,j=Sn(O,_o),$=j&&(G=(H=j.props)===null||H===void 0?void 0:H.startIndex)!==null&&G!==void 0?G:N,Z=j&&(U=(X=j.props)===null||X===void 0?void 0:X.endIndex)!==null&&U!==void 0?U:D,ue=$!==N||Z!==D,he=!Ee(_),ye=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ye},b(ae(ae({props:g},S),{},{updateId:ye,dataStartIndex:$,dataEndIndex:Z}),S)),{},{prevChildren:O,dataStartIndex:$,dataEndIndex:Z})}return null}),Te(B,"renderActiveDot",function(g,S,M){var _;return Q.isValidElement(g)?_=Q.cloneElement(g,S):ke(g)?_=g(S):_=R.createElement(Js,S),R.createElement(De,{className:"recharts-active-dot",key:M},_)});var I=Q.forwardRef(function(S,M){return R.createElement(B,oo({},S,{ref:M}))});return I.displayName=B.displayName,I},dQ=B0({chartName:"LineChart",GraphicalChild:Fr,axisComponents:[{axisType:"xAxis",AxisComp:ja},{axisType:"yAxis",AxisComp:xr}],formatAxisMap:sb}),hQ=B0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:ja},{axisType:"yAxis",AxisComp:xr}],formatAxisMap:sb}),mQ=B0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:p0},{axisType:"radiusAxis",AxisComp:l0}],formatAxisMap:BF,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),vQ=B0({chartName:"ComposedChart",GraphicalChild:[Fr,Pi,Sr,I0],axisComponents:[{axisType:"xAxis",AxisComp:ja},{axisType:"yAxis",AxisComp:xr},{axisType:"zAxis",AxisComp:b0}],formatAxisMap:sb});const MM=({active:e,payload:t,label:n})=>e&&t&&t.length?C.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[C.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),C.jsxs("div",{className:"space-y-1",children:[C.jsxs("p",{className:"text-sm",children:[C.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),C.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),C.jsxs("p",{className:"text-sm",children:[C.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),C.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),C.jsxs("p",{className:"text-sm",children:[C.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),C.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function XW({data:e,title:t,instanceId:n}){var b,B;const r=Q.useId(),a=t||"Sessions & Escalation Trends",o=e.length<=3&&((B=(b=e[0])==null?void 0:b.week)==null?void 0:B.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,p=`chart-${l}-${e.length}`,f=e.map((I,g)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${g}`})),m=`colorSessions-${l}`,d=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return C.jsxs(zn,{className:"shadow-xl border-0",children:[C.jsx(jp,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:C.jsxs("div",{className:"flex items-start justify-between",children:[C.jsxs("div",{children:[C.jsx(Rp,{className:"text-2xl font-black text-gray-900",children:a}),C.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),C.jsxs("div",{className:"flex gap-2",children:[C.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),C.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),C.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),C.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),C.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),C.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),C.jsx(Un,{className:"p-6 bg-white",children:C.jsx(Ng,{width:"100%",height:400,children:o?C.jsxs(vQ,{data:f,barGap:8,barCategoryGap:"20%",children:[C.jsxs("defs",{children:[C.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[C.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),C.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),C.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[C.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),C.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),C.jsx(Ap,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),C.jsx(ja,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),C.jsx(xr,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),C.jsx(xr,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),C.jsx(Mn,{content:C.jsx(MM,{})},`tooltip-${l}`),C.jsx(Wa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),C.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),C.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),C.jsx(Fr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p):C.jsxs(dQ,{data:f,children:[C.jsx("defs",{children:C.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[C.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),C.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),C.jsx(Ap,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),C.jsx(ja,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),C.jsx(xr,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),C.jsx(xr,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),C.jsx(Mn,{content:C.jsx(MM,{})},`tooltip-${l}`),C.jsx(Wa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),C.jsx(Fr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),C.jsx(Fr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),C.jsx(Fr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p)})})]})}const _M=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function ZW({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),o=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return C.jsxs(zn,{children:[C.jsxs(jp,{children:[C.jsx(Rp,{children:r}),C.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),C.jsx(Un,{children:C.jsx(Ng,{width:"100%",height:300,children:C.jsxs(mQ,{children:[C.jsx(ea,{data:o,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:o.map(s=>C.jsx(Ks,{fill:_M[o.indexOf(s)%_M.length]},s.uniqueKey))},`pie-${a}`),C.jsx(Mn,{formatter:(s,l,p)=>[`${s.toLocaleString()} sessions (${p.payload.percentage.toFixed(1)}%)`,p.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function yQ({data:e}){const t=e.reduce((a,o)=>{const s=a.find(l=>l.product===o.product);return s?s.count+=o.count:a.push({...o}),a},[]),n=t.slice(0,10),r=t.reduce((a,o)=>a+o.count,0);return C.jsxs(zn,{children:[C.jsxs(jp,{children:[C.jsx(Rp,{children:"Product Breakdown (Human Handled)"}),C.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),C.jsx(Un,{children:C.jsx(Ng,{width:"100%",height:300,children:C.jsxs(hQ,{data:n,children:[C.jsx(Ap,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),C.jsx(ja,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),C.jsx(xr,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),C.jsx(Mn,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),C.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function JW({className:e,...t}){return C.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:C.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function e4({className:e,...t}){return C.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function t4({className:e,...t}){return C.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function ss({className:e,...t}){return C.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return C.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function qn({className:e,...t}){return C.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function gQ({data:e}){const[t,n]=Q.useState(new Set),r=a=>{const o=new Set(t);o.has(a)?o.delete(a):o.add(a),n(o)};return C.jsx("div",{className:"border rounded-lg overflow-hidden",children:C.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:C.jsxs(JW,{children:[C.jsx(e4,{className:"bg-gray-50 sticky top-0 z-10",children:C.jsxs(ss,{children:[C.jsx(Dr,{className:"w-12"}),C.jsx(Dr,{children:"Issue Type"}),C.jsx(Dr,{className:"text-right",children:"Count"})]})}),C.jsx(t4,{children:e.flatMap((a,o)=>{const s=t.has(a.issue),l=[C.jsxs(ss,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[C.jsx(qn,{children:s?C.jsx(RE,{className:"w-4 h-4"}):C.jsx(DE,{className:"w-4 h-4"})}),C.jsx(qn,{className:"font-medium",children:a.issue}),C.jsx(qn,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${o}`)];return s&&a.subIssues.forEach((p,f)=>{l.push(C.jsxs(ss,{className:"bg-blue-50",children:[C.jsx(qn,{}),C.jsx(qn,{className:"pl-8",children:C.jsxs("div",{children:[C.jsx("div",{className:"font-medium text-sm text-gray-900",children:p.subType}),C.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:p.products.map((m,d)=>C.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",C.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${p.subType}-${m.product}-${d}`))})]})}),C.jsx(qn,{className:"text-right",children:p.count})]},`${a.issue}-${p.subType}-${f}`))}),l})})]})})})}function bQ({data:e}){const[t,n]=Q.useState("createdAt"),[r,a]=Q.useState("desc"),o=p=>{t===p?a(r==="asc"?"desc":"asc"):(n(p),a("asc"))},s=[...e].sort((p,f)=>{let m=p[t],d=f[t];return t==="createdAt"?(m=gr(p.createdAt).getTime(),d=gr(f.createdAt).getTime()):(m=(m||"").toLowerCase(),d=(d||"").toLowerCase()),r==="asc"?m>d?1:-1:m<d?1:-1}),l=({field:p,children:f})=>C.jsxs("button",{onClick:()=>o(p),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[f,C.jsx(EE,{className:"w-4 h-4"})]});return C.jsx("div",{className:"border rounded-lg overflow-hidden",children:C.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:C.jsxs(JW,{children:[C.jsx(e4,{className:"bg-gray-50 sticky top-0 z-10",children:C.jsxs(ss,{children:[C.jsx(Dr,{children:C.jsx(l,{field:"createdAt",children:"Date"})}),C.jsx(Dr,{children:C.jsx(l,{field:"channel",children:"Channel"})}),C.jsx(Dr,{children:C.jsx(l,{field:"product",children:"Product"})}),C.jsx(Dr,{children:C.jsx(l,{field:"issue",children:"Issue"})}),C.jsx(Dr,{children:C.jsx(l,{field:"subType",children:"Sub Type"})}),C.jsx(Dr,{children:C.jsx(l,{field:"handled",children:"Handled By"})})]})}),C.jsx(t4,{children:s.map((p,f)=>C.jsxs(ss,{children:[C.jsx(qn,{className:"whitespace-nowrap",children:JN(gr(p.createdAt))}),C.jsx(qn,{children:p.channel}),C.jsx(qn,{children:p.product||"-"}),C.jsx(qn,{children:p.issue||"-"}),C.jsx(qn,{children:p.subType||"-"}),C.jsx(qn,{children:C.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${p.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:p.handled})})]},f))})]})})})}function IQ({monthsData:e,weeklyEscalation:t}){const n=e.flatMap(l=>l.data),r=Ev(n),a=Tv(n)[0],o=w_(n)[0],s=ej(n,1)[0];return C.jsxs(C.Fragment,{children:[C.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-2xl overflow-hidden relative",children:[C.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),C.jsx(Un,{className:"p-8 relative z-10",children:C.jsxs("div",{className:"text-center text-white",children:[C.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-4 uppercase tracking-wider border border-white/30",children:[C.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),C.jsx("h2",{className:"text-3xl md:text-4xl font-black mb-3 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),C.jsx("p",{className:"text-lg text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),C.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:e.map(l=>C.jsxs(zn,{className:`relative overflow-hidden shadow-xl border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`,children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),C.jsx(jp,{className:"text-white pb-4 pt-6 relative z-10",children:C.jsxs("div",{className:"text-center",children:[C.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3 uppercase tracking-wider border border-white/30",children:[C.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),C.jsx(Rp,{className:"text-3xl font-black mb-4 drop-shadow",children:l.name}),C.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg",children:[C.jsx("p",{className:"text-xs text-white/80 uppercase tracking-widest mb-2 font-bold",children:"Total Sessions"}),C.jsx("p",{className:"text-6xl font-black tracking-tight drop-shadow-lg",children:l.data.length.toLocaleString()}),l.data.length<200&&C.jsx("p",{className:"text-xs text-white/70 mt-2 font-medium",children:"Partial data recorded"})]})]})}),C.jsx(Un,{className:"p-6 bg-white/95 backdrop-blur-sm relative z-10",children:C.jsxs("div",{className:"space-y-3",children:[C.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm border border-green-200",children:[C.jsxs("div",{className:"flex justify-between items-center mb-2",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-md",children:C.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),C.jsx("p",{className:"text-xs text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),C.jsx("div",{className:"bg-white rounded-lg px-3 py-1.5 shadow-sm border border-green-300",children:C.jsxs("p",{className:"text-2xl font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),C.jsx("p",{className:"text-3xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),C.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-200",children:[C.jsxs("div",{className:"flex justify-between items-center mb-2",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md",children:C.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),C.jsx("p",{className:"text-xs text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),C.jsx("div",{className:"bg-white rounded-lg px-3 py-1.5 shadow-sm border border-orange-300",children:C.jsxs("p",{className:"text-2xl font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),C.jsx("p",{className:"text-3xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]}),C.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 shadow-sm border border-red-200",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[C.jsx("div",{className:"w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-md",children:C.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),C.jsx("p",{className:"text-xs text-gray-700 font-bold uppercase tracking-wide",children:"Escalation Rate"})]}),C.jsxs("p",{className:"text-4xl font-black text-red-600",children:[l.metrics.escalationRate.toFixed(1),"%"]})]})]})})]},l.name))}),C.jsx(XW,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),C.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:e.map(l=>C.jsx(ZW,{data:l.channels,title:`${l.name} - Channels`},l.name))}),C.jsxs(zn,{className:"border-0 shadow-2xl overflow-hidden mt-6",children:[C.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-8 py-6 border-b border-white/10",children:C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20",children:C.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-3xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),C.jsx("p",{className:"text-sm text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),C.jsxs(Un,{className:"p-8 bg-gradient-to-br from-slate-50 to-white",children:[C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[C.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[C.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:C.jsx("svg",{className:"w-6 h-6 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),C.jsx("p",{className:"text-xs font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),C.jsx("p",{className:"text-4xl font-black text-slate-900 tracking-tight mb-1",children:r.totalSessions.toLocaleString()}),C.jsxs("p",{className:"text-xs text-slate-400 font-medium italic",children:["Across ",e.length," months"]})]}),C.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[C.jsx("div",{className:"w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:C.jsx("svg",{className:"w-6 h-6 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),C.jsx("p",{className:"text-xs font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),C.jsxs("p",{className:"text-4xl font-black text-slate-900 tracking-tight mb-1",children:[r.botPercentage.toFixed(1),"%"]}),C.jsxs("p",{className:"text-xs text-emerald-600 font-bold",children:[r.botHandled.toLocaleString()," Handled"]})]}),C.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[C.jsx("div",{className:"w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:C.jsx("svg",{className:"w-6 h-6 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),C.jsx("p",{className:"text-xs font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),C.jsxs("p",{className:"text-4xl font-black text-rose-600 tracking-tight mb-1",children:[r.escalationRate.toFixed(1),"%"]}),C.jsx("p",{className:"text-xs text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),C.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-300 group",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[C.jsx("div",{className:"w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:C.jsx("svg",{className:"w-6 h-6 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),C.jsx("p",{className:"text-xs font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),C.jsx("p",{className:"text-4xl font-black text-slate-900 tracking-tight mb-1",children:(a==null?void 0:a.channel)||"N/A"}),C.jsxs("p",{className:"text-xs text-indigo-500 font-bold uppercase",children:[((a==null?void 0:a.percentage)||0).toFixed(1),"% Share"]})]})]}),C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[C.jsxs("div",{className:"bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl",children:[C.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-10",children:C.jsx("svg",{className:"w-24 h-24",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),C.jsx("h4",{className:"text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4",children:"Top Support Product"}),C.jsx("p",{className:"text-4xl font-black mb-2",children:(o==null?void 0:o.product)||"N/A"}),C.jsx("div",{className:"flex items-center gap-2",children:C.jsxs("div",{className:"px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/20",children:[o==null?void 0:o.count.toLocaleString()," Support Tickets"]})})]}),C.jsxs("div",{className:"bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl",children:[C.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-10",children:C.jsx("svg",{className:"w-24 h-24",fill:"currentColor",viewBox:"0 0 20 20",children:C.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),C.jsx("h4",{className:"text-indigo-100 font-black uppercase tracking-[0.2em] text-xs mb-4",children:"Leading Issue Type"}),C.jsx("p",{className:"text-4xl font-black mb-2 line-clamp-1",children:(s==null?void 0:s.issue)||"N/A"}),C.jsx("div",{className:"flex items-center gap-2",children:C.jsxs("div",{className:"px-3 py-1 bg-black/20 rounded-full text-xs font-bold border border-white/10",children:[s==null?void 0:s.total.toLocaleString()," Reported Cases"]})})]})]})]})]})]})}const xQ=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Webapp,19-04-2026,,,,Bot`,BQ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQmdcr8EaeN04nsRVatF2B0lVYCOpsrvnFoldLpPjuRBXeOcHL1KGCQRbCw62A78cVtxxY2fW246vB/pub?output=csv";function wQ(){const[e,t]=Q.useState([]),[n,r]=Q.useState([]),[a,o]=Q.useState("all"),[s,l]=Q.useState("all"),[p,f]=Q.useState([]),[m,d]=Q.useState("overview"),[v,b]=Q.useState(null);Q.useRef(null);const B=Q.useRef(null),[I,g]=Q.useState(null),S=Q.useRef([]);Q.useEffect(()=>{S.current=e},[e]);const M=q=>{if(!q)return q;const V=q.trim(),Y=V.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(Y){const[,H,U,X]=Y;return`${X.padStart(2,"0")}-${U.padStart(2,"0")}-${H}`}const G=V.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(G){const[,H,U,X]=G;return`${H.padStart(2,"0")}-${U.padStart(2,"0")}-${X}`}return V};Q.useEffect(()=>{let q=[];const V=Y=>{y2.parse(BQ,{download:!0,header:!0,skipEmptyLines:!0,complete:G=>{if(G.data&&G.data.length>0){const H=G.data.map(U=>({channel:U.Channel||U.channel||"",createdAt:M(U["Created at"]||U.createdAt||U["Created date"]||""),product:U.Product||U.product||"",issue:U.Issue||U.issue||"",subType:U["Sub Type"]||U.subType||"",handled:U.Handled||U.handled||""}));t(U=>{const X=new Set(U.map($=>`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`)),j=H.filter($=>!X.has(`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`));return[...U,...j]}),b(new Date().toLocaleTimeString()),console.log(`Synced ${H.length} rows from Google Sheets.`)}},error:G=>{console.error("Error syncing with Google Sheets:",G)}})};y2.parse(xQ,{header:!0,skipEmptyLines:!0,complete:Y=>{q=Y.data.map(H=>({channel:H.Channel||H.channel||"",createdAt:M(H["Created at"]||H.createdAt||H["Created date"]||""),product:H.Product||H.product||"",issue:H.Issue||H.issue||"",subType:H["Sub Type"]||H.subType||"",handled:H.Handled||H.handled||""}));const G=localStorage.getItem("waggle_manual_data");if(G)try{const H=JSON.parse(G);Array.isArray(H)&&(q=[...q,...H],console.log(`Loaded ${H.length} manually uploaded rows from local storage.`))}catch(H){console.error("Error parsing local storage data:",H)}t(q),V()}})},[]);const _=Q.useMemo(()=>{const q=["january","february","march","april","may","june","july","august","september","october","november","december"],V=new Set;return e.forEach(Y=>{try{const G=gr(Y.createdAt);isNaN(G.getTime())||V.add(`${Wc(G,"MMMM").toLowerCase()}-${G.getFullYear()}`)}catch{}}),Array.from(V).sort((Y,G)=>{const[H,U]=Y.split("-"),[X,j]=G.split("-");return U!==j?parseInt(U)-parseInt(j):q.indexOf(H)-q.indexOf(X)})},[e]);Q.useEffect(()=>{if(a&&a!=="all"){const q=x_(a);f(q)}else f([]);l("all")},[a]),Q.useEffect(()=>{e.length>0&&w(a,s)},[s,a,e]);const O=q=>{var Y;const V=(Y=q.target.files)==null?void 0:Y[0];V&&(y2.parse(V,{header:!0,skipEmptyLines:!0,complete:G=>{if(!G.data.length){g({type:"error",message:"The CSV file appears to be empty."}),setTimeout(()=>g(null),5e3);return}const H=G.data.map($=>{const Z=$["Created at"]||$["created at"]||$.createdAt||$["Created date"]||$["Created At"]||"";return{channel:$.Channel||$.channel||"",createdAt:M(Z),product:$.Product||$.product||"",issue:$.Issue||$.issue||"",subType:$["Sub Type"]||$.subType||"",handled:$.Handled||$.handled||""}}),U=new Set(S.current.map($=>`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`)),X=H.filter($=>!U.has(`${$.channel}|${$.createdAt}|${$.product}|${$.issue}|${$.subType}|${$.handled}`));try{const $=localStorage.getItem("waggle_manual_data");let Z=[];if($)try{Z=JSON.parse($)}catch{}if(X.length>0){const ue=[...Z,...X];localStorage.setItem("waggle_manual_data",JSON.stringify(ue))}}catch($){console.warn("localStorage write failed (quota exceeded?):",$)}X.length>0&&t($=>[...$,...X]);const j=X.length>0?`✅ Added ${X.length.toLocaleString()} new rows from "${V.name}". Data is saved in this browser and will persist on refresh.`:`ℹ️ No new rows found in "${V.name}" — all ${H.length.toLocaleString()} rows already exist in the dashboard.`;g({type:X.length>0?"success":"error",message:j}),setTimeout(()=>g(null),8e3)},error:()=>{g({type:"error",message:"Failed to parse the CSV file. Please check the format."}),setTimeout(()=>g(null),5e3)}}),q.target.value="")},w=(q,V)=>{let Y=e;if(q!=="all"&&(Y=e.filter(G=>{const H=gr(G.createdAt);return kv(H,q)})),V!=="all"){const G=p.find(H=>H.value===V);G&&(Y=Y.filter(H=>{const U=gr(H.createdAt);return B_(U,G)}))}r(Y)},A=()=>{let q="analytics-export.csv";a==="all"?q=s==="all"?"analytics-all-months.csv":`analytics-all-months-${s}.csv`:q=s==="all"?`analytics-${a}.csv`:`analytics-${a}-${s}.csv`,rj(n,q)},E=Ev(n),P=Tv(n),W=w_(n),N=nj(n);a!=="all"||_[0];const D=tj(e,a),T=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],F=(a==="all"?_:[a]).map((q,V)=>{const Y=e.filter($=>{const Z=gr($.createdAt);return kv(Z,q)}),[G,H]=q.split("-"),U=`Month ${V+1}`,X=`${G.charAt(0).toUpperCase()+G.slice(1)} ${H}`,j=T[V%T.length];return{name:X,shortName:U,data:Y,metrics:Ev(Y),channels:Tv(Y),colorFrom:j.from,colorTo:j.to}});return C.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:C.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[C.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[C.jsxs("div",{children:[C.jsx("h1",{className:"text-3xl font-bold",children:"Waggle AI Chatbot Dashboard"}),C.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),C.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[C.jsxs("select",{value:a,onChange:q=>o(q.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-[200px] cursor-pointer",children:[C.jsx("option",{value:"all",children:"All Months"}),_.map(q=>{const[V,Y]=q.split("-");return C.jsxs("option",{value:q,children:[V.charAt(0).toUpperCase()+V.slice(1)," ",Y]},q)})]}),C.jsxs("select",{value:s,onChange:q=>l(q.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-[200px] cursor-pointer",disabled:a==="all",children:[C.jsx("option",{value:"all",children:"All Weeks"}),p.map(q=>C.jsx("option",{value:q.value,children:q.label},q.value))]}),C.jsx("input",{ref:B,type:"file",accept:".csv",onChange:O,className:"hidden"}),C.jsxs(gI,{onClick:()=>{var q;return(q=B.current)==null?void 0:q.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700 hover:bg-blue-50",children:[C.jsx(FE,{className:"w-4 h-4 mr-2"}),"Add Data"]}),C.jsxs(gI,{onClick:A,variant:"outline",className:"bg-white",children:[C.jsx(UE,{className:"w-4 h-4 mr-2"}),"Export CSV"]})]})]}),I&&C.jsx(zn,{className:`border ${I.type==="success"?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`,children:C.jsxs(Un,{className:"p-4 flex items-center justify-between gap-3",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[I.type==="success"?C.jsx(LE,{className:"w-5 h-5 text-green-600 shrink-0"}):C.jsx(BI,{className:"w-5 h-5 text-red-600 shrink-0"}),C.jsx("p",{className:`font-medium ${I.type==="success"?"text-green-900":"text-red-900"}`,children:I.message})]}),C.jsx("button",{onClick:()=>g(null),className:"text-gray-400 hover:text-gray-600 shrink-0",children:C.jsx(BI,{className:"w-4 h-4"})})]})}),a==="all"&&C.jsx("div",{className:"flex justify-center",children:C.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[C.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium transition-colors ${m==="overview"?"bg-blue-600 text-white shadow-sm":"text-gray-700 hover:text-gray-900"}`,children:"Overview Comparison"}),C.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium transition-colors ${m==="detailed"?"bg-blue-600 text-white shadow-sm":"text-gray-700 hover:text-gray-900"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?C.jsx(IQ,{monthsData:F,weeklyEscalation:D}):C.jsxs(C.Fragment,{children:[C.jsx(aj,{metrics:E}),C.jsx(XW,{data:D,instanceId:"detailed-analysis"}),C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[C.jsx(ZW,{data:P}),C.jsx(yQ,{data:W})]}),C.jsx(zn,{children:C.jsx(Un,{className:"p-6",children:C.jsxs(ME,{defaultValue:"issues",className:"w-full",children:[C.jsxs(_E,{className:"grid w-full grid-cols-2 max-w-md",children:[C.jsx(bI,{value:"issues",children:"Issue Analysis"}),C.jsx(bI,{value:"sessions",children:"Detailed Sessions"})]}),C.jsx(II,{value:"issues",className:"mt-6",children:C.jsxs("div",{className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Human Escalations Breakdown"}),C.jsx("p",{className:"text-sm text-gray-600",children:"Click on any issue to expand and view sub-issues with product breakdown"})]}),C.jsx(gQ,{data:N})]})}),C.jsx(II,{value:"sessions",className:"mt-6",children:C.jsxs("div",{className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg font-semibold mb-2",children:"All Sessions"}),C.jsxs("p",{className:"text-sm text-gray-600",children:["Click column headers to sort. Showing ",n.length," sessions."]})]}),C.jsx(bQ,{data:n})]})})]})})})]})]})})}uk.createRoot(document.getElementById("root")).render(C.jsx(wQ,{}));
