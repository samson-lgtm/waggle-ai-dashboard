var tk=Object.defineProperty;var nk=(e,t,n)=>t in e?tk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>nk(e,typeof t!="symbol"?t+"":t,n);function rk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d2={exports:{}},Du={},h2={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI;function ak(){if(rI)return Le;rI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(j){return j===null||typeof j!="object"?null:(j=d&&j[d]||j["@@iterator"],typeof j=="function"?j:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function b(j,F,J){this.props=j,this.context=F,this.refs=I,this.updater=J||y}b.prototype.isReactComponent={},b.prototype.setState=function(j,F){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,F,"setState")},b.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function S(){}S.prototype=b.prototype;function A(j,F,J){this.props=j,this.context=F,this.refs=I,this.updater=J||y}var _=A.prototype=new S;_.constructor=A,x(_,b.prototype),_.isPureReactComponent=!0;var M=Array.isArray,w=Object.prototype.hasOwnProperty,O={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(j,F,J){var ue,he={},ge=null,ye=null;if(F!=null)for(ue in F.ref!==void 0&&(ye=F.ref),F.key!==void 0&&(ge=""+F.key),F)w.call(F,ue)&&!E.hasOwnProperty(ue)&&(he[ue]=F[ue]);var fe=arguments.length-2;if(fe===1)he.children=J;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(j&&j.defaultProps)for(ue in fe=j.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:j,key:ge,ref:ye,props:he,_owner:O.current}}function C(j,F){return{$$typeof:e,type:j.type,key:F,ref:j.ref,props:j.props,_owner:j._owner}}function N(j){return typeof j=="object"&&j!==null&&j.$$typeof===e}function H(j){var F={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(J){return F[J]})}var T=/\/+/g;function $(j,F){return typeof j=="object"&&j!==null&&j.key!=null?H(""+j.key):F.toString(36)}function G(j,F,J,ue,he){var ge=typeof j;(ge==="undefined"||ge==="boolean")&&(j=null);var ye=!1;if(j===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(j.$$typeof){case e:case t:ye=!0}}if(ye)return ye=j,he=he(ye),j=ue===""?"."+$(ye,0):ue,M(he)?(J="",j!=null&&(J=j.replace(T,"$&/")+"/"),G(he,F,J,"",function(de){return de})):he!=null&&(N(he)&&(he=C(he,J+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(T,"$&/")+"/")+j)),F.push(he)),1;if(ye=0,ue=ue===""?".":ue+":",M(j))for(var fe=0;fe<j.length;fe++){ge=j[fe];var ne=ue+$(ge,fe);ye+=G(ge,F,J,ne,he)}else if(ne=v(j),typeof ne=="function")for(j=ne.call(j),fe=0;!(ge=j.next()).done;)ge=ge.value,ne=ue+$(ge,fe++),ye+=G(ge,F,J,ne,he);else if(ge==="object")throw F=String(j),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return ye}function U(j,F,J){if(j==null)return j;var ue=[],he=0;return G(j,ue,"","",function(ge){return F.call(J,ge,he++)}),ue}function z(j){if(j._status===-1){var F=j._result;F=F(),F.then(function(J){(j._status===0||j._status===-1)&&(j._status=1,j._result=J)},function(J){(j._status===0||j._status===-1)&&(j._status=2,j._result=J)}),j._status===-1&&(j._status=0,j._result=F)}if(j._status===1)return j._result.default;throw j._result}var Q={current:null},L={transition:null},K={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:L,ReactCurrentOwner:O};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:U,forEach:function(j,F,J){U(j,function(){F.apply(this,arguments)},J)},count:function(j){var F=0;return U(j,function(){F++}),F},toArray:function(j){return U(j,function(F){return F})||[]},only:function(j){if(!N(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Le.Component=b,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=A,Le.StrictMode=r,Le.Suspense=p,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Le.act=Y,Le.cloneElement=function(j,F,J){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var ue=x({},j.props),he=j.key,ge=j.ref,ye=j._owner;if(F!=null){if(F.ref!==void 0&&(ge=F.ref,ye=O.current),F.key!==void 0&&(he=""+F.key),j.type&&j.type.defaultProps)var fe=j.type.defaultProps;for(ne in F)w.call(F,ne)&&!E.hasOwnProperty(ne)&&(ue[ne]=F[ne]===void 0&&fe!==void 0?fe[ne]:F[ne])}var ne=arguments.length-2;if(ne===1)ue.children=J;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:j.type,key:he,ref:ge,props:ue,_owner:ye}},Le.createContext=function(j){return j={$$typeof:s,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:i,_context:j},j.Consumer=j},Le.createElement=P,Le.createFactory=function(j){var F=P.bind(null,j);return F.type=j,F},Le.createRef=function(){return{current:null}},Le.forwardRef=function(j){return{$$typeof:l,render:j}},Le.isValidElement=N,Le.lazy=function(j){return{$$typeof:m,_payload:{_status:-1,_result:j},_init:z}},Le.memo=function(j,F){return{$$typeof:f,type:j,compare:F===void 0?null:F}},Le.startTransition=function(j){var F=L.transition;L.transition={};try{j()}finally{L.transition=F}},Le.unstable_act=Y,Le.useCallback=function(j,F){return Q.current.useCallback(j,F)},Le.useContext=function(j){return Q.current.useContext(j)},Le.useDebugValue=function(){},Le.useDeferredValue=function(j){return Q.current.useDeferredValue(j)},Le.useEffect=function(j,F){return Q.current.useEffect(j,F)},Le.useId=function(){return Q.current.useId()},Le.useImperativeHandle=function(j,F,J){return Q.current.useImperativeHandle(j,F,J)},Le.useInsertionEffect=function(j,F){return Q.current.useInsertionEffect(j,F)},Le.useLayoutEffect=function(j,F){return Q.current.useLayoutEffect(j,F)},Le.useMemo=function(j,F){return Q.current.useMemo(j,F)},Le.useReducer=function(j,F,J){return Q.current.useReducer(j,F,J)},Le.useRef=function(j){return Q.current.useRef(j)},Le.useState=function(j){return Q.current.useState(j)},Le.useSyncExternalStore=function(j,F,J){return Q.current.useSyncExternalStore(j,F,J)},Le.useTransition=function(){return Q.current.useTransition()},Le.version="18.3.1",Le}var aI;function uy(){return aI||(aI=1,h2.exports=ak()),h2.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI;function ok(){if(oI)return Du;oI=1;var e=uy(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(l,p,f){var m,d={},v=null,y=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(y=p.ref);for(m in p)r.call(p,m)&&!i.hasOwnProperty(m)&&(d[m]=p[m]);if(l&&l.defaultProps)for(m in p=l.defaultProps,p)d[m]===void 0&&(d[m]=p[m]);return{$$typeof:t,type:l,key:v,ref:y,props:d,_owner:a.current}}return Du.Fragment=n,Du.jsx=s,Du.jsxs=s,Du}var iI;function ik(){return iI||(iI=1,d2.exports=ok()),d2.exports}var W=ik(),cc={},m2={exports:{}},vn={},v2={exports:{}},g2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI;function uk(){return uI||(uI=1,(function(e){function t(L,K){var Y=L.length;L.push(K);e:for(;0<Y;){var j=Y-1>>>1,F=L[j];if(0<a(F,K))L[j]=K,L[Y]=F,Y=j;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],Y=L.pop();if(Y!==K){L[0]=Y;e:for(var j=0,F=L.length,J=F>>>1;j<J;){var ue=2*(j+1)-1,he=L[ue],ge=ue+1,ye=L[ge];if(0>a(he,Y))ge<F&&0>a(ye,he)?(L[j]=ye,L[ge]=Y,j=ge):(L[j]=he,L[ue]=Y,j=ue);else if(ge<F&&0>a(ye,Y))L[j]=ye,L[ge]=Y,j=ge;else break e}}return K}function a(L,K){var Y=L.sortIndex-K.sortIndex;return Y!==0?Y:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var p=[],f=[],m=1,d=null,v=3,y=!1,x=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var K=n(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=L)r(f),K.sortIndex=K.expirationTime,t(p,K);else break;K=n(f)}}function M(L){if(I=!1,_(L),!x)if(n(p)!==null)x=!0,z(w);else{var K=n(f);K!==null&&Q(M,K.startTime-L)}}function w(L,K){x=!1,I&&(I=!1,S(P),P=-1),y=!0;var Y=v;try{for(_(K),d=n(p);d!==null&&(!(d.expirationTime>K)||L&&!H());){var j=d.callback;if(typeof j=="function"){d.callback=null,v=d.priorityLevel;var F=j(d.expirationTime<=K);K=e.unstable_now(),typeof F=="function"?d.callback=F:d===n(p)&&r(p),_(K)}else r(p);d=n(p)}if(d!==null)var J=!0;else{var ue=n(f);ue!==null&&Q(M,ue.startTime-K),J=!1}return J}finally{d=null,v=Y,y=!1}}var O=!1,E=null,P=-1,C=5,N=-1;function H(){return!(e.unstable_now()-N<C)}function T(){if(E!==null){var L=e.unstable_now();N=L;var K=!0;try{K=E(!0,L)}finally{K?$():(O=!1,E=null)}}else O=!1}var $;if(typeof A=="function")$=function(){A(T)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,U=G.port2;G.port1.onmessage=T,$=function(){U.postMessage(null)}}else $=function(){b(T,0)};function z(L){E=L,O||(O=!0,$())}function Q(L,K){P=b(function(){L(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,z(w))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(L){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return L()}finally{v=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=v;v=L;try{return K()}finally{v=Y}},e.unstable_scheduleCallback=function(L,K,Y){var j=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?j+Y:j):Y=j,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,L={id:m++,callback:K,priorityLevel:L,startTime:Y,expirationTime:F,sortIndex:-1},Y>j?(L.sortIndex=Y,t(f,L),n(p)===null&&L===n(f)&&(I?(S(P),P=-1):I=!0,Q(M,Y-j))):(L.sortIndex=F,t(p,L),x||y||(x=!0,z(w))),L},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(L){var K=v;return function(){var Y=v;v=K;try{return L.apply(this,arguments)}finally{v=Y}}}})(g2)),g2}var sI;function sk(){return sI||(sI=1,v2.exports=uk()),v2.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function lk(){if(lI)return vn;lI=1;var e=uy(),t=sk();function n(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,c=1;c<arguments.length;c++)u+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return p.call(d,o)?!0:p.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function y(o,u,c,h){if(c!==null&&c.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function x(o,u,c,h){if(u===null||typeof u>"u"||y(o,u,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,c,h,g,B,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=c,this.propertyName=o,this.type=u,this.sanitizeURL=B,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,A);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,A);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,A);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function _(o,u,c,h){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:h||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(x(u,c,g,h)&&(c=null),h||g===null?v(u)&&(c===null?o.removeAttribute(u):o.setAttribute(u,""+c)):g.mustUseProperty?o[g.propertyName]=c===null?g.type===3?!1:"":c:(u=g.attributeName,h=g.attributeNamespace,c===null?o.removeAttribute(u):(g=g.type,c=g===3||g===4&&c===!0?"":""+c,h?o.setAttributeNS(h,u,c):o.setAttribute(u,c))))}var M=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),O=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),H=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),L=Symbol.iterator;function K(o){return o===null||typeof o!="object"?null:(o=L&&o[L]||o["@@iterator"],typeof o=="function"?o:null)}var Y=Object.assign,j;function F(o){if(j===void 0)try{throw Error()}catch(c){var u=c.stack.trim().match(/\n( *(at )?)/);j=u&&u[1]||""}return`
`+j+o}var J=!1;function ue(o,u){if(!o||J)return"";J=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var h=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){h=te}o.call(u.prototype)}else{try{throw Error()}catch(te){h=te}o()}}catch(te){if(te&&h&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),B=h.stack.split(`
`),k=g.length-1,D=B.length-1;1<=k&&0<=D&&g[k]!==B[D];)D--;for(;1<=k&&0<=D;k--,D--)if(g[k]!==B[D]){if(k!==1||D!==1)do if(k--,D--,0>D||g[k]!==B[D]){var q=`
`+g[k].replace(" at new "," at ");return o.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",o.displayName)),q}while(1<=k&&0<=D);break}}}finally{J=!1,Error.prepareStackTrace=c}return(o=o?o.displayName||o.name:"")?F(o):""}function he(o){switch(o.tag){case 5:return F(o.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ge(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case E:return"Fragment";case O:return"Portal";case C:return"Profiler";case P:return"StrictMode";case $:return"Suspense";case G:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case H:return(o.displayName||"Context")+".Consumer";case N:return(o._context.displayName||"Context")+".Provider";case T:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case U:return u=o.displayName||null,u!==null?u:ge(o.type)||"Memo";case z:u=o._payload,o=o._init;try{return ge(o(u))}catch{}}return null}function ye(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ne(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=ne(o)?"checked":"value",c=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),h=""+o[u];if(!o.hasOwnProperty(u)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var g=c.get,B=c.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(k){h=""+k,B.call(this,k)}}),Object.defineProperty(o,u,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(k){h=""+k},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function pe(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var c=u.getValue(),h="";return o&&(h=ne(o)?o.checked?"true":"false":o.value),o=h,o!==c?(u.setValue(o),!0):!1}function Re(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var c=u.checked;return Y({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??o._wrapperState.initialChecked})}function Ce(o,u){var c=u.defaultValue==null?"":u.defaultValue,h=u.checked!=null?u.checked:u.defaultChecked;c=fe(u.value!=null?u.value:c),o._wrapperState={initialChecked:h,initialValue:c,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function _e(o,u){u=u.checked,u!=null&&_(o,"checked",u,!1)}function Fe(o,u){_e(o,u);var c=fe(u.value),h=u.type;if(c!=null)h==="number"?(c===0&&o.value===""||o.value!=c)&&(o.value=""+c):o.value!==""+c&&(o.value=""+c);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,c):u.hasOwnProperty("defaultValue")&&qe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function He(o,u,c){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var h=u.type;if(!(h!=="submit"&&h!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,c||u===o.value||(o.value=u),o.defaultValue=u}c=o.name,c!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,c!==""&&(o.name=c)}function qe(o,u,c){(u!=="number"||Re(o.ownerDocument)!==o)&&(c==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+c&&(o.defaultValue=""+c))}var Ke=Array.isArray;function Bt(o,u,c,h){if(o=o.options,u){u={};for(var g=0;g<c.length;g++)u["$"+c[g]]=!0;for(c=0;c<o.length;c++)g=u.hasOwnProperty("$"+o[c].value),o[c].selected!==g&&(o[c].selected=g),g&&h&&(o[c].defaultSelected=!0)}else{for(c=""+fe(c),u=null,g=0;g<o.length;g++){if(o[g].value===c){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function vt(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Mn(o,u){var c=u.value;if(c==null){if(c=u.children,u=u.defaultValue,c!=null){if(u!=null)throw Error(n(92));if(Ke(c)){if(1<c.length)throw Error(n(93));c=c[0]}u=c}u==null&&(u=""),c=u}o._wrapperState={initialValue:fe(c)}}function gt(o,u){var c=fe(u.value),h=fe(u.defaultValue);c!=null&&(c=""+c,c!==o.value&&(o.value=c),u.defaultValue==null&&o.defaultValue!==c&&(o.defaultValue=c)),h!=null&&(o.defaultValue=""+h)}function Kt(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function xt(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?xt(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var cn,Ao=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,c,h,g){MSApp.execUnsafeLocalFunction(function(){return o(u,c,h,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(cn=cn||document.createElement("div"),cn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=cn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function ta(o,u){if(u){var c=o.firstChild;if(c&&c===o.lastChild&&c.nodeType===3){c.nodeValue=u;return}}o.textContent=u}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(o){kn.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Cn[u]=Cn[o]})});function na(o,u,c){return u==null||typeof u=="boolean"||u===""?"":c||typeof u!="number"||u===0||Cn.hasOwnProperty(o)&&Cn[o]?(""+u).trim():u+"px"}function nu(o,u){o=o.style;for(var c in u)if(u.hasOwnProperty(c)){var h=c.indexOf("--")===0,g=na(c,u[c],h);c==="float"&&(c="cssFloat"),h?o.setProperty(c,g):o[c]=g}}var iM=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function P0(o,u){if(u){if(iM[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function S0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=null;function _0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var O0=null,_o=null,Oo=null;function Ib(o){if(o=Pu(o)){if(typeof O0!="function")throw Error(n(280));var u=o.stateNode;u&&(u=Pl(u),O0(o.stateNode,o.type,u))}}function Bb(o){_o?Oo?Oo.push(o):Oo=[o]:_o=o}function xb(){if(_o){var o=_o,u=Oo;if(Oo=_o=null,Ib(o),u)for(o=0;o<u.length;o++)Ib(u[o])}}function wb(o,u){return o(u)}function Pb(){}var W0=!1;function Sb(o,u,c){if(W0)return o(u,c);W0=!0;try{return wb(o,u,c)}finally{W0=!1,(_o!==null||Oo!==null)&&(Pb(),xb())}}function ru(o,u){var c=o.stateNode;if(c===null)return null;var h=Pl(c);if(h===null)return null;c=h[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(c&&typeof c!="function")throw Error(n(231,u,typeof c));return c}var M0=!1;if(l)try{var au={};Object.defineProperty(au,"passive",{get:function(){M0=!0}}),window.addEventListener("test",au,au),window.removeEventListener("test",au,au)}catch{M0=!1}function uM(o,u,c,h,g,B,k,D,q){var te=Array.prototype.slice.call(arguments,3);try{u.apply(c,te)}catch(ie){this.onError(ie)}}var ou=!1,nl=null,rl=!1,C0=null,sM={onError:function(o){ou=!0,nl=o}};function lM(o,u,c,h,g,B,k,D,q){ou=!1,nl=null,uM.apply(sM,arguments)}function cM(o,u,c,h,g,B,k,D,q){if(lM.apply(this,arguments),ou){if(ou){var te=nl;ou=!1,nl=null}else throw Error(n(198));rl||(rl=!0,C0=te)}}function Fa(o){var u=o,c=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(c=u.return),o=u.return;while(o)}return u.tag===3?c:null}function Ab(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function _b(o){if(Fa(o)!==o)throw Error(n(188))}function pM(o){var u=o.alternate;if(!u){if(u=Fa(o),u===null)throw Error(n(188));return u!==o?null:o}for(var c=o,h=u;;){var g=c.return;if(g===null)break;var B=g.alternate;if(B===null){if(h=g.return,h!==null){c=h;continue}break}if(g.child===B.child){for(B=g.child;B;){if(B===c)return _b(g),o;if(B===h)return _b(g),u;B=B.sibling}throw Error(n(188))}if(c.return!==h.return)c=g,h=B;else{for(var k=!1,D=g.child;D;){if(D===c){k=!0,c=g,h=B;break}if(D===h){k=!0,h=g,c=B;break}D=D.sibling}if(!k){for(D=B.child;D;){if(D===c){k=!0,c=B,h=g;break}if(D===h){k=!0,h=B,c=g;break}D=D.sibling}if(!k)throw Error(n(189))}}if(c.alternate!==h)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?o:u}function Ob(o){return o=pM(o),o!==null?Wb(o):null}function Wb(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=Wb(o);if(u!==null)return u;o=o.sibling}return null}var Mb=t.unstable_scheduleCallback,Cb=t.unstable_cancelCallback,fM=t.unstable_shouldYield,dM=t.unstable_requestPaint,wt=t.unstable_now,hM=t.unstable_getCurrentPriorityLevel,k0=t.unstable_ImmediatePriority,kb=t.unstable_UserBlockingPriority,al=t.unstable_NormalPriority,mM=t.unstable_LowPriority,Eb=t.unstable_IdlePriority,ol=null,pr=null;function vM(o){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(ol,o,void 0,(o.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:bM,gM=Math.log,yM=Math.LN2;function bM(o){return o>>>=0,o===0?32:31-(gM(o)/yM|0)|0}var il=64,ul=4194304;function iu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function sl(o,u){var c=o.pendingLanes;if(c===0)return 0;var h=0,g=o.suspendedLanes,B=o.pingedLanes,k=c&268435455;if(k!==0){var D=k&~g;D!==0?h=iu(D):(B&=k,B!==0&&(h=iu(B)))}else k=c&~g,k!==0?h=iu(k):B!==0&&(h=iu(B));if(h===0)return 0;if(u!==0&&u!==h&&(u&g)===0&&(g=h&-h,B=u&-u,g>=B||g===16&&(B&4194240)!==0))return u;if((h&4)!==0&&(h|=c&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=h;0<u;)c=31-Yn(u),g=1<<c,h|=o[c],u&=~g;return h}function IM(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BM(o,u){for(var c=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,B=o.pendingLanes;0<B;){var k=31-Yn(B),D=1<<k,q=g[k];q===-1?((D&c)===0||(D&h)!==0)&&(g[k]=IM(D,u)):q<=u&&(o.expiredLanes|=D),B&=~D}}function E0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Tb(){var o=il;return il<<=1,(il&4194240)===0&&(il=64),o}function T0(o){for(var u=[],c=0;31>c;c++)u.push(o);return u}function uu(o,u,c){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Yn(u),o[u]=c}function xM(o,u){var c=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<c;){var g=31-Yn(c),B=1<<g;u[g]=0,h[g]=-1,o[g]=-1,c&=~B}}function N0(o,u){var c=o.entangledLanes|=u;for(o=o.entanglements;c;){var h=31-Yn(c),g=1<<h;g&u|o[h]&u&&(o[h]|=u),c&=~g}}var Ze=0;function Nb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Rb,R0,jb,Hb,Db,j0=!1,ll=[],ra=null,aa=null,oa=null,su=new Map,lu=new Map,ia=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $b(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":su.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(u.pointerId)}}function cu(o,u,c,h,g,B){return o===null||o.nativeEvent!==B?(o={blockedOn:u,domEventName:c,eventSystemFlags:h,nativeEvent:B,targetContainers:[g]},u!==null&&(u=Pu(u),u!==null&&R0(u)),o):(o.eventSystemFlags|=h,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function PM(o,u,c,h,g){switch(u){case"focusin":return ra=cu(ra,o,u,c,h,g),!0;case"dragenter":return aa=cu(aa,o,u,c,h,g),!0;case"mouseover":return oa=cu(oa,o,u,c,h,g),!0;case"pointerover":var B=g.pointerId;return su.set(B,cu(su.get(B)||null,o,u,c,h,g)),!0;case"gotpointercapture":return B=g.pointerId,lu.set(B,cu(lu.get(B)||null,o,u,c,h,g)),!0}return!1}function Lb(o){var u=qa(o.target);if(u!==null){var c=Fa(u);if(c!==null){if(u=c.tag,u===13){if(u=Ab(c),u!==null){o.blockedOn=u,Db(o.priority,function(){jb(c)});return}}else if(u===3&&c.stateNode.current.memoizedState.isDehydrated){o.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}o.blockedOn=null}function cl(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var c=D0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(c===null){c=o.nativeEvent;var h=new c.constructor(c.type,c);A0=h,c.target.dispatchEvent(h),A0=null}else return u=Pu(c),u!==null&&R0(u),o.blockedOn=c,!1;u.shift()}return!0}function Fb(o,u,c){cl(o)&&c.delete(u)}function SM(){j0=!1,ra!==null&&cl(ra)&&(ra=null),aa!==null&&cl(aa)&&(aa=null),oa!==null&&cl(oa)&&(oa=null),su.forEach(Fb),lu.forEach(Fb)}function pu(o,u){o.blockedOn===u&&(o.blockedOn=null,j0||(j0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,SM)))}function fu(o){function u(g){return pu(g,o)}if(0<ll.length){pu(ll[0],o);for(var c=1;c<ll.length;c++){var h=ll[c];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&pu(ra,o),aa!==null&&pu(aa,o),oa!==null&&pu(oa,o),su.forEach(u),lu.forEach(u),c=0;c<ia.length;c++)h=ia[c],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(c=ia[0],c.blockedOn===null);)Lb(c),c.blockedOn===null&&ia.shift()}var Wo=M.ReactCurrentBatchConfig,pl=!0;function AM(o,u,c,h){var g=Ze,B=Wo.transition;Wo.transition=null;try{Ze=1,H0(o,u,c,h)}finally{Ze=g,Wo.transition=B}}function _M(o,u,c,h){var g=Ze,B=Wo.transition;Wo.transition=null;try{Ze=4,H0(o,u,c,h)}finally{Ze=g,Wo.transition=B}}function H0(o,u,c,h){if(pl){var g=D0(o,u,c,h);if(g===null)nf(o,u,h,fl,c),$b(o,h);else if(PM(g,o,u,c,h))h.stopPropagation();else if($b(o,h),u&4&&-1<wM.indexOf(o)){for(;g!==null;){var B=Pu(g);if(B!==null&&Rb(B),B=D0(o,u,c,h),B===null&&nf(o,u,h,fl,c),B===g)break;g=B}g!==null&&h.stopPropagation()}else nf(o,u,h,null,c)}}var fl=null;function D0(o,u,c,h){if(fl=null,o=_0(h),o=qa(o),o!==null)if(u=Fa(o),u===null)o=null;else if(c=u.tag,c===13){if(o=Ab(u),o!==null)return o;o=null}else if(c===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return fl=o,null}function qb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hM()){case k0:return 1;case kb:return 4;case al:case mM:return 16;case Eb:return 536870912;default:return 16}default:return 16}}var ua=null,$0=null,dl=null;function zb(){if(dl)return dl;var o,u=$0,c=u.length,h,g="value"in ua?ua.value:ua.textContent,B=g.length;for(o=0;o<c&&u[o]===g[o];o++);var k=c-o;for(h=1;h<=k&&u[c-h]===g[B-h];h++);return dl=g.slice(o,1<h?1-h:void 0)}function hl(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function ml(){return!0}function Ub(){return!1}function bn(o){function u(c,h,g,B,k){this._reactName=c,this._targetInst=g,this.type=h,this.nativeEvent=B,this.target=k,this.currentTarget=null;for(var D in o)o.hasOwnProperty(D)&&(c=o[D],this[D]=c?c(B):B[D]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?ml:Ub,this.isPropagationStopped=Ub,this}return Y(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),u}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},L0=bn(Mo),du=Y({},Mo,{view:0,detail:0}),OM=bn(du),F0,q0,hu,vl=Y({},du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:U0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==hu&&(hu&&o.type==="mousemove"?(F0=o.screenX-hu.screenX,q0=o.screenY-hu.screenY):q0=F0=0,hu=o),F0)},movementY:function(o){return"movementY"in o?o.movementY:q0}}),Vb=bn(vl),WM=Y({},vl,{dataTransfer:0}),MM=bn(WM),CM=Y({},du,{relatedTarget:0}),z0=bn(CM),kM=Y({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),EM=bn(kM),TM=Y({},Mo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),NM=bn(TM),RM=Y({},Mo,{data:0}),Gb=bn(RM),jM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $M(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=DM[o])?!!u[o]:!1}function U0(){return $M}var LM=Y({},du,{key:function(o){if(o.key){var u=jM[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=hl(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?HM[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:U0,charCode:function(o){return o.type==="keypress"?hl(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?hl(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),FM=bn(LM),qM=Y({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kb=bn(qM),zM=Y({},du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:U0}),UM=bn(zM),VM=Y({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),GM=bn(VM),KM=Y({},vl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),QM=bn(KM),YM=[9,13,27,32],V0=l&&"CompositionEvent"in window,mu=null;l&&"documentMode"in document&&(mu=document.documentMode);var XM=l&&"TextEvent"in window&&!mu,Qb=l&&(!V0||mu&&8<mu&&11>=mu),Yb=" ",Xb=!1;function Zb(o,u){switch(o){case"keyup":return YM.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jb(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function ZM(o,u){switch(o){case"compositionend":return Jb(u);case"keypress":return u.which!==32?null:(Xb=!0,Yb);case"textInput":return o=u.data,o===Yb&&Xb?null:o;default:return null}}function JM(o,u){if(Co)return o==="compositionend"||!V0&&Zb(o,u)?(o=zb(),dl=$0=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Qb&&u.locale!=="ko"?null:u.data;default:return null}}var eC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e1(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!eC[o.type]:u==="textarea"}function t1(o,u,c,h){Bb(h),u=Bl(u,"onChange"),0<u.length&&(c=new L0("onChange","change",null,c,h),o.push({event:c,listeners:u}))}var vu=null,gu=null;function tC(o){b1(o,0)}function gl(o){var u=Ro(o);if(re(u))return o}function nC(o,u){if(o==="change")return u}var n1=!1;if(l){var G0;if(l){var K0="oninput"in document;if(!K0){var r1=document.createElement("div");r1.setAttribute("oninput","return;"),K0=typeof r1.oninput=="function"}G0=K0}else G0=!1;n1=G0&&(!document.documentMode||9<document.documentMode)}function a1(){vu&&(vu.detachEvent("onpropertychange",o1),gu=vu=null)}function o1(o){if(o.propertyName==="value"&&gl(gu)){var u=[];t1(u,gu,o,_0(o)),Sb(tC,u)}}function rC(o,u,c){o==="focusin"?(a1(),vu=u,gu=c,vu.attachEvent("onpropertychange",o1)):o==="focusout"&&a1()}function aC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return gl(gu)}function oC(o,u){if(o==="click")return gl(u)}function iC(o,u){if(o==="input"||o==="change")return gl(u)}function uC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Xn=typeof Object.is=="function"?Object.is:uC;function yu(o,u){if(Xn(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var c=Object.keys(o),h=Object.keys(u);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var g=c[h];if(!p.call(u,g)||!Xn(o[g],u[g]))return!1}return!0}function i1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function u1(o,u){var c=i1(o);o=0;for(var h;c;){if(c.nodeType===3){if(h=o+c.textContent.length,o<=u&&h>=u)return{node:c,offset:u-o};o=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=i1(c)}}function s1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?s1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function l1(){for(var o=window,u=Re();u instanceof o.HTMLIFrameElement;){try{var c=typeof u.contentWindow.location.href=="string"}catch{c=!1}if(c)o=u.contentWindow;else break;u=Re(o.document)}return u}function Q0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function sC(o){var u=l1(),c=o.focusedElem,h=o.selectionRange;if(u!==c&&c&&c.ownerDocument&&s1(c.ownerDocument.documentElement,c)){if(h!==null&&Q0(c)){if(u=h.start,o=h.end,o===void 0&&(o=u),"selectionStart"in c)c.selectionStart=u,c.selectionEnd=Math.min(o,c.value.length);else if(o=(u=c.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=c.textContent.length,B=Math.min(h.start,g);h=h.end===void 0?B:Math.min(h.end,g),!o.extend&&B>h&&(g=h,h=B,B=g),g=u1(c,B);var k=u1(c,h);g&&k&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),B>h?(o.addRange(u),o.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),o.addRange(u)))}}for(u=[],o=c;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<u.length;c++)o=u[c],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var lC=l&&"documentMode"in document&&11>=document.documentMode,ko=null,Y0=null,bu=null,X0=!1;function c1(o,u,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;X0||ko==null||ko!==Re(h)||(h=ko,"selectionStart"in h&&Q0(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),bu&&yu(bu,h)||(bu=h,h=Bl(Y0,"onSelect"),0<h.length&&(u=new L0("onSelect","select",null,u,c),o.push({event:u,listeners:h}),u.target=ko)))}function yl(o,u){var c={};return c[o.toLowerCase()]=u.toLowerCase(),c["Webkit"+o]="webkit"+u,c["Moz"+o]="moz"+u,c}var Eo={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Z0={},p1={};l&&(p1=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function bl(o){if(Z0[o])return Z0[o];if(!Eo[o])return o;var u=Eo[o],c;for(c in u)if(u.hasOwnProperty(c)&&c in p1)return Z0[o]=u[c];return o}var f1=bl("animationend"),d1=bl("animationiteration"),h1=bl("animationstart"),m1=bl("transitionend"),v1=new Map,g1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){v1.set(o,u),i(u,[o])}for(var J0=0;J0<g1.length;J0++){var ef=g1[J0],cC=ef.toLowerCase(),pC=ef[0].toUpperCase()+ef.slice(1);sa(cC,"on"+pC)}sa(f1,"onAnimationEnd"),sa(d1,"onAnimationIteration"),sa(h1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(m1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Iu));function y1(o,u,c){var h=o.type||"unknown-event";o.currentTarget=c,cM(h,u,void 0,o),o.currentTarget=null}function b1(o,u){u=(u&4)!==0;for(var c=0;c<o.length;c++){var h=o[c],g=h.event;h=h.listeners;e:{var B=void 0;if(u)for(var k=h.length-1;0<=k;k--){var D=h[k],q=D.instance,te=D.currentTarget;if(D=D.listener,q!==B&&g.isPropagationStopped())break e;y1(g,D,te),B=q}else for(k=0;k<h.length;k++){if(D=h[k],q=D.instance,te=D.currentTarget,D=D.listener,q!==B&&g.isPropagationStopped())break e;y1(g,D,te),B=q}}}if(rl)throw o=C0,rl=!1,C0=null,o}function it(o,u){var c=u[lf];c===void 0&&(c=u[lf]=new Set);var h=o+"__bubble";c.has(h)||(I1(u,o,2,!1),c.add(h))}function tf(o,u,c){var h=0;u&&(h|=4),I1(c,o,h,u)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Bu(o){if(!o[Il]){o[Il]=!0,r.forEach(function(c){c!=="selectionchange"&&(fC.has(c)||tf(c,!1,o),tf(c,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[Il]||(u[Il]=!0,tf("selectionchange",!1,u))}}function I1(o,u,c,h){switch(qb(u)){case 1:var g=AM;break;case 4:g=_M;break;default:g=H0}c=g.bind(null,u,c,o),g=void 0,!M0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(u,c,{capture:!0,passive:g}):o.addEventListener(u,c,!0):g!==void 0?o.addEventListener(u,c,{passive:g}):o.addEventListener(u,c,!1)}function nf(o,u,c,h,g){var B=h;if((u&1)===0&&(u&2)===0&&h!==null)e:for(;;){if(h===null)return;var k=h.tag;if(k===3||k===4){var D=h.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(k===4)for(k=h.return;k!==null;){var q=k.tag;if((q===3||q===4)&&(q=k.stateNode.containerInfo,q===g||q.nodeType===8&&q.parentNode===g))return;k=k.return}for(;D!==null;){if(k=qa(D),k===null)return;if(q=k.tag,q===5||q===6){h=B=k;continue e}D=D.parentNode}}h=h.return}Sb(function(){var te=B,ie=_0(c),se=[];e:{var oe=v1.get(o);if(oe!==void 0){var me=L0,Be=o;switch(o){case"keypress":if(hl(c)===0)break e;case"keydown":case"keyup":me=FM;break;case"focusin":Be="focus",me=z0;break;case"focusout":Be="blur",me=z0;break;case"beforeblur":case"afterblur":me=z0;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Vb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=MM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=UM;break;case f1:case d1:case h1:me=EM;break;case m1:me=GM;break;case"scroll":me=OM;break;case"wheel":me=QM;break;case"copy":case"cut":case"paste":me=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Kb}var Se=(u&4)!==0,Pt=!Se&&o==="scroll",Z=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var V=te,ee;V!==null;){ee=V;var ce=ee.stateNode;if(ee.tag===5&&ce!==null&&(ee=ce,Z!==null&&(ce=ru(V,Z),ce!=null&&Se.push(xu(V,ce,ee)))),Pt)break;V=V.return}0<Se.length&&(oe=new me(oe,Be,null,c,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",me=o==="mouseout"||o==="pointerout",oe&&c!==A0&&(Be=c.relatedTarget||c.fromElement)&&(qa(Be)||Be[Or]))break e;if((me||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Be=c.relatedTarget||c.toElement,me=te,Be=Be?qa(Be):null,Be!==null&&(Pt=Fa(Be),Be!==Pt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(me=null,Be=te),me!==Be)){if(Se=Vb,ce="onMouseLeave",Z="onMouseEnter",V="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Kb,ce="onPointerLeave",Z="onPointerEnter",V="pointer"),Pt=me==null?oe:Ro(me),ee=Be==null?oe:Ro(Be),oe=new Se(ce,V+"leave",me,c,ie),oe.target=Pt,oe.relatedTarget=ee,ce=null,qa(ie)===te&&(Se=new Se(Z,V+"enter",Be,c,ie),Se.target=ee,Se.relatedTarget=Pt,ce=Se),Pt=ce,me&&Be)t:{for(Se=me,Z=Be,V=0,ee=Se;ee;ee=To(ee))V++;for(ee=0,ce=Z;ce;ce=To(ce))ee++;for(;0<V-ee;)Se=To(Se),V--;for(;0<ee-V;)Z=To(Z),ee--;for(;V--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=To(Se),Z=To(Z)}Se=null}else Se=null;me!==null&&B1(se,oe,me,Se,!1),Be!==null&&Pt!==null&&B1(se,Pt,Be,Se,!0)}}e:{if(oe=te?Ro(te):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var Oe=nC;else if(e1(oe))if(n1)Oe=iC;else{Oe=aC;var We=rC}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(Oe=oC);if(Oe&&(Oe=Oe(o,te))){t1(se,Oe,c,ie);break e}We&&We(o,oe,te),o==="focusout"&&(We=oe._wrapperState)&&We.controlled&&oe.type==="number"&&qe(oe,"number",oe.value)}switch(We=te?Ro(te):window,o){case"focusin":(e1(We)||We.contentEditable==="true")&&(ko=We,Y0=te,bu=null);break;case"focusout":bu=Y0=ko=null;break;case"mousedown":X0=!0;break;case"contextmenu":case"mouseup":case"dragend":X0=!1,c1(se,c,ie);break;case"selectionchange":if(lC)break;case"keydown":case"keyup":c1(se,c,ie)}var Me;if(V0)e:{switch(o){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Co?Zb(o,c)&&(Ne="onCompositionEnd"):o==="keydown"&&c.keyCode===229&&(Ne="onCompositionStart");Ne&&(Qb&&c.locale!=="ko"&&(Co||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Co&&(Me=zb()):(ua=ie,$0="value"in ua?ua.value:ua.textContent,Co=!0)),We=Bl(te,Ne),0<We.length&&(Ne=new Gb(Ne,o,null,c,ie),se.push({event:Ne,listeners:We}),Me?Ne.data=Me:(Me=Jb(c),Me!==null&&(Ne.data=Me)))),(Me=XM?ZM(o,c):JM(o,c))&&(te=Bl(te,"onBeforeInput"),0<te.length&&(ie=new Gb("onBeforeInput","beforeinput",null,c,ie),se.push({event:ie,listeners:te}),ie.data=Me))}b1(se,u)})}function xu(o,u,c){return{instance:o,listener:u,currentTarget:c}}function Bl(o,u){for(var c=u+"Capture",h=[];o!==null;){var g=o,B=g.stateNode;g.tag===5&&B!==null&&(g=B,B=ru(o,c),B!=null&&h.unshift(xu(o,B,g)),B=ru(o,u),B!=null&&h.push(xu(o,B,g))),o=o.return}return h}function To(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function B1(o,u,c,h,g){for(var B=u._reactName,k=[];c!==null&&c!==h;){var D=c,q=D.alternate,te=D.stateNode;if(q!==null&&q===h)break;D.tag===5&&te!==null&&(D=te,g?(q=ru(c,B),q!=null&&k.unshift(xu(c,q,D))):g||(q=ru(c,B),q!=null&&k.push(xu(c,q,D)))),c=c.return}k.length!==0&&o.push({event:u,listeners:k})}var dC=/\r\n?/g,hC=/\u0000|\uFFFD/g;function x1(o){return(typeof o=="string"?o:""+o).replace(dC,`
`).replace(hC,"")}function xl(o,u,c){if(u=x1(u),x1(o)!==u&&c)throw Error(n(425))}function wl(){}var rf=null,af=null;function of(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,mC=typeof clearTimeout=="function"?clearTimeout:void 0,w1=typeof Promise=="function"?Promise:void 0,vC=typeof queueMicrotask=="function"?queueMicrotask:typeof w1<"u"?function(o){return w1.resolve(null).then(o).catch(gC)}:uf;function gC(o){setTimeout(function(){throw o})}function sf(o,u){var c=u,h=0;do{var g=c.nextSibling;if(o.removeChild(c),g&&g.nodeType===8)if(c=g.data,c==="/$"){if(h===0){o.removeChild(g),fu(u);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=g}while(c);fu(u)}function la(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function P1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var c=o.data;if(c==="$"||c==="$!"||c==="$?"){if(u===0)return o;u--}else c==="/$"&&u++}o=o.previousSibling}return null}var No=Math.random().toString(36).slice(2),fr="__reactFiber$"+No,wu="__reactProps$"+No,Or="__reactContainer$"+No,lf="__reactEvents$"+No,yC="__reactListeners$"+No,bC="__reactHandles$"+No;function qa(o){var u=o[fr];if(u)return u;for(var c=o.parentNode;c;){if(u=c[Or]||c[fr]){if(c=u.alternate,u.child!==null||c!==null&&c.child!==null)for(o=P1(o);o!==null;){if(c=o[fr])return c;o=P1(o)}return u}o=c,c=o.parentNode}return null}function Pu(o){return o=o[fr]||o[Or],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Ro(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function Pl(o){return o[wu]||null}var cf=[],jo=-1;function ca(o){return{current:o}}function ut(o){0>jo||(o.current=cf[jo],cf[jo]=null,jo--)}function nt(o,u){jo++,cf[jo]=o.current,o.current=u}var pa={},Qt=ca(pa),pn=ca(!1),za=pa;function Ho(o,u){var c=o.type.contextTypes;if(!c)return pa;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===u)return h.__reactInternalMemoizedMaskedChildContext;var g={},B;for(B in c)g[B]=u[B];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function fn(o){return o=o.childContextTypes,o!=null}function Sl(){ut(pn),ut(Qt)}function S1(o,u,c){if(Qt.current!==pa)throw Error(n(168));nt(Qt,u),nt(pn,c)}function A1(o,u,c){var h=o.stateNode;if(u=u.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var g in h)if(!(g in u))throw Error(n(108,ye(o)||"Unknown",g));return Y({},c,h)}function Al(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||pa,za=Qt.current,nt(Qt,o),nt(pn,pn.current),!0}function _1(o,u,c){var h=o.stateNode;if(!h)throw Error(n(169));c?(o=A1(o,u,za),h.__reactInternalMemoizedMergedChildContext=o,ut(pn),ut(Qt),nt(Qt,o)):ut(pn),nt(pn,c)}var Wr=null,_l=!1,pf=!1;function O1(o){Wr===null?Wr=[o]:Wr.push(o)}function IC(o){_l=!0,O1(o)}function fa(){if(!pf&&Wr!==null){pf=!0;var o=0,u=Ze;try{var c=Wr;for(Ze=1;o<c.length;o++){var h=c[o];do h=h(!0);while(h!==null)}Wr=null,_l=!1}catch(g){throw Wr!==null&&(Wr=Wr.slice(o+1)),Mb(k0,fa),g}finally{Ze=u,pf=!1}}return null}var Do=[],$o=0,Ol=null,Wl=0,En=[],Tn=0,Ua=null,Mr=1,Cr="";function Va(o,u){Do[$o++]=Wl,Do[$o++]=Ol,Ol=o,Wl=u}function W1(o,u,c){En[Tn++]=Mr,En[Tn++]=Cr,En[Tn++]=Ua,Ua=o;var h=Mr;o=Cr;var g=32-Yn(h)-1;h&=~(1<<g),c+=1;var B=32-Yn(u)+g;if(30<B){var k=g-g%5;B=(h&(1<<k)-1).toString(32),h>>=k,g-=k,Mr=1<<32-Yn(u)+g|c<<g|h,Cr=B+o}else Mr=1<<B|c<<g|h,Cr=o}function ff(o){o.return!==null&&(Va(o,1),W1(o,1,0))}function df(o){for(;o===Ol;)Ol=Do[--$o],Do[$o]=null,Wl=Do[--$o],Do[$o]=null;for(;o===Ua;)Ua=En[--Tn],En[Tn]=null,Cr=En[--Tn],En[Tn]=null,Mr=En[--Tn],En[Tn]=null}var In=null,Bn=null,ct=!1,Zn=null;function M1(o,u){var c=Hn(5,null,null,0);c.elementType="DELETED",c.stateNode=u,c.return=o,u=o.deletions,u===null?(o.deletions=[c],o.flags|=16):u.push(c)}function C1(o,u){switch(o.tag){case 5:var c=o.type;return u=u.nodeType!==1||c.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,In=o,Bn=la(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,In=o,Bn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(c=Ua!==null?{id:Mr,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:c,retryLane:1073741824},c=Hn(18,null,null,0),c.stateNode=u,c.return=o,o.child=c,In=o,Bn=null,!0):!1;default:return!1}}function hf(o){return(o.mode&1)!==0&&(o.flags&128)===0}function mf(o){if(ct){var u=Bn;if(u){var c=u;if(!C1(o,u)){if(hf(o))throw Error(n(418));u=la(c.nextSibling);var h=In;u&&C1(o,u)?M1(h,c):(o.flags=o.flags&-4097|2,ct=!1,In=o)}}else{if(hf(o))throw Error(n(418));o.flags=o.flags&-4097|2,ct=!1,In=o}}}function k1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;In=o}function Ml(o){if(o!==In)return!1;if(!ct)return k1(o),ct=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!of(o.type,o.memoizedProps)),u&&(u=Bn)){if(hf(o))throw E1(),Error(n(418));for(;u;)M1(o,u),u=la(u.nextSibling)}if(k1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var c=o.data;if(c==="/$"){if(u===0){Bn=la(o.nextSibling);break e}u--}else c!=="$"&&c!=="$!"&&c!=="$?"||u++}o=o.nextSibling}Bn=null}}else Bn=In?la(o.stateNode.nextSibling):null;return!0}function E1(){for(var o=Bn;o;)o=la(o.nextSibling)}function Lo(){Bn=In=null,ct=!1}function vf(o){Zn===null?Zn=[o]:Zn.push(o)}var BC=M.ReactCurrentBatchConfig;function Su(o,u,c){if(o=c.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var h=c.stateNode}if(!h)throw Error(n(147,o));var g=h,B=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===B?u.ref:(u=function(k){var D=g.refs;k===null?delete D[B]:D[B]=k},u._stringRef=B,u)}if(typeof o!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,o))}return o}function Cl(o,u){throw o=Object.prototype.toString.call(u),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function T1(o){var u=o._init;return u(o._payload)}function N1(o){function u(Z,V){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[V],Z.flags|=16):ee.push(V)}}function c(Z,V){if(!o)return null;for(;V!==null;)u(Z,V),V=V.sibling;return null}function h(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function g(Z,V){return Z=Ia(Z,V),Z.index=0,Z.sibling=null,Z}function B(Z,V,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<V?(Z.flags|=2,V):ee):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function k(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function D(Z,V,ee,ce){return V===null||V.tag!==6?(V=u2(ee,Z.mode,ce),V.return=Z,V):(V=g(V,ee),V.return=Z,V)}function q(Z,V,ee,ce){var Oe=ee.type;return Oe===E?ie(Z,V,ee.props.children,ce,ee.key):V!==null&&(V.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===z&&T1(Oe)===V.type)?(ce=g(V,ee.props),ce.ref=Su(Z,V,ee),ce.return=Z,ce):(ce=tc(ee.type,ee.key,ee.props,null,Z.mode,ce),ce.ref=Su(Z,V,ee),ce.return=Z,ce)}function te(Z,V,ee,ce){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=s2(ee,Z.mode,ce),V.return=Z,V):(V=g(V,ee.children||[]),V.return=Z,V)}function ie(Z,V,ee,ce,Oe){return V===null||V.tag!==7?(V=eo(ee,Z.mode,ce,Oe),V.return=Z,V):(V=g(V,ee),V.return=Z,V)}function se(Z,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=u2(""+V,Z.mode,ee),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return ee=tc(V.type,V.key,V.props,null,Z.mode,ee),ee.ref=Su(Z,null,V),ee.return=Z,ee;case O:return V=s2(V,Z.mode,ee),V.return=Z,V;case z:var ce=V._init;return se(Z,ce(V._payload),ee)}if(Ke(V)||K(V))return V=eo(V,Z.mode,ee,null),V.return=Z,V;Cl(Z,V)}return null}function oe(Z,V,ee,ce){var Oe=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Oe!==null?null:D(Z,V,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===Oe?q(Z,V,ee,ce):null;case O:return ee.key===Oe?te(Z,V,ee,ce):null;case z:return Oe=ee._init,oe(Z,V,Oe(ee._payload),ce)}if(Ke(ee)||K(ee))return Oe!==null?null:ie(Z,V,ee,ce,null);Cl(Z,ee)}return null}function me(Z,V,ee,ce,Oe){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return Z=Z.get(ee)||null,D(V,Z,""+ce,Oe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:return Z=Z.get(ce.key===null?ee:ce.key)||null,q(V,Z,ce,Oe);case O:return Z=Z.get(ce.key===null?ee:ce.key)||null,te(V,Z,ce,Oe);case z:var We=ce._init;return me(Z,V,ee,We(ce._payload),Oe)}if(Ke(ce)||K(ce))return Z=Z.get(ee)||null,ie(V,Z,ce,Oe,null);Cl(V,ce)}return null}function Be(Z,V,ee,ce){for(var Oe=null,We=null,Me=V,Ne=V=0,Lt=null;Me!==null&&Ne<ee.length;Ne++){Me.index>Ne?(Lt=Me,Me=null):Lt=Me.sibling;var Ue=oe(Z,Me,ee[Ne],ce);if(Ue===null){Me===null&&(Me=Lt);break}o&&Me&&Ue.alternate===null&&u(Z,Me),V=B(Ue,V,Ne),We===null?Oe=Ue:We.sibling=Ue,We=Ue,Me=Lt}if(Ne===ee.length)return c(Z,Me),ct&&Va(Z,Ne),Oe;if(Me===null){for(;Ne<ee.length;Ne++)Me=se(Z,ee[Ne],ce),Me!==null&&(V=B(Me,V,Ne),We===null?Oe=Me:We.sibling=Me,We=Me);return ct&&Va(Z,Ne),Oe}for(Me=h(Z,Me);Ne<ee.length;Ne++)Lt=me(Me,Z,Ne,ee[Ne],ce),Lt!==null&&(o&&Lt.alternate!==null&&Me.delete(Lt.key===null?Ne:Lt.key),V=B(Lt,V,Ne),We===null?Oe=Lt:We.sibling=Lt,We=Lt);return o&&Me.forEach(function(Ba){return u(Z,Ba)}),ct&&Va(Z,Ne),Oe}function Se(Z,V,ee,ce){var Oe=K(ee);if(typeof Oe!="function")throw Error(n(150));if(ee=Oe.call(ee),ee==null)throw Error(n(151));for(var We=Oe=null,Me=V,Ne=V=0,Lt=null,Ue=ee.next();Me!==null&&!Ue.done;Ne++,Ue=ee.next()){Me.index>Ne?(Lt=Me,Me=null):Lt=Me.sibling;var Ba=oe(Z,Me,Ue.value,ce);if(Ba===null){Me===null&&(Me=Lt);break}o&&Me&&Ba.alternate===null&&u(Z,Me),V=B(Ba,V,Ne),We===null?Oe=Ba:We.sibling=Ba,We=Ba,Me=Lt}if(Ue.done)return c(Z,Me),ct&&Va(Z,Ne),Oe;if(Me===null){for(;!Ue.done;Ne++,Ue=ee.next())Ue=se(Z,Ue.value,ce),Ue!==null&&(V=B(Ue,V,Ne),We===null?Oe=Ue:We.sibling=Ue,We=Ue);return ct&&Va(Z,Ne),Oe}for(Me=h(Z,Me);!Ue.done;Ne++,Ue=ee.next())Ue=me(Me,Z,Ne,Ue.value,ce),Ue!==null&&(o&&Ue.alternate!==null&&Me.delete(Ue.key===null?Ne:Ue.key),V=B(Ue,V,Ne),We===null?Oe=Ue:We.sibling=Ue,We=Ue);return o&&Me.forEach(function(ek){return u(Z,ek)}),ct&&Va(Z,Ne),Oe}function Pt(Z,V,ee,ce){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var Oe=ee.key,We=V;We!==null;){if(We.key===Oe){if(Oe=ee.type,Oe===E){if(We.tag===7){c(Z,We.sibling),V=g(We,ee.props.children),V.return=Z,Z=V;break e}}else if(We.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===z&&T1(Oe)===We.type){c(Z,We.sibling),V=g(We,ee.props),V.ref=Su(Z,We,ee),V.return=Z,Z=V;break e}c(Z,We);break}else u(Z,We);We=We.sibling}ee.type===E?(V=eo(ee.props.children,Z.mode,ce,ee.key),V.return=Z,Z=V):(ce=tc(ee.type,ee.key,ee.props,null,Z.mode,ce),ce.ref=Su(Z,V,ee),ce.return=Z,Z=ce)}return k(Z);case O:e:{for(We=ee.key;V!==null;){if(V.key===We)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){c(Z,V.sibling),V=g(V,ee.children||[]),V.return=Z,Z=V;break e}else{c(Z,V);break}else u(Z,V);V=V.sibling}V=s2(ee,Z.mode,ce),V.return=Z,Z=V}return k(Z);case z:return We=ee._init,Pt(Z,V,We(ee._payload),ce)}if(Ke(ee))return Be(Z,V,ee,ce);if(K(ee))return Se(Z,V,ee,ce);Cl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(c(Z,V.sibling),V=g(V,ee),V.return=Z,Z=V):(c(Z,V),V=u2(ee,Z.mode,ce),V.return=Z,Z=V),k(Z)):c(Z,V)}return Pt}var Fo=N1(!0),R1=N1(!1),kl=ca(null),El=null,qo=null,gf=null;function yf(){gf=qo=El=null}function bf(o){var u=kl.current;ut(kl),o._currentValue=u}function If(o,u,c){for(;o!==null;){var h=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,h!==null&&(h.childLanes|=u)):h!==null&&(h.childLanes&u)!==u&&(h.childLanes|=u),o===c)break;o=o.return}}function zo(o,u){El=o,gf=qo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dn=!0),o.firstContext=null)}function Nn(o){var u=o._currentValue;if(gf!==o)if(o={context:o,memoizedValue:u,next:null},qo===null){if(El===null)throw Error(n(308));qo=o,El.dependencies={lanes:0,firstContext:o}}else qo=qo.next=o;return u}var Ga=null;function Bf(o){Ga===null?Ga=[o]:Ga.push(o)}function j1(o,u,c,h){var g=u.interleaved;return g===null?(c.next=c,Bf(u)):(c.next=g.next,g.next=c),u.interleaved=c,kr(o,h)}function kr(o,u){o.lanes|=u;var c=o.alternate;for(c!==null&&(c.lanes|=u),c=o,o=o.return;o!==null;)o.childLanes|=u,c=o.alternate,c!==null&&(c.childLanes|=u),c=o,o=o.return;return c.tag===3?c.stateNode:null}var da=!1;function xf(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Er(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(o,u,c){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var g=h.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u,kr(o,c)}return g=h.interleaved,g===null?(u.next=u,Bf(h)):(u.next=g.next,g.next=u),h.interleaved=u,kr(o,c)}function Tl(o,u,c){if(u=u.updateQueue,u!==null&&(u=u.shared,(c&4194240)!==0)){var h=u.lanes;h&=o.pendingLanes,c|=h,u.lanes=c,N0(o,c)}}function D1(o,u){var c=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var g=null,B=null;if(c=c.firstBaseUpdate,c!==null){do{var k={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};B===null?g=B=k:B=B.next=k,c=c.next}while(c!==null);B===null?g=B=u:B=B.next=u}else g=B=u;c={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:B,shared:h.shared,effects:h.effects},o.updateQueue=c;return}o=c.lastBaseUpdate,o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=u}function Nl(o,u,c,h){var g=o.updateQueue;da=!1;var B=g.firstBaseUpdate,k=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var q=D,te=q.next;q.next=null,k===null?B=te:k.next=te,k=q;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,D=ie.lastBaseUpdate,D!==k&&(D===null?ie.firstBaseUpdate=te:D.next=te,ie.lastBaseUpdate=q))}if(B!==null){var se=g.baseState;k=0,ie=te=q=null,D=B;do{var oe=D.lane,me=D.eventTime;if((h&oe)===oe){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=o,Se=D;switch(oe=u,me=c,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(me,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(me,se,oe):Be,oe==null)break e;se=Y({},se,oe);break e;case 2:da=!0}}D.callback!==null&&D.lane!==0&&(o.flags|=64,oe=g.effects,oe===null?g.effects=[D]:oe.push(D))}else me={eventTime:me,lane:oe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ie===null?(te=ie=me,q=se):ie=ie.next=me,k|=oe;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;oe=D,D=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ie===null&&(q=se),g.baseState=q,g.firstBaseUpdate=te,g.lastBaseUpdate=ie,u=g.shared.interleaved,u!==null){g=u;do k|=g.lane,g=g.next;while(g!==u)}else B===null&&(g.shared.lanes=0);Ya|=k,o.lanes=k,o.memoizedState=se}}function $1(o,u,c){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var h=o[u],g=h.callback;if(g!==null){if(h.callback=null,h=c,typeof g!="function")throw Error(n(191,g));g.call(h)}}}var Au={},dr=ca(Au),_u=ca(Au),Ou=ca(Au);function Ka(o){if(o===Au)throw Error(n(174));return o}function wf(o,u){switch(nt(Ou,u),nt(_u,o),nt(dr,Au),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:Ht(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=Ht(u,o)}ut(dr),nt(dr,u)}function Uo(){ut(dr),ut(_u),ut(Ou)}function L1(o){Ka(Ou.current);var u=Ka(dr.current),c=Ht(u,o.type);u!==c&&(nt(_u,o),nt(dr,c))}function Pf(o){_u.current===o&&(ut(dr),ut(_u))}var ft=ca(0);function Rl(o){for(var u=o;u!==null;){if(u.tag===13){var c=u.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var Sf=[];function Af(){for(var o=0;o<Sf.length;o++)Sf[o]._workInProgressVersionPrimary=null;Sf.length=0}var jl=M.ReactCurrentDispatcher,_f=M.ReactCurrentBatchConfig,Qa=0,dt=null,kt=null,Dt=null,Hl=!1,Wu=!1,Mu=0,xC=0;function Yt(){throw Error(n(321))}function Of(o,u){if(u===null)return!1;for(var c=0;c<u.length&&c<o.length;c++)if(!Xn(o[c],u[c]))return!1;return!0}function Wf(o,u,c,h,g,B){if(Qa=B,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,jl.current=o===null||o.memoizedState===null?AC:_C,o=c(h,g),Wu){B=0;do{if(Wu=!1,Mu=0,25<=B)throw Error(n(301));B+=1,Dt=kt=null,u.updateQueue=null,jl.current=OC,o=c(h,g)}while(Wu)}if(jl.current=Ll,u=kt!==null&&kt.next!==null,Qa=0,Dt=kt=dt=null,Hl=!1,u)throw Error(n(300));return o}function Mf(){var o=Mu!==0;return Mu=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function Rn(){if(kt===null){var o=dt.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=o;else{if(o===null)throw Error(n(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function Cu(o,u){return typeof u=="function"?u(o):u}function Cf(o){var u=Rn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var h=kt,g=h.baseQueue,B=c.pending;if(B!==null){if(g!==null){var k=g.next;g.next=B.next,B.next=k}h.baseQueue=g=B,c.pending=null}if(g!==null){B=g.next,h=h.baseState;var D=k=null,q=null,te=B;do{var ie=te.lane;if((Qa&ie)===ie)q!==null&&(q=q.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),h=te.hasEagerState?te.eagerState:o(h,te.action);else{var se={lane:ie,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};q===null?(D=q=se,k=h):q=q.next=se,dt.lanes|=ie,Ya|=ie}te=te.next}while(te!==null&&te!==B);q===null?k=h:q.next=D,Xn(h,u.memoizedState)||(dn=!0),u.memoizedState=h,u.baseState=k,u.baseQueue=q,c.lastRenderedState=h}if(o=c.interleaved,o!==null){g=o;do B=g.lane,dt.lanes|=B,Ya|=B,g=g.next;while(g!==o)}else g===null&&(c.lanes=0);return[u.memoizedState,c.dispatch]}function kf(o){var u=Rn(),c=u.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var h=c.dispatch,g=c.pending,B=u.memoizedState;if(g!==null){c.pending=null;var k=g=g.next;do B=o(B,k.action),k=k.next;while(k!==g);Xn(B,u.memoizedState)||(dn=!0),u.memoizedState=B,u.baseQueue===null&&(u.baseState=B),c.lastRenderedState=B}return[B,h]}function F1(){}function q1(o,u){var c=dt,h=Rn(),g=u(),B=!Xn(h.memoizedState,g);if(B&&(h.memoizedState=g,dn=!0),h=h.queue,Ef(V1.bind(null,c,h,o),[o]),h.getSnapshot!==u||B||Dt!==null&&Dt.memoizedState.tag&1){if(c.flags|=2048,ku(9,U1.bind(null,c,h,g,u),void 0,null),$t===null)throw Error(n(349));(Qa&30)!==0||z1(c,u,g)}return g}function z1(o,u,c){o.flags|=16384,o={getSnapshot:u,value:c},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[o]):(c=u.stores,c===null?u.stores=[o]:c.push(o))}function U1(o,u,c,h){u.value=c,u.getSnapshot=h,G1(u)&&K1(o)}function V1(o,u,c){return c(function(){G1(u)&&K1(o)})}function G1(o){var u=o.getSnapshot;o=o.value;try{var c=u();return!Xn(o,c)}catch{return!0}}function K1(o){var u=kr(o,1);u!==null&&nr(u,o,1,-1)}function Q1(o){var u=hr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:o},u.queue=o,o=o.dispatch=SC.bind(null,dt,o),[u.memoizedState,o]}function ku(o,u,c,h){return o={tag:o,create:u,destroy:c,deps:h,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=o.next=o):(c=u.lastEffect,c===null?u.lastEffect=o.next=o:(h=c.next,c.next=o,o.next=h,u.lastEffect=o)),o}function Y1(){return Rn().memoizedState}function Dl(o,u,c,h){var g=hr();dt.flags|=o,g.memoizedState=ku(1|u,c,void 0,h===void 0?null:h)}function $l(o,u,c,h){var g=Rn();h=h===void 0?null:h;var B=void 0;if(kt!==null){var k=kt.memoizedState;if(B=k.destroy,h!==null&&Of(h,k.deps)){g.memoizedState=ku(u,c,B,h);return}}dt.flags|=o,g.memoizedState=ku(1|u,c,B,h)}function X1(o,u){return Dl(8390656,8,o,u)}function Ef(o,u){return $l(2048,8,o,u)}function Z1(o,u){return $l(4,2,o,u)}function J1(o,u){return $l(4,4,o,u)}function e6(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function t6(o,u,c){return c=c!=null?c.concat([o]):null,$l(4,4,e6.bind(null,u,o),c)}function Tf(){}function n6(o,u){var c=Rn();u=u===void 0?null:u;var h=c.memoizedState;return h!==null&&u!==null&&Of(u,h[1])?h[0]:(c.memoizedState=[o,u],o)}function r6(o,u){var c=Rn();u=u===void 0?null:u;var h=c.memoizedState;return h!==null&&u!==null&&Of(u,h[1])?h[0]:(o=o(),c.memoizedState=[o,u],o)}function a6(o,u,c){return(Qa&21)===0?(o.baseState&&(o.baseState=!1,dn=!0),o.memoizedState=c):(Xn(c,u)||(c=Tb(),dt.lanes|=c,Ya|=c,o.baseState=!0),u)}function wC(o,u){var c=Ze;Ze=c!==0&&4>c?c:4,o(!0);var h=_f.transition;_f.transition={};try{o(!1),u()}finally{Ze=c,_f.transition=h}}function o6(){return Rn().memoizedState}function PC(o,u,c){var h=ya(o);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},i6(o))u6(u,c);else if(c=j1(o,u,c,h),c!==null){var g=nn();nr(c,o,h,g),s6(c,u,h)}}function SC(o,u,c){var h=ya(o),g={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(i6(o))u6(u,g);else{var B=o.alternate;if(o.lanes===0&&(B===null||B.lanes===0)&&(B=u.lastRenderedReducer,B!==null))try{var k=u.lastRenderedState,D=B(k,c);if(g.hasEagerState=!0,g.eagerState=D,Xn(D,k)){var q=u.interleaved;q===null?(g.next=g,Bf(u)):(g.next=q.next,q.next=g),u.interleaved=g;return}}catch{}finally{}c=j1(o,u,g,h),c!==null&&(g=nn(),nr(c,o,h,g),s6(c,u,h))}}function i6(o){var u=o.alternate;return o===dt||u!==null&&u===dt}function u6(o,u){Wu=Hl=!0;var c=o.pending;c===null?u.next=u:(u.next=c.next,c.next=u),o.pending=u}function s6(o,u,c){if((c&4194240)!==0){var h=u.lanes;h&=o.pendingLanes,c|=h,u.lanes=c,N0(o,c)}}var Ll={readContext:Nn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},AC={readContext:Nn,useCallback:function(o,u){return hr().memoizedState=[o,u===void 0?null:u],o},useContext:Nn,useEffect:X1,useImperativeHandle:function(o,u,c){return c=c!=null?c.concat([o]):null,Dl(4194308,4,e6.bind(null,u,o),c)},useLayoutEffect:function(o,u){return Dl(4194308,4,o,u)},useInsertionEffect:function(o,u){return Dl(4,2,o,u)},useMemo:function(o,u){var c=hr();return u=u===void 0?null:u,o=o(),c.memoizedState=[o,u],o},useReducer:function(o,u,c){var h=hr();return u=c!==void 0?c(u):u,h.memoizedState=h.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},h.queue=o,o=o.dispatch=PC.bind(null,dt,o),[h.memoizedState,o]},useRef:function(o){var u=hr();return o={current:o},u.memoizedState=o},useState:Q1,useDebugValue:Tf,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=Q1(!1),u=o[0];return o=wC.bind(null,o[1]),hr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,c){var h=dt,g=hr();if(ct){if(c===void 0)throw Error(n(407));c=c()}else{if(c=u(),$t===null)throw Error(n(349));(Qa&30)!==0||z1(h,u,c)}g.memoizedState=c;var B={value:c,getSnapshot:u};return g.queue=B,X1(V1.bind(null,h,B,o),[o]),h.flags|=2048,ku(9,U1.bind(null,h,B,c,u),void 0,null),c},useId:function(){var o=hr(),u=$t.identifierPrefix;if(ct){var c=Cr,h=Mr;c=(h&~(1<<32-Yn(h)-1)).toString(32)+c,u=":"+u+"R"+c,c=Mu++,0<c&&(u+="H"+c.toString(32)),u+=":"}else c=xC++,u=":"+u+"r"+c.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},_C={readContext:Nn,useCallback:n6,useContext:Nn,useEffect:Ef,useImperativeHandle:t6,useInsertionEffect:Z1,useLayoutEffect:J1,useMemo:r6,useReducer:Cf,useRef:Y1,useState:function(){return Cf(Cu)},useDebugValue:Tf,useDeferredValue:function(o){var u=Rn();return a6(u,kt.memoizedState,o)},useTransition:function(){var o=Cf(Cu)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:F1,useSyncExternalStore:q1,useId:o6,unstable_isNewReconciler:!1},OC={readContext:Nn,useCallback:n6,useContext:Nn,useEffect:Ef,useImperativeHandle:t6,useInsertionEffect:Z1,useLayoutEffect:J1,useMemo:r6,useReducer:kf,useRef:Y1,useState:function(){return kf(Cu)},useDebugValue:Tf,useDeferredValue:function(o){var u=Rn();return kt===null?u.memoizedState=o:a6(u,kt.memoizedState,o)},useTransition:function(){var o=kf(Cu)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:F1,useSyncExternalStore:q1,useId:o6,unstable_isNewReconciler:!1};function Jn(o,u){if(o&&o.defaultProps){u=Y({},u),o=o.defaultProps;for(var c in o)u[c]===void 0&&(u[c]=o[c]);return u}return u}function Nf(o,u,c,h){u=o.memoizedState,c=c(h,u),c=c==null?u:Y({},u,c),o.memoizedState=c,o.lanes===0&&(o.updateQueue.baseState=c)}var Fl={isMounted:function(o){return(o=o._reactInternals)?Fa(o)===o:!1},enqueueSetState:function(o,u,c){o=o._reactInternals;var h=nn(),g=ya(o),B=Er(h,g);B.payload=u,c!=null&&(B.callback=c),u=ha(o,B,g),u!==null&&(nr(u,o,g,h),Tl(u,o,g))},enqueueReplaceState:function(o,u,c){o=o._reactInternals;var h=nn(),g=ya(o),B=Er(h,g);B.tag=1,B.payload=u,c!=null&&(B.callback=c),u=ha(o,B,g),u!==null&&(nr(u,o,g,h),Tl(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var c=nn(),h=ya(o),g=Er(c,h);g.tag=2,u!=null&&(g.callback=u),u=ha(o,g,h),u!==null&&(nr(u,o,h,c),Tl(u,o,h))}};function l6(o,u,c,h,g,B,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,B,k):u.prototype&&u.prototype.isPureReactComponent?!yu(c,h)||!yu(g,B):!0}function c6(o,u,c){var h=!1,g=pa,B=u.contextType;return typeof B=="object"&&B!==null?B=Nn(B):(g=fn(u)?za:Qt.current,h=u.contextTypes,B=(h=h!=null)?Ho(o,g):pa),u=new u(c,B),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Fl,o.stateNode=u,u._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=B),u}function p6(o,u,c,h){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(c,h),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(c,h),u.state!==o&&Fl.enqueueReplaceState(u,u.state,null)}function Rf(o,u,c,h){var g=o.stateNode;g.props=c,g.state=o.memoizedState,g.refs={},xf(o);var B=u.contextType;typeof B=="object"&&B!==null?g.context=Nn(B):(B=fn(u)?za:Qt.current,g.context=Ho(o,B)),g.state=o.memoizedState,B=u.getDerivedStateFromProps,typeof B=="function"&&(Nf(o,u,B,c),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&Fl.enqueueReplaceState(g,g.state,null),Nl(o,c,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Vo(o,u){try{var c="",h=u;do c+=he(h),h=h.return;while(h);var g=c}catch(B){g=`
Error generating stack: `+B.message+`
`+B.stack}return{value:o,source:u,stack:g,digest:null}}function jf(o,u,c){return{value:o,source:null,stack:c??null,digest:u??null}}function Hf(o,u){try{console.error(u.value)}catch(c){setTimeout(function(){throw c})}}var WC=typeof WeakMap=="function"?WeakMap:Map;function f6(o,u,c){c=Er(-1,c),c.tag=3,c.payload={element:null};var h=u.value;return c.callback=function(){Ql||(Ql=!0,Jf=h),Hf(o,u)},c}function d6(o,u,c){c=Er(-1,c),c.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;c.payload=function(){return h(g)},c.callback=function(){Hf(o,u)}}var B=o.stateNode;return B!==null&&typeof B.componentDidCatch=="function"&&(c.callback=function(){Hf(o,u),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),c}function h6(o,u,c){var h=o.pingCache;if(h===null){h=o.pingCache=new WC;var g=new Set;h.set(u,g)}else g=h.get(u),g===void 0&&(g=new Set,h.set(u,g));g.has(c)||(g.add(c),o=qC.bind(null,o,u,c),u.then(o,o))}function m6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function v6(o,u,c,h,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(u=Er(-1,1),u.tag=2,ha(c,u,1))),c.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var MC=M.ReactCurrentOwner,dn=!1;function tn(o,u,c,h){u.child=o===null?R1(u,null,c,h):Fo(u,o.child,c,h)}function g6(o,u,c,h,g){c=c.render;var B=u.ref;return zo(u,g),h=Wf(o,u,c,h,B,g),c=Mf(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Tr(o,u,g)):(ct&&c&&ff(u),u.flags|=1,tn(o,u,h,g),u.child)}function y6(o,u,c,h,g){if(o===null){var B=c.type;return typeof B=="function"&&!i2(B)&&B.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(u.tag=15,u.type=B,b6(o,u,B,h,g)):(o=tc(c.type,null,h,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(B=o.child,(o.lanes&g)===0){var k=B.memoizedProps;if(c=c.compare,c=c!==null?c:yu,c(k,h)&&o.ref===u.ref)return Tr(o,u,g)}return u.flags|=1,o=Ia(B,h),o.ref=u.ref,o.return=u,u.child=o}function b6(o,u,c,h,g){if(o!==null){var B=o.memoizedProps;if(yu(B,h)&&o.ref===u.ref)if(dn=!1,u.pendingProps=h=B,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dn=!0);else return u.lanes=o.lanes,Tr(o,u,g)}return Df(o,u,c,h,g)}function I6(o,u,c){var h=u.pendingProps,g=h.children,B=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ko,xn),xn|=c;else{if((c&1073741824)===0)return o=B!==null?B.baseLanes|c:c,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,nt(Ko,xn),xn|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=B!==null?B.baseLanes:c,nt(Ko,xn),xn|=h}else B!==null?(h=B.baseLanes|c,u.memoizedState=null):h=c,nt(Ko,xn),xn|=h;return tn(o,u,g,c),u.child}function B6(o,u){var c=u.ref;(o===null&&c!==null||o!==null&&o.ref!==c)&&(u.flags|=512,u.flags|=2097152)}function Df(o,u,c,h,g){var B=fn(c)?za:Qt.current;return B=Ho(u,B),zo(u,g),c=Wf(o,u,c,h,B,g),h=Mf(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Tr(o,u,g)):(ct&&h&&ff(u),u.flags|=1,tn(o,u,c,g),u.child)}function x6(o,u,c,h,g){if(fn(c)){var B=!0;Al(u)}else B=!1;if(zo(u,g),u.stateNode===null)zl(o,u),c6(u,c,h),Rf(u,c,h,g),h=!0;else if(o===null){var k=u.stateNode,D=u.memoizedProps;k.props=D;var q=k.context,te=c.contextType;typeof te=="object"&&te!==null?te=Nn(te):(te=fn(c)?za:Qt.current,te=Ho(u,te));var ie=c.getDerivedStateFromProps,se=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==h||q!==te)&&p6(u,k,h,te),da=!1;var oe=u.memoizedState;k.state=oe,Nl(u,h,k,g),q=u.memoizedState,D!==h||oe!==q||pn.current||da?(typeof ie=="function"&&(Nf(u,c,ie,h),q=u.memoizedState),(D=da||l6(u,c,D,h,oe,q,te))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=h,u.memoizedState=q),k.props=h,k.state=q,k.context=te,h=D):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),h=!1)}else{k=u.stateNode,H1(o,u),D=u.memoizedProps,te=u.type===u.elementType?D:Jn(u.type,D),k.props=te,se=u.pendingProps,oe=k.context,q=c.contextType,typeof q=="object"&&q!==null?q=Nn(q):(q=fn(c)?za:Qt.current,q=Ho(u,q));var me=c.getDerivedStateFromProps;(ie=typeof me=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==se||oe!==q)&&p6(u,k,h,q),da=!1,oe=u.memoizedState,k.state=oe,Nl(u,h,k,g);var Be=u.memoizedState;D!==se||oe!==Be||pn.current||da?(typeof me=="function"&&(Nf(u,c,me,h),Be=u.memoizedState),(te=da||l6(u,c,te,h,oe,Be,q)||!1)?(ie||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(h,Be,q),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(h,Be,q)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=h,u.memoizedState=Be),k.props=h,k.state=Be,k.context=q,h=te):(typeof k.componentDidUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),h=!1)}return $f(o,u,c,h,B,g)}function $f(o,u,c,h,g,B){B6(o,u);var k=(u.flags&128)!==0;if(!h&&!k)return g&&_1(u,c,!1),Tr(o,u,B);h=u.stateNode,MC.current=u;var D=k&&typeof c.getDerivedStateFromError!="function"?null:h.render();return u.flags|=1,o!==null&&k?(u.child=Fo(u,o.child,null,B),u.child=Fo(u,null,D,B)):tn(o,u,D,B),u.memoizedState=h.state,g&&_1(u,c,!0),u.child}function w6(o){var u=o.stateNode;u.pendingContext?S1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&S1(o,u.context,!1),wf(o,u.containerInfo)}function P6(o,u,c,h,g){return Lo(),vf(g),u.flags|=256,tn(o,u,c,h),u.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Ff(o){return{baseLanes:o,cachePool:null,transitions:null}}function S6(o,u,c){var h=u.pendingProps,g=ft.current,B=!1,k=(u.flags&128)!==0,D;if((D=k)||(D=o!==null&&o.memoizedState===null?!1:(g&2)!==0),D?(B=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),nt(ft,g&1),o===null)return mf(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=h.children,o=h.fallback,B?(h=u.mode,B=u.child,k={mode:"hidden",children:k},(h&1)===0&&B!==null?(B.childLanes=0,B.pendingProps=k):B=nc(k,h,0,null),o=eo(o,h,c,null),B.return=u,o.return=u,B.sibling=o,u.child=B,u.child.memoizedState=Ff(c),u.memoizedState=Lf,o):qf(u,k));if(g=o.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return CC(o,u,k,h,D,g,c);if(B){B=h.fallback,k=u.mode,g=o.child,D=g.sibling;var q={mode:"hidden",children:h.children};return(k&1)===0&&u.child!==g?(h=u.child,h.childLanes=0,h.pendingProps=q,u.deletions=null):(h=Ia(g,q),h.subtreeFlags=g.subtreeFlags&14680064),D!==null?B=Ia(D,B):(B=eo(B,k,c,null),B.flags|=2),B.return=u,h.return=u,h.sibling=B,u.child=h,h=B,B=u.child,k=o.child.memoizedState,k=k===null?Ff(c):{baseLanes:k.baseLanes|c,cachePool:null,transitions:k.transitions},B.memoizedState=k,B.childLanes=o.childLanes&~c,u.memoizedState=Lf,h}return B=o.child,o=B.sibling,h=Ia(B,{mode:"visible",children:h.children}),(u.mode&1)===0&&(h.lanes=c),h.return=u,h.sibling=null,o!==null&&(c=u.deletions,c===null?(u.deletions=[o],u.flags|=16):c.push(o)),u.child=h,u.memoizedState=null,h}function qf(o,u){return u=nc({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function ql(o,u,c,h){return h!==null&&vf(h),Fo(u,o.child,null,c),o=qf(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function CC(o,u,c,h,g,B,k){if(c)return u.flags&256?(u.flags&=-257,h=jf(Error(n(422))),ql(o,u,k,h)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(B=h.fallback,g=u.mode,h=nc({mode:"visible",children:h.children},g,0,null),B=eo(B,g,k,null),B.flags|=2,h.return=u,B.return=u,h.sibling=B,u.child=h,(u.mode&1)!==0&&Fo(u,o.child,null,k),u.child.memoizedState=Ff(k),u.memoizedState=Lf,B);if((u.mode&1)===0)return ql(o,u,k,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var D=h.dgst;return h=D,B=Error(n(419)),h=jf(B,h,void 0),ql(o,u,k,h)}if(D=(k&o.childLanes)!==0,dn||D){if(h=$t,h!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|k))!==0?0:g,g!==0&&g!==B.retryLane&&(B.retryLane=g,kr(o,g),nr(h,o,g,-1))}return o2(),h=jf(Error(n(421))),ql(o,u,k,h)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=zC.bind(null,o),g._reactRetry=u,null):(o=B.treeContext,Bn=la(g.nextSibling),In=u,ct=!0,Zn=null,o!==null&&(En[Tn++]=Mr,En[Tn++]=Cr,En[Tn++]=Ua,Mr=o.id,Cr=o.overflow,Ua=u),u=qf(u,h.children),u.flags|=4096,u)}function A6(o,u,c){o.lanes|=u;var h=o.alternate;h!==null&&(h.lanes|=u),If(o.return,u,c)}function zf(o,u,c,h,g){var B=o.memoizedState;B===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:g}:(B.isBackwards=u,B.rendering=null,B.renderingStartTime=0,B.last=h,B.tail=c,B.tailMode=g)}function _6(o,u,c){var h=u.pendingProps,g=h.revealOrder,B=h.tail;if(tn(o,u,h.children,c),h=ft.current,(h&2)!==0)h=h&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&A6(o,c,u);else if(o.tag===19)A6(o,c,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(nt(ft,h),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(c=u.child,g=null;c!==null;)o=c.alternate,o!==null&&Rl(o)===null&&(g=c),c=c.sibling;c=g,c===null?(g=u.child,u.child=null):(g=c.sibling,c.sibling=null),zf(u,!1,g,c,B);break;case"backwards":for(c=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Rl(o)===null){u.child=g;break}o=g.sibling,g.sibling=c,c=g,g=o}zf(u,!0,c,null,B);break;case"together":zf(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function zl(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Tr(o,u,c){if(o!==null&&(u.dependencies=o.dependencies),Ya|=u.lanes,(c&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(n(153));if(u.child!==null){for(o=u.child,c=Ia(o,o.pendingProps),u.child=c,c.return=u;o.sibling!==null;)o=o.sibling,c=c.sibling=Ia(o,o.pendingProps),c.return=u;c.sibling=null}return u.child}function kC(o,u,c){switch(u.tag){case 3:w6(u),Lo();break;case 5:L1(u);break;case 1:fn(u.type)&&Al(u);break;case 4:wf(u,u.stateNode.containerInfo);break;case 10:var h=u.type._context,g=u.memoizedProps.value;nt(kl,h._currentValue),h._currentValue=g;break;case 13:if(h=u.memoizedState,h!==null)return h.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(c&u.child.childLanes)!==0?S6(o,u,c):(nt(ft,ft.current&1),o=Tr(o,u,c),o!==null?o.sibling:null);nt(ft,ft.current&1);break;case 19:if(h=(c&u.childLanes)!==0,(o.flags&128)!==0){if(h)return _6(o,u,c);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),nt(ft,ft.current),h)break;return null;case 22:case 23:return u.lanes=0,I6(o,u,c)}return Tr(o,u,c)}var O6,Uf,W6,M6;O6=function(o,u){for(var c=u.child;c!==null;){if(c.tag===5||c.tag===6)o.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===u)break;for(;c.sibling===null;){if(c.return===null||c.return===u)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Uf=function(){},W6=function(o,u,c,h){var g=o.memoizedProps;if(g!==h){o=u.stateNode,Ka(dr.current);var B=null;switch(c){case"input":g=Pe(o,g),h=Pe(o,h),B=[];break;case"select":g=Y({},g,{value:void 0}),h=Y({},h,{value:void 0}),B=[];break;case"textarea":g=vt(o,g),h=vt(o,h),B=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=wl)}P0(c,h);var k;c=null;for(te in g)if(!h.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var D=g[te];for(k in D)D.hasOwnProperty(k)&&(c||(c={}),c[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?B||(B=[]):(B=B||[]).push(te,null));for(te in h){var q=h[te];if(D=g!=null?g[te]:void 0,h.hasOwnProperty(te)&&q!==D&&(q!=null||D!=null))if(te==="style")if(D){for(k in D)!D.hasOwnProperty(k)||q&&q.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in q)q.hasOwnProperty(k)&&D[k]!==q[k]&&(c||(c={}),c[k]=q[k])}else c||(B||(B=[]),B.push(te,c)),c=q;else te==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,D=D?D.__html:void 0,q!=null&&D!==q&&(B=B||[]).push(te,q)):te==="children"?typeof q!="string"&&typeof q!="number"||(B=B||[]).push(te,""+q):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(q!=null&&te==="onScroll"&&it("scroll",o),B||D===q||(B=[])):(B=B||[]).push(te,q))}c&&(B=B||[]).push("style",c);var te=B;(u.updateQueue=te)&&(u.flags|=4)}},M6=function(o,u,c,h){c!==h&&(u.flags|=4)};function Eu(o,u){if(!ct)switch(o.tailMode){case"hidden":u=o.tail;for(var c=null;u!==null;)u.alternate!==null&&(c=u),u=u.sibling;c===null?o.tail=null:c.sibling=null;break;case"collapsed":c=o.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Xt(o){var u=o.alternate!==null&&o.alternate.child===o.child,c=0,h=0;if(u)for(var g=o.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=c,u}function EC(o,u,c){var h=u.pendingProps;switch(df(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&Sl(),Xt(u),null;case 3:return h=u.stateNode,Uo(),ut(pn),ut(Qt),Af(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(Ml(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Zn!==null&&(n2(Zn),Zn=null))),Uf(o,u),Xt(u),null;case 5:Pf(u);var g=Ka(Ou.current);if(c=u.type,o!==null&&u.stateNode!=null)W6(o,u,c,h,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!h){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(o=Ka(dr.current),Ml(u)){h=u.stateNode,c=u.type;var B=u.memoizedProps;switch(h[fr]=u,h[wu]=B,o=(u.mode&1)!==0,c){case"dialog":it("cancel",h),it("close",h);break;case"iframe":case"object":case"embed":it("load",h);break;case"video":case"audio":for(g=0;g<Iu.length;g++)it(Iu[g],h);break;case"source":it("error",h);break;case"img":case"image":case"link":it("error",h),it("load",h);break;case"details":it("toggle",h);break;case"input":Ce(h,B),it("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!B.multiple},it("invalid",h);break;case"textarea":Mn(h,B),it("invalid",h)}P0(c,B),g=null;for(var k in B)if(B.hasOwnProperty(k)){var D=B[k];k==="children"?typeof D=="string"?h.textContent!==D&&(B.suppressHydrationWarning!==!0&&xl(h.textContent,D,o),g=["children",D]):typeof D=="number"&&h.textContent!==""+D&&(B.suppressHydrationWarning!==!0&&xl(h.textContent,D,o),g=["children",""+D]):a.hasOwnProperty(k)&&D!=null&&k==="onScroll"&&it("scroll",h)}switch(c){case"input":pe(h),He(h,B,!0);break;case"textarea":pe(h),Kt(h);break;case"select":case"option":break;default:typeof B.onClick=="function"&&(h.onclick=wl)}h=g,u.updateQueue=h,h!==null&&(u.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=xt(c)),o==="http://www.w3.org/1999/xhtml"?c==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=k.createElement(c,{is:h.is}):(o=k.createElement(c),c==="select"&&(k=o,h.multiple?k.multiple=!0:h.size&&(k.size=h.size))):o=k.createElementNS(o,c),o[fr]=u,o[wu]=h,O6(o,u,!1,!1),u.stateNode=o;e:{switch(k=S0(c,h),c){case"dialog":it("cancel",o),it("close",o),g=h;break;case"iframe":case"object":case"embed":it("load",o),g=h;break;case"video":case"audio":for(g=0;g<Iu.length;g++)it(Iu[g],o);g=h;break;case"source":it("error",o),g=h;break;case"img":case"image":case"link":it("error",o),it("load",o),g=h;break;case"details":it("toggle",o),g=h;break;case"input":Ce(o,h),g=Pe(o,h),it("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=Y({},h,{value:void 0}),it("invalid",o);break;case"textarea":Mn(o,h),g=vt(o,h),it("invalid",o);break;default:g=h}P0(c,g),D=g;for(B in D)if(D.hasOwnProperty(B)){var q=D[B];B==="style"?nu(o,q):B==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Ao(o,q)):B==="children"?typeof q=="string"?(c!=="textarea"||q!=="")&&ta(o,q):typeof q=="number"&&ta(o,""+q):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(a.hasOwnProperty(B)?q!=null&&B==="onScroll"&&it("scroll",o):q!=null&&_(o,B,q,k))}switch(c){case"input":pe(o),He(o,h,!1);break;case"textarea":pe(o),Kt(o);break;case"option":h.value!=null&&o.setAttribute("value",""+fe(h.value));break;case"select":o.multiple=!!h.multiple,B=h.value,B!=null?Bt(o,!!h.multiple,B,!1):h.defaultValue!=null&&Bt(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=wl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(o&&u.stateNode!=null)M6(o,u,o.memoizedProps,h);else{if(typeof h!="string"&&u.stateNode===null)throw Error(n(166));if(c=Ka(Ou.current),Ka(dr.current),Ml(u)){if(h=u.stateNode,c=u.memoizedProps,h[fr]=u,(B=h.nodeValue!==c)&&(o=In,o!==null))switch(o.tag){case 3:xl(h.nodeValue,c,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&xl(h.nodeValue,c,(o.mode&1)!==0)}B&&(u.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[fr]=u,u.stateNode=h}return Xt(u),null;case 13:if(ut(ft),h=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(ct&&Bn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)E1(),Lo(),u.flags|=98560,B=!1;else if(B=Ml(u),h!==null&&h.dehydrated!==null){if(o===null){if(!B)throw Error(n(318));if(B=u.memoizedState,B=B!==null?B.dehydrated:null,!B)throw Error(n(317));B[fr]=u}else Lo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),B=!1}else Zn!==null&&(n2(Zn),Zn=null),B=!0;if(!B)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=c,u):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(ft.current&1)!==0?Et===0&&(Et=3):o2())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return Uo(),Uf(o,u),o===null&&Bu(u.stateNode.containerInfo),Xt(u),null;case 10:return bf(u.type._context),Xt(u),null;case 17:return fn(u.type)&&Sl(),Xt(u),null;case 19:if(ut(ft),B=u.memoizedState,B===null)return Xt(u),null;if(h=(u.flags&128)!==0,k=B.rendering,k===null)if(h)Eu(B,!1);else{if(Et!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(k=Rl(o),k!==null){for(u.flags|=128,Eu(B,!1),h=k.updateQueue,h!==null&&(u.updateQueue=h,u.flags|=4),u.subtreeFlags=0,h=c,c=u.child;c!==null;)B=c,o=h,B.flags&=14680066,k=B.alternate,k===null?(B.childLanes=0,B.lanes=o,B.child=null,B.subtreeFlags=0,B.memoizedProps=null,B.memoizedState=null,B.updateQueue=null,B.dependencies=null,B.stateNode=null):(B.childLanes=k.childLanes,B.lanes=k.lanes,B.child=k.child,B.subtreeFlags=0,B.deletions=null,B.memoizedProps=k.memoizedProps,B.memoizedState=k.memoizedState,B.updateQueue=k.updateQueue,B.type=k.type,o=k.dependencies,B.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),c=c.sibling;return nt(ft,ft.current&1|2),u.child}o=o.sibling}B.tail!==null&&wt()>Qo&&(u.flags|=128,h=!0,Eu(B,!1),u.lanes=4194304)}else{if(!h)if(o=Rl(k),o!==null){if(u.flags|=128,h=!0,c=o.updateQueue,c!==null&&(u.updateQueue=c,u.flags|=4),Eu(B,!0),B.tail===null&&B.tailMode==="hidden"&&!k.alternate&&!ct)return Xt(u),null}else 2*wt()-B.renderingStartTime>Qo&&c!==1073741824&&(u.flags|=128,h=!0,Eu(B,!1),u.lanes=4194304);B.isBackwards?(k.sibling=u.child,u.child=k):(c=B.last,c!==null?c.sibling=k:u.child=k,B.last=k)}return B.tail!==null?(u=B.tail,B.rendering=u,B.tail=u.sibling,B.renderingStartTime=wt(),u.sibling=null,c=ft.current,nt(ft,h?c&1|2:c&1),u):(Xt(u),null);case 22:case 23:return a2(),h=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(u.flags|=8192),h&&(u.mode&1)!==0?(xn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function TC(o,u){switch(df(u),u.tag){case 1:return fn(u.type)&&Sl(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Uo(),ut(pn),ut(Qt),Af(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return Pf(u),null;case 13:if(ut(ft),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(n(340));Lo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return ut(ft),null;case 4:return Uo(),null;case 10:return bf(u.type._context),null;case 22:case 23:return a2(),null;case 24:return null;default:return null}}var Ul=!1,Zt=!1,NC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Go(o,u){var c=o.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){yt(o,u,h)}else c.current=null}function Vf(o,u,c){try{c()}catch(h){yt(o,u,h)}}var C6=!1;function RC(o,u){if(rf=pl,o=l1(),Q0(o)){if("selectionStart"in o)var c={start:o.selectionStart,end:o.selectionEnd};else e:{c=(c=o.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var g=h.anchorOffset,B=h.focusNode;h=h.focusOffset;try{c.nodeType,B.nodeType}catch{c=null;break e}var k=0,D=-1,q=-1,te=0,ie=0,se=o,oe=null;t:for(;;){for(var me;se!==c||g!==0&&se.nodeType!==3||(D=k+g),se!==B||h!==0&&se.nodeType!==3||(q=k+h),se.nodeType===3&&(k+=se.nodeValue.length),(me=se.firstChild)!==null;)oe=se,se=me;for(;;){if(se===o)break t;if(oe===c&&++te===g&&(D=k),oe===B&&++ie===h&&(q=k),(me=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=me}c=D===-1||q===-1?null:{start:D,end:q}}else c=null}c=c||{start:0,end:0}}else c=null;for(af={focusedElem:o,selectionRange:c},pl=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Pt=Be.memoizedState,Z=u.stateNode,V=Z.getSnapshotBeforeUpdate(u.elementType===u.type?Se:Jn(u.type,Se),Pt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ce){yt(u,u.return,ce)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=C6,C6=!1,Be}function Tu(o,u,c){var h=u.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var B=g.destroy;g.destroy=void 0,B!==void 0&&Vf(u,c,B)}g=g.next}while(g!==h)}}function Vl(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var c=u=u.next;do{if((c.tag&o)===o){var h=c.create;c.destroy=h()}c=c.next}while(c!==u)}}function Gf(o){var u=o.ref;if(u!==null){var c=o.stateNode;switch(o.tag){case 5:o=c;break;default:o=c}typeof u=="function"?u(o):u.current=o}}function k6(o){var u=o.alternate;u!==null&&(o.alternate=null,k6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[fr],delete u[wu],delete u[lf],delete u[yC],delete u[bC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function E6(o){return o.tag===5||o.tag===3||o.tag===4}function T6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||E6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Kf(o,u,c){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?c.nodeType===8?c.parentNode.insertBefore(o,u):c.insertBefore(o,u):(c.nodeType===8?(u=c.parentNode,u.insertBefore(o,c)):(u=c,u.appendChild(o)),c=c._reactRootContainer,c!=null||u.onclick!==null||(u.onclick=wl));else if(h!==4&&(o=o.child,o!==null))for(Kf(o,u,c),o=o.sibling;o!==null;)Kf(o,u,c),o=o.sibling}function Qf(o,u,c){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?c.insertBefore(o,u):c.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Qf(o,u,c),o=o.sibling;o!==null;)Qf(o,u,c),o=o.sibling}var Ut=null,er=!1;function ma(o,u,c){for(c=c.child;c!==null;)N6(o,u,c),c=c.sibling}function N6(o,u,c){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(ol,c)}catch{}switch(c.tag){case 5:Zt||Go(c,u);case 6:var h=Ut,g=er;Ut=null,ma(o,u,c),Ut=h,er=g,Ut!==null&&(er?(o=Ut,c=c.stateNode,o.nodeType===8?o.parentNode.removeChild(c):o.removeChild(c)):Ut.removeChild(c.stateNode));break;case 18:Ut!==null&&(er?(o=Ut,c=c.stateNode,o.nodeType===8?sf(o.parentNode,c):o.nodeType===1&&sf(o,c),fu(o)):sf(Ut,c.stateNode));break;case 4:h=Ut,g=er,Ut=c.stateNode.containerInfo,er=!0,ma(o,u,c),Ut=h,er=g;break;case 0:case 11:case 14:case 15:if(!Zt&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var B=g,k=B.destroy;B=B.tag,k!==void 0&&((B&2)!==0||(B&4)!==0)&&Vf(c,u,k),g=g.next}while(g!==h)}ma(o,u,c);break;case 1:if(!Zt&&(Go(c,u),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(D){yt(c,u,D)}ma(o,u,c);break;case 21:ma(o,u,c);break;case 22:c.mode&1?(Zt=(h=Zt)||c.memoizedState!==null,ma(o,u,c),Zt=h):ma(o,u,c);break;default:ma(o,u,c)}}function R6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var c=o.stateNode;c===null&&(c=o.stateNode=new NC),u.forEach(function(h){var g=UC.bind(null,o,h);c.has(h)||(c.add(h),h.then(g,g))})}}function tr(o,u){var c=u.deletions;if(c!==null)for(var h=0;h<c.length;h++){var g=c[h];try{var B=o,k=u,D=k;e:for(;D!==null;){switch(D.tag){case 5:Ut=D.stateNode,er=!1;break e;case 3:Ut=D.stateNode.containerInfo,er=!0;break e;case 4:Ut=D.stateNode.containerInfo,er=!0;break e}D=D.return}if(Ut===null)throw Error(n(160));N6(B,k,g),Ut=null,er=!1;var q=g.alternate;q!==null&&(q.return=null),g.return=null}catch(te){yt(g,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)j6(u,o),u=u.sibling}function j6(o,u){var c=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),mr(o),h&4){try{Tu(3,o,o.return),Vl(3,o)}catch(Se){yt(o,o.return,Se)}try{Tu(5,o,o.return)}catch(Se){yt(o,o.return,Se)}}break;case 1:tr(u,o),mr(o),h&512&&c!==null&&Go(c,c.return);break;case 5:if(tr(u,o),mr(o),h&512&&c!==null&&Go(c,c.return),o.flags&32){var g=o.stateNode;try{ta(g,"")}catch(Se){yt(o,o.return,Se)}}if(h&4&&(g=o.stateNode,g!=null)){var B=o.memoizedProps,k=c!==null?c.memoizedProps:B,D=o.type,q=o.updateQueue;if(o.updateQueue=null,q!==null)try{D==="input"&&B.type==="radio"&&B.name!=null&&_e(g,B),S0(D,k);var te=S0(D,B);for(k=0;k<q.length;k+=2){var ie=q[k],se=q[k+1];ie==="style"?nu(g,se):ie==="dangerouslySetInnerHTML"?Ao(g,se):ie==="children"?ta(g,se):_(g,ie,se,te)}switch(D){case"input":Fe(g,B);break;case"textarea":gt(g,B);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!B.multiple;var me=B.value;me!=null?Bt(g,!!B.multiple,me,!1):oe!==!!B.multiple&&(B.defaultValue!=null?Bt(g,!!B.multiple,B.defaultValue,!0):Bt(g,!!B.multiple,B.multiple?[]:"",!1))}g[wu]=B}catch(Se){yt(o,o.return,Se)}}break;case 6:if(tr(u,o),mr(o),h&4){if(o.stateNode===null)throw Error(n(162));g=o.stateNode,B=o.memoizedProps;try{g.nodeValue=B}catch(Se){yt(o,o.return,Se)}}break;case 3:if(tr(u,o),mr(o),h&4&&c!==null&&c.memoizedState.isDehydrated)try{fu(u.containerInfo)}catch(Se){yt(o,o.return,Se)}break;case 4:tr(u,o),mr(o);break;case 13:tr(u,o),mr(o),g=o.child,g.flags&8192&&(B=g.memoizedState!==null,g.stateNode.isHidden=B,!B||g.alternate!==null&&g.alternate.memoizedState!==null||(Zf=wt())),h&4&&R6(o);break;case 22:if(ie=c!==null&&c.memoizedState!==null,o.mode&1?(Zt=(te=Zt)||ie,tr(u,o),Zt=te):tr(u,o),mr(o),h&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:Tu(4,oe,oe.return);break;case 1:Go(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){h=oe,c=oe.return;try{u=h,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){yt(h,c,Se)}}break;case 5:Go(oe,oe.return);break;case 22:if(oe.memoizedState!==null){$6(se);continue}}me!==null?(me.return=oe,be=me):$6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{g=se.stateNode,te?(B=g.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none"):(D=se.stateNode,q=se.memoizedProps.style,k=q!=null&&q.hasOwnProperty("display")?q.display:null,D.style.display=na("display",k))}catch(Se){yt(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){yt(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),mr(o),h&4&&R6(o);break;case 21:break;default:tr(u,o),mr(o)}}function mr(o){var u=o.flags;if(u&2){try{e:{for(var c=o.return;c!==null;){if(E6(c)){var h=c;break e}c=c.return}throw Error(n(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(ta(g,""),h.flags&=-33);var B=T6(o);Qf(o,B,g);break;case 3:case 4:var k=h.stateNode.containerInfo,D=T6(o);Kf(o,D,k);break;default:throw Error(n(161))}}catch(q){yt(o,o.return,q)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function jC(o,u,c){be=o,H6(o)}function H6(o,u,c){for(var h=(o.mode&1)!==0;be!==null;){var g=be,B=g.child;if(g.tag===22&&h){var k=g.memoizedState!==null||Ul;if(!k){var D=g.alternate,q=D!==null&&D.memoizedState!==null||Zt;D=Ul;var te=Zt;if(Ul=k,(Zt=q)&&!te)for(be=g;be!==null;)k=be,q=k.child,k.tag===22&&k.memoizedState!==null?L6(g):q!==null?(q.return=k,be=q):L6(g);for(;B!==null;)be=B,H6(B),B=B.sibling;be=g,Ul=D,Zt=te}D6(o)}else(g.subtreeFlags&8772)!==0&&B!==null?(B.return=g,be=B):D6(o)}}function D6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var c=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||Vl(5,u);break;case 1:var h=u.stateNode;if(u.flags&4&&!Zt)if(c===null)h.componentDidMount();else{var g=u.elementType===u.type?c.memoizedProps:Jn(u.type,c.memoizedProps);h.componentDidUpdate(g,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var B=u.updateQueue;B!==null&&$1(u,B,h);break;case 3:var k=u.updateQueue;if(k!==null){if(c=null,u.child!==null)switch(u.child.tag){case 5:c=u.child.stateNode;break;case 1:c=u.child.stateNode}$1(u,k,c)}break;case 5:var D=u.stateNode;if(c===null&&u.flags&4){c=D;var q=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&c.focus();break;case"img":q.src&&(c.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var ie=te.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&fu(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&Gf(u)}catch(oe){yt(u,u.return,oe)}}if(u===o){be=null;break}if(c=u.sibling,c!==null){c.return=u.return,be=c;break}be=u.return}}function $6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var c=u.sibling;if(c!==null){c.return=u.return,be=c;break}be=u.return}}function L6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var c=u.return;try{Vl(4,u)}catch(q){yt(u,c,q)}break;case 1:var h=u.stateNode;if(typeof h.componentDidMount=="function"){var g=u.return;try{h.componentDidMount()}catch(q){yt(u,g,q)}}var B=u.return;try{Gf(u)}catch(q){yt(u,B,q)}break;case 5:var k=u.return;try{Gf(u)}catch(q){yt(u,k,q)}}}catch(q){yt(u,u.return,q)}if(u===o){be=null;break}var D=u.sibling;if(D!==null){D.return=u.return,be=D;break}be=u.return}}var HC=Math.ceil,Gl=M.ReactCurrentDispatcher,Yf=M.ReactCurrentOwner,jn=M.ReactCurrentBatchConfig,ze=0,$t=null,Ot=null,Vt=0,xn=0,Ko=ca(0),Et=0,Nu=null,Ya=0,Kl=0,Xf=0,Ru=null,hn=null,Zf=0,Qo=1/0,Nr=null,Ql=!1,Jf=null,va=null,Yl=!1,ga=null,Xl=0,ju=0,e2=null,Zl=-1,Jl=0;function nn(){return(ze&6)!==0?wt():Zl!==-1?Zl:Zl=wt()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:BC.transition!==null?(Jl===0&&(Jl=Tb()),Jl):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:qb(o.type)),o)}function nr(o,u,c,h){if(50<ju)throw ju=0,e2=null,Error(n(185));uu(o,c,h),((ze&2)===0||o!==$t)&&(o===$t&&((ze&2)===0&&(Kl|=c),Et===4&&ba(o,Vt)),mn(o,h),c===1&&ze===0&&(u.mode&1)===0&&(Qo=wt()+500,_l&&fa()))}function mn(o,u){var c=o.callbackNode;BM(o,u);var h=sl(o,o===$t?Vt:0);if(h===0)c!==null&&Cb(c),o.callbackNode=null,o.callbackPriority=0;else if(u=h&-h,o.callbackPriority!==u){if(c!=null&&Cb(c),u===1)o.tag===0?IC(q6.bind(null,o)):O1(q6.bind(null,o)),vC(function(){(ze&6)===0&&fa()}),c=null;else{switch(Nb(h)){case 1:c=k0;break;case 4:c=kb;break;case 16:c=al;break;case 536870912:c=Eb;break;default:c=al}c=X6(c,F6.bind(null,o))}o.callbackPriority=u,o.callbackNode=c}}function F6(o,u){if(Zl=-1,Jl=0,(ze&6)!==0)throw Error(n(327));var c=o.callbackNode;if(Yo()&&o.callbackNode!==c)return null;var h=sl(o,o===$t?Vt:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||u)u=ec(o,h);else{u=h;var g=ze;ze|=2;var B=U6();($t!==o||Vt!==u)&&(Nr=null,Qo=wt()+500,Za(o,u));do try{LC();break}catch(D){z6(o,D)}while(!0);yf(),Gl.current=B,ze=g,Ot!==null?u=0:($t=null,Vt=0,u=Et)}if(u!==0){if(u===2&&(g=E0(o),g!==0&&(h=g,u=t2(o,g))),u===1)throw c=Nu,Za(o,0),ba(o,h),mn(o,wt()),c;if(u===6)ba(o,h);else{if(g=o.current.alternate,(h&30)===0&&!DC(g)&&(u=ec(o,h),u===2&&(B=E0(o),B!==0&&(h=B,u=t2(o,B))),u===1))throw c=Nu,Za(o,0),ba(o,h),mn(o,wt()),c;switch(o.finishedWork=g,o.finishedLanes=h,u){case 0:case 1:throw Error(n(345));case 2:Ja(o,hn,Nr);break;case 3:if(ba(o,h),(h&130023424)===h&&(u=Zf+500-wt(),10<u)){if(sl(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){nn(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=uf(Ja.bind(null,o,hn,Nr),u);break}Ja(o,hn,Nr);break;case 4:if(ba(o,h),(h&4194240)===h)break;for(u=o.eventTimes,g=-1;0<h;){var k=31-Yn(h);B=1<<k,k=u[k],k>g&&(g=k),h&=~B}if(h=g,h=wt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*HC(h/1960))-h,10<h){o.timeoutHandle=uf(Ja.bind(null,o,hn,Nr),h);break}Ja(o,hn,Nr);break;case 5:Ja(o,hn,Nr);break;default:throw Error(n(329))}}}return mn(o,wt()),o.callbackNode===c?F6.bind(null,o):null}function t2(o,u){var c=Ru;return o.current.memoizedState.isDehydrated&&(Za(o,u).flags|=256),o=ec(o,u),o!==2&&(u=hn,hn=c,u!==null&&n2(u)),o}function n2(o){hn===null?hn=o:hn.push.apply(hn,o)}function DC(o){for(var u=o;;){if(u.flags&16384){var c=u.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var g=c[h],B=g.getSnapshot;g=g.value;try{if(!Xn(B(),g))return!1}catch{return!1}}}if(c=u.child,u.subtreeFlags&16384&&c!==null)c.return=u,u=c;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~Xf,u&=~Kl,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var c=31-Yn(u),h=1<<c;o[c]=-1,u&=~h}}function q6(o){if((ze&6)!==0)throw Error(n(327));Yo();var u=sl(o,0);if((u&1)===0)return mn(o,wt()),null;var c=ec(o,u);if(o.tag!==0&&c===2){var h=E0(o);h!==0&&(u=h,c=t2(o,h))}if(c===1)throw c=Nu,Za(o,0),ba(o,u),mn(o,wt()),c;if(c===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,Ja(o,hn,Nr),mn(o,wt()),null}function r2(o,u){var c=ze;ze|=1;try{return o(u)}finally{ze=c,ze===0&&(Qo=wt()+500,_l&&fa())}}function Xa(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Yo();var u=ze;ze|=1;var c=jn.transition,h=Ze;try{if(jn.transition=null,Ze=1,o)return o()}finally{Ze=h,jn.transition=c,ze=u,(ze&6)===0&&fa()}}function a2(){xn=Ko.current,ut(Ko)}function Za(o,u){o.finishedWork=null,o.finishedLanes=0;var c=o.timeoutHandle;if(c!==-1&&(o.timeoutHandle=-1,mC(c)),Ot!==null)for(c=Ot.return;c!==null;){var h=c;switch(df(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Sl();break;case 3:Uo(),ut(pn),ut(Qt),Af();break;case 5:Pf(h);break;case 4:Uo();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:bf(h.type._context);break;case 22:case 23:a2()}c=c.return}if($t=o,Ot=o=Ia(o.current,null),Vt=xn=u,Et=0,Nu=null,Xf=Kl=Ya=0,hn=Ru=null,Ga!==null){for(u=0;u<Ga.length;u++)if(c=Ga[u],h=c.interleaved,h!==null){c.interleaved=null;var g=h.next,B=c.pending;if(B!==null){var k=B.next;B.next=g,h.next=k}c.pending=h}Ga=null}return o}function z6(o,u){do{var c=Ot;try{if(yf(),jl.current=Ll,Hl){for(var h=dt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}Hl=!1}if(Qa=0,Dt=kt=dt=null,Wu=!1,Mu=0,Yf.current=null,c===null||c.return===null){Et=1,Nu=u,Ot=null;break}e:{var B=o,k=c.return,D=c,q=u;if(u=Vt,D.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var te=q,ie=D,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=m6(k);if(me!==null){me.flags&=-257,v6(me,k,D,B,u),me.mode&1&&h6(B,te,u),u=me,q=te;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(q),u.updateQueue=Se}else Be.add(q);break e}else{if((u&1)===0){h6(B,te,u),o2();break e}q=Error(n(426))}}else if(ct&&D.mode&1){var Pt=m6(k);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),v6(Pt,k,D,B,u),vf(Vo(q,D));break e}}B=q=Vo(q,D),Et!==4&&(Et=2),Ru===null?Ru=[B]:Ru.push(B),B=k;do{switch(B.tag){case 3:B.flags|=65536,u&=-u,B.lanes|=u;var Z=f6(B,q,u);D1(B,Z);break e;case 1:D=q;var V=B.type,ee=B.stateNode;if((B.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){B.flags|=65536,u&=-u,B.lanes|=u;var ce=d6(B,D,u);D1(B,ce);break e}}B=B.return}while(B!==null)}G6(c)}catch(Oe){u=Oe,Ot===c&&c!==null&&(Ot=c=c.return);continue}break}while(!0)}function U6(){var o=Gl.current;return Gl.current=Ll,o===null?Ll:o}function o2(){(Et===0||Et===3||Et===2)&&(Et=4),$t===null||(Ya&268435455)===0&&(Kl&268435455)===0||ba($t,Vt)}function ec(o,u){var c=ze;ze|=2;var h=U6();($t!==o||Vt!==u)&&(Nr=null,Za(o,u));do try{$C();break}catch(g){z6(o,g)}while(!0);if(yf(),ze=c,Gl.current=h,Ot!==null)throw Error(n(261));return $t=null,Vt=0,Et}function $C(){for(;Ot!==null;)V6(Ot)}function LC(){for(;Ot!==null&&!fM();)V6(Ot)}function V6(o){var u=Y6(o.alternate,o,xn);o.memoizedProps=o.pendingProps,u===null?G6(o):Ot=u,Yf.current=null}function G6(o){var u=o;do{var c=u.alternate;if(o=u.return,(u.flags&32768)===0){if(c=EC(c,u,xn),c!==null){Ot=c;return}}else{if(c=TC(c,u),c!==null){c.flags&=32767,Ot=c;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Et=6,Ot=null;return}}if(u=u.sibling,u!==null){Ot=u;return}Ot=u=o}while(u!==null);Et===0&&(Et=5)}function Ja(o,u,c){var h=Ze,g=jn.transition;try{jn.transition=null,Ze=1,FC(o,u,c,h)}finally{jn.transition=g,Ze=h}return null}function FC(o,u,c,h){do Yo();while(ga!==null);if((ze&6)!==0)throw Error(n(327));c=o.finishedWork;var g=o.finishedLanes;if(c===null)return null;if(o.finishedWork=null,o.finishedLanes=0,c===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var B=c.lanes|c.childLanes;if(xM(o,B),o===$t&&(Ot=$t=null,Vt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Yl||(Yl=!0,X6(al,function(){return Yo(),null})),B=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||B){B=jn.transition,jn.transition=null;var k=Ze;Ze=1;var D=ze;ze|=4,Yf.current=null,RC(o,c),j6(c,o),sC(af),pl=!!rf,af=rf=null,o.current=c,jC(c),dM(),ze=D,Ze=k,jn.transition=B}else o.current=c;if(Yl&&(Yl=!1,ga=o,Xl=g),B=o.pendingLanes,B===0&&(va=null),vM(c.stateNode),mn(o,wt()),u!==null)for(h=o.onRecoverableError,c=0;c<u.length;c++)g=u[c],h(g.value,{componentStack:g.stack,digest:g.digest});if(Ql)throw Ql=!1,o=Jf,Jf=null,o;return(Xl&1)!==0&&o.tag!==0&&Yo(),B=o.pendingLanes,(B&1)!==0?o===e2?ju++:(ju=0,e2=o):ju=0,fa(),null}function Yo(){if(ga!==null){var o=Nb(Xl),u=jn.transition,c=Ze;try{if(jn.transition=null,Ze=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Xl=0,(ze&6)!==0)throw Error(n(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var B=be,k=B.child;if((be.flags&16)!==0){var D=B.deletions;if(D!==null){for(var q=0;q<D.length;q++){var te=D[q];for(be=te;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:Tu(8,ie,B)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,me=ie.return;if(k6(ie),ie===te){be=null;break}if(oe!==null){oe.return=me,be=oe;break}be=me}}}var Be=B.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=B}}if((B.subtreeFlags&2064)!==0&&k!==null)k.return=B,be=k;else e:for(;be!==null;){if(B=be,(B.flags&2048)!==0)switch(B.tag){case 0:case 11:case 15:Tu(9,B,B.return)}var Z=B.sibling;if(Z!==null){Z.return=B.return,be=Z;break e}be=B.return}}var V=o.current;for(be=V;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=V;be!==null;){if(D=be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Vl(9,D)}}catch(Oe){yt(D,D.return,Oe)}if(D===k){be=null;break e}var ce=D.sibling;if(ce!==null){ce.return=D.return,be=ce;break e}be=D.return}}if(ze=g,fa(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(ol,o)}catch{}h=!0}return h}finally{Ze=c,jn.transition=u}}return!1}function K6(o,u,c){u=Vo(c,u),u=f6(o,u,1),o=ha(o,u,1),u=nn(),o!==null&&(uu(o,1,u),mn(o,u))}function yt(o,u,c){if(o.tag===3)K6(o,o,c);else for(;u!==null;){if(u.tag===3){K6(u,o,c);break}else if(u.tag===1){var h=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Vo(c,o),o=d6(u,o,1),u=ha(u,o,1),o=nn(),u!==null&&(uu(u,1,o),mn(u,o));break}}u=u.return}}function qC(o,u,c){var h=o.pingCache;h!==null&&h.delete(u),u=nn(),o.pingedLanes|=o.suspendedLanes&c,$t===o&&(Vt&c)===c&&(Et===4||Et===3&&(Vt&130023424)===Vt&&500>wt()-Zf?Za(o,0):Xf|=c),mn(o,u)}function Q6(o,u){u===0&&((o.mode&1)===0?u=1:(u=ul,ul<<=1,(ul&130023424)===0&&(ul=4194304)));var c=nn();o=kr(o,u),o!==null&&(uu(o,u,c),mn(o,c))}function zC(o){var u=o.memoizedState,c=0;u!==null&&(c=u.retryLane),Q6(o,c)}function UC(o,u){var c=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(c=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(n(314))}h!==null&&h.delete(u),Q6(o,c)}var Y6;Y6=function(o,u,c){if(o!==null)if(o.memoizedProps!==u.pendingProps||pn.current)dn=!0;else{if((o.lanes&c)===0&&(u.flags&128)===0)return dn=!1,kC(o,u,c);dn=(o.flags&131072)!==0}else dn=!1,ct&&(u.flags&1048576)!==0&&W1(u,Wl,u.index);switch(u.lanes=0,u.tag){case 2:var h=u.type;zl(o,u),o=u.pendingProps;var g=Ho(u,Qt.current);zo(u,c),g=Wf(null,u,h,o,g,c);var B=Mf();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(h)?(B=!0,Al(u)):B=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,xf(u),g.updater=Fl,u.stateNode=g,g._reactInternals=u,Rf(u,h,o,c),u=$f(null,u,h,!0,B,c)):(u.tag=0,ct&&B&&ff(u),tn(null,u,g,c),u=u.child),u;case 16:h=u.elementType;e:{switch(zl(o,u),o=u.pendingProps,g=h._init,h=g(h._payload),u.type=h,g=u.tag=GC(h),o=Jn(h,o),g){case 0:u=Df(null,u,h,o,c);break e;case 1:u=x6(null,u,h,o,c);break e;case 11:u=g6(null,u,h,o,c);break e;case 14:u=y6(null,u,h,Jn(h.type,o),c);break e}throw Error(n(306,h,""))}return u;case 0:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),Df(o,u,h,g,c);case 1:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),x6(o,u,h,g,c);case 3:e:{if(w6(u),o===null)throw Error(n(387));h=u.pendingProps,B=u.memoizedState,g=B.element,H1(o,u),Nl(u,h,null,c);var k=u.memoizedState;if(h=k.element,B.isDehydrated)if(B={element:h,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=B,u.memoizedState=B,u.flags&256){g=Vo(Error(n(423)),u),u=P6(o,u,h,c,g);break e}else if(h!==g){g=Vo(Error(n(424)),u),u=P6(o,u,h,c,g);break e}else for(Bn=la(u.stateNode.containerInfo.firstChild),In=u,ct=!0,Zn=null,c=R1(u,null,h,c),u.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Lo(),h===g){u=Tr(o,u,c);break e}tn(o,u,h,c)}u=u.child}return u;case 5:return L1(u),o===null&&mf(u),h=u.type,g=u.pendingProps,B=o!==null?o.memoizedProps:null,k=g.children,of(h,g)?k=null:B!==null&&of(h,B)&&(u.flags|=32),B6(o,u),tn(o,u,k,c),u.child;case 6:return o===null&&mf(u),null;case 13:return S6(o,u,c);case 4:return wf(u,u.stateNode.containerInfo),h=u.pendingProps,o===null?u.child=Fo(u,null,h,c):tn(o,u,h,c),u.child;case 11:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),g6(o,u,h,g,c);case 7:return tn(o,u,u.pendingProps,c),u.child;case 8:return tn(o,u,u.pendingProps.children,c),u.child;case 12:return tn(o,u,u.pendingProps.children,c),u.child;case 10:e:{if(h=u.type._context,g=u.pendingProps,B=u.memoizedProps,k=g.value,nt(kl,h._currentValue),h._currentValue=k,B!==null)if(Xn(B.value,k)){if(B.children===g.children&&!pn.current){u=Tr(o,u,c);break e}}else for(B=u.child,B!==null&&(B.return=u);B!==null;){var D=B.dependencies;if(D!==null){k=B.child;for(var q=D.firstContext;q!==null;){if(q.context===h){if(B.tag===1){q=Er(-1,c&-c),q.tag=2;var te=B.updateQueue;if(te!==null){te=te.shared;var ie=te.pending;ie===null?q.next=q:(q.next=ie.next,ie.next=q),te.pending=q}}B.lanes|=c,q=B.alternate,q!==null&&(q.lanes|=c),If(B.return,c,u),D.lanes|=c;break}q=q.next}}else if(B.tag===10)k=B.type===u.type?null:B.child;else if(B.tag===18){if(k=B.return,k===null)throw Error(n(341));k.lanes|=c,D=k.alternate,D!==null&&(D.lanes|=c),If(k,c,u),k=B.sibling}else k=B.child;if(k!==null)k.return=B;else for(k=B;k!==null;){if(k===u){k=null;break}if(B=k.sibling,B!==null){B.return=k.return,k=B;break}k=k.return}B=k}tn(o,u,g.children,c),u=u.child}return u;case 9:return g=u.type,h=u.pendingProps.children,zo(u,c),g=Nn(g),h=h(g),u.flags|=1,tn(o,u,h,c),u.child;case 14:return h=u.type,g=Jn(h,u.pendingProps),g=Jn(h.type,g),y6(o,u,h,g,c);case 15:return b6(o,u,u.type,u.pendingProps,c);case 17:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:Jn(h,g),zl(o,u),u.tag=1,fn(h)?(o=!0,Al(u)):o=!1,zo(u,c),c6(u,h,g),Rf(u,h,g,c),$f(null,u,h,!0,o,c);case 19:return _6(o,u,c);case 22:return I6(o,u,c)}throw Error(n(156,u.tag))};function X6(o,u){return Mb(o,u)}function VC(o,u,c,h){this.tag=o,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(o,u,c,h){return new VC(o,u,c,h)}function i2(o){return o=o.prototype,!(!o||!o.isReactComponent)}function GC(o){if(typeof o=="function")return i2(o)?1:0;if(o!=null){if(o=o.$$typeof,o===T)return 11;if(o===U)return 14}return 2}function Ia(o,u){var c=o.alternate;return c===null?(c=Hn(o.tag,u,o.key,o.mode),c.elementType=o.elementType,c.type=o.type,c.stateNode=o.stateNode,c.alternate=o,o.alternate=c):(c.pendingProps=u,c.type=o.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=o.flags&14680064,c.childLanes=o.childLanes,c.lanes=o.lanes,c.child=o.child,c.memoizedProps=o.memoizedProps,c.memoizedState=o.memoizedState,c.updateQueue=o.updateQueue,u=o.dependencies,c.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},c.sibling=o.sibling,c.index=o.index,c.ref=o.ref,c}function tc(o,u,c,h,g,B){var k=2;if(h=o,typeof o=="function")i2(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case E:return eo(c.children,g,B,u);case P:k=8,g|=8;break;case C:return o=Hn(12,c,u,g|2),o.elementType=C,o.lanes=B,o;case $:return o=Hn(13,c,u,g),o.elementType=$,o.lanes=B,o;case G:return o=Hn(19,c,u,g),o.elementType=G,o.lanes=B,o;case Q:return nc(c,g,B,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case N:k=10;break e;case H:k=9;break e;case T:k=11;break e;case U:k=14;break e;case z:k=16,h=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return u=Hn(k,c,u,g),u.elementType=o,u.type=h,u.lanes=B,u}function eo(o,u,c,h){return o=Hn(7,o,h,u),o.lanes=c,o}function nc(o,u,c,h){return o=Hn(22,o,h,u),o.elementType=Q,o.lanes=c,o.stateNode={isHidden:!1},o}function u2(o,u,c){return o=Hn(6,o,null,u),o.lanes=c,o}function s2(o,u,c){return u=Hn(4,o.children!==null?o.children:[],o.key,u),u.lanes=c,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function KC(o,u,c,h,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=T0(0),this.expirationTimes=T0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=T0(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function l2(o,u,c,h,g,B,k,D,q){return o=new KC(o,u,c,D,q),u===1?(u=1,B===!0&&(u|=8)):u=0,B=Hn(3,null,null,u),o.current=B,B.stateNode=o,B.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(B),o}function QC(o,u,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:h==null?null:""+h,children:o,containerInfo:u,implementation:c}}function Z6(o){if(!o)return pa;o=o._reactInternals;e:{if(Fa(o)!==o||o.tag!==1)throw Error(n(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(o.tag===1){var c=o.type;if(fn(c))return A1(o,c,u)}return u}function J6(o,u,c,h,g,B,k,D,q){return o=l2(c,h,!0,o,g,B,k,D,q),o.context=Z6(null),c=o.current,h=nn(),g=ya(c),B=Er(h,g),B.callback=u??null,ha(c,B,g),o.current.lanes=g,uu(o,g,h),mn(o,h),o}function rc(o,u,c,h){var g=u.current,B=nn(),k=ya(g);return c=Z6(c),u.context===null?u.context=c:u.pendingContext=c,u=Er(B,k),u.payload={element:o},h=h===void 0?null:h,h!==null&&(u.callback=h),o=ha(g,u,k),o!==null&&(nr(o,g,k,B),Tl(o,g,k)),k}function ac(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function eI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var c=o.retryLane;o.retryLane=c!==0&&c<u?c:u}}function c2(o,u){eI(o,u),(o=o.alternate)&&eI(o,u)}function YC(){return null}var tI=typeof reportError=="function"?reportError:function(o){console.error(o)};function p2(o){this._internalRoot=o}oc.prototype.render=p2.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(n(409));rc(o,u,null,null)},oc.prototype.unmount=p2.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Xa(function(){rc(null,o,null,null)}),u[Or]=null}};function oc(o){this._internalRoot=o}oc.prototype.unstable_scheduleHydration=function(o){if(o){var u=Hb();o={blockedOn:null,target:o,priority:u};for(var c=0;c<ia.length&&u!==0&&u<ia[c].priority;c++);ia.splice(c,0,o),c===0&&Lb(o)}};function f2(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ic(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function nI(){}function XC(o,u,c,h,g){if(g){if(typeof h=="function"){var B=h;h=function(){var te=ac(k);B.call(te)}}var k=J6(u,h,o,0,null,!1,!1,"",nI);return o._reactRootContainer=k,o[Or]=k.current,Bu(o.nodeType===8?o.parentNode:o),Xa(),k}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var D=h;h=function(){var te=ac(q);D.call(te)}}var q=l2(o,0,!1,null,null,!1,!1,"",nI);return o._reactRootContainer=q,o[Or]=q.current,Bu(o.nodeType===8?o.parentNode:o),Xa(function(){rc(u,q,c,h)}),q}function uc(o,u,c,h,g){var B=c._reactRootContainer;if(B){var k=B;if(typeof g=="function"){var D=g;g=function(){var q=ac(k);D.call(q)}}rc(u,k,o,g)}else k=XC(c,u,o,g,h);return ac(k)}Rb=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var c=iu(u.pendingLanes);c!==0&&(N0(u,c|1),mn(u,wt()),(ze&6)===0&&(Qo=wt()+500,fa()))}break;case 13:Xa(function(){var h=kr(o,1);if(h!==null){var g=nn();nr(h,o,1,g)}}),c2(o,1)}},R0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var c=nn();nr(u,o,134217728,c)}c2(o,134217728)}},jb=function(o){if(o.tag===13){var u=ya(o),c=kr(o,u);if(c!==null){var h=nn();nr(c,o,u,h)}c2(o,u)}},Hb=function(){return Ze},Db=function(o,u){var c=Ze;try{return Ze=o,u()}finally{Ze=c}},O0=function(o,u,c){switch(u){case"input":if(Fe(o,c),u=c.name,c.type==="radio"&&u!=null){for(c=o;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<c.length;u++){var h=c[u];if(h!==o&&h.form===o.form){var g=Pl(h);if(!g)throw Error(n(90));re(h),Fe(h,g)}}}break;case"textarea":gt(o,c);break;case"select":u=c.value,u!=null&&Bt(o,!!c.multiple,u,!1)}},wb=r2,Pb=Xa;var ZC={usingClientEntryPoint:!1,Events:[Pu,Ro,Pl,Bb,xb,r2]},Hu={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JC={bundleType:Hu.bundleType,version:Hu.version,rendererPackageName:Hu.rendererPackageName,rendererConfig:Hu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Ob(o),o===null?null:o.stateNode},findFiberByHostInstance:Hu.findFiberByHostInstance||YC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ol=sc.inject(JC),pr=sc}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZC,vn.createPortal=function(o,u){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f2(u))throw Error(n(200));return QC(o,u,null,c)},vn.createRoot=function(o,u){if(!f2(o))throw Error(n(299));var c=!1,h="",g=tI;return u!=null&&(u.unstable_strictMode===!0&&(c=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=l2(o,1,!1,null,null,c,!1,h,g),o[Or]=u.current,Bu(o.nodeType===8?o.parentNode:o),new p2(u)},vn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=Ob(u),o=o===null?null:o.stateNode,o},vn.flushSync=function(o){return Xa(o)},vn.hydrate=function(o,u,c){if(!ic(u))throw Error(n(200));return uc(null,o,u,!0,c)},vn.hydrateRoot=function(o,u,c){if(!f2(o))throw Error(n(405));var h=c!=null&&c.hydratedSources||null,g=!1,B="",k=tI;if(c!=null&&(c.unstable_strictMode===!0&&(g=!0),c.identifierPrefix!==void 0&&(B=c.identifierPrefix),c.onRecoverableError!==void 0&&(k=c.onRecoverableError)),u=J6(u,null,o,1,c??null,g,!1,B,k),o[Or]=u.current,Bu(o),h)for(o=0;o<h.length;o++)c=h[o],g=c._getVersion,g=g(c._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[c,g]:u.mutableSourceEagerHydrationData.push(c,g);return new oc(u)},vn.render=function(o,u,c){if(!ic(u))throw Error(n(200));return uc(null,o,u,!1,c)},vn.unmountComponentAtNode=function(o){if(!ic(o))throw Error(n(40));return o._reactRootContainer?(Xa(function(){uc(null,null,o,!1,function(){o._reactRootContainer=null,o[Or]=null})}),!0):!1},vn.unstable_batchedUpdates=r2,vn.unstable_renderSubtreeIntoContainer=function(o,u,c,h){if(!ic(c))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return uc(o,u,c,!1,h)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var cI;function C3(){if(cI)return m2.exports;cI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),m2.exports=lk(),m2.exports}var pI;function ck(){if(pI)return cc;pI=1;var e=C3();return cc.createRoot=e.createRoot,cc.hydrateRoot=e.hydrateRoot,cc}var pk=ck(),X=uy();const R=Xe(X),fk=rk({__proto__:null,default:R},[X]);var _c={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var dk=_c.exports,fI;function hk(){return fI||(fI=1,(function(e,t){((n,r)=>{e.exports=r()})(dk,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},p=0,f={};function m(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(C){var N=w(C);N.chunkSize=parseInt(N.chunkSize),C.step||C.chunk||(N.chunkSize=null),this._handle=new I(N),(this._handle.streamer=this)._config=N}).call(this,P),this.parseChunk=function(C,N){var H=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<H){let $=this._config.newline;$||(T=this._config.quoteChar||'"',$=this._handle.guessLineEndings(C,T)),C=[...C.split($).slice(H)].join($)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(T=this._config.beforeFirstChunk(C))!==void 0&&(C=T),this.isFirstChunk=!1,this._halted=!1;var H=this._partialLine+C,T=(this._partialLine="",this._handle.parse(H,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(C=T.meta.cursor,H=(this._finished||(this._partialLine=H.substring(C-this._baseIndex),this._baseIndex=C),T&&T.data&&(this._rowCount+=T.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:T,workerId:f.WORKER_ID,finished:H});else if(E(this._config.chunk)&&!N){if(this._config.chunk(T,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=T=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(T.data),this._completeResults.errors=this._completeResults.errors.concat(T.errors),this._completeResults.meta=T.meta),this._completed||!H||!E(this._config.complete)||T&&T.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),H||T&&T.meta.paused||this._nextChunk(),T}this._halted=!0},this._sendError=function(C){E(this._config.error)?this._config.error(C):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:C,finished:!1})}}function d(P){var C;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),m.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(N){this._input=N,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(C=new XMLHttpRequest,this._config.withCredentials&&(C.withCredentials=this._config.withCredentials),i||(C.onload=O(this._chunkLoaded,this),C.onerror=O(this._chunkError,this)),C.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var N,H=this._config.downloadRequestHeaders;for(N in H)C.setRequestHeader(N,H[N])}var T;this._config.chunkSize&&(T=this._start+this._config.chunkSize-1,C.setRequestHeader("Range","bytes="+this._start+"-"+T));try{C.send(this._config.downloadRequestBody)}catch($){this._chunkError($.message)}i&&C.status===0&&this._chunkError()}},this._chunkLoaded=function(){C.readyState===4&&(C.status<200||400<=C.status?this._chunkError():(this._start+=this._config.chunkSize||C.responseText.length,this._finished=!this._config.chunkSize||this._start>=(N=>(N=N.getResponseHeader("Content-Range"))!==null?parseInt(N.substring(N.lastIndexOf("/")+1)):-1)(C),this.parseChunk(C.responseText)))},this._chunkError=function(N){N=C.statusText||N,this._sendError(new Error(N))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),m.call(this,P);var C,N,H=typeof FileReader<"u";this.stream=function(T){this._input=T,N=T.slice||T.webkitSlice||T.mozSlice,H?((C=new FileReader).onload=O(this._chunkLoaded,this),C.onerror=O(this._chunkError,this)):C=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var T=this._input,$=(this._config.chunkSize&&($=Math.min(this._start+this._config.chunkSize,this._input.size),T=N.call(T,this._start,$)),C.readAsText(T,this._config.encoding));H||this._chunkLoaded({target:{result:$}})},this._chunkLoaded=function(T){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(T.target.result)},this._chunkError=function(){this._sendError(C.error)}}function y(P){var C;m.call(this,P=P||{}),this.stream=function(N){return C=N,this._nextChunk()},this._nextChunk=function(){var N,H;if(!this._finished)return N=this._config.chunkSize,C=N?(H=C.substring(0,N),C.substring(N)):(H=C,""),this._finished=!C,this.parseChunk(H)}}function x(P){m.call(this,P=P||{});var C=[],N=!0,H=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(T){this._input=T,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){H&&C.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),C.length?this.parseChunk(C.shift()):N=!0},this._streamData=O(function(T){try{C.push(typeof T=="string"?T:T.toString(this._config.encoding)),N&&(N=!1,this._checkIsFinished(),this.parseChunk(C.shift()))}catch($){this._streamError($)}},this),this._streamError=O(function(T){this._streamCleanUp(),this._sendError(T)},this),this._streamEnd=O(function(){this._streamCleanUp(),H=!0,this._streamData("")},this),this._streamCleanUp=O(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var C,N,H,T,$=Math.pow(2,53),G=-$,U=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,L=0,K=0,Y=!1,j=!1,F=[],J={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(J&&H&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),H=!1),P.skipEmptyLines&&(J.data=J.data.filter(function(re){return!ue(re)})),ge()){let re=function(Re,Pe){E(P.transformHeader)&&(Re=P.transformHeader(Re,Pe)),F.push(Re)};var pe=re;if(J)if(Array.isArray(J.data[0])){for(var fe=0;ge()&&fe<J.data.length;fe++)J.data[fe].forEach(re);J.data.splice(0,1)}else J.data.forEach(re)}function ne(re,Re){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var _e=Ce,Fe=re[Ce],Fe=((He,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(He)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(U.test(Ke)&&(Ke=parseFloat(Ke),G<Ke&&Ke<$))return 1})(qe)?parseFloat(qe):z.test(qe)?new Date(qe):qe===""?null:qe):qe)(_e=P.header?Ce>=F.length?"__parsed_extra":F[Ce]:_e,Fe=P.transform?P.transform(Fe,_e):Fe);_e==="__parsed_extra"?(Pe[_e]=Pe[_e]||[],Pe[_e].push(Fe)):Pe[_e]=Fe}return P.header&&(Ce>F.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Ce,K+Re):Ce<F.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Ce,K+Re)),Pe}var de;J&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!J.data.length||Array.isArray(J.data[0])?(J.data=J.data.map(ne),de=J.data.length):J.data=ne(J.data,0),P.header&&J.meta&&(J.meta.fields=F),K+=de)}function ge(){return P.header&&F.length===0}function ye(fe,ne,de,pe){fe={type:fe,code:ne,message:de},pe!==void 0&&(fe.row=pe),J.errors.push(fe)}E(P.step)&&(T=P.step,P.step=function(fe){J=fe,ge()?he():(he(),J.data.length!==0&&(L+=fe.data.length,P.preview&&L>P.preview?N.abort():(J.data=J.data[0],T(J,Q))))}),this.parse=function(fe,ne,de){var pe=P.quoteChar||'"',pe=(P.newline||(P.newline=this.guessLineEndings(fe,pe)),H=!1,P.delimiter?E(P.delimiter)&&(P.delimiter=P.delimiter(fe),J.meta.delimiter=P.delimiter):((pe=((re,Re,Pe,Ce,_e)=>{var Fe,He,qe,Ke;_e=_e||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Bt=0;Bt<_e.length;Bt++){for(var vt,Mn=_e[Bt],gt=0,Kt=0,xt=0,Ht=(qe=void 0,new S({comments:Ce,delimiter:Mn,newline:Re,preview:10}).parse(re)),cn=0;cn<Ht.data.length;cn++)Pe&&ue(Ht.data[cn])?xt++:(vt=Ht.data[cn].length,Kt+=vt,qe===void 0?qe=vt:0<vt&&(gt+=Math.abs(vt-qe),qe=vt));0<Ht.data.length&&(Kt/=Ht.data.length-xt),(He===void 0||gt<=He)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(He=gt,Fe=Mn,Ke=Kt)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=pe.bestDelimiter:(H=!0,P.delimiter=f.DefaultDelimiter),J.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&pe.preview++,C=fe,N=new S(pe),J=N.parse(C,ne,de),he(),Y?{meta:{paused:!0}}:J||{meta:{paused:!1}}},this.paused=function(){return Y},this.pause=function(){Y=!0,N.abort(),C=E(P.chunk)?"":C.substring(N.getCharIndex())},this.resume=function(){Q.streamer._halted?(Y=!1,Q.streamer.parseChunk(C,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return j},this.abort=function(){j=!0,N.abort(),J.meta.aborted=!0,E(P.complete)&&P.complete(J),C=""},this.guessLineEndings=function(re,pe){re=re.substring(0,1048576);var pe=new RegExp(b(pe)+"([^]*?)"+b(pe),"gm"),de=(re=re.replace(pe,"")).split("\r"),pe=re.split(`
`),re=1<pe.length&&pe[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Re=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Re++;return Re>=de.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var C=(P=P||{}).delimiter,N=P.newline,H=P.comments,T=P.step,$=P.preview,G=P.fastMode,U=null,z=!1,Q=P.quoteChar==null?'"':P.quoteChar,L=Q;if(P.escapeChar!==void 0&&(L=P.escapeChar),(typeof C!="string"||-1<f.BAD_DELIMITERS.indexOf(C))&&(C=","),H===C)throw new Error("Comment character same as delimiter");H===!0?H="#":(typeof H!="string"||-1<f.BAD_DELIMITERS.indexOf(H))&&(H=!1),N!==`
`&&N!=="\r"&&N!==`\r
`&&(N=`
`);var K=0,Y=!1;this.parse=function(j,F,J){if(typeof j!="string")throw new Error("Input must be a string");var ue=j.length,he=C.length,ge=N.length,ye=H.length,fe=E(T),ne=[],de=[],pe=[],re=K=0;if(!j)return gt();if(G||G!==!1&&j.indexOf(Q)===-1){for(var Re=j.split(N),Pe=0;Pe<Re.length;Pe++){if(pe=Re[Pe],K+=pe.length,Pe!==Re.length-1)K+=N.length;else if(J)return gt();if(!H||pe.substring(0,ye)!==H){if(fe){if(ne=[],Ke(pe.split(C)),Kt(),Y)return gt()}else Ke(pe.split(C));if($&&$<=Pe)return ne=ne.slice(0,$),gt(!0)}}return gt()}for(var Ce=j.indexOf(C,K),_e=j.indexOf(N,K),Fe=new RegExp(b(L)+b(Q),"g"),He=j.indexOf(Q,K);;)if(j[K]===Q)for(He=K,K++;;){if((He=j.indexOf(Q,He+1))===-1)return J||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:K}),vt();if(He===ue-1)return vt(j.substring(K,He).replace(Fe,Q));if(Q===L&&j[He+1]===L)He++;else if(Q===L||He===0||j[He-1]!==L){Ce!==-1&&Ce<He+1&&(Ce=j.indexOf(C,He+1));var qe=Bt((_e=_e!==-1&&_e<He+1?j.indexOf(N,He+1):_e)===-1?Ce:Math.min(Ce,_e));if(j.substr(He+1+qe,he)===C){pe.push(j.substring(K,He).replace(Fe,Q)),j[K=He+1+qe+he]!==Q&&(He=j.indexOf(Q,K)),Ce=j.indexOf(C,K),_e=j.indexOf(N,K);break}if(qe=Bt(_e),j.substring(He+1+qe,He+1+qe+ge)===N){if(pe.push(j.substring(K,He).replace(Fe,Q)),Mn(He+1+qe+ge),Ce=j.indexOf(C,K),He=j.indexOf(Q,K),fe&&(Kt(),Y))return gt();if($&&ne.length>=$)return gt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:K}),He++}}else if(H&&pe.length===0&&j.substring(K,K+ye)===H){if(_e===-1)return gt();K=_e+ge,_e=j.indexOf(N,K),Ce=j.indexOf(C,K)}else if(Ce!==-1&&(Ce<_e||_e===-1))pe.push(j.substring(K,Ce)),K=Ce+he,Ce=j.indexOf(C,K);else{if(_e===-1)break;if(pe.push(j.substring(K,_e)),Mn(_e+ge),fe&&(Kt(),Y))return gt();if($&&ne.length>=$)return gt(!0)}return vt();function Ke(xt){ne.push(xt),re=K}function Bt(xt){var Ht=0;return Ht=xt!==-1&&(xt=j.substring(He+1,xt))&&xt.trim()===""?xt.length:Ht}function vt(xt){return J||(xt===void 0&&(xt=j.substring(K)),pe.push(xt),K=ue,Ke(pe),fe&&Kt()),gt()}function Mn(xt){K=xt,Ke(pe),pe=[],_e=j.indexOf(N,K)}function gt(xt){if(P.header&&!F&&ne.length&&!z){var Ht=ne[0],cn=Object.create(null),Ao=new Set(Ht);let ta=!1;for(let Cn=0;Cn<Ht.length;Cn++){let kn=Ht[Cn];if(cn[kn=E(P.transformHeader)?P.transformHeader(kn,Cn):kn]){let na,nu=cn[kn];for(;na=kn+"_"+nu,nu++,Ao.has(na););Ao.add(na),Ht[Cn]=na,cn[kn]++,ta=!0,(U=U===null?{}:U)[na]=kn}else cn[kn]=1,Ht[Cn]=kn;Ao.add(kn)}ta&&console.warn("Duplicate headers found and renamed."),z=!0}return{data:ne,errors:de,meta:{delimiter:C,linebreak:N,aborted:Y,truncated:!!xt,cursor:re+(F||0),renamedHeaders:U}}}function Kt(){T(gt()),ne=[],de=[]}},this.abort=function(){Y=!0},this.getCharIndex=function(){return K}}function A(P){var C=P.data,N=l[C.workerId],H=!1;if(C.error)N.userError(C.error,C.file);else if(C.results&&C.results.data){var T={abort:function(){H=!0,_(C.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:M,resume:M};if(E(N.userStep)){for(var $=0;$<C.results.data.length&&(N.userStep({data:C.results.data[$],errors:C.results.errors,meta:C.results.meta},T),!H);$++);delete C.results}else E(N.userChunk)&&(N.userChunk(C.results,T,C.file),delete C.results)}C.finished&&!H&&_(C.workerId,C.results)}function _(P,C){var N=l[P];E(N.userComplete)&&N.userComplete(C),N.terminate(),delete l[P]}function M(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var C,N=Array.isArray(P)?[]:{};for(C in P)N[C]=w(P[C]);return N}function O(P,C){return function(){P.apply(C,arguments)}}function E(P){return typeof P=="function"}return f.parse=function(P,C){var N=(C=C||{}).dynamicTyping||!1;if(E(N)&&(C.dynamicTypingFunction=N,N={}),C.dynamicTyping=N,C.transform=!!E(C.transform)&&C.transform,!C.worker||!f.WORKERS_SUPPORTED)return N=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(H=>H.charCodeAt(0)!==65279?H:H.slice(1))(P),N=new(C.download?d:y)(C)):P.readable===!0&&E(P.read)&&E(P.on)?N=new x(C):(r.File&&P instanceof File||P instanceof Object)&&(N=new v(C)),N.stream(P);(N=(()=>{var H;return!!f.WORKERS_SUPPORTED&&(H=(()=>{var T=r.URL||r.webkitURL||null,$=n.toString();return f.BLOB_URL||(f.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",$,")();"],{type:"text/javascript"})))})(),(H=new r.Worker(H)).onmessage=A,H.id=p++,l[H.id]=H)})()).userStep=C.step,N.userChunk=C.chunk,N.userComplete=C.complete,N.userError=C.error,C.step=E(C.step),C.chunk=E(C.chunk),C.complete=E(C.complete),C.error=E(C.error),delete C.worker,N.postMessage({input:P,config:C,workerId:N.id})},f.unparse=function(P,C){var N=!1,H=!0,T=",",$=`\r
`,G='"',U=G+G,z=!1,Q=null,L=!1,K=((()=>{if(typeof C=="object"){if(typeof C.delimiter!="string"||f.BAD_DELIMITERS.filter(function(F){return C.delimiter.indexOf(F)!==-1}).length||(T=C.delimiter),typeof C.quotes!="boolean"&&typeof C.quotes!="function"&&!Array.isArray(C.quotes)||(N=C.quotes),typeof C.skipEmptyLines!="boolean"&&typeof C.skipEmptyLines!="string"||(z=C.skipEmptyLines),typeof C.newline=="string"&&($=C.newline),typeof C.quoteChar=="string"&&(G=C.quoteChar),typeof C.header=="boolean"&&(H=C.header),Array.isArray(C.columns)){if(C.columns.length===0)throw new Error("Option columns is empty");Q=C.columns}C.escapeChar!==void 0&&(U=C.escapeChar+G),C.escapeFormulae instanceof RegExp?L=C.escapeFormulae:typeof C.escapeFormulae=="boolean"&&C.escapeFormulae&&(L=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(G),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return Y(null,P,z);if(typeof P[0]=="object")return Y(Q||Object.keys(P[0]),P,z)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||Q),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),Y(P.fields||[],P.data||[],z);throw new Error("Unable to serialize unrecognized input");function Y(F,J,ue){var he="",ge=(typeof F=="string"&&(F=JSON.parse(F)),typeof J=="string"&&(J=JSON.parse(J)),Array.isArray(F)&&0<F.length),ye=!Array.isArray(J[0]);if(ge&&H){for(var fe=0;fe<F.length;fe++)0<fe&&(he+=T),he+=j(F[fe],fe);0<J.length&&(he+=$)}for(var ne=0;ne<J.length;ne++){var de=(ge?F:J[ne]).length,pe=!1,re=ge?Object.keys(J[ne]).length===0:J[ne].length===0;if(ue&&!ge&&(pe=ue==="greedy"?J[ne].join("").trim()==="":J[ne].length===1&&J[ne][0].length===0),ue==="greedy"&&ge){for(var Re=[],Pe=0;Pe<de;Pe++){var Ce=ye?F[Pe]:Pe;Re.push(J[ne][Ce])}pe=Re.join("").trim()===""}if(!pe){for(var _e=0;_e<de;_e++){0<_e&&!re&&(he+=T);var Fe=ge&&ye?F[_e]:_e;he+=j(J[ne][Fe],_e)}ne<J.length-1&&(!ue||0<de&&!re)&&(he+=$)}}return he}function j(F,J){var ue,he;return F==null?"":F.constructor===Date?JSON.stringify(F).slice(1,25):(he=!1,L&&typeof F=="string"&&L.test(F)&&(F="'"+F,he=!0),ue=F.toString().replace(K,U),(he=he||N===!0||typeof N=="function"&&N(F,J)||Array.isArray(N)&&N[J]||((ge,ye)=>{for(var fe=0;fe<ye.length;fe++)if(-1<ge.indexOf(ye[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(T)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?G+ue+G:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=x,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var C=P.config||{},N=[];return this.each(function($){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var G=0;G<this.files.length;G++)N.push({file:this.files[G],inputElem:this,instanceConfig:a.extend({},C)})}),H(),this;function H(){if(N.length===0)E(P.complete)&&P.complete();else{var $,G,U,z,Q=N[0];if(E(P.before)){var L=P.before(Q.file,Q.inputElem);if(typeof L=="object"){if(L.action==="abort")return $="AbortError",G=Q.file,U=Q.inputElem,z=L.reason,void(E(P.error)&&P.error({name:$},G,U,z));if(L.action==="skip")return void T();typeof L.config=="object"&&(Q.instanceConfig=a.extend(Q.instanceConfig,L.config))}else if(L==="skip")return void T()}var K=Q.instanceConfig.complete;Q.instanceConfig.complete=function(Y){E(K)&&K(Y,Q.file,Q.inputElem),T()},f.parse(Q.file,Q.instanceConfig)}}function T(){N.splice(0,1),H()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(x.prototype=Object.create(m.prototype)).constructor=x,f})})(_c)),_c.exports}var mk=hk();const dI=Xe(mk);function hI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function k3(...e){return t=>{let n=!1;const r=e.map(a=>{const i=hI(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():hI(e[a],null)}}}}function Wc(...e){return X.useCallback(k3(...e),e)}var ps=X.forwardRef((e,t)=>{const{children:n,...r}=e,a=X.Children.toArray(n),i=a.find(gk);if(i){const s=i.props.children,l=a.map(p=>p===i?X.Children.count(s)>1?X.Children.only(null):X.isValidElement(s)?s.props.children:null:p);return W.jsx(Pv,{...r,ref:t,children:X.isValidElement(s)?X.cloneElement(s,void 0,l):null})}return W.jsx(Pv,{...r,ref:t,children:n})});ps.displayName="Slot";var Pv=X.forwardRef((e,t)=>{const{children:n,...r}=e;if(X.isValidElement(n)){const a=bk(n),i=yk(r,n.props);return n.type!==X.Fragment&&(i.ref=t?k3(t,a):a),X.cloneElement(n,i)}return X.Children.count(n)>1?X.Children.only(null):null});Pv.displayName="SlotClone";var vk=({children:e})=>W.jsx(W.Fragment,{children:e});function gk(e){return X.isValidElement(e)&&e.type===vk}function yk(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...l)=>{i(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function bk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function E3(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=E3(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function je(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=E3(e))&&(r&&(r+=" "),r+=t);return r}const mI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,vI=je,Ik=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return vI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(f=>{const m=n==null?void 0:n[f],d=i==null?void 0:i[f];if(m===null)return null;const v=mI(m)||mI(d);return a[f][v]}),l=n&&Object.entries(n).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),p=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...y}=m;return Object.entries(y).every(x=>{let[I,b]=x;return Array.isArray(b)?b.includes({...i,...l}[I]):{...i,...l}[I]===b})?[...f,d,v]:f},[]);return vI(e,s,p,n==null?void 0:n.class,n==null?void 0:n.className)},sy="-",Bk=e=>{const t=wk(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(sy);return l[0]===""&&l.length!==1&&l.shift(),T3(l,t)||xk(s)},getConflictingClassGroupIds:(s,l)=>{const p=n[s]||[];return l&&r[s]?[...p,...r[s]]:p}}},T3=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?T3(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(sy);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},gI=/^\[(.+)\]$/,xk=e=>{if(gI.test(e)){const t=gI.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},wk=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Sv(n[a],r,a,t);return r},Sv=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:yI(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(Pk(a)){Sv(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,s])=>{Sv(s,yI(t,i),n,r)})})},yI=(e,t)=>{let n=e;return t.split(sy).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Pk=e=>e.isThemeGetter,Sk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){n.has(i)?n.set(i,s):a(i,s)}}},Av="!",_v=":",Ak=_v.length,_k=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,p=0,f;for(let x=0;x<a.length;x++){let I=a[x];if(s===0&&l===0){if(I===_v){i.push(a.slice(p,x)),p=x+Ak;continue}if(I==="/"){f=x;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const m=i.length===0?a:a.substring(p),d=Ok(m),v=d!==m,y=f&&f>p?f-p:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(t){const a=t+_v,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},Ok=e=>e.endsWith(Av)?e.substring(0,e.length-1):e.startsWith(Av)?e.substring(1):e,Wk=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},Mk=e=>({cache:Sk(e.cacheSize),parseClassName:_k(e),sortModifiers:Wk(e),...Bk(e)}),Ck=/\s+/,kk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(Ck);let p="";for(let f=l.length-1;f>=0;f-=1){const m=l[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:I}=n(m);if(d){p=m+(p.length>0?" "+p:p);continue}let b=!!I,S=r(b?x.substring(0,I):x);if(!S){if(!b){p=m+(p.length>0?" "+p:p);continue}if(S=r(x),!S){p=m+(p.length>0?" "+p:p);continue}b=!1}const A=i(v).join(":"),_=y?A+Av:A,M=_+S;if(s.includes(M))continue;s.push(M);const w=a(S,b);for(let O=0;O<w.length;++O){const E=w[O];s.push(_+E)}p=m+(p.length>0?" "+p:p)}return p};function Ek(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=N3(t))&&(r&&(r+=" "),r+=n);return r}const N3=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=N3(e[r]))&&(n&&(n+=" "),n+=t);return n};function Tk(e,...t){let n,r,a,i=s;function s(p){const f=t.reduce((m,d)=>d(m),e());return n=Mk(f),r=n.cache.get,a=n.cache.set,i=l,l(p)}function l(p){const f=r(p);if(f)return f;const m=kk(p,n);return a(p,m),m}return function(){return i(Ek.apply(null,arguments))}}const Tt=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},R3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,j3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Nk=/^\d+\/\d+$/,Rk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Hk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$k=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=e=>Nk.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),y2=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Rr=e=>Rk.test(e),Lk=()=>!0,Fk=e=>jk.test(e)&&!Hk.test(e),H3=()=>!1,qk=e=>Dk.test(e),zk=e=>$k.test(e),Uk=e=>!xe(e)&&!we(e),Vk=e=>qi(e,L3,H3),xe=e=>R3.test(e),to=e=>qi(e,F3,Fk),b2=e=>qi(e,Xk,$e),bI=e=>qi(e,D3,H3),Gk=e=>qi(e,$3,zk),pc=e=>qi(e,q3,qk),we=e=>j3.test(e),$u=e=>zi(e,F3),Kk=e=>zi(e,Zk),II=e=>zi(e,D3),Qk=e=>zi(e,L3),Yk=e=>zi(e,$3),fc=e=>zi(e,q3,!0),qi=(e,t,n)=>{const r=R3.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},zi=(e,t,n=!1)=>{const r=j3.exec(e);return r?r[1]?t(r[1]):n:!1},D3=e=>e==="position"||e==="percentage",$3=e=>e==="image"||e==="url",L3=e=>e==="length"||e==="size"||e==="bg-size",F3=e=>e==="length",Xk=e=>e==="number",Zk=e=>e==="family-name",q3=e=>e==="shadow",Jk=()=>{const e=Tt("color"),t=Tt("font"),n=Tt("text"),r=Tt("font-weight"),a=Tt("tracking"),i=Tt("leading"),s=Tt("breakpoint"),l=Tt("container"),p=Tt("spacing"),f=Tt("radius"),m=Tt("shadow"),d=Tt("inset-shadow"),v=Tt("text-shadow"),y=Tt("drop-shadow"),x=Tt("blur"),I=Tt("perspective"),b=Tt("aspect"),S=Tt("ease"),A=Tt("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...M(),we,xe],O=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],P=()=>[we,xe,p],C=()=>[Xo,"full","auto",...P()],N=()=>[xa,"none","subgrid",we,xe],H=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],T=()=>[xa,"auto",we,xe],$=()=>["auto","min","max","fr",we,xe],G=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],U=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...P()],Q=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],L=()=>[e,we,xe],K=()=>[...M(),II,bI,{position:[we,xe]}],Y=()=>["no-repeat",{repeat:["","x","y","space","round"]}],j=()=>["auto","cover","contain",Qk,Vk,{size:[we,xe]}],F=()=>[y2,$u,to],J=()=>["","none","full",f,we,xe],ue=()=>["",$e,$u,to],he=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[$e,y2,II,bI],fe=()=>["","none",x,we,xe],ne=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],pe=()=>[$e,we,xe],re=()=>[Xo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rr],breakpoint:[Rr],color:[Lk],container:[Rr],"drop-shadow":[Rr],ease:["in","out","in-out"],font:[Uk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rr],shadow:[Rr],spacing:["px",$e],text:[Rr],"text-shadow":[Rr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,xe,we,b]}],container:["container"],columns:[{columns:[$e,xe,we,l]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Xo,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Xo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":$()}],"auto-rows":[{"auto-rows":$()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...G(),"normal"]}],"justify-items":[{"justify-items":[...U(),"normal"]}],"justify-self":[{"justify-self":["auto",...U()]}],"align-content":[{content:["normal",...G()]}],"align-items":[{items:[...U(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...U(),{baseline:["","last"]}]}],"place-content":[{"place-content":G()}],"place-items":[{"place-items":[...U(),"baseline"]}],"place-self":[{"place-self":["auto",...U()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[l,"screen",...Q()]}],"min-w":[{"min-w":[l,"screen","none",...Q()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...Q()]}],h:[{h:["screen",...Q()]}],"min-h":[{"min-h":["screen","none",...Q()]}],"max-h":[{"max-h":["screen",...Q()]}],"font-size":[{text:["base",n,$u,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,b2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",y2,xe]}],"font-family":[{font:[Kk,xe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,b2]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:L()}],"text-color":[{text:L()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:L()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:Y()}],"bg-size":[{bg:j()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},Yk,Gk]}],"bg-color":[{bg:L()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:L()}],"gradient-via":[{via:L()}],"gradient-to":[{to:L()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:L()}],"border-color-x":[{"border-x":L()}],"border-color-y":[{"border-y":L()}],"border-color-s":[{"border-s":L()}],"border-color-e":[{"border-e":L()}],"border-color-t":[{"border-t":L()}],"border-color-r":[{"border-r":L()}],"border-color-b":[{"border-b":L()}],"border-color-l":[{"border-l":L()}],"divide-color":[{divide:L()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,$u,to]}],"outline-color":[{outline:L()}],shadow:[{shadow:["","none",m,fc,pc]}],"shadow-color":[{shadow:L()}],"inset-shadow":[{"inset-shadow":["none",d,fc,pc]}],"inset-shadow-color":[{"inset-shadow":L()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:L()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":L()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":L()}],"text-shadow":[{"text-shadow":["none",v,fc,pc]}],"text-shadow-color":[{"text-shadow":L()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":L()}],"mask-image-linear-to-color":[{"mask-linear-to":L()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":L()}],"mask-image-t-to-color":[{"mask-t-to":L()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":L()}],"mask-image-r-to-color":[{"mask-r-to":L()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":L()}],"mask-image-b-to-color":[{"mask-b-to":L()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":L()}],"mask-image-l-to-color":[{"mask-l-to":L()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":L()}],"mask-image-x-to-color":[{"mask-x-to":L()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":L()}],"mask-image-y-to-color":[{"mask-y-to":L()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":L()}],"mask-image-radial-to-color":[{"mask-radial-to":L()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":L()}],"mask-image-conic-to-color":[{"mask-conic-to":L()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:Y()}],"mask-size":[{mask:j()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",y,fc,pc]}],"drop-shadow-color":[{"drop-shadow":L()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",A,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:pe()}],"skew-x":[{"skew-x":pe()}],"skew-y":[{"skew-y":pe()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:L()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:L()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...L()]}],"stroke-w":[{stroke:[$e,$u,to,b2]}],stroke:[{stroke:["none",...L()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},eE=Tk(Jk);function ln(...e){return eE(je(e))}const tE=Ik("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function BI({className:e,variant:t,size:n,asChild:r=!1,...a}){const i=r?ps:"button";return W.jsx(i,{"data-slot":"button",className:ln(tE({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return W.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function jp({className:e,...t}){return W.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function Hp({className:e,...t}){return W.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return W.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function ly(e,t=[]){let n=[];function r(i,s){const l=X.createContext(s),p=n.length;n=[...n,s];const f=d=>{var S;const{scope:v,children:y,...x}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[p])||l,b=X.useMemo(()=>x,Object.values(x));return W.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function m(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[p])||l,x=X.useContext(y);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=n.map(s=>X.createContext(s));return function(l){const p=(l==null?void 0:l[e])||i;return X.useMemo(()=>({[`__scope${e}`]:{...l,[e]:p}}),[l,p])}};return a.scopeName=e,[r,nE(a,...t)]}function nE(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((l,{useScope:p,scopeName:f})=>{const d=p(i)[`__scope${f}`];return{...l,...d}},{});return X.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function rE(e){const t=e+"CollectionProvider",[n,r]=ly(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:x,children:I}=y,b=R.useRef(null),S=R.useRef(new Map).current;return W.jsx(a,{scope:x,itemMap:S,collectionRef:b,children:I})};s.displayName=t;const l=e+"CollectionSlot",p=R.forwardRef((y,x)=>{const{scope:I,children:b}=y,S=i(l,I),A=Wc(x,S.collectionRef);return W.jsx(ps,{ref:A,children:b})});p.displayName=l;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=R.forwardRef((y,x)=>{const{scope:I,children:b,...S}=y,A=R.useRef(null),_=Wc(x,A),M=i(f,I);return R.useEffect(()=>(M.itemMap.set(A,{ref:A,...S}),()=>void M.itemMap.delete(A))),W.jsx(ps,{[m]:"",ref:_,children:b})});d.displayName=f;function v(y){const x=i(e+"CollectionConsumer",y);return R.useCallback(()=>{const b=x.collectionRef.current;if(!b)return[];const S=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(x.itemMap.values()).sort((M,w)=>S.indexOf(M.ref.current)-S.indexOf(w.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:p,ItemSlot:d},v,r]}var Ov=globalThis!=null&&globalThis.document?X.useLayoutEffect:()=>{},aE=fk.useId||(()=>{}),oE=0;function z3(e){const[t,n]=X.useState(aE());return Ov(()=>{n(r=>r??String(oE++))},[e]),e||(t?`radix-${t}`:"")}C3();var iE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ui=iE.reduce((e,t)=>{const n=X.forwardRef((r,a)=>{const{asChild:i,...s}=r,l=i?ps:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),W.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function cy(e){const t=X.useRef(e);return X.useEffect(()=>{t.current=e}),X.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function U3({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=uE({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=cy(n),p=X.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&l(d)}else a(f)},[i,e,a,l]);return[s,p]}function uE({defaultProp:e,onChange:t}){const n=X.useState(e),[r]=n,a=X.useRef(r),i=cy(t);return X.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}var sE=X.createContext(void 0);function V3(e){const t=X.useContext(sE);return e||t||"ltr"}var I2="rovingFocusGroup.onEntryFocus",lE={bubbles:!1,cancelable:!0},Dp="RovingFocusGroup",[Wv,G3,cE]=rE(Dp),[pE,K3]=ly(Dp,[cE]),[fE,dE]=pE(Dp),Q3=X.forwardRef((e,t)=>W.jsx(Wv.Provider,{scope:e.__scopeRovingFocusGroup,children:W.jsx(Wv.Slot,{scope:e.__scopeRovingFocusGroup,children:W.jsx(hE,{...e,ref:t})})}));Q3.displayName=Dp;var hE=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:p,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=X.useRef(null),y=Wc(t,v),x=V3(i),[I=null,b]=U3({prop:s,defaultProp:l,onChange:p}),[S,A]=X.useState(!1),_=cy(f),M=G3(n),w=X.useRef(!1),[O,E]=X.useState(0);return X.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(I2,_),()=>P.removeEventListener(I2,_)},[_]),W.jsx(fE,{scope:n,orientation:r,dir:x,loop:a,currentTabStopId:I,onItemFocus:X.useCallback(P=>b(P),[b]),onItemShiftTab:X.useCallback(()=>A(!0),[]),onFocusableItemAdd:X.useCallback(()=>E(P=>P+1),[]),onFocusableItemRemove:X.useCallback(()=>E(P=>P-1),[]),children:W.jsx(Ui.div,{tabIndex:S||O===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const C=!w.current;if(P.target===P.currentTarget&&C&&!S){const N=new CustomEvent(I2,lE);if(P.currentTarget.dispatchEvent(N),!N.defaultPrevented){const H=M().filter(z=>z.focusable),T=H.find(z=>z.active),$=H.find(z=>z.id===I),U=[T,$,...H].filter(Boolean).map(z=>z.ref.current);Z3(U,m)}}w.current=!1}),onBlur:zr(e.onBlur,()=>A(!1))})})}),Y3="RovingFocusGroupItem",X3=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,l=z3(),p=i||l,f=dE(Y3,n),m=f.currentTabStopId===p,d=G3(n),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return X.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),W.jsx(Wv.ItemSlot,{scope:n,id:p,focusable:r,active:a,children:W.jsx(Ui.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,x=>{r?f.onItemFocus(p):x.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(p)),onKeyDown:zr(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const I=gE(x,f.orientation,f.dir);if(I!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=d().filter(A=>A.focusable).map(A=>A.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const A=S.indexOf(x.currentTarget);S=f.loop?yE(S,A+1):S.slice(A+1)}setTimeout(()=>Z3(S))}})})})});X3.displayName=Y3;var mE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function vE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function gE(e,t,n){const r=vE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return mE[r]}function Z3(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function yE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var bE=Q3,IE=X3;function BE(e,t){return X.useReducer((n,r)=>t[n][r]??n,e)}var J3=e=>{const{present:t,children:n}=e,r=xE(t),a=typeof n=="function"?n({present:r.isPresent}):X.Children.only(n),i=Wc(r.ref,wE(a));return typeof n=="function"||r.isPresent?X.cloneElement(a,{ref:i}):null};J3.displayName="Presence";function xE(e){const[t,n]=X.useState(),r=X.useRef({}),a=X.useRef(e),i=X.useRef("none"),s=e?"mounted":"unmounted",[l,p]=BE(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return X.useEffect(()=>{const f=dc(r.current);i.current=l==="mounted"?f:"none"},[l]),Ov(()=>{const f=r.current,m=a.current;if(m!==e){const v=i.current,y=dc(f);e?p("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?p("UNMOUNT"):p(m&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,p]),Ov(()=>{if(t){let f;const m=t.ownerDocument.defaultView??window,d=y=>{const I=dc(r.current).includes(y.animationName);if(y.target===t&&I&&(p("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",f=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},v=y=>{y.target===t&&(i.current=dc(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{m.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:X.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function dc(e){return(e==null?void 0:e.animationName)||"none"}function wE(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var py="Tabs",[PE]=ly(py,[K3]),eA=K3(),[SE,fy]=PE(py),tA=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:p="automatic",...f}=e,m=V3(l),[d,v]=U3({prop:r,onChange:a,defaultProp:i});return W.jsx(SE,{scope:n,baseId:z3(),value:d,onValueChange:v,orientation:s,dir:m,activationMode:p,children:W.jsx(Ui.div,{dir:m,"data-orientation":s,...f,ref:t})})});tA.displayName=py;var nA="TabsList",rA=X.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,i=fy(nA,n),s=eA(n);return W.jsx(bE,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:W.jsx(Ui.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});rA.displayName=nA;var aA="TabsTrigger",oA=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...i}=e,s=fy(aA,n),l=eA(n),p=sA(s.baseId,r),f=lA(s.baseId,r),m=r===s.value;return W.jsx(IE,{asChild:!0,...l,focusable:!a,active:m,children:W.jsx(Ui.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:p,...i,ref:t,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!m&&!a&&d&&s.onValueChange(r)})})})});oA.displayName=aA;var iA="TabsContent",uA=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:i,...s}=e,l=fy(iA,n),p=sA(l.baseId,r),f=lA(l.baseId,r),m=r===l.value,d=X.useRef(m);return X.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),W.jsx(J3,{present:a||m,children:({present:v})=>W.jsx(Ui.div,{"data-state":m?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":p,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});uA.displayName=iA;function sA(e,t){return`${e}-trigger-${t}`}function lA(e,t){return`${e}-content-${t}`}var AE=tA,_E=rA,OE=oA,WE=uA;function ME({className:e,...t}){return W.jsx(AE,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function CE({className:e,...t}){return W.jsx(_E,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function xI({className:e,...t}){return W.jsx(OE,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function wI({className:e,...t}){return W.jsx(WE,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EE=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),PI=e=>{const t=EE(e);return t.charAt(0).toUpperCase()+t.slice(1)},cA=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=X.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...l},p)=>X.createElement("svg",{ref:p,...TE,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:cA("lucide",a),...l},[...s.map(([f,m])=>X.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=(e,t)=>{const n=X.forwardRef(({className:r,...a},i)=>X.createElement(NE,{ref:i,iconNode:t,className:cA(`lucide-${kE(PI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=PI(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],jE=lr("arrow-up-down",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],DE=lr("bot",HE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],LE=lr("chevron-down",$E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],SI=lr("chevron-left",FE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Mv=lr("chevron-right",qE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],UE=lr("circle-plus",zE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],GE=lr("download",VE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],QE=lr("trending-up",KE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],XE=lr("triangle-alert",YE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],JE=lr("users",ZE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tT=lr("x",eT);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Mc(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const pA=6048e5,nT=864e5,rT=6e4,aT=36e5,oT=1e3;let iT={};function Vi(){return iT}function Ea(e,t){var l,p,f,m;const n=Vi(),r=(t==null?void 0:t.weekStartsOn)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Ct(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function di(e){return Ea(e,{weekStartsOn:1})}function fA(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=di(r),i=St(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=di(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function AI(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function Cc(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function uT(e,t){const n=AI(e),r=AI(t),a=+n-Cc(n),i=+r-Cc(r);return Math.round((a-i)/nT)}function sT(e){const t=fA(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),di(n)}function lT(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function cT(e){if(!lT(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function pT(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function fT(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function dT(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const hT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},mT=(e,t,n)=>{let r;const a=hT[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function B2(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const vT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bT={date:B2({formats:vT,defaultWidth:"full"}),time:B2({formats:gT,defaultWidth:"full"}),dateTime:B2({formats:yT,defaultWidth:"full"})},IT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},BT=(e,t,n,r)=>IT[e];function Lu(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const xT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},PT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ST={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},AT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},_T={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},OT=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},WT={ordinalNumber:OT,era:Lu({values:xT,defaultWidth:"wide"}),quarter:Lu({values:wT,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Lu({values:PT,defaultWidth:"wide"}),day:Lu({values:ST,defaultWidth:"wide"}),dayPeriod:Lu({values:AT,defaultWidth:"wide",formattingValues:_T,defaultFormattingWidth:"wide"})};function Fu(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?CT(l,d=>d.test(s)):MT(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(p):p,f=n.valueCallback?n.valueCallback(f):f;const m=t.slice(s.length);return{value:f,rest:m}}}function MT(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function CT(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function kT(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const ET=/^(\d+)(th|st|nd|rd)?/i,TT=/\d+/i,NT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},RT={any:[/^b/i,/^(a|c)/i]},jT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},HT={any:[/1/i,/2/i,/3/i,/4/i]},DT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$T={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},LT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},FT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qT={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},UT={ordinalNumber:kT({matchPattern:ET,parsePattern:TT,valueCallback:e=>parseInt(e,10)}),era:Fu({matchPatterns:NT,defaultMatchWidth:"wide",parsePatterns:RT,defaultParseWidth:"any"}),quarter:Fu({matchPatterns:jT,defaultMatchWidth:"wide",parsePatterns:HT,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Fu({matchPatterns:DT,defaultMatchWidth:"wide",parsePatterns:$T,defaultParseWidth:"any"}),day:Fu({matchPatterns:LT,defaultMatchWidth:"wide",parsePatterns:FT,defaultParseWidth:"any"}),dayPeriod:Fu({matchPatterns:qT,defaultMatchWidth:"any",parsePatterns:zT,defaultParseWidth:"any"})},dA={code:"en-US",formatDistance:mT,formatLong:bT,formatRelative:BT,localize:WT,match:UT,options:{weekStartsOn:0,firstWeekContainsDate:1}};function VT(e){const t=Ct(e);return uT(t,dT(t))+1}function hA(e){const t=Ct(e),n=+di(t)-+sT(t);return Math.round(n/pA)+1}function dy(e,t){var m,d,v,y;const n=Ct(e),r=n.getFullYear(),a=Vi(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=Ea(s,t),p=St(e,0);p.setFullYear(r,0,i),p.setHours(0,0,0,0);const f=Ea(p,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function GT(e,t){var l,p,f,m;const n=Vi(),r=(t==null?void 0:t.firstWeekContainsDate)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=dy(e,t),i=St(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Ea(i,t)}function mA(e,t){const n=Ct(e),r=+Ea(n,t)-+GT(n,t);return Math.round(r/pA)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_I={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=dy(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):Je(i,t.length)},R:function(e,t){const n=fA(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=mA(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=hA(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=VT(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Je(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Je(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return WI(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return WI(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+OI(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+OI(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function OI(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+Je(i,2)}function WI(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):oo(e,t)}function oo(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return n+a+t+i}const MI=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},vA=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},KT=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return MI(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",MI(r,t)).replace("{{time}}",vA(a,t))},Cv={p:vA,P:KT},QT=/^D+$/,YT=/^Y+$/,XT=["D","DD","YY","YYYY"];function gA(e){return QT.test(e)}function yA(e){return YT.test(e)}function kv(e,t,n){const r=ZT(e,t,n);if(console.warn(r),XT.includes(e))throw new RangeError(r)}function ZT(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const JT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,eN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tN=/^'([^]*?)'?$/,nN=/''/g,rN=/[a-zA-Z]/;function aN(e,t,n){var m,d,v,y;const r=Vi(),a=r.locale??dA,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,l=Ct(e);if(!cT(l))throw new RangeError("Invalid time value");let p=t.match(eN).map(x=>{const I=x[0];if(I==="p"||I==="P"){const b=Cv[I];return b(x,a.formatLong)}return x}).join("").match(JT).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const I=x[0];if(I==="'")return{isToken:!1,value:oN(x)};if(_I[I])return{isToken:!0,value:x};if(I.match(rN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:x}});a.localize.preprocessor&&(p=a.localize.preprocessor(l,p));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return p.map(x=>{if(!x.isToken)return x.value;const I=x.value;(yA(I)||gA(I))&&kv(I,t,String(e));const b=_I[I[0]];return b(l,I,a.localize,f)}).join("")}function oN(e){const t=e.match(tN);return t?t[1].replace(nN,"'"):e}function iN(){return Object.assign({},Vi())}function uN(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function sN(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const lN=10;class bA{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class cN extends bA{constructor(t,n,r,a,i){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class pN extends bA{constructor(){super(...arguments);ve(this,"priority",lN);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,sN(n,Date))}}class Ge{run(t,n,r,a){const i=this.parse(t,n,r,a);return i?{setter:new cN(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,n,r){return!0}}class fN extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const At={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},vr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function _t(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function gr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*aT+i*rT+s*oT),rest:t.slice(n[0].length)}}function IA(e){return mt(At.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(At.singleDigit,t);case 2:return mt(At.twoDigits,t);case 3:return mt(At.threeDigits,t);case 4:return mt(At.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function kc(e,t){switch(e){case 1:return mt(At.singleDigitSigned,t);case 2:return mt(At.twoDigitsSigned,t);case 3:return mt(At.threeDigitsSigned,t);case 4:return mt(At.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function hy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function BA(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,l=e>=i%100;a=e+s-(l?100:0)}return n?a:1-a}function xA(e){return e%400===0||e%4===0&&e%100!==0}class dN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return _t(It(4,n),i);case"yo":return _t(a.ordinalNumber(n,{unit:"year"}),i);default:return _t(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const i=n.getFullYear();if(a.isTwoDigitYear){const l=BA(a.year,i);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class hN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return _t(It(4,n),i);case"Yo":return _t(a.ordinalNumber(n,{unit:"year"}),i);default:return _t(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,i){const s=dy(n,i);if(a.isTwoDigitYear){const p=BA(a.year,s);return n.setFullYear(p,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}}class mN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return kc(r==="R"?4:r.length,n)}set(n,r,a){const i=St(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),di(i)}}class vN extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return kc(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class gN extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class yN extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class bN extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const i=s=>s-1;switch(r){case"M":return _t(mt(At.month,n),i);case"MM":return _t(It(2,n),i);case"Mo":return _t(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class IN extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const i=s=>s-1;switch(r){case"L":return _t(mt(At.month,n),i);case"LL":return _t(It(2,n),i);case"Lo":return _t(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function BN(e,t,n){const r=Ct(e),a=mA(r,n)-t;return r.setDate(r.getDate()-a*7),r}class xN extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(At.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,i){return Ea(BN(n,a,i),i)}}function wN(e,t){const n=Ct(e),r=hA(n)-t;return n.setDate(n.getDate()-r*7),n}class PN extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(At.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return di(wN(n,a))}}const SN=[31,28,31,30,31,30,31,31,30,31,30,31],AN=[31,29,31,30,31,30,31,31,30,31,30,31];class _N extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(At.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),i=xA(a),s=n.getMonth();return i?r>=1&&r<=AN[s]:r>=1&&r<=SN[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class ON extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(At.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return xA(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function my(e,t,n){var d,v,y,x;const r=Vi(),a=(n==null?void 0:n.weekStartsOn)??((v=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((x=(y=r.locale)==null?void 0:y.options)==null?void 0:x.weekStartsOn)??0,i=Ct(e),s=i.getDay(),p=(t%7+7)%7,f=7-a,m=t<0||t>6?t-(s+f)%7:(p+f)%7-(s+f)%7;return Mc(i,m)}class WN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=my(n,a,i),n.setHours(0,0,0,0),n}}class MN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,i){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+p};switch(r){case"e":case"ee":return _t(It(r.length,n),s);case"eo":return _t(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=my(n,a,i),n.setHours(0,0,0,0),n}}class CN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,i){const s=l=>{const p=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+p};switch(r){case"c":case"cc":return _t(It(r.length,n),s);case"co":return _t(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=my(n,a,i),n.setHours(0,0,0,0),n}}function kN(e,t){const n=Ct(e),r=uN(n),a=t-r;return Mc(n,a)}class EN extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return _t(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return _t(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return _t(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return _t(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=kN(n,a),n.setHours(0,0,0,0),n}}class TN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(hy(a),0,0,0),n}}class NN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(hy(a),0,0,0),n}}class RN extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(hy(a),0,0,0),n}}class jN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(At.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class HN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(At.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class DN extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(At.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class $N extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(At.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class LN extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(At.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class FN extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(At.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class qN extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return _t(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class zN extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return gr(vr.basicOptionalMinutes,n);case"XX":return gr(vr.basic,n);case"XXXX":return gr(vr.basicOptionalSeconds,n);case"XXXXX":return gr(vr.extendedOptionalSeconds,n);case"XXX":default:return gr(vr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Cc(n)-a)}}class UN extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return gr(vr.basicOptionalMinutes,n);case"xx":return gr(vr.basic,n);case"xxxx":return gr(vr.basicOptionalSeconds,n);case"xxxxx":return gr(vr.extendedOptionalSeconds,n);case"xxx":default:return gr(vr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Cc(n)-a)}}class VN extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return IA(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class GN extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return IA(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const KN={G:new fN,y:new dN,Y:new hN,R:new mN,u:new vN,Q:new gN,q:new yN,M:new bN,L:new IN,w:new xN,I:new PN,d:new _N,D:new ON,E:new WN,e:new MN,c:new CN,i:new EN,a:new TN,b:new NN,B:new RN,h:new jN,H:new HN,K:new DN,k:new $N,m:new LN,s:new FN,S:new qN,X:new zN,x:new UN,t:new VN,T:new GN},QN=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,YN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,XN=/^'([^]*?)'?$/,ZN=/''/g,JN=/\S/,eR=/[a-zA-Z]/;function tR(e,t,n,r){var I,b,S,A;const a=iN(),i=a.locale??dA,s=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,l=a.weekStartsOn??((A=(S=a.locale)==null?void 0:S.options)==null?void 0:A.weekStartsOn)??0,p={firstWeekContainsDate:s,weekStartsOn:l,locale:i},f=[new pN],m=t.match(YN).map(_=>{const M=_[0];if(M in Cv){const w=Cv[M];return w(_,i.formatLong)}return _}).join("").match(QN),d=[];for(let _ of m){yA(_)&&kv(_,t,e),gA(_)&&kv(_,t,e);const M=_[0],w=KN[M];if(w){const{incompatibleTokens:O}=w;if(Array.isArray(O)){const P=d.find(C=>O.includes(C.token)||C.token===M);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${_}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${_}\` and any other token at the same time`);d.push({token:M,fullToken:_});const E=w.run(e,_,i.match,p);if(!E)return St(n,NaN);f.push(E.setter),e=E.rest}else{if(M.match(eR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");if(_==="''"?_="'":M==="'"&&(_=nR(_)),e.indexOf(_)===0)e=e.slice(_.length);else return St(n,NaN)}}if(e.length>0&&JN.test(e))return St(n,NaN);const v=f.map(_=>_.priority).sort((_,M)=>M-_).filter((_,M,w)=>w.indexOf(_)===M).map(_=>f.filter(M=>M.priority===_).sort((M,w)=>w.subPriority-M.subPriority)).map(_=>_[0]);let y=Ct(n);if(isNaN(y.getTime()))return St(n,NaN);const x={};for(const _ of v){if(!_.validate(y,p))return St(n,NaN);const M=_.set(y,x,p);Array.isArray(M)?(y=M[0],Object.assign(x,M[1])):y=M}return St(n,y)}function nR(e){return e.match(XN)[1].replace(ZN,"'")}const yr=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,i,s]=n;return new Date(parseInt(a),parseInt(i)-1,parseInt(s),12,0,0)}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a),12,0,0)}return tR(e,"dd-MM-yyyy",new Date)},wA=["january","february","march","april","may","june","july","august","september","october","november","december"],PA=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=wA.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const i=fT(new Date(a,r)),s=pT(new Date(a,r)),l=[];let p=i,f=1;for(;p<=s;){let m=Mc(p,6);m>s&&(m=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${p.getDate()}-${m.getDate()}`,startDate:p,endDate:m}),p=Mc(m,1),f++}return l},SA=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},Ev=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=wA.indexOf(n.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},rR=e=>!e||isNaN(e.getTime())?"N/A":aN(e,"MMM dd, yyyy"),Tv=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Nv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=t.get(a)||0;t.set(a,i+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},AA=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},Rv=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,t)},aR=(e,t="february-2026")=>{if(t==="all"){const n=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const s=yr(i.createdAt);if(!isNaN(s.getTime())){const l=n[s.getMonth()],p=`${l.charAt(0).toUpperCase()}${l.slice(1,3)} ${s.getFullYear()}`;r.add(`${p}|${l}-${s.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[s,l]=i.split("|"),p=e.filter(v=>Ev(yr(v.createdAt),l)),f=p.length,m=p.filter(v=>v.handled==="Human").length,d=f>0?m/f*100:0;return{week:s,totalSessions:f,humanEscalations:m,escalationRate:d}}).sort((i,s)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${s.week}`).getTime()).filter(i=>i.totalSessions>0)}else return PA(t).map(r=>{const a=e.filter(p=>{const f=yr(p.createdAt);return SA(f,r)}),i=a.length,s=a.filter(p=>p.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:l}})},oR=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([l,p])=>{const f=Array.from(p.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:l,count:m,products:f}}).sort((l,p)=>p.count-l.count),s=i.reduce((l,p)=>l+p.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},iR=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",t),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function uR({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return W.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[W.jsx(zn,{children:W.jsx(Un,{className:"p-6",children:W.jsxs("div",{className:"flex items-center justify-between",children:[W.jsxs("div",{children:[W.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),W.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),W.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:W.jsx(QE,{className:"w-6 h-6 text-blue-600"})})]})})}),W.jsx(zn,{children:W.jsx(Un,{className:"p-6",children:W.jsxs("div",{className:"flex items-center justify-between",children:[W.jsxs("div",{children:[W.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),W.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),W.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),W.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:W.jsx(DE,{className:"w-6 h-6 text-blue-600"})})]})})}),W.jsx(zn,{children:W.jsx(Un,{className:"p-6",children:W.jsxs("div",{className:"flex items-center justify-between",children:[W.jsxs("div",{children:[W.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),W.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),W.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),W.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:W.jsx(JE,{className:"w-6 h-6 text-orange-600"})})]})})}),W.jsx(zn,{className:n(e.escalationRate),children:W.jsx(Un,{className:"p-6",children:W.jsxs("div",{className:"flex items-center justify-between",children:[W.jsxs("div",{children:[W.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),W.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),W.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),W.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:W.jsx(XE,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var x2,CI;function yn(){if(CI)return x2;CI=1;var e=Array.isArray;return x2=e,x2}var w2,kI;function _A(){if(kI)return w2;kI=1;var e=typeof lc=="object"&&lc&&lc.Object===Object&&lc;return w2=e,w2}var P2,EI;function Ar(){if(EI)return P2;EI=1;var e=_A(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return P2=n,P2}var S2,TI;function Gs(){if(TI)return S2;TI=1;var e=Ar(),t=e.Symbol;return S2=t,S2}var A2,NI;function sR(){if(NI)return A2;NI=1;var e=Gs(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function i(s){var l=n.call(s,a),p=s[a];try{s[a]=void 0;var f=!0}catch{}var m=r.call(s);return f&&(l?s[a]=p:delete s[a]),m}return A2=i,A2}var _2,RI;function lR(){if(RI)return _2;RI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return _2=n,_2}var O2,jI;function Yr(){if(jI)return O2;jI=1;var e=Gs(),t=sR(),n=lR(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:i&&i in Object(l)?t(l):n(l)}return O2=s,O2}var W2,HI;function Xr(){if(HI)return W2;HI=1;function e(t){return t!=null&&typeof t=="object"}return W2=e,W2}var M2,DI;function Gi(){if(DI)return M2;DI=1;var e=Yr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return M2=r,M2}var C2,$I;function vy(){if($I)return C2;$I=1;var e=yn(),t=Gi(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||t(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return C2=a,C2}var k2,LI;function ja(){if(LI)return k2;LI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return k2=e,k2}var E2,FI;function gy(){if(FI)return E2;FI=1;var e=Yr(),t=ja(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(l){if(!t(l))return!1;var p=e(l);return p==r||p==a||p==n||p==i}return E2=s,E2}var T2,qI;function cR(){if(qI)return T2;qI=1;var e=Ar(),t=e["__core-js_shared__"];return T2=t,T2}var N2,zI;function pR(){if(zI)return N2;zI=1;var e=cR(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return N2=n,N2}var R2,UI;function OA(){if(UI)return R2;UI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return R2=n,R2}var j2,VI;function fR(){if(VI)return j2;VI=1;var e=gy(),t=pR(),n=ja(),r=OA(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,p=s.toString,f=l.hasOwnProperty,m=RegExp("^"+p.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!n(v)||t(v))return!1;var y=e(v)?m:i;return y.test(r(v))}return j2=d,j2}var H2,GI;function dR(){if(GI)return H2;GI=1;function e(t,n){return t==null?void 0:t[n]}return H2=e,H2}var D2,KI;function Bo(){if(KI)return D2;KI=1;var e=fR(),t=dR();function n(r,a){var i=t(r,a);return e(i)?i:void 0}return D2=n,D2}var $2,QI;function $p(){if(QI)return $2;QI=1;var e=Bo(),t=e(Object,"create");return $2=t,$2}var L2,YI;function hR(){if(YI)return L2;YI=1;var e=$p();function t(){this.__data__=e?e(null):{},this.size=0}return L2=t,L2}var F2,XI;function mR(){if(XI)return F2;XI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return F2=e,F2}var q2,ZI;function vR(){if(ZI)return q2;ZI=1;var e=$p(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(e){var l=s[i];return l===t?void 0:l}return r.call(s,i)?s[i]:void 0}return q2=a,q2}var z2,JI;function gR(){if(JI)return z2;JI=1;var e=$p(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:n.call(i,a)}return z2=r,z2}var U2,eB;function yR(){if(eB)return U2;eB=1;var e=$p(),t="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?t:a,this}return U2=n,U2}var V2,tB;function bR(){if(tB)return V2;tB=1;var e=hR(),t=mR(),n=vR(),r=gR(),a=yR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,V2=i,V2}var G2,nB;function IR(){if(nB)return G2;nB=1;function e(){this.__data__=[],this.size=0}return G2=e,G2}var K2,rB;function yy(){if(rB)return K2;rB=1;function e(t,n){return t===n||t!==t&&n!==n}return K2=e,K2}var Q2,aB;function Lp(){if(aB)return Q2;aB=1;var e=yy();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Q2=t,Q2}var Y2,oB;function BR(){if(oB)return Y2;oB=1;var e=Lp(),t=Array.prototype,n=t.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var l=i.length-1;return s==l?i.pop():n.call(i,s,1),--this.size,!0}return Y2=r,Y2}var X2,iB;function xR(){if(iB)return X2;iB=1;var e=Lp();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return X2=t,X2}var Z2,uB;function wR(){if(uB)return Z2;uB=1;var e=Lp();function t(n){return e(this.__data__,n)>-1}return Z2=t,Z2}var J2,sB;function PR(){if(sB)return J2;sB=1;var e=Lp();function t(n,r){var a=this.__data__,i=e(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return J2=t,J2}var ed,lB;function Fp(){if(lB)return ed;lB=1;var e=IR(),t=BR(),n=xR(),r=wR(),a=PR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ed=i,ed}var td,cB;function by(){if(cB)return td;cB=1;var e=Bo(),t=Ar(),n=e(t,"Map");return td=n,td}var nd,pB;function SR(){if(pB)return nd;pB=1;var e=bR(),t=Fp(),n=by();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return nd=r,nd}var rd,fB;function AR(){if(fB)return rd;fB=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return rd=e,rd}var ad,dB;function qp(){if(dB)return ad;dB=1;var e=AR();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return ad=t,ad}var od,hB;function _R(){if(hB)return od;hB=1;var e=qp();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return od=t,od}var id,mB;function OR(){if(mB)return id;mB=1;var e=qp();function t(n){return e(this,n).get(n)}return id=t,id}var ud,vB;function WR(){if(vB)return ud;vB=1;var e=qp();function t(n){return e(this,n).has(n)}return ud=t,ud}var sd,gB;function MR(){if(gB)return sd;gB=1;var e=qp();function t(n,r){var a=e(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return sd=t,sd}var ld,yB;function Iy(){if(yB)return ld;yB=1;var e=SR(),t=_R(),n=OR(),r=WR(),a=MR();function i(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ld=i,ld}var cd,bB;function WA(){if(bB)return cd;bB=1;var e=Iy(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var i=function(){var s=arguments,l=a?a.apply(this,s):s[0],p=i.cache;if(p.has(l))return p.get(l);var f=r.apply(this,s);return i.cache=p.set(l,f)||p,f};return i.cache=new(n.Cache||e),i}return n.Cache=e,cd=n,cd}var pd,IB;function CR(){if(IB)return pd;IB=1;var e=WA(),t=500;function n(r){var a=e(r,function(s){return i.size===t&&i.clear(),s}),i=a.cache;return a}return pd=n,pd}var fd,BB;function kR(){if(BB)return fd;BB=1;var e=CR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(t,function(s,l,p,f){i.push(p?f.replace(n,"$1"):l||s)}),i});return fd=r,fd}var dd,xB;function By(){if(xB)return dd;xB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=Array(a);++r<a;)i[r]=n(t[r],r,t);return i}return dd=e,dd}var hd,wB;function ER(){if(wB)return hd;wB=1;var e=Gs(),t=By(),n=yn(),r=Gi(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return i?i.call(l):"";var p=l+"";return p=="0"&&1/l==-1/0?"-0":p}return hd=s,hd}var md,PB;function MA(){if(PB)return md;PB=1;var e=ER();function t(n){return n==null?"":e(n)}return md=t,md}var vd,SB;function CA(){if(SB)return vd;SB=1;var e=yn(),t=vy(),n=kR(),r=MA();function a(i,s){return e(i)?i:t(i,s)?[i]:n(r(i))}return vd=a,vd}var gd,AB;function zp(){if(AB)return gd;AB=1;var e=Gi();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return gd=t,gd}var yd,_B;function xy(){if(_B)return yd;_B=1;var e=CA(),t=zp();function n(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[t(a[i++])];return i&&i==s?r:void 0}return yd=n,yd}var bd,OB;function kA(){if(OB)return bd;OB=1;var e=xy();function t(n,r,a){var i=n==null?void 0:e(n,r);return i===void 0?a:i}return bd=t,bd}var TR=kA();const Wn=Xe(TR);var Id,WB;function NR(){if(WB)return Id;WB=1;function e(t){return t==null}return Id=e,Id}var RR=NR();const Ee=Xe(RR);var Bd,MB;function jR(){if(MB)return Bd;MB=1;var e=Yr(),t=yn(),n=Xr(),r="[object String]";function a(i){return typeof i=="string"||!t(i)&&n(i)&&e(i)==r}return Bd=a,Bd}var HR=jR();const Ks=Xe(HR);var DR=gy();const ke=Xe(DR);var $R=ja();const Ki=Xe($R);var xd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CB;function LR(){if(CB)return Qe;CB=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var S=b.$$typeof;switch(S){case e:switch(b=b.type,b){case n:case a:case r:case f:case m:return b;default:switch(b=b&&b.$$typeof,b){case l:case s:case p:case v:case d:case i:return b;default:return S}}case t:return S}}}return Qe.ContextConsumer=s,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=p,Qe.Fragment=n,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=t,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=m,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===s},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===p},Qe.isFragment=function(b){return I(b)===n},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===t},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===m},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===n||b===a||b===r||b===f||b===m||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===s||b.$$typeof===p||b.$$typeof===x||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var kB;function FR(){return kB||(kB=1,xd.exports=LR()),xd.exports}var qR=FR(),wd,EB;function EA(){if(EB)return wd;EB=1;var e=Yr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return wd=r,wd}var Pd,TB;function zR(){if(TB)return Pd;TB=1;var e=EA();function t(n){return e(n)&&n!=+n}return Pd=t,Pd}var UR=zR();const Qi=Xe(UR);var VR=EA();const GR=Xe(VR);var an=function(t){return t===0?0:t>0?1:-1},lo=function(t){return Ks(t)&&t.indexOf("%")===t.length-1},le=function(t){return GR(t)&&!Qi(t)},Rt=function(t){return le(t)||Ks(t)},KR=0,Ha=function(t){var n=++KR;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Ks(t))return r;var i;if(lo(t)){var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Qi(i)&&(i=r),a&&i>n&&(i=n),i},Aa=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},QR=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function Ec(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Wn(r,t))===n})}var YR=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,i=0,s=0,l=1/0,p=-1/0,f=0,m=0,d=0;d<n;d++)f=t[d].cx||0,m=t[d].cy||0,r+=f,a+=m,i+=f*m,s+=f*f,l=Math.min(l,f),p=Math.max(p,f);var v=n*s!==r*r?(n*i-r*a)/(n*s-r*r):0;return{xmin:l,xmax:p,a:v,b:(a-v*r)/n}};function li(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function jv(e){"@babel/helpers - typeof";return jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jv(e)}var XR=["viewBox","children"],ZR=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],NB=["points","pathLength"],Sd={svg:XR,polygon:NB,polyline:NB},wy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Tc=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(X.isValidElement(t)&&(r=t.props),!Ki(r))return null;var a={};return Object.keys(r).forEach(function(i){wy.includes(i)&&(a[i]=n||function(s){return r[i](r,s)})}),a},JR=function(t,n,r){return function(a){return t(n,r,a),null}},Ta=function(t,n,r){if(!Ki(t)||jv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(i){var s=t[i];wy.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=JR(s,n,r))}),a},ej=["children"],tj=["children"];function RB(e,t){if(e==null)return{};var n=nj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Hv(e){"@babel/helpers - typeof";return Hv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hv(e)}var jB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},HB=null,Ad=null,Py=function e(t){if(t===HB&&Array.isArray(Ad))return Ad;var n=[];return X.Children.forEach(t,function(r){Ee(r)||(qR.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),Ad=n,HB=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],Py(e).forEach(function(a){var i=Wn(a,"type.displayName")||Wn(a,"type.name");r.indexOf(i)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var DB=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},rj=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],aj=function(t){return t&&t.type&&Ks(t.type)&&rj.indexOf(t.type)>=0},TA=function(t){return t&&Hv(t)==="object"&&"clipDot"in t},oj=function(t,n,r,a){var i,s=(i=Sd==null?void 0:Sd[a])!==null&&i!==void 0?i:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||ZR.includes(n))||r&&wy.includes(n)},Ae=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(X.isValidElement(t)&&(a=t.props),!Ki(a))return null;var i={};return Object.keys(a).forEach(function(s){var l;oj((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(i[s]=a[s])}),i},Dv=function e(t,n){if(t===n)return!0;var r=X.Children.count(t);if(r!==X.Children.count(n))return!1;if(r===0)return!0;if(r===1)return $B(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var i=t[a],s=n[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!$B(i,s))return!1}return!0},$B=function(t,n){if(Ee(t)&&Ee(n))return!0;if(!Ee(t)&&!Ee(n)){var r=t.props||{},a=r.children,i=RB(r,ej),s=n.props||{},l=s.children,p=RB(s,tj);return a&&l?li(i,p)&&Dv(a,l):!a&&!l?li(i,p):!1}return!1},LB=function(t,n){var r=[],a={};return Py(t).forEach(function(i,s){if(aj(i))r.push(i);else if(i){var l=Ur(i.type),p=n[l]||{},f=p.handler,m=p.once;if(f&&(!m||!a[l])){var d=f(i,l,s);r.push(d),a[l]=!0}}}),r},ij=function(t){var n=t&&t.type;return n&&jB[n]?jB[n]:null},uj=function(t,n){return Py(n).indexOf(t)},sj=["children","width","height","viewBox","className","style","title","desc"];function $v(){return $v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$v.apply(this,arguments)}function lj(e,t){if(e==null)return{};var n=cj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Lv(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,l=e.title,p=e.desc,f=lj(e,sj),m=a||{width:n,height:r,x:0,y:0},d=je("recharts-surface",i);return R.createElement("svg",$v({},Ae(f,!0,"svg"),{className:d,width:n,height:r,style:s,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),R.createElement("title",null,l),R.createElement("desc",null,p),t)}var pj=["children","className"];function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fv.apply(this,arguments)}function fj(e,t){if(e==null)return{};var n=dj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=R.forwardRef(function(e,t){var n=e.children,r=e.className,a=fj(e,pj),i=je("recharts-layer",r);return R.createElement("g",Fv({className:i},Ae(a,!0),{ref:t}),n)}),ur=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},_d,FB;function hj(){if(FB)return _d;FB=1;function e(t,n,r){var a=-1,i=t.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(i);++a<i;)s[a]=t[a+n];return s}return _d=e,_d}var Od,qB;function mj(){if(qB)return Od;qB=1;var e=hj();function t(n,r,a){var i=n.length;return a=a===void 0?i:a,!r&&a>=i?n:e(n,r,a)}return Od=t,Od}var Wd,zB;function NA(){if(zB)return Wd;zB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+i+"]");function p(f){return l.test(f)}return Wd=p,Wd}var Md,UB;function vj(){if(UB)return Md;UB=1;function e(t){return t.split("")}return Md=e,Md}var Cd,VB;function gj(){if(VB)return Cd;VB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",p="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+p+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",x=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[m,d,v].join("|")+")"+I+x+")*",S=I+x+b,A="(?:"+[m+l+"?",l,d,v,s].join("|")+")",_=RegExp(p+"(?="+p+")|"+A+S,"g");function M(w){return w.match(_)||[]}return Cd=M,Cd}var kd,GB;function yj(){if(GB)return kd;GB=1;var e=vj(),t=NA(),n=gj();function r(a){return t(a)?n(a):e(a)}return kd=r,kd}var Ed,KB;function bj(){if(KB)return Ed;KB=1;var e=mj(),t=NA(),n=yj(),r=MA();function a(i){return function(s){s=r(s);var l=t(s)?n(s):void 0,p=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return p[i]()+f}}return Ed=a,Ed}var Td,QB;function Ij(){if(QB)return Td;QB=1;var e=bj(),t=e("toUpperCase");return Td=t,Td}var Bj=Ij();const Up=Xe(Bj);function at(e){return function(){return e}}const RA=Math.cos,Nc=Math.sin,cr=Math.sqrt,Rc=Math.PI,Vp=2*Rc,qv=Math.PI,zv=2*qv,io=1e-6,xj=zv-io;function jA(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function wj(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return jA;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class Pj{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?jA:wj(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,p=r-t,f=a-n,m=s-t,d=l-n,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>io)if(!(Math.abs(d*p-f*m)>io)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let y=r-s,x=a-l,I=p*p+f*f,b=y*y+x*x,S=Math.sqrt(I),A=Math.sqrt(v),_=i*Math.tan((qv-Math.acos((I+v-b)/(2*S*A)))/2),M=_/A,w=_/S;Math.abs(M-1)>io&&this._append`L${t+M*m},${n+M*d}`,this._append`A${i},${i},0,0,${+(d*y>m*x)},${this._x1=t+w*p},${this._y1=n+w*f}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),p=r*Math.sin(a),f=t+l,m=n+p,d=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-m)>io)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%zv+zv),v>xj?this._append`A${r},${r},0,1,${d},${t-l},${n-p}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>io&&this._append`A${r},${r},0,${+(v>=qv)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Sy(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Pj(t)}function Ay(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function HA(e){this._context=e}HA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Gp(e){return new HA(e)}function DA(e){return e[0]}function $A(e){return e[1]}function LA(e,t){var n=at(!0),r=null,a=Gp,i=null,s=Sy(l);e=typeof e=="function"?e:e===void 0?DA:at(e),t=typeof t=="function"?t:t===void 0?$A:at(t);function l(p){var f,m=(p=Ay(p)).length,d,v=!1,y;for(r==null&&(i=a(y=s())),f=0;f<=m;++f)!(f<m&&n(d=p[f],f,p))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,p),+t(d,f,p));if(y)return i=null,y+""||null}return l.x=function(p){return arguments.length?(e=typeof p=="function"?p:at(+p),l):e},l.y=function(p){return arguments.length?(t=typeof p=="function"?p:at(+p),l):t},l.defined=function(p){return arguments.length?(n=typeof p=="function"?p:at(!!p),l):n},l.curve=function(p){return arguments.length?(a=p,r!=null&&(i=a(r)),l):a},l.context=function(p){return arguments.length?(p==null?r=i=null:i=a(r=p),l):r},l}function hc(e,t,n){var r=null,a=at(!0),i=null,s=Gp,l=null,p=Sy(f);e=typeof e=="function"?e:e===void 0?DA:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?$A:at(+n);function f(d){var v,y,x,I=(d=Ay(d)).length,b,S=!1,A,_=new Array(I),M=new Array(I);for(i==null&&(l=s(A=p())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===S)if(S=!S)y=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),x=v-1;x>=y;--x)l.point(_[x],M[x]);l.lineEnd(),l.areaEnd()}S&&(_[v]=+e(b,v,d),M[v]=+t(b,v,d),l.point(r?+r(b,v,d):_[v],n?+n(b,v,d):M[v]))}if(A)return l=null,A+""||null}function m(){return LA().defined(a).curve(s).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:at(+d),f):r},f.y=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),n=null,f):t},f.y0=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),f):t},f.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:at(+d),f):n},f.lineX0=f.lineY0=function(){return m().x(e).y(t)},f.lineY1=function(){return m().x(e).y(n)},f.lineX1=function(){return m().x(r).y(t)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:at(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,i!=null&&(l=s(i)),f):s},f.context=function(d){return arguments.length?(d==null?i=l=null:l=s(i=d),f):i},f}class FA{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function Sj(e){return new FA(e,!0)}function Aj(e){return new FA(e,!1)}const _y={draw(e,t){const n=cr(t/Rc);e.moveTo(n,0),e.arc(0,0,n,0,Vp)}},_j={draw(e,t){const n=cr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},qA=cr(1/3),Oj=qA*2,Wj={draw(e,t){const n=cr(t/Oj),r=n*qA;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},Mj={draw(e,t){const n=cr(t),r=-n/2;e.rect(r,r,n,n)}},Cj=.8908130915292852,zA=Nc(Rc/10)/Nc(7*Rc/10),kj=Nc(Vp/10)*zA,Ej=-RA(Vp/10)*zA,Tj={draw(e,t){const n=cr(t*Cj),r=kj*n,a=Ej*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Vp*i/5,l=RA(s),p=Nc(s);e.lineTo(p*n,-l*n),e.lineTo(l*r-p*a,p*r+l*a)}e.closePath()}},Nd=cr(3),Nj={draw(e,t){const n=-cr(t/(Nd*3));e.moveTo(0,n*2),e.lineTo(-Nd*n,-n),e.lineTo(Nd*n,-n),e.closePath()}},Dn=-.5,$n=cr(3)/2,Uv=1/cr(12),Rj=(Uv/2+1)*3,jj={draw(e,t){const n=cr(t/Rj),r=n/2,a=n*Uv,i=r,s=n*Uv+n,l=-i,p=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,p),e.lineTo(Dn*r-$n*a,$n*r+Dn*a),e.lineTo(Dn*i-$n*s,$n*i+Dn*s),e.lineTo(Dn*l-$n*p,$n*l+Dn*p),e.lineTo(Dn*r+$n*a,Dn*a-$n*r),e.lineTo(Dn*i+$n*s,Dn*s-$n*i),e.lineTo(Dn*l+$n*p,Dn*p-$n*l),e.closePath()}};function Hj(e,t){let n=null,r=Sy(a);e=typeof e=="function"?e:at(e||_y),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:at(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:at(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function jc(){}function Hc(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function UA(e){this._context=e}UA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Hc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Hc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Dj(e){return new UA(e)}function VA(e){this._context=e}VA.prototype={areaStart:jc,areaEnd:jc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Hc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function $j(e){return new VA(e)}function GA(e){this._context=e}GA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Hc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Lj(e){return new GA(e)}function KA(e){this._context=e}KA.prototype={areaStart:jc,areaEnd:jc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function Fj(e){return new KA(e)}function YB(e){return e<0?-1:1}function XB(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(YB(i)+YB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function ZB(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Rd(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function Dc(e){this._context=e}Dc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Rd(this,this._t0,ZB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Rd(this,ZB(this,n=XB(this,e,t)),n);break;default:Rd(this,this._t0,n=XB(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function QA(e){this._context=new YA(e)}(QA.prototype=Object.create(Dc.prototype)).point=function(e,t){Dc.prototype.point.call(this,t,e)};function YA(e){this._context=e}YA.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function qj(e){return new Dc(e)}function zj(e){return new QA(e)}function XA(e){this._context=e}XA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=JB(e),a=JB(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function JB(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function Uj(e){return new XA(e)}function Kp(e,t){this._context=e,this._t=t}Kp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function Vj(e){return new Kp(e,.5)}function Gj(e){return new Kp(e,0)}function Kj(e){return new Kp(e,1)}function hi(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Vv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function Qj(e,t){return e[t]}function Yj(e){const t=[];return t.key=e,t}function Xj(){var e=at([]),t=Vv,n=hi,r=Qj;function a(i){var s=Array.from(e.apply(this,arguments),Yj),l,p=s.length,f=-1,m;for(const d of i)for(l=0,++f;l<p;++l)(s[l][f]=[0,+r(d,s[l].key,f,i)]).data=d;for(l=0,m=Ay(t(s));l<p;++l)s[m[l]].index=l;return n(s,m),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:at(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:at(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?Vv:typeof i=="function"?i:at(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??hi,a):n},a}function Zj(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}hi(e,t)}}function Jj(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}hi(e,t)}}function eH(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,p=0,f=0;l<s;++l){for(var m=e[t[l]],d=m[r][1]||0,v=m[r-1][1]||0,y=(d-v)/2,x=0;x<l;++x){var I=e[t[x]],b=I[r][1]||0,S=I[r-1][1]||0;y+=b-S}p+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=n,p&&(n-=f/p)}a[r-1][1]+=a[r-1][0]=n,hi(e,t)}}function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}var tH=["type","size","sizeType"];function Gv(){return Gv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gv.apply(this,arguments)}function ex(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ex(Object(n),!0).forEach(function(r){nH(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ex(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nH(e,t,n){return t=rH(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rH(e){var t=aH(e,"string");return fs(t)=="symbol"?t:t+""}function aH(e,t){if(fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oH(e,t){if(e==null)return{};var n=iH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function iH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var ZA={symbolCircle:_y,symbolCross:_j,symbolDiamond:Wj,symbolSquare:Mj,symbolStar:Tj,symbolTriangle:Nj,symbolWye:jj},uH=Math.PI/180,sH=function(t){var n="symbol".concat(Up(t));return ZA[n]||_y},lH=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*uH;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},cH=function(t,n){ZA["symbol".concat(Up(t))]=n},Qp=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,i=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,p=oH(t,tH),f=tx(tx({},p),{},{type:r,size:i,sizeType:l}),m=function(){var b=sH(r),S=Hj().type(b).size(lH(i,l,r));return S()},d=f.className,v=f.cx,y=f.cy,x=Ae(f,!0);return v===+v&&y===+y&&i===+i?R.createElement("path",Gv({},x,{className:je("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:m()})):null};Qp.registerSymbol=cH;function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function Kv(){return Kv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kv.apply(this,arguments)}function nx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function pH(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nx(Object(n),!0).forEach(function(r){ds(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dH(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,e_(r.key),r)}}function hH(e,t,n){return t&&dH(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function mH(e,t,n){return t=$c(t),vH(e,JA()?Reflect.construct(t,n||[],$c(e).constructor):t.apply(e,n))}function vH(e,t){if(t&&(mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gH(e)}function gH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JA=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$c(e)}function yH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qv(e,t)}function Qv(e,t){return Qv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qv(e,t)}function ds(e,t,n){return t=e_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e_(e){var t=bH(e,"string");return mi(t)=="symbol"?t:t+""}function bH(e,t){if(mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ln=32,Oy=(function(e){function t(){return fH(this,t),mH(this,t,arguments)}return yH(t,e),hH(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ln/2,s=Ln/6,l=Ln/3,p=r.inactive?a:r.color;if(r.type==="plainline")return R.createElement("line",{strokeWidth:4,fill:"none",stroke:p,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ln,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return R.createElement("path",{strokeWidth:4,fill:"none",stroke:p,d:"M0,".concat(i,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(i,`
            H`).concat(Ln,"M").concat(2*l,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return R.createElement("path",{stroke:"none",fill:p,d:"M0,".concat(Ln/8,"h").concat(Ln,"v").concat(Ln*3/4,"h").concat(-Ln,"z"),className:"recharts-legend-icon"});if(R.isValidElement(r.legendIcon)){var f=pH({},r);return delete f.legendIcon,R.cloneElement(r.legendIcon,f)}return R.createElement(Qp,{fill:p,cx:i,cy:i,size:Ln,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,l=a.layout,p=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:Ln,height:Ln},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,x){var I=y.formatter||p,b=je(ds(ds({"recharts-legend-item":!0},"legend-item-".concat(x),!0),"inactive",y.inactive));if(y.type==="none")return null;var S=ke(y.value)?null:y.value;ur(!ke(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var A=y.inactive?f:y.color;return R.createElement("li",Kv({className:b,style:d,key:"legend-item-".concat(x)},Ta(r.props,y,x)),R.createElement(Lv,{width:s,height:s,viewBox:m,style:v},r.renderIcon(y)),R.createElement("span",{className:"recharts-legend-item-text",style:{color:A}},I?I(S,y,x):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return R.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(X.PureComponent);ds(Oy,"displayName","Legend");ds(Oy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var jd,rx;function IH(){if(rx)return jd;rx=1;var e=Fp();function t(){this.__data__=new e,this.size=0}return jd=t,jd}var Hd,ax;function BH(){if(ax)return Hd;ax=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return Hd=e,Hd}var Dd,ox;function xH(){if(ox)return Dd;ox=1;function e(t){return this.__data__.get(t)}return Dd=e,Dd}var $d,ix;function wH(){if(ix)return $d;ix=1;function e(t){return this.__data__.has(t)}return $d=e,$d}var Ld,ux;function PH(){if(ux)return Ld;ux=1;var e=Fp(),t=by(),n=Iy(),r=200;function a(i,s){var l=this.__data__;if(l instanceof e){var p=l.__data__;if(!t||p.length<r-1)return p.push([i,s]),this.size=++l.size,this;l=this.__data__=new n(p)}return l.set(i,s),this.size=l.size,this}return Ld=a,Ld}var Fd,sx;function t_(){if(sx)return Fd;sx=1;var e=Fp(),t=IH(),n=BH(),r=xH(),a=wH(),i=PH();function s(l){var p=this.__data__=new e(l);this.size=p.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,Fd=s,Fd}var qd,lx;function SH(){if(lx)return qd;lx=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return qd=t,qd}var zd,cx;function AH(){if(cx)return zd;cx=1;function e(t){return this.__data__.has(t)}return zd=e,zd}var Ud,px;function n_(){if(px)return Ud;px=1;var e=Iy(),t=SH(),n=AH();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Ud=r,Ud}var Vd,fx;function r_(){if(fx)return Vd;fx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Vd=e,Vd}var Gd,dx;function a_(){if(dx)return Gd;dx=1;function e(t,n){return t.has(n)}return Gd=e,Gd}var Kd,hx;function o_(){if(hx)return Kd;hx=1;var e=n_(),t=r_(),n=a_(),r=1,a=2;function i(s,l,p,f,m,d){var v=p&r,y=s.length,x=l.length;if(y!=x&&!(v&&x>y))return!1;var I=d.get(s),b=d.get(l);if(I&&b)return I==l&&b==s;var S=-1,A=!0,_=p&a?new e:void 0;for(d.set(s,l),d.set(l,s);++S<y;){var M=s[S],w=l[S];if(f)var O=v?f(w,M,S,l,s,d):f(M,w,S,s,l,d);if(O!==void 0){if(O)continue;A=!1;break}if(_){if(!t(l,function(E,P){if(!n(_,P)&&(M===E||m(M,E,p,f,d)))return _.push(P)})){A=!1;break}}else if(!(M===w||m(M,w,p,f,d))){A=!1;break}}return d.delete(s),d.delete(l),A}return Kd=i,Kd}var Qd,mx;function _H(){if(mx)return Qd;mx=1;var e=Ar(),t=e.Uint8Array;return Qd=t,Qd}var Yd,vx;function OH(){if(vx)return Yd;vx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,i){r[++n]=[i,a]}),r}return Yd=e,Yd}var Xd,gx;function Wy(){if(gx)return Xd;gx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Xd=e,Xd}var Zd,yx;function WH(){if(yx)return Zd;yx=1;var e=Gs(),t=_H(),n=yy(),r=o_(),a=OH(),i=Wy(),s=1,l=2,p="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",x="[object Set]",I="[object String]",b="[object Symbol]",S="[object ArrayBuffer]",A="[object DataView]",_=e?e.prototype:void 0,M=_?_.valueOf:void 0;function w(O,E,P,C,N,H,T){switch(P){case A:if(O.byteLength!=E.byteLength||O.byteOffset!=E.byteOffset)return!1;O=O.buffer,E=E.buffer;case S:return!(O.byteLength!=E.byteLength||!H(new t(O),new t(E)));case p:case f:case v:return n(+O,+E);case m:return O.name==E.name&&O.message==E.message;case y:case I:return O==E+"";case d:var $=a;case x:var G=C&s;if($||($=i),O.size!=E.size&&!G)return!1;var U=T.get(O);if(U)return U==E;C|=l,T.set(O,E);var z=r($(O),$(E),C,N,H,T);return T.delete(O),z;case b:if(M)return M.call(O)==M.call(E)}return!1}return Zd=w,Zd}var Jd,bx;function i_(){if(bx)return Jd;bx=1;function e(t,n){for(var r=-1,a=n.length,i=t.length;++r<a;)t[i+r]=n[r];return t}return Jd=e,Jd}var eh,Ix;function MH(){if(Ix)return eh;Ix=1;var e=i_(),t=yn();function n(r,a,i){var s=a(r);return t(r)?s:e(s,i(r))}return eh=n,eh}var th,Bx;function CH(){if(Bx)return th;Bx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[i++]=l)}return s}return th=e,th}var nh,xx;function kH(){if(xx)return nh;xx=1;function e(){return[]}return nh=e,nh}var rh,wx;function EH(){if(wx)return rh;wx=1;var e=CH(),t=kH(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return rh=i,rh}var ah,Px;function TH(){if(Px)return ah;Px=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return ah=e,ah}var oh,Sx;function NH(){if(Sx)return oh;Sx=1;var e=Yr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return oh=r,oh}var ih,Ax;function My(){if(Ax)return ih;Ax=1;var e=NH(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return ih=i,ih}var Ju={exports:{}},uh,_x;function RH(){if(_x)return uh;_x=1;function e(){return!1}return uh=e,uh}Ju.exports;var Ox;function u_(){return Ox||(Ox=1,(function(e,t){var n=Ar(),r=RH(),a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,l=s?n.Buffer:void 0,p=l?l.isBuffer:void 0,f=p||r;e.exports=f})(Ju,Ju.exports)),Ju.exports}var sh,Wx;function Cy(){if(Wx)return sh;Wx=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return sh=n,sh}var lh,Mx;function ky(){if(Mx)return lh;Mx=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return lh=t,lh}var ch,Cx;function jH(){if(Cx)return ch;Cx=1;var e=Yr(),t=ky(),n=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",l="[object Error]",p="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",x="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",S="[object DataView]",A="[object Float32Array]",_="[object Float64Array]",M="[object Int8Array]",w="[object Int16Array]",O="[object Int32Array]",E="[object Uint8Array]",P="[object Uint8ClampedArray]",C="[object Uint16Array]",N="[object Uint32Array]",H={};H[A]=H[_]=H[M]=H[w]=H[O]=H[E]=H[P]=H[C]=H[N]=!0,H[r]=H[a]=H[b]=H[i]=H[S]=H[s]=H[l]=H[p]=H[f]=H[m]=H[d]=H[v]=H[y]=H[x]=H[I]=!1;function T($){return n($)&&t($.length)&&!!H[e($)]}return ch=T,ch}var ph,kx;function s_(){if(kx)return ph;kx=1;function e(t){return function(n){return t(n)}}return ph=e,ph}var es={exports:{}};es.exports;var Ex;function HH(){return Ex||(Ex=1,(function(e,t){var n=_A(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&n.process,l=(function(){try{var p=a&&a.require&&a.require("util").types;return p||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(es,es.exports)),es.exports}var fh,Tx;function l_(){if(Tx)return fh;Tx=1;var e=jH(),t=s_(),n=HH(),r=n&&n.isTypedArray,a=r?t(r):e;return fh=a,fh}var dh,Nx;function DH(){if(Nx)return dh;Nx=1;var e=TH(),t=My(),n=yn(),r=u_(),a=Cy(),i=l_(),s=Object.prototype,l=s.hasOwnProperty;function p(f,m){var d=n(f),v=!d&&t(f),y=!d&&!v&&r(f),x=!d&&!v&&!y&&i(f),I=d||v||y||x,b=I?e(f.length,String):[],S=b.length;for(var A in f)(m||l.call(f,A))&&!(I&&(A=="length"||y&&(A=="offset"||A=="parent")||x&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||a(A,S)))&&b.push(A);return b}return dh=p,dh}var hh,Rx;function $H(){if(Rx)return hh;Rx=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return hh=t,hh}var mh,jx;function c_(){if(jx)return mh;jx=1;function e(t,n){return function(r){return t(n(r))}}return mh=e,mh}var vh,Hx;function LH(){if(Hx)return vh;Hx=1;var e=c_(),t=e(Object.keys,Object);return vh=t,vh}var gh,Dx;function FH(){if(Dx)return gh;Dx=1;var e=$H(),t=LH(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!e(i))return t(i);var s=[];for(var l in Object(i))r.call(i,l)&&l!="constructor"&&s.push(l);return s}return gh=a,gh}var yh,$x;function Qs(){if($x)return yh;$x=1;var e=gy(),t=ky();function n(r){return r!=null&&t(r.length)&&!e(r)}return yh=n,yh}var bh,Lx;function Yp(){if(Lx)return bh;Lx=1;var e=DH(),t=FH(),n=Qs();function r(a){return n(a)?e(a):t(a)}return bh=r,bh}var Ih,Fx;function qH(){if(Fx)return Ih;Fx=1;var e=MH(),t=EH(),n=Yp();function r(a){return e(a,n,t)}return Ih=r,Ih}var Bh,qx;function zH(){if(qx)return Bh;qx=1;var e=qH(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,l,p,f,m){var d=l&t,v=e(i),y=v.length,x=e(s),I=x.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var S=v[b];if(!(d?S in s:r.call(s,S)))return!1}var A=m.get(i),_=m.get(s);if(A&&_)return A==s&&_==i;var M=!0;m.set(i,s),m.set(s,i);for(var w=d;++b<y;){S=v[b];var O=i[S],E=s[S];if(p)var P=d?p(E,O,S,s,i,m):p(O,E,S,i,s,m);if(!(P===void 0?O===E||f(O,E,l,p,m):P)){M=!1;break}w||(w=S=="constructor")}if(M&&!w){var C=i.constructor,N=s.constructor;C!=N&&"constructor"in i&&"constructor"in s&&!(typeof C=="function"&&C instanceof C&&typeof N=="function"&&N instanceof N)&&(M=!1)}return m.delete(i),m.delete(s),M}return Bh=a,Bh}var xh,zx;function UH(){if(zx)return xh;zx=1;var e=Bo(),t=Ar(),n=e(t,"DataView");return xh=n,xh}var wh,Ux;function VH(){if(Ux)return wh;Ux=1;var e=Bo(),t=Ar(),n=e(t,"Promise");return wh=n,wh}var Ph,Vx;function p_(){if(Vx)return Ph;Vx=1;var e=Bo(),t=Ar(),n=e(t,"Set");return Ph=n,Ph}var Sh,Gx;function GH(){if(Gx)return Sh;Gx=1;var e=Bo(),t=Ar(),n=e(t,"WeakMap");return Sh=n,Sh}var Ah,Kx;function KH(){if(Kx)return Ah;Kx=1;var e=UH(),t=by(),n=VH(),r=p_(),a=GH(),i=Yr(),s=OA(),l="[object Map]",p="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",y=s(e),x=s(t),I=s(n),b=s(r),S=s(a),A=i;return(e&&A(new e(new ArrayBuffer(1)))!=v||t&&A(new t)!=l||n&&A(n.resolve())!=f||r&&A(new r)!=m||a&&A(new a)!=d)&&(A=function(_){var M=i(_),w=M==p?_.constructor:void 0,O=w?s(w):"";if(O)switch(O){case y:return v;case x:return l;case I:return f;case b:return m;case S:return d}return M}),Ah=A,Ah}var _h,Qx;function QH(){if(Qx)return _h;Qx=1;var e=t_(),t=o_(),n=WH(),r=zH(),a=KH(),i=yn(),s=u_(),l=l_(),p=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function x(I,b,S,A,_,M){var w=i(I),O=i(b),E=w?m:a(I),P=O?m:a(b);E=E==f?d:E,P=P==f?d:P;var C=E==d,N=P==d,H=E==P;if(H&&s(I)){if(!s(b))return!1;w=!0,C=!1}if(H&&!C)return M||(M=new e),w||l(I)?t(I,b,S,A,_,M):n(I,b,E,S,A,_,M);if(!(S&p)){var T=C&&y.call(I,"__wrapped__"),$=N&&y.call(b,"__wrapped__");if(T||$){var G=T?I.value():I,U=$?b.value():b;return M||(M=new e),_(G,U,S,A,M)}}return H?(M||(M=new e),r(I,b,S,A,_,M)):!1}return _h=x,_h}var Oh,Yx;function Ey(){if(Yx)return Oh;Yx=1;var e=QH(),t=Xr();function n(r,a,i,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,i,s,n,l)}return Oh=n,Oh}var Wh,Xx;function YH(){if(Xx)return Wh;Xx=1;var e=t_(),t=Ey(),n=1,r=2;function a(i,s,l,p){var f=l.length,m=f,d=!p;if(i==null)return!m;for(i=Object(i);f--;){var v=l[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=l[f];var y=v[0],x=i[y],I=v[1];if(d&&v[2]){if(x===void 0&&!(y in i))return!1}else{var b=new e;if(p)var S=p(x,I,y,i,s,b);if(!(S===void 0?t(I,x,n|r,p,b):S))return!1}}return!0}return Wh=a,Wh}var Mh,Zx;function f_(){if(Zx)return Mh;Zx=1;var e=ja();function t(n){return n===n&&!e(n)}return Mh=t,Mh}var Ch,Jx;function XH(){if(Jx)return Ch;Jx=1;var e=f_(),t=Yp();function n(r){for(var a=t(r),i=a.length;i--;){var s=a[i],l=r[s];a[i]=[s,l,e(l)]}return a}return Ch=n,Ch}var kh,ew;function d_(){if(ew)return kh;ew=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return kh=e,kh}var Eh,tw;function ZH(){if(tw)return Eh;tw=1;var e=YH(),t=XH(),n=d_();function r(a){var i=t(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Eh=r,Eh}var Th,nw;function JH(){if(nw)return Th;nw=1;function e(t,n){return t!=null&&n in Object(t)}return Th=e,Th}var Nh,rw;function eD(){if(rw)return Nh;rw=1;var e=CA(),t=My(),n=yn(),r=Cy(),a=ky(),i=zp();function s(l,p,f){p=e(p,l);for(var m=-1,d=p.length,v=!1;++m<d;){var y=i(p[m]);if(!(v=l!=null&&f(l,y)))break;l=l[y]}return v||++m!=d?v:(d=l==null?0:l.length,!!d&&a(d)&&r(y,d)&&(n(l)||t(l)))}return Nh=s,Nh}var Rh,aw;function tD(){if(aw)return Rh;aw=1;var e=JH(),t=eD();function n(r,a){return r!=null&&t(r,a,e)}return Rh=n,Rh}var jh,ow;function nD(){if(ow)return jh;ow=1;var e=Ey(),t=kA(),n=tD(),r=vy(),a=f_(),i=d_(),s=zp(),l=1,p=2;function f(m,d){return r(m)&&a(d)?i(s(m),d):function(v){var y=t(v,m);return y===void 0&&y===d?n(v,m):e(d,y,l|p)}}return jh=f,jh}var Hh,iw;function Yi(){if(iw)return Hh;iw=1;function e(t){return t}return Hh=e,Hh}var Dh,uw;function rD(){if(uw)return Dh;uw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return Dh=e,Dh}var $h,sw;function aD(){if(sw)return $h;sw=1;var e=xy();function t(n){return function(r){return e(r,n)}}return $h=t,$h}var Lh,lw;function oD(){if(lw)return Lh;lw=1;var e=rD(),t=aD(),n=vy(),r=zp();function a(i){return n(i)?e(r(i)):t(i)}return Lh=a,Lh}var Fh,cw;function _r(){if(cw)return Fh;cw=1;var e=ZH(),t=nD(),n=Yi(),r=yn(),a=oD();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return Fh=i,Fh}var qh,pw;function h_(){if(pw)return qh;pw=1;function e(t,n,r,a){for(var i=t.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(t[s],s,t))return s;return-1}return qh=e,qh}var zh,fw;function iD(){if(fw)return zh;fw=1;function e(t){return t!==t}return zh=e,zh}var Uh,dw;function uD(){if(dw)return Uh;dw=1;function e(t,n,r){for(var a=r-1,i=t.length;++a<i;)if(t[a]===n)return a;return-1}return Uh=e,Uh}var Vh,hw;function sD(){if(hw)return Vh;hw=1;var e=h_(),t=iD(),n=uD();function r(a,i,s){return i===i?n(a,i,s):e(a,t,s)}return Vh=r,Vh}var Gh,mw;function lD(){if(mw)return Gh;mw=1;var e=sD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Gh=t,Gh}var Kh,vw;function cD(){if(vw)return Kh;vw=1;function e(t,n,r){for(var a=-1,i=t==null?0:t.length;++a<i;)if(r(n,t[a]))return!0;return!1}return Kh=e,Kh}var Qh,gw;function pD(){if(gw)return Qh;gw=1;function e(){}return Qh=e,Qh}var Yh,yw;function fD(){if(yw)return Yh;yw=1;var e=p_(),t=pD(),n=Wy(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(i){return new e(i)}:t;return Yh=a,Yh}var Xh,bw;function dD(){if(bw)return Xh;bw=1;var e=n_(),t=lD(),n=cD(),r=a_(),a=fD(),i=Wy(),s=200;function l(p,f,m){var d=-1,v=t,y=p.length,x=!0,I=[],b=I;if(m)x=!1,v=n;else if(y>=s){var S=f?null:a(p);if(S)return i(S);x=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var A=p[d],_=f?f(A):A;if(A=m||A!==0?A:0,x&&_===_){for(var M=b.length;M--;)if(b[M]===_)continue e;f&&b.push(_),I.push(A)}else v(b,_,m)||(b!==I&&b.push(_),I.push(A))}return I}return Xh=l,Xh}var Zh,Iw;function hD(){if(Iw)return Zh;Iw=1;var e=_r(),t=dD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return Zh=n,Zh}var mD=hD();const Bw=Xe(mD);function m_(e,t,n){return t===!0?Bw(e,n):ke(t)?Bw(e,t):e}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}var vD=["ref"];function xw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xw(Object(n),!0).forEach(function(r){Xp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ww(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g_(r.key),r)}}function yD(e,t,n){return t&&ww(e.prototype,t),n&&ww(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function bD(e,t,n){return t=Lc(t),ID(e,v_()?Reflect.construct(t,n||[],Lc(e).constructor):t.apply(e,n))}function ID(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BD(e)}function BD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v_=function(){return!!e})()}function Lc(e){return Lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lc(e)}function xD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yv(e,t)}function Yv(e,t){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(e,t)}function Xp(e,t,n){return t=g_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g_(e){var t=wD(e,"string");return vi(t)=="symbol"?t:t+""}function wD(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function PD(e,t){if(e==null)return{};var n=SD(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function SD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function AD(e){return e.value}function _D(e,t){if(R.isValidElement(e))return R.cloneElement(e,t);if(typeof e=="function")return R.createElement(e,t);t.ref;var n=PD(t,vD);return R.createElement(Oy,n)}var Pw=1,Ma=(function(e){function t(){var n;gD(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=bD(this,t,[].concat(a)),Xp(n,"lastBoundingBox",{width:-1,height:-1}),n}return xD(t,e),yD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Pw||Math.abs(a.height-this.lastBoundingBox.height)>Pw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?jr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,l=a.verticalAlign,p=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=s==="right"?{right:p&&p.right||0}:{left:p&&p.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var x=this.getBBoxSnapshot();v={top:((m||0)-x.height)/2}}else v=l==="bottom"?{bottom:p&&p.bottom||0}:{top:p&&p.top||0};return jr(jr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,l=a.height,p=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=jr(jr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(p)),p);return R.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},_D(i,jr(jr({},this.props),{},{payload:m_(m,f,AD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=jr(jr({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(X.PureComponent);Xp(Ma,"displayName","Legend");Xp(Ma,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Jh,Sw;function OD(){if(Sw)return Jh;Sw=1;var e=Gs(),t=My(),n=yn(),r=e?e.isConcatSpreadable:void 0;function a(i){return n(i)||t(i)||!!(r&&i&&i[r])}return Jh=a,Jh}var em,Aw;function y_(){if(Aw)return em;Aw=1;var e=i_(),t=OD();function n(r,a,i,s,l){var p=-1,f=r.length;for(i||(i=t),l||(l=[]);++p<f;){var m=r[p];a>0&&i(m)?a>1?n(m,a-1,i,s,l):e(l,m):s||(l[l.length]=m)}return l}return em=n,em}var tm,_w;function WD(){if(_w)return tm;_w=1;function e(t){return function(n,r,a){for(var i=-1,s=Object(n),l=a(n),p=l.length;p--;){var f=l[t?p:++i];if(r(s[f],f,s)===!1)break}return n}}return tm=e,tm}var nm,Ow;function MD(){if(Ow)return nm;Ow=1;var e=WD(),t=e();return nm=t,nm}var rm,Ww;function b_(){if(Ww)return rm;Ww=1;var e=MD(),t=Yp();function n(r,a){return r&&e(r,a,t)}return rm=n,rm}var am,Mw;function CD(){if(Mw)return am;Mw=1;var e=Qs();function t(n,r){return function(a,i){if(a==null)return a;if(!e(a))return n(a,i);for(var s=a.length,l=r?s:-1,p=Object(a);(r?l--:++l<s)&&i(p[l],l,p)!==!1;);return a}}return am=t,am}var om,Cw;function Ty(){if(Cw)return om;Cw=1;var e=b_(),t=CD(),n=t(e);return om=n,om}var im,kw;function I_(){if(kw)return im;kw=1;var e=Ty(),t=Qs();function n(r,a){var i=-1,s=t(r)?Array(r.length):[];return e(r,function(l,p,f){s[++i]=a(l,p,f)}),s}return im=n,im}var um,Ew;function kD(){if(Ew)return um;Ew=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return um=e,um}var sm,Tw;function ED(){if(Tw)return sm;Tw=1;var e=Gi();function t(n,r){if(n!==r){var a=n!==void 0,i=n===null,s=n===n,l=e(n),p=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!l&&n>r||l&&p&&m&&!f&&!d||i&&p&&m||!a&&m||!s)return 1;if(!i&&!l&&!d&&n<r||d&&a&&s&&!i&&!l||f&&a&&s||!p&&s||!m)return-1}return 0}return sm=t,sm}var lm,Nw;function TD(){if(Nw)return lm;Nw=1;var e=ED();function t(n,r,a){for(var i=-1,s=n.criteria,l=r.criteria,p=s.length,f=a.length;++i<p;){var m=e(s[i],l[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return n.index-r.index}return lm=t,lm}var cm,Rw;function ND(){if(Rw)return cm;Rw=1;var e=By(),t=xy(),n=_r(),r=I_(),a=kD(),i=s_(),s=TD(),l=Yi(),p=yn();function f(m,d,v){d.length?d=e(d,function(I){return p(I)?function(b){return t(b,I.length===1?I[0]:I)}:I}):d=[l];var y=-1;d=e(d,i(n));var x=r(m,function(I,b,S){var A=e(d,function(_){return _(I)});return{criteria:A,index:++y,value:I}});return a(x,function(I,b){return s(I,b,v)})}return cm=f,cm}var pm,jw;function RD(){if(jw)return pm;jw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return pm=e,pm}var fm,Hw;function jD(){if(Hw)return fm;Hw=1;var e=RD(),t=Math.max;function n(r,a,i){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,p=t(s.length-a,0),f=Array(p);++l<p;)f[l]=s[a+l];l=-1;for(var m=Array(a+1);++l<a;)m[l]=s[l];return m[a]=i(f),e(r,this,m)}}return fm=n,fm}var dm,Dw;function HD(){if(Dw)return dm;Dw=1;function e(t){return function(){return t}}return dm=e,dm}var hm,$w;function B_(){if($w)return hm;$w=1;var e=Bo(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return hm=t,hm}var mm,Lw;function DD(){if(Lw)return mm;Lw=1;var e=HD(),t=B_(),n=Yi(),r=t?function(a,i){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:n;return mm=r,mm}var vm,Fw;function $D(){if(Fw)return vm;Fw=1;var e=800,t=16,n=Date.now;function r(a){var i=0,s=0;return function(){var l=n(),p=t-(l-s);if(s=l,p>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return vm=r,vm}var gm,qw;function LD(){if(qw)return gm;qw=1;var e=DD(),t=$D(),n=t(e);return gm=n,gm}var ym,zw;function FD(){if(zw)return ym;zw=1;var e=Yi(),t=jD(),n=LD();function r(a,i){return n(t(a,i,e),a+"")}return ym=r,ym}var bm,Uw;function Zp(){if(Uw)return bm;Uw=1;var e=yy(),t=Qs(),n=Cy(),r=ja();function a(i,s,l){if(!r(l))return!1;var p=typeof s;return(p=="number"?t(l)&&n(s,l.length):p=="string"&&s in l)?e(l[s],i):!1}return bm=a,bm}var Im,Vw;function qD(){if(Vw)return Im;Vw=1;var e=y_(),t=ND(),n=FD(),r=Zp(),a=n(function(i,s){if(i==null)return[];var l=s.length;return l>1&&r(i,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(i,e(s,1),[])});return Im=a,Im}var zD=qD();const Ny=Xe(zD);function hs(e){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hs(e)}function Xv(){return Xv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xv.apply(this,arguments)}function UD(e,t){return QD(e)||KD(e,t)||GD(e,t)||VD()}function VD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GD(e,t){if(e){if(typeof e=="string")return Gw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gw(e,t)}}function Gw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function KD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function QD(e){if(Array.isArray(e))return e}function Kw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Bm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kw(Object(n),!0).forEach(function(r){YD(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YD(e,t,n){return t=XD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XD(e){var t=ZD(e,"string");return hs(t)=="symbol"?t:t+""}function ZD(e,t){if(hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JD(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var e$=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,i=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,p=t.labelStyle,f=p===void 0?{}:p,m=t.payload,d=t.formatter,v=t.itemSorter,y=t.wrapperClassName,x=t.labelClassName,I=t.label,b=t.labelFormatter,S=t.accessibilityLayer,A=S===void 0?!1:S,_=function(){if(m&&m.length){var T={padding:0,margin:0},$=(v?Ny(m,v):m).map(function(G,U){if(G.type==="none")return null;var z=Bm({display:"block",paddingTop:4,paddingBottom:4,color:G.color||"#000"},l),Q=G.formatter||d||JD,L=G.value,K=G.name,Y=L,j=K;if(Q&&Y!=null&&j!=null){var F=Q(L,K,G,U,m);if(Array.isArray(F)){var J=UD(F,2);Y=J[0],j=J[1]}else Y=F}return R.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(U),style:z},Rt(j)?R.createElement("span",{className:"recharts-tooltip-item-name"},j):null,Rt(j)?R.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,R.createElement("span",{className:"recharts-tooltip-item-value"},Y),R.createElement("span",{className:"recharts-tooltip-item-unit"},G.unit||""))});return R.createElement("ul",{className:"recharts-tooltip-item-list",style:T},$)}return null},M=Bm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=Bm({margin:0},f),O=!Ee(I),E=O?I:"",P=je("recharts-default-tooltip",y),C=je("recharts-tooltip-label",x);O&&b&&m!==void 0&&m!==null&&(E=b(I,m));var N=A?{role:"status","aria-live":"assertive"}:{};return R.createElement("div",Xv({className:P,style:M},N),R.createElement("p",{className:C,style:w},R.isValidElement(E)?E:"".concat(E)),_())};function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function mc(e,t,n){return t=t$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t$(e){var t=n$(e,"string");return ms(t)=="symbol"?t:t+""}function n$(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var qu="recharts-tooltip-wrapper",r$={visibility:"hidden"};function a$(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return je(qu,mc(mc(mc(mc({},"".concat(qu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(qu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(qu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(qu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Qw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,l=e.tooltipDimension,p=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var m=n[r]-l-a,d=n[r]+a;if(t[r])return s[r]?m:d;if(s[r]){var v=m,y=p[r];return v<y?Math.max(d,p[r]):Math.max(m,p[r])}var x=d+l,I=p[r]+f;return x>I?Math.max(m,p[r]):Math.max(d,p[r])}function o$(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function i$(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,p=e.viewBox,f,m,d;return s.height>0&&s.width>0&&n?(m=Qw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:p,viewBoxDimension:p.width}),d=Qw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:p,viewBoxDimension:p.height}),f=o$({translateX:m,translateY:d,useTranslate3d:l})):f=r$,{cssProperties:f,cssClasses:a$({translateX:m,translateY:d,coordinate:n})}}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function Yw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yw(Object(n),!0).forEach(function(r){Jv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w_(r.key),r)}}function l$(e,t,n){return t&&s$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function c$(e,t,n){return t=Fc(t),p$(e,x_()?Reflect.construct(t,n||[],Fc(e).constructor):t.apply(e,n))}function p$(e,t){if(t&&(gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return f$(e)}function f$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(x_=function(){return!!e})()}function Fc(e){return Fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Fc(e)}function d$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zv(e,t)}function Zv(e,t){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,t)}function Jv(e,t,n){return t=w_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w_(e){var t=h$(e,"string");return gi(t)=="symbol"?t:t+""}function h$(e,t){if(gi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Zw=1,m$=(function(e){function t(){var n;u$(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=c$(this,t,[].concat(a)),Jv(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),Jv(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,p,f,m;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(p=n.props.coordinate)===null||p===void 0?void 0:p.x)!==null&&l!==void 0?l:0,y:(f=(m=n.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),n}return d$(t,e),l$(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Zw||Math.abs(r.height-this.state.lastBoundingBox.height)>Zw)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,x=a.position,I=a.reverseDirection,b=a.useTranslate3d,S=a.viewBox,A=a.wrapperStyle,_=i$({allowEscapeViewBox:s,coordinate:m,offsetTopLeft:y,position:x,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:S}),M=_.cssClasses,w=_.cssProperties,O=Xw(Xw({transition:v&&i?"transform ".concat(l,"ms ").concat(p):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},A);return R.createElement("div",{tabIndex:-1,className:M,style:O,ref:function(P){r.wrapperNode=P}},f)}}])})(X.PureComponent),v$=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:v$()};function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function Jw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function eP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jw(Object(n),!0).forEach(function(r){Ry(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S_(r.key),r)}}function b$(e,t,n){return t&&y$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function I$(e,t,n){return t=qc(t),B$(e,P_()?Reflect.construct(t,n||[],qc(e).constructor):t.apply(e,n))}function B$(e,t){if(t&&(yi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x$(e)}function x$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(P_=function(){return!!e})()}function qc(e){return qc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qc(e)}function w$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eg(e,t)}function eg(e,t){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(e,t)}function Ry(e,t,n){return t=S_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S_(e){var t=P$(e,"string");return yi(t)=="symbol"?t:t+""}function P$(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function S$(e){return e.dataKey}function A$(e,t){return R.isValidElement(e)?R.cloneElement(e,t):typeof e=="function"?R.createElement(e,t):R.createElement(e$,t)}var An=(function(e){function t(){return g$(this,t),I$(this,t,arguments)}return w$(t,e),b$(t,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,p=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,x=a.payload,I=a.payloadUniqBy,b=a.position,S=a.reverseDirection,A=a.useTranslate3d,_=a.viewBox,M=a.wrapperStyle,w=x??[];d&&w.length&&(w=m_(x.filter(function(E){return E.value!=null&&(E.hide!==!0||r.props.includeHidden)}),I,S$));var O=w.length>0;return R.createElement(m$,{allowEscapeViewBox:s,animationDuration:l,animationEasing:p,isAnimationActive:v,active:i,coordinate:m,hasPayload:O,offset:y,position:b,reverseDirection:S,useTranslate3d:A,viewBox:_,wrapperStyle:M},A$(f,eP(eP({},this.props),{},{payload:w})))}}])})(X.PureComponent);Ry(An,"displayName","Tooltip");Ry(An,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var xm,tP;function _$(){if(tP)return xm;tP=1;var e=Ar(),t=function(){return e.Date.now()};return xm=t,xm}var wm,nP;function O$(){if(nP)return wm;nP=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return wm=t,wm}var Pm,rP;function W$(){if(rP)return Pm;rP=1;var e=O$(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Pm=n,Pm}var Sm,aP;function A_(){if(aP)return Sm;aP=1;var e=W$(),t=ja(),n=Gi(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function p(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=t(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||s.test(f)?l(f.slice(2),d?2:8):a.test(f)?r:+f}return Sm=p,Sm}var Am,oP;function M$(){if(oP)return Am;oP=1;var e=ja(),t=_$(),n=A_(),r="Expected a function",a=Math.max,i=Math.min;function s(l,p,f){var m,d,v,y,x,I,b=0,S=!1,A=!1,_=!0;if(typeof l!="function")throw new TypeError(r);p=n(p)||0,e(f)&&(S=!!f.leading,A="maxWait"in f,v=A?a(n(f.maxWait)||0,p):v,_="trailing"in f?!!f.trailing:_);function M($){var G=m,U=d;return m=d=void 0,b=$,y=l.apply(U,G),y}function w($){return b=$,x=setTimeout(P,p),S?M($):y}function O($){var G=$-I,U=$-b,z=p-G;return A?i(z,v-U):z}function E($){var G=$-I,U=$-b;return I===void 0||G>=p||G<0||A&&U>=v}function P(){var $=t();if(E($))return C($);x=setTimeout(P,O($))}function C($){return x=void 0,_&&m?M($):(m=d=void 0,y)}function N(){x!==void 0&&clearTimeout(x),b=0,m=I=d=x=void 0}function H(){return x===void 0?y:C(t())}function T(){var $=t(),G=E($);if(m=arguments,d=this,I=$,G){if(x===void 0)return w(I);if(A)return clearTimeout(x),x=setTimeout(P,p),M(I)}return x===void 0&&(x=setTimeout(P,p)),y}return T.cancel=N,T.flush=H,T}return Am=s,Am}var _m,iP;function C$(){if(iP)return _m;iP=1;var e=M$(),t=ja(),n="Expected a function";function r(a,i,s){var l=!0,p=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,p="trailing"in s?!!s.trailing:p),e(a,i,{leading:l,maxWait:i,trailing:p})}return _m=r,_m}var k$=C$();const __=Xe(k$);function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function uP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uP(Object(n),!0).forEach(function(r){E$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function E$(e,t,n){return t=T$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T$(e){var t=N$(e,"string");return vs(t)=="symbol"?t:t+""}function N$(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R$(e,t){return $$(e)||D$(e,t)||H$(e,t)||j$()}function j$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H$(e,t){if(e){if(typeof e=="string")return sP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sP(e,t)}}function sP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function $$(e){if(Array.isArray(e))return e}var jy=X.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,l=e.height,p=l===void 0?"100%":l,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,x=e.debounce,I=x===void 0?0:x,b=e.id,S=e.className,A=e.onResize,_=e.style,M=_===void 0?{}:_,w=X.useRef(null),O=X.useRef();O.current=A,X.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var E=X.useState({containerWidth:a.width,containerHeight:a.height}),P=R$(E,2),C=P[0],N=P[1],H=X.useCallback(function($,G){N(function(U){var z=Math.round($),Q=Math.round(G);return U.containerWidth===z&&U.containerHeight===Q?U:{containerWidth:z,containerHeight:Q}})},[]);X.useEffect(function(){var $=function(K){var Y,j=K[0].contentRect,F=j.width,J=j.height;H(F,J),(Y=O.current)===null||Y===void 0||Y.call(O,F,J)};I>0&&($=__($,I,{trailing:!0,leading:!1}));var G=new ResizeObserver($),U=w.current.getBoundingClientRect(),z=U.width,Q=U.height;return H(z,Q),G.observe(w.current),function(){G.disconnect()}},[H,I]);var T=X.useMemo(function(){var $=C.containerWidth,G=C.containerHeight;if($<0||G<0)return null;ur(lo(s)||lo(p),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,p),ur(!n||n>0,"The aspect(%s) must be greater than zero.",n);var U=lo(s)?$:s,z=lo(p)?G:p;n&&n>0&&(U?z=U/n:z&&(U=z*n),v&&z>v&&(z=v)),ur(U>0||z>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,U,z,s,p,m,d,n);var Q=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return R.Children.map(y,function(L){return R.isValidElement(L)?X.cloneElement(L,vc({width:U,height:z},Q?{style:vc({height:"100%",width:"100%",maxHeight:z,maxWidth:U},L.props.style)}:{})):L})},[n,y,p,v,d,m,C,s]);return R.createElement("div",{id:b?"".concat(b):void 0,className:je("recharts-responsive-container",S),style:vc(vc({},M),{},{width:s,height:p,minWidth:m,minHeight:d,maxHeight:v}),ref:w},T)}),Ys=function(t){return null};Ys.displayName="Cell";function gs(e){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function lP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lP(Object(n),!0).forEach(function(r){L$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function L$(e,t,n){return t=F$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F$(e){var t=q$(e,"string");return gs(t)=="symbol"?t:t+""}function q$(e,t){if(gs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Jo={widthCache:{},cacheCount:0},z$=2e3,U$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},cP="recharts_measurement_span";function V$(e){var t=tg({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var ns=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=V$(n),a=JSON.stringify({text:t,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(cP);i||(i=document.createElement("span"),i.setAttribute("id",cP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=tg(tg({},U$),r);Object.assign(i.style,s),i.textContent="".concat(t);var l=i.getBoundingClientRect(),p={width:l.width,height:l.height};return Jo.widthCache[a]=p,++Jo.cacheCount>z$&&(Jo.cacheCount=0,Jo.widthCache={}),p}catch{return{width:0,height:0}}},G$=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function ys(e){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ys(e)}function zc(e,t){return X$(e)||Y$(e,t)||Q$(e,t)||K$()}function K$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q$(e,t){if(e){if(typeof e=="string")return pP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pP(e,t)}}function pP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function X$(e){if(Array.isArray(e))return e}function Z$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eL(r.key),r)}}function J$(e,t,n){return t&&fP(e.prototype,t),n&&fP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eL(e){var t=tL(e,"string");return ys(t)=="symbol"?t:t+""}function tL(e,t){if(ys(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var dP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,hP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,nL=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,rL=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,O_={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},aL=Object.keys(O_),ai="NaN";function oL(e,t){return e*O_[t]}var gc=(function(){function e(t,n){Z$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!nL.test(n)&&(this.num=NaN,this.unit=""),aL.includes(n)&&(this.num=oL(t,n),this.unit="px")}return J$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=rL.exec(n))!==null&&r!==void 0?r:[],i=zc(a,3),s=i[1],l=i[2];return new e(parseFloat(s),l??"")}}])})();function W_(e){if(e.includes(ai))return ai;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=dP.exec(t))!==null&&n!==void 0?n:[],a=zc(r,4),i=a[1],s=a[2],l=a[3],p=gc.parse(i??""),f=gc.parse(l??""),m=s==="*"?p.multiply(f):p.divide(f);if(m.isNaN())return ai;t=t.replace(dP,m.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,v=(d=hP.exec(t))!==null&&d!==void 0?d:[],y=zc(v,4),x=y[1],I=y[2],b=y[3],S=gc.parse(x??""),A=gc.parse(b??""),_=I==="+"?S.add(A):S.subtract(A);if(_.isNaN())return ai;t=t.replace(hP,_.toString())}return t}var mP=/\(([^()]*)\)/;function iL(e){for(var t=e;t.includes("(");){var n=mP.exec(t),r=zc(n,2),a=r[1];t=t.replace(mP,W_(a))}return t}function uL(e){var t=e.replace(/\s+/g,"");return t=iL(t),t=W_(t),t}function sL(e){try{return uL(e)}catch{return ai}}function Om(e){var t=sL(e.slice(5,-1));return t===ai?"":t}var lL=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],cL=["dx","dy","angle","className","breakAll"];function ng(){return ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ng.apply(this,arguments)}function vP(e,t){if(e==null)return{};var n=pL(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function gP(e,t){return mL(e)||hL(e,t)||dL(e,t)||fL()}function fL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dL(e,t){if(e){if(typeof e=="string")return yP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yP(e,t)}}function yP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function mL(e){if(Array.isArray(e))return e}var M_=/[ \f\n\r\t\v\u2028\u2029]+/,C_=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var i=[];Ee(n)||(r?i=n.toString().split(""):i=n.toString().split(M_));var s=i.map(function(p){return{word:p,width:ns(p,a).width}}),l=r?0:ns(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},vL=function(t,n,r,a,i){var s=t.maxLines,l=t.children,p=t.style,f=t.breakAll,m=le(s),d=l,v=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return U.reduce(function(z,Q){var L=Q.word,K=Q.width,Y=z[z.length-1];if(Y&&(a==null||i||Y.width+K+r<Number(a)))Y.words.push(L),Y.width+=K+r;else{var j={words:[L],width:K};z.push(j)}return z},[])},y=v(n),x=function(U){return U.reduce(function(z,Q){return z.width>Q.width?z:Q})};if(!m)return y;for(var I="…",b=function(U){var z=d.slice(0,U),Q=C_({breakAll:f,style:p,children:z+I}).wordsWithComputedWidth,L=v(Q),K=L.length>s||x(L).width>Number(a);return[K,L]},S=0,A=d.length-1,_=0,M;S<=A&&_<=d.length-1;){var w=Math.floor((S+A)/2),O=w-1,E=b(O),P=gP(E,2),C=P[0],N=P[1],H=b(w),T=gP(H,1),$=T[0];if(!C&&!$&&(S=w+1),C&&$&&(A=w-1),!C&&$){M=N;break}_++}return M||y},bP=function(t){var n=Ee(t)?[]:t.toString().split(M_);return[{words:n}]},gL=function(t){var n=t.width,r=t.scaleToFit,a=t.children,i=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var p,f,m=C_({breakAll:s,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;p=d,f=v}else return bP(a);return vL({breakAll:s,children:a,maxLines:l,style:i},p,f,n,r)}return bP(a)},IP="#808080",go=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,p=t.capHeight,f=p===void 0?"0.71em":p,m=t.scaleToFit,d=m===void 0?!1:m,v=t.textAnchor,y=v===void 0?"start":v,x=t.verticalAnchor,I=x===void 0?"end":x,b=t.fill,S=b===void 0?IP:b,A=vP(t,lL),_=X.useMemo(function(){return gL({breakAll:A.breakAll,children:A.children,maxLines:A.maxLines,scaleToFit:d,style:A.style,width:A.width})},[A.breakAll,A.children,A.maxLines,d,A.style,A.width]),M=A.dx,w=A.dy,O=A.angle,E=A.className,P=A.breakAll,C=vP(A,cL);if(!Rt(r)||!Rt(i))return null;var N=r+(le(M)?M:0),H=i+(le(w)?w:0),T;switch(I){case"start":T=Om("calc(".concat(f,")"));break;case"middle":T=Om("calc(".concat((_.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:T=Om("calc(".concat(_.length-1," * -").concat(l,")"));break}var $=[];if(d){var G=_[0].width,U=A.width;$.push("scale(".concat((le(U)?U/G:1)/G,")"))}return O&&$.push("rotate(".concat(O,", ").concat(N,", ").concat(H,")")),$.length&&(C.transform=$.join(" ")),R.createElement("text",ng({},Ae(C,!0),{x:N,y:H,className:je("recharts-text",E),textAnchor:y,fill:S.includes("url")?IP:S}),_.map(function(z,Q){var L=z.words.join(P?"":" ");return R.createElement("tspan",{x:N,dy:Q===0?T:l,key:"".concat(L,"-").concat(Q)},L)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function yL(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Hy(e){let t,n,r;e.length!==2?(t=Ca,n=(l,p)=>Ca(e(l),p),r=(l,p)=>e(l)-p):(t=e===Ca||e===yL?e:bL,n=e,r=e);function a(l,p,f=0,m=l.length){if(f<m){if(t(p,p)!==0)return m;do{const d=f+m>>>1;n(l[d],p)<0?f=d+1:m=d}while(f<m)}return f}function i(l,p,f=0,m=l.length){if(f<m){if(t(p,p)!==0)return m;do{const d=f+m>>>1;n(l[d],p)<=0?f=d+1:m=d}while(f<m)}return f}function s(l,p,f=0,m=l.length){const d=a(l,p,f,m-1);return d>f&&r(l[d-1],p)>-r(l[d],p)?d-1:d}return{left:a,center:s,right:i}}function bL(){return 0}function k_(e){return e===null?NaN:+e}function*IL(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const BL=Hy(Ca),Xs=BL.right;Hy(k_).center;class BP extends Map{constructor(t,n=PL){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(xP(this,t))}has(t){return super.has(xP(this,t))}set(t,n){return super.set(xL(this,t),n)}delete(t){return super.delete(wL(this,t))}}function xP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function xL({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function wL({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function PL(e){return e!==null&&typeof e=="object"?e.valueOf():e}function SL(e=Ca){if(e===Ca)return E_;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function E_(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const AL=Math.sqrt(50),_L=Math.sqrt(10),OL=Math.sqrt(2);function Uc(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=AL?10:i>=_L?5:i>=OL?2:1;let l,p,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),p=Math.round(t*f),l/f<e&&++l,p/f>t&&--p,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),p=Math.round(t/f),l*f<e&&++l,p*f>t&&--p),p<l&&.5<=n&&n<2?Uc(e,t,n*2):[l,p,f]}function rg(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?Uc(t,e,n):Uc(e,t,n);if(!(i>=a))return[];const l=i-a+1,p=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)p[f]=(i-f)/-s;else for(let f=0;f<l;++f)p[f]=(i-f)*s;else if(s<0)for(let f=0;f<l;++f)p[f]=(a+f)/-s;else for(let f=0;f<l;++f)p[f]=(a+f)*s;return p}function ag(e,t,n){return t=+t,e=+e,n=+n,Uc(e,t,n)[2]}function og(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?ag(t,e,n):ag(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function wP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function PP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function T_(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?E_:SL(a);r>n;){if(r-n>600){const p=r-n+1,f=t-n+1,m=Math.log(p),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(p-d)/p)*(f-p/2<0?-1:1),y=Math.max(n,Math.floor(t-f*d/p+v)),x=Math.min(r,Math.floor(t+(p-f)*d/p+v));T_(e,t,y,x,a)}const i=e[t];let s=n,l=r;for(zu(e,n,t),a(e[r],i)>0&&zu(e,n,r);s<l;){for(zu(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?zu(e,n,l):(++l,zu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function zu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function WL(e,t,n){if(e=Float64Array.from(IL(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return PP(e);if(t>=1)return wP(e);var r,a=(r-1)*t,i=Math.floor(a),s=wP(T_(e,i).subarray(0,i+1)),l=PP(e.subarray(i+1));return s+(l-s)*(a-i)}}function ML(e,t,n=k_){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function CL(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function Qn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ig=Symbol("implicit");function Dy(){var e=new BP,t=[],n=[],r=ig;function a(i){let s=e.get(i);if(s===void 0){if(r!==ig)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new BP;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Dy(t,n).unknown(r)},Qn.apply(a,arguments),a}function bs(){var e=Dy().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,p=0,f=0,m=.5;delete e.unknown;function d(){var v=t().length,y=a<r,x=y?a:r,I=y?r:a;i=(I-x)/Math.max(1,v-p+f*2),l&&(i=Math.floor(i)),x+=(I-x-i*(v-p))*m,s=i*(1-p),l&&(x=Math.round(x),s=Math.round(s));var b=CL(v).map(function(S){return x+i*S});return n(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(t(v),d()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(l=!!v,d()):l},e.padding=function(v){return arguments.length?(p=Math.min(1,f=+v),d()):p},e.paddingInner=function(v){return arguments.length?(p=Math.min(1,v),d()):p},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return bs(t(),[r,a]).round(l).paddingInner(p).paddingOuter(f).align(m)},Qn.apply(d(),arguments)}function N_(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return N_(t())},e}function rs(){return N_(bs.apply(null,arguments).paddingInner(1))}function $y(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function R_(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Zs(){}var Is=.7,Vc=1/Is,ci="\\s*([+-]?\\d+)\\s*",Bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",kL=/^#([0-9a-f]{3,8})$/,EL=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),TL=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),NL=new RegExp(`^rgba\\(${ci},${ci},${ci},${Bs}\\)$`),RL=new RegExp(`^rgba\\(${xr},${xr},${xr},${Bs}\\)$`),jL=new RegExp(`^hsl\\(${Bs},${xr},${xr}\\)$`),HL=new RegExp(`^hsla\\(${Bs},${xr},${xr},${Bs}\\)$`),SP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$y(Zs,xs,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:AP,formatHex:AP,formatHex8:DL,formatHsl:$L,formatRgb:_P,toString:_P});function AP(){return this.rgb().formatHex()}function DL(){return this.rgb().formatHex8()}function $L(){return j_(this).formatHsl()}function _P(){return this.rgb().formatRgb()}function xs(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=kL.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?OP(t):n===3?new gn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?yc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?yc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=EL.exec(e))?new gn(t[1],t[2],t[3],1):(t=TL.exec(e))?new gn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=NL.exec(e))?yc(t[1],t[2],t[3],t[4]):(t=RL.exec(e))?yc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=jL.exec(e))?CP(t[1],t[2]/100,t[3]/100,1):(t=HL.exec(e))?CP(t[1],t[2]/100,t[3]/100,t[4]):SP.hasOwnProperty(e)?OP(SP[e]):e==="transparent"?new gn(NaN,NaN,NaN,0):null}function OP(e){return new gn(e>>16&255,e>>8&255,e&255,1)}function yc(e,t,n,r){return r<=0&&(e=t=n=NaN),new gn(e,t,n,r)}function LL(e){return e instanceof Zs||(e=xs(e)),e?(e=e.rgb(),new gn(e.r,e.g,e.b,e.opacity)):new gn}function ug(e,t,n,r){return arguments.length===1?LL(e):new gn(e,t,n,r??1)}function gn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}$y(gn,ug,R_(Zs,{brighter(e){return e=e==null?Vc:Math.pow(Vc,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Is:Math.pow(Is,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gn(mo(this.r),mo(this.g),mo(this.b),Gc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:WP,formatHex:WP,formatHex8:FL,formatRgb:MP,toString:MP}));function WP(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function FL(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function MP(){const e=Gc(this.opacity);return`${e===1?"rgb(":"rgba("}${mo(this.r)}, ${mo(this.g)}, ${mo(this.b)}${e===1?")":`, ${e})`}`}function Gc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function mo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=mo(e),(e<16?"0":"")+e.toString(16)}function CP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ir(e,t,n,r)}function j_(e){if(e instanceof ir)return new ir(e.h,e.s,e.l,e.opacity);if(e instanceof Zs||(e=xs(e)),!e)return new ir;if(e instanceof ir)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,p=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=p<.5?i+a:2-i-a,s*=60):l=p>0&&p<1?0:s,new ir(s,l,p,e.opacity)}function qL(e,t,n,r){return arguments.length===1?j_(e):new ir(e,t,n,r??1)}function ir(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}$y(ir,qL,R_(Zs,{brighter(e){return e=e==null?Vc:Math.pow(Vc,e),new ir(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Is:Math.pow(Is,e),new ir(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new gn(Wm(e>=240?e-240:e+120,a,r),Wm(e,a,r),Wm(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new ir(kP(this.h),bc(this.s),bc(this.l),Gc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Gc(this.opacity);return`${e===1?"hsl(":"hsla("}${kP(this.h)}, ${bc(this.s)*100}%, ${bc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function kP(e){return e=(e||0)%360,e<0?e+360:e}function bc(e){return Math.max(0,Math.min(1,e||0))}function Wm(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Ly=e=>()=>e;function zL(e,t){return function(n){return e+n*t}}function UL(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function VL(e){return(e=+e)==1?H_:function(t,n){return n-t?UL(t,n,e):Ly(isNaN(t)?n:t)}}function H_(e,t){var n=t-e;return n?zL(e,n):Ly(isNaN(e)?t:e)}const EP=(function e(t){var n=VL(t);function r(a,i){var s=n((a=ug(a)).r,(i=ug(i)).r),l=n(a.g,i.g),p=n(a.b,i.b),f=H_(a.opacity,i.opacity);return function(m){return a.r=s(m),a.g=l(m),a.b=p(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function GL(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function KL(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function QL(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=Xi(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function YL(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Kc(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function XL(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Xi(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var sg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Mm=new RegExp(sg.source,"g");function ZL(e){return function(){return e}}function JL(e){return function(t){return e(t)+""}}function e5(e,t){var n=sg.lastIndex=Mm.lastIndex=0,r,a,i,s=-1,l=[],p=[];for(e=e+"",t=t+"";(r=sg.exec(e))&&(a=Mm.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,p.push({i:s,x:Kc(r,a)})),n=Mm.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?p[0]?JL(p[0].x):ZL(t):(t=p.length,function(f){for(var m=0,d;m<t;++m)l[(d=p[m]).i]=d.x(f);return l.join("")})}function Xi(e,t){var n=typeof t,r;return t==null||n==="boolean"?Ly(t):(n==="number"?Kc:n==="string"?(r=xs(t))?(t=r,EP):e5:t instanceof xs?EP:t instanceof Date?YL:KL(t)?GL:Array.isArray(t)?QL:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?XL:Kc)(e,t)}function Fy(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function t5(e,t){t===void 0&&(t=e,e=Xi);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function n5(e){return function(){return e}}function Qc(e){return+e}var TP=[0,1];function un(e){return e}function lg(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:n5(isNaN(t)?NaN:.5)}function r5(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function a5(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=lg(a,r),i=n(s,i)):(r=lg(r,a),i=n(i,s)),function(l){return i(r(l))}}function o5(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=lg(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var p=Xs(e,l,1,r)-1;return i[p](a[p](l))}}function Js(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Jp(){var e=TP,t=TP,n=Xi,r,a,i,s=un,l,p,f;function m(){var v=Math.min(e.length,t.length);return s!==un&&(s=r5(e[0],e[v-1])),l=v>2?o5:a5,p=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(p||(p=l(e.map(r),t,n)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=l(t,e.map(r),Kc)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Qc),m()):e.slice()},d.range=function(v){return arguments.length?(t=Array.from(v),m()):t.slice()},d.rangeRound=function(v){return t=Array.from(v),n=Fy,m()},d.clamp=function(v){return arguments.length?(s=v?!0:un,m()):s!==un},d.interpolate=function(v){return arguments.length?(n=v,m()):n},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,m()}}function qy(){return Jp()(un,un)}function i5(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Yc(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function bi(e){return e=Yc(Math.abs(e)),e?e[1]:NaN}function u5(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],p=0;a>0&&l>0&&(p+l+1>r&&(l=Math.max(1,r-p)),i.push(n.substring(a-=l,a+l)),!((p+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function s5(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var l5=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ws(e){if(!(t=l5.exec(e)))throw new Error("invalid format: "+e);var t;return new zy({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ws.prototype=zy.prototype;function zy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}zy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function c5(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Xc;function p5(e,t){var n=Yc(e,t);if(!n)return Xc=void 0,e.toPrecision(t);var r=n[0],a=n[1],i=a-(Xc=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Yc(e,Math.max(0,t+i-1))[0]}function NP(e,t){var n=Yc(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const RP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:i5,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>NP(e*100,t),r:NP,s:p5,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function jP(e){return e}var HP=Array.prototype.map,DP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function f5(e){var t=e.grouping===void 0||e.thousands===void 0?jP:u5(HP.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?jP:s5(HP.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",p=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=ws(d);var y=d.fill,x=d.align,I=d.sign,b=d.symbol,S=d.zero,A=d.width,_=d.comma,M=d.precision,w=d.trim,O=d.type;O==="n"?(_=!0,O="g"):RP[O]||(M===void 0&&(M=12),w=!0,O="g"),(S||y==="0"&&x==="=")&&(S=!0,y="0",x="=");var E=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?n:b==="#"&&/[boxX]/.test(O)?"0"+O.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(O)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),C=RP[O],N=/[defgprs%]/.test(O);M=M===void 0?6:/[gprs]/.test(O)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function H(T){var $=E,G=P,U,z,Q;if(O==="c")G=C(T)+G,T="";else{T=+T;var L=T<0||1/T<0;if(T=isNaN(T)?p:C(Math.abs(T),M),w&&(T=c5(T)),L&&+T==0&&I!=="+"&&(L=!1),$=(L?I==="("?I:l:I==="-"||I==="("?"":I)+$,G=(O==="s"&&!isNaN(T)&&Xc!==void 0?DP[8+Xc/3]:"")+G+(L&&I==="("?")":""),N){for(U=-1,z=T.length;++U<z;)if(Q=T.charCodeAt(U),48>Q||Q>57){G=(Q===46?a+T.slice(U+1):T.slice(U))+G,T=T.slice(0,U);break}}}_&&!S&&(T=t(T,1/0));var K=$.length+T.length+G.length,Y=K<A?new Array(A-K+1).join(y):"";switch(_&&S&&(T=t(Y+T,Y.length?A-G.length:1/0),Y=""),x){case"<":T=$+T+G+Y;break;case"=":T=$+Y+T+G;break;case"^":T=Y.slice(0,K=Y.length>>1)+$+T+G+Y.slice(K);break;default:T=Y+$+T+G;break}return i(T)}return H.toString=function(){return d+""},H}function m(d,v){var y=Math.max(-8,Math.min(8,Math.floor(bi(v)/3)))*3,x=Math.pow(10,-y),I=f((d=ws(d),d.type="f",d),{suffix:DP[8+y/3]});return function(b){return I(x*b)}}return{format:f,formatPrefix:m}}var Ic,Uy,D_;d5({thousands:",",grouping:[3],currency:["$",""]});function d5(e){return Ic=f5(e),Uy=Ic.format,D_=Ic.formatPrefix,Ic}function h5(e){return Math.max(0,-bi(Math.abs(e)))}function m5(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bi(t)/3)))*3-bi(Math.abs(e)))}function v5(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,bi(t)-bi(e))+1}function $_(e,t,n,r){var a=og(e,t,n),i;switch(r=ws(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=m5(a,s))&&(r.precision=i),D_(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=v5(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=h5(a))&&(r.precision=i-(r.type==="%")*2);break}}return Uy(r)}function Da(e){var t=e.domain;return e.ticks=function(n){var r=t();return rg(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return $_(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],p,f,m=10;for(l<s&&(f=s,s=l,l=f,f=a,a=i,i=f);m-- >0;){if(f=ag(s,l,n),f===p)return r[a]=s,r[i]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;p=f}return e},e}function Zc(){var e=qy();return e.copy=function(){return Js(e,Zc())},Qn.apply(e,arguments),Da(e)}function L_(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Qc),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return L_(e).unknown(t)},e=arguments.length?Array.from(e,Qc):[0,1],Da(n)}function F_(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function $P(e){return Math.log(e)}function LP(e){return Math.exp(e)}function g5(e){return-Math.log(-e)}function y5(e){return-Math.exp(-e)}function b5(e){return isFinite(e)?+("1e"+e):e<0?0:e}function I5(e){return e===10?b5:e===Math.E?Math.exp:t=>Math.pow(e,t)}function B5(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function FP(e){return(t,n)=>-e(-t,n)}function Vy(e){const t=e($P,LP),n=t.domain;let r=10,a,i;function s(){return a=B5(r),i=I5(r),n()[0]<0?(a=FP(a),i=FP(i),e(g5,y5)):e($P,LP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const p=n();let f=p[0],m=p[p.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),y=a(m),x,I;const b=l==null?10:+l;let S=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(x=1;x<r;++x)if(I=v<0?x/i(-v):x*i(v),!(I<f)){if(I>m)break;S.push(I)}}else for(;v<=y;++v)for(x=r-1;x>=1;--x)if(I=v>0?x/i(-v):x*i(v),!(I<f)){if(I>m)break;S.push(I)}S.length*2<b&&(S=rg(f,m,b))}else S=rg(v,y,Math.min(y-v,b)).map(i);return d?S.reverse():S},t.tickFormat=(l,p)=>{if(l==null&&(l=10),p==null&&(p=r===10?"s":","),typeof p!="function"&&(!(r%1)&&(p=ws(p)).precision==null&&(p.trim=!0),p=Uy(p)),l===1/0)return p;const f=Math.max(1,r*l/t.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?p(m):""}},t.nice=()=>n(F_(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function q_(){const e=Vy(Jp()).domain([1,10]);return e.copy=()=>Js(e,q_()).base(e.base()),Qn.apply(e,arguments),e}function qP(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function zP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Gy(e){var t=1,n=e(qP(t),zP(t));return n.constant=function(r){return arguments.length?e(qP(t=+r),zP(t)):t},Da(n)}function z_(){var e=Gy(Jp());return e.copy=function(){return Js(e,z_()).constant(e.constant())},Qn.apply(e,arguments)}function UP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function x5(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function w5(e){return e<0?-e*e:e*e}function Ky(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(x5,w5):e(UP(n),UP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Da(t)}function Qy(){var e=Ky(Jp());return e.copy=function(){return Js(e,Qy()).exponent(e.exponent())},Qn.apply(e,arguments),e}function P5(){return Qy.apply(null,arguments).exponent(.5)}function VP(e){return Math.sign(e)*e*e}function S5(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function U_(){var e=qy(),t=[0,1],n=!1,r;function a(i){var s=S5(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(VP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,Qc)).map(VP)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return U_(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Qn.apply(a,arguments),Da(a)}function V_(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=ML(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[Xs(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return V_().domain(e).range(t).unknown(r)},Qn.apply(i,arguments)}function G_(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(p){return p!=null&&p<=p?a[Xs(r,p,0,n)]:i}function l(){var p=-1;for(r=new Array(n);++p<n;)r[p]=((p+1)*t-(p-n)*e)/(n+1);return s}return s.domain=function(p){return arguments.length?([e,t]=p,e=+e,t=+t,l()):[e,t]},s.range=function(p){return arguments.length?(n=(a=Array.from(p)).length-1,l()):a.slice()},s.invertExtent=function(p){var f=a.indexOf(p);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(p){return arguments.length&&(i=p),s},s.thresholds=function(){return r.slice()},s.copy=function(){return G_().domain([e,t]).range(a).unknown(i)},Qn.apply(Da(s),arguments)}function K_(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[Xs(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return K_().domain(e).range(t).unknown(n)},Qn.apply(a,arguments)}const Cm=new Date,km=new Date;function jt(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const p=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return p;let f;do p.push(f=new Date(+i)),t(i,l),e(i);while(f<i&&i<s);return p},a.filter=i=>jt(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(Cm.setTime(+i),km.setTime(+s),e(Cm),e(km),Math.floor(n(Cm,km))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const Jc=jt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Jc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?jt(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Jc);Jc.range;const $r=1e3,Vn=$r*60,Lr=Vn*60,Gr=Lr*24,Yy=Gr*7,GP=Gr*30,Em=Gr*365,po=jt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());po.range;const Xy=jt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getMinutes());Xy.range;const Zy=jt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCMinutes());Zy.range;const Jy=jt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());Jy.range;const eb=jt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());eb.range;const el=jt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Vn)/Gr,e=>e.getDate()-1);el.range;const e0=jt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>e.getUTCDate()-1);e0.range;const Q_=jt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>Math.floor(e/Gr));Q_.range;function xo(e){return jt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Vn)/Yy)}const t0=xo(0),ep=xo(1),A5=xo(2),_5=xo(3),Ii=xo(4),O5=xo(5),W5=xo(6);t0.range;ep.range;A5.range;_5.range;Ii.range;O5.range;W5.range;function wo(e){return jt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Yy)}const n0=wo(0),tp=wo(1),M5=wo(2),C5=wo(3),Bi=wo(4),k5=wo(5),E5=wo(6);n0.range;tp.range;M5.range;C5.range;Bi.range;k5.range;E5.range;const tb=jt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());tb.range;const nb=jt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());nb.range;const Kr=jt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Qr=jt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Qr.range;function Y_(e,t,n,r,a,i){const s=[[po,1,$r],[po,5,5*$r],[po,15,15*$r],[po,30,30*$r],[i,1,Vn],[i,5,5*Vn],[i,15,15*Vn],[i,30,30*Vn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[n,1,Yy],[t,1,GP],[t,3,3*GP],[e,1,Em]];function l(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const y=d&&typeof d.range=="function"?d:p(f,m,d),x=y?y.range(f,+m+1):[];return v?x.reverse():x}function p(f,m,d){const v=Math.abs(m-f)/d,y=Hy(([,,b])=>b).right(s,v);if(y===s.length)return e.every(og(f/Em,m/Em,d));if(y===0)return Jc.every(Math.max(og(f,m,d),1));const[x,I]=s[v/s[y-1][2]<s[y][2]/v?y-1:y];return x.every(I)}return[l,p]}const[T5,N5]=Y_(Qr,nb,n0,Q_,eb,Zy),[R5,j5]=Y_(Kr,tb,t0,el,Jy,Xy);function Tm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Nm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Uu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function H5(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,p=e.shortMonths,f=Vu(a),m=Gu(a),d=Vu(i),v=Gu(i),y=Vu(s),x=Gu(s),I=Vu(l),b=Gu(l),S=Vu(p),A=Gu(p),_={a:Q,A:L,b:K,B:Y,c:null,d:JP,e:JP,f:u8,g:g8,G:b8,H:a8,I:o8,j:i8,L:X_,m:s8,M:l8,p:j,q:F,Q:nS,s:rS,S:c8,u:p8,U:f8,V:d8,w:h8,W:m8,x:null,X:null,y:v8,Y:y8,Z:I8,"%":tS},M={a:J,A:ue,b:he,B:ge,c:null,d:eS,e:eS,f:P8,g:T8,G:R8,H:B8,I:x8,j:w8,L:J_,m:S8,M:A8,p:ye,q:fe,Q:nS,s:rS,S:_8,u:O8,U:W8,V:M8,w:C8,W:k8,x:null,X:null,y:E8,Y:N8,Z:j8,"%":tS},w={a:N,A:H,b:T,B:$,c:G,d:XP,e:XP,f:e8,g:YP,G:QP,H:ZP,I:ZP,j:Y5,L:J5,m:Q5,M:X5,p:C,q:K5,Q:n8,s:r8,S:Z5,u:q5,U:z5,V:U5,w:F5,W:V5,x:U,X:z,y:YP,Y:QP,Z:G5,"%":t8};_.x=O(n,_),_.X=O(r,_),_.c=O(t,_),M.x=O(n,M),M.X=O(r,M),M.c=O(t,M);function O(ne,de){return function(pe){var re=[],Re=-1,Pe=0,Ce=ne.length,_e,Fe,He;for(pe instanceof Date||(pe=new Date(+pe));++Re<Ce;)ne.charCodeAt(Re)===37&&(re.push(ne.slice(Pe,Re)),(Fe=KP[_e=ne.charAt(++Re)])!=null?_e=ne.charAt(++Re):Fe=_e==="e"?" ":"0",(He=de[_e])&&(_e=He(pe,Fe)),re.push(_e),Pe=Re+1);return re.push(ne.slice(Pe,Re)),re.join("")}}function E(ne,de){return function(pe){var re=Uu(1900,void 0,1),Re=P(re,ne,pe+="",0),Pe,Ce;if(Re!=pe.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Nm(Uu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?tp.ceil(Pe):tp(Pe),Pe=e0.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Tm(Uu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?ep.ceil(Pe):ep(Pe),Pe=el.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Nm(Uu(re.y,0,1)).getUTCDay():Tm(Uu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Nm(re)):Tm(re)}}function P(ne,de,pe,re){for(var Re=0,Pe=de.length,Ce=pe.length,_e,Fe;Re<Pe;){if(re>=Ce)return-1;if(_e=de.charCodeAt(Re++),_e===37){if(_e=de.charAt(Re++),Fe=w[_e in KP?de.charAt(Re++):_e],!Fe||(re=Fe(ne,pe,re))<0)return-1}else if(_e!=pe.charCodeAt(re++))return-1}return re}function C(ne,de,pe){var re=f.exec(de.slice(pe));return re?(ne.p=m.get(re[0].toLowerCase()),pe+re[0].length):-1}function N(ne,de,pe){var re=y.exec(de.slice(pe));return re?(ne.w=x.get(re[0].toLowerCase()),pe+re[0].length):-1}function H(ne,de,pe){var re=d.exec(de.slice(pe));return re?(ne.w=v.get(re[0].toLowerCase()),pe+re[0].length):-1}function T(ne,de,pe){var re=S.exec(de.slice(pe));return re?(ne.m=A.get(re[0].toLowerCase()),pe+re[0].length):-1}function $(ne,de,pe){var re=I.exec(de.slice(pe));return re?(ne.m=b.get(re[0].toLowerCase()),pe+re[0].length):-1}function G(ne,de,pe){return P(ne,t,de,pe)}function U(ne,de,pe){return P(ne,n,de,pe)}function z(ne,de,pe){return P(ne,r,de,pe)}function Q(ne){return s[ne.getDay()]}function L(ne){return i[ne.getDay()]}function K(ne){return p[ne.getMonth()]}function Y(ne){return l[ne.getMonth()]}function j(ne){return a[+(ne.getHours()>=12)]}function F(ne){return 1+~~(ne.getMonth()/3)}function J(ne){return s[ne.getUTCDay()]}function ue(ne){return i[ne.getUTCDay()]}function he(ne){return p[ne.getUTCMonth()]}function ge(ne){return l[ne.getUTCMonth()]}function ye(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=O(ne+="",_);return de.toString=function(){return ne},de},parse:function(ne){var de=E(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=O(ne+="",M);return de.toString=function(){return ne},de},utcParse:function(ne){var de=E(ne+="",!0);return de.toString=function(){return ne},de}}}var KP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,D5=/^%/,$5=/[\\^$*+?|[\]().{}]/g;function Ve(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function L5(e){return e.replace($5,"\\$&")}function Vu(e){return new RegExp("^(?:"+e.map(L5).join("|")+")","i")}function Gu(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function F5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function q5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function z5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function U5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function V5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function QP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function YP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function G5(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function K5(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function Q5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function XP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function Y5(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function ZP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function X5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Z5(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function J5(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function e8(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function t8(e,t,n){var r=D5.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function n8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function r8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function JP(e,t){return Ve(e.getDate(),t,2)}function a8(e,t){return Ve(e.getHours(),t,2)}function o8(e,t){return Ve(e.getHours()%12||12,t,2)}function i8(e,t){return Ve(1+el.count(Kr(e),e),t,3)}function X_(e,t){return Ve(e.getMilliseconds(),t,3)}function u8(e,t){return X_(e,t)+"000"}function s8(e,t){return Ve(e.getMonth()+1,t,2)}function l8(e,t){return Ve(e.getMinutes(),t,2)}function c8(e,t){return Ve(e.getSeconds(),t,2)}function p8(e){var t=e.getDay();return t===0?7:t}function f8(e,t){return Ve(t0.count(Kr(e)-1,e),t,2)}function Z_(e){var t=e.getDay();return t>=4||t===0?Ii(e):Ii.ceil(e)}function d8(e,t){return e=Z_(e),Ve(Ii.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function h8(e){return e.getDay()}function m8(e,t){return Ve(ep.count(Kr(e)-1,e),t,2)}function v8(e,t){return Ve(e.getFullYear()%100,t,2)}function g8(e,t){return e=Z_(e),Ve(e.getFullYear()%100,t,2)}function y8(e,t){return Ve(e.getFullYear()%1e4,t,4)}function b8(e,t){var n=e.getDay();return e=n>=4||n===0?Ii(e):Ii.ceil(e),Ve(e.getFullYear()%1e4,t,4)}function I8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ve(t/60|0,"0",2)+Ve(t%60,"0",2)}function eS(e,t){return Ve(e.getUTCDate(),t,2)}function B8(e,t){return Ve(e.getUTCHours(),t,2)}function x8(e,t){return Ve(e.getUTCHours()%12||12,t,2)}function w8(e,t){return Ve(1+e0.count(Qr(e),e),t,3)}function J_(e,t){return Ve(e.getUTCMilliseconds(),t,3)}function P8(e,t){return J_(e,t)+"000"}function S8(e,t){return Ve(e.getUTCMonth()+1,t,2)}function A8(e,t){return Ve(e.getUTCMinutes(),t,2)}function _8(e,t){return Ve(e.getUTCSeconds(),t,2)}function O8(e){var t=e.getUTCDay();return t===0?7:t}function W8(e,t){return Ve(n0.count(Qr(e)-1,e),t,2)}function eO(e){var t=e.getUTCDay();return t>=4||t===0?Bi(e):Bi.ceil(e)}function M8(e,t){return e=eO(e),Ve(Bi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),t,2)}function C8(e){return e.getUTCDay()}function k8(e,t){return Ve(tp.count(Qr(e)-1,e),t,2)}function E8(e,t){return Ve(e.getUTCFullYear()%100,t,2)}function T8(e,t){return e=eO(e),Ve(e.getUTCFullYear()%100,t,2)}function N8(e,t){return Ve(e.getUTCFullYear()%1e4,t,4)}function R8(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Bi(e):Bi.ceil(e),Ve(e.getUTCFullYear()%1e4,t,4)}function j8(){return"+0000"}function tS(){return"%"}function nS(e){return+e}function rS(e){return Math.floor(+e/1e3)}var ei,tO,nO;H8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function H8(e){return ei=H5(e),tO=ei.format,ei.parse,nO=ei.utcFormat,ei.utcParse,ei}function D8(e){return new Date(e)}function $8(e){return e instanceof Date?+e:+new Date(+e)}function rb(e,t,n,r,a,i,s,l,p,f){var m=qy(),d=m.invert,v=m.domain,y=f(".%L"),x=f(":%S"),I=f("%I:%M"),b=f("%I %p"),S=f("%a %d"),A=f("%b %d"),_=f("%B"),M=f("%Y");function w(O){return(p(O)<O?y:l(O)<O?x:s(O)<O?I:i(O)<O?b:r(O)<O?a(O)<O?S:A:n(O)<O?_:M)(O)}return m.invert=function(O){return new Date(d(O))},m.domain=function(O){return arguments.length?v(Array.from(O,$8)):v().map(D8)},m.ticks=function(O){var E=v();return e(E[0],E[E.length-1],O??10)},m.tickFormat=function(O,E){return E==null?w:f(E)},m.nice=function(O){var E=v();return(!O||typeof O.range!="function")&&(O=t(E[0],E[E.length-1],O??10)),O?v(F_(E,O)):m},m.copy=function(){return Js(m,rb(e,t,n,r,a,i,s,l,p,f))},m}function L8(){return Qn.apply(rb(R5,j5,Kr,tb,t0,el,Jy,Xy,po,tO).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function F8(){return Qn.apply(rb(T5,N5,Qr,nb,n0,e0,eb,Zy,po,nO).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function r0(){var e=0,t=1,n,r,a,i,s=un,l=!1,p;function f(d){return d==null||isNaN(d=+d)?p:s(a===0?.5:(d=(i(d)-n)*a,l?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,t]=d,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(d){return arguments.length?(l=!!d,f):l},f.interpolator=function(d){return arguments.length?(s=d,f):s};function m(d){return function(v){var y,x;return arguments.length?([y,x]=v,s=d(y,x),f):[s(0),s(1)]}}return f.range=m(Xi),f.rangeRound=m(Fy),f.unknown=function(d){return arguments.length?(p=d,f):p},function(d){return i=d,n=d(e),r=d(t),a=n===r?0:1/(r-n),f}}function $a(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function rO(){var e=Da(r0()(un));return e.copy=function(){return $a(e,rO())},Jr.apply(e,arguments)}function aO(){var e=Vy(r0()).domain([1,10]);return e.copy=function(){return $a(e,aO()).base(e.base())},Jr.apply(e,arguments)}function oO(){var e=Gy(r0());return e.copy=function(){return $a(e,oO()).constant(e.constant())},Jr.apply(e,arguments)}function ab(){var e=Ky(r0());return e.copy=function(){return $a(e,ab()).exponent(e.exponent())},Jr.apply(e,arguments)}function q8(){return ab.apply(null,arguments).exponent(.5)}function iO(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Xs(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>WL(e,i/r))},n.copy=function(){return iO(t).domain(e)},Jr.apply(n,arguments)}function a0(){var e=0,t=.5,n=1,r=1,a,i,s,l,p,f=un,m,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?l:p),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,t,n]=I,a=m(e=+e),i=m(t=+t),s=m(n=+n),l=a===i?0:.5/(i-a),p=i===s?0:.5/(s-i),r=i<a?-1:1,y):[e,t,n]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function x(I){return function(b){var S,A,_;return arguments.length?([S,A,_]=b,f=t5(I,[S,A,_]),y):[f(0),f(.5),f(1)]}}return y.range=x(Xi),y.rangeRound=x(Fy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return m=I,a=I(e),i=I(t),s=I(n),l=a===i?0:.5/(i-a),p=i===s?0:.5/(s-i),r=i<a?-1:1,y}}function uO(){var e=Da(a0()(un));return e.copy=function(){return $a(e,uO())},Jr.apply(e,arguments)}function sO(){var e=Vy(a0()).domain([.1,1,10]);return e.copy=function(){return $a(e,sO()).base(e.base())},Jr.apply(e,arguments)}function lO(){var e=Gy(a0());return e.copy=function(){return $a(e,lO()).constant(e.constant())},Jr.apply(e,arguments)}function ob(){var e=Ky(a0());return e.copy=function(){return $a(e,ob()).exponent(e.exponent())},Jr.apply(e,arguments)}function z8(){return ob.apply(null,arguments).exponent(.5)}const aS=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:bs,scaleDiverging:uO,scaleDivergingLog:sO,scaleDivergingPow:ob,scaleDivergingSqrt:z8,scaleDivergingSymlog:lO,scaleIdentity:L_,scaleImplicit:ig,scaleLinear:Zc,scaleLog:q_,scaleOrdinal:Dy,scalePoint:rs,scalePow:Qy,scaleQuantile:V_,scaleQuantize:G_,scaleRadial:U_,scaleSequential:rO,scaleSequentialLog:aO,scaleSequentialPow:ab,scaleSequentialQuantile:iO,scaleSequentialSqrt:q8,scaleSequentialSymlog:oO,scaleSqrt:P5,scaleSymlog:z_,scaleThreshold:K_,scaleTime:L8,scaleUtc:F8,tickFormat:$_},Symbol.toStringTag,{value:"Module"}));var Rm,oS;function o0(){if(oS)return Rm;oS=1;var e=Gi();function t(n,r,a){for(var i=-1,s=n.length;++i<s;){var l=n[i],p=r(l);if(p!=null&&(f===void 0?p===p&&!e(p):a(p,f)))var f=p,m=l}return m}return Rm=t,Rm}var jm,iS;function cO(){if(iS)return jm;iS=1;function e(t,n){return t>n}return jm=e,jm}var Hm,uS;function U8(){if(uS)return Hm;uS=1;var e=o0(),t=cO(),n=Yi();function r(a){return a&&a.length?e(a,n,t):void 0}return Hm=r,Hm}var V8=U8();const _a=Xe(V8);var Dm,sS;function pO(){if(sS)return Dm;sS=1;function e(t,n){return t<n}return Dm=e,Dm}var $m,lS;function G8(){if(lS)return $m;lS=1;var e=o0(),t=pO(),n=Yi();function r(a){return a&&a.length?e(a,n,t):void 0}return $m=r,$m}var K8=G8();const i0=Xe(K8);var Lm,cS;function Q8(){if(cS)return Lm;cS=1;var e=By(),t=_r(),n=I_(),r=yn();function a(i,s){var l=r(i)?e:n;return l(i,t(s,3))}return Lm=a,Lm}var Fm,pS;function Y8(){if(pS)return Fm;pS=1;var e=y_(),t=Q8();function n(r,a){return e(t(r,a),1)}return Fm=n,Fm}var X8=Y8();const Z8=Xe(X8);var qm,fS;function J8(){if(fS)return qm;fS=1;var e=Ey();function t(n,r){return e(n,r)}return qm=t,qm}var e7=J8();const Na=Xe(e7);var Zi=1e9,t7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},ub,pt=!0,Gn="[DecimalError] ",vo=Gn+"Invalid argument: ",ib=Gn+"Exponent out of range: ",Ji=Math.floor,uo=Math.pow,n7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,On,Ft=1e7,st=7,fO=9007199254740991,np=Ji(fO/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Vr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Mt(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(On))throw Error(Gn+"NaN");if(n.s<1)throw Error(Gn+(n.s?"NaN":"-Infinity"));return n.eq(On)?new r(0):(pt=!1,t=Vr(Ps(n,i),Ps(e,i),i),pt=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?mO(t,e):dO(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gn+"NaN");return n.s?(pt=!1,t=Vr(n,e,0,1).times(e),pt=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return hO(this)};Ie.naturalLogarithm=Ie.ln=function(){return Ps(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?dO(t,e):mO(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(vo+e);if(t=Mt(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,i,s,l=this,p=l.constructor;if(l.s<1){if(!l.s)return new p(0);throw Error(Gn+"NaN")}for(e=Mt(l),pt=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=br(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Ji((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new p(t)):r=new p(a.toString()),n=p.precision,a=s=n+3;;)if(i=r,r=i.plus(Vr(l,i,s+2)).times(.5),br(i.d).slice(0,s)===(t=br(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return pt=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,i,s,l,p,f,m=this,d=m.constructor,v=m.d,y=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,n=m.e+e.e,p=v.length,f=y.length,p<f&&(i=v,v=y,y=i,s=p,p=f,f=s),i=[],s=p+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(t=0,a=p+r;a>r;)l=i[a]+y[r]*v[a-r-1]+t,i[a--]=l%Ft|0,t=l/Ft|0;i[a]=(i[a]+t)%Ft|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,pt?tt(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Pr(e,0,Zi),t===void 0?t=r.rounding:Pr(t,0,8),tt(n,e+Mt(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=yo(r,!0):(Pr(e,0,Zi),t===void 0?t=a.rounding:Pr(t,0,8),r=tt(new a(r),e+1,t),n=yo(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?yo(a):(Pr(e,0,Zi),t===void 0?t=i.rounding:Pr(t,0,8),r=tt(new i(a),e+Mt(a)+1,t),n=yo(r.abs(),!1,e+Mt(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Mt(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,i,s,l=this,p=l.constructor,f=12,m=+(e=new p(e));if(!e.s)return new p(On);if(l=new p(l),!l.s){if(e.s<1)throw Error(Gn+"Infinity");return l}if(l.eq(On))return l;if(r=p.precision,e.eq(On))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=m<0?-m:m)<=fO){for(a=new p(On),t=Math.ceil(r/st+4),pt=!1;n%2&&(a=a.times(l),hS(a.d,t)),n=Ji(n/2),n!==0;)l=l.times(l),hS(l.d,t);return pt=!0,e.s<0?new p(On).div(a):tt(a,r)}}else if(i<0)throw Error(Gn+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,pt=!1,a=e.times(Ps(l,r+f)),pt=!0,a=hO(a),a.s=i,a};Ie.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=Mt(a),r=yo(a,n<=i.toExpNeg||n>=i.toExpPos)):(Pr(e,1,Zi),t===void 0?t=i.rounding:Pr(t,0,8),a=tt(new i(a),e,t),n=Mt(a),r=yo(a,e<=n||n<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Pr(e,1,Zi),t===void 0?t=r.rounding:Pr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Mt(e),n=e.constructor;return yo(e,t<=n.toExpNeg||t>=n.toExpPos)};function dO(e,t){var n,r,a,i,s,l,p,f,m=e.constructor,d=m.precision;if(!e.s||!t.s)return t.s||(t=new m(e)),pt?tt(t,d):t;if(p=e.d,f=t.d,s=e.e,a=t.e,p=p.slice(),i=s-a,i){for(i<0?(r=p,i=-i,l=f.length):(r=f,a=s,l=p.length),s=Math.ceil(d/st),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=p.length,i=f.length,l-i<0&&(i=l,r=f,f=p,p=r),n=0;i;)n=(p[--i]=p[i]+f[i]+n)/Ft|0,p[i]%=Ft;for(n&&(p.unshift(n),++a),l=p.length;p[--l]==0;)p.pop();return t.d=p,t.e=a,pt?tt(t,d):t}function Pr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(vo+e)}function br(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(i+=Sa(n)),i+=r;s=e[t],r=s+"",n=st-r.length,n&&(i+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Vr=(function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%Ft|0,s=i/Ft|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,p;if(i!=s)p=i>s?1:-1;else for(l=p=0;l<i;l++)if(r[l]!=a[l]){p=r[l]>a[l]?1:-1;break}return p}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*Ft+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,p,f,m,d,v,y,x,I,b,S,A,_,M,w,O,E,P,C=r.constructor,N=r.s==a.s?1:-1,H=r.d,T=a.d;if(!r.s)return new C(r);if(!a.s)throw Error(Gn+"Division by zero");for(p=r.e-a.e,E=T.length,w=H.length,y=new C(N),x=y.d=[],f=0;T[f]==(H[f]||0);)++f;if(T[f]>(H[f]||0)&&--p,i==null?A=i=C.precision:s?A=i+(Mt(r)-Mt(a))+1:A=i,A<0)return new C(0);if(A=A/st+2|0,f=0,E==1)for(m=0,T=T[0],A++;(f<w||m)&&A--;f++)_=m*Ft+(H[f]||0),x[f]=_/T|0,m=_%T|0;else{for(m=Ft/(T[0]+1)|0,m>1&&(T=e(T,m),H=e(H,m),E=T.length,w=H.length),M=E,I=H.slice(0,E),b=I.length;b<E;)I[b++]=0;P=T.slice(),P.unshift(0),O=T[0],T[1]>=Ft/2&&++O;do m=0,l=t(T,I,E,b),l<0?(S=I[0],E!=b&&(S=S*Ft+(I[1]||0)),m=S/O|0,m>1?(m>=Ft&&(m=Ft-1),d=e(T,m),v=d.length,b=I.length,l=t(d,I,v,b),l==1&&(m--,n(d,E<v?P:T,v))):(m==0&&(l=m=1),d=T.slice()),v=d.length,v<b&&d.unshift(0),n(I,d,b),l==-1&&(b=I.length,l=t(T,I,E,b),l<1&&(m++,n(I,E<b?P:T,b))),b=I.length):l===0&&(m++,I=[0]),x[f++]=m,l&&I[0]?I[b++]=H[M]||0:(I=[H[M]],b=1);while((M++<w||I[0]!==void 0)&&A--)}return x[0]||x.shift(),y.e=p,tt(y,s?i+Mt(y)+1:i)}})();function hO(e,t){var n,r,a,i,s,l,p=0,f=0,m=e.constructor,d=m.precision;if(Mt(e)>16)throw Error(ib+Mt(e));if(!e.s)return new m(On);for(pt=!1,l=d,s=new m(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(uo(2,f))/Math.LN10*2+5|0,l+=r,n=a=i=new m(On),m.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++p),s=i.plus(Vr(a,n,l)),br(s.d).slice(0,l)===br(i.d).slice(0,l)){for(;f--;)i=tt(i.times(i),l);return m.precision=d,t==null?(pt=!0,tt(i,d)):i}i=s}}function Mt(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function zm(e,t,n){if(t>e.LN10.sd())throw pt=!0,n&&(e.precision=n),Error(Gn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function Ps(e,t){var n,r,a,i,s,l,p,f,m,d=1,v=10,y=e,x=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Gn+(y.s?"NaN":"-Infinity"));if(y.eq(On))return new I(0);if(t==null?(pt=!1,f=b):f=t,y.eq(10))return t==null&&(pt=!0),zm(I,f);if(f+=v,I.precision=f,n=br(x),r=n.charAt(0),i=Mt(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)y=y.times(e),n=br(y.d),r=n.charAt(0),d++;i=Mt(y),r>1?(y=new I("0."+n),i++):y=new I(r+"."+n.slice(1))}else return p=zm(I,f+2,b).times(i+""),y=Ps(new I(r+"."+n.slice(1)),f-v).plus(p),I.precision=b,t==null?(pt=!0,tt(y,b)):y;for(l=s=y=Vr(y.minus(On),y.plus(On),f),m=tt(y.times(y),f),a=3;;){if(s=tt(s.times(m),f),p=l.plus(Vr(s,new I(a),f)),br(p.d).slice(0,f)===br(l.d).slice(0,f))return l=l.times(2),i!==0&&(l=l.plus(zm(I,f+2,b).times(i+""))),l=Vr(l,new I(d),f),I.precision=b,t==null?(pt=!0,tt(l,b)):l;l=p,a+=2}}function dS(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=Ji(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),pt&&(e.e>np||e.e<-np))throw Error(ib+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,i,s,l,p,f,m,d=e.d;for(s=1,i=d[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=d[m=0];else{if(m=Math.ceil((r+1)/st),i=d.length,m>=i)return e;for(f=i=d[m],s=1;i>=10;i/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(i=uo(10,s-a-1),l=f/i%10|0,p=t<0||d[m+1]!==void 0||f%i,p=n<4?(l||p)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||p||n==6&&(r>0?a>0?f/uo(10,s-a):0:d[m-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return p?(i=Mt(e),d.length=1,t=t-i-1,d[0]=uo(10,(st-t%st)%st),e.e=Ji(-t/st)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=uo(10,st-r),d[m]=a>0?(f/uo(10,s-a)%uo(10,a)|0)*i:0),p)for(;;)if(m==0){(d[0]+=i)==Ft&&(d[0]=1,++e.e);break}else{if(d[m]+=i,d[m]!=Ft)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(pt&&(e.e>np||e.e<-np))throw Error(ib+Mt(e));return e}function mO(e,t){var n,r,a,i,s,l,p,f,m,d,v=e.constructor,y=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),pt?tt(t,y):t;if(p=e.d,d=t.d,r=t.e,f=e.e,p=p.slice(),s=f-r,s){for(m=s<0,m?(n=p,s=-s,l=d.length):(n=d,r=f,l=p.length),a=Math.max(Math.ceil(y/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=p.length,l=d.length,m=a<l,m&&(l=a),a=0;a<l;a++)if(p[a]!=d[a]){m=p[a]<d[a];break}s=0}for(m&&(n=p,p=d,d=n,t.s=-t.s),l=p.length,a=d.length-l;a>0;--a)p[l++]=0;for(a=d.length;a>s;){if(p[--a]<d[a]){for(i=a;i&&p[--i]===0;)p[i]=Ft-1;--p[i],p[a]+=Ft}p[a]-=d[a]}for(;p[--l]===0;)p.pop();for(;p[0]===0;p.shift())--r;return p[0]?(t.d=p,t.e=r,pt?tt(t,y):t):new v(0)}function yo(e,t,n){var r,a=Mt(e),i=br(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,n&&(r=n-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function hS(e,t){if(e.length>t)return e.length=t,!0}function vO(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return dS(s,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,n7.test(i))dS(s,i);else throw Error(vo+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=vO,a.config=a.set=r7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function r7(e){if(!e||typeof e!="object")throw Error(Gn+"Object expected");var t,n,r,a=["precision",1,Zi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(Ji(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(vo+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(vo+n+": "+r);return this}var ub=vO(t7);On=new ub(1);const et=ub;function a7(e){return s7(e)||u7(e)||i7(e)||o7()}function o7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i7(e,t){if(e){if(typeof e=="string")return cg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cg(e,t)}}function u7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function s7(e){if(Array.isArray(e))return cg(e)}function cg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l7=function(t){return t},gO={},yO=function(t){return t===gO},mS=function(t){return function n(){return arguments.length===0||arguments.length===1&&yO(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},c7=function e(t,n){return t===1?n:mS(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(l){return l!==gO}).length;return s>=t?n.apply(void 0,a):e(t-s,mS(function(){for(var l=arguments.length,p=new Array(l),f=0;f<l;f++)p[f]=arguments[f];var m=a.map(function(d){return yO(d)?p.shift():d});return n.apply(void 0,a7(m).concat(p))}))})},u0=function(t){return c7(t.length,t)},pg=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},p7=u0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),f7=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return l7;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(l,p){return p(l)},i.apply(void 0,arguments))}},fg=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},bO=function(t){var n=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n&&i.every(function(l,p){return l===n[p]})||(n=i,r=t.apply(void 0,i)),r}};function d7(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function h7(e,t,n){for(var r=new et(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var m7=u0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),v7=u0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),g7=u0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const s0={rangeStep:h7,getDigitCount:d7,interpolateNumber:m7,uninterpolateNumber:v7,uninterpolateTruncation:g7};function dg(e){return I7(e)||b7(e)||IO(e)||y7()}function y7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function I7(e){if(Array.isArray(e))return hg(e)}function Ss(e,t){return w7(e)||x7(e,t)||IO(e,t)||B7()}function B7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IO(e,t){if(e){if(typeof e=="string")return hg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hg(e,t)}}function hg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x7(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(p){a=!0,i=p}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return n}}function w7(e){if(Array.isArray(e))return e}function BO(e){var t=Ss(e,2),n=t[0],r=t[1],a=n,i=r;return n>r&&(a=r,i=n),[a,i]}function xO(e,t,n){if(e.lte(0))return new et(0);var r=s0.getDigitCount(e.toNumber()),a=new et(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(i.div(s).toNumber())).add(n).mul(s),p=l.mul(a);return t?p:new et(Math.ceil(p))}function P7(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new et(10).pow(s0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=f7(p7(function(p){return a.add(new et(p-s).mul(r)).toNumber()}),pg);return l(0,t)}function wO(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var i=xO(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(i)));var l=Math.ceil(s.sub(e).div(i).toNumber()),p=Math.ceil(new et(t).sub(s).div(i).toNumber()),f=l+p+1;return f>n?wO(e,t,n,r,a+1):(f<n&&(p=t>0?p+(n-f):p,l=t>0?l:l+(n-f)),{step:i,tickMin:s.sub(new et(l).mul(i)),tickMax:s.add(new et(p).mul(i))})}function S7(e){var t=Ss(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=BO([n,r]),p=Ss(l,2),f=p[0],m=p[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(dg(pg(0,a-1).map(function(){return 1/0}))):[].concat(dg(pg(0,a-1).map(function(){return-1/0})),[m]);return n>r?fg(d):d}if(f===m)return P7(f,a,i);var v=wO(f,m,s,i),y=v.step,x=v.tickMin,I=v.tickMax,b=s0.rangeStep(x,I.add(new et(.1).mul(y)),y);return n>r?fg(b):b}function A7(e,t){var n=Ss(e,2),r=n[0],a=n[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=BO([r,a]),l=Ss(s,2),p=l[0],f=l[1];if(p===-1/0||f===1/0)return[r,a];if(p===f)return[p];var m=Math.max(t,2),d=xO(new et(f).sub(p).div(m-1),i,0),v=[].concat(dg(s0.rangeStep(new et(p),new et(f).sub(new et(.99).mul(d)),d)),[f]);return r>a?fg(v):v}var _7=bO(S7),O7=bO(A7),W7="Invariant failed";function bo(e,t){throw new Error(W7)}var M7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function rp(){return rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rp.apply(this,arguments)}function C7(e,t){return N7(e)||T7(e,t)||E7(e,t)||k7()}function k7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E7(e,t){if(e){if(typeof e=="string")return vS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vS(e,t)}}function vS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T7(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function N7(e){if(Array.isArray(e))return e}function R7(e,t){if(e==null)return{};var n=j7(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function j7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function H7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D7(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AO(r.key),r)}}function $7(e,t,n){return t&&D7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function L7(e,t,n){return t=ap(t),F7(e,PO()?Reflect.construct(t,n||[],ap(e).constructor):t.apply(e,n))}function F7(e,t){if(t&&(xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q7(e)}function q7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PO=function(){return!!e})()}function ap(e){return ap=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ap(e)}function z7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mg(e,t)}function mg(e,t){return mg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},mg(e,t)}function SO(e,t,n){return t=AO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AO(e){var t=U7(e,"string");return xi(t)=="symbol"?t:t+""}function U7(e,t){if(xi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eu=(function(e){function t(){return H7(this,t),L7(this,t,arguments)}return z7(t,e),$7(t,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,l=r.dataKey,p=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=R7(r,M7),y=Ae(v,!1);this.props.direction==="x"&&m.type!=="number"&&bo();var x=p.map(function(I){var b=f(I,l),S=b.x,A=b.y,_=b.value,M=b.errorVal;if(!M)return null;var w=[],O,E;if(Array.isArray(M)){var P=C7(M,2);O=P[0],E=P[1]}else O=E=M;if(i==="vertical"){var C=m.scale,N=A+a,H=N+s,T=N-s,$=C(_-O),G=C(_+E);w.push({x1:G,y1:H,x2:G,y2:T}),w.push({x1:$,y1:N,x2:G,y2:N}),w.push({x1:$,y1:H,x2:$,y2:T})}else if(i==="horizontal"){var U=d.scale,z=S+a,Q=z-s,L=z+s,K=U(_-O),Y=U(_+E);w.push({x1:Q,y1:Y,x2:L,y2:Y}),w.push({x1:z,y1:K,x2:z,y2:Y}),w.push({x1:Q,y1:K,x2:L,y2:K})}return R.createElement(De,rp({className:"recharts-errorBar",key:"bar-".concat(w.map(function(j){return"".concat(j.x1,"-").concat(j.x2,"-").concat(j.y1,"-").concat(j.y2)}))},y),w.map(function(j){return R.createElement("line",rp({},j,{key:"line-".concat(j.x1,"-").concat(j.x2,"-").concat(j.y1,"-").concat(j.y2)}))}))});return R.createElement(De,{className:"recharts-errorBars"},x)}}])})(R.Component);SO(eu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});SO(eu,"displayName","ErrorBar");function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function gS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function no(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gS(Object(n),!0).forEach(function(r){V7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V7(e,t,n){return t=G7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G7(e){var t=K7(e,"string");return As(t)=="symbol"?t:t+""}function K7(e,t){if(As(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _O=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,i=t.legendContent,s=Sn(n,Ma);if(!s)return null;var l=Ma.defaultProps,p=l!==void 0?no(no({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,y=d.props,x=y.sectors||y.data||[];return m.concat(x.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,y=v!==void 0?no(no({},v),d.props):{},x=y.dataKey,I=y.name,b=y.legendType,S=y.hide;return{inactive:S,dataKey:x,type:p.iconType||b||"square",color:sb(d),value:I||x,payload:y}}),no(no(no({},p),Ma.getWithHeight(s,a)),{},{payload:f,item:s})};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}function yS(e){return Z7(e)||X7(e)||Y7(e)||Q7()}function Q7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y7(e,t){if(e){if(typeof e=="string")return vg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vg(e,t)}}function X7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z7(e){if(Array.isArray(e))return vg(e)}function vg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bS(Object(n),!0).forEach(function(r){pi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pi(e,t,n){return t=J7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J7(e){var t=eF(e,"string");return _s(t)=="symbol"?t:t+""}function eF(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ee(e)||Ee(t)?n:Rt(t)?Wn(e,t,n):ke(t)?t(e):n}function as(e,t,n,r){var a=Z8(e,function(l){return lt(l,t)});if(n==="number"){var i=a.filter(function(l){return le(l)||parseFloat(l)});return i.length?[i0(i),_a(i)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ee(l)}):a;return s.map(function(l){return Rt(l)||l instanceof Date?l:""})}var tF=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var p=i.range,f=0;f<l;f++){var m=f>0?a[f-1].coordinate:a[l-1].coordinate,d=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(an(d-m)!==an(v-d)){var x=[];if(an(v-d)===an(p[1]-p[0])){y=v;var I=d+p[1]-p[0];x[0]=Math.min(I,(I+m)/2),x[1]=Math.max(I,(I+m)/2)}else{y=m;var b=v+p[1]-p[0];x[0]=Math.min(d,(b+d)/2),x[1]=Math.max(d,(b+d)/2)}var S=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(t>S[0]&&t<=S[1]||t>=x[0]&&t<=x[1]){s=a[f].index;break}}else{var A=Math.min(m,v),_=Math.max(m,v);if(t>(A+d)/2&&t<=(_+d)/2){s=a[f].index;break}}}else for(var M=0;M<l;M++)if(M===0&&t<=(r[M].coordinate+r[M+1].coordinate)/2||M>0&&M<l-1&&t>(r[M].coordinate+r[M-1].coordinate)/2&&t<=(r[M].coordinate+r[M+1].coordinate)/2||M===l-1&&t>(r[M].coordinate+r[M-1].coordinate)/2){s=r[M].index;break}return s},sb=function(t){var n,r=t,a=r.type.displayName,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=i.stroke,l=i.fill,p;switch(a){case"Line":p=s;break;case"Area":case"Radar":p=s&&s!=="none"?s:l;break;default:p=l;break}return p},nF=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},l=Object.keys(i),p=0,f=l.length;p<f;p++)for(var m=i[l[p]].stackGroups,d=Object.keys(m),v=0,y=d.length;v<y;v++){var x=m[d[v]],I=x.items,b=x.cateAxisId,S=I.filter(function(E){return Ur(E.type).indexOf("Bar")>=0});if(S&&S.length){var A=S[0].type.defaultProps,_=A!==void 0?bt(bt({},A),S[0].props):S[0].props,M=_.barSize,w=_[b];s[w]||(s[w]=[]);var O=Ee(M)?n:M;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ee(O)?void 0:on(O,r,0)})}}return s},rF=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,i=t.sizeList,s=i===void 0?[]:i,l=t.maxBarSize,p=s.length;if(p<1)return null;var f=on(n,a,0,!0),m,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,y=a/p,x=s.reduce(function(M,w){return M+w.barSize||0},0);x+=(p-1)*f,x>=a&&(x-=(p-1)*f,f=0),x>=a&&y>0&&(v=!0,y*=.9,x=p*y);var I=(a-x)/2>>0,b={offset:I-f,size:0};m=s.reduce(function(M,w){var O={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},E=[].concat(yS(M),[O]);return b=E[E.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:b})}),E},d)}else{var S=on(r,a,0,!0);a-2*S-(p-1)*f<=0&&(f=0);var A=(a-2*S-(p-1)*f)/p;A>1&&(A>>=0);var _=l===+l?Math.min(A,l):A;m=s.reduce(function(M,w,O){var E=[].concat(yS(M),[{item:w.item,position:{offset:S+(A+f)*O+(A-_)/2,size:_}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:E[E.length-1].position})}),E},d)}return m},aF=function(t,n,r,a){var i=r.children,s=r.width,l=r.margin,p=s-(l.left||0)-(l.right||0),f=_O({children:i,legendWidth:p});if(f){var m=a||{},d=m.width,v=m.height,y=f.align,x=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&x==="middle")&&y!=="center"&&le(t[y]))return bt(bt({},t),{},pi({},y,t[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&x!=="middle"&&le(t[x]))return bt(bt({},t),{},pi({},x,t[x]+(v||0)))}return t},oF=function(t,n,r){return Ee(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},OO=function(t,n,r,a,i){var s=n.props.children,l=sn(s,eu).filter(function(f){return oF(a,i,f.props.direction)});if(l&&l.length){var p=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,m){var d=lt(m,r);if(Ee(d))return f;var v=Array.isArray(d)?[i0(d),_a(d)]:[d,d],y=p.reduce(function(x,I){var b=lt(m,I,0),S=v[0]-Math.abs(Array.isArray(b)?b[0]:b),A=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(S,x[0]),Math.max(A,x[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},iF=function(t,n,r,a,i){var s=n.map(function(l){return OO(t,l,r,i,a)}).filter(function(l){return!Ee(l)});return s&&s.length?s.reduce(function(l,p){return[Math.min(l[0],p[0]),Math.max(l[1],p[1])]},[1/0,-1/0]):null},WO=function(t,n,r,a,i){var s=n.map(function(p){var f=p.props.dataKey;return r==="number"&&f&&OO(t,p,f,a)||as(t,f,r,i)});if(r==="number")return s.reduce(function(p,f){return[Math.min(p[0],f[0]),Math.max(p[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(p,f){for(var m=0,d=f.length;m<d;m++)l[f[m]]||(l[f[m]]=!0,p.push(f[m]));return p},[])},MO=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},CO=function(t,n,r,a){if(a)return t.map(function(p){return p.coordinate});var i,s,l=t.map(function(p){return p.coordinate===n&&(i=!0),p.coordinate===r&&(s=!0),p.coordinate});return i||l.push(n),s||l.push(r),l},Fr=function(t,n,r){if(!t)return null;var a=t.scale,i=t.duplicateDomain,s=t.type,l=t.range,p=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/p:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var m=(t.ticks||t.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Qi(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Um=new WeakMap,Bc=function(t,n){if(typeof n!="function")return t;Um.has(t)||Um.set(t,new WeakMap);var r=Um.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},kO=function(t,n,r){var a=t.scale,i=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:bs(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Zc(),realScaleType:"linear"}:i==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:rs(),realScaleType:"point"}:i==="category"?{scale:bs(),realScaleType:"band"}:{scale:Zc(),realScaleType:"linear"};if(Ks(a)){var p="scale".concat(Up(a));return{scale:(aS[p]||rs)(),realScaleType:aS[p]?p:"point"}}return ke(a)?{scale:a}:{scale:rs(),realScaleType:"point"}},IS=1e-4,EO=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),i=Math.min(a[0],a[1])-IS,s=Math.max(a[0],a[1])+IS,l=t(n[0]),p=t(n[r-1]);(l<i||l>s||p<i||p>s)&&t.domain([n[0],n[r-1]])}},uF=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},sF=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),i=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(i[0]=r),(!le(t[1])||t[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},lF=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0,l=0;l<n;++l){var p=Qi(t[l][r][1])?t[l][r][0]:t[l][r][1];p>=0?(t[l][r][0]=i,t[l][r][1]=i+p,i=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+p,s=t[l][r][1])}},cF=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0;s<n;++s){var l=Qi(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=i,t[s][r][1]=i+l,i=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},pF={sign:lF,expand:Zj,none:hi,silhouette:Jj,wiggle:eH,positive:cF},fF=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),i=pF[r],s=Xj().keys(a).value(function(l,p){return+lt(l,p,0)}).order(Vv).offset(i);return s(t)},dF=function(t,n,r,a,i,s){if(!t)return null;var l=s?n.reverse():n,p={},f=l.reduce(function(d,v){var y,x=(y=v.type)!==null&&y!==void 0&&y.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=x.stackId,b=x.hide;if(b)return d;var S=x[r],A=d[S]||{hasStack:!1,stackGroups:{}};if(Rt(I)){var _=A.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};_.items.push(v),A.hasStack=!0,A.stackGroups[I]=_}else A.stackGroups[Ha("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},d),{},pi({},S,A))},p),m={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var x={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var S=y.stackGroups[b];return bt(bt({},I),{},pi({},b,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:fF(t,S.items,i)}))},x)}return bt(bt({},d),{},pi({},v,y))},m)},TO=function(t,n){var r=n.realScaleType,a=n.type,i=n.tickCount,s=n.originalDomain,l=n.allowDecimals,p=r||n.scale;if(p!=="auto"&&p!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var m=_7(f,i,l);return t.domain([i0(m),_a(m)]),{niceTicks:m}}if(i&&a==="number"){var d=t.domain(),v=O7(d,i,l);return{niceTicks:v}}return null};function wi(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ee(a[t.dataKey])){var l=Ec(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[i]?n[i].coordinate+r/2:null}var p=lt(a,Ee(s)?t.dataKey:s);return Ee(p)?null:t.scale(p)}var BS=function(t){var n=t.axis,r=t.ticks,a=t.offset,i=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var p=lt(s,n.dataKey,n.domain[l]);return Ee(p)?null:n.scale(p)-i/2+a},hF=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},mF=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,i=a.stackId;if(Rt(i)){var s=n[i];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},vF=function(t){return t.reduce(function(n,r){return[i0(r.concat([n[0]]).filter(le)),_a(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},NO=function(t,n,r){return Object.keys(t).reduce(function(a,i){var s=t[i],l=s.stackedData,p=l.reduce(function(f,m){var d=vF(m.slice(n,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(p[0],a[0]),Math.max(p[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},xS=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,wS=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,gg=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(xS.test(t[0])){var i=+xS.exec(t[0])[1];a[0]=n[0]-i}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(wS.test(t[1])){var s=+wS.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},op=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var i=Ny(n,function(d){return d.coordinate}),s=1/0,l=1,p=i.length;l<p;l++){var f=i[l],m=i[l-1];s=Math.min((f.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},PS=function(t,n,r){return!t||!t.length||Na(t,Wn(r,"type.defaultProps.domain"))?n:t},RO=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,i=r.name,s=r.unit,l=r.formatter,p=r.tooltipType,f=r.chartType,m=r.hide;return bt(bt({},Ae(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:i||a,color:sb(t),value:lt(n,a),type:p,payload:n,chartType:f,hide:m})};function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}function SS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(n),!0).forEach(function(r){jO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jO(e,t,n){return t=gF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gF(e){var t=yF(e,"string");return Os(t)=="symbol"?t:t+""}function yF(e,t){if(Os(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Os(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bF(e,t){return wF(e)||xF(e,t)||BF(e,t)||IF()}function IF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BF(e,t){if(e){if(typeof e=="string")return AS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AS(e,t)}}function AS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xF(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function wF(e){if(Array.isArray(e))return e}var ip=Math.PI/180,PF=function(t){return t*180/Math.PI},ot=function(t,n,r,a){return{x:t+Math.cos(-ip*a)*r,y:n+Math.sin(-ip*a)*r}},HO=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},SF=function(t,n,r,a,i){var s=t.width,l=t.height,p=t.startAngle,f=t.endAngle,m=on(t.cx,s,s/2),d=on(t.cy,l,l/2),v=HO(s,l,r),y=on(t.innerRadius,v,0),x=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(b,S){var A=n[S],_=A.domain,M=A.reversed,w;if(Ee(A.range))a==="angleAxis"?w=[p,f]:a==="radiusAxis"&&(w=[y,x]),M&&(w=[w[1],w[0]]);else{w=A.range;var O=w,E=bF(O,2);p=E[0],f=E[1]}var P=kO(A,i),C=P.realScaleType,N=P.scale;N.domain(_).range(w),EO(N);var H=TO(N,Hr(Hr({},A),{},{realScaleType:C})),T=Hr(Hr(Hr({},A),H),{},{range:w,radius:x,realScaleType:C,scale:N,cx:m,cy:d,innerRadius:y,outerRadius:x,startAngle:p,endAngle:f});return Hr(Hr({},b),{},jO({},S,T))},{})},AF=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},_F=function(t,n){var r=t.x,a=t.y,i=n.cx,s=n.cy,l=AF({x:r,y:a},{x:i,y:s});if(l<=0)return{radius:l};var p=(r-i)/l,f=Math.acos(p);return a>s&&(f=2*Math.PI-f),{radius:l,angle:PF(f),angleInRadian:f}},OF=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:n-s*360,endAngle:r-s*360}},WF=function(t,n){var r=n.startAngle,a=n.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(i,s);return t+l*360},_S=function(t,n){var r=t.x,a=t.y,i=_F({x:r,y:a},n),s=i.radius,l=i.angle,p=n.innerRadius,f=n.outerRadius;if(s<p||s>f)return!1;if(s===0)return!0;var m=OF(n),d=m.startAngle,v=m.endAngle,y=l,x;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;x=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;x=y>=v&&y<=d}return x?Hr(Hr({},n),{},{radius:s,angle:WF(y,n)}):null},DO=function(t){return!X.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function Ws(e){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ws(e)}var MF=["offset"];function CF(e){return NF(e)||TF(e)||EF(e)||kF()}function kF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EF(e,t){if(e){if(typeof e=="string")return yg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yg(e,t)}}function TF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function NF(e){if(Array.isArray(e))return yg(e)}function yg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function RF(e,t){if(e==null)return{};var n=jF(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function OS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?OS(Object(n),!0).forEach(function(r){HF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):OS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HF(e,t,n){return t=DF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DF(e){var t=$F(e,"string");return Ws(t)=="symbol"?t:t+""}function $F(e,t){if(Ws(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ms.apply(this,arguments)}var LF=function(t){var n=t.value,r=t.formatter,a=Ee(t.children)?n:t.children;return ke(r)?r(a):a},FF=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},qF=function(t,n,r){var a=t.position,i=t.viewBox,s=t.offset,l=t.className,p=i,f=p.cx,m=p.cy,d=p.innerRadius,v=p.outerRadius,y=p.startAngle,x=p.endAngle,I=p.clockWise,b=(d+v)/2,S=FF(y,x),A=S>=0?1:-1,_,M;a==="insideStart"?(_=y+A*s,M=I):a==="insideEnd"?(_=x-A*s,M=!I):a==="end"&&(_=x+A*s,M=I),M=S<=0?M:!M;var w=ot(f,m,b,_),O=ot(f,m,b,_+(M?1:-1)*359),E="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(M?0:1,`,
    `).concat(O.x,",").concat(O.y),P=Ee(t.id)?Ha("recharts-radial-line-"):t.id;return R.createElement("text",Ms({},r,{dominantBaseline:"central",className:je("recharts-radial-bar-label",l)}),R.createElement("defs",null,R.createElement("path",{id:P,d:E})),R.createElement("textPath",{xlinkHref:"#".concat(P)},n))},zF=function(t){var n=t.viewBox,r=t.offset,a=t.position,i=n,s=i.cx,l=i.cy,p=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var y=ot(s,l,f+r,v),x=y.x,I=y.y;return{x,y:I,textAnchor:x>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var b=(p+f)/2,S=ot(s,l,b,v),A=S.x,_=S.y;return{x:A,y:_,textAnchor:"middle",verticalAnchor:"middle"}},UF=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,i=t.position,s=n,l=s.x,p=s.y,f=s.width,m=s.height,d=m>=0?1:-1,v=d*a,y=d>0?"end":"start",x=d>0?"start":"end",I=f>=0?1:-1,b=I*a,S=I>0?"end":"start",A=I>0?"start":"end";if(i==="top"){var _={x:l+f/2,y:p-d*a,textAnchor:"middle",verticalAnchor:y};return Nt(Nt({},_),r?{height:Math.max(p-r.y,0),width:f}:{})}if(i==="bottom"){var M={x:l+f/2,y:p+m+v,textAnchor:"middle",verticalAnchor:x};return Nt(Nt({},M),r?{height:Math.max(r.y+r.height-(p+m),0),width:f}:{})}if(i==="left"){var w={x:l-b,y:p+m/2,textAnchor:S,verticalAnchor:"middle"};return Nt(Nt({},w),r?{width:Math.max(w.x-r.x,0),height:m}:{})}if(i==="right"){var O={x:l+f+b,y:p+m/2,textAnchor:A,verticalAnchor:"middle"};return Nt(Nt({},O),r?{width:Math.max(r.x+r.width-O.x,0),height:m}:{})}var E=r?{width:f,height:m}:{};return i==="insideLeft"?Nt({x:l+b,y:p+m/2,textAnchor:A,verticalAnchor:"middle"},E):i==="insideRight"?Nt({x:l+f-b,y:p+m/2,textAnchor:S,verticalAnchor:"middle"},E):i==="insideTop"?Nt({x:l+f/2,y:p+v,textAnchor:"middle",verticalAnchor:x},E):i==="insideBottom"?Nt({x:l+f/2,y:p+m-v,textAnchor:"middle",verticalAnchor:y},E):i==="insideTopLeft"?Nt({x:l+b,y:p+v,textAnchor:A,verticalAnchor:x},E):i==="insideTopRight"?Nt({x:l+f-b,y:p+v,textAnchor:S,verticalAnchor:x},E):i==="insideBottomLeft"?Nt({x:l+b,y:p+m-v,textAnchor:A,verticalAnchor:y},E):i==="insideBottomRight"?Nt({x:l+f-b,y:p+m-v,textAnchor:S,verticalAnchor:y},E):Ki(i)&&(le(i.x)||lo(i.x))&&(le(i.y)||lo(i.y))?Nt({x:l+on(i.x,f),y:p+on(i.y,m),textAnchor:"end",verticalAnchor:"end"},E):Nt({x:l+f/2,y:p+m/2,textAnchor:"middle",verticalAnchor:"middle"},E)},VF=function(t){return"cx"in t&&le(t.cx)};function qt(e){var t=e.offset,n=t===void 0?5:t,r=RF(e,MF),a=Nt({offset:n},r),i=a.viewBox,s=a.position,l=a.value,p=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||Ee(l)&&Ee(p)&&!X.isValidElement(f)&&!ke(f))return null;if(X.isValidElement(f))return X.cloneElement(f,a);var y;if(ke(f)){if(y=X.createElement(f,a),X.isValidElement(y))return y}else y=LF(a);var x=VF(i),I=Ae(a,!0);if(x&&(s==="insideStart"||s==="insideEnd"||s==="end"))return qF(a,y,I);var b=x?zF(a):UF(a);return R.createElement(go,Ms({className:je("recharts-label",d)},I,b,{breakAll:v}),y)}qt.displayName="Label";var $O=function(t){var n=t.cx,r=t.cy,a=t.angle,i=t.startAngle,s=t.endAngle,l=t.r,p=t.radius,f=t.innerRadius,m=t.outerRadius,d=t.x,v=t.y,y=t.top,x=t.left,I=t.width,b=t.height,S=t.clockWise,A=t.labelViewBox;if(A)return A;if(le(I)&&le(b)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:b};if(le(y)&&le(x))return{x:y,y:x,width:I,height:b}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:m||p||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},GF=function(t,n){return t?t===!0?R.createElement(qt,{key:"label-implicit",viewBox:n}):Rt(t)?R.createElement(qt,{key:"label-implicit",viewBox:n,value:t}):X.isValidElement(t)?t.type===qt?X.cloneElement(t,{key:"label-implicit",viewBox:n}):R.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):ke(t)?R.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):Ki(t)?R.createElement(qt,Ms({viewBox:n},t,{key:"label-implicit"})):null:null},KF=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,i=$O(t),s=sn(a,qt).map(function(p,f){return X.cloneElement(p,{viewBox:n||i,key:"label-".concat(f)})});if(!r)return s;var l=GF(t.label,n||i);return[l].concat(CF(s))};qt.parseViewBox=$O;qt.renderCallByParent=KF;var Vm,WS;function QF(){if(WS)return Vm;WS=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Vm=e,Vm}var YF=QF();const XF=Xe(YF);function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}var ZF=["valueAccessor"],JF=["data","dataKey","clockWise","id","textBreakAll"];function eq(e){return aq(e)||rq(e)||nq(e)||tq()}function tq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nq(e,t){if(e){if(typeof e=="string")return bg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bg(e,t)}}function rq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function aq(e){if(Array.isArray(e))return bg(e)}function bg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function up(){return up=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},up.apply(this,arguments)}function MS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function CS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?MS(Object(n),!0).forEach(function(r){oq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):MS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oq(e,t,n){return t=iq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iq(e){var t=uq(e,"string");return Cs(t)=="symbol"?t:t+""}function uq(e,t){if(Cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kS(e,t){if(e==null)return{};var n=sq(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sq(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var lq=function(t){return Array.isArray(t.value)?XF(t.value):t.value};function sr(e){var t=e.valueAccessor,n=t===void 0?lq:t,r=kS(e,ZF),a=r.data,i=r.dataKey,s=r.clockWise,l=r.id,p=r.textBreakAll,f=kS(r,JF);return!a||!a.length?null:R.createElement(De,{className:"recharts-label-list"},a.map(function(m,d){var v=Ee(i)?n(m,d):lt(m&&m.payload,i),y=Ee(l)?{}:{id:"".concat(l,"-").concat(d)};return R.createElement(qt,up({},Ae(m,!0),f,y,{parentViewBox:m.parentViewBox,value:v,textBreakAll:p,viewBox:qt.parseViewBox(Ee(s)?m:CS(CS({},m),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}sr.displayName="LabelList";function cq(e,t){return e?e===!0?R.createElement(sr,{key:"labelList-implicit",data:t}):R.isValidElement(e)||ke(e)?R.createElement(sr,{key:"labelList-implicit",data:t,content:e}):Ki(e)?R.createElement(sr,up({data:t},e,{key:"labelList-implicit"})):null:null}function pq(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,sr).map(function(s,l){return X.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var i=cq(e.label,t);return[i].concat(eq(a))}sr.renderCallByParent=pq;function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}function Ig(){return Ig=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ig.apply(this,arguments)}function ES(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function TS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(n),!0).forEach(function(r){fq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ES(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fq(e,t,n){return t=dq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dq(e){var t=hq(e,"string");return ks(t)=="symbol"?t:t+""}function hq(e,t){if(ks(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mq=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},xc=function(t){var n=t.cx,r=t.cy,a=t.radius,i=t.angle,s=t.sign,l=t.isExternal,p=t.cornerRadius,f=t.cornerIsExternal,m=p*(l?1:-1)+a,d=Math.asin(p/m)/ip,v=f?i:i+s*d,y=ot(n,r,m,v),x=ot(n,r,a,v),I=f?i-s*d:i,b=ot(n,r,m*Math.cos(d*ip),I);return{center:y,circleTangency:x,lineTangency:b,theta:d}},LO=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.startAngle,l=t.endAngle,p=mq(s,l),f=s+p,m=ot(n,r,i,s),d=ot(n,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(p)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=ot(n,r,a,s),x=ot(n,r,a,f);v+="L ".concat(x.x,",").concat(x.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(p)>180),",").concat(+(s<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},vq=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,p=t.cornerIsExternal,f=t.startAngle,m=t.endAngle,d=an(m-f),v=xc({cx:n,cy:r,radius:i,angle:f,sign:d,cornerRadius:s,cornerIsExternal:p}),y=v.circleTangency,x=v.lineTangency,I=v.theta,b=xc({cx:n,cy:r,radius:i,angle:m,sign:-d,cornerRadius:s,cornerIsExternal:p}),S=b.circleTangency,A=b.lineTangency,_=b.theta,M=p?Math.abs(f-m):Math.abs(f-m)-I-_;if(M<0)return l?"M ".concat(x.x,",").concat(x.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):LO({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var w="M ".concat(x.x,",").concat(x.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(M>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(A.x,",").concat(A.y,`
  `);if(a>0){var O=xc({cx:n,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),E=O.circleTangency,P=O.lineTangency,C=O.theta,N=xc({cx:n,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),H=N.circleTangency,T=N.lineTangency,$=N.theta,G=p?Math.abs(f-m):Math.abs(f-m)-C-$;if(G<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(T.x,",").concat(T.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(H.x,",").concat(H.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(G>180),",").concat(+(d>0),",").concat(E.x,",").concat(E.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},gq={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},FO=function(t){var n=TS(TS({},gq),t),r=n.cx,a=n.cy,i=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,p=n.forceCornerRadius,f=n.cornerIsExternal,m=n.startAngle,d=n.endAngle,v=n.className;if(s<i||m===d)return null;var y=je("recharts-sector",v),x=s-i,I=on(l,x,0,!0),b;return I>0&&Math.abs(m-d)<360?b=vq({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,x/2),forceCornerRadius:p,cornerIsExternal:f,startAngle:m,endAngle:d}):b=LO({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:m,endAngle:d}),R.createElement("path",Ig({},Ae(n,!0),{className:y,d:b,role:"img"}))};function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function Bg(){return Bg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bg.apply(this,arguments)}function NS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function RS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?NS(Object(n),!0).forEach(function(r){yq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):NS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yq(e,t,n){return t=bq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bq(e){var t=Iq(e,"string");return Es(t)=="symbol"?t:t+""}function Iq(e,t){if(Es(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var jS={curveBasisClosed:$j,curveBasisOpen:Lj,curveBasis:Dj,curveBumpX:Sj,curveBumpY:Aj,curveLinearClosed:Fj,curveLinear:Gp,curveMonotoneX:qj,curveMonotoneY:zj,curveNatural:Uj,curveStep:Vj,curveStepAfter:Kj,curveStepBefore:Gj},wc=function(t){return t.x===+t.x&&t.y===+t.y},Ku=function(t){return t.x},Qu=function(t){return t.y},Bq=function(t,n){if(ke(t))return t;var r="curve".concat(Up(t));return(r==="curveMonotone"||r==="curveBump")&&n?jS["".concat(r).concat(n==="vertical"?"Y":"X")]:jS[r]||Gp},xq=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,i=a===void 0?[]:a,s=t.baseLine,l=t.layout,p=t.connectNulls,f=p===void 0?!1:p,m=Bq(r,l),d=f?i.filter(function(I){return wc(I)}):i,v;if(Array.isArray(s)){var y=f?s.filter(function(I){return wc(I)}):s,x=d.map(function(I,b){return RS(RS({},I),{},{base:y[b]})});return l==="vertical"?v=hc().y(Qu).x1(Ku).x0(function(I){return I.base.x}):v=hc().x(Ku).y1(Qu).y0(function(I){return I.base.y}),v.defined(wc).curve(m),v(x)}return l==="vertical"&&le(s)?v=hc().y(Qu).x1(Ku).x0(s):le(s)?v=hc().x(Ku).y1(Qu).y0(s):v=LA().x(Ku).y(Qu),v.defined(wc).curve(m),v(d)},ka=function(t){var n=t.className,r=t.points,a=t.path,i=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?xq(t):a;return R.createElement("path",Bg({},Ae(t,!1),Tc(t),{className:je("recharts-curve",n),d:s,ref:i}))},Gm={exports:{}},Km,HS;function wq(){if(HS)return Km;HS=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Km=e,Km}var Qm,DS;function Pq(){if(DS)return Qm;DS=1;var e=wq();function t(){}function n(){}return n.resetWarningCache=t,Qm=function(){function r(s,l,p,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Qm}var $S;function Sq(){return $S||($S=1,Gm.exports=Pq()()),Gm.exports}var Aq=Sq();const Ye=Xe(Aq),{getOwnPropertyNames:_q,getOwnPropertySymbols:Oq}=Object,{hasOwnProperty:Wq}=Object.prototype;function Ym(e,t){return function(r,a,i){return e(r,a,i)&&t(r,a,i)}}function Pc(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:i}=a,s=i.get(n),l=i.get(r);if(s&&l)return s===r&&l===n;i.set(n,r),i.set(r,n);const p=e(n,r,a);return i.delete(n),i.delete(r),p}}function Mq(e){return e!=null?e[Symbol.toStringTag]:void 0}function LS(e){return _q(e).concat(Oq(e))}const Cq=Object.hasOwn||((e,t)=>Wq.call(e,t));function Po(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const kq="__v",Eq="__o",Tq="_owner",{getOwnPropertyDescriptor:FS,keys:qS}=Object;function Nq(e,t){return e.byteLength===t.byteLength&&sp(new Uint8Array(e),new Uint8Array(t))}function Rq(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function jq(e,t){return e.byteLength===t.byteLength&&sp(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function Hq(e,t){return Po(e.getTime(),t.getTime())}function Dq(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function $q(e,t){return e===t}function zS(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,l,p=0;for(;(s=i.next())&&!s.done;){const f=t.entries();let m=!1,d=0;for(;(l=f.next())&&!l.done;){if(a[d]){d++;continue}const v=s.value,y=l.value;if(n.equals(v[0],y[0],p,d,e,t,n)&&n.equals(v[1],y[1],v[0],y[0],e,t,n)){m=a[d]=!0;break}d++}if(!m)return!1;p++}return!0}const Lq=Po;function Fq(e,t,n){const r=qS(e);let a=r.length;if(qS(t).length!==a)return!1;for(;a-- >0;)if(!qO(e,t,n,r[a]))return!1;return!0}function Yu(e,t,n){const r=LS(e);let a=r.length;if(LS(t).length!==a)return!1;let i,s,l;for(;a-- >0;)if(i=r[a],!qO(e,t,n,i)||(s=FS(e,i),l=FS(t,i),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function qq(e,t){return Po(e.valueOf(),t.valueOf())}function zq(e,t){return e.source===t.source&&e.flags===t.flags}function US(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,l;for(;(s=i.next())&&!s.done;){const p=t.values();let f=!1,m=0;for(;(l=p.next())&&!l.done;){if(!a[m]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function sp(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function Uq(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function qO(e,t,n,r){return(r===Tq||r===Eq||r===kq)&&(e.$$typeof||t.$$typeof)?!0:Cq(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const Vq="[object ArrayBuffer]",Gq="[object Arguments]",Kq="[object Boolean]",Qq="[object DataView]",Yq="[object Date]",Xq="[object Error]",Zq="[object Map]",Jq="[object Number]",e9="[object Object]",t9="[object RegExp]",n9="[object Set]",r9="[object String]",a9={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},o9="[object URL]",i9=Object.prototype.toString;function u9({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:p,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:x}){return function(b,S,A){if(b===S)return!0;if(b==null||S==null)return!1;const _=typeof b;if(_!==typeof S)return!1;if(_!=="object")return _==="number"?l(b,S,A):_==="function"?i(b,S,A):!1;const M=b.constructor;if(M!==S.constructor)return!1;if(M===Object)return p(b,S,A);if(Array.isArray(b))return t(b,S,A);if(M===Date)return r(b,S,A);if(M===RegExp)return m(b,S,A);if(M===Map)return s(b,S,A);if(M===Set)return d(b,S,A);const w=i9.call(b);if(w===Yq)return r(b,S,A);if(w===t9)return m(b,S,A);if(w===Zq)return s(b,S,A);if(w===n9)return d(b,S,A);if(w===e9)return typeof b.then!="function"&&typeof S.then!="function"&&p(b,S,A);if(w===o9)return y(b,S,A);if(w===Xq)return a(b,S,A);if(w===Gq)return p(b,S,A);if(a9[w])return v(b,S,A);if(w===Vq)return e(b,S,A);if(w===Qq)return n(b,S,A);if(w===Kq||w===Jq||w===r9)return f(b,S,A);if(x){let O=x[w];if(!O){const E=Mq(b);E&&(O=x[E])}if(O)return O(b,S,A)}return!1}}function s9({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:Nq,areArraysEqual:n?Yu:Rq,areDataViewsEqual:jq,areDatesEqual:Hq,areErrorsEqual:Dq,areFunctionsEqual:$q,areMapsEqual:n?Ym(zS,Yu):zS,areNumbersEqual:Lq,areObjectsEqual:n?Yu:Fq,arePrimitiveWrappersEqual:qq,areRegExpsEqual:zq,areSetsEqual:n?Ym(US,Yu):US,areTypedArraysEqual:n?Ym(sp,Yu):sp,areUrlsEqual:Uq,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=Pc(r.areArraysEqual),i=Pc(r.areMapsEqual),s=Pc(r.areObjectsEqual),l=Pc(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:l})}return r}function l9(e){return function(t,n,r,a,i,s,l){return e(t,n,l)}}function c9({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,p){const{cache:f=e?new WeakMap:void 0,meta:m}=n();return t(l,p,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(l,p){return t(l,p,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,p){return t(l,p,i)}}const p9=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>Po});La({strict:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po,strict:!0});function La(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,i=s9(e),s=u9(i),l=n?n(s):l9(s);return c9({circular:t,comparator:s,createState:r,equals:l,strict:a})}function f9(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function VS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(i){n<0&&(n=i),i-n>t?(e(i),n=-1):f9(a)};requestAnimationFrame(r)}function xg(e){"@babel/helpers - typeof";return xg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xg(e)}function d9(e){return g9(e)||v9(e)||m9(e)||h9()}function h9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m9(e,t){if(e){if(typeof e=="string")return GS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return GS(e,t)}}function GS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function g9(e){if(Array.isArray(e))return e}function y9(){var e={},t=function(){return null},n=!1,r=function a(i){if(!n){if(Array.isArray(i)){if(!i.length)return;var s=i,l=d9(s),p=l[0],f=l.slice(1);if(typeof p=="number"){VS(a.bind(null,f),p);return}a(p),VS(a.bind(null,f));return}xg(i)==="object"&&(e=i,t(e)),typeof i=="function"&&i()}};return{stop:function(){n=!0},start:function(i){n=!1,r(i)},subscribe:function(i){return t=i,function(){t=function(){return null}}}}}function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function KS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function QS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?KS(Object(n),!0).forEach(function(r){zO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):KS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zO(e,t,n){return t=b9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b9(e){var t=I9(e,"string");return Ts(t)==="symbol"?t:String(t)}function I9(e,t){if(Ts(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B9=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},x9=function(t){return t},w9=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},os=function(t,n){return Object.keys(n).reduce(function(r,a){return QS(QS({},r),{},zO({},a,t(a,n[a])))},{})},YS=function(t,n,r){return t.map(function(a){return"".concat(w9(a)," ").concat(n,"ms ").concat(r)}).join(",")};function P9(e,t){return _9(e)||A9(e,t)||UO(e,t)||S9()}function S9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function _9(e){if(Array.isArray(e))return e}function O9(e){return C9(e)||M9(e)||UO(e)||W9()}function W9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UO(e,t){if(e){if(typeof e=="string")return wg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wg(e,t)}}function M9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function C9(e){if(Array.isArray(e))return wg(e)}function wg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var lp=1e-4,VO=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},GO=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},XS=function(t,n){return function(r){var a=VO(t,n);return GO(a,r)}},k9=function(t,n){return function(r){var a=VO(t,n),i=[].concat(O9(a.map(function(s,l){return s*l}).slice(1)),[0]);return GO(i,r)}},ZS=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],i=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,i=0,s=1,l=1;break;case"ease":a=.25,i=.1,s=.25,l=1;break;case"ease-in":a=.42,i=0,s=1,l=1;break;case"ease-out":a=.42,i=0,s=.58,l=1;break;case"ease-in-out":a=0,i=0,s=.58,l=1;break;default:{var p=n[0].split("(");if(p[0]==="cubic-bezier"&&p[1].split(")")[0].split(",").length===4){var f=p[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),m=P9(f,4);a=m[0],i=m[1],s=m[2],l=m[3]}}}var d=XS(a,s),v=XS(i,l),y=k9(a,s),x=function(S){return S>1?1:S<0?0:S},I=function(S){for(var A=S>1?1:S,_=A,M=0;M<8;++M){var w=d(_)-A,O=y(_);if(Math.abs(w-A)<lp||O<lp)return v(_);_=x(_-w/O)}return v(_)};return I.isStepper=!1,I},E9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,i=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,p=function(m,d,v){var y=-(m-d)*r,x=v*i,I=v+(y-x)*l/1e3,b=v*l/1e3+m;return Math.abs(b-d)<lp&&Math.abs(I)<lp?[d,0]:[b,I]};return p.isStepper=!0,p.dt=l,p},T9=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return ZS(a);case"spring":return E9();default:if(a.split("(")[0]==="cubic-bezier")return ZS(a)}return typeof a=="function"?a:null};function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}function JS(e){return j9(e)||R9(e)||KO(e)||N9()}function N9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j9(e){if(Array.isArray(e))return Sg(e)}function e4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?e4(Object(n),!0).forEach(function(r){Pg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):e4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pg(e,t,n){return t=H9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H9(e){var t=D9(e,"string");return Ns(t)==="symbol"?t:String(t)}function D9(e,t){if(Ns(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $9(e,t){return q9(e)||F9(e,t)||KO(e,t)||L9()}function L9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KO(e,t){if(e){if(typeof e=="string")return Sg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sg(e,t)}}function Sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function q9(e){if(Array.isArray(e))return e}var cp=function(t,n,r){return t+(n-t)*r},Ag=function(t){var n=t.from,r=t.to;return n!==r},z9=function e(t,n,r){var a=os(function(i,s){if(Ag(s)){var l=t(s.from,s.to,s.velocity),p=$9(l,2),f=p[0],m=p[1];return Gt(Gt({},s),{},{from:f,velocity:m})}return s},n);return r<1?os(function(i,s){return Ag(s)?Gt(Gt({},s),{},{velocity:cp(s.velocity,a[i].velocity,r),from:cp(s.from,a[i].from,r)}):s},n):e(t,a,r-1)};const U9=(function(e,t,n,r,a){var i=B9(e,t),s=i.reduce(function(b,S){return Gt(Gt({},b),{},Pg({},S,[e[S],t[S]]))},{}),l=i.reduce(function(b,S){return Gt(Gt({},b),{},Pg({},S,{from:e[S],velocity:0,to:t[S]}))},{}),p=-1,f,m,d=function(){return null},v=function(){return os(function(S,A){return A.from},l)},y=function(){return!Object.values(l).filter(Ag).length},x=function(S){f||(f=S);var A=S-f,_=A/n.dt;l=z9(n,l,_),a(Gt(Gt(Gt({},e),t),v())),f=S,y()||(p=requestAnimationFrame(d))},I=function(S){m||(m=S);var A=(S-m)/r,_=os(function(w,O){return cp.apply(void 0,JS(O).concat([n(A)]))},s);if(a(Gt(Gt(Gt({},e),t),_)),A<1)p=requestAnimationFrame(d);else{var M=os(function(w,O){return cp.apply(void 0,JS(O).concat([n(1)]))},s);a(Gt(Gt(Gt({},e),t),M))}};return d=n.isStepper?x:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(p)}}});function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}var V9=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function G9(e,t){if(e==null)return{};var n=K9(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function K9(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xm(e){return Z9(e)||X9(e)||Y9(e)||Q9()}function Q9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y9(e,t){if(e){if(typeof e=="string")return _g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _g(e,t)}}function X9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z9(e){if(Array.isArray(e))return _g(e)}function _g(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?t4(Object(n),!0).forEach(function(r){ts(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ts(e,t,n){return t=QO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ez(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,QO(r.key),r)}}function tz(e,t,n){return t&&ez(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function QO(e){var t=nz(e,"string");return Pi(t)==="symbol"?t:String(t)}function nz(e,t){if(Pi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Og(e,t)}function Og(e,t){return Og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Og(e,t)}function az(e){var t=oz();return function(){var r=pp(e),a;if(t){var i=pp(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Wg(this,a)}}function Wg(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mg(e)}function Mg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pp(e){return pp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},pp(e)}var Kn=(function(e){rz(n,e);var t=az(n);function n(r,a){var i;J9(this,n),i=t.call(this,r,a);var s=i.props,l=s.isActive,p=s.attributeName,f=s.from,m=s.to,d=s.steps,v=s.children,y=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Mg(i)),i.changeStyle=i.changeStyle.bind(Mg(i)),!l||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Wg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Wg(i);i.state={style:p?ts({},p,f):f}}else i.state={style:{}};return i}return tz(n,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,l=i.canBegin,p=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(l){if(!s){var y={style:p?ts({},p,m):m};this.state&&v&&(p&&v[p]!==m||!p&&v!==m)&&this.setState(y);return}if(!(p9(a.to,m)&&a.canBegin&&a.isActive)){var x=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=x||f?d:a.to;if(this.state&&v){var b={style:p?ts({},p,I):I};(p&&v[p]!==I||!p&&v!==I)&&this.setState(b)}this.runAnimation(rr(rr({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,l=a.to,p=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=U9(s,l,T9(f),p,this.changeStyle),x=function(){i.stopJSAnimation=y()};this.manager.start([v,m,x,p,d])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,l=a.begin,p=a.onAnimationStart,f=s[0],m=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,S){if(S===0)return I;var A=b.duration,_=b.easing,M=_===void 0?"ease":_,w=b.style,O=b.properties,E=b.onAnimationEnd,P=S>0?s[S-1]:b,C=O||Object.keys(w);if(typeof M=="function"||M==="spring")return[].concat(Xm(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:A,easing:M}),A]);var N=YS(C,A,M),H=rr(rr(rr({},P.style),w),{},{transition:N});return[].concat(Xm(I),[H,A,E]).filter(x9)};return this.manager.start([p].concat(Xm(s.reduce(y,[m,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=y9());var i=a.begin,s=a.duration,l=a.attributeName,p=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,x=this.manager;if(this.unSubscribe=x.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?ts({},l,p):p,b=YS(Object.keys(I),s,f);x.start([m,i,rr(rr({},I),{},{transition:b}),s,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var p=G9(a,V9),f=X.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!l||f===0||s<=0)return i;var d=function(y){var x=y.props,I=x.style,b=I===void 0?{}:I,S=x.className,A=X.cloneElement(y,rr(rr({},p),{},{style:rr(rr({},b),m),className:S}));return A};return f===1?d(X.Children.only(i)):R.createElement("div",null,X.Children.map(i,function(v){return d(v)}))}}]),n})(X.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function fp(){return fp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fp.apply(this,arguments)}function iz(e,t){return cz(e)||lz(e,t)||sz(e,t)||uz()}function uz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sz(e,t){if(e){if(typeof e=="string")return n4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return n4(e,t)}}function n4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function cz(e){if(Array.isArray(e))return e}function r4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function a4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?r4(Object(n),!0).forEach(function(r){pz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pz(e,t,n){return t=fz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fz(e){var t=dz(e,"string");return Rs(t)=="symbol"?t:t+""}function dz(e,t){if(Rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var o4=function(t,n,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,p=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(s>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>s?s:i[v];m="M".concat(t,",").concat(n+l*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(t+p*d[0],",").concat(n)),m+="L ".concat(t+r-p*d[1],",").concat(n),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*d[1])),m+="L ".concat(t+r,",").concat(n+a-l*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(t+r-p*d[2],",").concat(n+a)),m+="L ".concat(t+p*d[3],",").concat(n+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*d[3])),m+="Z"}else if(s>0&&i===+i&&i>0){var x=Math.min(s,i);m="M ".concat(t,",").concat(n+l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+p*x,",").concat(n,`
            L `).concat(t+r-p*x,",").concat(n,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*x,`
            L `).concat(t+r,",").concat(n+a-l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r-p*x,",").concat(n+a,`
            L `).concat(t+p*x,",").concat(n+a,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*x," Z")}else m="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},hz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,i=n.x,s=n.y,l=n.width,p=n.height;if(Math.abs(l)>0&&Math.abs(p)>0){var f=Math.min(i,i+l),m=Math.max(i,i+l),d=Math.min(s,s+p),v=Math.max(s,s+p);return r>=f&&r<=m&&a>=d&&a<=v}return!1},mz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},lb=function(t){var n=a4(a4({},mz),t),r=X.useRef(),a=X.useState(-1),i=iz(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var M=r.current.getTotalLength();M&&l(M)}catch{}},[]);var p=n.x,f=n.y,m=n.width,d=n.height,v=n.radius,y=n.className,x=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isAnimationActive,A=n.isUpdateAnimationActive;if(p!==+p||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var _=je("recharts-rectangle",y);return A?R.createElement(Kn,{canBegin:s>0,from:{width:m,height:d,x:p,y:f},to:{width:m,height:d,x:p,y:f},duration:I,animationEasing:x,isActive:A},function(M){var w=M.width,O=M.height,E=M.x,P=M.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:S,easing:x},R.createElement("path",fp({},Ae(n,!0),{className:_,d:o4(E,P,w,O,v),ref:r})))}):R.createElement("path",fp({},Ae(n,!0),{className:_,d:o4(p,f,m,d,v)}))},vz=["points","className","baseLinePoints","connectNulls"];function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function gz(e,t){if(e==null)return{};var n=yz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function i4(e){return xz(e)||Bz(e)||Iz(e)||bz()}function bz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iz(e,t){if(e){if(typeof e=="string")return Cg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cg(e,t)}}function Bz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xz(e){if(Array.isArray(e))return Cg(e)}function Cg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u4=function(t){return t&&t.x===+t.x&&t.y===+t.y},wz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){u4(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),u4(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},is=function(t,n){var r=wz(t);n&&(r=[r.reduce(function(i,s){return[].concat(i4(i),i4(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,l,p){return"".concat(s).concat(p===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Pz=function(t,n,r){var a=is(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(is(n.reverse(),r).slice(1))},Sz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,i=t.connectNulls,s=gz(t,vz);if(!n||!n.length)return null;var l=je("recharts-polygon",r);if(a&&a.length){var p=s.stroke&&s.stroke!=="none",f=Pz(n,a,i);return R.createElement("g",{className:l},R.createElement("path",oi({},Ae(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),p?R.createElement("path",oi({},Ae(s,!0),{fill:"none",d:is(n,i)})):null,p?R.createElement("path",oi({},Ae(s,!0),{fill:"none",d:is(a,i)})):null)}var m=is(n,i);return R.createElement("path",oi({},Ae(s,!0),{fill:m.slice(-1)==="Z"?s.fill:"none",className:l,d:m}))};function kg(){return kg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kg.apply(this,arguments)}var tl=function(t){var n=t.cx,r=t.cy,a=t.r,i=t.className,s=je("recharts-dot",i);return n===+n&&r===+r&&a===+a?R.createElement("circle",kg({},Ae(t,!1),Tc(t),{className:s,cx:n,cy:r,r:a})):null};function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}var Az=["x","y","top","left","width","height","className"];function Eg(){return Eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eg.apply(this,arguments)}function s4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s4(Object(n),!0).forEach(function(r){Oz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oz(e,t,n){return t=Wz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wz(e){var t=Mz(e,"string");return js(t)=="symbol"?t:t+""}function Mz(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cz(e,t){if(e==null)return{};var n=kz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Ez=function(t,n,r,a,i,s){return"M".concat(t,",").concat(i,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},Tz=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.top,l=s===void 0?0:s,p=t.left,f=p===void 0?0:p,m=t.width,d=m===void 0?0:m,v=t.height,y=v===void 0?0:v,x=t.className,I=Cz(t,Az),b=_z({x:r,y:i,top:l,left:f,width:d,height:y},I);return!le(r)||!le(i)||!le(d)||!le(y)||!le(l)||!le(f)?null:R.createElement("path",Eg({},Ae(b,!0),{className:je("recharts-cross",x),d:Ez(r,i,d,y,l,f)}))},Zm,l4;function Nz(){if(l4)return Zm;l4=1;var e=o0(),t=cO(),n=_r();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return Zm=r,Zm}var Rz=Nz();const jz=Xe(Rz);var Jm,c4;function Hz(){if(c4)return Jm;c4=1;var e=o0(),t=_r(),n=pO();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return Jm=r,Jm}var Dz=Hz();const $z=Xe(Dz);var Lz=["cx","cy","angle","ticks","axisLine"],Fz=["ticks","tick","angle","tickFormatter","stroke"];function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function p4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p4(Object(n),!0).forEach(function(r){l0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f4(e,t){if(e==null)return{};var n=qz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XO(r.key),r)}}function Uz(e,t,n){return t&&d4(e.prototype,t),n&&d4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vz(e,t,n){return t=dp(t),Gz(e,YO()?Reflect.construct(t,n||[],dp(e).constructor):t.apply(e,n))}function Gz(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Kz(e)}function Kz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YO=function(){return!!e})()}function dp(e){return dp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dp(e)}function Qz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Tg(e,t)}function Tg(e,t){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,t)}function l0(e,t,n){return t=XO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XO(e){var t=Yz(e,"string");return Si(t)=="symbol"?t:t+""}function Yz(e,t){if(Si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var c0=(function(e){function t(){return zz(this,t),Vz(this,t,arguments)}return Qz(t,e),Uz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,l=i.cx,p=i.cy;return ot(l,p,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,p=jz(l,function(m){return m.coordinate||0}),f=$z(l,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:p.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,p=r.axisLine,f=f4(r,Lz),m=l.reduce(function(x,I){return[Math.min(x[0],I.coordinate),Math.max(x[1],I.coordinate)]},[1/0,-1/0]),d=ot(a,i,m[0],s),v=ot(a,i,m[1],s),y=ro(ro(ro({},Ae(f,!1)),{},{fill:"none"},Ae(p,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return R.createElement("line",us({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.angle,p=a.tickFormatter,f=a.stroke,m=f4(a,Fz),d=this.getTickTextAnchor(),v=Ae(m,!1),y=Ae(s,!1),x=i.map(function(I,b){var S=r.getTickValueCoord(I),A=ro(ro(ro(ro({textAnchor:d,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},S),{},{payload:I});return R.createElement(De,us({className:je("recharts-polar-radius-axis-tick",DO(s)),key:"tick-".concat(I.coordinate)},Ta(r.props,I,b)),t.renderTickItem(s,A,p?p(I.value,b):I.value))});return R.createElement(De,{className:"recharts-polar-radius-axis-ticks"},x)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:R.createElement(De,{className:je("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),qt.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,us({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(X.PureComponent);l0(c0,"displayName","PolarRadiusAxis");l0(c0,"axisType","radiusAxis");l0(c0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function h4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h4(Object(n),!0).forEach(function(r){p0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,JO(r.key),r)}}function Zz(e,t,n){return t&&m4(e.prototype,t),n&&m4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jz(e,t,n){return t=hp(t),eU(e,ZO()?Reflect.construct(t,n||[],hp(e).constructor):t.apply(e,n))}function eU(e,t){if(t&&(Ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tU(e)}function tU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ZO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ZO=function(){return!!e})()}function hp(e){return hp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hp(e)}function nU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ng(e,t)}function Ng(e,t){return Ng=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ng(e,t)}function p0(e,t,n){return t=JO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function JO(e){var t=rU(e,"string");return Ai(t)=="symbol"?t:t+""}function rU(e,t){if(Ai(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var aU=Math.PI/180,v4=1e-5,f0=(function(e){function t(){return Xz(this,t),Jz(this,t,arguments)}return nU(t,e),Zz(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,l=a.radius,p=a.orientation,f=a.tickSize,m=f||8,d=ot(i,s,l,r.coordinate),v=ot(i,s,l+(p==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*aU),s;return i>v4?s=a==="outer"?"start":"end":i<-v4?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,l=r.axisLine,p=r.axisLineType,f=ao(ao({},Ae(this.props,!1)),{},{fill:"none"},Ae(l,!1));if(p==="circle")return R.createElement(tl,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var m=this.props.ticks,d=m.map(function(v){return ot(a,i,s,v.coordinate)});return R.createElement(Sz,so({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.tickLine,p=a.tickFormatter,f=a.stroke,m=Ae(this.props,!1),d=Ae(s,!1),v=ao(ao({},m),{},{fill:"none"},Ae(l,!1)),y=i.map(function(x,I){var b=r.getTickLineCoord(x),S=r.getTickTextAnchor(x),A=ao(ao(ao({textAnchor:S},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:x,x:b.x2,y:b.y2});return R.createElement(De,so({className:je("recharts-polar-angle-axis-tick",DO(s)),key:"tick-".concat(x.coordinate)},Ta(r.props,x,I)),l&&R.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,b)),s&&t.renderTickItem(s,A,p?p(x.value,I):x.value))});return R.createElement(De,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:R.createElement(De,{className:je("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(X.PureComponent);p0(f0,"displayName","PolarAngleAxis");p0(f0,"axisType","angleAxis");p0(f0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var ev,g4;function oU(){if(g4)return ev;g4=1;var e=c_(),t=e(Object.getPrototypeOf,Object);return ev=t,ev}var tv,y4;function iU(){if(y4)return tv;y4=1;var e=Yr(),t=oU(),n=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,l=i.hasOwnProperty,p=s.call(Object);function f(m){if(!n(m)||e(m)!=r)return!1;var d=t(m);if(d===null)return!0;var v=l.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==p}return tv=f,tv}var uU=iU();const sU=Xe(uU);var nv,b4;function lU(){if(b4)return nv;b4=1;var e=Yr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return nv=r,nv}var cU=lU();const pU=Xe(cU);function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}function mp(){return mp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mp.apply(this,arguments)}function fU(e,t){return vU(e)||mU(e,t)||hU(e,t)||dU()}function dU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hU(e,t){if(e){if(typeof e=="string")return I4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I4(e,t)}}function I4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function vU(e){if(Array.isArray(e))return e}function B4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function x4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B4(Object(n),!0).forEach(function(r){gU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gU(e,t,n){return t=yU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yU(e){var t=bU(e,"string");return Hs(t)=="symbol"?t:t+""}function bU(e,t){if(Hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var w4=function(t,n,r,a,i){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+i),l+="L ".concat(t+r-s/2-a,",").concat(n+i),l+="L ".concat(t,",").concat(n," Z"),l},IU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},BU=function(t){var n=x4(x4({},IU),t),r=X.useRef(),a=X.useState(-1),i=fU(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var _=r.current.getTotalLength();_&&l(_)}catch{}},[]);var p=n.x,f=n.y,m=n.upperWidth,d=n.lowerWidth,v=n.height,y=n.className,x=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isUpdateAnimationActive;if(p!==+p||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var A=je("recharts-trapezoid",y);return S?R.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:p,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:p,y:f},duration:I,animationEasing:x,isActive:S},function(_){var M=_.upperWidth,w=_.lowerWidth,O=_.height,E=_.x,P=_.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:x},R.createElement("path",mp({},Ae(n,!0),{className:A,d:w4(E,P,M,w,O),ref:r})))}):R.createElement("g",null,R.createElement("path",mp({},Ae(n,!0),{className:A,d:w4(p,f,m,d,v)})))},xU=["option","shapeType","propTransformer","activeClassName","isActive"];function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function wU(e,t){if(e==null)return{};var n=PU(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PU(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function P4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P4(Object(n),!0).forEach(function(r){SU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SU(e,t,n){return t=AU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AU(e){var t=_U(e,"string");return Ds(t)=="symbol"?t:t+""}function _U(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function OU(e,t){return vp(vp({},t),e)}function WU(e,t){return e==="symbols"}function S4(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return R.createElement(lb,n);case"trapezoid":return R.createElement(BU,n);case"sector":return R.createElement(FO,n);case"symbols":if(WU(t))return R.createElement(Qp,n);break;default:return null}}function MU(e){return X.isValidElement(e)?e.props:e}function gp(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?OU:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,l=e.isActive,p=wU(e,xU),f;if(X.isValidElement(t))f=X.cloneElement(t,vp(vp({},p),MU(t)));else if(ke(t))f=t(p);else if(sU(t)&&!pU(t)){var m=a(t,p);f=R.createElement(S4,{shapeType:n,elementProps:m})}else{var d=p;f=R.createElement(S4,{shapeType:n,elementProps:d})}return l?R.createElement(De,{className:s},f):f}function d0(e,t){return t!=null&&"trapezoids"in e.props}function h0(e,t){return t!=null&&"sectors"in e.props}function $s(e,t){return t!=null&&"points"in e.props}function CU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,i=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&i}function kU(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function EU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function TU(e,t){var n;return d0(e,t)?n=CU:h0(e,t)?n=kU:$s(e,t)&&(n=EU),n}function NU(e,t){var n;return d0(e,t)?n="trapezoids":h0(e,t)?n="sectors":$s(e,t)&&(n="points"),n}function RU(e,t){if(d0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(h0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return $s(e,t)?t.payload:{}}function jU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=NU(n,t),i=RU(n,t),s=r.filter(function(p,f){var m=Na(i,p),d=n.props[a].filter(function(x){var I=TU(n,t);return I(x,t)}),v=n.props[a].indexOf(d[d.length-1]),y=f===v;return m&&y}),l=r.indexOf(s[s.length-1]);return l}var Oc;function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}function A4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A4(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tW(r.key),r)}}function DU(e,t,n){return t&&_4(e.prototype,t),n&&_4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $U(e,t,n){return t=yp(t),LU(e,eW()?Reflect.construct(t,n||[],yp(e).constructor):t.apply(e,n))}function LU(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FU(e)}function FU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eW=function(){return!!e})()}function yp(e){return yp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},yp(e)}function qU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Rg(e,t)}function Rg(e,t){return Rg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Rg(e,t)}function qn(e,t,n){return t=tW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tW(e){var t=zU(e,"string");return _i(t)=="symbol"?t:t+""}function zU(e,t){if(_i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return HU(this,t),r=$U(this,t,[n]),qn(r,"pieRef",null),qn(r,"sectorRefs",[]),qn(r,"id",Ha("recharts-pie-")),qn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),qn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return qU(t,e),DU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,l=i.labelLine,p=i.dataKey,f=i.valueKey,m=Ae(this.props,!1),d=Ae(s,!1),v=Ae(l,!1),y=s&&s.offsetRadius||20,x=r.map(function(I,b){var S=(I.startAngle+I.endAngle)/2,A=ot(I.cx,I.cy,I.outerRadius+y,S),_=rt(rt(rt(rt({},m),I),{},{stroke:"none"},d),{},{index:b,textAnchor:t.getTextAnchor(A.x,I.cx)},A),M=rt(rt(rt(rt({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[ot(I.cx,I.cy,I.outerRadius,S),A]}),w=p;return Ee(p)&&Ee(f)?w="value":Ee(p)&&(w=f),R.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},l&&t.renderLabelLineItem(l,M,"line"),t.renderLabelItem(s,_,lt(I,w)))});return R.createElement(De,{className:"recharts-pie-labels"},x)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,l=i.blendStroke,p=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=p&&a.hasActiveIndex()?p:null,y=d?s:v,x=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return R.createElement(De,ii({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ta(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),R.createElement(gp,ii({option:y,isActive:d,shapeType:"sector"},x)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return R.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(x){var I=x.t,b=[],S=i&&i[0],A=S.startAngle;return i.forEach(function(_,M){var w=v&&v[M],O=M>0?Wn(_,"paddingAngle",0):0;if(w){var E=ht(w.endAngle-w.startAngle,_.endAngle-_.startAngle),P=rt(rt({},_),{},{startAngle:A+O,endAngle:A+E(I)+O});b.push(P),A=P.endAngle}else{var C=_.endAngle,N=_.startAngle,H=ht(0,C-N),T=H(I),$=rt(rt({},_),{},{startAngle:A+O,endAngle:A+T+O});b.push($),A=$.endAngle}}),R.createElement(De,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,l=a.className,p=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,x=this.state.isAnimationFinished;if(i||!s||!s.length||!le(f)||!le(m)||!le(d)||!le(v))return null;var I=je("recharts-pie",l);return R.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),p&&this.renderLabels(s),qt.renderCallByParent(this.props,null,!1),(!y||x)&&sr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(R.isValidElement(r))return R.cloneElement(r,a);if(ke(r))return r(a);var s=je("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return R.createElement(ka,ii({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(R.isValidElement(r))return R.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),R.isValidElement(s)))return s;var l=je("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return R.createElement(go,ii({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(X.PureComponent);Oc=ea;qn(ea,"displayName","Pie");qn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});qn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=Ae(e,!1),a=sn(n,Ys);return t&&t.length?t.map(function(i,s){return rt(rt(rt({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rt(rt({},r),i.props)}):[]});qn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,i=t.height,s=HO(a,i),l=r+on(e.cx,a,a/2),p=n+on(e.cy,i,i/2),f=on(e.innerRadius,s,0),m=on(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:l,cy:p,innerRadius:f,outerRadius:m,maxRadius:d}});qn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=Oc.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,l=r.endAngle,p=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),x=Oc.parseCoordinateOfPie(r,n),I=Oc.parseDeltaAngle(s,l),b=Math.abs(I),S=f;Ee(f)&&Ee(d)?(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ee(f)&&(ur(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var A=a.filter(function(P){return lt(P,S,0)!==0}).length,_=(b>=360?A:A-1)*p,M=b-A*y-_,w=a.reduce(function(P,C){var N=lt(C,S,0);return P+(le(N)?N:0)},0),O;if(w>0){var E;O=a.map(function(P,C){var N=lt(P,S,0),H=lt(P,m,C),T=(le(N)?N:0)/w,$;C?$=E.endAngle+an(I)*p*(N!==0?1:0):$=s;var G=$+an(I)*((N!==0?y:0)+T*M),U=($+G)/2,z=(x.innerRadius+x.outerRadius)/2,Q=[{name:H,value:N,payload:P,dataKey:S,type:v}],L=ot(x.cx,x.cy,z,U);return E=rt(rt(rt({percent:T,cornerRadius:i,name:H,tooltipPayload:Q,midAngle:U,middleRadius:z,tooltipPosition:L},P),x),{},{value:lt(P,S),startAngle:$,endAngle:G,payload:P,paddingAngle:an(I)*p}),E})}return rt(rt({},x),{},{sectors:O,data:a})});var rv,O4;function UU(){if(O4)return rv;O4=1;var e=Math.ceil,t=Math.max;function n(r,a,i,s){for(var l=-1,p=t(e((a-r)/(i||1)),0),f=Array(p);p--;)f[s?p:++l]=r,r+=i;return f}return rv=n,rv}var av,W4;function nW(){if(W4)return av;W4=1;var e=A_(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var i=a<0?-1:1;return i*n}return a===a?a:0}return av=r,av}var ov,M4;function VU(){if(M4)return ov;M4=1;var e=UU(),t=Zp(),n=nW();function r(a){return function(i,s,l){return l&&typeof l!="number"&&t(i,s,l)&&(s=l=void 0),i=n(i),s===void 0?(s=i,i=0):s=n(s),l=l===void 0?i<s?1:-1:n(l),e(i,s,l,a)}}return ov=r,ov}var iv,C4;function GU(){if(C4)return iv;C4=1;var e=VU(),t=e();return iv=t,iv}var KU=GU();const bp=Xe(KU);function Ls(e){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ls(e)}function k4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k4(Object(n),!0).forEach(function(r){rW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rW(e,t,n){return t=QU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QU(e){var t=YU(e,"string");return Ls(t)=="symbol"?t:t+""}function YU(e,t){if(Ls(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var XU=["Webkit","Moz","O","ms"],ZU=function(t,n){var r=t.replace(/(\w)/,function(i){return i.toUpperCase()}),a=XU.reduce(function(i,s){return E4(E4({},i),{},rW({},s+r,n))},{});return a[t]=n,a};function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function Ip(){return Ip=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ip.apply(this,arguments)}function T4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function uv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T4(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oW(r.key),r)}}function eV(e,t,n){return t&&N4(e.prototype,t),n&&N4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function tV(e,t,n){return t=Bp(t),nV(e,aW()?Reflect.construct(t,n||[],Bp(e).constructor):t.apply(e,n))}function nV(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rV(e)}function rV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aW=function(){return!!e})()}function Bp(e){return Bp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Bp(e)}function aV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&jg(e,t)}function jg(e,t){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,t)}function Pn(e,t,n){return t=oW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oW(e){var t=oV(e,"string");return Oi(t)=="symbol"?t:t+""}function oV(e,t){if(Oi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var iV=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,i=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var p=n.length,f=rs().domain(bp(0,p)).range([i,i+s-l]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},R4=function(t){return t.changedTouches&&!!t.changedTouches.length},Wi=(function(e){function t(n){var r;return JU(this,t),r=tV(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:i,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var i=R4(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return aV(t,e),eV(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,l=this.props,p=l.gap,f=l.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=t.getIndexInRange(s,d),x=t.getIndexInRange(s,v);return{startIndex:y-y%p,endIndex:x===m?m:x-x%p}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,l=a.dataKey,p=lt(i[r],l,r);return ke(s)?s(p,r):p}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,l=a.endX,p=this.props,f=p.x,m=p.width,d=p.travellerWidth,v=p.startIndex,y=p.endIndex,x=p.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-l,f+m-d-s):I<0&&(I=Math.max(I,f-s,f-l));var b=this.getIndex({startX:s+I,endX:l+I});(b.startIndex!==v||b.endIndex!==y)&&x&&x(b),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=R4(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,p=a.startX,f=this.state[s],m=this.props,d=m.x,v=m.width,y=m.travellerWidth,x=m.onChange,I=m.gap,b=m.data,S={startX:this.state.startX,endX:this.state.endX},A=r.pageX-i;A>0?A=Math.min(A,d+v-y-f):A<0&&(A=Math.max(A,d-f)),S[s]=f+A;var _=this.getIndex(S),M=_.startIndex,w=_.endIndex,O=function(){var P=b.length-1;return s==="startX"&&(l>p?M%I===0:w%I===0)||l<p&&w===P||s==="endX"&&(l>p?w%I===0:M%I===0)||l>p&&w===P};this.setState(Pn(Pn({},s,f+A),"brushMoveStartX",r.pageX),function(){x&&O()&&x(_)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,l=s.scaleValues,p=s.startX,f=s.endX,m=this.state[a],d=l.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=l.length)){var y=l[v];a==="startX"&&y>=f||a==="endX"&&y<=p||this.setState(Pn({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.fill,f=r.stroke;return R.createElement("rect",{stroke:f,fill:p,x:a,y:i,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.data,f=r.children,m=r.padding,d=X.Children.only(f);return d?R.cloneElement(d,{x:a,y:i,width:s,height:l,margin:m,compact:!0,data:p}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,l=this,p=this.props,f=p.y,m=p.travellerWidth,d=p.height,v=p.traveller,y=p.ariaLabel,x=p.data,I=p.startIndex,b=p.endIndex,S=Math.max(r,this.props.x),A=uv(uv({},Ae(this.props,!1)),{},{x:S,y:f,width:m,height:d}),_=y||"Min value: ".concat((i=x[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=x[b])===null||s===void 0?void 0:s.name);return R.createElement(De,{tabIndex:0,role:"slider","aria-label":_,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,A))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,l=i.height,p=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return R.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:p,fillOpacity:.2,x:m,y:s,width:d,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,l=r.height,p=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,y=5,x={pointerEvents:"none",fill:f};return R.createElement(De,{className:"recharts-brush-texts"},R.createElement(go,Ip({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:s+l/2},x),this.getTextOfTick(a)),R.createElement(go,Ip({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+p+y,y:s+l/2},x),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,l=r.x,p=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,x=v.endX,I=v.isTextActive,b=v.isSlideMoving,S=v.isTravellerMoving,A=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(p)||!le(f)||!le(m)||f<=0||m<=0)return null;var _=je("recharts-brush",i),M=R.Children.count(s)===1,w=ZU("userSelect","none");return R.createElement(De,{className:_,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),M&&this.renderPanorama(),this.renderSlide(y,x),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(x,"endX"),(I||b||S||A||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,l=r.height,p=r.stroke,f=Math.floor(i+l/2)-1;return R.createElement(R.Fragment,null,R.createElement("rect",{x:a,y:i,width:s,height:l,fill:p,stroke:"none"}),R.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),R.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return R.isValidElement(r)?i=R.cloneElement(r,a):ke(r)?i=r(a):i=t.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,l=r.x,p=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return uv({prevData:i,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s},i&&i.length?iV({data:i,width:s,x:l,travellerWidth:p,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||p!==a.prevTravellerWidth)){a.scale.range([l,l+s-p]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:p,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,l=i-1;l-s>1;){var p=Math.floor((s+l)/2);r[p]>a?l=p:s=p}return a>=r[l]?l:s}}])})(X.PureComponent);Pn(Wi,"displayName","Brush");Pn(Wi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var sv,j4;function uV(){if(j4)return sv;j4=1;var e=Ty();function t(n,r){var a;return e(n,function(i,s,l){return a=r(i,s,l),!a}),!!a}return sv=t,sv}var lv,H4;function sV(){if(H4)return lv;H4=1;var e=r_(),t=_r(),n=uV(),r=yn(),a=Zp();function i(s,l,p){var f=r(s)?e:n;return p&&a(s,l,p)&&(l=void 0),f(s,t(l,3))}return lv=i,lv}var lV=sV();const cV=Xe(lV);var wr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},cv,D4;function pV(){if(D4)return cv;D4=1;var e=B_();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return cv=t,cv}var pv,$4;function fV(){if($4)return pv;$4=1;var e=pV(),t=b_(),n=_r();function r(a,i){var s={};return i=n(i,3),t(a,function(l,p,f){e(s,p,i(l,p,f))}),s}return pv=r,pv}var dV=fV();const hV=Xe(dV);var fv,L4;function mV(){if(L4)return fv;L4=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return fv=e,fv}var dv,F4;function vV(){if(F4)return dv;F4=1;var e=Ty();function t(n,r){var a=!0;return e(n,function(i,s,l){return a=!!r(i,s,l),a}),a}return dv=t,dv}var hv,q4;function gV(){if(q4)return hv;q4=1;var e=mV(),t=vV(),n=_r(),r=yn(),a=Zp();function i(s,l,p){var f=r(s)?e:t;return p&&a(s,l,p)&&(l=void 0),f(s,n(l,3))}return hv=i,hv}var yV=gV();const iW=Xe(yV);var bV=["x","y"];function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function Hg(){return Hg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hg.apply(this,arguments)}function z4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z4(Object(n),!0).forEach(function(r){IV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IV(e,t,n){return t=BV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BV(e){var t=xV(e,"string");return Fs(t)=="symbol"?t:t+""}function xV(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wV(e,t){if(e==null)return{};var n=PV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function SV(e,t){var n=e.x,r=e.y,a=wV(e,bV),i="".concat(n),s=parseInt(i,10),l="".concat(r),p=parseInt(l,10),f="".concat(t.height||a.height),m=parseInt(f,10),d="".concat(t.width||a.width),v=parseInt(d,10);return Xu(Xu(Xu(Xu(Xu({},t),a),s?{x:s}:{}),p?{y:p}:{}),{},{height:m,width:v,name:t.name,radius:t.radius})}function U4(e){return R.createElement(gp,Hg({shapeType:"rectangle",propTransformer:SV,activeClassName:"recharts-active-bar"},e))}var AV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var i=typeof r=="number";return i?t(r,a):(i||bo(),n)}},_V=["value","background"],uW;function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function OV(e,t){if(e==null)return{};var n=WV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function WV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function xp(){return xp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xp.apply(this,arguments)}function V4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V4(Object(n),!0).forEach(function(r){Oa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,lW(r.key),r)}}function CV(e,t,n){return t&&G4(e.prototype,t),n&&G4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kV(e,t,n){return t=wp(t),EV(e,sW()?Reflect.construct(t,n||[],wp(e).constructor):t.apply(e,n))}function EV(e,t){if(t&&(Mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return TV(e)}function TV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sW=function(){return!!e})()}function wp(e){return wp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},wp(e)}function NV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Dg(e,t)}function Dg(e,t){return Dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dg(e,t)}function Oa(e,t,n){return t=lW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lW(e){var t=RV(e,"string");return Mi(t)=="symbol"?t:t+""}function RV(e,t){if(Mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function t(){var n;MV(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=kV(this,t,[].concat(a)),Oa(n,"state",{isAnimationFinished:!1}),Oa(n,"id",Ha("recharts-bar-")),Oa(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),Oa(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return NV(t,e),CV(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.dataKey,p=i.activeIndex,f=i.activeBar,m=Ae(this.props,!1);return r&&r.map(function(d,v){var y=v===p,x=y?f:s,I=Wt(Wt(Wt({},m),d),{},{isActive:y,option:x,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return R.createElement(De,xp({className:"recharts-bar-rectangle"},Ta(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),R.createElement(U4,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,l=a.isAnimationActive,p=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return R.createElement(Kn,{begin:p,duration:f,isActive:l,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var x=y.t,I=i.map(function(b,S){var A=v&&v[S];if(A){var _=ht(A.x,b.x),M=ht(A.y,b.y),w=ht(A.width,b.width),O=ht(A.height,b.height);return Wt(Wt({},b),{},{x:_(x),y:M(x),width:w(x),height:O(x)})}if(s==="horizontal"){var E=ht(0,b.height),P=E(x);return Wt(Wt({},b),{},{y:b.y+b.height-P,height:P})}var C=ht(0,b.width),N=C(x);return Wt(Wt({},b),{},{width:N})});return R.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,l=a.activeIndex,p=Ae(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=OV(f,_V);if(!d)return null;var y=Wt(Wt(Wt(Wt(Wt({},v),{},{fill:"#eee"},d),p),Ta(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:m,className:"recharts-bar-background-rectangle"});return R.createElement(U4,xp({key:"background-bar-".concat(m),option:r.props.background,isActive:m===l},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,l=i.xAxis,p=i.yAxis,f=i.layout,m=i.children,d=sn(m,eu);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,y=function(b,S){var A=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:A,errorVal:lt(b,S)}},x={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,x,d.map(function(I){return R.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,l=r.xAxis,p=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,y=r.isAnimationActive,x=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=je("recharts-bar",s),A=l&&l.allowDataOverflow,_=p&&p.allowDataOverflow,M=A||_,w=Ee(I)?this.id:I;return R.createElement(De,{className:S},A||_?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:A?f:f-d/2,y:_?m:m-v/2,width:A?d:d*2,height:_?v:v*2}))):null,R.createElement(De,{className:"recharts-bar-rectangles",clipPath:M?"url(#clipPath-".concat(w,")"):null},x?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(M,w),(!y||b)&&sr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(X.PureComponent);uW=Sr;Oa(Sr,"displayName","Bar");Oa(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Oa(Sr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,l=e.xAxisTicks,p=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=uF(r,n);if(!y)return null;var x=t.layout,I=n.type.defaultProps,b=I!==void 0?Wt(Wt({},I),n.props):n.props,S=b.dataKey,A=b.children,_=b.minPointSize,M=x==="horizontal"?s:i,w=f?M.scale.domain():null,O=hF({numericAxis:M}),E=sn(A,Ys),P=d.map(function(C,N){var H,T,$,G,U,z;f?H=sF(f[m+N],w):(H=lt(C,S),Array.isArray(H)||(H=[O,H]));var Q=AV(_,uW.defaultProps.minPointSize)(H[1],N);if(x==="horizontal"){var L,K=[s.scale(H[0]),s.scale(H[1])],Y=K[0],j=K[1];T=BS({axis:i,ticks:l,bandSize:a,offset:y.offset,entry:C,index:N}),$=(L=j??Y)!==null&&L!==void 0?L:void 0,G=y.size;var F=Y-j;if(U=Number.isNaN(F)?0:F,z={x:T,y:s.y,width:G,height:s.height},Math.abs(Q)>0&&Math.abs(U)<Math.abs(Q)){var J=an(U||Q)*(Math.abs(Q)-Math.abs(U));$-=J,U+=J}}else{var ue=[i.scale(H[0]),i.scale(H[1])],he=ue[0],ge=ue[1];if(T=he,$=BS({axis:s,ticks:p,bandSize:a,offset:y.offset,entry:C,index:N}),G=ge-he,U=y.size,z={x:i.x,y:$,width:i.width,height:U},Math.abs(Q)>0&&Math.abs(G)<Math.abs(Q)){var ye=an(G||Q)*(Math.abs(Q)-Math.abs(G));G+=ye}}return Wt(Wt(Wt({},C),{},{x:T,y:$,width:G,height:U,value:f?H:H[1],payload:C,background:z},E&&E[N]&&E[N].props),{},{tooltipPayload:[RO(n,C)],tooltipPosition:{x:T+G/2,y:$+U/2}})});return Wt({data:P,layout:x},v)});function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function jV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,cW(r.key),r)}}function HV(e,t,n){return t&&K4(e.prototype,t),n&&K4(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q4(Object(n),!0).forEach(function(r){m0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m0(e,t,n){return t=cW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cW(e){var t=DV(e,"string");return qs(t)=="symbol"?t:t+""}function DV(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cb=function(t,n,r,a,i){var s=t.width,l=t.height,p=t.layout,f=t.children,m=Object.keys(n),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Sr);return m.reduce(function(y,x){var I=n[x],b=I.orientation,S=I.domain,A=I.padding,_=A===void 0?{}:A,M=I.mirror,w=I.reversed,O="".concat(b).concat(M?"Mirror":""),E,P,C,N,H;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var T=S[1]-S[0],$=1/0,G=I.categoricalDomain.sort();if(G.forEach(function(ue,he){he>0&&($=Math.min((ue||0)-(G[he-1]||0),$))}),Number.isFinite($)){var U=$/T,z=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(E=U*z/2),I.padding==="no-gap"){var Q=on(t.barCategoryGap,U*z),L=U*z/2;E=L-Q-(L-Q)/z*Q}}}a==="xAxis"?P=[r.left+(_.left||0)+(E||0),r.left+r.width-(_.right||0)-(E||0)]:a==="yAxis"?P=p==="horizontal"?[r.top+r.height-(_.bottom||0),r.top+(_.top||0)]:[r.top+(_.top||0)+(E||0),r.top+r.height-(_.bottom||0)-(E||0)]:P=I.range,w&&(P=[P[1],P[0]]);var K=kO(I,i,v),Y=K.scale,j=K.realScaleType;Y.domain(S).range(P),EO(Y);var F=TO(Y,ar(ar({},I),{},{realScaleType:j}));a==="xAxis"?(H=b==="top"&&!M||b==="bottom"&&M,C=r.left,N=d[O]-H*I.height):a==="yAxis"&&(H=b==="left"&&!M||b==="right"&&M,C=d[O]-H*I.width,N=r.top);var J=ar(ar(ar({},I),F),{},{realScaleType:j,x:C,y:N,scale:Y,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return J.bandSize=op(J,F),!I.hide&&a==="xAxis"?d[O]+=(H?-1:1)*J.height:I.hide||(d[O]+=(H?-1:1)*J.width),ar(ar({},y),{},m0({},x,J))},{})},pW=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},$V=function(t){var n=t.x1,r=t.y1,a=t.x2,i=t.y2;return pW({x:n,y:r},{x:a,y:i})},fW=(function(){function e(t){jV(this,e),this.scale=t}return HV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(n!==void 0){if(i)switch(i){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var p=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+p}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?n>=a&&n<=i:n>=i&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();m0(fW,"EPS",1e-4);var pb=function(t){var n=Object.keys(t).reduce(function(r,a){return ar(ar({},r),{},m0({},a,fW.create(t[a])))},{});return ar(ar({},n),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,l=i.position;return hV(a,function(p,f){return n[f].apply(p,{bandAware:s,position:l})})},isInRange:function(a){return iW(a,function(i,s){return n[s].isInRange(i)})}})};function LV(e){return(e%180+180)%180}var FV=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=LV(a),s=i*Math.PI/180,l=Math.atan(r/n),p=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(p)},mv,Y4;function qV(){if(Y4)return mv;Y4=1;var e=_r(),t=Qs(),n=Yp();function r(a){return function(i,s,l){var p=Object(i);if(!t(i)){var f=e(s,3);i=n(i),s=function(d){return f(p[d],d,p)}}var m=a(i,s,l);return m>-1?p[f?i[m]:m]:void 0}}return mv=r,mv}var vv,X4;function zV(){if(X4)return vv;X4=1;var e=nW();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return vv=t,vv}var gv,Z4;function UV(){if(Z4)return gv;Z4=1;var e=h_(),t=_r(),n=zV(),r=Math.max;function a(i,s,l){var p=i==null?0:i.length;if(!p)return-1;var f=l==null?0:n(l);return f<0&&(f=r(p+f,0)),e(i,t(s,3),f)}return gv=a,gv}var yv,J4;function VV(){if(J4)return yv;J4=1;var e=qV(),t=UV(),n=e(t);return yv=n,yv}var GV=VV();const KV=Xe(GV);var QV=WA();const YV=Xe(QV);var XV=YV(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),fb=X.createContext(void 0),db=X.createContext(void 0),dW=X.createContext(void 0),hW=X.createContext({}),mW=X.createContext(void 0),vW=X.createContext(0),gW=X.createContext(0),e3=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,i=n.offset,s=t.clipPathId,l=t.children,p=t.width,f=t.height,m=XV(i);return R.createElement(fb.Provider,{value:r},R.createElement(db.Provider,{value:a},R.createElement(hW.Provider,{value:i},R.createElement(dW.Provider,{value:m},R.createElement(mW.Provider,{value:s},R.createElement(vW.Provider,{value:f},R.createElement(gW.Provider,{value:p},l)))))))},ZV=function(){return X.useContext(mW)},yW=function(t){var n=X.useContext(fb);n==null&&bo();var r=n[t];return r==null&&bo(),r},JV=function(){var t=X.useContext(fb);return Aa(t)},eG=function(){var t=X.useContext(db),n=KV(t,function(r){return iW(r.domain,Number.isFinite)});return n||Aa(t)},bW=function(t){var n=X.useContext(db);n==null&&bo();var r=n[t];return r==null&&bo(),r},tG=function(){var t=X.useContext(dW);return t},nG=function(){return X.useContext(hW)},hb=function(){return X.useContext(gW)},mb=function(){return X.useContext(vW)};function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function rG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function aG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BW(r.key),r)}}function oG(e,t,n){return t&&aG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function iG(e,t,n){return t=Pp(t),uG(e,IW()?Reflect.construct(t,n||[],Pp(e).constructor):t.apply(e,n))}function uG(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sG(e)}function sG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IW=function(){return!!e})()}function Pp(e){return Pp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pp(e)}function lG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$g(e,t)}function $g(e,t){return $g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},$g(e,t)}function t3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function n3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?t3(Object(n),!0).forEach(function(r){vb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vb(e,t,n){return t=BW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BW(e){var t=cG(e,"string");return Ci(t)=="symbol"?t:t+""}function cG(e,t){if(Ci(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function pG(e,t){return mG(e)||hG(e,t)||dG(e,t)||fG()}function fG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dG(e,t){if(e){if(typeof e=="string")return r3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r3(e,t)}}function r3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function mG(e){if(Array.isArray(e))return e}function Lg(){return Lg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lg.apply(this,arguments)}var vG=function(t,n){var r;return R.isValidElement(t)?r=R.cloneElement(t,n):ke(t)?r=t(n):r=R.createElement("line",Lg({},n,{className:"recharts-reference-line-line"})),r},gG=function(t,n,r,a,i,s,l,p,f){var m=i.x,d=i.y,v=i.width,y=i.height;if(r){var x=f.y,I=t.y.apply(x,{position:s});if(wr(f,"discard")&&!t.y.isInRange(I))return null;var b=[{x:m+v,y:I},{x:m,y:I}];return p==="left"?b.reverse():b}if(n){var S=f.x,A=t.x.apply(S,{position:s});if(wr(f,"discard")&&!t.x.isInRange(A))return null;var _=[{x:A,y:d+y},{x:A,y:d}];return l==="top"?_.reverse():_}if(a){var M=f.segment,w=M.map(function(O){return t.apply(O,{position:s})});return wr(f,"discard")&&cV(w,function(O){return!t.isInRange(O)})?null:w}return null};function yG(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,l=e.className,p=e.alwaysShow,f=ZV(),m=yW(a),d=bW(i),v=tG();if(!f||!v)return null;ur(p===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=pb({x:m.scale,y:d.scale}),x=Rt(t),I=Rt(n),b=r&&r.length===2,S=gG(y,x,I,b,v,e.position,m.orientation,d.orientation,e);if(!S)return null;var A=pG(S,2),_=A[0],M=_.x,w=_.y,O=A[1],E=O.x,P=O.y,C=wr(e,"hidden")?"url(#".concat(f,")"):void 0,N=n3(n3({clipPath:C},Ae(e,!0)),{},{x1:M,y1:w,x2:E,y2:P});return R.createElement(De,{className:je("recharts-reference-line",l)},vG(s,N),qt.renderCallByParent(e,$V({x1:M,y1:w,x2:E,y2:P})))}var gb=(function(e){function t(){return rG(this,t),iG(this,t,arguments)}return lG(t,e),oG(t,[{key:"render",value:function(){return R.createElement(yG,this.props)}}])})(R.Component);vb(gb,"displayName","ReferenceLine");vb(gb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function Fg(){return Fg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fg.apply(this,arguments)}function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function a3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function o3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?a3(Object(n),!0).forEach(function(r){v0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function IG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wW(r.key),r)}}function BG(e,t,n){return t&&IG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function xG(e,t,n){return t=Sp(t),wG(e,xW()?Reflect.construct(t,n||[],Sp(e).constructor):t.apply(e,n))}function wG(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PG(e)}function PG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xW=function(){return!!e})()}function Sp(e){return Sp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sp(e)}function SG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qg(e,t)}function qg(e,t){return qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},qg(e,t)}function v0(e,t,n){return t=wW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wW(e){var t=AG(e,"string");return ki(t)=="symbol"?t:t+""}function AG(e,t){if(ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var _G=function(t){var n=t.x,r=t.y,a=t.xAxis,i=t.yAxis,s=pb({x:a.scale,y:i.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return wr(t,"discard")&&!s.isInRange(l)?null:l},g0=(function(e){function t(){return bG(this,t),xG(this,t,arguments)}return SG(t,e),BG(t,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,l=r.alwaysShow,p=r.clipPathId,f=Rt(a),m=Rt(i);if(ur(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=_G(this.props);if(!d)return null;var v=d.x,y=d.y,x=this.props,I=x.shape,b=x.className,S=wr(this.props,"hidden")?"url(#".concat(p,")"):void 0,A=o3(o3({clipPath:S},Ae(this.props,!0)),{},{cx:v,cy:y});return R.createElement(De,{className:je("recharts-reference-dot",b)},t.renderDot(I,A),qt.renderCallByParent(this.props,{x:v-s,y:y-s,width:2*s,height:2*s}))}}])})(R.Component);v0(g0,"displayName","ReferenceDot");v0(g0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});v0(g0,"renderDot",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(tl,Fg({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function zg(){return zg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zg.apply(this,arguments)}function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function i3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function u3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i3(Object(n),!0).forEach(function(r){y0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function OG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function WG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SW(r.key),r)}}function MG(e,t,n){return t&&WG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function CG(e,t,n){return t=Ap(t),kG(e,PW()?Reflect.construct(t,n||[],Ap(e).constructor):t.apply(e,n))}function kG(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EG(e)}function EG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PW=function(){return!!e})()}function Ap(e){return Ap=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ap(e)}function TG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ug(e,t)}function Ug(e,t){return Ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ug(e,t)}function y0(e,t,n){return t=SW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SW(e){var t=NG(e,"string");return Ei(t)=="symbol"?t:t+""}function NG(e,t){if(Ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var RG=function(t,n,r,a,i){var s=i.x1,l=i.x2,p=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=pb({x:m.scale,y:d.scale}),y={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(p,{position:"start"}):v.y.rangeMin},x={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(x))?null:pW(y,x)},b0=(function(e){function t(){return OG(this,t),CG(this,t,arguments)}return TG(t,e),MG(t,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,l=r.y2,p=r.className,f=r.alwaysShow,m=r.clipPathId;ur(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Rt(a),v=Rt(i),y=Rt(s),x=Rt(l),I=this.props.shape;if(!d&&!v&&!y&&!x&&!I)return null;var b=RG(d,v,y,x,this.props);if(!b&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return R.createElement(De,{className:je("recharts-reference-area",p)},t.renderRect(I,u3(u3({clipPath:S},Ae(this.props,!0)),b)),qt.renderCallByParent(this.props,b))}}])})(R.Component);y0(b0,"displayName","ReferenceArea");y0(b0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});y0(b0,"renderRect",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(lb,zg({},t,{className:"recharts-reference-area-rect"})),n});function AW(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function jG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return FV(r,n)}function HG(e,t,n){var r=n==="width",a=e.x,i=e.y,s=e.width,l=e.height;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function _p(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function DG(e,t){return AW(e,t+1)}function $G(e,t,n,r,a){for(var i=(r||[]).slice(),s=t.start,l=t.end,p=0,f=1,m=s,d=function(){var x=r==null?void 0:r[p];if(x===void 0)return{v:AW(r,f)};var I=p,b,S=function(){return b===void 0&&(b=n(x,I)),b},A=x.coordinate,_=p===0||_p(e,A,S,m,l);_||(p=0,m=s,f+=1),_&&(m=A+e*(S()/2+a),p+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){LG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LG(e,t,n){return t=FG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FG(e){var t=qG(e,"string");return zs(t)=="symbol"?t:t+""}function qG(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zG(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,l=t.start,p=t.end,f=function(v){var y=i[v],x,I=function(){return x===void 0&&(x=n(y,v)),x};if(v===s-1){var b=e*(y.coordinate+e*I()/2-p);i[v]=y=Jt(Jt({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=Jt(Jt({},y),{},{tickCoord:y.coordinate});var S=_p(e,y.tickCoord,I,l,p);S&&(p=y.tickCoord-e*(I()/2+a),i[v]=Jt(Jt({},y),{},{isShow:!0}))},m=s-1;m>=0;m--)f(m);return i}function UG(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,p=t.start,f=t.end;if(i){var m=r[l-1],d=n(m,l-1),v=e*(m.coordinate+e*d/2-f);s[l-1]=m=Jt(Jt({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var y=_p(e,m.tickCoord,function(){return d},p,f);y&&(f=m.tickCoord-e*(d/2+a),s[l-1]=Jt(Jt({},m),{},{isShow:!0}))}for(var x=i?l-1:l,I=function(A){var _=s[A],M,w=function(){return M===void 0&&(M=n(_,A)),M};if(A===0){var O=e*(_.coordinate-e*w()/2-p);s[A]=_=Jt(Jt({},_),{},{tickCoord:O<0?_.coordinate-O*e:_.coordinate})}else s[A]=_=Jt(Jt({},_),{},{tickCoord:_.coordinate});var E=_p(e,_.tickCoord,w,p,f);E&&(p=_.tickCoord+e*(w()/2+a),s[A]=Jt(Jt({},_),{},{isShow:!0}))},b=0;b<x;b++)I(b);return s}function yb(e,t,n){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,l=e.orientation,p=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(p)||Zr.isSsr)return DG(a,typeof p=="number"&&le(p)?p:0);var v=[],y=l==="top"||l==="bottom"?"width":"height",x=m&&y==="width"?ns(m,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(_,M){var w=ke(f)?f(_.value,M):_.value;return y==="width"?jG(ns(w,{fontSize:t,letterSpacing:n}),x,d):ns(w,{fontSize:t,letterSpacing:n})[y]},b=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=HG(i,b,y);return p==="equidistantPreserveStart"?$G(b,S,I,a,s):(p==="preserveStart"||p==="preserveStartEnd"?v=UG(b,S,I,a,s,p==="preserveStartEnd"):v=zG(b,S,I,a,s),v.filter(function(A){return A.isShow}))}var VG=["viewBox"],GG=["viewBox"],KG=["ticks"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}function l3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?l3(Object(n),!0).forEach(function(r){bb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bv(e,t){if(e==null)return{};var n=QG(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function QG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function YG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OW(r.key),r)}}function XG(e,t,n){return t&&c3(e.prototype,t),n&&c3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZG(e,t,n){return t=Op(t),JG(e,_W()?Reflect.construct(t,n||[],Op(e).constructor):t.apply(e,n))}function JG(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eK(e)}function eK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_W=function(){return!!e})()}function Op(e){return Op=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Op(e)}function tK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vg(e,t)}function Vg(e,t){return Vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vg(e,t)}function bb(e,t,n){return t=OW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OW(e){var t=nK(e,"string");return Ti(t)=="symbol"?t:t+""}function nK(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function t(n){var r;return YG(this,t),r=ZG(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return tK(t,e),XG(t,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=bv(r,VG),l=this.props,p=l.viewBox,f=bv(l,GG);return!li(i,p)||!li(s,f)||!li(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,l=a.width,p=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,y,x,I,b,S,A,_=d?-1:1,M=r.tickSize||m,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=x=r.coordinate,b=s+ +!d*p,I=b-_*M,A=I-_*v,S=w;break;case"left":I=b=r.coordinate,x=i+ +!d*l,y=x-_*M,S=y-_*v,A=w;break;case"right":I=b=r.coordinate,x=i+ +d*l,y=x+_*M,S=y+_*v,A=w;break;default:y=x=r.coordinate,b=s+ +d*p,I=b+_*M,A=I+_*v,S=w;break}return{line:{x1:y,y1:I,x2:x,y2:b},tick:{x:S,y:A}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,p=r.orientation,f=r.mirror,m=r.axisLine,d=rn(rn(rn({},Ae(this.props,!1)),Ae(m,!1)),{},{fill:"none"});if(p==="top"||p==="bottom"){var v=+(p==="top"&&!f||p==="bottom"&&f);d=rn(rn({},d),{},{x1:a,y1:i+v*l,x2:a+s,y2:i+v*l})}else{var y=+(p==="left"&&!f||p==="right"&&f);d=rn(rn({},d),{},{x1:a+y*s,y1:i,x2:a+y*s,y2:i+l})}return R.createElement("line",ui({},d,{className:je("recharts-cartesian-axis-line",Wn(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,l=this.props,p=l.tickLine,f=l.stroke,m=l.tick,d=l.tickFormatter,v=l.unit,y=yb(rn(rn({},this.props),{},{ticks:r}),a,i),x=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=Ae(this.props,!1),S=Ae(m,!1),A=rn(rn({},b),{},{fill:"none"},Ae(p,!1)),_=y.map(function(M,w){var O=s.getTickLineCoord(M),E=O.line,P=O.tick,C=rn(rn(rn(rn({textAnchor:x,verticalAnchor:I},b),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:M,visibleTicksCount:y.length,tickFormatter:d});return R.createElement(De,ui({className:"recharts-cartesian-axis-tick",key:"tick-".concat(M.value,"-").concat(M.coordinate,"-").concat(M.tickCoord)},Ta(s.props,M,w)),p&&R.createElement("line",ui({},A,E,{className:je("recharts-cartesian-axis-tick-line",Wn(p,"className"))})),m&&t.renderTickItem(m,C,"".concat(ke(d)?d(M.value,w):M.value).concat(v||"")))});return R.createElement("g",{className:"recharts-cartesian-axis-ticks"},_)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,l=a.height,p=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,y=bv(d,KG),x=v;return ke(p)&&(x=v&&v.length>0?p(this.props):p(y)),s<=0||l<=0||!x||!x.length?null:R.createElement(De,{className:je("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(x,this.state.fontSize,this.state.letterSpacing),qt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,ui({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(X.Component);bb(tu,"displayName","CartesianAxis");bb(tu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var rK=["x1","y1","x2","y2","key"],aK=["offset"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(e)}function p3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p3(Object(n),!0).forEach(function(r){oK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oK(e,t,n){return t=iK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iK(e){var t=uK(e,"string");return Io(t)=="symbol"?t:t+""}function uK(e,t){if(Io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function f3(e,t){if(e==null)return{};var n=sK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var lK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,i=t.y,s=t.width,l=t.height,p=t.ry;return R.createElement("rect",{x:a,y:i,ry:p,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function WW(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,i=t.x2,s=t.y2,l=t.key,p=f3(t,rK),f=Ae(p,!1);f.offset;var m=f3(f,aK);n=R.createElement("line",fo({},m,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:l}))}return n}function cK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,p){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(p),index:p});return WW(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function pK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,p){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(p),index:p});return WW(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function fK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,l=e.horizontalPoints,p=e.horizontal,f=p===void 0?!0:p;if(!f||!t||!t.length)return null;var m=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var x=!m[y+1],I=x?a+s-v:m[y+1]-v;if(I<=0)return null;var b=y%t.length;return R.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:t[b],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function dK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,l=e.width,p=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var x=!m[y+1],I=x?i+l-v:m[y+1]-v;if(I<=0)return null;var b=y%r.length;return R.createElement("rect",{key:"react-".concat(y),x:v,y:s,width:I,height:p,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var hK=function(t,n){var r=t.xAxis,a=t.width,i=t.height,s=t.offset;return CO(yb(en(en(en({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,n)},mK=function(t,n){var r=t.yAxis,a=t.width,i=t.height,s=t.offset;return CO(yb(en(en(en({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,n)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Wp(e){var t,n,r,a,i,s,l=hb(),p=mb(),f=nG(),m=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ti.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=m.x,v=m.y,y=m.width,x=m.height,I=m.syncWithTicks,b=m.horizontalValues,S=m.verticalValues,A=JV(),_=eG();if(!le(y)||y<=0||!le(x)||x<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var M=m.verticalCoordinatesGenerator||hK,w=m.horizontalCoordinatesGenerator||mK,O=m.horizontalPoints,E=m.verticalPoints;if((!O||!O.length)&&ke(w)){var P=b&&b.length,C=w({yAxis:_?en(en({},_),{},{ticks:P?b:_.ticks}):void 0,width:l,height:p,offset:f},P?!0:I);ur(Array.isArray(C),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(C),"]")),Array.isArray(C)&&(O=C)}if((!E||!E.length)&&ke(M)){var N=S&&S.length,H=M({xAxis:A?en(en({},A),{},{ticks:N?S:A.ticks}):void 0,width:l,height:p,offset:f},N?!0:I);ur(Array.isArray(H),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(H),"]")),Array.isArray(H)&&(E=H)}return R.createElement("g",{className:"recharts-cartesian-grid"},R.createElement(lK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),R.createElement(cK,fo({},m,{offset:f,horizontalPoints:O,xAxis:A,yAxis:_})),R.createElement(pK,fo({},m,{offset:f,verticalPoints:E,xAxis:A,yAxis:_})),R.createElement(fK,fo({},m,{horizontalPoints:O})),R.createElement(dK,fo({},m,{verticalPoints:E})))}Wp.displayName="CartesianGrid";var vK=["type","layout","connectNulls","ref"],gK=["key"];function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function d3(e,t){if(e==null)return{};var n=yK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}function h3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h3(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ni(e){return xK(e)||BK(e)||IK(e)||bK()}function bK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IK(e,t){if(e){if(typeof e=="string")return Gg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gg(e,t)}}function BK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xK(e){if(Array.isArray(e))return Gg(e)}function Gg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,CW(r.key),r)}}function PK(e,t,n){return t&&m3(e.prototype,t),n&&m3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function SK(e,t,n){return t=Mp(t),AK(e,MW()?Reflect.construct(t,n||[],Mp(e).constructor):t.apply(e,n))}function AK(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _K(e)}function _K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function MW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(MW=function(){return!!e})()}function Mp(e){return Mp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mp(e)}function OK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kg(e,t)}function Kg(e,t){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,t)}function or(e,t,n){return t=CW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CW(e){var t=WK(e,"string");return Ni(t)=="symbol"?t:t+""}function WK(e,t){if(Ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function t(){var n;wK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=SK(this,t,[].concat(a)),or(n,"state",{isAnimationFinished:!0,totalLength:0}),or(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),or(n,"getStrokeDasharray",function(s,l,p){var f=p.reduce(function(S,A){return S+A});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var m=Math.floor(s/f),d=s%f,v=l-s,y=[],x=0,I=0;x<p.length;I+=p[x],++x)if(I+p[x]>d){y=[].concat(ni(p.slice(0,x)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ni(t.repeat(p,m)),ni(y),b).map(function(S){return"".concat(S,"px")}).join(", ")}),or(n,"id",Ha("recharts-line-")),or(n,"pathRef",function(s){n.mainCurve=s}),or(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),or(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return OK(t,e),PK(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,l=i.xAxis,p=i.yAxis,f=i.layout,m=i.children,d=sn(m,eu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,y,d.map(function(x){return R.cloneElement(x,{key:"bar-".concat(x.props.dataKey),data:s,xAxis:l,yAxis:p,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,p=l.dot,f=l.points,m=l.dataKey,d=Ae(this.props,!1),v=Ae(p,!0),y=f.map(function(I,b){var S=wn(wn(wn({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return t.renderDotItem(p,S)}),x={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return R.createElement(De,ss({className:"recharts-line-dots",key:"dots"},x),y)}},{key:"renderCurveStatically",value:function(r,a,i,s){var l=this.props,p=l.type,f=l.layout,m=l.connectNulls;l.ref;var d=d3(l,vK),v=wn(wn(wn({},Ae(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:p,layout:f,connectNulls:m});return R.createElement(ka,ss({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,p=s.strokeDasharray,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,x=s.animateNewValues,I=s.width,b=s.height,S=this.state,A=S.prevPoints,_=S.totalLength;return R.createElement(Kn,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(M){var w=M.t;if(A){var O=A.length/l.length,E=l.map(function(T,$){var G=Math.floor($*O);if(A[G]){var U=A[G],z=ht(U.x,T.x),Q=ht(U.y,T.y);return wn(wn({},T),{},{x:z(w),y:Q(w)})}if(x){var L=ht(I*2,T.x),K=ht(b/2,T.y);return wn(wn({},T),{},{x:L(w),y:K(w)})}return wn(wn({},T),{},{x:T.x,y:T.y})});return i.renderCurveStatically(E,r,a)}var P=ht(0,_),C=P(w),N;if(p){var H="".concat(p).split(/[,\s]+/gim).map(function(T){return parseFloat(T)});N=i.getStrokeDasharray(C,_,H)}else N=i.generateSimpleStrokeDasharray(_,C);return i.renderCurveStatically(l,r,a,{strokeDasharray:N})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,l=i.isAnimationActive,p=this.state,f=p.prevPoints,m=p.totalLength;return l&&s&&s.length&&(!f&&m>0||!Na(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,p=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,y=a.width,x=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,A=l.length===1,_=je("recharts-line",p),M=f&&f.allowDataOverflow,w=m&&m.allowDataOverflow,O=M||w,E=Ee(b)?this.id:b,P=(r=Ae(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,N=C===void 0?3:C,H=P.strokeWidth,T=H===void 0?2:H,$=TA(s)?s:{},G=$.clipDot,U=G===void 0?!0:G,z=N*2+T;return R.createElement(De,{className:_},M||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(E)},R.createElement("rect",{x:M?v:v-y/2,y:w?d:d-x/2,width:M?y:y*2,height:w?x:x*2})),!U&&R.createElement("clipPath",{id:"clipPath-dots-".concat(E)},R.createElement("rect",{x:v-z/2,y:d-z/2,width:y+z,height:x+z}))):null,!A&&this.renderCurve(O,E),this.renderErrorBar(O,E),(A||s)&&this.renderDots(O,U,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ni(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(ni(s),ni(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(R.isValidElement(r))i=R.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,l=d3(a,gK),p=je("recharts-line-dot",typeof r!="boolean"?r.className:"");i=R.createElement(tl,ss({key:s},l,{className:p}))}return i}}])})(X.PureComponent);or(qr,"displayName","Line");or(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});or(qr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,l=e.bandSize,p=e.displayedData,f=e.offset,m=t.layout,d=p.map(function(v,y){var x=lt(v,s);return m==="horizontal"?{x:wi({axis:n,ticks:a,bandSize:l,entry:v,index:y}),y:Ee(x)?null:r.scale(x),value:x,payload:v}:{x:Ee(x)?null:n.scale(x),y:wi({axis:r,ticks:i,bandSize:l,entry:v,index:y}),value:x,payload:v}});return wn({points:d,layout:m},f)});var MK=["layout","type","stroke","connectNulls","isRange","ref"],CK=["key"],kW;function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function EW(e,t){if(e==null)return{};var n=kK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function v3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v3(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function EK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NW(r.key),r)}}function TK(e,t,n){return t&&g3(e.prototype,t),n&&g3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function NK(e,t,n){return t=Cp(t),RK(e,TW()?Reflect.construct(t,n||[],Cp(e).constructor):t.apply(e,n))}function RK(e,t){if(t&&(Ri(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jK(e)}function jK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(TW=function(){return!!e})()}function Cp(e){return Cp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cp(e)}function HK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qg(e,t)}function Qg(e,t){return Qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qg(e,t)}function Ir(e,t,n){return t=NW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NW(e){var t=DK(e,"string");return Ri(t)=="symbol"?t:t+""}function DK(e,t){if(Ri(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var So=(function(e){function t(){var n;EK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=NK(this,t,[].concat(a)),Ir(n,"state",{isAnimationFinished:!0}),Ir(n,"id",Ha("recharts-area-")),Ir(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return HK(t,e),TK(t,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var p=this.props,f=p.dot,m=p.points,d=p.dataKey,v=Ae(this.props,!1),y=Ae(f,!0),x=m.map(function(b,S){var A=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),y),{},{index:S,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:m});return t.renderDotItem(f,A)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return R.createElement(De,ho({className:"recharts-area-dots"},I),x)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].x,f=s[s.length-1].x,m=r*Math.abs(p-f),d=_a(s.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(_a(i.map(function(v){return v.y||0})),d)),le(d)?R.createElement("rect",{x:p<f?p:p-m,y:0,width:m,height:Math.floor(d+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,p=s[0].y,f=s[s.length-1].y,m=r*Math.abs(p-f),d=_a(s.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(_a(i.map(function(v){return v.x||0})),d)),le(d)?R.createElement("rect",{x:0,y:p<f?p:p-m,width:d+(l?parseInt("".concat(l),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var l=this.props,p=l.layout,f=l.type,m=l.stroke,d=l.connectNulls,v=l.isRange;l.ref;var y=EW(l,MK);return R.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},R.createElement(ka,ho({},Ae(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:p,stroke:"none",className:"recharts-area-area"})),m!=="none"&&R.createElement(ka,ho({},Ae(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&R.createElement(ka,ho({},Ae(this.props,!1),{className:"recharts-area-curve",layout:p,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,p=s.baseLine,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,x=this.state,I=x.prevPoints,b=x.prevBaseLine;return R.createElement(Kn,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var A=S.t;if(I){var _=I.length/l.length,M=l.map(function(P,C){var N=Math.floor(C*_);if(I[N]){var H=I[N],T=ht(H.x,P.x),$=ht(H.y,P.y);return Pa(Pa({},P),{},{x:T(A),y:$(A)})}return P}),w;if(le(p)&&typeof p=="number"){var O=ht(b,p);w=O(A)}else if(Ee(p)||Qi(p)){var E=ht(b,0);w=E(A)}else w=p.map(function(P,C){var N=Math.floor(C*_);if(b[N]){var H=b[N],T=ht(H.x,P.x),$=ht(H.y,P.y);return Pa(Pa({},P),{},{x:T(A),y:$(A)})}return P});return i.renderAreaStatically(M,w,r,a)}return R.createElement(De,null,R.createElement("defs",null,R.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(A))),R.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(l,p,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,l=i.baseLine,p=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return p&&s&&s.length&&(!m&&v>0||!Na(m,s)||!Na(d,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,p=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,y=a.width,x=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,A=l.length===1,_=je("recharts-area",p),M=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,O=M||w,E=Ee(b)?this.id:b,P=(r=Ae(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,N=C===void 0?3:C,H=P.strokeWidth,T=H===void 0?2:H,$=TA(s)?s:{},G=$.clipDot,U=G===void 0?!0:G,z=N*2+T;return R.createElement(De,{className:_},M||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(E)},R.createElement("rect",{x:M?m:m-y/2,y:w?f:f-x/2,width:M?y:y*2,height:w?x:x*2})),!U&&R.createElement("clipPath",{id:"clipPath-dots-".concat(E)},R.createElement("rect",{x:m-z/2,y:f-z/2,width:y+z,height:x+z}))):null,A?null:this.renderArea(O,E),(s||A)&&this.renderDots(O,U,E),(!I||S)&&sr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(X.PureComponent);kW=So;Ir(So,"displayName","Area");Ir(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(So,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,s=t.props.baseValue,l=s??i;if(le(l)&&typeof l=="number")return l;var p=a==="horizontal"?r:n,f=p.scale.domain();if(p.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return l==="dataMin"?d:l==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});Ir(So,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,p=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=t.layout,x=f&&f.length,I=kW.getBaseValue(t,n,r,a),b=y==="horizontal",S=!1,A=d.map(function(M,w){var O;x?O=f[m+w]:(O=lt(M,p),Array.isArray(O)?S=!0:O=[I,O]);var E=O[1]==null||x&&lt(M,p)==null;return b?{x:wi({axis:r,ticks:i,bandSize:l,entry:M,index:w}),y:E?null:a.scale(O[1]),value:O,payload:M}:{x:E?null:r.scale(O[1]),y:wi({axis:a,ticks:s,bandSize:l,entry:M,index:w}),value:O,payload:M}}),_;return x||S?_=A.map(function(M){var w=Array.isArray(M.value)?M.value[0]:null;return b?{x:M.x,y:w!=null&&M.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:M.y}}):_=b?a.scale(I):r.scale(I),Pa({points:A,baseLine:_,layout:y,isRange:S},v)});Ir(So,"renderDotItem",function(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=je("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=EW(t,CK);n=R.createElement(tl,ho({},i,{key:a,className:r}))}return n});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function $K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function LK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,HW(r.key),r)}}function FK(e,t,n){return t&&LK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function qK(e,t,n){return t=kp(t),zK(e,RW()?Reflect.construct(t,n||[],kp(e).constructor):t.apply(e,n))}function zK(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return UK(e)}function UK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(RW=function(){return!!e})()}function kp(e){return kp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kp(e)}function VK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yg(e,t)}function Yg(e,t){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,t)}function jW(e,t,n){return t=HW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HW(e){var t=GK(e,"string");return ji(t)=="symbol"?t:t+""}function GK(e,t){if(ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I0=(function(e){function t(){return $K(this,t),qK(this,t,arguments)}return VK(t,e),FK(t,[{key:"render",value:function(){return null}}])})(R.Component);jW(I0,"displayName","ZAxis");jW(I0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var KK=["option","isActive"];function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function QK(e,t){if(e==null)return{};var n=YK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function YK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function XK(e){var t=e.option,n=e.isActive,r=QK(e,KK);return typeof t=="string"?R.createElement(gp,ls({option:R.createElement(Qp,ls({type:t},r)),isActive:n,shapeType:"symbols"},r)):R.createElement(gp,ls({option:t,isActive:n,shapeType:"symbols"},r))}function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}function y3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y3(Object(n),!0).forEach(function(r){Wa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$W(r.key),r)}}function JK(e,t,n){return t&&b3(e.prototype,t),n&&b3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eQ(e,t,n){return t=Ep(t),tQ(e,DW()?Reflect.construct(t,n||[],Ep(e).constructor):t.apply(e,n))}function tQ(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nQ(e)}function nQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DW=function(){return!!e})()}function Ep(e){return Ep=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ep(e)}function rQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xg(e,t)}function Xg(e,t){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,t)}function Wa(e,t,n){return t=$W(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $W(e){var t=aQ(e,"string");return Hi(t)=="symbol"?t:t+""}function aQ(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B0=(function(e){function t(){var n;ZK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=eQ(this,t,[].concat(a)),Wa(n,"state",{isAnimationFinished:!1}),Wa(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),Wa(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),Wa(n,"id",Ha("recharts-scatter-")),n}return rQ(t,e),JK(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.activeShape,p=i.activeIndex,f=Ae(this.props,!1);return r.map(function(m,d){var v=p===d,y=v?l:s,x=Fn(Fn({},f),m);return R.createElement(De,cs({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ta(a.props,m,d),{role:"img"}),R.createElement(XK,cs({option:y,isActive:v,key:"symbol-".concat(d)},x)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,l=a.animationBegin,p=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return R.createElement(Kn,{begin:l,duration:p,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,x=i.map(function(I,b){var S=d&&d[b];if(S){var A=ht(S.cx,I.cx),_=ht(S.cy,I.cy),M=ht(S.size,I.size);return Fn(Fn({},I),{},{cx:A(y),cy:_(y),size:M(y)})}var w=ht(0,I.size);return Fn(Fn({},I),{},{size:w(y)})});return R.createElement(De,null,r.renderSymbolsStatically(x))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Na(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,l=a.yAxis,p=a.children,f=sn(p,eu);return f?f.map(function(m,d){var v=m.props,y=v.direction,x=v.dataKey;return R.cloneElement(m,{key:"".concat(y,"-").concat(x,"-").concat(i[d]),data:i,xAxis:s,yAxis:l,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,S){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:lt(b,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,l=r.lineJointType,p=Ae(this.props,!1),f=Ae(i,!1),m,d;if(s==="joint")m=a.map(function(_){return{x:_.cx,y:_.cy}});else if(s==="fitting"){var v=YR(a),y=v.xmin,x=v.xmax,I=v.a,b=v.b,S=function(M){return I*M+b};m=[{x:y,y:S(y)},{x,y:S(x)}]}var A=Fn(Fn(Fn({},p),{},{fill:"none",stroke:p&&p.fill},f),{},{points:m});return R.isValidElement(i)?d=R.cloneElement(i,A):ke(i)?d=i(A):d=R.createElement(ka,cs({},A,{type:l})),R.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,l=r.className,p=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,y=r.height,x=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=je("recharts-scatter",l),A=p&&p.allowDataOverflow,_=f&&f.allowDataOverflow,M=A||_,w=Ee(x)?this.id:x;return R.createElement(De,{className:S,clipPath:M?"url(#clipPath-".concat(w,")"):null},A||_?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:A?m:m-v/2,y:_?d:d-y/2,width:A?v:v*2,height:_?y:y*2}))):null,s&&this.renderLine(),this.renderErrorBar(),R.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&sr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(X.PureComponent);Wa(B0,"displayName","Scatter");Wa(B0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});Wa(B0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,p=e.offset,f=a.props.tooltipType,m=sn(a.props.children,Ys),d=Ee(t.dataKey)?a.props.dataKey:t.dataKey,v=Ee(n.dataKey)?a.props.dataKey:n.dataKey,y=r&&r.dataKey,x=r?r.range:I0.defaultProps.range,I=x&&x[0],b=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,A=i.map(function(_,M){var w=lt(_,d),O=lt(_,v),E=!Ee(y)&&lt(_,y)||"-",P=[{name:Ee(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:_,dataKey:d,type:f},{name:Ee(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:O,payload:_,dataKey:v,type:f}];E!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:E,payload:_,dataKey:y,type:f});var C=wi({axis:t,ticks:s,bandSize:b,entry:_,index:M,dataKey:d}),N=wi({axis:n,ticks:l,bandSize:S,entry:_,index:M,dataKey:v}),H=E!=="-"?r.scale(E):I,T=Math.sqrt(Math.max(H,0)/Math.PI);return Fn(Fn({},_),{},{cx:C,cy:N,x:C-T,y:N-T,xAxis:t,yAxis:n,zAxis:r,width:2*T,height:2*T,size:H,node:{x:w,y:O,z:E},tooltipPayload:P,tooltipPosition:{x:C,y:N},payload:_},m&&m[M]&&m[M].props)});return Fn({points:A},p)});function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function oQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,qW(r.key),r)}}function uQ(e,t,n){return t&&iQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function sQ(e,t,n){return t=Tp(t),lQ(e,LW()?Reflect.construct(t,n||[],Tp(e).constructor):t.apply(e,n))}function lQ(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cQ(e)}function cQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LW=function(){return!!e})()}function Tp(e){return Tp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tp(e)}function pQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zg(e,t)}function Zg(e,t){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,t)}function FW(e,t,n){return t=qW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qW(e){var t=fQ(e,"string");return Di(t)=="symbol"?t:t+""}function fQ(e,t){if(Di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Jg(){return Jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jg.apply(this,arguments)}function dQ(e){var t=e.xAxisId,n=hb(),r=mb(),a=yW(t);return a==null?null:R.createElement(tu,Jg({},a,{className:je("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return Fr(s,!0)}}))}var Ra=(function(e){function t(){return oQ(this,t),sQ(this,t,arguments)}return pQ(t,e),uQ(t,[{key:"render",value:function(){return R.createElement(dQ,this.props)}}])})(R.Component);FW(Ra,"displayName","XAxis");FW(Ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$i(e)}function hQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,VW(r.key),r)}}function vQ(e,t,n){return t&&mQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gQ(e,t,n){return t=Np(t),yQ(e,zW()?Reflect.construct(t,n||[],Np(e).constructor):t.apply(e,n))}function yQ(e,t){if(t&&($i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bQ(e)}function bQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zW=function(){return!!e})()}function Np(e){return Np=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Np(e)}function IQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ey(e,t)}function ey(e,t){return ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ey(e,t)}function UW(e,t,n){return t=VW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VW(e){var t=BQ(e,"string");return $i(t)=="symbol"?t:t+""}function BQ(e,t){if($i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ty(){return ty=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ty.apply(this,arguments)}var xQ=function(t){var n=t.yAxisId,r=hb(),a=mb(),i=bW(n);return i==null?null:R.createElement(tu,ty({},i,{className:je("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return Fr(l,!0)}}))},Br=(function(e){function t(){return hQ(this,t),gQ(this,t,arguments)}return IQ(t,e),vQ(t,[{key:"render",value:function(){return R.createElement(xQ,this.props)}}])})(R.Component);UW(Br,"displayName","YAxis");UW(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function I3(e){return AQ(e)||SQ(e)||PQ(e)||wQ()}function wQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PQ(e,t){if(e){if(typeof e=="string")return ny(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ny(e,t)}}function SQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AQ(e){if(Array.isArray(e))return ny(e)}function ny(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ry=function(t,n,r,a,i){var s=sn(t,gb),l=sn(t,g0),p=[].concat(I3(s),I3(l)),f=sn(t,b0),m="".concat(a,"Id"),d=a[0],v=n;if(p.length&&(v=p.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&le(b.props[d])){var S=b.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var y="".concat(d,"1"),x="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&le(b.props[y])&&le(b.props[x])){var S=b.props[y],A=b.props[x];return[Math.min(I[0],S,A),Math.max(I[1],S,A)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return le(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},Iv={exports:{}},B3;function _Q(){return B3||(B3=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(p,f,m){this.fn=p,this.context=f,this.once=m||!1}function i(p,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var y=new a(m,d||p,v),x=n?n+f:f;return p._events[x]?p._events[x].fn?p._events[x]=[p._events[x],y]:p._events[x].push(y):(p._events[x]=y,p._eventsCount++),p}function s(p,f){--p._eventsCount===0?p._events=new r:delete p._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)t.call(m,d)&&f.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},l.prototype.listeners=function(f){var m=n?n+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,x=new Array(y);v<y;v++)x[v]=d[v].fn;return x},l.prototype.listenerCount=function(f){var m=n?n+f:f,d=this._events[m];return d?d.fn?1:d.length:0},l.prototype.emit=function(f,m,d,v,y,x){var I=n?n+f:f;if(!this._events[I])return!1;var b=this._events[I],S=arguments.length,A,_;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),S){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,m),!0;case 3:return b.fn.call(b.context,m,d),!0;case 4:return b.fn.call(b.context,m,d,v),!0;case 5:return b.fn.call(b.context,m,d,v,y),!0;case 6:return b.fn.call(b.context,m,d,v,y,x),!0}for(_=1,A=new Array(S-1);_<S;_++)A[_-1]=arguments[_];b.fn.apply(b.context,A)}else{var M=b.length,w;for(_=0;_<M;_++)switch(b[_].once&&this.removeListener(f,b[_].fn,void 0,!0),S){case 1:b[_].fn.call(b[_].context);break;case 2:b[_].fn.call(b[_].context,m);break;case 3:b[_].fn.call(b[_].context,m,d);break;case 4:b[_].fn.call(b[_].context,m,d,v);break;default:if(!A)for(w=1,A=new Array(S-1);w<S;w++)A[w-1]=arguments[w];b[_].fn.apply(b[_].context,A)}}return!0},l.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},l.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},l.prototype.removeListener=function(f,m,d,v){var y=n?n+f:f;if(!this._events[y])return this;if(!m)return s(this,y),this;var x=this._events[y];if(x.fn)x.fn===m&&(!v||x.once)&&(!d||x.context===d)&&s(this,y);else{for(var I=0,b=[],S=x.length;I<S;I++)(x[I].fn!==m||v&&!x[I].once||d&&x[I].context!==d)&&b.push(x[I]);b.length?this._events[y]=b.length===1?b[0]:b:s(this,y)}return this},l.prototype.removeAllListeners=function(f){var m;return f?(m=n?n+f:f,this._events[m]&&s(this,m)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(Iv)),Iv.exports}var OQ=_Q();const WQ=Xe(OQ);var Bv=new WQ,xv="recharts.syncMouseEvents";function Us(e){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(e)}function MQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function CQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,GW(r.key),r)}}function kQ(e,t,n){return t&&CQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wv(e,t,n){return t=GW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GW(e){var t=EQ(e,"string");return Us(t)=="symbol"?t:t+""}function EQ(e,t){if(Us(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var TQ=(function(){function e(){MQ(this,e),wv(this,"activeIndex",0),wv(this,"coordinateList",[]),wv(this,"layout","horizontal")}return kQ(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,i=a===void 0?null:a,s=n.container,l=s===void 0?null:s,p=n.layout,f=p===void 0?null:p,m=n.offset,d=m===void 0?null:m,v=n.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,l=a.height,p=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+p+f,v=s+this.offset.top+l/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function NQ(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function RQ(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function KW(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=ot(t,n,r,a),l=ot(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}function jQ(e,t,n){var r,a,i,s;if(e==="horizontal")r=t.x,i=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,i=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,p=t.cy,f=t.innerRadius,m=t.outerRadius,d=t.angle,v=ot(l,p,f,d),y=ot(l,p,m,d);r=v.x,a=v.y,i=y.x,s=y.y}else return KW(t);return[{x:r,y:a},{x:i,y:s}]}function Vs(e){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vs(e)}function x3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Sc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x3(Object(n),!0).forEach(function(r){HQ(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HQ(e,t,n){return t=DQ(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DQ(e){var t=$Q(e,"string");return Vs(t)=="symbol"?t:t+""}function $Q(e,t){if(Vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LQ(e){var t,n,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,l=e.activePayload,p=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!y||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var x,I=ka;if(v==="ScatterChart")x=s,I=Tz;else if(v==="BarChart")x=RQ(d,s,p,m),I=lb;else if(d==="radial"){var b=KW(s),S=b.cx,A=b.cy,_=b.radius,M=b.startAngle,w=b.endAngle;x={cx:S,cy:A,startAngle:M,endAngle:w,innerRadius:_,outerRadius:_},I=FO}else x={points:jQ(d,s,p)},I=ka;var O=Sc(Sc(Sc(Sc({stroke:"#ccc",pointerEvents:"none"},p),x),Ae(y,!1)),{},{payload:l,payloadIndex:f,className:je("recharts-tooltip-cursor",y.className)});return X.isValidElement(y)?X.cloneElement(y,O):X.createElement(I,O)}var FQ=["item"],qQ=["children","className","width","height","style","compact","title","desc"];function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}function w3(e,t){return VQ(e)||UQ(e,t)||YW(e,t)||zQ()}function zQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UQ(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(p=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);p=!0);}catch(m){f=!0,a=m}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function VQ(e){if(Array.isArray(e))return e}function P3(e,t){if(e==null)return{};var n=GQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function GQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function KQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function QQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XW(r.key),r)}}function YQ(e,t,n){return t&&QQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function XQ(e,t,n){return t=Rp(t),ZQ(e,QW()?Reflect.construct(t,n||[],Rp(e).constructor):t.apply(e,n))}function ZQ(e,t){if(t&&(Li(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JQ(e)}function JQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function QW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(QW=function(){return!!e})()}function Rp(e){return Rp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Rp(e)}function eY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ay(e,t)}function ay(e,t){return ay=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ay(e,t)}function Fi(e){return rY(e)||nY(e)||YW(e)||tY()}function tY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YW(e,t){if(e){if(typeof e=="string")return oy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oy(e,t)}}function nY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rY(e){if(Array.isArray(e))return oy(e)}function oy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S3(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Te(e,t,n){return t=XW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XW(e){var t=aY(e,"string");return Li(t)=="symbol"?t:t+""}function aY(e,t){if(Li(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oY={xAxis:["bottom","top"],yAxis:["left","right"]},iY={width:"100%",height:"100%"},ZW={x:0,y:0};function Ac(e){return e}var uY=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},sY=function(t,n,r,a){var i=n.find(function(m){return m&&m.index===r});if(i){if(t==="horizontal")return{x:i.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:i.coordinate};if(t==="centric"){var s=i.coordinate,l=a.radius;return ae(ae(ae({},a),ot(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var p=i.coordinate,f=a.angle;return ae(ae(ae({},a),ot(a.cx,a.cy,p,f)),{},{angle:f,radius:p})}return ZW},x0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,i=n.dataEndIndex,s=(r??[]).reduce(function(l,p){var f=p.props.data;return f&&f.length?[].concat(Fi(l),Fi(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(i)?t.slice(a,i+1):[]};function JW(e){return e==="number"?[0,"auto"]:void 0}var iy=function(t,n,r,a){var i=t.graphicalItems,s=t.tooltipAxis,l=x0(n,t);return r<0||!i||!i.length||r>=l.length?null:i.reduce(function(p,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var y=d===void 0?l:d;v=Ec(y,s.dataKey,a)}else v=d&&d[r]||l[r];return v?[].concat(Fi(p),[RO(f,v)]):p},[])},A3=function(t,n,r,a){var i=a||{x:t.chartX,y:t.chartY},s=uY(i,r),l=t.orderedTooltipTicks,p=t.tooltipAxis,f=t.tooltipTicks,m=tF(s,l,f,p);if(m>=0&&f){var d=f[m]&&f[m].value,v=iy(t,n,m,d),y=sY(r,l,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},lY=function(t,n){var r=n.axes,a=n.graphicalItems,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.layout,d=t.children,v=t.stackOffset,y=MO(m,i);return r.reduce(function(x,I){var b,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,A=S.type,_=S.dataKey,M=S.allowDataOverflow,w=S.allowDuplicatedCategory,O=S.scale,E=S.ticks,P=S.includeHidden,C=S[s];if(x[C])return x;var N=x0(t.data,{graphicalItems:a.filter(function(F){var J,ue=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s];return ue===C}),dataStartIndex:p,dataEndIndex:f}),H=N.length,T,$,G;NQ(S.domain,M,A)&&(T=gg(S.domain,null,M),y&&(A==="number"||O!=="auto")&&(G=as(N,_,"category")));var U=JW(A);if(!T||T.length===0){var z,Q=(z=S.domain)!==null&&z!==void 0?z:U;if(_){if(T=as(N,_,A),A==="category"&&y){var L=QR(T);w&&L?($=T,T=bp(0,H)):w||(T=PS(Q,T,I).reduce(function(F,J){return F.indexOf(J)>=0?F:[].concat(Fi(F),[J])},[]))}else if(A==="category")w?T=T.filter(function(F){return F!==""&&!Ee(F)}):T=PS(Q,T,I).reduce(function(F,J){return F.indexOf(J)>=0||J===""||Ee(J)?F:[].concat(Fi(F),[J])},[]);else if(A==="number"){var K=iF(N,a.filter(function(F){var J,ue,he=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s],ge="hide"in F.props?F.props.hide:(ue=F.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===C&&(P||!ge)}),_,i,m);K&&(T=K)}y&&(A==="number"||O!=="auto")&&(G=as(N,_,"category"))}else y?T=bp(0,H):l&&l[C]&&l[C].hasStack&&A==="number"?T=v==="expand"?[0,1]:NO(l[C].stackGroups,p,f):T=WO(N,a.filter(function(F){var J=s in F.props?F.props[s]:F.type.defaultProps[s],ue="hide"in F.props?F.props.hide:F.type.defaultProps.hide;return J===C&&(P||!ue)}),A,m,!0);if(A==="number")T=ry(d,T,C,i,E),Q&&(T=gg(Q,T,M));else if(A==="category"&&Q){var Y=Q,j=T.every(function(F){return Y.indexOf(F)>=0});j&&(T=Y)}}return ae(ae({},x),{},Te({},C,ae(ae({},S),{},{axisType:i,domain:T,categoricalDomain:G,duplicateDomain:$,originalDomain:(b=S.domain)!==null&&b!==void 0?b:U,isCategorical:y,layout:m})))},{})},cY=function(t,n){var r=n.graphicalItems,a=n.Axis,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.layout,d=t.children,v=x0(t.data,{graphicalItems:r,dataStartIndex:p,dataEndIndex:f}),y=v.length,x=MO(m,i),I=-1;return r.reduce(function(b,S){var A=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,_=A[s],M=JW("number");if(!b[_]){I++;var w;return x?w=bp(0,y):l&&l[_]&&l[_].hasStack?(w=NO(l[_].stackGroups,p,f),w=ry(d,w,_,i)):(w=gg(M,WO(v,r.filter(function(O){var E,P,C=s in O.props?O.props[s]:(E=O.type.defaultProps)===null||E===void 0?void 0:E[s],N="hide"in O.props?O.props.hide:(P=O.type.defaultProps)===null||P===void 0?void 0:P.hide;return C===_&&!N}),"number",m),a.defaultProps.allowDataOverflow),w=ry(d,w,_,i)),ae(ae({},b),{},Te({},_,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:Wn(oY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:M,isCategorical:x,layout:m})))}return b},{})},pY=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,i=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,p=n.dataStartIndex,f=n.dataEndIndex,m=t.children,d="".concat(a,"Id"),v=sn(m,i),y={};return v&&v.length?y=lY(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:p,dataEndIndex:f}):s&&s.length&&(y=cY(t,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:p,dataEndIndex:f})),y},fY=function(t){var n=Aa(t),r=Fr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ny(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:op(n,r)}},_3=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,Wi),i=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},dY=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},O3=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},hY=function(t,n){var r=t.props,a=t.graphicalItems,i=t.xAxisMap,s=i===void 0?{}:i,l=t.yAxisMap,p=l===void 0?{}:l,f=r.width,m=r.height,d=r.children,v=r.margin||{},y=Sn(d,Wi),x=Sn(d,Ma),I=Object.keys(p).reduce(function(w,O){var E=p[O],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,w[P]+E.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(s).reduce(function(w,O){var E=s[O],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Te({},P,Wn(w,"".concat(P))+E.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},b),I),A=S.bottom;y&&(S.bottom+=y.props.height||Wi.defaultProps.height),x&&n&&(S=aF(S,a,r,n));var _=f-S.left-S.right,M=m-S.top-S.bottom;return ae(ae({brushBottom:A},S),{},{width:Math.max(_,0),height:Math.max(M,0)})},mY=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},w0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,i=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,p=t.axisComponents,f=t.legendContent,m=t.formatAxisMap,d=t.defaultProps,v=function(S,A){var _=A.graphicalItems,M=A.stackGroups,w=A.offset,O=A.updateId,E=A.dataStartIndex,P=A.dataEndIndex,C=S.barSize,N=S.layout,H=S.barGap,T=S.barCategoryGap,$=S.maxBarSize,G=O3(N),U=G.numericAxisName,z=G.cateAxisName,Q=dY(_),L=[];return _.forEach(function(K,Y){var j=x0(S.data,{graphicalItems:[K],dataStartIndex:E,dataEndIndex:P}),F=K.type.defaultProps!==void 0?ae(ae({},K.type.defaultProps),K.props):K.props,J=F.dataKey,ue=F.maxBarSize,he=F["".concat(U,"Id")],ge=F["".concat(z,"Id")],ye={},fe=p.reduce(function(Bt,vt){var Mn=A["".concat(vt.axisType,"Map")],gt=F["".concat(vt.axisType,"Id")];Mn&&Mn[gt]||vt.axisType==="zAxis"||bo();var Kt=Mn[gt];return ae(ae({},Bt),{},Te(Te({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),Fr(Kt)))},ye),ne=fe[z],de=fe["".concat(z,"Ticks")],pe=M&&M[he]&&M[he].hasStack&&mF(K,M[he].stackGroups),re=Ur(K.type).indexOf("Bar")>=0,Re=op(ne,de),Pe=[],Ce=Q&&nF({barSize:C,stackGroups:M,totalSize:mY(fe,z)});if(re){var _e,Fe,He=Ee(ue)?$:ue,qe=(_e=(Fe=op(ne,de,!0))!==null&&Fe!==void 0?Fe:He)!==null&&_e!==void 0?_e:0;Pe=rF({barGap:H,barCategoryGap:T,bandSize:qe!==Re?qe:Re,sizeList:Ce[ge],maxBarSize:He}),qe!==Re&&(Pe=Pe.map(function(Bt){return ae(ae({},Bt),{},{position:ae(ae({},Bt.position),{},{offset:Bt.position.offset-qe/2})})}))}var Ke=K&&K.type&&K.type.getComposedData;Ke&&L.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:j,props:S,dataKey:J,item:K,bandSize:Re,barPosition:Pe,offset:w,stackedData:pe,layout:N,dataStartIndex:E,dataEndIndex:P}))),{},Te(Te(Te({key:K.key||"item-".concat(Y)},U,fe[U]),z,fe[z]),"animationId",O)),childIndex:uj(K,S.children),item:K})}),L},y=function(S,A){var _=S.props,M=S.dataStartIndex,w=S.dataEndIndex,O=S.updateId;if(!DB({props:_}))return null;var E=_.children,P=_.layout,C=_.stackOffset,N=_.data,H=_.reverseStackOrder,T=O3(P),$=T.numericAxisName,G=T.cateAxisName,U=sn(E,r),z=dF(N,U,"".concat($,"Id"),"".concat(G,"Id"),C,H),Q=p.reduce(function(F,J){var ue="".concat(J.axisType,"Map");return ae(ae({},F),{},Te({},ue,pY(_,ae(ae({},J),{},{graphicalItems:U,stackGroups:J.axisType===$&&z,dataStartIndex:M,dataEndIndex:w}))))},{}),L=hY(ae(ae({},Q),{},{props:_,graphicalItems:U}),A==null?void 0:A.legendBBox);Object.keys(Q).forEach(function(F){Q[F]=m(_,Q[F],L,F.replace("Map",""),n)});var K=Q["".concat(G,"Map")],Y=fY(K),j=v(_,ae(ae({},Q),{},{dataStartIndex:M,dataEndIndex:w,updateId:O,graphicalItems:U,stackGroups:z,offset:L}));return ae(ae({formattedGraphicalItems:j,graphicalItems:U,offset:L,stackGroups:z},Y),Q)},x=(function(b){function S(A){var _,M,w;return KQ(this,S),w=XQ(this,S,[A]),Te(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Te(w,"accessibilityManager",new TQ),Te(w,"handleLegendBBoxUpdate",function(O){if(O){var E=w.state,P=E.dataStartIndex,C=E.dataEndIndex,N=E.updateId;w.setState(ae({legendBBox:O},y({props:w.props,dataStartIndex:P,dataEndIndex:C,updateId:N},ae(ae({},w.state),{},{legendBBox:O}))))}}),Te(w,"handleReceiveSyncEvent",function(O,E,P){if(w.props.syncId===O){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(E)}}),Te(w,"handleBrushChange",function(O){var E=O.startIndex,P=O.endIndex;if(E!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var C=w.state.updateId;w.setState(function(){return ae({dataStartIndex:E,dataEndIndex:P},y({props:w.props,dataStartIndex:E,dataEndIndex:P,updateId:C},w.state))}),w.triggerSyncEvent({dataStartIndex:E,dataEndIndex:P})}}),Te(w,"handleMouseEnter",function(O){var E=w.getMouseInfo(O);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseEnter;ke(C)&&C(P,O)}}),Te(w,"triggeredAfterMouseMove",function(O){var E=w.getMouseInfo(O),P=E?ae(ae({},E),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseMove;ke(C)&&C(P,O)}),Te(w,"handleItemMouseEnter",function(O){w.setState(function(){return{isTooltipActive:!0,activeItem:O,activePayload:O.tooltipPayload,activeCoordinate:O.tooltipPosition||{x:O.cx,y:O.cy}}})}),Te(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Te(w,"handleMouseMove",function(O){O.persist(),w.throttleTriggeredAfterMouseMove(O)}),Te(w,"handleMouseLeave",function(O){w.throttleTriggeredAfterMouseMove.cancel();var E={isTooltipActive:!1};w.setState(E),w.triggerSyncEvent(E);var P=w.props.onMouseLeave;ke(P)&&P(E,O)}),Te(w,"handleOuterEvent",function(O){var E=ij(O),P=Wn(w.props,"".concat(E));if(E&&ke(P)){var C,N;/.*touch.*/i.test(E)?N=w.getMouseInfo(O.changedTouches[0]):N=w.getMouseInfo(O),P((C=N)!==null&&C!==void 0?C:{},O)}}),Te(w,"handleClick",function(O){var E=w.getMouseInfo(O);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onClick;ke(C)&&C(P,O)}}),Te(w,"handleMouseDown",function(O){var E=w.props.onMouseDown;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"handleMouseUp",function(O){var E=w.props.onMouseUp;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"handleTouchMove",function(O){O.changedTouches!=null&&O.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(O.changedTouches[0])}),Te(w,"handleTouchStart",function(O){O.changedTouches!=null&&O.changedTouches.length>0&&w.handleMouseDown(O.changedTouches[0])}),Te(w,"handleTouchEnd",function(O){O.changedTouches!=null&&O.changedTouches.length>0&&w.handleMouseUp(O.changedTouches[0])}),Te(w,"handleDoubleClick",function(O){var E=w.props.onDoubleClick;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"handleContextMenu",function(O){var E=w.props.onContextMenu;if(ke(E)){var P=w.getMouseInfo(O);E(P,O)}}),Te(w,"triggerSyncEvent",function(O){w.props.syncId!==void 0&&Bv.emit(xv,w.props.syncId,O,w.eventEmitterSymbol)}),Te(w,"applySyncEvent",function(O){var E=w.props,P=E.layout,C=E.syncMethod,N=w.state.updateId,H=O.dataStartIndex,T=O.dataEndIndex;if(O.dataStartIndex!==void 0||O.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:H,dataEndIndex:T},y({props:w.props,dataStartIndex:H,dataEndIndex:T,updateId:N},w.state)));else if(O.activeTooltipIndex!==void 0){var $=O.chartX,G=O.chartY,U=O.activeTooltipIndex,z=w.state,Q=z.offset,L=z.tooltipTicks;if(!Q)return;if(typeof C=="function")U=C(L,O);else if(C==="value"){U=-1;for(var K=0;K<L.length;K++)if(L[K].value===O.activeLabel){U=K;break}}var Y=ae(ae({},Q),{},{x:Q.left,y:Q.top}),j=Math.min($,Y.x+Y.width),F=Math.min(G,Y.y+Y.height),J=L[U]&&L[U].value,ue=iy(w.state,w.props.data,U),he=L[U]?{x:P==="horizontal"?L[U].coordinate:j,y:P==="horizontal"?F:L[U].coordinate}:ZW;w.setState(ae(ae({},O),{},{activeLabel:J,activeCoordinate:he,activePayload:ue,activeTooltipIndex:U}))}else w.setState(O)}),Te(w,"renderCursor",function(O){var E,P=w.state,C=P.isTooltipActive,N=P.activeCoordinate,H=P.activePayload,T=P.offset,$=P.activeTooltipIndex,G=P.tooltipAxisBandSize,U=w.getTooltipEventType(),z=(E=O.props.active)!==null&&E!==void 0?E:C,Q=w.props.layout,L=O.key||"_recharts-cursor";return R.createElement(LQ,{key:L,activeCoordinate:N,activePayload:H,activeTooltipIndex:$,chartName:n,element:O,isActive:z,layout:Q,offset:T,tooltipAxisBandSize:G,tooltipEventType:U})}),Te(w,"renderPolarAxis",function(O,E,P){var C=Wn(O,"type.axisType"),N=Wn(w.state,"".concat(C,"Map")),H=O.type.defaultProps,T=H!==void 0?ae(ae({},H),O.props):O.props,$=N&&N[T["".concat(C,"Id")]];return X.cloneElement(O,ae(ae({},$),{},{className:je(C,$.className),key:O.key||"".concat(E,"-").concat(P),ticks:Fr($,!0)}))}),Te(w,"renderPolarGrid",function(O){var E=O.props,P=E.radialLines,C=E.polarAngles,N=E.polarRadius,H=w.state,T=H.radiusAxisMap,$=H.angleAxisMap,G=Aa(T),U=Aa($),z=U.cx,Q=U.cy,L=U.innerRadius,K=U.outerRadius;return X.cloneElement(O,{polarAngles:Array.isArray(C)?C:Fr(U,!0).map(function(Y){return Y.coordinate}),polarRadius:Array.isArray(N)?N:Fr(G,!0).map(function(Y){return Y.coordinate}),cx:z,cy:Q,innerRadius:L,outerRadius:K,key:O.key||"polar-grid",radialLines:P})}),Te(w,"renderLegend",function(){var O=w.state.formattedGraphicalItems,E=w.props,P=E.children,C=E.width,N=E.height,H=w.props.margin||{},T=C-(H.left||0)-(H.right||0),$=_O({children:P,formattedGraphicalItems:O,legendWidth:T,legendContent:f});if(!$)return null;var G=$.item,U=P3($,FQ);return X.cloneElement(G,ae(ae({},U),{},{chartWidth:C,chartHeight:N,margin:H,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Te(w,"renderTooltip",function(){var O,E=w.props,P=E.children,C=E.accessibilityLayer,N=Sn(P,An);if(!N)return null;var H=w.state,T=H.isTooltipActive,$=H.activeCoordinate,G=H.activePayload,U=H.activeLabel,z=H.offset,Q=(O=N.props.active)!==null&&O!==void 0?O:T;return X.cloneElement(N,{viewBox:ae(ae({},z),{},{x:z.left,y:z.top}),active:Q,label:U,payload:Q?G:[],coordinate:$,accessibilityLayer:C})}),Te(w,"renderBrush",function(O){var E=w.props,P=E.margin,C=E.data,N=w.state,H=N.offset,T=N.dataStartIndex,$=N.dataEndIndex,G=N.updateId;return X.cloneElement(O,{key:O.key||"_recharts-brush",onChange:Bc(w.handleBrushChange,O.props.onChange),data:C,x:le(O.props.x)?O.props.x:H.left,y:le(O.props.y)?O.props.y:H.top+H.height+H.brushBottom-(P.bottom||0),width:le(O.props.width)?O.props.width:H.width,startIndex:T,endIndex:$,updateId:"brush-".concat(G)})}),Te(w,"renderReferenceElement",function(O,E,P){if(!O)return null;var C=w,N=C.clipPathId,H=w.state,T=H.xAxisMap,$=H.yAxisMap,G=H.offset,U=O.type.defaultProps||{},z=O.props,Q=z.xAxisId,L=Q===void 0?U.xAxisId:Q,K=z.yAxisId,Y=K===void 0?U.yAxisId:K;return X.cloneElement(O,{key:O.key||"".concat(E,"-").concat(P),xAxis:T[L],yAxis:$[Y],viewBox:{x:G.left,y:G.top,width:G.width,height:G.height},clipPathId:N})}),Te(w,"renderActivePoints",function(O){var E=O.item,P=O.activePoint,C=O.basePoint,N=O.childIndex,H=O.isRange,T=[],$=E.props.key,G=E.item.type.defaultProps!==void 0?ae(ae({},E.item.type.defaultProps),E.item.props):E.item.props,U=G.activeDot,z=G.dataKey,Q=ae(ae({index:N,dataKey:z,cx:P.x,cy:P.y,r:4,fill:sb(E.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},Ae(U,!1)),Tc(U));return T.push(S.renderActiveDot(U,Q,"".concat($,"-activePoint-").concat(N))),C?T.push(S.renderActiveDot(U,ae(ae({},Q),{},{cx:C.x,cy:C.y}),"".concat($,"-basePoint-").concat(N))):H&&T.push(null),T}),Te(w,"renderGraphicChild",function(O,E,P){var C=w.filterFormatItem(O,E,P);if(!C)return null;var N=w.getTooltipEventType(),H=w.state,T=H.isTooltipActive,$=H.tooltipAxis,G=H.activeTooltipIndex,U=H.activeLabel,z=w.props.children,Q=Sn(z,An),L=C.props,K=L.points,Y=L.isRange,j=L.baseLine,F=C.item.type.defaultProps!==void 0?ae(ae({},C.item.type.defaultProps),C.item.props):C.item.props,J=F.activeDot,ue=F.hide,he=F.activeBar,ge=F.activeShape,ye=!!(!ue&&T&&Q&&(J||he||ge)),fe={};N!=="axis"&&Q&&Q.props.trigger==="click"?fe={onClick:Bc(w.handleItemMouseEnter,O.props.onClick)}:N!=="axis"&&(fe={onMouseLeave:Bc(w.handleItemMouseLeave,O.props.onMouseLeave),onMouseEnter:Bc(w.handleItemMouseEnter,O.props.onMouseEnter)});var ne=X.cloneElement(O,ae(ae({},C.props),fe));function de(vt){return typeof $.dataKey=="function"?$.dataKey(vt.payload):null}if(ye)if(G>=0){var pe,re;if($.dataKey&&!$.allowDuplicatedCategory){var Re=typeof $.dataKey=="function"?de:"payload.".concat($.dataKey.toString());pe=Ec(K,Re,U),re=Y&&j&&Ec(j,Re,U)}else pe=K==null?void 0:K[G],re=Y&&j&&j[G];if(ge||he){var Pe=O.props.activeIndex!==void 0?O.props.activeIndex:G;return[X.cloneElement(O,ae(ae(ae({},C.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ee(pe))return[ne].concat(Fi(w.renderActivePoints({item:C,activePoint:pe,basePoint:re,childIndex:G,isRange:Y})))}else{var Ce,_e=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},Fe=_e.graphicalItem,He=Fe.item,qe=He===void 0?O:He,Ke=Fe.childIndex,Bt=ae(ae(ae({},C.props),fe),{},{activeIndex:Ke});return[X.cloneElement(qe,Bt),null,null]}return Y?[ne,null,null]:[ne,null]}),Te(w,"renderCustomized",function(O,E,P){return X.cloneElement(O,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Te(w,"renderMap",{CartesianGrid:{handler:Ac,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Ac},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Ac},YAxis:{handler:Ac},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((_=A.id)!==null&&_!==void 0?_:Ha("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=__(w.triggeredAfterMouseMove,(M=A.throttleDelay)!==null&&M!==void 0?M:1e3/60),w.state={},w}return eY(S,b),YQ(S,[{key:"componentDidMount",value:function(){var _,M;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(_=this.props.margin.left)!==null&&_!==void 0?_:0,top:(M=this.props.margin.top)!==null&&M!==void 0?M:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var _=this.props,M=_.children,w=_.data,O=_.height,E=_.layout,P=Sn(M,An);if(P){var C=P.props.defaultIndex;if(!(typeof C!="number"||C<0||C>this.state.tooltipTicks.length-1)){var N=this.state.tooltipTicks[C]&&this.state.tooltipTicks[C].value,H=iy(this.state,w,C,N),T=this.state.tooltipTicks[C].coordinate,$=(this.state.offset.top+O)/2,G=E==="horizontal",U=G?{x:T,y:$}:{y:T,x:$},z=this.state.formattedGraphicalItems.find(function(L){var K=L.item;return K.type.name==="Scatter"});z&&(U=ae(ae({},U),z.props.points[C].tooltipPosition),H=z.props.points[C].tooltipPayload);var Q={activeTooltipIndex:C,isTooltipActive:!0,activeLabel:N,activePayload:H,activeCoordinate:U};this.setState(Q),this.renderCursor(P),this.accessibilityManager.setIndex(C)}}}},{key:"getSnapshotBeforeUpdate",value:function(_,M){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==M.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==_.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==_.margin){var w,O;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0}})}return null}},{key:"componentDidUpdate",value:function(_){Dv([Sn(_.children,An)],[Sn(this.props.children,An)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var _=Sn(this.props.children,An);if(_&&typeof _.props.shared=="boolean"){var M=_.props.shared?"axis":"item";return l.indexOf(M)>=0?M:i}return i}},{key:"getMouseInfo",value:function(_){if(!this.container)return null;var M=this.container,w=M.getBoundingClientRect(),O=G$(w),E={chartX:Math.round(_.pageX-O.left),chartY:Math.round(_.pageY-O.top)},P=w.width/M.offsetWidth||1,C=this.inRange(E.chartX,E.chartY,P);if(!C)return null;var N=this.state,H=N.xAxisMap,T=N.yAxisMap,$=this.getTooltipEventType(),G=A3(this.state,this.props.data,this.props.layout,C);if($!=="axis"&&H&&T){var U=Aa(H).scale,z=Aa(T).scale,Q=U&&U.invert?U.invert(E.chartX):null,L=z&&z.invert?z.invert(E.chartY):null;return ae(ae({},E),{},{xValue:Q,yValue:L},G)}return G?ae(ae({},E),G):null}},{key:"inRange",value:function(_,M){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,O=this.props.layout,E=_/w,P=M/w;if(O==="horizontal"||O==="vertical"){var C=this.state.offset,N=E>=C.left&&E<=C.left+C.width&&P>=C.top&&P<=C.top+C.height;return N?{x:E,y:P}:null}var H=this.state,T=H.angleAxisMap,$=H.radiusAxisMap;if(T&&$){var G=Aa(T);return _S({x:E,y:P},G)}return null}},{key:"parseEventsOfWrapper",value:function(){var _=this.props.children,M=this.getTooltipEventType(),w=Sn(_,An),O={};w&&M==="axis"&&(w.props.trigger==="click"?O={onClick:this.handleClick}:O={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var E=Tc(this.props,this.handleOuterEvent);return ae(ae({},E),O)}},{key:"addListener",value:function(){Bv.on(xv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Bv.removeListener(xv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(_,M,w){for(var O=this.state.formattedGraphicalItems,E=0,P=O.length;E<P;E++){var C=O[E];if(C.item===_||C.props.key===_.key||M===Ur(C.item.type)&&w===C.childIndex)return C}return null}},{key:"renderClipPath",value:function(){var _=this.clipPathId,M=this.state.offset,w=M.left,O=M.top,E=M.height,P=M.width;return R.createElement("defs",null,R.createElement("clipPath",{id:_},R.createElement("rect",{x:w,y:O,height:E,width:P})))}},{key:"getXScales",value:function(){var _=this.state.xAxisMap;return _?Object.entries(_).reduce(function(M,w){var O=w3(w,2),E=O[0],P=O[1];return ae(ae({},M),{},Te({},E,P.scale))},{}):null}},{key:"getYScales",value:function(){var _=this.state.yAxisMap;return _?Object.entries(_).reduce(function(M,w){var O=w3(w,2),E=O[0],P=O[1];return ae(ae({},M),{},Te({},E,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(_){var M;return(M=this.state.xAxisMap)===null||M===void 0||(M=M[_])===null||M===void 0?void 0:M.scale}},{key:"getYScaleByAxisId",value:function(_){var M;return(M=this.state.yAxisMap)===null||M===void 0||(M=M[_])===null||M===void 0?void 0:M.scale}},{key:"getItemByXY",value:function(_){var M=this.state,w=M.formattedGraphicalItems,O=M.activeItem;if(w&&w.length)for(var E=0,P=w.length;E<P;E++){var C=w[E],N=C.props,H=C.item,T=H.type.defaultProps!==void 0?ae(ae({},H.type.defaultProps),H.props):H.props,$=Ur(H.type);if($==="Bar"){var G=(N.data||[]).find(function(L){return hz(_,L)});if(G)return{graphicalItem:C,payload:G}}else if($==="RadialBar"){var U=(N.data||[]).find(function(L){return _S(_,L)});if(U)return{graphicalItem:C,payload:U}}else if(d0(C,O)||h0(C,O)||$s(C,O)){var z=jU({graphicalItem:C,activeTooltipItem:O,itemData:T.data}),Q=T.activeIndex===void 0?z:T.activeIndex;return{graphicalItem:ae(ae({},C),{},{childIndex:Q}),payload:$s(C,O)?T.data[z]:C.props.data[z]}}}return null}},{key:"render",value:function(){var _=this;if(!DB(this))return null;var M=this.props,w=M.children,O=M.className,E=M.width,P=M.height,C=M.style,N=M.compact,H=M.title,T=M.desc,$=P3(M,qQ),G=Ae($,!1);if(N)return R.createElement(e3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement(Lv,si({},G,{width:E,height:P,title:H,desc:T}),this.renderClipPath(),LB(w,this.renderMap)));if(this.props.accessibilityLayer){var U,z;G.tabIndex=(U=this.props.tabIndex)!==null&&U!==void 0?U:0,G.role=(z=this.props.role)!==null&&z!==void 0?z:"application",G.onKeyDown=function(L){_.accessibilityManager.keyboardEvent(L)},G.onFocus=function(){_.accessibilityManager.focus()}}var Q=this.parseEventsOfWrapper();return R.createElement(e3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement("div",si({className:je("recharts-wrapper",O),style:ae({position:"relative",cursor:"default",width:E,height:P},C)},Q,{ref:function(K){_.container=K}}),R.createElement(Lv,si({},G,{width:E,height:P,title:H,desc:T,style:iY}),this.renderClipPath(),LB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(X.Component);Te(x,"displayName",n),Te(x,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Te(x,"getDerivedStateFromProps",function(b,S){var A=b.dataKey,_=b.data,M=b.children,w=b.width,O=b.height,E=b.layout,P=b.stackOffset,C=b.margin,N=S.dataStartIndex,H=S.dataEndIndex;if(S.updateId===void 0){var T=_3(b);return ae(ae(ae({},T),{},{updateId:0},y(ae(ae({props:b},T),{},{updateId:0}),S)),{},{prevDataKey:A,prevData:_,prevWidth:w,prevHeight:O,prevLayout:E,prevStackOffset:P,prevMargin:C,prevChildren:M})}if(A!==S.prevDataKey||_!==S.prevData||w!==S.prevWidth||O!==S.prevHeight||E!==S.prevLayout||P!==S.prevStackOffset||!li(C,S.prevMargin)){var $=_3(b),G={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},U=ae(ae({},A3(S,_,E)),{},{updateId:S.updateId+1}),z=ae(ae(ae({},$),G),U);return ae(ae(ae({},z),y(ae({props:b},z),S)),{},{prevDataKey:A,prevData:_,prevWidth:w,prevHeight:O,prevLayout:E,prevStackOffset:P,prevMargin:C,prevChildren:M})}if(!Dv(M,S.prevChildren)){var Q,L,K,Y,j=Sn(M,Wi),F=j&&(Q=(L=j.props)===null||L===void 0?void 0:L.startIndex)!==null&&Q!==void 0?Q:N,J=j&&(K=(Y=j.props)===null||Y===void 0?void 0:Y.endIndex)!==null&&K!==void 0?K:H,ue=F!==N||J!==H,he=!Ee(_),ge=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ge},y(ae(ae({props:b},S),{},{updateId:ge,dataStartIndex:F,dataEndIndex:J}),S)),{},{prevChildren:M,dataStartIndex:F,dataEndIndex:J})}return null}),Te(x,"renderActiveDot",function(b,S,A){var _;return X.isValidElement(b)?_=X.cloneElement(b,S):ke(b)?_=b(S):_=R.createElement(tl,S),R.createElement(De,{className:"recharts-active-dot",key:A},_)});var I=X.forwardRef(function(S,A){return R.createElement(x,si({},S,{ref:A}))});return I.displayName=x.displayName,I},vY=w0({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cb}),gY=w0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cb}),yY=w0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:f0},{axisType:"radiusAxis",AxisComp:c0}],formatAxisMap:SF,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),bY=w0({chartName:"ComposedChart",GraphicalChild:[qr,So,Sr,B0],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:I0}],formatAxisMap:cb});const W3=({active:e,payload:t,label:n})=>e&&t&&t.length?W.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[W.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),W.jsxs("div",{className:"space-y-1",children:[W.jsxs("p",{className:"text-sm",children:[W.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),W.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),W.jsxs("p",{className:"text-sm",children:[W.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),W.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),W.jsxs("p",{className:"text-sm",children:[W.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),W.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function eM({data:e,title:t,instanceId:n}){var y,x;const r=X.useId(),a=t||"Sessions & Escalation Trends",i=e.length<=3&&((x=(y=e[0])==null?void 0:y.week)==null?void 0:x.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,p=`chart-${l}-${e.length}`,f=e.map((I,b)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${b}`})),m=`colorSessions-${l}`,d=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return W.jsxs(zn,{className:"shadow-xl border-0",children:[W.jsx(jp,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:W.jsxs("div",{className:"flex items-start justify-between",children:[W.jsxs("div",{children:[W.jsx(Hp,{className:"text-2xl font-black text-gray-900",children:a}),W.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),W.jsxs("div",{className:"flex gap-2",children:[W.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[W.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),W.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),W.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[W.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),W.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),W.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[W.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),W.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),W.jsx(Un,{className:"p-6 bg-white",children:W.jsx(jy,{width:"100%",height:400,children:i?W.jsxs(bY,{data:f,barGap:8,barCategoryGap:"20%",children:[W.jsxs("defs",{children:[W.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[W.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),W.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),W.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[W.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),W.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),W.jsx(Wp,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),W.jsx(Ra,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),W.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),W.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),W.jsx(An,{content:W.jsx(W3,{})},`tooltip-${l}`),W.jsx(Ma,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),W.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),W.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),W.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p):W.jsxs(vY,{data:f,children:[W.jsx("defs",{children:W.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[W.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),W.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),W.jsx(Wp,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),W.jsx(Ra,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),W.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),W.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),W.jsx(An,{content:W.jsx(W3,{})},`tooltip-${l}`),W.jsx(Ma,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),W.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),W.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),W.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},p)})})]})}const M3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function tM({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return W.jsxs(zn,{children:[W.jsxs(jp,{children:[W.jsx(Hp,{children:r}),W.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),W.jsx(Un,{children:W.jsx(jy,{width:"100%",height:300,children:W.jsxs(yY,{children:[W.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:i.map(s=>W.jsx(Ys,{fill:M3[i.indexOf(s)%M3.length]},s.uniqueKey))},`pie-${a}`),W.jsx(An,{formatter:(s,l,p)=>[`${s.toLocaleString()} sessions (${p.payload.percentage.toFixed(1)}%)`,p.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function IY({data:e}){const t=e.reduce((a,i)=>{const s=a.find(l=>l.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),n=t.slice(0,10),r=t.reduce((a,i)=>a+i.count,0);return W.jsxs(zn,{children:[W.jsxs(jp,{children:[W.jsx(Hp,{children:"Product Breakdown (Human Handled)"}),W.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),W.jsx(Un,{children:W.jsx(jy,{width:"100%",height:300,children:W.jsxs(gY,{data:n,children:[W.jsx(Wp,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),W.jsx(Ra,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),W.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),W.jsx(An,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),W.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function nM({className:e,...t}){return W.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:W.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function rM({className:e,...t}){return W.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function aM({className:e,...t}){return W.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function fi({className:e,...t}){return W.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return W.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function _n({className:e,...t}){return W.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function BY({data:e}){const[t,n]=X.useState(new Set),r=a=>{const i=new Set(t);i.has(a)?i.delete(a):i.add(a),n(i)};return W.jsx("div",{className:"border rounded-lg overflow-hidden",children:W.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:W.jsxs(nM,{children:[W.jsx(rM,{className:"bg-gray-50 sticky top-0 z-10",children:W.jsxs(fi,{children:[W.jsx(Dr,{className:"w-12"}),W.jsx(Dr,{children:"Issue Type"}),W.jsx(Dr,{className:"text-right",children:"Count"})]})}),W.jsx(aM,{children:e.flatMap((a,i)=>{const s=t.has(a.issue),l=[W.jsxs(fi,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[W.jsx(_n,{children:s?W.jsx(LE,{className:"w-4 h-4"}):W.jsx(Mv,{className:"w-4 h-4"})}),W.jsx(_n,{className:"font-medium",children:a.issue}),W.jsx(_n,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((p,f)=>{l.push(W.jsxs(fi,{className:"bg-blue-50",children:[W.jsx(_n,{}),W.jsx(_n,{className:"pl-8",children:W.jsxs("div",{children:[W.jsx("div",{className:"font-medium text-sm text-gray-900",children:p.subType}),W.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:p.products.map((m,d)=>W.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",W.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${p.subType}-${m.product}-${d}`))})]})}),W.jsx(_n,{className:"text-right",children:p.count})]},`${a.issue}-${p.subType}-${f}`))}),l})})]})})})}const Zu=50;function ri({field:e,currentField:t,direction:n,onSort:r,children:a}){return W.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,W.jsx(jE,{className:`w-4 h-4 ${t===e?"text-blue-600":"text-gray-400"}`})]})}function xY({data:e=[]}){const[t,n]=X.useState("createdAt"),[r,a]=X.useState("desc"),[i,s]=X.useState(0),l=X.useCallback(d=>{n(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),s(0)},[]),p=X.useMemo(()=>[...e].sort((d,v)=>{let y,x;return t==="createdAt"?(y=yr(d.createdAt).getTime(),x=yr(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(x)&&(x=-1/0)):(y=(d[t]||"").toLowerCase(),x=(v[t]||"").toLowerCase()),r==="asc"?y>x?1:y<x?-1:0:y<x?1:y>x?-1:0}),[e,t,r]),f=Math.ceil(p.length/Zu),m=X.useMemo(()=>p.slice(i*Zu,(i+1)*Zu),[p,i]);return W.jsxs("div",{className:"space-y-3",children:[W.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[W.jsxs("span",{children:["Showing ",W.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Zu+1,"–",Math.min((i+1)*Zu,p.length)]})," of ",W.jsx("span",{className:"font-semibold text-gray-800",children:p.length.toLocaleString()})," sessions"]}),W.jsxs("div",{className:"flex items-center gap-2",children:[W.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:W.jsx(SI,{className:"w-4 h-4"})}),W.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),W.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:W.jsx(Mv,{className:"w-4 h-4"})})]})]}),W.jsx("div",{className:"border rounded-lg overflow-hidden",children:W.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:W.jsxs(nM,{children:[W.jsx(rM,{className:"bg-gray-50 sticky top-0 z-10",children:W.jsxs(fi,{children:[W.jsx(Dr,{children:W.jsx(ri,{field:"createdAt",currentField:t,direction:r,onSort:l,children:"Date"})}),W.jsx(Dr,{children:W.jsx(ri,{field:"channel",currentField:t,direction:r,onSort:l,children:"Channel"})}),W.jsx(Dr,{children:W.jsx(ri,{field:"product",currentField:t,direction:r,onSort:l,children:"Product"})}),W.jsx(Dr,{children:W.jsx(ri,{field:"issue",currentField:t,direction:r,onSort:l,children:"Issue"})}),W.jsx(Dr,{children:W.jsx(ri,{field:"subType",currentField:t,direction:r,onSort:l,children:"Sub Type"})}),W.jsx(Dr,{children:W.jsx(ri,{field:"handled",currentField:t,direction:r,onSort:l,children:"Handled By"})})]})}),W.jsx(aM,{children:m.length===0?W.jsx(fi,{children:W.jsx(_n,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):m.map((d,v)=>W.jsxs(fi,{className:"hover:bg-blue-50/50 transition-colors",children:[W.jsx(_n,{className:"whitespace-nowrap text-gray-700",children:rR(yr(d.createdAt))}),W.jsx(_n,{children:W.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),W.jsx(_n,{className:"text-gray-700",children:d.product||"-"}),W.jsx(_n,{className:"text-gray-700",children:d.issue||"-"}),W.jsx(_n,{className:"text-gray-500 text-xs",children:d.subType||"-"}),W.jsx(_n,{children:W.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&W.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[W.jsx("button",{onClick:()=>s(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),W.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:W.jsx(SI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,W.jsx("button",{onClick:()=>s(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),W.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:W.jsx(Mv,{className:"w-4 h-4"})}),W.jsx("button",{onClick:()=>s(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function oM({metrics:e,topChannel:t,top5Products:n,top5Issues:r,monthCount:a}){return W.jsxs(zn,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[W.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:W.jsxs("div",{className:"flex items-center gap-3",children:[W.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:W.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),W.jsxs("div",{children:[W.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),W.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),W.jsxs(Un,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[W.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[W.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[W.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[W.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:W.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:W.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),W.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),W.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),W.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),W.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[W.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[W.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:W.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),W.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),W.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),W.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),W.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[W.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[W.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:W.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),W.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),W.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),W.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),W.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[W.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[W.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:W.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),W.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),W.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(t==null?void 0:t.channel)||"N/A"}),W.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((t==null?void 0:t.percentage)||0).toFixed(1),"% Share"]})]})]}),W.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[W.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[W.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:W.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:W.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),W.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[W.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),W.jsx("div",{className:"space-y-2 relative z-10",children:n.map((i,s)=>W.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[W.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[W.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.product||"N/A"]}),W.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},s))})]}),W.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[W.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:W.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:W.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),W.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[W.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),W.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,s)=>W.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[W.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[W.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.issue||"N/A"]}),W.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},s))})]})]})]})]})}function wY({monthsData:e,weeklyEscalation:t}){const n=e.flatMap(l=>l.data),r=Tv(n),a=Nv(n)[0],i=AA(n).slice(0,5),s=Rv(n,5);return W.jsxs(W.Fragment,{children:[W.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[W.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),W.jsx(Un,{className:"p-5 relative z-10",children:W.jsxs("div",{className:"text-center text-white",children:[W.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[W.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:W.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),W.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),W.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),W.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>{const p=Rv(l.data,3);return W.jsxs(zn,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[W.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),W.jsx(jp,{className:"text-white pb-3 pt-4 relative z-10",children:W.jsxs("div",{className:"text-center",children:[W.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[W.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:W.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),W.jsx(Hp,{className:"text-2xl font-black mb-3 drop-shadow",children:l.name}),W.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[W.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),W.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:l.data.length.toLocaleString()}),l.data.length<200&&W.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),W.jsxs(Un,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[W.jsxs("div",{className:"space-y-2 mb-4",children:[W.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[W.jsxs("div",{className:"flex justify-between items-center mb-1",children:[W.jsxs("div",{className:"flex items-center gap-1.5",children:[W.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:W.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),W.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),W.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:W.jsxs("p",{className:"text-sm font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),W.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),W.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[W.jsxs("div",{className:"flex justify-between items-center mb-1",children:[W.jsxs("div",{className:"flex items-center gap-1.5",children:[W.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:W.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),W.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),W.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:W.jsxs("p",{className:"text-sm font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),W.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]})]}),W.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[W.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[W.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),W.jsx("div",{className:"space-y-1.5",children:p.map((f,m)=>W.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[W.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),W.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},m))})]})]})]},l.name)})}),W.jsx(eM,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),W.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>W.jsx(tM,{data:l.channels,title:`${l.name} - Channels`},l.name))}),W.jsx(oM,{metrics:r,topChannel:a,top5Products:i,top5Issues:s,monthCount:e.length})]})}const PY=`Channel,Created at,Product,Issue,Sub Type,Handled\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,Waggle Cam pro,Set Up,,Human\r
Inapp,2026-01-01,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,PM,Temp Issue,,Human\r
Webapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,PM,GPS Issue,,Human\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Webapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,RV Mini Cam,Tech Query ,,Human\r
Webapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Webapp,2026-01-01,RV Mini Cam,Presales,,Human\r
Inapp,2026-01-01,4g mini,Subscription Activation,,Human\r
Webapp,2026-01-01,,,,Bot\r
Webapp,2026-01-01,,,,Bot\r
Webapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-01,,,,Bot\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,PM,DNR,,Human\r
Webapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,,,,Bot\r
Webapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-02,,,,Bot\r
Webapp,2026-01-02,4g mini,Subscription Activation,,Human\r
Webapp,2026-01-02,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-02,,,,Bot\r
Webapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,PM,DNR,,Human\r
Inapp,2026-01-02,4g mini,Subscription Activation - Combo,,Human\r
Webapp,2026-01-02,,,,Bot\r
Webapp,2026-01-02,4g mini,App Navigation,,Human\r
Webapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,4g mini,App Navigation,,Human\r
Inapp,2026-01-02,4g mini,Sound Detection,,Human\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,PM,Tech Query ,,Human\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,4g mini,Subscription Activation - Combo,,Human\r
Inapp,2026-01-02,PM,Turning On,,Human\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-02,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,PM,DNR,,Human\r
Inapp,2026-01-03,PM,DNR,,Human\r
Inapp,2026-01-03,PM,App Navigation,,Human\r
Inapp,2026-01-03,PM,Order Status,,Human\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,PM,False Power Loss,,Human\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,PM,DNR,,Human\r
Inapp,2026-01-03,PM,Temp Issue,,Human\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,4g mini,Set Up,,Human\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,PM,Login Issue,,Human\r
Webapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,PM,Subscription Activation,,Human\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,,,,Bot\r
Webapp,2026-01-03,,,,Bot\r
Inapp,2026-01-03,PM,False Power Loss,,Human\r
Inapp,2026-01-03,PM,Presales,,Human\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Webapp,2026-01-04,PM,Accessories,,Human\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Webapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Webapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,,,,Bot\r
Webapp,2026-01-04,PM,Pause Subcription,,Human\r
Inapp,2026-01-04,,,,Bot\r
Inapp,2026-01-04,PM,Accessories,,Human\r
Inapp,2026-01-05,,,,Bot\r
Webapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,PM,Subscription Activation,,Human\r
Inapp,2026-01-05,RV Mini Cam,Connection,,Human\r
Webapp,2026-01-05,PM,Accessories,,Human\r
Inapp,2026-01-05,PM,GPS Issue,,Human\r
Inapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,4g mini,Motion alerts,,Human\r
Inapp,2026-01-05,4g camera,Accessories,,Human\r
Webapp,2026-01-05,4g mini,Accessories,,Human\r
Webapp,2026-01-05,,,,Bot\r
Webapp,2026-01-05,4g mini,Presales,,Human\r
Inapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,,,,Bot\r
Webapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,,,,Bot\r
Webapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,,,,Bot\r
Webapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,Waggle Cam pro,Registration Issue,,Human\r
Inapp,2026-01-05,RV Mini Cam,Subscription Activation,,Human\r
Inapp,2026-01-05,,,,Bot\r
Inapp,2026-01-05,PM,Battery Issue,,Human\r
Webapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,4g mini,Sound Detection,,Human\r
Inapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,4g mini,Connection,,Human\r
Inapp,2026-01-06,PM,DNR,,Human\r
Webapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,4g mini,Subscription Activation - Combo,,Human\r
Inapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,Vet Chat,Query,,Human\r
Webapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Inapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,,,,Bot\r
Webapp,2026-01-06,4g camera,Subscription query,,Human\r
Inapp,2026-01-06,NA,No Reason,,Human\r
Inapp,2026-01-06,RV Mini Cam,Subscription Activation,,Human\r
Webapp,2026-01-06,PM,Accessories,,Human\r
Webapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,PM,DNR,,Human\r
Webapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Webapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Webapp,2026-01-07,PM,DNR,,Human\r
Webapp,2026-01-07,4g camera,Presales,,Human\r
Webapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,PM,Login Issue,,Human\r
Webapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,4g mini,Subscription Activation,,Human\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,Waggle Cam pro,Login Issue,,Human\r
Webapp,2026-01-07,Waggle Cam pro,Login Issue,,Human\r
Inapp,2026-01-07,Waggle Cam pro,Presales,,Human\r
Webapp,2026-01-07,4g mini,Motion alerts,,Human\r
Inapp,2026-01-07,,,,Bot\r
Webapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,,,,Bot\r
Inapp,2026-01-07,PM,DNR,,Human\r
Inapp,2026-01-07,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-07,PM,Presales,,Human\r
Inapp,2026-01-08,PM,GPS Issue,,Human\r
Inapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,Waggle Cam pro,Presales,,Human\r
Webapp,2026-01-08,4g mini,Subscription query,,Human\r
Webapp,2026-01-08,PM,DNR,,Human\r
Inapp,2026-01-08,RV Mini Cam,Subscription Cancellaiton,,Human\r
Webapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,NA,No Reason,,Human\r
Webapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,Waggle Cam pro,Connection,,Human\r
Webapp,2026-01-08,PM,Login Issue,,Human\r
Webapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,4g mini,Login Issue,,Human\r
Inapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,PM,DNR,,Human\r
Inapp,2026-01-08,RV Mini Cam,Motion alerts,,Human\r
Inapp,2026-01-08,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,,,,Bot\r
Inapp,2026-01-08,,,,Bot\r
Webapp,2026-01-08,4g mini,Subscription Activation,,Human\r
Webapp,2026-01-08,4g mini,Connection,,Human\r
Webapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Webapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Webapp,2026-01-09,,,,Bot\r
Webapp,2026-01-09,4g camera,Subscription query,,Human\r
Inapp,2026-01-09,PM,App Navigation,,Human\r
Webapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,PM,DNR,,Human\r
Webapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,PM,Tech Query ,,Human\r
Inapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,4g mini,Connection,,Human\r
Inapp,2026-01-09,PM,Power Recovery Not Sent,,Human\r
Inapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Webapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Inapp,2026-01-09,,,,Bot\r
Webapp,2026-01-09,PM,Login Issue,,Human\r
Inapp,2026-01-09,PM,Return & refund,,Human\r
Webapp,2026-01-09,4g mini,Subscription Activation - Combo,,Human\r
Inapp,2026-01-09,PM,Login Issue,,Human\r
Inapp,2026-01-09,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,RV Mini Cam,Set Up,,Human\r
Webapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,RV Mini Cam,Connection,,Human\r
Webapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,PM,DNR,,Human\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,RV Mini Cam,Accessories,,Human\r
Webapp,2026-01-10,PM,Presales,,Human\r
Inapp,2026-01-10,Waggle Cam pro,Treat Tosser Issue,,Human\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,4g mini,Presales,,Human\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,PM,DNR,,Human\r
Webapp,2026-01-10,PM,False Power Loss,,Human\r
Inapp,2026-01-10,PM,DNR,,Human\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-10,PM,Humidity Issue,,Human\r
Inapp,2026-01-10,PM,Charging Issue,,Human\r
Webapp,2026-01-10,PM,Tech Query ,,Human\r
Inapp,2026-01-10,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,PM,Subscription Activation,,Human\r
Inapp,2026-01-11,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,4g mini,Login Issue,,Human\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,,,,Bot\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-11,RV Mini Cam,Subscription Activation,,Human\r
Webapp,2026-01-11,4g mini,Presales,,Human\r
Webapp,2026-01-11,,,,Bot\r
Inapp,2026-01-12,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,PM,Accessories,,Human\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-12,Waggle Cam pro,Squeaky Sound,,Human\r
Inapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,PM,Temp Issue,,Human\r
Webapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,4g mini,Subscription Activation - Combo,,Human\r
Webapp,2026-01-12,PM,Turning On,,Human\r
Inapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,PM,Replcement Set Up,,Human\r
Inapp,2026-01-12,,,,Bot\r
Webapp,2026-01-12,RV Mini Cam,Connection,,Human\r
Webapp,2026-01-12,,,,Bot\r
Inapp,2026-01-12,,,,Bot\r
Inapp,2026-01-13,PM,DNR,,Human\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,RV Mini Cam,Connection,,Human\r
Webapp,2026-01-13,PM,Presales,,Human\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,,,,Bot\r
Webapp,2026-01-13,,,,Bot\r
Webapp,2026-01-13,PM,Tech Query ,,Human\r
Inapp,2026-01-13,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,Waggle Cam pro,Connection,,Human\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,PM,Login Issue,,Human\r
Webapp,2026-01-13,PM,Profile - Dog Breed,,Human\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,PM,Subscription Activation,,Human\r
Inapp,2026-01-13,PM,Subscription Activation,,Human\r
Inapp,2026-01-13,,,,Bot\r
Inapp,2026-01-13,4g camera,Presales,,Human\r
Webapp,2026-01-14,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-14,PM,DNR,,Human\r
Webapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,PM,Registration Issue,,Human\r
Webapp,2026-01-14,PM,DNR,,Human\r
Inapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,PM,DNR,,Human\r
Inapp,2026-01-14,RV Mini Cam,Connection,,Human\r
Webapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,,,,Bot\r
Webapp,2026-01-14,4g mini,Subscription Activation,,Human\r
Inapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,PM,DNR,,Human\r
Inapp,2026-01-14,,,,Bot\r
Inapp,2026-01-14,,,,Bot\r
Inapp,2026-01-15,PM,DNR,,Human\r
Webapp,2026-01-15,,,,Bot\r
Webapp,2026-01-15,4g camera,Connection,,Human\r
Webapp,2026-01-15,PM,Presales,,Human\r
Inapp,2026-01-15,,,,Bot\r
Webapp,2026-01-15,PM,Battery Issue,,Human\r
Webapp,2026-01-15,,,,Bot\r
Inapp,2026-01-15,Waggle Cam pro,Connection,,Human\r
Webapp,2026-01-15,RV Mini Cam,Tech Query ,,Human\r
Webapp,2026-01-15,PM,Subscription query,,Human\r
Webapp,2026-01-15,PM,Subscription Activation,,Human\r
Webapp,2026-01-15,Waggel Insurance,Waggel Insurance,,Human\r
Inapp,2026-01-15,,,,Bot\r
Webapp,2026-01-15,PM,Subscription Activation,,Human\r
Inapp,2026-01-15,PM,DNR,,Human\r
Inapp,2026-01-15,4g mini,Connection,,Human\r
Inapp,2026-01-15,,,,Bot\r
Inapp,2026-01-15,PM,DNR,,Human\r
Inapp,2026-01-15,PM,Subscription Mapping Issue,,Human\r
Inapp,2026-01-15,4g mini,Noise Issue,,Human\r
Inapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,NA,No Reason,,Human\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,PM,DNR,,Human\r
Inapp,2026-01-16,RV Mini Cam,Multiple Login,,Human\r
Webapp,2026-01-16,4g mini,Connection,,Human\r
Webapp,2026-01-16,4g camera,Return & refund,,Human\r
Inapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,Waggle Cam pro,Subscription query,,Human\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,PM,Subscription Activation,,Human\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,PM,DNR,,Human\r
Inapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,4g mini,Connection,,Human\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,4g mini,Battery Issue,,Human\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,PM,DNR,,Human\r
Webapp,2026-01-16,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,4g mini,App Navigation,,Human\r
Inapp,2026-01-16,PM,DNR,,Human\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,4g mini,Subscription Mapping Issue,,Human\r
Inapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Webapp,2026-01-16,,,,Bot\r
Inapp,2026-01-16,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,PM,DNR,,Human\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,PM,Subscription Activation,,Human\r
Webapp,2026-01-17,4g mini,Tech Query ,,Human\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,PM,DNR,,Human\r
Webapp,2026-01-17,4g camera,Presales,,Human\r
Inapp,2026-01-17,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Inapp,2026-01-17,PM,App Issue,,Human\r
Inapp,2026-01-17,PM,Registration Issue,,Human\r
Inapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,,,,Bot\r
Webapp,2026-01-17,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,PM,Referral Query,,Human\r
Webapp,2026-01-18,,,,Bot\r
Inapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-18,,,,Bot\r
Inapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,PM,Tech Query ,,Human\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-18,,,,Bot\r
Inapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,Waggle Cam pro,Device Removal,,Human\r
Inapp,2026-01-18,PM,Subscription Activation - Combo,,Human\r
Webapp,2026-01-18,PM,Accessories,,Human\r
Inapp,2026-01-18,,,,Bot\r
Inapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,,,,Bot\r
Inapp,2026-01-18,PM,DNR,,Human\r
Inapp,2026-01-18,,,,Bot\r
Inapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,,,,Bot\r
Webapp,2026-01-18,4g mini,Tech Query ,,Human\r
Inapp,2026-01-18,,,,Bot\r
Inapp,2026-01-19,4g mini,Set Up,,Human\r
Inapp,2026-01-19,4g mini,Registration Issue,,Human\r
Webapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,PM,DNR,,Human\r
Webapp,2026-01-19,PM,Device Query,,Human\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,PM,Accessories,,Human\r
Inapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,NA,No Reason,,Human\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,RV Mini Cam,Device Query,,Human\r
Inapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,PM,Turning On,,Human\r
Inapp,2026-01-19,,,,Bot\r
Inapp,2026-01-19,,,,Bot\r
Webapp,2026-01-19,PM,Login Query,,Human\r
Webapp,2026-01-19,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Webapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Webapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,4g mini,App Navigation,,Human\r
Webapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Webapp,2026-01-20,RV Mini Cam,Presales,,Human\r
Inapp,2026-01-20,PM,DNR,,Human\r
Webapp,2026-01-20,,,,Bot\r
Webapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,4g mini,Subscription Activation,,Human\r
Webapp,2026-01-20,PM,DNR,,Human\r
Inapp,2026-01-20,,,,Bot\r
Webapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,PM,Registration Issue,,Human\r
Inapp,2026-01-20,RV Mini Cam,Device Removal,,Human\r
Inapp,2026-01-20,PM,Charging Issue,,Human\r
Inapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,4g camera,Device Query,,Human\r
Webapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Inapp,2026-01-20,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,PM,Order Status,,Human\r
Inapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,PM,Device Query,,Human\r
Webapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,PM,Charging Issue,,Human\r
Inapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,Smart Sensor,Connection,,Human\r
Inapp,2026-01-21,PM,DNR,,Human\r
Inapp,2026-01-21,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,4g mini,Device Query,,Human\r
Webapp,2026-01-21,,,,Bot\r
Inapp,2026-01-21,,,,Bot\r
Webapp,2026-01-21,NA,No Reason,,Human\r
Inapp,2026-01-22,PM,DNR,,Human\r
Webapp,2026-01-22,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,PM,Profile - Dog Breed,,Human\r
Inapp,2026-01-22,,,,Bot\r
Webapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Webapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,4g mini,Device Removal,,Human\r
Inapp,2026-01-22,,,,Bot\r
Inapp,2026-01-22,,,,Bot\r
Webapp,2026-01-22,PM,Upgrade,,Human\r
Inapp,2026-01-22,PM,DNR,,Human\r
Webapp,2026-01-22,4g camera,Subscription Activation,,Human\r
Inapp,2026-01-22,PM,Subscription Activation,,Human\r
Webapp,2026-01-22,,,,Bot\r
Webapp,2026-01-22,,,,Bot\r
Webapp,2026-01-22,,,,Bot\r
Webapp,2026-01-22,,,,Bot\r
Inapp,2026-01-23,PM,Subscription Activation,,Human\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,PM,Flexi Plan Confusion,,Human\r
Inapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,PM,Presales,,Human\r
Inapp,2026-01-23,4g mini,Connection,,Human\r
Inapp,2026-01-23,PM,Text Alerts Exhausted,,Human\r
Inapp,2026-01-23,Smart Sensor,Connection,,Human\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,RV Mini Cam,Multiple Login,,Human\r
Inapp,2026-01-23,RV Mini Cam,Multiple Login,,Human\r
Inapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,PM,Display Issue,,Human\r
Inapp,2026-01-23,PM,Replcement Set Up,,Human\r
Webapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,4g mini,Presales,,Human\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,PM,Subscription Activation,,Human\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,RV Mini Cam,Subscription Activation,,Human\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,PM,False Power Loss,,Human\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,,,,Bot\r
Webapp,2026-01-23,PM,Device Query,,Human\r
Webapp,2026-01-23,PM,Presales,,Human\r
Webapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,PM,DNR,,Human\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-23,,,,Bot\r
Inapp,2026-01-24,,,,Bot\r
Webapp,2026-01-24,PM,App Navigation,,Human\r
Inapp,2026-01-24,PM,Temp Issue,,Human\r
Inapp,2026-01-24,4g camera,Connection,,Human\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,Waggle Cam pro,Motion alerts,,Human\r
Inapp,2026-01-24,PM,DNR,,Human\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,PM,Temp Issue,,Human\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,PM,DNR,,Human\r
Inapp,2026-01-24,PM,DNR,,Human\r
Webapp,2026-01-24,PM,DNR,,Human\r
Inapp,2026-01-24,,,,Bot\r
Webapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,PM,App Navigation,,Human\r
Webapp,2026-01-24,,,,Bot\r
Webapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,4g mini,App Navigation,,Human\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,,,,Bot\r
Webapp,2026-01-24,,,,Bot\r
Webapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,4g mini,Subscription Mapping Issue,,Human\r
Inapp,2026-01-24,,,,Bot\r
Inapp,2026-01-24,,,,Bot\r
Webapp,2026-01-24,PM,Subscription query,,Human\r
Webapp,2026-01-24,,,,Bot\r
Webapp,2026-01-25,,,,Bot\r
Inapp,2026-01-25,4g mini,Turning On,,Human\r
Inapp,2026-01-25,4g mini,Subscription Activation - Combo,,Human\r
Webapp,2026-01-25,PM,Battery Issue,,Human\r
Inapp,2026-01-25,,,,Bot\r
Webapp,2026-01-25,4g mini,Return & refund,,Human\r
Inapp,2026-01-25,RV Mini Cam,Registration Issue,,Human\r
Webapp,2026-01-25,,,,Bot\r
Webapp,2026-01-25,4g mini,Presales,,Human\r
Webapp,2026-01-25,PM,Order Status,,Human\r
Inapp,2026-01-25,PM,DNR,,Human\r
Inapp,2026-01-25,PM,DNR,,Human\r
Inapp,2026-01-25,,,,Bot\r
Webapp,2026-01-25,,,,Bot\r
Webapp,2026-01-25,4g mini,Subscription Activation,,Human\r
Inapp,2026-01-25,PM,DNR,,Human\r
Inapp,2026-01-25,,,,Bot\r
Inapp,2026-01-25,PM,DNR,,Human\r
Inapp,2026-01-25,,,,Bot\r
Webapp,2026-01-25,4g camera,Connection,,Human\r
Inapp,2026-01-25,PM,Accessories,,Human\r
Webapp,2026-01-25,,,,Bot\r
Webapp,2026-01-25,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Webapp,2026-01-26,,,,Bot\r
Webapp,2026-01-26,,,,Bot\r
Webapp,2026-01-26,Vet Chat,Query,,Human\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Webapp,2026-01-26,PM,Presales,,Human\r
Webapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Webapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,PM,Subscription Mapping Issue,,Human\r
Inapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,PM,DNR,,Human\r
Webapp,2026-01-26,,,,Bot\r
Inapp,2026-01-26,,,,Bot\r
Webapp,2026-01-26,PM,Presales,,Human\r
Webapp,2026-01-26,4g mini,Presales,,Human\r
Inapp,2026-01-26,PM,Turning On,,Human\r
Inapp,2026-01-27,,,,Bot\r
Webapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,,,,Bot\r
Webapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,PM,DNR,,Human\r
Inapp,2026-01-27,4g mini,Device Query,,Human\r
Inapp,2026-01-27,PM,Accessories,,Human\r
Webapp,2026-01-27,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,4g mini,Referral Query,,Human\r
Inapp,2026-01-27,PM,DNR,,Human\r
Inapp,2026-01-27,,,,Bot\r
Webapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,PM,Device Removal,,Human\r
Webapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,PM,DNR,,Human\r
Inapp,2026-01-27,PM,DNR,,Human\r
Webapp,2026-01-27,PM,Presales,,Human\r
Inapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,,,,Bot\r
Webapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,,,,Bot\r
Webapp,2026-01-27,,,,Bot\r
Webapp,2026-01-27,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-27,,,,Bot\r
Inapp,2026-01-27,4g mini,Subscription Activation,,Human\r
Webapp,2026-01-27,,,,Bot\r
Webapp,2026-01-28,4g mini,Presales,,Human\r
Inapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,RV Mini Cam,Presales,,Human\r
Webapp,2026-01-28,PM,Device Query,,Human\r
Webapp,2026-01-28,PM,Presales,,Human\r
Inapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,RV Mini Cam,Connection,,Human\r
Inapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,PM,Login Issue,,Human\r
Inapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,PM,DNR,,Human\r
Webapp,2026-01-28,RV Mini Cam,Presales,,Human\r
Inapp,2026-01-28,,,,Bot\r
Inapp,2026-01-28,,,,Bot\r
Webapp,2026-01-28,Waggle Cam pro,Connection,,Human\r
Inapp,2026-01-29,,,,Bot\r
Webapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,,,,Bot\r
Webapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,4g mini,Connection,,Human\r
Inapp,2026-01-29,Waggel Insurance,Waggel Insurance,,Human\r
Inapp,2026-01-29,,,,Bot\r
Webapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,PM,DNR,,Human\r
Webapp,2026-01-29,4g mini,Presales,,Human\r
Inapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,PM,DNR,,Human\r
Webapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,,,,Bot\r
Webapp,2026-01-29,4g mini,Subscription Activation,,Human\r
Inapp,2026-01-29,,,,Bot\r
Inapp,2026-01-29,,,,Bot\r
Webapp,2026-01-29,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,PM,Subscription Activation,,Human\r
Webapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,PM,App Navigation,,Human\r
Webapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,PM,Presales,,Human\r
Webapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,PM,Subscription Activation,,Human\r
Webapp,2026-01-30,,,,Bot\r
Inapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,PM,Login Issue,,Human\r
Inapp,2026-01-30,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,,,,Bot\r
Webapp,2026-01-30,PM,Subscription Cancellaiton,,Human\r
Inapp,2026-01-30,Waggle Cam pro,Connection,,Human\r
Inapp,2026-01-31,PM,Flexi Plan Confusion,,Human\r
Inapp,2026-01-31,PM,DNR,,Human\r
Webapp,2026-01-31,RV Mini Cam,Subscription Activation,,Human\r
Inapp,2026-01-31,PM,Subscription Cancellaiton,,Human\r
Webapp,2026-01-31,4g mini,order related,,Human\r
Inapp,2026-01-31,PM,DNR,,Human\r
Webapp,2026-01-31,,,,Bot\r
Inapp,2026-01-31,PM,DNR,,Human\r
Inapp,2026-01-31,PM,DNR,,Human\r
Webapp,2026-01-31,,,,Bot\r
Inapp,2026-01-31,PM,DNR,,Human\r
Inapp,2026-01-31,PM,DNR,,Human\r
Inapp,2026-01-31,PM,DNR,,Human\r
Webapp,2026-01-31,PM,Subscription Activation - Combo,,Human\r
Webchat,2026-02-01,,,,Bot\r
Inapp,2026-02-01,,,,Bot\r
Webchat,2026-02-01,,,,Bot\r
Inapp,2026-02-01,,,,Bot\r
Webchat,2026-02-01,,,,Bot\r
Webchat,2026-02-01,PM,Subs Activation,Activation Steps,Human\r
Inapp,2026-02-01,4g camera,Subs Cancellation,Steps,Human\r
Inapp,2026-02-01,PM,InApp Notification,Not receiving,Human\r
Inapp,2026-02-01,PM,DNR,Reset Not working,Human\r
Webchat,2026-02-01,PM,Alerts,Limit,Human\r
Webchat,2026-02-01,,,,Bot\r
Webchat,2026-02-01,PM,multi-user-access,Sharing,Human\r
Webchat,2026-02-01,PM,Sub Query,Pricing,Human\r
Webchat,2026-02-01,,,,Bot\r
Webchat,2026-02-01,,,,Bot\r
Inapp,2026-02-01,,,,Bot\r
Webchat,2026-02-01,,,,Bot\r
Webchat,2026-02-01,,,,Bot\r
Inapp,2026-02-01,,,,Bot\r
Inapp,2026-02-01,,,,Bot\r
Inapp,2026-02-01,PM,Subs Cancellation,Unable to do that,Human\r
Inapp,2026-02-01,,,,Bot\r
Inapp,2026-02-01,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-01,PM,Sub Query,Price High,Human\r
Inapp,2026-02-02,,,,Bot\r
Inapp,2026-02-02,PM,Subs Cancellation,Remove CC,Human\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,4g mini,Sim not Found,,Human\r
Inapp,2026-02-02,,,,Bot\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,PM,Subs Cancellation,Steps,Human\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,,,,Bot\r
Inapp,2026-02-02,PM,DNR,Back reset,Human\r
Inapp,2026-02-02,4g mini,Streaming,from another Device,Human\r
Webchat,2026-02-02,PM,Return & refund,Policy,Human\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,NA,No reason,,Human\r
Webchat,2026-02-02,,,,Bot\r
Inapp,2026-02-02,PM,DNR,Further steps,Human\r
Inapp,2026-02-02,,,,Bot\r
Webchat,2026-02-02,PM,Flexi Plan Confusion,Further steps,Human\r
Inapp,2026-02-02,,,,Bot\r
Inapp,2026-02-02,PM,DNR,Further steps,Human\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,PM,Registration Query,Add Pm,Human\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,PM,LED light Issue,Red & Amber Flashing,Human\r
Webchat,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,PM,Battery Issue,Not charging,Human\r
Inapp,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,4g mini,Audio Issue,Button not working,Human\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Inapp,2026-02-03,,,,Bot\r
Webchat,2026-02-03,,,,Bot\r
Webchat,2026-02-03,PM,Subs Activation,Activate monthly plan in app,Human\r
Webchat,2026-02-03,,,,Bot\r
Inapp,2026-02-03,4g mini,App Query,Turn off cam form app,Human\r
Inapp,2026-02-04,,,,Bot\r
Inapp,2026-02-04,PM,Display ,LED blinking,Human\r
Webchat,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,PM,Support related,,Human\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Inapp,2026-02-04,PM,Login,wrong cred,Human\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,PM,LED light Issue,,Human\r
Inapp,2026-02-04,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-04,PM,Charging Query,Charging LED Query,Human\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,PM,Setup,,Human\r
Inapp,2026-02-04,,,,Bot\r
Inapp,2026-02-04,PM,Error 121,Display,Human\r
Webchat,2026-02-04,PM,Address change,Order related,Human\r
Inapp,2026-02-04,PM,Display ,not working,Human\r
Webchat,2026-02-04,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-04,RV Mini Cam,App Navigation,notifcation off,Human\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Webchat,2026-02-04,4g mini,Presales,Subs Price,Human\r
Webchat,2026-02-04,PM,Return & refund,Process,Human\r
Inapp,2026-02-04,,,,Bot\r
Inapp,2026-02-04,,,,Bot\r
Webchat,2026-02-04,,,,Bot\r
Inapp,2026-02-05,4g mini,Flip,How to do,Human\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,4g mini,Connection,,Human\r
Inapp,2026-02-05,4g mini,Subs Activation,Additional camera,Human\r
Inapp,2026-02-05,4g mini,Subs Activation,Price query,Human\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,4g mini,Sim not Found,,Human\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,PM,Accessories,Query 30 Foot cable,Human\r
Webchat,2026-02-05,RV Mini Cam,App Navigation,Live Recording,Human\r
Inapp,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,PM,App Navigation,Update payement Method,Human\r
Inapp,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,4g camera,Accessories,Whats included,Human\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,,,,Bot\r
Inapp,2026-02-05,4g mini,Presales,Offers,Human\r
Webchat,2026-02-05,,,,Bot\r
Webchat,2026-02-05,,,,Bot\r
Inapp,2026-02-06,Waggle Cam pro,Connection, Not connecting,Human\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,PM,App Navigation,Alert History,Human\r
Inapp,2026-02-06,PM,Battery Issue,Waggle app consuming high,Human\r
Inapp,2026-02-06,Waggel Insurance,Claim,,Human\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,PM,App Issue,Reinstall,Human\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,PM,DNR,Reset Not working,Human\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,4g mini,App Navigation,Battery %,Human\r
Webchat,2026-02-06,PM,Presales,GPS,Human\r
Inapp,2026-02-06,,,,Bot\r
Inapp,2026-02-06,PM,Device Removal,Upgraded,Human\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,RV Mini Cam,Record Issue,,Human\r
Inapp,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,RV Mini Cam,Device Query,Reset Button,Human\r
Webchat,2026-02-06,,,,Bot\r
Inapp,2026-02-06,NA,No reason,,Human\r
Inapp,2026-02-06,,,,Bot\r
Webchat,2026-02-07,,,,Bot\r
Webchat,2026-02-07,,,,Bot\r
Webchat,2026-02-07,,,,Bot\r
Webchat,2026-02-07,Smart Sensor,Presales,functionalities,Human\r
Webchat,2026-02-07,RV Mini Cam,Accessories,,Human\r
Webchat,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Webchat,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Webchat,2026-02-07,,,,Bot\r
Inapp,2026-02-07,4g mini,multi-user-access,,Human\r
Webchat,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Inapp,2026-02-07,PM,Battery query,Battery %,Human\r
Inapp,2026-02-07,PM,No reason,,Human\r
Inapp,2026-02-07,,,,Bot\r
Webchat,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Webchat,2026-02-07,PM,Login Query,computer,Human\r
Inapp,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Inapp,2026-02-07,,,,Bot\r
Inapp,2026-02-07,PM,Device Query,Calibration,Human\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Webchat,2026-02-08,,,,Bot\r
Inapp,2026-02-08,PM,DNR,Reset Not working,Human\r
Webchat,2026-02-08,PM,Account Transfer,New Owner,Human\r
Inapp,2026-02-08,PM,Subs Reactivation,discount,Human\r
Inapp,2026-02-08,,,,Bot\r
Webchat,2026-02-08,,,,Bot\r
Webchat,2026-02-08,,,,Bot\r
Inapp,2026-02-08,4g mini,Presales,Network carrier,Human\r
Webchat,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,4g mini,Login,wrong cred,Human\r
Inapp,2026-02-08,4g mini,Presales,DIscount Code Request,Human\r
Inapp,2026-02-08,PM,Subs Activation - Combo,Combo Plan Query,Human\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,4g mini,Login,wrong cred,Human\r
Webchat,2026-02-08,,,,Bot\r
Webchat,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,4g mini,InApp Notification,,Human\r
Inapp,2026-02-08,4g camera,motion detection,,Human\r
Webchat,2026-02-08,,,,Bot\r
Inapp,2026-02-08,PM,Support related,,Human\r
Webchat,2026-02-08,,,,Bot\r
Webchat,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Inapp,2026-02-08,,,,Bot\r
Webchat,2026-02-09,4g camera,motion detection,Range,Human\r
Inapp,2026-02-09,,,,Bot\r
Inapp,2026-02-09,,,,Bot\r
Webchat,2026-02-09,,,,Bot\r
Inapp,2026-02-09,,,,Bot\r
Webchat,2026-02-09,,,,Bot\r
Inapp,2026-02-09,4g mini,Device Query,Non Magnetic Part,Human\r
Webchat,2026-02-09,4g mini,Subs Activation,DIscount Code Request,Human\r
Webchat,2026-02-09,4g mini,Support related,copy of support ticket,Human\r
Inapp,2026-02-09,,,,Bot\r
Webchat,2026-02-09,PM,Device Query,Network carrier,Human\r
Inapp,2026-02-09,,,,Bot\r
Webchat,2026-02-09,,,,Bot\r
Webchat,2026-02-09,PM,Support related,Live chat,Human\r
Webchat,2026-02-09,4g mini,Pan tilt,not working,Human\r
Webchat,2026-02-09,,,,Bot\r
Webchat,2026-02-09,,,,Bot\r
Inapp,2026-02-09,4g mini,App Navigation,Recording,Human\r
Webchat,2026-02-09,,,,Bot\r
Inapp,2026-02-09,,,,Bot\r
Inapp,2026-02-09,,,,Bot\r
Inapp,2026-02-09,PM,Subs Activation,DIscount Code Request,Human\r
Inapp,2026-02-09,,,,Bot\r
Webchat,2026-02-09,,,,Bot\r
Webchat,2026-02-09,PM,App Navigation,Subs cancellation,Human\r
Inapp,2026-02-09,PM,Sub Query,reactivation related,Human\r
Inapp,2026-02-09,4g mini,Sub Query,Combo upgrade,Human\r
Webchat,2026-02-09,,,,Bot\r
Inapp,2026-02-09,,,,Bot\r
Webchat,2026-02-09,PM,Sub Query,Flexi and pause,Human\r
Inapp,2026-02-09,RV Mini Cam,Connection,How to do,Human\r
Inapp,2026-02-09,,,,Bot\r
Inapp,2026-02-09,4g mini,Subs Downgrade,Query,Human\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,PM,DNR,steps,Human\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,RV Mini Cam,Device Query,Mounting Related,Human\r
Webchat,2026-02-10,,,,Bot\r
Webchat,2026-02-10,PM,Subs Cancellation,Steps,Human\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,PM,Pet Profile,Not Updating,Human\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,,,,Bot\r
Inapp,2026-02-10,4g mini,multi-user-access,,Human\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Inapp,2026-02-10,4g mini,Presales,Subs Price,Human\r
Inapp,2026-02-10,,,,Bot\r
Webchat,2026-02-10,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,4g camera,LED Issue,,Human\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,4g mini,Subs Activation,DIscount Code Request,Human\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Inapp,2026-02-11,PM,Email ID change,,Human\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Inapp,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,,,,Bot\r
Webchat,2026-02-11,PM,Accessories,,Human\r
Webchat,2026-02-11,PM,Sub Query,Combo Plan,Human\r
Inapp,2026-02-11,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Inapp,2026-02-12,RV Mini Cam,Connection,reset Pin,Human\r
Inapp,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Inapp,2026-02-12,PM,Display,query,Human\r
Webchat,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Webchat,2026-02-12,4g mini,Device Query,Mounting Related,Human\r
Inapp,2026-02-12,,,,Bot\r
Webchat,2026-02-12,PM,Login,Mapping prob,Human\r
Webchat,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Inapp,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Inapp,2026-02-12,NA,No reason,,Human\r
Webchat,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Webchat,2026-02-12,,,,Bot\r
Webchat,2026-02-12,PM,Presales,Network carrier,Human\r
Inapp,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Webchat,2026-02-13,PM,Sub Query,Plan Comparison,Human\r
Inapp,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Inapp,2026-02-13,PM,App Navigation,,Human\r
Webchat,2026-02-13,,,,Bot\r
Webchat,2026-02-13,4g mini,Presales,Charging Query,Human\r
Webchat,2026-02-13,,,,Bot\r
Inapp,2026-02-13,RV Mini Cam,Connection,,Human\r
Webchat,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Inapp,2026-02-13,PM,Subs Mapping,,Human\r
Webchat,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-13,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Webchat,2026-02-13,PM,Presales,Bundle Query,Human\r
Inapp,2026-02-13,,,,Bot\r
Webchat,2026-02-13,PM,Presales,Connection related,Human\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-13,,,,Bot\r
Webchat,2026-02-13,,,,Bot\r
Webchat,2026-02-13,PM,Sub Query,Flexi Plan query,Human\r
Webchat,2026-02-13,,,,Bot\r
Inapp,2026-02-13,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-13,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,PM,DNR,Reset Not working,Human\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,PM,DNR,Reset Not working,Human\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,PM,Registration Query,Replacment Device,Human\r
Inapp,2026-02-14,PM,Display ,,Human\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,4g mini,Rotation Issue,,Human\r
Webchat,2026-02-14,,,,Bot\r
Webchat,2026-02-14,NA,No reason,,Human\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,4g mini,Device Query,Apple Watch Comp.,Human\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,PM,Temp Issue,,Human\r
Inapp,2026-02-14,,,,Bot\r
Webchat,2026-02-14,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Webchat,2026-02-15,PM,Charging Query,cigarette lighter charger,Human\r
Inapp,2026-02-15,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Webchat,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,PM,Registration Query,Second Hand Device,Human\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-15,,,,Bot\r
Inapp,2026-02-16,PM,Registration Query,Second Hand Device,Human\r
Webchat,2026-02-16,,,,Bot\r
Webchat,2026-02-16,,,,Bot\r
Webchat,2026-02-16,,,,Bot\r
Webchat,2026-02-16,,,,Bot\r
Webchat,2026-02-16,,,,Bot\r
Webchat,2026-02-16,4g camera,Device Query,Network carrier,Human\r
Webchat,2026-02-16,,,,Bot\r
Inapp,2026-02-16,PM,App Issue,,Human\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Webchat,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Webchat,2026-02-16,RV Mini Cam,App Issue,,Human\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,,,,Bot\r
Inapp,2026-02-16,PM,Subs Activation - Combo,Activation Steps,Human\r
Webchat,2026-02-16,PM,Display ,,Human\r
Inapp,2026-02-16,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,PM,LED light Issue,,Human\r
Inapp,2026-02-17,PM,Subs Activation,DIscount Code Request,Human\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Inapp,2026-02-17,PM,Subs Activation - Combo,Activation Steps,Human\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Inapp,2026-02-17,Waggle Cam pro,Subs Cancellation,Marketing Issue,Human\r
Inapp,2026-02-17,PM,DNR,Reset Not working,Human\r
Inapp,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,PM,Presales,Apple Watch Comp.,Human\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,Smart Sensor,Presales,Stock,Human\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Webchat,2026-02-17,,,,Bot\r
Inapp,2026-02-17,,,,Bot\r
Inapp,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Inapp,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Inapp,2026-02-18,4g mini,Subs Activation,Mapping prob,Human\r
Inapp,2026-02-18,,,,Bot\r
Inapp,2026-02-18,,,,Bot\r
Inapp,2026-02-18,PM,Charging Query,Charging LED Query,Human\r
Inapp,2026-02-18,,,,Bot\r
Inapp,2026-02-18,PM,Charging Query,Charging LED Query,Human\r
Inapp,2026-02-18,RV Mini Cam,Order,DIscount Code Request,Human\r
Webchat,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Inapp,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Inapp,2026-02-18,RV Mini Cam,Order,DIscount Code Request,Human\r
Webchat,2026-02-18,,,,Bot\r
Inapp,2026-02-18,,,,Bot\r
Inapp,2026-02-18,PM,Subs Mapping,,Human\r
Inapp,2026-02-18,,,,Bot\r
Webchat,2026-02-18,4g mini,Presales,Battery Life,Human\r
Inapp,2026-02-18,,,,Bot\r
Webchat,2026-02-18,4g mini,Subs Activation,pack of 3,Human\r
Inapp,2026-02-18,,,,Bot\r
Webchat,2026-02-18,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,PM,Sub Query,Subs Price,Human\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,PM,Presales,Battery Life,Human\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-19,,,,Bot\r
Webchat,2026-02-19,PM,Presales,PLPB,Human\r
Webchat,2026-02-19,,,,Bot\r
Inapp,2026-02-19,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Inapp,2026-02-20,4g mini,Connection,,Human\r
Inapp,2026-02-20,PM,Sub Query,Flexi Plan Query,Human\r
Inapp,2026-02-20,,,,Bot\r
Inapp,2026-02-20,4g mini,Registration Query,Unable to scan QR code,Human\r
Inapp,2026-02-20,PM,DNR,Battery Reset,Human\r
Inapp,2026-02-20,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Webchat,2026-02-20,PM,Device Query,Power On Button - Old PM,Human\r
Inapp,2026-02-20,4g mini,Registration Issue,Unable to scan QR code,Human\r
Webchat,2026-02-20,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Inapp,2026-02-20,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Inapp,2026-02-20,,,,Bot\r
Webchat,2026-02-20,PM,Presales,Military  Discount,Human\r
Webchat,2026-02-20,,,,Bot\r
Inapp,2026-02-20,,,,Bot\r
Inapp,2026-02-20,,,,Bot\r
Webchat,2026-02-20,,,,Bot\r
Inapp,2026-02-20,,,,Bot\r
Webchat,2026-02-20,PM,Order,Placing Order,Human\r
Webchat,2026-02-20,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Webchat,2026-02-21,PM,Order,Placing Order,Human\r
Webchat,2026-02-21,PM,Order,Placing Order,Human\r
Inapp,2026-02-21,PM,Subs Activation,Mapping prob,Human\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Inapp,2026-02-21,PM,Power Loss,Report,Human\r
Webchat,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Webchat,2026-02-21,PM,Presales,Bundle,Human\r
Inapp,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Webchat,2026-02-21,PM,Sub Query,Flexi Plan query,Human\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,PM,Login,Reset PW,Human\r
Webchat,2026-02-21,RV Mini Cam,Accessories,Mounting Bracket,Human\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Inapp,2026-02-21,PM,App Navigation,SMS turn Off,Human\r
Webchat,2026-02-21,PM,Marketing Emails,Unsubscribe,Human\r
Webchat,2026-02-21,4g camera,motion detection,Not tracking,Human\r
Inapp,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,4g mini,Accessories,Mounting Bracket,Human\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,PM,Subs Cancellation,Refund,Human\r
Webchat,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Inapp,2026-02-21,,,,Bot\r
Webchat,2026-02-21,,,,Bot\r
Webchat,2026-02-21,PM,Presales,Subs related,Human\r
Webchat,2026-02-22,PM,Order,Status,Human\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,,,,Bot\r
Webchat,2026-02-22,4g camera,Presales,functionalities,Human\r
Inapp,2026-02-22,,,,Bot\r
Webchat,2026-02-22,4g mini,Presales,Order related,Human\r
Inapp,2026-02-22,,,,Bot\r
Webchat,2026-02-22,,,,Bot\r
Webchat,2026-02-22,4g mini,Sub Query,pack of 3,Human\r
Webchat,2026-02-22,,,,Bot\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,PM,Registration Issue,Second Hand Device,Human\r
Inapp,2026-02-22,,,,Bot\r
Webchat,2026-02-22,4g mini,Registration Query,Add Additional Cam,Human\r
Inapp,2026-02-22,4g mini,App Navigation,Video Feed,Human\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,RV Mini Cam,Connection,Streaming Issue,Human\r
Inapp,2026-02-22,PM,Login,wrong cred,Human\r
Webchat,2026-02-22,,,,Bot\r
Inapp,2026-02-22,PM,DNR,Battery Reset,Human\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,PM,Registration Issue,Second PM,Human\r
Webchat,2026-02-22,,,,Bot\r
Inapp,2026-02-22,,,,Bot\r
Inapp,2026-02-22,PM,DNR,Battery Reset,Human\r
Webchat,2026-02-22,PM,Order,Status,Human\r
Inapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,RV Mini Cam,Connection,Streaming Issue,Human\r
Webapp,2026-02-23,4g mini,Sub Query,Price query,Human\r
Inapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,4g mini,App Navigation,Flip,Human\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,PM,Order,Status,Human\r
Inapp,2026-02-23,PM,Display,Query,Human\r
Inapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,4g mini,Sim not Found,,Human\r
Inapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,PM,DNR,Further steps,Human\r
Inapp,2026-02-23,4g mini,Login,wrong cred,Human\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,PM,DNR,Further steps,Human\r
Webapp,2026-02-23,,,,Bot\r
Inapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-23,PM,Order,Pro+ OOS,Human\r
Inapp,2026-02-23,PM,DNR,Further steps,Human\r
Webapp,2026-02-23,,,,Bot\r
Webapp,2026-02-24,PM,Presales,Difference,Human\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,PM,Subs Activation,Mapping prob,Human\r
Webapp,2026-02-24,4g mini,Accessories,Mount Broken,Human\r
Inapp,2026-02-24,PM,Subs Activation,Mapping prob,Human\r
Inapp,2026-02-24,4g mini,Subs Cancellation,,Human\r
Inapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,PM,DNR,Battery Reset,Human\r
Inapp,2026-02-24,4g mini,No camera found,,Human\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,4g mini,Presales,functionalities,Human\r
Inapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,RV Mini Cam,Presales,functionalities,Human\r
Inapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,NA,No reason,,Human\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,PM,DNR,Further steps,Human\r
Inapp,2026-02-24,4g mini,Device Query,Network carrier,Human\r
Inapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,,,,Bot\r
Webapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,,,,Bot\r
Inapp,2026-02-24,PM,Support related,contact Support,Human\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,4g mini,Presales,functionalities,Human\r
Webapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,4g mini,App Navigation,Rotation,Human\r
Webapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,4g mini,motion detection,Video Not Available,Human\r
Webapp,2026-02-25,PM,Sub Query,Price query,Human\r
Inapp,2026-02-25,PM,DNR,Further steps,Human\r
Inapp,2026-02-25,PM,Account Transfer,,Human\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Webapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,,,,Bot\r
Inapp,2026-02-25,RV Mini Cam,Unsupported Camera,Older version,Human\r
Inapp,2026-02-25,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,PM,App Navigation,Humidity Alerts,Human\r
Webapp,2026-02-26,NA,Ambassador Program,,Human\r
Inapp,2026-02-26,PM,DNR,Further steps,Human\r
Inapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,PM,App Navigation,Temp/Humidity Notifications,Human\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,PM,No reason,,Human\r
Webapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,PM,Accessories,,Human\r
Webapp,2026-02-26,PM,DNR,Further steps,Human\r
Inapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,Waggle Cam pro,Treat Toss,Schedule,Human\r
Webapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Webapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,PM,Charging Query,Car Charge,Human\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-26,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,PM,DNR,Further steps,Human\r
Inapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,4g mini,App Navigation,Motion Recording,Human\r
Webapp,2026-02-27,RV Mini Cam,Connection,,Human\r
Webapp,2026-02-27,NA,No reason,,Human\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,PM,DNR,,Human\r
Webapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,PM,DNR,,Human\r
Webapp,2026-02-27,PM,Subs Activation,Combo Plan,Human\r
Webapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,PM,Subs Activation,Trial Plan,Human\r
Inapp,2026-02-27,PM,Charging Query,LED blinking,Human\r
Inapp,2026-02-27,4g mini,Subs Activation,DIscount Code Request,Human\r
Webapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Webapp,2026-02-27,,,,Bot\r
Inapp,2026-02-27,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,Waggel Insurance,No reason,,Human\r
Inapp,2026-02-28,RV Mini Cam,Subs Cancellation,Steps,Human\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,4g mini,App Navigation,Add Phone No,Human\r
Inapp,2026-02-28,PM,Registration Issue,Replacment Device,Human\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,4g mini,Login,,Human\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,PM,DNR,,Human\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,4g mini,Registration Issue,,Human\r
Inapp,2026-02-28,4g mini,App Navigation,Remove Device,Human\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,4g mini,Registration Issue,,Human\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,PM,Device Removal,,Human\r
Webapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-02-28,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,4g mini,Device Removal,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,PM,Subs Cancellation,Further Steps,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Webapp,2026-03-01,PM,Upgrade,Newer Model,Human\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,4g mini,Night Vision,Video Quality,Human\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,PM,Subs Activation,Coupon Code Request,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,PM,Subs Upgrade,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,PM,DNR,,Human\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,Emergency Fund,Inquiry,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Webapp,2026-03-01,,,,Bot\r
Webapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Webapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-01,PM,DNR,,Human\r
Inapp,2026-03-01,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,PM,DNR,,Human\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,PM,DNR,,Human\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,PM,Not Turning On,,Human\r
Inapp,2026-03-02,PM,DNR,,Human\r
Webapp,2026-03-02,4g mini,Not Turning On,,Human\r
Inapp,2026-03-02,PM,Subs Cancellation,,Human\r
Webapp,2026-03-02,PM,Presales,GPS,Human\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,PM,Device Transfer,,Human\r
Webapp,2026-03-02,4g mini,Presales,Motion Detection,Human\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Inapp,2026-03-02,,,,Bot\r
Webapp,2026-03-02,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,PM,Not Charging,,Human\r
Webapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,PM,Not Charging,,Human\r
Webapp,2026-03-03,PM,Presales,Price inquiry,Human\r
Inapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,PM,Subs Cancellation,,Human\r
Inapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,4g camera,Presales,Functionalities,Human\r
Webapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,RV Mini Cam,App Navigation,Unable to find,Human\r
Inapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,RV Mini Cam,App Navigation,Joystick Control,Human\r
Inapp,2026-03-03,Waggle Cam pro,App Navigation,Joystick Control,Human\r
Webapp,2026-03-03,PM,Upgrade,,Human\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,Waggle Cam pro,Not Turning On,,Human\r
Webapp,2026-03-03,,,,Bot\r
Webapp,2026-03-03,,,,Bot\r
Inapp,2026-03-03,4g mini,App Navigation,Joystick Control,Human\r
Inapp,2026-03-03,4g mini,App Navigation,Joystick Control,Human\r
Inapp,2026-03-03,Waggle Cam pro,App Navigation,Joystick Control,Human\r
Inapp,2026-03-03,4g mini,App Navigation,Joystick Control,Human\r
Inapp,2026-03-03,Waggle Cam pro,Treat Toss,,Human\r
Webapp,2026-03-03,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,Waggle Cam pro,App Navigation,Joystick Control,Human\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,Waggle Cam pro,App Navigation,Joystick Control,Human\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,PM,DNR,,Human\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,PM,Subs Activation,,Human\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,Waggle Cam pro,Replacment,,Human\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Webapp,2026-03-04,,,,Bot\r
Inapp,2026-03-04,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,4g mini,App Navigation,Joystick Control,Human\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,PM,Presales,Subs Inquiry,Human\r
Inapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,PM,App Navigation,Geo Fence,Human\r
Webapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,PM,Charging Query,Charging LED Query,Human\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,4g mini,App Navigation,PW reset,Human\r
Webapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,PM,App Navigation,Temp threshold,Human\r
Webapp,2026-03-05,4g mini,App Issue,Unable to activate,Human\r
Webapp,2026-03-05,4g mini,Subs Mapping,,Human\r
Inapp,2026-03-05,4g mini,Subs Activation,Combo plan,Human\r
Inapp,2026-03-05,PM,Subs Cancellation,,Human\r
Inapp,2026-03-05,PM,DNR,,Human\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,PM,App Navigation,Geo Fence,Human\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,PM,DNR,,Human\r
Inapp,2026-03-05,PM,DNR,,Human\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,PM,Subs Activation,,Human\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,4g mini,App Navigation,Motion Detection,Human\r
Inapp,2026-03-05,,,,Bot\r
Inapp,2026-03-05,4g mini,Connection,,Human\r
Webapp,2026-03-05,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,4g mini,multi-user-access,,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,Waggle Cam pro,Connection,,Human\r
Inapp,2026-03-06,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,App Issue,Loading,,Human\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,App Issue,Loading,,Human\r
Inapp,2026-03-06,PM,Presales,outside US,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,PM,Order Related,Shipping,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,PM,Subs Activation,Combo plan,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,PM,Presales,AQI,Human\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,,,,Bot\r
Webapp,2026-03-06,PM,App Navigation,,Human\r
Webapp,2026-03-06,4g mini,Presales,Functionalities,Human\r
Webapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,PM,DNR,,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,4g mini,Subs Activation,,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-06,PM,Subs Mapping,,Human\r
Inapp,2026-03-06,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,4g mini,App Navigation,Battery Level,Human\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,Waggle Cam pro,multi-user-access,,Human\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,4g camera,App Navigation,Battery Level,Human\r
Webapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,4g mini,Presales,Subs Inquiry,Human\r
Inapp,2026-03-07,,,,Bot\r
Webapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,PM,DNR,,Human\r
Inapp,2026-03-07,RV Mini Cam,App Navigation,Noise Alerts,Human\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,PM,DNR,,Human\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,,,,Bot\r
Inapp,2026-03-07,4g camera,App Navigation,Noise Alerts,Human\r
Webapp,2026-03-07,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,PM,DNR,,Human\r
Inapp,2026-03-08,PM,Presales,Combo plan,Human\r
Webapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,4g mini,App Navigation,Turn Off light,Human\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,PM,DNR,,Human\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,4g mini,App Navigation,,Human\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,RV Mini Cam,Device Removal,,Human\r
Inapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Inapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-08,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,PM,Temp Difference,,Human\r
Webapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,PM,Presales,Network Carrier,Human\r
Inapp,2026-03-09,Waggel Insurance,NA,NA,Human\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,PM,Device Query,Display related,Human\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,4g mini,App Navigation,Rotation,Human\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,4g camera,App Navigation,Delete History,Human\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,4g camera,App Navigation,Motion Alert Turn Off,Human\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,PM,Device Transfer,,Human\r
Webapp,2026-03-09,PM,Subs Activation,Subs Inquiry,Human\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,NA,NA,NA,Human\r
Webapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,PM,Presales,,Human\r
Inapp,2026-03-09,,,,Bot\r
Webapp,2026-03-09,PM,Order Related,OOS,Human\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-09,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,PM,Device Transfer,,Human\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,4g camera,Solar Panel,,Human\r
Webapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,PM,Upgrade,,Human\r
Inapp,2026-03-10,4g mini,App Navigation,Battery Level,Human\r
Inapp,2026-03-10,Waggel Insurance,NA,NA,Human\r
Webapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,PM,multi-user-access,,Human\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,4g mini,Subs Mapping,,Human\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,4g mini,Subs Activation,Additional devices,Human\r
Inapp,2026-03-10,RV Mini Cam,App Navigation,Delete Video,Human\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,RV Mini Cam,Subs Activation,Price inquiry,Human\r
Webapp,2026-03-10,PM,Replacment,,Human\r
Inapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Webapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,PM,DNR,,Human\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,,,,Bot\r
Inapp,2026-03-10,PM,Warranty,Activation,Human\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,4g mini,App Navigation,Settings Icon,Human\r
Webapp,2026-03-11,RV Mini Cam,Presales,Offers Related,Human\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,4g mini,Subs Activation,Combo plan,Human\r
Webapp,2026-03-11,PM,Return and Refund,,Human\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,PM,DNR,,Human\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,PM,App Navigation,Subs Related,Human\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,RV Mini Cam,Presales,Functionalities,Human\r
Inapp,2026-03-11,4g mini,App Navigation,Battery Level,Human\r
Inapp,2026-03-11,4g mini,SIM out of Service,,Human\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,4g mini,App Navigation,Battery Level,Human\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,4g mini,Connection,,Human\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,PM,Registration,QR Code,Human\r
Webapp,2026-03-11,,,,Bot\r
Webapp,2026-03-11,,,,Bot\r
Inapp,2026-03-11,PM,Subs Cancellation,,Human\r
Inapp,2026-03-12,PM,Device Query,Reporting Interval,Human\r
Inapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,RV Mini Cam,App Navigation,Pan Option,Human\r
Webapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-12,PM,App Navigation,Battery Level,Human\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,4g camera,Login Related,,Human\r
Inapp,2026-03-12,4g camera,Device Query,Functionalities,Human\r
Webapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Inapp,2026-03-12,,,,Bot\r
Webapp,2026-03-12,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,PM,Order Related,,Human\r
Inapp,2026-03-13,PM,Email ID Change,,Human\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,4g mini,Trial Plan Query,,Human\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,PM,Not Turning On,,Human\r
Inapp,2026-03-13,4g mini,Time Format Query,,Human\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Webapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,PM,Coverage area (Mexico),,Human\r
Webapp,2026-03-13,,,,Bot\r
Inapp,2026-03-13,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,PM,Subs Activation,Price inquiry,Human\r
Webapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,PM,Order Related,Shipping Delay,Human\r
Webapp,2026-03-14,General,App Download,,Human\r
Inapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,4g mini,Subs Activation,Price inquiry,Human\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,4g mini,Device Removal,Sold,Human\r
Inapp,2026-03-14,PM,DNR,,Human\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-14,4g mini,App Navigation,Motion Detection,Human\r
Inapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Webapp,2026-03-14,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,PM,DNR,,Human\r
Webapp,2026-03-15,PM,Temp Difference,Old Device,Human\r
Webapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,4g mini,App Navigation,Joystick Control,Human\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,Waggle Cam pro,App Navigation,Privacy Settings,Human\r
Inapp,2026-03-15,4g mini,Subs Activation,Price inquiry,Human\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,PM,Subs Activation,Discount Request,Human\r
Webapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,PM,DNR,,Human\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,RV Mini Cam,App Navigation,Erase Videos,Human\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,4g mini,Presales,Functionalities,Human\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,4g mini,Connection,,Human\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,PM,Subs Activation,Reactivation Query,Human\r
Webapp,2026-03-15,4g mini,Subs Activation,Additional devices,Human\r
Webapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,RV Mini Cam,Connection,,Human\r
Webapp,2026-03-15,PM,Login Related,,Human\r
Inapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,,,,Bot\r
Webapp,2026-03-15,,,,Bot\r
Inapp,2026-03-15,Waggle Cam pro,App Navigation,Treat Tossing,Human\r
Inapp,2026-03-15,PM,Temp Difference,,Human\r
Webapp,2026-03-15,PM,Device Query,Functionalities,Human\r
Inapp,2026-03-16,4g mini,Connection,,Human\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,4g mini,App Navigation,Delete Clips,Human\r
Inapp,2026-03-16,4g mini,Subs Activation,Bundle,Human\r
Webapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,4g mini,App Navigation,Joystick Control,Human\r
Webapp,2026-03-16,PM,Presales,Functionalities,Human\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,PM,DNR,,Human\r
Webapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,4g camera,Return and Refund,,Human\r
Webapp,2026-03-16,PM,Presales,Subs Inquiry,Human\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,PM,Subs Activation,Subs Inquiry,Human\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,PM,Camping Search,,Human\r
Webapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,RV Mini Cam,Connection,,Human\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,PM,Subs Activation,Combo plan,Human\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-16,,,,Bot\r
Inapp,2026-03-16,PM,DNR,,Human\r
Inapp,2026-03-16,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,4g mini,Feature Request,Camera list management,Human\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,PM,DNR,,Human\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,PM,DNR,,Human\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,PM,App Navigation,Screen Color Change,Human\r
Inapp,2026-03-17,PM,DNR,,Human\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,PM,Order Related,Shipping,Human\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Inapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,4g mini,Auto Tracking,,Human\r
Inapp,2026-03-17,4g mini,Auto Tracking,,Human\r
Webapp,2026-03-17,,,,Bot\r
Webapp,2026-03-17,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,NA,NA,NA,Human\r
Inapp,2026-03-18,PM,App Issue,Profile Setup,Human\r
Inapp,2026-03-18,PM,Device Removal,,Human\r
Inapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,PM,Accessories,,Human\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,PM,Subs Activation,Second Monitor,Human\r
Webapp,2026-03-18,4g camera,Presales,Functionalities,Human\r
Webapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,4g mini,multi-user-access,,Human\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,Waggle Cam pro,App Issue,Loading,Human\r
Inapp,2026-03-18,PM,Not Charging,,Human\r
Webapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,PM,Registration,Used Monitor,Human\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Webapp,2026-03-18,Older Waggle,Registration,,Human\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,,,,Bot\r
Inapp,2026-03-18,PM,Alerts not working,,Human\r
Webapp,2026-03-18,,,,Bot\r
Webapp,2026-03-19,PM,Subs Activation,Combo plan,Human\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,PM,Device Query,Display related,Human\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,PM,Accessories,Purchase,Human\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,4g mini,Connection,,Human\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,PM,Subs Cancellation,,Human\r
Inapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,PM,Replacment,,Human\r
Webapp,2026-03-19,4g mini,Presales,Subs Inquiry,Human\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,RV Mini Cam,App Navigation,Delete Clips,Human\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,PM,DNR,,Human\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Inapp,2026-03-19,,,,Bot\r
Webapp,2026-03-19,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,PM,DNR,,Human\r
Webapp,2026-03-20,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-03-20,RV Mini Cam,Device Query,Turn Off Device,Human\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,Waggel Insurance,NA,,Human\r
Webapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,RV Mini Cam,Connection,,Human\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,PM,App Navigation,Temp Report,Human\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,PM,DNR,,Human\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,4g mini,Subs Activation,,Human\r
Webapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,PM,Geo Fence Issue,,Human\r
Inapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,,,,Bot\r
Webapp,2026-03-20,4g mini,Presales,Color Request,Human\r
Inapp,2026-03-20,PM,Alerts not working,,Human\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,,,,Bot\r
Inapp,2026-03-20,PM,Temp Difference,,Human\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,4g camera,App Navigation,Flip,Human\r
Inapp,2026-03-21,Waggel Insurance,,,Human\r
Webapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,PM,Registration,Query,Human\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,4g mini,Presales,Network Carrier,Human\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,PM,Subs Activation,Flexi Plan Query,Human\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,PM,Presales,Network Carrier,Human\r
Inapp,2026-03-21,RV Mini Cam,App Navigation,Flip,Human\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,PM,App Issue,Device Selection,Human\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,PM,App Navigation,Temp threshold,Human\r
Webapp,2026-03-21,,,,Bot\r
Webapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,,,,Bot\r
Inapp,2026-03-21,4g mini,Subs Cancellation,,Human\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,4g mini,Subs Cancellation,,Human\r
Inapp,2026-03-22,4g mini,App Issue,Loading,Human\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,4g mini,App Navigation,Erase Videos,Human\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,4g mini,Subs Activation,Discount Request,Human\r
Inapp,2026-03-22,4g mini,Connection,,Human\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,PM,AQI,Alerts related,Human\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,PM,DNR,,Human\r
Webapp,2026-03-22,PM,Order Related,Delivery Issue,Human\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,PM,Presales,Subs Inquiry,Human\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,4g mini,Hardware Damage,,Human\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,PM,DNR,,Human\r
Webapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,RV Mini Cam,Presales,Purchase link,Human\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,PM,App Navigation,Pet Profile,Human\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Webapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-22,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,4g mini,Connection,Streaming,Human\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,PM,Presales,Subs Inquiry,Human\r
Webapp,2026-03-23,PM,Replacment,Shipping,Human\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,PM,Subs Activation,Combo plan,Human\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,PM,DNR,,Human\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,PM,Temp Difference,,Human\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,PM,Alerts not working,,Human\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,PM,Presales,Discount Request,Human\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,4g mini,Subs Activation,Combo plan,Human\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Webapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,PM,DNR,,Human\r
Webapp,2026-03-23,PM,DNR,,Human\r
Inapp,2026-03-23,PM,Not Charging,,Human\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-23,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,PM,Display Issue,Flickering,Human\r
Inapp,2026-03-24,4g mini,Recording,continuous-playback,Human\r
Inapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,PM,Not Turning On,,Human\r
Webapp,2026-03-24,PM,Subs Activation,Discount Request,Human\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,PM,Device Query,Display related,Human\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,4g mini,App Navigation,Delete Clips,Human\r
Inapp,2026-03-24,PM,DNR,,Human\r
Inapp,2026-03-24,4g mini,App Issue,Loading,Human\r
Inapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,NA,NA,,Human\r
Webapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,PM,DNR,,Human\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,4g mini,Presales,Subs Inquiry,Human\r
Inapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,,,,Bot\r
Inapp,2026-03-24,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-24,,,,Bot\r
Webapp,2026-03-24,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,PM,DNR,,Human\r
Inapp,2026-03-25,4g mini,Presales,Functionalities,Human\r
Webapp,2026-03-25,PM,Presales,Functionalities,Human\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,4g mini,Connection,,Human\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,PM,DNR,,Human\r
Webapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,PM,DNR,,Human\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,Waggle Cam pro,SD card Location,,Human\r
Inapp,2026-03-25,,,,Bot\r
Webapp,2026-03-25,PM,Login Related,,Human\r
Inapp,2026-03-25,PM,Not Charging,,Human\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,PM,False Alerts,,Human\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,RV Mini Cam,Connection,,Human\r
Webapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-25,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,PM,Device Query,Turn Off,Human\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,PM,Login Related,,Human\r
Webapp,2026-03-26,RV Mini Cam,Accessories,,Human\r
Webapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,4g camera,Subs Activation,Price inquiry,Human\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,4g mini,Accessories,,Human\r
Inapp,2026-03-26,4g mini,App Navigation,Flip,Human\r
Webapp,2026-03-26,NA,Unsupported Camera,,Human\r
Webapp,2026-03-26,RV Mini Cam,Connection,,Human\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Webapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-26,,,,Bot\r
Inapp,2026-03-27,PM,Subs Activation,,Human\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,PM,Subs Cancellation,,Human\r
Webapp,2026-03-27,PM,multi-user-access,,Human\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,4g camera,Turn Off Light,,Human\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,PM,Login Related,,Human\r
Inapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,PM,Subs Transfer,,Human\r
Inapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,PM,Presales,Functionalities,Human\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Inapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,,,,Bot\r
Webapp,2026-03-27,RV Mini Cam,Connection,,Human\r
Inapp,2026-03-27,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,RV Mini Cam,App Navigation,Delete Clips,Human\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,PM,Subs Cancellation,,Human\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,4g camera,Registration,,Human\r
Webapp,2026-03-28,4g mini,Subs Activation,Subs Inquiry,Human\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,PM,DNR,,Human\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,4g mini,Connection,,Human\r
Webapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-28,,,,Bot\r
Webapp,2026-03-28,4g camera,App Issue,Crash,Human\r
Inapp,2026-03-28,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,PM,Subs Activation,Discount Request,Human\r
Webapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,PM,Alerts Query,,Human\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,PM,Subs Cancellation,,Human\r
Webapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,,,,Bot\r
Webapp,2026-03-29,4g mini,Presales,Subs Inquiry,Human\r
Webapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,,,,Bot\r
Inapp,2026-03-29,PM,Temp Difference,,Human\r
Inapp,2026-03-29,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,4g mini,Presales,Network Carrier,Human\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,Waggel Insurance,NA,,Human\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,4g camera,Pan-Tilt Issue,,Human\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,PM,Device Removal,,Human\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,PM,Subs Activation,Discount Request,Human\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,PM,Device Removal,,Human\r
Webapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,PM,False Alerts,PLPB,Human\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Inapp,30-03-2026,,,,Bot\r
Webapp,30-03-2026,PM,Presales,outside US,Human\r
Inapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,Waggle Cam pro,Exchange Query,Size,Human\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,PM,Charging Issue,Battery Drain,Human\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,PM,Subs Activation,Discount Request,Human\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,PM,Presales,Functionalities,Human\r
Webapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,PM,Subs Activation,Query,Human\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,PM,Subs Activation,Query,Human\r
Inapp,31-03-2026,,,,Bot\r
Webapp,31-03-2026,,,,Bot\r
Inapp,31-03-2026,PM,DNR,Reset,Human\r
Inapp,31-03-2026,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,PM,Subs Mapping,,Human\r
Inapp,,,,,Bot\r
Webchat,,PM,App Navigation,Profile - Second Pet,Human\r
Inapp,,4g mini,Subs Mapping,Wrong Plan purchased,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,Subs Cancellation,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,Waggle Cam pro,Connection,Reconfigure,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,Subs Activation,Combo Plan,Human\r
Inapp,,4g mini,Connection,,Human\r
Webchat,,PM,Subs Cancellation,,Human\r
Webchat,,4g mini,Presales,Subs Inquiry,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,4g mini,Connection,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,Subs Reactivation,,Human\r
Webchat,,PM,DNR,,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,Waggle Cam pro,Connection,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,RV Mini Cam,Subs Cancellation,,Human\r
Inapp,,PM,App Navigation,Change Pet Profile,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,Subs Reactivation,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,PM,Device Query,Functionalities,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,Device Removal,,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,4g mini,Motion Alerts,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,Device Removal,,Human\r
Inapp,,Waggle.Org,NA,NA,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,Subs Activation,Price Inquiry,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,NA,No Reason,,Bot\r
Inapp,,,,,Bot\r
Webchat,,NA,No Reason,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,RV Mini Cam,Return and Refund,,Human\r
Inapp,,PM,Subs Cancellation,,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,RV Mini Cam,Registration Issue,,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,4g mini,Connection,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Webchat,,4g mini,Presales,Combo Plan,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,PM,Subs Activation,Discount Request,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,PM,Presales,Device Model Query,Human\r
Webchat,,,,,Bot\r
Inapp,,4g camera,App Loading,,Human\r
Inapp,,PM,App Query,Turn Off,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,PM,Subs Reactivation,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,PM,Subs Activation,Discount Request,Human\r
Inapp,,,,,Bot\r
Inapp,,PM,Subs Cancellation,,Human\r
Webchat,,4g mini,SIM Card not Found,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,Device Removal,,Human\r
Inapp,,RV Mini Cam,Connection,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,4g mini,Accessories,,Human\r
Inapp,,4g mini,Subs Reactivation,Downgrade,Human\r
Webchat,,,,,Bot\r
Webchat,,4g mini,Accessories,,Human\r
Webchat,,4g mini,App Navigation,Pan Issue,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,RV Mini Cam,Connection,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,4g mini,Discount Code Request,,Human\r
Webchat,,,,,Bot\r
Webchat,,4g mini,Discount Code Request,,Human\r
Inapp,,4g mini,Motion Alerts,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,4g mini,Discount Code Request,,Human\r
Inapp,,4g mini,Subs Mapping,,Human\r
Webchat,,4g mini,Plan Mapping,,Human\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,Discount Code Request,,Human\r
Inapp,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,PM,Accessories,Stock Issue,Human\r
Webchat,,,,,Bot\r
Webchat,,PM,Subs Activation,Combo Plan,Human\r
Inapp,,Waggle.Org,NA,,Human\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Webchat,,RV Mini Cam,Presales,Functionalities,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,4g camera,Device Query,Mounting,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,,PM,Subs Activation,Subs Inquiry,Human\r
Inapp,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,,,,Bot\r
Inapp,,PM,App Issue,Unable to proceed after payment,Human\r
Inapp,,RV Mini Cam,Connection,,Human\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Webchat,,,,,Bot\r
Inapp,,PM,DNR,,Human\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,PM,Subs Mapping,,Human\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,PM,App Navigation,Profile - Second Pet,Human\r
Inapp,2026-04-01,4g mini,Subs Mapping,Wrong Plan purchased,Human\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,PM,Subs Cancellation,,Human\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,Waggle Cam pro,Connection,Reconfigure,Human\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,PM,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-01,4g mini,Connection,,Human\r
Webapp,2026-04-01,PM,Subs Cancellation,,Human\r
Webapp,2026-04-01,4g mini,Presales,Subs Inquiry,Human\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Inapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,4g mini,Connection,,Human\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-01,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,PM,Subs Reactivation,,Human\r
Webapp,2026-04-02,PM,DNR,,Human\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,PM,DNR,,Human\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,Waggle Cam pro,Connection,,Human\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,PM,DNR,,Human\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,RV Mini Cam,Subs Cancellation,,Human\r
Inapp,2026-04-02,PM,App Navigation,Change Pet Profile,Human\r
Webapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,PM,Subs Reactivation,,Human\r
Webapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,PM,Device Query,Functionalities,Human\r
Inapp,2026-04-02,,,,Bot\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,PM,DNR,,Human\r
Webapp,2026-04-02,,,,Bot\r
Inapp,2026-04-02,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,PM,Device Removal,,Human\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,4g mini,Motion Alerts,,Human\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,PM,Device Removal,,Human\r
Inapp,2026-04-03,Waggle.Org,NA,NA,Bot\r
Inapp,2026-04-03,PM,DNR,,Human\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,PM,Subs Activation,Price Inquiry,Human\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,NA,No Reason,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,NA,No Reason,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Webapp,2026-04-03,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,RV Mini Cam,Return and Refund,,Human\r
Inapp,2026-04-04,PM,Subs Cancellation,,Human\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,RV Mini Cam,Registration Issue,,Human\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,4g mini,Connection,,Human\r
Webapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,PM,DNR,,Human\r
Webapp,2026-04-04,4g mini,Presales,Combo Plan,Human\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,PM,DNR,,Human\r
Inapp,2026-04-04,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,PM,Presales,Device Model Query,Human\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,4g camera,App Loading,,Human\r
Inapp,2026-04-04,PM,App Query,Turn Off,Human\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,PM,DNR,,Human\r
Webapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,PM,Subs Reactivation,,Human\r
Webapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,,,,Bot\r
Webapp,2026-04-04,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-04,,,,Bot\r
Inapp,2026-04-04,PM,Subs Cancellation,,Human\r
Webapp,2026-04-05,4g mini,SIM Card not Found,,Human\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,PM,Device Removal,,Human\r
Inapp,2026-04-05,RV Mini Cam,Connection,,Human\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,4g mini,Accessories,,Human\r
Inapp,2026-04-05,4g mini,Subs Reactivation,Downgrade,Human\r
Webapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,4g mini,Accessories,,Human\r
Webapp,2026-04-05,4g mini,App Navigation,Pan Issue,Human\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,RV Mini Cam,Connection,,Human\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,4g mini,Discount Code Request,,Human\r
Webapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,4g mini,Discount Code Request,,Human\r
Inapp,2026-04-05,4g mini,Motion Alerts,,Human\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,4g mini,Discount Code Request,,Human\r
Inapp,2026-04-05,4g mini,Subs Mapping,,Human\r
Webapp,2026-04-05,4g mini,Plan Mapping,,Human\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Webapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,,,,Bot\r
Inapp,2026-04-05,PM,Discount Code Request,,Human\r
Inapp,2026-04-06,PM,DNR,,Human\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,PM,DNR,,Human\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,PM,Accessories,Stock Issue,Human\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,PM,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-06,Waggle.Org,NA,,Human\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,PM,DNR,,Human\r
Webapp,2026-04-06,RV Mini Cam,Presales,Functionalities,Human\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,4g camera,Device Query,Mounting,Human\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,PM,DNR,,Human\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,PM,DNR,,Human\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,PM,DNR,,Human\r
Inapp,2026-04-06,PM,Subs Activation,Subs Inquiry,Human\r
Inapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,PM,App Issue,Unable to proceed after payment,Human\r
Inapp,2026-04-06,RV Mini Cam,Connection,,Human\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Webapp,2026-04-06,,,,Bot\r
Inapp,2026-04-06,PM,DNR,,Human\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,PM,DNR,,Human\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,PM,DNR,,Human\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,PM,DNR,,Human\r
Webapp,2026-04-07,PM,Presales,Functionalities,Human\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,PM,DNR,,Human\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,PM,DNR,,Human\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,PM,GPS,Lost device Location,Human\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,4g mini,Barking Alert,Feature Request,Human\r
Webapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,Waggle.Org,NA,,Human\r
Webapp,2026-04-07,4g mini,Subs Activation,Combo Plan,Human\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Webapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Inapp,2026-04-07,,,,Bot\r
Webapp,2026-04-08,4g mini,App Navigation,Turn Off Light,Human\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,PM,ERROR 121,,Human\r
Inapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,PM,Registration Issue,Old device,Human\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,4g mini,Device Query,Functionalities,Human\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,NA,NA,NA,Human\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,PM,GPS,Unable change Location,Human\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,PM,Presales,Device Query,Human\r
Inapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,RV Mini Cam,Presales,Device Query,Human\r
Inapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,4g camera,Mounting,Solar Panel,Human\r
Webapp,2026-04-08,,,,Bot\r
Inapp,2026-04-08,,,,Bot\r
Webapp,2026-04-08,PM,ERROR 121,,Human\r
Inapp,2026-04-08,PM,DNR,,Human\r
Webapp,2026-04-08,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,PM,DNR,,Human\r
Webapp,2026-04-09,PM,Order Cancel,Subs Cost,Human\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,PM,Device Query,Outside USA,Human\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,PM,AQI,Carbon monoxide Query,Human\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,4g mini,Device Query,Auto Tracking,Human\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,PM,DNR,,Human\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,PM,App Navigation,Email Alert Enable,Human\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,PM,No Reason,Contact Support,Human\r
Inapp,2026-04-09,4g mini,Connection,,Human\r
Inapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,PM,No Reason,Contact Support,Human\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,PM,No Reason,Contact Support,Human\r
Inapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,PM,Subs Activation,Discount Request,Human\r
Webapp,2026-04-09,PM,Order Cancel,By Mistake,Human\r
Inapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,RV Mini Cam,Device Query,Temp Request,Human\r
Inapp,2026-04-09,PM,Pet Profile,Dog Breed,Human\r
Webapp,2026-04-09,PM,Order Cancel,By Mistake,Human\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,PM,Charging Issue,,Human\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,4g mini,App Navigation,Data Usage Request,Human\r
Inapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,4g camera,App Navigation,Motion Detection,Human\r
Webapp,2026-04-09,,,,Bot\r
Webapp,2026-04-09,,,,Bot\r
Inapp,2026-04-09,PM,Subs Activation,Plan Upgrade,Human\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,PM,False PLPB,,Human\r
Webapp,2026-04-10,PM,DNR,,Human\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,RV Mini Cam,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,PM,Return and Refund,,Human\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,PM,DNR,,Human\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,PM,DNR,,Human\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,PM,Return and Refund,,Human\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,PM,Return and Refund,Refund Status,Human\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,PM,Subs Activation,Subs Inquiry,Human\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,PM,App Navigation,Update Phone No,Human\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,PM,DNR,,Human\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Webapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,,,,Bot\r
Inapp,2026-04-10,4g mini,Connection,,Human\r
Inapp,2026-04-11,RV Mini Cam,Subs Cancellation,,Human\r
Inapp,2026-04-11,4g mini,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,4g mini,Email change,,Human\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,PM,DNR,,Human\r
Inapp,2026-04-11,4g mini,App Navigation,Live Streaming,Human\r
Inapp,2026-04-11,PM,DNR,,Human\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,PM,Registration Issue,Multiple Devices,Human\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,RV Mini Cam,App Navigation,Notification Sound,Human\r
Inapp,2026-04-11,PM,Device Removal,,Human\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,PM,Subs Mapping,,Human\r
Inapp,2026-04-11,PM,Device Removal,,Human\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,PM,App Navigation,Payment Method,Human\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,PM,App Navigation,Payment Method,Human\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,4g camera,Playback Issue,,Human\r
Inapp,2026-04-11,Waggle Cam pro,Treat Toss Issue,,Human\r
Webapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,PM,Order Cancel,Wrong Address,Human\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,PM,DNR,,Human\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,RV Mini Cam,Subs Cancellation,,Human\r
Inapp,2026-04-11,,,,Bot\r
Inapp,2026-04-11,PM,Subs Reactivation,,Human\r
Inapp,2026-04-11,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,4g mini,Streaming Issue,,Human\r
Webapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,PM,Battery Issue,,Human\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,4g mini,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,RV Mini Cam,Auto Tracking,,Human\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,PM,Subs Activation,Price Inquiry,Human\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,NA,Wrong Cam Model,,Human\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,4g mini,Subs Activation,Combo Plan,Human\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Webapp,2026-04-12,,,,Bot\r
Inapp,2026-04-12,,,,Bot\r
Inapp,2026-04-13,PM,Device Removal,,Human\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,PM,Replacement,Older Device,Human\r
Inapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,PM,DNR,,Human\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,PM,Subs Activation,Discount Request,Human\r
Webapp,2026-04-13,4g mini,App Navigation,Spotlight,Human\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,PM,Subs Cancellation,,Human\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,PM,Return and Refund,,Human\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,RV Mini Cam,Subs Activation,Price Inquiry,Human\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,4g mini,Presales,Discount Request,Human\r
Webapp,2026-04-13,PM,Subs Activation,Subs Cost,Human\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,4g mini,App Navigation,Delete Recording,Human\r
Inapp,2026-04-13,RV Mini Cam,App Issue,Delete Recording,Human\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,PM,DNR,,Human\r
Webapp,2026-04-13,PM,Subs Cancellation,,Human\r
Webapp,2026-04-13,4g camera,App Navigation,Turn Off Light,Human\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,PM,Order,Tracking,Human\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,PM,Order,Wrong Item received,Human\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,PM,DNR,,Human\r
Inapp,2026-04-13,4g mini,No SD Card Found,,Human\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-13,,,,Bot\r
Webapp,2026-04-13,,,,Bot\r
Inapp,2026-04-14,PM,Registration Issue,Used Device,Human\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,PM,Subs Cancellation,,Human\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,Smart Sensor,Presales,Functionalities,Human\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,PM,Presales,Discount Request,Human\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,PM,Subs Cancellation,,Human\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,PM,Device Query,AQI,Human\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,PM,DNR,,Human\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,4g mini,Subs Activation,Subs Inquiry,Human\r
Inapp,2026-04-14,RV Mini Cam,Connection,,Human\r
Webapp,2026-04-14,4g mini,Presales,Functionalities,Human\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,PM,Login Issue,,Human\r
Webapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,,,,Bot\r
Inapp,2026-04-14,PM,Registration Issue,,Human\r
Inapp,2026-04-14,PM,Device Query,Shut Down,Human\r
Inapp,2026-04-14,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,PM,Temp Difference,,Human\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,PM,Temp Difference,,Human\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,4g mini,Connection,,Human\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,PM,DNR,,Human\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,PM,PLPB,,Human\r
Inapp,2026-04-15,PM,DNR,,Human\r
Inapp,2026-04-15,4g mini,App Query,Share Video,Human\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,4g mini,Subs Activation,Flexi Plan Query,Human\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,4g camera,App Navigation,Auto Tracking,Human\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Webapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-15,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,PM,Subs Activation,Discount Request,Human\r
Webapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,4g camera,App Navigation,Auto Tracking,Human\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,PM,Subs Reactivation,Query,Human\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,PM,DNR,,Human\r
Webapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Webapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,PM,Order,Missed to apply coupon,Human\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-16,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-17,PM,DNR,SIM not found,Human\r
Inapp,2026-04-17,PM,DNR,,Human\r
Inapp,2026-04-17,PM,Geo Fence Issue,,Human\r
Inapp,2026-04-17,PM,DNR,,Human\r
Inapp,2026-04-17,PM,Login Issue,Different Email,Human\r
Inapp,2026-04-17,PM,SIM Card not Found,,Human\r
Inapp,2026-04-17,Waggle Cam pro,Plan Mapping,,Human\r
Inapp,2026-04-17,4g mini,App Navigation,Payment Method,Human\r
Inapp,2026-04-17,PM,Temp Difference,,Human\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,PM,Plan Mapping,,Human\r
Inapp,2026-04-17,PM,Registration Issue,Used Device,Human\r
Webapp,2026-04-17,4g mini,App Issue,Unable to register,Human\r
Webapp,2026-04-17,PM,Subs Cancellation,Query,Human\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Inapp,2026-04-18,PM,Subs Activation,Presales,Human\r
Inapp,2026-04-18,PM,Device Query,Display related,Human\r
Inapp,2026-04-18,4g mini,App Navigation,Turn Off Light,Human\r
Inapp,2026-04-18,RV Mini Cam,Order,Unable Enter Address,Human\r
Inapp,2026-04-18,4g camera,Presales,Functionalities,Human\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-17,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-18,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-19,,,,Bot\r
Inapp,2026-04-18,RV Mini Cam,Connection,,Human\r
Inapp,2026-04-18,RV Mini Cam,Connection,,Human\r
Inapp,2026-04-18,PM,PLPB,Query,Human\r
Webapp,2026-04-18,PM,Order Cancel,,Human\r
Webapp,2026-04-18,PM,Subs Cancellation,,Human\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-17,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-18,,,,Bot\r
Webapp,2026-04-19,,,,Bot\r
Webapp,2026-04-19,,,,Bot\r
Webapp,2026-04-19,,,,Bot\r
Webapp,2026-04-19,,,,Bot\r
Webapp,2026-04-18,PM,App Issue,Apple Watch,Human\r
Inapp,2026-04-19,PM,App Navigation,CO2 Query,Human\r
Inapp,2026-04-19,PM,App Navigation,CO Query,Human\r
Inapp,2026-04-19,PM,Subs Cancellation,,Human\r
Inapp,2026-04-19,PM,Subs Activation,Price Inquiry,Human\r
Inapp,2026-04-19,PM,Device Removal,,Human\r
Inapp,2026-04-19,PM,Return and Refund,,Human\r
Inapp,2026-04-19,PM,Subs Mapping,,Human\r
Inapp,2026-04-19,,,,Bot\r
Webapp,2026-04-19,PM,App Navigation,Multi User,Human\r
Webapp,2026-04-19,PM,Device Query,LED Indicators,Human\r
Webapp,2026-04-19,PM,Subs Cancellation,,Human\r
Webapp,2026-04-19,,,,Bot\r
Webapp,2026-04-19,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,4g mini,Connection,,Human\r
Inapp,2026-04-20,PM,DNR,,Human\r
Inapp,2026-04-20,4g mini,Registration Issue,Ownership Transfer,Human\r
Inapp,2026-04-20,4g camera,Mounting Query,,Human\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,,,,Bot\r
Inapp,2026-04-20,PM,Plan Mapping,,Human\r
Inapp,2026-04-20,PM,DNR,,Human\r
Inapp,2026-04-20,PM,Device Query,Bark Alert,Human\r
Inapp,2026-04-20,PM,Device Query,Battery Level Indicator,Human\r
Inapp,2026-04-20,RV Mini Cam,App Navigation,Motion Detection,Human\r
Inapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,4g camera,Return and Refund,,Human\r
Webapp,2026-04-20,4g mini,Connection,SIM out of service,Human\r
Webapp,2026-04-20,PM,Subs Cancellation,,Human\r
Webapp,2026-04-20,,,,Bot\r
Webapp,2026-04-20,4g mini,Not Turning On,,Human\r
Webapp,2026-04-20,4g mini,Subs Query,,Human\r
Webapp,2026-04-20,,,,Bot\r
Inapp,2026-04-21,4g mini,Connection,,Human\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,PM,Temp Difference,,Human\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,PM,Subs Cancellation,,Human\r
Webapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Webapp,2026-04-21,4g mini,Two Way Audio issue,,Human\r
Inapp,2026-04-21,,,,Bot\r
Webapp,2026-04-21,4g mini,Two Way Audio issue,,Human\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,RV Mini Cam,App Navigation,Flip Video,Human\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Webapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,,,,Bot\r
Webapp,2026-04-21,,,,Bot\r
Inapp,2026-04-21,PM,DNR,,Human\r
Webapp,2026-04-21,,,,Bot\r
Webapp,2026-04-21,,,,Bot\r
Webapp,2026-04-21,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,PM,PLPB,Query,Human\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,PM,App Issue,Profle Update,Human\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,4g mini,Subs Activation,Flexi Plan query,Human\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,NA,Contact Support,,Human\r
Webapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,PM,DNR,,Human\r
Inapp,2026-04-22,RV Mini Cam,Set Up,Connection,Human\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,4g mini,App Navigation,Combo Plan,Human\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,Waggle Cam pro,App Navigation,Alerts Related,Human\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Webapp,2026-04-22,PM,DNR,,Human\r
Inapp,2026-04-22,PM,DNR,,Human\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,,,,Bot\r
Inapp,2026-04-22,RV Mini Cam,Conneciton,,Human\r
Inapp,2026-04-23,PM,Subs Activation,Discount Request,Human\r
Inapp,2026-04-23,4g mini,User Guide Request,Pan Related,Human\r
Inapp,2026-04-23,PM,DNR,,Human\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,PM,Order,Charger,Human\r
Inapp,2026-04-23,PM,App Navigation,Change Billing Address,Human\r
Webapp,2026-04-23,PM,DNR,,Human\r
Webapp,2026-04-23,,,,Bot\r
Webapp,2026-04-23,4g mini,Presales,Price Inquiry,Human\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,4g mini,App Issue,Cam not showing,Human\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,PM,Subs Cancellation,,Human\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,4g mini,Trial Plan Query,,Human\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,PM,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Webapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,4g mini,Device Removal,,Human\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-23,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,NA,Contact Support,NA,Human\r
Webapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,PM,Presales,Subs Inquiry,Human\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,4g mini,Streaming,Other device,Human\r
Webapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,PM,Order,Canada Order,Human\r
Inapp,2026-04-24,PM,DNR,,Human\r
Inapp,2026-04-24,PM,Subs Cancellation,Further Steps,Human\r
Webapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,PM,DNR,,Human\r
Webapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,PM,DNR,,Human\r
Inapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,,,,Bot\r
Webapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,PM,Spanish Language,Warranty Query,Human\r
Inapp,2026-04-24,,,,Bot\r
Inapp,2026-04-24,RV Mini Cam,Connection,,Human\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,PM,Subs Activation,Query,Human\r
Webapp,2026-04-25,PM,PLPB,Query,Human\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,PM,Presales,Cellular Network,Human\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,PM,Warranty,Unable to claim,Human\r
Webapp,2026-04-25,PM,Warranty,Unable to claim,Human\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,4g mini,Device Query,Functionalities,Human\r
Webapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,4g mini,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,PM,DNR,,Human\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,PM,DNR,,Human\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,PM,DNR,,Human\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,PM,DNR,,Human\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,PM,DNR,,Human\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,PM,Warranty,Unable to claim,Human\r
Inapp,2026-04-25,RV Mini Cam,Registration Issue,Unable to register,Human\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,4g mini,App Navigation,Delete Recording,Human\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Webapp,2026-04-25,,,,Bot\r
Inapp,2026-04-25,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,PM,Warranty,Unable to claim,Human\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,4g mini,Charging Query,,Human\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,PM,Warranty,Unable to claim,Human\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,PM,Warranty,Unable to claim,Human\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,PM,DNR,,Human\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,PM,Warranty,Unable to claim,Human\r
Webapp,2026-04-26,4g mini,Subs Activation,Discount Request,Human\r
Inapp,2026-04-26,PM,DNR,,Human\r
Inapp,2026-04-26,,,,Bot\r
Inapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,4g mini,Return and Refund,Outside Window,Human\r
Webapp,2026-04-26,,,,Bot\r
Webapp,2026-04-26,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,PM,Subs Reactivation,Issue,Human\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,4g mini,Multi User Access,,Human\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,PM,DNR,,Human\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,PM,DNR,,Human\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,PM,Return and Refund,,Human\r
Inapp,2026-04-27,PM,Subs Cancellation,Further Steps,Human\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,4g mini,Return and Refund,Mistakenly Ordered two,Human\r
Webapp,2026-04-27,4g mini,Multi User Access,,Human\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,PM,Device Query,Functionalities,Human\r
Inapp,2026-04-27,PM,DNR,,Human\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,PM,Subs Activation,Query,Human\r
Webapp,2026-04-27,PM,Warranty,Unable to claim,Human\r
Inapp,2026-04-27,PM,Subs Cancellation,,Human\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,PM,Warranty,Unable to claim,Human\r
Inapp,2026-04-27,PM,DNR,,Human\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,4g camera,Subs Activation,Combo Plan,Human\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
Webapp,2026-04-27,,,,Bot\r
Inapp,2026-04-27,,,,Bot\r
\r
\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,DNR,,Human\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,Alert Query,SMS Alert,Human\r
Inapp,2026-04-29,PM,Alert Query,SMS on SPAM,Human\r
Inapp,2026-04-29,PM,App Navigation,Alert Turn Off,Human\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,NA,Contact Support,Human\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,False PLPB,,Human\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,App Issue,Notification Related - Fully Charged,Human\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,PM,DNR,,Human\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,PM,Account Related,Update Phone No,Human\r
Inapp,2026-04-29,PM,App Issue,Notification Related - Fully Charged,Human\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,App Issue,Notification Related - Fully Charged,Human\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,DNR,,Human\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,,,,Bot\r
Webapp,2026-04-29,,,,Bot\r
Inapp,2026-04-29,PM,Subs Activation,Different Email Used,Human\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,PM,Subs Mapping,Replacement Device,Human\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,4g Mini,App Issue,Plan Purchase,Human\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,4g Mini,Presales,Combo Plan,Human\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,PM,App Issue,Change Pet Profile,Human\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,4g Mini,Subs Mapping,,Human\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,4g Mini,Connection,,Human\r
Inapp,2026-04-30,PM,Subs Mapping,,Human\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,PM,DNR,,Human\r
Inapp,2026-04-30,PM,Subs Activation,Ownership Transfer,Human\r
Inapp,2026-04-30,,,,Bot\r
Webapp,2026-04-30,,,,Bot\r
Inapp,2026-04-30,PM,Subs Reactivation,Query,Human\r

Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Webapp,2026-04-28,,,,Bot
Inapp,2026-04-28,4g Mini,Connection,,Human
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
Webapp,2026-04-28,4g Mini,Device Query,Charger Selection,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,PM,Subs Cancellation,,Human
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,,,,Bot
Inapp,2026-04-28,PM,Subs Activation,Payment Issue - CAD,Human
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
Webapp,2026-04-28,,,,Bot`;function SY(){const[e,t]=X.useState([]),[n,r]=X.useState([]),[a,i]=X.useState("all"),[s,l]=X.useState("all"),[p,f]=X.useState([]),[m,d]=X.useState("overview"),[v,y]=X.useState(null),x=X.useRef(null),[I,b]=X.useState(null),S=X.useRef([]);X.useEffect(()=>{S.current=e},[e]);const A=$=>{if(!$)return $;const G=$.trim(),U=G.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(U){const[,Q,L,K]=U;return`${K.padStart(2,"0")}-${L.padStart(2,"0")}-${Q}`}const z=G.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(z){const[,Q,L,K]=z;return`${Q.padStart(2,"0")}-${L.padStart(2,"0")}-${K}`}return G};X.useEffect(()=>{let $=[];dI.parse(PY,{header:!0,skipEmptyLines:!0,complete:G=>{$=G.data.map(z=>({channel:z.Channel||z.channel||"",createdAt:A(z["Created at"]||z.createdAt||z["Created date"]||""),product:z.Product||z.product||"",issue:z.Issue||z.issue||"",subType:z["Sub Type"]||z.subType||"",handled:z.Handled||z.handled||""}));const U=localStorage.getItem("waggle_manual_data");if(U)try{const z=JSON.parse(U);Array.isArray(z)&&($=[...$,...z])}catch{}t($)}})},[]);const _=X.useMemo(()=>{const $=["january","february","march","april","may","june","july","august","september","october","november","december"],G=new Set;return e.forEach(U=>{try{const z=yr(U.createdAt);if(!isNaN(z.getTime())){const Q=$[z.getMonth()];G.add(`${Q}-${z.getFullYear()}`)}}catch{}}),Array.from(G).sort((U,z)=>{const[Q,L]=U.split("-"),[K,Y]=z.split("-");return L!==Y?parseInt(L)-parseInt(Y):$.indexOf(Q)-$.indexOf(K)})},[e]);X.useEffect(()=>{f(a&&a!=="all"?PA(a):[]),l("all")},[a]),X.useEffect(()=>{e.length>0&&w(a,s)},[s,a,e]);const M=$=>{var U;const G=(U=$.target.files)==null?void 0:U[0];G&&(dI.parse(G,{header:!0,skipEmptyLines:!0,complete:z=>{if(!z.data.length){b({type:"error",message:"The CSV file appears to be empty."});return}const Q=z.data.map(Y=>({channel:Y.Channel||Y.channel||"",createdAt:A(Y["Created at"]||Y.createdAt||""),product:Y.Product||Y.product||"",issue:Y.Issue||Y.issue||"",subType:Y["Sub Type"]||Y.subType||"",handled:Y.Handled||Y.handled||""})),L=new Set(S.current.map(Y=>`${Y.channel}|${Y.createdAt}|${Y.product}|${Y.issue}|${Y.subType}|${Y.handled}`)),K=Q.filter(Y=>!L.has(`${Y.channel}|${Y.createdAt}|${Y.product}|${Y.issue}|${Y.subType}|${Y.handled}`));if(K.length>0){const Y=[...JSON.parse(localStorage.getItem("waggle_manual_data")||"[]"),...K];localStorage.setItem("waggle_manual_data",JSON.stringify(Y)),t(j=>[...j,...K])}b({type:K.length>0?"success":"error",message:K.length>0?`Added ${K.length} rows.`:"No new rows found."}),setTimeout(()=>b(null),5e3)}}),$.target.value="")},w=($,G)=>{let U=e;if($!=="all"&&(U=e.filter(z=>{const Q=yr(z.createdAt);return Ev(Q,$)})),G!=="all"){const z=p.find(Q=>Q.value===G);z&&(U=U.filter(Q=>SA(yr(Q.createdAt),z)))}r(U)},O=Tv(n),E=Nv(n),P=AA(n),C=oR(n),N=aR(e,a),H=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],T=(a==="all"?_:[a]).map(($,G)=>{const U=e.filter(K=>Ev(yr(K.createdAt),$)),[z,Q]=$.split("-"),L=H[G%H.length];return{name:`${z.charAt(0).toUpperCase()+z.slice(1)} ${Q}`,shortName:`Month ${G+1}`,data:U,metrics:Tv(U),channels:Nv(U),colorFrom:L.from,colorTo:L.to}});return W.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:W.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[W.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[W.jsxs("div",{children:[W.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",W.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.2"})]}),W.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),W.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[W.jsxs("select",{value:a,onChange:$=>i($.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[W.jsx("option",{value:"all",children:"All Months"}),_.map($=>W.jsxs("option",{value:$,children:[$.split("-")[0].charAt(0).toUpperCase()+$.split("-")[0].slice(1)," ",$.split("-")[1]]},$))]}),W.jsxs("select",{value:s,onChange:$=>l($.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[W.jsx("option",{value:"all",children:"All Weeks"}),p.map($=>W.jsx("option",{value:$.value,children:$.label},$.value))]}),W.jsx("input",{ref:x,type:"file",accept:".csv",onChange:M,className:"hidden"}),W.jsxs(BI,{onClick:()=>{var $;return($=x.current)==null?void 0:$.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[W.jsx(UE,{className:"w-4 h-4 mr-2"})," Add Data"]}),W.jsxs(BI,{onClick:()=>iR(n),variant:"outline",className:"bg-white",children:[W.jsx(GE,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),I&&W.jsx(zn,{className:`border ${I.type==="success"?"bg-green-50":"bg-red-50"}`,children:W.jsxs(Un,{className:"p-4 flex items-center justify-between",children:[W.jsx("p",{className:"font-medium",children:I.message}),W.jsx("button",{onClick:()=>b(null),children:W.jsx(tT,{className:"w-4 h-4"})})]})}),a==="all"&&W.jsx("div",{className:"flex justify-center",children:W.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[W.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),W.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?W.jsx(wY,{monthsData:T,weeklyEscalation:N}):W.jsxs(W.Fragment,{children:[W.jsx(uR,{metrics:O}),W.jsx(oM,{metrics:O,topChannel:E[0],top5Products:P.slice(0,5),top5Issues:Rv(n,5),monthCount:a==="all"?_.length:1}),W.jsx(eM,{data:N,instanceId:"detailed-analysis"}),W.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[W.jsx(tM,{data:E}),W.jsx(IY,{data:P})]}),W.jsx(zn,{children:W.jsx(Un,{className:"p-6",children:W.jsxs(ME,{defaultValue:"issues",className:"w-full",children:[W.jsxs(CE,{className:"grid w-full grid-cols-2 max-w-md",children:[W.jsx(xI,{value:"issues",children:"Issue Analysis"}),W.jsx(xI,{value:"sessions",children:"Detailed Sessions"})]}),W.jsx(wI,{value:"issues",className:"mt-6",children:W.jsx(BY,{data:C})}),W.jsx(wI,{value:"sessions",className:"mt-6",children:W.jsx(xY,{data:n})})]})})})]})]})})}pk.createRoot(document.getElementById("root")).render(W.jsx(SY,{}));
