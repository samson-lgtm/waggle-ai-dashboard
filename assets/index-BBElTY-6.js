var ZC=Object.defineProperty;var JC=(e,t,n)=>t in e?ZC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>JC(e,typeof t!="symbol"?t+"":t,n);function ek(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f2={exports:{}},ju={},d2={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nI;function tk(){if(nI)return Le;nI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=h&&N[h]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function g(N,q,J){this.props=N,this.context=q,this.refs=I,this.updater=J||b}g.prototype.isReactComponent={},g.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=g.prototype;function _(N,q,J){this.props=N,this.context=q,this.refs=I,this.updater=J||b}var A=_.prototype=new S;A.constructor=_,x(A,g.prototype),A.isPureReactComponent=!0;var W=Array.isArray,w=Object.prototype.hasOwnProperty,O={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(N,q,J){var ue,he={},ye=null,ge=null;if(q!=null)for(ue in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(ye=""+q.key),q)w.call(q,ue)&&!E.hasOwnProperty(ue)&&(he[ue]=q[ue]);var fe=arguments.length-2;if(fe===1)he.children=J;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(N&&N.defaultProps)for(ue in fe=N.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:N,key:ye,ref:ge,props:he,_owner:O.current}}function M(N,q){return{$$typeof:e,type:N.type,key:q,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function H(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(J){return q[J]})}var T=/\/+/g;function L(N,q){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):q.toString(36)}function G(N,q,J,ue,he){var ye=typeof N;(ye==="undefined"||ye==="boolean")&&(N=null);var ge=!1;if(N===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(N.$$typeof){case e:case t:ge=!0}}if(ge)return ge=N,he=he(ge),N=ue===""?"."+L(ge,0):ue,W(he)?(J="",N!=null&&(J=N.replace(T,"$&/")+"/"),G(he,q,J,"",function(de){return de})):he!=null&&(R(he)&&(he=M(he,J+(!he.key||ge&&ge.key===he.key?"":(""+he.key).replace(T,"$&/")+"/")+N)),q.push(he)),1;if(ge=0,ue=ue===""?".":ue+":",W(N))for(var fe=0;fe<N.length;fe++){ye=N[fe];var ne=ue+L(ye,fe);ge+=G(ye,q,J,ne,he)}else if(ne=v(N),typeof ne=="function")for(N=ne.call(N),fe=0;!(ye=N.next()).done;)ye=ye.value,ne=ue+L(ye,fe++),ge+=G(ye,q,J,ne,he);else if(ye==="object")throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function U(N,q,J){if(N==null)return N;var ue=[],he=0;return G(N,ue,"","",function(ye){return q.call(J,ye,he++)}),ue}function K(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(J){(N._status===0||N._status===-1)&&(N._status=1,N._result=J)},function(J){(N._status===0||N._status===-1)&&(N._status=2,N._result=J)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var z={current:null},D={transition:null},Y={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:D,ReactCurrentOwner:O};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:U,forEach:function(N,q,J){U(N,function(){q.apply(this,arguments)},J)},count:function(N){var q=0;return U(N,function(){q++}),q},toArray:function(N){return U(N,function(q){return q})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Le.Component=g,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=_,Le.StrictMode=r,Le.Suspense=p,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Le.act=Q,Le.cloneElement=function(N,q,J){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ue=x({},N.props),he=N.key,ye=N.ref,ge=N._owner;if(q!=null){if(q.ref!==void 0&&(ye=q.ref,ge=O.current),q.key!==void 0&&(he=""+q.key),N.type&&N.type.defaultProps)var fe=N.type.defaultProps;for(ne in q)w.call(q,ne)&&!E.hasOwnProperty(ne)&&(ue[ne]=q[ne]===void 0&&fe!==void 0?fe[ne]:q[ne])}var ne=arguments.length-2;if(ne===1)ue.children=J;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:N.type,key:he,ref:ye,props:ue,_owner:ge}},Le.createContext=function(N){return N={$$typeof:s,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:i,_context:N},N.Consumer=N},Le.createElement=P,Le.createFactory=function(N){var q=P.bind(null,N);return q.type=N,q},Le.createRef=function(){return{current:null}},Le.forwardRef=function(N){return{$$typeof:l,render:N}},Le.isValidElement=R,Le.lazy=function(N){return{$$typeof:d,_payload:{_status:-1,_result:N},_init:K}},Le.memo=function(N,q){return{$$typeof:f,type:N,compare:q===void 0?null:q}},Le.startTransition=function(N){var q=D.transition;D.transition={};try{N()}finally{D.transition=q}},Le.unstable_act=Q,Le.useCallback=function(N,q){return z.current.useCallback(N,q)},Le.useContext=function(N){return z.current.useContext(N)},Le.useDebugValue=function(){},Le.useDeferredValue=function(N){return z.current.useDeferredValue(N)},Le.useEffect=function(N,q){return z.current.useEffect(N,q)},Le.useId=function(){return z.current.useId()},Le.useImperativeHandle=function(N,q,J){return z.current.useImperativeHandle(N,q,J)},Le.useInsertionEffect=function(N,q){return z.current.useInsertionEffect(N,q)},Le.useLayoutEffect=function(N,q){return z.current.useLayoutEffect(N,q)},Le.useMemo=function(N,q){return z.current.useMemo(N,q)},Le.useReducer=function(N,q,J){return z.current.useReducer(N,q,J)},Le.useRef=function(N){return z.current.useRef(N)},Le.useState=function(N){return z.current.useState(N)},Le.useSyncExternalStore=function(N,q,J){return z.current.useSyncExternalStore(N,q,J)},Le.useTransition=function(){return z.current.useTransition()},Le.version="18.3.1",Le}var rI;function ig(){return rI||(rI=1,d2.exports=tk()),d2.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI;function nk(){if(aI)return ju;aI=1;var e=ig(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(l,p,f){var d,h={},v=null,b=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(b=p.ref);for(d in p)r.call(p,d)&&!i.hasOwnProperty(d)&&(h[d]=p[d]);if(l&&l.defaultProps)for(d in p=l.defaultProps,p)h[d]===void 0&&(h[d]=p[d]);return{$$typeof:t,type:l,key:v,ref:b,props:h,_owner:a.current}}return ju.Fragment=n,ju.jsx=s,ju.jsxs=s,ju}var oI;function rk(){return oI||(oI=1,f2.exports=nk()),f2.exports}var k=rk(),sc={},h2={exports:{}},vn={},m2={exports:{}},v2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function ak(){return iI||(iI=1,(function(e){function t(D,Y){var Q=D.length;D.push(Y);e:for(;0<Q;){var N=Q-1>>>1,q=D[N];if(0<a(q,Y))D[N]=Y,D[Q]=q,Q=N;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Y=D[0],Q=D.pop();if(Q!==Y){D[0]=Q;e:for(var N=0,q=D.length,J=q>>>1;N<J;){var ue=2*(N+1)-1,he=D[ue],ye=ue+1,ge=D[ye];if(0>a(he,Q))ye<q&&0>a(ge,he)?(D[N]=ge,D[ye]=Q,N=ye):(D[N]=he,D[ue]=Q,N=ue);else if(ye<q&&0>a(ge,Q))D[N]=ge,D[ye]=Q,N=ye;else break e}}return Y}function a(D,Y){var Q=D.sortIndex-Y.sortIndex;return Q!==0?Q:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var p=[],f=[],d=1,h=null,v=3,b=!1,x=!1,I=!1,g=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(D){for(var Y=n(f);Y!==null;){if(Y.callback===null)r(f);else if(Y.startTime<=D)r(f),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=n(f)}}function W(D){if(I=!1,A(D),!x)if(n(p)!==null)x=!0,K(w);else{var Y=n(f);Y!==null&&z(W,Y.startTime-D)}}function w(D,Y){x=!1,I&&(I=!1,S(P),P=-1),b=!0;var Q=v;try{for(A(Y),h=n(p);h!==null&&(!(h.expirationTime>Y)||D&&!H());){var N=h.callback;if(typeof N=="function"){h.callback=null,v=h.priorityLevel;var q=N(h.expirationTime<=Y);Y=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(p)&&r(p),A(Y)}else r(p);h=n(p)}if(h!==null)var J=!0;else{var ue=n(f);ue!==null&&z(W,ue.startTime-Y),J=!1}return J}finally{h=null,v=Q,b=!1}}var O=!1,E=null,P=-1,M=5,R=-1;function H(){return!(e.unstable_now()-R<M)}function T(){if(E!==null){var D=e.unstable_now();R=D;var Y=!0;try{Y=E(!0,D)}finally{Y?L():(O=!1,E=null)}}else O=!1}var L;if(typeof _=="function")L=function(){_(T)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,U=G.port2;G.port1.onmessage=T,L=function(){U.postMessage(null)}}else L=function(){g(T,0)};function K(D){E=D,O||(O=!0,L())}function z(D,Y){P=g(function(){D(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,K(w))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(D){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var Q=v;v=Y;try{return D()}finally{v=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=v;v=D;try{return Y()}finally{v=Q}},e.unstable_scheduleCallback=function(D,Y,Q){var N=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?N+Q:N):Q=N,D){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Q+q,D={id:d++,callback:Y,priorityLevel:D,startTime:Q,expirationTime:q,sortIndex:-1},Q>N?(D.sortIndex=Q,t(f,D),n(p)===null&&D===n(f)&&(I?(S(P),P=-1):I=!0,z(W,Q-N))):(D.sortIndex=q,t(p,D),x||b||(x=!0,K(w))),D},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(D){var Y=v;return function(){var Q=v;v=Y;try{return D.apply(this,arguments)}finally{v=Q}}}})(v2)),v2}var uI;function ok(){return uI||(uI=1,m2.exports=ak()),m2.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI;function ik(){if(sI)return vn;sI=1;var e=ig(),t=ok();function n(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,c=1;c<arguments.length;c++)u+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},h={};function v(o){return p.call(h,o)?!0:p.call(d,o)?!1:f.test(o)?h[o]=!0:(d[o]=!0,!1)}function b(o,u,c,m){if(c!==null&&c.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return m?!1:c!==null?!c.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function x(o,u,c,m){if(u===null||typeof u>"u"||b(o,u,c,m))return!0;if(m)return!1;if(c!==null)switch(c.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,c,m,y,B,C){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=m,this.attributeNamespace=y,this.mustUseProperty=c,this.propertyName=o,this.type=u,this.sanitizeURL=B,this.removeEmptyString=C}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){g[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];g[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){g[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){g[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){g[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){g[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){g[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){g[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){g[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function _(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,_);g[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,_);g[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,_);g[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){g[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),g.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){g[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function A(o,u,c,m){var y=g.hasOwnProperty(u)?g[u]:null;(y!==null?y.type!==0:m||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(x(u,c,y,m)&&(c=null),m||y===null?v(u)&&(c===null?o.removeAttribute(u):o.setAttribute(u,""+c)):y.mustUseProperty?o[y.propertyName]=c===null?y.type===3?!1:"":c:(u=y.attributeName,m=y.attributeNamespace,c===null?o.removeAttribute(u):(y=y.type,c=y===3||y===4&&c===!0?"":""+c,m?o.setAttributeNS(m,u,c):o.setAttribute(u,c))))}var W=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),O=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),D=Symbol.iterator;function Y(o){return o===null||typeof o!="object"?null:(o=D&&o[D]||o["@@iterator"],typeof o=="function"?o:null)}var Q=Object.assign,N;function q(o){if(N===void 0)try{throw Error()}catch(c){var u=c.stack.trim().match(/\n( *(at )?)/);N=u&&u[1]||""}return`
`+N+o}var J=!1;function ue(o,u){if(!o||J)return"";J=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var m=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){m=te}o.call(u.prototype)}else{try{throw Error()}catch(te){m=te}o()}}catch(te){if(te&&m&&typeof te.stack=="string"){for(var y=te.stack.split(`
`),B=m.stack.split(`
`),C=y.length-1,$=B.length-1;1<=C&&0<=$&&y[C]!==B[$];)$--;for(;1<=C&&0<=$;C--,$--)if(y[C]!==B[$]){if(C!==1||$!==1)do if(C--,$--,0>$||y[C]!==B[$]){var F=`
`+y[C].replace(" at new "," at ");return o.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",o.displayName)),F}while(1<=C&&0<=$);break}}}finally{J=!1,Error.prepareStackTrace=c}return(o=o?o.displayName||o.name:"")?q(o):""}function he(o){switch(o.tag){case 5:return q(o.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ye(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case E:return"Fragment";case O:return"Portal";case M:return"Profiler";case P:return"StrictMode";case L:return"Suspense";case G:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case H:return(o.displayName||"Context")+".Consumer";case R:return(o._context.displayName||"Context")+".Provider";case T:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case U:return u=o.displayName||null,u!==null?u:ye(o.type)||"Memo";case K:u=o._payload,o=o._init;try{return ye(o(u))}catch{}}return null}function ge(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ne(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=ne(o)?"checked":"value",c=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),m=""+o[u];if(!o.hasOwnProperty(u)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var y=c.get,B=c.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return y.call(this)},set:function(C){m=""+C,B.call(this,C)}}),Object.defineProperty(o,u,{enumerable:c.enumerable}),{getValue:function(){return m},setValue:function(C){m=""+C},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function pe(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var c=u.getValue(),m="";return o&&(m=ne(o)?o.checked?"true":"false":o.value),o=m,o!==c?(u.setValue(o),!0):!1}function Re(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var c=u.checked;return Q({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??o._wrapperState.initialChecked})}function Ce(o,u){var c=u.defaultValue==null?"":u.defaultValue,m=u.checked!=null?u.checked:u.defaultChecked;c=fe(u.value!=null?u.value:c),o._wrapperState={initialChecked:m,initialValue:c,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function Ae(o,u){u=u.checked,u!=null&&A(o,"checked",u,!1)}function qe(o,u){Ae(o,u);var c=fe(u.value),m=u.type;if(c!=null)m==="number"?(c===0&&o.value===""||o.value!=c)&&(o.value=""+c):o.value!==""+c&&(o.value=""+c);else if(m==="submit"||m==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?Fe(o,u.type,c):u.hasOwnProperty("defaultValue")&&Fe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function He(o,u,c){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var m=u.type;if(!(m!=="submit"&&m!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,c||u===o.value||(o.value=u),o.defaultValue=u}c=o.name,c!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,c!==""&&(o.name=c)}function Fe(o,u,c){(u!=="number"||Re(o.ownerDocument)!==o)&&(c==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+c&&(o.defaultValue=""+c))}var Ke=Array.isArray;function Bt(o,u,c,m){if(o=o.options,u){u={};for(var y=0;y<c.length;y++)u["$"+c[y]]=!0;for(c=0;c<o.length;c++)y=u.hasOwnProperty("$"+o[c].value),o[c].selected!==y&&(o[c].selected=y),y&&m&&(o[c].defaultSelected=!0)}else{for(c=""+fe(c),u=null,y=0;y<o.length;y++){if(o[y].value===c){o[y].selected=!0,m&&(o[y].defaultSelected=!0);return}u!==null||o[y].disabled||(u=o[y])}u!==null&&(u.selected=!0)}}function vt(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return Q({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Wn(o,u){var c=u.value;if(c==null){if(c=u.children,u=u.defaultValue,c!=null){if(u!=null)throw Error(n(92));if(Ke(c)){if(1<c.length)throw Error(n(93));c=c[0]}u=c}u==null&&(u=""),c=u}o._wrapperState={initialValue:fe(c)}}function yt(o,u){var c=fe(u.value),m=fe(u.defaultValue);c!=null&&(c=""+c,c!==o.value&&(o.value=c),u.defaultValue==null&&o.defaultValue!==c&&(o.defaultValue=c)),m!=null&&(o.defaultValue=""+m)}function Kt(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function xt(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?xt(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var cn,_o=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,c,m,y){MSApp.execUnsafeLocalFunction(function(){return o(u,c,m,y)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(cn=cn||document.createElement("div"),cn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=cn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function ta(o,u){if(u){var c=o.firstChild;if(c&&c===o.lastChild&&c.nodeType===3){c.nodeValue=u;return}}o.textContent=u}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cn=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(o){Cn.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Mn[u]=Mn[o]})});function na(o,u,c){return u==null||typeof u=="boolean"||u===""?"":c||typeof u!="number"||u===0||Mn.hasOwnProperty(o)&&Mn[o]?(""+u).trim():u+"px"}function eu(o,u){o=o.style;for(var c in u)if(u.hasOwnProperty(c)){var m=c.indexOf("--")===0,y=na(c,u[c],m);c==="float"&&(c="cssFloat"),m?o.setProperty(c,y):o[c]=y}}var rM=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function w0(o,u){if(u){if(rM[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function P0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S0=null;function _0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var A0=null,Ao=null,Oo=null;function bb(o){if(o=xu(o)){if(typeof A0!="function")throw Error(n(280));var u=o.stateNode;u&&(u=xl(u),A0(o.stateNode,o.type,u))}}function Ib(o){Ao?Oo?Oo.push(o):Oo=[o]:Ao=o}function Bb(){if(Ao){var o=Ao,u=Oo;if(Oo=Ao=null,bb(o),u)for(o=0;o<u.length;o++)bb(u[o])}}function xb(o,u){return o(u)}function wb(){}var O0=!1;function Pb(o,u,c){if(O0)return o(u,c);O0=!0;try{return xb(o,u,c)}finally{O0=!1,(Ao!==null||Oo!==null)&&(wb(),Bb())}}function tu(o,u){var c=o.stateNode;if(c===null)return null;var m=xl(c);if(m===null)return null;c=m[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(o=o.type,m=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!m;break e;default:o=!1}if(o)return null;if(c&&typeof c!="function")throw Error(n(231,u,typeof c));return c}var W0=!1;if(l)try{var nu={};Object.defineProperty(nu,"passive",{get:function(){W0=!0}}),window.addEventListener("test",nu,nu),window.removeEventListener("test",nu,nu)}catch{W0=!1}function aM(o,u,c,m,y,B,C,$,F){var te=Array.prototype.slice.call(arguments,3);try{u.apply(c,te)}catch(ie){this.onError(ie)}}var ru=!1,el=null,tl=!1,M0=null,oM={onError:function(o){ru=!0,el=o}};function iM(o,u,c,m,y,B,C,$,F){ru=!1,el=null,aM.apply(oM,arguments)}function uM(o,u,c,m,y,B,C,$,F){if(iM.apply(this,arguments),ru){if(ru){var te=el;ru=!1,el=null}else throw Error(n(198));tl||(tl=!0,M0=te)}}function qa(o){var u=o,c=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(c=u.return),o=u.return;while(o)}return u.tag===3?c:null}function Sb(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function _b(o){if(qa(o)!==o)throw Error(n(188))}function sM(o){var u=o.alternate;if(!u){if(u=qa(o),u===null)throw Error(n(188));return u!==o?null:o}for(var c=o,m=u;;){var y=c.return;if(y===null)break;var B=y.alternate;if(B===null){if(m=y.return,m!==null){c=m;continue}break}if(y.child===B.child){for(B=y.child;B;){if(B===c)return _b(y),o;if(B===m)return _b(y),u;B=B.sibling}throw Error(n(188))}if(c.return!==m.return)c=y,m=B;else{for(var C=!1,$=y.child;$;){if($===c){C=!0,c=y,m=B;break}if($===m){C=!0,m=y,c=B;break}$=$.sibling}if(!C){for($=B.child;$;){if($===c){C=!0,c=B,m=y;break}if($===m){C=!0,m=B,c=y;break}$=$.sibling}if(!C)throw Error(n(189))}}if(c.alternate!==m)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?o:u}function Ab(o){return o=sM(o),o!==null?Ob(o):null}function Ob(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=Ob(o);if(u!==null)return u;o=o.sibling}return null}var Wb=t.unstable_scheduleCallback,Mb=t.unstable_cancelCallback,lM=t.unstable_shouldYield,cM=t.unstable_requestPaint,wt=t.unstable_now,pM=t.unstable_getCurrentPriorityLevel,C0=t.unstable_ImmediatePriority,Cb=t.unstable_UserBlockingPriority,nl=t.unstable_NormalPriority,fM=t.unstable_LowPriority,kb=t.unstable_IdlePriority,rl=null,cr=null;function dM(o){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(rl,o,void 0,(o.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:vM,hM=Math.log,mM=Math.LN2;function vM(o){return o>>>=0,o===0?32:31-(hM(o)/mM|0)|0}var al=64,ol=4194304;function au(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function il(o,u){var c=o.pendingLanes;if(c===0)return 0;var m=0,y=o.suspendedLanes,B=o.pingedLanes,C=c&268435455;if(C!==0){var $=C&~y;$!==0?m=au($):(B&=C,B!==0&&(m=au(B)))}else C=c&~y,C!==0?m=au(C):B!==0&&(m=au(B));if(m===0)return 0;if(u!==0&&u!==m&&(u&y)===0&&(y=m&-m,B=u&-u,y>=B||y===16&&(B&4194240)!==0))return u;if((m&4)!==0&&(m|=c&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=m;0<u;)c=31-Qn(u),y=1<<c,m|=o[c],u&=~y;return m}function yM(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gM(o,u){for(var c=o.suspendedLanes,m=o.pingedLanes,y=o.expirationTimes,B=o.pendingLanes;0<B;){var C=31-Qn(B),$=1<<C,F=y[C];F===-1?(($&c)===0||($&m)!==0)&&(y[C]=yM($,u)):F<=u&&(o.expiredLanes|=$),B&=~$}}function k0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Eb(){var o=al;return al<<=1,(al&4194240)===0&&(al=64),o}function E0(o){for(var u=[],c=0;31>c;c++)u.push(o);return u}function ou(o,u,c){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Qn(u),o[u]=c}function bM(o,u){var c=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var m=o.eventTimes;for(o=o.expirationTimes;0<c;){var y=31-Qn(c),B=1<<y;u[y]=0,m[y]=-1,o[y]=-1,c&=~B}}function T0(o,u){var c=o.entangledLanes|=u;for(o=o.entanglements;c;){var m=31-Qn(c),y=1<<m;y&u|o[m]&u&&(o[m]|=u),c&=~y}}var Ze=0;function Tb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Nb,N0,Rb,jb,Hb,R0=!1,ul=[],ra=null,aa=null,oa=null,iu=new Map,uu=new Map,ia=[],IM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Db(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":iu.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(u.pointerId)}}function su(o,u,c,m,y,B){return o===null||o.nativeEvent!==B?(o={blockedOn:u,domEventName:c,eventSystemFlags:m,nativeEvent:B,targetContainers:[y]},u!==null&&(u=xu(u),u!==null&&N0(u)),o):(o.eventSystemFlags|=m,u=o.targetContainers,y!==null&&u.indexOf(y)===-1&&u.push(y),o)}function BM(o,u,c,m,y){switch(u){case"focusin":return ra=su(ra,o,u,c,m,y),!0;case"dragenter":return aa=su(aa,o,u,c,m,y),!0;case"mouseover":return oa=su(oa,o,u,c,m,y),!0;case"pointerover":var B=y.pointerId;return iu.set(B,su(iu.get(B)||null,o,u,c,m,y)),!0;case"gotpointercapture":return B=y.pointerId,uu.set(B,su(uu.get(B)||null,o,u,c,m,y)),!0}return!1}function $b(o){var u=Fa(o.target);if(u!==null){var c=qa(u);if(c!==null){if(u=c.tag,u===13){if(u=Sb(c),u!==null){o.blockedOn=u,Hb(o.priority,function(){Rb(c)});return}}else if(u===3&&c.stateNode.current.memoizedState.isDehydrated){o.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}o.blockedOn=null}function sl(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var c=H0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(c===null){c=o.nativeEvent;var m=new c.constructor(c.type,c);S0=m,c.target.dispatchEvent(m),S0=null}else return u=xu(c),u!==null&&N0(u),o.blockedOn=c,!1;u.shift()}return!0}function Lb(o,u,c){sl(o)&&c.delete(u)}function xM(){R0=!1,ra!==null&&sl(ra)&&(ra=null),aa!==null&&sl(aa)&&(aa=null),oa!==null&&sl(oa)&&(oa=null),iu.forEach(Lb),uu.forEach(Lb)}function lu(o,u){o.blockedOn===u&&(o.blockedOn=null,R0||(R0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,xM)))}function cu(o){function u(y){return lu(y,o)}if(0<ul.length){lu(ul[0],o);for(var c=1;c<ul.length;c++){var m=ul[c];m.blockedOn===o&&(m.blockedOn=null)}}for(ra!==null&&lu(ra,o),aa!==null&&lu(aa,o),oa!==null&&lu(oa,o),iu.forEach(u),uu.forEach(u),c=0;c<ia.length;c++)m=ia[c],m.blockedOn===o&&(m.blockedOn=null);for(;0<ia.length&&(c=ia[0],c.blockedOn===null);)$b(c),c.blockedOn===null&&ia.shift()}var Wo=W.ReactCurrentBatchConfig,ll=!0;function wM(o,u,c,m){var y=Ze,B=Wo.transition;Wo.transition=null;try{Ze=1,j0(o,u,c,m)}finally{Ze=y,Wo.transition=B}}function PM(o,u,c,m){var y=Ze,B=Wo.transition;Wo.transition=null;try{Ze=4,j0(o,u,c,m)}finally{Ze=y,Wo.transition=B}}function j0(o,u,c,m){if(ll){var y=H0(o,u,c,m);if(y===null)tf(o,u,m,cl,c),Db(o,m);else if(BM(y,o,u,c,m))m.stopPropagation();else if(Db(o,m),u&4&&-1<IM.indexOf(o)){for(;y!==null;){var B=xu(y);if(B!==null&&Nb(B),B=H0(o,u,c,m),B===null&&tf(o,u,m,cl,c),B===y)break;y=B}y!==null&&m.stopPropagation()}else tf(o,u,m,null,c)}}var cl=null;function H0(o,u,c,m){if(cl=null,o=_0(m),o=Fa(o),o!==null)if(u=qa(o),u===null)o=null;else if(c=u.tag,c===13){if(o=Sb(u),o!==null)return o;o=null}else if(c===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return cl=o,null}function qb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pM()){case C0:return 1;case Cb:return 4;case nl:case fM:return 16;case kb:return 536870912;default:return 16}default:return 16}}var ua=null,D0=null,pl=null;function Fb(){if(pl)return pl;var o,u=D0,c=u.length,m,y="value"in ua?ua.value:ua.textContent,B=y.length;for(o=0;o<c&&u[o]===y[o];o++);var C=c-o;for(m=1;m<=C&&u[c-m]===y[B-m];m++);return pl=y.slice(o,1<m?1-m:void 0)}function fl(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function dl(){return!0}function zb(){return!1}function bn(o){function u(c,m,y,B,C){this._reactName=c,this._targetInst=y,this.type=m,this.nativeEvent=B,this.target=C,this.currentTarget=null;for(var $ in o)o.hasOwnProperty($)&&(c=o[$],this[$]=c?c(B):B[$]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?dl:zb,this.isPropagationStopped=zb,this}return Q(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),u}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$0=bn(Mo),pu=Q({},Mo,{view:0,detail:0}),SM=bn(pu),L0,q0,fu,hl=Q({},pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:z0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==fu&&(fu&&o.type==="mousemove"?(L0=o.screenX-fu.screenX,q0=o.screenY-fu.screenY):q0=L0=0,fu=o),L0)},movementY:function(o){return"movementY"in o?o.movementY:q0}}),Ub=bn(hl),_M=Q({},hl,{dataTransfer:0}),AM=bn(_M),OM=Q({},pu,{relatedTarget:0}),F0=bn(OM),WM=Q({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),MM=bn(WM),CM=Q({},Mo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),kM=bn(CM),EM=Q({},Mo,{data:0}),Vb=bn(EM),TM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jM(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=RM[o])?!!u[o]:!1}function z0(){return jM}var HM=Q({},pu,{key:function(o){if(o.key){var u=TM[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=fl(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?NM[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:z0,charCode:function(o){return o.type==="keypress"?fl(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?fl(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),DM=bn(HM),$M=Q({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gb=bn($M),LM=Q({},pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:z0}),qM=bn(LM),FM=Q({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),zM=bn(FM),UM=Q({},hl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),VM=bn(UM),GM=[9,13,27,32],U0=l&&"CompositionEvent"in window,du=null;l&&"documentMode"in document&&(du=document.documentMode);var KM=l&&"TextEvent"in window&&!du,Kb=l&&(!U0||du&&8<du&&11>=du),Yb=" ",Qb=!1;function Xb(o,u){switch(o){case"keyup":return GM.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zb(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function YM(o,u){switch(o){case"compositionend":return Zb(u);case"keypress":return u.which!==32?null:(Qb=!0,Yb);case"textInput":return o=u.data,o===Yb&&Qb?null:o;default:return null}}function QM(o,u){if(Co)return o==="compositionend"||!U0&&Xb(o,u)?(o=Fb(),pl=D0=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Kb&&u.locale!=="ko"?null:u.data;default:return null}}var XM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jb(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!XM[o.type]:u==="textarea"}function e1(o,u,c,m){Ib(m),u=bl(u,"onChange"),0<u.length&&(c=new $0("onChange","change",null,c,m),o.push({event:c,listeners:u}))}var hu=null,mu=null;function ZM(o){g1(o,0)}function ml(o){var u=Ro(o);if(re(u))return o}function JM(o,u){if(o==="change")return u}var t1=!1;if(l){var V0;if(l){var G0="oninput"in document;if(!G0){var n1=document.createElement("div");n1.setAttribute("oninput","return;"),G0=typeof n1.oninput=="function"}V0=G0}else V0=!1;t1=V0&&(!document.documentMode||9<document.documentMode)}function r1(){hu&&(hu.detachEvent("onpropertychange",a1),mu=hu=null)}function a1(o){if(o.propertyName==="value"&&ml(mu)){var u=[];e1(u,mu,o,_0(o)),Pb(ZM,u)}}function eC(o,u,c){o==="focusin"?(r1(),hu=u,mu=c,hu.attachEvent("onpropertychange",a1)):o==="focusout"&&r1()}function tC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return ml(mu)}function nC(o,u){if(o==="click")return ml(u)}function rC(o,u){if(o==="input"||o==="change")return ml(u)}function aC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Xn=typeof Object.is=="function"?Object.is:aC;function vu(o,u){if(Xn(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var c=Object.keys(o),m=Object.keys(u);if(c.length!==m.length)return!1;for(m=0;m<c.length;m++){var y=c[m];if(!p.call(u,y)||!Xn(o[y],u[y]))return!1}return!0}function o1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function i1(o,u){var c=o1(o);o=0;for(var m;c;){if(c.nodeType===3){if(m=o+c.textContent.length,o<=u&&m>=u)return{node:c,offset:u-o};o=m}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=o1(c)}}function u1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?u1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function s1(){for(var o=window,u=Re();u instanceof o.HTMLIFrameElement;){try{var c=typeof u.contentWindow.location.href=="string"}catch{c=!1}if(c)o=u.contentWindow;else break;u=Re(o.document)}return u}function K0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function oC(o){var u=s1(),c=o.focusedElem,m=o.selectionRange;if(u!==c&&c&&c.ownerDocument&&u1(c.ownerDocument.documentElement,c)){if(m!==null&&K0(c)){if(u=m.start,o=m.end,o===void 0&&(o=u),"selectionStart"in c)c.selectionStart=u,c.selectionEnd=Math.min(o,c.value.length);else if(o=(u=c.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var y=c.textContent.length,B=Math.min(m.start,y);m=m.end===void 0?B:Math.min(m.end,y),!o.extend&&B>m&&(y=m,m=B,B=y),y=i1(c,B);var C=i1(c,m);y&&C&&(o.rangeCount!==1||o.anchorNode!==y.node||o.anchorOffset!==y.offset||o.focusNode!==C.node||o.focusOffset!==C.offset)&&(u=u.createRange(),u.setStart(y.node,y.offset),o.removeAllRanges(),B>m?(o.addRange(u),o.extend(C.node,C.offset)):(u.setEnd(C.node,C.offset),o.addRange(u)))}}for(u=[],o=c;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<u.length;c++)o=u[c],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var iC=l&&"documentMode"in document&&11>=document.documentMode,ko=null,Y0=null,yu=null,Q0=!1;function l1(o,u,c){var m=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Q0||ko==null||ko!==Re(m)||(m=ko,"selectionStart"in m&&K0(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),yu&&vu(yu,m)||(yu=m,m=bl(Y0,"onSelect"),0<m.length&&(u=new $0("onSelect","select",null,u,c),o.push({event:u,listeners:m}),u.target=ko)))}function vl(o,u){var c={};return c[o.toLowerCase()]=u.toLowerCase(),c["Webkit"+o]="webkit"+u,c["Moz"+o]="moz"+u,c}var Eo={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},X0={},c1={};l&&(c1=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function yl(o){if(X0[o])return X0[o];if(!Eo[o])return o;var u=Eo[o],c;for(c in u)if(u.hasOwnProperty(c)&&c in c1)return X0[o]=u[c];return o}var p1=yl("animationend"),f1=yl("animationiteration"),d1=yl("animationstart"),h1=yl("transitionend"),m1=new Map,v1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){m1.set(o,u),i(u,[o])}for(var Z0=0;Z0<v1.length;Z0++){var J0=v1[Z0],uC=J0.toLowerCase(),sC=J0[0].toUpperCase()+J0.slice(1);sa(uC,"on"+sC)}sa(p1,"onAnimationEnd"),sa(f1,"onAnimationIteration"),sa(d1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(h1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lC=new Set("cancel close invalid load scroll toggle".split(" ").concat(gu));function y1(o,u,c){var m=o.type||"unknown-event";o.currentTarget=c,uM(m,u,void 0,o),o.currentTarget=null}function g1(o,u){u=(u&4)!==0;for(var c=0;c<o.length;c++){var m=o[c],y=m.event;m=m.listeners;e:{var B=void 0;if(u)for(var C=m.length-1;0<=C;C--){var $=m[C],F=$.instance,te=$.currentTarget;if($=$.listener,F!==B&&y.isPropagationStopped())break e;y1(y,$,te),B=F}else for(C=0;C<m.length;C++){if($=m[C],F=$.instance,te=$.currentTarget,$=$.listener,F!==B&&y.isPropagationStopped())break e;y1(y,$,te),B=F}}}if(tl)throw o=M0,tl=!1,M0=null,o}function it(o,u){var c=u[sf];c===void 0&&(c=u[sf]=new Set);var m=o+"__bubble";c.has(m)||(b1(u,o,2,!1),c.add(m))}function ef(o,u,c){var m=0;u&&(m|=4),b1(c,o,m,u)}var gl="_reactListening"+Math.random().toString(36).slice(2);function bu(o){if(!o[gl]){o[gl]=!0,r.forEach(function(c){c!=="selectionchange"&&(lC.has(c)||ef(c,!1,o),ef(c,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[gl]||(u[gl]=!0,ef("selectionchange",!1,u))}}function b1(o,u,c,m){switch(qb(u)){case 1:var y=wM;break;case 4:y=PM;break;default:y=j0}c=y.bind(null,u,c,o),y=void 0,!W0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(y=!0),m?y!==void 0?o.addEventListener(u,c,{capture:!0,passive:y}):o.addEventListener(u,c,!0):y!==void 0?o.addEventListener(u,c,{passive:y}):o.addEventListener(u,c,!1)}function tf(o,u,c,m,y){var B=m;if((u&1)===0&&(u&2)===0&&m!==null)e:for(;;){if(m===null)return;var C=m.tag;if(C===3||C===4){var $=m.stateNode.containerInfo;if($===y||$.nodeType===8&&$.parentNode===y)break;if(C===4)for(C=m.return;C!==null;){var F=C.tag;if((F===3||F===4)&&(F=C.stateNode.containerInfo,F===y||F.nodeType===8&&F.parentNode===y))return;C=C.return}for(;$!==null;){if(C=Fa($),C===null)return;if(F=C.tag,F===5||F===6){m=B=C;continue e}$=$.parentNode}}m=m.return}Pb(function(){var te=B,ie=_0(c),se=[];e:{var oe=m1.get(o);if(oe!==void 0){var me=$0,Be=o;switch(o){case"keypress":if(fl(c)===0)break e;case"keydown":case"keyup":me=DM;break;case"focusin":Be="focus",me=F0;break;case"focusout":Be="blur",me=F0;break;case"beforeblur":case"afterblur":me=F0;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Ub;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=AM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=qM;break;case p1:case f1:case d1:me=MM;break;case h1:me=zM;break;case"scroll":me=SM;break;case"wheel":me=VM;break;case"copy":case"cut":case"paste":me=kM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Gb}var Se=(u&4)!==0,Pt=!Se&&o==="scroll",Z=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var V=te,ee;V!==null;){ee=V;var ce=ee.stateNode;if(ee.tag===5&&ce!==null&&(ee=ce,Z!==null&&(ce=tu(V,Z),ce!=null&&Se.push(Iu(V,ce,ee)))),Pt)break;V=V.return}0<Se.length&&(oe=new me(oe,Be,null,c,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",me=o==="mouseout"||o==="pointerout",oe&&c!==S0&&(Be=c.relatedTarget||c.fromElement)&&(Fa(Be)||Be[Or]))break e;if((me||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Be=c.relatedTarget||c.toElement,me=te,Be=Be?Fa(Be):null,Be!==null&&(Pt=qa(Be),Be!==Pt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(me=null,Be=te),me!==Be)){if(Se=Ub,ce="onMouseLeave",Z="onMouseEnter",V="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Gb,ce="onPointerLeave",Z="onPointerEnter",V="pointer"),Pt=me==null?oe:Ro(me),ee=Be==null?oe:Ro(Be),oe=new Se(ce,V+"leave",me,c,ie),oe.target=Pt,oe.relatedTarget=ee,ce=null,Fa(ie)===te&&(Se=new Se(Z,V+"enter",Be,c,ie),Se.target=ee,Se.relatedTarget=Pt,ce=Se),Pt=ce,me&&Be)t:{for(Se=me,Z=Be,V=0,ee=Se;ee;ee=To(ee))V++;for(ee=0,ce=Z;ce;ce=To(ce))ee++;for(;0<V-ee;)Se=To(Se),V--;for(;0<ee-V;)Z=To(Z),ee--;for(;V--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=To(Se),Z=To(Z)}Se=null}else Se=null;me!==null&&I1(se,oe,me,Se,!1),Be!==null&&Pt!==null&&I1(se,Pt,Be,Se,!0)}}e:{if(oe=te?Ro(te):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var Oe=JM;else if(Jb(oe))if(t1)Oe=rC;else{Oe=tC;var We=eC}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(Oe=nC);if(Oe&&(Oe=Oe(o,te))){e1(se,Oe,c,ie);break e}We&&We(o,oe,te),o==="focusout"&&(We=oe._wrapperState)&&We.controlled&&oe.type==="number"&&Fe(oe,"number",oe.value)}switch(We=te?Ro(te):window,o){case"focusin":(Jb(We)||We.contentEditable==="true")&&(ko=We,Y0=te,yu=null);break;case"focusout":yu=Y0=ko=null;break;case"mousedown":Q0=!0;break;case"contextmenu":case"mouseup":case"dragend":Q0=!1,l1(se,c,ie);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":l1(se,c,ie)}var Me;if(U0)e:{switch(o){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Co?Xb(o,c)&&(Ne="onCompositionEnd"):o==="keydown"&&c.keyCode===229&&(Ne="onCompositionStart");Ne&&(Kb&&c.locale!=="ko"&&(Co||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Co&&(Me=Fb()):(ua=ie,D0="value"in ua?ua.value:ua.textContent,Co=!0)),We=bl(te,Ne),0<We.length&&(Ne=new Vb(Ne,o,null,c,ie),se.push({event:Ne,listeners:We}),Me?Ne.data=Me:(Me=Zb(c),Me!==null&&(Ne.data=Me)))),(Me=KM?YM(o,c):QM(o,c))&&(te=bl(te,"onBeforeInput"),0<te.length&&(ie=new Vb("onBeforeInput","beforeinput",null,c,ie),se.push({event:ie,listeners:te}),ie.data=Me))}g1(se,u)})}function Iu(o,u,c){return{instance:o,listener:u,currentTarget:c}}function bl(o,u){for(var c=u+"Capture",m=[];o!==null;){var y=o,B=y.stateNode;y.tag===5&&B!==null&&(y=B,B=tu(o,c),B!=null&&m.unshift(Iu(o,B,y)),B=tu(o,u),B!=null&&m.push(Iu(o,B,y))),o=o.return}return m}function To(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function I1(o,u,c,m,y){for(var B=u._reactName,C=[];c!==null&&c!==m;){var $=c,F=$.alternate,te=$.stateNode;if(F!==null&&F===m)break;$.tag===5&&te!==null&&($=te,y?(F=tu(c,B),F!=null&&C.unshift(Iu(c,F,$))):y||(F=tu(c,B),F!=null&&C.push(Iu(c,F,$)))),c=c.return}C.length!==0&&o.push({event:u,listeners:C})}var cC=/\r\n?/g,pC=/\u0000|\uFFFD/g;function B1(o){return(typeof o=="string"?o:""+o).replace(cC,`
`).replace(pC,"")}function Il(o,u,c){if(u=B1(u),B1(o)!==u&&c)throw Error(n(425))}function Bl(){}var nf=null,rf=null;function af(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,fC=typeof clearTimeout=="function"?clearTimeout:void 0,x1=typeof Promise=="function"?Promise:void 0,dC=typeof queueMicrotask=="function"?queueMicrotask:typeof x1<"u"?function(o){return x1.resolve(null).then(o).catch(hC)}:of;function hC(o){setTimeout(function(){throw o})}function uf(o,u){var c=u,m=0;do{var y=c.nextSibling;if(o.removeChild(c),y&&y.nodeType===8)if(c=y.data,c==="/$"){if(m===0){o.removeChild(y),cu(u);return}m--}else c!=="$"&&c!=="$?"&&c!=="$!"||m++;c=y}while(c);cu(u)}function la(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function w1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var c=o.data;if(c==="$"||c==="$!"||c==="$?"){if(u===0)return o;u--}else c==="/$"&&u++}o=o.previousSibling}return null}var No=Math.random().toString(36).slice(2),pr="__reactFiber$"+No,Bu="__reactProps$"+No,Or="__reactContainer$"+No,sf="__reactEvents$"+No,mC="__reactListeners$"+No,vC="__reactHandles$"+No;function Fa(o){var u=o[pr];if(u)return u;for(var c=o.parentNode;c;){if(u=c[Or]||c[pr]){if(c=u.alternate,u.child!==null||c!==null&&c.child!==null)for(o=w1(o);o!==null;){if(c=o[pr])return c;o=w1(o)}return u}o=c,c=o.parentNode}return null}function xu(o){return o=o[pr]||o[Or],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Ro(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function xl(o){return o[Bu]||null}var lf=[],jo=-1;function ca(o){return{current:o}}function ut(o){0>jo||(o.current=lf[jo],lf[jo]=null,jo--)}function nt(o,u){jo++,lf[jo]=o.current,o.current=u}var pa={},Yt=ca(pa),pn=ca(!1),za=pa;function Ho(o,u){var c=o.type.contextTypes;if(!c)return pa;var m=o.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===u)return m.__reactInternalMemoizedMaskedChildContext;var y={},B;for(B in c)y[B]=u[B];return m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=y),y}function fn(o){return o=o.childContextTypes,o!=null}function wl(){ut(pn),ut(Yt)}function P1(o,u,c){if(Yt.current!==pa)throw Error(n(168));nt(Yt,u),nt(pn,c)}function S1(o,u,c){var m=o.stateNode;if(u=u.childContextTypes,typeof m.getChildContext!="function")return c;m=m.getChildContext();for(var y in m)if(!(y in u))throw Error(n(108,ge(o)||"Unknown",y));return Q({},c,m)}function Pl(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||pa,za=Yt.current,nt(Yt,o),nt(pn,pn.current),!0}function _1(o,u,c){var m=o.stateNode;if(!m)throw Error(n(169));c?(o=S1(o,u,za),m.__reactInternalMemoizedMergedChildContext=o,ut(pn),ut(Yt),nt(Yt,o)):ut(pn),nt(pn,c)}var Wr=null,Sl=!1,cf=!1;function A1(o){Wr===null?Wr=[o]:Wr.push(o)}function yC(o){Sl=!0,A1(o)}function fa(){if(!cf&&Wr!==null){cf=!0;var o=0,u=Ze;try{var c=Wr;for(Ze=1;o<c.length;o++){var m=c[o];do m=m(!0);while(m!==null)}Wr=null,Sl=!1}catch(y){throw Wr!==null&&(Wr=Wr.slice(o+1)),Wb(C0,fa),y}finally{Ze=u,cf=!1}}return null}var Do=[],$o=0,_l=null,Al=0,kn=[],En=0,Ua=null,Mr=1,Cr="";function Va(o,u){Do[$o++]=Al,Do[$o++]=_l,_l=o,Al=u}function O1(o,u,c){kn[En++]=Mr,kn[En++]=Cr,kn[En++]=Ua,Ua=o;var m=Mr;o=Cr;var y=32-Qn(m)-1;m&=~(1<<y),c+=1;var B=32-Qn(u)+y;if(30<B){var C=y-y%5;B=(m&(1<<C)-1).toString(32),m>>=C,y-=C,Mr=1<<32-Qn(u)+y|c<<y|m,Cr=B+o}else Mr=1<<B|c<<y|m,Cr=o}function pf(o){o.return!==null&&(Va(o,1),O1(o,1,0))}function ff(o){for(;o===_l;)_l=Do[--$o],Do[$o]=null,Al=Do[--$o],Do[$o]=null;for(;o===Ua;)Ua=kn[--En],kn[En]=null,Cr=kn[--En],kn[En]=null,Mr=kn[--En],kn[En]=null}var In=null,Bn=null,ct=!1,Zn=null;function W1(o,u){var c=jn(5,null,null,0);c.elementType="DELETED",c.stateNode=u,c.return=o,u=o.deletions,u===null?(o.deletions=[c],o.flags|=16):u.push(c)}function M1(o,u){switch(o.tag){case 5:var c=o.type;return u=u.nodeType!==1||c.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,In=o,Bn=la(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,In=o,Bn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(c=Ua!==null?{id:Mr,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:c,retryLane:1073741824},c=jn(18,null,null,0),c.stateNode=u,c.return=o,o.child=c,In=o,Bn=null,!0):!1;default:return!1}}function df(o){return(o.mode&1)!==0&&(o.flags&128)===0}function hf(o){if(ct){var u=Bn;if(u){var c=u;if(!M1(o,u)){if(df(o))throw Error(n(418));u=la(c.nextSibling);var m=In;u&&M1(o,u)?W1(m,c):(o.flags=o.flags&-4097|2,ct=!1,In=o)}}else{if(df(o))throw Error(n(418));o.flags=o.flags&-4097|2,ct=!1,In=o}}}function C1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;In=o}function Ol(o){if(o!==In)return!1;if(!ct)return C1(o),ct=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!af(o.type,o.memoizedProps)),u&&(u=Bn)){if(df(o))throw k1(),Error(n(418));for(;u;)W1(o,u),u=la(u.nextSibling)}if(C1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var c=o.data;if(c==="/$"){if(u===0){Bn=la(o.nextSibling);break e}u--}else c!=="$"&&c!=="$!"&&c!=="$?"||u++}o=o.nextSibling}Bn=null}}else Bn=In?la(o.stateNode.nextSibling):null;return!0}function k1(){for(var o=Bn;o;)o=la(o.nextSibling)}function Lo(){Bn=In=null,ct=!1}function mf(o){Zn===null?Zn=[o]:Zn.push(o)}var gC=W.ReactCurrentBatchConfig;function wu(o,u,c){if(o=c.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var m=c.stateNode}if(!m)throw Error(n(147,o));var y=m,B=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===B?u.ref:(u=function(C){var $=y.refs;C===null?delete $[B]:$[B]=C},u._stringRef=B,u)}if(typeof o!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,o))}return o}function Wl(o,u){throw o=Object.prototype.toString.call(u),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function E1(o){var u=o._init;return u(o._payload)}function T1(o){function u(Z,V){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[V],Z.flags|=16):ee.push(V)}}function c(Z,V){if(!o)return null;for(;V!==null;)u(Z,V),V=V.sibling;return null}function m(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function y(Z,V){return Z=Ia(Z,V),Z.index=0,Z.sibling=null,Z}function B(Z,V,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<V?(Z.flags|=2,V):ee):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function C(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function $(Z,V,ee,ce){return V===null||V.tag!==6?(V=i2(ee,Z.mode,ce),V.return=Z,V):(V=y(V,ee),V.return=Z,V)}function F(Z,V,ee,ce){var Oe=ee.type;return Oe===E?ie(Z,V,ee.props.children,ce,ee.key):V!==null&&(V.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===K&&E1(Oe)===V.type)?(ce=y(V,ee.props),ce.ref=wu(Z,V,ee),ce.return=Z,ce):(ce=Jl(ee.type,ee.key,ee.props,null,Z.mode,ce),ce.ref=wu(Z,V,ee),ce.return=Z,ce)}function te(Z,V,ee,ce){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=u2(ee,Z.mode,ce),V.return=Z,V):(V=y(V,ee.children||[]),V.return=Z,V)}function ie(Z,V,ee,ce,Oe){return V===null||V.tag!==7?(V=eo(ee,Z.mode,ce,Oe),V.return=Z,V):(V=y(V,ee),V.return=Z,V)}function se(Z,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=i2(""+V,Z.mode,ee),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return ee=Jl(V.type,V.key,V.props,null,Z.mode,ee),ee.ref=wu(Z,null,V),ee.return=Z,ee;case O:return V=u2(V,Z.mode,ee),V.return=Z,V;case K:var ce=V._init;return se(Z,ce(V._payload),ee)}if(Ke(V)||Y(V))return V=eo(V,Z.mode,ee,null),V.return=Z,V;Wl(Z,V)}return null}function oe(Z,V,ee,ce){var Oe=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Oe!==null?null:$(Z,V,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===Oe?F(Z,V,ee,ce):null;case O:return ee.key===Oe?te(Z,V,ee,ce):null;case K:return Oe=ee._init,oe(Z,V,Oe(ee._payload),ce)}if(Ke(ee)||Y(ee))return Oe!==null?null:ie(Z,V,ee,ce,null);Wl(Z,ee)}return null}function me(Z,V,ee,ce,Oe){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return Z=Z.get(ee)||null,$(V,Z,""+ce,Oe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:return Z=Z.get(ce.key===null?ee:ce.key)||null,F(V,Z,ce,Oe);case O:return Z=Z.get(ce.key===null?ee:ce.key)||null,te(V,Z,ce,Oe);case K:var We=ce._init;return me(Z,V,ee,We(ce._payload),Oe)}if(Ke(ce)||Y(ce))return Z=Z.get(ee)||null,ie(V,Z,ce,Oe,null);Wl(V,ce)}return null}function Be(Z,V,ee,ce){for(var Oe=null,We=null,Me=V,Ne=V=0,Lt=null;Me!==null&&Ne<ee.length;Ne++){Me.index>Ne?(Lt=Me,Me=null):Lt=Me.sibling;var Ue=oe(Z,Me,ee[Ne],ce);if(Ue===null){Me===null&&(Me=Lt);break}o&&Me&&Ue.alternate===null&&u(Z,Me),V=B(Ue,V,Ne),We===null?Oe=Ue:We.sibling=Ue,We=Ue,Me=Lt}if(Ne===ee.length)return c(Z,Me),ct&&Va(Z,Ne),Oe;if(Me===null){for(;Ne<ee.length;Ne++)Me=se(Z,ee[Ne],ce),Me!==null&&(V=B(Me,V,Ne),We===null?Oe=Me:We.sibling=Me,We=Me);return ct&&Va(Z,Ne),Oe}for(Me=m(Z,Me);Ne<ee.length;Ne++)Lt=me(Me,Z,Ne,ee[Ne],ce),Lt!==null&&(o&&Lt.alternate!==null&&Me.delete(Lt.key===null?Ne:Lt.key),V=B(Lt,V,Ne),We===null?Oe=Lt:We.sibling=Lt,We=Lt);return o&&Me.forEach(function(Ba){return u(Z,Ba)}),ct&&Va(Z,Ne),Oe}function Se(Z,V,ee,ce){var Oe=Y(ee);if(typeof Oe!="function")throw Error(n(150));if(ee=Oe.call(ee),ee==null)throw Error(n(151));for(var We=Oe=null,Me=V,Ne=V=0,Lt=null,Ue=ee.next();Me!==null&&!Ue.done;Ne++,Ue=ee.next()){Me.index>Ne?(Lt=Me,Me=null):Lt=Me.sibling;var Ba=oe(Z,Me,Ue.value,ce);if(Ba===null){Me===null&&(Me=Lt);break}o&&Me&&Ba.alternate===null&&u(Z,Me),V=B(Ba,V,Ne),We===null?Oe=Ba:We.sibling=Ba,We=Ba,Me=Lt}if(Ue.done)return c(Z,Me),ct&&Va(Z,Ne),Oe;if(Me===null){for(;!Ue.done;Ne++,Ue=ee.next())Ue=se(Z,Ue.value,ce),Ue!==null&&(V=B(Ue,V,Ne),We===null?Oe=Ue:We.sibling=Ue,We=Ue);return ct&&Va(Z,Ne),Oe}for(Me=m(Z,Me);!Ue.done;Ne++,Ue=ee.next())Ue=me(Me,Z,Ne,Ue.value,ce),Ue!==null&&(o&&Ue.alternate!==null&&Me.delete(Ue.key===null?Ne:Ue.key),V=B(Ue,V,Ne),We===null?Oe=Ue:We.sibling=Ue,We=Ue);return o&&Me.forEach(function(XC){return u(Z,XC)}),ct&&Va(Z,Ne),Oe}function Pt(Z,V,ee,ce){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var Oe=ee.key,We=V;We!==null;){if(We.key===Oe){if(Oe=ee.type,Oe===E){if(We.tag===7){c(Z,We.sibling),V=y(We,ee.props.children),V.return=Z,Z=V;break e}}else if(We.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===K&&E1(Oe)===We.type){c(Z,We.sibling),V=y(We,ee.props),V.ref=wu(Z,We,ee),V.return=Z,Z=V;break e}c(Z,We);break}else u(Z,We);We=We.sibling}ee.type===E?(V=eo(ee.props.children,Z.mode,ce,ee.key),V.return=Z,Z=V):(ce=Jl(ee.type,ee.key,ee.props,null,Z.mode,ce),ce.ref=wu(Z,V,ee),ce.return=Z,Z=ce)}return C(Z);case O:e:{for(We=ee.key;V!==null;){if(V.key===We)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){c(Z,V.sibling),V=y(V,ee.children||[]),V.return=Z,Z=V;break e}else{c(Z,V);break}else u(Z,V);V=V.sibling}V=u2(ee,Z.mode,ce),V.return=Z,Z=V}return C(Z);case K:return We=ee._init,Pt(Z,V,We(ee._payload),ce)}if(Ke(ee))return Be(Z,V,ee,ce);if(Y(ee))return Se(Z,V,ee,ce);Wl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(c(Z,V.sibling),V=y(V,ee),V.return=Z,Z=V):(c(Z,V),V=i2(ee,Z.mode,ce),V.return=Z,Z=V),C(Z)):c(Z,V)}return Pt}var qo=T1(!0),N1=T1(!1),Ml=ca(null),Cl=null,Fo=null,vf=null;function yf(){vf=Fo=Cl=null}function gf(o){var u=Ml.current;ut(Ml),o._currentValue=u}function bf(o,u,c){for(;o!==null;){var m=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,m!==null&&(m.childLanes|=u)):m!==null&&(m.childLanes&u)!==u&&(m.childLanes|=u),o===c)break;o=o.return}}function zo(o,u){Cl=o,vf=Fo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dn=!0),o.firstContext=null)}function Tn(o){var u=o._currentValue;if(vf!==o)if(o={context:o,memoizedValue:u,next:null},Fo===null){if(Cl===null)throw Error(n(308));Fo=o,Cl.dependencies={lanes:0,firstContext:o}}else Fo=Fo.next=o;return u}var Ga=null;function If(o){Ga===null?Ga=[o]:Ga.push(o)}function R1(o,u,c,m){var y=u.interleaved;return y===null?(c.next=c,If(u)):(c.next=y.next,y.next=c),u.interleaved=c,kr(o,m)}function kr(o,u){o.lanes|=u;var c=o.alternate;for(c!==null&&(c.lanes|=u),c=o,o=o.return;o!==null;)o.childLanes|=u,c=o.alternate,c!==null&&(c.childLanes|=u),c=o,o=o.return;return c.tag===3?c.stateNode:null}var da=!1;function Bf(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Er(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(o,u,c){var m=o.updateQueue;if(m===null)return null;if(m=m.shared,(ze&2)!==0){var y=m.pending;return y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u,kr(o,c)}return y=m.interleaved,y===null?(u.next=u,If(m)):(u.next=y.next,y.next=u),m.interleaved=u,kr(o,c)}function kl(o,u,c){if(u=u.updateQueue,u!==null&&(u=u.shared,(c&4194240)!==0)){var m=u.lanes;m&=o.pendingLanes,c|=m,u.lanes=c,T0(o,c)}}function H1(o,u){var c=o.updateQueue,m=o.alternate;if(m!==null&&(m=m.updateQueue,c===m)){var y=null,B=null;if(c=c.firstBaseUpdate,c!==null){do{var C={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};B===null?y=B=C:B=B.next=C,c=c.next}while(c!==null);B===null?y=B=u:B=B.next=u}else y=B=u;c={baseState:m.baseState,firstBaseUpdate:y,lastBaseUpdate:B,shared:m.shared,effects:m.effects},o.updateQueue=c;return}o=c.lastBaseUpdate,o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=u}function El(o,u,c,m){var y=o.updateQueue;da=!1;var B=y.firstBaseUpdate,C=y.lastBaseUpdate,$=y.shared.pending;if($!==null){y.shared.pending=null;var F=$,te=F.next;F.next=null,C===null?B=te:C.next=te,C=F;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,$=ie.lastBaseUpdate,$!==C&&($===null?ie.firstBaseUpdate=te:$.next=te,ie.lastBaseUpdate=F))}if(B!==null){var se=y.baseState;C=0,ie=te=F=null,$=B;do{var oe=$.lane,me=$.eventTime;if((m&oe)===oe){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var Be=o,Se=$;switch(oe=u,me=c,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(me,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(me,se,oe):Be,oe==null)break e;se=Q({},se,oe);break e;case 2:da=!0}}$.callback!==null&&$.lane!==0&&(o.flags|=64,oe=y.effects,oe===null?y.effects=[$]:oe.push($))}else me={eventTime:me,lane:oe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},ie===null?(te=ie=me,F=se):ie=ie.next=me,C|=oe;if($=$.next,$===null){if($=y.shared.pending,$===null)break;oe=$,$=oe.next,oe.next=null,y.lastBaseUpdate=oe,y.shared.pending=null}}while(!0);if(ie===null&&(F=se),y.baseState=F,y.firstBaseUpdate=te,y.lastBaseUpdate=ie,u=y.shared.interleaved,u!==null){y=u;do C|=y.lane,y=y.next;while(y!==u)}else B===null&&(y.shared.lanes=0);Qa|=C,o.lanes=C,o.memoizedState=se}}function D1(o,u,c){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var m=o[u],y=m.callback;if(y!==null){if(m.callback=null,m=c,typeof y!="function")throw Error(n(191,y));y.call(m)}}}var Pu={},fr=ca(Pu),Su=ca(Pu),_u=ca(Pu);function Ka(o){if(o===Pu)throw Error(n(174));return o}function xf(o,u){switch(nt(_u,u),nt(Su,o),nt(fr,Pu),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:Ht(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=Ht(u,o)}ut(fr),nt(fr,u)}function Uo(){ut(fr),ut(Su),ut(_u)}function $1(o){Ka(_u.current);var u=Ka(fr.current),c=Ht(u,o.type);u!==c&&(nt(Su,o),nt(fr,c))}function wf(o){Su.current===o&&(ut(fr),ut(Su))}var ft=ca(0);function Tl(o){for(var u=o;u!==null;){if(u.tag===13){var c=u.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var Pf=[];function Sf(){for(var o=0;o<Pf.length;o++)Pf[o]._workInProgressVersionPrimary=null;Pf.length=0}var Nl=W.ReactCurrentDispatcher,_f=W.ReactCurrentBatchConfig,Ya=0,dt=null,kt=null,Dt=null,Rl=!1,Au=!1,Ou=0,bC=0;function Qt(){throw Error(n(321))}function Af(o,u){if(u===null)return!1;for(var c=0;c<u.length&&c<o.length;c++)if(!Xn(o[c],u[c]))return!1;return!0}function Of(o,u,c,m,y,B){if(Ya=B,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Nl.current=o===null||o.memoizedState===null?wC:PC,o=c(m,y),Au){B=0;do{if(Au=!1,Ou=0,25<=B)throw Error(n(301));B+=1,Dt=kt=null,u.updateQueue=null,Nl.current=SC,o=c(m,y)}while(Au)}if(Nl.current=Dl,u=kt!==null&&kt.next!==null,Ya=0,Dt=kt=dt=null,Rl=!1,u)throw Error(n(300));return o}function Wf(){var o=Ou!==0;return Ou=0,o}function dr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function Nn(){if(kt===null){var o=dt.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=o;else{if(o===null)throw Error(n(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function Wu(o,u){return typeof u=="function"?u(o):u}function Mf(o){var u=Nn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var m=kt,y=m.baseQueue,B=c.pending;if(B!==null){if(y!==null){var C=y.next;y.next=B.next,B.next=C}m.baseQueue=y=B,c.pending=null}if(y!==null){B=y.next,m=m.baseState;var $=C=null,F=null,te=B;do{var ie=te.lane;if((Ya&ie)===ie)F!==null&&(F=F.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),m=te.hasEagerState?te.eagerState:o(m,te.action);else{var se={lane:ie,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};F===null?($=F=se,C=m):F=F.next=se,dt.lanes|=ie,Qa|=ie}te=te.next}while(te!==null&&te!==B);F===null?C=m:F.next=$,Xn(m,u.memoizedState)||(dn=!0),u.memoizedState=m,u.baseState=C,u.baseQueue=F,c.lastRenderedState=m}if(o=c.interleaved,o!==null){y=o;do B=y.lane,dt.lanes|=B,Qa|=B,y=y.next;while(y!==o)}else y===null&&(c.lanes=0);return[u.memoizedState,c.dispatch]}function Cf(o){var u=Nn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var m=c.dispatch,y=c.pending,B=u.memoizedState;if(y!==null){c.pending=null;var C=y=y.next;do B=o(B,C.action),C=C.next;while(C!==y);Xn(B,u.memoizedState)||(dn=!0),u.memoizedState=B,u.baseQueue===null&&(u.baseState=B),c.lastRenderedState=B}return[B,m]}function L1(){}function q1(o,u){var c=dt,m=Nn(),y=u(),B=!Xn(m.memoizedState,y);if(B&&(m.memoizedState=y,dn=!0),m=m.queue,kf(U1.bind(null,c,m,o),[o]),m.getSnapshot!==u||B||Dt!==null&&Dt.memoizedState.tag&1){if(c.flags|=2048,Mu(9,z1.bind(null,c,m,y,u),void 0,null),$t===null)throw Error(n(349));(Ya&30)!==0||F1(c,u,y)}return y}function F1(o,u,c){o.flags|=16384,o={getSnapshot:u,value:c},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[o]):(c=u.stores,c===null?u.stores=[o]:c.push(o))}function z1(o,u,c,m){u.value=c,u.getSnapshot=m,V1(u)&&G1(o)}function U1(o,u,c){return c(function(){V1(u)&&G1(o)})}function V1(o){var u=o.getSnapshot;o=o.value;try{var c=u();return!Xn(o,c)}catch{return!0}}function G1(o){var u=kr(o,1);u!==null&&nr(u,o,1,-1)}function K1(o){var u=dr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wu,lastRenderedState:o},u.queue=o,o=o.dispatch=xC.bind(null,dt,o),[u.memoizedState,o]}function Mu(o,u,c,m){return o={tag:o,create:u,destroy:c,deps:m,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=o.next=o):(c=u.lastEffect,c===null?u.lastEffect=o.next=o:(m=c.next,c.next=o,o.next=m,u.lastEffect=o)),o}function Y1(){return Nn().memoizedState}function jl(o,u,c,m){var y=dr();dt.flags|=o,y.memoizedState=Mu(1|u,c,void 0,m===void 0?null:m)}function Hl(o,u,c,m){var y=Nn();m=m===void 0?null:m;var B=void 0;if(kt!==null){var C=kt.memoizedState;if(B=C.destroy,m!==null&&Af(m,C.deps)){y.memoizedState=Mu(u,c,B,m);return}}dt.flags|=o,y.memoizedState=Mu(1|u,c,B,m)}function Q1(o,u){return jl(8390656,8,o,u)}function kf(o,u){return Hl(2048,8,o,u)}function X1(o,u){return Hl(4,2,o,u)}function Z1(o,u){return Hl(4,4,o,u)}function J1(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function e6(o,u,c){return c=c!=null?c.concat([o]):null,Hl(4,4,J1.bind(null,u,o),c)}function Ef(){}function t6(o,u){var c=Nn();u=u===void 0?null:u;var m=c.memoizedState;return m!==null&&u!==null&&Af(u,m[1])?m[0]:(c.memoizedState=[o,u],o)}function n6(o,u){var c=Nn();u=u===void 0?null:u;var m=c.memoizedState;return m!==null&&u!==null&&Af(u,m[1])?m[0]:(o=o(),c.memoizedState=[o,u],o)}function r6(o,u,c){return(Ya&21)===0?(o.baseState&&(o.baseState=!1,dn=!0),o.memoizedState=c):(Xn(c,u)||(c=Eb(),dt.lanes|=c,Qa|=c,o.baseState=!0),u)}function IC(o,u){var c=Ze;Ze=c!==0&&4>c?c:4,o(!0);var m=_f.transition;_f.transition={};try{o(!1),u()}finally{Ze=c,_f.transition=m}}function a6(){return Nn().memoizedState}function BC(o,u,c){var m=ga(o);if(c={lane:m,action:c,hasEagerState:!1,eagerState:null,next:null},o6(o))i6(u,c);else if(c=R1(o,u,c,m),c!==null){var y=nn();nr(c,o,m,y),u6(c,u,m)}}function xC(o,u,c){var m=ga(o),y={lane:m,action:c,hasEagerState:!1,eagerState:null,next:null};if(o6(o))i6(u,y);else{var B=o.alternate;if(o.lanes===0&&(B===null||B.lanes===0)&&(B=u.lastRenderedReducer,B!==null))try{var C=u.lastRenderedState,$=B(C,c);if(y.hasEagerState=!0,y.eagerState=$,Xn($,C)){var F=u.interleaved;F===null?(y.next=y,If(u)):(y.next=F.next,F.next=y),u.interleaved=y;return}}catch{}finally{}c=R1(o,u,y,m),c!==null&&(y=nn(),nr(c,o,m,y),u6(c,u,m))}}function o6(o){var u=o.alternate;return o===dt||u!==null&&u===dt}function i6(o,u){Au=Rl=!0;var c=o.pending;c===null?u.next=u:(u.next=c.next,c.next=u),o.pending=u}function u6(o,u,c){if((c&4194240)!==0){var m=u.lanes;m&=o.pendingLanes,c|=m,u.lanes=c,T0(o,c)}}var Dl={readContext:Tn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},wC={readContext:Tn,useCallback:function(o,u){return dr().memoizedState=[o,u===void 0?null:u],o},useContext:Tn,useEffect:Q1,useImperativeHandle:function(o,u,c){return c=c!=null?c.concat([o]):null,jl(4194308,4,J1.bind(null,u,o),c)},useLayoutEffect:function(o,u){return jl(4194308,4,o,u)},useInsertionEffect:function(o,u){return jl(4,2,o,u)},useMemo:function(o,u){var c=dr();return u=u===void 0?null:u,o=o(),c.memoizedState=[o,u],o},useReducer:function(o,u,c){var m=dr();return u=c!==void 0?c(u):u,m.memoizedState=m.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},m.queue=o,o=o.dispatch=BC.bind(null,dt,o),[m.memoizedState,o]},useRef:function(o){var u=dr();return o={current:o},u.memoizedState=o},useState:K1,useDebugValue:Ef,useDeferredValue:function(o){return dr().memoizedState=o},useTransition:function(){var o=K1(!1),u=o[0];return o=IC.bind(null,o[1]),dr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,c){var m=dt,y=dr();if(ct){if(c===void 0)throw Error(n(407));c=c()}else{if(c=u(),$t===null)throw Error(n(349));(Ya&30)!==0||F1(m,u,c)}y.memoizedState=c;var B={value:c,getSnapshot:u};return y.queue=B,Q1(U1.bind(null,m,B,o),[o]),m.flags|=2048,Mu(9,z1.bind(null,m,B,c,u),void 0,null),c},useId:function(){var o=dr(),u=$t.identifierPrefix;if(ct){var c=Cr,m=Mr;c=(m&~(1<<32-Qn(m)-1)).toString(32)+c,u=":"+u+"R"+c,c=Ou++,0<c&&(u+="H"+c.toString(32)),u+=":"}else c=bC++,u=":"+u+"r"+c.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},PC={readContext:Tn,useCallback:t6,useContext:Tn,useEffect:kf,useImperativeHandle:e6,useInsertionEffect:X1,useLayoutEffect:Z1,useMemo:n6,useReducer:Mf,useRef:Y1,useState:function(){return Mf(Wu)},useDebugValue:Ef,useDeferredValue:function(o){var u=Nn();return r6(u,kt.memoizedState,o)},useTransition:function(){var o=Mf(Wu)[0],u=Nn().memoizedState;return[o,u]},useMutableSource:L1,useSyncExternalStore:q1,useId:a6,unstable_isNewReconciler:!1},SC={readContext:Tn,useCallback:t6,useContext:Tn,useEffect:kf,useImperativeHandle:e6,useInsertionEffect:X1,useLayoutEffect:Z1,useMemo:n6,useReducer:Cf,useRef:Y1,useState:function(){return Cf(Wu)},useDebugValue:Ef,useDeferredValue:function(o){var u=Nn();return kt===null?u.memoizedState=o:r6(u,kt.memoizedState,o)},useTransition:function(){var o=Cf(Wu)[0],u=Nn().memoizedState;return[o,u]},useMutableSource:L1,useSyncExternalStore:q1,useId:a6,unstable_isNewReconciler:!1};function Jn(o,u){if(o&&o.defaultProps){u=Q({},u),o=o.defaultProps;for(var c in o)u[c]===void 0&&(u[c]=o[c]);return u}return u}function Tf(o,u,c,m){u=o.memoizedState,c=c(m,u),c=c==null?u:Q({},u,c),o.memoizedState=c,o.lanes===0&&(o.updateQueue.baseState=c)}var $l={isMounted:function(o){return(o=o._reactInternals)?qa(o)===o:!1},enqueueSetState:function(o,u,c){o=o._reactInternals;var m=nn(),y=ga(o),B=Er(m,y);B.payload=u,c!=null&&(B.callback=c),u=ha(o,B,y),u!==null&&(nr(u,o,y,m),kl(u,o,y))},enqueueReplaceState:function(o,u,c){o=o._reactInternals;var m=nn(),y=ga(o),B=Er(m,y);B.tag=1,B.payload=u,c!=null&&(B.callback=c),u=ha(o,B,y),u!==null&&(nr(u,o,y,m),kl(u,o,y))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var c=nn(),m=ga(o),y=Er(c,m);y.tag=2,u!=null&&(y.callback=u),u=ha(o,y,m),u!==null&&(nr(u,o,m,c),kl(u,o,m))}};function s6(o,u,c,m,y,B,C){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(m,B,C):u.prototype&&u.prototype.isPureReactComponent?!vu(c,m)||!vu(y,B):!0}function l6(o,u,c){var m=!1,y=pa,B=u.contextType;return typeof B=="object"&&B!==null?B=Tn(B):(y=fn(u)?za:Yt.current,m=u.contextTypes,B=(m=m!=null)?Ho(o,y):pa),u=new u(c,B),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$l,o.stateNode=u,u._reactInternals=o,m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=y,o.__reactInternalMemoizedMaskedChildContext=B),u}function c6(o,u,c,m){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(c,m),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(c,m),u.state!==o&&$l.enqueueReplaceState(u,u.state,null)}function Nf(o,u,c,m){var y=o.stateNode;y.props=c,y.state=o.memoizedState,y.refs={},Bf(o);var B=u.contextType;typeof B=="object"&&B!==null?y.context=Tn(B):(B=fn(u)?za:Yt.current,y.context=Ho(o,B)),y.state=o.memoizedState,B=u.getDerivedStateFromProps,typeof B=="function"&&(Tf(o,u,B,c),y.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(u=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),u!==y.state&&$l.enqueueReplaceState(y,y.state,null),El(o,c,y,m),y.state=o.memoizedState),typeof y.componentDidMount=="function"&&(o.flags|=4194308)}function Vo(o,u){try{var c="",m=u;do c+=he(m),m=m.return;while(m);var y=c}catch(B){y=`
Error generating stack: `+B.message+`
`+B.stack}return{value:o,source:u,stack:y,digest:null}}function Rf(o,u,c){return{value:o,source:null,stack:c??null,digest:u??null}}function jf(o,u){try{console.error(u.value)}catch(c){setTimeout(function(){throw c})}}var _C=typeof WeakMap=="function"?WeakMap:Map;function p6(o,u,c){c=Er(-1,c),c.tag=3,c.payload={element:null};var m=u.value;return c.callback=function(){Gl||(Gl=!0,Zf=m),jf(o,u)},c}function f6(o,u,c){c=Er(-1,c),c.tag=3;var m=o.type.getDerivedStateFromError;if(typeof m=="function"){var y=u.value;c.payload=function(){return m(y)},c.callback=function(){jf(o,u)}}var B=o.stateNode;return B!==null&&typeof B.componentDidCatch=="function"&&(c.callback=function(){jf(o,u),typeof m!="function"&&(va===null?va=new Set([this]):va.add(this));var C=u.stack;this.componentDidCatch(u.value,{componentStack:C!==null?C:""})}),c}function d6(o,u,c){var m=o.pingCache;if(m===null){m=o.pingCache=new _C;var y=new Set;m.set(u,y)}else y=m.get(u),y===void 0&&(y=new Set,m.set(u,y));y.has(c)||(y.add(c),o=$C.bind(null,o,u,c),u.then(o,o))}function h6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function m6(o,u,c,m,y){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(u=Er(-1,1),u.tag=2,ha(c,u,1))),c.lanes|=1),o):(o.flags|=65536,o.lanes=y,o)}var AC=W.ReactCurrentOwner,dn=!1;function tn(o,u,c,m){u.child=o===null?N1(u,null,c,m):qo(u,o.child,c,m)}function v6(o,u,c,m,y){c=c.render;var B=u.ref;return zo(u,y),m=Of(o,u,c,m,B,y),c=Wf(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~y,Tr(o,u,y)):(ct&&c&&pf(u),u.flags|=1,tn(o,u,m,y),u.child)}function y6(o,u,c,m,y){if(o===null){var B=c.type;return typeof B=="function"&&!o2(B)&&B.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(u.tag=15,u.type=B,g6(o,u,B,m,y)):(o=Jl(c.type,null,m,u,u.mode,y),o.ref=u.ref,o.return=u,u.child=o)}if(B=o.child,(o.lanes&y)===0){var C=B.memoizedProps;if(c=c.compare,c=c!==null?c:vu,c(C,m)&&o.ref===u.ref)return Tr(o,u,y)}return u.flags|=1,o=Ia(B,m),o.ref=u.ref,o.return=u,u.child=o}function g6(o,u,c,m,y){if(o!==null){var B=o.memoizedProps;if(vu(B,m)&&o.ref===u.ref)if(dn=!1,u.pendingProps=m=B,(o.lanes&y)!==0)(o.flags&131072)!==0&&(dn=!0);else return u.lanes=o.lanes,Tr(o,u,y)}return Hf(o,u,c,m,y)}function b6(o,u,c){var m=u.pendingProps,y=m.children,B=o!==null?o.memoizedState:null;if(m.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ko,xn),xn|=c;else{if((c&1073741824)===0)return o=B!==null?B.baseLanes|c:c,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,nt(Ko,xn),xn|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=B!==null?B.baseLanes:c,nt(Ko,xn),xn|=m}else B!==null?(m=B.baseLanes|c,u.memoizedState=null):m=c,nt(Ko,xn),xn|=m;return tn(o,u,y,c),u.child}function I6(o,u){var c=u.ref;(o===null&&c!==null||o!==null&&o.ref!==c)&&(u.flags|=512,u.flags|=2097152)}function Hf(o,u,c,m,y){var B=fn(c)?za:Yt.current;return B=Ho(u,B),zo(u,y),c=Of(o,u,c,m,B,y),m=Wf(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~y,Tr(o,u,y)):(ct&&m&&pf(u),u.flags|=1,tn(o,u,c,y),u.child)}function B6(o,u,c,m,y){if(fn(c)){var B=!0;Pl(u)}else B=!1;if(zo(u,y),u.stateNode===null)ql(o,u),l6(u,c,m),Nf(u,c,m,y),m=!0;else if(o===null){var C=u.stateNode,$=u.memoizedProps;C.props=$;var F=C.context,te=c.contextType;typeof te=="object"&&te!==null?te=Tn(te):(te=fn(c)?za:Yt.current,te=Ho(u,te));var ie=c.getDerivedStateFromProps,se=typeof ie=="function"||typeof C.getSnapshotBeforeUpdate=="function";se||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||($!==m||F!==te)&&c6(u,C,m,te),da=!1;var oe=u.memoizedState;C.state=oe,El(u,m,C,y),F=u.memoizedState,$!==m||oe!==F||pn.current||da?(typeof ie=="function"&&(Tf(u,c,ie,m),F=u.memoizedState),($=da||s6(u,c,$,m,oe,F,te))?(se||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(u.flags|=4194308)):(typeof C.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=m,u.memoizedState=F),C.props=m,C.state=F,C.context=te,m=$):(typeof C.componentDidMount=="function"&&(u.flags|=4194308),m=!1)}else{C=u.stateNode,j1(o,u),$=u.memoizedProps,te=u.type===u.elementType?$:Jn(u.type,$),C.props=te,se=u.pendingProps,oe=C.context,F=c.contextType,typeof F=="object"&&F!==null?F=Tn(F):(F=fn(c)?za:Yt.current,F=Ho(u,F));var me=c.getDerivedStateFromProps;(ie=typeof me=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||($!==se||oe!==F)&&c6(u,C,m,F),da=!1,oe=u.memoizedState,C.state=oe,El(u,m,C,y);var Be=u.memoizedState;$!==se||oe!==Be||pn.current||da?(typeof me=="function"&&(Tf(u,c,me,m),Be=u.memoizedState),(te=da||s6(u,c,te,m,oe,Be,F)||!1)?(ie||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(m,Be,F),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(m,Be,F)),typeof C.componentDidUpdate=="function"&&(u.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof C.componentDidUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=m,u.memoizedState=Be),C.props=m,C.state=Be,C.context=F,m=te):(typeof C.componentDidUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),m=!1)}return Df(o,u,c,m,B,y)}function Df(o,u,c,m,y,B){I6(o,u);var C=(u.flags&128)!==0;if(!m&&!C)return y&&_1(u,c,!1),Tr(o,u,B);m=u.stateNode,AC.current=u;var $=C&&typeof c.getDerivedStateFromError!="function"?null:m.render();return u.flags|=1,o!==null&&C?(u.child=qo(u,o.child,null,B),u.child=qo(u,null,$,B)):tn(o,u,$,B),u.memoizedState=m.state,y&&_1(u,c,!0),u.child}function x6(o){var u=o.stateNode;u.pendingContext?P1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&P1(o,u.context,!1),xf(o,u.containerInfo)}function w6(o,u,c,m,y){return Lo(),mf(y),u.flags|=256,tn(o,u,c,m),u.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Lf(o){return{baseLanes:o,cachePool:null,transitions:null}}function P6(o,u,c){var m=u.pendingProps,y=ft.current,B=!1,C=(u.flags&128)!==0,$;if(($=C)||($=o!==null&&o.memoizedState===null?!1:(y&2)!==0),$?(B=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(y|=1),nt(ft,y&1),o===null)return hf(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(C=m.children,o=m.fallback,B?(m=u.mode,B=u.child,C={mode:"hidden",children:C},(m&1)===0&&B!==null?(B.childLanes=0,B.pendingProps=C):B=ec(C,m,0,null),o=eo(o,m,c,null),B.return=u,o.return=u,B.sibling=o,u.child=B,u.child.memoizedState=Lf(c),u.memoizedState=$f,o):qf(u,C));if(y=o.memoizedState,y!==null&&($=y.dehydrated,$!==null))return OC(o,u,C,m,$,y,c);if(B){B=m.fallback,C=u.mode,y=o.child,$=y.sibling;var F={mode:"hidden",children:m.children};return(C&1)===0&&u.child!==y?(m=u.child,m.childLanes=0,m.pendingProps=F,u.deletions=null):(m=Ia(y,F),m.subtreeFlags=y.subtreeFlags&14680064),$!==null?B=Ia($,B):(B=eo(B,C,c,null),B.flags|=2),B.return=u,m.return=u,m.sibling=B,u.child=m,m=B,B=u.child,C=o.child.memoizedState,C=C===null?Lf(c):{baseLanes:C.baseLanes|c,cachePool:null,transitions:C.transitions},B.memoizedState=C,B.childLanes=o.childLanes&~c,u.memoizedState=$f,m}return B=o.child,o=B.sibling,m=Ia(B,{mode:"visible",children:m.children}),(u.mode&1)===0&&(m.lanes=c),m.return=u,m.sibling=null,o!==null&&(c=u.deletions,c===null?(u.deletions=[o],u.flags|=16):c.push(o)),u.child=m,u.memoizedState=null,m}function qf(o,u){return u=ec({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function Ll(o,u,c,m){return m!==null&&mf(m),qo(u,o.child,null,c),o=qf(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function OC(o,u,c,m,y,B,C){if(c)return u.flags&256?(u.flags&=-257,m=Rf(Error(n(422))),Ll(o,u,C,m)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(B=m.fallback,y=u.mode,m=ec({mode:"visible",children:m.children},y,0,null),B=eo(B,y,C,null),B.flags|=2,m.return=u,B.return=u,m.sibling=B,u.child=m,(u.mode&1)!==0&&qo(u,o.child,null,C),u.child.memoizedState=Lf(C),u.memoizedState=$f,B);if((u.mode&1)===0)return Ll(o,u,C,null);if(y.data==="$!"){if(m=y.nextSibling&&y.nextSibling.dataset,m)var $=m.dgst;return m=$,B=Error(n(419)),m=Rf(B,m,void 0),Ll(o,u,C,m)}if($=(C&o.childLanes)!==0,dn||$){if(m=$t,m!==null){switch(C&-C){case 4:y=2;break;case 16:y=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:y=32;break;case 536870912:y=268435456;break;default:y=0}y=(y&(m.suspendedLanes|C))!==0?0:y,y!==0&&y!==B.retryLane&&(B.retryLane=y,kr(o,y),nr(m,o,y,-1))}return a2(),m=Rf(Error(n(421))),Ll(o,u,C,m)}return y.data==="$?"?(u.flags|=128,u.child=o.child,u=LC.bind(null,o),y._reactRetry=u,null):(o=B.treeContext,Bn=la(y.nextSibling),In=u,ct=!0,Zn=null,o!==null&&(kn[En++]=Mr,kn[En++]=Cr,kn[En++]=Ua,Mr=o.id,Cr=o.overflow,Ua=u),u=qf(u,m.children),u.flags|=4096,u)}function S6(o,u,c){o.lanes|=u;var m=o.alternate;m!==null&&(m.lanes|=u),bf(o.return,u,c)}function Ff(o,u,c,m,y){var B=o.memoizedState;B===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:m,tail:c,tailMode:y}:(B.isBackwards=u,B.rendering=null,B.renderingStartTime=0,B.last=m,B.tail=c,B.tailMode=y)}function _6(o,u,c){var m=u.pendingProps,y=m.revealOrder,B=m.tail;if(tn(o,u,m.children,c),m=ft.current,(m&2)!==0)m=m&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&S6(o,c,u);else if(o.tag===19)S6(o,c,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}m&=1}if(nt(ft,m),(u.mode&1)===0)u.memoizedState=null;else switch(y){case"forwards":for(c=u.child,y=null;c!==null;)o=c.alternate,o!==null&&Tl(o)===null&&(y=c),c=c.sibling;c=y,c===null?(y=u.child,u.child=null):(y=c.sibling,c.sibling=null),Ff(u,!1,y,c,B);break;case"backwards":for(c=null,y=u.child,u.child=null;y!==null;){if(o=y.alternate,o!==null&&Tl(o)===null){u.child=y;break}o=y.sibling,y.sibling=c,c=y,y=o}Ff(u,!0,c,null,B);break;case"together":Ff(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function ql(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Tr(o,u,c){if(o!==null&&(u.dependencies=o.dependencies),Qa|=u.lanes,(c&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(n(153));if(u.child!==null){for(o=u.child,c=Ia(o,o.pendingProps),u.child=c,c.return=u;o.sibling!==null;)o=o.sibling,c=c.sibling=Ia(o,o.pendingProps),c.return=u;c.sibling=null}return u.child}function WC(o,u,c){switch(u.tag){case 3:x6(u),Lo();break;case 5:$1(u);break;case 1:fn(u.type)&&Pl(u);break;case 4:xf(u,u.stateNode.containerInfo);break;case 10:var m=u.type._context,y=u.memoizedProps.value;nt(Ml,m._currentValue),m._currentValue=y;break;case 13:if(m=u.memoizedState,m!==null)return m.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(c&u.child.childLanes)!==0?P6(o,u,c):(nt(ft,ft.current&1),o=Tr(o,u,c),o!==null?o.sibling:null);nt(ft,ft.current&1);break;case 19:if(m=(c&u.childLanes)!==0,(o.flags&128)!==0){if(m)return _6(o,u,c);u.flags|=128}if(y=u.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),nt(ft,ft.current),m)break;return null;case 22:case 23:return u.lanes=0,b6(o,u,c)}return Tr(o,u,c)}var A6,zf,O6,W6;A6=function(o,u){for(var c=u.child;c!==null;){if(c.tag===5||c.tag===6)o.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===u)break;for(;c.sibling===null;){if(c.return===null||c.return===u)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},zf=function(){},O6=function(o,u,c,m){var y=o.memoizedProps;if(y!==m){o=u.stateNode,Ka(fr.current);var B=null;switch(c){case"input":y=Pe(o,y),m=Pe(o,m),B=[];break;case"select":y=Q({},y,{value:void 0}),m=Q({},m,{value:void 0}),B=[];break;case"textarea":y=vt(o,y),m=vt(o,m),B=[];break;default:typeof y.onClick!="function"&&typeof m.onClick=="function"&&(o.onclick=Bl)}w0(c,m);var C;c=null;for(te in y)if(!m.hasOwnProperty(te)&&y.hasOwnProperty(te)&&y[te]!=null)if(te==="style"){var $=y[te];for(C in $)$.hasOwnProperty(C)&&(c||(c={}),c[C]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?B||(B=[]):(B=B||[]).push(te,null));for(te in m){var F=m[te];if($=y!=null?y[te]:void 0,m.hasOwnProperty(te)&&F!==$&&(F!=null||$!=null))if(te==="style")if($){for(C in $)!$.hasOwnProperty(C)||F&&F.hasOwnProperty(C)||(c||(c={}),c[C]="");for(C in F)F.hasOwnProperty(C)&&$[C]!==F[C]&&(c||(c={}),c[C]=F[C])}else c||(B||(B=[]),B.push(te,c)),c=F;else te==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,$=$?$.__html:void 0,F!=null&&$!==F&&(B=B||[]).push(te,F)):te==="children"?typeof F!="string"&&typeof F!="number"||(B=B||[]).push(te,""+F):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(F!=null&&te==="onScroll"&&it("scroll",o),B||$===F||(B=[])):(B=B||[]).push(te,F))}c&&(B=B||[]).push("style",c);var te=B;(u.updateQueue=te)&&(u.flags|=4)}},W6=function(o,u,c,m){c!==m&&(u.flags|=4)};function Cu(o,u){if(!ct)switch(o.tailMode){case"hidden":u=o.tail;for(var c=null;u!==null;)u.alternate!==null&&(c=u),u=u.sibling;c===null?o.tail=null:c.sibling=null;break;case"collapsed":c=o.tail;for(var m=null;c!==null;)c.alternate!==null&&(m=c),c=c.sibling;m===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:m.sibling=null}}function Xt(o){var u=o.alternate!==null&&o.alternate.child===o.child,c=0,m=0;if(u)for(var y=o.child;y!==null;)c|=y.lanes|y.childLanes,m|=y.subtreeFlags&14680064,m|=y.flags&14680064,y.return=o,y=y.sibling;else for(y=o.child;y!==null;)c|=y.lanes|y.childLanes,m|=y.subtreeFlags,m|=y.flags,y.return=o,y=y.sibling;return o.subtreeFlags|=m,o.childLanes=c,u}function MC(o,u,c){var m=u.pendingProps;switch(ff(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&wl(),Xt(u),null;case 3:return m=u.stateNode,Uo(),ut(pn),ut(Yt),Sf(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(o===null||o.child===null)&&(Ol(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Zn!==null&&(t2(Zn),Zn=null))),zf(o,u),Xt(u),null;case 5:wf(u);var y=Ka(_u.current);if(c=u.type,o!==null&&u.stateNode!=null)O6(o,u,c,m,y),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!m){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(o=Ka(fr.current),Ol(u)){m=u.stateNode,c=u.type;var B=u.memoizedProps;switch(m[pr]=u,m[Bu]=B,o=(u.mode&1)!==0,c){case"dialog":it("cancel",m),it("close",m);break;case"iframe":case"object":case"embed":it("load",m);break;case"video":case"audio":for(y=0;y<gu.length;y++)it(gu[y],m);break;case"source":it("error",m);break;case"img":case"image":case"link":it("error",m),it("load",m);break;case"details":it("toggle",m);break;case"input":Ce(m,B),it("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!B.multiple},it("invalid",m);break;case"textarea":Wn(m,B),it("invalid",m)}w0(c,B),y=null;for(var C in B)if(B.hasOwnProperty(C)){var $=B[C];C==="children"?typeof $=="string"?m.textContent!==$&&(B.suppressHydrationWarning!==!0&&Il(m.textContent,$,o),y=["children",$]):typeof $=="number"&&m.textContent!==""+$&&(B.suppressHydrationWarning!==!0&&Il(m.textContent,$,o),y=["children",""+$]):a.hasOwnProperty(C)&&$!=null&&C==="onScroll"&&it("scroll",m)}switch(c){case"input":pe(m),He(m,B,!0);break;case"textarea":pe(m),Kt(m);break;case"select":case"option":break;default:typeof B.onClick=="function"&&(m.onclick=Bl)}m=y,u.updateQueue=m,m!==null&&(u.flags|=4)}else{C=y.nodeType===9?y:y.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=xt(c)),o==="http://www.w3.org/1999/xhtml"?c==="script"?(o=C.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof m.is=="string"?o=C.createElement(c,{is:m.is}):(o=C.createElement(c),c==="select"&&(C=o,m.multiple?C.multiple=!0:m.size&&(C.size=m.size))):o=C.createElementNS(o,c),o[pr]=u,o[Bu]=m,A6(o,u,!1,!1),u.stateNode=o;e:{switch(C=P0(c,m),c){case"dialog":it("cancel",o),it("close",o),y=m;break;case"iframe":case"object":case"embed":it("load",o),y=m;break;case"video":case"audio":for(y=0;y<gu.length;y++)it(gu[y],o);y=m;break;case"source":it("error",o),y=m;break;case"img":case"image":case"link":it("error",o),it("load",o),y=m;break;case"details":it("toggle",o),y=m;break;case"input":Ce(o,m),y=Pe(o,m),it("invalid",o);break;case"option":y=m;break;case"select":o._wrapperState={wasMultiple:!!m.multiple},y=Q({},m,{value:void 0}),it("invalid",o);break;case"textarea":Wn(o,m),y=vt(o,m),it("invalid",o);break;default:y=m}w0(c,y),$=y;for(B in $)if($.hasOwnProperty(B)){var F=$[B];B==="style"?eu(o,F):B==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&_o(o,F)):B==="children"?typeof F=="string"?(c!=="textarea"||F!=="")&&ta(o,F):typeof F=="number"&&ta(o,""+F):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(a.hasOwnProperty(B)?F!=null&&B==="onScroll"&&it("scroll",o):F!=null&&A(o,B,F,C))}switch(c){case"input":pe(o),He(o,m,!1);break;case"textarea":pe(o),Kt(o);break;case"option":m.value!=null&&o.setAttribute("value",""+fe(m.value));break;case"select":o.multiple=!!m.multiple,B=m.value,B!=null?Bt(o,!!m.multiple,B,!1):m.defaultValue!=null&&Bt(o,!!m.multiple,m.defaultValue,!0);break;default:typeof y.onClick=="function"&&(o.onclick=Bl)}switch(c){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(o&&u.stateNode!=null)W6(o,u,o.memoizedProps,m);else{if(typeof m!="string"&&u.stateNode===null)throw Error(n(166));if(c=Ka(_u.current),Ka(fr.current),Ol(u)){if(m=u.stateNode,c=u.memoizedProps,m[pr]=u,(B=m.nodeValue!==c)&&(o=In,o!==null))switch(o.tag){case 3:Il(m.nodeValue,c,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&Il(m.nodeValue,c,(o.mode&1)!==0)}B&&(u.flags|=4)}else m=(c.nodeType===9?c:c.ownerDocument).createTextNode(m),m[pr]=u,u.stateNode=m}return Xt(u),null;case 13:if(ut(ft),m=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(ct&&Bn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)k1(),Lo(),u.flags|=98560,B=!1;else if(B=Ol(u),m!==null&&m.dehydrated!==null){if(o===null){if(!B)throw Error(n(318));if(B=u.memoizedState,B=B!==null?B.dehydrated:null,!B)throw Error(n(317));B[pr]=u}else Lo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),B=!1}else Zn!==null&&(t2(Zn),Zn=null),B=!0;if(!B)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=c,u):(m=m!==null,m!==(o!==null&&o.memoizedState!==null)&&m&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(ft.current&1)!==0?Et===0&&(Et=3):a2())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return Uo(),zf(o,u),o===null&&bu(u.stateNode.containerInfo),Xt(u),null;case 10:return gf(u.type._context),Xt(u),null;case 17:return fn(u.type)&&wl(),Xt(u),null;case 19:if(ut(ft),B=u.memoizedState,B===null)return Xt(u),null;if(m=(u.flags&128)!==0,C=B.rendering,C===null)if(m)Cu(B,!1);else{if(Et!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(C=Tl(o),C!==null){for(u.flags|=128,Cu(B,!1),m=C.updateQueue,m!==null&&(u.updateQueue=m,u.flags|=4),u.subtreeFlags=0,m=c,c=u.child;c!==null;)B=c,o=m,B.flags&=14680066,C=B.alternate,C===null?(B.childLanes=0,B.lanes=o,B.child=null,B.subtreeFlags=0,B.memoizedProps=null,B.memoizedState=null,B.updateQueue=null,B.dependencies=null,B.stateNode=null):(B.childLanes=C.childLanes,B.lanes=C.lanes,B.child=C.child,B.subtreeFlags=0,B.deletions=null,B.memoizedProps=C.memoizedProps,B.memoizedState=C.memoizedState,B.updateQueue=C.updateQueue,B.type=C.type,o=C.dependencies,B.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),c=c.sibling;return nt(ft,ft.current&1|2),u.child}o=o.sibling}B.tail!==null&&wt()>Yo&&(u.flags|=128,m=!0,Cu(B,!1),u.lanes=4194304)}else{if(!m)if(o=Tl(C),o!==null){if(u.flags|=128,m=!0,c=o.updateQueue,c!==null&&(u.updateQueue=c,u.flags|=4),Cu(B,!0),B.tail===null&&B.tailMode==="hidden"&&!C.alternate&&!ct)return Xt(u),null}else 2*wt()-B.renderingStartTime>Yo&&c!==1073741824&&(u.flags|=128,m=!0,Cu(B,!1),u.lanes=4194304);B.isBackwards?(C.sibling=u.child,u.child=C):(c=B.last,c!==null?c.sibling=C:u.child=C,B.last=C)}return B.tail!==null?(u=B.tail,B.rendering=u,B.tail=u.sibling,B.renderingStartTime=wt(),u.sibling=null,c=ft.current,nt(ft,m?c&1|2:c&1),u):(Xt(u),null);case 22:case 23:return r2(),m=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==m&&(u.flags|=8192),m&&(u.mode&1)!==0?(xn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function CC(o,u){switch(ff(u),u.tag){case 1:return fn(u.type)&&wl(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Uo(),ut(pn),ut(Yt),Sf(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return wf(u),null;case 13:if(ut(ft),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(n(340));Lo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return ut(ft),null;case 4:return Uo(),null;case 10:return gf(u.type._context),null;case 22:case 23:return r2(),null;case 24:return null;default:return null}}var Fl=!1,Zt=!1,kC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Go(o,u){var c=o.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(m){gt(o,u,m)}else c.current=null}function Uf(o,u,c){try{c()}catch(m){gt(o,u,m)}}var M6=!1;function EC(o,u){if(nf=ll,o=s1(),K0(o)){if("selectionStart"in o)var c={start:o.selectionStart,end:o.selectionEnd};else e:{c=(c=o.ownerDocument)&&c.defaultView||window;var m=c.getSelection&&c.getSelection();if(m&&m.rangeCount!==0){c=m.anchorNode;var y=m.anchorOffset,B=m.focusNode;m=m.focusOffset;try{c.nodeType,B.nodeType}catch{c=null;break e}var C=0,$=-1,F=-1,te=0,ie=0,se=o,oe=null;t:for(;;){for(var me;se!==c||y!==0&&se.nodeType!==3||($=C+y),se!==B||m!==0&&se.nodeType!==3||(F=C+m),se.nodeType===3&&(C+=se.nodeValue.length),(me=se.firstChild)!==null;)oe=se,se=me;for(;;){if(se===o)break t;if(oe===c&&++te===y&&($=C),oe===B&&++ie===m&&(F=C),(me=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=me}c=$===-1||F===-1?null:{start:$,end:F}}else c=null}c=c||{start:0,end:0}}else c=null;for(rf={focusedElem:o,selectionRange:c},ll=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Pt=Be.memoizedState,Z=u.stateNode,V=Z.getSnapshotBeforeUpdate(u.elementType===u.type?Se:Jn(u.type,Se),Pt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ce){gt(u,u.return,ce)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=M6,M6=!1,Be}function ku(o,u,c){var m=u.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var y=m=m.next;do{if((y.tag&o)===o){var B=y.destroy;y.destroy=void 0,B!==void 0&&Uf(u,c,B)}y=y.next}while(y!==m)}}function zl(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var c=u=u.next;do{if((c.tag&o)===o){var m=c.create;c.destroy=m()}c=c.next}while(c!==u)}}function Vf(o){var u=o.ref;if(u!==null){var c=o.stateNode;switch(o.tag){case 5:o=c;break;default:o=c}typeof u=="function"?u(o):u.current=o}}function C6(o){var u=o.alternate;u!==null&&(o.alternate=null,C6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[pr],delete u[Bu],delete u[sf],delete u[mC],delete u[vC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function k6(o){return o.tag===5||o.tag===3||o.tag===4}function E6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||k6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Gf(o,u,c){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?c.nodeType===8?c.parentNode.insertBefore(o,u):c.insertBefore(o,u):(c.nodeType===8?(u=c.parentNode,u.insertBefore(o,c)):(u=c,u.appendChild(o)),c=c._reactRootContainer,c!=null||u.onclick!==null||(u.onclick=Bl));else if(m!==4&&(o=o.child,o!==null))for(Gf(o,u,c),o=o.sibling;o!==null;)Gf(o,u,c),o=o.sibling}function Kf(o,u,c){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?c.insertBefore(o,u):c.appendChild(o);else if(m!==4&&(o=o.child,o!==null))for(Kf(o,u,c),o=o.sibling;o!==null;)Kf(o,u,c),o=o.sibling}var Ut=null,er=!1;function ma(o,u,c){for(c=c.child;c!==null;)T6(o,u,c),c=c.sibling}function T6(o,u,c){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(rl,c)}catch{}switch(c.tag){case 5:Zt||Go(c,u);case 6:var m=Ut,y=er;Ut=null,ma(o,u,c),Ut=m,er=y,Ut!==null&&(er?(o=Ut,c=c.stateNode,o.nodeType===8?o.parentNode.removeChild(c):o.removeChild(c)):Ut.removeChild(c.stateNode));break;case 18:Ut!==null&&(er?(o=Ut,c=c.stateNode,o.nodeType===8?uf(o.parentNode,c):o.nodeType===1&&uf(o,c),cu(o)):uf(Ut,c.stateNode));break;case 4:m=Ut,y=er,Ut=c.stateNode.containerInfo,er=!0,ma(o,u,c),Ut=m,er=y;break;case 0:case 11:case 14:case 15:if(!Zt&&(m=c.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){y=m=m.next;do{var B=y,C=B.destroy;B=B.tag,C!==void 0&&((B&2)!==0||(B&4)!==0)&&Uf(c,u,C),y=y.next}while(y!==m)}ma(o,u,c);break;case 1:if(!Zt&&(Go(c,u),m=c.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=c.memoizedProps,m.state=c.memoizedState,m.componentWillUnmount()}catch($){gt(c,u,$)}ma(o,u,c);break;case 21:ma(o,u,c);break;case 22:c.mode&1?(Zt=(m=Zt)||c.memoizedState!==null,ma(o,u,c),Zt=m):ma(o,u,c);break;default:ma(o,u,c)}}function N6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var c=o.stateNode;c===null&&(c=o.stateNode=new kC),u.forEach(function(m){var y=qC.bind(null,o,m);c.has(m)||(c.add(m),m.then(y,y))})}}function tr(o,u){var c=u.deletions;if(c!==null)for(var m=0;m<c.length;m++){var y=c[m];try{var B=o,C=u,$=C;e:for(;$!==null;){switch($.tag){case 5:Ut=$.stateNode,er=!1;break e;case 3:Ut=$.stateNode.containerInfo,er=!0;break e;case 4:Ut=$.stateNode.containerInfo,er=!0;break e}$=$.return}if(Ut===null)throw Error(n(160));T6(B,C,y),Ut=null,er=!1;var F=y.alternate;F!==null&&(F.return=null),y.return=null}catch(te){gt(y,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)R6(u,o),u=u.sibling}function R6(o,u){var c=o.alternate,m=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),hr(o),m&4){try{ku(3,o,o.return),zl(3,o)}catch(Se){gt(o,o.return,Se)}try{ku(5,o,o.return)}catch(Se){gt(o,o.return,Se)}}break;case 1:tr(u,o),hr(o),m&512&&c!==null&&Go(c,c.return);break;case 5:if(tr(u,o),hr(o),m&512&&c!==null&&Go(c,c.return),o.flags&32){var y=o.stateNode;try{ta(y,"")}catch(Se){gt(o,o.return,Se)}}if(m&4&&(y=o.stateNode,y!=null)){var B=o.memoizedProps,C=c!==null?c.memoizedProps:B,$=o.type,F=o.updateQueue;if(o.updateQueue=null,F!==null)try{$==="input"&&B.type==="radio"&&B.name!=null&&Ae(y,B),P0($,C);var te=P0($,B);for(C=0;C<F.length;C+=2){var ie=F[C],se=F[C+1];ie==="style"?eu(y,se):ie==="dangerouslySetInnerHTML"?_o(y,se):ie==="children"?ta(y,se):A(y,ie,se,te)}switch($){case"input":qe(y,B);break;case"textarea":yt(y,B);break;case"select":var oe=y._wrapperState.wasMultiple;y._wrapperState.wasMultiple=!!B.multiple;var me=B.value;me!=null?Bt(y,!!B.multiple,me,!1):oe!==!!B.multiple&&(B.defaultValue!=null?Bt(y,!!B.multiple,B.defaultValue,!0):Bt(y,!!B.multiple,B.multiple?[]:"",!1))}y[Bu]=B}catch(Se){gt(o,o.return,Se)}}break;case 6:if(tr(u,o),hr(o),m&4){if(o.stateNode===null)throw Error(n(162));y=o.stateNode,B=o.memoizedProps;try{y.nodeValue=B}catch(Se){gt(o,o.return,Se)}}break;case 3:if(tr(u,o),hr(o),m&4&&c!==null&&c.memoizedState.isDehydrated)try{cu(u.containerInfo)}catch(Se){gt(o,o.return,Se)}break;case 4:tr(u,o),hr(o);break;case 13:tr(u,o),hr(o),y=o.child,y.flags&8192&&(B=y.memoizedState!==null,y.stateNode.isHidden=B,!B||y.alternate!==null&&y.alternate.memoizedState!==null||(Xf=wt())),m&4&&N6(o);break;case 22:if(ie=c!==null&&c.memoizedState!==null,o.mode&1?(Zt=(te=Zt)||ie,tr(u,o),Zt=te):tr(u,o),hr(o),m&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:ku(4,oe,oe.return);break;case 1:Go(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){m=oe,c=oe.return;try{u=m,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){gt(m,c,Se)}}break;case 5:Go(oe,oe.return);break;case 22:if(oe.memoizedState!==null){D6(se);continue}}me!==null?(me.return=oe,be=me):D6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{y=se.stateNode,te?(B=y.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none"):($=se.stateNode,F=se.memoizedProps.style,C=F!=null&&F.hasOwnProperty("display")?F.display:null,$.style.display=na("display",C))}catch(Se){gt(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){gt(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),hr(o),m&4&&N6(o);break;case 21:break;default:tr(u,o),hr(o)}}function hr(o){var u=o.flags;if(u&2){try{e:{for(var c=o.return;c!==null;){if(k6(c)){var m=c;break e}c=c.return}throw Error(n(160))}switch(m.tag){case 5:var y=m.stateNode;m.flags&32&&(ta(y,""),m.flags&=-33);var B=E6(o);Kf(o,B,y);break;case 3:case 4:var C=m.stateNode.containerInfo,$=E6(o);Gf(o,$,C);break;default:throw Error(n(161))}}catch(F){gt(o,o.return,F)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function TC(o,u,c){be=o,j6(o)}function j6(o,u,c){for(var m=(o.mode&1)!==0;be!==null;){var y=be,B=y.child;if(y.tag===22&&m){var C=y.memoizedState!==null||Fl;if(!C){var $=y.alternate,F=$!==null&&$.memoizedState!==null||Zt;$=Fl;var te=Zt;if(Fl=C,(Zt=F)&&!te)for(be=y;be!==null;)C=be,F=C.child,C.tag===22&&C.memoizedState!==null?$6(y):F!==null?(F.return=C,be=F):$6(y);for(;B!==null;)be=B,j6(B),B=B.sibling;be=y,Fl=$,Zt=te}H6(o)}else(y.subtreeFlags&8772)!==0&&B!==null?(B.return=y,be=B):H6(o)}}function H6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var c=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||zl(5,u);break;case 1:var m=u.stateNode;if(u.flags&4&&!Zt)if(c===null)m.componentDidMount();else{var y=u.elementType===u.type?c.memoizedProps:Jn(u.type,c.memoizedProps);m.componentDidUpdate(y,c.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var B=u.updateQueue;B!==null&&D1(u,B,m);break;case 3:var C=u.updateQueue;if(C!==null){if(c=null,u.child!==null)switch(u.child.tag){case 5:c=u.child.stateNode;break;case 1:c=u.child.stateNode}D1(u,C,c)}break;case 5:var $=u.stateNode;if(c===null&&u.flags&4){c=$;var F=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&c.focus();break;case"img":F.src&&(c.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var ie=te.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&cu(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&Vf(u)}catch(oe){gt(u,u.return,oe)}}if(u===o){be=null;break}if(c=u.sibling,c!==null){c.return=u.return,be=c;break}be=u.return}}function D6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var c=u.sibling;if(c!==null){c.return=u.return,be=c;break}be=u.return}}function $6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var c=u.return;try{zl(4,u)}catch(F){gt(u,c,F)}break;case 1:var m=u.stateNode;if(typeof m.componentDidMount=="function"){var y=u.return;try{m.componentDidMount()}catch(F){gt(u,y,F)}}var B=u.return;try{Vf(u)}catch(F){gt(u,B,F)}break;case 5:var C=u.return;try{Vf(u)}catch(F){gt(u,C,F)}}}catch(F){gt(u,u.return,F)}if(u===o){be=null;break}var $=u.sibling;if($!==null){$.return=u.return,be=$;break}be=u.return}}var NC=Math.ceil,Ul=W.ReactCurrentDispatcher,Yf=W.ReactCurrentOwner,Rn=W.ReactCurrentBatchConfig,ze=0,$t=null,Ot=null,Vt=0,xn=0,Ko=ca(0),Et=0,Eu=null,Qa=0,Vl=0,Qf=0,Tu=null,hn=null,Xf=0,Yo=1/0,Nr=null,Gl=!1,Zf=null,va=null,Kl=!1,ya=null,Yl=0,Nu=0,Jf=null,Ql=-1,Xl=0;function nn(){return(ze&6)!==0?wt():Ql!==-1?Ql:Ql=wt()}function ga(o){return(o.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:gC.transition!==null?(Xl===0&&(Xl=Eb()),Xl):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:qb(o.type)),o)}function nr(o,u,c,m){if(50<Nu)throw Nu=0,Jf=null,Error(n(185));ou(o,c,m),((ze&2)===0||o!==$t)&&(o===$t&&((ze&2)===0&&(Vl|=c),Et===4&&ba(o,Vt)),mn(o,m),c===1&&ze===0&&(u.mode&1)===0&&(Yo=wt()+500,Sl&&fa()))}function mn(o,u){var c=o.callbackNode;gM(o,u);var m=il(o,o===$t?Vt:0);if(m===0)c!==null&&Mb(c),o.callbackNode=null,o.callbackPriority=0;else if(u=m&-m,o.callbackPriority!==u){if(c!=null&&Mb(c),u===1)o.tag===0?yC(q6.bind(null,o)):A1(q6.bind(null,o)),dC(function(){(ze&6)===0&&fa()}),c=null;else{switch(Tb(m)){case 1:c=C0;break;case 4:c=Cb;break;case 16:c=nl;break;case 536870912:c=kb;break;default:c=nl}c=Q6(c,L6.bind(null,o))}o.callbackPriority=u,o.callbackNode=c}}function L6(o,u){if(Ql=-1,Xl=0,(ze&6)!==0)throw Error(n(327));var c=o.callbackNode;if(Qo()&&o.callbackNode!==c)return null;var m=il(o,o===$t?Vt:0);if(m===0)return null;if((m&30)!==0||(m&o.expiredLanes)!==0||u)u=Zl(o,m);else{u=m;var y=ze;ze|=2;var B=z6();($t!==o||Vt!==u)&&(Nr=null,Yo=wt()+500,Za(o,u));do try{HC();break}catch($){F6(o,$)}while(!0);yf(),Ul.current=B,ze=y,Ot!==null?u=0:($t=null,Vt=0,u=Et)}if(u!==0){if(u===2&&(y=k0(o),y!==0&&(m=y,u=e2(o,y))),u===1)throw c=Eu,Za(o,0),ba(o,m),mn(o,wt()),c;if(u===6)ba(o,m);else{if(y=o.current.alternate,(m&30)===0&&!RC(y)&&(u=Zl(o,m),u===2&&(B=k0(o),B!==0&&(m=B,u=e2(o,B))),u===1))throw c=Eu,Za(o,0),ba(o,m),mn(o,wt()),c;switch(o.finishedWork=y,o.finishedLanes=m,u){case 0:case 1:throw Error(n(345));case 2:Ja(o,hn,Nr);break;case 3:if(ba(o,m),(m&130023424)===m&&(u=Xf+500-wt(),10<u)){if(il(o,0)!==0)break;if(y=o.suspendedLanes,(y&m)!==m){nn(),o.pingedLanes|=o.suspendedLanes&y;break}o.timeoutHandle=of(Ja.bind(null,o,hn,Nr),u);break}Ja(o,hn,Nr);break;case 4:if(ba(o,m),(m&4194240)===m)break;for(u=o.eventTimes,y=-1;0<m;){var C=31-Qn(m);B=1<<C,C=u[C],C>y&&(y=C),m&=~B}if(m=y,m=wt()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*NC(m/1960))-m,10<m){o.timeoutHandle=of(Ja.bind(null,o,hn,Nr),m);break}Ja(o,hn,Nr);break;case 5:Ja(o,hn,Nr);break;default:throw Error(n(329))}}}return mn(o,wt()),o.callbackNode===c?L6.bind(null,o):null}function e2(o,u){var c=Tu;return o.current.memoizedState.isDehydrated&&(Za(o,u).flags|=256),o=Zl(o,u),o!==2&&(u=hn,hn=c,u!==null&&t2(u)),o}function t2(o){hn===null?hn=o:hn.push.apply(hn,o)}function RC(o){for(var u=o;;){if(u.flags&16384){var c=u.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var m=0;m<c.length;m++){var y=c[m],B=y.getSnapshot;y=y.value;try{if(!Xn(B(),y))return!1}catch{return!1}}}if(c=u.child,u.subtreeFlags&16384&&c!==null)c.return=u,u=c;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~Qf,u&=~Vl,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var c=31-Qn(u),m=1<<c;o[c]=-1,u&=~m}}function q6(o){if((ze&6)!==0)throw Error(n(327));Qo();var u=il(o,0);if((u&1)===0)return mn(o,wt()),null;var c=Zl(o,u);if(o.tag!==0&&c===2){var m=k0(o);m!==0&&(u=m,c=e2(o,m))}if(c===1)throw c=Eu,Za(o,0),ba(o,u),mn(o,wt()),c;if(c===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,Ja(o,hn,Nr),mn(o,wt()),null}function n2(o,u){var c=ze;ze|=1;try{return o(u)}finally{ze=c,ze===0&&(Yo=wt()+500,Sl&&fa())}}function Xa(o){ya!==null&&ya.tag===0&&(ze&6)===0&&Qo();var u=ze;ze|=1;var c=Rn.transition,m=Ze;try{if(Rn.transition=null,Ze=1,o)return o()}finally{Ze=m,Rn.transition=c,ze=u,(ze&6)===0&&fa()}}function r2(){xn=Ko.current,ut(Ko)}function Za(o,u){o.finishedWork=null,o.finishedLanes=0;var c=o.timeoutHandle;if(c!==-1&&(o.timeoutHandle=-1,fC(c)),Ot!==null)for(c=Ot.return;c!==null;){var m=c;switch(ff(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&wl();break;case 3:Uo(),ut(pn),ut(Yt),Sf();break;case 5:wf(m);break;case 4:Uo();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:gf(m.type._context);break;case 22:case 23:r2()}c=c.return}if($t=o,Ot=o=Ia(o.current,null),Vt=xn=u,Et=0,Eu=null,Qf=Vl=Qa=0,hn=Tu=null,Ga!==null){for(u=0;u<Ga.length;u++)if(c=Ga[u],m=c.interleaved,m!==null){c.interleaved=null;var y=m.next,B=c.pending;if(B!==null){var C=B.next;B.next=y,m.next=C}c.pending=m}Ga=null}return o}function F6(o,u){do{var c=Ot;try{if(yf(),Nl.current=Dl,Rl){for(var m=dt.memoizedState;m!==null;){var y=m.queue;y!==null&&(y.pending=null),m=m.next}Rl=!1}if(Ya=0,Dt=kt=dt=null,Au=!1,Ou=0,Yf.current=null,c===null||c.return===null){Et=1,Eu=u,Ot=null;break}e:{var B=o,C=c.return,$=c,F=u;if(u=Vt,$.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var te=F,ie=$,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=h6(C);if(me!==null){me.flags&=-257,m6(me,C,$,B,u),me.mode&1&&d6(B,te,u),u=me,F=te;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(F),u.updateQueue=Se}else Be.add(F);break e}else{if((u&1)===0){d6(B,te,u),a2();break e}F=Error(n(426))}}else if(ct&&$.mode&1){var Pt=h6(C);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),m6(Pt,C,$,B,u),mf(Vo(F,$));break e}}B=F=Vo(F,$),Et!==4&&(Et=2),Tu===null?Tu=[B]:Tu.push(B),B=C;do{switch(B.tag){case 3:B.flags|=65536,u&=-u,B.lanes|=u;var Z=p6(B,F,u);H1(B,Z);break e;case 1:$=F;var V=B.type,ee=B.stateNode;if((B.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){B.flags|=65536,u&=-u,B.lanes|=u;var ce=f6(B,$,u);H1(B,ce);break e}}B=B.return}while(B!==null)}V6(c)}catch(Oe){u=Oe,Ot===c&&c!==null&&(Ot=c=c.return);continue}break}while(!0)}function z6(){var o=Ul.current;return Ul.current=Dl,o===null?Dl:o}function a2(){(Et===0||Et===3||Et===2)&&(Et=4),$t===null||(Qa&268435455)===0&&(Vl&268435455)===0||ba($t,Vt)}function Zl(o,u){var c=ze;ze|=2;var m=z6();($t!==o||Vt!==u)&&(Nr=null,Za(o,u));do try{jC();break}catch(y){F6(o,y)}while(!0);if(yf(),ze=c,Ul.current=m,Ot!==null)throw Error(n(261));return $t=null,Vt=0,Et}function jC(){for(;Ot!==null;)U6(Ot)}function HC(){for(;Ot!==null&&!lM();)U6(Ot)}function U6(o){var u=Y6(o.alternate,o,xn);o.memoizedProps=o.pendingProps,u===null?V6(o):Ot=u,Yf.current=null}function V6(o){var u=o;do{var c=u.alternate;if(o=u.return,(u.flags&32768)===0){if(c=MC(c,u,xn),c!==null){Ot=c;return}}else{if(c=CC(c,u),c!==null){c.flags&=32767,Ot=c;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Et=6,Ot=null;return}}if(u=u.sibling,u!==null){Ot=u;return}Ot=u=o}while(u!==null);Et===0&&(Et=5)}function Ja(o,u,c){var m=Ze,y=Rn.transition;try{Rn.transition=null,Ze=1,DC(o,u,c,m)}finally{Rn.transition=y,Ze=m}return null}function DC(o,u,c,m){do Qo();while(ya!==null);if((ze&6)!==0)throw Error(n(327));c=o.finishedWork;var y=o.finishedLanes;if(c===null)return null;if(o.finishedWork=null,o.finishedLanes=0,c===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var B=c.lanes|c.childLanes;if(bM(o,B),o===$t&&(Ot=$t=null,Vt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Kl||(Kl=!0,Q6(nl,function(){return Qo(),null})),B=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||B){B=Rn.transition,Rn.transition=null;var C=Ze;Ze=1;var $=ze;ze|=4,Yf.current=null,EC(o,c),R6(c,o),oC(rf),ll=!!nf,rf=nf=null,o.current=c,TC(c),cM(),ze=$,Ze=C,Rn.transition=B}else o.current=c;if(Kl&&(Kl=!1,ya=o,Yl=y),B=o.pendingLanes,B===0&&(va=null),dM(c.stateNode),mn(o,wt()),u!==null)for(m=o.onRecoverableError,c=0;c<u.length;c++)y=u[c],m(y.value,{componentStack:y.stack,digest:y.digest});if(Gl)throw Gl=!1,o=Zf,Zf=null,o;return(Yl&1)!==0&&o.tag!==0&&Qo(),B=o.pendingLanes,(B&1)!==0?o===Jf?Nu++:(Nu=0,Jf=o):Nu=0,fa(),null}function Qo(){if(ya!==null){var o=Tb(Yl),u=Rn.transition,c=Ze;try{if(Rn.transition=null,Ze=16>o?16:o,ya===null)var m=!1;else{if(o=ya,ya=null,Yl=0,(ze&6)!==0)throw Error(n(331));var y=ze;for(ze|=4,be=o.current;be!==null;){var B=be,C=B.child;if((be.flags&16)!==0){var $=B.deletions;if($!==null){for(var F=0;F<$.length;F++){var te=$[F];for(be=te;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:ku(8,ie,B)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,me=ie.return;if(C6(ie),ie===te){be=null;break}if(oe!==null){oe.return=me,be=oe;break}be=me}}}var Be=B.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=B}}if((B.subtreeFlags&2064)!==0&&C!==null)C.return=B,be=C;else e:for(;be!==null;){if(B=be,(B.flags&2048)!==0)switch(B.tag){case 0:case 11:case 15:ku(9,B,B.return)}var Z=B.sibling;if(Z!==null){Z.return=B.return,be=Z;break e}be=B.return}}var V=o.current;for(be=V;be!==null;){C=be;var ee=C.child;if((C.subtreeFlags&2064)!==0&&ee!==null)ee.return=C,be=ee;else e:for(C=V;be!==null;){if($=be,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:zl(9,$)}}catch(Oe){gt($,$.return,Oe)}if($===C){be=null;break e}var ce=$.sibling;if(ce!==null){ce.return=$.return,be=ce;break e}be=$.return}}if(ze=y,fa(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(rl,o)}catch{}m=!0}return m}finally{Ze=c,Rn.transition=u}}return!1}function G6(o,u,c){u=Vo(c,u),u=p6(o,u,1),o=ha(o,u,1),u=nn(),o!==null&&(ou(o,1,u),mn(o,u))}function gt(o,u,c){if(o.tag===3)G6(o,o,c);else for(;u!==null;){if(u.tag===3){G6(u,o,c);break}else if(u.tag===1){var m=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(va===null||!va.has(m))){o=Vo(c,o),o=f6(u,o,1),u=ha(u,o,1),o=nn(),u!==null&&(ou(u,1,o),mn(u,o));break}}u=u.return}}function $C(o,u,c){var m=o.pingCache;m!==null&&m.delete(u),u=nn(),o.pingedLanes|=o.suspendedLanes&c,$t===o&&(Vt&c)===c&&(Et===4||Et===3&&(Vt&130023424)===Vt&&500>wt()-Xf?Za(o,0):Qf|=c),mn(o,u)}function K6(o,u){u===0&&((o.mode&1)===0?u=1:(u=ol,ol<<=1,(ol&130023424)===0&&(ol=4194304)));var c=nn();o=kr(o,u),o!==null&&(ou(o,u,c),mn(o,c))}function LC(o){var u=o.memoizedState,c=0;u!==null&&(c=u.retryLane),K6(o,c)}function qC(o,u){var c=0;switch(o.tag){case 13:var m=o.stateNode,y=o.memoizedState;y!==null&&(c=y.retryLane);break;case 19:m=o.stateNode;break;default:throw Error(n(314))}m!==null&&m.delete(u),K6(o,c)}var Y6;Y6=function(o,u,c){if(o!==null)if(o.memoizedProps!==u.pendingProps||pn.current)dn=!0;else{if((o.lanes&c)===0&&(u.flags&128)===0)return dn=!1,WC(o,u,c);dn=(o.flags&131072)!==0}else dn=!1,ct&&(u.flags&1048576)!==0&&O1(u,Al,u.index);switch(u.lanes=0,u.tag){case 2:var m=u.type;ql(o,u),o=u.pendingProps;var y=Ho(u,Yt.current);zo(u,c),y=Of(null,u,m,o,y,c);var B=Wf();return u.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(m)?(B=!0,Pl(u)):B=!1,u.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,Bf(u),y.updater=$l,u.stateNode=y,y._reactInternals=u,Nf(u,m,o,c),u=Df(null,u,m,!0,B,c)):(u.tag=0,ct&&B&&pf(u),tn(null,u,y,c),u=u.child),u;case 16:m=u.elementType;e:{switch(ql(o,u),o=u.pendingProps,y=m._init,m=y(m._payload),u.type=m,y=u.tag=zC(m),o=Jn(m,o),y){case 0:u=Hf(null,u,m,o,c);break e;case 1:u=B6(null,u,m,o,c);break e;case 11:u=v6(null,u,m,o,c);break e;case 14:u=y6(null,u,m,Jn(m.type,o),c);break e}throw Error(n(306,m,""))}return u;case 0:return m=u.type,y=u.pendingProps,y=u.elementType===m?y:Jn(m,y),Hf(o,u,m,y,c);case 1:return m=u.type,y=u.pendingProps,y=u.elementType===m?y:Jn(m,y),B6(o,u,m,y,c);case 3:e:{if(x6(u),o===null)throw Error(n(387));m=u.pendingProps,B=u.memoizedState,y=B.element,j1(o,u),El(u,m,null,c);var C=u.memoizedState;if(m=C.element,B.isDehydrated)if(B={element:m,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},u.updateQueue.baseState=B,u.memoizedState=B,u.flags&256){y=Vo(Error(n(423)),u),u=w6(o,u,m,c,y);break e}else if(m!==y){y=Vo(Error(n(424)),u),u=w6(o,u,m,c,y);break e}else for(Bn=la(u.stateNode.containerInfo.firstChild),In=u,ct=!0,Zn=null,c=N1(u,null,m,c),u.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Lo(),m===y){u=Tr(o,u,c);break e}tn(o,u,m,c)}u=u.child}return u;case 5:return $1(u),o===null&&hf(u),m=u.type,y=u.pendingProps,B=o!==null?o.memoizedProps:null,C=y.children,af(m,y)?C=null:B!==null&&af(m,B)&&(u.flags|=32),I6(o,u),tn(o,u,C,c),u.child;case 6:return o===null&&hf(u),null;case 13:return P6(o,u,c);case 4:return xf(u,u.stateNode.containerInfo),m=u.pendingProps,o===null?u.child=qo(u,null,m,c):tn(o,u,m,c),u.child;case 11:return m=u.type,y=u.pendingProps,y=u.elementType===m?y:Jn(m,y),v6(o,u,m,y,c);case 7:return tn(o,u,u.pendingProps,c),u.child;case 8:return tn(o,u,u.pendingProps.children,c),u.child;case 12:return tn(o,u,u.pendingProps.children,c),u.child;case 10:e:{if(m=u.type._context,y=u.pendingProps,B=u.memoizedProps,C=y.value,nt(Ml,m._currentValue),m._currentValue=C,B!==null)if(Xn(B.value,C)){if(B.children===y.children&&!pn.current){u=Tr(o,u,c);break e}}else for(B=u.child,B!==null&&(B.return=u);B!==null;){var $=B.dependencies;if($!==null){C=B.child;for(var F=$.firstContext;F!==null;){if(F.context===m){if(B.tag===1){F=Er(-1,c&-c),F.tag=2;var te=B.updateQueue;if(te!==null){te=te.shared;var ie=te.pending;ie===null?F.next=F:(F.next=ie.next,ie.next=F),te.pending=F}}B.lanes|=c,F=B.alternate,F!==null&&(F.lanes|=c),bf(B.return,c,u),$.lanes|=c;break}F=F.next}}else if(B.tag===10)C=B.type===u.type?null:B.child;else if(B.tag===18){if(C=B.return,C===null)throw Error(n(341));C.lanes|=c,$=C.alternate,$!==null&&($.lanes|=c),bf(C,c,u),C=B.sibling}else C=B.child;if(C!==null)C.return=B;else for(C=B;C!==null;){if(C===u){C=null;break}if(B=C.sibling,B!==null){B.return=C.return,C=B;break}C=C.return}B=C}tn(o,u,y.children,c),u=u.child}return u;case 9:return y=u.type,m=u.pendingProps.children,zo(u,c),y=Tn(y),m=m(y),u.flags|=1,tn(o,u,m,c),u.child;case 14:return m=u.type,y=Jn(m,u.pendingProps),y=Jn(m.type,y),y6(o,u,m,y,c);case 15:return g6(o,u,u.type,u.pendingProps,c);case 17:return m=u.type,y=u.pendingProps,y=u.elementType===m?y:Jn(m,y),ql(o,u),u.tag=1,fn(m)?(o=!0,Pl(u)):o=!1,zo(u,c),l6(u,m,y),Nf(u,m,y,c),Df(null,u,m,!0,o,c);case 19:return _6(o,u,c);case 22:return b6(o,u,c)}throw Error(n(156,u.tag))};function Q6(o,u){return Wb(o,u)}function FC(o,u,c,m){this.tag=o,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(o,u,c,m){return new FC(o,u,c,m)}function o2(o){return o=o.prototype,!(!o||!o.isReactComponent)}function zC(o){if(typeof o=="function")return o2(o)?1:0;if(o!=null){if(o=o.$$typeof,o===T)return 11;if(o===U)return 14}return 2}function Ia(o,u){var c=o.alternate;return c===null?(c=jn(o.tag,u,o.key,o.mode),c.elementType=o.elementType,c.type=o.type,c.stateNode=o.stateNode,c.alternate=o,o.alternate=c):(c.pendingProps=u,c.type=o.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=o.flags&14680064,c.childLanes=o.childLanes,c.lanes=o.lanes,c.child=o.child,c.memoizedProps=o.memoizedProps,c.memoizedState=o.memoizedState,c.updateQueue=o.updateQueue,u=o.dependencies,c.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},c.sibling=o.sibling,c.index=o.index,c.ref=o.ref,c}function Jl(o,u,c,m,y,B){var C=2;if(m=o,typeof o=="function")o2(o)&&(C=1);else if(typeof o=="string")C=5;else e:switch(o){case E:return eo(c.children,y,B,u);case P:C=8,y|=8;break;case M:return o=jn(12,c,u,y|2),o.elementType=M,o.lanes=B,o;case L:return o=jn(13,c,u,y),o.elementType=L,o.lanes=B,o;case G:return o=jn(19,c,u,y),o.elementType=G,o.lanes=B,o;case z:return ec(c,y,B,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case R:C=10;break e;case H:C=9;break e;case T:C=11;break e;case U:C=14;break e;case K:C=16,m=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return u=jn(C,c,u,y),u.elementType=o,u.type=m,u.lanes=B,u}function eo(o,u,c,m){return o=jn(7,o,m,u),o.lanes=c,o}function ec(o,u,c,m){return o=jn(22,o,m,u),o.elementType=z,o.lanes=c,o.stateNode={isHidden:!1},o}function i2(o,u,c){return o=jn(6,o,null,u),o.lanes=c,o}function u2(o,u,c){return u=jn(4,o.children!==null?o.children:[],o.key,u),u.lanes=c,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function UC(o,u,c,m,y){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=E0(0),this.expirationTimes=E0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E0(0),this.identifierPrefix=m,this.onRecoverableError=y,this.mutableSourceEagerHydrationData=null}function s2(o,u,c,m,y,B,C,$,F){return o=new UC(o,u,c,$,F),u===1?(u=1,B===!0&&(u|=8)):u=0,B=jn(3,null,null,u),o.current=B,B.stateNode=o,B.memoizedState={element:m,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(B),o}function VC(o,u,c){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:m==null?null:""+m,children:o,containerInfo:u,implementation:c}}function X6(o){if(!o)return pa;o=o._reactInternals;e:{if(qa(o)!==o||o.tag!==1)throw Error(n(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(o.tag===1){var c=o.type;if(fn(c))return S1(o,c,u)}return u}function Z6(o,u,c,m,y,B,C,$,F){return o=s2(c,m,!0,o,y,B,C,$,F),o.context=X6(null),c=o.current,m=nn(),y=ga(c),B=Er(m,y),B.callback=u??null,ha(c,B,y),o.current.lanes=y,ou(o,y,m),mn(o,m),o}function tc(o,u,c,m){var y=u.current,B=nn(),C=ga(y);return c=X6(c),u.context===null?u.context=c:u.pendingContext=c,u=Er(B,C),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ha(y,u,C),o!==null&&(nr(o,y,C,B),kl(o,y,C)),C}function nc(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function J6(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var c=o.retryLane;o.retryLane=c!==0&&c<u?c:u}}function l2(o,u){J6(o,u),(o=o.alternate)&&J6(o,u)}function GC(){return null}var eI=typeof reportError=="function"?reportError:function(o){console.error(o)};function c2(o){this._internalRoot=o}rc.prototype.render=c2.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(n(409));tc(o,u,null,null)},rc.prototype.unmount=c2.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Xa(function(){tc(null,o,null,null)}),u[Or]=null}};function rc(o){this._internalRoot=o}rc.prototype.unstable_scheduleHydration=function(o){if(o){var u=jb();o={blockedOn:null,target:o,priority:u};for(var c=0;c<ia.length&&u!==0&&u<ia[c].priority;c++);ia.splice(c,0,o),c===0&&$b(o)}};function p2(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ac(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function tI(){}function KC(o,u,c,m,y){if(y){if(typeof m=="function"){var B=m;m=function(){var te=nc(C);B.call(te)}}var C=Z6(u,m,o,0,null,!1,!1,"",tI);return o._reactRootContainer=C,o[Or]=C.current,bu(o.nodeType===8?o.parentNode:o),Xa(),C}for(;y=o.lastChild;)o.removeChild(y);if(typeof m=="function"){var $=m;m=function(){var te=nc(F);$.call(te)}}var F=s2(o,0,!1,null,null,!1,!1,"",tI);return o._reactRootContainer=F,o[Or]=F.current,bu(o.nodeType===8?o.parentNode:o),Xa(function(){tc(u,F,c,m)}),F}function oc(o,u,c,m,y){var B=c._reactRootContainer;if(B){var C=B;if(typeof y=="function"){var $=y;y=function(){var F=nc(C);$.call(F)}}tc(u,C,o,y)}else C=KC(c,u,o,y,m);return nc(C)}Nb=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var c=au(u.pendingLanes);c!==0&&(T0(u,c|1),mn(u,wt()),(ze&6)===0&&(Yo=wt()+500,fa()))}break;case 13:Xa(function(){var m=kr(o,1);if(m!==null){var y=nn();nr(m,o,1,y)}}),l2(o,1)}},N0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var c=nn();nr(u,o,134217728,c)}l2(o,134217728)}},Rb=function(o){if(o.tag===13){var u=ga(o),c=kr(o,u);if(c!==null){var m=nn();nr(c,o,u,m)}l2(o,u)}},jb=function(){return Ze},Hb=function(o,u){var c=Ze;try{return Ze=o,u()}finally{Ze=c}},A0=function(o,u,c){switch(u){case"input":if(qe(o,c),u=c.name,c.type==="radio"&&u!=null){for(c=o;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<c.length;u++){var m=c[u];if(m!==o&&m.form===o.form){var y=xl(m);if(!y)throw Error(n(90));re(m),qe(m,y)}}}break;case"textarea":yt(o,c);break;case"select":u=c.value,u!=null&&Bt(o,!!c.multiple,u,!1)}},xb=n2,wb=Xa;var YC={usingClientEntryPoint:!1,Events:[xu,Ro,xl,Ib,Bb,n2]},Ru={findFiberByHostInstance:Fa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QC={bundleType:Ru.bundleType,version:Ru.version,rendererPackageName:Ru.rendererPackageName,rendererConfig:Ru.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Ab(o),o===null?null:o.stateNode},findFiberByHostInstance:Ru.findFiberByHostInstance||GC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{rl=ic.inject(QC),cr=ic}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YC,vn.createPortal=function(o,u){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p2(u))throw Error(n(200));return VC(o,u,null,c)},vn.createRoot=function(o,u){if(!p2(o))throw Error(n(299));var c=!1,m="",y=eI;return u!=null&&(u.unstable_strictMode===!0&&(c=!0),u.identifierPrefix!==void 0&&(m=u.identifierPrefix),u.onRecoverableError!==void 0&&(y=u.onRecoverableError)),u=s2(o,1,!1,null,null,c,!1,m,y),o[Or]=u.current,bu(o.nodeType===8?o.parentNode:o),new c2(u)},vn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=Ab(u),o=o===null?null:o.stateNode,o},vn.flushSync=function(o){return Xa(o)},vn.hydrate=function(o,u,c){if(!ac(u))throw Error(n(200));return oc(null,o,u,!0,c)},vn.hydrateRoot=function(o,u,c){if(!p2(o))throw Error(n(405));var m=c!=null&&c.hydratedSources||null,y=!1,B="",C=eI;if(c!=null&&(c.unstable_strictMode===!0&&(y=!0),c.identifierPrefix!==void 0&&(B=c.identifierPrefix),c.onRecoverableError!==void 0&&(C=c.onRecoverableError)),u=Z6(u,null,o,1,c??null,y,!1,B,C),o[Or]=u.current,bu(o),m)for(o=0;o<m.length;o++)c=m[o],y=c._getVersion,y=y(c._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[c,y]:u.mutableSourceEagerHydrationData.push(c,y);return new rc(u)},vn.render=function(o,u,c){if(!ac(u))throw Error(n(200));return oc(null,o,u,!1,c)},vn.unmountComponentAtNode=function(o){if(!ac(o))throw Error(n(40));return o._reactRootContainer?(Xa(function(){oc(null,null,o,!1,function(){o._reactRootContainer=null,o[Or]=null})}),!0):!1},vn.unstable_batchedUpdates=n2,vn.unstable_renderSubtreeIntoContainer=function(o,u,c,m){if(!ac(c))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return oc(o,u,c,!1,m)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var lI;function O4(){if(lI)return h2.exports;lI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),h2.exports=ik(),h2.exports}var cI;function uk(){if(cI)return sc;cI=1;var e=O4();return sc.createRoot=e.createRoot,sc.hydrateRoot=e.hydrateRoot,sc}var sk=uk(),X=ig();const j=Xe(X),lk=ek({__proto__:null,default:j},[X]);var Sc={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var ck=Sc.exports,pI;function pk(){return pI||(pI=1,(function(e,t){((n,r)=>{e.exports=r()})(ck,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},p=0,f={};function d(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(M){var R=w(M);R.chunkSize=parseInt(R.chunkSize),M.step||M.chunk||(R.chunkSize=null),this._handle=new I(R),(this._handle.streamer=this)._config=R}).call(this,P),this.parseChunk=function(M,R){var H=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<H){let L=this._config.newline;L||(T=this._config.quoteChar||'"',L=this._handle.guessLineEndings(M,T)),M=[...M.split(L).slice(H)].join(L)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(T=this._config.beforeFirstChunk(M))!==void 0&&(M=T),this.isFirstChunk=!1,this._halted=!1;var H=this._partialLine+M,T=(this._partialLine="",this._handle.parse(H,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(M=T.meta.cursor,H=(this._finished||(this._partialLine=H.substring(M-this._baseIndex),this._baseIndex=M),T&&T.data&&(this._rowCount+=T.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:T,workerId:f.WORKER_ID,finished:H});else if(E(this._config.chunk)&&!R){if(this._config.chunk(T,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=T=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(T.data),this._completeResults.errors=this._completeResults.errors.concat(T.errors),this._completeResults.meta=T.meta),this._completed||!H||!E(this._config.complete)||T&&T.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),H||T&&T.meta.paused||this._nextChunk(),T}this._halted=!0},this._sendError=function(M){E(this._config.error)?this._config.error(M):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:M,finished:!1})}}function h(P){var M;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),d.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(R){this._input=R,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(M=new XMLHttpRequest,this._config.withCredentials&&(M.withCredentials=this._config.withCredentials),i||(M.onload=O(this._chunkLoaded,this),M.onerror=O(this._chunkError,this)),M.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var R,H=this._config.downloadRequestHeaders;for(R in H)M.setRequestHeader(R,H[R])}var T;this._config.chunkSize&&(T=this._start+this._config.chunkSize-1,M.setRequestHeader("Range","bytes="+this._start+"-"+T));try{M.send(this._config.downloadRequestBody)}catch(L){this._chunkError(L.message)}i&&M.status===0&&this._chunkError()}},this._chunkLoaded=function(){M.readyState===4&&(M.status<200||400<=M.status?this._chunkError():(this._start+=this._config.chunkSize||M.responseText.length,this._finished=!this._config.chunkSize||this._start>=(R=>(R=R.getResponseHeader("Content-Range"))!==null?parseInt(R.substring(R.lastIndexOf("/")+1)):-1)(M),this.parseChunk(M.responseText)))},this._chunkError=function(R){R=M.statusText||R,this._sendError(new Error(R))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),d.call(this,P);var M,R,H=typeof FileReader<"u";this.stream=function(T){this._input=T,R=T.slice||T.webkitSlice||T.mozSlice,H?((M=new FileReader).onload=O(this._chunkLoaded,this),M.onerror=O(this._chunkError,this)):M=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var T=this._input,L=(this._config.chunkSize&&(L=Math.min(this._start+this._config.chunkSize,this._input.size),T=R.call(T,this._start,L)),M.readAsText(T,this._config.encoding));H||this._chunkLoaded({target:{result:L}})},this._chunkLoaded=function(T){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(T.target.result)},this._chunkError=function(){this._sendError(M.error)}}function b(P){var M;d.call(this,P=P||{}),this.stream=function(R){return M=R,this._nextChunk()},this._nextChunk=function(){var R,H;if(!this._finished)return R=this._config.chunkSize,M=R?(H=M.substring(0,R),M.substring(R)):(H=M,""),this._finished=!M,this.parseChunk(H)}}function x(P){d.call(this,P=P||{});var M=[],R=!0,H=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(T){this._input=T,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){H&&M.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),M.length?this.parseChunk(M.shift()):R=!0},this._streamData=O(function(T){try{M.push(typeof T=="string"?T:T.toString(this._config.encoding)),R&&(R=!1,this._checkIsFinished(),this.parseChunk(M.shift()))}catch(L){this._streamError(L)}},this),this._streamError=O(function(T){this._streamCleanUp(),this._sendError(T)},this),this._streamEnd=O(function(){this._streamCleanUp(),H=!0,this._streamData("")},this),this._streamCleanUp=O(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var M,R,H,T,L=Math.pow(2,53),G=-L,U=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,K=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,z=this,D=0,Y=0,Q=!1,N=!1,q=[],J={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(J&&H&&(ge("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),H=!1),P.skipEmptyLines&&(J.data=J.data.filter(function(re){return!ue(re)})),ye()){let re=function(Re,Pe){E(P.transformHeader)&&(Re=P.transformHeader(Re,Pe)),q.push(Re)};var pe=re;if(J)if(Array.isArray(J.data[0])){for(var fe=0;ye()&&fe<J.data.length;fe++)J.data[fe].forEach(re);J.data.splice(0,1)}else J.data.forEach(re)}function ne(re,Re){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var Ae=Ce,qe=re[Ce],qe=((He,Fe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(He)?Fe==="true"||Fe==="TRUE"||Fe!=="false"&&Fe!=="FALSE"&&((Ke=>{if(U.test(Ke)&&(Ke=parseFloat(Ke),G<Ke&&Ke<L))return 1})(Fe)?parseFloat(Fe):K.test(Fe)?new Date(Fe):Fe===""?null:Fe):Fe)(Ae=P.header?Ce>=q.length?"__parsed_extra":q[Ce]:Ae,qe=P.transform?P.transform(qe,Ae):qe);Ae==="__parsed_extra"?(Pe[Ae]=Pe[Ae]||[],Pe[Ae].push(qe)):Pe[Ae]=qe}return P.header&&(Ce>q.length?ge("FieldMismatch","TooManyFields","Too many fields: expected "+q.length+" fields but parsed "+Ce,Y+Re):Ce<q.length&&ge("FieldMismatch","TooFewFields","Too few fields: expected "+q.length+" fields but parsed "+Ce,Y+Re)),Pe}var de;J&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!J.data.length||Array.isArray(J.data[0])?(J.data=J.data.map(ne),de=J.data.length):J.data=ne(J.data,0),P.header&&J.meta&&(J.meta.fields=q),Y+=de)}function ye(){return P.header&&q.length===0}function ge(fe,ne,de,pe){fe={type:fe,code:ne,message:de},pe!==void 0&&(fe.row=pe),J.errors.push(fe)}E(P.step)&&(T=P.step,P.step=function(fe){J=fe,ye()?he():(he(),J.data.length!==0&&(D+=fe.data.length,P.preview&&D>P.preview?R.abort():(J.data=J.data[0],T(J,z))))}),this.parse=function(fe,ne,de){var pe=P.quoteChar||'"',pe=(P.newline||(P.newline=this.guessLineEndings(fe,pe)),H=!1,P.delimiter?E(P.delimiter)&&(P.delimiter=P.delimiter(fe),J.meta.delimiter=P.delimiter):((pe=((re,Re,Pe,Ce,Ae)=>{var qe,He,Fe,Ke;Ae=Ae||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Bt=0;Bt<Ae.length;Bt++){for(var vt,Wn=Ae[Bt],yt=0,Kt=0,xt=0,Ht=(Fe=void 0,new S({comments:Ce,delimiter:Wn,newline:Re,preview:10}).parse(re)),cn=0;cn<Ht.data.length;cn++)Pe&&ue(Ht.data[cn])?xt++:(vt=Ht.data[cn].length,Kt+=vt,Fe===void 0?Fe=vt:0<vt&&(yt+=Math.abs(vt-Fe),Fe=vt));0<Ht.data.length&&(Kt/=Ht.data.length-xt),(He===void 0||yt<=He)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(He=yt,qe=Wn,Ke=Kt)}return{successful:!!(P.delimiter=qe),bestDelimiter:qe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=pe.bestDelimiter:(H=!0,P.delimiter=f.DefaultDelimiter),J.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&pe.preview++,M=fe,R=new S(pe),J=R.parse(M,ne,de),he(),Q?{meta:{paused:!0}}:J||{meta:{paused:!1}}},this.paused=function(){return Q},this.pause=function(){Q=!0,R.abort(),M=E(P.chunk)?"":M.substring(R.getCharIndex())},this.resume=function(){z.streamer._halted?(Q=!1,z.streamer.parseChunk(M,!0)):setTimeout(z.resume,3)},this.aborted=function(){return N},this.abort=function(){N=!0,R.abort(),J.meta.aborted=!0,E(P.complete)&&P.complete(J),M=""},this.guessLineEndings=function(re,pe){re=re.substring(0,1048576);var pe=new RegExp(g(pe)+"([^]*?)"+g(pe),"gm"),de=(re=re.replace(pe,"")).split("\r"),pe=re.split(`
`),re=1<pe.length&&pe[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Re=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Re++;return Re>=de.length/2?`\r
`:"\r"}}function g(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var M=(P=P||{}).delimiter,R=P.newline,H=P.comments,T=P.step,L=P.preview,G=P.fastMode,U=null,K=!1,z=P.quoteChar==null?'"':P.quoteChar,D=z;if(P.escapeChar!==void 0&&(D=P.escapeChar),(typeof M!="string"||-1<f.BAD_DELIMITERS.indexOf(M))&&(M=","),H===M)throw new Error("Comment character same as delimiter");H===!0?H="#":(typeof H!="string"||-1<f.BAD_DELIMITERS.indexOf(H))&&(H=!1),R!==`
`&&R!=="\r"&&R!==`\r
`&&(R=`
`);var Y=0,Q=!1;this.parse=function(N,q,J){if(typeof N!="string")throw new Error("Input must be a string");var ue=N.length,he=M.length,ye=R.length,ge=H.length,fe=E(T),ne=[],de=[],pe=[],re=Y=0;if(!N)return yt();if(G||G!==!1&&N.indexOf(z)===-1){for(var Re=N.split(R),Pe=0;Pe<Re.length;Pe++){if(pe=Re[Pe],Y+=pe.length,Pe!==Re.length-1)Y+=R.length;else if(J)return yt();if(!H||pe.substring(0,ge)!==H){if(fe){if(ne=[],Ke(pe.split(M)),Kt(),Q)return yt()}else Ke(pe.split(M));if(L&&L<=Pe)return ne=ne.slice(0,L),yt(!0)}}return yt()}for(var Ce=N.indexOf(M,Y),Ae=N.indexOf(R,Y),qe=new RegExp(g(D)+g(z),"g"),He=N.indexOf(z,Y);;)if(N[Y]===z)for(He=Y,Y++;;){if((He=N.indexOf(z,He+1))===-1)return J||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:Y}),vt();if(He===ue-1)return vt(N.substring(Y,He).replace(qe,z));if(z===D&&N[He+1]===D)He++;else if(z===D||He===0||N[He-1]!==D){Ce!==-1&&Ce<He+1&&(Ce=N.indexOf(M,He+1));var Fe=Bt((Ae=Ae!==-1&&Ae<He+1?N.indexOf(R,He+1):Ae)===-1?Ce:Math.min(Ce,Ae));if(N.substr(He+1+Fe,he)===M){pe.push(N.substring(Y,He).replace(qe,z)),N[Y=He+1+Fe+he]!==z&&(He=N.indexOf(z,Y)),Ce=N.indexOf(M,Y),Ae=N.indexOf(R,Y);break}if(Fe=Bt(Ae),N.substring(He+1+Fe,He+1+Fe+ye)===R){if(pe.push(N.substring(Y,He).replace(qe,z)),Wn(He+1+Fe+ye),Ce=N.indexOf(M,Y),He=N.indexOf(z,Y),fe&&(Kt(),Q))return yt();if(L&&ne.length>=L)return yt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:Y}),He++}}else if(H&&pe.length===0&&N.substring(Y,Y+ge)===H){if(Ae===-1)return yt();Y=Ae+ye,Ae=N.indexOf(R,Y),Ce=N.indexOf(M,Y)}else if(Ce!==-1&&(Ce<Ae||Ae===-1))pe.push(N.substring(Y,Ce)),Y=Ce+he,Ce=N.indexOf(M,Y);else{if(Ae===-1)break;if(pe.push(N.substring(Y,Ae)),Wn(Ae+ye),fe&&(Kt(),Q))return yt();if(L&&ne.length>=L)return yt(!0)}return vt();function Ke(xt){ne.push(xt),re=Y}function Bt(xt){var Ht=0;return Ht=xt!==-1&&(xt=N.substring(He+1,xt))&&xt.trim()===""?xt.length:Ht}function vt(xt){return J||(xt===void 0&&(xt=N.substring(Y)),pe.push(xt),Y=ue,Ke(pe),fe&&Kt()),yt()}function Wn(xt){Y=xt,Ke(pe),pe=[],Ae=N.indexOf(R,Y)}function yt(xt){if(P.header&&!q&&ne.length&&!K){var Ht=ne[0],cn=Object.create(null),_o=new Set(Ht);let ta=!1;for(let Mn=0;Mn<Ht.length;Mn++){let Cn=Ht[Mn];if(cn[Cn=E(P.transformHeader)?P.transformHeader(Cn,Mn):Cn]){let na,eu=cn[Cn];for(;na=Cn+"_"+eu,eu++,_o.has(na););_o.add(na),Ht[Mn]=na,cn[Cn]++,ta=!0,(U=U===null?{}:U)[na]=Cn}else cn[Cn]=1,Ht[Mn]=Cn;_o.add(Cn)}ta&&console.warn("Duplicate headers found and renamed."),K=!0}return{data:ne,errors:de,meta:{delimiter:M,linebreak:R,aborted:Q,truncated:!!xt,cursor:re+(q||0),renamedHeaders:U}}}function Kt(){T(yt()),ne=[],de=[]}},this.abort=function(){Q=!0},this.getCharIndex=function(){return Y}}function _(P){var M=P.data,R=l[M.workerId],H=!1;if(M.error)R.userError(M.error,M.file);else if(M.results&&M.results.data){var T={abort:function(){H=!0,A(M.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:W,resume:W};if(E(R.userStep)){for(var L=0;L<M.results.data.length&&(R.userStep({data:M.results.data[L],errors:M.results.errors,meta:M.results.meta},T),!H);L++);delete M.results}else E(R.userChunk)&&(R.userChunk(M.results,T,M.file),delete M.results)}M.finished&&!H&&A(M.workerId,M.results)}function A(P,M){var R=l[P];E(R.userComplete)&&R.userComplete(M),R.terminate(),delete l[P]}function W(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var M,R=Array.isArray(P)?[]:{};for(M in P)R[M]=w(P[M]);return R}function O(P,M){return function(){P.apply(M,arguments)}}function E(P){return typeof P=="function"}return f.parse=function(P,M){var R=(M=M||{}).dynamicTyping||!1;if(E(R)&&(M.dynamicTypingFunction=R,R={}),M.dynamicTyping=R,M.transform=!!E(M.transform)&&M.transform,!M.worker||!f.WORKERS_SUPPORTED)return R=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(H=>H.charCodeAt(0)!==65279?H:H.slice(1))(P),R=new(M.download?h:b)(M)):P.readable===!0&&E(P.read)&&E(P.on)?R=new x(M):(r.File&&P instanceof File||P instanceof Object)&&(R=new v(M)),R.stream(P);(R=(()=>{var H;return!!f.WORKERS_SUPPORTED&&(H=(()=>{var T=r.URL||r.webkitURL||null,L=n.toString();return f.BLOB_URL||(f.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",L,")();"],{type:"text/javascript"})))})(),(H=new r.Worker(H)).onmessage=_,H.id=p++,l[H.id]=H)})()).userStep=M.step,R.userChunk=M.chunk,R.userComplete=M.complete,R.userError=M.error,M.step=E(M.step),M.chunk=E(M.chunk),M.complete=E(M.complete),M.error=E(M.error),delete M.worker,R.postMessage({input:P,config:M,workerId:R.id})},f.unparse=function(P,M){var R=!1,H=!0,T=",",L=`\r
`,G='"',U=G+G,K=!1,z=null,D=!1,Y=((()=>{if(typeof M=="object"){if(typeof M.delimiter!="string"||f.BAD_DELIMITERS.filter(function(q){return M.delimiter.indexOf(q)!==-1}).length||(T=M.delimiter),typeof M.quotes!="boolean"&&typeof M.quotes!="function"&&!Array.isArray(M.quotes)||(R=M.quotes),typeof M.skipEmptyLines!="boolean"&&typeof M.skipEmptyLines!="string"||(K=M.skipEmptyLines),typeof M.newline=="string"&&(L=M.newline),typeof M.quoteChar=="string"&&(G=M.quoteChar),typeof M.header=="boolean"&&(H=M.header),Array.isArray(M.columns)){if(M.columns.length===0)throw new Error("Option columns is empty");z=M.columns}M.escapeChar!==void 0&&(U=M.escapeChar+G),M.escapeFormulae instanceof RegExp?D=M.escapeFormulae:typeof M.escapeFormulae=="boolean"&&M.escapeFormulae&&(D=/^[=+\-@\t\r].*$/)}})(),new RegExp(g(G),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return Q(null,P,K);if(typeof P[0]=="object")return Q(z||Object.keys(P[0]),P,K)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||z),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),Q(P.fields||[],P.data||[],K);throw new Error("Unable to serialize unrecognized input");function Q(q,J,ue){var he="",ye=(typeof q=="string"&&(q=JSON.parse(q)),typeof J=="string"&&(J=JSON.parse(J)),Array.isArray(q)&&0<q.length),ge=!Array.isArray(J[0]);if(ye&&H){for(var fe=0;fe<q.length;fe++)0<fe&&(he+=T),he+=N(q[fe],fe);0<J.length&&(he+=L)}for(var ne=0;ne<J.length;ne++){var de=(ye?q:J[ne]).length,pe=!1,re=ye?Object.keys(J[ne]).length===0:J[ne].length===0;if(ue&&!ye&&(pe=ue==="greedy"?J[ne].join("").trim()==="":J[ne].length===1&&J[ne][0].length===0),ue==="greedy"&&ye){for(var Re=[],Pe=0;Pe<de;Pe++){var Ce=ge?q[Pe]:Pe;Re.push(J[ne][Ce])}pe=Re.join("").trim()===""}if(!pe){for(var Ae=0;Ae<de;Ae++){0<Ae&&!re&&(he+=T);var qe=ye&&ge?q[Ae]:Ae;he+=N(J[ne][qe],Ae)}ne<J.length-1&&(!ue||0<de&&!re)&&(he+=L)}}return he}function N(q,J){var ue,he;return q==null?"":q.constructor===Date?JSON.stringify(q).slice(1,25):(he=!1,D&&typeof q=="string"&&D.test(q)&&(q="'"+q,he=!0),ue=q.toString().replace(Y,U),(he=he||R===!0||typeof R=="function"&&R(q,J)||Array.isArray(R)&&R[J]||((ye,ge)=>{for(var fe=0;fe<ge.length;fe++)if(-1<ye.indexOf(ge[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(T)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?G+ue+G:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=h,f.FileStreamer=v,f.StringStreamer=b,f.ReadableStreamStreamer=x,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var M=P.config||{},R=[];return this.each(function(L){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var G=0;G<this.files.length;G++)R.push({file:this.files[G],inputElem:this,instanceConfig:a.extend({},M)})}),H(),this;function H(){if(R.length===0)E(P.complete)&&P.complete();else{var L,G,U,K,z=R[0];if(E(P.before)){var D=P.before(z.file,z.inputElem);if(typeof D=="object"){if(D.action==="abort")return L="AbortError",G=z.file,U=z.inputElem,K=D.reason,void(E(P.error)&&P.error({name:L},G,U,K));if(D.action==="skip")return void T();typeof D.config=="object"&&(z.instanceConfig=a.extend(z.instanceConfig,D.config))}else if(D==="skip")return void T()}var Y=z.instanceConfig.complete;z.instanceConfig.complete=function(Q){E(Y)&&Y(Q,z.file,z.inputElem),T()},f.parse(z.file,z.instanceConfig)}}function T(){R.splice(0,1),H()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(h.prototype=Object.create(d.prototype)).constructor=h,(v.prototype=Object.create(d.prototype)).constructor=v,(b.prototype=Object.create(b.prototype)).constructor=b,(x.prototype=Object.create(d.prototype)).constructor=x,f})})(Sc)),Sc.exports}var fk=pk();const y2=Xe(fk);function fI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function W4(...e){return t=>{let n=!1;const r=e.map(a=>{const i=fI(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():fI(e[a],null)}}}}function Ac(...e){return X.useCallback(W4(...e),e)}var ls=X.forwardRef((e,t)=>{const{children:n,...r}=e,a=X.Children.toArray(n),i=a.find(hk);if(i){const s=i.props.children,l=a.map(p=>p===i?X.Children.count(s)>1?X.Children.only(null):X.isValidElement(s)?s.props.children:null:p);return k.jsx(Pv,{...r,ref:t,children:X.isValidElement(s)?X.cloneElement(s,void 0,l):null})}return k.jsx(Pv,{...r,ref:t,children:n})});ls.displayName="Slot";var Pv=X.forwardRef((e,t)=>{const{children:n,...r}=e;if(X.isValidElement(n)){const a=vk(n),i=mk(r,n.props);return n.type!==X.Fragment&&(i.ref=t?W4(t,a):a),X.cloneElement(n,i)}return X.Children.count(n)>1?X.Children.only(null):null});Pv.displayName="SlotClone";var dk=({children:e})=>k.jsx(k.Fragment,{children:e});function hk(e){return X.isValidElement(e)&&e.type===dk}function mk(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...l)=>{i(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function vk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function M4(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=M4(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function je(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=M4(e))&&(r&&(r+=" "),r+=t);return r}const dI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,hI=je,yk=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return hI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(f=>{const d=n==null?void 0:n[f],h=i==null?void 0:i[f];if(d===null)return null;const v=dI(d)||dI(h);return a[f][v]}),l=n&&Object.entries(n).reduce((f,d)=>{let[h,v]=d;return v===void 0||(f[h]=v),f},{}),p=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,d)=>{let{class:h,className:v,...b}=d;return Object.entries(b).every(x=>{let[I,g]=x;return Array.isArray(g)?g.includes({...i,...l}[I]):{...i,...l}[I]===g})?[...f,h,v]:f},[]);return hI(e,s,p,n==null?void 0:n.class,n==null?void 0:n.className)},ug="-",gk=e=>{const t=Ik(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(ug);return l[0]===""&&l.length!==1&&l.shift(),C4(l,t)||bk(s)},getConflictingClassGroupIds:(s,l)=>{const p=n[s]||[];return l&&r[s]?[...p,...r[s]]:p}}},C4=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?C4(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(ug);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},mI=/^\[(.+)\]$/,bk=e=>{if(mI.test(e)){const t=mI.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Ik=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Sv(n[a],r,a,t);return r},Sv=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:vI(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(Bk(a)){Sv(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,s])=>{Sv(s,vI(t,i),n,r)})})},vI=(e,t)=>{let n=e;return t.split(ug).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Bk=e=>e.isThemeGetter,xk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){n.has(i)?n.set(i,s):a(i,s)}}},_v="!",Av=":",wk=Av.length,Pk=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,p=0,f;for(let x=0;x<a.length;x++){let I=a[x];if(s===0&&l===0){if(I===Av){i.push(a.slice(p,x)),p=x+wk;continue}if(I==="/"){f=x;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const d=i.length===0?a:a.substring(p),h=Sk(d),v=h!==d,b=f&&f>p?f-p:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:h,maybePostfixModifierPosition:b}};if(t){const a=t+Av,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},Sk=e=>e.endsWith(_v)?e.substring(0,e.length-1):e.startsWith(_v)?e.substring(1):e,_k=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},Ak=e=>({cache:xk(e.cacheSize),parseClassName:Pk(e),sortModifiers:_k(e),...gk(e)}),Ok=/\s+/,Wk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(Ok);let p="";for(let f=l.length-1;f>=0;f-=1){const d=l[f],{isExternal:h,modifiers:v,hasImportantModifier:b,baseClassName:x,maybePostfixModifierPosition:I}=n(d);if(h){p=d+(p.length>0?" "+p:p);continue}let g=!!I,S=r(g?x.substring(0,I):x);if(!S){if(!g){p=d+(p.length>0?" "+p:p);continue}if(S=r(x),!S){p=d+(p.length>0?" "+p:p);continue}g=!1}const _=i(v).join(":"),A=b?_+_v:_,W=A+S;if(s.includes(W))continue;s.push(W);const w=a(S,g);for(let O=0;O<w.length;++O){const E=w[O];s.push(A+E)}p=d+(p.length>0?" "+p:p)}return p};function Mk(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=k4(t))&&(r&&(r+=" "),r+=n);return r}const k4=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=k4(e[r]))&&(n&&(n+=" "),n+=t);return n};function Ck(e,...t){let n,r,a,i=s;function s(p){const f=t.reduce((d,h)=>h(d),e());return n=Ak(f),r=n.cache.get,a=n.cache.set,i=l,l(p)}function l(p){const f=r(p);if(f)return f;const d=Wk(p,n);return a(p,d),d}return function(){return i(Mk.apply(null,arguments))}}const Tt=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},E4=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,T4=/^\((?:(\w[\w-]*):)?(.+)\)$/i,kk=/^\d+\/\d+$/,Ek=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Tk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Nk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Rk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=e=>kk.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),g2=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Rr=e=>Ek.test(e),Hk=()=>!0,Dk=e=>Tk.test(e)&&!Nk.test(e),N4=()=>!1,$k=e=>Rk.test(e),Lk=e=>jk.test(e),qk=e=>!xe(e)&&!we(e),Fk=e=>Li(e,H4,N4),xe=e=>E4.test(e),to=e=>Li(e,D4,Dk),b2=e=>Li(e,Kk,$e),yI=e=>Li(e,R4,N4),zk=e=>Li(e,j4,Lk),lc=e=>Li(e,$4,$k),we=e=>T4.test(e),Hu=e=>qi(e,D4),Uk=e=>qi(e,Yk),gI=e=>qi(e,R4),Vk=e=>qi(e,H4),Gk=e=>qi(e,j4),cc=e=>qi(e,$4,!0),Li=(e,t,n)=>{const r=E4.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},qi=(e,t,n=!1)=>{const r=T4.exec(e);return r?r[1]?t(r[1]):n:!1},R4=e=>e==="position"||e==="percentage",j4=e=>e==="image"||e==="url",H4=e=>e==="length"||e==="size"||e==="bg-size",D4=e=>e==="length",Kk=e=>e==="number",Yk=e=>e==="family-name",$4=e=>e==="shadow",Qk=()=>{const e=Tt("color"),t=Tt("font"),n=Tt("text"),r=Tt("font-weight"),a=Tt("tracking"),i=Tt("leading"),s=Tt("breakpoint"),l=Tt("container"),p=Tt("spacing"),f=Tt("radius"),d=Tt("shadow"),h=Tt("inset-shadow"),v=Tt("text-shadow"),b=Tt("drop-shadow"),x=Tt("blur"),I=Tt("perspective"),g=Tt("aspect"),S=Tt("ease"),_=Tt("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...W(),we,xe],O=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],P=()=>[we,xe,p],M=()=>[Xo,"full","auto",...P()],R=()=>[xa,"none","subgrid",we,xe],H=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],T=()=>[xa,"auto",we,xe],L=()=>["auto","min","max","fr",we,xe],G=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],U=()=>["start","end","center","stretch","center-safe","end-safe"],K=()=>["auto",...P()],z=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],D=()=>[e,we,xe],Y=()=>[...W(),gI,yI,{position:[we,xe]}],Q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],N=()=>["auto","cover","contain",Vk,Fk,{size:[we,xe]}],q=()=>[g2,Hu,to],J=()=>["","none","full",f,we,xe],ue=()=>["",$e,Hu,to],he=()=>["solid","dashed","dotted","double"],ye=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>[$e,g2,gI,yI],fe=()=>["","none",x,we,xe],ne=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],pe=()=>[$e,we,xe],re=()=>[Xo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rr],breakpoint:[Rr],color:[Hk],container:[Rr],"drop-shadow":[Rr],ease:["in","out","in-out"],font:[qk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rr],shadow:[Rr],spacing:["px",$e],text:[Rr],"text-shadow":[Rr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,xe,we,g]}],container:["container"],columns:[{columns:[$e,xe,we,l]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{start:M()}],end:[{end:M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Xo,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Xo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":L()}],"auto-rows":[{"auto-rows":L()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...G(),"normal"]}],"justify-items":[{"justify-items":[...U(),"normal"]}],"justify-self":[{"justify-self":["auto",...U()]}],"align-content":[{content:["normal",...G()]}],"align-items":[{items:[...U(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...U(),{baseline:["","last"]}]}],"place-content":[{"place-content":G()}],"place-items":[{"place-items":[...U(),"baseline"]}],"place-self":[{"place-self":["auto",...U()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:K()}],mx:[{mx:K()}],my:[{my:K()}],ms:[{ms:K()}],me:[{me:K()}],mt:[{mt:K()}],mr:[{mr:K()}],mb:[{mb:K()}],ml:[{ml:K()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],w:[{w:[l,"screen",...z()]}],"min-w":[{"min-w":[l,"screen","none",...z()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...z()]}],h:[{h:["screen",...z()]}],"min-h":[{"min-h":["screen","none",...z()]}],"max-h":[{"max-h":["screen",...z()]}],"font-size":[{text:["base",n,Hu,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,b2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",g2,xe]}],"font-family":[{font:[Uk,xe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,b2]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Y()}],"bg-repeat":[{bg:Q()}],"bg-size":[{bg:N()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},Gk,zk]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:q()}],"gradient-via-pos":[{via:q()}],"gradient-to-pos":[{to:q()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Hu,to]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",d,cc,lc]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",h,cc,lc]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",v,cc,lc]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ye(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ye()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ge()}],"mask-image-linear-to-pos":[{"mask-linear-to":ge()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":ge()}],"mask-image-t-to-pos":[{"mask-t-to":ge()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":ge()}],"mask-image-r-to-pos":[{"mask-r-to":ge()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":ge()}],"mask-image-b-to-pos":[{"mask-b-to":ge()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":ge()}],"mask-image-l-to-pos":[{"mask-l-to":ge()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":ge()}],"mask-image-x-to-pos":[{"mask-x-to":ge()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":ge()}],"mask-image-y-to-pos":[{"mask-y-to":ge()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ge()}],"mask-image-radial-to-pos":[{"mask-radial-to":ge()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":W()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ge()}],"mask-image-conic-to-pos":[{"mask-conic-to":ge()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Y()}],"mask-repeat":[{mask:Q()}],"mask-size":[{mask:N()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",b,cc,lc]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",_,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:pe()}],"skew-x":[{"skew-x":pe()}],"skew-y":[{"skew-y":pe()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[$e,Hu,to,b2]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Xk=Ck(Qk);function ln(...e){return Xk(je(e))}const Zk=yk("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function bI({className:e,variant:t,size:n,asChild:r=!1,...a}){const i=r?ls:"button";return k.jsx(i,{"data-slot":"button",className:ln(Zk({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return k.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function Rp({className:e,...t}){return k.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function jp({className:e,...t}){return k.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return k.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function sg(e,t=[]){let n=[];function r(i,s){const l=X.createContext(s),p=n.length;n=[...n,s];const f=h=>{var S;const{scope:v,children:b,...x}=h,I=((S=v==null?void 0:v[e])==null?void 0:S[p])||l,g=X.useMemo(()=>x,Object.values(x));return k.jsx(I.Provider,{value:g,children:b})};f.displayName=i+"Provider";function d(h,v){var I;const b=((I=v==null?void 0:v[e])==null?void 0:I[p])||l,x=X.useContext(b);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[f,d]}const a=()=>{const i=n.map(s=>X.createContext(s));return function(l){const p=(l==null?void 0:l[e])||i;return X.useMemo(()=>({[`__scope${e}`]:{...l,[e]:p}}),[l,p])}};return a.scopeName=e,[r,Jk(a,...t)]}function Jk(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((l,{useScope:p,scopeName:f})=>{const h=p(i)[`__scope${f}`];return{...l,...h}},{});return X.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function eE(e){const t=e+"CollectionProvider",[n,r]=sg(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=b=>{const{scope:x,children:I}=b,g=j.useRef(null),S=j.useRef(new Map).current;return k.jsx(a,{scope:x,itemMap:S,collectionRef:g,children:I})};s.displayName=t;const l=e+"CollectionSlot",p=j.forwardRef((b,x)=>{const{scope:I,children:g}=b,S=i(l,I),_=Ac(x,S.collectionRef);return k.jsx(ls,{ref:_,children:g})});p.displayName=l;const f=e+"CollectionItemSlot",d="data-radix-collection-item",h=j.forwardRef((b,x)=>{const{scope:I,children:g,...S}=b,_=j.useRef(null),A=Ac(x,_),W=i(f,I);return j.useEffect(()=>(W.itemMap.set(_,{ref:_,...S}),()=>void W.itemMap.delete(_))),k.jsx(ls,{[d]:"",ref:A,children:g})});h.displayName=f;function v(b){const x=i(e+"CollectionConsumer",b);return j.useCallback(()=>{const g=x.collectionRef.current;if(!g)return[];const S=Array.from(g.querySelectorAll(`[${d}]`));return Array.from(x.itemMap.values()).sort((W,w)=>S.indexOf(W.ref.current)-S.indexOf(w.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:p,ItemSlot:h},v,r]}var Ov=globalThis!=null&&globalThis.document?X.useLayoutEffect:()=>{},tE=lk.useId||(()=>{}),nE=0;function L4(e){const[t,n]=X.useState(tE());return Ov(()=>{n(r=>r??String(nE++))},[e]),e||(t?`radix-${t}`:"")}O4();var rE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Fi=rE.reduce((e,t)=>{const n=X.forwardRef((r,a)=>{const{asChild:i,...s}=r,l=i?ls:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),k.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function lg(e){const t=X.useRef(e);return X.useEffect(()=>{t.current=e}),X.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function q4({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=aE({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=lg(n),p=X.useCallback(f=>{if(i){const h=typeof f=="function"?f(e):f;h!==e&&l(h)}else a(f)},[i,e,a,l]);return[s,p]}function aE({defaultProp:e,onChange:t}){const n=X.useState(e),[r]=n,a=X.useRef(r),i=lg(t);return X.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}var oE=X.createContext(void 0);function F4(e){const t=X.useContext(oE);return e||t||"ltr"}var I2="rovingFocusGroup.onEntryFocus",iE={bubbles:!1,cancelable:!0},Hp="RovingFocusGroup",[Wv,z4,uE]=eE(Hp),[sE,U4]=sg(Hp,[uE]),[lE,cE]=sE(Hp),V4=X.forwardRef((e,t)=>k.jsx(Wv.Provider,{scope:e.__scopeRovingFocusGroup,children:k.jsx(Wv.Slot,{scope:e.__scopeRovingFocusGroup,children:k.jsx(pE,{...e,ref:t})})}));V4.displayName=Hp;var pE=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:p,onEntryFocus:f,preventScrollOnEntryFocus:d=!1,...h}=e,v=X.useRef(null),b=Ac(t,v),x=F4(i),[I=null,g]=q4({prop:s,defaultProp:l,onChange:p}),[S,_]=X.useState(!1),A=lg(f),W=z4(n),w=X.useRef(!1),[O,E]=X.useState(0);return X.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(I2,A),()=>P.removeEventListener(I2,A)},[A]),k.jsx(lE,{scope:n,orientation:r,dir:x,loop:a,currentTabStopId:I,onItemFocus:X.useCallback(P=>g(P),[g]),onItemShiftTab:X.useCallback(()=>_(!0),[]),onFocusableItemAdd:X.useCallback(()=>E(P=>P+1),[]),onFocusableItemRemove:X.useCallback(()=>E(P=>P-1),[]),children:k.jsx(Fi.div,{tabIndex:S||O===0?-1:0,"data-orientation":r,...h,ref:b,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const M=!w.current;if(P.target===P.currentTarget&&M&&!S){const R=new CustomEvent(I2,iE);if(P.currentTarget.dispatchEvent(R),!R.defaultPrevented){const H=W().filter(K=>K.focusable),T=H.find(K=>K.active),L=H.find(K=>K.id===I),U=[T,L,...H].filter(Boolean).map(K=>K.ref.current);Y4(U,d)}}w.current=!1}),onBlur:zr(e.onBlur,()=>_(!1))})})}),G4="RovingFocusGroupItem",K4=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,l=L4(),p=i||l,f=cE(G4,n),d=f.currentTabStopId===p,h=z4(n),{onFocusableItemAdd:v,onFocusableItemRemove:b}=f;return X.useEffect(()=>{if(r)return v(),()=>b()},[r,v,b]),k.jsx(Wv.ItemSlot,{scope:n,id:p,focusable:r,active:a,children:k.jsx(Fi.span,{tabIndex:d?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,x=>{r?f.onItemFocus(p):x.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(p)),onKeyDown:zr(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const I=hE(x,f.orientation,f.dir);if(I!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=h().filter(_=>_.focusable).map(_=>_.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const _=S.indexOf(x.currentTarget);S=f.loop?mE(S,_+1):S.slice(_+1)}setTimeout(()=>Y4(S))}})})})});K4.displayName=G4;var fE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function dE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function hE(e,t,n){const r=dE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return fE[r]}function Y4(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function mE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var vE=V4,yE=K4;function gE(e,t){return X.useReducer((n,r)=>t[n][r]??n,e)}var Q4=e=>{const{present:t,children:n}=e,r=bE(t),a=typeof n=="function"?n({present:r.isPresent}):X.Children.only(n),i=Ac(r.ref,IE(a));return typeof n=="function"||r.isPresent?X.cloneElement(a,{ref:i}):null};Q4.displayName="Presence";function bE(e){const[t,n]=X.useState(),r=X.useRef({}),a=X.useRef(e),i=X.useRef("none"),s=e?"mounted":"unmounted",[l,p]=gE(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return X.useEffect(()=>{const f=pc(r.current);i.current=l==="mounted"?f:"none"},[l]),Ov(()=>{const f=r.current,d=a.current;if(d!==e){const v=i.current,b=pc(f);e?p("MOUNT"):b==="none"||(f==null?void 0:f.display)==="none"?p("UNMOUNT"):p(d&&v!==b?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,p]),Ov(()=>{if(t){let f;const d=t.ownerDocument.defaultView??window,h=b=>{const I=pc(r.current).includes(b.animationName);if(b.target===t&&I&&(p("ANIMATION_END"),!a.current)){const g=t.style.animationFillMode;t.style.animationFillMode="forwards",f=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=g)})}},v=b=>{b.target===t&&(i.current=pc(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:X.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function pc(e){return(e==null?void 0:e.animationName)||"none"}function IE(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var cg="Tabs",[BE]=sg(cg,[U4]),X4=U4(),[xE,pg]=BE(cg),Z4=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:p="automatic",...f}=e,d=F4(l),[h,v]=q4({prop:r,onChange:a,defaultProp:i});return k.jsx(xE,{scope:n,baseId:L4(),value:h,onValueChange:v,orientation:s,dir:d,activationMode:p,children:k.jsx(Fi.div,{dir:d,"data-orientation":s,...f,ref:t})})});Z4.displayName=cg;var J4="TabsList",e_=X.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,i=pg(J4,n),s=X4(n);return k.jsx(vE,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:k.jsx(Fi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});e_.displayName=J4;var t_="TabsTrigger",n_=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...i}=e,s=pg(t_,n),l=X4(n),p=o_(s.baseId,r),f=i_(s.baseId,r),d=r===s.value;return k.jsx(yE,{asChild:!0,...l,focusable:!a,active:d,children:k.jsx(Fi.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":f,"data-state":d?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:p,...i,ref:t,onMouseDown:zr(e.onMouseDown,h=>{!a&&h.button===0&&h.ctrlKey===!1?s.onValueChange(r):h.preventDefault()}),onKeyDown:zr(e.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const h=s.activationMode!=="manual";!d&&!a&&h&&s.onValueChange(r)})})})});n_.displayName=t_;var r_="TabsContent",a_=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:i,...s}=e,l=pg(r_,n),p=o_(l.baseId,r),f=i_(l.baseId,r),d=r===l.value,h=X.useRef(d);return X.useEffect(()=>{const v=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(v)},[]),k.jsx(Q4,{present:a||d,children:({present:v})=>k.jsx(Fi.div,{"data-state":d?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":p,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:h.current?"0s":void 0},children:v&&i})})});a_.displayName=r_;function o_(e,t){return`${e}-trigger-${t}`}function i_(e,t){return`${e}-content-${t}`}var wE=Z4,PE=e_,SE=n_,_E=a_;function AE({className:e,...t}){return k.jsx(wE,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function OE({className:e,...t}){return k.jsx(PE,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function II({className:e,...t}){return k.jsx(SE,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function BI({className:e,...t}){return k.jsx(_E,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ME=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),xI=e=>{const t=ME(e);return t.charAt(0).toUpperCase()+t.slice(1)},u_=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=X.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...l},p)=>X.createElement("svg",{ref:p,...CE,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:u_("lucide",a),...l},[...s.map(([f,d])=>X.createElement(f,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=(e,t)=>{const n=X.forwardRef(({className:r,...a},i)=>X.createElement(kE,{ref:i,iconNode:t,className:u_(`lucide-${WE(xI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=xI(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],TE=Sr("arrow-up-down",EE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],RE=Sr("bot",NE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],HE=Sr("chevron-down",jE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$E=Sr("chevron-right",DE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],qE=Sr("circle-plus",LE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],zE=Sr("download",FE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],VE=Sr("trending-up",UE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],KE=Sr("triangle-alert",GE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],QE=Sr("users",YE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ZE=Sr("x",XE);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Oc(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const s_=6048e5,JE=864e5,eT=6e4,tT=36e5,nT=1e3;let rT={};function zi(){return rT}function Ea(e,t){var l,p,f,d;const n=zi(),r=(t==null?void 0:t.weekStartsOn)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((d=(f=n.locale)==null?void 0:f.options)==null?void 0:d.weekStartsOn)??0,a=Ct(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function pi(e){return Ea(e,{weekStartsOn:1})}function l_(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=pi(r),i=St(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=pi(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function wI(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function Wc(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function aT(e,t){const n=wI(e),r=wI(t),a=+n-Wc(n),i=+r-Wc(r);return Math.round((a-i)/JE)}function oT(e){const t=l_(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),pi(n)}function iT(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function uT(e){if(!iT(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function sT(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function lT(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function cT(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const pT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fT=(e,t,n)=>{let r;const a=pT[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function B2(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const dT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},hT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},mT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vT={date:B2({formats:dT,defaultWidth:"full"}),time:B2({formats:hT,defaultWidth:"full"}),dateTime:B2({formats:mT,defaultWidth:"full"})},yT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},gT=(e,t,n,r)=>yT[e];function Du(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const bT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},IT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},BT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},PT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ST=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},_T={ordinalNumber:ST,era:Du({values:bT,defaultWidth:"wide"}),quarter:Du({values:IT,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Du({values:BT,defaultWidth:"wide"}),day:Du({values:xT,defaultWidth:"wide"}),dayPeriod:Du({values:wT,defaultWidth:"wide",formattingValues:PT,defaultFormattingWidth:"wide"})};function $u(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?OT(l,h=>h.test(s)):AT(l,h=>h.test(s));let f;f=e.valueCallback?e.valueCallback(p):p,f=n.valueCallback?n.valueCallback(f):f;const d=t.slice(s.length);return{value:f,rest:d}}}function AT(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function OT(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function WT(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const MT=/^(\d+)(th|st|nd|rd)?/i,CT=/\d+/i,kT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ET={any:[/^b/i,/^(a|c)/i]},TT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},NT={any:[/1/i,/2/i,/3/i,/4/i]},RT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},HT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},DT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$T={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},LT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qT={ordinalNumber:WT({matchPattern:MT,parsePattern:CT,valueCallback:e=>parseInt(e,10)}),era:$u({matchPatterns:kT,defaultMatchWidth:"wide",parsePatterns:ET,defaultParseWidth:"any"}),quarter:$u({matchPatterns:TT,defaultMatchWidth:"wide",parsePatterns:NT,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$u({matchPatterns:RT,defaultMatchWidth:"wide",parsePatterns:jT,defaultParseWidth:"any"}),day:$u({matchPatterns:HT,defaultMatchWidth:"wide",parsePatterns:DT,defaultParseWidth:"any"}),dayPeriod:$u({matchPatterns:$T,defaultMatchWidth:"any",parsePatterns:LT,defaultParseWidth:"any"})},c_={code:"en-US",formatDistance:fT,formatLong:vT,formatRelative:gT,localize:_T,match:qT,options:{weekStartsOn:0,firstWeekContainsDate:1}};function FT(e){const t=Ct(e);return aT(t,cT(t))+1}function p_(e){const t=Ct(e),n=+pi(t)-+oT(t);return Math.round(n/s_)+1}function fg(e,t){var d,h,v,b;const n=Ct(e),r=n.getFullYear(),a=zi(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??a.firstWeekContainsDate??((b=(v=a.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=Ea(s,t),p=St(e,0);p.setFullYear(r,0,i),p.setHours(0,0,0,0);const f=Ea(p,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function zT(e,t){var l,p,f,d;const n=zi(),r=(t==null?void 0:t.firstWeekContainsDate)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(f=n.locale)==null?void 0:f.options)==null?void 0:d.firstWeekContainsDate)??1,a=fg(e,t),i=St(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Ea(i,t)}function f_(e,t){const n=Ct(e),r=+Ea(n,t)-+zT(n,t);return Math.round(r/s_)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},PI={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=fg(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):Je(i,t.length)},R:function(e,t){const n=l_(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=f_(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=p_(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=FT(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Je(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Je(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return _I(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return _I(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+SI(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+SI(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function SI(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+Je(i,2)}function _I(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):oo(e,t)}function oo(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return n+a+t+i}const AI=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},d_=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},UT=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return AI(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",AI(r,t)).replace("{{time}}",d_(a,t))},Mv={p:d_,P:UT},VT=/^D+$/,GT=/^Y+$/,KT=["D","DD","YY","YYYY"];function h_(e){return VT.test(e)}function m_(e){return GT.test(e)}function Cv(e,t,n){const r=YT(e,t,n);if(console.warn(r),KT.includes(e))throw new RangeError(r)}function YT(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const QT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,XT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ZT=/^'([^]*?)'?$/,JT=/''/g,eN=/[a-zA-Z]/;function Mc(e,t,n){var d,h,v,b;const r=zi(),a=r.locale??c_,i=r.firstWeekContainsDate??((h=(d=r.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,s=r.weekStartsOn??((b=(v=r.locale)==null?void 0:v.options)==null?void 0:b.weekStartsOn)??0,l=Ct(e);if(!uT(l))throw new RangeError("Invalid time value");let p=t.match(XT).map(x=>{const I=x[0];if(I==="p"||I==="P"){const g=Mv[I];return g(x,a.formatLong)}return x}).join("").match(QT).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const I=x[0];if(I==="'")return{isToken:!1,value:tN(x)};if(PI[I])return{isToken:!0,value:x};if(I.match(eN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:x}});a.localize.preprocessor&&(p=a.localize.preprocessor(l,p));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return p.map(x=>{if(!x.isToken)return x.value;const I=x.value;(m_(I)||h_(I))&&Cv(I,t,String(e));const g=PI[I[0]];return g(l,I,a.localize,f)}).join("")}function tN(e){const t=e.match(ZT);return t?t[1].replace(JT,"'"):e}function nN(){return Object.assign({},zi())}function rN(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function aN(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const oN=10;class v_{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class iN extends v_{constructor(t,n,r,a,i){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class uN extends v_{constructor(){super(...arguments);ve(this,"priority",oN);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,aN(n,Date))}}class Ge{run(t,n,r,a){const i=this.parse(t,n,r,a);return i?{setter:new iN(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,n,r){return!0}}class sN extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const _t={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},mr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function At(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function vr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*tT+i*eT+s*nT),rest:t.slice(n[0].length)}}function y_(e){return mt(_t.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(_t.singleDigit,t);case 2:return mt(_t.twoDigits,t);case 3:return mt(_t.threeDigits,t);case 4:return mt(_t.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function Cc(e,t){switch(e){case 1:return mt(_t.singleDigitSigned,t);case 2:return mt(_t.twoDigitsSigned,t);case 3:return mt(_t.threeDigitsSigned,t);case 4:return mt(_t.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function dg(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function g_(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,l=e>=i%100;a=e+s-(l?100:0)}return n?a:1-a}function b_(e){return e%400===0||e%4===0&&e%100!==0}class lN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return At(It(4,n),i);case"yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const i=n.getFullYear();if(a.isTwoDigitYear){const l=g_(a.year,i);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class cN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return At(It(4,n),i);case"Yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,i){const s=fg(n,i);if(a.isTwoDigitYear){const p=g_(a.year,s);return n.setFullYear(p,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}}class pN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return Cc(r==="R"?4:r.length,n)}set(n,r,a){const i=St(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),pi(i)}}class fN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return Cc(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class dN extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class hN extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class mN extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const i=s=>s-1;switch(r){case"M":return At(mt(_t.month,n),i);case"MM":return At(It(2,n),i);case"Mo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class vN extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const i=s=>s-1;switch(r){case"L":return At(mt(_t.month,n),i);case"LL":return At(It(2,n),i);case"Lo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function yN(e,t,n){const r=Ct(e),a=f_(r,n)-t;return r.setDate(r.getDate()-a*7),r}class gN extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(_t.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,i){return Ea(yN(n,a,i),i)}}function bN(e,t){const n=Ct(e),r=p_(n)-t;return n.setDate(n.getDate()-r*7),n}class IN extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(_t.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return pi(bN(n,a))}}const BN=[31,28,31,30,31,30,31,31,30,31,30,31],xN=[31,29,31,30,31,30,31,31,30,31,30,31];class wN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(_t.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),i=b_(a),s=n.getMonth();return i?r>=1&&r<=xN[s]:r>=1&&r<=BN[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class PN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(_t.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return b_(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function hg(e,t,n){var h,v,b,x;const r=zi(),a=(n==null?void 0:n.weekStartsOn)??((v=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((x=(b=r.locale)==null?void 0:b.options)==null?void 0:x.weekStartsOn)??0,i=Ct(e),s=i.getDay(),p=(t%7+7)%7,f=7-a,d=t<0||t>6?t-(s+f)%7:(p+f)%7-(s+f)%7;return Oc(i,d)}class SN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=hg(n,a,i),n.setHours(0,0,0,0),n}}class _N extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,i){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+p};switch(r){case"e":case"ee":return At(It(r.length,n),s);case"eo":return At(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=hg(n,a,i),n.setHours(0,0,0,0),n}}class AN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,i){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+p};switch(r){case"c":case"cc":return At(It(r.length,n),s);case"co":return At(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=hg(n,a,i),n.setHours(0,0,0,0),n}}function ON(e,t){const n=Ct(e),r=rN(n),a=t-r;return Oc(n,a)}class WN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return At(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return At(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return At(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return At(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=ON(n,a),n.setHours(0,0,0,0),n}}class MN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(dg(a),0,0,0),n}}class CN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(dg(a),0,0,0),n}}class kN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(dg(a),0,0,0),n}}class EN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(_t.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class TN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(_t.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class NN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(_t.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class RN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(_t.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class jN extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(_t.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class HN extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(_t.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class DN extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return At(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class $N extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return vr(mr.basicOptionalMinutes,n);case"XX":return vr(mr.basic,n);case"XXXX":return vr(mr.basicOptionalSeconds,n);case"XXXXX":return vr(mr.extendedOptionalSeconds,n);case"XXX":default:return vr(mr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Wc(n)-a)}}class LN extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return vr(mr.basicOptionalMinutes,n);case"xx":return vr(mr.basic,n);case"xxxx":return vr(mr.basicOptionalSeconds,n);case"xxxxx":return vr(mr.extendedOptionalSeconds,n);case"xxx":default:return vr(mr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Wc(n)-a)}}class qN extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return y_(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class FN extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return y_(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const zN={G:new sN,y:new lN,Y:new cN,R:new pN,u:new fN,Q:new dN,q:new hN,M:new mN,L:new vN,w:new gN,I:new IN,d:new wN,D:new PN,E:new SN,e:new _N,c:new AN,i:new WN,a:new MN,b:new CN,B:new kN,h:new EN,H:new TN,K:new NN,k:new RN,m:new jN,s:new HN,S:new DN,X:new $N,x:new LN,t:new qN,T:new FN},UN=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,VN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,GN=/^'([^]*?)'?$/,KN=/''/g,YN=/\S/,QN=/[a-zA-Z]/;function XN(e,t,n,r){var I,g,S,_;const a=nN(),i=a.locale??c_,s=a.firstWeekContainsDate??((g=(I=a.locale)==null?void 0:I.options)==null?void 0:g.firstWeekContainsDate)??1,l=a.weekStartsOn??((_=(S=a.locale)==null?void 0:S.options)==null?void 0:_.weekStartsOn)??0,p={firstWeekContainsDate:s,weekStartsOn:l,locale:i},f=[new uN],d=t.match(VN).map(A=>{const W=A[0];if(W in Mv){const w=Mv[W];return w(A,i.formatLong)}return A}).join("").match(UN),h=[];for(let A of d){m_(A)&&Cv(A,t,e),h_(A)&&Cv(A,t,e);const W=A[0],w=zN[W];if(w){const{incompatibleTokens:O}=w;if(Array.isArray(O)){const P=h.find(M=>O.includes(M.token)||M.token===W);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${A}\` at the same time`)}else if(w.incompatibleTokens==="*"&&h.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);h.push({token:W,fullToken:A});const E=w.run(e,A,i.match,p);if(!E)return St(n,NaN);f.push(E.setter),e=E.rest}else{if(W.match(QN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+W+"`");if(A==="''"?A="'":W==="'"&&(A=ZN(A)),e.indexOf(A)===0)e=e.slice(A.length);else return St(n,NaN)}}if(e.length>0&&YN.test(e))return St(n,NaN);const v=f.map(A=>A.priority).sort((A,W)=>W-A).filter((A,W,w)=>w.indexOf(A)===W).map(A=>f.filter(W=>W.priority===A).sort((W,w)=>w.subPriority-W.subPriority)).map(A=>A[0]);let b=Ct(n);if(isNaN(b.getTime()))return St(n,NaN);const x={};for(const A of v){if(!A.validate(b,p))return St(n,NaN);const W=A.set(b,x,p);Array.isArray(W)?(b=W[0],Object.assign(x,W[1])):b=W}return St(n,b)}function ZN(e){return e.match(GN)[1].replace(KN,"'")}const yr=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,i,s]=n;return new Date(parseInt(a),parseInt(i)-1,parseInt(s))}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a))}return XN(e,"dd-MM-yyyy",new Date)},I_=["january","february","march","april","may","june","july","august","september","october","november","december"],B_=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=I_.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const i=lT(new Date(a,r)),s=sT(new Date(a,r)),l=[];let p=i,f=1;for(;p<=s;){let d=Oc(p,6);d>s&&(d=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${p.getDate()}-${d.getDate()}`,startDate:p,endDate:d}),p=Oc(d,1),f++}return l},x_=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},kv=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=I_.indexOf(n.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},JN=e=>Mc(e,"MMM dd, yyyy"),Ev=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Tv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=t.get(a)||0;t.set(a,i+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},w_=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},Nv=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,t)},eR=(e,t="february-2026")=>{if(t==="all"){const n=new Set;return e.forEach(a=>{try{const i=yr(a.createdAt);isNaN(i.getTime())||n.add(`${Mc(i,"MMM yyyy")}|${Mc(i,"MMMM").toLowerCase()}-${i.getFullYear()}`)}catch{}}),Array.from(n).map(a=>{const[i,s]=a.split("|"),l=e.filter(h=>kv(yr(h.createdAt),s)),p=l.length,f=l.filter(h=>h.handled==="Human").length,d=p>0?f/p*100:0;return{week:i,totalSessions:p,humanEscalations:f,escalationRate:d}}).sort((a,i)=>new Date(`1 ${a.week}`).getTime()-new Date(`1 ${i.week}`).getTime()).filter(a=>a.totalSessions>0)}else return B_(t).map(r=>{const a=e.filter(p=>{const f=yr(p.createdAt);return x_(f,r)}),i=a.length,s=a.filter(p=>p.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:l}})},tR=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([l,p])=>{const f=Array.from(p.entries()).map(([h,v])=>({product:h,count:v})).sort((h,v)=>v.count-h.count),d=f.reduce((h,v)=>h+v.count,0);return{subType:l,count:d,products:f}}).sort((l,p)=>p.count-l.count),s=i.reduce((l,p)=>l+p.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},nR=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",t),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function rR({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[k.jsx(zn,{children:k.jsx(Un,{className:"p-6",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),k.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),k.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:k.jsx(VE,{className:"w-6 h-6 text-blue-600"})})]})})}),k.jsx(zn,{children:k.jsx(Un,{className:"p-6",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),k.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),k.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),k.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:k.jsx(RE,{className:"w-6 h-6 text-blue-600"})})]})})}),k.jsx(zn,{children:k.jsx(Un,{className:"p-6",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),k.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),k.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),k.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:k.jsx(QE,{className:"w-6 h-6 text-orange-600"})})]})})}),k.jsx(zn,{className:n(e.escalationRate),children:k.jsx(Un,{className:"p-6",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),k.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),k.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),k.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:k.jsx(KE,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var x2,OI;function gn(){if(OI)return x2;OI=1;var e=Array.isArray;return x2=e,x2}var w2,WI;function P_(){if(WI)return w2;WI=1;var e=typeof uc=="object"&&uc&&uc.Object===Object&&uc;return w2=e,w2}var P2,MI;function _r(){if(MI)return P2;MI=1;var e=P_(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return P2=n,P2}var S2,CI;function Us(){if(CI)return S2;CI=1;var e=_r(),t=e.Symbol;return S2=t,S2}var _2,kI;function aR(){if(kI)return _2;kI=1;var e=Us(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function i(s){var l=n.call(s,a),p=s[a];try{s[a]=void 0;var f=!0}catch{}var d=r.call(s);return f&&(l?s[a]=p:delete s[a]),d}return _2=i,_2}var A2,EI;function oR(){if(EI)return A2;EI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return A2=n,A2}var O2,TI;function Qr(){if(TI)return O2;TI=1;var e=Us(),t=aR(),n=oR(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:i&&i in Object(l)?t(l):n(l)}return O2=s,O2}var W2,NI;function Xr(){if(NI)return W2;NI=1;function e(t){return t!=null&&typeof t=="object"}return W2=e,W2}var M2,RI;function Ui(){if(RI)return M2;RI=1;var e=Qr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return M2=r,M2}var C2,jI;function mg(){if(jI)return C2;jI=1;var e=gn(),t=Ui(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||t(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return C2=a,C2}var k2,HI;function ja(){if(HI)return k2;HI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return k2=e,k2}var E2,DI;function vg(){if(DI)return E2;DI=1;var e=Qr(),t=ja(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(l){if(!t(l))return!1;var p=e(l);return p==r||p==a||p==n||p==i}return E2=s,E2}var T2,$I;function iR(){if($I)return T2;$I=1;var e=_r(),t=e["__core-js_shared__"];return T2=t,T2}var N2,LI;function uR(){if(LI)return N2;LI=1;var e=iR(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return N2=n,N2}var R2,qI;function S_(){if(qI)return R2;qI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return R2=n,R2}var j2,FI;function sR(){if(FI)return j2;FI=1;var e=vg(),t=uR(),n=ja(),r=S_(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,p=s.toString,f=l.hasOwnProperty,d=RegExp("^"+p.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(v){if(!n(v)||t(v))return!1;var b=e(v)?d:i;return b.test(r(v))}return j2=h,j2}var H2,zI;function lR(){if(zI)return H2;zI=1;function e(t,n){return t==null?void 0:t[n]}return H2=e,H2}var D2,UI;function Bo(){if(UI)return D2;UI=1;var e=sR(),t=lR();function n(r,a){var i=t(r,a);return e(i)?i:void 0}return D2=n,D2}var $2,VI;function Dp(){if(VI)return $2;VI=1;var e=Bo(),t=e(Object,"create");return $2=t,$2}var L2,GI;function cR(){if(GI)return L2;GI=1;var e=Dp();function t(){this.__data__=e?e(null):{},this.size=0}return L2=t,L2}var q2,KI;function pR(){if(KI)return q2;KI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return q2=e,q2}var F2,YI;function fR(){if(YI)return F2;YI=1;var e=Dp(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(e){var l=s[i];return l===t?void 0:l}return r.call(s,i)?s[i]:void 0}return F2=a,F2}var z2,QI;function dR(){if(QI)return z2;QI=1;var e=Dp(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:n.call(i,a)}return z2=r,z2}var U2,XI;function hR(){if(XI)return U2;XI=1;var e=Dp(),t="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?t:a,this}return U2=n,U2}var V2,ZI;function mR(){if(ZI)return V2;ZI=1;var e=cR(),t=pR(),n=fR(),r=dR(),a=hR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,V2=i,V2}var G2,JI;function vR(){if(JI)return G2;JI=1;function e(){this.__data__=[],this.size=0}return G2=e,G2}var K2,eB;function yg(){if(eB)return K2;eB=1;function e(t,n){return t===n||t!==t&&n!==n}return K2=e,K2}var Y2,tB;function $p(){if(tB)return Y2;tB=1;var e=yg();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Y2=t,Y2}var Q2,nB;function yR(){if(nB)return Q2;nB=1;var e=$p(),t=Array.prototype,n=t.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var l=i.length-1;return s==l?i.pop():n.call(i,s,1),--this.size,!0}return Q2=r,Q2}var X2,rB;function gR(){if(rB)return X2;rB=1;var e=$p();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return X2=t,X2}var Z2,aB;function bR(){if(aB)return Z2;aB=1;var e=$p();function t(n){return e(this.__data__,n)>-1}return Z2=t,Z2}var J2,oB;function IR(){if(oB)return J2;oB=1;var e=$p();function t(n,r){var a=this.__data__,i=e(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return J2=t,J2}var ed,iB;function Lp(){if(iB)return ed;iB=1;var e=vR(),t=yR(),n=gR(),r=bR(),a=IR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ed=i,ed}var td,uB;function gg(){if(uB)return td;uB=1;var e=Bo(),t=_r(),n=e(t,"Map");return td=n,td}var nd,sB;function BR(){if(sB)return nd;sB=1;var e=mR(),t=Lp(),n=gg();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return nd=r,nd}var rd,lB;function xR(){if(lB)return rd;lB=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return rd=e,rd}var ad,cB;function qp(){if(cB)return ad;cB=1;var e=xR();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return ad=t,ad}var od,pB;function wR(){if(pB)return od;pB=1;var e=qp();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return od=t,od}var id,fB;function PR(){if(fB)return id;fB=1;var e=qp();function t(n){return e(this,n).get(n)}return id=t,id}var ud,dB;function SR(){if(dB)return ud;dB=1;var e=qp();function t(n){return e(this,n).has(n)}return ud=t,ud}var sd,hB;function _R(){if(hB)return sd;hB=1;var e=qp();function t(n,r){var a=e(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return sd=t,sd}var ld,mB;function bg(){if(mB)return ld;mB=1;var e=BR(),t=wR(),n=PR(),r=SR(),a=_R();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ld=i,ld}var cd,vB;function __(){if(vB)return cd;vB=1;var e=bg(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var i=function(){var s=arguments,l=a?a.apply(this,s):s[0],p=i.cache;if(p.has(l))return p.get(l);var f=r.apply(this,s);return i.cache=p.set(l,f)||p,f};return i.cache=new(n.Cache||e),i}return n.Cache=e,cd=n,cd}var pd,yB;function AR(){if(yB)return pd;yB=1;var e=__(),t=500;function n(r){var a=e(r,function(s){return i.size===t&&i.clear(),s}),i=a.cache;return a}return pd=n,pd}var fd,gB;function OR(){if(gB)return fd;gB=1;var e=AR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(t,function(s,l,p,f){i.push(p?f.replace(n,"$1"):l||s)}),i});return fd=r,fd}var dd,bB;function Ig(){if(bB)return dd;bB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=Array(a);++r<a;)i[r]=n(t[r],r,t);return i}return dd=e,dd}var hd,IB;function WR(){if(IB)return hd;IB=1;var e=Us(),t=Ig(),n=gn(),r=Ui(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return i?i.call(l):"";var p=l+"";return p=="0"&&1/l==-1/0?"-0":p}return hd=s,hd}var md,BB;function A_(){if(BB)return md;BB=1;var e=WR();function t(n){return n==null?"":e(n)}return md=t,md}var vd,xB;function O_(){if(xB)return vd;xB=1;var e=gn(),t=mg(),n=OR(),r=A_();function a(i,s){return e(i)?i:t(i,s)?[i]:n(r(i))}return vd=a,vd}var yd,wB;function Fp(){if(wB)return yd;wB=1;var e=Ui();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return yd=t,yd}var gd,PB;function Bg(){if(PB)return gd;PB=1;var e=O_(),t=Fp();function n(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[t(a[i++])];return i&&i==s?r:void 0}return gd=n,gd}var bd,SB;function W_(){if(SB)return bd;SB=1;var e=Bg();function t(n,r,a){var i=n==null?void 0:e(n,r);return i===void 0?a:i}return bd=t,bd}var MR=W_();const On=Xe(MR);var Id,_B;function CR(){if(_B)return Id;_B=1;function e(t){return t==null}return Id=e,Id}var kR=CR();const Ee=Xe(kR);var Bd,AB;function ER(){if(AB)return Bd;AB=1;var e=Qr(),t=gn(),n=Xr(),r="[object String]";function a(i){return typeof i=="string"||!t(i)&&n(i)&&e(i)==r}return Bd=a,Bd}var TR=ER();const Vs=Xe(TR);var NR=vg();const ke=Xe(NR);var RR=ja();const Vi=Xe(RR);var xd={exports:{}},Ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OB;function jR(){if(OB)return Ye;OB=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function I(g){if(typeof g=="object"&&g!==null){var S=g.$$typeof;switch(S){case e:switch(g=g.type,g){case n:case a:case r:case f:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case s:case p:case v:case h:case i:return g;default:return S}}case t:return S}}}return Ye.ContextConsumer=s,Ye.ContextProvider=i,Ye.Element=e,Ye.ForwardRef=p,Ye.Fragment=n,Ye.Lazy=v,Ye.Memo=h,Ye.Portal=t,Ye.Profiler=a,Ye.StrictMode=r,Ye.Suspense=f,Ye.SuspenseList=d,Ye.isAsyncMode=function(){return!1},Ye.isConcurrentMode=function(){return!1},Ye.isContextConsumer=function(g){return I(g)===s},Ye.isContextProvider=function(g){return I(g)===i},Ye.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},Ye.isForwardRef=function(g){return I(g)===p},Ye.isFragment=function(g){return I(g)===n},Ye.isLazy=function(g){return I(g)===v},Ye.isMemo=function(g){return I(g)===h},Ye.isPortal=function(g){return I(g)===t},Ye.isProfiler=function(g){return I(g)===a},Ye.isStrictMode=function(g){return I(g)===r},Ye.isSuspense=function(g){return I(g)===f},Ye.isSuspenseList=function(g){return I(g)===d},Ye.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===n||g===a||g===r||g===f||g===d||g===b||typeof g=="object"&&g!==null&&(g.$$typeof===v||g.$$typeof===h||g.$$typeof===i||g.$$typeof===s||g.$$typeof===p||g.$$typeof===x||g.getModuleId!==void 0)},Ye.typeOf=I,Ye}var WB;function HR(){return WB||(WB=1,xd.exports=jR()),xd.exports}var DR=HR(),wd,MB;function M_(){if(MB)return wd;MB=1;var e=Qr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return wd=r,wd}var Pd,CB;function $R(){if(CB)return Pd;CB=1;var e=M_();function t(n){return e(n)&&n!=+n}return Pd=t,Pd}var LR=$R();const Gi=Xe(LR);var qR=M_();const FR=Xe(qR);var an=function(t){return t===0?0:t>0?1:-1},lo=function(t){return Vs(t)&&t.indexOf("%")===t.length-1},le=function(t){return FR(t)&&!Gi(t)},Rt=function(t){return le(t)||Vs(t)},zR=0,Ha=function(t){var n=++zR;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Vs(t))return r;var i;if(lo(t)){var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Gi(i)&&(i=r),a&&i>n&&(i=n),i},_a=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},UR=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function kc(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):On(r,t))===n})}var VR=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,i=0,s=0,l=1/0,p=-1/0,f=0,d=0,h=0;h<n;h++)f=t[h].cx||0,d=t[h].cy||0,r+=f,a+=d,i+=f*d,s+=f*f,l=Math.min(l,f),p=Math.max(p,f);var v=n*s!==r*r?(n*i-r*a)/(n*s-r*r):0;return{xmin:l,xmax:p,a:v,b:(a-v*r)/n}};function si(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Rv(e){"@babel/helpers - typeof";return Rv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rv(e)}var GR=["viewBox","children"],KR=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],kB=["points","pathLength"],Sd={svg:GR,polygon:kB,polyline:kB},xg=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Ec=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(X.isValidElement(t)&&(r=t.props),!Vi(r))return null;var a={};return Object.keys(r).forEach(function(i){xg.includes(i)&&(a[i]=n||function(s){return r[i](r,s)})}),a},YR=function(t,n,r){return function(a){return t(n,r,a),null}},Ta=function(t,n,r){if(!Vi(t)||Rv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(i){var s=t[i];xg.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=YR(s,n,r))}),a},QR=["children"],XR=["children"];function EB(e,t){if(e==null)return{};var n=ZR(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ZR(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function jv(e){"@babel/helpers - typeof";return jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jv(e)}var TB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},NB=null,_d=null,wg=function e(t){if(t===NB&&Array.isArray(_d))return _d;var n=[];return X.Children.forEach(t,function(r){Ee(r)||(DR.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),_d=n,NB=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],wg(e).forEach(function(a){var i=On(a,"type.displayName")||On(a,"type.name");r.indexOf(i)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var RB=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},JR=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],ej=function(t){return t&&t.type&&Vs(t.type)&&JR.indexOf(t.type)>=0},C_=function(t){return t&&jv(t)==="object"&&"clipDot"in t},tj=function(t,n,r,a){var i,s=(i=Sd==null?void 0:Sd[a])!==null&&i!==void 0?i:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||KR.includes(n))||r&&xg.includes(n)},_e=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(X.isValidElement(t)&&(a=t.props),!Vi(a))return null;var i={};return Object.keys(a).forEach(function(s){var l;tj((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(i[s]=a[s])}),i},Hv=function e(t,n){if(t===n)return!0;var r=X.Children.count(t);if(r!==X.Children.count(n))return!1;if(r===0)return!0;if(r===1)return jB(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var i=t[a],s=n[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!jB(i,s))return!1}return!0},jB=function(t,n){if(Ee(t)&&Ee(n))return!0;if(!Ee(t)&&!Ee(n)){var r=t.props||{},a=r.children,i=EB(r,QR),s=n.props||{},l=s.children,p=EB(s,XR);return a&&l?si(i,p)&&Hv(a,l):!a&&!l?si(i,p):!1}return!1},HB=function(t,n){var r=[],a={};return wg(t).forEach(function(i,s){if(ej(i))r.push(i);else if(i){var l=Ur(i.type),p=n[l]||{},f=p.handler,d=p.once;if(f&&(!d||!a[l])){var h=f(i,l,s);r.push(h),a[l]=!0}}}),r},nj=function(t){var n=t&&t.type;return n&&TB[n]?TB[n]:null},rj=function(t,n){return wg(n).indexOf(t)},aj=["children","width","height","viewBox","className","style","title","desc"];function Dv(){return Dv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dv.apply(this,arguments)}function oj(e,t){if(e==null)return{};var n=ij(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ij(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function $v(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,l=e.title,p=e.desc,f=oj(e,aj),d=a||{width:n,height:r,x:0,y:0},h=je("recharts-surface",i);return j.createElement("svg",Dv({},_e(f,!0,"svg"),{className:h,width:n,height:r,style:s,viewBox:"".concat(d.x," ").concat(d.y," ").concat(d.width," ").concat(d.height)}),j.createElement("title",null,l),j.createElement("desc",null,p),t)}var uj=["children","className"];function Lv(){return Lv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lv.apply(this,arguments)}function sj(e,t){if(e==null)return{};var n=lj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function lj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=j.forwardRef(function(e,t){var n=e.children,r=e.className,a=sj(e,uj),i=je("recharts-layer",r);return j.createElement("g",Lv({className:i},_e(a,!0),{ref:t}),n)}),ur=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},Ad,DB;function cj(){if(DB)return Ad;DB=1;function e(t,n,r){var a=-1,i=t.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(i);++a<i;)s[a]=t[a+n];return s}return Ad=e,Ad}var Od,$B;function pj(){if($B)return Od;$B=1;var e=cj();function t(n,r,a){var i=n.length;return a=a===void 0?i:a,!r&&a>=i?n:e(n,r,a)}return Od=t,Od}var Wd,LB;function k_(){if(LB)return Wd;LB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+i+"]");function p(f){return l.test(f)}return Wd=p,Wd}var Md,qB;function fj(){if(qB)return Md;qB=1;function e(t){return t.split("")}return Md=e,Md}var Cd,FB;function dj(){if(FB)return Cd;FB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",p="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+p+")",d="[^"+e+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",x=f+"?",I="["+i+"]?",g="(?:"+b+"(?:"+[d,h,v].join("|")+")"+I+x+")*",S=I+x+g,_="(?:"+[d+l+"?",l,h,v,s].join("|")+")",A=RegExp(p+"(?="+p+")|"+_+S,"g");function W(w){return w.match(A)||[]}return Cd=W,Cd}var kd,zB;function hj(){if(zB)return kd;zB=1;var e=fj(),t=k_(),n=dj();function r(a){return t(a)?n(a):e(a)}return kd=r,kd}var Ed,UB;function mj(){if(UB)return Ed;UB=1;var e=pj(),t=k_(),n=hj(),r=A_();function a(i){return function(s){s=r(s);var l=t(s)?n(s):void 0,p=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return p[i]()+f}}return Ed=a,Ed}var Td,VB;function vj(){if(VB)return Td;VB=1;var e=mj(),t=e("toUpperCase");return Td=t,Td}var yj=vj();const zp=Xe(yj);function at(e){return function(){return e}}const E_=Math.cos,Tc=Math.sin,lr=Math.sqrt,Nc=Math.PI,Up=2*Nc,qv=Math.PI,Fv=2*qv,io=1e-6,gj=Fv-io;function T_(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function bj(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return T_;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class Ij{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?T_:bj(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,p=r-t,f=a-n,d=s-t,h=l-n,v=d*d+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>io)if(!(Math.abs(h*p-f*d)>io)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let b=r-s,x=a-l,I=p*p+f*f,g=b*b+x*x,S=Math.sqrt(I),_=Math.sqrt(v),A=i*Math.tan((qv-Math.acos((I+v-g)/(2*S*_)))/2),W=A/_,w=A/S;Math.abs(W-1)>io&&this._append`L${t+W*d},${n+W*h}`,this._append`A${i},${i},0,0,${+(h*b>d*x)},${this._x1=t+w*p},${this._y1=n+w*f}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),p=r*Math.sin(a),f=t+l,d=n+p,h=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${d}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-d)>io)&&this._append`L${f},${d}`,r&&(v<0&&(v=v%Fv+Fv),v>gj?this._append`A${r},${r},0,1,${h},${t-l},${n-p}A${r},${r},0,1,${h},${this._x1=f},${this._y1=d}`:v>io&&this._append`A${r},${r},0,${+(v>=qv)},${h},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Pg(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Ij(t)}function Sg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function N_(e){this._context=e}N_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Vp(e){return new N_(e)}function R_(e){return e[0]}function j_(e){return e[1]}function H_(e,t){var n=at(!0),r=null,a=Vp,i=null,s=Pg(l);e=typeof e=="function"?e:e===void 0?R_:at(e),t=typeof t=="function"?t:t===void 0?j_:at(t);function l(p){var f,d=(p=Sg(p)).length,h,v=!1,b;for(r==null&&(i=a(b=s())),f=0;f<=d;++f)!(f<d&&n(h=p[f],f,p))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(h,f,p),+t(h,f,p));if(b)return i=null,b+""||null}return l.x=function(p){return arguments.length?(e=typeof p=="function"?p:at(+p),l):e},l.y=function(p){return arguments.length?(t=typeof p=="function"?p:at(+p),l):t},l.defined=function(p){return arguments.length?(n=typeof p=="function"?p:at(!!p),l):n},l.curve=function(p){return arguments.length?(a=p,r!=null&&(i=a(r)),l):a},l.context=function(p){return arguments.length?(p==null?r=i=null:i=a(r=p),l):r},l}function fc(e,t,n){var r=null,a=at(!0),i=null,s=Vp,l=null,p=Pg(f);e=typeof e=="function"?e:e===void 0?R_:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?j_:at(+n);function f(h){var v,b,x,I=(h=Sg(h)).length,g,S=!1,_,A=new Array(I),W=new Array(I);for(i==null&&(l=s(_=p())),v=0;v<=I;++v){if(!(v<I&&a(g=h[v],v,h))===S)if(S=!S)b=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),x=v-1;x>=b;--x)l.point(A[x],W[x]);l.lineEnd(),l.areaEnd()}S&&(A[v]=+e(g,v,h),W[v]=+t(g,v,h),l.point(r?+r(g,v,h):A[v],n?+n(g,v,h):W[v]))}if(_)return l=null,_+""||null}function d(){return H_().defined(a).curve(s).context(i)}return f.x=function(h){return arguments.length?(e=typeof h=="function"?h:at(+h),r=null,f):e},f.x0=function(h){return arguments.length?(e=typeof h=="function"?h:at(+h),f):e},f.x1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:at(+h),f):r},f.y=function(h){return arguments.length?(t=typeof h=="function"?h:at(+h),n=null,f):t},f.y0=function(h){return arguments.length?(t=typeof h=="function"?h:at(+h),f):t},f.y1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:at(+h),f):n},f.lineX0=f.lineY0=function(){return d().x(e).y(t)},f.lineY1=function(){return d().x(e).y(n)},f.lineX1=function(){return d().x(r).y(t)},f.defined=function(h){return arguments.length?(a=typeof h=="function"?h:at(!!h),f):a},f.curve=function(h){return arguments.length?(s=h,i!=null&&(l=s(i)),f):s},f.context=function(h){return arguments.length?(h==null?i=l=null:l=s(i=h),f):i},f}class D_{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function Bj(e){return new D_(e,!0)}function xj(e){return new D_(e,!1)}const _g={draw(e,t){const n=lr(t/Nc);e.moveTo(n,0),e.arc(0,0,n,0,Up)}},wj={draw(e,t){const n=lr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},$_=lr(1/3),Pj=$_*2,Sj={draw(e,t){const n=lr(t/Pj),r=n*$_;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},_j={draw(e,t){const n=lr(t),r=-n/2;e.rect(r,r,n,n)}},Aj=.8908130915292852,L_=Tc(Nc/10)/Tc(7*Nc/10),Oj=Tc(Up/10)*L_,Wj=-E_(Up/10)*L_,Mj={draw(e,t){const n=lr(t*Aj),r=Oj*n,a=Wj*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Up*i/5,l=E_(s),p=Tc(s);e.lineTo(p*n,-l*n),e.lineTo(l*r-p*a,p*r+l*a)}e.closePath()}},Nd=lr(3),Cj={draw(e,t){const n=-lr(t/(Nd*3));e.moveTo(0,n*2),e.lineTo(-Nd*n,-n),e.lineTo(Nd*n,-n),e.closePath()}},Hn=-.5,Dn=lr(3)/2,zv=1/lr(12),kj=(zv/2+1)*3,Ej={draw(e,t){const n=lr(t/kj),r=n/2,a=n*zv,i=r,s=n*zv+n,l=-i,p=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,p),e.lineTo(Hn*r-Dn*a,Dn*r+Hn*a),e.lineTo(Hn*i-Dn*s,Dn*i+Hn*s),e.lineTo(Hn*l-Dn*p,Dn*l+Hn*p),e.lineTo(Hn*r+Dn*a,Hn*a-Dn*r),e.lineTo(Hn*i+Dn*s,Hn*s-Dn*i),e.lineTo(Hn*l+Dn*p,Hn*p-Dn*l),e.closePath()}};function Tj(e,t){let n=null,r=Pg(a);e=typeof e=="function"?e:at(e||_g),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:at(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:at(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function Rc(){}function jc(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function q_(e){this._context=e}q_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:jc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:jc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Nj(e){return new q_(e)}function F_(e){this._context=e}F_.prototype={areaStart:Rc,areaEnd:Rc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:jc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Rj(e){return new F_(e)}function z_(e){this._context=e}z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:jc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function jj(e){return new z_(e)}function U_(e){this._context=e}U_.prototype={areaStart:Rc,areaEnd:Rc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function Hj(e){return new U_(e)}function GB(e){return e<0?-1:1}function KB(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(GB(i)+GB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function YB(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Rd(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function Hc(e){this._context=e}Hc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Rd(this,this._t0,YB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Rd(this,YB(this,n=KB(this,e,t)),n);break;default:Rd(this,this._t0,n=KB(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function V_(e){this._context=new G_(e)}(V_.prototype=Object.create(Hc.prototype)).point=function(e,t){Hc.prototype.point.call(this,t,e)};function G_(e){this._context=e}G_.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function Dj(e){return new Hc(e)}function $j(e){return new V_(e)}function K_(e){this._context=e}K_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=QB(e),a=QB(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function QB(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function Lj(e){return new K_(e)}function Gp(e,t){this._context=e,this._t=t}Gp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function qj(e){return new Gp(e,.5)}function Fj(e){return new Gp(e,0)}function zj(e){return new Gp(e,1)}function fi(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Uv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function Uj(e,t){return e[t]}function Vj(e){const t=[];return t.key=e,t}function Gj(){var e=at([]),t=Uv,n=fi,r=Uj;function a(i){var s=Array.from(e.apply(this,arguments),Vj),l,p=s.length,f=-1,d;for(const h of i)for(l=0,++f;l<p;++l)(s[l][f]=[0,+r(h,s[l].key,f,i)]).data=h;for(l=0,d=Sg(t(s));l<p;++l)s[d[l]].index=l;return n(s,d),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:at(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:at(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?Uv:typeof i=="function"?i:at(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??fi,a):n},a}function Kj(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}fi(e,t)}}function Yj(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}fi(e,t)}}function Qj(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,p=0,f=0;l<s;++l){for(var d=e[t[l]],h=d[r][1]||0,v=d[r-1][1]||0,b=(h-v)/2,x=0;x<l;++x){var I=e[t[x]],g=I[r][1]||0,S=I[r-1][1]||0;b+=g-S}p+=h,f+=b*h}a[r-1][1]+=a[r-1][0]=n,p&&(n-=f/p)}a[r-1][1]+=a[r-1][0]=n,fi(e,t)}}function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}var Xj=["type","size","sizeType"];function Vv(){return Vv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vv.apply(this,arguments)}function XB(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ZB(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?XB(Object(n),!0).forEach(function(r){Zj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XB(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zj(e,t,n){return t=Jj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jj(e){var t=eH(e,"string");return cs(t)=="symbol"?t:t+""}function eH(e,t){if(cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tH(e,t){if(e==null)return{};var n=nH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Y_={symbolCircle:_g,symbolCross:wj,symbolDiamond:Sj,symbolSquare:_j,symbolStar:Mj,symbolTriangle:Cj,symbolWye:Ej},rH=Math.PI/180,aH=function(t){var n="symbol".concat(zp(t));return Y_[n]||_g},oH=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*rH;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},iH=function(t,n){Y_["symbol".concat(zp(t))]=n},Kp=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,i=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,p=tH(t,Xj),f=ZB(ZB({},p),{},{type:r,size:i,sizeType:l}),d=function(){var g=aH(r),S=Tj().type(g).size(oH(i,l,r));return S()},h=f.className,v=f.cx,b=f.cy,x=_e(f,!0);return v===+v&&b===+b&&i===+i?j.createElement("path",Vv({},x,{className:je("recharts-symbols",h),transform:"translate(".concat(v,", ").concat(b,")"),d:d()})):null};Kp.registerSymbol=iH;function di(e){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(e)}function Gv(){return Gv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gv.apply(this,arguments)}function JB(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function uH(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?JB(Object(n),!0).forEach(function(r){ps(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):JB(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lH(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X_(r.key),r)}}function cH(e,t,n){return t&&lH(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function pH(e,t,n){return t=Dc(t),fH(e,Q_()?Reflect.construct(t,n||[],Dc(e).constructor):t.apply(e,n))}function fH(e,t){if(t&&(di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dH(e)}function dH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Q_=function(){return!!e})()}function Dc(e){return Dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Dc(e)}function hH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kv(e,t)}function Kv(e,t){return Kv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kv(e,t)}function ps(e,t,n){return t=X_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X_(e){var t=mH(e,"string");return di(t)=="symbol"?t:t+""}function mH(e,t){if(di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $n=32,Ag=(function(e){function t(){return sH(this,t),pH(this,t,arguments)}return hH(t,e),cH(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=$n/2,s=$n/6,l=$n/3,p=r.inactive?a:r.color;if(r.type==="plainline")return j.createElement("line",{strokeWidth:4,fill:"none",stroke:p,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:$n,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return j.createElement("path",{strokeWidth:4,fill:"none",stroke:p,d:"M0,".concat(i,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(i,`
            H`).concat($n,"M").concat(2*l,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return j.createElement("path",{stroke:"none",fill:p,d:"M0,".concat($n/8,"h").concat($n,"v").concat($n*3/4,"h").concat(-$n,"z"),className:"recharts-legend-icon"});if(j.isValidElement(r.legendIcon)){var f=uH({},r);return delete f.legendIcon,j.cloneElement(r.legendIcon,f)}return j.createElement(Kp,{fill:p,cx:i,cy:i,size:$n,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,l=a.layout,p=a.formatter,f=a.inactiveColor,d={x:0,y:0,width:$n,height:$n},h={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(b,x){var I=b.formatter||p,g=je(ps(ps({"recharts-legend-item":!0},"legend-item-".concat(x),!0),"inactive",b.inactive));if(b.type==="none")return null;var S=ke(b.value)?null:b.value;ur(!ke(b.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var _=b.inactive?f:b.color;return j.createElement("li",Gv({className:g,style:h,key:"legend-item-".concat(x)},Ta(r.props,b,x)),j.createElement($v,{width:s,height:s,viewBox:d,style:v},r.renderIcon(b)),j.createElement("span",{className:"recharts-legend-item-text",style:{color:_}},I?I(S,b,x):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return j.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(X.PureComponent);ps(Ag,"displayName","Legend");ps(Ag,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var jd,ex;function vH(){if(ex)return jd;ex=1;var e=Lp();function t(){this.__data__=new e,this.size=0}return jd=t,jd}var Hd,tx;function yH(){if(tx)return Hd;tx=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return Hd=e,Hd}var Dd,nx;function gH(){if(nx)return Dd;nx=1;function e(t){return this.__data__.get(t)}return Dd=e,Dd}var $d,rx;function bH(){if(rx)return $d;rx=1;function e(t){return this.__data__.has(t)}return $d=e,$d}var Ld,ax;function IH(){if(ax)return Ld;ax=1;var e=Lp(),t=gg(),n=bg(),r=200;function a(i,s){var l=this.__data__;if(l instanceof e){var p=l.__data__;if(!t||p.length<r-1)return p.push([i,s]),this.size=++l.size,this;l=this.__data__=new n(p)}return l.set(i,s),this.size=l.size,this}return Ld=a,Ld}var qd,ox;function Z_(){if(ox)return qd;ox=1;var e=Lp(),t=vH(),n=yH(),r=gH(),a=bH(),i=IH();function s(l){var p=this.__data__=new e(l);this.size=p.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,qd=s,qd}var Fd,ix;function BH(){if(ix)return Fd;ix=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return Fd=t,Fd}var zd,ux;function xH(){if(ux)return zd;ux=1;function e(t){return this.__data__.has(t)}return zd=e,zd}var Ud,sx;function J_(){if(sx)return Ud;sx=1;var e=bg(),t=BH(),n=xH();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Ud=r,Ud}var Vd,lx;function eA(){if(lx)return Vd;lx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Vd=e,Vd}var Gd,cx;function tA(){if(cx)return Gd;cx=1;function e(t,n){return t.has(n)}return Gd=e,Gd}var Kd,px;function nA(){if(px)return Kd;px=1;var e=J_(),t=eA(),n=tA(),r=1,a=2;function i(s,l,p,f,d,h){var v=p&r,b=s.length,x=l.length;if(b!=x&&!(v&&x>b))return!1;var I=h.get(s),g=h.get(l);if(I&&g)return I==l&&g==s;var S=-1,_=!0,A=p&a?new e:void 0;for(h.set(s,l),h.set(l,s);++S<b;){var W=s[S],w=l[S];if(f)var O=v?f(w,W,S,l,s,h):f(W,w,S,s,l,h);if(O!==void 0){if(O)continue;_=!1;break}if(A){if(!t(l,function(E,P){if(!n(A,P)&&(W===E||d(W,E,p,f,h)))return A.push(P)})){_=!1;break}}else if(!(W===w||d(W,w,p,f,h))){_=!1;break}}return h.delete(s),h.delete(l),_}return Kd=i,Kd}var Yd,fx;function wH(){if(fx)return Yd;fx=1;var e=_r(),t=e.Uint8Array;return Yd=t,Yd}var Qd,dx;function PH(){if(dx)return Qd;dx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,i){r[++n]=[i,a]}),r}return Qd=e,Qd}var Xd,hx;function Og(){if(hx)return Xd;hx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Xd=e,Xd}var Zd,mx;function SH(){if(mx)return Zd;mx=1;var e=Us(),t=wH(),n=yg(),r=nA(),a=PH(),i=Og(),s=1,l=2,p="[object Boolean]",f="[object Date]",d="[object Error]",h="[object Map]",v="[object Number]",b="[object RegExp]",x="[object Set]",I="[object String]",g="[object Symbol]",S="[object ArrayBuffer]",_="[object DataView]",A=e?e.prototype:void 0,W=A?A.valueOf:void 0;function w(O,E,P,M,R,H,T){switch(P){case _:if(O.byteLength!=E.byteLength||O.byteOffset!=E.byteOffset)return!1;O=O.buffer,E=E.buffer;case S:return!(O.byteLength!=E.byteLength||!H(new t(O),new t(E)));case p:case f:case v:return n(+O,+E);case d:return O.name==E.name&&O.message==E.message;case b:case I:return O==E+"";case h:var L=a;case x:var G=M&s;if(L||(L=i),O.size!=E.size&&!G)return!1;var U=T.get(O);if(U)return U==E;M|=l,T.set(O,E);var K=r(L(O),L(E),M,R,H,T);return T.delete(O),K;case g:if(W)return W.call(O)==W.call(E)}return!1}return Zd=w,Zd}var Jd,vx;function rA(){if(vx)return Jd;vx=1;function e(t,n){for(var r=-1,a=n.length,i=t.length;++r<a;)t[i+r]=n[r];return t}return Jd=e,Jd}var eh,yx;function _H(){if(yx)return eh;yx=1;var e=rA(),t=gn();function n(r,a,i){var s=a(r);return t(r)?s:e(s,i(r))}return eh=n,eh}var th,gx;function AH(){if(gx)return th;gx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[i++]=l)}return s}return th=e,th}var nh,bx;function OH(){if(bx)return nh;bx=1;function e(){return[]}return nh=e,nh}var rh,Ix;function WH(){if(Ix)return rh;Ix=1;var e=AH(),t=OH(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return rh=i,rh}var ah,Bx;function MH(){if(Bx)return ah;Bx=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return ah=e,ah}var oh,xx;function CH(){if(xx)return oh;xx=1;var e=Qr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return oh=r,oh}var ih,wx;function Wg(){if(wx)return ih;wx=1;var e=CH(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return ih=i,ih}var Qu={exports:{}},uh,Px;function kH(){if(Px)return uh;Px=1;function e(){return!1}return uh=e,uh}Qu.exports;var Sx;function aA(){return Sx||(Sx=1,(function(e,t){var n=_r(),r=kH(),a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,l=s?n.Buffer:void 0,p=l?l.isBuffer:void 0,f=p||r;e.exports=f})(Qu,Qu.exports)),Qu.exports}var sh,_x;function Mg(){if(_x)return sh;_x=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return sh=n,sh}var lh,Ax;function Cg(){if(Ax)return lh;Ax=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return lh=t,lh}var ch,Ox;function EH(){if(Ox)return ch;Ox=1;var e=Qr(),t=Cg(),n=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",l="[object Error]",p="[object Function]",f="[object Map]",d="[object Number]",h="[object Object]",v="[object RegExp]",b="[object Set]",x="[object String]",I="[object WeakMap]",g="[object ArrayBuffer]",S="[object DataView]",_="[object Float32Array]",A="[object Float64Array]",W="[object Int8Array]",w="[object Int16Array]",O="[object Int32Array]",E="[object Uint8Array]",P="[object Uint8ClampedArray]",M="[object Uint16Array]",R="[object Uint32Array]",H={};H[_]=H[A]=H[W]=H[w]=H[O]=H[E]=H[P]=H[M]=H[R]=!0,H[r]=H[a]=H[g]=H[i]=H[S]=H[s]=H[l]=H[p]=H[f]=H[d]=H[h]=H[v]=H[b]=H[x]=H[I]=!1;function T(L){return n(L)&&t(L.length)&&!!H[e(L)]}return ch=T,ch}var ph,Wx;function oA(){if(Wx)return ph;Wx=1;function e(t){return function(n){return t(n)}}return ph=e,ph}var Xu={exports:{}};Xu.exports;var Mx;function TH(){return Mx||(Mx=1,(function(e,t){var n=P_(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&n.process,l=(function(){try{var p=a&&a.require&&a.require("util").types;return p||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(Xu,Xu.exports)),Xu.exports}var fh,Cx;function iA(){if(Cx)return fh;Cx=1;var e=EH(),t=oA(),n=TH(),r=n&&n.isTypedArray,a=r?t(r):e;return fh=a,fh}var dh,kx;function NH(){if(kx)return dh;kx=1;var e=MH(),t=Wg(),n=gn(),r=aA(),a=Mg(),i=iA(),s=Object.prototype,l=s.hasOwnProperty;function p(f,d){var h=n(f),v=!h&&t(f),b=!h&&!v&&r(f),x=!h&&!v&&!b&&i(f),I=h||v||b||x,g=I?e(f.length,String):[],S=g.length;for(var _ in f)(d||l.call(f,_))&&!(I&&(_=="length"||b&&(_=="offset"||_=="parent")||x&&(_=="buffer"||_=="byteLength"||_=="byteOffset")||a(_,S)))&&g.push(_);return g}return dh=p,dh}var hh,Ex;function RH(){if(Ex)return hh;Ex=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return hh=t,hh}var mh,Tx;function uA(){if(Tx)return mh;Tx=1;function e(t,n){return function(r){return t(n(r))}}return mh=e,mh}var vh,Nx;function jH(){if(Nx)return vh;Nx=1;var e=uA(),t=e(Object.keys,Object);return vh=t,vh}var yh,Rx;function HH(){if(Rx)return yh;Rx=1;var e=RH(),t=jH(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!e(i))return t(i);var s=[];for(var l in Object(i))r.call(i,l)&&l!="constructor"&&s.push(l);return s}return yh=a,yh}var gh,jx;function Gs(){if(jx)return gh;jx=1;var e=vg(),t=Cg();function n(r){return r!=null&&t(r.length)&&!e(r)}return gh=n,gh}var bh,Hx;function Yp(){if(Hx)return bh;Hx=1;var e=NH(),t=HH(),n=Gs();function r(a){return n(a)?e(a):t(a)}return bh=r,bh}var Ih,Dx;function DH(){if(Dx)return Ih;Dx=1;var e=_H(),t=WH(),n=Yp();function r(a){return e(a,n,t)}return Ih=r,Ih}var Bh,$x;function $H(){if($x)return Bh;$x=1;var e=DH(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,l,p,f,d){var h=l&t,v=e(i),b=v.length,x=e(s),I=x.length;if(b!=I&&!h)return!1;for(var g=b;g--;){var S=v[g];if(!(h?S in s:r.call(s,S)))return!1}var _=d.get(i),A=d.get(s);if(_&&A)return _==s&&A==i;var W=!0;d.set(i,s),d.set(s,i);for(var w=h;++g<b;){S=v[g];var O=i[S],E=s[S];if(p)var P=h?p(E,O,S,s,i,d):p(O,E,S,i,s,d);if(!(P===void 0?O===E||f(O,E,l,p,d):P)){W=!1;break}w||(w=S=="constructor")}if(W&&!w){var M=i.constructor,R=s.constructor;M!=R&&"constructor"in i&&"constructor"in s&&!(typeof M=="function"&&M instanceof M&&typeof R=="function"&&R instanceof R)&&(W=!1)}return d.delete(i),d.delete(s),W}return Bh=a,Bh}var xh,Lx;function LH(){if(Lx)return xh;Lx=1;var e=Bo(),t=_r(),n=e(t,"DataView");return xh=n,xh}var wh,qx;function qH(){if(qx)return wh;qx=1;var e=Bo(),t=_r(),n=e(t,"Promise");return wh=n,wh}var Ph,Fx;function sA(){if(Fx)return Ph;Fx=1;var e=Bo(),t=_r(),n=e(t,"Set");return Ph=n,Ph}var Sh,zx;function FH(){if(zx)return Sh;zx=1;var e=Bo(),t=_r(),n=e(t,"WeakMap");return Sh=n,Sh}var _h,Ux;function zH(){if(Ux)return _h;Ux=1;var e=LH(),t=gg(),n=qH(),r=sA(),a=FH(),i=Qr(),s=S_(),l="[object Map]",p="[object Object]",f="[object Promise]",d="[object Set]",h="[object WeakMap]",v="[object DataView]",b=s(e),x=s(t),I=s(n),g=s(r),S=s(a),_=i;return(e&&_(new e(new ArrayBuffer(1)))!=v||t&&_(new t)!=l||n&&_(n.resolve())!=f||r&&_(new r)!=d||a&&_(new a)!=h)&&(_=function(A){var W=i(A),w=W==p?A.constructor:void 0,O=w?s(w):"";if(O)switch(O){case b:return v;case x:return l;case I:return f;case g:return d;case S:return h}return W}),_h=_,_h}var Ah,Vx;function UH(){if(Vx)return Ah;Vx=1;var e=Z_(),t=nA(),n=SH(),r=$H(),a=zH(),i=gn(),s=aA(),l=iA(),p=1,f="[object Arguments]",d="[object Array]",h="[object Object]",v=Object.prototype,b=v.hasOwnProperty;function x(I,g,S,_,A,W){var w=i(I),O=i(g),E=w?d:a(I),P=O?d:a(g);E=E==f?h:E,P=P==f?h:P;var M=E==h,R=P==h,H=E==P;if(H&&s(I)){if(!s(g))return!1;w=!0,M=!1}if(H&&!M)return W||(W=new e),w||l(I)?t(I,g,S,_,A,W):n(I,g,E,S,_,A,W);if(!(S&p)){var T=M&&b.call(I,"__wrapped__"),L=R&&b.call(g,"__wrapped__");if(T||L){var G=T?I.value():I,U=L?g.value():g;return W||(W=new e),A(G,U,S,_,W)}}return H?(W||(W=new e),r(I,g,S,_,A,W)):!1}return Ah=x,Ah}var Oh,Gx;function kg(){if(Gx)return Oh;Gx=1;var e=UH(),t=Xr();function n(r,a,i,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,i,s,n,l)}return Oh=n,Oh}var Wh,Kx;function VH(){if(Kx)return Wh;Kx=1;var e=Z_(),t=kg(),n=1,r=2;function a(i,s,l,p){var f=l.length,d=f,h=!p;if(i==null)return!d;for(i=Object(i);f--;){var v=l[f];if(h&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<d;){v=l[f];var b=v[0],x=i[b],I=v[1];if(h&&v[2]){if(x===void 0&&!(b in i))return!1}else{var g=new e;if(p)var S=p(x,I,b,i,s,g);if(!(S===void 0?t(I,x,n|r,p,g):S))return!1}}return!0}return Wh=a,Wh}var Mh,Yx;function lA(){if(Yx)return Mh;Yx=1;var e=ja();function t(n){return n===n&&!e(n)}return Mh=t,Mh}var Ch,Qx;function GH(){if(Qx)return Ch;Qx=1;var e=lA(),t=Yp();function n(r){for(var a=t(r),i=a.length;i--;){var s=a[i],l=r[s];a[i]=[s,l,e(l)]}return a}return Ch=n,Ch}var kh,Xx;function cA(){if(Xx)return kh;Xx=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return kh=e,kh}var Eh,Zx;function KH(){if(Zx)return Eh;Zx=1;var e=VH(),t=GH(),n=cA();function r(a){var i=t(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Eh=r,Eh}var Th,Jx;function YH(){if(Jx)return Th;Jx=1;function e(t,n){return t!=null&&n in Object(t)}return Th=e,Th}var Nh,ew;function QH(){if(ew)return Nh;ew=1;var e=O_(),t=Wg(),n=gn(),r=Mg(),a=Cg(),i=Fp();function s(l,p,f){p=e(p,l);for(var d=-1,h=p.length,v=!1;++d<h;){var b=i(p[d]);if(!(v=l!=null&&f(l,b)))break;l=l[b]}return v||++d!=h?v:(h=l==null?0:l.length,!!h&&a(h)&&r(b,h)&&(n(l)||t(l)))}return Nh=s,Nh}var Rh,tw;function XH(){if(tw)return Rh;tw=1;var e=YH(),t=QH();function n(r,a){return r!=null&&t(r,a,e)}return Rh=n,Rh}var jh,nw;function ZH(){if(nw)return jh;nw=1;var e=kg(),t=W_(),n=XH(),r=mg(),a=lA(),i=cA(),s=Fp(),l=1,p=2;function f(d,h){return r(d)&&a(h)?i(s(d),h):function(v){var b=t(v,d);return b===void 0&&b===h?n(v,d):e(h,b,l|p)}}return jh=f,jh}var Hh,rw;function Ki(){if(rw)return Hh;rw=1;function e(t){return t}return Hh=e,Hh}var Dh,aw;function JH(){if(aw)return Dh;aw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return Dh=e,Dh}var $h,ow;function eD(){if(ow)return $h;ow=1;var e=Bg();function t(n){return function(r){return e(r,n)}}return $h=t,$h}var Lh,iw;function tD(){if(iw)return Lh;iw=1;var e=JH(),t=eD(),n=mg(),r=Fp();function a(i){return n(i)?e(r(i)):t(i)}return Lh=a,Lh}var qh,uw;function Ar(){if(uw)return qh;uw=1;var e=KH(),t=ZH(),n=Ki(),r=gn(),a=tD();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return qh=i,qh}var Fh,sw;function pA(){if(sw)return Fh;sw=1;function e(t,n,r,a){for(var i=t.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(t[s],s,t))return s;return-1}return Fh=e,Fh}var zh,lw;function nD(){if(lw)return zh;lw=1;function e(t){return t!==t}return zh=e,zh}var Uh,cw;function rD(){if(cw)return Uh;cw=1;function e(t,n,r){for(var a=r-1,i=t.length;++a<i;)if(t[a]===n)return a;return-1}return Uh=e,Uh}var Vh,pw;function aD(){if(pw)return Vh;pw=1;var e=pA(),t=nD(),n=rD();function r(a,i,s){return i===i?n(a,i,s):e(a,t,s)}return Vh=r,Vh}var Gh,fw;function oD(){if(fw)return Gh;fw=1;var e=aD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Gh=t,Gh}var Kh,dw;function iD(){if(dw)return Kh;dw=1;function e(t,n,r){for(var a=-1,i=t==null?0:t.length;++a<i;)if(r(n,t[a]))return!0;return!1}return Kh=e,Kh}var Yh,hw;function uD(){if(hw)return Yh;hw=1;function e(){}return Yh=e,Yh}var Qh,mw;function sD(){if(mw)return Qh;mw=1;var e=sA(),t=uD(),n=Og(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(i){return new e(i)}:t;return Qh=a,Qh}var Xh,vw;function lD(){if(vw)return Xh;vw=1;var e=J_(),t=oD(),n=iD(),r=tA(),a=sD(),i=Og(),s=200;function l(p,f,d){var h=-1,v=t,b=p.length,x=!0,I=[],g=I;if(d)x=!1,v=n;else if(b>=s){var S=f?null:a(p);if(S)return i(S);x=!1,v=r,g=new e}else g=f?[]:I;e:for(;++h<b;){var _=p[h],A=f?f(_):_;if(_=d||_!==0?_:0,x&&A===A){for(var W=g.length;W--;)if(g[W]===A)continue e;f&&g.push(A),I.push(_)}else v(g,A,d)||(g!==I&&g.push(A),I.push(_))}return I}return Xh=l,Xh}var Zh,yw;function cD(){if(yw)return Zh;yw=1;var e=Ar(),t=lD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return Zh=n,Zh}var pD=cD();const gw=Xe(pD);function fA(e,t,n){return t===!0?gw(e,n):ke(t)?gw(e,t):e}function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}var fD=["ref"];function bw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bw(Object(n),!0).forEach(function(r){Qp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,hA(r.key),r)}}function hD(e,t,n){return t&&Iw(e.prototype,t),n&&Iw(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mD(e,t,n){return t=$c(t),vD(e,dA()?Reflect.construct(t,n||[],$c(e).constructor):t.apply(e,n))}function vD(e,t){if(t&&(hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yD(e)}function yD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dA=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$c(e)}function gD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yv(e,t)}function Yv(e,t){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(e,t)}function Qp(e,t,n){return t=hA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hA(e){var t=bD(e,"string");return hi(t)=="symbol"?t:t+""}function bD(e,t){if(hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ID(e,t){if(e==null)return{};var n=BD(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function BD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function xD(e){return e.value}function wD(e,t){if(j.isValidElement(e))return j.cloneElement(e,t);if(typeof e=="function")return j.createElement(e,t);t.ref;var n=ID(t,fD);return j.createElement(Ag,n)}var Bw=1,Ma=(function(e){function t(){var n;dD(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=mD(this,t,[].concat(a)),Qp(n,"lastBoundingBox",{width:-1,height:-1}),n}return gD(t,e),hD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Bw||Math.abs(a.height-this.lastBoundingBox.height)>Bw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?jr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,l=a.verticalAlign,p=a.margin,f=a.chartWidth,d=a.chartHeight,h,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var b=this.getBBoxSnapshot();h={left:((f||0)-b.width)/2}}else h=s==="right"?{right:p&&p.right||0}:{left:p&&p.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var x=this.getBBoxSnapshot();v={top:((d||0)-x.height)/2}}else v=l==="bottom"?{bottom:p&&p.bottom||0}:{top:p&&p.top||0};return jr(jr({},h),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,l=a.height,p=a.wrapperStyle,f=a.payloadUniqBy,d=a.payload,h=jr(jr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(p)),p);return j.createElement("div",{className:"recharts-legend-wrapper",style:h,ref:function(b){r.wrapperNode=b}},wD(i,jr(jr({},this.props),{},{payload:fA(d,f,xD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=jr(jr({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(X.PureComponent);Qp(Ma,"displayName","Legend");Qp(Ma,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Jh,xw;function PD(){if(xw)return Jh;xw=1;var e=Us(),t=Wg(),n=gn(),r=e?e.isConcatSpreadable:void 0;function a(i){return n(i)||t(i)||!!(r&&i&&i[r])}return Jh=a,Jh}var em,ww;function mA(){if(ww)return em;ww=1;var e=rA(),t=PD();function n(r,a,i,s,l){var p=-1,f=r.length;for(i||(i=t),l||(l=[]);++p<f;){var d=r[p];a>0&&i(d)?a>1?n(d,a-1,i,s,l):e(l,d):s||(l[l.length]=d)}return l}return em=n,em}var tm,Pw;function SD(){if(Pw)return tm;Pw=1;function e(t){return function(n,r,a){for(var i=-1,s=Object(n),l=a(n),p=l.length;p--;){var f=l[t?p:++i];if(r(s[f],f,s)===!1)break}return n}}return tm=e,tm}var nm,Sw;function _D(){if(Sw)return nm;Sw=1;var e=SD(),t=e();return nm=t,nm}var rm,_w;function vA(){if(_w)return rm;_w=1;var e=_D(),t=Yp();function n(r,a){return r&&e(r,a,t)}return rm=n,rm}var am,Aw;function AD(){if(Aw)return am;Aw=1;var e=Gs();function t(n,r){return function(a,i){if(a==null)return a;if(!e(a))return n(a,i);for(var s=a.length,l=r?s:-1,p=Object(a);(r?l--:++l<s)&&i(p[l],l,p)!==!1;);return a}}return am=t,am}var om,Ow;function Eg(){if(Ow)return om;Ow=1;var e=vA(),t=AD(),n=t(e);return om=n,om}var im,Ww;function yA(){if(Ww)return im;Ww=1;var e=Eg(),t=Gs();function n(r,a){var i=-1,s=t(r)?Array(r.length):[];return e(r,function(l,p,f){s[++i]=a(l,p,f)}),s}return im=n,im}var um,Mw;function OD(){if(Mw)return um;Mw=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return um=e,um}var sm,Cw;function WD(){if(Cw)return sm;Cw=1;var e=Ui();function t(n,r){if(n!==r){var a=n!==void 0,i=n===null,s=n===n,l=e(n),p=r!==void 0,f=r===null,d=r===r,h=e(r);if(!f&&!h&&!l&&n>r||l&&p&&d&&!f&&!h||i&&p&&d||!a&&d||!s)return 1;if(!i&&!l&&!h&&n<r||h&&a&&s&&!i&&!l||f&&a&&s||!p&&s||!d)return-1}return 0}return sm=t,sm}var lm,kw;function MD(){if(kw)return lm;kw=1;var e=WD();function t(n,r,a){for(var i=-1,s=n.criteria,l=r.criteria,p=s.length,f=a.length;++i<p;){var d=e(s[i],l[i]);if(d){if(i>=f)return d;var h=a[i];return d*(h=="desc"?-1:1)}}return n.index-r.index}return lm=t,lm}var cm,Ew;function CD(){if(Ew)return cm;Ew=1;var e=Ig(),t=Bg(),n=Ar(),r=yA(),a=OD(),i=oA(),s=MD(),l=Ki(),p=gn();function f(d,h,v){h.length?h=e(h,function(I){return p(I)?function(g){return t(g,I.length===1?I[0]:I)}:I}):h=[l];var b=-1;h=e(h,i(n));var x=r(d,function(I,g,S){var _=e(h,function(A){return A(I)});return{criteria:_,index:++b,value:I}});return a(x,function(I,g){return s(I,g,v)})}return cm=f,cm}var pm,Tw;function kD(){if(Tw)return pm;Tw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return pm=e,pm}var fm,Nw;function ED(){if(Nw)return fm;Nw=1;var e=kD(),t=Math.max;function n(r,a,i){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,p=t(s.length-a,0),f=Array(p);++l<p;)f[l]=s[a+l];l=-1;for(var d=Array(a+1);++l<a;)d[l]=s[l];return d[a]=i(f),e(r,this,d)}}return fm=n,fm}var dm,Rw;function TD(){if(Rw)return dm;Rw=1;function e(t){return function(){return t}}return dm=e,dm}var hm,jw;function gA(){if(jw)return hm;jw=1;var e=Bo(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return hm=t,hm}var mm,Hw;function ND(){if(Hw)return mm;Hw=1;var e=TD(),t=gA(),n=Ki(),r=t?function(a,i){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:n;return mm=r,mm}var vm,Dw;function RD(){if(Dw)return vm;Dw=1;var e=800,t=16,n=Date.now;function r(a){var i=0,s=0;return function(){var l=n(),p=t-(l-s);if(s=l,p>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return vm=r,vm}var ym,$w;function jD(){if($w)return ym;$w=1;var e=ND(),t=RD(),n=t(e);return ym=n,ym}var gm,Lw;function HD(){if(Lw)return gm;Lw=1;var e=Ki(),t=ED(),n=jD();function r(a,i){return n(t(a,i,e),a+"")}return gm=r,gm}var bm,qw;function Xp(){if(qw)return bm;qw=1;var e=yg(),t=Gs(),n=Mg(),r=ja();function a(i,s,l){if(!r(l))return!1;var p=typeof s;return(p=="number"?t(l)&&n(s,l.length):p=="string"&&s in l)?e(l[s],i):!1}return bm=a,bm}var Im,Fw;function DD(){if(Fw)return Im;Fw=1;var e=mA(),t=CD(),n=HD(),r=Xp(),a=n(function(i,s){if(i==null)return[];var l=s.length;return l>1&&r(i,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(i,e(s,1),[])});return Im=a,Im}var $D=DD();const Tg=Xe($D);function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qv.apply(this,arguments)}function LD(e,t){return UD(e)||zD(e,t)||FD(e,t)||qD()}function qD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FD(e,t){if(e){if(typeof e=="string")return zw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zw(e,t)}}function zw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function UD(e){if(Array.isArray(e))return e}function Uw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Bm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uw(Object(n),!0).forEach(function(r){VD(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VD(e,t,n){return t=GD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GD(e){var t=KD(e,"string");return fs(t)=="symbol"?t:t+""}function KD(e,t){if(fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YD(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var QD=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,i=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,p=t.labelStyle,f=p===void 0?{}:p,d=t.payload,h=t.formatter,v=t.itemSorter,b=t.wrapperClassName,x=t.labelClassName,I=t.label,g=t.labelFormatter,S=t.accessibilityLayer,_=S===void 0?!1:S,A=function(){if(d&&d.length){var T={padding:0,margin:0},L=(v?Tg(d,v):d).map(function(G,U){if(G.type==="none")return null;var K=Bm({display:"block",paddingTop:4,paddingBottom:4,color:G.color||"#000"},l),z=G.formatter||h||YD,D=G.value,Y=G.name,Q=D,N=Y;if(z&&Q!=null&&N!=null){var q=z(D,Y,G,U,d);if(Array.isArray(q)){var J=LD(q,2);Q=J[0],N=J[1]}else Q=q}return j.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(U),style:K},Rt(N)?j.createElement("span",{className:"recharts-tooltip-item-name"},N):null,Rt(N)?j.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,j.createElement("span",{className:"recharts-tooltip-item-value"},Q),j.createElement("span",{className:"recharts-tooltip-item-unit"},G.unit||""))});return j.createElement("ul",{className:"recharts-tooltip-item-list",style:T},L)}return null},W=Bm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=Bm({margin:0},f),O=!Ee(I),E=O?I:"",P=je("recharts-default-tooltip",b),M=je("recharts-tooltip-label",x);O&&g&&d!==void 0&&d!==null&&(E=g(I,d));var R=_?{role:"status","aria-live":"assertive"}:{};return j.createElement("div",Qv({className:P,style:W},R),j.createElement("p",{className:M,style:w},j.isValidElement(E)?E:"".concat(E)),A())};function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}function dc(e,t,n){return t=XD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XD(e){var t=ZD(e,"string");return ds(t)=="symbol"?t:t+""}function ZD(e,t){if(ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Lu="recharts-tooltip-wrapper",JD={visibility:"hidden"};function e$(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return je(Lu,dc(dc(dc(dc({},"".concat(Lu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(Lu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(Lu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(Lu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Vw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,l=e.tooltipDimension,p=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var d=n[r]-l-a,h=n[r]+a;if(t[r])return s[r]?d:h;if(s[r]){var v=d,b=p[r];return v<b?Math.max(h,p[r]):Math.max(d,p[r])}var x=h+l,I=p[r]+f;return x>I?Math.max(d,p[r]):Math.max(h,p[r])}function t$(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function n$(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,p=e.viewBox,f,d,h;return s.height>0&&s.width>0&&n?(d=Vw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:p,viewBoxDimension:p.width}),h=Vw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:p,viewBoxDimension:p.height}),f=t$({translateX:d,translateY:h,useTranslate3d:l})):f=JD,{cssProperties:f,cssClasses:e$({translateX:d,translateY:h,coordinate:n})}}function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function Gw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Kw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gw(Object(n),!0).forEach(function(r){Zv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function r$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,IA(r.key),r)}}function o$(e,t,n){return t&&a$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i$(e,t,n){return t=Lc(t),u$(e,bA()?Reflect.construct(t,n||[],Lc(e).constructor):t.apply(e,n))}function u$(e,t){if(t&&(mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s$(e)}function s$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bA=function(){return!!e})()}function Lc(e){return Lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lc(e)}function l$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xv(e,t)}function Xv(e,t){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,t)}function Zv(e,t,n){return t=IA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IA(e){var t=c$(e,"string");return mi(t)=="symbol"?t:t+""}function c$(e,t){if(mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Yw=1,p$=(function(e){function t(){var n;r$(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=i$(this,t,[].concat(a)),Zv(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),Zv(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,p,f,d;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(p=n.props.coordinate)===null||p===void 0?void 0:p.x)!==null&&l!==void 0?l:0,y:(f=(d=n.props.coordinate)===null||d===void 0?void 0:d.y)!==null&&f!==void 0?f:0}})}}),n}return l$(t,e),o$(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Yw||Math.abs(r.height-this.state.lastBoundingBox.height)>Yw)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.children,d=a.coordinate,h=a.hasPayload,v=a.isAnimationActive,b=a.offset,x=a.position,I=a.reverseDirection,g=a.useTranslate3d,S=a.viewBox,_=a.wrapperStyle,A=n$({allowEscapeViewBox:s,coordinate:d,offsetTopLeft:b,position:x,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:g,viewBox:S}),W=A.cssClasses,w=A.cssProperties,O=Kw(Kw({transition:v&&i?"transform ".concat(l,"ms ").concat(p):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&h?"visible":"hidden",position:"absolute",top:0,left:0},_);return j.createElement("div",{tabIndex:-1,className:W,style:O,ref:function(P){r.wrapperNode=P}},f)}}])})(X.PureComponent),f$=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:f$()};function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function Qw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qw(Object(n),!0).forEach(function(r){Ng(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function d$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,xA(r.key),r)}}function m$(e,t,n){return t&&h$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function v$(e,t,n){return t=qc(t),y$(e,BA()?Reflect.construct(t,n||[],qc(e).constructor):t.apply(e,n))}function y$(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g$(e)}function g$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function BA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(BA=function(){return!!e})()}function qc(e){return qc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qc(e)}function b$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Jv(e,t)}function Jv(e,t){return Jv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jv(e,t)}function Ng(e,t,n){return t=xA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xA(e){var t=I$(e,"string");return vi(t)=="symbol"?t:t+""}function I$(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function B$(e){return e.dataKey}function x$(e,t){return j.isValidElement(e)?j.cloneElement(e,t):typeof e=="function"?j.createElement(e,t):j.createElement(QD,t)}var _n=(function(e){function t(){return d$(this,t),v$(this,t,arguments)}return b$(t,e),m$(t,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.content,d=a.coordinate,h=a.filterNull,v=a.isAnimationActive,b=a.offset,x=a.payload,I=a.payloadUniqBy,g=a.position,S=a.reverseDirection,_=a.useTranslate3d,A=a.viewBox,W=a.wrapperStyle,w=x??[];h&&w.length&&(w=fA(x.filter(function(E){return E.value!=null&&(E.hide!==!0||r.props.includeHidden)}),I,B$));var O=w.length>0;return j.createElement(p$,{allowEscapeViewBox:s,animationDuration:l,animationEasing:p,isAnimationActive:v,active:i,coordinate:d,hasPayload:O,offset:b,position:g,reverseDirection:S,useTranslate3d:_,viewBox:A,wrapperStyle:W},x$(f,Xw(Xw({},this.props),{},{payload:w})))}}])})(X.PureComponent);Ng(_n,"displayName","Tooltip");Ng(_n,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var xm,Zw;function w$(){if(Zw)return xm;Zw=1;var e=_r(),t=function(){return e.Date.now()};return xm=t,xm}var wm,Jw;function P$(){if(Jw)return wm;Jw=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return wm=t,wm}var Pm,eP;function S$(){if(eP)return Pm;eP=1;var e=P$(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Pm=n,Pm}var Sm,tP;function wA(){if(tP)return Sm;tP=1;var e=S$(),t=ja(),n=Ui(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function p(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var d=typeof f.valueOf=="function"?f.valueOf():f;f=t(d)?d+"":d}if(typeof f!="string")return f===0?f:+f;f=e(f);var h=i.test(f);return h||s.test(f)?l(f.slice(2),h?2:8):a.test(f)?r:+f}return Sm=p,Sm}var _m,nP;function _$(){if(nP)return _m;nP=1;var e=ja(),t=w$(),n=wA(),r="Expected a function",a=Math.max,i=Math.min;function s(l,p,f){var d,h,v,b,x,I,g=0,S=!1,_=!1,A=!0;if(typeof l!="function")throw new TypeError(r);p=n(p)||0,e(f)&&(S=!!f.leading,_="maxWait"in f,v=_?a(n(f.maxWait)||0,p):v,A="trailing"in f?!!f.trailing:A);function W(L){var G=d,U=h;return d=h=void 0,g=L,b=l.apply(U,G),b}function w(L){return g=L,x=setTimeout(P,p),S?W(L):b}function O(L){var G=L-I,U=L-g,K=p-G;return _?i(K,v-U):K}function E(L){var G=L-I,U=L-g;return I===void 0||G>=p||G<0||_&&U>=v}function P(){var L=t();if(E(L))return M(L);x=setTimeout(P,O(L))}function M(L){return x=void 0,A&&d?W(L):(d=h=void 0,b)}function R(){x!==void 0&&clearTimeout(x),g=0,d=I=h=x=void 0}function H(){return x===void 0?b:M(t())}function T(){var L=t(),G=E(L);if(d=arguments,h=this,I=L,G){if(x===void 0)return w(I);if(_)return clearTimeout(x),x=setTimeout(P,p),W(I)}return x===void 0&&(x=setTimeout(P,p)),b}return T.cancel=R,T.flush=H,T}return _m=s,_m}var Am,rP;function A$(){if(rP)return Am;rP=1;var e=_$(),t=ja(),n="Expected a function";function r(a,i,s){var l=!0,p=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,p="trailing"in s?!!s.trailing:p),e(a,i,{leading:l,maxWait:i,trailing:p})}return Am=r,Am}var O$=A$();const PA=Xe(O$);function hs(e){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hs(e)}function aP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function hc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?aP(Object(n),!0).forEach(function(r){W$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function W$(e,t,n){return t=M$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M$(e){var t=C$(e,"string");return hs(t)=="symbol"?t:t+""}function C$(e,t){if(hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k$(e,t){return R$(e)||N$(e,t)||T$(e,t)||E$()}function E$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T$(e,t){if(e){if(typeof e=="string")return oP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oP(e,t)}}function oP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function R$(e){if(Array.isArray(e))return e}var Rg=X.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,l=e.height,p=l===void 0?"100%":l,f=e.minWidth,d=f===void 0?0:f,h=e.minHeight,v=e.maxHeight,b=e.children,x=e.debounce,I=x===void 0?0:x,g=e.id,S=e.className,_=e.onResize,A=e.style,W=A===void 0?{}:A,w=X.useRef(null),O=X.useRef();O.current=_,X.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var E=X.useState({containerWidth:a.width,containerHeight:a.height}),P=k$(E,2),M=P[0],R=P[1],H=X.useCallback(function(L,G){R(function(U){var K=Math.round(L),z=Math.round(G);return U.containerWidth===K&&U.containerHeight===z?U:{containerWidth:K,containerHeight:z}})},[]);X.useEffect(function(){var L=function(Y){var Q,N=Y[0].contentRect,q=N.width,J=N.height;H(q,J),(Q=O.current)===null||Q===void 0||Q.call(O,q,J)};I>0&&(L=PA(L,I,{trailing:!0,leading:!1}));var G=new ResizeObserver(L),U=w.current.getBoundingClientRect(),K=U.width,z=U.height;return H(K,z),G.observe(w.current),function(){G.disconnect()}},[H,I]);var T=X.useMemo(function(){var L=M.containerWidth,G=M.containerHeight;if(L<0||G<0)return null;ur(lo(s)||lo(p),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,p),ur(!n||n>0,"The aspect(%s) must be greater than zero.",n);var U=lo(s)?L:s,K=lo(p)?G:p;n&&n>0&&(U?K=U/n:K&&(U=K*n),v&&K>v&&(K=v)),ur(U>0||K>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,U,K,s,p,d,h,n);var z=!Array.isArray(b)&&Ur(b.type).endsWith("Chart");return j.Children.map(b,function(D){return j.isValidElement(D)?X.cloneElement(D,hc({width:U,height:K},z?{style:hc({height:"100%",width:"100%",maxHeight:K,maxWidth:U},D.props.style)}:{})):D})},[n,b,p,v,h,d,M,s]);return j.createElement("div",{id:g?"".concat(g):void 0,className:je("recharts-responsive-container",S),style:hc(hc({},W),{},{width:s,height:p,minWidth:d,minHeight:h,maxHeight:v}),ref:w},T)}),Ks=function(t){return null};Ks.displayName="Cell";function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function iP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ey(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iP(Object(n),!0).forEach(function(r){j$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j$(e,t,n){return t=H$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H$(e){var t=D$(e,"string");return ms(t)=="symbol"?t:t+""}function D$(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Jo={widthCache:{},cacheCount:0},$$=2e3,L$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},uP="recharts_measurement_span";function q$(e){var t=ey({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=q$(n),a=JSON.stringify({text:t,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(uP);i||(i=document.createElement("span"),i.setAttribute("id",uP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=ey(ey({},L$),r);Object.assign(i.style,s),i.textContent="".concat(t);var l=i.getBoundingClientRect(),p={width:l.width,height:l.height};return Jo.widthCache[a]=p,++Jo.cacheCount>$$&&(Jo.cacheCount=0,Jo.widthCache={}),p}catch{return{width:0,height:0}}},F$=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function Fc(e,t){return G$(e)||V$(e,t)||U$(e,t)||z$()}function z$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U$(e,t){if(e){if(typeof e=="string")return sP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sP(e,t)}}function sP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function G$(e){if(Array.isArray(e))return e}function K$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Q$(r.key),r)}}function Y$(e,t,n){return t&&lP(e.prototype,t),n&&lP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q$(e){var t=X$(e,"string");return vs(t)=="symbol"?t:t+""}function X$(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var cP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,pP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,Z$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,J$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,SA={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},eL=Object.keys(SA),ri="NaN";function tL(e,t){return e*SA[t]}var mc=(function(){function e(t,n){K$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!Z$.test(n)&&(this.num=NaN,this.unit=""),eL.includes(n)&&(this.num=tL(t,n),this.unit="px")}return Y$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=J$.exec(n))!==null&&r!==void 0?r:[],i=Fc(a,3),s=i[1],l=i[2];return new e(parseFloat(s),l??"")}}])})();function _A(e){if(e.includes(ri))return ri;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=cP.exec(t))!==null&&n!==void 0?n:[],a=Fc(r,4),i=a[1],s=a[2],l=a[3],p=mc.parse(i??""),f=mc.parse(l??""),d=s==="*"?p.multiply(f):p.divide(f);if(d.isNaN())return ri;t=t.replace(cP,d.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var h,v=(h=pP.exec(t))!==null&&h!==void 0?h:[],b=Fc(v,4),x=b[1],I=b[2],g=b[3],S=mc.parse(x??""),_=mc.parse(g??""),A=I==="+"?S.add(_):S.subtract(_);if(A.isNaN())return ri;t=t.replace(pP,A.toString())}return t}var fP=/\(([^()]*)\)/;function nL(e){for(var t=e;t.includes("(");){var n=fP.exec(t),r=Fc(n,2),a=r[1];t=t.replace(fP,_A(a))}return t}function rL(e){var t=e.replace(/\s+/g,"");return t=nL(t),t=_A(t),t}function aL(e){try{return rL(e)}catch{return ri}}function Om(e){var t=aL(e.slice(5,-1));return t===ri?"":t}var oL=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],iL=["dx","dy","angle","className","breakAll"];function ty(){return ty=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ty.apply(this,arguments)}function dP(e,t){if(e==null)return{};var n=uL(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function hP(e,t){return pL(e)||cL(e,t)||lL(e,t)||sL()}function sL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lL(e,t){if(e){if(typeof e=="string")return mP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mP(e,t)}}function mP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function pL(e){if(Array.isArray(e))return e}var AA=/[ \f\n\r\t\v\u2028\u2029]+/,OA=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var i=[];Ee(n)||(r?i=n.toString().split(""):i=n.toString().split(AA));var s=i.map(function(p){return{word:p,width:Ju(p,a).width}}),l=r?0:Ju(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},fL=function(t,n,r,a,i){var s=t.maxLines,l=t.children,p=t.style,f=t.breakAll,d=le(s),h=l,v=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return U.reduce(function(K,z){var D=z.word,Y=z.width,Q=K[K.length-1];if(Q&&(a==null||i||Q.width+Y+r<Number(a)))Q.words.push(D),Q.width+=Y+r;else{var N={words:[D],width:Y};K.push(N)}return K},[])},b=v(n),x=function(U){return U.reduce(function(K,z){return K.width>z.width?K:z})};if(!d)return b;for(var I="…",g=function(U){var K=h.slice(0,U),z=OA({breakAll:f,style:p,children:K+I}).wordsWithComputedWidth,D=v(z),Y=D.length>s||x(D).width>Number(a);return[Y,D]},S=0,_=h.length-1,A=0,W;S<=_&&A<=h.length-1;){var w=Math.floor((S+_)/2),O=w-1,E=g(O),P=hP(E,2),M=P[0],R=P[1],H=g(w),T=hP(H,1),L=T[0];if(!M&&!L&&(S=w+1),M&&L&&(_=w-1),!M&&L){W=R;break}A++}return W||b},vP=function(t){var n=Ee(t)?[]:t.toString().split(AA);return[{words:n}]},dL=function(t){var n=t.width,r=t.scaleToFit,a=t.children,i=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var p,f,d=OA({breakAll:s,children:a,style:i});if(d){var h=d.wordsWithComputedWidth,v=d.spaceWidth;p=h,f=v}else return vP(a);return fL({breakAll:s,children:a,maxLines:l,style:i},p,f,n,r)}return vP(a)},yP="#808080",yo=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,p=t.capHeight,f=p===void 0?"0.71em":p,d=t.scaleToFit,h=d===void 0?!1:d,v=t.textAnchor,b=v===void 0?"start":v,x=t.verticalAnchor,I=x===void 0?"end":x,g=t.fill,S=g===void 0?yP:g,_=dP(t,oL),A=X.useMemo(function(){return dL({breakAll:_.breakAll,children:_.children,maxLines:_.maxLines,scaleToFit:h,style:_.style,width:_.width})},[_.breakAll,_.children,_.maxLines,h,_.style,_.width]),W=_.dx,w=_.dy,O=_.angle,E=_.className,P=_.breakAll,M=dP(_,iL);if(!Rt(r)||!Rt(i))return null;var R=r+(le(W)?W:0),H=i+(le(w)?w:0),T;switch(I){case"start":T=Om("calc(".concat(f,")"));break;case"middle":T=Om("calc(".concat((A.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:T=Om("calc(".concat(A.length-1," * -").concat(l,")"));break}var L=[];if(h){var G=A[0].width,U=_.width;L.push("scale(".concat((le(U)?U/G:1)/G,")"))}return O&&L.push("rotate(".concat(O,", ").concat(R,", ").concat(H,")")),L.length&&(M.transform=L.join(" ")),j.createElement("text",ty({},_e(M,!0),{x:R,y:H,className:je("recharts-text",E),textAnchor:b,fill:S.includes("url")?yP:S}),A.map(function(K,z){var D=K.words.join(P?"":" ");return j.createElement("tspan",{x:R,dy:z===0?T:l,key:"".concat(D,"-").concat(z)},D)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function hL(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function jg(e){let t,n,r;e.length!==2?(t=Ca,n=(l,p)=>Ca(e(l),p),r=(l,p)=>e(l)-p):(t=e===Ca||e===hL?e:mL,n=e,r=e);function a(l,p,f=0,d=l.length){if(f<d){if(t(p,p)!==0)return d;do{const h=f+d>>>1;n(l[h],p)<0?f=h+1:d=h}while(f<d)}return f}function i(l,p,f=0,d=l.length){if(f<d){if(t(p,p)!==0)return d;do{const h=f+d>>>1;n(l[h],p)<=0?f=h+1:d=h}while(f<d)}return f}function s(l,p,f=0,d=l.length){const h=a(l,p,f,d-1);return h>f&&r(l[h-1],p)>-r(l[h],p)?h-1:h}return{left:a,center:s,right:i}}function mL(){return 0}function WA(e){return e===null?NaN:+e}function*vL(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const yL=jg(Ca),Ys=yL.right;jg(WA).center;class gP extends Map{constructor(t,n=IL){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(bP(this,t))}has(t){return super.has(bP(this,t))}set(t,n){return super.set(gL(this,t),n)}delete(t){return super.delete(bL(this,t))}}function bP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function gL({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function bL({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function IL(e){return e!==null&&typeof e=="object"?e.valueOf():e}function BL(e=Ca){if(e===Ca)return MA;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function MA(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const xL=Math.sqrt(50),wL=Math.sqrt(10),PL=Math.sqrt(2);function zc(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=xL?10:i>=wL?5:i>=PL?2:1;let l,p,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),p=Math.round(t*f),l/f<e&&++l,p/f>t&&--p,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),p=Math.round(t/f),l*f<e&&++l,p*f>t&&--p),p<l&&.5<=n&&n<2?zc(e,t,n*2):[l,p,f]}function ny(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?zc(t,e,n):zc(e,t,n);if(!(i>=a))return[];const l=i-a+1,p=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)p[f]=(i-f)/-s;else for(let f=0;f<l;++f)p[f]=(i-f)*s;else if(s<0)for(let f=0;f<l;++f)p[f]=(a+f)/-s;else for(let f=0;f<l;++f)p[f]=(a+f)*s;return p}function ry(e,t,n){return t=+t,e=+e,n=+n,zc(e,t,n)[2]}function ay(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?ry(t,e,n):ry(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function IP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function BP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function CA(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?MA:BL(a);r>n;){if(r-n>600){const p=r-n+1,f=t-n+1,d=Math.log(p),h=.5*Math.exp(2*d/3),v=.5*Math.sqrt(d*h*(p-h)/p)*(f-p/2<0?-1:1),b=Math.max(n,Math.floor(t-f*h/p+v)),x=Math.min(r,Math.floor(t+(p-f)*h/p+v));CA(e,t,b,x,a)}const i=e[t];let s=n,l=r;for(qu(e,n,t),a(e[r],i)>0&&qu(e,n,r);s<l;){for(qu(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?qu(e,n,l):(++l,qu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function qu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function SL(e,t,n){if(e=Float64Array.from(vL(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return BP(e);if(t>=1)return IP(e);var r,a=(r-1)*t,i=Math.floor(a),s=IP(CA(e,i).subarray(0,i+1)),l=BP(e.subarray(i+1));return s+(l-s)*(a-i)}}function _L(e,t,n=WA){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function AL(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function Yn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const oy=Symbol("implicit");function Hg(){var e=new gP,t=[],n=[],r=oy;function a(i){let s=e.get(i);if(s===void 0){if(r!==oy)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new gP;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Hg(t,n).unknown(r)},Yn.apply(a,arguments),a}function ys(){var e=Hg().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,p=0,f=0,d=.5;delete e.unknown;function h(){var v=t().length,b=a<r,x=b?a:r,I=b?r:a;i=(I-x)/Math.max(1,v-p+f*2),l&&(i=Math.floor(i)),x+=(I-x-i*(v-p))*d,s=i*(1-p),l&&(x=Math.round(x),s=Math.round(s));var g=AL(v).map(function(S){return x+i*S});return n(b?g.reverse():g)}return e.domain=function(v){return arguments.length?(t(v),h()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,h()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,h()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(l=!!v,h()):l},e.padding=function(v){return arguments.length?(p=Math.min(1,f=+v),h()):p},e.paddingInner=function(v){return arguments.length?(p=Math.min(1,v),h()):p},e.paddingOuter=function(v){return arguments.length?(f=+v,h()):f},e.align=function(v){return arguments.length?(d=Math.max(0,Math.min(1,v)),h()):d},e.copy=function(){return ys(t(),[r,a]).round(l).paddingInner(p).paddingOuter(f).align(d)},Yn.apply(h(),arguments)}function kA(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return kA(t())},e}function es(){return kA(ys.apply(null,arguments).paddingInner(1))}function Dg(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function EA(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Qs(){}var gs=.7,Uc=1/gs,li="\\s*([+-]?\\d+)\\s*",bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Br="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",OL=/^#([0-9a-f]{3,8})$/,WL=new RegExp(`^rgb\\(${li},${li},${li}\\)$`),ML=new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`),CL=new RegExp(`^rgba\\(${li},${li},${li},${bs}\\)$`),kL=new RegExp(`^rgba\\(${Br},${Br},${Br},${bs}\\)$`),EL=new RegExp(`^hsl\\(${bs},${Br},${Br}\\)$`),TL=new RegExp(`^hsla\\(${bs},${Br},${Br},${bs}\\)$`),xP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dg(Qs,Is,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:wP,formatHex:wP,formatHex8:NL,formatHsl:RL,formatRgb:PP,toString:PP});function wP(){return this.rgb().formatHex()}function NL(){return this.rgb().formatHex8()}function RL(){return TA(this).formatHsl()}function PP(){return this.rgb().formatRgb()}function Is(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=OL.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?SP(t):n===3?new yn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?vc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?vc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=WL.exec(e))?new yn(t[1],t[2],t[3],1):(t=ML.exec(e))?new yn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=CL.exec(e))?vc(t[1],t[2],t[3],t[4]):(t=kL.exec(e))?vc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=EL.exec(e))?OP(t[1],t[2]/100,t[3]/100,1):(t=TL.exec(e))?OP(t[1],t[2]/100,t[3]/100,t[4]):xP.hasOwnProperty(e)?SP(xP[e]):e==="transparent"?new yn(NaN,NaN,NaN,0):null}function SP(e){return new yn(e>>16&255,e>>8&255,e&255,1)}function vc(e,t,n,r){return r<=0&&(e=t=n=NaN),new yn(e,t,n,r)}function jL(e){return e instanceof Qs||(e=Is(e)),e?(e=e.rgb(),new yn(e.r,e.g,e.b,e.opacity)):new yn}function iy(e,t,n,r){return arguments.length===1?jL(e):new yn(e,t,n,r??1)}function yn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Dg(yn,iy,EA(Qs,{brighter(e){return e=e==null?Uc:Math.pow(Uc,e),new yn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?gs:Math.pow(gs,e),new yn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new yn(mo(this.r),mo(this.g),mo(this.b),Vc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:_P,formatHex:_P,formatHex8:HL,formatRgb:AP,toString:AP}));function _P(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function HL(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function AP(){const e=Vc(this.opacity);return`${e===1?"rgb(":"rgba("}${mo(this.r)}, ${mo(this.g)}, ${mo(this.b)}${e===1?")":`, ${e})`}`}function Vc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function mo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=mo(e),(e<16?"0":"")+e.toString(16)}function OP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ir(e,t,n,r)}function TA(e){if(e instanceof ir)return new ir(e.h,e.s,e.l,e.opacity);if(e instanceof Qs||(e=Is(e)),!e)return new ir;if(e instanceof ir)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,p=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=p<.5?i+a:2-i-a,s*=60):l=p>0&&p<1?0:s,new ir(s,l,p,e.opacity)}function DL(e,t,n,r){return arguments.length===1?TA(e):new ir(e,t,n,r??1)}function ir(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Dg(ir,DL,EA(Qs,{brighter(e){return e=e==null?Uc:Math.pow(Uc,e),new ir(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?gs:Math.pow(gs,e),new ir(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new yn(Wm(e>=240?e-240:e+120,a,r),Wm(e,a,r),Wm(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new ir(WP(this.h),yc(this.s),yc(this.l),Vc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Vc(this.opacity);return`${e===1?"hsl(":"hsla("}${WP(this.h)}, ${yc(this.s)*100}%, ${yc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function WP(e){return e=(e||0)%360,e<0?e+360:e}function yc(e){return Math.max(0,Math.min(1,e||0))}function Wm(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const $g=e=>()=>e;function $L(e,t){return function(n){return e+n*t}}function LL(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function qL(e){return(e=+e)==1?NA:function(t,n){return n-t?LL(t,n,e):$g(isNaN(t)?n:t)}}function NA(e,t){var n=t-e;return n?$L(e,n):$g(isNaN(e)?t:e)}const MP=(function e(t){var n=qL(t);function r(a,i){var s=n((a=iy(a)).r,(i=iy(i)).r),l=n(a.g,i.g),p=n(a.b,i.b),f=NA(a.opacity,i.opacity);return function(d){return a.r=s(d),a.g=l(d),a.b=p(d),a.opacity=f(d),a+""}}return r.gamma=e,r})(1);function FL(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function zL(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function UL(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=Yi(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function VL(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Gc(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function GL(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Yi(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var uy=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Mm=new RegExp(uy.source,"g");function KL(e){return function(){return e}}function YL(e){return function(t){return e(t)+""}}function QL(e,t){var n=uy.lastIndex=Mm.lastIndex=0,r,a,i,s=-1,l=[],p=[];for(e=e+"",t=t+"";(r=uy.exec(e))&&(a=Mm.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,p.push({i:s,x:Gc(r,a)})),n=Mm.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?p[0]?YL(p[0].x):KL(t):(t=p.length,function(f){for(var d=0,h;d<t;++d)l[(h=p[d]).i]=h.x(f);return l.join("")})}function Yi(e,t){var n=typeof t,r;return t==null||n==="boolean"?$g(t):(n==="number"?Gc:n==="string"?(r=Is(t))?(t=r,MP):QL:t instanceof Is?MP:t instanceof Date?VL:zL(t)?FL:Array.isArray(t)?UL:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?GL:Gc)(e,t)}function Lg(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function XL(e,t){t===void 0&&(t=e,e=Yi);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function ZL(e){return function(){return e}}function Kc(e){return+e}var CP=[0,1];function un(e){return e}function sy(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:ZL(isNaN(t)?NaN:.5)}function JL(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function e5(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=sy(a,r),i=n(s,i)):(r=sy(r,a),i=n(i,s)),function(l){return i(r(l))}}function t5(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=sy(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var p=Ys(e,l,1,r)-1;return i[p](a[p](l))}}function Xs(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Zp(){var e=CP,t=CP,n=Yi,r,a,i,s=un,l,p,f;function d(){var v=Math.min(e.length,t.length);return s!==un&&(s=JL(e[0],e[v-1])),l=v>2?t5:e5,p=f=null,h}function h(v){return v==null||isNaN(v=+v)?i:(p||(p=l(e.map(r),t,n)))(r(s(v)))}return h.invert=function(v){return s(a((f||(f=l(t,e.map(r),Gc)))(v)))},h.domain=function(v){return arguments.length?(e=Array.from(v,Kc),d()):e.slice()},h.range=function(v){return arguments.length?(t=Array.from(v),d()):t.slice()},h.rangeRound=function(v){return t=Array.from(v),n=Lg,d()},h.clamp=function(v){return arguments.length?(s=v?!0:un,d()):s!==un},h.interpolate=function(v){return arguments.length?(n=v,d()):n},h.unknown=function(v){return arguments.length?(i=v,h):i},function(v,b){return r=v,a=b,d()}}function qg(){return Zp()(un,un)}function n5(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Yc(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function yi(e){return e=Yc(Math.abs(e)),e?e[1]:NaN}function r5(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],p=0;a>0&&l>0&&(p+l+1>r&&(l=Math.max(1,r-p)),i.push(n.substring(a-=l,a+l)),!((p+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function a5(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var o5=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Bs(e){if(!(t=o5.exec(e)))throw new Error("invalid format: "+e);var t;return new Fg({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Bs.prototype=Fg.prototype;function Fg(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Fg.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function i5(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Qc;function u5(e,t){var n=Yc(e,t);if(!n)return Qc=void 0,e.toPrecision(t);var r=n[0],a=n[1],i=a-(Qc=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Yc(e,Math.max(0,t+i-1))[0]}function kP(e,t){var n=Yc(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const EP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:n5,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>kP(e*100,t),r:kP,s:u5,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function TP(e){return e}var NP=Array.prototype.map,RP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function s5(e){var t=e.grouping===void 0||e.thousands===void 0?TP:r5(NP.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?TP:a5(NP.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",p=e.nan===void 0?"NaN":e.nan+"";function f(h,v){h=Bs(h);var b=h.fill,x=h.align,I=h.sign,g=h.symbol,S=h.zero,_=h.width,A=h.comma,W=h.precision,w=h.trim,O=h.type;O==="n"?(A=!0,O="g"):EP[O]||(W===void 0&&(W=12),w=!0,O="g"),(S||b==="0"&&x==="=")&&(S=!0,b="0",x="=");var E=(v&&v.prefix!==void 0?v.prefix:"")+(g==="$"?n:g==="#"&&/[boxX]/.test(O)?"0"+O.toLowerCase():""),P=(g==="$"?r:/[%p]/.test(O)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),M=EP[O],R=/[defgprs%]/.test(O);W=W===void 0?6:/[gprs]/.test(O)?Math.max(1,Math.min(21,W)):Math.max(0,Math.min(20,W));function H(T){var L=E,G=P,U,K,z;if(O==="c")G=M(T)+G,T="";else{T=+T;var D=T<0||1/T<0;if(T=isNaN(T)?p:M(Math.abs(T),W),w&&(T=i5(T)),D&&+T==0&&I!=="+"&&(D=!1),L=(D?I==="("?I:l:I==="-"||I==="("?"":I)+L,G=(O==="s"&&!isNaN(T)&&Qc!==void 0?RP[8+Qc/3]:"")+G+(D&&I==="("?")":""),R){for(U=-1,K=T.length;++U<K;)if(z=T.charCodeAt(U),48>z||z>57){G=(z===46?a+T.slice(U+1):T.slice(U))+G,T=T.slice(0,U);break}}}A&&!S&&(T=t(T,1/0));var Y=L.length+T.length+G.length,Q=Y<_?new Array(_-Y+1).join(b):"";switch(A&&S&&(T=t(Q+T,Q.length?_-G.length:1/0),Q=""),x){case"<":T=L+T+G+Q;break;case"=":T=L+Q+T+G;break;case"^":T=Q.slice(0,Y=Q.length>>1)+L+T+G+Q.slice(Y);break;default:T=Q+L+T+G;break}return i(T)}return H.toString=function(){return h+""},H}function d(h,v){var b=Math.max(-8,Math.min(8,Math.floor(yi(v)/3)))*3,x=Math.pow(10,-b),I=f((h=Bs(h),h.type="f",h),{suffix:RP[8+b/3]});return function(g){return I(x*g)}}return{format:f,formatPrefix:d}}var gc,zg,RA;l5({thousands:",",grouping:[3],currency:["$",""]});function l5(e){return gc=s5(e),zg=gc.format,RA=gc.formatPrefix,gc}function c5(e){return Math.max(0,-yi(Math.abs(e)))}function p5(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(yi(t)/3)))*3-yi(Math.abs(e)))}function f5(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,yi(t)-yi(e))+1}function jA(e,t,n,r){var a=ay(e,t,n),i;switch(r=Bs(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=p5(a,s))&&(r.precision=i),RA(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=f5(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=c5(a))&&(r.precision=i-(r.type==="%")*2);break}}return zg(r)}function Da(e){var t=e.domain;return e.ticks=function(n){var r=t();return ny(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return jA(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],p,f,d=10;for(l<s&&(f=s,s=l,l=f,f=a,a=i,i=f);d-- >0;){if(f=ry(s,l,n),f===p)return r[a]=s,r[i]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;p=f}return e},e}function Xc(){var e=qg();return e.copy=function(){return Xs(e,Xc())},Yn.apply(e,arguments),Da(e)}function HA(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Kc),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return HA(e).unknown(t)},e=arguments.length?Array.from(e,Kc):[0,1],Da(n)}function DA(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function jP(e){return Math.log(e)}function HP(e){return Math.exp(e)}function d5(e){return-Math.log(-e)}function h5(e){return-Math.exp(-e)}function m5(e){return isFinite(e)?+("1e"+e):e<0?0:e}function v5(e){return e===10?m5:e===Math.E?Math.exp:t=>Math.pow(e,t)}function y5(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function DP(e){return(t,n)=>-e(-t,n)}function Ug(e){const t=e(jP,HP),n=t.domain;let r=10,a,i;function s(){return a=y5(r),i=v5(r),n()[0]<0?(a=DP(a),i=DP(i),e(d5,h5)):e(jP,HP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const p=n();let f=p[0],d=p[p.length-1];const h=d<f;h&&([f,d]=[d,f]);let v=a(f),b=a(d),x,I;const g=l==null?10:+l;let S=[];if(!(r%1)&&b-v<g){if(v=Math.floor(v),b=Math.ceil(b),f>0){for(;v<=b;++v)for(x=1;x<r;++x)if(I=v<0?x/i(-v):x*i(v),!(I<f)){if(I>d)break;S.push(I)}}else for(;v<=b;++v)for(x=r-1;x>=1;--x)if(I=v>0?x/i(-v):x*i(v),!(I<f)){if(I>d)break;S.push(I)}S.length*2<g&&(S=ny(f,d,g))}else S=ny(v,b,Math.min(b-v,g)).map(i);return h?S.reverse():S},t.tickFormat=(l,p)=>{if(l==null&&(l=10),p==null&&(p=r===10?"s":","),typeof p!="function"&&(!(r%1)&&(p=Bs(p)).precision==null&&(p.trim=!0),p=zg(p)),l===1/0)return p;const f=Math.max(1,r*l/t.ticks().length);return d=>{let h=d/i(Math.round(a(d)));return h*r<r-.5&&(h*=r),h<=f?p(d):""}},t.nice=()=>n(DA(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function $A(){const e=Ug(Zp()).domain([1,10]);return e.copy=()=>Xs(e,$A()).base(e.base()),Yn.apply(e,arguments),e}function $P(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function LP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Vg(e){var t=1,n=e($P(t),LP(t));return n.constant=function(r){return arguments.length?e($P(t=+r),LP(t)):t},Da(n)}function LA(){var e=Vg(Zp());return e.copy=function(){return Xs(e,LA()).constant(e.constant())},Yn.apply(e,arguments)}function qP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function g5(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function b5(e){return e<0?-e*e:e*e}function Gg(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(g5,b5):e(qP(n),qP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Da(t)}function Kg(){var e=Gg(Zp());return e.copy=function(){return Xs(e,Kg()).exponent(e.exponent())},Yn.apply(e,arguments),e}function I5(){return Kg.apply(null,arguments).exponent(.5)}function FP(e){return Math.sign(e)*e*e}function B5(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function qA(){var e=qg(),t=[0,1],n=!1,r;function a(i){var s=B5(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(FP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,Kc)).map(FP)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return qA(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Yn.apply(a,arguments),Da(a)}function FA(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=_L(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[Ys(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return FA().domain(e).range(t).unknown(r)},Yn.apply(i,arguments)}function zA(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(p){return p!=null&&p<=p?a[Ys(r,p,0,n)]:i}function l(){var p=-1;for(r=new Array(n);++p<n;)r[p]=((p+1)*t-(p-n)*e)/(n+1);return s}return s.domain=function(p){return arguments.length?([e,t]=p,e=+e,t=+t,l()):[e,t]},s.range=function(p){return arguments.length?(n=(a=Array.from(p)).length-1,l()):a.slice()},s.invertExtent=function(p){var f=a.indexOf(p);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(p){return arguments.length&&(i=p),s},s.thresholds=function(){return r.slice()},s.copy=function(){return zA().domain([e,t]).range(a).unknown(i)},Yn.apply(Da(s),arguments)}function UA(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[Ys(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return UA().domain(e).range(t).unknown(n)},Yn.apply(a,arguments)}const Cm=new Date,km=new Date;function jt(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const p=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return p;let f;do p.push(f=new Date(+i)),t(i,l),e(i);while(f<i&&i<s);return p},a.filter=i=>jt(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(Cm.setTime(+i),km.setTime(+s),e(Cm),e(km),Math.floor(n(Cm,km))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const Zc=jt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Zc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?jt(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Zc);Zc.range;const $r=1e3,Vn=$r*60,Lr=Vn*60,Gr=Lr*24,Yg=Gr*7,zP=Gr*30,Em=Gr*365,po=jt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());po.range;const Qg=jt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getMinutes());Qg.range;const Xg=jt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCMinutes());Xg.range;const Zg=jt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());Zg.range;const Jg=jt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());Jg.range;const Zs=jt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Vn)/Gr,e=>e.getDate()-1);Zs.range;const Jp=jt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>e.getUTCDate()-1);Jp.range;const VA=jt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>Math.floor(e/Gr));VA.range;function xo(e){return jt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Vn)/Yg)}const e0=xo(0),Jc=xo(1),x5=xo(2),w5=xo(3),gi=xo(4),P5=xo(5),S5=xo(6);e0.range;Jc.range;x5.range;w5.range;gi.range;P5.range;S5.range;function wo(e){return jt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Yg)}const t0=wo(0),ep=wo(1),_5=wo(2),A5=wo(3),bi=wo(4),O5=wo(5),W5=wo(6);t0.range;ep.range;_5.range;A5.range;bi.range;O5.range;W5.range;const eb=jt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());eb.range;const tb=jt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());tb.range;const Kr=jt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Yr=jt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Yr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Yr.range;function GA(e,t,n,r,a,i){const s=[[po,1,$r],[po,5,5*$r],[po,15,15*$r],[po,30,30*$r],[i,1,Vn],[i,5,5*Vn],[i,15,15*Vn],[i,30,30*Vn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[n,1,Yg],[t,1,zP],[t,3,3*zP],[e,1,Em]];function l(f,d,h){const v=d<f;v&&([f,d]=[d,f]);const b=h&&typeof h.range=="function"?h:p(f,d,h),x=b?b.range(f,+d+1):[];return v?x.reverse():x}function p(f,d,h){const v=Math.abs(d-f)/h,b=jg(([,,g])=>g).right(s,v);if(b===s.length)return e.every(ay(f/Em,d/Em,h));if(b===0)return Zc.every(Math.max(ay(f,d,h),1));const[x,I]=s[v/s[b-1][2]<s[b][2]/v?b-1:b];return x.every(I)}return[l,p]}const[M5,C5]=GA(Yr,tb,t0,VA,Jg,Xg),[k5,E5]=GA(Kr,eb,e0,Zs,Zg,Qg);function Tm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Nm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Fu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function T5(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,p=e.shortMonths,f=zu(a),d=Uu(a),h=zu(i),v=Uu(i),b=zu(s),x=Uu(s),I=zu(l),g=Uu(l),S=zu(p),_=Uu(p),A={a:z,A:D,b:Y,B:Q,c:null,d:QP,e:QP,f:r8,g:d8,G:m8,H:e8,I:t8,j:n8,L:KA,m:a8,M:o8,p:N,q,Q:JP,s:eS,S:i8,u:u8,U:s8,V:l8,w:c8,W:p8,x:null,X:null,y:f8,Y:h8,Z:v8,"%":ZP},W={a:J,A:ue,b:he,B:ye,c:null,d:XP,e:XP,f:I8,g:M8,G:k8,H:y8,I:g8,j:b8,L:QA,m:B8,M:x8,p:ge,q:fe,Q:JP,s:eS,S:w8,u:P8,U:S8,V:_8,w:A8,W:O8,x:null,X:null,y:W8,Y:C8,Z:E8,"%":ZP},w={a:R,A:H,b:T,B:L,c:G,d:KP,e:KP,f:Q5,g:GP,G:VP,H:YP,I:YP,j:V5,L:Y5,m:U5,M:G5,p:M,q:z5,Q:Z5,s:J5,S:K5,u:D5,U:$5,V:L5,w:H5,W:q5,x:U,X:K,y:GP,Y:VP,Z:F5,"%":X5};A.x=O(n,A),A.X=O(r,A),A.c=O(t,A),W.x=O(n,W),W.X=O(r,W),W.c=O(t,W);function O(ne,de){return function(pe){var re=[],Re=-1,Pe=0,Ce=ne.length,Ae,qe,He;for(pe instanceof Date||(pe=new Date(+pe));++Re<Ce;)ne.charCodeAt(Re)===37&&(re.push(ne.slice(Pe,Re)),(qe=UP[Ae=ne.charAt(++Re)])!=null?Ae=ne.charAt(++Re):qe=Ae==="e"?" ":"0",(He=de[Ae])&&(Ae=He(pe,qe)),re.push(Ae),Pe=Re+1);return re.push(ne.slice(Pe,Re)),re.join("")}}function E(ne,de){return function(pe){var re=Fu(1900,void 0,1),Re=P(re,ne,pe+="",0),Pe,Ce;if(Re!=pe.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Nm(Fu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?ep.ceil(Pe):ep(Pe),Pe=Jp.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Tm(Fu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?Jc.ceil(Pe):Jc(Pe),Pe=Zs.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Nm(Fu(re.y,0,1)).getUTCDay():Tm(Fu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Nm(re)):Tm(re)}}function P(ne,de,pe,re){for(var Re=0,Pe=de.length,Ce=pe.length,Ae,qe;Re<Pe;){if(re>=Ce)return-1;if(Ae=de.charCodeAt(Re++),Ae===37){if(Ae=de.charAt(Re++),qe=w[Ae in UP?de.charAt(Re++):Ae],!qe||(re=qe(ne,pe,re))<0)return-1}else if(Ae!=pe.charCodeAt(re++))return-1}return re}function M(ne,de,pe){var re=f.exec(de.slice(pe));return re?(ne.p=d.get(re[0].toLowerCase()),pe+re[0].length):-1}function R(ne,de,pe){var re=b.exec(de.slice(pe));return re?(ne.w=x.get(re[0].toLowerCase()),pe+re[0].length):-1}function H(ne,de,pe){var re=h.exec(de.slice(pe));return re?(ne.w=v.get(re[0].toLowerCase()),pe+re[0].length):-1}function T(ne,de,pe){var re=S.exec(de.slice(pe));return re?(ne.m=_.get(re[0].toLowerCase()),pe+re[0].length):-1}function L(ne,de,pe){var re=I.exec(de.slice(pe));return re?(ne.m=g.get(re[0].toLowerCase()),pe+re[0].length):-1}function G(ne,de,pe){return P(ne,t,de,pe)}function U(ne,de,pe){return P(ne,n,de,pe)}function K(ne,de,pe){return P(ne,r,de,pe)}function z(ne){return s[ne.getDay()]}function D(ne){return i[ne.getDay()]}function Y(ne){return p[ne.getMonth()]}function Q(ne){return l[ne.getMonth()]}function N(ne){return a[+(ne.getHours()>=12)]}function q(ne){return 1+~~(ne.getMonth()/3)}function J(ne){return s[ne.getUTCDay()]}function ue(ne){return i[ne.getUTCDay()]}function he(ne){return p[ne.getUTCMonth()]}function ye(ne){return l[ne.getUTCMonth()]}function ge(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=O(ne+="",A);return de.toString=function(){return ne},de},parse:function(ne){var de=E(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=O(ne+="",W);return de.toString=function(){return ne},de},utcParse:function(ne){var de=E(ne+="",!0);return de.toString=function(){return ne},de}}}var UP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,N5=/^%/,R5=/[\\^$*+?|[\]().{}]/g;function Ve(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function j5(e){return e.replace(R5,"\\$&")}function zu(e){return new RegExp("^(?:"+e.map(j5).join("|")+")","i")}function Uu(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function H5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function D5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function $5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function L5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function q5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function VP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function GP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function F5(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function z5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function U5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function KP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function V5(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function YP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function G5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function K5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Y5(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function Q5(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function X5(e,t,n){var r=N5.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function Z5(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function J5(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function QP(e,t){return Ve(e.getDate(),t,2)}function e8(e,t){return Ve(e.getHours(),t,2)}function t8(e,t){return Ve(e.getHours()%12||12,t,2)}function n8(e,t){return Ve(1+Zs.count(Kr(e),e),t,3)}function KA(e,t){return Ve(e.getMilliseconds(),t,3)}function r8(e,t){return KA(e,t)+"000"}function a8(e,t){return Ve(e.getMonth()+1,t,2)}function o8(e,t){return Ve(e.getMinutes(),t,2)}function i8(e,t){return Ve(e.getSeconds(),t,2)}function u8(e){var t=e.getDay();return t===0?7:t}function s8(e,t){return Ve(e0.count(Kr(e)-1,e),t,2)}function YA(e){var t=e.getDay();return t>=4||t===0?gi(e):gi.ceil(e)}function l8(e,t){return e=YA(e),Ve(gi.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function c8(e){return e.getDay()}function p8(e,t){return Ve(Jc.count(Kr(e)-1,e),t,2)}function f8(e,t){return Ve(e.getFullYear()%100,t,2)}function d8(e,t){return e=YA(e),Ve(e.getFullYear()%100,t,2)}function h8(e,t){return Ve(e.getFullYear()%1e4,t,4)}function m8(e,t){var n=e.getDay();return e=n>=4||n===0?gi(e):gi.ceil(e),Ve(e.getFullYear()%1e4,t,4)}function v8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ve(t/60|0,"0",2)+Ve(t%60,"0",2)}function XP(e,t){return Ve(e.getUTCDate(),t,2)}function y8(e,t){return Ve(e.getUTCHours(),t,2)}function g8(e,t){return Ve(e.getUTCHours()%12||12,t,2)}function b8(e,t){return Ve(1+Jp.count(Yr(e),e),t,3)}function QA(e,t){return Ve(e.getUTCMilliseconds(),t,3)}function I8(e,t){return QA(e,t)+"000"}function B8(e,t){return Ve(e.getUTCMonth()+1,t,2)}function x8(e,t){return Ve(e.getUTCMinutes(),t,2)}function w8(e,t){return Ve(e.getUTCSeconds(),t,2)}function P8(e){var t=e.getUTCDay();return t===0?7:t}function S8(e,t){return Ve(t0.count(Yr(e)-1,e),t,2)}function XA(e){var t=e.getUTCDay();return t>=4||t===0?bi(e):bi.ceil(e)}function _8(e,t){return e=XA(e),Ve(bi.count(Yr(e),e)+(Yr(e).getUTCDay()===4),t,2)}function A8(e){return e.getUTCDay()}function O8(e,t){return Ve(ep.count(Yr(e)-1,e),t,2)}function W8(e,t){return Ve(e.getUTCFullYear()%100,t,2)}function M8(e,t){return e=XA(e),Ve(e.getUTCFullYear()%100,t,2)}function C8(e,t){return Ve(e.getUTCFullYear()%1e4,t,4)}function k8(e,t){var n=e.getUTCDay();return e=n>=4||n===0?bi(e):bi.ceil(e),Ve(e.getUTCFullYear()%1e4,t,4)}function E8(){return"+0000"}function ZP(){return"%"}function JP(e){return+e}function eS(e){return Math.floor(+e/1e3)}var ei,ZA,JA;T8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function T8(e){return ei=T5(e),ZA=ei.format,ei.parse,JA=ei.utcFormat,ei.utcParse,ei}function N8(e){return new Date(e)}function R8(e){return e instanceof Date?+e:+new Date(+e)}function nb(e,t,n,r,a,i,s,l,p,f){var d=qg(),h=d.invert,v=d.domain,b=f(".%L"),x=f(":%S"),I=f("%I:%M"),g=f("%I %p"),S=f("%a %d"),_=f("%b %d"),A=f("%B"),W=f("%Y");function w(O){return(p(O)<O?b:l(O)<O?x:s(O)<O?I:i(O)<O?g:r(O)<O?a(O)<O?S:_:n(O)<O?A:W)(O)}return d.invert=function(O){return new Date(h(O))},d.domain=function(O){return arguments.length?v(Array.from(O,R8)):v().map(N8)},d.ticks=function(O){var E=v();return e(E[0],E[E.length-1],O??10)},d.tickFormat=function(O,E){return E==null?w:f(E)},d.nice=function(O){var E=v();return(!O||typeof O.range!="function")&&(O=t(E[0],E[E.length-1],O??10)),O?v(DA(E,O)):d},d.copy=function(){return Xs(d,nb(e,t,n,r,a,i,s,l,p,f))},d}function j8(){return Yn.apply(nb(k5,E5,Kr,eb,e0,Zs,Zg,Qg,po,ZA).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function H8(){return Yn.apply(nb(M5,C5,Yr,tb,t0,Jp,Jg,Xg,po,JA).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function n0(){var e=0,t=1,n,r,a,i,s=un,l=!1,p;function f(h){return h==null||isNaN(h=+h)?p:s(a===0?.5:(h=(i(h)-n)*a,l?Math.max(0,Math.min(1,h)):h))}f.domain=function(h){return arguments.length?([e,t]=h,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(h){return arguments.length?(l=!!h,f):l},f.interpolator=function(h){return arguments.length?(s=h,f):s};function d(h){return function(v){var b,x;return arguments.length?([b,x]=v,s=h(b,x),f):[s(0),s(1)]}}return f.range=d(Yi),f.rangeRound=d(Lg),f.unknown=function(h){return arguments.length?(p=h,f):p},function(h){return i=h,n=h(e),r=h(t),a=n===r?0:1/(r-n),f}}function $a(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function eO(){var e=Da(n0()(un));return e.copy=function(){return $a(e,eO())},Jr.apply(e,arguments)}function tO(){var e=Ug(n0()).domain([1,10]);return e.copy=function(){return $a(e,tO()).base(e.base())},Jr.apply(e,arguments)}function nO(){var e=Vg(n0());return e.copy=function(){return $a(e,nO()).constant(e.constant())},Jr.apply(e,arguments)}function rb(){var e=Gg(n0());return e.copy=function(){return $a(e,rb()).exponent(e.exponent())},Jr.apply(e,arguments)}function D8(){return rb.apply(null,arguments).exponent(.5)}function rO(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Ys(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>SL(e,i/r))},n.copy=function(){return rO(t).domain(e)},Jr.apply(n,arguments)}function r0(){var e=0,t=.5,n=1,r=1,a,i,s,l,p,f=un,d,h=!1,v;function b(I){return isNaN(I=+I)?v:(I=.5+((I=+d(I))-i)*(r*I<r*i?l:p),f(h?Math.max(0,Math.min(1,I)):I))}b.domain=function(I){return arguments.length?([e,t,n]=I,a=d(e=+e),i=d(t=+t),s=d(n=+n),l=a===i?0:.5/(i-a),p=i===s?0:.5/(s-i),r=i<a?-1:1,b):[e,t,n]},b.clamp=function(I){return arguments.length?(h=!!I,b):h},b.interpolator=function(I){return arguments.length?(f=I,b):f};function x(I){return function(g){var S,_,A;return arguments.length?([S,_,A]=g,f=XL(I,[S,_,A]),b):[f(0),f(.5),f(1)]}}return b.range=x(Yi),b.rangeRound=x(Lg),b.unknown=function(I){return arguments.length?(v=I,b):v},function(I){return d=I,a=I(e),i=I(t),s=I(n),l=a===i?0:.5/(i-a),p=i===s?0:.5/(s-i),r=i<a?-1:1,b}}function aO(){var e=Da(r0()(un));return e.copy=function(){return $a(e,aO())},Jr.apply(e,arguments)}function oO(){var e=Ug(r0()).domain([.1,1,10]);return e.copy=function(){return $a(e,oO()).base(e.base())},Jr.apply(e,arguments)}function iO(){var e=Vg(r0());return e.copy=function(){return $a(e,iO()).constant(e.constant())},Jr.apply(e,arguments)}function ab(){var e=Gg(r0());return e.copy=function(){return $a(e,ab()).exponent(e.exponent())},Jr.apply(e,arguments)}function $8(){return ab.apply(null,arguments).exponent(.5)}const tS=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:ys,scaleDiverging:aO,scaleDivergingLog:oO,scaleDivergingPow:ab,scaleDivergingSqrt:$8,scaleDivergingSymlog:iO,scaleIdentity:HA,scaleImplicit:oy,scaleLinear:Xc,scaleLog:$A,scaleOrdinal:Hg,scalePoint:es,scalePow:Kg,scaleQuantile:FA,scaleQuantize:zA,scaleRadial:qA,scaleSequential:eO,scaleSequentialLog:tO,scaleSequentialPow:rb,scaleSequentialQuantile:rO,scaleSequentialSqrt:D8,scaleSequentialSymlog:nO,scaleSqrt:I5,scaleSymlog:LA,scaleThreshold:UA,scaleTime:j8,scaleUtc:H8,tickFormat:jA},Symbol.toStringTag,{value:"Module"}));var Rm,nS;function a0(){if(nS)return Rm;nS=1;var e=Ui();function t(n,r,a){for(var i=-1,s=n.length;++i<s;){var l=n[i],p=r(l);if(p!=null&&(f===void 0?p===p&&!e(p):a(p,f)))var f=p,d=l}return d}return Rm=t,Rm}var jm,rS;function uO(){if(rS)return jm;rS=1;function e(t,n){return t>n}return jm=e,jm}var Hm,aS;function L8(){if(aS)return Hm;aS=1;var e=a0(),t=uO(),n=Ki();function r(a){return a&&a.length?e(a,n,t):void 0}return Hm=r,Hm}var q8=L8();const Aa=Xe(q8);var Dm,oS;function sO(){if(oS)return Dm;oS=1;function e(t,n){return t<n}return Dm=e,Dm}var $m,iS;function F8(){if(iS)return $m;iS=1;var e=a0(),t=sO(),n=Ki();function r(a){return a&&a.length?e(a,n,t):void 0}return $m=r,$m}var z8=F8();const o0=Xe(z8);var Lm,uS;function U8(){if(uS)return Lm;uS=1;var e=Ig(),t=Ar(),n=yA(),r=gn();function a(i,s){var l=r(i)?e:n;return l(i,t(s,3))}return Lm=a,Lm}var qm,sS;function V8(){if(sS)return qm;sS=1;var e=mA(),t=U8();function n(r,a){return e(t(r,a),1)}return qm=n,qm}var G8=V8();const K8=Xe(G8);var Fm,lS;function Y8(){if(lS)return Fm;lS=1;var e=kg();function t(n,r){return e(n,r)}return Fm=t,Fm}var Q8=Y8();const Na=Xe(Q8);var Qi=1e9,X8={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},ib,pt=!0,Gn="[DecimalError] ",vo=Gn+"Invalid argument: ",ob=Gn+"Exponent out of range: ",Xi=Math.floor,uo=Math.pow,Z8=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,An,qt=1e7,st=7,lO=9007199254740991,tp=Xi(lO/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Vr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Mt(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(An))throw Error(Gn+"NaN");if(n.s<1)throw Error(Gn+(n.s?"NaN":"-Infinity"));return n.eq(An)?new r(0):(pt=!1,t=Vr(xs(n,i),xs(e,i),i),pt=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?fO(t,e):cO(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gn+"NaN");return n.s?(pt=!1,t=Vr(n,e,0,1).times(e),pt=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return pO(this)};Ie.naturalLogarithm=Ie.ln=function(){return xs(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?cO(t,e):fO(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(vo+e);if(t=Mt(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,i,s,l=this,p=l.constructor;if(l.s<1){if(!l.s)return new p(0);throw Error(Gn+"NaN")}for(e=Mt(l),pt=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=gr(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Xi((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new p(t)):r=new p(a.toString()),n=p.precision,a=s=n+3;;)if(i=r,r=i.plus(Vr(l,i,s+2)).times(.5),gr(i.d).slice(0,s)===(t=gr(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return pt=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,i,s,l,p,f,d=this,h=d.constructor,v=d.d,b=(e=new h(e)).d;if(!d.s||!e.s)return new h(0);for(e.s*=d.s,n=d.e+e.e,p=v.length,f=b.length,p<f&&(i=v,v=b,b=i,s=p,p=f,f=s),i=[],s=p+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(t=0,a=p+r;a>r;)l=i[a]+b[r]*v[a-r-1]+t,i[a--]=l%qt|0,t=l/qt|0;i[a]=(i[a]+t)%qt|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,pt?tt(e,h.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(wr(e,0,Qi),t===void 0?t=r.rounding:wr(t,0,8),tt(n,e+Mt(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=go(r,!0):(wr(e,0,Qi),t===void 0?t=a.rounding:wr(t,0,8),r=tt(new a(r),e+1,t),n=go(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?go(a):(wr(e,0,Qi),t===void 0?t=i.rounding:wr(t,0,8),r=tt(new i(a),e+Mt(a)+1,t),n=go(r.abs(),!1,e+Mt(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Mt(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,i,s,l=this,p=l.constructor,f=12,d=+(e=new p(e));if(!e.s)return new p(An);if(l=new p(l),!l.s){if(e.s<1)throw Error(Gn+"Infinity");return l}if(l.eq(An))return l;if(r=p.precision,e.eq(An))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=d<0?-d:d)<=lO){for(a=new p(An),t=Math.ceil(r/st+4),pt=!1;n%2&&(a=a.times(l),pS(a.d,t)),n=Xi(n/2),n!==0;)l=l.times(l),pS(l.d,t);return pt=!0,e.s<0?new p(An).div(a):tt(a,r)}}else if(i<0)throw Error(Gn+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,pt=!1,a=e.times(xs(l,r+f)),pt=!0,a=pO(a),a.s=i,a};Ie.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=Mt(a),r=go(a,n<=i.toExpNeg||n>=i.toExpPos)):(wr(e,1,Qi),t===void 0?t=i.rounding:wr(t,0,8),a=tt(new i(a),e,t),n=Mt(a),r=go(a,e<=n||n<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(wr(e,1,Qi),t===void 0?t=r.rounding:wr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Mt(e),n=e.constructor;return go(e,t<=n.toExpNeg||t>=n.toExpPos)};function cO(e,t){var n,r,a,i,s,l,p,f,d=e.constructor,h=d.precision;if(!e.s||!t.s)return t.s||(t=new d(e)),pt?tt(t,h):t;if(p=e.d,f=t.d,s=e.e,a=t.e,p=p.slice(),i=s-a,i){for(i<0?(r=p,i=-i,l=f.length):(r=f,a=s,l=p.length),s=Math.ceil(h/st),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=p.length,i=f.length,l-i<0&&(i=l,r=f,f=p,p=r),n=0;i;)n=(p[--i]=p[i]+f[i]+n)/qt|0,p[i]%=qt;for(n&&(p.unshift(n),++a),l=p.length;p[--l]==0;)p.pop();return t.d=p,t.e=a,pt?tt(t,h):t}function wr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(vo+e)}function gr(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(i+=Sa(n)),i+=r;s=e[t],r=s+"",n=st-r.length,n&&(i+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Vr=(function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%qt|0,s=i/qt|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,p;if(i!=s)p=i>s?1:-1;else for(l=p=0;l<i;l++)if(r[l]!=a[l]){p=r[l]>a[l]?1:-1;break}return p}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*qt+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,p,f,d,h,v,b,x,I,g,S,_,A,W,w,O,E,P,M=r.constructor,R=r.s==a.s?1:-1,H=r.d,T=a.d;if(!r.s)return new M(r);if(!a.s)throw Error(Gn+"Division by zero");for(p=r.e-a.e,E=T.length,w=H.length,b=new M(R),x=b.d=[],f=0;T[f]==(H[f]||0);)++f;if(T[f]>(H[f]||0)&&--p,i==null?_=i=M.precision:s?_=i+(Mt(r)-Mt(a))+1:_=i,_<0)return new M(0);if(_=_/st+2|0,f=0,E==1)for(d=0,T=T[0],_++;(f<w||d)&&_--;f++)A=d*qt+(H[f]||0),x[f]=A/T|0,d=A%T|0;else{for(d=qt/(T[0]+1)|0,d>1&&(T=e(T,d),H=e(H,d),E=T.length,w=H.length),W=E,I=H.slice(0,E),g=I.length;g<E;)I[g++]=0;P=T.slice(),P.unshift(0),O=T[0],T[1]>=qt/2&&++O;do d=0,l=t(T,I,E,g),l<0?(S=I[0],E!=g&&(S=S*qt+(I[1]||0)),d=S/O|0,d>1?(d>=qt&&(d=qt-1),h=e(T,d),v=h.length,g=I.length,l=t(h,I,v,g),l==1&&(d--,n(h,E<v?P:T,v))):(d==0&&(l=d=1),h=T.slice()),v=h.length,v<g&&h.unshift(0),n(I,h,g),l==-1&&(g=I.length,l=t(T,I,E,g),l<1&&(d++,n(I,E<g?P:T,g))),g=I.length):l===0&&(d++,I=[0]),x[f++]=d,l&&I[0]?I[g++]=H[W]||0:(I=[H[W]],g=1);while((W++<w||I[0]!==void 0)&&_--)}return x[0]||x.shift(),b.e=p,tt(b,s?i+Mt(b)+1:i)}})();function pO(e,t){var n,r,a,i,s,l,p=0,f=0,d=e.constructor,h=d.precision;if(Mt(e)>16)throw Error(ob+Mt(e));if(!e.s)return new d(An);for(pt=!1,l=h,s=new d(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(uo(2,f))/Math.LN10*2+5|0,l+=r,n=a=i=new d(An),d.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++p),s=i.plus(Vr(a,n,l)),gr(s.d).slice(0,l)===gr(i.d).slice(0,l)){for(;f--;)i=tt(i.times(i),l);return d.precision=h,t==null?(pt=!0,tt(i,h)):i}i=s}}function Mt(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function zm(e,t,n){if(t>e.LN10.sd())throw pt=!0,n&&(e.precision=n),Error(Gn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function xs(e,t){var n,r,a,i,s,l,p,f,d,h=1,v=10,b=e,x=b.d,I=b.constructor,g=I.precision;if(b.s<1)throw Error(Gn+(b.s?"NaN":"-Infinity"));if(b.eq(An))return new I(0);if(t==null?(pt=!1,f=g):f=t,b.eq(10))return t==null&&(pt=!0),zm(I,f);if(f+=v,I.precision=f,n=gr(x),r=n.charAt(0),i=Mt(b),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)b=b.times(e),n=gr(b.d),r=n.charAt(0),h++;i=Mt(b),r>1?(b=new I("0."+n),i++):b=new I(r+"."+n.slice(1))}else return p=zm(I,f+2,g).times(i+""),b=xs(new I(r+"."+n.slice(1)),f-v).plus(p),I.precision=g,t==null?(pt=!0,tt(b,g)):b;for(l=s=b=Vr(b.minus(An),b.plus(An),f),d=tt(b.times(b),f),a=3;;){if(s=tt(s.times(d),f),p=l.plus(Vr(s,new I(a),f)),gr(p.d).slice(0,f)===gr(l.d).slice(0,f))return l=l.times(2),i!==0&&(l=l.plus(zm(I,f+2,g).times(i+""))),l=Vr(l,new I(h),f),I.precision=g,t==null?(pt=!0,tt(l,g)):l;l=p,a+=2}}function cS(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=Xi(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),pt&&(e.e>tp||e.e<-tp))throw Error(ob+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,i,s,l,p,f,d,h=e.d;for(s=1,i=h[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=h[d=0];else{if(d=Math.ceil((r+1)/st),i=h.length,d>=i)return e;for(f=i=h[d],s=1;i>=10;i/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(i=uo(10,s-a-1),l=f/i%10|0,p=t<0||h[d+1]!==void 0||f%i,p=n<4?(l||p)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||p||n==6&&(r>0?a>0?f/uo(10,s-a):0:h[d-1])%10&1||n==(e.s<0?8:7))),t<1||!h[0])return p?(i=Mt(e),h.length=1,t=t-i-1,h[0]=uo(10,(st-t%st)%st),e.e=Xi(-t/st)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(r==0?(h.length=d,i=1,d--):(h.length=d+1,i=uo(10,st-r),h[d]=a>0?(f/uo(10,s-a)%uo(10,a)|0)*i:0),p)for(;;)if(d==0){(h[0]+=i)==qt&&(h[0]=1,++e.e);break}else{if(h[d]+=i,h[d]!=qt)break;h[d--]=0,i=1}for(r=h.length;h[--r]===0;)h.pop();if(pt&&(e.e>tp||e.e<-tp))throw Error(ob+Mt(e));return e}function fO(e,t){var n,r,a,i,s,l,p,f,d,h,v=e.constructor,b=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),pt?tt(t,b):t;if(p=e.d,h=t.d,r=t.e,f=e.e,p=p.slice(),s=f-r,s){for(d=s<0,d?(n=p,s=-s,l=h.length):(n=h,r=f,l=p.length),a=Math.max(Math.ceil(b/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=p.length,l=h.length,d=a<l,d&&(l=a),a=0;a<l;a++)if(p[a]!=h[a]){d=p[a]<h[a];break}s=0}for(d&&(n=p,p=h,h=n,t.s=-t.s),l=p.length,a=h.length-l;a>0;--a)p[l++]=0;for(a=h.length;a>s;){if(p[--a]<h[a]){for(i=a;i&&p[--i]===0;)p[i]=qt-1;--p[i],p[a]+=qt}p[a]-=h[a]}for(;p[--l]===0;)p.pop();for(;p[0]===0;p.shift())--r;return p[0]?(t.d=p,t.e=r,pt?tt(t,b):t):new v(0)}function go(e,t,n){var r,a=Mt(e),i=gr(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,n&&(r=n-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function pS(e,t){if(e.length>t)return e.length=t,!0}function dO(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return cS(s,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,Z8.test(i))cS(s,i);else throw Error(vo+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=dO,a.config=a.set=J8,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function J8(e){if(!e||typeof e!="object")throw Error(Gn+"Object expected");var t,n,r,a=["precision",1,Qi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(Xi(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(vo+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(vo+n+": "+r);return this}var ib=dO(X8);An=new ib(1);const et=ib;function e7(e){return a7(e)||r7(e)||n7(e)||t7()}function t7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n7(e,t){if(e){if(typeof e=="string")return ly(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ly(e,t)}}function r7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function a7(e){if(Array.isArray(e))return ly(e)}function ly(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o7=function(t){return t},hO={},mO=function(t){return t===hO},fS=function(t){return function n(){return arguments.length===0||arguments.length===1&&mO(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},i7=function e(t,n){return t===1?n:fS(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(l){return l!==hO}).length;return s>=t?n.apply(void 0,a):e(t-s,fS(function(){for(var l=arguments.length,p=new Array(l),f=0;f<l;f++)p[f]=arguments[f];var d=a.map(function(h){return mO(h)?p.shift():h});return n.apply(void 0,e7(d).concat(p))}))})},i0=function(t){return i7(t.length,t)},cy=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},u7=i0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),s7=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return o7;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(l,p){return p(l)},i.apply(void 0,arguments))}},py=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},vO=function(t){var n=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n&&i.every(function(l,p){return l===n[p]})||(n=i,r=t.apply(void 0,i)),r}};function l7(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function c7(e,t,n){for(var r=new et(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var p7=i0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),f7=i0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),d7=i0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const u0={rangeStep:c7,getDigitCount:l7,interpolateNumber:p7,uninterpolateNumber:f7,uninterpolateTruncation:d7};function fy(e){return v7(e)||m7(e)||yO(e)||h7()}function h7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function v7(e){if(Array.isArray(e))return dy(e)}function ws(e,t){return b7(e)||g7(e,t)||yO(e,t)||y7()}function y7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yO(e,t){if(e){if(typeof e=="string")return dy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dy(e,t)}}function dy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g7(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(p){a=!0,i=p}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return n}}function b7(e){if(Array.isArray(e))return e}function gO(e){var t=ws(e,2),n=t[0],r=t[1],a=n,i=r;return n>r&&(a=r,i=n),[a,i]}function bO(e,t,n){if(e.lte(0))return new et(0);var r=u0.getDigitCount(e.toNumber()),a=new et(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(i.div(s).toNumber())).add(n).mul(s),p=l.mul(a);return t?p:new et(Math.ceil(p))}function I7(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new et(10).pow(u0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=s7(u7(function(p){return a.add(new et(p-s).mul(r)).toNumber()}),cy);return l(0,t)}function IO(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var i=bO(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(i)));var l=Math.ceil(s.sub(e).div(i).toNumber()),p=Math.ceil(new et(t).sub(s).div(i).toNumber()),f=l+p+1;return f>n?IO(e,t,n,r,a+1):(f<n&&(p=t>0?p+(n-f):p,l=t>0?l:l+(n-f)),{step:i,tickMin:s.sub(new et(l).mul(i)),tickMax:s.add(new et(p).mul(i))})}function B7(e){var t=ws(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=gO([n,r]),p=ws(l,2),f=p[0],d=p[1];if(f===-1/0||d===1/0){var h=d===1/0?[f].concat(fy(cy(0,a-1).map(function(){return 1/0}))):[].concat(fy(cy(0,a-1).map(function(){return-1/0})),[d]);return n>r?py(h):h}if(f===d)return I7(f,a,i);var v=IO(f,d,s,i),b=v.step,x=v.tickMin,I=v.tickMax,g=u0.rangeStep(x,I.add(new et(.1).mul(b)),b);return n>r?py(g):g}function x7(e,t){var n=ws(e,2),r=n[0],a=n[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=gO([r,a]),l=ws(s,2),p=l[0],f=l[1];if(p===-1/0||f===1/0)return[r,a];if(p===f)return[p];var d=Math.max(t,2),h=bO(new et(f).sub(p).div(d-1),i,0),v=[].concat(fy(u0.rangeStep(new et(p),new et(f).sub(new et(.99).mul(h)),h)),[f]);return r>a?py(v):v}var w7=vO(B7),P7=vO(x7),S7="Invariant failed";function bo(e,t){throw new Error(S7)}var _7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Ii(e){"@babel/helpers - typeof";return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ii(e)}function np(){return np=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},np.apply(this,arguments)}function A7(e,t){return C7(e)||M7(e,t)||W7(e,t)||O7()}function O7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W7(e,t){if(e){if(typeof e=="string")return dS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dS(e,t)}}function dS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M7(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function C7(e){if(Array.isArray(e))return e}function k7(e,t){if(e==null)return{};var n=E7(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function T7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N7(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wO(r.key),r)}}function R7(e,t,n){return t&&N7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function j7(e,t,n){return t=rp(t),H7(e,BO()?Reflect.construct(t,n||[],rp(e).constructor):t.apply(e,n))}function H7(e,t){if(t&&(Ii(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D7(e)}function D7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function BO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(BO=function(){return!!e})()}function rp(e){return rp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rp(e)}function $7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hy(e,t)}function hy(e,t){return hy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},hy(e,t)}function xO(e,t,n){return t=wO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wO(e){var t=L7(e,"string");return Ii(t)=="symbol"?t:t+""}function L7(e,t){if(Ii(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ii(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Zi=(function(e){function t(){return T7(this,t),j7(this,t,arguments)}return $7(t,e),R7(t,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,l=r.dataKey,p=r.data,f=r.dataPointFormatter,d=r.xAxis,h=r.yAxis,v=k7(r,_7),b=_e(v,!1);this.props.direction==="x"&&d.type!=="number"&&bo();var x=p.map(function(I){var g=f(I,l),S=g.x,_=g.y,A=g.value,W=g.errorVal;if(!W)return null;var w=[],O,E;if(Array.isArray(W)){var P=A7(W,2);O=P[0],E=P[1]}else O=E=W;if(i==="vertical"){var M=d.scale,R=_+a,H=R+s,T=R-s,L=M(A-O),G=M(A+E);w.push({x1:G,y1:H,x2:G,y2:T}),w.push({x1:L,y1:R,x2:G,y2:R}),w.push({x1:L,y1:H,x2:L,y2:T})}else if(i==="horizontal"){var U=h.scale,K=S+a,z=K-s,D=K+s,Y=U(A-O),Q=U(A+E);w.push({x1:z,y1:Q,x2:D,y2:Q}),w.push({x1:K,y1:Y,x2:K,y2:Q}),w.push({x1:z,y1:Y,x2:D,y2:Y})}return j.createElement(De,np({className:"recharts-errorBar",key:"bar-".concat(w.map(function(N){return"".concat(N.x1,"-").concat(N.x2,"-").concat(N.y1,"-").concat(N.y2)}))},b),w.map(function(N){return j.createElement("line",np({},N,{key:"line-".concat(N.x1,"-").concat(N.x2,"-").concat(N.y1,"-").concat(N.y2)}))}))});return j.createElement(De,{className:"recharts-errorBars"},x)}}])})(j.Component);xO(Zi,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});xO(Zi,"displayName","ErrorBar");function Ps(e){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ps(e)}function hS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function no(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hS(Object(n),!0).forEach(function(r){q7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function q7(e,t,n){return t=F7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F7(e){var t=z7(e,"string");return Ps(t)=="symbol"?t:t+""}function z7(e,t){if(Ps(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ps(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var PO=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,i=t.legendContent,s=Sn(n,Ma);if(!s)return null;var l=Ma.defaultProps,p=l!==void 0?no(no({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(d,h){var v=h.item,b=h.props,x=b.sectors||b.data||[];return d.concat(x.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(d){var h=d.item,v=h.type.defaultProps,b=v!==void 0?no(no({},v),h.props):{},x=b.dataKey,I=b.name,g=b.legendType,S=b.hide;return{inactive:S,dataKey:x,type:p.iconType||g||"square",color:ub(h),value:I||x,payload:b}}),no(no(no({},p),Ma.getWithHeight(s,a)),{},{payload:f,item:s})};function Ss(e){"@babel/helpers - typeof";return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ss(e)}function mS(e){return K7(e)||G7(e)||V7(e)||U7()}function U7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V7(e,t){if(e){if(typeof e=="string")return my(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return my(e,t)}}function G7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function K7(e){if(Array.isArray(e))return my(e)}function my(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vS(Object(n),!0).forEach(function(r){ci(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ci(e,t,n){return t=Y7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y7(e){var t=Q7(e,"string");return Ss(t)=="symbol"?t:t+""}function Q7(e,t){if(Ss(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ss(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ee(e)||Ee(t)?n:Rt(t)?On(e,t,n):ke(t)?t(e):n}function ts(e,t,n,r){var a=K8(e,function(l){return lt(l,t)});if(n==="number"){var i=a.filter(function(l){return le(l)||parseFloat(l)});return i.length?[o0(i),Aa(i)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ee(l)}):a;return s.map(function(l){return Rt(l)||l instanceof Date?l:""})}var X7=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var p=i.range,f=0;f<l;f++){var d=f>0?a[f-1].coordinate:a[l-1].coordinate,h=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,b=void 0;if(an(h-d)!==an(v-h)){var x=[];if(an(v-h)===an(p[1]-p[0])){b=v;var I=h+p[1]-p[0];x[0]=Math.min(I,(I+d)/2),x[1]=Math.max(I,(I+d)/2)}else{b=d;var g=v+p[1]-p[0];x[0]=Math.min(h,(g+h)/2),x[1]=Math.max(h,(g+h)/2)}var S=[Math.min(h,(b+h)/2),Math.max(h,(b+h)/2)];if(t>S[0]&&t<=S[1]||t>=x[0]&&t<=x[1]){s=a[f].index;break}}else{var _=Math.min(d,v),A=Math.max(d,v);if(t>(_+h)/2&&t<=(A+h)/2){s=a[f].index;break}}}else for(var W=0;W<l;W++)if(W===0&&t<=(r[W].coordinate+r[W+1].coordinate)/2||W>0&&W<l-1&&t>(r[W].coordinate+r[W-1].coordinate)/2&&t<=(r[W].coordinate+r[W+1].coordinate)/2||W===l-1&&t>(r[W].coordinate+r[W-1].coordinate)/2){s=r[W].index;break}return s},ub=function(t){var n,r=t,a=r.type.displayName,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=i.stroke,l=i.fill,p;switch(a){case"Line":p=s;break;case"Area":case"Radar":p=s&&s!=="none"?s:l;break;default:p=l;break}return p},Z7=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},l=Object.keys(i),p=0,f=l.length;p<f;p++)for(var d=i[l[p]].stackGroups,h=Object.keys(d),v=0,b=h.length;v<b;v++){var x=d[h[v]],I=x.items,g=x.cateAxisId,S=I.filter(function(E){return Ur(E.type).indexOf("Bar")>=0});if(S&&S.length){var _=S[0].type.defaultProps,A=_!==void 0?bt(bt({},_),S[0].props):S[0].props,W=A.barSize,w=A[g];s[w]||(s[w]=[]);var O=Ee(W)?n:W;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ee(O)?void 0:on(O,r,0)})}}return s},J7=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,i=t.sizeList,s=i===void 0?[]:i,l=t.maxBarSize,p=s.length;if(p<1)return null;var f=on(n,a,0,!0),d,h=[];if(s[0].barSize===+s[0].barSize){var v=!1,b=a/p,x=s.reduce(function(W,w){return W+w.barSize||0},0);x+=(p-1)*f,x>=a&&(x-=(p-1)*f,f=0),x>=a&&b>0&&(v=!0,b*=.9,x=p*b);var I=(a-x)/2>>0,g={offset:I-f,size:0};d=s.reduce(function(W,w){var O={item:w.item,position:{offset:g.offset+g.size+f,size:v?b:w.barSize}},E=[].concat(mS(W),[O]);return g=E[E.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:g})}),E},h)}else{var S=on(r,a,0,!0);a-2*S-(p-1)*f<=0&&(f=0);var _=(a-2*S-(p-1)*f)/p;_>1&&(_>>=0);var A=l===+l?Math.min(_,l):_;d=s.reduce(function(W,w,O){var E=[].concat(mS(W),[{item:w.item,position:{offset:S+(_+f)*O+(_-A)/2,size:A}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:E[E.length-1].position})}),E},h)}return d},eq=function(t,n,r,a){var i=r.children,s=r.width,l=r.margin,p=s-(l.left||0)-(l.right||0),f=PO({children:i,legendWidth:p});if(f){var d=a||{},h=d.width,v=d.height,b=f.align,x=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&x==="middle")&&b!=="center"&&le(t[b]))return bt(bt({},t),{},ci({},b,t[b]+(h||0)));if((I==="horizontal"||I==="vertical"&&b==="center")&&x!=="middle"&&le(t[x]))return bt(bt({},t),{},ci({},x,t[x]+(v||0)))}return t},tq=function(t,n,r){return Ee(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},SO=function(t,n,r,a,i){var s=n.props.children,l=sn(s,Zi).filter(function(f){return tq(a,i,f.props.direction)});if(l&&l.length){var p=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,d){var h=lt(d,r);if(Ee(h))return f;var v=Array.isArray(h)?[o0(h),Aa(h)]:[h,h],b=p.reduce(function(x,I){var g=lt(d,I,0),S=v[0]-Math.abs(Array.isArray(g)?g[0]:g),_=v[1]+Math.abs(Array.isArray(g)?g[1]:g);return[Math.min(S,x[0]),Math.max(_,x[1])]},[1/0,-1/0]);return[Math.min(b[0],f[0]),Math.max(b[1],f[1])]},[1/0,-1/0])}return null},nq=function(t,n,r,a,i){var s=n.map(function(l){return SO(t,l,r,i,a)}).filter(function(l){return!Ee(l)});return s&&s.length?s.reduce(function(l,p){return[Math.min(l[0],p[0]),Math.max(l[1],p[1])]},[1/0,-1/0]):null},_O=function(t,n,r,a,i){var s=n.map(function(p){var f=p.props.dataKey;return r==="number"&&f&&SO(t,p,f,a)||ts(t,f,r,i)});if(r==="number")return s.reduce(function(p,f){return[Math.min(p[0],f[0]),Math.max(p[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(p,f){for(var d=0,h=f.length;d<h;d++)l[f[d]]||(l[f[d]]=!0,p.push(f[d]));return p},[])},AO=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},OO=function(t,n,r,a){if(a)return t.map(function(p){return p.coordinate});var i,s,l=t.map(function(p){return p.coordinate===n&&(i=!0),p.coordinate===r&&(s=!0),p.coordinate});return i||l.push(n),s||l.push(r),l},qr=function(t,n,r){if(!t)return null;var a=t.scale,i=t.duplicateDomain,s=t.type,l=t.range,p=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/p:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var d=(t.ticks||t.niceTicks).map(function(h){var v=i?i.indexOf(h):h;return{coordinate:a(v)+f,value:h,offset:f}});return d.filter(function(h){return!Gi(h.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(h,v){return{coordinate:a(h)+f,value:h,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(h){return{coordinate:a(h)+f,value:h,offset:f}}):a.domain().map(function(h,v){return{coordinate:a(h)+f,value:i?i[h]:h,index:v,offset:f}})},Um=new WeakMap,bc=function(t,n){if(typeof n!="function")return t;Um.has(t)||Um.set(t,new WeakMap);var r=Um.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},WO=function(t,n,r){var a=t.scale,i=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:ys(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Xc(),realScaleType:"linear"}:i==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:es(),realScaleType:"point"}:i==="category"?{scale:ys(),realScaleType:"band"}:{scale:Xc(),realScaleType:"linear"};if(Vs(a)){var p="scale".concat(zp(a));return{scale:(tS[p]||es)(),realScaleType:tS[p]?p:"point"}}return ke(a)?{scale:a}:{scale:es(),realScaleType:"point"}},yS=1e-4,MO=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),i=Math.min(a[0],a[1])-yS,s=Math.max(a[0],a[1])+yS,l=t(n[0]),p=t(n[r-1]);(l<i||l>s||p<i||p>s)&&t.domain([n[0],n[r-1]])}},rq=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},aq=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),i=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(i[0]=r),(!le(t[1])||t[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},oq=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0,l=0;l<n;++l){var p=Gi(t[l][r][1])?t[l][r][0]:t[l][r][1];p>=0?(t[l][r][0]=i,t[l][r][1]=i+p,i=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+p,s=t[l][r][1])}},iq=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0;s<n;++s){var l=Gi(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=i,t[s][r][1]=i+l,i=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},uq={sign:oq,expand:Kj,none:fi,silhouette:Yj,wiggle:Qj,positive:iq},sq=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),i=uq[r],s=Gj().keys(a).value(function(l,p){return+lt(l,p,0)}).order(Uv).offset(i);return s(t)},lq=function(t,n,r,a,i,s){if(!t)return null;var l=s?n.reverse():n,p={},f=l.reduce(function(h,v){var b,x=(b=v.type)!==null&&b!==void 0&&b.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=x.stackId,g=x.hide;if(g)return h;var S=x[r],_=h[S]||{hasStack:!1,stackGroups:{}};if(Rt(I)){var A=_.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};A.items.push(v),_.hasStack=!0,_.stackGroups[I]=A}else _.stackGroups[Ha("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},h),{},ci({},S,_))},p),d={};return Object.keys(f).reduce(function(h,v){var b=f[v];if(b.hasStack){var x={};b.stackGroups=Object.keys(b.stackGroups).reduce(function(I,g){var S=b.stackGroups[g];return bt(bt({},I),{},ci({},g,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:sq(t,S.items,i)}))},x)}return bt(bt({},h),{},ci({},v,b))},d)},CO=function(t,n){var r=n.realScaleType,a=n.type,i=n.tickCount,s=n.originalDomain,l=n.allowDecimals,p=r||n.scale;if(p!=="auto"&&p!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var d=w7(f,i,l);return t.domain([o0(d),Aa(d)]),{niceTicks:d}}if(i&&a==="number"){var h=t.domain(),v=P7(h,i,l);return{niceTicks:v}}return null};function Bi(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ee(a[t.dataKey])){var l=kc(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[i]?n[i].coordinate+r/2:null}var p=lt(a,Ee(s)?t.dataKey:s);return Ee(p)?null:t.scale(p)}var gS=function(t){var n=t.axis,r=t.ticks,a=t.offset,i=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var p=lt(s,n.dataKey,n.domain[l]);return Ee(p)?null:n.scale(p)-i/2+a},cq=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},pq=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,i=a.stackId;if(Rt(i)){var s=n[i];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},fq=function(t){return t.reduce(function(n,r){return[o0(r.concat([n[0]]).filter(le)),Aa(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},kO=function(t,n,r){return Object.keys(t).reduce(function(a,i){var s=t[i],l=s.stackedData,p=l.reduce(function(f,d){var h=fq(d.slice(n,r+1));return[Math.min(f[0],h[0]),Math.max(f[1],h[1])]},[1/0,-1/0]);return[Math.min(p[0],a[0]),Math.max(p[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},bS=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,IS=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,vy=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(bS.test(t[0])){var i=+bS.exec(t[0])[1];a[0]=n[0]-i}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(IS.test(t[1])){var s=+IS.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},ap=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var i=Tg(n,function(h){return h.coordinate}),s=1/0,l=1,p=i.length;l<p;l++){var f=i[l],d=i[l-1];s=Math.min((f.coordinate||0)-(d.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},BS=function(t,n,r){return!t||!t.length||Na(t,On(r,"type.defaultProps.domain"))?n:t},EO=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,i=r.name,s=r.unit,l=r.formatter,p=r.tooltipType,f=r.chartType,d=r.hide;return bt(bt({},_e(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:i||a,color:ub(t),value:lt(n,a),type:p,payload:n,chartType:f,hide:d})};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}function xS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xS(Object(n),!0).forEach(function(r){TO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TO(e,t,n){return t=dq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dq(e){var t=hq(e,"string");return _s(t)=="symbol"?t:t+""}function hq(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mq(e,t){return bq(e)||gq(e,t)||yq(e,t)||vq()}function vq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yq(e,t){if(e){if(typeof e=="string")return wS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wS(e,t)}}function wS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function bq(e){if(Array.isArray(e))return e}var op=Math.PI/180,Iq=function(t){return t*180/Math.PI},ot=function(t,n,r,a){return{x:t+Math.cos(-op*a)*r,y:n+Math.sin(-op*a)*r}},NO=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},Bq=function(t,n,r,a,i){var s=t.width,l=t.height,p=t.startAngle,f=t.endAngle,d=on(t.cx,s,s/2),h=on(t.cy,l,l/2),v=NO(s,l,r),b=on(t.innerRadius,v,0),x=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(g,S){var _=n[S],A=_.domain,W=_.reversed,w;if(Ee(_.range))a==="angleAxis"?w=[p,f]:a==="radiusAxis"&&(w=[b,x]),W&&(w=[w[1],w[0]]);else{w=_.range;var O=w,E=mq(O,2);p=E[0],f=E[1]}var P=WO(_,i),M=P.realScaleType,R=P.scale;R.domain(A).range(w),MO(R);var H=CO(R,Hr(Hr({},_),{},{realScaleType:M})),T=Hr(Hr(Hr({},_),H),{},{range:w,radius:x,realScaleType:M,scale:R,cx:d,cy:h,innerRadius:b,outerRadius:x,startAngle:p,endAngle:f});return Hr(Hr({},g),{},TO({},S,T))},{})},xq=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},wq=function(t,n){var r=t.x,a=t.y,i=n.cx,s=n.cy,l=xq({x:r,y:a},{x:i,y:s});if(l<=0)return{radius:l};var p=(r-i)/l,f=Math.acos(p);return a>s&&(f=2*Math.PI-f),{radius:l,angle:Iq(f),angleInRadian:f}},Pq=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:n-s*360,endAngle:r-s*360}},Sq=function(t,n){var r=n.startAngle,a=n.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(i,s);return t+l*360},PS=function(t,n){var r=t.x,a=t.y,i=wq({x:r,y:a},n),s=i.radius,l=i.angle,p=n.innerRadius,f=n.outerRadius;if(s<p||s>f)return!1;if(s===0)return!0;var d=Pq(n),h=d.startAngle,v=d.endAngle,b=l,x;if(h<=v){for(;b>v;)b-=360;for(;b<h;)b+=360;x=b>=h&&b<=v}else{for(;b>h;)b-=360;for(;b<v;)b+=360;x=b>=v&&b<=h}return x?Hr(Hr({},n),{},{radius:s,angle:Sq(b,n)}):null},RO=function(t){return!X.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}var _q=["offset"];function Aq(e){return Cq(e)||Mq(e)||Wq(e)||Oq()}function Oq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wq(e,t){if(e){if(typeof e=="string")return yy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yy(e,t)}}function Mq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cq(e){if(Array.isArray(e))return yy(e)}function yy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kq(e,t){if(e==null)return{};var n=Eq(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Eq(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function SS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(n),!0).forEach(function(r){Tq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tq(e,t,n){return t=Nq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nq(e){var t=Rq(e,"string");return As(t)=="symbol"?t:t+""}function Rq(e,t){if(As(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}var jq=function(t){var n=t.value,r=t.formatter,a=Ee(t.children)?n:t.children;return ke(r)?r(a):a},Hq=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},Dq=function(t,n,r){var a=t.position,i=t.viewBox,s=t.offset,l=t.className,p=i,f=p.cx,d=p.cy,h=p.innerRadius,v=p.outerRadius,b=p.startAngle,x=p.endAngle,I=p.clockWise,g=(h+v)/2,S=Hq(b,x),_=S>=0?1:-1,A,W;a==="insideStart"?(A=b+_*s,W=I):a==="insideEnd"?(A=x-_*s,W=!I):a==="end"&&(A=x+_*s,W=I),W=S<=0?W:!W;var w=ot(f,d,g,A),O=ot(f,d,g,A+(W?1:-1)*359),E="M".concat(w.x,",").concat(w.y,`
    A`).concat(g,",").concat(g,",0,1,").concat(W?0:1,`,
    `).concat(O.x,",").concat(O.y),P=Ee(t.id)?Ha("recharts-radial-line-"):t.id;return j.createElement("text",Os({},r,{dominantBaseline:"central",className:je("recharts-radial-bar-label",l)}),j.createElement("defs",null,j.createElement("path",{id:P,d:E})),j.createElement("textPath",{xlinkHref:"#".concat(P)},n))},$q=function(t){var n=t.viewBox,r=t.offset,a=t.position,i=n,s=i.cx,l=i.cy,p=i.innerRadius,f=i.outerRadius,d=i.startAngle,h=i.endAngle,v=(d+h)/2;if(a==="outside"){var b=ot(s,l,f+r,v),x=b.x,I=b.y;return{x,y:I,textAnchor:x>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var g=(p+f)/2,S=ot(s,l,g,v),_=S.x,A=S.y;return{x:_,y:A,textAnchor:"middle",verticalAnchor:"middle"}},Lq=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,i=t.position,s=n,l=s.x,p=s.y,f=s.width,d=s.height,h=d>=0?1:-1,v=h*a,b=h>0?"end":"start",x=h>0?"start":"end",I=f>=0?1:-1,g=I*a,S=I>0?"end":"start",_=I>0?"start":"end";if(i==="top"){var A={x:l+f/2,y:p-h*a,textAnchor:"middle",verticalAnchor:b};return Nt(Nt({},A),r?{height:Math.max(p-r.y,0),width:f}:{})}if(i==="bottom"){var W={x:l+f/2,y:p+d+v,textAnchor:"middle",verticalAnchor:x};return Nt(Nt({},W),r?{height:Math.max(r.y+r.height-(p+d),0),width:f}:{})}if(i==="left"){var w={x:l-g,y:p+d/2,textAnchor:S,verticalAnchor:"middle"};return Nt(Nt({},w),r?{width:Math.max(w.x-r.x,0),height:d}:{})}if(i==="right"){var O={x:l+f+g,y:p+d/2,textAnchor:_,verticalAnchor:"middle"};return Nt(Nt({},O),r?{width:Math.max(r.x+r.width-O.x,0),height:d}:{})}var E=r?{width:f,height:d}:{};return i==="insideLeft"?Nt({x:l+g,y:p+d/2,textAnchor:_,verticalAnchor:"middle"},E):i==="insideRight"?Nt({x:l+f-g,y:p+d/2,textAnchor:S,verticalAnchor:"middle"},E):i==="insideTop"?Nt({x:l+f/2,y:p+v,textAnchor:"middle",verticalAnchor:x},E):i==="insideBottom"?Nt({x:l+f/2,y:p+d-v,textAnchor:"middle",verticalAnchor:b},E):i==="insideTopLeft"?Nt({x:l+g,y:p+v,textAnchor:_,verticalAnchor:x},E):i==="insideTopRight"?Nt({x:l+f-g,y:p+v,textAnchor:S,verticalAnchor:x},E):i==="insideBottomLeft"?Nt({x:l+g,y:p+d-v,textAnchor:_,verticalAnchor:b},E):i==="insideBottomRight"?Nt({x:l+f-g,y:p+d-v,textAnchor:S,verticalAnchor:b},E):Vi(i)&&(le(i.x)||lo(i.x))&&(le(i.y)||lo(i.y))?Nt({x:l+on(i.x,f),y:p+on(i.y,d),textAnchor:"end",verticalAnchor:"end"},E):Nt({x:l+f/2,y:p+d/2,textAnchor:"middle",verticalAnchor:"middle"},E)},qq=function(t){return"cx"in t&&le(t.cx)};function Ft(e){var t=e.offset,n=t===void 0?5:t,r=kq(e,_q),a=Nt({offset:n},r),i=a.viewBox,s=a.position,l=a.value,p=a.children,f=a.content,d=a.className,h=d===void 0?"":d,v=a.textBreakAll;if(!i||Ee(l)&&Ee(p)&&!X.isValidElement(f)&&!ke(f))return null;if(X.isValidElement(f))return X.cloneElement(f,a);var b;if(ke(f)){if(b=X.createElement(f,a),X.isValidElement(b))return b}else b=jq(a);var x=qq(i),I=_e(a,!0);if(x&&(s==="insideStart"||s==="insideEnd"||s==="end"))return Dq(a,b,I);var g=x?$q(a):Lq(a);return j.createElement(yo,Os({className:je("recharts-label",h)},I,g,{breakAll:v}),b)}Ft.displayName="Label";var jO=function(t){var n=t.cx,r=t.cy,a=t.angle,i=t.startAngle,s=t.endAngle,l=t.r,p=t.radius,f=t.innerRadius,d=t.outerRadius,h=t.x,v=t.y,b=t.top,x=t.left,I=t.width,g=t.height,S=t.clockWise,_=t.labelViewBox;if(_)return _;if(le(I)&&le(g)){if(le(h)&&le(v))return{x:h,y:v,width:I,height:g};if(le(b)&&le(x))return{x:b,y:x,width:I,height:g}}return le(h)&&le(v)?{x:h,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:d||p||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},Fq=function(t,n){return t?t===!0?j.createElement(Ft,{key:"label-implicit",viewBox:n}):Rt(t)?j.createElement(Ft,{key:"label-implicit",viewBox:n,value:t}):X.isValidElement(t)?t.type===Ft?X.cloneElement(t,{key:"label-implicit",viewBox:n}):j.createElement(Ft,{key:"label-implicit",content:t,viewBox:n}):ke(t)?j.createElement(Ft,{key:"label-implicit",content:t,viewBox:n}):Vi(t)?j.createElement(Ft,Os({viewBox:n},t,{key:"label-implicit"})):null:null},zq=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,i=jO(t),s=sn(a,Ft).map(function(p,f){return X.cloneElement(p,{viewBox:n||i,key:"label-".concat(f)})});if(!r)return s;var l=Fq(t.label,n||i);return[l].concat(Aq(s))};Ft.parseViewBox=jO;Ft.renderCallByParent=zq;var Vm,_S;function Uq(){if(_S)return Vm;_S=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Vm=e,Vm}var Vq=Uq();const Gq=Xe(Vq);function Ws(e){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ws(e)}var Kq=["valueAccessor"],Yq=["data","dataKey","clockWise","id","textBreakAll"];function Qq(e){return eF(e)||Jq(e)||Zq(e)||Xq()}function Xq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zq(e,t){if(e){if(typeof e=="string")return gy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gy(e,t)}}function Jq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eF(e){if(Array.isArray(e))return gy(e)}function gy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ip(){return ip=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ip.apply(this,arguments)}function AS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function OS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?AS(Object(n),!0).forEach(function(r){tF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tF(e,t,n){return t=nF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nF(e){var t=rF(e,"string");return Ws(t)=="symbol"?t:t+""}function rF(e,t){if(Ws(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function WS(e,t){if(e==null)return{};var n=aF(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function aF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var oF=function(t){return Array.isArray(t.value)?Gq(t.value):t.value};function sr(e){var t=e.valueAccessor,n=t===void 0?oF:t,r=WS(e,Kq),a=r.data,i=r.dataKey,s=r.clockWise,l=r.id,p=r.textBreakAll,f=WS(r,Yq);return!a||!a.length?null:j.createElement(De,{className:"recharts-label-list"},a.map(function(d,h){var v=Ee(i)?n(d,h):lt(d&&d.payload,i),b=Ee(l)?{}:{id:"".concat(l,"-").concat(h)};return j.createElement(Ft,ip({},_e(d,!0),f,b,{parentViewBox:d.parentViewBox,value:v,textBreakAll:p,viewBox:Ft.parseViewBox(Ee(s)?d:OS(OS({},d),{},{clockWise:s})),key:"label-".concat(h),index:h}))}))}sr.displayName="LabelList";function iF(e,t){return e?e===!0?j.createElement(sr,{key:"labelList-implicit",data:t}):j.isValidElement(e)||ke(e)?j.createElement(sr,{key:"labelList-implicit",data:t,content:e}):Vi(e)?j.createElement(sr,ip({data:t},e,{key:"labelList-implicit"})):null:null}function uF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,sr).map(function(s,l){return X.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var i=iF(e.label,t);return[i].concat(Qq(a))}sr.renderCallByParent=uF;function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function by(){return by=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},by.apply(this,arguments)}function MS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function CS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?MS(Object(n),!0).forEach(function(r){sF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):MS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sF(e,t,n){return t=lF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lF(e){var t=cF(e,"string");return Ms(t)=="symbol"?t:t+""}function cF(e,t){if(Ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pF=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},Ic=function(t){var n=t.cx,r=t.cy,a=t.radius,i=t.angle,s=t.sign,l=t.isExternal,p=t.cornerRadius,f=t.cornerIsExternal,d=p*(l?1:-1)+a,h=Math.asin(p/d)/op,v=f?i:i+s*h,b=ot(n,r,d,v),x=ot(n,r,a,v),I=f?i-s*h:i,g=ot(n,r,d*Math.cos(h*op),I);return{center:b,circleTangency:x,lineTangency:g,theta:h}},HO=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.startAngle,l=t.endAngle,p=pF(s,l),f=s+p,d=ot(n,r,i,s),h=ot(n,r,i,f),v="M ".concat(d.x,",").concat(d.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(p)>180),",").concat(+(s>f),`,
    `).concat(h.x,",").concat(h.y,`
  `);if(a>0){var b=ot(n,r,a,s),x=ot(n,r,a,f);v+="L ".concat(x.x,",").concat(x.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(p)>180),",").concat(+(s<=f),`,
            `).concat(b.x,",").concat(b.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},fF=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,p=t.cornerIsExternal,f=t.startAngle,d=t.endAngle,h=an(d-f),v=Ic({cx:n,cy:r,radius:i,angle:f,sign:h,cornerRadius:s,cornerIsExternal:p}),b=v.circleTangency,x=v.lineTangency,I=v.theta,g=Ic({cx:n,cy:r,radius:i,angle:d,sign:-h,cornerRadius:s,cornerIsExternal:p}),S=g.circleTangency,_=g.lineTangency,A=g.theta,W=p?Math.abs(f-d):Math.abs(f-d)-I-A;if(W<0)return l?"M ".concat(x.x,",").concat(x.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):HO({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:d});var w="M ".concat(x.x,",").concat(x.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(b.x,",").concat(b.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(W>180),",").concat(+(h<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(_.x,",").concat(_.y,`
  `);if(a>0){var O=Ic({cx:n,cy:r,radius:a,angle:f,sign:h,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),E=O.circleTangency,P=O.lineTangency,M=O.theta,R=Ic({cx:n,cy:r,radius:a,angle:d,sign:-h,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),H=R.circleTangency,T=R.lineTangency,L=R.theta,G=p?Math.abs(f-d):Math.abs(f-d)-M-L;if(G<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(T.x,",").concat(T.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(H.x,",").concat(H.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(G>180),",").concat(+(h>0),",").concat(E.x,",").concat(E.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},dF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},DO=function(t){var n=CS(CS({},dF),t),r=n.cx,a=n.cy,i=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,p=n.forceCornerRadius,f=n.cornerIsExternal,d=n.startAngle,h=n.endAngle,v=n.className;if(s<i||d===h)return null;var b=je("recharts-sector",v),x=s-i,I=on(l,x,0,!0),g;return I>0&&Math.abs(d-h)<360?g=fF({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,x/2),forceCornerRadius:p,cornerIsExternal:f,startAngle:d,endAngle:h}):g=HO({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:d,endAngle:h}),j.createElement("path",by({},_e(n,!0),{className:b,d:g,role:"img"}))};function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}function Iy(){return Iy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Iy.apply(this,arguments)}function kS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ES(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kS(Object(n),!0).forEach(function(r){hF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hF(e,t,n){return t=mF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mF(e){var t=vF(e,"string");return Cs(t)=="symbol"?t:t+""}function vF(e,t){if(Cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var TS={curveBasisClosed:Rj,curveBasisOpen:jj,curveBasis:Nj,curveBumpX:Bj,curveBumpY:xj,curveLinearClosed:Hj,curveLinear:Vp,curveMonotoneX:Dj,curveMonotoneY:$j,curveNatural:Lj,curveStep:qj,curveStepAfter:zj,curveStepBefore:Fj},Bc=function(t){return t.x===+t.x&&t.y===+t.y},Vu=function(t){return t.x},Gu=function(t){return t.y},yF=function(t,n){if(ke(t))return t;var r="curve".concat(zp(t));return(r==="curveMonotone"||r==="curveBump")&&n?TS["".concat(r).concat(n==="vertical"?"Y":"X")]:TS[r]||Vp},gF=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,i=a===void 0?[]:a,s=t.baseLine,l=t.layout,p=t.connectNulls,f=p===void 0?!1:p,d=yF(r,l),h=f?i.filter(function(I){return Bc(I)}):i,v;if(Array.isArray(s)){var b=f?s.filter(function(I){return Bc(I)}):s,x=h.map(function(I,g){return ES(ES({},I),{},{base:b[g]})});return l==="vertical"?v=fc().y(Gu).x1(Vu).x0(function(I){return I.base.x}):v=fc().x(Vu).y1(Gu).y0(function(I){return I.base.y}),v.defined(Bc).curve(d),v(x)}return l==="vertical"&&le(s)?v=fc().y(Gu).x1(Vu).x0(s):le(s)?v=fc().x(Vu).y1(Gu).y0(s):v=H_().x(Vu).y(Gu),v.defined(Bc).curve(d),v(h)},ka=function(t){var n=t.className,r=t.points,a=t.path,i=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?gF(t):a;return j.createElement("path",Iy({},_e(t,!1),Ec(t),{className:je("recharts-curve",n),d:s,ref:i}))},Gm={exports:{}},Km,NS;function bF(){if(NS)return Km;NS=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Km=e,Km}var Ym,RS;function IF(){if(RS)return Ym;RS=1;var e=bF();function t(){}function n(){}return n.resetWarningCache=t,Ym=function(){function r(s,l,p,f,d,h){if(h!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Ym}var jS;function BF(){return jS||(jS=1,Gm.exports=IF()()),Gm.exports}var xF=BF();const Qe=Xe(xF),{getOwnPropertyNames:wF,getOwnPropertySymbols:PF}=Object,{hasOwnProperty:SF}=Object.prototype;function Qm(e,t){return function(r,a,i){return e(r,a,i)&&t(r,a,i)}}function xc(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:i}=a,s=i.get(n),l=i.get(r);if(s&&l)return s===r&&l===n;i.set(n,r),i.set(r,n);const p=e(n,r,a);return i.delete(n),i.delete(r),p}}function _F(e){return e!=null?e[Symbol.toStringTag]:void 0}function HS(e){return wF(e).concat(PF(e))}const AF=Object.hasOwn||((e,t)=>SF.call(e,t));function Po(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const OF="__v",WF="__o",MF="_owner",{getOwnPropertyDescriptor:DS,keys:$S}=Object;function CF(e,t){return e.byteLength===t.byteLength&&up(new Uint8Array(e),new Uint8Array(t))}function kF(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function EF(e,t){return e.byteLength===t.byteLength&&up(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function TF(e,t){return Po(e.getTime(),t.getTime())}function NF(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function RF(e,t){return e===t}function LS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,l,p=0;for(;(s=i.next())&&!s.done;){const f=t.entries();let d=!1,h=0;for(;(l=f.next())&&!l.done;){if(a[h]){h++;continue}const v=s.value,b=l.value;if(n.equals(v[0],b[0],p,h,e,t,n)&&n.equals(v[1],b[1],v[0],b[0],e,t,n)){d=a[h]=!0;break}h++}if(!d)return!1;p++}return!0}const jF=Po;function HF(e,t,n){const r=$S(e);let a=r.length;if($S(t).length!==a)return!1;for(;a-- >0;)if(!$O(e,t,n,r[a]))return!1;return!0}function Ku(e,t,n){const r=HS(e);let a=r.length;if(HS(t).length!==a)return!1;let i,s,l;for(;a-- >0;)if(i=r[a],!$O(e,t,n,i)||(s=DS(e,i),l=DS(t,i),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function DF(e,t){return Po(e.valueOf(),t.valueOf())}function $F(e,t){return e.source===t.source&&e.flags===t.flags}function qS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,l;for(;(s=i.next())&&!s.done;){const p=t.values();let f=!1,d=0;for(;(l=p.next())&&!l.done;){if(!a[d]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[d]=!0;break}d++}if(!f)return!1}return!0}function up(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function LF(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function $O(e,t,n,r){return(r===MF||r===WF||r===OF)&&(e.$$typeof||t.$$typeof)?!0:AF(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const qF="[object ArrayBuffer]",FF="[object Arguments]",zF="[object Boolean]",UF="[object DataView]",VF="[object Date]",GF="[object Error]",KF="[object Map]",YF="[object Number]",QF="[object Object]",XF="[object RegExp]",ZF="[object Set]",JF="[object String]",e9={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},t9="[object URL]",n9=Object.prototype.toString;function r9({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:p,arePrimitiveWrappersEqual:f,areRegExpsEqual:d,areSetsEqual:h,areTypedArraysEqual:v,areUrlsEqual:b,unknownTagComparators:x}){return function(g,S,_){if(g===S)return!0;if(g==null||S==null)return!1;const A=typeof g;if(A!==typeof S)return!1;if(A!=="object")return A==="number"?l(g,S,_):A==="function"?i(g,S,_):!1;const W=g.constructor;if(W!==S.constructor)return!1;if(W===Object)return p(g,S,_);if(Array.isArray(g))return t(g,S,_);if(W===Date)return r(g,S,_);if(W===RegExp)return d(g,S,_);if(W===Map)return s(g,S,_);if(W===Set)return h(g,S,_);const w=n9.call(g);if(w===VF)return r(g,S,_);if(w===XF)return d(g,S,_);if(w===KF)return s(g,S,_);if(w===ZF)return h(g,S,_);if(w===QF)return typeof g.then!="function"&&typeof S.then!="function"&&p(g,S,_);if(w===t9)return b(g,S,_);if(w===GF)return a(g,S,_);if(w===FF)return p(g,S,_);if(e9[w])return v(g,S,_);if(w===qF)return e(g,S,_);if(w===UF)return n(g,S,_);if(w===zF||w===YF||w===JF)return f(g,S,_);if(x){let O=x[w];if(!O){const E=_F(g);E&&(O=x[E])}if(O)return O(g,S,_)}return!1}}function a9({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:CF,areArraysEqual:n?Ku:kF,areDataViewsEqual:EF,areDatesEqual:TF,areErrorsEqual:NF,areFunctionsEqual:RF,areMapsEqual:n?Qm(LS,Ku):LS,areNumbersEqual:jF,areObjectsEqual:n?Ku:HF,arePrimitiveWrappersEqual:DF,areRegExpsEqual:$F,areSetsEqual:n?Qm(qS,Ku):qS,areTypedArraysEqual:n?Qm(up,Ku):up,areUrlsEqual:LF,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=xc(r.areArraysEqual),i=xc(r.areMapsEqual),s=xc(r.areObjectsEqual),l=xc(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:l})}return r}function o9(e){return function(t,n,r,a,i,s,l){return e(t,n,l)}}function i9({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,p){const{cache:f=e?new WeakMap:void 0,meta:d}=n();return t(l,p,{cache:f,equals:r,meta:d,strict:a})};if(e)return function(l,p){return t(l,p,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,p){return t(l,p,i)}}const u9=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>Po});La({strict:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po,strict:!0});function La(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,i=a9(e),s=r9(i),l=n?n(s):o9(s);return i9({circular:t,comparator:s,createState:r,equals:l,strict:a})}function s9(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function FS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(i){n<0&&(n=i),i-n>t?(e(i),n=-1):s9(a)};requestAnimationFrame(r)}function By(e){"@babel/helpers - typeof";return By=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},By(e)}function l9(e){return d9(e)||f9(e)||p9(e)||c9()}function c9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p9(e,t){if(e){if(typeof e=="string")return zS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zS(e,t)}}function zS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function d9(e){if(Array.isArray(e))return e}function h9(){var e={},t=function(){return null},n=!1,r=function a(i){if(!n){if(Array.isArray(i)){if(!i.length)return;var s=i,l=l9(s),p=l[0],f=l.slice(1);if(typeof p=="number"){FS(a.bind(null,f),p);return}a(p),FS(a.bind(null,f));return}By(i)==="object"&&(e=i,t(e)),typeof i=="function"&&i()}};return{stop:function(){n=!0},start:function(i){n=!1,r(i)},subscribe:function(i){return t=i,function(){t=function(){return null}}}}}function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}function US(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function VS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?US(Object(n),!0).forEach(function(r){LO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):US(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LO(e,t,n){return t=m9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m9(e){var t=v9(e,"string");return ks(t)==="symbol"?t:String(t)}function v9(e,t){if(ks(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var y9=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},g9=function(t){return t},b9=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},ns=function(t,n){return Object.keys(n).reduce(function(r,a){return VS(VS({},r),{},LO({},a,t(a,n[a])))},{})},GS=function(t,n,r){return t.map(function(a){return"".concat(b9(a)," ").concat(n,"ms ").concat(r)}).join(",")};function I9(e,t){return w9(e)||x9(e,t)||qO(e,t)||B9()}function B9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function w9(e){if(Array.isArray(e))return e}function P9(e){return A9(e)||_9(e)||qO(e)||S9()}function S9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qO(e,t){if(e){if(typeof e=="string")return xy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xy(e,t)}}function _9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A9(e){if(Array.isArray(e))return xy(e)}function xy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var sp=1e-4,FO=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},zO=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},KS=function(t,n){return function(r){var a=FO(t,n);return zO(a,r)}},O9=function(t,n){return function(r){var a=FO(t,n),i=[].concat(P9(a.map(function(s,l){return s*l}).slice(1)),[0]);return zO(i,r)}},YS=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],i=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,i=0,s=1,l=1;break;case"ease":a=.25,i=.1,s=.25,l=1;break;case"ease-in":a=.42,i=0,s=1,l=1;break;case"ease-out":a=.42,i=0,s=.58,l=1;break;case"ease-in-out":a=0,i=0,s=.58,l=1;break;default:{var p=n[0].split("(");if(p[0]==="cubic-bezier"&&p[1].split(")")[0].split(",").length===4){var f=p[1].split(")")[0].split(",").map(function(g){return parseFloat(g)}),d=I9(f,4);a=d[0],i=d[1],s=d[2],l=d[3]}}}var h=KS(a,s),v=KS(i,l),b=O9(a,s),x=function(S){return S>1?1:S<0?0:S},I=function(S){for(var _=S>1?1:S,A=_,W=0;W<8;++W){var w=h(A)-_,O=b(A);if(Math.abs(w-_)<sp||O<sp)return v(A);A=x(A-w/O)}return v(A)};return I.isStepper=!1,I},W9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,i=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,p=function(d,h,v){var b=-(d-h)*r,x=v*i,I=v+(b-x)*l/1e3,g=v*l/1e3+d;return Math.abs(g-h)<sp&&Math.abs(I)<sp?[h,0]:[g,I]};return p.isStepper=!0,p.dt=l,p},M9=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return YS(a);case"spring":return W9();default:if(a.split("(")[0]==="cubic-bezier")return YS(a)}return typeof a=="function"?a:null};function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function QS(e){return E9(e)||k9(e)||UO(e)||C9()}function C9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function E9(e){if(Array.isArray(e))return Py(e)}function XS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?XS(Object(n),!0).forEach(function(r){wy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wy(e,t,n){return t=T9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T9(e){var t=N9(e,"string");return Es(t)==="symbol"?t:String(t)}function N9(e,t){if(Es(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R9(e,t){return D9(e)||H9(e,t)||UO(e,t)||j9()}function j9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UO(e,t){if(e){if(typeof e=="string")return Py(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Py(e,t)}}function Py(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function D9(e){if(Array.isArray(e))return e}var lp=function(t,n,r){return t+(n-t)*r},Sy=function(t){var n=t.from,r=t.to;return n!==r},$9=function e(t,n,r){var a=ns(function(i,s){if(Sy(s)){var l=t(s.from,s.to,s.velocity),p=R9(l,2),f=p[0],d=p[1];return Gt(Gt({},s),{},{from:f,velocity:d})}return s},n);return r<1?ns(function(i,s){return Sy(s)?Gt(Gt({},s),{},{velocity:lp(s.velocity,a[i].velocity,r),from:lp(s.from,a[i].from,r)}):s},n):e(t,a,r-1)};const L9=(function(e,t,n,r,a){var i=y9(e,t),s=i.reduce(function(g,S){return Gt(Gt({},g),{},wy({},S,[e[S],t[S]]))},{}),l=i.reduce(function(g,S){return Gt(Gt({},g),{},wy({},S,{from:e[S],velocity:0,to:t[S]}))},{}),p=-1,f,d,h=function(){return null},v=function(){return ns(function(S,_){return _.from},l)},b=function(){return!Object.values(l).filter(Sy).length},x=function(S){f||(f=S);var _=S-f,A=_/n.dt;l=$9(n,l,A),a(Gt(Gt(Gt({},e),t),v())),f=S,b()||(p=requestAnimationFrame(h))},I=function(S){d||(d=S);var _=(S-d)/r,A=ns(function(w,O){return lp.apply(void 0,QS(O).concat([n(_)]))},s);if(a(Gt(Gt(Gt({},e),t),A)),_<1)p=requestAnimationFrame(h);else{var W=ns(function(w,O){return lp.apply(void 0,QS(O).concat([n(1)]))},s);a(Gt(Gt(Gt({},e),t),W))}};return h=n.isStepper?x:I,function(){return requestAnimationFrame(h),function(){cancelAnimationFrame(p)}}});function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}var q9=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function F9(e,t){if(e==null)return{};var n=z9(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function z9(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xm(e){return K9(e)||G9(e)||V9(e)||U9()}function U9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V9(e,t){if(e){if(typeof e=="string")return _y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _y(e,t)}}function G9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function K9(e){if(Array.isArray(e))return _y(e)}function _y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ZS(Object(n),!0).forEach(function(r){Zu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ZS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zu(e,t,n){return t=VO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q9(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,VO(r.key),r)}}function X9(e,t,n){return t&&Q9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function VO(e){var t=Z9(e,"string");return xi(t)==="symbol"?t:String(t)}function Z9(e,t){if(xi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function J9(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ay(e,t)}function Ay(e,t){return Ay=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ay(e,t)}function ez(e){var t=tz();return function(){var r=cp(e),a;if(t){var i=cp(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Oy(this,a)}}function Oy(e,t){if(t&&(xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wy(e)}function Wy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cp(e){return cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},cp(e)}var Kn=(function(e){J9(n,e);var t=ez(n);function n(r,a){var i;Y9(this,n),i=t.call(this,r,a);var s=i.props,l=s.isActive,p=s.attributeName,f=s.from,d=s.to,h=s.steps,v=s.children,b=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Wy(i)),i.changeStyle=i.changeStyle.bind(Wy(i)),!l||b<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:d}),Oy(i);if(h&&h.length)i.state={style:h[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Oy(i);i.state={style:p?Zu({},p,f):f}}else i.state={style:{}};return i}return X9(n,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,l=i.canBegin,p=i.attributeName,f=i.shouldReAnimate,d=i.to,h=i.from,v=this.state.style;if(l){if(!s){var b={style:p?Zu({},p,d):d};this.state&&v&&(p&&v[p]!==d||!p&&v!==d)&&this.setState(b);return}if(!(u9(a.to,d)&&a.canBegin&&a.isActive)){var x=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=x||f?h:a.to;if(this.state&&v){var g={style:p?Zu({},p,I):I};(p&&v[p]!==I||!p&&v!==I)&&this.setState(g)}this.runAnimation(rr(rr({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,l=a.to,p=a.duration,f=a.easing,d=a.begin,h=a.onAnimationEnd,v=a.onAnimationStart,b=L9(s,l,M9(f),p,this.changeStyle),x=function(){i.stopJSAnimation=b()};this.manager.start([v,d,x,p,h])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,l=a.begin,p=a.onAnimationStart,f=s[0],d=f.style,h=f.duration,v=h===void 0?0:h,b=function(I,g,S){if(S===0)return I;var _=g.duration,A=g.easing,W=A===void 0?"ease":A,w=g.style,O=g.properties,E=g.onAnimationEnd,P=S>0?s[S-1]:g,M=O||Object.keys(w);if(typeof W=="function"||W==="spring")return[].concat(Xm(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:_,easing:W}),_]);var R=GS(M,_,W),H=rr(rr(rr({},P.style),w),{},{transition:R});return[].concat(Xm(I),[H,_,E]).filter(g9)};return this.manager.start([p].concat(Xm(s.reduce(b,[d,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=h9());var i=a.begin,s=a.duration,l=a.attributeName,p=a.to,f=a.easing,d=a.onAnimationStart,h=a.onAnimationEnd,v=a.steps,b=a.children,x=this.manager;if(this.unSubscribe=x.subscribe(this.handleStyleChange),typeof f=="function"||typeof b=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?Zu({},l,p):p,g=GS(Object.keys(I),s,f);x.start([d,i,rr(rr({},I),{},{transition:g}),s,h])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var p=F9(a,q9),f=X.Children.count(i),d=this.state.style;if(typeof i=="function")return i(d);if(!l||f===0||s<=0)return i;var h=function(b){var x=b.props,I=x.style,g=I===void 0?{}:I,S=x.className,_=X.cloneElement(b,rr(rr({},p),{},{style:rr(rr({},g),d),className:S}));return _};return f===1?h(X.Children.only(i)):j.createElement("div",null,X.Children.map(i,function(v){return h(v)}))}}]),n})(X.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Qe.oneOfType([Qe.object,Qe.string]),to:Qe.oneOfType([Qe.object,Qe.string]),attributeName:Qe.string,duration:Qe.number,begin:Qe.number,easing:Qe.oneOfType([Qe.string,Qe.func]),steps:Qe.arrayOf(Qe.shape({duration:Qe.number.isRequired,style:Qe.object.isRequired,easing:Qe.oneOfType([Qe.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Qe.func]),properties:Qe.arrayOf("string"),onAnimationEnd:Qe.func})),children:Qe.oneOfType([Qe.node,Qe.func]),isActive:Qe.bool,canBegin:Qe.bool,onAnimationEnd:Qe.func,shouldReAnimate:Qe.bool,onAnimationStart:Qe.func,onAnimationReStart:Qe.func};function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function pp(){return pp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pp.apply(this,arguments)}function nz(e,t){return iz(e)||oz(e,t)||az(e,t)||rz()}function rz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function az(e,t){if(e){if(typeof e=="string")return JS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return JS(e,t)}}function JS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function iz(e){if(Array.isArray(e))return e}function e3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function t3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?e3(Object(n),!0).forEach(function(r){uz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):e3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uz(e,t,n){return t=sz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sz(e){var t=lz(e,"string");return Ts(t)=="symbol"?t:t+""}function lz(e,t){if(Ts(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var n3=function(t,n,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,p=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,d;if(s>0&&i instanceof Array){for(var h=[0,0,0,0],v=0,b=4;v<b;v++)h[v]=i[v]>s?s:i[v];d="M".concat(t,",").concat(n+l*h[0]),h[0]>0&&(d+="A ".concat(h[0],",").concat(h[0],",0,0,").concat(f,",").concat(t+p*h[0],",").concat(n)),d+="L ".concat(t+r-p*h[1],",").concat(n),h[1]>0&&(d+="A ".concat(h[1],",").concat(h[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*h[1])),d+="L ".concat(t+r,",").concat(n+a-l*h[2]),h[2]>0&&(d+="A ".concat(h[2],",").concat(h[2],",0,0,").concat(f,`,
        `).concat(t+r-p*h[2],",").concat(n+a)),d+="L ".concat(t+p*h[3],",").concat(n+a),h[3]>0&&(d+="A ".concat(h[3],",").concat(h[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*h[3])),d+="Z"}else if(s>0&&i===+i&&i>0){var x=Math.min(s,i);d="M ".concat(t,",").concat(n+l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+p*x,",").concat(n,`
            L `).concat(t+r-p*x,",").concat(n,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*x,`
            L `).concat(t+r,",").concat(n+a-l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r-p*x,",").concat(n+a,`
            L `).concat(t+p*x,",").concat(n+a,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*x," Z")}else d="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return d},cz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,i=n.x,s=n.y,l=n.width,p=n.height;if(Math.abs(l)>0&&Math.abs(p)>0){var f=Math.min(i,i+l),d=Math.max(i,i+l),h=Math.min(s,s+p),v=Math.max(s,s+p);return r>=f&&r<=d&&a>=h&&a<=v}return!1},pz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},sb=function(t){var n=t3(t3({},pz),t),r=X.useRef(),a=X.useState(-1),i=nz(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var W=r.current.getTotalLength();W&&l(W)}catch{}},[]);var p=n.x,f=n.y,d=n.width,h=n.height,v=n.radius,b=n.className,x=n.animationEasing,I=n.animationDuration,g=n.animationBegin,S=n.isAnimationActive,_=n.isUpdateAnimationActive;if(p!==+p||f!==+f||d!==+d||h!==+h||d===0||h===0)return null;var A=je("recharts-rectangle",b);return _?j.createElement(Kn,{canBegin:s>0,from:{width:d,height:h,x:p,y:f},to:{width:d,height:h,x:p,y:f},duration:I,animationEasing:x,isActive:_},function(W){var w=W.width,O=W.height,E=W.x,P=W.y;return j.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:I,isActive:S,easing:x},j.createElement("path",pp({},_e(n,!0),{className:A,d:n3(E,P,w,O,v),ref:r})))}):j.createElement("path",pp({},_e(n,!0),{className:A,d:n3(p,f,d,h,v)}))},fz=["points","className","baseLinePoints","connectNulls"];function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}function dz(e,t){if(e==null)return{};var n=hz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function r3(e){return gz(e)||yz(e)||vz(e)||mz()}function mz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vz(e,t){if(e){if(typeof e=="string")return My(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return My(e,t)}}function yz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gz(e){if(Array.isArray(e))return My(e)}function My(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a3=function(t){return t&&t.x===+t.x&&t.y===+t.y},bz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){a3(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),a3(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},rs=function(t,n){var r=bz(t);n&&(r=[r.reduce(function(i,s){return[].concat(r3(i),r3(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,l,p){return"".concat(s).concat(p===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Iz=function(t,n,r){var a=rs(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(rs(n.reverse(),r).slice(1))},Bz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,i=t.connectNulls,s=dz(t,fz);if(!n||!n.length)return null;var l=je("recharts-polygon",r);if(a&&a.length){var p=s.stroke&&s.stroke!=="none",f=Iz(n,a,i);return j.createElement("g",{className:l},j.createElement("path",ai({},_e(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),p?j.createElement("path",ai({},_e(s,!0),{fill:"none",d:rs(n,i)})):null,p?j.createElement("path",ai({},_e(s,!0),{fill:"none",d:rs(a,i)})):null)}var d=rs(n,i);return j.createElement("path",ai({},_e(s,!0),{fill:d.slice(-1)==="Z"?s.fill:"none",className:l,d}))};function Cy(){return Cy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cy.apply(this,arguments)}var Js=function(t){var n=t.cx,r=t.cy,a=t.r,i=t.className,s=je("recharts-dot",i);return n===+n&&r===+r&&a===+a?j.createElement("circle",Cy({},_e(t,!1),Ec(t),{className:s,cx:n,cy:r,r:a})):null};function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}var xz=["x","y","top","left","width","height","className"];function ky(){return ky=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ky.apply(this,arguments)}function o3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o3(Object(n),!0).forEach(function(r){Pz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pz(e,t,n){return t=Sz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sz(e){var t=_z(e,"string");return Ns(t)=="symbol"?t:t+""}function _z(e,t){if(Ns(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Az(e,t){if(e==null)return{};var n=Oz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Wz=function(t,n,r,a,i,s){return"M".concat(t,",").concat(i,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},Mz=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.top,l=s===void 0?0:s,p=t.left,f=p===void 0?0:p,d=t.width,h=d===void 0?0:d,v=t.height,b=v===void 0?0:v,x=t.className,I=Az(t,xz),g=wz({x:r,y:i,top:l,left:f,width:h,height:b},I);return!le(r)||!le(i)||!le(h)||!le(b)||!le(l)||!le(f)?null:j.createElement("path",ky({},_e(g,!0),{className:je("recharts-cross",x),d:Wz(r,i,h,b,l,f)}))},Zm,i3;function Cz(){if(i3)return Zm;i3=1;var e=a0(),t=uO(),n=Ar();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return Zm=r,Zm}var kz=Cz();const Ez=Xe(kz);var Jm,u3;function Tz(){if(u3)return Jm;u3=1;var e=a0(),t=Ar(),n=sO();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return Jm=r,Jm}var Nz=Tz();const Rz=Xe(Nz);var jz=["cx","cy","angle","ticks","axisLine"],Hz=["ticks","tick","angle","tickFormatter","stroke"];function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){s0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l3(e,t){if(e==null)return{};var n=Dz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function $z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KO(r.key),r)}}function Lz(e,t,n){return t&&c3(e.prototype,t),n&&c3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qz(e,t,n){return t=fp(t),Fz(e,GO()?Reflect.construct(t,n||[],fp(e).constructor):t.apply(e,n))}function Fz(e,t){if(t&&(wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zz(e)}function zz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GO=function(){return!!e})()}function fp(e){return fp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fp(e)}function Uz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ey(e,t)}function Ey(e,t){return Ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ey(e,t)}function s0(e,t,n){return t=KO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KO(e){var t=Vz(e,"string");return wi(t)=="symbol"?t:t+""}function Vz(e,t){if(wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var l0=(function(e){function t(){return $z(this,t),qz(this,t,arguments)}return Uz(t,e),Lz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,l=i.cx,p=i.cy;return ot(l,p,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,p=Ez(l,function(d){return d.coordinate||0}),f=Rz(l,function(d){return d.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:p.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,p=r.axisLine,f=l3(r,jz),d=l.reduce(function(x,I){return[Math.min(x[0],I.coordinate),Math.max(x[1],I.coordinate)]},[1/0,-1/0]),h=ot(a,i,d[0],s),v=ot(a,i,d[1],s),b=ro(ro(ro({},_e(f,!1)),{},{fill:"none"},_e(p,!1)),{},{x1:h.x,y1:h.y,x2:v.x,y2:v.y});return j.createElement("line",as({className:"recharts-polar-radius-axis-line"},b))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.angle,p=a.tickFormatter,f=a.stroke,d=l3(a,Hz),h=this.getTickTextAnchor(),v=_e(d,!1),b=_e(s,!1),x=i.map(function(I,g){var S=r.getTickValueCoord(I),_=ro(ro(ro(ro({textAnchor:h,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},b),{},{index:g},S),{},{payload:I});return j.createElement(De,as({className:je("recharts-polar-radius-axis-tick",RO(s)),key:"tick-".concat(I.coordinate)},Ta(r.props,I,g)),t.renderTickItem(s,_,p?p(I.value,g):I.value))});return j.createElement(De,{className:"recharts-polar-radius-axis-ticks"},x)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:j.createElement(De,{className:je("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),Ft.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return j.isValidElement(r)?s=j.cloneElement(r,a):ke(r)?s=r(a):s=j.createElement(yo,as({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(X.PureComponent);s0(l0,"displayName","PolarRadiusAxis");s0(l0,"axisType","radiusAxis");s0(l0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function p3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p3(Object(n),!0).forEach(function(r){c0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,QO(r.key),r)}}function Kz(e,t,n){return t&&f3(e.prototype,t),n&&f3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yz(e,t,n){return t=dp(t),Qz(e,YO()?Reflect.construct(t,n||[],dp(e).constructor):t.apply(e,n))}function Qz(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xz(e)}function Xz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YO=function(){return!!e})()}function dp(e){return dp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dp(e)}function Zz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ty(e,t)}function Ty(e,t){return Ty=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ty(e,t)}function c0(e,t,n){return t=QO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QO(e){var t=Jz(e,"string");return Pi(t)=="symbol"?t:t+""}function Jz(e,t){if(Pi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var eU=Math.PI/180,d3=1e-5,p0=(function(e){function t(){return Gz(this,t),Yz(this,t,arguments)}return Zz(t,e),Kz(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,l=a.radius,p=a.orientation,f=a.tickSize,d=f||8,h=ot(i,s,l,r.coordinate),v=ot(i,s,l+(p==="inner"?-1:1)*d,r.coordinate);return{x1:h.x,y1:h.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*eU),s;return i>d3?s=a==="outer"?"start":"end":i<-d3?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,l=r.axisLine,p=r.axisLineType,f=ao(ao({},_e(this.props,!1)),{},{fill:"none"},_e(l,!1));if(p==="circle")return j.createElement(Js,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var d=this.props.ticks,h=d.map(function(v){return ot(a,i,s,v.coordinate)});return j.createElement(Bz,so({className:"recharts-polar-angle-axis-line"},f,{points:h}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.tickLine,p=a.tickFormatter,f=a.stroke,d=_e(this.props,!1),h=_e(s,!1),v=ao(ao({},d),{},{fill:"none"},_e(l,!1)),b=i.map(function(x,I){var g=r.getTickLineCoord(x),S=r.getTickTextAnchor(x),_=ao(ao(ao({textAnchor:S},d),{},{stroke:"none",fill:f},h),{},{index:I,payload:x,x:g.x2,y:g.y2});return j.createElement(De,so({className:je("recharts-polar-angle-axis-tick",RO(s)),key:"tick-".concat(x.coordinate)},Ta(r.props,x,I)),l&&j.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,g)),s&&t.renderTickItem(s,_,p?p(x.value,I):x.value))});return j.createElement(De,{className:"recharts-polar-angle-axis-ticks"},b)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:j.createElement(De,{className:je("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return j.isValidElement(r)?s=j.cloneElement(r,a):ke(r)?s=r(a):s=j.createElement(yo,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(X.PureComponent);c0(p0,"displayName","PolarAngleAxis");c0(p0,"axisType","angleAxis");c0(p0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var ev,h3;function tU(){if(h3)return ev;h3=1;var e=uA(),t=e(Object.getPrototypeOf,Object);return ev=t,ev}var tv,m3;function nU(){if(m3)return tv;m3=1;var e=Qr(),t=tU(),n=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,l=i.hasOwnProperty,p=s.call(Object);function f(d){if(!n(d)||e(d)!=r)return!1;var h=t(d);if(h===null)return!0;var v=l.call(h,"constructor")&&h.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==p}return tv=f,tv}var rU=nU();const aU=Xe(rU);var nv,v3;function oU(){if(v3)return nv;v3=1;var e=Qr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return nv=r,nv}var iU=oU();const uU=Xe(iU);function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function hp(){return hp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hp.apply(this,arguments)}function sU(e,t){return fU(e)||pU(e,t)||cU(e,t)||lU()}function lU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cU(e,t){if(e){if(typeof e=="string")return y3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y3(e,t)}}function y3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function fU(e){if(Array.isArray(e))return e}function g3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function b3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g3(Object(n),!0).forEach(function(r){dU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dU(e,t,n){return t=hU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hU(e){var t=mU(e,"string");return Rs(t)=="symbol"?t:t+""}function mU(e,t){if(Rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I3=function(t,n,r,a,i){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+i),l+="L ".concat(t+r-s/2-a,",").concat(n+i),l+="L ".concat(t,",").concat(n," Z"),l},vU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},yU=function(t){var n=b3(b3({},vU),t),r=X.useRef(),a=X.useState(-1),i=sU(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var A=r.current.getTotalLength();A&&l(A)}catch{}},[]);var p=n.x,f=n.y,d=n.upperWidth,h=n.lowerWidth,v=n.height,b=n.className,x=n.animationEasing,I=n.animationDuration,g=n.animationBegin,S=n.isUpdateAnimationActive;if(p!==+p||f!==+f||d!==+d||h!==+h||v!==+v||d===0&&h===0||v===0)return null;var _=je("recharts-trapezoid",b);return S?j.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:p,y:f},to:{upperWidth:d,lowerWidth:h,height:v,x:p,y:f},duration:I,animationEasing:x,isActive:S},function(A){var W=A.upperWidth,w=A.lowerWidth,O=A.height,E=A.x,P=A.y;return j.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:I,easing:x},j.createElement("path",hp({},_e(n,!0),{className:_,d:I3(E,P,W,w,O),ref:r})))}):j.createElement("g",null,j.createElement("path",hp({},_e(n,!0),{className:_,d:I3(p,f,d,h,v)})))},gU=["option","shapeType","propTransformer","activeClassName","isActive"];function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}function bU(e,t){if(e==null)return{};var n=IU(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function IU(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function B3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B3(Object(n),!0).forEach(function(r){BU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BU(e,t,n){return t=xU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xU(e){var t=wU(e,"string");return js(t)=="symbol"?t:t+""}function wU(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function PU(e,t){return mp(mp({},t),e)}function SU(e,t){return e==="symbols"}function x3(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return j.createElement(sb,n);case"trapezoid":return j.createElement(yU,n);case"sector":return j.createElement(DO,n);case"symbols":if(SU(t))return j.createElement(Kp,n);break;default:return null}}function _U(e){return X.isValidElement(e)?e.props:e}function vp(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?PU:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,l=e.isActive,p=bU(e,gU),f;if(X.isValidElement(t))f=X.cloneElement(t,mp(mp({},p),_U(t)));else if(ke(t))f=t(p);else if(aU(t)&&!uU(t)){var d=a(t,p);f=j.createElement(x3,{shapeType:n,elementProps:d})}else{var h=p;f=j.createElement(x3,{shapeType:n,elementProps:h})}return l?j.createElement(De,{className:s},f):f}function f0(e,t){return t!=null&&"trapezoids"in e.props}function d0(e,t){return t!=null&&"sectors"in e.props}function Hs(e,t){return t!=null&&"points"in e.props}function AU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,i=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&i}function OU(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function WU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function MU(e,t){var n;return f0(e,t)?n=AU:d0(e,t)?n=OU:Hs(e,t)&&(n=WU),n}function CU(e,t){var n;return f0(e,t)?n="trapezoids":d0(e,t)?n="sectors":Hs(e,t)&&(n="points"),n}function kU(e,t){if(f0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(d0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Hs(e,t)?t.payload:{}}function EU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=CU(n,t),i=kU(n,t),s=r.filter(function(p,f){var d=Na(i,p),h=n.props[a].filter(function(x){var I=MU(n,t);return I(x,t)}),v=n.props[a].indexOf(h[h.length-1]),b=f===v;return d&&b}),l=r.indexOf(s[s.length-1]);return l}var _c;function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function w3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w3(Object(n),!0).forEach(function(r){Fn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ZO(r.key),r)}}function NU(e,t,n){return t&&P3(e.prototype,t),n&&P3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function RU(e,t,n){return t=yp(t),jU(e,XO()?Reflect.construct(t,n||[],yp(e).constructor):t.apply(e,n))}function jU(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HU(e)}function HU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function XO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XO=function(){return!!e})()}function yp(e){return yp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},yp(e)}function DU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ny(e,t)}function Ny(e,t){return Ny=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ny(e,t)}function Fn(e,t,n){return t=ZO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZO(e){var t=$U(e,"string");return Si(t)=="symbol"?t:t+""}function $U(e,t){if(Si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return TU(this,t),r=RU(this,t,[n]),Fn(r,"pieRef",null),Fn(r,"sectorRefs",[]),Fn(r,"id",Ha("recharts-pie-")),Fn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),Fn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return DU(t,e),NU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,l=i.labelLine,p=i.dataKey,f=i.valueKey,d=_e(this.props,!1),h=_e(s,!1),v=_e(l,!1),b=s&&s.offsetRadius||20,x=r.map(function(I,g){var S=(I.startAngle+I.endAngle)/2,_=ot(I.cx,I.cy,I.outerRadius+b,S),A=rt(rt(rt(rt({},d),I),{},{stroke:"none"},h),{},{index:g,textAnchor:t.getTextAnchor(_.x,I.cx)},_),W=rt(rt(rt(rt({},d),I),{},{fill:"none",stroke:I.fill},v),{},{index:g,points:[ot(I.cx,I.cy,I.outerRadius,S),_]}),w=p;return Ee(p)&&Ee(f)?w="value":Ee(p)&&(w=f),j.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(g)},l&&t.renderLabelLineItem(l,W,"line"),t.renderLabelItem(s,A,lt(I,w)))});return j.createElement(De,{className:"recharts-pie-labels"},x)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,l=i.blendStroke,p=i.inactiveShape;return r.map(function(f,d){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var h=a.isActiveIndex(d),v=p&&a.hasActiveIndex()?p:null,b=h?s:v,x=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return j.createElement(De,oi({ref:function(g){g&&!a.sectorRefs.includes(g)&&a.sectorRefs.push(g)},tabIndex:-1,className:"recharts-pie-sector"},Ta(a.props,f,d),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(d)}),j.createElement(vp,oi({option:b,isActive:h,shapeType:"sector"},x)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,d=a.animationId,h=this.state,v=h.prevSectors,b=h.prevIsAnimationActive;return j.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(d,"-").concat(b),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(x){var I=x.t,g=[],S=i&&i[0],_=S.startAngle;return i.forEach(function(A,W){var w=v&&v[W],O=W>0?On(A,"paddingAngle",0):0;if(w){var E=ht(w.endAngle-w.startAngle,A.endAngle-A.startAngle),P=rt(rt({},A),{},{startAngle:_+O,endAngle:_+E(I)+O});g.push(P),_=P.endAngle}else{var M=A.endAngle,R=A.startAngle,H=ht(0,M-R),T=H(I),L=rt(rt({},A),{},{startAngle:_+O,endAngle:_+T+O});g.push(L),_=L.endAngle}}),j.createElement(De,null,r.renderSectorsStatically(g))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,l=a.className,p=a.label,f=a.cx,d=a.cy,h=a.innerRadius,v=a.outerRadius,b=a.isAnimationActive,x=this.state.isAnimationFinished;if(i||!s||!s.length||!le(f)||!le(d)||!le(h)||!le(v))return null;var I=je("recharts-pie",l);return j.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),p&&this.renderLabels(s),Ft.renderCallByParent(this.props,null,!1),(!b||x)&&sr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(j.isValidElement(r))return j.cloneElement(r,a);if(ke(r))return r(a);var s=je("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return j.createElement(ka,oi({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(j.isValidElement(r))return j.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),j.isValidElement(s)))return s;var l=je("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return j.createElement(yo,oi({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(X.PureComponent);_c=ea;Fn(ea,"displayName","Pie");Fn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});Fn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});Fn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=_e(e,!1),a=sn(n,Ks);return t&&t.length?t.map(function(i,s){return rt(rt(rt({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rt(rt({},r),i.props)}):[]});Fn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,i=t.height,s=NO(a,i),l=r+on(e.cx,a,a/2),p=n+on(e.cy,i,i/2),f=on(e.innerRadius,s,0),d=on(e.outerRadius,s,s*.8),h=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:l,cy:p,innerRadius:f,outerRadius:d,maxRadius:h}});Fn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=_c.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,l=r.endAngle,p=r.paddingAngle,f=r.dataKey,d=r.nameKey,h=r.valueKey,v=r.tooltipType,b=Math.abs(r.minAngle),x=_c.parseCoordinateOfPie(r,n),I=_c.parseDeltaAngle(s,l),g=Math.abs(I),S=f;Ee(f)&&Ee(h)?(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ee(f)&&(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=h);var _=a.filter(function(P){return lt(P,S,0)!==0}).length,A=(g>=360?_:_-1)*p,W=g-_*b-A,w=a.reduce(function(P,M){var R=lt(M,S,0);return P+(le(R)?R:0)},0),O;if(w>0){var E;O=a.map(function(P,M){var R=lt(P,S,0),H=lt(P,d,M),T=(le(R)?R:0)/w,L;M?L=E.endAngle+an(I)*p*(R!==0?1:0):L=s;var G=L+an(I)*((R!==0?b:0)+T*W),U=(L+G)/2,K=(x.innerRadius+x.outerRadius)/2,z=[{name:H,value:R,payload:P,dataKey:S,type:v}],D=ot(x.cx,x.cy,K,U);return E=rt(rt(rt({percent:T,cornerRadius:i,name:H,tooltipPayload:z,midAngle:U,middleRadius:K,tooltipPosition:D},P),x),{},{value:lt(P,S),startAngle:L,endAngle:G,payload:P,paddingAngle:an(I)*p}),E})}return rt(rt({},x),{},{sectors:O,data:a})});var rv,S3;function LU(){if(S3)return rv;S3=1;var e=Math.ceil,t=Math.max;function n(r,a,i,s){for(var l=-1,p=t(e((a-r)/(i||1)),0),f=Array(p);p--;)f[s?p:++l]=r,r+=i;return f}return rv=n,rv}var av,_3;function JO(){if(_3)return av;_3=1;var e=wA(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var i=a<0?-1:1;return i*n}return a===a?a:0}return av=r,av}var ov,A3;function qU(){if(A3)return ov;A3=1;var e=LU(),t=Xp(),n=JO();function r(a){return function(i,s,l){return l&&typeof l!="number"&&t(i,s,l)&&(s=l=void 0),i=n(i),s===void 0?(s=i,i=0):s=n(s),l=l===void 0?i<s?1:-1:n(l),e(i,s,l,a)}}return ov=r,ov}var iv,O3;function FU(){if(O3)return iv;O3=1;var e=qU(),t=e();return iv=t,iv}var zU=FU();const gp=Xe(zU);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function W3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function M3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W3(Object(n),!0).forEach(function(r){eW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eW(e,t,n){return t=UU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function UU(e){var t=VU(e,"string");return Ds(t)=="symbol"?t:t+""}function VU(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var GU=["Webkit","Moz","O","ms"],KU=function(t,n){var r=t.replace(/(\w)/,function(i){return i.toUpperCase()}),a=GU.reduce(function(i,s){return M3(M3({},i),{},eW({},s+r,n))},{});return a[t]=n,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function bp(){return bp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bp.apply(this,arguments)}function C3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function uv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C3(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nW(r.key),r)}}function QU(e,t,n){return t&&k3(e.prototype,t),n&&k3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function XU(e,t,n){return t=Ip(t),ZU(e,tW()?Reflect.construct(t,n||[],Ip(e).constructor):t.apply(e,n))}function ZU(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JU(e)}function JU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tW=function(){return!!e})()}function Ip(e){return Ip=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ip(e)}function eV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ry(e,t)}function Ry(e,t){return Ry=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ry(e,t)}function Pn(e,t,n){return t=nW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nW(e){var t=tV(e,"string");return _i(t)=="symbol"?t:t+""}function tV(e,t){if(_i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nV=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,i=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var p=n.length,f=es().domain(gp(0,p)).range([i,i+s-l]),d=f.domain().map(function(h){return f(h)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:d}},E3=function(t){return t.changedTouches&&!!t.changedTouches.length},Ai=(function(e){function t(n){var r;return YU(this,t),r=XU(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:i,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var i=E3(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return eV(t,e),QU(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,l=this.props,p=l.gap,f=l.data,d=f.length-1,h=Math.min(a,i),v=Math.max(a,i),b=t.getIndexInRange(s,h),x=t.getIndexInRange(s,v);return{startIndex:b-b%p,endIndex:x===d?d:x-x%p}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,l=a.dataKey,p=lt(i[r],l,r);return ke(s)?s(p,r):p}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,l=a.endX,p=this.props,f=p.x,d=p.width,h=p.travellerWidth,v=p.startIndex,b=p.endIndex,x=p.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+d-h-l,f+d-h-s):I<0&&(I=Math.max(I,f-s,f-l));var g=this.getIndex({startX:s+I,endX:l+I});(g.startIndex!==v||g.endIndex!==b)&&x&&x(g),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=E3(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,p=a.startX,f=this.state[s],d=this.props,h=d.x,v=d.width,b=d.travellerWidth,x=d.onChange,I=d.gap,g=d.data,S={startX:this.state.startX,endX:this.state.endX},_=r.pageX-i;_>0?_=Math.min(_,h+v-b-f):_<0&&(_=Math.max(_,h-f)),S[s]=f+_;var A=this.getIndex(S),W=A.startIndex,w=A.endIndex,O=function(){var P=g.length-1;return s==="startX"&&(l>p?W%I===0:w%I===0)||l<p&&w===P||s==="endX"&&(l>p?w%I===0:W%I===0)||l>p&&w===P};this.setState(Pn(Pn({},s,f+_),"brushMoveStartX",r.pageX),function(){x&&O()&&x(A)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,l=s.scaleValues,p=s.startX,f=s.endX,d=this.state[a],h=l.indexOf(d);if(h!==-1){var v=h+r;if(!(v===-1||v>=l.length)){var b=l[v];a==="startX"&&b>=f||a==="endX"&&b<=p||this.setState(Pn({},a,b),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.fill,f=r.stroke;return j.createElement("rect",{stroke:f,fill:p,x:a,y:i,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.data,f=r.children,d=r.padding,h=X.Children.only(f);return h?j.cloneElement(h,{x:a,y:i,width:s,height:l,margin:d,compact:!0,data:p}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,l=this,p=this.props,f=p.y,d=p.travellerWidth,h=p.height,v=p.traveller,b=p.ariaLabel,x=p.data,I=p.startIndex,g=p.endIndex,S=Math.max(r,this.props.x),_=uv(uv({},_e(this.props,!1)),{},{x:S,y:f,width:d,height:h}),A=b||"Min value: ".concat((i=x[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=x[g])===null||s===void 0?void 0:s.name);return j.createElement(De,{tabIndex:0,role:"slider","aria-label":A,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,_))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,l=i.height,p=i.stroke,f=i.travellerWidth,d=Math.min(r,a)+f,h=Math.max(Math.abs(a-r)-f,0);return j.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:p,fillOpacity:.2,x:d,y:s,width:h,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,l=r.height,p=r.travellerWidth,f=r.stroke,d=this.state,h=d.startX,v=d.endX,b=5,x={pointerEvents:"none",fill:f};return j.createElement(De,{className:"recharts-brush-texts"},j.createElement(yo,bp({textAnchor:"end",verticalAnchor:"middle",x:Math.min(h,v)-b,y:s+l/2},x),this.getTextOfTick(a)),j.createElement(yo,bp({textAnchor:"start",verticalAnchor:"middle",x:Math.max(h,v)+p+b,y:s+l/2},x),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,l=r.x,p=r.y,f=r.width,d=r.height,h=r.alwaysShowText,v=this.state,b=v.startX,x=v.endX,I=v.isTextActive,g=v.isSlideMoving,S=v.isTravellerMoving,_=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(p)||!le(f)||!le(d)||f<=0||d<=0)return null;var A=je("recharts-brush",i),W=j.Children.count(s)===1,w=KU("userSelect","none");return j.createElement(De,{className:A,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),W&&this.renderPanorama(),this.renderSlide(b,x),this.renderTravellerLayer(b,"startX"),this.renderTravellerLayer(x,"endX"),(I||g||S||_||h)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,l=r.height,p=r.stroke,f=Math.floor(i+l/2)-1;return j.createElement(j.Fragment,null,j.createElement("rect",{x:a,y:i,width:s,height:l,fill:p,stroke:"none"}),j.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),j.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return j.isValidElement(r)?i=j.cloneElement(r,a):ke(r)?i=r(a):i=t.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,l=r.x,p=r.travellerWidth,f=r.updateId,d=r.startIndex,h=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return uv({prevData:i,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s},i&&i.length?nV({data:i,width:s,x:l,travellerWidth:p,startIndex:d,endIndex:h}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||p!==a.prevTravellerWidth)){a.scale.range([l,l+s-p]);var v=a.scale.domain().map(function(b){return a.scale(b)});return{prevData:i,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,l=i-1;l-s>1;){var p=Math.floor((s+l)/2);r[p]>a?l=p:s=p}return a>=r[l]?l:s}}])})(X.PureComponent);Pn(Ai,"displayName","Brush");Pn(Ai,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var sv,T3;function rV(){if(T3)return sv;T3=1;var e=Eg();function t(n,r){var a;return e(n,function(i,s,l){return a=r(i,s,l),!a}),!!a}return sv=t,sv}var lv,N3;function aV(){if(N3)return lv;N3=1;var e=eA(),t=Ar(),n=rV(),r=gn(),a=Xp();function i(s,l,p){var f=r(s)?e:n;return p&&a(s,l,p)&&(l=void 0),f(s,t(l,3))}return lv=i,lv}var oV=aV();const iV=Xe(oV);var xr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},cv,R3;function uV(){if(R3)return cv;R3=1;var e=gA();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return cv=t,cv}var pv,j3;function sV(){if(j3)return pv;j3=1;var e=uV(),t=vA(),n=Ar();function r(a,i){var s={};return i=n(i,3),t(a,function(l,p,f){e(s,p,i(l,p,f))}),s}return pv=r,pv}var lV=sV();const cV=Xe(lV);var fv,H3;function pV(){if(H3)return fv;H3=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return fv=e,fv}var dv,D3;function fV(){if(D3)return dv;D3=1;var e=Eg();function t(n,r){var a=!0;return e(n,function(i,s,l){return a=!!r(i,s,l),a}),a}return dv=t,dv}var hv,$3;function dV(){if($3)return hv;$3=1;var e=pV(),t=fV(),n=Ar(),r=gn(),a=Xp();function i(s,l,p){var f=r(s)?e:t;return p&&a(s,l,p)&&(l=void 0),f(s,n(l,3))}return hv=i,hv}var hV=dV();const rW=Xe(hV);var mV=["x","y"];function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function jy(){return jy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jy.apply(this,arguments)}function L3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Yu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L3(Object(n),!0).forEach(function(r){vV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vV(e,t,n){return t=yV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yV(e){var t=gV(e,"string");return $s(t)=="symbol"?t:t+""}function gV(e,t){if($s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bV(e,t){if(e==null)return{};var n=IV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function IV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function BV(e,t){var n=e.x,r=e.y,a=bV(e,mV),i="".concat(n),s=parseInt(i,10),l="".concat(r),p=parseInt(l,10),f="".concat(t.height||a.height),d=parseInt(f,10),h="".concat(t.width||a.width),v=parseInt(h,10);return Yu(Yu(Yu(Yu(Yu({},t),a),s?{x:s}:{}),p?{y:p}:{}),{},{height:d,width:v,name:t.name,radius:t.radius})}function q3(e){return j.createElement(vp,jy({shapeType:"rectangle",propTransformer:BV,activeClassName:"recharts-active-bar"},e))}var xV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var i=typeof r=="number";return i?t(r,a):(i||bo(),n)}},wV=["value","background"],aW;function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function PV(e,t){if(e==null)return{};var n=SV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function SV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Bp(){return Bp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bp.apply(this,arguments)}function F3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F3(Object(n),!0).forEach(function(r){Oa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,iW(r.key),r)}}function AV(e,t,n){return t&&z3(e.prototype,t),n&&z3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function OV(e,t,n){return t=xp(t),WV(e,oW()?Reflect.construct(t,n||[],xp(e).constructor):t.apply(e,n))}function WV(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return MV(e)}function MV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(oW=function(){return!!e})()}function xp(e){return xp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xp(e)}function CV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hy(e,t)}function Hy(e,t){return Hy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Hy(e,t)}function Oa(e,t,n){return t=iW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iW(e){var t=kV(e,"string");return Oi(t)=="symbol"?t:t+""}function kV(e,t){if(Oi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Pr=(function(e){function t(){var n;_V(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=OV(this,t,[].concat(a)),Oa(n,"state",{isAnimationFinished:!1}),Oa(n,"id",Ha("recharts-bar-")),Oa(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),Oa(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return CV(t,e),AV(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.dataKey,p=i.activeIndex,f=i.activeBar,d=_e(this.props,!1);return r&&r.map(function(h,v){var b=v===p,x=b?f:s,I=Wt(Wt(Wt({},d),h),{},{isActive:b,option:x,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return j.createElement(De,Bp({className:"recharts-bar-rectangle"},Ta(a.props,h,v),{key:"rectangle-".concat(h==null?void 0:h.x,"-").concat(h==null?void 0:h.y,"-").concat(h==null?void 0:h.value,"-").concat(v)}),j.createElement(q3,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,l=a.isAnimationActive,p=a.animationBegin,f=a.animationDuration,d=a.animationEasing,h=a.animationId,v=this.state.prevData;return j.createElement(Kn,{begin:p,duration:f,isActive:l,easing:d,from:{t:0},to:{t:1},key:"bar-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(b){var x=b.t,I=i.map(function(g,S){var _=v&&v[S];if(_){var A=ht(_.x,g.x),W=ht(_.y,g.y),w=ht(_.width,g.width),O=ht(_.height,g.height);return Wt(Wt({},g),{},{x:A(x),y:W(x),width:w(x),height:O(x)})}if(s==="horizontal"){var E=ht(0,g.height),P=E(x);return Wt(Wt({},g),{},{y:g.y+g.height-P,height:P})}var M=ht(0,g.width),R=M(x);return Wt(Wt({},g),{},{width:R})});return j.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,l=a.activeIndex,p=_e(this.props.background,!1);return i.map(function(f,d){f.value;var h=f.background,v=PV(f,wV);if(!h)return null;var b=Wt(Wt(Wt(Wt(Wt({},v),{},{fill:"#eee"},h),p),Ta(r.props,f,d)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:d,className:"recharts-bar-background-rectangle"});return j.createElement(q3,Bp({key:"background-bar-".concat(d),option:r.props.background,isActive:d===l},b))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,l=i.xAxis,p=i.yAxis,f=i.layout,d=i.children,h=sn(d,Zi);if(!h)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,b=function(g,S){var _=Array.isArray(g.value)?g.value[1]:g.value;return{x:g.x,y:g.y,value:_,errorVal:lt(g,S)}},x={clipPath:r?"url(#clipPath-".concat(a,")"):null};return j.createElement(De,x,h.map(function(I){return j.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,offset:v,dataPointFormatter:b})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,l=r.xAxis,p=r.yAxis,f=r.left,d=r.top,h=r.width,v=r.height,b=r.isAnimationActive,x=r.background,I=r.id;if(a||!i||!i.length)return null;var g=this.state.isAnimationFinished,S=je("recharts-bar",s),_=l&&l.allowDataOverflow,A=p&&p.allowDataOverflow,W=_||A,w=Ee(I)?this.id:I;return j.createElement(De,{className:S},_||A?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(w)},j.createElement("rect",{x:_?f:f-h/2,y:A?d:d-v/2,width:_?h:h*2,height:A?v:v*2}))):null,j.createElement(De,{className:"recharts-bar-rectangles",clipPath:W?"url(#clipPath-".concat(w,")"):null},x?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(W,w),(!b||g)&&sr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(X.PureComponent);aW=Pr;Oa(Pr,"displayName","Bar");Oa(Pr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Oa(Pr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,l=e.xAxisTicks,p=e.yAxisTicks,f=e.stackedData,d=e.dataStartIndex,h=e.displayedData,v=e.offset,b=rq(r,n);if(!b)return null;var x=t.layout,I=n.type.defaultProps,g=I!==void 0?Wt(Wt({},I),n.props):n.props,S=g.dataKey,_=g.children,A=g.minPointSize,W=x==="horizontal"?s:i,w=f?W.scale.domain():null,O=cq({numericAxis:W}),E=sn(_,Ks),P=h.map(function(M,R){var H,T,L,G,U,K;f?H=aq(f[d+R],w):(H=lt(M,S),Array.isArray(H)||(H=[O,H]));var z=xV(A,aW.defaultProps.minPointSize)(H[1],R);if(x==="horizontal"){var D,Y=[s.scale(H[0]),s.scale(H[1])],Q=Y[0],N=Y[1];T=gS({axis:i,ticks:l,bandSize:a,offset:b.offset,entry:M,index:R}),L=(D=N??Q)!==null&&D!==void 0?D:void 0,G=b.size;var q=Q-N;if(U=Number.isNaN(q)?0:q,K={x:T,y:s.y,width:G,height:s.height},Math.abs(z)>0&&Math.abs(U)<Math.abs(z)){var J=an(U||z)*(Math.abs(z)-Math.abs(U));L-=J,U+=J}}else{var ue=[i.scale(H[0]),i.scale(H[1])],he=ue[0],ye=ue[1];if(T=he,L=gS({axis:s,ticks:p,bandSize:a,offset:b.offset,entry:M,index:R}),G=ye-he,U=b.size,K={x:i.x,y:L,width:i.width,height:U},Math.abs(z)>0&&Math.abs(G)<Math.abs(z)){var ge=an(G||z)*(Math.abs(z)-Math.abs(G));G+=ge}}return Wt(Wt(Wt({},M),{},{x:T,y:L,width:G,height:U,value:f?H:H[1],payload:M,background:K},E&&E[R]&&E[R].props),{},{tooltipPayload:[EO(n,M)],tooltipPosition:{x:T+G/2,y:L+U/2}})});return Wt({data:P,layout:x},v)});function Ls(e){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ls(e)}function EV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,uW(r.key),r)}}function TV(e,t,n){return t&&U3(e.prototype,t),n&&U3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function V3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V3(Object(n),!0).forEach(function(r){h0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h0(e,t,n){return t=uW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uW(e){var t=NV(e,"string");return Ls(t)=="symbol"?t:t+""}function NV(e,t){if(Ls(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lb=function(t,n,r,a,i){var s=t.width,l=t.height,p=t.layout,f=t.children,d=Object.keys(n),h={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Pr);return d.reduce(function(b,x){var I=n[x],g=I.orientation,S=I.domain,_=I.padding,A=_===void 0?{}:_,W=I.mirror,w=I.reversed,O="".concat(g).concat(W?"Mirror":""),E,P,M,R,H;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var T=S[1]-S[0],L=1/0,G=I.categoricalDomain.sort();if(G.forEach(function(ue,he){he>0&&(L=Math.min((ue||0)-(G[he-1]||0),L))}),Number.isFinite(L)){var U=L/T,K=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(E=U*K/2),I.padding==="no-gap"){var z=on(t.barCategoryGap,U*K),D=U*K/2;E=D-z-(D-z)/K*z}}}a==="xAxis"?P=[r.left+(A.left||0)+(E||0),r.left+r.width-(A.right||0)-(E||0)]:a==="yAxis"?P=p==="horizontal"?[r.top+r.height-(A.bottom||0),r.top+(A.top||0)]:[r.top+(A.top||0)+(E||0),r.top+r.height-(A.bottom||0)-(E||0)]:P=I.range,w&&(P=[P[1],P[0]]);var Y=WO(I,i,v),Q=Y.scale,N=Y.realScaleType;Q.domain(S).range(P),MO(Q);var q=CO(Q,ar(ar({},I),{},{realScaleType:N}));a==="xAxis"?(H=g==="top"&&!W||g==="bottom"&&W,M=r.left,R=h[O]-H*I.height):a==="yAxis"&&(H=g==="left"&&!W||g==="right"&&W,M=h[O]-H*I.width,R=r.top);var J=ar(ar(ar({},I),q),{},{realScaleType:N,x:M,y:R,scale:Q,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return J.bandSize=ap(J,q),!I.hide&&a==="xAxis"?h[O]+=(H?-1:1)*J.height:I.hide||(h[O]+=(H?-1:1)*J.width),ar(ar({},b),{},h0({},x,J))},{})},sW=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},RV=function(t){var n=t.x1,r=t.y1,a=t.x2,i=t.y2;return sW({x:n,y:r},{x:a,y:i})},lW=(function(){function e(t){EV(this,e),this.scale=t}return TV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(n!==void 0){if(i)switch(i){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var p=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+p}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?n>=a&&n<=i:n>=i&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();h0(lW,"EPS",1e-4);var cb=function(t){var n=Object.keys(t).reduce(function(r,a){return ar(ar({},r),{},h0({},a,lW.create(t[a])))},{});return ar(ar({},n),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,l=i.position;return cV(a,function(p,f){return n[f].apply(p,{bandAware:s,position:l})})},isInRange:function(a){return rW(a,function(i,s){return n[s].isInRange(i)})}})};function jV(e){return(e%180+180)%180}var HV=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=jV(a),s=i*Math.PI/180,l=Math.atan(r/n),p=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(p)},mv,G3;function DV(){if(G3)return mv;G3=1;var e=Ar(),t=Gs(),n=Yp();function r(a){return function(i,s,l){var p=Object(i);if(!t(i)){var f=e(s,3);i=n(i),s=function(h){return f(p[h],h,p)}}var d=a(i,s,l);return d>-1?p[f?i[d]:d]:void 0}}return mv=r,mv}var vv,K3;function $V(){if(K3)return vv;K3=1;var e=JO();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return vv=t,vv}var yv,Y3;function LV(){if(Y3)return yv;Y3=1;var e=pA(),t=Ar(),n=$V(),r=Math.max;function a(i,s,l){var p=i==null?0:i.length;if(!p)return-1;var f=l==null?0:n(l);return f<0&&(f=r(p+f,0)),e(i,t(s,3),f)}return yv=a,yv}var gv,Q3;function qV(){if(Q3)return gv;Q3=1;var e=DV(),t=LV(),n=e(t);return gv=n,gv}var FV=qV();const zV=Xe(FV);var UV=__();const VV=Xe(UV);var GV=VV(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),pb=X.createContext(void 0),fb=X.createContext(void 0),cW=X.createContext(void 0),pW=X.createContext({}),fW=X.createContext(void 0),dW=X.createContext(0),hW=X.createContext(0),X3=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,i=n.offset,s=t.clipPathId,l=t.children,p=t.width,f=t.height,d=GV(i);return j.createElement(pb.Provider,{value:r},j.createElement(fb.Provider,{value:a},j.createElement(pW.Provider,{value:i},j.createElement(cW.Provider,{value:d},j.createElement(fW.Provider,{value:s},j.createElement(dW.Provider,{value:f},j.createElement(hW.Provider,{value:p},l)))))))},KV=function(){return X.useContext(fW)},mW=function(t){var n=X.useContext(pb);n==null&&bo();var r=n[t];return r==null&&bo(),r},YV=function(){var t=X.useContext(pb);return _a(t)},QV=function(){var t=X.useContext(fb),n=zV(t,function(r){return rW(r.domain,Number.isFinite)});return n||_a(t)},vW=function(t){var n=X.useContext(fb);n==null&&bo();var r=n[t];return r==null&&bo(),r},XV=function(){var t=X.useContext(cW);return t},ZV=function(){return X.useContext(pW)},db=function(){return X.useContext(hW)},hb=function(){return X.useContext(dW)};function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function JV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function eG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,gW(r.key),r)}}function tG(e,t,n){return t&&eG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function nG(e,t,n){return t=wp(t),rG(e,yW()?Reflect.construct(t,n||[],wp(e).constructor):t.apply(e,n))}function rG(e,t){if(t&&(Wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aG(e)}function aG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(yW=function(){return!!e})()}function wp(e){return wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},wp(e)}function oG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Dy(e,t)}function Dy(e,t){return Dy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dy(e,t)}function Z3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function J3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z3(Object(n),!0).forEach(function(r){mb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mb(e,t,n){return t=gW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gW(e){var t=iG(e,"string");return Wi(t)=="symbol"?t:t+""}function iG(e,t){if(Wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function uG(e,t){return pG(e)||cG(e,t)||lG(e,t)||sG()}function sG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lG(e,t){if(e){if(typeof e=="string")return e4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e4(e,t)}}function e4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function pG(e){if(Array.isArray(e))return e}function $y(){return $y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$y.apply(this,arguments)}var fG=function(t,n){var r;return j.isValidElement(t)?r=j.cloneElement(t,n):ke(t)?r=t(n):r=j.createElement("line",$y({},n,{className:"recharts-reference-line-line"})),r},dG=function(t,n,r,a,i,s,l,p,f){var d=i.x,h=i.y,v=i.width,b=i.height;if(r){var x=f.y,I=t.y.apply(x,{position:s});if(xr(f,"discard")&&!t.y.isInRange(I))return null;var g=[{x:d+v,y:I},{x:d,y:I}];return p==="left"?g.reverse():g}if(n){var S=f.x,_=t.x.apply(S,{position:s});if(xr(f,"discard")&&!t.x.isInRange(_))return null;var A=[{x:_,y:h+b},{x:_,y:h}];return l==="top"?A.reverse():A}if(a){var W=f.segment,w=W.map(function(O){return t.apply(O,{position:s})});return xr(f,"discard")&&iV(w,function(O){return!t.isInRange(O)})?null:w}return null};function hG(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,l=e.className,p=e.alwaysShow,f=KV(),d=mW(a),h=vW(i),v=XV();if(!f||!v)return null;ur(p===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var b=cb({x:d.scale,y:h.scale}),x=Rt(t),I=Rt(n),g=r&&r.length===2,S=dG(b,x,I,g,v,e.position,d.orientation,h.orientation,e);if(!S)return null;var _=uG(S,2),A=_[0],W=A.x,w=A.y,O=_[1],E=O.x,P=O.y,M=xr(e,"hidden")?"url(#".concat(f,")"):void 0,R=J3(J3({clipPath:M},_e(e,!0)),{},{x1:W,y1:w,x2:E,y2:P});return j.createElement(De,{className:je("recharts-reference-line",l)},fG(s,R),Ft.renderCallByParent(e,RV({x1:W,y1:w,x2:E,y2:P})))}var vb=(function(e){function t(){return JV(this,t),nG(this,t,arguments)}return oG(t,e),tG(t,[{key:"render",value:function(){return j.createElement(hG,this.props)}}])})(j.Component);mb(vb,"displayName","ReferenceLine");mb(vb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function Ly(){return Ly=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ly.apply(this,arguments)}function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function t4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function n4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?t4(Object(n),!0).forEach(function(r){m0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,IW(r.key),r)}}function yG(e,t,n){return t&&vG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gG(e,t,n){return t=Pp(t),bG(e,bW()?Reflect.construct(t,n||[],Pp(e).constructor):t.apply(e,n))}function bG(e,t){if(t&&(Mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return IG(e)}function IG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bW=function(){return!!e})()}function Pp(e){return Pp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pp(e)}function BG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qy(e,t)}function qy(e,t){return qy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},qy(e,t)}function m0(e,t,n){return t=IW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IW(e){var t=xG(e,"string");return Mi(t)=="symbol"?t:t+""}function xG(e,t){if(Mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var wG=function(t){var n=t.x,r=t.y,a=t.xAxis,i=t.yAxis,s=cb({x:a.scale,y:i.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return xr(t,"discard")&&!s.isInRange(l)?null:l},v0=(function(e){function t(){return mG(this,t),gG(this,t,arguments)}return BG(t,e),yG(t,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,l=r.alwaysShow,p=r.clipPathId,f=Rt(a),d=Rt(i);if(ur(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!d)return null;var h=wG(this.props);if(!h)return null;var v=h.x,b=h.y,x=this.props,I=x.shape,g=x.className,S=xr(this.props,"hidden")?"url(#".concat(p,")"):void 0,_=n4(n4({clipPath:S},_e(this.props,!0)),{},{cx:v,cy:b});return j.createElement(De,{className:je("recharts-reference-dot",g)},t.renderDot(I,_),Ft.renderCallByParent(this.props,{x:v-s,y:b-s,width:2*s,height:2*s}))}}])})(j.Component);m0(v0,"displayName","ReferenceDot");m0(v0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});m0(v0,"renderDot",function(e,t){var n;return j.isValidElement(e)?n=j.cloneElement(e,t):ke(e)?n=e(t):n=j.createElement(Js,Ly({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function Fy(){return Fy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fy.apply(this,arguments)}function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function r4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function a4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?r4(Object(n),!0).forEach(function(r){y0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function SG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,xW(r.key),r)}}function _G(e,t,n){return t&&SG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function AG(e,t,n){return t=Sp(t),OG(e,BW()?Reflect.construct(t,n||[],Sp(e).constructor):t.apply(e,n))}function OG(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WG(e)}function WG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function BW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(BW=function(){return!!e})()}function Sp(e){return Sp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sp(e)}function MG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zy(e,t)}function zy(e,t){return zy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},zy(e,t)}function y0(e,t,n){return t=xW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xW(e){var t=CG(e,"string");return Ci(t)=="symbol"?t:t+""}function CG(e,t){if(Ci(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var kG=function(t,n,r,a,i){var s=i.x1,l=i.x2,p=i.y1,f=i.y2,d=i.xAxis,h=i.yAxis;if(!d||!h)return null;var v=cb({x:d.scale,y:h.scale}),b={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(p,{position:"start"}):v.y.rangeMin},x={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return xr(i,"discard")&&(!v.isInRange(b)||!v.isInRange(x))?null:sW(b,x)},g0=(function(e){function t(){return PG(this,t),AG(this,t,arguments)}return MG(t,e),_G(t,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,l=r.y2,p=r.className,f=r.alwaysShow,d=r.clipPathId;ur(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var h=Rt(a),v=Rt(i),b=Rt(s),x=Rt(l),I=this.props.shape;if(!h&&!v&&!b&&!x&&!I)return null;var g=kG(h,v,b,x,this.props);if(!g&&!I)return null;var S=xr(this.props,"hidden")?"url(#".concat(d,")"):void 0;return j.createElement(De,{className:je("recharts-reference-area",p)},t.renderRect(I,a4(a4({clipPath:S},_e(this.props,!0)),g)),Ft.renderCallByParent(this.props,g))}}])})(j.Component);y0(g0,"displayName","ReferenceArea");y0(g0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});y0(g0,"renderRect",function(e,t){var n;return j.isValidElement(e)?n=j.cloneElement(e,t):ke(e)?n=e(t):n=j.createElement(sb,Fy({},t,{className:"recharts-reference-area-rect"})),n});function wW(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function EG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return HV(r,n)}function TG(e,t,n){var r=n==="width",a=e.x,i=e.y,s=e.width,l=e.height;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function _p(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function NG(e,t){return wW(e,t+1)}function RG(e,t,n,r,a){for(var i=(r||[]).slice(),s=t.start,l=t.end,p=0,f=1,d=s,h=function(){var x=r==null?void 0:r[p];if(x===void 0)return{v:wW(r,f)};var I=p,g,S=function(){return g===void 0&&(g=n(x,I)),g},_=x.coordinate,A=p===0||_p(e,_,S,d,l);A||(p=0,d=s,f+=1),A&&(d=_+e*(S()/2+a),p+=f)},v;f<=i.length;)if(v=h(),v)return v.v;return[]}function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function o4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o4(Object(n),!0).forEach(function(r){jG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jG(e,t,n){return t=HG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HG(e){var t=DG(e,"string");return qs(t)=="symbol"?t:t+""}function DG(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $G(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,l=t.start,p=t.end,f=function(v){var b=i[v],x,I=function(){return x===void 0&&(x=n(b,v)),x};if(v===s-1){var g=e*(b.coordinate+e*I()/2-p);i[v]=b=Jt(Jt({},b),{},{tickCoord:g>0?b.coordinate-g*e:b.coordinate})}else i[v]=b=Jt(Jt({},b),{},{tickCoord:b.coordinate});var S=_p(e,b.tickCoord,I,l,p);S&&(p=b.tickCoord-e*(I()/2+a),i[v]=Jt(Jt({},b),{},{isShow:!0}))},d=s-1;d>=0;d--)f(d);return i}function LG(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,p=t.start,f=t.end;if(i){var d=r[l-1],h=n(d,l-1),v=e*(d.coordinate+e*h/2-f);s[l-1]=d=Jt(Jt({},d),{},{tickCoord:v>0?d.coordinate-v*e:d.coordinate});var b=_p(e,d.tickCoord,function(){return h},p,f);b&&(f=d.tickCoord-e*(h/2+a),s[l-1]=Jt(Jt({},d),{},{isShow:!0}))}for(var x=i?l-1:l,I=function(_){var A=s[_],W,w=function(){return W===void 0&&(W=n(A,_)),W};if(_===0){var O=e*(A.coordinate-e*w()/2-p);s[_]=A=Jt(Jt({},A),{},{tickCoord:O<0?A.coordinate-O*e:A.coordinate})}else s[_]=A=Jt(Jt({},A),{},{tickCoord:A.coordinate});var E=_p(e,A.tickCoord,w,p,f);E&&(p=A.tickCoord+e*(w()/2+a),s[_]=Jt(Jt({},A),{},{isShow:!0}))},g=0;g<x;g++)I(g);return s}function yb(e,t,n){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,l=e.orientation,p=e.interval,f=e.tickFormatter,d=e.unit,h=e.angle;if(!a||!a.length||!r)return[];if(le(p)||Zr.isSsr)return NG(a,typeof p=="number"&&le(p)?p:0);var v=[],b=l==="top"||l==="bottom"?"width":"height",x=d&&b==="width"?Ju(d,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(A,W){var w=ke(f)?f(A.value,W):A.value;return b==="width"?EG(Ju(w,{fontSize:t,letterSpacing:n}),x,h):Ju(w,{fontSize:t,letterSpacing:n})[b]},g=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=TG(i,g,b);return p==="equidistantPreserveStart"?RG(g,S,I,a,s):(p==="preserveStart"||p==="preserveStartEnd"?v=LG(g,S,I,a,s,p==="preserveStartEnd"):v=$G(g,S,I,a,s),v.filter(function(_){return _.isShow}))}var qG=["viewBox"],FG=["viewBox"],zG=["ticks"];function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}function i4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i4(Object(n),!0).forEach(function(r){gb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bv(e,t){if(e==null)return{};var n=UG(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function UG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function VG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SW(r.key),r)}}function GG(e,t,n){return t&&u4(e.prototype,t),n&&u4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function KG(e,t,n){return t=Ap(t),YG(e,PW()?Reflect.construct(t,n||[],Ap(e).constructor):t.apply(e,n))}function YG(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QG(e)}function QG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PW=function(){return!!e})()}function Ap(e){return Ap=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ap(e)}function XG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Uy(e,t)}function Uy(e,t){return Uy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Uy(e,t)}function gb(e,t,n){return t=SW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SW(e){var t=ZG(e,"string");return ki(t)=="symbol"?t:t+""}function ZG(e,t){if(ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ji=(function(e){function t(n){var r;return VG(this,t),r=KG(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return XG(t,e),GG(t,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=bv(r,qG),l=this.props,p=l.viewBox,f=bv(l,FG);return!si(i,p)||!si(s,f)||!si(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,l=a.width,p=a.height,f=a.orientation,d=a.tickSize,h=a.mirror,v=a.tickMargin,b,x,I,g,S,_,A=h?-1:1,W=r.tickSize||d,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":b=x=r.coordinate,g=s+ +!h*p,I=g-A*W,_=I-A*v,S=w;break;case"left":I=g=r.coordinate,x=i+ +!h*l,b=x-A*W,S=b-A*v,_=w;break;case"right":I=g=r.coordinate,x=i+ +h*l,b=x+A*W,S=b+A*v,_=w;break;default:b=x=r.coordinate,g=s+ +h*p,I=g+A*W,_=I+A*v,S=w;break}return{line:{x1:b,y1:I,x2:x,y2:g},tick:{x:S,y:_}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.orientation,f=r.mirror,d=r.axisLine,h=rn(rn(rn({},_e(this.props,!1)),_e(d,!1)),{},{fill:"none"});if(p==="top"||p==="bottom"){var v=+(p==="top"&&!f||p==="bottom"&&f);h=rn(rn({},h),{},{x1:a,y1:i+v*l,x2:a+s,y2:i+v*l})}else{var b=+(p==="left"&&!f||p==="right"&&f);h=rn(rn({},h),{},{x1:a+b*s,y1:i,x2:a+b*s,y2:i+l})}return j.createElement("line",ii({},h,{className:je("recharts-cartesian-axis-line",On(d,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,l=this.props,p=l.tickLine,f=l.stroke,d=l.tick,h=l.tickFormatter,v=l.unit,b=yb(rn(rn({},this.props),{},{ticks:r}),a,i),x=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),g=_e(this.props,!1),S=_e(d,!1),_=rn(rn({},g),{},{fill:"none"},_e(p,!1)),A=b.map(function(W,w){var O=s.getTickLineCoord(W),E=O.line,P=O.tick,M=rn(rn(rn(rn({textAnchor:x,verticalAnchor:I},g),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:W,visibleTicksCount:b.length,tickFormatter:h});return j.createElement(De,ii({className:"recharts-cartesian-axis-tick",key:"tick-".concat(W.value,"-").concat(W.coordinate,"-").concat(W.tickCoord)},Ta(s.props,W,w)),p&&j.createElement("line",ii({},_,E,{className:je("recharts-cartesian-axis-tick-line",On(p,"className"))})),d&&t.renderTickItem(d,M,"".concat(ke(h)?h(W.value,w):W.value).concat(v||"")))});return j.createElement("g",{className:"recharts-cartesian-axis-ticks"},A)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,l=a.height,p=a.ticksGenerator,f=a.className,d=a.hide;if(d)return null;var h=this.props,v=h.ticks,b=bv(h,zG),x=v;return ke(p)&&(x=v&&v.length>0?p(this.props):p(b)),s<=0||l<=0||!x||!x.length?null:j.createElement(De,{className:je("recharts-cartesian-axis",f),ref:function(g){r.layerReference=g}},i&&this.renderAxisLine(),this.renderTicks(x,this.state.fontSize,this.state.letterSpacing),Ft.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return j.isValidElement(r)?s=j.cloneElement(r,a):ke(r)?s=r(a):s=j.createElement(yo,ii({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(X.Component);gb(Ji,"displayName","CartesianAxis");gb(Ji,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var JG=["x1","y1","x2","y2","key"],eK=["offset"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(e)}function s4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s4(Object(n),!0).forEach(function(r){tK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tK(e,t,n){return t=nK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nK(e){var t=rK(e,"string");return Io(t)=="symbol"?t:t+""}function rK(e,t){if(Io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function l4(e,t){if(e==null)return{};var n=aK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function aK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var oK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,i=t.y,s=t.width,l=t.height,p=t.ry;return j.createElement("rect",{x:a,y:i,ry:p,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function _W(e,t){var n;if(j.isValidElement(e))n=j.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,i=t.x2,s=t.y2,l=t.key,p=l4(t,JG),f=_e(p,!1);f.offset;var d=l4(f,eK);n=j.createElement("line",fo({},d,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:l}))}return n}function iK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,p){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(p),index:p});return _W(a,f)});return j.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function uK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,p){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(p),index:p});return _W(a,f)});return j.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function sK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,l=e.horizontalPoints,p=e.horizontal,f=p===void 0?!0:p;if(!f||!t||!t.length)return null;var d=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,b){return v-b});a!==d[0]&&d.unshift(0);var h=d.map(function(v,b){var x=!d[b+1],I=x?a+s-v:d[b+1]-v;if(I<=0)return null;var g=b%t.length;return j.createElement("rect",{key:"react-".concat(b),y:v,x:r,height:I,width:i,stroke:"none",fill:t[g],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return j.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function lK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,l=e.width,p=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var d=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,b){return v-b});i!==d[0]&&d.unshift(0);var h=d.map(function(v,b){var x=!d[b+1],I=x?i+l-v:d[b+1]-v;if(I<=0)return null;var g=b%r.length;return j.createElement("rect",{key:"react-".concat(b),x:v,y:s,width:I,height:p,stroke:"none",fill:r[g],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return j.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var cK=function(t,n){var r=t.xAxis,a=t.width,i=t.height,s=t.offset;return OO(yb(en(en(en({},Ji.defaultProps),r),{},{ticks:qr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,n)},pK=function(t,n){var r=t.yAxis,a=t.width,i=t.height,s=t.offset;return OO(yb(en(en(en({},Ji.defaultProps),r),{},{ticks:qr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,n)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Op(e){var t,n,r,a,i,s,l=db(),p=hb(),f=ZV(),d=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ti.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),h=d.x,v=d.y,b=d.width,x=d.height,I=d.syncWithTicks,g=d.horizontalValues,S=d.verticalValues,_=YV(),A=QV();if(!le(b)||b<=0||!le(x)||x<=0||!le(h)||h!==+h||!le(v)||v!==+v)return null;var W=d.verticalCoordinatesGenerator||cK,w=d.horizontalCoordinatesGenerator||pK,O=d.horizontalPoints,E=d.verticalPoints;if((!O||!O.length)&&ke(w)){var P=g&&g.length,M=w({yAxis:A?en(en({},A),{},{ticks:P?g:A.ticks}):void 0,width:l,height:p,offset:f},P?!0:I);ur(Array.isArray(M),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(M),"]")),Array.isArray(M)&&(O=M)}if((!E||!E.length)&&ke(W)){var R=S&&S.length,H=W({xAxis:_?en(en({},_),{},{ticks:R?S:_.ticks}):void 0,width:l,height:p,offset:f},R?!0:I);ur(Array.isArray(H),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(H),"]")),Array.isArray(H)&&(E=H)}return j.createElement("g",{className:"recharts-cartesian-grid"},j.createElement(oK,{fill:d.fill,fillOpacity:d.fillOpacity,x:d.x,y:d.y,width:d.width,height:d.height,ry:d.ry}),j.createElement(iK,fo({},d,{offset:f,horizontalPoints:O,xAxis:_,yAxis:A})),j.createElement(uK,fo({},d,{offset:f,verticalPoints:E,xAxis:_,yAxis:A})),j.createElement(sK,fo({},d,{horizontalPoints:O})),j.createElement(lK,fo({},d,{verticalPoints:E})))}Op.displayName="CartesianGrid";var fK=["type","layout","connectNulls","ref"],dK=["key"];function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function c4(e,t){if(e==null)return{};var n=hK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function p4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p4(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ni(e){return gK(e)||yK(e)||vK(e)||mK()}function mK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vK(e,t){if(e){if(typeof e=="string")return Vy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vy(e,t)}}function yK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gK(e){if(Array.isArray(e))return Vy(e)}function Vy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OW(r.key),r)}}function IK(e,t,n){return t&&f4(e.prototype,t),n&&f4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BK(e,t,n){return t=Wp(t),xK(e,AW()?Reflect.construct(t,n||[],Wp(e).constructor):t.apply(e,n))}function xK(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wK(e)}function wK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AW=function(){return!!e})()}function Wp(e){return Wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wp(e)}function PK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gy(e,t)}function Gy(e,t){return Gy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gy(e,t)}function or(e,t,n){return t=OW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OW(e){var t=SK(e,"string");return Ei(t)=="symbol"?t:t+""}function SK(e,t){if(Ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Fr=(function(e){function t(){var n;bK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=BK(this,t,[].concat(a)),or(n,"state",{isAnimationFinished:!0,totalLength:0}),or(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),or(n,"getStrokeDasharray",function(s,l,p){var f=p.reduce(function(S,_){return S+_});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var d=Math.floor(s/f),h=s%f,v=l-s,b=[],x=0,I=0;x<p.length;I+=p[x],++x)if(I+p[x]>h){b=[].concat(ni(p.slice(0,x)),[h-I]);break}var g=b.length%2===0?[0,v]:[v];return[].concat(ni(t.repeat(p,d)),ni(b),g).map(function(S){return"".concat(S,"px")}).join(", ")}),or(n,"id",Ha("recharts-line-")),or(n,"pathRef",function(s){n.mainCurve=s}),or(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),or(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return PK(t,e),IK(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,l=i.xAxis,p=i.yAxis,f=i.layout,d=i.children,h=sn(d,Zi);if(!h)return null;var v=function(I,g){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,g)}},b={clipPath:r?"url(#clipPath-".concat(a,")"):null};return j.createElement(De,b,h.map(function(x){return j.cloneElement(x,{key:"bar-".concat(x.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,p=l.dot,f=l.points,d=l.dataKey,h=_e(this.props,!1),v=_e(p,!0),b=f.map(function(I,g){var S=wn(wn(wn({key:"dot-".concat(g),r:3},h),v),{},{index:g,cx:I.x,cy:I.y,value:I.value,dataKey:d,payload:I.payload,points:f});return t.renderDotItem(p,S)}),x={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return j.createElement(De,os({className:"recharts-line-dots",key:"dots"},x),b)}},{key:"renderCurveStatically",value:function(r,a,i,s){var l=this.props,p=l.type,f=l.layout,d=l.connectNulls;l.ref;var h=c4(l,fK),v=wn(wn(wn({},_e(h,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:p,layout:f,connectNulls:d});return j.createElement(ka,os({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,p=s.strokeDasharray,f=s.isAnimationActive,d=s.animationBegin,h=s.animationDuration,v=s.animationEasing,b=s.animationId,x=s.animateNewValues,I=s.width,g=s.height,S=this.state,_=S.prevPoints,A=S.totalLength;return j.createElement(Kn,{begin:d,duration:h,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(W){var w=W.t;if(_){var O=_.length/l.length,E=l.map(function(T,L){var G=Math.floor(L*O);if(_[G]){var U=_[G],K=ht(U.x,T.x),z=ht(U.y,T.y);return wn(wn({},T),{},{x:K(w),y:z(w)})}if(x){var D=ht(I*2,T.x),Y=ht(g/2,T.y);return wn(wn({},T),{},{x:D(w),y:Y(w)})}return wn(wn({},T),{},{x:T.x,y:T.y})});return i.renderCurveStatically(E,r,a)}var P=ht(0,A),M=P(w),R;if(p){var H="".concat(p).split(/[,\s]+/gim).map(function(T){return parseFloat(T)});R=i.getStrokeDasharray(M,A,H)}else R=i.generateSimpleStrokeDasharray(A,M);return i.renderCurveStatically(l,r,a,{strokeDasharray:R})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,l=i.isAnimationActive,p=this.state,f=p.prevPoints,d=p.totalLength;return l&&s&&s.length&&(!f&&d>0||!Na(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,p=a.className,f=a.xAxis,d=a.yAxis,h=a.top,v=a.left,b=a.width,x=a.height,I=a.isAnimationActive,g=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,_=l.length===1,A=je("recharts-line",p),W=f&&f.allowDataOverflow,w=d&&d.allowDataOverflow,O=W||w,E=Ee(g)?this.id:g,P=(r=_e(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},M=P.r,R=M===void 0?3:M,H=P.strokeWidth,T=H===void 0?2:H,L=C_(s)?s:{},G=L.clipDot,U=G===void 0?!0:G,K=R*2+T;return j.createElement(De,{className:A},W||w?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(E)},j.createElement("rect",{x:W?v:v-b/2,y:w?h:h-x/2,width:W?b:b*2,height:w?x:x*2})),!U&&j.createElement("clipPath",{id:"clipPath-dots-".concat(E)},j.createElement("rect",{x:v-K/2,y:h-K/2,width:b+K,height:x+K}))):null,!_&&this.renderCurve(O,E),this.renderErrorBar(O,E),(_||s)&&this.renderDots(O,U,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ni(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(ni(s),ni(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(j.isValidElement(r))i=j.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,l=c4(a,dK),p=je("recharts-line-dot",typeof r!="boolean"?r.className:"");i=j.createElement(Js,os({key:s},l,{className:p}))}return i}}])})(X.PureComponent);or(Fr,"displayName","Line");or(Fr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});or(Fr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,l=e.bandSize,p=e.displayedData,f=e.offset,d=t.layout,h=p.map(function(v,b){var x=lt(v,s);return d==="horizontal"?{x:Bi({axis:n,ticks:a,bandSize:l,entry:v,index:b}),y:Ee(x)?null:r.scale(x),value:x,payload:v}:{x:Ee(x)?null:n.scale(x),y:Bi({axis:r,ticks:i,bandSize:l,entry:v,index:b}),value:x,payload:v}});return wn({points:h,layout:d},f)});var _K=["layout","type","stroke","connectNulls","isRange","ref"],AK=["key"],WW;function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function MW(e,t){if(e==null)return{};var n=OK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function OK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function d4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d4(Object(n),!0).forEach(function(r){br(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kW(r.key),r)}}function MK(e,t,n){return t&&h4(e.prototype,t),n&&h4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function CK(e,t,n){return t=Mp(t),kK(e,CW()?Reflect.construct(t,n||[],Mp(e).constructor):t.apply(e,n))}function kK(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EK(e)}function EK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CW=function(){return!!e})()}function Mp(e){return Mp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mp(e)}function TK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ky(e,t)}function Ky(e,t){return Ky=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ky(e,t)}function br(e,t,n){return t=kW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kW(e){var t=NK(e,"string");return Ti(t)=="symbol"?t:t+""}function NK(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var So=(function(e){function t(){var n;WK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=CK(this,t,[].concat(a)),br(n,"state",{isAnimationFinished:!0}),br(n,"id",Ha("recharts-area-")),br(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),br(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return TK(t,e),MK(t,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var p=this.props,f=p.dot,d=p.points,h=p.dataKey,v=_e(this.props,!1),b=_e(f,!0),x=d.map(function(g,S){var _=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),b),{},{index:S,cx:g.x,cy:g.y,dataKey:h,value:g.value,payload:g.payload,points:d});return t.renderDotItem(f,_)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return j.createElement(De,ho({className:"recharts-area-dots"},I),x)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].x,f=s[s.length-1].x,d=r*Math.abs(p-f),h=Aa(s.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?h=Math.max(i,h):i&&Array.isArray(i)&&i.length&&(h=Math.max(Aa(i.map(function(v){return v.y||0})),h)),le(h)?j.createElement("rect",{x:p<f?p:p-d,y:0,width:d,height:Math.floor(h+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].y,f=s[s.length-1].y,d=r*Math.abs(p-f),h=Aa(s.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?h=Math.max(i,h):i&&Array.isArray(i)&&i.length&&(h=Math.max(Aa(i.map(function(v){return v.x||0})),h)),le(h)?j.createElement("rect",{x:0,y:p<f?p:p-d,width:h+(l?parseInt("".concat(l),10):1),height:Math.floor(d)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var l=this.props,p=l.layout,f=l.type,d=l.stroke,h=l.connectNulls,v=l.isRange;l.ref;var b=MW(l,_K);return j.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},j.createElement(ka,ho({},_e(b,!0),{points:r,connectNulls:h,type:f,baseLine:a,layout:p,stroke:"none",className:"recharts-area-area"})),d!=="none"&&j.createElement(ka,ho({},_e(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:h,fill:"none",points:r})),d!=="none"&&v&&j.createElement(ka,ho({},_e(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:h,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,p=s.baseLine,f=s.isAnimationActive,d=s.animationBegin,h=s.animationDuration,v=s.animationEasing,b=s.animationId,x=this.state,I=x.prevPoints,g=x.prevBaseLine;return j.createElement(Kn,{begin:d,duration:h,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var _=S.t;if(I){var A=I.length/l.length,W=l.map(function(P,M){var R=Math.floor(M*A);if(I[R]){var H=I[R],T=ht(H.x,P.x),L=ht(H.y,P.y);return Pa(Pa({},P),{},{x:T(_),y:L(_)})}return P}),w;if(le(p)&&typeof p=="number"){var O=ht(g,p);w=O(_)}else if(Ee(p)||Gi(p)){var E=ht(g,0);w=E(_)}else w=p.map(function(P,M){var R=Math.floor(M*A);if(g[R]){var H=g[R],T=ht(H.x,P.x),L=ht(H.y,P.y);return Pa(Pa({},P),{},{x:T(_),y:L(_)})}return P});return i.renderAreaStatically(W,w,r,a)}return j.createElement(De,null,j.createElement("defs",null,j.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(_))),j.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(l,p,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,l=i.baseLine,p=i.isAnimationActive,f=this.state,d=f.prevPoints,h=f.prevBaseLine,v=f.totalLength;return p&&s&&s.length&&(!d&&v>0||!Na(d,s)||!Na(h,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,p=a.className,f=a.top,d=a.left,h=a.xAxis,v=a.yAxis,b=a.width,x=a.height,I=a.isAnimationActive,g=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,_=l.length===1,A=je("recharts-area",p),W=h&&h.allowDataOverflow,w=v&&v.allowDataOverflow,O=W||w,E=Ee(g)?this.id:g,P=(r=_e(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},M=P.r,R=M===void 0?3:M,H=P.strokeWidth,T=H===void 0?2:H,L=C_(s)?s:{},G=L.clipDot,U=G===void 0?!0:G,K=R*2+T;return j.createElement(De,{className:A},W||w?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(E)},j.createElement("rect",{x:W?d:d-b/2,y:w?f:f-x/2,width:W?b:b*2,height:w?x:x*2})),!U&&j.createElement("clipPath",{id:"clipPath-dots-".concat(E)},j.createElement("rect",{x:d-K/2,y:f-K/2,width:b+K,height:x+K}))):null,_?null:this.renderArea(O,E),(s||_)&&this.renderDots(O,U,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(X.PureComponent);WW=So;br(So,"displayName","Area");br(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});br(So,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,s=t.props.baseValue,l=s??i;if(le(l)&&typeof l=="number")return l;var p=a==="horizontal"?r:n,f=p.scale.domain();if(p.type==="number"){var d=Math.max(f[0],f[1]),h=Math.min(f[0],f[1]);return l==="dataMin"?h:l==="dataMax"||d<0?d:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});br(So,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,p=e.dataKey,f=e.stackedData,d=e.dataStartIndex,h=e.displayedData,v=e.offset,b=t.layout,x=f&&f.length,I=WW.getBaseValue(t,n,r,a),g=b==="horizontal",S=!1,_=h.map(function(W,w){var O;x?O=f[d+w]:(O=lt(W,p),Array.isArray(O)?S=!0:O=[I,O]);var E=O[1]==null||x&&lt(W,p)==null;return g?{x:Bi({axis:r,ticks:i,bandSize:l,entry:W,index:w}),y:E?null:a.scale(O[1]),value:O,payload:W}:{x:E?null:r.scale(O[1]),y:Bi({axis:a,ticks:s,bandSize:l,entry:W,index:w}),value:O,payload:W}}),A;return x||S?A=_.map(function(W){var w=Array.isArray(W.value)?W.value[0]:null;return g?{x:W.x,y:w!=null&&W.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:W.y}}):A=g?a.scale(I):r.scale(I),Pa({points:_,baseLine:A,layout:b,isRange:S},v)});br(So,"renderDotItem",function(e,t){var n;if(j.isValidElement(e))n=j.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=je("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=MW(t,AK);n=j.createElement(Js,ho({},i,{key:a,className:r}))}return n});function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function RK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NW(r.key),r)}}function HK(e,t,n){return t&&jK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function DK(e,t,n){return t=Cp(t),$K(e,EW()?Reflect.construct(t,n||[],Cp(e).constructor):t.apply(e,n))}function $K(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return LK(e)}function LK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EW=function(){return!!e})()}function Cp(e){return Cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cp(e)}function qK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yy(e,t)}function Yy(e,t){return Yy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yy(e,t)}function TW(e,t,n){return t=NW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NW(e){var t=FK(e,"string");return Ni(t)=="symbol"?t:t+""}function FK(e,t){if(Ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var b0=(function(e){function t(){return RK(this,t),DK(this,t,arguments)}return qK(t,e),HK(t,[{key:"render",value:function(){return null}}])})(j.Component);TW(b0,"displayName","ZAxis");TW(b0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var zK=["option","isActive"];function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function UK(e,t){if(e==null)return{};var n=VK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function VK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function GK(e){var t=e.option,n=e.isActive,r=UK(e,zK);return typeof t=="string"?j.createElement(vp,is({option:j.createElement(Kp,is({type:t},r)),isActive:n,shapeType:"symbols"},r)):j.createElement(vp,is({option:t,isActive:n,shapeType:"symbols"},r))}function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function m4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m4(Object(n),!0).forEach(function(r){Wa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jW(r.key),r)}}function YK(e,t,n){return t&&v4(e.prototype,t),n&&v4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function QK(e,t,n){return t=kp(t),XK(e,RW()?Reflect.construct(t,n||[],kp(e).constructor):t.apply(e,n))}function XK(e,t){if(t&&(Ri(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ZK(e)}function ZK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(RW=function(){return!!e})()}function kp(e){return kp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kp(e)}function JK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qy(e,t)}function Qy(e,t){return Qy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qy(e,t)}function Wa(e,t,n){return t=jW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jW(e){var t=eY(e,"string");return Ri(t)=="symbol"?t:t+""}function eY(e,t){if(Ri(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I0=(function(e){function t(){var n;KK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=QK(this,t,[].concat(a)),Wa(n,"state",{isAnimationFinished:!1}),Wa(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),Wa(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),Wa(n,"id",Ha("recharts-scatter-")),n}return JK(t,e),YK(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.activeShape,p=i.activeIndex,f=_e(this.props,!1);return r.map(function(d,h){var v=p===h,b=v?l:s,x=Ln(Ln({},f),d);return j.createElement(De,us({className:"recharts-scatter-symbol",key:"symbol-".concat(d==null?void 0:d.cx,"-").concat(d==null?void 0:d.cy,"-").concat(d==null?void 0:d.size,"-").concat(h)},Ta(a.props,d,h),{role:"img"}),j.createElement(GK,us({option:b,isActive:v,key:"symbol-".concat(h)},x)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,d=a.animationId,h=this.state.prevPoints;return j.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var b=v.t,x=i.map(function(I,g){var S=h&&h[g];if(S){var _=ht(S.cx,I.cx),A=ht(S.cy,I.cy),W=ht(S.size,I.size);return Ln(Ln({},I),{},{cx:_(b),cy:A(b),size:W(b)})}var w=ht(0,I.size);return Ln(Ln({},I),{},{size:w(b)})});return j.createElement(De,null,r.renderSymbolsStatically(x))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,l=a.yAxis,p=a.children,f=sn(p,Zi);return f?f.map(function(d,h){var v=d.props,b=v.direction,x=v.dataKey;return j.cloneElement(d,{key:"".concat(b,"-").concat(x,"-").concat(i[h]),data:i,xAxis:s,yAxis:l,layout:b==="x"?"vertical":"horizontal",dataPointFormatter:function(g,S){return{x:g.cx,y:g.cy,value:b==="x"?+g.node.x:+g.node.y,errorVal:lt(g,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,l=r.lineJointType,p=_e(this.props,!1),f=_e(i,!1),d,h;if(s==="joint")d=a.map(function(A){return{x:A.cx,y:A.cy}});else if(s==="fitting"){var v=VR(a),b=v.xmin,x=v.xmax,I=v.a,g=v.b,S=function(W){return I*W+g};d=[{x:b,y:S(b)},{x,y:S(x)}]}var _=Ln(Ln(Ln({},p),{},{fill:"none",stroke:p&&p.fill},f),{},{points:d});return j.isValidElement(i)?h=j.cloneElement(i,_):ke(i)?h=i(_):h=j.createElement(ka,us({},_,{type:l})),j.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},h)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,l=r.className,p=r.xAxis,f=r.yAxis,d=r.left,h=r.top,v=r.width,b=r.height,x=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var g=this.state.isAnimationFinished,S=je("recharts-scatter",l),_=p&&p.allowDataOverflow,A=f&&f.allowDataOverflow,W=_||A,w=Ee(x)?this.id:x;return j.createElement(De,{className:S,clipPath:W?"url(#clipPath-".concat(w,")"):null},_||A?j.createElement("defs",null,j.createElement("clipPath",{id:"clipPath-".concat(w)},j.createElement("rect",{x:_?d:d-v/2,y:A?h:h-b/2,width:_?v:v*2,height:A?b:b*2}))):null,s&&this.renderLine(),this.renderErrorBar(),j.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||g)&&sr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(X.PureComponent);Wa(I0,"displayName","Scatter");Wa(I0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});Wa(I0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,p=e.offset,f=a.props.tooltipType,d=sn(a.props.children,Ks),h=Ee(t.dataKey)?a.props.dataKey:t.dataKey,v=Ee(n.dataKey)?a.props.dataKey:n.dataKey,b=r&&r.dataKey,x=r?r.range:b0.defaultProps.range,I=x&&x[0],g=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,_=i.map(function(A,W){var w=lt(A,h),O=lt(A,v),E=!Ee(b)&&lt(A,b)||"-",P=[{name:Ee(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:A,dataKey:h,type:f},{name:Ee(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:O,payload:A,dataKey:v,type:f}];E!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:E,payload:A,dataKey:b,type:f});var M=Bi({axis:t,ticks:s,bandSize:g,entry:A,index:W,dataKey:h}),R=Bi({axis:n,ticks:l,bandSize:S,entry:A,index:W,dataKey:v}),H=E!=="-"?r.scale(E):I,T=Math.sqrt(Math.max(H,0)/Math.PI);return Ln(Ln({},A),{},{cx:M,cy:R,x:M-T,y:R-T,xAxis:t,yAxis:n,zAxis:r,width:2*T,height:2*T,size:H,node:{x:w,y:O,z:E},tooltipPayload:P,tooltipPosition:{x:M,y:R},payload:A},d&&d[W]&&d[W].props)});return Ln({points:_},p)});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function tY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$W(r.key),r)}}function rY(e,t,n){return t&&nY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function aY(e,t,n){return t=Ep(t),oY(e,HW()?Reflect.construct(t,n||[],Ep(e).constructor):t.apply(e,n))}function oY(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iY(e)}function iY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(HW=function(){return!!e})()}function Ep(e){return Ep=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ep(e)}function uY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xy(e,t)}function Xy(e,t){return Xy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xy(e,t)}function DW(e,t,n){return t=$W(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $W(e){var t=sY(e,"string");return ji(t)=="symbol"?t:t+""}function sY(e,t){if(ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Zy(){return Zy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zy.apply(this,arguments)}function lY(e){var t=e.xAxisId,n=db(),r=hb(),a=mW(t);return a==null?null:j.createElement(Ji,Zy({},a,{className:je("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return qr(s,!0)}}))}var Ra=(function(e){function t(){return tY(this,t),aY(this,t,arguments)}return uY(t,e),rY(t,[{key:"render",value:function(){return j.createElement(lY,this.props)}}])})(j.Component);DW(Ra,"displayName","XAxis");DW(Ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function cY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,FW(r.key),r)}}function fY(e,t,n){return t&&pY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function dY(e,t,n){return t=Tp(t),hY(e,LW()?Reflect.construct(t,n||[],Tp(e).constructor):t.apply(e,n))}function hY(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mY(e)}function mY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LW=function(){return!!e})()}function Tp(e){return Tp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tp(e)}function vY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Jy(e,t)}function Jy(e,t){return Jy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jy(e,t)}function qW(e,t,n){return t=FW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FW(e){var t=yY(e,"string");return Hi(t)=="symbol"?t:t+""}function yY(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function eg(){return eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eg.apply(this,arguments)}var gY=function(t){var n=t.yAxisId,r=db(),a=hb(),i=vW(n);return i==null?null:j.createElement(Ji,eg({},i,{className:je("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return qr(l,!0)}}))},Ir=(function(e){function t(){return cY(this,t),dY(this,t,arguments)}return vY(t,e),fY(t,[{key:"render",value:function(){return j.createElement(gY,this.props)}}])})(j.Component);qW(Ir,"displayName","YAxis");qW(Ir,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function y4(e){return xY(e)||BY(e)||IY(e)||bY()}function bY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IY(e,t){if(e){if(typeof e=="string")return tg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tg(e,t)}}function BY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xY(e){if(Array.isArray(e))return tg(e)}function tg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ng=function(t,n,r,a,i){var s=sn(t,vb),l=sn(t,v0),p=[].concat(y4(s),y4(l)),f=sn(t,g0),d="".concat(a,"Id"),h=a[0],v=n;if(p.length&&(v=p.reduce(function(I,g){if(g.props[d]===r&&xr(g.props,"extendDomain")&&le(g.props[h])){var S=g.props[h];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var b="".concat(h,"1"),x="".concat(h,"2");v=f.reduce(function(I,g){if(g.props[d]===r&&xr(g.props,"extendDomain")&&le(g.props[b])&&le(g.props[x])){var S=g.props[b],_=g.props[x];return[Math.min(I[0],S,_),Math.max(I[1],S,_)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,g){return le(g)?[Math.min(I[0],g),Math.max(I[1],g)]:I},v)),v},Iv={exports:{}},g4;function wY(){return g4||(g4=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(p,f,d){this.fn=p,this.context=f,this.once=d||!1}function i(p,f,d,h,v){if(typeof d!="function")throw new TypeError("The listener must be a function");var b=new a(d,h||p,v),x=n?n+f:f;return p._events[x]?p._events[x].fn?p._events[x]=[p._events[x],b]:p._events[x].push(b):(p._events[x]=b,p._eventsCount++),p}function s(p,f){--p._eventsCount===0?p._events=new r:delete p._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],d,h;if(this._eventsCount===0)return f;for(h in d=this._events)t.call(d,h)&&f.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(d)):f},l.prototype.listeners=function(f){var d=n?n+f:f,h=this._events[d];if(!h)return[];if(h.fn)return[h.fn];for(var v=0,b=h.length,x=new Array(b);v<b;v++)x[v]=h[v].fn;return x},l.prototype.listenerCount=function(f){var d=n?n+f:f,h=this._events[d];return h?h.fn?1:h.length:0},l.prototype.emit=function(f,d,h,v,b,x){var I=n?n+f:f;if(!this._events[I])return!1;var g=this._events[I],S=arguments.length,_,A;if(g.fn){switch(g.once&&this.removeListener(f,g.fn,void 0,!0),S){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,d),!0;case 3:return g.fn.call(g.context,d,h),!0;case 4:return g.fn.call(g.context,d,h,v),!0;case 5:return g.fn.call(g.context,d,h,v,b),!0;case 6:return g.fn.call(g.context,d,h,v,b,x),!0}for(A=1,_=new Array(S-1);A<S;A++)_[A-1]=arguments[A];g.fn.apply(g.context,_)}else{var W=g.length,w;for(A=0;A<W;A++)switch(g[A].once&&this.removeListener(f,g[A].fn,void 0,!0),S){case 1:g[A].fn.call(g[A].context);break;case 2:g[A].fn.call(g[A].context,d);break;case 3:g[A].fn.call(g[A].context,d,h);break;case 4:g[A].fn.call(g[A].context,d,h,v);break;default:if(!_)for(w=1,_=new Array(S-1);w<S;w++)_[w-1]=arguments[w];g[A].fn.apply(g[A].context,_)}}return!0},l.prototype.on=function(f,d,h){return i(this,f,d,h,!1)},l.prototype.once=function(f,d,h){return i(this,f,d,h,!0)},l.prototype.removeListener=function(f,d,h,v){var b=n?n+f:f;if(!this._events[b])return this;if(!d)return s(this,b),this;var x=this._events[b];if(x.fn)x.fn===d&&(!v||x.once)&&(!h||x.context===h)&&s(this,b);else{for(var I=0,g=[],S=x.length;I<S;I++)(x[I].fn!==d||v&&!x[I].once||h&&x[I].context!==h)&&g.push(x[I]);g.length?this._events[b]=g.length===1?g[0]:g:s(this,b)}return this},l.prototype.removeAllListeners=function(f){var d;return f?(d=n?n+f:f,this._events[d]&&s(this,d)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(Iv)),Iv.exports}var PY=wY();const SY=Xe(PY);var Bv=new SY,xv="recharts.syncMouseEvents";function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function _Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,zW(r.key),r)}}function OY(e,t,n){return t&&AY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wv(e,t,n){return t=zW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zW(e){var t=WY(e,"string");return Fs(t)=="symbol"?t:t+""}function WY(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var MY=(function(){function e(){_Y(this,e),wv(this,"activeIndex",0),wv(this,"coordinateList",[]),wv(this,"layout","horizontal")}return OY(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,i=a===void 0?null:a,s=n.container,l=s===void 0?null:s,p=n.layout,f=p===void 0?null:p,d=n.offset,h=d===void 0?null:d,v=n.mouseHandlerCallback,b=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=h??this.offset,this.mouseHandlerCallback=b??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,l=a.height,p=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,d=((r=window)===null||r===void 0?void 0:r.scrollY)||0,h=i+p+f,v=s+this.offset.top+l/2+d;this.mouseHandlerCallback({pageX:h,pageY:v})}}}])})();function CY(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function kY(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function UW(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=ot(t,n,r,a),l=ot(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}function EY(e,t,n){var r,a,i,s;if(e==="horizontal")r=t.x,i=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,i=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,p=t.cy,f=t.innerRadius,d=t.outerRadius,h=t.angle,v=ot(l,p,f,h),b=ot(l,p,d,h);r=v.x,a=v.y,i=b.x,s=b.y}else return UW(t);return[{x:r,y:a},{x:i,y:s}]}function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function b4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b4(Object(n),!0).forEach(function(r){TY(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TY(e,t,n){return t=NY(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NY(e){var t=RY(e,"string");return zs(t)=="symbol"?t:t+""}function RY(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jY(e){var t,n,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,l=e.activePayload,p=e.offset,f=e.activeTooltipIndex,d=e.tooltipAxisBandSize,h=e.layout,v=e.chartName,b=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!b||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var x,I=ka;if(v==="ScatterChart")x=s,I=Mz;else if(v==="BarChart")x=kY(h,s,p,d),I=sb;else if(h==="radial"){var g=UW(s),S=g.cx,_=g.cy,A=g.radius,W=g.startAngle,w=g.endAngle;x={cx:S,cy:_,startAngle:W,endAngle:w,innerRadius:A,outerRadius:A},I=DO}else x={points:EY(h,s,p)},I=ka;var O=wc(wc(wc(wc({stroke:"#ccc",pointerEvents:"none"},p),x),_e(b,!1)),{},{payload:l,payloadIndex:f,className:je("recharts-tooltip-cursor",b.className)});return X.isValidElement(b)?X.cloneElement(b,O):X.createElement(I,O)}var HY=["item"],DY=["children","className","width","height","style","compact","title","desc"];function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}function I4(e,t){return qY(e)||LY(e,t)||GW(e,t)||$Y()}function $Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LY(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(d){f=!0,a=d}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function qY(e){if(Array.isArray(e))return e}function B4(e,t){if(e==null)return{};var n=FY(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function FY(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function UY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KW(r.key),r)}}function VY(e,t,n){return t&&UY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function GY(e,t,n){return t=Np(t),KY(e,VW()?Reflect.construct(t,n||[],Np(e).constructor):t.apply(e,n))}function KY(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return YY(e)}function YY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VW=function(){return!!e})()}function Np(e){return Np=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Np(e)}function QY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&rg(e,t)}function rg(e,t){return rg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},rg(e,t)}function $i(e){return JY(e)||ZY(e)||GW(e)||XY()}function XY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GW(e,t){if(e){if(typeof e=="string")return ag(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ag(e,t)}}function ZY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function JY(e){if(Array.isArray(e))return ag(e)}function ag(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x4(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Te(e,t,n){return t=KW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KW(e){var t=eQ(e,"string");return Di(t)=="symbol"?t:t+""}function eQ(e,t){if(Di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tQ={xAxis:["bottom","top"],yAxis:["left","right"]},nQ={width:"100%",height:"100%"},YW={x:0,y:0};function Pc(e){return e}var rQ=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},aQ=function(t,n,r,a){var i=n.find(function(d){return d&&d.index===r});if(i){if(t==="horizontal")return{x:i.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:i.coordinate};if(t==="centric"){var s=i.coordinate,l=a.radius;return ae(ae(ae({},a),ot(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var p=i.coordinate,f=a.angle;return ae(ae(ae({},a),ot(a.cx,a.cy,p,f)),{},{angle:f,radius:p})}return YW},B0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,i=n.dataEndIndex,s=(r??[]).reduce(function(l,p){var f=p.props.data;return f&&f.length?[].concat($i(l),$i(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(i)?t.slice(a,i+1):[]};function QW(e){return e==="number"?[0,"auto"]:void 0}var og=function(t,n,r,a){var i=t.graphicalItems,s=t.tooltipAxis,l=B0(n,t);return r<0||!i||!i.length||r>=l.length?null:i.reduce(function(p,f){var d,h=(d=f.props.data)!==null&&d!==void 0?d:n;h&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(h=h.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var b=h===void 0?l:h;v=kc(b,s.dataKey,a)}else v=h&&h[r]||l[r];return v?[].concat($i(p),[EO(f,v)]):p},[])},w4=function(t,n,r,a){var i=a||{x:t.chartX,y:t.chartY},s=rQ(i,r),l=t.orderedTooltipTicks,p=t.tooltipAxis,f=t.tooltipTicks,d=X7(s,l,f,p);if(d>=0&&f){var h=f[d]&&f[d].value,v=og(t,n,d,h),b=aQ(r,l,d,i);return{activeTooltipIndex:d,activeLabel:h,activePayload:v,activeCoordinate:b}}return null},oQ=function(t,n){var r=n.axes,a=n.graphicalItems,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,d=t.layout,h=t.children,v=t.stackOffset,b=AO(d,i);return r.reduce(function(x,I){var g,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,_=S.type,A=S.dataKey,W=S.allowDataOverflow,w=S.allowDuplicatedCategory,O=S.scale,E=S.ticks,P=S.includeHidden,M=S[s];if(x[M])return x;var R=B0(t.data,{graphicalItems:a.filter(function(q){var J,ue=s in q.props?q.props[s]:(J=q.type.defaultProps)===null||J===void 0?void 0:J[s];return ue===M}),dataStartIndex:p,dataEndIndex:f}),H=R.length,T,L,G;CY(S.domain,W,_)&&(T=vy(S.domain,null,W),b&&(_==="number"||O!=="auto")&&(G=ts(R,A,"category")));var U=QW(_);if(!T||T.length===0){var K,z=(K=S.domain)!==null&&K!==void 0?K:U;if(A){if(T=ts(R,A,_),_==="category"&&b){var D=UR(T);w&&D?(L=T,T=gp(0,H)):w||(T=BS(z,T,I).reduce(function(q,J){return q.indexOf(J)>=0?q:[].concat($i(q),[J])},[]))}else if(_==="category")w?T=T.filter(function(q){return q!==""&&!Ee(q)}):T=BS(z,T,I).reduce(function(q,J){return q.indexOf(J)>=0||J===""||Ee(J)?q:[].concat($i(q),[J])},[]);else if(_==="number"){var Y=nq(R,a.filter(function(q){var J,ue,he=s in q.props?q.props[s]:(J=q.type.defaultProps)===null||J===void 0?void 0:J[s],ye="hide"in q.props?q.props.hide:(ue=q.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===M&&(P||!ye)}),A,i,d);Y&&(T=Y)}b&&(_==="number"||O!=="auto")&&(G=ts(R,A,"category"))}else b?T=gp(0,H):l&&l[M]&&l[M].hasStack&&_==="number"?T=v==="expand"?[0,1]:kO(l[M].stackGroups,p,f):T=_O(R,a.filter(function(q){var J=s in q.props?q.props[s]:q.type.defaultProps[s],ue="hide"in q.props?q.props.hide:q.type.defaultProps.hide;return J===M&&(P||!ue)}),_,d,!0);if(_==="number")T=ng(h,T,M,i,E),z&&(T=vy(z,T,W));else if(_==="category"&&z){var Q=z,N=T.every(function(q){return Q.indexOf(q)>=0});N&&(T=Q)}}return ae(ae({},x),{},Te({},M,ae(ae({},S),{},{axisType:i,domain:T,categoricalDomain:G,duplicateDomain:L,originalDomain:(g=S.domain)!==null&&g!==void 0?g:U,isCategorical:b,layout:d})))},{})},iQ=function(t,n){var r=n.graphicalItems,a=n.Axis,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,d=t.layout,h=t.children,v=B0(t.data,{graphicalItems:r,dataStartIndex:p,dataEndIndex:f}),b=v.length,x=AO(d,i),I=-1;return r.reduce(function(g,S){var _=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,A=_[s],W=QW("number");if(!g[A]){I++;var w;return x?w=gp(0,b):l&&l[A]&&l[A].hasStack?(w=kO(l[A].stackGroups,p,f),w=ng(h,w,A,i)):(w=vy(W,_O(v,r.filter(function(O){var E,P,M=s in O.props?O.props[s]:(E=O.type.defaultProps)===null||E===void 0?void 0:E[s],R="hide"in O.props?O.props.hide:(P=O.type.defaultProps)===null||P===void 0?void 0:P.hide;return M===A&&!R}),"number",d),a.defaultProps.allowDataOverflow),w=ng(h,w,A,i)),ae(ae({},g),{},Te({},A,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:On(tQ,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:W,isCategorical:x,layout:d})))}return g},{})},uQ=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,i=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,d=t.children,h="".concat(a,"Id"),v=sn(d,i),b={};return v&&v.length?b=oQ(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:h,stackGroups:l,dataStartIndex:p,dataEndIndex:f}):s&&s.length&&(b=iQ(t,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:h,stackGroups:l,dataStartIndex:p,dataEndIndex:f})),b},sQ=function(t){var n=_a(t),r=qr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Tg(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:ap(n,r)}},P4=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,Ai),i=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},lQ=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},S4=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},cQ=function(t,n){var r=t.props,a=t.graphicalItems,i=t.xAxisMap,s=i===void 0?{}:i,l=t.yAxisMap,p=l===void 0?{}:l,f=r.width,d=r.height,h=r.children,v=r.margin||{},b=Sn(h,Ai),x=Sn(h,Ma),I=Object.keys(p).reduce(function(w,O){var E=p[O],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,w[P]+E.width)):w},{left:v.left||0,right:v.right||0}),g=Object.keys(s).reduce(function(w,O){var E=s[O],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,On(w,"".concat(P))+E.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},g),I),_=S.bottom;b&&(S.bottom+=b.props.height||Ai.defaultProps.height),x&&n&&(S=eq(S,a,r,n));var A=f-S.left-S.right,W=d-S.top-S.bottom;return ae(ae({brushBottom:_},S),{},{width:Math.max(A,0),height:Math.max(W,0)})},pQ=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},x0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,i=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,p=t.axisComponents,f=t.legendContent,d=t.formatAxisMap,h=t.defaultProps,v=function(S,_){var A=_.graphicalItems,W=_.stackGroups,w=_.offset,O=_.updateId,E=_.dataStartIndex,P=_.dataEndIndex,M=S.barSize,R=S.layout,H=S.barGap,T=S.barCategoryGap,L=S.maxBarSize,G=S4(R),U=G.numericAxisName,K=G.cateAxisName,z=lQ(A),D=[];return A.forEach(function(Y,Q){var N=B0(S.data,{graphicalItems:[Y],dataStartIndex:E,dataEndIndex:P}),q=Y.type.defaultProps!==void 0?ae(ae({},Y.type.defaultProps),Y.props):Y.props,J=q.dataKey,ue=q.maxBarSize,he=q["".concat(U,"Id")],ye=q["".concat(K,"Id")],ge={},fe=p.reduce(function(Bt,vt){var Wn=_["".concat(vt.axisType,"Map")],yt=q["".concat(vt.axisType,"Id")];Wn&&Wn[yt]||vt.axisType==="zAxis"||bo();var Kt=Wn[yt];return ae(ae({},Bt),{},Te(Te({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),qr(Kt)))},ge),ne=fe[K],de=fe["".concat(K,"Ticks")],pe=W&&W[he]&&W[he].hasStack&&pq(Y,W[he].stackGroups),re=Ur(Y.type).indexOf("Bar")>=0,Re=ap(ne,de),Pe=[],Ce=z&&Z7({barSize:M,stackGroups:W,totalSize:pQ(fe,K)});if(re){var Ae,qe,He=Ee(ue)?L:ue,Fe=(Ae=(qe=ap(ne,de,!0))!==null&&qe!==void 0?qe:He)!==null&&Ae!==void 0?Ae:0;Pe=J7({barGap:H,barCategoryGap:T,bandSize:Fe!==Re?Fe:Re,sizeList:Ce[ye],maxBarSize:He}),Fe!==Re&&(Pe=Pe.map(function(Bt){return ae(ae({},Bt),{},{position:ae(ae({},Bt.position),{},{offset:Bt.position.offset-Fe/2})})}))}var Ke=Y&&Y.type&&Y.type.getComposedData;Ke&&D.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:N,props:S,dataKey:J,item:Y,bandSize:Re,barPosition:Pe,offset:w,stackedData:pe,layout:R,dataStartIndex:E,dataEndIndex:P}))),{},Te(Te(Te({key:Y.key||"item-".concat(Q)},U,fe[U]),K,fe[K]),"animationId",O)),childIndex:rj(Y,S.children),item:Y})}),D},b=function(S,_){var A=S.props,W=S.dataStartIndex,w=S.dataEndIndex,O=S.updateId;if(!RB({props:A}))return null;var E=A.children,P=A.layout,M=A.stackOffset,R=A.data,H=A.reverseStackOrder,T=S4(P),L=T.numericAxisName,G=T.cateAxisName,U=sn(E,r),K=lq(R,U,"".concat(L,"Id"),"".concat(G,"Id"),M,H),z=p.reduce(function(q,J){var ue="".concat(J.axisType,"Map");return ae(ae({},q),{},Te({},ue,uQ(A,ae(ae({},J),{},{graphicalItems:U,stackGroups:J.axisType===L&&K,dataStartIndex:W,dataEndIndex:w}))))},{}),D=cQ(ae(ae({},z),{},{props:A,graphicalItems:U}),_==null?void 0:_.legendBBox);Object.keys(z).forEach(function(q){z[q]=d(A,z[q],D,q.replace("Map",""),n)});var Y=z["".concat(G,"Map")],Q=sQ(Y),N=v(A,ae(ae({},z),{},{dataStartIndex:W,dataEndIndex:w,updateId:O,graphicalItems:U,stackGroups:K,offset:D}));return ae(ae({formattedGraphicalItems:N,graphicalItems:U,offset:D,stackGroups:K},Q),z)},x=(function(g){function S(_){var A,W,w;return zY(this,S),w=GY(this,S,[_]),Te(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Te(w,"accessibilityManager",new MY),Te(w,"handleLegendBBoxUpdate",function(O){if(O){var E=w.state,P=E.dataStartIndex,M=E.dataEndIndex,R=E.updateId;w.setState(ae({legendBBox:O},b({props:w.props,dataStartIndex:P,dataEndIndex:M,updateId:R},ae(ae({},w.state),{},{legendBBox:O}))))}}),Te(w,"handleReceiveSyncEvent",function(O,E,P){if(w.props.syncId===O){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(E)}}),Te(w,"handleBrushChange",function(O){var E=O.startIndex,P=O.endIndex;if(E!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var M=w.state.updateId;w.setState(function(){return ae({dataStartIndex:E,dataEndIndex:P},b({props:w.props,dataStartIndex:E,dataEndIndex:P,updateId:M},w.state))}),w.triggerSyncEvent({dataStartIndex:E,dataEndIndex:P})}}),Te(w,"handleMouseEnter",function(O){var E=w.getMouseInfo(O);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var M=w.props.onMouseEnter;ke(M)&&M(P,O)}}),Te(w,"triggeredAfterMouseMove",function(O){var E=w.getMouseInfo(O),P=E?ae(ae({},E),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var M=w.props.onMouseMove;ke(M)&&M(P,O)}),Te(w,"handleItemMouseEnter",function(O){w.setState(function(){return{isTooltipActive:!0,activeItem:O,activePayload:O.tooltipPayload,activeCoordinate:O.tooltipPosition||{x:O.cx,y:O.cy}}})}),Te(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Te(w,"handleMouseMove",function(O){O.persist(),w.throttleTriggeredAfterMouseMove(O)}),Te(w,"handleMouseLeave",function(O){w.throttleTriggeredAfterMouseMove.cancel();var E={isTooltipActive:!1};w.setState(E),w.triggerSyncEvent(E);var P=w.props.onMouseLeave;ke(P)&&P(E,O)}),Te(w,"handleOuterEvent",function(O){var E=nj(O),P=On(w.props,"".concat(E));if(E&&ke(P)){var M,R;/.*touch.*/i.test(E)?R=w.getMouseInfo(O.changedTouches[0]):R=w.getMouseInfo(O),P((M=R)!==null&&M!==void 0?M:{},O)}}),Te(w,"handleClick",function(O){var E=w.getMouseInfo(O);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var M=w.props.onClick;ke(M)&&M(P,O)}}),Te(w,"handleMouseDown",function(O){var E=w.props.onMouseDown;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"handleMouseUp",function(O){var E=w.props.onMouseUp;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"handleTouchMove",function(O){O.changedTouches!=null&&O.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(O.changedTouches[0])}),Te(w,"handleTouchStart",function(O){O.changedTouches!=null&&O.changedTouches.length>0&&w.handleMouseDown(O.changedTouches[0])}),Te(w,"handleTouchEnd",function(O){O.changedTouches!=null&&O.changedTouches.length>0&&w.handleMouseUp(O.changedTouches[0])}),Te(w,"handleDoubleClick",function(O){var E=w.props.onDoubleClick;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"handleContextMenu",function(O){var E=w.props.onContextMenu;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"triggerSyncEvent",function(O){w.props.syncId!==void 0&&Bv.emit(xv,w.props.syncId,O,w.eventEmitterSymbol)}),Te(w,"applySyncEvent",function(O){var E=w.props,P=E.layout,M=E.syncMethod,R=w.state.updateId,H=O.dataStartIndex,T=O.dataEndIndex;if(O.dataStartIndex!==void 0||O.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:H,dataEndIndex:T},b({props:w.props,dataStartIndex:H,dataEndIndex:T,updateId:R},w.state)));else if(O.activeTooltipIndex!==void 0){var L=O.chartX,G=O.chartY,U=O.activeTooltipIndex,K=w.state,z=K.offset,D=K.tooltipTicks;if(!z)return;if(typeof M=="function")U=M(D,O);else if(M==="value"){U=-1;for(var Y=0;Y<D.length;Y++)if(D[Y].value===O.activeLabel){U=Y;break}}var Q=ae(ae({},z),{},{x:z.left,y:z.top}),N=Math.min(L,Q.x+Q.width),q=Math.min(G,Q.y+Q.height),J=D[U]&&D[U].value,ue=og(w.state,w.props.data,U),he=D[U]?{x:P==="horizontal"?D[U].coordinate:N,y:P==="horizontal"?q:D[U].coordinate}:YW;w.setState(ae(ae({},O),{},{activeLabel:J,activeCoordinate:he,activePayload:ue,activeTooltipIndex:U}))}else w.setState(O)}),Te(w,"renderCursor",function(O){var E,P=w.state,M=P.isTooltipActive,R=P.activeCoordinate,H=P.activePayload,T=P.offset,L=P.activeTooltipIndex,G=P.tooltipAxisBandSize,U=w.getTooltipEventType(),K=(E=O.props.active)!==null&&E!==void 0?E:M,z=w.props.layout,D=O.key||"_recharts-cursor";return j.createElement(jY,{key:D,activeCoordinate:R,activePayload:H,activeTooltipIndex:L,chartName:n,element:O,isActive:K,layout:z,offset:T,tooltipAxisBandSize:G,tooltipEventType:U})}),Te(w,"renderPolarAxis",function(O,E,P){var M=On(O,"type.axisType"),R=On(w.state,"".concat(M,"Map")),H=O.type.defaultProps,T=H!==void 0?ae(ae({},H),O.props):O.props,L=R&&R[T["".concat(M,"Id")]];return X.cloneElement(O,ae(ae({},L),{},{className:je(M,L.className),key:O.key||"".concat(E,"-").concat(P),ticks:qr(L,!0)}))}),Te(w,"renderPolarGrid",function(O){var E=O.props,P=E.radialLines,M=E.polarAngles,R=E.polarRadius,H=w.state,T=H.radiusAxisMap,L=H.angleAxisMap,G=_a(T),U=_a(L),K=U.cx,z=U.cy,D=U.innerRadius,Y=U.outerRadius;return X.cloneElement(O,{polarAngles:Array.isArray(M)?M:qr(U,!0).map(function(Q){return Q.coordinate}),polarRadius:Array.isArray(R)?R:qr(G,!0).map(function(Q){return Q.coordinate}),cx:K,cy:z,innerRadius:D,outerRadius:Y,key:O.key||"polar-grid",radialLines:P})}),Te(w,"renderLegend",function(){var O=w.state.formattedGraphicalItems,E=w.props,P=E.children,M=E.width,R=E.height,H=w.props.margin||{},T=M-(H.left||0)-(H.right||0),L=PO({children:P,formattedGraphicalItems:O,legendWidth:T,legendContent:f});if(!L)return null;var G=L.item,U=B4(L,HY);return X.cloneElement(G,ae(ae({},U),{},{chartWidth:M,chartHeight:R,margin:H,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Te(w,"renderTooltip",function(){var O,E=w.props,P=E.children,M=E.accessibilityLayer,R=Sn(P,_n);if(!R)return null;var H=w.state,T=H.isTooltipActive,L=H.activeCoordinate,G=H.activePayload,U=H.activeLabel,K=H.offset,z=(O=R.props.active)!==null&&O!==void 0?O:T;return X.cloneElement(R,{viewBox:ae(ae({},K),{},{x:K.left,y:K.top}),active:z,label:U,payload:z?G:[],coordinate:L,accessibilityLayer:M})}),Te(w,"renderBrush",function(O){var E=w.props,P=E.margin,M=E.data,R=w.state,H=R.offset,T=R.dataStartIndex,L=R.dataEndIndex,G=R.updateId;return X.cloneElement(O,{key:O.key||"_recharts-brush",onChange:bc(w.handleBrushChange,O.props.onChange),data:M,x:le(O.props.x)?O.props.x:H.left,y:le(O.props.y)?O.props.y:H.top+H.height+H.brushBottom-(P.bottom||0),width:le(O.props.width)?O.props.width:H.width,startIndex:T,endIndex:L,updateId:"brush-".concat(G)})}),Te(w,"renderReferenceElement",function(O,E,P){if(!O)return null;var M=w,R=M.clipPathId,H=w.state,T=H.xAxisMap,L=H.yAxisMap,G=H.offset,U=O.type.defaultProps||{},K=O.props,z=K.xAxisId,D=z===void 0?U.xAxisId:z,Y=K.yAxisId,Q=Y===void 0?U.yAxisId:Y;return X.cloneElement(O,{key:O.key||"".concat(E,"-").concat(P),xAxis:T[D],yAxis:L[Q],viewBox:{x:G.left,y:G.top,width:G.width,height:G.height},clipPathId:R})}),Te(w,"renderActivePoints",function(O){var E=O.item,P=O.activePoint,M=O.basePoint,R=O.childIndex,H=O.isRange,T=[],L=E.props.key,G=E.item.type.defaultProps!==void 0?ae(ae({},E.item.type.defaultProps),E.item.props):E.item.props,U=G.activeDot,K=G.dataKey,z=ae(ae({index:R,dataKey:K,cx:P.x,cy:P.y,r:4,fill:ub(E.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},_e(U,!1)),Ec(U));return T.push(S.renderActiveDot(U,z,"".concat(L,"-activePoint-").concat(R))),M?T.push(S.renderActiveDot(U,ae(ae({},z),{},{cx:M.x,cy:M.y}),"".concat(L,"-basePoint-").concat(R))):H&&T.push(null),T}),Te(w,"renderGraphicChild",function(O,E,P){var M=w.filterFormatItem(O,E,P);if(!M)return null;var R=w.getTooltipEventType(),H=w.state,T=H.isTooltipActive,L=H.tooltipAxis,G=H.activeTooltipIndex,U=H.activeLabel,K=w.props.children,z=Sn(K,_n),D=M.props,Y=D.points,Q=D.isRange,N=D.baseLine,q=M.item.type.defaultProps!==void 0?ae(ae({},M.item.type.defaultProps),M.item.props):M.item.props,J=q.activeDot,ue=q.hide,he=q.activeBar,ye=q.activeShape,ge=!!(!ue&&T&&z&&(J||he||ye)),fe={};R!=="axis"&&z&&z.props.trigger==="click"?fe={onClick:bc(w.handleItemMouseEnter,O.props.onClick)}:R!=="axis"&&(fe={onMouseLeave:bc(w.handleItemMouseLeave,O.props.onMouseLeave),onMouseEnter:bc(w.handleItemMouseEnter,O.props.onMouseEnter)});var ne=X.cloneElement(O,ae(ae({},M.props),fe));function de(vt){return typeof L.dataKey=="function"?L.dataKey(vt.payload):null}if(ge)if(G>=0){var pe,re;if(L.dataKey&&!L.allowDuplicatedCategory){var Re=typeof L.dataKey=="function"?de:"payload.".concat(L.dataKey.toString());pe=kc(Y,Re,U),re=Q&&N&&kc(N,Re,U)}else pe=Y==null?void 0:Y[G],re=Q&&N&&N[G];if(ye||he){var Pe=O.props.activeIndex!==void 0?O.props.activeIndex:G;return[X.cloneElement(O,ae(ae(ae({},M.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ee(pe))return[ne].concat($i(w.renderActivePoints({item:M,activePoint:pe,basePoint:re,childIndex:G,isRange:Q})))}else{var Ce,Ae=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},qe=Ae.graphicalItem,He=qe.item,Fe=He===void 0?O:He,Ke=qe.childIndex,Bt=ae(ae(ae({},M.props),fe),{},{activeIndex:Ke});return[X.cloneElement(Fe,Bt),null,null]}return Q?[ne,null,null]:[ne,null]}),Te(w,"renderCustomized",function(O,E,P){return X.cloneElement(O,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Te(w,"renderMap",{CartesianGrid:{handler:Pc,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Pc},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Pc},YAxis:{handler:Pc},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((A=_.id)!==null&&A!==void 0?A:Ha("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=PA(w.triggeredAfterMouseMove,(W=_.throttleDelay)!==null&&W!==void 0?W:1e3/60),w.state={},w}return QY(S,g),VY(S,[{key:"componentDidMount",value:function(){var A,W;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(W=this.props.margin.top)!==null&&W!==void 0?W:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var A=this.props,W=A.children,w=A.data,O=A.height,E=A.layout,P=Sn(W,_n);if(P){var M=P.props.defaultIndex;if(!(typeof M!="number"||M<0||M>this.state.tooltipTicks.length-1)){var R=this.state.tooltipTicks[M]&&this.state.tooltipTicks[M].value,H=og(this.state,w,M,R),T=this.state.tooltipTicks[M].coordinate,L=(this.state.offset.top+O)/2,G=E==="horizontal",U=G?{x:T,y:L}:{y:T,x:L},K=this.state.formattedGraphicalItems.find(function(D){var Y=D.item;return Y.type.name==="Scatter"});K&&(U=ae(ae({},U),K.props.points[M].tooltipPosition),H=K.props.points[M].tooltipPayload);var z={activeTooltipIndex:M,isTooltipActive:!0,activeLabel:R,activePayload:H,activeCoordinate:U};this.setState(z),this.renderCursor(P),this.accessibilityManager.setIndex(M)}}}},{key:"getSnapshotBeforeUpdate",value:function(A,W){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==W.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==A.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==A.margin){var w,O;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0}})}return null}},{key:"componentDidUpdate",value:function(A){Hv([Sn(A.children,_n)],[Sn(this.props.children,_n)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var A=Sn(this.props.children,_n);if(A&&typeof A.props.shared=="boolean"){var W=A.props.shared?"axis":"item";return l.indexOf(W)>=0?W:i}return i}},{key:"getMouseInfo",value:function(A){if(!this.container)return null;var W=this.container,w=W.getBoundingClientRect(),O=F$(w),E={chartX:Math.round(A.pageX-O.left),chartY:Math.round(A.pageY-O.top)},P=w.width/W.offsetWidth||1,M=this.inRange(E.chartX,E.chartY,P);if(!M)return null;var R=this.state,H=R.xAxisMap,T=R.yAxisMap,L=this.getTooltipEventType(),G=w4(this.state,this.props.data,this.props.layout,M);if(L!=="axis"&&H&&T){var U=_a(H).scale,K=_a(T).scale,z=U&&U.invert?U.invert(E.chartX):null,D=K&&K.invert?K.invert(E.chartY):null;return ae(ae({},E),{},{xValue:z,yValue:D},G)}return G?ae(ae({},E),G):null}},{key:"inRange",value:function(A,W){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,O=this.props.layout,E=A/w,P=W/w;if(O==="horizontal"||O==="vertical"){var M=this.state.offset,R=E>=M.left&&E<=M.left+M.width&&P>=M.top&&P<=M.top+M.height;return R?{x:E,y:P}:null}var H=this.state,T=H.angleAxisMap,L=H.radiusAxisMap;if(T&&L){var G=_a(T);return PS({x:E,y:P},G)}return null}},{key:"parseEventsOfWrapper",value:function(){var A=this.props.children,W=this.getTooltipEventType(),w=Sn(A,_n),O={};w&&W==="axis"&&(w.props.trigger==="click"?O={onClick:this.handleClick}:O={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var E=Ec(this.props,this.handleOuterEvent);return ae(ae({},E),O)}},{key:"addListener",value:function(){Bv.on(xv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Bv.removeListener(xv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(A,W,w){for(var O=this.state.formattedGraphicalItems,E=0,P=O.length;E<P;E++){var M=O[E];if(M.item===A||M.props.key===A.key||W===Ur(M.item.type)&&w===M.childIndex)return M}return null}},{key:"renderClipPath",value:function(){var A=this.clipPathId,W=this.state.offset,w=W.left,O=W.top,E=W.height,P=W.width;return j.createElement("defs",null,j.createElement("clipPath",{id:A},j.createElement("rect",{x:w,y:O,height:E,width:P})))}},{key:"getXScales",value:function(){var A=this.state.xAxisMap;return A?Object.entries(A).reduce(function(W,w){var O=I4(w,2),E=O[0],P=O[1];return ae(ae({},W),{},Te({},E,P.scale))},{}):null}},{key:"getYScales",value:function(){var A=this.state.yAxisMap;return A?Object.entries(A).reduce(function(W,w){var O=I4(w,2),E=O[0],P=O[1];return ae(ae({},W),{},Te({},E,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(A){var W;return(W=this.state.xAxisMap)===null||W===void 0||(W=W[A])===null||W===void 0?void 0:W.scale}},{key:"getYScaleByAxisId",value:function(A){var W;return(W=this.state.yAxisMap)===null||W===void 0||(W=W[A])===null||W===void 0?void 0:W.scale}},{key:"getItemByXY",value:function(A){var W=this.state,w=W.formattedGraphicalItems,O=W.activeItem;if(w&&w.length)for(var E=0,P=w.length;E<P;E++){var M=w[E],R=M.props,H=M.item,T=H.type.defaultProps!==void 0?ae(ae({},H.type.defaultProps),H.props):H.props,L=Ur(H.type);if(L==="Bar"){var G=(R.data||[]).find(function(D){return cz(A,D)});if(G)return{graphicalItem:M,payload:G}}else if(L==="RadialBar"){var U=(R.data||[]).find(function(D){return PS(A,D)});if(U)return{graphicalItem:M,payload:U}}else if(f0(M,O)||d0(M,O)||Hs(M,O)){var K=EU({graphicalItem:M,activeTooltipItem:O,itemData:T.data}),z=T.activeIndex===void 0?K:T.activeIndex;return{graphicalItem:ae(ae({},M),{},{childIndex:z}),payload:Hs(M,O)?T.data[K]:M.props.data[K]}}}return null}},{key:"render",value:function(){var A=this;if(!RB(this))return null;var W=this.props,w=W.children,O=W.className,E=W.width,P=W.height,M=W.style,R=W.compact,H=W.title,T=W.desc,L=B4(W,DY),G=_e(L,!1);if(R)return j.createElement(X3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},j.createElement($v,ui({},G,{width:E,height:P,title:H,desc:T}),this.renderClipPath(),HB(w,this.renderMap)));if(this.props.accessibilityLayer){var U,K;G.tabIndex=(U=this.props.tabIndex)!==null&&U!==void 0?U:0,G.role=(K=this.props.role)!==null&&K!==void 0?K:"application",G.onKeyDown=function(D){A.accessibilityManager.keyboardEvent(D)},G.onFocus=function(){A.accessibilityManager.focus()}}var z=this.parseEventsOfWrapper();return j.createElement(X3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},j.createElement("div",ui({className:je("recharts-wrapper",O),style:ae({position:"relative",cursor:"default",width:E,height:P},M)},z,{ref:function(Y){A.container=Y}}),j.createElement($v,ui({},G,{width:E,height:P,title:H,desc:T,style:nQ}),this.renderClipPath(),HB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(X.Component);Te(x,"displayName",n),Te(x,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},h)),Te(x,"getDerivedStateFromProps",function(g,S){var _=g.dataKey,A=g.data,W=g.children,w=g.width,O=g.height,E=g.layout,P=g.stackOffset,M=g.margin,R=S.dataStartIndex,H=S.dataEndIndex;if(S.updateId===void 0){var T=P4(g);return ae(ae(ae({},T),{},{updateId:0},b(ae(ae({props:g},T),{},{updateId:0}),S)),{},{prevDataKey:_,prevData:A,prevWidth:w,prevHeight:O,prevLayout:E,prevStackOffset:P,prevMargin:M,prevChildren:W})}if(_!==S.prevDataKey||A!==S.prevData||w!==S.prevWidth||O!==S.prevHeight||E!==S.prevLayout||P!==S.prevStackOffset||!si(M,S.prevMargin)){var L=P4(g),G={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},U=ae(ae({},w4(S,A,E)),{},{updateId:S.updateId+1}),K=ae(ae(ae({},L),G),U);return ae(ae(ae({},K),b(ae({props:g},K),S)),{},{prevDataKey:_,prevData:A,prevWidth:w,prevHeight:O,prevLayout:E,prevStackOffset:P,prevMargin:M,prevChildren:W})}if(!Hv(W,S.prevChildren)){var z,D,Y,Q,N=Sn(W,Ai),q=N&&(z=(D=N.props)===null||D===void 0?void 0:D.startIndex)!==null&&z!==void 0?z:R,J=N&&(Y=(Q=N.props)===null||Q===void 0?void 0:Q.endIndex)!==null&&Y!==void 0?Y:H,ue=q!==R||J!==H,he=!Ee(A),ye=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ye},b(ae(ae({props:g},S),{},{updateId:ye,dataStartIndex:q,dataEndIndex:J}),S)),{},{prevChildren:W,dataStartIndex:q,dataEndIndex:J})}return null}),Te(x,"renderActiveDot",function(g,S,_){var A;return X.isValidElement(g)?A=X.cloneElement(g,S):ke(g)?A=g(S):A=j.createElement(Js,S),j.createElement(De,{className:"recharts-active-dot",key:_},A)});var I=X.forwardRef(function(S,_){return j.createElement(x,ui({},S,{ref:_}))});return I.displayName=x.displayName,I},fQ=x0({chartName:"LineChart",GraphicalChild:Fr,axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Ir}],formatAxisMap:lb}),dQ=x0({chartName:"BarChart",GraphicalChild:Pr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Ir}],formatAxisMap:lb}),hQ=x0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:p0},{axisType:"radiusAxis",AxisComp:l0}],formatAxisMap:Bq,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),mQ=x0({chartName:"ComposedChart",GraphicalChild:[Fr,So,Pr,I0],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Ir},{axisType:"zAxis",AxisComp:b0}],formatAxisMap:lb});const _4=({active:e,payload:t,label:n})=>e&&t&&t.length?k.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[k.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),k.jsxs("div",{className:"space-y-1",children:[k.jsxs("p",{className:"text-sm",children:[k.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),k.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),k.jsxs("p",{className:"text-sm",children:[k.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),k.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),k.jsxs("p",{className:"text-sm",children:[k.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),k.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function XW({data:e,title:t,instanceId:n}){var b,x;const r=X.useId(),a=t||"Sessions & Escalation Trends",i=e.length<=3&&((x=(b=e[0])==null?void 0:b.week)==null?void 0:x.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,p=`chart-${l}-${e.length}`,f=e.map((I,g)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${g}`})),d=`colorSessions-${l}`,h=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return k.jsxs(zn,{className:"shadow-xl border-0",children:[k.jsx(Rp,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:k.jsxs("div",{className:"flex items-start justify-between",children:[k.jsxs("div",{children:[k.jsx(jp,{className:"text-2xl font-black text-gray-900",children:a}),k.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),k.jsxs("div",{className:"flex gap-2",children:[k.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[k.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),k.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),k.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[k.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),k.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),k.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[k.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),k.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),k.jsx(Un,{className:"p-6 bg-white",children:k.jsx(Rg,{width:"100%",height:400,children:i?k.jsxs(mQ,{data:f,barGap:8,barCategoryGap:"20%",children:[k.jsxs("defs",{children:[k.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[k.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${d}-stop-1`),k.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${d}-stop-2`)]}),k.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[k.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${h}-stop-1`),k.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${h}-stop-2`)]})]}),k.jsx(Op,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),k.jsx(Ra,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),k.jsx(Ir,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),k.jsx(Ir,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),k.jsx(_n,{content:k.jsx(_4,{})},`tooltip-${l}`),k.jsx(Ma,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),k.jsx(Pr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${d})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),k.jsx(Pr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${h})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),k.jsx(Fr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p):k.jsxs(fQ,{data:f,children:[k.jsx("defs",{children:k.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[k.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),k.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),k.jsx(Op,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),k.jsx(Ra,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),k.jsx(Ir,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),k.jsx(Ir,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),k.jsx(_n,{content:k.jsx(_4,{})},`tooltip-${l}`),k.jsx(Ma,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),k.jsx(Fr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),k.jsx(Fr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),k.jsx(Fr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p)})})]})}const A4=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function ZW({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return k.jsxs(zn,{children:[k.jsxs(Rp,{children:[k.jsx(jp,{children:r}),k.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),k.jsx(Un,{children:k.jsx(Rg,{width:"100%",height:300,children:k.jsxs(hQ,{children:[k.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:i.map(s=>k.jsx(Ks,{fill:A4[i.indexOf(s)%A4.length]},s.uniqueKey))},`pie-${a}`),k.jsx(_n,{formatter:(s,l,p)=>[`${s.toLocaleString()} sessions (${p.payload.percentage.toFixed(1)}%)`,p.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function vQ({data:e}){const t=e.reduce((a,i)=>{const s=a.find(l=>l.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),n=t.slice(0,10),r=t.reduce((a,i)=>a+i.count,0);return k.jsxs(zn,{children:[k.jsxs(Rp,{children:[k.jsx(jp,{children:"Product Breakdown (Human Handled)"}),k.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),k.jsx(Un,{children:k.jsx(Rg,{width:"100%",height:300,children:k.jsxs(dQ,{data:n,children:[k.jsx(Op,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),k.jsx(Ra,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),k.jsx(Ir,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),k.jsx(_n,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),k.jsx(Pr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function JW({className:e,...t}){return k.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:k.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function eM({className:e,...t}){return k.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function tM({className:e,...t}){return k.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function ss({className:e,...t}){return k.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return k.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function qn({className:e,...t}){return k.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function yQ({data:e}){const[t,n]=X.useState(new Set),r=a=>{const i=new Set(t);i.has(a)?i.delete(a):i.add(a),n(i)};return k.jsx("div",{className:"border rounded-lg overflow-hidden",children:k.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:k.jsxs(JW,{children:[k.jsx(eM,{className:"bg-gray-50 sticky top-0 z-10",children:k.jsxs(ss,{children:[k.jsx(Dr,{className:"w-12"}),k.jsx(Dr,{children:"Issue Type"}),k.jsx(Dr,{className:"text-right",children:"Count"})]})}),k.jsx(tM,{children:e.flatMap((a,i)=>{const s=t.has(a.issue),l=[k.jsxs(ss,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[k.jsx(qn,{children:s?k.jsx(HE,{className:"w-4 h-4"}):k.jsx($E,{className:"w-4 h-4"})}),k.jsx(qn,{className:"font-medium",children:a.issue}),k.jsx(qn,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((p,f)=>{l.push(k.jsxs(ss,{className:"bg-blue-50",children:[k.jsx(qn,{}),k.jsx(qn,{className:"pl-8",children:k.jsxs("div",{children:[k.jsx("div",{className:"font-medium text-sm text-gray-900",children:p.subType}),k.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:p.products.map((d,h)=>k.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[d.product," ",k.jsxs("span",{className:"ml-1 font-semibold",children:["(",d.count,")"]})]},`${a.issue}-${p.subType}-${d.product}-${h}`))})]})}),k.jsx(qn,{className:"text-right",children:p.count})]},`${a.issue}-${p.subType}-${f}`))}),l})})]})})})}function gQ({data:e}){const[t,n]=X.useState("createdAt"),[r,a]=X.useState("desc"),i=p=>{t===p?a(r==="asc"?"desc":"asc"):(n(p),a("asc"))},s=[...e].sort((p,f)=>{let d=p[t],h=f[t];return t==="createdAt"?(d=yr(p.createdAt).getTime(),h=yr(f.createdAt).getTime()):(d=(d||"").toLowerCase(),h=(h||"").toLowerCase()),r==="asc"?d>h?1:-1:d<h?1:-1}),l=({field:p,children:f})=>k.jsxs("button",{onClick:()=>i(p),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[f,k.jsx(TE,{className:"w-4 h-4"})]});return k.jsx("div",{className:"border rounded-lg overflow-hidden",children:k.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:k.jsxs(JW,{children:[k.jsx(eM,{className:"bg-gray-50 sticky top-0 z-10",children:k.jsxs(ss,{children:[k.jsx(Dr,{children:k.jsx(l,{field:"createdAt",children:"Date"})}),k.jsx(Dr,{children:k.jsx(l,{field:"channel",children:"Channel"})}),k.jsx(Dr,{children:k.jsx(l,{field:"product",children:"Product"})}),k.jsx(Dr,{children:k.jsx(l,{field:"issue",children:"Issue"})}),k.jsx(Dr,{children:k.jsx(l,{field:"subType",children:"Sub Type"})}),k.jsx(Dr,{children:k.jsx(l,{field:"handled",children:"Handled By"})})]})}),k.jsx(tM,{children:s.map((p,f)=>k.jsxs(ss,{children:[k.jsx(qn,{className:"whitespace-nowrap",children:JN(yr(p.createdAt))}),k.jsx(qn,{children:p.channel}),k.jsx(qn,{children:p.product||"-"}),k.jsx(qn,{children:p.issue||"-"}),k.jsx(qn,{children:p.subType||"-"}),k.jsx(qn,{children:k.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${p.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:p.handled})})]},f))})]})})})}function nM({metrics:e,topChannel:t,top5Products:n,top5Issues:r,monthCount:a}){return k.jsxs(zn,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[k.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:k.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),k.jsxs("div",{children:[k.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),k.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),k.jsxs(Un,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[k.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[k.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[k.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:k.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:k.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),k.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),k.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),k.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[k.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:k.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),k.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),k.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),k.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[k.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:k.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),k.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),k.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),k.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[k.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:k.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),k.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(t==null?void 0:t.channel)||"N/A"}),k.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((t==null?void 0:t.percentage)||0).toFixed(1),"% Share"]})]})]}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[k.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[k.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:k.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:k.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),k.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),k.jsx("div",{className:"space-y-2 relative z-10",children:n.map((i,s)=>k.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[k.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[k.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.product||"N/A"]}),k.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},s))})]}),k.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[k.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:k.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:k.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),k.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),k.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,s)=>k.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[k.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[k.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.issue||"N/A"]}),k.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},s))})]})]})]})]})}function bQ({monthsData:e,weeklyEscalation:t}){const n=e.flatMap(l=>l.data),r=Ev(n),a=Tv(n)[0],i=w_(n).slice(0,5),s=Nv(n,5);return k.jsxs(k.Fragment,{children:[k.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[k.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),k.jsx(Un,{className:"p-5 relative z-10",children:k.jsxs("div",{className:"text-center text-white",children:[k.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[k.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:k.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),k.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),k.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),k.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>{const p=Nv(l.data,3);return k.jsxs(zn,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[k.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),k.jsx(Rp,{className:"text-white pb-3 pt-4 relative z-10",children:k.jsxs("div",{className:"text-center",children:[k.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[k.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:k.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),k.jsx(jp,{className:"text-2xl font-black mb-3 drop-shadow",children:l.name}),k.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[k.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),k.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:l.data.length.toLocaleString()}),l.data.length<200&&k.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),k.jsxs(Un,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[k.jsxs("div",{className:"space-y-2 mb-4",children:[k.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[k.jsxs("div",{className:"flex justify-between items-center mb-1",children:[k.jsxs("div",{className:"flex items-center gap-1.5",children:[k.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:k.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),k.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),k.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:k.jsxs("p",{className:"text-sm font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),k.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),k.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[k.jsxs("div",{className:"flex justify-between items-center mb-1",children:[k.jsxs("div",{className:"flex items-center gap-1.5",children:[k.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:k.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),k.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),k.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:k.jsxs("p",{className:"text-sm font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),k.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]})]}),k.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[k.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),k.jsx("div",{className:"space-y-1.5",children:p.map((f,d)=>k.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[k.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),k.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},d))})]})]})]},l.name)})}),k.jsx(XW,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),k.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>k.jsx(ZW,{data:l.channels,title:`${l.name} - Channels`},l.name))}),k.jsx(nM,{metrics:r,topChannel:a,top5Products:i,top5Issues:s,monthCount:e.length})]})}const IQ=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Inapp,2026-01-01,RV Mini Cam,Tech Query ,,Human
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
Inapp,2026-01-02,PM,Tech Query ,,Human
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
Inapp,2026-01-09,PM,Tech Query ,,Human
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
Webapp,2026-01-10,PM,Tech Query ,,Human
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
Webapp,2026-01-13,PM,Tech Query ,,Human
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
Webapp,2026-01-15,RV Mini Cam,Tech Query ,,Human
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
Webapp,2026-01-17,4g mini,Tech Query ,,Human
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
Webapp,2026-01-18,4g mini,Tech Query ,,Human
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
Inapp,2026-02-06,Waggle Cam pro,Connection, Not connecting,Human
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
Inapp,2026-02-14,PM,Display ,,Human
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
Inapp,2026-04-27,,,,Bot`,BQ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQmdcr8EaeN04nsRVatF2B0lVYCOpsrvnFoldLpPjuRBXeOcHL1KGCQRbCw62A78cVtxxY2fW246vB/pub?output=csv";function xQ(){const[e,t]=X.useState([]),[n,r]=X.useState([]),[a,i]=X.useState("all"),[s,l]=X.useState("all"),[p,f]=X.useState([]),[d,h]=X.useState("overview"),[v,b]=X.useState(null),x=X.useRef(null),[I,g]=X.useState(null),S=X.useRef([]);X.useEffect(()=>{S.current=e},[e]);const _=L=>{if(!L)return L;const G=L.trim(),U=G.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(U){const[,z,D,Y]=U;return`${Y.padStart(2,"0")}-${D.padStart(2,"0")}-${z}`}const K=G.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(K){const[,z,D,Y]=K;return`${z.padStart(2,"0")}-${D.padStart(2,"0")}-${Y}`}return G};X.useEffect(()=>{let L=[];const G=U=>{y2.parse(BQ,{download:!0,header:!0,skipEmptyLines:!0,complete:K=>{if(K.data&&K.data.length>0){const z=K.data.map(D=>({channel:D.Channel||D.channel||"",createdAt:_(D["Created at"]||D.createdAt||D["Created date"]||""),product:D.Product||D.product||"",issue:D.Issue||D.issue||"",subType:D["Sub Type"]||D.subType||"",handled:D.Handled||D.handled||""}));t(D=>{const Y=new Set(D.map(N=>`${N.channel}|${N.createdAt}|${N.product}|${N.issue}|${N.subType}|${N.handled}`)),Q=z.filter(N=>!Y.has(`${N.channel}|${N.createdAt}|${N.product}|${N.issue}|${N.subType}|${N.handled}`));return[...D,...Q]}),b(new Date().toLocaleTimeString())}}})};y2.parse(IQ,{header:!0,skipEmptyLines:!0,complete:U=>{L=U.data.map(z=>({channel:z.Channel||z.channel||"",createdAt:_(z["Created at"]||z.createdAt||z["Created date"]||""),product:z.Product||z.product||"",issue:z.Issue||z.issue||"",subType:z["Sub Type"]||z.subType||"",handled:z.Handled||z.handled||""}));const K=localStorage.getItem("waggle_manual_data");if(K)try{const z=JSON.parse(K);Array.isArray(z)&&(L=[...L,...z])}catch{}t(L),G()}})},[]);const A=X.useMemo(()=>{const L=["january","february","march","april","may","june","july","august","september","october","november","december"],G=new Set;return e.forEach(U=>{try{const K=yr(U.createdAt);isNaN(K.getTime())||G.add(`${Mc(K,"MMMM").toLowerCase()}-${K.getFullYear()}`)}catch{}}),Array.from(G).sort((U,K)=>{const[z,D]=U.split("-"),[Y,Q]=K.split("-");return D!==Q?parseInt(D)-parseInt(Q):L.indexOf(z)-L.indexOf(Y)})},[e]);X.useEffect(()=>{f(a&&a!=="all"?B_(a):[]),l("all")},[a]),X.useEffect(()=>{e.length>0&&w(a,s)},[s,a,e]);const W=L=>{var U;const G=(U=L.target.files)==null?void 0:U[0];G&&(y2.parse(G,{header:!0,skipEmptyLines:!0,complete:K=>{if(!K.data.length){g({type:"error",message:"The CSV file appears to be empty."});return}const z=K.data.map(Q=>({channel:Q.Channel||Q.channel||"",createdAt:_(Q["Created at"]||Q.createdAt||""),product:Q.Product||Q.product||"",issue:Q.Issue||Q.issue||"",subType:Q["Sub Type"]||Q.subType||"",handled:Q.Handled||Q.handled||""})),D=new Set(S.current.map(Q=>`${Q.channel}|${Q.createdAt}|${Q.product}|${Q.issue}|${Q.subType}|${Q.handled}`)),Y=z.filter(Q=>!D.has(`${Q.channel}|${Q.createdAt}|${Q.product}|${Q.issue}|${Q.subType}|${Q.handled}`));if(Y.length>0){const Q=[...JSON.parse(localStorage.getItem("waggle_manual_data")||"[]"),...Y];localStorage.setItem("waggle_manual_data",JSON.stringify(Q)),t(N=>[...N,...Y])}g({type:Y.length>0?"success":"error",message:Y.length>0?`Added ${Y.length} rows.`:"No new rows found."}),setTimeout(()=>g(null),5e3)}}),L.target.value="")},w=(L,G)=>{let U=e;if(L!=="all"&&(U=e.filter(K=>kv(yr(K.createdAt),L))),G!=="all"){const K=p.find(z=>z.value===G);K&&(U=U.filter(z=>x_(yr(z.createdAt),K)))}r(U)},O=Ev(n),E=Tv(n),P=w_(n),M=tR(n),R=eR(e,a),H=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],T=(a==="all"?A:[a]).map((L,G)=>{const U=e.filter(Y=>kv(yr(Y.createdAt),L)),[K,z]=L.split("-"),D=H[G%H.length];return{name:`${K.charAt(0).toUpperCase()+K.slice(1)} ${z}`,shortName:`Month ${G+1}`,data:U,metrics:Ev(U),channels:Tv(U),colorFrom:D.from,colorTo:D.to}});return k.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:k.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[k.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"text-3xl font-bold",children:"Waggle AI Chatbot Dashboard"}),k.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),k.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[k.jsxs("select",{value:a,onChange:L=>i(L.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[k.jsx("option",{value:"all",children:"All Months"}),A.map(L=>k.jsxs("option",{value:L,children:[L.split("-")[0].charAt(0).toUpperCase()+L.split("-")[0].slice(1)," ",L.split("-")[1]]},L))]}),k.jsxs("select",{value:s,onChange:L=>l(L.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[k.jsx("option",{value:"all",children:"All Weeks"}),p.map(L=>k.jsx("option",{value:L.value,children:L.label},L.value))]}),k.jsx("input",{ref:x,type:"file",accept:".csv",onChange:W,className:"hidden"}),k.jsxs(bI,{onClick:()=>{var L;return(L=x.current)==null?void 0:L.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[k.jsx(qE,{className:"w-4 h-4 mr-2"})," Add Data"]}),k.jsxs(bI,{onClick:()=>nR(n),variant:"outline",className:"bg-white",children:[k.jsx(zE,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),I&&k.jsx(zn,{className:`border ${I.type==="success"?"bg-green-50":"bg-red-50"}`,children:k.jsxs(Un,{className:"p-4 flex items-center justify-between",children:[k.jsx("p",{className:"font-medium",children:I.message}),k.jsx("button",{onClick:()=>g(null),children:k.jsx(ZE,{className:"w-4 h-4"})})]})}),a==="all"&&k.jsx("div",{className:"flex justify-center",children:k.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[k.jsx("button",{onClick:()=>h("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${d==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),k.jsx("button",{onClick:()=>h("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${d==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&d==="overview"?k.jsx(bQ,{monthsData:T,weeklyEscalation:R}):k.jsxs(k.Fragment,{children:[k.jsx(rR,{metrics:O}),k.jsx(nM,{metrics:O,topChannel:E[0],top5Products:P.slice(0,5),top5Issues:Nv(n,5),monthCount:a==="all"?A.length:1}),k.jsx(XW,{data:R,instanceId:"detailed-analysis"}),k.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[k.jsx(ZW,{data:E}),k.jsx(vQ,{data:P})]}),k.jsx(zn,{children:k.jsx(Un,{className:"p-6",children:k.jsxs(AE,{defaultValue:"issues",className:"w-full",children:[k.jsxs(OE,{className:"grid w-full grid-cols-2 max-w-md",children:[k.jsx(II,{value:"issues",children:"Issue Analysis"}),k.jsx(II,{value:"sessions",children:"Detailed Sessions"})]}),k.jsx(BI,{value:"issues",className:"mt-6",children:k.jsx(yQ,{data:M})}),k.jsx(BI,{value:"sessions",className:"mt-6",children:k.jsx(gQ,{data:n})})]})})})]})]})})}sk.createRoot(document.getElementById("root")).render(k.jsx(xQ,{}));
